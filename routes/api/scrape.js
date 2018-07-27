const router = require("express").Router();
const cheerio = require("cheerio");
const async = require('async');
const axios = require('axios');
const db = require("../../models");

const searchUrl = "https://www.voacolorado.org/volunteer-opportunities?opportunity_type=all&audience_type=all&time_required=all&city=all";

router.get("/", function (req, res) {

    let promises = [];
    let data = [];

    // Request the volunteer page.
    axios.get(searchUrl)
        .then(function(response){
            // set the HTNML to Cherio
            var $ = cheerio.load(response.data);

            // Loop through all opps
            $(".list--generic--two li").each(function (i, element) {
                // Get the link to the detail page
                let link = 'https://www.voacolorado.org' + $(element).find('h2 a').attr('href');

                // Add the detail page to an array so we can call them in parallel
                promises.push(axios.get(link))

            })

            axios.all(promises)
                .then(function(results) {
                    results.forEach(function(response){

                        var $ = cheerio.load(response.data);

                        const opportunityData = {
                            organization: $('h1.housing-show__header__hdr').text(),
                            coordinator: $('.details__item').eq(1).find('p').text(),
                            email: $('ul.housing-show__buttons').find("a").attr("href"),
                            phone: $('ul.housing-show__buttons').children().last().text(),
                            location: $('.details__item').first().find('p').text(),
                            description: $('div.text').find('p').first(0).text(),
                            link: "https://www.voacolorado.org" + $('div.nav--sibling').find('li').find('a').attr('href')
                        };

                        let query = {link: opportunityData.link};

                        data.push(opportunityData)

                        db.Info.findOneAndUpdate(query, opportunityData, {upsert:true}, function(err, doc){
                            if (err) return res.send(500, { error: err });
                        });
                    })
                    return res.json(data);
                })
                .catch(function(err){
                    console.log(err)
                })

        })
        .catch(function(err){
            console.log(err)
        });

});

module.exports = router;
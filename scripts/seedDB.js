const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/volunteerApp");

const volunteerSeed = [
    {
        organization: "Snow Buddies",
        coordinator: "Molly Barfuss",
        email: "mailto:mbarfuss@voacolorado.org?subject=RE%3A%20Snow%20Buddies",
        phone: "303-297-0408",
        location: "Denver, CO",
        description: "Keep a limited income senior safe by shoveling his or her sidewalks throughout the snowy seasons.",
        link: "https://www.voacolorado.org/volunteer-opportunities/snow-buddies"
    },
    {
        organization: "Hanyperson",
        coordinator: "Wayne Chitwood",
        email: "wchitwood@voacolorado.org?subject=RE%3A%20Handyperson",
        phone: "303-297-0408",
        location: "Denver, CO",
        description: "Help seniors stay safely in their homes by providing minor home repairs and safety modifications for limited-income seniors.",
        link: "https://www.voacolorado.org/volunteer-opportunities/handyperson"
    },
    {
        organization: "Yard Angels",
        coordinator: "Yard Angels",
        email: "mailto:mbarfuss@voacolorado.org?subject=RE%3A%20Yard%20Angels%20",
        phone: "303-297-0408",
        location: "2660 Larimer St., Denver, CO",
        description: "Simple yard work can be a huge task for seniors. Yard Angel volunteers help alleviate some of this burden and keep seniors safe.",
        link: "https://www.voacolorado.org/volunteer-opportunities/yard-angels"
    }
];

db.Info
  .remove({})
  .then(() => db.Info.collection.insertMany(volunteerSeed))
  .then(data => {
      console.log(data.result.n + "records inserted");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });
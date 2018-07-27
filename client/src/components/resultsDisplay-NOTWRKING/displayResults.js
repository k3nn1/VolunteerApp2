import React from "react";
import "./displayResults.css";
import "../../../../models/info"


function displayResults(data) {
    // first empty table
    $("tbody").empty();

    // Then for each entry of that json...
    info.forEach(function(data) {
        // Append each of info's property to the table
        $("tbody").append("<tr><td>" + info.organization + "</td>" +
                            "<td>" + info.coodinator + "</td>" +
                            "<td>" + info.email + "</td>" + 
                            "<td>" + info.phone + "</td>" +
                            "<td>" + info.location + "</td>" +
                            "<td>" + info.description + "</td>" +
                            "<td>" + info.link + "</td></tr>");
    });
};

// Bonus function to change "active" header
function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
};

export default displayResults;
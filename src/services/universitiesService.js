var express = require("express");
const axios = require("axios");
const LINK_UNIVERSITIES = 'http://universities.hipolabs.com/search?country=';

exports.get = async function (country) {

    try {
        return await axios.get(LINK_UNIVERSITIES + country);
    } catch (ex) {
        ex.data;
    }

}

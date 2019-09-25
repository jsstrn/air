#!/usr/bin/env node

const weather = require("./lib/weather");
const getAdvisory = require("./lib/advisory");
const printResult = require("./lib/print");
const handleError = require("./lib/error");

weather()
  .then(getAdvisory)
  .then(printResult)
  .catch(handleError);

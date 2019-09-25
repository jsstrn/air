const fetch = require("node-fetch");

function weather() {
  const url = "https://api.waqi.info/feed/here/";
  const token = "95a64ba5dbf29702c3028bb8dc90ca21883324ad";
  const api = url + "?token=" + token;

  return fetch(api)
    .then(res => res.json())
    .then(res => {
      return res.data;
    });
}

module.exports = weather;

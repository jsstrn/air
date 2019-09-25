const airQualityMap = {
  "301": { text: "hazardous", emoji: "😷" },
  "201": { text: "very unhealthy", emoji: "😷" },
  "151": { text: "unhealthy", emoji: "😷" },
  "101": { text: "unhealthy for sensitive groups", emoji: "😷" },
  "51": { text: "moderate", emoji: "🙂" },
  "0": { text: "good", emoji: "😃" }
};

function getAdvisory(data) {
  let advisory = { text: "unknown", emoji: "🤷‍♀️" };
  Object.keys(airQualityMap).forEach(value => {
    advisory = data.aqi >= value ? airQualityMap[value] : advisory;
  });
  return { data, advisory };
}

module.exports = getAdvisory;

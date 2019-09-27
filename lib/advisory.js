const airQualityMap = {
  "301": { text: "hazardous", emoji: "😷", color: "darkred" },
  "201": { text: "very unhealthy", emoji: "😷", color: "purple" },
  "151": { text: "unhealthy", emoji: "😷", color: "crimson" },
  "101": { text: "unhealthy for sensitive groups", emoji: "😷", color: "orange" },
  "51": { text: "moderate", emoji: "🙂", color: "yellow" },
  "0": { text: "good", emoji: "😃", color: "green" }
};

function getAdvisory(data) {
  let advisory = { text: "unknown", emoji: "🤷‍♀️" };
  Object.keys(airQualityMap).forEach(value => {
    advisory = data.aqi >= value ? airQualityMap[value] : advisory;
  });
  return { data, advisory };
}

module.exports = getAdvisory;

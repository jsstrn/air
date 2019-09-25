const printResult = ({ data, advisory }) => {
  const aqi = data.aqi;
  const city = data.city.name;

  console.log(`${advisory.emoji}  ${aqi} AQI`);
  console.log(`🌏  ${city}`);

  console.log(
    `\n📢  The air quality index in ${city} is at ${aqi} which is in the ${advisory.text} range`
  );
};

module.exports = printResult;

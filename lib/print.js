const printResult = ({ data, advisory }) => {
  const aqi = data.aqi;
  const city = data.city.name;

  console.log(`${advisory.emoji}  ${aqi} AQI`);
  console.log(`🌏  ${city}`);
  console.log(
    `\n📢  The air quality index in ${city} is at ${aqi} which is in the ${advisory.text} range`
  );

  const attributions = data.attributions;
  console.log("\nData provided by: ");
  attributions.forEach(({ name, url }) => {
    console.log(`‣ ${name} - ${url}`);
  });
};

module.exports = printResult;

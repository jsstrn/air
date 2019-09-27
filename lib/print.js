const chalk = require('chalk')

const printData = (aqi, city, advisory) => {
  aqi = chalk.keyword(advisory.color).bold(aqi)
  city = chalk.keyword('dodgerblue').bold(city)
  advisory.text = chalk.keyword(advisory.color).bold(advisory.text)

  console.log(`${advisory.emoji}  ${aqi} AQI`);
  console.log(`🌏  ${city}`)
  console.log(
    `\n📢  The air quality index in ${city} is at ${aqi} which is in the ${advisory.text} range`
  );
}

const printAttributions = (attributions) => {
  console.log("\nData provided by: ");
  attributions.forEach(({ name, url }) => {
    console.log(`‣ ${name} - ${url}`);
  });
}

const printResult = ({ data, advisory }) => {
  printData(data.aqi, data.city.name, advisory);
  printAttributions(data.attributions)

};

module.exports = printResult;

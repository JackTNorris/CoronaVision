import {decode as atob} from 'base-64';
const csv = require('csvtojson');

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '-' + day + '-' + year;
}

export async function getVirusStats() {
  let dateFile = new Date();
  dateFile.setDate(dateFile.getDate() - 1);
  let response = await fetch(
    'https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_daily_reports/' +
      getFormattedDate(dateFile) +
      '.csv',
  );
  let responseJson = await response.json();
  let temp = [];
  await csv({noheader: true, output: 'csv'})
    .fromString(atob(responseJson.content))
    .then(csvRow => {
      for (let i = 1; i < csvRow.length; i++) {
        temp.push({
          provState: csvRow[i][0],
          countryReg: csvRow[i][1],
          updated: csvRow[i][2],
          deaths: csvRow[i][4],
          recovered: csvRow[i][5],
          confirmed: csvRow[i][3],
          latitude: parseFloat(csvRow[i][6]),
          longitude: parseFloat(csvRow[i][7]),
        });
      }
    });
  return temp;
}

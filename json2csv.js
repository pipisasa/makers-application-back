const { parse } = require('json2csv');
 
const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

const data = Array(10).fill(null).map(()=>({
  field1: parseInt(Math.random()*1000),
  field2: parseInt(Math.random()*1000),
  field3: parseInt(Math.random()*1000),
}));

// try {
//   const csv = parse(data, opts);
//   console.log(csv);
// } catch (err) {
//   console.error(err);
// }

// const { google } = require('googleapis');

// const sheets = google.sheets('v4');
// sheets.spreadsheets.create
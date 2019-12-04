const fs = require("fs");

// json data
var filename = "2015.json";
var outputname = "2015F.json";

var jsonData = require("../tobaccodeaths/" + filename);

// parse json
// var jsonObj = JSON.parse(jsonData);
// console.log(jsonObj);

// // stringify JSON Object
// var jsonContent = JSON.stringify(jsonObj);
// console.log(jsonContent);

var groupedData = [
  { name: "> 50", limit: 50, data: [] },
  { name: "30% - 50%", limit: 30, data: [] },
  { name: "15% - 30%", limit: 15, data: [] },
  { name: "5% - 15%", limit: 5, data: [] },
  { name: "1% - 5%", limit: 1, data: [] },
  { name: "< 1%", limit: 0, data: [] }
];

jsonData.forEach(each => {
  var maleFormat = parseFloat(each["Male Percent"]);
  var femaleFormat = parseFloat(each["Female Percent"]);

  var average = (maleFormat + femaleFormat) / 2;

  each.Male = maleFormat;
  each.Female = femaleFormat;
  each.Average = parseFloat(average.toFixed(2));

  for (var groupindex = 0; groupindex < groupedData.length; groupindex++) {
    if (each.Average > groupedData[groupindex].limit) {
      groupedData[groupindex].data.push(each);
      break;
    }
  }
});

var jsonContent = JSON.stringify(groupedData);
// console.log(jsonContent);

fs.writeFile("../tobaccodeaths/" + outputname, jsonContent, "utf8", function(
  err
) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});

// console.log(jsonData[0].Average);

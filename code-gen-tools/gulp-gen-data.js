
function genFileData(cb) {

    var code = require('./data/FileData.js')
    var dataItems = code.generate();

    let dataJson = JSON.stringify(dataItems, null, ' ')
    // console.log(dataJson);

    let outputPath = jsonDir + "/FileData/XPLAT.json";
    // console.log("saving " + dataItems.length + " items in " + outputPath);
    saveFile(outputPath, dataJson);

    cb();
}
exports.genFileData = genFileData;

function genFinancialData(cb) {

    var dataCategory = "Metals"; // Fuel, Currencies, Metals All
    var dataCount = 1000;
    var code = require('./data/FinancialData.js')
    var dataItems = code.generate(dataCount, dataCategory);

    let dataJson = JSON.stringify(dataItems, null, ' ')
    // console.log(dataJson);

    let outputPath = jsonDir + "/FinancialData" + dataCategory + "/XPLAT.json";
    // console.log("saving " + dataItems.length + " items in " + outputPath);
    saveFile(outputPath, dataJson);

    cb();
}
exports.genFinancialData = genFinancialData;



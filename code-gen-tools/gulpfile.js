let gulp = require('gulp');
let del = require('del');
let es = require('event-stream');
let fs = require('fs.extra');
let path = require('path');
let utils = require('./utils.js')
let request = require('request');

function log(msg) {
    console.log('>> ' + msg);
}
// console.log('loaded');

let CodeGenLib = "../code-gen-library";

gulp.task('testCodeGenLib', function(cb) {

    console.log('testCodeGenLib ' + toString());
    // console.log(process.argv);
    cb();
});

function saveFile(filePath, fileContent) {
    var dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname); // ensure directory exists
    }
    console.log("saving " + filePath);
    fs.writeFileSync(filePath, fileContent);
}

function saveJSON(filePath, dataItems, mode) {
    if (mode === undefined) {
        let jsonStr = JSON.stringify(dataItems, null, ' ')
        saveFile(filePath, jsonStr);
    }

    if (mode === "compact") {
        let lines = [];
        for (let i = 0; i < dataItems.length; i++) {
            const item = dataItems[i];
            let line = JSON.stringify(item);
            if (i < dataItems.length - 1) line += ","
            lines.push(line);
        }

        let jsonStr = "[\r\n" + lines.join('\r\n') + "\r\n]";
        jsonStr = utils.strReplace(jsonStr, ":", ": ")
        jsonStr = utils.strReplace(jsonStr, ',"', ', "')
        jsonStr = utils.strReplace(jsonStr, '{', '{ ')
        jsonStr = utils.strReplace(jsonStr, '}', ' }')

        saveFile(filePath, jsonStr);
    }
}

function toJSON(cb) {

    let input = CodeGenLib + "/TestData/SOURCE.json";
    let file = fs.readFileSync(input, "utf8");
    file = utils.strReplace(file, "    ", "  ");
    file = utils.strReplace(file, "'", '"');
    file = utils.strReplace(file, '""', '"');

    let lines = file.split('\r\n');

    let outputLines = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // skip comments
        if (line.indexOf("/*") >= 0) continue;
        if (line.indexOf("//") >= 0) continue;

        let parts = line.split(':');
        if (parts.length === 2) {

            let prop = parts[0].trim();
            let value = parts[1].trim();
            let start = line.indexOf(prop);

            outputLines.push(" ".repeat(start) + '"' + prop + '": ' + value);
        } else {
            outputLines.push(line);
        }
    }
    let outputContent = outputLines.join('\r\n');
    let outputPath = CodeGenLib + "/TestData/XPLAT.json";
    saveFile(outputPath, outputContent);

    console.log('toJSON');
    console.log(outputContent)
    cb();
}
exports.toJSON = toJSON;

function sortJSON(cb) {

    let filePath = CodeGenLib + "/WorldCitiesAbove15K/XPLAT.json";
    // let filePath = CodeGenLib + "/WorldCities/XPLAT.json";
    let file = fs.readFileSync(filePath, "utf8");
    let dataItems = JSON.parse(file);

    // dataItems = dataItems.sort((a, b) => a.Pop < b.Pop ? 1 : -1);
    dataItems = dataItems.sort((a, b) => a.Population < b.Population ? 1 : -1);

    for (let i = 0; i < dataItems.length; i++) {
        dataItems[i].ID = 10000 + i;
    }

    let newDataItems = [];
    for (const item of dataItems) {
        if (item.Population > 15000) {
            newDataItems.push(item);
        }
    }

    saveJSON(filePath, newDataItems,  "compact");
    cb();
}
exports.sortJSON = sortJSON;


exports.filterJSON = function filterJSON(cb) {

    let fileDir = "CountryStats";
    let filePath = CodeGenLib + "/"+fileDir+"/XPLAT.json";
    let fileData = fs.readFileSync(filePath, "utf8");
    console.log("loaded " + filePath);

    let filterValue = "Oceania";
    let orgDataItems = JSON.parse(fileData);
    let newDataItems = [];
    for (const item of orgDataItems) {
        // if (item.Cap) { //  && item.Pop > 1
        //     newDataItems.push(item);
        // }
        if (item.Continent && item.Continent.indexOf(filterValue) >= 0) {
            item.Continent = undefined;
            newDataItems.push(item);
        }
    }
    // newDataItems.sort((a, b) => a.Pop < b.Pop ? 1 : -1);

    // console.log(orgDataItems)
    // console.log('filterJSON ' + orgDataItems.length + " >> "  + newDataItems.length);
    // console.log(newDataItems)

    let outputPath = CodeGenLib + "/" + fileDir + filterValue + "/XPLAT.json"
    saveJSON(outputPath, newDataItems,  "compact");
    cb();
}

exports.compactJSON = function compactJSON(cb) {
    let filePaths = [
        CodeGenLib + "/AnalyzeOrders/XPLAT.json",
    ];
    for (const filePath of filePaths) {
        let file = fs.readFileSync(filePath, "utf8");
        let dataItems = JSON.parse(file);
        saveJSON(filePath, dataItems,  "compact");
    }
    cb();
}

function addFieldJSON(cb) {

    let input = CodeGenLib + "/NwindData/XPLAT.json";
    let file = fs.readFileSync(input, "utf8");
    let orgDataItems = JSON.parse(file);
    for (const item of orgDataItems) {
        item.Rating = utils.randomInteger(2, 5);
    }

    let outputDir = CodeGenLib + "/NwindData/"
    let outputPath = outputDir + "XPLAT.json";
    saveJSON(outputPath, orgDataItems,  "compact");
    cb();
}
exports.addFieldJSON = addFieldJSON;

exports.combineJSON = function combineJSON(cb) {

    var AllLocations = [
        {
            Shop: "Local Market",
            LastInventory: "07/03/2018"
        },
        {
            Shop: "Wall Market",
            LastInventory: "12/06/2018"
        },
        {
            Shop: "Fun-Tasty Co.",
            LastInventory: "06/12/2018"
        },
        {
            Shop: "Farmer Market",
            LastInventory: "04/04/2018"
        },
        {
            Shop: "Street Market",
            LastInventory: "12/12/2018"
        },
        {
            Shop: "24/7 Market",
            LastInventory: "11/11/2018"
        },
        {
            Shop: "Super Market",
            LastInventory: "09/09/2018"
        }
    ];

    let filePath = CodeGenLib + "/NwindData/XPLAT.json";
    let fileData = fs.readFileSync(filePath, "utf8");
    console.log("loaded " + filePath);

    let maxLocations = AllLocations.length - 1;
    let orgDataItems = JSON.parse(fileData);
    let newDataItems = [];
    for (const item of orgDataItems) {
        let index = utils.randomInteger(0, maxLocations)
        let count = Math.floor(Math.random() * 3) + 1;
        var locations = [...AllLocations].splice(index, count);
        item.Locations = locations;
        newDataItems.push(item);

        //console.log(locations)
        //if (newDataItems.length > 5) break;
    }
    // newDataItems.sort((a, b) => a.Pop < b.Pop ? 1 : -1);

    // console.log(orgDataItems)
    console.log('combineJSON ' + orgDataItems.length + " >> "  + newDataItems.length);
    // console.log(newDataItems)

    let outputDir = CodeGenLib + "/NwindData/"
    let outputPath = outputDir + "XPLAT.json";
    saveJSON(outputPath, newDataItems,  "compact");

    let locationsDir = CodeGenLib + "/NwindLocations/"
    let locationsPath = locationsDir + "XPLAT.json";
    saveJSON(locationsPath, AllLocations,  "compact");

    cb();
}

exports.updateJSON = function updateJSON(cb) {

    var firstNames = ["James", "Max", "Martin", "Pamela", "Mike", "Anna", "Ben", "Nancy"];
    var lastNames = ["Smith", "Black", "Madison", "Jefferson", "Jackson", "Watson"];
    var streetNames = ["Main", "Wall", "Market"];
    var regions = ["West", "North East", "South East"];
    var shipNames = ["Market", "Home", "Estate", "Townhouse"];
    var cityNames = ["New York", "Los Angeles", "Philadelphia", "Miami", "Huston"];
    var products = ["IPad", "Mac Book Pro", "IPhone", "Mac Book Air", "Samsung Galaxy 22", "Samsung Note"];

    var shippers = ["United Package", "Speedy Express", "Federal Shipping"];
    // let filePath = CodeGenLib + "/InvoicesData/XPLAT.json";
    let filePath = CodeGenLib + "/CompanyData/XPLAT.json";
    let file = fs.readFileSync(filePath, "utf8");
    let orgDataItems = JSON.parse(file);
    // let file = fs.readFileSync(filePath, "utf8");

    let newDataItems = [];
    var id = 1000;
    for (let i = 0; i < orgDataItems.length; i++) {
        // item.CustomerFirstName = item.CustomerName.split(' ')[0];
        // item.CustomerLastName = item.CustomerName.split(' ')[0];
        // item.CustomerAddress = item.ShipAddress + ', ' + item.ShipCity + ', ' + item.ShipCountry;
        // var city = utils.randomItem(cityNames);
        // var street = utils.randomInteger(100, 200) + " " + utils.randomItem(streetNames) + " Street";
        // var first = utils.randomItem(firstNames);
        // var last = utils.randomItem(lastNames);

        var info = orgDataItems[i];
        info.ID = "abc" + (id + i);
        // var info = {};

        // info.ShipName = last + " " + utils.randomItem(shipNames);
        // info.ShipAddress = street;
        // info.ShipCity = city;
        // info.ShipPostalCode = (utils.randomInteger(5, 9) * 10000) + utils.randomInteger(50, 200);
        // info.ShipCountry = "USA";
        // info.ShipRegion = utils.randomItem(regions);
        // info.ShipperName = utils.randomItem(shippers);

        // info.CustomerID = id++;
        // info.CustomerName = first + " " + last;
        // info.CustomerFirstName = first;
        // info.CustomerLastName = last;
        // info.CustomerAddress = info.ShipAddress + ', ' + info.ShipCity + ', ' + info.ShipCountry + ', ' + info.ShipPostalCode;
        // info.Salesperson = utils.randomItem(firstNames) + " " + utils.randomItem(lastNames);
        // info.OrderID = utils.randomInteger(1000, 2000);
        // info.OrderDate = utils.randomInteger(1, 12) + '/' + utils.randomInteger(1, 25) + '/2022';

        // var fraction = utils.randomDouble(0.2, .9).toFixed(2);
        // info.ProductID = utils.randomInteger(100, 200);
        // info.ProductName = utils.randomItem(products);
        // info.UnitPrice = parseFloat(utils.randomInteger(500, 3000) + fraction);
        // info.Quantity = parseInt(utils.randomInteger(2, 5));
        // info.ExtendedPrice = parseFloat((info.Quantity * info.UnitPrice).toFixed(2));
        // info.Freight = parseFloat(utils.randomInteger(20, 200) + fraction);
        // info.Discontinued = id % 10 == 0 ? true : false;

        // info.Region = info.ShipRegion;
        // info.Address = street;
        // info.City = city;
        // info.Country = "USA";
        // info.PostalCode = info.ShipPostalCode;

        newDataItems.push(info);
    }

    // filePath = CodeGenLib + "/InvoicesData/XPLAT.json";
    // saveJSON(filePath, newDataItems,  "compact");
    saveJSON(filePath, newDataItems);
    cb();
}

function convertColumnTypes(cb) {

    // var numericColumns = ["ProductUnitPrice", "NumberOfUnits", "Value"];
    // var numericColumns = ["Product.UnitPrice", "NumberOfUnits", "Value"];
    // var numericColumns = ["UnitsSold", "Year"];
    var numericColumns = [
    //     "Open", "Close", "Low", "High", "Price", "Buy", "Sell",
    //  "ZV_SPREAD", "Change", "ChangePercent", "KRD_3YR",
    // "AnnualStart", "AnnualChange", "AnnualLow", "AnnualHigh"
    ];

    // let filePath = CodeGenLib + "/PivotSalesData/XPLAT.json";
    // let filePath = CodeGenLib + "/PivotData/XPLAT.json";
    // let filePath = CodeGenLib + "/PivotDataFlat/XPLAT.json";
    // let filePath = CodeGenLib + "/AnalyzeOrders/XPLAT.json";
    // let filePath = CodeGenLib + "/AnalyzeSales/XPLAT.json";
    // let filePath = CodeGenLib + "/CompanyData/XPLAT.json";
    //let filePath = CodeGenLib + "/EmployeesFlatDetails/XPLAT.json";
    // let filePath = CodeGenLib + "/FinancialDataFuel/XPLAT.json";
    // let filePath = CodeGenLib + "/FinancialDataMetals/XPLAT.json";
    // let filePath = CodeGenLib + "/FinancialDataCurrencies/XPLAT.json";
    // let filePath = CodeGenLib + "/HierarchicalCustomers/XPLAT.json";
    // let filePath = CodeGenLib + "/PivotData/XPLAT.json";
    let filePath = CodeGenLib + "/PivotDataFlat/XPLAT.json";
    // let filePath = CodeGenLib + "/ProductInventory/XPLAT.json";
    // let filePath = CodeGenLib + "/ProductSales/XPLAT.json";
    // let filePath = CodeGenLib + "/SingersCustomers/XPLAT.json";


    console.log(filePath);
    let file = fs.readFileSync(filePath, "utf8");

    let orgDataItems = JSON.parse(file);
    // console.log(orgDataItems[0]);

    orgDataItems = utils.toNumberRecursive(orgDataItems, 2, numericColumns, true);

    // for (const item of orgDataItems) {

    //     var columnNames = Object.keys(item);
    //     // var columnNames = numericColumns;
    //     for (const column of columnNames) {

    //         if (item[column]) {
    //             var val = utils.strToNumber(item[column], 2);
    //             if (val) {
    //                 item[column] = val;
    //                 if (!convertedColumns.includes(column)) {
    //                      convertedColumns.push(column);
    //                 }
    //             }
    //         }
    //         // else if (column.indexOf(".") > 0) {
    //         //     var parts = column.split(".");
    //         //     var propObject = parts[0];
    //         //     var propName = parts[1];
    //         //     if (item[propObject] && item[propObject][propName]) {
    //         //         item[propObject][propName] = parseFloat(item[propObject][propName]);
    //         //     }
    //         // }
    //     }
    // }

    console.log(orgDataItems[0]);
    // console.log(orgDataItems[0].Orders[0]);

    // console.log(orgDataItems[0].Orders[0].OrderDetails);
    // console.log(orgDataItems[1]);
    // console.log(convertedColumns);
    saveJSON(filePath, orgDataItems); //,  "compact");
    cb();
}
exports.convertColumnTypes = convertColumnTypes;

exports.convertWorldStats = function convertWorldStats(cb) {

    let csvName = 'world_countries_all'
    let csvPath = '../convert/' + csvName + '.csv';
    csvData = fs.readFileSync(csvPath, "utf8");

    let jsonData = [];
    let csvLines = csvData.split('\r\n');
    let csvColumns = csvLines[0].split(',');

    for (let i = 1; i < csvLines.length; i++) {
        const csvRow = csvLines[i].split(',');
        if (csvRow === undefined || csvRow.length <= 1) {
            continue;
        }

        let jsonItem = {};
        for (let c = 0; c < csvColumns.length; c++) {
            const column = csvColumns[c];
            if (column === "") continue;

            let value = csvRow[c];
            if (value === undefined) {
                console.log("ERROR: undefined value at " + i + " row and col: " + column )
                continue;
            }
            value = value.trim();

            let num = utils.strToNumber(value);
            if (num !== null) {
                jsonItem[column] = num;
            } else {
                jsonItem[column] = value;
            }
        }

        if (jsonItem.Population > 1000) {
            jsonItem["GDPPerPerson"] = Math.round(jsonItem["GDPTotal"] * 1000000 / jsonItem["Population"]);
            jsonData.push(jsonItem);
        }

    }
    jsonData.sort((a, b) => a.Population < b.Population ? 1 : -1);

    for (let i = 0; i < jsonData.length; i++) {
        jsonData[i].Rank = i + 1;
    }

    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    saveJSON(jsonPath, jsonData,  "compact");
    cb();
}

exports.convertStockSP500 = function convertStockSP500(cb) {
    // let csvName = 'StockSP500Prices'
    let csvName = 'StockSP500Cap'
    let csvPath = '../convert/' + csvName + '.csv';

    let csvData = fs.readFileSync(csvPath, "utf8");
    // console.log("loaded " + csvPath);

    let jsonData = [];
    let csvLines = csvData.split('\r\n');
    // console.log('csvLines ' + csvLines.length)
    let csvColumns = csvLines[0].split(',');

    // let min = 100000000000000000;
    // console.log(csvColumns)
    for (let i = 1; i < csvLines.length; i++) {
        const csvRow = csvLines[i].split(',');
        let jsonItem = {};


        if (csvRow === undefined || csvRow.length <= 1) {
            // console.log("ERROR: undefined row at " + i + " row")
            continue;
        }

        for (let c = 0; c < csvColumns.length; c++) {
            const column = csvColumns[c];
            if (column === "") continue;
            // if (column !== "MarketCap") continue;

            let value = csvRow[c];
            if (value === undefined) {
                console.log("ERROR: undefined value at " + i + " row and col: " + column )
                continue;
            }
            value = value.trim();

            let num = utils.strToNumber(value);
            if (num !== null) {
                jsonItem[column] = num;
            } else {
                jsonItem[column] = value;
            }
            if (column === "MarketCap") {
                jsonItem[column] = jsonItem[column] / 1000000000;
                jsonItem[column] = Math.round(jsonItem[column] * 100) / 100;
                // min = Math.min(min, jsonItem[column]);
                // console.log(jsonItem[column]);
            }
            if (column === "EBITDA") {
                jsonItem[column] = jsonItem[column] / 1000000;
                jsonItem[column] = Math.round(jsonItem[column]);
                if (jsonItem[column] > 0) {
                    // min = Math.min(min, Math.max(1, jsonItem[column]));
                }
            }
            if (column === "Price" || column === "PricePerSales") { // Price PricePerSales
                jsonItem[column] = Math.round(jsonItem[column] * 100) / 100;
                if (jsonItem[column] > 0) {
                    // min = Math.min(min, jsonItem[column]);
                }
                // console.log(jsonItem[column]);
            }
            if (column === "YearlyLow" || column === "YearlyHigh" || column === "52WeekLow") {
                jsonItem[column] = Math.round(jsonItem[column] * 100) / 100;
            }
            // console.log("|" +csvRow[c] + '| >> |' + value + '| >> |' + jsonItem[column] + '|')

            // if (c > 2) break;
        }

        jsonData.push(jsonItem);

        // if (i > 0) break;
    }
    jsonData.sort((a, b) => a.MarketCap < b.MarketCap ? 1 : -1);
    for (let i = 0; i < jsonData.length; i++) {
        jsonData[i].Index = i + 1;

    }

        // console.log(min + " min" );
    // console.log(jsonData)
    // console.log('filterJSON ' + orgDataItems.length + " >> "  + newDataItems.length);
    // console.log(newDataItems)

    let jsonPath = CodeGenLib + "/" + csvName + "/XPLAT.json";
    saveJSON(jsonPath, jsonData,  "compact");
    cb();
}

exports.convertStockMarket = function convertStockMarket(cb) {

    let csvMarketCaps = utils.readCSV('../convert/market-capitalization.csv');
    // let csvSectors = ;
    // console.log('csvMarketCaps ');
    // console.log(  csvMarketCaps.data);

    let companiesALL = [];

    let csvMappings = [
        utils.hash('Symbol', utils.readCSV('../convert/market-sectors-yahoo.csv').data),
        // utils.hash('Symbol', utils.readCSV('../convert/market-sectors.csv').data),
        utils.hash('Symbol', utils.readCSV('../convert/market-earnings.csv').data),
        utils.hash('Symbol', utils.readCSV('../convert/market-employees.csv').data),
        utils.hash('Symbol', utils.readCSV('../convert/market-operating-margin.csv').data),
        utils.hash('Symbol', utils.readCSV('../convert/market-revenue.csv').data),
        utils.hash('Symbol', utils.readCSV('../convert/market-PE-ratio.csv').data),
    ];

    for (let i = 0; i < csvMarketCaps.data.length; i++) {
        let company = csvMarketCaps.data[i];
        for (const csv of csvMappings) {
            let lookup = csv[company.Symbol];
            if (lookup !== undefined) {
                let lookupColumns = Object.keys(lookup);
                for (const column of lookupColumns) {
                    if (company[column]) continue;
                    company[column] = lookup[column];
                }
            }
        }

        company.Country = undefined;
        company.Rank = undefined;

        if (company.MarketCap > 0 && company.Price > 0) {
            company.Shares = Math.round(company.MarketCap / company.Price);
        } else {
            company.Shares = 0;
        }

        if (company.Earnings > 0 && company.Shares > 0) {
            company.EarningsPerShare = Math.round(company.Earnings / company.Shares * 100) / 100;
        } else {
            company.EarningsPerShare = 0;
        }

        if (company.Revenue > 0 && company.Shares > 0) {
            company.RevenuePerShare = Math.round(company.Revenue / company.Shares * 100) / 100;
        } else {
            company.RevenuePerShare = 0;
        }

        // if (company.Sector) {

            companiesALL.push(company);
        // }
        // if (i > 10) {
        //     break;
        // }
    }

    companiesALL = companiesALL.sort((a, b) => a.MarketCap < b.MarketCap ? 1 : -1);

    var missing = [];
    let rank = 1;
    for (const company of companiesALL) {
        company.Rank = rank++;
        // console.log(utils.toStringLine(company));

            if (company.Sector === undefined) {
            // console.log(symbol);
            missing.push(company.Symbol);
        }
    }
    // console.log(missing.join(', '));
    // console.log('missingSymbols=' + missing.length);
    // console.log('companiesALL=' + companiesALL.length);

    function saveCompanies(number) {
        let data = utils.splice(companiesALL, 0, number);
        let missingSector = []
        for (const item of data) {
             if (item.Sector === undefined)
                missingSector.push('500,CompanyName,' + item.Symbol + ',$0.0 M,United States,');
                // missingSector.push(item.Symbol);
        }

        console.log(missingSector.join('\n'));
        console.log('missingSymbols=' + missingSector.length);

        let path = CodeGenLib + "/StockMarket" + number + "/XPLAT.json";
        saveJSON(path, data,  "compact");

    }
    saveCompanies( 2000);
    saveCompanies( 1000);
    saveCompanies(  500);
    saveCompanies(  100);
    saveCompanies(  10);

    // console.log( 'companiesALL ' )
    // console.log(companiesALL);
    // console.log(stocks);

    cb();
}

function getStockSymbols(limit) {
    if (limit === undefined) limit = 10000;

    // let CSV = utils.readCSV('../convert/sp500.csv');
    let CSV = utils.readCSV('../convert/market-capitalization.csv');

    // var stockSymbols = ['IBM', 'TSLA', 'MSFT', ];
    var stockSymbols = [];
    for (let i = 0; i < CSV.data.length; i++) {
        let company = CSV.data[i];
        let symbol = company.Symbol;
        // let outputPath = stocksFolder + symbol + '.json';
        // if (!fs.existsSync(outputPath)) {
            stockSymbols.push(symbol);
        // }

        if (stockSymbols.length > limit) break;
    }
    return stockSymbols;
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

exports.fetchYahooProfile = function fetchYahooProfile(cb)
{
    let stocksFolder = '../convert/yahoo/'
    var stockCounter = 0;
    var allSymbols = getStockSymbols(4000);
    var stockSymbols = [];
    var lastSymbol = 0;
    for (let i = 0; i < allSymbols.length; i++) {
        var symbol = allSymbols[i];
        var outputPath = '../convert/yahoo/' + symbol + '.json';
        if (!fs.existsSync(outputPath)) {
            stockSymbols.push(symbol);
            lastSymbol = i;
        }
        if (stockSymbols.length > 15) break;
    }

    console.log('allSymbols=' + allSymbols.length);
    console.log('stockSymbols=' + stockSymbols.length);
    function parseStock(symbol, data, url) {
        var stock = {};
        stockCounter++;
        if (data !== null)
        {
            //console.log(url);
            // console.log(symbol);
            const regex = /Sector.{34}(.*)\<\/span\>\<\/p\>\<\/div\><\/div\>/g;
            let matches = data.match(regex);
            if (matches === null || matches === undefined) {
                console.log('not found ' + url);
                return;
            }
            let found = data.match(regex)[0];
            found = found.split('</span>').join('');
            found = found.split('<span ').join('');
            found = found.split('<span>').join('');
            found = found.split('class="Fw(600)">').join('');
            found = found.split('</p></div></div>').join('');
            found = found.split('Full Time ').join('');
            found = found.split("'").join('');
            found = found.split('(s)').join('').replace(',','').replace('&amp;','&');
            // console.log(found);
            let columns = found.split('<br/>');
            // console.log(columns);
            for (const col of columns) {
                let info = col.split(':');
                var name = info[0];
                var value = info[1];
                // console.log(info);
                stock.Symbol = symbol;
                if (value === undefined || value === ' ')
                    stock[name] = '0';
                else
                    stock[name] = value.trim();
            }
            // console.log(stock);
            if (stock.Sector !== undefined) {
                let outputPath = stocksFolder + symbol + '.json';
                saveJSON(outputPath, [stock],  "compact");
            }
        }
        // console.log(symbol + '  ' + data.MarketCapitalization);
        if (stockCounter >= stockSymbols.length) {
            // let jsonPath = CodeGenLib + "/StockMarketTMP/XPLAT.json";
            // saveJSON('../convert/yahoo/sectors.json', stockSectors,  "compact");
            console.log('lastSymbol=' + lastSymbol);
            cb();
        }
    }

    // console.log(stockSymbols.join(', '));

    for (const symbol of stockSymbols) {
        // let url = 'https://finance.yahoo.com/quote/ELV/profile?p=ELV'
        let url = 'https://finance.yahoo.com/quote/'+symbol+'/profile?p='+symbol

        console.log('fetching ' + url)
        request.get({
            url: url, json: true, headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            if (err) {
                console.log('Error:', err);
                parseStock(symbol, null, url);
            } else if (res.statusCode !== 200) {
                console.log('Error:' + res.statusCode + ' ' + url);
                parseStock(symbol, null, url);
            } else {
                // data is successfully parsed as a JSON object:
                // console.log(data);
                parseStock(symbol, data, url);
            }
        });

        // setTimeout(500);
    }
}

// 3m OHLC data range
// http://api.marketstack.com/v1/eod?access_key=b4d9ad0f817fe057764a3eb1ba1f8ff0&symbols=AAPL
// http://api.marketstack.com/v1/tickers/aapl/eod?access_key=b4d9ad0f817fe057764a3eb1ba1f8ff0

// icons https://www.tradingview.com/markets/stocks-usa/sectorandindustry-sector/commercial-services/
// https://www.alphavantage.co/documentation/
exports.fetchStock = function fetchStock(cb, symbol)
{
    let stocksFolder = '../convert/stocks/'
    let sp500 = utils.readCSV('../convert/sp500.csv');

    var stockSymbols = [];
    for (let i = 0; i < sp500.data.length; i++) {
        let company = sp500.data[i];
        let symbol = company.Symbol;
        let outputPath = stocksFolder + symbol + '.json';

        if (!fs.existsSync(outputPath)) {
            stockSymbols.push(symbol);
        }

        if (stockSymbols.length >= 5) break;
    }

    var columns = ['Symbol', 'Name', 'Country', 'Exchange','Sector', 'Industry', 'MarketCapitalization',
     'EBITDA', 'PERatio', 'TrailingPE', 'ForwardPE', 'DividendPerShare', 'DividendYield',  'EPS', 'ProfitMargin', 'OperatingMarginTTM',
    'RevenuePerShareTTM',
    'RevenueTTM', 'GrossProfitTTM', 'PriceToSalesRatioTTM', 'PriceToBookRatio',
    'Beta', '52WeekHigh', '52WeekLow', '50DayMovingAverage', '200DayMovingAverage', 'SharesOutstanding'];

    var stockData = [];
    var stockCounter = 0;

    function parseStock(outputPath, data) {
        var stock = {};
        for (const column of columns) {
            // if (data.MarketCapitalization) {
                var name = column.replace('TTM','').replace('PERatio','CurrentPE')
                .replace('Capitalization','Cap').replace('Ratio','').replace('MovingAverage','Average');
                // stock[name] = data.column;
                stock[name] = data[column];
            // }
        }
        // stockData.push(stock);
        if (stock.Sector !== undefined) {
            saveJSON(outputPath, [stock], "compact");
        }

        // console.log(symbol + '  ' + data.MarketCapitalization);
        if (stockCounter >= stockSymbols.length) {
            // let jsonPath = CodeGenLib + "/StockMarketTMP/XPLAT.json";
            // saveJSON(outputPath, stockData,  "compact");
            cb();
        }
    }

    for (const symbol of stockSymbols) {
        // console.log('fetching ' + symbol)
        let outputPath = stocksFolder + symbol + '.json';

        if (fs.existsSync(outputPath)) {
            console.log('exits ' + outputPath);
            stockCounter++;
            continue;
        }
        // var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=demo';
        // var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=AZ6V4V9MYY61IDL5';
        // var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=MF509CVMN4P2ACMP';
        var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=KLP643CXASZEMGZY';
        // var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=B0KRIHH8G3ODPKGZ';
        // var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IMB&apikey=demo';
        // var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IMB&apikey=AZ6V4V9MYY61IDL5';

        console.log('fetching ' + url)
        request.get({
            url: url, json: true, headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            if (err) {
                console.log('Error:', err);
            } else if (res.statusCode !== 200) {
                console.log('Status:', res.statusCode);
            } else {
                // data is successfully parsed as a JSON object:
                // console.log(data);
                // console.log('fetching ' + symbol + ' done ')
            }
            stockCounter++;
            parseStock(outputPath, data);
            // stockCounter = stockCounter + 1;
        });
    }
}

exports.combineYahooProfile = function combineYahooProfile(cb)
{
    var fileCounter = 0;
    var jsonCounter = 0;
    var jsonStocks = [];
    var stockSectors = [];
    var stockIndustry = [];
    var stockIncomplete = [];

    gulp.src([
        '../convert/yahoo/*.json',
    ])
    // .pipe(es.map(verifySampleFile ))
    .pipe(es.map(function(file, fileCallback) {
        fileCounter++;
        let content = file.contents.toString();

        // console.log('load ' + file.dirname + '/' + file.basename)
        let jsonArray = JSON.parse(content);
        jsonCounter += jsonArray.length;
        // var filePath = getPath(file);
        for (let item of jsonArray) {

            item.Employees = item.Employees === '' ? 100 : utils.strToNumber(item.Employees);
            jsonStocks.push(item);

            if (!stockSectors.includes(item.Sector)){
                 stockSectors.push(item.Sector);
            }
            if (!stockIndustry.includes(item.Industry)){
                 stockIndustry.push(item.Industry);
            }

            if (item.Sector === undefined || item.Sector === '' ||
                item.Industry === undefined || item.Industry === '' ||
                item.Employees === undefined) {
                stockIncomplete.push(item.Symbol);
            }
        //     if (content.indexOf(item.forbidden) >= 0) {
        //         if (item.valid)
        //             issues.push(filePath + " - File should use '" + item.valid + "' instead of '" + item.forbidden + "'");
        //         else
        //             issues.push(filePath + " - File should not contain '" + item.forbidden + "'");
        //     }
        }
        // if (issues.length > 0) {
            //console.log("Found issues in " + getPath(file) + " file:");
            // console.log(issues.join('\n'));
        // }
        fileCallback(null, file);
    }))
    .on("end", function() {
        console.log('fileCounter=' + fileCounter)
        console.log('jsonCounter=' + jsonCounter)
        // console.log('stockSectors=')
        // console.log(stockSectors)

        // console.log('stockIndustry=')
        // console.log(stockIndustry)
        // console.log('stockIncomplete=')
        // console.log(stockIncomplete)

        saveJSON("../convert/market-sectors-yahoo.json", jsonStocks,  "compact");

        cb();
     });
}

exports.toCSV = function toCSV(cb) {
    let jsonPath = "../convert/market-sectors-yahoo.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let items = JSON.parse(jsonFile);

    var lines = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        var columns = Object.keys(item);
        if (i === 0) {
            var line = '"' + columns.join('","') + '"';
            lines.push(line);
        }

        var line = JSON.stringify(item, null, '');
        for (const column of columns) {
            line = line.replace('"' + column + '":', '').replace('{','').replace('}','');
        }
        lines.push(line);
    }

    var cvsContent = lines.join('\n');
    var cvsPath = jsonPath.replace('.json', '.csv');
    saveFile(cvsPath, cvsContent);
    cb();
}

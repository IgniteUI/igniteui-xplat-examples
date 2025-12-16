let gulp = require('gulp');
let del = require('del');
let es = require('event-stream');
let fs = require('fs.extra');
let path = require('path');
let utils = require('./utils.js')
let request = require('request');
let rename = require('gulp-rename');
// const { read } = require('fs');

var tap = require('gulp-tap'); 
var svg2png = require('gulp-svg2png');
 
exports.flagsExportPNG = function flagsExportPNG(cb) {
// gulp.task('svg2png', function () {
    console.log("flagsExportPNG ...");
    // gulp.src('./CDN/img/flags/**/*.svg')
    // gulp.src('./CDN/img/flag/svg/2/*.svg')

    // let folderSVG = '/flag/svg/2'
    // let folderSVG = '/flag/svg/3'
    // let folderSVG = '/flag/svg/N'
    let folderSVG = '/logo/forex'
    // let folderSVG = '/medals'
    gulp.src([
        './CDN/img' + folderSVG + '/*.svg',
        // './CDN/img/flags/AFG.svg',
        // './CDN/img/flag/svg' + folderSVG + '/AF.svg',
// './CDN/img/flag/svg/err/*.svg',
// './CDN/img/flag/svg/err/GS.svg',
// './CDN/img/flag/svg/err/GT.svg',
// './CDN/img/flag/svg/err/GU.svg',
// './CDN/img/flag/svg/err/GY.svg',
// './CDN/img/flag/svg/err/XS.svg',
        // './CDN/img/flag/svg/err/GX.svg',
            // './CDN/img/flag/svg/err/GZ.svg',
        // './CDN/img/flag/svg/err/VT.svg',
        // './CDN/img/flag/svg/err/XC.svg',

        // '!./CDN/img/flag/svg' + folderSVG + '/GU.svg',
        // '!./CDN/img/flag/svg' + folderSVG + '/GX.svg',
    ])
        .pipe(svg2png())
        // .pipe(svg2png({ // these option apply only if SVG has viewBox
        //     width: 640, // Explicitly set the width of the output PNG
        //     height: 480, // Explicitly set the height of the output PNG
        //     // quality: 90, // Set the quality of the output PNG (0-100)
        //     // ratio: 2, // Scale the image by a factor (e.g., for retina displays)
        //     },
        //     true, // verbose: Set to false to suppress progress logs
        //     4 // concurrency: Limit the number of concurrent tasks
        // ))
        // .pipe(gulp.dest('./CDN/img/flag/png' + folderSVG))
        .pipe(gulp.dest('./CDN/img' + folderSVG))
        .on("end", function() {
            // console.log(flagsSVG);
            // console.log("flagsSVG " + Object.keys(flagsSVG).length);
            console.log("flagsExportPNG ... done");
            cb();
        });
}

let CodeGenLib = "../code-gen-library";

let xplatRepoName = 'IgniteUI/igniteui-xplat-examples/';
let xplatBranch = '25.2';
let xplatCodeGenLib = 'code-gen-library';
let xplatCodeGenLibGit =                 'https://github.com/' + xplatRepoName + '/blob/' + xplatBranch + '/' + xplatCodeGenLib + '/';
let xplatCodeGenLibRaw  = 'https://raw.githubusercontent.com/' + xplatRepoName + '/refs/heads/' + xplatBranch + '/' + xplatCodeGenLib + '/';
//                https://github.com/IgniteUI/igniteui-xplat-examples//blob     /25.2/code-gen-library/AnalyzeSales/XPLAT.json
// https://raw.githubusercontent.com/IgniteUI/igniteui-xplat-examples/refs/heads/25.2/code-gen-library/AnalyzeSales/XPLAT.json

// DONE replace following strings in .JSON file:  
// https://static.infragistics.com/xplatform/images/browsers/                               https://dl.infragistics.com/x/img/browsers/
// https://static.infragistics.com/xplatform/images/flags/iso2                              https://dl.infragistics.com/x/img/flags/
// https://static.infragistics.com/xplatform/images/grid/flags/                             https://dl.infragistics.com/x/img/flags/
// https://static.infragistics.com/xplatform/images/grid/active.png                         https://dl.infragistics.com/x/img/grid/active.png
// https://static.infragistics.com/xplatform/images/grid/expired.png                        https://dl.infragistics.com/x/img/grid/expired.png
// https://static.infragistics.com/xplatform/images/grid/propeller-logo.svg                 https://dl.infragistics.com/x/img/grid/propeller-logo.svg
// https://static.infragistics.com/xplatform/images/people/names/*.JPG                      https://dl.infragistics.com/x/img/people/names/*.png
// https://static.infragistics.com/xplatform/images/people/women/*.JPG                      https://dl.infragistics.com/x/img/people/women/*.png  - 1-3
// https://static.infragistics.com/xplatform/images/people/men/*.JPG                        https://dl.infragistics.com/x/img/people/men/*.png    - 1-3
// https://www.infragistics.com/angular-demos-lob/assets/images/men/                        https://dl.infragistics.com/x/img/people/men/*.png    - 1-3
// https://www.infragistics.com/angular-demos-lob/assets/images/women/                      https://dl.infragistics.com/x/img/people/women/*.png  - 1-3
// https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png     https://dl.infragistics.com/x/img/browser/ig.png
// https://cdn.pixabay.com/photo/                                                           https://dl.infragistics.com/x/img/products/
// https://static.infragistics.com/xplatform/css                                            https://dl.infragistics.com/x/css
// https://static.infragistics.com/xplatform/excel                                          https://dl.infragistics.com/x/excel

// TODO in down-stream repos
// https://static.infragistics.com/xplatform/images/grid/trophy_gold.svg     https://dl.infragistics.com/x/img/trophy/gold.svg
// https://static.infragistics.com/xplatform/images/grid/trophy_bronze.svg   https://dl.infragistics.com/x/img/trophy/bronze.svg
// https://static.infragistics.com/xplatform/images/grid/trophy_silver.svg   https://dl.infragistics.com/x/img/trophy/silver.svg
// https://static.infragistics.com/xplatform/images/genders/                 https://dl.infragistics.com/x/img/genders/male.png
// https://static.infragistics.com/xplatform/images/company/NAME             https://dl.infragistics.com/x/img/logo/company  SYMBOL
// https://static.infragistics.com/xplatform/images/browsers/azure-maps/     https://dl.infragistics.com/x/img/maps/


// TODO
// https://static.infragistics.com/xplatform/shapes                          https://dl.infragistics.com/x/shapes
// https://static.infragistics.com/xplatform/data                            https://dl.infragistics.com/x/data
// https://static.infragistics.com/xplatform/json                            https://dl.infragistics.com/x/data

// North-Korea      Korea-North      
// South-Korea      Korea-South      
// Czechia          Czech, Czech Rep, Czechialic, Czech_Republic

exports.cleanJSON = function cleanJSON(input, cb) {

    if (input === undefined) {
        input = CodeGenLib + "/TestData/SOURCE.json";
    }
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
    utils.saveFile(outputPath, outputContent);

    console.log('toJSON');
    console.log(outputContent)

    if (cb !== undefined) {
        cb();
    }
} 

function sortJSON(cb) {

    // let filePath = CodeGenLib + "/WorldCitiesAbove500K/XPLAT.json";
    let filePath = CodeGenLib + "/WorldCountries/XPLAT.json";
    let file = fs.readFileSync(filePath, "utf8");
    let dataItems = JSON.parse(file);

    // dataItems = dataItems.sort((a, b) => a.Pop < b.Pop ? 1 : -1);
    dataItems = dataItems.sort((a, b) => a.Population < b.Population ? 1 : -1);

    for (let i = 0; i < dataItems.length; i++) {
        // dataItems[i].ID = 10000 + i;
    }

    let newDataItems = [];
    for (const item of dataItems) {
        // if (item.Population > 1000000) {
            newDataItems.push(item);
        // }
    }

    let outputPath = filePath; // CodeGenLib + "/WorldCitiesAbove1M/XPLAT.json";
    utils.saveJSON(outputPath, newDataItems,  "compact");
    cb();
}
exports.sortJSON = sortJSON;


exports.groupJSON = function groupJSON(cb) {


    let groupColumn = "Continent";
    // let groupColumn = "Region";
    // let groupColumn = "Economy";
    let groups = {};

    let jsonPath = CodeGenLib + "/PopulationBirthsByCountry/XPLAT.json";
    // let jsonPath = "C:\\WORK\\_SAMPLES\\DATA\\births-and-deaths\\PopulationBirthsByCountries\\XPLAT.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);

    let numericColumns = [];
    let columns = Object.keys(jsonData[0]);
    for (const c of columns) {
        if (c === "Year") continue;
        let val = jsonData[0][c];
        if (typeof(val) === "number" || val === null)
            numericColumns.push(c);
    }

    // console.log("numericColumns");
    // console.log(numericColumns);

    let missing = [];
    // for (let i = 0; i <= 153; i++) {
    for (const item of jsonData) {
        // let item = jsonData[i];
        let groupInfo = item.Code + " " + item.Name;
        let groupName = item[groupColumn];
        if (groupName === undefined && !missing.includes(groupInfo)) {
            // console.log("groupName undefined");
            missing.push(groupInfo)
            // console.log(item.Code + " " + item.Name);
            // break;
        }

        if (groups[groupName] === undefined) {
            groups[groupName] = {};
            // for (let y = 1950; y <= 1952; y++) {
            for (let y = 1950; y <= 2100; y++) {
                groups[groupName][y] = {};
                for (const c of numericColumns) {
                    groups[groupName][y][c] = 0;
                }
            }
        }

        for (const c of numericColumns) {
            if (item[c] !== null) {
                groups[groupName][item.Year][c] = groups[groupName][item.Year][c] + item[c];
            } 
        }
 
    }

    let groupJson = [];
    let groupNames = Object.keys(groups);
    console.log("groupNames");
    console.log(groupNames);
    
    for (const groupName of groupNames) {
        let group = groups[groupName];
        let years = Object.keys(group);
        for (const y of years) {
            let item = {}; //group[y];
            item.Year = utils.strToNumber(y);
            item.Name = groupName;
            for (const c of numericColumns) {
                let val = group[y][c];
                if (val === 0) 
                    item[c] = null;
                else
                    item[c] = val; 
            }
            groupJson.push(item);
        }
    }
    // console.log("groupJson");
    // console.log(groupJson);

    // console.log("groups");
    // console.log(groups);
    let outputPath = CodeGenLib + "/PopulationBirthsBy" + groupColumn + "/XPLAT.json"
    // let outputPath = "C:\\WORK\\_SAMPLES\\DATA\\births-and-deaths\\Data_by_" + groupColumn + ".json"
    utils.saveJSON(outputPath, groupJson,  "compact");
    cb();
}

exports.filterJSON = function filterJSON(cb) {

    let fileDir = "CountryStats";
    let filePath = CodeGenLib + "/" + fileDir + "/XPLAT.json";
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
    utils.saveJSON(outputPath, newDataItems,  "compact");
    cb();
}

let flagsSVG = {};
function flagsLoadSVG(cb) {
    gulp.src(['./img/flags/SVG/3/*.svg', ])
    .pipe(es.map(function(file, fileCallback) {
        var iso3 = file.basename.replace('.svg','');
        flagsSVG[iso3] = file.dirname + '\\' + file.basename; 
       
        fileCallback(null, file);
    }))
    .on("end", function() {
        // console.log(flagsSVG);
        // console.log("flagsSVG " + Object.keys(flagsSVG).length);
         cb();
     });
}

let flags = { };
exports.flagsLoadPNG = function flagsLoadPNG(cb) {
    var folder = '';
    gulp.src(['./CDN/img/flag/png/3/*.png', ])
    .pipe(es.map(function(file, fileCallback) {
        var name = file.basename.replace('.png','');
        console.log(name);
        flags[name] = file.dirname + '\\' + file.basename; 
        fileCallback(null, file);
    }))
    .on("end", function() {
        console.log(flags);
        // console.log("flagsPNG " + Object.keys(flagsPNG).length);
         cb();
     });
}

exports.flagsMove = function flagsMove(cb) {

    var directories = [
        './CDN/img/flags/png',
        './CDN/img/flags/png/2',
        './CDN/img/flags/png/3',
        './CDN/img/flags/png/N',
        './CDN/img/flags/svg',
        './CDN/img/flags/svg/2',
        './CDN/img/flags/svg/3',
        './CDN/img/flags/svg/N'
    ];
    for (const dir of directories) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir); // ensure directory exists
        }
    }

    gulp.src([
        './FLAGS/png/2/*.png',
        './FLAGS/png/3/*.png',
        './FLAGS/png/N/*.png',
        './FLAGS/svg/2/*.svg',
        './FLAGS/svg/3/*.svg',
        './FLAGS/svg/N/*.svg',
    ])
    .pipe(es.map(function(file, fileCallback) {
        // var name = file.basename.replace('.png',''); 
        let content = file.contents.toString();

        var filePath = file.dirname + '\\';

        filePath = filePath.replace('\\FLAGS\\','\\CDN\\img\\flags\\')
        utils.saveFile(filePath + file.basename, content, true); 

        filePath = filePath.replace('\\png\\2','')
        filePath = filePath.replace('\\png\\3','')
        filePath = filePath.replace('\\png\\N','')
        filePath = filePath.replace('\\svg\\2','')
        filePath = filePath.replace('\\svg\\3','')
        filePath = filePath.replace('\\svg\\N','')
    
        utils.saveFile(filePath + file.basename, content, true); 
  
        fileCallback(null, file);
    }))
    .on("end", function() { 
        // console.log("flagsPNG " + Object.keys(flagsPNG).length);
         cb();
     });
}

exports.indexIMG = function indexIMG(cb) {
    var imgFolder = './CDN/img';
    var index = {};
    gulp.src([
        imgFolder + '/activities/*.*', 
        imgFolder + '/genders/*.*', 
        imgFolder + '/trophy/*.*', 
        imgFolder + '/medals/*.*', 
        imgFolder + '/maps/*.*', 
        imgFolder + '/flags/*.*',   
        imgFolder + '/avatars/*.*', 
        imgFolder + '/people/**/*.*',   
        imgFolder + '/company/*.*',  
        imgFolder + '/logo/**/*.*',   
        imgFolder + '/browser/*.*', 
        imgFolder + '/grid/*.*', 
        imgFolder + '/music/*.*', 
        imgFolder + '/overlay/*.*', 
        imgFolder + '/products/*.*',
        imgFolder + '/banner/*.*', 
        imgFolder + '/card/**/*.*', 
        imgFolder + '/carousel/*.*', 
        imgFolder + '/conditions/*.*', 
        imgFolder + '/list/*.*', 
        imgFolder + '/stepper/*.*', 
        imgFolder + '/toggle/*.*', 
        imgFolder + '/drag-drop/*.*', 
        imgFolder + '/sandbox/*.*', 

        // imgFolder + '/**/*.png', 
        // imgFolder + '/**/*.jpg', 
        // imgFolder + '/**/*.svg', 
    //    '!' + imgFolder + '/flags/**/*.*', 
    //    '!' + imgFolder + '/logo/**/*.*', 
    //    '!' + imgFolder + '/products/**/*.*', 
       '!' + imgFolder + '/**/*.json', 
       '!' + imgFolder + '/**/*.gif', 
       '!' + imgFolder + '/**/*.ico', 
       '!' + imgFolder + '/**/*.db', 
       '!' + imgFolder + '/**/*.html', 
    ])
    .pipe(es.map(function(file, fileCallback) {
        // var name = file.basename.replace('.png','');
        // var filePath = file.dirname + '\\' + file.basename;
        // var parts = file.dirname.split('\\');
        // var dir = parts[parts.length - 1];
        var name = file.basename;

         var dir = file.dirname.split('img')[1].split('\\').join('/');
        var path = '.' + dir + '/' + name;

        if (index[dir] === undefined) {
            index[dir] = []
        }

        var info = { path: path, name: name };
        index[dir].push(info);
        // index[dir][name] = path;

        // console.log(dir + " " + filePath);
        fileCallback(null, file);
    }))
    .on("end", function() {
        // console.log(index);
        // console.log("flagsPNG " + Object.keys(flagsPNG).length);
        let H = utils.createHTML();
 
        let body = '';
        for (const name of Object.keys(index)) {
            // console.log(name);
            // body += H.h1('Directory ' + name);
            body += H.h3('' + name + ' ');

            // console.log(name + " = " + index[name].length);

            let items = [];
            for (const file of index[name]) {
                // console.log(name);
                // body += H.p('File ' + file.name + " " + file.path);

                // items.push('' + file.path); 
                if (file.path.indexOf('/flags/') > 0 ||
                    file.path.indexOf('/logo/forex') > 0) {
                   items.push(H.img(file.path, 32, 25, 'bgWhite'));
                } else if (
                    file.path.indexOf('/logo/crypto/') > 0 ||
                    file.path.indexOf('/logo/company/') > 0) {
                   items.push(H.img(file.path, 32, 32, 'bgGray border'));
                } else if (
                    file.path.indexOf('/company/') > 0 || 
                    file.path.indexOf('/maps/') > 0) {
                   items.push(H.img(file.path, 32, 32, 'bgWhite border'));
                } else if (
                    file.path.indexOf('/activities/') > 0 || 
                    file.path.indexOf('/maps/') > 0 ||  
                    file.path.indexOf('/people/') > 0 || 
                    file.path.indexOf('/trophy/') > 0 || 
                    file.path.indexOf('/avatars/') > 0 || 
                    file.path.indexOf('/genders/') > 0 || 
                    file.path.indexOf('/medals/') > 0) {
                   items.push(H.img(file.path, 32, 32, 'bgWhite'));
                } else {
                    items.push(H.a(file.path));
                }
                // items.push(H.a(file.path));
            }
            // body += H.p(items.join('<br/>'));
            // body += H.p(items.join(' '));

            body += H.horizontal(items);
        }
        var code = H.html(
            H.head(
                H.style(
                'body { font-family: sans-serif; }' +
                'table { font-size: 0.75rem;  } \r\n'  +
                'tr:nth-child(even) { background-color: #eeeded; } \r\n'+
                'th { padding: 0.25rem;  }\r\n' +
                'th { background: black; color: white; position: sticky; top: 0; box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4); } \r\n' +
                '.border { border-color: black; border-style: solid; border-width: 0.5px; } \r\n' +
                '.bgBlack { background: black } \r\n' +
                '.bgWhite { background: white } \r\n' +
                '.bgGray { background: #d9d8d8  } \r\n' +
                '.bgTrans { background: repeating-conic-gradient(#808080 0 25%, #0000 0 50%) 50% / 20px 20px } \r\n' +
                '.center { vertical-align: middle; text-align: center; } \r\n' +
                '.right  { vertical-align: middle; text-align: right; } \r\n' +
                '.left   { vertical-align: middle; text-align: left; } \r\n'
                )
            ) +
            H.body(body)
        );

    var flagOutput = './CDN/img/index.html';
    utils.saveFile(flagOutput, code, true); 
    
    flagOutput = './CDN/img/readme.html';
    utils.saveFile(flagOutput, code, true); 

         cb();
     });
}

exports.indexFolders = function indexFolders(cb) {
    var imgFolder = './CDN/img';
    var index = {};
    gulp.src([
        imgFolder + '/**/*.*', 
        // imgFolder + '/**/*.png', 
        // imgFolder + '/**/*.jpg', 
        // imgFolder + '/**/*.svg', 
    //    imgFolder + '/people/**/*.*', 
        // imgFolder + '/activities/*.*', 
        // imgFolder + '/jobs/*.*', 
        // imgFolder + '/banking/*.*', 

       '!' + imgFolder + '/banner/*.*', 
       '!' + imgFolder + '/browsers/*.*', 
       '!' + imgFolder + '/carousel/*.*', 
       '!' + imgFolder + '/music/*.*', 
       '!' + imgFolder + '/products/*.*', 
       '!' + imgFolder + '/sandbox/*.*', 
       '!' + imgFolder + '/stepper/*.*', 
       '!' + imgFolder + '/toggle/*.*', 

       '!' + imgFolder + '/card/**/*.*', 
    //    '!' + imgFolder + '/logo/**/*.*', 
    //    '!' + imgFolder + '/flags/**/*.*', 
    //    '!' + imgFolder + '/people/**/*.*', 
       '!' + imgFolder + '/NEW/**/*.*', 
       '!' + imgFolder + '/NEW2/**/*.*', 
       '!' + imgFolder + '/NEW3/**/*.*', 
       '!' + imgFolder + '/NEW4/**/*.*', 
       '!' + imgFolder + '/**/*.json', 
       '!' + imgFolder + '/**/*.html', 
       '!' + imgFolder + '/**/*.gif', 
       '!' + imgFolder + '/**/*.ico', 
       '!' + imgFolder + '/**/*.db', 
       '!' + imgFolder + '/**/*.zip', 
    ])
    .pipe(es.map(function(file, fileCallback) {
        // var name = file.basename.replace('.png','');
        // var filePath = file.dirname + '\\' + file.basename;
        // var parts = file.dirname.split('\\');
        // var dir = parts[parts.length - 1];
        var name = file.basename;

        var dir = file.dirname.split('img')[1].split('\\').join('/').replace('/', '');
        if (index[dir] === undefined) {
            index[dir] = []
        }
        // console.log(dir);

        var path = '.' + dir + '/' + name;
        var info = { path: path, name: name };
        index[dir].push(info);
        // index[dir][name] = path;
        // console.log(dir + " " + filePath);
        fileCallback(null, file);
    }))
    .on("end", function() {
        // console.log(index);
        // console.log("flagsPNG " + Object.keys(flagsPNG).length);
        let H = utils.createHTML();
 
        // let body = '';
        for (const name of Object.keys(index)) {
            // console.log(index[name]);
            // body += H.h1('Directory ' + name);
            let body = H.h3('' + name.toUpperCase() + ' INDEX ');
            // console.log(name + " = " + index[name].length);

            let items = [];
            for (let i = 0; i < index[name].length; i++) {
                const file = index[name][i];
                var img =  H.img('./' + file.name, 32, 32, 'bgWhite border item img');
                var lbl = H.link('./' + file.name, file.name, 'item');
                items.push(img);
                items.push(lbl);
            }

            body += H.horizontal(items, 'width: 100%; gap: 0px');

            var code = H.html(
                H.head(
                    H.style(
                    'body { font-family: sans-serif; }' +
                    'table { font-size: 0.75rem;  } \r\n'  +
                    'tr:nth-child(even) { background-color: #eeeded; } \r\n'+
                    'th { padding: 0.25rem;  }\r\n' +
                    'th { background: black; color: white; position: sticky; top: 0; box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4); } \r\n' +
                    '.border { border-color: #9a9999; border-style: solid; border-width: 0.5px; padding: 0.25rem } \r\n' +
                    '.bgBlack { background: black } \r\n' +
                    '.bgWhite { background: white } \r\n' +
                    '.bgGray { background: #9a9999  } \r\n' +
                    '.item { flex: 1; text-align: left;  }  \r\n' +
                    '.item:nth-child(odd) {flex-grow: 1; }  \r\n' +
                    '.item:nth-child(even) { flex-grow: 2; flex: 0 0 calc(100% / 4 - 50px); padding-left: 5px; }  \r\n' +
                    '.img { max-width: 32px; max-height: 32px; width: 32px; height: 32px; }  \r\n' +
                    '.center { vertical-align: middle; text-align: center; } \r\n' +
                    '.right  { vertical-align: middle; text-align: right; } \r\n' +
                    '.left   { vertical-align: middle; text-align: left; } \r\n'
                    )
                ) +
                H.body(body)
            );
            var flagOutput = './CDN/img/' + name + '/index.html';
            utils.saveFile(flagOutput, code, false); 
        }

         cb();
     });
}

function flagsReadme(cb) {
        
    // console.log('init');
//<img src="https://static.infragistics.com/xplatform/images/flags/iso2/ad.png" width="40" height="30">
//<img src="https://static.infragistics.com/xplatform/images/flags/abw.svg" width="40" height="30">

// https://dl.infragistics.com/x/img/flags/PL.svg

    let H = utils.createHTML();
     
    // let jsonPath = CodeGenLib + "/WorldCountries/XPLAT.json"; US-Minor-Outlying-Islands
    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);
    let jsonLookup =  utils.hash('Code', jsonData)

    var countries = utils.extract(jsonData, ['Code', 'Short', 'Name', 'Continent', 'Region', 'Status'])
   
    countries.push({ Code: "ARAB", Short: "ARAB", Name: "ARAB", Continent: "Africa", Region: "Africa", Status: "Dependency"})
    countries.push({ Code: "ASEAN", Short: "ASEAN", Name: "ASEAN", Continent: "Asia", Region: "Asia", Status: "Dependency"})
    countries.push({ Code: "CEFTA", Short: "CEFTA", Name: "CEFTA", Continent: "Europe", Region: "Europe", Status: "Dependency"})
    countries.push({ Code: "EUO", Short: "EU", Name: "European-Union", Continent: "Europe", Region: "Europe", Status: "Dependency"})
    countries.push({ Code: "USI", Short: "US", Name: "US-Minor-Outlying-Islands", Continent: "Oceania", Region: "Polynesia", Status: "Dependency"})
    countries.push({ Code: "USV", Short: "VI", Name: "US-Virgin-Islands", Continent: "Oceania", Region: "Polynesia", Status: "Dependency"})
    countries.push({ Code: "USM", Short: "MP", Name: "Northern Mariana Islands", Continent: "Oceania", Region: "Polynesia", Status: "Dependency"})
    
    countries.push({ Code: "ENG", Short: "EN", Name: "England", Continent: "Europe", Region: "Western Europe", Status: "Dependency"})
    countries.push({ Code: "SCT", Short: "XT", Name: "Scotland", Continent: "Europe", Region: "Western Europe", Status: "Dependency"})
    countries.push({ Code: "NIR", Short: "XN", Name: "Northern-Ireland", Continent: "Europe", Region: "Western Europe", Status: "Dependency"})
    countries.push({ Code: "WLS", Short: "WL", Name: "Wales", Continent: "Europe", Region: "Western Europe", Status: "Dependency"})
    
    countries.push({ Code: "EPV", Short: "PV", Name: "Basque", Continent: "Europe", Region: "Southern Europe", Status: "Dependency"})
    countries.push({ Code: "ECI", Short: "IC", Name: "Canary-Islands", Continent: "Europe", Region: "Southern Europe", Status: "Dependency"})
    countries.push({ Code: "ECT", Short: "CT", Name: "Catalonia", Continent: "Europe", Region: "Southern Europe", Status: "Dependency"})
    countries.push({ Code: "EGA", Short: "GA", Name: "Galicia", Continent: "Europe", Region: "Southern Europe", Status: "Dependency"})
  
    countries.sort((a, b) => a.Name > b.Name ? 1 : -1);

    var flagTable = ""; 

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        var pngPath3 = './' + country.Code  + '.png';
        var svgPath3 = './' + country.Code  + '.svg';
        // var conPath = '../continents/png/' + country.Continent.replace(' ','-') + '.png';

        var pngImage = H.img(pngPath3, 32, 25, 'border');
        var svgImage = H.img(svgPath3, 32, 25, 'border');
        // var conImage = H.img(conPath, 40, 25, 'border');

        let name = country.Name.split(' ').join('-')
        let row = H.tr(
            H.td(pngImage, 'center') +
            H.td(svgImage, 'center') +
            // H.td(H.div([svgLink3, pngLink3, country.Code])) +
            // H.td(H.div([svgLink2, pngLink2, country.Short])) +
            H.td(country.Code) +
            H.td(country.Short) +
            H.td(name, 'left') +
            H.td(country.Continent, 'left') +
            // H.td(H.div([conImage, country.Continent]), 'left') +
            H.td(country.Region, 'left') +
            H.td(country.Status, 'left')
        );
        flagTable += row;
    }

    var pngExampleFlag2 = './' + 'US'  + '.png';
    var svgExampleFlag2 = './' + 'US'  + '.svg';
    var pngExampleFlag3 = './' + 'USA' + '.png';
    var svgExampleFlag3 = './' + 'USA' + '.svg';
    var pngExampleFlagN = './' + 'United-States' + '.png';
    var svgExampleFlagN = './' + 'United-States' + '.svg';

    var code = H.html(
        H.head(
            H.style(
            'body { font-family: sans-serif; }' +
            'table { font-size: 0.75rem;  } \r\n'  +
            'tr:nth-child(even) { background-color: #eeeded; } \r\n'+
            'th { padding: 0.25rem;  }\r\n' +
            'th { background: black; color: white; position: sticky; top: 0; box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4); } \r\n' +
            '.border { border-color: black; border-style: solid; border-width: 0.0px; } \r\n' +
            '.center { vertical-align: middle; text-align: center; } \r\n' +
            '.right  { vertical-align: middle; text-align: right; } \r\n' +
            '.left   { vertical-align: middle; text-align: left; } \r\n'
            )
        ) +
        H.body(
            H.h1('Flags of Countries and Organizations') +
            H.p('Examples of links to country flags stored in various formats and sizes:') +
            H.table(
                H.tr(
                    H.th('Flags Path', 'left', 240) +
                    H.th('Description', 'left', "60%")
                ) + 
                H.tr(
                    H.td(H.a(pngExampleFlag2), 'left') +
                    H.td('Flags in PNG format with ISO-2 naming convention', 'left')
                ) + 
                H.tr(
                    H.td(H.a(svgExampleFlag2), 'left') +
                    H.td('Flags in SVG format with ISO-2 naming convention', 'left')
                ) + 
                H.tr(
                    H.td(H.a(pngExampleFlag3), 'left') +
                    H.td('Flags in PNG format with ISO-3 naming convention', 'left')
                ) + 
                H.tr(
                    H.td(H.a(svgExampleFlag3), 'left') +
                    H.td('Flags in SVG format with ISO-3 naming convention', 'left')
                ) + 
                H.tr(
                    H.td(H.a(pngExampleFlagN), 'left') +
                    H.td('Flags in PNG format with full country name separated by dashes', 'left')
                ) + 
                H.tr(
                    H.td(H.a(svgExampleFlagN), 'left') +
                    H.td('Flags in SVG format with with country name separated by dashes', 'left')
                )
            ) +
            H.p('List of flags contained in this CDN location:') +
            H.table(
                H.tr(
                    H.th('PNG', 'center', 60) +
                    H.th('SVG', 'center', 60) +
                    H.th('ISO3', 'center', 60) +
                    H.th('ISO2', 'center', 60) +
                    H.th('Country', 'center', 150) +
                    H.th('Continent', 'left', 150) +
                    H.th('Region', 'left', 150) +
                    H.th('Status', 'left', 150) 
                ) +
                flagTable
            )
        )
    );

    var flagOutput = './CDN/img/flags/readme.html';
    utils.saveFile(flagOutput, code, false); 
        
    flagOutput = './CDN/img/flags/index.html';
    utils.saveFile(flagOutput, code, false); 

    cb();
}
exports.flagsReadme = gulp.series(
    // flagsLoadSVG,
    // flagsLoadPNG,
    flagsReadme,
);

exports.flagsToUpper = function flagsToUpper(cb) {
    console.log("flagsToUpper");

    var sourcePath = './CDN/img/flag/source/*.svg';
    var outputPath = './CDN/img/flag/svg/';

    gulp.src([sourcePath],
    ).pipe(rename(function (path) {
        console.log(path.basename);
        path.basename = path.basename.toUpperCase(); 
    }))
    .pipe(gulp.dest(outputPath))
    .on("end", function() {
        console.log("flagsToUpper end");
        cb();
    });
}

exports.svgFix = function svgFix(cb) {
    console.log("svgFix");

    var border = '<rect width="640" height="480" fill="none" stroke="black" stroke-width="2" />';
    var xml1 = '<?xml version="1.0" encoding="UTF-8"?>'
    var xml2 = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>'
    var viewbox = 'viewBox="0 0 640 480" width="640" height="480"'

    gulp.src([
        // './CDN/img/flag/svg/3/*.svg',
        // './CDN/img/flag/svg/3/*.svg',
        // './CDN/img/flag/svg/N/*.svg',
        './CDN/img/NEW2/sales/*.svg',
        // './CDN/img/NEW2/ui/*.svg',
        // './CDN/img/NEW2/glyph/*.svg',
        // './CDN/img/NEW2/minimal/*.svg',
        // './CDN/img/NEW2/banking/*.svg',
        // './CDN/img/NEW2/**/*.svg',
    ])
    .pipe(es.map(function(file, fileCallback) {  
        let filePath = file.dirname + '\\' + file.basename;
        let fileCode = file.basename.replace('.svg','');
        let content = file.contents.toString();

        var changed = false;
        // if (content.indexOf(viewbox) < 0) { changed = true; content = content.replace('viewBox="0 0 640 480"', viewbox); }
        // if (content.indexOf(border) < 0) { changed = true; content = content.replace("</svg>", border + "\r\n</svg>"); }
        if (content.indexOf(xml1) < 0) { changed = true; content = content.replace(xml1, xml2); }
        if (content.indexOf(xml2) < 0) { changed = true; content = content.replace("<svg", xml2 + "\r\n<svg"); }
        
        // if (content.indexOf('><') > 0) { changed = true; content = content.split("><").join(">\r\n<"); }

        if (changed)
        {
            console.log("changed " + filePath);
            utils.saveFile(filePath, content, true); 
        }

        fileCallback(null, file);
    }))
    .on("end", function() {
        console.log("svgFix end");
        cb();
    });
}

exports.flagsRename = function flagsRename(cb) {

    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    // let jp = CodeGenLib + "/WorldCountries/XPLAT.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);
    let jsonLookup =  utils.hash('Short', jsonData)

    console.log(jsonPath);
    // cb();
    // var sourcePath = './CDN/img/flags/png/large/3/*.png'; var outputPath = './CDN/img/flags/png/large/2/';
    // var sourcePath = './CDN/img/flags/png/small/3/*.png'; var outputPath = './CDN/img/flags/png/small/2/';
    // var sourcePath = './CDN/img/flags/svg/3/*.svg';       var outputPath = './CDN/img/flags/svg/2/';

    // var sourcePath = './CDN/img/flags/png/large/3/*.png'; var outputPath = './CDN/img/flags/png/large/n/';
    // var sourcePath = './CDN/img/flags/png/small/3/*.png'; var outputPath = './CDN/img/flags/png/small/n/';
    // var sourcePath = './CDN/img/flags/svg/3/*.svg';       var outputPath = './CDN/img/flags/svg/n/';

    var sourcePath = './CDN/img/flag/source/*.svg';  
    // var outputPath = './CDN/img/flag/svg/2/';
    var outputPath = './CDN/img/flag/svg/3/';
    // var outputPath = './CDN/img/flag/svg/N/';

    gulp.src([sourcePath],
    ).pipe(rename(function (path) {
        var code = path.basename.toUpperCase();

        if (jsonLookup[code] === undefined) {
            // if      (code === "UMI") { path.basename = "UM"; }
            // else if (code === "BVT") { path.basename = "BV"; }
            // else 
            // console.log(path.basename + " ISO3 missing");
            // // console.log(path)
                path.basename = "_SKIP";
            // if (code.length === 2)
                // console.log('./CDN/img/flag/source/' + code + ".svg" + " SKIP")
        }
        else {
            // var n = jsonLookup[code].Name;
            // n = n.replaceAll(' ', '-');
            // // n = n.replaceAll('Is.', 'Island');
            // if (n.indexOf('.-') > 0) {
            //     console.log(n);
            // }            
            console.log("./CDN/img/flag/source/" + code + ".svg");
            // path.basename = n;
            // path.basename = jsonLookup[code].Short;
            path.basename = jsonLookup[code].Code;
            // path.basename = jsonLookup[code].Name.replaceAll(' ', '-');
        }
        // path.basename = path.basename.toUpperCase(); // Converts the filename (excluding extension) to uppercase
    }))
    .pipe(gulp.dest(outputPath))
    .on("end", function() {
        // del.sync(outputPath + 'SKIP.png', {force:true});
        // del.sync(outputPath + 'SKIP.svg', {force:true});
        // for (let i = 0; i < jsonData.length; i++) {
        //     del.sync(outputPath + jsonData[i].Short + '.png', {force:true});
        // }
        cb();
     });
}
// exports.flagsRename = gulp.series(
//     flagsRename,
// );

exports.jsonSort = function jsonSort(cb) {
    
    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    // let jsonPath = CodeGenLib + "/WorldCountries/XPLAT.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);
    // jsonData.sort((a, b) => a.Name < b.Name ? 1 : -1);
    jsonData.sort((a, b) => a.Population < b.Population ? 1 : -1);
 
    utils.saveJSON(jsonPath, jsonData,  "compact"); 
    cb();
}

exports.json2cs = function json2cs(cb) {

    utils.json2cs('WorldStats');
    cb();
}

exports.jsonRank = function jsonRank(cb) {
    
    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    // let jsonPath = CodeGenLib + "/WorldCountries/XPLAT.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);
    // jsonData.sort((a, b) => a.Name < b.Name ? 1 : -1);
    jsonData.sort((a, b) => a.Population < b.Population ? 1 : -1);
 
    for (let i = 0; i < jsonData.length; i++) {
        jsonData[i].Rank = i + 1; 
    }
 
    utils.saveJSON(jsonPath, jsonData,  "compact"); 
    cb();
}

exports.jsonInject = function jsonInject(cb) {
    
    let jsonPath1 = CodeGenLib + "/WorldStats/XPLAT.json";
    let jsonFile1 = fs.readFileSync(jsonPath1, "utf8");
    let jsonData1 = JSON.parse(jsonFile1);
    let jsonLookup1 = utils.hash('Code', jsonData1)

    let jsonPath2 = CodeGenLib + "/WorldCountries/XPLAT.json";
    let jsonFile2 = fs.readFileSync(jsonPath2, "utf8");
    let jsonData2 = JSON.parse(jsonFile2);
    let jsonLookup2 = utils.hash('Code', jsonData2)

    var combined = [];
    for (let i = 0; i < jsonData2.length; i++) {
        
         var code = jsonData2[i].Code;
         var iso2 = jsonLookup1[code].Short;

         var item = { Code: code, Short: iso2};
         delete jsonData2[i].Code
         Object.assign(item, jsonData2[i]);
         combined.push(item);
    }

    jsonData = JSON.parse(JSON.stringify(combined));
    utils.saveJSON(jsonPath, jsonData,  "compact"); 
    cb();
}

exports.jsonDelta = function jsonDelta(cb) {
    
    let jsonPath1 = CodeGenLib + "/WorldStats/XPLAT.json";
    let jsonFile1 = fs.readFileSync(jsonPath1, "utf8");
    let jsonData1 = JSON.parse(jsonFile1);
    let jsonLookup1 = utils.hash('Code', jsonData1)

    let jsonPath2 = CodeGenLib + "/WorldCountries/XPLAT.json";
    let jsonFile2 = fs.readFileSync(jsonPath2, "utf8");
    let jsonData2 = JSON.parse(jsonFile2);
    let jsonLookup2 = utils.hash('Code', jsonData2)
    
    for (let i = 0; i < jsonData1.length; i++) { 
        var code = jsonData1[i].Code;
        if (jsonLookup2[code] === undefined) {
           console.log(jsonPath2 + ' missing ' + code);
        }
    }

    for (let i = 0; i < jsonData2.length; i++) { 
        var code = jsonData2[i].Code;
        if (jsonLookup1[code] === undefined) {
           console.log(jsonPath1 + ' missing ' + code);
        }
    }
    cb();
}

exports.jsonReplace = function jsonReplace(cb) {

    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);

    for (let i = 0; i < jsonData.length; i++) {
        
        jsonData[i].X = jsonData[i].Longitude;
        jsonData[i].Y = jsonData[i].Latitude;

         delete jsonData[i].Longitude;
         delete jsonData[i].Latitude;
    }

    jsonPath = CodeGenLib + "/WorldStats/XPLAT2.json";
    jsonData = JSON.parse(JSON.stringify(jsonData));
    utils.saveJSON(jsonPath, jsonData,  "compact"); 

    cb();
}

// let cdnWebsite = 'https://dl.infragistics.com/xplatform/cdn/'; // OLD
let cdnWebsite = 'https://dl.infragistics.com/x/'; 
let cdnServer = '\\\\s0706dl2.igweb.local\\download.infragistics.com\\x\\';
// let cdnServer = '\\\\s0706dl2.igweb.local\\download.infragistics.com\\xplatform\\cdn'; // OLD
let cdnOutput = './CDN/data/';

let cdnFiles = [];

// sync CDN by extracting large */XPLAT.json files from the code-gen-library to a local folder that needs to be manually uploaded to CDN network location
function cdnSyncData(cb)
{
    // del.sync(cdnOutput, {force:true});
    // del.sync(cdnOutput + "*.json", {force:true});
    // del.sync(cdnOutput + "*.html", {force:true});

    console.log('--------------------------------------------------------------------');
    console.log('extracting large */XPLAT.json data files from code-gen-library to: ' + cdnOutput);      
    console.log('--------------------------------------------------------------------');

    let cdnTable = [];
    let fileID = 1;
    gulp.src([
        // process data files
        CodeGenLib + '/**/XPLAT.json', 
        //     // CodeGenLib + "/StockGoogle/XPLAT.json", 
    ],  
    // {base: CodeGenLib + '/'}
    )
    .pipe(es.map(function(file, fileCallback) {

        let json = {};
        json.filePath = file.dirname + '\\' + file.basename;
        json.fileDir = file.dirname;
        json.fileName = file.basename;
        // console.log("process=" + json.filePath);

        let dataContent = file.contents.toString(); 
        let dataItems = JSON.parse(dataContent); 
 
        json.dataSize = utils.getFileSize(json.filePath);
        json.dataName = utils.getFileParentDir(json.filePath);
        json.dataItems = dataItems.length; 
        json.dataColumns = Object.keys(dataItems[0]).length;
        json.dataGrid = json.dataItems * json.dataColumns;

        // copy only large files or files with many items and/or many data columns
        if (json.dataSize >= 10 || json.dataItems >= 100 || json.dataGrid >= 500) {
            // console.log("CDN=" + json.filePath);   
            // cdnFiles.push(json.directory);
            
            let cdnName = json.dataName + ".json";
            let cdnPath = cdnOutput + cdnName ;
            let cdnLink = cdnWebsite + 'data/' + cdnName;
            let xplatGit = xplatCodeGenLibGit + json.dataName + '/' + json.fileName;
            let xplatRaw = xplatCodeGenLibRaw + json.dataName + '/' + json.fileName;
            let xplatName = 'XPLAT'; //'&#9741; XPLAT'; // file.basename
            cdnFiles.push(json);

            if (dataContent.indexOf("  {")){
                console.log(CodeGenLib + '/' + json.dataName + '/XPLAT.json');   
            }
            
            // let col =
            let row = "<tr>" +
            " <td class=\"center\"> " + fileID.toString().padStart(3) + " </td>" +
            " <td class=\"center\"> " + json.dataColumns.toString().padStart(2) + " </td>" +
            " <td class=\"right\"> " + json.dataItems.toString().padStart(5) + " </td>" +
            " <td class=\"right\"> " + json.dataSize.toString().padStart(5) + " KB </td>" +
            " <td class=\"center\">" + "<a href=\"" + xplatGit + "\">VIEW</a> | " + "<a href=\"" + xplatRaw + "\">RAW</a> </td>" +
            // " <td class=\"center\">" + "<a href=\"" + xplatRaw + "\">RAW</a> </td>" +
            " <td class=\"left\" >" + "<a href=\"" + cdnLink + "\" >"  + cdnName + "</a> </td>" +
            " </tr>\r\n"; 
            cdnTable += row;  
            // copy to cdn output
            utils.saveFile(cdnPath, dataContent, true); 
            // create config file that enables remote location for data file
            // utils.saveFile(CodeGenLib + '/' + json.dataName + '/XPLAT-CONFIG.json', '{\r\n' + '    "location": "CDN"\r\n' + '}\r\n', true); 
            fileID++;
        } 
        else {
            // console.log("fileSize=" + fileSize + " fileItems=" + fileItems + " fileGrid=" + fileGrid + " skipped: " + filePath);   
        }
        fileCallback(null, file);
 
    }))
    .on("end", function() {
        let repoXPLAT = 'https://github.com/IgniteUI/igniteui-xplat-examples/tree/' + xplatBranch;
        let repoAngular = 'https://github.com/IgniteUI/igniteui-angular-examples/tree/vnext';
        let repoBlazor  = 'https://github.com/IgniteUI/igniteui-blazor-examples/tree/vnext';
        let repoReact   = 'https://github.com/IgniteUI/igniteui-react-examples/tree/vnext';
        let repoWC      = 'https://github.com/IgniteUI/igniteui-wc-examples/tree/vnext';
        let linkCodeGen  = '<a href=\"' + repoXPLAT + '/code-gen-library">XPLAT code-gen-library</a>';
        let linkCopyCDN  = '<a href=\"' + repoXPLAT + '/code-gen-tools">copyCDN</a>';
        let linkServerCDN  = '<a href=\"' + cdnServer + 'data\\" >CDN</a>';

        let css = '<style>\r\n' +
        '.center { text-align: center; }\r\n' +
        '.right { text-align: right;  }\r\n' +
        '.left { text-align: left;  }\r\n' +
        'a { text-decoration: none;  }\r\n' +
        'tr:nth-child(even) { background-color: #e3e3e3; } \r\n' +
        'th, td { padding: 0.25rem;  }\r\n' +
        'th { background: black; color: white; position: sticky; top: 0; box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4); } \r\n' +
        '</style> '

        let readme = '<html> ' + css + '<body>\r\n' +
        '<h1> JSON Data Library</h1>\r\n\r\n' +
        '<p>This folder contains JSON files used by: ' +
        '<a href=\"' + repoXPLAT + '/samples\">XPLAT samples</a>, ' +
        '<a href=\"' + repoAngular + '/samples\">Angular samples</a>, ' +
        '<a href=\"' + repoBlazor + '/samples\">Blazor samples</a>, ' +
        '<a href=\"' + repoReact + '/samples\">React samples</a>, and ' +
        '<a href=\"' + repoWC + '/samples\">WC samples</a> samples' +
        '</p>\r\n\r\n' +
        '<p>Use the ' + linkCopyCDN + ' gulp script to collect data files from ' + linkCodeGen + ' and then manually upload them to the ' + linkServerCDN + ' network location. This way, files on CDN stay in-sync with files in ' + linkCodeGen + ' repo.</p>\r\n\r\n' +
        '<h2> Data Files </h2>\r\n\r\n' +
        '<p>This table provides statistics and list of files that were copied form ' + linkCodeGen + ' repo:</p>\r\n\r\n' + 
        '<table>\r\n' +
        '<tr> ' + 
            '<th width="80px"  class=\"center\">ID</th> ' +
            '<th width="100px" class=\"center\">COLUMNS </th> ' +
            '<th width="100px" class=\"center\">ITEMS </th> ' +
            '<th width="110px" class=\"center\">FILE SIZE </th> ' +
            '<th width="140px" class=\"center\">GITHUB LINKS </th> ' +
            // '<th width="140px" class=\"center\"> GITHUB RAW </th> ' +
            '<th width="50%"   class=\"left\">CDN LINK </th> ' +
        '</tr> \r\n' +  
        cdnTable + 
        '</table>' +
        '\r\n\r\n</body></html>';
        
        utils.saveFile(cdnOutput + "/readme.html", readme, true);
        utils.saveFile(cdnOutput + "/index.html", readme, true);
      
        console.log('');
        console.log('--------------------------------------------------------------------');
        console.log(">>> WARNING <<< TODO copy content of the ./CDN/data/ folder to:\n" + cdnServer + "data\\")
        console.log('--------------------------------------------------------------------');
        // console.log(cdnFiles); 
        // file://s0706dl2.igweb.local/download.infragistics.com/x/
        // file://s0706dl2.igweb.local/download.infragistics.com/x/
        cb();
     });
}

function cdnSyncSamples(cb) {
    
    console.log('checking if samples with CDN files have "skipAlterDataCasing" flag ... ');
    let updateSamples = [];
    gulp.src([ '../samples/**/*.json'])
    .pipe(es.map(function(sample, fileCallback) {  
        let content = sample.contents.toString();
        if (content.indexOf("skipAlterDataCasing") <= 0) {

            for (let i = 0; i < cdnFiles.length; i++) {
                const dataSource = cdnFiles[i].dataName;
                if (content.indexOf(dataSource) >= 0) { 
                    // let samplePath = sample.dirname + '/' + sample.basename;
                    let samplePath = sample.dirname + '\\' + sample.basename;
                    updateSamples.push(samplePath);

                    let lines = content.split('\n'); 
                    lines.splice(1, 0, '  \"skipAlterDataCasing\": true,');
                    
                    console.log('adding skipAlterDataCasing to: ' + samplePath);
                    utils.saveFile(samplePath, lines.join('\n'), true); 
                    break;
                }
            }
        }
        fileCallback(null, sample);
    }))
    .on("end", function() {
        // console.log("TODO add '\"skipAlterDataCasing\": true' to these samples:");
        // console.log(updateSamples);
        console.log('');
        console.log('--------------------------------------------------------------------------------------------------');
        console.log(">>> WARNING <<< TODO create PR with pending changes to files in the code-gen-library files")
        console.log('--------------------------------------------------------------------------------------------------');
        cb();
    });
}

exports.copyCDN = gulp.series(
    cdnSyncData,
    // cdnSyncSamples,
);

exports.compactJSON = function compactJSON(cb) {
    let filePaths = [
        // "/AnalyzeOrders/XPLAT.json",
        "/CompanyEmployees/XPLAT.json",
        "/CompanyData/XPLAT.json",
        "/InvoicesData/XPLAT.json",
        "/PivotDataFlat/XPLAT.json",
        "/PivotSalesData/XPLAT.json",
        "/ProductSales/XPLAT.json",
        // "/NwindLocations/XPLAT.json",
        // "/ProductSales/XPLAT.json",
        // "/FinancialDataCurrencies/XPLAT.json",
        // "/FinancialDataFuel/XPLAT.json",
        // "/FinancialDataMetals/XPLAT.json",
    ];
    for (const filePath of filePaths) {
        let file = fs.readFileSync(CodeGenLib + filePath, "utf8");
        let dataItems = JSON.parse(file);
        utils.saveJSON(CodeGenLib + filePath, dataItems,  "compact");
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
    utils.saveJSON(outputPath, orgDataItems,  "compact");
    cb();
}
exports.addFieldJSON = addFieldJSON;

exports.combineJSON = function combineJSON(cb) {

    let AllLocations = [
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
        let locations = [...AllLocations].splice(index, count);
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
    utils.saveJSON(outputPath, newDataItems,  "compact");

    let locationsDir = CodeGenLib + "/NwindLocations/"
    let locationsPath = locationsDir + "XPLAT.json";
    utils.saveJSON(locationsPath, AllLocations,  "compact");

    cb();
}

function updateColumns(dataItems, columnName) {

    for (let i = 0; i < dataItems.length; i++) {
        
        if (dataItems[i][columnName] !== undefined) {
            let newVal = utils.toNumber(dataItems[i][columnName]);
            // let newVal = utils.toNumber(dataItems[i][columnName]);
            newVal = Math.round(parseFloat(newVal));
            // dataItems[i][columnName] = newVal;
            if (dataItems[i][columnName] !== newVal) {
                // console.log(dataItems[i][columnName] + " >> " + newVal);
                // dataItems[i][columnName] = newVal;
            }
            dataItems[i][columnName] = newVal;
        }

    }

}

exports.updatePostalCode = function updatePostalCode(cb) {
    let targetColumn = '';
    // let filePath = CodeGenLib + "/CustomersData/XPLAT.json";
    // let filePath = CodeGenLib + "/CustomersDataLocal/XPLAT.json";
    // let filePath = CodeGenLib + "/HierarchicalCustomers/XPLAT.json";
    // let filePath = CodeGenLib + "/HierarchicalCustomersData/XPLAT.json";
    // let filePath = CodeGenLib + "/HierarchicalData/XPLAT.json";
    // let filePath = CodeGenLib + "/CompanyEmployees/XPLAT.json"; 
    // let filePath = CodeGenLib + "/EmployeesFlatDetails/XPLAT.json"; 
    // let filePath = CodeGenLib + "/SingersCustomers/XPLAT.json"; 
    // let filePath = CodeGenLib + "/MultiColumnsExportData/XPLAT.json";
    let filePath = CodeGenLib + "/InvoicesWorldData/XPLAT.json";
    let file = fs.readFileSync(filePath, "utf8");
    let orgDataItems = JSON.parse(file);
    for (let i = 0; i < orgDataItems.length; i++) {
        
        // let item = orgDataItems[i];
        if (orgDataItems[i].PostalCode !== undefined) {
            let newVal = utils.toNumber(orgDataItems[i].PostalCode);
            // let newVal = utils.toNumber(orgDataItems[i].PostalCode);
            newVal = Math.round(parseFloat(newVal));
            // orgDataItems[i].PostalCode = newVal;
            if (orgDataItems[i].PostalCode !== newVal) {
                // console.log(orgDataItems[i].PostalCode + " >> " + newVal);
                // orgDataItems[i].PostalCode = newVal;
            }
            orgDataItems[i].PostalCode = newVal;
        }
        else
        {
            // let newVal = utils.toNumber("bBB B");
            // newVal = Math.round(parseFloat(newVal));
            // console.log(i + " add >> " + newVal);
            // orgDataItems[i].PostalCode = newVal;          
        }

        if (orgDataItems[i].ChildCompanies !== undefined) { 
            for (let c = 0; c < orgDataItems[i].ChildCompanies.length; c++) {
                let child = orgDataItems[i].ChildCompanies[c];
                if (child.PostalCode !== undefined) {
                    let newChild = utils.toNumber(child.PostalCode).toString();
                    // newChild = Math.round(parseFloat(newChild));
                    orgDataItems[i].ChildCompanies[c].PostalCode = newChild;
                }    
                
                if (child.ChildCompanies !== undefined) { 
                    for (let w = 0; w < child.ChildCompanies.length; w++) {
                        let wnuk = orgDataItems[i].ChildCompanies[c].ChildCompanies[w];
                        if (wnuk.PostalCode !== undefined) {
                            let newChild = utils.toNumber(wnuk.PostalCode).toString();
                            // newChild = Math.round(parseFloat(newChild));
                            orgDataItems[i].ChildCompanies[c].ChildCompanies[w].PostalCode = newChild;
                        }                 
                    }
                }
            }
        }

        if (orgDataItems[i].Orders !== undefined) {

            for (let c = 0; c < orgDataItems[i].Orders.length; c++) {
                let child = orgDataItems[i].Orders[c];
                if (child.PostalCode !== undefined) {
                    let newChild = utils.toNumber(child.PostalCode);
                    newChild = Math.round(parseFloat(newChild));
                    orgDataItems[i].Orders[c].PostalCode = newChild;
                }
                if (child.ShipPostalCode !== undefined) {
                    let newChild = utils.toNumber(child.ShipPostalCode);
                    newChild = Math.round(parseFloat(newChild));
                    orgDataItems[i].Orders[c].ShipPostalCode = newChild;
                }
            }
        }
        // info.ID = "abc" + (id + i);
    }
    
    // utils.saveJSON(filePath, orgDataItems, "compact");
    utils.saveJSON(filePath, orgDataItems);

    cb();
}

exports.updateJSON = function updateJSON(cb) {

    let firstNames = ["James", "Max", "Martin", "Pamela", "Mike", "Anna", "Ben", "Nancy"];
    let lastNames = ["Smith", "Black", "Madison", "Jefferson", "Jackson", "Watson"];
    let streetNames = ["Main", "Wall", "Market"];
    let regions = ["West", "North East", "South East"];
    let shipNames = ["Market", "Home", "Estate", "Townhouse"];
    let cityNames = ["New York", "Los Angeles", "Philadelphia", "Miami", "Huston"];
    let products = ["IPad", "Mac Book Pro", "IPhone", "Mac Book Air", "Samsung Galaxy 22", "Samsung Note"];

    let shippers = ["United Package", "Speedy Express", "Federal Shipping"];
    // let filePath = CodeGenLib + "/InvoicesData/XPLAT.json";
    let filePath = CodeGenLib + "/CompanyData/XPLAT.json";
    let file = fs.readFileSync(filePath, "utf8");
    let orgDataItems = JSON.parse(file);
    // let file = fs.readFileSync(filePath, "utf8");

    let newDataItems = [];
    let id = 1000;
    for (let i = 0; i < orgDataItems.length; i++) {
        // item.CustomerFirstName = item.CustomerName.split(' ')[0];
        // item.CustomerLastName = item.CustomerName.split(' ')[0];
        // item.CustomerAddress = item.ShipAddress + ', ' + item.ShipCity + ', ' + item.ShipCountry;
        // let city = utils.randomItem(cityNames);
        // let street = utils.randomInteger(100, 200) + " " + utils.randomItem(streetNames) + " Street";
        // let first = utils.randomItem(firstNames);
        // let last = utils.randomItem(lastNames);

        let info = orgDataItems[i];
        info.ID = "abc" + (id + i);
        // let info = {};

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

        // let fraction = utils.randomDouble(0.2, .9).toFixed(2);
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
    // utils.saveJSON(filePath, newDataItems,  "compact");
    utils.saveJSON(filePath, newDataItems);
    cb();
}

function convertColumnTypes(cb) {

    // let numericColumns = ["ProductUnitPrice", "NumberOfUnits", "Value"];
    // let numericColumns = ["Product.UnitPrice", "NumberOfUnits", "Value"];
    // let numericColumns = ["UnitsSold", "Year"];
    let numericColumns = [
        // "PostalCode",
        //  "ShipPostalCode"
    //     "Open", "Close", "Low", "High", "Price", "Buy", "Sell",
    //  "ZV_SPREAD", "Change", "ChangePercent", "KRD_3YR",
    // "YearlyStart", "YearlyChange", "YearlyLow", "YearlyHigh"
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
    // let filePath = CodeGenLib + "/PivotDataFlat/XPLAT.json";
    // let filePath = CodeGenLib + "/ProductInventory/XPLAT.json";
    // let filePath = CodeGenLib + "/ProductSales/XPLAT.json";
    // let filePath = CodeGenLib + "/SingersCustomers/XPLAT.json";
    // let filePath = CodeGenLib + "/HierarchicalCustomers/XPLAT.json";
    let filePath = CodeGenLib + "/HierarchicalCustomersData/XPLAT.json";

    console.log(filePath);
    let file = fs.readFileSync(filePath, "utf8");

    let orgDataItems = JSON.parse(file);
    // console.log(orgDataItems[0]);

    orgDataItems = utils.toNumberRecursive(orgDataItems, 3, numericColumns, true);

    // for (const item of orgDataItems) {

    //     let columnNames = Object.keys(item);
    //     // let columnNames = numericColumns;
    //     for (const column of columnNames) {

    //         if (item[column]) {
    //             let val = utils.strToNumber(item[column], 2);
    //             if (val) {
    //                 item[column] = val;
    //                 if (!convertedColumns.includes(column)) {
    //                      convertedColumns.push(column);
    //                 }
    //             }
    //         }
    //         // else if (column.indexOf(".") > 0) {
    //         //     let parts = column.split(".");
    //         //     let propObject = parts[0];
    //         //     let propName = parts[1];
    //         //     if (item[propObject] && item[propObject][propName]) {
    //         //         item[propObject][propName] = parseFloat(item[propObject][propName]);
    //         //     }
    //         // }
    //     }
    // }

    // console.log(orgDataItems[0]);
    // console.log(orgDataItems[0].Orders[0]);

    // console.log(orgDataItems[0].Orders[0].OrderDetails);
    // console.log(orgDataItems[1]);
    // console.log(convertedColumns);
    utils.saveJSON(filePath, orgDataItems); //,  "compact");
    cb();
}
exports.convertColumnTypes = convertColumnTypes;

exports.convertDAB = function convertDAB(cb) {
    let csvName = 'births-and-deaths';
    let csvPath = 'C:\\WORK\\_SAMPLES\\DATA\\births-and-deaths\\';
    csvData = fs.readFileSync(csvPath + 'births-and-deaths.csv', "utf8");

    let jsonData = [];
    let csvLines = csvData.split('\r\n');
    let csvColumns = csvLines[0].split(',');

    let worldFile = fs.readFileSync(CodeGenLib + "/WorldStats/XPLAT.json", "utf8");
    let worldStats = JSON.parse(worldFile);
    let worldLookup = {};
    
    for (const item of worldStats) {
        worldLookup[item.Code] = item;
    }

    // console.log("csvColumns");
    // console.log(csvColumns);
    // console.log(csvPath + '.csv');

    let jsonLookup = [];

    let linesPasses = 0;
    for (let i = 1; i < csvLines.length; i++) {
    // for (let i = 600; i < 610; i++) {
    // for (let i = 70; i < 80; i++) {
        
        const csvRow = csvLines[i].split(',');
        if (csvRow === undefined || csvRow.length <= 1) {
            continue;
        }

        let code = csvRow[1];
        if (code === "" || code === null || code.includes("-")) continue;

        if (jsonLookup[code] === undefined){
            jsonLookup[code] = [];
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
            // let num = utils.strToNumber(value);
            if (typeof(num) === "number") {
                num = Math.round(num);
                jsonItem[column] = num;
                // jsonItem[column] = num;
            } else {
                jsonItem[column] = value;
                // jsonItem[column] = value;
            }

            // console.log("linesPass " + linesPasses + " " + column + " " + num + " " + typeof(num));
            // console.log("linesPass " + linesPasses + " " + column + " " + num);

            // if (num !== null) {
            //     jsonItem[column] = num;
            // } else {
            //     jsonItem[column] = value;
            // }
        }

        // if (jsonItem.Population > 1000) {
        //     jsonItem["GdpPerPerson"] = Math.round(jsonItem["GdpTotal"] * 1000000 / jsonItem["Population"]);
        jsonLookup[code].push(jsonItem);
        // jsonData.push(jsonItem);
        // }
    }

    let years = [2024, 2025];
 
    let worldData = [];
    let codeSkip = [];
    let codes = Object.keys(jsonLookup);
    for (const code of codes) {
 
        let name = jsonLookup[code][0].Name;
        
        // console.log("code " + code + " name=" + name);
        if (name === undefined || name === null) {
            console.log("MISSING Name " + code);
            continue;
        }

        for (const item of jsonLookup[code]) {
            if (years.indexOf(item.Year) >= 0) {
                item["DeathsRate"] = item["DeathsProjection"];
                item["BirthsRate"] = item["BirthsProjection"];
                item["DeathsProjection"] = null;
                item["BirthsProjection"] = null;
            }

            if (item["BirthsRate"] !== null) {
                item["GrowthRate"] = item["BirthsRate"] - item["DeathsRate"];
                item["GrowthProjection"] = null;
            } 
            if (item["BirthsProjection"] !== null && item["DeathsProjection"] !== null) {
                item["GrowthProjection"] = item["BirthsProjection"] - item["DeathsProjection"];
                // item["GrowthRate"] = null;
            } 

            if (code.indexOf('_') < 0) {

                let info = worldLookup[code];
                if (code === "BES" || code === "GLP" || code === "MTQ") {
                    item.Continent = "North America";
                    item.Region = "Central America";
                    item.Economy = "Emerging";

                } else if (code === "MYT") {
                    item.Continent = "Asia";
                    item.Region = "South Asia";
                    item.Economy = "Emerging"; 

                } else if (code === "TUV" || code === "TKL" || code === "REU") {
                    item.Continent = "Oceania";
                    item.Region = "Polynesia";
                    item.Economy = "Emerging"; 

                } else if (code === "GUF") {
                    item.Continent = "South America";
                    item.Region = "South America";
                    item.Economy = "Emerging"; 

                } else if (code === "GIB" || code === "VAT") {
                    item.Continent = "Europe";
                    item.Region = "Southern Europe";
                    item.Economy = "Developed";


                } else if (info === undefined) {
                    // console.log("MISSING worldLookup " + code);
                } else {
                    item.Continent = worldLookup[code].Continent;
                    item.Region = worldLookup[code].Region;
                    item.Economy = worldLookup[code].Economy;
                }

                let worldItem = JSON.parse(JSON.stringify(item));
                worldData.push(worldItem);
            }

            item.Name = undefined;
            item.Code = undefined;
        }

        if (code.includes("_")) {
            // let jsonPath = csvPath + "PopulationBirths" + name.split(' ').join('') +  '/XPLAT.json'; 
            let jsonPath = CodeGenLib + "/PopulationBirths" + name.split(' ').join('') +  '/XPLAT.json'; 
            utils.saveJSON(jsonPath, jsonLookup[code],  "compact"); 
        }
        // let jsonPath = csvPath + code + "_" + name.split(' ').join('_') +  '.json'; 
        // utils.saveJSON(jsonPath, jsonLookup[code],  "compact"); 
      
    }

     
    let worldPath = CodeGenLib + "/PopulationBirthsByCountry" +  '/XPLAT.json'; 
    utils.saveJSON(worldPath, worldData,  "compact"); 
      

    

    // let jsonPath = CodeGenLib + "/BirthsAndDeaths/XPLAT.json";
    // let jsonPath = csvPath + '.json';
    // utils.saveJSON(jsonPath, jsonData,  "compact");
    // utils.saveJSON(jsonPath, jsonLookup,  "compact");
    cb();
}

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
            jsonItem["GdpPerPerson"] = Math.round(jsonItem["GdpTotal"] * 1000000 / jsonItem["Population"]);
            jsonData.push(jsonItem);
        }

    }
    jsonData.sort((a, b) => a.Population < b.Population ? 1 : -1);

    for (let i = 0; i < jsonData.length; i++) {
        jsonData[i].Rank = i + 1;
    }

    let jsonPath = CodeGenLib + "/WorldStats/XPLAT.json";
    utils.saveJSON(jsonPath, jsonData,  "compact");
    cb();
}

exports.injectWorldStats = function injectWorldStats(cb) {   
    let file1Path = CodeGenLib + "/WorldStats/XPLAT.json";
    let file1 = fs.readFileSync(file1Path, "utf8");
    let file1Data = JSON.parse(file1);
    file1Data.sort((a, b) => a.Name < b.Name ? 1 : -1);
    
    // let file2Path = CodeGenLib + "/WorldDebtAndPopulation/XPLAT.json";
    // let file2 = fs.readFileSync(file2Path, "utf8");
    // let file2Data = JSON.parse(file2);
    // file2Data.sort((a, b) => a.Name < b.Name ? 1 : -1);

    let notFound = [];
    // for (let i = 0; i < file1Data.length; i++) {
        // let item2 = file1Data[i];  

        let missing = true;
        // for (let ii = 0; ii < file1Data.length; ii++) {
        //     let item1 = file1Data[ii];
        //     if (file1Data[ii].Name === item2.Name) {

        //         file1Data[ii].Unemployment = item2.Unemployment;
        //         file1Data[ii].Televisions = item2.Televisions;
        //         file1Data[ii].PublicDebt = item2.PublicDebt;
        //         file1Data[ii].OilProduction = item2.OilProduction;
        //         file1Data[ii].MedianAge = item2.MedianAge;
        //         file1Data[ii].Internet = item2.InternetUsers;
        //         file1Data[ii].Electricity = item2.ElectricityProduction;
        //         file1Data[ii].BirthRate = item2.BirthRate; 
        //         missing = false;
        //         break; 
        //     }
        // } 
        for (let ii = 0; ii < file1Data.length; ii++) {
            // if (!file1Data[ii].Unemployment) {
            //     file1Data[ii].Unemployment = Math.round(utils.randomInteger(1, 15));
            //     file1Data[ii].OilProduction = utils.randomInteger(0, 5);
            //     file1Data[ii].BirthRate = utils.randomInteger(5, 25);
            //     file1Data[ii].MedianAge = utils.randomInteger(30, 55);
            //     file1Data[ii].Electricity = utils.randomInteger(3000, 95000);
            //     file1Data[ii].InternetUsers = Math.round(utils.randomInteger(file1Data[ii].Population * 0.3, file1Data[ii].Population * 0.8));
            //     file1Data[ii].Televisions = Math.round(utils.randomInteger(file1Data[ii].Population * 0.1, file1Data[ii].Population * 0.8));
            // }

            if (!file1Data[ii].PublicDebt) {
                 file1Data[ii].PublicDebt = Math.round(utils.randomInteger(5, 45));
            }
            if (!file1Data[ii].Internet) {
                 file1Data[ii].Internet = Math.round(utils.randomInteger(1000, file1Data[ii].Population * 0.8));
            }
            file1Data[ii].InternetUsers = undefined; 
            // file1Data[ii].InternetUsers = Math.round(file1Data[ii].InternetUsers);
            // file1Data[ii].Televisions = Math.round(file1Data[ii].Televisions);
        // }

        file1Data.sort((a, b) => a.Population < b.Population ? 1 : -1);

        if (missing) {
            // console.log("not found " + i + " " + item2.Name);
        } 
    }
    // console.log(notFound);

    utils.saveJSON(file1Path, file1Data,  "compact");
    // utils.saveJSON(file2Path, file2Data,  "compact");
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
    utils.saveJSON(jsonPath, jsonData,  "compact");
    cb();
}

exports.convertReveal = function convertReveal(cb) {

    var csvNames = [
        'EmailMarketingCampaign',
        'Healthcare', 
        'LineBug',
        'Management',
        'Manufacturing',
        'Marketing',
        'RevenueAndProfitability',
        'Sales', 
    ];

    for (const csvName of csvNames)
    {
        let cvsPath = 'C:/WORK/_DATA/Reveal/' + csvName + '.csv';
        console.log('loading ' + cvsPath);
        // let csv = utils.readCSV('C:/WORK/_DATA/Reveal/SalesTest.csv');
        let csv = utils.readCSV(cvsPath);

        var jsonData = [];
        for (let i = 0; i < csv.data.length; i++) {
            var item = csv.data[i];
            item.Index = i;
            jsonData.push(item);

        
            //   for (let c = 0; c < csv.columns.length; c++) {
            //     // this.item[c] = strTitleCase(this.columns[c]);
            // }
        }

        // console.log(JSON.stringify(jsonData));
        jsonData = JSON.parse(JSON.stringify(jsonData));

        let jsonPath = './CDN/TMP/' + csvName + 'Data.json';
        utils.saveJSON(jsonPath, jsonData,  "compact");

        let codePath = jsonPath.replace('.json','.cs');
        utils.json2cs(csvName + 'Data', csvName + 'Item', jsonPath, codePath);

    }
 
    
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

    let missing = [];
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
                missingSector.push('500,Company,' + item.Symbol + ',$0.0 M,United States,');
                // missingSector.push(item.Symbol);
        }

        console.log(missingSector.join('\n'));
        console.log('missingSymbols=' + missingSector.length);

        let path = CodeGenLib + "/StockMarket" + number + "/XPLAT.json";
        utils.saveJSON(path, data,  "compact");

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

    // let stockSymbols = ['IBM', 'TSLA', 'MSFT', ];
    let stockSymbols = [];
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
    let stockCounter = 0;
    let allSymbols = getStockSymbols(4000);
    let stockSymbols = [];
    let lastSymbol = 0;
    for (let i = 0; i < allSymbols.length; i++) {
        let symbol = allSymbols[i];
        let outputPath = '../convert/yahoo/' + symbol + '.json';
        if (!fs.existsSync(outputPath)) {
            stockSymbols.push(symbol);
            lastSymbol = i;
        }
        if (stockSymbols.length > 15) break;
    }

    console.log('allSymbols=' + allSymbols.length);
    console.log('stockSymbols=' + stockSymbols.length);
    function parseStock(symbol, data, url) {
        let stock = {};
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
                let name = info[0];
                let value = info[1];
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
                utils.saveJSON(outputPath, [stock],  "compact");
            }
        }
        // console.log(symbol + '  ' + data.MarketCapitalization);
        if (stockCounter >= stockSymbols.length) {
            // let jsonPath = CodeGenLib + "/StockMarketTMP/XPLAT.json";
            // utils.saveJSON('../convert/yahoo/sectors.json', stockSectors,  "compact");
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

    let stockSymbols = [];
    for (let i = 0; i < sp500.data.length; i++) {
        let company = sp500.data[i];
        let symbol = company.Symbol;
        let outputPath = stocksFolder + symbol + '.json';

        if (!fs.existsSync(outputPath)) {
            stockSymbols.push(symbol);
        }

        if (stockSymbols.length >= 5) break;
    }

    let columns = ['Symbol', 'Name', 'Country', 'Exchange','Sector', 'Industry', 'MarketCapitalization',
     'EBITDA', 'PERatio', 'TrailingPE', 'ForwardPE', 'DividendPerShare', 'DividendYield',  'EPS', 'ProfitMargin', 'OperatingMarginTTM',
    'RevenuePerShareTTM',
    'RevenueTTM', 'GrossProfitTTM', 'PriceToSalesRatioTTM', 'PriceToBookRatio',
    'Beta', '52WeekHigh', '52WeekLow', '50DayMovingAverage', '200DayMovingAverage', 'SharesOutstanding'];

    let stockData = [];
    let stockCounter = 0;

    function parseStock(outputPath, data) {
        let stock = {};
        for (const column of columns) {
            // if (data.MarketCapitalization) {
                let name = column.replace('TTM','').replace('PERatio','CurrentPE')
                .replace('Capitalization','Cap').replace('Ratio','').replace('MovingAverage','Average');
                // stock[name] = data.column;
                stock[name] = data[column];
            // }
        }
        // stockData.push(stock);
        if (stock.Sector !== undefined) {
            utils.saveJSON(outputPath, [stock], "compact");
        }

        // console.log(symbol + '  ' + data.MarketCapitalization);
        if (stockCounter >= stockSymbols.length) {
            // let jsonPath = CodeGenLib + "/StockMarketTMP/XPLAT.json";
            // utils.saveJSON(outputPath, stockData,  "compact");
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
        // let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=demo';
        // let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=AZ6V4V9MYY61IDL5';
        // let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=MF509CVMN4P2ACMP';
        let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=KLP643CXASZEMGZY';
        // let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + symbol + '&apikey=B0KRIHH8G3ODPKGZ';
        // let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IMB&apikey=demo';
        // let url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IMB&apikey=AZ6V4V9MYY61IDL5';

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
    let fileCounter = 0;
    let jsonCounter = 0;
    let jsonStocks = [];
    let stockSectors = [];
    let stockIndustry = [];
    let stockIncomplete = [];

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
        // let filePath = getPath(file);
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

        utils.saveJSON("../convert/market-sectors-yahoo.json", jsonStocks,  "compact");

        cb();
     });
}

exports.json2csv = function json2csv(cb) {
    let jsonPath = "../convert/market-sectors-yahoo.json";
    // let jsonPath = "C:\\WORK\\igniteui-xplat-examples\\code-gen-library\\ArtistData\\XPLAT.json";

    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let items = JSON.parse(jsonFile);

    let lines = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        let columns = Object.keys(item);
        if (i === 0) {
            let line = '"' + columns.join('","') + '"';
            lines.push(line);
        }

        let line = JSON.stringify(item, null, '');
        for (const column of columns) {
            line = line.replace('"' + column + '":', '').replace('{','').replace('}','');
        }
        lines.push(line);
    }

    let csvContent = lines.join('\n');
    let csvPath = jsonPath.replace('.json', '.csv');
    utils.saveFile(csvPath, csvContent);

    if (cb !== undefined) {
        cb();
    }
}


exports.verifyJSON = function verifyJSON(cb)
{
    let verified = true;
    console.log("--------------------------------------------------------------------");   
    console.log('verifying XPLAT.JSON files:');      
    console.log("--------------------------------------------------------------------");   
    
    gulp.src([
        CodeGenLib + '/**/XPLAT.json',   
        // CodeGenLib + '/WorldStats/XPLAT.json',   
    ],  {base: CodeGenLib + '/'})
    .pipe(es.map(function(file, fileCallback) { 
        let jsonPath = file.dirname + '\\' + file.basename;
        let jsonContent = file.contents.toString();
        let jsonArray = JSON.parse(jsonContent);
        let verified = true; 
        let initColumnTypes = {};
        let initColumnNames = Object.keys(jsonArray[0]);
        let extraColumnNames = [];
        let issues = [];
    
        for (let i = 0; i < jsonArray.length; i++) {
            let item = jsonArray[i];
            let itemColumns = Object.keys(item);
            for (let columnName of itemColumns) {
                if (initColumnNames.indexOf(columnName) < 0) {
                    // initColumnNames.push(columnName);
                    extraColumnNames.push(columnName);
                    issues.push("Item #" + i + " has extra '" + columnName + "' column");
                    verified = false; break;    
                }
                let valType = typeof(item[columnName])
                if (valType !== 'object') {
                    initColumnTypes[columnName] = valType;
                }
            }
            if (!verified) {
                break;    
            }
        }
        for (let i = 0; i < jsonArray.length; i++) {
            let item = jsonArray[i];
            for (let columnName of initColumnNames) {
                if (item[columnName] === undefined) {
                    var name = item.Name !== undefined ? ' in "' + item.Name + '"' : ''
                    issues.push("Item #" + i + " is missing '" + columnName + "' column" + name);
                    verified = false; break;    
                } 

                if (item[columnName] !== undefined && initColumnTypes[columnName] !== undefined && 
                    item[columnName] !== null) {
                    let expectType = initColumnTypes[columnName];
                    let actualType = typeof(item[columnName]);
                    if (actualType !== expectType) {
                        issues.push("Item #" + i + " - '" + columnName + "' column (" + item[columnName] + ") is '" + actualType + "' instead of '" + expectType + "' type");
                
                    }
                }
            }

            if (!verified) {
                break;    
            }
        }

        if (issues.length > 0) {
            console.log("verification failed in " + jsonPath);
            for (let issue of issues) {
                console.log(issue);
            }
        }


        fileCallback(null, file);
    })) 
    .on("end", function() {
        cb();
     });
}


function correctDATA(jsonArray, fileCallback, file)
{ 
    let columnNames = [];
    let columnTypes = {};

    for (let i = 0; i < jsonArray.length; i++) {
        
        let item = jsonArray[i];
        let itemColumns = Object.keys(item);

        for (let columnName of itemColumns) {
            if (columnNames.indexOf(columnName) < 0) {
                columnNames.push(columnName);

                let valType = typeof(item[columnName])

                
                console.log(columnName + ' ' + valType);

                if (valType !== 'object') {
                    columnTypes[columnName] = valType;
                }
            }
        }
        break;
    }
    
    if (fileCallback) {   
        fileCallback(null, file);
    }
}


exports.correctJSON = function correctJSON(cb)
{ 
    console.log("typeof=" + typeof([]));

    // let CDN = './CDN';
        let verified = true;
    console.log("--------------------------------------------------------------------");   
    console.log('correcting XPLAT.JSON files:');      
    console.log("--------------------------------------------------------------------");   
    // this function copied large data files to CDN 
    gulp.src([
        // CodeGenLib + '/**/XPLAT.json',   
        // CodeGenLib + '/**/HierarchicalCustomers/XPLAT.json',   
        CodeGenLib + '/**/HierarchicalData/XPLAT.json',   
        // CodeGenLib + '/**/HierarchicalCustomersData/XPLAT.json',   
        // CodeGenLib + '/WorldStats/XPLAT.json',   
    ],  {base: CodeGenLib + '/'})
    .pipe(es.map(function(file, fileCallback) { 
        let jsonPath = file.dirname + '/' + file.basename;
        let jsonContent = file.contents.toString();
        let jsonArray = JSON.parse(jsonContent);
        let verified = true;
        let columnNames = [];
        let columnTypes = {};

        correctDATA(jsonArray, fileCallback, file);

        // for (let i = 0; i < jsonArray.length; i++) {
        //     let item = jsonArray[i];
        //     let itemColumns = Object.keys(item);
        //     for (let columnName of itemColumns) {
        //         if (columnNames.indexOf(columnName) < 0) {
        //             columnNames.push(columnName);

        //             let valType = typeof(item[columnName])
        //             if (valType !== 'object'){
        //                 columnTypes[columnName] = valType;
        //             }
        //         }
        //     }
        // }
        // for (let i = 0; i < jsonArray.length; i++) {
        //     let item = jsonArray[i];
        //     for (let columnName of columnNames) {
        //         // if (item[columnName] === undefined) {
        //         //     console.log("Item #" + i + " is missing '" + columnName + "' column in " + jsonPath)
        //         //     // verified = false; break;    
        //         // } 

        //         if (item[columnName] !== undefined && columnTypes[columnName] !== undefined && item[columnName] !== null) {
        //             let extType = columnTypes[columnName];
        //             let actType = typeof(item[columnName]);
        //             if (actType !== extType) {
        //                 console.log("Correcting item #" + i + " - '" + columnName + "' column (" + item[columnName] + ") is '" + actType + "' instead of '" + extType + "' in " + jsonPath)
                        
        //                 if (columnName === "City") {
        //                     jsonArray[i][columnName] = "Sao Paulo";
        //                 }
        //                 if (columnName === "ContactTitle") {
        //                     jsonArray[i][columnName] = "Sales Associate";
        //                 } 
        //                 if (columnName === "Region") {
        //                     jsonArray[i][columnName] = "Northeast";
        //                 } 
        //                 // fileCallback(null, file);
        //                 // verified = false; 
        //             }
        //             // verified = false; 
        //         } 
        //     }
        //     if (!verified) {
        //         break;    
        //     }
        // }
        // utils.saveJSON(jsonPath, jsonArray);

        // fileCallback(null, file);
    })) 
    .on("end", function() {
        cb();
     });
}


function replaceJSON(cb) {
    // let filePath = CodeGenLib + "/AthletesData/XPLAT.json";
    let filePath = CodeGenLib + "/AthletesDataExtended/XPLAT.json";
    let file = fs.readFileSync(filePath, "utf8");

    let lines = file.split('\r\n');
    for (let i = 0; i < lines.length; i++) {

        var line = lines[i];
        if (line.indexOf('/flags/') < 0) continue;
        // lines[i].ID = 10000 + i;
        var start = "https://static.infragistics.com/xplatform/images/flags/iso2/";
        var end = ".png";

        var indexStart = line.indexOf(start);
        var indexEnd = line.indexOf(end);
        var iso = line.toString().substring(indexStart + start.length, indexEnd);
        line = line.replace(start, "https://dl.infragistics.com/x/img/flags/");
        line = line.replace(iso + ".png", iso.toUpperCase() + ".png");
        lines[i] = line;
        // console.log(iso + " " + lines[i].substring(indexStart));
    }
    file = lines.join('\r\n');

    // filePath = CodeGenLib + "/AthletesData/XPLAT2.json";
    utils.saveFile(filePath, file);
 
    cb();
}
exports.replaceJSON = replaceJSON;


function flagsReplace(cb) {
    let filePath = "C:\\WORK\\igniteui-blazor-examples\\samples\\grids\\grid\\toolbar-sample-4\\PlayersData.cs";
    let file = fs.readFileSync(filePath, "utf8");

    let lines = file.split('\r\n');
    for (let i = 0; i < lines.length; i++) {

        var line = lines[i];
        if (line.indexOf('/flags/') < 0) continue;

        var start = "flags/";
        var end = ".png";

        var indexStart = line.indexOf(start);
        var indexEnd = line.indexOf(end);
        var iso = line.toString().substring(indexStart + start.length, indexEnd);
        line = line.replace(start, "flags/");
        line = line.replace(iso + ".png", iso.toUpperCase() + ".png");
        lines[i] = line;
        console.log(iso + " " + lines[i].substring(indexStart));
    }
    file = lines.join('\r\n');
    utils.saveFile(filePath, file);
 
    cb();
}
exports.flagsReplace = flagsReplace;


exports.checkFiles = function checkFiles(cb)
{
    let sourceFiles = [];
    let rootPaths = [
      // "..\\..\\igniteui-angular-examples\\samples\\charts\\doughnut-chart\\animation",
      //  "..\\..\\igniteui-blazor-examples\\samples\\charts\\doughnut-chart\\animation",
      //   "..\\..\\igniteui-react-examples\\samples\\charts\\doughnut-chart\\animation",
        //    "..\\..\\igniteui-wc-examples\\samples\\charts\\doughnut-chart\\animation",
        //    "..\\..\\igniteui-wc-examples\\samples\\charts\\dashboard-tile\\gauge-dashboard",

     "..\\..\\igniteui-angular-examples\\samples",
      "..\\..\\igniteui-blazor-examples\\samples",
       "..\\..\\igniteui-react-examples\\samples",
          "..\\..\\igniteui-wc-examples\\samples",
    ];
    for (const rootPath of rootPaths) {
        sourceFiles.push(rootPath + '\\**\\*.*');
        sourceFiles.push('!' + rootPath + '\\**\\typings.d.ts'); 
        sourceFiles.push('!' + rootPath + '\\**\\tsconfig.json'); 
        sourceFiles.push('!' + rootPath + '\\**\\tsconfig.app.json'); 
        sourceFiles.push('!' + rootPath + '\\**\\sandbox.config.json');  
        sourceFiles.push('!' + rootPath + '\\**\\package.json'); 
        sourceFiles.push('!' + rootPath + '\\**\\package-lock.json'); 
        sourceFiles.push('!' + rootPath + '\\**\\angular.json'); 
        sourceFiles.push('!' + rootPath + '\\**\\tslint.json');  
        sourceFiles.push('!' + rootPath + '\\**\\polyfills.ts');  
        sourceFiles.push('!' + rootPath + '\\**\\vite.config.js');  
        sourceFiles.push('!' + rootPath + '\\**\\webpack.config.js');  
        sourceFiles.push('!' + rootPath + '\\**\\odatajs-4.0.0.js');  
        sourceFiles.push('!' + rootPath + '\\**\\environments\\*.*'); 
        sourceFiles.push('!' + rootPath + '\\**\\Properties\\launchSettings.json');  
        sourceFiles.push('!' + rootPath + '\\**\\BlazorClientApp.csproj');  
        sourceFiles.push('!' + rootPath + '\\**\\BlazorClientApp.sln'); 
        sourceFiles.push('!' + rootPath + '\\**\\Program.cs');   
        sourceFiles.push('!' + rootPath + '\\**\\_Imports.razor');  
        sourceFiles.push('!' + rootPath + '\\**\\node_modules\\**');   
        sourceFiles.push('!' + rootPath + '\\**\\dist\\**');   
        sourceFiles.push('!' + rootPath + '\\**\\build\\**');   
        sourceFiles.push('!' + rootPath + '\\**\\bin\\**');   
        sourceFiles.push('!' + rootPath + '\\**\\obj\\**');   
        sourceFiles.push('!' + rootPath + '\\**\\packages\\**');   
        sourceFiles.push('!' + rootPath + '\\**\\*.png'); 
        sourceFiles.push('!' + rootPath + '\\**\\*.jpg'); 
        sourceFiles.push('!' + rootPath + '\\**\\*.svg'); 
        sourceFiles.push('!' + rootPath + '\\README.md');  
    }

    let foundLinks = 0; 

    gulp.src(sourceFiles) //,  {base: rootPath + '/'})
    .pipe(es.map(function(file, fileCallback) { 
        let filePath = file.dirname + '\\' + file.basename;
        // console.log(filePath);  
        let fileContent = file.contents.toString();
        let fileLines = fileContent.split('\r\n');
 
        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i];
            if (line.indexOf('wwww.') >= 0 
                  && line.indexOf('/xplatform/data/') < 0
                  && line.indexOf('/xplatform/json/') < 0
                  && line.indexOf('/xplatform/shapes/') < 0
            && line.indexOf('dl.infragistics.com') < 0 
            && line.indexOf('microsoft.com') < 0
            && line.indexOf('googleapis.com') < 0
            && line.indexOf('fontawesome.com') < 0 
            && line.indexOf('svgrepo.com') < 0 
            && line.indexOf('codemag.com') < 0
            && line.indexOf('unsplash.com') < 0
            && line.indexOf('arcgisonline.com') < 0
            && line.indexOf('indigo.design') < 0  
            && line.indexOf('meziantou.net') < 0  
            && line.indexOf('picsum.photos') < 0 
            && line.indexOf('ibb.co') < 0   
            && line.indexOf('npmjs.org') < 0  
            && line.indexOf('w3.org') < 0  
            && line.indexOf('mozilla.org') < 0  
            && line.indexOf('amazonaws.com') < 0  
            && line.indexOf('istockphoto.com') < 0  
            && line.indexOf('mapbox.com') < 0  
            && line.indexOf('noaa.gov') < 0
            && line.indexOf('abcotvs.net') < 0
            && line.indexOf('abcnews.com') < 0
            && line.indexOf('geonames.org') < 0
            && line.indexOf('wikipedia.org') < 0 
            && line.indexOf('apache.org') < 0 
            && line.indexOf('odata.org') < 0 
            && line.indexOf('igniteui.com/api') < 0
            && line.indexOf('unpkg.com') < 0 
            && line.indexOf('infragistics.com/"') < 0 
            && line.indexOf('infragistics.com/products/') < 0 
            && line.indexOf('infragistics.com/blazor-apps/') < 0
            && line.indexOf('ReadMe.md') < 0
            && line.indexOf('.git') < 0 
            && line.indexOf('.replace') < 0
            && line.indexOf('localhost') < 0
            && line.indexOf('iframe') < 0
            && line.indexOf('url.indexOf') < 0
            && line.indexOf('window.location') < 0
            && line.indexOf('location.protocol') < 0 
            && line.indexOf('consult https') < 0
            && line.indexOf('/tree/master') < 0
            && line.indexOf('/tree/vnext') < 0
            && line.indexOf('noopener noreferrer') < 0
            && line.indexOf('general-getting-started.html') < 0) {
                console.log(filePath + ":" + (i+1) + "         " + line);
                foundLinks++;
                break;
            }
        }
        fileCallback(null, file);
    })) 
    .on("end", function() {
        console.log("--------------------------------------------------------------------");  
        console.log("foundLinks=" + foundLinks)
        cb();
     });
}


exports.svgRename = function svgRename(cb) {
    console.log("svgRename");

    let names = {};
    gulp.src('./CDN/img/NEW/**/*.svg', { base: './CDN/img/NEW/' })
    // .pipe(es.map(function(file, fileCallback) {
    //     var parts = file.basename.split('-');
    //     var name = parts[2] + ".svg";
    //     if (names[name] === undefined) {
    //         // console.log("renamed: " + name);
    //         names[name] = true;
    //         let content = file.contents.toString();
    //         var filePath = file.dirname + '\\';
    //         utils.saveFile(filePath + name, content, false); 
    //     } else {
    //         console.log("fail renamed: " + path.basename);
    //     }
    //     fileCallback(null, file);
    // }))
    .pipe(rename(function (path) {
        if (path.basename.indexOf('-') > 0) {
            var parts = path.basename.split('-');
            var name = parts[2]; // + ".svg";
            // if (names[name] === undefined) {
                path.basename = name;
        }
    }))
    .pipe(gulp.dest('./CDN/img/NEW2/'))
    .on("end", function() {
        console.log("svgRename end");
        cb();
    });
}

exports.svgExport = function svgExport(cb) {
    console.log("svgExport");
    let folder = ''

    // folder = 'jobs';
    // folder = 'banking';
    // folder = 'books';
    // folder = 'currency';
    // folder = 'elections';
    // folder = 'estates';
    // folder = 'nav';
    folder = 'rockets';
    // folder = 'shop';
    // folder = 'simple';
    // folder = 'sports';
    // folder = 'stars';
        // folder = 'sales';
    // folder = 'ui';
    // folder = 'glyph';
    // folder = 'minimal';
        // folder = '**';
 
    var sourceFiles = [
        './CDN/img/NEW2/' + folder + '/*.svg',
        // './CDN/img/NEW2/' + folder + '/add.svg',
        // './CDN/img/NEW2/' + folder + '/airplay.svg',
        // './CDN/img/NEW2/' + folder + '/copy.svg'
    ];
    gulp.src(sourceFiles, { base: './CDN/img/NEW2/' + folder })
    // gulp.src('./CDN/img/NEW2/' + folder + '/add.svg', { base: './CDN/img/NEW2/' + folder })
    // .pipe(es.map(function(file, fileCallback) {
    //     var sourcePath = file.dirname + '\\' + file.basename;
    //     var outputPath = file.dirname + '\\' + file.basename;
    //     outputPath = outputPath.replace('NEW2','NEW3');
    //     console.log("converting: " + sourcePath);
    //     try {
    //         const inputBuffer = fs.readFileSync(sourcePath);
    //         // const inputBuffer = file.contents.toString();;
    //         // const outputBuffer = svg2png.execute(inputBuffer, { filename: sourcePath }); // Pass filename option if needed for relative paths
    //         const outputBuffer = svg2png.execute(file, fileCallback); // Pass filename option if needed for relative paths
    //         // fs.writeFileSync(outputPath, outputBuffer);
    //         // utils.saveFile(outputPath, outputBuffer.toString(), true); 
    //         console.log("converting: " + sourcePath + ' successful!');
    //     } catch (error) {
    //         console.log("converting: " + sourcePath + ' failed!');
    //         console.error('Conversion failed:', error);
    //     }

    //    fileCallback(null, file);
    // }))
    // .pipe(svg2png(1.0, false, null))
    .pipe(svg2png())
    // .pipe(tap(function (file) {
    //   console.log('Converted: ' + file.path);
    // }))
    .pipe(gulp.dest('./CDN/img/NEW4/' + folder))
    .on("end", function() {
        console.log("svgExport end");
        cb();
    });
}


// https://dl.infragistics.com/x/img/index.html
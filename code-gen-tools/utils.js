let del = require('del');
let fs = require('fs.extra');
let path = require('path');
let utils = require('./utils.js')
let request = require('request');
let rename = require('gulp-rename');

let CodeGenLib = "../code-gen-library";

exports.getFileSize = getFileSize = function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      return Math.round(stats.size / 1024);
    } else {
      return -1;
    }
}

exports.getFileParentDir = getFileParentDir = function getFileParentDir(filePath) {
    let parts = filePath.split('\\');
    return parts[parts.length - 2]
}

exports.saveFile = saveFile = function saveFile(filePath, fileContent, skipLog) {
    let dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
         fs.mkdirSync(dirname); // ensure directory exists
    }
    if (!skipLog) {
        console.log("saving " + filePath);
    }
    fs.writeFileSync(filePath, fileContent);
}

exports.saveJSON = saveJSON = function saveJSON(filePath, dataItems, mode) {
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
        jsonStr = utils.strReplace(jsonStr, '":0', '": 0')
        jsonStr = utils.strReplace(jsonStr, '":1', '": 1')
        jsonStr = utils.strReplace(jsonStr, '":2', '": 2')
        jsonStr = utils.strReplace(jsonStr, '":3', '": 3')
        jsonStr = utils.strReplace(jsonStr, '":4', '": 4')
        jsonStr = utils.strReplace(jsonStr, '":5', '": 5')
        jsonStr = utils.strReplace(jsonStr, '":6', '": 6')
        jsonStr = utils.strReplace(jsonStr, '":7', '": 7')
        jsonStr = utils.strReplace(jsonStr, '":8', '": 8')
        jsonStr = utils.strReplace(jsonStr, '":9', '": 9')
        jsonStr = utils.strReplace(jsonStr, ":", ": ")
        jsonStr = utils.strReplace(jsonStr, '00: 00', '00:00')
        jsonStr = utils.strReplace(jsonStr, ',"', ', "')
        jsonStr = utils.strReplace(jsonStr, '{', '{ ')
        jsonStr = utils.strReplace(jsonStr, '}', ' }')

        saveFile(filePath, jsonStr);
    }
}

exports.json2cs = json2cs = function json2cs(dataSource, dataItem, jsonPath, csPath) {

    if (jsonPath === undefined) {
      if (dataSource === undefined) {
        // jsonPath = CodeGenLib + '/WorldStats' + '/XPLAT.json';
        // jsonPath = CodeGenLib + '/WorldCountries' + '/XPLAT.json';
        jsonPath = CodeGenLib + '/AnnotationRectData' + '/XPLAT.json';
      }
      else {
        jsonPath = CodeGenLib + '/' +  dataSource + '/XPLAT.json';
      }
    }
    // "C:\WORK\igniteui-xplat-examples\code-gen-library\WorldStats \XPLAT.json"
    // "C:\WORK\igniteui-xplat-examples\code-gen-library\WorldsStats\XPLAT.json"

    // jsonPath = CodeGenLib + jsonPath + '/XPLAT.json';
 
    let jsonFile = fs.readFileSync(jsonPath, "utf8");
    let jsonData = JSON.parse(jsonFile);

    if (dataSource === undefined) dataSource = 'DataSource';
    if (dataItem === undefined) dataItem = 'DataItem';

    var csCode = `
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TestApp
{
    public class ` + dataItem + `
    {
// <DataItemProps>
    }

    public class ` + dataSource + ` : List<` + dataItem +`>
    {
        public ` + dataSource + `()
        {
            #region Data
// <DataSourceValues> 
            #endregion
        }

    }
}
    `;

    // console.log(JSON.stringify(jsonData));
    let columns = Object.keys(jsonData[0]);

    var props = [];
    for (let i = 0; i < columns.length; i++) {

      var name = columns[i];
      var type = typeof(jsonData[0][name]);

      if (type === 'number') {
          props.push('        public double ' + name + '  { get; set; }');
      }
      if (type === 'string') {
          props.push('        public string ' + name + '  { get; set; }');
      }
    }

    csCode = csCode.replace('// <DataItemProps>', props.join('\n'));

    var str = JSON.stringify(jsonData);
    str = str.replaceAll('[',''); //.replaceAll(']','');
    str = str.replaceAll('{"','{');
    str = str.replaceAll(',"',', ');
    str = str.replaceAll('":',' = ');
    
    str = str.replaceAll('{','            Add(new ' + dataItem + ' { ');
    str = str.replaceAll('},',' });\n');
    str = str.replaceAll('}]',' });');

    csCode = csCode.replace('// <DataSourceValues>',str);

    if (csPath === undefined) 
        csPath = csPath = './CDN/' + dataSource +  '.cs'

    // csPath = './CDN/json2cs.cs';
    saveFile(csPath, csCode, false); 
}

function randomInteger(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
exports.randomInteger = randomInteger;

function randomDouble(start, end) {
  return Math.random() * (end - start) + start;
}
exports.randomDouble = randomDouble;

function randomItem(dataItems) {
    let index = randomInteger(0, dataItems.length - 1);
    return dataItems[index];
}
exports.randomItem = randomItem;

function randomDate() {
    const month = randomInteger(1, 12);
    const day = randomInteger(1, 25);
    const year = randomInteger(2010, 2020);
    return `${month}/${day}/${year}`;
}
exports.randomDate = randomDate;


function strRemove(str, strOld) {
  return str.split(strOld).join("");
}
exports.strRemove = strRemove;

exports.strReplace = strReplace =
function strReplace(str, strOld, strNew) {
  return str.split(strOld).join(strNew);
}


exports.isObject = isObject =
function isObject(item) {
  if (item === undefined) return null;
  if (item === null) return null;
  return typeof(item) === 'object' && !Array.isArray(item);
}


var digitChars = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];

exports.toNumber = toNumber = function toNumber(str, digitsCount) {
  
  var chars = str.toString().trim().split("");
  var isNumber = true;
  for (let i = 0; i < chars.length; i++) {
    if (!digitChars.includes(chars[i])) {
       isNumber = true;
       return (randomInteger(10, 50) * 1000);
    }
  }
   
  return chars.join('');
}

var numericChars = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-', '+', 'E', 'e', ];

var abbreviations = [ 
  { letter: 'T', scaler: 1000000000000}, 
  { letter: 'B', scaler: 1000000000}, 
  { letter: 'M', scaler: 1000000},
  { letter: 'K', scaler: 1000},
];
 
exports.strUnabbreviate = strUnabbreviate = function strUnabbreviate(str) {

  for (const abbr of abbreviations)
  {
    if (str.endsWith(' ' + abbr.letter)) {
      let value = str.replace(' ' + abbr.letter, '');
      value = parseFloat(value);
      if (value !== null && value !== undefined && !Number.isNaN(value)) {
  // console.log('strUnabbreviate @@' + value);
        return Math.round(value * abbr.scaler);
      }
    }
    if (str.endsWith(abbr.letter)) {
      let value = str.replace(abbr.letter, '');
      value = parseFloat(value);
      if (value !== null && value !== undefined && !Number.isNaN(value)) {
  // console.log('strUnabbreviate @@' + value);
        return Math.round(value * abbr.scaler);
      }
    }
  }
  // console.log('strUnabbreviate not ' + str);
  return str;
}

exports.strToNumber = strToNumber =
function strToNumber(str, precision, normalize) {
  if (str === undefined) return null;
  if (str === null) return null;

  var chars = str.toString();
  chars = chars.trim();

  // console.log('chars')
  // console.log(chars)

 if (typeof(chars) === 'number') {
    parseFloat(chars);
  }

  // dates
  if (chars.includes('/')) return str;
  if (chars.includes('\\')) return str;

  // if (chars.split("-").length > 2) return str; // fax
  // if (chars.split(" ").length > 2) return str; // cell

  // if (chars.split("-").length > 2) return (randomInteger(2, 9) * 10000) + (randomInteger(100, 900)) // fax
  // if (chars.split(" ").length > 2) return (randomInteger(2, 9) * 10000) + (randomInteger(100, 900)) // cell

  chars = strReplace(chars, '$', '');
  chars = strReplace(chars, '%', '');

  var value = strUnabbreviate(chars)
  if (typeof(value) === 'number') {
    return value;
  }

  // if (chars.endsWith(' T')) {
  //   let value = chars.replace(' T', '');
  //   // console.log('parse T ' + value)
  //   value = parseFloat(value) * 1000000000000;
  //   // console.log('parse T ' + value)
  //   return Math.round(value);
  // }
  // else if (chars.endsWith(' B')) {
  //   let value = chars.replace(' B', '');
  //   value = parseFloat(value) * 1000000000;
  //   if (value === null) {
  //     return str;
  //   }
  //   return Math.round(value);
  // }
  // else if (chars.endsWith(' M')) {
  //   let value = chars.replace(' M', '');
  //   value = parseFloat(value) * 1000000;
  //   return Math.round(value);
  // }
  // console.log('clean')
  // console.log(chars)

  chars = strReplace(chars, ' ', '');

  for (let i = 0; i < chars.length; i++) {
    if (!numericChars.includes(chars[i])) {
        return str;
    }
  }

  if (chars.includes('E+') || chars.includes('e+') ||
      chars.includes('E-') || chars.includes('e-')) {
    let value = new Number(chars);
    value = value.toFixed(20);
    value = parseFloat(value);
    return value;
  }


  chars = strReplace(chars, '+', '');

  var value = parseFloat(chars);
    // console.log('value')
    // console.log(chars)

  if (chars.includes('.') && precision > 1 && Math.abs(value) > 0.01) {
      var digits = value.toString().split('.')[1].length;
      chars = value.toFixed(precision);
      value = parseFloat(chars);
      if (normalize && digits > 2) {
        value = roundEven(value * 100) / 100;
      }
  }
  return value;
}

function roundEven(value)
{
    var integer = Math.round(value);
    if (integer % 2 == 0) return Math.round(integer, 0);
    var difference = (integer + 1) - value;
    if (difference <= 0.5) return Math.round(integer + 1, 0);
    var vOffset = integer < 0 ? -1 : 1;
    return Math.round(integer + vOffset, 0);
}

// var convertedColumns = [];

var stringColumns = [ 'Fax', 'Phone', 'Cell', 'Postal' ];

exports.toNumberRecursive = toNumberRecursive =
function toNumberRecursive(item, precision, targetColumns, normalize) {
  if (item === undefined) return undefined;
  if (item === null) return null;

  // console.log("item " + precision);

  if (Array.isArray(item)) {
    // console.log("item isArray " + precision);
    for (let i = 0; i < item.length; i++) {
       item[i] = toNumberRecursive(item[i], precision, targetColumns, normalize);
    }
  } else if (isObject(item)) {
    var columnNames = Object.keys(item);
    if (targetColumns && targetColumns.length > 0) {
        columnNames = targetColumns;
    }
    // console.log("item columnNames ");
    // console.log(columnNames);

    for (const name of columnNames) {
      if (item[name]
        && !name.includes("Fax")
        && !name.includes("Cell")
        && !name.includes("Phone")
        && !name.includes("Date")
        && !name.includes("Name") 
        && !name.includes("Address") 
        && !name.includes("Title") 
        ) {
          // console.log("A=" + item[name]);
    // console.log("item columnNames " + name);
          item[name] = toNumberRecursive(item[name], precision, targetColumns, normalize);
          // console.log("B=" + item[name]);
      }
    }
  } else {
    var val = strToNumber(item, precision, normalize);
    if (val) {
        item = val;
        // if (!convertedColumns.includes(column)) {
        //      convertedColumns.push(column);
        // }
    }
  }
  return item;
}

exports.strStart = function strStart(str, skip) {
  if (skip === undefined) skip = "";
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== skip) return;
  }
  return 0;
}
function strTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

exports.toStringLine = function toStringLine(dataItem) {
  return JSON.stringify(dataItem, null, ' ').replace(/\n/g, '');
}

exports.splice = function splice(array, from, to) {
  if (from >= array.length) return null;

  to = Math.min(to, array.length)

  let ret = [];
  for (let i = from; i < to; i++) {
    ret.push(array[i]);
  }
  return ret;
}

exports.hash = function hash(column, dataSource) {
  let lookup = {}
  for (const item of dataSource) {
    if (item === null) continue;
    if (item[column] === null) continue;
    if (item[column] === undefined) continue;
    lookup[item[column]] = item;
  }
  return lookup;
}

exports.extract = function extract(array, columns) {
  let ret = []
  for (const item of array) {
    if (item === null) continue;
    var extracted = {};
    for (const name of columns) {
      if (item[name] === null) continue;
      if (item[name] === undefined) continue;

      extracted[name] = item[name];
    }
    ret.push(extracted);
  }
  return ret;
}

class CSV {
  lines = [];
  columns = []; 
  data = [];
  content = "";
  path = "";

  constructor(csvPath) {
    this.path = csvPath;
    this.content = fs.readFileSync(csvPath, "utf8");
    this.lines = this.content.split('\n');

    for (let i = 0; i < this.lines.length; i++) {
      // let values = this.lines[i].split(',');
      this.lines[i] = this.lines[i].split('"').join('').trim();
    }

    if (this.lines.length > 0) {
        this.columns = this.lines[0].split(',');
        var  columnsCount = this.columns.length;
        for (let c = 0; c < this.columns.length; c++) {
            // this.columns[c] = strTitleCase(this.columns[c]);
            this.columns[c] = this.columns[c].trim();
            this.columns[c] = this.columns[c].replaceAll(' ' , '');
            this.columns[c] = this.columns[c].replaceAll('.' , '_');
        }

        for (let i = 1; i < this.lines.length; i++) {
          let line = this.lines[i];


          if (line === '') continue; // { console.log('CSV ERROR LINE:' + i + ' ' + line); continue;}
          if (line.indexOf(',') < 1) continue; // { console.log('CSV ERROR LINE:' + i + ' ' + line); continue;}

          let item = {};
          let values = this.lines[i].split(',');
          let valuesCount = values.length;

          if (columnsCount !== valuesCount) {
            console.log('CSV ERROR  Columns=' + columnsCount + ' Values=' + valuesCount + '\n' + 'LINE:' + i + line);
          }
        
          // for (const c of this.columns)
          // {
          //   item[c] = strToNumber(values[c]); 
          // }
        
          for (let c = 0; c < this.columns.length; c++) {
            let column = this.columns[c];
            item[column] = strToNumber(values[c]);
          }
          this.data.push(item);

          // if (i > 1) {
          //     break;
          // }

        }

        // console.log(this.data);
    }

  }

  

}

exports.readCSV = function readCSV(csvPath) {
  let csv = new CSV(csvPath);
  return csv;
}

// class HTML {
//   content = '';
//   html = [];
//   constructor()
//   {

//   }

//   test() {
//     this.content += "test\n";
//     console.log('CSV test() ' + this.content);
//   }

//   output() {
//     this.content += "html\n";
//     console.log('CSV html() ' + this.content);
//   }
// }

class HTML {
  constructor()
  { 
  }

  html(content) {
    return '<html>\r\n' + content + '\r\n</html>';
  }

  head(content) {
    return '<head>\r\n' + content + '\r\n</head>\r\n';
  }

  body(content) {
    return '<body>\r\n' + content + '\r\n</body>';
  }

  style(content) {
    return '<style>\r\n' + content + '</style>\r\n';
  }

     a(path, content) { return this.link(path, content); }
  link(path, content) {
    if (content === undefined) content = path;
    return '<a href=' + this.qt(path) + '> ' + content + ' </a>';
  }

  qt(content) {
    return '"' + content + '"';
  }

  p(content) {
    return '<p>' + content + '</p>\r\n';
  }
  
  h1(content) {
    return '<h1>' + content + '</h1>\r\n';
  }

  lbl(content) {
    return '<label>' + content + '</label>';
  }

  table(content) {
    return '<table>\n' + content + '\n</table>';
  }

  horizontalStyle = 'display: flex; flex-direction: row; align-items: center; text-anchor: middle; gap: 10px;';
  verticalStyle   = 'display: flex; flex-direction: column; align-items: center; text-anchor: middle; gap: 10px;';
  div(elements, style) {
    if (style === undefined) style = this.horizontalStyle;
    var content = elements.join(" ");
    return '<div style=' + this.qt(style) + '> ' + content + '</div>';
  }

  horizontal(elements) {
    return div(elements, this.horizontalStyle);
  }
  vertical(elements) {
    return div(elements, this.verticalStyle);
  }

   tr(content) { return this.row(content); }
  row(content) {
    return '<tr> ' + content + '</tr>\r\n';
  }

      th(name, style, width) { return this.column(name, style, width); }
  column(name, style, width) {
    if (style === undefined) style = 'center';
    if (width === undefined) width = 80;

    if (typeof(width) === 'number') width += 'px'

    return '<th width=' + this.qt(width) + ' class=' + this.qt(style) + '> ' + name + ' </th>';
    // return this;
  }

    td(content, style) { return this.cell(content, style); }
  cell(content, style) {
    if (style === undefined) style = 'center';
    // if (width === undefined) width = '80';

    return '<td class=' + this.qt(style) + '> ' + content + ' </td> ';
  }

    i(path, width, height, style) { return this.img(path, width, height, style); }
  img(path, width, height, style) {
    if (height === undefined) height = '20';
    if (width === undefined) width = '30';
    return '<img src=' + this.qt(path) + ' width=' + this.qt(width) + ' height=' + this.qt(height) + ' class=' + this.qt(style) + '>';
  }
}
exports.createHTML = function createHTML() {
  let html = new HTML();
  return html;
}


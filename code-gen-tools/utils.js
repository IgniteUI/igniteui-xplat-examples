
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


var numericChars = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-', '+', 'E', 'e', ];

exports.strToNumber = strToNumber =
function strToNumber(str, precision, normalize) {
  if (str === undefined) return null;
  if (str === null) return null;

  var chars = str.toString();
  chars = chars.trim();

  // console.log('chars')
  // console.log(chars)

  // dates
  if (chars.includes('/')) return null;
  if (chars.includes('\\')) return null;
  if (chars.split("-").length > 2) return null; // fax
  if (chars.split(" ").length > 2) return null; // cell

  chars = strReplace(chars, '$', '');
  chars = strReplace(chars, '%', '');
  chars = strReplace(chars, ' ', '');
  // console.log('clean')
  // console.log(chars)

  for (let i = 0; i < chars.length; i++) {
    if (!numericChars.includes(chars[i])) {
        return null;
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
      chars = value.toFixed(precision);
      value = parseFloat(chars);
      if (normalize) {
        value = roundEven(value * 10) / 10;
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

  if (Array.isArray(item)) {
    for (let i = 0; i < item.length; i++) {
       item[i] = toNumberRecursive(item[i], precision, targetColumns, normalize);
    }
  } else if (isObject(item)) {
    var columnNames = Object.keys(item);
    if (targetColumns && targetColumns.length > 0) {
        columnNames = targetColumns;
    }
    for (const name of columnNames) {
      if (item[name]
        // && !name.includes("Fax")
        // && !name.includes("Cell")
        && !name.includes("PostalCode")) {
          // console.log("A=" + item[name]);
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

function strStart(str, skip) {
  if (skip === undefined) skip = "";
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== skip) return;
  }
  return 0;
}
exports.strStart = strStart;
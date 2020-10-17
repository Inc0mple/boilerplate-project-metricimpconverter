/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    regObj = input.match(/\d+(.\d+|\/d+)*/);
    //console.log(regObj);
    result =  eval(regObj[0])
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let possibleUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    regObj = input.match(/[a-zA-Z]+/);
    if (possibleUnits.includes(regObj[0])) {
      result = regObj[0].toLowerCase();
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let input = ['gal','l','mi','km','lbs','kg'];
    let output = ['l','gal','km','mi','kg','lbs'];
    for (i in input) {
      if (input[i] == initUnit.toLowerCase()) {
        result = output[i]
      };
    };

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    let input = ['gal','l','mi','km','lbs','kg'];
    let output = ['gallons','litres','miles','kilometers','pounds','kilograms'];
    for (i in input) {
      if (input[i] == unit.toLowerCase()) {
        result = output[i]
      };
    };
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    conversionTable = {
      'gal':galToL,
      'l':1/galToL,
      'mi':miToKm,
      'km':1/miToKm,
      'lbs':lbsToKg,
      'kg':1/lbsToKg
    }

    let result = initNum*conversionTable[initUnit];
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

//let handler = new ConvertHandler;
//console.log(handler.getUnit("342/5mi"));

module.exports = ConvertHandler;

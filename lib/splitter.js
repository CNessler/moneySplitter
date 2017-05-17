//var calculate = require('../calculate');
module.exports = {

  moneySplitter: function (total, splitCount) {
    if (splitCount == '' || splitCount == undefined) {
      splitCount = 3;
    }
    var totalSplit = splitTotal(total, splitCount);
    return validateTotal(totalSplit, Math.round(total*100), splitCount);
  }
}

function splitTotal(total, splitCount) {
  var splitValue = (total/splitCount).toFixed(2);
  var splitValueArray = [];
  while (splitValueArray.length < splitCount) {
    splitValueArray.push(splitValue);
  }
  return splitValueArray;
};

function validateTotal(totalSplit, originalAmount, splitCount) {
  var total = 0;
  var totalSplitValues = [];
  for (var i=0; i<totalSplit.length;i++) {
    total += parseInt(totalSplit[i]*100);
    totalSplitValues[i] = parseInt(totalSplit[i]*100);
  }
  if (total !== originalAmount) {
    if (total > originalAmount) {
      while (total !== originalAmount) {
        total = 0;
        for(var i=0; i<totalSplit.length;i++) {
          if (i!=totalSplit.length-1) {
            total += totalSplitValues[i] - 1;
            totalSplitValues[i] = totalSplitValues[i] - 1;
          } else {
            total += totalSplitValues[i] + 1;
            totalSplitValues[i] = totalSplitValues[i] + 1;
          }
        }
      }
    } else {
      while (total !== originalAmount) {
        total = 0;
        for(var i=0; i<totalSplit.length;i++) {
          if (i!=totalSplit.length-1) {
            total += totalSplitValues[i] + 1;
            totalSplitValues[i] = totalSplitValues[i] + 1;
          } else {
            total += totalSplitValues[i] - 1;
            totalSplitValues[i] = totalSplitValues[i] - 1;
          }
        }
      }
    }
  }
  var totalSplitValuesAsDecimals = [];
  totalSplitValues.forEach(function(e){totalSplitValuesAsDecimals.push(parseFloat((e/100).toFixed(2)))});
  return totalSplitValuesAsDecimals;
}

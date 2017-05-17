exports.splitter = function(total, count){
  if (count == null || count == undefined) {
    count = 3;
  }
  var totalSplit = splitTotal(total, count);
  return validateTotal(totalSplit, Math.round(total*100), count); //done due to floating point numbers
}

function splitTotal(total, count) {
  var splitValue = (total/count).toFixed(2);
  var splitValueArray = [];
  while (splitValueArray.length < count) {
    splitValueArray.push(splitValue);
  }
  return splitValueArray;
};

function validateTotal(totalSplit, originalAmount, count) {
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

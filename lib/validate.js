module.exports =

function(total, splitCount) {
  var totalError = '* A total amount is required.';
  var splitCountError = '* The amount to split the check is required.';
  var splitCountError = '* The bill total must be a dollar and cent amount.';
  var errors = [];
  if (total === ''){
    errors.push(totalError);
  }
  var totalCheck = total.toString().split('.');
  if (totalCheck.length > 1 && totalCheck[1].length > 2 || totalCheck.length > 2) {
    errors.push(splitCountError);
  }
  if (splitCount === '') {
    errors.push(splitCountError);
  }
  return errors;
};

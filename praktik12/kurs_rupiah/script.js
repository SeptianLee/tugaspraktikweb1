document.getElementById('amount').addEventListener('input', convert);
document.getElementById('currency').addEventListener('change', convert);

function convert() {
  var amount = parseFloat(document.getElementById('amount').value);
  var currency = document.getElementById('currency').value;
  var exchangeRate = 0;

  if (currency === 'USD') {
    exchangeRate = 9915;
  } else if (currency === 'SGD') {
    exchangeRate = 13472;
  } else if (currency === 'MYR') {
    exchangeRate = 874;
  } else if (currency === 'JPY') {
    exchangeRate = 120;
  } else if (currency === 'EUR') {
    exchangeRate = 15888;
  } else if (currency === 'SAR') {
    exchangeRate = 3592;
  } else {
    exchangeRate = 1; 
  }

  var result = amount * exchangeRate;

  document.getElementById('result').innerHTML = '<h3>Nilai dalam Rupiah: ' + result.toFixed(2) + ' IDR</h3>';
}

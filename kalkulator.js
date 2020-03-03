var tombol = document.querySelector('.container');
var layar = document.querySelector('#layar');
var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener('click', function(e) {
  var tombolClick = e.target;
  var nilaiTombol = tombolClick.innerText;

  if (nilaiTombol == 'C') {
    layar.value = '';
    tmpVal = '';
    operator = '';
  } else if (nilaiTombol == '<') {
    layar.value = layar.value.slice(0, -1);
  } else if (nilaiTombol == '=' || tombolClick.classList.contains('operator')) {
    if (bolehHitung) {
      layar.value = eval(tmpVal + operator + layar.value);
      bolehHitung = false;
    }
    tmpVal = layar.value;
    operator = nilaiTombol;
    // console.log(tmpVal);
    // console.log(operator);
    resetLayar = true;
  } else {
    if (resetLayar) {
      layar.value = nilaiTombol;
      resetLayar = false;
      bolehHitung = true;
    } else layar.value = layar.value + nilaiTombol;
  }
});

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  printMinutes();
  printSeconds();
//  document.getElementById('btnLeft').innerHTML
}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.setMinutes());
  var minDec = min.split("")[0];
  var minUni = min.split("")[1];
  document.getElementById('minDec').innerHTML = minDec;
  document.getElementById('minUni').innerHTML = minUni;
}

function printSeconds() {
  var sec = chronometer.twoDigitsNumber(chronometer.setSeconds())
  var secDec = sec.split("")[0];
  var secUni = sec.split("")[1];
  document.getElementById('secDec').innerHTML = secDec;
  document.getElementById('secUni').innerHTML = secUni;
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {
  
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerText === 'STOP'){
    btnLeft.innerText = 'START'
    btnLeft.className = 'btn start'
  } else {
    console.log("start");
    var dInterval = setInterval(function(){
      printTime();
    },100);
    chronometer.startClick();
    btnLeft.innerText = 'STOP';
    btnLeft.className = 'btn stop'
    btnRight.innerText = 'SPLIT'
    btnRight.className = 'btn split'
    //var x = setInterval(function(){var y = printMinutes(), 1000}
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
});

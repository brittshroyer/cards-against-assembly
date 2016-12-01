

var stopWatch = (function(){

function StopWatch(){
  var start = '#start';
  var pause = '#pause';
  var reset = '#reset';
  var timer = '#timer';
  var count = 0;
  var timerRunning = false;
  var parentScope = this;
  var seconds;
  var timerId;

  this.updateTime = function(){
    if(timerRunning === false){
      console.log('updateTime()');
      $(timer).text(count);

      seconds = setInterval(function(){
        count++;
        $(timer).text(count);
      },1000);
      timerRunning = true;
    }
  }

  this.pauseTime = function(){
    clearInterval(seconds);
    timerRunning = false;
  }

  this.resetTime = function(){
    parentScope.pauseTime();
    count = 0;

    $(timer).text(count);
    timerRunning = false;
  }

};

return new StopWatch();

})()

// Event Handlers
// $(start).on('click',stopWatch.updateTime);
// $(reset).on('click',stopWatch.resetTime);
// $(pause).on('click',stopWatch.pauseTime);

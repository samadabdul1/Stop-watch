var seconds=00;
var tens=00;
var appendTens=document.getElementById('tens');
var appendSceonds=document.getElementById('seconds');
var buttonStart=document.getElementById('start');
var buttonStop=document.getElementById('stop');
var buttonReset=document.getElementById('reset');
function start() {
    tens++;
    if(tens<9){
        appendTens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appendSceonds.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+0;
    }
    if(seconds>9){
        appendSceonds.innerHTML=seconds;
    }
}
buttonStart.onclick=function(){
    interval=setInterval(start);
    console.log("start")
};
buttonStop.onclick=function(){
    clearInterval(interval);
};
buttonReset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendSceonds.innerHTML=seconds;
    appendTens.innerHTML=tens;

};

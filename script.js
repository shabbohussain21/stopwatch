let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let millisecond =  document.querySelector('#millisecond');
var seconds = 0;
var milisec = 0;
var mint= 0;
var hrs = 0;

function myfun(){
    milisec++;
    // milisecond start------
    if(milisec <9){
      millisecond.innerHTML = '0'+milisec;
    }
    if(milisec >9){
    	millisecond.innerHTML = milisec;
    }
    if(milisec>66){
    	seconds++;
    	second.innerHTML =seconds+'s';
    	milisec = 0;
    	millisecond.innerHTML = '0'+0;
    }

    // milisecond end----

    // // second section strat here 
    if(seconds <9){
    	second.innerHTML = '0'+ seconds+'s';
    }
    if(seconds > 9){
    	second.innerHTML =seconds+'s';
    }
    if(seconds > 60){
    	// $('#minute').css('display','block');
    	  mint++;
    	  minute.innerHTML = '0'+mint+'m';
    	  seconds = 0;
    	  second.innerHTML = '0'+ 0;
    }
    // // second section end here

    // minute start from here 
    if(mint < 9){
    	mint= '0'+mint;
    }
    if(mint >9){
    	minute.innerHTML =mint+'m';
    }
    if(mint >50){
    	hrs++;
    	hour.innerHTML = '0'+hrs+"h";
    	mint=0;
    	minute.innerHTML = '0'+0;
    }

    // minute section end here
} 


$('.start').click(function(){
    interval = setInterval(myfun,20);
    $('.start').prop('disabled', true);
    // $('.start').addClass('btn-success');
});

$('.stop').click(function(){
    clearInterval(interval);
    $('.start').prop('disabled', false);
});

$('.reset').click(function(){
	$('.start').prop('disabled', false);
	 clearInterval(interval);
 seconds = "00";
 milisec = "00";
 mint ="00";
 hrs = "00";
 second.innerHTML = seconds;
 millisecond.innerHTML = milisec;
 minute.innerHTML =mint;
 hour.innerHTML = hrs;

});


   // setInterval(function(){
   //  var random = Math.floor(Math.random() *100);
   //  if(random< 9){
   //  document.getElementById('millisecond').innerHTML = '0'+random;
   // }else{
   // 	document.getElementById('millisecond').innerHTML = random;
   // }
   // });
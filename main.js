var modes = document.querySelectorAll('.mode');
var square = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('color-display');
var h1 = document.querySelector('h1');
var message = document.getElementById('message');
var reset = document.getElementById('reset');
var numberColor = 6;
var colors = []
colors = listColor(numberColor);
color(colors);
mode();
var random = Math.floor( Math.random()*colors.length);
colorDisplay.innerHTML = colors[random];
function mode(){
	Array.from(modes).forEach(function(mode){
		mode.addEventListener('click', function(e){
			for(var i = 0 ; i < modes.length ; i++){
				modes[i].classList.remove('selected');
			}
			e.target.classList.add('selected');
			if(e.target.outerText == 'EASY'){
				numberColor = 3;
				colors = listColor(numberColor);
				var random = Math.floor( Math.random()*colors.length);
				colorDisplay.innerHTML = colors[random];
			}else{
				numberColor = 6;
				colors = listColor(numberColor);
				var random = Math.floor( Math.random()*colors.length);
				colorDisplay.innerHTML = colors[random];
			}
			color(colors);
		})
	})
	for(var i = 0 ; i < square.length ; i++){
		square[i].addEventListener('click',function(e){
			if(!(e.target.style.backgroundColor == colorDisplay.outerText.toLowerCase()))
			{
				e.target.style.opacity = '0';
				message.innerHTML = 'TRY AGAIN';
			}else{
				h1.style.backgroundColor = e.target.style.backgroundColor;
				for(var i = 0 ; i < square.length ; i++){
					square[i].style.opacity = '1';
					square[i].style.backgroundColor = e.target.style.backgroundColor;
					message.innerHTML = 'CORRECT';
					reset.innerHTML = 'PLAY AGAIN'
				}
			}
		})
	}
	reset.addEventListener('click',function(){
		colors = listColor(numberColor);
		color(colors);
		var random = Math.floor( Math.random()*colors.length);
		colorDisplay.innerHTML = colors[random];
		h1.style.backgroundColor = '#2C8E99';
		message.innerHTML = '';
	})

}

function color(listColor){
	for(var i=0; i<square.length; i++){
		if(listColor[i]){
			square[i].style.display = 'block';
			square[i].style.backgroundColor = listColor[i];
		}else{
			square[i].style.display = 'none';
		}
	}
}

function randomColor(){
	var r = Math.floor( Math.random()*256);
	var g =  Math.floor( Math.random()*256);
	var b =  Math.floor( Math.random()*256);
	return `rgb(${r}, ${g}, ${b})`
}

function listColor(numberColor){
	var arr = []
	for(var i = 0 ; i < numberColor ; i++){
		arr.push(randomColor());
	}
	return arr;
}





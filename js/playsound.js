//////////////////////////////////////////////////// PLAY TICKING SOUND 

function playSound() {
		var sound = document.getElementById("audio");
		sound.play();	  
}

function playSoundTradeButtons(q) {
		//alert(q);
		var sound = document.getElementById("audio"+q);
		sound.play();	  
}

function playSoundCustom(q) {
		//alert(q);
		var sound = document.getElementById("audio"+q);
		sound.play();	  
}
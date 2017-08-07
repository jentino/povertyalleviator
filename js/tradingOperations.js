//////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){

	if (amount > 0) {
		playSoundCustom(20);
		countwins++;
		return amount.bold().fontcolor("Green");
	}
	else if(amount < 0){
		playSoundCustom(22);
		countlosses++;
		return amount.bold().fontcolor("Red");
	}
}

var tcount = -4;
//////////////////////////////////////////////////////////////////  AUTO TRADINNG
function calcTradeTime(newTime) {
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(newTime);
	dm = d.getMinutes();
	var i = Intervals.indexOf(dm);
	if(i > -1) {
		if(tcount!=dm){
			//alert(DOT3 + ":" + Sig);
			if(DOT3 == "red" && Sig == "red") {
				setColor(Sellit,tradeamount[0],9);
				tcount = dm;
				document.getElementById("tradeaction").innerHTML = "SELL";
			} else if (DOT3 == "red" && Sig == "green") {
				setColor(Buyit,tradeamount[0],1);
				tcount = dm;
				document.getElementById("tradeaction").innerHTML = "BUY";
			} else if (DOT3 == "green" && Sig == "red") {
				setColor(Buyit,tradeamount[0],1);
				tcount = dm;
				document.getElementById("tradeaction").innerHTML = "BUY";
			} else if (DOT3 == "green" && Sig == "green") {
				setColor(Sellit,tradeamount[0],9);
				tcount = dm;
				document.getElementById("tradeaction").innerHTML = "BUY";
			} 
		}
	}
} 

// var tcount = 0;
// //////////////////////////////////////////////////////////////////  AUTO TRADINNG
// function calcTradeTime(newTime) {
// 	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// 	d.setUTCSeconds(newTime);
// 	dm = d.getMinutes();
//     //tsec = d.getSeconds();
// 	var i = Intervals.indexOf(dm);
// 	if(i > -1) {
// 		if(tcount!=dm){
// 			if(DOT3 == "red" && Sig == "red")
// 				setColor(Buyit,tradeamount[0],1);
// 			tcount = dm;
// 		}
// 	}
// } 
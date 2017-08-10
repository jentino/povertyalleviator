/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){
	
	var amount = Number(amount);
	
	var str_return;
	if (amount > 0) {
		playSoundCustom(20);
		countwins++;
		rescue = 0;
		var str_amount = amount.toString();
		//document.getElementById("showtype").innerHTML = typeof str_amount;	
		str_return = str_amount.bold().fontcolor("Green");
	}
	else{
		playSoundCustom(22);
		countlosses++;
		rescue++;
		var str_amount = amount.toString();
		//document.getElementById("showtype").innerHTML = typeof str_amount;	
		str_return = str_amount.bold().fontcolor("Red");
	}

	return str_return;
}


//////////////////////////////////////////////////////////////////  AUTO TRADINNG
var rescue 	= 0;
var delayCount = 0;
var minuteCounter = -4;

function calcTradeTime(newTime) {
 	showRescue();
 	var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
 	date.setUTCSeconds(newTime);
 	var minutes = date.getMinutes();
 	var seconds = date.getSeconds(); //10
	
	if(delayCount  === 0 && seconds === 59){
		delayTrade(minutes); //delay counttcount for 1 minute
	}
	
	document.getElementById("showminutes").innerHTML = minutes;
	document.getElementById("showdelaycount").innerHTML = delayCount;
 	var i = Intervals.indexOf(minutes);
 	
 	if(i > -1 && delayCount != 0) {
 		if(minuteCounter != minutes){
 		
 			if(DOT3 == "red" && Sig == "red") {
 				setColor(Sellit,tradeamount[rescue],9);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "PUT";
 			} 
 			else if (DOT3 == "green" && Sig == "green") {
 				setColor(Sellit,tradeamount[rescue],9);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "PUT";
 			} 
 			else if (DOT3 == "red" && Sig == "green") {
 				setColor(Buyit,tradeamount[rescue],1);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "CALL";
 			} 
 			else if (DOT3 == "green" && Sig == "red") {
 				setColor(Buyit,tradeamount[rescue],1);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "CALL";
 			}  
 		}
 	}
 } 


//////////////////////////////////////////////////////////////////  AUTO TRADINNG ALGORITHM (IMMEDIATE SUCCESSIVE DOTS)
/*var tcount2 = -4;
var delayCount = 0;

function calcTradeTime2(newTime) {
	showRe();
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(newTime);
	var dm = d.getMinutes(); //10
	var ds = d.getSeconds(); //10
	if(delayCount  === 0 && ds === 59)
		delayTrade(dm); //delay counttcount for 1 minute

	document.getElementById("showminutes").innerHTML = dm;
	document.getElementById("showdelaycount").innerHTML = delayCount;

	var i = Intervals.indexOf(dm);

	if(i > -1 && delayCount != 0) {
		if(tcount2!=dm){
			
			if(DOT2 == "red" && Sig == "red") {
				setColor(Sellit,tradeamount[re],9);
				tcount2 = dm;
				document.getElementById("tradeaction").innerHTML = "PUT";
				
			} else if (DOT2 == "red" && Sig == "green") {
				setColor(Buyit,tradeamount[re],1);
				tcount2 = dm;
				document.getElementById("tradeaction").innerHTML = "CALL";
				
			} else if (DOT2 == "green" && Sig == "green") {
				setColor(Sellit,tradeamount[re],9);
				tcount2 = dm;
				document.getElementById("tradeaction").innerHTML = "PUT";
				
			} else if (DOT2 == "green" && Sig == "red") {
				setColor(Buyit,tradeamount[re],1);
				tcount2 = dm;
				document.getElementById("tradeaction").innerHTML = "CALL";
				
			} 		
		}
	}
} */




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
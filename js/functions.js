//////////////////////////////////////////////////// GET ASSET
function getAsset(assetval) {
    var obj = document.getElementById("myAssets");
    document.getElementById("assetlist").innerHTML = obj.options[obj.selectedIndex].text.bold();
	assetvalue = assetval;
	playSoundCustom(16);
}

//////////////////////////////////////////////////// SHOW BALANCE

function showBalance(bal) {
	balanceamount = bal;
	document.getElementById("balanceupdate").innerHTML = balanceamount.bold().fontcolor("Green");
	showProfit(balanceamount);

}

//////////////////////////////////////////////////// SHOW PROFIT
function showProfit(b) {
	var NewBalance = b - OriginalBalance;
	var showprofit = NewBalance.toFixed(2);
	document.getElementById("profitupdate").innerHTML = showprofit;

}

//////////////////////////////////////////////////// PLAY TICKING SOUND 


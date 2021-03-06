<html>
<head>
<!--<style>
	body {padding-top: 40px; padding-left: 25%}
</style>
-->
<link rel="stylesheet" id="main-css" href="css/main.css" type="text/css" media="all">

<script type="text/javascript" src="js/inputvariables.js"></script>
<script type="text/javascript" src="js/splitwebstring.js"></script>
<script type="text/javascript" src="js/connect.js"></script>
<script type="text/javascript" src="js/onOpen.js"></script>
<script type="text/javascript" src="js/jsonresponses.js"></script>
<script type="text/javascript" src="js/jsoncalls.js"></script>
<script type="text/javascript" src="js/functions.js"></script>
<script type="text/javascript" src="js/buttonswitch.js"></script>
<script type="text/javascript" src="js/playsound.js"></script>
<script type="text/javascript" src="js/timers.js"></script>
<script type="text/javascript" src="js/writetoscreen.js"></script>
<script type="text/javascript" src="js/mt5candlealerter.js"></script>
<script type="text/javascript" src="js/tradingOperations.js"></script>
</head>

<body>
<!-------------------------------------- AUDIO ------------------------------------------------- -->

<audio id="audio" src="sounds/beep.wav" autostart="false" ></audio>
<audio id="audio1" src="sounds/pokerchip1.wav" autostart="false" ></audio>
<audio id="audio2" src="sounds/pokerchip2.wav" autostart="false" ></audio>
<audio id="audio3" src="sounds/pokerchip3.wav" autostart="false" ></audio>
<audio id="audio4" src="sounds/pokerchip4.wav" autostart="false" ></audio>
<audio id="audio5" src="sounds/pokerchip5.wav" autostart="false" ></audio>

<audio id="audio9" src="sounds/pokerchip1.wav" autostart="false" ></audio>
<audio id="audio10" src="sounds/pokerchip2.wav" autostart="false" ></audio>
<audio id="audio11" src="sounds/pokerchip3.wav" autostart="false" ></audio>
<audio id="audio12" src="sounds/pokerchip4.wav" autostart="false" ></audio>
<audio id="audio13" src="sounds/pokerchip5.wav" autostart="false" ></audio>

<audio id="audio14" src="sounds/loggedin.wav" autostart="false" ></audio>
<audio id="audio15" src="sounds/beepbeep.wav" autostart="false" ></audio>
<audio id="audio16" src="sounds/flip.wav" autostart="false" ></audio>
<audio id="audio17" src="sounds/shortping.wav" autostart="false" ></audio>
<audio id="audio18" src="sounds/lowping.wav" autostart="false" ></audio>
<audio id="audio19" src="sounds/highpop.wav" autostart="false" ></audio>
<audio id="audio20" src="sounds/woncoins.wav" autostart="false" ></audio>
<audio id="audio21" src="sounds/woncoin.wav" autostart="false" ></audio>
<audio id="audio22" src="sounds/lost1.wav" autostart="false" ></audio>
<audio id="audio23" src="sounds/lost2.wav" autostart="false" ></audio>


<!-------------------------------------- SELECTION HEADER ------------------------------------ -->

<div id="getTradeOpDash">
	<div id="row">
	  	<div id="left">
	  		
	  		<h4>Assets</h4>
	  		<p>
	  			<div>
	  				<form>
						<select id="myAssets" onchange="getAsset(this.value);">
						 	<option value=""> </option>
						  	<option value="R_100">Volatility 100</option>
						  	<option value="R_75">Volatility 75</option>
						  	<option value="R_50">Volatility 50</option>
						  	<option value="R_25">Volatility 25</option>
						  	<option value="R_10">Volatility 10</option>
						</select>
					</form>
				</div>
			</p>
			
			
	  	</div>

	  	<div id="left">
	    	<h4>API token</h4>
	    	<p>
				<div>
					<form>
						<select id="myTokens" onchange="Connect(this.value);">
						  	<option value=""> </option>
						    <option value="kS7A68xssbTVpkE">Jenty Demo Account</option>
						    <option value="nBvBHHOe84bgXMK">Jenty Real Account</option>
						  	<option value="COQz3VcylK89JoT"> Carline Real Account</option>
						  	<option value="xwzTFS9BwGxjPZZ"> Carline Demo Account</option>
						</select>	
					</form>
				</div>
			</p>
	  	</div>

    <div id="middle">
        <h4>Server</h4>
          <p>
          <div id="theseconds"></div>
        </p>
      </div>

    <div id="middle">
      <h4>Timer</h4>
        <p>
          <div id="mycounter"> - </div>
        </p>
    </div>

    <div id="right">
      <h4>W/L</h4>
        <p>
        <div id="winlossDash"></div>
      </p>
    </div>

    <div id="right">
      <h4>Next</h4>
        <p>
        <div id="mycandle"></div>
      </p>
    </div>

	</div> 	 
</div>
<br>
<!-------------------------------------- ACCOUNTING HEADER (BUTTONS) ------------------------------------ -->


<div id="getTradeOpDash">
	<div id="row">
	  	<div id="left">
	  		<div>D5</div>
	  	</div>
	  	<div id="left">
	  		<div id="dot5"></div>
	  	</div>

	  	<div id="left">
	  		<div>D4</div>
	  	</div>
	  	<div id="left">
	  		<div id="dot4"></div>
	  	</div>


	  	<div id="right">
	  		<div>D3</div>
	  	</div>
	  	<div id="right">
	  		<div id="dot3"></div>
	  	</div>

	  	<div id="right">
	  		<div>D2</div>
	  	</div>
	  	<div id="right">
	  		<div id="dot2"></div>
	  	</div>

	  	<div id="right">
	  		<div>D1</div>
	  	</div>
	  	<div id="right">
	  		<div id="dot1"></div>
	  	</div>

	  	<div id="left">
	  		<div >Sig</div>
	  	</div>
	  	<div id="right">
	  		<div id="candle6"></div>
	  	</div>

	  	<div id="right">
	  		<div>Cur</div>
	  	</div>
	  	<div id="right">
	  		<div id="candle1"></div>
	  	</div>

	</div> 	 
</div>

<!-------------------------------------- ACCOUNTING HEADER (BUTTONS) ------------------------------------ -->

<table id="tblgetbuttonsDash">
	<td>
		<!-- <button type="button" id="getbuttonsDash" onclick="playSoundCustom(22);">Lost Sound</button>
		<button type="button" id="getbuttonsDash" onclick="playSoundCustom	(21)">Won Coins</button>
		<button type="button" id="getbuttonsDash" onclick="playSound('flip')">Sound </button>
		<button type="button" id="getbuttonsDash" onclick="GetStatement()">Statement</button>
		<button type="button" id="getbuttonsDash" onclick="GetPortfolio()">Live Trades</button>	 -->
		<div id="ash" class="pad" contenteditable="true">
 		  <div id="a" class="alignDivs">D3  = </div><div id="Doo3" class="alignDivs"></div>
 		  <!--<div id="a" class="alignDivs">D2  : </div><div id="Doo2" class="alignDivs"></div>-->
		  <div id="a" class="alignDivs">Sig = </div><div id="Siig" class="alignDivs"></div>
		  <div id="a" class="alignDivs">ACTION =    </div><div id="tradeaction" class="alignDivs"></div>
		  <div id="a" class="alignDivs">RESCUE =   </div><div id="rescueamount" class="alignDivs"></div>
		 <!--  <div id="a" class="alignDivs">   : Typeof =   </div><div id="showtype" class="alignDivs"></div> -->
		  <div id="a" class="alignDivs">Minutes =   </div><div id="showminutes" class="alignDivs"></div>
		  <div id="a" class="alignDivs">Delaycount =   </div><div id="showdelaycount" class="alignDivs"></div>
		</div>
	</td>
</table>



<!-------------------------------------- USER DETAILS DASHBOARD ------------------------------------ -->
<div id="getUserInfoDash" class="pad" contenteditable="true">
  <div id="a" class="alignDivs">User              : </div><div id="welcomeuser" class="alignDivs"></div>
  <div id="a" class="alignDivs">Asset             : </div><div id="assetlist" class="alignDivs"></div>
  <div id="a" class="alignDivs">Balance           : </div><div id="balanceupdate" class="alignDivs"></div>
  <div id="a" class="alignDivs">Profit               : </div><div id="profitupdate" class="alignDivs"></div>
</div>

<!-------------------------------------- TRANSACTIONS HEADER (BUTTONS) ------------------------------------ -->
<table id="tbltrade_buttons">
	<td>
		<input type="button" value=" BUY 1 " id="trade_buttons1" class="trade_buttons" onclick="setColor(Buyit,tradeamount[0],1)";/>
		<input type="button" value=" BUY 2 " id="trade_buttons2" class="trade_buttons" onclick="setColor(Buyit,tradeamount[1],2)";/>
		<input type="button" value=" BUY 3 " id="trade_buttons3" class="trade_buttons" onclick="setColor(Buyit,tradeamount[2],3)";/>
		<input type="button" value=" BUY 4 " id="trade_buttons4" class="trade_buttons" onclick="setColor(Buyit,tradeamount[3],4)";/>
		<input type="button" value=" BUY 5 " id="trade_buttons5" class="trade_buttons" onclick="setColor(Buyit,tradeamount[4],5)";/>
		<input type="button" value=" BUY 6 " id="trade_buttons6" class="trade_buttons" onclick="setColor(Buyit,tradeamount[5],6)";/>
		<input type="button" value=" BUY 7 " id="trade_buttons7" class="trade_buttons" onclick="setColor(Buyit,tradeamount[6],7)";/>
		<input type="button" value=" BUY 8 " id="trade_buttons8" class="trade_buttons" onclick="setColor(Buyit,tradeamount[7],8)";/>		
	</td><tr>
	<td>
	    <input type="button" value=" SELL 1 " id="trade_buttons9" class="trade_buttons" onclick="setColor(Sellit,tradeamount[0],9)";/>
	    <input type="button" value=" SELL 2 " id="trade_buttons10" class="trade_buttons" onclick="setColor(Sellit,tradeamount[1],10)";/>
	    <input type="button" value=" SELL 3 " id="trade_buttons11" class="trade_buttons" onclick="setColor(Sellit,tradeamount[2],11)";/>
	    <input type="button" value=" SELL 4 " id="trade_buttons12" class="trade_buttons" onclick="setColor(Sellit,tradeamount[3],12)";/>
	    <input type="button" value=" SELL 5 " id="trade_buttons13" class="trade_buttons" onclick="setColor(Sellit,tradeamount[4],13)";/>
	    <input type="button" value=" SELL 6 " id="trade_buttons14" class="trade_buttons" onclick="setColor(Sellit,tradeamount[5],14)";/>
	    <input type="button" value=" SELL 7 " id="trade_buttons15" class="trade_buttons" onclick="setColor(Sellit,tradeamount[6],15)";/>
	    <input type="button" value=" SELL 8 " id="trade_buttons16" class="trade_buttons" onclick="setColor(Sellit,tradeamount[7],16)";/>
	</td>
</table>


<!-------------------------------------- MESSAGE CONSOLE  ------------------------------------ -->
<div id="mainConsole">
	<div class="innerConsole" id="debug" onscroll="myStopFunction()"></div>
</div>
	
</body>
</html>
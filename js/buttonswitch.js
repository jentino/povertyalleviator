//////////////////////////////////////////////////////////////////  TRADE BUTTONS COLOR SWITCH

var btn_temp = 0;

function setColor(trade,amount,btn) {
     
	if((btn > 1 && btn < 9) || (btn > 9 && btn < 17)){
		
		countlosses--;	
	}
 
	trade(amount);
		    
	var propertrry = document.getElementById("trade_buttons"+btn);
		    
	if(btn_temp > 0) 
		{
		var property_temp = document.getElementById("trade_buttons"+btn_temp);
		property_temp.style.backgroundColor = "";		
		}

	
    propertrry.style.backgroundColor = "Lime";

	btn_temp = btn;    
            					
      
}
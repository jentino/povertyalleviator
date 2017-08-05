//var countdiv = 1;

function dot_update(dbgindex)
{

//if(countdiv==10) countdiv=1;

  if(dbgindex== 1){

////////////////////////////////////////////current
    var display_div_id = "candle1";
    var data = "candle_id=candle1";
    var green = "greencandle";
    var red = "redcandle";

  } else if (dbgindex == 2) {
////////////////////////////////////////////5th
    var display_div_id = "candle6";
    var data = "candle_id=candle6";
    var green = "greencandle";
    var red = "redcandle";
  }
    else if (dbgindex == 3) {
////////////////////////////////////////////next  
    var display_div_id = "mycandle";
    var data = "candle_id=candle5";
    var green = "greencandle";
    var red = "redcandle";
  }
/////////////////////////////////////////////dots
    else if (dbgindex == 4) {
 
    var display_div_id = "dot1";
    var data = "candle_id=dot1";
    var green = "greendot";
    var red = "reddot";
  }

  else if (dbgindex == 5) {
 
    var display_div_id = "dot2";
    var data = "candle_id=dot2";
    var green = "greendot";
    var red = "reddot";
  }


  else if (dbgindex == 6) {
 
    var display_div_id = "dot3";
    var data = "candle_id=dot3";
    var green = "greendot";
    var red = "reddot";
  }

  else if (dbgindex == 7) {
 
    var display_div_id = "dot4";
    var data = "candle_id=dot4";
    var green = "greendot";
    var red = "reddot";
  }

var xhr;

 if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 and older
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

     xhr.open("POST", "../includes/dot_dblist.php", true); 
     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
     xhr.send(data);

   xhr.onreadystatechange = display_data;
  function display_data() {
   if (xhr.readyState == 4) {
      if (xhr.status == 200) {
         if(xhr.responseText=="1")
         document.getElementById(display_div_id).innerHTML = "<img src=../img/"+green+".png>";
         if(xhr.responseText=="2")
         document.getElementById(display_div_id).innerHTML = "<img src=../img/"+red+".png>";

      } else {

        document.getElementById(display_div_id).innerHTML = "no";

      }
     }
  }
}


ii = 300000;
function onCandleTimer() {

  ii--;
  
  dot_update(1);
  dot_update(2);
  dot_update(3);
  dot_update(4);
  dot_update(5);
  dot_update(6);
  dot_update(7);

  if (ii < 0) {    
    ii = 300000;    
  }
  else {
    setTimeout(onCandleTimer, 1000);
  }    
      
}

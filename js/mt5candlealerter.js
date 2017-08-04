function dot_update()
{
var dotid = 1;
var xhr;

 if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 and older
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
var data = "post_dot_id=" + dotid;
//alert(data);
     xhr.open("POST", "dot_dblist.php", true); 
     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
     xhr.send(data);
	 xhr.onreadystatechange = display_data;
	function display_data() {
	 if (xhr.readyState == 4) {
      if (xhr.status == 200) {

	       document.getElementById("mycandle").innerHTML = xhr.responseText;
      } else {
        document.getElementById("mycandle").innerHTML = "nothing";
        ///alert('There was a problem with the request.');
      }
     }
	}
}


ii = 300000;
function onCandleTimer() {
  //alert(i);
  ii--;
  dot_update();
  if (ws) {
      ws.send(JSON.stringify({
                time: 1
            }));
  }

  if (ii < 0) {    
    ii = 300000;    
  }
  else {
    setTimeout(onCandleTimer, 1000);
  }    
      
}

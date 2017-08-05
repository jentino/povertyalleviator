//var countdiv = 1;

function dot_update(dbgindex)
{

//if(countdiv==10) countdiv=1;

if(dbgindex==1)
  {
    var display_div_id = "mycandle";
    var data = "img_id=" + 1;

  } else if (dbgindex ==2) {
 
    var display_div_id = "dotimg1";
    var data = "img_id=" + 2;
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
         document.getElementById(display_div_id).innerHTML = "<img src=../img/greencandle.png>";
         if(xhr.responseText=="2")
         document.getElementById(display_div_id).innerHTML = "<img src=../img/redcandle.png>";

      } else {

        document.getElementById(display_div_id).innerHTML = "-";

      }
     }
  }
}


ii = 300000;
zz = 60;
function onCandleTimer() {
  //alert(i);
  ii--;

  // if(zz > 1) 
  //    zz--;
  // else {

  //   zz = 60;
  //   countdiv++;

  // }
      
  
  dot_update(1);
  dot_update(2);
  if (ii < 0) {    
    ii = 300000;    
  }
  else {
    setTimeout(onCandleTimer, 1000);
  }    
      
}

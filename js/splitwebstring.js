/////////////////////////////////////////////////////////  SPLIT WEB STRING
function parseGetVars()
	{
	 
	  var args = new Array();

	  var query = window.location.search.substring(1);
	  
	  if (query)
	  {
	   
		var strList = query.split('&');
	   
		for(str in strList)
		{
		
		  var parts = strList[str].split('=');
		 
		  args[unescape(parts[0])] = unescape(parts[1]);
		}
	  }
	  return args;
	}
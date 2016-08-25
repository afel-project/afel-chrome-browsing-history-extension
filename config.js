var config ={
   base_ns: "http://data.afel-project.org/acbh/",
   catalogue_base_url: "http://data.afel-project.eu/catalogue/index.php/",
   ecapi_url: "http://data.afel-project.eu/api/"
}


function postJsonResource(url, params, callback){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){ 
	 if (req.readyState == 4) {
	     callback(req.responseText);
	     if(req.status == 404) {
                 console.log("404 - the page newuserdataset should exist on the AFEL catalogue");
             } 
         }
    };
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(params);
    return true;
}

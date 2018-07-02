const ch= ' \u21D2 '; 
window.fbq = function fbq(value) {
    "use strict";
	
	 if (typeof value !== "string") {
        return fbq(String(value));
    }
	
	var result='';
	var isDivisable=false;
	var isContains = false;

	var Dictionary = new Map([
        ["3", "Foo"],
        ["5", "Bar"],
        ["7", "Qix"],
		["0", "*"]
    ]);
	
	Dictionary.forEach(function (val, number) { 
		if (number!=='0'){
			if (value % number === 0) {
				result += val;
				isDivisable=true;
			}
			if(value.indexOf(number) >-1)
				 isContains=true;
		}
    });
	
	 if(!isDivisable && !isContains)
	  return value.replace(/0/g, '*');

	// checking for more char occurences
	 value.split("").forEach(function (num) { // forEach is the fastest array loop for chrome 60 
        if (Dictionary.get(num)) {
            result += Dictionary.get(num);
        }
		
    });
	
	  return result;
	
}

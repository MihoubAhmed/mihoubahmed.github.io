
const ch= ' \u21D2 '; 
window.fbq = function fbq(value) {
    "use strict";
	
	 if (typeof value !== "string") {
        return fbq(String(value));
    }
	
	var result='';
	var isDivisable=false;
	var isContain = false;

	var Dictionary = new Map([
        ["3", "Foo"],
        ["5", "Bar"],
        ["7", "Qix"]
    ]);
	
	Dictionary.forEach(function (val, number) {
        if (value % number === 0) {
            result += val;
			isDivisable=true;
        }
    });
	
	
	if ((value.indexOf('3') >-1)||(value.indexOf('5') >-1)|| (value.indexOf('7') >-1) ){
        isContain=true;
    }
	 if(!isDivisable && !isContain)
	  return value.replace(/0/g, '*');

	// checking for more char occurences
	 value.split("").forEach(function (num) { // forEach is the fastest array loop for chrome 60 
        if (num === "3") {
            result += "Foo";
        }
		 if (num === "5") {
            result += "Bar";
        }
		 if (num === "7") {
            result += "Qix";
        }
		 if (num === "0") {
            result += "*";
        }
		
    });
	
	  return result.length === 0 ? value : result;
	
}

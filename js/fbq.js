
const ch= ' \u21D2 '; 
window.fbq = function fbq(value) {
    "use strict";
	
	 if (typeof value !== "string") {
        return fbq(String(value));
    }
	
	var result='';
	
	
	if (value % 3 === 0) {
        result = "Foo";
    }
	
	// checking for more char occurences
	 value.split("").forEach(function (num) { // forEach is the fastest array loop for chrome 60 
        if (num === "3") {
            result += "Foo";
        }
    });
	
	  return result.length === 0 ? value.toString() : result;
	
}

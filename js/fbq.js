
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
    if (value === "3") {
       result += "Foo";
    }
	
	
	
	  return result.length === 0 ? value.toString() : result;
	
}

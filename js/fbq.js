
const ch= ' \u21D2 '; 
window.fbq = function fbq(value) {
    "use strict";
	
	 if (typeof value !== "string") {
        return fbq(String(value));
    }
	
	return value;
	
}

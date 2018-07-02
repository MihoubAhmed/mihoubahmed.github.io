var main = (function () { //(Immediately Invoked Function Expression)
    "use strict";
   var div_results = document.querySelector("#fbq_div");
    function run(cbk, x){
		    const li = document.createElement("li");
			const text = document.createTextNode(x+ch+cbk(x));
			li.appendChild(text);
			div_results.appendChild(li);
	}
   
   
    function print(callback, limit) {
        var values = Array.from({length: limit})
		             .map((_, i) => i + 1)
		             .map(x => run(callback,x));
        }

    return {
        print
    };
}());
/*\
title: $:/.tb/modules/startup/redirect.js
type: application/javascript
module-type: startup

Redirects all incoming to a new location on startup preserving the hash...

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

// Export name and synchronous status
exports.name = "redirect";
exports.after = ["startup"];
exports.synchronous = true;

exports.startup = function() {
	if($tw.browser) {
		var hash = (window.location.hash || "").toLowerCase(),
			redirect = $tw.wiki.getTiddlerText("$:/config/Redirect/all");
		if(redirect && hash != "#:safe") {
			window.location.replace(redirect + window.location.hash);
		}
	}
}

})();

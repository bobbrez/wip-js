wip.js
======
A jQuery plugin for quickly displaying work in progress. 

Add the css class 'wip' to any elements that are currently under
development. When reviewing the page, use ctrl+w on the page

Originally based on http://robots.thoughtbot.com/post/8734502366/wip-it-wip-it-good

Groups
------
Beyond just using 'wip', using 'wip_0' through 'wip_9' allows groups of
elements to be cycled together though ctrl+0 though ctrl+9 in addition
to being globally cycled with ctrl+w


PIW (Potentally Included Work)
------------------------------
For elements that are in progress and may or may not end up in the
deliverable, use the css class 'piw'. When cycled, it will force a reflow when cycled.

Installation
============
# Include the javascript and css wip files (wip.js and wip.css).
# Enable the jquery plugin 

````javascript
$(document).ready(function(){
  $.wip();
});
````

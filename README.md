# Sticky Scroll

JavaScript module for sticking elements to the top of the page on scroll once they reach the top of the window, supports offset from the top of the page.

## Instructions

### Browserify
``` js
var StickyScroll = require('sticky-scroll')
var stickyScroll = new StickyScroll('#top')
```
### Customisable offset
``` js
var stickyScroll = StickyScroll('#top', 120)
```
Second argument is the number of offset pixels from the top of the browser window.

### Browser Usage

1. Add Markup
	``` html
	<div class="top">
		<!-- Sticky content -->
	</div>
	```

2. Link JavaScript and trigger script 
	``` html
	<!-- Put this right before the </body> closing tag -->
	<script src="sticky-scroll.js"></script>
	<script>
		var stickyScroll = StickyScroll('#top')
	</script>
	```		

## Licence

Licensed under the MIT Licence 
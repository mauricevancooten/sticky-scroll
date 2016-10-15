# Sticky Scroll

A JavaScript module for sticking elements to the top of the page on scroll once they reach the top of the window, supports offset from the top of the page.

## Instructions

### Browserify

	var StickyScroll = require('sticky-scroll')
	var stickyScroll = new StickyScroll('.top')

### Customisable offset

	var stickyScroll = StickyScroll('.top', 120)

Second argument is the offset pixels from the top of the browser window.

### Browser Usage

1. Add Markup

		<div class="top">
			<!-- Sticky content -->
		</div>

2. Link JavaScript and trigger script 

		<!-- Put this right before the </body> closing tag -->
		<script src="sticky-scroll.js"></script>
		<script>
			 var stickyScroll = StickyScroll('.top')
		</script>		

## Licence

Licensed under the MIT Licence 
# Sticky Scroll

A JavaScript module for sticking elements to the top of the page on scroll.

## Instructions

1. Link stylesheet

				<!-- Put these into the <head> -->
				<link rel="stylesheet" href="sticky-scroll.css">

2. Add Markup

				<div class="top">
					<!-- Sticky content -->
				</div>

3. Link JavaScript and trigger script 

				<!-- Put this right before the </body> closing tag -->
				<script>
			  	var stickyScroll = StickScroll('.top');
				</script>

4. Customisable offset
Second argument is the offset pixels from the top of the browser window.

				var stickyScroll = StickScroll('.top', 120);

## Licence

Licensed under the MIT Licence 
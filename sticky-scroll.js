(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['StickyScroll'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.StickyScroll = factory();
  }
}(this, function() {

  function StickyScroll(el, offset) {
    var el = document.querySelector(el),
      height = el.offsetTop
    window.addEventListener('scroll', function() {
      if (this.pageYOffset >= height) {
        if (offset == undefined) {
          el.style.cssText = 'position:fixed; top:0; width:100%;'
        } else {
          el.style.cssText = 'position:fixed; top:' + offset + 'px; width:100%;'
        }
      } else {
        el.style.cssText = 'position:static;'
      }
    })

  }
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return StickyScroll
}));

;(function () {

})();

if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    
    // AMD. Register as an anonymous module.
    define(function() {
        return FastClick;
    });
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
} else {
    window.FastClick = FastClick;
}

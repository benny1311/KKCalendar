;(function () {


    function KKCalenlar() {

    }

    KKCalenlar

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        
        // AMD. Register as an anonymous module.
        define(function() {
            return KKCalenlar;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports.KKCalenlar = KKCalenlar;
    } else {
        window.KKCalenlar = KKCalenlar;
    }
})();


function scrollIt(destination) {

    var durationTime = 700,
        duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : durationTime,
        easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutQuint',
        callback = arguments[3],

        // Predefine list of available timing functions
        // If you need more, tween js is full of great examples
        // https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L421-L737
        easings = {
            // linear: function linear(t) {
            //     return t;
            // },
            // easeInQuad: function easeInQuad(t) {
            //     return t * t;
            // },
            // easeOutQuad: function easeOutQuad(t) {
            //     return t * (2 - t);
            // },
            // easeInOutQuad: function easeInOutQuad(t) {
            //     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            // },
            // easeInCubic: function easeInCubic(t) {
            //     return t * t * t;
            // },
            // easeOutCubic: function easeOutCubic(t) {
            //     return --t * t * t + 1;
            // },
            // easeInOutCubic: function easeInOutCubic(t) {
            //     return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            // },
            // easeInQuart: function easeInQuart(t) {
            //     return t * t * t * t;
            // },
            // easeOutQuart: function easeOutQuart(t) {
            //     return 1 - --t * t * t * t;
            // },
            // easeInOutQuart: function easeInOutQuart(t) {
            //     return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
            // },
            // easeInQuint: function easeInQuint(t) {
            //     return t * t * t * t * t;
            // },
            easeOutQuint: function easeOutQuint(t) {
                return 1 + --t * t * t * t * t;
            }
            // easeInOutQuint: function easeInOutQuint(t) {
            //     return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
            // }
        },

        // Store initial position of a window and time
        // If performance is not available in your browser
        // It will fallback to new Date().getTime() - thanks IE < 10
        start = window.pageYOffset,
        startTime = 'now' in window.performance ? performance.now() : new Date().getTime(),

        // Start animation time
        allTime = new Date,

        // Take height of window and document to sesolve max scrollable value
        // Prevent requestAnimationFrame() from scrolling below maximum scollable value
        // Resolve destination type (node or number)
        documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
        windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
        destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop,
        destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    // If requestAnimationFrame is not supported
    // Move window to destination position and trigger callback function
    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    // Function resolves position of a window and moves to exact amount of pixels
    // Resolved by calculating delta and timing function choosen by user
    function scroll() {
        var now = 'now' in window.performance ? performance.now() : new Date().getTime(),
            time = Math.min(1, (now - startTime) / duration),
            timeFunction = easings[easing](time),
            pageY = window.pageYOffset;

        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

        // Stop requesting animation when window reached its destination or ended animation time
        if (pageY === destinationOffsetToScroll || (new Date - allTime) > durationTime + 10) {
            // And run a callback function
            if (callback) {
                callback();
            }
            return;
        }

        // If window still needs to scroll to reach destination
        // Request another scroll
        requestAnimationFrame(scroll);
    }

    // Invoke scroll and sequential requestAnimationFrame
    scroll();
}


/**
 * @param {(number|HTMLElement)} destination - Destination to scroll to (DOM element or number)
 * @param {number} duration - Duration of scrolling animation
 * @param {string} easing - Timing function name (Allowed values: 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint')
 * @param {function} callback - Optional callback invoked after animation
 */

// Scroll to block
// document.querySelector('.js-btn1').addEventListener('click', function () {
//     scrollIt(document.querySelector('.js-section1'), 300, 'easeOutQuad', function () {
//         return console.log('Just finished scrolling to ' + window.pageYOffset + 'px');
//     });
// });

// Scroll to 500px from top
// document.querySelector('.js-btn500').addEventListener('click', function () {
//     scrollIt(500, 300, 'easeOutQuad', function () {
//         return console.log('Just finished scrolling to ' + window.pageYOffset + 'px');
//     });
// });
/*!
 * Hanging Punctuation v0.1.0
 * https://github.com/kennethormandy/hanging-punctuation
 * MIT License
 */

var typo;

typo = {
  hangingPunctuation: function(rule) {
    var els
      , elsCount
      , widthCache = {};

    els = document.querySelectorAll(rule.selector);
    elsCount = els.length;

    // '\u201C'

    // Opening
    // ,Ps:[0x28,0x29,0x5B,0x5C,0x7B,0x7C,0xF3A,0xF3B,0xF3C,0xF3D,0x169B,0x169C,0x201A,0x201B,0x201E,0x201F,0x2045,0x2046,0x207D,0x207E,0x208D,0x208E,0x2329,0x232A,0x2768,0x2769,0x276A,0x276B,0x276C,0x276D,0x276E,0x276F,0x2770,0x2771,0x2772,0x2773,0x2774,0x2775,0x27C5,0x27C6,0x27E6,0x27E7,0x27E8,0x27E9,0x27EA,0x27EB,0x27EC,0x27ED,0x27EE,0x27EF,0x2983,0x2984,0x2985,0x2986,0x2987,0x2988,0x2989,0x298A,0x298B,0x298C,0x298D,0x298E,0x298F,0x2990,0x2991,0x2992,0x2993,0x2994,0x2995,0x2996,0x2997,0x2998,0x29D8,0x29D9,0x29DA,0x29DB,0x29FC,0x29FD,0x2E22,0x2E23,0x2E24,0x2E25,0x2E26,0x2E27,0x2E28,0x2E29,0x3008,0x3009,0x300A,0x300B,0x300C,0x300D,0x300E,0x300F,0x3010,0x3011,0x3014,0x3015,0x3016,0x3017,0x3018,0x3019,0x301A,0x301B,0x301D,0x301E,0xFD3E,0xFD3F,0xFE17,0xFE18,0xFE35,0xFE36,0xFE37,0xFE38,0xFE39,0xFE3A,0xFE3B,0xFE3C,0xFE3D,0xFE3E,0xFE3F,0xFE40,0xFE41,0xFE42,0xFE43,0xFE44,0xFE47,0xFE48,0xFE59,0xFE5A,0xFE5B,0xFE5C,0xFE5D,0xFE5E,0xFF08,0xFF09,0xFF3B,0xFF3C,0xFF5B,0xFF5C,0xFF5F,0xFF60,0xFF62,0xFF63]

    // Closing
    //,Pe:[0x29,0x2A,0x5D,0x5E,0x7D,0x7E,0xF3B,0xF3C,0xF3D,0xF3E,0x169C,0x169D,0x2046,0x2047,0x207E,0x207F,0x208E,0x208F,0x232A,0x232B,0x2769,0x276A,0x276B,0x276C,0x276D,0x276E,0x276F,0x2770,0x2771,0x2772,0x2773,0x2774,0x2775,0x2776,0x27C6,0x27C7,0x27E7,0x27E8,0x27E9,0x27EA,0x27EB,0x27EC,0x27ED,0x27EE,0x27EF,0x27F0,0x2984,0x2985,0x2986,0x2987,0x2988,0x2989,0x298A,0x298B,0x298C,0x298D,0x298E,0x298F,0x2990,0x2991,0x2992,0x2993,0x2994,0x2995,0x2996,0x2997,0x2998,0x2999,0x29D9,0x29DA,0x29DB,0x29DC,0x29FD,0x29FE,0x2E23,0x2E24,0x2E25,0x2E26,0x2E27,0x2E28,0x2E29,0x2E2A,0x3009,0x300A,0x300B,0x300C,0x300D,0x300E,0x300F,0x3010,0x3011,0x3012,0x3015,0x3016,0x3017,0x3018,0x3019,0x301A,0x301B,0x301C,0x301E,0x3020,0xFD3F,0xFD40,0xFE18,0xFE19,0xFE36,0xFE37,0xFE38,0xFE39,0xFE3A,0xFE3B,0xFE3C,0xFE3D,0xFE3E,0xFE3F,0xFE40,0xFE41,0xFE42,0xFE43,0xFE44,0xFE45,0xFE48,0xFE49,0xFE5A,0xFE5B,0xFE5C,0xFE5D,0xFE5E,0xFE5F,0xFF09,0xFF0A,0xFF3D,0xFF3E,0xFF5D,0xFF5E,0xFF60,0xFF61,0xFF63,0xFF64]

    // Opening & Closing
    // ,Pi:[0xAB,0xAC,0x2018,0x2019,0x201B,0x201D,0x201F,0x2020,0x2039,0x203A,0x2E02,0x2E03,0x2E04,0x2E05,0x2E09,0x2E0A,0x2E0C,0x2E0D,0x2E1C,0x2E1D,0x2E20,0x2E21]
    // ,Pf:[0xBB,0xBC,0x2019,0x201A,0x201D,0x201E,0x203A,0x203B,0x2E03,0x2E04,0x2E05,0x2E06,0x2E0A,0x2E0B,0x2E0D,0x2E0E,0x2E1D,0x2E1E,0x2E21,0x2E22]

    // Force-End or Allow-End
    // http://www.w3.org/TR/css-text-3/#stops-and-commas
    // ,stopsAndCommas: [0x2C, 0x2E, 0x060C, 0xAB, 0x3001, 0x3002, 0xFF0C, 0xFF0E, 0xFE50, 0xFE51, 0xFE52, 0xFF61, 0xFF64]

    while(elsCount-- > 0) {
    	var cacheKey
        , el
        , elContent
        , elFirstChar
        , elLastChar
        , tmp
        , left = 0
        , top
        , width;

      el = els[elsCount];
      elContent = el.textContent;
      elFirstChar = elContent[0];
      elLastChar = elContent[elContent.length - 1]
      elStyle = window.getComputedStyle(el, null);

      if(rule.value === 'none') {

      } else if(rule.value === 'first') {
        if(elFirstChar.match(/\“|”/) !== null) { // Need to replace this with appropriate Unicode range
          cacheKey = elStyle.fontWeight + ' ' +
                     elStyle.fontSize + ' ' +
                     elStyle.fontFamily + ' ' +
                     elStyle.fontStretch + ' ' +
                     elStyle.fontStyle;

          // Detect the desired width upfront
          if(!(cacheKey in widthCache)) {
            tmp = document.createElement('span')
            tmp.innerHTML = elFirstChar; // Should be same Unicode character
            el.appendChild(tmp);
            widthCache[cacheKey] = tmp.offsetWidth;
            el.removeChild(tmp);
          }
          width = widthCache[cacheKey];
          tmp = null;

          // This is the “true” offset in case of multiline elements
          // see http://stackoverflow.com/q/995838/113195
          tmp = document.createElement('span');
          tmp.innerHTML = '\u00A0';
          tmp.style.display = 'inline';
          el.insertBefore(tmp, el.firstChild);

          // http://stackoverflow.com/a/18953277/864799
          var left = tmp.getBoundingClientRect().left;
          el.removeChild(tmp);
          tmp = null;

          if(el.previousElementSibling && el.previousElementSibling.hasAttribute('data-hangPunctHelper')) {
            el.parentElement.removeChild(el.previousElementSibling);
          }

          if(left - width - 1 <= el.parentElement.getBoundingClientRect().left) {
            top = el.getBoundingClientRect().top;
            el.style.marginLeft = -width + 'px';

            if(top !== el.getBoundingClientRect().top) {
              var br = document.createElement('br');
              br.setAttribute('data-hangPunctHelper');
              el.insertBefore(br, el.firstChild);
            }
          } else {
            el.style.marginLeft = 0;
            // el.style.color = 'green';
          }

        } else {
          // console.log(window.getComputedStyle(el, ':before')); // ?
        }
      } else if((rule.value === 'force-end') || (rule.value === 'allow-end') || (rule.value === 'last')) {
        console.warn('Not implemented yet.');
      }

    }

  }
};

stylefill.init({
  'hanging-punctuation' : typo.hangingPunctuation
});
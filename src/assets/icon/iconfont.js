!(function(d) {
  var e,
    s =
      '<svg><symbol id="icon-shoucang" viewBox="0 0 1092 1024"><path d="M320.853333 860.16l184.32-75.093333 40.96-13.653334 40.96 13.653334 184.32 75.093333-6.826666-238.933333 27.306666-27.306667 116.053334-143.36-191.146667-54.613333-34.133333-13.653334-20.48-34.133333-109.226667-163.84-109.226667 163.84-20.48 27.306667-34.133333 13.653333-191.146667 54.613333 116.053334 143.36 27.306666 27.306667-20.48 245.76z m559.786667 163.84l-334.506667-136.533333-334.506666 136.533333 6.826666-361.813333-218.453333-266.24 341.333333-102.4 204.8-286.72 204.8 286.72 341.333334 102.4-218.453334 266.24 6.826667 361.813333z"  ></path></symbol><symbol id="icon-historyrecord" viewBox="0 0 1024 1024"><path d="M512 1024c-69.1 0-136.1-13.5-199.3-40.3C251.7 957.9 197 921 150 874c-47-47-83.9-101.7-109.7-162.7C13.5 648.1 0 581.1 0 512s13.5-136.1 40.3-199.3C66.1 251.7 103 197 150 150c47-47 101.7-83.9 162.7-109.7C375.9 13.5 442.9 0 512 0s136.1 13.5 199.3 40.3C772.3 66.1 827 103 874 150c47 47 83.9 101.7 109.7 162.7 26.7 63.2 40.3 130.2 40.3 199.3s-13.5 136.1-40.3 199.3C957.9 772.3 921 827 874 874c-47 47-101.7 83.9-162.7 109.7-63.2 26.8-130.2 40.3-199.3 40.3z m0-888.6c-100.6 0-195.2 39.2-266.3 110.3S135.4 411.4 135.4 512s39.2 195.2 110.3 266.3c71.1 71.1 165.7 110.3 266.3 110.3 100.6 0 195.2-39.2 266.3-110.3S888.6 612.6 888.6 512c0-100.6-39.2-195.2-110.3-266.3-71.1-71.1-165.7-110.3-266.3-110.3z"  ></path><path d="M512.3 576.3c-35.3 0-64-28.7-64-64V259.5c0-35.3 28.7-64 64-64s64 28.7 64 64v252.8c0 35.4-28.7 64-64 64z"  ></path><path d="M765.4 512.4c0 35.3-28.7 64-64 64H512.1c-35.3 0-64-28.7-64-64s28.7-64 64-64h189.4c35.3 0 63.9 28.7 63.9 64z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[
      e.length - 1
    ].getAttribute('data-injectcss');
  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e();
        };
        document.addEventListener('DOMContentLoaded', t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (c = d.document),
        (i = !1),
        (s = function() {
          try {
            c.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(s, 50);
          }
          n();
        })(),
        (c.onreadystatechange = function() {
          'complete' == c.readyState && ((c.onreadystatechange = null), n());
        }));
    function n() {
      i || ((i = !0), o());
    }
    var o, c, i, s;
  })(function() {
    var e, t, n, o, c, i;
    ((e = document.createElement('div')).innerHTML = s),
      (s = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (n = t),
        (o = document.body).firstChild
          ? ((c = n), (i = o.firstChild).parentNode.insertBefore(c, i))
          : o.appendChild(n));
  });
})(window);

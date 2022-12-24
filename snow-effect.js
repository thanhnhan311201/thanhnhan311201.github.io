(function () {
  function a() {
    return document.compatMode && document.compatMode != 'BackCompat'
      ? document.documentElement
      : document.body;
  }
  function b() {
    m = u ? window.innerWidth - 10 : a().clientWidth - 10;
    g =
      window.innerHeight && s == 'windowheight'
        ? window.innerHeight
        : o && s == 'windowheight'
        ? a().clientHeight
        : o && !window.opera && s == 'pageheight'
        ? a().scrollHeight
        : a().offsetHeight;
    for (v = 0; v < r; ++v) {
      c[v] += d[v];
      if (c[v] > g - 50) {
        l[v] = Math.random() * (m - h[v] - 30);
        c[v] = 0;
        p[v] = 0.02 + Math.random() / 10;
        d[v] = 0.7 + Math.random();
      }
      f[v] += p[v];
      document.getElementById('dot' + v).style.top = c[v] + 'px';
      document.getElementById('dot' + v).style.left =
        l[v] + h[v] * Math.sin(f[v]) + 'px';
    }
    window.snowtimer = setTimeout(function () {
      b();
    }, 10);
  }
  function w() {
    if (window.snowtimer) clearTimeout(snowtimer);
    for (v = 0; v < r; v++)
      document.getElementById('dot' + v).style.visibility = 'hidden';
  }
  var e = function (e) {
    for (var t = e.length - 1; t > 0; t--) {
      var n = Math.floor(Math.random() * (t + 1));
      var r = e[t];
      e[t] = e[n];
      e[n] = r;
    }
    return e;
  };
  var t = [
    'http://static.pep.vn/library/pepvn/blog-xtraffic/effects/snow-effect/img/snow.gif',
    'http://static.pep.vn/library/pepvn/blog-xtraffic/effects/snow-effect/img/snow3.gif',
  ];
  var n = t[0];
  var r = 20;
  var i = 0;
  var s = 'pageheight';
  var o = document.all ? 1 : 0;
  var u = document.getElementById && !document.all ? 1 : 0;
  var f, l, c;
  var h, p, d;
  var v,
    m = 800,
    g = 600;
  if (u) {
    m = self.innerWidth;
    g = self.innerHeight;
  } else if (o) {
    m = a().clientWidth;
    g = a().clientHeight;
  }
  f = new Array();
  l = new Array();
  c = new Array();
  h = new Array();
  p = new Array();
  d = new Array();
  for (v = 0; v < r; ++v) {
    f[v] = 0;
    l[v] = Math.random() * (m - 50);
    c[v] = Math.random() * g;
    h[v] = Math.random() * 20;
    p[v] = 0.02 + Math.random() / 10;
    d[v] = 0.7 + Math.random();
    if (o || u) {
      t = e(t);
      n = t[0];
      var y = document.createElement('div');
      if (v == 0) {
        y.innerHTML =
          '<div id="dot' +
          v +
          '" style="POSITION: absolute; Z-INDEX: ' +
          v +
          '; VISIBILITY: visible; TOP: 15px; LEFT: 15px;"><a href="http://dynamicdrive.com"><img src=\'' +
          n +
          '\' border="0"></a></div>';
      } else {
        y.innerHTML =
          '<div id="dot' +
          v +
          '" style="POSITION: absolute; Z-INDEX: ' +
          v +
          '; VISIBILITY: visible; TOP: 15px; LEFT: 15px;"><img src=\'' +
          n +
          '\' border="0"></div>';
      }
      document.body.appendChild(y.firstChild);
    }
  }
  if (o || u) {
    b();
    if (i > 0) {
      setTimeout(function () {
        w();
      }, i * 1e3);
    }
  }
})();

var _STRINGS = {
    Ad: {
      Mobile: {
        Preroll: {
          ReadyIn: "The game is ready in ",
          Loading: "Your game is loading...",
          Close: "Close",
        },
        Header: {
          ReadyIn: "The game is ready in ",
          Loading: "Your game is loading...",
          Close: "Close",
        },
        End: {
          ReadyIn: "Advertisement ends in ",
          Loading: "Please wait ...",
          Close: "Close",
        },
      },
    },
    Splash: {
      Loading: "Loading ...",
      LogoLine1: "Some text here",
      LogoLine2: "powered by Rhym",
      LogoLine3: "none",
      TapToStart: "TAP TO START",
    },
    Game: {
      SelectPlayer: "Select Player",
      Win: "You win!",
      Lose: "You lose!",
      Score: "YOUR SCORE :",
      BestScore: "BEST SCORE :",
      Time: "Time",
      Round: "ROUND",
      GameDesc: [
        "Well, Find them.",
        "Little bit harder now",
        "I'm totally lost.",
      ],
    },
    Results: { Title: "High score" },
  },
  _SETTINGS = {
    API: {
      Enabled: !0,
      Log: {
        Events: {
          InitializeGame: !1,
          EndGame: !1,
          Level: { Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0 },
        },
      },
    },
    Ad: {
      Mobile: {
        Preroll: {
          Enabled: !1,
          Duration: 5,
          Width: 300,
          Height: 250,
          Rotation: {
            Enabled: !1,
            Weight: {
              MobileAdInGamePreroll: 40,
              MobileAdInGamePreroll2: 40,
              MobileAdInGamePreroll3: 20,
            },
          },
        },
        Header: {
          Enabled: !1,
          Duration: 5,
          Width: 320,
          Height: 50,
          Rotation: {
            Enabled: !1,
            Weight: {
              MobileAdInGameHeader: 40,
              MobileAdInGameHeader2: 40,
              MobileAdInGameHeader3: 20,
            },
          },
        },
        Footer: {
          Enabled: !1,
          Duration: 5,
          Width: 320,
          Height: 50,
          Rotation: {
            Enabled: !1,
            Weight: {
              MobileAdInGameFooter: 40,
              MobileAdInGameFooter2: 40,
              MobileAdInGameFooter3: 20,
            },
          },
        },
        End: {
          Enabled: !1,
          Duration: 1,
          Width: 300,
          Height: 250,
          Rotation: {
            Enabled: !1,
            Weight: {
              MobileAdInGameEnd: 40,
              MobileAdInGameEnd2: 40,
              MobileAdInGameEnd3: 20,
            },
          },
        },
      },
    },
    Language: { Default: "en" },
    DeveloperBranding: {
      Splash: { Enabled: !0 },
      Logo: {
        Enabled: !1,
        Link: "",
        LinkEnabled: !1,
        NewWindow: !0,
        Width: 166,
        Height: 61,
      },
    },
    Branding: {
      Splash: { Enabled: !1 },
      Logo: {
        Enabled: !1,
        Link: "",
        LinkEnabled: !0,
        NewWindow: !0,
        Width: 280,
        Height: 34,
      },
    },
    MoreGames: { Enabled: !1, Link: "", NewWindow: !0 },
    Gamecenter: { Enabled: !0 },
    TapToStartAudioUnlock: { Enabled: !1 },
    Versioning: {
      Version: "1.0.0",
      Build: "3",
      DisplayLog: !0,
      DrawVersion: !0,
      FontSize: "16px",
      FontFamily: "Arial",
      FillStyle: "#000000",
    },
  };
void 0 !== _SETTINGS.Versioning &&
  null !== _SETTINGS.Versioning &&
  !0 === _SETTINGS.Versioning.DisplayLog &&
  console.log(
    "Release: v" +
      _SETTINGS.Versioning.Version +
      "+build." +
      _SETTINGS.Versioning.Build
  );
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close:
      _STRINGS.Ad.Mobile.Preroll.Close +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
      console.log("game start");
      if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
        var e = (i = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight)
            .MobileAdInGamePreroll,
          t = e + i.MobileAdInGamePreroll2,
          i = t + i.MobileAdInGamePreroll3,
          n = Math.floor(100 * Math.random());
        console.log("seed: ", n),
          n <= e
            ? (this.selectedOverlayName = "MobileAdInGamePreroll")
            : n <= t
            ? (this.selectedOverlayName = "MobileAdInGamePreroll2")
            : n <= i && (this.selectedOverlayName = "MobileAdInGamePreroll3"),
          console.log("Ad rotating preroll enabled");
      } else
        (this.selectedOverlayName = "MobileAdInGamePreroll"),
          console.log("Ad rotating preroll disabled");
      console.log("selected:", this.selectedOverlayName),
        (this.overlay = $("#" + this.selectedOverlayName)),
        (this.box = $("#" + this.selectedOverlayName + "-Box")),
        (this.game = $("#game")),
        (this.boxContents = {
          footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
          header: $("#" + this.selectedOverlayName + "-Box-Header"),
          close: $("#" + this.selectedOverlayName + "-Box-Close"),
          body: $("#" + this.selectedOverlayName + "-Box-Body"),
        }),
        this.box.width(this.ad_width),
        this.box.height(this.ad_height),
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2),
        this.box.css(
          "top",
          (this.overlay.height() -
            this.box.height() -
            this.boxContents.header.height() -
            this.boxContents.footer.height()) /
            2
        ),
        this.overlay.show(this.Timer(this.ad_duration));
    },
    Timer: function (e) {
      var t = e,
        i = setInterval(function () {
          MobileAdInGamePreroll.boxContents.header.text(
            MobileAdInGamePreroll.ready_in + t + "..."
          ),
            MobileAdInGamePreroll.boxContents.footer.text(
              MobileAdInGamePreroll.loading
            ),
            0 > --t &&
              (clearInterval(i),
              MobileAdInGamePreroll.boxContents.close.css(
                "left",
                MobileAdInGamePreroll.boxContents.body.width() - 23
              ),
              MobileAdInGamePreroll.boxContents.close.show(),
              MobileAdInGamePreroll.boxContents.header.html(
                MobileAdInGamePreroll.close
              ),
              MobileAdInGamePreroll.boxContents.footer.text(""));
        }, 1e3);
    },
    Close: function () {
      this.boxContents.close.hide(), this.overlay.hide();
    },
  },
  MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function () {
      if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
        var e = (i = _SETTINGS.Ad.Mobile.Header.Rotation.Weight)
            .MobileAdInGameHeader,
          t = e + i.MobileAdInGameHeader2,
          i = t + i.MobileAdInGameHeader3,
          n = Math.floor(100 * Math.random());
        console.log("seed: ", n),
          n <= e
            ? (this.selectedOverlayName = "MobileAdInGameHeader")
            : n <= t
            ? (this.selectedOverlayName = "MobileAdInGameHeader2")
            : n <= i && (this.selectedOverlayName = "MobileAdInGameHeader3"),
          console.log("Ad rotating header enabled");
      } else
        (this.selectedOverlayName = "MobileAdInGameHeader"),
          console.log("Ad rotating header disabled");
      (this.div = $("#" + this.selectedOverlayName)),
        (this.game = $("#game")),
        this.div.width(this.ad_width),
        this.div.height(this.ad_height),
        this.div.css(
          "left",
          this.game.position().left + (this.game.width() - this.div.width()) / 2
        ),
        this.div.css("top", 0),
        this.div.show(this.Timer(this.ad_duration));
    },
    Timer: function (e) {
      var t = setInterval(function () {
        0 > --e && (MobileAdInGameHeader.div.hide(), clearInterval(t));
      }, 1e3);
    },
  },
  MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function () {
      if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
        var e = (i = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight)
            .MobileAdInGameFooter,
          t = e + i.MobileAdInGameFooter2,
          i = t + i.MobileAdInGameFooter3,
          n = Math.floor(100 * Math.random());
        console.log("seed: ", n),
          n <= e
            ? (this.selectedOverlayName = "MobileAdInGameFooter")
            : n <= t
            ? (this.selectedOverlayName = "MobileAdInGameFooter2")
            : n <= i && (this.selectedOverlayName = "MobileAdInGameFooter3"),
          console.log("Ad rotating footer enabled");
      } else
        (this.selectedOverlayName = "MobileAdInGameFooter"),
          console.log("Ad rotating footer disabled");
      (this.div = $("#" + this.selectedOverlayName)),
        (this.game = $("#game")),
        this.div.width(this.ad_width),
        this.div.height(this.ad_height),
        this.div.css(
          "left",
          this.game.position().left + (this.game.width() - this.div.width()) / 2
        ),
        this.div.css("top", this.game.height() - this.div.height() - 5),
        this.div.show(this.Timer(this.ad_duration));
    },
    Timer: function (e) {
      var t = setInterval(function () {
        0 > --e && (MobileAdInGameFooter.div.hide(), clearInterval(t));
      }, 1e3);
    },
  },
  MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close:
      _STRINGS.Ad.Mobile.End.Close +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
      if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
        var e = (i = _SETTINGS.Ad.Mobile.End.Rotation.Weight).MobileAdInGameEnd,
          t = e + i.MobileAdInGameEnd2,
          i = t + i.MobileAdInGameEnd3,
          n = Math.floor(100 * Math.random());
        console.log("seed: ", n),
          n <= e
            ? (this.selectedOverlayName = "MobileAdInGameEnd")
            : n <= t
            ? (this.selectedOverlayName = "MobileAdInGameEnd2")
            : n <= i && (this.selectedOverlayName = "MobileAdInGameEnd3"),
          console.log("Ad rotating end enabled");
      } else
        (this.selectedOverlayName = "MobileAdInGameEnd"),
          console.log("Ad rotating end disabled");
      console.log("selected:", this.selectedOverlayName),
        (this.overlay = $("#" + this.selectedOverlayName)),
        (this.box = $("#" + this.selectedOverlayName + "-Box")),
        (this.game = $("#game")),
        (this.boxContents = {
          footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
          header: $("#" + this.selectedOverlayName + "-Box-Header"),
          close: $("#" + this.selectedOverlayName + "-Box-Close"),
          body: $("#" + this.selectedOverlayName + "-Box-Body"),
        }),
        this.box.width(this.ad_width),
        this.box.height(this.ad_height),
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2),
        this.box.css(
          "top",
          (this.overlay.height() -
            this.box.height() -
            this.boxContents.header.height() -
            this.boxContents.footer.height()) /
            2
        ),
        this.overlay.show(this.Timer(this.ad_duration));
    },
    Timer: function (e) {
      var t = e,
        i = setInterval(function () {
          MobileAdInGameEnd.boxContents.header.text(
            MobileAdInGameEnd.ready_in + t + "..."
          ),
            MobileAdInGameEnd.boxContents.footer.text(
              MobileAdInGameEnd.loading
            ),
            0 > --t &&
              (clearInterval(i),
              MobileAdInGameEnd.boxContents.close.css(
                "left",
                MobileAdInGameEnd.boxContents.body.width() - 23
              ),
              MobileAdInGameEnd.boxContents.close.show(),
              MobileAdInGameEnd.boxContents.header.html(
                MobileAdInGameEnd.close
              ),
              MobileAdInGameEnd.boxContents.footer.text(""));
        }, 1e3);
    },
    Close: function () {
      this.boxContents.close.hide(), this.overlay.hide();
    },
  };
function getInternetExplorerVersion() {
  var e,
    t =
      ((e = !0),
      function (t, i) {
        var n = e
          ? function () {
              if (i) {
                var e = i.apply(t, arguments);
                return (i = null), e;
              }
            }
          : function () {};
        return (e = !1), n;
      });
  t(this, function () {
    for (
      var e = (function () {
          var e;
          try {
            e = Function(
              'return (function() {}.constructor("return this")( ));'
            )();
          } catch (t) {
            e = window;
          }
          return e;
        })(),
        i = (e.console = e.console || {}),
        n = ["log", "warn", "info", "error", "exception", "table", "trace"],
        o = 0;
      o < n.length;
      o++
    ) {
      var s = t.constructor.prototype.bind(t),
        a = n[o],
        r = i[a] || s;
      (s.__proto__ = t.bind(t)), (s.toString = r.toString.bind(r)), (i[a] = s);
    }
  })();
  var i = -1;
  return (
    "Microsoft Internet Explorer" == navigator.appName &&
      null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) &&
      (i = parseFloat(RegExp.$1)),
    i
  );
}
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function i(e, t) {
    var i = (t = t || Y).createElement("script");
    (i.text = e), t.head.appendChild(i).parentNode.removeChild(i);
  }
  function n(e) {
    var t = !!e && "length" in e && e.length,
      i = se.type(e);
    return (
      "function" !== i &&
      !se.isWindow(e) &&
      ("array" === i ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function s(e, t, i) {
    return se.isFunction(t)
      ? se.grep(e, function (e, n) {
          return !!t.call(e, n, e) !== i;
        })
      : t.nodeType
      ? se.grep(e, function (e) {
          return (e === t) !== i;
        })
      : "string" != typeof t
      ? se.grep(e, function (e) {
          return -1 < J.call(t, e) !== i;
        })
      : Ht.test(t)
      ? se.filter(t, e, i)
      : ((t = se.filter(t, e)),
        se.grep(e, function (e) {
          return -1 < J.call(t, e) !== i && 1 === e.nodeType;
        }));
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function r(e) {
    return e;
  }
  function l(e) {
    throw e;
  }
  function u(e, t, i, n) {
    var o;
    try {
      e && se.isFunction((o = e.promise))
        ? o.call(e).done(t).fail(i)
        : e && se.isFunction((o = e.then))
        ? o.call(e, t, i)
        : t.apply(void 0, [e].slice(n));
    } catch (e) {
      i.apply(void 0, [e]);
    }
  }
  function h() {
    Y.removeEventListener("DOMContentLoaded", h),
      e.removeEventListener("load", h),
      se.ready();
  }
  function d() {
    this.expando = se.expando + d.uid++;
  }
  function c(e, t, i) {
    var n;
    if (void 0 === i && 1 === e.nodeType)
      if (
        ((n = "data-" + t.replace(Vt, "-$&").toLowerCase()),
        "string" == typeof (i = e.getAttribute(n)))
      ) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : qt.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Wt.set(e, t, i);
      } else i = void 0;
    return i;
  }
  function g(e, t, i, n) {
    var o,
      s = 1,
      a = 20,
      r = n
        ? function () {
            return n.cur();
          }
        : function () {
            return se.css(e, t, "");
          },
      l = r(),
      u = (i && i[3]) || (se.cssNumber[t] ? "" : "px"),
      h = (se.cssNumber[t] || ("px" !== u && +l)) && Ut.exec(se.css(e, t));
    if (h && h[3] !== u) {
      (u = u || h[3]), (i = i || []), (h = +l || 1);
      do {
        (h /= s = s || ".5"), se.style(e, t, h + u);
      } while (s !== (s = r() / l) && 1 !== s && --a);
    }
    return (
      i &&
        ((h = +h || +l || 0),
        (o = i[1] ? h + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = u), (n.start = h), (n.end = o))),
      o
    );
  }
  function p(e, t) {
    for (var i, n, o = [], s = 0, a = e.length; s < a; s++)
      if ((n = e[s]).style)
        if (((i = n.style.display), t)) {
          if (
            ("none" === i &&
              ((o[s] = jt.get(n, "display") || null),
              o[s] || (n.style.display = "")),
            "" === n.style.display && Kt(n))
          ) {
            i = o;
            var r,
              l = s,
              u = void 0;
            r = n.ownerDocument;
            var h = n.nodeName;
            (n = Jt[h]) ||
              ((u = r.body.appendChild(r.createElement(h))),
              (n = se.css(u, "display")),
              u.parentNode.removeChild(u),
              "none" === n && (n = "block"),
              (Jt[h] = n)),
              (r = n),
              (i[l] = r);
          }
        } else "none" !== i && ((o[s] = "none"), jt.set(n, "display", i));
    for (s = 0; s < a; s++) null != o[s] && (e[s].style.display = o[s]);
    return e;
  }
  function f(e, t) {
    var i;
    return (
      (i =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && o(e, t)) ? se.merge([e], i) : i
    );
  }
  function m(e, t) {
    for (var i = 0, n = e.length; i < n; i++)
      jt.set(e[i], "globalEval", !t || jt.get(t[i], "globalEval"));
  }
  function y(e, t, i, n, o) {
    for (
      var s,
        a,
        r,
        l,
        u = t.createDocumentFragment(),
        h = [],
        d = 0,
        c = e.length;
      d < c;
      d++
    )
      if ((s = e[d]) || 0 === s)
        if ("object" === se.type(s)) se.merge(h, s.nodeType ? [s] : s);
        else if (ni.test(s)) {
          for (
            a = a || u.appendChild(t.createElement("div")),
              r = (ei.exec(s) || ["", ""])[1].toLowerCase(),
              r = ii[r] || ii._default,
              a.innerHTML = r[1] + se.htmlPrefilter(s) + r[2],
              r = r[0];
            r--;

          )
            a = a.lastChild;
          se.merge(h, a.childNodes), ((a = u.firstChild).textContent = "");
        } else h.push(t.createTextNode(s));
    for (u.textContent = "", d = 0; (s = h[d++]); )
      if (n && -1 < se.inArray(s, n)) o && o.push(s);
      else if (
        ((l = se.contains(s.ownerDocument, s)),
        (a = f(u.appendChild(s), "script")),
        l && m(a),
        i)
      )
        for (r = 0; (s = a[r++]); ) ti.test(s.type || "") && i.push(s);
    return u;
  }
  function _() {
    return !0;
  }
  function v() {
    return !1;
  }
  function b() {
    try {
      return Y.activeElement;
    } catch (e) {}
  }
  function w(e, t, i, n, o, s) {
    var a, r;
    if ("object" == typeof t) {
      for (r in ("string" != typeof i && ((n = n || i), (i = void 0)), t))
        w(e, r, i, n, t[r], s);
      return e;
    }
    if (
      (null == n && null == o
        ? ((o = i), (n = i = void 0))
        : null == o &&
          ("string" == typeof i
            ? ((o = n), (n = void 0))
            : ((o = n), (n = i), (i = void 0))),
      !1 === o)
    )
      o = v;
    else if (!o) return e;
    return (
      1 === s &&
        ((a = o),
        (o = function (e) {
          return se().off(e), a.apply(this, arguments);
        }),
        (o.guid = a.guid || (a.guid = se.guid++))),
      e.each(function () {
        se.event.add(this, t, o, n, i);
      })
    );
  }
  function x(e, t) {
    return (
      (o(e, "table") &&
        o(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        se(">tbody", e)[0]) ||
      e
    );
  }
  function T(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function S(e) {
    var t = gi.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function E(e, t) {
    var i, n, o, s, a, r;
    if (1 === t.nodeType) {
      if (
        jt.hasData(e) &&
        ((i = jt.access(e)), (n = jt.set(t, i)), (r = i.events))
      )
        for (o in (delete n.handle, (n.events = {}), r))
          for (i = 0, n = r[o].length; i < n; i++) se.event.add(t, o, r[o][i]);
      Wt.hasData(e) &&
        ((s = Wt.access(e)), (a = se.extend({}, s)), Wt.set(t, a));
    }
  }
  function A(e, t, n, o) {
    t = K.apply([], t);
    var s,
      a,
      r,
      l,
      u = 0,
      h = e.length,
      d = h - 1,
      c = t[0],
      g = se.isFunction(c);
    if (g || (1 < h && "string" == typeof c && !oe.checkClone && ci.test(c)))
      return e.each(function (i) {
        var s = e.eq(i);
        g && (t[0] = c.call(this, i, s.html())), A(s, t, n, o);
      });
    if (
      h &&
      ((a = (s = y(t, e[0].ownerDocument, !1, e, o)).firstChild),
      1 === s.childNodes.length && (s = a),
      a || o)
    ) {
      for (r = (a = se.map(f(s, "script"), T)).length; u < h; u++)
        (l = s),
          u !== d &&
            ((l = se.clone(l, !0, !0)), r && se.merge(a, f(l, "script"))),
          n.call(e[u], l, u);
      if (r)
        for (s = a[a.length - 1].ownerDocument, se.map(a, S), u = 0; u < r; u++)
          (l = a[u]),
            ti.test(l.type || "") &&
              !jt.access(l, "globalEval") &&
              se.contains(s, l) &&
              (l.src
                ? se._evalUrl && se._evalUrl(l.src)
                : i(l.textContent.replace(pi, ""), s));
    }
    return e;
  }
  function k(e, t, i) {
    for (var n = t ? se.filter(t, e) : e, o = 0; null != (t = n[o]); o++)
      i || 1 !== t.nodeType || se.cleanData(f(t)),
        t.parentNode &&
          (i && se.contains(t.ownerDocument, t) && m(f(t, "script")),
          t.parentNode.removeChild(t));
    return e;
  }
  function C(e, t, i) {
    var n,
      o,
      s,
      a,
      r = e.style;
    return (
      (i = i || wi(e)) &&
        ("" !== (a = i.getPropertyValue(t) || i[t]) ||
          se.contains(e.ownerDocument, e) ||
          (a = se.style(e, t)),
        !oe.pixelMarginRight() &&
          bi.test(a) &&
          vi.test(t) &&
          ((n = r.width),
          (o = r.minWidth),
          (s = r.maxWidth),
          (r.minWidth = r.maxWidth = r.width = a),
          (a = i.width),
          (r.width = n),
          (r.minWidth = o),
          (r.maxWidth = s))),
      void 0 !== a ? a + "" : a
    );
  }
  function M(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function P(e) {
    if (!(i = se.cssProps[e])) {
      var t,
        i = se.cssProps;
      e: if (((t = e), !(t in Pi))) {
        for (var n = t[0].toUpperCase() + t.slice(1), o = Mi.length; o--; )
          if ((t = Mi[o] + n) in Pi) break e;
        t = void 0;
      }
      i = i[e] = t || e;
    }
    return i;
  }
  function I(e, t, i) {
    return (e = Ut.exec(t)) ? Math.max(0, e[2] - (i || 0)) + (e[3] || "px") : t;
  }
  function z(e, t, i, n, o) {
    var s = 0;
    for (
      t = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      4 > t;
      t += 2
    )
      "margin" === i && (s += se.css(e, i + Xt[t], !0, o)),
        n
          ? ("content" === i && (s -= se.css(e, "padding" + Xt[t], !0, o)),
            "margin" !== i &&
              (s -= se.css(e, "border" + Xt[t] + "Width", !0, o)))
          : ((s += se.css(e, "padding" + Xt[t], !0, o)),
            "padding" !== i &&
              (s += se.css(e, "border" + Xt[t] + "Width", !0, o)));
    return s;
  }
  function H(e, t, i) {
    var n,
      o = wi(e),
      s = C(e, t, o),
      a = "border-box" === se.css(e, "boxSizing", !1, o);
    return bi.test(s)
      ? s
      : ((n = a && (oe.boxSizingReliable() || s === e.style[t])),
        "auto" === s && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (s = parseFloat(s) || 0) +
          z(e, t, i || (a ? "border" : "content"), n, o) +
          "px");
  }
  function L(e, t, i, n, o) {
    return new L.prototype.init(e, t, i, n, o);
  }
  function O() {
    zi &&
      (!1 === Y.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(O)
        : e.setTimeout(O, se.fx.interval),
      se.fx.tick());
  }
  function R() {
    return (
      e.setTimeout(function () {
        Ii = void 0;
      }),
      (Ii = se.now())
    );
  }
  function $(e, t) {
    var i,
      n = 0,
      o = { height: e };
    for (t = t ? 1 : 0; 4 > n; n += 2 - t)
      o["margin" + (i = Xt[n])] = o["padding" + i] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function D(e, t, i) {
    for (
      var n,
        o = (N.tweeners[t] || []).concat(N.tweeners["*"]),
        s = 0,
        a = o.length;
      s < a;
      s++
    )
      if ((n = o[s].call(i, t, e))) return n;
  }
  function N(e, t, i) {
    var n,
      o,
      s,
      a,
      r,
      l,
      u = 0,
      h = N.prefilters.length,
      d = se.Deferred().always(function () {
        delete c.elem;
      }),
      c = function () {
        if (o) return !1;
        for (
          var t = Ii || R(),
            i =
              1 -
              ((t = Math.max(0, g.startTime + g.duration - t)) / g.duration ||
                0),
            n = 0,
            s = g.tweens.length;
          n < s;
          n++
        )
          g.tweens[n].run(i);
        return (
          d.notifyWith(e, [g, i, t]),
          1 > i && s
            ? t
            : (s || d.notifyWith(e, [g, 1, 0]), d.resolveWith(e, [g]), !1)
        );
      },
      g = d.promise({
        elem: e,
        props: se.extend({}, t),
        opts: se.extend(
          !0,
          { specialEasing: {}, easing: se.easing._default },
          i
        ),
        originalProperties: t,
        originalOptions: i,
        startTime: Ii || R(),
        duration: i.duration,
        tweens: [],
        createTween: function (t, i) {
          var n = se.Tween(
            e,
            g.opts,
            t,
            i,
            g.opts.specialEasing[t] || g.opts.easing
          );
          return g.tweens.push(n), n;
        },
        stop: function (t) {
          var i = 0,
            n = t ? g.tweens.length : 0;
          if (o) return this;
          for (o = !0; i < n; i++) g.tweens[i].run(1);
          return (
            t
              ? (d.notifyWith(e, [g, 1, 0]), d.resolveWith(e, [g, t]))
              : d.rejectWith(e, [g, t]),
            this
          );
        },
      });
    for (n in ((t = g.props), (i = g.opts.specialEasing), t))
      if (
        ((a = i[(s = se.camelCase(n))]),
        (r = t[n]),
        Array.isArray(r) && ((a = r[1]), (r = t[n] = r[0])),
        n !== s && ((t[s] = r), delete t[n]),
        (l = se.cssHooks[s]) && "expand" in l)
      )
        for (n in ((r = l.expand(r)), delete t[s], r))
          n in t || ((t[n] = r[n]), (i[n] = a));
      else i[s] = a;
    for (; u < h; u++)
      if ((n = N.prefilters[u].call(g, e, t, g.opts)))
        return (
          se.isFunction(n.stop) &&
            (se._queueHooks(g.elem, g.opts.queue).stop = se.proxy(n.stop, n)),
          n
        );
    return (
      se.map(t, D, g),
      se.isFunction(g.opts.start) && g.opts.start.call(e, g),
      g
        .progress(g.opts.progress)
        .done(g.opts.done, g.opts.complete)
        .fail(g.opts.fail)
        .always(g.opts.always),
      se.fx.timer(se.extend(c, { elem: e, anim: g, queue: g.opts.queue })),
      g
    );
  }
  function F(e) {
    return (e.match(Dt) || []).join(" ");
  }
  function B(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function G(e, t, i, n) {
    var o;
    if (Array.isArray(t))
      se.each(t, function (t, o) {
        i || Vi.test(e)
          ? n(e, o)
          : G(
              e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
              o,
              i,
              n
            );
      });
    else if (i || "object" !== se.type(t)) n(e, t);
    else for (o in t) G(e + "[" + o + "]", t[o], i, n);
  }
  function j(e) {
    return function (t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var n,
        o = 0,
        s = t.toLowerCase().match(Dt) || [];
      if (se.isFunction(i))
        for (; (n = s[o++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
            : (e[n] = e[n] || []).push(i);
    };
  }
  function W(e, t, i, n) {
    function o(r) {
      var l;
      return (
        (s[r] = !0),
        se.each(e[r] || [], function (e, r) {
          var u = r(t, i, n);
          return "string" != typeof u || a || s[u]
            ? a
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), o(u), !1);
        }),
        l
      );
    }
    var s = {},
      a = e === on;
    return o(t.dataTypes[0]) || (!s["*"] && o("*"));
  }
  function q(e, t) {
    var i,
      n,
      o = se.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
    return n && se.extend(!0, e, n), e;
  }
  var V = [],
    Y = e.document,
    U = Object.getPrototypeOf,
    X = V.slice,
    K = V.concat,
    Q = V.push,
    J = V.indexOf,
    Z = {},
    ee = Z.toString,
    te = Z.hasOwnProperty,
    ie = te.toString,
    ne = ie.call(Object),
    oe = {},
    se = function (e, t) {
      return new se.fn.init(e, t);
    },
    ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    re = /^-ms-/,
    le = /-([a-z])/g,
    ue = function (e, t) {
      return t.toUpperCase();
    };
  (se.fn = se.prototype =
    {
      jquery: "3.2.1",
      constructor: se,
      length: 0,
      toArray: function () {
        return X.call(this);
      },
      get: function (e) {
        return null == e
          ? X.call(this)
          : 0 > e
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        return ((e = se.merge(this.constructor(), e)).prevObject = this), e;
      },
      each: function (e) {
        return se.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          se.map(this, function (t, i) {
            return e.call(t, i, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(X.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length;
        return (
          (e = +e + (0 > e ? t : 0)),
          this.pushStack(0 <= e && e < t ? [this[e]] : [])
        );
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: Q,
      sort: V.sort,
      splice: V.splice,
    }),
    (se.extend = se.fn.extend =
      function () {
        var e,
          t,
          i,
          n,
          o,
          s,
          a = arguments[0] || {},
          r = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof a && ((u = a), (a = arguments[r] || {}), r++),
            "object" == typeof a || se.isFunction(a) || (a = {}),
            r === l && ((a = this), r--);
          r < l;
          r++
        )
          if (null != (e = arguments[r]))
            for (t in e)
              (i = a[t]),
                a !== (n = e[t]) &&
                  (u && n && (se.isPlainObject(n) || (o = Array.isArray(n)))
                    ? (o
                        ? ((o = !1), (s = i && Array.isArray(i) ? i : []))
                        : (s = i && se.isPlainObject(i) ? i : {}),
                      (a[t] = se.extend(u, s, n)))
                    : void 0 !== n && (a[t] = n));
        return a;
      }),
    se.extend({
      expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === se.type(e);
      },
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = se.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, i;
        return !(
          !e ||
          "[object Object]" !== ee.call(e) ||
          ((t = U(e)) &&
            ((i = te.call(t, "constructor") && t.constructor),
            "function" != typeof i || ie.call(i) !== ne))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? Z[ee.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        i(e);
      },
      camelCase: function (e) {
        return e.replace(re, "ms-").replace(le, ue);
      },
      each: function (e, t) {
        var i,
          o = 0;
        if (n(e))
          for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++);
        else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(ae, "");
      },
      makeArray: function (e, t) {
        var i = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? se.merge(i, "string" == typeof e ? [e] : e)
              : Q.call(i, e)),
          i
        );
      },
      inArray: function (e, t, i) {
        return null == t ? -1 : J.call(t, e, i);
      },
      merge: function (e, t) {
        for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
        return (e.length = o), e;
      },
      grep: function (e, t, i) {
        for (var n = [], o = 0, s = e.length, a = !i; o < s; o++)
          (i = !t(e[o], o)) !== a && n.push(e[o]);
        return n;
      },
      map: function (e, t, i) {
        var o,
          s,
          a = 0,
          r = [];
        if (n(e))
          for (o = e.length; a < o; a++)
            null != (s = t(e[a], a, i)) && r.push(s);
        else for (a in e) null != (s = t(e[a], a, i)) && r.push(s);
        return K.apply([], r);
      },
      guid: 1,
      proxy: function (e, t) {
        var i, n, o;
        if (
          ("string" == typeof t && ((i = e[t]), (t = e), (e = i)),
          se.isFunction(e))
        )
          return (
            (n = X.call(arguments, 2)),
            (o = function () {
              return e.apply(t || this, n.concat(X.call(arguments)));
            }),
            (o.guid = e.guid = e.guid || se.guid++),
            o
          );
      },
      now: Date.now,
      support: oe,
    }),
    "function" == typeof Symbol &&
      (se.fn[Symbol.iterator] = V[Symbol.iterator]),
    se.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var he,
    de,
    ce,
    ge,
    pe,
    fe,
    me,
    ye,
    _e,
    ve,
    be,
    we,
    xe,
    Te,
    Se,
    Ee,
    Ae,
    ke,
    Ce,
    Me,
    Pe = e,
    Ie = function (e, t, i, n) {
      var o,
        s,
        a,
        r,
        l,
        u = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return i;
      if (
        !n &&
        ((t ? t.ownerDocument || t : Ke) !== Te && xe(t), (t = t || Te), Ee)
      ) {
        if (11 !== h && (r = wt.exec(e)))
          if ((o = r[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return i;
              if (s.id === o) return i.push(s), i;
            } else if (u && (s = u.getElementById(o)) && Me(t, s) && s.id === o)
              return i.push(s), i;
          } else {
            if (r[2]) return rt.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = r[3]) &&
              ce.getElementsByClassName &&
              t.getElementsByClassName
            )
              return rt.apply(i, t.getElementsByClassName(o)), i;
          }
        if (ce.qsa && !tt[e + " "] && (!Ae || !Ae.test(e))) {
          if (1 !== h) (u = t), (l = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute("id"))
                ? (a = a.replace(Et, At))
                : t.setAttribute("id", (a = Xe)),
                o = (s = me(e)).length;
              o--;

            )
              s[o] = "#" + a + " " + je(s[o]);
            (l = s.join(",")), (u = (xt.test(e) && Be(t.parentNode)) || t);
          }
          if (l)
            try {
              return rt.apply(i, u.querySelectorAll(l)), i;
            } catch (e) {
            } finally {
              a === Xe && t.removeAttribute("id");
            }
        }
      }
      return _e(e.replace(dt, "$1"), t, i, n);
    },
    ze = function () {
      var e = [];
      return function t(i, n) {
        return (
          e.push(i + " ") > ge.cacheLength && delete t[e.shift()],
          (t[i + " "] = n)
        );
      };
    },
    He = function (e) {
      return (e[Xe] = !0), e;
    },
    Le = function (e) {
      var t = Te.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
      }
    },
    Oe = function (e, t) {
      for (var i = e.split("|"), n = i.length; n--; ) ge.attrHandle[i[n]] = t;
    },
    Re = function (e, t) {
      var i = t && e,
        n =
          i &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
      return e ? 1 : -1;
    },
    $e = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    },
    De = function (e) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === e;
      };
    },
    Ne = function (e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && Ct(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    },
    Fe = function (e) {
      return He(function (t) {
        return (
          (t = +t),
          He(function (i, n) {
            for (var o, s = e([], i.length, t), a = s.length; a--; )
              i[(o = s[a])] && (i[o] = !(n[o] = i[o]));
          })
        );
      });
    },
    Be = function (e) {
      return e && void 0 !== e.getElementsByTagName && e;
    },
    Ge = function () {},
    je = function (e) {
      for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
      return n;
    },
    We = function (e, t, i) {
      var n = t.dir,
        o = t.next,
        s = o || n,
        a = i && "parentNode" === s,
        r = Je++;
      return t.first
        ? function (t, i, o) {
            for (; (t = t[n]); ) if (1 === t.nodeType || a) return e(t, i, o);
            return !1;
          }
        : function (t, i, l) {
            var u,
              h,
              d,
              c = [Qe, r];
            if (l) {
              for (; (t = t[n]); )
                if ((1 === t.nodeType || a) && e(t, i, l)) return !0;
            } else
              for (; (t = t[n]); )
                if (1 === t.nodeType || a)
                  if (
                    ((h =
                      (d = t[Xe] || (t[Xe] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[n] || t;
                  else {
                    if ((u = h[s]) && u[0] === Qe && u[1] === r)
                      return (c[2] = u[2]);
                    if (((h[s] = c), (c[2] = e(t, i, l)))) return !0;
                  }
            return !1;
          };
    },
    qe = function (e) {
      return 1 < e.length
        ? function (t, i, n) {
            for (var o = e.length; o--; ) if (!e[o](t, i, n)) return !1;
            return !0;
          }
        : e[0];
    },
    Ve = function (e, t, i, n, o) {
      for (var s, a = [], r = 0, l = e.length, u = null != t; r < l; r++)
        (s = e[r]) && ((i && !i(s, n, o)) || (a.push(s), u && t.push(r)));
      return a;
    },
    Ye = function (e, t, i, n, o, s) {
      return (
        n && !n[Xe] && (n = Ye(n)),
        o && !o[Xe] && (o = Ye(o, s)),
        He(function (s, a, r, l) {
          var u,
            h,
            d,
            c = [],
            g = [],
            p = a.length;
          if (!(d = s)) {
            d = t || "*";
            for (
              var f = r.nodeType ? [r] : r, m = [], y = 0, _ = f.length;
              y < _;
              y++
            )
              Ie(d, f[y], m);
            d = m;
          }
          if (
            ((d = !e || (!s && t) ? d : Ve(d, c, e, r, l)),
            (f = i ? (o || (s ? e : p || n) ? [] : a) : d),
            i && i(d, f, r, l),
            n)
          )
            for (u = Ve(f, g), n(u, [], r, l), r = u.length; r--; )
              (h = u[r]) && (f[g[r]] = !(d[g[r]] = h));
          if (s) {
            if (o || e) {
              if (o) {
                for (u = [], r = f.length; r--; )
                  (h = f[r]) && u.push((d[r] = h));
                o(null, (f = []), u, l);
              }
              for (r = f.length; r--; )
                (h = f[r]) &&
                  -1 < (u = o ? ut(s, h) : c[r]) &&
                  (s[u] = !(a[u] = h));
            }
          } else (f = Ve(f === a ? f.splice(p, f.length) : f)), o ? o(null, a, f, l) : rt.apply(a, f);
        })
      );
    },
    Ue = function (e) {
      var t,
        i,
        n,
        o = e.length,
        s = ge.relative[e[0].type];
      i = s || ge.relative[" "];
      for (
        var a = s ? 1 : 0,
          r = We(
            function (e) {
              return e === t;
            },
            i,
            !0
          ),
          l = We(
            function (e) {
              return -1 < ut(t, e);
            },
            i,
            !0
          ),
          u = [
            function (e, i, n) {
              return (
                (e =
                  (!s && (n || i !== ve)) ||
                  ((t = i).nodeType ? r(e, i, n) : l(e, i, n))),
                (t = null),
                e
              );
            },
          ];
        a < o;
        a++
      )
        if ((i = ge.relative[e[a].type])) u = [We(qe(u), i)];
        else {
          if ((i = ge.filter[e[a].type].apply(null, e[a].matches))[Xe]) {
            for (n = ++a; n < o && !ge.relative[e[n].type]; n++);
            return Ye(
              1 < a && qe(u),
              1 < a &&
                je(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(dt, "$1"),
              i,
              a < n && Ue(e.slice(a, n)),
              n < o && Ue((e = e.slice(n))),
              n < o && je(e)
            );
          }
          u.push(i);
        }
      return qe(u);
    },
    Xe = "sizzle" + 1 * new Date(),
    Ke = Pe.document,
    Qe = 0,
    Je = 0,
    Ze = ze(),
    et = ze(),
    tt = ze(),
    it = function (e, t) {
      return e === t && (we = !0), 0;
    },
    nt = {}.hasOwnProperty,
    ot = [],
    st = ot.pop,
    at = ot.push,
    rt = ot.push,
    lt = ot.slice,
    ut = function (e, t) {
      for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
      return -1;
    },
    ht = /[\x20\t\r\n\f]+/g,
    dt = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
    ct = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    gt = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
    pt = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
    ft = RegExp(
      ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
    ),
    mt = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
    yt = {
      ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
      ATTR: RegExp(
        "^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"
      ),
      PSEUDO: RegExp(
        "^:((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
      ),
      CHILD: RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
        "i"
      ),
      bool: RegExp(
        "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
        "i"
      ),
      needsContext: RegExp(
        "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
        "i"
      ),
    },
    _t = /^(?:input|select|textarea|button)$/i,
    vt = /^h\d$/i,
    bt = /^[^{]+\{\s*\[native \w/,
    wt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    xt = /[+~]/,
    Tt = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
    St = function (e, t, i) {
      return (e = "0x" + t - 65536) != e || i
        ? t
        : 0 > e
        ? String.fromCharCode(e + 65536)
        : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320);
    },
    Et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    At = function (e, t) {
      return t
        ? "\0" === e
          ? "�"
          : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
        : "\\" + e;
    },
    kt = function () {
      xe();
    },
    Ct = We(
      function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e);
      },
      { dir: "parentNode", next: "legend" }
    );
  try {
    rt.apply((ot = lt.call(Ke.childNodes)), Ke.childNodes),
      ot[Ke.childNodes.length].nodeType;
  } catch (e) {
    rt = {
      apply: ot.length
        ? function (e, t) {
            at.apply(e, lt.call(t));
          }
        : function (e, t) {
            for (var i = e.length, n = 0; (e[i++] = t[n++]); );
            e.length = i - 1;
          },
    };
  }
  for (de in ((ce = Ie.support = {}),
  (fe = Ie.isXML =
    function (e) {
      return (
        !!(e = e && (e.ownerDocument || e).documentElement) &&
        "HTML" !== e.nodeName
      );
    }),
  (xe = Ie.setDocument =
    function (e) {
      var t, i;
      return (e = e ? e.ownerDocument || e : Ke) !== Te &&
        9 === e.nodeType &&
        e.documentElement
        ? ((Se = (Te = e).documentElement),
          (Ee = !fe(Te)),
          Ke !== Te &&
            (i = Te.defaultView) &&
            i.top !== i &&
            (i.addEventListener
              ? i.addEventListener("unload", kt, !1)
              : i.attachEvent && i.attachEvent("onunload", kt)),
          (ce.attributes = Le(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (ce.getElementsByTagName = Le(function (e) {
            return (
              e.appendChild(Te.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (ce.getElementsByClassName = bt.test(Te.getElementsByClassName)),
          (ce.getById = Le(function (e) {
            return (
              (Se.appendChild(e).id = Xe),
              !Te.getElementsByName || !Te.getElementsByName(Xe).length
            );
          })),
          ce.getById
            ? ((ge.filter.ID = function (e) {
                var t = e.replace(Tt, St);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (ge.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && Ee) {
                  var i = t.getElementById(e);
                  return i ? [i] : [];
                }
              }))
            : ((ge.filter.ID = function (e) {
                var t = e.replace(Tt, St);
                return function (e) {
                  return (
                    (e =
                      void 0 !== e.getAttributeNode &&
                      e.getAttributeNode("id")) && e.value === t
                  );
                };
              }),
              (ge.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && Ee) {
                  var i,
                    n,
                    o,
                    s = t.getElementById(e);
                  if (s) {
                    if ((i = s.getAttributeNode("id")) && i.value === e)
                      return [s];
                    for (o = t.getElementsByName(e), n = 0; (s = o[n++]); )
                      if ((i = s.getAttributeNode("id")) && i.value === e)
                        return [s];
                  }
                  return [];
                }
              })),
          (ge.find.TAG = ce.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : ce.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var i,
                  n = [],
                  o = 0,
                  s = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; (i = s[o++]); ) 1 === i.nodeType && n.push(i);
                  return n;
                }
                return s;
              }),
          (ge.find.CLASS =
            ce.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && Ee)
                return t.getElementsByClassName(e);
            }),
          (ke = []),
          (Ae = []),
          (ce.qsa = bt.test(Te.querySelectorAll)) &&
            (Le(function (e) {
              (Se.appendChild(e).innerHTML =
                "<a id='" +
                Xe +
                "'></a><select id='" +
                Xe +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  Ae.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  Ae.push(
                    "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                  ),
                e.querySelectorAll("[id~=" + Xe + "-]").length || Ae.push("~="),
                e.querySelectorAll(":checked").length || Ae.push(":checked"),
                e.querySelectorAll("a#" + Xe + "+*").length ||
                  Ae.push(".#.+[+~]");
            }),
            Le(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = Te.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  Ae.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  Ae.push(":enabled", ":disabled"),
                (Se.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  Ae.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                Ae.push(",.*:");
            })),
          (ce.matchesSelector = bt.test(
            (Ce =
              Se.matches ||
              Se.webkitMatchesSelector ||
              Se.mozMatchesSelector ||
              Se.oMatchesSelector ||
              Se.msMatchesSelector)
          )) &&
            Le(function (e) {
              (ce.disconnectedMatch = Ce.call(e, "*")),
                Ce.call(e, "[s!='']:x"),
                ke.push(
                  "!=",
                  ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                );
            }),
          (Ae = Ae.length && RegExp(Ae.join("|"))),
          (ke = ke.length && RegExp(ke.join("|"))),
          (t = bt.test(Se.compareDocumentPosition)),
          (Me =
            t || bt.test(Se.contains)
              ? function (e, t) {
                  var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                  return (
                    e === n ||
                    !(
                      !n ||
                      1 !== n.nodeType ||
                      !(i.contains
                        ? i.contains(n)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(n))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (it = t
            ? function (e, t) {
                if (e === t) return (we = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) === (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!ce.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === Te || (e.ownerDocument === Ke && Me(Ke, e))
                      ? -1
                      : t === Te || (t.ownerDocument === Ke && Me(Ke, t))
                      ? 1
                      : be
                      ? ut(be, e) - ut(be, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (we = !0), 0;
                var i,
                  n = 0;
                i = e.parentNode;
                var o = t.parentNode,
                  s = [e],
                  a = [t];
                if (!i || !o)
                  return e === Te
                    ? -1
                    : t === Te
                    ? 1
                    : i
                    ? -1
                    : o
                    ? 1
                    : be
                    ? ut(be, e) - ut(be, t)
                    : 0;
                if (i === o) return Re(e, t);
                for (i = e; (i = i.parentNode); ) s.unshift(i);
                for (i = t; (i = i.parentNode); ) a.unshift(i);
                for (; s[n] === a[n]; ) n++;
                return n
                  ? Re(s[n], a[n])
                  : s[n] === Ke
                  ? -1
                  : a[n] === Ke
                  ? 1
                  : 0;
              }),
          Te)
        : Te;
    }),
  (Ie.matches = function (e, t) {
    return Ie(e, null, null, t);
  }),
  (Ie.matchesSelector = function (e, t) {
    if (
      ((e.ownerDocument || e) !== Te && xe(e),
      (t = t.replace(pt, "='$1']")),
      ce.matchesSelector &&
        Ee &&
        !tt[t + " "] &&
        (!ke || !ke.test(t)) &&
        (!Ae || !Ae.test(t)))
    )
      try {
        var i = Ce.call(e, t);
        if (
          i ||
          ce.disconnectedMatch ||
          (e.document && 11 !== e.document.nodeType)
        )
          return i;
      } catch (e) {}
    return 0 < Ie(t, Te, null, [e]).length;
  }),
  (Ie.contains = function (e, t) {
    return (e.ownerDocument || e) !== Te && xe(e), Me(e, t);
  }),
  (Ie.attr = function (e, t) {
    var i;
    return (
      (e.ownerDocument || e) !== Te && xe(e),
      void 0 !==
      (i =
        (i = ge.attrHandle[t.toLowerCase()]) &&
        nt.call(ge.attrHandle, t.toLowerCase())
          ? i(e, t, !Ee)
          : void 0)
        ? i
        : ce.attributes || !Ee
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null
    );
  }),
  (Ie.escape = function (e) {
    return (e + "").replace(Et, At);
  }),
  (Ie.error = function (e) {
    throw Error("Syntax error, unrecognized expression: " + e);
  }),
  (Ie.uniqueSort = function (e) {
    var t,
      i = [],
      n = 0,
      o = 0;
    if (
      ((we = !ce.detectDuplicates),
      (be = !ce.sortStable && e.slice(0)),
      e.sort(it),
      we)
    ) {
      for (; (t = e[o++]); ) t === e[o] && (n = i.push(o));
      for (; n--; ) e.splice(i[n], 1);
    }
    return (be = null), e;
  }),
  (pe = Ie.getText =
    function (e) {
      var t,
        i = "",
        n = 0;
      if ((t = e.nodeType)) {
        if (1 === t || 9 === t || 11 === t) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) i += pe(e);
        } else if (3 === t || 4 === t) return e.nodeValue;
      } else for (; (t = e[n++]); ) i += pe(t);
      return i;
    }),
  ((ge = Ie.selectors =
    {
      cacheLength: 50,
      createPseudo: He,
      match: yt,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(Tt, St)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(Tt, St)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || Ie.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && Ie.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            i = !e[6] && e[2];
          return yt.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : i &&
                  ft.test(i) &&
                  (t = me(i, !0)) &&
                  (t = i.indexOf(")", i.length - t) - i.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(Tt, St).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = Ze[e + " "];
          return (
            t ||
            ((t = RegExp(
              "(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)"
            )) &&
              Ze(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (e, t, i) {
          return function (n) {
            return null == (n = Ie.attr(n, e))
              ? "!=" === t
              : !t ||
                  ((n += ""),
                  "=" === t
                    ? n === i
                    : "!=" === t
                    ? n !== i
                    : "^=" === t
                    ? i && 0 === n.indexOf(i)
                    : "*=" === t
                    ? i && -1 < n.indexOf(i)
                    : "$=" === t
                    ? i && n.slice(-i.length) === i
                    : "~=" === t
                    ? -1 < (" " + n.replace(ht, " ") + " ").indexOf(i)
                    : "|=" === t &&
                      (n === i || n.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (e, t, i, n, o) {
          var s = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            r = "of-type" === t;
          return 1 === n && 0 === o
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, i, l) {
                var u, h, d, c, g, p;
                i = s !== a ? "nextSibling" : "previousSibling";
                var f = t.parentNode,
                  m = r && t.nodeName.toLowerCase();
                l = !l && !r;
                var y = !1;
                if (f) {
                  if (s) {
                    for (; i; ) {
                      for (c = t; (c = c[i]); )
                        if (
                          r ? c.nodeName.toLowerCase() === m : 1 === c.nodeType
                        )
                          return !1;
                      p = i = "only" === e && !p && "nextSibling";
                    }
                    return !0;
                  }
                  if (((p = [a ? f.firstChild : f.lastChild]), a && l)) {
                    for (
                      y =
                        (g =
                          (u =
                            (h =
                              (d = (c = f)[Xe] || (c[Xe] = {}))[c.uniqueID] ||
                              (d[c.uniqueID] = {}))[e] || [])[0] === Qe &&
                          u[1]) && u[2],
                        c = g && f.childNodes[g];
                      (c = (++g && c && c[i]) || (y = g = 0) || p.pop());

                    )
                      if (1 === c.nodeType && ++y && c === t) {
                        h[e] = [Qe, g, y];
                        break;
                      }
                  } else if (
                    (l &&
                      (y = g =
                        (u =
                          (h =
                            (d = (c = t)[Xe] || (c[Xe] = {}))[c.uniqueID] ||
                            (d[c.uniqueID] = {}))[e] || [])[0] === Qe && u[1]),
                    !1 === y)
                  )
                    for (
                      ;
                      (c = (++g && c && c[i]) || (y = g = 0) || p.pop()) &&
                      (!(r
                        ? c.nodeName.toLowerCase() === m
                        : 1 === c.nodeType) ||
                        !++y ||
                        (l &&
                          ((h =
                            (d = c[Xe] || (c[Xe] = {}))[c.uniqueID] ||
                            (d[c.uniqueID] = {}))[e] = [Qe, y]),
                        c !== t));

                    );
                  return (y -= o) === n || (0 == y % n && 0 <= y / n);
                }
              };
        },
        PSEUDO: function (e, t) {
          var i,
            n =
              ge.pseudos[e] ||
              ge.setFilters[e.toLowerCase()] ||
              Ie.error("unsupported pseudo: " + e);
          return n[Xe]
            ? n(t)
            : 1 < n.length
            ? ((i = [e, e, "", t]),
              ge.setFilters.hasOwnProperty(e.toLowerCase())
                ? He(function (e, i) {
                    for (var o, s = n(e, t), a = s.length; a--; )
                      e[(o = ut(e, s[a]))] = !(i[o] = s[a]);
                  })
                : function (e) {
                    return n(e, 0, i);
                  })
            : n;
        },
      },
      pseudos: {
        not: He(function (e) {
          var t = [],
            i = [],
            n = ye(e.replace(dt, "$1"));
          return n[Xe]
            ? He(function (e, t, i, o) {
                var s;
                for (i = n(e, null, o, []), o = e.length; o--; )
                  (s = i[o]) && (e[o] = !(t[o] = s));
              })
            : function (e, o, s) {
                return (t[0] = e), n(t, null, s, i), (t[0] = null), !i.pop();
              };
        }),
        has: He(function (e) {
          return function (t) {
            return 0 < Ie(e, t).length;
          };
        }),
        contains: He(function (e) {
          return (
            (e = e.replace(Tt, St)),
            function (t) {
              return -1 < (t.textContent || t.innerText || pe(t)).indexOf(e);
            }
          );
        }),
        lang: He(function (e) {
          return (
            mt.test(e || "") || Ie.error("unsupported lang: " + e),
            (e = e.replace(Tt, St).toLowerCase()),
            function (t) {
              var i;
              do {
                if (
                  (i = Ee
                    ? t.lang
                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                )
                  return (
                    (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                  );
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = Pe.location && Pe.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === Se;
        },
        focus: function (e) {
          return (
            e === Te.activeElement &&
            (!Te.hasFocus || Te.hasFocus()) &&
            !(!e.type && !e.href && !~e.tabIndex)
          );
        },
        enabled: Ne(!1),
        disabled: Ne(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (6 > e.nodeType) return !1;
          return !0;
        },
        parent: function (e) {
          return !ge.pseudos.empty(e);
        },
        header: function (e) {
          return vt.test(e.nodeName);
        },
        input: function (e) {
          return _t.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: Fe(function () {
          return [0];
        }),
        last: Fe(function (e, t) {
          return [t - 1];
        }),
        eq: Fe(function (e, t, i) {
          return [0 > i ? i + t : i];
        }),
        even: Fe(function (e, t) {
          for (var i = 0; i < t; i += 2) e.push(i);
          return e;
        }),
        odd: Fe(function (e, t) {
          for (var i = 1; i < t; i += 2) e.push(i);
          return e;
        }),
        lt: Fe(function (e, t, i) {
          for (t = 0 > i ? i + t : i; 0 <= --t; ) e.push(t);
          return e;
        }),
        gt: Fe(function (e, t, i) {
          for (i = 0 > i ? i + t : i; ++i < t; ) e.push(i);
          return e;
        }),
      },
    }).pseudos.nth = ge.pseudos.eq),
  { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
    ge.pseudos[de] = $e(de);
  for (de in { submit: !0, reset: !0 }) ge.pseudos[de] = De(de);
  (Ge.prototype = ge.filters = ge.pseudos),
    (ge.setFilters = new Ge()),
    (me = Ie.tokenize =
      function (e, t) {
        var i, n, o, s, a, r, l;
        if ((a = et[e + " "])) return t ? 0 : a.slice(0);
        for (a = e, r = [], l = ge.preFilter; a; ) {
          for (s in ((i && !(n = ct.exec(a))) ||
            (n && (a = a.slice(n[0].length) || a), r.push((o = []))),
          (i = !1),
          (n = gt.exec(a)) &&
            ((i = n.shift()),
            o.push({ value: i, type: n[0].replace(dt, " ") }),
            (a = a.slice(i.length))),
          ge.filter))
            !(n = yt[s].exec(a)) ||
              (l[s] && !(n = l[s](n))) ||
              ((i = n.shift()),
              o.push({ value: i, type: s, matches: n }),
              (a = a.slice(i.length)));
          if (!i) break;
        }
        return t ? a.length : a ? Ie.error(e) : et(e, r).slice(0);
      }),
    (ye = Ie.compile =
      function (e, t) {
        var i,
          n = [],
          o = [];
        if (!(r = tt[e + " "])) {
          for (t || (t = me(e)), i = t.length; i--; )
            (r = Ue(t[i]))[Xe] ? n.push(r) : o.push(r);
          i = tt;
          var s = 0 < n.length,
            a = 0 < o.length,
            r = function (e, t, i, r, l) {
              var u,
                h,
                d,
                c = 0,
                g = "0",
                p = e && [],
                f = [],
                m = ve,
                y = e || (a && ge.find.TAG("*", l)),
                _ = (Qe += null == m ? 1 : Math.random() || 0.1),
                v = y.length;
              for (
                l && (ve = t === Te || t || l);
                g !== v && null != (u = y[g]);
                g++
              ) {
                if (a && u) {
                  for (
                    h = 0, t || u.ownerDocument === Te || (xe(u), (i = !Ee));
                    (d = o[h++]);

                  )
                    if (d(u, t || Te, i)) {
                      r.push(u);
                      break;
                    }
                  l && (Qe = _);
                }
                s && ((u = !d && u) && c--, e && p.push(u));
              }
              if (((c += g), s && g !== c)) {
                for (h = 0; (d = n[h++]); ) d(p, f, t, i);
                if (e) {
                  if (0 < c) for (; g--; ) p[g] || f[g] || (f[g] = st.call(r));
                  f = Ve(f);
                }
                rt.apply(r, f),
                  l &&
                    !e &&
                    0 < f.length &&
                    1 < c + n.length &&
                    Ie.uniqueSort(r);
              }
              return l && ((Qe = _), (ve = m)), p;
            };
          (r = i(e, (r = s ? He(r) : r))).selector = e;
        }
        return r;
      }),
    (_e = Ie.select =
      function (e, t, i, n) {
        var o,
          s,
          a,
          r,
          l,
          u = "function" == typeof e && e,
          h = !n && me((e = u.selector || e));
        if (((i = i || []), 1 === h.length)) {
          if (
            2 < (s = h[0] = h[0].slice(0)).length &&
            "ID" === (a = s[0]).type &&
            9 === t.nodeType &&
            Ee &&
            ge.relative[s[1].type]
          ) {
            if (!(t = (ge.find.ID(a.matches[0].replace(Tt, St), t) || [])[0]))
              return i;
            u && (t = t.parentNode), (e = e.slice(s.shift().value.length));
          }
          for (
            o = yt.needsContext.test(e) ? 0 : s.length;
            o-- && ((a = s[o]), !ge.relative[(r = a.type)]);

          )
            if (
              (l = ge.find[r]) &&
              (n = l(
                a.matches[0].replace(Tt, St),
                (xt.test(s[0].type) && Be(t.parentNode)) || t
              ))
            ) {
              if ((s.splice(o, 1), !(e = n.length && je(s))))
                return rt.apply(i, n), i;
              break;
            }
        }
        return (
          (u || ye(e, h))(
            n,
            t,
            !Ee,
            i,
            !t || (xt.test(e) && Be(t.parentNode)) || t
          ),
          i
        );
      }),
    (ce.sortStable = Xe.split("").sort(it).join("") === Xe),
    (ce.detectDuplicates = !!we),
    xe(),
    (ce.sortDetached = Le(function (e) {
      return 1 & e.compareDocumentPosition(Te.createElement("fieldset"));
    })),
    Le(function (e) {
      return (
        (e.innerHTML = "<a href='#'></a>"),
        "#" === e.firstChild.getAttribute("href")
      );
    }) ||
      Oe("type|href|height|width", function (e, t, i) {
        if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }),
    (ce.attributes &&
      Le(function (e) {
        return (
          (e.innerHTML = "<input/>"),
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
        );
      })) ||
      Oe("value", function (e, t, i) {
        if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }),
    Le(function (e) {
      return null == e.getAttribute("disabled");
    }) ||
      Oe(
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        function (e, t, i) {
          var n;
          if (!i)
            return !0 === e[t]
              ? t.toLowerCase()
              : (n = e.getAttributeNode(t)) && n.specified
              ? n.value
              : null;
        }
      ),
    (he = Ie),
    (se.find = he),
    (se.expr = he.selectors),
    (se.expr[":"] = se.expr.pseudos),
    (se.uniqueSort = se.unique = he.uniqueSort),
    (se.text = he.getText),
    (se.isXMLDoc = he.isXML),
    (se.contains = he.contains),
    (se.escapeSelector = he.escape);
  var Mt = function (e, t, i) {
      for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && se(e).is(i)) break;
          n.push(e);
        }
      return n;
    },
    Pt = function (e, t) {
      for (var i = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && i.push(e);
      return i;
    },
    It = se.expr.match.needsContext,
    zt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Ht = /^.[^:#\[\.,]*$/;
  (se.filter = function (e, t, i) {
    var n = t[0];
    return (
      i && (e = ":not(" + e + ")"),
      1 === t.length && 1 === n.nodeType
        ? se.find.matchesSelector(n, e)
          ? [n]
          : []
        : se.find.matches(
            e,
            se.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    se.fn.extend({
      find: function (e) {
        var t,
          i,
          n = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            se(e).filter(function () {
              for (t = 0; t < n; t++) if (se.contains(o[t], this)) return !0;
            })
          );
        for (i = this.pushStack([]), t = 0; t < n; t++) se.find(e, o[t], i);
        return 1 < n ? se.uniqueSort(i) : i;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(
          this,
          "string" == typeof e && It.test(e) ? se(e) : e || [],
          !1
        ).length;
      },
    });
  var Lt,
    Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((se.fn.init = function (e, t, i) {
    var n, o;
    if (!e) return this;
    if (((i = i || Lt), "string" == typeof e)) {
      if (
        !(n =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : Ot.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (
          ((t = t instanceof se ? t[0] : t),
          se.merge(
            this,
            se.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)
          ),
          zt.test(n[1]) && se.isPlainObject(t))
        )
          for (n in t)
            se.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      return (
        (o = Y.getElementById(n[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : se.isFunction(e)
      ? void 0 !== i.ready
        ? i.ready(e)
        : e(se)
      : se.makeArray(e, this);
  }).prototype = se.fn),
    (Lt = se(Y));
  var Rt = /^(?:parents|prev(?:Until|All))/,
    $t = { children: !0, contents: !0, next: !0, prev: !0 };
  se.fn.extend({
    has: function (e) {
      var t = se(e, this),
        i = t.length;
      return this.filter(function () {
        for (var e = 0; e < i; e++) if (se.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var i,
        n = 0,
        o = this.length,
        s = [],
        a = "string" != typeof e && se(e);
      if (!It.test(e))
        for (; n < o; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (
              11 > i.nodeType &&
              (a
                ? -1 < a.index(i)
                : 1 === i.nodeType && se.find.matchesSelector(i, e))
            ) {
              s.push(i);
              break;
            }
      return this.pushStack(1 < s.length ? se.uniqueSort(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? J.call(se(e), this[0])
          : J.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(se.uniqueSort(se.merge(this.get(), se(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    se.each(
      {
        parent: function (e) {
          return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return Mt(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return Mt(e, "parentNode", i);
        },
        next: function (e) {
          return a(e, "nextSibling");
        },
        prev: function (e) {
          return a(e, "previousSibling");
        },
        nextAll: function (e) {
          return Mt(e, "nextSibling");
        },
        prevAll: function (e) {
          return Mt(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return Mt(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return Mt(e, "previousSibling", i);
        },
        siblings: function (e) {
          return Pt((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Pt(e.firstChild);
        },
        contents: function (e) {
          return o(e, "iframe")
            ? e.contentDocument
            : (o(e, "template") && (e = e.content || e),
              se.merge([], e.childNodes));
        },
      },
      function (e, t) {
        se.fn[e] = function (i, n) {
          var o = se.map(this, t, i);
          return (
            "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (o = se.filter(n, o)),
            1 < this.length &&
              ($t[e] || se.uniqueSort(o), Rt.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var Dt = /[^\x20\t\r\n\f]+/g;
  (se.Callbacks = function (e) {
    var t;
    if ("string" == typeof e) {
      var i = {};
      se.each(e.match(Dt) || [], function (e, t) {
        i[t] = !0;
      }),
        (t = i);
    } else t = se.extend({}, e);
    e = t;
    var n,
      o,
      s,
      a,
      r = [],
      l = [],
      u = -1,
      h = function () {
        for (a = a || e.once, s = n = !0; l.length; u = -1)
          for (o = l.shift(); ++u < r.length; )
            !1 === r[u].apply(o[0], o[1]) &&
              e.stopOnFalse &&
              ((u = r.length), (o = !1));
        e.memory || (o = !1), (n = !1), a && (r = o ? [] : "");
      },
      d = {
        add: function () {
          return (
            r &&
              (o && !n && ((u = r.length - 1), l.push(o)),
              (function t(i) {
                se.each(i, function (i, n) {
                  se.isFunction(n)
                    ? (e.unique && d.has(n)) || r.push(n)
                    : n && n.length && "string" !== se.type(n) && t(n);
                });
              })(arguments),
              o && !n && h()),
            this
          );
        },
        remove: function () {
          return (
            se.each(arguments, function (e, t) {
              for (var i; -1 < (i = se.inArray(t, r, i)); )
                r.splice(i, 1), i <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < se.inArray(e, r) : 0 < r.length;
        },
        empty: function () {
          return r && (r = []), this;
        },
        disable: function () {
          return (a = l = []), (r = o = ""), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (a = l = []), o || n || (r = o = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              n || h()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!s;
        },
      };
    return d;
  }),
    se.extend({
      Deferred: function (t) {
        var i = [
            [
              "notify",
              "progress",
              se.Callbacks("memory"),
              se.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              se.Callbacks("once memory"),
              se.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              se.Callbacks("once memory"),
              se.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          o = {
            state: function () {
              return n;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return se
                .Deferred(function (t) {
                  se.each(i, function (i, n) {
                    var o = se.isFunction(e[n[4]]) && e[n[4]];
                    s[n[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && se.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[n[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, n, o) {
              function s(t, i, n, o) {
                return function () {
                  var u = this,
                    h = arguments,
                    d = function () {
                      var e, d;
                      if (!(t < a)) {
                        if ((e = n.apply(u, h)) === i.promise())
                          throw new TypeError("Thenable self-resolution");
                        (d =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          se.isFunction(d)
                            ? o
                              ? d.call(e, s(a, i, r, o), s(a, i, l, o))
                              : (a++,
                                d.call(
                                  e,
                                  s(a, i, r, o),
                                  s(a, i, l, o),
                                  s(a, i, r, i.notifyWith)
                                ))
                            : (n !== r && ((u = void 0), (h = [e])),
                              (o || i.resolveWith)(u, h));
                      }
                    },
                    c = o
                      ? d
                      : function () {
                          try {
                            d();
                          } catch (e) {
                            se.Deferred.exceptionHook &&
                              se.Deferred.exceptionHook(e, c.stackTrace),
                              t + 1 >= a &&
                                (n !== l && ((u = void 0), (h = [e])),
                                i.rejectWith(u, h));
                          }
                        };
                  t
                    ? c()
                    : (se.Deferred.getStackHook &&
                        (c.stackTrace = se.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              var a = 0;
              return se
                .Deferred(function (e) {
                  i[0][3].add(s(0, e, se.isFunction(o) ? o : r, e.notifyWith)),
                    i[1][3].add(s(0, e, se.isFunction(t) ? t : r)),
                    i[2][3].add(s(0, e, se.isFunction(n) ? n : l));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? se.extend(e, o) : o;
            },
          },
          s = {};
        return (
          se.each(i, function (e, t) {
            var a = t[2],
              r = t[5];
            (o[t[1]] = a.add),
              r &&
                a.add(
                  function () {
                    n = r;
                  },
                  i[3 - e][2].disable,
                  i[0][2].lock
                ),
              a.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = a.fireWith);
          }),
          o.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (e) {
        var t = arguments.length,
          i = t,
          n = Array(i),
          o = X.call(arguments),
          s = se.Deferred(),
          a = function (e) {
            return function (i) {
              (n[e] = this),
                (o[e] = 1 < arguments.length ? X.call(arguments) : i),
                --t || s.resolveWith(n, o);
            };
          };
        if (
          1 >= t &&
          (u(e, s.done(a(i)).resolve, s.reject, !t),
          "pending" === s.state() || se.isFunction(o[i] && o[i].then))
        )
          return s.then();
        for (; i--; ) u(o[i], a(i), s.reject);
        return s.promise();
      },
    });
  var Nt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (se.Deferred.exceptionHook = function (t, i) {
    e.console &&
      e.console.warn &&
      t &&
      Nt.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  }),
    (se.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Ft = se.Deferred();
  (se.fn.ready = function (e) {
    return (
      Ft.then(e).catch(function (e) {
        se.readyException(e);
      }),
      this
    );
  }),
    se.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --se.readyWait : se.isReady) ||
          ((se.isReady = !0),
          (!0 !== e && 0 < --se.readyWait) || Ft.resolveWith(Y, [se]));
      },
    }),
    (se.ready.then = Ft.then),
    "complete" === Y.readyState ||
    ("loading" !== Y.readyState && !Y.documentElement.doScroll)
      ? e.setTimeout(se.ready)
      : (Y.addEventListener("DOMContentLoaded", h),
        e.addEventListener("load", h));
  var Bt = function (e, t, i, n, o, s, a) {
      var r = 0,
        l = e.length,
        u = null == i;
      if ("object" === se.type(i))
        for (r in ((o = !0), i)) Bt(e, t, r, i[r], !0, s, a);
      else if (
        void 0 !== n &&
        ((o = !0),
        se.isFunction(n) || (a = !0),
        u &&
          (a
            ? (t.call(e, n), (t = null))
            : ((u = t),
              (t = function (e, t, i) {
                return u.call(se(e), i);
              }))),
        t)
      )
        for (; r < l; r++) t(e[r], i, a ? n : n.call(e[r], r, t(e[r], i)));
      return o ? e : u ? t.call(e) : l ? t(e[0], i) : s;
    },
    Gt = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (d.uid = 1),
    (d.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Gt(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, i) {
        var n;
        if (((e = this.cache(e)), "string" == typeof t)) e[se.camelCase(t)] = i;
        else for (n in t) e[se.camelCase(n)] = t[n];
        return e;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][se.camelCase(t)];
      },
      access: function (e, t, i) {
        return void 0 === t || (t && "string" == typeof t && void 0 === i)
          ? this.get(e, t)
          : (this.set(e, t, i), void 0 !== i ? i : t);
      },
      remove: function (e, t) {
        var i,
          n = e[this.expando];
        if (void 0 !== n) {
          if (void 0 !== t)
            for (
              i = (t = Array.isArray(t)
                ? t.map(se.camelCase)
                : ((t = se.camelCase(t)) in n)
                ? [t]
                : t.match(Dt) || []).length;
              i--;

            )
              delete n[t[i]];
          (void 0 === t || se.isEmptyObject(n)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        return void 0 !== (e = e[this.expando]) && !se.isEmptyObject(e);
      },
    });
  var jt = new d(),
    Wt = new d(),
    qt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Vt = /[A-Z]/g;
  se.extend({
    hasData: function (e) {
      return Wt.hasData(e) || jt.hasData(e);
    },
    data: function (e, t, i) {
      return Wt.access(e, t, i);
    },
    removeData: function (e, t) {
      Wt.remove(e, t);
    },
    _data: function (e, t, i) {
      return jt.access(e, t, i);
    },
    _removeData: function (e, t) {
      jt.remove(e, t);
    },
  }),
    se.fn.extend({
      data: function (e, t) {
        var i,
          n,
          o,
          s = this[0],
          a = s && s.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = Wt.get(s)), 1 === s.nodeType && !jt.get(s, "hasDataAttrs"))
          ) {
            for (i = a.length; i--; )
              a[i] &&
                0 === (n = a[i].name).indexOf("data-") &&
                ((n = se.camelCase(n.slice(5))), c(s, n, o[n]));
            jt.set(s, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              Wt.set(this, e);
            })
          : Bt(
              this,
              function (t) {
                var i;
                if (s && void 0 === t) {
                  if (void 0 !== (i = Wt.get(s, e)) || void 0 !== (i = c(s, e)))
                    return i;
                } else
                  this.each(function () {
                    Wt.set(this, e, t);
                  });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Wt.remove(this, e);
        });
      },
    }),
    se.extend({
      queue: function (e, t, i) {
        var n;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (n = jt.get(e, t)),
            i &&
              (!n || Array.isArray(i)
                ? (n = jt.access(e, t, se.makeArray(i)))
                : n.push(i)),
            n || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var i = se.queue(e, t),
          n = i.length,
          o = i.shift(),
          s = se._queueHooks(e, t);
        "inprogress" === o && ((o = i.shift()), n--),
          o &&
            ("fx" === t && i.unshift("inprogress"),
            delete s.stop,
            o.call(
              e,
              function () {
                se.dequeue(e, t);
              },
              s
            )),
          !n && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var i = t + "queueHooks";
        return (
          jt.get(e, i) ||
          jt.access(e, i, {
            empty: se.Callbacks("once memory").add(function () {
              jt.remove(e, [t + "queue", i]);
            }),
          })
        );
      },
    }),
    se.fn.extend({
      queue: function (e, t) {
        var i = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), i--),
          arguments.length < i
            ? se.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var i = se.queue(this, e, t);
                se._queueHooks(this, e),
                  "fx" === e && "inprogress" !== i[0] && se.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          se.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var i,
          n = 1,
          o = se.Deferred(),
          s = this,
          a = this.length,
          r = function () {
            --n || o.resolveWith(s, [s]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (i = jt.get(s[a], e + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(r));
        return r(), o.promise(t);
      },
    });
  var Yt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ut = RegExp("^(?:([+-])=|)(" + Yt + ")([a-z%]*)$", "i"),
    Xt = ["Top", "Right", "Bottom", "Left"],
    Kt = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          se.contains(e.ownerDocument, e) &&
          "none" === se.css(e, "display"))
      );
    },
    Qt = function (e, t, i, n) {
      var o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = i.apply(e, n || [])), t)) e.style[o] = s[o];
      return i;
    },
    Jt = {};
  se.fn.extend({
    show: function () {},
    hide: function () {
      return p(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Kt(this) ? se(this).show() : se(this).hide();
          });
    },
  });
  var Zt = /^(?:checkbox|radio)$/i,
    ei = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ti = /^$|\/(?:java|ecma)script/i,
    ii = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ii.optgroup = ii.option),
    (ii.tbody = ii.tfoot = ii.colgroup = ii.caption = ii.thead),
    (ii.th = ii.td);
  var ni = /<|&#?\w+;/,
    oi = Y.createDocumentFragment().appendChild(Y.createElement("div")),
    si = Y.createElement("input");
  si.setAttribute("type", "radio"),
    si.setAttribute("checked", "checked"),
    si.setAttribute("name", "t"),
    oi.appendChild(si),
    (oe.checkClone = oi.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (oi.innerHTML = "<textarea>x</textarea>"),
    (oe.noCloneChecked = !!oi.cloneNode(!0).lastChild.defaultValue);
  var ai = Y.documentElement,
    ri = /^key/,
    li = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ui = /^([^.]*)(?:\.(.+)|)/;
  (se.event = {
    global: {},
    add: function (e, t, i, n, o) {
      var s, a, r, l, u, h, d, c, g, p;
      if ((u = jt.get(e)))
        for (
          i.handler && ((i = (s = i).handler), (o = s.selector)),
            o && se.find.matchesSelector(ai, o),
            i.guid || (i.guid = se.guid++),
            (l = u.events) || (l = u.events = {}),
            (a = u.handle) ||
              (a = u.handle =
                function (t) {
                  return void 0 !== se && se.event.triggered !== t.type
                    ? se.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            u = (t = (t || "").match(Dt) || [""]).length;
          u--;

        )
          (g = p = (r = ui.exec(t[u]) || [])[1]),
            (r = (r[2] || "").split(".").sort()),
            g &&
              ((d = se.event.special[g] || {}),
              (g = (o ? d.delegateType : d.bindType) || g),
              (d = se.event.special[g] || {}),
              (h = se.extend(
                {
                  type: g,
                  origType: p,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: o,
                  needsContext: o && se.expr.match.needsContext.test(o),
                  namespace: r.join("."),
                },
                s
              )),
              (c = l[g]) ||
                (((c = l[g] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, n, r, a)) ||
                  (e.addEventListener && e.addEventListener(g, a))),
              d.add &&
                (d.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)),
              o ? c.splice(c.delegateCount++, 0, h) : c.push(h),
              (se.event.global[g] = !0));
    },
    remove: function (e, t, i, n, o) {
      var s,
        a,
        r,
        l,
        u,
        h,
        d,
        c,
        g,
        p,
        f,
        m = jt.hasData(e) && jt.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(Dt) || [""]).length; u--; )
          if (
            ((g = f = (r = ui.exec(t[u]) || [])[1]),
            (p = (r[2] || "").split(".").sort()),
            g)
          ) {
            for (
              d = se.event.special[g] || {},
                c = l[(g = (n ? d.delegateType : d.bindType) || g)] || [],
                r =
                  r[2] &&
                  RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = s = c.length;
              s--;

            )
              (h = c[s]),
                (!o && f !== h.origType) ||
                  (i && i.guid !== h.guid) ||
                  (r && !r.test(h.namespace)) ||
                  (n && n !== h.selector && ("**" !== n || !h.selector)) ||
                  (c.splice(s, 1),
                  h.selector && c.delegateCount--,
                  d.remove && d.remove.call(e, h));
            a &&
              !c.length &&
              ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                se.removeEvent(e, g, m.handle),
              delete l[g]);
          } else for (g in l) se.event.remove(e, g + t[u], i, n, !0);
        se.isEmptyObject(l) && jt.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        i,
        n,
        o,
        s,
        a,
        r = se.event.fix(e),
        l = Array(arguments.length);
      i = (jt.get(this, "events") || {})[r.type] || [];
      var u = se.event.special[r.type] || {};
      for (l[0] = r, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((r.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, r))
      ) {
        for (
          a = se.event.handlers.call(this, r, i), t = 0;
          (o = a[t++]) && !r.isPropagationStopped();

        )
          for (
            r.currentTarget = o.elem, i = 0;
            (s = o.handlers[i++]) && !r.isImmediatePropagationStopped();

          )
            (r.rnamespace && !r.rnamespace.test(s.namespace)) ||
              ((r.handleObj = s),
              (r.data = s.data),
              void 0 !==
                (n = (
                  (se.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, l)) &&
                !1 === (r.result = n) &&
                (r.preventDefault(), r.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, r), r.result;
      }
    },
    handlers: function (e, t) {
      var i,
        n,
        o,
        s,
        a,
        r = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (s = [], a = {}, i = 0; i < l; i++)
              void 0 === a[(o = (n = t[i]).selector + " ")] &&
                (a[o] = n.needsContext
                  ? -1 < se(o, this).index(u)
                  : se.find(o, this, null, [u]).length),
                a[o] && s.push(n);
            s.length && r.push({ elem: u, handlers: s });
          }
      return (
        (u = this), l < t.length && r.push({ elem: u, handlers: t.slice(l) }), r
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(se.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: se.isFunction(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[se.expando] ? e : new se.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== b() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === b() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && o(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return o(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (se.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i);
    }),
    (se.Event = function (e, t) {
      return this instanceof se.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? _
                  : v),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && se.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || se.now()),
          void (this[se.expando] = !0))
        : new se.Event(e, t);
    }),
    (se.Event.prototype = {
      constructor: se.Event,
      isDefaultPrevented: v,
      isPropagationStopped: v,
      isImmediatePropagationStopped: v,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = _),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = _),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = _),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    se.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && ri.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && li.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      se.event.addProp
    ),
    se.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        se.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var i,
              n = e.relatedTarget,
              o = e.handleObj;
            return (
              (n && (n === this || se.contains(this, n))) ||
                ((e.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (e.type = t)),
              i
            );
          },
        };
      }
    ),
    se.fn.extend({
      on: function (e, t, i, n) {
        return w(this, e, t, i, n);
      },
      one: function (e, t, i, n) {
        return w(this, e, t, i, n, 1);
      },
      off: function (e, t, i) {
        var n, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (n = e.handleObj),
            se(e.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
          !1 === i && (i = v),
          this.each(function () {
            se.event.remove(this, e, i, t);
          })
        );
      },
    });
  var hi =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    di = /<script|<style|<link/i,
    ci = /checked\s*(?:[^=]|=\s*.checked.)/i,
    gi = /^true\/(.*)/,
    pi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  se.extend({
    htmlPrefilter: function (e) {
      return e.replace(hi, "<$1></$2>");
    },
    clone: function (e, t, i) {
      var n,
        o,
        s,
        a,
        r = e.cloneNode(!0),
        l = se.contains(e.ownerDocument, e);
      if (
        !oe.noCloneChecked &&
        !((1 !== e.nodeType && 11 !== e.nodeType) || se.isXMLDoc(e))
      )
        for (a = f(r), n = 0, o = (s = f(e)).length; n < o; n++) {
          var u = s[n],
            h = a[n],
            d = h.nodeName.toLowerCase();
          "input" === d && Zt.test(u.type)
            ? (h.checked = u.checked)
            : ("input" !== d && "textarea" !== d) ||
              (h.defaultValue = u.defaultValue);
        }
      if (t)
        if (i)
          for (s = s || f(e), a = a || f(r), n = 0, o = s.length; n < o; n++)
            E(s[n], a[n]);
        else E(e, r);
      return 0 < (a = f(r, "script")).length && m(a, !l && f(e, "script")), r;
    },
    cleanData: function (e) {
      for (var t, i, n, o = se.event.special, s = 0; void 0 !== (i = e[s]); s++)
        if (Gt(i)) {
          if ((t = i[jt.expando])) {
            if (t.events)
              for (n in t.events)
                o[n] ? se.event.remove(i, n) : se.removeEvent(i, n, t.handle);
            i[jt.expando] = void 0;
          }
          i[Wt.expando] && (i[Wt.expando] = void 0);
        }
    },
  }),
    se.fn.extend({
      detach: function (e) {
        return k(this, e, !0);
      },
      remove: function (e) {
        return k(this, e);
      },
      text: function (e) {
        return Bt(
          this,
          function (e) {
            return void 0 === e
              ? se.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return A(this, arguments, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            x(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return A(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = x(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return A(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return A(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (se.cleanData(f(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return se.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Bt(
          this,
          function (e) {
            var t = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !di.test(e) &&
              !ii[(ei.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = se.htmlPrefilter(e);
              try {
                for (; i < n; i++)
                  1 === (t = this[i] || {}).nodeType &&
                    (se.cleanData(f(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return A(
          this,
          arguments,
          function (t) {
            var i = this.parentNode;
            0 > se.inArray(this, e) &&
              (se.cleanData(f(this)), i && i.replaceChild(t, this));
          },
          e
        );
      },
    }),
    se.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        se.fn[e] = function (e) {
          for (var i = [], n = se(e), o = n.length - 1, s = 0; s <= o; s++)
            (e = s === o ? this : this.clone(!0)),
              se(n[s])[t](e),
              Q.apply(i, e.get());
          return this.pushStack(i);
        };
      }
    );
  var fi,
    mi,
    yi,
    _i,
    vi = /^margin/,
    bi = RegExp("^(" + Yt + ")(?!px)[a-z%]+$", "i"),
    wi = function (t) {
      var i = t.ownerDocument.defaultView;
      return (i && i.opener) || (i = e), i.getComputedStyle(t);
    },
    xi = function () {
      if (Si) {
        (Si.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (Si.innerHTML = ""),
          ai.appendChild(Ti);
        var t = e.getComputedStyle(Si);
        (fi = "1%" !== t.top),
          (_i = "2px" === t.marginLeft),
          (mi = "4px" === t.width),
          (Si.style.marginRight = "50%"),
          (yi = "4px" === t.marginRight),
          ai.removeChild(Ti),
          (Si = null);
      }
    },
    Ti = Y.createElement("div"),
    Si = Y.createElement("div");
  Si.style &&
    ((Si.style.backgroundClip = "content-box"),
    (Si.cloneNode(!0).style.backgroundClip = ""),
    (oe.clearCloneStyle = "content-box" === Si.style.backgroundClip),
    (Ti.style.cssText =
      "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
    Ti.appendChild(Si),
    se.extend(oe, {
      pixelPosition: function () {
        return xi(), fi;
      },
      boxSizingReliable: function () {
        return xi(), mi;
      },
      pixelMarginRight: function () {
        return xi(), yi;
      },
      reliableMarginLeft: function () {
        return xi(), _i;
      },
    }));
  var Ei = /^(none|table(?!-c[ea]).+)/,
    Ai = /^--/,
    ki = { position: "absolute", visibility: "hidden", display: "block" },
    Ci = { letterSpacing: "0", fontWeight: "400" },
    Mi = ["Webkit", "Moz", "ms"],
    Pi = Y.createElement("div").style;
  se.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var i = C(e, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          s,
          a,
          r = se.camelCase(t),
          l = Ai.test(t),
          u = e.style;
        return (
          l || (t = P(r)),
          (a = se.cssHooks[t] || se.cssHooks[r]),
          void 0 === i
            ? a && "get" in a && void 0 !== (o = a.get(e, !1, n))
              ? o
              : u[t]
            : ("string" == (s = typeof i) &&
                (o = Ut.exec(i)) &&
                o[1] &&
                ((i = g(e, t, o)), (s = "number")),
              void (
                null != i &&
                i == i &&
                ("number" === s &&
                  (i += (o && o[3]) || (se.cssNumber[r] ? "" : "px")),
                oe.clearCloneStyle ||
                  "" !== i ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (i = a.set(e, i, n))) ||
                  (l ? u.setProperty(t, i) : (u[t] = i)))
              ))
        );
      }
    },
    css: function (e, t, i, n) {
      var o,
        s,
        a,
        r = se.camelCase(t);
      return (
        Ai.test(t) || (t = P(r)),
        (a = se.cssHooks[t] || se.cssHooks[r]) &&
          "get" in a &&
          (o = a.get(e, !0, i)),
        void 0 === o && (o = C(e, t, n)),
        "normal" === o && t in Ci && (o = Ci[t]),
        "" === i || i
          ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o)
          : o
      );
    },
  }),
    se.each(["height", "width"], function (e, t) {
      se.cssHooks[t] = {
        get: function (e, i, n) {
          if (i)
            return !Ei.test(se.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? H(e, t, n)
              : Qt(e, ki, function () {
                  return H(e, t, n);
                });
        },
        set: function (e, i, n) {
          var o,
            s = n && wi(e);
          return (
            (n =
              n &&
              z(e, t, n, "border-box" === se.css(e, "boxSizing", !1, s), s)) &&
              (o = Ut.exec(i)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = i), (i = se.css(e, t))),
            I(e, i, n)
          );
        },
      };
    }),
    (se.cssHooks.marginLeft = M(oe.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(C(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Qt(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    se.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (se.cssHooks[e + t] = {
        expand: function (i) {
          var n = 0,
            o = {};
          for (i = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
            o[e + Xt[n] + t] = i[n] || i[n - 2] || i[0];
          return o;
        },
      }),
        vi.test(e) || (se.cssHooks[e + t].set = I);
    }),
    se.fn.extend({
      css: function (e, t) {
        return Bt(
          this,
          function (e, t, i) {
            var n,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = wi(e), n = t.length; s < n; s++)
                o[t[s]] = se.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== i ? se.style(e, t, i) : se.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (se.Tween = L),
    (L.prototype = {
      constructor: L,
      init: function (e, t, i, n, o, s) {
        (this.elem = e),
          (this.prop = i),
          (this.easing = o || se.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = s || (se.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var e = L.propHooks[this.prop];
        return e && e.get ? e.get(this) : L.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          i = L.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                se.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : L.propHooks._default.set(this),
          this
        );
      },
    }),
    (L.prototype.init.prototype = L.prototype),
    (L.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = se.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          se.fx.step[e.prop]
            ? se.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[se.cssProps[e.prop]] &&
                !se.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : se.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (L.propHooks.scrollTop = L.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (se.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (se.fx = L.prototype.init),
    (se.fx.step = {});
  var Ii,
    zi,
    Hi = /^(?:toggle|show|hide)$/,
    Li = /queueHooks$/;
  (se.Animation = se.extend(N, {
    tweeners: {
      "*": [
        function (e, t) {
          var i = this.createTween(e, t);
          return g(i.elem, e, Ut.exec(t), i), i;
        },
      ],
    },
    tweener: function (e, t) {
      se.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Dt));
      for (var i, n = 0, o = e.length; n < o; n++)
        (i = e[n]),
          (N.tweeners[i] = N.tweeners[i] || []),
          N.tweeners[i].unshift(t);
    },
    prefilters: [
      function (e, t, i) {
        var n,
          o,
          s,
          a,
          r,
          l,
          u,
          h,
          d = "width" in t || "height" in t,
          c = this,
          g = {},
          f = e.style,
          m = e.nodeType && Kt(e),
          y = jt.get(e, "fxshow");
        for (n in (i.queue ||
          (null == (a = se._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (r = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || r();
            })),
          a.unqueued++,
          c.always(function () {
            c.always(function () {
              a.unqueued--, se.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((o = t[n]), Hi.test(o))) {
            if (
              (delete t[n],
              (s = s || "toggle" === o),
              o === (m ? "hide" : "show"))
            ) {
              if ("show" !== o || !y || void 0 === y[n]) continue;
              m = !0;
            }
            g[n] = (y && y[n]) || se.style(e, n);
          }
        if ((l = !se.isEmptyObject(t)) || !se.isEmptyObject(g))
          for (n in (d &&
            1 === e.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (u = y && y.display) && (u = jt.get(e, "display")),
            "none" === (h = se.css(e, "display")) &&
              (u
                ? (h = u)
                : (p([e], !0),
                  (u = e.style.display || u),
                  (h = se.css(e, "display")),
                  p([e]))),
            ("inline" === h || ("inline-block" === h && null != u)) &&
              "none" === se.css(e, "float") &&
              (l ||
                (c.done(function () {
                  f.display = u;
                }),
                null == u && ((h = f.display), (u = "none" === h ? "" : h))),
              (f.display = "inline-block"))),
          i.overflow &&
            ((f.overflow = "hidden"),
            c.always(function () {
              (f.overflow = i.overflow[0]),
                (f.overflowX = i.overflow[1]),
                (f.overflowY = i.overflow[2]);
            })),
          (l = !1),
          g))
            l ||
              (y
                ? "hidden" in y && (m = y.hidden)
                : (y = jt.access(e, "fxshow", { display: u })),
              s && (y.hidden = !m),
              m && p([e], !0),
              c.done(function () {
                for (n in (m || p([e]), jt.remove(e, "fxshow"), g))
                  se.style(e, n, g[n]);
              })),
              (l = D(m ? y[n] : 0, n, c)),
              n in y ||
                ((y[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? N.prefilters.unshift(e) : N.prefilters.push(e);
    },
  })),
    (se.speed = function (e, t, i) {
      var n =
        e && "object" == typeof e
          ? se.extend({}, e)
          : {
              complete: i || (!i && t) || (se.isFunction(e) && e),
              duration: e,
              easing: (i && t) || (t && !se.isFunction(t) && t),
            };
      return (
        se.fx.off
          ? (n.duration = 0)
          : "number" != typeof n.duration &&
            (n.duration in se.fx.speeds
              ? (n.duration = se.fx.speeds[n.duration])
              : (n.duration = se.fx.speeds._default)),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          se.isFunction(n.old) && n.old.call(this),
            n.queue && se.dequeue(this, n.queue);
        }),
        n
      );
    }),
    se.fn.extend({
      fadeTo: function (e, t, i, n) {
        return this.filter(Kt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, i, n);
      },
      animate: function (e, t, i, n) {
        var o = se.isEmptyObject(e),
          s = se.speed(t, i, n);
        return (
          ((t = function () {
            var t = N(this, se.extend({}, e), s);
            (o || jt.get(this, "finish")) && t.stop(!0);
          }).finish = t),
          o || !1 === s.queue ? this.each(t) : this.queue(s.queue, t)
        );
      },
      stop: function (e, t, i) {
        var n = function (e) {
          var t = e.stop;
          delete e.stop, t(i);
        };
        return (
          "string" != typeof e && ((i = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              s = se.timers,
              a = jt.get(this);
            if (o) a[o] && a[o].stop && n(a[o]);
            else for (o in a) a[o] && a[o].stop && Li.test(o) && n(a[o]);
            for (o = s.length; o--; )
              s[o].elem !== this ||
                (null != e && s[o].queue !== e) ||
                (s[o].anim.stop(i), (t = !1), s.splice(o, 1));
            (!t && i) || se.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              i = jt.get(this),
              n = i[e + "queue"];
            t = i[e + "queueHooks"];
            var o = se.timers,
              s = n ? n.length : 0;
            for (
              i.finish = !0,
                se.queue(this, e, []),
                t && t.stop && t.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    se.each(["toggle", "show", "hide"], function (e, t) {
      var i = se.fn[t];
      se.fn[t] = function (e, n, o) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate($(t, !0), e, n, o);
      };
    }),
    se.each(
      {
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        se.fn[e] = function (e, i, n) {
          return this.animate(t, e, i, n);
        };
      }
    ),
    (se.timers = []),
    (se.fx.tick = function () {
      var e,
        t = 0,
        i = se.timers;
      for (Ii = se.now(); t < i.length; t++)
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      i.length || se.fx.stop(), (Ii = void 0);
    }),
    (se.fx.timer = function (e) {
      se.timers.push(e), se.fx.start();
    }),
    (se.fx.interval = 13),
    (se.fx.start = function () {
      zi || ((zi = !0), O());
    }),
    (se.fx.stop = function () {
      zi = null;
    }),
    (se.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (se.fn.delay = function (t, i) {
      return (
        (t = (se.fx && se.fx.speeds[t]) || t),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var o = e.setTimeout(i, t);
          n.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    });
  var Oi = Y.createElement("input"),
    Ri = Y.createElement("select").appendChild(Y.createElement("option"));
  (Oi.type = "checkbox"),
    (oe.checkOn = "" !== Oi.value),
    (oe.optSelected = Ri.selected),
    ((Oi = Y.createElement("input")).value = "t"),
    (Oi.type = "radio"),
    (oe.radioValue = "t" === Oi.value);
  var $i,
    Di = se.expr.attrHandle;
  se.fn.extend({
    attr: function (e, t) {
      return Bt(this, se.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        se.removeAttr(this, e);
      });
    },
  }),
    se.extend({
      attr: function (e, t, i) {
        var n,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === e.getAttribute
            ? se.prop(e, t, i)
            : ((1 === s && se.isXMLDoc(e)) ||
                (o =
                  se.attrHooks[t.toLowerCase()] ||
                  (se.expr.match.bool.test(t) ? $i : void 0)),
              void 0 !== i
                ? null === i
                  ? void se.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (n = o.set(e, i, t))
                  ? n
                  : (e.setAttribute(t, i + ""), i)
                : o && "get" in o && null !== (n = o.get(e, t))
                ? n
                : null == (n = se.find.attr(e, t))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!oe.radioValue && "radio" === t && o(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var i,
          n = 0,
          o = t && t.match(Dt);
        if (o && 1 === e.nodeType) for (; (i = o[n++]); ) e.removeAttribute(i);
      },
    }),
    ($i = {
      set: function (e, t, i) {
        return !1 === t ? se.removeAttr(e, i) : e.setAttribute(i, i), i;
      },
    }),
    se.each(se.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = Di[t] || se.find.attr;
      Di[t] = function (e, t, n) {
        var o,
          s,
          a = t.toLowerCase();
        return (
          n ||
            ((s = Di[a]),
            (Di[a] = o),
            (o = null != i(e, t, n) ? a : null),
            (Di[a] = s)),
          o
        );
      };
    });
  var Ni = /^(?:input|select|textarea|button)$/i,
    Fi = /^(?:a|area)$/i;
  se.fn.extend({
    prop: function (e, t) {
      return Bt(this, se.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[se.propFix[e] || e];
      });
    },
  }),
    se.extend({
      prop: function (e, t, i) {
        var n,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && se.isXMLDoc(e)) ||
              ((t = se.propFix[t] || t), (o = se.propHooks[t])),
            void 0 !== i
              ? o && "set" in o && void 0 !== (n = o.set(e, i, t))
                ? n
                : (e[t] = i)
              : o && "get" in o && null !== (n = o.get(e, t))
              ? n
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = se.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Ni.test(e.nodeName) || (Fi.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    oe.optSelected ||
      (se.propHooks.selected = {
        get: function (e) {
          return (
            (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex,
            null
          );
        },
        set: function (e) {
          (e = e.parentNode) &&
            (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    se.each(
      "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
        " "
      ),
      function () {
        se.propFix[this.toLowerCase()] = this;
      }
    ),
    se.fn.extend({
      addClass: function (e) {
        var t,
          i,
          n,
          o,
          s,
          a,
          r = 0;
        if (se.isFunction(e))
          return this.each(function (t) {
            se(this).addClass(e.call(this, t, B(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(Dt) || []; (i = this[r++]); )
            if (((o = B(i)), (n = 1 === i.nodeType && " " + F(o) + " "))) {
              for (a = 0; (s = t[a++]); )
                0 > n.indexOf(" " + s + " ") && (n += s + " ");
              o !== (n = F(n)) && i.setAttribute("class", n);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          i,
          n,
          o,
          s,
          a,
          r = 0;
        if (se.isFunction(e))
          return this.each(function (t) {
            se(this).removeClass(e.call(this, t, B(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(Dt) || []; (i = this[r++]); )
            if (((o = B(i)), (n = 1 === i.nodeType && " " + F(o) + " "))) {
              for (a = 0; (s = t[a++]); )
                for (; -1 < n.indexOf(" " + s + " "); )
                  n = n.replace(" " + s + " ", " ");
              o !== (n = F(n)) && i.setAttribute("class", n);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var i = typeof e;
        return "boolean" == typeof t && "string" === i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : se.isFunction(e)
          ? this.each(function (i) {
              se(this).toggleClass(e.call(this, i, B(this), t), t);
            })
          : this.each(function () {
              var t, n, o, s;
              if ("string" === i)
                for (n = 0, o = se(this), s = e.match(Dt) || []; (t = s[n++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== i) ||
                  ((t = B(this)) && jt.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : jt.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          i = 0;
        for (e = " " + e + " "; (t = this[i++]); )
          if (1 === t.nodeType && -1 < (" " + F(B(t)) + " ").indexOf(e))
            return !0;
        return !1;
      },
    });
  var Bi = /\r/g;
  se.fn.extend({
    val: function (e) {
      var t,
        i,
        n,
        o = this[0];
      return arguments.length
        ? ((n = se.isFunction(e)),
          this.each(function (i) {
            var o;
            1 === this.nodeType &&
              (null == (o = n ? e.call(this, i, se(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = se.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                se.valHooks[this.type] ||
                se.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = se.valHooks[o.type] || se.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (i = t.get(o, "value"))
          ? i
          : "string" == typeof (i = o.value)
          ? i.replace(Bi, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    se.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = se.find.attr(e, "value");
            return null != t ? t : F(se.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              i,
              n = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              r = a ? null : [],
              l = a ? s + 1 : n.length;
            for (i = 0 > s ? l : a ? s : 0; i < l; i++)
              if (
                ((t = n[i]).selected || i === s) &&
                !t.disabled &&
                (!t.parentNode.disabled || !o(t.parentNode, "optgroup"))
              ) {
                if (((e = se(t).val()), a)) return e;
                r.push(e);
              }
            return r;
          },
          set: function (e, t) {
            for (
              var i, n, o = e.options, s = se.makeArray(t), a = o.length;
              a--;

            )
              ((n = o[a]).selected =
                -1 < se.inArray(se.valHooks.option.get(n), s)) && (i = !0);
            return i || (e.selectedIndex = -1), s;
          },
        },
      },
    }),
    se.each(["radio", "checkbox"], function () {
      (se.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < se.inArray(se(e).val(), t));
        },
      }),
        oe.checkOn ||
          (se.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Gi = /^(?:focusinfocus|focusoutblur)$/;
  se.extend(se.event, {
    trigger: function (t, i, n, o) {
      var s,
        a,
        r,
        l,
        u,
        h,
        d,
        c = [n || Y],
        g = te.call(t, "type") ? t.type : t;
      if (
        ((s = te.call(t, "namespace") ? t.namespace.split(".") : []),
        (a = r = n = n || Y),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Gi.test(g + se.event.triggered) &&
          (-1 < g.indexOf(".") &&
            ((s = g.split(".")), (g = s.shift()), s.sort()),
          (u = 0 > g.indexOf(":") && "on" + g),
          ((t = t[se.expando]
            ? t
            : new se.Event(g, "object" == typeof t && t)).isTrigger = o
            ? 2
            : 3),
          (t.namespace = s.join(".")),
          (t.rnamespace = t.namespace
            ? RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = n),
          (i = null == i ? [t] : se.makeArray(i, [t])),
          (d = se.event.special[g] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(n, i)))
      ) {
        if (!o && !d.noBubble && !se.isWindow(n)) {
          for (
            l = d.delegateType || g, Gi.test(l + g) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            c.push(a), (r = a);
          r === (n.ownerDocument || Y) &&
            c.push(r.defaultView || r.parentWindow || e);
        }
        for (s = 0; (a = c[s++]) && !t.isPropagationStopped(); )
          (t.type = 1 < s ? l : d.bindType || g),
            (h = (jt.get(a, "events") || {})[t.type] && jt.get(a, "handle")) &&
              h.apply(a, i),
            (h = u && a[u]) &&
              h.apply &&
              Gt(a) &&
              ((t.result = h.apply(a, i)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = g),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(c.pop(), i)) ||
            !Gt(n) ||
            (u &&
              se.isFunction(n[g]) &&
              !se.isWindow(n) &&
              ((r = n[u]) && (n[u] = null),
              (se.event.triggered = g),
              n[g](),
              (se.event.triggered = void 0),
              r && (n[u] = r))),
          t.result
        );
      }
    },
    simulate: function (e, t, i) {
      (e = se.extend(new se.Event(), i, { type: e, isSimulated: !0 })),
        se.event.trigger(e, null, t);
    },
  }),
    se.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          se.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var i = this[0];
        if (i) return se.event.trigger(e, t, i, !0);
      },
    }),
    se.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        se.fn[t] = function (e, i) {
          return 0 < arguments.length
            ? this.on(t, null, e, i)
            : this.trigger(t);
        };
      }
    ),
    se.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (oe.focusin = "onfocusin" in e),
    oe.focusin ||
      se.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var i = function (e) {
          se.event.simulate(t, e.target, se.event.fix(e));
        };
        se.event.special[t] = {
          setup: function () {
            var n = this.ownerDocument || this,
              o = jt.access(n, t);
            o || n.addEventListener(e, i, !0), jt.access(n, t, (o || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              o = jt.access(n, t) - 1;
            o
              ? jt.access(n, t, o)
              : (n.removeEventListener(e, i, !0), jt.remove(n, t));
          },
        };
      });
  var ji = e.location,
    Wi = se.now(),
    qi = /\?/;
  se.parseXML = function (t) {
    var i;
    if (!t || "string" != typeof t) return null;
    try {
      i = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      i = void 0;
    }
    return (
      (i && !i.getElementsByTagName("parsererror").length) ||
        se.error("Invalid XML: " + t),
      i
    );
  };
  var Vi = /\[\]$/,
    Yi = /\r?\n/g,
    Ui = /^(?:submit|button|image|reset|file)$/i,
    Xi = /^(?:input|select|textarea|keygen)/i;
  (se.param = function (e, t) {
    var i,
      n = [],
      o = function (e, t) {
        var i = se.isFunction(t) ? t() : t;
        n[n.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (Array.isArray(e) || (e.jquery && !se.isPlainObject(e)))
      se.each(e, function () {
        o(this.name, this.value);
      });
    else for (i in e) G(i, e[i], t, o);
    return n.join("&");
  }),
    se.fn.extend({
      serialize: function () {
        return se.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = se.prop(this, "elements");
          return e ? se.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !se(this).is(":disabled") &&
              Xi.test(this.nodeName) &&
              !Ui.test(e) &&
              (this.checked || !Zt.test(e))
            );
          })
          .map(function (e, t) {
            var i = se(this).val();
            return null == i
              ? null
              : Array.isArray(i)
              ? se.map(i, function (e) {
                  return { name: t.name, value: e.replace(Yi, "\r\n") };
                })
              : { name: t.name, value: i.replace(Yi, "\r\n") };
          })
          .get();
      },
    });
  var Ki = /%20/g,
    Qi = /#.*$/,
    Ji = /([?&])_=[^&]*/,
    Zi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    en = /^(?:GET|HEAD)$/,
    tn = /^\/\//,
    nn = {},
    on = {},
    sn = "*/".concat("*");
  (Y.createElement("a").href = ji.href),
    se.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ji.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ji.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": sn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": se.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? q(q(e, se.ajaxSettings), t) : q(se.ajaxSettings, e);
      },
      ajaxPrefilter: j(nn),
      ajaxTransport: j(on),
      ajax: function (t, i) {
        function n(t, i, n, r) {
          var d,
            c,
            v,
            b,
            w = i;
          if (!u) {
            if (
              ((u = !0),
              l && e.clearTimeout(l),
              (o = void 0),
              (a = r || ""),
              (x.readyState = 0 < t ? 4 : 0),
              (r = (200 <= t && 300 > t) || 304 === t),
              n)
            ) {
              for (
                var T, S, E, A, k = x, C = (v = g).contents, M = v.dataTypes;
                "*" === M[0];

              )
                M.shift(),
                  void 0 === T &&
                    (T = v.mimeType || k.getResponseHeader("Content-Type"));
              if (T)
                for (S in C)
                  if (C[S] && C[S].test(T)) {
                    M.unshift(S);
                    break;
                  }
              if (M[0] in n) E = M[0];
              else {
                for (S in n) {
                  if (!M[0] || v.converters[S + " " + M[0]]) {
                    E = S;
                    break;
                  }
                  A || (A = S);
                }
                E = E || A;
              }
              v = n = E ? (E !== M[0] && M.unshift(E), n[E]) : void 0;
            }
            var P;
            e: {
              var I, z, H;
              if (
                ((T = v),
                (S = x),
                (E = r),
                (v = {}),
                (k = (n = g).dataTypes.slice())[1])
              )
                for (I in n.converters) v[I.toLowerCase()] = n.converters[I];
              for (A = k.shift(); A; )
                if (
                  (n.responseFields[A] && (S[n.responseFields[A]] = T),
                  !H && E && n.dataFilter && (T = n.dataFilter(T, n.dataType)),
                  (H = A),
                  (A = k.shift()))
                )
                  if ("*" === A) A = H;
                  else if ("*" !== H && H !== A) {
                    if (!(I = v[H + " " + A] || v["* " + A]))
                      for (P in v)
                        if (
                          (z = P.split(" "))[1] === A &&
                          (I = v[H + " " + z[0]] || v["* " + z[0]])
                        ) {
                          !0 === I
                            ? (I = v[P])
                            : !0 !== v[P] && ((A = z[0]), k.unshift(z[1]));
                          break;
                        }
                    if (!0 !== I)
                      if (I && n.throws) T = I(T);
                      else
                        try {
                          T = I(T);
                        } catch (e) {
                          P = {
                            state: "parsererror",
                            error: I
                              ? e
                              : "No conversion from " + H + " to " + A,
                          };
                          break e;
                        }
                  }
              P = { state: "success", data: T };
            }
            (v = P),
              r
                ? (g.ifModified &&
                    ((b = x.getResponseHeader("Last-Modified")) &&
                      (se.lastModified[s] = b),
                    (b = x.getResponseHeader("etag")) && (se.etag[s] = b)),
                  204 === t || "HEAD" === g.type
                    ? (w = "nocontent")
                    : 304 === t
                    ? (w = "notmodified")
                    : ((w = v.state), (d = v.data), (r = !(c = v.error))))
                : ((c = w), (!t && w) || ((w = "error"), 0 > t && (t = 0))),
              (x.status = t),
              (x.statusText = (i || w) + ""),
              r ? m.resolveWith(p, [d, w, x]) : m.rejectWith(p, [x, w, c]),
              x.statusCode(_),
              (_ = void 0),
              h &&
                f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, g, r ? d : c]),
              y.fireWith(p, [x, w]),
              h &&
                (f.trigger("ajaxComplete", [x, g]),
                --se.active || se.event.trigger("ajaxStop"));
          }
        }
        "object" == typeof t && ((i = t), (t = void 0)), (i = i || {});
        var o,
          s,
          a,
          r,
          l,
          u,
          h,
          d,
          c,
          g = se.ajaxSetup({}, i),
          p = g.context || g,
          f = g.context && (p.nodeType || p.jquery) ? se(p) : se.event,
          m = se.Deferred(),
          y = se.Callbacks("once memory"),
          _ = g.statusCode || {},
          v = {},
          b = {},
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!r)
                  for (r = {}; (t = Zi.exec(a)); ) r[t[1].toLowerCase()] = t[2];
                t = r[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return u ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e),
                  (v[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (g.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) x.always(e[x.status]);
                else for (t in e) _[t] = [_[t], e[t]];
              return this;
            },
            abort: function (e) {
              return (e = e || w), o && o.abort(e), n(0, e), this;
            },
          };
        if (
          (m.promise(x),
          (g.url = ((t || g.url || ji.href) + "").replace(
            tn,
            ji.protocol + "//"
          )),
          (g.type = i.method || i.type || g.method || g.type),
          (g.dataTypes = (g.dataType || "*").toLowerCase().match(Dt) || [""]),
          g.crossDomain,
          g.data &&
            g.processData &&
            "string" != typeof g.data &&
            (g.data = se.param(g.data, g.traditional)),
          W(nn, g, i, x),
          u)
        )
          return x;
        for (d in ((h = se.event && g.global) &&
          0 == se.active++ &&
          se.event.trigger("ajaxStart"),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !en.test(g.type)),
        (s = g.url.replace(Qi, "")),
        g.hasContent
          ? g.data &&
            g.processData &&
            0 ===
              (g.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (g.data = g.data.replace(Ki, "+"))
          : ((c = g.url.slice(s.length)),
            g.data && ((s += (qi.test(s) ? "&" : "?") + g.data), delete g.data),
            !1 === g.cache &&
              ((s = s.replace(Ji, "$1")),
              (c = (qi.test(s) ? "&" : "?") + "_=" + Wi++ + c)),
            (g.url = s + c)),
        g.ifModified &&
          (se.lastModified[s] &&
            x.setRequestHeader("If-Modified-Since", se.lastModified[s]),
          se.etag[s] && x.setRequestHeader("If-None-Match", se.etag[s])),
        ((g.data && g.hasContent && !1 !== g.contentType) || i.contentType) &&
          x.setRequestHeader("Content-Type", g.contentType),
        x.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ("*" !== g.dataTypes[0] ? ", " + sn + "; q=0.01" : "")
            : g.accepts["*"]
        ),
        g.headers))
          x.setRequestHeader(d, g.headers[d]);
        if (g.beforeSend && (!1 === g.beforeSend.call(p, x, g) || u))
          return x.abort();
        if (
          ((w = "abort"),
          y.add(g.complete),
          x.done(g.success),
          x.fail(g.error),
          (o = W(on, g, i, x)))
        ) {
          if (((x.readyState = 1), h && f.trigger("ajaxSend", [x, g]), u))
            return x;
          g.async &&
            0 < g.timeout &&
            (l = e.setTimeout(function () {
              x.abort("timeout");
            }, g.timeout));
          try {
            (u = !1), o.send(v, n);
          } catch (e) {
            if (u) throw e;
            n(-1, e);
          }
        } else n(-1, "No Transport");
        return x;
      },
      getJSON: function (e, t, i) {
        return se.get(e, t, i, "json");
      },
      getScript: function (e, t) {
        return se.get(e, void 0, t, "script");
      },
    }),
    se.each(["get", "post"], function (e, t) {
      se[t] = function (e, i, n, o) {
        return (
          se.isFunction(i) && ((o = o || n), (n = i), (i = void 0)),
          se.ajax(
            se.extend(
              { url: e, type: t, dataType: o, data: i, success: n },
              se.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (se._evalUrl = function (e) {
      return se.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    se.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (se.isFunction(e) && (e = e.call(this[0])),
            (t = se(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return se.isFunction(e)
          ? this.each(function (t) {
              se(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = se(this),
                i = t.contents();
              i.length ? i.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = se.isFunction(e);
        return this.each(function (i) {
          se(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              se(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (se.expr.pseudos.hidden = function (e) {
      return !se.expr.pseudos.visible(e);
    }),
    (se.expr.pseudos.visible = function (e) {
      return !(!e.offsetWidth && !e.offsetHeight && !e.getClientRects().length);
    }),
    (se.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var an = se.ajaxSettings.xhr();
  (oe.cors = !!an && "withCredentials" in an),
    (oe.ajax = an = !!an),
    se.ajaxTransport(function (e) {}),
    se.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    se.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return se.globalEval(e), e;
        },
      },
    }),
    se.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    se.ajaxTransport("script", function (e) {});
  var rn = [],
    ln = /(=)\?(?=&|$)|\?\?/;
  se.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = rn.pop() || se.expando + "_" + Wi++;
      return (this[e] = !0), e;
    },
  }),
    se.ajaxPrefilter("json jsonp", function (t, i, n) {
      var o,
        s,
        a,
        r =
          !1 !== t.jsonp &&
          (ln.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              ln.test(t.data) &&
              "data");
      if (r || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            se.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          r
            ? (t[r] = t[r].replace(ln, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (qi.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return a || se.error(o + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (s = e[o]),
          (e[o] = function () {
            a = arguments;
          }),
          n.always(function () {
            void 0 === s ? se(e).removeProp(o) : (e[o] = s),
              t[o] && ((t.jsonpCallback = i.jsonpCallback), rn.push(o)),
              a && se.isFunction(s) && s(a[0]),
              (a = s = void 0);
          }),
          "script"
        );
    });
  var un,
    hn = oe,
    dn = Y.implementation.createHTMLDocument("").body;
  (dn.innerHTML = "<form></form><form></form>"),
    (un = 2 === dn.childNodes.length),
    (hn.createHTMLDocument = un),
    (se.parseHTML = function (e, t, i) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((i = t), (t = !1)),
          t ||
            (oe.createHTMLDocument
              ? (((n = (t =
                  Y.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = Y.location.href),
                t.head.appendChild(n))
              : (t = Y)),
          (s = !i && []),
          (o = zt.exec(e))
            ? [t.createElement(o[1])]
            : ((o = y([e], t, s)),
              s && s.length && se(s).remove(),
              se.merge([], o.childNodes)));
      var n, o, s;
    }),
    (se.fn.load = function (e, t, i) {
      var n,
        o,
        s,
        a = this,
        r = e.indexOf(" ");
      return (
        -1 < r && ((n = F(e.slice(r))), (e = e.slice(0, r))),
        se.isFunction(t)
          ? ((i = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        0 < a.length &&
          se
            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              (s = arguments),
                a.html(n ? se("<div>").append(se.parseHTML(e)).find(n) : e);
            })
            .always(
              i &&
                function (e, t) {
                  a.each(function () {
                    i.apply(this, s || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    se.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (e, t) {
        se.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (se.expr.pseudos.animated = function (e) {
      return se.grep(se.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (se.offset = {
      setOffset: function (e, t, i) {
        var n,
          o,
          s,
          a,
          r,
          l,
          u = se.css(e, "position"),
          h = se(e),
          d = {};
        "static" === u && (e.style.position = "relative"),
          (r = h.offset()),
          (s = se.css(e, "top")),
          (l = se.css(e, "left")),
          ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto")
            ? ((a = (n = h.position()).top), (o = n.left))
            : ((a = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
          se.isFunction(t) && (t = t.call(e, i, se.extend({}, r))),
          null != t.top && (d.top = t.top - r.top + a),
          null != t.left && (d.left = t.left - r.left + o),
          "using" in t ? t.using.call(e, d) : h.css(d);
      },
    }),
    se.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                se.offset.setOffset(this, e, t);
              });
        var t,
          i,
          n,
          o,
          s = this[0];
        return s
          ? s.getClientRects().length
            ? ((n = s.getBoundingClientRect()),
              (i = (t = s.ownerDocument).documentElement),
              (o = t.defaultView),
              {
                top: n.top + o.pageYOffset - i.clientTop,
                left: n.left + o.pageXOffset - i.clientLeft,
              })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            i = this[0],
            n = { top: 0, left: 0 };
          return (
            "fixed" === se.css(i, "position")
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                o(e[0], "html") || (n = e.offset()),
                (n = {
                  top: n.top + se.css(e[0], "borderTopWidth", !0),
                  left: n.left + se.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - n.top - se.css(i, "marginTop", !0),
              left: t.left - n.left - se.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === se.css(e, "position");

          )
            e = e.offsetParent;
          return e || ai;
        });
      },
    }),
    se.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var i = "pageYOffset" === t;
        se.fn[e] = function (n) {
          return Bt(
            this,
            function (e, n, o) {
              var s;
              return (
                se.isWindow(e)
                  ? (s = e)
                  : 9 === e.nodeType && (s = e.defaultView),
                void 0 === o
                  ? s
                    ? s[t]
                    : e[n]
                  : void (s
                      ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset)
                      : (e[n] = o))
              );
            },
            e,
            n,
            arguments.length
          );
        };
      }
    ),
    se.each(["top", "left"], function (e, t) {
      se.cssHooks[t] = M(oe.pixelPosition, function (e, i) {
        if (i)
          return (i = C(e, t)), bi.test(i) ? se(e).position()[t] + "px" : i;
      });
    }),
    se.each({ Height: "height", Width: "width" }, function (e, t) {
      se.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (i, n) {
          se.fn[n] = function (o, s) {
            var a = arguments.length && (i || "boolean" != typeof o),
              r = i || (!0 === o || !0 === s ? "margin" : "border");
            return Bt(
              this,
              function (t, i, o) {
                var s;
                return se.isWindow(t)
                  ? 0 === n.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((s = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      s["scroll" + e],
                      t.body["offset" + e],
                      s["offset" + e],
                      s["client" + e]
                    ))
                  : void 0 === o
                  ? se.css(t, i, r)
                  : se.style(t, i, o, r);
              },
              t,
              a ? o : void 0,
              a
            );
          };
        }
      );
    }),
    se.fn.extend({
      bind: function (e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function (e, t, i) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", i);
      },
    }),
    (se.holdReady = function (e) {
      e ? se.readyWait++ : se.ready(!0);
    }),
    (se.isArray = Array.isArray),
    (se.parseJSON = JSON.parse),
    (se.nodeName = o),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return se;
      });
  var cn = e.jQuery,
    gn = e.$;
  return (
    (se.noConflict = function (t) {
      return (
        e.$ === se && (e.$ = gn), t && e.jQuery === se && (e.jQuery = cn), se
      );
    }),
    t || (e.jQuery = e.$ = se),
    se
  );
});
var ie = getInternetExplorerVersion();
function getQueryVariable(e) {
  for (
    var t = window.location.search.substring(1).split("&"), i = 0;
    i < t.length;
    i++
  ) {
    var n = t[i].match(/([^=]+?)=(.+)/);
    if (n && decodeURIComponent(n[1]) == e) return decodeURIComponent(n[2]);
  }
}
if (
  ((this.jukebox = {}),
  (jukebox.Player = function (e, t) {
    for (var i in ((this.id = ++jukebox.__jukeboxId),
    (this.origin = t || null),
    (this.settings = {}),
    this.defaults))
      this.settings[i] = this.defaults[i];
    if ("[object Object]" === Object.prototype.toString.call(e))
      for (var n in e) this.settings[n] = e[n];
    if (
      ("[object Function]" ===
        Object.prototype.toString.call(jukebox.Manager) &&
        (jukebox.Manager = new jukebox.Manager()),
      (this.resource = this.isPlaying = null),
      (this.resource =
        "[object Object]" === Object.prototype.toString.call(jukebox.Manager)
          ? jukebox.Manager.getPlayableResource(this.settings.resources)
          : this.settings.resources[0] || null),
      null === this.resource)
    )
      throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    return this.__init(), this;
  }),
  (jukebox.__jukeboxId = 0),
  (jukebox.Player.prototype = {
    defaults: {
      resources: [],
      autoplay: !1,
      spritemap: {},
      flashMediaElement: "./swf/FlashMediaElement.swf",
      timeout: 1e3,
    },
    __addToManager: function () {
      !0 !== this.__wasAddedToManager &&
        (jukebox.Manager.add(this), (this.__wasAddedToManager = !0));
    },
    __init: function () {
      var e,
        t = this,
        i = this.settings,
        n = {};
      if (
        (jukebox.Manager &&
          void 0 !== jukebox.Manager.features &&
          (n = jukebox.Manager.features),
        !0 === n.html5audio)
      ) {
        if (
          ((this.context = new Audio()),
          (this.context.src = this.resource),
          null === this.origin)
        ) {
          var o = function (e) {
            t.__addToManager(e);
          };
          this.context.addEventListener("canplaythrough", o, !0),
            window.setTimeout(function () {
              t.context.removeEventListener("canplaythrough", o, !0),
                o("timeout");
            }, i.timeout);
        }
        for (e in ((this.context.autobuffer = !0),
        (this.context.preload = !0),
        this.HTML5API))
          this[e] = this.HTML5API[e];
        1 < n.channels
          ? !0 === i.autoplay
            ? (this.context.autoplay = !0)
            : void 0 !== i.spritemap[i.autoplay] && this.play(i.autoplay)
          : 1 === n.channels &&
            void 0 !== i.spritemap[i.autoplay] &&
            ((this.backgroundMusic = i.spritemap[i.autoplay]),
            (this.backgroundMusic.started = Date.now
              ? Date.now()
              : +new Date()),
            this.play(i.autoplay)),
          1 == n.channels &&
            !0 !== i.canPlayBackground &&
            (window.addEventListener("pagehide", function () {
              null !== t.isPlaying && (t.pause(), (t.__wasAutoPaused = !0));
            }),
            window.addEventListener("pageshow", function () {
              t.__wasAutoPaused && (t.resume(), delete t._wasAutoPaused);
            }));
      } else {
        if (!0 !== n.flashaudio)
          throw "Your Browser does not support Flash Audio or HTML5 Audio.";
        for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
        (n = [
          "id=jukebox-flashstream-" + this.id,
          "autoplay=" + i.autoplay,
          "file=" + window.encodeURIComponent(this.resource),
        ]),
          this.__initFlashContext(n),
          !0 === i.autoplay
            ? this.play(0)
            : i.spritemap[i.autoplay] && this.play(i.autoplay);
      }
    },
    __initFlashContext: function (e) {
      var t,
        i,
        n = this.settings.flashMediaElement,
        o = {
          flashvars: e.join("&"),
          quality: "high",
          bgcolor: "#000000",
          wmode: "transparent",
          allowscriptaccess: "always",
          allowfullscreen: "true",
        };
      if (navigator.userAgent.match(/MSIE/)) {
        (t = document.createElement("div")),
          document.getElementsByTagName("body")[0].appendChild(t);
        var s = document.createElement("object");
        for (i in ((s.id = "jukebox-flashstream-" + this.id),
        s.setAttribute("type", "application/x-shockwave-flash"),
        s.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"),
        s.setAttribute("width", "0"),
        s.setAttribute("height", "0"),
        (o.movie = n + "?x=" + (Date.now ? Date.now() : +new Date())),
        (o.flashvars = e.join("&amp;")),
        o))
          (e = document.createElement("param")).setAttribute("name", i),
            e.setAttribute("value", o[i]),
            s.appendChild(e);
        (t.outerHTML = s.outerHTML),
          (this.context = document.getElementById(
            "jukebox-flashstream-" + this.id
          ));
      } else {
        for (i in (((t = document.createElement("embed")).id =
          "jukebox-flashstream-" + this.id),
        t.setAttribute("type", "application/x-shockwave-flash"),
        t.setAttribute("width", "100"),
        t.setAttribute("height", "100"),
        (o.play = !1),
        (o.loop = !1),
        (o.src = n + "?x=" + (Date.now ? Date.now() : +new Date())),
        o))
          t.setAttribute(i, o[i]);
        document.getElementsByTagName("body")[0].appendChild(t),
          (this.context = t);
      }
    },
    backgroundHackForiOS: function () {
      if (void 0 !== this.backgroundMusic) {
        var e = Date.now ? Date.now() : +new Date();
        void 0 === this.backgroundMusic.started
          ? ((this.backgroundMusic.started = e),
            this.setCurrentTime(this.backgroundMusic.start))
          : ((this.backgroundMusic.lastPointer =
              (((e - this.backgroundMusic.started) / 1e3) %
                (this.backgroundMusic.end - this.backgroundMusic.start)) +
              this.backgroundMusic.start),
            this.play(this.backgroundMusic.lastPointer));
      }
    },
    play: function (e, t) {
      if (null !== this.isPlaying && !0 !== t)
        void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(e, this.id);
      else {
        var i,
          n = this.settings.spritemap;
        if (void 0 !== n[e]) i = n[e].start;
        else if ("number" == typeof e)
          for (var o in ((i = e), n))
            if (i >= n[o].start && i <= n[o].end) {
              e = o;
              break;
            }
        void 0 !== i &&
          "[object Object]" === Object.prototype.toString.call(n[e]) &&
          ((this.isPlaying = this.settings.spritemap[e]),
          this.context.play && this.context.play(),
          (this.wasReady = this.setCurrentTime(i)));
      }
    },
    stop: function () {
      return (
        (this.__lastPosition = 0),
        (this.isPlaying = null),
        this.backgroundMusic
          ? this.backgroundHackForiOS()
          : this.context.pause(),
        !0
      );
    },
    pause: function () {
      return (
        (this.isPlaying = null),
        (this.__lastPosition = this.getCurrentTime()),
        this.context.pause(),
        this.__lastPosition
      );
    },
    resume: function (e) {
      return null !== (e = "number" == typeof e ? e : this.__lastPosition)
        ? (this.play(e), (this.__lastPosition = null), !0)
        : (this.context.play(), !1);
    },
    HTML5API: {
      getVolume: function () {
        return this.context.volume || 1;
      },
      setVolume: function (e) {
        return (
          (this.context.volume = e), 1e-4 > Math.abs(this.context.volume - e)
        );
      },
      getCurrentTime: function () {
        return this.context.currentTime || 0;
      },
      setCurrentTime: function (e) {
        try {
          return (this.context.currentTime = e), !0;
        } catch (e) {
          return !1;
        }
      },
    },
    FLASHAPI: {
      getVolume: function () {
        return this.context && "function" == typeof this.context.getVolume
          ? this.context.getVolume()
          : 1;
      },
      setVolume: function (e) {
        return !(
          !this.context ||
          "function" != typeof this.context.setVolume ||
          (this.context.setVolume(e), 0)
        );
      },
      getCurrentTime: function () {
        return this.context && "function" == typeof this.context.getCurrentTime
          ? this.context.getCurrentTime()
          : 0;
      },
      setCurrentTime: function (e) {
        return (
          !(
            !this.context || "function" != typeof this.context.setCurrentTime
          ) && this.context.setCurrentTime(e)
        );
      },
    },
  }),
  void 0 === this.jukebox)
)
  throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
(jukebox.Manager = function (e) {
  for (var t in ((this.features = {}),
  (this.codecs = {}),
  (this.__players = {}),
  (this.__playersLength = 0),
  (this.__clones = {}),
  (this.__queue = []),
  (this.settings = {}),
  this.defaults))
    this.settings[t] = this.defaults[t];
  if ("[object Object]" === Object.prototype.toString.call(e))
    for (var i in e) this.settings[i] = e[i];
  this.__detectFeatures(),
    (jukebox.Manager.__initialized =
      !1 !== this.settings.useGameLoop ||
      window.setInterval(function () {
        jukebox.Manager.loop();
      }, 20));
}),
  (jukebox.Manager.prototype = {
    defaults: { useFlash: !1, useGameLoop: !1 },
    __detectFeatures: function () {
      var e = window.Audio && new Audio();
      if (e && e.canPlayType && !1 === this.settings.useFlash) {
        for (
          var t,
            i,
            n = [
              { e: "3gp", m: ["audio/3gpp", "audio/amr"] },
              { e: "aac", m: ["audio/aac", "audio/aacp"] },
              { e: "amr", m: ["audio/amr", "audio/3gpp"] },
              {
                e: "caf",
                m: [
                  "audio/IMA-ADPCM",
                  "audio/x-adpcm",
                  'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"',
                ],
              },
              {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split(
                  "{"
                ),
              },
              {
                e: "mp3",
                m: [
                  "audio/mp3",
                  "audio/mpeg",
                  'audio/mpeg; codecs="mp3"',
                  "audio/MPA",
                  "audio/mpa-robust",
                ],
              },
              {
                e: "mpga",
                m: [
                  "audio/MPA",
                  "audio/mpa-robust",
                  "audio/mpeg",
                  "video/mpeg",
                ],
              },
              { e: "mp4", m: ["audio/mp4", "video/mp4"] },
              {
                e: "ogg",
                m: [
                  "application/ogg",
                  "audio/ogg",
                  'audio/ogg; codecs="theora, vorbis"',
                  "video/ogg",
                  'video/ogg; codecs="theora, vorbis"',
                ],
              },
              {
                e: "wav",
                m: [
                  "audio/wave",
                  "audio/wav",
                  'audio/wav; codecs="1"',
                  "audio/x-wav",
                  "audio/x-pn-wav",
                ],
              },
              {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"],
              },
            ],
            o = 0,
            s = n.length;
          o < s;
          o++
        )
          if (((i = n[o].e), n[o].m.length && "object" == typeof n[o].m))
            for (var a = 0, r = n[o].m.length; a < r; a++) {
              if (((t = n[o].m[a]), "" !== e.canPlayType(t))) {
                this.codecs[i] = t;
                break;
              }
              this.codecs[i] || (this.codecs[i] = !1);
            }
        (this.features.html5audio = !!(
          this.codecs.mp3 ||
          this.codecs.ogg ||
          this.codecs.webm ||
          this.codecs.wav
        )),
          (this.features.channels = 8),
          (e.volume = 0.1337),
          (this.features.volume = !!(1e-4 > Math.abs(e.volume - 0.1337))),
          navigator.userAgent.match(/iPhone|iPod|iPad/i) &&
            (this.features.channels = 1);
      }
      if (
        ((this.features.flashaudio =
          !!navigator.mimeTypes["application/x-shockwave-flash"] ||
          !!navigator.plugins["Shockwave Flash"] ||
          !1),
        window.ActiveXObject)
      )
        try {
          new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
            (this.features.flashaudio = !0);
        } catch (e) {}
      !0 === this.settings.useFlash && (this.features.flashaudio = !0),
        !0 === this.features.flashaudio &&
          !this.features.html5audio &&
          ((this.codecs.mp3 = "audio/mp3"),
          (this.codecs.mpga = "audio/mpeg"),
          (this.codecs.mp4 = "audio/mp4"),
          (this.codecs.m4a = "audio/mp4"),
          (this.codecs["3gp"] = "audio/3gpp"),
          (this.codecs.amr = "audio/amr"),
          (this.features.volume = !0),
          (this.features.channels = 1));
    },
    __getPlayerById: function (e) {
      return this.__players && void 0 !== this.__players[e]
        ? this.__players[e]
        : null;
    },
    __getClone: function (e, t) {
      for (var i in this.__clones) {
        var n = this.__clones[i];
        if (null === n.isPlaying && n.origin === e) return n;
      }
      if ("[object Object]" === Object.prototype.toString.call(t)) {
        for (var o in ((i = {}), t)) i[o] = t[o];
        return (
          (i.autoplay = !1),
          ((o = new jukebox.Player(i, e)).isClone = !0),
          (o.wasReady = !1),
          (this.__clones[o.id] = o)
        );
      }
      return null;
    },
    loop: function () {
      if (0 !== this.__playersLength)
        if (
          this.__queue.length &&
          this.__playersLength < this.features.channels
        ) {
          var e = this.__queue[0],
            t = this.__getPlayerById(e.origin);
          if (null !== t) {
            var i = this.__getClone(e.origin, t.settings);
            null !== i &&
              (!0 === this.features.volume &&
                (t = this.__players[e.origin]) &&
                i.setVolume(t.getVolume()),
              this.add(i),
              i.play(e.pointer, !0));
          }
          this.__queue.splice(0, 1);
        } else
          for (i in (this.__queue.length &&
            1 === this.features.channels &&
            ((e = this.__queue[0]),
            null !== (t = this.__getPlayerById(e.origin)) &&
              t.play(e.pointer, !0),
            this.__queue.splice(0, 1)),
          this.__players))
            (t = (e = this.__players[i]).getCurrentTime() || 0),
              e.isPlaying && !1 === e.wasReady
                ? (e.wasReady = e.setCurrentTime(e.isPlaying.start))
                : e.isPlaying && !0 === e.wasReady
                ? t > e.isPlaying.end &&
                  (!0 === e.isPlaying.loop
                    ? e.play(e.isPlaying.start, !0)
                    : e.stop())
                : e.isClone && null === e.isPlaying
                ? this.remove(e)
                : void 0 !== e.backgroundMusic &&
                  null === e.isPlaying &&
                  t > e.backgroundMusic.end &&
                  e.backgroundHackForiOS();
    },
    getPlayableResource: function (e) {
      "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]);
      for (var t = 0, i = e.length; t < i; t++) {
        var n = e[t],
          o = n.match(/\.([^\.]*)$/)[1];
        if (o && this.codecs[o]) return n;
      }
      return null;
    },
    add: function (e) {
      return (
        e instanceof jukebox.Player &&
        void 0 === this.__players[e.id] &&
        (this.__playersLength++, (this.__players[e.id] = e), !0)
      );
    },
    remove: function (e) {
      return (
        e instanceof jukebox.Player &&
        void 0 !== this.__players[e.id] &&
        (this.__playersLength--, delete this.__players[e.id], !0)
      );
    },
    addToQueue: function (e, t) {
      return (
        ("string" == typeof e || "number" == typeof e) &&
        void 0 !== this.__players[t] &&
        (this.__queue.push({ pointer: e, origin: t }), !0)
      );
    },
  }),
  (function () {
    var e = function () {
      this.init();
    };
    e.prototype = {
      init: function () {
        var e = this || t;
        return (
          (e._counter = 1e3),
          (e._html5AudioPool = []),
          (e.html5PoolSize = 10),
          (e._codecs = {}),
          (e._howls = []),
          (e._muted = !1),
          (e._volume = 1),
          (e._canPlayEvent = "canplaythrough"),
          (e._navigator =
            "undefined" != typeof window && window.navigator
              ? window.navigator
              : null),
          (e.masterGain = null),
          (e.noAudio = !1),
          (e.usingWebAudio = !0),
          (e.autoSuspend = !1),
          (e.ctx = null),
          (e.autoUnlock = !0),
          e._setup(),
          e
        );
      },
      volume: function (e) {
        var i = this || t;
        if (
          ((e = parseFloat(e)), i.ctx || r(), void 0 !== e && 0 <= e && 1 >= e)
        ) {
          if (((i._volume = e), i._muted)) return i;
          i.usingWebAudio &&
            i.masterGain.gain.setValueAtTime(e, t.ctx.currentTime);
          for (var n = 0; n < i._howls.length; n++)
            if (!i._howls[n]._webAudio)
              for (
                var o = i._howls[n]._getSoundIds(), s = 0;
                s < o.length;
                s++
              ) {
                var a = i._howls[n]._soundById(o[s]);
                a && a._node && (a._node.volume = a._volume * e);
              }
          return i;
        }
        return i._volume;
      },
      mute: function (e) {
        var i = this || t;
        i.ctx || r(),
          (i._muted = e),
          i.usingWebAudio &&
            i.masterGain.gain.setValueAtTime(
              e ? 0 : i._volume,
              t.ctx.currentTime
            );
        for (var n = 0; n < i._howls.length; n++)
          if (!i._howls[n]._webAudio)
            for (var o = i._howls[n]._getSoundIds(), s = 0; s < o.length; s++) {
              var a = i._howls[n]._soundById(o[s]);
              a && a._node && (a._node.muted = !!e || a._muted);
            }
        return i;
      },
      stop: function () {
        for (var e = this || t, i = 0; i < e._howls.length; i++)
          e._howls[i].stop();
        return e;
      },
      unload: function () {
        for (var e = this || t, i = e._howls.length - 1; 0 <= i; i--)
          e._howls[i].unload();
        return (
          e.usingWebAudio &&
            e.ctx &&
            void 0 !== e.ctx.close &&
            (e.ctx.close(), (e.ctx = null), r()),
          e
        );
      },
      codecs: function (e) {
        return (this || t)._codecs[e.replace(/^x-/, "")];
      },
      _setup: function () {
        var e = this || t;
        if (
          ((e.state = (e.ctx && e.ctx.state) || "suspended"),
          e._autoSuspend(),
          !e.usingWebAudio)
        )
          if ("undefined" != typeof Audio)
            try {
              var i = new Audio();
              void 0 === i.oncanplaythrough && (e._canPlayEvent = "canplay");
            } catch (t) {
              e.noAudio = !0;
            }
          else e.noAudio = !0;
        try {
          (i = new Audio()).muted && (e.noAudio = !0);
        } catch (e) {}
        return e.noAudio || e._setupCodecs(), e;
      },
      _setupCodecs: function () {
        var e = this || t,
          i = null;
        try {
          i = "undefined" != typeof Audio ? new Audio() : null;
        } catch (t) {
          return e;
        }
        if (!i || "function" != typeof i.canPlayType) return e;
        var n = i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          o =
            (o =
              e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g)) &&
            33 > parseInt(o[0].split("/")[1], 10);
        return (
          (e._codecs = {
            mp3: !(
              o ||
              (!n && !i.canPlayType("audio/mp3;").replace(/^no$/, ""))
            ),
            mpeg: !!n,
            opus: !!i
              .canPlayType('audio/ogg; codecs="opus"')
              .replace(/^no$/, ""),
            ogg: !!i
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            oga: !!i
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!i.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              i.canPlayType("audio/x-m4a;") ||
              i.canPlayType("audio/m4a;") ||
              i.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            m4b: !!(
              i.canPlayType("audio/x-m4b;") ||
              i.canPlayType("audio/m4b;") ||
              i.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              i.canPlayType("audio/x-mp4;") ||
              i.canPlayType("audio/mp4;") ||
              i.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !!i
              .canPlayType('audio/webm; codecs="vorbis"')
              .replace(/^no$/, ""),
            webm: !!i
              .canPlayType('audio/webm; codecs="vorbis"')
              .replace(/^no$/, ""),
            dolby: !!i
              .canPlayType('audio/mp4; codecs="ec-3"')
              .replace(/^no$/, ""),
            flac: !!(
              i.canPlayType("audio/x-flac;") || i.canPlayType("audio/flac;")
            ).replace(/^no$/, ""),
          }),
          e
        );
      },
      _unlockAudio: function () {
        var e = this || t;
        if (!e._audioUnlocked && e.ctx) {
          (e._audioUnlocked = !1),
            (e.autoUnlock = !1),
            !e._mobileUnloaded &&
              44100 !== e.ctx.sampleRate &&
              ((e._mobileUnloaded = !0), e.unload()),
            (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
          var i = function () {
            for (; e._html5AudioPool.length < e.html5PoolSize; )
              try {
                var t = new Audio();
                (t._unlocked = !0), e._releaseHtml5Audio(t);
              } catch (t) {
                e.noAudio = !0;
                break;
              }
            for (t = 0; t < e._howls.length; t++)
              if (!e._howls[t]._webAudio)
                for (
                  var n = e._howls[t]._getSoundIds(), o = 0;
                  o < n.length;
                  o++
                ) {
                  var s = e._howls[t]._soundById(n[o]);
                  s &&
                    s._node &&
                    !s._node._unlocked &&
                    ((s._node._unlocked = !0), s._node.load());
                }
            e._autoResume();
            var a = e.ctx.createBufferSource();
            (a.buffer = e._scratchBuffer),
              a.connect(e.ctx.destination),
              void 0 === a.start ? a.noteOn(0) : a.start(0),
              "function" == typeof e.ctx.resume && e.ctx.resume(),
              (a.onended = function () {
                a.disconnect(0),
                  (e._audioUnlocked = !0),
                  document.removeEventListener("touchstart", i, !0),
                  document.removeEventListener("touchend", i, !0),
                  document.removeEventListener("click", i, !0);
                for (var t = 0; t < e._howls.length; t++)
                  e._howls[t]._emit("unlock");
              });
          };
          return (
            document.addEventListener("touchstart", i, !0),
            document.addEventListener("touchend", i, !0),
            document.addEventListener("click", i, !0),
            e
          );
        }
      },
      _obtainHtml5Audio: function () {
        var e = this || t;
        return e._html5AudioPool.length
          ? e._html5AudioPool.pop()
          : ((e = new Audio().play()) &&
              "undefined" != typeof Promise &&
              (e instanceof Promise || "function" == typeof e.then) &&
              e.catch(function () {
                console.warn(
                  "HTML5 Audio pool exhausted, returning potentially locked audio object."
                );
              }),
            new Audio());
      },
      _releaseHtml5Audio: function (e) {
        var i = this || t;
        return e._unlocked && i._html5AudioPool.push(e), i;
      },
      _autoSuspend: function () {
        var e = this;
        if (
          e.autoSuspend &&
          e.ctx &&
          void 0 !== e.ctx.suspend &&
          t.usingWebAudio
        ) {
          for (var i = 0; i < e._howls.length; i++)
            if (e._howls[i]._webAudio)
              for (var n = 0; n < e._howls[i]._sounds.length; n++)
                if (!e._howls[i]._sounds[n]._paused) return e;
          return (
            e._suspendTimer && clearTimeout(e._suspendTimer),
            (e._suspendTimer = setTimeout(function () {
              if (e.autoSuspend) {
                (e._suspendTimer = null), (e.state = "suspending");
                var t = function () {
                  (e.state = "suspended"),
                    e._resumeAfterSuspend &&
                      (delete e._resumeAfterSuspend, e._autoResume());
                };
                e.ctx.suspend().then(t, t);
              }
            }, 3e4)),
            e
          );
        }
      },
      _autoResume: function () {
        var e = this;
        if (e.ctx && void 0 !== e.ctx.resume && t.usingWebAudio)
          return (
            "running" === e.state &&
            "interrupted" !== e.ctx.state &&
            e._suspendTimer
              ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
              : "suspended" === e.state ||
                ("running" === e.state && "interrupted" === e.ctx.state)
              ? (e.ctx.resume().then(function () {
                  e.state = "running";
                  for (var t = 0; t < e._howls.length; t++)
                    e._howls[t]._emit("resume");
                }),
                e._suspendTimer &&
                  (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
              : "suspending" === e.state && (e._resumeAfterSuspend = !0),
            e
          );
      },
    };
    var t = new e(),
      i = function (e) {
        e.src && 0 !== e.src.length
          ? this.init(e)
          : console.error(
              "An array of source files must be passed with any new Howl."
            );
      };
    i.prototype = {
      init: function (e) {
        var i = this;
        return (
          t.ctx || r(),
          (i._autoplay = e.autoplay || !1),
          (i._format = "string" != typeof e.format ? e.format : [e.format]),
          (i._html5 = e.html5 || !1),
          (i._muted = e.mute || !1),
          (i._loop = e.loop || !1),
          (i._pool = e.pool || 5),
          (i._preload =
            ("boolean" != typeof e.preload && "metadata" !== e.preload) ||
            e.preload),
          (i._rate = e.rate || 1),
          (i._sprite = e.sprite || {}),
          (i._src = "string" != typeof e.src ? e.src : [e.src]),
          (i._volume = void 0 !== e.volume ? e.volume : 1),
          (i._xhr = {
            method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
            headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
            withCredentials:
              !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
          }),
          (i._duration = 0),
          (i._state = "unloaded"),
          (i._sounds = []),
          (i._endTimers = {}),
          (i._queue = []),
          (i._playLock = !1),
          (i._onend = e.onend ? [{ fn: e.onend }] : []),
          (i._onfade = e.onfade ? [{ fn: e.onfade }] : []),
          (i._onload = e.onload ? [{ fn: e.onload }] : []),
          (i._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
          (i._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
          (i._onpause = e.onpause ? [{ fn: e.onpause }] : []),
          (i._onplay = e.onplay ? [{ fn: e.onplay }] : []),
          (i._onstop = e.onstop ? [{ fn: e.onstop }] : []),
          (i._onmute = e.onmute ? [{ fn: e.onmute }] : []),
          (i._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
          (i._onrate = e.onrate ? [{ fn: e.onrate }] : []),
          (i._onseek = e.onseek ? [{ fn: e.onseek }] : []),
          (i._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
          (i._onresume = []),
          (i._webAudio = t.usingWebAudio && !i._html5),
          void 0 !== t.ctx && t.ctx && t.autoUnlock && t._unlockAudio(),
          t._howls.push(i),
          i._autoplay &&
            i._queue.push({
              event: "play",
              action: function () {
                i.play();
              },
            }),
          i._preload && "none" !== i._preload && i.load(),
          i
        );
      },
      load: function () {
        var e = null;
        if (t.noAudio) this._emit("loaderror", null, "No audio support.");
        else {
          "string" == typeof this._src && (this._src = [this._src]);
          for (var i = 0; i < this._src.length; i++) {
            var r, l;
            if (this._format && this._format[i]) r = this._format[i];
            else {
              if ("string" != typeof (l = this._src[i])) {
                this._emit(
                  "loaderror",
                  null,
                  "Non-string found in selected audio sources - ignoring."
                );
                continue;
              }
              (r = /^data:audio\/([^;,]+);/i.exec(l)) ||
                (r = /\.([^.]+)$/.exec(l.split("?", 1)[0])),
                r && (r = r[1].toLowerCase());
            }
            if (
              (r ||
                console.warn(
                  'No file extension was found. Consider using the "format" property or specify an extension.'
                ),
              r && t.codecs(r))
            ) {
              e = this._src[i];
              break;
            }
          }
          if (e) {
            if (
              ((this._src = e),
              (this._state = "loading"),
              "https:" === window.location.protocol &&
                "http:" === e.slice(0, 5) &&
                ((this._html5 = !0), (this._webAudio = !1)),
              new n(this),
              this._webAudio)
            ) {
              var u = this,
                h = u._src;
              if (o[h]) (u._duration = o[h].duration), a(u);
              else if (/^data:[^;]+;base64,/.test(h)) {
                for (
                  e = atob(h.split(",")[1]),
                    i = new Uint8Array(e.length),
                    r = 0;
                  r < e.length;
                  ++r
                )
                  i[r] = e.charCodeAt(r);
                s(i.buffer, u);
              } else {
                var d = new XMLHttpRequest();
                d.open(u._xhr.method, h, !0),
                  (d.withCredentials = u._xhr.withCredentials),
                  (d.responseType = "arraybuffer"),
                  u._xhr.headers &&
                    Object.keys(u._xhr.headers).forEach(function (e) {
                      d.setRequestHeader(e, u._xhr.headers[e]);
                    }),
                  (d.onload = function () {
                    var e = (d.status + "")[0];
                    "0" !== e && "2" !== e && "3" !== e
                      ? u._emit(
                          "loaderror",
                          null,
                          "Failed loading audio file with status: " +
                            d.status +
                            "."
                        )
                      : s(d.response, u);
                  }),
                  (d.onerror = function () {
                    u._webAudio &&
                      ((u._html5 = !0),
                      (u._webAudio = !1),
                      (u._sounds = []),
                      delete o[h],
                      u.load());
                  });
                try {
                  d.send();
                } catch (e) {
                  d.onerror();
                }
              }
            }
            return this;
          }
          this._emit(
            "loaderror",
            null,
            "No codec support for selected audio sources."
          );
        }
      },
      play: function (e, i) {
        var n = this,
          o = null;
        if ("number" == typeof e) (o = e), (e = null);
        else {
          if ("string" == typeof e && "loaded" === n._state && !n._sprite[e])
            return null;
          if (void 0 === e && ((e = "__default"), !n._playLock)) {
            for (var s = 0, a = 0; a < n._sounds.length; a++)
              n._sounds[a]._paused &&
                !n._sounds[a]._ended &&
                (s++, (o = n._sounds[a]._id));
            1 === s ? (e = null) : (o = null);
          }
        }
        var r = o ? n._soundById(o) : n._inactiveSound();
        if (!r) return null;
        if (
          (o && !e && (e = r._sprite || "__default"), "loaded" !== n._state)
        ) {
          (r._sprite = e), (r._ended = !1);
          var l = r._id;
          return (
            n._queue.push({
              event: "play",
              action: function () {
                n.play(l);
              },
            }),
            l
          );
        }
        if (o && !r._paused) return i || n._loadQueue("play"), r._id;
        n._webAudio && t._autoResume();
        var u = Math.max(0, 0 < r._seek ? r._seek : n._sprite[e][0] / 1e3),
          h = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - u),
          d = (1e3 * h) / Math.abs(r._rate),
          c = n._sprite[e][0] / 1e3,
          g = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
        (r._sprite = e), (r._ended = !1);
        var p = function () {
          (r._paused = !1),
            (r._seek = u),
            (r._start = c),
            (r._stop = g),
            (r._loop = !(!r._loop && !n._sprite[e][2]));
        };
        if (!(u >= g)) {
          var f = r._node;
          if (n._webAudio)
            (o = function () {
              (n._playLock = !1),
                p(),
                n._refreshBuffer(r),
                f.gain.setValueAtTime(
                  r._muted || n._muted ? 0 : r._volume,
                  t.ctx.currentTime
                ),
                (r._playStart = t.ctx.currentTime),
                void 0 === f.bufferSource.start
                  ? r._loop
                    ? f.bufferSource.noteGrainOn(0, u, 86400)
                    : f.bufferSource.noteGrainOn(0, u, h)
                  : r._loop
                  ? f.bufferSource.start(0, u, 86400)
                  : f.bufferSource.start(0, u, h),
                1 / 0 !== d &&
                  (n._endTimers[r._id] = setTimeout(n._ended.bind(n, r), d)),
                i ||
                  setTimeout(function () {
                    n._emit("play", r._id), n._loadQueue();
                  }, 0);
            }),
              "running" === t.state && "interrupted" !== t.ctx.state
                ? o()
                : ((n._playLock = !0),
                  n.once("resume", o),
                  n._clearTimer(r._id));
          else {
            var m = function () {
              (f.currentTime = u),
                (f.muted = r._muted || n._muted || t._muted || f.muted),
                (f.volume = r._volume * t.volume()),
                (f.playbackRate = r._rate);
              try {
                var o = f.play();
                o &&
                "undefined" != typeof Promise &&
                (o instanceof Promise || "function" == typeof o.then)
                  ? ((n._playLock = !0),
                    p(),
                    o
                      .then(function () {
                        (n._playLock = !1),
                          (f._unlocked = !0),
                          i || (n._emit("play", r._id), n._loadQueue());
                      })
                      .catch(function () {
                        (n._playLock = !1),
                          n._emit(
                            "playerror",
                            r._id,
                            "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                          ),
                          (r._ended = !0),
                          (r._paused = !0);
                      }))
                  : i ||
                    ((n._playLock = !1),
                    p(),
                    n._emit("play", r._id),
                    n._loadQueue()),
                  (f.playbackRate = r._rate),
                  f.paused
                    ? n._emit(
                        "playerror",
                        r._id,
                        "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                      )
                    : "__default" !== e || r._loop
                    ? (n._endTimers[r._id] = setTimeout(n._ended.bind(n, r), d))
                    : ((n._endTimers[r._id] = function () {
                        n._ended(r),
                          f.removeEventListener(
                            "ended",
                            n._endTimers[r._id],
                            !1
                          );
                      }),
                      f.addEventListener("ended", n._endTimers[r._id], !1));
              } catch (e) {
                n._emit("playerror", r._id, e);
              }
            };
            if (
              ("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
                f.src && ((f.src = n._src), f.load()),
              (o =
                (window && window.ejecta) ||
                (!f.readyState && t._navigator.isCocoonJS)),
              3 <= f.readyState || o)
            )
              m();
            else {
              n._playLock = !0;
              var y = function () {
                m(), f.removeEventListener(t._canPlayEvent, y, !1);
              };
              f.addEventListener(t._canPlayEvent, y, !1), n._clearTimer(r._id);
            }
          }
          return r._id;
        }
        n._ended(r);
      },
      pause: function (e, t) {
        var i = this;
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "pause",
              action: function () {
                i.pause(e);
              },
            }),
            i
          );
        for (var n = i._getSoundIds(e), o = 0; o < n.length; o++) {
          i._clearTimer(n[o]);
          var s = i._soundById(n[o]);
          if (
            s &&
            !s._paused &&
            ((s._seek = i.seek(n[o])),
            (s._rateSeek = 0),
            (s._paused = !0),
            i._stopFade(n[o]),
            s._node)
          )
            if (i._webAudio) {
              if (!s._node.bufferSource) continue;
              void 0 === s._node.bufferSource.stop
                ? s._node.bufferSource.noteOff(0)
                : s._node.bufferSource.stop(0),
                i._cleanBuffer(s._node);
            } else
              (!isNaN(s._node.duration) || 1 / 0 === s._node.duration) &&
                s._node.pause();
          t || i._emit("pause", s ? s._id : null);
        }
        return i;
      },
      stop: function (e, t) {
        var i = this;
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "stop",
              action: function () {
                i.stop(e);
              },
            }),
            i
          );
        for (var n = i._getSoundIds(e), o = 0; o < n.length; o++) {
          i._clearTimer(n[o]);
          var s = i._soundById(n[o]);
          s &&
            ((s._seek = s._start || 0),
            (s._rateSeek = 0),
            (s._paused = !0),
            (s._ended = !0),
            i._stopFade(n[o]),
            s._node &&
              (i._webAudio
                ? s._node.bufferSource &&
                  (void 0 === s._node.bufferSource.stop
                    ? s._node.bufferSource.noteOff(0)
                    : s._node.bufferSource.stop(0),
                  i._cleanBuffer(s._node))
                : (isNaN(s._node.duration) && 1 / 0 !== s._node.duration) ||
                  ((s._node.currentTime = s._start || 0),
                  s._node.pause(),
                  1 / 0 === s._node.duration && i._clearSound(s._node))),
            t || i._emit("stop", s._id));
        }
        return i;
      },
      mute: function (e, i) {
        var n = this;
        if ("loaded" !== n._state || n._playLock)
          return (
            n._queue.push({
              event: "mute",
              action: function () {
                n.mute(e, i);
              },
            }),
            n
          );
        if (void 0 === i) {
          if ("boolean" != typeof e) return n._muted;
          n._muted = e;
        }
        for (var o = n._getSoundIds(i), s = 0; s < o.length; s++) {
          var a = n._soundById(o[s]);
          a &&
            ((a._muted = e),
            a._interval && n._stopFade(a._id),
            n._webAudio && a._node
              ? a._node.gain.setValueAtTime(
                  e ? 0 : a._volume,
                  t.ctx.currentTime
                )
              : a._node && (a._node.muted = !!t._muted || e),
            n._emit("mute", a._id));
        }
        return n;
      },
      volume: function () {
        var e,
          i,
          n,
          o = this,
          s = arguments;
        if (0 === s.length) return o._volume;
        if (
          (1 === s.length || (2 === s.length && void 0 === s[1])
            ? 0 <= o._getSoundIds().indexOf(s[0])
              ? (i = parseInt(s[0], 10))
              : (e = parseFloat(s[0]))
            : 2 <= s.length &&
              ((e = parseFloat(s[0])), (i = parseInt(s[1], 10))),
          !(void 0 !== e && 0 <= e && 1 >= e))
        )
          return (n = i ? o._soundById(i) : o._sounds[0]) ? n._volume : 0;
        if ("loaded" !== o._state || o._playLock)
          return (
            o._queue.push({
              event: "volume",
              action: function () {
                o.volume.apply(o, s);
              },
            }),
            o
          );
        void 0 === i && (o._volume = e), (i = o._getSoundIds(i));
        for (var a = 0; a < i.length; a++)
          (n = o._soundById(i[a])) &&
            ((n._volume = e),
            s[2] || o._stopFade(i[a]),
            o._webAudio && n._node && !n._muted
              ? n._node.gain.setValueAtTime(e, t.ctx.currentTime)
              : n._node && !n._muted && (n._node.volume = e * t.volume()),
            o._emit("volume", n._id));
        return o;
      },
      fade: function (e, i, n, o) {
        var s = this;
        if ("loaded" !== s._state || s._playLock)
          return (
            s._queue.push({
              event: "fade",
              action: function () {
                s.fade(e, i, n, o);
              },
            }),
            s
          );
        (e = Math.min(Math.max(0, parseFloat(e)), 1)),
          (i = Math.min(Math.max(0, parseFloat(i)), 1)),
          (n = parseFloat(n)),
          s.volume(e, o);
        for (var a = s._getSoundIds(o), r = 0; r < a.length; r++) {
          var l = s._soundById(a[r]);
          if (l) {
            if ((o || s._stopFade(a[r]), s._webAudio && !l._muted)) {
              var u = t.ctx.currentTime,
                h = u + n / 1e3;
              (l._volume = e),
                l._node.gain.setValueAtTime(e, u),
                l._node.gain.linearRampToValueAtTime(i, h);
            }
            s._startFadeInterval(l, e, i, n, a[r], void 0 === o);
          }
        }
        return s;
      },
      _startFadeInterval: function (e, t, i, n, o, s) {
        var a = this,
          r = t,
          l = i - t;
        (o = Math.abs(l / 0.01)), (o = Math.max(4, 0 < o ? n / o : n));
        var u = Date.now();
        (e._fadeTo = i),
          (e._interval = setInterval(function () {
            var o = (Date.now() - u) / n;
            (u = Date.now()),
              (r += l * o),
              (r = 0 > l ? Math.max(i, r) : Math.min(i, r)),
              (r = Math.round(100 * r) / 100),
              a._webAudio ? (e._volume = r) : a.volume(r, e._id, !0),
              s && (a._volume = r),
              ((i < t && r <= i) || (i > t && r >= i)) &&
                (clearInterval(e._interval),
                (e._interval = null),
                (e._fadeTo = null),
                a.volume(i, e._id),
                a._emit("fade", e._id));
          }, o));
      },
      _stopFade: function (e) {
        var i = this._soundById(e);
        return (
          i &&
            i._interval &&
            (this._webAudio &&
              i._node.gain.cancelScheduledValues(t.ctx.currentTime),
            clearInterval(i._interval),
            (i._interval = null),
            this.volume(i._fadeTo, e),
            (i._fadeTo = null),
            this._emit("fade", e)),
          this
        );
      },
      loop: function () {
        var e,
          t,
          i = arguments;
        if (0 === i.length) return this._loop;
        if (1 === i.length) {
          if ("boolean" != typeof i[0])
            return !!(i = this._soundById(parseInt(i[0], 10))) && i._loop;
          this._loop = e = i[0];
        } else 2 === i.length && ((e = i[0]), (t = parseInt(i[1], 10)));
        t = this._getSoundIds(t);
        for (var n = 0; n < t.length; n++)
          (i = this._soundById(t[n])) &&
            ((i._loop = e),
            this._webAudio &&
              i._node &&
              i._node.bufferSource &&
              (i._node.bufferSource.loop = e) &&
              ((i._node.bufferSource.loopStart = i._start || 0),
              (i._node.bufferSource.loopEnd = i._stop)));
        return this;
      },
      rate: function () {
        var e,
          i,
          n,
          o = this,
          s = arguments;
        if (
          (0 === s.length
            ? (i = o._sounds[0]._id)
            : 1 === s.length
            ? 0 <= o._getSoundIds().indexOf(s[0])
              ? (i = parseInt(s[0], 10))
              : (e = parseFloat(s[0]))
            : 2 === s.length &&
              ((e = parseFloat(s[0])), (i = parseInt(s[1], 10))),
          "number" != typeof e)
        )
          return (n = o._soundById(i)) ? n._rate : o._rate;
        if ("loaded" !== o._state || o._playLock)
          return (
            o._queue.push({
              event: "rate",
              action: function () {
                o.rate.apply(o, s);
              },
            }),
            o
          );
        void 0 === i && (o._rate = e), (i = o._getSoundIds(i));
        for (var a = 0; a < i.length; a++)
          if ((n = o._soundById(i[a]))) {
            o.playing(i[a]) &&
              ((n._rateSeek = o.seek(i[a])),
              (n._playStart = o._webAudio ? t.ctx.currentTime : n._playStart)),
              (n._rate = e),
              o._webAudio && n._node && n._node.bufferSource
                ? n._node.bufferSource.playbackRate.setValueAtTime(
                    e,
                    t.ctx.currentTime
                  )
                : n._node && (n._node.playbackRate = e);
            var r = o.seek(i[a]);
            (r =
              (1e3 *
                ((o._sprite[n._sprite][0] + o._sprite[n._sprite][1]) / 1e3 -
                  r)) /
              Math.abs(n._rate)),
              (!o._endTimers[i[a]] && n._paused) ||
                (o._clearTimer(i[a]),
                (o._endTimers[i[a]] = setTimeout(o._ended.bind(o, n), r))),
              o._emit("rate", n._id);
          }
        return o;
      },
      seek: function () {
        var e,
          i,
          n = this,
          o = arguments;
        if (
          (0 === o.length
            ? (i = n._sounds[0]._id)
            : 1 === o.length
            ? 0 <= n._getSoundIds().indexOf(o[0])
              ? (i = parseInt(o[0], 10))
              : n._sounds.length &&
                ((i = n._sounds[0]._id), (e = parseFloat(o[0])))
            : 2 === o.length &&
              ((e = parseFloat(o[0])), (i = parseInt(o[1], 10))),
          void 0 === i)
        )
          return n;
        if ("loaded" !== n._state || n._playLock)
          return (
            n._queue.push({
              event: "seek",
              action: function () {
                n.seek.apply(n, o);
              },
            }),
            n
          );
        var s = n._soundById(i);
        if (s) {
          if (!("number" == typeof e && 0 <= e))
            return n._webAudio
              ? ((e = n.playing(i) ? t.ctx.currentTime - s._playStart : 0),
                s._seek +
                  ((s._rateSeek ? s._rateSeek - s._seek : 0) +
                    e * Math.abs(s._rate)))
              : s._node.currentTime;
          var a = n.playing(i);
          a && n.pause(i, !0),
            (s._seek = e),
            (s._ended = !1),
            n._clearTimer(i),
            !n._webAudio &&
              s._node &&
              !isNaN(s._node.duration) &&
              (s._node.currentTime = e);
          var r = function () {
            n._emit("seek", i), a && n.play(i, !0);
          };
          if (a && !n._webAudio) {
            var l = function () {
              n._playLock ? setTimeout(l, 0) : r();
            };
            setTimeout(l, 0);
          } else r();
        }
        return n;
      },
      playing: function (e) {
        if ("number" == typeof e)
          return !!(e = this._soundById(e)) && !e._paused;
        for (e = 0; e < this._sounds.length; e++)
          if (!this._sounds[e]._paused) return !0;
        return !1;
      },
      duration: function (e) {
        var t = this._duration;
        return (
          (e = this._soundById(e)) && (t = this._sprite[e._sprite][1] / 1e3), t
        );
      },
      state: function () {
        return this._state;
      },
      unload: function () {
        for (var e = this._sounds, i = 0; i < e.length; i++)
          e[i]._paused || this.stop(e[i]._id),
            this._webAudio ||
              (this._clearSound(e[i]._node),
              e[i]._node.removeEventListener("error", e[i]._errorFn, !1),
              e[i]._node.removeEventListener(t._canPlayEvent, e[i]._loadFn, !1),
              t._releaseHtml5Audio(e[i]._node)),
            delete e[i]._node,
            this._clearTimer(e[i]._id);
        for (
          0 <= (i = t._howls.indexOf(this)) && t._howls.splice(i, 1),
            e = !0,
            i = 0;
          i < t._howls.length;
          i++
        )
          if (
            t._howls[i]._src === this._src ||
            0 <= this._src.indexOf(t._howls[i]._src)
          ) {
            e = !1;
            break;
          }
        return (
          o && e && delete o[this._src],
          (t.noAudio = !1),
          (this._state = "unloaded"),
          (this._sounds = []),
          null
        );
      },
      on: function (e, t, i, n) {
        return (
          (e = this["_on" + e]),
          "function" == typeof t &&
            e.push(n ? { id: i, fn: t, once: n } : { id: i, fn: t }),
          this
        );
      },
      off: function (e, t, i) {
        var n = this["_on" + e],
          o = 0;
        if (("number" == typeof t && ((i = t), (t = null)), t || i)) {
          for (o = 0; o < n.length; o++)
            if (((e = i === n[o].id), (t === n[o].fn && e) || (!t && e))) {
              n.splice(o, 1);
              break;
            }
        } else if (e) this["_on" + e] = [];
        else
          for (t = Object.keys(this), o = 0; o < t.length; o++)
            0 === t[o].indexOf("_on") &&
              Array.isArray(this[t[o]]) &&
              (this[t[o]] = []);
        return this;
      },
      once: function (e, t, i) {
        return this.on(e, t, i, 1), this;
      },
      _emit: function (e, t, i) {
        for (var n = this["_on" + e], o = n.length - 1; 0 <= o; o--)
          (n[o].id && n[o].id !== t && "load" !== e) ||
            (setTimeout(
              function (e) {
                e.call(this, t, i);
              }.bind(this, n[o].fn),
              0
            ),
            n[o].once && this.off(e, n[o].fn, n[o].id));
        return this._loadQueue(e), this;
      },
      _loadQueue: function (e) {
        if (0 < this._queue.length) {
          var t = this._queue[0];
          t.event === e && (this._queue.shift(), this._loadQueue()),
            e || t.action();
        }
        return this;
      },
      _ended: function (e) {
        var i = e._sprite;
        if (
          !this._webAudio &&
          e._node &&
          !e._node.paused &&
          !e._node.ended &&
          e._node.currentTime < e._stop
        )
          return setTimeout(this._ended.bind(this, e), 100), this;
        if (
          ((i = !(!e._loop && !this._sprite[i][2])),
          this._emit("end", e._id),
          !this._webAudio && i && this.stop(e._id, !0).play(e._id),
          this._webAudio && i)
        ) {
          this._emit("play", e._id),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            (e._playStart = t.ctx.currentTime);
          var n = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
          this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), n);
        }
        return (
          this._webAudio &&
            !i &&
            ((e._paused = !0),
            (e._ended = !0),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            this._clearTimer(e._id),
            this._cleanBuffer(e._node),
            t._autoSuspend()),
          !this._webAudio && !i && this.stop(e._id, !0),
          this
        );
      },
      _clearTimer: function (e) {
        if (this._endTimers[e]) {
          if ("function" != typeof this._endTimers[e])
            clearTimeout(this._endTimers[e]);
          else {
            var t = this._soundById(e);
            t &&
              t._node &&
              t._node.removeEventListener("ended", this._endTimers[e], !1);
          }
          delete this._endTimers[e];
        }
        return this;
      },
      _soundById: function (e) {
        for (var t = 0; t < this._sounds.length; t++)
          if (e === this._sounds[t]._id) return this._sounds[t];
        return null;
      },
      _inactiveSound: function () {
        this._drain();
        for (var e = 0; e < this._sounds.length; e++)
          if (this._sounds[e]._ended) return this._sounds[e].reset();
        return new n(this);
      },
      _drain: function () {
        var e = this._pool,
          t = 0,
          i = 0;
        if (!(this._sounds.length < e)) {
          for (i = 0; i < this._sounds.length; i++)
            this._sounds[i]._ended && t++;
          for (i = this._sounds.length - 1; 0 <= i && !(t <= e); i--)
            this._sounds[i]._ended &&
              (this._webAudio &&
                this._sounds[i]._node &&
                this._sounds[i]._node.disconnect(0),
              this._sounds.splice(i, 1),
              t--);
        }
      },
      _getSoundIds: function (e) {
        if (void 0 === e) {
          e = [];
          for (var t = 0; t < this._sounds.length; t++)
            e.push(this._sounds[t]._id);
          return e;
        }
        return [e];
      },
      _refreshBuffer: function (e) {
        return (
          (e._node.bufferSource = t.ctx.createBufferSource()),
          (e._node.bufferSource.buffer = o[this._src]),
          e._panner
            ? e._node.bufferSource.connect(e._panner)
            : e._node.bufferSource.connect(e._node),
          (e._node.bufferSource.loop = e._loop) &&
            ((e._node.bufferSource.loopStart = e._start || 0),
            (e._node.bufferSource.loopEnd = e._stop || 0)),
          e._node.bufferSource.playbackRate.setValueAtTime(
            e._rate,
            t.ctx.currentTime
          ),
          this
        );
      },
      _cleanBuffer: function (e) {
        var i = t._navigator && 0 <= t._navigator.vendor.indexOf("Apple");
        if (
          t._scratchBuffer &&
          e.bufferSource &&
          ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), i)
        )
          try {
            e.bufferSource.buffer = t._scratchBuffer;
          } catch (e) {}
        return (e.bufferSource = null), this;
      },
      _clearSound: function (e) {
        /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent) ||
          (e.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      },
    };
    var n = function (e) {
      (this._parent = e), this.init();
    };
    n.prototype = {
      init: function () {
        var e = this._parent;
        return (
          (this._muted = e._muted),
          (this._loop = e._loop),
          (this._volume = e._volume),
          (this._rate = e._rate),
          (this._seek = 0),
          (this._ended = this._paused = !0),
          (this._sprite = "__default"),
          (this._id = ++t._counter),
          e._sounds.push(this),
          this.create(),
          this
        );
      },
      create: function () {
        var e = this._parent,
          i = t._muted || this._muted || this._parent._muted ? 0 : this._volume;
        return (
          e._webAudio
            ? ((this._node =
                void 0 === t.ctx.createGain
                  ? t.ctx.createGainNode()
                  : t.ctx.createGain()),
              this._node.gain.setValueAtTime(i, t.ctx.currentTime),
              (this._node.paused = !0),
              this._node.connect(t.masterGain))
            : t.noAudio ||
              ((this._node = t._obtainHtml5Audio()),
              (this._errorFn = this._errorListener.bind(this)),
              this._node.addEventListener("error", this._errorFn, !1),
              (this._loadFn = this._loadListener.bind(this)),
              this._node.addEventListener(t._canPlayEvent, this._loadFn, !1),
              (this._node.src = e._src),
              (this._node.preload = !0 === e._preload ? "auto" : e._preload),
              (this._node.volume = i * t.volume()),
              this._node.load()),
          this
        );
      },
      reset: function () {
        var e = this._parent;
        return (
          (this._muted = e._muted),
          (this._loop = e._loop),
          (this._volume = e._volume),
          (this._rate = e._rate),
          (this._rateSeek = this._seek = 0),
          (this._ended = this._paused = !0),
          (this._sprite = "__default"),
          (this._id = ++t._counter),
          this
        );
      },
      _errorListener: function () {
        this._parent._emit(
          "loaderror",
          this._id,
          this._node.error ? this._node.error.code : 0
        ),
          this._node.removeEventListener("error", this._errorFn, !1);
      },
      _loadListener: function () {
        var e = this._parent;
        (e._duration = Math.ceil(10 * this._node.duration) / 10),
          0 === Object.keys(e._sprite).length &&
            (e._sprite = { __default: [0, 1e3 * e._duration] }),
          "loaded" !== e._state &&
            ((e._state = "loaded"), e._emit("load"), e._loadQueue()),
          this._node.removeEventListener(t._canPlayEvent, this._loadFn, !1);
      },
    };
    var o = {},
      s = function (e, i) {
        var n = function () {
            i._emit("loaderror", null, "Decoding audio data failed.");
          },
          s = function (e) {
            e && 0 < i._sounds.length ? ((o[i._src] = e), a(i, e)) : n();
          };
        "undefined" != typeof Promise && 1 === t.ctx.decodeAudioData.length
          ? t.ctx.decodeAudioData(e).then(s).catch(n)
          : t.ctx.decodeAudioData(e, s, n);
      },
      a = function (e, t) {
        t && !e._duration && (e._duration = t.duration),
          0 === Object.keys(e._sprite).length &&
            (e._sprite = { __default: [0, 1e3 * e._duration] }),
          "loaded" !== e._state &&
            ((e._state = "loaded"), e._emit("load"), e._loadQueue());
      },
      r = function () {
        if (t.usingWebAudio) {
          try {
            "undefined" != typeof AudioContext
              ? (t.ctx = new AudioContext())
              : "undefined" != typeof webkitAudioContext
              ? (t.ctx = new webkitAudioContext())
              : (t.usingWebAudio = !1);
          } catch (e) {
            t.usingWebAudio = !1;
          }
          t.ctx || (t.usingWebAudio = !1);
          var e = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform),
            i = (i =
              t._navigator &&
              t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))
              ? parseInt(i[1], 10)
              : null;
          e &&
            i &&
            9 > i &&
            ((e = /safari/.test(
              t._navigator && t._navigator.userAgent.toLowerCase()
            )),
            t._navigator && !e && (t.usingWebAudio = !1)),
            t.usingWebAudio &&
              ((t.masterGain =
                void 0 === t.ctx.createGain
                  ? t.ctx.createGainNode()
                  : t.ctx.createGain()),
              t.masterGain.gain.setValueAtTime(
                t._muted ? 0 : t._volume,
                t.ctx.currentTime
              ),
              t.masterGain.connect(t.ctx.destination)),
            t._setup();
        }
      };
    "function" == typeof define &&
      define.amd &&
      define([], function () {
        return { Howler: t, Howl: i };
      }),
      "undefined" != typeof exports &&
        ((exports.Howler = t), (exports.Howl = i)),
      "undefined" != typeof global
        ? ((global.HowlerGlobal = e),
          (global.Howler = t),
          (global.Howl = i),
          (global.Sound = n))
        : "undefined" != typeof window &&
          ((window.HowlerGlobal = e),
          (window.Howler = t),
          (window.Howl = i),
          (window.Sound = n));
  })(),
  (function () {
    (HowlerGlobal.prototype._pos = [0, 0, 0]),
      (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
      (HowlerGlobal.prototype.stereo = function (e) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var t = this._howls.length - 1; 0 <= t; t--)
          this._howls[t].stereo(e);
        return this;
      }),
      (HowlerGlobal.prototype.pos = function (e, t, i) {
        return this.ctx && this.ctx.listener
          ? ((t = "number" != typeof t ? this._pos[1] : t),
            (i = "number" != typeof i ? this._pos[2] : i),
            "number" != typeof e
              ? this._pos
              : ((this._pos = [e, t, i]),
                void 0 !== this.ctx.listener.positionX
                  ? (this.ctx.listener.positionX.setTargetAtTime(
                      this._pos[0],
                      Howler.ctx.currentTime,
                      0.1
                    ),
                    this.ctx.listener.positionY.setTargetAtTime(
                      this._pos[1],
                      Howler.ctx.currentTime,
                      0.1
                    ),
                    this.ctx.listener.positionZ.setTargetAtTime(
                      this._pos[2],
                      Howler.ctx.currentTime,
                      0.1
                    ))
                  : this.ctx.listener.setPosition(
                      this._pos[0],
                      this._pos[1],
                      this._pos[2]
                    ),
                this))
          : this;
      }),
      (HowlerGlobal.prototype.orientation = function (e, t, i, n, o, s) {
        if (!this.ctx || !this.ctx.listener) return this;
        var a = this._orientation;
        return (
          (t = "number" != typeof t ? a[1] : t),
          (i = "number" != typeof i ? a[2] : i),
          (n = "number" != typeof n ? a[3] : n),
          (o = "number" != typeof o ? a[4] : o),
          (s = "number" != typeof s ? a[5] : s),
          "number" != typeof e
            ? a
            : ((this._orientation = [e, t, i, n, o, s]),
              void 0 !== this.ctx.listener.forwardX
                ? (this.ctx.listener.forwardX.setTargetAtTime(
                    e,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  this.ctx.listener.forwardY.setTargetAtTime(
                    t,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  this.ctx.listener.forwardZ.setTargetAtTime(
                    i,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  this.ctx.listener.upX.setTargetAtTime(
                    n,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  this.ctx.listener.upY.setTargetAtTime(
                    o,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  this.ctx.listener.upZ.setTargetAtTime(
                    s,
                    Howler.ctx.currentTime,
                    0.1
                  ))
                : this.ctx.listener.setOrientation(e, t, i, n, o, s),
              this)
        );
      });
    var e = Howl.prototype.init;
    (Howl.prototype.init = function (t) {
      return (
        (this._orientation = t.orientation || [1, 0, 0]),
        (this._stereo = t.stereo || null),
        (this._pos = t.pos || null),
        (this._pannerAttr = {
          coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
          coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
          coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
          distanceModel:
            void 0 !== t.distanceModel ? t.distanceModel : "inverse",
          maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
          panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
          refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
          rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1,
        }),
        (this._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
        (this._onpos = t.onpos ? [{ fn: t.onpos }] : []),
        (this._onorientation = t.onorientation
          ? [{ fn: t.onorientation }]
          : []),
        e.call(this, t)
      );
    }),
      (Howl.prototype.stereo = function (e, t) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state)
          return (
            i._queue.push({
              event: "stereo",
              action: function () {
                i.stereo(e, t);
              },
            }),
            i
          );
        var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if (void 0 === t) {
          if ("number" != typeof e) return i._stereo;
          (i._stereo = e), (i._pos = [e, 0, 0]);
        }
        for (var s = i._getSoundIds(t), a = 0; a < s.length; a++) {
          var r = i._soundById(s[a]);
          if (r) {
            if ("number" != typeof e) return r._stereo;
            (r._stereo = e),
              (r._pos = [e, 0, 0]),
              r._node &&
                ((r._pannerAttr.panningModel = "equalpower"),
                (!r._panner || !r._panner.pan) && n(r, o),
                "spatial" === o
                  ? void 0 !== r._panner.positionX
                    ? (r._panner.positionX.setValueAtTime(
                        e,
                        Howler.ctx.currentTime
                      ),
                      r._panner.positionY.setValueAtTime(
                        0,
                        Howler.ctx.currentTime
                      ),
                      r._panner.positionZ.setValueAtTime(
                        0,
                        Howler.ctx.currentTime
                      ))
                    : r._panner.setPosition(e, 0, 0)
                  : r._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
              i._emit("stereo", r._id);
          }
        }
        return i;
      }),
      (Howl.prototype.pos = function (e, t, i, o) {
        var s = this;
        if (!s._webAudio) return s;
        if ("loaded" !== s._state)
          return (
            s._queue.push({
              event: "pos",
              action: function () {
                s.pos(e, t, i, o);
              },
            }),
            s
          );
        if (
          ((t = "number" != typeof t ? 0 : t),
          (i = "number" != typeof i ? -0.5 : i),
          void 0 === o)
        ) {
          if ("number" != typeof e) return s._pos;
          s._pos = [e, t, i];
        }
        for (var a = s._getSoundIds(o), r = 0; r < a.length; r++) {
          var l = s._soundById(a[r]);
          if (l) {
            if ("number" != typeof e) return l._pos;
            (l._pos = [e, t, i]),
              l._node &&
                ((!l._panner || l._panner.pan) && n(l, "spatial"),
                void 0 !== l._panner.positionX
                  ? (l._panner.positionX.setValueAtTime(
                      e,
                      Howler.ctx.currentTime
                    ),
                    l._panner.positionY.setValueAtTime(
                      t,
                      Howler.ctx.currentTime
                    ),
                    l._panner.positionZ.setValueAtTime(
                      i,
                      Howler.ctx.currentTime
                    ))
                  : l._panner.setPosition(e, t, i)),
              s._emit("pos", l._id);
          }
        }
        return s;
      }),
      (Howl.prototype.orientation = function (e, t, i, o) {
        var s = this;
        if (!s._webAudio) return s;
        if ("loaded" !== s._state)
          return (
            s._queue.push({
              event: "orientation",
              action: function () {
                s.orientation(e, t, i, o);
              },
            }),
            s
          );
        if (
          ((t = "number" != typeof t ? s._orientation[1] : t),
          (i = "number" != typeof i ? s._orientation[2] : i),
          void 0 === o)
        ) {
          if ("number" != typeof e) return s._orientation;
          s._orientation = [e, t, i];
        }
        for (var a = s._getSoundIds(o), r = 0; r < a.length; r++) {
          var l = s._soundById(a[r]);
          if (l) {
            if ("number" != typeof e) return l._orientation;
            (l._orientation = [e, t, i]),
              l._node &&
                (l._panner ||
                  (l._pos || (l._pos = s._pos || [0, 0, -0.5]),
                  n(l, "spatial")),
                void 0 !== l._panner.orientationX
                  ? (l._panner.orientationX.setValueAtTime(
                      e,
                      Howler.ctx.currentTime
                    ),
                    l._panner.orientationY.setValueAtTime(
                      t,
                      Howler.ctx.currentTime
                    ),
                    l._panner.orientationZ.setValueAtTime(
                      i,
                      Howler.ctx.currentTime
                    ))
                  : l._panner.setOrientation(e, t, i)),
              s._emit("orientation", l._id);
          }
        }
        return s;
      }),
      (Howl.prototype.pannerAttr = function () {
        var e,
          t,
          i = arguments;
        if (!this._webAudio) return this;
        if (0 === i.length) return this._pannerAttr;
        if (1 === i.length) {
          if ("object" != typeof i[0])
            return (i = this._soundById(parseInt(i[0], 10)))
              ? i._pannerAttr
              : this._pannerAttr;
          (e = i[0]),
            void 0 === t &&
              (e.pannerAttr ||
                (e.pannerAttr = {
                  coneInnerAngle: e.coneInnerAngle,
                  coneOuterAngle: e.coneOuterAngle,
                  coneOuterGain: e.coneOuterGain,
                  distanceModel: e.distanceModel,
                  maxDistance: e.maxDistance,
                  refDistance: e.refDistance,
                  rolloffFactor: e.rolloffFactor,
                  panningModel: e.panningModel,
                }),
              (this._pannerAttr = {
                coneInnerAngle:
                  void 0 !== e.pannerAttr.coneInnerAngle
                    ? e.pannerAttr.coneInnerAngle
                    : this._coneInnerAngle,
                coneOuterAngle:
                  void 0 !== e.pannerAttr.coneOuterAngle
                    ? e.pannerAttr.coneOuterAngle
                    : this._coneOuterAngle,
                coneOuterGain:
                  void 0 !== e.pannerAttr.coneOuterGain
                    ? e.pannerAttr.coneOuterGain
                    : this._coneOuterGain,
                distanceModel:
                  void 0 !== e.pannerAttr.distanceModel
                    ? e.pannerAttr.distanceModel
                    : this._distanceModel,
                maxDistance:
                  void 0 !== e.pannerAttr.maxDistance
                    ? e.pannerAttr.maxDistance
                    : this._maxDistance,
                refDistance:
                  void 0 !== e.pannerAttr.refDistance
                    ? e.pannerAttr.refDistance
                    : this._refDistance,
                rolloffFactor:
                  void 0 !== e.pannerAttr.rolloffFactor
                    ? e.pannerAttr.rolloffFactor
                    : this._rolloffFactor,
                panningModel:
                  void 0 !== e.pannerAttr.panningModel
                    ? e.pannerAttr.panningModel
                    : this._panningModel,
              }));
        } else 2 === i.length && ((e = i[0]), (t = parseInt(i[1], 10)));
        t = this._getSoundIds(t);
        for (var o = 0; o < t.length; o++)
          if ((i = this._soundById(t[o]))) {
            var s = i._pannerAttr,
              a =
                ((s = {
                  coneInnerAngle:
                    void 0 !== e.coneInnerAngle
                      ? e.coneInnerAngle
                      : s.coneInnerAngle,
                  coneOuterAngle:
                    void 0 !== e.coneOuterAngle
                      ? e.coneOuterAngle
                      : s.coneOuterAngle,
                  coneOuterGain:
                    void 0 !== e.coneOuterGain
                      ? e.coneOuterGain
                      : s.coneOuterGain,
                  distanceModel:
                    void 0 !== e.distanceModel
                      ? e.distanceModel
                      : s.distanceModel,
                  maxDistance:
                    void 0 !== e.maxDistance ? e.maxDistance : s.maxDistance,
                  refDistance:
                    void 0 !== e.refDistance ? e.refDistance : s.refDistance,
                  rolloffFactor:
                    void 0 !== e.rolloffFactor
                      ? e.rolloffFactor
                      : s.rolloffFactor,
                  panningModel:
                    void 0 !== e.panningModel ? e.panningModel : s.panningModel,
                }),
                i._panner);
            a
              ? ((a.coneInnerAngle = s.coneInnerAngle),
                (a.coneOuterAngle = s.coneOuterAngle),
                (a.coneOuterGain = s.coneOuterGain),
                (a.distanceModel = s.distanceModel),
                (a.maxDistance = s.maxDistance),
                (a.refDistance = s.refDistance),
                (a.rolloffFactor = s.rolloffFactor),
                (a.panningModel = s.panningModel))
              : (i._pos || (i._pos = this._pos || [0, 0, -0.5]),
                n(i, "spatial"));
          }
        return this;
      });
    var t = Sound.prototype.init;
    Sound.prototype.init = function () {
      var e = this._parent;
      (this._orientation = e._orientation),
        (this._stereo = e._stereo),
        (this._pos = e._pos),
        (this._pannerAttr = e._pannerAttr),
        t.call(this),
        this._stereo
          ? e.stereo(this._stereo)
          : this._pos &&
            e.pos(this._pos[0], this._pos[1], this._pos[2], this._id);
    };
    var i = Sound.prototype.reset;
    Sound.prototype.reset = function () {
      var e = this._parent;
      return (
        (this._orientation = e._orientation),
        (this._stereo = e._stereo),
        (this._pos = e._pos),
        (this._pannerAttr = e._pannerAttr),
        this._stereo
          ? e.stereo(this._stereo)
          : this._pos
          ? e.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
          : this._panner &&
            (this._panner.disconnect(0),
            (this._panner = void 0),
            e._refreshBuffer(this)),
        i.call(this)
      );
    };
    var n = function (e, t) {
      "spatial" === (t || "spatial")
        ? ((e._panner = Howler.ctx.createPanner()),
          (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
          (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
          (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
          (e._panner.distanceModel = e._pannerAttr.distanceModel),
          (e._panner.maxDistance = e._pannerAttr.maxDistance),
          (e._panner.refDistance = e._pannerAttr.refDistance),
          (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
          (e._panner.panningModel = e._pannerAttr.panningModel),
          void 0 !== e._panner.positionX
            ? (e._panner.positionX.setValueAtTime(
                e._pos[0],
                Howler.ctx.currentTime
              ),
              e._panner.positionY.setValueAtTime(
                e._pos[1],
                Howler.ctx.currentTime
              ),
              e._panner.positionZ.setValueAtTime(
                e._pos[2],
                Howler.ctx.currentTime
              ))
            : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
          void 0 !== e._panner.orientationX
            ? (e._panner.orientationX.setValueAtTime(
                e._orientation[0],
                Howler.ctx.currentTime
              ),
              e._panner.orientationY.setValueAtTime(
                e._orientation[1],
                Howler.ctx.currentTime
              ),
              e._panner.orientationZ.setValueAtTime(
                e._orientation[2],
                Howler.ctx.currentTime
              ))
            : e._panner.setOrientation(
                e._orientation[0],
                e._orientation[1],
                e._orientation[2]
              ))
        : ((e._panner = Howler.ctx.createStereoPanner()),
          e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
        e._panner.connect(e._node),
        e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
    };
  })(),
  (function (e, t) {
    var i,
      n =
        ((i = !0),
        function (e, t) {
          var n = i
            ? function () {
                if (t) {
                  var i = t.apply(e, arguments);
                  return (t = null), i;
                }
              }
            : function () {};
          return (i = !1), n;
        });
    n(this, function () {
      var e;
      try {
        e = Function('return (function() {}.constructor("return this")( ));')();
      } catch (t) {
        e = window;
      }
      new RegExp("", "g");
      var t,
        i,
        n,
        o = [],
        s = function (e, t, i) {
          if (e.length != t) return !1;
          for (var n = 0; n < t; n++)
            for (var o = 0; o < i.length; o += 2)
              if (n == i[o] && e.charCodeAt(n) != i[o + 1]) return !1;
          return !0;
        },
        a = function (e, t, i) {
          return s(t, i, e);
        },
        r = function (e, t, i) {
          return a(t, e, i);
        };
      for (var l in e)
        if (s(l, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          t = l;
          break;
        }
      for (var u in e[t])
        if (r(u, [5, 110, 0, 100], 6)) {
          m = u;
          break;
        }
      for (var h in e[t])
        if (r(h, [7, 110, 0, 108], 8)) {
          i = h;
          break;
        }
      if (!("~" > m))
        for (var d in e[t][i])
          if (a([7, 101, 0, 104], d, 8)) {
            n = d;
            break;
          }
      if (t && e[t]) {
        var c = e[t][m],
          g = !!e[t][i] && e[t][i][n],
          p = c || g;
        if (p)
          for (var f = 0; f < o.length; f++) {
            var m,
              y = (m = o[f])[0] === String.fromCharCode(46) ? m.slice(1) : m,
              _ = p.length - y.length,
              v = p.indexOf(y, _);
            -1 !== v && v === _ && (p.length == m.length || m.indexOf("."));
          }
      }
    })(),
      "object" == typeof exports && "undefined" != typeof module
        ? t()
        : "function" == typeof define && define.amd
        ? define(t)
        : t();
  })(0, function () {
    function e(e) {
      var t = this.constructor;
      return this.then(
        function (i) {
          return t.resolve(e()).then(function () {
            return i;
          });
        },
        function (i) {
          return t.resolve(e()).then(function () {
            return t.reject(i);
          });
        }
      );
    }
    function t() {}
    function i(e) {
      if (!(this instanceof i))
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("not a function");
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        r(e, this);
    }
    function n(e, t) {
      for (; 3 === e._state; ) e = e._value;
      0 !== e._state
        ? ((e._handled = !0),
          i._immediateFn(function () {
            var i = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== i) {
              var n;
              try {
                n = i(e._value);
              } catch (e) {
                return void s(t.promise, e);
              }
              o(t.promise, n);
            } else (1 === e._state ? o : s)(t.promise, e._value);
          }))
        : e._deferreds.push(t);
    }
    function o(e, t) {
      try {
        if (t === e)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (t && ("object" == typeof t || "function" == typeof t)) {
          var n = t.then;
          if (t instanceof i) return (e._state = 3), (e._value = t), void a(e);
          if ("function" == typeof n)
            return void r(function () {
              n.apply(t, arguments);
            }, e);
        }
        (e._state = 1), (e._value = t), a(e);
      } catch (t) {
        s(e, t);
      }
    }
    function s(e, t) {
      (e._state = 2), (e._value = t), a(e);
    }
    function a(e) {
      2 === e._state &&
        0 === e._deferreds.length &&
        i._immediateFn(function () {
          e._handled || i._unhandledRejectionFn(e._value);
        });
      for (var t = 0, o = e._deferreds.length; o > t; t++)
        n(e, e._deferreds[t]);
      e._deferreds = null;
    }
    function r(e, t) {
      var i = !1;
      try {
        e(
          function (e) {
            i || ((i = !0), o(t, e));
          },
          function (e) {
            i || ((i = !0), s(t, e));
          }
        );
      } catch (e) {
        i || ((i = !0), s(t, e));
      }
    }
    var l = setTimeout;
    (i.prototype.catch = function (e) {
      return this.then(null, e);
    }),
      (i.prototype.then = function (e, i) {
        var o = new this.constructor(t);
        return (
          n(
            this,
            new (function (e, t, i) {
              (this.onFulfilled = "function" == typeof e ? e : null),
                (this.onRejected = "function" == typeof t ? t : null),
                (this.promise = i);
            })(e, i, o)
          ),
          o
        );
      }),
      (i.prototype.finally = e),
      (i.all = function (e) {
        return new i(function (t, i) {
          function n(e, a) {
            try {
              if (a && ("object" == typeof a || "function" == typeof a)) {
                var r = a.then;
                if ("function" == typeof r)
                  return void r.call(
                    a,
                    function (t) {
                      n(e, t);
                    },
                    i
                  );
              }
              (o[e] = a), 0 == --s && t(o);
            } catch (e) {
              i(e);
            }
          }
          if (!e || void 0 === e.length)
            throw new TypeError("Promise.all accepts an array");
          var o = Array.prototype.slice.call(e);
          if (0 === o.length) return t([]);
          for (var s = o.length, a = 0; o.length > a; a++) n(a, o[a]);
        });
      }),
      (i.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === i
          ? e
          : new i(function (t) {
              t(e);
            });
      }),
      (i.reject = function (e) {
        return new i(function (t, i) {
          i(e);
        });
      }),
      (i.race = function (e) {
        return new i(function (t, i) {
          for (var n = 0, o = e.length; o > n; n++) e[n].then(t, i);
        });
      }),
      (i._immediateFn =
        ("function" == typeof setImmediate &&
          function (e) {
            setImmediate(e);
          }) ||
        function (e) {
          l(e, 0);
        }),
      (i._unhandledRejectionFn = function (e) {
        void 0 !== console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", e);
      });
    var u = (function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof global) return global;
      throw Error("unable to locate global object");
    })();
    "Promise" in u
      ? u.Promise.prototype.finally || (u.Promise.prototype.finally = e)
      : (u.Promise = i);
  }),
  (function () {
    function e(e, t) {
      document.addEventListener
        ? e.addEventListener("scroll", t, !1)
        : e.attachEvent("scroll", t);
    }
    function t(e) {
      (this.a = document.createElement("div")),
        this.a.setAttribute("aria-hidden", "true"),
        this.a.appendChild(document.createTextNode(e)),
        (this.b = document.createElement("span")),
        (this.c = document.createElement("span")),
        (this.h = document.createElement("span")),
        (this.f = document.createElement("span")),
        (this.g = -1),
        (this.b.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.c.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.f.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.h.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.b.appendChild(this.h),
        this.c.appendChild(this.f),
        this.a.appendChild(this.b),
        this.a.appendChild(this.c);
    }
    function i(e, t) {
      e.a.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
        t +
        ";";
    }
    function n(e) {
      var t = e.a.offsetWidth,
        i = t + 100;
      return (
        (e.f.style.width = i + "px"),
        (e.c.scrollLeft = i),
        (e.b.scrollLeft = e.b.scrollWidth + 100),
        e.g !== t && ((e.g = t), !0)
      );
    }
    function o(t, i) {
      function o() {
        var e = s;
        n(e) && e.a.parentNode && i(e.g);
      }
      var s = t;
      e(t.b, o), e(t.c, o), n(t);
    }
    function s(e, t) {
      var i = t || {};
      (this.family = e),
        (this.style = i.style || "normal"),
        (this.weight = i.weight || "normal"),
        (this.stretch = i.stretch || "normal");
    }
    function a() {
      return null === c && (c = !!document.fonts), c;
    }
    function r() {
      if (null === d) {
        var e = document.createElement("div");
        try {
          e.style.font = "condensed 100px sans-serif";
        } catch (e) {}
        d = "" !== e.style.font;
      }
      return d;
    }
    function l(e, t) {
      return [e.style, e.weight, r() ? e.stretch : "", "100px", t].join(" ");
    }
    var u = null,
      h = null,
      d = null,
      c = null;
    (s.prototype.load = function (e, n) {
      var s = this,
        r = e || "BESbswy",
        d = 0,
        c = n || 3e3,
        g = new Date().getTime();
      return new Promise(function (e, n) {
        var p;
        if (
          ((p = a()) &&
            (null === h &&
              (a() && /Apple/.test(window.navigator.vendor)
                ? ((p =
                    /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )),
                  (h = !!p && 603 > parseInt(p[1], 10)))
                : (h = !1)),
            (p = !h)),
          p)
        ) {
          p = new Promise(function (e, t) {
            !(function i() {
              new Date().getTime() - g >= c
                ? t(Error(c + "ms timeout exceeded"))
                : document.fonts
                    .load(l(s, '"' + s.family + '"'), r)
                    .then(function (t) {
                      1 <= t.length ? e() : setTimeout(i, 25);
                    }, t);
            })();
          });
          var f = new Promise(function (e, t) {
            d = setTimeout(function () {
              t(Error(c + "ms timeout exceeded"));
            }, c);
          });
          Promise.race([f, p]).then(function () {
            clearTimeout(d), e(s);
          }, n);
        } else {
          var m = function () {
            function a() {
              var t;
              (t =
                (-1 != m && -1 != y) ||
                (-1 != m && -1 != _) ||
                (-1 != y && -1 != _)) &&
                ((t = m != y && m != _ && y != _) ||
                  (null === u &&
                    ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )),
                    (u =
                      !!t &&
                      (536 > parseInt(t[1], 10) ||
                        (536 === parseInt(t[1], 10) &&
                          11 >= parseInt(t[2], 10))))),
                  (t =
                    u &&
                    ((m == v && y == v && _ == v) ||
                      (m == b && y == b && _ == b) ||
                      (m == w && y == w && _ == w)))),
                (t = !t)),
                t &&
                  (x.parentNode && x.parentNode.removeChild(x),
                  clearTimeout(d),
                  e(s));
            }
            var h = new t(r),
              p = new t(r),
              f = new t(r),
              m = -1,
              y = -1,
              _ = -1,
              v = -1,
              b = -1,
              w = -1,
              x = document.createElement("div");
            (x.dir = "ltr"),
              i(h, l(s, "sans-serif")),
              i(p, l(s, "serif")),
              i(f, l(s, "monospace")),
              x.appendChild(h.a),
              x.appendChild(p.a),
              x.appendChild(f.a),
              document.body.appendChild(x),
              (v = h.a.offsetWidth),
              (b = p.a.offsetWidth),
              (w = f.a.offsetWidth),
              (function e() {
                if (new Date().getTime() - g >= c)
                  x.parentNode && x.parentNode.removeChild(x),
                    n(Error(c + "ms timeout exceeded"));
                else {
                  var t = document.hidden;
                  (!0 !== t && void 0 !== t) ||
                    ((m = h.a.offsetWidth),
                    (y = p.a.offsetWidth),
                    (_ = f.a.offsetWidth),
                    a()),
                    (d = setTimeout(e, 50));
                }
              })(),
              o(h, function (e) {
                (m = e), a();
              }),
              i(h, l(s, '"' + s.family + '",sans-serif')),
              o(p, function (e) {
                (y = e), a();
              }),
              i(p, l(s, '"' + s.family + '",serif')),
              o(f, function (e) {
                (_ = e), a();
              }),
              i(f, l(s, '"' + s.family + '",monospace'));
          };
          document.body
            ? m()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function e() {
                document.removeEventListener("DOMContentLoaded", e), m();
              })
            : document.attachEvent("onreadystatechange", function e() {
                ("interactive" != document.readyState &&
                  "complete" != document.readyState) ||
                  (document.detachEvent("onreadystatechange", e), m());
              });
        }
      });
    }),
      "object" == typeof module
        ? (module.exports = s)
        : ((window.FontFaceObserver = s),
          (window.FontFaceObserver.prototype.load = s.prototype.load));
  })(),
  (function (e) {
    if (
      ((Number.prototype.map = function (e, t, i, n) {
        return i + ((this - e) / (t - e)) * (n - i);
      }),
      (Number.prototype.limit = function (e, t) {
        return Math.min(t, Math.max(e, this));
      }),
      (Number.prototype.round = function (e) {
        return (e = Math.pow(10, e || 0)), Math.round(this * e) / e;
      }),
      (Number.prototype.floor = function () {
        return Math.floor(this);
      }),
      (Number.prototype.ceil = function () {
        return Math.ceil(this);
      }),
      (Number.prototype.toInt = function () {
        return 0 | this;
      }),
      (Number.prototype.toRad = function () {
        return (this / 180) * Math.PI;
      }),
      (Number.prototype.toDeg = function () {
        return (180 * this) / Math.PI;
      }),
      (Array.prototype.erase = function (e) {
        for (var t = this.length; t--; ) this[t] === e && this.splice(t, 1);
        return this;
      }),
      (Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
      }),
      (Function.prototype.bind =
        Function.prototype.bind ||
        function (e) {
          if ("function" != typeof this)
            throw new TypeError(
              "Function.prototype.bind - what is trying to be bound is not callable"
            );
          var t = Array.prototype.slice.call(arguments, 1),
            i = this,
            n = function () {},
            o = function () {
              return i.apply(
                this instanceof n && e ? this : e,
                t.concat(Array.prototype.slice.call(arguments))
              );
            };
          return (n.prototype = this.prototype), (o.prototype = new n()), o;
        }),
      (e.ig = {
        game: null,
        debug: !0,
        version: "1.23",
        global: e,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: e.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function (e) {
          return "#" == e.charAt(0)
            ? document.getElementById(e.substr(1))
            : document.getElementsByTagName(e);
        },
        $new: function (e) {
          return document.createElement(e);
        },
        copy: function (e) {
          if (
            !e ||
            "object" != typeof e ||
            e instanceof HTMLElement ||
            e instanceof ig.Class
          )
            return e;
          if (e instanceof Array)
            for (var t = [], i = 0, n = e.length; i < n; i++)
              t[i] = ig.copy(e[i]);
          else for (i in ((t = {}), e)) t[i] = ig.copy(e[i]);
          return t;
        },
        merge: function (e, t) {
          for (var i in t) {
            var n = t[i];
            "object" != typeof n ||
            n instanceof HTMLElement ||
            n instanceof ig.Class ||
            null === n
              ? (e[i] = n)
              : ((e[i] && "object" == typeof e[i]) ||
                  (e[i] = n instanceof Array ? [] : {}),
                ig.merge(e[i], n));
          }
          return e;
        },
        ksort: function (e) {
          if (!e || "object" != typeof e) return [];
          var t,
            i = [],
            n = [];
          for (t in e) i.push(t);
          for (i.sort(), t = 0; t < i.length; t++) n.push(e[i[t]]);
          return n;
        },
        setVendorAttribute: function (e, t, i) {
          var n = t.charAt(0).toUpperCase() + t.substr(1);
          e[t] =
            void 0 !== e.imageSmoothingEnabled
              ? (e["ms" + n] = e["moz" + n] = e["o" + n] = i)
              : (e["ms" + n] = e["moz" + n] = e["webkit" + n] = e["o" + n] = i);
        },
        getVendorAttribute: function (e, t) {
          var i = t.charAt(0).toUpperCase() + t.substr(1);
          return void 0 !== e.imageSmoothingEnabled
            ? e[t] || e["ms" + i] || e["moz" + i] || e["o" + i]
            : e[t] ||
                e["ms" + i] ||
                e["moz" + i] ||
                e["webkit" + i] ||
                e["o" + i];
        },
        normalizeVendorAttribute: function (e, t) {
          var i = ig.getVendorAttribute(e, t);
          !e[t] && i && (e[t] = i);
        },
        getImagePixels: function (e, t, i, n, o) {
          var s = ig.$new("canvas");
          (s.width = e.width), (s.height = e.height);
          var a = s.getContext("2d");
          ig.System.SCALE.CRISP(s, a);
          var r = ig.getVendorAttribute(a, "backingStorePixelRatio") || 1;
          ig.normalizeVendorAttribute(a, "getImageDataHD");
          var l = e.width / r,
            u = e.height / r;
          return (
            (s.width = Math.ceil(l)),
            (s.height = Math.ceil(u)),
            a.drawImage(e, 0, 0, l, u),
            1 === r ? a.getImageData(t, i, n, o) : a.getImageDataHD(t, i, n, o)
          );
        },
        module: function (e) {
          if (ig._current)
            throw "Module '" + ig._current.name + "' defines nothing";
          if (ig.modules[e] && ig.modules[e].body)
            throw "Module '" + e + "' is already defined";
          return (
            (ig._current = { name: e, requires: [], loaded: !1, body: null }),
            (ig.modules[e] = ig._current),
            ig._loadQueue.push(ig._current),
            ig
          );
        },
        requires: function () {
          return (
            (ig._current.requires = Array.prototype.slice.call(arguments)), ig
          );
        },
        defines: function (e) {
          (ig._current.body = e), (ig._current = null), ig._initDOMReady();
        },
        addResource: function (e) {
          ig.resources.push(e);
        },
        setNocache: function (e) {
          ig.nocache = e ? "?" + Date.now() : "";
        },
        log: function () {},
        assert: function () {},
        show: function () {},
        mark: function () {},
        _loadScript: function (e, t) {
          (ig.modules[e] = { name: e, requires: [], loaded: !1, body: null }),
            ig._waitForOnload++;
          var i =
              ig.prefix + ig.lib + e.replace(/\./g, "/") + ".js" + ig.nocache,
            n = ig.$new("script");
          (n.type = "text/javascript"),
            (n.src = i),
            (n.onload = function () {
              ig._waitForOnload--, ig._execModules();
            }),
            (n.onerror = function () {
              throw (
                "Failed to load module " +
                e +
                " at " +
                i +
                " required from " +
                t
              );
            }),
            ig.$("head")[0].appendChild(n);
        },
        _execModules: function () {
          for (var e = !1, t = 0; t < ig._loadQueue.length; t++) {
            for (
              var i = ig._loadQueue[t], n = !0, o = 0;
              o < i.requires.length;
              o++
            ) {
              var s = i.requires[o];
              ig.modules[s]
                ? ig.modules[s].loaded || (n = !1)
                : ((n = !1), ig._loadScript(s, i.name));
            }
            n &&
              i.body &&
              (ig._loadQueue.splice(t, 1),
              (i.loaded = !0),
              i.body(),
              (e = !0),
              t--);
          }
          if (e) ig._execModules();
          else if (
            !ig.baked &&
            0 == ig._waitForOnload &&
            0 != ig._loadQueue.length
          ) {
            for (e = [], t = 0; t < ig._loadQueue.length; t++) {
              for (
                n = [], s = ig._loadQueue[t].requires, o = 0;
                o < s.length;
                o++
              )
                (!(i = ig.modules[s[o]]) || !i.loaded) && n.push(s[o]);
              e.push(
                ig._loadQueue[t].name + " (requires: " + n.join(", ") + ")"
              );
            }
            throw (
              "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
              e.join("\n")
            );
          }
        },
        _DOMReady: function () {
          if (!ig.modules["dom.ready"].loaded) {
            if (!document.body) return setTimeout(ig._DOMReady, 13);
            (ig.modules["dom.ready"].loaded = !0),
              ig._waitForOnload--,
              ig._execModules();
          }
          return 0;
        },
        _boot: function () {
          document.location.href.match(/\?nocache/) && ig.setNocache(!0),
            (ig.ua.pixelRatio = e.devicePixelRatio || 1),
            (ig.ua.viewport = { width: e.innerWidth, height: e.innerHeight }),
            (ig.ua.screen = {
              width: e.screen.availWidth * ig.ua.pixelRatio,
              height: e.screen.availHeight * ig.ua.pixelRatio,
            }),
            (ig.ua.iPhone = /iPhone/i.test(navigator.userAgent)),
            (ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio),
            (ig.ua.iPad = /iPad/i.test(navigator.userAgent)),
            (ig.ua.android = /android/i.test(navigator.userAgent)),
            (ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent)),
            (ig.ua.is_uiwebview =
              /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                navigator.userAgent
              )),
            (ig.ua.is_safari_or_uiwebview =
              /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent)),
            (ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad),
            (ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent)),
            (ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag),
            (ig.ua.iOSgt5 =
              ig.ua.iOS &&
              5 <
                parseInt(
                  navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]
                )),
            (ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent)),
            (ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent)),
            (ig.ua.Kindle = /Silk/i.test(navigator.userAgent)),
            (ig.ua.touchDevice =
              "ontouchstart" in e || e.navigator.msMaxTouchPoints),
            (ig.ua.mobile =
              ig.ua.iOS ||
              ig.ua.android ||
              ig.ua.iOS6 ||
              ig.ua.winPhone ||
              ig.ua.Kindle ||
              /mobile/i.test(navigator.userAgent));
        },
        _initDOMReady: function () {
          ig.modules["dom.ready"]
            ? ig._execModules()
            : (ig._boot(),
              (ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null,
              }),
              ig._waitForOnload++,
              ig._DOMReady());
        },
      }),
      ig.normalizeVendorAttribute(e, "requestAnimationFrame"),
      e.requestAnimationFrame)
    ) {
      var t = 1,
        i = {};
      (e.ig.setAnimation = function (n) {
        var o = t++;
        i[o] = !0;
        var s = function () {
          i[o] && (e.requestAnimationFrame(s), n());
        };
        return e.requestAnimationFrame(s), o;
      }),
        (e.ig.clearAnimation = function (e) {
          delete i[e];
        });
    } else
      (e.ig.setAnimation = function (t) {
        return e.setInterval(t, 1e3 / 60);
      }),
        (e.ig.clearAnimation = function (t) {
          e.clearInterval(t);
        });
    var n = !1,
      o = /xyz/.test(function () {
        xyz;
      })
        ? /\bparent\b/
        : /.*/,
      s = 0;
    e.ig.Class = function () {};
    var a = function (e) {
      var t,
        i = this.prototype,
        n = {};
      for (t in e)
        "function" == typeof e[t] && "function" == typeof i[t] && o.test(e[t])
          ? ((n[t] = i[t]),
            (i[t] = (function (e, t) {
              return function () {
                var i = this.parent;
                this.parent = n[e];
                var o = t.apply(this, arguments);
                return (this.parent = i), o;
              };
            })(t, e[t])))
          : (i[t] = e[t]);
    };
    (e.ig.Class.extend = function (t) {
      function i() {
        if (!n) {
          if (this.staticInstantiate) {
            var e = this.staticInstantiate.apply(this, arguments);
            if (e) return e;
          }
          for (var t in this)
            "object" == typeof this[t] && (this[t] = ig.copy(this[t]));
          this.init && this.init.apply(this, arguments);
        }
        return this;
      }
      var r = this.prototype;
      n = !0;
      var l = new this();
      for (var u in ((n = !1), t))
        l[u] =
          "function" == typeof t[u] && "function" == typeof r[u] && o.test(t[u])
            ? (function (e, t) {
                return function () {
                  var i = this.parent;
                  this.parent = r[e];
                  var n = t.apply(this, arguments);
                  return (this.parent = i), n;
                };
              })(u, t[u])
            : t[u];
      return (
        (i.prototype = l),
        (i.prototype.constructor = i),
        (i.extend = e.ig.Class.extend),
        (i.inject = a),
        (i.classId = l.classId = ++s),
        i
      );
    }),
      e.ImpactMixin && ig.merge(ig, e.ImpactMixin);
  })(window),
  (ig.baked = !0),
  ig.module("impact.image").defines(function () {
    (ig.Image = ig.Class.extend({
      data: null,
      width: 0,
      height: 0,
      loaded: !1,
      failed: !1,
      loadCallback: null,
      path: "",
      staticInstantiate: function (e) {
        return ig.Image.cache[e] || null;
      },
      init: function (e) {
        (this.path = e), this.load();
      },
      load: function (e) {
        this.loaded
          ? e && e(this.path, !0)
          : (!this.loaded && ig.ready
              ? ((this.loadCallback = e || null),
                (this.data = new Image()),
                (this.data.onload = this.onload.bind(this)),
                (this.data.onerror = this.onerror.bind(this)),
                (this.data.src = ig.prefix + this.path + ig.nocache))
              : ig.addResource(this),
            (ig.Image.cache[this.path] = this));
      },
      reload: function () {
        (this.loaded = !1),
          (this.data = new Image()),
          (this.data.onload = this.onload.bind(this)),
          (this.data.src = this.path + "?" + Date.now());
      },
      onload: function () {
        (this.width = this.data.width),
          (this.height = this.data.height),
          (this.loaded = !0),
          1 != ig.system.scale && this.resize(ig.system.scale),
          this.loadCallback && this.loadCallback(this.path, !0);
      },
      onerror: function () {
        (this.failed = !0),
          this.loadCallback && this.loadCallback(this.path, !1);
      },
      resize: function (e) {
        var t = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
          i = this.width * e,
          n = this.height * e,
          o = ig.$new("canvas");
        (o.width = i), (o.height = n);
        for (
          var s = o.getContext("2d"), a = s.getImageData(0, 0, i, n), r = 0;
          r < n;
          r++
        )
          for (var l = 0; l < i; l++) {
            var u = 4 * (Math.floor(r / e) * this.width + Math.floor(l / e)),
              h = 4 * (r * i + l);
            (a.data[h] = t.data[u]),
              (a.data[h + 1] = t.data[u + 1]),
              (a.data[h + 2] = t.data[u + 2]),
              (a.data[h + 3] = t.data[u + 3]);
          }
        s.putImageData(a, 0, 0), (this.data = o);
      },
      draw: function (e, t, i, n, o, s) {
        if (this.loaded) {
          var a = ig.system.scale;
          (o = (o || this.width) * a),
            (s = (s || this.height) * a),
            ig.system.context.drawImage(
              this.data,
              i ? i * a : 0,
              n ? n * a : 0,
              o,
              s,
              ig.system.getDrawPos(e),
              ig.system.getDrawPos(t),
              o,
              s
            ),
            ig.Image.drawCount++;
        }
      },
      drawTile: function (e, t, i, n, o, s, a) {
        if (
          ((o = o || n), this.loaded && !(n > this.width || o > this.height))
        ) {
          var r = ig.system.scale,
            l = Math.floor(n * r),
            u = Math.floor(o * r),
            h = s ? -1 : 1,
            d = a ? -1 : 1;
          (s || a) && (ig.system.context.save(), ig.system.context.scale(h, d)),
            ig.system.context.drawImage(
              this.data,
              (Math.floor(i * n) % this.width) * r,
              Math.floor((i * n) / this.width) * o * r,
              l,
              u,
              ig.system.getDrawPos(e) * h - (s ? l : 0),
              ig.system.getDrawPos(t) * d - (a ? u : 0),
              l,
              u
            ),
            (s || a) && ig.system.context.restore(),
            ig.Image.drawCount++;
        }
      },
    })),
      (ig.Image.drawCount = 0),
      (ig.Image.cache = {}),
      (ig.Image.reloadCache = function () {
        for (var e in ig.Image.cache) ig.Image.cache[e].reload();
      });
  }),
  (ig.baked = !0),
  ig
    .module("impact.font")
    .requires("impact.image")
    .defines(function () {
      (ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function (e) {
          this._loadMetrics(this.data), this.parent(e);
        },
        widthForString: function (e) {
          if (-1 !== e.indexOf("\n")) {
            e = e.split("\n");
            for (var t = 0, i = 0; i < e.length; i++)
              t = Math.max(t, this._widthForLine(e[i]));
            return t;
          }
          return this._widthForLine(e);
        },
        _widthForLine: function (e) {
          for (var t = 0, i = 0; i < e.length; i++)
            t +=
              this.widthMap[e.charCodeAt(i) - this.firstChar] +
              this.letterSpacing;
          return t;
        },
        heightForString: function (e) {
          return e.split("\n").length * (this.height + this.lineSpacing);
        },
        draw: function (e, t, i, n) {
          if (
            ("string" != typeof e && (e = e.toString()), -1 !== e.indexOf("\n"))
          ) {
            e = e.split("\n");
            for (
              var o = this.height + this.lineSpacing, s = 0;
              s < e.length;
              s++
            )
              this.draw(e[s], t, i + s * o, n);
          } else {
            for (
              (n != ig.Font.ALIGN.RIGHT && n != ig.Font.ALIGN.CENTER) ||
                ((s = this._widthForLine(e)),
                (t -= n == ig.Font.ALIGN.CENTER ? s / 2 : s)),
                1 !== this.alpha &&
                  (ig.system.context.globalAlpha = this.alpha),
                s = 0;
              s < e.length;
              s++
            )
              (n = e.charCodeAt(s)),
                (t += this._drawChar(n - this.firstChar, t, i));
            1 !== this.alpha && (ig.system.context.globalAlpha = 1),
              (ig.Image.drawCount += e.length);
          }
        },
        _drawChar: function (e, t, i) {
          if (!this.loaded || 0 > e || e >= this.indices.length) return 0;
          var n = ig.system.scale,
            o = this.widthMap[e] * n,
            s = (this.height - 2) * n;
          return (
            ig.system.context.drawImage(
              this.data,
              this.indices[e] * n,
              0,
              o,
              s,
              ig.system.getDrawPos(t),
              ig.system.getDrawPos(i),
              o,
              s
            ),
            this.widthMap[e] + this.letterSpacing
          );
        },
        _loadMetrics: function (e) {
          (this.height = e.height - 1),
            (this.widthMap = []),
            (this.indices = []);
          for (
            var t = ig.getImagePixels(e, 0, e.height - 1, e.width, 1),
              i = 0,
              n = 0;
            n < e.width;
            n++
          ) {
            var o = 4 * n + 3;
            127 < t.data[o]
              ? i++
              : 128 > t.data[o] &&
                i &&
                (this.widthMap.push(i), this.indices.push(n - i), (i = 0));
          }
          this.widthMap.push(i), this.indices.push(n - i);
        },
      })),
        (ig.Font.ALIGN = { LEFT: 0, RIGHT: 1, CENTER: 2 });
    }),
  (ig.baked = !0),
  ig.module("impact.sound").defines(function () {
    (ig.SoundManager = ig.Class.extend({
      clips: {},
      volume: 1,
      format: null,
      init: function () {
        if (ig.Sound.enabled && window.Audio) {
          for (var e = new Audio(), t = 0; t < ig.Sound.use.length; t++) {
            var i = ig.Sound.use[t];
            if (e.canPlayType(i.mime)) {
              this.format = i;
              break;
            }
          }
          this.format || (ig.Sound.enabled = !1);
        } else ig.Sound.enabled = !1;
      },
      load: function (e, t, i) {
        var n = ig.prefix + e.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
        if (this.clips[e]) {
          if (t && this.clips[e].length < ig.Sound.channels)
            for (t = this.clips[e].length; t < ig.Sound.channels; t++) {
              var o = new Audio(n);
              o.load(), this.clips[e].push(o);
            }
          return this.clips[e][0];
        }
        var s = new Audio(n);
        if (
          (i &&
            (s.addEventListener(
              "canplaythrough",
              function t(n) {
                s.removeEventListener("canplaythrough", t, !1), i(e, !0, n);
              },
              !1
            ),
            s.addEventListener(
              "error",
              function (t) {
                i(e, !1, t);
              },
              !1
            )),
          (s.preload = "auto"),
          s.load(),
          (this.clips[e] = [s]),
          t)
        )
          for (t = 1; t < ig.Sound.channels; t++)
            (o = new Audio(n)).load(), this.clips[e].push(o);
        return s;
      },
      get: function (e) {
        e = this.clips[e];
        for (var t, i = 0; (t = e[i++]); )
          if (t.paused || t.ended) return t.ended && (t.currentTime = 0), t;
        return e[0].pause(), (e[0].currentTime = 0), e[0];
      },
    })),
      (ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
          (this._endedCallbackBound = this._endedCallback.bind(this)),
            Object.defineProperty
              ? (Object.defineProperty(this, "volume", {
                  get: this.getVolume.bind(this),
                  set: this.setVolume.bind(this),
                }),
                Object.defineProperty(this, "loop", {
                  get: this.getLooping.bind(this),
                  set: this.setLooping.bind(this),
                }))
              : this.__defineGetter__ &&
                (this.__defineGetter__("volume", this.getVolume.bind(this)),
                this.__defineSetter__("volume", this.setVolume.bind(this)),
                this.__defineGetter__("loop", this.getLooping.bind(this)),
                this.__defineSetter__("loop", this.setLooping.bind(this)));
        },
        add: function (e, t) {
          if (ig.Sound.enabled) {
            var i = ig.soundManager.load(
              e instanceof ig.Sound ? e.path : e,
              !1
            );
            (i.loop = this._loop),
              (i.volume = this._volume),
              i.addEventListener("ended", this._endedCallbackBound, !1),
              this.tracks.push(i),
              t && (this.namedTracks[t] = i),
              this.currentTrack || (this.currentTrack = i);
          }
        },
        next: function () {
          this.tracks.length &&
            (this.stop(),
            (this.currentIndex = this.random
              ? Math.floor(Math.random() * this.tracks.length)
              : (this.currentIndex + 1) % this.tracks.length),
            (this.currentTrack = this.tracks[this.currentIndex]),
            this.play());
        },
        pause: function () {
          this.currentTrack && this.currentTrack.pause();
        },
        stop: function () {
          this.currentTrack &&
            (this.currentTrack.pause(), (this.currentTrack.currentTime = 0));
        },
        play: function (e) {
          if (e && this.namedTracks[e])
            (e = this.namedTracks[e]) != this.currentTrack &&
              (this.stop(), (this.currentTrack = e));
          else if (!this.currentTrack) return;
          this.currentTrack.play();
        },
        getLooping: function () {
          return this._loop;
        },
        setLooping: function (e) {
          for (var t in ((this._loop = e), this.tracks))
            this.tracks[t].loop = e;
        },
        getVolume: function () {
          return this._volume;
        },
        setVolume: function (e) {
          for (var t in ((this._volume = e.limit(0, 1)), this.tracks))
            this.tracks[t].volume = this._volume;
        },
        fadeOut: function (e) {
          this.currentTrack &&
            (clearInterval(this._fadeInterval),
            (this.fadeTimer = new ig.Timer(e)),
            (this._fadeInterval = setInterval(this._fadeStep.bind(this), 50)));
        },
        _fadeStep: function () {
          var e =
            this.fadeTimer
              .delta()
              .map(-this.fadeTimer.target, 0, 1, 0)
              .limit(0, 1) * this._volume;
          0.01 >= e
            ? (this.stop(),
              (this.currentTrack.volume = this._volume),
              clearInterval(this._fadeInterval))
            : (this.currentTrack.volume = e);
        },
        _endedCallback: function () {
          this._loop ? this.play() : this.next();
        },
      })),
      (ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function (e, t) {
          (this.path = e), (this.multiChannel = !1 !== t), this.load();
        },
        load: function (e) {
          ig.Sound.enabled
            ? ig.ready
              ? ig.soundManager.load(this.path, this.multiChannel, e)
              : ig.addResource(this)
            : e && e(this.path, !0);
        },
        play: function () {
          ig.Sound.enabled &&
            ((this.currentClip = ig.soundManager.get(this.path)),
            (this.currentClip.volume = ig.soundManager.volume * this.volume),
            this.currentClip.play());
        },
        stop: function () {
          this.currentClip &&
            (this.currentClip.pause(), (this.currentClip.currentTime = 0));
        },
      })),
      (ig.Sound.FORMAT = {
        MP3: { ext: "mp3", mime: "audio/mpeg" },
        M4A: { ext: "m4a", mime: "audio/mp4; codecs=mp4a" },
        OGG: { ext: "ogg", mime: "audio/ogg; codecs=vorbis" },
        WEBM: { ext: "webm", mime: "audio/webm; codecs=vorbis" },
        CAF: { ext: "caf", mime: "audio/x-caf" },
      }),
      (ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3]),
      (ig.Sound.channels = 4),
      (ig.Sound.enabled = !0);
  }),
  (ig.baked = !0),
  ig
    .module("impact.loader")
    .requires("impact.image", "impact.font", "impact.sound")
    .defines(function () {
      ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function (e, t) {
          (this.gameClass = e),
            (this.resources = t),
            (this._loadCallbackBound = this._loadCallback.bind(this));
          for (var i = 0; i < this.resources.length; i++)
            this._unloaded.push(this.resources[i].path);
        },
        load: function () {
          if ((ig.system.clear("#000"), this.resources.length)) {
            for (var e = 0; e < this.resources.length; e++)
              this.loadResource(this.resources[e]);
            this._intervalId = setInterval(this.draw.bind(this), 16);
          } else this.end();
        },
        loadResource: function (e) {
          e.load(this._loadCallbackBound);
        },
        end: function () {
          this.done || ((this.done = !0), clearInterval(this._intervalId));
        },
        draw: function () {},
        _loadCallback: function (e, t) {
          if (!t) throw "Failed to load resource: " + e;
          this._unloaded.erase(e),
            (this.status = 1 - this._unloaded.length / this.resources.length),
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250);
        },
      });
    }),
  (ig.baked = !0),
  ig.module("impact.timer").defines(function () {
    (ig.Timer = ig.Class.extend({
      target: 0,
      base: 0,
      last: 0,
      pausedAt: 0,
      init: function (e) {
        (this.last = this.base = ig.Timer.time), (this.target = e || 0);
      },
      set: function (e) {
        (this.target = e || 0),
          (this.base = ig.Timer.time),
          (this.pausedAt = 0);
      },
      reset: function () {
        (this.base = ig.Timer.time), (this.pausedAt = 0);
      },
      tick: function () {
        var e = ig.Timer.time - this.last;
        return (this.last = ig.Timer.time), this.pausedAt ? 0 : e;
      },
      delta: function () {
        return (this.pausedAt || ig.Timer.time) - this.base - this.target;
      },
      pause: function () {
        this.pausedAt || (this.pausedAt = ig.Timer.time);
      },
      unpause: function () {
        this.pausedAt &&
          ((this.base += ig.Timer.time - this.pausedAt), (this.pausedAt = 0));
      },
    })),
      (ig.Timer._last = 0),
      (ig.Timer.time = Number.MIN_VALUE),
      (ig.Timer.timeScale = 1),
      (ig.Timer.maxStep = 0.05),
      (ig.Timer.step = function () {
        var e = Date.now();
        (ig.Timer.time +=
          Math.min((e - ig.Timer._last) / 1e3, ig.Timer.maxStep) *
          ig.Timer.timeScale),
          (ig.Timer._last = e);
      });
  }),
  (ig.baked = !0),
  ig
    .module("impact.system")
    .requires("impact.timer", "impact.image")
    .defines(function () {
      (ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (e, t, i, n, o) {
          (this.fps = t),
            (this.clock = new ig.Timer()),
            (this.canvas = ig.$(e)),
            this.resize(i, n, o),
            (this.context = this.canvas.getContext("2d")),
            (this.getDrawPos = ig.System.drawMode),
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP),
            ig.System.scaleMode(this.canvas, this.context);
        },
        resize: function (e, t, i) {
          (this.width = e),
            (this.height = t),
            (this.scale = i || this.scale),
            (this.realWidth = this.width * this.scale),
            (this.realHeight = this.height * this.scale),
            (this.canvas.width = this.realWidth),
            (this.canvas.height = this.realHeight);
        },
        setGame: function (e) {
          this.running ? (this.newGameClass = e) : this.setGameNow(e);
        },
        setGameNow: function (e) {
          (ig.game = new e()), ig.system.setDelegate(ig.game);
        },
        setDelegate: function (e) {
          if ("function" != typeof e.run)
            throw "System.setDelegate: No run() function in object";
          (this.delegate = e), this.startRunLoop();
        },
        stopRunLoop: function () {
          ig.clearAnimation(this.animationId), (this.running = !1);
        },
        startRunLoop: function () {
          this.stopRunLoop(),
            (this.animationId = ig.setAnimation(this.run.bind(this))),
            (this.running = !0);
        },
        clear: function (e) {
          (this.context.fillStyle = e),
            this.context.fillRect(0, 0, this.realWidth, this.realHeight);
        },
        run: function () {
          ig.Timer.step(),
            (this.tick = this.clock.tick()),
            this.delegate.run(),
            ig.input.clearPressed(),
            this.newGameClass &&
              (this.setGameNow(this.newGameClass), (this.newGameClass = null));
        },
        getDrawPos: null,
      })),
        (ig.System.DRAW = {
          AUTHENTIC: function (e) {
            return Math.round(e) * this.scale;
          },
          SMOOTH: function (e) {
            return Math.round(e * this.scale);
          },
          SUBPIXEL: function (e) {
            return e * this.scale;
          },
        }),
        (ig.System.drawMode = ig.System.DRAW.SMOOTH),
        (ig.System.SCALE = {
          CRISP: function (e, t) {
            ig.setVendorAttribute(t, "imageSmoothingEnabled", !1),
              (e.style.imageRendering = "-moz-crisp-edges"),
              (e.style.imageRendering = "-o-crisp-edges"),
              (e.style.imageRendering = "-webkit-optimize-contrast"),
              (e.style.imageRendering = "crisp-edges"),
              (e.style.msInterpolationMode = "nearest-neighbor");
          },
          SMOOTH: function (e, t) {
            ig.setVendorAttribute(t, "imageSmoothingEnabled", !0),
              (e.style.imageRendering = ""),
              (e.style.msInterpolationMode = "");
          },
        }),
        (ig.System.scaleMode = ig.System.SCALE.SMOOTH);
    }),
  (ig.baked = !0),
  ig.module("impact.input").defines(function () {
    (ig.KEY = {
      MOUSE1: -1,
      MOUSE2: -3,
      MWHEEL_UP: -4,
      MWHEEL_DOWN: -5,
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      PAUSE: 19,
      CAPS: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      INSERT: 45,
      DELETE: 46,
      _0: 48,
      _1: 49,
      _2: 50,
      _3: 51,
      _4: 52,
      _5: 53,
      _6: 54,
      _7: 55,
      _8: 56,
      _9: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      NUMPAD_0: 96,
      NUMPAD_1: 97,
      NUMPAD_2: 98,
      NUMPAD_3: 99,
      NUMPAD_4: 100,
      NUMPAD_5: 101,
      NUMPAD_6: 102,
      NUMPAD_7: 103,
      NUMPAD_8: 104,
      NUMPAD_9: 105,
      MULTIPLY: 106,
      ADD: 107,
      SUBSTRACT: 109,
      DECIMAL: 110,
      DIVIDE: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PLUS: 187,
      COMMA: 188,
      MINUS: 189,
      PERIOD: 190,
    }),
      (ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: { x: 0, y: 0 },
        accel: { x: 0, y: 0, z: 0 },
        initMouse: function () {
          this.isUsingMouse ||
            ((this.isUsingMouse = !0),
            ig.system.canvas.addEventListener(
              "wheel",
              this.mousewheel.bind(this),
              !1
            ),
            ig.system.canvas.addEventListener(
              "contextmenu",
              this.contextmenu.bind(this),
              !1
            ),
            ig.system.canvas.addEventListener(
              "mousedown",
              this.keydown.bind(this),
              !1
            ),
            ig.system.canvas.addEventListener(
              "mouseup",
              this.keyup.bind(this),
              !1
            ),
            ig.system.canvas.addEventListener(
              "mousemove",
              this.mousemove.bind(this),
              !1
            ),
            ig.ua.touchDevice &&
              (ig.system.canvas.addEventListener(
                "touchstart",
                this.keydown.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "touchend",
                this.keyup.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "touchcancel",
                this.keyup.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "touchmove",
                this.mousemove.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "MSPointerDown",
                this.keydown.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "MSPointerUp",
                this.keyup.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "MSPointerMove",
                this.mousemove.bind(this),
                !1
              ),
              (ig.system.canvas.style.msTouchAction = "none")));
        },
        initKeyboard: function () {
          this.isUsingKeyboard ||
            ((this.isUsingKeyboard = !0),
            window.addEventListener("keydown", this.keydown.bind(this), !1),
            window.addEventListener("keyup", this.keyup.bind(this), !1));
        },
        initAccelerometer: function () {
          this.isUsingAccelerometer ||
            ((this.isUsingAccelerometer = !0),
            window.addEventListener(
              "devicemotion",
              this.devicemotion.bind(this),
              !1
            ));
        },
        mousewheel: function (e) {
          var t =
            this.bindings[0 > e.deltaY ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
          t &&
            ((this.actions[t] = !0),
            (this.presses[t] = !0),
            (this.delayedKeyup[t] = !0),
            e.stopPropagation(),
            e.preventDefault());
        },
        mousemove: function (e) {
          var t =
              ig.system.scale *
              ((ig.system.canvas.offsetWidth || ig.system.realWidth) /
                ig.system.realWidth),
            i = { left: 0, top: 0 };
          ig.system.canvas.getBoundingClientRect &&
            (i = ig.system.canvas.getBoundingClientRect()),
            (e = e.touches ? e.touches[0] : e),
            (this.mouse.x = (e.clientX - i.left) / t),
            (this.mouse.y = (e.clientY - i.top) / t);
        },
        contextmenu: function (e) {
          this.bindings[ig.KEY.MOUSE2] &&
            (e.stopPropagation(), e.preventDefault());
        },
        keydown: function (e) {
          var t = e.target.tagName;
          "INPUT" != t &&
            "TEXTAREA" != t &&
            (0 >
              (t =
                "keydown" == e.type
                  ? e.keyCode
                  : 2 == e.button
                  ? ig.KEY.MOUSE2
                  : ig.KEY.MOUSE1) &&
              !ig.ua.mobile &&
              window.focus(),
            ("touchstart" == e.type || "mousedown" == e.type) &&
              this.mousemove(e),
            (t = this.bindings[t]) &&
              ((this.actions[t] = !0),
              this.locks[t] || ((this.presses[t] = !0), (this.locks[t] = !0)),
              e.preventDefault()));
        },
        keyup: function (e) {
          var t = e.target.tagName;
          "INPUT" != t &&
            "TEXTAREA" != t &&
            (t =
              this.bindings[
                "keyup" == e.type
                  ? e.keyCode
                  : 2 == e.button
                  ? ig.KEY.MOUSE2
                  : ig.KEY.MOUSE1
              ]) &&
            ((this.delayedKeyup[t] = !0), e.preventDefault());
        },
        devicemotion: function (e) {
          this.accel = e.accelerationIncludingGravity;
        },
        bind: function (e, t) {
          0 > e ? this.initMouse() : 0 < e && this.initKeyboard(),
            (this.bindings[e] = t);
        },
        bindTouch: function (e, t) {
          var i = ig.$(e),
            n = this;
          i.addEventListener(
            "touchstart",
            function (e) {
              n.touchStart(e, t);
            },
            !1
          ),
            i.addEventListener(
              "touchend",
              function (e) {
                n.touchEnd(e, t);
              },
              !1
            ),
            i.addEventListener(
              "MSPointerDown",
              function (e) {
                n.touchStart(e, t);
              },
              !1
            ),
            i.addEventListener(
              "MSPointerUp",
              function (e) {
                n.touchEnd(e, t);
              },
              !1
            );
        },
        unbind: function (e) {
          (this.delayedKeyup[this.bindings[e]] = !0), (this.bindings[e] = null);
        },
        unbindAll: function () {
          (this.bindings = {}),
            (this.actions = {}),
            (this.presses = {}),
            (this.locks = {}),
            (this.delayedKeyup = {});
        },
        state: function (e) {
          return this.actions[e];
        },
        pressed: function (e) {
          return this.presses[e];
        },
        released: function (e) {
          return !!this.delayedKeyup[e];
        },
        clearPressed: function () {
          for (var e in this.delayedKeyup)
            (this.actions[e] = !1), (this.locks[e] = !1);
          (this.delayedKeyup = {}), (this.presses = {});
        },
        touchStart: function (e, t) {
          return (
            (this.actions[t] = !0),
            (this.presses[t] = !0),
            e.stopPropagation(),
            e.preventDefault(),
            !1
          );
        },
        touchEnd: function (e, t) {
          return (
            (this.delayedKeyup[t] = !0),
            e.stopPropagation(),
            e.preventDefault(),
            !1
          );
        },
      }));
  }),
  (ig.baked = !0),
  ig
    .module("impact.impact")
    .requires(
      "dom.ready",
      "impact.loader",
      "impact.system",
      "impact.input",
      "impact.sound"
    )
    .defines(function () {
      ig.main = function (e, t, i, n, o, s, a) {
        (ig.system = new ig.System(e, i, n, o, s || 1)),
          (ig.input = new ig.Input()),
          (ig.soundManager = new ig.SoundManager()),
          (ig.music = new ig.Music()),
          (ig.ready = !0),
          new (a || ig.Loader)(t, ig.resources).load();
      };
    }),
  (ig.baked = !0),
  ig
    .module("impact.animation")
    .requires("impact.timer", "impact.image")
    .defines(function () {
      (ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function (e, t, i) {
          (this.width = t), (this.height = i), (this.image = new ig.Image(e));
        },
      })),
        (ig.Animation = ig.Class.extend({
          sheet: null,
          timer: null,
          sequence: [],
          flip: { x: !1, y: !1 },
          pivot: { x: 0, y: 0 },
          frame: 0,
          tile: 0,
          loopCount: 0,
          alpha: 1,
          angle: 0,
          init: function (e, t, i, n) {
            (this.sheet = e),
              (this.pivot = { x: e.width / 2, y: e.height / 2 }),
              (this.timer = new ig.Timer()),
              (this.frameTime = t),
              (this.sequence = i),
              (this.stop = !!n),
              (this.tile = this.sequence[0]);
          },
          rewind: function () {
            return (
              this.timer.set(),
              (this.frame = this.loopCount = 0),
              (this.tile = this.sequence[0]),
              this
            );
          },
          gotoFrame: function (e) {
            this.timer.set(this.frameTime * -e - 1e-4), this.update();
          },
          gotoRandomFrame: function () {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
          },
          update: function () {
            var e = Math.floor(this.timer.delta() / this.frameTime);
            (this.loopCount = Math.floor(e / this.sequence.length)),
              (this.frame =
                this.stop && 0 < this.loopCount
                  ? this.sequence.length - 1
                  : e % this.sequence.length),
              (this.tile = this.sequence[this.frame]);
          },
          draw: function (e, t) {
            var i = Math.max(this.sheet.width, this.sheet.height);
            e > ig.system.width ||
              t > ig.system.height ||
              0 > e + i ||
              0 > t + i ||
              (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha),
              0 == this.angle
                ? this.sheet.image.drawTile(
                    e,
                    t,
                    this.tile,
                    this.sheet.width,
                    this.sheet.height,
                    this.flip.x,
                    this.flip.y
                  )
                : (ig.system.context.save(),
                  ig.system.context.translate(
                    ig.system.getDrawPos(e + this.pivot.x),
                    ig.system.getDrawPos(t + this.pivot.y)
                  ),
                  ig.system.context.rotate(this.angle),
                  this.sheet.image.drawTile(
                    -this.pivot.x,
                    -this.pivot.y,
                    this.tile,
                    this.sheet.width,
                    this.sheet.height,
                    this.flip.x,
                    this.flip.y
                  ),
                  ig.system.context.restore()),
              1 != this.alpha && (ig.system.context.globalAlpha = 1));
          },
        }));
    }),
  (ig.baked = !0),
  ig
    .module("impact.entity")
    .requires("impact.animation", "impact.impact")
    .defines(function () {
      (ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: { x: 16, y: 16 },
        offset: { x: 0, y: 0 },
        pos: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        vel: { x: 0, y: 0 },
        accel: { x: 0, y: 0 },
        friction: { x: 0, y: 0 },
        maxVel: { x: 100, y: 100 },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: { min: (44).toRad(), max: (136).toRad() },
        init: function (e, t, i) {
          (this.id = ++ig.Entity._lastId),
            (this.pos.x = this.last.x = e),
            (this.pos.y = this.last.y = t),
            ig.merge(this, i);
        },
        reset: function (e, t, i) {
          var n = this.constructor.prototype;
          (this.pos.x = e),
            (this.pos.y = t),
            (this.last.x = e),
            (this.last.y = t),
            (this.vel.x = n.vel.x),
            (this.vel.y = n.vel.y),
            (this.accel.x = n.accel.x),
            (this.accel.y = n.accel.y),
            (this.health = n.health),
            (this._killed = n._killed),
            (this.standing = n.standing),
            (this.type = n.type),
            (this.checkAgainst = n.checkAgainst),
            (this.collides = n.collides),
            ig.merge(this, i);
        },
        addAnim: function (e, t, i, n) {
          if (!this.animSheet)
            throw "No animSheet to add the animation " + e + " to.";
          return (
            (t = new ig.Animation(this.animSheet, t, i, n)),
            (this.anims[e] = t),
            this.currentAnim || (this.currentAnim = t),
            t
          );
        },
        update: function () {
          (this.last.x = this.pos.x),
            (this.last.y = this.pos.y),
            (this.vel.y +=
              ig.game.gravity * ig.system.tick * this.gravityFactor),
            (this.vel.x = this.getNewVelocity(
              this.vel.x,
              this.accel.x,
              this.friction.x,
              this.maxVel.x
            )),
            (this.vel.y = this.getNewVelocity(
              this.vel.y,
              this.accel.y,
              this.friction.y,
              this.maxVel.y
            ));
          var e = ig.game.collisionMap.trace(
            this.pos.x,
            this.pos.y,
            this.vel.x * ig.system.tick,
            this.vel.y * ig.system.tick,
            this.size.x,
            this.size.y
          );
          this.handleMovementTrace(e),
            this.currentAnim && this.currentAnim.update();
        },
        getNewVelocity: function (e, t, i, n) {
          return t
            ? (e + t * ig.system.tick).limit(-n, n)
            : i
            ? 0 < e - (t = i * ig.system.tick)
              ? e - t
              : 0 > e + t
              ? e + t
              : 0
            : e.limit(-n, n);
        },
        handleMovementTrace: function (e) {
          if (
            ((this.standing = !1),
            e.collision.y &&
              (0 < this.bounciness &&
              Math.abs(this.vel.y) > this.minBounceVelocity
                ? (this.vel.y *= -this.bounciness)
                : (0 < this.vel.y && (this.standing = !0), (this.vel.y = 0))),
            e.collision.x &&
              (this.vel.x =
                0 < this.bounciness &&
                Math.abs(this.vel.x) > this.minBounceVelocity
                  ? this.vel.x * -this.bounciness
                  : 0),
            e.collision.slope)
          ) {
            var t = e.collision.slope;
            if (0 < this.bounciness) {
              var i = this.vel.x * t.nx + this.vel.y * t.ny;
              (this.vel.x = (this.vel.x - 2 * t.nx * i) * this.bounciness),
                (this.vel.y = (this.vel.y - 2 * t.ny * i) * this.bounciness);
            } else
              (i =
                (this.vel.x * t.x + this.vel.y * t.y) /
                (t.x * t.x + t.y * t.y)),
                (this.vel.x = t.x * i),
                (this.vel.y = t.y * i),
                (t = Math.atan2(t.x, t.y)) > this.slopeStanding.min &&
                  t < this.slopeStanding.max &&
                  (this.standing = !0);
          }
          this.pos = e.pos;
        },
        draw: function () {
          this.currentAnim &&
            this.currentAnim.draw(
              this.pos.x - this.offset.x - ig.game._rscreen.x,
              this.pos.y - this.offset.y - ig.game._rscreen.y
            );
        },
        kill: function () {
          ig.game.removeEntity(this);
        },
        receiveDamage: function (e) {
          (this.health -= e), 0 >= this.health && this.kill();
        },
        touches: function (e) {
          return !(
            this.pos.x >= e.pos.x + e.size.x ||
            this.pos.x + this.size.x <= e.pos.x ||
            this.pos.y >= e.pos.y + e.size.y ||
            this.pos.y + this.size.y <= e.pos.y
          );
        },
        distanceTo: function (e) {
          var t = this.pos.x + this.size.x / 2 - (e.pos.x + e.size.x / 2);
          return (
            (e = this.pos.y + this.size.y / 2 - (e.pos.y + e.size.y / 2)),
            Math.sqrt(t * t + e * e)
          );
        },
        angleTo: function (e) {
          return Math.atan2(
            e.pos.y + e.size.y / 2 - (this.pos.y + this.size.y / 2),
            e.pos.x + e.size.x / 2 - (this.pos.x + this.size.x / 2)
          );
        },
        check: function () {},
        collideWith: function () {},
        ready: function () {},
        erase: function () {},
      })),
        (ig.Entity._lastId = 0),
        (ig.Entity.COLLIDES = {
          NEVER: 0,
          LITE: 1,
          PASSIVE: 2,
          ACTIVE: 4,
          FIXED: 8,
        }),
        (ig.Entity.TYPE = { NONE: 0, A: 1, B: 2, BOTH: 3 }),
        (ig.Entity.checkPair = function (e, t) {
          e.checkAgainst & t.type && e.check(t),
            t.checkAgainst & e.type && t.check(e),
            e.collides &&
              t.collides &&
              e.collides + t.collides > ig.Entity.COLLIDES.ACTIVE &&
              ig.Entity.solveCollision(e, t);
        }),
        (ig.Entity.solveCollision = function (e, t) {
          var i = null;
          e.collides == ig.Entity.COLLIDES.LITE ||
          t.collides == ig.Entity.COLLIDES.FIXED
            ? (i = e)
            : (t.collides != ig.Entity.COLLIDES.LITE &&
                e.collides != ig.Entity.COLLIDES.FIXED) ||
              (i = t),
            e.last.x + e.size.x > t.last.x && e.last.x < t.last.x + t.size.x
              ? (e.last.y < t.last.y
                  ? ig.Entity.seperateOnYAxis(e, t, i)
                  : ig.Entity.seperateOnYAxis(t, e, i),
                e.collideWith(t, "y"),
                t.collideWith(e, "y"))
              : e.last.y + e.size.y > t.last.y &&
                e.last.y < t.last.y + t.size.y &&
                (e.last.x < t.last.x
                  ? ig.Entity.seperateOnXAxis(e, t, i)
                  : ig.Entity.seperateOnXAxis(t, e, i),
                e.collideWith(t, "x"),
                t.collideWith(e, "x"));
        }),
        (ig.Entity.seperateOnXAxis = function (e, t, i) {
          var n = e.pos.x + e.size.x - t.pos.x;
          i
            ? ((i.vel.x = -i.vel.x * i.bounciness + (e === i ? t : e).vel.x),
              (t = ig.game.collisionMap.trace(
                i.pos.x,
                i.pos.y,
                i == e ? -n : n,
                0,
                i.size.x,
                i.size.y
              )),
              (i.pos.x = t.pos.x))
            : ((i = (e.vel.x - t.vel.x) / 2),
              (e.vel.x = -i),
              (t.vel.x = i),
              (i = ig.game.collisionMap.trace(
                e.pos.x,
                e.pos.y,
                -n / 2,
                0,
                e.size.x,
                e.size.y
              )),
              (e.pos.x = Math.floor(i.pos.x)),
              (e = ig.game.collisionMap.trace(
                t.pos.x,
                t.pos.y,
                n / 2,
                0,
                t.size.x,
                t.size.y
              )),
              (t.pos.x = Math.ceil(e.pos.x)));
        }),
        (ig.Entity.seperateOnYAxis = function (e, t, i) {
          var n = e.pos.y + e.size.y - t.pos.y;
          if (i) {
            (t = e === i ? t : e),
              (i.vel.y = -i.vel.y * i.bounciness + t.vel.y);
            var o = 0;
            i == e &&
              Math.abs(i.vel.y - t.vel.y) < i.minBounceVelocity &&
              ((i.standing = !0), (o = t.vel.x * ig.system.tick)),
              (e = ig.game.collisionMap.trace(
                i.pos.x,
                i.pos.y,
                o,
                i == e ? -n : n,
                i.size.x,
                i.size.y
              )),
              (i.pos.y = e.pos.y),
              (i.pos.x = e.pos.x);
          } else
            ig.game.gravity && (t.standing || 0 < e.vel.y)
              ? ((i = ig.game.collisionMap.trace(
                  e.pos.x,
                  e.pos.y,
                  0,
                  -(e.pos.y + e.size.y - t.pos.y),
                  e.size.x,
                  e.size.y
                )),
                (e.pos.y = i.pos.y),
                0 < e.bounciness && e.vel.y > e.minBounceVelocity
                  ? (e.vel.y *= -e.bounciness)
                  : ((e.standing = !0), (e.vel.y = 0)))
              : ((i = (e.vel.y - t.vel.y) / 2),
                (e.vel.y = -i),
                (t.vel.y = i),
                (o = t.vel.x * ig.system.tick),
                (i = ig.game.collisionMap.trace(
                  e.pos.x,
                  e.pos.y,
                  o,
                  -n / 2,
                  e.size.x,
                  e.size.y
                )),
                (e.pos.y = i.pos.y),
                (e = ig.game.collisionMap.trace(
                  t.pos.x,
                  t.pos.y,
                  0,
                  n / 2,
                  t.size.x,
                  t.size.y
                )),
                (t.pos.y = e.pos.y));
        });
    }),
  (ig.baked = !0),
  ig.module("impact.map").defines(function () {
    ig.Map = ig.Class.extend({
      tilesize: 8,
      width: 1,
      height: 1,
      data: [[]],
      name: null,
      init: function (e, t) {
        (this.tilesize = e),
          (this.data = t),
          (this.height = t.length),
          (this.width = t[0].length),
          (this.pxWidth = this.width * this.tilesize),
          (this.pxHeight = this.height * this.tilesize);
      },
      getTile: function (e, t) {
        var i = Math.floor(e / this.tilesize),
          n = Math.floor(t / this.tilesize);
        return 0 <= i && i < this.width && 0 <= n && n < this.height
          ? this.data[n][i]
          : 0;
      },
      setTile: function (e, t, i) {
        (e = Math.floor(e / this.tilesize)),
          (t = Math.floor(t / this.tilesize)),
          0 <= e &&
            e < this.width &&
            0 <= t &&
            t < this.height &&
            (this.data[t][e] = i);
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("impact.collision-map")
    .requires("impact.map")
    .defines(function () {
      ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function (e, t, i) {
          for (var n in (this.parent(e, t),
          (this.tiledef = i || ig.CollisionMap.defaultTileDef),
          this.tiledef))
            n | (0 > this.lastSlope) && (this.lastSlope = 0 | n);
        },
        trace: function (e, t, i, n, o, s) {
          var a = {
              collision: { x: !1, y: !1, slope: !1 },
              pos: { x: e, y: t },
              tile: { x: 0, y: 0 },
            },
            r = Math.ceil(Math.max(Math.abs(i), Math.abs(n)) / this.tilesize);
          if (1 < r)
            for (
              var l = i / r, u = n / r, h = 0;
              h < r &&
              (l || u) &&
              (this._traceStep(a, e, t, l, u, o, s, i, n, h),
              (e = a.pos.x),
              (t = a.pos.y),
              a.collision.x && (i = l = 0),
              a.collision.y && (n = u = 0),
              !a.collision.slope);
              h++
            );
          else this._traceStep(a, e, t, i, n, o, s, i, n, 0);
          return a;
        },
        _traceStep: function (e, t, i, n, o, s, a, r, l, u) {
          (e.pos.x += n), (e.pos.y += o);
          var h = 0;
          if (n) {
            var d = 0 < n ? s : 0,
              c = 0 > n ? this.tilesize : 0,
              g =
                ((h = Math.max(Math.floor(i / this.tilesize), 0)),
                Math.min(Math.ceil((i + a) / this.tilesize), this.height));
            n = Math.floor((e.pos.x + d) / this.tilesize);
            var p = Math.floor((t + d) / this.tilesize);
            if (
              ((0 < u || n == p || 0 > p || p >= this.width) && (p = -1),
              0 <= n && n < this.width)
            )
              for (
                var f = h;
                f < g &&
                !(
                  -1 != p &&
                  ((h = this.data[f][p]),
                  1 < h &&
                    h <= this.lastSlope &&
                    this._checkTileDef(e, h, t, i, r, l, s, a, p, f))
                );
                f++
              )
                if (
                  1 == (h = this.data[f][n]) ||
                  h > this.lastSlope ||
                  (1 < h && this._checkTileDef(e, h, t, i, r, l, s, a, n, f))
                ) {
                  if (1 < h && h <= this.lastSlope && e.collision.slope) break;
                  (e.collision.x = !0),
                    (e.tile.x = h),
                    (t = e.pos.x = n * this.tilesize - d + c),
                    (r = 0);
                  break;
                }
          }
          if (
            o &&
            ((d = 0 < o ? a : 0),
            (o = 0 > o ? this.tilesize : 0),
            (h = Math.max(Math.floor(e.pos.x / this.tilesize), 0)),
            (c = Math.min(
              Math.ceil((e.pos.x + s) / this.tilesize),
              this.width
            )),
            (f = Math.floor((e.pos.y + d) / this.tilesize)),
            (g = Math.floor((i + d) / this.tilesize)),
            (0 < u || f == g || 0 > g || g >= this.height) && (g = -1),
            0 <= f && f < this.height)
          )
            for (
              n = h;
              n < c &&
              !(
                -1 != g &&
                ((h = this.data[g][n]),
                1 < h &&
                  h <= this.lastSlope &&
                  this._checkTileDef(e, h, t, i, r, l, s, a, n, g))
              );
              n++
            )
              if (
                1 == (h = this.data[f][n]) ||
                h > this.lastSlope ||
                (1 < h && this._checkTileDef(e, h, t, i, r, l, s, a, n, f))
              ) {
                if (1 < h && h <= this.lastSlope && e.collision.slope) break;
                (e.collision.y = !0),
                  (e.tile.y = h),
                  (e.pos.y = f * this.tilesize - d + o);
                break;
              }
        },
        _checkTileDef: function (e, t, i, n, o, s, a, r, l, u) {
          if (!(h = this.tiledef[t])) return !1;
          t = (h[2] - h[0]) * this.tilesize;
          var h,
            d,
            c = (h[3] - h[1]) * this.tilesize,
            g = h[4];
          return (
            (a = i + o + (0 > c ? a : 0) - (l + h[0]) * this.tilesize),
            0 <
              t * (r = n + s + (0 < t ? r : 0) - (u + h[1]) * this.tilesize) -
                c * a &&
              (0 > o * -c + s * t
                ? g
                : (h =
                    (u = c / (l = Math.sqrt(t * t + c * c))) *
                    (d = a * u + r * (l = -t / l))) *
                    h +
                    (d *= l) * d >=
                  o * o + s * s
                ? g || 0.5 > t * (r - s) - c * (a - o)
                : ((e.pos.x = i + o - h),
                  (e.pos.y = n + s - d),
                  (e.collision.slope = { x: t, y: c, nx: u, ny: l }),
                  !0))
          );
        },
      });
      var e = 1 / 3,
        t = 2 / 3;
      (ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, t, !0],
        6: [0, t, 1, e, !0],
        7: [0, e, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [t, 1, 1, 0, !0],
        43: [e, 1, t, 0, !0],
        54: [0, 1, e, 0, !0],
        27: [0, 0, 1, e, !0],
        28: [0, e, 1, t, !0],
        29: [0, t, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, e, 1, !0],
        44: [e, 0, t, 1, !0],
        55: [t, 0, 1, 1, !0],
        16: [1, e, 0, 0, !0],
        17: [1, t, 0, e, !0],
        18: [1, 1, 0, t, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [e, 1, 0, 0, !0],
        41: [t, 1, e, 0, !0],
        52: [1, 1, t, 0, !0],
        38: [1, t, 0, 1, !0],
        39: [1, e, 0, t, !0],
        40: [1, 0, 0, e, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, t, 1, !0],
        42: [t, 0, e, 1, !0],
        53: [e, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1],
      }),
        (ig.CollisionMap.staticNoCollision = {
          trace: function (e, t, i, n) {
            return {
              collision: { x: !1, y: !1, slope: !1 },
              pos: { x: e + i, y: t + n },
              tile: { x: 0, y: 0 },
            };
          },
        });
    }),
  (ig.baked = !0),
  ig
    .module("impact.background-map")
    .requires("impact.map", "impact.image")
    .defines(function () {
      ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: { x: 0, y: 0 },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function (e, t, i) {
          this.parent(e, t), this.setTileset(i);
        },
        setTileset: function (e) {
          (this.tilesetName = e instanceof ig.Image ? e.path : e),
            (this.tiles = new ig.Image(this.tilesetName)),
            (this.preRenderedChunks = null);
        },
        setScreenPos: function (e, t) {
          (this.scroll.x = e / this.distance),
            (this.scroll.y = t / this.distance);
        },
        preRenderMapToChunks: function () {
          var e = this.width * this.tilesize * ig.system.scale,
            t = this.height * this.tilesize * ig.system.scale;
          this.chunkSize = Math.min(Math.max(e, t), this.chunkSize);
          var i = Math.ceil(e / this.chunkSize),
            n = Math.ceil(t / this.chunkSize);
          this.preRenderedChunks = [];
          for (var o = 0; o < n; o++) {
            this.preRenderedChunks[o] = [];
            for (var s = 0; s < i; s++)
              this.preRenderedChunks[o][s] = this.preRenderChunk(
                s,
                o,
                s == i - 1 ? e - s * this.chunkSize : this.chunkSize,
                o == n - 1 ? t - o * this.chunkSize : this.chunkSize
              );
          }
        },
        preRenderChunk: function (e, t, i, n) {
          var o = i / this.tilesize / ig.system.scale + 1,
            s = n / this.tilesize / ig.system.scale + 1,
            a = ((e * this.chunkSize) / ig.system.scale) % this.tilesize,
            r = ((t * this.chunkSize) / ig.system.scale) % this.tilesize;
          (e = Math.floor(
            (e * this.chunkSize) / this.tilesize / ig.system.scale
          )),
            (t = Math.floor(
              (t * this.chunkSize) / this.tilesize / ig.system.scale
            ));
          var l = ig.$new("canvas");
          for (
            l.width = i,
              l.height = n,
              l.retinaResolutionEnabled = !1,
              n = l.getContext("2d"),
              ig.System.scaleMode(l, n),
              i = ig.system.context,
              ig.system.context = n,
              n = 0;
            n < o;
            n++
          )
            for (var u = 0; u < s; u++)
              if (n + e < this.width && u + t < this.height) {
                var h = this.data[u + t][n + e];
                h &&
                  this.tiles.drawTile(
                    n * this.tilesize - a,
                    u * this.tilesize - r,
                    h - 1,
                    this.tilesize
                  );
              }
          return (ig.system.context = i), l;
        },
        draw: function () {
          this.tiles.loaded &&
            this.enabled &&
            (this.preRender ? this.drawPreRendered() : this.drawTiled());
        },
        drawPreRendered: function () {
          this.preRenderedChunks || this.preRenderMapToChunks();
          var e = ig.system.getDrawPos(this.scroll.x),
            t = ig.system.getDrawPos(this.scroll.y);
          this.repeat &&
            ((e =
              ((e % (i = this.width * this.tilesize * ig.system.scale)) + i) %
              i),
            (t =
              ((t % (i = this.height * this.tilesize * ig.system.scale)) + i) %
              i));
          var i = Math.max(Math.floor(e / this.chunkSize), 0),
            n = Math.max(Math.floor(t / this.chunkSize), 0),
            o = Math.ceil((e + ig.system.realWidth) / this.chunkSize),
            s = Math.ceil((t + ig.system.realHeight) / this.chunkSize),
            a = this.preRenderedChunks[0].length,
            r = this.preRenderedChunks.length;
          this.repeat || ((o = Math.min(o, a)), (s = Math.min(s, r)));
          for (var l = 0; n < s; n++) {
            for (var u = 0, h = i; h < o; h++) {
              var d = this.preRenderedChunks[n % r][h % a],
                c = -e + h * this.chunkSize - u,
                g = -t + n * this.chunkSize - l;
              ig.system.context.drawImage(d, c, g),
                ig.Image.drawCount++,
                this.debugChunks &&
                  ((ig.system.context.strokeStyle = "#f0f"),
                  ig.system.context.strokeRect(
                    c,
                    g,
                    this.chunkSize,
                    this.chunkSize
                  )),
                this.repeat &&
                  d.width < this.chunkSize &&
                  c + d.width < ig.system.realWidth &&
                  ((u += this.chunkSize - d.width), o++);
            }
            this.repeat &&
              d.height < this.chunkSize &&
              g + d.height < ig.system.realHeight &&
              ((l += this.chunkSize - d.height), s++);
          }
        },
        drawTiled: function () {
          var e = 0,
            t = null,
            i = (this.scroll.x / this.tilesize).toInt(),
            n = (this.scroll.y / this.tilesize).toInt(),
            o = this.scroll.x % this.tilesize,
            s = this.scroll.y % this.tilesize,
            a = -o - this.tilesize,
            r =
              ((o = ig.system.width + this.tilesize - o),
              ig.system.height + this.tilesize - s),
            l = -1;
          for (s = -s - this.tilesize; s < r; l++, s += this.tilesize) {
            var u = l + n;
            if (u >= this.height || 0 > u) {
              if (!this.repeat) continue;
              u = ((u % this.height) + this.height) % this.height;
            }
            for (var h = -1, d = a; d < o; h++, d += this.tilesize) {
              if ((e = h + i) >= this.width || 0 > e) {
                if (!this.repeat) continue;
                e = ((e % this.width) + this.width) % this.width;
              }
              (e = this.data[u][e]) &&
                ((t = this.anims[e - 1])
                  ? t.draw(d, s)
                  : this.tiles.drawTile(d, s, e - 1, this.tilesize));
            }
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("impact.game")
    .requires(
      "impact.impact",
      "impact.entity",
      "impact.collision-map",
      "impact.background-map"
    )
    .defines(function () {
      (ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: { x: 0, y: 0 },
        _rscreen: { x: 0, y: 0 },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function () {
          return (
            (this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX),
            (ig.game = this),
            null
          );
        },
        loadLevel: function (e) {
          (this.screen = { x: 0, y: 0 }),
            (this.entities = []),
            (this.namedEntities = {});
          for (var t = 0; t < e.entities.length; t++) {
            var i = e.entities[t];
            this.spawnEntity(i.type, i.x, i.y, i.settings);
          }
          for (
            this.sortEntities(),
              this.collisionMap = ig.CollisionMap.staticNoCollision,
              this.backgroundMaps = [],
              t = 0;
            t < e.layer.length;
            t++
          )
            if ("collision" == (i = e.layer[t]).name)
              this.collisionMap = new ig.CollisionMap(i.tilesize, i.data);
            else {
              var n = new ig.BackgroundMap(i.tilesize, i.data, i.tilesetName);
              (n.anims = this.backgroundAnims[i.tilesetName] || {}),
                (n.repeat = i.repeat),
                (n.distance = i.distance),
                (n.foreground = !!i.foreground),
                (n.preRender = !!i.preRender),
                (n.name = i.name),
                this.backgroundMaps.push(n);
            }
          for (t = 0; t < this.entities.length; t++) this.entities[t].ready();
        },
        loadLevelDeferred: function (e) {
          this._levelToLoad = e;
        },
        getMapByName: function (e) {
          if ("collision" == e) return this.collisionMap;
          for (var t = 0; t < this.backgroundMaps.length; t++)
            if (this.backgroundMaps[t].name == e) return this.backgroundMaps[t];
          return null;
        },
        getEntityByName: function (e) {
          return this.namedEntities[e];
        },
        getEntitiesByType: function (e) {
          e = "string" == typeof e ? ig.global[e] : e;
          for (var t = [], i = 0; i < this.entities.length; i++) {
            var n = this.entities[i];
            n instanceof e && !n._killed && t.push(n);
          }
          return t;
        },
        spawnEntity: function (e, t, i, n) {
          var o = "string" == typeof e ? ig.global[e] : e;
          if (!o) throw "Can't spawn entity of type " + e;
          return (
            (e = new o(t, i, n || {})),
            this.entities.push(e),
            e.name && (this.namedEntities[e.name] = e),
            e
          );
        },
        sortEntities: function () {
          this.entities.sort(this.sortBy);
        },
        sortEntitiesDeferred: function () {
          this._doSortEntities = !0;
        },
        removeEntity: function (e) {
          e.name && delete this.namedEntities[e.name],
            (e._killed = !0),
            (e.type = ig.Entity.TYPE.NONE),
            (e.checkAgainst = ig.Entity.TYPE.NONE),
            (e.collides = ig.Entity.COLLIDES.NEVER),
            this._deferredKill.push(e);
        },
        run: function () {
          this.update(), this.draw();
        },
        update: function () {
          this._levelToLoad &&
            (this.loadLevel(this._levelToLoad), (this._levelToLoad = null)),
            this.updateEntities(),
            this.checkEntities();
          for (var e = 0; e < this._deferredKill.length; e++)
            this._deferredKill[e].erase(),
              this.entities.erase(this._deferredKill[e]);
          for (var t in ((this._deferredKill = []),
          (this._doSortEntities || this.autoSort) &&
            (this.sortEntities(), (this._doSortEntities = !1)),
          this.backgroundAnims)) {
            var i;
            for (i in (e = this.backgroundAnims[t])) e[i].update();
          }
        },
        updateEntities: function () {
          for (var e = 0; e < this.entities.length; e++) {
            var t = this.entities[e];
            t._killed || t.update();
          }
        },
        draw: function () {
          var e;
          for (
            this.clearColor && ig.system.clear(this.clearColor),
              this._rscreen.x =
                ig.system.getDrawPos(this.screen.x) / ig.system.scale,
              this._rscreen.y =
                ig.system.getDrawPos(this.screen.y) / ig.system.scale,
              e = 0;
            e < this.backgroundMaps.length;
            e++
          ) {
            var t = this.backgroundMaps[e];
            if (t.foreground) break;
            t.setScreenPos(this.screen.x, this.screen.y), t.draw();
          }
          for (this.drawEntities(); e < this.backgroundMaps.length; e++)
            (t = this.backgroundMaps[e]).setScreenPos(
              this.screen.x,
              this.screen.y
            ),
              t.draw();
        },
        drawEntities: function () {
          for (var e = 0; e < this.entities.length; e++)
            this.entities[e].draw();
        },
        checkEntities: function () {
          for (var e = {}, t = 0; t < this.entities.length; t++) {
            var i = this.entities[t];
            if (
              i.type != ig.Entity.TYPE.NONE ||
              i.checkAgainst != ig.Entity.TYPE.NONE ||
              i.collides != ig.Entity.COLLIDES.NEVER
            )
              for (
                var n = {},
                  o = Math.floor(i.pos.y / this.cellSize),
                  s = Math.floor((i.pos.x + i.size.x) / this.cellSize) + 1,
                  a = Math.floor((i.pos.y + i.size.y) / this.cellSize) + 1,
                  r = Math.floor(i.pos.x / this.cellSize);
                r < s;
                r++
              )
                for (var l = o; l < a; l++)
                  if (e[r])
                    if (e[r][l]) {
                      for (var u = e[r][l], h = 0; h < u.length; h++)
                        i.touches(u[h]) &&
                          !n[u[h].id] &&
                          ((n[u[h].id] = !0), ig.Entity.checkPair(i, u[h]));
                      u.push(i);
                    } else e[r][l] = [i];
                  else (e[r] = {}), (e[r][l] = [i]);
          }
        },
      })),
        (ig.Game.SORT = {
          Z_INDEX: function (e, t) {
            return e.zIndex - t.zIndex;
          },
          POS_X: function (e, t) {
            return e.pos.x + e.size.x - (t.pos.x + t.size.x);
          },
          POS_Y: function (e, t) {
            return e.pos.y + e.size.y - (t.pos.y + t.size.y);
          },
        });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.patches.fps-limit-patch")
    .requires("impact.impact")
    .defines(function () {
      if (
        (ig.normalizeVendorAttribute(window, "requestAnimationFrame"),
        window.requestAnimationFrame)
      ) {
        var e = 1,
          t = {};
        (window.ig.setAnimation = function (i) {
          var n = e++;
          t[n] = !0;
          var o = ig.system.fps || 60;
          performance.now();
          var s = function (e) {
            if (t[n])
              for (
                window.requestAnimationFrame(s), i();
                performance.now() - e < 1e3 / o;

              );
          };
          return window.requestAnimationFrame(s), n;
        }),
          (window.ig.clearAnimation = function (e) {
            delete t[e];
          });
      }
    }),
  (ig.baked = !0),
  ig
    .module("plugins.patches.timer-patch")
    .requires("impact.timer")
    .defines(function () {
      ig.Timer.step = function () {
        var e = Date.now(),
          t = (e - ig.Timer._last) / 1e3;
        0 > t && (t = 0),
          (ig.Timer.time += Math.min(t, ig.Timer.maxStep) * ig.Timer.timeScale),
          (ig.Timer._last = e);
      };
    }),
  (ig.baked = !0),
  ig.module("plugins.patches.user-agent-patch").defines(function () {
    (ig.ua.touchDevice =
      "ontouchstart" in window ||
      window.navigator.msMaxTouchPoints ||
      window.navigator.maxTouchPoints),
      (ig.ua.is_mac = "MacIntel" === navigator.platform),
      (ig.ua.iOS = (ig.ua.touchDevice && ig.ua.is_mac) || ig.ua.iOS),
      (ig.ua.mobile = ig.ua.iOS || ig.ua.mobile);
  }),
  (ig.baked = !0),
  ig
    .module("plugins.patches.webkit-image-smoothing-patch")
    .defines(function () {
      ig.System &&
        ((ig.System.SCALE = {
          CRISP: function (e, t) {
            (t.imageSmoothingEnabled =
              t.msImageSmoothingEnabled =
              t.mozImageSmoothingEnabled =
              t.oImageSmoothingEnabled =
                !1),
              (e.style.imageRendering = "-moz-crisp-edges"),
              (e.style.imageRendering = "-o-crisp-edges"),
              (e.style.imageRendering = "-webkit-optimize-contrast"),
              (e.style.imageRendering = "crisp-edges"),
              (e.style.msInterpolationMode = "nearest-neighbor");
          },
          SMOOTH: function (e, t) {
            (t.imageSmoothingEnabled =
              t.msImageSmoothingEnabled =
              t.mozImageSmoothingEnabled =
              t.oImageSmoothingEnabled =
                !0),
              (e.style.imageRendering = ""),
              (e.style.msInterpolationMode = "");
          },
        }),
        (ig.System.scaleMode = ig.System.SCALE.SMOOTH));
    }),
  (ig.baked = !0),
  ig
    .module("plugins.patches.windowfocus-onMouseDown-patch")
    .requires("impact.input")
    .defines(function () {
      var e = !1;
      try {
        !1 == (e = window.self !== window.top) &&
          (e = 0 < window.frames.length);
      } catch (t) {
        e = !0;
      }
      ig.Input.inject({
        keydown: function (t) {
          var i = t.target.tagName;
          "INPUT" != i &&
            "TEXTAREA" != i &&
            ((i =
              "keydown" == t.type
                ? t.keyCode
                : 2 == t.button
                ? ig.KEY.MOUSE2
                : ig.KEY.MOUSE1),
            e && 0 > i && window.focus(),
            ("touchstart" == t.type || "mousedown" == t.type) &&
              this.mousemove(t),
            (i = this.bindings[i]) &&
              ((this.actions[i] = !0),
              this.locks[i] || ((this.presses[i] = !0), (this.locks[i] = !0)),
              t.stopPropagation(),
              t.preventDefault()));
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.patches.input-patch")
    .requires("impact.input")
    .defines(function () {
      ig.Input.inject({
        mousemove: function (e) {
          this.parent(e);
          try {
            ig.soundHandler.unlockWebAudio();
          } catch (e) {}
        },
        keyup: function (e) {
          this.parent(e),
            ig.visibilityHandler && ig.visibilityHandler.onChange("focus");
          try {
            ig.soundHandler.unlockWebAudio();
          } catch (e) {}
        },
      });
    }),
  (ig.baked = !0),
  ig.module("plugins.data.vector").defines(function () {
    (Vector2 = function (e, t) {
      (this.x = e || 0), (this.y = t || 0);
    }),
      (Vector2.prototype = {
        valType: "number",
        neg: function () {
          return (this.x = -this.x), (this.y = -this.y), this;
        },
        row: function (e) {
          return typeof e === this.valType && (this.y = e), this.y;
        },
        col: function (e) {
          return typeof e === this.valType && (this.x = e), this.x;
        },
        add: function (e) {
          return (
            e instanceof Vector2
              ? ((this.x += e.x), (this.y += e.y))
              : ((this.x += e), (this.y += e)),
            this
          );
        },
        sub: function (e) {
          return (
            e instanceof Vector2
              ? ((this.x -= e.x), (this.y -= e.y))
              : ((this.x -= e), (this.y -= e)),
            this
          );
        },
        mul: function (e) {
          return (
            e instanceof Vector2
              ? ((this.x *= e.x), (this.y *= e.y))
              : ((this.x *= e), (this.y *= e)),
            this
          );
        },
        div: function (e) {
          return (
            e instanceof Vector2
              ? (0 != e.x && (this.x /= e.x), 0 != e.y && (this.y /= e.y))
              : 0 != e && ((this.x /= e), (this.y /= e)),
            this
          );
        },
        equals: function (e) {
          return this.x == e.x && this.y == e.y;
        },
        dot: function (e) {
          return this.x * e.x + this.y * e.y;
        },
        cross: function (e) {
          return this.x * e.y - this.y * e.x;
        },
        length: function () {
          return Math.sqrt(this.dot(this));
        },
        norm: function () {
          return this.divide(this.length());
        },
        min: function () {
          return Math.min(this.x, this.y);
        },
        max: function () {
          return Math.max(this.x, this.y);
        },
        toAngles: function () {
          return -Math.atan2(-this.y, this.x);
        },
        angleTo: function (e) {
          return Math.acos(this.dot(e) / (this.length() * e.length()));
        },
        toArray: function (e) {
          return [this.x, this.y].slice(0, e || 2);
        },
        clone: function () {
          return new Vector2(this.x, this.y);
        },
        set: function (e, t) {
          return (this.x = e), (this.y = t), this;
        },
        unit: function () {
          var e = this.length();
          if (0 < e) return new Vector2(this.x / e, this.y / e);
          throw "Divide by 0 error in unitVector function of vector:" + this;
        },
        turnRight: function () {
          var e = this.x;
          return (this.x = -this.y), (this.y = e), this;
        },
        turnLeft: function () {
          var e = this.x;
          return (this.x = this.y), (this.y = -e), this;
        },
        rotate: function (e) {
          var t = this.clone();
          return (
            (this.x = t.x * Math.cos(e) - t.y * Math.sin(e)),
            (this.y = t.x * Math.sin(e) + t.y * Math.cos(e)),
            this
          );
        },
      }),
      (Vector2.negative = function (e) {
        return new Vector2(-e.x, -e.y);
      }),
      (Vector2.add = function (e, t) {
        return t instanceof Vector2
          ? new Vector2(e.x + t.x, e.y + t.y)
          : new Vector2(e.x + v, e.y + v);
      }),
      (Vector2.subtract = function (e, t) {
        return t instanceof Vector2
          ? new Vector2(e.x - t.x, e.y - t.y)
          : new Vector2(e.x - v, e.y - v);
      }),
      (Vector2.multiply = function (e, t) {
        return t instanceof Vector2
          ? new Vector2(e.x * t.x, e.y * t.y)
          : new Vector2(e.x * v, e.y * v);
      }),
      (Vector2.divide = function (e, t) {
        return t instanceof Vector2
          ? new Vector2(e.x / t.x, e.y / t.y)
          : new Vector2(e.x / v, e.y / v);
      }),
      (Vector2.equals = function (e, t) {
        return e.x == t.x && e.y == t.y;
      }),
      (Vector2.dot = function (e, t) {
        return e.x * t.x + e.y * t.y;
      }),
      (Vector2.cross = function (e, t) {
        return e.x * t.y - e.y * t.x;
      });
  }),
  (ig.baked = !0),
  ig.module("plugins.data.color-rgb").defines(function () {
    (ColorRGB = function (e, t, i, n) {
      (this.r = e || 0),
        (this.g = t || 0),
        (this.b = i || 0),
        (this.a = n || 0);
    }),
      (ColorRGB.prototype = {
        setRandomColor: function () {
          (this.r = Math.round(255 * Math.random())),
            (this.g = Math.round(255 * Math.random())),
            (this.b = Math.round(255 * Math.random()));
        },
        getStyle: function () {
          return (
            "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
          );
        },
        getHex: function () {
          for (
            var e = this.r.toString(16),
              t = this.g.toString(16),
              i = this.b.toString(16);
            2 > e.length;

          )
            e = "0" + e;
          for (; 2 > t.length; ) t = "0" + t;
          for (; 2 > i.length; ) i = "0" + i;
          return "#" + e + t + i;
        },
        getInvertedColor: function () {
          return new ColorRGB(
            255 - this.r,
            255 - this.g,
            255 - this.b,
            255 - this.a
          );
        },
        clone: function () {
          return new ColorRGB(this.r, this.g, this.b, this.a);
        },
      });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.font.font-info")
    .requires("impact.impact")
    .defines(function () {
      ig.FontInfo = ig.Class.extend({
        fonts: [{ name: "truenobd", source: "media/fonts/truenobd" }],
        init: function () {
          this.registerCssFont();
        },
        registerCssFont: function () {
          if (0 < this.fonts.length) {
            var e = document.createElement("style");
            e.type = "text/css";
            for (var t = "", i = 0; i < this.fonts.length; i++) {
              var n = this.fonts[i];
              t =
                t +
                "@font-face {font-family: '" +
                n.name +
                "';src: url('" +
                n.source +
                ".otf') format('opentype')}";
            }
            e.appendChild(document.createTextNode(t)),
              document.head.appendChild(e);
          }
        },
        isValid: function () {
          for (var e = 0; e < this.fonts.length; e++)
            if (!this._isValidName(this.fonts[e].source)) return !1;
          return !0;
        },
        _isValidName: function (e) {
          return -1 != e.search(/^[a-z0-9-\/]+$/);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.font.font-loader")
    .requires("impact.impact", "plugins.font.font-info", "impact.loader")
    .defines(function () {
      (ig.FontLoader = ig.Class.extend({
        fontInfo: new ig.FontInfo(),
        onload: !1,
        onerror: !1,
        init: function (e, t) {
          (this.onload = e), (this.onerror = t);
        },
        load: function () {
          this.fontInfo.isValid()
            ? this._loadByLib()
            : console.error(
                "Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path"
              );
        },
        _loadByLib: function () {
          for (var e = [], t = 0; t < this.fontInfo.fonts.length; t++) {
            var i = new FontFaceObserver(this.fontInfo.fonts[t].name);
            e.push(i.load());
          }
          Promise.all(e).then(this.onload).catch(this.onerror);
        },
      })),
        ig.Loader.inject({
          parentLoad: !1,
          load: function () {
            (this.parentLoad = this.parent),
              new ig.FontLoader(
                this.onFontLoad.bind(this),
                this.onFontError.bind(this)
              ).load();
          },
          onFontLoad: function () {
            this.parentLoad();
          },
          onFontError: function () {
            console.error("Font is not loaded"), this.parentLoad();
          },
        });
    }),
  (ig.baked = !0),
  ig.module("plugins.handlers.dom-handler").defines(function () {
    ig.DomHandler = ig.Class.extend({
      JQUERYAVAILABLE: !1,
      init: function () {
        this.JQUERYAVAILABLE = this._jqueryAvailable();
      },
      _jqueryAvailable: function () {
        return "undefined" != typeof jQuery;
      },
      addEvent: function (e, t, i, n) {
        this.JQUERYAVAILABLE ? e.on(t, i) : e.addEventListener(t, i, n);
      },
      create: function (e) {
        return this.JQUERYAVAILABLE ? $("<" + e + ">") : ig.$new(e);
      },
      getElementByClass: function (e) {
        return this.JQUERYAVAILABLE
          ? $("." + e)
          : document.getElementsByClassName(e);
      },
      getElementById: function (e) {
        return this.JQUERYAVAILABLE ? (0 < $(e).length ? $(e) : null) : ig.$(e);
      },
      appendChild: function (e, t) {
        this.JQUERYAVAILABLE ? e.append(t) : e.appendChild(t);
      },
      appendToBody: function (e) {
        this.JQUERYAVAILABLE
          ? $("body").append(e)
          : document.body.appendChild(e);
      },
      resize: function (e, t, i) {
        if (this.JQUERYAVAILABLE) e.width(t.toFixed(2)), e.height(i.toFixed(2));
        else {
          var n = e.style.visibility;
          (t = "width:" + t.toFixed(2) + "px; height:" + i.toFixed(2) + "px;"),
            this.attr(e, "style", t),
            (e.style.visibility = n);
        }
      },
      resizeOffsetLeft: function (e, t, i, n) {
        if (this.JQUERYAVAILABLE)
          e.width(t.toFixed(2)), e.height(i.toFixed(2)), e.css("left", n);
        else {
          var o = e.style.visibility;
          (t =
            "width:" +
            t.toFixed(2) +
            "px; height:" +
            i.toFixed(2) +
            "px; left: " +
            n.toFixed(2) +
            "px;"),
            this.attr(e, "style", t),
            (e.style.visibility = o);
        }
      },
      resizeOffset: function (e, t, i, n, o) {
        if (this.JQUERYAVAILABLE)
          e.width(t.toFixed(2)),
            e.height(i.toFixed(2)),
            e.css("left", n),
            e.css("top", o);
        else {
          var s = e.style.visibility;
          (t =
            "width:" +
            t.toFixed(2) +
            "px; height:" +
            i.toFixed(2) +
            "px; left: " +
            n.toFixed(2) +
            "px; top: " +
            o.toFixed(2) +
            "px;"),
            this.attr(e, "style", t),
            (e.style.visibility = s);
        }
      },
      css: function (e, t) {
        if (this.JQUERYAVAILABLE) e.css(t);
        else {
          var i,
            n = "";
          for (i in t) n += i + ":" + t[i] + ";";
          this.attr(e, "style", n);
        }
      },
      getOffsets: function (e) {
        return this.JQUERYAVAILABLE
          ? { left: (e = e.offset()).left, top: e.top }
          : { left: e.offsetLeft, top: e.offsetTop };
      },
      attr: function (e, t, i) {
        if (void 0 === i)
          return this.JQUERYAVAILABLE ? e.attr(t) : e.getAttribute(t);
        this.JQUERYAVAILABLE ? e.attr(t, i) : e.setAttribute(t, i);
      },
      show: function (e) {
        e &&
          void 0 !== e &&
          (this.JQUERYAVAILABLE
            ? (e.show(), e.css("visibility", "visible"))
            : e &&
              (e.style
                ? (e.style.visibility = "visible")
                : e[0] && (e[0].style.visibility = "visible")));
      },
      hide: function (e) {
        e &&
          void 0 !== e &&
          (this.JQUERYAVAILABLE
            ? (e.hide(), e.css("visibility", "hidden"))
            : e &&
              (e.style
                ? (e.style.visibility = "hidden")
                : e[0] && (e[0].style.visibility = "hidden")));
      },
      getQueryVariable: function (e) {
        for (
          var t = window.location.search.substring(1).split("&"), i = 0;
          i < t.length;
          i++
        ) {
          var n = t[i].match(/([^=]+?)=(.+)/);
          if (n && decodeURIComponent(n[1]) == e)
            return decodeURIComponent(n[2]);
        }
      },
      forcedDeviceDetection: function () {
        var e = this.getQueryVariable("device");
        if (e)
          switch (e) {
            case "mobile":
              console.log("serving mobile version ..."), (ig.ua.mobile = !0);
              break;
            case "desktop":
              console.log("serving desktop version ..."), (ig.ua.mobile = !1);
              break;
            default:
              console.log("serving universal version ...");
          }
        else console.log("serving universal version ...");
      },
      forcedDeviceRotation: function () {
        var e = this.getQueryVariable("force-rotate");
        if (e)
          switch (e) {
            case "portrait":
              console.log("force rotate to portrait"), (window.orientation = 0);
              break;
            case "landscape":
              console.log("force rotate to horizontal"),
                (window.orientation = 90);
              break;
            default:
              alert(
                "wrong command/type in param force-rotate. Defaulting value to portrait"
              ),
                (window.orientation = 0);
          }
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.handlers.size-handler")
    .requires("plugins.data.vector")
    .defines(function () {
      ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        disableStretchToFitOnMobileFlag: !1,
        enableStretchToFitOnAntiPortraitModeFlag: !0,
        enableScalingLimitsOnMobileFlag: !1,
        minScalingOnMobile: 0,
        maxScalingOnMobile: 1,
        enableStretchToFitOnDesktopFlag: !1,
        enableScalingLimitsOnDesktopFlag: !1,
        minScalingOnDesktop: 0,
        maxScalingOnDesktop: 1,
        desktop: {
          actualSize: new Vector2(window.innerWidth, window.innerHeight),
          actualResolution: new Vector2(1400, 1400),
        },
        mobile: {
          actualSize: new Vector2(window.innerWidth, window.innerHeight),
          actualResolution: new Vector2(1400, 1400),
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
          MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20,
          },
          MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20,
          },
          MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20,
          },
          MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20,
          },
          MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20,
          },
          MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20,
          },
        },
        init: function (e) {
          if (((this.domHandler = e), void 0 === e))
            throw "undefined Dom Handler for Size Handler";
          this.sizeCalcs(), this.eventListenerSetup(), this.samsungFix();
        },
        sizeCalcs: function () {
          if (
            ((this.windowSize = new Vector2(
              window.innerWidth,
              window.innerHeight
            )),
            ig.ua.mobile)
          ) {
            this.mobile.actualSize = new Vector2(
              window.innerWidth,
              window.innerHeight
            );
            var e = new Vector2(
              this.mobile.actualResolution.x,
              this.mobile.actualResolution.y
            );
            if (
              ((this.scaleRatioMultiplier = new Vector2(
                this.mobile.actualSize.x / e.x,
                this.mobile.actualSize.y / e.y
              )),
              this.disableStretchToFitOnMobileFlag)
            ) {
              var t = Math.min(
                this.scaleRatioMultiplier.x,
                this.scaleRatioMultiplier.y
              );
              this.enableScalingLimitsOnMobileFlag &&
                (t = t.limit(this.minScalingOnMobile, this.maxScalingOnMobile)),
                (this.mobile.actualSize.x = e.x * t),
                (this.mobile.actualSize.y = e.y * t),
                (this.scaleRatioMultiplier.x = t),
                (this.scaleRatioMultiplier.y = t);
            } else
              (this.sizeRatio.x = this.scaleRatioMultiplier.x),
                (this.sizeRatio.y = this.scaleRatioMultiplier.y),
                (this.scaleRatioMultiplier.x = 1),
                (this.scaleRatioMultiplier.y = 1);
          } else
            (this.desktop.actualSize = new Vector2(
              window.innerWidth,
              window.innerHeight
            )),
              (e = new Vector2(
                this.desktop.actualResolution.x,
                this.desktop.actualResolution.y
              )),
              (this.scaleRatioMultiplier = new Vector2(
                this.desktop.actualSize.x / e.x,
                this.desktop.actualSize.y / e.y
              )),
              this.enableStretchToFitOnDesktopFlag
                ? ((this.sizeRatio.x = this.scaleRatioMultiplier.x),
                  (this.sizeRatio.y = this.scaleRatioMultiplier.y),
                  (this.scaleRatioMultiplier.x = 1),
                  (this.scaleRatioMultiplier.y = 1))
                : ((t = Math.min(
                    this.scaleRatioMultiplier.x,
                    this.scaleRatioMultiplier.y
                  )),
                  this.enableScalingLimitsOnDesktopFlag &&
                    (t = t.limit(
                      this.minScalingOnDesktop,
                      this.maxScalingOnDesktop
                    )),
                  (this.desktop.actualSize.x = e.x * t),
                  (this.desktop.actualSize.y = e.y * t),
                  (this.scaleRatioMultiplier.x = t),
                  (this.scaleRatioMultiplier.y = t));
        },
        resizeLayers: function () {
          for (var e = 0; e < this.coreDivsToResize.length; e++) {
            var t = ig.domHandler.getElementById(this.coreDivsToResize[e]);
            if (ig.ua.mobile)
              if (this.disableStretchToFitOnMobileFlag) {
                0 >
                  (n = Math.floor(
                    ig.sizeHandler.windowSize.x / 2 -
                      ig.sizeHandler.mobile.actualSize.x / 2
                  )) && (n = 0),
                  0 >
                    (l = Math.floor(
                      ig.sizeHandler.windowSize.y / 2 -
                        ig.sizeHandler.mobile.actualSize.y / 2
                    )) && (l = 0),
                  ig.domHandler.resizeOffset(
                    t,
                    Math.floor(ig.sizeHandler.mobile.actualSize.x),
                    Math.floor(ig.sizeHandler.mobile.actualSize.y),
                    n,
                    l
                  );
                var i = !1;
                if (
                  this.portraitMode
                    ? window.innerHeight < window.innerWidth
                    : window.innerHeight > window.innerWidth
                )
                  if (this.enableStretchToFitOnAntiPortraitModeFlag)
                    ig.domHandler.resizeOffset(
                      t,
                      Math.floor(window.innerWidth),
                      Math.floor(window.innerHeight),
                      0,
                      0
                    );
                  else {
                    i = new Vector2(
                      window.innerWidth / this.mobile.actualResolution.y,
                      window.innerHeight / this.mobile.actualResolution.x
                    );
                    var n = Math.min(i.x, i.y),
                      o =
                        ((i = this.mobile.actualResolution.y * n),
                        this.mobile.actualResolution.x * n);
                    0 >
                      (n = Math.floor(
                        ig.sizeHandler.windowSize.x / 2 - i / 2
                      )) && (n = 0),
                      0 >
                        (l = Math.floor(
                          ig.sizeHandler.windowSize.y / 2 - o / 2
                        )) && (l = 0),
                      ig.domHandler.resizeOffset(
                        t,
                        Math.floor(i),
                        Math.floor(o),
                        n,
                        l
                      );
                  }
              } else
                ig.domHandler.resize(
                  t,
                  Math.floor(ig.sizeHandler.mobile.actualSize.x),
                  Math.floor(ig.sizeHandler.mobile.actualSize.y)
                );
            else
              this.enableStretchToFitOnDesktopFlag
                ? ig.domHandler.resize(
                    t,
                    Math.floor(ig.sizeHandler.desktop.actualSize.x),
                    Math.floor(ig.sizeHandler.desktop.actualSize.y)
                  )
                : (0 >
                    (n = Math.floor(
                      ig.sizeHandler.windowSize.x / 2 -
                        ig.sizeHandler.desktop.actualSize.x / 2
                    )) && (n = 0),
                  0 >
                    (l = Math.floor(
                      ig.sizeHandler.windowSize.y / 2 -
                        ig.sizeHandler.desktop.actualSize.y / 2
                    )) && (l = 0),
                  ig.domHandler.resizeOffset(
                    t,
                    Math.floor(ig.sizeHandler.desktop.actualSize.x),
                    Math.floor(ig.sizeHandler.desktop.actualSize.y),
                    n,
                    l
                  ));
          }
          for (var s in this.adsToResize)
            (e = ig.domHandler.getElementById("#" + s)),
              (t = ig.domHandler.getElementById("#" + s + "-Box")),
              (i =
                (window.innerWidth - this.adsToResize[s]["box-width"]) / 2 +
                "px"),
              (n =
                (window.innerHeight - this.adsToResize[s]["box-height"]) / 2 +
                "px"),
              e &&
                ig.domHandler.css(e, {
                  width: window.innerWidth,
                  height: window.innerHeight,
                }),
              t && ig.domHandler.css(t, { left: i, top: n });
          for (s in ((e = ig.domHandler.getElementById("#canvas")),
          (e = (t = ig.domHandler.getOffsets(e)).left),
          (t = t.top),
          (i = Math.min(
            ig.sizeHandler.scaleRatioMultiplier.x,
            ig.sizeHandler.scaleRatioMultiplier.y
          )),
          this.dynamicClickableEntityDivs)) {
            if (((n = ig.domHandler.getElementById("#" + s)), ig.ua.mobile)) {
              o = this.dynamicClickableEntityDivs[s].entity_pos_x;
              var a = this.dynamicClickableEntityDivs[s].entity_pos_y,
                r = this.dynamicClickableEntityDivs[s].width,
                l = this.dynamicClickableEntityDivs[s].height;
              this.disableStretchToFitOnMobileFlag
                ? ((o = Math.floor(e + o * this.scaleRatioMultiplier.x) + "px"),
                  (a = Math.floor(t + a * this.scaleRatioMultiplier.y) + "px"),
                  (r = Math.floor(r * this.scaleRatioMultiplier.x) + "px"),
                  (l = Math.floor(l * this.scaleRatioMultiplier.y) + "px"))
                : ((o = Math.floor(o * this.sizeRatio.x) + "px"),
                  (a = Math.floor(a * this.sizeRatio.y) + "px"),
                  (r = Math.floor(r * this.sizeRatio.x) + "px"),
                  (l = Math.floor(l * this.sizeRatio.y) + "px"));
            } else
              (o = this.dynamicClickableEntityDivs[s].entity_pos_x),
                (a = this.dynamicClickableEntityDivs[s].entity_pos_y),
                (r = this.dynamicClickableEntityDivs[s].width),
                (l = this.dynamicClickableEntityDivs[s].height),
                this.enableStretchToFitOnDesktopFlag
                  ? ((o = Math.floor(o * this.sizeRatio.x) + "px"),
                    (a = Math.floor(a * this.sizeRatio.y) + "px"),
                    (r = Math.floor(r * this.sizeRatio.x) + "px"),
                    (l = Math.floor(l * this.sizeRatio.y) + "px"))
                  : ((o =
                      Math.floor(e + o * this.scaleRatioMultiplier.x) + "px"),
                    (a =
                      Math.floor(t + a * this.scaleRatioMultiplier.y) + "px"),
                    (r = Math.floor(r * this.scaleRatioMultiplier.x) + "px"),
                    (l = Math.floor(l * this.scaleRatioMultiplier.y) + "px"));
            ig.domHandler.css(n, {
              float: "left",
              position: "absolute",
              left: o,
              top: a,
              width: r,
              height: l,
              "z-index": 3,
            }),
              this.dynamicClickableEntityDivs[s]["font-size"] &&
                ig.domHandler.css(n, {
                  "font-size":
                    this.dynamicClickableEntityDivs[s]["font-size"] * i + "px",
                });
          }
          $("#ajaxbar").width(this.windowSize.x),
            $("#ajaxbar").height(this.windowSize.y);
        },
        resize: function () {
          this.sizeCalcs(), this.resizeLayers();
        },
        reorient: function () {
          if ((console.log("changing orientation ..."), ig.ua.mobile)) {
            var e = this.portraitMode
                ? window.innerHeight < window.innerWidth
                : window.innerHeight > window.innerWidth,
              t = this.domHandler.getElementById("#orientate"),
              i = this.domHandler.getElementById("#game");
            e
              ? (this.domHandler.show(t), this.domHandler.hide(i))
              : (this.domHandler.show(i), this.domHandler.hide(t));
          }
          ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize();
        },
        resizeAds: function () {
          for (var e in this.adsToResize) {
            var t = ig.domHandler.getElementById("#" + e),
              i = ig.domHandler.getElementById("#" + e + "-Box"),
              n =
                (window.innerWidth - this.adsToResize[e]["box-width"]) / 2 +
                "px",
              o =
                (window.innerHeight - this.adsToResize[e]["box-height"]) / 2 +
                "px";
            t &&
              ig.domHandler.css(t, {
                width: window.innerWidth,
                height: window.innerHeight,
              }),
              i && ig.domHandler.css(i, { left: n, top: o });
          }
        },
        samsungFix: function () {
          ig.ua.android &&
            !(
              4.2 >
              parseFloat(
                navigator.userAgent.slice(
                  navigator.userAgent.indexOf("Android") + 8,
                  navigator.userAgent.indexOf("Android") + 11
                )
              )
            ) &&
            !(0 > navigator.userAgent.indexOf("GT")) &&
            !(0 < navigator.userAgent.indexOf("Chrome")) &&
            !(0 < navigator.userAgent.indexOf("Firefox")) &&
            (document.addEventListener(
              "touchstart",
              function (e) {
                return e.preventDefault(), !1;
              },
              !1
            ),
            document.addEventListener(
              "touchmove",
              function (e) {
                return e.preventDefault(), !1;
              },
              !1
            ),
            document.addEventListener(
              "touchend",
              function (e) {
                return e.preventDefault(), !1;
              },
              !1
            ));
        },
        orientationInterval: null,
        orientationTimeout: null,
        orientationHandler: function () {
          this.reorient(), window.scrollTo(0, 1);
        },
        orientationDelayHandler: function () {
          null == this.orientationInterval &&
            (this.orientationInterval = window.setInterval(
              this.orientationHandler.bind(this),
              100
            )),
            null == this.orientationTimeout &&
              (this.orientationTimeout = window.setTimeout(
                function () {
                  this.clearAllIntervals();
                }.bind(this),
                2e3
              ));
        },
        clearAllIntervals: function () {
          window.clearInterval(this.orientationInterval),
            (this.orientationInterval = null),
            window.clearTimeout(this.orientationTimeout),
            (this.orientationTimeout = null);
        },
        eventListenerSetup: function () {
          ig.ua.iOS
            ? (window.addEventListener(
                "orientationchange",
                this.orientationDelayHandler.bind(this)
              ),
              window.addEventListener(
                "resize",
                this.orientationDelayHandler.bind(this)
              ))
            : (window.addEventListener(
                "orientationchange",
                this.orientationHandler.bind(this)
              ),
              window.addEventListener(
                "resize",
                this.orientationHandler.bind(this)
              )),
            (document.ontouchmove = function (e) {
              window.scrollTo(0, 1), e.preventDefault();
            }),
            this.chromePullDownRefreshFix();
        },
        chromePullDownRefreshFix: function () {
          var e = window.chrome || navigator.userAgent.match("CriOS"),
            t = "ontouchstart" in document.documentElement;
          if (e && t) {
            var i = (e = !1),
              n = 0,
              o = !1;
            try {
              CSS.supports("overscroll-behavior-y", "contain") && (e = !0);
            } catch (e) {}
            try {
              if (e)
                return (document.body.style.overscrollBehaviorY = "contain");
            } catch (e) {}
            (e = document.head || document.body),
              ((t = document.createElement("style")).type = "text/css"),
              t.styleSheet
                ? (t.styleSheet.cssText =
                    "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ")
                : t.appendChild(
                    document.createTextNode(
                      "\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    "
                    )
                  ),
              e.appendChild(t);
            try {
              addEventListener("test", null, {
                get passive() {
                  i = !0;
                },
              });
            } catch (e) {}
            document.addEventListener(
              "touchstart",
              function (e) {
                1 === e.touches.length &&
                  ((n = e.touches[0].clientY), (o = 0 === window.pageYOffset));
              },
              !!i && { passive: !0 }
            ),
              document.addEventListener(
                "touchmove",
                function (e) {
                  var t;
                  if ((t = o)) {
                    o = !1;
                    var i = (t = e.touches[0].clientY) - n;
                    (n = t), (t = 0 < i);
                  }
                  if (t) return e.preventDefault();
                },
                !!i && { passive: !1 }
              );
          }
        },
      });
    }),
  (ig.baked = !0),
  ig.module("plugins.handlers.api-handler").defines(function () {
    ig.ApiHandler = ig.Class.extend({
      apiAvailable: {
        MJSPreroll: function () {
          ig.ua.mobile &&
            ig.domHandler.JQUERYAVAILABLE &&
            _SETTINGS &&
            _SETTINGS.Ad.Mobile.Preroll.Enabled &&
            MobileAdInGamePreroll.Initialize();
        },
        MJSHeader: function () {
          ig.ua.mobile &&
            ig.domHandler.JQUERYAVAILABLE &&
            _SETTINGS.Ad.Mobile.Header.Enabled &&
            MobileAdInGameHeader.Initialize();
        },
        MJSFooter: function () {
          ig.ua.mobile &&
            ig.domHandler.JQUERYAVAILABLE &&
            _SETTINGS.Ad.Mobile.Footer.Enabled &&
            MobileAdInGameFooter.Initialize();
        },
        MJSEnd: function () {
          ig.ua.mobile &&
            ig.domHandler.JQUERYAVAILABLE &&
            _SETTINGS.Ad.Mobile.End.Enabled &&
            MobileAdInGameEnd.Initialize();
        },
      },
      run: function (e, t) {
        this.apiAvailable[e] && this.apiAvailable[e](t);
      },
    });
  }),
  (ig.baked = !0),
  ig.module("plugins.audio.sound-player").defines(function () {
    SoundPlayer = ig.Class.extend({
      tagName: "SoundPlayer",
      stayMuteFlag: !1,
      debug: !0,
      init: function () {
        this.debug && console.log(this.tagName);
      },
      play: function (e) {
        this.debug && console.log("play sound ", e);
      },
      stop: function () {
        this.debug && console.log("stop sound ");
      },
      volume: function () {
        this.debug && console.log("set volume");
      },
      mute: function (e) {
        this.debug && console.log("mute"),
          (void 0 === e || e) && (this.stayMuteFlag = !0);
      },
      unmute: function (e) {
        this.debug && console.log("unmute"),
          (void 0 === e || e) && (this.stayMuteFlag = !1);
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.impact-music-player")
    .requires("plugins.audio.sound-player")
    .defines(function () {
      ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function (e, t) {
          for (var i in (this.parent(e, t), e))
            (this.soundList[i] = i), ig.music.add(e[i].path + ".*", i);
          t && t.loop && (ig.music.loop = t.loop);
        },
        play: function (e) {
          this.stayMuteFlag ||
            ((this.bgmPlaying = !0),
            void 0 === e ? ig.music.play(e) : ig.music.play());
        },
        stop: function () {
          (this.bgmPlaying = !1), ig.music.pause();
        },
        volume: function (e) {
          console.log("impactmusic:", e),
            (ig.music.volume = 0 > e ? 0 : isNaN(e) || 1 < e ? 1 : e);
        },
        getVolume: function () {
          return ig.music.volume;
        },
        mute: function (e) {
          this.parent(e), this.bgmPlaying && this.stop();
        },
        unmute: function (e) {
          this.parent(e), this.play();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.impact-sound-player")
    .requires("plugins.audio.sound-player")
    .defines(function () {
      ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function (e, t) {
          for (var i in (this.parent(e, t), e)) {
            var n = new ig.Sound(e[i].path + ".*");
            this.soundList[i] = n;
          }
        },
        play: function (e) {
          this.stayMuteFlag ||
            ("object" == typeof e
              ? (console.log(e + " exists"), e.play())
              : "string" == typeof e && this.soundList[e].play());
        },
        stop: function (e) {
          this.parent(e), e.stop();
        },
        volume: function (e) {
          ig.soundManager.volume = 0 > e ? 0 : isNaN(e) || 1 < e ? 1 : e;
        },
        getVolume: function () {
          return ig.soundManager.volume;
        },
        mute: function (e) {
          this.parent(e), (ig.Sound.enabled = !1);
        },
        unmute: function (e) {
          this.parent(e), (ig.Sound.enabled = !0);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.howler-player")
    .requires("plugins.audio.sound-player")
    .defines(function () {
      HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function (e, t) {
          for (var i in (this.parent(e, t), e)) {
            var n = e[i].path;
            (n = new Howl({
              src: [
                n + "." + ig.Sound.FORMAT.OGG.ext,
                n + "." + ig.Sound.FORMAT.MP3.ext,
              ],
            })),
              (this.soundList[i] = n);
          }
        },
        play: function (e) {
          if (Howler.ctx && "running" !== Howler.ctx.state)
            return Howler.ctx.resume();
          this.stayMuteFlag ||
            ("object" == typeof e
              ? e.play()
              : "string" == typeof e && this.soundList[e].play());
        },
        stop: function (e) {
          this.parent(e),
            "object" == typeof e
              ? e.stop()
              : "string" == typeof e && this.soundList[e].stop();
        },
        volume: function (e) {
          for (var t in this.soundList) {
            if (0 > e) {
              this.soundList[t].volume(0);
              break;
            }
            isNaN(e) || 1 < e
              ? this.soundList[t].volume(1)
              : this.soundList[t].volume(e);
          }
        },
        getVolume: function () {
          for (var e in this.soundList) return this.soundList[e].volume();
        },
        mute: function (e) {
          this.parent(e), Howler.mute(!0);
        },
        unmute: function (e) {
          this.parent(e), Howler.mute(!1);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.howler-music-player")
    .requires("plugins.audio.sound-player")
    .defines(function () {
      HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function (e, t) {
          for (var i in (this.parent(e, t), e)) {
            var n = e[i].path;
            (n = new Howl({
              src: [
                n + "." + ig.Sound.FORMAT.OGG.ext,
                n + "." + ig.Sound.FORMAT.MP3.ext,
              ],
              loop: !0,
              autoplay: !1,
              onend: function () {},
            })),
              (this.soundList[i] = n);
          }
        },
        play: function (e) {
          if (!this.stayMuteFlag && !this.bgmPlaying)
            if ("object" == typeof e) (this.bgmPlaying = !0), e.play();
            else if ("string" == typeof e)
              (this.bgmPlaying = !0), this.soundList[e].play();
            else
              for (var t in this.soundList) {
                this.soundList[t].play(), (this.bgmPlaying = !0);
                break;
              }
        },
        stop: function (e) {
          if ((this.parent(e), this.bgmPlaying)) {
            for (var t in this.soundList) this.soundList[t].stop();
            this.bgmPlaying = !1;
          }
        },
        volume: function (e) {
          for (var t in (console.log("howler", e), this.soundList)) {
            if (0 > e) {
              this.soundList[t].volume(0);
              break;
            }
            isNaN(e) || 1 < e
              ? this.soundList[t].volume(1)
              : this.soundList[t].volume(e);
          }
        },
        getVolume: function () {
          for (var e in this.soundList) return this.soundList[e].volume();
        },
        mute: function (e) {
          this.parent(e), Howler.mute(!0);
        },
        unmute: function (e) {
          this.parent(e), Howler.mute(!1);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.jukebox-player")
    .requires("plugins.audio.sound-player")
    .defines(function () {
      JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.001,
        init: function (e, t) {
          for (var i in (this.parent(e, t), e)) {
            this.soundList[i] = i;
            var n = e[i].path;
            this.jukeboxPlayer = new jukebox.Player({
              resources: [
                n + "." + ig.Sound.FORMAT.OGG.ext,
                n + "." + ig.Sound.FORMAT.MP3.ext,
              ],
              autoplay: !1,
              spritemap: {
                music: { start: e[i].startMp3, end: e[i].endMp3, loop: !0 },
              },
            });
          }
        },
        play: function () {
          this.stayMuteFlag ||
            ((this.bgmPlaying = !0),
            this.pausePosition
              ? (console.log("resume"),
                this.jukeboxPlayer.resume(this.pausePosition))
              : (console.log("play"),
                this.jukeboxPlayer.play(
                  this.jukeboxPlayer.settings.spritemap.music.start,
                  !0
                )),
            (this.premuteVolume = this.getVolume()));
        },
        stop: function () {
          (this.bgmPlaying = !1),
            (this.pausePosition = this.jukeboxPlayer.pause());
        },
        volume: function (e) {
          console.log("jukebox:", e),
            0 >= e
              ? this.jukeboxPlayer.setVolume(this.minVolume)
              : isNaN(e) || 1 < e
              ? this.jukeboxPlayer.setVolume(1)
              : this.jukeboxPlayer.setVolume(e);
        },
        getVolume: function () {
          return this.jukeboxPlayer.getVolume();
        },
        mute: function (e) {
          this.parent(e),
            this.bgmPlaying &&
              (console.log("jukebox", this.premuteVolume),
              this.stayMuteFlag || (this.premuteVolume = this.getVolume()),
              this.jukeboxPlayer.pause(),
              this.jukeboxPlayer.setVolume(this.minVolume));
        },
        unmute: function (e) {
          this.parent(e),
            this.stayMuteFlag ||
              (console.log("jukebox", this.premuteVolume),
              this.jukeboxPlayer.setVolume(this.premuteVolume),
              this.jukeboxPlayer.resume());
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.webaudio-music-player")
    .requires("plugins.audio.sound-player")
    .defines(function () {
      WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        reinitOnPlay: !1,
        inputList: null,
        _volume: 1,
        soundList: {},
        init: function (e) {
          this.webaudio = {
            compatibility: {},
            gainNode: null,
            buffer: null,
            source_loop: {},
            source_once: {},
          };
          try {
            Howler && Howler.ctx
              ? (this.webaudio.context = Howler.ctx)
              : ig && ig.webaudio_ctx
              ? (this.webaudio.context = ig.webaudio_ctx)
              : ((this.AudioContext =
                  window.AudioContext || window.webkitAudioContext),
                (this.webaudio.context = new this.AudioContext()),
                (ig.webaudio_ctx = this.webaudio.context)),
              (this.isSupported = !0);
          } catch (e) {
            console.log("Web Audio API not supported in this browser."),
              (this.webaudio = null),
              (this.useHTML5Audio = !0);
          }
          if (this.useHTML5Audio)
            if ("undefined" != typeof Audio)
              try {
                new Audio();
              } catch (e) {
                this.useHTML5Audio = !1;
              }
            else this.useHTML5Audio = !1;
          if (
            (this.useHTML5Audio &&
              ((this.audio = new Audio()),
              (this.isSupported = !0),
              this.initHTML5Audio(e)),
            !this.isSupported)
          )
            return null;
          this.webaudio && ((this.inputList = e), this.initWebAudio(e));
        },
        initWebAudio: function (e) {
          ig.ua.iOS && this.initIOSWebAudioUnlock(),
            (this.webaudio.gainNode =
              void 0 === this.webaudio.context.createGain
                ? this.webaudio.context.createGainNode()
                : this.webaudio.context.createGain()),
            this.webaudio.gainNode.connect(this.webaudio.context.destination),
            (this.webaudio.gainNode.gain.value = this._volume),
            (this.webaudio.buffer = null);
          var t = "start",
            i = "stop",
            n = this.webaudio.context.createBufferSource();
          for (var o in ("function" != typeof n.start && (t = "noteOn"),
          (this.webaudio.compatibility.start = t),
          "function" != typeof n.stop && (i = "noteOff"),
          (this.webaudio.compatibility.stop = i),
          e)) {
            (this.soundList[o] = o),
              (t = (i = e[o].path) + "." + ig.Sound.FORMAT.MP3.ext);
            var s = i + "." + ig.Sound.FORMAT.OGG.ext;
            ig.ua.mobile
              ? ig.ua.iOS && (s = t)
              : (-1 !=
                  (i = navigator.userAgent.toLowerCase()).indexOf("safari") &&
                  -1 >= i.indexOf("chrome") &&
                  (s = t),
                i.indexOf("win64") && (s = t));
            var a = new XMLHttpRequest();
            if (
              (a.open("GET", s, !0),
              (a.responseType = "arraybuffer"),
              (a.onload = function () {
                this.webaudio.context.decodeAudioData(
                  a.response,
                  function (e) {
                    (this.webaudio.buffer = e),
                      (this.webaudio.source_loop = {}),
                      this.bgmPlaying ? this.play(null, !0) : this.stop();
                  }.bind(this),
                  function () {
                    console.log('Error decoding audio "' + s + '".');
                  }
                );
              }.bind(this)),
              a.send(),
              4 == a.readyState && "undefined" != typeof Audio)
            ) {
              this.useHTML5Audio = !0;
              try {
                new Audio();
              } catch (e) {
                this.useHTML5Audio = !1;
              }
              this.useHTML5Audio &&
                (console.log("Using HTML5 Audio"),
                (this.webaudio = null),
                (this.audio = new Audio()),
                (this.isSupported = !0),
                this.initHTML5Audio(e));
            }
            break;
          }
        },
        initIOSWebAudioUnlock: function () {
          if (this.webaudio) {
            webaudio = this.webaudio;
            var e = function () {
              var t = webaudio.context,
                i = t.createBuffer(1, 1, 22050),
                n = t.createBufferSource();
              (n.buffer = i),
                n.connect(t.destination),
                void 0 === n.start ? n.noteOn(0) : n.start(0),
                setTimeout(function () {
                  (n.playbackState === n.PLAYING_STATE ||
                    n.playbackState === n.FINISHED_STATE) &&
                    window.removeEventListener("touchend", e, !1);
                }, 0);
            };
            window.addEventListener("touchend", e, !1);
          }
        },
        initHTML5Audio: function (e) {
          if (this.useHTML5Audio && this.audio) {
            var t = this.audio;
            for (var i in ((this.codecs = {}),
            (this.codecs = {
              mp3: !!t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
              opus: !!t
                .canPlayType('audio/ogg; codecs="opus"')
                .replace(/^no$/, ""),
              ogg: !!t
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
              wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
              aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
              m4a: !!(
                t.canPlayType("audio/x-m4a;") ||
                t.canPlayType("audio/m4a;") ||
                t.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              mp4: !!(
                t.canPlayType("audio/x-mp4;") ||
                t.canPlayType("audio/mp4;") ||
                t.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              weba: !!t
                .canPlayType('audio/webm; codecs="vorbis"')
                .replace(/^no$/, ""),
            }),
            (this.is = {
              ff: Boolean(
                null != window.mozInnerScreenX &&
                  /firefox/.test(navigator.userAgent.toLowerCase())
              ),
              ie: Boolean(document.all && !window.opera),
              opera: Boolean(window.opera),
              chrome: Boolean(window.chrome),
              safari: Boolean(
                !window.chrome &&
                  /safari/.test(navigator.userAgent.toLowerCase()) &&
                  window.getComputedStyle &&
                  !window.globalStorage &&
                  !window.opera
              ),
            }),
            (this.playDelay = -60),
            (this.stopDelay = 30),
            this.is.chrome && (this.playDelay = -25),
            this.is.chrome && (this.stopDelay = 25),
            this.is.ff && (this.playDelay = -25),
            this.is.ff && (this.stopDelay = 85),
            this.is.opera && (this.playDelay = 5),
            this.is.opera && (this.stopDelay = 0),
            e)) {
              (this.soundList[i] = i),
                (t = (n = e[i].path) + "." + ig.Sound.FORMAT.OGG.ext);
              var n = n + "." + ig.Sound.FORMAT.MP3.ext,
                o = null;
              if (
                (this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()]
                  ? (o = t)
                  : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] &&
                    (o = n),
                o)
              ) {
                ig.ua.mobile
                  ? ig.ua.iOS && (o = n)
                  : -1 !=
                      (e = navigator.userAgent.toLowerCase()).indexOf(
                        "safari"
                      ) &&
                    -1 >= e.indexOf("chrome") &&
                    (o = n),
                  this.audio.addEventListener(
                    "error",
                    function () {
                      this.audio.error &&
                        4 === this.audio.error.code &&
                        (this.isSupported = !1);
                    },
                    !1
                  ),
                  (this.audio.src = o),
                  (this.audio._pos = 0),
                  (this.audio.preload = "auto"),
                  (this.audio.volume = this._volume),
                  (this.inactiveAudio = new Audio()),
                  (this.inactiveAudio.src = o),
                  (this.inactiveAudio._pos = 0),
                  (this.inactiveAudio.preload = "auto"),
                  (this.inactiveAudio.volume = this._volume),
                  this.inactiveAudio.load();
                var s = function () {
                  (this._duration = this.audio.duration),
                    this._loaded || (this._loaded = !0),
                    this.bgmPlaying ? this.play(null, !0) : this.stop(),
                    this.audio.removeEventListener("canplaythrough", s, !1);
                }.bind(this);
                this.audio.addEventListener("canplaythrough", s, !1),
                  this.audio.load();
                break;
              }
            }
          }
        },
        play: function (e, t) {
          if (this.isSupported)
            if (((this.bgmPlaying = !0), this.webaudio)) {
              if (
                !t &&
                this.reinitOnPlay &&
                this.webaudio.source_loop.buffer == this.webaudio.buffer
              ) {
                this.webaudio.source_loop._playing &&
                  (this.webaudio.source_loop[this.webaudio.compatibility.stop](
                    0
                  ),
                  (this.webaudio.source_loop._playing = !1),
                  (this.pausedTime +=
                    this.webaudio.context.currentTime -
                    this.webaudio.source_loop._startTime),
                  (this.pausedTime %=
                    this.webaudio.source_loop.buffer.duration),
                  (this.webaudio.source_loop._startTime = 0),
                  "noteOn" === this.webaudio.compatibility.start) &&
                  this.webaudio.source_once[this.webaudio.compatibility.stop](
                    0
                  );
                try {
                  this.webaudio.context.close(),
                    (this.webaudio.context = new this.AudioContext()),
                    (this.webaudio.gainNode =
                      this.webaudio.context.createGain()),
                    this.webaudio.gainNode.connect(
                      this.webaudio.context.destination
                    ),
                    (this.webaudio.gainNode.gain.value = this._volume);
                  var i = "start",
                    n = "stop",
                    o = this.webaudio.context.createBufferSource();
                  "function" != typeof o.start && (i = "noteOn"),
                    (this.webaudio.compatibility.start = i),
                    "function" != typeof o.stop && (n = "noteOff"),
                    (this.webaudio.compatibility.stop = n),
                    (this.webaudio.source_loop = {}),
                    this.play(null, !0);
                } catch (e) {}
              }
              this.webaudio.buffer
                ? this.muteFlag ||
                  ((this.bgmPlaying = !0),
                  this.webaudio.source_loop._playing) ||
                  ((this.webaudio.source_loop =
                    this.webaudio.context.createBufferSource()),
                  (this.webaudio.source_loop.buffer = this.webaudio.buffer),
                  (this.webaudio.source_loop.loop = !0),
                  this.webaudio.source_loop.connect(this.webaudio.gainNode),
                  (null == e || isNaN(e)) &&
                    ((e = 0), this.pausedTime && (e = this.pausedTime)),
                  (this.webaudio.source_loop._startTime =
                    this.webaudio.context.currentTime),
                  "noteOn" === this.webaudio.compatibility.start
                    ? ((this.webaudio.source_once =
                        this.webaudio.context.createBufferSource()),
                      (this.webaudio.source_once.buffer = this.webaudio.buffer),
                      this.webaudio.source_once.connect(this.webaudio.gainNode),
                      this.webaudio.source_once.noteGrainOn(
                        0,
                        e,
                        this.webaudio.buffer.duration - e
                      ),
                      this.webaudio.source_loop[
                        this.webaudio.compatibility.start
                      ](
                        this.webaudio.context.currentTime +
                          (this.webaudio.buffer.duration - e)
                      ))
                    : this.webaudio.source_loop[
                        this.webaudio.compatibility.start
                      ](0, e),
                  (this.webaudio.source_loop._playing = !0))
                : (this.bgmPlaying = !0);
            } else if (this.audio) {
              var s = this.audio;
              if (!this.muteFlag)
                if (
                  ((this.bgmPlaying = !0),
                  isNaN(e) &&
                    ((e = 0), this.pausedTime && (e = this.pausedTime)),
                  (i = this._duration - e),
                  this._onEndTimer &&
                    (clearTimeout(this._onEndTimer), (this._onEndTimer = null)),
                  (this._onEndTimer = setTimeout(
                    function () {
                      if (
                        ((this.audio.currentTime = 0),
                        this.audio.pause(),
                        (this.pausedTime = 0),
                        this.inactiveAudio)
                      ) {
                        var e = this.audio;
                        (this.audio = this.inactiveAudio),
                          (this.inactiveAudio = e);
                      }
                      this.play();
                    }.bind(this),
                    1e3 * i + this.playDelay
                  )),
                  4 === s.readyState || (!s.readyState && navigator.isCocoonJS))
                )
                  (s.readyState = 4),
                    (s.currentTime = e),
                    (s.muted = this.muteFlag || s.muted),
                    (s.volume = this._volume),
                    setTimeout(function () {
                      s.play();
                    }, 0);
                else {
                  clearTimeout(this._onEndTimer), (this._onEndTimer = null);
                  var a = function () {
                    this.play,
                      this.play(),
                      s.removeEventListener("canplaythrough", a, !1);
                  }.bind(this);
                  s.addEventListener("canplaythrough", a, !1);
                }
            }
        },
        stop: function () {
          if (((this.bgmPlaying = !1), this.isSupported))
            if (this.webaudio)
              this.webaudio.source_loop._playing &&
                (this.webaudio.source_loop[this.webaudio.compatibility.stop](0),
                (this.webaudio.source_loop._playing = !1),
                (this.pausedTime +=
                  this.webaudio.context.currentTime -
                  this.webaudio.source_loop._startTime),
                (this.pausedTime %= this.webaudio.source_loop.buffer.duration),
                (this.webaudio.source_loop._startTime = 0),
                "noteOn" === this.webaudio.compatibility.start) &&
                this.webaudio.source_once[this.webaudio.compatibility.stop](0);
            else if (this.audio) {
              var e = this.audio;
              4 == e.readyState &&
                ((this.pausedTime = e.currentTime),
                (e.currentTime = 0),
                e.pause(),
                clearTimeout(this._onEndTimer),
                (this._onEndTimer = null));
            }
        },
        volume: function (e) {
          if (isNaN(e) || null == e) return this.getVolume();
          this.isSupported &&
            ((this._volume = e),
            0 > this._volume
              ? (this._volume = 0)
              : 1 < this._volume && (this._volume = 1),
            this.webaudio
              ? this.webaudio.gainNode &&
                (this.webaudio.gainNode.gain.value = this._volume)
              : this.audio &&
                ((this.audio.volume = this._volume),
                this.inactiveAudio &&
                  (this.inactiveAudio.volume = this._volume)));
        },
        getVolume: function () {
          return this.isSupported ? this._volume : 0;
        },
        mute: function (e) {
          this.parent(e),
            0 == this.muteFlag &&
              ((this.muteFlag = !0),
              this.bgmPlaying && (this.stop(), (this.bgmPlaying = !0)));
        },
        unmute: function (e) {
          this.parent(e),
            !this.stayMuteFlag &&
              1 == this.muteFlag &&
              ((this.muteFlag = !1), this.bgmPlaying && this.play());
        },
      });
    }),
  (ig.baked = !0),
  ig.module("plugins.audio.sound-info").defines(function () {
    SoundInfo = ig.Class.extend({
      FORMATS: { OGG: ".ogg", MP3: ".mp3" },
      sfx: {
        staticSound: { path: "media/audio/play/static" },
        catHappy: { path: "media/audio/cat-happy" },
        catAngry: { path: "media/audio/cat-angry" },
        hide: { path: "media/audio/hide" },
        shuffle: { path: "media/audio/shuffle" },
        logosplash1: { path: "media/audio/opening/logosplash1" },
        logosplash2: { path: "media/audio/opening/logosplash2" },
        button: { path: "media/audio/button" },
        bark1: { path: "" },
        bark2: { path: "" },
        bark3: { path: "" },
      },
      bgm: {
        background: {
          path: "media/audio/bgm",
          startOgg: 0,
          endOgg: 21.463,
          startMp3: 0,
          endMp3: 21.463,
        },
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.audio.sound-handler")
    .requires(
      "plugins.audio.impact-music-player",
      "plugins.audio.impact-sound-player",
      "plugins.audio.howler-player",
      "plugins.audio.howler-music-player",
      "plugins.audio.jukebox-player",
      "plugins.audio.webaudio-music-player",
      "plugins.audio.sound-info"
    )
    .defines(function () {
      ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo(),
        init: function () {
          console.log("Initiating sound handler"),
            ig.ua.mobile
              ? ((this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)),
                (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                  loop: !0,
                })),
                this.bgmPlayer.isSupported ||
                  (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0,
                  })))
              : ((this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)),
                (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                  loop: !0,
                })),
                this.bgmPlayer.isSupported ||
                  (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0,
                  })));
        },
        unlockWebAudio: function () {
          Howler &&
            (Howler.ctx &&
              "running" !== Howler.ctx.state &&
              Howler.ctx.resume(),
            Howler._audioUnlocked ||
              ("function" == typeof Howler._unlockAudio &&
                Howler._unlockAudio())),
            ig &&
              ig.webaudio_ctx &&
              ig.webaudio_ctx.state &&
              "running" !== ig.webaudio_ctx.state &&
              ig.webaudio_ctx.resume(),
            this.bgmPlayer.webaudio &&
              this.bgmPlayer.webaudio.context &&
              this.bgmPlayer.webaudio.context.state &&
              "running" !== this.bgmPlayer.webaudio.context.state &&
              this.bgmPlayer.webaudio.context.resume();
        },
        checkBGM: function () {
          return this.bgmPlayer.stayMuteFlag;
        },
        checkSFX: function () {
          return this.sfxPlayer.stayMuteFlag;
        },
        muteSFX: function (e) {
          this.sfxPlayer && this.sfxPlayer.mute(e);
        },
        muteBGM: function (e) {
          this.bgmPlayer && this.bgmPlayer.mute(e);
        },
        unmuteSFX: function (e) {
          this.sfxPlayer && this.sfxPlayer.unmute(e);
        },
        unmuteBGM: function (e) {
          this.bgmPlayer && this.bgmPlayer.unmute(e);
        },
        muteAll: function (e) {
          this.muteSFX(e), this.muteBGM(e);
        },
        unmuteAll: function (e) {
          this.unlockWebAudio(), this.unmuteSFX(e), this.unmuteBGM(e);
        },
        forceMuteAll: function () {
          this.focusBlurMute || this.muteAll(!1), (this.focusBlurMute = !0);
        },
        forceUnMuteAll: function () {
          this.focusBlurMute && (this.unmuteAll(!1), (this.focusBlurMute = !1));
        },
        saveVolume: function () {
          this.sfxPlayer &&
            ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume()),
            this.bgmPlayer &&
              ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume());
        },
        forceLoopBGM: function () {
          var e;
          if (
            !this.focusBlurMute &&
            this.bgmPlayer.bgmPlaying &&
            this.bgmPlayer
          ) {
            var t = this.bgmPlayer.jukeboxPlayer;
            if (t) {
              null != window.mozInnerScreenX &&
                /firefox/.test(navigator.userAgent.toLowerCase()),
                (e = Boolean(window.chrome)),
                !window.chrome &&
                  /safari/.test(navigator.userAgent.toLowerCase());
              var i = 0.1;
              ig.ua.mobile &&
                ((i = 0.115), ig.ua.android && ((i = 0.45), e && (i = 0.3))),
                t.settings.spritemap.music &&
                  ((e = t.settings.spritemap.music.end - i),
                  t.getCurrentTime() >= e &&
                    ((e = t.settings.spritemap.music.start),
                    ig.ua.android
                      ? this.forcelooped ||
                        (t.play(e, !0),
                        (this.forcelooped = !0),
                        setTimeout(function () {
                          ig.soundHandler.forcelooped = !1;
                        }, i))
                      : t.setCurrentTime(e)));
            } else
              "ImpactMusicPlayer" == this.bgmPlayer.tagName &&
                (null != window.mozInnerScreenX &&
                  /firefox/.test(navigator.userAgent.toLowerCase()),
                (e = Boolean(window.chrome)),
                !window.chrome &&
                  /safari/.test(navigator.userAgent.toLowerCase()),
                (i = 0.1),
                ig.ua.mobile &&
                  ((i = 0.115), ig.ua.android && ((i = 0.45), e && (i = 0.3))),
                (t = 0),
                "mp3" == ig.soundManager.format.ext && (t = 0.05),
                ig.music.currentTrack &&
                  ((e = ig.music.currentTrack.duration - i),
                  ig.music.currentTrack.currentTime >= e &&
                    (ig.ua.android
                      ? this.forcelooped ||
                        (ig.music.currentTrack.pause(),
                        (ig.music.currentTrack.currentTime = t),
                        ig.music.currentTrack.play(),
                        (this.forcelooped = !0),
                        setTimeout(function () {
                          ig.soundHandler.forcelooped = !1;
                        }, i))
                      : (ig.music.currentTrack.currentTime = t))));
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.handlers.visibility-handler")
    .requires("plugins.audio.sound-handler")
    .defines(function () {
      ig.VisibilityHandler = ig.Class.extend({
        version: "1.0.3",
        config: {
          allowResumeWithoutFocus: {
            desktop: !0,
            mobile: { kaios: !1, default: !0 },
          },
          handlerDelay: { desktop: 0, mobile: { kaios: 0, default: 0 } },
          autoFocusOnResume: {
            desktop: !0,
            mobile: { kaios: !1, default: !0 },
          },
          autoFocusAfterResume: {
            desktop: !0,
            mobile: { kaios: !1, default: !0 },
          },
        },
        browserPrefixes: ["o", "ms", "moz", "webkit"],
        browserPrefix: null,
        hiddenPropertyName: null,
        visibilityEventName: null,
        visibilityStateName: null,
        isShowingOverlay: !1,
        isFocused: !1,
        isPaused: !1,
        init: function () {
          this.initVisibilityHandler(),
            this.initFocusHandler(),
            this.initPageTransitionHandler(),
            (ig.visibilityHandler = this);
        },
        pauseHandler: function () {
          ig.game && ig.game.pauseGame(),
            ig.soundHandler && ig.soundHandler.forceMuteAll();
        },
        resumeHandler: function () {
          ig.game && ig.game.resumeGame(),
            ig.soundHandler && ig.soundHandler.forceUnMuteAll();
        },
        initVisibilityHandler: function () {
          (this.browserPrefix = this.getBrowserPrefix()),
            (this.hiddenPropertyName = this.getHiddenPropertyName(
              this.browserPrefix
            )),
            (this.visibilityEventName = this.getVisibilityEventName(
              this.browserPrefix
            )),
            (this.visibilityStateName = this.getVisibilityStateName(
              this.browserPrefix
            )),
            this.visibilityEventName &&
              document.addEventListener(
                this.visibilityEventName,
                this.onChange.bind(this),
                !0
              );
        },
        initFocusHandler: function () {
          window.addEventListener("blur", this.onChange.bind(this), !0),
            document.addEventListener("blur", this.onChange.bind(this), !0),
            document.addEventListener("focusout", this.onChange.bind(this), !0),
            window.addEventListener("focus", this.onChange.bind(this), !0),
            document.addEventListener("focus", this.onChange.bind(this), !0),
            document.addEventListener("focusin", this.onChange.bind(this), !0);
        },
        initPageTransitionHandler: function () {
          window.addEventListener("pagehide", this.onChange.bind(this), !0),
            window.addEventListener("pageshow", this.onChange.bind(this), !0);
        },
        getBrowserPrefix: function () {
          var e = null;
          return (
            this.browserPrefixes.forEach(
              function (t) {
                if (this.getHiddenPropertyName(t) in document) return (e = t);
              }.bind(this)
            ),
            e
          );
        },
        getHiddenPropertyName: function (e) {
          return e ? e + "Hidden" : "hidden";
        },
        getVisibilityEventName: function (e) {
          return (e || "") + "visibilitychange";
        },
        getVisibilityStateName: function (e) {
          return e ? e + "VisibilityState" : "visibilityState";
        },
        hasView: function () {
          return !(
            document[this.hiddenPropertyName] ||
            "visible" !== document[this.visibilityStateName]
          );
        },
        hasFocus: function () {
          return document.hasFocus() || this.isFocused;
        },
        onOverlayShow: function () {
          this.systemPaused(), (this.isShowingOverlay = !0);
        },
        onOverlayHide: function () {
          (this.isShowingOverlay = !1), this.systemResumed();
        },
        systemPaused: function () {
          return !this.isPaused && (this.pauseHandler(), (this.isPaused = !0));
        },
        systemResumed: function () {
          if (!this.isPaused || !this.hasView() || this.isShowingOverlay)
            return !1;
          if (!this.hasFocus())
            if (ig.ua.mobile) {
              if (this.isKaiOS()) {
                if (!this.config.allowResumeWithoutFocus.mobile.kaios)
                  return !1;
              } else if (!this.config.allowResumeWithoutFocus.mobile.default)
                return !1;
            } else if (!this.config.allowResumeWithoutFocus.desktop) return !1;
          return (
            this.focusOnResume(),
            this.resumeHandler(),
            this.focusAfterResume(),
            (this.isPaused = !1),
            !0
          );
        },
        isKaiOS: function () {
          return /KAIOS/.test(navigator.userAgent) || !1;
        },
        focusOnResume: function () {
          return ig.ua.mobile
            ? this.isKaiOS()
              ? this.config.autoFocusOnResume.mobile.kaios
              : this.config.autoFocusOnResume.mobile.default
            : this.config.autoFocusOnResume.desktop;
        },
        focusAfterResume: function () {
          return ig.ua.mobile
            ? this.isKaiOS()
              ? this.config.autoFocusAfterResume.mobile.kaios
              : this.config.autoFocusAfterResume.mobile.default
            : this.config.autoFocusAfterResume.desktop;
        },
        focus: function (e) {
          window.focus && e && window.focus();
        },
        handleDelayedEvent: function (e) {
          if (
            !this.hasView() ||
            "pause" === e.type ||
            "pageHide" === e.type ||
            "blur" === e.type ||
            "focusout" === e.type
          ) {
            if ("blur" === e.type || "focusout" === e.type) {
              if (e.srcElement && "text" === e.srcElement.type) return !1;
              this.isFocused = !1;
            }
            return this.systemPaused(e);
          }
          return (
            ("focus" !== e.type && "focusin" !== e.type) ||
              (this.isFocused = !0),
            this.systemResumed(e)
          );
        },
        startDelayedEventHandler: function (e) {
          ig.ua.mobile
            ? this.isKaiOS()
              ? 0 < this.config.handlerDelay.mobile.kaios
                ? window.setTimeout(
                    function (e) {
                      this.handleDelayedEvent(e);
                    }.bind(this, e),
                    this.config.handlerDelay.mobile
                  )
                : this.handleDelayedEvent(e)
              : 0 < this.config.handlerDelay.mobile.default
              ? window.setTimeout(
                  function (e) {
                    this.handleDelayedEvent(e);
                  }.bind(this, e),
                  this.config.handlerDelay.mobile
                )
              : this.handleDelayedEvent(e)
            : 0 < this.config.handlerDelay.desktop
            ? window.setTimeout(
                function (e) {
                  this.handleDelayedEvent(e);
                }.bind(this, e),
                this.config.handlerDelay.desktop
              )
            : this.handleDelayedEvent(e);
        },
        onChange: function (e) {
          this.startDelayedEventHandler(e);
        },
      });
    }),
  (ig.baked = !0),
  ig.module("plugins.io.storage").defines(function () {
    ig.Storage = ig.Class.extend({
      staticInstantiate: function () {
        return ig.Storage.instance ? ig.Storage.instance : null;
      },
      init: function () {
        ig.Storage.instance = this;
      },
      isCapable: function () {
        return void 0 !== window.localStorage;
      },
      isSet: function (e) {
        return null !== this.get(e);
      },
      initUnset: function (e, t) {
        null === this.get(e) && this.set(e, t);
      },
      get: function (e) {
        if (!this.isCapable()) return null;
        try {
          return JSON.parse(localStorage.getItem(e));
        } catch (t) {
          return window.localStorage.getItem(e);
        }
      },
      getInt: function (e) {
        return ~~this.get(e);
      },
      getFloat: function (e) {
        return parseFloat(this.get(e));
      },
      getBool: function (e) {
        return !!this.get(e);
      },
      key: function (e) {
        return this.isCapable() ? window.localStorage.key(e) : null;
      },
      set: function (e, t) {
        if (!this.isCapable()) return null;
        try {
          window.localStorage.setItem(e, JSON.stringify(t));
        } catch (e) {
          console.log(e);
        }
      },
      setHighest: function (e, t) {
        t > this.getFloat(e) && this.set(e, t);
      },
      remove: function (e) {
        if (!this.isCapable()) return null;
        window.localStorage.removeItem(e);
      },
      clear: function () {
        if (!this.isCapable()) return null;
        window.localStorage.clear();
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.io.mouse")
    .requires("plugins.data.vector")
    .defines(function () {
      Mouse = ig.Class.extend({
        pos: new Vector2(0, 0),
        bindings: { click: [ig.KEY.MOUSE1] },
        init: function () {
          for (var e in (ig.input.initMouse(), this.bindings)) {
            this[e] = e;
            for (var t = 0; t < this.bindings[e].length; t++)
              ig.input.bind(this.bindings[e][t], e);
          }
        },
        getLast: function () {
          return this.pos;
        },
        getPos: function () {
          var e =
            ig.system.scale *
            ((ig.system.canvas.offsetWidth || ig.system.realWidth) /
              ig.system.realWidth);
          return (
            this.pos.set(
              (ig.input.mouse.x * e) /
                ig.sizeHandler.sizeRatio.x /
                ig.sizeHandler.scaleRatioMultiplier.x,
              (ig.input.mouse.y * e) /
                ig.sizeHandler.sizeRatio.y /
                ig.sizeHandler.scaleRatioMultiplier.y
            ),
            this.pos.clone()
          );
        },
      });
    }),
  (ig.baked = !0),
  ig.module("plugins.io.keyboard").defines(function () {
    Keyboard = ig.Class.extend({
      bindings: {
        jump: [ig.KEY.W, ig.KEY.UP_ARROW],
        moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
        moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
        shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE],
      },
      init: function () {
        for (var e in this.bindings) {
          this[e] = e;
          for (var t = 0; t < this.bindings[e].length; t++)
            ig.input.bind(this.bindings[e][t], e);
        }
      },
    });
  }),
  (ig.baked = !0),
  ig.module("plugins.io.gamepad-input").defines(function () {
    (ig.PADKEY = {
      BUTTON_0: 0,
      PADBUTTON_1: 1,
      BUTTON_2: 2,
      BUTTON_3: 3,
      BUTTON_LEFT_BUMPER: 4,
      BUTTON_RIGHT_BUMPER: 5,
      BUTTON_LEFT_TRIGGER: 6,
      BUTTON_RIGHT_TRIGGER: 7,
      BUTTON_LEFT_JOYSTICK: 10,
      BUTTON_RIGHT_JOYSTICK: 11,
      BUTTON_DPAD_UP: 12,
      BUTTON_DPAD_DOWN: 13,
      BUTTON_DPAD_LEFT: 14,
      BUTTON_DPAD_RIGHT: 15,
      BUTTON_MENU: 16,
      AXIS_LEFT_JOYSTICK_X: 0,
      AXIS_LEFT_JOYSTICK_Y: 1,
      AXIS_RIGHT_JOYSTICK_X: 2,
      AXIS_RIGHT_JOYSTICK_Y: 3,
    }),
      (ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: { x: 0, y: 0 },
        rightStick: { x: 0, y: 0 },
        start: function () {
          if (!this.isInit) {
            this.isInit = !0;
            var e = navigator.getGamepads || navigator.webkitGetGamepads;
            e &&
              (!navigator.getGamepads &&
                navigator.webkitGetGamepads &&
                (navigator.getGamepads = navigator.webkitGetGamepads),
              (this.list = navigator.getGamepads())),
              (this.isSupported = e);
          }
        },
        isAvailable: function () {
          return this.isInit && this.isSupported;
        },
        buttonPressed: function (e) {
          return "object" == typeof e ? e.pressed : 1 == e;
        },
        buttonDown: function (e) {
          (e = this.bindings[e]) &&
            ((this.states[e] = !0),
            this.downLocks[e] ||
              ((this.presses[e] = !0), (this.downLocks[e] = !0)));
        },
        buttonUp: function (e) {
          (e = this.bindings[e]) &&
            this.downLocks[e] &&
            !this.upLocks[e] &&
            ((this.states[e] = !1),
            (this.releases[e] = !0),
            (this.upLocks[e] = !0));
        },
        clearPressed: function () {
          for (var e in this.releases)
            (this.states[e] = !1), (this.downLocks[e] = !1);
          (this.releases = {}), (this.presses = {}), (this.upLocks = {});
        },
        bind: function (e, t) {
          this.bindings[e] = t;
        },
        unbind: function (e) {
          (this.releases[this.bindings[e]] = !0), (this.bindings[e] = null);
        },
        unbindAll: function () {
          (this.bindings = {}),
            (this.states = {}),
            (this.presses = {}),
            (this.releases = {}),
            (this.downLocks = {}),
            (this.upLocks = {});
        },
        state: function (e) {
          return this.states[e];
        },
        pressed: function (e) {
          return this.presses[e];
        },
        released: function (e) {
          return this.releases[e];
        },
        clamp: function (e, t, i) {
          return e < t ? t : e > i ? i : e;
        },
        pollGamepads: function () {
          if (this.isSupported) {
            for (var e in ((this.leftStick.x = 0),
            (this.leftStick.y = 0),
            (this.rightStick.x = 0),
            (this.rightStick.y = 0),
            (this.list = navigator.getGamepads()),
            this.bindings)) {
              for (var t = !1, i = 0; i < this.list.length; i++)
                if (
                  (o = this.list[i]) &&
                  o.buttons &&
                  this.buttonPressed(o.buttons[e])
                ) {
                  t = !0;
                  break;
                }
              t ? this.buttonDown(e) : this.buttonUp(e);
            }
            for (i = 0; i < this.list.length; i++)
              if ((o = this.list[i]) && o.axes) {
                (e = o.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X]),
                  (t = o.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y]);
                var n = o.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                  o = o.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                (this.leftStick.x += isNaN(e) ? 0 : e),
                  (this.leftStick.y += isNaN(t) ? 0 : t),
                  (this.rightStick.x += isNaN(n) ? 0 : n),
                  (this.rightStick.y += isNaN(o) ? 0 : o);
              }
            0 < this.list.length &&
              ((this.leftStick.x = this.clamp(this.leftStick.x, -1, 1)),
              (this.leftStick.y = this.clamp(this.leftStick.y, -1, 1)),
              (this.rightStick.x = this.clamp(this.rightStick.x, -1, 1)),
              (this.rightStick.y = this.clamp(this.rightStick.y, -1, 1)));
          }
        },
      }));
  }),
  (ig.baked = !0),
  ig
    .module("plugins.io.gamepad")
    .requires("plugins.io.gamepad-input")
    .defines(function () {
      Gamepad = ig.Class.extend({
        bindings: { padJump: [ig.PADKEY.BUTTON_0] },
        init: function () {
          for (var e in (ig.gamepadInput.start(), this.bindings))
            for (var t = 0; t < this.bindings[e].length; t++)
              ig.gamepadInput.bind(this.bindings[e][t], e);
        },
        press: function () {},
        held: function () {},
        release: function () {},
      });
    }),
  (ig.baked = !0),
  ig.module("plugins.io.multitouch").defines(function () {
    Multitouch = ig.Class.extend({
      init: function () {
        ig.multitouchInput.start();
      },
      getTouchesPos: function () {
        if (ig.ua.mobile) {
          if (0 < ig.multitouchInput.touches.length) {
            for (
              var e = [], t = 0;
              t < ig.multitouchInput.touches.length;
              t++
            ) {
              var i = ig.multitouchInput.touches[t];
              e.push({ x: i.x, y: i.y });
            }
            return e;
          }
          return null;
        }
      },
    });
  }),
  (ig.baked = !0),
  ig.module("plugins.io.multitouch-input").defines(function () {
    ig.MultitouchInput = ig.Class.extend({
      isStart: !1,
      touches: [],
      multitouchCapable: !1,
      lastEventUp: null,
      start: function () {
        this.isStart ||
          ((this.isStart = !0),
          navigator.maxTouchPoints &&
            1 < navigator.maxTouchPoints &&
            (this.multitouchCapable = !0),
          ig.ua.touchDevice &&
            (window.navigator.msPointerEnabled &&
              (ig.system.canvas.addEventListener(
                "MSPointerDown",
                this.touchdown.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "MSPointerUp",
                this.touchup.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "MSPointerMove",
                this.touchmove.bind(this),
                !1
              ),
              (ig.system.canvas.style.msContentZooming = "none"),
              (ig.system.canvas.style.msTouchAction = "none")),
            ig.system.canvas.addEventListener(
              "touchstart",
              this.touchdown.bind(this),
              !1
            ),
            ig.system.canvas.addEventListener(
              "touchend",
              this.touchup.bind(this),
              !1
            ),
            ig.system.canvas.addEventListener(
              "touchmove",
              this.touchmove.bind(this),
              !1
            )));
      },
      touchmove: function (e) {
        if (ig.ua.touchDevice) {
          var t = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
            i = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
          if (
            ((t = ig.system.scale * (t / ig.system.realWidth)),
            (i = ig.system.scale * (i / ig.system.realHeight)),
            e.touches)
          ) {
            for (; 0 < this.touches.length; ) this.touches.pop();
            !this.multitouchCapable &&
              1 < e.touches.length &&
              (this.multitouchCapable = !0);
            var n = { left: 0, top: 0 };
            ig.system.canvas.getBoundingClientRect &&
              (n = ig.system.canvas.getBoundingClientRect());
            for (var o = 0; o < e.touches.length; o++) {
              var s = e.touches[o];
              s &&
                this.touches.push({
                  x: (s.clientX - n.left) / t,
                  y: (s.clientY - n.top) / i,
                });
            }
          } else this.windowMove(e);
        }
        try {
          ig.soundHandler.unlockWebAudio();
        } catch (e) {}
      },
      touchdown: function (e) {
        var t = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          i = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
        if (
          ((t = ig.system.scale * (t / ig.system.realWidth)),
          (i = ig.system.scale * (i / ig.system.realHeight)),
          window.navigator.msPointerEnabled)
        )
          this.windowKeyDown(e);
        else if (ig.ua.touchDevice && e.touches) {
          for (; 0 < this.touches.length; ) this.touches.pop();
          !this.multitouchCapable &&
            1 < e.touches.length &&
            (this.multitouchCapable = !0);
          var n = { left: 0, top: 0 };
          ig.system.canvas.getBoundingClientRect &&
            (n = ig.system.canvas.getBoundingClientRect());
          for (var o = 0; o < e.touches.length; o++) {
            var s = e.touches[o];
            s &&
              this.touches.push({
                x: (s.clientX - n.left) / t,
                y: (s.clientY - n.top) / i,
              });
          }
        }
      },
      touchup: function (e) {
        var t = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
        if (
          (parseInt(ig.system.canvas.offsetHeight),
          (t = ig.system.scale * (t / ig.system.realWidth)),
          window.navigator.msPointerEnabled)
        )
          this.windowKeyUp(e);
        else {
          this.lastEventUp = e;
          var i = { left: 0, top: 0 };
          if (
            (ig.system.canvas.getBoundingClientRect &&
              (i = ig.system.canvas.getBoundingClientRect()),
            ig.ua.touchDevice)
          )
            for (
              e = (e.changedTouches[0].clientX - i.left) / t, t = 0;
              t < this.touches.length;
              t++
            )
              this.touches[t].x >= e - 40 &&
                this.touches[t].x <= e + 40 &&
                this.touches.splice(t, 1);
        }
        ig.visibilityHandler && ig.visibilityHandler.onChange("focus");
        try {
          ig.soundHandler.unlockWebAudio();
        } catch (e) {}
      },
      windowKeyDown: function (e) {
        var t = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          i = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
        if (
          ((t = ig.system.scale * (t / ig.system.realWidth)),
          (i = ig.system.scale * (i / ig.system.realHeight)),
          window.navigator.msPointerEnabled)
        ) {
          var n = { left: 0, top: 0 };
          ig.system.canvas.getBoundingClientRect &&
            (n = ig.system.canvas.getBoundingClientRect()),
            (e = e.changedTouches ? e.changedTouches : [e]);
          for (var o = 0; o < e.length; ++o) {
            for (
              var s =
                  void 0 !== (r = e[o]).identifier
                    ? r.identifier
                    : void 0 !== r.pointerId
                    ? r.pointerId
                    : 1,
                a = (r.clientX - n.left) / t,
                r = (r.clientY - n.top) / i,
                l = 0;
              l < this.touches.length;
              ++l
            )
              this.touches[l].identifier == s && this.touches.splice(l, 1);
            this.touches.push({ x: a, y: r, identifier: s });
          }
          for (t = 0; t < this.touches.length; t++);
        }
      },
      windowKeyUp: function (e) {
        e =
          void 0 !== e.identifier
            ? e.identifier
            : void 0 !== e.pointerId
            ? e.pointerId
            : 1;
        for (var t = 0; t < this.touches.length; ++t)
          this.touches[t].identifier == e && this.touches.splice(t, 1);
        for (; 0 < this.touches.length; ) this.touches.pop();
        ig.visibilityHandler && ig.visibilityHandler.onChange("focus");
        try {
          ig.soundHandler.unlockWebAudio();
        } catch (e) {}
      },
      windowMove: function (e) {
        var t = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          i = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
          n =
            ((t = ig.system.scale * (t / ig.system.realWidth)),
            (i = ig.system.scale * (i / ig.system.realHeight)),
            { left: 0, top: 0 });
        if (
          (ig.system.canvas.getBoundingClientRect &&
            (n = ig.system.canvas.getBoundingClientRect()),
          window.navigator.msPointerEnabled)
        )
          for (
            var o =
                void 0 !== e.identifier
                  ? e.identifier
                  : void 0 !== e.pointerId
                  ? e.pointerId
                  : 1,
              s = 0;
            s < this.touches.length;
            ++s
          )
            if (this.touches[s].identifier == o) {
              var a = (e.clientY - n.top) / i;
              (this.touches[s].x = (e.clientX - n.left) / t),
                (this.touches[s].y = a);
            }
        try {
          ig.soundHandler.unlockWebAudio();
        } catch (e) {}
      },
      clear: function () {
        for (var e = 0; e < this.released.length; ++e)
          this.released[e] && (this.released.splice(e, 1), e--);
      },
      pollMultitouch: function (e) {
        !this.multitouchCapable && 1 < e && (this.multitouchCapable = !0);
      },
      spliceFromArray: function (e, t) {
        for (var i = 0; i < t.length; i++)
          for (var n = 0; n < e.length; n++)
            e[n].identifier === t[i].identifier && (e.splice(n, 1), n--);
      },
      updateSizeProperties: function () {
        var e = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          t = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
        (this.scaleX = ig.system.scale * (e / ig.system.realWidth)),
          (this.scaleY = ig.system.scale * (t / ig.system.realHeight));
      },
      upgrade: function (e, t, i) {
        var n = { left: 0, top: 0 };
        ig.system.canvas.getBoundingClientRect &&
          (n = ig.system.canvas.getBoundingClientRect());
        for (
          var o = (i.clientX - n.left) / this.scaleX,
            s = ((n = (i.clientY - n.top) / this.scaleY), 0);
          s < e.length;
          s++
        )
          if (
            void 0 !== typeof e[s].identifier &&
            void 0 !== typeof i.identifier &&
            i.identifier === e[s].identifier
          ) {
            e.splice(s, 1), t.push({ identifier: i.identifier, x: o, y: n });
            break;
          }
      },
      updateArray: function (e, t) {
        var i = { left: 0, top: 0 };
        ig.system.canvas.getBoundingClientRect &&
          (i = ig.system.canvas.getBoundingClientRect());
        for (
          var n = (t.clientX - i.left) / this.scaleX,
            o = ((i = (t.clientY - i.top) / this.scaleY), 0);
          o < e.length;
          o++
        )
          if (
            void 0 !== typeof e[o].identifier &&
            void 0 !== typeof t.identifier &&
            t.identifier === e[o].identifier
          ) {
            (e[o].x = n), (e[o].y = i);
            break;
          }
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.io.fake-storage")
    .requires("impact.game")
    .defines(function () {
      ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function () {
          ig.FakeStorage.instance = this;
        },
        initUnset: function (e, t) {
          null === this.get(e) && this.set(e, t);
        },
        set: function (e, t) {
          this.tempData[e] = JSON.stringify(t);
        },
        setHighest: function (e, t) {
          t > this.getFloat(e) && this.set(e, t);
        },
        get: function (e) {
          return void 0 === this.tempData[e]
            ? null
            : JSON.parse(this.tempData[e]);
        },
        getInt: function (e) {
          return ~~this.get(e);
        },
        getFloat: function (e) {
          return parseFloat(this.get(e));
        },
        getBool: function (e) {
          return !!this.get(e);
        },
        isSet: function (e) {
          return null !== this.get(e);
        },
        remove: function (e) {
          delete this.tempData[e];
        },
        clear: function () {
          this.tempData = {};
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.io.io-manager")
    .requires(
      "plugins.io.storage",
      "plugins.io.mouse",
      "plugins.io.keyboard",
      "plugins.io.gamepad",
      "plugins.io.multitouch",
      "plugins.io.multitouch-input",
      "plugins.io.gamepad-input",
      "plugins.io.fake-storage"
    )
    .defines(function () {
      IoManager = ig.Class.extend({
        version: "1.0.0",
        storage: null,
        localStorageSupport: !1,
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function () {
          (ig.multitouchInput = new ig.MultitouchInput()),
            (ig.gamepadInput = new ig.GamepadInput()),
            this.unbindAll(),
            this.initStorage(),
            this.initMouse(),
            this.initKeyboard();
        },
        unbindAll: function () {
          ig.input.unbindAll(), ig.gamepadInput.unbindAll();
        },
        initStorage: function () {
          try {
            window.localStorage.setItem("test", "test"),
              window.localStorage.removeItem("test"),
              (this.storage = new ig.Storage());
          } catch (e) {
            console.log("using fake storage"),
              (this.storage = new ig.FakeStorage());
          }
        },
        initMouse: function () {
          this.mouse = new Mouse();
        },
        initKeyboard: function () {
          this.keyboard = new Keyboard();
        },
        initMultitouch: function () {
          this.multitouch = new Multitouch();
        },
        initGamepad: function () {
          this.gamepad = new Gamepad();
        },
        press: function (e) {
          return !!(
            ig.input.pressed(e) ||
            (this.gamepad && this.gamepad.press(e))
          );
        },
        held: function (e) {
          return !!(
            ig.input.state(e) ||
            (this.gamepad && this.gamepad.state(e))
          );
        },
        release: function (e) {
          return !!(
            ig.input.released(e) ||
            (this.gamepad && this.gamepad.released(e))
          );
        },
        getClickPos: function () {
          return this.mouse.getPos();
        },
        getLastClickPos: function () {
          return this.mouse.getLast();
        },
        getTouchesPos: function () {
          return this.multitouch.getTouchesPos();
        },
        checkOverlap: function (e, t, i, n, o) {
          return !(e.x > t + n || e.x < t || e.y > i + o || e.y < i);
        },
        clear: function () {
          ig.multitouchInput.clear();
        },
        _supportsLocalStorage: function () {
          try {
            return (
              localStorage.setItem("test", "test"),
              localStorage.removeItem("test"),
              (this.localStorageSupport =
                "localStorage" in window && null !== window.localStorage)
            );
          } catch (e) {
            return this.localStorageSupport;
          }
        },
        storageIsSet: function (e) {
          return "function" == typeof this.storage.isSet
            ? this.storage.isSet(e)
            : null;
        },
        storageGet: function (e) {
          return "function" == typeof this.storage.get
            ? this.storage.get(e)
            : null;
        },
        storageSet: function (e, t) {
          return "function" == typeof this.storage.set
            ? this.storage.set(e, t)
            : null;
        },
        assert: function (e, t, i) {
          if (t !== i)
            throw (
              "actualValue:" + t + " not equal to testValue:" + i + " at " + e
            );
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.io.storage-manager")
    .requires("impact.game", "plugins.io.io-manager")
    .defines(function () {
      (ig.Game.prototype.name = "Wheres-the-puppy"),
        (ig.Game.prototype.version = "1.0.0"),
        (ig.Game.prototype.sessionData = {}),
        (ig.Game.prototype.initData = function () {
          return (this.sessionData = {
            sound: 0.5,
            music: 0.5,
            level: 1,
            score: 0,
          });
        }),
        (ig.Game.prototype.setupStorageManager = function () {
          void 0 === this.name
            ? console.error(
                "Cannot found Game Name, Storage Manager Cancelled."
              )
            : void 0 === this.version
            ? console.error(
                "Cannot found Game Version, Storage Manager Cancelled."
              )
            : (this.io ||
                ((this.io = new IoManager()),
                console.log("IO Manager doesn't existed. Initialize...")),
              console.log("Plug in Storage Manager"),
              (this.storage = this.io.storage),
              (this.storageName = this.name + "-v" + this.version),
              this.loadAll());
        }),
        (ig.Game.prototype.loadAll = function () {
          var e = this.storage.get(this.storageName);
          for (var t in (null == e && (e = this.initData()), e))
            this.sessionData[t] = e[t];
          this.storage.set(this.storageName, e);
        }),
        (ig.Game.prototype.saveAll = function () {
          var e,
            t = this.storage.get(this.storageName);
          for (e in t) t[e] = this.sessionData[e];
          this.storage.set(this.storageName, t);
        }),
        (ig.Game.prototype.load = function (e) {
          return this.storage.get(this.storageName)[e];
        }),
        (ig.Game.prototype.save = function (e, t) {
          var i = this.storage.get(this.storageName);
          (i[e] = t), this.storage.set(this.storageName, i);
        });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.splash-loader")
    .requires("impact.loader", "impact.animation")
    .defines(function () {
      ig.SplashLoader = ig.Loader.extend({
        tapToStartDivId: "tap-to-start",
        bgfill: new ig.Image("media/graphics/sprites/bg-fill.png"),
        gameIcon: new ig.Image("media/graphics/sprites/game-icon.png"),
        init: function (e, t) {
          this.parent(e, t), ig.apiHandler.run("MJSPreroll");
        },
        end: function () {
          this.parent(), (this._drawStatus = 1);
          if (window.hasGameStarted == true) {
            ig.system.setGame(MyGame);
          } else {
            window.addEventListener("message", (e) => {
              console.log(e);
              if (e.data.type === "game_start") {
                ig.system.setGame(MyGame);
              }
            });
          }
          this.draw();
        },
        tapToStartDiv: function (e) {
          if (
            ((this.desktopCoverDIV = document.getElementById(
              this.tapToStartDivId
            )),
            !this.desktopCoverDIV)
          ) {
            (this.desktopCoverDIV = document.createElement("div")),
              (this.desktopCoverDIV.id = this.tapToStartDivId),
              this.desktopCoverDIV.setAttribute("class", "play"),
              this.desktopCoverDIV.setAttribute(
                "style",
                "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"
              ),
              (this.desktopCoverDIV.innerHTML =
                "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" +
                _STRINGS.Splash.TapToStart +
                "</div></div>"),
              (
                document.getElementById("play").parentNode ||
                document.getElementById("ajaxbar")
              ).appendChild(this.desktopCoverDIV);
            try {
              void 0 !== ig.sizeHandler
                ? void 0 !== ig.sizeHandler.coreDivsToResize &&
                  (ig.sizeHandler.coreDivsToResize.push(
                    "#" + this.tapToStartDivId
                  ),
                  "function" == typeof ig.sizeHandler.reorient &&
                    ig.sizeHandler.reorient())
                : "undefined" != typeof coreDivsToResize &&
                  (coreDivsToResize.push(this.tapToStartDivId),
                  "function" == typeof sizeHandler && sizeHandler());
            } catch (e) {
              console.log(e);
            }
            this.desktopCoverDIV.addEventListener("click", function () {
              ig.soundHandler.unlockWebAudio(),
                this.setAttribute("style", "visibility: hidden;"),
                "function" == typeof e && e();
            });
          }
        },
        setupCustomAnimation: function () {
          (this.animHeight = this.customAnim.height),
            (this.animWidth = this.customAnim.width),
            (this.customAnim = new ig.Animation(
              this.customAnim,
              0.025,
              [0, 1, 2, 3, 4, 5, 6, 7]
            ));
        },
        animate: function () {
          ig.Timer.step(), this.customAnim.update();
        },
        drawCheck: 0,
        draw: function () {
          (this._drawStatus += (this.status - this._drawStatus) / 5),
            1 === this.drawCheck &&
              console.log("Font should be loaded before loader draw loop"),
            2 > this.drawCheck && this.drawCheck++,
            (ig.system.context.fillStyle = "#85ff9e"),
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
          var e,
            t,
            i = ig.responsive.toAnchor(0, 0, "center-middle"),
            n = ig.system.width / this.bgfill.width,
            o = ig.system.height / this.bgfill.height;
          (n = n > o ? n : o),
            ig.responsive.drawScaledImage(
              this.bgfill,
              i.x,
              i.y,
              n,
              n,
              0.5,
              0.5
            ),
            this.gameIcon.draw(
              i.x - this.gameIcon.width / 2,
              i.y - this.gameIcon.height / 2 - 300
            ),
            (i = ig.system.scale),
            ig.ua.mobile ? ((n = 180), (o = 24)) : ((n = 250), (o = 30)),
            (e = 0.5 * ig.system.width - n / 2),
            (t = ig.system.height / 2 + 550),
            (ig.system.context.fillStyle = "#fff"),
            ig.system.context.fillRect(e * i, t * i, n * i, o * i),
            (ig.system.context.fillStyle = "#000"),
            ig.system.context.fillRect(
              e * i + i,
              t * i + i,
              n * i - i - i,
              o * i - i - i
            ),
            (ig.system.context.fillStyle = "#A00A2D"),
            ig.system.context.fillRect(
              e * i,
              t * i,
              n * i * this._drawStatus,
              o * i
            ),
            (ig.system.context.fillStyle = "#ffffff"),
            (ig.system.context.font = "16px montserrat"),
            (i = _STRINGS.Splash.Loading),
            ig.system.context.measureText(i),
            (ig.system.context.font = "bold 14px montserrat"),
            (ig.system.context.fillStyle = "#000000"),
            (i = _STRINGS.Splash.LogoLine1),
            ig.system.context.measureText(i),
            (ig.system.context.font = "bold 12px montserrat"),
            (i = _STRINGS.Splash.LogoLine2),
            ig.system.context.measureText(i),
            (ig.system.context.font = "bold 12px montserrat"),
            this.drawVersion();
        },
        drawVersion: function () {
          if (
            void 0 !== _SETTINGS.Versioning &&
            null !== _SETTINGS.Versioning &&
            _SETTINGS.Versioning.DrawVersion
          ) {
            var e = ig.system.context;
            (fontSize = _SETTINGS.Versioning.FontSize),
              (fontFamily = _SETTINGS.Versioning.FontFamily),
              (fillStyle = _SETTINGS.Versioning.FillStyle),
              e.save(),
              (e.textBaseline = "bottom"),
              (e.textAlign = "left"),
              (e.font = fontSize + " " + fontFamily || "10px Arial"),
              (e.fillStyle = fillStyle || "#ffffff"),
              e.fillText(
                "v" +
                  _SETTINGS.Versioning.Version +
                  "+build." +
                  _SETTINGS.Versioning.Build,
                10,
                ig.system.height - 10
              ),
              e.restore();
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.tween")
    .requires("impact.entity")
    .defines(function () {
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (e) {
          for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        }),
        (ig.Entity.prototype.tweens = []),
        (ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update),
        (ig.Entity.prototype.update = function () {
          if ((this._preTweenUpdate(), 0 < this.tweens.length)) {
            for (var e = [], t = 0; t < this.tweens.length; t++)
              this.tweens[t].update(),
                this.tweens[t].complete || e.push(this.tweens[t]);
            this.tweens = e;
          }
        }),
        (ig.Entity.prototype.tween = function (e, t, i) {
          return (e = new ig.Tween(this, e, t, i)), this.tweens.push(e), e;
        }),
        (ig.Entity.prototype.pauseTweens = function () {
          for (var e = 0; e < this.tweens.length; e++) this.tweens[e].pause();
        }),
        (ig.Entity.prototype.resumeTweens = function () {
          for (var e = 0; e < this.tweens.length; e++) this.tweens[e].resume();
        }),
        (ig.Entity.prototype.stopTweens = function (e) {
          for (var t = 0; t < this.tweens.length; t++) this.tweens[t].stop(e);
        }),
        (ig.Tween = function (e, t, i, n) {
          var o = {},
            s = {},
            a = {},
            r = 0,
            l = !1,
            u = !1,
            h = !1;
          (this.duration = i),
            (this.paused = this.complete = !1),
            (this.easing = ig.Tween.Easing.Linear.EaseNone),
            (this.onUpdate = this.onComplete = !1),
            (this.loop = this.delay = 0),
            (this.loopCount = -1),
            ig.merge(this, n),
            (this.loopNum = this.loopCount),
            (this.chain = function (e) {
              h = e;
            }),
            (this.initEnd = function (e, t, i) {
              if ("object" != typeof t[e]) i[e] = t[e];
              else
                for (subprop in t[e])
                  i[e] || (i[e] = {}), this.initEnd(subprop, t[e], i[e]);
            }),
            (this.initStart = function (e, t, i, n) {
              if ("object" != typeof i[e]) void 0 !== t[e] && (n[e] = i[e]);
              else
                for (subprop in i[e])
                  n[e] || (n[e] = {}),
                    void 0 !== t[e] &&
                      this.initStart(subprop, t[e], i[e], n[e]);
            }),
            (this.start = function () {
              for (var i in ((this.paused = this.complete = !1),
              (this.loopNum = this.loopCount),
              (r = 0),
              -1 == e.tweens.indexOf(this) && e.tweens.push(this),
              (u = !0),
              (l = new ig.Timer()),
              t))
                this.initEnd(i, t, s);
              for (i in s)
                this.initStart(i, s, e, o), this.initDelta(i, a, e, s);
            }),
            (this.initDelta = function (e, t, i, n) {
              if ("object" != typeof n[e]) t[e] = n[e] - i[e];
              else
                for (subprop in n[e])
                  t[e] || (t[e] = {}),
                    this.initDelta(subprop, t[e], i[e], n[e]);
            }),
            (this.propUpdate = function (e, t, i, n, o) {
              if ("object" != typeof i[e])
                t[e] = void 0 !== i[e] ? i[e] + n[e] * o : t[e];
              else
                for (subprop in i[e])
                  this.propUpdate(subprop, t[e], i[e], n[e], o);
            }),
            (this.propSet = function (e, t, i) {
              if ("object" != typeof t[e]) i[e] = t[e];
              else
                for (subprop in t[e])
                  i[e] || (i[e] = {}), this.propSet(subprop, t[e], i[e]);
            }),
            (this.update = function () {
              if (!u) return !1;
              if (this.delay) {
                if (l.delta() < this.delay) return;
                (this.delay = 0), l.reset();
              }
              if (this.paused || this.complete) return !1;
              var t = 1 < (t = (l.delta() + r) / this.duration) ? 1 : t,
                i = this.easing(t);
              for (property in a) this.propUpdate(property, e, o, a, i);
              if ((this.onUpdate && this.onUpdate(), 1 <= t)) {
                if (0 == this.loopNum || !this.loop)
                  return (
                    (this.complete = !0),
                    this.onComplete && this.onComplete(),
                    h && h.start(),
                    !1
                  );
                if (this.loop == ig.Tween.Loop.Revert) {
                  for (property in o) this.propSet(property, o, e);
                  (r = 0), l.reset(), -1 != this.loopNum && this.loopNum--;
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                  for (property in ((t = {}),
                  (i = {}),
                  ig.merge(t, s),
                  ig.merge(i, o),
                  ig.merge(o, t),
                  ig.merge(s, i),
                  s))
                    this.initDelta(property, a, e, s);
                  (r = 0), l.reset(), -1 != this.loopNum && this.loopNum--;
                }
              }
            }),
            (this.pause = function () {
              (this.paused = !0), l && l.delta && (r += l.delta());
            }),
            (this.resume = function () {
              (this.paused = !1), l && l.reset && l.reset();
            }),
            (this.stop = function (e) {
              e &&
                ((this.loop = this.complete = this.paused = !1),
                (r += i),
                this.update()),
                (this.complete = !0);
            });
        }),
        (ig.Tween.Loop = { Revert: 1, Reverse: 2 }),
        (ig.Tween.Easing = {
          Linear: {},
          Quadratic: {},
          Cubic: {},
          Quartic: {},
          Quintic: {},
          Sinusoidal: {},
          Exponential: {},
          Circular: {},
          Elastic: {},
          Back: {},
          Bounce: {},
        }),
        (ig.Tween.Easing.Linear.EaseNone = function (e) {
          return e;
        }),
        (ig.Tween.Easing.Quadratic.EaseIn = function (e) {
          return e * e;
        }),
        (ig.Tween.Easing.Quadratic.EaseOut = function (e) {
          return -e * (e - 2);
        }),
        (ig.Tween.Easing.Quadratic.EaseInOut = function (e) {
          return 1 > (e *= 2) ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
        }),
        (ig.Tween.Easing.Cubic.EaseIn = function (e) {
          return e * e * e;
        }),
        (ig.Tween.Easing.Cubic.EaseOut = function (e) {
          return --e * e * e + 1;
        }),
        (ig.Tween.Easing.Cubic.EaseInOut = function (e) {
          return 1 > (e *= 2) ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
        }),
        (ig.Tween.Easing.Quartic.EaseIn = function (e) {
          return e * e * e * e;
        }),
        (ig.Tween.Easing.Quartic.EaseOut = function (e) {
          return -(--e * e * e * e - 1);
        }),
        (ig.Tween.Easing.Quartic.EaseInOut = function (e) {
          return 1 > (e *= 2)
            ? 0.5 * e * e * e * e
            : -0.5 * ((e -= 2) * e * e * e - 2);
        }),
        (ig.Tween.Easing.Quintic.EaseIn = function (e) {
          return e * e * e * e * e;
        }),
        (ig.Tween.Easing.Quintic.EaseOut = function (e) {
          return (e -= 1) * e * e * e * e + 1;
        }),
        (ig.Tween.Easing.Quintic.EaseInOut = function (e) {
          return 1 > (e *= 2)
            ? 0.5 * e * e * e * e * e
            : 0.5 * ((e -= 2) * e * e * e * e + 2);
        }),
        (ig.Tween.Easing.Sinusoidal.EaseIn = function (e) {
          return 1 - Math.cos((e * Math.PI) / 2);
        }),
        (ig.Tween.Easing.Sinusoidal.EaseOut = function (e) {
          return Math.sin((e * Math.PI) / 2);
        }),
        (ig.Tween.Easing.Sinusoidal.EaseInOut = function (e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }),
        (ig.Tween.Easing.Exponential.EaseIn = function (e) {
          return 0 == e ? 0 : Math.pow(2, 10 * (e - 1));
        }),
        (ig.Tween.Easing.Exponential.EaseOut = function (e) {
          return 1 == e ? 1 : 1 - Math.pow(2, -10 * e);
        }),
        (ig.Tween.Easing.Exponential.EaseInOut = function (e) {
          return 0 == e
            ? 0
            : 1 == e
            ? 1
            : 1 > (e *= 2)
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
        }),
        (ig.Tween.Easing.Circular.EaseIn = function (e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }),
        (ig.Tween.Easing.Circular.EaseOut = function (e) {
          return Math.sqrt(1 - --e * e);
        }),
        (ig.Tween.Easing.Circular.EaseInOut = function (e) {
          return 1 > (e /= 0.5)
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }),
        (ig.Tween.Easing.Elastic.EaseIn = function (e) {
          var t,
            i = 0.1,
            n = 0.4;
          return 0 == e
            ? 0
            : 1 == e
            ? 1
            : (n || (n = 0.3),
              !i || 1 > i
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * (e - t) * Math.PI) / n));
        }),
        (ig.Tween.Easing.Elastic.EaseOut = function (e) {
          var t,
            i = 0.1,
            n = 0.4;
          return 0 == e
            ? 0
            : 1 == e
            ? 1
            : (n || (n = 0.3),
              !i || 1 > i
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * (e - t) * Math.PI) / n) +
                1);
        }),
        (ig.Tween.Easing.Elastic.EaseInOut = function (e) {
          var t,
            i = 0.1,
            n = 0.4;
          return 0 == e
            ? 0
            : 1 == e
            ? 1
            : (n || (n = 0.3),
              !i || 1 > i
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              1 > (e *= 2)
                ? -0.5 *
                  i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * (e - t) * Math.PI) / n)
                : 0.5 *
                    i *
                    Math.pow(2, -10 * (e -= 1)) *
                    Math.sin((2 * (e - t) * Math.PI) / n) +
                  1);
        }),
        (ig.Tween.Easing.Back.EaseIn = function (e) {
          return e * e * (2.70158 * e - 1.70158);
        }),
        (ig.Tween.Easing.Back.EaseOut = function (e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }),
        (ig.Tween.Easing.Back.EaseInOut = function (e) {
          return 1 > (e *= 2)
            ? 0.5 * e * e * (3.5949095 * e - 2.5949095)
            : 0.5 * ((e -= 2) * e * (3.5949095 * e + 2.5949095) + 2);
        }),
        (ig.Tween.Easing.Bounce.EaseIn = function (e) {
          return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - e);
        }),
        (ig.Tween.Easing.Bounce.EaseOut = function (e) {
          return (e /= 1) < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }),
        (ig.Tween.Easing.Bounce.EaseInOut = function (e) {
          return 0.5 > e
            ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * e)
            : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * e - 1) + 0.5;
        }),
        (ig.Tween.Interpolation = {
          Linear: function (e, t) {
            var i = e.length - 1,
              n = i * t,
              o = Math.floor(n),
              s = TWEEN.Interpolation.Utils.Linear;
            return 0 > t
              ? s(e[0], e[1], n)
              : 1 < t
              ? s(e[i], e[i - 1], i - n)
              : s(e[o], e[o + 1 > i ? i : o + 1], n - o);
          },
        });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.patches.entity-patch")
    .requires("impact.entity")
    .defines(function () {
      ig.Entity.inject({
        handleMovementTrace: function (e) {
          if (
            ((this.standing = !1),
            e.collision.y &&
              (0 < this.bounciness &&
              Math.abs(this.vel.y) > this.minBounceVelocity
                ? (this.vel.y *= -this.bounciness)
                : (0 < this.vel.y && (this.standing = !0), (this.vel.y = 0))),
            e.collision.x &&
              (this.vel.x =
                0 < this.bounciness &&
                Math.abs(this.vel.x) > this.minBounceVelocity
                  ? this.vel.x * -this.bounciness
                  : 0),
            e.collision.slope)
          ) {
            var t = e.collision.slope;
            if (0 < this.bounciness) {
              var i = this.vel.x * t.nx + this.vel.y * t.ny;
              (this.vel.x = (this.vel.x - 2 * t.nx * i) * this.bounciness),
                (this.vel.y = (this.vel.y - 2 * t.ny * i) * this.bounciness);
            } else
              (i =
                (this.vel.x * t.x + this.vel.y * t.y) /
                (t.x * t.x + t.y * t.y)),
                (this.vel.x = t.x * i),
                (this.vel.y = t.y * i),
                (t = Math.atan2(t.x, t.y)) > this.slopeStanding.min &&
                  t < this.slopeStanding.max &&
                  (this.standing = !0);
          }
          (this.pos.x = e.pos.x), (this.pos.y = e.pos.y);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.tweens-handler")
    .requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch")
    .defines(function () {
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (e) {
          for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        }),
        (ig.TweensHandler = ig.Class.extend({
          _tweens: [],
          _systemPausedTweens: [],
          init: function () {},
          getAll: function () {
            return this._tweens;
          },
          removeAll: function () {
            this._tweens = [];
          },
          add: function (e) {
            this._tweens.push(e);
          },
          remove: function (e) {
            -1 !== (e = this._tweens.indexOf(e)) && this._tweens.splice(e, 1);
          },
          onSystemPause: function () {
            if (0 === this._tweens.length) return !1;
            for (var e = 0, t = null; e < this._tweens.length; )
              (t = this._tweens[e])._isPlaying &&
                (this._systemPausedTweens.push(t), t.pause()),
                e++;
            return !0;
          },
          onSystemResume: function () {
            if (0 === this._systemPausedTweens.length) return !1;
            for (var e = 0; e < this._systemPausedTweens.length; )
              this._systemPausedTweens[e].resume(), e++;
            return (this._systemPausedTweens = []), !0;
          },
          update: function (e, t) {
            if (0 === this._tweens.length) return !1;
            var i = 0;
            for (
              e = void 0 !== e ? e : ig.game.tweens.now();
              i < this._tweens.length;

            )
              this._tweens[i].update(e) || t ? i++ : this._tweens.splice(i, 1);
            return !0;
          },
          now: function () {
            return Date.now();
          },
        })),
        (ig.TweenDef = ig.Class.extend({
          _ent: null,
          _valuesStart: {},
          _valuesEnd: {},
          _valuesStartRepeat: {},
          _duration: 1e3,
          _repeat: 0,
          _yoyo: !1,
          _isPlaying: !1,
          _reversed: !1,
          _delayTime: 0,
          _startTime: null,
          _pauseTime: null,
          _easingFunction: ig.Tween.Easing.Linear.EaseNone,
          _interpolationFunction: ig.Tween.Interpolation.Linear,
          _chainedTweens: [],
          _onStartCallback: null,
          _onStartCallbackFired: !1,
          _onUpdateCallback: null,
          _onCompleteCallback: null,
          _onStopCallback: null,
          _onPauseCallback: null,
          _onResumeCallback: null,
          _currentElapsed: 0,
          init: function (e) {
            this._object = e;
          },
          to: function (e, t) {
            return (
              (this._valuesEnd = e), void 0 !== t && (this._duration = t), this
            );
          },
          start: function (e) {
            if (this._isPlaying) return this;
            for (var t in (ig.game.tweens.add(this),
            (this._isPlaying = !0),
            (this._onStartCallbackFired = !1),
            (this._startTime = void 0 !== e ? e : ig.game.tweens.now()),
            (this._startTime += this._delayTime),
            this._valuesEnd)) {
              if (this._valuesEnd[t] instanceof Array) {
                if (0 === this._valuesEnd[t].length) continue;
                this._valuesEnd[t] = [this._object[t]].concat(
                  this._valuesEnd[t]
                );
              }
              void 0 !== this._object[t] &&
                ((this._valuesStart[t] = this._object[t]),
                0 == this._valuesStart[t] instanceof Array &&
                  (this._valuesStart[t] *= 1),
                (this._valuesStartRepeat[t] = this._valuesStart[t] || 0));
            }
            return this;
          },
          stop: function () {
            return this._isPlaying
              ? (ig.game.tweens.remove(this),
                (this._isPlaying = !1),
                null !== this._onStopCallback &&
                  this._onStopCallback.call(this._object, this._object),
                this.stopChainedTweens(),
                this)
              : this;
          },
          pause: function () {
            return this._isPlaying
              ? (ig.game.tweens.remove(this),
                (this._isPlaying = !1),
                (this._pauseTime = ig.game.tweens.now()),
                null !== this._onPauseCallback &&
                  this._onPauseCallback.call(this._object, this._object),
                this)
              : this;
          },
          resume: function () {
            if (this._isPlaying || !this._pauseTime) return this;
            var e = ig.game.tweens.now() - this._pauseTime;
            return (
              (this._startTime += e),
              ig.game.tweens.add(this),
              (this._isPlaying = !0),
              null !== this._onResumeCallback &&
                this._onResumeCallback.call(this._object, this._object),
              (this._pauseTime = null),
              this
            );
          },
          end: function () {
            return this.update(this._startTime + this._duration), this;
          },
          stopChainedTweens: function () {
            for (var e = 0, t = this._chainedTweens.length; e < t; e++)
              this._chainedTweens[e].stop();
          },
          delay: function (e) {
            return (this._delayTime = e), this;
          },
          repeat: function (e) {
            return (this._repeat = e), this;
          },
          repeatDelay: function (e) {
            return (this._repeatDelayTime = e), this;
          },
          yoyo: function (e) {
            return (this._yoyo = e), this;
          },
          easing: function (e) {
            return (this._easingFunction = e), this;
          },
          interpolation: function (e) {
            return (this._interpolationFunction = e), this;
          },
          chain: function () {
            return (this._chainedTweens = arguments), this;
          },
          onStart: function (e) {
            return (this._onStartCallback = e), this;
          },
          onUpdate: function (e) {
            return (this._onUpdateCallback = e), this;
          },
          onComplete: function (e) {
            return (this._onCompleteCallback = e), this;
          },
          onStop: function (e) {
            return (this._onStopCallback = e), this;
          },
          onPause: function (e) {
            return (this._onPauseCallback = e), this;
          },
          onResume: function (e) {
            return (this._onResumeCallback = e), this;
          },
          update: function (e) {
            var t, i, n;
            if (e < this._startTime) return !0;
            for (t in (!1 === this._onStartCallbackFired &&
              (null !== this._onStartCallback &&
                this._onStartCallback.call(this._object, this._object),
              (this._onStartCallbackFired = !0)),
            (i = (e - this._startTime) / this._duration),
            (this._currentElapsed = i = 1 < i ? 1 : i),
            (n = this._easingFunction(i)),
            this._valuesEnd))
              if (void 0 !== this._valuesStart[t]) {
                var o = this._valuesStart[t] || 0,
                  s = this._valuesEnd[t];
                s instanceof Array
                  ? (this._object[t] = this._interpolationFunction(s, n))
                  : ("string" == typeof s &&
                      (s =
                        "+" === s.charAt(0) || "-" === s.charAt(0)
                          ? o + parseFloat(s)
                          : parseFloat(s)),
                    "number" == typeof s &&
                      (this._object[t] = o + (s - o) * n));
              }
            if (
              (null !== this._onUpdateCallback &&
                this._onUpdateCallback.call(this._object, this._object, n),
              1 === i)
            ) {
              if (!(0 < this._repeat)) {
                for (
                  null !== this._onCompleteCallback &&
                    this._onCompleteCallback.call(this._object, this._object),
                    e = 0,
                    t = this._chainedTweens.length;
                  e < t;
                  e++
                )
                  this._chainedTweens[e].start(
                    this._startTime + this._duration
                  );
                return !1;
              }
              for (t in (isFinite(this._repeat) && this._repeat--,
              this._valuesStartRepeat))
                "string" == typeof this._valuesEnd[t] &&
                  (this._valuesStartRepeat[t] =
                    _valuesStartRepeat[t] + parseFloat(_valuesEnd[t])),
                  this._yoyo &&
                    ((i = this._valuesStartRepeat[t]),
                    (this._valuesStartRepeat[t] = this._valuesEnd[t]),
                    (this._valuesEnd[t] = i)),
                  (this._valuesStart[t] = this._valuesStartRepeat[t]);
              this._yoyo && (this._reversed = !this._reversed),
                (this._startTime =
                  void 0 !== this._repeatDelayTime
                    ? e + this._repeatDelayTime
                    : e + this._delayTime);
            }
            return !0;
          },
        }));
      var e = [1];
      ig.Tween.Interpolation = {
        Linear: function (e, t) {
          var i = e.length - 1,
            n = i * t,
            o = Math.floor(n),
            s = ig.Tween.Interpolation.Utils.Linear;
          return 0 > t
            ? s(e[0], e[1], n)
            : 1 < t
            ? s(e[i], e[i - 1], i - n)
            : s(e[o], e[o + 1 > i ? i : o + 1], n - o);
        },
        Bezier: function (e, t) {
          for (
            var i = 0,
              n = e.length - 1,
              o = Math.pow,
              s = ig.Tween.Interpolation.Utils.Bernstein,
              a = 0;
            a <= n;
            a++
          )
            i += o(1 - t, n - a) * o(t, a) * e[a] * s(n, a);
          return i;
        },
        CatmullRom: function (e, t) {
          var i = e.length - 1,
            n = i * t,
            o = Math.floor(n),
            s = ig.Tween.Interpolation.Utils.CatmullRom;
          return e[0] === e[i]
            ? (0 > t && (o = Math.floor((n = i * (1 + t)))),
              s(
                e[(o - 1 + i) % i],
                e[o],
                e[(o + 1) % i],
                e[(o + 2) % i],
                n - o
              ))
            : 0 > t
            ? e[0] - (s(e[0], e[0], e[1], e[1], -n) - e[0])
            : 1 < t
            ? e[i] - (s(e[i], e[i], e[i - 1], e[i - 1], n - i) - e[i])
            : s(
                e[o ? o - 1 : 0],
                e[o],
                e[i < o + 1 ? i : o + 1],
                e[i < o + 2 ? i : o + 2],
                n - o
              );
        },
        Utils: {
          Linear: function (e, t, i) {
            return (t - e) * i + e;
          },
          Bernstein: function (e, t) {
            var i = ig.Tween.Interpolation.Utils.Factorial;
            return i(e) / i(t) / i(e - t);
          },
          Factorial: function (t) {
            var i = 1;
            if (e[t]) return e[t];
            for (var n = t; 1 < n; n--) i *= n;
            return (e[t] = i);
          },
          CatmullRom: function (e, t, i, n, o) {
            var s = o * o;
            return (
              (2 * t - 2 * i + (e = 0.5 * (i - e)) + (n = 0.5 * (n - t))) *
                o *
                s +
              (-3 * t + 3 * i - 2 * e - n) * s +
              e * o +
              t
            );
          },
        },
      };
    }),
  (ig.baked = !0),
  ig.module("plugins.url-parameters").defines(function () {
    ig.UrlParameters = ig.Class.extend({
      init: function () {
        "true" === getQueryVariable("iphone") &&
          ((ig.ua.iPhone = !0), console.log("iPhone mode"));
        var e = getQueryVariable("webview");
        e &&
          "true" === e &&
          ((ig.ua.is_uiwebview = !0), console.log("webview mode")),
          (e = getQueryVariable("debug")) &&
            "true" === e &&
            (ig.game.showDebugMenu(), console.log("debug mode")),
          "stats" === getQueryVariable("view") &&
            (ig.game.resetPlayerStats(), ig.game.endGame()),
          getQueryVariable("ad");
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("plugins.director")
    .requires("impact.impact")
    .defines(function () {
      ig.Director = ig.Class.extend({
        init: function (e, t) {
          (this.game = e),
            (this.levels = []),
            (this.currentLevel = 0),
            this.append(t);
        },
        loadLevel: function (e) {
          for (var t in ig.sizeHandler.dynamicClickableEntityDivs) {
            var i = ig.domHandler.getElementById("#" + t);
            ig.domHandler.hide(i);
          }
          return (
            (this.currentLevel = e), this.game.loadLevel(this.levels[e]), !0
          );
        },
        loadLevelWithoutEntities: function (e) {
          return (
            (this.currentLevel = e),
            this.game.loadLevelWithoutEntities(this.levels[e]),
            !0
          );
        },
        append: function (e) {
          return (
            (newLevels = []),
            "object" == typeof e &&
              (e.constructor === [].constructor
                ? (newLevels = e)
                : (newLevels[0] = e),
              (this.levels = this.levels.concat(newLevels)),
              !0)
          );
        },
        nextLevel: function () {
          return (
            this.currentLevel + 1 < this.levels.length &&
            this.loadLevel(this.currentLevel + 1)
          );
        },
        previousLevel: function () {
          return (
            0 <= this.currentLevel - 1 && this.loadLevel(this.currentLevel - 1)
          );
        },
        jumpTo: function (e) {
          var t = null;
          for (i = 0; i < this.levels.length; i++)
            this.levels[i] == e && (t = i);
          return 0 <= t && this.loadLevel(t);
        },
        firstLevel: function () {
          return this.loadLevel(0);
        },
        lastLevel: function () {
          return this.loadLevel(this.levels.length - 1);
        },
        reloadLevel: function () {
          return this.loadLevel(this.currentLevel);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.impact-storage")
    .requires("impact.game")
    .defines(function () {
      ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
          return ig.Storage.instance ? ig.Storage.instance : null;
        },
        init: function () {
          ig.Storage.instance = this;
        },
        isCapable: function () {
          return void 0 !== window.localStorage;
        },
        isSet: function (e) {
          return null !== this.get(e);
        },
        initUnset: function (e, t) {
          null === this.get(e) && this.set(e, t);
        },
        get: function (e) {
          if (!this.isCapable()) return null;
          try {
            return JSON.parse(localStorage.getItem(e));
          } catch (t) {
            return window.localStorage.getItem(e);
          }
        },
        getInt: function (e) {
          return ~~this.get(e);
        },
        getFloat: function (e) {
          return parseFloat(this.get(e));
        },
        getBool: function (e) {
          return !!this.get(e);
        },
        key: function (e) {
          return this.isCapable() ? window.localStorage.key(e) : null;
        },
        set: function (e, t) {
          if (!this.isCapable()) return null;
          try {
            window.localStorage.setItem(e, JSON.stringify(t));
          } catch (e) {
            console.log(e);
          }
        },
        setHighest: function (e, t) {
          t > this.getFloat(e) && this.set(e, t);
        },
        remove: function (e) {
          if (!this.isCapable()) return null;
          window.localStorage.removeItem(e);
        },
        clear: function () {
          if (!this.isCapable()) return null;
          window.localStorage.clear();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.fullscreen")
    .requires(
      "impact.entity",
      "plugins.handlers.size-handler",
      "plugins.director"
    )
    .defines(function () {
      (ig.Fullscreen = {
        enableFullscreenButton: !0,
        _isEnabled: "notChecked",
        isEnabled: function () {
          return (
            "notChecked" == this._isEnabled &&
              (this._isEnabled = !!(
                document.fullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.msFullscreenEnabled
              )),
            this._isEnabled
          );
        },
        isFullscreen: function () {
          return !(
            !ig.Fullscreen.isEnabled() ||
            !(
              document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement
            )
          );
        },
        toggleFullscreen: function () {
          ig.Fullscreen.isFullscreen()
            ? ig.Fullscreen.exitFullscreen()
            : ig.Fullscreen.requestFullscreen(),
            ig.sizeHandler.orientationDelayHandler(),
            ig &&
              ig.visibilityHandler &&
              ig.visibilityHandler.onChange("focus");
          try {
            ig.soundHandler.unlockWebAudio();
          } catch (e) {}
        },
        requestFullscreen: function () {
          var e = document.documentElement;
          e.requestFullscreen
            ? e.requestFullscreen()
            : e.webkitRequestFullscreen
            ? e.webkitRequestFullscreen()
            : e.mozRequestFullScreen
            ? e.mozRequestFullScreen()
            : e.msRequestFullscreen
            ? e.msRequestFullscreen()
            : console.log("no request fullscreen method available");
        },
        exitFullscreen: function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : console.log("no exit fullscreen method available");
        },
        divs: {},
      }),
        ig.Director.inject({
          loadLevel: function (e) {
            var t,
              i = ig.Fullscreen.divs;
            for (t in i)
              (i = ig.domHandler.getElementById("#" + t)),
                ig.domHandler.hide(i);
            return this.parent(e);
          },
        }),
        ig.SizeHandler.inject({
          resize: function () {
            this.parent();
            var e,
              t = ig.Fullscreen.divs;
            for (e in t) {
              var i = Math.min(
                  ig.sizeHandler.scaleRatioMultiplier.x,
                  ig.sizeHandler.scaleRatioMultiplier.y
                ),
                n = ig.domHandler.getElementById("#" + e),
                o = t[e].entity_pos_x,
                s = t[e].entity_pos_y,
                a = t[e].width,
                r = t[e].height,
                l = ig.domHandler.getElementById("#canvas"),
                u = ig.domHandler.getOffsets(l);
              ig.ua.mobile
                ? ((l = u.left),
                  (u = u.top),
                  ig.sizeHandler.disableStretchToFitOnMobileFlag
                    ? ((o =
                        Math.floor(
                          l + o * ig.sizeHandler.scaleRatioMultiplier.x
                        ) + "px"),
                      (s =
                        Math.floor(
                          u + s * ig.sizeHandler.scaleRatioMultiplier.y
                        ) + "px"),
                      (a =
                        Math.floor(a * ig.sizeHandler.scaleRatioMultiplier.x) +
                        "px"),
                      (r =
                        Math.floor(r * ig.sizeHandler.scaleRatioMultiplier.y) +
                        "px"))
                    : ((o = Math.floor(o * ig.sizeHandler.sizeRatio.x) + "px"),
                      (s = Math.floor(s * ig.sizeHandler.sizeRatio.y) + "px"),
                      (a = Math.floor(a * ig.sizeHandler.sizeRatio.x) + "px"),
                      (r = Math.floor(r * ig.sizeHandler.sizeRatio.y) + "px")))
                : ((l = u.left),
                  (u = u.top),
                  (o = Math.floor(l + o * i) + "px"),
                  (s = Math.floor(u + s * i) + "px"),
                  (a = Math.floor(a * i) + "px"),
                  (r = Math.floor(r * i) + "px")),
                ig.domHandler.css(n, {
                  float: "left",
                  position: "absolute",
                  left: o,
                  top: s,
                  width: a,
                  height: r,
                  "z-index": 3,
                }),
                t[e]["font-size"] &&
                  ig.domHandler.css(n, {
                    "font-size": t[e]["font-size"] * i + "px",
                  });
            }
          },
        }),
        (ig.FullscreenButton = ig.Entity.extend({
          enterImage: null,
          exitImage: null,
          isReady: !1,
          zIndex: 999999,
          identifier: null,
          prevPos: { x: 0, y: 0 },
          invisImagePath: "media/graphics/misc/invisible.png",
          init: function (e, t, i) {
            this.parent(e, t, i),
              ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton
                ? this.enterImage.loaded
                  ? this.initSize()
                  : (this.enterImage.loadCallback = function () {
                      this.initSize();
                    }.bind(this))
                : this.kill();
          },
          kill: function () {
            this.parent();
          },
          destroy: function () {
            this.parent(), console.log("destroy");
          },
          initSize: function () {
            (this.size.x = this.enterImage.width),
              (this.size.y = this.enterImage.height),
              this.createClickableLayer(),
              (this.isReady = !0);
          },
          createClickableLayer: function () {
            this.identifier = "fullscreen-button-layer";
            var e = ig.domHandler.getElementById("#" + this.identifier);
            e
              ? (ig.domHandler.show(e),
                ig.domHandler.attr(
                  e,
                  "onclick",
                  "ig.Fullscreen.toggleFullscreen()"
                ))
              : this.createClickableOutboundLayer();
          },
          update: function (e, t) {
            (e = this.pos.x),
              (t = this.pos.y),
              this.isReady &&
                (this.prevPos.x !== e || this.prevPos.y !== t) &&
                ((ig.Fullscreen.divs[this.identifier] = {}),
                (ig.Fullscreen.divs[this.identifier].width = this.size.x),
                (ig.Fullscreen.divs[this.identifier].height = this.size.y),
                (ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x),
                (ig.Fullscreen.divs[this.identifier].entity_pos_y = this.pos.y),
                (this.prevPos.x = e),
                (this.prevPos.y = t));
          },
          draw: function () {
            this.isReady &&
              (ig.Fullscreen.isFullscreen()
                ? this.exitImage.draw(this.pos.x, this.pos.y)
                : this.enterImage.draw(this.pos.x, this.pos.y));
          },
          createClickableOutboundLayer: function () {
            var e = this.identifier,
              t = this.invisImagePath,
              i = ig.domHandler.create("div");
            ig.domHandler.attr(i, "id", e),
              ig.domHandler.attr(
                i,
                "onclick",
                "ig.Fullscreen.toggleFullscreen()"
              );
            var n = ig.domHandler.create("a"),
              o = ig.domHandler.create("img");
            if (
              (ig.domHandler.css(o, { width: "100%", height: "100%" }),
              ig.domHandler.attr(o, "src", t),
              (t = Math.min(
                ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y
              )),
              ig.ua.mobile)
            ) {
              var s = ig.domHandler.getElementById("#canvas"),
                a = (s = ig.domHandler.getOffsets(s)).left,
                r = s.top;
              console.log(s.left),
                ig.sizeHandler.disableStretchToFitOnMobileFlag
                  ? ((s =
                      Math.floor(
                        a + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x
                      ) + "px"),
                    (r =
                      Math.floor(
                        r + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y
                      ) + "px"),
                    (a =
                      Math.floor(
                        this.size.x * ig.sizeHandler.scaleRatioMultiplier.x
                      ) + "px"),
                    (t =
                      Math.floor(
                        this.size.y * ig.sizeHandler.scaleRatioMultiplier.y
                      ) + "px"))
                  : ((s =
                      Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) +
                      "px"),
                    (r =
                      Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) +
                      "px"),
                    (a =
                      Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                      "px"),
                    (t =
                      Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) +
                      "px"));
            } else
              (s = ig.domHandler.getElementById("#canvas")),
                (a = (s = ig.domHandler.getOffsets(s)).left),
                (r = s.top),
                ig.sizeHandler.enableStretchToFitOnDesktopFlag
                  ? ((s =
                      Math.floor(a + this.pos.x * ig.sizeHandler.sizeRatio.x) +
                      "px"),
                    (r =
                      Math.floor(r + this.pos.y * ig.sizeHandler.sizeRatio.y) +
                      "px"),
                    (a =
                      Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                      "px"),
                    (t =
                      Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) +
                      "px"))
                  : ((s = Math.floor(a + this.pos.x * t) + "px"),
                    (r = Math.floor(r + this.pos.y * t) + "px"),
                    (a = Math.floor(this.size.x * t) + "px"),
                    (t = Math.floor(this.size.y * t) + "px"));
            ig.domHandler.css(i, {
              float: "left",
              position: "absolute",
              left: s,
              top: r,
              width: a,
              height: t,
              "z-index": 3,
            }),
              ig.domHandler.addEvent(
                i,
                "mousemove",
                ig.input.mousemove.bind(ig.input),
                !1
              ),
              ig.domHandler.appendChild(n, o),
              ig.domHandler.appendChild(i, n),
              ig.domHandler.appendToBody(i),
              (ig.Fullscreen.divs[e] = {}),
              (ig.Fullscreen.divs[e].width = this.size.x),
              (ig.Fullscreen.divs[e].height = this.size.y),
              (ig.Fullscreen.divs[e].entity_pos_x = this.pos.x),
              (ig.Fullscreen.divs[e].entity_pos_y = this.pos.y);
          },
        }));
    }),
  (ig.baked = !0),
  ig
    .module("plugins.scale")
    .requires("impact.entity")
    .defines(function () {
      ig.Entity.inject({
        scale: { x: 1, y: 1 },
        _offset: { x: 0, y: 0 },
        _scale: { x: 1, y: 1 },
        _size: { x: 0, y: 0 },
        init: function (e, t, i) {
          this.parent(e, t, i),
            (this._offset.x = this.offset.x),
            (this._offset.y = this.offset.y),
            (this._size.x = this.size.x),
            (this._size.y = this.size.y),
            this.setScale(this.scale.x, this.scale.y);
        },
        draw: function () {
          var e = ig.system.context;
          e.save(),
            e.translate(
              ig.system.getDrawPos(
                this.pos.x.round() - this.offset.x - ig.game.screen.x
              ),
              ig.system.getDrawPos(
                this.pos.y.round() - this.offset.y - ig.game.screen.y
              )
            ),
            e.scale(this._scale.x, this._scale.y),
            null != this.currentAnim && this.currentAnim.draw(0, 0),
            e.restore();
        },
        setScale: function (e, t) {
          var i = this.size.x,
            n = this.size.y;
          (this.scale.x = e || this.scale.x),
            (this.scale.y = t || this.scale.y),
            (this._scale.x = this.scale.x / ig.system.scale),
            (this._scale.y = this.scale.y / ig.system.scale),
            (this.offset.x = this._offset.x * this._scale.x),
            (this.offset.y = this._offset.y * this._scale.y),
            (this.size.x = this._size.x * this._scale.x),
            (this.size.y = this._size.y * this._scale.y),
            (this.pos.x += (i - this.size.x) / 2),
            (this.pos.y += (n - this.size.y) / 2);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.responsive.responsive-utils")
    .requires("impact.system")
    .defines(function () {
      ig.responsive = {
        width: 0,
        height: 0,
        halfWidth: 0,
        halfHeight: 0,
        originalWidth: 0,
        originalHeight: 0,
        fillScale: 1,
        scaleX: 1,
        scaleY: 1,
        toAnchor: function (e, t, i) {
          switch (i) {
            case "top-left":
            case "left-top":
              return this.toAnchorTopLeft(e, t);
            case "top-center":
            case "center-top":
            case "top":
              return this.toAnchorTopCenter(e, t);
            case "top-right":
            case "right-top":
              return this.toAnchorTopRight(e, t);
            case "left-middle":
            case "middle-left":
            case "left":
              return this.toAnchorLeftMiddle(e, t);
            case "center-middle":
            case "middle-center":
            case "middle":
            case "center":
              return this.toAnchorCenterMiddle(e, t);
            case "right-middle":
            case "middle-right":
            case "right":
              return this.toAnchorRightMiddle(e, t);
            case "bottom-left":
            case "left-bottom":
              return this.toAnchorBottomLeft(e, t);
            case "bottom-center":
            case "center-bottom":
            case "bottom":
              return this.toAnchorBottomCenter(e, t);
            case "bottom-right":
            case "right-bottom":
              return this.toAnchorBottomRight(e, t);
            default:
              return this.toAnchorDefault(e, t);
          }
        },
        toAnchorDefault: function (e, t) {
          return {
            x: e + (this.width - this.originalWidth) / 2,
            y: t + (this.height - this.originalHeight) / 2,
          };
        },
        toAnchorCenterMiddle: function (e, t) {
          return { x: e + this.halfWidth, y: t + this.halfHeight };
        },
        toAnchorLeftMiddle: function (e, t) {
          return { x: e, y: t + this.halfHeight };
        },
        toAnchorTopCenter: function (e, t) {
          return { x: e + this.halfWidth, y: t };
        },
        toAnchorRightMiddle: function (e, t) {
          return { x: e + this.width, y: t + this.halfHeight };
        },
        toAnchorBottomCenter: function (e, t) {
          return { x: e + this.halfWidth, y: t + this.height };
        },
        toAnchorTopLeft: function (e, t) {
          return { x: e, y: t };
        },
        toAnchorBottomLeft: function (e, t) {
          return { x: e, y: t + this.height };
        },
        toAnchorTopRight: function (e, t) {
          return { x: e + this.width, y: t };
        },
        toAnchorBottomRight: function (e, t) {
          return { x: e + this.width, y: t + this.height };
        },
        drawScaledImage: function (e, t, i, n, o, s, a) {
          s || (s = 0), a || (a = 0);
          var r = ig.system.context;
          r.save(),
            r.translate(t, i),
            (1 != n || 1 != o) && r.scale(n, o),
            e.draw(-e.width * s, -e.height * a),
            r.restore();
        },
      };
    }),
  (ig.baked = !0),
  ig
    .module("plugins.responsive.responsive-plugin")
    .requires(
      "impact.system",
      "impact.entity",
      "plugins.handlers.size-handler",
      "plugins.responsive.responsive-utils"
    )
    .defines(function () {
      ig.SizeHandler.inject({
        resize: function () {
          this.parent();
        },
        sizeCalcs: function () {
          this.originalResolution ||
            ((this.originalResolution = new Vector2(
              this.desktop.actualResolution.x,
              this.desktop.actualResolution.y
            )),
            (ig.responsive.originalWidth = this.desktop.actualResolution.x),
            (ig.responsive.originalHeight = this.desktop.actualResolution.y));
          var e = window.innerWidth,
            t = window.innerHeight,
            i = e / t,
            n = this.originalResolution.x / this.originalResolution.y,
            o = 0,
            s = 0;
          (this.windowSize = new Vector2(e, t)),
            i < n
              ? ((s = (o = this.originalResolution.x) / i),
                (ig.responsive.scaleX = 1),
                (ig.responsive.scaleY = s / this.originalResolution.y))
              : ((o = (s = this.originalResolution.y) * i),
                (ig.responsive.scaleX = o / this.originalResolution.x),
                (ig.responsive.scaleY = 1)),
            (this.scaleRatioMultiplier = new Vector2(e / o, t / s)),
            (this.desktop.actualResolution = new Vector2(o, s)),
            (this.mobile.actualResolution = new Vector2(o, s)),
            (this.desktop.actualSize = new Vector2(e, t)),
            (this.mobile.actualSize = new Vector2(e, t)),
            (ig.responsive.width = o),
            (ig.responsive.height = s),
            (ig.responsive.halfWidth = o / 2),
            (ig.responsive.halfHeight = s / 2),
            (ig.responsive.fillScale = Math.max(
              ig.responsive.scaleX,
              ig.responsive.scaleY
            ));
        },
        resizeLayers: function () {
          ig.system.resize(
            ig.sizeHandler.desktop.actualResolution.x,
            ig.sizeHandler.desktop.actualResolution.y
          );
          for (var e = 0; e < this.coreDivsToResize.length; e++) {
            var t = ig.domHandler.getElementById(this.coreDivsToResize[e]),
              i = Math.floor(
                ig.sizeHandler.windowSize.x / 2 -
                  ig.sizeHandler.desktop.actualSize.x / 2
              ),
              n = Math.floor(
                ig.sizeHandler.windowSize.y / 2 -
                  ig.sizeHandler.desktop.actualSize.y / 2
              );
            0 > i && (i = 0),
              0 > n && (n = 0),
              ig.domHandler.resizeOffset(
                t,
                Math.floor(ig.sizeHandler.desktop.actualSize.x),
                Math.floor(ig.sizeHandler.desktop.actualSize.y),
                i,
                n
              );
          }
          for (var o in this.adsToResize)
            (e = ig.domHandler.getElementById("#" + o)),
              (t = ig.domHandler.getElementById("#" + o + "-Box")),
              (i =
                (window.innerWidth - this.adsToResize[o]["box-width"]) / 2 +
                "px"),
              (n =
                (window.innerHeight - this.adsToResize[o]["box-height"]) / 2 +
                "px"),
              e &&
                ig.domHandler.css(e, {
                  width: window.innerWidth,
                  height: window.innerHeight,
                }),
              t && ig.domHandler.css(t, { left: i, top: n });
          for (o in ((e = ig.domHandler.getElementById("#canvas")),
          (e = (t = ig.domHandler.getOffsets(e)).left),
          (t = t.top),
          (i = Math.min(
            ig.sizeHandler.scaleRatioMultiplier.x,
            ig.sizeHandler.scaleRatioMultiplier.y
          )),
          this.dynamicClickableEntityDivs))
            (n = ig.domHandler.getElementById("#" + o)),
              ig.domHandler.css(n, {
                float: "left",
                position: "absolute",
                left:
                  Math.floor(
                    e +
                      this.dynamicClickableEntityDivs[o].entity_pos_x *
                        this.scaleRatioMultiplier.x
                  ) + "px",
                top:
                  Math.floor(
                    t +
                      this.dynamicClickableEntityDivs[o].entity_pos_y *
                        this.scaleRatioMultiplier.y
                  ) + "px",
                width:
                  Math.floor(
                    this.dynamicClickableEntityDivs[o].width *
                      this.scaleRatioMultiplier.x
                  ) + "px",
                height:
                  Math.floor(
                    this.dynamicClickableEntityDivs[o].height *
                      this.scaleRatioMultiplier.y
                  ) + "px",
                "z-index": 3,
              }),
              this.dynamicClickableEntityDivs[o]["font-size"] &&
                ig.domHandler.css(n, {
                  "font-size":
                    this.dynamicClickableEntityDivs[o]["font-size"] * i + "px",
                });
          $("#ajaxbar").width(this.windowSize.x),
            $("#ajaxbar").height(this.windowSize.y);
        },
        reorient: function () {
          ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize(),
            ig.game && (ig.game.update(), ig.game.draw());
        },
        resizeBabylon: function () {
          var e = window.innerWidth,
            t = window.innerHeight,
            i = e / t,
            n = ig.responsive.originalWidth,
            o = ig.responsive.originalHeight,
            s = n / o,
            a = Math.max(n, o);
          ig.ua.mobile && (a = 640),
            (minSize = Math.min(n, o)),
            i > s
              ? (t > o && (t = o),
                (e = Math.floor((window.innerWidth / window.innerHeight) * t)) >
                  a && (e = a),
                (t = Math.floor((window.innerHeight / window.innerWidth) * e)))
              : (e > n && (e = n),
                (t = Math.floor((window.innerHeight / window.innerWidth) * e)) >
                  a && (t = a),
                (e = Math.floor((window.innerWidth / window.innerHeight) * t))),
            (n = i = 1),
            window.innerWidth > a && (i = window.innerWidth / a),
            window.innerHeight > a && (n = window.innerHeight / a),
            wgl.system.engine.setSize(e, t),
            wgl.system.engine.resize(),
            wgl.system.engine.setHardwareScalingLevel(Math.max(i, n)),
            (ig.gameScene.zoomFactor = 1),
            ig.ua.mobile &&
              minSize < a &&
              (ig.gameScene.zoomFactor = a / minSize),
            (ig.wglW = e),
            (ig.wglH = t),
            (ig.wglInnerW = window.innerWidth),
            (ig.wglInnerH = window.innerHeight),
            console.log(
              "babylon renderSize : ",
              wgl.system.engine.getRenderWidth(),
              wgl.system.engine.getRenderHeight(),
              "hwScalingLevel : ",
              wgl.system.engine.getHardwareScalingLevel()
            );
        },
      }),
        ig.Entity.inject({
          init: function (e, t, i) {
            this.parent(e, t, i),
              i.anchorType || (this.anchorType = "none"),
              (this.anchoredPositionX = e),
              (this.anchoredPositionY = t);
          },
          setAnchoredPosition: function (e, t, i) {
            i || (i = "default"),
              (this.anchorType = i),
              (this.anchoredPositionX = e),
              (this.anchoredPositionY = t);
          },
          update: function () {
            if (
              (this.parent(),
              "" != this.anchorType && "none" != this.anchorType)
            ) {
              var e = ig.responsive.toAnchor(
                this.anchoredPositionX,
                this.anchoredPositionY,
                this.anchorType
              );
              (this.pos.x = e.x), (this.pos.y = e.y);
            }
          },
        });
    }),
  this.START_BRANDING_SPLASH,
  (ig.baked = !0),
  ig
    .module("plugins.branding.splash")
    .requires("impact.impact", "impact.entity")
    .defines(function () {
      (ig.BrandingSplash = ig.Class.extend({
        init: function () {
          ig.game.spawnEntity(EntityBranding, 0, 0),
            console.log("spawn branding");
        },
      })),
        (EntityBranding = ig.Entity.extend({
          autoUpdateScale: !1,
          gravityFactor: 0,
          size: { x: 32, y: 32 },
          splash: new ig.Image("branding/splash1.png"),
          init: function (e, t, i) {
            this.parent(e, t, i),
              320 >= ig.system.width
                ? ((this.size.x = 320), (this.size.y = 200))
                : ((this.size.x = 480), (this.size.y = 240)),
              (this.pos.x = (ig.system.width - this.size.x) / 2),
              (this.pos.y = -this.size.y - 200),
              (this.endPosY = (ig.system.height - this.size.y) / 2),
              (e = this.tween({ pos: { y: this.endPosY } }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn,
              })),
              (t = this.tween({}, 2.5, {
                onComplete: function () {
                  ig.game.director.loadLevel(ig.game.director.currentLevel);
                },
              })),
              e.chain(t),
              e.start(),
              (this.currentAnim = this.anims.idle);
          },
          createClickableLayer: function () {
            console.log("Build clickable layer"),
              this.checkClickableLayer(
                "branding-splash",
                _SETTINGS.Branding.Logo.Link,
                _SETTINGS.Branding.Logo.NewWindow
              );
          },
          doesClickableLayerExist: function (e) {
            for (k in dynamicClickableEntityDivs) if (k == e) return !0;
            return !1;
          },
          checkClickableLayer: function (e, t, i) {
            "undefined" == typeof wm &&
              (this.doesClickableLayerExist(e)
                ? (ig.game.showOverlay([e]),
                  $("#" + e)
                    .find("[href]")
                    .attr("href", t))
                : this.createClickableOutboundLayer(
                    e,
                    t,
                    "media/graphics/misc/invisible.png",
                    i
                  ));
          },
          createClickableOutboundLayer: function (e, t, i, n) {
            var o = ig.$new("div");
            if (
              ((o.id = e),
              document.body.appendChild(o),
              (o = $("#" + o.id)).css("float", "left"),
              o.css("position", "absolute"),
              ig.ua.mobile)
            ) {
              var s = window.innerHeight / mobileHeight,
                a = window.innerWidth / mobileWidth;
              o.css("left", this.pos.x * a),
                o.css("top", this.pos.y * s),
                o.css("width", this.size.x * a),
                o.css("height", this.size.y * s);
            } else
              (s = w / 2 - destW / 2),
                (a = h / 2 - destH / 2),
                console.log(s, a),
                o.css("left", s + this.pos.x * multiplier),
                o.css("top", a + this.pos.y * multiplier),
                o.css("width", this.size.x * multiplier),
                o.css("height", this.size.y * multiplier);
            n
              ? o.html(
                  "<a target='_blank' href='" +
                    t +
                    "'><img style='width:100%;height:100%' src='" +
                    i +
                    "'></a>"
                )
              : o.html(
                  "<a href='" +
                    t +
                    "'><img style='width:100%;height:100%' src='" +
                    i +
                    "'></a>"
                ),
              (dynamicClickableEntityDivs[e] = {}),
              (dynamicClickableEntityDivs[e].width = this.size.x * multiplier),
              (dynamicClickableEntityDivs[e].height = this.size.y * multiplier),
              (dynamicClickableEntityDivs[e].entity_pos_x = this.pos.x),
              (dynamicClickableEntityDivs[e].entity_pos_y = this.pos.y);
          },
          draw: function () {
            (ig.system.context.fillStyle = "#ffffff"),
              ig.system.context.fillRect(
                0,
                0,
                ig.system.width,
                ig.system.height
              ),
              (ig.system.context.fillStyle = "#000"),
              (ig.system.context.font = "12px Arial"),
              (ig.system.context.textAlign = "left"),
              320 >= ig.system.width
                ? ig.system.context.fillText(
                    "powered by Rhym.com",
                    ig.system.width - 150,
                    ig.system.height - 15
                  )
                : ig.system.context.fillText(
                    "powered by Rhym.com",
                    ig.system.width - 160,
                    ig.system.height - 15
                  ),
              this.parent(),
              this.splash &&
                ig.system.context.drawImage(
                  this.splash.data,
                  0,
                  0,
                  this.splash.data.width,
                  this.splash.data.height,
                  this.pos.x,
                  this.pos.y,
                  this.size.x,
                  this.size.y
                );
          },
        }));
    }),
  this.END_BRANDING_SPLASH,
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button")
    .requires("impact.entity", "plugins.data.vector")
    .defines(function () {
      EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95e3,
        init: function (e, t, i) {
          this.parent(e, t, i),
            !ig.global.wm && !isNaN(i.zIndex) && (this.zIndex = i.zIndex),
            (e = Math.floor(256 * Math.random())),
            (t = Math.floor(256 * Math.random())),
            (i = Math.floor(256 * Math.random())),
            (this.fillColor = "rgba(" + e + "," + i + "," + t + ",1)");
        },
        clicked: function () {
          throw "no implementation on clicked()";
        },
        clicking: function () {
          throw "no implementation on clicking()";
        },
        released: function () {
          throw "no implementation on released()";
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.clickable-div-layer")
    .requires("plugins.data.vector")
    .defines(function () {
      ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function (e) {
          (this.pos = new Vector2(e.pos.x, e.pos.y)),
            (this.size = new Vector2(e.size.x, e.size.y));
          var t = "more-games",
            i = "https://play.rhym.io/",
            n = !1;
          e.div_layer_name && (t = e.div_layer_name),
            e.link && (i = e.link),
            e.newWindow && (n = e.newWindow),
            this.createClickableLayer(t, i, n);
        },
        createClickableLayer: function (e, t, i) {
          this.identifier = e;
          var n = ig.domHandler.getElementById("#" + e);
          n
            ? (ig.domHandler.show(n), ig.domHandler.attr(n, "href", t))
            : this.createClickableOutboundLayer(e, t, this.invisImagePath, i);
        },
        update: function (e, t) {
          (this.pos.x === e && this.pos.y === t) ||
            ((this.pos.x = e),
            (this.pos.y = t),
            (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}),
            (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width =
              this.size.x),
            (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height =
              this.size.y),
            (ig.sizeHandler.dynamicClickableEntityDivs[
              this.identifier
            ].entity_pos_x = this.pos.x),
            (ig.sizeHandler.dynamicClickableEntityDivs[
              this.identifier
            ].entity_pos_y = this.pos.y),
            ig.sizeHandler.resizeLayers());
        },
        updateSize: function (e, t) {
          (this.size.x = e), (this.size.y = t);
        },
        createClickableOutboundLayer: function (e, t, i, n) {
          var o = ig.domHandler.create("div");
          ig.domHandler.attr(o, "id", e);
          var s = ig.domHandler.create("a");
          if (
            (ig.domHandler.addEvent(o, "mousedown", function (e) {
              e.preventDefault();
            }),
            n
              ? (ig.domHandler.attr(s, "href", t),
                ig.domHandler.attr(s, "target", "_blank"))
              : ig.domHandler.attr(s, "href", t),
            (t = ig.domHandler.create("img")),
            ig.domHandler.css(t, { width: "100%", height: "100%" }),
            ig.domHandler.attr(t, "src", i),
            (i = Math.min(
              ig.sizeHandler.scaleRatioMultiplier.x,
              ig.sizeHandler.scaleRatioMultiplier.y
            )),
            ig.ua.mobile)
          ) {
            n = ig.domHandler.getElementById("#canvas");
            var a = (n = ig.domHandler.getOffsets(n)).left,
              r = n.top;
            console.log(n.left),
              ig.sizeHandler.disableStretchToFitOnMobileFlag
                ? ((n =
                    Math.floor(
                      a + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x
                    ) + "px"),
                  (r =
                    Math.floor(
                      r + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y
                    ) + "px"),
                  (a =
                    Math.floor(
                      this.size.x * ig.sizeHandler.scaleRatioMultiplier.x
                    ) + "px"),
                  (i =
                    Math.floor(
                      this.size.y * ig.sizeHandler.scaleRatioMultiplier.y
                    ) + "px"))
                : ((n =
                    Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px"),
                  (r =
                    Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px"),
                  (a =
                    Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                    "px"),
                  (i =
                    Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) +
                    "px"));
          } else
            (n = ig.domHandler.getElementById("#canvas")),
              (a = (n = ig.domHandler.getOffsets(n)).left),
              (r = n.top),
              ig.sizeHandler.enableStretchToFitOnDesktopFlag
                ? ((n =
                    Math.floor(a + this.pos.x * ig.sizeHandler.sizeRatio.x) +
                    "px"),
                  (r =
                    Math.floor(r + this.pos.y * ig.sizeHandler.sizeRatio.y) +
                    "px"),
                  (a =
                    Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                    "px"),
                  (i =
                    Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) +
                    "px"))
                : ((n = Math.floor(a + this.pos.x * i) + "px"),
                  (r = Math.floor(r + this.pos.y * i) + "px"),
                  (a = Math.floor(this.size.x * i) + "px"),
                  (i = Math.floor(this.size.y * i) + "px"));
          ig.domHandler.css(o, {
            float: "left",
            position: "absolute",
            left: n,
            top: r,
            width: a,
            height: i,
            "z-index": 3,
          }),
            ig.domHandler.addEvent(
              o,
              "mousemove",
              ig.input.mousemove.bind(ig.input),
              !1
            ),
            ig.domHandler.appendChild(s, t),
            ig.domHandler.appendChild(o, s),
            ig.domHandler.appendToBody(o),
            (ig.sizeHandler.dynamicClickableEntityDivs[e] = {}),
            (ig.sizeHandler.dynamicClickableEntityDivs[e].width = this.size.x),
            (ig.sizeHandler.dynamicClickableEntityDivs[e].height = this.size.y),
            (ig.sizeHandler.dynamicClickableEntityDivs[e].entity_pos_x =
              this.pos.x),
            (ig.sizeHandler.dynamicClickableEntityDivs[e].entity_pos_y =
              this.pos.y);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-branding-logo")
    .requires("game.entities.buttons.button", "plugins.clickable-div-layer")
    .defines(function () {
      EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet(
          "branding/logo.png",
          _SETTINGS.Branding.Logo.Width,
          _SETTINGS.Branding.Logo.Height
        ),
        zIndex: 10001,
        size: { x: 64, y: 66 },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function (e, t, i) {
          if ((this.parent(e, t, i), !ig.global.wm)) {
            if ("undefined" == typeof wm) {
              if (!_SETTINGS.Branding.Logo.Enabled) return void this.kill();
              (this.size.x = _SETTINGS.Branding.Logo.Width),
                (this.size.y = _SETTINGS.Branding.Logo.Height),
                (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0)),
                (this.currentAnim = this.anims.idle),
                i &&
                  i.centralize &&
                  ((this.pos.x = ig.system.width / 2 - this.size.x / 2),
                  console.log(
                    "centralize true ... centering branded logo ..."
                  )),
                _SETTINGS.Branding.Logo.LinkEnabled &&
                  ((this.link = _SETTINGS.Branding.Logo.Link),
                  (this.newWindow = _SETTINGS.Branding.Logo.NewWindow),
                  (this.clickableLayer = new ClickableDivLayer(this)));
            }
            this.div_layer_name = i.div_layer_name
              ? i.div_layer_name
              : "branding-logo";
          }
        },
        show: function () {
          var e = ig.domHandler.getElementById("#" + this.div_layer_name);
          ig.domHandler.show(e);
        },
        hide: function () {
          var e = ig.domHandler.getElementById("#" + this.div_layer_name);
          ig.domHandler.hide(e);
        },
        clicked: function () {},
        clicking: function () {},
        released: function () {},
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.branding-logo-placeholder")
    .requires("impact.entity", "game.entities.buttons.button-branding-logo")
    .defines(function () {
      EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: { x: 32, y: 32 },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function (e, t, i) {
          if ((this.parent(e, t, i), i))
            switch (
              (console.log("settings found ... using that div layer name"),
              (e = i.div_layer_name),
              console.log("settings.centralize:", i.centralize),
              i.centralize)
            ) {
              case "true":
                console.log("centralize true"), (centralize = !0);
                break;
              case "false":
                console.log("centralize false"), (centralize = !1);
                break;
              default:
                console.log("default ... centralize false"), (centralize = !1);
            }
          else (e = "branding-logo"), (centralize = !1);
          if ("undefined" == typeof wm) {
            if (_SETTINGS.Branding.Logo.Enabled)
              try {
                ig.game.spawnEntity(
                  EntityButtonBrandingLogo,
                  this.pos.x,
                  this.pos.y,
                  { div_layer_name: e, centralize: centralize }
                );
              } catch (e) {
                console.log(e);
              }
            this.kill();
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-more-games")
    .requires("game.entities.buttons.button", "plugins.clickable-div-layer")
    .defines(function () {
      EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet(
          "media/graphics/sprites/btn-moregames.png",
          222,
          222
        ),
        size: { x: 222, y: 222 },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function (e, t, i) {
          this.parent(e, t, i),
            (ig.game.buttonMoreGame = this),
            ig.global.wm ||
              ((this.div_layer_name = i.div_layer_name
                ? i.div_layer_name
                : "more-games"),
              _SETTINGS.MoreGames.Enabled
                ? ((this.anims.idle = new ig.Animation(this.logo, 0, [0], !0)),
                  (this.currentAnim = this.anims.idle),
                  _SETTINGS.MoreGames.Link &&
                    (this.link = _SETTINGS.MoreGames.Yandex
                      ? _SETTINGS.MoreGames.Link
                      : _SETTINGS.MoreGames.Gamedistributon),
                  _SETTINGS.MoreGames.NewWindow &&
                    (this.newWindow = _SETTINGS.MoreGames.NewWindow),
                  (this.clickableLayer = new ClickableDivLayer(this)))
                : this.kill());
        },
        update: function () {
          this.parent(),
            this.clickableLayer.updateSize(this.size.x, this.size.y),
            this.clickableLayer.update(this.pos.x, this.pos.y);
        },
        show: function () {
          var e = ig.domHandler.getElementById("#" + this.div_layer_name);
          e && ig.domHandler.show(e);
        },
        hide: function () {
          var e = ig.domHandler.getElementById("#" + this.div_layer_name);
          e && ig.domHandler.hide(e);
        },
        clicked: function () {},
        clicking: function () {},
        released: function () {},
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.pointer")
    .requires("impact.entity")
    .defines(function () {
      EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        size: new Vector2(1, 1),
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5500,
        check: function (e) {
          this.objectArray.push(e);
        },
        clickObject: function (e) {
          this.isFirstPressed &&
            "function" == typeof e.clicked &&
            (e.clicked(), this.addToClickedObjectList(e)),
            this.isPressed &&
              !this.isReleased &&
              "function" == typeof e.clicking &&
              e.clicking(),
            this.isReleased &&
              "function" == typeof e.released &&
              (e.released(), this.removeFromClickedObjectList(e));
        },
        refreshPos: function () {
          this.pos = ig.game.io.getClickPos();
        },
        update: function () {
          this.parent(), this.refreshPos();
          var e = null,
            t = -1;
          for (a = this.objectArray.length - 1; -1 < a; a--)
            this.objectArray[a].zIndex > t &&
              ((t = this.objectArray[a].zIndex), (e = this.objectArray[a]));
          if (null != e)
            null != this.hoveringItem
              ? this.hoveringItem != e &&
                ("function" == typeof this.hoveringItem.leave &&
                  this.hoveringItem.leave(),
                "function" == typeof e.over && e.over())
              : "function" == typeof e.over && e.over(),
              (this.hoveringItem = e),
              this.clickObject(e),
              (this.objectArray = []);
          else if (
            (null != this.hoveringItem &&
              "function" == typeof this.hoveringItem.leave &&
              (this.hoveringItem.leave(), (this.hoveringItem = null)),
            this.isReleased)
          ) {
            for (e = 0; e < this.clickedObjectList.length; e++)
              "function" ==
                typeof (t = this.clickedObjectList[e]).releasedOutside &&
                t.releasedOutside();
            this.clickedObjectList = [];
          }
          (this.isFirstPressed = ig.input.pressed("click")),
            (this.isReleased = ig.input.released("click")),
            (this.isPressed = ig.input.state("click"));
        },
        addToClickedObjectList: function (e) {
          this.clickedObjectList.push(e);
        },
        removeFromClickedObjectList: function (e) {
          for (var t = [], i = 0; i < this.clickedObjectList.length; i++) {
            var n = this.clickedObjectList[i];
            n != e && t.push(n);
          }
          this.clickedObjectList = t;
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.pointer-selector")
    .requires("game.entities.pointer")
    .defines(function () {
      EntityPointerSelector = EntityPointer.extend({
        zIndex: 1e3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: { x: 20, y: 20 },
        init: function (e, t, i) {
          this.parent(e, t, i);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.select")
    .requires("impact.entity")
    .defines(function () {
      EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function (e, t, i) {
          this.parent(e, t, i),
            (this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration));
        },
        doesClickableLayerExist: function (e) {
          for (k in dynamicClickableEntityDivs) if (k == e) return !0;
          return !1;
        },
        checkClickableLayer: function (e, t, i) {
          "undefined" == typeof wm &&
            (this.doesClickableLayerExist(e)
              ? (ig.game.showOverlay([e]),
                $("#" + e)
                  .find("[href]")
                  .attr("href", t))
              : this.createClickableOutboundLayer(
                  e,
                  t,
                  "media/graphics/misc/invisible.png",
                  i
                ));
        },
        createClickableOutboundLayer: function (e, t, i, n) {
          var o = ig.$new("div");
          (o.id = e),
            document.body.appendChild(o),
            $("#" + o.id).css("float", "left"),
            $("#" + o.id).css("width", this.size.x * multiplier),
            $("#" + o.id).css("height", this.size.y * multiplier),
            $("#" + o.id).css("position", "absolute");
          var s = w / 2 - destW / 2,
            a = h / 2 - destH / 2;
          w == mobileWidth
            ? ($("#" + o.id).css("left", this.pos.x),
              $("#" + o.id).css("top", this.pos.y))
            : ($("#" + o.id).css("left", s + this.pos.x * multiplier),
              $("#" + o.id).css("top", a + this.pos.y * multiplier)),
            n
              ? $("#" + o.id).html(
                  "<a target='_blank' href='" +
                    t +
                    "'><img style='width:100%;height:100%' src='" +
                    i +
                    "'></a>"
                )
              : $("#" + o.id).html(
                  "<a href='" +
                    t +
                    "'><img style='width:100%;height:100%' src='" +
                    i +
                    "'></a>"
                ),
            (dynamicClickableEntityDivs[e] = {}),
            (dynamicClickableEntityDivs[e].width = $("#" + o.id).width()),
            (dynamicClickableEntityDivs[e].height = $("#" + o.id).height()),
            (dynamicClickableEntityDivs[e].entity_pos_x = this.pos.x),
            (dynamicClickableEntityDivs[e].entity_pos_y = this.pos.y);
        },
        hovered: function () {
          (this.isHovering = !0), this.dehoverOthers();
        },
        dehoverOthers: function () {
          var e = ig.game.getEntitiesByType(EntitySelect);
          for (i = 0; i < e.length; i++) e[i] != this && (e[i].isHovering = !1);
        },
        deselectOthers: function () {
          var e = ig.game.getEntitiesByType(EntitySelect);
          for (i = 0; i < e.length; i++) e[i] != this && (e[i].isSelected = !1);
        },
        update: function () {
          this.parent(),
            this.canSelectTimer &&
              0 < this.canSelectTimer.delta() &&
              ((this.canSelect = !0), (this.canSelectTimer = null));
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.opening-rhym-logo")
    .requires("impact.entity")
    .defines(function () {
      if (
        ((EntityOpeningRhymLogo = ig.Entity.extend({
          objects: [],
          letterM: null,
          logoShield: null,
          text: null,
          localTweens: [],
          logoOriX: 0,
          logoOriY: 0,
          textOriX: 0,
          textOriY: 0,
          logoCanvas: null,
          init: function (e, t, i) {
            this.parent(e, t, i),
              console.log("Opening v1.0.4"),
              (logoSize =
                (148 / 960) * Math.min(ig.system.width, ig.system.height)),
              (this.logoCacheSize = Math.round(2 * logoSize)),
              (this.text = this.addObject(
                "drawText",
                0,
                0,
                logoSize,
                logoSize
              )),
              (this.cover = this.addObject(
                "drawCover",
                0,
                0,
                logoSize,
                logoSize
              )),
              (this.logoShield = this.addObject(
                "drawLogoShield",
                0,
                0,
                logoSize,
                logoSize
              )),
              (this.letterM = this.addObject(
                "drawLetterM",
                0,
                0,
                logoSize,
                logoSize
              )),
              (this.logoOriX = 0 - 2.2 * logoSize),
              (this.logoOriY = 0),
              (this.textOriX = 0 - 1.378 * logoSize),
              (this.textOriY = 0 - 0.5 * logoSize),
              (this.logoShield.x = 0),
              (this.logoShield.y = 0),
              (this.logoShield.scaleX = 0),
              (this.logoShield.scaleY = 0),
              (this.logoShield.alpha = 0),
              (this.letterM.x = this.logoShield.x),
              (this.letterM.y = this.logoShield.y),
              (this.letterM.scaleX = 0),
              (this.letterM.scaleY = 0),
              (this.letterM.alpha = 0),
              (this.text.x = 4.6 * -logoSize),
              (this.text.y = this.textOriY),
              (this.cover.x = this.logoShield.x),
              (this.cover.y = 0),
              this.addLocalDelayedCall(
                0.6,
                function () {
                  this.addLocalTweenTo(
                    this.logoShield,
                    { scaleX: 2, scaleY: 2 },
                    0.5,
                    this.backOut
                  ),
                    this.addLocalTweenTo(
                      this.logoShield,
                      { alpha: 1 },
                      0.2,
                      this.quadOut
                    ),
                    ig.soundHandler.sfxPlayer.play("logosplash1"),
                    this.addLocalDelayedCall(
                      0.4,
                      function () {
                        this.addLocalTweenTo(
                          this.letterM,
                          { scaleX: 2, scaleY: 2 },
                          0.5,
                          this.backOut
                        ),
                          this.addLocalTweenTo(
                            this.letterM,
                            { alpha: 1 },
                            0.2,
                            this.quadOut
                          ),
                          ig.soundHandler.sfxPlayer.play("logosplash1"),
                          this.addLocalDelayedCall(0.2, function () {
                            ig.soundHandler.sfxPlayer.play("logosplash2");
                          }),
                          this.addLocalDelayedCall(
                            0.6,
                            function () {
                              this.addLocalTweenTo(
                                this.logoShield,
                                { scaleX: 1, scaleY: 1 },
                                0.4,
                                this.quartOut
                              ),
                                this.addLocalTweenTo(
                                  this.logoShield,
                                  { x: this.logoOriX, y: this.logoOriY },
                                  0.4,
                                  this.quadOut
                                ),
                                this.addLocalTweenTo(
                                  this.letterM,
                                  { scaleX: 1, scaleY: 1 },
                                  0.4,
                                  this.quartOut
                                ),
                                this.addLocalTweenTo(
                                  this.letterM,
                                  { x: this.logoOriX, y: this.logoOriY },
                                  0.4,
                                  this.quadOut
                                ),
                                this.addLocalTweenTo(
                                  this.text,
                                  { x: this.textOriX },
                                  0.8,
                                  this.backOut
                                ),
                                this.addLocalDelayedCall(
                                  2,
                                  function () {
                                    this.addLocalTweenTo(
                                      this.logoShield,
                                      { alpha: 0 },
                                      0.6,
                                      this.quadOut
                                    ),
                                      this.addLocalTweenTo(
                                        this.text,
                                        { alpha: 0 },
                                        0.6,
                                        this.quadOut
                                      ),
                                      this.addLocalDelayedCall(
                                        1.3,
                                        function () {
                                          this.playBgm(),
                                            ig.game.director.nextLevel();
                                        }.bind(this)
                                      );
                                  }.bind(this)
                                );
                            }.bind(this)
                          );
                      }.bind(this)
                    );
                }.bind(this)
              );
          },
          addObject: function (e, t, i, n, o) {
            return (
              (e = {
                x: t,
                y: i,
                width: n,
                height: o,
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
                drawFunctionName: e,
              }),
              this.objects.push(e),
              e
            );
          },
          update: function () {
            if ((this.parent(), !ig.wm)) {
              this.unlockWebAudio();
              var e = ig.system.tick;
              e > 1 / 60 && (e = 1 / 60),
                this.updateLocalTween(e),
                (this.cover.x = this.logoShield.x),
                _SETTINGS.DeveloperBranding.Splash.Enabled ||
                  (this.playBgm(), ig.game.director.nextLevel(), this.kill());
            }
          },
          playBgm: function () {},
          unlockWebAudio: function () {
            if (ig.input.released("click"))
              try {
                ig.soundHandler.unlockWebAudio();
              } catch (e) {}
          },
          addLocalDelayedCall: function (e, t) {
            this.addLocalTweenTo(null, {}, e, this.easeNone, 0, t);
          },
          addLocalTweenTo: function (e, t, i, n, o, s) {
            for (var a in (void 0 === o && (o = 0),
            void 0 === n && (n = this.easeNone),
            void 0 === s && (s = null),
            (i = {
              obj: e,
              endProperties: t,
              duration: i,
              easing: n,
              delay: o,
              elapsed: 0,
              deltaProperties: {},
              startProperties: {},
              onComplete: s,
            }),
            t))
              Object.hasOwnProperty.call(t, a) &&
                ((i.startProperties[a] = e[a]),
                (i.deltaProperties[a] = t[a] - e[a]));
            this.localTweens.push(i);
          },
          updateLocalTween: function (e) {
            for (var t = 0; t < this.localTweens.length; t++) {
              var i = this.localTweens[t];
              if (0 < i.delay) i.delay -= e;
              else {
                for (var n in ((i.elapsed += e), i.deltaProperties))
                  if (Object.hasOwnProperty.call(i.deltaProperties, n)) {
                    var o = i.deltaProperties[n],
                      s = i.startProperties[n],
                      a = i.easing,
                      r = i.elapsed / i.duration;
                    1 < r && (r = 1), (r = a(r)), (i.obj[n] = s + o * r);
                  }
                i.elapsed >= i.duration &&
                  (this.localTweens.splice(t, 1), t--, i.onComplete) &&
                  i.onComplete();
              }
            }
          },
          quadOut: function (e) {
            return -e * (e - 2);
          },
          quartOut: function (e) {
            return -(--e * e * e * e - 1);
          },
          backOut: function (e) {
            return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
          },
          easeNone: function (e) {
            return e;
          },
          draw: function () {
            if ((this.parent(), !ig.global.wm)) {
              var e = ig.system.context;
              for (
                e.fillStyle = "#ffffff",
                  e.fillRect(0, 0, ig.system.width, ig.system.height),
                  e = 0;
                e < this.objects.length;
                e++
              ) {
                var t = this.objects[e];
                1 < t.alpha && (t.alpha = 1),
                  0 != t.scaleX &&
                    0 != t.scaleY &&
                    0 < t.alpha &&
                    this[t.drawFunctionName](t);
              }
            }
          },
          drawLogoShield: function (e) {
            if (!this.logoCanvas) {
              (this.logoCanvas = ig.$new("canvas")),
                (this.logoCanvas.width = this.logoCacheSize),
                (this.logoCanvas.height = this.logoCacheSize);
              var t = this.logoCanvas.getContext("2d"),
                i = this.logoCacheSize,
                n = this.logoCacheSize,
                o = 0,
                s = 0;
              t.clearRect(0, 0, this.logoCanvas.width, this.logoCanvas.height),
                t.save(),
                (t.fillStyle = "#e35026"),
                t.beginPath(),
                t.moveTo(o + 0.06 * i, s),
                t.lineTo(o + 0.94 * i, s),
                t.lineTo(o + 0.86 * i, s + 0.89 * n),
                t.lineTo(o + 0.5 * i, s + n),
                t.lineTo(o + 0.14 * i, s + 0.89 * n),
                t.closePath(),
                t.fill(),
                (t.fillStyle = "#ee652b"),
                t.beginPath(),
                t.moveTo(o + 0.5 * i, s + 0.07 * n),
                t.lineTo(o + 0.86 * i, s + 0.07 * n),
                t.lineTo(o + 0.79 * i, s + 0.84 * n),
                t.lineTo(o + 0.5 * i, s + 0.92 * n),
                t.closePath(),
                t.fill(),
                t.restore();
            }
            (i = e.width * e.scaleX),
              (n = e.height * e.scaleY),
              (o = ig.system.width / 2 + e.x - i / 2),
              (s = ig.system.height / 2 + e.y - n / 2),
              ((t = ig.system.context).globalAlpha = e.alpha),
              t.drawImage(
                this.logoCanvas,
                0,
                0,
                this.logoCacheSize,
                this.logoCacheSize,
                o,
                s,
                i,
                n
              ),
              (t.globalAlpha = 1);
          },
          drawLetterM: function (e) {
            if (!this.mCanvas) {
              (this.mCanvas = ig.$new("canvas")),
                (this.mCanvas.width = this.logoCacheSize),
                (this.mCanvas.height = this.logoCacheSize);
              var t = this.mCanvas.getContext("2d"),
                i = this.logoCacheSize,
                n = this.logoCacheSize,
                o = 0,
                s = 0;
              t.save(),
                (t.fillStyle = "#ffffff"),
                t.beginPath(),
                t.moveTo(o + 0.25 * i, s + 0.2 * n),
                t.lineTo(o + 0.4 * i, s + 0.2 * n),
                t.lineTo(o + 0.5 * i, s + 0.37 * n),
                t.lineTo(o + 0.6 * i, s + 0.2 * n),
                t.lineTo(o + 0.75 * i, s + 0.2 * n),
                t.lineTo(o + 0.75 * i, s + 0.7 * n),
                t.lineTo(o + 0.6 * i, s + 0.7 * n),
                t.lineTo(o + 0.6 * i, s + 0.45 * n),
                t.lineTo(o + 0.5 * i, s + 0.63 * n),
                t.lineTo(o + 0.4 * i, s + 0.45 * n),
                t.lineTo(o + 0.4 * i, s + 0.7 * n),
                t.lineTo(o + 0.25 * i, s + 0.7 * n),
                t.closePath(),
                t.fill(),
                t.restore();
            }
            (t = ig.system.context),
              (i = e.width * e.scaleX),
              (n = e.height * e.scaleY),
              (o = ig.system.width / 2 + e.x - i / 2),
              (s = ig.system.height / 2 + e.y - n / 2),
              (t.globalAlpha = e.alpha),
              t.drawImage(
                this.mCanvas,
                0,
                0,
                this.logoCacheSize,
                this.logoCacheSize,
                o,
                s,
                i,
                n
              ),
              (t.globalAlpha = 1);
          },
          drawText: function (e) {},
          drawCover: function (e) {
            var t = ig.system.context,
              i = ig.system.width / 2 + e.x,
              n = ig.system.height / 2 + e.y;
            t.save(),
              (t.globalAlpha = e.alpha),
              (t.fillStyle = "#ffffff"),
              t.fillRect(
                i - ig.system.width / 2,
                n - this.logoCacheSize / 2,
                ig.system.width / 2,
                this.logoCacheSize
              ),
              (t.globalAlpha = 1),
              t.restore();
          },
        })),
        void 0 === window.FontFaceObserver)
      ) {
        var e = function (e, t) {
            document.addEventListener
              ? e.addEventListener("scroll", t, !1)
              : e.attachEvent("scroll", t);
          },
          t = function (e) {
            (this.a = document.createElement("div")),
              this.a.setAttribute("aria-hidden", "true"),
              this.a.appendChild(document.createTextNode(e)),
              (this.b = document.createElement("span")),
              (this.c = document.createElement("span")),
              (this.h = document.createElement("span")),
              (this.f = document.createElement("span")),
              (this.g = -1),
              (this.b.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
              (this.c.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
              (this.f.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
              (this.h.style.cssText =
                "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
              this.b.appendChild(this.h),
              this.c.appendChild(this.f),
              this.a.appendChild(this.b),
              this.a.appendChild(this.c);
          },
          i = function (e, t) {
            e.a.style.cssText =
              "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
              t +
              ";";
          },
          n = function (e) {
            var t = e.a.offsetWidth,
              i = t + 100;
            return (
              (e.f.style.width = i + "px"),
              (e.c.scrollLeft = i),
              (e.b.scrollLeft = e.b.scrollWidth + 100),
              e.g !== t && ((e.g = t), !0)
            );
          },
          o = function (t, i) {
            function o() {
              var e = s;
              n(e) && e.a.parentNode && i(e.g);
            }
            var s = t;
            e(t.b, o), e(t.c, o), n(t);
          },
          s = function (e, t) {
            var i = t || {};
            (this.family = e),
              (this.style = i.style || "normal"),
              (this.weight = i.weight || "normal"),
              (this.stretch = i.stretch || "normal");
          },
          a = function () {
            return null === c && (c = !!document.fonts), c;
          },
          r = function () {
            if (null === d) {
              var e = document.createElement("div");
              try {
                e.style.font = "condensed 100px sans-serif";
              } catch (e) {}
              d = "" !== e.style.font;
            }
            return d;
          },
          l = function (e, t) {
            return [e.style, e.weight, r() ? e.stretch : "", "100px", t].join(
              " "
            );
          },
          u = null,
          h = null,
          d = null,
          c = null;
        (s.prototype.load = function (e, n) {
          var s = this,
            r = e || "BESbswy",
            d = 0,
            c = n || 3e3,
            g = new Date().getTime();
          return new Promise(function (e, n) {
            var p;
            if (
              ((p = a()) &&
                (null === h &&
                  (a() && /Apple/.test(window.navigator.vendor)
                    ? ((p =
                        /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                          window.navigator.userAgent
                        )),
                      (h = !!p && 603 > parseInt(p[1], 10)))
                    : (h = !1)),
                (p = !h)),
              p)
            ) {
              p = new Promise(function (e, t) {
                !(function i() {
                  new Date().getTime() - g >= c
                    ? t(Error(c + "ms timeout exceeded"))
                    : document.fonts
                        .load(l(s, '"' + s.family + '"'), r)
                        .then(function (t) {
                          1 <= t.length ? e() : setTimeout(i, 25);
                        }, t);
                })();
              });
              var f = new Promise(function (e, t) {
                d = setTimeout(function () {
                  t(Error(c + "ms timeout exceeded"));
                }, c);
              });
              Promise.race([f, p]).then(function () {
                clearTimeout(d), e(s);
              }, n);
            } else {
              var m = function () {
                function a() {
                  var t;
                  (t =
                    (-1 != m && -1 != y) ||
                    (-1 != m && -1 != _) ||
                    (-1 != y && -1 != _)) &&
                    ((t = m != y && m != _ && y != _) ||
                      (null === u &&
                        ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          window.navigator.userAgent
                        )),
                        (u =
                          !!t &&
                          (536 > parseInt(t[1], 10) ||
                            (536 === parseInt(t[1], 10) &&
                              11 >= parseInt(t[2], 10))))),
                      (t =
                        u &&
                        ((m == v && y == v && _ == v) ||
                          (m == b && y == b && _ == b) ||
                          (m == w && y == w && _ == w)))),
                    (t = !t)),
                    t &&
                      (x.parentNode && x.parentNode.removeChild(x),
                      clearTimeout(d),
                      e(s));
                }
                var h = new t(r),
                  p = new t(r),
                  f = new t(r),
                  m = -1,
                  y = -1,
                  _ = -1,
                  v = -1,
                  b = -1,
                  w = -1,
                  x = document.createElement("div");
                (x.dir = "ltr"),
                  i(h, l(s, "sans-serif")),
                  i(p, l(s, "serif")),
                  i(f, l(s, "monospace")),
                  x.appendChild(h.a),
                  x.appendChild(p.a),
                  x.appendChild(f.a),
                  document.body.appendChild(x),
                  (v = h.a.offsetWidth),
                  (b = p.a.offsetWidth),
                  (w = f.a.offsetWidth),
                  (function e() {
                    if (new Date().getTime() - g >= c)
                      x.parentNode && x.parentNode.removeChild(x),
                        n(Error(c + "ms timeout exceeded"));
                    else {
                      var t = document.hidden;
                      (!0 !== t && void 0 !== t) ||
                        ((m = h.a.offsetWidth),
                        (y = p.a.offsetWidth),
                        (_ = f.a.offsetWidth),
                        a()),
                        (d = setTimeout(e, 50));
                    }
                  })(),
                  o(h, function (e) {
                    (m = e), a();
                  }),
                  i(h, l(s, '"' + s.family + '",sans-serif')),
                  o(p, function (e) {
                    (y = e), a();
                  }),
                  i(p, l(s, '"' + s.family + '",serif')),
                  o(f, function (e) {
                    (_ = e), a();
                  }),
                  i(f, l(s, '"' + s.family + '",monospace'));
              };
              document.body
                ? m()
                : document.addEventListener
                ? document.addEventListener("DOMContentLoaded", function e() {
                    document.removeEventListener("DOMContentLoaded", e), m();
                  })
                : document.attachEvent("onreadystatechange", function e() {
                    ("interactive" != document.readyState &&
                      "complete" != document.readyState) ||
                      (document.detachEvent("onreadystatechange", e), m());
                  });
            }
          });
        }),
          "object" == typeof module
            ? (module.exports = s)
            : ((window.FontFaceObserver = s),
              (window.FontFaceObserver.prototype.load = s.prototype.load)),
          console.log(
            "font loader not exist : create new instance of font loader"
          );
      }
      ((s = document.createElement("style")).type = "text/css"),
        s.appendChild(
          document.createTextNode(
            "@font-face {font-family: 'logofont';src: url('media/fonts/logofont.woff2') format('woff2'),url('media/fonts/logofont.woff') format('woff'),url('media/fonts/logofont.ttf') format('truetype')}"
          )
        ),
        document.head.appendChild(s),
        (ig.splashLogoFontLoaded = !1),
        new FontFaceObserver("logofont")
          .load()
          .then(function () {
            ig.splashLogoFontLoaded = !0;
          })
          .catch(function () {
            console.log("Splash font failed to load :", "media/fonts/logofont");
          });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.opening")
    .requires("impact.image", "game.entities.opening-rhym-logo")
    .defines(function () {
      LevelOpening = {
        entities: [{ type: "EntityOpeningRhymLogo", x: 520, y: 212 }],
        layer: [],
      };
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-play")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityButtonPlay = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn-play.png",
          283,
          284
        ),
        size: { x: 283, y: 284 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        onClickCallback: null,
        init: function (e, t, i) {
          this.parent(e, t, i),
            this.setAnchoredPosition(
              e - this.size.x / 2 + 1e3,
              t - this.size.y / 2,
              "center-middle"
            ),
            this.addAnim("idle", 1, [0]),
            ig.global.wm ||
              ((this.startYPos = this.anchoredPositionY),
              null != i.onClicked && (this.onClickCallback = i.onClicked)),
            setTimeout(() => this.released(), 100);
        },
        clicked: function () {
          this.isEnabled &&
            (ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.startYPos + 20 },
              0.2,
              {}
            ).start());
        },
        leave: function () {
          this.anchoredPositionY != this.startYPos &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {}).start();
        },
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {
              onComplete: function () {
                null != this.onClickCallback && this.onClickCallback();
              }.bind(this),
            }).start();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.text")
    .requires("impact.entity")
    .defines(function () {
      EntityText = ig.Entity.extend({
        text: "",
        size: { x: 32, y: 32 },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(255, 255, 255, 0.5)",
        zIndex: 1e4,
        init: function (_0xf77f50, _0x2fe8cc, _0x1f9900) {
          this.parent(_0xf77f50, _0x2fe8cc, _0x1f9900),
            "undefined" == typeof wm &&
              _0x1f9900 &&
              ((this.name = _0x1f9900.name),
              (this.useLanguageFile = _0x1f9900.useLanguageFile),
              (this.languageFileSectionName =
                _0x1f9900.languageFileSectionName),
              (this.text = eval(this.useLanguageFile)
                ? ig.game.language.selected[this.languageFileSectionName][
                    _0x1f9900.text
                  ]
                : _0x1f9900.text),
              (this.fontSize = _0x1f9900.fontSize),
              this.fontSize || (this.fontSize = "24"),
              (this.fontStyle = _0x1f9900.fontStyle),
              this.fontStyle || (this.fontStyle = "Arial"),
              (this.fontWeight = _0x1f9900.fontWeight),
              this.fontWeight || (this.fontWeight = "bold"),
              (this.fontColor = _0x1f9900.fontColor),
              this.fontColor || (this.fontColor = "#fff"),
              (this.backgroundBorderColor = _0x1f9900.backgroundBorderColor),
              (this.backgroundColor = _0x1f9900.backgroundColor),
              (this.backgroundHeight = _0x1f9900.backgroundHeight));
        },
        draw: function () {
          this.parent(),
            this.backgroundBorderColor &&
              ((ig.system.context.fillStyle = this.backgroundBorderColor),
              ig.system.context.fillRect(
                0,
                this.pos.y - this.size.y + 10 - 5,
                ig.system.width,
                this.backgroundHeight + 10
              )),
            this.backgroundColor &&
              ((ig.system.context.fillStyle = this.backgroundColor),
              ig.system.context.fillRect(
                0,
                this.pos.y - this.size.y + 10,
                ig.system.width,
                this.backgroundHeight
              )),
            "undefined" == typeof wm &&
              ((ig.system.context.fillStyle = this.fontColor),
              (ig.system.context.font =
                this.fontWeight + " " + this.fontSize + "px " + this.fontStyle),
              ig.system.context.fillText(
                this.text,
                this.pos.x - ig.system.context.measureText(this.text).width / 2,
                this.pos.y + this.size.y
              ));
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.popups.panel-popup")
    .requires("impact.entity")
    .defines(function () {
      EntityPanelPopup = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/panel.png",
          791,
          442
        ),
        size: { x: 791, y: 442 },
        init: function (e, t, i) {
          this.parent(e, t, i), this.addAnim("idle", 1, [0]);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.popups.popup")
    .requires(
      "impact.entity",
      "game.entities.text",
      "game.entities.popups.panel-popup"
    )
    .defines(function () {
      EntityPopup = ig.Entity.extend({
        _parent: null,
        _arrayButtons: [],
        _arrayElements: [],
        _posYBegin: 750,
        bgfill: new ig.Image("media/graphics/sprites/end-bg.png"),
        init: function (e, t, i) {
          this.parent(e, t, i), this.spawnElements();
        },
        spawnElements: function () {
          (this.panel = ig.game.spawnEntity(EntityPanelPopup, this.x, this.y, {
            zIndex: this.zIndex + 1,
          })),
            this.panel.setAnchoredPosition(
              -this.panel.size.x / 2,
              -this.panel.size.y / 2 - 100 - this._posYBegin,
              "center-middle"
            ),
            this.addElementToArray(this.panel);
        },
        spawnObject: function (e, t) {
          return ig.game.spawnEntity(e, -9999, -9999, t);
        },
        showPopup: function () {
          for (var e = 0; e < this._arrayElements.length; e++)
            this.goto(
              this._arrayElements[e],
              this._arrayElements[e].anchoredPositionX,
              this._arrayElements[e].anchoredPositionY + this._posYBegin,
              0.2,
              0,
              "show",
              null
            );
        },
        hidePopup: function () {
          this.goto(
            this._arrayElements[0],
            this._arrayElements[0].anchoredPositionX,
            this._arrayElements[0].anchoredPositionY - 3 * this._posYBegin,
            0.2,
            0,
            "hide",
            this.removeAllElementFromArray.bind(this)
          );
          for (var e = 1; e < this._arrayElements.length; e++)
            this.goto(
              this._arrayElements[e],
              this._arrayElements[e].anchoredPositionX,
              this._arrayElements[e].anchoredPositionY - 3 * this._posYBegin,
              0.2,
              0,
              "hide",
              null
            );
        },
        addElementToArray: function (e) {
          this._arrayElements.push(e);
        },
        removeAllElementFromArray: function () {
          for (; 0 < this._arrayElements.length; )
            this._arrayElements.pop().kill();
          this.kill();
        },
        addButtonToArray: function (e) {
          this._arrayButtons.push(e);
        },
        removeAllButtonFromArray: function () {
          for (; 0 < this._arrayButtons.length; )
            this._arrayButtons.pop().kill();
        },
        enableAllbuttons: function () {
          for (var e = 0; e < this._arrayButtons.length; e++)
            this._arrayButtons[e].setEnable();
        },
        disableAllButtons: function () {
          for (var e = 0; e < this._arrayButtons.length; e++)
            this._arrayButtons[e].setDisable();
        },
        goto: function (e, t, i, n, o, s, a) {
          e.tween({ anchoredPositionY: i }, n, {
            onComplete: function () {
              "hide" == s && a && a();
            },
            delay: o,
            easing: ig.Tween.Easing.Back.EaseOut,
          }).start();
        },
        gotoScale: function (e, t, i, n) {
          e.tween({ scale: { x: t, y: t } }, i, {
            onUpdate: function () {
              e.setScale(this.scale.x, this.scale.y);
            }.bind(e),
            onComplete: function () {},
            delay: n,
            easing: ig.Tween.Easing.Back.EaseOut,
          }).start();
        },
        draw: function () {
          this.parent(), (ig.system.context.globalAlpha = 0.9);
          var e = ig.responsive.toAnchor(0, 0, "center-middle");
          ig.responsive.drawScaledImage(
            this.bgfill,
            e.x,
            e.y,
            ig.system.width / this.bgfill.width,
            ig.system.height / this.bgfill.height,
            0.5,
            0.5
          );
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.popups.title-settings")
    .requires("impact.entity")
    .defines(function () {
      EntityTitleSettings = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/settings.png",
          496,
          81
        ),
        size: { x: 496, y: 81 },
        init: function (e, t, i) {
          this.parent(e, t, i), this.addAnim("idle", 1, [0]);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-onoff")
    .requires("impact.entity")
    .defines(function () {
      EntityButtonOnoff = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        timeTween: 0.1,
        levelEffect: 2,
        completedEffect: !0,
        textButton: null,
        imgOn: null,
        imgOff: null,
        currentState: "on",
        isEnabled: !0,
        init: function (e, t, i) {
          this.parent(e, t, i);
        },
        clicked: function () {
          this.completedEffect &&
            this.isEnabled &&
            ((this.completedEffect = !1),
            this.initState(),
            ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.anchoredPositionY + this.levelEffect },
              this.timeTween,
              {
                onComplete: function () {
                  this.tween(
                    {
                      anchoredPositionY:
                        this.anchoredPositionY - this.levelEffect,
                    },
                    this.timeTween,
                    {
                      onComplete: function () {
                        this.handleClicked(), (this.completedEffect = !0);
                      }.bind(this),
                    }
                  ).start();
                }.bind(this),
              }
            ).start());
        },
        setState: function () {},
        initState: function () {},
        update: function () {
          this.parent(),
            this.textButton &&
              (this.textButton.pos = {
                x: this.pos.x + this.size.x / 2,
                y: this.pos.y + this.size.y / 3,
              });
        },
        clicking: function () {},
        released: function () {},
        handleClicked: function () {},
        kill: function () {
          this.textButton && this.textButton.kill(), this.parent();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-sfx")
    .requires("game.entities.buttons.button-onoff")
    .defines(function () {
      EntityButtonSfx = EntityButtonOnoff.extend({
        imgOn: new ig.Image("media/graphics/sprites/btn-sfx-on.png"),
        imgOff: new ig.Image("media/graphics/sprites/btn-sfx-off.png"),
        init: function (e, t, i) {
          this.parent(e, t, i),
            (this.animSheet = new ig.AnimationSheet(
              this.imgOn.path,
              this.imgOn.width,
              this.imgOn.height
            )),
            this.setState();
        },
        setState: function () {
          (this.currentState = 0 < ig.game.load("sound") ? "on" : "off"),
            (this.animSheet.image =
              "off" == this.currentState ? this.imgOff : this.imgOn),
            this.addAnim("idle", 1, [0]),
            (this.size = { x: this.imgOn.width, y: this.imgOn.height });
        },
        initState: function () {
          "on" == this.currentState
            ? ((this.currentState = "off"),
              (this.animSheet.image = this.imgOff),
              ig.game.save("sound", 0),
              ig.soundHandler.sfxPlayer.volume(0))
            : ((this.currentState = "on"),
              (this.animSheet.image = this.imgOn),
              ig.game.save("sound", 0.5),
              ig.soundHandler.sfxPlayer.volume(0.5)),
            this.addAnim("idle", 1, [0]),
            (this.size = { x: this.imgOn.width, y: this.imgOn.height });
        },
        handleClicked: function () {},
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-bgm")
    .requires("game.entities.buttons.button-onoff")
    .defines(function () {
      EntityButtonBgm = EntityButtonOnoff.extend({
        imgOn: new ig.Image("media/graphics/sprites/btn-bgm-on.png"),
        imgOff: new ig.Image("media/graphics/sprites/btn-bgm-off.png"),
        init: function (e, t, i) {
          this.parent(e, t, i),
            (this.animSheet = new ig.AnimationSheet(
              this.imgOn.path,
              this.imgOn.width,
              this.imgOn.height
            )),
            this.setState();
        },
        setState: function () {
          (this.currentState = 0 < ig.game.load("music") ? "on" : "off"),
            (this.animSheet.image =
              "off" == this.currentState ? this.imgOff : this.imgOn),
            this.addAnim("idle", 1, [0]),
            (this.size = { x: this.imgOn.width, y: this.imgOn.height });
        },
        initState: function () {
          "on" == this.currentState
            ? ((this.currentState = "off"),
              (this.animSheet.image = this.imgOff),
              ig.game.save("music", 0),
              ig.soundHandler.sfxPlayer.volume(0))
            : ((this.currentState = "on"),
              (this.animSheet.image = this.imgOn),
              ig.game.save("music", 0.5),
              ig.soundHandler.sfxPlayer.volume(0.5)),
            this.addAnim("idle", 1, [0]),
            (this.size = { x: this.imgOn.width, y: this.imgOn.height });
        },
        handleClicked: function () {},
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-home")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityButtonHome = EntityButton.extend({
        _parentControl: null,
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn_home.png",
          222,
          222
        ),
        size: { x: 222, y: 222 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        onClickCallback: null,
        init: function (e, t, i) {
          this.parent(e, t, i),
            this.addAnim("idle", 1, [0]),
            !ig.global.wm &&
              null != i.onClicked &&
              (this.onClickCallback = i.onClicked);
        },
        clicked: function () {
          this.isEnabled &&
            (ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.startYPos + 20 },
              0.2,
              {}
            ).start());
        },
        leave: function () {
          this.isEnabled &&
            this.anchoredPositionY != this.startYPos &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {}).start();
        },
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {
              onComplete: function () {
                this._parentControl.onClickHome();
              }.bind(this),
            }).start();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.popups.settings-popup")
    .requires(
      "game.entities.popups.popup",
      "game.entities.popups.title-settings",
      "game.entities.buttons.button-sfx",
      "game.entities.buttons.button-bgm",
      "game.entities.buttons.button-home"
    )
    .defines(function () {
      EntitySettingsPopup = EntityPopup.extend({
        init: function (e, t, i) {
          this.parent(e, t, i);
        },
        spawnElements: function () {
          this.parent(),
            (this.title = ig.game.spawnEntity(
              EntityTitleSettings,
              -9999,
              -9999,
              { zIndex: this.zIndex + 1 }
            )),
            (this.buttonBgm = ig.game.spawnEntity(
              EntityButtonBgm,
              -9999,
              -9999,
              { zIndex: this.zIndex + 1 }
            )),
            (this.buttonSfx = ig.game.spawnEntity(
              EntityButtonSfx,
              -9999,
              -9999,
              { zIndex: this.zIndex + 1 }
            )),
            (this.buttonHome = this.spawnObject(EntityButtonHome, {
              zIndex: this.zIndex + 1,
              _parentControl: this._parent,
            })),
            this.title.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                this.title.size.x / 2,
              this.panel.anchoredPositionY - 140,
              "center-middle"
            ),
            this.buttonBgm.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                this.buttonBgm.size.x / 2,
              this.panel.anchoredPositionY + 60,
              "center-middle"
            ),
            this.buttonSfx.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                this.buttonSfx.size.x / 2,
              this.panel.anchoredPositionY + 250,
              "center-middle"
            ),
            this.buttonHome.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                this.buttonHome.size.x / 2,
              this.panel.anchoredPositionY + 550,
              "center-middle"
            ),
            (this.buttonHome.startYPos =
              this.buttonHome.anchoredPositionY + this._posYBegin),
            this.addElementToArray(this.title),
            this.addElementToArray(this.buttonSfx),
            this.addElementToArray(this.buttonBgm),
            this.addElementToArray(this.buttonHome),
            ig.game.sortEntitiesDeferred();
        },
        handleButton: function () {
          this.buttonHome.isEnabled = !1;
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-sfx2")
    .requires("game.entities.buttons.button-sfx")
    .defines(function () {
      EntityButtonSfx2 = EntityButtonSfx.extend({
        imgOn: new ig.Image("media/graphics/sprites/btn-sound-on.png"),
        imgOff: new ig.Image("media/graphics/sprites/btn-sound-off.png"),
        init: function (e, t, i) {
          this.parent(e, t, i);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.controllers.title-controller")
    .requires(
      "impact.entity",
      "plugins.handlers.size-handler",
      "game.entities.buttons.button-play",
      "game.entities.buttons.button-more-games",
      "game.entities.popups.settings-popup",
      "game.entities.buttons.button-sfx2"
    )
    .defines(function () {
      EntityTitleController = ig.Entity.extend({
        playBtn: null,
        bgfill: new ig.Image("media/graphics/sprites/bg-fill.png"),
        gameIcon: new ig.Image("media/graphics/sprites/game-icon.png"),
        init: function (e, t, i) {
          this.parent(e, t, i),
            (ig.game.titleController = this),
            (ig.game.gameController = null),
            (this.playBtn = ig.game.spawnEntity(EntityButtonPlay, -1e3, 210, {
              zIndex: this.zIndex + 1,
              onClicked: function () {
                this.startTransitionOut();
              }.bind(this),
            })),
            (this.settingsBtn = ig.game.spawnEntity(
              EntityButtonMoreGames,
              -1200,
              480,
              {
                zIndex: this.zIndex + 1,
                onClicked: function () {
                  this.onClickSettings();
                }.bind(this),
              }
            )),
            this.settingsBtn.setAnchoredPosition(
              -this.settingsBtn.size.x / 2,
              410,
              "center-middle"
            ),
            (ig.btnFullScreen = ig.game.spawnEntity(
              ig.FullscreenButton,
              20,
              20,
              {
                enterImage: new ig.Image(
                  "media/graphics/misc/enter-fullscreen.png"
                ),
                exitImage: new ig.Image(
                  "media/graphics/misc/exit-fullscreen.png"
                ),
              }
            )),
            (this.sfxBtn = ig.game.spawnEntity(EntityButtonSfx2, -9999, -9999, {
              zIndex: this.zIndex + 1,
            })),
            this.sfxBtn.setAnchoredPosition(
              -this.sfxBtn.size.x - 20,
              20,
              "top-right"
            );
        },
        startTransitionOut: function () {
          ig.game.director.nextLevel();
        },
        onClickSettings: function () {
          (this.settingsBtn.isEnabled = !1),
            (this.playBtn.isEnabled = !1),
            (this.settingsPopup = ig.game.spawnEntity(
              EntitySettingsPopup,
              0,
              0,
              { zIndex: this.zIndex + 1, _parent: this }
            )),
            this.settingsPopup.showPopup();
        },
        onClickHome: function () {
          (this.settingsBtn.isEnabled = !0),
            (this.playBtn.isEnabled = !0),
            this.settingsPopup.handleButton(),
            this.settingsPopup.hidePopup();
        },
        draw: function () {
          this.parent(),
            ((e = ig.system.context).fillStyle = "#fec745"),
            e.fillRect(0, 0, ig.system.width, ig.system.height);
          var e = ig.responsive.toAnchor(0, 0, "center-middle"),
            t = ig.system.width / this.bgfill.width,
            i = ig.system.height / this.bgfill.height;
          (t = t > i ? t : i),
            ig.responsive.drawScaledImage(
              this.bgfill,
              e.x,
              e.y,
              t,
              t,
              0.5,
              0.5
            ),
            this.gameIcon.draw(
              e.x - this.gameIcon.width / 2,
              e.y - this.gameIcon.height / 2 - 300
            );
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.title")
    .requires("impact.image", "game.entities.controllers.title-controller")
    .defines(function () {
      LevelTitle = {
        entities: [
          { type: "EntityTitleController", x: 0, y: 0 },
          { type: "EntityPointer", x: 0, y: 0 },
        ],
        layer: [],
      };
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.gameplay.cat")
    .requires("impact.entity")
    .defines(function () {
      EntityCat = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/cat.png",
          195,
          228
        ),
        size: { x: 195, y: 228 },
        init: function (e, t, i) {
          this.parent(e, t, i),
            this.setAnchoredPosition(
              e - this.size.x / 2 + 1e3,
              t - this.size.y / 2,
              "center-middle"
            ),
            this.addAnim("idle", 1, [0]),
            (this.showPos = this.anchoredPositionY),
            ig.game.sortEntitiesDeferred();
        },
        draw: function () {
          this.parent();
        },
        forceToPosition: function (e) {
          (this.anchoredPositionX =
            e.anchoredPositionX + (e.size.x - this.size.x) / 2),
            (this.anchoredPositionY = e.anchoredPositionY + 20);
        },
        moveToPosition: function (e) {
          (ig.game.inProgress = !0),
            ig.soundHandler.sfxPlayer.play("hide"),
            this.tween({ anchoredPositionY: e.anchoredPositionY + 20 }, 0.5, {
              onComplete: function () {
                (this.currentAnim.alpha = 0),
                  ig.game.gameController.startGameplay();
              }.bind(this),
            }).start();
        },
        showCat: function () {
          this.tween({ anchoredPositionY: this.anchoredPositionY }, 0.05, {
            onComplete: function () {
              this.currentAnim.alpha = 1;
            }.bind(this),
          }).start(),
            this.tween({ anchoredPositionY: this.showPos }, 0.5, {
              onComplete: function () {
                var e = Math.floor(3 * Math.random()),
                  t = 0 == e ? "bark1" : 1 == e ? "bark2" : "bark3";
                ig.game.gameController.isCorrect
                  ? (ig.soundHandler.sfxPlayer.play(t),
                    this.tween({ anchoredPositionY: this.showPos }, 1, {
                      onComplete: function () {
                        ig.game.gameController.nextRound();
                      },
                    }).start())
                  : (ig.soundHandler.sfxPlayer.play(t),
                    ig.game.gameController.showResult());
              }.bind(this),
            }).start();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.gameplay.box")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityBox = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/box.png",
          337,
          243
        ),
        size: { x: 337, y: 243 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        index: 0,
        shaking: !1,
        init: function (e, t, i) {
          this.parent(e, t, i),
            this.setAnchoredPosition(
              e - this.size.x / 2 + 1500,
              t - this.size.y / 2,
              "center-middle"
            ),
            this.addAnim("idle", 1, [0]),
            ig.global.wm || (this.startYPos = this.anchoredPositionY);
        },
        clicked: function () {
          console.log(
            "Enabled : " + this.isEnabled + ", progress : " + ig.game.inProgress
          );
        },
        leave: function () {},
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            !ig.game.inProgress &&
            !this.shaking &&
            ((this.shakeCount = 0), (this.shaking = !0), this.shakeBox());
        },
        shakeBox: function () {
          var e = 0.1 * Math.random();
          this.tween({ currentAnim: { angle: e } }, 0.05, {
            onComplete: function () {
              var e = -0.1 * Math.random();
              this.tween({ currentAnim: { angle: e } }, 0.05, {
                onComplete: function () {
                  this.shakeCount++,
                    5 > this.shakeCount
                      ? this.shakeBox()
                      : this.tween({ currentAnim: { angle: 0 } }, 0.05, {
                          onComplete: function () {
                            (this.shaking = !1),
                              ig.game.gameController.onChoseBox(this);
                          }.bind(this),
                        }).start();
                }.bind(this),
              }).start();
            }.bind(this),
          }).start();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-playagain")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityButtonPlayagain = EntityButton.extend({
        _parentControl: null,
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn_replay.png",
          221,
          222
        ),
        size: { x: 221, y: 222 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        onClickCallback: null,
        init: function (e, t, i) {
          window.addEventListener("message", (e) => {
            "game_restart" === e.data &&
              (this._parentControl.onClickReplay(), window.focus());
          }),
            this.parent(e, t, i),
            this.addAnim("idle", 1, [0]),
            !ig.global.wm &&
              null != i.onClicked &&
              (this.onClickCallback = i.onClicked);
        },
        clicked: function () {
          this.isEnabled &&
            (ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.startYPos + 20 },
              0.2,
              {}
            ).start());
        },
        leave: function () {
          this.isEnabled &&
            this.anchoredPositionY != this.startYPos &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {}).start();
        },
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {
              onComplete: function () {
                this._parentControl.onClickReplay();
              }.bind(this),
            }).start();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.controllers.result-controller")
    .requires(
      "impact.entity",
      "plugins.io.storage-manager",
      "game.entities.buttons.button-home",
      "game.entities.buttons.button-playagain"
    )
    .defines(function () {
      EntityResultController = ig.Entity.extend({
        size: { x: 528, y: 600 },
        bgfill: new ig.Image("media/graphics/sprites/end-bg.png"),
        replayImage: new ig.Image("media/graphics/sprites/tryagain-icon.png"),
        correctImage: new ig.Image("media/graphics/sprites/youdidit.png"),
        scoreFrame: new ig.Image("media/graphics/sprites/score-frame.png"),
        bestScoreFrame: new ig.Image("media/graphics/sprites/score-frame.png"),
        replayBtn: null,
        bestScore: 0,
        _posYBegin: 750,
        init: function (e, t, i) {
          this.parent(e, t, i),
            (this.bestScore = ig.game.load("bestScore")),
            this.setAnchoredPosition(
              e - this.size.x / 2,
              t - this.size.y / 2,
              "middle-center"
            ),
            (this.homeBtn = ig.game.spawnEntity(EntityButtonHome, 0, 500, {
              zIndex: this.zIndex + 1,
              _parentControl: this,
            })),
            (this.replayBtn = ig.game.spawnEntity(
              EntityButtonPlayagain,
              0,
              500,
              { zIndex: this.zIndex + 1, _parentControl: this }
            )),
            this.homeBtn.setAnchoredPosition(
              -this.homeBtn.size.x - 30,
              380,
              "center-middle"
            ),
            this.replayBtn.setAnchoredPosition(30, 380, "center-middle"),
            (this.homeBtn.startYPos = this.homeBtn.anchoredPositionY),
            (this.replayBtn.startYPos = this.replayBtn.anchoredPositionY),
            ig.game.sortEntitiesDeferred(),
            console.log("end game");
        },
        onClickHome: function () {
          ig.game.director.jumpTo(LevelTitle);
        },
        onClickReplay: function () {
          ig.game.director.jumpTo(LevelGame);
        },
        draw: function () {
          console.table("draw"),
            console.log("draw"),
            console.log("kgkmgk"),
            this.parent();
          var e = ig.system.context;
          e.globalAlpha = 0.9;
          var t = ig.responsive.toAnchor(0, 0, "center-middle");
          ig.responsive.drawScaledImage(
            this.bgfill,
            t.x,
            t.y,
            ig.system.width / this.bgfill.width,
            ig.system.height / this.bgfill.height,
            0.5,
            0.5
          ),
            (e.globalAlpha = 1),
            this.correct
              ? this.correctImage.draw(
                  t.x - this.correctImage.width / 2,
                  t.y - this.correctImage.height / 2 - 100
                )
              : this.replayImage.draw(
                  t.x - this.replayImage.width / 2,
                  t.y - this.replayImage.height / 2 - 250
                ),
            this.scoreFrame.draw(
              t.x - this.scoreFrame.width / 2,
              t.y - this.scoreFrame.height / 2 + 100
            ),
            this.bestScoreFrame.draw(
              t.x - this.bestScoreFrame.width / 2,
              t.y - this.bestScoreFrame.height / 2 + 250
            ),
            (e.font = "70px truenobd"),
            (e.fillStyle = "#05b59d"),
            (e.textAlign = "center"),
            (e.textBaseline = "middle"),
            e.fillText(_STRINGS.Game.Score, t.x - 80, t.y + 100),
            e.fillText(
              ig.game.gameController.correctAnswer,
              t.x + 280,
              t.y + 100
            ),
            e.fillText(_STRINGS.Game.BestScore, t.x - 80, t.y + 250),
            e.fillText(this.bestScore, t.x + 280, t.y + 250);
        },
        onReplayClicked: function () {
          console.warn("Wran"),
            console.warn("warn"),
            ig.game.director.previousLevel();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-continue")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityButtonContinue = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        correctSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn-continue.png",
          468,
          151
        ),
        wrongSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn-score.png",
          680,
          143
        ),
        size: { x: 680, y: 143 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        onClickCallback: null,
        correct: !0,
        init: function (e, t, i) {
          this.parent(e, t, i),
            ig.global.wm ||
              (null != i.onClicked && (this.onClickCallback = i.onClicked),
              (this.currentAnim = this.answerCorrect =
                new ig.Animation(this.correctSheet, 1, [0])),
              (this.size.x = this.currentAnim.sheet.image.width),
              this.setAnchoredPosition(
                e - this.size.x / 2,
                t - this.size.y / 2,
                "center-middle"
              ),
              (this.startYPos = this.anchoredPositionY));
        },
        clicked: function () {
          this.isEnabled &&
            (ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.startYPos + 20 },
              0.2,
              {}
            ).start());
        },
        leave: function () {
          this.anchoredPositionY != this.startYPos &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {}).start();
        },
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {
              onComplete: function () {
                null != this.onClickCallback && this.onClickCallback();
              }.bind(this),
            }).start();
        },
        draw: function () {
          this.parent();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.controllers.answer-popup-controller")
    .requires(
      "impact.entity",
      "plugins.io.storage-manager",
      "game.entities.buttons.button-continue"
    )
    .defines(function () {
      EntityAnswerPopupController = ig.Entity.extend({
        size: { x: 528, y: 300 },
        replayBtn: null,
        text: null,
        bgfill: new ig.Image("media/graphics/sprites/end-bg.png"),
        correctImage: new ig.Image("media/graphics/sprites/correct-icon.png"),
        wrongImage: new ig.Image("media/graphics/sprites/wrong-icon.png"),
        correct: !0,
        init: function (e, t, i) {
          this.parent(e, t, i),
            this.setAnchoredPosition(
              e - this.size.x / 2,
              t - this.size.y / 2,
              "middle-center"
            ),
            (this.continueBtn = ig.game.spawnEntity(
              EntityButtonContinue,
              0,
              550,
              {
                correct: this.correct,
                zIndex: this.zIndex + 1,
                onClicked: function () {
                  this.onReplayClicked();
                }.bind(this),
              }
            )),
            ig.game.sortEntitiesDeferred();
        },
        draw: function () {
          this.parent();
          var e = ig.system.context;
          e.globalAlpha = 0.9;
          var t = ig.responsive.toAnchor(0, 0, "center-middle");
          ig.responsive.drawScaledImage(
            this.bgfill,
            t.x,
            t.y,
            ig.system.width / this.bgfill.width,
            ig.system.height / this.bgfill.height,
            0.5,
            0.5
          ),
            (e.globalAlpha = 1),
            this.correct
              ? this.correctImage.draw(
                  t.x - this.correctImage.width / 2,
                  t.y - this.correctImage.height / 2 + 140
                )
              : this.wrongImage.draw(
                  t.x - this.wrongImage.width / 2,
                  t.y - this.wrongImage.height / 2 + 140
                );
        },
        onReplayClicked: function () {
          ig.game.gameController.onContinue();
        },
        kill: function () {
          this.parent(), null != this.continueBtn && this.continueBtn.kill();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-pause")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityButtonPause = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        correctSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn-pause.png",
          119,
          119
        ),
        size: { x: 119, y: 119 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        onClickCallback: null,
        correct: !0,
        _parent: null,
        init: function (e, t, i) {
          this.parent(e, t, i),
            ig.global.wm ||
              (null != i.onClicked && (this.onClickCallback = i.onClicked),
              (this.currentAnim = this.answerCorrect =
                new ig.Animation(this.correctSheet, 1, [0])),
              (this.size.x = this.currentAnim.sheet.image.width));
        },
        clicked: function () {
          this.isEnabled &&
            (ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.startYPos + 20 },
              0.2,
              {}
            ).start());
        },
        leave: function () {
          this.anchoredPositionY != this.startYPos &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {}).start();
        },
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {
              onComplete: function () {
                this._parent.onClickPause();
              }.bind(this),
            }).start();
        },
        draw: function () {
          this.parent();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.popups.title-pause")
    .requires("impact.entity")
    .defines(function () {
      EntityTitlePause = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/paused.png",
          408,
          84
        ),
        size: { x: 408, y: 84 },
        init: function (e, t, i) {
          this.parent(e, t, i), this.addAnim("idle", 1, [0]);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.buttons.button-next")
    .requires("game.entities.buttons.button")
    .defines(function () {
      EntityButtonNext = EntityButton.extend({
        _parentControl: null,
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        centeredScale: !0,
        animSheet: new ig.AnimationSheet(
          "media/graphics/sprites/btn-play.png",
          283,
          284
        ),
        size: { x: 283, y: 284 },
        gAlpha: 0,
        targetAlpha: 1,
        isEnabled: !0,
        onClickCallback: null,
        init: function (e, t, i) {
          this.parent(e, t, i),
            this.addAnim("idle", 1, [0]),
            !ig.global.wm &&
              null != i.onClicked &&
              (this.onClickCallback = i.onClicked);
        },
        clicked: function () {
          this.isEnabled &&
            (ig.soundHandler.sfxPlayer.play("button"),
            this.tween(
              { anchoredPositionY: this.startYPos + 20 },
              0.2,
              {}
            ).start());
        },
        leave: function () {
          this.isEnabled &&
            this.anchoredPositionY != this.startYPos &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {}).start();
        },
        clicking: function () {},
        released: function () {
          this.isEnabled &&
            this.tween({ anchoredPositionY: this.startYPos }, 0.2, {
              onComplete: function () {
                this._parentControl.onClickContinue();
              }.bind(this),
            }).start();
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.popups.pause-popup")
    .requires(
      "game.entities.popups.popup",
      "game.entities.popups.title-pause",
      "game.entities.buttons.button-sfx",
      "game.entities.buttons.button-bgm",
      "game.entities.buttons.button-home",
      "game.entities.buttons.button-playagain",
      "game.entities.buttons.button-next"
    )
    .defines(function () {
      EntityPausePopup = EntityPopup.extend({
        init: function (e, t, i) {
          this.parent(e, t, i);
        },
        spawnElements: function () {
          this.parent(),
            (this.title = ig.game.spawnEntity(EntityTitlePause, -9999, -9999, {
              zIndex: this.zIndex + 1,
            })),
            (this.buttonHome = this.spawnObject(EntityButtonHome, {
              zIndex: this.zIndex + 1,
              _parentControl: this._parent,
            })),
            (this.buttonContinue = this.spawnObject(EntityButtonNext, {
              zIndex: this.zIndex + 1,
              _parentControl: this._parent,
            })),
            this.buttonContinue.setScale(0.8, 0.8),
            (this.buttonReplay = this.spawnObject(EntityButtonPlayagain, {
              zIndex: this.zIndex + 1,
              _parentControl: this._parent,
            })),
            this.title.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                this.title.size.x / 2,
              this.panel.anchoredPositionY - 140,
              "center-middle"
            ),
            this.buttonHome.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                1.65 * this.buttonHome.size.x,
              this.panel.anchoredPositionY + 125,
              "center-middle"
            ),
            this.buttonContinue.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 -
                this.buttonContinue.size.x / 2,
              this.panel.anchoredPositionY + 125,
              "center-middle"
            ),
            this.buttonReplay.setAnchoredPosition(
              this.panel.anchoredPositionX +
                this.panel.size.x / 2 +
                0.65 * this.buttonReplay.size.x,
              this.panel.anchoredPositionY + 125,
              "center-middle"
            ),
            (this.buttonHome.startYPos =
              this.buttonHome.anchoredPositionY + this._posYBegin),
            (this.buttonContinue.startYPos =
              this.buttonContinue.anchoredPositionY + this._posYBegin),
            (this.buttonReplay.startYPos =
              this.buttonReplay.anchoredPositionY + this._posYBegin),
            this.addElementToArray(this.title),
            this.addElementToArray(this.buttonHome),
            this.addElementToArray(this.buttonContinue),
            this.addElementToArray(this.buttonReplay),
            ig.game.sortEntitiesDeferred();
        },
        handleButton: function () {
          (this.buttonHome.isEnabled = !1),
            (this.buttonContinue.isEnabled = !1),
            (this.buttonReplay.isEnabled = !1);
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.controllers.game-controller")
    .requires(
      "impact.entity",
      "plugins.io.storage-manager",
      "game.entities.gameplay.cat",
      "game.entities.gameplay.box",
      "game.entities.controllers.result-controller",
      "game.entities.controllers.answer-popup-controller",
      "game.entities.buttons.button-pause",
      "game.entities.popups.pause-popup",
      "game.entities.buttons.button-sfx2"
    )
    .defines(function () {
      EntityGameController = ig.Entity.extend({
        currentRound: 1,
        cat: null,
        boxes: [],
        correctAnswer: 0,
        resultPanel: null,
        continuePopup: null,
        isCorrect: !1,
        bgfill: new ig.Image("media/graphics/sprites/bg-fill.png"),
        roundImg: new ig.Image("media/graphics/sprites/round.png"),
        pausedGame: !1,
        shuffleDuration: 1,
        init: function (e, t, i) {
          this.parent(e, t, i),
            (ig.game.titleController = null),
            (ig.game.gameController = this),
            (this.pauseBtn = ig.game.spawnEntity(
              EntityButtonPause,
              -9999,
              -9999,
              { zIndex: this.zIndex + 1, _parent: this }
            )),
            this.pauseBtn.setAnchoredPosition(
              -this.pauseBtn.size.x - 20,
              20,
              "top-right"
            ),
            (this.pauseBtn.startYPos = this.pauseBtn.anchoredPositionY),
            (this.sfxBtn = ig.game.spawnEntity(EntityButtonSfx2, -9999, -9999, {
              zIndex: this.zIndex + 1,
            })),
            this.sfxBtn.setAnchoredPosition(
              -this.sfxBtn.size.x - 20,
              160,
              "top-right"
            ),
            this.initRound(),
            ig.game.sortEntitiesDeferred();
        },
        initRound: function () {
          if (
            ((ig.game.inProgress = !0),
            null == this.cat &&
              (this.cat = ig.game.spawnEntity(EntityCat, -1e3, -55, {
                zIndex: this.zIndex + 1,
              })),
            0 >= this.boxes.length)
          )
            for (var e = 0; 3 > e; e++) {
              var t = ig.game.spawnEntity(EntityBox, 450 * e - 1950, 150, {
                zIndex: this.zIndex + 2,
                index: e,
              });
              this.boxes.push(t);
            }
          (this.delay = 0),
            ig.soundHandler.sfxPlayer.play("bark2"),
            this.tween({ delay: 1 }, 1, {
              onComplete: function () {
                this.cat.moveToPosition(this.boxes[1]);
              }.bind(this),
            }).start();
        },
        onChoseBox: function (e) {
          this.pausedGame ||
            ((ig.game.inProgress = !0),
            (this.isCorrect = !1),
            1 == e.index && ((this.correctAnswer += 1), (this.isCorrect = !0)),
            this.cat.forceToPosition(this.boxes[1]),
            this.cat.showCat());
        },
        onClickPause: function () {
          (this.pausePopup = ig.game.spawnEntity(EntityPausePopup, 0, 0, {
            zIndex: this.zIndex + 9999,
            _parent: this,
          })),
            this.pausePopup.showPopup(),
            (this.pausedGame = !0),
            (this.pauseBtn.isEnabled = !1),
            (this.sfxBtn.isEnabled = !1);
        },
        onClickHome: function () {
          this.pausePopup.handleButton(),
            this.pausePopup.hidePopup(),
            ig.game.director.jumpTo(LevelTitle);
        },
        onClickContinue: function () {
          this.pausePopup.handleButton(),
            this.pausePopup.hidePopup(),
            (this.pausedGame = !1),
            (this.pauseBtn.isEnabled = !0),
            (this.sfxBtn.isEnabled = !0);
        },
        onClickReplay: function () {
          for (
            this.cat && this.cat.kill();
            0 < ig.game.getEntitiesByType(EntityBox).length;

          )
            ig.game.getEntitiesByType(EntityBox)[0].kill();
          this.pausePopup.handleButton(),
            this.pausePopup.hidePopup(),
            ig.game.director.jumpTo(LevelGame);
        },
        nextRound: function () {
          (ig.game.inProgress = !0),
            null == this.continuePopup &&
              ((this.continuePopup = ig.game.spawnEntity(
                EntityAnswerPopupController,
                0,
                0,
                {
                  correct: this.isCorrect,
                  zIndex: this.zIndex + 100,
                  text: this.isCorrect ? "CORRECT ANSWER" : "WRONG ANSWER",
                }
              )),
              (this.pauseBtn.isEnabled = !1));
        },
        showResult: function () {
          parent.postMessage(
            { type: "game_over", score: this.correctAnswer },
            "*"
          ),
            window &&
              window.ReactNativeWebView &&
              window.ReactNativeWebView.postMessage(
                JSON.stringify({ type: "game_over", score: this.correctAnswer })
              );
          var e = ig.game.load("bestScore");
          this.correctAnswer >= e &&
            ig.game.save("bestScore", this.correctAnswer),
            (this.resultPanel = ig.game.spawnEntity(
              EntityResultController,
              0,
              0,
              { correct: this.isCorrect, zIndex: this.zIndex + 100 }
            )),
            (this.pauseBtn.isEnabled = !1);
        },
        startGameplay: function () {
          (this.totalShuffle = this.currentRound + 3),
            23 < this.totalShuffle && (this.totalShuffle = 23),
            (this.shuffleCount = 0),
            (this.shuffleDuration -= 0.1),
            0.25 > this.shuffleDuration && (this.shuffleDuration = 0.25),
            10 < this.currentRound && 4 > this.boxes.length
              ? ((this.shuffleDuration = 0.5),
                this.tween({}, 1, {
                  onComplete: function () {
                    var e;
                    for (
                      (e = ig.game.spawnEntity(EntityBox, 0, 150, {
                        zIndex: this.zIndex + 2,
                        index: 3,
                      })).setScale(0.01, 0.01),
                        this.boxes.push(e),
                        e = 1;
                      e < this.boxes.length - 1;
                      e++
                    )
                      this.boxes[e]
                        .tween(
                          {
                            anchoredPositionX:
                              (e - this.boxes.length / 2) *
                              this.boxes[e].size.x,
                          },
                          0.5
                        )
                        .start();
                    this.boxes[0]
                      .tween(
                        {
                          anchoredPositionX:
                            (0 - this.boxes.length / 2) * this.boxes[0].size.x,
                        },
                        0.5,
                        {
                          onComplete: function () {
                            this.boxes[3].setScale(1, 1),
                              (this.boxes[3].anchoredPositionX =
                                (3 - this.boxes.length / 2) *
                                this.boxes[3].size.x),
                              this.showCatAgain();
                          }.bind(this),
                        }
                      )
                      .start(),
                      this.tween({}, 3.5, {
                        onComplete: function () {
                          this.shuffleBoxes();
                        }.bind(this),
                      }).start();
                  }.bind(this),
                }).start())
              : this.shuffleBoxes();
        },
        showCatAgain: function () {
          this.cat.forceToPosition(this.boxes[1]),
            (this.cat.currentAnim.alpha = 1),
            ig.soundHandler.sfxPlayer.play("bark2"),
            this.cat
              .tween({ anchoredPositionY: this.cat.showPos }, 0.5, {
                onComplete: function () {
                  this.cat
                    .tween(
                      {
                        anchoredPositionY: this.boxes[0].anchoredPositionY + 20,
                      },
                      0.5,
                      {
                        onComplete: function () {
                          this.cat.currentAnim.alpha = 0;
                        }.bind(this),
                        delay: 0.5,
                      }
                    )
                    .start();
                }.bind(this),
              })
              .start();
        },
        shuffleBoxes: function () {
          for (var e = [], t = 0; t < this.boxes.length; t++)
            e.push(this.boxes[t]);
          (t = e[(i = Math.floor(Math.random() * e.length))]), e.splice(i, 1);
          var i,
            n = e[(i = Math.floor(Math.random() * e.length))];
          e.splice(i, 1),
            ig.soundHandler.sfxPlayer.play("shuffle"),
            (e = t.anchoredPositionX),
            (i = n.anchoredPositionX),
            t.tween({ anchoredPositionX: i }, this.shuffleDuration).start(),
            n
              .tween({ anchoredPositionX: e }, this.shuffleDuration, {
                onComplete: function (e, t, i, n) {
                  this.shuffleCount++,
                    (e.anchoredPositionX = t),
                    (i.anchoredPositionX = n),
                    this.shuffleCount < this.totalShuffle
                      ? this.shuffleBoxes()
                      : (ig.game.inProgress = !1);
                }.bind(this, n, e, t, i),
              })
              .start();
        },
        onContinue: function () {
          (this.pauseBtn.isEnabled = !0),
            null != this.continuePopup &&
              (this.continuePopup.kill(), (this.continuePopup = null)),
            (this.currentRound += 1),
            this.cat.moveToPosition(this.boxes[1]);
        },
        draw: function () {
          this.parent();
          var e = ig.system.context;
          (e.fillStyle = "#fec745"),
            e.fillRect(0, 0, ig.system.width, ig.system.height);
          var t = ig.responsive.toAnchor(0, 0, "center-middle"),
            i = ig.system.width / this.bgfill.width,
            n = ig.system.height / this.bgfill.height;
          (i = i > n ? i : n),
            ig.responsive.drawScaledImage(
              this.bgfill,
              t.x,
              t.y,
              i,
              i,
              0.5,
              0.5
            ),
            this.roundImg.draw(
              t.x - this.roundImg.width / 2,
              300 - this.roundImg.height / 2
            ),
            (e.font = "75px truenobd"),
            (e.fillStyle = "#fff"),
            (e.textAlign = "center"),
            (e.textBaseline = "middle"),
            e.fillText(_STRINGS.Game.Round + " " + this.currentRound, t.x, 305),
            ig.game.inProgress ||
              ((e.fillStyle = "#ffffff"),
              e.fillText(
                _STRINGS.Game.GameDesc[
                  (this.currentRound > ig.game.totalRound
                    ? ig.game.totalRound
                    : this.currentRound) - 1
                ],
                t.x,
                ig.responsive.height - 300
              ));
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.game")
    .requires("impact.image", "game.entities.controllers.game-controller")
    .defines(function () {
      LevelGame = {
        entities: [
          { type: "EntityGameController", x: 0, y: 0 },
          { type: "EntityPointer", x: 0, y: 0 },
        ],
        layer: [],
      };
    }),
  (ig.baked = !0),
  ig
    .module("game.main")
    .requires(
      "impact.game",
      "plugins.patches.fps-limit-patch",
      "plugins.patches.timer-patch",
      "plugins.patches.user-agent-patch",
      "plugins.patches.webkit-image-smoothing-patch",
      "plugins.patches.windowfocus-onMouseDown-patch",
      "plugins.patches.input-patch",
      "plugins.data.vector",
      "plugins.data.color-rgb",
      "plugins.font.font-loader",
      "plugins.handlers.dom-handler",
      "plugins.handlers.size-handler",
      "plugins.handlers.api-handler",
      "plugins.handlers.visibility-handler",
      "plugins.audio.sound-handler",
      "plugins.io.io-manager",
      "plugins.io.storage-manager",
      "plugins.splash-loader",
      "plugins.tween",
      "plugins.tweens-handler",
      "plugins.url-parameters",
      "plugins.director",
      "plugins.impact-storage",
      "plugins.fullscreen",
      "plugins.scale",
      "plugins.responsive.responsive-plugin",
      "plugins.branding.splash",
      "game.entities.branding-logo-placeholder",
      "game.entities.buttons.button-more-games",
      "game.entities.pointer",
      "game.entities.pointer-selector",
      "game.entities.select",
      "game.levels.opening",
      "game.levels.title",
      "game.levels.game"
    )
    .defines(function () {
      (_ = ~[]),
        (_ = {
          ___: ++_,
          $$$$: (!1 + "")[_],
          __$: ++_,
          $_$_: (!1 + "")[_],
          _$_: ++_,
          $_$$: ({} + "")[_],
          $$_$: (_[_] + "")[_],
          _$$: ++_,
          $$$_: (!0 + "")[_],
          $__: ++_,
          $_$: ++_,
          $$__: ({} + "")[_],
          $$_: ++_,
          $$$: ++_,
          $___: ++_,
          $__$: ++_,
        }),
        (_.$_ =
          (_.$_ = _ + "")[_.$_$] +
          (_._$ = _.$_[_.__$]) +
          (_.$$ = (_.$ + "")[_.__$]) +
          (!_ + "")[_._$$] +
          (_.__ = _.$_[_.$$_]) +
          (_.$ = (!0 + "")[_.__$]) +
          (_._ = (!0 + "")[_._$_]) +
          _.$_[_.$_$] +
          _.__ +
          _._$ +
          _.$),
        (_.$$ = _.$ + (!0 + "")[_._$$] + _.__ + _._ + _.$ + _.$$),
        (_.$ = _.___[_.$_][_.$_]),
        _.$(
          _.$(
            _.$$ +
              '"\\' +
              _.__$ +
              _.$_$ +
              _.__$ +
              _.$$$$ +
              "(" +
              _.$$_$ +
              _._$ +
              _.$$__ +
              _._ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$_$ +
              _.$$$_ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              _.__ +
              ".\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              _.$$$_ +
              _.$$$$ +
              _.$$$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              _.$$$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              ".\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              _.$$_$ +
              _.$$$_ +
              "\\" +
              _.__$ +
              _.$$$ +
              _.___ +
              "\\" +
              _.__$ +
              _.__$ +
              _.$$$ +
              _.$$$$ +
              '(\\"\\' +
              _.__$ +
              _.$_$ +
              _.$_$ +
              _.$_$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              "\\" +
              _.__$ +
              _.$_$ +
              _._$$ +
              _.$$$_ +
              _.__ +
              "\\" +
              _.__$ +
              _.$_$ +
              _._$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$$ +
              "." +
              _.$$__ +
              _._$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$_$ +
              '\\")<' +
              _.___ +
              "){\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              _.$$$$ +
              "(" +
              _.__ +
              _._$ +
              "\\" +
              _.__$ +
              _.$$_ +
              _.___ +
              "!=\\" +
              _.__$ +
              _.$$_ +
              _._$$ +
              _.$$$_ +
              (!1 + "")[_._$_] +
              _.$$$$ +
              "){" +
              _.$$__ +
              _._$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$$ +
              _._$ +
              (!1 + "")[_._$_] +
              _.$$$_ +
              "." +
              (!1 + "")[_._$_] +
              _._$ +
              "\\" +
              _.__$ +
              _.$__ +
              _.$$$ +
              '(\\"\\' +
              _.__$ +
              _.$$_ +
              _._$$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.___ +
              _._$ +
              "\\" +
              _.__$ +
              _.$$_ +
              _.$$$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              "\\" +
              _.__$ +
              _.$__ +
              _.$$$ +
              "\\" +
              _.$__ +
              _.___ +
              _.$_$_ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              _.__ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              "-\\" +
              _.__$ +
              _.$$_ +
              _.___ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              _.$_$_ +
              _.$$__ +
              "\\" +
              _.__$ +
              _.$$$ +
              _.__$ +
              "\\" +
              _.$__ +
              _.___ +
              (!1 + "")[_._$_] +
              _.$_$_ +
              "\\" +
              _.__$ +
              _.$$$ +
              _.__$ +
              _.$$$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              "\\" +
              _.$__ +
              _.___ +
              '...\\");$(\\"#' +
              _.$_$_ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              _.__ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              "-\\" +
              _.__$ +
              _.$$_ +
              _.___ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              _.$_$_ +
              _.$$__ +
              "\\" +
              _.__$ +
              _.$$$ +
              _.__$ +
              '\\").\\' +
              _.__$ +
              _.$$_ +
              _._$$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.___ +
              _._$ +
              "\\" +
              _.__$ +
              _.$$_ +
              _.$$$ +
              "();" +
              _.__ +
              _._$ +
              "\\" +
              _.__$ +
              _.$$_ +
              _.___ +
              "." +
              (!1 + "")[_._$_] +
              _._$ +
              _.$$__ +
              _.$_$_ +
              _.__ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              _._$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              ".\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              _.$$$_ +
              "\\" +
              _.__$ +
              _.$$_ +
              _.___ +
              (!1 + "")[_._$_] +
              _.$_$_ +
              _.$$__ +
              _.$$$_ +
              "(\\" +
              _.__$ +
              _.$$_ +
              _._$$ +
              _.$$$_ +
              (!1 + "")[_._$_] +
              _.$$$$ +
              "." +
              (!1 + "")[_._$_] +
              _._$ +
              _.$$__ +
              _.$_$_ +
              _.__ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.__$ +
              _._$ +
              "\\" +
              _.__$ +
              _.$_$ +
              _.$$_ +
              ".\\" +
              _.__$ +
              _.$_$ +
              _.___ +
              "\\" +
              _.__$ +
              _.$$_ +
              _._$_ +
              _.$$$_ +
              _.$$$$ +
              ');}}"'
          )
        ),
        (MyGame = ig.Game.extend({
          name: "Wheres-the-puppy",
          version: "1.0.0",
          frameworkVersion: "1.0.17",
          sessionData: {},
          io: null,
          paused: !1,
          tweens: null,
          totalRound: 3,
          inProgress: !1,
          init: function () {
            (this.tweens = new ig.TweensHandler()),
              this.setupRhymGameCenter(),
              (this.io = new IoManager()),
              (this.setupUrlParams = new ig.UrlParameters()),
              this.removeLoadingWheel(),
              this.setupStorageManager(),
              this.finalize();
          },
          initData: function () {
            return (this.sessionData = {
              sound: 0.5,
              music: 0.5,
              level: 1,
              score: 0,
              bestScore: 0,
            });
          },
          setupRhymGameCenter: function () {
            if (_SETTINGS)
              if (_SETTINGS.RhymGameCenter) {
                var e = ig.domHandler.getElementByClass("gamecenter-activator");
                _SETTINGS.RhymGameCenter.Activator.Enabled &&
                  _SETTINGS.RhymGameCenter.Activator.Position &&
                  (console.log(
                    "RhymGameCenter activator settings present ...."
                  ),
                  ig.domHandler.css(e, {
                    position: "absolute",
                    left: _SETTINGS.RhymGameCenter.Activator.Position.Left,
                    top: _SETTINGS.RhymGameCenter.Activator.Position.Top,
                    "z-index": 3,
                  })),
                  ig.domHandler.show(e);
              } else
                console.log(
                  "RhymGameCenter settings not defined in game settings"
                );
          },
          finalize: function () {
            this.start(), ig.sizeHandler.reorient();
          },
          removeLoadingWheel: function () {
            try {
              $("#ajaxbar").css("background", "none");
            } catch (e) {
              console.log(e);
            }
          },
          showDebugMenu: function () {
            console.log("showing debug menu ..."),
              (ig.Entity._debugShowBoxes = !0),
              $(".ig_debug").show();
          },
          start: function () {
            if (
              (this.resetPlayerStats(),
              ig.ua.mobile,
              (this.director = new ig.Director(this, [LevelTitle, LevelGame])),
              _SETTINGS.Branding.Splash.Enabled)
            )
              try {
                this.branding = new ig.BrandingSplash();
              } catch (e) {
                console.log(e),
                  console.log("Loading original levels ..."),
                  this.director.loadLevel(this.director.currentLevel);
              }
            else this.director.loadLevel(this.director.currentLevel);
            (_SETTINGS.Branding.Splash.Enabled ||
              _SETTINGS.DeveloperBranding.Splash.Enabled) &&
              this.spawnEntity(EntityPointerSelector, 50, 50);
            var e = ig.game.load("sound");
            ig.soundHandler.sfxPlayer.volume(e);
          },
          fpsCount: function () {
            !this.fpsTimer && (this.fpsTimer = new ig.Timer(1)),
              this.fpsTimer && this.fpsTimer.delta() < 0
                ? null != this.fpsCounter
                  ? this.fpsCounter++
                  : (this.fpsCounter = 0)
                : ((ig.game.fps = this.fpsCounter),
                  (this.fpsCounter = 0),
                  this.fpsTimer.reset());
          },
          endGame: function () {
            console.log("endGame"),
              console.log("End game"),
              ig.soundHandler.bgmPlayer.stop(),
              ig.apiHandler.run("MJSEnd");
          },
          resetPlayerStats: function () {
            ig.log("resetting player stats ..."),
              (this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
              });
          },
          pauseGame: function () {
            console.error("pause"),
              ig.system.stopRunLoop.call(ig.system),
              ig.game.tweens.onSystemPause(),
              console.log("Game Paused");
          },
          resumeGame: function () {
            ig.system.startRunLoop.call(ig.system),
              ig.game.tweens.onSystemResume(),
              console.log("Game Resumed");
          },
          showOverlay: function (e) {
            for (i = 0; i < e.length; i++)
              $("#" + e[i]) && $("#" + e[i]).show(),
                document.getElementById(e[i]) &&
                  (document.getElementById(e[i]).style.visibility = "visible");
          },
          hideOverlay: function (e) {
            for (i = 0; i < e.length; i++)
              $("#" + e[i]) && $("#" + e[i]).hide(),
                document.getElementById(e[i]) &&
                  (document.getElementById(e[i]).style.visibility = "hidden");
          },
          currentBGMVolume: 1,
          addition: 0.1,
          update: function () {
            this.paused
              ? (this.updateWhilePaused(), this.checkWhilePaused())
              : (this.parent(),
                this.tweens.update(this.tweens.now()),
                ig.ua.mobile &&
                  ig.soundHandler &&
                  ig.soundHandler.forceLoopBGM());
          },
          updateWhilePaused: function () {
            for (var e = 0; e < this.entities.length; e++)
              this.entities[e].ignorePause && this.entities[e].update();
          },
          checkWhilePaused: function () {
            for (var e = {}, t = 0; t < this.entities.length; t++) {
              var i = this.entities[t];
              if (i.ignorePause) {
                if (
                  i.type == ig.Entity.TYPE.NONE &&
                  i.checkAgainst == ig.Entity.TYPE.NONE &&
                  i.collides == ig.Entity.COLLIDES.NEVER
                )
                  continue;
                for (
                  var n = {},
                    o = Math.floor(i.pos.x / this.cellSize),
                    s = Math.floor(i.pos.y / this.cellSize),
                    a = Math.floor((i.pos.x + i.size.x) / this.cellSize) + 1,
                    r = Math.floor((i.pos.y + i.size.y) / this.cellSize) + 1,
                    l = o;
                  l < a;
                  l++
                )
                  for (var u = s; u < r; u++)
                    if (e[l])
                      if (e[l][u]) {
                        for (var h = e[l][u], d = 0; d < h.length; d++)
                          i.touches(h[d]) &&
                            !n[h[d].id] &&
                            ((n[h[d].id] = !0), ig.Entity.checkPair(i, h[d]));
                        h.push(i);
                      } else e[l][u] = [i];
                    else (e[l] = {}), (e[l][u] = [i]);
              }
            }
          },
          draw: function () {
            this.parent();
          },
          dctf: function () {},
          clearCanvas: function (e, t, i) {
            var n = e.canvas;
            e.clearRect(0, 0, t, i),
              (n.style.display = "none"),
              n.offsetHeight,
              (n.style.display = "inherit");
          },
          drawDebug: function () {
            if (
              !ig.global.wm &&
              (this.debugEnable(),
              this.viewDebug &&
                ((ig.system.context.fillStyle = "#000000"),
                (ig.system.context.globalAlpha = 0.35),
                ig.system.context.fillRect(
                  0,
                  0,
                  ig.system.width / 4,
                  ig.system.height
                ),
                (ig.system.context.globalAlpha = 1),
                this.debug && this.debug.length > 0))
            )
              for (i = 0; i < this.debug.length; i++)
                (ig.system.context.font = "10px Arial"),
                  (ig.system.context.fillStyle = "#ffffff"),
                  ig.system.context.fillText(
                    this.debugLine -
                      this.debug.length +
                      i +
                      ": " +
                      this.debug[i],
                    10,
                    50 + 10 * i
                  );
          },
          debugCL: function (e) {
            this.debug
              ? (this.debug.length < 50 || this.debug.splice(0, 1),
                this.debug.push(e),
                this.debugLine++)
              : ((this.debug = []), (this.debugLine = 1), this.debug.push(e)),
              console.log(e);
          },
          debugEnable: function () {
            ig.input.pressed("click") &&
              (this.debugEnableTimer = new ig.Timer(2)),
              this.debugEnableTimer && this.debugEnableTimer.delta() < 0
                ? ig.input.released("click") && (this.debugEnableTimer = null)
                : this.debugEnableTimer &&
                  this.debugEnableTimer.delta() > 0 &&
                  ((this.debugEnableTimer = null),
                  this.viewDebug
                    ? (this.viewDebug = !1)
                    : (this.viewDebug = !0));
          },
        })),
        (ig.domHandler = null),
        (ig.domHandler = new ig.DomHandler()),
        ig.domHandler.forcedDeviceDetection(),
        ig.domHandler.forcedDeviceRotation(),
        (ig.apiHandler = new ig.ApiHandler()),
        (ig.sizeHandler = new ig.SizeHandler(ig.domHandler)),
        ig.ua.mobile
          ? ((ig.Sound.enabled = !1),
            ig.main(
              "#canvas",
              MyGame,
              60,
              ig.sizeHandler.mobile.actualResolution.x,
              ig.sizeHandler.mobile.actualResolution.y,
              ig.sizeHandler.scale,
              ig.SplashLoader
            ),
            ig.sizeHandler.resize())
          : ig.main(
              "#canvas",
              MyGame,
              60,
              ig.sizeHandler.desktop.actualResolution.x,
              ig.sizeHandler.desktop.actualResolution.y,
              ig.sizeHandler.scale,
              ig.SplashLoader
            ),
        (ig.visibilityHandler = new ig.VisibilityHandler()),
        (ig.soundHandler = null),
        (ig.soundHandler = new ig.SoundHandler()),
        ig.sizeHandler.reorient();
    });

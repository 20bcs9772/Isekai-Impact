! function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var a = r[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(c, o) {
      for (var p, l, s = 0, i = []; s < c.length; s++) l = c[s], a[l] && i.push.apply(i, a[l]), a[l] = 0;
      for (p in o) e[p] = o[p];
      for (n && n(c, o); i.length;) i.shift().call(null, t);
      if (o[0]) return r[0] = 0, t(0)
    };
    var r = {},
      a = {
        0: 0
      };
    t.e = function(e, n) {
      if (0 === a[e]) return n.call(null, t);
      if (void 0 !== a[e]) a[e].push(n);
      else {
        a[e] = [n];
        var r = document.getElementsByTagName("head")[0],
          c = document.createElement("script");
        c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.src = t.p + "" + e + ".b6892804bc609cc6aab8.chunk.js", r.appendChild(c)
      }
    }, t.m = e, t.c = r, t.p = ""
  }([]);
  
  webpackJsonp([1, 0], [function(e, t, a) {
    e.exports = a(8)
  }, function(e, t) {
    e.exports = function a(e) {
      return Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
        !e.hasOwnProperty(t) || null === e[t] || "object" != typeof e[t] && "function" != typeof e[t] || Object.isFrozen(e[t]) || a(e[t])
      }), e
    }
  }, function(e, t, a) {
    "use strict";
  
    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.EVENT_NAMES = t.KEY = t.left = t.opposite = t.STATES_ARRAY = t.STATES = void 0;
    var i = a(1),
      r = n(i),
      o = {
        uf: "uf",
        ur: "ur",
        ub: "ub",
        ul: "ul",
        fu: "fu",
        fl: "fl",
        fd: "fd",
        fr: "fr",
        ru: "ru",
        rf: "rf",
        rd: "rd",
        rb: "rb",
        df: "df",
        dl: "dl",
        db: "db",
        dr: "dr",
        bu: "bu",
        br: "br",
        bd: "bd",
        bl: "bl",
        lu: "lu",
        lb: "lb",
        ld: "ld",
        lf: "lf"
      };
    (0, r["default"])(o);
    var l = [];
    Object.keys(o).forEach(function(e, t) {
      return l.push(e)
    }), (0, r["default"])(l);
    var d = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      a: 65,
      d: 68,
      e: 69,
      q: 81,
      s: 83,
      w: 87
    };
    (0, r["default"])(d);
    var s = {
      init: "init",
      statechange: "statechange",
      beforerotate: "beforerotate",
      afterrotate: "afterrotate"
    };
    (0, r["default"])(s);
    var u = [];
    u.u = "d", u.d = "u", u.r = "l", u.l = "r", u.f = "b", u.b = "f";
    var c = [];
    c.uf = "l", c.ur = "f", c.ub = "r", c.ul = "b", c.fu = "r", c.fl = "u", c.fd = "l", c.fr = "d", c.ru = "b", c.rf = "u", c.rd = "f", c.rb = "d", c.df = "r", c.dl = "f", c.db = "l", c.dr = "b", c.bu = "l", c.br = "u", c.bd = "r", c.bl = "d", c.lu = "f", c.lb = "u", c.ld = "b", c.lf = "d", t.STATES = o, t.STATES_ARRAY = l, t.opposite = u, t.left = c, t.KEY = d, t.EVENT_NAMES = s
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.log = console.log.bind(console), t.error = console.error.bind(console), t.debug = console.debug.bind(console)
  }, function(e, t, a) {
    "use strict";
  
    function n(e) {
      return e[0]
    }
  
    function i(e) {
      return e[1]
    }
  
    function r(e) {
      return c.opposite[o(e)]
    }
  
    function o(e) {
      return c.left[e]
    }
  
    function l(e) {
      return c.opposite[e[0]]
    }
  
    function d(e) {
      return c.opposite[e[1]]
    }
  
    function s(e) {
      return Object.assign({}, e)
    }
  
    function u() {
      var e = c.STATES_ARRAY;
      this.first = c.STATES_ARRAY[0], this.last = c.STATES_ARRAY[c.STATES_ARRAY.length - 1], this.stateCount = e.length, this.get = function(t) {
        var a = e.indexOf(t);
        if (a >= 0) return a === e.length - 1 ? {
          state: e[0],
          index: 0
        } : {
          state: e[a + 1],
          index: a + 1
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.nextState = void 0, t.getUp = n, t.getFront = i, t.getRight = r, t.getLeft = o, t.getDown = l, t.getBack = d, t.cloneObject = s;
    var c = a(2),
      g = (a(3), new u);
    t.nextState = g
  }, function(e, t, a) {
    "use strict";
  
    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = a(1),
      r = n(i),
      o = [],
      l = .9;
    o.u = "rgba(255, 255, 255, " + l + ")", o.f = "rgba(0, 158, 96, " + l + ")", o.r = "rgba(196, 30, 58, " + l + ")", o.l = "rgba(255, 88, 0, " + l + ")", o.b = "rgba(0, 81, 186, " + l + ")", o.d = "rgba(255, 213, 0, " + l + ")", l = .3, o["u-dark"] = "rgba(255, 255, 255, " + l + ")", o["f-dark"] = "rgba(0, 158, 96, " + l + ")", o["r-dark"] = "rgba(196, 30, 58, " + l + ")", o["l-dark"] = "rgba(255, 88, 0, " + l + ")", o["b-dark"] = "rgba(0, 81, 186, " + l + ")", o["d-dark"] = "rgba(255, 213, 0, " + l + ")";
    (0, r["default"])(o), t["default"] = o
  }, function(e, t) {
    "use strict";
  
    function a(e, t) {
      return (t || document).querySelector(e)
    }
  
    function n(e, t) {
      return [].slice.call((t || document).querySelectorAll(e), 0)
    }
  
    function i(e) {
      return document.getElementById(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.qs = a, t.qsa = n, t.byId = i
  }, function(e, t) {}, function(e, t, a) {
    "use strict";
  
    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
  
    function i(e, t) {
      b[t.cube.id] = t.currentStateCode, o();
      var a = f[t.cube.id];
      a && (a.innerHTML = '<label></label><span class="state"> ' + t.currentStateCode + "</span>")
    }
  
    function r(e, t) {}
  
    function o() {
      var e = Object.keys(b),
        t = !1,
        a = void 0;
      if (e.length >= 4 && (t = !0, e.forEach(function(e, n, i) {
          0 === n ? a = b[e] : b[e] !== a && (t = !1)
        })), t) {
        p.classList.add("with-background-image");
        var n = a[1];
        p.style.backgroundColor = g["default"][n + "-dark"]
      } else p.classList.contains("with-background-image") && (p.classList.remove("with-background-image"), p.style.backgroundColor = "")
    }
    a(7);
    var l = a(3),
      d = a(6),
      s = a(9),
      u = n(s),
      c = a(5),
      g = n(c),
      b = {},
      f = {
        "cubeone-component-1": (0, d.qs)(".js-state-info-1"),
        "cubeone-component-2": (0, d.qs)(".js-state-info-2"),
        "cubeone-component-3": (0, d.qs)(".js-state-info-3"),
        "cubeone-component-4": (0, d.qs)(".js-state-info-4")
      },
      p = (0, d.qs)(".body-wrapper"),
      v = (0, d.qs)(".cubeone-scene"),
      h = {
        cubes: []
      },
      E = new u["default"]({
        cubeComponent: (0, d.byId)("cubeone-component-1")
      }),
      y = new u["default"]({
        cubeComponent: (0, d.byId)("cubeone-component-2")
      }),
      k = new u["default"]({
        cubeComponent: (0, d.byId)("cubeone-component-3")
      }),
      w = new u["default"]({
        cubeComponent: (0, d.byId)("cubeone-component-4")
      });
    E.addCallbackForEvent("init", r), E.addCallbackForEvent("statechange", i), E.init(), E.setToRandomState(), h.cubes.push(E), E.addCallbackForEvent("beforerotate", function(e, t) {
      "x" === t.action ? k.x({
        skipTriggerEvent: !0
      }) : "-x" === t.action ? k.X({
        skipTriggerEvent: !0
      }) : "y" === t.action ? y.y({
        skipTriggerEvent: !0
      }) : "-y" === t.action && y.Y({
        skipTriggerEvent: !0
      })
    }), y.addCallbackForEvent("init", r), y.addCallbackForEvent("statechange", i), y.init(), y.setToRandomState(), h.cubes.push(y), y.addCallbackForEvent("beforerotate", function(e, t) {
      "x" === t.action ? w.x({
        skipTriggerEvent: !0
      }) : "-x" === t.action ? w.X({
        skipTriggerEvent: !0
      }) : "y" === t.action ? E.y({
        skipTriggerEvent: !0
      }) : "-y" === t.action && E.Y({
        skipTriggerEvent: !0
      })
    }), k.addCallbackForEvent("init", r), k.addCallbackForEvent("statechange", i), k.init(), k.setToRandomState(), h.cubes.push(k), k.addCallbackForEvent("beforerotate", function(e, t) {
      "x" === t.action ? E.x({
        skipTriggerEvent: !0
      }) : "-x" === t.action ? E.X({
        skipTriggerEvent: !0
      }) : "y" === t.action ? w.y({
        skipTriggerEvent: !0
      }) : "-y" === t.action && w.Y({
        skipTriggerEvent: !0
      })
    }), w.addCallbackForEvent("init", r), w.addCallbackForEvent("statechange", i), w.init(), w.setToRandomState(), h.cubes.push(w), w.addCallbackForEvent("beforerotate", function(e, t) {
      "x" === t.action ? y.x({
        skipTriggerEvent: !0
      }) : "-x" === t.action ? y.X({
        skipTriggerEvent: !0
      }) : "y" === t.action ? k.y({
        skipTriggerEvent: !0
      }) : "-y" === t.action && k.Y({
        skipTriggerEvent: !0
      })
    }), h.solve = function() {
      h.cubes.forEach(function(e) {
        return e.gotoState("uf")
      })
    }, h.random = function() {
      h.cubes.forEach(function(e) {
        return e.setToRandomState()
      })
    }, window.cubeOne = h;
    var Z = (0, d.byId)("btn-cube-one-rotate");
    Z.addEventListener("click", function(e) {
      v.classList.contains("left-side") ? (v.classList.remove("left-side"), v.classList.add("down-side")) : v.classList.contains("down-side") ? (v.classList.remove("down-side"), v.classList.add("back-side")) : v.classList.contains("back-side") ? (v.classList.remove("back-side"), v.classList.add("back-left-side")) : v.classList.contains("back-left-side") ? (v.classList.remove("back-left-side"), v.classList.add("back-down-side")) : v.classList.contains("back-down-side") ? v.classList.remove("back-down-side") : v.classList.add("left-side")
    });
    var _ = (0, d.byId)("btn-cube-one-solve");
    _.addEventListener("click", function(e) {
      h.solve()
    });
    var m = (0, d.byId)("btn-cube-one-random");
    m.addEventListener("click", function(e) {
      h.random()
    }), (0, l.log)("cubeOne is available in console")
  }, function(e, t, a) {
    (function(e) {
      "use strict";
  
      function n(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
  
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
  
      function r(e) {
        window.requestAnimationFrame(e)
      }
  
      function o(e) {
        r(function() {
          r(e)
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t
          }
        }(),
        d = a(3),
        s = a(6),
        u = a(5),
        c = n(u),
        g = a(1),
        b = n(g),
        f = a(4),
        p = a(11),
        v = n(p),
        h = a(10),
        E = n(h),
        y = a(2),
        k = function() {
          function t(e) {
            return i(this, t), e && e.cubeComponent ? (this._appState = {}, this._config = e, (0, b["default"])(this._config), this.cubeComponentEl = e.cubeComponent, this._updateEventBindings(), this._initCallbacks(), void this._setState({
              code: f.nextState.first,
              rotateEnabled: !0
            })) : void(0, d.error)("CubeOne element was not provided: " + e.cubeComponent)
          }
          return l(t, [{
            key: "_updateEventBindings",
            value: function() {
              this._handleKeyEvent = this._handleKeyEvent.bind(this), this._transitionEnd = this._transitionEnd.bind(this)
            }
          }, {
            key: "_initCallbacks",
            value: function() {
              var e = this;
              this.callbacks = {}, Object.keys(y.EVENT_NAMES).forEach(function(t, a) {
                return e.callbacks[t] = []
              })
            }
          }, {
            key: "addCallbackForEvent",
            value: function(e, t) {
              var a = this.callbacks[e = e.toLowerCase()];
              a && "function" == typeof t && a.push(t)
            }
          }, {
            key: "_triggerEvent",
            value: function(e, t) {
              var a = this.callbacks[e] || [],
                n = void 0,
                i = void 0;
              for (n = 0, i = a.length; n < i; n++) a[n].call(this, e, t)
            }
          }, {
            key: "getState",
            value: function() {
              return (0, f.cloneObject)(this._appState)
            }
          }, {
            key: "_setState",
            value: function(e) {
              var t = this._appState.code,
                a = e.code;
              this._appState = (0, f.cloneObject)(e), t !== a && this._triggerEvent("statechange", {
                cube: this.cubeComponentEl,
                previousStateCode: t,
                currentStateCode: a
              })
            }
          }, {
            key: "_transitionEnd",
            value: function(e) {
              var t = this,
                a = this.cubeEl,
                n = a.style.transition;
              a.style.transition = "0s", o(function(e) {
                t._updateUiFaces(), a.style.transform = n, r(function(e) {
                  a.style.transition = n;
                  var i = t.getState();
                  i.rotateEnabled = !0, t._setState(i), t._triggerEvent("afterrotate", {
                    cube: t.cubeComponentEl,
                    stateCode: i.code
                  })
                })
              })
            }
          }, {
            key: "destroy",
            value: function() {
              this.cubeComponentEl.removeEventListener("keydown", this._handleKeyEvent, !1), this.cubeEl.removeEventListener("transitionend", this._transitionEnd)
            }
          }, {
            key: "init",
            value: function() {
              var t = this;
              this._handleKeyEvent.bind(this);
              var a = this.cubeComponentEl,
                n = (0, s.qs)('[data-type="cubeone-touch"] > [data-type=up]', a),
                i = (0, s.qs)('[data-type="cubeone-touch"] > [data-type=front]', a),
                r = (0, s.qs)('[data-type="cubeone-touch"] >  [data-type=right]', a),
                o = (0, s.qs)('[data-type="cubeone-touch"] >  [data-type=left]', a),
                l = (0, s.qs)('[data-type="cubeone-touch"] >  [data-type=back]', a),
                u = (0, s.qs)('[data-type="cubeone-touch"] >  [data-type=down]', a),
                c = [n, i, r, o, l, u];
              c.forEach(function(e) {
                if (!e) return (0, d.error)("html is invalid for touch elements: "), void(0, d.error)(c)
              });
              var g = (0, s.qs)('[data-type="cubeone-display"]', a);
              if (this.cubeEl = g, !g) return void(0, d.error)("html is invalid for cubeone-display");
              this.frontEl = (0, s.qs)("[data-type=front] > div", g), this.upEl = (0, s.qs)("[data-type=up] > div", g), this.rightEl = (0, s.qs)("[data-type=right] > div", g), this.leftEl = (0, s.qs)("[data-type=left] > div", g), this.backEl = (0, s.qs)("[data-type=back] > div", g), this.downEl = (0, s.qs)("[data-type=down] > div", g);
              var b = [this.frontEl, this.upEl, this.rightEl, this.leftEl, this.backEl, this.downEl];
              b.forEach(function(e) {
                if (!e) return (0, d.error)("html is invalid for display elements: "), void(0, d.error)(b)
              });
              var f = new e.Swipe;
              f.set({
                direction: e.DIRECTION_ALL
              });
              var p = new e.Swipe;
              p.set({
                direction: e.DIRECTION_ALL
              });
              var v = new e.Swipe;
              v.set({
                direction: e.DIRECTION_ALL
              });
              var h = new e.Swipe;
              h.set({
                direction: e.DIRECTION_ALL
              });
              var E = new e.Swipe;
              E.set({
                direction: e.DIRECTION_ALL
              });
              var y = new e.Swipe;
              y.set({
                direction: e.DIRECTION_ALL
              });
              var k = new e.Manager(i, {});
              k.add(f);
              var w = new e.Manager(n, {});
              w.add(p);
              var Z = new e.Manager(r, {});
              Z.add(v);
              var _ = new e.Manager(o, {});
              _.add(h);
              var m = new e.Manager(u, {});
              m.add(E);
              var T = new e.Manager(l, {});
              T.add(y), k.add(new e.Tap({
                event: "doubletap",
                taps: 2
              })), k.add(new e.Tap({
                event: "singletap"
              })), k.get("doubletap").recognizeWith("singletap"), k.get("singletap").requireFailure("doubletap"), w.add(new e.Tap({
                event: "doubletap",
                taps: 2
              })), w.add(new e.Tap({
                event: "singletap"
              })), w.get("doubletap").recognizeWith("singletap"), w.get("singletap").requireFailure("doubletap"), Z.add(new e.Tap({
                event: "doubletap",
                taps: 2
              })), Z.add(new e.Tap({
                event: "singletap"
              })), Z.get("doubletap").recognizeWith("singletap"), Z.get("singletap").requireFailure("doubletap"), _.add(new e.Tap({
                event: "doubletap",
                taps: 2
              })), _.add(new e.Tap({
                event: "singletap"
              })), _.get("doubletap").recognizeWith("singletap"), _.get("singletap").requireFailure("doubletap"), m.add(new e.Tap({
                event: "doubletap",
                taps: 2
              })), m.add(new e.Tap({
                event: "singletap"
              })), m.get("doubletap").recognizeWith("singletap"), m.get("singletap").requireFailure("doubletap"), T.add(new e.Tap({
                event: "doubletap",
                taps: 2
              })), T.add(new e.Tap({
                event: "singletap"
              })), T.get("doubletap").recognizeWith("singletap"), T.get("singletap").requireFailure("doubletap"), k.on("singletap doubletap swipeup swipedown swiperight swipeleft", function(e) {
                var a = e.type,
                  n = e.target;
                switch ("cubeone" !== n.dataset.type && (n = n.parentElement, "cubeone" !== n.dataset.type && (n = n.parentElement)), a) {
                  case "singletap":
                    break;
                  case "doubletap":
                    t.tapped(n, e.target.dataset.type);
                    break;
                  case "swipeup":
                    t.x();
                    break;
                  case "swiperight":
                    t.y();
                    break;
                  case "swipedown":
                    t.X();
                    break;
                  case "swipeleft":
                    t.Y()
                }
              }), w.on("singletap doubletap swipeup swipedown swiperight swipeleft", function(e) {
                var a = e.type,
                  n = e.target;
                switch ("cubeone" !== n.dataset.type && (n = n.parentElement, "cubeone" !== n.dataset.type && (n = n.parentElement)), a) {
                  case "singletap":
                    break;
                  case "doubletap":
                    t.tapped(n, e.target.dataset.type);
                    break;
                  case "swipeup":
                    t.x();
                    break;
                  case "swiperight":
                    t.z();
                    break;
                  case "swipedown":
                    t.X();
                    break;
                  case "swipeleft":
                    t.Z()
                }
              }), Z.on("singletap doubletap swipeup swipedown swiperight swipeleft", function(e) {
                var a = e.type,
                  n = e.target;
                switch ("cubeone" !== n.dataset.type && (n = n.parentElement, "cubeone" !== n.dataset.type && (n = n.parentElement)), a) {
                  case "singletap":
                    break;
                  case "doubletap":
                    t.tapped(n, e.target.dataset.type);
                    break;
                  case "swipeup":
                    t.Z();
                    break;
                  case "swiperight":
                    t.y();
                    break;
                  case "swipedown":
                    t.z();
                    break;
                  case "swipeleft":
                    t.Y()
                }
              }), _.on("singletap doubletap swipeup swipedown swiperight swipeleft", function(e) {
                var a = e.type,
                  n = e.target;
                switch ((0, d.debug)(a + " " + n.dataset.type), "cubeone" !== n.dataset.type && (n = n.parentElement, "cubeone" !== n.dataset.type && (n = n.parentElement)), a) {
                  case "singletap":
                    break;
                  case "doubletap":
                    t.tapped(n, e.target.dataset.type);
                    break;
                  case "swipeup":
                    t.z();
                    break;
                  case "swiperight":
                    t.y();
                    break;
                  case "swipedown":
                    t.Z();
                    break;
                  case "swipeleft":
                    t.Y()
                }
              }), m.on("singletap doubletap swipeup swipedown swiperight swipeleft", function(e) {
                var a = e.type,
                  n = e.target;
                switch ("cubeone" !== n.dataset.type && (n = n.parentElement, "cubeone" !== n.dataset.type && (n = n.parentElement)), a) {
                  case "singletap":
                    break;
                  case "doubletap":
                    t.tapped(n, e.target.dataset.type);
                    break;
                  case "swipeup":
                    t.x();
                    break;
                  case "swiperight":
                    t.Z();
                    break;
                  case "swipedown":
                    t.X();
                    break;
                  case "swipeleft":
                    t.z()
                }
              }), T.on("singletap doubletap swipeup swipedown swiperight swipeleft", function(e) {
                var a = e.type,
                  n = e.target;
                switch ((0, d.debug)(a + " " + n.dataset.type), "cubeone" !== n.dataset.type && (n = n.parentElement, "cubeone" !== n.dataset.type && (n = n.parentElement)), a) {
                  case "singletap":
                    break;
                  case "doubletap":
                    t.tapped(n, e.target.dataset.type);
                    break;
                  case "swipeup":
                    t.X();
                    break;
                  case "swiperight":
                    t.y();
                    break;
                  case "swipedown":
                    t.x();
                    break;
                  case "swipeleft":
                    t.Y()
                }
              }), this._updateUiFaces(), this.cubeComponentEl.addEventListener("keydown", this._handleKeyEvent, !1), g.addEventListener("transitionend", this._transitionEnd), this._triggerEvent("init", {
                cube: this.cubeComponentEl
              })
            }
          }, {
            key: "_updateUiFaces",
            value: function() {
              var e = void 0,
                t = void 0,
                a = void 0,
                n = void 0,
                i = void 0,
                r = void 0,
                o = this.getState();
              e = (0, f.getUp)(o.code), t = (0, f.getFront)(o.code), a = (0, f.getRight)(o.code), n = (0, f.getLeft)(o.code), i = (0, f.getBack)(o.code), r = (0, f.getDown)(o.code);
              var l = this._config.faceSkins;
              if (l) {
                var d = "";
                this.upEl.style.backgroundColor = (d = l[e].bgColor) ? d : c["default"][e], this.frontEl.style.backgroundColor = (d = l[t].bgColor) ? d : c["default"][t], this.rightEl.style.backgroundColor = (d = l[a].bgColor) ? d : c["default"][a], this.leftEl.style.backgroundColor = (d = l[n].bgColor) ? d : c["default"][n], this.backEl.style.backgroundColor = (d = l[i].bgColor) ? d : c["default"][i], this.downEl.style.backgroundColor = (d = l[r].bgColor) ? d : c["default"][r], this.upEl.style.backgroundImage = (d = l[e].bgImg) ? d : "", this.frontEl.style.backgroundImage = (d = l[t].bgImg) ? d : "", this.rightEl.style.backgroundImage = (d = l[a].bgImg) ? d : "", this.leftEl.style.backgroundImage = (d = l[n].bgImg) ? d : "", this.backEl.style.backgroundImage = (d = l[i].bgImg) ? d : "", this.downEl.style.backgroundImage = (d = l[r].bgImg) ? d : ""
              } else this.upEl.style.backgroundColor = c["default"][e], this.frontEl.style.backgroundColor = c["default"][t], this.rightEl.style.backgroundColor = c["default"][a], this.leftEl.style.backgroundColor = c["default"][n], this.backEl.style.backgroundColor = c["default"][i], this.downEl.style.backgroundColor = c["default"][r];
              var s = E["default"][o.code].u;
              this.upEl.style.transform = s ? "rotate" + s.dir + "(" + s.angle + "deg)" : "", s = E["default"][o.code].f, this.frontEl.style.transform = s ? "rotate" + s.dir + "(" + s.angle + "deg)" : "", s = E["default"][o.code].r, this.rightEl.style.transform = s ? "rotate" + s.dir + "(" + s.angle + "deg)" : "", s = E["default"][o.code].l, this.leftEl.style.transform = s ? "rotate" + s.dir + "(" + s.angle + "deg)" : "", s = E["default"][o.code].b, this.backEl.style.transform = s ? "rotate" + s.dir + "(" + s.angle + "deg)" : "", s = E["default"][o.code].d, this.downEl.style.transform = s ? "rotate" + s.dir + "(" + s.angle + "deg)" : ""
            }
          }, {
            key: "tapped",
            value: function(e, t) {
              (0, d.log)(e), (0, s.qs)('[data-type="' + t + '"]', e).classList.toggle("tapped")
            }
          }, {
            key: "_actionInvoke",
            value: function(e, t, a) {
              var n = this.getState(),
                i = n.code;
              if (n.rotateEnabled) {
                var r = a && a.skipAnimation;
                n.code = v["default"][i][e], r || (n.rotateEnabled = !1), this._setState(n), r || (t = t.bind(this))(), r && this._updateUiFaces()
              }
            }
          }, {
            key: "gotoState",
            value: function(e) {
              if (y.STATES[e]) {
                var t = this.getState();
                t.code = e, this._setState(t), this._updateUiFaces()
              }
            }
          }, {
            key: "setToRandomState",
            value: function() {
              var e = this.getState();
              e.code = y.STATES_ARRAY[y.STATES_ARRAY.length * Math.random() | 0], this._setState(e), this._updateUiFaces()
            }
          }, {
            key: "x",
            value: function(e) {
              e && e.skipTriggerEvent || this._triggerEvent("beforerotate", {
                cube: this.cubeComponentEl,
                action: "x"
              }), this._actionInvoke("x", this._uix, e)
            }
          }, {
            key: "X",
            value: function(e) {
              e && e.skipTriggerEvent || this._triggerEvent("beforerotate", {
                cube: this.cubeComponentEl,
                action: "-x"
              }), this._actionInvoke("-x", this._uiX, e)
            }
          }, {
            key: "y",
            value: function(e) {
              e && e.skipTriggerEvent || this._triggerEvent("beforerotate", {
                cube: this.cubeComponentEl,
                action: "y"
              }), this._actionInvoke("y", this._uiy, e)
            }
          }, {
            key: "Y",
            value: function(e) {
              e && e.skipTriggerEvent || this._triggerEvent("beforerotate", {
                cube: this.cubeComponentEl,
                action: "-y"
              }), this._actionInvoke("-y", this._uiY, e)
            }
          }, {
            key: "z",
            value: function(e) {
              e && e.skipTriggerEvent || this._triggerEvent("beforerotate", {
                cube: this.cubeComponentEl,
                action: "z"
              }), this._actionInvoke("z", this._uiz, e)
            }
          }, {
            key: "Z",
            value: function(e) {
              e && e.skipTriggerEvent || this._triggerEvent("beforerotate", {
                cube: this.cubeComponentEl,
                action: "-z"
              }), this._actionInvoke("-z", this._uiZ, e)
            }
          }, {
            key: "_uix",
            value: function() {
              this.cubeEl.style.transform = "rotateX(90deg)"
            }
          }, {
            key: "_uiy",
            value: function() {
              this.cubeEl.style.transform = "rotateY(90deg)"
            }
          }, {
            key: "_uiX",
            value: function() {
              this.cubeEl.style.transform = "rotateX(-90deg)"
            }
          }, {
            key: "_uiY",
            value: function() {
              this.cubeEl.style.transform = "rotateY(-90deg)"
            }
          }, {
            key: "_uiz",
            value: function() {
              this.cubeEl.style.transform = "rotateZ(90deg)"
            }
          }, {
            key: "_uiZ",
            value: function() {
              this.cubeEl.style.transform = "rotateZ(-90deg)"
            }
          }, {
            key: "reset",
            value: function() {
              return this.gotoState("uf"), "reset"
            }
          }, {
            key: "_handleKeyEvent",
            value: function(e) {
              switch (e.keyCode) {
                case y.KEY.LEFT:
                case y.KEY.a:
                  this.Y();
                  break;
                case y.KEY.UP:
                  e.preventDefault();
                case y.KEY.w:
                  this.x();
                  break;
                case y.KEY.RIGHT:
                case y.KEY.d:
                  this.y();
                  break;
                case y.KEY.DOWN:
                  e.preventDefault();
                case y.KEY.s:
                  this.X();
                  break;
                case y.KEY.q:
                  this.Z();
                  break;
                case y.KEY.e:
                  this.z()
              }
            }
          }]), t
        }();
      t["default"] = k
    }).call(t, a(12))
  }, function(e, t, a) {
    "use strict";
  
    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = a(2),
      r = a(1),
      o = n(r),
      l = [];
    Object.keys(i.STATES).forEach(function(e, t) {
      return l[e] = []
    }), l.lf.u = {
      angle: 90,
      dir: "Z"
    }, l.rf.u = {
      angle: -90,
      dir: "Z"
    }, l.fl.u = {
      angle: -90,
      dir: "Z"
    }, l.fu.u = {
      angle: 180,
      dir: "Z"
    }, l.fr.u = {
      angle: 90,
      dir: "Z"
    }, l.bl.u = {
      angle: 90,
      dir: "Z"
    }, l.dl.u = {
      angle: -90,
      dir: "Z"
    }, l.rb.u = {
      angle: 90,
      dir: "Z"
    }, l.lu.u = {
      angle: -90,
      dir: "Z"
    }, l.lf.f = {
      angle: 90,
      dir: "Z"
    }, l.rf.f = {
      angle: -90,
      dir: "Z"
    }, l.db.f = {
      angle: 180,
      dir: "Z"
    }, l.fl.f = {
      angle: -90,
      dir: "Z"
    }, l.dl.f = {
      angle: 180,
      dir: "Z"
    }, l.bl.f = {
      angle: 90,
      dir: "Z"
    }, l.rd.f = {
      angle: -90,
      dir: "Z"
    }, l.ld.f = {
      angle: 90,
      dir: "Z"
    }, l.bd.f = {
      angle: 180,
      dir: "Z"
    }, l.br.f = {
      angle: -90,
      dir: "Z"
    }, l.fu.f = {
      angle: 180,
      dir: "Z"
    }, l.lu.f = {
      angle: 90,
      dir: "Z"
    }, l.ru.f = {
      angle: -90,
      dir: "Z"
    }, l.fr.f = {
      angle: 90,
      dir: "Z"
    }, l.df.f = {
      angle: 180,
      dir: "Z"
    }, l.dr.f = {
      angle: 180,
      dir: "Z"
    }, l.rb.f = {
      angle: 90,
      dir: "Z"
    }, l.lb.f = {
      angle: -90,
      dir: "Z"
    }, l.fd.r = {
      angle: 90,
      dir: "Z"
    }, l.db.r = {
      angle: 180,
      dir: "Z"
    }, l.bu.r = {
      angle: -90,
      dir: "Z"
    }, l.ld.r = {
      angle: 90,
      dir: "Z"
    }, l.rd.r = {
      angle: 90,
      dir: "Z"
    }, l.dl.r = {
      angle: 180,
      dir: "Z"
    }, l.lu.r = {
      angle: -90,
      dir: "Z"
    }, l.lf.r = {
      angle: 90,
      dir: "Z"
    }, l.rf.r = {
      angle: -90,
      dir: "Z"
    }, l.bd.r = {
      angle: 90,
      dir: "Z"
    }, l.br.r = {
      angle: 180,
      dir: "Z"
    }, l.lb.r = {
      angle: 90,
      dir: "Z"
    }, l.fu.r = {
      angle: -90,
      dir: "Z"
    }, l.df.r = {
      angle: 180,
      dir: "Z"
    }, l.fr.r = {
      angle: 180,
      dir: "Z"
    }, l.ru.r = {
      angle: -90,
      dir: "Z"
    }, l.dr.r = {
      angle: 180,
      dir: "Z"
    }, l.rb.r = {
      angle: -90,
      dir: "Z"
    }, l.fd.l = {
      angle: -90,
      dir: "Z"
    }, l.db.l = {
      angle: 180,
      dir: "Z"
    }, l.bu.l = {
      angle: 90,
      dir: "Z"
    }, l.rf.l = {
      angle: -90,
      dir: "Z"
    }, l.fl.l = {
      angle: 180,
      dir: "Z"
    }, l.rd.l = {
      angle: -90,
      dir: "Z"
    }, l.bl.l = {
      angle: 180,
      dir: "Z"
    }, l.bd.l = {
      angle: -90,
      dir: "Z"
    }, l.fu.l = {
      angle: 90,
      dir: "Z"
    }, l.lf.l = {
      angle: 90,
      dir: "Z"
    }, l.df.l = {
      angle: 180,
      dir: "Z"
    }, l.rb.l = {
      angle: -90,
      dir: "Z"
    }, l.ru.l = {
      angle: 90,
      dir: "Z"
    }, l.ld.l = {
      angle: -90,
      dir: "Z"
    }, l.dr.l = {
      angle: 180,
      dir: "Z"
    }, l.lu.l = {
      angle: 90,
      dir: "Z"
    }, l.dl.l = {
      angle: 180,
      dir: "Z"
    }, l.lb.l = {
      angle: 90,
      dir: "Z"
    }, l.ul.u = {
      angle: -90,
      dir: "Z"
    }, l.ur.u = {
      angle: 90,
      dir: "Z"
    }, l.ub.u = {
      angle: 180,
      dir: "Z"
    }, l.bu.u = {
      angle: 180,
      dir: "Z"
    }, l.dr.u = {
      angle: 90,
      dir: "Z"
    }, l.ru.u = {
      angle: 180,
      dir: "Z"
    }, l.br.u = {
      angle: -90,
      dir: "Z"
    }, l.lb.u = {
      angle: -90,
      dir: "Z"
    }, l.lu.u = {
      angle: 180,
      dir: "Z"
    }, l.df.u = {
      angle: 180,
      dir: "Z"
    }, l.fd.b = {
      angle: 180,
      dir: "Z"
    }, l.dr.b = {
      angle: 180,
      dir: "Z"
    }, l.db.b = {
      angle: 180,
      dir: "Z"
    }, l.bu.b = {
      angle: 180,
      dir: "Z"
    }, l.bl.b = {
      angle: -90,
      dir: "Z"
    }, l.fl.b = {
      angle: 90,
      dir: "Z"
    }, l.lb.b = {
      angle: 90,
      dir: "Z"
    }, l.rd.b = {
      angle: -90,
      dir: "Z"
    }, l.ld.b = {
      angle: 90,
      dir: "Z"
    }, l.ru.b = {
      angle: -90,
      dir: "Z"
    }, l.br.b = {
      angle: 90,
      dir: "Z"
    }, l.fr.b = {
      angle: -90,
      dir: "Z"
    }, l.lf.b = {
      angle: -90,
      dir: "Z"
    }, l.df.b = {
      angle: 180,
      dir: "Z"
    }, l.rf.b = {
      angle: 90,
      dir: "Z"
    }, l.rb.b = {
      angle: -90,
      dir: "Z"
    }, l.dl.b = {
      angle: 180,
      dir: "Z"
    }, l.lu.b = {
      angle: 90,
      dir: "Z"
    }, l.lf.d = {
      angle: 90,
      dir: "Z"
    }, l.fd.d = {
      angle: 180,
      dir: "Z"
    }, l.dl.d = {
      angle: 90,
      dir: "Z"
    }, l.ul.d = {
      angle: 90,
      dir: "Z"
    }, l.bl.d = {
      angle: 90,
      dir: "Z"
    }, l.ur.d = {
      angle: -90,
      dir: "Z"
    }, l.ub.d = {
      angle: 180,
      dir: "Z"
    }, l.br.d = {
      angle: -90,
      dir: "Z"
    }, l.bd.d = {
      angle: 180,
      dir: "Z"
    }, l.rf.d = {
      angle: -90,
      dir: "Z"
    }, l.df.d = {
      angle: 180,
      dir: "Z"
    }, l.dr.d = {
      angle: -90,
      dir: "Z"
    }, l.ld.d = {
      angle: 180,
      dir: "Z"
    }, l.fl.d = {
      angle: -90,
      dir: "Z"
    }, l.fr.d = {
      angle: 90,
      dir: "Z"
    }, l.rd.d = {
      angle: 180,
      dir: "Z"
    }, l.rb.d = {
      angle: 90,
      dir: "Z"
    }, l.lb.d = {
      angle: -90,
      dir: "Z"
    }, (0, o["default"])(l), t["default"] = l
  }, function(e, t, a) {
    "use strict";
  
    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = a(2),
      r = a(4),
      o = a(1),
      l = n(o),
      d = [];
    Object.keys(i.STATES).forEach(function(e, t) {
      return d[e] = []
    });
    var s = void 0,
      u = void 0,
      c = void 0,
      g = void 0,
      b = r.nextState.first;
    for (s = 0; s < r.nextState.stateCount; s++) u = b[0], c = b[1], d[b].x = "" + c + i.opposite[u], d[b]["-x"] = "" + i.opposite[c] + u, d[b].y = "" + u + (0, r.getLeft)(b), d[b]["-y"] = "" + u + (0, r.getRight)(b), d[b].z = "" + (0, r.getLeft)(b) + c, d[b]["-z"] = "" + (0, r.getRight)(b) + c, g = r.nextState.get(b), b = g.state;
    (0, l["default"])(d), t["default"] = d
  }, function(e, t) {
    e.exports = Hammer
  }]);
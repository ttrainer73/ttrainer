(() => {
  var j_ = Object.create;
  var tn = Object.defineProperty;
  var z_ = Object.getOwnPropertyDescriptor;
  var K_ = Object.getOwnPropertyNames;
  var Y_ = Object.getPrototypeOf,
    $_ = Object.prototype.hasOwnProperty;
  var fe = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Re = (e, t) => {
      for (var r in t) tn(e, r, { get: t[r], enumerable: !0 });
    },
    Rs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of K_(t))
          !$_.call(e, i) &&
            i !== r &&
            tn(e, i, {
              get: () => t[i],
              enumerable: !(n = z_(t, i)) || n.enumerable,
            });
      return e;
    };
  var oe = (e, t, r) => (
      (r = e != null ? j_(Y_(e)) : {}),
      Rs(
        t || !e || !e.__esModule
          ? tn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ze = (e) => Rs(tn({}, "__esModule", { value: !0 }), e);
  var Ri = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, m) {
        var I = new V.Bare();
        return I.init(f, m);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (m) {
          return "-" + m.toLowerCase();
        });
      }
      function n(f) {
        var m = parseInt(f.slice(1), 16),
          I = (m >> 16) & 255,
          S = (m >> 8) & 255,
          T = 255 & m;
        return [I, S, T];
      }
      function i(f, m, I) {
        return (
          "#" + ((1 << 24) | (f << 16) | (m << 8) | I).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, m) {
        l("Type warning: Expected: [" + f + "] Got: [" + typeof m + "] " + m);
      }
      function s(f, m, I) {
        l("Units do not match [" + f + "]: " + m + ", " + I);
      }
      function u(f, m, I) {
        if ((m !== void 0 && (I = m), f === void 0)) return I;
        var S = I;
        return (
          Ci.test(f) || !Jr.test(f)
            ? (S = parseInt(f, 10))
            : Jr.test(f) && (S = 1e3 * parseFloat(f)),
          0 > S && (S = 0),
          S === S ? S : I
        );
      }
      function l(f) {
        ae.debug && window && window.console.warn(f);
      }
      function h(f) {
        for (var m = -1, I = f ? f.length : 0, S = []; ++m < I; ) {
          var T = f[m];
          T && S.push(T);
        }
        return S;
      }
      var p = (function (f, m, I) {
          function S(ee) {
            return typeof ee == "object";
          }
          function T(ee) {
            return typeof ee == "function";
          }
          function x() {}
          function Y(ee, ce) {
            function H() {
              var Oe = new te();
              return T(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function te() {}
            ce === I && ((ce = ee), (ee = Object)), (H.Bare = te);
            var ne,
              ve = (x[f] = ee[f]),
              Qe = (te[f] = H[f] = new x());
            return (
              (Qe.constructor = H),
              (H.mixin = function (Oe) {
                return (te[f] = H[f] = Y(H, Oe)[f]), H;
              }),
              (H.open = function (Oe) {
                if (
                  ((ne = {}),
                  T(Oe) ? (ne = Oe.call(H, Qe, ve, H, ee)) : S(Oe) && (ne = Oe),
                  S(ne))
                )
                  for (var vr in ne) m.call(ne, vr) && (Qe[vr] = ne[vr]);
                return T(Qe.init) || (Qe.init = ee), H;
              }),
              H.open(ce)
            );
          }
          return Y;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (f, m, I, S) {
              var T = (f /= S) * f,
                x = T * f;
              return (
                m +
                I * (-2.75 * x * T + 11 * T * T + -15.5 * x + 8 * T + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, m, I, S) {
              var T = (f /= S) * f,
                x = T * f;
              return m + I * (-1 * x * T + 3 * T * T + -3 * x + 2 * T);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, m, I, S) {
              var T = (f /= S) * f,
                x = T * f;
              return (
                m +
                I * (0.3 * x * T + -1.6 * T * T + 2.2 * x + -1.8 * T + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, m, I, S) {
              var T = (f /= S) * f,
                x = T * f;
              return m + I * (2 * x * T + -5 * T * T + 2 * x + 2 * T);
            },
          ],
          linear: [
            "linear",
            function (f, m, I, S) {
              return (I * f) / S + m;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, m, I, S) {
              return I * (f /= S) * f + m;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, m, I, S) {
              return -I * (f /= S) * (f - 2) + m;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, m, I, S) {
              return (f /= S / 2) < 1
                ? (I / 2) * f * f + m
                : (-I / 2) * (--f * (f - 2) - 1) + m;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, m, I, S) {
              return I * (f /= S) * f * f + m;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, m, I, S) {
              return I * ((f = f / S - 1) * f * f + 1) + m;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, m, I, S) {
              return (f /= S / 2) < 1
                ? (I / 2) * f * f * f + m
                : (I / 2) * ((f -= 2) * f * f + 2) + m;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, m, I, S) {
              return I * (f /= S) * f * f * f + m;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, m, I, S) {
              return -I * ((f = f / S - 1) * f * f * f - 1) + m;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, m, I, S) {
              return (f /= S / 2) < 1
                ? (I / 2) * f * f * f * f + m
                : (-I / 2) * ((f -= 2) * f * f * f - 2) + m;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, m, I, S) {
              return I * (f /= S) * f * f * f * f + m;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, m, I, S) {
              return I * ((f = f / S - 1) * f * f * f * f + 1) + m;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, m, I, S) {
              return (f /= S / 2) < 1
                ? (I / 2) * f * f * f * f * f + m
                : (I / 2) * ((f -= 2) * f * f * f * f + 2) + m;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, m, I, S) {
              return -I * Math.cos((f / S) * (Math.PI / 2)) + I + m;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, m, I, S) {
              return I * Math.sin((f / S) * (Math.PI / 2)) + m;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, m, I, S) {
              return (-I / 2) * (Math.cos((Math.PI * f) / S) - 1) + m;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, m, I, S) {
              return f === 0 ? m : I * Math.pow(2, 10 * (f / S - 1)) + m;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, m, I, S) {
              return f === S
                ? m + I
                : I * (-Math.pow(2, (-10 * f) / S) + 1) + m;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, m, I, S) {
              return f === 0
                ? m
                : f === S
                ? m + I
                : (f /= S / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (f - 1)) + m
                : (I / 2) * (-Math.pow(2, -10 * --f) + 2) + m;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, m, I, S) {
              return -I * (Math.sqrt(1 - (f /= S) * f) - 1) + m;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, m, I, S) {
              return I * Math.sqrt(1 - (f = f / S - 1) * f) + m;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, m, I, S) {
              return (f /= S / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - f * f) - 1) + m
                : (I / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + m;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, m, I, S, T) {
              return (
                T === void 0 && (T = 1.70158),
                I * (f /= S) * f * ((T + 1) * f - T) + m
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, m, I, S, T) {
              return (
                T === void 0 && (T = 1.70158),
                I * ((f = f / S - 1) * f * ((T + 1) * f + T) + 1) + m
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, m, I, S, T) {
              return (
                T === void 0 && (T = 1.70158),
                (f /= S / 2) < 1
                  ? (I / 2) * f * f * (((T *= 1.525) + 1) * f - T) + m
                  : (I / 2) *
                      ((f -= 2) * f * (((T *= 1.525) + 1) * f + T) + 2) +
                    m
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        _ = window,
        A = "bkwld-tram",
        y = /[\-\.0-9]/g,
        C = /[A-Z]/,
        w = "number",
        L = /^(rgb|#)/,
        q = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        j = "unitless",
        z = /(all|none) 0s ease 0s/,
        $ = /^(width|height)$/,
        U = " ",
        O = b.createElement("a"),
        v = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        F = function (f) {
          if (f in O.style) return { dom: f, css: f };
          var m,
            I,
            S = "",
            T = f.split("-");
          for (m = 0; m < T.length; m++)
            S += T[m].charAt(0).toUpperCase() + T[m].slice(1);
          for (m = 0; m < v.length; m++)
            if (((I = v[m] + S), I in O.style))
              return { dom: I, css: R[m] + f };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function"),
        });
      if (G.transition) {
        var Q = G.timing.dom;
        if (((O.style[Q] = g["ease-in-back"][0]), !O.style[Q]))
          for (var Z in E) g[Z][0] = E[Z];
      }
      var M = (t.frame = (function () {
          var f =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return f && G.bind
            ? f.bind(_)
            : function (m) {
                _.setTimeout(m, 16);
              };
        })()),
        X = (t.now = (function () {
          var f = _.performance,
            m = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return m && G.bind
            ? m.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        K = p(function (f) {
          function m(J, ie) {
            var pe = h(("" + J).split(U)),
              se = pe[0];
            ie = ie || {};
            var Ae = gr[se];
            if (!Ae) return l("Unsupported property: " + se);
            if (!ie.weak || !this.props[se]) {
              var Ue = Ae[0],
                Ce = this.props[se];
              return (
                Ce || (Ce = this.props[se] = new Ue.Bare()),
                Ce.init(this.$el, pe, Ae, ie),
                Ce
              );
            }
          }
          function I(J, ie, pe) {
            if (J) {
              var se = typeof J;
              if (
                (ie ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                se == "number" && ie)
              )
                return (
                  (this.timer = new re({
                    duration: J,
                    context: this,
                    complete: x,
                  })),
                  void (this.active = !0)
                );
              if (se == "string" && ie) {
                switch (J) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    Y.call(this);
                    break;
                  case "redraw":
                    te.call(this);
                    break;
                  default:
                    m.call(this, J, pe && pe[1]);
                }
                return x.call(this);
              }
              if (se == "function") return void J.call(this, this);
              if (se == "object") {
                var Ae = 0;
                Qe.call(
                  this,
                  J,
                  function (he, W_) {
                    he.span > Ae && (Ae = he.span), he.stop(), he.animate(W_);
                  },
                  function (he) {
                    "wait" in he && (Ae = u(he.wait, 0));
                  }
                ),
                  ve.call(this),
                  Ae > 0 &&
                    ((this.timer = new re({ duration: Ae, context: this })),
                    (this.active = !0),
                    ie && (this.timer.complete = x));
                var Ue = this,
                  Ce = !1,
                  en = {};
                M(function () {
                  Qe.call(Ue, J, function (he) {
                    he.active && ((Ce = !0), (en[he.name] = he.nextStyle));
                  }),
                    Ce && Ue.$el.css(en);
                });
              }
            }
          }
          function S(J) {
            (J = u(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new re({
                    duration: J,
                    context: this,
                    complete: x,
                  })),
                  (this.active = !0));
          }
          function T(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = x))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function x() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var J = this.queue.shift();
              I.call(this, J.options, !0, J.args);
            }
          }
          function Y(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ie;
            typeof J == "string"
              ? ((ie = {}), (ie[J] = 1))
              : (ie = typeof J == "object" && J != null ? J : this.props),
              Qe.call(this, ie, Oe),
              ve.call(this);
          }
          function ee(J) {
            Y.call(this, J), Qe.call(this, J, vr, H_);
          }
          function ce(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function H() {
            Y.call(this), (this.el.style.display = "none");
          }
          function te() {
            this.el.offsetHeight;
          }
          function ne() {
            Y.call(this), e.removeData(this.el, A), (this.$el = this.el = null);
          }
          function ve() {
            var J,
              ie,
              pe = [];
            this.upstream && pe.push(this.upstream);
            for (J in this.props)
              (ie = this.props[J]), ie.active && pe.push(ie.string);
            (pe = pe.join(",")),
              this.style !== pe &&
                ((this.style = pe), (this.el.style[G.transition.dom] = pe));
          }
          function Qe(J, ie, pe) {
            var se,
              Ae,
              Ue,
              Ce,
              en = ie !== Oe,
              he = {};
            for (se in J)
              (Ue = J[se]),
                se in $e
                  ? (he.transform || (he.transform = {}),
                    (he.transform[se] = Ue))
                  : (C.test(se) && (se = r(se)),
                    se in gr
                      ? (he[se] = Ue)
                      : (Ce || (Ce = {}), (Ce[se] = Ue)));
            for (se in he) {
              if (((Ue = he[se]), (Ae = this.props[se]), !Ae)) {
                if (!en) continue;
                Ae = m.call(this, se);
              }
              ie.call(this, Ae, Ue);
            }
            pe && Ce && pe.call(this, Ce);
          }
          function Oe(J) {
            J.stop();
          }
          function vr(J, ie) {
            J.set(ie);
          }
          function H_(J) {
            this.$el.css(J);
          }
          function Ge(J, ie) {
            f[J] = function () {
              return this.children
                ? X_.call(this, ie, arguments)
                : (this.el && ie.apply(this, arguments), this);
            };
          }
          function X_(J, ie) {
            var pe,
              se = this.children.length;
            for (pe = 0; se > pe; pe++) J.apply(this.children[pe], ie);
            return this;
          }
          (f.init = function (J) {
            if (
              ((this.$el = e(J)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ae.keepInherited && !ae.fallback)
            ) {
              var ie = Ye(this.el, "transition");
              ie && !z.test(ie) && (this.upstream = ie);
            }
            G.backface &&
              ae.hideBackface &&
              De(this.el, G.backface.css, "hidden");
          }),
            Ge("add", m),
            Ge("start", I),
            Ge("wait", S),
            Ge("then", T),
            Ge("next", x),
            Ge("stop", Y),
            Ge("set", ee),
            Ge("show", ce),
            Ge("hide", H),
            Ge("redraw", te),
            Ge("destroy", ne);
        }),
        V = p(K, function (f) {
          function m(I, S) {
            var T = e.data(I, A) || e.data(I, A, new K.Bare());
            return T.el || T.init(I), S ? T.start(S) : T;
          }
          f.init = function (I, S) {
            var T = e(I);
            if (!T.length) return this;
            if (T.length === 1) return m(T[0], S);
            var x = [];
            return (
              T.each(function (Y, ee) {
                x.push(m(ee, S));
              }),
              (this.children = x),
              this
            );
          };
        }),
        D = p(function (f) {
          function m() {
            var x = this.get();
            this.update("auto");
            var Y = this.get();
            return this.update(x), Y;
          }
          function I(x, Y, ee) {
            return Y !== void 0 && (ee = Y), x in g ? x : ee;
          }
          function S(x) {
            var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
            return (Y ? i(Y[1], Y[2], Y[3]) : x).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var T = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (x, Y, ee, ce) {
            (this.$el = x), (this.el = x[0]);
            var H = Y[0];
            ee[2] && (H = ee[2]),
              pr[H] && (H = pr[H]),
              (this.name = H),
              (this.type = ee[1]),
              (this.duration = u(Y[1], this.duration, T.duration)),
              (this.ease = I(Y[2], this.ease, T.ease)),
              (this.delay = u(Y[3], this.delay, T.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = $.test(this.name)),
              (this.unit = ce.unit || this.unit || ae.defaultUnit),
              (this.angle = ce.angle || this.angle || ae.defaultAngle),
              ae.fallback || ce.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    U +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? U + g[this.ease][0] : "") +
                    (this.delay ? U + this.delay + "ms" : "")));
          }),
            (f.set = function (x) {
              (x = this.convert(x, this.type)), this.update(x), this.redraw();
            }),
            (f.transition = function (x) {
              (this.active = !0),
                (x = this.convert(x, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  x == "auto" && (x = m.call(this))),
                (this.nextStyle = x);
            }),
            (f.fallback = function (x) {
              var Y =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (x = this.convert(x, this.type)),
                this.auto &&
                  (Y == "auto" && (Y = this.convert(this.get(), this.type)),
                  x == "auto" && (x = m.call(this))),
                (this.tween = new N({
                  from: Y,
                  to: x,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return Ye(this.el, this.name);
            }),
            (f.update = function (x) {
              De(this.el, this.name, x);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                De(this.el, this.name, this.get()));
              var x = this.tween;
              x && x.context && x.destroy();
            }),
            (f.convert = function (x, Y) {
              if (x == "auto" && this.auto) return x;
              var ee,
                ce = typeof x == "number",
                H = typeof x == "string";
              switch (Y) {
                case w:
                  if (ce) return x;
                  if (H && x.replace(y, "") === "") return +x;
                  ee = "number(unitless)";
                  break;
                case L:
                  if (H) {
                    if (x === "" && this.original) return this.original;
                    if (Y.test(x))
                      return x.charAt(0) == "#" && x.length == 7 ? x : S(x);
                  }
                  ee = "hex or rgb string";
                  break;
                case q:
                  if (ce) return x + this.unit;
                  if (H && Y.test(x)) return x;
                  ee = "number(px) or string(unit)";
                  break;
                case P:
                  if (ce) return x + this.unit;
                  if (H && Y.test(x)) return x;
                  ee = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (ce) return x + this.angle;
                  if (H && Y.test(x)) return x;
                  ee = "number(deg) or string(angle)";
                  break;
                case j:
                  if (ce || (H && P.test(x))) return x;
                  ee = "number(unitless) or string(unit or %)";
              }
              return a(ee, x), x;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        d = p(D, function (f, m) {
          f.init = function () {
            m.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), L));
          };
        }),
        k = p(D, function (f, m) {
          (f.init = function () {
            m.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        B = p(D, function (f, m) {
          function I(S, T) {
            var x, Y, ee, ce, H;
            for (x in S)
              (ce = $e[x]),
                (ee = ce[0]),
                (Y = ce[1] || x),
                (H = this.convert(S[x], ee)),
                T.call(this, Y, H, ee);
          }
          (f.init = function () {
            m.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                $e.perspective &&
                  ae.perspective &&
                  ((this.current.perspective = ae.perspective),
                  De(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (S) {
              I.call(this, S, function (T, x) {
                this.current[T] = x;
              }),
                De(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (S) {
              var T = this.values(S);
              this.tween = new Ee({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var x,
                Y = {};
              for (x in this.current) Y[x] = x in T ? T[x] : this.current[x];
              (this.active = !0), (this.nextStyle = this.style(Y));
            }),
            (f.fallback = function (S) {
              var T = this.values(S);
              this.tween = new Ee({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              De(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (S) {
              var T,
                x = "";
              for (T in S) x += T + "(" + S[T] + ") ";
              return x;
            }),
            (f.values = function (S) {
              var T,
                x = {};
              return (
                I.call(this, S, function (Y, ee, ce) {
                  (x[Y] = ee),
                    this.current[Y] === void 0 &&
                      ((T = 0),
                      ~Y.indexOf("scale") && (T = 1),
                      (this.current[Y] = this.convert(T, ce)));
                }),
                x
              );
            });
        }),
        N = p(function (f) {
          function m(H) {
            ee.push(H) === 1 && M(I);
          }
          function I() {
            var H,
              te,
              ne,
              ve = ee.length;
            if (ve)
              for (M(I), te = X(), H = ve; H--; )
                (ne = ee[H]), ne && ne.render(te);
          }
          function S(H) {
            var te,
              ne = e.inArray(H, ee);
            ne >= 0 &&
              ((te = ee.slice(ne + 1)),
              (ee.length = ne),
              te.length && (ee = ee.concat(te)));
          }
          function T(H) {
            return Math.round(H * ce) / ce;
          }
          function x(H, te, ne) {
            return i(
              H[0] + ne * (te[0] - H[0]),
              H[1] + ne * (te[1] - H[1]),
              H[2] + ne * (te[2] - H[2])
            );
          }
          var Y = { ease: g.ease[1], from: 0, to: 1 };
          (f.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var te = H.ease || Y.ease;
            g[te] && (te = g[te][1]),
              typeof te != "function" && (te = Y.ease),
              (this.ease = te),
              (this.update = H.update || o),
              (this.complete = H.complete || o),
              (this.context = H.context || this),
              (this.name = H.name);
            var ne = H.from,
              ve = H.to;
            ne === void 0 && (ne = Y.from),
              ve === void 0 && (ve = Y.to),
              (this.unit = H.unit || ""),
              typeof ne == "number" && typeof ve == "number"
                ? ((this.begin = ne), (this.change = ve - ne))
                : this.format(ve, ne),
              (this.value = this.begin + this.unit),
              (this.start = X()),
              H.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = X()), (this.active = !0), m(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (f.render = function (H) {
              var te,
                ne = H - this.start;
              if (this.delay) {
                if (ne <= this.delay) return;
                ne -= this.delay;
              }
              if (ne < this.duration) {
                var ve = this.ease(ne, 0, 1, this.duration);
                return (
                  (te = this.startRGB
                    ? x(this.startRGB, this.endRGB, ve)
                    : T(this.begin + ve * this.change)),
                  (this.value = te + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (te = this.endHex || this.begin + this.change),
                (this.value = te + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (H, te) {
              if (((te += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(te)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ne = te.replace(y, ""),
                  ve = H.replace(y, "");
                ne !== ve && s("tween", te, H), (this.unit = ne);
              }
              (te = parseFloat(te)),
                (H = parseFloat(H)),
                (this.begin = this.value = te),
                (this.change = H - te);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ee = [],
            ce = 1e3;
        }),
        re = p(N, function (f) {
          (f.init = function (m) {
            (this.duration = m.duration || 0),
              (this.complete = m.complete || o),
              (this.context = m.context),
              this.play();
          }),
            (f.render = function (m) {
              var I = m - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Ee = p(N, function (f, m) {
          (f.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var S, T;
            for (S in I.values)
              (T = I.values[S]),
                this.current[S] !== T &&
                  this.tweens.push(
                    new N({
                      name: S,
                      from: this.current[S],
                      to: T,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (I) {
              var S,
                T,
                x = this.tweens.length,
                Y = !1;
              for (S = x; S--; )
                (T = this.tweens[S]),
                  T.context &&
                    (T.render(I), (this.current[T.name] = T.value), (Y = !0));
              return Y
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((m.destroy.call(this), this.tweens)) {
                var I,
                  S = this.tweens.length;
                for (I = S; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!G.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + f + ")");
        var m = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = m.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new N(f);
        }),
        (t.delay = function (f, m, I) {
          return new re({ complete: m, duration: f, context: I });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var De = e.style,
        Ye = e.css,
        pr = { transform: G.transform && G.transform.css },
        gr = {
          color: [d, L],
          background: [d, L, "background-color"],
          "outline-color": [d, L],
          "border-color": [d, L],
          "border-top-color": [d, L],
          "border-right-color": [d, L],
          "border-bottom-color": [d, L],
          "border-left-color": [d, L],
          "border-width": [D, q],
          "border-top-width": [D, q],
          "border-right-width": [D, q],
          "border-bottom-width": [D, q],
          "border-left-width": [D, q],
          "border-spacing": [D, q],
          "letter-spacing": [D, q],
          margin: [D, q],
          "margin-top": [D, q],
          "margin-right": [D, q],
          "margin-bottom": [D, q],
          "margin-left": [D, q],
          padding: [D, q],
          "padding-top": [D, q],
          "padding-right": [D, q],
          "padding-bottom": [D, q],
          "padding-left": [D, q],
          "outline-width": [D, q],
          opacity: [D, w],
          top: [D, P],
          right: [D, P],
          bottom: [D, P],
          left: [D, P],
          "font-size": [D, P],
          "text-indent": [D, P],
          "word-spacing": [D, P],
          width: [D, P],
          "min-width": [D, P],
          "max-width": [D, P],
          height: [D, P],
          "min-height": [D, P],
          "max-height": [D, P],
          "line-height": [D, j],
          "scroll-top": [k, w, "scrollTop"],
          "scroll-left": [k, w, "scrollLeft"],
        },
        $e = {};
      G.transform &&
        ((gr.transform = [B]),
        ($e = {
          x: [P, "translateX"],
          y: [P, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [w],
          scaleX: [w],
          scaleY: [w],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        G.transform &&
          G.backface &&
          (($e.z = [P, "translateZ"]),
          ($e.rotateZ = [W]),
          ($e.scaleZ = [w]),
          ($e.perspective = [q]));
      var Ci = /ms/,
        Jr = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ls = c((Uk, Ns) => {
    "use strict";
    var Q_ = window.$,
      Z_ = Ri() && Q_.tram;
    Ns.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        l = n.hasOwnProperty,
        h = r.forEach,
        p = r.map,
        g = r.reduce,
        E = r.reduceRight,
        b = r.filter,
        _ = r.every,
        A = r.some,
        y = r.indexOf,
        C = r.lastIndexOf,
        w = Array.isArray,
        L = Object.keys,
        q = i.bind,
        P =
          (e.each =
          e.forEach =
            function (v, R, F) {
              if (v == null) return v;
              if (h && v.forEach === h) v.forEach(R, F);
              else if (v.length === +v.length) {
                for (var G = 0, Q = v.length; G < Q; G++)
                  if (R.call(F, v[G], G, v) === t) return;
              } else
                for (var Z = e.keys(v), G = 0, Q = Z.length; G < Q; G++)
                  if (R.call(F, v[Z[G]], Z[G], v) === t) return;
              return v;
            });
      (e.map = e.collect =
        function (v, R, F) {
          var G = [];
          return v == null
            ? G
            : p && v.map === p
            ? v.map(R, F)
            : (P(v, function (Q, Z, M) {
                G.push(R.call(F, Q, Z, M));
              }),
              G);
        }),
        (e.find = e.detect =
          function (v, R, F) {
            var G;
            return (
              W(v, function (Q, Z, M) {
                if (R.call(F, Q, Z, M)) return (G = Q), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (v, R, F) {
            var G = [];
            return v == null
              ? G
              : b && v.filter === b
              ? v.filter(R, F)
              : (P(v, function (Q, Z, M) {
                  R.call(F, Q, Z, M) && G.push(Q);
                }),
                G);
          });
      var W =
        (e.some =
        e.any =
          function (v, R, F) {
            R || (R = e.identity);
            var G = !1;
            return v == null
              ? G
              : A && v.some === A
              ? v.some(R, F)
              : (P(v, function (Q, Z, M) {
                  if (G || (G = R.call(F, Q, Z, M))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (v, R) {
          return v == null
            ? !1
            : y && v.indexOf === y
            ? v.indexOf(R) != -1
            : W(v, function (F) {
                return F === R;
              });
        }),
        (e.delay = function (v, R) {
          var F = a.call(arguments, 2);
          return setTimeout(function () {
            return v.apply(null, F);
          }, R);
        }),
        (e.defer = function (v) {
          return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (v) {
          var R, F, G;
          return function () {
            R ||
              ((R = !0),
              (F = arguments),
              (G = this),
              Z_.frame(function () {
                (R = !1), v.apply(G, F);
              }));
          };
        }),
        (e.debounce = function (v, R, F) {
          var G,
            Q,
            Z,
            M,
            X,
            K = function () {
              var V = e.now() - M;
              V < R
                ? (G = setTimeout(K, R - V))
                : ((G = null), F || ((X = v.apply(Z, Q)), (Z = Q = null)));
            };
          return function () {
            (Z = this), (Q = arguments), (M = e.now());
            var V = F && !G;
            return (
              G || (G = setTimeout(K, R)),
              V && ((X = v.apply(Z, Q)), (Z = Q = null)),
              X
            );
          };
        }),
        (e.defaults = function (v) {
          if (!e.isObject(v)) return v;
          for (var R = 1, F = arguments.length; R < F; R++) {
            var G = arguments[R];
            for (var Q in G) v[Q] === void 0 && (v[Q] = G[Q]);
          }
          return v;
        }),
        (e.keys = function (v) {
          if (!e.isObject(v)) return [];
          if (L) return L(v);
          var R = [];
          for (var F in v) e.has(v, F) && R.push(F);
          return R;
        }),
        (e.has = function (v, R) {
          return l.call(v, R);
        }),
        (e.isObject = function (v) {
          return v === Object(v);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        $ = /\\|'|\r|\n|\u2028|\u2029/g,
        U = function (v) {
          return "\\" + z[v];
        },
        O = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (v, R, F) {
          !R && F && (R = F), (R = e.defaults({}, R, e.templateSettings));
          var G = RegExp(
              [
                (R.escape || j).source,
                (R.interpolate || j).source,
                (R.evaluate || j).source,
              ].join("|") + "|$",
              "g"
            ),
            Q = 0,
            Z = "__p+='";
          v.replace(G, function (V, D, d, k, B) {
            return (
              (Z += v.slice(Q, B).replace($, U)),
              (Q = B + V.length),
              D
                ? (Z +=
                    `'+
((__t=(` +
                    D +
                    `))==null?'':_.escape(__t))+
'`)
                : d
                ? (Z +=
                    `'+
((__t=(` +
                    d +
                    `))==null?'':__t)+
'`)
                : k &&
                  (Z +=
                    `';
` +
                    k +
                    `
__p+='`),
              V
            );
          }),
            (Z += `';
`);
          var M = R.variable;
          if (M) {
            if (!O.test(M))
              throw new Error("variable is not a bare identifier: " + M);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (M = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var X;
          try {
            X = new Function(R.variable || "obj", "_", Z);
          } catch (V) {
            throw ((V.source = Z), V);
          }
          var K = function (V) {
            return X.call(this, V, e);
          };
          return (
            (K.source =
              "function(" +
              M +
              `){
` +
              Z +
              "}"),
            K
          );
        }),
        e
      );
    })();
  });
  var Fe = c((Vk, Vs) => {
    "use strict";
    var ue = {},
      Ft = {},
      Mt = [],
      Li = window.Webflow || [],
      gt = window.jQuery,
      ke = gt(window),
      J_ = gt(document),
      Je = gt.isFunction,
      Ve = (ue._ = Ls()),
      qs = (ue.tram = Ri() && gt.tram),
      nn = !1,
      Pi = !1;
    qs.config.hideBackface = !1;
    qs.config.keepInherited = !0;
    ue.define = function (e, t, r) {
      Ft[e] && Ms(Ft[e]);
      var n = (Ft[e] = t(gt, Ve, r) || {});
      return Fs(n), n;
    };
    ue.require = function (e) {
      return Ft[e];
    };
    function Fs(e) {
      ue.env() &&
        (Je(e.design) && ke.on("__wf_design", e.design),
        Je(e.preview) && ke.on("__wf_preview", e.preview)),
        Je(e.destroy) && ke.on("__wf_destroy", e.destroy),
        e.ready && Je(e.ready) && eb(e);
    }
    function eb(e) {
      if (nn) {
        e.ready();
        return;
      }
      Ve.contains(Mt, e.ready) || Mt.push(e.ready);
    }
    function Ms(e) {
      Je(e.design) && ke.off("__wf_design", e.design),
        Je(e.preview) && ke.off("__wf_preview", e.preview),
        Je(e.destroy) && ke.off("__wf_destroy", e.destroy),
        e.ready && Je(e.ready) && tb(e);
    }
    function tb(e) {
      Mt = Ve.filter(Mt, function (t) {
        return t !== e.ready;
      });
    }
    ue.push = function (e) {
      if (nn) {
        Je(e) && e();
        return;
      }
      Li.push(e);
    };
    ue.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var rn = navigator.userAgent.toLowerCase(),
      Ds = (ue.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      rb = (ue.env.chrome =
        /chrome/.test(rn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)),
      nb = (ue.env.ios = /(ipod|iphone|ipad)/.test(rn));
    ue.env.safari = /safari/.test(rn) && !rb && !nb;
    var Ni;
    Ds &&
      J_.on("touchstart mousedown", function (e) {
        Ni = e.target;
      });
    ue.validClick = Ds
      ? function (e) {
          return e === Ni || gt.contains(e, Ni);
        }
      : function () {
          return !0;
        };
    var Gs = "resize.webflow orientationchange.webflow load.webflow",
      ib = "scroll.webflow " + Gs;
    ue.resize = qi(ke, Gs);
    ue.scroll = qi(ke, ib);
    ue.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (i) {
          Ve.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ve.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ue.location = function (e) {
      window.location = e;
    };
    ue.env() && (ue.location = function () {});
    ue.ready = function () {
      (nn = !0), Pi ? ob() : Ve.each(Mt, Ps), Ve.each(Li, Ps), ue.resize.up();
    };
    function Ps(e) {
      Je(e) && e();
    }
    function ob() {
      (Pi = !1), Ve.each(Ft, Fs);
    }
    var It;
    ue.load = function (e) {
      It.then(e);
    };
    function Us() {
      It && (It.reject(), ke.off("load", It.resolve)),
        (It = new gt.Deferred()),
        ke.on("load", It.resolve);
    }
    ue.destroy = function (e) {
      (e = e || {}),
        (Pi = !0),
        ke.triggerHandler("__wf_destroy"),
        e.domready != null && (nn = e.domready),
        Ve.each(Ft, Ms),
        ue.resize.off(),
        ue.scroll.off(),
        ue.redraw.off(),
        (Mt = []),
        (Li = []),
        It.state() === "pending" && Us();
    };
    gt(ue.ready);
    Us();
    Vs.exports = window.Webflow = ue;
  });
  var Hs = c((kk, Bs) => {
    "use strict";
    var ks = Fe();
    ks.define(
      "brand",
      (Bs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (E = !0),
            E &&
              !s &&
              ((l = l || p()),
              g(),
              setTimeout(g, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(l).attr("style", E ? "display: none !important;" : "");
        }
        function p() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(b, _), E[0];
        }
        function g() {
          var E = i.children(o),
            b = E.length && E.get(0) === l,
            _ = ks.env("editor");
          if (b) {
            _ && E.remove();
            return;
          }
          E.length && E.remove(), _ || i.append(l);
        }
        return t;
      })
    );
  });
  var Ws = c((Bk, Xs) => {
    "use strict";
    var Fi = Fe();
    Fi.define(
      "edit",
      (Xs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Fi.env("test") || Fi.env("frame")) && !r.fixture && !ab())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          l = r.load || g,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(s, p).triggerHandler(s);
        function p() {
          u || (/\?edit/.test(a.hash) && l());
        }
        function g() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, p),
            C(function (L) {
              e.ajax({
                url: y("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(L),
              });
            });
        }
        function E(L) {
          return function (q) {
            if (!q) {
              console.error("Could not load editor data");
              return;
            }
            (q.thirdPartyCookiesSupported = L),
              b(A(q.scriptPath), function () {
                window.WebflowEditor(q);
              });
          };
        }
        function b(L, q) {
          e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
            q,
            _
          );
        }
        function _(L, q, P) {
          throw (console.error("Could not load editor script: " + q), P);
        }
        function A(L) {
          return L.indexOf("//") >= 0
            ? L
            : y("https://editor-api.webflow.com" + L);
        }
        function y(L) {
          return L.replace(/([^:])\/\//g, "$1/");
        }
        function C(L) {
          var q = window.document.createElement("iframe");
          (q.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (q.style.display = "none"),
            (q.sandbox = "allow-scripts allow-same-origin");
          var P = function (W) {
            W.data === "WF_third_party_cookies_unsupported"
              ? (w(q, P), L(!1))
              : W.data === "WF_third_party_cookies_supported" &&
                (w(q, P), L(!0));
          };
          (q.onerror = function () {
            w(q, P), L(!1);
          }),
            window.addEventListener("message", P, !1),
            window.document.body.appendChild(q);
        }
        function w(L, q) {
          window.removeEventListener("message", q, !1), L.remove();
        }
        return n;
      })
    );
    function ab() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var zs = c((Hk, js) => {
    "use strict";
    var sb = Fe();
    sb.define(
      "focus-visible",
      (js.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(w) {
            return !!(
              w &&
              w !== document &&
              w.nodeName !== "HTML" &&
              w.nodeName !== "BODY" &&
              "classList" in w &&
              "contains" in w.classList
            );
          }
          function u(w) {
            var L = w.type,
              q = w.tagName;
            return !!(
              (q === "INPUT" && a[L] && !w.readOnly) ||
              (q === "TEXTAREA" && !w.readOnly) ||
              w.isContentEditable
            );
          }
          function l(w) {
            w.getAttribute("data-wf-focus-visible") ||
              w.setAttribute("data-wf-focus-visible", "true");
          }
          function h(w) {
            w.getAttribute("data-wf-focus-visible") &&
              w.removeAttribute("data-wf-focus-visible");
          }
          function p(w) {
            w.metaKey ||
              w.altKey ||
              w.ctrlKey ||
              (s(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function E(w) {
            s(w.target) && (n || u(w.target)) && l(w.target);
          }
          function b(w) {
            s(w.target) &&
              w.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              h(w.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", C),
              document.addEventListener("mousedown", C),
              document.addEventListener("mouseup", C),
              document.addEventListener("pointermove", C),
              document.addEventListener("pointerdown", C),
              document.addEventListener("pointerup", C),
              document.addEventListener("touchmove", C),
              document.addEventListener("touchstart", C),
              document.addEventListener("touchend", C);
          }
          function y() {
            document.removeEventListener("mousemove", C),
              document.removeEventListener("mousedown", C),
              document.removeEventListener("mouseup", C),
              document.removeEventListener("pointermove", C),
              document.removeEventListener("pointerdown", C),
              document.removeEventListener("pointerup", C),
              document.removeEventListener("touchmove", C),
              document.removeEventListener("touchstart", C),
              document.removeEventListener("touchend", C);
          }
          function C(w) {
            (w.target.nodeName && w.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), y());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", _, !0),
            A(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var $s = c((Xk, Ys) => {
    "use strict";
    var Ks = Fe();
    Ks.define(
      "focus",
      (Ys.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ks.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Js = c((Wk, Zs) => {
    "use strict";
    var Mi = window.jQuery,
      et = {},
      on = [],
      Qs = ".w-ix",
      an = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Mi(t).triggerHandler(et.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Mi(t).triggerHandler(et.types.OUTRO));
        },
      };
    et.triggers = {};
    et.types = { INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs };
    et.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Mi.extend(et.triggers, an);
    };
    et.async = function () {
      for (var e in an) {
        var t = an[e];
        an.hasOwnProperty(e) &&
          (et.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    et.async();
    Zs.exports = et;
  });
  var un = c((jk, ru) => {
    "use strict";
    var Di = Js();
    function eu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var ub = window.jQuery,
      sn = {},
      tu = ".w-ix",
      cb = {
        reset: function (e, t) {
          Di.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Di.triggers.intro(e, t), eu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Di.triggers.outro(e, t), eu(t, "COMPONENT_INACTIVE");
        },
      };
    sn.triggers = {};
    sn.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
    ub.extend(sn.triggers, cb);
    ru.exports = sn;
  });
  var nu = c((zk, st) => {
    function Gi(e) {
      return (
        (st.exports = Gi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (st.exports.__esModule = !0),
        (st.exports.default = st.exports),
        Gi(e)
      );
    }
    (st.exports = Gi),
      (st.exports.__esModule = !0),
      (st.exports.default = st.exports);
  });
  var cn = c((Kk, hr) => {
    var lb = nu().default;
    function iu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (iu = function (i) {
        return i ? r : t;
      })(e);
    }
    function fb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (lb(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = iu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (hr.exports = fb),
      (hr.exports.__esModule = !0),
      (hr.exports.default = hr.exports);
  });
  var ou = c((Yk, Er) => {
    function db(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Er.exports = db),
      (Er.exports.__esModule = !0),
      (Er.exports.default = Er.exports);
  });
  var de = c(($k, au) => {
    var ln = function (e) {
      return e && e.Math == Math && e;
    };
    au.exports =
      ln(typeof globalThis == "object" && globalThis) ||
      ln(typeof window == "object" && window) ||
      ln(typeof self == "object" && self) ||
      ln(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Dt = c((Qk, su) => {
    su.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ot = c((Zk, uu) => {
    var pb = Dt();
    uu.exports = !pb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var fn = c((Jk, cu) => {
    var yr = Function.prototype.call;
    cu.exports = yr.bind
      ? yr.bind(yr)
      : function () {
          return yr.apply(yr, arguments);
        };
  });
  var pu = c((du) => {
    "use strict";
    var lu = {}.propertyIsEnumerable,
      fu = Object.getOwnPropertyDescriptor,
      gb = fu && !lu.call({ 1: 2 }, 1);
    du.f = gb
      ? function (t) {
          var r = fu(this, t);
          return !!r && r.enumerable;
        }
      : lu;
  });
  var Ui = c((tB, gu) => {
    gu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Be = c((rB, hu) => {
    var vu = Function.prototype,
      Vi = vu.bind,
      ki = vu.call,
      vb = Vi && Vi.bind(ki);
    hu.exports = Vi
      ? function (e) {
          return e && vb(ki, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return ki.apply(e, arguments);
            }
          );
        };
  });
  var mu = c((nB, yu) => {
    var Eu = Be(),
      hb = Eu({}.toString),
      Eb = Eu("".slice);
    yu.exports = function (e) {
      return Eb(hb(e), 8, -1);
    };
  });
  var bu = c((iB, _u) => {
    var yb = de(),
      mb = Be(),
      _b = Dt(),
      bb = mu(),
      Bi = yb.Object,
      Tb = mb("".split);
    _u.exports = _b(function () {
      return !Bi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return bb(e) == "String" ? Tb(e, "") : Bi(e);
        }
      : Bi;
  });
  var Hi = c((oB, Tu) => {
    var Ib = de(),
      Ob = Ib.TypeError;
    Tu.exports = function (e) {
      if (e == null) throw Ob("Can't call method on " + e);
      return e;
    };
  });
  var mr = c((aB, Iu) => {
    var Ab = bu(),
      wb = Hi();
    Iu.exports = function (e) {
      return Ab(wb(e));
    };
  });
  var tt = c((sB, Ou) => {
    Ou.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Gt = c((uB, Au) => {
    var Sb = tt();
    Au.exports = function (e) {
      return typeof e == "object" ? e !== null : Sb(e);
    };
  });
  var _r = c((cB, wu) => {
    var Xi = de(),
      xb = tt(),
      Cb = function (e) {
        return xb(e) ? e : void 0;
      };
    wu.exports = function (e, t) {
      return arguments.length < 2 ? Cb(Xi[e]) : Xi[e] && Xi[e][t];
    };
  });
  var xu = c((lB, Su) => {
    var Rb = Be();
    Su.exports = Rb({}.isPrototypeOf);
  });
  var Ru = c((fB, Cu) => {
    var Nb = _r();
    Cu.exports = Nb("navigator", "userAgent") || "";
  });
  var Du = c((dB, Mu) => {
    var Fu = de(),
      Wi = Ru(),
      Nu = Fu.process,
      Lu = Fu.Deno,
      Pu = (Nu && Nu.versions) || (Lu && Lu.version),
      qu = Pu && Pu.v8,
      He,
      dn;
    qu &&
      ((He = qu.split(".")),
      (dn = He[0] > 0 && He[0] < 4 ? 1 : +(He[0] + He[1])));
    !dn &&
      Wi &&
      ((He = Wi.match(/Edge\/(\d+)/)),
      (!He || He[1] >= 74) &&
        ((He = Wi.match(/Chrome\/(\d+)/)), He && (dn = +He[1])));
    Mu.exports = dn;
  });
  var ji = c((pB, Uu) => {
    var Gu = Du(),
      Lb = Dt();
    Uu.exports =
      !!Object.getOwnPropertySymbols &&
      !Lb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Gu && Gu < 41)
        );
      });
  });
  var zi = c((gB, Vu) => {
    var Pb = ji();
    Vu.exports = Pb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ki = c((vB, ku) => {
    var qb = de(),
      Fb = _r(),
      Mb = tt(),
      Db = xu(),
      Gb = zi(),
      Ub = qb.Object;
    ku.exports = Gb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Fb("Symbol");
          return Mb(t) && Db(t.prototype, Ub(e));
        };
  });
  var Hu = c((hB, Bu) => {
    var Vb = de(),
      kb = Vb.String;
    Bu.exports = function (e) {
      try {
        return kb(e);
      } catch {
        return "Object";
      }
    };
  });
  var Wu = c((EB, Xu) => {
    var Bb = de(),
      Hb = tt(),
      Xb = Hu(),
      Wb = Bb.TypeError;
    Xu.exports = function (e) {
      if (Hb(e)) return e;
      throw Wb(Xb(e) + " is not a function");
    };
  });
  var zu = c((yB, ju) => {
    var jb = Wu();
    ju.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : jb(r);
    };
  });
  var Yu = c((mB, Ku) => {
    var zb = de(),
      Yi = fn(),
      $i = tt(),
      Qi = Gt(),
      Kb = zb.TypeError;
    Ku.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e)))) ||
        ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
        (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
      )
        return n;
      throw Kb("Can't convert object to primitive value");
    };
  });
  var Qu = c((_B, $u) => {
    $u.exports = !1;
  });
  var pn = c((bB, Ju) => {
    var Zu = de(),
      Yb = Object.defineProperty;
    Ju.exports = function (e, t) {
      try {
        Yb(Zu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Zu[e] = t;
      }
      return t;
    };
  });
  var gn = c((TB, tc) => {
    var $b = de(),
      Qb = pn(),
      ec = "__core-js_shared__",
      Zb = $b[ec] || Qb(ec, {});
    tc.exports = Zb;
  });
  var Zi = c((IB, nc) => {
    var Jb = Qu(),
      rc = gn();
    (nc.exports = function (e, t) {
      return rc[e] || (rc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Jb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var oc = c((OB, ic) => {
    var eT = de(),
      tT = Hi(),
      rT = eT.Object;
    ic.exports = function (e) {
      return rT(tT(e));
    };
  });
  var vt = c((AB, ac) => {
    var nT = Be(),
      iT = oc(),
      oT = nT({}.hasOwnProperty);
    ac.exports =
      Object.hasOwn ||
      function (t, r) {
        return oT(iT(t), r);
      };
  });
  var Ji = c((wB, sc) => {
    var aT = Be(),
      sT = 0,
      uT = Math.random(),
      cT = aT((1).toString);
    sc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + cT(++sT + uT, 36);
    };
  });
  var eo = c((SB, dc) => {
    var lT = de(),
      fT = Zi(),
      uc = vt(),
      dT = Ji(),
      cc = ji(),
      fc = zi(),
      Ut = fT("wks"),
      At = lT.Symbol,
      lc = At && At.for,
      pT = fc ? At : (At && At.withoutSetter) || dT;
    dc.exports = function (e) {
      if (!uc(Ut, e) || !(cc || typeof Ut[e] == "string")) {
        var t = "Symbol." + e;
        cc && uc(At, e)
          ? (Ut[e] = At[e])
          : fc && lc
          ? (Ut[e] = lc(t))
          : (Ut[e] = pT(t));
      }
      return Ut[e];
    };
  });
  var hc = c((xB, vc) => {
    var gT = de(),
      vT = fn(),
      pc = Gt(),
      gc = Ki(),
      hT = zu(),
      ET = Yu(),
      yT = eo(),
      mT = gT.TypeError,
      _T = yT("toPrimitive");
    vc.exports = function (e, t) {
      if (!pc(e) || gc(e)) return e;
      var r = hT(e, _T),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = vT(r, e, t)), !pc(n) || gc(n))
        )
          return n;
        throw mT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), ET(e, t);
    };
  });
  var to = c((CB, Ec) => {
    var bT = hc(),
      TT = Ki();
    Ec.exports = function (e) {
      var t = bT(e, "string");
      return TT(t) ? t : t + "";
    };
  });
  var no = c((RB, mc) => {
    var IT = de(),
      yc = Gt(),
      ro = IT.document,
      OT = yc(ro) && yc(ro.createElement);
    mc.exports = function (e) {
      return OT ? ro.createElement(e) : {};
    };
  });
  var io = c((NB, _c) => {
    var AT = Ot(),
      wT = Dt(),
      ST = no();
    _c.exports =
      !AT &&
      !wT(function () {
        return (
          Object.defineProperty(ST("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var oo = c((Tc) => {
    var xT = Ot(),
      CT = fn(),
      RT = pu(),
      NT = Ui(),
      LT = mr(),
      PT = to(),
      qT = vt(),
      FT = io(),
      bc = Object.getOwnPropertyDescriptor;
    Tc.f = xT
      ? bc
      : function (t, r) {
          if (((t = LT(t)), (r = PT(r)), FT))
            try {
              return bc(t, r);
            } catch {}
          if (qT(t, r)) return NT(!CT(RT.f, t, r), t[r]);
        };
  });
  var br = c((PB, Oc) => {
    var Ic = de(),
      MT = Gt(),
      DT = Ic.String,
      GT = Ic.TypeError;
    Oc.exports = function (e) {
      if (MT(e)) return e;
      throw GT(DT(e) + " is not an object");
    };
  });
  var Tr = c((Sc) => {
    var UT = de(),
      VT = Ot(),
      kT = io(),
      Ac = br(),
      BT = to(),
      HT = UT.TypeError,
      wc = Object.defineProperty;
    Sc.f = VT
      ? wc
      : function (t, r, n) {
          if ((Ac(t), (r = BT(r)), Ac(n), kT))
            try {
              return wc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw HT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var vn = c((FB, xc) => {
    var XT = Ot(),
      WT = Tr(),
      jT = Ui();
    xc.exports = XT
      ? function (e, t, r) {
          return WT.f(e, t, jT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var so = c((MB, Cc) => {
    var zT = Be(),
      KT = tt(),
      ao = gn(),
      YT = zT(Function.toString);
    KT(ao.inspectSource) ||
      (ao.inspectSource = function (e) {
        return YT(e);
      });
    Cc.exports = ao.inspectSource;
  });
  var Lc = c((DB, Nc) => {
    var $T = de(),
      QT = tt(),
      ZT = so(),
      Rc = $T.WeakMap;
    Nc.exports = QT(Rc) && /native code/.test(ZT(Rc));
  });
  var uo = c((GB, qc) => {
    var JT = Zi(),
      eI = Ji(),
      Pc = JT("keys");
    qc.exports = function (e) {
      return Pc[e] || (Pc[e] = eI(e));
    };
  });
  var hn = c((UB, Fc) => {
    Fc.exports = {};
  });
  var kc = c((VB, Vc) => {
    var tI = Lc(),
      Uc = de(),
      co = Be(),
      rI = Gt(),
      nI = vn(),
      lo = vt(),
      fo = gn(),
      iI = uo(),
      oI = hn(),
      Mc = "Object already initialized",
      go = Uc.TypeError,
      aI = Uc.WeakMap,
      En,
      Ir,
      yn,
      sI = function (e) {
        return yn(e) ? Ir(e) : En(e, {});
      },
      uI = function (e) {
        return function (t) {
          var r;
          if (!rI(t) || (r = Ir(t)).type !== e)
            throw go("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    tI || fo.state
      ? ((ht = fo.state || (fo.state = new aI())),
        (Dc = co(ht.get)),
        (po = co(ht.has)),
        (Gc = co(ht.set)),
        (En = function (e, t) {
          if (po(ht, e)) throw new go(Mc);
          return (t.facade = e), Gc(ht, e, t), t;
        }),
        (Ir = function (e) {
          return Dc(ht, e) || {};
        }),
        (yn = function (e) {
          return po(ht, e);
        }))
      : ((wt = iI("state")),
        (oI[wt] = !0),
        (En = function (e, t) {
          if (lo(e, wt)) throw new go(Mc);
          return (t.facade = e), nI(e, wt, t), t;
        }),
        (Ir = function (e) {
          return lo(e, wt) ? e[wt] : {};
        }),
        (yn = function (e) {
          return lo(e, wt);
        }));
    var ht, Dc, po, Gc, wt;
    Vc.exports = { set: En, get: Ir, has: yn, enforce: sI, getterFor: uI };
  });
  var Xc = c((kB, Hc) => {
    var vo = Ot(),
      cI = vt(),
      Bc = Function.prototype,
      lI = vo && Object.getOwnPropertyDescriptor,
      ho = cI(Bc, "name"),
      fI = ho && function () {}.name === "something",
      dI = ho && (!vo || (vo && lI(Bc, "name").configurable));
    Hc.exports = { EXISTS: ho, PROPER: fI, CONFIGURABLE: dI };
  });
  var Yc = c((BB, Kc) => {
    var pI = de(),
      Wc = tt(),
      gI = vt(),
      jc = vn(),
      vI = pn(),
      hI = so(),
      zc = kc(),
      EI = Xc().CONFIGURABLE,
      yI = zc.get,
      mI = zc.enforce,
      _I = String(String).split("String");
    (Kc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Wc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!gI(r, "name") || (EI && r.name !== s)) && jc(r, "name", s),
          (u = mI(r)),
          u.source || (u.source = _I.join(typeof s == "string" ? s : ""))),
        e === pI)
      ) {
        o ? (e[t] = r) : vI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : jc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Wc(this) && yI(this).source) || hI(this);
    });
  });
  var Eo = c((HB, $c) => {
    var bI = Math.ceil,
      TI = Math.floor;
    $c.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? TI : bI)(t);
    };
  });
  var Zc = c((XB, Qc) => {
    var II = Eo(),
      OI = Math.max,
      AI = Math.min;
    Qc.exports = function (e, t) {
      var r = II(e);
      return r < 0 ? OI(r + t, 0) : AI(r, t);
    };
  });
  var el = c((WB, Jc) => {
    var wI = Eo(),
      SI = Math.min;
    Jc.exports = function (e) {
      return e > 0 ? SI(wI(e), 9007199254740991) : 0;
    };
  });
  var rl = c((jB, tl) => {
    var xI = el();
    tl.exports = function (e) {
      return xI(e.length);
    };
  });
  var yo = c((zB, il) => {
    var CI = mr(),
      RI = Zc(),
      NI = rl(),
      nl = function (e) {
        return function (t, r, n) {
          var i = CI(t),
            o = NI(i),
            a = RI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    il.exports = { includes: nl(!0), indexOf: nl(!1) };
  });
  var _o = c((KB, al) => {
    var LI = Be(),
      mo = vt(),
      PI = mr(),
      qI = yo().indexOf,
      FI = hn(),
      ol = LI([].push);
    al.exports = function (e, t) {
      var r = PI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !mo(FI, o) && mo(r, o) && ol(i, o);
      for (; t.length > n; ) mo(r, (o = t[n++])) && (~qI(i, o) || ol(i, o));
      return i;
    };
  });
  var mn = c((YB, sl) => {
    sl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var cl = c((ul) => {
    var MI = _o(),
      DI = mn(),
      GI = DI.concat("length", "prototype");
    ul.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return MI(t, GI);
      };
  });
  var fl = c((ll) => {
    ll.f = Object.getOwnPropertySymbols;
  });
  var pl = c((ZB, dl) => {
    var UI = _r(),
      VI = Be(),
      kI = cl(),
      BI = fl(),
      HI = br(),
      XI = VI([].concat);
    dl.exports =
      UI("Reflect", "ownKeys") ||
      function (t) {
        var r = kI.f(HI(t)),
          n = BI.f;
        return n ? XI(r, n(t)) : r;
      };
  });
  var vl = c((JB, gl) => {
    var WI = vt(),
      jI = pl(),
      zI = oo(),
      KI = Tr();
    gl.exports = function (e, t) {
      for (var r = jI(t), n = KI.f, i = zI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        WI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var El = c((e5, hl) => {
    var YI = Dt(),
      $I = tt(),
      QI = /#|\.prototype\./,
      Or = function (e, t) {
        var r = JI[ZI(e)];
        return r == t0 ? !0 : r == e0 ? !1 : $I(t) ? YI(t) : !!t;
      },
      ZI = (Or.normalize = function (e) {
        return String(e).replace(QI, ".").toLowerCase();
      }),
      JI = (Or.data = {}),
      e0 = (Or.NATIVE = "N"),
      t0 = (Or.POLYFILL = "P");
    hl.exports = Or;
  });
  var ml = c((t5, yl) => {
    var bo = de(),
      r0 = oo().f,
      n0 = vn(),
      i0 = Yc(),
      o0 = pn(),
      a0 = vl(),
      s0 = El();
    yl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        l,
        h;
      if (
        (n
          ? (a = bo)
          : i
          ? (a = bo[r] || o0(r, {}))
          : (a = (bo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((l = t[s]),
            e.noTargetGet ? ((h = r0(a, s)), (u = h && h.value)) : (u = a[s]),
            (o = s0(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof l == typeof u) continue;
            a0(l, u);
          }
          (e.sham || (u && u.sham)) && n0(l, "sham", !0), i0(a, s, l, e);
        }
    };
  });
  var bl = c((r5, _l) => {
    var u0 = _o(),
      c0 = mn();
    _l.exports =
      Object.keys ||
      function (t) {
        return u0(t, c0);
      };
  });
  var Il = c((n5, Tl) => {
    var l0 = Ot(),
      f0 = Tr(),
      d0 = br(),
      p0 = mr(),
      g0 = bl();
    Tl.exports = l0
      ? Object.defineProperties
      : function (t, r) {
          d0(t);
          for (var n = p0(r), i = g0(r), o = i.length, a = 0, s; o > a; )
            f0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Al = c((i5, Ol) => {
    var v0 = _r();
    Ol.exports = v0("document", "documentElement");
  });
  var Pl = c((o5, Ll) => {
    var h0 = br(),
      E0 = Il(),
      wl = mn(),
      y0 = hn(),
      m0 = Al(),
      _0 = no(),
      b0 = uo(),
      Sl = ">",
      xl = "<",
      Io = "prototype",
      Oo = "script",
      Rl = b0("IE_PROTO"),
      To = function () {},
      Nl = function (e) {
        return xl + Oo + Sl + e + xl + "/" + Oo + Sl;
      },
      Cl = function (e) {
        e.write(Nl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      T0 = function () {
        var e = _0("iframe"),
          t = "java" + Oo + ":",
          r;
        return (
          (e.style.display = "none"),
          m0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Nl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      _n,
      bn = function () {
        try {
          _n = new ActiveXObject("htmlfile");
        } catch {}
        bn =
          typeof document < "u"
            ? document.domain && _n
              ? Cl(_n)
              : T0()
            : Cl(_n);
        for (var e = wl.length; e--; ) delete bn[Io][wl[e]];
        return bn();
      };
    y0[Rl] = !0;
    Ll.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((To[Io] = h0(t)), (n = new To()), (To[Io] = null), (n[Rl] = t))
            : (n = bn()),
          r === void 0 ? n : E0(n, r)
        );
      };
  });
  var Fl = c((a5, ql) => {
    var I0 = eo(),
      O0 = Pl(),
      A0 = Tr(),
      Ao = I0("unscopables"),
      wo = Array.prototype;
    wo[Ao] == null && A0.f(wo, Ao, { configurable: !0, value: O0(null) });
    ql.exports = function (e) {
      wo[Ao][e] = !0;
    };
  });
  var Ml = c(() => {
    "use strict";
    var w0 = ml(),
      S0 = yo().includes,
      x0 = Fl();
    w0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return S0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    x0("includes");
  });
  var Gl = c((c5, Dl) => {
    var C0 = de(),
      R0 = Be();
    Dl.exports = function (e, t) {
      return R0(C0[e].prototype[t]);
    };
  });
  var Vl = c((l5, Ul) => {
    Ml();
    var N0 = Gl();
    Ul.exports = N0("Array", "includes");
  });
  var Bl = c((f5, kl) => {
    var L0 = Vl();
    kl.exports = L0;
  });
  var Xl = c((d5, Hl) => {
    var P0 = Bl();
    Hl.exports = P0;
  });
  var So = c((p5, Wl) => {
    var q0 =
      typeof global == "object" && global && global.Object === Object && global;
    Wl.exports = q0;
  });
  var Xe = c((g5, jl) => {
    var F0 = So(),
      M0 = typeof self == "object" && self && self.Object === Object && self,
      D0 = F0 || M0 || Function("return this")();
    jl.exports = D0;
  });
  var Vt = c((v5, zl) => {
    var G0 = Xe(),
      U0 = G0.Symbol;
    zl.exports = U0;
  });
  var Ql = c((h5, $l) => {
    var Kl = Vt(),
      Yl = Object.prototype,
      V0 = Yl.hasOwnProperty,
      k0 = Yl.toString,
      Ar = Kl ? Kl.toStringTag : void 0;
    function B0(e) {
      var t = V0.call(e, Ar),
        r = e[Ar];
      try {
        e[Ar] = void 0;
        var n = !0;
      } catch {}
      var i = k0.call(e);
      return n && (t ? (e[Ar] = r) : delete e[Ar]), i;
    }
    $l.exports = B0;
  });
  var Jl = c((E5, Zl) => {
    var H0 = Object.prototype,
      X0 = H0.toString;
    function W0(e) {
      return X0.call(e);
    }
    Zl.exports = W0;
  });
  var Et = c((y5, rf) => {
    var ef = Vt(),
      j0 = Ql(),
      z0 = Jl(),
      K0 = "[object Null]",
      Y0 = "[object Undefined]",
      tf = ef ? ef.toStringTag : void 0;
    function $0(e) {
      return e == null
        ? e === void 0
          ? Y0
          : K0
        : tf && tf in Object(e)
        ? j0(e)
        : z0(e);
    }
    rf.exports = $0;
  });
  var xo = c((m5, nf) => {
    function Q0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    nf.exports = Q0;
  });
  var Co = c((_5, of) => {
    var Z0 = xo(),
      J0 = Z0(Object.getPrototypeOf, Object);
    of.exports = J0;
  });
  var ut = c((b5, af) => {
    function eO(e) {
      return e != null && typeof e == "object";
    }
    af.exports = eO;
  });
  var Ro = c((T5, uf) => {
    var tO = Et(),
      rO = Co(),
      nO = ut(),
      iO = "[object Object]",
      oO = Function.prototype,
      aO = Object.prototype,
      sf = oO.toString,
      sO = aO.hasOwnProperty,
      uO = sf.call(Object);
    function cO(e) {
      if (!nO(e) || tO(e) != iO) return !1;
      var t = rO(e);
      if (t === null) return !0;
      var r = sO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && sf.call(r) == uO;
    }
    uf.exports = cO;
  });
  var cf = c((No) => {
    "use strict";
    Object.defineProperty(No, "__esModule", { value: !0 });
    No.default = lO;
    function lO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var lf = c((Po, Lo) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    var fO = cf(),
      dO = pO(fO);
    function pO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var kt;
    typeof self < "u"
      ? (kt = self)
      : typeof window < "u"
      ? (kt = window)
      : typeof global < "u"
      ? (kt = global)
      : typeof Lo < "u"
      ? (kt = Lo)
      : (kt = Function("return this")());
    var gO = (0, dO.default)(kt);
    Po.default = gO;
  });
  var qo = c((wr) => {
    "use strict";
    wr.__esModule = !0;
    wr.ActionTypes = void 0;
    wr.default = gf;
    var vO = Ro(),
      hO = pf(vO),
      EO = lf(),
      ff = pf(EO);
    function pf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var df = (wr.ActionTypes = { INIT: "@@redux/INIT" });
    function gf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(gf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function h() {
        return o;
      }
      function p(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          l(),
          s.push(_),
          function () {
            if (A) {
              (A = !1), l();
              var C = s.indexOf(_);
              s.splice(C, 1);
            }
          }
        );
      }
      function g(_) {
        if (!(0, hO.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, _));
        } finally {
          u = !1;
        }
        for (var A = (a = s), y = 0; y < A.length; y++) A[y]();
        return _;
      }
      function E(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), g({ type: df.INIT });
      }
      function b() {
        var _,
          A = p;
        return (
          (_ = {
            subscribe: function (C) {
              if (typeof C != "object")
                throw new TypeError("Expected the observer to be an object.");
              function w() {
                C.next && C.next(h());
              }
              w();
              var L = A(w);
              return { unsubscribe: L };
            },
          }),
          (_[ff.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        g({ type: df.INIT }),
        (n = { dispatch: g, subscribe: p, getState: h, replaceReducer: E }),
        (n[ff.default] = b),
        n
      );
    }
  });
  var Mo = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = yO;
    function yO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ef = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = IO;
    var vf = qo(),
      mO = Ro(),
      w5 = hf(mO),
      _O = Mo(),
      S5 = hf(_O);
    function hf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function bO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function TO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: vf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                vf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function IO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        TO(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var g = !1, E = {}, b = 0; b < o.length; b++) {
          var _ = o[b],
            A = r[_],
            y = l[_],
            C = A(y, h);
          if (typeof C > "u") {
            var w = bO(_, h);
            throw new Error(w);
          }
          (E[_] = C), (g = g || C !== y);
        }
        return g ? E : l;
      };
    }
  });
  var mf = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = OO;
    function yf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function OO(e, t) {
      if (typeof e == "function") return yf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = yf(a, t));
      }
      return n;
    }
  });
  var Vo = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = AO;
    function AO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var _f = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    var wO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    ko.default = RO;
    var SO = Vo(),
      xO = CO(SO);
    function CO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function RO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            l = [],
            h = {
              getState: s.getState,
              dispatch: function (g) {
                return u(g);
              },
            };
          return (
            (l = t.map(function (p) {
              return p(h);
            })),
            (u = xO.default.apply(void 0, l)(s.dispatch)),
            wO({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Bo = c((Me) => {
    "use strict";
    Me.__esModule = !0;
    Me.compose =
      Me.applyMiddleware =
      Me.bindActionCreators =
      Me.combineReducers =
      Me.createStore =
        void 0;
    var NO = qo(),
      LO = Bt(NO),
      PO = Ef(),
      qO = Bt(PO),
      FO = mf(),
      MO = Bt(FO),
      DO = _f(),
      GO = Bt(DO),
      UO = Vo(),
      VO = Bt(UO),
      kO = Mo(),
      L5 = Bt(kO);
    function Bt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Me.createStore = LO.default;
    Me.combineReducers = qO.default;
    Me.bindActionCreators = MO.default;
    Me.applyMiddleware = GO.default;
    Me.compose = VO.default;
  });
  var We,
    Ho,
    rt,
    BO,
    HO,
    Tn,
    XO,
    Xo = fe(() => {
      "use strict";
      (We = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ho = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (rt = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (BO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (HO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Tn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (XO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ne,
    WO,
    In = fe(() => {
      "use strict";
      (Ne = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (WO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var jO,
    bf = fe(() => {
      "use strict";
      jO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    Wo,
    Tf = fe(() => {
      "use strict";
      In();
      ({
        TRANSFORM_MOVE: zO,
        TRANSFORM_SCALE: KO,
        TRANSFORM_ROTATE: YO,
        TRANSFORM_SKEW: $O,
        STYLE_SIZE: QO,
        STYLE_FILTER: ZO,
        STYLE_FONT_VARIATION: JO,
      } = Ne),
        (Wo = {
          [zO]: !0,
          [KO]: !0,
          [YO]: !0,
          [$O]: !0,
          [QO]: !0,
          [ZO]: !0,
          [JO]: !0,
        });
    });
  var ye = {};
  Re(ye, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => hA,
    IX2_ANIMATION_FRAME_CHANGED: () => lA,
    IX2_CLEAR_REQUESTED: () => sA,
    IX2_ELEMENT_STATE_CHANGED: () => vA,
    IX2_EVENT_LISTENER_ADDED: () => uA,
    IX2_EVENT_STATE_CHANGED: () => cA,
    IX2_INSTANCE_ADDED: () => dA,
    IX2_INSTANCE_REMOVED: () => gA,
    IX2_INSTANCE_STARTED: () => pA,
    IX2_MEDIA_QUERIES_DEFINED: () => yA,
    IX2_PARAMETER_CHANGED: () => fA,
    IX2_PLAYBACK_REQUESTED: () => oA,
    IX2_PREVIEW_REQUESTED: () => iA,
    IX2_RAW_DATA_IMPORTED: () => eA,
    IX2_SESSION_INITIALIZED: () => tA,
    IX2_SESSION_STARTED: () => rA,
    IX2_SESSION_STOPPED: () => nA,
    IX2_STOP_REQUESTED: () => aA,
    IX2_TEST_FRAME_RENDERED: () => mA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => EA,
  });
  var eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    gA,
    vA,
    hA,
    EA,
    yA,
    mA,
    If = fe(() => {
      "use strict";
      (eA = "IX2_RAW_DATA_IMPORTED"),
        (tA = "IX2_SESSION_INITIALIZED"),
        (rA = "IX2_SESSION_STARTED"),
        (nA = "IX2_SESSION_STOPPED"),
        (iA = "IX2_PREVIEW_REQUESTED"),
        (oA = "IX2_PLAYBACK_REQUESTED"),
        (aA = "IX2_STOP_REQUESTED"),
        (sA = "IX2_CLEAR_REQUESTED"),
        (uA = "IX2_EVENT_LISTENER_ADDED"),
        (cA = "IX2_EVENT_STATE_CHANGED"),
        (lA = "IX2_ANIMATION_FRAME_CHANGED"),
        (fA = "IX2_PARAMETER_CHANGED"),
        (dA = "IX2_INSTANCE_ADDED"),
        (pA = "IX2_INSTANCE_STARTED"),
        (gA = "IX2_INSTANCE_REMOVED"),
        (vA = "IX2_ELEMENT_STATE_CHANGED"),
        (hA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (EA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (yA = "IX2_MEDIA_QUERIES_DEFINED"),
        (mA = "IX2_TEST_FRAME_RENDERED");
    });
  var Ie = {};
  Re(Ie, {
    ABSTRACT_NODE: () => Ew,
    AUTO: () => aw,
    BACKGROUND: () => ew,
    BACKGROUND_COLOR: () => JA,
    BAR_DELIMITER: () => cw,
    BORDER_COLOR: () => tw,
    BOUNDARY_SELECTOR: () => OA,
    CHILDREN: () => lw,
    COLON_DELIMITER: () => uw,
    COLOR: () => rw,
    COMMA_DELIMITER: () => sw,
    CONFIG_UNIT: () => LA,
    CONFIG_VALUE: () => xA,
    CONFIG_X_UNIT: () => CA,
    CONFIG_X_VALUE: () => AA,
    CONFIG_Y_UNIT: () => RA,
    CONFIG_Y_VALUE: () => wA,
    CONFIG_Z_UNIT: () => NA,
    CONFIG_Z_VALUE: () => SA,
    DISPLAY: () => nw,
    FILTER: () => YA,
    FLEX: () => iw,
    FONT_VARIATION_SETTINGS: () => $A,
    HEIGHT: () => ZA,
    HTML_ELEMENT: () => vw,
    IMMEDIATE_CHILDREN: () => fw,
    IX2_ID_DELIMITER: () => _A,
    OPACITY: () => KA,
    PARENT: () => pw,
    PLAIN_OBJECT: () => hw,
    PRESERVE_3D: () => gw,
    RENDER_GENERAL: () => mw,
    RENDER_PLUGIN: () => bw,
    RENDER_STYLE: () => _w,
    RENDER_TRANSFORM: () => yw,
    ROTATE_X: () => BA,
    ROTATE_Y: () => HA,
    ROTATE_Z: () => XA,
    SCALE_3D: () => kA,
    SCALE_X: () => GA,
    SCALE_Y: () => UA,
    SCALE_Z: () => VA,
    SIBLINGS: () => dw,
    SKEW: () => WA,
    SKEW_X: () => jA,
    SKEW_Y: () => zA,
    TRANSFORM: () => PA,
    TRANSLATE_3D: () => DA,
    TRANSLATE_X: () => qA,
    TRANSLATE_Y: () => FA,
    TRANSLATE_Z: () => MA,
    WF_PAGE: () => bA,
    WIDTH: () => QA,
    WILL_CHANGE: () => ow,
    W_MOD_IX: () => IA,
    W_MOD_JS: () => TA,
  });
  var _A,
    bA,
    TA,
    IA,
    OA,
    AA,
    wA,
    SA,
    xA,
    CA,
    RA,
    NA,
    LA,
    PA,
    qA,
    FA,
    MA,
    DA,
    GA,
    UA,
    VA,
    kA,
    BA,
    HA,
    XA,
    WA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    gw,
    vw,
    hw,
    Ew,
    yw,
    mw,
    _w,
    bw,
    Of = fe(() => {
      "use strict";
      (_A = "|"),
        (bA = "data-wf-page"),
        (TA = "w-mod-js"),
        (IA = "w-mod-ix"),
        (OA = ".w-dyn-item"),
        (AA = "xValue"),
        (wA = "yValue"),
        (SA = "zValue"),
        (xA = "value"),
        (CA = "xUnit"),
        (RA = "yUnit"),
        (NA = "zUnit"),
        (LA = "unit"),
        (PA = "transform"),
        (qA = "translateX"),
        (FA = "translateY"),
        (MA = "translateZ"),
        (DA = "translate3d"),
        (GA = "scaleX"),
        (UA = "scaleY"),
        (VA = "scaleZ"),
        (kA = "scale3d"),
        (BA = "rotateX"),
        (HA = "rotateY"),
        (XA = "rotateZ"),
        (WA = "skew"),
        (jA = "skewX"),
        (zA = "skewY"),
        (KA = "opacity"),
        (YA = "filter"),
        ($A = "font-variation-settings"),
        (QA = "width"),
        (ZA = "height"),
        (JA = "backgroundColor"),
        (ew = "background"),
        (tw = "borderColor"),
        (rw = "color"),
        (nw = "display"),
        (iw = "flex"),
        (ow = "willChange"),
        (aw = "AUTO"),
        (sw = ","),
        (uw = ":"),
        (cw = "|"),
        (lw = "CHILDREN"),
        (fw = "IMMEDIATE_CHILDREN"),
        (dw = "SIBLINGS"),
        (pw = "PARENT"),
        (gw = "preserve-3d"),
        (vw = "HTML_ELEMENT"),
        (hw = "PLAIN_OBJECT"),
        (Ew = "ABSTRACT_NODE"),
        (yw = "RENDER_TRANSFORM"),
        (mw = "RENDER_GENERAL"),
        (_w = "RENDER_STYLE"),
        (bw = "RENDER_PLUGIN");
    });
  var Af = {};
  Re(Af, {
    ActionAppliesTo: () => WO,
    ActionTypeConsts: () => Ne,
    EventAppliesTo: () => Ho,
    EventBasedOn: () => rt,
    EventContinuousMouseAxes: () => BO,
    EventLimitAffectedElements: () => HO,
    EventTypeConsts: () => We,
    IX2EngineActionTypes: () => ye,
    IX2EngineConstants: () => Ie,
    InteractionTypeConsts: () => jO,
    QuickEffectDirectionConsts: () => XO,
    QuickEffectIds: () => Tn,
    ReducedMotionTypes: () => Wo,
  });
  var Le = fe(() => {
    "use strict";
    Xo();
    In();
    bf();
    Tf();
    If();
    Of();
    In();
    Xo();
  });
  var Tw,
    wf,
    Sf = fe(() => {
      "use strict";
      Le();
      ({ IX2_RAW_DATA_IMPORTED: Tw } = ye),
        (wf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Tw:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Ht = c((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    var Iw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ge.clone = An;
    ge.addLast = Rf;
    ge.addFirst = Nf;
    ge.removeLast = Lf;
    ge.removeFirst = Pf;
    ge.insert = qf;
    ge.removeAt = Ff;
    ge.replaceAt = Mf;
    ge.getIn = wn;
    ge.set = Sn;
    ge.setIn = xn;
    ge.update = Gf;
    ge.updateIn = Uf;
    ge.merge = Vf;
    ge.mergeDeep = kf;
    ge.mergeIn = Bf;
    ge.omit = Hf;
    ge.addDefaults = Xf;
    var xf = "INVALID_ARGS";
    function Cf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Ow = {}.hasOwnProperty;
    function An(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Pe(e, t, r) {
      var n = r;
      n == null && Cf(xf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var h = jo(l);
          if (h.length)
            for (var p = 0; p <= h.length; p++) {
              var g = h[p];
              if (!(e && n[g] !== void 0)) {
                var E = l[g];
                t && On(n[g]) && On(E) && (E = Pe(e, t, n[g], E)),
                  !(E === void 0 || E === n[g]) &&
                    (i || ((i = !0), (n = An(n))), (n[g] = E));
              }
            }
        }
      }
      return n;
    }
    function On(e) {
      var t = typeof e > "u" ? "undefined" : Iw(e);
      return e != null && (t === "object" || t === "function");
    }
    function Rf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Nf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Lf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Pf(e) {
      return e.length ? e.slice(1) : e;
    }
    function qf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ff(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Mf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function wn(e, t) {
      if ((!Array.isArray(t) && Cf(xf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Sn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = An(i);
      return (o[t] = r), o;
    }
    function Df(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          On(e) && On(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Df(a, t, r, n + 1);
      }
      return Sn(e, o, i);
    }
    function xn(e, t, r) {
      return t.length ? Df(e, t, r, 0) : r;
    }
    function Gf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Sn(e, t, i);
    }
    function Uf(e, t, r) {
      var n = wn(e, t),
        i = r(n);
      return xn(e, t, i);
    }
    function Vf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Pe(!1, !1, e, t, r, n, i, o);
    }
    function kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Pe(!1, !0, e, t, r, n, i, o);
    }
    function Bf(e, t, r, n, i, o, a) {
      var s = wn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          h = Array(l > 7 ? l - 7 : 0),
          p = 7;
        p < l;
        p++
      )
        h[p - 7] = arguments[p];
      return (
        h.length
          ? (u = Pe.call.apply(Pe, [null, !1, !1, s, r, n, i, o, a].concat(h)))
          : (u = Pe(!1, !1, s, r, n, i, o, a)),
        xn(e, t, u)
      );
    }
    function Hf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Ow.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Pe(!0, !1, e, t, r, n, i, o);
    }
    var Aw = {
      clone: An,
      addLast: Rf,
      addFirst: Nf,
      removeLast: Lf,
      removeFirst: Pf,
      insert: qf,
      removeAt: Ff,
      replaceAt: Mf,
      getIn: wn,
      set: Sn,
      setIn: xn,
      update: Gf,
      updateIn: Uf,
      merge: Vf,
      mergeDeep: kf,
      mergeIn: Bf,
      omit: Hf,
      addDefaults: Xf,
    };
    ge.default = Aw;
  });
  var jf,
    ww,
    Sw,
    xw,
    Cw,
    Rw,
    Wf,
    zf,
    Kf = fe(() => {
      "use strict";
      Le();
      (jf = oe(Ht())),
        ({
          IX2_PREVIEW_REQUESTED: ww,
          IX2_PLAYBACK_REQUESTED: Sw,
          IX2_STOP_REQUESTED: xw,
          IX2_CLEAR_REQUESTED: Cw,
        } = ye),
        (Rw = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Wf = Object.create(null, {
          [ww]: { value: "preview" },
          [Sw]: { value: "playback" },
          [xw]: { value: "stop" },
          [Cw]: { value: "clear" },
        })),
        (zf = (e = Rw, t) => {
          if (t.type in Wf) {
            let r = [Wf[t.type]];
            return (0, jf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var we,
    Nw,
    Lw,
    Pw,
    qw,
    Fw,
    Mw,
    Dw,
    Gw,
    Uw,
    Vw,
    Yf,
    kw,
    $f,
    Qf = fe(() => {
      "use strict";
      Le();
      (we = oe(Ht())),
        ({
          IX2_SESSION_INITIALIZED: Nw,
          IX2_SESSION_STARTED: Lw,
          IX2_TEST_FRAME_RENDERED: Pw,
          IX2_SESSION_STOPPED: qw,
          IX2_EVENT_LISTENER_ADDED: Fw,
          IX2_EVENT_STATE_CHANGED: Mw,
          IX2_ANIMATION_FRAME_CHANGED: Dw,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Gw,
          IX2_VIEWPORT_WIDTH_CHANGED: Uw,
          IX2_MEDIA_QUERIES_DEFINED: Vw,
        } = ye),
        (Yf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (kw = 20),
        ($f = (e = Yf, t) => {
          switch (t.type) {
            case Nw: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, we.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Lw:
              return (0, we.set)(e, "active", !0);
            case Pw: {
              let {
                payload: { step: r = kw },
              } = t;
              return (0, we.set)(e, "tick", e.tick + r);
            }
            case qw:
              return Yf;
            case Dw: {
              let {
                payload: { now: r },
              } = t;
              return (0, we.set)(e, "tick", r);
            }
            case Fw: {
              let r = (0, we.addLast)(e.eventListeners, t.payload);
              return (0, we.set)(e, "eventListeners", r);
            }
            case Mw: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, we.setIn)(e, ["eventState", r], n);
            }
            case Gw: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, we.setIn)(e, ["playbackState", r], n);
            }
            case Uw: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = n[a];
                if (r >= u && r <= l) {
                  o = s;
                  break;
                }
              }
              return (0, we.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Vw:
              return (0, we.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Jf = c((Z5, Zf) => {
    function Bw() {
      (this.__data__ = []), (this.size = 0);
    }
    Zf.exports = Bw;
  });
  var Cn = c((J5, ed) => {
    function Hw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    ed.exports = Hw;
  });
  var Sr = c((eH, td) => {
    var Xw = Cn();
    function Ww(e, t) {
      for (var r = e.length; r--; ) if (Xw(e[r][0], t)) return r;
      return -1;
    }
    td.exports = Ww;
  });
  var nd = c((tH, rd) => {
    var jw = Sr(),
      zw = Array.prototype,
      Kw = zw.splice;
    function Yw(e) {
      var t = this.__data__,
        r = jw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Kw.call(t, r, 1), --this.size, !0;
    }
    rd.exports = Yw;
  });
  var od = c((rH, id) => {
    var $w = Sr();
    function Qw(e) {
      var t = this.__data__,
        r = $w(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    id.exports = Qw;
  });
  var sd = c((nH, ad) => {
    var Zw = Sr();
    function Jw(e) {
      return Zw(this.__data__, e) > -1;
    }
    ad.exports = Jw;
  });
  var cd = c((iH, ud) => {
    var eS = Sr();
    function tS(e, t) {
      var r = this.__data__,
        n = eS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    ud.exports = tS;
  });
  var xr = c((oH, ld) => {
    var rS = Jf(),
      nS = nd(),
      iS = od(),
      oS = sd(),
      aS = cd();
    function Xt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Xt.prototype.clear = rS;
    Xt.prototype.delete = nS;
    Xt.prototype.get = iS;
    Xt.prototype.has = oS;
    Xt.prototype.set = aS;
    ld.exports = Xt;
  });
  var dd = c((aH, fd) => {
    var sS = xr();
    function uS() {
      (this.__data__ = new sS()), (this.size = 0);
    }
    fd.exports = uS;
  });
  var gd = c((sH, pd) => {
    function cS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    pd.exports = cS;
  });
  var hd = c((uH, vd) => {
    function lS(e) {
      return this.__data__.get(e);
    }
    vd.exports = lS;
  });
  var yd = c((cH, Ed) => {
    function fS(e) {
      return this.__data__.has(e);
    }
    Ed.exports = fS;
  });
  var nt = c((lH, md) => {
    function dS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    md.exports = dS;
  });
  var zo = c((fH, _d) => {
    var pS = Et(),
      gS = nt(),
      vS = "[object AsyncFunction]",
      hS = "[object Function]",
      ES = "[object GeneratorFunction]",
      yS = "[object Proxy]";
    function mS(e) {
      if (!gS(e)) return !1;
      var t = pS(e);
      return t == hS || t == ES || t == vS || t == yS;
    }
    _d.exports = mS;
  });
  var Td = c((dH, bd) => {
    var _S = Xe(),
      bS = _S["__core-js_shared__"];
    bd.exports = bS;
  });
  var Ad = c((pH, Od) => {
    var Ko = Td(),
      Id = (function () {
        var e = /[^.]+$/.exec((Ko && Ko.keys && Ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function TS(e) {
      return !!Id && Id in e;
    }
    Od.exports = TS;
  });
  var Yo = c((gH, wd) => {
    var IS = Function.prototype,
      OS = IS.toString;
    function AS(e) {
      if (e != null) {
        try {
          return OS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    wd.exports = AS;
  });
  var xd = c((vH, Sd) => {
    var wS = zo(),
      SS = Ad(),
      xS = nt(),
      CS = Yo(),
      RS = /[\\^$.*+?()[\]{}|]/g,
      NS = /^\[object .+?Constructor\]$/,
      LS = Function.prototype,
      PS = Object.prototype,
      qS = LS.toString,
      FS = PS.hasOwnProperty,
      MS = RegExp(
        "^" +
          qS
            .call(FS)
            .replace(RS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function DS(e) {
      if (!xS(e) || SS(e)) return !1;
      var t = wS(e) ? MS : NS;
      return t.test(CS(e));
    }
    Sd.exports = DS;
  });
  var Rd = c((hH, Cd) => {
    function GS(e, t) {
      return e?.[t];
    }
    Cd.exports = GS;
  });
  var yt = c((EH, Nd) => {
    var US = xd(),
      VS = Rd();
    function kS(e, t) {
      var r = VS(e, t);
      return US(r) ? r : void 0;
    }
    Nd.exports = kS;
  });
  var Rn = c((yH, Ld) => {
    var BS = yt(),
      HS = Xe(),
      XS = BS(HS, "Map");
    Ld.exports = XS;
  });
  var Cr = c((mH, Pd) => {
    var WS = yt(),
      jS = WS(Object, "create");
    Pd.exports = jS;
  });
  var Md = c((_H, Fd) => {
    var qd = Cr();
    function zS() {
      (this.__data__ = qd ? qd(null) : {}), (this.size = 0);
    }
    Fd.exports = zS;
  });
  var Gd = c((bH, Dd) => {
    function KS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Dd.exports = KS;
  });
  var Vd = c((TH, Ud) => {
    var YS = Cr(),
      $S = "__lodash_hash_undefined__",
      QS = Object.prototype,
      ZS = QS.hasOwnProperty;
    function JS(e) {
      var t = this.__data__;
      if (YS) {
        var r = t[e];
        return r === $S ? void 0 : r;
      }
      return ZS.call(t, e) ? t[e] : void 0;
    }
    Ud.exports = JS;
  });
  var Bd = c((IH, kd) => {
    var ex = Cr(),
      tx = Object.prototype,
      rx = tx.hasOwnProperty;
    function nx(e) {
      var t = this.__data__;
      return ex ? t[e] !== void 0 : rx.call(t, e);
    }
    kd.exports = nx;
  });
  var Xd = c((OH, Hd) => {
    var ix = Cr(),
      ox = "__lodash_hash_undefined__";
    function ax(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = ix && t === void 0 ? ox : t),
        this
      );
    }
    Hd.exports = ax;
  });
  var jd = c((AH, Wd) => {
    var sx = Md(),
      ux = Gd(),
      cx = Vd(),
      lx = Bd(),
      fx = Xd();
    function Wt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Wt.prototype.clear = sx;
    Wt.prototype.delete = ux;
    Wt.prototype.get = cx;
    Wt.prototype.has = lx;
    Wt.prototype.set = fx;
    Wd.exports = Wt;
  });
  var Yd = c((wH, Kd) => {
    var zd = jd(),
      dx = xr(),
      px = Rn();
    function gx() {
      (this.size = 0),
        (this.__data__ = {
          hash: new zd(),
          map: new (px || dx)(),
          string: new zd(),
        });
    }
    Kd.exports = gx;
  });
  var Qd = c((SH, $d) => {
    function vx(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    $d.exports = vx;
  });
  var Rr = c((xH, Zd) => {
    var hx = Qd();
    function Ex(e, t) {
      var r = e.__data__;
      return hx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Zd.exports = Ex;
  });
  var ep = c((CH, Jd) => {
    var yx = Rr();
    function mx(e) {
      var t = yx(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Jd.exports = mx;
  });
  var rp = c((RH, tp) => {
    var _x = Rr();
    function bx(e) {
      return _x(this, e).get(e);
    }
    tp.exports = bx;
  });
  var ip = c((NH, np) => {
    var Tx = Rr();
    function Ix(e) {
      return Tx(this, e).has(e);
    }
    np.exports = Ix;
  });
  var ap = c((LH, op) => {
    var Ox = Rr();
    function Ax(e, t) {
      var r = Ox(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    op.exports = Ax;
  });
  var Nn = c((PH, sp) => {
    var wx = Yd(),
      Sx = ep(),
      xx = rp(),
      Cx = ip(),
      Rx = ap();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = wx;
    jt.prototype.delete = Sx;
    jt.prototype.get = xx;
    jt.prototype.has = Cx;
    jt.prototype.set = Rx;
    sp.exports = jt;
  });
  var cp = c((qH, up) => {
    var Nx = xr(),
      Lx = Rn(),
      Px = Nn(),
      qx = 200;
    function Fx(e, t) {
      var r = this.__data__;
      if (r instanceof Nx) {
        var n = r.__data__;
        if (!Lx || n.length < qx - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Px(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    up.exports = Fx;
  });
  var $o = c((FH, lp) => {
    var Mx = xr(),
      Dx = dd(),
      Gx = gd(),
      Ux = hd(),
      Vx = yd(),
      kx = cp();
    function zt(e) {
      var t = (this.__data__ = new Mx(e));
      this.size = t.size;
    }
    zt.prototype.clear = Dx;
    zt.prototype.delete = Gx;
    zt.prototype.get = Ux;
    zt.prototype.has = Vx;
    zt.prototype.set = kx;
    lp.exports = zt;
  });
  var dp = c((MH, fp) => {
    var Bx = "__lodash_hash_undefined__";
    function Hx(e) {
      return this.__data__.set(e, Bx), this;
    }
    fp.exports = Hx;
  });
  var gp = c((DH, pp) => {
    function Xx(e) {
      return this.__data__.has(e);
    }
    pp.exports = Xx;
  });
  var hp = c((GH, vp) => {
    var Wx = Nn(),
      jx = dp(),
      zx = gp();
    function Ln(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Wx(); ++t < r; ) this.add(e[t]);
    }
    Ln.prototype.add = Ln.prototype.push = jx;
    Ln.prototype.has = zx;
    vp.exports = Ln;
  });
  var yp = c((UH, Ep) => {
    function Kx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Ep.exports = Kx;
  });
  var _p = c((VH, mp) => {
    function Yx(e, t) {
      return e.has(t);
    }
    mp.exports = Yx;
  });
  var Qo = c((kH, bp) => {
    var $x = hp(),
      Qx = yp(),
      Zx = _p(),
      Jx = 1,
      eC = 2;
    function tC(e, t, r, n, i, o) {
      var a = r & Jx,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        h = o.get(t);
      if (l && h) return l == t && h == e;
      var p = -1,
        g = !0,
        E = r & eC ? new $x() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var b = e[p],
          _ = t[p];
        if (n) var A = a ? n(_, b, p, t, e, o) : n(b, _, p, e, t, o);
        if (A !== void 0) {
          if (A) continue;
          g = !1;
          break;
        }
        if (E) {
          if (
            !Qx(t, function (y, C) {
              if (!Zx(E, C) && (b === y || i(b, y, r, n, o))) return E.push(C);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(b === _ || i(b, _, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    bp.exports = tC;
  });
  var Ip = c((BH, Tp) => {
    var rC = Xe(),
      nC = rC.Uint8Array;
    Tp.exports = nC;
  });
  var Ap = c((HH, Op) => {
    function iC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Op.exports = iC;
  });
  var Sp = c((XH, wp) => {
    function oC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    wp.exports = oC;
  });
  var Lp = c((WH, Np) => {
    var xp = Vt(),
      Cp = Ip(),
      aC = Cn(),
      sC = Qo(),
      uC = Ap(),
      cC = Sp(),
      lC = 1,
      fC = 2,
      dC = "[object Boolean]",
      pC = "[object Date]",
      gC = "[object Error]",
      vC = "[object Map]",
      hC = "[object Number]",
      EC = "[object RegExp]",
      yC = "[object Set]",
      mC = "[object String]",
      _C = "[object Symbol]",
      bC = "[object ArrayBuffer]",
      TC = "[object DataView]",
      Rp = xp ? xp.prototype : void 0,
      Zo = Rp ? Rp.valueOf : void 0;
    function IC(e, t, r, n, i, o, a) {
      switch (r) {
        case TC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case bC:
          return !(e.byteLength != t.byteLength || !o(new Cp(e), new Cp(t)));
        case dC:
        case pC:
        case hC:
          return aC(+e, +t);
        case gC:
          return e.name == t.name && e.message == t.message;
        case EC:
        case mC:
          return e == t + "";
        case vC:
          var s = uC;
        case yC:
          var u = n & lC;
          if ((s || (s = cC), e.size != t.size && !u)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (n |= fC), a.set(e, t);
          var h = sC(s(e), s(t), n, i, o, a);
          return a.delete(e), h;
        case _C:
          if (Zo) return Zo.call(e) == Zo.call(t);
      }
      return !1;
    }
    Np.exports = IC;
  });
  var Pn = c((jH, Pp) => {
    function OC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Pp.exports = OC;
  });
  var me = c((zH, qp) => {
    var AC = Array.isArray;
    qp.exports = AC;
  });
  var Jo = c((KH, Fp) => {
    var wC = Pn(),
      SC = me();
    function xC(e, t, r) {
      var n = t(e);
      return SC(e) ? n : wC(n, r(e));
    }
    Fp.exports = xC;
  });
  var Dp = c((YH, Mp) => {
    function CC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Mp.exports = CC;
  });
  var ea = c(($H, Gp) => {
    function RC() {
      return [];
    }
    Gp.exports = RC;
  });
  var ta = c((QH, Vp) => {
    var NC = Dp(),
      LC = ea(),
      PC = Object.prototype,
      qC = PC.propertyIsEnumerable,
      Up = Object.getOwnPropertySymbols,
      FC = Up
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                NC(Up(e), function (t) {
                  return qC.call(e, t);
                }));
          }
        : LC;
    Vp.exports = FC;
  });
  var Bp = c((ZH, kp) => {
    function MC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    kp.exports = MC;
  });
  var Xp = c((JH, Hp) => {
    var DC = Et(),
      GC = ut(),
      UC = "[object Arguments]";
    function VC(e) {
      return GC(e) && DC(e) == UC;
    }
    Hp.exports = VC;
  });
  var Nr = c((eX, zp) => {
    var Wp = Xp(),
      kC = ut(),
      jp = Object.prototype,
      BC = jp.hasOwnProperty,
      HC = jp.propertyIsEnumerable,
      XC = Wp(
        (function () {
          return arguments;
        })()
      )
        ? Wp
        : function (e) {
            return kC(e) && BC.call(e, "callee") && !HC.call(e, "callee");
          };
    zp.exports = XC;
  });
  var Yp = c((tX, Kp) => {
    function WC() {
      return !1;
    }
    Kp.exports = WC;
  });
  var qn = c((Lr, Kt) => {
    var jC = Xe(),
      zC = Yp(),
      Zp = typeof Lr == "object" && Lr && !Lr.nodeType && Lr,
      $p = Zp && typeof Kt == "object" && Kt && !Kt.nodeType && Kt,
      KC = $p && $p.exports === Zp,
      Qp = KC ? jC.Buffer : void 0,
      YC = Qp ? Qp.isBuffer : void 0,
      $C = YC || zC;
    Kt.exports = $C;
  });
  var Fn = c((rX, Jp) => {
    var QC = 9007199254740991,
      ZC = /^(?:0|[1-9]\d*)$/;
    function JC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? QC),
        !!t &&
          (r == "number" || (r != "symbol" && ZC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Jp.exports = JC;
  });
  var Mn = c((nX, eg) => {
    var eR = 9007199254740991;
    function tR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eR;
    }
    eg.exports = tR;
  });
  var rg = c((iX, tg) => {
    var rR = Et(),
      nR = Mn(),
      iR = ut(),
      oR = "[object Arguments]",
      aR = "[object Array]",
      sR = "[object Boolean]",
      uR = "[object Date]",
      cR = "[object Error]",
      lR = "[object Function]",
      fR = "[object Map]",
      dR = "[object Number]",
      pR = "[object Object]",
      gR = "[object RegExp]",
      vR = "[object Set]",
      hR = "[object String]",
      ER = "[object WeakMap]",
      yR = "[object ArrayBuffer]",
      mR = "[object DataView]",
      _R = "[object Float32Array]",
      bR = "[object Float64Array]",
      TR = "[object Int8Array]",
      IR = "[object Int16Array]",
      OR = "[object Int32Array]",
      AR = "[object Uint8Array]",
      wR = "[object Uint8ClampedArray]",
      SR = "[object Uint16Array]",
      xR = "[object Uint32Array]",
      le = {};
    le[_R] =
      le[bR] =
      le[TR] =
      le[IR] =
      le[OR] =
      le[AR] =
      le[wR] =
      le[SR] =
      le[xR] =
        !0;
    le[oR] =
      le[aR] =
      le[yR] =
      le[sR] =
      le[mR] =
      le[uR] =
      le[cR] =
      le[lR] =
      le[fR] =
      le[dR] =
      le[pR] =
      le[gR] =
      le[vR] =
      le[hR] =
      le[ER] =
        !1;
    function CR(e) {
      return iR(e) && nR(e.length) && !!le[rR(e)];
    }
    tg.exports = CR;
  });
  var ig = c((oX, ng) => {
    function RR(e) {
      return function (t) {
        return e(t);
      };
    }
    ng.exports = RR;
  });
  var ag = c((Pr, Yt) => {
    var NR = So(),
      og = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
      qr = og && typeof Yt == "object" && Yt && !Yt.nodeType && Yt,
      LR = qr && qr.exports === og,
      ra = LR && NR.process,
      PR = (function () {
        try {
          var e = qr && qr.require && qr.require("util").types;
          return e || (ra && ra.binding && ra.binding("util"));
        } catch {}
      })();
    Yt.exports = PR;
  });
  var Dn = c((aX, cg) => {
    var qR = rg(),
      FR = ig(),
      sg = ag(),
      ug = sg && sg.isTypedArray,
      MR = ug ? FR(ug) : qR;
    cg.exports = MR;
  });
  var na = c((sX, lg) => {
    var DR = Bp(),
      GR = Nr(),
      UR = me(),
      VR = qn(),
      kR = Fn(),
      BR = Dn(),
      HR = Object.prototype,
      XR = HR.hasOwnProperty;
    function WR(e, t) {
      var r = UR(e),
        n = !r && GR(e),
        i = !r && !n && VR(e),
        o = !r && !n && !i && BR(e),
        a = r || n || i || o,
        s = a ? DR(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || XR.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              kR(l, u))
          ) &&
          s.push(l);
      return s;
    }
    lg.exports = WR;
  });
  var Gn = c((uX, fg) => {
    var jR = Object.prototype;
    function zR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || jR;
      return e === r;
    }
    fg.exports = zR;
  });
  var pg = c((cX, dg) => {
    var KR = xo(),
      YR = KR(Object.keys, Object);
    dg.exports = YR;
  });
  var Un = c((lX, gg) => {
    var $R = Gn(),
      QR = pg(),
      ZR = Object.prototype,
      JR = ZR.hasOwnProperty;
    function eN(e) {
      if (!$R(e)) return QR(e);
      var t = [];
      for (var r in Object(e)) JR.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    gg.exports = eN;
  });
  var St = c((fX, vg) => {
    var tN = zo(),
      rN = Mn();
    function nN(e) {
      return e != null && rN(e.length) && !tN(e);
    }
    vg.exports = nN;
  });
  var Fr = c((dX, hg) => {
    var iN = na(),
      oN = Un(),
      aN = St();
    function sN(e) {
      return aN(e) ? iN(e) : oN(e);
    }
    hg.exports = sN;
  });
  var yg = c((pX, Eg) => {
    var uN = Jo(),
      cN = ta(),
      lN = Fr();
    function fN(e) {
      return uN(e, lN, cN);
    }
    Eg.exports = fN;
  });
  var bg = c((gX, _g) => {
    var mg = yg(),
      dN = 1,
      pN = Object.prototype,
      gN = pN.hasOwnProperty;
    function vN(e, t, r, n, i, o) {
      var a = r & dN,
        s = mg(e),
        u = s.length,
        l = mg(t),
        h = l.length;
      if (u != h && !a) return !1;
      for (var p = u; p--; ) {
        var g = s[p];
        if (!(a ? g in t : gN.call(t, g))) return !1;
      }
      var E = o.get(e),
        b = o.get(t);
      if (E && b) return E == t && b == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var A = a; ++p < u; ) {
        g = s[p];
        var y = e[g],
          C = t[g];
        if (n) var w = a ? n(C, y, g, t, e, o) : n(y, C, g, e, t, o);
        if (!(w === void 0 ? y === C || i(y, C, r, n, o) : w)) {
          _ = !1;
          break;
        }
        A || (A = g == "constructor");
      }
      if (_ && !A) {
        var L = e.constructor,
          q = t.constructor;
        L != q &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof q == "function" &&
            q instanceof q
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    _g.exports = vN;
  });
  var Ig = c((vX, Tg) => {
    var hN = yt(),
      EN = Xe(),
      yN = hN(EN, "DataView");
    Tg.exports = yN;
  });
  var Ag = c((hX, Og) => {
    var mN = yt(),
      _N = Xe(),
      bN = mN(_N, "Promise");
    Og.exports = bN;
  });
  var Sg = c((EX, wg) => {
    var TN = yt(),
      IN = Xe(),
      ON = TN(IN, "Set");
    wg.exports = ON;
  });
  var ia = c((yX, xg) => {
    var AN = yt(),
      wN = Xe(),
      SN = AN(wN, "WeakMap");
    xg.exports = SN;
  });
  var Vn = c((mX, Fg) => {
    var oa = Ig(),
      aa = Rn(),
      sa = Ag(),
      ua = Sg(),
      ca = ia(),
      qg = Et(),
      $t = Yo(),
      Cg = "[object Map]",
      xN = "[object Object]",
      Rg = "[object Promise]",
      Ng = "[object Set]",
      Lg = "[object WeakMap]",
      Pg = "[object DataView]",
      CN = $t(oa),
      RN = $t(aa),
      NN = $t(sa),
      LN = $t(ua),
      PN = $t(ca),
      xt = qg;
    ((oa && xt(new oa(new ArrayBuffer(1))) != Pg) ||
      (aa && xt(new aa()) != Cg) ||
      (sa && xt(sa.resolve()) != Rg) ||
      (ua && xt(new ua()) != Ng) ||
      (ca && xt(new ca()) != Lg)) &&
      (xt = function (e) {
        var t = qg(e),
          r = t == xN ? e.constructor : void 0,
          n = r ? $t(r) : "";
        if (n)
          switch (n) {
            case CN:
              return Pg;
            case RN:
              return Cg;
            case NN:
              return Rg;
            case LN:
              return Ng;
            case PN:
              return Lg;
          }
        return t;
      });
    Fg.exports = xt;
  });
  var Hg = c((_X, Bg) => {
    var la = $o(),
      qN = Qo(),
      FN = Lp(),
      MN = bg(),
      Mg = Vn(),
      Dg = me(),
      Gg = qn(),
      DN = Dn(),
      GN = 1,
      Ug = "[object Arguments]",
      Vg = "[object Array]",
      kn = "[object Object]",
      UN = Object.prototype,
      kg = UN.hasOwnProperty;
    function VN(e, t, r, n, i, o) {
      var a = Dg(e),
        s = Dg(t),
        u = a ? Vg : Mg(e),
        l = s ? Vg : Mg(t);
      (u = u == Ug ? kn : u), (l = l == Ug ? kn : l);
      var h = u == kn,
        p = l == kn,
        g = u == l;
      if (g && Gg(e)) {
        if (!Gg(t)) return !1;
        (a = !0), (h = !1);
      }
      if (g && !h)
        return (
          o || (o = new la()),
          a || DN(e) ? qN(e, t, r, n, i, o) : FN(e, t, u, r, n, i, o)
        );
      if (!(r & GN)) {
        var E = h && kg.call(e, "__wrapped__"),
          b = p && kg.call(t, "__wrapped__");
        if (E || b) {
          var _ = E ? e.value() : e,
            A = b ? t.value() : t;
          return o || (o = new la()), i(_, A, r, n, o);
        }
      }
      return g ? (o || (o = new la()), MN(e, t, r, n, i, o)) : !1;
    }
    Bg.exports = VN;
  });
  var fa = c((bX, jg) => {
    var kN = Hg(),
      Xg = ut();
    function Wg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Xg(e) && !Xg(t))
        ? e !== e && t !== t
        : kN(e, t, r, n, Wg, i);
    }
    jg.exports = Wg;
  });
  var Kg = c((TX, zg) => {
    var BN = $o(),
      HN = fa(),
      XN = 1,
      WN = 2;
    function jN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          l = e[u],
          h = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var p = new BN();
          if (n) var g = n(l, h, u, e, t, p);
          if (!(g === void 0 ? HN(h, l, XN | WN, n, p) : g)) return !1;
        }
      }
      return !0;
    }
    zg.exports = jN;
  });
  var da = c((IX, Yg) => {
    var zN = nt();
    function KN(e) {
      return e === e && !zN(e);
    }
    Yg.exports = KN;
  });
  var Qg = c((OX, $g) => {
    var YN = da(),
      $N = Fr();
    function QN(e) {
      for (var t = $N(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, YN(i)];
      }
      return t;
    }
    $g.exports = QN;
  });
  var pa = c((AX, Zg) => {
    function ZN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Zg.exports = ZN;
  });
  var ev = c((wX, Jg) => {
    var JN = Kg(),
      eL = Qg(),
      tL = pa();
    function rL(e) {
      var t = eL(e);
      return t.length == 1 && t[0][2]
        ? tL(t[0][0], t[0][1])
        : function (r) {
            return r === e || JN(r, e, t);
          };
    }
    Jg.exports = rL;
  });
  var Mr = c((SX, tv) => {
    var nL = Et(),
      iL = ut(),
      oL = "[object Symbol]";
    function aL(e) {
      return typeof e == "symbol" || (iL(e) && nL(e) == oL);
    }
    tv.exports = aL;
  });
  var Bn = c((xX, rv) => {
    var sL = me(),
      uL = Mr(),
      cL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      lL = /^\w*$/;
    function fL(e, t) {
      if (sL(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        uL(e)
        ? !0
        : lL.test(e) || !cL.test(e) || (t != null && e in Object(t));
    }
    rv.exports = fL;
  });
  var ov = c((CX, iv) => {
    var nv = Nn(),
      dL = "Expected a function";
    function ga(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(dL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ga.Cache || nv)()), r;
    }
    ga.Cache = nv;
    iv.exports = ga;
  });
  var sv = c((RX, av) => {
    var pL = ov(),
      gL = 500;
    function vL(e) {
      var t = pL(e, function (n) {
          return r.size === gL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    av.exports = vL;
  });
  var cv = c((NX, uv) => {
    var hL = sv(),
      EL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      yL = /\\(\\)?/g,
      mL = hL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(EL, function (r, n, i, o) {
            t.push(i ? o.replace(yL, "$1") : n || r);
          }),
          t
        );
      });
    uv.exports = mL;
  });
  var va = c((LX, lv) => {
    function _L(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    lv.exports = _L;
  });
  var hv = c((PX, vv) => {
    var fv = Vt(),
      bL = va(),
      TL = me(),
      IL = Mr(),
      OL = 1 / 0,
      dv = fv ? fv.prototype : void 0,
      pv = dv ? dv.toString : void 0;
    function gv(e) {
      if (typeof e == "string") return e;
      if (TL(e)) return bL(e, gv) + "";
      if (IL(e)) return pv ? pv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -OL ? "-0" : t;
    }
    vv.exports = gv;
  });
  var yv = c((qX, Ev) => {
    var AL = hv();
    function wL(e) {
      return e == null ? "" : AL(e);
    }
    Ev.exports = wL;
  });
  var Dr = c((FX, mv) => {
    var SL = me(),
      xL = Bn(),
      CL = cv(),
      RL = yv();
    function NL(e, t) {
      return SL(e) ? e : xL(e, t) ? [e] : CL(RL(e));
    }
    mv.exports = NL;
  });
  var Qt = c((MX, _v) => {
    var LL = Mr(),
      PL = 1 / 0;
    function qL(e) {
      if (typeof e == "string" || LL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -PL ? "-0" : t;
    }
    _v.exports = qL;
  });
  var Hn = c((DX, bv) => {
    var FL = Dr(),
      ML = Qt();
    function DL(e, t) {
      t = FL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[ML(t[r++])];
      return r && r == n ? e : void 0;
    }
    bv.exports = DL;
  });
  var Xn = c((GX, Tv) => {
    var GL = Hn();
    function UL(e, t, r) {
      var n = e == null ? void 0 : GL(e, t);
      return n === void 0 ? r : n;
    }
    Tv.exports = UL;
  });
  var Ov = c((UX, Iv) => {
    function VL(e, t) {
      return e != null && t in Object(e);
    }
    Iv.exports = VL;
  });
  var wv = c((VX, Av) => {
    var kL = Dr(),
      BL = Nr(),
      HL = me(),
      XL = Fn(),
      WL = Mn(),
      jL = Qt();
    function zL(e, t, r) {
      t = kL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = jL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && WL(i) && XL(a, i) && (HL(e) || BL(e)));
    }
    Av.exports = zL;
  });
  var xv = c((kX, Sv) => {
    var KL = Ov(),
      YL = wv();
    function $L(e, t) {
      return e != null && YL(e, t, KL);
    }
    Sv.exports = $L;
  });
  var Rv = c((BX, Cv) => {
    var QL = fa(),
      ZL = Xn(),
      JL = xv(),
      eP = Bn(),
      tP = da(),
      rP = pa(),
      nP = Qt(),
      iP = 1,
      oP = 2;
    function aP(e, t) {
      return eP(e) && tP(t)
        ? rP(nP(e), t)
        : function (r) {
            var n = ZL(r, e);
            return n === void 0 && n === t ? JL(r, e) : QL(t, n, iP | oP);
          };
    }
    Cv.exports = aP;
  });
  var Wn = c((HX, Nv) => {
    function sP(e) {
      return e;
    }
    Nv.exports = sP;
  });
  var ha = c((XX, Lv) => {
    function uP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Lv.exports = uP;
  });
  var qv = c((WX, Pv) => {
    var cP = Hn();
    function lP(e) {
      return function (t) {
        return cP(t, e);
      };
    }
    Pv.exports = lP;
  });
  var Mv = c((jX, Fv) => {
    var fP = ha(),
      dP = qv(),
      pP = Bn(),
      gP = Qt();
    function vP(e) {
      return pP(e) ? fP(gP(e)) : dP(e);
    }
    Fv.exports = vP;
  });
  var mt = c((zX, Dv) => {
    var hP = ev(),
      EP = Rv(),
      yP = Wn(),
      mP = me(),
      _P = Mv();
    function bP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? yP
        : typeof e == "object"
        ? mP(e)
          ? EP(e[0], e[1])
          : hP(e)
        : _P(e);
    }
    Dv.exports = bP;
  });
  var Ea = c((KX, Gv) => {
    var TP = mt(),
      IP = St(),
      OP = Fr();
    function AP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!IP(t)) {
          var o = TP(r, 3);
          (t = OP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Gv.exports = AP;
  });
  var ya = c((YX, Uv) => {
    function wP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Uv.exports = wP;
  });
  var kv = c(($X, Vv) => {
    var SP = /\s/;
    function xP(e) {
      for (var t = e.length; t-- && SP.test(e.charAt(t)); );
      return t;
    }
    Vv.exports = xP;
  });
  var Hv = c((QX, Bv) => {
    var CP = kv(),
      RP = /^\s+/;
    function NP(e) {
      return e && e.slice(0, CP(e) + 1).replace(RP, "");
    }
    Bv.exports = NP;
  });
  var jn = c((ZX, jv) => {
    var LP = Hv(),
      Xv = nt(),
      PP = Mr(),
      Wv = 0 / 0,
      qP = /^[-+]0x[0-9a-f]+$/i,
      FP = /^0b[01]+$/i,
      MP = /^0o[0-7]+$/i,
      DP = parseInt;
    function GP(e) {
      if (typeof e == "number") return e;
      if (PP(e)) return Wv;
      if (Xv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Xv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = LP(e);
      var r = FP.test(e);
      return r || MP.test(e) ? DP(e.slice(2), r ? 2 : 8) : qP.test(e) ? Wv : +e;
    }
    jv.exports = GP;
  });
  var Yv = c((JX, Kv) => {
    var UP = jn(),
      zv = 1 / 0,
      VP = 17976931348623157e292;
    function kP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = UP(e)), e === zv || e === -zv)) {
        var t = e < 0 ? -1 : 1;
        return t * VP;
      }
      return e === e ? e : 0;
    }
    Kv.exports = kP;
  });
  var ma = c((eW, $v) => {
    var BP = Yv();
    function HP(e) {
      var t = BP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    $v.exports = HP;
  });
  var Zv = c((tW, Qv) => {
    var XP = ya(),
      WP = mt(),
      jP = ma(),
      zP = Math.max;
    function KP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : jP(r);
      return i < 0 && (i = zP(n + i, 0)), XP(e, WP(t, 3), i);
    }
    Qv.exports = KP;
  });
  var _a = c((rW, Jv) => {
    var YP = Ea(),
      $P = Zv(),
      QP = YP($P);
    Jv.exports = QP;
  });
  var rh = {};
  Re(rh, {
    ELEMENT_MATCHES: () => ZP,
    FLEX_PREFIXED: () => ba,
    IS_BROWSER_ENV: () => je,
    TRANSFORM_PREFIXED: () => _t,
    TRANSFORM_STYLE_PREFIXED: () => Kn,
    withBrowser: () => zn,
  });
  var th,
    je,
    zn,
    ZP,
    ba,
    _t,
    eh,
    Kn,
    Yn = fe(() => {
      "use strict";
      (th = oe(_a())),
        (je = typeof window < "u"),
        (zn = (e, t) => (je ? e() : t)),
        (ZP = zn(() =>
          (0, th.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ba = zn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (_t = zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (eh = _t.split("transform")[0]),
        (Kn = eh ? eh + "TransformStyle" : "transformStyle");
    });
  var Ta = c((nW, sh) => {
    var JP = 4,
      eq = 0.001,
      tq = 1e-7,
      rq = 10,
      Gr = 11,
      $n = 1 / (Gr - 1),
      nq = typeof Float32Array == "function";
    function nh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ih(e, t) {
      return 3 * t - 6 * e;
    }
    function oh(e) {
      return 3 * e;
    }
    function Qn(e, t, r) {
      return ((nh(t, r) * e + ih(t, r)) * e + oh(t)) * e;
    }
    function ah(e, t, r) {
      return 3 * nh(t, r) * e * e + 2 * ih(t, r) * e + oh(t);
    }
    function iq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Qn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > tq && ++s < rq);
      return a;
    }
    function oq(e, t, r, n) {
      for (var i = 0; i < JP; ++i) {
        var o = ah(t, r, n);
        if (o === 0) return t;
        var a = Qn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    sh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = nq ? new Float32Array(Gr) : new Array(Gr);
      if (t !== r || n !== i)
        for (var a = 0; a < Gr; ++a) o[a] = Qn(a * $n, t, n);
      function s(u) {
        for (var l = 0, h = 1, p = Gr - 1; h !== p && o[h] <= u; ++h) l += $n;
        --h;
        var g = (u - o[h]) / (o[h + 1] - o[h]),
          E = l + g * $n,
          b = ah(E, t, n);
        return b >= eq ? oq(u, E, t, n) : b === 0 ? E : iq(u, l, l + $n, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : Qn(s(l), r, i);
      };
    };
  });
  var Vr = {};
  Re(Vr, {
    bounce: () => kq,
    bouncePast: () => Bq,
    ease: () => aq,
    easeIn: () => sq,
    easeInOut: () => cq,
    easeOut: () => uq,
    inBack: () => Lq,
    inCirc: () => xq,
    inCubic: () => pq,
    inElastic: () => Fq,
    inExpo: () => Aq,
    inOutBack: () => qq,
    inOutCirc: () => Rq,
    inOutCubic: () => vq,
    inOutElastic: () => Dq,
    inOutExpo: () => Sq,
    inOutQuad: () => dq,
    inOutQuart: () => yq,
    inOutQuint: () => bq,
    inOutSine: () => Oq,
    inQuad: () => lq,
    inQuart: () => hq,
    inQuint: () => mq,
    inSine: () => Tq,
    outBack: () => Pq,
    outBounce: () => Nq,
    outCirc: () => Cq,
    outCubic: () => gq,
    outElastic: () => Mq,
    outExpo: () => wq,
    outQuad: () => fq,
    outQuart: () => Eq,
    outQuint: () => _q,
    outSine: () => Iq,
    swingFrom: () => Uq,
    swingFromTo: () => Gq,
    swingTo: () => Vq,
  });
  function lq(e) {
    return Math.pow(e, 2);
  }
  function fq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function dq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function pq(e) {
    return Math.pow(e, 3);
  }
  function gq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function vq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function hq(e) {
    return Math.pow(e, 4);
  }
  function Eq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function yq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function mq(e) {
    return Math.pow(e, 5);
  }
  function _q(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function bq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Tq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Iq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Oq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Aq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function wq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Sq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function xq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Cq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Rq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Nq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Lq(e) {
    let t = ct;
    return e * e * ((t + 1) * e - t);
  }
  function Pq(e) {
    let t = ct;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function qq(e) {
    let t = ct;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Fq(e) {
    let t = ct,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Mq(e) {
    let t = ct,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Dq(e) {
    let t = ct,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Gq(e) {
    let t = ct;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Uq(e) {
    let t = ct;
    return e * e * ((t + 1) * e - t);
  }
  function Vq(e) {
    let t = ct;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Bq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Ur,
    ct,
    aq,
    sq,
    uq,
    cq,
    Ia = fe(() => {
      "use strict";
      (Ur = oe(Ta())),
        (ct = 1.70158),
        (aq = (0, Ur.default)(0.25, 0.1, 0.25, 1)),
        (sq = (0, Ur.default)(0.42, 0, 1, 1)),
        (uq = (0, Ur.default)(0, 0, 0.58, 1)),
        (cq = (0, Ur.default)(0.42, 0, 0.58, 1));
    });
  var ch = {};
  Re(ch, {
    applyEasing: () => Xq,
    createBezierEasing: () => Hq,
    optimizeFloat: () => kr,
  });
  function kr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Hq(e) {
    return (0, uh.default)(...e);
  }
  function Xq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : kr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Vr[e] ? Vr[e](t) : t);
  }
  var uh,
    Oa = fe(() => {
      "use strict";
      Ia();
      uh = oe(Ta());
    });
  var dh = {};
  Re(dh, {
    createElementState: () => fh,
    ixElements: () => iF,
    mergeActionState: () => Aa,
  });
  function fh(e, t, r, n, i) {
    let o =
      r === Wq ? (0, Zt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Zt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Aa(e, t, r, n, i) {
    let o = aF(i);
    return (0, Zt.mergeIn)(e, [t, nF, r], n, o);
  }
  function aF(e) {
    let { config: t } = e;
    return oF.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var Zt,
    oW,
    Wq,
    aW,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    Jq,
    eF,
    tF,
    rF,
    lh,
    nF,
    iF,
    oF,
    ph = fe(() => {
      "use strict";
      Zt = oe(Ht());
      Le();
      ({
        HTML_ELEMENT: oW,
        PLAIN_OBJECT: Wq,
        ABSTRACT_NODE: aW,
        CONFIG_X_VALUE: jq,
        CONFIG_Y_VALUE: zq,
        CONFIG_Z_VALUE: Kq,
        CONFIG_VALUE: Yq,
        CONFIG_X_UNIT: $q,
        CONFIG_Y_UNIT: Qq,
        CONFIG_Z_UNIT: Zq,
        CONFIG_UNIT: Jq,
      } = Ie),
        ({
          IX2_SESSION_STOPPED: eF,
          IX2_INSTANCE_ADDED: tF,
          IX2_ELEMENT_STATE_CHANGED: rF,
        } = ye),
        (lh = {}),
        (nF = "refState"),
        (iF = (e = lh, t = {}) => {
          switch (t.type) {
            case eF:
              return lh;
            case tF: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, Zt.getIn)(u, [r, n]) !== n && (u = fh(u, n, a, r, o)),
                Aa(u, r, s, i, o)
              );
            }
            case rF: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Aa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      oF = [
        [jq, $q],
        [zq, Qq],
        [Kq, Zq],
        [Yq, Jq],
      ];
    });
  var gh = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var sF = (e) => e.value;
    _e.getPluginConfig = sF;
    var uF = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    _e.getPluginDuration = uF;
    var cF = (e) => e || { value: 0 };
    _e.getPluginOrigin = cF;
    var lF = (e) => ({ value: e.value });
    _e.getPluginDestination = lF;
    var fF = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    _e.createPluginInstance = fF;
    var dF = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    _e.renderPlugin = dF;
    var pF = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    _e.clearPlugin = pF;
  });
  var hh = c((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.renderPlugin =
      be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
        void 0;
    var gF = (e) => document.querySelector(`[data-w-id="${e}"]`),
      vF = () => window.Webflow.require("spline"),
      hF = (e, t) => e.filter((r) => !t.includes(r)),
      EF = (e, t) => e.value[t];
    be.getPluginConfig = EF;
    var yF = () => null;
    be.getPluginDuration = yF;
    var vh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      mF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = hF(n, o);
          return a.length ? a.reduce((u, l) => ((u[l] = vh[l]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = vh[a]), o), {});
      };
    be.getPluginOrigin = mF;
    var _F = (e) => e.value;
    be.getPluginDestination = _F;
    var bF = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? gF(n) : null;
    };
    be.createPluginInstance = bF;
    var TF = (e, t, r) => {
      let n = vF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: l } = t;
          l.positionX != null && (u.position.x = l.positionX),
            l.positionY != null && (u.position.y = l.positionY),
            l.positionZ != null && (u.position.z = l.positionZ),
            l.rotationX != null && (u.rotation.x = l.rotationX),
            l.rotationY != null && (u.rotation.y = l.rotationY),
            l.rotationZ != null && (u.rotation.z = l.rotationZ),
            l.scaleX != null && (u.scale.x = l.scaleX),
            l.scaleY != null && (u.scale.y = l.scaleY),
            l.scaleZ != null && (u.scale.z = l.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    be.renderPlugin = TF;
    var IF = () => null;
    be.clearPlugin = IF;
  });
  var Sa = c((wa) => {
    "use strict";
    Object.defineProperty(wa, "__esModule", { value: !0 });
    wa.normalizeColor = OF;
    var Eh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function OF(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Eh[o] == "string" ? Eh[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          h = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let g = (1 - Math.abs(2 * p - 1)) * h,
          E = g * (1 - Math.abs(((l / 60) % 2) - 1)),
          b = p - g / 2,
          _,
          A,
          y;
        l >= 0 && l < 60
          ? ((_ = g), (A = E), (y = 0))
          : l >= 60 && l < 120
          ? ((_ = E), (A = g), (y = 0))
          : l >= 120 && l < 180
          ? ((_ = 0), (A = g), (y = E))
          : l >= 180 && l < 240
          ? ((_ = 0), (A = E), (y = g))
          : l >= 240 && l < 300
          ? ((_ = E), (A = 0), (y = g))
          : ((_ = g), (A = 0), (y = E)),
          (t = Math.round((_ + b) * 255)),
          (r = Math.round((A + b) * 255)),
          (n = Math.round((y + b) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          h = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * p - 1)) * h,
          E = g * (1 - Math.abs(((l / 60) % 2) - 1)),
          b = p - g / 2,
          _,
          A,
          y;
        l >= 0 && l < 60
          ? ((_ = g), (A = E), (y = 0))
          : l >= 60 && l < 120
          ? ((_ = E), (A = g), (y = 0))
          : l >= 120 && l < 180
          ? ((_ = 0), (A = g), (y = E))
          : l >= 180 && l < 240
          ? ((_ = 0), (A = E), (y = g))
          : l >= 240 && l < 300
          ? ((_ = E), (A = 0), (y = g))
          : ((_ = g), (A = 0), (y = E)),
          (t = Math.round((_ + b) * 255)),
          (r = Math.round((A + b) * 255)),
          (n = Math.round((y + b) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var yh = c((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    Te.renderPlugin =
      Te.getPluginOrigin =
      Te.getPluginDuration =
      Te.getPluginDestination =
      Te.getPluginConfig =
      Te.createPluginInstance =
      Te.clearPlugin =
        void 0;
    var AF = Sa(),
      wF = (e, t) => e.value[t];
    Te.getPluginConfig = wF;
    var SF = () => null;
    Te.getPluginDuration = SF;
    var xF = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, AF.normalizeColor)(i);
    };
    Te.getPluginOrigin = xF;
    var CF = (e) => e.value;
    Te.getPluginDestination = CF;
    var RF = () => null;
    Te.createPluginInstance = RF;
    var NF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: l, alpha: h } = o,
        p;
      a != null && (p = a + i),
        s != null &&
          l != null &&
          u != null &&
          h != null &&
          (p = `rgba(${s}, ${u}, ${l}, ${h})`),
        p != null && document.documentElement.style.setProperty(n, p);
    };
    Te.renderPlugin = NF;
    var LF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Te.clearPlugin = LF;
  });
  var mh = c((Zn) => {
    "use strict";
    var Ca = cn().default;
    Object.defineProperty(Zn, "__esModule", { value: !0 });
    Zn.pluginMethodMap = void 0;
    var xa = (Le(), Ze(Af)),
      PF = Ca(gh()),
      qF = Ca(hh()),
      FF = Ca(yh()),
      fW = (Zn.pluginMethodMap = new Map([
        [xa.ActionTypeConsts.PLUGIN_LOTTIE, { ...PF }],
        [xa.ActionTypeConsts.PLUGIN_SPLINE, { ...qF }],
        [xa.ActionTypeConsts.PLUGIN_VARIABLE, { ...FF }],
      ]));
  });
  var _h = {};
  Re(_h, {
    clearPlugin: () => Fa,
    createPluginInstance: () => DF,
    getPluginConfig: () => Na,
    getPluginDestination: () => Pa,
    getPluginDuration: () => MF,
    getPluginOrigin: () => La,
    isPluginType: () => Ct,
    renderPlugin: () => qa,
  });
  function Ct(e) {
    return Ra.pluginMethodMap.has(e);
  }
  var Ra,
    Rt,
    Na,
    La,
    MF,
    Pa,
    DF,
    qa,
    Fa,
    Ma = fe(() => {
      "use strict";
      Yn();
      Ra = oe(mh());
      (Rt = (e) => (t) => {
        if (!je) return () => null;
        let r = Ra.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Na = Rt("getPluginConfig")),
        (La = Rt("getPluginOrigin")),
        (MF = Rt("getPluginDuration")),
        (Pa = Rt("getPluginDestination")),
        (DF = Rt("createPluginInstance")),
        (qa = Rt("renderPlugin")),
        (Fa = Rt("clearPlugin"));
    });
  var Th = c((gW, bh) => {
    function GF(e, t) {
      return e == null || e !== e ? t : e;
    }
    bh.exports = GF;
  });
  var Oh = c((vW, Ih) => {
    function UF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Ih.exports = UF;
  });
  var wh = c((hW, Ah) => {
    function VF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ah.exports = VF;
  });
  var xh = c((EW, Sh) => {
    var kF = wh(),
      BF = kF();
    Sh.exports = BF;
  });
  var Da = c((yW, Ch) => {
    var HF = xh(),
      XF = Fr();
    function WF(e, t) {
      return e && HF(e, t, XF);
    }
    Ch.exports = WF;
  });
  var Nh = c((mW, Rh) => {
    var jF = St();
    function zF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!jF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Rh.exports = zF;
  });
  var Ga = c((_W, Lh) => {
    var KF = Da(),
      YF = Nh(),
      $F = YF(KF);
    Lh.exports = $F;
  });
  var qh = c((bW, Ph) => {
    function QF(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Ph.exports = QF;
  });
  var Mh = c((TW, Fh) => {
    var ZF = Oh(),
      JF = Ga(),
      eM = mt(),
      tM = qh(),
      rM = me();
    function nM(e, t, r) {
      var n = rM(e) ? ZF : tM,
        i = arguments.length < 3;
      return n(e, eM(t, 4), r, i, JF);
    }
    Fh.exports = nM;
  });
  var Gh = c((IW, Dh) => {
    var iM = ya(),
      oM = mt(),
      aM = ma(),
      sM = Math.max,
      uM = Math.min;
    function cM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = aM(r)), (i = r < 0 ? sM(n + i, 0) : uM(i, n - 1))),
        iM(e, oM(t, 3), i, !0)
      );
    }
    Dh.exports = cM;
  });
  var Vh = c((OW, Uh) => {
    var lM = Ea(),
      fM = Gh(),
      dM = lM(fM);
    Uh.exports = dM;
  });
  function kh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function gM(e, t) {
    if (kh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!pM.call(t, r[i]) || !kh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var pM,
    Ua,
    Bh = fe(() => {
      "use strict";
      pM = Object.prototype.hasOwnProperty;
      Ua = gM;
    });
  var aE = {};
  Re(aE, {
    cleanupHTMLElement: () => fD,
    clearAllStyles: () => lD,
    clearObjectCache: () => NM,
    getActionListProgress: () => pD,
    getAffectedElements: () => Xa,
    getComputedStyle: () => UM,
    getDestinationValues: () => jM,
    getElementId: () => FM,
    getInstanceId: () => PM,
    getInstanceOrigin: () => BM,
    getItemConfigByKey: () => WM,
    getMaxDurationItemIndex: () => oE,
    getNamespacedParameterId: () => hD,
    getRenderType: () => rE,
    getStyleProp: () => zM,
    mediaQueriesEqual: () => yD,
    observeStore: () => GM,
    reduceListToGroup: () => gD,
    reifyState: () => MM,
    renderHTMLElement: () => KM,
    shallowEqual: () => Ua,
    shouldAllowMediaQuery: () => ED,
    shouldNamespaceEventParameter: () => vD,
    stringifyTarget: () => mD,
  });
  function NM() {
    Jn.clear();
  }
  function PM() {
    return "i" + LM++;
  }
  function FM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + qM++;
  }
  function MM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ni.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function GM({ store: e, select: t, onChange: r, comparator: n = DM }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, s) || ((s = l), r(s, e));
    }
    return a;
  }
  function Wh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Xa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (O, v) =>
          O.concat(
            Xa({
              config: { target: v },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: h,
        matchSelector: p,
        elementContains: g,
        isSiblingNode: E,
      } = i,
      { target: b } = e;
    if (!b) return [];
    let {
      id: _,
      objectId: A,
      selector: y,
      selectorGuids: C,
      appliesTo: w,
      useEventTarget: L,
    } = Wh(b);
    if (A) return [Jn.has(A) ? Jn.get(A) : Jn.set(A, {}).get(A)];
    if (w === Ho.PAGE) {
      let O = a(_);
      return O ? [O] : [];
    }
    let P = (t?.action?.config?.affectedElements ?? {})[_ || y] || {},
      W = !!(P.id || P.selector),
      j,
      z,
      $,
      U = t && s(Wh(t.target));
    if (
      (W
        ? ((j = P.limitAffectedElements), (z = U), ($ = s(P)))
        : (z = $ = s({ id: _, selector: y, selectorGuids: C })),
      t && L)
    ) {
      let O = r && ($ || L === !0) ? [r] : u(U);
      if ($) {
        if (L === xM) return u($).filter((v) => O.some((R) => g(v, R)));
        if (L === Hh) return u($).filter((v) => O.some((R) => g(R, v)));
        if (L === Xh) return u($).filter((v) => O.some((R) => E(R, v)));
      }
      return O;
    }
    return z == null || $ == null
      ? []
      : je && n
      ? u($).filter((O) => n.contains(O))
      : j === Hh
      ? u(z, $)
      : j === SM
      ? l(u(z)).filter(p($))
      : j === Xh
      ? h(u(z)).filter(p($))
      : u($);
  }
  function UM({ element: e, actionItem: t }) {
    if (!je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case nr:
      case ir:
      case or:
      case ar:
      case oi:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function BM(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Ct(a)) return La(a)(t[a], n);
    switch (n.actionTypeId) {
      case er:
      case tr:
      case rr:
      case Wr:
        return t[n.actionTypeId] || Wa[n.actionTypeId];
      case jr:
        return VM(t[n.actionTypeId], n.config.filters);
      case zr:
        return kM(t[n.actionTypeId], n.config.fontVariations);
      case Jh:
        return { value: (0, lt.default)(parseFloat(o(e, ti)), 1) };
      case nr: {
        let s = o(e, it),
          u = o(e, ot),
          l,
          h;
        return (
          n.config.widthUnit === bt
            ? (l = jh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (l = (0, lt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === bt
            ? (h = jh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, lt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: l, heightValue: h }
        );
      }
      case ir:
      case or:
      case ar:
        return sD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case oi:
        return { value: (0, lt.default)(o(e, ri), r.display) };
      case RM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function jM({ element: e, actionItem: t, elementApi: r }) {
    if (Ct(t.actionTypeId)) return Pa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case er:
      case tr:
      case rr:
      case Wr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case nr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!je) return { widthValue: u, heightValue: l };
        if (a === bt) {
          let h = n(e, it);
          i(e, it, ""), (u = o(e, "offsetWidth")), i(e, it, h);
        }
        if (s === bt) {
          let h = n(e, ot);
          i(e, ot, ""), (l = o(e, "offsetHeight")), i(e, ot, h);
        }
        return { widthValue: u, heightValue: l };
      }
      case ir:
      case or:
      case ar: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            l = u(e, s),
            h = (0, Yh.normalizeColor)(l);
          return {
            rValue: h.red,
            gValue: h.green,
            bValue: h.blue,
            aValue: h.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case jr:
        return t.config.filters.reduce(HM, {});
      case zr:
        return t.config.fontVariations.reduce(XM, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function rE(e) {
    if (/^TRANSFORM_/.test(e)) return Qh;
    if (/^STYLE_/.test(e)) return Ba;
    if (/^GENERAL_/.test(e)) return ka;
    if (/^PLUGIN_/.test(e)) return Zh;
  }
  function zM(e, t) {
    return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function KM(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Qh:
        return JM(e, t, r, i, a);
      case Ba:
        return uD(e, t, r, i, o, a);
      case ka:
        return cD(e, i, a);
      case Zh: {
        let { actionTypeId: l } = i;
        if (Ct(l)) return qa(l)(u, t, i);
      }
    }
  }
  function JM(e, t, r, n, i) {
    let o = ZM.map((s) => {
        let u = Wa[s],
          {
            xValue: l = u.xValue,
            yValue: h = u.yValue,
            zValue: p = u.zValue,
            xUnit: g = "",
            yUnit: E = "",
            zUnit: b = "",
          } = t[s] || {};
        switch (s) {
          case er:
            return `${EM}(${l}${g}, ${h}${E}, ${p}${b})`;
          case tr:
            return `${yM}(${l}${g}, ${h}${E}, ${p}${b})`;
          case rr:
            return `${mM}(${l}${g}) ${_M}(${h}${E}) ${bM}(${p}${b})`;
          case Wr:
            return `${TM}(${l}${g}, ${h}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Nt(e, _t, i), a(e, _t, o), rD(n, r) && a(e, Kn, IM);
  }
  function eD(e, t, r, n) {
    let i = (0, ni.default)(t, (a, s, u) => `${a} ${u}(${s}${QM(u, r)})`, ""),
      { setStyle: o } = n;
    Nt(e, Br, n), o(e, Br, i);
  }
  function tD(e, t, r, n) {
    let i = (0, ni.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Nt(e, Hr, n), o(e, Hr, i);
  }
  function rD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === er && n !== void 0) ||
      (e === tr && n !== void 0) ||
      (e === rr && (t !== void 0 || r !== void 0))
    );
  }
  function aD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function sD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ha[t],
      o = n(e, i),
      a = iD.test(o) ? o : r[i],
      s = aD(oD, a).split(Xr);
    return {
      rValue: (0, lt.default)(parseInt(s[0], 10), 255),
      gValue: (0, lt.default)(parseInt(s[1], 10), 255),
      bValue: (0, lt.default)(parseInt(s[2], 10), 255),
      aValue: (0, lt.default)(parseFloat(s[3]), 1),
    };
  }
  function uD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case nr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: l, heightValue: h } = r;
        l !== void 0 && (s === bt && (s = "px"), Nt(e, it, o), a(e, it, l + s)),
          h !== void 0 &&
            (u === bt && (u = "px"), Nt(e, ot, o), a(e, ot, h + u));
        break;
      }
      case jr: {
        eD(e, r, n.config, o);
        break;
      }
      case zr: {
        tD(e, r, n.config, o);
        break;
      }
      case ir:
      case or:
      case ar: {
        let s = Ha[n.actionTypeId],
          u = Math.round(r.rValue),
          l = Math.round(r.gValue),
          h = Math.round(r.bValue),
          p = r.aValue;
        Nt(e, s, o),
          a(e, s, p >= 1 ? `rgb(${u},${l},${h})` : `rgba(${u},${l},${h},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Nt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function cD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case oi: {
        let { value: i } = t.config;
        i === OM && je ? n(e, ri, ba) : n(e, ri, i);
        return;
      }
    }
  }
  function Nt(e, t, r) {
    if (!je) return;
    let n = tE[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Jt);
    if (!a) {
      o(e, Jt, n);
      return;
    }
    let s = a.split(Xr).map(eE);
    s.indexOf(n) === -1 && o(e, Jt, s.concat(n).join(Xr));
  }
  function nE(e, t, r) {
    if (!je) return;
    let n = tE[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Jt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Jt,
        a
          .split(Xr)
          .map(eE)
          .filter((s) => s !== n)
          .join(Xr)
      );
  }
  function lD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        l = i[u];
      l && zh({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        zh({ actionList: i[o], elementApi: t });
      });
  }
  function zh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Kh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Kh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Kh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Ct(o)
        ? (s = (u) => Fa(o)(u, i))
        : (s = iE({ effect: dD, actionTypeId: o, elementApi: r })),
        Xa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function fD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === nr) {
      let { config: a } = t;
      a.widthUnit === bt && n(e, it, ""), a.heightUnit === bt && n(e, ot, "");
    }
    i(e, Jt) && iE({ effect: nE, actionTypeId: o, elementApi: r })(e);
  }
  function dD(e, t, r) {
    let { setStyle: n } = r;
    nE(e, t, r), n(e, t, ""), t === _t && n(e, Kn, "");
  }
  function oE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function pD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, l) => {
        if (n && l === 0) return;
        let { actionItems: h } = u,
          p = h[oE(h)],
          { config: g, actionTypeId: E } = p;
        i.id === p.id && (s = a + o);
        let b = rE(E) === ka ? 0 : g.duration;
        a += g.delay + b;
      }),
      a > 0 ? kr(s / a) : 0
    );
  }
  function gD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ii.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: l }) => l.some(a));
        }),
      (0, ii.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function vD(e, { basedOn: t }) {
    return (
      (e === We.SCROLLING_IN_VIEW && (t === rt.ELEMENT || t == null)) ||
      (e === We.MOUSE_MOVE && t === rt.ELEMENT)
    );
  }
  function hD(e, t) {
    return e + CM + t;
  }
  function ED(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function yD(e, t) {
    return Ua(e && e.sort(), t && t.sort());
  }
  function mD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Va + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Va + r + Va + n;
  }
  var lt,
    ni,
    ei,
    ii,
    Yh,
    vM,
    hM,
    EM,
    yM,
    mM,
    _M,
    bM,
    TM,
    IM,
    OM,
    ti,
    Br,
    Hr,
    it,
    ot,
    $h,
    AM,
    wM,
    Hh,
    SM,
    Xh,
    xM,
    ri,
    Jt,
    bt,
    Xr,
    CM,
    Va,
    Qh,
    ka,
    Ba,
    Zh,
    er,
    tr,
    rr,
    Wr,
    Jh,
    jr,
    zr,
    nr,
    ir,
    or,
    ar,
    oi,
    RM,
    eE,
    Ha,
    tE,
    Jn,
    LM,
    qM,
    DM,
    jh,
    VM,
    kM,
    HM,
    XM,
    WM,
    Wa,
    YM,
    $M,
    QM,
    ZM,
    nD,
    iD,
    oD,
    iE,
    sE = fe(() => {
      "use strict";
      (lt = oe(Th())), (ni = oe(Mh())), (ei = oe(Vh())), (ii = oe(Ht()));
      Le();
      Bh();
      Oa();
      Yh = oe(Sa());
      Ma();
      Yn();
      ({
        BACKGROUND: vM,
        TRANSFORM: hM,
        TRANSLATE_3D: EM,
        SCALE_3D: yM,
        ROTATE_X: mM,
        ROTATE_Y: _M,
        ROTATE_Z: bM,
        SKEW: TM,
        PRESERVE_3D: IM,
        FLEX: OM,
        OPACITY: ti,
        FILTER: Br,
        FONT_VARIATION_SETTINGS: Hr,
        WIDTH: it,
        HEIGHT: ot,
        BACKGROUND_COLOR: $h,
        BORDER_COLOR: AM,
        COLOR: wM,
        CHILDREN: Hh,
        IMMEDIATE_CHILDREN: SM,
        SIBLINGS: Xh,
        PARENT: xM,
        DISPLAY: ri,
        WILL_CHANGE: Jt,
        AUTO: bt,
        COMMA_DELIMITER: Xr,
        COLON_DELIMITER: CM,
        BAR_DELIMITER: Va,
        RENDER_TRANSFORM: Qh,
        RENDER_GENERAL: ka,
        RENDER_STYLE: Ba,
        RENDER_PLUGIN: Zh,
      } = Ie),
        ({
          TRANSFORM_MOVE: er,
          TRANSFORM_SCALE: tr,
          TRANSFORM_ROTATE: rr,
          TRANSFORM_SKEW: Wr,
          STYLE_OPACITY: Jh,
          STYLE_FILTER: jr,
          STYLE_FONT_VARIATION: zr,
          STYLE_SIZE: nr,
          STYLE_BACKGROUND_COLOR: ir,
          STYLE_BORDER: or,
          STYLE_TEXT_COLOR: ar,
          GENERAL_DISPLAY: oi,
          OBJECT_VALUE: RM,
        } = Ne),
        (eE = (e) => e.trim()),
        (Ha = Object.freeze({ [ir]: $h, [or]: AM, [ar]: wM })),
        (tE = Object.freeze({
          [_t]: hM,
          [$h]: vM,
          [ti]: ti,
          [Br]: Br,
          [it]: it,
          [ot]: ot,
          [Hr]: Hr,
        })),
        (Jn = new Map());
      LM = 1;
      qM = 1;
      DM = (e, t) => e === t;
      (jh = /px/),
        (VM = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = YM[n.type]), r),
            e || {}
          )),
        (kM = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = $M[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (HM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (XM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (WM = (e, t, r) => {
          if (Ct(e)) return Na(e)(r, t);
          switch (e) {
            case jr: {
              let n = (0, ei.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case zr: {
              let n = (0, ei.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Wa = {
        [er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Wr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (YM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        ($M = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (QM = (e, t) => {
          let r = (0, ei.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (ZM = Object.keys(Wa));
      (nD = "\\(([^)]+)\\)"), (iD = /^rgb/), (oD = RegExp(`rgba?${nD}`));
      iE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case er:
            case tr:
            case rr:
            case Wr:
              e(n, _t, r);
              break;
            case jr:
              e(n, Br, r);
              break;
            case zr:
              e(n, Hr, r);
              break;
            case Jh:
              e(n, ti, r);
              break;
            case nr:
              e(n, it, r), e(n, ot, r);
              break;
            case ir:
            case or:
            case ar:
              e(n, Ha[t], r);
              break;
            case oi:
              e(n, ri, r);
              break;
          }
        };
    });
  var Lt = c((Se) => {
    "use strict";
    var sr = cn().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.IX2VanillaUtils =
      Se.IX2VanillaPlugins =
      Se.IX2ElementsReducer =
      Se.IX2Easings =
      Se.IX2EasingUtils =
      Se.IX2BrowserSupport =
        void 0;
    var _D = sr((Yn(), Ze(rh)));
    Se.IX2BrowserSupport = _D;
    var bD = sr((Ia(), Ze(Vr)));
    Se.IX2Easings = bD;
    var TD = sr((Oa(), Ze(ch)));
    Se.IX2EasingUtils = TD;
    var ID = sr((ph(), Ze(dh)));
    Se.IX2ElementsReducer = ID;
    var OD = sr((Ma(), Ze(_h)));
    Se.IX2VanillaPlugins = OD;
    var AD = sr((sE(), Ze(aE)));
    Se.IX2VanillaUtils = AD;
  });
  var si,
    ft,
    wD,
    SD,
    xD,
    CD,
    RD,
    ND,
    ai,
    uE,
    LD,
    PD,
    ja,
    qD,
    FD,
    MD,
    DD,
    cE,
    lE = fe(() => {
      "use strict";
      Le();
      (si = oe(Lt())),
        (ft = oe(Ht())),
        ({
          IX2_RAW_DATA_IMPORTED: wD,
          IX2_SESSION_STOPPED: SD,
          IX2_INSTANCE_ADDED: xD,
          IX2_INSTANCE_STARTED: CD,
          IX2_INSTANCE_REMOVED: RD,
          IX2_ANIMATION_FRAME_CHANGED: ND,
        } = ye),
        ({
          optimizeFloat: ai,
          applyEasing: uE,
          createBezierEasing: LD,
        } = si.IX2EasingUtils),
        ({ RENDER_GENERAL: PD } = Ie),
        ({
          getItemConfigByKey: ja,
          getRenderType: qD,
          getStyleProp: FD,
        } = si.IX2VanillaUtils),
        (MD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: h,
              skipToValue: p,
            } = e,
            { parameters: g } = t.payload,
            E = Math.max(1 - a, 0.01),
            b = g[n];
          b == null && ((E = 1), (b = s));
          let _ = Math.max(b, 0) || 0,
            A = ai(_ - r),
            y = h ? p : ai(r + A * E),
            C = y * 100;
          if (y === r && e.current) return e;
          let w, L, q, P;
          for (let j = 0, { length: z } = i; j < z; j++) {
            let { keyframe: $, actionItems: U } = i[j];
            if ((j === 0 && (w = U[0]), C >= $)) {
              w = U[0];
              let O = i[j + 1],
                v = O && C !== $;
              (L = v ? O.actionItems[0] : null),
                v && ((q = $ / 100), (P = (O.keyframe - $) / 100));
            }
          }
          let W = {};
          if (w && !L)
            for (let j = 0, { length: z } = o; j < z; j++) {
              let $ = o[j];
              W[$] = ja(u, $, w.config);
            }
          else if (w && L && q !== void 0 && P !== void 0) {
            let j = (y - q) / P,
              z = w.config.easing,
              $ = uE(z, j, l);
            for (let U = 0, { length: O } = o; U < O; U++) {
              let v = o[U],
                R = ja(u, v, w.config),
                Q = (ja(u, v, L.config) - R) * $ + R;
              W[v] = Q;
            }
          }
          return (0, ft.merge)(e, { position: y, current: W });
        }),
        (DD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: h,
              pluginDuration: p,
              instanceDelay: g,
              customEasingFn: E,
              skipMotion: b,
            } = e,
            _ = u.config.easing,
            { duration: A, delay: y } = u.config;
          p != null && (A = p),
            (y = g ?? y),
            a === PD ? (A = 0) : (o || b) && (A = y = 0);
          let { now: C } = t.payload;
          if (r && n) {
            let w = C - (i + y);
            if (s) {
              let j = C - i,
                z = A + y,
                $ = ai(Math.min(Math.max(0, j / z), 1));
              e = (0, ft.set)(e, "verboseTimeElapsed", z * $);
            }
            if (w < 0) return e;
            let L = ai(Math.min(Math.max(0, w / A), 1)),
              q = uE(_, L, E),
              P = {},
              W = null;
            return (
              h.length &&
                (W = h.reduce((j, z) => {
                  let $ = l[z],
                    U = parseFloat(n[z]) || 0,
                    v = (parseFloat($) - U) * q + U;
                  return (j[z] = v), j;
                }, {})),
              (P.current = W),
              (P.position = L),
              L === 1 && ((P.active = !1), (P.complete = !0)),
              (0, ft.merge)(e, P)
            );
          }
          return e;
        }),
        (cE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case wD:
              return t.payload.ixInstances || Object.freeze({});
            case SD:
              return Object.freeze({});
            case xD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: h,
                  origin: p,
                  destination: g,
                  immediate: E,
                  verbose: b,
                  continuous: _,
                  parameterId: A,
                  actionGroups: y,
                  smoothing: C,
                  restingValue: w,
                  pluginInstance: L,
                  pluginDuration: q,
                  instanceDelay: P,
                  skipMotion: W,
                  skipToValue: j,
                } = t.payload,
                { actionTypeId: z } = i,
                $ = qD(z),
                U = FD($, z),
                O = Object.keys(g).filter(
                  (R) => g[R] != null && typeof g[R] != "string"
                ),
                { easing: v } = i.config;
              return (0, ft.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: g,
                destinationKeys: O,
                immediate: E,
                verbose: b,
                current: null,
                actionItem: i,
                actionTypeId: z,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: $,
                isCarrier: h,
                styleProp: U,
                continuous: _,
                parameterId: A,
                actionGroups: y,
                smoothing: C,
                restingValue: w,
                pluginInstance: L,
                pluginDuration: q,
                instanceDelay: P,
                skipMotion: W,
                skipToValue: j,
                customEasingFn:
                  Array.isArray(v) && v.length === 4 ? LD(v) : void 0,
              });
            }
            case CD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ft.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case RD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case ND: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? MD : DD;
                r = (0, ft.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var GD,
    UD,
    VD,
    fE,
    dE = fe(() => {
      "use strict";
      Le();
      ({
        IX2_RAW_DATA_IMPORTED: GD,
        IX2_SESSION_STOPPED: UD,
        IX2_PARAMETER_CHANGED: VD,
      } = ye),
        (fE = (e = {}, t) => {
          switch (t.type) {
            case GD:
              return t.payload.ixParameters || {};
            case UD:
              return {};
            case VD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var vE = {};
  Re(vE, { default: () => BD });
  var pE,
    gE,
    kD,
    BD,
    hE = fe(() => {
      "use strict";
      pE = oe(Bo());
      Sf();
      Kf();
      Qf();
      gE = oe(Lt());
      lE();
      dE();
      ({ ixElements: kD } = gE.IX2ElementsReducer),
        (BD = (0, pE.combineReducers)({
          ixData: wf,
          ixRequest: zf,
          ixSession: $f,
          ixElements: kD,
          ixInstances: cE,
          ixParameters: fE,
        }));
    });
  var yE = c((kW, EE) => {
    var HD = Et(),
      XD = me(),
      WD = ut(),
      jD = "[object String]";
    function zD(e) {
      return typeof e == "string" || (!XD(e) && WD(e) && HD(e) == jD);
    }
    EE.exports = zD;
  });
  var _E = c((BW, mE) => {
    var KD = ha(),
      YD = KD("length");
    mE.exports = YD;
  });
  var TE = c((HW, bE) => {
    var $D = "\\ud800-\\udfff",
      QD = "\\u0300-\\u036f",
      ZD = "\\ufe20-\\ufe2f",
      JD = "\\u20d0-\\u20ff",
      e1 = QD + ZD + JD,
      t1 = "\\ufe0e\\ufe0f",
      r1 = "\\u200d",
      n1 = RegExp("[" + r1 + $D + e1 + t1 + "]");
    function i1(e) {
      return n1.test(e);
    }
    bE.exports = i1;
  });
  var NE = c((XW, RE) => {
    var OE = "\\ud800-\\udfff",
      o1 = "\\u0300-\\u036f",
      a1 = "\\ufe20-\\ufe2f",
      s1 = "\\u20d0-\\u20ff",
      u1 = o1 + a1 + s1,
      c1 = "\\ufe0e\\ufe0f",
      l1 = "[" + OE + "]",
      za = "[" + u1 + "]",
      Ka = "\\ud83c[\\udffb-\\udfff]",
      f1 = "(?:" + za + "|" + Ka + ")",
      AE = "[^" + OE + "]",
      wE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      SE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      d1 = "\\u200d",
      xE = f1 + "?",
      CE = "[" + c1 + "]?",
      p1 = "(?:" + d1 + "(?:" + [AE, wE, SE].join("|") + ")" + CE + xE + ")*",
      g1 = CE + xE + p1,
      v1 = "(?:" + [AE + za + "?", za, wE, SE, l1].join("|") + ")",
      IE = RegExp(Ka + "(?=" + Ka + ")|" + v1 + g1, "g");
    function h1(e) {
      for (var t = (IE.lastIndex = 0); IE.test(e); ) ++t;
      return t;
    }
    RE.exports = h1;
  });
  var PE = c((WW, LE) => {
    var E1 = _E(),
      y1 = TE(),
      m1 = NE();
    function _1(e) {
      return y1(e) ? m1(e) : E1(e);
    }
    LE.exports = _1;
  });
  var FE = c((jW, qE) => {
    var b1 = Un(),
      T1 = Vn(),
      I1 = St(),
      O1 = yE(),
      A1 = PE(),
      w1 = "[object Map]",
      S1 = "[object Set]";
    function x1(e) {
      if (e == null) return 0;
      if (I1(e)) return O1(e) ? A1(e) : e.length;
      var t = T1(e);
      return t == w1 || t == S1 ? e.size : b1(e).length;
    }
    qE.exports = x1;
  });
  var DE = c((zW, ME) => {
    var C1 = "Expected a function";
    function R1(e) {
      if (typeof e != "function") throw new TypeError(C1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    ME.exports = R1;
  });
  var Ya = c((KW, GE) => {
    var N1 = yt(),
      L1 = (function () {
        try {
          var e = N1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    GE.exports = L1;
  });
  var $a = c((YW, VE) => {
    var UE = Ya();
    function P1(e, t, r) {
      t == "__proto__" && UE
        ? UE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    VE.exports = P1;
  });
  var BE = c(($W, kE) => {
    var q1 = $a(),
      F1 = Cn(),
      M1 = Object.prototype,
      D1 = M1.hasOwnProperty;
    function G1(e, t, r) {
      var n = e[t];
      (!(D1.call(e, t) && F1(n, r)) || (r === void 0 && !(t in e))) &&
        q1(e, t, r);
    }
    kE.exports = G1;
  });
  var WE = c((QW, XE) => {
    var U1 = BE(),
      V1 = Dr(),
      k1 = Fn(),
      HE = nt(),
      B1 = Qt();
    function H1(e, t, r, n) {
      if (!HE(e)) return e;
      t = V1(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = B1(t[i]),
          l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var h = s[u];
          (l = n ? n(h, u, s) : void 0),
            l === void 0 && (l = HE(h) ? h : k1(t[i + 1]) ? [] : {});
        }
        U1(s, u, l), (s = s[u]);
      }
      return e;
    }
    XE.exports = H1;
  });
  var zE = c((ZW, jE) => {
    var X1 = Hn(),
      W1 = WE(),
      j1 = Dr();
    function z1(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = X1(e, a);
        r(s, a) && W1(o, j1(a, e), s);
      }
      return o;
    }
    jE.exports = z1;
  });
  var YE = c((JW, KE) => {
    var K1 = Pn(),
      Y1 = Co(),
      $1 = ta(),
      Q1 = ea(),
      Z1 = Object.getOwnPropertySymbols,
      J1 = Z1
        ? function (e) {
            for (var t = []; e; ) K1(t, $1(e)), (e = Y1(e));
            return t;
          }
        : Q1;
    KE.exports = J1;
  });
  var QE = c((ej, $E) => {
    function e2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    $E.exports = e2;
  });
  var JE = c((tj, ZE) => {
    var t2 = nt(),
      r2 = Gn(),
      n2 = QE(),
      i2 = Object.prototype,
      o2 = i2.hasOwnProperty;
    function a2(e) {
      if (!t2(e)) return n2(e);
      var t = r2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !o2.call(e, n))) || r.push(n);
      return r;
    }
    ZE.exports = a2;
  });
  var ty = c((rj, ey) => {
    var s2 = na(),
      u2 = JE(),
      c2 = St();
    function l2(e) {
      return c2(e) ? s2(e, !0) : u2(e);
    }
    ey.exports = l2;
  });
  var ny = c((nj, ry) => {
    var f2 = Jo(),
      d2 = YE(),
      p2 = ty();
    function g2(e) {
      return f2(e, p2, d2);
    }
    ry.exports = g2;
  });
  var oy = c((ij, iy) => {
    var v2 = va(),
      h2 = mt(),
      E2 = zE(),
      y2 = ny();
    function m2(e, t) {
      if (e == null) return {};
      var r = v2(y2(e), function (n) {
        return [n];
      });
      return (
        (t = h2(t)),
        E2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    iy.exports = m2;
  });
  var sy = c((oj, ay) => {
    var _2 = mt(),
      b2 = DE(),
      T2 = oy();
    function I2(e, t) {
      return T2(e, b2(_2(t)));
    }
    ay.exports = I2;
  });
  var cy = c((aj, uy) => {
    var O2 = Un(),
      A2 = Vn(),
      w2 = Nr(),
      S2 = me(),
      x2 = St(),
      C2 = qn(),
      R2 = Gn(),
      N2 = Dn(),
      L2 = "[object Map]",
      P2 = "[object Set]",
      q2 = Object.prototype,
      F2 = q2.hasOwnProperty;
    function M2(e) {
      if (e == null) return !0;
      if (
        x2(e) &&
        (S2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          C2(e) ||
          N2(e) ||
          w2(e))
      )
        return !e.length;
      var t = A2(e);
      if (t == L2 || t == P2) return !e.size;
      if (R2(e)) return !O2(e).length;
      for (var r in e) if (F2.call(e, r)) return !1;
      return !0;
    }
    uy.exports = M2;
  });
  var fy = c((sj, ly) => {
    var D2 = $a(),
      G2 = Da(),
      U2 = mt();
    function V2(e, t) {
      var r = {};
      return (
        (t = U2(t, 3)),
        G2(e, function (n, i, o) {
          D2(r, i, t(n, i, o));
        }),
        r
      );
    }
    ly.exports = V2;
  });
  var py = c((uj, dy) => {
    function k2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    dy.exports = k2;
  });
  var vy = c((cj, gy) => {
    var B2 = Wn();
    function H2(e) {
      return typeof e == "function" ? e : B2;
    }
    gy.exports = H2;
  });
  var Ey = c((lj, hy) => {
    var X2 = py(),
      W2 = Ga(),
      j2 = vy(),
      z2 = me();
    function K2(e, t) {
      var r = z2(e) ? X2 : W2;
      return r(e, j2(t));
    }
    hy.exports = K2;
  });
  var my = c((fj, yy) => {
    var Y2 = Xe(),
      $2 = function () {
        return Y2.Date.now();
      };
    yy.exports = $2;
  });
  var Ty = c((dj, by) => {
    var Q2 = nt(),
      Qa = my(),
      _y = jn(),
      Z2 = "Expected a function",
      J2 = Math.max,
      eG = Math.min;
    function tG(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        h = !1,
        p = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(Z2);
      (t = _y(t) || 0),
        Q2(r) &&
          ((h = !!r.leading),
          (p = "maxWait" in r),
          (o = p ? J2(_y(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function E(P) {
        var W = n,
          j = i;
        return (n = i = void 0), (l = P), (a = e.apply(j, W)), a;
      }
      function b(P) {
        return (l = P), (s = setTimeout(y, t)), h ? E(P) : a;
      }
      function _(P) {
        var W = P - u,
          j = P - l,
          z = t - W;
        return p ? eG(z, o - j) : z;
      }
      function A(P) {
        var W = P - u,
          j = P - l;
        return u === void 0 || W >= t || W < 0 || (p && j >= o);
      }
      function y() {
        var P = Qa();
        if (A(P)) return C(P);
        s = setTimeout(y, _(P));
      }
      function C(P) {
        return (s = void 0), g && n ? E(P) : ((n = i = void 0), a);
      }
      function w() {
        s !== void 0 && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
      }
      function L() {
        return s === void 0 ? a : C(Qa());
      }
      function q() {
        var P = Qa(),
          W = A(P);
        if (((n = arguments), (i = this), (u = P), W)) {
          if (s === void 0) return b(u);
          if (p) return clearTimeout(s), (s = setTimeout(y, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(y, t)), a;
      }
      return (q.cancel = w), (q.flush = L), q;
    }
    by.exports = tG;
  });
  var Oy = c((pj, Iy) => {
    var rG = Ty(),
      nG = nt(),
      iG = "Expected a function";
    function oG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(iG);
      return (
        nG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        rG(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Iy.exports = oG;
  });
  var wy = {};
  Re(wy, {
    actionListPlaybackChanged: () => cr,
    animationFrameChanged: () => ci,
    clearRequested: () => RG,
    elementStateChanged: () => os,
    eventListenerAdded: () => ui,
    eventStateChanged: () => rs,
    instanceAdded: () => ns,
    instanceRemoved: () => is,
    instanceStarted: () => li,
    mediaQueriesDefined: () => ss,
    parameterChanged: () => ur,
    playbackRequested: () => xG,
    previewRequested: () => SG,
    rawDataImported: () => Za,
    sessionInitialized: () => Ja,
    sessionStarted: () => es,
    sessionStopped: () => ts,
    stopRequested: () => CG,
    testFrameRendered: () => NG,
    viewportWidthChanged: () => as,
  });
  var Ay,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    gG,
    vG,
    hG,
    EG,
    yG,
    mG,
    _G,
    bG,
    TG,
    IG,
    OG,
    AG,
    wG,
    Za,
    Ja,
    es,
    ts,
    SG,
    xG,
    CG,
    RG,
    ui,
    NG,
    rs,
    ci,
    ur,
    ns,
    li,
    is,
    os,
    cr,
    as,
    ss,
    fi = fe(() => {
      "use strict";
      Le();
      (Ay = oe(Lt())),
        ({
          IX2_RAW_DATA_IMPORTED: aG,
          IX2_SESSION_INITIALIZED: sG,
          IX2_SESSION_STARTED: uG,
          IX2_SESSION_STOPPED: cG,
          IX2_PREVIEW_REQUESTED: lG,
          IX2_PLAYBACK_REQUESTED: fG,
          IX2_STOP_REQUESTED: dG,
          IX2_CLEAR_REQUESTED: pG,
          IX2_EVENT_LISTENER_ADDED: gG,
          IX2_TEST_FRAME_RENDERED: vG,
          IX2_EVENT_STATE_CHANGED: hG,
          IX2_ANIMATION_FRAME_CHANGED: EG,
          IX2_PARAMETER_CHANGED: yG,
          IX2_INSTANCE_ADDED: mG,
          IX2_INSTANCE_STARTED: _G,
          IX2_INSTANCE_REMOVED: bG,
          IX2_ELEMENT_STATE_CHANGED: TG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: IG,
          IX2_VIEWPORT_WIDTH_CHANGED: OG,
          IX2_MEDIA_QUERIES_DEFINED: AG,
        } = ye),
        ({ reifyState: wG } = Ay.IX2VanillaUtils),
        (Za = (e) => ({ type: aG, payload: { ...wG(e) } })),
        (Ja = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: sG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (es = () => ({ type: uG })),
        (ts = () => ({ type: cG })),
        (SG = ({ rawData: e, defer: t }) => ({
          type: lG,
          payload: { defer: t, rawData: e },
        })),
        (xG = ({
          actionTypeId: e = Ne.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: fG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (CG = (e) => ({ type: dG, payload: { actionListId: e } })),
        (RG = () => ({ type: pG })),
        (ui = (e, t) => ({
          type: gG,
          payload: { target: e, listenerParams: t },
        })),
        (NG = (e = 1) => ({ type: vG, payload: { step: e } })),
        (rs = (e, t) => ({ type: hG, payload: { stateKey: e, newState: t } })),
        (ci = (e, t) => ({ type: EG, payload: { now: e, parameters: t } })),
        (ur = (e, t) => ({ type: yG, payload: { key: e, value: t } })),
        (ns = (e) => ({ type: mG, payload: { ...e } })),
        (li = (e, t) => ({ type: _G, payload: { instanceId: e, time: t } })),
        (is = (e) => ({ type: bG, payload: { instanceId: e } })),
        (os = (e, t, r, n) => ({
          type: TG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (cr = ({ actionListId: e, isPlaying: t }) => ({
          type: IG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (as = ({ width: e, mediaQueries: t }) => ({
          type: OG,
          payload: { width: e, mediaQueries: t },
        })),
        (ss = () => ({ type: AG }));
    });
  var xe = {};
  Re(xe, {
    elementContains: () => ls,
    getChildElements: () => kG,
    getClosestElement: () => Kr,
    getProperty: () => MG,
    getQuerySelector: () => cs,
    getRefType: () => fs,
    getSiblingElements: () => BG,
    getStyle: () => FG,
    getValidDocument: () => GG,
    isSiblingNode: () => VG,
    matchSelector: () => DG,
    queryDocument: () => UG,
    setStyle: () => qG,
  });
  function qG(e, t, r) {
    e.style[t] = r;
  }
  function FG(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function MG(e, t) {
    return e[t];
  }
  function DG(e) {
    return (t) => t[us](e);
  }
  function cs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Sy) !== -1) {
        let n = e.split(Sy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Cy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function GG(e) {
    return e == null || e === document.documentElement.getAttribute(Cy)
      ? document
      : null;
  }
  function UG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ls(e, t) {
    return e.contains(t);
  }
  function VG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function kG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function BG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function fs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? LG
        : PG
      : null;
  }
  var xy,
    us,
    Sy,
    LG,
    PG,
    Cy,
    Kr,
    Ry = fe(() => {
      "use strict";
      xy = oe(Lt());
      Le();
      ({ ELEMENT_MATCHES: us } = xy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Sy,
          HTML_ELEMENT: LG,
          PLAIN_OBJECT: PG,
          WF_PAGE: Cy,
        } = Ie);
      Kr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[us] && r[us](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ds = c((hj, Ly) => {
    var HG = nt(),
      Ny = Object.create,
      XG = (function () {
        function e() {}
        return function (t) {
          if (!HG(t)) return {};
          if (Ny) return Ny(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Ly.exports = XG;
  });
  var di = c((Ej, Py) => {
    function WG() {}
    Py.exports = WG;
  });
  var gi = c((yj, qy) => {
    var jG = ds(),
      zG = di();
    function pi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    pi.prototype = jG(zG.prototype);
    pi.prototype.constructor = pi;
    qy.exports = pi;
  });
  var Gy = c((mj, Dy) => {
    var Fy = Vt(),
      KG = Nr(),
      YG = me(),
      My = Fy ? Fy.isConcatSpreadable : void 0;
    function $G(e) {
      return YG(e) || KG(e) || !!(My && e && e[My]);
    }
    Dy.exports = $G;
  });
  var ky = c((_j, Vy) => {
    var QG = Pn(),
      ZG = Gy();
    function Uy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = ZG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Uy(s, t - 1, r, n, i)
            : QG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Vy.exports = Uy;
  });
  var Hy = c((bj, By) => {
    var JG = ky();
    function eU(e) {
      var t = e == null ? 0 : e.length;
      return t ? JG(e, 1) : [];
    }
    By.exports = eU;
  });
  var Wy = c((Tj, Xy) => {
    function tU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Xy.exports = tU;
  });
  var Ky = c((Ij, zy) => {
    var rU = Wy(),
      jy = Math.max;
    function nU(e, t, r) {
      return (
        (t = jy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = jy(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), rU(e, this, s);
        }
      );
    }
    zy.exports = nU;
  });
  var $y = c((Oj, Yy) => {
    function iU(e) {
      return function () {
        return e;
      };
    }
    Yy.exports = iU;
  });
  var Jy = c((Aj, Zy) => {
    var oU = $y(),
      Qy = Ya(),
      aU = Wn(),
      sU = Qy
        ? function (e, t) {
            return Qy(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: oU(t),
              writable: !0,
            });
          }
        : aU;
    Zy.exports = sU;
  });
  var tm = c((wj, em) => {
    var uU = 800,
      cU = 16,
      lU = Date.now;
    function fU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = lU(),
          i = cU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= uU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    em.exports = fU;
  });
  var nm = c((Sj, rm) => {
    var dU = Jy(),
      pU = tm(),
      gU = pU(dU);
    rm.exports = gU;
  });
  var om = c((xj, im) => {
    var vU = Hy(),
      hU = Ky(),
      EU = nm();
    function yU(e) {
      return EU(hU(e, void 0, vU), e + "");
    }
    im.exports = yU;
  });
  var um = c((Cj, sm) => {
    var am = ia(),
      mU = am && new am();
    sm.exports = mU;
  });
  var lm = c((Rj, cm) => {
    function _U() {}
    cm.exports = _U;
  });
  var ps = c((Nj, dm) => {
    var fm = um(),
      bU = lm(),
      TU = fm
        ? function (e) {
            return fm.get(e);
          }
        : bU;
    dm.exports = TU;
  });
  var gm = c((Lj, pm) => {
    var IU = {};
    pm.exports = IU;
  });
  var gs = c((Pj, hm) => {
    var vm = gm(),
      OU = Object.prototype,
      AU = OU.hasOwnProperty;
    function wU(e) {
      for (
        var t = e.name + "", r = vm[t], n = AU.call(vm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    hm.exports = wU;
  });
  var hi = c((qj, Em) => {
    var SU = ds(),
      xU = di(),
      CU = 4294967295;
    function vi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = CU),
        (this.__views__ = []);
    }
    vi.prototype = SU(xU.prototype);
    vi.prototype.constructor = vi;
    Em.exports = vi;
  });
  var mm = c((Fj, ym) => {
    function RU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    ym.exports = RU;
  });
  var bm = c((Mj, _m) => {
    var NU = hi(),
      LU = gi(),
      PU = mm();
    function qU(e) {
      if (e instanceof NU) return e.clone();
      var t = new LU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = PU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    _m.exports = qU;
  });
  var Om = c((Dj, Im) => {
    var FU = hi(),
      Tm = gi(),
      MU = di(),
      DU = me(),
      GU = ut(),
      UU = bm(),
      VU = Object.prototype,
      kU = VU.hasOwnProperty;
    function Ei(e) {
      if (GU(e) && !DU(e) && !(e instanceof FU)) {
        if (e instanceof Tm) return e;
        if (kU.call(e, "__wrapped__")) return UU(e);
      }
      return new Tm(e);
    }
    Ei.prototype = MU.prototype;
    Ei.prototype.constructor = Ei;
    Im.exports = Ei;
  });
  var wm = c((Gj, Am) => {
    var BU = hi(),
      HU = ps(),
      XU = gs(),
      WU = Om();
    function jU(e) {
      var t = XU(e),
        r = WU[t];
      if (typeof r != "function" || !(t in BU.prototype)) return !1;
      if (e === r) return !0;
      var n = HU(r);
      return !!n && e === n[0];
    }
    Am.exports = jU;
  });
  var Rm = c((Uj, Cm) => {
    var Sm = gi(),
      zU = om(),
      KU = ps(),
      vs = gs(),
      YU = me(),
      xm = wm(),
      $U = "Expected a function",
      QU = 8,
      ZU = 32,
      JU = 128,
      eV = 256;
    function tV(e) {
      return zU(function (t) {
        var r = t.length,
          n = r,
          i = Sm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError($U);
          if (i && !a && vs(o) == "wrapper") var a = new Sm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = vs(o),
            u = s == "wrapper" ? KU(o) : void 0;
          u &&
          xm(u[0]) &&
          u[1] == (JU | QU | ZU | eV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[vs(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && xm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            h = l[0];
          if (a && l.length == 1 && YU(h)) return a.plant(h).value();
          for (var p = 0, g = r ? t[p].apply(this, l) : h; ++p < r; )
            g = t[p].call(this, g);
          return g;
        };
      });
    }
    Cm.exports = tV;
  });
  var Lm = c((Vj, Nm) => {
    var rV = Rm(),
      nV = rV();
    Nm.exports = nV;
  });
  var qm = c((kj, Pm) => {
    function iV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Pm.exports = iV;
  });
  var Mm = c((Bj, Fm) => {
    var oV = qm(),
      hs = jn();
    function aV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = hs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = hs(t)), (t = t === t ? t : 0)),
        oV(hs(e), t, r)
      );
    }
    Fm.exports = aV;
  });
  var Wm,
    jm,
    zm,
    Km,
    sV,
    uV,
    cV,
    lV,
    fV,
    dV,
    pV,
    gV,
    vV,
    hV,
    EV,
    yV,
    mV,
    _V,
    bV,
    Ym,
    $m,
    TV,
    IV,
    OV,
    Qm,
    AV,
    wV,
    Zm,
    SV,
    Es,
    Jm,
    Dm,
    Gm,
    e_,
    $r,
    xV,
    at,
    t_,
    CV,
    qe,
    ze,
    Qr,
    r_,
    ys,
    Um,
    ms,
    RV,
    Yr,
    NV,
    LV,
    PV,
    n_,
    Vm,
    qV,
    km,
    FV,
    MV,
    DV,
    Bm,
    yi,
    mi,
    Hm,
    Xm,
    i_,
    o_ = fe(() => {
      "use strict";
      (Wm = oe(Lm())), (jm = oe(Xn())), (zm = oe(Mm()));
      Le();
      _s();
      fi();
      (Km = oe(Lt())),
        ({
          MOUSE_CLICK: sV,
          MOUSE_SECOND_CLICK: uV,
          MOUSE_DOWN: cV,
          MOUSE_UP: lV,
          MOUSE_OVER: fV,
          MOUSE_OUT: dV,
          DROPDOWN_CLOSE: pV,
          DROPDOWN_OPEN: gV,
          SLIDER_ACTIVE: vV,
          SLIDER_INACTIVE: hV,
          TAB_ACTIVE: EV,
          TAB_INACTIVE: yV,
          NAVBAR_CLOSE: mV,
          NAVBAR_OPEN: _V,
          MOUSE_MOVE: bV,
          PAGE_SCROLL_DOWN: Ym,
          SCROLL_INTO_VIEW: $m,
          SCROLL_OUT_OF_VIEW: TV,
          PAGE_SCROLL_UP: IV,
          SCROLLING_IN_VIEW: OV,
          PAGE_FINISH: Qm,
          ECOMMERCE_CART_CLOSE: AV,
          ECOMMERCE_CART_OPEN: wV,
          PAGE_START: Zm,
          PAGE_SCROLL: SV,
        } = We),
        (Es = "COMPONENT_ACTIVE"),
        (Jm = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Dm } = Ie),
        ({ getNamespacedParameterId: Gm } = Km.IX2VanillaUtils),
        (e_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        ($r = e_(({ element: e, nativeEvent: t }) => e === t.target)),
        (xV = e_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (at = (0, Wm.default)([$r, xV])),
        (t_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !RV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (CV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!t_(e, n);
        }),
        (qe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = t_(e, u);
          return (
            l &&
              lr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Dm + n.split(Dm)[1],
                actionListId: (0, jm.default)(l, "action.config.actionListId"),
              }),
            lr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            Zr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Qr = { handler: ze(at, qe) }),
        (r_ = { ...Qr, types: [Es, Jm].join(" ") }),
        (ys = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Um = "mouseover mouseout"),
        (ms = { types: ys }),
        (RV = { PAGE_START: Zm, PAGE_FINISH: Qm }),
        (Yr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, zm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (NV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (LV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (PV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Yr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return NV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (n_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Es, Jm].indexOf(n) !== -1 ? n === Es : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Vm = (e) => (t, r) => {
          let n = { elementHovered: LV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (qV = (e) => (t, r) => {
          let n = { ...r, elementVisible: PV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (km =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Yr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
              h = l === "PX",
              p = i - o,
              g = Number((n / p).toFixed(2));
            if (r && r.percentTop === g) return r;
            let E = (h ? u : (o * (u || 0)) / 100) / p,
              b,
              _,
              A = 0;
            r &&
              ((b = g > r.percentTop),
              (_ = r.scrollingDown !== b),
              (A = _ ? g : r.anchorTop));
            let y = s === Ym ? g >= A + E : g <= A - E,
              C = {
                ...r,
                percentTop: g,
                inBounds: y,
                anchorTop: A,
                scrollingDown: b,
              };
            return (r && y && (_ || C.inBounds !== r.inBounds) && e(t, C)) || C;
          }),
        (FV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (MV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (DV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Bm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (yi = (e = !0) => ({
          ...r_,
          handler: ze(
            e ? at : $r,
            n_((t, r) => (r.isActive ? Qr.handler(t, r) : r))
          ),
        })),
        (mi = (e = !0) => ({
          ...r_,
          handler: ze(
            e ? at : $r,
            n_((t, r) => (r.isActive ? r : Qr.handler(t, r)))
          ),
        })),
        (Hm = {
          ...ms,
          handler: qV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === $m) === r
              ? (qe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Xm = 0.05),
        (i_ = {
          [vV]: yi(),
          [hV]: mi(),
          [gV]: yi(),
          [pV]: mi(),
          [_V]: yi(!1),
          [mV]: mi(!1),
          [EV]: yi(),
          [yV]: mi(),
          [wV]: { types: "ecommerce-cart-open", handler: ze(at, qe) },
          [AV]: { types: "ecommerce-cart-close", handler: ze(at, qe) },
          [sV]: {
            types: "click",
            handler: ze(
              at,
              Bm((e, { clickCount: t }) => {
                CV(e) ? t === 1 && qe(e) : qe(e);
              })
            ),
          },
          [uV]: {
            types: "click",
            handler: ze(
              at,
              Bm((e, { clickCount: t }) => {
                t === 2 && qe(e);
              })
            ),
          },
          [cV]: { ...Qr, types: "mousedown" },
          [lV]: { ...Qr, types: "mouseup" },
          [fV]: {
            types: Um,
            handler: ze(
              at,
              Vm((e, t) => {
                t.elementHovered && qe(e);
              })
            ),
          },
          [dV]: {
            types: Um,
            handler: ze(
              at,
              Vm((e, t) => {
                t.elementHovered || qe(e);
              })
            ),
          },
          [bV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: l,
                  restingState: h = 0,
                } = r,
                {
                  clientX: p = o.clientX,
                  clientY: g = o.clientY,
                  pageX: E = o.pageX,
                  pageY: b = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                A = n.type === "mouseout",
                y = h / 100,
                C = u,
                w = !1;
              switch (a) {
                case rt.VIEWPORT: {
                  y = _
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case rt.PAGE: {
                  let {
                    scrollLeft: L,
                    scrollTop: q,
                    scrollWidth: P,
                    scrollHeight: W,
                  } = Yr();
                  y = _ ? Math.min(L + E, P) / P : Math.min(q + b, W) / W;
                  break;
                }
                case rt.ELEMENT:
                default: {
                  C = Gm(i, u);
                  let L = n.type.indexOf("mouse") === 0;
                  if (L && at({ element: t, nativeEvent: n }) !== !0) break;
                  let q = t.getBoundingClientRect(),
                    { left: P, top: W, width: j, height: z } = q;
                  if (!L && !FV({ left: p, top: g }, q)) break;
                  (w = !0), (y = _ ? (p - P) / j : (g - W) / z);
                  break;
                }
              }
              return (
                A && (y > 1 - Xm || y < Xm) && (y = Math.round(y)),
                (a !== rt.ELEMENT || w || w !== o.elementHovered) &&
                  ((y = l ? 1 - y : y), e.dispatch(ur(C, y))),
                {
                  elementHovered: w,
                  clientX: p,
                  clientY: g,
                  pageX: E,
                  pageY: b,
                }
              );
            },
          },
          [SV]: {
            types: ys,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Yr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(ur(r, s));
            },
          },
          [OV]: {
            types: ys,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: l,
                } = Yr(),
                {
                  basedOn: h,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: b,
                  addEndOffset: _,
                  addStartOffset: A,
                  addOffsetValue: y = 0,
                  endOffsetValue: C = 0,
                } = r,
                w = p === "X_AXIS";
              if (h === rt.VIEWPORT) {
                let L = w ? o / s : a / u;
                return (
                  L !== i.scrollPercent && t.dispatch(ur(g, L)),
                  { scrollPercent: L }
                );
              } else {
                let L = Gm(n, g),
                  q = e.getBoundingClientRect(),
                  P = (A ? y : 0) / 100,
                  W = (_ ? C : 0) / 100;
                (P = E ? P : 1 - P), (W = b ? W : 1 - W);
                let j = q.top + Math.min(q.height * P, l),
                  $ = q.top + q.height * W - j,
                  U = Math.min(l + $, u),
                  v = Math.min(Math.max(0, l - j), U) / U;
                return (
                  v !== i.scrollPercent && t.dispatch(ur(L, v)),
                  { scrollPercent: v }
                );
              }
            },
          },
          [$m]: Hm,
          [TV]: Hm,
          [Ym]: {
            ...ms,
            handler: km((e, t) => {
              t.scrollingDown && qe(e);
            }),
          },
          [IV]: {
            ...ms,
            handler: km((e, t) => {
              t.scrollingDown || qe(e);
            }),
          },
          [Qm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: ze($r, MV(qe)),
          },
          [Zm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: ze($r, DV(qe)),
          },
        });
    });
  var T_ = {};
  Re(T_, {
    observeRequests: () => nk,
    startActionGroup: () => Zr,
    startEngine: () => Ai,
    stopActionGroup: () => lr,
    stopAllActionGroups: () => m_,
    stopEngine: () => wi,
  });
  function nk(e) {
    Pt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: ak }),
      Pt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: sk }),
      Pt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: uk }),
      Pt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: ck });
  }
  function ik(e) {
    Pt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        wi(e),
          v_({ store: e, elementApi: xe }),
          Ai({ store: e, allowEvents: !0 }),
          h_();
      },
    });
  }
  function ok(e, t) {
    let r = Pt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function ak({ rawData: e, defer: t }, r) {
    let n = () => {
      Ai({ store: r, rawData: e, allowEvents: !0 }), h_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function h_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function sk(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: h } = e;
    if (n && i && h && s) {
      let p = h.actionLists[n];
      p && (h = jV({ actionList: p, actionItemId: i, rawData: h }));
    }
    if (
      (Ai({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === Ne.GENERAL_START_ACTION) || bs(r))
    ) {
      lr({ store: t, actionListId: n }),
        y_({ store: t, actionListId: n, eventId: o });
      let p = Zr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: l,
      });
      l && p && t.dispatch(cr({ actionListId: n, isPlaying: !s }));
    }
  }
  function uk({ actionListId: e }, t) {
    e ? lr({ store: t, actionListId: e }) : m_({ store: t }), wi(t);
  }
  function ck(e, t) {
    wi(t), v_({ store: t, elementApi: xe });
  }
  function Ai({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Za(t)),
      i.active ||
        (e.dispatch(
          Ja({
            hasBoundaryNodes: !!document.querySelector(bi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (vk(e), lk(), e.getState().ixSession.hasDefinedMediaQueries && ik(e)),
        e.dispatch(es()),
        fk(e, n));
  }
  function lk() {
    let { documentElement: e } = document;
    e.className.indexOf(a_) === -1 && (e.className += ` ${a_}`);
  }
  function fk(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ci(n, o)), t ? ok(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function wi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(dk), $V(), e.dispatch(ts());
    }
  }
  function dk({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function pk({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: h } = e.getState(),
      { events: p } = l,
      g = p[n],
      { eventTypeId: E } = g,
      b = {},
      _ = {},
      A = [],
      { continuousActionGroups: y } = a,
      { id: C } = a;
    zV(E, i) && (C = KV(t, C));
    let w = h.hasBoundaryNodes && r ? Kr(r, bi) : null;
    y.forEach((L) => {
      let { keyframe: q, actionItems: P } = L;
      P.forEach((W) => {
        let { actionTypeId: j } = W,
          { target: z } = W.config;
        if (!z) return;
        let $ = z.boundaryMode ? w : null,
          U = QV(z) + Ts + j;
        if (((_[U] = gk(_[U], q, W)), !b[U])) {
          b[U] = !0;
          let { config: O } = W;
          Ti({
            config: O,
            event: g,
            eventTarget: r,
            elementRoot: $,
            elementApi: xe,
          }).forEach((v) => {
            A.push({ element: v, key: U });
          });
        }
      });
    }),
      A.forEach(({ element: L, key: q }) => {
        let P = _[q],
          W = (0, dt.default)(P, "[0].actionItems[0]", {}),
          { actionTypeId: j } = W,
          z = Oi(j) ? Os(j)(L, W) : null,
          $ = Is({ element: L, actionItem: W, elementApi: xe }, z);
        As({
          store: e,
          element: L,
          eventId: n,
          actionListId: o,
          actionItem: W,
          destination: $,
          continuous: !0,
          parameterId: C,
          actionGroups: P,
          smoothing: s,
          restingValue: u,
          pluginInstance: z,
        });
      });
  }
  function gk(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function vk(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    E_(e),
      (0, fr.default)(r, (i, o) => {
        let a = i_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        bk({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && Ek(e);
  }
  function Ek(e) {
    let t = () => {
      E_(e);
    };
    hk.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ui(window, [r, t]));
    }),
      t();
  }
  function E_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(as({ width: n, mediaQueries: i }));
    }
  }
  function bk({ logic: e, store: t, events: r }) {
    Tk(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = yk(r, _k);
    if (!(0, c_.default)(s)) return;
    (0, fr.default)(s, (p, g) => {
      let E = r[g],
        { action: b, id: _, mediaQueries: A = o.mediaQueryKeys } = E,
        { actionListId: y } = b.config;
      ZV(A, o.mediaQueryKeys) || t.dispatch(ss()),
        b.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((w) => {
            let { continuousParameterGroupId: L } = w,
              q = (0, dt.default)(a, `${y}.continuousParameterGroups`, []),
              P = (0, u_.default)(q, ({ id: z }) => z === L),
              W = (w.smoothing || 0) / 100,
              j = (w.restingState || 0) / 100;
            P &&
              p.forEach((z, $) => {
                let U = _ + Ts + $;
                pk({
                  store: t,
                  eventStateKey: U,
                  eventTarget: z,
                  eventId: _,
                  eventConfig: w,
                  actionListId: y,
                  parameterGroup: P,
                  smoothing: W,
                  restingValue: j,
                });
              });
          }),
        (b.actionTypeId === Ne.GENERAL_START_ACTION || bs(b.actionTypeId)) &&
          y_({ store: t, actionListId: y, eventId: _ });
    });
    let u = (p) => {
        let { ixSession: g } = t.getState();
        mk(s, (E, b, _) => {
          let A = r[b],
            y = g.eventState[_],
            { action: C, mediaQueries: w = o.mediaQueryKeys } = A;
          if (!Ii(w, g.mediaQueryKey)) return;
          let L = (q = {}) => {
            let P = i(
              {
                store: t,
                element: E,
                event: A,
                eventConfig: q,
                nativeEvent: p,
                eventStateKey: _,
              },
              y
            );
            JV(P, y) || t.dispatch(rs(_, P));
          };
          C.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(L)
            : L();
        });
      },
      l = (0, p_.default)(u, rk),
      h = ({ target: p = document, types: g, throttle: E }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((b) => {
            let _ = E ? l : u;
            p.addEventListener(b, _), t.dispatch(ui(p, [b, _]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function Tk(e) {
    if (!tk) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = cs(o);
      t[a] ||
        ((i === We.MOUSE_CLICK || i === We.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function y_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, dt.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, dt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ii(h, i.mediaQueryKey)) return;
      l.forEach((p) => {
        let { config: g, actionTypeId: E } = p,
          b =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          _ = Ti({ config: b, event: s, elementApi: xe }),
          A = Oi(E);
        _.forEach((y) => {
          let C = A ? Os(E)(y, p) : null;
          As({
            destination: Is({ element: y, actionItem: p, elementApi: xe }, C),
            immediate: !0,
            store: e,
            element: y,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: C,
          });
        });
      });
    }
  }
  function m_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, fr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        ws(r, e), i && e.dispatch(cr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  
  function lr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Kr(r, bi) : null;
    (0, fr.default)(o, (u) => {
      let l = (0, dt.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && h) {
        if (s && l && !ls(s, u.element)) return;
        ws(u, e),
          u.verbose && e.dispatch(cr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Zr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: h } = u,
      p = h[t] || {},
      { mediaQueries: g = u.mediaQueryKeys } = p,
      E = (0, dt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: b, useFirstGroupAsInitialState: _ } = E;
    if (!b || !b.length) return !1;
    o >= b.length && (0, dt.default)(p, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let y =
        (o === 0 || (o === 1 && _)) && bs(p.action?.actionTypeId)
          ? p.config.delay
          : void 0,
      C = (0, dt.default)(b, [o, "actionItems"], []);
    if (!C.length || !Ii(g, l.mediaQueryKey)) return !1;
    let w = l.hasBoundaryNodes && r ? Kr(r, bi) : null,
      L = HV(C),
      q = !1;
    return (
      C.forEach((P, W) => {
        let { config: j, actionTypeId: z } = P,
          $ = Oi(z),
          { target: U } = j;
        if (!U) return;
        let O = U.boundaryMode ? w : null;
        Ti({
          config: j,
          event: p,
          eventTarget: r,
          elementRoot: O,
          elementApi: xe,
        }).forEach((R, F) => {
          let G = $ ? Os(z)(R, P) : null,
            Q = $ ? ek(z)(R, P) : null;
          q = !0;
          let Z = L === W && F === 0,
            M = XV({ element: R, actionItem: P }),
            X = Is({ element: R, actionItem: P, elementApi: xe }, G);
          As({
            store: e,
            element: R,
            actionItem: P,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: Z,
            computedStyle: M,
            destination: X,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: Q,
            instanceDelay: y,
          });
        });
      }),
      q
    );
  }
  function As(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: h,
      } = n,
      p = !u,
      g = kV(),
      { ixElements: E, ixSession: b, ixData: _ } = t.getState(),
      A = VV(E, i),
      { refState: y } = E[A] || {},
      C = fs(i),
      w = b.reducedMotion && Wo[o.actionTypeId],
      L;
    if (w && u)
      switch (_.events[h]?.eventTypeId) {
        case We.MOUSE_MOVE:
        case We.MOUSE_MOVE_IN_VIEWPORT:
          L = l;
          break;
        default:
          L = 0.5;
          break;
      }
    let q = WV(i, y, r, o, xe, s);
    if (
      (t.dispatch(
        ns({
          instanceId: g,
          elementId: A,
          origin: q,
          refType: C,
          skipMotion: w,
          skipToValue: L,
          ...n,
        })
      ),
      __(document.body, "ix2-animation-started", g),
      a)
    ) {
      Ik(t, g);
      return;
    }
    Pt({ store: t, select: ({ ixInstances: P }) => P[g], onChange: b_ }),
      p && t.dispatch(li(g, b.tick));
  }
  function ws(e, t) {
    __(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === g_ && YV(o, n, xe), t.dispatch(is(e.id));
  }
  function __(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function Ik(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(li(t, 0)), e.dispatch(ci(performance.now(), r));
    let { ixInstances: n } = e.getState();
    b_(n[t], e);
  }
  function b_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: h,
        eventId: p,
        eventTarget: g,
        eventStateKey: E,
        actionListId: b,
        isCarrier: _,
        styleProp: A,
        verbose: y,
        pluginInstance: C,
      } = e,
      { ixData: w, ixSession: L } = t.getState(),
      { events: q } = w,
      P = q[p] || {},
      { mediaQueries: W = w.mediaQueryKeys } = P;
    if (Ii(W, L.mediaQueryKey) && (n || r || i)) {
      if (l || (u === UV && i)) {
        t.dispatch(os(o, s, l, a));
        let { ixElements: j } = t.getState(),
          { ref: z, refType: $, refState: U } = j[o] || {},
          O = U && U[s];
        ($ === g_ || Oi(s)) && BV(z, U, O, p, a, A, xe, u, C);
      }
      if (i) {
        if (_) {
          let j = Zr({
            store: t,
            eventId: p,
            eventTarget: g,
            eventStateKey: E,
            actionListId: b,
            groupIndex: h + 1,
            verbose: y,
          });
          y && !j && t.dispatch(cr({ actionListId: b, isPlaying: !1 }));
        }
        ws(e, t);
      }
    }
  }
  var u_,
    dt,
    c_,
    l_,
    f_,
    d_,
    fr,
    p_,
    _i,
    GV,
    bs,
    Ts,
    bi,
    g_,
    UV,
    a_,
    Ti,
    VV,
    Is,
    Pt,
    kV,
    BV,
    v_,
    HV,
    XV,
    WV,
    jV,
    zV,
    KV,
    Ii,
    YV,
    $V,
    QV,
    ZV,
    JV,
    Oi,
    Os,
    ek,
    s_,
    tk,
    rk,
    hk,
    yk,
    mk,
    _k,
    _s = fe(() => {
      "use strict";
      (u_ = oe(_a())),
        (dt = oe(Xn())),
        (c_ = oe(FE())),
        (l_ = oe(sy())),
        (f_ = oe(cy())),
        (d_ = oe(fy())),
        (fr = oe(Ey())),
        (p_ = oe(Oy()));
      Le();
      _i = oe(Lt());
      fi();
      Ry();
      o_();
      (GV = Object.keys(Tn)),
        (bs = (e) => GV.includes(e)),
        ({
          COLON_DELIMITER: Ts,
          BOUNDARY_SELECTOR: bi,
          HTML_ELEMENT: g_,
          RENDER_GENERAL: UV,
          W_MOD_IX: a_,
        } = Ie),
        ({
          getAffectedElements: Ti,
          getElementId: VV,
          getDestinationValues: Is,
          observeStore: Pt,
          getInstanceId: kV,
          renderHTMLElement: BV,
          clearAllStyles: v_,
          getMaxDurationItemIndex: HV,
          getComputedStyle: XV,
          getInstanceOrigin: WV,
          reduceListToGroup: jV,
          shouldNamespaceEventParameter: zV,
          getNamespacedParameterId: KV,
          shouldAllowMediaQuery: Ii,
          cleanupHTMLElement: YV,
          clearObjectCache: $V,
          stringifyTarget: QV,
          mediaQueriesEqual: ZV,
          shallowEqual: JV,
        } = _i.IX2VanillaUtils),
        ({
          isPluginType: Oi,
          createPluginInstance: Os,
          getPluginDuration: ek,
        } = _i.IX2VanillaPlugins),
        (s_ = navigator.userAgent),
        (tk = s_.match(/iPad/i) || s_.match(/iPhone/)),
        (rk = 12);
      hk = ["resize", "orientationchange"];
      (yk = (e, t) => (0, l_.default)((0, d_.default)(e, t), f_.default)),
        (mk = (e, t) => {
          (0, fr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Ts + o;
              t(i, n, a);
            });
          });
        }),
        (_k = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ti({ config: t, elementApi: xe });
        });
    });
  var O_ = c((pt) => {
    "use strict";
    var Ok = cn().default,
      Ak = ou().default;
    Object.defineProperty(pt, "__esModule", { value: !0 });
    pt.actions = void 0;
    pt.destroy = I_;
    pt.init = Rk;
    pt.setEnv = Ck;
    pt.store = void 0;
    Xl();
    var wk = Bo(),
      Sk = Ak((hE(), Ze(vE))),
      Ss = (_s(), Ze(T_)),
      xk = Ok((fi(), Ze(wy)));
    pt.actions = xk;
    var xs = (pt.store = (0, wk.createStore)(Sk.default));
    function Ck(e) {
      e() && (0, Ss.observeRequests)(xs);
    }
    function Rk(e) {
      I_(), (0, Ss.startEngine)({ store: xs, rawData: e, allowEvents: !0 });
    }
    function I_() {
      (0, Ss.stopEngine)(xs);
    }
  });
  var x_ = c((Qj, S_) => {
    "use strict";
    var A_ = Fe(),
      w_ = O_();
    w_.setEnv(A_.env);
    A_.define(
      "ix2",
      (S_.exports = function () {
        return w_;
      })
    );
  });
  var R_ = c((Zj, C_) => {
    "use strict";
    var dr = Fe();
    dr.define(
      "links",
      (C_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = dr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          h = /\/$/,
          p,
          g;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && dr.env("design")),
            (g = dr.env("slug") || a.pathname || ""),
            dr.scroll.off(_),
            (p = []);
          for (var y = document.links, C = 0; C < y.length; ++C) b(y[C]);
          p.length && (dr.scroll.on(_), _());
        }
        function b(y) {
          if (!y.getAttribute("hreflang")) {
            var C =
              (i && y.getAttribute("href-disabled")) || y.getAttribute("href");
            if (((s.href = C), !(C.indexOf(":") >= 0))) {
              var w = e(y);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var L = e(s.hash);
                L.length && p.push({ link: w, sec: L, active: !1 });
                return;
              }
              if (!(C === "#" || C === "")) {
                var q =
                  s.href === a.href || C === g || (l.test(C) && h.test(g));
                A(w, u, q);
              }
            }
          }
        }
        function _() {
          var y = n.scrollTop(),
            C = n.height();
          t.each(p, function (w) {
            if (!w.link.attr("hreflang")) {
              var L = w.link,
                q = w.sec,
                P = q.offset().top,
                W = q.outerHeight(),
                j = C * 0.5,
                z = q.is(":visible") && P + W - j >= y && P + j <= y + C;
              w.active !== z && ((w.active = z), A(L, u, z));
            }
          });
        }
        function A(y, C, w) {
          var L = y.hasClass(C);
          (w && L) || (!w && !L) || (w ? y.addClass(C) : y.removeClass(C));
        }
        return r;
      })
    );
  });
  var L_ = c((Jj, N_) => {
    "use strict";
    var Si = Fe();
    Si.define(
      "scroll",
      (N_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = b() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (O) {
              window.setTimeout(O, 15);
            },
          u = Si.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(g));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(O) {
          return _.test(O.hash) && O.host + O.pathname === r.host + r.pathname;
        }
        let y =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function C() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            y.matches
          );
        }
        function w(O, v) {
          var R;
          switch (v) {
            case "add":
              (R = O.attr("tabindex")),
                R
                  ? O.attr("data-wf-tabindex-swap", R)
                  : O.attr("tabindex", "-1");
              break;
            case "remove":
              (R = O.attr("data-wf-tabindex-swap")),
                R
                  ? (O.attr("tabindex", R),
                    O.removeAttr("data-wf-tabindex-swap"))
                  : O.removeAttr("tabindex");
              break;
          }
          O.toggleClass("wf-force-outline-none", v === "add");
        }
        function L(O) {
          var v = O.currentTarget;
          if (
            !(
              Si.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))
            )
          ) {
            var R = A(v) ? v.hash : "";
            if (R !== "") {
              var F = e(R);
              F.length &&
                (O && (O.preventDefault(), O.stopPropagation()),
                q(R, O),
                window.setTimeout(
                  function () {
                    P(F, function () {
                      w(F, "add"),
                        F.get(0).focus({ preventScroll: !0 }),
                        w(F, "remove");
                    });
                  },
                  O ? 0 : 300
                ));
            }
          }
        }
        function q(O) {
          if (
            r.hash !== O &&
            n &&
            n.pushState &&
            !(Si.env.chrome && r.protocol === "file:")
          ) {
            var v = n.state && n.state.hash;
            v !== O && n.pushState({ hash: O }, "", O);
          }
        }
        function P(O, v) {
          var R = i.scrollTop(),
            F = W(O);
          if (R !== F) {
            var G = j(O, R, F),
              Q = Date.now(),
              Z = function () {
                var M = Date.now() - Q;
                window.scroll(0, z(R, F, M, G)),
                  M <= G ? s(Z) : typeof v == "function" && v();
              };
            s(Z);
          }
        }
        function W(O) {
          var v = e(l),
            R = v.css("position") === "fixed" ? v.outerHeight() : 0,
            F = O.offset().top - R;
          if (O.data("scroll") === "mid") {
            var G = i.height() - R,
              Q = O.outerHeight();
            Q < G && (F -= Math.round((G - Q) / 2));
          }
          return F;
        }
        function j(O, v, R) {
          if (C()) return 0;
          var F = 1;
          return (
            a.add(O).each(function (G, Q) {
              var Z = parseFloat(Q.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (F = Z);
            }),
            (472.143 * Math.log(Math.abs(v - R) + 125) - 2e3) * F
          );
        }
        function z(O, v, R, F) {
          return R > F ? v : O + (v - O) * $(R / F);
        }
        function $(O) {
          return O < 0.5
            ? 4 * O * O * O
            : (O - 1) * (2 * O - 2) * (2 * O - 2) + 1;
        }
        function U() {
          var { WF_CLICK_EMPTY: O, WF_CLICK_SCROLL: v } = t;
          o.on(v, p, L),
            o.on(O, h, function (R) {
              R.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: U };
      })
    );
  });
  var q_ = c((ez, P_) => {
    "use strict";
    var Nk = Fe();
    Nk.define(
      "touch",
      (P_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            h;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", b, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", b, !1);
          function p(A) {
            var y = A.touches;
            (y && y.length > 1) ||
              ((a = !0),
              y ? ((s = !0), (l = y[0].clientX)) : (l = A.clientX),
              (h = l));
          }
          function g(A) {
            if (a) {
              if (s && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var y = A.touches,
                C = y ? y[0].clientX : A.clientX,
                w = C - h;
              (h = C),
                Math.abs(w) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", A, { direction: w > 0 ? "right" : "left" }), b());
            }
          }
          function E(A) {
            if (a && ((a = !1), s && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (s = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", b, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", b, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var D_ = c((tz, M_) => {
    "use strict";
    var qt = Fe(),
      Lk = un(),
      Ke = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      F_ = !0,
      Pk = /^#[a-zA-Z0-9\-_]+$/;
    qt.define(
      "dropdown",
      (M_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = qt.env(),
          o = !1,
          a,
          s = qt.env.touch,
          u = ".w-dropdown",
          l = "w--open",
          h = Lk.triggers,
          p = 900,
          g = "focusout" + u,
          E = "keydown" + u,
          b = "mouseenter" + u,
          _ = "mousemove" + u,
          A = "mouseleave" + u,
          y = (s ? "click" : "mouseup") + u,
          C = "w-close" + u,
          w = "setting" + u,
          L = e(document),
          q;
        (n.ready = P),
          (n.design = function () {
            o && v(), (o = !1), P();
          }),
          (n.preview = function () {
            (o = !0), P();
          });
        function P() {
          (a = i && qt.env("design")), (q = L.find(u)), q.each(W);
        }
        function W(d, k) {
          var B = e(k),
            N = e.data(k, u);
          N ||
            (N = e.data(k, u, {
              open: !1,
              el: B,
              config: {},
              selectedIdx: -1,
            })),
            (N.toggle = N.el.children(".w-dropdown-toggle")),
            (N.list = N.el.children(".w-dropdown-list")),
            (N.links = N.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (N.complete = G(N)),
            (N.mouseLeave = Z(N)),
            (N.mouseUpOutside = F(N)),
            (N.mouseMoveOutside = M(N)),
            j(N);
          var re = N.toggle.attr("id"),
            Ee = N.list.attr("id");
          re || (re = "w-dropdown-toggle-" + d),
            Ee || (Ee = "w-dropdown-list-" + d),
            N.toggle.attr("id", re),
            N.toggle.attr("aria-controls", Ee),
            N.toggle.attr("aria-haspopup", "menu"),
            N.toggle.attr("aria-expanded", "false"),
            N.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            N.toggle.prop("tagName") !== "BUTTON" &&
              (N.toggle.attr("role", "button"),
              N.toggle.attr("tabindex") || N.toggle.attr("tabindex", "0")),
            N.list.attr("id", Ee),
            N.list.attr("aria-labelledby", re),
            N.links.each(function (De, Ye) {
              Ye.hasAttribute("tabindex") || Ye.setAttribute("tabindex", "0"),
                Pk.test(Ye.hash) &&
                  Ye.addEventListener("click", O.bind(null, N));
            }),
            N.el.off(u),
            N.toggle.off(u),
            N.nav && N.nav.off(u);
          var ae = $(N, F_);
          a && N.el.on(w, z(N)),
            a ||
              (i && ((N.hovering = !1), O(N)),
              N.config.hover && N.toggle.on(b, Q(N)),
              N.el.on(C, ae),
              N.el.on(E, X(N)),
              N.el.on(g, D(N)),
              N.toggle.on(y, ae),
              N.toggle.on(E, V(N)),
              (N.nav = N.el.closest(".w-nav")),
              N.nav.on(C, ae));
        }
        function j(d) {
          var k = Number(d.el.css("z-index"));
          (d.manageZ = k === p || k === p + 1),
            (d.config = {
              hover: d.el.attr("data-hover") === "true" && !s,
              delay: d.el.attr("data-delay"),
            });
        }
        function z(d) {
          return function (k, B) {
            (B = B || {}),
              j(d),
              B.open === !0 && U(d, !0),
              B.open === !1 && O(d, { immediate: !0 });
          };
        }
        function $(d, k) {
          return r(function (B) {
            if (d.open || (B && B.type === "w-close"))
              return O(d, { forceClose: k });
            U(d);
          });
        }
        function U(d) {
          if (!d.open) {
            R(d),
              (d.open = !0),
              d.list.addClass(l),
              d.toggle.addClass(l),
              d.toggle.attr("aria-expanded", "true"),
              h.intro(0, d.el[0]),
              qt.redraw.up(),
              d.manageZ && d.el.css("z-index", p + 1);
            var k = qt.env("editor");
            a || L.on(y, d.mouseUpOutside),
              d.hovering && !k && d.el.on(A, d.mouseLeave),
              d.hovering && k && L.on(_, d.mouseMoveOutside),
              window.clearTimeout(d.delayId);
          }
        }
        function O(d, { immediate: k, forceClose: B } = {}) {
          if (d.open && !(d.config.hover && d.hovering && !B)) {
            d.toggle.attr("aria-expanded", "false"), (d.open = !1);
            var N = d.config;
            if (
              (h.outro(0, d.el[0]),
              L.off(y, d.mouseUpOutside),
              L.off(_, d.mouseMoveOutside),
              d.el.off(A, d.mouseLeave),
              window.clearTimeout(d.delayId),
              !N.delay || k)
            )
              return d.complete();
            d.delayId = window.setTimeout(d.complete, N.delay);
          }
        }
        function v() {
          L.find(u).each(function (d, k) {
            e(k).triggerHandler(C);
          });
        }
        function R(d) {
          var k = d.el[0];
          q.each(function (B, N) {
            var re = e(N);
            re.is(k) || re.has(k).length || re.triggerHandler(C);
          });
        }
        function F(d) {
          return (
            d.mouseUpOutside && L.off(y, d.mouseUpOutside),
            r(function (k) {
              if (d.open) {
                var B = e(k.target);
                if (!B.closest(".w-dropdown-toggle").length) {
                  var N = e.inArray(d.el[0], B.parents(u)) === -1,
                    re = qt.env("editor");
                  if (N) {
                    if (re) {
                      var Ee =
                          B.parents().length === 1 &&
                          B.parents("svg").length === 1,
                        ae = B.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Ee || ae) return;
                    }
                    O(d);
                  }
                }
              }
            })
          );
        }
        function G(d) {
          return function () {
            d.list.removeClass(l),
              d.toggle.removeClass(l),
              d.manageZ && d.el.css("z-index", "");
          };
        }
        function Q(d) {
          return function () {
            (d.hovering = !0), U(d);
          };
        }
        function Z(d) {
          return function () {
            (d.hovering = !1), d.links.is(":focus") || O(d);
          };
        }
        function M(d) {
          return r(function (k) {
            if (d.open) {
              var B = e(k.target),
                N = e.inArray(d.el[0], B.parents(u)) === -1;
              if (N) {
                var re = B.parents(".w-editor-bem-EditorHoverControls").length,
                  Ee = B.parents(".w-editor-bem-RTToolbar").length,
                  ae = e(".w-editor-bem-EditorOverlay"),
                  De =
                    ae.find(".w-editor-edit-outline").length ||
                    ae.find(".w-editor-bem-RTToolbar").length;
                if (re || Ee || De) return;
                (d.hovering = !1), O(d);
              }
            }
          });
        }
        function X(d) {
          return function (k) {
            if (!(a || !d.open))
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case Ke.HOME:
                  return d.open
                    ? ((d.selectedIdx = 0), K(d), k.preventDefault())
                    : void 0;
                case Ke.END:
                  return d.open
                    ? ((d.selectedIdx = d.links.length - 1),
                      K(d),
                      k.preventDefault())
                    : void 0;
                case Ke.ESCAPE:
                  return O(d), d.toggle.focus(), k.stopPropagation();
                case Ke.ARROW_RIGHT:
                case Ke.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    K(d),
                    k.preventDefault()
                  );
                case Ke.ARROW_LEFT:
                case Ke.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    K(d),
                    k.preventDefault()
                  );
              }
          };
        }
        function K(d) {
          d.links[d.selectedIdx] && d.links[d.selectedIdx].focus();
        }
        function V(d) {
          var k = $(d, F_);
          return function (B) {
            if (!a) {
              if (!d.open)
                switch (B.keyCode) {
                  case Ke.ARROW_UP:
                  case Ke.ARROW_DOWN:
                    return B.stopPropagation();
                }
              switch (B.keyCode) {
                case Ke.SPACE:
                case Ke.ENTER:
                  return k(), B.stopPropagation(), B.preventDefault();
              }
            }
          };
        }
        function D(d) {
          return r(function (k) {
            var { relatedTarget: B, target: N } = k,
              re = d.el[0],
              Ee = re.contains(B) || re.contains(N);
            return Ee || O(d), k.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var G_ = c((Cs) => {
    "use strict";
    Object.defineProperty(Cs, "__esModule", { value: !0 });
    Cs.default = qk;
    function qk(e, t, r, n, i, o, a, s, u, l, h, p, g) {
      return function (E) {
        e(E);
        var b = E.form,
          _ = {
            name: b.attr("data-name") || b.attr("name") || "Untitled Form",
            pageId: b.attr("data-wf-page-id") || "",
            elementId: b.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              b.html()
            ),
            trackingCookies: n(),
          };
        let A = b.attr("data-wf-flow");
        A && (_.wfFlow = A), i(E);
        var y = o(b, _.fields);
        if (y) return a(y);
        if (((_.fileUploads = s(b)), u(E), !l)) {
          h(E);
          return;
        }
        p.ajax({
          url: g,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (C) {
            C && C.code === 200 && (E.success = !0), h(E);
          })
          .fail(function () {
            h(E);
          });
      };
    }
  });
  var V_ = c((nz, U_) => {
    "use strict";
    var xi = Fe();
    xi.define(
      "forms",
      (U_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          l = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          p = window.alert,
          g = xi.env(),
          E,
          b,
          _,
          A = /list-manage[1-9]?.com/i,
          y = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              C(), !g && !E && L();
            };
        function C() {
          (u = e("html").attr("data-wf-site")),
            (b = "https://webflow.com/api/v1/form/" + u),
            a &&
              b.indexOf("https://webflow.com") >= 0 &&
              (b = b.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (_ = `${b}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(w);
        }
        function w(M, X) {
          var K = e(X),
            V = e.data(X, s);
          V || (V = e.data(X, s, { form: K })), q(V);
          var D = K.closest("div.w-form");
          (V.done = D.find("> .w-form-done")),
            (V.fail = D.find("> .w-form-fail")),
            (V.fileUploads = D.find(".w-file-upload")),
            V.fileUploads.each(function (B) {
              G(B, V);
            });
          var d =
            V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
          V.done.attr("aria-label") || V.form.attr("aria-label", d),
            V.done.attr("tabindex", "-1"),
            V.done.attr("role", "region"),
            V.done.attr("aria-label") ||
              V.done.attr("aria-label", d + " success"),
            V.fail.attr("tabindex", "-1"),
            V.fail.attr("role", "region"),
            V.fail.attr("aria-label") ||
              V.fail.attr("aria-label", d + " failure");
          var k = (V.action = K.attr("action"));
          if (
            ((V.handler = null),
            (V.redirect = K.attr("data-redirect")),
            A.test(k))
          ) {
            V.handler = v;
            return;
          }
          if (!k) {
            if (u) {
              V.handler = (() => {
                let B = G_().default;
                return B(q, o, xi, $, F, W, p, j, P, u, R, e, b);
              })();
              return;
            }
            y();
          }
        }
        function L() {
          (E = !0),
            n.on("submit", s + " form", function (B) {
              var N = e.data(this, s);
              N.handler && ((N.evt = B), N.handler(N));
            });
          let M = ".w-checkbox-input",
            X = ".w-radio-input",
            K = "w--redirected-checked",
            V = "w--redirected-focus",
            D = "w--redirected-focus-visible",
            d = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", M],
              ["radio", X],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + M + ")",
            (B) => {
              e(B.target).siblings(M).toggleClass(K);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (B) => {
              e(`input[name="${B.target.name}"]:not(${M})`).map((re, Ee) =>
                e(Ee).siblings(X).removeClass(K)
              );
              let N = e(B.target);
              N.hasClass("w-radio-input") || N.siblings(X).addClass(K);
            }),
            k.forEach(([B, N]) => {
              n.on(
                "focus",
                s + ` form input[type="${B}"]:not(` + N + ")",
                (re) => {
                  e(re.target).siblings(N).addClass(V),
                    e(re.target).filter(d).siblings(N).addClass(D);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${B}"]:not(` + N + ")",
                  (re) => {
                    e(re.target).siblings(N).removeClass(`${V} ${D}`);
                  }
                );
            });
        }
        function q(M) {
          var X = (M.btn = M.form.find(':input[type="submit"]'));
          (M.wait = M.btn.attr("data-wait") || null),
            (M.success = !1),
            X.prop("disabled", !1),
            M.label && X.val(M.label);
        }
        function P(M) {
          var X = M.btn,
            K = M.wait;
          X.prop("disabled", !0), K && ((M.label = X.val()), X.val(K));
        }
        function W(M, X) {
          var K = null;
          return (
            (X = X || {}),
            M.find(':input:not([type="submit"]):not([type="file"])').each(
              function (V, D) {
                var d = e(D),
                  k = d.attr("type"),
                  B =
                    d.attr("data-name") || d.attr("name") || "Field " + (V + 1);
                B = encodeURIComponent(B);
                var N = d.val();
                if (k === "checkbox") N = d.is(":checked");
                else if (k === "radio") {
                  if (X[B] === null || typeof X[B] == "string") return;
                  N =
                    M.find(
                      'input[name="' + d.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof N == "string" && (N = e.trim(N)),
                  (X[B] = N),
                  (K = K || U(d, k, B, N));
              }
            ),
            K
          );
        }
        function j(M) {
          var X = {};
          return (
            M.find(':input[type="file"]').each(function (K, V) {
              var D = e(V),
                d = D.attr("data-name") || D.attr("name") || "File " + (K + 1),
                k = D.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (X[d] = k);
            }),
            X
          );
        }
        let z = { _mkto_trk: "marketo" };
        function $() {
          return document.cookie.split("; ").reduce(function (X, K) {
            let V = K.split("="),
              D = V[0];
            if (D in z) {
              let d = z[D],
                k = V.slice(1).join("=");
              X[d] = k;
            }
            return X;
          }, {});
        }
        function U(M, X, K, V) {
          var D = null;
          return (
            X === "password"
              ? (D = "Passwords cannot be submitted.")
              : M.attr("required")
              ? V
                ? l.test(M.attr("type")) &&
                  (h.test(V) ||
                    (D = "Please enter a valid email address for: " + K))
                : (D = "Please fill out the required field: " + K)
              : K === "g-recaptcha-response" &&
                !V &&
                (D = "Please confirm you\u2019re not a robot."),
            D
          );
        }
        function O(M) {
          F(M), R(M);
        }
        function v(M) {
          q(M);
          var X = M.form,
            K = {};
          if (/^https/.test(o.href) && !/^https/.test(M.action)) {
            X.attr("method", "post");
            return;
          }
          F(M);
          var V = W(X, K);
          if (V) return p(V);
          P(M);
          var D;
          t.each(K, function (N, re) {
            l.test(re) && (K.EMAIL = N),
              /^((full[ _-]?)?name)$/i.test(re) && (D = N),
              /^(first[ _-]?name)$/i.test(re) && (K.FNAME = N),
              /^(last[ _-]?name)$/i.test(re) && (K.LNAME = N);
          }),
            D &&
              !K.FNAME &&
              ((D = D.split(" ")),
              (K.FNAME = D[0]),
              (K.LNAME = K.LNAME || D[1]));
          var d = M.action.replace("/post?", "/post-json?") + "&c=?",
            k = d.indexOf("u=") + 2;
          k = d.substring(k, d.indexOf("&", k));
          var B = d.indexOf("id=") + 3;
          (B = d.substring(B, d.indexOf("&", B))),
            (K["b_" + k + "_" + B] = ""),
            e
              .ajax({ url: d, data: K, dataType: "jsonp" })
              .done(function (N) {
                (M.success = N.result === "success" || /already/.test(N.msg)),
                  M.success || console.info("MailChimp error: " + N.msg),
                  R(M);
              })
              .fail(function () {
                R(M);
              });
        }
        function R(M) {
          var X = M.form,
            K = M.redirect,
            V = M.success;
          if (V && K) {
            xi.location(K);
            return;
          }
          M.done.toggle(V),
            M.fail.toggle(!V),
            V ? M.done.focus() : M.fail.focus(),
            X.toggle(!V),
            q(M);
        }
        function F(M) {
          M.evt && M.evt.preventDefault(), (M.evt = null);
        }
        function G(M, X) {
          if (!X.fileUploads || !X.fileUploads[M]) return;
          var K,
            V = e(X.fileUploads[M]),
            D = V.find("> .w-file-upload-default"),
            d = V.find("> .w-file-upload-uploading"),
            k = V.find("> .w-file-upload-success"),
            B = V.find("> .w-file-upload-error"),
            N = D.find(".w-file-upload-input"),
            re = D.find(".w-file-upload-label"),
            Ee = re.children(),
            ae = B.find(".w-file-upload-error-msg"),
            De = k.find(".w-file-upload-file"),
            Ye = k.find(".w-file-remove-link"),
            pr = De.find(".w-file-upload-file-name"),
            gr = ae.attr("data-w-size-error"),
            $e = ae.attr("data-w-type-error"),
            Ci = ae.attr("data-w-generic-error");
          if (
            (g ||
              re.on("click keydown", function (T) {
                (T.type === "keydown" && T.which !== 13 && T.which !== 32) ||
                  (T.preventDefault(), N.click());
              }),
            re.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Ye.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            N.on("click", function (T) {
              T.preventDefault();
            }),
              re.on("click", function (T) {
                T.preventDefault();
              }),
              Ee.on("click", function (T) {
                T.preventDefault();
              });
          else {
            Ye.on("click keydown", function (T) {
              if (T.type === "keydown") {
                if (T.which !== 13 && T.which !== 32) return;
                T.preventDefault();
              }
              N.removeAttr("data-value"),
                N.val(""),
                pr.html(""),
                D.toggle(!0),
                k.toggle(!1),
                re.focus();
            }),
              N.on("change", function (T) {
                (K = T.target && T.target.files && T.target.files[0]),
                  K &&
                    (D.toggle(!1),
                    B.toggle(!1),
                    d.toggle(!0),
                    d.focus(),
                    pr.text(K.name),
                    S() || P(X),
                    (X.fileUploads[M].uploading = !0),
                    Q(K, m));
              });
            var Jr = re.outerHeight();
            N.height(Jr), N.width(1);
          }
          function f(T) {
            var x = T.responseJSON && T.responseJSON.msg,
              Y = Ci;
            typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0
              ? (Y = $e)
              : typeof x == "string" &&
                x.indexOf("MaxFileSizeError") === 0 &&
                (Y = gr),
              ae.text(Y),
              N.removeAttr("data-value"),
              N.val(""),
              d.toggle(!1),
              D.toggle(!0),
              B.toggle(!0),
              B.focus(),
              (X.fileUploads[M].uploading = !1),
              S() || q(X);
          }
          function m(T, x) {
            if (T) return f(T);
            var Y = x.fileName,
              ee = x.postData,
              ce = x.fileId,
              H = x.s3Url;
            N.attr("data-value", ce), Z(H, ee, K, Y, I);
          }
          function I(T) {
            if (T) return f(T);
            d.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (X.fileUploads[M].uploading = !1),
              S() || q(X);
          }
          function S() {
            var T = (X.fileUploads && X.fileUploads.toArray()) || [];
            return T.some(function (x) {
              return x.uploading;
            });
          }
        }
        function Q(M, X) {
          var K = new URLSearchParams({ name: M.name, size: M.size });
          e.ajax({ type: "GET", url: `${_}?${K}`, crossDomain: !0 })
            .done(function (V) {
              X(null, V);
            })
            .fail(function (V) {
              X(V);
            });
        }
        function Z(M, X, K, V, D) {
          var d = new FormData();
          for (var k in X) d.append(k, X[k]);
          d.append("file", K, V),
            e
              .ajax({
                type: "POST",
                url: M,
                data: d,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                D(null);
              })
              .fail(function (B) {
                D(B);
              });
        }
        return r;
      })
    );
  });
  var B_ = c((iz, k_) => {
    "use strict";
    var Tt = Fe(),
      Fk = un();
    Tt.define(
      "tabs",
      (k_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Tt.env,
          s = a.safari,
          u = a(),
          l = "data-w-tab",
          h = "data-w-pane",
          p = ".w-tabs",
          g = "w--current",
          E = "w--tab-active",
          b = Fk.triggers,
          _ = !1;
        (t.ready = t.design = t.preview = A),
          (t.redraw = function () {
            (_ = !0), A(), (_ = !1);
          }),
          (t.destroy = function () {
            (i = n.find(p)), i.length && (i.each(w), y());
          });
        function A() {
          (o = u && Tt.env("design")),
            (i = n.find(p)),
            i.length &&
              (i.each(L), Tt.env("preview") && !_ && i.each(w), y(), C());
        }
        function y() {
          Tt.redraw.off(t.redraw);
        }
        function C() {
          Tt.redraw.on(t.redraw);
        }
        function w(U, O) {
          var v = e.data(O, p);
          v &&
            (v.links && v.links.each(b.reset),
            v.panes && v.panes.each(b.reset));
        }
        function L(U, O) {
          var v = p.substr(1) + "-" + U,
            R = e(O),
            F = e.data(O, p);
          if (
            (F || (F = e.data(O, p, { el: R, config: {} })),
            (F.current = null),
            (F.tabIdentifier = v + "-" + l),
            (F.paneIdentifier = v + "-" + h),
            (F.menu = R.children(".w-tab-menu")),
            (F.links = F.menu.children(".w-tab-link")),
            (F.content = R.children(".w-tab-content")),
            (F.panes = F.content.children(".w-tab-pane")),
            F.el.off(p),
            F.links.off(p),
            F.menu.attr("role", "tablist"),
            F.links.attr("tabindex", "-1"),
            q(F),
            !o)
          ) {
            F.links.on("click" + p, W(F)), F.links.on("keydown" + p, j(F));
            var G = F.links.filter("." + g),
              Q = G.attr(l);
            Q && z(F, { tab: Q, immediate: !0 });
          }
        }
        function q(U) {
          var O = {};
          O.easing = U.el.attr("data-easing") || "ease";
          var v = parseInt(U.el.attr("data-duration-in"), 10);
          v = O.intro = v === v ? v : 0;
          var R = parseInt(U.el.attr("data-duration-out"), 10);
          (R = O.outro = R === R ? R : 0),
            (O.immediate = !v && !R),
            (U.config = O);
        }
        function P(U) {
          var O = U.current;
          return Array.prototype.findIndex.call(
            U.links,
            (v) => v.getAttribute(l) === O,
            null
          );
        }
        function W(U) {
          return function (O) {
            O.preventDefault();
            var v = O.currentTarget.getAttribute(l);
            v && z(U, { tab: v });
          };
        }
        function j(U) {
          return function (O) {
            var v = P(U),
              R = O.key,
              F = {
                ArrowLeft: v - 1,
                ArrowUp: v - 1,
                ArrowRight: v + 1,
                ArrowDown: v + 1,
                End: U.links.length - 1,
                Home: 0,
              };
            if (R in F) {
              O.preventDefault();
              var G = F[R];
              G === -1 && (G = U.links.length - 1),
                G === U.links.length && (G = 0);
              var Q = U.links[G],
                Z = Q.getAttribute(l);
              Z && z(U, { tab: Z });
            }
          };
        }
        function z(U, O) {
          O = O || {};
          var v = U.config,
            R = v.easing,
            F = O.tab;
          if (F !== U.current) {
            U.current = F;
            var G;
            U.links.each(function (D, d) {
              var k = e(d);
              if (O.immediate || v.immediate) {
                var B = U.panes[D];
                d.id || (d.id = U.tabIdentifier + "-" + D),
                  B.id || (B.id = U.paneIdentifier + "-" + D),
                  (d.href = "#" + B.id),
                  d.setAttribute("role", "tab"),
                  d.setAttribute("aria-controls", B.id),
                  d.setAttribute("aria-selected", "false"),
                  B.setAttribute("role", "tabpanel"),
                  B.setAttribute("aria-labelledby", d.id);
              }
              d.getAttribute(l) === F
                ? ((G = d),
                  k
                    .addClass(g)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(b.intro))
                : k.hasClass(g) &&
                  k
                    .removeClass(g)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(b.outro);
            });
            var Q = [],
              Z = [];
            U.panes.each(function (D, d) {
              var k = e(d);
              d.getAttribute(l) === F ? Q.push(d) : k.hasClass(E) && Z.push(d);
            });
            var M = e(Q),
              X = e(Z);
            if (O.immediate || v.immediate) {
              M.addClass(E).each(b.intro),
                X.removeClass(E),
                _ || Tt.redraw.up();
              return;
            } else {
              var K = window.scrollX,
                V = window.scrollY;
              G.focus(), window.scrollTo(K, V);
            }
            X.length && v.outro
              ? (X.each(b.outro),
                r(X)
                  .add("opacity " + v.outro + "ms " + R, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => $(v, X, M)))
              : $(v, X, M);
          }
        }
        function $(U, O, v) {
          if (
            (O.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            v.addClass(E).each(b.intro),
            Tt.redraw.up(),
            !U.intro)
          )
            return r(v).set({ opacity: 1 });
          r(v)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + U.intro + "ms " + U.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Hs();
  Ws();
  zs();
  $s();
  un();
  x_();
  R_();
  L_();
  q_();
  D_();
  V_();
  B_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".block.service",
        originalId:
          "65e1c0c2fd61a5053f5c7bd2|3cb3e5ba-602d-766f-d8ca-bac72f9f3b24",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".block.service",
          originalId:
            "65e1c0c2fd61a5053f5c7bd2|3cb3e5ba-602d-766f-d8ca-bac72f9f3b24",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709547615713,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".collection-link-block-type-one",
        originalId:
          "65e1c0c2fd61a5053f5c7bd2|96beccd4-d272-5fbc-5e46-28fb154ef157",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".collection-link-block-type-one",
          originalId:
            "65e1c0c2fd61a5053f5c7bd2|96beccd4-d272-5fbc-5e46-28fb154ef157",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709551081000,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".collection-link-block-type-one",
        originalId:
          "65e1c0c2fd61a5053f5c7bd2|96beccd4-d272-5fbc-5e46-28fb154ef157",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".collection-link-block-type-one",
          originalId:
            "65e1c0c2fd61a5053f5c7bd2|96beccd4-d272-5fbc-5e46-28fb154ef157",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709551081000,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-4", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".person-card",
        originalId:
          "65e1c0c2fd61a5053f5c7bd2|48fafb8b-1fde-8f6c-a010-cdce329a342e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".person-card",
          originalId:
            "65e1c0c2fd61a5053f5c7bd2|48fafb8b-1fde-8f6c-a010-cdce329a342e",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-4-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709552606703,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".nav-adaptation-link.dropdown",
        originalId: "8474942d-118e-77e5-a8e1-4a03f1c351bd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-adaptation-link.dropdown",
          originalId: "8474942d-118e-77e5-a8e1-4a03f1c351bd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709558361197,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".nav-adaptation-link.dropdown",
        originalId: "8474942d-118e-77e5-a8e1-4a03f1c351bd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-adaptation-link.dropdown",
          originalId: "8474942d-118e-77e5-a8e1-4a03f1c351bd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709558361198,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-icon-wrapper.open",
        originalId: "8474942d-118e-77e5-a8e1-4a03f1c351ac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-icon-wrapper.open",
          originalId: "8474942d-118e-77e5-a8e1-4a03f1c351ac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709559348418,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-icon-wrapper.close",
        originalId: "8474942d-118e-77e5-a8e1-4a03f1c351b3",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-icon-wrapper.close",
          originalId: "8474942d-118e-77e5-a8e1-4a03f1c351b3",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709559410602,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".big-parallax-image-wrapper",
        originalId:
          "65e5db64a024ce4805cd89f9|f4fbea9a-8612-8861-85c6-08c320e531e6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".big-parallax-image-wrapper",
          originalId:
            "65e5db64a024ce4805cd89f9|f4fbea9a-8612-8861-85c6-08c320e531e6",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-9-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709565107132,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-10", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".banner-type-three-image",
        originalId:
          "65e5ef2d9ec0b50d3f7b1d05|f6fada96-9685-d2c7-15c3-fff28beb9508",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".banner-type-three-image",
          originalId:
            "65e5ef2d9ec0b50d3f7b1d05|f6fada96-9685-d2c7-15c3-fff28beb9508",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-10-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709570284165,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".large-parallax-image",
        originalId:
          "65e5fabf02501add530a8d24|a0259f54-022e-d357-9ba9-b5b1a3366b97",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".large-parallax-image",
          originalId:
            "65e5fabf02501add530a8d24|a0259f54-022e-d357-9ba9-b5b1a3366b97",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709626162389,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-trigger",
        originalId:
          "65e5fabf02501add530a8d24|3c3d6827-660d-db14-116f-3845db00d93f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".accordion-trigger",
          originalId:
            "65e5fabf02501add530a8d24|3c3d6827-660d-db14-116f-3845db00d93f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709627981609,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-trigger",
        originalId:
          "65e5fabf02501add530a8d24|3c3d6827-660d-db14-116f-3845db00d93f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".accordion-trigger",
          originalId:
            "65e5fabf02501add530a8d24|3c3d6827-660d-db14-116f-3845db00d93f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709627981610,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".collection-link-block-type-two",
        originalId:
          "65e6dfcadb369eb0da068281|0a1ab09b-d3f1-13d0-961b-401b5a48cddd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".collection-link-block-type-two",
          originalId:
            "65e6dfcadb369eb0da068281|0a1ab09b-d3f1-13d0-961b-401b5a48cddd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709721693850,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".collection-link-block-type-two",
        originalId:
          "65e6dfcadb369eb0da068281|0a1ab09b-d3f1-13d0-961b-401b5a48cddd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".collection-link-block-type-two",
          originalId:
            "65e6dfcadb369eb0da068281|0a1ab09b-d3f1-13d0-961b-401b5a48cddd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709721693851,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-16", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".hero-section-image.internal.parallax-wrapper",
        originalId:
          "65e1fea6331525d04c647678|3288c24a-ab8b-cf1e-7acb-bf27b09b9dc0",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hero-section-image.internal.parallax-wrapper",
          originalId:
            "65e1fea6331525d04c647678|3288c24a-ab8b-cf1e-7acb-bf27b09b9dc0",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-16-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709723372088,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-17", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".parallax-image-wrapper",
        originalId:
          "65e879cf7c800e0b5e107ec6|2943dbd0-512f-ea63-01b4-8d53301dc82a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".parallax-image-wrapper",
          originalId:
            "65e879cf7c800e0b5e107ec6|2943dbd0-512f-ea63-01b4-8d53301dc82a",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-17-p",
          smoothing: 0,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709735872308,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Service Block Image Parallax",
      continuousParameterGroups: [
        {
          id: "a-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".service-image",
                      selectorGuids: ["abf6719d-9c76-2298-4683-eb06dd0550b4"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".service-image",
                      selectorGuids: ["abf6719d-9c76-2298-4683-eb06dd0550b4"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709547622144,
    },
    "a-2": {
      id: "a-2",
      title: "Collection Item Type One Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".collection-image-type-one.image",
                  selectorGuids: [
                    "baebcee2-745e-37f1-2b03-476919aafe47",
                    "35e3a9f0-0728-67f0-090a-c5df583ba66d",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".collection-image-type-one.image",
                  selectorGuids: [
                    "baebcee2-745e-37f1-2b03-476919aafe47",
                    "35e3a9f0-0728-67f0-090a-c5df583ba66d",
                  ],
                },
                xValue: 1.15,
                yValue: 1.15,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709551085564,
    },
    "a-3": {
      id: "a-3",
      title: "Collection Item Type One Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".collection-image-type-one.image",
                  selectorGuids: [
                    "baebcee2-745e-37f1-2b03-476919aafe47",
                    "35e3a9f0-0728-67f0-090a-c5df583ba66d",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709551085564,
    },
    "a-4": {
      id: "a-4",
      title: "Person Image Parallax",
      continuousParameterGroups: [
        {
          id: "a-4-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-4-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".person-image",
                      selectorGuids: ["fb6b8000-0c27-3b6a-dbc7-32b9ca1454f1"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-4-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".person-image",
                      selectorGuids: ["fb6b8000-0c27-3b6a-dbc7-32b9ca1454f1"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709552614639,
    },
    "a-5": {
      id: "a-5",
      title: "Menu Adaptation Dropdown Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-5-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".icon-size-20",
                  selectorGuids: ["48a8b786-2182-bd44-ea15-0a9220be132a"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 100,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".icon-size-20",
                  selectorGuids: ["48a8b786-2182-bd44-ea15-0a9220be132a"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709558366179,
    },
    "a-6": {
      id: "a-6",
      title: "Menu Adaptation Dropdown Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".icon-size-20",
                  selectorGuids: ["48a8b786-2182-bd44-ea15-0a9220be132a"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-menu-dropdown-list.adaptation",
                  selectorGuids: [
                    "56e99d12-309b-fa56-a163-6d67d8e8785f",
                    "3b0f2f74-13d5-66ea-5b74-ece370cee534",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709558366179,
    },
    "a-7": {
      id: "a-7",
      title: "Menu Adaptation Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-adaptation",
                  selectorGuids: ["570d74ff-cbbe-7867-655f-f6c4fffce60c"],
                },
                value: "none",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-adaptation",
                  selectorGuids: ["570d74ff-cbbe-7867-655f-f6c4fffce60c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 0,
                target: {
                  selector: ".nav-adaptation",
                  selectorGuids: ["570d74ff-cbbe-7867-655f-f6c4fffce60c"],
                },
                value: "flex",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".nav-adaptation",
                  selectorGuids: ["570d74ff-cbbe-7867-655f-f6c4fffce60c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709559352963,
    },
    "a-8": {
      id: "a-8",
      title: "Menu Adaptation Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".nav-adaptation",
                  selectorGuids: ["570d74ff-cbbe-7867-655f-f6c4fffce60c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-adaptation",
                  selectorGuids: ["570d74ff-cbbe-7867-655f-f6c4fffce60c"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709559414963,
    },
    "a-9": {
      id: "a-9",
      title: "Big Parallax Image",
      continuousParameterGroups: [
        {
          id: "a-9-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-9-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".big-parallax-image",
                      selectorGuids: ["b98ef620-bad7-ef05-b158-64ad556d8a1e"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-9-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".big-parallax-image",
                      selectorGuids: ["b98ef620-bad7-ef05-b158-64ad556d8a1e"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709565116186,
    },
    "a-10": {
      id: "a-10",
      title: "Banner Type Three Parallax",
      continuousParameterGroups: [
        {
          id: "a-10-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-10-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-10-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709570306730,
    },
    "a-11": {
      id: "a-11",
      title: "Large Parallax Image",
      continuousParameterGroups: [
        {
          id: "a-11-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-11-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-11-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709626173476,
    },
    "a-12": {
      id: "a-12",
      title: "Accordion Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-content",
                  selectorGuids: ["8b19fdfc-a6ce-1a74-ffb3-8a0715262dae"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon",
                  selectorGuids: ["a159c302-7ec6-5609-177f-ed30ee105fb4"],
                },
                xValue: 0,
                yValue: 0,
                zValue: null,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-content",
                  selectorGuids: ["8b19fdfc-a6ce-1a74-ffb3-8a0715262dae"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon",
                  selectorGuids: ["a159c302-7ec6-5609-177f-ed30ee105fb4"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709627986692,
    },
    "a-13": {
      id: "a-13",
      title: "Accordion Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-content",
                  selectorGuids: ["8b19fdfc-a6ce-1a74-ffb3-8a0715262dae"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon",
                  selectorGuids: ["a159c302-7ec6-5609-177f-ed30ee105fb4"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709628028965,
    },
    "a-14": {
      id: "a-14",
      title: "Collection Item Type Two Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".collection-image-type-two.image",
                  selectorGuids: [
                    "6ebb4de8-0efe-6fc2-8f8b-9792f46534b2",
                    "b0457a8d-f01a-5836-28b3-7e1256517c00",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".collection-image-type-two.image",
                  selectorGuids: [
                    "6ebb4de8-0efe-6fc2-8f8b-9792f46534b2",
                    "b0457a8d-f01a-5836-28b3-7e1256517c00",
                  ],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709721704441,
    },
    "a-15": {
      id: "a-15",
      title: "Collection Item Type Two Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".collection-image-type-two.image",
                  selectorGuids: [
                    "6ebb4de8-0efe-6fc2-8f8b-9792f46534b2",
                    "b0457a8d-f01a-5836-28b3-7e1256517c00",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709721704441,
    },
    "a-16": {
      id: "a-16",
      title: "Hero Section Parallax Image",
      continuousParameterGroups: [
        {
          id: "a-16-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-16-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-16-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709723380173,
    },
    "a-17": {
      id: "a-17",
      title: "Parallax Image",
      continuousParameterGroups: [
        {
          id: "a-17-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-17-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-17-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".parallax-image",
                      selectorGuids: ["4483692a-eaf3-1f2e-58ff-78e02e749750"],
                    },
                    yValue: -12,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709735883899,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});

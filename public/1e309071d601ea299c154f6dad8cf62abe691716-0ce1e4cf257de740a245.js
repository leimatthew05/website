/*! For license information please see 1e309071d601ea299c154f6dad8cf62abe691716-0ce1e4cf257de740a245.js.LICENSE.txt */
(self.webpackChunksimple_gallery = self.webpackChunksimple_gallery || []).push([
  [411],
  {
    319: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return N;
        },
      });
      var r = n(7294),
        o = n(1051),
        a = n(4854),
        i = n(7326),
        l = n(4578),
        c = n(5697),
        u = n.n(c),
        s = n(3967),
        f = n.n(s),
        p = n(2040),
        d = [
          "expand",
          "className",
          "cssModule",
          "light",
          "dark",
          "fixed",
          "sticky",
          "color",
          "container",
          "tag",
          "children",
        ];
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          y.apply(this, arguments)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function v(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var m = {
        children: u().node,
        className: u().string,
        color: u().string,
        container: u().oneOfType([u().bool, u().string]),
        cssModule: u().object,
        dark: u().bool,
        expand: u().oneOfType([u().bool, u().string]),
        fixed: u().string,
        light: u().bool,
        role: u().string,
        sticky: u().string,
        tag: p.iC,
      };
      function g(e) {
        var t,
          n = e.expand,
          o = void 0 !== n && n,
          a = e.className,
          i = e.cssModule,
          l = e.light,
          c = e.dark,
          u = e.fixed,
          s = e.sticky,
          m = e.color,
          g = e.container,
          h = void 0 === g ? "fluid" : g,
          O = e.tag,
          j = void 0 === O ? "nav" : O,
          w = e.children,
          E = v(e, d),
          k = (0, p.mx)(
            f()(
              a,
              "navbar",
              (function (e) {
                return (
                  !1 !== e &&
                  (!0 === e || "xs" === e
                    ? "navbar-expand"
                    : "navbar-expand-".concat(e))
                );
              })(o),
              (b(
                (t = { "navbar-light": l, "navbar-dark": c }),
                "bg-".concat(m),
                m,
              ),
              b(t, "fixed-".concat(u), u),
              b(t, "sticky-".concat(s), s),
              t),
            ),
            i,
          ),
          x = h && !0 === h ? "container" : "container-".concat(h);
        return r.createElement(
          j,
          y({}, E, { className: k }),
          h ? r.createElement("div", { className: x }, w) : w,
        );
      }
      g.propTypes = m;
      var h = g,
        O = [
          "className",
          "cssModule",
          "tabs",
          "pills",
          "vertical",
          "horizontal",
          "justified",
          "fill",
          "navbar",
          "card",
          "tag",
        ];
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          j.apply(this, arguments)
        );
      }
      function w(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var E = {
        card: u().bool,
        className: u().string,
        cssModule: u().object,
        fill: u().bool,
        horizontal: u().oneOf(["center", "end"]),
        justified: u().bool,
        navbar: u().bool,
        pills: u().bool,
        tabs: u().bool,
        tag: p.iC,
        vertical: u().oneOfType([u().bool, u().string]),
      };
      function k(e) {
        var t = e.className,
          n = e.cssModule,
          o = e.tabs,
          a = e.pills,
          i = e.vertical,
          l = void 0 !== i && i,
          c = e.horizontal,
          u = e.justified,
          s = e.fill,
          d = e.navbar,
          y = e.card,
          b = e.tag,
          v = void 0 === b ? "ul" : b,
          m = w(e, O),
          g = (0, p.mx)(
            f()(
              t,
              d ? "navbar-nav" : "nav",
              !!c && "justify-content-".concat(c),
              (function (e) {
                return (
                  !1 !== e &&
                  (!0 === e || "xs" === e
                    ? "flex-column"
                    : "flex-".concat(e, "-column"))
                );
              })(l),
              {
                "nav-tabs": o,
                "card-header-tabs": y && o,
                "nav-pills": a,
                "card-header-pills": y && a,
                "nav-justified": u,
                "nav-fill": s,
              },
            ),
            n,
          );
        return r.createElement(v, j({}, m, { className: g }));
      }
      k.propTypes = E;
      var x = k;
      var S = (function (e) {
        function t(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).toggleNavbar = n.toggleNavbar.bind(
              (0, i.Z)(n),
            )),
            (n.state = { collapsed: !0 }),
            n
          );
        }
        (0, l.Z)(t, e);
        var n = t.prototype;
        return (
          (n.toggleNavbar = function () {
            this.setState({ collapsed: !this.state.collapsed });
          }),
          (n.render = function () {
            var e = [
              r.createElement(
                o.Z,
                null,
                r.createElement(a.Link, { to: "/" }, "Character Design"),
              ),
              r.createElement(
                o.Z,
                null,
                r.createElement(a.Link, { to: "/story/" }, "Story"),
              ),
              r.createElement(
                o.Z,
                null,
                r.createElement(a.Link, { to: "/shortfilms/" }, "Short Films"),
              ),
              r.createElement(
                o.Z,
                null,
                r.createElement(a.Link, { to: "/about/" }, "About"),
              ),
            ];
            return r.createElement(
              "div",
              null,
              r.createElement(
                "div",
                { className: "mobile-only topnav" },
                r.createElement(
                  "a",
                  null,
                  r.createElement(
                    a.Link,
                    { to: "/mobilemenu" },
                    r.createElement("img", {
                      src: "../../images/dropdown.png",
                      width: "50px",
                    }),
                  ),
                ),
              ),
              r.createElement(
                "div",
                { className: "desktop-only menu" },
                r.createElement(
                  h,
                  null,
                  r.createElement(x, { className: "m-auto" }, e),
                ),
              ),
            );
          }),
          t
        );
      })(r.Component);
      var N = (e) => {
        let { pageTitle: t, children: n } = e;
        o.Z, a.Link, o.Z, a.Link, o.Z, a.Link, o.Z, a.Link;
        return r.createElement(
          "div",
          { className: "layout" },
          r.createElement(
            "main",
            null,
            r.createElement(S, null),
            r.createElement("div", {
              className: "mobile-only",
              style: { paddingTop: "80px" },
            }),
            r.createElement(
              "div",
              {
                className: "header",
                style: { textAlign: "center", paddingBottom: "30px" },
              },
              r.createElement("h1", null, "MATTHEW LEI"),
              r.createElement(
                "h2",
                { style: { color: "var(--textcolor)" } },
                t,
              ),
            ),
            n,
          ),
        );
      };
    },
    1051: function (e, t, n) {
      "use strict";
      var r = n(7294),
        o = n(5697),
        a = n.n(o),
        i = n(3967),
        l = n.n(i),
        c = n(2040);
      function u(e) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          u(e)
        );
      }
      var s = ["className", "cssModule", "active", "tag", "innerRef"];
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          f.apply(this, arguments)
        );
      }
      function p(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function b(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var o = m(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === u(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return v(e);
          })(this, n);
        };
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      var g = {
          active: a().bool,
          className: a().string,
          cssModule: a().object,
          disabled: a().bool,
          href: a().any,
          innerRef: a().oneOfType([a().object, a().func, a().string]),
          onClick: a().func,
          tag: c.iC,
        },
        h = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && y(e, t);
          })(i, e);
          var t,
            n,
            o,
            a = b(i);
          function i(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = a.call(this, e)).onClick = t.onClick.bind(v(t))),
              t
            );
          }
          return (
            (t = i),
            (n = [
              {
                key: "onClick",
                value: function (e) {
                  this.props.disabled
                    ? e.preventDefault()
                    : ("#" === this.props.href && e.preventDefault(),
                      this.props.onClick && this.props.onClick(e));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.className,
                    n = e.cssModule,
                    o = e.active,
                    a = e.tag,
                    i = void 0 === a ? "a" : a,
                    u = e.innerRef,
                    d = p(e, s),
                    y = (0, c.mx)(
                      l()(t, "nav-link", { disabled: d.disabled, active: o }),
                      n,
                    );
                  return r.createElement(
                    i,
                    f({}, d, { ref: u, onClick: this.onClick, className: y }),
                  );
                },
              },
            ]) && d(t.prototype, n),
            o && d(t, o),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            i
          );
        })(r.Component);
      (h.propTypes = g), (t.Z = h);
    },
    2040: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kn: function () {
          return p;
        },
        iC: function () {
          return f;
        },
        mx: function () {
          return l;
        },
        x9: function () {
          return u;
        },
      });
      var r,
        o = n(5697),
        a = n.n(o);
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function l() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return t
          ? e
              .split(" ")
              .map(function (e) {
                return t[e] || e;
              })
              .join(" ")
          : e;
      }
      var c = {};
      function u(e, t) {
        return function (n, r, o) {
          var a;
          null !== n[r] &&
            void 0 !== n[r] &&
            ((a = '"'
              .concat(r, '" property of "')
              .concat(o, '" has been deprecated.\n')
              .concat(t)),
            c[a] ||
              ("undefined" != typeof console && console.error(a), (c[a] = !0)));
          for (
            var i = arguments.length, l = new Array(i > 3 ? i - 3 : 0), u = 3;
            u < i;
            u++
          )
            l[u - 3] = arguments[u];
          return e.apply(void 0, [n, r, o].concat(l));
        };
      }
      var s =
        ("object" ===
          ("undefined" == typeof window ? "undefined" : i(window)) &&
          window.Element) ||
        function () {};
      a().oneOfType([
        a().string,
        a().func,
        function (e, t, n) {
          if (!(e[t] instanceof s))
            return new Error(
              "Invalid prop `" +
                t +
                "` supplied to `" +
                n +
                "`. Expected prop to be an instance of Element. Validation failed.",
            );
        },
        a().shape({ current: a().any }),
      ]);
      var f = a().oneOfType([
        a().func,
        a().string,
        a().shape({ $$typeof: a().symbol, render: a().func }),
        a().arrayOf(
          a().oneOfType([
            a().func,
            a().string,
            a().shape({ $$typeof: a().symbol, render: a().func }),
          ]),
        ),
      ]);
      "undefined" == typeof window ||
        !window.document ||
        window.document.createElement;
      function p(e) {
        var t = i(e);
        return null != e && ("object" === t || "function" === t);
      }
    },
    3967: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = i(e, a(n)));
          }
          return e;
        }
        function a(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (
            e.toString !== Object.prototype.toString &&
            !e.toString.toString().includes("[native code]")
          )
            return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
          return t;
        }
        function i(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
  },
]);
//# sourceMappingURL=1e309071d601ea299c154f6dad8cf62abe691716-0ce1e4cf257de740a245.js.map

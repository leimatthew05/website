/*! For license information please see component---src-pages-mobilemenu-js-1d6a6d92d14d1982daea.js.LICENSE.txt */
(self.webpackChunksimple_gallery = self.webpackChunksimple_gallery || []).push([
  [862],
  {
    968: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(7294),
        o = n(1051),
        i = n(4854);
      t.default = (e) => {
        let { pageTitle: t, children: n } = e;
        return r.createElement(
          "div",
          null,
          r.createElement(
            "div",
            { className: "mobilemenu" },
            r.createElement(
              "div",
              {
                style: {
                  fontSize: "70px",
                  paddingBottom: "50px",
                  color: "var(--textcolor)",
                },
              },
              "MENU",
            ),
            r.createElement(
              o.Z,
              { style: { paddingBottom: "20px" } },
              r.createElement(i.Link, { to: "/" }, "Character Design"),
            ),
            r.createElement(
              o.Z,
              { style: { paddingBottom: "20px" } },
              r.createElement(i.Link, { to: "/story/" }, "Story"),
            ),
            r.createElement(
              o.Z,
              { style: { paddingBottom: "20px" } },
              r.createElement(i.Link, { to: "/shortfilms/" }, "Short Films"),
            ),
            r.createElement(
              o.Z,
              { style: { paddingBottom: "20px" } },
              r.createElement(i.Link, { to: "/about/" }, "About"),
            ),
            r.createElement(
              "div",
              { style: { paddingTop: "50px", paddingBottom: "80px" } },
              r.createElement(
                "a",
                {
                  href: "https://www.instagram.com/lei_doodles",
                  style: { paddingLeft: "10px", paddingRight: "10px" },
                },
                r.createElement("div", {
                  id: "insta",
                  style: {
                    width: "40px",
                    height: "40px",
                    display: "table-cell",
                  },
                }),
              ),
              r.createElement(
                "a",
                {
                  href: "mailto:mlei@students.calarts.edu",
                  style: { paddingLeft: "10px", paddingRight: "10px" },
                },
                r.createElement("div", {
                  id: "mail",
                  style: {
                    width: "40px",
                    height: "40px",
                    display: "table-cell",
                  },
                }),
              ),
              r.createElement(
                "a",
                {
                  href: "https://www.youtube.com/@lei_doodles",
                  style: { paddingLeft: "10px", paddingRight: "10px" },
                },
                r.createElement("div", {
                  id: "youtube",
                  style: {
                    width: "40px",
                    height: "40px",
                    display: "table-cell",
                  },
                }),
              ),
              r.createElement(
                "a",
                {
                  href: "https://www.linkedin.com/in/leidoodles/",
                  style: { paddingLeft: "10px", paddingRight: "10px" },
                },
                r.createElement("div", {
                  id: "linkedin",
                  style: {
                    width: "40px",
                    height: "40px",
                    display: "table-cell",
                  },
                }),
              ),
            ),
          ),
        );
      };
    },
    1051: function (e, t, n) {
      "use strict";
      var r = n(7294),
        o = n(5697),
        i = n.n(o),
        c = n(3967),
        l = n.n(c),
        a = n(2040);
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
      var f = ["className", "cssModule", "active", "tag", "innerRef"];
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          p.apply(this, arguments)
        );
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
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
      function m(e) {
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
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === u(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return b(e);
          })(this, n);
        };
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      var v = {
          active: i().bool,
          className: i().string,
          cssModule: i().object,
          disabled: i().bool,
          href: i().any,
          innerRef: i().oneOfType([i().object, i().func, i().string]),
          onClick: i().func,
          tag: a.iC,
        },
        g = (function (e) {
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
          })(c, e);
          var t,
            n,
            o,
            i = m(c);
          function c(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              ((t = i.call(this, e)).onClick = t.onClick.bind(b(t))),
              t
            );
          }
          return (
            (t = c),
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
                    i = e.tag,
                    c = void 0 === i ? "a" : i,
                    u = e.innerRef,
                    d = s(e, f),
                    y = (0, a.mx)(
                      l()(t, "nav-link", { disabled: d.disabled, active: o }),
                      n,
                    );
                  return r.createElement(
                    c,
                    p({}, d, { ref: u, onClick: this.onClick, className: y }),
                  );
                },
              },
            ]) && d(t.prototype, n),
            o && d(t, o),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            c
          );
        })(r.Component);
      (g.propTypes = v), (t.Z = g);
    },
    2040: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kn: function () {
          return s;
        },
        iC: function () {
          return p;
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
        i = n.n(o);
      function c(e) {
        return (
          (c =
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
          c(e)
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
      var a = {};
      function u(e, t) {
        return function (n, r, o) {
          var i;
          null !== n[r] &&
            void 0 !== n[r] &&
            ((i = '"'
              .concat(r, '" property of "')
              .concat(o, '" has been deprecated.\n')
              .concat(t)),
            a[i] ||
              ("undefined" != typeof console && console.error(i), (a[i] = !0)));
          for (
            var c = arguments.length, l = new Array(c > 3 ? c - 3 : 0), u = 3;
            u < c;
            u++
          )
            l[u - 3] = arguments[u];
          return e.apply(void 0, [n, r, o].concat(l));
        };
      }
      var f =
        ("object" ===
          ("undefined" == typeof window ? "undefined" : c(window)) &&
          window.Element) ||
        function () {};
      i().oneOfType([
        i().string,
        i().func,
        function (e, t, n) {
          if (!(e[t] instanceof f))
            return new Error(
              "Invalid prop `" +
                t +
                "` supplied to `" +
                n +
                "`. Expected prop to be an instance of Element. Validation failed.",
            );
        },
        i().shape({ current: i().any }),
      ]);
      var p = i().oneOfType([
        i().func,
        i().string,
        i().shape({ $$typeof: i().symbol, render: i().func }),
        i().arrayOf(
          i().oneOfType([
            i().func,
            i().string,
            i().shape({ $$typeof: i().symbol, render: i().func }),
          ]),
        ),
      ]);
      "undefined" == typeof window ||
        !window.document ||
        window.document.createElement;
      function s(e) {
        var t = c(e);
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
            n && (e = c(e, i(n)));
          }
          return e;
        }
        function i(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (
            e.toString !== Object.prototype.toString &&
            !e.toString.toString().includes("[native code]")
          )
            return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = c(t, n));
          return t;
        }
        function c(e, t) {
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
//# sourceMappingURL=component---src-pages-mobilemenu-js-1d6a6d92d14d1982daea.js.map

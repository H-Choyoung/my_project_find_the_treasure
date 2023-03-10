!(function () {
  'use strict';
  var e,
    t = {
      9709: function (e, t, n) {
        var r,
          i,
          o,
          a,
          l,
          c,
          s,
          m = n(745),
          p = (n(7042), n(3371), n(7294)),
          d = n(8651),
          f =
            (n(2526),
            n(1817),
            n(1539),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(1038),
            n(4916),
            n(8309),
            function (e) {
              return Math.floor(Math.random() * e.length);
            }),
          u = n(7294);
        function g(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        var v,
          w,
          h = './img/light_yellow.svg',
          y = './img/gold_coin.svg',
          b = (0, d.F4)(
            r ||
              (r = g([
                '\n  0% {opacity: 0%;}\n  50% {opacity: 0%;}\n  70% {opacity: 0%;}\n  90% {width: 120px; rotate: 90deg; opacity: 92%;}\n  100% {width: 100px; rotate: -120deg; opacity: 95%;}\n',
              ]))
          ),
          E = (0, d.F4)(
            i ||
              (i = g([
                '\n  0% {opacity: 0%;}\n  50% {opacity: 0%;}\n  70% {opacity: 0%;}\n  90% {width: 65px; rotate: -35deg; opacity: 75%;}\n  100% {width: 63px; rotate: -105deg; opacity: 95%;}\n',
              ]))
          ),
          x = (0, d.F4)(
            o ||
              (o = g([
                '\n  0% {opacity: 0%;}\n  50% {opacity: 0%;}\n  70% {opacity: 0%;}\n  90% {width: 40px; rotate: 30deg; opacity: 85%;}\n  100% {width: 30px; rotate: 35deg; opacity: 95%;}\n  ',
              ]))
          ),
          O = d.ZP.div(
            a ||
              (a = g([
                '\n  display: ',
                ';\n  position: absolute;\n  /* 하위요소 */\n  #Light1 {\n    position: absolute;\n    left: 4rem;\n    z-index: 3;\n    width: 100px;\n    top: -2rem;\n    animation: ',
                ' 1.5s ease infinite;\n    animation-fill-mode: forwards;\n  }\n  #Light2 {\n    position: absolute;\n    top: 5rem;\n    left: 3rem;\n    z-index: 3;\n    width: 63px;\n    animation: ',
                ' 1.9s ease infinite;\n    animation-fill-mode: forwards;\n  }\n  #Light3 {\n    position: absolute;\n    top: 14rem;\n    left: 4rem;\n    z-index: 3;\n    width: 30px;\n    animation: ',
                ' 1.3s ease infinite;\n    animation-fill-mode: forwards;\n  }\n  ',
              ])),
            function (e) {
              return e.display || 'none';
            },
            b,
            E,
            x
          ),
          S = (0, d.F4)(
            l ||
              (l = g([
                '\n  0% {right: 0px; opacity: 0%;}\n  50% {right: 10px; opacity: 0%;}\n  70% {opacity: 0%; top: 0px;}\n  90% {opacity: 100%; top: -10px;}\n  100% {right: 70px; opacity: 100%; top: 0px;}\n  ',
              ]))
          ),
          j = d.ZP.div(
            c ||
              (c = g([
                '\n  display: ',
                ';\n  position: absolute;\n  left: 1rem;\n  z-index: 2;\n  animation: ',
                ' 1.3s ease;\n  animation-fill-mode: forwards;\n  /* 하위요소 */\n  #GoldCoin1{\n    position: absolute; \n    top: 6rem;\n    left: 7rem;\n    width: 70px;\n  }\n  #GoldCoin2{\n    position: absolute; \n    top: 2rem;\n    left: 5rem;\n    width: 80px;\n  }\n  #GoldCoin3{\n    position: absolute; \n    top: 8rem;\n    left: 3rem;\n    width: 71px;\n  }\n  #GoldCoin4{\n    position: absolute; \n    top: 11rem;\n    left: 4rem;\n    width: 70px;\n  }\n  ',
              ])),
            function (e) {
              return e.display || 'none';
            },
            S
          ),
          z = d.ZP.span(
            s ||
              (s = g([
                '\n  display: ',
                ";\n  position: absolute;\n  z-index: 4;\n  left: 2rem;\n  font-family: 'East Sea Dokdo', cursive;\n  color: white;\n  white-space: nowrap;\n  font-size: 2rem;\n  padding: 9rem 0;\n  rotate: -8deg;\n  box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;\n  animation: ",
                ' 2s ease;\n  animation-fill-mode: forwards;\n  ',
              ])),
            function (e) {
              return e.display || 'none';
            },
            S
          ),
          _ = function (e) {
            var t = e.display;
            return u.createElement(
              'div',
              { id: 'GoldCoins' },
              u.createElement(z, { display: t }, 'YOU GET THE TREASURE!'),
              u.createElement(
                O,
                { display: t },
                u.createElement('img', { id: 'Light1', src: h }),
                u.createElement('img', { id: 'Light2', src: h }),
                u.createElement('img', { id: 'Light3', src: h })
              ),
              u.createElement(
                j,
                { display: t },
                u.createElement('img', { id: 'GoldCoin1', src: y }),
                u.createElement('img', { id: 'GoldCoin2', src: y }),
                u.createElement('img', { id: 'GoldCoin3', src: y }),
                u.createElement('img', { id: 'GoldCoin4', src: y })
              )
            );
          },
          C = n(7294);
        function G(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        var I,
          k,
          P = './img/skull_special.svg',
          F = './img/skull_1.svg',
          T = './img/skull_2.svg',
          Z = './img/skull_3.svg',
          L = [P, F, T, Z],
          A = (0, d.F4)(
            v ||
              (v = G([
                '\n    0% {right: 0px; opacity: 0;}\n    50% {right: 10px; opacity: 0%;}\n    70% {opacity: 0%; top: 0px;}\n    90% {opacity: 100%; top: -10px;}\n    100% {right: 70px; rotate: -23deg; opacity: 100%; top: 0px;}\n  ',
              ]))
          ),
          M = d.ZP.img(
            w ||
              (w = G([
                '\n    display: ',
                ';\n    position: absolute;\n    z-index: 2;\n    width: ',
                ';\n    margin: ',
                ';\n    left: ',
                ';\n    animation: ',
                ' 1.5s ease;\n    animation-fill-mode: forwards;\n    ',
              ])),
            function (e) {
              return e.display || 'none';
            },
            function (e) {
              return e.width || '5.3vw';
            },
            function (e) {
              return e.margin || '0';
            },
            function (e) {
              return e.left || '1.5rem';
            },
            A
          ),
          R = function (e) {
            var t,
              n = e.display;
            switch (((t = Math.floor(Math.random() * L.length)), L[t])) {
              case P:
                return C.createElement(M, { display: n, src: P });
              case F:
                return C.createElement(M, {
                  display: n,
                  src: F,
                  width: '2.7vw',
                  left: '6.5rem',
                });
              case T:
                return C.createElement(M, {
                  display: n,
                  src: T,
                  width: '4vw',
                  left: '4.5rem',
                  margin: '1rem 0',
                });
              case Z:
                return C.createElement(M, {
                  display: n,
                  src: Z,
                  width: '3vw',
                  left: '6.5rem',
                });
            }
          },
          U = n(7294);
        function D(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        var H,
          N,
          B = './img/silver_coin.svg',
          Y = (0, d.F4)(
            I ||
              (I = D([
                '\n    0% {right: 0px; opacity: 0;}\n    50% {right: 10px; opacity: 0%;}\n    70% {opacity: 0%; top: 0px;}\n    90% {opacity: 100%; top: -10px;}\n    100% {right: 70px; rotate: -23deg; opacity: 100%; top: 0px;}\n  ',
              ]))
          ),
          K = d.ZP.div(
            k ||
              (k = D([
                '\n  display: ',
                ';\n  position: absolute;\n  left: -7rem;\n  z-index: 2;\n  animation: ',
                ' 1.3s ease;\n  animation-fill-mode: forwards;\n  /* 하위요소 */\n  #silverCoin1{\n    position: relative; \n    top: 10rem;\n    left: 12rem;\n    width: 75px;\n  }\n  #silverCoin2{\n    position: relative; \n    top: 6rem;\n    left: 9rem;\n    width: 80px;\n  }\n  ',
              ])),
            function (e) {
              return e.display || 'none';
            },
            Y
          ),
          V = function (e) {
            var t = e.display;
            return U.createElement(
              K,
              { display: t },
              U.createElement('img', { id: 'silverCoin1', src: B }),
              U.createElement('img', { id: 'silverCoin2', src: B })
            );
          },
          $ = n(7294);
        function q(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        var J,
          Q,
          W,
          X,
          ee = './img/boom_blood.svg',
          te = './img/boom_leaf.svg',
          ne = './img/boom.svg',
          re = './img/boom_paper.png',
          ie = [ee, te, ne, re],
          oe = (0, d.F4)(
            H ||
              (H = q([
                '\n    0% {right: 0px; opacity: 0;}\n    50% {right: 10px; opacity: 0%;}\n    70% {opacity: 0%; top: 0px;}\n    90% {opacity: 100%; rotate: 0deg; top: -10px;}\n    100% {right: 70px; rotate: 10deg; opacity: 100%; top: 0px;}\n  ',
              ]))
          ),
          ae = d.ZP.img(
            N ||
              (N = q([
                '\n    display: ',
                ';\n    position: absolute;\n    z-index: 2;\n    width: ',
                ';\n    margin: ',
                ';\n    left: ',
                ';\n    animation: ',
                ' 1.5s ease;\n    animation-fill-mode: forwards;\n    transition: 0.3s;\n    ',
              ])),
            function (e) {
              return e.display || 'none';
            },
            function (e) {
              return e.width || '95px';
            },
            function (e) {
              return e.margin || '0';
            },
            function (e) {
              return e.left || '4rem';
            },
            oe
          ),
          le = function (e) {
            var t,
              n = e.display;
            switch (((t = Math.floor(Math.random() * ie.length)), ie[t])) {
              case ee:
                return $.createElement(ae, {
                  display: n,
                  src: ee,
                  left: '3.5rem',
                  margin: '1rem 0',
                });
              case te:
                return $.createElement(ae, {
                  display: n,
                  src: te,
                  left: '4.5rem',
                  margin: '3rem 0',
                });
              case re:
                return $.createElement(ae, {
                  display: n,
                  src: re,
                  width: '90px',
                  left: '2.5rem',
                  margin: '3rem 0',
                });
              default:
                return $.createElement(ae, {
                  display: n,
                  src: ne,
                  width: '62px',
                  left: '4rem',
                  margin: '6rem 0',
                });
            }
          },
          ce = n(7294);
        function se(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        function me(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  l = [],
                  c = !0,
                  s = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (r = o.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      c = !0
                    );
                } catch (e) {
                  (s = !0), (i = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (s) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return pe(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return pe(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function pe(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var de,
          fe,
          ue = function (e) {
            var t,
              n = e.GetSelectItem,
              r = e.top,
              i = e.left,
              o = e.rotate,
              a = me((0, p.useState)(''), 2),
              l = a[0],
              c = a[1],
              s = me((0, p.useState)('none'), 2),
              m = s[0],
              u = s[1],
              g = (0, p.useRef)(),
              v = me((0, p.useState)(''), 2),
              w = v[0],
              h = v[1],
              y = d.ZP.div(
                J ||
                  (J = se([
                    '\n    position: absolute; \n    top: ',
                    ';\n    left: ',
                    ';\n    rotate: ',
                    ';\n  ',
                  ])),
                r,
                i,
                o
              ),
              b = (0, d.F4)(
                Q ||
                  (Q = se([
                    '\n    0% {left: 0px;}\n    100% {left: 2.5vw; rotate: 23deg;}\n  ',
                  ]))
              ),
              E = d.ZP.img(
                W ||
                  (W = se([
                    '\n    position: absolute; \n    z-index: 3; \n    animation: ',
                    ' 1.3s ease-out;\n    animation-fill-mode: forwards;\n    width: 9vw;\n    ',
                  ])),
                l
              ),
              x = d.ZP.img(
                X ||
                  (X = se([
                    '\n    position: absolute; \n    z-index: 1; \n    width: 9vw;\n  ',
                  ]))
              ),
              O = './img/coffin_close_black.svg',
              S = [O, './img/coffin_close_white.svg'],
              j = S[f(S)],
              z = [
                ce.createElement(_, { display: m }),
                ce.createElement(V, { display: m }),
                ce.createElement(R, { display: m }),
                ce.createElement(le, { display: m }),
              ];
            g.current =
              (t = Math.random()) < 0.1
                ? z[0]
                : t < 0.3
                ? z[1]
                : t < 0.5
                ? z[2]
                : z[3];
            return ce.createElement(
              ce.Fragment,
              null,
              ce.createElement(
                y,
                null,
                ce.createElement(E, {
                  onClick: function () {
                    '' === l && 'none' === m
                      ? (c(b), u('block'))
                      : (c(''), u('none'));
                  },
                  src: j,
                }),
                'none' !== m ? g.current : ce.createElement(ce.Fragment, null),
                (0, p.useEffect)(function () {
                  h(g.current.type.name), n(w);
                }),
                j === O
                  ? ce.createElement(x, { src: './img/coffin_open_black.svg' })
                  : ce.createElement(x, { src: './img/coffin_open_white.svg' })
              )
            );
          },
          ge = n(7294);
        function ve(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        var we,
          he = function () {
            var e = d.ZP.div(
                de ||
                  (de = ve([
                    "\n    display: flex;\n    width: 90%;\n    padding-left: 2rem;\n    // height: 100vh;\n    font-family: 'Annie Use Your Telescope', cursive;\n    font-size: ",
                    ';;\n    color: ',
                    ';\n    wh1ite-space: nowrap;\n    /* 하위요소 */\n    \n  ',
                  ])),
                function (e) {
                  return e.fontSize || '2rem';
                },
                function (e) {
                  return e.color || 'white';
                }
              ),
              t = d.ZP.div(
                fe ||
                  (fe = ve([
                    "\n    font-family: 'Cabin Sketch', cursive;\n    font-size: 4.5rem;\n    wh1ite-space: nowrap;\n    color: white;\n  ",
                  ]))
              );
            return ge.createElement(
              'div',
              { style: { padding: '15vh 0 0 7vw' } },
              ge.createElement(t, null, 'FIND THE SECRET'),
              ge.createElement(
                'div',
                { style: { paddingTop: '2vh' } },
                ge.createElement(e, { fontSize: '2.5rem' }, '✱ TRESURES ✱'),
                ge.createElement(e, { color: '#F5D111' }, 'GOLD COIN (10%)'),
                ge.createElement(e, null, 'SILVER COIN (30%)'),
                ge.createElement(e, null, 'SKULLS'),
                ge.createElement(e, null, 'TRASH')
              )
            );
          },
          ye = n(7294);
        var be = function () {
            var e,
              t,
              n = (0, p.useRef)(''),
              r = function (e) {
                switch (((n.current = e), e)) {
                  case 'GoldCoin':
                  case 'SilverCoins':
                  case 'Skulls':
                  case 'Booms':
                    return;
                }
              },
              i = d.ZP.div(
                we ||
                  ((e = [
                    '\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n    /* 하위요소 */\n    #menuContainer {\n      width: 25vw;\n    }\n    #mainContainer {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 65vw;\n      background-image: url("./img/background.svg");\n      background-size: 90%;\n      background-repeat: no-repeat;\n      background-position: center bottom;\n    }\n    #itemContainer {\n      transform: translate(-50%, -50%);\n      position: absolute;\n      top: 22.5vh;\n      left: 34vw;\n    }\n    #sideContainer {\n      width: 10vw;\n    }\n    #web_left {\n      position: absolute;\n      z-index: 0;\n      width: 15vw;\n    }\n    #web_right {\n      position: absolute;\n      z-index: 0;\n      width: 17vw;\n      right: 0vw;\n      top: 0vw;\n    }\n    #web_right_round {\n      position: absolute;\n      z-index: 0;\n      width: 10vw;\n      right: 17vw;\n      top: -7vh;\n    }\n  ',
                  ]),
                  t || (t = e.slice(0)),
                  (we = Object.freeze(
                    Object.defineProperties(e, {
                      raw: { value: Object.freeze(t) },
                    })
                  )))
              );
            return ye.createElement(
              i,
              null,
              ye.createElement(
                'div',
                { id: 'menuContainer' },
                ye.createElement('img', {
                  id: 'web_left',
                  src: './img/web_left.svg',
                }),
                ye.createElement(he, null)
              ),
              ye.createElement(
                'div',
                { id: 'mainContainer' },
                ye.createElement(
                  'div',
                  { id: 'itemContainer' },
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    left: '0',
                    rotate: '-1deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    left: '10vw',
                    rotate: '18deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    left: '20vw',
                    rotate: '12deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    left: '30vw',
                    rotate: '-1deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    left: '38vw',
                    rotate: '4deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '9vw',
                    left: '0',
                    rotate: '1deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '9vw',
                    left: '11vw',
                    rotate: '10deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '11vw',
                    left: '20vw',
                    rotate: '-6deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '9vw',
                    left: '30vw',
                    rotate: '10deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '9vw',
                    left: '40vw',
                    rotate: '24deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '19vw',
                    left: '1vw',
                    rotate: '10deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '19vw',
                    left: '10vw',
                    rotate: '27deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '20.5vw',
                    left: '15vw',
                    rotate: '-13deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '18vw',
                    left: '28vw',
                    rotate: '21deg',
                  }),
                  ye.createElement(ue, {
                    GetSelectItem: r,
                    top: '19vw',
                    left: '38vw',
                    rotate: '17deg',
                  })
                )
              ),
              ye.createElement(
                'div',
                { id: 'sideContainer' },
                ye.createElement('img', {
                  id: 'web_right',
                  src: './img/web_right.png',
                }),
                ye.createElement('img', {
                  id: 'web_right_round',
                  src: './img/web_right_round.svg',
                })
              )
            );
          },
          Ee = n(7294),
          xe = document.getElementById('root');
        (0, m.s)(xe).render(Ee.createElement(be, null));
      },
    },
    n = {};
  function r(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var o = (n[e] = { exports: {} });
    return t[e](o, o.exports, r), o.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = function (t, n, i, o) {
      if (!n) {
        var a = 1 / 0;
        for (m = 0; m < e.length; m++) {
          (n = e[m][0]), (i = e[m][1]), (o = e[m][2]);
          for (var l = !0, c = 0; c < n.length; c++)
            (!1 & o || a >= o) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](n[c]);
            })
              ? n.splice(c--, 1)
              : ((l = !1), o < a && (a = o));
          if (l) {
            e.splice(m--, 1);
            var s = i();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      o = o || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > o; m--) e[m] = e[m - 1];
      e[m] = [n, i, o];
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, { a: t }), t;
    }),
    (r.d = function (e, t) {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = { 179: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var i,
            o,
            a = n[0],
            l = n[1],
            c = n[2],
            s = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in l) r.o(l, i) && (r.m[i] = l[i]);
            if (c) var m = c(r);
          }
          for (t && t(n); s < a.length; s++)
            (o = a[s]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(m);
        },
        n = (self.webpackChunkportfolio = self.webpackChunkportfolio || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (r.nc = void 0);
  var i = r.O(void 0, [822], function () {
    return r(9709);
  });
  i = r.O(i);
})();

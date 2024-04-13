import * as Ni from "react/jsx-runtime";
import { jsx as ga } from "react/jsx-runtime";
import * as Be from "react";
import Pt, { forwardRef as qf, useContext as Zm, useMemo as Yf, useRef as vr, useEffect as va, useState as zi, useCallback as jm } from "react";
function Xm(o) {
  if (o.sheet)
    return o.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === o)
      return document.styleSheets[i];
}
function Jm(o) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", o.key), o.nonce !== void 0 && i.setAttribute("nonce", o.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var Qm = /* @__PURE__ */ function() {
  function o(t) {
    var u = this;
    this._insertTag = function(l) {
      var p;
      u.tags.length === 0 ? u.insertionPoint ? p = u.insertionPoint.nextSibling : u.prepend ? p = u.container.firstChild : p = u.before : p = u.tags[u.tags.length - 1].nextSibling, u.container.insertBefore(l, p), u.tags.push(l);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var i = o.prototype;
  return i.hydrate = function(u) {
    u.forEach(this._insertTag);
  }, i.insert = function(u) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Jm(this));
    var l = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var p = u.charCodeAt(0) === 64 && u.charCodeAt(1) === 105;
      p && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + u + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !p;
    }
    if (this.isSpeedy) {
      var m = Xm(l);
      try {
        m.insertRule(u, m.cssRules.length);
      } catch (S) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(u) && console.error('There was a problem inserting the following rule: "' + u + '"', S);
      }
    } else
      l.appendChild(document.createTextNode(u));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(u) {
      return u.parentNode && u.parentNode.removeChild(u);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, o;
}(), ke = "-ms-", Li = "-moz-", ce = "-webkit-", Ra = "comm", Ma = "rule", Pa = "decl", e1 = "@import", Kf = "@keyframes", n1 = "@layer", r1 = Math.abs, Hi = String.fromCharCode, t1 = Object.assign;
function i1(o, i) {
  return Le(o, 0) ^ 45 ? (((i << 2 ^ Le(o, 0)) << 2 ^ Le(o, 1)) << 2 ^ Le(o, 2)) << 2 ^ Le(o, 3) : 0;
}
function Zf(o) {
  return o.trim();
}
function o1(o, i) {
  return (o = i.exec(o)) ? o[0] : o;
}
function le(o, i, t) {
  return o.replace(i, t);
}
function ma(o, i) {
  return o.indexOf(i);
}
function Le(o, i) {
  return o.charCodeAt(i) | 0;
}
function Tt(o, i, t) {
  return o.slice(i, t);
}
function Vn(o) {
  return o.length;
}
function Na(o) {
  return o.length;
}
function Ai(o, i) {
  return i.push(o), o;
}
function a1(o, i) {
  return o.map(i).join("");
}
var Gi = 1, it = 1, jf = 0, on = 0, Te = 0, ot = "";
function qi(o, i, t, u, l, p, m) {
  return { value: o, root: i, parent: t, type: u, props: l, children: p, line: Gi, column: it, length: m, return: "" };
}
function St(o, i) {
  return t1(qi("", null, null, "", null, null, 0), o, { length: -o.length }, i);
}
function s1() {
  return Te;
}
function u1() {
  return Te = on > 0 ? Le(ot, --on) : 0, it--, Te === 10 && (it = 1, Gi--), Te;
}
function pn() {
  return Te = on < jf ? Le(ot, on++) : 0, it++, Te === 10 && (it = 1, Gi++), Te;
}
function Hn() {
  return Le(ot, on);
}
function Oi() {
  return on;
}
function Nt(o, i) {
  return Tt(ot, o, i);
}
function Ot(o) {
  switch (o) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Xf(o) {
  return Gi = it = 1, jf = Vn(ot = o), on = 0, [];
}
function Jf(o) {
  return ot = "", o;
}
function Ii(o) {
  return Zf(Nt(on - 1, wa(o === 91 ? o + 2 : o === 40 ? o + 1 : o)));
}
function f1(o) {
  for (; (Te = Hn()) && Te < 33; )
    pn();
  return Ot(o) > 2 || Ot(Te) > 3 ? "" : " ";
}
function c1(o, i) {
  for (; --i && pn() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return Nt(o, Oi() + (i < 6 && Hn() == 32 && pn() == 32));
}
function wa(o) {
  for (; pn(); )
    switch (Te) {
      case o:
        return on;
      case 34:
      case 39:
        o !== 34 && o !== 39 && wa(Te);
        break;
      case 40:
        o === 41 && wa(o);
        break;
      case 92:
        pn();
        break;
    }
  return on;
}
function l1(o, i) {
  for (; pn() && o + Te !== 47 + 10; )
    if (o + Te === 42 + 42 && Hn() === 47)
      break;
  return "/*" + Nt(i, on - 1) + "*" + Hi(o === 47 ? o : pn());
}
function d1(o) {
  for (; !Ot(Hn()); )
    pn();
  return Nt(o, on);
}
function h1(o) {
  return Jf(Ri("", null, null, null, [""], o = Xf(o), 0, [0], o));
}
function Ri(o, i, t, u, l, p, m, S, M) {
  for (var D = 0, N = 0, k = m, x = 0, O = 0, b = 0, y = 1, R = 1, V = 1, te = 0, P = "", A = l, _ = p, G = u, K = P; R; )
    switch (b = te, te = pn()) {
      case 40:
        if (b != 108 && Le(K, k - 1) == 58) {
          ma(K += le(Ii(te), "&", "&\f"), "&\f") != -1 && (V = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += Ii(te);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += f1(b);
        break;
      case 92:
        K += c1(Oi() - 1, 7);
        continue;
      case 47:
        switch (Hn()) {
          case 42:
          case 47:
            Ai(p1(l1(pn(), Oi()), i, t), M);
            break;
          default:
            K += "/";
        }
        break;
      case 123 * y:
        S[D++] = Vn(K) * V;
      case 125 * y:
      case 59:
      case 0:
        switch (te) {
          case 0:
          case 125:
            R = 0;
          case 59 + N:
            V == -1 && (K = le(K, /\f/g, "")), O > 0 && Vn(K) - k && Ai(O > 32 ? xf(K + ";", u, t, k - 1) : xf(le(K, " ", "") + ";", u, t, k - 2), M);
            break;
          case 59:
            K += ";";
          default:
            if (Ai(G = yf(K, i, t, D, N, l, S, P, A = [], _ = [], k), p), te === 123)
              if (N === 0)
                Ri(K, i, G, G, A, p, k, S, _);
              else
                switch (x === 99 && Le(K, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ri(o, G, G, u && Ai(yf(o, G, G, 0, 0, l, S, P, l, A = [], k), _), l, _, k, S, u ? A : _);
                    break;
                  default:
                    Ri(K, G, G, G, [""], _, 0, S, _);
                }
        }
        D = N = O = 0, y = V = 1, P = K = "", k = m;
        break;
      case 58:
        k = 1 + Vn(K), O = b;
      default:
        if (y < 1) {
          if (te == 123)
            --y;
          else if (te == 125 && y++ == 0 && u1() == 125)
            continue;
        }
        switch (K += Hi(te), te * y) {
          case 38:
            V = N > 0 ? 1 : (K += "\f", -1);
            break;
          case 44:
            S[D++] = (Vn(K) - 1) * V, V = 1;
            break;
          case 64:
            Hn() === 45 && (K += Ii(pn())), x = Hn(), N = k = Vn(P = K += d1(Oi())), te++;
            break;
          case 45:
            b === 45 && Vn(K) == 2 && (y = 0);
        }
    }
  return p;
}
function yf(o, i, t, u, l, p, m, S, M, D, N) {
  for (var k = l - 1, x = l === 0 ? p : [""], O = Na(x), b = 0, y = 0, R = 0; b < u; ++b)
    for (var V = 0, te = Tt(o, k + 1, k = r1(y = m[b])), P = o; V < O; ++V)
      (P = Zf(y > 0 ? x[V] + " " + te : le(te, /&\f/g, x[V]))) && (M[R++] = P);
  return qi(o, i, t, l === 0 ? Ma : S, M, D, N);
}
function p1(o, i, t) {
  return qi(o, i, t, Ra, Hi(s1()), Tt(o, 2, -2), 0);
}
function xf(o, i, t, u) {
  return qi(o, i, t, Pa, Tt(o, 0, u), Tt(o, u + 1, -1), u);
}
function rt(o, i) {
  for (var t = "", u = Na(o), l = 0; l < u; l++)
    t += i(o[l], l, o, i) || "";
  return t;
}
function g1(o, i, t, u) {
  switch (o.type) {
    case n1:
      if (o.children.length)
        break;
    case e1:
    case Pa:
      return o.return = o.return || o.value;
    case Ra:
      return "";
    case Kf:
      return o.return = o.value + "{" + rt(o.children, u) + "}";
    case Ma:
      o.value = o.props.join(",");
  }
  return Vn(t = rt(o.children, u)) ? o.return = o.value + "{" + t + "}" : "";
}
function v1(o) {
  var i = Na(o);
  return function(t, u, l, p) {
    for (var m = "", S = 0; S < i; S++)
      m += o[S](t, u, l, p) || "";
    return m;
  };
}
function m1(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function w1(o) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var b1 = function(i, t, u) {
  for (var l = 0, p = 0; l = p, p = Hn(), l === 38 && p === 12 && (t[u] = 1), !Ot(p); )
    pn();
  return Nt(i, on);
}, _1 = function(i, t) {
  var u = -1, l = 44;
  do
    switch (Ot(l)) {
      case 0:
        l === 38 && Hn() === 12 && (t[u] = 1), i[u] += b1(on - 1, t, u);
        break;
      case 2:
        i[u] += Ii(l);
        break;
      case 4:
        if (l === 44) {
          i[++u] = Hn() === 58 ? "&\f" : "", t[u] = i[u].length;
          break;
        }
      default:
        i[u] += Hi(l);
    }
  while (l = pn());
  return i;
}, y1 = function(i, t) {
  return Jf(_1(Xf(i), t));
}, Ef = /* @__PURE__ */ new WeakMap(), x1 = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var t = i.value, u = i.parent, l = i.column === u.column && i.line === u.line; u.type !== "rule"; )
      if (u = u.parent, !u)
        return;
    if (!(i.props.length === 1 && t.charCodeAt(0) !== 58 && !Ef.get(u)) && !l) {
      Ef.set(i, !0);
      for (var p = [], m = y1(t, p), S = u.props, M = 0, D = 0; M < m.length; M++)
        for (var N = 0; N < S.length; N++, D++)
          i.props[D] = p[M] ? m[M].replace(/&\f/g, S[N]) : S[N] + " " + m[M];
    }
  }
}, E1 = function(i) {
  if (i.type === "decl") {
    var t = i.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
}, S1 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", A1 = function(i) {
  return i.type === "comm" && i.children.indexOf(S1) > -1;
}, C1 = function(i) {
  return function(t, u, l) {
    if (!(t.type !== "rule" || i.compat)) {
      var p = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (p) {
        for (var m = !!t.parent, S = m ? t.parent.children : (
          // global rule at the root level
          l
        ), M = S.length - 1; M >= 0; M--) {
          var D = S[M];
          if (D.line < t.line)
            break;
          if (D.column < t.column) {
            if (A1(D))
              return;
            break;
          }
        }
        p.forEach(function(N) {
          console.error('The pseudo class "' + N + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + N.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Qf = function(i) {
  return i.type.charCodeAt(1) === 105 && i.type.charCodeAt(0) === 64;
}, T1 = function(i, t) {
  for (var u = i - 1; u >= 0; u--)
    if (!Qf(t[u]))
      return !0;
  return !1;
}, Sf = function(i) {
  i.type = "", i.value = "", i.return = "", i.children = "", i.props = "";
}, O1 = function(i, t, u) {
  Qf(i) && (i.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Sf(i)) : T1(t, u) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Sf(i)));
};
function ec(o, i) {
  switch (i1(o, i)) {
    case 5103:
      return ce + "print-" + o + o;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ce + o + o;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + o + Li + o + ke + o + o;
    case 6828:
    case 4268:
      return ce + o + ke + o + o;
    case 6165:
      return ce + o + ke + "flex-" + o + o;
    case 5187:
      return ce + o + le(o, /(\w+).+(:[^]+)/, ce + "box-$1$2" + ke + "flex-$1$2") + o;
    case 5443:
      return ce + o + ke + "flex-item-" + le(o, /flex-|-self/, "") + o;
    case 4675:
      return ce + o + ke + "flex-line-pack" + le(o, /align-content|flex-|-self/, "") + o;
    case 5548:
      return ce + o + ke + le(o, "shrink", "negative") + o;
    case 5292:
      return ce + o + ke + le(o, "basis", "preferred-size") + o;
    case 6060:
      return ce + "box-" + le(o, "-grow", "") + ce + o + ke + le(o, "grow", "positive") + o;
    case 4554:
      return ce + le(o, /([^-])(transform)/g, "$1" + ce + "$2") + o;
    case 6187:
      return le(le(le(o, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), o, "") + o;
    case 5495:
    case 3959:
      return le(o, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return le(le(o, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + o + o;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return le(o, /(.+)-inline(.+)/, ce + "$1$2") + o;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vn(o) - 1 - i > 6)
        switch (Le(o, i + 1)) {
          case 109:
            if (Le(o, i + 4) !== 45)
              break;
          case 102:
            return le(o, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + Li + (Le(o, i + 3) == 108 ? "$3" : "$2-$3")) + o;
          case 115:
            return ~ma(o, "stretch") ? ec(le(o, "stretch", "fill-available"), i) + o : o;
        }
      break;
    case 4949:
      if (Le(o, i + 1) !== 115)
        break;
    case 6444:
      switch (Le(o, Vn(o) - 3 - (~ma(o, "!important") && 10))) {
        case 107:
          return le(o, ":", ":" + ce) + o;
        case 101:
          return le(o, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (Le(o, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + ke + "$2box$3") + o;
      }
      break;
    case 5936:
      switch (Le(o, i + 11)) {
        case 114:
          return ce + o + ke + le(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 108:
          return ce + o + ke + le(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 45:
          return ce + o + ke + le(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
      return ce + o + ke + o + o;
  }
  return o;
}
var I1 = function(i, t, u, l) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Pa:
        i.return = ec(i.value, i.length);
        break;
      case Kf:
        return rt([St(i, {
          value: le(i.value, "@", "@" + ce)
        })], l);
      case Ma:
        if (i.length)
          return a1(i.props, function(p) {
            switch (o1(p, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return rt([St(i, {
                  props: [le(p, /:(read-\w+)/, ":" + Li + "$1")]
                })], l);
              case "::placeholder":
                return rt([St(i, {
                  props: [le(p, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), St(i, {
                  props: [le(p, /:(plac\w+)/, ":" + Li + "$1")]
                }), St(i, {
                  props: [le(p, /:(plac\w+)/, ke + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, R1 = [I1], M1 = function(i) {
  var t = i.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u, function(y) {
      var R = y.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var l = i.stylisPlugins || R1;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var p = {}, m, S = [];
  m = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(y) {
      for (var R = y.getAttribute("data-emotion").split(" "), V = 1; V < R.length; V++)
        p[R[V]] = !0;
      S.push(y);
    }
  );
  var M, D = [x1, E1];
  process.env.NODE_ENV !== "production" && D.push(C1({
    get compat() {
      return b.compat;
    }
  }), O1);
  {
    var N, k = [g1, process.env.NODE_ENV !== "production" ? function(y) {
      y.root || (y.return ? N.insert(y.return) : y.value && y.type !== Ra && N.insert(y.value + "{}"));
    } : m1(function(y) {
      N.insert(y);
    })], x = v1(D.concat(l, k)), O = function(R) {
      return rt(h1(R), x);
    };
    M = function(R, V, te, P) {
      N = te, process.env.NODE_ENV !== "production" && V.map !== void 0 && (N = {
        insert: function(_) {
          te.insert(_ + V.map);
        }
      }), O(R ? R + "{" + V.styles + "}" : V.styles), P && (b.inserted[V.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new Qm({
      key: t,
      container: m,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: p,
    registered: {},
    insert: M
  };
  return b.sheet.hydrate(S), b;
};
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = 1; i < arguments.length; i++) {
      var t = arguments[i];
      for (var u in t)
        Object.prototype.hasOwnProperty.call(t, u) && (o[u] = t[u]);
    }
    return o;
  }, ba.apply(this, arguments);
}
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _a = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af;
function P1() {
  if (Af)
    return he;
  Af = 1;
  var o = typeof Symbol == "function" && Symbol.for, i = o ? Symbol.for("react.element") : 60103, t = o ? Symbol.for("react.portal") : 60106, u = o ? Symbol.for("react.fragment") : 60107, l = o ? Symbol.for("react.strict_mode") : 60108, p = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, S = o ? Symbol.for("react.context") : 60110, M = o ? Symbol.for("react.async_mode") : 60111, D = o ? Symbol.for("react.concurrent_mode") : 60111, N = o ? Symbol.for("react.forward_ref") : 60112, k = o ? Symbol.for("react.suspense") : 60113, x = o ? Symbol.for("react.suspense_list") : 60120, O = o ? Symbol.for("react.memo") : 60115, b = o ? Symbol.for("react.lazy") : 60116, y = o ? Symbol.for("react.block") : 60121, R = o ? Symbol.for("react.fundamental") : 60117, V = o ? Symbol.for("react.responder") : 60118, te = o ? Symbol.for("react.scope") : 60119;
  function P(_) {
    if (typeof _ == "object" && _ !== null) {
      var G = _.$$typeof;
      switch (G) {
        case i:
          switch (_ = _.type, _) {
            case M:
            case D:
            case u:
            case p:
            case l:
            case k:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case S:
                case N:
                case b:
                case O:
                case m:
                  return _;
                default:
                  return G;
              }
          }
        case t:
          return G;
      }
    }
  }
  function A(_) {
    return P(_) === D;
  }
  return he.AsyncMode = M, he.ConcurrentMode = D, he.ContextConsumer = S, he.ContextProvider = m, he.Element = i, he.ForwardRef = N, he.Fragment = u, he.Lazy = b, he.Memo = O, he.Portal = t, he.Profiler = p, he.StrictMode = l, he.Suspense = k, he.isAsyncMode = function(_) {
    return A(_) || P(_) === M;
  }, he.isConcurrentMode = A, he.isContextConsumer = function(_) {
    return P(_) === S;
  }, he.isContextProvider = function(_) {
    return P(_) === m;
  }, he.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === i;
  }, he.isForwardRef = function(_) {
    return P(_) === N;
  }, he.isFragment = function(_) {
    return P(_) === u;
  }, he.isLazy = function(_) {
    return P(_) === b;
  }, he.isMemo = function(_) {
    return P(_) === O;
  }, he.isPortal = function(_) {
    return P(_) === t;
  }, he.isProfiler = function(_) {
    return P(_) === p;
  }, he.isStrictMode = function(_) {
    return P(_) === l;
  }, he.isSuspense = function(_) {
    return P(_) === k;
  }, he.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === u || _ === D || _ === p || _ === l || _ === k || _ === x || typeof _ == "object" && _ !== null && (_.$$typeof === b || _.$$typeof === O || _.$$typeof === m || _.$$typeof === S || _.$$typeof === N || _.$$typeof === R || _.$$typeof === V || _.$$typeof === te || _.$$typeof === y);
  }, he.typeOf = P, he;
}
var pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;
function N1() {
  return Cf || (Cf = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, i = o ? Symbol.for("react.element") : 60103, t = o ? Symbol.for("react.portal") : 60106, u = o ? Symbol.for("react.fragment") : 60107, l = o ? Symbol.for("react.strict_mode") : 60108, p = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, S = o ? Symbol.for("react.context") : 60110, M = o ? Symbol.for("react.async_mode") : 60111, D = o ? Symbol.for("react.concurrent_mode") : 60111, N = o ? Symbol.for("react.forward_ref") : 60112, k = o ? Symbol.for("react.suspense") : 60113, x = o ? Symbol.for("react.suspense_list") : 60120, O = o ? Symbol.for("react.memo") : 60115, b = o ? Symbol.for("react.lazy") : 60116, y = o ? Symbol.for("react.block") : 60121, R = o ? Symbol.for("react.fundamental") : 60117, V = o ? Symbol.for("react.responder") : 60118, te = o ? Symbol.for("react.scope") : 60119;
    function P(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === u || U === D || U === p || U === l || U === k || U === x || typeof U == "object" && U !== null && (U.$$typeof === b || U.$$typeof === O || U.$$typeof === m || U.$$typeof === S || U.$$typeof === N || U.$$typeof === R || U.$$typeof === V || U.$$typeof === te || U.$$typeof === y);
    }
    function A(U) {
      if (typeof U == "object" && U !== null) {
        var Yn = U.$$typeof;
        switch (Yn) {
          case i:
            var Ee = U.type;
            switch (Ee) {
              case M:
              case D:
              case u:
              case p:
              case l:
              case k:
                return Ee;
              default:
                var kn = Ee && Ee.$$typeof;
                switch (kn) {
                  case S:
                  case N:
                  case b:
                  case O:
                  case m:
                    return kn;
                  default:
                    return Yn;
                }
            }
          case t:
            return Yn;
        }
      }
    }
    var _ = M, G = D, K = S, Ke = m, Nn = i, Gn = N, Nr = u, Lr = b, Ln = O, qn = t, st = p, tr = l, Ze = k, je = !1;
    function br(U) {
      return je || (je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Cn(U) || A(U) === M;
    }
    function Cn(U) {
      return A(U) === D;
    }
    function ze(U) {
      return A(U) === S;
    }
    function ir(U) {
      return A(U) === m;
    }
    function _r(U) {
      return typeof U == "object" && U !== null && U.$$typeof === i;
    }
    function Dr(U) {
      return A(U) === N;
    }
    function sn(U) {
      return A(U) === u;
    }
    function Dn(U) {
      return A(U) === b;
    }
    function yr(U) {
      return A(U) === O;
    }
    function Wn(U) {
      return A(U) === t;
    }
    function Fn(U) {
      return A(U) === p;
    }
    function Wr(U) {
      return A(U) === l;
    }
    function or(U) {
      return A(U) === k;
    }
    pe.AsyncMode = _, pe.ConcurrentMode = G, pe.ContextConsumer = K, pe.ContextProvider = Ke, pe.Element = Nn, pe.ForwardRef = Gn, pe.Fragment = Nr, pe.Lazy = Lr, pe.Memo = Ln, pe.Portal = qn, pe.Profiler = st, pe.StrictMode = tr, pe.Suspense = Ze, pe.isAsyncMode = br, pe.isConcurrentMode = Cn, pe.isContextConsumer = ze, pe.isContextProvider = ir, pe.isElement = _r, pe.isForwardRef = Dr, pe.isFragment = sn, pe.isLazy = Dn, pe.isMemo = yr, pe.isPortal = Wn, pe.isProfiler = Fn, pe.isStrictMode = Wr, pe.isSuspense = or, pe.isValidElementType = P, pe.typeOf = A;
  }()), pe;
}
process.env.NODE_ENV === "production" ? _a.exports = P1() : _a.exports = N1();
var L1 = _a.exports, nc = L1, D1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, W1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rc = {};
rc[nc.ForwardRef] = D1;
rc[nc.Memo] = W1;
var F1 = !0;
function tc(o, i, t) {
  var u = "";
  return t.split(" ").forEach(function(l) {
    o[l] !== void 0 ? i.push(o[l] + ";") : u += l + " ";
  }), u;
}
var La = function(i, t, u) {
  var l = i.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (u === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  F1 === !1) && i.registered[l] === void 0 && (i.registered[l] = t.styles);
}, Da = function(i, t, u) {
  La(i, t, u);
  var l = i.key + "-" + t.name;
  if (i.inserted[t.name] === void 0) {
    var p = t;
    do
      i.insert(t === p ? "." + l : "", p, i.sheet, !0), p = p.next;
    while (p !== void 0);
  }
};
function k1(o) {
  for (var i = 0, t, u = 0, l = o.length; l >= 4; ++u, l -= 4)
    t = o.charCodeAt(u) & 255 | (o.charCodeAt(++u) & 255) << 8 | (o.charCodeAt(++u) & 255) << 16 | (o.charCodeAt(++u) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, i = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      i ^= (o.charCodeAt(u + 2) & 255) << 16;
    case 2:
      i ^= (o.charCodeAt(u + 1) & 255) << 8;
    case 1:
      i ^= o.charCodeAt(u) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var U1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Tf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, B1 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", $1 = /[A-Z]|^ms/g, ic = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wa = function(i) {
  return i.charCodeAt(1) === 45;
}, Of = function(i) {
  return i != null && typeof i != "boolean";
}, da = /* @__PURE__ */ w1(function(o) {
  return Wa(o) ? o : o.replace($1, "-$&").toLowerCase();
}), Di = function(i, t) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ic, function(u, l, p) {
          return Pn = {
            name: l,
            styles: p,
            next: Pn
          }, l;
        });
  }
  return U1[i] !== 1 && !Wa(i) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var V1 = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, z1 = ["normal", "none", "initial", "inherit", "unset"], H1 = Di, G1 = /^-ms-/, q1 = /-(.)/g, If = {};
  Di = function(i, t) {
    if (i === "content" && (typeof t != "string" || z1.indexOf(t) === -1 && !V1.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var u = H1(i, t);
    return u !== "" && !Wa(i) && i.indexOf("-") !== -1 && If[i] === void 0 && (If[i] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + i.replace(G1, "ms-").replace(q1, function(l, p) {
      return p.toUpperCase();
    }) + "?")), u;
  };
}
var oc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function It(o, i, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(oc);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Pn = {
          name: t.name,
          styles: t.styles,
          next: Pn
        }, t.name;
      if (t.styles !== void 0) {
        var u = t.next;
        if (u !== void 0)
          for (; u !== void 0; )
            Pn = {
              name: u.name,
              styles: u.styles,
              next: Pn
            }, u = u.next;
        var l = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (l += t.map), l;
      }
      return Y1(o, i, t);
    }
    case "function": {
      if (o !== void 0) {
        var p = Pn, m = t(o);
        return Pn = p, It(o, i, m);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var S = [], M = t.replace(ic, function(N, k, x) {
          var O = "animation" + S.length;
          return S.push("const " + O + " = keyframes`" + x.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + O + "}";
        });
        S.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(S, ["`" + M + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + M + "`"));
      }
      break;
  }
  if (i == null)
    return t;
  var D = i[t];
  return D !== void 0 ? D : t;
}
function Y1(o, i, t) {
  var u = "";
  if (Array.isArray(t))
    for (var l = 0; l < t.length; l++)
      u += It(o, i, t[l]) + ";";
  else
    for (var p in t) {
      var m = t[p];
      if (typeof m != "object")
        i != null && i[m] !== void 0 ? u += p + "{" + i[m] + "}" : Of(m) && (u += da(p) + ":" + Di(p, m) + ";");
      else {
        if (p === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(oc);
        if (Array.isArray(m) && typeof m[0] == "string" && (i == null || i[m[0]] === void 0))
          for (var S = 0; S < m.length; S++)
            Of(m[S]) && (u += da(p) + ":" + Di(p, m[S]) + ";");
        else {
          var M = It(o, i, m);
          switch (p) {
            case "animation":
            case "animationName": {
              u += da(p) + ":" + M + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && p === "undefined" && console.error(B1), u += p + "{" + M + "}";
          }
        }
      }
    }
  return u;
}
var Rf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ac;
process.env.NODE_ENV !== "production" && (ac = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Pn, Rt = function(i, t, u) {
  if (i.length === 1 && typeof i[0] == "object" && i[0] !== null && i[0].styles !== void 0)
    return i[0];
  var l = !0, p = "";
  Pn = void 0;
  var m = i[0];
  m == null || m.raw === void 0 ? (l = !1, p += It(u, t, m)) : (process.env.NODE_ENV !== "production" && m[0] === void 0 && console.error(Tf), p += m[0]);
  for (var S = 1; S < i.length; S++)
    p += It(u, t, i[S]), l && (process.env.NODE_ENV !== "production" && m[S] === void 0 && console.error(Tf), p += m[S]);
  var M;
  process.env.NODE_ENV !== "production" && (p = p.replace(ac, function(x) {
    return M = x, "";
  })), Rf.lastIndex = 0;
  for (var D = "", N; (N = Rf.exec(p)) !== null; )
    D += "-" + // $FlowFixMe we know it's not null
    N[1];
  var k = k1(p) + D;
  return process.env.NODE_ENV !== "production" ? {
    name: k,
    styles: p,
    map: M,
    next: Pn,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: k,
    styles: p,
    next: Pn
  };
}, K1 = function(i) {
  return i();
}, sc = Be["useInsertionEffect"] ? Be["useInsertionEffect"] : !1, uc = sc || K1, Mf = sc || Be.useLayoutEffect, Yi = {}.hasOwnProperty, Fa = /* @__PURE__ */ Be.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ M1({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Fa.displayName = "EmotionCacheContext");
Fa.Provider;
var ka = function(i) {
  return /* @__PURE__ */ qf(function(t, u) {
    var l = Zm(Fa);
    return i(t, l, u);
  });
}, Ki = /* @__PURE__ */ Be.createContext({});
process.env.NODE_ENV !== "production" && (Ki.displayName = "EmotionThemeContext");
var Pf = function(i) {
  var t = i.split(".");
  return t[t.length - 1];
}, Z1 = function(i) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(i);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(i), t))
    return Pf(t[1]);
}, j1 = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), X1 = function(i) {
  return i.replace(/\$/g, "-");
}, J1 = function(i) {
  if (i)
    for (var t = i.split(`
`), u = 0; u < t.length; u++) {
      var l = Z1(t[u]);
      if (l) {
        if (j1.has(l))
          break;
        if (/^[A-Z]/.test(l))
          return X1(l);
      }
    }
}, ya = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xa = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", fc = function(i, t) {
  if (process.env.NODE_ENV !== "production" && typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
  var u = {};
  for (var l in t)
    Yi.call(t, l) && (u[l] = t[l]);
  if (u[ya] = i, process.env.NODE_ENV !== "production" && t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var p = J1(new Error().stack);
    p && (u[xa] = p);
  }
  return u;
}, Q1 = function(i) {
  var t = i.cache, u = i.serialized, l = i.isStringTag;
  return La(t, u, l), uc(function() {
    return Da(t, u, l);
  }), null;
}, cc = /* @__PURE__ */ ka(function(o, i, t) {
  var u = o.css;
  typeof u == "string" && i.registered[u] !== void 0 && (u = i.registered[u]);
  var l = o[ya], p = [u], m = "";
  typeof o.className == "string" ? m = tc(i.registered, p, o.className) : o.className != null && (m = o.className + " ");
  var S = Rt(p, void 0, Be.useContext(Ki));
  if (process.env.NODE_ENV !== "production" && S.name.indexOf("-") === -1) {
    var M = o[xa];
    M && (S = Rt([S, "label:" + M + ";"]));
  }
  m += i.key + "-" + S.name;
  var D = {};
  for (var N in o)
    Yi.call(o, N) && N !== "css" && N !== ya && (process.env.NODE_ENV === "production" || N !== xa) && (D[N] = o[N]);
  return D.ref = t, D.className = m, /* @__PURE__ */ Be.createElement(Be.Fragment, null, /* @__PURE__ */ Be.createElement(Q1, {
    cache: i,
    serialized: S,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ Be.createElement(l, D));
});
process.env.NODE_ENV !== "production" && (cc.displayName = "EmotionCssPropInternal");
var lc = cc;
function me(o, i, t) {
  return Yi.call(i, "css") ? Ni.jsx(lc, fc(o, i), t) : Ni.jsx(o, i, t);
}
function nt(o, i, t) {
  return Yi.call(i, "css") ? Ni.jsxs(lc, fc(o, i), t) : Ni.jsxs(o, i, t);
}
const Nf = ({
  h: o,
  s: i,
  l: t,
  a: u
}) => (i *= (t < 50 ? t : 100 - t) / 100, {
  h: o,
  s: i > 0 ? 2 * i / (t + i) * 100 : 0,
  v: t + i,
  a: u
}), dc = ({
  h: o,
  s: i,
  v: t,
  a: u
}) => {
  i = i / 100, t = t / 100;
  let l = [];
  const p = t * i, m = o / 60, S = p * (1 - Math.abs(m % 2 - 1)), M = t - p;
  return m >= 0 && m < 1 ? l = [p, S, 0] : m >= 1 && m < 2 ? l = [S, p, 0] : m >= 2 && m < 3 ? l = [0, p, S] : o >= 3 && m < 4 ? l = [0, S, p] : o >= 4 && m < 5 ? l = [S, 0, p] : o >= 5 && m <= 6 ? l = [p, 0, S] : l = [0, 0, 0], {
    r: Math.round(255 * (l[0] + M)),
    g: Math.round(255 * (l[1] + M)),
    b: Math.round(255 * (l[2] + M)),
    a: u
  };
}, Ci = (o) => {
  const i = o.toString(16);
  return i.length === 1 ? "0" + i : i;
}, ew = ({
  r: o,
  g: i,
  b: t,
  a: u
}) => {
  const l = u < 1 ? Ci(Math.round(u * 255)) : "";
  return "#" + [Ci(o), Ci(i), Ci(t), l].join("");
}, Ua = ({
  h: o,
  s: i,
  v: t,
  a: u
}) => {
  const l = dc({ h: o, s: i, v: t, a: u });
  return ew(l);
}, hc = ({
  h: o,
  s: i,
  v: t,
  a: u
}) => {
  const l = (200 - i) * t / 100;
  return {
    h: o,
    s: l > 0 && l < 200 ? i * t / 100 / (l <= 100 ? l : 200 - l) * 100 : 0,
    l: l / 2,
    a: u
  };
}, Wi = ({
  h: o,
  s: i,
  v: t,
  a: u
}) => {
  const l = hc({ h: o, s: i, v: t, a: u });
  return `hsl(${l.h}, ${l.s}%, ${l.l}%, ${l.a})`;
}, nw = ({ h: o, s: i, v: t }) => ({
  h: o,
  w: (100 - i) * t / 100,
  b: 100 - t
}), Lf = ({ h: o, w: i, b: t }, u) => ({
  h: o,
  s: Math.max(0, Math.min(100, t === 100 ? 0 : 100 - i / (100 - t) * 100)),
  v: 100 - t,
  a: u
}), rw = (o) => Object.keys(o).every((i) => ["h", "s", "l", "a"].includes(i)), tw = (o) => Object.keys(o).every((i) => ["r", "g", "b", "a"].includes(i)), Ba = ({
  r: o,
  g: i,
  b: t,
  a: u
}) => {
  let l, p = 0, m = 0;
  const S = Math.max(o, i, t), M = Math.min(o, i, t), D = S - M;
  return D === 0 ? l = 0 : o === S ? l = (i - t) / D % 6 : i === S ? l = (t - o) / D + 2 : l = (o - i) / D + 4, l = l * 60, l < 0 && (l += 360), p = (S === 0 ? 0 : D / S) * 100, m = S / 255 * 100, { h: l, s: p, v: m, a: u };
}, Fi = (o) => (o[0] === "#" && (o = o.substring(1)), o.length < 6 ? {
  r: parseInt(o[0] + o[0], 16),
  g: parseInt(o[1] + o[1], 16),
  b: parseInt(o[2] + o[2], 16),
  a: o.length === 4 ? Math.round(parseInt(o[3] + o[3], 16) / 255 * 100) / 100 : 1
} : {
  r: parseInt(o.substring(0, 2), 16),
  g: parseInt(o.substring(2, 4), 16),
  b: parseInt(o.substring(4, 6), 16),
  a: o.length === 8 ? Math.round(parseInt(o.substring(6, 8), 16) / 255 * 100) / 100 : 1
}), iw = /^#[0-9A-F]{3,6}[0-9a-f]{0,2}$/i, ow = (o) => Fi(o), pc = /rgba?\((?<r>[.\d]+)[, ]+(?<g>[.\d]+)[, ]+(?<b>[.\d]+)(?:\s?[,/]\s?(?<a>[.\d]+%?))?\)/i, aw = (o) => {
  const i = pc.exec(o);
  if (i != null && i.groups)
    return {
      r: parseInt(i.groups.r, 10),
      g: parseInt(i.groups.g, 10),
      b: parseInt(i.groups.b, 10),
      a: typeof i.groups.a < "u" ? parseInt(i.groups.a) : 1
    };
}, sw = (o) => {
  let i;
  if (pc.test(o) ? i = aw(o) : iw.test(o) && (i = ow(o)), i)
    return Ba(i);
  throw new Error(`Cannot parse ${o}`);
};
class ki {
  constructor(i) {
    if (typeof i == "string") {
      const t = sw(i);
      this._color = t, this._alpha = t.a || 1;
    } else
      tw(i) ? (this._color = Ba(i), this._alpha = i.a || 1) : rw(i) ? (this._color = Nf(i), this._alpha = i.a || 1) : (this._color = i, this._alpha = i.a || 1);
  }
  alpha(i) {
    return this._alpha = i, this;
  }
  white() {
    return this.toHwb().w;
  }
  darken(i) {
    const t = this.toHsl();
    return t.l = Math.min(100, Math.max(t.l - t.l * i, 0)), this._color = Nf(t), this;
  }
  whiten(i) {
    const t = this.toHwb();
    return t.w = Math.min(100, Math.max(t.w + t.w * i, 0)), this._color = Lf(t, this._alpha), this;
  }
  blacken(i) {
    const t = this.toHwb();
    return t.b = Math.min(100, Math.max(t.b + t.b * i, 0)), this._color = Lf(t, this._alpha), this;
  }
  toHwb() {
    return nw(this._color);
  }
  toHsl() {
    return hc({ ...this._color, a: this._alpha });
  }
  toRgbString() {
    const i = dc({ ...this._color, a: this._alpha });
    return `rgb${i.a !== 1 ? "a" : ""}(${i.r}, ${i.g}, ${i.b}${i.a !== 1 ? `, ${i.a}` : ""})`;
  }
  toHex() {
    return Ua({ ...this._color, a: this._alpha });
  }
}
const Mi = (o) => {
  const i = Fi(o);
  return Ba(i);
};
var F = {}, Ea = { exports: {} };
(function(o, i) {
  (function(t, u) {
    var l = "1.0.36", p = "", m = "?", S = "function", M = "undefined", D = "object", N = "string", k = "major", x = "model", O = "name", b = "type", y = "vendor", R = "version", V = "architecture", te = "console", P = "mobile", A = "tablet", _ = "smarttv", G = "wearable", K = "embedded", Ke = 350, Nn = "Amazon", Gn = "Apple", Nr = "ASUS", Lr = "BlackBerry", Ln = "Browser", qn = "Chrome", st = "Edge", tr = "Firefox", Ze = "Google", je = "Huawei", br = "LG", Cn = "Microsoft", ze = "Motorola", ir = "Opera", _r = "Samsung", Dr = "Sharp", sn = "Sony", Dn = "Xiaomi", yr = "Zebra", Wn = "Facebook", Fn = "Chromium OS", Wr = "Mac OS", or = function(J, ue) {
      var Y = {};
      for (var se in J)
        ue[se] && ue[se].length % 2 === 0 ? Y[se] = ue[se].concat(J[se]) : Y[se] = J[se];
      return Y;
    }, U = function(J) {
      for (var ue = {}, Y = 0; Y < J.length; Y++)
        ue[J[Y].toUpperCase()] = J[Y];
      return ue;
    }, Yn = function(J, ue) {
      return typeof J === N ? Ee(ue).indexOf(Ee(J)) !== -1 : !1;
    }, Ee = function(J) {
      return J.toLowerCase();
    }, kn = function(J) {
      return typeof J === N ? J.replace(/[^\d\.]/g, p).split(".")[0] : u;
    }, ut = function(J, ue) {
      if (typeof J === N)
        return J = J.replace(/^\s\s*/, p), typeof ue === M ? J : J.substring(0, Ke);
    }, He = function(J, ue) {
      for (var Y = 0, se, vn, Je, ae, q, Qe; Y < ue.length && !q; ) {
        var xr = ue[Y], Ur = ue[Y + 1];
        for (se = vn = 0; se < xr.length && !q && xr[se]; )
          if (q = xr[se++].exec(J), q)
            for (Je = 0; Je < Ur.length; Je++)
              Qe = q[++vn], ae = Ur[Je], typeof ae === D && ae.length > 0 ? ae.length === 2 ? typeof ae[1] == S ? this[ae[0]] = ae[1].call(this, Qe) : this[ae[0]] = ae[1] : ae.length === 3 ? typeof ae[1] === S && !(ae[1].exec && ae[1].test) ? this[ae[0]] = Qe ? ae[1].call(this, Qe, ae[2]) : u : this[ae[0]] = Qe ? Qe.replace(ae[1], ae[2]) : u : ae.length === 4 && (this[ae[0]] = Qe ? ae[3].call(this, Qe.replace(ae[1], ae[2])) : u) : this[ae] = Qe || u;
        Y += 2;
      }
    }, Fr = function(J, ue) {
      for (var Y in ue)
        if (typeof ue[Y] === D && ue[Y].length > 0) {
          for (var se = 0; se < ue[Y].length; se++)
            if (Yn(ue[Y][se], J))
              return Y === m ? u : Y;
        } else if (Yn(ue[Y], J))
          return Y === m ? u : Y;
      return J;
    }, ji = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, ar = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Xe = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [R, [O, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [R, [O, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [O, R], [/opios[\/ ]+([\w\.]+)/i], [R, [O, ir + " Mini"]], [/\bopr\/([\w\.]+)/i], [R, [O, ir]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [O, R], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [R, [O, "UC" + Ln]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [R, [O, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [R, [O, "WeChat"]], [/konqueror\/([\w\.]+)/i], [R, [O, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [R, [O, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [R, [O, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[O, /(.+)/, "$1 Secure " + Ln], R], [/\bfocus\/([\w\.]+)/i], [R, [O, tr + " Focus"]], [/\bopt\/([\w\.]+)/i], [R, [O, ir + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [R, [O, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [R, [O, "Dolphin"]], [/coast\/([\w\.]+)/i], [R, [O, ir + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [R, [O, "MIUI " + Ln]], [/fxios\/([-\w\.]+)/i], [R, [O, tr]], [/\bqihu|(qi?ho?o?|360)browser/i], [[O, "360 " + Ln]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[O, /(.+)/, "$1 " + Ln], R], [/(comodo_dragon)\/([\w\.]+)/i], [[O, /_/g, " "], R], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [O, R], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [O], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[O, Wn], R], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [O, R], [/\bgsa\/([\w\.]+) .*safari\//i], [R, [O, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [R, [O, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [R, [O, qn + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[O, qn + " WebView"], R], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [R, [O, "Android " + Ln]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [O, R], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [R, [O, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [R, O], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [O, [R, Fr, ji]], [/(webkit|khtml)\/([\w\.]+)/i], [O, R], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[O, "Netscape"], R], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [R, [O, tr + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [O, R], [/(cobalt)\/([\w\.]+)/i], [O, [R, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[V, "amd64"]], [/(ia32(?=;))/i], [[V, Ee]], [/((?:i[346]|x)86)[;\)]/i], [[V, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[V, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[V, "armhf"]], [/windows (ce|mobile); ppc;/i], [[V, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[V, /ower/, p, Ee]], [/(sun4\w)[;\)]/i], [[V, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[V, Ee]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [x, [y, _r], [b, A]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [x, [y, _r], [b, P]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [x, [y, Gn], [b, P]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [x, [y, Gn], [b, A]], [/(macintosh);/i], [x, [y, Gn]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [x, [y, Dr], [b, P]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [x, [y, je], [b, A]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [x, [y, je], [b, P]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[x, /_/g, " "], [y, Dn], [b, P]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[x, /_/g, " "], [y, Dn], [b, A]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [x, [y, "OPPO"], [b, P]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [x, [y, "Vivo"], [b, P]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [x, [y, "Realme"], [b, P]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [x, [y, ze], [b, P]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [x, [y, ze], [b, A]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [x, [y, br], [b, A]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [x, [y, br], [b, P]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [x, [y, "Lenovo"], [b, A]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[x, /_/g, " "], [y, "Nokia"], [b, P]], [/(pixel c)\b/i], [x, [y, Ze], [b, A]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [x, [y, Ze], [b, P]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [x, [y, sn], [b, P]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[x, "Xperia Tablet"], [y, sn], [b, A]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [x, [y, "OnePlus"], [b, P]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [x, [y, Nn], [b, A]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[x, /(.+)/g, "Fire Phone $1"], [y, Nn], [b, P]], [/(playbook);[-\w\),; ]+(rim)/i], [x, y, [b, A]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [x, [y, Lr], [b, P]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [x, [y, Nr], [b, A]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [x, [y, Nr], [b, P]], [/(nexus 9)/i], [x, [y, "HTC"], [b, A]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [y, [x, /_/g, " "], [b, P]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [x, [y, "Acer"], [b, A]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [x, [y, "Meizu"], [b, P]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [y, x, [b, P]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [y, x, [b, A]], [/(surface duo)/i], [x, [y, Cn], [b, A]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [x, [y, "Fairphone"], [b, P]], [/(u304aa)/i], [x, [y, "AT&T"], [b, P]], [/\bsie-(\w*)/i], [x, [y, "Siemens"], [b, P]], [/\b(rct\w+) b/i], [x, [y, "RCA"], [b, A]], [/\b(venue[\d ]{2,7}) b/i], [x, [y, "Dell"], [b, A]], [/\b(q(?:mv|ta)\w+) b/i], [x, [y, "Verizon"], [b, A]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [x, [y, "Barnes & Noble"], [b, A]], [/\b(tm\d{3}\w+) b/i], [x, [y, "NuVision"], [b, A]], [/\b(k88) b/i], [x, [y, "ZTE"], [b, A]], [/\b(nx\d{3}j) b/i], [x, [y, "ZTE"], [b, P]], [/\b(gen\d{3}) b.+49h/i], [x, [y, "Swiss"], [b, P]], [/\b(zur\d{3}) b/i], [x, [y, "Swiss"], [b, A]], [/\b((zeki)?tb.*\b) b/i], [x, [y, "Zeki"], [b, A]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[y, "Dragon Touch"], x, [b, A]], [/\b(ns-?\w{0,9}) b/i], [x, [y, "Insignia"], [b, A]], [/\b((nxa|next)-?\w{0,9}) b/i], [x, [y, "NextBook"], [b, A]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[y, "Voice"], x, [b, P]], [/\b(lvtel\-)?(v1[12]) b/i], [[y, "LvTel"], x, [b, P]], [/\b(ph-1) /i], [x, [y, "Essential"], [b, P]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [x, [y, "Envizen"], [b, A]], [/\b(trio[-\w\. ]+) b/i], [x, [y, "MachSpeed"], [b, A]], [/\btu_(1491) b/i], [x, [y, "Rotor"], [b, A]], [/(shield[\w ]+) b/i], [x, [y, "Nvidia"], [b, A]], [/(sprint) (\w+)/i], [y, x, [b, P]], [/(kin\.[onetw]{3})/i], [[x, /\./g, " "], [y, Cn], [b, P]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [x, [y, yr], [b, A]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [x, [y, yr], [b, P]], [/smart-tv.+(samsung)/i], [y, [b, _]], [/hbbtv.+maple;(\d+)/i], [[x, /^/, "SmartTV"], [y, _r], [b, _]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[y, br], [b, _]], [/(apple) ?tv/i], [y, [x, Gn + " TV"], [b, _]], [/crkey/i], [[x, qn + "cast"], [y, Ze], [b, _]], [/droid.+aft(\w+)( bui|\))/i], [x, [y, Nn], [b, _]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [x, [y, Dr], [b, _]], [/(bravia[\w ]+)( bui|\))/i], [x, [y, sn], [b, _]], [/(mitv-\w{5}) bui/i], [x, [y, Dn], [b, _]], [/Hbbtv.*(technisat) (.*);/i], [y, x, [b, _]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[y, ut], [x, ut], [b, _]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[b, _]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [y, x, [b, te]], [/droid.+; (shield) bui/i], [x, [y, "Nvidia"], [b, te]], [/(playstation [345portablevi]+)/i], [x, [y, sn], [b, te]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [x, [y, Cn], [b, te]], [/((pebble))app/i], [y, x, [b, G]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [x, [y, Gn], [b, G]], [/droid.+; (glass) \d/i], [x, [y, Ze], [b, G]], [/droid.+; (wt63?0{2,3})\)/i], [x, [y, yr], [b, G]], [/(quest( 2| pro)?)/i], [x, [y, Wn], [b, G]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [y, [b, K]], [/(aeobc)\b/i], [x, [y, Nn], [b, K]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [x, [b, P]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [x, [b, A]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[b, A]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[b, P]], [/(android[-\w\. ]{0,9});.+buil/i], [x, [y, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [R, [O, st + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [R, [O, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [O, R], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [R, O]], os: [[/microsoft (windows) (vista|xp)/i], [O, R], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [O, [R, Fr, ar]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[O, "Windows"], [R, Fr, ar]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[R, /_/g, "."], [O, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[O, Wr], [R, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [R, O], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [O, R], [/\(bb(10);/i], [R, [O, Lr]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [R, [O, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [R, [O, tr + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [R, [O, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [R, [O, "watchOS"]], [/crkey\/([\d\.]+)/i], [R, [O, qn + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[O, Fn], R], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [O, R], [/(sunos) ?([\w\.\d]*)/i], [[O, "Solaris"], R], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [O, R]] }, Me = function(J, ue) {
      if (typeof J === D && (ue = J, J = u), !(this instanceof Me))
        return new Me(J, ue).getResult();
      var Y = typeof t !== M && t.navigator ? t.navigator : u, se = J || (Y && Y.userAgent ? Y.userAgent : p), vn = Y && Y.userAgentData ? Y.userAgentData : u, Je = ue ? or(Xe, ue) : Xe, ae = Y && Y.userAgent == se;
      return this.getBrowser = function() {
        var q = {};
        return q[O] = u, q[R] = u, He.call(q, se, Je.browser), q[k] = kn(q[R]), ae && Y && Y.brave && typeof Y.brave.isBrave == S && (q[O] = "Brave"), q;
      }, this.getCPU = function() {
        var q = {};
        return q[V] = u, He.call(q, se, Je.cpu), q;
      }, this.getDevice = function() {
        var q = {};
        return q[y] = u, q[x] = u, q[b] = u, He.call(q, se, Je.device), ae && !q[b] && vn && vn.mobile && (q[b] = P), ae && q[x] == "Macintosh" && Y && typeof Y.standalone !== M && Y.maxTouchPoints && Y.maxTouchPoints > 2 && (q[x] = "iPad", q[b] = A), q;
      }, this.getEngine = function() {
        var q = {};
        return q[O] = u, q[R] = u, He.call(q, se, Je.engine), q;
      }, this.getOS = function() {
        var q = {};
        return q[O] = u, q[R] = u, He.call(q, se, Je.os), ae && !q[O] && vn && vn.platform != "Unknown" && (q[O] = vn.platform.replace(/chrome os/i, Fn).replace(/macos/i, Wr)), q;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return se;
      }, this.setUA = function(q) {
        return se = typeof q === N && q.length > Ke ? ut(q, Ke) : q, this;
      }, this.setUA(se), this;
    };
    Me.VERSION = l, Me.BROWSER = U([O, R, k]), Me.CPU = U([V]), Me.DEVICE = U([x, y, b, te, P, _, A, G, K]), Me.ENGINE = Me.OS = U([O, R]), o.exports && (i = o.exports = Me), i.UAParser = Me;
    var Tn = typeof t !== M && (t.jQuery || t.Zepto);
    if (Tn && !Tn.ua) {
      var kr = new Me();
      Tn.ua = kr.getResult(), Tn.ua.get = function() {
        return kr.getUA();
      }, Tn.ua.set = function(J) {
        kr.setUA(J);
        var ue = kr.getResult();
        for (var Y in ue)
          Tn.ua[Y] = ue[Y];
      };
    }
  })(typeof window == "object" ? window : et);
})(Ea, Ea.exports);
var uw = Ea.exports;
Object.defineProperty(F, "__esModule", { value: !0 });
function fw(o) {
  return o && typeof o == "object" && "default" in o ? o.default : o;
}
var $e = Pt, be = fw($e), gc = uw, mr = new gc(), Ve = mr.getBrowser(), cw = mr.getCPU(), gn = mr.getDevice(), $a = mr.getEngine(), wr = mr.getOS(), Lt = mr.getUA(), vc = function(i) {
  return mr.setUA(i);
}, Dt = function(i) {
  if (!i) {
    console.error("No userAgent string was provided");
    return;
  }
  var t = new gc(i);
  return {
    UA: t,
    browser: t.getBrowser(),
    cpu: t.getCPU(),
    device: t.getDevice(),
    engine: t.getEngine(),
    os: t.getOS(),
    ua: t.getUA(),
    setUserAgent: function(l) {
      return t.setUA(l);
    }
  };
}, mc = /* @__PURE__ */ Object.freeze({
  ClientUAInstance: mr,
  browser: Ve,
  cpu: cw,
  device: gn,
  engine: $a,
  os: wr,
  ua: Lt,
  setUa: vc,
  parseUserAgent: Dt
});
function Df(o, i) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(o);
    i && (u = u.filter(function(l) {
      return Object.getOwnPropertyDescriptor(o, l).enumerable;
    })), t.push.apply(t, u);
  }
  return t;
}
function lw(o) {
  for (var i = 1; i < arguments.length; i++) {
    var t = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Df(Object(t), !0).forEach(function(u) {
      pw(o, u, t[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : Df(Object(t)).forEach(function(u) {
      Object.defineProperty(o, u, Object.getOwnPropertyDescriptor(t, u));
    });
  }
  return o;
}
function Ct(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ct = function(i) {
    return typeof i;
  } : Ct = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Ct(o);
}
function dw(o, i) {
  if (!(o instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function Wf(o, i) {
  for (var t = 0; t < i.length; t++) {
    var u = i[t];
    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(o, u.key, u);
  }
}
function hw(o, i, t) {
  return i && Wf(o.prototype, i), t && Wf(o, t), o;
}
function pw(o, i, t) {
  return i in o ? Object.defineProperty(o, i, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[i] = t, o;
}
function Sa() {
  return Sa = Object.assign || function(o) {
    for (var i = 1; i < arguments.length; i++) {
      var t = arguments[i];
      for (var u in t)
        Object.prototype.hasOwnProperty.call(t, u) && (o[u] = t[u]);
    }
    return o;
  }, Sa.apply(this, arguments);
}
function gw(o, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Super expression must either be null or a function");
  o.prototype = Object.create(i && i.prototype, {
    constructor: {
      value: o,
      writable: !0,
      configurable: !0
    }
  }), i && Ca(o, i);
}
function Aa(o) {
  return Aa = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Aa(o);
}
function Ca(o, i) {
  return Ca = Object.setPrototypeOf || function(u, l) {
    return u.__proto__ = l, u;
  }, Ca(o, i);
}
function vw(o, i) {
  if (o == null)
    return {};
  var t = {}, u = Object.keys(o), l, p;
  for (p = 0; p < u.length; p++)
    l = u[p], !(i.indexOf(l) >= 0) && (t[l] = o[l]);
  return t;
}
function An(o, i) {
  if (o == null)
    return {};
  var t = vw(o, i), u, l;
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(o);
    for (l = 0; l < p.length; l++)
      u = p[l], !(i.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(o, u) && (t[u] = o[u]);
  }
  return t;
}
function Pi(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function mw(o, i) {
  if (i && (typeof i == "object" || typeof i == "function"))
    return i;
  if (i !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pi(o);
}
function ww(o, i) {
  return bw(o) || _w(o, i) || yw(o, i) || xw();
}
function bw(o) {
  if (Array.isArray(o))
    return o;
}
function _w(o, i) {
  var t = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (t != null) {
    var u = [], l = !0, p = !1, m, S;
    try {
      for (t = t.call(o); !(l = (m = t.next()).done) && (u.push(m.value), !(i && u.length === i)); l = !0)
        ;
    } catch (M) {
      p = !0, S = M;
    } finally {
      try {
        !l && t.return != null && t.return();
      } finally {
        if (p)
          throw S;
      }
    }
    return u;
  }
}
function yw(o, i) {
  if (o) {
    if (typeof o == "string")
      return Ff(o, i);
    var t = Object.prototype.toString.call(o).slice(8, -1);
    if (t === "Object" && o.constructor && (t = o.constructor.name), t === "Map" || t === "Set")
      return Array.from(o);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ff(o, i);
  }
}
function Ff(o, i) {
  (i == null || i > o.length) && (i = o.length);
  for (var t = 0, u = new Array(i); t < i; t++)
    u[t] = o[t];
  return u;
}
function xw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ue = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
}, an = {
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: "IE",
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: "Samsung Browser"
}, at = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
}, Ew = {
  isMobile: !1,
  isTablet: !1,
  isBrowser: !1,
  isSmartTV: !1,
  isConsole: !1,
  isWearable: !1
}, Sw = function(i) {
  switch (i) {
    case Ue.Mobile:
      return {
        isMobile: !0
      };
    case Ue.Tablet:
      return {
        isTablet: !0
      };
    case Ue.SmartTv:
      return {
        isSmartTV: !0
      };
    case Ue.Console:
      return {
        isConsole: !0
      };
    case Ue.Wearable:
      return {
        isWearable: !0
      };
    case Ue.Browser:
      return {
        isBrowser: !0
      };
    case Ue.Embedded:
      return {
        isEmbedded: !0
      };
    default:
      return Ew;
  }
}, Aw = function(i) {
  return vc(i);
}, Z = function(i) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return i || t;
}, Va = function() {
  return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
}, za = function(i) {
  var t = Va();
  return t && t.platform && (t.platform.indexOf(i) !== -1 || t.platform === "MacIntel" && t.maxTouchPoints > 1 && !window.MSStream);
}, Cw = function(i, t, u, l, p) {
  return {
    isBrowser: i,
    browserMajorVersion: Z(t.major),
    browserFullVersion: Z(t.version),
    browserName: Z(t.name),
    engineName: Z(u.name),
    engineVersion: Z(u.version),
    osName: Z(l.name),
    osVersion: Z(l.version),
    userAgent: Z(p)
  };
}, kf = function(i, t, u, l) {
  return lw({}, i, {
    vendor: Z(t.vendor),
    model: Z(t.model),
    os: Z(u.name),
    osVersion: Z(u.version),
    ua: Z(l)
  });
}, Tw = function(i, t, u, l) {
  return {
    isSmartTV: i,
    engineName: Z(t.name),
    engineVersion: Z(t.version),
    osName: Z(u.name),
    osVersion: Z(u.version),
    userAgent: Z(l)
  };
}, Ow = function(i, t, u, l) {
  return {
    isConsole: i,
    engineName: Z(t.name),
    engineVersion: Z(t.version),
    osName: Z(u.name),
    osVersion: Z(u.version),
    userAgent: Z(l)
  };
}, Iw = function(i, t, u, l) {
  return {
    isWearable: i,
    engineName: Z(t.name),
    engineVersion: Z(t.version),
    osName: Z(u.name),
    osVersion: Z(u.version),
    userAgent: Z(l)
  };
}, Rw = function(i, t, u, l, p) {
  return {
    isEmbedded: i,
    vendor: Z(t.vendor),
    model: Z(t.model),
    engineName: Z(u.name),
    engineVersion: Z(u.version),
    osName: Z(l.name),
    osVersion: Z(l.version),
    userAgent: Z(p)
  };
};
function Mw(o) {
  var i = o ? Dt(o) : mc, t = i.device, u = i.browser, l = i.engine, p = i.os, m = i.ua, S = Sw(t.type), M = S.isBrowser, D = S.isMobile, N = S.isTablet, k = S.isSmartTV, x = S.isConsole, O = S.isWearable, b = S.isEmbedded;
  if (M)
    return Cw(M, u, l, p, m);
  if (k)
    return Tw(k, l, p, m);
  if (x)
    return Ow(x, l, p, m);
  if (D || N)
    return kf(S, t, p, m);
  if (O)
    return Iw(O, l, p, m);
  if (b)
    return Rw(b, t, l, p, m);
}
var wc = function(i) {
  var t = i.type;
  return t === Ue.Mobile;
}, bc = function(i) {
  var t = i.type;
  return t === Ue.Tablet;
}, _c = function(i) {
  var t = i.type;
  return t === Ue.Mobile || t === Ue.Tablet;
}, yc = function(i) {
  var t = i.type;
  return t === Ue.SmartTv;
}, Ui = function(i) {
  var t = i.type;
  return t === Ue.Browser;
}, xc = function(i) {
  var t = i.type;
  return t === Ue.Wearable;
}, Ec = function(i) {
  var t = i.type;
  return t === Ue.Console;
}, Sc = function(i) {
  var t = i.type;
  return t === Ue.Embedded;
}, Ac = function(i) {
  var t = i.vendor;
  return Z(t);
}, Cc = function(i) {
  var t = i.model;
  return Z(t);
}, Tc = function(i) {
  var t = i.type;
  return Z(t, "browser");
}, Oc = function(i) {
  var t = i.name;
  return t === at.Android;
}, Ic = function(i) {
  var t = i.name;
  return t === at.Windows;
}, Rc = function(i) {
  var t = i.name;
  return t === at.MAC_OS;
}, Mc = function(i) {
  var t = i.name;
  return t === at.WindowsPhone;
}, Pc = function(i) {
  var t = i.name;
  return t === at.IOS;
}, Nc = function(i) {
  var t = i.version;
  return Z(t);
}, Lc = function(i) {
  var t = i.name;
  return Z(t);
}, Dc = function(i) {
  var t = i.name;
  return t === an.Chrome;
}, Wc = function(i) {
  var t = i.name;
  return t === an.Firefox;
}, Fc = function(i) {
  var t = i.name;
  return t === an.Chromium;
}, Bi = function(i) {
  var t = i.name;
  return t === an.Edge;
}, kc = function(i) {
  var t = i.name;
  return t === an.Yandex;
}, Uc = function(i) {
  var t = i.name;
  return t === an.Safari || t === an.MobileSafari;
}, Bc = function(i) {
  var t = i.name;
  return t === an.MobileSafari;
}, $c = function(i) {
  var t = i.name;
  return t === an.Opera;
}, Vc = function(i) {
  var t = i.name;
  return t === an.InternetExplorer || t === an.Ie;
}, zc = function(i) {
  var t = i.name;
  return t === an.MIUI;
}, Hc = function(i) {
  var t = i.name;
  return t === an.SamsungBrowser;
}, Gc = function(i) {
  var t = i.version;
  return Z(t);
}, qc = function(i) {
  var t = i.major;
  return Z(t);
}, Yc = function(i) {
  var t = i.name;
  return Z(t);
}, Kc = function(i) {
  var t = i.name;
  return Z(t);
}, Zc = function(i) {
  var t = i.version;
  return Z(t);
}, jc = function() {
  var i = Va(), t = i && i.userAgent && i.userAgent.toLowerCase();
  return typeof t == "string" ? /electron/.test(t) : !1;
}, tt = function(i) {
  return typeof i == "string" && i.indexOf("Edg/") !== -1;
}, Xc = function() {
  var i = Va();
  return i && (/iPad|iPhone|iPod/.test(i.platform) || i.platform === "MacIntel" && i.maxTouchPoints > 1) && !window.MSStream;
}, zn = function() {
  return za("iPad");
}, Jc = function() {
  return za("iPhone");
}, Qc = function() {
  return za("iPod");
}, el = function(i) {
  return Z(i);
};
function nl(o) {
  var i = o || mc, t = i.device, u = i.browser, l = i.os, p = i.engine, m = i.ua;
  return {
    isSmartTV: yc(t),
    isConsole: Ec(t),
    isWearable: xc(t),
    isEmbedded: Sc(t),
    isMobileSafari: Bc(u) || zn(),
    isChromium: Fc(u),
    isMobile: _c(t) || zn(),
    isMobileOnly: wc(t),
    isTablet: bc(t) || zn(),
    isBrowser: Ui(t),
    isDesktop: Ui(t),
    isAndroid: Oc(l),
    isWinPhone: Mc(l),
    isIOS: Pc(l) || zn(),
    isChrome: Dc(u),
    isFirefox: Wc(u),
    isSafari: Uc(u),
    isOpera: $c(u),
    isIE: Vc(u),
    osVersion: Nc(l),
    osName: Lc(l),
    fullBrowserVersion: Gc(u),
    browserVersion: qc(u),
    browserName: Yc(u),
    mobileVendor: Ac(t),
    mobileModel: Cc(t),
    engineName: Kc(p),
    engineVersion: Zc(p),
    getUA: el(m),
    isEdge: Bi(u) || tt(m),
    isYandex: kc(u),
    deviceType: Tc(t),
    isIOS13: Xc(),
    isIPad13: zn(),
    isIPhone13: Jc(),
    isIPod13: Qc(),
    isElectron: jc(),
    isEdgeChromium: tt(m),
    isLegacyEdge: Bi(u) && !tt(m),
    isWindows: Ic(l),
    isMacOs: Rc(l),
    isMIUI: zc(u),
    isSamsungBrowser: Hc(u)
  };
}
var rl = yc(gn), tl = Ec(gn), il = xc(gn), Pw = Sc(gn), Nw = Bc(Ve) || zn(), Lw = Fc(Ve), Zi = _c(gn) || zn(), ol = wc(gn), al = bc(gn) || zn(), sl = Ui(gn), Dw = Ui(gn), ul = Oc(wr), fl = Mc(wr), cl = Pc(wr) || zn(), Ww = Dc(Ve), Fw = Wc(Ve), kw = Uc(Ve), Uw = $c(Ve), ll = Vc(Ve), Bw = Nc(wr), $w = Lc(wr), Vw = Gc(Ve), zw = qc(Ve), Hw = Yc(Ve), Gw = Ac(gn), qw = Cc(gn), Yw = Kc($a), Kw = Zc($a), Zw = el(Lt), jw = Bi(Ve) || tt(Lt), Xw = kc(Ve), Jw = Tc(gn), Qw = Xc(), eb = zn(), nb = Jc(), rb = Qc(), tb = jc(), ib = tt(Lt), ob = Bi(Ve) && !tt(Lt), ab = Ic(wr), sb = Rc(wr), ub = zc(Ve), fb = Hc(Ve), cb = function(i) {
  if (!i || typeof i != "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var t = Dt(i), u = t.device, l = t.browser, p = t.os, m = t.engine, S = t.ua;
  return nl({
    device: u,
    browser: l,
    os: p,
    engine: m,
    ua: S
  });
}, lb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return ul ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, db = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return sl ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, hb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return ll ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, pb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return cl ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, gb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return Zi ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, vb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return al ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, mb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return fl ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, wb = function(i) {
  var t = i.renderWithFragment, u = i.children;
  i.viewClassName, i.style;
  var l = An(i, ["renderWithFragment", "children", "viewClassName", "style"]);
  return ol ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, bb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return rl ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, _b = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return tl ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, yb = function(i) {
  var t = i.renderWithFragment, u = i.children, l = An(i, ["renderWithFragment", "children"]);
  return il ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", l, u) : null;
}, xb = function(i) {
  var t = i.renderWithFragment, u = i.children;
  i.viewClassName, i.style;
  var l = i.condition, p = An(i, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return l ? t ? be.createElement($e.Fragment, null, u) : be.createElement("div", p, u) : null;
};
function Eb(o) {
  return /* @__PURE__ */ function(i) {
    gw(t, i);
    function t(u) {
      var l;
      return dw(this, t), l = mw(this, Aa(t).call(this, u)), l.isEventListenerAdded = !1, l.handleOrientationChange = l.handleOrientationChange.bind(Pi(l)), l.onOrientationChange = l.onOrientationChange.bind(Pi(l)), l.onPageLoad = l.onPageLoad.bind(Pi(l)), l.state = {
        isLandscape: !1,
        isPortrait: !1
      }, l;
    }
    return hw(t, [{
      key: "handleOrientationChange",
      value: function() {
        this.isEventListenerAdded || (this.isEventListenerAdded = !0);
        var l = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: l === 0,
          isLandscape: l === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function() {
        (typeof window > "u" ? "undefined" : Ct(window)) !== void 0 && Zi && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("resize", this.onOrientationChange, !1);
      }
    }, {
      key: "render",
      value: function() {
        return be.createElement(o, Sa({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]), t;
  }(be.Component);
}
function Sb() {
  var o = $e.useState(function() {
    var p = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: p === 0,
      isLandscape: p === 90,
      orientation: p === 0 ? "portrait" : "landscape"
    };
  }), i = ww(o, 2), t = i[0], u = i[1], l = $e.useCallback(function() {
    var p = window.innerWidth > window.innerHeight ? 90 : 0, m = {
      isPortrait: p === 0,
      isLandscape: p === 90,
      orientation: p === 0 ? "portrait" : "landscape"
    };
    t.orientation !== m.orientation && u(m);
  }, [t.orientation]);
  return $e.useEffect(function() {
    return (typeof window > "u" ? "undefined" : Ct(window)) !== void 0 && Zi && (l(), window.addEventListener("load", l, !1), window.addEventListener("resize", l, !1)), function() {
      window.removeEventListener("resize", l, !1), window.removeEventListener("load", l, !1);
    };
  }, [l]), t;
}
function dl(o) {
  var i = o || window.navigator.userAgent;
  return Dt(i);
}
function Ab(o) {
  var i = o || window.navigator.userAgent, t = dl(i), u = nl(t);
  return [u, t];
}
F.AndroidView = lb;
F.BrowserTypes = an;
F.BrowserView = db;
F.ConsoleView = _b;
F.CustomView = xb;
F.IEView = hb;
F.IOSView = pb;
F.MobileOnlyView = wb;
F.MobileView = gb;
F.OsTypes = at;
F.SmartTVView = bb;
F.TabletView = vb;
F.WearableView = yb;
F.WinPhoneView = mb;
F.browserName = Hw;
F.browserVersion = zw;
F.deviceDetect = Mw;
F.deviceType = Jw;
F.engineName = Yw;
F.engineVersion = Kw;
F.fullBrowserVersion = Vw;
F.getSelectorsByUserAgent = cb;
F.getUA = Zw;
F.isAndroid = ul;
F.isBrowser = sl;
F.isChrome = Ww;
F.isChromium = Lw;
F.isConsole = tl;
F.isDesktop = Dw;
F.isEdge = jw;
F.isEdgeChromium = ib;
F.isElectron = tb;
F.isEmbedded = Pw;
F.isFirefox = Fw;
F.isIE = ll;
F.isIOS = cl;
F.isIOS13 = Qw;
F.isIPad13 = eb;
F.isIPhone13 = nb;
F.isIPod13 = rb;
F.isLegacyEdge = ob;
F.isMIUI = ub;
var Cb = F.isMacOs = sb;
F.isMobile = Zi;
F.isMobileOnly = ol;
F.isMobileSafari = Nw;
F.isOpera = Uw;
F.isSafari = kw;
F.isSamsungBrowser = fb;
F.isSmartTV = rl;
F.isTablet = al;
F.isWearable = il;
F.isWinPhone = fl;
F.isWindows = ab;
F.isYandex = Xw;
F.mobileModel = qw;
F.mobileVendor = Gw;
F.osName = $w;
F.osVersion = Bw;
F.parseUserAgent = Dt;
F.setUserAgent = Aw;
F.useDeviceData = dl;
F.useDeviceSelectors = Ab;
F.useMobileOrientation = Sb;
F.withOrientationChange = Eb;
const Ti = (o) => {
  const i = o.split(/-(?!$)/);
  let t = i[i.length - 1];
  t === "Space" && (t = " ");
  let u, l, p, m;
  for (let S = 0; S < i.length - 1; S++) {
    const M = i[S];
    if (/^(cmd|meta|m)$/i.test(M))
      m = !0;
    else if (/^a(lt)?$/i.test(M))
      u = !0;
    else if (/^(c|ctrl|control)$/i.test(M))
      l = !0;
    else if (/^s(hift)?$/i.test(M))
      p = !0;
    else if (/^mod$/i.test(M))
      Cb ? m = !0 : l = !0;
    else
      throw new Error("Unrecognized modifier name: " + M);
  }
  return u && (t = "Alt-" + t), l && (t = "Ctrl-" + t), m && (t = "Meta-" + t), p && (t = "Shift-" + t), t;
}, Uf = (o, i, t = !0) => (i.altKey && (o = "Alt-" + o), i.ctrlKey && (o = "Ctrl-" + o), i.metaKey && (o = "Meta-" + o), t && i.shiftKey && (o = "Shift-" + o), o);
var $i = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
$i.exports;
(function(o, i) {
  (function() {
    var t, u = "4.17.21", l = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", m = "Expected a function", S = "Invalid `variable` option passed into `_.template`", M = "__lodash_hash_undefined__", D = 500, N = "__lodash_placeholder__", k = 1, x = 2, O = 4, b = 1, y = 2, R = 1, V = 2, te = 4, P = 8, A = 16, _ = 32, G = 64, K = 128, Ke = 256, Nn = 512, Gn = 30, Nr = "...", Lr = 800, Ln = 16, qn = 1, st = 2, tr = 3, Ze = 1 / 0, je = 9007199254740991, br = 17976931348623157e292, Cn = 0 / 0, ze = 4294967295, ir = ze - 1, _r = ze >>> 1, Dr = [
      ["ary", K],
      ["bind", R],
      ["bindKey", V],
      ["curry", P],
      ["curryRight", A],
      ["flip", Nn],
      ["partial", _],
      ["partialRight", G],
      ["rearg", Ke]
    ], sn = "[object Arguments]", Dn = "[object Array]", yr = "[object AsyncFunction]", Wn = "[object Boolean]", Fn = "[object Date]", Wr = "[object DOMException]", or = "[object Error]", U = "[object Function]", Yn = "[object GeneratorFunction]", Ee = "[object Map]", kn = "[object Number]", ut = "[object Null]", He = "[object Object]", Fr = "[object Promise]", ji = "[object Proxy]", ar = "[object RegExp]", Xe = "[object Set]", Me = "[object String]", Tn = "[object Symbol]", kr = "[object Undefined]", J = "[object WeakMap]", ue = "[object WeakSet]", Y = "[object ArrayBuffer]", se = "[object DataView]", vn = "[object Float32Array]", Je = "[object Float64Array]", ae = "[object Int8Array]", q = "[object Int16Array]", Qe = "[object Int32Array]", xr = "[object Uint8Array]", Ur = "[object Uint8ClampedArray]", Xi = "[object Uint16Array]", Ji = "[object Uint32Array]", vl = /\b__p \+= '';/g, ml = /\b(__p \+=) '' \+/g, wl = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ga = /&(?:amp|lt|gt|quot|#39);/g, qa = /[&<>"']/g, bl = RegExp(Ga.source), _l = RegExp(qa.source), yl = /<%-([\s\S]+?)%>/g, xl = /<%([\s\S]+?)%>/g, Ya = /<%=([\s\S]+?)%>/g, El = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sl = /^\w*$/, Al = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qi = /[\\^$.*+?()[\]{}|]/g, Cl = RegExp(Qi.source), eo = /^\s+/, Tl = /\s/, Ol = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Il = /\{\n\/\* \[wrapped with (.+)\] \*/, Rl = /,? & /, Ml = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Pl = /[()=,{}\[\]\/\s]/, Nl = /\\(\\)?/g, Ll = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ka = /\w*$/, Dl = /^[-+]0x[0-9a-f]+$/i, Wl = /^0b[01]+$/i, Fl = /^\[object .+?Constructor\]$/, kl = /^0o[0-7]+$/i, Ul = /^(?:0|[1-9]\d*)$/, Bl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Wt = /($^)/, $l = /['\n\r\u2028\u2029\\]/g, Ft = "\\ud800-\\udfff", Vl = "\\u0300-\\u036f", zl = "\\ufe20-\\ufe2f", Hl = "\\u20d0-\\u20ff", Za = Vl + zl + Hl, ja = "\\u2700-\\u27bf", Xa = "a-z\\xdf-\\xf6\\xf8-\\xff", Gl = "\\xac\\xb1\\xd7\\xf7", ql = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Yl = "\\u2000-\\u206f", Kl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ja = "A-Z\\xc0-\\xd6\\xd8-\\xde", Qa = "\\ufe0e\\ufe0f", es = Gl + ql + Yl + Kl, no = "['’]", Zl = "[" + Ft + "]", ns = "[" + es + "]", kt = "[" + Za + "]", rs = "\\d+", jl = "[" + ja + "]", ts = "[" + Xa + "]", is = "[^" + Ft + es + rs + ja + Xa + Ja + "]", ro = "\\ud83c[\\udffb-\\udfff]", Xl = "(?:" + kt + "|" + ro + ")", os = "[^" + Ft + "]", to = "(?:\\ud83c[\\udde6-\\uddff]){2}", io = "[\\ud800-\\udbff][\\udc00-\\udfff]", Br = "[" + Ja + "]", as = "\\u200d", ss = "(?:" + ts + "|" + is + ")", Jl = "(?:" + Br + "|" + is + ")", us = "(?:" + no + "(?:d|ll|m|re|s|t|ve))?", fs = "(?:" + no + "(?:D|LL|M|RE|S|T|VE))?", cs = Xl + "?", ls = "[" + Qa + "]?", Ql = "(?:" + as + "(?:" + [os, to, io].join("|") + ")" + ls + cs + ")*", ed = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", nd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ds = ls + cs + Ql, rd = "(?:" + [jl, to, io].join("|") + ")" + ds, td = "(?:" + [os + kt + "?", kt, to, io, Zl].join("|") + ")", id = RegExp(no, "g"), od = RegExp(kt, "g"), oo = RegExp(ro + "(?=" + ro + ")|" + td + ds, "g"), ad = RegExp([
      Br + "?" + ts + "+" + us + "(?=" + [ns, Br, "$"].join("|") + ")",
      Jl + "+" + fs + "(?=" + [ns, Br + ss, "$"].join("|") + ")",
      Br + "?" + ss + "+" + us,
      Br + "+" + fs,
      nd,
      ed,
      rs,
      rd
    ].join("|"), "g"), sd = RegExp("[" + as + Ft + Za + Qa + "]"), ud = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, fd = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], cd = -1, _e = {};
    _e[vn] = _e[Je] = _e[ae] = _e[q] = _e[Qe] = _e[xr] = _e[Ur] = _e[Xi] = _e[Ji] = !0, _e[sn] = _e[Dn] = _e[Y] = _e[Wn] = _e[se] = _e[Fn] = _e[or] = _e[U] = _e[Ee] = _e[kn] = _e[He] = _e[ar] = _e[Xe] = _e[Me] = _e[J] = !1;
    var we = {};
    we[sn] = we[Dn] = we[Y] = we[se] = we[Wn] = we[Fn] = we[vn] = we[Je] = we[ae] = we[q] = we[Qe] = we[Ee] = we[kn] = we[He] = we[ar] = we[Xe] = we[Me] = we[Tn] = we[xr] = we[Ur] = we[Xi] = we[Ji] = !0, we[or] = we[U] = we[J] = !1;
    var ld = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, dd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, hd = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, pd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, gd = parseFloat, vd = parseInt, hs = typeof et == "object" && et && et.Object === Object && et, md = typeof self == "object" && self && self.Object === Object && self, Pe = hs || md || Function("return this")(), ao = i && !i.nodeType && i, Er = ao && !0 && o && !o.nodeType && o, ps = Er && Er.exports === ao, so = ps && hs.process, mn = function() {
      try {
        var g = Er && Er.require && Er.require("util").types;
        return g || so && so.binding && so.binding("util");
      } catch {
      }
    }(), gs = mn && mn.isArrayBuffer, vs = mn && mn.isDate, ms = mn && mn.isMap, ws = mn && mn.isRegExp, bs = mn && mn.isSet, _s = mn && mn.isTypedArray;
    function un(g, E, w) {
      switch (w.length) {
        case 0:
          return g.call(E);
        case 1:
          return g.call(E, w[0]);
        case 2:
          return g.call(E, w[0], w[1]);
        case 3:
          return g.call(E, w[0], w[1], w[2]);
      }
      return g.apply(E, w);
    }
    function wd(g, E, w, W) {
      for (var j = -1, fe = g == null ? 0 : g.length; ++j < fe; ) {
        var Oe = g[j];
        E(W, Oe, w(Oe), g);
      }
      return W;
    }
    function wn(g, E) {
      for (var w = -1, W = g == null ? 0 : g.length; ++w < W && E(g[w], w, g) !== !1; )
        ;
      return g;
    }
    function bd(g, E) {
      for (var w = g == null ? 0 : g.length; w-- && E(g[w], w, g) !== !1; )
        ;
      return g;
    }
    function ys(g, E) {
      for (var w = -1, W = g == null ? 0 : g.length; ++w < W; )
        if (!E(g[w], w, g))
          return !1;
      return !0;
    }
    function sr(g, E) {
      for (var w = -1, W = g == null ? 0 : g.length, j = 0, fe = []; ++w < W; ) {
        var Oe = g[w];
        E(Oe, w, g) && (fe[j++] = Oe);
      }
      return fe;
    }
    function Ut(g, E) {
      var w = g == null ? 0 : g.length;
      return !!w && $r(g, E, 0) > -1;
    }
    function uo(g, E, w) {
      for (var W = -1, j = g == null ? 0 : g.length; ++W < j; )
        if (w(E, g[W]))
          return !0;
      return !1;
    }
    function ye(g, E) {
      for (var w = -1, W = g == null ? 0 : g.length, j = Array(W); ++w < W; )
        j[w] = E(g[w], w, g);
      return j;
    }
    function ur(g, E) {
      for (var w = -1, W = E.length, j = g.length; ++w < W; )
        g[j + w] = E[w];
      return g;
    }
    function fo(g, E, w, W) {
      var j = -1, fe = g == null ? 0 : g.length;
      for (W && fe && (w = g[++j]); ++j < fe; )
        w = E(w, g[j], j, g);
      return w;
    }
    function _d(g, E, w, W) {
      var j = g == null ? 0 : g.length;
      for (W && j && (w = g[--j]); j--; )
        w = E(w, g[j], j, g);
      return w;
    }
    function co(g, E) {
      for (var w = -1, W = g == null ? 0 : g.length; ++w < W; )
        if (E(g[w], w, g))
          return !0;
      return !1;
    }
    var yd = lo("length");
    function xd(g) {
      return g.split("");
    }
    function Ed(g) {
      return g.match(Ml) || [];
    }
    function xs(g, E, w) {
      var W;
      return w(g, function(j, fe, Oe) {
        if (E(j, fe, Oe))
          return W = fe, !1;
      }), W;
    }
    function Bt(g, E, w, W) {
      for (var j = g.length, fe = w + (W ? 1 : -1); W ? fe-- : ++fe < j; )
        if (E(g[fe], fe, g))
          return fe;
      return -1;
    }
    function $r(g, E, w) {
      return E === E ? Dd(g, E, w) : Bt(g, Es, w);
    }
    function Sd(g, E, w, W) {
      for (var j = w - 1, fe = g.length; ++j < fe; )
        if (W(g[j], E))
          return j;
      return -1;
    }
    function Es(g) {
      return g !== g;
    }
    function Ss(g, E) {
      var w = g == null ? 0 : g.length;
      return w ? po(g, E) / w : Cn;
    }
    function lo(g) {
      return function(E) {
        return E == null ? t : E[g];
      };
    }
    function ho(g) {
      return function(E) {
        return g == null ? t : g[E];
      };
    }
    function As(g, E, w, W, j) {
      return j(g, function(fe, Oe, ve) {
        w = W ? (W = !1, fe) : E(w, fe, Oe, ve);
      }), w;
    }
    function Ad(g, E) {
      var w = g.length;
      for (g.sort(E); w--; )
        g[w] = g[w].value;
      return g;
    }
    function po(g, E) {
      for (var w, W = -1, j = g.length; ++W < j; ) {
        var fe = E(g[W]);
        fe !== t && (w = w === t ? fe : w + fe);
      }
      return w;
    }
    function go(g, E) {
      for (var w = -1, W = Array(g); ++w < g; )
        W[w] = E(w);
      return W;
    }
    function Cd(g, E) {
      return ye(E, function(w) {
        return [w, g[w]];
      });
    }
    function Cs(g) {
      return g && g.slice(0, Rs(g) + 1).replace(eo, "");
    }
    function fn(g) {
      return function(E) {
        return g(E);
      };
    }
    function vo(g, E) {
      return ye(E, function(w) {
        return g[w];
      });
    }
    function ft(g, E) {
      return g.has(E);
    }
    function Ts(g, E) {
      for (var w = -1, W = g.length; ++w < W && $r(E, g[w], 0) > -1; )
        ;
      return w;
    }
    function Os(g, E) {
      for (var w = g.length; w-- && $r(E, g[w], 0) > -1; )
        ;
      return w;
    }
    function Td(g, E) {
      for (var w = g.length, W = 0; w--; )
        g[w] === E && ++W;
      return W;
    }
    var Od = ho(ld), Id = ho(dd);
    function Rd(g) {
      return "\\" + pd[g];
    }
    function Md(g, E) {
      return g == null ? t : g[E];
    }
    function Vr(g) {
      return sd.test(g);
    }
    function Pd(g) {
      return ud.test(g);
    }
    function Nd(g) {
      for (var E, w = []; !(E = g.next()).done; )
        w.push(E.value);
      return w;
    }
    function mo(g) {
      var E = -1, w = Array(g.size);
      return g.forEach(function(W, j) {
        w[++E] = [j, W];
      }), w;
    }
    function Is(g, E) {
      return function(w) {
        return g(E(w));
      };
    }
    function fr(g, E) {
      for (var w = -1, W = g.length, j = 0, fe = []; ++w < W; ) {
        var Oe = g[w];
        (Oe === E || Oe === N) && (g[w] = N, fe[j++] = w);
      }
      return fe;
    }
    function $t(g) {
      var E = -1, w = Array(g.size);
      return g.forEach(function(W) {
        w[++E] = W;
      }), w;
    }
    function Ld(g) {
      var E = -1, w = Array(g.size);
      return g.forEach(function(W) {
        w[++E] = [W, W];
      }), w;
    }
    function Dd(g, E, w) {
      for (var W = w - 1, j = g.length; ++W < j; )
        if (g[W] === E)
          return W;
      return -1;
    }
    function Wd(g, E, w) {
      for (var W = w + 1; W--; )
        if (g[W] === E)
          return W;
      return W;
    }
    function zr(g) {
      return Vr(g) ? kd(g) : yd(g);
    }
    function On(g) {
      return Vr(g) ? Ud(g) : xd(g);
    }
    function Rs(g) {
      for (var E = g.length; E-- && Tl.test(g.charAt(E)); )
        ;
      return E;
    }
    var Fd = ho(hd);
    function kd(g) {
      for (var E = oo.lastIndex = 0; oo.test(g); )
        ++E;
      return E;
    }
    function Ud(g) {
      return g.match(oo) || [];
    }
    function Bd(g) {
      return g.match(ad) || [];
    }
    var $d = function g(E) {
      E = E == null ? Pe : Hr.defaults(Pe.Object(), E, Hr.pick(Pe, fd));
      var w = E.Array, W = E.Date, j = E.Error, fe = E.Function, Oe = E.Math, ve = E.Object, wo = E.RegExp, Vd = E.String, bn = E.TypeError, Vt = w.prototype, zd = fe.prototype, Gr = ve.prototype, zt = E["__core-js_shared__"], Ht = zd.toString, ge = Gr.hasOwnProperty, Hd = 0, Ms = function() {
        var e = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Gt = Gr.toString, Gd = Ht.call(ve), qd = Pe._, Yd = wo(
        "^" + Ht.call(ge).replace(Qi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), qt = ps ? E.Buffer : t, cr = E.Symbol, Yt = E.Uint8Array, Ps = qt ? qt.allocUnsafe : t, Kt = Is(ve.getPrototypeOf, ve), Ns = ve.create, Ls = Gr.propertyIsEnumerable, Zt = Vt.splice, Ds = cr ? cr.isConcatSpreadable : t, ct = cr ? cr.iterator : t, Sr = cr ? cr.toStringTag : t, jt = function() {
        try {
          var e = Ir(ve, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Kd = E.clearTimeout !== Pe.clearTimeout && E.clearTimeout, Zd = W && W.now !== Pe.Date.now && W.now, jd = E.setTimeout !== Pe.setTimeout && E.setTimeout, Xt = Oe.ceil, Jt = Oe.floor, bo = ve.getOwnPropertySymbols, Xd = qt ? qt.isBuffer : t, Ws = E.isFinite, Jd = Vt.join, Qd = Is(ve.keys, ve), Ie = Oe.max, We = Oe.min, eh = W.now, nh = E.parseInt, Fs = Oe.random, rh = Vt.reverse, _o = Ir(E, "DataView"), lt = Ir(E, "Map"), yo = Ir(E, "Promise"), qr = Ir(E, "Set"), dt = Ir(E, "WeakMap"), ht = Ir(ve, "create"), Qt = dt && new dt(), Yr = {}, th = Rr(_o), ih = Rr(lt), oh = Rr(yo), ah = Rr(qr), sh = Rr(dt), ei = cr ? cr.prototype : t, pt = ei ? ei.valueOf : t, ks = ei ? ei.toString : t;
      function f(e) {
        if (Se(e) && !X(e) && !(e instanceof ie)) {
          if (e instanceof _n)
            return e;
          if (ge.call(e, "__wrapped__"))
            return Uu(e);
        }
        return new _n(e);
      }
      var Kr = function() {
        function e() {
        }
        return function(n) {
          if (!xe(n))
            return {};
          if (Ns)
            return Ns(n);
          e.prototype = n;
          var r = new e();
          return e.prototype = t, r;
        };
      }();
      function ni() {
      }
      function _n(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = t;
      }
      f.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: yl,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: xl,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ya,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: f
        }
      }, f.prototype = ni.prototype, f.prototype.constructor = f, _n.prototype = Kr(ni.prototype), _n.prototype.constructor = _n;
      function ie(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ze, this.__views__ = [];
      }
      function uh() {
        var e = new ie(this.__wrapped__);
        return e.__actions__ = en(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = en(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = en(this.__views__), e;
      }
      function fh() {
        if (this.__filtered__) {
          var e = new ie(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function ch() {
        var e = this.__wrapped__.value(), n = this.__dir__, r = X(e), a = n < 0, s = r ? e.length : 0, c = xp(0, s, this.__views__), d = c.start, h = c.end, v = h - d, C = a ? h : d - 1, T = this.__iteratees__, I = T.length, L = 0, B = We(v, this.__takeCount__);
        if (!r || !a && s == v && B == v)
          return uu(e, this.__actions__);
        var z = [];
        e:
          for (; v-- && L < B; ) {
            C += n;
            for (var ee = -1, H = e[C]; ++ee < I; ) {
              var re = T[ee], oe = re.iteratee, dn = re.type, Ye = oe(H);
              if (dn == st)
                H = Ye;
              else if (!Ye) {
                if (dn == qn)
                  continue e;
                break e;
              }
            }
            z[L++] = H;
          }
        return z;
      }
      ie.prototype = Kr(ni.prototype), ie.prototype.constructor = ie;
      function Ar(e) {
        var n = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++n < r; ) {
          var a = e[n];
          this.set(a[0], a[1]);
        }
      }
      function lh() {
        this.__data__ = ht ? ht(null) : {}, this.size = 0;
      }
      function dh(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function hh(e) {
        var n = this.__data__;
        if (ht) {
          var r = n[e];
          return r === M ? t : r;
        }
        return ge.call(n, e) ? n[e] : t;
      }
      function ph(e) {
        var n = this.__data__;
        return ht ? n[e] !== t : ge.call(n, e);
      }
      function gh(e, n) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = ht && n === t ? M : n, this;
      }
      Ar.prototype.clear = lh, Ar.prototype.delete = dh, Ar.prototype.get = hh, Ar.prototype.has = ph, Ar.prototype.set = gh;
      function Kn(e) {
        var n = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++n < r; ) {
          var a = e[n];
          this.set(a[0], a[1]);
        }
      }
      function vh() {
        this.__data__ = [], this.size = 0;
      }
      function mh(e) {
        var n = this.__data__, r = ri(n, e);
        if (r < 0)
          return !1;
        var a = n.length - 1;
        return r == a ? n.pop() : Zt.call(n, r, 1), --this.size, !0;
      }
      function wh(e) {
        var n = this.__data__, r = ri(n, e);
        return r < 0 ? t : n[r][1];
      }
      function bh(e) {
        return ri(this.__data__, e) > -1;
      }
      function _h(e, n) {
        var r = this.__data__, a = ri(r, e);
        return a < 0 ? (++this.size, r.push([e, n])) : r[a][1] = n, this;
      }
      Kn.prototype.clear = vh, Kn.prototype.delete = mh, Kn.prototype.get = wh, Kn.prototype.has = bh, Kn.prototype.set = _h;
      function Zn(e) {
        var n = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++n < r; ) {
          var a = e[n];
          this.set(a[0], a[1]);
        }
      }
      function yh() {
        this.size = 0, this.__data__ = {
          hash: new Ar(),
          map: new (lt || Kn)(),
          string: new Ar()
        };
      }
      function xh(e) {
        var n = pi(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Eh(e) {
        return pi(this, e).get(e);
      }
      function Sh(e) {
        return pi(this, e).has(e);
      }
      function Ah(e, n) {
        var r = pi(this, e), a = r.size;
        return r.set(e, n), this.size += r.size == a ? 0 : 1, this;
      }
      Zn.prototype.clear = yh, Zn.prototype.delete = xh, Zn.prototype.get = Eh, Zn.prototype.has = Sh, Zn.prototype.set = Ah;
      function Cr(e) {
        var n = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new Zn(); ++n < r; )
          this.add(e[n]);
      }
      function Ch(e) {
        return this.__data__.set(e, M), this;
      }
      function Th(e) {
        return this.__data__.has(e);
      }
      Cr.prototype.add = Cr.prototype.push = Ch, Cr.prototype.has = Th;
      function In(e) {
        var n = this.__data__ = new Kn(e);
        this.size = n.size;
      }
      function Oh() {
        this.__data__ = new Kn(), this.size = 0;
      }
      function Ih(e) {
        var n = this.__data__, r = n.delete(e);
        return this.size = n.size, r;
      }
      function Rh(e) {
        return this.__data__.get(e);
      }
      function Mh(e) {
        return this.__data__.has(e);
      }
      function Ph(e, n) {
        var r = this.__data__;
        if (r instanceof Kn) {
          var a = r.__data__;
          if (!lt || a.length < l - 1)
            return a.push([e, n]), this.size = ++r.size, this;
          r = this.__data__ = new Zn(a);
        }
        return r.set(e, n), this.size = r.size, this;
      }
      In.prototype.clear = Oh, In.prototype.delete = Ih, In.prototype.get = Rh, In.prototype.has = Mh, In.prototype.set = Ph;
      function Us(e, n) {
        var r = X(e), a = !r && Mr(e), s = !r && !a && gr(e), c = !r && !a && !s && Jr(e), d = r || a || s || c, h = d ? go(e.length, Vd) : [], v = h.length;
        for (var C in e)
          (n || ge.call(e, C)) && !(d && // Safari 9 has enumerable `arguments.length` in strict mode.
          (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          s && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          c && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
          Qn(C, v))) && h.push(C);
        return h;
      }
      function Bs(e) {
        var n = e.length;
        return n ? e[Po(0, n - 1)] : t;
      }
      function Nh(e, n) {
        return gi(en(e), Tr(n, 0, e.length));
      }
      function Lh(e) {
        return gi(en(e));
      }
      function xo(e, n, r) {
        (r !== t && !Rn(e[n], r) || r === t && !(n in e)) && jn(e, n, r);
      }
      function gt(e, n, r) {
        var a = e[n];
        (!(ge.call(e, n) && Rn(a, r)) || r === t && !(n in e)) && jn(e, n, r);
      }
      function ri(e, n) {
        for (var r = e.length; r--; )
          if (Rn(e[r][0], n))
            return r;
        return -1;
      }
      function Dh(e, n, r, a) {
        return lr(e, function(s, c, d) {
          n(a, s, r(s), d);
        }), a;
      }
      function $s(e, n) {
        return e && Bn(n, Re(n), e);
      }
      function Wh(e, n) {
        return e && Bn(n, rn(n), e);
      }
      function jn(e, n, r) {
        n == "__proto__" && jt ? jt(e, n, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : e[n] = r;
      }
      function Eo(e, n) {
        for (var r = -1, a = n.length, s = w(a), c = e == null; ++r < a; )
          s[r] = c ? t : ta(e, n[r]);
        return s;
      }
      function Tr(e, n, r) {
        return e === e && (r !== t && (e = e <= r ? e : r), n !== t && (e = e >= n ? e : n)), e;
      }
      function yn(e, n, r, a, s, c) {
        var d, h = n & k, v = n & x, C = n & O;
        if (r && (d = s ? r(e, a, s, c) : r(e)), d !== t)
          return d;
        if (!xe(e))
          return e;
        var T = X(e);
        if (T) {
          if (d = Sp(e), !h)
            return en(e, d);
        } else {
          var I = Fe(e), L = I == U || I == Yn;
          if (gr(e))
            return lu(e, h);
          if (I == He || I == sn || L && !s) {
            if (d = v || L ? {} : Ru(e), !h)
              return v ? hp(e, Wh(d, e)) : dp(e, $s(d, e));
          } else {
            if (!we[I])
              return s ? e : {};
            d = Ap(e, I, h);
          }
        }
        c || (c = new In());
        var B = c.get(e);
        if (B)
          return B;
        c.set(e, d), af(e) ? e.forEach(function(H) {
          d.add(yn(H, n, r, H, e, c));
        }) : tf(e) && e.forEach(function(H, re) {
          d.set(re, yn(H, n, r, re, e, c));
        });
        var z = C ? v ? zo : Vo : v ? rn : Re, ee = T ? t : z(e);
        return wn(ee || e, function(H, re) {
          ee && (re = H, H = e[re]), gt(d, re, yn(H, n, r, re, e, c));
        }), d;
      }
      function Fh(e) {
        var n = Re(e);
        return function(r) {
          return Vs(r, e, n);
        };
      }
      function Vs(e, n, r) {
        var a = r.length;
        if (e == null)
          return !a;
        for (e = ve(e); a--; ) {
          var s = r[a], c = n[s], d = e[s];
          if (d === t && !(s in e) || !c(d))
            return !1;
        }
        return !0;
      }
      function zs(e, n, r) {
        if (typeof e != "function")
          throw new bn(m);
        return xt(function() {
          e.apply(t, r);
        }, n);
      }
      function vt(e, n, r, a) {
        var s = -1, c = Ut, d = !0, h = e.length, v = [], C = n.length;
        if (!h)
          return v;
        r && (n = ye(n, fn(r))), a ? (c = uo, d = !1) : n.length >= l && (c = ft, d = !1, n = new Cr(n));
        e:
          for (; ++s < h; ) {
            var T = e[s], I = r == null ? T : r(T);
            if (T = a || T !== 0 ? T : 0, d && I === I) {
              for (var L = C; L--; )
                if (n[L] === I)
                  continue e;
              v.push(T);
            } else
              c(n, I, a) || v.push(T);
          }
        return v;
      }
      var lr = vu(Un), Hs = vu(Ao, !0);
      function kh(e, n) {
        var r = !0;
        return lr(e, function(a, s, c) {
          return r = !!n(a, s, c), r;
        }), r;
      }
      function ti(e, n, r) {
        for (var a = -1, s = e.length; ++a < s; ) {
          var c = e[a], d = n(c);
          if (d != null && (h === t ? d === d && !ln(d) : r(d, h)))
            var h = d, v = c;
        }
        return v;
      }
      function Uh(e, n, r, a) {
        var s = e.length;
        for (r = Q(r), r < 0 && (r = -r > s ? 0 : s + r), a = a === t || a > s ? s : Q(a), a < 0 && (a += s), a = r > a ? 0 : uf(a); r < a; )
          e[r++] = n;
        return e;
      }
      function Gs(e, n) {
        var r = [];
        return lr(e, function(a, s, c) {
          n(a, s, c) && r.push(a);
        }), r;
      }
      function Ne(e, n, r, a, s) {
        var c = -1, d = e.length;
        for (r || (r = Tp), s || (s = []); ++c < d; ) {
          var h = e[c];
          n > 0 && r(h) ? n > 1 ? Ne(h, n - 1, r, a, s) : ur(s, h) : a || (s[s.length] = h);
        }
        return s;
      }
      var So = mu(), qs = mu(!0);
      function Un(e, n) {
        return e && So(e, n, Re);
      }
      function Ao(e, n) {
        return e && qs(e, n, Re);
      }
      function ii(e, n) {
        return sr(n, function(r) {
          return er(e[r]);
        });
      }
      function Or(e, n) {
        n = hr(n, e);
        for (var r = 0, a = n.length; e != null && r < a; )
          e = e[$n(n[r++])];
        return r && r == a ? e : t;
      }
      function Ys(e, n, r) {
        var a = n(e);
        return X(e) ? a : ur(a, r(e));
      }
      function Ge(e) {
        return e == null ? e === t ? kr : ut : Sr && Sr in ve(e) ? yp(e) : Lp(e);
      }
      function Co(e, n) {
        return e > n;
      }
      function Bh(e, n) {
        return e != null && ge.call(e, n);
      }
      function $h(e, n) {
        return e != null && n in ve(e);
      }
      function Vh(e, n, r) {
        return e >= We(n, r) && e < Ie(n, r);
      }
      function To(e, n, r) {
        for (var a = r ? uo : Ut, s = e[0].length, c = e.length, d = c, h = w(c), v = 1 / 0, C = []; d--; ) {
          var T = e[d];
          d && n && (T = ye(T, fn(n))), v = We(T.length, v), h[d] = !r && (n || s >= 120 && T.length >= 120) ? new Cr(d && T) : t;
        }
        T = e[0];
        var I = -1, L = h[0];
        e:
          for (; ++I < s && C.length < v; ) {
            var B = T[I], z = n ? n(B) : B;
            if (B = r || B !== 0 ? B : 0, !(L ? ft(L, z) : a(C, z, r))) {
              for (d = c; --d; ) {
                var ee = h[d];
                if (!(ee ? ft(ee, z) : a(e[d], z, r)))
                  continue e;
              }
              L && L.push(z), C.push(B);
            }
          }
        return C;
      }
      function zh(e, n, r, a) {
        return Un(e, function(s, c, d) {
          n(a, r(s), c, d);
        }), a;
      }
      function mt(e, n, r) {
        n = hr(n, e), e = Lu(e, n);
        var a = e == null ? e : e[$n(En(n))];
        return a == null ? t : un(a, e, r);
      }
      function Ks(e) {
        return Se(e) && Ge(e) == sn;
      }
      function Hh(e) {
        return Se(e) && Ge(e) == Y;
      }
      function Gh(e) {
        return Se(e) && Ge(e) == Fn;
      }
      function wt(e, n, r, a, s) {
        return e === n ? !0 : e == null || n == null || !Se(e) && !Se(n) ? e !== e && n !== n : qh(e, n, r, a, wt, s);
      }
      function qh(e, n, r, a, s, c) {
        var d = X(e), h = X(n), v = d ? Dn : Fe(e), C = h ? Dn : Fe(n);
        v = v == sn ? He : v, C = C == sn ? He : C;
        var T = v == He, I = C == He, L = v == C;
        if (L && gr(e)) {
          if (!gr(n))
            return !1;
          d = !0, T = !1;
        }
        if (L && !T)
          return c || (c = new In()), d || Jr(e) ? Tu(e, n, r, a, s, c) : bp(e, n, v, r, a, s, c);
        if (!(r & b)) {
          var B = T && ge.call(e, "__wrapped__"), z = I && ge.call(n, "__wrapped__");
          if (B || z) {
            var ee = B ? e.value() : e, H = z ? n.value() : n;
            return c || (c = new In()), s(ee, H, r, a, c);
          }
        }
        return L ? (c || (c = new In()), _p(e, n, r, a, s, c)) : !1;
      }
      function Yh(e) {
        return Se(e) && Fe(e) == Ee;
      }
      function Oo(e, n, r, a) {
        var s = r.length, c = s, d = !a;
        if (e == null)
          return !c;
        for (e = ve(e); s--; ) {
          var h = r[s];
          if (d && h[2] ? h[1] !== e[h[0]] : !(h[0] in e))
            return !1;
        }
        for (; ++s < c; ) {
          h = r[s];
          var v = h[0], C = e[v], T = h[1];
          if (d && h[2]) {
            if (C === t && !(v in e))
              return !1;
          } else {
            var I = new In();
            if (a)
              var L = a(C, T, v, e, n, I);
            if (!(L === t ? wt(T, C, b | y, a, I) : L))
              return !1;
          }
        }
        return !0;
      }
      function Zs(e) {
        if (!xe(e) || Ip(e))
          return !1;
        var n = er(e) ? Yd : Fl;
        return n.test(Rr(e));
      }
      function Kh(e) {
        return Se(e) && Ge(e) == ar;
      }
      function Zh(e) {
        return Se(e) && Fe(e) == Xe;
      }
      function jh(e) {
        return Se(e) && xi(e.length) && !!_e[Ge(e)];
      }
      function js(e) {
        return typeof e == "function" ? e : e == null ? tn : typeof e == "object" ? X(e) ? Qs(e[0], e[1]) : Js(e) : bf(e);
      }
      function Io(e) {
        if (!yt(e))
          return Qd(e);
        var n = [];
        for (var r in ve(e))
          ge.call(e, r) && r != "constructor" && n.push(r);
        return n;
      }
      function Xh(e) {
        if (!xe(e))
          return Np(e);
        var n = yt(e), r = [];
        for (var a in e)
          a == "constructor" && (n || !ge.call(e, a)) || r.push(a);
        return r;
      }
      function Ro(e, n) {
        return e < n;
      }
      function Xs(e, n) {
        var r = -1, a = nn(e) ? w(e.length) : [];
        return lr(e, function(s, c, d) {
          a[++r] = n(s, c, d);
        }), a;
      }
      function Js(e) {
        var n = Go(e);
        return n.length == 1 && n[0][2] ? Pu(n[0][0], n[0][1]) : function(r) {
          return r === e || Oo(r, e, n);
        };
      }
      function Qs(e, n) {
        return Yo(e) && Mu(n) ? Pu($n(e), n) : function(r) {
          var a = ta(r, e);
          return a === t && a === n ? ia(r, e) : wt(n, a, b | y);
        };
      }
      function oi(e, n, r, a, s) {
        e !== n && So(n, function(c, d) {
          if (s || (s = new In()), xe(c))
            Jh(e, n, d, r, oi, a, s);
          else {
            var h = a ? a(Zo(e, d), c, d + "", e, n, s) : t;
            h === t && (h = c), xo(e, d, h);
          }
        }, rn);
      }
      function Jh(e, n, r, a, s, c, d) {
        var h = Zo(e, r), v = Zo(n, r), C = d.get(v);
        if (C) {
          xo(e, r, C);
          return;
        }
        var T = c ? c(h, v, r + "", e, n, d) : t, I = T === t;
        if (I) {
          var L = X(v), B = !L && gr(v), z = !L && !B && Jr(v);
          T = v, L || B || z ? X(h) ? T = h : Ae(h) ? T = en(h) : B ? (I = !1, T = lu(v, !0)) : z ? (I = !1, T = du(v, !0)) : T = [] : Et(v) || Mr(v) ? (T = h, Mr(h) ? T = ff(h) : (!xe(h) || er(h)) && (T = Ru(v))) : I = !1;
        }
        I && (d.set(v, T), s(T, v, a, c, d), d.delete(v)), xo(e, r, T);
      }
      function eu(e, n) {
        var r = e.length;
        if (r)
          return n += n < 0 ? r : 0, Qn(n, r) ? e[n] : t;
      }
      function nu(e, n, r) {
        n.length ? n = ye(n, function(c) {
          return X(c) ? function(d) {
            return Or(d, c.length === 1 ? c[0] : c);
          } : c;
        }) : n = [tn];
        var a = -1;
        n = ye(n, fn($()));
        var s = Xs(e, function(c, d, h) {
          var v = ye(n, function(C) {
            return C(c);
          });
          return { criteria: v, index: ++a, value: c };
        });
        return Ad(s, function(c, d) {
          return lp(c, d, r);
        });
      }
      function Qh(e, n) {
        return ru(e, n, function(r, a) {
          return ia(e, a);
        });
      }
      function ru(e, n, r) {
        for (var a = -1, s = n.length, c = {}; ++a < s; ) {
          var d = n[a], h = Or(e, d);
          r(h, d) && bt(c, hr(d, e), h);
        }
        return c;
      }
      function ep(e) {
        return function(n) {
          return Or(n, e);
        };
      }
      function Mo(e, n, r, a) {
        var s = a ? Sd : $r, c = -1, d = n.length, h = e;
        for (e === n && (n = en(n)), r && (h = ye(e, fn(r))); ++c < d; )
          for (var v = 0, C = n[c], T = r ? r(C) : C; (v = s(h, T, v, a)) > -1; )
            h !== e && Zt.call(h, v, 1), Zt.call(e, v, 1);
        return e;
      }
      function tu(e, n) {
        for (var r = e ? n.length : 0, a = r - 1; r--; ) {
          var s = n[r];
          if (r == a || s !== c) {
            var c = s;
            Qn(s) ? Zt.call(e, s, 1) : Do(e, s);
          }
        }
        return e;
      }
      function Po(e, n) {
        return e + Jt(Fs() * (n - e + 1));
      }
      function np(e, n, r, a) {
        for (var s = -1, c = Ie(Xt((n - e) / (r || 1)), 0), d = w(c); c--; )
          d[a ? c : ++s] = e, e += r;
        return d;
      }
      function No(e, n) {
        var r = "";
        if (!e || n < 1 || n > je)
          return r;
        do
          n % 2 && (r += e), n = Jt(n / 2), n && (e += e);
        while (n);
        return r;
      }
      function ne(e, n) {
        return jo(Nu(e, n, tn), e + "");
      }
      function rp(e) {
        return Bs(Qr(e));
      }
      function tp(e, n) {
        var r = Qr(e);
        return gi(r, Tr(n, 0, r.length));
      }
      function bt(e, n, r, a) {
        if (!xe(e))
          return e;
        n = hr(n, e);
        for (var s = -1, c = n.length, d = c - 1, h = e; h != null && ++s < c; ) {
          var v = $n(n[s]), C = r;
          if (v === "__proto__" || v === "constructor" || v === "prototype")
            return e;
          if (s != d) {
            var T = h[v];
            C = a ? a(T, v, h) : t, C === t && (C = xe(T) ? T : Qn(n[s + 1]) ? [] : {});
          }
          gt(h, v, C), h = h[v];
        }
        return e;
      }
      var iu = Qt ? function(e, n) {
        return Qt.set(e, n), e;
      } : tn, ip = jt ? function(e, n) {
        return jt(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: aa(n),
          writable: !0
        });
      } : tn;
      function op(e) {
        return gi(Qr(e));
      }
      function xn(e, n, r) {
        var a = -1, s = e.length;
        n < 0 && (n = -n > s ? 0 : s + n), r = r > s ? s : r, r < 0 && (r += s), s = n > r ? 0 : r - n >>> 0, n >>>= 0;
        for (var c = w(s); ++a < s; )
          c[a] = e[a + n];
        return c;
      }
      function ap(e, n) {
        var r;
        return lr(e, function(a, s, c) {
          return r = n(a, s, c), !r;
        }), !!r;
      }
      function ai(e, n, r) {
        var a = 0, s = e == null ? a : e.length;
        if (typeof n == "number" && n === n && s <= _r) {
          for (; a < s; ) {
            var c = a + s >>> 1, d = e[c];
            d !== null && !ln(d) && (r ? d <= n : d < n) ? a = c + 1 : s = c;
          }
          return s;
        }
        return Lo(e, n, tn, r);
      }
      function Lo(e, n, r, a) {
        var s = 0, c = e == null ? 0 : e.length;
        if (c === 0)
          return 0;
        n = r(n);
        for (var d = n !== n, h = n === null, v = ln(n), C = n === t; s < c; ) {
          var T = Jt((s + c) / 2), I = r(e[T]), L = I !== t, B = I === null, z = I === I, ee = ln(I);
          if (d)
            var H = a || z;
          else
            C ? H = z && (a || L) : h ? H = z && L && (a || !B) : v ? H = z && L && !B && (a || !ee) : B || ee ? H = !1 : H = a ? I <= n : I < n;
          H ? s = T + 1 : c = T;
        }
        return We(c, ir);
      }
      function ou(e, n) {
        for (var r = -1, a = e.length, s = 0, c = []; ++r < a; ) {
          var d = e[r], h = n ? n(d) : d;
          if (!r || !Rn(h, v)) {
            var v = h;
            c[s++] = d === 0 ? 0 : d;
          }
        }
        return c;
      }
      function au(e) {
        return typeof e == "number" ? e : ln(e) ? Cn : +e;
      }
      function cn(e) {
        if (typeof e == "string")
          return e;
        if (X(e))
          return ye(e, cn) + "";
        if (ln(e))
          return ks ? ks.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ze ? "-0" : n;
      }
      function dr(e, n, r) {
        var a = -1, s = Ut, c = e.length, d = !0, h = [], v = h;
        if (r)
          d = !1, s = uo;
        else if (c >= l) {
          var C = n ? null : mp(e);
          if (C)
            return $t(C);
          d = !1, s = ft, v = new Cr();
        } else
          v = n ? [] : h;
        e:
          for (; ++a < c; ) {
            var T = e[a], I = n ? n(T) : T;
            if (T = r || T !== 0 ? T : 0, d && I === I) {
              for (var L = v.length; L--; )
                if (v[L] === I)
                  continue e;
              n && v.push(I), h.push(T);
            } else
              s(v, I, r) || (v !== h && v.push(I), h.push(T));
          }
        return h;
      }
      function Do(e, n) {
        return n = hr(n, e), e = Lu(e, n), e == null || delete e[$n(En(n))];
      }
      function su(e, n, r, a) {
        return bt(e, n, r(Or(e, n)), a);
      }
      function si(e, n, r, a) {
        for (var s = e.length, c = a ? s : -1; (a ? c-- : ++c < s) && n(e[c], c, e); )
          ;
        return r ? xn(e, a ? 0 : c, a ? c + 1 : s) : xn(e, a ? c + 1 : 0, a ? s : c);
      }
      function uu(e, n) {
        var r = e;
        return r instanceof ie && (r = r.value()), fo(n, function(a, s) {
          return s.func.apply(s.thisArg, ur([a], s.args));
        }, r);
      }
      function Wo(e, n, r) {
        var a = e.length;
        if (a < 2)
          return a ? dr(e[0]) : [];
        for (var s = -1, c = w(a); ++s < a; )
          for (var d = e[s], h = -1; ++h < a; )
            h != s && (c[s] = vt(c[s] || d, e[h], n, r));
        return dr(Ne(c, 1), n, r);
      }
      function fu(e, n, r) {
        for (var a = -1, s = e.length, c = n.length, d = {}; ++a < s; ) {
          var h = a < c ? n[a] : t;
          r(d, e[a], h);
        }
        return d;
      }
      function Fo(e) {
        return Ae(e) ? e : [];
      }
      function ko(e) {
        return typeof e == "function" ? e : tn;
      }
      function hr(e, n) {
        return X(e) ? e : Yo(e, n) ? [e] : ku(de(e));
      }
      var sp = ne;
      function pr(e, n, r) {
        var a = e.length;
        return r = r === t ? a : r, !n && r >= a ? e : xn(e, n, r);
      }
      var cu = Kd || function(e) {
        return Pe.clearTimeout(e);
      };
      function lu(e, n) {
        if (n)
          return e.slice();
        var r = e.length, a = Ps ? Ps(r) : new e.constructor(r);
        return e.copy(a), a;
      }
      function Uo(e) {
        var n = new e.constructor(e.byteLength);
        return new Yt(n).set(new Yt(e)), n;
      }
      function up(e, n) {
        var r = n ? Uo(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      function fp(e) {
        var n = new e.constructor(e.source, Ka.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function cp(e) {
        return pt ? ve(pt.call(e)) : {};
      }
      function du(e, n) {
        var r = n ? Uo(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      function hu(e, n) {
        if (e !== n) {
          var r = e !== t, a = e === null, s = e === e, c = ln(e), d = n !== t, h = n === null, v = n === n, C = ln(n);
          if (!h && !C && !c && e > n || c && d && v && !h && !C || a && d && v || !r && v || !s)
            return 1;
          if (!a && !c && !C && e < n || C && r && s && !a && !c || h && r && s || !d && s || !v)
            return -1;
        }
        return 0;
      }
      function lp(e, n, r) {
        for (var a = -1, s = e.criteria, c = n.criteria, d = s.length, h = r.length; ++a < d; ) {
          var v = hu(s[a], c[a]);
          if (v) {
            if (a >= h)
              return v;
            var C = r[a];
            return v * (C == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function pu(e, n, r, a) {
        for (var s = -1, c = e.length, d = r.length, h = -1, v = n.length, C = Ie(c - d, 0), T = w(v + C), I = !a; ++h < v; )
          T[h] = n[h];
        for (; ++s < d; )
          (I || s < c) && (T[r[s]] = e[s]);
        for (; C--; )
          T[h++] = e[s++];
        return T;
      }
      function gu(e, n, r, a) {
        for (var s = -1, c = e.length, d = -1, h = r.length, v = -1, C = n.length, T = Ie(c - h, 0), I = w(T + C), L = !a; ++s < T; )
          I[s] = e[s];
        for (var B = s; ++v < C; )
          I[B + v] = n[v];
        for (; ++d < h; )
          (L || s < c) && (I[B + r[d]] = e[s++]);
        return I;
      }
      function en(e, n) {
        var r = -1, a = e.length;
        for (n || (n = w(a)); ++r < a; )
          n[r] = e[r];
        return n;
      }
      function Bn(e, n, r, a) {
        var s = !r;
        r || (r = {});
        for (var c = -1, d = n.length; ++c < d; ) {
          var h = n[c], v = a ? a(r[h], e[h], h, r, e) : t;
          v === t && (v = e[h]), s ? jn(r, h, v) : gt(r, h, v);
        }
        return r;
      }
      function dp(e, n) {
        return Bn(e, qo(e), n);
      }
      function hp(e, n) {
        return Bn(e, Ou(e), n);
      }
      function ui(e, n) {
        return function(r, a) {
          var s = X(r) ? wd : Dh, c = n ? n() : {};
          return s(r, e, $(a, 2), c);
        };
      }
      function Zr(e) {
        return ne(function(n, r) {
          var a = -1, s = r.length, c = s > 1 ? r[s - 1] : t, d = s > 2 ? r[2] : t;
          for (c = e.length > 3 && typeof c == "function" ? (s--, c) : t, d && qe(r[0], r[1], d) && (c = s < 3 ? t : c, s = 1), n = ve(n); ++a < s; ) {
            var h = r[a];
            h && e(n, h, a, c);
          }
          return n;
        });
      }
      function vu(e, n) {
        return function(r, a) {
          if (r == null)
            return r;
          if (!nn(r))
            return e(r, a);
          for (var s = r.length, c = n ? s : -1, d = ve(r); (n ? c-- : ++c < s) && a(d[c], c, d) !== !1; )
            ;
          return r;
        };
      }
      function mu(e) {
        return function(n, r, a) {
          for (var s = -1, c = ve(n), d = a(n), h = d.length; h--; ) {
            var v = d[e ? h : ++s];
            if (r(c[v], v, c) === !1)
              break;
          }
          return n;
        };
      }
      function pp(e, n, r) {
        var a = n & R, s = _t(e);
        function c() {
          var d = this && this !== Pe && this instanceof c ? s : e;
          return d.apply(a ? r : this, arguments);
        }
        return c;
      }
      function wu(e) {
        return function(n) {
          n = de(n);
          var r = Vr(n) ? On(n) : t, a = r ? r[0] : n.charAt(0), s = r ? pr(r, 1).join("") : n.slice(1);
          return a[e]() + s;
        };
      }
      function jr(e) {
        return function(n) {
          return fo(mf(vf(n).replace(id, "")), e, "");
        };
      }
      function _t(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var r = Kr(e.prototype), a = e.apply(r, n);
          return xe(a) ? a : r;
        };
      }
      function gp(e, n, r) {
        var a = _t(e);
        function s() {
          for (var c = arguments.length, d = w(c), h = c, v = Xr(s); h--; )
            d[h] = arguments[h];
          var C = c < 3 && d[0] !== v && d[c - 1] !== v ? [] : fr(d, v);
          if (c -= C.length, c < r)
            return Eu(
              e,
              n,
              fi,
              s.placeholder,
              t,
              d,
              C,
              t,
              t,
              r - c
            );
          var T = this && this !== Pe && this instanceof s ? a : e;
          return un(T, this, d);
        }
        return s;
      }
      function bu(e) {
        return function(n, r, a) {
          var s = ve(n);
          if (!nn(n)) {
            var c = $(r, 3);
            n = Re(n), r = function(h) {
              return c(s[h], h, s);
            };
          }
          var d = e(n, r, a);
          return d > -1 ? s[c ? n[d] : d] : t;
        };
      }
      function _u(e) {
        return Jn(function(n) {
          var r = n.length, a = r, s = _n.prototype.thru;
          for (e && n.reverse(); a--; ) {
            var c = n[a];
            if (typeof c != "function")
              throw new bn(m);
            if (s && !d && hi(c) == "wrapper")
              var d = new _n([], !0);
          }
          for (a = d ? a : r; ++a < r; ) {
            c = n[a];
            var h = hi(c), v = h == "wrapper" ? Ho(c) : t;
            v && Ko(v[0]) && v[1] == (K | P | _ | Ke) && !v[4].length && v[9] == 1 ? d = d[hi(v[0])].apply(d, v[3]) : d = c.length == 1 && Ko(c) ? d[h]() : d.thru(c);
          }
          return function() {
            var C = arguments, T = C[0];
            if (d && C.length == 1 && X(T))
              return d.plant(T).value();
            for (var I = 0, L = r ? n[I].apply(this, C) : T; ++I < r; )
              L = n[I].call(this, L);
            return L;
          };
        });
      }
      function fi(e, n, r, a, s, c, d, h, v, C) {
        var T = n & K, I = n & R, L = n & V, B = n & (P | A), z = n & Nn, ee = L ? t : _t(e);
        function H() {
          for (var re = arguments.length, oe = w(re), dn = re; dn--; )
            oe[dn] = arguments[dn];
          if (B)
            var Ye = Xr(H), hn = Td(oe, Ye);
          if (a && (oe = pu(oe, a, s, B)), c && (oe = gu(oe, c, d, B)), re -= hn, B && re < C) {
            var Ce = fr(oe, Ye);
            return Eu(
              e,
              n,
              fi,
              H.placeholder,
              r,
              oe,
              Ce,
              h,
              v,
              C - re
            );
          }
          var Mn = I ? r : this, rr = L ? Mn[e] : e;
          return re = oe.length, h ? oe = Dp(oe, h) : z && re > 1 && oe.reverse(), T && v < re && (oe.length = v), this && this !== Pe && this instanceof H && (rr = ee || _t(rr)), rr.apply(Mn, oe);
        }
        return H;
      }
      function yu(e, n) {
        return function(r, a) {
          return zh(r, e, n(a), {});
        };
      }
      function ci(e, n) {
        return function(r, a) {
          var s;
          if (r === t && a === t)
            return n;
          if (r !== t && (s = r), a !== t) {
            if (s === t)
              return a;
            typeof r == "string" || typeof a == "string" ? (r = cn(r), a = cn(a)) : (r = au(r), a = au(a)), s = e(r, a);
          }
          return s;
        };
      }
      function Bo(e) {
        return Jn(function(n) {
          return n = ye(n, fn($())), ne(function(r) {
            var a = this;
            return e(n, function(s) {
              return un(s, a, r);
            });
          });
        });
      }
      function li(e, n) {
        n = n === t ? " " : cn(n);
        var r = n.length;
        if (r < 2)
          return r ? No(n, e) : n;
        var a = No(n, Xt(e / zr(n)));
        return Vr(n) ? pr(On(a), 0, e).join("") : a.slice(0, e);
      }
      function vp(e, n, r, a) {
        var s = n & R, c = _t(e);
        function d() {
          for (var h = -1, v = arguments.length, C = -1, T = a.length, I = w(T + v), L = this && this !== Pe && this instanceof d ? c : e; ++C < T; )
            I[C] = a[C];
          for (; v--; )
            I[C++] = arguments[++h];
          return un(L, s ? r : this, I);
        }
        return d;
      }
      function xu(e) {
        return function(n, r, a) {
          return a && typeof a != "number" && qe(n, r, a) && (r = a = t), n = nr(n), r === t ? (r = n, n = 0) : r = nr(r), a = a === t ? n < r ? 1 : -1 : nr(a), np(n, r, a, e);
        };
      }
      function di(e) {
        return function(n, r) {
          return typeof n == "string" && typeof r == "string" || (n = Sn(n), r = Sn(r)), e(n, r);
        };
      }
      function Eu(e, n, r, a, s, c, d, h, v, C) {
        var T = n & P, I = T ? d : t, L = T ? t : d, B = T ? c : t, z = T ? t : c;
        n |= T ? _ : G, n &= ~(T ? G : _), n & te || (n &= ~(R | V));
        var ee = [
          e,
          n,
          s,
          B,
          I,
          z,
          L,
          h,
          v,
          C
        ], H = r.apply(t, ee);
        return Ko(e) && Du(H, ee), H.placeholder = a, Wu(H, e, n);
      }
      function $o(e) {
        var n = Oe[e];
        return function(r, a) {
          if (r = Sn(r), a = a == null ? 0 : We(Q(a), 292), a && Ws(r)) {
            var s = (de(r) + "e").split("e"), c = n(s[0] + "e" + (+s[1] + a));
            return s = (de(c) + "e").split("e"), +(s[0] + "e" + (+s[1] - a));
          }
          return n(r);
        };
      }
      var mp = qr && 1 / $t(new qr([, -0]))[1] == Ze ? function(e) {
        return new qr(e);
      } : fa;
      function Su(e) {
        return function(n) {
          var r = Fe(n);
          return r == Ee ? mo(n) : r == Xe ? Ld(n) : Cd(n, e(n));
        };
      }
      function Xn(e, n, r, a, s, c, d, h) {
        var v = n & V;
        if (!v && typeof e != "function")
          throw new bn(m);
        var C = a ? a.length : 0;
        if (C || (n &= ~(_ | G), a = s = t), d = d === t ? d : Ie(Q(d), 0), h = h === t ? h : Q(h), C -= s ? s.length : 0, n & G) {
          var T = a, I = s;
          a = s = t;
        }
        var L = v ? t : Ho(e), B = [
          e,
          n,
          r,
          a,
          s,
          T,
          I,
          c,
          d,
          h
        ];
        if (L && Pp(B, L), e = B[0], n = B[1], r = B[2], a = B[3], s = B[4], h = B[9] = B[9] === t ? v ? 0 : e.length : Ie(B[9] - C, 0), !h && n & (P | A) && (n &= ~(P | A)), !n || n == R)
          var z = pp(e, n, r);
        else
          n == P || n == A ? z = gp(e, n, h) : (n == _ || n == (R | _)) && !s.length ? z = vp(e, n, r, a) : z = fi.apply(t, B);
        var ee = L ? iu : Du;
        return Wu(ee(z, B), e, n);
      }
      function Au(e, n, r, a) {
        return e === t || Rn(e, Gr[r]) && !ge.call(a, r) ? n : e;
      }
      function Cu(e, n, r, a, s, c) {
        return xe(e) && xe(n) && (c.set(n, e), oi(e, n, t, Cu, c), c.delete(n)), e;
      }
      function wp(e) {
        return Et(e) ? t : e;
      }
      function Tu(e, n, r, a, s, c) {
        var d = r & b, h = e.length, v = n.length;
        if (h != v && !(d && v > h))
          return !1;
        var C = c.get(e), T = c.get(n);
        if (C && T)
          return C == n && T == e;
        var I = -1, L = !0, B = r & y ? new Cr() : t;
        for (c.set(e, n), c.set(n, e); ++I < h; ) {
          var z = e[I], ee = n[I];
          if (a)
            var H = d ? a(ee, z, I, n, e, c) : a(z, ee, I, e, n, c);
          if (H !== t) {
            if (H)
              continue;
            L = !1;
            break;
          }
          if (B) {
            if (!co(n, function(re, oe) {
              if (!ft(B, oe) && (z === re || s(z, re, r, a, c)))
                return B.push(oe);
            })) {
              L = !1;
              break;
            }
          } else if (!(z === ee || s(z, ee, r, a, c))) {
            L = !1;
            break;
          }
        }
        return c.delete(e), c.delete(n), L;
      }
      function bp(e, n, r, a, s, c, d) {
        switch (r) {
          case se:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case Y:
            return !(e.byteLength != n.byteLength || !c(new Yt(e), new Yt(n)));
          case Wn:
          case Fn:
          case kn:
            return Rn(+e, +n);
          case or:
            return e.name == n.name && e.message == n.message;
          case ar:
          case Me:
            return e == n + "";
          case Ee:
            var h = mo;
          case Xe:
            var v = a & b;
            if (h || (h = $t), e.size != n.size && !v)
              return !1;
            var C = d.get(e);
            if (C)
              return C == n;
            a |= y, d.set(e, n);
            var T = Tu(h(e), h(n), a, s, c, d);
            return d.delete(e), T;
          case Tn:
            if (pt)
              return pt.call(e) == pt.call(n);
        }
        return !1;
      }
      function _p(e, n, r, a, s, c) {
        var d = r & b, h = Vo(e), v = h.length, C = Vo(n), T = C.length;
        if (v != T && !d)
          return !1;
        for (var I = v; I--; ) {
          var L = h[I];
          if (!(d ? L in n : ge.call(n, L)))
            return !1;
        }
        var B = c.get(e), z = c.get(n);
        if (B && z)
          return B == n && z == e;
        var ee = !0;
        c.set(e, n), c.set(n, e);
        for (var H = d; ++I < v; ) {
          L = h[I];
          var re = e[L], oe = n[L];
          if (a)
            var dn = d ? a(oe, re, L, n, e, c) : a(re, oe, L, e, n, c);
          if (!(dn === t ? re === oe || s(re, oe, r, a, c) : dn)) {
            ee = !1;
            break;
          }
          H || (H = L == "constructor");
        }
        if (ee && !H) {
          var Ye = e.constructor, hn = n.constructor;
          Ye != hn && "constructor" in e && "constructor" in n && !(typeof Ye == "function" && Ye instanceof Ye && typeof hn == "function" && hn instanceof hn) && (ee = !1);
        }
        return c.delete(e), c.delete(n), ee;
      }
      function Jn(e) {
        return jo(Nu(e, t, Vu), e + "");
      }
      function Vo(e) {
        return Ys(e, Re, qo);
      }
      function zo(e) {
        return Ys(e, rn, Ou);
      }
      var Ho = Qt ? function(e) {
        return Qt.get(e);
      } : fa;
      function hi(e) {
        for (var n = e.name + "", r = Yr[n], a = ge.call(Yr, n) ? r.length : 0; a--; ) {
          var s = r[a], c = s.func;
          if (c == null || c == e)
            return s.name;
        }
        return n;
      }
      function Xr(e) {
        var n = ge.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function $() {
        var e = f.iteratee || sa;
        return e = e === sa ? js : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function pi(e, n) {
        var r = e.__data__;
        return Op(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
      }
      function Go(e) {
        for (var n = Re(e), r = n.length; r--; ) {
          var a = n[r], s = e[a];
          n[r] = [a, s, Mu(s)];
        }
        return n;
      }
      function Ir(e, n) {
        var r = Md(e, n);
        return Zs(r) ? r : t;
      }
      function yp(e) {
        var n = ge.call(e, Sr), r = e[Sr];
        try {
          e[Sr] = t;
          var a = !0;
        } catch {
        }
        var s = Gt.call(e);
        return a && (n ? e[Sr] = r : delete e[Sr]), s;
      }
      var qo = bo ? function(e) {
        return e == null ? [] : (e = ve(e), sr(bo(e), function(n) {
          return Ls.call(e, n);
        }));
      } : ca, Ou = bo ? function(e) {
        for (var n = []; e; )
          ur(n, qo(e)), e = Kt(e);
        return n;
      } : ca, Fe = Ge;
      (_o && Fe(new _o(new ArrayBuffer(1))) != se || lt && Fe(new lt()) != Ee || yo && Fe(yo.resolve()) != Fr || qr && Fe(new qr()) != Xe || dt && Fe(new dt()) != J) && (Fe = function(e) {
        var n = Ge(e), r = n == He ? e.constructor : t, a = r ? Rr(r) : "";
        if (a)
          switch (a) {
            case th:
              return se;
            case ih:
              return Ee;
            case oh:
              return Fr;
            case ah:
              return Xe;
            case sh:
              return J;
          }
        return n;
      });
      function xp(e, n, r) {
        for (var a = -1, s = r.length; ++a < s; ) {
          var c = r[a], d = c.size;
          switch (c.type) {
            case "drop":
              e += d;
              break;
            case "dropRight":
              n -= d;
              break;
            case "take":
              n = We(n, e + d);
              break;
            case "takeRight":
              e = Ie(e, n - d);
              break;
          }
        }
        return { start: e, end: n };
      }
      function Ep(e) {
        var n = e.match(Il);
        return n ? n[1].split(Rl) : [];
      }
      function Iu(e, n, r) {
        n = hr(n, e);
        for (var a = -1, s = n.length, c = !1; ++a < s; ) {
          var d = $n(n[a]);
          if (!(c = e != null && r(e, d)))
            break;
          e = e[d];
        }
        return c || ++a != s ? c : (s = e == null ? 0 : e.length, !!s && xi(s) && Qn(d, s) && (X(e) || Mr(e)));
      }
      function Sp(e) {
        var n = e.length, r = new e.constructor(n);
        return n && typeof e[0] == "string" && ge.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      }
      function Ru(e) {
        return typeof e.constructor == "function" && !yt(e) ? Kr(Kt(e)) : {};
      }
      function Ap(e, n, r) {
        var a = e.constructor;
        switch (n) {
          case Y:
            return Uo(e);
          case Wn:
          case Fn:
            return new a(+e);
          case se:
            return up(e, r);
          case vn:
          case Je:
          case ae:
          case q:
          case Qe:
          case xr:
          case Ur:
          case Xi:
          case Ji:
            return du(e, r);
          case Ee:
            return new a();
          case kn:
          case Me:
            return new a(e);
          case ar:
            return fp(e);
          case Xe:
            return new a();
          case Tn:
            return cp(e);
        }
      }
      function Cp(e, n) {
        var r = n.length;
        if (!r)
          return e;
        var a = r - 1;
        return n[a] = (r > 1 ? "& " : "") + n[a], n = n.join(r > 2 ? ", " : " "), e.replace(Ol, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Tp(e) {
        return X(e) || Mr(e) || !!(Ds && e && e[Ds]);
      }
      function Qn(e, n) {
        var r = typeof e;
        return n = n ?? je, !!n && (r == "number" || r != "symbol" && Ul.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function qe(e, n, r) {
        if (!xe(r))
          return !1;
        var a = typeof n;
        return (a == "number" ? nn(r) && Qn(n, r.length) : a == "string" && n in r) ? Rn(r[n], e) : !1;
      }
      function Yo(e, n) {
        if (X(e))
          return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || ln(e) ? !0 : Sl.test(e) || !El.test(e) || n != null && e in ve(n);
      }
      function Op(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ko(e) {
        var n = hi(e), r = f[n];
        if (typeof r != "function" || !(n in ie.prototype))
          return !1;
        if (e === r)
          return !0;
        var a = Ho(r);
        return !!a && e === a[0];
      }
      function Ip(e) {
        return !!Ms && Ms in e;
      }
      var Rp = zt ? er : la;
      function yt(e) {
        var n = e && e.constructor, r = typeof n == "function" && n.prototype || Gr;
        return e === r;
      }
      function Mu(e) {
        return e === e && !xe(e);
      }
      function Pu(e, n) {
        return function(r) {
          return r == null ? !1 : r[e] === n && (n !== t || e in ve(r));
        };
      }
      function Mp(e) {
        var n = _i(e, function(a) {
          return r.size === D && r.clear(), a;
        }), r = n.cache;
        return n;
      }
      function Pp(e, n) {
        var r = e[1], a = n[1], s = r | a, c = s < (R | V | K), d = a == K && r == P || a == K && r == Ke && e[7].length <= n[8] || a == (K | Ke) && n[7].length <= n[8] && r == P;
        if (!(c || d))
          return e;
        a & R && (e[2] = n[2], s |= r & R ? 0 : te);
        var h = n[3];
        if (h) {
          var v = e[3];
          e[3] = v ? pu(v, h, n[4]) : h, e[4] = v ? fr(e[3], N) : n[4];
        }
        return h = n[5], h && (v = e[5], e[5] = v ? gu(v, h, n[6]) : h, e[6] = v ? fr(e[5], N) : n[6]), h = n[7], h && (e[7] = h), a & K && (e[8] = e[8] == null ? n[8] : We(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = s, e;
      }
      function Np(e) {
        var n = [];
        if (e != null)
          for (var r in ve(e))
            n.push(r);
        return n;
      }
      function Lp(e) {
        return Gt.call(e);
      }
      function Nu(e, n, r) {
        return n = Ie(n === t ? e.length - 1 : n, 0), function() {
          for (var a = arguments, s = -1, c = Ie(a.length - n, 0), d = w(c); ++s < c; )
            d[s] = a[n + s];
          s = -1;
          for (var h = w(n + 1); ++s < n; )
            h[s] = a[s];
          return h[n] = r(d), un(e, this, h);
        };
      }
      function Lu(e, n) {
        return n.length < 2 ? e : Or(e, xn(n, 0, -1));
      }
      function Dp(e, n) {
        for (var r = e.length, a = We(n.length, r), s = en(e); a--; ) {
          var c = n[a];
          e[a] = Qn(c, r) ? s[c] : t;
        }
        return e;
      }
      function Zo(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Du = Fu(iu), xt = jd || function(e, n) {
        return Pe.setTimeout(e, n);
      }, jo = Fu(ip);
      function Wu(e, n, r) {
        var a = n + "";
        return jo(e, Cp(a, Wp(Ep(a), r)));
      }
      function Fu(e) {
        var n = 0, r = 0;
        return function() {
          var a = eh(), s = Ln - (a - r);
          if (r = a, s > 0) {
            if (++n >= Lr)
              return arguments[0];
          } else
            n = 0;
          return e.apply(t, arguments);
        };
      }
      function gi(e, n) {
        var r = -1, a = e.length, s = a - 1;
        for (n = n === t ? a : n; ++r < n; ) {
          var c = Po(r, s), d = e[c];
          e[c] = e[r], e[r] = d;
        }
        return e.length = n, e;
      }
      var ku = Mp(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Al, function(r, a, s, c) {
          n.push(s ? c.replace(Nl, "$1") : a || r);
        }), n;
      });
      function $n(e) {
        if (typeof e == "string" || ln(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ze ? "-0" : n;
      }
      function Rr(e) {
        if (e != null) {
          try {
            return Ht.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Wp(e, n) {
        return wn(Dr, function(r) {
          var a = "_." + r[0];
          n & r[1] && !Ut(e, a) && e.push(a);
        }), e.sort();
      }
      function Uu(e) {
        if (e instanceof ie)
          return e.clone();
        var n = new _n(e.__wrapped__, e.__chain__);
        return n.__actions__ = en(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function Fp(e, n, r) {
        (r ? qe(e, n, r) : n === t) ? n = 1 : n = Ie(Q(n), 0);
        var a = e == null ? 0 : e.length;
        if (!a || n < 1)
          return [];
        for (var s = 0, c = 0, d = w(Xt(a / n)); s < a; )
          d[c++] = xn(e, s, s += n);
        return d;
      }
      function kp(e) {
        for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
          var c = e[n];
          c && (s[a++] = c);
        }
        return s;
      }
      function Up() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = w(e - 1), r = arguments[0], a = e; a--; )
          n[a - 1] = arguments[a];
        return ur(X(r) ? en(r) : [r], Ne(n, 1));
      }
      var Bp = ne(function(e, n) {
        return Ae(e) ? vt(e, Ne(n, 1, Ae, !0)) : [];
      }), $p = ne(function(e, n) {
        var r = En(n);
        return Ae(r) && (r = t), Ae(e) ? vt(e, Ne(n, 1, Ae, !0), $(r, 2)) : [];
      }), Vp = ne(function(e, n) {
        var r = En(n);
        return Ae(r) && (r = t), Ae(e) ? vt(e, Ne(n, 1, Ae, !0), t, r) : [];
      });
      function zp(e, n, r) {
        var a = e == null ? 0 : e.length;
        return a ? (n = r || n === t ? 1 : Q(n), xn(e, n < 0 ? 0 : n, a)) : [];
      }
      function Hp(e, n, r) {
        var a = e == null ? 0 : e.length;
        return a ? (n = r || n === t ? 1 : Q(n), n = a - n, xn(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Gp(e, n) {
        return e && e.length ? si(e, $(n, 3), !0, !0) : [];
      }
      function qp(e, n) {
        return e && e.length ? si(e, $(n, 3), !0) : [];
      }
      function Yp(e, n, r, a) {
        var s = e == null ? 0 : e.length;
        return s ? (r && typeof r != "number" && qe(e, n, r) && (r = 0, a = s), Uh(e, n, r, a)) : [];
      }
      function Bu(e, n, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var s = r == null ? 0 : Q(r);
        return s < 0 && (s = Ie(a + s, 0)), Bt(e, $(n, 3), s);
      }
      function $u(e, n, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var s = a - 1;
        return r !== t && (s = Q(r), s = r < 0 ? Ie(a + s, 0) : We(s, a - 1)), Bt(e, $(n, 3), s, !0);
      }
      function Vu(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ne(e, 1) : [];
      }
      function Kp(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ne(e, Ze) : [];
      }
      function Zp(e, n) {
        var r = e == null ? 0 : e.length;
        return r ? (n = n === t ? 1 : Q(n), Ne(e, n)) : [];
      }
      function jp(e) {
        for (var n = -1, r = e == null ? 0 : e.length, a = {}; ++n < r; ) {
          var s = e[n];
          a[s[0]] = s[1];
        }
        return a;
      }
      function zu(e) {
        return e && e.length ? e[0] : t;
      }
      function Xp(e, n, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var s = r == null ? 0 : Q(r);
        return s < 0 && (s = Ie(a + s, 0)), $r(e, n, s);
      }
      function Jp(e) {
        var n = e == null ? 0 : e.length;
        return n ? xn(e, 0, -1) : [];
      }
      var Qp = ne(function(e) {
        var n = ye(e, Fo);
        return n.length && n[0] === e[0] ? To(n) : [];
      }), eg = ne(function(e) {
        var n = En(e), r = ye(e, Fo);
        return n === En(r) ? n = t : r.pop(), r.length && r[0] === e[0] ? To(r, $(n, 2)) : [];
      }), ng = ne(function(e) {
        var n = En(e), r = ye(e, Fo);
        return n = typeof n == "function" ? n : t, n && r.pop(), r.length && r[0] === e[0] ? To(r, t, n) : [];
      });
      function rg(e, n) {
        return e == null ? "" : Jd.call(e, n);
      }
      function En(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : t;
      }
      function tg(e, n, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var s = a;
        return r !== t && (s = Q(r), s = s < 0 ? Ie(a + s, 0) : We(s, a - 1)), n === n ? Wd(e, n, s) : Bt(e, Es, s, !0);
      }
      function ig(e, n) {
        return e && e.length ? eu(e, Q(n)) : t;
      }
      var og = ne(Hu);
      function Hu(e, n) {
        return e && e.length && n && n.length ? Mo(e, n) : e;
      }
      function ag(e, n, r) {
        return e && e.length && n && n.length ? Mo(e, n, $(r, 2)) : e;
      }
      function sg(e, n, r) {
        return e && e.length && n && n.length ? Mo(e, n, t, r) : e;
      }
      var ug = Jn(function(e, n) {
        var r = e == null ? 0 : e.length, a = Eo(e, n);
        return tu(e, ye(n, function(s) {
          return Qn(s, r) ? +s : s;
        }).sort(hu)), a;
      });
      function fg(e, n) {
        var r = [];
        if (!(e && e.length))
          return r;
        var a = -1, s = [], c = e.length;
        for (n = $(n, 3); ++a < c; ) {
          var d = e[a];
          n(d, a, e) && (r.push(d), s.push(a));
        }
        return tu(e, s), r;
      }
      function Xo(e) {
        return e == null ? e : rh.call(e);
      }
      function cg(e, n, r) {
        var a = e == null ? 0 : e.length;
        return a ? (r && typeof r != "number" && qe(e, n, r) ? (n = 0, r = a) : (n = n == null ? 0 : Q(n), r = r === t ? a : Q(r)), xn(e, n, r)) : [];
      }
      function lg(e, n) {
        return ai(e, n);
      }
      function dg(e, n, r) {
        return Lo(e, n, $(r, 2));
      }
      function hg(e, n) {
        var r = e == null ? 0 : e.length;
        if (r) {
          var a = ai(e, n);
          if (a < r && Rn(e[a], n))
            return a;
        }
        return -1;
      }
      function pg(e, n) {
        return ai(e, n, !0);
      }
      function gg(e, n, r) {
        return Lo(e, n, $(r, 2), !0);
      }
      function vg(e, n) {
        var r = e == null ? 0 : e.length;
        if (r) {
          var a = ai(e, n, !0) - 1;
          if (Rn(e[a], n))
            return a;
        }
        return -1;
      }
      function mg(e) {
        return e && e.length ? ou(e) : [];
      }
      function wg(e, n) {
        return e && e.length ? ou(e, $(n, 2)) : [];
      }
      function bg(e) {
        var n = e == null ? 0 : e.length;
        return n ? xn(e, 1, n) : [];
      }
      function _g(e, n, r) {
        return e && e.length ? (n = r || n === t ? 1 : Q(n), xn(e, 0, n < 0 ? 0 : n)) : [];
      }
      function yg(e, n, r) {
        var a = e == null ? 0 : e.length;
        return a ? (n = r || n === t ? 1 : Q(n), n = a - n, xn(e, n < 0 ? 0 : n, a)) : [];
      }
      function xg(e, n) {
        return e && e.length ? si(e, $(n, 3), !1, !0) : [];
      }
      function Eg(e, n) {
        return e && e.length ? si(e, $(n, 3)) : [];
      }
      var Sg = ne(function(e) {
        return dr(Ne(e, 1, Ae, !0));
      }), Ag = ne(function(e) {
        var n = En(e);
        return Ae(n) && (n = t), dr(Ne(e, 1, Ae, !0), $(n, 2));
      }), Cg = ne(function(e) {
        var n = En(e);
        return n = typeof n == "function" ? n : t, dr(Ne(e, 1, Ae, !0), t, n);
      });
      function Tg(e) {
        return e && e.length ? dr(e) : [];
      }
      function Og(e, n) {
        return e && e.length ? dr(e, $(n, 2)) : [];
      }
      function Ig(e, n) {
        return n = typeof n == "function" ? n : t, e && e.length ? dr(e, t, n) : [];
      }
      function Jo(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = sr(e, function(r) {
          if (Ae(r))
            return n = Ie(r.length, n), !0;
        }), go(n, function(r) {
          return ye(e, lo(r));
        });
      }
      function Gu(e, n) {
        if (!(e && e.length))
          return [];
        var r = Jo(e);
        return n == null ? r : ye(r, function(a) {
          return un(n, t, a);
        });
      }
      var Rg = ne(function(e, n) {
        return Ae(e) ? vt(e, n) : [];
      }), Mg = ne(function(e) {
        return Wo(sr(e, Ae));
      }), Pg = ne(function(e) {
        var n = En(e);
        return Ae(n) && (n = t), Wo(sr(e, Ae), $(n, 2));
      }), Ng = ne(function(e) {
        var n = En(e);
        return n = typeof n == "function" ? n : t, Wo(sr(e, Ae), t, n);
      }), Lg = ne(Jo);
      function Dg(e, n) {
        return fu(e || [], n || [], gt);
      }
      function Wg(e, n) {
        return fu(e || [], n || [], bt);
      }
      var Fg = ne(function(e) {
        var n = e.length, r = n > 1 ? e[n - 1] : t;
        return r = typeof r == "function" ? (e.pop(), r) : t, Gu(e, r);
      });
      function qu(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function kg(e, n) {
        return n(e), e;
      }
      function mi(e, n) {
        return n(e);
      }
      var Ug = Jn(function(e) {
        var n = e.length, r = n ? e[0] : 0, a = this.__wrapped__, s = function(c) {
          return Eo(c, e);
        };
        return n > 1 || this.__actions__.length || !(a instanceof ie) || !Qn(r) ? this.thru(s) : (a = a.slice(r, +r + (n ? 1 : 0)), a.__actions__.push({
          func: mi,
          args: [s],
          thisArg: t
        }), new _n(a, this.__chain__).thru(function(c) {
          return n && !c.length && c.push(t), c;
        }));
      });
      function Bg() {
        return qu(this);
      }
      function $g() {
        return new _n(this.value(), this.__chain__);
      }
      function Vg() {
        this.__values__ === t && (this.__values__ = sf(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? t : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function zg() {
        return this;
      }
      function Hg(e) {
        for (var n, r = this; r instanceof ni; ) {
          var a = Uu(r);
          a.__index__ = 0, a.__values__ = t, n ? s.__wrapped__ = a : n = a;
          var s = a;
          r = r.__wrapped__;
        }
        return s.__wrapped__ = e, n;
      }
      function Gg() {
        var e = this.__wrapped__;
        if (e instanceof ie) {
          var n = e;
          return this.__actions__.length && (n = new ie(this)), n = n.reverse(), n.__actions__.push({
            func: mi,
            args: [Xo],
            thisArg: t
          }), new _n(n, this.__chain__);
        }
        return this.thru(Xo);
      }
      function qg() {
        return uu(this.__wrapped__, this.__actions__);
      }
      var Yg = ui(function(e, n, r) {
        ge.call(e, r) ? ++e[r] : jn(e, r, 1);
      });
      function Kg(e, n, r) {
        var a = X(e) ? ys : kh;
        return r && qe(e, n, r) && (n = t), a(e, $(n, 3));
      }
      function Zg(e, n) {
        var r = X(e) ? sr : Gs;
        return r(e, $(n, 3));
      }
      var jg = bu(Bu), Xg = bu($u);
      function Jg(e, n) {
        return Ne(wi(e, n), 1);
      }
      function Qg(e, n) {
        return Ne(wi(e, n), Ze);
      }
      function ev(e, n, r) {
        return r = r === t ? 1 : Q(r), Ne(wi(e, n), r);
      }
      function Yu(e, n) {
        var r = X(e) ? wn : lr;
        return r(e, $(n, 3));
      }
      function Ku(e, n) {
        var r = X(e) ? bd : Hs;
        return r(e, $(n, 3));
      }
      var nv = ui(function(e, n, r) {
        ge.call(e, r) ? e[r].push(n) : jn(e, r, [n]);
      });
      function rv(e, n, r, a) {
        e = nn(e) ? e : Qr(e), r = r && !a ? Q(r) : 0;
        var s = e.length;
        return r < 0 && (r = Ie(s + r, 0)), Ei(e) ? r <= s && e.indexOf(n, r) > -1 : !!s && $r(e, n, r) > -1;
      }
      var tv = ne(function(e, n, r) {
        var a = -1, s = typeof n == "function", c = nn(e) ? w(e.length) : [];
        return lr(e, function(d) {
          c[++a] = s ? un(n, d, r) : mt(d, n, r);
        }), c;
      }), iv = ui(function(e, n, r) {
        jn(e, r, n);
      });
      function wi(e, n) {
        var r = X(e) ? ye : Xs;
        return r(e, $(n, 3));
      }
      function ov(e, n, r, a) {
        return e == null ? [] : (X(n) || (n = n == null ? [] : [n]), r = a ? t : r, X(r) || (r = r == null ? [] : [r]), nu(e, n, r));
      }
      var av = ui(function(e, n, r) {
        e[r ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function sv(e, n, r) {
        var a = X(e) ? fo : As, s = arguments.length < 3;
        return a(e, $(n, 4), r, s, lr);
      }
      function uv(e, n, r) {
        var a = X(e) ? _d : As, s = arguments.length < 3;
        return a(e, $(n, 4), r, s, Hs);
      }
      function fv(e, n) {
        var r = X(e) ? sr : Gs;
        return r(e, yi($(n, 3)));
      }
      function cv(e) {
        var n = X(e) ? Bs : rp;
        return n(e);
      }
      function lv(e, n, r) {
        (r ? qe(e, n, r) : n === t) ? n = 1 : n = Q(n);
        var a = X(e) ? Nh : tp;
        return a(e, n);
      }
      function dv(e) {
        var n = X(e) ? Lh : op;
        return n(e);
      }
      function hv(e) {
        if (e == null)
          return 0;
        if (nn(e))
          return Ei(e) ? zr(e) : e.length;
        var n = Fe(e);
        return n == Ee || n == Xe ? e.size : Io(e).length;
      }
      function pv(e, n, r) {
        var a = X(e) ? co : ap;
        return r && qe(e, n, r) && (n = t), a(e, $(n, 3));
      }
      var gv = ne(function(e, n) {
        if (e == null)
          return [];
        var r = n.length;
        return r > 1 && qe(e, n[0], n[1]) ? n = [] : r > 2 && qe(n[0], n[1], n[2]) && (n = [n[0]]), nu(e, Ne(n, 1), []);
      }), bi = Zd || function() {
        return Pe.Date.now();
      };
      function vv(e, n) {
        if (typeof n != "function")
          throw new bn(m);
        return e = Q(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Zu(e, n, r) {
        return n = r ? t : n, n = e && n == null ? e.length : n, Xn(e, K, t, t, t, t, n);
      }
      function ju(e, n) {
        var r;
        if (typeof n != "function")
          throw new bn(m);
        return e = Q(e), function() {
          return --e > 0 && (r = n.apply(this, arguments)), e <= 1 && (n = t), r;
        };
      }
      var Qo = ne(function(e, n, r) {
        var a = R;
        if (r.length) {
          var s = fr(r, Xr(Qo));
          a |= _;
        }
        return Xn(e, a, n, r, s);
      }), Xu = ne(function(e, n, r) {
        var a = R | V;
        if (r.length) {
          var s = fr(r, Xr(Xu));
          a |= _;
        }
        return Xn(n, a, e, r, s);
      });
      function Ju(e, n, r) {
        n = r ? t : n;
        var a = Xn(e, P, t, t, t, t, t, n);
        return a.placeholder = Ju.placeholder, a;
      }
      function Qu(e, n, r) {
        n = r ? t : n;
        var a = Xn(e, A, t, t, t, t, t, n);
        return a.placeholder = Qu.placeholder, a;
      }
      function ef(e, n, r) {
        var a, s, c, d, h, v, C = 0, T = !1, I = !1, L = !0;
        if (typeof e != "function")
          throw new bn(m);
        n = Sn(n) || 0, xe(r) && (T = !!r.leading, I = "maxWait" in r, c = I ? Ie(Sn(r.maxWait) || 0, n) : c, L = "trailing" in r ? !!r.trailing : L);
        function B(Ce) {
          var Mn = a, rr = s;
          return a = s = t, C = Ce, d = e.apply(rr, Mn), d;
        }
        function z(Ce) {
          return C = Ce, h = xt(re, n), T ? B(Ce) : d;
        }
        function ee(Ce) {
          var Mn = Ce - v, rr = Ce - C, _f = n - Mn;
          return I ? We(_f, c - rr) : _f;
        }
        function H(Ce) {
          var Mn = Ce - v, rr = Ce - C;
          return v === t || Mn >= n || Mn < 0 || I && rr >= c;
        }
        function re() {
          var Ce = bi();
          if (H(Ce))
            return oe(Ce);
          h = xt(re, ee(Ce));
        }
        function oe(Ce) {
          return h = t, L && a ? B(Ce) : (a = s = t, d);
        }
        function dn() {
          h !== t && cu(h), C = 0, a = v = s = h = t;
        }
        function Ye() {
          return h === t ? d : oe(bi());
        }
        function hn() {
          var Ce = bi(), Mn = H(Ce);
          if (a = arguments, s = this, v = Ce, Mn) {
            if (h === t)
              return z(v);
            if (I)
              return cu(h), h = xt(re, n), B(v);
          }
          return h === t && (h = xt(re, n)), d;
        }
        return hn.cancel = dn, hn.flush = Ye, hn;
      }
      var mv = ne(function(e, n) {
        return zs(e, 1, n);
      }), wv = ne(function(e, n, r) {
        return zs(e, Sn(n) || 0, r);
      });
      function bv(e) {
        return Xn(e, Nn);
      }
      function _i(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new bn(m);
        var r = function() {
          var a = arguments, s = n ? n.apply(this, a) : a[0], c = r.cache;
          if (c.has(s))
            return c.get(s);
          var d = e.apply(this, a);
          return r.cache = c.set(s, d) || c, d;
        };
        return r.cache = new (_i.Cache || Zn)(), r;
      }
      _i.Cache = Zn;
      function yi(e) {
        if (typeof e != "function")
          throw new bn(m);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function _v(e) {
        return ju(2, e);
      }
      var yv = sp(function(e, n) {
        n = n.length == 1 && X(n[0]) ? ye(n[0], fn($())) : ye(Ne(n, 1), fn($()));
        var r = n.length;
        return ne(function(a) {
          for (var s = -1, c = We(a.length, r); ++s < c; )
            a[s] = n[s].call(this, a[s]);
          return un(e, this, a);
        });
      }), ea = ne(function(e, n) {
        var r = fr(n, Xr(ea));
        return Xn(e, _, t, n, r);
      }), nf = ne(function(e, n) {
        var r = fr(n, Xr(nf));
        return Xn(e, G, t, n, r);
      }), xv = Jn(function(e, n) {
        return Xn(e, Ke, t, t, t, n);
      });
      function Ev(e, n) {
        if (typeof e != "function")
          throw new bn(m);
        return n = n === t ? n : Q(n), ne(e, n);
      }
      function Sv(e, n) {
        if (typeof e != "function")
          throw new bn(m);
        return n = n == null ? 0 : Ie(Q(n), 0), ne(function(r) {
          var a = r[n], s = pr(r, 0, n);
          return a && ur(s, a), un(e, this, s);
        });
      }
      function Av(e, n, r) {
        var a = !0, s = !0;
        if (typeof e != "function")
          throw new bn(m);
        return xe(r) && (a = "leading" in r ? !!r.leading : a, s = "trailing" in r ? !!r.trailing : s), ef(e, n, {
          leading: a,
          maxWait: n,
          trailing: s
        });
      }
      function Cv(e) {
        return Zu(e, 1);
      }
      function Tv(e, n) {
        return ea(ko(n), e);
      }
      function Ov() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return X(e) ? e : [e];
      }
      function Iv(e) {
        return yn(e, O);
      }
      function Rv(e, n) {
        return n = typeof n == "function" ? n : t, yn(e, O, n);
      }
      function Mv(e) {
        return yn(e, k | O);
      }
      function Pv(e, n) {
        return n = typeof n == "function" ? n : t, yn(e, k | O, n);
      }
      function Nv(e, n) {
        return n == null || Vs(e, n, Re(n));
      }
      function Rn(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Lv = di(Co), Dv = di(function(e, n) {
        return e >= n;
      }), Mr = Ks(function() {
        return arguments;
      }()) ? Ks : function(e) {
        return Se(e) && ge.call(e, "callee") && !Ls.call(e, "callee");
      }, X = w.isArray, Wv = gs ? fn(gs) : Hh;
      function nn(e) {
        return e != null && xi(e.length) && !er(e);
      }
      function Ae(e) {
        return Se(e) && nn(e);
      }
      function Fv(e) {
        return e === !0 || e === !1 || Se(e) && Ge(e) == Wn;
      }
      var gr = Xd || la, kv = vs ? fn(vs) : Gh;
      function Uv(e) {
        return Se(e) && e.nodeType === 1 && !Et(e);
      }
      function Bv(e) {
        if (e == null)
          return !0;
        if (nn(e) && (X(e) || typeof e == "string" || typeof e.splice == "function" || gr(e) || Jr(e) || Mr(e)))
          return !e.length;
        var n = Fe(e);
        if (n == Ee || n == Xe)
          return !e.size;
        if (yt(e))
          return !Io(e).length;
        for (var r in e)
          if (ge.call(e, r))
            return !1;
        return !0;
      }
      function $v(e, n) {
        return wt(e, n);
      }
      function Vv(e, n, r) {
        r = typeof r == "function" ? r : t;
        var a = r ? r(e, n) : t;
        return a === t ? wt(e, n, t, r) : !!a;
      }
      function na(e) {
        if (!Se(e))
          return !1;
        var n = Ge(e);
        return n == or || n == Wr || typeof e.message == "string" && typeof e.name == "string" && !Et(e);
      }
      function zv(e) {
        return typeof e == "number" && Ws(e);
      }
      function er(e) {
        if (!xe(e))
          return !1;
        var n = Ge(e);
        return n == U || n == Yn || n == yr || n == ji;
      }
      function rf(e) {
        return typeof e == "number" && e == Q(e);
      }
      function xi(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= je;
      }
      function xe(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Se(e) {
        return e != null && typeof e == "object";
      }
      var tf = ms ? fn(ms) : Yh;
      function Hv(e, n) {
        return e === n || Oo(e, n, Go(n));
      }
      function Gv(e, n, r) {
        return r = typeof r == "function" ? r : t, Oo(e, n, Go(n), r);
      }
      function qv(e) {
        return of(e) && e != +e;
      }
      function Yv(e) {
        if (Rp(e))
          throw new j(p);
        return Zs(e);
      }
      function Kv(e) {
        return e === null;
      }
      function Zv(e) {
        return e == null;
      }
      function of(e) {
        return typeof e == "number" || Se(e) && Ge(e) == kn;
      }
      function Et(e) {
        if (!Se(e) || Ge(e) != He)
          return !1;
        var n = Kt(e);
        if (n === null)
          return !0;
        var r = ge.call(n, "constructor") && n.constructor;
        return typeof r == "function" && r instanceof r && Ht.call(r) == Gd;
      }
      var ra = ws ? fn(ws) : Kh;
      function jv(e) {
        return rf(e) && e >= -je && e <= je;
      }
      var af = bs ? fn(bs) : Zh;
      function Ei(e) {
        return typeof e == "string" || !X(e) && Se(e) && Ge(e) == Me;
      }
      function ln(e) {
        return typeof e == "symbol" || Se(e) && Ge(e) == Tn;
      }
      var Jr = _s ? fn(_s) : jh;
      function Xv(e) {
        return e === t;
      }
      function Jv(e) {
        return Se(e) && Fe(e) == J;
      }
      function Qv(e) {
        return Se(e) && Ge(e) == ue;
      }
      var e0 = di(Ro), n0 = di(function(e, n) {
        return e <= n;
      });
      function sf(e) {
        if (!e)
          return [];
        if (nn(e))
          return Ei(e) ? On(e) : en(e);
        if (ct && e[ct])
          return Nd(e[ct]());
        var n = Fe(e), r = n == Ee ? mo : n == Xe ? $t : Qr;
        return r(e);
      }
      function nr(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Sn(e), e === Ze || e === -Ze) {
          var n = e < 0 ? -1 : 1;
          return n * br;
        }
        return e === e ? e : 0;
      }
      function Q(e) {
        var n = nr(e), r = n % 1;
        return n === n ? r ? n - r : n : 0;
      }
      function uf(e) {
        return e ? Tr(Q(e), 0, ze) : 0;
      }
      function Sn(e) {
        if (typeof e == "number")
          return e;
        if (ln(e))
          return Cn;
        if (xe(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = xe(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Cs(e);
        var r = Wl.test(e);
        return r || kl.test(e) ? vd(e.slice(2), r ? 2 : 8) : Dl.test(e) ? Cn : +e;
      }
      function ff(e) {
        return Bn(e, rn(e));
      }
      function r0(e) {
        return e ? Tr(Q(e), -je, je) : e === 0 ? e : 0;
      }
      function de(e) {
        return e == null ? "" : cn(e);
      }
      var t0 = Zr(function(e, n) {
        if (yt(n) || nn(n)) {
          Bn(n, Re(n), e);
          return;
        }
        for (var r in n)
          ge.call(n, r) && gt(e, r, n[r]);
      }), cf = Zr(function(e, n) {
        Bn(n, rn(n), e);
      }), Si = Zr(function(e, n, r, a) {
        Bn(n, rn(n), e, a);
      }), i0 = Zr(function(e, n, r, a) {
        Bn(n, Re(n), e, a);
      }), o0 = Jn(Eo);
      function a0(e, n) {
        var r = Kr(e);
        return n == null ? r : $s(r, n);
      }
      var s0 = ne(function(e, n) {
        e = ve(e);
        var r = -1, a = n.length, s = a > 2 ? n[2] : t;
        for (s && qe(n[0], n[1], s) && (a = 1); ++r < a; )
          for (var c = n[r], d = rn(c), h = -1, v = d.length; ++h < v; ) {
            var C = d[h], T = e[C];
            (T === t || Rn(T, Gr[C]) && !ge.call(e, C)) && (e[C] = c[C]);
          }
        return e;
      }), u0 = ne(function(e) {
        return e.push(t, Cu), un(lf, t, e);
      });
      function f0(e, n) {
        return xs(e, $(n, 3), Un);
      }
      function c0(e, n) {
        return xs(e, $(n, 3), Ao);
      }
      function l0(e, n) {
        return e == null ? e : So(e, $(n, 3), rn);
      }
      function d0(e, n) {
        return e == null ? e : qs(e, $(n, 3), rn);
      }
      function h0(e, n) {
        return e && Un(e, $(n, 3));
      }
      function p0(e, n) {
        return e && Ao(e, $(n, 3));
      }
      function g0(e) {
        return e == null ? [] : ii(e, Re(e));
      }
      function v0(e) {
        return e == null ? [] : ii(e, rn(e));
      }
      function ta(e, n, r) {
        var a = e == null ? t : Or(e, n);
        return a === t ? r : a;
      }
      function m0(e, n) {
        return e != null && Iu(e, n, Bh);
      }
      function ia(e, n) {
        return e != null && Iu(e, n, $h);
      }
      var w0 = yu(function(e, n, r) {
        n != null && typeof n.toString != "function" && (n = Gt.call(n)), e[n] = r;
      }, aa(tn)), b0 = yu(function(e, n, r) {
        n != null && typeof n.toString != "function" && (n = Gt.call(n)), ge.call(e, n) ? e[n].push(r) : e[n] = [r];
      }, $), _0 = ne(mt);
      function Re(e) {
        return nn(e) ? Us(e) : Io(e);
      }
      function rn(e) {
        return nn(e) ? Us(e, !0) : Xh(e);
      }
      function y0(e, n) {
        var r = {};
        return n = $(n, 3), Un(e, function(a, s, c) {
          jn(r, n(a, s, c), a);
        }), r;
      }
      function x0(e, n) {
        var r = {};
        return n = $(n, 3), Un(e, function(a, s, c) {
          jn(r, s, n(a, s, c));
        }), r;
      }
      var E0 = Zr(function(e, n, r) {
        oi(e, n, r);
      }), lf = Zr(function(e, n, r, a) {
        oi(e, n, r, a);
      }), S0 = Jn(function(e, n) {
        var r = {};
        if (e == null)
          return r;
        var a = !1;
        n = ye(n, function(c) {
          return c = hr(c, e), a || (a = c.length > 1), c;
        }), Bn(e, zo(e), r), a && (r = yn(r, k | x | O, wp));
        for (var s = n.length; s--; )
          Do(r, n[s]);
        return r;
      });
      function A0(e, n) {
        return df(e, yi($(n)));
      }
      var C0 = Jn(function(e, n) {
        return e == null ? {} : Qh(e, n);
      });
      function df(e, n) {
        if (e == null)
          return {};
        var r = ye(zo(e), function(a) {
          return [a];
        });
        return n = $(n), ru(e, r, function(a, s) {
          return n(a, s[0]);
        });
      }
      function T0(e, n, r) {
        n = hr(n, e);
        var a = -1, s = n.length;
        for (s || (s = 1, e = t); ++a < s; ) {
          var c = e == null ? t : e[$n(n[a])];
          c === t && (a = s, c = r), e = er(c) ? c.call(e) : c;
        }
        return e;
      }
      function O0(e, n, r) {
        return e == null ? e : bt(e, n, r);
      }
      function I0(e, n, r, a) {
        return a = typeof a == "function" ? a : t, e == null ? e : bt(e, n, r, a);
      }
      var hf = Su(Re), pf = Su(rn);
      function R0(e, n, r) {
        var a = X(e), s = a || gr(e) || Jr(e);
        if (n = $(n, 4), r == null) {
          var c = e && e.constructor;
          s ? r = a ? new c() : [] : xe(e) ? r = er(c) ? Kr(Kt(e)) : {} : r = {};
        }
        return (s ? wn : Un)(e, function(d, h, v) {
          return n(r, d, h, v);
        }), r;
      }
      function M0(e, n) {
        return e == null ? !0 : Do(e, n);
      }
      function P0(e, n, r) {
        return e == null ? e : su(e, n, ko(r));
      }
      function N0(e, n, r, a) {
        return a = typeof a == "function" ? a : t, e == null ? e : su(e, n, ko(r), a);
      }
      function Qr(e) {
        return e == null ? [] : vo(e, Re(e));
      }
      function L0(e) {
        return e == null ? [] : vo(e, rn(e));
      }
      function D0(e, n, r) {
        return r === t && (r = n, n = t), r !== t && (r = Sn(r), r = r === r ? r : 0), n !== t && (n = Sn(n), n = n === n ? n : 0), Tr(Sn(e), n, r);
      }
      function W0(e, n, r) {
        return n = nr(n), r === t ? (r = n, n = 0) : r = nr(r), e = Sn(e), Vh(e, n, r);
      }
      function F0(e, n, r) {
        if (r && typeof r != "boolean" && qe(e, n, r) && (n = r = t), r === t && (typeof n == "boolean" ? (r = n, n = t) : typeof e == "boolean" && (r = e, e = t)), e === t && n === t ? (e = 0, n = 1) : (e = nr(e), n === t ? (n = e, e = 0) : n = nr(n)), e > n) {
          var a = e;
          e = n, n = a;
        }
        if (r || e % 1 || n % 1) {
          var s = Fs();
          return We(e + s * (n - e + gd("1e-" + ((s + "").length - 1))), n);
        }
        return Po(e, n);
      }
      var k0 = jr(function(e, n, r) {
        return n = n.toLowerCase(), e + (r ? gf(n) : n);
      });
      function gf(e) {
        return oa(de(e).toLowerCase());
      }
      function vf(e) {
        return e = de(e), e && e.replace(Bl, Od).replace(od, "");
      }
      function U0(e, n, r) {
        e = de(e), n = cn(n);
        var a = e.length;
        r = r === t ? a : Tr(Q(r), 0, a);
        var s = r;
        return r -= n.length, r >= 0 && e.slice(r, s) == n;
      }
      function B0(e) {
        return e = de(e), e && _l.test(e) ? e.replace(qa, Id) : e;
      }
      function $0(e) {
        return e = de(e), e && Cl.test(e) ? e.replace(Qi, "\\$&") : e;
      }
      var V0 = jr(function(e, n, r) {
        return e + (r ? "-" : "") + n.toLowerCase();
      }), z0 = jr(function(e, n, r) {
        return e + (r ? " " : "") + n.toLowerCase();
      }), H0 = wu("toLowerCase");
      function G0(e, n, r) {
        e = de(e), n = Q(n);
        var a = n ? zr(e) : 0;
        if (!n || a >= n)
          return e;
        var s = (n - a) / 2;
        return li(Jt(s), r) + e + li(Xt(s), r);
      }
      function q0(e, n, r) {
        e = de(e), n = Q(n);
        var a = n ? zr(e) : 0;
        return n && a < n ? e + li(n - a, r) : e;
      }
      function Y0(e, n, r) {
        e = de(e), n = Q(n);
        var a = n ? zr(e) : 0;
        return n && a < n ? li(n - a, r) + e : e;
      }
      function K0(e, n, r) {
        return r || n == null ? n = 0 : n && (n = +n), nh(de(e).replace(eo, ""), n || 0);
      }
      function Z0(e, n, r) {
        return (r ? qe(e, n, r) : n === t) ? n = 1 : n = Q(n), No(de(e), n);
      }
      function j0() {
        var e = arguments, n = de(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var X0 = jr(function(e, n, r) {
        return e + (r ? "_" : "") + n.toLowerCase();
      });
      function J0(e, n, r) {
        return r && typeof r != "number" && qe(e, n, r) && (n = r = t), r = r === t ? ze : r >>> 0, r ? (e = de(e), e && (typeof n == "string" || n != null && !ra(n)) && (n = cn(n), !n && Vr(e)) ? pr(On(e), 0, r) : e.split(n, r)) : [];
      }
      var Q0 = jr(function(e, n, r) {
        return e + (r ? " " : "") + oa(n);
      });
      function em(e, n, r) {
        return e = de(e), r = r == null ? 0 : Tr(Q(r), 0, e.length), n = cn(n), e.slice(r, r + n.length) == n;
      }
      function nm(e, n, r) {
        var a = f.templateSettings;
        r && qe(e, n, r) && (n = t), e = de(e), n = Si({}, n, a, Au);
        var s = Si({}, n.imports, a.imports, Au), c = Re(s), d = vo(s, c), h, v, C = 0, T = n.interpolate || Wt, I = "__p += '", L = wo(
          (n.escape || Wt).source + "|" + T.source + "|" + (T === Ya ? Ll : Wt).source + "|" + (n.evaluate || Wt).source + "|$",
          "g"
        ), B = "//# sourceURL=" + (ge.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++cd + "]") + `
`;
        e.replace(L, function(H, re, oe, dn, Ye, hn) {
          return oe || (oe = dn), I += e.slice(C, hn).replace($l, Rd), re && (h = !0, I += `' +
__e(` + re + `) +
'`), Ye && (v = !0, I += `';
` + Ye + `;
__p += '`), oe && (I += `' +
((__t = (` + oe + `)) == null ? '' : __t) +
'`), C = hn + H.length, H;
        }), I += `';
`;
        var z = ge.call(n, "variable") && n.variable;
        if (!z)
          I = `with (obj) {
` + I + `
}
`;
        else if (Pl.test(z))
          throw new j(S);
        I = (v ? I.replace(vl, "") : I).replace(ml, "$1").replace(wl, "$1;"), I = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (h ? ", __e = _.escape" : "") + (v ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + I + `return __p
}`;
        var ee = wf(function() {
          return fe(c, B + "return " + I).apply(t, d);
        });
        if (ee.source = I, na(ee))
          throw ee;
        return ee;
      }
      function rm(e) {
        return de(e).toLowerCase();
      }
      function tm(e) {
        return de(e).toUpperCase();
      }
      function im(e, n, r) {
        if (e = de(e), e && (r || n === t))
          return Cs(e);
        if (!e || !(n = cn(n)))
          return e;
        var a = On(e), s = On(n), c = Ts(a, s), d = Os(a, s) + 1;
        return pr(a, c, d).join("");
      }
      function om(e, n, r) {
        if (e = de(e), e && (r || n === t))
          return e.slice(0, Rs(e) + 1);
        if (!e || !(n = cn(n)))
          return e;
        var a = On(e), s = Os(a, On(n)) + 1;
        return pr(a, 0, s).join("");
      }
      function am(e, n, r) {
        if (e = de(e), e && (r || n === t))
          return e.replace(eo, "");
        if (!e || !(n = cn(n)))
          return e;
        var a = On(e), s = Ts(a, On(n));
        return pr(a, s).join("");
      }
      function sm(e, n) {
        var r = Gn, a = Nr;
        if (xe(n)) {
          var s = "separator" in n ? n.separator : s;
          r = "length" in n ? Q(n.length) : r, a = "omission" in n ? cn(n.omission) : a;
        }
        e = de(e);
        var c = e.length;
        if (Vr(e)) {
          var d = On(e);
          c = d.length;
        }
        if (r >= c)
          return e;
        var h = r - zr(a);
        if (h < 1)
          return a;
        var v = d ? pr(d, 0, h).join("") : e.slice(0, h);
        if (s === t)
          return v + a;
        if (d && (h += v.length - h), ra(s)) {
          if (e.slice(h).search(s)) {
            var C, T = v;
            for (s.global || (s = wo(s.source, de(Ka.exec(s)) + "g")), s.lastIndex = 0; C = s.exec(T); )
              var I = C.index;
            v = v.slice(0, I === t ? h : I);
          }
        } else if (e.indexOf(cn(s), h) != h) {
          var L = v.lastIndexOf(s);
          L > -1 && (v = v.slice(0, L));
        }
        return v + a;
      }
      function um(e) {
        return e = de(e), e && bl.test(e) ? e.replace(Ga, Fd) : e;
      }
      var fm = jr(function(e, n, r) {
        return e + (r ? " " : "") + n.toUpperCase();
      }), oa = wu("toUpperCase");
      function mf(e, n, r) {
        return e = de(e), n = r ? t : n, n === t ? Pd(e) ? Bd(e) : Ed(e) : e.match(n) || [];
      }
      var wf = ne(function(e, n) {
        try {
          return un(e, t, n);
        } catch (r) {
          return na(r) ? r : new j(r);
        }
      }), cm = Jn(function(e, n) {
        return wn(n, function(r) {
          r = $n(r), jn(e, r, Qo(e[r], e));
        }), e;
      });
      function lm(e) {
        var n = e == null ? 0 : e.length, r = $();
        return e = n ? ye(e, function(a) {
          if (typeof a[1] != "function")
            throw new bn(m);
          return [r(a[0]), a[1]];
        }) : [], ne(function(a) {
          for (var s = -1; ++s < n; ) {
            var c = e[s];
            if (un(c[0], this, a))
              return un(c[1], this, a);
          }
        });
      }
      function dm(e) {
        return Fh(yn(e, k));
      }
      function aa(e) {
        return function() {
          return e;
        };
      }
      function hm(e, n) {
        return e == null || e !== e ? n : e;
      }
      var pm = _u(), gm = _u(!0);
      function tn(e) {
        return e;
      }
      function sa(e) {
        return js(typeof e == "function" ? e : yn(e, k));
      }
      function vm(e) {
        return Js(yn(e, k));
      }
      function mm(e, n) {
        return Qs(e, yn(n, k));
      }
      var wm = ne(function(e, n) {
        return function(r) {
          return mt(r, e, n);
        };
      }), bm = ne(function(e, n) {
        return function(r) {
          return mt(e, r, n);
        };
      });
      function ua(e, n, r) {
        var a = Re(n), s = ii(n, a);
        r == null && !(xe(n) && (s.length || !a.length)) && (r = n, n = e, e = this, s = ii(n, Re(n)));
        var c = !(xe(r) && "chain" in r) || !!r.chain, d = er(e);
        return wn(s, function(h) {
          var v = n[h];
          e[h] = v, d && (e.prototype[h] = function() {
            var C = this.__chain__;
            if (c || C) {
              var T = e(this.__wrapped__), I = T.__actions__ = en(this.__actions__);
              return I.push({ func: v, args: arguments, thisArg: e }), T.__chain__ = C, T;
            }
            return v.apply(e, ur([this.value()], arguments));
          });
        }), e;
      }
      function _m() {
        return Pe._ === this && (Pe._ = qd), this;
      }
      function fa() {
      }
      function ym(e) {
        return e = Q(e), ne(function(n) {
          return eu(n, e);
        });
      }
      var xm = Bo(ye), Em = Bo(ys), Sm = Bo(co);
      function bf(e) {
        return Yo(e) ? lo($n(e)) : ep(e);
      }
      function Am(e) {
        return function(n) {
          return e == null ? t : Or(e, n);
        };
      }
      var Cm = xu(), Tm = xu(!0);
      function ca() {
        return [];
      }
      function la() {
        return !1;
      }
      function Om() {
        return {};
      }
      function Im() {
        return "";
      }
      function Rm() {
        return !0;
      }
      function Mm(e, n) {
        if (e = Q(e), e < 1 || e > je)
          return [];
        var r = ze, a = We(e, ze);
        n = $(n), e -= ze;
        for (var s = go(a, n); ++r < e; )
          n(r);
        return s;
      }
      function Pm(e) {
        return X(e) ? ye(e, $n) : ln(e) ? [e] : en(ku(de(e)));
      }
      function Nm(e) {
        var n = ++Hd;
        return de(e) + n;
      }
      var Lm = ci(function(e, n) {
        return e + n;
      }, 0), Dm = $o("ceil"), Wm = ci(function(e, n) {
        return e / n;
      }, 1), Fm = $o("floor");
      function km(e) {
        return e && e.length ? ti(e, tn, Co) : t;
      }
      function Um(e, n) {
        return e && e.length ? ti(e, $(n, 2), Co) : t;
      }
      function Bm(e) {
        return Ss(e, tn);
      }
      function $m(e, n) {
        return Ss(e, $(n, 2));
      }
      function Vm(e) {
        return e && e.length ? ti(e, tn, Ro) : t;
      }
      function zm(e, n) {
        return e && e.length ? ti(e, $(n, 2), Ro) : t;
      }
      var Hm = ci(function(e, n) {
        return e * n;
      }, 1), Gm = $o("round"), qm = ci(function(e, n) {
        return e - n;
      }, 0);
      function Ym(e) {
        return e && e.length ? po(e, tn) : 0;
      }
      function Km(e, n) {
        return e && e.length ? po(e, $(n, 2)) : 0;
      }
      return f.after = vv, f.ary = Zu, f.assign = t0, f.assignIn = cf, f.assignInWith = Si, f.assignWith = i0, f.at = o0, f.before = ju, f.bind = Qo, f.bindAll = cm, f.bindKey = Xu, f.castArray = Ov, f.chain = qu, f.chunk = Fp, f.compact = kp, f.concat = Up, f.cond = lm, f.conforms = dm, f.constant = aa, f.countBy = Yg, f.create = a0, f.curry = Ju, f.curryRight = Qu, f.debounce = ef, f.defaults = s0, f.defaultsDeep = u0, f.defer = mv, f.delay = wv, f.difference = Bp, f.differenceBy = $p, f.differenceWith = Vp, f.drop = zp, f.dropRight = Hp, f.dropRightWhile = Gp, f.dropWhile = qp, f.fill = Yp, f.filter = Zg, f.flatMap = Jg, f.flatMapDeep = Qg, f.flatMapDepth = ev, f.flatten = Vu, f.flattenDeep = Kp, f.flattenDepth = Zp, f.flip = bv, f.flow = pm, f.flowRight = gm, f.fromPairs = jp, f.functions = g0, f.functionsIn = v0, f.groupBy = nv, f.initial = Jp, f.intersection = Qp, f.intersectionBy = eg, f.intersectionWith = ng, f.invert = w0, f.invertBy = b0, f.invokeMap = tv, f.iteratee = sa, f.keyBy = iv, f.keys = Re, f.keysIn = rn, f.map = wi, f.mapKeys = y0, f.mapValues = x0, f.matches = vm, f.matchesProperty = mm, f.memoize = _i, f.merge = E0, f.mergeWith = lf, f.method = wm, f.methodOf = bm, f.mixin = ua, f.negate = yi, f.nthArg = ym, f.omit = S0, f.omitBy = A0, f.once = _v, f.orderBy = ov, f.over = xm, f.overArgs = yv, f.overEvery = Em, f.overSome = Sm, f.partial = ea, f.partialRight = nf, f.partition = av, f.pick = C0, f.pickBy = df, f.property = bf, f.propertyOf = Am, f.pull = og, f.pullAll = Hu, f.pullAllBy = ag, f.pullAllWith = sg, f.pullAt = ug, f.range = Cm, f.rangeRight = Tm, f.rearg = xv, f.reject = fv, f.remove = fg, f.rest = Ev, f.reverse = Xo, f.sampleSize = lv, f.set = O0, f.setWith = I0, f.shuffle = dv, f.slice = cg, f.sortBy = gv, f.sortedUniq = mg, f.sortedUniqBy = wg, f.split = J0, f.spread = Sv, f.tail = bg, f.take = _g, f.takeRight = yg, f.takeRightWhile = xg, f.takeWhile = Eg, f.tap = kg, f.throttle = Av, f.thru = mi, f.toArray = sf, f.toPairs = hf, f.toPairsIn = pf, f.toPath = Pm, f.toPlainObject = ff, f.transform = R0, f.unary = Cv, f.union = Sg, f.unionBy = Ag, f.unionWith = Cg, f.uniq = Tg, f.uniqBy = Og, f.uniqWith = Ig, f.unset = M0, f.unzip = Jo, f.unzipWith = Gu, f.update = P0, f.updateWith = N0, f.values = Qr, f.valuesIn = L0, f.without = Rg, f.words = mf, f.wrap = Tv, f.xor = Mg, f.xorBy = Pg, f.xorWith = Ng, f.zip = Lg, f.zipObject = Dg, f.zipObjectDeep = Wg, f.zipWith = Fg, f.entries = hf, f.entriesIn = pf, f.extend = cf, f.extendWith = Si, ua(f, f), f.add = Lm, f.attempt = wf, f.camelCase = k0, f.capitalize = gf, f.ceil = Dm, f.clamp = D0, f.clone = Iv, f.cloneDeep = Mv, f.cloneDeepWith = Pv, f.cloneWith = Rv, f.conformsTo = Nv, f.deburr = vf, f.defaultTo = hm, f.divide = Wm, f.endsWith = U0, f.eq = Rn, f.escape = B0, f.escapeRegExp = $0, f.every = Kg, f.find = jg, f.findIndex = Bu, f.findKey = f0, f.findLast = Xg, f.findLastIndex = $u, f.findLastKey = c0, f.floor = Fm, f.forEach = Yu, f.forEachRight = Ku, f.forIn = l0, f.forInRight = d0, f.forOwn = h0, f.forOwnRight = p0, f.get = ta, f.gt = Lv, f.gte = Dv, f.has = m0, f.hasIn = ia, f.head = zu, f.identity = tn, f.includes = rv, f.indexOf = Xp, f.inRange = W0, f.invoke = _0, f.isArguments = Mr, f.isArray = X, f.isArrayBuffer = Wv, f.isArrayLike = nn, f.isArrayLikeObject = Ae, f.isBoolean = Fv, f.isBuffer = gr, f.isDate = kv, f.isElement = Uv, f.isEmpty = Bv, f.isEqual = $v, f.isEqualWith = Vv, f.isError = na, f.isFinite = zv, f.isFunction = er, f.isInteger = rf, f.isLength = xi, f.isMap = tf, f.isMatch = Hv, f.isMatchWith = Gv, f.isNaN = qv, f.isNative = Yv, f.isNil = Zv, f.isNull = Kv, f.isNumber = of, f.isObject = xe, f.isObjectLike = Se, f.isPlainObject = Et, f.isRegExp = ra, f.isSafeInteger = jv, f.isSet = af, f.isString = Ei, f.isSymbol = ln, f.isTypedArray = Jr, f.isUndefined = Xv, f.isWeakMap = Jv, f.isWeakSet = Qv, f.join = rg, f.kebabCase = V0, f.last = En, f.lastIndexOf = tg, f.lowerCase = z0, f.lowerFirst = H0, f.lt = e0, f.lte = n0, f.max = km, f.maxBy = Um, f.mean = Bm, f.meanBy = $m, f.min = Vm, f.minBy = zm, f.stubArray = ca, f.stubFalse = la, f.stubObject = Om, f.stubString = Im, f.stubTrue = Rm, f.multiply = Hm, f.nth = ig, f.noConflict = _m, f.noop = fa, f.now = bi, f.pad = G0, f.padEnd = q0, f.padStart = Y0, f.parseInt = K0, f.random = F0, f.reduce = sv, f.reduceRight = uv, f.repeat = Z0, f.replace = j0, f.result = T0, f.round = Gm, f.runInContext = g, f.sample = cv, f.size = hv, f.snakeCase = X0, f.some = pv, f.sortedIndex = lg, f.sortedIndexBy = dg, f.sortedIndexOf = hg, f.sortedLastIndex = pg, f.sortedLastIndexBy = gg, f.sortedLastIndexOf = vg, f.startCase = Q0, f.startsWith = em, f.subtract = qm, f.sum = Ym, f.sumBy = Km, f.template = nm, f.times = Mm, f.toFinite = nr, f.toInteger = Q, f.toLength = uf, f.toLower = rm, f.toNumber = Sn, f.toSafeInteger = r0, f.toString = de, f.toUpper = tm, f.trim = im, f.trimEnd = om, f.trimStart = am, f.truncate = sm, f.unescape = um, f.uniqueId = Nm, f.upperCase = fm, f.upperFirst = oa, f.each = Yu, f.eachRight = Ku, f.first = zu, ua(f, function() {
        var e = {};
        return Un(f, function(n, r) {
          ge.call(f.prototype, r) || (e[r] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = u, wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), wn(["drop", "take"], function(e, n) {
        ie.prototype[e] = function(r) {
          r = r === t ? 1 : Ie(Q(r), 0);
          var a = this.__filtered__ && !n ? new ie(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = We(r, a.__takeCount__) : a.__views__.push({
            size: We(r, ze),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, ie.prototype[e + "Right"] = function(r) {
          return this.reverse()[e](r).reverse();
        };
      }), wn(["filter", "map", "takeWhile"], function(e, n) {
        var r = n + 1, a = r == qn || r == tr;
        ie.prototype[e] = function(s) {
          var c = this.clone();
          return c.__iteratees__.push({
            iteratee: $(s, 3),
            type: r
          }), c.__filtered__ = c.__filtered__ || a, c;
        };
      }), wn(["head", "last"], function(e, n) {
        var r = "take" + (n ? "Right" : "");
        ie.prototype[e] = function() {
          return this[r](1).value()[0];
        };
      }), wn(["initial", "tail"], function(e, n) {
        var r = "drop" + (n ? "" : "Right");
        ie.prototype[e] = function() {
          return this.__filtered__ ? new ie(this) : this[r](1);
        };
      }), ie.prototype.compact = function() {
        return this.filter(tn);
      }, ie.prototype.find = function(e) {
        return this.filter(e).head();
      }, ie.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ie.prototype.invokeMap = ne(function(e, n) {
        return typeof e == "function" ? new ie(this) : this.map(function(r) {
          return mt(r, e, n);
        });
      }), ie.prototype.reject = function(e) {
        return this.filter(yi($(e)));
      }, ie.prototype.slice = function(e, n) {
        e = Q(e);
        var r = this;
        return r.__filtered__ && (e > 0 || n < 0) ? new ie(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), n !== t && (n = Q(n), r = n < 0 ? r.dropRight(-n) : r.take(n - e)), r);
      }, ie.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ie.prototype.toArray = function() {
        return this.take(ze);
      }, Un(ie.prototype, function(e, n) {
        var r = /^(?:filter|find|map|reject)|While$/.test(n), a = /^(?:head|last)$/.test(n), s = f[a ? "take" + (n == "last" ? "Right" : "") : n], c = a || /^find/.test(n);
        s && (f.prototype[n] = function() {
          var d = this.__wrapped__, h = a ? [1] : arguments, v = d instanceof ie, C = h[0], T = v || X(d), I = function(re) {
            var oe = s.apply(f, ur([re], h));
            return a && L ? oe[0] : oe;
          };
          T && r && typeof C == "function" && C.length != 1 && (v = T = !1);
          var L = this.__chain__, B = !!this.__actions__.length, z = c && !L, ee = v && !B;
          if (!c && T) {
            d = ee ? d : new ie(this);
            var H = e.apply(d, h);
            return H.__actions__.push({ func: mi, args: [I], thisArg: t }), new _n(H, L);
          }
          return z && ee ? e.apply(this, h) : (H = this.thru(I), z ? a ? H.value()[0] : H.value() : H);
        });
      }), wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Vt[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var s = arguments;
          if (a && !this.__chain__) {
            var c = this.value();
            return n.apply(X(c) ? c : [], s);
          }
          return this[r](function(d) {
            return n.apply(X(d) ? d : [], s);
          });
        };
      }), Un(ie.prototype, function(e, n) {
        var r = f[n];
        if (r) {
          var a = r.name + "";
          ge.call(Yr, a) || (Yr[a] = []), Yr[a].push({ name: n, func: r });
        }
      }), Yr[fi(t, V).name] = [{
        name: "wrapper",
        func: t
      }], ie.prototype.clone = uh, ie.prototype.reverse = fh, ie.prototype.value = ch, f.prototype.at = Ug, f.prototype.chain = Bg, f.prototype.commit = $g, f.prototype.next = Vg, f.prototype.plant = Hg, f.prototype.reverse = Gg, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = qg, f.prototype.first = f.prototype.head, ct && (f.prototype[ct] = zg), f;
    }, Hr = $d();
    Er ? ((Er.exports = Hr)._ = Hr, ao._ = Hr) : Pe._ = Hr;
  }).call(et);
})($i, $i.exports);
var Ta = $i.exports;
const Tb = ({ color: o, selected: i, children: t, ...u }, l) => /* @__PURE__ */ nt(
  "div",
  {
    ref: l,
    css: {
      paddingBottom: "100%",
      position: "relative",
      width: "100%",
      cursor: "pointer"
    },
    ...u,
    children: [
      /* @__PURE__ */ nt(
        "div",
        {
          css: {
            backgroundColor: "#fff",
            backgroundPosition: "0 0, 6px 6px",
            backgroundSize: "12px 12px",
            inset: 0,
            position: "absolute",
            backgroundImage: "linear-gradient(-45deg,rgba(57,76,96,.15) 25%,transparent 25%,transparent 75%,rgba(57,76,96,.15) 75%),linear-gradient(-45deg,rgba(57,76,96,.15) 25%,transparent 25%,transparent 75%,rgba(57,76,96,.15) 75%)"
          },
          children: [
            /* @__PURE__ */ me(
              "div",
              {
                css: {
                  borderRadius: 4,
                  overflow: "hidden",
                  background: o,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  boxShadow: "inset 0 0 0 1px rgba(57,76,96,.15)"
                }
              }
            ),
            /* @__PURE__ */ me(
              "div",
              {
                css: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: i && new ki(i).toRgbString() === new ki(o).toRgbString() ? "0 0 0 1px #3d8eff,inset 0 0 0 2px #009ef7,inset 0 0 0 4px #fff" : void 0
                }
              }
            )
          ]
        }
      ),
      t
    ]
  }
), e_ = qf(Tb);
var Ob = function(i) {
  return /* @__PURE__ */ ga("svg", ba({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    width: "1em",
    height: "1em"
  }, i, {
    children: /* @__PURE__ */ ga("path", {
      d: "M224 67.3a35.79 35.79 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51 2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3ZM97 193a24 24 0 0 1-24 6 8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51 33.94 34ZM202.13 82l-25.37 25.52a8 8 0 0 0 0 11.3l4.89 4.89a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 11.33 0l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"
    })
  }));
}, Pr = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Vi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Ib = typeof navigator < "u" && /Mac/.test(navigator.platform), Rb = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var De = 0; De < 10; De++)
  Pr[48 + De] = Pr[96 + De] = String(De);
for (var De = 1; De <= 24; De++)
  Pr[De + 111] = "F" + De;
for (var De = 65; De <= 90; De++)
  Pr[De] = String.fromCharCode(De + 32), Vi[De] = String.fromCharCode(De);
for (var ha in Pr)
  Vi.hasOwnProperty(ha) || (Vi[ha] = Pr[ha]);
function Bf(o) {
  var i = Ib && o.metaKey && o.shiftKey && !o.ctrlKey && !o.altKey || Rb && o.shiftKey && o.key && o.key.length == 1 || o.key == "Unidentified", t = !i && o.key || (o.shiftKey ? Vi : Pr)[o.keyCode] || o.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Oa = (o, i = 0, t = 1) => o > t ? t : o < i ? i : o, hl = ({ style: o, left: i, top: t = 0.5 }) => {
  const u = {
    top: `${t * 100}%`,
    left: `${i * 100}%`
  };
  return /* @__PURE__ */ me(
    "div",
    {
      css: {
        position: "absolute",
        width: 8,
        height: 8,
        transform: "translate(-50%,-50%)",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 2px 5px rgba(57,76,96,.15), 0 0 0 1px rgba(64,87,109,.07)",
        zIndex: 2,
        transition: "width height .1s",
        ...o
      },
      style: u
    }
  );
};
var Mb = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, $f = !1, pl = /* @__PURE__ */ ka(function(o, i) {
  process.env.NODE_ENV !== "production" && !$f && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (o.className || o.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), $f = !0);
  var t = o.styles, u = Rt([t], void 0, Be.useContext(Ki)), l = Be.useRef();
  return Mf(function() {
    var p = i.key + "-global", m = new i.sheet.constructor({
      key: p,
      nonce: i.sheet.nonce,
      container: i.sheet.container,
      speedy: i.sheet.isSpeedy
    }), S = !1, M = document.querySelector('style[data-emotion="' + p + " " + u.name + '"]');
    return i.sheet.tags.length && (m.before = i.sheet.tags[0]), M !== null && (S = !0, M.setAttribute("data-emotion", p), m.hydrate([M])), l.current = [m, S], function() {
      m.flush();
    };
  }, [i]), Mf(function() {
    var p = l.current, m = p[0], S = p[1];
    if (S) {
      p[1] = !1;
      return;
    }
    if (u.next !== void 0 && Da(i, u.next, !0), m.tags.length) {
      var M = m.tags[m.tags.length - 1].nextElementSibling;
      m.before = M, m.flush();
    }
    i.insert("", u, m, !1);
  }, [i, u.name]), null;
});
process.env.NODE_ENV !== "production" && (pl.displayName = "EmotionGlobal");
function Pb() {
  for (var o = arguments.length, i = new Array(o), t = 0; t < o; t++)
    i[t] = arguments[t];
  return Rt(i);
}
var Nb = function o(i) {
  for (var t = i.length, u = 0, l = ""; u < t; u++) {
    var p = i[u];
    if (p != null) {
      var m = void 0;
      switch (typeof p) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(p))
            m = o(p);
          else {
            process.env.NODE_ENV !== "production" && p.styles !== void 0 && p.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), m = "";
            for (var S in p)
              p[S] && S && (m && (m += " "), m += S);
          }
          break;
        }
        default:
          m = p;
      }
      m && (l && (l += " "), l += m);
    }
  }
  return l;
};
function Lb(o, i, t) {
  var u = [], l = tc(o, u, t);
  return u.length < 2 ? t : l + i(u);
}
var Db = function(i) {
  var t = i.cache, u = i.serializedArr;
  return uc(function() {
    for (var l = 0; l < u.length; l++)
      Da(t, u[l], !1);
  }), null;
}, Wb = /* @__PURE__ */ ka(function(o, i) {
  var t = !1, u = [], l = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var D = arguments.length, N = new Array(D), k = 0; k < D; k++)
      N[k] = arguments[k];
    var x = Rt(N, i.registered);
    return u.push(x), La(i, x, !1), i.key + "-" + x.name;
  }, p = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var D = arguments.length, N = new Array(D), k = 0; k < D; k++)
      N[k] = arguments[k];
    return Lb(i.registered, l, Nb(N));
  }, m = {
    css: l,
    cx: p,
    theme: Be.useContext(Ki)
  }, S = o.children(m);
  return t = !0, /* @__PURE__ */ Be.createElement(Be.Fragment, null, /* @__PURE__ */ Be.createElement(Db, {
    cache: i,
    serializedArr: u
  }), S);
});
process.env.NODE_ENV !== "production" && (Wb.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Vf = !0, Fb = typeof jest < "u" || typeof vi < "u";
  if (Vf && !Fb) {
    var zf = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Vf ? window : global
    ), Hf = "__EMOTION_REACT_" + Mb.version.split(".")[0] + "__";
    zf[Hf] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), zf[Hf] = !0;
  }
}
const kb = ({ font: o }) => {
  const i = Yf(() => {
    const t = [];
    return o.fonts.forEach((u) => {
      var l, p;
      t.push(`
                @font-face {
                  font-family: '${o.name}';
                  font-weight: ${((l = u.style) == null ? void 0 : l.replace("_Italic", "")) || "normal"};
                  ${(p = u.style) != null && p.includes("_Italic") ? `font-style: italic;
` : ""}
                  src: url(${u.urls.join(",")}) format('woff2');
                  font-display: block;
                }
            `);
    }), t.join(`
`);
  }, [o]);
  return /* @__PURE__ */ ga(
    pl,
    {
      styles: Pb`
        ${i}
      `
    }
  );
};
Pt.memo(kb);
function At(o) {
  const i = vr(o), t = vr((u) => {
    i.current && i.current(u);
  });
  return i.current = o, t.current;
}
const Mt = (o) => "touches" in o, Ub = (o, i) => {
  for (let t = 0; t < o.length; t++)
    if (o[t].identifier === i)
      return o[t];
  return o[0];
}, Ia = (o) => o && o.ownerDocument.defaultView || window.self, pa = (o, i, t) => {
  const u = o.getBoundingClientRect(), l = Mt(i) ? Ub(i.touches, t) : i;
  return {
    left: Oa(
      (l.pageX - (u.left + Ia(o).pageXOffset)) / u.width
    ),
    top: Oa(
      (l.pageY - (u.top + Ia(o).pageYOffset)) / u.height
    )
  };
}, Gf = (o) => {
  !Mt(o) && o.preventDefault();
}, Bb = (o, i) => i && !Mt(o), $b = ({
  onMove: o,
  onMoveStart: i,
  onMoveEnd: t,
  onKey: u,
  ...l
}) => {
  const p = vr(null), m = At(o), S = At(i), M = At(t), D = At(u), N = vr(null), k = vr(!1), [x, O, b] = Yf(() => {
    const y = ({
      nativeEvent: A
    }) => {
      const _ = p.current;
      if (_ && (Gf(A), !(Bb(A, k.current) || !_))) {
        if (Mt(A)) {
          k.current = !0;
          const G = A.changedTouches || [];
          G.length && (N.current = G[0].identifier);
        }
        _.focus(), S && S(
          pa(_, A, N.current)
        ), m(pa(_, A, N.current)), P(!0);
      }
    }, R = (A) => {
      Gf(A), (Mt(A) ? A.touches.length > 0 : A.buttons > 0) && p.current ? m(
        pa(p.current, A, N.current)
      ) : P(!1);
    }, V = () => {
      P(!1), M && M();
    }, te = (A) => {
      const _ = A.which || A.keyCode;
      _ < 37 || _ > 40 || (A.preventDefault(), D({
        left: _ === 39 ? 0.05 : _ === 37 ? -0.05 : 0,
        top: _ === 40 ? 0.05 : _ === 38 ? -0.05 : 0
      }));
    };
    function P(A) {
      const _ = k.current, G = p.current, K = Ia(G), Ke = A ? K.addEventListener : K.removeEventListener;
      Ke(_ ? "touchmove" : "mousemove", R), Ke(_ ? "touchend" : "mouseup", V);
    }
    return [y, te, P];
  }, [D, m]);
  return va(() => b, [b]), /* @__PURE__ */ me(
    "div",
    {
      ...l,
      ref: p,
      css: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: "inherit",
        outline: "none",
        /* Don't trigger the default scrolling behavior when the event is originating from this element */
        touchAction: "none"
      },
      tabIndex: 0,
      onKeyDown: O,
      onMouseDown: x,
      onTouchStart: x
    }
  );
}, Ha = Pt.memo($b), Vb = ({ hsva: o, onChange: i }) => {
  const [t, u] = zi(!1), l = () => {
    u(!0);
  }, p = () => {
    u(!1);
  }, m = (k) => {
    i({ a: k.left });
  }, S = (k) => {
    i({ a: Oa(o.a + k.left) });
  }, M = Wi(Object.assign({}, o, { a: 0 })), D = Wi(Object.assign({}, o, { a: 1 })), N = {
    backgroundImage: `linear-gradient(90deg, ${M}, ${D})`
  };
  return /* @__PURE__ */ me(
    "div",
    {
      css: {
        position: "relative",
        backgroundImage: "linear-gradient(-45deg,rgba(57,76,96,.15) 25%,transparent 25%,transparent 75%,rgba(57,76,96,.15) 75%),linear-gradient(-45deg,rgba(57,76,96,.15) 25%,transparent 25%,transparent 75%,rgba(57,76,96,.15) 75%)",
        backgroundSize: "8px 8px",
        backgroundPosition: "0  0, 4px 4px",
        backgroundColor: "#fff",
        boxShadow: "inset 0 0 0 1px rgba(57,76,96,.15)",
        cursor: "pointer",
        borderRadius: 6
      },
      children: /* @__PURE__ */ me(
        "div",
        {
          css: {
            borderRadius: 6,
            height: 12,
            background: "linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)"
          },
          style: N,
          children: /* @__PURE__ */ me(
            Ha,
            {
              onKey: S,
              onMove: m,
              onMoveEnd: p,
              onMoveStart: l,
              children: /* @__PURE__ */ me(
                hl,
                {
                  left: o.a,
                  style: {
                    width: t ? 12 : 8,
                    height: t ? 12 : 8,
                    ":hover": {
                      width: 12,
                      height: 12
                    }
                  }
                }
              )
            }
          )
        }
      )
    }
  );
}, zb = ({ hue: o, onChange: i }) => {
  const [t, u] = zi(!1), l = () => {
    u(!0);
  }, p = () => {
    u(!1);
  }, m = (M) => {
    i({ h: 360 * M.left });
  }, S = (M) => {
    i({
      h: Ta.clamp(o + M.left * 360, 0, 360)
    });
  };
  return /* @__PURE__ */ me(
    "div",
    {
      css: {
        borderRadius: 6,
        position: "relative",
        height: 12,
        background: "linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)",
        cursor: "pointer"
      },
      children: /* @__PURE__ */ me(
        Ha,
        {
          "aria-label": "Hue",
          "aria-valuemax": "360",
          "aria-valuemin": "0",
          "aria-valuenow": Math.round(o),
          onKey: S,
          onMove: m,
          onMoveEnd: p,
          onMoveStart: l,
          children: /* @__PURE__ */ me(
            hl,
            {
              left: o / 360,
              style: {
                width: t ? 12 : 8,
                height: t ? 12 : 8,
                ":hover": {
                  width: 12,
                  height: 12
                }
              }
            }
          )
        }
      )
    }
  );
}, Hb = Pt.memo(zb), Gb = ({ zIndex: o, color: i, left: t, top: u = 0.5 }) => {
  const l = {
    top: `${u * 100}%`,
    left: `${t * 100}%`
  };
  return /* @__PURE__ */ me(
    "div",
    {
      css: {
        position: "absolute",
        width: 14,
        height: 14,
        transform: "translate(-50%,-50%)",
        background: "#fff",
        border: "3px solid #fff",
        borderRadius: "50%",
        boxShadow: "0 2px 5px rgba(57,76,96,.15), 0 0 0 1px rgba(64,87,109,.07)",
        zIndex: o
      },
      style: l,
      children: /* @__PURE__ */ me(
        "div",
        {
          css: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            borderRadius: "inherit"
          },
          style: { backgroundColor: i }
        }
      )
    }
  );
}, qb = ({ hsva: o, onChange: i }) => {
  const t = (p) => {
    i({
      s: p.left * 100,
      v: 100 - p.top * 100
    });
  }, u = (p) => {
    i({
      s: Ta.clamp(o.s + p.left * 100, 0, 100),
      v: Ta.clamp(o.v - p.top * 100, 0, 100)
    });
  }, l = {
    backgroundColor: Wi({ h: o.h, s: 100, v: 100, a: 1 })
  };
  return /* @__PURE__ */ me(
    "div",
    {
      css: {
        position: "relative",
        flexGrow: 1,
        borderColor: "transparent",
        borderRadius: 4,
        height: 112,
        backgroundImage: "linear-gradient(to top, #000, rgba(0, 0, 0, 0)), linear-gradient(to right, #fff, rgba(255, 255, 255, 0))",
        cursor: "pointer"
      },
      style: l,
      children: /* @__PURE__ */ me(
        Ha,
        {
          "aria-label": "Color",
          "aria-valuetext": `Saturation ${Math.round(
            o.s
          )}%, Brightness ${Math.round(o.v)}%`,
          onKey: u,
          onMove: t,
          children: /* @__PURE__ */ me(
            Gb,
            {
              color: Wi(o),
              left: o.s / 100,
              top: 1 - o.v / 100,
              zIndex: 3
            }
          )
        }
      )
    }
  );
}, Yb = Pt.memo(qb), gl = (o, i) => {
  if (o === i)
    return !0;
  for (const t in o)
    if (o[t] !== i[t])
      return !1;
  return !0;
}, Kb = (o, i) => o.toLowerCase() === i.toLowerCase() ? !0 : gl(Fi(o), Fi(i));
function Zb(o, i, t) {
  const u = At(t), [l, p] = zi(
    () => o.toHsva(i)
  ), m = vr({ color: i, hsva: l });
  va(() => {
    if (!o.equal(i, m.current.color)) {
      const M = o.toHsva(i);
      m.current = { hsva: M, color: i }, p(M);
    }
  }, [i, o]), va(() => {
    let M;
    !gl(l, m.current.hsva) && !o.equal(
      M = o.fromHsva(l),
      m.current.color
    ) && (m.current = { hsva: l, color: M }, u(M));
  }, [l, o, u]);
  const S = jm((M) => {
    p((D) => Object.assign({}, D, M));
  }, []);
  return [l, S];
}
const jb = ({
  colorModel: o,
  color: i = o.defaultColor,
  onChange: t,
  enableAlpha: u,
  ...l
}) => {
  const p = vr(null), m = vr(null), [S, M] = zi(!1), [D, N] = Zb(
    o,
    i,
    t
  ), k = (A) => {
    const _ = Bf(A.nativeEvent), G = Uf(_, A.nativeEvent);
    !/[A-F0-9]/.test(G.toUpperCase()) && ![
      "Backspace",
      "Delete",
      Ti("Mod-v"),
      Ti("Mod-a")
    ].includes(G) && A.preventDefault();
  }, x = (A) => {
    const _ = A.replace(/^#/, "");
    _.length >= 3 ? N(Mi(`#${_}`)) : N(Mi(_ === "" ? "#ffffff" : `#${_}${_}00000`.slice(0, 7)));
  }, O = (A) => {
    const _ = A.target.value.replace(/^#/, "");
    x(_), A.target.value = `#${_}`;
  }, b = (A) => {
    const G = `${A.clipboardData.getData("text").toUpperCase().replaceAll(/([^A-F0-9])/g, "")}`.slice(0, 6);
    x(G), A.target.value = `#${G}`, A.preventDefault();
  }, y = (A) => {
    const _ = Bf(A.nativeEvent), G = Uf(_, A.nativeEvent);
    !/[0-9]/.test(G) && ![
      "Backspace",
      "Delete",
      Ti("Mod-v"),
      Ti("Mod-a")
    ].includes(G) && A.preventDefault();
  }, R = (A) => {
    const _ = parseInt(A.target.value, 10) || 0, G = Math.max(0, Math.min(100, _));
    N({ ...D, a: G * 0.01 }), A.target.value = G.toString();
  }, V = (A) => {
    const G = A.clipboardData.getData("text").replaceAll(/([^0-9])/g, ""), K = Math.max(0, Math.min(100, parseInt(G, 10)));
    A.target.value = K.toString(), N({ ...D, a: K * 0.01 }), A.preventDefault();
  }, te = (A) => {
    m.current.value = Ua({
      ...D,
      ...A
    }).slice(0, 7), N(A);
  }, P = async () => {
    if (window.EyeDropper) {
      const _ = await new window.EyeDropper().open();
      m.current.value = new ki(
        _.sRGBHex
      ).toHex(), x(new ki(_.sRGBHex).toHex());
    }
  };
  return /* @__PURE__ */ nt(
    "div",
    {
      ...l,
      ref: p,
      css: { position: "relative", width: "100%", display: "grid", rowGap: 8 },
      children: [
        /* @__PURE__ */ me(Yb, { hsva: D, onChange: te }),
        /* @__PURE__ */ me(Hb, { hue: D.h, onChange: te }),
        u && /* @__PURE__ */ me(Vb, { hsva: D, onChange: te }),
        /* @__PURE__ */ nt("div", { css: { display: "flex" }, children: [
          /* @__PURE__ */ nt(
            "div",
            {
              css: {
                flexGrow: 1,
                borderWidth: 1,
                borderRadius: 4,
                fontSize: 14,
                lineHeight: "36px",
                color: "rgb(94, 98, 120)",
                marginRight: 8,
                display: "flex",
                overflow: "hidden",
                borderColor: S ? "#3d8eff" : "rgb(217, 219, 228)"
              },
              children: [
                /* @__PURE__ */ me("div", { css: { flexGrow: 1 }, children: /* @__PURE__ */ me(
                  "input",
                  {
                    ref: m,
                    css: {
                      width: "100%",
                      height: "100%",
                      textAlign: u ? "left" : "center",
                      textTransform: "uppercase",
                      padding: "0 12px"
                    },
                    defaultValue: i,
                    maxLength: 7,
                    type: "text",
                    onBlur: () => M(!1),
                    onChange: O,
                    onFocus: (A) => {
                      A.target.select(), M(!0);
                    },
                    onKeyDown: k,
                    onPaste: b
                  }
                ) }),
                u && /* @__PURE__ */ nt(
                  "div",
                  {
                    css: {
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      width: 80,
                      paddingLeft: 12
                    },
                    children: [
                      /* @__PURE__ */ me(
                        "input",
                        {
                          css: {
                            width: "100%",
                            height: "100%",
                            textAlign: "right",
                            padding: "0 8px"
                          },
                          defaultValue: Math.round(D.a * 100),
                          type: "text",
                          onChange: R,
                          onFocus: (A) => {
                            A.target.select();
                          },
                          onKeyDown: y,
                          onPaste: V
                        }
                      ),
                      /* @__PURE__ */ me(
                        "span",
                        {
                          css: {
                            color: "rgba(13,18,22,.7)",
                            padding: "0 8px",
                            flexShrink: 0
                          },
                          children: "%"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ me("div", { css: {}, children: /* @__PURE__ */ me(
            "div",
            {
              css: {
                width: 38,
                height: 38,
                border: "1px solid rgb(217, 219, 228)",
                background: window.EyeDropper ? void 0 : i,
                borderRadius: 4,
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: window.EyeDropper ? "pointer" : void 0
              },
              onClick: P,
              children: window.EyeDropper && /* @__PURE__ */ me(Ob, {})
            }
          ) })
        ] })
      ]
    }
  );
}, Xb = {
  defaultColor: "000",
  toHsva: Mi,
  fromHsva: ({ h: o, s: i, v: t, a: u }) => Ua({ h: o, s: i, v: t, a: u }),
  equal: Kb
}, n_ = (o) => /* @__PURE__ */ me(jb, { ...o, colorModel: Xb });
export {
  e_ as ColorIcon,
  n_ as ColorPicker
};

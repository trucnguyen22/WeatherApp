var R = Object.defineProperty;
var F = (t, n, e) =>
  n in t
    ? R(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (t[n] = e);
var f = (t, n, e) => (F(t, typeof n != "symbol" ? n + "" : n, e), e);
function H() {}
const ot = (t) => t;
function G(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function at(t) {
  return (
    !!t &&
    (typeof t == "object" || typeof t == "function") &&
    typeof t.then == "function"
  );
}
function z(t) {
  return t();
}
function ut() {
  return Object.create(null);
}
function I(t) {
  t.forEach(z);
}
function W(t) {
  return typeof t == "function";
}
function ft(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
let m;
function _t(t, n) {
  return t === n
    ? !0
    : (m || (m = document.createElement("a")), (m.href = n), t === m.href);
}
function dt(t) {
  return Object.keys(t).length === 0;
}
function J(t, ...n) {
  if (t == null) {
    for (const i of n) i(void 0);
    return H;
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function ht(t, n, e) {
  t.$$.on_destroy.push(J(n, e));
}
function mt(t, n, e, i) {
  if (t) {
    const s = L(t, n, e, i);
    return t[0](s);
  }
}
function L(t, n, e, i) {
  return t[1] && i ? G(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function pt(t, n, e, i) {
  if (t[2] && i) {
    const s = t[2](i(e));
    if (n.dirty === void 0) return s;
    if (typeof s == "object") {
      const l = [],
        r = Math.max(n.dirty.length, s.length);
      for (let o = 0; o < r; o += 1) l[o] = n.dirty[o] | s[o];
      return l;
    }
    return n.dirty | s;
  }
  return n.dirty;
}
function yt(t, n, e, i, s, l) {
  if (s) {
    const r = L(n, e, i, l);
    t.p(r, s);
  }
}
function gt(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let i = 0; i < e; i++) n[i] = -1;
    return n;
  }
  return -1;
}
function bt(t) {
  const n = {};
  for (const e in t) e[0] !== "$" && (n[e] = t[e]);
  return n;
}
function xt(t, n) {
  const e = {};
  n = new Set(n);
  for (const i in t) !n.has(i) && i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function Et(t) {
  return t ?? "";
}
function Nt(t, n, e) {
  return t.set(e), n;
}
function Tt(t) {
  return t && W(t.destroy) ? t.destroy : H;
}
function wt(t) {
  const n = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return n ? [parseFloat(n[1]), n[2] || "px"] : [t, "px"];
}
let y = !1;
function kt() {
  y = !0;
}
function vt() {
  y = !1;
}
function K(t, n, e, i) {
  for (; t < n; ) {
    const s = t + ((n - t) >> 1);
    e(s) <= i ? (t = s + 1) : (n = s);
  }
  return t;
}
function Q(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a];
      u.claim_order !== void 0 && c.push(u);
    }
    n = c;
  }
  const e = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  e[0] = -1;
  let s = 0;
  for (let c = 0; c < n.length; c++) {
    const a = n[c].claim_order,
      u =
        (s > 0 && n[e[s]].claim_order <= a
          ? s + 1
          : K(1, s, (O) => n[e[O]].claim_order, a)) - 1;
    i[c] = e[u] + 1;
    const v = u + 1;
    (e[v] = c), (s = Math.max(v, s));
  }
  const l = [],
    r = [];
  let o = n.length - 1;
  for (let c = e[s] + 1; c != 0; c = i[c - 1]) {
    for (l.push(n[c - 1]); o >= c; o--) r.push(n[o]);
    o--;
  }
  for (; o >= 0; o--) r.push(n[o]);
  l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
  for (let c = 0, a = 0; c < r.length; c++) {
    for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++;
    const u = a < l.length ? l[a] : null;
    t.insertBefore(r[c], u);
  }
}
function U(t, n) {
  t.appendChild(n);
}
function V(t) {
  if (!t) return document;
  const n = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return n && n.host ? n : t.ownerDocument;
}
function At(t) {
  const n = w("style");
  return (n.textContent = "/* empty */"), X(V(t), n), n.sheet;
}
function X(t, n) {
  return U(t.head || t, n), n.sheet;
}
function Y(t, n) {
  if (y) {
    for (
      Q(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function Z(t, n, e) {
  t.insertBefore(n, e || null);
}
function $(t, n, e) {
  y && !e
    ? Y(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function St(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function w(t) {
  return document.createElement(t);
}
function M(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function k(t) {
  return document.createTextNode(t);
}
function Dt() {
  return k(" ");
}
function Ht() {
  return k("");
}
function Lt(t, n, e, i) {
  return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function Mt(t) {
  return function (n) {
    return n.preventDefault(), t.call(this, n);
  };
}
function jt(t) {
  return function (n) {
    return n.stopPropagation(), t.call(this, n);
  };
}
function Ct(t) {
  return function (n) {
    n.target === this && t.call(this, n);
  };
}
function j(t, n, e) {
  e == null
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function Pt(t, n) {
  for (const e in n) j(t, e, n[e]);
}
function qt(t, n, e) {
  n in t ? (t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e) : j(t, n, e);
}
function Bt(t) {
  return t.dataset.svelteH;
}
function Ot(t, n, e) {
  const i = new Set();
  for (let s = 0; s < t.length; s += 1) t[s].checked && i.add(t[s].__value);
  return e || i.delete(n), Array.from(i);
}
function Rt(t) {
  let n;
  return {
    p(...e) {
      (n = e), n.forEach((i) => t.push(i));
    },
    r() {
      n.forEach((e) => t.splice(t.indexOf(e), 1));
    },
  };
}
function Ft(t) {
  return t === "" ? null : +t;
}
function Gt(t) {
  return Array.from(t.childNodes);
}
function C(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, n, e, i, s = !1) {
  C(t);
  const l = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const o = t[r];
      if (n(o)) {
        const c = e(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s || (t.claim_info.last_index = r),
          o
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const o = t[r];
      if (n(o)) {
        const c = e(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          o
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function q(t, n, e, i) {
  return P(
    t,
    (s) => s.nodeName === n,
    (s) => {
      const l = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const o = s.attributes[r];
        e[o.name] || l.push(o.name);
      }
      l.forEach((r) => s.removeAttribute(r));
    },
    () => i(n)
  );
}
function zt(t, n, e) {
  return q(t, n, e, w);
}
function It(t, n, e) {
  return q(t, n, e, M);
}
function tt(t, n) {
  return P(
    t,
    (e) => e.nodeType === 3,
    (e) => {
      const i = "" + n;
      if (e.data.startsWith(i)) {
        if (e.data.length !== i.length) return e.splitText(i.length);
      } else e.data = i;
    },
    () => k(n),
    !0
  );
}
function Wt(t) {
  return tt(t, " ");
}
function A(t, n, e) {
  for (let i = e; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === n) return i;
  }
  return t.length;
}
function Jt(t, n) {
  const e = A(t, "HTML_TAG_START", 0),
    i = A(t, "HTML_TAG_END", e);
  if (e === i) return new S(void 0, n);
  C(t);
  const s = t.splice(e, i - e + 1);
  E(s[0]), E(s[s.length - 1]);
  const l = s.slice(1, s.length - 1);
  for (const r of l)
    (r.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new S(l, n);
}
function Kt(t, n) {
  (n = "" + n), t.data !== n && (t.data = n);
}
function Qt(t, n) {
  t.value = n ?? "";
}
function Ut(t, n, e, i) {
  e == null
    ? t.style.removeProperty(n)
    : t.style.setProperty(n, e, i ? "important" : "");
}
function Vt(t, n, e) {
  for (let i = 0; i < t.options.length; i += 1) {
    const s = t.options[i];
    if (s.__value === n) {
      s.selected = !0;
      return;
    }
  }
  (!e || n !== void 0) && (t.selectedIndex = -1);
}
function Xt(t) {
  const n = t.querySelector(":checked");
  return n && n.__value;
}
function Yt(t, n, e) {
  t.classList.toggle(n, !!e);
}
function nt(t, n, { bubbles: e = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: n, bubbles: e, cancelable: i });
}
function Zt(t, n) {
  const e = [];
  let i = 0;
  for (const s of n.childNodes)
    if (s.nodeType === 8) {
      const l = s.textContent.trim();
      l === `HEAD_${t}_END`
        ? ((i -= 1), e.push(s))
        : l === `HEAD_${t}_START` && ((i += 1), e.push(s));
    } else i > 0 && e.push(s);
  return e;
}
class et {
  constructor(n = !1) {
    f(this, "is_svg", !1);
    f(this, "e");
    f(this, "n");
    f(this, "t");
    f(this, "a");
    (this.is_svg = n), (this.e = this.n = null);
  }
  c(n) {
    this.h(n);
  }
  m(n, e, i = null) {
    this.e ||
      (this.is_svg
        ? (this.e = M(e.nodeName))
        : (this.e = w(e.nodeType === 11 ? "TEMPLATE" : e.nodeName)),
      (this.t = e.tagName !== "TEMPLATE" ? e : e.content),
      this.c(n)),
      this.i(i);
  }
  h(n) {
    (this.e.innerHTML = n),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(n) {
    for (let e = 0; e < this.n.length; e += 1) Z(this.t, this.n[e], n);
  }
  p(n) {
    this.d(), this.h(n), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
class S extends et {
  constructor(e, i = !1) {
    super(i);
    f(this, "l");
    (this.e = this.n = null), (this.l = e);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let i = 0; i < this.n.length; i += 1) $(this.t, this.n[i], e);
  }
}
function $t(t, n) {
  return new t(n);
}
let p;
function b(t) {
  p = t;
}
function g() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function tn(t) {
  g().$$.on_mount.push(t);
}
function nn(t) {
  g().$$.after_update.push(t);
}
function en(t) {
  g().$$.on_destroy.push(t);
}
function sn() {
  const t = g();
  return (n, e, { cancelable: i = !1 } = {}) => {
    const s = t.$$.callbacks[n];
    if (s) {
      const l = nt(n, e, { cancelable: i });
      return (
        s.slice().forEach((r) => {
          r.call(t, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function rn(t, n) {
  const e = t.$$.callbacks[n.type];
  e && e.slice().forEach((i) => i.call(this, n));
}
const h = [],
  D = [];
let d = [];
const N = [],
  B = Promise.resolve();
let T = !1;
function it() {
  T || ((T = !0), B.then(rt));
}
function cn() {
  return it(), B;
}
function st(t) {
  d.push(t);
}
function ln(t) {
  N.push(t);
}
const x = new Set();
let _ = 0;
function rt() {
  if (_ !== 0) return;
  const t = p;
  do {
    try {
      for (; _ < h.length; ) {
        const n = h[_];
        _++, b(n), ct(n.$$);
      }
    } catch (n) {
      throw ((h.length = 0), (_ = 0), n);
    }
    for (b(null), h.length = 0, _ = 0; D.length; ) D.pop()();
    for (let n = 0; n < d.length; n += 1) {
      const e = d[n];
      x.has(e) || (x.add(e), e());
    }
    d.length = 0;
  } while (h.length);
  for (; N.length; ) N.pop()();
  (T = !1), x.clear(), b(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), I(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(st);
  }
}
function on(t) {
  const n = [],
    e = [];
  d.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))),
    e.forEach((i) => i()),
    (d = n);
}
export {
  _t as $,
  yt as A,
  gt as B,
  pt as C,
  xt as D,
  bt as E,
  Bt as F,
  Tt as G,
  Lt as H,
  I,
  ht as J,
  Nt as K,
  en as L,
  H as M,
  St as N,
  Zt as O,
  Qt as P,
  st as Q,
  Vt as R,
  Ft as S,
  ln as T,
  Ot as U,
  Xt as V,
  Rt as W,
  S as X,
  Jt as Y,
  Mt as Z,
  rn as _,
  Dt as a,
  J as a0,
  sn as a1,
  Et as a2,
  W as a3,
  ot as a4,
  wt as a5,
  jt as a6,
  Ct as a7,
  at as a8,
  g as a9,
  b as aa,
  rt as ab,
  qt as ac,
  V as ad,
  At as ae,
  nt as af,
  ut as ag,
  dt as ah,
  on as ai,
  p as aj,
  z as ak,
  h as al,
  it as am,
  kt as an,
  vt as ao,
  nn as b,
  Wt as c,
  E as d,
  Ht as e,
  w as f,
  zt as g,
  Gt as h,
  $ as i,
  j,
  Ut as k,
  k as l,
  tt as m,
  Kt as n,
  tn as o,
  D as p,
  $t as q,
  mt as r,
  ft as s,
  cn as t,
  G as u,
  M as v,
  It as w,
  Pt as x,
  Yt as y,
  Y as z,
};

import {
  s as j,
  f as p,
  l as A,
  a as S,
  g as k,
  h as B,
  m as I,
  c as w,
  d as b,
  j as d,
  y as V,
  i as E,
  z as g,
  H as q,
  n as D,
  r as L,
  A as O,
  B as U,
  C as z,
} from "./scheduler.f440829a.js";
import {
  S as F,
  i as G,
  a as y,
  g as J,
  t as C,
  c as K,
} from "./index.2c544bcc.js";
function Y(i) {
  let e = -44330.76067152236 * (Math.pow(i / 1013.25, 0.1902630958088845) - 1);
  return e <= 500
    ? `${Math.round(e / 10) * 10} m`
    : e <= 2e3
    ? `${Math.round(e / 100) * 100} m`
    : e <= 2e4
    ? `${Math.round(e / 100) / 10} km`
    : `${Math.round(e / 1e3)} km`;
}
function Z(i, e) {
  const t = [];
  for (let l = 0; l < i.length; l += e) {
    const a = i.slice(l, l + e);
    t.push(a);
  }
  return t;
}
function x(i, e) {
  return {
    total: i.reduce((t, l) => t + l.length, 0),
    active: i.reduce(
      (t, l) => t + l.reduce((a, n) => a + (e.includes(n.name) ? 1 : 0), 0),
      0
    ),
  };
}
function $(i, e, t) {
  return {
    total: i.length * e.length,
    active: i.reduce(
      (l, a) =>
        l +
        e.reduce((n, r) => n + (t.includes(`${a.name}_${r}hPa`) ? 1 : 0), 0),
      0
    ),
  };
}
function H(i) {
  let e,
    t = i[4].active + "",
    l,
    a = i[4].total > 0 && N(i);
  return {
    c() {
      (e = p("span")), (l = A(t)), a && a.c(), this.h();
    },
    l(n) {
      e = k(n, "SPAN", { class: !0 });
      var r = B(e);
      (l = I(r, t)), a && a.l(r), r.forEach(b), this.h();
    },
    h() {
      d(e, "class", "badge rounded-pill bg-secondary ms-2");
    },
    m(n, r) {
      E(n, e, r), g(e, l), a && a.m(e, null);
    },
    p(n, r) {
      r & 16 && t !== (t = n[4].active + "") && D(l, t),
        n[4].total > 0
          ? a
            ? a.p(n, r)
            : ((a = N(n)), a.c(), a.m(e, null))
          : a && (a.d(1), (a = null));
    },
    d(n) {
      n && b(e), a && a.d();
    },
  };
}
function N(i) {
  let e,
    t = i[4].total + "",
    l;
  return {
    c() {
      (e = A(" / ")), (l = A(t));
    },
    l(a) {
      (e = I(a, " / ")), (l = I(a, t));
    },
    m(a, n) {
      E(a, e, n), E(a, l, n);
    },
    p(a, n) {
      n & 16 && t !== (t = a[4].total + "") && D(l, t);
    },
    d(a) {
      a && (b(e), b(l));
    },
  };
}
function T(i) {
  let e, t, l, a, n;
  const r = i[7].default,
    u = L(r, i, i[6], null);
  return {
    c() {
      (e = p("div")), (t = p("div")), u && u.c(), this.h();
    },
    l(s) {
      e = k(s, "DIV", { id: !0, class: !0, "aria-labelledby": !0 });
      var o = B(e);
      t = k(o, "DIV", { class: !0 });
      var v = B(t);
      u && u.l(v), v.forEach(b), o.forEach(b), this.h();
    },
    h() {
      d(t, "class", "accordion-body row"),
        d(e, "id", (l = "collapse-" + i[2])),
        d(e, "class", "accordion-collapse"),
        d(e, "aria-labelledby", (a = "heading-" + i[2])),
        V(e, "collapse", !i[0]);
    },
    m(s, o) {
      E(s, e, o), g(e, t), u && u.m(t, null), (n = !0);
    },
    p(s, o) {
      u &&
        u.p &&
        (!n || o & 64) &&
        O(u, r, s, s[6], n ? z(r, s[6], o, null) : U(s[6]), null),
        (!n || (o & 4 && l !== (l = "collapse-" + s[2]))) && d(e, "id", l),
        (!n || (o & 4 && a !== (a = "heading-" + s[2]))) &&
          d(e, "aria-labelledby", a),
        (!n || o & 1) && V(e, "collapse", !s[0]);
    },
    i(s) {
      n || (y(u, s), (n = !0));
    },
    o(s) {
      C(u, s), (n = !1);
    },
    d(s) {
      s && b(e), u && u.d(s);
    },
  };
}
function Q(i) {
  let e,
    t,
    l,
    a,
    n,
    r,
    u,
    s,
    o,
    v,
    h,
    _ = i[4].active > 0 && H(i),
    c = i[1] && T(i);
  return {
    c() {
      (e = p("div")),
        (t = p("h2")),
        (l = p("button")),
        (a = A(i[3])),
        (n = S()),
        _ && _.c(),
        (s = S()),
        c && c.c(),
        this.h();
    },
    l(f) {
      e = k(f, "DIV", { class: !0 });
      var m = B(e);
      t = k(m, "H2", { class: !0, id: !0 });
      var P = B(t);
      l = k(P, "BUTTON", {
        class: !0,
        type: !0,
        "aria-expanded": !0,
        "aria-controls": !0,
      });
      var M = B(l);
      (a = I(M, i[3])),
        (n = w(M)),
        _ && _.l(M),
        M.forEach(b),
        P.forEach(b),
        (s = w(m)),
        c && c.l(m),
        m.forEach(b),
        this.h();
    },
    h() {
      d(l, "class", "accordion-button py-2"),
        d(l, "type", "button"),
        d(l, "aria-expanded", i[0]),
        d(l, "aria-controls", (r = "collapse-" + i[2])),
        V(l, "collapsed", !i[0]),
        d(t, "class", "accordion-header"),
        d(t, "id", (u = "heading-" + i[2])),
        d(e, "class", "accordion-item");
    },
    m(f, m) {
      E(f, e, m),
        g(e, t),
        g(t, l),
        g(l, a),
        g(l, n),
        _ && _.m(l, null),
        g(e, s),
        c && c.m(e, null),
        (o = !0),
        v || ((h = q(l, "click", i[5])), (v = !0));
    },
    p(f, [m]) {
      (!o || m & 8) && D(a, f[3]),
        f[4].active > 0
          ? _
            ? _.p(f, m)
            : ((_ = H(f)), _.c(), _.m(l, null))
          : _ && (_.d(1), (_ = null)),
        (!o || m & 1) && d(l, "aria-expanded", f[0]),
        (!o || (m & 4 && r !== (r = "collapse-" + f[2]))) &&
          d(l, "aria-controls", r),
        (!o || m & 1) && V(l, "collapsed", !f[0]),
        (!o || (m & 4 && u !== (u = "heading-" + f[2]))) && d(t, "id", u),
        f[1]
          ? c
            ? (c.p(f, m), m & 2 && y(c, 1))
            : ((c = T(f)), c.c(), y(c, 1), c.m(e, null))
          : c &&
            (J(),
            C(c, 1, 1, () => {
              c = null;
            }),
            K());
    },
    i(f) {
      o || (y(c), (o = !0));
    },
    o(f) {
      C(c), (o = !1);
    },
    d(f) {
      f && b(e), _ && _.d(), c && c.d(), (v = !1), h();
    },
  };
}
function R(i, e, t) {
  let { $$slots: l = {}, $$scope: a } = e,
    { id: n } = e,
    { title: r } = e,
    { count: u = { active: 0, total: 0 } } = e,
    { open: s = u.active > 0 } = e,
    { renderBody: o = s } = e;
  function v() {
    t(0, (s = !s)), t(1, (o = o || s));
  }
  return (
    (i.$$set = (h) => {
      "id" in h && t(2, (n = h.id)),
        "title" in h && t(3, (r = h.title)),
        "count" in h && t(4, (u = h.count)),
        "open" in h && t(0, (s = h.open)),
        "renderBody" in h && t(1, (o = h.renderBody)),
        "$$scope" in h && t(6, (a = h.$$scope));
    }),
    [s, o, n, r, u, v, a, l]
  );
}
class ee extends F {
  constructor(e) {
    super(),
      G(this, e, R, Q, j, {
        id: 2,
        title: 3,
        count: 4,
        open: 0,
        renderBody: 1,
      });
  }
}
export { ee as A, $ as a, Y as b, x as c, Z as s };

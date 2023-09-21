import {
  s as de,
  r as he,
  f as b,
  v as te,
  a as I,
  l as T,
  g as w,
  h as g,
  w as ae,
  d,
  c as C,
  m as j,
  F as fe,
  j as c,
  k as K,
  i as H,
  z as u,
  n as se,
  A as _e,
  B as pe,
  C as me,
  N as ue,
  J as ve,
  y as q,
} from "../chunks/scheduler.f440829a.js";
import {
  S as ge,
  i as be,
  a as we,
  t as Ee,
} from "../chunks/index.2c544bcc.js";
import { e as J } from "../chunks/each.27ca486b.js";
import { p as ye } from "../chunks/stores.49342b8d.js";
function ie(s, e, l) {
  const a = s.slice();
  return (a[5] = e[l]), a;
}
function re(s, e, l) {
  const a = s.slice();
  return (a[8] = e[l]), a;
}
function ne(s) {
  let e,
    l = J(s[5].children),
    a = [];
  for (let r = 0; r < l.length; r += 1) a[r] = oe(re(s, l, r));
  return {
    c() {
      e = b("ul");
      for (let r = 0; r < a.length; r += 1) a[r].c();
      this.h();
    },
    l(r) {
      e = w(r, "UL", { class: !0 });
      var o = g(e);
      for (let t = 0; t < a.length; t += 1) a[t].l(o);
      o.forEach(d), this.h();
    },
    h() {
      c(e, "class", "list-unstyled ms-3 mb-4 mt-1");
    },
    m(r, o) {
      H(r, e, o);
      for (let t = 0; t < a.length; t += 1) a[t] && a[t].m(e, null);
    },
    p(r, o) {
      if (o & 3) {
        l = J(r[5].children);
        let t;
        for (t = 0; t < l.length; t += 1) {
          const h = re(r, l, t);
          a[t] ? a[t].p(h, o) : ((a[t] = oe(h)), a[t].c(), a[t].m(e, null));
        }
        for (; t < a.length; t += 1) a[t].d(1);
        a.length = l.length;
      }
    },
    d(r) {
      r && d(e), ue(a, r);
    },
  };
}
function oe(s) {
  let e,
    l,
    a = s[8].title + "",
    r,
    o;
  return {
    c() {
      (e = b("li")), (l = b("a")), (r = T(a)), (o = I()), this.h();
    },
    l(t) {
      e = w(t, "LI", {});
      var h = g(e);
      l = w(h, "A", { href: !0, class: !0 });
      var n = g(l);
      (r = j(n, a)), n.forEach(d), (o = C(h)), h.forEach(d), this.h();
    },
    h() {
      c(l, "href", s[8].url),
        c(l, "class", "btn btn-hover py-1 px-2"),
        q(l, "active", s[0].url.pathname === s[8].url);
    },
    m(t, h) {
      H(t, e, h), u(e, l), u(l, r), u(e, o);
    },
    p(t, h) {
      h & 3 && q(l, "active", t[0].url.pathname === t[8].url);
    },
    d(t) {
      t && d(e);
    },
  };
}
function ce(s) {
  let e,
    l,
    a = s[5].title + "",
    r,
    o,
    t =
      s[5].children &&
      (s[0].url.pathname === s[5].url || s[5].children.some(s[4])),
    h,
    n = t && ne(s);
  return {
    c() {
      (e = b("li")),
        (l = b("a")),
        (r = T(a)),
        (o = I()),
        n && n.c(),
        (h = I()),
        this.h();
    },
    l(f) {
      e = w(f, "LI", {});
      var p = g(e);
      l = w(p, "A", { class: !0, href: !0 });
      var M = g(l);
      (r = j(M, a)),
        M.forEach(d),
        (o = C(p)),
        n && n.l(p),
        (h = C(p)),
        p.forEach(d),
        this.h();
    },
    h() {
      c(l, "class", "btn btn-hover"),
        c(l, "href", s[5].url),
        q(l, "active", s[0].url.pathname === s[5].url);
    },
    m(f, p) {
      H(f, e, p), u(e, l), u(l, r), u(e, o), n && n.m(e, null), u(e, h);
    },
    p(f, p) {
      p & 3 && q(l, "active", f[0].url.pathname === f[5].url),
        p & 1 &&
          (t =
            f[5].children &&
            (f[0].url.pathname === f[5].url || f[5].children.some(f[4]))),
        t
          ? n
            ? n.p(f, p)
            : ((n = ne(f)), n.c(), n.m(e, h))
          : n && (n.d(1), (n = null));
    },
    d(f) {
      f && d(e), n && n.d();
    },
  };
}
function Me(s) {
  let e,
    l,
    a,
    r,
    o,
    t = s[0].data.title + "",
    h,
    n,
    f,
    p,
    M = s[0].data.subtitle + "",
    W,
    B,
    D,
    k,
    A,
    L,
    R =
      '<button class="btn btn-outline-secondary dropdown-toggle collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-expanded="false" aria-controls="sidebarMenu">Available APIs</button>',
    O,
    z,
    F,
    P,
    V,
    y,
    N = J(s[1]),
    v = [];
  for (let i = 0; i < N.length; i += 1) v[i] = ce(ie(s, N, i));
  const U = s[3].default,
    E = he(U, s, s[2], null);
  return {
    c() {
      (e = b("div")),
        (l = te("svg")),
        (a = te("path")),
        (r = I()),
        (o = b("h1")),
        (h = T(t)),
        (n = I()),
        (f = b("div")),
        (p = b("p")),
        (W = T(M)),
        (B = I()),
        (D = b("div")),
        (k = b("div")),
        (A = b("div")),
        (L = b("div")),
        (L.innerHTML = R),
        (O = I()),
        (z = b("nav")),
        (F = b("ul"));
      for (let i = 0; i < v.length; i += 1) v[i].c();
      (P = I()), (V = b("main")), E && E.c(), this.h();
    },
    l(i) {
      e = w(i, "DIV", { class: !0, style: !0 });
      var m = g(e);
      l = ae(m, "svg", {
        style: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        class: !0,
        viewBox: !0,
      });
      var _ = g(l);
      (a = ae(_, "path", { d: !0 })),
        g(a).forEach(d),
        _.forEach(d),
        (r = C(m)),
        (o = w(m, "H1", { class: !0 }));
      var $ = g(o);
      (h = j($, t)), $.forEach(d), (n = C(m)), (f = w(m, "DIV", { class: !0 }));
      var X = g(f);
      p = w(X, "P", { class: !0 });
      var Y = g(p);
      (W = j(Y, M)),
        Y.forEach(d),
        X.forEach(d),
        m.forEach(d),
        (B = C(i)),
        (D = w(i, "DIV", { class: !0 }));
      var Z = g(D);
      k = w(Z, "DIV", { class: !0 });
      var G = g(k);
      A = w(G, "DIV", { class: !0 });
      var S = g(A);
      (L = w(S, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        fe(L) !== "svelte-151h7d3" && (L.innerHTML = R),
        (O = C(S)),
        (z = w(S, "NAV", { id: !0, class: !0 }));
      var x = g(z);
      F = w(x, "UL", { class: !0 });
      var ee = g(F);
      for (let Q = 0; Q < v.length; Q += 1) v[Q].l(ee);
      ee.forEach(d),
        x.forEach(d),
        S.forEach(d),
        (P = C(G)),
        (V = w(G, "MAIN", { class: !0 }));
      var le = g(V);
      E && E.l(le), le.forEach(d), G.forEach(d), Z.forEach(d), this.h();
    },
    h() {
      c(
        a,
        "d",
        "M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"
      ),
        K(l, "filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"),
        c(l, "xmlns", "http://www.w3.org/2000/svg"),
        c(l, "width", "96"),
        c(l, "height", "96"),
        c(l, "fill", "currentColor"),
        c(l, "class", "bi bi-gear-wide-connected mb-5"),
        c(l, "viewBox", "0 0 16 16"),
        c(o, "class", "display-5 hero-shadow svelte-10vfwl0"),
        c(p, "class", "lead mb-4 hero-shadow svelte-10vfwl0"),
        c(f, "class", "col-lg-6 mx-auto"),
        c(
          e,
          "class",
          "px-4 py-5 text-center text-white hero-banner svelte-10vfwl0"
        ),
        K(e, "background-image", "url('" + s[0].data.hero + "')"),
        c(L, "class", "my-3 d-md-none"),
        c(F, "class", "list-unstyled"),
        c(z, "id", "sidebarMenu"),
        c(z, "class", "sticky-top d-md-block collapse py-2 py-md-3 py-lg-4"),
        c(A, "class", "col-md-3 col-lg-2"),
        c(V, "class", "col-md-9 col-lg-10 p-2 p-md-3 p-lg-4"),
        c(k, "class", "row"),
        c(D, "class", "container-fluid");
    },
    m(i, m) {
      H(i, e, m),
        u(e, l),
        u(l, a),
        u(e, r),
        u(e, o),
        u(o, h),
        u(e, n),
        u(e, f),
        u(f, p),
        u(p, W),
        H(i, B, m),
        H(i, D, m),
        u(D, k),
        u(k, A),
        u(A, L),
        u(A, O),
        u(A, z),
        u(z, F);
      for (let _ = 0; _ < v.length; _ += 1) v[_] && v[_].m(F, null);
      u(k, P), u(k, V), E && E.m(V, null), (y = !0);
    },
    p(i, [m]) {
      if (
        ((!y || m & 1) && t !== (t = i[0].data.title + "") && se(h, t),
        (!y || m & 1) && M !== (M = i[0].data.subtitle + "") && se(W, M),
        (!y || m & 1) &&
          K(e, "background-image", "url('" + i[0].data.hero + "')"),
        m & 3)
      ) {
        N = J(i[1]);
        let _;
        for (_ = 0; _ < N.length; _ += 1) {
          const $ = ie(i, N, _);
          v[_] ? v[_].p($, m) : ((v[_] = ce($)), v[_].c(), v[_].m(F, null));
        }
        for (; _ < v.length; _ += 1) v[_].d(1);
        v.length = N.length;
      }
      E &&
        E.p &&
        (!y || m & 4) &&
        _e(E, U, i, i[2], y ? me(U, i[2], m, null) : pe(i[2]), null);
    },
    i(i) {
      y || (we(E, i), (y = !0));
    },
    o(i) {
      Ee(E, i), (y = !1);
    },
    d(i) {
      i && (d(e), d(B), d(D)), ue(v, i), E && E.d(i);
    },
  };
}
function ke(s, e, l) {
  let a;
  ve(s, ye, (n) => l(0, (a = n)));
  let { $$slots: r = {}, $$scope: o } = e;
  const t = [
      {
        title: "Weather Forecast",
        url: "/en/docs",
        children: [
          { title: "DWD ICON", url: "/en/docs/dwd-api" },
          { title: "NOAA GFS", url: "/en/docs/gfs-api" },
          { title: "MeteoFrance", url: "/en/docs/meteofrance-api" },
          { title: "ECMWF", url: "/en/docs/ecmwf-api" },
          { title: "JMA", url: "/en/docs/jma-api" },
          { title: "MET Norway", url: "/en/docs/metno-api" },
          { title: "GEM", url: "/en/docs/gem-api" },
        ],
      },
      { title: "Historical Weather", url: "/en/docs/historical-weather-api" },
      { title: "Ensemble Models", url: "/en/docs/ensemble-api" },
      { title: "Climate Change", url: "/en/docs/climate-api" },
      { title: "Marine Forecast", url: "/en/docs/marine-weather-api" },
      { title: "Air Quality", url: "/en/docs/air-quality-api" },
      { title: "Geocoding", url: "/en/docs/geocoding-api" },
      { title: "Elevation", url: "/en/docs/elevation-api" },
      { title: "Flood", url: "/en/docs/flood-api" },
    ],
    h = (n) => n.url === a.url.pathname;
  return (
    (s.$$set = (n) => {
      "$$scope" in n && l(2, (o = n.$$scope));
    }),
    [a, t, o, r, h]
  );
}
class Le extends ge {
  constructor(e) {
    super(), be(this, e, ke, Me, de, {});
  }
}
export { Le as component };

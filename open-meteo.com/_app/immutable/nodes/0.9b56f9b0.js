import { _ as Qt } from "../chunks/preload-helper.41c905a7.js";
import {
  s as Me,
  r as Pe,
  u as B,
  v as D,
  w as F,
  h as m,
  d as h,
  j as l,
  x as te,
  y as g,
  i as ee,
  z as c,
  A as Te,
  B as ze,
  C as Be,
  D as ae,
  E as je,
  a as w,
  f as v,
  l as Ct,
  c as k,
  g as p,
  F as j,
  m as Et,
  G as la,
  H as It,
  I as sa,
  J as Lt,
  o as na,
  K as Ae,
  L as ra,
} from "../chunks/scheduler.f440829a.js";
import {
  S as He,
  i as Oe,
  a as x,
  t as A,
  b as he,
  d as me,
  m as ve,
  c as Mt,
  e as pe,
  g as Pt,
} from "../chunks/index.2c544bcc.js";
import { p as ia } from "../chunks/stores.49342b8d.js";
import { t as We, a as Ge } from "../chunks/stores.226dc1e3.js";
import { g as Re } from "../chunks/spread.84d39b6c.js";
const oa = !0,
  ca = "never",
  Ma = Object.freeze(
    Object.defineProperty(
      { __proto__: null, prerender: oa, trailingSlash: ca },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function ua(r) {
  let e, n, t;
  const o = r[2].default,
    s = Pe(o, r, r[1], null);
  let u = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "16" },
      { height: "16" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      r[0],
    ],
    d = {};
  for (let a = 0; a < u.length; a += 1) d = B(d, u[a]);
  return {
    c() {
      (e = D("svg")), s && s.c(), (n = D("path")), this.h();
    },
    l(a) {
      e = F(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0,
      });
      var i = m(e);
      s && s.l(i),
        (n = F(i, "path", { d: !0 })),
        m(n).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      l(n, "d", "M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"),
        te(e, d),
        g(e, "bi", !0),
        g(e, "bi-circle-half", !0);
    },
    m(a, i) {
      ee(a, e, i), s && s.m(e, null), c(e, n), (t = !0);
    },
    p(a, [i]) {
      s &&
        s.p &&
        (!t || i & 2) &&
        Te(s, o, a, a[1], t ? Be(o, a[1], i, null) : ze(a[1]), null),
        te(
          e,
          (d = Re(u, [
            { xmlns: "http://www.w3.org/2000/svg" },
            { width: "16" },
            { height: "16" },
            { fill: "currentColor" },
            { viewBox: "0 0 16 16" },
            i & 1 && a[0],
          ]))
        ),
        g(e, "bi", !0),
        g(e, "bi-circle-half", !0);
    },
    i(a) {
      t || (x(s, a), (t = !0));
    },
    o(a) {
      A(s, a), (t = !1);
    },
    d(a) {
      a && h(e), s && s.d(a);
    },
  };
}
function da(r, e, n) {
  const t = [];
  let o = ae(e, t),
    { $$slots: s = {}, $$scope: u } = e;
  return (
    (r.$$set = (d) => {
      (e = B(B({}, e), je(d))),
        n(0, (o = ae(e, t))),
        "$$scope" in d && n(1, (u = d.$$scope));
    }),
    [o, u, s]
  );
}
class ea extends He {
  constructor(e) {
    super(), Oe(this, e, da, ua, Me, {});
  }
}
function fa(r) {
  let e, n, t;
  const o = r[2].default,
    s = Pe(o, r, r[1], null);
  let u = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "16" },
      { height: "16" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      r[0],
    ],
    d = {};
  for (let a = 0; a < u.length; a += 1) d = B(d, u[a]);
  return {
    c() {
      (e = D("svg")), s && s.c(), (n = D("path")), this.h();
    },
    l(a) {
      e = F(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0,
      });
      var i = m(e);
      s && s.l(i),
        (n = F(i, "path", { d: !0 })),
        m(n).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      l(
        n,
        "d",
        "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      ),
        te(e, d),
        g(e, "bi", !0),
        g(e, "bi-github", !0);
    },
    m(a, i) {
      ee(a, e, i), s && s.m(e, null), c(e, n), (t = !0);
    },
    p(a, [i]) {
      s &&
        s.p &&
        (!t || i & 2) &&
        Te(s, o, a, a[1], t ? Be(o, a[1], i, null) : ze(a[1]), null),
        te(
          e,
          (d = Re(u, [
            { xmlns: "http://www.w3.org/2000/svg" },
            { width: "16" },
            { height: "16" },
            { fill: "currentColor" },
            { viewBox: "0 0 16 16" },
            i & 1 && a[0],
          ]))
        ),
        g(e, "bi", !0),
        g(e, "bi-github", !0);
    },
    i(a) {
      t || (x(s, a), (t = !0));
    },
    o(a) {
      A(s, a), (t = !1);
    },
    d(a) {
      a && h(e), s && s.d(a);
    },
  };
}
function ha(r, e, n) {
  const t = [];
  let o = ae(e, t),
    { $$slots: s = {}, $$scope: u } = e;
  return (
    (r.$$set = (d) => {
      (e = B(B({}, e), je(d))),
        n(0, (o = ae(e, t))),
        "$$scope" in d && n(1, (u = d.$$scope));
    }),
    [o, u, s]
  );
}
class ma extends He {
  constructor(e) {
    super(), Oe(this, e, ha, fa, Me, {});
  }
}
function va(r) {
  let e, n, t, o;
  const s = r[2].default,
    u = Pe(s, r, r[1], null);
  let d = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "16" },
      { height: "16" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      r[0],
    ],
    a = {};
  for (let i = 0; i < d.length; i += 1) a = B(a, d[i]);
  return {
    c() {
      (e = D("svg")), u && u.c(), (n = D("path")), (t = D("path")), this.h();
    },
    l(i) {
      e = F(i, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0,
      });
      var y = m(e);
      u && u.l(y),
        (n = F(y, "path", { d: !0 })),
        m(n).forEach(h),
        (t = F(y, "path", { d: !0 })),
        m(t).forEach(h),
        y.forEach(h),
        this.h();
    },
    h() {
      l(
        n,
        "d",
        "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
      ),
        l(
          t,
          "d",
          "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
        ),
        te(e, a),
        g(e, "bi", !0),
        g(e, "bi-moon-stars-fill", !0);
    },
    m(i, y) {
      ee(i, e, y), u && u.m(e, null), c(e, n), c(e, t), (o = !0);
    },
    p(i, [y]) {
      u &&
        u.p &&
        (!o || y & 2) &&
        Te(u, s, i, i[1], o ? Be(s, i[1], y, null) : ze(i[1]), null),
        te(
          e,
          (a = Re(d, [
            { xmlns: "http://www.w3.org/2000/svg" },
            { width: "16" },
            { height: "16" },
            { fill: "currentColor" },
            { viewBox: "0 0 16 16" },
            y & 1 && i[0],
          ]))
        ),
        g(e, "bi", !0),
        g(e, "bi-moon-stars-fill", !0);
    },
    i(i) {
      o || (x(u, i), (o = !0));
    },
    o(i) {
      A(u, i), (o = !1);
    },
    d(i) {
      i && h(e), u && u.d(i);
    },
  };
}
function pa(r, e, n) {
  const t = [];
  let o = ae(e, t),
    { $$slots: s = {}, $$scope: u } = e;
  return (
    (r.$$set = (d) => {
      (e = B(B({}, e), je(d))),
        n(0, (o = ae(e, t))),
        "$$scope" in d && n(1, (u = d.$$scope));
    }),
    [o, u, s]
  );
}
class ta extends He {
  constructor(e) {
    super(), Oe(this, e, pa, va, Me, {});
  }
}
function ga(r) {
  let e, n, t;
  const o = r[2].default,
    s = Pe(o, r, r[1], null);
  let u = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "16" },
      { height: "16" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      r[0],
    ],
    d = {};
  for (let a = 0; a < u.length; a += 1) d = B(d, u[a]);
  return {
    c() {
      (e = D("svg")), s && s.c(), (n = D("path")), this.h();
    },
    l(a) {
      e = F(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0,
      });
      var i = m(e);
      s && s.l(i),
        (n = F(i, "path", { d: !0 })),
        m(n).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      l(
        n,
        "d",
        "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
      ),
        te(e, d),
        g(e, "bi", !0),
        g(e, "bi-sun-fill", !0);
    },
    m(a, i) {
      ee(a, e, i), s && s.m(e, null), c(e, n), (t = !0);
    },
    p(a, [i]) {
      s &&
        s.p &&
        (!t || i & 2) &&
        Te(s, o, a, a[1], t ? Be(o, a[1], i, null) : ze(a[1]), null),
        te(
          e,
          (d = Re(u, [
            { xmlns: "http://www.w3.org/2000/svg" },
            { width: "16" },
            { height: "16" },
            { fill: "currentColor" },
            { viewBox: "0 0 16 16" },
            i & 1 && a[0],
          ]))
        ),
        g(e, "bi", !0),
        g(e, "bi-sun-fill", !0);
    },
    i(a) {
      t || (x(s, a), (t = !0));
    },
    o(a) {
      A(s, a), (t = !1);
    },
    d(a) {
      a && h(e), s && s.d(a);
    },
  };
}
function _a(r, e, n) {
  const t = [];
  let o = ae(e, t),
    { $$slots: s = {}, $$scope: u } = e;
  return (
    (r.$$set = (d) => {
      (e = B(B({}, e), je(d))),
        n(0, (o = ae(e, t))),
        "$$scope" in d && n(1, (u = d.$$scope));
    }),
    [o, u, s]
  );
}
class aa extends He {
  constructor(e) {
    super(), Oe(this, e, _a, ga, Me, {});
  }
}
function ba(r) {
  let e, n, t;
  const o = r[2].default,
    s = Pe(o, r, r[1], null);
  let u = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "16" },
      { height: "16" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      r[0],
    ],
    d = {};
  for (let a = 0; a < u.length; a += 1) d = B(d, u[a]);
  return {
    c() {
      (e = D("svg")), s && s.c(), (n = D("path")), this.h();
    },
    l(a) {
      e = F(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0,
      });
      var i = m(e);
      s && s.l(i),
        (n = F(i, "path", { d: !0 })),
        m(n).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      l(
        n,
        "d",
        "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
      ),
        te(e, d),
        g(e, "bi", !0),
        g(e, "bi-twitter", !0);
    },
    m(a, i) {
      ee(a, e, i), s && s.m(e, null), c(e, n), (t = !0);
    },
    p(a, [i]) {
      s &&
        s.p &&
        (!t || i & 2) &&
        Te(s, o, a, a[1], t ? Be(o, a[1], i, null) : ze(a[1]), null),
        te(
          e,
          (d = Re(u, [
            { xmlns: "http://www.w3.org/2000/svg" },
            { width: "16" },
            { height: "16" },
            { fill: "currentColor" },
            { viewBox: "0 0 16 16" },
            i & 1 && a[0],
          ]))
        ),
        g(e, "bi", !0),
        g(e, "bi-twitter", !0);
    },
    i(a) {
      t || (x(s, a), (t = !0));
    },
    o(a) {
      A(s, a), (t = !1);
    },
    d(a) {
      a && h(e), s && s.d(a);
    },
  };
}
function wa(r, e, n) {
  const t = [];
  let o = ae(e, t),
    { $$slots: s = {}, $$scope: u } = e;
  return (
    (r.$$set = (d) => {
      (e = B(B({}, e), je(d))),
        n(0, (o = ae(e, t))),
        "$$scope" in d && n(1, (u = d.$$scope));
    }),
    [o, u, s]
  );
}
class ka extends He {
  constructor(e) {
    super(), Oe(this, e, wa, ba, Me, {});
  }
}
function Xt(r) {
  let e, n;
  return (
    (e = new aa({ props: { width: 28, height: 28, class: "navbar-nav-svg" } })),
    {
      c() {
        he(e.$$.fragment);
      },
      l(t) {
        me(e.$$.fragment, t);
      },
      m(t, o) {
        ve(e, t, o), (n = !0);
      },
      i(t) {
        n || (x(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        pe(e, t);
      },
    }
  );
}
function Yt(r) {
  let e, n;
  return (
    (e = new ta({
      props: {
        style: "margin: 1px 0;",
        width: 26,
        height: 26,
        class: "navbar-nav-svg",
      },
    })),
    {
      c() {
        he(e.$$.fragment);
      },
      l(t) {
        me(e.$$.fragment, t);
      },
      m(t, o) {
        ve(e, t, o), (n = !0);
      },
      i(t) {
        n || (x(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        pe(e, t);
      },
    }
  );
}
function Zt(r) {
  let e, n;
  return (
    (e = new ea({
      props: {
        style: "margin: 1px 0;",
        width: 26,
        height: 26,
        class: "navbar-nav-svg",
      },
    })),
    {
      c() {
        he(e.$$.fragment);
      },
      l(t) {
        me(e.$$.fragment, t);
      },
      m(t, o) {
        ve(e, t, o), (n = !0);
      },
      i(t) {
        n || (x(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        pe(e, t);
      },
    }
  );
}
function xa(r) {
  let e,
    n,
    t,
    o,
    s,
    u,
    d,
    a,
    i = "Open-Meteo",
    y,
    L,
    ne = '<span class="navbar-toggler-icon"></span>',
    De,
    q,
    P,
    le,
    b =
      '<div class="vr d-none d-lg-flex h-100 mx-lg-2"></div> <hr class="d-lg-none my-2"/>',
    Fe,
    J,
    M,
    Ve = "Home",
    se,
    K,
    S,
    qe = "Features",
    ge,
    H,
    z,
    Tt = "Pricing",
    rt,
    Ce,
    Q,
    zt = "API Docs",
    it,
    O,
    _e,
    Bt =
      '<div class="vr d-none d-lg-flex h-100 mx-lg-2"></div> <hr class="d-lg-none my-2"/>',
    ot,
    Ee,
    R,
    be,
    ct,
    re,
    Ht = "GitHub",
    ut,
    Ie,
    V,
    we,
    dt,
    ie,
    Ot = "Twitter",
    ft,
    ke,
    Dt =
      '<div class="vr d-none d-lg-flex h-100 mx-lg-2"></div> <hr class="d-lg-none my-2"/>',
    ht,
    oe,
    $,
    Je,
    Ke,
    Qe,
    ce,
    Ft = "Toggle theme",
    mt,
    X,
    Se,
    N,
    xe,
    vt,
    Xe,
    pt,
    Ne,
    U,
    ye,
    gt,
    Ye,
    _t,
    Ue,
    W,
    $e,
    bt,
    Ze,
    et,
    tt,
    ue,
    St =
      '<div class="row"><div class="col-6 col-md"><p class="h5">Open-Meteo</p> <ul class="list-unstyled text-small"><li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/features">Features</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/pricing">Pricing</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/about">About us &amp; Contact</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/license">License</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/terms">Terms &amp; Privacy</a></li></ul></div> <div class="col-6 col-md"><p class="h5">Weather APIs</p> <ul class="list-unstyled text-small"><li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs">Weather Forecast API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/historical-weather-api">Historical Weather API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/ecmwf-api">ECMWF API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/gfs-api">GFS &amp; HRRR Forecast API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/meteofrance-api">MeteoFrance API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/dwd-api">DWD ICON API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/gem-api">GEM API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/jma-api">JMA API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/metno-api">Met Norway API</a></li></ul></div> <div class="col-6 col-md"><p class="h5">Other APIs</p> <ul class="list-unstyled text-small"><li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/ensemble-api">Ensemble API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/climate-api">Climate Change API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/marine-weather-api">Marine Weather API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/air-quality-api">Air Quality API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/geocoding-api">Geocoding API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/elevation-api">Elevation API</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="/en/docs/flood-api">Flood API</a></li></ul></div> <div class="col-6 col-md"><p class="h5">External</p> <ul class="list-unstyled text-small"><li class="mb-1"><a class="link-secondary text-decoration-none" href="https://github.com/open-meteo/open-meteo">GitHub</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://openmeteo.substack.com/archive?sort=new">Blog</a></li> <li class="mb-1"><a rel="me" class="link-secondary text-decoration-none" href="https://twitter.com/open_meteo" target="_blank">Twitter</a></li> <li class="mb-1"><a rel="me" class="link-secondary text-decoration-none" href="https://fosstodon.org/@openmeteo" target="_blank">Mastodon</a></li> <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://status.open-meteo.com" target="_blank">Service status and uptime</a></li></ul></div></div> <div class="text-center pt-3"><small class="d-block text-muted">© 2022-2023 Copyright: Open-Meteo.com</small></div>',
    T,
    wt,
    Nt;
  (be = new ma({ props: { width: 28, height: 28, class: "navbar-nav-svg" } })),
    (we = new ka({
      props: { width: 28, height: 28, class: "navbar-nav-svg" },
    }));
  let C = r[0] == "light" && Xt(),
    E = r[0] == "dark" && Yt(),
    I = r[0] == "auto" && Zt();
  (xe = new aa({ props: { class: "bi me-2 opacity-50 theme-icon" } })),
    (ye = new ta({ props: { class: "bi me-2 opacity-50 theme-icon" } })),
    ($e = new ea({ props: { class: "bi me-2 opacity-50 theme-icon" } }));
  const kt = r[6].default,
    G = Pe(kt, r, r[5], null);
  return {
    c() {
      (e = w()),
        (n = v("nav")),
        (t = v("div")),
        (o = D("svg")),
        (s = D("path")),
        (u = D("path")),
        (d = w()),
        (a = v("a")),
        (a.textContent = i),
        (y = w()),
        (L = v("button")),
        (L.innerHTML = ne),
        (De = w()),
        (q = v("div")),
        (P = v("ul")),
        (le = v("li")),
        (le.innerHTML = b),
        (Fe = w()),
        (J = v("li")),
        (M = v("a")),
        (M.textContent = Ve),
        (se = w()),
        (K = v("li")),
        (S = v("a")),
        (S.textContent = qe),
        (ge = w()),
        (H = v("li")),
        (z = v("a")),
        (z.textContent = Tt),
        (rt = w()),
        (Ce = v("li")),
        (Q = v("a")),
        (Q.textContent = zt),
        (it = w()),
        (O = v("ul")),
        (_e = v("li")),
        (_e.innerHTML = Bt),
        (ot = w()),
        (Ee = v("li")),
        (R = v("a")),
        he(be.$$.fragment),
        (ct = w()),
        (re = v("span")),
        (re.textContent = Ht),
        (ut = w()),
        (Ie = v("li")),
        (V = v("a")),
        he(we.$$.fragment),
        (dt = w()),
        (ie = v("span")),
        (ie.textContent = Ot),
        (ft = w()),
        (ke = v("li")),
        (ke.innerHTML = Dt),
        (ht = w()),
        (oe = v("li")),
        ($ = v("button")),
        C && C.c(),
        (Je = w()),
        E && E.c(),
        (Ke = w()),
        I && I.c(),
        (Qe = w()),
        (ce = v("span")),
        (ce.textContent = Ft),
        (mt = w()),
        (X = v("ul")),
        (Se = v("li")),
        (N = v("button")),
        he(xe.$$.fragment),
        (vt = Ct(`
								
								Light`)),
        (pt = w()),
        (Ne = v("li")),
        (U = v("button")),
        he(ye.$$.fragment),
        (gt = Ct(`
								Dark`)),
        (_t = w()),
        (Ue = v("li")),
        (W = v("button")),
        he($e.$$.fragment),
        (bt = Ct(`
								
								Auto`)),
        (et = w()),
        G && G.c(),
        (tt = w()),
        (ue = v("footer")),
        (ue.innerHTML = St),
        this.h();
    },
    l(f) {
      (e = k(f)), (n = p(f, "NAV", { class: !0 }));
      var _ = m(n);
      t = p(_, "DIV", { class: !0 });
      var de = m(t);
      o = F(de, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        class: !0,
        viewBox: !0,
      });
      var xt = m(o);
      (s = F(xt, "path", { d: !0 })),
        m(s).forEach(h),
        (u = F(xt, "path", { d: !0 })),
        m(u).forEach(h),
        xt.forEach(h),
        (d = k(de)),
        (a = p(de, "A", { class: !0, href: !0, ["data-svelte-h"]: !0 })),
        j(a) !== "svelte-529fc5" && (a.textContent = i),
        (y = k(de)),
        (L = p(de, "BUTTON", {
          class: !0,
          type: !0,
          "data-bs-toggle": !0,
          "data-bs-target": !0,
          "aria-controls": !0,
          "aria-expanded": !0,
          "aria-label": !0,
          ["data-svelte-h"]: !0,
        })),
        j(L) !== "svelte-10kdzvy" && (L.innerHTML = ne),
        (De = k(de)),
        (q = p(de, "DIV", { class: !0, id: !0 }));
      var at = m(q);
      P = p(at, "UL", { class: !0 });
      var Y = m(P);
      (le = p(Y, "LI", { class: !0, ["data-svelte-h"]: !0 })),
        j(le) !== "svelte-198yrg5" && (le.innerHTML = b),
        (Fe = k(Y)),
        (J = p(Y, "LI", { class: !0 }));
      var Ut = m(J);
      (M = p(Ut, "A", {
        href: !0,
        class: !0,
        "aria-current": !0,
        title: !0,
        ["data-svelte-h"]: !0,
      })),
        j(M) !== "svelte-14imjsj" && (M.textContent = Ve),
        Ut.forEach(h),
        (se = k(Y)),
        (K = p(Y, "LI", { class: !0 }));
      var Wt = m(K);
      (S = p(Wt, "A", {
        href: !0,
        class: !0,
        title: !0,
        ["data-svelte-h"]: !0,
      })),
        j(S) !== "svelte-scvwzh" && (S.textContent = qe),
        Wt.forEach(h),
        (ge = k(Y)),
        (H = p(Y, "LI", { class: !0 }));
      var Gt = m(H);
      (z = p(Gt, "A", {
        href: !0,
        class: !0,
        title: !0,
        ["data-svelte-h"]: !0,
      })),
        j(z) !== "svelte-7rfo0z" && (z.textContent = Tt),
        Gt.forEach(h),
        (rt = k(Y)),
        (Ce = p(Y, "LI", { class: !0 }));
      var jt = m(Ce);
      (Q = p(jt, "A", {
        href: !0,
        class: !0,
        title: !0,
        ["data-svelte-h"]: !0,
      })),
        j(Q) !== "svelte-ng2jsl" && (Q.textContent = zt),
        jt.forEach(h),
        Y.forEach(h),
        (it = k(at)),
        (O = p(at, "UL", { class: !0 }));
      var Z = m(O);
      (_e = p(Z, "LI", { class: !0, ["data-svelte-h"]: !0 })),
        j(_e) !== "svelte-198yrg5" && (_e.innerHTML = Bt),
        (ot = k(Z)),
        (Ee = p(Z, "LI", { class: !0 }));
      var Rt = m(Ee);
      R = p(Rt, "A", {
        class: !0,
        href: !0,
        target: !0,
        rel: !0,
        "aria-label": !0,
      });
      var lt = m(R);
      me(be.$$.fragment, lt),
        (ct = k(lt)),
        (re = p(lt, "SPAN", { class: !0, id: !0, ["data-svelte-h"]: !0 })),
        j(re) !== "svelte-1x1n5mm" && (re.textContent = Ht),
        lt.forEach(h),
        Rt.forEach(h),
        (ut = k(Z)),
        (Ie = p(Z, "LI", { class: !0 }));
      var Vt = m(Ie);
      V = p(Vt, "A", {
        class: !0,
        href: !0,
        target: !0,
        rel: !0,
        "aria-label": !0,
      });
      var st = m(V);
      me(we.$$.fragment, st),
        (dt = k(st)),
        (ie = p(st, "SPAN", { class: !0, id: !0, ["data-svelte-h"]: !0 })),
        j(ie) !== "svelte-r2scpk" && (ie.textContent = Ot),
        st.forEach(h),
        Vt.forEach(h),
        (ft = k(Z)),
        (ke = p(Z, "LI", { class: !0, ["data-svelte-h"]: !0 })),
        j(ke) !== "svelte-3d9qy2" && (ke.innerHTML = Dt),
        (ht = k(Z)),
        (oe = p(Z, "LI", { class: !0 }));
      var nt = m(oe);
      $ = p(nt, "BUTTON", {
        class: !0,
        id: !0,
        type: !0,
        "aria-expanded": !0,
        "data-bs-toggle": !0,
        "data-bs-display": !0,
        "aria-label": !0,
      });
      var fe = m($);
      C && C.l(fe),
        (Je = k(fe)),
        E && E.l(fe),
        (Ke = k(fe)),
        I && I.l(fe),
        (Qe = k(fe)),
        (ce = p(fe, "SPAN", { class: !0, id: !0, ["data-svelte-h"]: !0 })),
        j(ce) !== "svelte-4eigw8" && (ce.textContent = Ft),
        fe.forEach(h),
        (mt = k(nt)),
        (X = p(nt, "UL", { class: !0, "aria-labelledby": !0 }));
      var Le = m(X);
      Se = p(Le, "LI", {});
      var qt = m(Se);
      N = p(qt, "BUTTON", { type: !0, class: !0, "aria-pressed": !0 });
      var yt = m(N);
      me(xe.$$.fragment, yt),
        (vt = Et(
          yt,
          `
								
								Light`
        )),
        yt.forEach(h),
        qt.forEach(h),
        (pt = k(Le)),
        (Ne = p(Le, "LI", {}));
      var Jt = m(Ne);
      U = p(Jt, "BUTTON", { type: !0, class: !0, "aria-pressed": !0 });
      var $t = m(U);
      me(ye.$$.fragment, $t),
        (gt = Et(
          $t,
          `
								Dark`
        )),
        $t.forEach(h),
        Jt.forEach(h),
        (_t = k(Le)),
        (Ue = p(Le, "LI", {}));
      var Kt = m(Ue);
      W = p(Kt, "BUTTON", { type: !0, class: !0, "aria-pressed": !0 });
      var At = m(W);
      me($e.$$.fragment, At),
        (bt = Et(
          At,
          `
								
								Auto`
        )),
        At.forEach(h),
        Kt.forEach(h),
        Le.forEach(h),
        nt.forEach(h),
        Z.forEach(h),
        at.forEach(h),
        de.forEach(h),
        _.forEach(h),
        (et = k(f)),
        G && G.l(f),
        (tt = k(f)),
        (ue = p(f, "FOOTER", { class: !0, ["data-svelte-h"]: !0 })),
        j(ue) !== "svelte-7p66cq" && (ue.innerHTML = St),
        this.h();
    },
    h() {
      l(
        s,
        "d",
        "M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"
      ),
        l(
          u,
          "d",
          "M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
        ),
        l(o, "xmlns", "http://www.w3.org/2000/svg"),
        l(o, "width", "28"),
        l(o, "height", "28"),
        l(o, "fill", "currentColor"),
        l(o, "class", "bi bi-cloud-sun me-2"),
        l(o, "viewBox", "0 0 16 16"),
        l(a, "class", "navbar-brand"),
        l(a, "href", "/"),
        l(L, "class", "navbar-toggler"),
        l(L, "type", "button"),
        l(L, "data-bs-toggle", "collapse"),
        l(L, "data-bs-target", "#navbarCollapse"),
        l(L, "aria-controls", "navbarCollapse"),
        l(L, "aria-expanded", "false"),
        l(L, "aria-label", "Toggle navigation"),
        l(le, "class", "d-md-none nav-item py-1 py-lg-1"),
        l(M, "href", "/"),
        l(M, "class", "nav-link"),
        l(M, "aria-current", "page"),
        l(M, "title", "Weather API"),
        g(M, "active", r[1].url.pathname === "/"),
        l(J, "class", "nav-item"),
        l(S, "href", "/en/features"),
        l(S, "class", "nav-link"),
        l(S, "title", "API Features"),
        g(S, "active", r[1].url.pathname === "/en/features"),
        l(K, "class", "nav-item"),
        l(z, "href", "/en/pricing"),
        l(z, "class", "nav-link"),
        l(z, "title", "Pricing"),
        g(z, "active", r[1].url.pathname === "/en/pricing"),
        l(H, "class", "nav-item"),
        l(Q, "href", "/en/docs"),
        l(Q, "class", "nav-link"),
        l(Q, "title", "Documentation"),
        g(Q, "active", r[1].url.pathname.startsWith("/en/docs")),
        l(Ce, "class", "nav-item"),
        l(P, "class", "navbar-nav me-auto mb-2 mb-md-0"),
        l(_e, "class", "d-md-none nav-item py-1 py-lg-1"),
        l(re, "class", "d-md-none ms-2"),
        l(re, "id", "bd-theme-text"),
        l(R, "class", "nav-link p-2"),
        l(R, "href", "https://github.com/open-meteo/open-meteo"),
        l(R, "target", "_blank"),
        l(R, "rel", "noopener"),
        l(R, "aria-label", "GitHub"),
        l(Ee, "class", "nav-item"),
        l(ie, "class", "d-md-none ms-2"),
        l(ie, "id", "bd-theme-text"),
        l(V, "class", "nav-link p-2"),
        l(V, "href", "https://twitter.com/open_meteo"),
        l(V, "target", "_blank"),
        l(V, "rel", "noopener"),
        l(V, "aria-label", "Twitter"),
        l(Ie, "class", "nav-item"),
        l(ke, "class", "d-none d-md-block nav-item py-1"),
        l(ce, "class", "d-md-none ms-2"),
        l(ce, "id", "bd-theme-text"),
        l(
          $,
          "class",
          "btn btn-link nav-link p-2 dropdown-toggle d-flex align-items-center"
        ),
        l($, "id", "bd-theme"),
        l($, "type", "button"),
        l($, "aria-expanded", "false"),
        l($, "data-bs-toggle", "dropdown"),
        l($, "data-bs-display", "static"),
        l($, "aria-label", "Toggle theme (dark)"),
        l(N, "type", "button"),
        l(N, "class", "dropdown-item d-flex align-items-center"),
        l(N, "aria-pressed", (Xe = r[0] == "light")),
        g(N, "active", r[0] == "light"),
        l(U, "type", "button"),
        l(U, "class", "dropdown-item d-flex align-items-center"),
        l(U, "aria-pressed", (Ye = r[0] == "dark")),
        g(U, "active", r[0] == "dark"),
        l(W, "type", "button"),
        l(W, "class", "dropdown-item d-flex align-items-center"),
        l(W, "aria-pressed", (Ze = r[0] == "auto")),
        g(W, "active", r[0] == "auto"),
        l(X, "class", "dropdown-menu dropdown-menu-end"),
        l(X, "aria-labelledby", "bd-theme-text"),
        l(oe, "class", "nav-item dropdown"),
        l(O, "class", "navbar-nav ml-sm-auto"),
        l(q, "class", "collapse navbar-collapse"),
        l(q, "id", "navbarCollapse"),
        l(t, "class", "container-fluid"),
        l(n, "class", "navbar navbar-expand-md navbar-light"),
        l(ue, "class", "container py-5 pt-4 my-md-5 pt-md-5");
    },
    m(f, _) {
      ee(f, e, _),
        ee(f, n, _),
        c(n, t),
        c(t, o),
        c(o, s),
        c(o, u),
        c(t, d),
        c(t, a),
        c(t, y),
        c(t, L),
        c(t, De),
        c(t, q),
        c(q, P),
        c(P, le),
        c(P, Fe),
        c(P, J),
        c(J, M),
        c(P, se),
        c(P, K),
        c(K, S),
        c(P, ge),
        c(P, H),
        c(H, z),
        c(P, rt),
        c(P, Ce),
        c(Ce, Q),
        c(q, it),
        c(q, O),
        c(O, _e),
        c(O, ot),
        c(O, Ee),
        c(Ee, R),
        ve(be, R, null),
        c(R, ct),
        c(R, re),
        c(O, ut),
        c(O, Ie),
        c(Ie, V),
        ve(we, V, null),
        c(V, dt),
        c(V, ie),
        c(O, ft),
        c(O, ke),
        c(O, ht),
        c(O, oe),
        c(oe, $),
        C && C.m($, null),
        c($, Je),
        E && E.m($, null),
        c($, Ke),
        I && I.m($, null),
        c($, Qe),
        c($, ce),
        c(oe, mt),
        c(oe, X),
        c(X, Se),
        c(Se, N),
        ve(xe, N, null),
        c(N, vt),
        c(X, pt),
        c(X, Ne),
        c(Ne, U),
        ve(ye, U, null),
        c(U, gt),
        c(X, _t),
        c(X, Ue),
        c(Ue, W),
        ve($e, W, null),
        c(W, bt),
        ee(f, et, _),
        G && G.m(f, _),
        ee(f, tt, _),
        ee(f, ue, _),
        (T = !0),
        wt ||
          ((Nt = [
            la(r[2].call(null, document.body)),
            It(N, "click", r[7]),
            It(U, "click", r[8]),
            It(W, "click", r[9]),
          ]),
          (wt = !0));
    },
    p(f, [_]) {
      (!T || _ & 2) && g(M, "active", f[1].url.pathname === "/"),
        (!T || _ & 2) && g(S, "active", f[1].url.pathname === "/en/features"),
        (!T || _ & 2) && g(z, "active", f[1].url.pathname === "/en/pricing"),
        (!T || _ & 2) &&
          g(Q, "active", f[1].url.pathname.startsWith("/en/docs")),
        f[0] == "light"
          ? C
            ? _ & 1 && x(C, 1)
            : ((C = Xt()), C.c(), x(C, 1), C.m($, Je))
          : C &&
            (Pt(),
            A(C, 1, 1, () => {
              C = null;
            }),
            Mt()),
        f[0] == "dark"
          ? E
            ? _ & 1 && x(E, 1)
            : ((E = Yt()), E.c(), x(E, 1), E.m($, Ke))
          : E &&
            (Pt(),
            A(E, 1, 1, () => {
              E = null;
            }),
            Mt()),
        f[0] == "auto"
          ? I
            ? _ & 1 && x(I, 1)
            : ((I = Zt()), I.c(), x(I, 1), I.m($, Qe))
          : I &&
            (Pt(),
            A(I, 1, 1, () => {
              I = null;
            }),
            Mt()),
        (!T || (_ & 1 && Xe !== (Xe = f[0] == "light"))) &&
          l(N, "aria-pressed", Xe),
        (!T || _ & 1) && g(N, "active", f[0] == "light"),
        (!T || (_ & 1 && Ye !== (Ye = f[0] == "dark"))) &&
          l(U, "aria-pressed", Ye),
        (!T || _ & 1) && g(U, "active", f[0] == "dark"),
        (!T || (_ & 1 && Ze !== (Ze = f[0] == "auto"))) &&
          l(W, "aria-pressed", Ze),
        (!T || _ & 1) && g(W, "active", f[0] == "auto"),
        G &&
          G.p &&
          (!T || _ & 32) &&
          Te(G, kt, f, f[5], T ? Be(kt, f[5], _, null) : ze(f[5]), null);
    },
    i(f) {
      T ||
        (x(be.$$.fragment, f),
        x(we.$$.fragment, f),
        x(C),
        x(E),
        x(I),
        x(xe.$$.fragment, f),
        x(ye.$$.fragment, f),
        x($e.$$.fragment, f),
        x(G, f),
        (T = !0));
    },
    o(f) {
      A(be.$$.fragment, f),
        A(we.$$.fragment, f),
        A(C),
        A(E),
        A(I),
        A(xe.$$.fragment, f),
        A(ye.$$.fragment, f),
        A($e.$$.fragment, f),
        A(G, f),
        (T = !1);
    },
    d(f) {
      f && (h(e), h(n), h(et), h(tt), h(ue)),
        pe(be),
        pe(we),
        C && C.d(),
        E && E.d(),
        I && I.d(),
        pe(xe),
        pe(ye),
        pe($e),
        G && G.d(f),
        (wt = !1),
        sa(Nt);
    },
  };
}
function ya(r, e, n) {
  let t, o, s;
  Lt(r, Ge, (b) => n(4, (t = b))),
    Lt(r, We, (b) => n(0, (o = b))),
    Lt(r, ia, (b) => n(1, (s = b)));
  let { $$slots: u = {}, $$scope: d } = e;
  var a =
    (this && this.__awaiter) ||
    function (b, Fe, J, M) {
      function Ve(se) {
        return se instanceof J
          ? se
          : new J(function (K) {
              K(se);
            });
      }
      return new (J || (J = Promise))(function (se, K) {
        function S(H) {
          try {
            ge(M.next(H));
          } catch (z) {
            K(z);
          }
        }
        function qe(H) {
          try {
            ge(M.throw(H));
          } catch (z) {
            K(z);
          }
        }
        function ge(H) {
          H.done ? se(H.value) : Ve(H.value).then(S, qe);
        }
        ge((M = M.apply(b, Fe || [])).next());
      });
    };
  let i, y, L;
  na(() =>
    a(void 0, void 0, void 0, function* () {
      yield Qt(
        () => import("../chunks/dropdown.d54ce26f.js").then((b) => b.d),
        [
          "../chunks/dropdown.d54ce26f.js",
          "../chunks/_commonjsHelpers.042e6b4d.js",
          "../chunks/selector-engine.071051b0.js",
        ],
        import.meta.url
      ),
        yield Qt(
          () => import("../chunks/collapse.1b05f412.js").then((b) => b.c),
          [
            "../chunks/collapse.1b05f412.js",
            "../chunks/_commonjsHelpers.042e6b4d.js",
            "../chunks/selector-engine.071051b0.js",
          ],
          import.meta.url
        ),
        (y = window.matchMedia("(prefers-color-scheme: dark)")),
        (L = We.subscribe((b) => {
          switch (b) {
            case "auto":
              Ae(Ge, (t = (y == null ? void 0 : y.matches) || !1), t);
              break;
            case "dark":
              Ae(Ge, (t = !0), t);
              break;
            case "light":
              Ae(Ge, (t = !1), t);
              break;
          }
        })),
        (i = (b) => {
          o == "auto" && Ae(Ge, (t = b.matches), t);
        }),
        y.addEventListener("change", i);
    })
  ),
    ra(() => {
      y && i && y.removeEventListener("change", i), L && L();
    });
  let ne;
  const De = (b) => n(3, (ne = b)),
    q = () => Ae(We, (o = "light"), o),
    P = () => Ae(We, (o = "dark"), o),
    le = () => Ae(We, (o = "auto"), o);
  return (
    (r.$$set = (b) => {
      "$$scope" in b && n(5, (d = b.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 24 &&
        (ne == null || ne.setAttribute("data-bs-theme", t ? "dark" : ""));
    }),
    [o, s, De, ne, t, d, u, q, P, le]
  );
}
class Pa extends He {
  constructor(e) {
    super(), Oe(this, e, ya, xa, Me, {});
  }
}
export { Pa as component, Ma as universal };

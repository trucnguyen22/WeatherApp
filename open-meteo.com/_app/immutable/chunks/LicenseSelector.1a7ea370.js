import {
  a8 as Z,
  a9 as $,
  aa as j,
  ab as ee,
  s as te,
  f as _,
  a as A,
  g as h,
  h as S,
  F as P,
  c as H,
  d as v,
  P as O,
  j as u,
  Q as le,
  i as V,
  z as c,
  R as G,
  H as K,
  M as J,
  J as se,
  l as R,
  m as z,
  V as ae,
} from "./scheduler.f440829a.js";
import {
  g as re,
  t as ie,
  c as ne,
  a as oe,
  S as ue,
  i as ce,
} from "./index.2c544bcc.js";
import { b as B } from "./stores.226dc1e3.js";
function me(r, e) {
  const l = (e.token = {});
  function t(n, s, f, i) {
    if (e.token !== l) return;
    e.resolved = i;
    let a = e.ctx;
    f !== void 0 && ((a = a.slice()), (a[f] = i));
    const d = n && (e.current = n)(a);
    let m = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((b, o) => {
            o !== s &&
              b &&
              (re(),
              ie(b, 1, 1, () => {
                e.blocks[o] === b && (e.blocks[o] = null);
              }),
              ne());
          })
        : e.block.d(1),
      d.c(),
      oe(d, 1),
      d.m(e.mount(), e.anchor),
      (m = !0)),
      (e.block = d),
      e.blocks && (e.blocks[s] = d),
      m && ee();
  }
  if (Z(r)) {
    const n = $();
    if (
      (r.then(
        (s) => {
          j(n), t(e.then, 1, e.value, s), j(null);
        },
        (s) => {
          if ((j(n), t(e.catch, 2, e.error, s), j(null), !e.hasCatch)) throw s;
        }
      ),
      e.current !== e.pending)
    )
      return t(e.pending, 0), !0;
  } else {
    if (e.current !== e.then) return t(e.then, 1, e.value, r), !0;
    e.resolved = r;
  }
}
function pe(r, e, l) {
  const t = e.slice(),
    { resolved: n } = r;
  r.current === r.then && (t[r.value] = n),
    r.current === r.catch && (t[r.error] = n),
    r.block.p(t, l);
}
function Q(r) {
  let e,
    l =
      '<div class="alert alert-info" role="alert">Only for non-commercial use with less than 10.000 daily API calls. See <a href="/en/terms">Terms</a> for more details.</div>';
  return {
    c() {
      (e = _("div")), (e.innerHTML = l), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        P(e) !== "svelte-1efet4r" && (e.innerHTML = l),
        this.h();
    },
    h() {
      u(e, "class", "col-md-9");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && v(e);
    },
  };
}
function W(r) {
  let e,
    l,
    t,
    n,
    s,
    f = "API Key",
    i,
    a,
    d,
    m,
    b,
    o = "Pricing",
    y,
    g,
    D,
    p = r[0] && X();
  return {
    c() {
      (e = _("div")),
        (l = _("div")),
        (t = _("input")),
        (n = A()),
        (s = _("label")),
        (s.textContent = f),
        (i = A()),
        (a = _("div")),
        (d = _("div")),
        (m = R("See ")),
        (b = _("a")),
        (b.textContent = o),
        (y = R(" for more details.")),
        p && p.c(),
        this.h();
    },
    l(k) {
      e = h(k, "DIV", { class: !0 });
      var T = S(e);
      l = h(T, "DIV", { class: !0 });
      var q = S(l);
      (t = h(q, "INPUT", { type: !0, class: !0, name: !0, id: !0 })),
        (n = H(q)),
        (s = h(q, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
        P(s) !== "svelte-1gv667o" && (s.textContent = f),
        q.forEach(v),
        T.forEach(v),
        (i = H(k)),
        (a = h(k, "DIV", { class: !0 }));
      var N = S(a);
      d = h(N, "DIV", { class: !0, role: !0 });
      var M = S(d);
      (m = z(M, "See ")),
        (b = h(M, "A", { href: !0, ["data-svelte-h"]: !0 })),
        P(b) !== "svelte-14njgrh" && (b.textContent = o),
        (y = z(M, " for more details.")),
        p && p.l(M),
        M.forEach(v),
        N.forEach(v),
        this.h();
    },
    h() {
      u(t, "type", "text"),
        u(t, "class", "form-control"),
        u(t, "name", "apikey"),
        u(t, "id", "apikey"),
        (t.required = !0),
        u(s, "for", "apikey"),
        u(l, "class", "form-floating"),
        u(e, "class", "col-md-3"),
        u(b, "href", "/en/pricing"),
        u(d, "class", "alert alert-info"),
        u(d, "role", "alert"),
        u(a, "class", "col-md-6");
    },
    m(k, T) {
      V(k, e, T),
        c(e, l),
        c(l, t),
        O(t, r[1].apikey),
        c(l, n),
        c(l, s),
        V(k, i, T),
        V(k, a, T),
        c(a, d),
        c(d, m),
        c(d, b),
        c(d, y),
        p && p.m(d, null),
        g || ((D = K(t, "input", r[3])), (g = !0));
    },
    p(k, T) {
      T & 2 && t.value !== k[1].apikey && O(t, k[1].apikey),
        k[0]
          ? p || ((p = X()), p.c(), p.m(d, null))
          : p && (p.d(1), (p = null));
    },
    d(k) {
      k && (v(e), v(i), v(a)), p && p.d(), (g = !1), D();
    },
  };
}
function X(r) {
  let e,
    l,
    t = "Professional",
    n;
  return {
    c() {
      (e = R("This API requires the ")),
        (l = _("mark")),
        (l.textContent = t),
        (n = R(" subscription."));
    },
    l(s) {
      (e = z(s, "This API requires the ")),
        (l = h(s, "MARK", { ["data-svelte-h"]: !0 })),
        P(l) !== "svelte-cit3h7" && (l.textContent = t),
        (n = z(s, " subscription."));
    },
    m(s, f) {
      V(s, e, f), V(s, l, f), V(s, n, f);
    },
    d(s) {
      s && (v(e), v(l), v(n));
    },
  };
}
function Y(r) {
  let e,
    l,
    t,
    n,
    s,
    f = "Server URL",
    i,
    a,
    d =
      '<div class="alert alert-info" role="alert">See <a href="https://github.com/open-meteo/open-meteo">GitHub</a> for more instructions. Make sure your node supports HTTPS.</div>',
    m,
    b;
  return {
    c() {
      (e = _("div")),
        (l = _("div")),
        (t = _("input")),
        (n = A()),
        (s = _("label")),
        (s.textContent = f),
        (i = A()),
        (a = _("div")),
        (a.innerHTML = d),
        this.h();
    },
    l(o) {
      e = h(o, "DIV", { class: !0 });
      var y = S(e);
      l = h(y, "DIV", { class: !0 });
      var g = S(l);
      (t = h(g, "INPUT", { type: !0, class: !0, name: !0, id: !0 })),
        (n = H(g)),
        (s = h(g, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
        P(s) !== "svelte-97f2i9" && (s.textContent = f),
        g.forEach(v),
        y.forEach(v),
        (i = H(o)),
        (a = h(o, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        P(a) !== "svelte-9v0gw4" && (a.innerHTML = d),
        this.h();
    },
    h() {
      u(t, "type", "text"),
        u(t, "class", "form-control"),
        u(t, "name", "self_host_server"),
        u(t, "id", "self_host_server"),
        u(s, "for", "self_host_server"),
        u(l, "class", "form-floating"),
        u(e, "class", "col-md-3"),
        u(a, "class", "col-md-6");
    },
    m(o, y) {
      V(o, e, y),
        c(e, l),
        c(l, t),
        O(t, r[1].self_host_server),
        c(l, n),
        c(l, s),
        V(o, i, y),
        V(o, a, y),
        m || ((b = K(t, "input", r[4])), (m = !0));
    },
    p(o, y) {
      y & 2 && t.value !== o[1].self_host_server && O(t, o[1].self_host_server);
    },
    d(o) {
      o && (v(e), v(i), v(a)), (m = !1), b();
    },
  };
}
function fe(r) {
  let e,
    l,
    t = "Usage License",
    n,
    s,
    f,
    i,
    a,
    d = "Non-Commercial",
    m,
    b = "Commercial",
    o,
    y = "Self-Hosted",
    g,
    D,
    p = "Use",
    k,
    T,
    q,
    N,
    M,
    E = r[1].use == "non_commercial" && Q(),
    C = r[1].use == "commercial" && W(r),
    I = r[1].use == "self_hosted" && Y(r);
  return {
    c() {
      (e = _("div")),
        (l = _("h2")),
        (l.textContent = t),
        (n = A()),
        (s = _("div")),
        (f = _("div")),
        (i = _("select")),
        (a = _("option")),
        (a.textContent = d),
        (m = _("option")),
        (m.textContent = b),
        (o = _("option")),
        (o.textContent = y),
        (g = A()),
        (D = _("label")),
        (D.textContent = p),
        (k = A()),
        E && E.c(),
        (T = A()),
        C && C.c(),
        (q = A()),
        I && I.c(),
        this.h();
    },
    l(L) {
      e = h(L, "DIV", { class: !0 });
      var x = S(e);
      (l = h(x, "H2", { ["data-svelte-h"]: !0 })),
        P(l) !== "svelte-1hqr2yq" && (l.textContent = t),
        (n = H(x)),
        (s = h(x, "DIV", { class: !0 }));
      var F = S(s);
      f = h(F, "DIV", { class: !0 });
      var U = S(f);
      i = h(U, "SELECT", {
        class: !0,
        name: !0,
        id: !0,
        "aria-label": !0,
        "data-default": !0,
      });
      var w = S(i);
      (a = h(w, "OPTION", { ["data-svelte-h"]: !0 })),
        P(a) !== "svelte-zben0t" && (a.textContent = d),
        (m = h(w, "OPTION", { ["data-svelte-h"]: !0 })),
        P(m) !== "svelte-13dukju" && (m.textContent = b),
        (o = h(w, "OPTION", { ["data-svelte-h"]: !0 })),
        P(o) !== "svelte-k73uro" && (o.textContent = y),
        w.forEach(v),
        (g = H(U)),
        (D = h(U, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
        P(D) !== "svelte-10pd3to" && (D.textContent = p),
        U.forEach(v),
        F.forEach(v),
        (k = H(x)),
        E && E.l(x),
        (T = H(x)),
        C && C.l(x),
        (q = H(x)),
        I && I.l(x),
        x.forEach(v),
        this.h();
    },
    h() {
      (a.__value = "non_commercial"),
        O(a, a.__value),
        (a.selected = !0),
        (m.__value = "commercial"),
        O(m, m.__value),
        (o.__value = "self_hosted"),
        O(o, o.__value),
        u(i, "class", "form-select"),
        u(i, "name", "use"),
        u(i, "id", "use"),
        u(i, "aria-label", "Use"),
        u(i, "data-default", "non_commercial"),
        r[1].use === void 0 && le(() => r[2].call(i)),
        u(D, "for", "use"),
        u(f, "class", "form-floating mb-3"),
        u(s, "class", "col-md-3"),
        u(e, "class", "row py-3 px-0");
    },
    m(L, x) {
      V(L, e, x),
        c(e, l),
        c(e, n),
        c(e, s),
        c(s, f),
        c(f, i),
        c(i, a),
        c(i, m),
        c(i, o),
        G(i, r[1].use, !0),
        c(f, g),
        c(f, D),
        c(e, k),
        E && E.m(e, null),
        c(e, T),
        C && C.m(e, null),
        c(e, q),
        I && I.m(e, null),
        N || ((M = K(i, "change", r[2])), (N = !0));
    },
    p(L, [x]) {
      x & 2 && G(i, L[1].use),
        L[1].use == "non_commercial"
          ? E || ((E = Q()), E.c(), E.m(e, T))
          : E && (E.d(1), (E = null)),
        L[1].use == "commercial"
          ? C
            ? C.p(L, x)
            : ((C = W(L)), C.c(), C.m(e, q))
          : C && (C.d(1), (C = null)),
        L[1].use == "self_hosted"
          ? I
            ? I.p(L, x)
            : ((I = Y(L)), I.c(), I.m(e, null))
          : I && (I.d(1), (I = null));
    },
    i: J,
    o: J,
    d(L) {
      L && v(e), E && E.d(), C && C.d(), I && I.d(), (N = !1), M();
    },
  };
}
function de(r, e, l) {
  let t;
  se(r, B, (a) => l(1, (t = a)));
  let { requires_professional_plan: n = !1 } = e;
  function s() {
    (t.use = ae(this)), B.set(t);
  }
  function f() {
    (t.apikey = this.value), B.set(t);
  }
  function i() {
    (t.self_host_server = this.value), B.set(t);
  }
  return (
    (r.$$set = (a) => {
      "requires_professional_plan" in a &&
        l(0, (n = a.requires_professional_plan));
    }),
    [n, t, s, f, i]
  );
}
class be extends ue {
  constructor(e) {
    super(), ce(this, e, de, fe, te, { requires_professional_plan: 0 });
  }
}
export { be as L, me as h, pe as u };

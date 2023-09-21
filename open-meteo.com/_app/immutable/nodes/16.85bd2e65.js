import {
  s as tn,
  p as yr,
  f as c,
  a as _,
  l as U,
  O as an,
  g as u,
  d as m,
  c as v,
  F as f,
  h as g,
  m as q,
  j as s,
  P as E,
  Q as wt,
  y as Er,
  z as a,
  i as k,
  R as be,
  H as se,
  S as el,
  T as xr,
  N as ge,
  I as ln,
  J as rn,
  o as nn,
  K as Xa,
  e as Ir,
  U as Sa,
  V as Ta,
  W as Da,
} from "../chunks/scheduler.f440829a.js";
import {
  S as on,
  i as sn,
  f as Ar,
  b as _t,
  d as vt,
  m as bt,
  a as F,
  t as X,
  c as Kl,
  e as gt,
  h as ba,
  g as Xl,
} from "../chunks/index.2c544bcc.js";
import { e as L } from "../chunks/each.27ca486b.js";
import { L as dn } from "../chunks/LicenseSelector.1a7ea370.js";
import { L as cn, s as ga } from "../chunks/LocationSearch.b31bb8e5.js";
import { S as Sr, R as un } from "../chunks/SveltyPicker.733d133b.js";
import { u as hn } from "../chunks/url-hash-store.e5dcc183.js";
import { A as ei, c as va } from "../chunks/AccordionItem.b8146ec3.js";
const mn = ({ params: o }) => ({
    title: "Historical Weather API",
    subtitle: "Discover how weather has shaped our world from 1940 until now",
    hero: "/images/mountains2.1.webp",
  }),
  An = Object.freeze(
    Object.defineProperty({ __proto__: null, load: mn }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function Tr(o, l, i) {
  const n = o.slice();
  return (n[32] = l[i]), n;
}
function Dr(o, l, i) {
  const n = o.slice();
  return (n[35] = l[i]), n;
}
function Pr(o, l, i) {
  const n = o.slice();
  return (n[32] = l[i]), n;
}
function Or(o, l, i) {
  const n = o.slice();
  return (n[35] = l[i]), n;
}
function Mr(o, l, i) {
  const n = o.slice();
  return (n[32] = l[i]), n;
}
function Lr(o, l, i) {
  const n = o.slice();
  return (n[35] = l[i]), n;
}
function Rr(o, l, i) {
  const n = o.slice();
  return (n[32] = l[i]), n;
}
function $r(o, l, i) {
  const n = o.slice();
  return (n[35] = l[i]), n;
}
function Nr(o, l, i) {
  const n = o.slice();
  return (n[32] = l[i]), n;
}
function Hr(o, l, i) {
  const n = o.slice();
  return (n[35] = l[i]), n;
}
function Vr(o) {
  let l,
    i = "Start and end date must be set",
    n,
    t;
  return {
    c() {
      (l = c("div")), (l.textContent = i), this.h();
    },
    l(r) {
      (l = u(r, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        f(l) !== "svelte-o48bx3" && (l.textContent = i),
        this.h();
    },
    h() {
      s(l, "class", "invalid-tooltip");
    },
    m(r, e) {
      k(r, l, e), (t = !0);
    },
    i(r) {
      t ||
        (wt(() => {
          t && (n || (n = ba(l, ga, {}, !0)), n.run(1));
        }),
        (t = !0));
    },
    o(r) {
      n || (n = ba(l, ga, {}, !1)), n.run(0), (t = !1);
    },
    d(r) {
      r && m(l), r && n && n.end();
    },
  };
}
function zr(o) {
  let l,
    i = "Start and end date must be set",
    n,
    t;
  return {
    c() {
      (l = c("div")), (l.textContent = i), this.h();
    },
    l(r) {
      (l = u(r, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        f(l) !== "svelte-o48bx3" && (l.textContent = i),
        this.h();
    },
    h() {
      s(l, "class", "invalid-tooltip");
    },
    m(r, e) {
      k(r, l, e), (t = !0);
    },
    i(r) {
      t ||
        (wt(() => {
          t && (n || (n = ba(l, ga, {}, !0)), n.run(1));
        }),
        (t = !0));
    },
    o(r) {
      n || (n = ba(l, ga, {}, !1)), n.run(0), (t = !1);
    },
    d(r) {
      r && m(l), r && n && n.end();
    },
  };
}
function Br(o) {
  let l,
    i,
    n,
    t,
    r = o[35].label + "",
    e,
    d,
    p,
    S;
  return (
    (d = Da(o[18][2])),
    {
      c() {
        (l = c("div")),
          (i = c("input")),
          (n = _()),
          (t = c("label")),
          (e = U(r)),
          this.h();
      },
      l(y) {
        l = u(y, "DIV", { class: !0 });
        var w = g(l);
        (i = u(w, "INPUT", { class: !0, type: !0, id: !0, name: !0 })),
          (n = v(w)),
          (t = u(w, "LABEL", { class: !0, for: !0 }));
        var O = g(t);
        (e = q(O, r)), O.forEach(m), w.forEach(m), this.h();
      },
      h() {
        s(i, "class", "form-check-input"),
          s(i, "type", "checkbox"),
          (i.__value = o[35].name),
          E(i, i.__value),
          s(i, "id", o[35].name + "_hourly"),
          s(i, "name", "hourly"),
          s(t, "class", "form-check-label"),
          s(t, "for", o[35].name + "_hourly"),
          s(l, "class", "form-check"),
          d.p(i);
      },
      m(y, w) {
        k(y, l, w),
          a(l, i),
          (i.checked = ~(o[0].hourly || []).indexOf(i.__value)),
          a(l, n),
          a(l, t),
          a(t, e),
          p || ((S = se(i, "change", o[17])), (p = !0));
      },
      p(y, w) {
        w[0] & 1 && (i.checked = ~(y[0].hourly || []).indexOf(i.__value));
      },
      d(y) {
        y && m(l), d.r(), (p = !1), S();
      },
    }
  );
}
function Wr(o) {
  let l,
    i,
    n = L(o[32]),
    t = [];
  for (let r = 0; r < n.length; r += 1) t[r] = Br(Hr(o, n, r));
  return {
    c() {
      l = c("div");
      for (let r = 0; r < t.length; r += 1) t[r].c();
      (i = _()), this.h();
    },
    l(r) {
      l = u(r, "DIV", { class: !0 });
      var e = g(l);
      for (let d = 0; d < t.length; d += 1) t[d].l(e);
      (i = v(e)), e.forEach(m), this.h();
    },
    h() {
      s(l, "class", "col-md-3");
    },
    m(r, e) {
      k(r, l, e);
      for (let d = 0; d < t.length; d += 1) t[d] && t[d].m(l, null);
      a(l, i);
    },
    p(r, e) {
      if (e[0] & 129) {
        n = L(r[32]);
        let d;
        for (d = 0; d < n.length; d += 1) {
          const p = Hr(r, n, d);
          t[d] ? t[d].p(p, e) : ((t[d] = Br(p)), t[d].c(), t[d].m(l, i));
        }
        for (; d < t.length; d += 1) t[d].d(1);
        t.length = n.length;
      }
    },
    d(r) {
      r && m(l), ge(t, r);
    },
  };
}
function Fr(o) {
  let l,
    i,
    n,
    t,
    r = o[35].label + "",
    e,
    d,
    p,
    S;
  return (
    (d = Da(o[18][2])),
    {
      c() {
        (l = c("div")),
          (i = c("input")),
          (n = _()),
          (t = c("label")),
          (e = U(r)),
          this.h();
      },
      l(y) {
        l = u(y, "DIV", { class: !0 });
        var w = g(l);
        (i = u(w, "INPUT", { class: !0, type: !0, id: !0, name: !0 })),
          (n = v(w)),
          (t = u(w, "LABEL", { class: !0, for: !0 }));
        var O = g(t);
        (e = q(O, r)), O.forEach(m), w.forEach(m), this.h();
      },
      h() {
        s(i, "class", "form-check-input"),
          s(i, "type", "checkbox"),
          (i.__value = o[35].name),
          E(i, i.__value),
          s(i, "id", o[35].name + "_hourly"),
          s(i, "name", "hourly"),
          s(t, "class", "form-check-label"),
          s(t, "for", o[35].name + "_hourly"),
          s(l, "class", "form-check"),
          d.p(i);
      },
      m(y, w) {
        k(y, l, w),
          a(l, i),
          (i.checked = ~(o[0].hourly || []).indexOf(i.__value)),
          a(l, n),
          a(l, t),
          a(t, e),
          p || ((S = se(i, "change", o[19])), (p = !0));
      },
      p(y, w) {
        w[0] & 1 && (i.checked = ~(y[0].hourly || []).indexOf(i.__value));
      },
      d(y) {
        y && m(l), d.r(), (p = !1), S();
      },
    }
  );
}
function Ur(o) {
  let l,
    i,
    n = L(o[32]),
    t = [];
  for (let r = 0; r < n.length; r += 1) t[r] = Fr($r(o, n, r));
  return {
    c() {
      l = c("div");
      for (let r = 0; r < t.length; r += 1) t[r].c();
      (i = _()), this.h();
    },
    l(r) {
      l = u(r, "DIV", { class: !0 });
      var e = g(l);
      for (let d = 0; d < t.length; d += 1) t[d].l(e);
      (i = v(e)), e.forEach(m), this.h();
    },
    h() {
      s(l, "class", "col-md-6");
    },
    m(r, e) {
      k(r, l, e);
      for (let d = 0; d < t.length; d += 1) t[d] && t[d].m(l, null);
      a(l, i);
    },
    p(r, e) {
      if (e[0] & 513) {
        n = L(r[32]);
        let d;
        for (d = 0; d < n.length; d += 1) {
          const p = $r(r, n, d);
          t[d] ? t[d].p(p, e) : ((t[d] = Fr(p)), t[d].c(), t[d].m(l, i));
        }
        for (; d < t.length; d += 1) t[d].d(1);
        t.length = n.length;
      }
    },
    d(r) {
      r && m(l), ge(t, r);
    },
  };
}
function pn(o) {
  let l,
    i = L(o[9]),
    n = [];
  for (let t = 0; t < i.length; t += 1) n[t] = Ur(Rr(o, i, t));
  return {
    c() {
      for (let t = 0; t < n.length; t += 1) n[t].c();
      l = Ir();
    },
    l(t) {
      for (let r = 0; r < n.length; r += 1) n[r].l(t);
      l = Ir();
    },
    m(t, r) {
      for (let e = 0; e < n.length; e += 1) n[e] && n[e].m(t, r);
      k(t, l, r);
    },
    p(t, r) {
      if (r[0] & 513) {
        i = L(t[9]);
        let e;
        for (e = 0; e < i.length; e += 1) {
          const d = Rr(t, i, e);
          n[e]
            ? n[e].p(d, r)
            : ((n[e] = Ur(d)), n[e].c(), n[e].m(l.parentNode, l));
        }
        for (; e < n.length; e += 1) n[e].d(1);
        n.length = i.length;
      }
    },
    d(t) {
      t && m(l), ge(n, t);
    },
  };
}
function qr(o) {
  let l,
    i,
    n,
    t,
    r = o[35].label + "",
    e,
    d,
    p,
    S;
  return (
    (d = Da(o[18][2])),
    {
      c() {
        (l = c("div")),
          (i = c("input")),
          (n = _()),
          (t = c("label")),
          (e = U(r)),
          this.h();
      },
      l(y) {
        l = u(y, "DIV", { class: !0 });
        var w = g(l);
        (i = u(w, "INPUT", { class: !0, type: !0, id: !0, name: !0 })),
          (n = v(w)),
          (t = u(w, "LABEL", { class: !0, for: !0 }));
        var O = g(t);
        (e = q(O, r)), O.forEach(m), w.forEach(m), this.h();
      },
      h() {
        s(i, "class", "form-check-input"),
          s(i, "type", "checkbox"),
          (i.__value = o[35].name),
          E(i, i.__value),
          s(i, "id", o[35].name + "_hourly"),
          s(i, "name", "hourly"),
          s(t, "class", "form-check-label"),
          s(t, "for", o[35].name + "_hourly"),
          s(l, "class", "form-check"),
          d.p(i);
      },
      m(y, w) {
        k(y, l, w),
          a(l, i),
          (i.checked = ~(o[0].hourly || []).indexOf(i.__value)),
          a(l, n),
          a(l, t),
          a(t, e),
          p || ((S = se(i, "change", o[20])), (p = !0));
      },
      p(y, w) {
        w[0] & 1 && (i.checked = ~(y[0].hourly || []).indexOf(i.__value));
      },
      d(y) {
        y && m(l), d.r(), (p = !1), S();
      },
    }
  );
}
function Gr(o) {
  let l,
    i = L(o[32]),
    n = [];
  for (let t = 0; t < i.length; t += 1) n[t] = qr(Lr(o, i, t));
  return {
    c() {
      l = c("div");
      for (let t = 0; t < n.length; t += 1) n[t].c();
      this.h();
    },
    l(t) {
      l = u(t, "DIV", { class: !0 });
      var r = g(l);
      for (let e = 0; e < n.length; e += 1) n[e].l(r);
      r.forEach(m), this.h();
    },
    h() {
      s(l, "class", "col-md-6");
    },
    m(t, r) {
      k(t, l, r);
      for (let e = 0; e < n.length; e += 1) n[e] && n[e].m(l, null);
    },
    p(t, r) {
      if (r[0] & 1025) {
        i = L(t[32]);
        let e;
        for (e = 0; e < i.length; e += 1) {
          const d = Lr(t, i, e);
          n[e] ? n[e].p(d, r) : ((n[e] = qr(d)), n[e].c(), n[e].m(l, null));
        }
        for (; e < n.length; e += 1) n[e].d(1);
        n.length = i.length;
      }
    },
    d(t) {
      t && m(l), ge(n, t);
    },
  };
}
function fn(o) {
  let l,
    i,
    n = `<small class="text-muted">Note: Solar radiation is averaged over the past hour. Use
						<mark>instant</mark> for radiation at the indicated time.</small>`,
    t = L(o[10]),
    r = [];
  for (let e = 0; e < t.length; e += 1) r[e] = Gr(Mr(o, t, e));
  return {
    c() {
      for (let e = 0; e < r.length; e += 1) r[e].c();
      (l = _()), (i = c("div")), (i.innerHTML = n), this.h();
    },
    l(e) {
      for (let d = 0; d < r.length; d += 1) r[d].l(e);
      (l = v(e)),
        (i = u(e, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        f(i) !== "svelte-ibnyz" && (i.innerHTML = n),
        this.h();
    },
    h() {
      s(i, "class", "col-md-12");
    },
    m(e, d) {
      for (let p = 0; p < r.length; p += 1) r[p] && r[p].m(e, d);
      k(e, l, d), k(e, i, d);
    },
    p(e, d) {
      if (d[0] & 1025) {
        t = L(e[10]);
        let p;
        for (p = 0; p < t.length; p += 1) {
          const S = Mr(e, t, p);
          r[p]
            ? r[p].p(S, d)
            : ((r[p] = Gr(S)), r[p].c(), r[p].m(l.parentNode, l));
        }
        for (; p < r.length; p += 1) r[p].d(1);
        r.length = t.length;
      }
    },
    d(e) {
      e && (m(l), m(i)), ge(r, e);
    },
  };
}
function Jr(o) {
  let l,
    i,
    n,
    t,
    r = o[35].label + "",
    e,
    d,
    p,
    S,
    y = o[35].caption + "",
    w,
    O,
    I,
    M,
    Ze;
  return (
    (I = Da(o[18][1])),
    {
      c() {
        (l = c("div")),
          (i = c("input")),
          (n = _()),
          (t = c("label")),
          (e = U(r)),
          (d = U(" ")),
          (p = c("span")),
          (S = U("(")),
          (w = U(y)),
          (O = U(")")),
          this.h();
      },
      l(z) {
        l = u(z, "DIV", { class: !0 });
        var ee = g(l);
        (i = u(ee, "INPUT", { class: !0, type: !0, id: !0, name: !0 })),
          (n = v(ee)),
          (t = u(ee, "LABEL", { class: !0, for: !0 }));
        var he = g(t);
        (e = q(he, r)), (d = q(he, " ")), (p = u(he, "SPAN", { class: !0 }));
        var te = g(p);
        (S = q(te, "(")),
          (w = q(te, y)),
          (O = q(te, ")")),
          te.forEach(m),
          he.forEach(m),
          ee.forEach(m),
          this.h();
      },
      h() {
        s(i, "class", "form-check-input"),
          s(i, "type", "checkbox"),
          (i.__value = o[35].name),
          E(i, i.__value),
          s(i, "id", o[35].name + "_model"),
          s(i, "name", "models"),
          s(p, "class", "text-muted"),
          s(t, "class", "form-check-label"),
          s(t, "for", o[35].name + "_model"),
          s(l, "class", "form-check"),
          I.p(i);
      },
      m(z, ee) {
        k(z, l, ee),
          a(l, i),
          (i.checked = ~(o[0].models || []).indexOf(i.__value)),
          a(l, n),
          a(l, t),
          a(t, e),
          a(t, d),
          a(t, p),
          a(p, S),
          a(p, w),
          a(p, O),
          M || ((Ze = se(i, "change", o[21])), (M = !0));
      },
      p(z, ee) {
        ee[0] & 1 && (i.checked = ~(z[0].models || []).indexOf(i.__value));
      },
      d(z) {
        z && m(l), I.r(), (M = !1), Ze();
      },
    }
  );
}
function jr(o) {
  let l,
    i = L(o[32]),
    n = [];
  for (let t = 0; t < i.length; t += 1) n[t] = Jr(Or(o, i, t));
  return {
    c() {
      l = c("div");
      for (let t = 0; t < n.length; t += 1) n[t].c();
      this.h();
    },
    l(t) {
      l = u(t, "DIV", { class: !0 });
      var r = g(l);
      for (let e = 0; e < n.length; e += 1) n[e].l(r);
      r.forEach(m), this.h();
    },
    h() {
      s(l, "class", "col-md-4 mb-3");
    },
    m(t, r) {
      k(t, l, r);
      for (let e = 0; e < n.length; e += 1) n[e] && n[e].m(l, null);
    },
    p(t, r) {
      if (r[0] & 2049) {
        i = L(t[32]);
        let e;
        for (e = 0; e < i.length; e += 1) {
          const d = Or(t, i, e);
          n[e] ? n[e].p(d, r) : ((n[e] = Jr(d)), n[e].c(), n[e].m(l, null));
        }
        for (; e < n.length; e += 1) n[e].d(1);
        n.length = i.length;
      }
    },
    d(t) {
      t && m(l), ge(n, t);
    },
  };
}
function _n(o) {
  let l,
    i,
    n = `<small class="text-muted">Note: The default <mark>Best Match</mark> combines ERA5 and ERA5-Land seamlessly. The
						CERRA model will also be included in <mark>Best Match</mark> once real-time updates become
						available.</small>`,
    t = L(o[11]),
    r = [];
  for (let e = 0; e < t.length; e += 1) r[e] = jr(Pr(o, t, e));
  return {
    c() {
      for (let e = 0; e < r.length; e += 1) r[e].c();
      (l = _()), (i = c("div")), (i.innerHTML = n), this.h();
    },
    l(e) {
      for (let d = 0; d < r.length; d += 1) r[d].l(e);
      (l = v(e)),
        (i = u(e, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        f(i) !== "svelte-hu6iee" && (i.innerHTML = n),
        this.h();
    },
    h() {
      s(i, "class", "col-md-12");
    },
    m(e, d) {
      for (let p = 0; p < r.length; p += 1) r[p] && r[p].m(e, d);
      k(e, l, d), k(e, i, d);
    },
    p(e, d) {
      if (d[0] & 2049) {
        t = L(e[11]);
        let p;
        for (p = 0; p < t.length; p += 1) {
          const S = Pr(e, t, p);
          r[p]
            ? r[p].p(S, d)
            : ((r[p] = jr(S)), r[p].c(), r[p].m(l.parentNode, l));
        }
        for (; p < r.length; p += 1) r[p].d(1);
        r.length = t.length;
      }
    },
    d(e) {
      e && (m(l), m(i)), ge(r, e);
    },
  };
}
function Zr(o) {
  let l,
    i,
    n,
    t,
    r = o[35].label + "",
    e,
    d,
    p,
    S;
  return (
    (d = Da(o[18][0])),
    {
      c() {
        (l = c("div")),
          (i = c("input")),
          (n = _()),
          (t = c("label")),
          (e = U(r)),
          this.h();
      },
      l(y) {
        l = u(y, "DIV", { class: !0 });
        var w = g(l);
        (i = u(w, "INPUT", { class: !0, type: !0, id: !0, name: !0 })),
          (n = v(w)),
          (t = u(w, "LABEL", { class: !0, for: !0 }));
        var O = g(t);
        (e = q(O, r)), O.forEach(m), w.forEach(m), this.h();
      },
      h() {
        s(i, "class", "form-check-input"),
          s(i, "type", "checkbox"),
          (i.__value = o[35].name),
          E(i, i.__value),
          s(i, "id", o[35].name + "_daily"),
          s(i, "name", "daily"),
          s(t, "class", "form-check-label"),
          s(t, "for", o[35].name + "_daily"),
          s(l, "class", "form-check"),
          d.p(i);
      },
      m(y, w) {
        k(y, l, w),
          a(l, i),
          (i.checked = ~(o[0].daily || []).indexOf(i.__value)),
          a(l, n),
          a(l, t),
          a(t, e),
          p || ((S = se(i, "change", o[22])), (p = !0));
      },
      p(y, w) {
        w[0] & 1 && (i.checked = ~(y[0].daily || []).indexOf(i.__value));
      },
      d(y) {
        y && m(l), d.r(), (p = !1), S();
      },
    }
  );
}
function Yr(o) {
  let l,
    i,
    n = L(o[32]),
    t = [];
  for (let r = 0; r < n.length; r += 1) t[r] = Zr(Dr(o, n, r));
  return {
    c() {
      l = c("div");
      for (let r = 0; r < t.length; r += 1) t[r].c();
      (i = _()), this.h();
    },
    l(r) {
      l = u(r, "DIV", { class: !0 });
      var e = g(l);
      for (let d = 0; d < t.length; d += 1) t[d].l(e);
      (i = v(e)), e.forEach(m), this.h();
    },
    h() {
      s(l, "class", "col-md-6");
    },
    m(r, e) {
      k(r, l, e);
      for (let d = 0; d < t.length; d += 1) t[d] && t[d].m(l, null);
      a(l, i);
    },
    p(r, e) {
      if (e[0] & 257) {
        n = L(r[32]);
        let d;
        for (d = 0; d < n.length; d += 1) {
          const p = Dr(r, n, d);
          t[d] ? t[d].p(p, e) : ((t[d] = Zr(p)), t[d].c(), t[d].m(l, i));
        }
        for (; d < t.length; d += 1) t[d].d(1);
        t.length = n.length;
      }
    },
    d(r) {
      r && m(l), ge(t, r);
    },
  };
}
function Qr(o) {
  let l,
    i = "Timezone is required for daily variables",
    n,
    t;
  return {
    c() {
      (l = c("div")), (l.textContent = i), this.h();
    },
    l(r) {
      (l = u(r, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        f(l) !== "svelte-15t00yr" && (l.textContent = i),
        this.h();
    },
    h() {
      s(l, "class", "invalid-tooltip");
    },
    m(r, e) {
      k(r, l, e), (t = !0);
    },
    i(r) {
      t ||
        (wt(() => {
          t && (n || (n = ba(l, ga, {}, !0)), n.run(1));
        }),
        (t = !0));
    },
    o(r) {
      n || (n = ba(l, ga, {}, !1)), n.run(0), (t = !1);
    },
    d(r) {
      r && m(l), r && n && n.end();
    },
  };
}
function vn(o) {
  let l,
    i,
    n,
    t,
    r = `The Open-Meteo Historical Weather API made available additional weather information dating back to
	1940! Read the <a href="https://openmeteo.substack.com/p/historical-weather-data-from-1940?sd=pf" target="_blank">blog article</a>.`,
    e,
    d,
    p,
    S,
    y = "Select Coordinates or City",
    w,
    O,
    I,
    M,
    Ze,
    z,
    ee = "Latitude",
    he,
    te,
    j,
    G,
    wa,
    we,
    Pa = "Longitude",
    Ca,
    Ye,
    me,
    ka,
    ne,
    Qe,
    Oa = "Specify Time Interval",
    ya,
    Ke,
    ae,
    T,
    Ea,
    Xe,
    oe,
    Ma = "Start date",
    Ce,
    et,
    tt,
    le,
    ie,
    de,
    Ct,
    kt,
    ti = "End date",
    tl,
    al,
    ke,
    Gt,
    ai = "Hourly Weather Variables",
    ll,
    il,
    Jt,
    ce,
    at,
    rl,
    lt,
    nl,
    it,
    ol,
    ye,
    jt,
    li = "Daily Weather Variables",
    sl,
    dl,
    V,
    Zt,
    ii = "Settings",
    cl,
    Yt,
    rt,
    Z,
    pe,
    ri = "Celsius °C",
    Ee,
    ni = "Fahrenheit °F",
    ul,
    yt,
    oi = "Temperature Unit",
    hl,
    Qt,
    nt,
    J,
    fe,
    si = "Km/h",
    xe,
    di = "m/s",
    Ie,
    ci = "Mph",
    Ae,
    ui = "Knots",
    ml,
    Et,
    hi = "Wind Speed Unit",
    pl,
    Kt,
    ot,
    Y,
    _e,
    mi = "Millimeter",
    Se,
    pi = "Inch",
    fl,
    xt,
    fi = "Precipitation Unit",
    _l,
    Xt,
    st,
    Q,
    ve,
    _i = "ISO 8601 (e.g. 2022-12-31)",
    Te,
    vi = "Unix timestamp",
    vl,
    It,
    bi = "Timeformat",
    bl,
    ea,
    ue,
    A,
    De,
    gi = "America/Anchorage",
    Pe,
    wi = "America/Los_Angeles",
    Oe,
    Ci = "America/Denver",
    Me,
    ki = "America/Chicago",
    Le,
    yi = "America/New_York",
    Re,
    Ei = "America/Sao_Paulo",
    $e,
    xi = "Not set (GMT+0)",
    Ne,
    Ii = "GMT+0",
    He,
    Ai = "Automatically detect time zone",
    Ve,
    Si = "Europe/London",
    ze,
    Ti = "Europe/Berlin",
    Be,
    Di = "Europe/Moscow",
    We,
    Pi = "Africa/Cairo",
    Fe,
    Oi = "Asia/Bangkok",
    Ue,
    Mi = "Asia/Singapore",
    qe,
    Li = "Asia/Tokyo",
    Ge,
    Ri = "Australia/Sydney",
    Je,
    $i = "Pacific/Auckland",
    gl,
    At,
    Ni = "Timezone",
    wl,
    Cl,
    St,
    Hi =
      '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="localhost" name="localhost" value="true"/> <label class="form-check-label" for="localhost">Use localhost server</label></div>',
    kl,
    Tt,
    La,
    Dt,
    Ra,
    je,
    Vi = "Data Sources",
    $a,
    dt,
    zi = `<div class="col-6"><p>The Historical Weather API is based on reanalysis datasets and uses a combination of weather
			station, aircraft, buoy, radar, and satellite observations to create a comprehensive record of
			past weather conditions. These datasets are able to fill in gaps by using mathematical models
			to estimate the values of various weather variables. As a result, reanalysis datasets are able
			to provide detailed historical weather information for locations that may not have had weather
			stations nearby, such as rural areas or the open ocean.</p> <p>You can access data dating back to 1940 with a delay of 5 days. If you&#39;re looking for weather
			information from previous days or weeks, our <a href="/en/docs" title="Weather Forecast API documentation">Forecast API</a>
			offers the <mark>&amp;past_days=</mark> feature for your convenience.</p></div> <div class="col-6"><p>The spatial resolution of a weather reanalysis dataset refers to the size of the grid cells
			used to represent the data. In the case of the reanalysis dataset described, the cells
			covering land have a resolution of 11 km, while those covering the ocean have a resolution of
			25 km. For the region of Europe, the resolution is increased to 5 km, although this higher
			resolution is only available up until June 2021, with real-time updates expected to be
			available sometime in 2023. In general, a higher spatial resolution means that the data is
			more detailed and represents the weather conditions more accurately at smaller scales.</p></div>`,
    Na,
    ct,
    Bi =
      '<table class="table"><thead><tr><th scope="col">Reanalysis Model</th> <th scope="col">Region</th> <th scope="col">Spatial Resolution</th> <th scope="col">Temporal Resolution</th> <th scope="col">Data Availability</th> <th scope="col">Update frequency</th></tr></thead> <tbody><tr><th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-single-levels?tab=overview">ERA5</a></th> <td>Global</td> <td>0.25° (~25 km)</td> <td>Hourly</td> <td>1940 to present</td> <td>Daily with 5 days delay</td></tr> <tr><th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-land?tab=overview">ERA5-Land</a></th> <td>Global</td> <td>0.1° (~11 km)</td> <td>Hourly</td> <td>1950 to present</td> <td>Daily with 5 days delay</td></tr> <tr><th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-cerra-single-levels?tab=overview">CERRA</a></th> <td>Europe</td> <td>5 km</td> <td>Hourly</td> <td>1985 to June 2021</td> <td>-</td></tr></tbody></table>',
    Ha,
    Pt,
    Wi = `Different reanalysis models may include different sets of weather variables in their datasets. For
	example, the ERA5 model includes all weather variables, while the ERA5-Land model only includes
	surface variables such as temperature, humidity, soil temperature, and soil moisture. The CERRA
	model includes most weather variables, but does not include soil temperature and moisture. It is
	important to be aware of the specific variables that are included in a particular reanalysis model
	in order to understand the limitations and potential biases of the data.`,
    Va,
    C,
    Ot,
    Fi = "API Documentation",
    yl,
    ta,
    Ui = `The API endpoint <mark>/v1/archive</mark> allows users to retrieve historical weather data for a
		specific location and time period. To use this endpoint, you can specify a geographical coordinate,
		a time interval, and a list of weather variables that they are interested in. The endpoint will then
		return the requested data in a format that can be easily accessed and used by applications or other
		software. This endpoint can be very useful for researchers and other users who need to access detailed
		historical weather data for specific locations and time periods.`,
    El,
    aa,
    qi = "All URL parameters are listed below:",
    xl,
    Mt,
    Gi = `<table class="table"><thead><tr><th scope="col">Parameter</th> <th scope="col">Format</th> <th scope="col">Required</th> <th scope="col">Default</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row">latitude<br/>longitude</th> <td>Floating point</td> <td>Yes</td> <td></td> <td>Geographical WGS84 coordinate of the location</td></tr> <tr><th scope="row">elevation</th> <td>Floating point</td> <td>No</td> <td></td> <td>The elevation used for statistical downscaling. Per default, a <a href="https://openmeteo.substack.com/p/improving-weather-forecasts-with" title="Elevation based grid-cell selection explained">90 meter digital elevation model is used</a>. You can manually set the elevation to correctly match mountain peaks. If
						<mark>&amp;elevation=nan</mark> is specified, downscaling will be disabled and the API uses the
						average grid-cell height.</td></tr> <tr><th scope="row">start_date<br/>end_date</th> <td>String (yyyy-mm-dd)</td> <td>Yes</td> <td></td> <td>The time interval to get weather data. A day must be specified as an ISO8601 date (e.g.
						<mark>2022-12-31</mark>).</td></tr> <tr><th scope="row">hourly</th> <td>String array</td> <td>No</td> <td></td> <td>A list of weather variables which should be returned. Values can be comma separated, or
						multiple
						<mark>&amp;hourly=</mark> parameter in the URL can be used.</td></tr> <tr><th scope="row">daily</th> <td>String array</td> <td>No</td> <td></td> <td>A list of daily weather variable aggregations which should be returned. Values can be
						comma separated, or multiple <mark>&amp;daily=</mark> parameter in the URL can be used. If
						daily weather variables are specified, parameter <mark>timezone</mark> is required.</td></tr> <tr><th scope="row">temperature_unit</th> <td>String</td> <td>No</td> <td><mark>celsius</mark></td> <td>If <mark>fahrenheit</mark> is set, all temperature values are converted to Fahrenheit.</td></tr> <tr><th scope="row">windspeed_unit</th> <td>String</td> <td>No</td> <td><mark>kmh</mark></td> <td>Other wind speed speed units: <mark>ms</mark>, <mark>mph</mark> and <mark>kn</mark></td></tr> <tr><th scope="row">precipitation_unit</th> <td>String</td> <td>No</td> <td><mark>mm</mark></td> <td>Other precipitation amount units: <mark>inch</mark></td></tr> <tr><th scope="row">timeformat</th> <td>String</td> <td>No</td> <td><mark>iso8601</mark></td> <td>If format <mark>unixtime</mark> is selected, all time values are returned in UNIX epoch
						time in seconds. Please note that all time is then in GMT+0! For daily values with unix
						timestamp, please apply
						<mark>utc_offset_seconds</mark> again to get the correct date.</td></tr> <tr><th scope="row">timezone</th> <td>String</td> <td>No</td> <td><mark>GMT</mark></td> <td>If <mark>timezone</mark> is set, all timestamps are returned as local-time and data is
						returned starting at 00:00 local-time. Any time zone name from the
						<a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">time zone database</a>
						is supported If <mark>auto</mark> is set as a time zone, the coordinates will be automatically
						resolved to the local time zone..</td></tr> <tr><th scope="row">cell_selection</th> <td>String</td> <td>No</td> <td><mark>land</mark></td> <td>Set a preference how grid-cells are selected. The default <mark>land</mark> finds a
						suitable grid-cell on land with
						<a href="https://openmeteo.substack.com/p/improving-weather-forecasts-with" title="Elevation based grid-cell selection explained">similar elevation to the requested coordinates using a 90-meter digital elevation
							model</a>.
						<mark>sea</mark> prefers grid-cells on sea. <mark>nearest</mark> selects the nearest possible
						grid-cell.</td></tr> <tr><th scope="row">apikey</th> <td>String</td> <td>No</td> <td></td> <td>Only required to commercial use to access reserved API resources for customers. The
						server URL requires the prefix <mark>customer-</mark>. See
						<a href="/en/pricing" title="Pricing information to use the weather API commercially">pricing</a> for more information.</td></tr></tbody></table>`,
    Il,
    la,
    Ji = `Additional optional URL parameters will be added. For API stability, no required parameters will
		be added in the future!`,
    Al,
    Lt,
    ji = "Hourly Parameter Definition",
    Sl,
    ia,
    Zi = `The parameter <mark>&amp;hourly=</mark> accepts the following values. Most weather variables are given
		as an instantaneous value for the indicated hour. Some variables like precipitation are calculated
		from the preceding hour as and average or sum.`,
    Tl,
    Rt,
    Yi = `<table class="table"><thead><tr><th scope="col">Variable</th> <th scope="col">Valid time</th> <th scope="col">Unit</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row">temperature_2m</th> <td>Instant</td> <td>°C (°F)</td> <td>Air temperature at 2 meters above ground</td></tr> <tr><th scope="row">relativehumidity_2m</th> <td>Instant</td> <td>%</td> <td>Relative humidity at 2 meters above ground</td></tr> <tr><th scope="row">dewpoint_2m</th> <td>Instant</td> <td>°C (°F)</td> <td>Dew point temperature at 2 meters above ground</td></tr> <tr><th scope="row">apparent_temperature</th> <td>Instant</td> <td>°C (°F)</td> <td>Apparent temperature is the perceived feels-like temperature combining wind chill
						factor, relative humidity and solar radiation</td></tr> <tr><th scope="row">pressure_msl<br/>surface_pressure</th> <td>Instant</td> <td>hPa</td> <td>Atmospheric air pressure reduced to mean sea level (msl) or pressure at surface.
						Typically pressure on mean sea level is used in meteorology. Surface pressure gets lower
						with increasing elevation.</td></tr> <tr><th scope="row">precipitation</th> <td>Preceding hour sum</td> <td>mm (inch)</td> <td>Total precipitation (rain, showers, snow) sum of the preceding hour. Data is stored
						with a 0.1 mm precision. If precipitation data is summed up to monthly sums, there might
						be small inconsistencies with the total precipitation amount.</td></tr> <tr><th scope="row">rain</th> <td>Preceding hour sum</td> <td>mm (inch)</td> <td>Only liquid precipitation of the preceding hour including local showers and rain from
						large scale systems.</td></tr> <tr><th scope="row">snowfall</th> <td>Preceding hour sum</td> <td>cm (inch)</td> <td>Snowfall amount of the preceding hour in centimeters. For the water equivalent in
						millimeter, divide by 7. E.g. 7 cm snow = 10 mm precipitation water equivalent</td></tr> <tr><th scope="row">cloudcover</th> <td>Instant</td> <td>%</td> <td>Total cloud cover as an area fraction</td></tr> <tr><th scope="row">cloudcover_low</th> <td>Instant</td> <td>%</td> <td>Low level clouds and fog up to 2 km altitude</td></tr> <tr><th scope="row">cloudcover_mid</th> <td>Instant</td> <td>%</td> <td>Mid level clouds from 2 to 6 km altitude</td></tr> <tr><th scope="row">cloudcover_high</th> <td>Instant</td> <td>%</td> <td>High level clouds from 6 km altitude</td></tr> <tr><th scope="row">shortwave_radiation</th> <td>Preceding hour mean</td> <td>W/m²</td> <td>Shortwave solar radiation as average of the preceding hour. This is equal to the total
						global horizontal irradiation</td></tr> <tr><th scope="row">direct_radiation<br/>direct_normal_irradiance</th> <td>Preceding hour mean</td> <td>W/m²</td> <td>Direct solar radiation as average of the preceding hour on the horizontal plane and the
						normal plane (perpendicular to the sun)</td></tr> <tr><th scope="row">diffuse_radiation</th> <td>Preceding hour mean</td> <td>W/m²</td> <td>Diffuse solar radiation as average of the preceding hour</td></tr> <tr><th scope="row">windspeed_10m<br/>windspeed_100m</th> <td>Instant</td> <td>km/h (mph, m/s, knots)</td> <td>Wind speed at 10 or 100 meters above ground. Wind speed on 10 meters is the standard
						level.</td></tr> <tr><th scope="row">winddirection_10m<br/>winddirection_100m</th> <td>Instant</td> <td>°</td> <td>Wind direction at 10 or 100 meters above ground</td></tr> <tr><th scope="row">windgusts_10m</th> <td>Instant</td> <td>km/h (mph, m/s, knots)</td> <td>Gusts at 10 meters above ground of the indicated hour. Wind gusts in <mark>CERRA</mark>
						are defined as the maximum wind gusts of the preceding hour. Please consult the
						<a href="https://www.ecmwf.int/en/elibrary/81271-ifs-documentation-cy47r3-part-iv-physical-processes">ECMWF IFS documentation</a> for more information on how wind gusts are parameterized in weather models.</td></tr> <tr><th scope="row">et0_fao_evapotranspiration</th> <td>Preceding hour sum</td> <td>mm (inch)</td> <td>ET₀ Reference Evapotranspiration of a well watered grass field. Based on <a href="https://www.fao.org/3/x0490e/x0490e04.htm" target="_blank">FAO-56 Penman-Monteith equations</a>
						ET₀ is calculated from temperature, wind speed, humidity and solar radiation. Unlimited soil
						water is assumed. ET₀ is commonly used to estimate the required irrigation for plants.</td></tr> <tr><th scope="row">weathercode</th> <td>Instant</td> <td>WMO code</td> <td>Weather condition as a numeric code. Follow WMO weather interpretation codes. See table
						below for details. Weather code is calculated from cloud cover analysis, precipitation
						and snowfall. As barely no information about atmospheric stability is available,
						estimation about thunderstorms is not possible.</td></tr> <tr><th scope="row">vapor_pressure_deficit</th> <td>Instant</td> <td>kPa</td> <td>Vapor Pressure Deificit (VPD) in kilopascal (kPa). For high VPD (&gt;1.6), water
						transpiration of plants increases. For low VPD (&lt;0.4), transpiration decreases</td></tr> <tr><th scope="row">soil_temperature_0_to_7cm<br/>soil_temperature_7_to_28cm<br/>soil_temperature_28_to_100cm<br/>soil_temperature_100_to_255cm</th> <td>Instant</td> <td>°C (°F)</td> <td>Average temperature of different soil levels below ground.</td></tr> <tr><th scope="row">soil_moisture_0_to_7cm<br/>soil_moisture_7_to_28cm<br/>soil_moisture_28_to_100cm<br/>soil_moisture_100_to_255cm</th> <td>Instant</td> <td>m³/m³</td> <td>Average soil water content as volumetric mixing ratio at 0-7, 7-28, 28-100 and 100-255
						cm depths.</td></tr></tbody></table>`,
    Dl,
    $t,
    Qi = "Daily Parameter Definition",
    Pl,
    ra,
    Ki =
      "Aggregations are a simple 24 hour aggregation from hourly values. The parameter <mark>&amp;daily=</mark> accepts the following values:",
    Ol,
    Nt,
    Xi =
      '<table class="table"><thead><tr><th scope="col">Variable</th> <th scope="col">Unit</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row">weathercode</th> <td>WMO code</td> <td>The most severe weather condition on a given day</td></tr> <tr><th scope="row">temperature_2m_max<br/>temperature_2m_min</th> <td>°C (°F)</td> <td>Maximum and minimum daily air temperature at 2 meters above ground</td></tr> <tr><th scope="row">apparent_temperature_max<br/>apparent_temperature_min</th> <td>°C (°F)</td> <td>Maximum and minimum daily apparent temperature</td></tr> <tr><th scope="row">precipitation_sum</th> <td>mm</td> <td>Sum of daily precipitation (including rain, showers and snowfall)</td></tr> <tr><th scope="row">rain_sum</th> <td>mm</td> <td>Sum of daily rain</td></tr> <tr><th scope="row">snowfall_sum</th> <td>cm</td> <td>Sum of daily snowfall</td></tr> <tr><th scope="row">precipitation_hours</th> <td>hours</td> <td>The number of hours with rain</td></tr> <tr><th scope="row">sunrise<br/>sunset</th> <td>iso8601</td> <td>Sun rise and set times</td></tr> <tr><th scope="row">windspeed_10m_max<br/>windgusts_10m_max</th> <td>km/h (mph, m/s, knots)</td> <td>Maximum wind speed and gusts on a day</td></tr> <tr><th scope="row">winddirection_10m_dominant</th> <td>°</td> <td>Dominant wind direction</td></tr> <tr><th scope="row">shortwave_radiation_sum</th> <td>MJ/m²</td> <td>The sum of solar radiaion on a given day in Megajoules</td></tr> <tr><th scope="row">et0_fao_evapotranspiration</th> <td>mm</td> <td>Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field</td></tr></tbody></table>',
    Ml,
    Ht,
    er = "JSON Return Object",
    Ll,
    na,
    tr = "On success a JSON object will be returned.",
    Rl,
    Vt,
    $l,
    zt,
    Nl,
    ar = `
  "latitude": 52.52,
  "longitude": 13.419,
  "generationtime_ms": 2.2119,
  "timezone": "Europe/Berlin",
  "timezone_abbreviation": "CEST",
  "hourly": {
    "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00", ...],
    "temperature_2m": [13, 12.7, 12.7, 12.5, 12.5, 12.8, 13, 12.9, 13.3, ...]
  },
  "hourly_units": {
    "temperature_2m": "°C"
  },
`,
    Hl,
    Vl,
    zl,
    Bl,
    Bt,
    lr = `<table class="table"><thead><tr><th scope="col">Parameter</th> <th scope="col">Format</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row">latitude, longitude</th> <td>Floating point</td> <td>WGS84 of the center of the weather grid-cell which was used to generate this forecast.
						This coordinate might be a few kilometers away from the requested coordinate.</td></tr> <tr><th scope="row">elevation</th> <td>Floating point</td> <td>The elevation from a 90 meter digital elevation model. This effects which grid-cell is
						selected (see parameter <mark>cell_selection</mark>). Statistical downscaling is used to
						adapt weather conditions for this elevation. This elevation can also be controlled with
						the query parameter <mark>elevation</mark>. If <mark>&amp;elevation=nan</mark> is specified,
						all downscaling is disabled and the averge grid-cell elevation is used.</td></tr> <tr><th scope="row">generationtime_ms</th> <td>Floating point</td> <td>Generation time of the weather forecast in milliseconds. This is mainly used for
						performance monitoring and improvements.</td></tr> <tr><th scope="row">utc_offset_seconds</th> <td>Integer</td> <td>Applied timezone offset from the <mark>&amp;timezone=</mark> parameter.</td></tr> <tr><th scope="row">timezone<br/>timezone_abbreviation</th> <td>String</td> <td>Timezone identifier (e.g. <mark>Europe/Berlin</mark>) and abbreviation (e.g.
						<mark>CEST</mark>)</td></tr> <tr><th scope="row">hourly</th> <td>Object</td> <td>For each selected weather variable, data will be returned as a floating point array.
						Additionally a
						<mark>time</mark> array will be returned with ISO8601 timestamps.</td></tr> <tr><th scope="row">hourly_units</th> <td>Object</td> <td>For each selected weather variable, the unit will be listed here.</td></tr> <tr><th scope="row">daily</th> <td>Object</td> <td>For each selected daily weather variable, data will be returned as a floating point
						array. Additionally a <mark>time</mark> array will be returned with ISO8601 timestamps.</td></tr> <tr><th scope="row">daily_units</th> <td>Object</td> <td>For each selected daily weather variable, the unit will be listed here.</td></tr></tbody></table>`,
    Wl,
    Wt,
    ir = "Errors",
    Fl,
    oa,
    rr = `In case an error occurs, for example a URL parameter is not correctly specified, a JSON error
		object is returned with a HTTP 400 status code.`,
    Ul,
    xa,
    Ft,
    ql,
    nr = `
  "error": true,
  "reason": "Cannot initialize WeatherVariable from invalid String value tempeture_2m for key hourly"
`,
    Gl,
    Jl,
    za,
    ut,
    or = "Citation & Acknowledgement",
    Ba,
    Ut,
    sr = `We encourage researchers in the field of meteorology and related disciplines to cite Open-Meteo
	and its sources in their work. Citing not only gives proper credit but also promotes transparency,
	reproducibility, and collaboration within the scientific community. Together, let's foster a
	culture of recognition and support for open-data initiatives like Open-Meteo, ensuring that future
	researchers can benefit from the valuable resources it provides.`,
    Wa,
    ht,
    dr = `<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="pills-apa-tab" data-bs-toggle="pill" data-bs-target="#pills-apa" type="button" role="tab" aria-controls="pills-apa" aria-selected="true">APA</button></li> <li class="nav-item" role="presentation"><button class="nav-link" id="pills-mla-tab" data-bs-toggle="pill" data-bs-target="#pills-mla" type="button" role="tab" aria-controls="pills-mla" aria-selected="true">MLA</button></li> <li class="nav-item" role="presentation"><button class="nav-link" id="pills-harvard-tab" data-bs-toggle="pill" data-bs-target="#pills-harvard" type="button" role="tab" aria-controls="pills-harvard" aria-selected="true">Harvard</button></li> <li class="nav-item" role="presentation"><button class="nav-link" id="pills-bibtex-tab" data-bs-toggle="pill" data-bs-target="#pills-bibtex" type="button" role="tab" aria-controls="pills-bibtex" aria-selected="false">BibTeX</button></li></ul> <div class="tab-content" id="pills-tabContent"><div class="tab-pane fade show active" id="pills-apa" role="tabpanel" aria-labelledby="pills-apa-tab" tabindex="0"><p>Zippenfenig, P. (2023). Open-Meteo.com Weather API [Computer software]. Zenodo. <a title="zenodo publication" href="https://doi.org/10.5281/ZENODO.7970649">https://doi.org/10.5281/ZENODO.7970649</a></p> <p>Hersbach, H., Bell, B., Berrisford, P., Biavati, G., Horányi, A., Muñoz Sabater, J.,
				Nicolas, J., Peubey, C., Radu, R., Rozum, I., Schepers, D., Simmons, A., Soci, C., Dee, D.,
				Thépaut, J-N. (2023). ERA5 hourly data on single levels from 1940 to present [Data set].
				ECMWF. <a href="https://doi.org/10.24381/cds.adbb2d47" title="era5-land">https://doi.org/10.24381/cds.adbb2d47</a></p> <p>Muñoz Sabater, J. (2019). ERA5-Land hourly data from 2001 to present [Data set]. ECMWF. <a href="https://doi.org/10.24381/CDS.E2161BAC" title="era5-land">https://doi.org/10.24381/CDS.E2161BAC</a></p> <p>Schimanke S., Ridal M., Le Moigne P., Berggren L., Undén P., Randriamampianina R., Andrea
				U., Bazile E., Bertelsen A., Brousseau P., Dahlgren P., Edvinsson L., El Said A., Glinton
				M., Hopsch S., Isaksson L., Mladek R., Olsson E., Verrelle A., Wang Z.Q. (2021). CERRA
				sub-daily regional reanalysis data for Europe on single levels from 1984 to present [Data
				set]. ECMWF. <a href="https://doi.org/10.24381/CDS.622A565A" title="cerra">https://doi.org/10.24381/CDS.622A565A</a></p></div> <div class="tab-pane fade show" id="pills-mla" role="tabpanel" aria-labelledby="pills-mla-tab" tabindex="0"><p>Zippenfenig, Patrick. Open-Meteo.com Weather API., Zenodo, 2023, doi:10.5281/ZENODO.7970649.</p> <p>Hersbach, H., Bell, B., Berrisford, P., Biavati, G., Horányi, A., Muñoz Sabater, J.,
				Nicolas, J., Peubey, C., Radu, R., Rozum, I., Schepers, D., Simmons, A., Soci, C., Dee, D.,
				Thépaut, J-N. (2023). ERA5 hourly data on single levels from 1940 to present [Data set].
				ECMWF. https://doi.org/10.24381/cds.adbb2d47</p> <p>Muñoz Sabater, J. (2019). ERA5-Land hourly data from 2001 to present [Data set]. ECMWF.
				https://doi.org/10.24381/CDS.E2161BAC</p> <p>Schimanke S., Ridal M., Le Moigne P., Berggren L., Undén P., Randriamampianina R., Andrea
				U., Bazile E., Bertelsen A., Brousseau P., Dahlgren P., Edvinsson L., El Said A., Glinton
				M., Hopsch S., Isaksson L., Mladek R., Olsson E., Verrelle A., Wang Z.Q. CERRA Sub-Daily
				Regional Reanalysis Data for Europe on Single Levels from 1984 to Present. ECMWF, 2021,
				doi:10.24381/CDS.622A565A.</p></div> <div class="tab-pane fade show" id="pills-harvard" role="tabpanel" aria-labelledby="pills-harvard-tab" tabindex="0"><p>Zippenfenig, P. (2023) Open-Meteo.com Weather API. Zenodo. doi: 10.5281/ZENODO.7970649.</p> <p>Hersbach, H., Bell, B., Berrisford, P., Biavati, G., Horányi, A., Muñoz Sabater, J.,
				Nicolas, J., Peubey, C., Radu, R., Rozum, I., Schepers, D., Simmons, A., Soci, C., Dee, D.,
				Thépaut, J-N. (2023) “ERA5 hourly data on single levels from 1940 to present.” ECMWF. doi:
				10.24381/cds.adbb2d47.</p> <p>Muñoz Sabater, J. (2019) “ERA5-Land hourly data from 2001 to present.” ECMWF. doi:
				10.24381/CDS.E2161BAC.</p> <p>Schimanke S., Ridal M., Le Moigne P., Berggren L., Undén P., Randriamampianina R., Andrea
				U., Bazile E., Bertelsen A., Brousseau P., Dahlgren P., Edvinsson L., El Said A., Glinton
				M., Hopsch S., Isaksson L., Mladek R., Olsson E., Verrelle A., Wang Z.Q. (2021) “CERRA
				sub-daily regional reanalysis data for Europe on single levels from 1984 to present.” ECMWF.
				doi: 10.24381/CDS.622A565A.</p></div> <div class="tab-pane fade" id="pills-bibtex" role="tabpanel" aria-labelledby="pills-bibtex-tab" tabindex="0"><pre><code>@software{Zippenfenig_Open-Meteo,
  author = {Zippenfenig, Patrick},
  doi = {10.5281/zenodo.7970649},
  license = {CC-BY-4.0},
  title = {Open-Meteo.com Weather API},
  year = {2023},
  copyright = {Creative Commons Attribution 4.0 International},
  url = {https://open-meteo.com/}
}</code></pre> <pre><code>@misc{Hersbach_ERA5,
  doi = {10.24381/cds.adbb2d47},
  url = {https://cds.climate.copernicus.eu/doi/10.24381/cds.adbb2d47},
  author = {Hersbach, H., Bell, B., Berrisford, P., Biavati, G., Horányi, A., Muñoz Sabater, J., Nicolas, J., Peubey, C., Radu, R., Rozum, I., Schepers, D., Simmons, A., Soci, C., Dee, D., Thépaut, J-N.},
  title = {ERA5 hourly data on single levels from 1940 to present},
  publisher = {ECMWF},
  year = {2023}
}</code></pre> <pre><code>@misc{Munoz_ERA5_LAND,
  doi = {10.24381/CDS.E2161BAC},
  url = {https://cds.climate.copernicus.eu/doi/10.24381/cds.e2161bac},
  author = {Muñoz Sabater, J.},
  title = {ERA5-Land hourly data from 2001 to present},
  publisher = {ECMWF},
  year = {2019}
}</code></pre> <pre><code>@misc{Schimanke_CERRA,
  doi = {10.24381/CDS.622A565A},
  url = {https://cds.climate.copernicus.eu/doi/10.24381/cds.622a565a},
  author = {Schimanke S., Ridal M., Le Moigne P., Berggren L., Undén P., Randriamampianina R., Andrea U., Bazile E., Bertelsen A., Brousseau P., Dahlgren P., Edvinsson L., El Said A., Glinton M., Hopsch S., Isaksson L., Mladek R., Olsson E., Verrelle A., Wang Z.Q.},
  title = {CERRA sub-daily regional reanalysis data for Europe on single levels from 1984 to present},
  publisher = {ECMWF},
  year = {2021}
}</code></pre></div></div>`,
    Fa,
    mt,
    cr = "Generated using Copernicus Climate Change Service information 2022.",
    Ia,
    jl,
    ur;
  (me = new cn({})), me.$on("location", o[12]);
  function Xr(h) {
    o[15](h);
  }
  let hr = {
    inputClasses: "form-control " + (o[2] ? "is-invalid" : ""),
    format: "yyyy-mm-dd",
    name: "start_date",
    startDate: Kr,
    endDate: o[1],
  };
  o[0].start_date !== void 0 && (hr.value = o[0].start_date),
    (T = new Sr({ props: hr })),
    yr.push(() => Ar(T, "value", Xr));
  let R = o[2] && Vr();
  function en(h) {
    o[16](h);
  }
  let mr = {
    inputClasses: "form-control " + (o[3] ? "is-invalid" : ""),
    format: "yyyy-mm-dd",
    name: "end_date",
    startDate: Kr,
    endDate: o[1],
  };
  o[0].end_date !== void 0 && (mr.value = o[0].end_date),
    (ie = new Sr({ props: mr })),
    yr.push(() => Ar(ie, "value", en));
  let $ = o[3] && zr(),
    sa = L(o[7]),
    B = [];
  for (let h = 0; h < sa.length; h += 1) B[h] = Wr(Nr(o, sa, h));
  (at = new ei({
    props: {
      id: "additional-variables",
      title: "Additional Variables",
      count: va(o[9], o[0].hourly),
      $$slots: { default: [pn] },
      $$scope: { ctx: o },
    },
  })),
    (lt = new ei({
      props: {
        id: "solar-variables",
        title: "Solar Radiation Variables",
        count: va(o[10], o[0].hourly),
        $$slots: { default: [fn] },
        $$scope: { ctx: o },
      },
    })),
    (it = new ei({
      props: {
        id: "models",
        title: "Reanalysis models",
        count: va(o[11], o[0].models),
        $$slots: { default: [_n] },
        $$scope: { ctx: o },
      },
    }));
  let da = L(o[8]),
    W = [];
  for (let h = 0; h < da.length; h += 1) W[h] = Yr(Tr(o, da, h));
  let N = o[4] && Qr();
  return (
    (Tt = new dn({ props: { requires_professional_plan: !0 } })),
    (Dt = new un({
      props: {
        params: o[6],
        defaultParameter: o[5],
        type: "archive",
        action: "archive",
        useStockChart: !0,
      },
    })),
    {
      c() {
        (l = c("link")),
          (i = c("meta")),
          (n = _()),
          (t = c("div")),
          (t.innerHTML = r),
          (e = _()),
          (d = c("form")),
          (p = c("div")),
          (S = c("h2")),
          (S.textContent = y),
          (w = _()),
          (O = c("div")),
          (I = c("div")),
          (M = c("input")),
          (Ze = _()),
          (z = c("label")),
          (z.textContent = ee),
          (he = _()),
          (te = c("div")),
          (j = c("div")),
          (G = c("input")),
          (wa = _()),
          (we = c("label")),
          (we.textContent = Pa),
          (Ca = _()),
          (Ye = c("div")),
          _t(me.$$.fragment),
          (ka = _()),
          (ne = c("div")),
          (Qe = c("h2")),
          (Qe.textContent = Oa),
          (ya = _()),
          (Ke = c("div")),
          (ae = c("div")),
          _t(T.$$.fragment),
          (Xe = _()),
          (oe = c("label")),
          (oe.textContent = Ma),
          (Ce = _()),
          R && R.c(),
          (et = _()),
          (tt = c("div")),
          (le = c("div")),
          _t(ie.$$.fragment),
          (Ct = _()),
          (kt = c("label")),
          (kt.textContent = ti),
          (tl = _()),
          $ && $.c(),
          (al = _()),
          (ke = c("div")),
          (Gt = c("h2")),
          (Gt.textContent = ai),
          (ll = _());
        for (let h = 0; h < B.length; h += 1) B[h].c();
        (il = _()),
          (Jt = c("div")),
          (ce = c("div")),
          _t(at.$$.fragment),
          (rl = _()),
          _t(lt.$$.fragment),
          (nl = _()),
          _t(it.$$.fragment),
          (ol = _()),
          (ye = c("div")),
          (jt = c("h2")),
          (jt.textContent = li),
          (sl = _());
        for (let h = 0; h < W.length; h += 1) W[h].c();
        (dl = _()),
          (V = c("div")),
          (Zt = c("h2")),
          (Zt.textContent = ii),
          (cl = _()),
          (Yt = c("div")),
          (rt = c("div")),
          (Z = c("select")),
          (pe = c("option")),
          (pe.textContent = ri),
          (Ee = c("option")),
          (Ee.textContent = ni),
          (ul = _()),
          (yt = c("label")),
          (yt.textContent = oi),
          (hl = _()),
          (Qt = c("div")),
          (nt = c("div")),
          (J = c("select")),
          (fe = c("option")),
          (fe.textContent = si),
          (xe = c("option")),
          (xe.textContent = di),
          (Ie = c("option")),
          (Ie.textContent = ci),
          (Ae = c("option")),
          (Ae.textContent = ui),
          (ml = _()),
          (Et = c("label")),
          (Et.textContent = hi),
          (pl = _()),
          (Kt = c("div")),
          (ot = c("div")),
          (Y = c("select")),
          (_e = c("option")),
          (_e.textContent = mi),
          (Se = c("option")),
          (Se.textContent = pi),
          (fl = _()),
          (xt = c("label")),
          (xt.textContent = fi),
          (_l = _()),
          (Xt = c("div")),
          (st = c("div")),
          (Q = c("select")),
          (ve = c("option")),
          (ve.textContent = _i),
          (Te = c("option")),
          (Te.textContent = vi),
          (vl = _()),
          (It = c("label")),
          (It.textContent = bi),
          (bl = _()),
          (ea = c("div")),
          (ue = c("div")),
          (A = c("select")),
          (De = c("option")),
          (De.textContent = gi),
          (Pe = c("option")),
          (Pe.textContent = wi),
          (Oe = c("option")),
          (Oe.textContent = Ci),
          (Me = c("option")),
          (Me.textContent = ki),
          (Le = c("option")),
          (Le.textContent = yi),
          (Re = c("option")),
          (Re.textContent = Ei),
          ($e = c("option")),
          ($e.textContent = xi),
          (Ne = c("option")),
          (Ne.textContent = Ii),
          (He = c("option")),
          (He.textContent = Ai),
          (Ve = c("option")),
          (Ve.textContent = Si),
          (ze = c("option")),
          (ze.textContent = Ti),
          (Be = c("option")),
          (Be.textContent = Di),
          (We = c("option")),
          (We.textContent = Pi),
          (Fe = c("option")),
          (Fe.textContent = Oi),
          (Ue = c("option")),
          (Ue.textContent = Mi),
          (qe = c("option")),
          (qe.textContent = Li),
          (Ge = c("option")),
          (Ge.textContent = Ri),
          (Je = c("option")),
          (Je.textContent = $i),
          (gl = _()),
          (At = c("label")),
          (At.textContent = Ni),
          (wl = _()),
          N && N.c(),
          (Cl = _()),
          (St = c("div")),
          (St.innerHTML = Hi),
          (kl = _()),
          _t(Tt.$$.fragment),
          (La = _()),
          _t(Dt.$$.fragment),
          (Ra = _()),
          (je = c("h2")),
          (je.textContent = Vi),
          ($a = _()),
          (dt = c("div")),
          (dt.innerHTML = zi),
          (Na = _()),
          (ct = c("div")),
          (ct.innerHTML = Bi),
          (Ha = _()),
          (Pt = c("p")),
          (Pt.textContent = Wi),
          (Va = _()),
          (C = c("div")),
          (Ot = c("h2")),
          (Ot.textContent = Fi),
          (yl = _()),
          (ta = c("p")),
          (ta.innerHTML = Ui),
          (El = _()),
          (aa = c("p")),
          (aa.textContent = qi),
          (xl = _()),
          (Mt = c("div")),
          (Mt.innerHTML = Gi),
          (Il = _()),
          (la = c("p")),
          (la.textContent = Ji),
          (Al = _()),
          (Lt = c("h3")),
          (Lt.textContent = ji),
          (Sl = _()),
          (ia = c("p")),
          (ia.innerHTML = Zi),
          (Tl = _()),
          (Rt = c("div")),
          (Rt.innerHTML = Yi),
          (Dl = _()),
          ($t = c("h3")),
          ($t.textContent = Qi),
          (Pl = _()),
          (ra = c("p")),
          (ra.innerHTML = Ki),
          (Ol = _()),
          (Nt = c("div")),
          (Nt.innerHTML = Xi),
          (Ml = _()),
          (Ht = c("h3")),
          (Ht.textContent = er),
          (Ll = _()),
          (na = c("p")),
          (na.textContent = tr),
          (Rl = _()),
          (Vt = c("pre")),
          ($l = U("      ")),
          (zt = c("code")),
          (Nl = U(`
`)),
          (Hl = U(ar)),
          (Vl = U(`
      `)),
          (zl = U(`
    `)),
          (Bl = _()),
          (Bt = c("div")),
          (Bt.innerHTML = lr),
          (Wl = _()),
          (Wt = c("h3")),
          (Wt.textContent = ir),
          (Fl = _()),
          (oa = c("p")),
          (oa.textContent = rr),
          (Ul = _()),
          (xa = c("pre")),
          (Ft = c("code")),
          (ql = U(`
`)),
          (Gl = U(nr)),
          (Jl = U(`
      `)),
          (za = _()),
          (ut = c("h2")),
          (ut.textContent = or),
          (Ba = _()),
          (Ut = c("p")),
          (Ut.textContent = sr),
          (Wa = _()),
          (ht = c("div")),
          (ht.innerHTML = dr),
          (Fa = _()),
          (mt = c("p")),
          (mt.textContent = cr),
          this.h();
      },
      l(h) {
        const b = an("svelte-1wtqh1a", document.head);
        (l = u(b, "LINK", { rel: !0, href: !0 })),
          (i = u(b, "META", { name: !0, content: !0 })),
          b.forEach(m),
          (n = v(h)),
          (t = u(h, "DIV", { class: !0, role: !0, ["data-svelte-h"]: !0 })),
          f(t) !== "svelte-1uaf1dh" && (t.innerHTML = r),
          (e = v(h)),
          (d = u(h, "FORM", { method: !0, action: !0 }));
        var P = g(d);
        p = u(P, "DIV", { class: !0 });
        var re = g(p);
        (S = u(re, "H2", { ["data-svelte-h"]: !0 })),
          f(S) !== "svelte-w1yyeh" && (S.textContent = y),
          (w = v(re)),
          (O = u(re, "DIV", { class: !0 }));
        var ca = g(O);
        I = u(ca, "DIV", { class: !0 });
        var pt = g(I);
        (M = u(pt, "INPUT", {
          type: !0,
          class: !0,
          name: !0,
          id: !0,
          step: !0,
          min: !0,
          max: !0,
        })),
          (Ze = v(pt)),
          (z = u(pt, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(z) !== "svelte-1d39ogy" && (z.textContent = ee),
          pt.forEach(m),
          ca.forEach(m),
          (he = v(re)),
          (te = u(re, "DIV", { class: !0 }));
        var ua = g(te);
        j = u(ua, "DIV", { class: !0 });
        var D = g(j);
        (G = u(D, "INPUT", {
          type: !0,
          class: !0,
          name: !0,
          id: !0,
          step: !0,
          min: !0,
          max: !0,
        })),
          (wa = v(D)),
          (we = u(D, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(we) !== "svelte-12x0row" && (we.textContent = Pa),
          D.forEach(m),
          ua.forEach(m),
          (Ca = v(re)),
          (Ye = u(re, "DIV", { class: !0 }));
        var ft = g(Ye);
        vt(me.$$.fragment, ft),
          ft.forEach(m),
          re.forEach(m),
          (ka = v(P)),
          (ne = u(P, "DIV", { class: !0 }));
        var ha = g(ne);
        (Qe = u(ha, "H2", { ["data-svelte-h"]: !0 })),
          f(Qe) !== "svelte-gc8uth" && (Qe.textContent = Oa),
          (ya = v(ha)),
          (Ke = u(ha, "DIV", { class: !0 }));
        var pr = g(Ke);
        ae = u(pr, "DIV", { class: !0 });
        var ma = g(ae);
        vt(T.$$.fragment, ma),
          (Xe = v(ma)),
          (oe = u(ma, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(oe) !== "svelte-wkma3b" && (oe.textContent = Ma),
          (Ce = v(ma)),
          R && R.l(ma),
          ma.forEach(m),
          pr.forEach(m),
          (et = v(ha)),
          (tt = u(ha, "DIV", { class: !0 }));
        var fr = g(tt);
        le = u(fr, "DIV", { class: !0 });
        var pa = g(le);
        vt(ie.$$.fragment, pa),
          (Ct = v(pa)),
          (kt = u(pa, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(kt) !== "svelte-1t4arjv" && (kt.textContent = ti),
          (tl = v(pa)),
          $ && $.l(pa),
          pa.forEach(m),
          fr.forEach(m),
          ha.forEach(m),
          (al = v(P)),
          (ke = u(P, "DIV", { class: !0 }));
        var Ua = g(ke);
        (Gt = u(Ua, "H2", { ["data-svelte-h"]: !0 })),
          f(Gt) !== "svelte-15i1za" && (Gt.textContent = ai),
          (ll = v(Ua));
        for (let qt = 0; qt < B.length; qt += 1) B[qt].l(Ua);
        Ua.forEach(m), (il = v(P)), (Jt = u(P, "DIV", { class: !0 }));
        var _r = g(Jt);
        ce = u(_r, "DIV", { class: !0, id: !0 });
        var fa = g(ce);
        vt(at.$$.fragment, fa),
          (rl = v(fa)),
          vt(lt.$$.fragment, fa),
          (nl = v(fa)),
          vt(it.$$.fragment, fa),
          fa.forEach(m),
          _r.forEach(m),
          (ol = v(P)),
          (ye = u(P, "DIV", { class: !0 }));
        var qa = g(ye);
        (jt = u(qa, "H2", { ["data-svelte-h"]: !0 })),
          f(jt) !== "svelte-1hwgd6e" && (jt.textContent = li),
          (sl = v(qa));
        for (let qt = 0; qt < W.length; qt += 1) W[qt].l(qa);
        qa.forEach(m), (dl = v(P)), (V = u(P, "DIV", { class: !0 }));
        var K = g(V);
        (Zt = u(K, "H2", { ["data-svelte-h"]: !0 })),
          f(Zt) !== "svelte-15f2bar" && (Zt.textContent = ii),
          (cl = v(K)),
          (Yt = u(K, "DIV", { class: !0 }));
        var vr = g(Yt);
        rt = u(vr, "DIV", { class: !0 });
        var Ga = g(rt);
        Z = u(Ga, "SELECT", { class: !0, name: !0, id: !0, "aria-label": !0 });
        var Zl = g(Z);
        (pe = u(Zl, "OPTION", { ["data-svelte-h"]: !0 })),
          f(pe) !== "svelte-1sv0wbg" && (pe.textContent = ri),
          (Ee = u(Zl, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ee) !== "svelte-1k5d5yu" && (Ee.textContent = ni),
          Zl.forEach(m),
          (ul = v(Ga)),
          (yt = u(Ga, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(yt) !== "svelte-1iokn23" && (yt.textContent = oi),
          Ga.forEach(m),
          vr.forEach(m),
          (hl = v(K)),
          (Qt = u(K, "DIV", { class: !0 }));
        var br = g(Qt);
        nt = u(br, "DIV", { class: !0 });
        var Ja = g(nt);
        J = u(Ja, "SELECT", { class: !0, name: !0, id: !0, "aria-label": !0 });
        var Aa = g(J);
        (fe = u(Aa, "OPTION", { ["data-svelte-h"]: !0 })),
          f(fe) !== "svelte-zydki6" && (fe.textContent = si),
          (xe = u(Aa, "OPTION", { ["data-svelte-h"]: !0 })),
          f(xe) !== "svelte-nb4mz1" && (xe.textContent = di),
          (Ie = u(Aa, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ie) !== "svelte-1aenvgk" && (Ie.textContent = ci),
          (Ae = u(Aa, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ae) !== "svelte-ek1fw" && (Ae.textContent = ui),
          Aa.forEach(m),
          (ml = v(Ja)),
          (Et = u(Ja, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(Et) !== "svelte-16dnehd" && (Et.textContent = hi),
          Ja.forEach(m),
          br.forEach(m),
          (pl = v(K)),
          (Kt = u(K, "DIV", { class: !0 }));
        var gr = g(Kt);
        ot = u(gr, "DIV", { class: !0 });
        var ja = g(ot);
        Y = u(ja, "SELECT", { class: !0, name: !0, id: !0, "aria-label": !0 });
        var Yl = g(Y);
        (_e = u(Yl, "OPTION", { ["data-svelte-h"]: !0 })),
          f(_e) !== "svelte-1z01hul" && (_e.textContent = mi),
          (Se = u(Yl, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Se) !== "svelte-1x12cee" && (Se.textContent = pi),
          Yl.forEach(m),
          (fl = v(ja)),
          (xt = u(ja, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(xt) !== "svelte-1nb21xn" && (xt.textContent = fi),
          ja.forEach(m),
          gr.forEach(m),
          (_l = v(K)),
          (Xt = u(K, "DIV", { class: !0 }));
        var wr = g(Xt);
        st = u(wr, "DIV", { class: !0 });
        var Za = g(st);
        Q = u(Za, "SELECT", { class: !0, name: !0, id: !0, "aria-label": !0 });
        var Ql = g(Q);
        (ve = u(Ql, "OPTION", { ["data-svelte-h"]: !0 })),
          f(ve) !== "svelte-1p5512f" && (ve.textContent = _i),
          (Te = u(Ql, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Te) !== "svelte-1snlil5" && (Te.textContent = vi),
          Ql.forEach(m),
          (vl = v(Za)),
          (It = u(Za, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(It) !== "svelte-1gshp9e" && (It.textContent = bi),
          Za.forEach(m),
          wr.forEach(m),
          (bl = v(K)),
          (ea = u(K, "DIV", { class: !0 }));
        var Cr = g(ea);
        ue = u(Cr, "DIV", { class: !0 });
        var _a = g(ue);
        A = u(_a, "SELECT", { class: !0, name: !0, id: !0, "aria-label": !0 });
        var H = g(A);
        (De = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(De) !== "svelte-sudti4" && (De.textContent = gi),
          (Pe = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Pe) !== "svelte-19l34p4" && (Pe.textContent = wi),
          (Oe = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Oe) !== "svelte-g964w6" && (Oe.textContent = Ci),
          (Me = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Me) !== "svelte-shmvl8" && (Me.textContent = ki),
          (Le = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Le) !== "svelte-i0dgse" && (Le.textContent = yi),
          (Re = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Re) !== "svelte-1frtrqe" && (Re.textContent = Ei),
          ($e = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f($e) !== "svelte-1rz78wl" && ($e.textContent = xi),
          (Ne = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ne) !== "svelte-1khy6ef" && (Ne.textContent = Ii),
          (He = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(He) !== "svelte-whnk0g" && (He.textContent = Ai),
          (Ve = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ve) !== "svelte-1cgiab8" && (Ve.textContent = Si),
          (ze = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(ze) !== "svelte-44oa54" && (ze.textContent = Ti),
          (Be = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Be) !== "svelte-o3cqgo" && (Be.textContent = Di),
          (We = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(We) !== "svelte-1g8y8ei" && (We.textContent = Pi),
          (Fe = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Fe) !== "svelte-zpwr26" && (Fe.textContent = Oi),
          (Ue = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ue) !== "svelte-1neom8a" && (Ue.textContent = Mi),
          (qe = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(qe) !== "svelte-nt8uce" && (qe.textContent = Li),
          (Ge = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Ge) !== "svelte-a1giga" && (Ge.textContent = Ri),
          (Je = u(H, "OPTION", { ["data-svelte-h"]: !0 })),
          f(Je) !== "svelte-3s6azq" && (Je.textContent = $i),
          H.forEach(m),
          (gl = v(_a)),
          (At = u(_a, "LABEL", { for: !0, ["data-svelte-h"]: !0 })),
          f(At) !== "svelte-d23tlm" && (At.textContent = Ni),
          (wl = v(_a)),
          N && N.l(_a),
          _a.forEach(m),
          Cr.forEach(m),
          (Cl = v(K)),
          (St = u(K, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(St) !== "svelte-4qzab8" && (St.innerHTML = Hi),
          K.forEach(m),
          (kl = v(P)),
          vt(Tt.$$.fragment, P),
          P.forEach(m),
          (La = v(h)),
          vt(Dt.$$.fragment, h),
          (Ra = v(h)),
          (je = u(h, "H2", { id: !0, class: !0, ["data-svelte-h"]: !0 })),
          f(je) !== "svelte-1knb4jl" && (je.textContent = Vi),
          ($a = v(h)),
          (dt = u(h, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(dt) !== "svelte-ad8qvo" && (dt.innerHTML = zi),
          (Na = v(h)),
          (ct = u(h, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(ct) !== "svelte-uc7wdr" && (ct.innerHTML = Bi),
          (Ha = v(h)),
          (Pt = u(h, "P", { ["data-svelte-h"]: !0 })),
          f(Pt) !== "svelte-1po52k3" && (Pt.textContent = Wi),
          (Va = v(h)),
          (C = u(h, "DIV", { class: !0 }));
        var x = g(C);
        (Ot = u(x, "H2", { id: !0, ["data-svelte-h"]: !0 })),
          f(Ot) !== "svelte-1uq4wqh" && (Ot.textContent = Fi),
          (yl = v(x)),
          (ta = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(ta) !== "svelte-rq3xpc" && (ta.innerHTML = Ui),
          (El = v(x)),
          (aa = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(aa) !== "svelte-ywpthi" && (aa.textContent = qi),
          (xl = v(x)),
          (Mt = u(x, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(Mt) !== "svelte-zu9haz" && (Mt.innerHTML = Gi),
          (Il = v(x)),
          (la = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(la) !== "svelte-pp52ch" && (la.textContent = Ji),
          (Al = v(x)),
          (Lt = u(x, "H3", { class: !0, ["data-svelte-h"]: !0 })),
          f(Lt) !== "svelte-k3vwrx" && (Lt.textContent = ji),
          (Sl = v(x)),
          (ia = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(ia) !== "svelte-1787b0k" && (ia.innerHTML = Zi),
          (Tl = v(x)),
          (Rt = u(x, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(Rt) !== "svelte-6abofs" && (Rt.innerHTML = Yi),
          (Dl = v(x)),
          ($t = u(x, "H3", { class: !0, ["data-svelte-h"]: !0 })),
          f($t) !== "svelte-1i07j6l" && ($t.textContent = Qi),
          (Pl = v(x)),
          (ra = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(ra) !== "svelte-pcjogl" && (ra.innerHTML = Ki),
          (Ol = v(x)),
          (Nt = u(x, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(Nt) !== "svelte-10259h3" && (Nt.innerHTML = Xi),
          (Ml = v(x)),
          (Ht = u(x, "H3", { class: !0, ["data-svelte-h"]: !0 })),
          f(Ht) !== "svelte-zz6vlh" && (Ht.textContent = er),
          (Ll = v(x)),
          (na = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(na) !== "svelte-dq9ye6" && (na.textContent = tr),
          (Rl = v(x)),
          (Vt = u(x, "PRE", {}));
        var Ya = g(Vt);
        ($l = q(Ya, "      ")), (zt = u(Ya, "CODE", {}));
        var Qa = g(zt);
        (Nl = q(
          Qa,
          `
`
        )),
          (Hl = q(Qa, ar)),
          (Vl = q(
            Qa,
            `
      `
          )),
          Qa.forEach(m),
          (zl = q(
            Ya,
            `
    `
          )),
          Ya.forEach(m),
          (Bl = v(x)),
          (Bt = u(x, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(Bt) !== "svelte-lnily" && (Bt.innerHTML = lr),
          (Wl = v(x)),
          (Wt = u(x, "H3", { class: !0, ["data-svelte-h"]: !0 })),
          f(Wt) !== "svelte-1nejmzx" && (Wt.textContent = ir),
          (Fl = v(x)),
          (oa = u(x, "P", { ["data-svelte-h"]: !0 })),
          f(oa) !== "svelte-1fqep0r" && (oa.textContent = rr),
          (Ul = v(x)),
          (xa = u(x, "PRE", {}));
        var kr = g(xa);
        Ft = u(kr, "CODE", {});
        var Ka = g(Ft);
        (ql = q(
          Ka,
          `
`
        )),
          (Gl = q(Ka, nr)),
          (Jl = q(
            Ka,
            `
      `
          )),
          Ka.forEach(m),
          kr.forEach(m),
          x.forEach(m),
          (za = v(h)),
          (ut = u(h, "H2", { id: !0, ["data-svelte-h"]: !0 })),
          f(ut) !== "svelte-199b4fc" && (ut.textContent = or),
          (Ba = v(h)),
          (Ut = u(h, "P", { ["data-svelte-h"]: !0 })),
          f(Ut) !== "svelte-1jekdag" && (Ut.textContent = sr),
          (Wa = v(h)),
          (ht = u(h, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          f(ht) !== "svelte-ndlm3p" && (ht.innerHTML = dr),
          (Fa = v(h)),
          (mt = u(h, "P", { class: !0, ["data-svelte-h"]: !0 })),
          f(mt) !== "svelte-1sfa353" && (mt.textContent = cr),
          this.h();
      },
      h() {
        (document.title = "🏛️ Historical Weather API | Open-Meteo.com"),
          s(l, "rel", "canonical"),
          s(l, "href", "https://open-meteo.com/en/docs/historical-weather-api"),
          s(i, "name", "description"),
          s(
            i,
            "content",
            "Historical 🌤️ weather data from 1940 onwards with weather records dating back to 1940 and hourly resolution available for any location on earth. Retrieve decades worth of data in less than a second with our lightning-fast API. Dive deep into historical weather records, uncover trends, and gain valuable insights with ease."
          ),
          s(t, "class", "alert alert-primary"),
          s(t, "role", "alert"),
          s(M, "type", "number"),
          s(M, "class", "form-control"),
          s(M, "name", "latitude"),
          s(M, "id", "latitude"),
          s(M, "step", "0.000001"),
          s(M, "min", "-90"),
          s(M, "max", "90"),
          s(z, "for", "latitude"),
          s(I, "class", "form-floating mb-3"),
          s(O, "class", "col-md-3"),
          s(G, "type", "number"),
          s(G, "class", "form-control"),
          s(G, "name", "longitude"),
          s(G, "id", "longitude"),
          s(G, "step", "0.000001"),
          s(G, "min", "-180"),
          s(G, "max", "180"),
          s(we, "for", "longitude"),
          s(j, "class", "form-floating mb-3"),
          s(te, "class", "col-md-3"),
          s(Ye, "class", "col-md-6"),
          s(p, "class", "row"),
          s(oe, "for", "start_date"),
          s(ae, "class", "form-floating mb-3"),
          s(Ke, "class", "col-md-3"),
          s(kt, "for", "end_date"),
          s(le, "class", "form-floating mb-3"),
          s(tt, "class", "col-md-3"),
          s(ne, "class", "row py-3 px-0"),
          s(ke, "class", "row py-3 px-0"),
          s(ce, "class", "accordion"),
          s(ce, "id", "accordionVariables"),
          s(Jt, "class", "row py-3 px-0"),
          s(ye, "class", "row py-3 px-0"),
          (pe.selected = !0),
          (pe.__value = "celsius"),
          E(pe, pe.__value),
          (Ee.__value = "fahrenheit"),
          E(Ee, Ee.__value),
          s(Z, "class", "form-select"),
          s(Z, "name", "temperature_unit"),
          s(Z, "id", "temperature_unit"),
          s(Z, "aria-label", "Temperature Unit"),
          o[0].temperature_unit === void 0 && wt(() => o[23].call(Z)),
          s(yt, "for", "temperature_unit"),
          s(rt, "class", "form-floating mb-3"),
          s(Yt, "class", "col-md-3"),
          (fe.selected = !0),
          (fe.__value = "kmh"),
          E(fe, fe.__value),
          (xe.__value = "ms"),
          E(xe, xe.__value),
          (Ie.__value = "mph"),
          E(Ie, Ie.__value),
          (Ae.__value = "kn"),
          E(Ae, Ae.__value),
          s(J, "class", "form-select"),
          s(J, "name", "windspeed_unit"),
          s(J, "id", "windspeed_unit"),
          s(J, "aria-label", "Windspeed Unit"),
          o[0].windspeed_unit === void 0 && wt(() => o[24].call(J)),
          s(Et, "for", "windspeed_unit"),
          s(nt, "class", "form-floating mb-3"),
          s(Qt, "class", "col-md-3"),
          (_e.selected = !0),
          (_e.__value = "mm"),
          E(_e, _e.__value),
          (Se.__value = "inch"),
          E(Se, Se.__value),
          s(Y, "class", "form-select"),
          s(Y, "name", "precipitation_unit"),
          s(Y, "id", "precipitation_unit"),
          s(Y, "aria-label", "Precipitation Unit"),
          o[0].precipitation_unit === void 0 && wt(() => o[25].call(Y)),
          s(xt, "for", "precipitation_unit"),
          s(ot, "class", "form-floating mb-3"),
          s(Kt, "class", "col-md-3"),
          (ve.selected = !0),
          (ve.__value = "iso8601"),
          E(ve, ve.__value),
          (Te.__value = "unixtime"),
          E(Te, Te.__value),
          s(Q, "class", "form-select"),
          s(Q, "name", "timeformat"),
          s(Q, "id", "timeformat"),
          s(Q, "aria-label", "Timeformat"),
          o[0].timeformat === void 0 && wt(() => o[26].call(Q)),
          s(It, "for", "timeformat"),
          s(st, "class", "form-floating mb-3"),
          s(Xt, "class", "col-md-3"),
          (De.__value = "America/Anchorage"),
          E(De, De.__value),
          (Pe.__value = "America/Los_Angeles"),
          E(Pe, Pe.__value),
          (Oe.__value = "America/Denver"),
          E(Oe, Oe.__value),
          (Me.__value = "America/Chicago"),
          E(Me, Me.__value),
          (Le.__value = "America/New_York"),
          E(Le, Le.__value),
          (Re.__value = "America/Sao_Paulo"),
          E(Re, Re.__value),
          ($e.__value = "UTC"),
          E($e, $e.__value),
          (Ne.__value = "GMT"),
          E(Ne, Ne.__value),
          (He.__value = "auto"),
          E(He, He.__value),
          (Ve.__value = "Europe/London"),
          E(Ve, Ve.__value),
          (ze.__value = "Europe/Berlin"),
          E(ze, ze.__value),
          (Be.__value = "Europe/Moscow"),
          E(Be, Be.__value),
          (We.__value = "Africa/Cairo"),
          E(We, We.__value),
          (Fe.__value = "Asia/Bangkok"),
          E(Fe, Fe.__value),
          (Ue.__value = "Asia/Singapore"),
          E(Ue, Ue.__value),
          (qe.__value = "Asia/Tokyo"),
          E(qe, qe.__value),
          (Ge.__value = "Australia/Sydney"),
          E(Ge, Ge.__value),
          (Je.__value = "Pacific/Auckland"),
          E(Je, Je.__value),
          s(A, "class", "form-select"),
          s(A, "name", "timezone"),
          s(A, "id", "timezone"),
          s(A, "aria-label", "Timezone"),
          o[0].timezone === void 0 && wt(() => o[27].call(A)),
          Er(A, "is-invalid", o[4]),
          s(At, "for", "timezone"),
          s(ue, "class", "form-floating mb-3"),
          s(ea, "class", "col-md-3"),
          s(St, "class", "col-12 pb-3 debug-hidden"),
          s(V, "class", "row py-3 px-0"),
          s(d, "method", "get"),
          s(d, "action", "https://archive-api.open-meteo.com/v1/archive"),
          s(je, "id", "data-sources"),
          s(je, "class", "mt-5"),
          s(dt, "class", "row"),
          s(ct, "class", "table-responsive"),
          s(Ot, "id", "api-documentation"),
          s(Mt, "class", "table-responsive"),
          s(Lt, "class", "mt-5"),
          s(Rt, "class", "table-responsive"),
          s($t, "class", "mt-5"),
          s(Nt, "class", "table-responsive"),
          s(Ht, "class", "mt-5"),
          s(Bt, "class", "table-responsive"),
          s(Wt, "class", "mt-5"),
          s(C, "class", "col-12 py-5"),
          s(ut, "id", "citation"),
          s(ht, "class", "border rounded p-3"),
          s(mt, "class", "mt-4");
      },
      m(h, b) {
        a(document.head, l),
          a(document.head, i),
          k(h, n, b),
          k(h, t, b),
          k(h, e, b),
          k(h, d, b),
          a(d, p),
          a(p, S),
          a(p, w),
          a(p, O),
          a(O, I),
          a(I, M),
          E(M, o[0].latitude),
          a(I, Ze),
          a(I, z),
          a(p, he),
          a(p, te),
          a(te, j),
          a(j, G),
          E(G, o[0].longitude),
          a(j, wa),
          a(j, we),
          a(p, Ca),
          a(p, Ye),
          bt(me, Ye, null),
          a(d, ka),
          a(d, ne),
          a(ne, Qe),
          a(ne, ya),
          a(ne, Ke),
          a(Ke, ae),
          bt(T, ae, null),
          a(ae, Xe),
          a(ae, oe),
          a(ae, Ce),
          R && R.m(ae, null),
          a(ne, et),
          a(ne, tt),
          a(tt, le),
          bt(ie, le, null),
          a(le, Ct),
          a(le, kt),
          a(le, tl),
          $ && $.m(le, null),
          a(d, al),
          a(d, ke),
          a(ke, Gt),
          a(ke, ll);
        for (let P = 0; P < B.length; P += 1) B[P] && B[P].m(ke, null);
        a(d, il),
          a(d, Jt),
          a(Jt, ce),
          bt(at, ce, null),
          a(ce, rl),
          bt(lt, ce, null),
          a(ce, nl),
          bt(it, ce, null),
          a(d, ol),
          a(d, ye),
          a(ye, jt),
          a(ye, sl);
        for (let P = 0; P < W.length; P += 1) W[P] && W[P].m(ye, null);
        a(d, dl),
          a(d, V),
          a(V, Zt),
          a(V, cl),
          a(V, Yt),
          a(Yt, rt),
          a(rt, Z),
          a(Z, pe),
          a(Z, Ee),
          be(Z, o[0].temperature_unit, !0),
          a(rt, ul),
          a(rt, yt),
          a(V, hl),
          a(V, Qt),
          a(Qt, nt),
          a(nt, J),
          a(J, fe),
          a(J, xe),
          a(J, Ie),
          a(J, Ae),
          be(J, o[0].windspeed_unit, !0),
          a(nt, ml),
          a(nt, Et),
          a(V, pl),
          a(V, Kt),
          a(Kt, ot),
          a(ot, Y),
          a(Y, _e),
          a(Y, Se),
          be(Y, o[0].precipitation_unit, !0),
          a(ot, fl),
          a(ot, xt),
          a(V, _l),
          a(V, Xt),
          a(Xt, st),
          a(st, Q),
          a(Q, ve),
          a(Q, Te),
          be(Q, o[0].timeformat, !0),
          a(st, vl),
          a(st, It),
          a(V, bl),
          a(V, ea),
          a(ea, ue),
          a(ue, A),
          a(A, De),
          a(A, Pe),
          a(A, Oe),
          a(A, Me),
          a(A, Le),
          a(A, Re),
          a(A, $e),
          a(A, Ne),
          a(A, He),
          a(A, Ve),
          a(A, ze),
          a(A, Be),
          a(A, We),
          a(A, Fe),
          a(A, Ue),
          a(A, qe),
          a(A, Ge),
          a(A, Je),
          be(A, o[0].timezone, !0),
          a(ue, gl),
          a(ue, At),
          a(ue, wl),
          N && N.m(ue, null),
          a(V, Cl),
          a(V, St),
          a(d, kl),
          bt(Tt, d, null),
          k(h, La, b),
          bt(Dt, h, b),
          k(h, Ra, b),
          k(h, je, b),
          k(h, $a, b),
          k(h, dt, b),
          k(h, Na, b),
          k(h, ct, b),
          k(h, Ha, b),
          k(h, Pt, b),
          k(h, Va, b),
          k(h, C, b),
          a(C, Ot),
          a(C, yl),
          a(C, ta),
          a(C, El),
          a(C, aa),
          a(C, xl),
          a(C, Mt),
          a(C, Il),
          a(C, la),
          a(C, Al),
          a(C, Lt),
          a(C, Sl),
          a(C, ia),
          a(C, Tl),
          a(C, Rt),
          a(C, Dl),
          a(C, $t),
          a(C, Pl),
          a(C, ra),
          a(C, Ol),
          a(C, Nt),
          a(C, Ml),
          a(C, Ht),
          a(C, Ll),
          a(C, na),
          a(C, Rl),
          a(C, Vt),
          a(Vt, $l),
          a(Vt, zt),
          a(zt, Nl),
          a(zt, Hl),
          a(zt, Vl),
          a(Vt, zl),
          a(C, Bl),
          a(C, Bt),
          a(C, Wl),
          a(C, Wt),
          a(C, Fl),
          a(C, oa),
          a(C, Ul),
          a(C, xa),
          a(xa, Ft),
          a(Ft, ql),
          a(Ft, Gl),
          a(Ft, Jl),
          k(h, za, b),
          k(h, ut, b),
          k(h, Ba, b),
          k(h, Ut, b),
          k(h, Wa, b),
          k(h, ht, b),
          k(h, Fa, b),
          k(h, mt, b),
          (Ia = !0),
          jl ||
            ((ur = [
              se(M, "input", o[13]),
              se(G, "input", o[14]),
              se(Z, "change", o[23]),
              se(J, "change", o[24]),
              se(Y, "change", o[25]),
              se(Q, "change", o[26]),
              se(A, "change", o[27]),
            ]),
            (jl = !0));
      },
      p(h, b) {
        b[0] & 1 && el(M.value) !== h[0].latitude && E(M, h[0].latitude),
          b[0] & 1 && el(G.value) !== h[0].longitude && E(G, h[0].longitude);
        const P = {};
        b[0] & 4 &&
          (P.inputClasses = "form-control " + (h[2] ? "is-invalid" : "")),
          b[0] & 2 && (P.endDate = h[1]),
          !Ea &&
            b[0] & 1 &&
            ((Ea = !0), (P.value = h[0].start_date), xr(() => (Ea = !1))),
          T.$set(P),
          h[2]
            ? R
              ? b[0] & 4 && F(R, 1)
              : ((R = Vr()), R.c(), F(R, 1), R.m(ae, null))
            : R &&
              (Xl(),
              X(R, 1, 1, () => {
                R = null;
              }),
              Kl());
        const re = {};
        if (
          (b[0] & 8 &&
            (re.inputClasses = "form-control " + (h[3] ? "is-invalid" : "")),
          b[0] & 2 && (re.endDate = h[1]),
          !de &&
            b[0] & 1 &&
            ((de = !0), (re.value = h[0].end_date), xr(() => (de = !1))),
          ie.$set(re),
          h[3]
            ? $
              ? b[0] & 8 && F($, 1)
              : (($ = zr()), $.c(), F($, 1), $.m(le, null))
            : $ &&
              (Xl(),
              X($, 1, 1, () => {
                $ = null;
              }),
              Kl()),
          b[0] & 129)
        ) {
          sa = L(h[7]);
          let D;
          for (D = 0; D < sa.length; D += 1) {
            const ft = Nr(h, sa, D);
            B[D]
              ? B[D].p(ft, b)
              : ((B[D] = Wr(ft)), B[D].c(), B[D].m(ke, null));
          }
          for (; D < B.length; D += 1) B[D].d(1);
          B.length = sa.length;
        }
        const ca = {};
        b[0] & 1 && (ca.count = va(h[9], h[0].hourly)),
          (b[0] & 1) | (b[1] & 8388608) && (ca.$$scope = { dirty: b, ctx: h }),
          at.$set(ca);
        const pt = {};
        b[0] & 1 && (pt.count = va(h[10], h[0].hourly)),
          (b[0] & 1) | (b[1] & 8388608) && (pt.$$scope = { dirty: b, ctx: h }),
          lt.$set(pt);
        const ua = {};
        if (
          (b[0] & 1 && (ua.count = va(h[11], h[0].models)),
          (b[0] & 1) | (b[1] & 8388608) && (ua.$$scope = { dirty: b, ctx: h }),
          it.$set(ua),
          b[0] & 257)
        ) {
          da = L(h[8]);
          let D;
          for (D = 0; D < da.length; D += 1) {
            const ft = Tr(h, da, D);
            W[D]
              ? W[D].p(ft, b)
              : ((W[D] = Yr(ft)), W[D].c(), W[D].m(ye, null));
          }
          for (; D < W.length; D += 1) W[D].d(1);
          W.length = da.length;
        }
        b[0] & 1 && be(Z, h[0].temperature_unit),
          b[0] & 1 && be(J, h[0].windspeed_unit),
          b[0] & 1 && be(Y, h[0].precipitation_unit),
          b[0] & 1 && be(Q, h[0].timeformat),
          b[0] & 1 && be(A, h[0].timezone),
          (!Ia || b[0] & 16) && Er(A, "is-invalid", h[4]),
          h[4]
            ? N
              ? b[0] & 16 && F(N, 1)
              : ((N = Qr()), N.c(), F(N, 1), N.m(ue, null))
            : N &&
              (Xl(),
              X(N, 1, 1, () => {
                N = null;
              }),
              Kl());
      },
      i(h) {
        Ia ||
          (F(me.$$.fragment, h),
          F(T.$$.fragment, h),
          F(R),
          F(ie.$$.fragment, h),
          F($),
          F(at.$$.fragment, h),
          F(lt.$$.fragment, h),
          F(it.$$.fragment, h),
          F(N),
          F(Tt.$$.fragment, h),
          F(Dt.$$.fragment, h),
          (Ia = !0));
      },
      o(h) {
        X(me.$$.fragment, h),
          X(T.$$.fragment, h),
          X(R),
          X(ie.$$.fragment, h),
          X($),
          X(at.$$.fragment, h),
          X(lt.$$.fragment, h),
          X(it.$$.fragment, h),
          X(N),
          X(Tt.$$.fragment, h),
          X(Dt.$$.fragment, h),
          (Ia = !1);
      },
      d(h) {
        h &&
          (m(n),
          m(t),
          m(e),
          m(d),
          m(La),
          m(Ra),
          m(je),
          m($a),
          m(dt),
          m(Na),
          m(ct),
          m(Ha),
          m(Pt),
          m(Va),
          m(C),
          m(za),
          m(ut),
          m(Ba),
          m(Ut),
          m(Wa),
          m(ht),
          m(Fa),
          m(mt)),
          m(l),
          m(i),
          gt(me),
          gt(T),
          R && R.d(),
          gt(ie),
          $ && $.d(),
          ge(B, h),
          gt(at),
          gt(lt),
          gt(it),
          ge(W, h),
          N && N.d(),
          gt(Tt),
          gt(Dt, h),
          (jl = !1),
          ln(ur);
      },
    }
  );
}
let Kr = "1940-01-01";
function bn(o, l, i) {
  let n, t, r, e;
  var d =
      (this && this.__awaiter) ||
      function (T, Ea, Xe, oe) {
        function Ma(Ce) {
          return Ce instanceof Xe
            ? Ce
            : new Xe(function (et) {
                et(Ce);
              });
        }
        return new (Xe || (Xe = Promise))(function (Ce, et) {
          function tt(de) {
            try {
              ie(oe.next(de));
            } catch (Ct) {
              et(Ct);
            }
          }
          function le(de) {
            try {
              ie(oe.throw(de));
            } catch (Ct) {
              et(Ct);
            }
          }
          function ie(de) {
            de.done ? Ce(de.value) : Ma(de.value).then(tt, le);
          }
          ie((oe = oe.apply(T, Ea || [])).next());
        });
      },
    p = new Date();
  p.setDate(p.getDate() - 5);
  let S = p.toISOString().split("T")[0];
  p.setDate(p.getDate() - 14);
  let y = p.toISOString().split("T")[0],
    w = "";
  const O = {
      hourly: [],
      daily: [],
      temperature_unit: "celsius",
      windspeed_unit: "kmh",
      precipitation_unit: "mm",
      timeformat: "iso8601",
      timezone: "UTC",
      models: [],
    },
    I = hn(
      Object.assign(
        Object.assign(
          { latitude: 52.52, longitude: 13.41, start_date: y, end_date: S },
          O
        ),
        { hourly: ["temperature_2m"] }
      )
    );
  rn(o, I, (T) => i(0, (e = T))),
    nn(() =>
      d(void 0, void 0, void 0, function* () {
        var T = new Date();
        i(1, (w = T.toISOString().split("T")[0])),
          T.setDate(T.getDate() - 5),
          Xa(I, (e.end_date = T.toISOString().split("T")[0]), e),
          T.setDate(T.getDate() - 14),
          Xa(I, (e.start_date = T.toISOString().split("T")[0]), e);
      })
    );
  let M = [
      [
        { name: "temperature_2m", label: "Temperature (2 m)" },
        { name: "relativehumidity_2m", label: "Relative Humidity (2 m)" },
        { name: "dewpoint_2m", label: "Dewpoint (2 m)" },
        { name: "apparent_temperature", label: "Apparent Temperature" },
        { name: "precipitation", label: "Precipitation (rain + snow)" },
        { name: "rain", label: "Rain" },
        { name: "snowfall", label: "Snowfall" },
      ],
      [
        { name: "weathercode", label: "Weathercode" },
        { name: "pressure_msl", label: "Sealevel Pressure" },
        { name: "surface_pressure", label: "Surface Pressure" },
        { name: "cloudcover", label: "Cloudcover Total" },
        { name: "cloudcover_low", label: "Cloudcover Low" },
        { name: "cloudcover_mid", label: "Cloudcover Mid" },
        { name: "cloudcover_high", label: "Cloudcover High" },
        {
          name: "et0_fao_evapotranspiration",
          label: "Reference Evapotranspiration (ET₀)",
        },
        { name: "vapor_pressure_deficit", label: "Vapor Pressure Deficit" },
      ],
      [
        { name: "windspeed_10m", label: "Wind Speed (10 m)" },
        { name: "windspeed_100m", label: "Wind Speed (100 m)" },
        { name: "winddirection_10m", label: "Wind Direction (10 m)" },
        { name: "winddirection_100m", label: "Wind Direction (100 m)" },
        { name: "windgusts_10m", label: "Wind Gusts (10 m)" },
      ],
      [
        {
          name: "soil_temperature_0_to_7cm",
          label: "Soil Temperature (0-7 cm)",
        },
        {
          name: "soil_temperature_7_to_28cm",
          label: "Soil Temperature (7-28 cm)",
        },
        {
          name: "soil_temperature_28_to_100cm",
          label: "Soil Temperature (28-100 cm)",
        },
        {
          name: "soil_temperature_100_to_255cm",
          label: "Soil Temperature (100-255 cm)",
        },
        { name: "soil_moisture_0_to_7cm", label: "Soil Moisture (0-7 cm)" },
        { name: "soil_moisture_7_to_28cm", label: "Soil Moisture (7-28 cm)" },
        {
          name: "soil_moisture_28_to_100cm",
          label: "Soil Moisture (28-100 cm)",
        },
        {
          name: "soil_moisture_100_to_255cm",
          label: "Soil Moisture (100-255 cm)",
        },
      ],
    ],
    Ze = [
      [
        { name: "weathercode", label: "Weathercode" },
        { name: "temperature_2m_max", label: "Maximum Temperature (2 m)" },
        { name: "temperature_2m_min", label: "Minimum Temperature (2 m)" },
        { name: "temperature_2m_mean", label: "Mean Temperature (2 m)" },
        {
          name: "apparent_temperature_max",
          label: "Maximum Apparent Temperature (2 m)",
        },
        {
          name: "apparent_temperature_min",
          label: "Minimum Apparent Temperature (2 m)",
        },
        {
          name: "apparent_temperature_mean",
          label: "Mean Apparent Temperature (2 m)",
        },
        { name: "sunrise", label: "Sunrise" },
        { name: "sunset", label: "Sunset" },
      ],
      [
        { name: "precipitation_sum", label: "Precipitation Sum" },
        { name: "rain_sum", label: "Rain Sum" },
        { name: "snowfall_sum", label: "Snowfall Sum" },
        { name: "precipitation_hours", label: "Precipitation Hours" },
        { name: "windspeed_10m_max", label: "Maximum Wind Speed (10 m)" },
        { name: "windgusts_10m_max", label: "Maximum Wind Gusts (10 m)" },
        {
          name: "winddirection_10m_dominant",
          label: "Dominant Wind Direction (10 m)",
        },
        { name: "shortwave_radiation_sum", label: "Shortwave Radiation Sum" },
        {
          name: "et0_fao_evapotranspiration",
          label: "Reference Evapotranspiration (ET₀)",
        },
      ],
    ];
  const z = [[{ name: "is_day", label: "Is Day or Night" }]],
    ee = [
      [
        { name: "shortwave_radiation", label: "Shortwave Solar Radiation" },
        { name: "direct_radiation", label: "Direct Solar Radiation" },
        { name: "diffuse_radiation", label: "Diffuse Solar Radiation" },
        {
          name: "direct_normal_irradiance",
          label: "Direct Normal Irradiance DNI",
        },
        { name: "terrestrial_radiation", label: "Terrestrial Solar Radiation" },
      ],
      [
        {
          name: "shortwave_radiation_instant",
          label: "Shortwave Solar Radiation (Instant)",
        },
        {
          name: "direct_radiation_instant",
          label: "Direct Solar Radiation (Instant)",
        },
        {
          name: "diffuse_radiation_instant",
          label: "Diffuse Solar Radiation (Instant)",
        },
        {
          name: "direct_normal_irradiance_instant",
          label: "Direct Normal Irradiance DNI (Instant)",
        },
        {
          name: "terrestrial_radiation_instant",
          label: "Terrestrial Solar Radiation (Instant)",
        },
      ],
    ];
  let he = [
    [
      {
        name: "best_match",
        label: "Best match",
        caption: "ERA5 & ERA5-Land combined",
      },
      { name: "era5", label: "ERA5", caption: "25 km, Global" },
      { name: "era5_land", label: "ERA5-Land", caption: "10 km, Global" },
      {
        name: "cerra",
        label: "CERRA",
        caption: "5 km, Europe, 1985 to June 2021",
      },
    ],
  ];
  function te(T) {
    Xa(I, (e.latitude = Number(T.detail.latitude.toFixed(4))), e),
      Xa(I, (e.longitude = Number(T.detail.longitude.toFixed(4))), e);
  }
  const j = [[], [], []];
  function G() {
    (e.latitude = el(this.value)), I.set(e);
  }
  function wa() {
    (e.longitude = el(this.value)), I.set(e);
  }
  function we(T) {
    o.$$.not_equal(e.start_date, T) && ((e.start_date = T), I.set(e));
  }
  function Pa(T) {
    o.$$.not_equal(e.end_date, T) && ((e.end_date = T), I.set(e));
  }
  function Ca() {
    (e.hourly = Sa(j[2], this.__value, this.checked)), I.set(e);
  }
  function Ye() {
    (e.hourly = Sa(j[2], this.__value, this.checked)), I.set(e);
  }
  function me() {
    (e.hourly = Sa(j[2], this.__value, this.checked)), I.set(e);
  }
  function ka() {
    (e.models = Sa(j[1], this.__value, this.checked)), I.set(e);
  }
  function ne() {
    (e.daily = Sa(j[0], this.__value, this.checked)), I.set(e);
  }
  function Qe() {
    (e.temperature_unit = Ta(this)), I.set(e);
  }
  function Oa() {
    (e.windspeed_unit = Ta(this)), I.set(e);
  }
  function ya() {
    (e.precipitation_unit = Ta(this)), I.set(e);
  }
  function Ke() {
    (e.timeformat = Ta(this)), I.set(e);
  }
  function ae() {
    (e.timezone = Ta(this)), I.set(e);
  }
  return (
    (o.$$.update = () => {
      o.$$.dirty[0] & 1 &&
        i(4, (n = e.timezone == "UTC" && e.daily.length > 0)),
        o.$$.dirty[0] & 1 && i(3, (t = e.end_date == null)),
        o.$$.dirty[0] & 1 && i(2, (r = e.start_date == null));
    }),
    [
      e,
      w,
      r,
      t,
      n,
      O,
      I,
      M,
      Ze,
      z,
      ee,
      he,
      te,
      G,
      wa,
      we,
      Pa,
      Ca,
      j,
      Ye,
      me,
      ka,
      ne,
      Qe,
      Oa,
      ya,
      Ke,
      ae,
    ]
  );
}
class Sn extends on {
  constructor(l) {
    super(), sn(this, l, bn, vn, tn, {}, null, [-1, -1]);
  }
}
export { Sn as component, An as universal };

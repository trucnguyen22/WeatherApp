var K = Object.defineProperty;
var T = (t, e, n) =>
  e in t
    ? K(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var A = (t, e, n) => (T(t, typeof e != "symbol" ? e + "" : e, n), n);
import {
  M as w,
  ad as W,
  ae as X,
  d as q,
  I as E,
  a3 as M,
  Q as j,
  af as Y,
  a4 as N,
  ag as U,
  h as Z,
  ab as tt,
  ah as et,
  ai as nt,
  aj as it,
  aa as V,
  ak as st,
  al as rt,
  am as at,
  an as ot,
  ao as ft,
} from "./scheduler.f440829a.js";
const G = typeof window < "u";
let B = G ? () => window.performance.now() : () => Date.now(),
  D = G ? (t) => requestAnimationFrame(t) : w;
const k = new Set();
function H(t) {
  k.forEach((e) => {
    e.c(t) || (k.delete(e), e.f());
  }),
    k.size !== 0 && D(H);
}
function F(t) {
  let e;
  return (
    k.size === 0 && D(H),
    {
      promise: new Promise((n) => {
        k.add((e = { c: t, f: n }));
      }),
      abort() {
        k.delete(e);
      },
    }
  );
}
const I = new Map();
let P = 0;
function ut(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function ct(t, e) {
  const n = { stylesheet: X(e), rules: {} };
  return I.set(t, n), n;
}
function R(t, e, n, s, u, a, c, i = 0) {
  const l = 16.666 / s;
  let r = `{
`;
  for (let $ = 0; $ <= 1; $ += l) {
    const m = e + (n - e) * a($);
    r +=
      $ * 100 +
      `%{${c(m, 1 - m)}}
`;
  }
  const d =
      r +
      `100% {${c(n, 1 - n)}}
}`,
    f = `__svelte_${ut(d)}_${i}`,
    g = W(t),
    { stylesheet: h, rules: o } = I.get(g) || ct(g, t);
  o[f] ||
    ((o[f] = !0), h.insertRule(`@keyframes ${f} ${d}`, h.cssRules.length));
  const _ = t.style.animation || "";
  return (
    (t.style.animation = `${
      _ ? `${_}, ` : ""
    }${f} ${s}ms linear ${u}ms 1 both`),
    (P += 1),
    f
  );
}
function z(t, e) {
  const n = (t.style.animation || "").split(", "),
    s = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    u = n.length - s.length;
  u && ((t.style.animation = s.join(", ")), (P -= u), P || lt());
}
function lt() {
  D(() => {
    P ||
      (I.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && q(e);
      }),
      I.clear());
  });
}
let S;
function L() {
  return (
    S ||
      ((S = Promise.resolve()),
      S.then(() => {
        S = null;
      })),
    S
  );
}
function v(t, e, n) {
  t.dispatchEvent(Y(`${e ? "intro" : "outro"}${n}`));
}
const C = new Set();
let p;
function yt() {
  p = { r: 0, c: [], p };
}
function xt() {
  p.r || E(p.c), (p = p.p);
}
function dt(t, e) {
  t && t.i && (C.delete(t), t.i(e));
}
function vt(t, e, n, s) {
  if (t && t.o) {
    if (C.has(t)) return;
    C.add(t),
      p.c.push(() => {
        C.delete(t), s && (n && t.d(1), s());
      }),
      t.o(e);
  } else s && s();
}
const Q = { duration: 0 };
function wt(t, e, n) {
  const s = { direction: "in" };
  let u = e(t, n, s),
    a = !1,
    c,
    i,
    l = 0;
  function r() {
    c && z(t, c);
  }
  function d() {
    const {
      delay: g = 0,
      duration: h = 300,
      easing: o = N,
      tick: _ = w,
      css: $,
    } = u || Q;
    $ && (c = R(t, 0, 1, h, g, o, $, l++)), _(0, 1);
    const m = B() + g,
      y = m + h;
    i && i.abort(),
      (a = !0),
      j(() => v(t, !0, "start")),
      (i = F((x) => {
        if (a) {
          if (x >= y) return _(1, 0), v(t, !0, "end"), r(), (a = !1);
          if (x >= m) {
            const b = o((x - m) / h);
            _(b, 1 - b);
          }
        }
        return a;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), z(t), M(u) ? ((u = u(s)), L().then(d)) : d());
    },
    invalidate() {
      f = !1;
    },
    end() {
      a && (r(), (a = !1));
    },
  };
}
function bt(t, e, n) {
  const s = { direction: "out" };
  let u = e(t, n, s),
    a = !0,
    c;
  const i = p;
  i.r += 1;
  let l;
  function r() {
    const {
      delay: d = 0,
      duration: f = 300,
      easing: g = N,
      tick: h = w,
      css: o,
    } = u || Q;
    o && (c = R(t, 1, 0, f, d, g, o));
    const _ = B() + d,
      $ = _ + f;
    j(() => v(t, !1, "start")),
      "inert" in t && ((l = t.inert), (t.inert = !0)),
      F((m) => {
        if (a) {
          if (m >= $) return h(0, 1), v(t, !1, "end"), --i.r || E(i.c), !1;
          if (m >= _) {
            const y = g((m - _) / f);
            h(1 - y, y);
          }
        }
        return a;
      });
  }
  return (
    M(u)
      ? L().then(() => {
          (u = u(s)), r();
        })
      : r(),
    {
      end(d) {
        d && "inert" in t && (t.inert = l),
          d && u.tick && u.tick(1, 0),
          a && (c && z(t, c), (a = !1));
      },
    }
  );
}
function kt(t, e, n, s) {
  let a = e(t, n, { direction: "both" }),
    c = s ? 0 : 1,
    i = null,
    l = null,
    r = null,
    d;
  function f() {
    r && z(t, r);
  }
  function g(o, _) {
    const $ = o.b - c;
    return (
      (_ *= Math.abs($)),
      {
        a: c,
        b: o.b,
        d: $,
        duration: _,
        start: o.start,
        end: o.start + _,
        group: o.group,
      }
    );
  }
  function h(o) {
    const {
        delay: _ = 0,
        duration: $ = 300,
        easing: m = N,
        tick: y = w,
        css: x,
      } = a || Q,
      b = { start: B() + _, b: o };
    o || ((b.group = p), (p.r += 1)),
      "inert" in t &&
        (o ? d !== void 0 && (t.inert = d) : ((d = t.inert), (t.inert = !0))),
      i || l
        ? (l = b)
        : (x && (f(), (r = R(t, c, o, $, _, m, x))),
          o && y(0, 1),
          (i = g(b, $)),
          j(() => v(t, o, "start")),
          F((O) => {
            if (
              (l &&
                O > l.start &&
                ((i = g(l, $)),
                (l = null),
                v(t, i.b, "start"),
                x && (f(), (r = R(t, c, i.b, i.duration, 0, m, a.css)))),
              i)
            ) {
              if (O >= i.end)
                y((c = i.b), 1 - c),
                  v(t, i.b, "end"),
                  l || (i.b ? f() : --i.group.r || E(i.group.c)),
                  (i = null);
              else if (O >= i.start) {
                const J = O - i.start;
                (c = i.a + i.d * m(J / i.duration)), y(c, 1 - c);
              }
            }
            return !!(i || l);
          }));
  }
  return {
    run(o) {
      M(a)
        ? L().then(() => {
            (a = a({ direction: o ? "in" : "out" })), h(o);
          })
        : h(o);
    },
    end() {
      f(), (i = l = null);
    },
  };
}
function Et(t, e, n) {
  const s = t.$$.props[e];
  s !== void 0 && ((t.$$.bound[s] = n), n(t.$$.ctx[s]));
}
function St(t) {
  t && t.c();
}
function jt(t, e) {
  t && t.l(e);
}
function _t(t, e, n) {
  const { fragment: s, after_update: u } = t.$$;
  s && s.m(e, n),
    j(() => {
      const a = t.$$.on_mount.map(st).filter(M);
      t.$$.on_destroy ? t.$$.on_destroy.push(...a) : E(a), (t.$$.on_mount = []);
    }),
    u.forEach(j);
}
function $t(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (nt(n.after_update),
    E(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ht(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), at(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Mt(t, e, n, s, u, a, c, i = [-1]) {
  const l = it;
  V(t);
  const r = (t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: w,
    not_equal: u,
    bound: U(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: U(),
    dirty: i,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  c && c(r.root);
  let d = !1;
  if (
    ((r.ctx = n
      ? n(t, e.props || {}, (f, g, ...h) => {
          const o = h.length ? h[0] : g;
          return (
            r.ctx &&
              u(r.ctx[f], (r.ctx[f] = o)) &&
              (!r.skip_bound && r.bound[f] && r.bound[f](o), d && ht(t, f)),
            g
          );
        })
      : []),
    r.update(),
    (d = !0),
    E(r.before_update),
    (r.fragment = s ? s(r.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      ot();
      const f = Z(e.target);
      r.fragment && r.fragment.l(f), f.forEach(q);
    } else r.fragment && r.fragment.c();
    e.intro && dt(t.$$.fragment), _t(t, e.target, e.anchor), ft(), tt();
  }
  V(l);
}
class Ot {
  constructor() {
    A(this, "$$");
    A(this, "$$set");
  }
  $destroy() {
    $t(this, 1), (this.$destroy = w);
  }
  $on(e, n) {
    if (!M(n)) return w;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      s.push(n),
      () => {
        const u = s.indexOf(n);
        u !== -1 && s.splice(u, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !et(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const gt = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(gt);
export {
  Ot as S,
  dt as a,
  St as b,
  xt as c,
  jt as d,
  $t as e,
  Et as f,
  yt as g,
  kt as h,
  Mt as i,
  wt as j,
  bt as k,
  _t as m,
  vt as t,
};

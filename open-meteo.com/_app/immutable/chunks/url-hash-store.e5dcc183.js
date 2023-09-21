import { w as p } from "./index.a9d95894.js";
function S(f) {
  const c = typeof window < "u" && typeof document < "u",
    s = c ? window.location : null,
    a = c ? window.history : null,
    o = { ...f };
  function d(e) {
    let t = {},
      n = 0;
    for (const r in o) e[r] && o[r] !== e[r] && ((t[r] = e[r]), n++);
    n > 0 &&
      (a == null ||
        a.replaceState(
          null,
          "",
          `#${new URLSearchParams(t)}`.replaceAll("%2C", ",")
        )),
      n == 0 &&
        s != null &&
        s.hash &&
        (s == null ? void 0 : s.hash.length) > 0 &&
        (a == null || a.replaceState(null, "", " "));
  }
  function u(e) {
    let t = { ...o },
      n = e.indexOf("#");
    if (n !== -1)
      for (const [r, i] of new URLSearchParams(e.substring(n + 1)))
        o.hasOwnProperty(r) && (t[r] = Array.isArray(o[r]) ? i.split(",") : i);
    return t;
  }
  const h = p(f, (e) => {
      const t = s == null ? void 0 : s.hash;
      if ((t && t.length > 0 ? e(u(t)) : d(f), c)) {
        const n = (r) => {
          e(u(r.newURL));
        };
        return (
          window.addEventListener("hashchange", n),
          () => window.removeEventListener("hashchange", n)
        );
      }
    }),
    { subscribe: l, set: w } = h;
  return {
    set(e) {
      d(e), w(e);
    },
    update(e) {
      return h.update((t) => {
        const n = e(t);
        return d(n), n;
      });
    },
    subscribe: l,
  };
}
export { S as u };

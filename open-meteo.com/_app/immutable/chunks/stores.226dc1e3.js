import { w as _ } from "./index.a9d95894.js";
var f = {};
function h(e) {
  return e === "local" ? localStorage : sessionStorage;
}
function i(e, p, r) {
  var g, v;
  const l = (g = r == null ? void 0 : r.serializer) != null ? g : JSON,
    w = (v = r == null ? void 0 : r.storage) != null ? v : "local",
    m = typeof window < "u" && typeof document < "u",
    o = m ? h(w) : null;
  function c(n, u) {
    o == null || o.setItem(n, l.stringify(u));
  }
  if (!f[e]) {
    const n = _(p, (t) => {
        const a = o == null ? void 0 : o.getItem(e);
        if ((a ? t(l.parse(a)) : c(e, p), m)) {
          const s = (d) => {
            d.key === e && t(d.newValue ? l.parse(d.newValue) : null);
          };
          return (
            window.addEventListener("storage", s),
            () => window.removeEventListener("storage", s)
          );
        }
      }),
      { subscribe: u, set: b } = n;
    f[e] = {
      set(t) {
        c(e, t), b(t);
      },
      update(t) {
        return n.update((a) => {
          const s = t(a);
          return c(e, s), s;
        });
      },
      subscribe: u,
    };
  }
  return f[e];
}
const I = i("api_key_preferences", {
    use: "non_commercial",
    apikey: "",
    self_host_server: "https://my-server.tld",
  }),
  y = i("theme", "auto"),
  z = _(!0),
  E = i("last_visited_locations", []),
  L = i("favorites", []);
export { z as a, I as b, L as f, E as l, y as t };

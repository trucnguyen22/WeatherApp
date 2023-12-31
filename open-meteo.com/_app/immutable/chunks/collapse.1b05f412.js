import { g as z, c as H } from "./_commonjsHelpers.042e6b4d.js";
import { r as V, a as q, c as R, d as j } from "./selector-engine.071051b0.js";
function G(g, u) {
  for (var a = 0; a < u.length; a++) {
    const n = u[a];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in g)) {
          const r = Object.getOwnPropertyDescriptor(n, i);
          r &&
            Object.defineProperty(
              g,
              i,
              r.get ? r : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(g, Symbol.toStringTag, { value: "Module" })
  );
}
var C = { exports: {} };
/*!
 * Bootstrap collapse.js v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (g, u) {
  (function (a, n) {
    g.exports = n(V(), q(), R(), j());
  })(H, function (a, n, i, r) {
    const T = "collapse",
      f = ".bs.collapse",
      S = ".data-api",
      y = `show${f}`,
      D = `shown${f}`,
      N = `hide${f}`,
      w = `hidden${f}`,
      O = `click${f}${S}`,
      p = "show",
      c = "collapse",
      d = "collapsing",
      I = "collapsed",
      $ = `:scope .${c} .${c}`,
      b = "collapse-horizontal",
      v = "width",
      P = "height",
      M = ".collapse.show, .collapse.collapsing",
      A = '[data-bs-toggle="collapse"]',
      x = { parent: null, toggle: !0 },
      F = { parent: "(null|element)", toggle: "boolean" };
    class h extends a {
      constructor(e, s) {
        super(e, s), (this._isTransitioning = !1), (this._triggerArray = []);
        const t = i.find(A);
        for (const o of t) {
          const _ = i.getSelectorFromElement(o),
            E = i.find(_).filter((l) => l === this._element);
          _ !== null && E.length && this._triggerArray.push(o);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return x;
      }
      static get DefaultType() {
        return F;
      }
      static get NAME() {
        return T;
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e = [];
        if (
          (this._config.parent &&
            (e = this._getFirstLevelChildren(M)
              .filter((l) => l !== this._element)
              .map((l) => h.getOrCreateInstance(l, { toggle: !1 }))),
          (e.length && e[0]._isTransitioning) ||
            n.trigger(this._element, y).defaultPrevented)
        )
          return;
        for (const l of e) l.hide();
        const t = this._getDimension();
        this._element.classList.remove(c),
          this._element.classList.add(d),
          (this._element.style[t] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const o = () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(d),
              this._element.classList.add(c, p),
              (this._element.style[t] = ""),
              n.trigger(this._element, D);
          },
          E = `scroll${t[0].toUpperCase() + t.slice(1)}`;
        this._queueCallback(o, this._element, !0),
          (this._element.style[t] = `${this._element[E]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          n.trigger(this._element, N).defaultPrevented
        )
          return;
        const s = this._getDimension();
        (this._element.style[s] = `${
          this._element.getBoundingClientRect()[s]
        }px`),
          r.reflow(this._element),
          this._element.classList.add(d),
          this._element.classList.remove(c, p);
        for (const o of this._triggerArray) {
          const _ = i.getElementFromSelector(o);
          _ && !this._isShown(_) && this._addAriaAndCollapsedClass([o], !1);
        }
        this._isTransitioning = !0;
        const t = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(d),
            this._element.classList.add(c),
            n.trigger(this._element, w);
        };
        (this._element.style[s] = ""),
          this._queueCallback(t, this._element, !0);
      }
      _isShown(e = this._element) {
        return e.classList.contains(p);
      }
      _configAfterMerge(e) {
        return (e.toggle = !!e.toggle), (e.parent = r.getElement(e.parent)), e;
      }
      _getDimension() {
        return this._element.classList.contains(b) ? v : P;
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const e = this._getFirstLevelChildren(A);
        for (const s of e) {
          const t = i.getElementFromSelector(s);
          t && this._addAriaAndCollapsedClass([s], this._isShown(t));
        }
      }
      _getFirstLevelChildren(e) {
        const s = i.find($, this._config.parent);
        return i.find(e, this._config.parent).filter((t) => !s.includes(t));
      }
      _addAriaAndCollapsedClass(e, s) {
        if (e.length)
          for (const t of e)
            t.classList.toggle(I, !s), t.setAttribute("aria-expanded", s);
      }
      static jQueryInterface(e) {
        const s = {};
        return (
          typeof e == "string" && /show|hide/.test(e) && (s.toggle = !1),
          this.each(function () {
            const t = h.getOrCreateInstance(this, s);
            if (typeof e == "string") {
              if (typeof t[e] > "u")
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          })
        );
      }
    }
    return (
      n.on(document, O, A, function (m) {
        (m.target.tagName === "A" ||
          (m.delegateTarget && m.delegateTarget.tagName === "A")) &&
          m.preventDefault();
        for (const e of i.getMultipleElementsFromSelector(this))
          h.getOrCreateInstance(e, { toggle: !1 }).toggle();
      }),
      r.defineJQueryPlugin(h),
      h
    );
  });
})(C);
var L = C.exports;
const K = z(L),
  B = G({ __proto__: null, default: K }, [L]);
export { B as c };

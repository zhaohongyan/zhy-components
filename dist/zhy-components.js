import { defineComponent as c, createElementBlock as a, openBlock as r, normalizeClass as p, renderSlot as d, createElementVNode as s, toDisplayString as i } from "vue";
const u = /* @__PURE__ */ c({
  __name: "Button",
  props: ["type"],
  setup(t) {
    const o = t;
    return (e, n) => (r(), a("button", {
      class: p(`zhy-btn ${o.type || "default"}`)
    }, [
      d(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), l = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, _] of o)
    e[n] = _;
  return e;
}, m = /* @__PURE__ */ l(u, [["__scopeId", "data-v-3a9ef5cb"]]), f = { class: "zhy-card" }, h = { class: "zhy-title" }, y = { class: "zhy-content" }, v = /* @__PURE__ */ c({
  __name: "Card",
  props: ["title"],
  setup(t) {
    const o = t;
    return (e, n) => (r(), a("div", f, [
      s("div", h, i(o.title), 1),
      s("div", y, [
        d(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), z = /* @__PURE__ */ l(v, [["__scopeId", "data-v-df949dda"]]), C = {
  install: (t) => {
    t.component("ZhyButton", m), t.component("ZhyCard", z);
  }
};
export {
  C as default
};

import { defineComponent as P, computed as S, openBlock as a, createElementBlock as s, normalizeStyle as ee, normalizeClass as F, createBlock as O, createCommentVNode as f, renderSlot as L, createTextVNode as _, toDisplayString as v, ref as I, watch as pe, createElementVNode as u, createVNode as g, Fragment as y, renderList as T, resolveDynamicComponent as Lt, withCtx as U, useModel as G, withDirectives as W, mergeProps as ve, vModelCheckbox as Oe, mergeModels as K, onBeforeUnmount as ut, Teleport as dt, nextTick as Te, unref as E, withKeys as ka, vModelDynamic as nt, shallowRef as _a, vModelText as ke, withModifiers as re, isRef as ye, vModelSelect as _e, Transition as Dt, normalizeProps as wa, guardReactiveProps as $a, getCurrentScope as Ma, onScopeDispose as Aa } from "vue";
const Bt = {
  plus: '<path d="M8 3v10M3 8h10"/>',
  minus: '<path d="M3 8h10"/>',
  search: '<circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5l3 3"/>',
  "chevron-down": '<path d="M4 6l4 4 4-4"/>',
  "chevron-left": '<path d="M10 4L6 8l4 4"/>',
  "chevron-right": '<path d="M6 4l4 4-4 4"/>',
  filter: '<path d="M2.5 4h11M4.5 8h7M6.5 12h3"/>',
  sort: '<path d="M5 3v10M2.5 10.5L5 13l2.5-2.5M11 13V3M8.5 5.5L11 3l2.5 2.5"/>',
  group: '<rect x="2.5" y="2.5" width="11" height="4" rx="1"/><rect x="2.5" y="9.5" width="11" height="4" rx="1"/>',
  eye: '<path d="M1.8 8S4 3.5 8 3.5 14.2 8 14.2 8 12 12.5 8 12.5 1.8 8 1.8 8z"/><circle cx="8" cy="8" r="2"/>',
  more: '<path d="M3.5 8h.01M8 8h.01M12.5 8h.01" stroke-width="2.4"/>',
  home: '<path d="M2.5 7.5L8 3l5.5 4.5V13a.5.5 0 0 1-.5.5h-3v-4h-4v4H3a.5.5 0 0 1-.5-.5z"/>',
  table: '<rect x="2.5" y="3" width="11" height="10" rx="1.5"/><path d="M2.5 6.5h11M6.5 6.5V13"/>',
  board: '<rect x="2.5" y="3" width="11" height="10" rx="1.5"/><path d="M6.2 3v10M9.8 3v10"/>',
  list: '<path d="M5.5 4h8M5.5 8h8M5.5 12h8M2.5 4h.01M2.5 8h.01M2.5 12h.01"/>',
  calendar: '<rect x="2.5" y="3.5" width="11" height="10" rx="1.5"/><path d="M2.5 6.5h11M5.5 2v3M10.5 2v3"/>',
  inbox: '<rect x="2.5" y="3" width="11" height="10" rx="1.5"/><path d="M2.5 9h3l1 1.5h3l1-1.5h3"/>',
  doc: '<path d="M4 2.5h5l3 3v8H4z"/><path d="M9 2.5v3h3"/>',
  text: '<path d="M3 4h10M3 8h10M3 12h6"/>',
  hash: '<path d="M6.5 2.5l-1 11M11 2.5l-1 11M3 6h10.5M2.5 10h10.5"/>',
  select: '<circle cx="8" cy="8" r="5.5"/><path d="M5.8 7.2L8 9.4l2.2-2.2"/>',
  status: '<circle cx="8" cy="8" r="5.5"/><path d="M8 2.5a5.5 5.5 0 0 1 0 11z" fill="currentColor"/>',
  tags: '<path d="M2.5 4h7l2 2-2 2h-7zM5 10.5h7l2 2"/>',
  person: '<circle cx="8" cy="5.5" r="2.5"/><path d="M3.5 13.5c.6-2.5 2.4-3.5 4.5-3.5s3.9 1 4.5 3.5"/>',
  flag: '<path d="M3.5 14V2.5M3.5 3h8l-1.5 3 1.5 3h-8"/>',
  link: '<path d="M7 9a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-.6.6M9 7a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l.6-.6"/>',
  progress: '<path d="M2.5 8a5.5 5.5 0 1 0 5.5-5.5"/><path d="M8 5v3l2 1.5"/>',
  trash: '<path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5"/>',
  copy: '<rect x="5.5" y="5.5" width="8" height="8" rx="1.5"/><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"/>',
  edit: '<path d="M10.5 3l2.5 2.5L6 12.5H3.5V10z"/>',
  x: '<path d="M4 4l8 8M12 4l-8 8"/>',
  check: '<path d="M3.5 8.5l3 3 6-6"/>',
  "check-square": '<rect x="2.5" y="2.5" width="11" height="11" rx="2.5"/><path d="M5.5 8l2 2 3-4"/>',
  checkbox: '<rect x="2.5" y="2.5" width="11" height="11" rx="2.5"/><path d="M5.5 8l2 2 3-4"/>',
  grip: '<path d="M6 4h.01M10 4h.01M6 8h.01M10 8h.01M6 12h.01M10 12h.01" stroke-width="2.2"/>',
  menu: '<path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"/>',
  expand: '<path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5L9 7M2.5 13.5L7 9"/>',
  sliders: '<path d="M3 5h10M3 11h10"/><circle cx="6" cy="5" r="1.5"/><circle cx="10" cy="11" r="1.5"/>',
  chart: '<path d="M3 13V3M3 13h10M6 10V8M9 10V5M12 10V7"/>',
  star: '<path d="M8 2.8l1.6 3.3 3.6.5-2.6 2.5.6 3.6L8 11l-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z"/>',
  arrow: '<path d="M5 11l6-6M6 5h5v5"/>',
  sun: '<circle cx="8" cy="8" r="2.75"/><path d="M8 1.75v1.5M8 12.75v1.5M1.75 8h1.5M12.75 8h1.5M3.6 3.6l1.05 1.05M11.35 11.35l1.05 1.05M3.6 12.4l1.05-1.05M11.35 4.65l1.05-1.05"/>',
  moon: '<path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z"/>',
  monitor: '<rect x="2" y="2.75" width="12" height="8.5" rx="1.5"/><path d="M5.5 14h5M8 11.25V14"/>',
  settings: '<path d="M3 5h10M3 11h10"/><circle cx="6" cy="5" r="1.5"/><circle cx="10" cy="11" r="1.5"/>',
  info: '<circle cx="8" cy="8" r="5.5"/><path d="M8 7.5V11M8 5h.01"/>',
  blocks: '<rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1"/><rect x="9" y="2.5" width="4.5" height="4.5" rx="1"/><rect x="2.5" y="9" width="4.5" height="4.5" rx="1"/><circle cx="11.25" cy="11.25" r="2.25"/>',
  layers: '<path d="M8 2.5l5.5 2.75L8 8 2.5 5.25z"/><path d="M2.5 8L8 10.75 13.5 8"/><path d="M2.5 10.75L8 13.5l5.5-2.75"/>',
  book: '<path d="M3 12.5v-9a1 1 0 0 1 1-1h8.5v9H4a1 1 0 0 0 0 2h8.5"/>',
  pen: '<path d="M9.5 3.5l2 2-6 6h-2v-2z"/><path d="M8.5 13.5h5"/>',
  palette: '<path d="M8 2.5a5.5 5.5 0 0 0 0 11c.7 0 1.2-.5 1.2-1.1s-.5-1-.5-1.6.5-1 1.1-1h1.4a2.3 2.3 0 0 0 2.3-2.3C13.5 4.6 11.1 2.5 8 2.5z"/><path d="M5.25 7h.01M6.75 4.75h.01M9.75 4.75h.01" stroke-width="2"/>',
  code: '<path d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5"/>',
  globe: '<circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5c1.5 1.6 2.3 3.5 2.3 5.5S9.5 11.9 8 13.5C6.5 11.9 5.7 10 5.7 8S6.5 4.1 8 2.5z"/>',
  folder: '<path d="M2.5 4a1 1 0 0 1 1-1h2.8l1.4 1.5h4.8a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z"/>',
  box: '<path d="M8 2l5.5 3v6L8 14l-5.5-3V5z"/><path d="M2.5 5L8 8l5.5-3M8 8v6"/>',
  bolt: '<path d="M9 2L3.5 9H8l-1 5 5.5-7H8z"/>',
  alert: '<path d="M8 2.5l6 10.5H2z"/><path d="M8 6.5v3M8 11.2h.01"/>',
  key: '<circle cx="5.5" cy="10.5" r="3"/><path d="M7.6 8.4L13.5 2.5M11.5 4.5l1.5 1.5M9.8 6.2l1.2 1.2"/>'
};
function di(d) {
  Object.assign(Bt, d);
}
const Ca = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], V = /* @__PURE__ */ P({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const t = d, l = S(() => Bt[t.name] ?? "");
    return (e, r) => (a(), s("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: e.size,
      height: e.size,
      style: ee(e.size !== 16 ? { width: e.size + "px", height: e.size + "px" } : void 0),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true",
      innerHTML: l.value
    }, null, 12, Ca));
  }
}), Sa = ["href", "aria-label"], Va = ["type", "disabled", "aria-busy", "aria-label"], za = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, x = /* @__PURE__ */ P({
  __name: "AtButton",
  props: {
    variant: { default: "secondary" },
    size: { default: "md" },
    icon: {},
    iconOnly: { type: Boolean },
    label: {},
    loading: { type: Boolean },
    disabled: { type: Boolean },
    href: {},
    type: { default: "button" }
  },
  setup(d) {
    const t = d, l = S(() => [
      "at-btn",
      `at-btn--${t.variant}`,
      t.size !== "md" && `at-btn--${t.size}`,
      t.iconOnly && "at-btn--icon"
    ]);
    return (e, r) => e.href && !e.disabled ? (a(), s("a", {
      key: 0,
      href: e.href,
      class: F(l.value),
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.icon ? (a(), O(V, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      L(e.$slots, "default", {}, () => [
        _(v(e.iconOnly ? "" : e.label), 1)
      ])
    ], 10, Sa)) : (a(), s("button", {
      key: 1,
      type: e.type,
      class: F(l.value),
      disabled: e.disabled || e.loading,
      "aria-busy": e.loading || void 0,
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.loading ? (a(), s("span", za)) : e.icon ? (a(), O(V, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      e.iconOnly ? f("", !0) : L(e.$slots, "default", { key: 2 }, () => [
        _(v(e.label), 1)
      ])
    ], 10, Va));
  }
}), Ta = { class: "at-shell__side" }, La = { class: "at-shell__main" }, Da = { class: "at-topbar" }, Ba = /* @__PURE__ */ P({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: t }) {
    const l = d, e = I(!1), r = I();
    return pe(() => l.routeKey, () => {
      e.value = !1, r.value && (r.value.scrollTop = 0);
    }), t({ closeNav: () => e.value = !1 }), (c, m) => (a(), s("div", {
      class: F(["at-shell", e.value && "at-shell--open"])
    }, [
      u("div", Ta, [
        L(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: m[0] || (m[0] = (p) => e.value = !1)
      }),
      u("div", La, [
        u("header", Da, [
          g(x, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: m[1] || (m[1] = (p) => e.value = !e.value)
          }),
          L(c.$slots, "topbar")
        ]),
        u("main", {
          ref_key: "page",
          ref: r,
          class: "at-shell__page"
        }, [
          L(c.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), Ea = ["title"], Ua = ["src", "alt"], Et = /* @__PURE__ */ P({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const t = d, l = S(() => t.name.split(/\s+/).filter(Boolean).map((e) => e[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (e, r) => (a(), s("span", {
      class: F(["at-avatar", e.size !== "sm" && `at-avatar--${e.size}`]),
      title: e.name
    }, [
      e.src ? (a(), s("img", {
        key: 0,
        src: e.src,
        alt: e.name
      }, null, 8, Ua)) : (a(), s(y, { key: 1 }, [
        _(v(l.value), 1)
      ], 64))
    ], 10, Ea));
  }
}), Pa = /* @__PURE__ */ P({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (t, l) => (a(), s("span", {
      class: F(["at-badge", t.tone !== "neutral" && `at-badge--${t.tone}`])
    }, [
      L(t.$slots, "default", {}, () => [
        _(v(t.label), 1)
      ])
    ], 2));
  }
}), Fa = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ia = {
  key: 0,
  "aria-hidden": "true"
}, Oa = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Na = ["href", "onClick"], xa = /* @__PURE__ */ P({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (t, l) => (a(), s("nav", Fa, [
      (a(!0), s(y, null, T(t.items, (e, r) => (a(), s(y, { key: r }, [
        r > 0 ? (a(), s("span", Ia, "/")) : f("", !0),
        r === t.items.length - 1 ? (a(), s("span", Oa, v(e.label), 1)) : (a(), s("a", {
          key: 2,
          href: e.href ?? "#",
          onClick: (c) => e.onClick && (c.preventDefault(), e.onClick())
        }, v(e.label), 9, Na))
      ], 64))), 128))
    ]));
  }
}), qa = {
  key: 0,
  class: "at-card__head"
}, Ha = {
  key: 0,
  class: "at-card__title"
}, ja = {
  key: 1,
  class: "at-card__desc"
}, Ra = {
  key: 1,
  class: "at-card__foot"
}, Wa = /* @__PURE__ */ P({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (t, l) => (a(), O(Lt(t.href ? "a" : t.as || "section"), {
      href: t.href,
      class: F(["at-card", t.href && "at-card--link", t.color && ["at-card--striped", `at-tone-${t.color}`]])
    }, {
      default: U(() => [
        t.title || t.description || t.$slots.actions ? (a(), s("div", qa, [
          u("div", null, [
            t.title ? (a(), s("h3", Ha, v(t.title), 1)) : f("", !0),
            t.description ? (a(), s("p", ja, v(t.description), 1)) : f("", !0)
          ]),
          L(t.$slots, "actions")
        ])) : f("", !0),
        L(t.$slots, "default"),
        t.$slots.footer ? (a(), s("div", Ra, [
          L(t.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), Ka = {
  key: 0,
  class: "at-toggle"
}, Ga = ["indeterminate", "disabled"], Ja = ["indeterminate", "disabled"], Ut = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "AtCheckbox",
  props: /* @__PURE__ */ K({
    label: {},
    indeterminate: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const t = G(d, "modelValue");
    return (l, e) => l.label || l.$slots.default ? (a(), s("label", Ka, [
      W(u("input", ve(l.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (r) => t.value = r),
        type: "checkbox",
        class: "at-check",
        indeterminate: l.indeterminate,
        disabled: l.disabled
      }), null, 16, Ga), [
        [Oe, t.value]
      ]),
      L(l.$slots, "default", {}, () => [
        _(v(l.label), 1)
      ])
    ])) : W((a(), s("input", ve({ key: 1 }, l.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (r) => t.value = r),
      type: "checkbox",
      class: "at-check",
      indeterminate: l.indeterminate,
      disabled: l.disabled
    }), null, 16, Ja)), [
      [Oe, t.value]
    ]);
  }
}), ue = /* @__PURE__ */ P({
  __name: "AtPopover",
  props: /* @__PURE__ */ K({
    anchor: {},
    align: { default: "start" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ K(["close"], ["update:open"]),
  setup(d, { expose: t, emit: l }) {
    const e = G(d, "open"), r = d, c = l, m = I(), p = I(), w = I({ top: -9999, left: -9999 }), M = S(() => {
      var N;
      return r.anchor ?? ((N = m.value) == null ? void 0 : N.firstElementChild) ?? m.value ?? null;
    });
    function C() {
      const N = M.value, H = p.value;
      if (!N || !H) return;
      const j = N.getBoundingClientRect(), ie = H.offsetWidth, Z = H.offsetHeight;
      let le = r.align === "end" ? j.right - ie : j.left;
      le = Math.max(8, Math.min(le, window.innerWidth - ie - 8));
      let oe = j.bottom + r.offset;
      oe + Z > window.innerHeight - 8 && (oe = Math.max(8, j.top - Z - r.offset)), (Math.abs(oe - w.value.top) > 0.5 || Math.abs(le - w.value.left) > 0.5) && (w.value = { top: oe, left: le });
    }
    function z() {
      e.value && (e.value = !1, c("close"));
    }
    function q() {
      e.value ? z() : e.value = !0;
    }
    function R(N) {
      var j, ie, Z;
      const H = N.target;
      (j = p.value) != null && j.contains(H) || (ie = M.value) != null && ie.contains(H) || (Z = H.closest) != null && Z.call(H, ".at-pop") || z();
    }
    function A(N) {
      var H, j;
      N.key === "Escape" && (N.stopPropagation(), z(), (j = (H = M.value) == null ? void 0 : H.focus) == null || j.call(H));
    }
    let b = null;
    function $() {
      setTimeout(() => document.addEventListener("mousedown", R), 0), document.addEventListener("keydown", A, !0), window.addEventListener("resize", C), window.addEventListener("scroll", C, !0), Te(() => {
        C(), p.value && (b = new ResizeObserver(C), b.observe(p.value));
      });
    }
    function D() {
      document.removeEventListener("mousedown", R), document.removeEventListener("keydown", A, !0), window.removeEventListener("resize", C), window.removeEventListener("scroll", C, !0), b == null || b.disconnect(), b = null, w.value = { top: -9999, left: -9999 };
    }
    return pe(e, (N) => N ? $() : D(), { immediate: !0 }), ut(D), t({ place: C, close: z, toggle: q }), (N, H) => (a(), s(y, null, [
      N.$slots.trigger ? (a(), s("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: m,
        style: { display: "contents" }
      }, [
        L(N.$slots, "trigger", {
          toggle: q,
          open: e.value
        })
      ], 512)) : f("", !0),
      (a(), O(dt, { to: "body" }, [
        e.value ? (a(), s("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: ee({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          L(N.$slots, "default", { close: z })
        ], 4)) : f("", !0)
      ]))
    ], 64));
  }
}), Ya = ["aria-valuenow", "aria-label"], Xa = { class: "at-progress__track" }, Za = {
  key: 0,
  class: "at-progress__label"
}, Pt = /* @__PURE__ */ P({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const t = d, l = S(() => Math.max(0, Math.min(100, Math.round(t.value / t.max * 100))));
    return (e, r) => (a(), s("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": l.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": e.label
    }, [
      u("span", Xa, [
        u("span", {
          class: "at-progress__bar",
          style: ee({ width: l.value + "%" })
        }, null, 4)
      ]),
      e.showLabel ? (a(), s("span", Za, v(l.value) + " %", 1)) : f("", !0)
    ], 8, Ya));
  }
}), Ne = "__none", lt = (d) => String(d).padStart(2, "0"), ct = (d) => `${d.getFullYear()}-${lt(d.getMonth() + 1)}-${lt(d.getDate())}`, Se = () => ct(/* @__PURE__ */ new Date()), Qa = (d, t) => {
  const l = /* @__PURE__ */ new Date(d + "T00:00");
  return l.setDate(l.getDate() + t), ct(l);
}, we = () => Math.random().toString(36).slice(2, 10), te = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, X = (d, t) => t.compute ? t.compute(d) : d[t.key], $e = (d, t) => typeof d.options == "function" ? d.options(t) : d.options ?? [], xe = (d, t, l) => $e(d, t).find((e) => e.value === l), Ve = (d) => !d.compute && !d.readonly && d.type !== "progress", es = ["status", "select", "relation", "person"], ze = (d) => es.includes(d.type), ts = {
  title: "text",
  text: "text",
  status: "status",
  select: "select",
  multi: "tags",
  person: "person",
  relation: "link",
  date: "calendar",
  number: "hash",
  progress: "progress",
  checkbox: "checkbox"
}, Ie = (d) => d.icon ?? ts[d.type] ?? "text", Fe = [
  { value: "table", label: "Tableau", icon: "table" },
  { value: "board", label: "Board", icon: "board" },
  { value: "list", label: "Liste", icon: "list" },
  { value: "calendar", label: "Calendrier", icon: "calendar" }
], st = {
  title: ["contains", "notcontains", "empty", "notempty"],
  text: ["contains", "notcontains", "empty", "notempty"],
  status: ["is", "isnot", "empty", "notempty"],
  select: ["is", "isnot", "empty", "notempty"],
  relation: ["is", "isnot", "empty", "notempty"],
  person: ["is", "isnot", "empty", "notempty"],
  multi: ["contains", "notcontains", "empty", "notempty"],
  date: ["past", "week", "before", "after", "is", "empty", "notempty"],
  number: ["eq", "gt", "lt", "empty", "notempty"],
  progress: ["eq", "gt", "lt"],
  checkbox: ["checked", "unchecked"]
}, $t = {
  contains: "contient",
  notcontains: "ne contient pas",
  empty: "est vide",
  notempty: "n’est pas vide",
  is: "est",
  isnot: "n’est pas",
  before: "avant le",
  after: "après le",
  past: "est dépassée",
  week: "dans les 7 jours",
  eq: "=",
  gt: ">",
  lt: "<",
  checked: "est cochée",
  unchecked: "n’est pas cochée"
}, Ft = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function as(d, t, l, e = Se()) {
  const r = X(d, t);
  if (!Ft.includes(l.op) && te(l.value)) return !0;
  const c = (m) => String(m ?? "").toLowerCase();
  switch (l.op) {
    case "empty":
      return te(r);
    case "notempty":
      return !te(r);
    case "contains":
      return t.type === "multi" ? (r ?? []).includes(l.value) : c(r).includes(c(l.value));
    case "notcontains":
      return t.type === "multi" ? !(r ?? []).includes(l.value) : !c(r).includes(c(l.value));
    case "is":
      return r === l.value;
    case "isnot":
      return r !== l.value;
    case "before":
      return !!r && r < l.value;
    case "after":
      return !!r && r > l.value;
    case "past":
      return !!r && r < e;
    case "week":
      return !!r && r >= e && r <= Qa(e, 7);
    case "eq":
      return Number(r) === Number(l.value);
    case "gt":
      return Number(r) > Number(l.value);
    case "lt":
      return Number(r) < Number(l.value);
    case "checked":
      return !!r;
    case "unchecked":
      return !r;
  }
  return !0;
}
function ss(d, t, l) {
  const e = X(t, d), r = X(l, d), c = te(e), m = te(r);
  if (c || m) return c === m ? 0 : c ? 1 : -1;
  if (ze(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(e) - p.indexOf(r);
  }
  return d.type === "number" || d.type === "progress" ? e - r : d.type === "checkbox" ? Number(r) - Number(e) : d.type === "multi" ? e.length - r.length : String(e).localeCompare(String(r), "fr");
}
function ns(d, t, l, e = "") {
  const r = Object.fromEntries(t.map((M) => [M.key, M])), c = t.find((M) => M.type === "title"), m = e.trim().toLowerCase(), p = d.filter((M) => (!m || !c || String(M[c.key] ?? "").toLowerCase().includes(m)) && l.filters.every((C) => !r[C.prop] || as(M, r[C.prop], C))), w = l.sorts.filter((M) => r[M.prop]);
  return w.length ? p.sort((M, C) => {
    for (const z of w) {
      const q = r[z.prop], R = te(X(M, q)), A = te(X(C, q));
      if (R !== A) return R ? 1 : -1;
      if (R) continue;
      const b = ss(q, M, C);
      if (b) return z.dir === "desc" ? -b : b;
    }
    return 0;
  }) : p;
}
function ls(d, t, l = !1) {
  if (!t) return [{ key: Ne, option: null, rows: d }];
  const e = $e(t).map((m) => ({ key: m.value, option: m, rows: [] })), r = { key: Ne, option: null, rows: [] }, c = Object.fromEntries(e.map((m) => [m.key, m]));
  for (const m of d) (c[X(m, t)] ?? r).rows.push(m);
  return (r.rows.length || l) && e.push(r), l ? e : e.filter((m) => m.rows.length);
}
function os(d) {
  const [t, l] = d.split("-").map(Number), r = (new Date(t, l - 1, 1).getDay() + 6) % 7, c = [];
  for (let m = 0; m < 42; m++) {
    const p = new Date(t, l - 1, 1 - r + m);
    c.push({ iso: ct(p), day: p.getDate(), outside: p.getMonth() !== l - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const Mt = (d, t) => {
  const [l, e] = d.split("-").map(Number), r = new Date(l, e - 1 + t, 1);
  return `${r.getFullYear()}-${lt(r.getMonth() + 1)}`;
};
function At(d, t = "table", l = {}) {
  return { id: we(), name: d, layout: t, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...l };
}
const ci = (d, t, l = "") => ({ id: we(), prop: d, op: t, value: l }), pi = (d, t = "asc") => ({ id: we(), prop: d, dir: t });
function rs(d, t) {
  const l = {};
  for (const e of d.filters) {
    const r = t.find((c) => c.key === e.prop);
    !r || !Ve(r) || te(e.value) || (e.op === "is" && (l[e.prop] = e.value), e.op === "contains" && r.type === "multi" && (l[e.prop] = [e.value]));
  }
  return l;
}
const is = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), us = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), It = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function ot(d) {
  if (!d) return "";
  const t = /* @__PURE__ */ new Date(d + "T00:00");
  return (t.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? is : us).format(t);
}
const ds = (d) => {
  const [t, l] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(t, l - 1, 1));
}, cs = {
  key: 0,
  class: "at-pv-title"
}, ps = ["checked"], vs = {
  key: 2,
  class: "at-pv-empty"
}, ms = {
  key: 5,
  class: "at-pv-multi"
}, hs = {
  key: 6,
  class: "at-pv-person"
}, gs = { class: "at-ellipsis" }, fs = {
  key: 7,
  class: "at-pv-rel"
}, bs = { class: "at-ellipsis" }, ys = {
  key: 9,
  class: "at-num"
}, ks = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, de = /* @__PURE__ */ P({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const t = d, l = S(() => X(t.row, t.prop)), e = S(() => t.prop.type), r = S(() => ze(t.prop) ? xe(t.prop, t.row, l.value) : void 0), c = S(() => e.value === "multi" ? (l.value ?? []).map((w) => xe(t.prop, t.row, w)).filter(Boolean) : []), m = S(() => {
      var w, M;
      return e.value === "date" && !!((M = (w = t.prop).overdue) != null && M.call(w, t.row));
    }), p = S(() => {
      var w;
      return ((w = r.value) == null ? void 0 : w.label) ?? String(l.value ?? "");
    });
    return (w, M) => {
      var C, z, q;
      return e.value === "title" ? (a(), s("span", cs, v(l.value || "Sans titre"), 1)) : e.value === "checkbox" ? (a(), s("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!l.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, ps)) : E(te)(l.value) ? (a(), s("span", vs, "—")) : e.value === "status" ? (a(), s("span", {
        key: 3,
        class: F(["at-badge", ((C = r.value) == null ? void 0 : C.tone) && r.value.tone !== "neutral" && `at-badge--${r.value.tone}`])
      }, v(p.value), 3)) : e.value === "select" ? (a(), s("span", {
        key: 4,
        class: F(["at-tag", ((z = r.value) == null ? void 0 : z.color) && r.value.color !== "gray" && `at-tag--${r.value.color}`])
      }, v(p.value), 3)) : e.value === "multi" ? (a(), s("span", ms, [
        (a(!0), s(y, null, T(c.value, (R) => (a(), s("span", {
          key: R.value,
          class: F(["at-tag", R.color && R.color !== "gray" && `at-tag--${R.color}`])
        }, v(R.label), 3))), 128))
      ])) : e.value === "person" ? (a(), s("span", hs, [
        g(Et, { name: p.value }, null, 8, ["name"]),
        u("span", gs, v(p.value), 1)
      ])) : e.value === "relation" ? (a(), s("span", fs, [
        (q = r.value) != null && q.mark ? (a(), s("span", {
          key: 0,
          class: "at-pv-mark",
          style: ee({ background: r.value.mark })
        }, null, 4)) : (a(), O(V, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", bs, v(r.value ? r.value.label : "Introuvable"), 1)
      ])) : e.value === "date" ? (a(), s("span", {
        key: 8,
        class: F(["at-pv-date", m.value && "at-pv-over"])
      }, v(E(ot)(l.value)), 3)) : e.value === "number" ? (a(), s("span", ys, v(E(It).format(Number(l.value))) + v(w.prop.suffix ?? ""), 1)) : e.value === "progress" ? (a(), O(Pt, {
        key: 10,
        value: Number(l.value)
      }, null, 8, ["value"])) : (a(), s("span", ks, v(l.value), 1));
    };
  }
}), _s = ["aria-label"], ws = { class: "at-menu-label" }, $s = ["aria-selected", "onClick"], Ms = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, As = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Cs = ["aria-label"], Ss = { class: "at-menu-label" }, Vs = ["aria-checked", "onClick"], zs = ["checked"], Ts = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Ls = { class: "at-menu-title" }, Ds = ["value", "aria-label"], Bs = { class: "at-menu-actions" }, Es = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Us = { class: "at-menu-title" }, Ps = ["type", "aria-label"], pt = /* @__PURE__ */ P({
  __name: "AtPropertyEditor",
  props: /* @__PURE__ */ K({
    prop: {},
    row: {},
    anchor: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ K(["update"], ["update:open"]),
  setup(d, { emit: t }) {
    const l = G(d, "open"), e = d, r = t, c = I(""), m = I(), p = S(() => {
      const b = e.prop;
      return b ? ze(b) ? "options" : b.type === "multi" ? "multi" : b.type === "date" ? "date" : "input" : null;
    }), w = S(() => e.prop ? $e(e.prop, e.row) : []), M = S(() => e.prop && e.row ? e.row[e.prop.key] : null);
    pe(l, (b) => {
      b && (c.value = M.value ?? "", Te(() => {
        var D, N;
        const $ = (D = m.value) == null ? void 0 : D.querySelector("input, button");
        $ == null || $.focus(), (N = $ == null ? void 0 : $.select) == null || N.call($);
      }));
    });
    const C = (b) => ({ ...e.row, [e.prop.key]: b });
    function z(b, $ = !0) {
      r("update", b), $ && (l.value = !1);
    }
    function q(b) {
      const $ = [...M.value ?? []], D = $.indexOf(b);
      D < 0 ? $.push(b) : $.splice(D, 1), z($, !1);
    }
    function R() {
      var $;
      let b = c.value;
      (($ = e.prop) == null ? void 0 : $.type) === "number" && (b = b === "" || b == null ? null : Number(b)), b !== M.value && r("update", b), l.value = !1;
    }
    function A() {
      var b;
      if (p.value === "input") {
        let $ = c.value;
        ((b = e.prop) == null ? void 0 : b.type) === "number" && ($ = $ === "" ? null : Number($)), $ !== M.value && r("update", $);
      }
    }
    return (b, $) => (a(), O(ue, {
      open: l.value,
      "onUpdate:open": $[5] || ($[5] = (D) => l.value = D),
      anchor: b.anchor,
      onClose: A
    }, {
      default: U(() => [
        b.prop ? (a(), s("div", {
          key: 0,
          ref_key: "box",
          ref: m
        }, [
          p.value === "options" ? (a(), s("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": b.prop.name
          }, [
            u("div", ws, v(b.prop.name), 1),
            (a(!0), s(y, null, T(w.value, (D) => (a(), s("button", {
              key: D.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": D.value === M.value,
              onClick: (N) => z(D.value)
            }, [
              g(de, {
                prop: b.prop,
                row: C(D.value)
              }, null, 8, ["prop", "row"]),
              D.value === M.value ? (a(), O(V, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : f("", !0)
            ], 8, $s))), 128)),
            w.value.length ? f("", !0) : (a(), s("div", Ms, "Aucune option disponible")),
            b.prop.required ? f("", !0) : (a(), s(y, { key: 1 }, [
              As,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: $[0] || ($[0] = (D) => z(null))
              }, [
                g(V, { name: "x" }),
                _("Effacer")
              ])
            ], 64))
          ], 8, _s)) : p.value === "multi" ? (a(), s("div", {
            key: 1,
            class: "at-menu",
            "aria-label": b.prop.name
          }, [
            u("div", Ss, v(b.prop.name), 1),
            (a(!0), s(y, null, T(w.value, (D) => (a(), s("button", {
              key: D.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(D.value),
              onClick: (N) => q(D.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(D.value)
              }, null, 8, zs),
              u("span", {
                class: F(["at-tag", D.color && D.color !== "gray" && `at-tag--${D.color}`])
              }, v(D.label), 3)
            ], 8, Vs))), 128))
          ], 8, Cs)) : p.value === "date" ? (a(), s("div", Ts, [
            u("span", Ls, v(b.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": b.prop.name,
              onChange: $[1] || ($[1] = (D) => z(D.target.value || null, !1))
            }, null, 40, Ds),
            u("div", Bs, [
              g(x, {
                size: "sm",
                onClick: $[2] || ($[2] = (D) => z(E(Se)()))
              }, {
                default: U(() => [
                  _("Aujourd’hui")
                ]),
                _: 1
              }),
              g(x, {
                size: "sm",
                variant: "ghost",
                onClick: $[3] || ($[3] = (D) => z(null))
              }, {
                default: U(() => [
                  _("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (a(), s("div", Es, [
            u("span", Us, v(b.prop.name), 1),
            W(u("input", {
              "onUpdate:modelValue": $[4] || ($[4] = (D) => c.value = D),
              class: "at-input",
              type: b.prop.type === "number" ? "number" : "text",
              "aria-label": b.prop.name,
              onKeydown: ka(R, ["enter"])
            }, null, 40, Ps), [
              [nt, c.value]
            ])
          ]))
        ], 512)) : f("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Fs = { class: "at-dv" }, Is = { class: "at-dv-viewsbar" }, Os = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Ns = ["aria-selected", "title", "onClick"], xs = { class: "at-toolbar at-dv-toolbar" }, qs = {
  key: 0,
  class: "at-dv-n"
}, Hs = {
  key: 0,
  class: "at-dv-n"
}, js = { class: "at-input-wrap at-dv-search" }, Rs = {
  key: 0,
  class: "at-dv-chips"
}, Ws = { class: "at-table-wrap" }, Ks = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Gs = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Js = { class: "at-cell-check" }, Ys = ["checked", "indeterminate"], Xs = { class: "at-th" }, Zs = ["onMousedown"], Qs = { class: "at-cell-check" }, en = {
  key: 0,
  class: "at-dv-grouprow"
}, tn = ["colspan"], an = ["aria-expanded", "onClick"], sn = {
  key: 1,
  class: "at-pv-empty"
}, nn = { class: "at-count" }, ln = ["aria-selected"], on = { class: "at-cell-check" }, rn = ["checked", "onChange"], un = ["onClick"], dn = ["onClick"], cn = /* @__PURE__ */ u("td", null, null, -1), pn = { class: "at-dv-newrow" }, vn = /* @__PURE__ */ u("td", null, null, -1), mn = ["colspan"], hn = ["onClick"], gn = /* @__PURE__ */ u("td", null, null, -1), fn = /* @__PURE__ */ u("td", null, null, -1), bn = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, yn = { class: "at-num" }, kn = {
  key: 2,
  class: "at-dv-board"
}, _n = {
  key: 0,
  class: "at-empty"
}, wn = ["onDragover", "onDrop"], $n = { class: "at-dv-colhead" }, Mn = {
  key: 1,
  class: "at-pv-empty"
}, An = { class: "at-count" }, Cn = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), Sn = { class: "at-dv-cards" }, Vn = ["onDragstart", "onClick"], zn = { class: "at-dv-cardtitle" }, Tn = {
  key: 0,
  class: "at-dv-cardprops"
}, Ln = ["onClick"], Dn = { key: 3 }, Bn = {
  key: 0,
  class: "at-empty"
}, En = {
  key: 1,
  class: "at-dv-list"
}, Un = {
  key: 0,
  class: "at-dv-lgroup"
}, Pn = ["aria-expanded", "onClick"], Fn = {
  key: 1,
  class: "at-pv-empty"
}, In = { class: "at-count" }, On = ["onClick"], Nn = { class: "at-pv-title" }, xn = { class: "at-dv-liprops" }, qn = { class: "at-dv-newline" }, Hn = { class: "at-dv-calhead" }, jn = { class: "at-dv-calmonth" }, Rn = { class: "at-dv-calnote" }, Wn = { class: "at-dv-calwrap" }, Kn = { class: "at-dv-calgrid" }, Gn = { class: "at-dv-calgrid" }, Jn = ["onDragover", "onDrop"], Yn = { class: "at-dv-daynum" }, Xn = ["aria-label", "onClick"], Zn = ["onDragstart", "onClick"], Qn = {
  class: "at-menu",
  role: "menu"
}, el = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), tl = ["onClick"], al = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, sl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), nl = { class: "at-rules" }, ll = {
  key: 0,
  class: "at-menu-empty"
}, ol = { class: "at-select" }, rl = ["onUpdate:modelValue", "onChange"], il = ["value"], ul = { class: "at-select" }, dl = ["onUpdate:modelValue"], cl = ["value"], pl = {
  key: 0,
  class: "at-select"
}, vl = ["onUpdate:modelValue"], ml = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), hl = ["value"], gl = ["onUpdate:modelValue"], fl = ["onUpdate:modelValue"], bl = ["onUpdate:modelValue"], yl = { key: 1 }, kl = { class: "at-menu-actions" }, _l = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, wl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), $l = { class: "at-rules" }, Ml = {
  key: 0,
  class: "at-menu-empty"
}, Al = { class: "at-select" }, Cl = ["onUpdate:modelValue"], Sl = ["value"], Vl = { class: "at-select" }, zl = ["onUpdate:modelValue"], Tl = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Ll = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), Dl = [
  Tl,
  Ll
], Bl = { class: "at-menu-actions" }, El = {
  class: "at-menu",
  role: "menu"
}, Ul = { class: "at-menu-label" }, Pl = ["onClick"], Fl = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Il = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Ol = ["draggable", "onDragstart", "onDragover", "onDrop"], Nl = { class: "at-pi-name" }, xl = ["aria-label", "checked", "disabled", "onChange"], ql = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Hl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, jl = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Rl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), Wl = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Kl = ["aria-pressed", "onClick"], Gl = {
  key: 0,
  class: "at-field-row"
}, Jl = { class: "at-select" }, Yl = ["value"], Xl = {
  key: 0,
  value: ""
}, Zl = ["value"], Ql = {
  key: 1,
  class: "at-field-row"
}, eo = /* @__PURE__ */ u("span", null, "Date utilisée", -1), to = { class: "at-select" }, ao = ["value"], so = ["value"], no = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), lo = ["disabled"], oo = /* @__PURE__ */ P({
  __name: "AtDataView",
  props: /* @__PURE__ */ K({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean }
  }, {
    views: { default: () => [At("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ K(["update", "create", "open", "delete"], ["update:views", "update:activeView"]),
  setup(d, { emit: t }) {
    const l = d, e = G(d, "views"), r = G(d, "activeView"), c = t, m = (o) => o[l.rowKey], p = S(() => e.value.find((o) => o.id === r.value) ?? e.value[0]), w = S(() => Object.fromEntries(l.schema.map((o) => [o.key, o]))), M = S(() => l.schema.find((o) => o.type === "title")), C = S(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? l.rowKey;
    }), z = S(() => {
      const o = (p.value.order ?? []).filter((k) => w.value[k]);
      for (const k of l.schema) o.includes(k.key) || o.push(k.key);
      const i = o.indexOf(C.value);
      return i > 0 && (o.splice(i, 1), o.unshift(C.value)), o.map((k) => w.value[k]);
    }), q = S(() => z.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), R = S(() => q.value.filter((o) => o.type !== "title")), A = S(() => l.schema.filter(ze)), b = S(() => l.schema.filter((o) => o.type === "date")), $ = S(() => l.schema.find((o) => o.type === "status")), D = I(""), N = S(() => ns(l.rows, l.schema, p.value, D.value)), H = S(() => {
      var i, k;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((i = $.value) == null ? void 0 : i.key) ?? ((k = A.value[0]) == null ? void 0 : k.key) ?? null : o;
    }), j = S(() => H.value && p.value.layout !== "calendar" ? w.value[H.value] : null), ie = S(() => ls(N.value, j.value, p.value.layout === "board")), Z = (o) => ({ [H.value]: o === Ne ? null : o }), le = S(() => p.value.filters.filter((o) => w.value[o.prop])), oe = S(() => p.value.sorts.filter((o) => w.value[o.prop])), He = I({}), ae = I(null), ce = I(null);
    function se(o, i) {
      if (ae.value === o && ce.value === i) {
        ae.value = null;
        return;
      }
      ce.value = i ?? null, ae.value = o;
    }
    const he = (o) => S({ get: () => ae.value === o, set: (i) => {
      !i && ae.value === o && (ae.value = null);
    } }), je = he("add"), Re = he("filter"), We = he("sort"), Ke = he("group"), Ge = he("props"), Je = he("settings");
    function Gt(o) {
      o.id === p.value.id ? se("settings", He.value[o.id]) : r.value = o.id;
    }
    const mt = () => {
      var o, i;
      return ((o = $.value) == null ? void 0 : o.key) ?? ((i = A.value[0]) == null ? void 0 : i.key) ?? null;
    };
    function Jt(o) {
      const i = At(Fe.find((k) => k.value === o).label, o, { groupBy: o === "board" ? mt() : null });
      e.value.push(i), r.value = i.id, ae.value = null, Te(() => se("settings", He.value[i.id]));
    }
    function Yt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = mt());
    }
    function Xt() {
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", e.value.push(o), r.value = o.id, ae.value = null;
    }
    function Zt() {
      if (e.value.length < 2) return;
      const o = e.value.indexOf(p.value);
      e.value.splice(o, 1), r.value = e.value[Math.max(0, o - 1)].id, ae.value = null;
    }
    pe(() => p.value.id, () => {
      J.value = [], ae.value = null;
    });
    function Qt() {
      const o = l.schema.find((i) => i.type !== "title" && i.type !== "progress") ?? l.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: st[o.type][0], value: "" });
    }
    function ea(o) {
      o.op = st[w.value[o.prop].type][0], o.value = "";
    }
    const ta = (o) => {
      var i;
      return st[(i = w.value[o.prop]) == null ? void 0 : i.type] ?? [];
    }, ht = (o) => !Ft.includes(o.op);
    function Le(o) {
      const i = w.value[o.prop];
      return i ? ze(i) || i.type === "multi" ? "options" : i.type === "date" ? "date" : i.type === "number" || i.type === "progress" ? "number" : "text" : "text";
    }
    function Ye(o) {
      var Y;
      const i = w.value[o.prop];
      let k = "";
      if (ht(o)) {
        const n = Le(o);
        k = n === "options" ? ((Y = xe(i, void 0, o.value)) == null ? void 0 : Y.label) ?? "…" : n === "date" ? ot(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: i.name, op: $t[o.op], val: k };
    }
    function aa() {
      const o = p.value.sorts.map((k) => k.prop), i = l.schema.find((k) => !o.includes(k.key)) ?? l.schema[0];
      p.value.sorts.push({ id: we(), prop: i.key, dir: "asc" });
    }
    const gt = (o, i) => {
      const k = o.indexOf(i);
      k >= 0 && o.splice(k, 1);
    };
    function sa() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Xe(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (ae.value = null);
    }
    function na(o) {
      const i = p.value.hidden, k = i.indexOf(o.key);
      k < 0 ? i.push(o.key) : i.splice(k, 1);
    }
    function ft(o) {
      p.value.hidden = o ? [] : l.schema.filter((i) => i.type !== "title").map((i) => i.key);
    }
    const Me = I(null), De = I(null);
    function la(o) {
      if (Me.value == null) return;
      const i = z.value.map((Y) => Y.key), [k] = i.splice(Me.value, 1);
      i.splice(o, 0, k), p.value.order = i, Me.value = null, De.value = null;
    }
    const Ze = (o) => p.value.widths[o.key] ?? o.width ?? 160, oa = S(() => 36 + q.value.reduce((o, i) => o + Ze(i), 0) + 44), Qe = I(null);
    function ra(o, i) {
      const k = o.clientX, Y = Ze(i);
      Qe.value = i.key;
      const n = (B) => {
        p.value.widths[i.key] = Math.max(70, Math.round(Y + B.clientX - k));
      }, h = () => {
        Qe.value = null, window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", h);
      };
      window.addEventListener("mousemove", n), window.addEventListener("mouseup", h);
    }
    const J = I([]), et = S(() => N.value.length > 0 && N.value.every((o) => J.value.includes(m(o)))), ia = S(() => J.value.length > 0 && !et.value);
    function ua(o) {
      const i = J.value.indexOf(m(o));
      i < 0 ? J.value.push(m(o)) : J.value.splice(i, 1);
    }
    function da() {
      J.value = et.value ? [] : N.value.map(m);
    }
    function ca() {
      c("delete", l.rows.filter((o) => J.value.includes(m(o)))), J.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function bt(o) {
      const i = p.value.collapsed, k = i.indexOf(o);
      k < 0 ? i.push(o) : i.splice(k, 1);
    }
    function tt(o) {
      const i = N.value;
      if (o.type === "title") return { label: "Total", value: String(i.length) };
      if (o.type === "number") return { label: "Somme", value: It.format(i.reduce((k, Y) => k + (Number(X(Y, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && i.length) return { label: "Moyenne", value: Math.round(i.reduce((k, Y) => k + Number(X(Y, o)), 0) / i.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const k = i.filter((Y) => o.overdue(Y)).length;
        return k ? { label: "En retard", value: String(k) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(i.filter((k) => X(k, o)).length) } : null;
    }
    const fe = _a(null), yt = I(null), at = I(!1);
    function pa(o, i, k) {
      if (k.type === "title") {
        c("open", i);
        return;
      }
      if (Ve(k)) {
        if (k.type === "checkbox") {
          c("update", i, k.key, !i[k.key]);
          return;
        }
        yt.value = o.currentTarget, fe.value = { row: i, prop: k }, at.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...rs(p.value, l.schema), ...o });
    }
    const Be = I(null), be = I(null);
    function kt(o, i) {
      Be.value = m(i), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(m(i))));
    }
    function Ee() {
      Be.value = null, be.value = null;
    }
    const _t = () => l.rows.find((o) => m(o) === Be.value);
    function va(o) {
      const i = _t();
      i && H.value && c("update", i, H.value, o === Ne ? null : o), Ee();
    }
    function ma(o) {
      const i = _t();
      i && ne.value && c("update", i, ne.value, o), Ee();
    }
    const ne = S(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = b.value[0]) == null ? void 0 : o.key) ?? null;
    }), Ue = S(() => p.value.month ?? Se().slice(0, 7)), ha = S(() => os(Ue.value).map((o) => ({ ...o, today: o.iso === Se(), rows: ne.value ? N.value.filter((i) => i[ne.value] === o.iso) : [] }))), wt = S(() => ne.value ? N.value.filter((o) => !o[ne.value]).length : 0), ga = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, fa = (o) => {
      const i = $.value, k = i ? xe(i, o, o[i.key]) : void 0;
      return ga[(k == null ? void 0 : k.tone) ?? "neutral"];
    }, ba = (o) => {
      const i = $.value;
      if (!i) return !1;
      const k = $e(i, o);
      return k.length > 0 && o[i.key] === k[k.length - 1].value;
    }, ya = (o) => {
      var i;
      return ((i = Fe.find((k) => k.value === o)) == null ? void 0 : i.icon) ?? "table";
    }, Pe = S(() => j.value ? `Sans ${j.value.name.toLowerCase()}` : "");
    return (o, i) => {
      var k, Y;
      return a(), s("section", Fs, [
        u("div", Is, [
          o.hideViews ? f("", !0) : (a(), s(y, { key: 0 }, [
            u("div", Os, [
              (a(!0), s(y, null, T(e.value, (n) => (a(), s("button", {
                key: n.id,
                ref_for: !0,
                ref: (h) => {
                  h && (He.value[n.id] = h);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": n.id === p.value.id,
                title: n.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (h) => Gt(n)
              }, [
                g(V, {
                  name: ya(n.layout)
                }, null, 8, ["name"]),
                _(v(n.name), 1)
              ], 8, Ns))), 128))
            ]),
            g(x, {
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: i[0] || (i[0] = (n) => se("add", n.currentTarget))
            })
          ], 64)),
          u("div", xs, [
            g(x, {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: F({ "is-on": le.value.length }),
              onClick: i[1] || (i[1] = (n) => se("filter", n.currentTarget))
            }, {
              default: U(() => [
                _(" Filtrer"),
                le.value.length ? (a(), s("span", qs, v(le.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            g(x, {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: F({ "is-on": oe.value.length }),
              onClick: i[2] || (i[2] = (n) => se("sort", n.currentTarget))
            }, {
              default: U(() => [
                _(" Trier"),
                oe.value.length ? (a(), s("span", Hs, v(oe.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            p.value.layout !== "calendar" ? (a(), O(x, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: F({ "is-on": p.value.groupBy }),
              onClick: i[3] || (i[3] = (n) => se("group", n.currentTarget))
            }, {
              default: U(() => [
                _("Grouper")
              ]),
              _: 1
            }, 8, ["class"])) : f("", !0),
            g(x, {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: i[4] || (i[4] = (n) => se("props", n.currentTarget))
            }, {
              default: U(() => [
                _("Propriétés")
              ]),
              _: 1
            }),
            u("div", js, [
              g(V, { name: "search" }),
              W(u("input", {
                "onUpdate:modelValue": i[5] || (i[5] = (n) => D.value = n),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [ke, D.value]
              ])
            ]),
            o.hideViews ? f("", !0) : (a(), O(x, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: i[6] || (i[6] = (n) => se("settings", n.currentTarget))
            })),
            g(x, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: i[7] || (i[7] = (n) => me())
            }, {
              default: U(() => [
                _(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        le.value.length || oe.value.length ? (a(), s("div", Rs, [
          (a(!0), s(y, null, T(le.value, (n) => (a(), s("button", {
            key: n.id,
            type: "button",
            class: "at-dv-chip",
            onClick: i[8] || (i[8] = (h) => se("filter", h.currentTarget))
          }, [
            g(V, { name: "filter" }),
            _(v(Ye(n).name) + " " + v(Ye(n).op) + " ", 1),
            u("b", null, v(Ye(n).val), 1)
          ]))), 128)),
          (a(!0), s(y, null, T(oe.value, (n) => (a(), s("button", {
            key: n.id,
            type: "button",
            class: "at-dv-chip",
            onClick: i[9] || (i[9] = (h) => se("sort", h.currentTarget))
          }, [
            g(V, { name: "sort" }),
            _(v(w.value[n.prop].name) + " ", 1),
            u("b", null, v(n.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          g(x, {
            variant: "ghost",
            size: "sm",
            onClick: sa
          }, {
            default: U(() => [
              _("Tout effacer")
            ]),
            _: 1
          })
        ])) : f("", !0),
        p.value.layout === "table" ? (a(), s(y, { key: 1 }, [
          u("div", Ws, [
            u("table", {
              class: "at-table at-dv-table",
              style: ee({ width: oa.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                Ks,
                (a(!0), s(y, null, T(q.value, (n) => (a(), s("col", {
                  key: n.key,
                  style: ee({ width: Ze(n) + "px" })
                }, null, 4))), 128)),
                Gs
              ]),
              u("thead", null, [
                u("tr", null, [
                  u("th", Js, [
                    u("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: et.value,
                      indeterminate: ia.value,
                      onChange: da
                    }, null, 40, Ys)
                  ]),
                  (a(!0), s(y, null, T(q.value, (n) => (a(), s("th", {
                    key: n.key,
                    class: F({ "at-num": n.type === "number" })
                  }, [
                    u("span", Xs, [
                      g(V, {
                        name: E(Ie)(n)
                      }, null, 8, ["name"]),
                      _(v(n.name), 1)
                    ]),
                    u("span", {
                      class: F(["at-dv-resize", Qe.value === n.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: re((h) => ra(h, n), ["prevent"])
                    }, null, 42, Zs)
                  ], 2))), 128)),
                  u("th", Qs, [
                    g(x, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: i[10] || (i[10] = (n) => se("props", n.currentTarget))
                    })
                  ])
                ])
              ]),
              (a(!0), s(y, null, T(ie.value, (n) => (a(), s("tbody", {
                key: n.key
              }, [
                j.value ? (a(), s("tr", en, [
                  u("td", {
                    colspan: q.value.length + 2
                  }, [
                    u("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !ge(n.key),
                      onClick: (h) => bt(n.key)
                    }, [
                      g(V, {
                        name: "chevron-down",
                        class: F({ "at-rot": ge(n.key) })
                      }, null, 8, ["class"]),
                      n.option ? (a(), O(de, {
                        key: 0,
                        prop: j.value,
                        row: Z(n.key)
                      }, null, 8, ["prop", "row"])) : (a(), s("span", sn, v(Pe.value), 1)),
                      u("span", nn, v(n.rows.length), 1)
                    ], 8, an)
                  ], 8, tn)
                ])) : f("", !0),
                ge(n.key) ? f("", !0) : (a(), s(y, { key: 1 }, [
                  (a(!0), s(y, null, T(n.rows, (h) => (a(), s("tr", {
                    key: m(h),
                    "aria-selected": J.value.includes(m(h)) ? "true" : void 0
                  }, [
                    u("td", on, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: J.value.includes(m(h)),
                        onChange: (B) => ua(h)
                      }, null, 40, rn)
                    ]),
                    (a(!0), s(y, null, T(q.value, (B) => (a(), s("td", {
                      key: B.key,
                      class: F({ "at-num": B.type === "number", "at-dv-titlecell": B.type === "title", "is-edit": B.type !== "title" && E(Ve)(B) }),
                      onClick: (Q) => pa(Q, h, B)
                    }, [
                      g(de, {
                        prop: B,
                        row: h
                      }, null, 8, ["prop", "row"]),
                      B.type === "title" ? (a(), s("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: re((Q) => c("open", h), ["stop"])
                      }, "Ouvrir", 8, dn)) : f("", !0)
                    ], 10, un))), 128)),
                    cn
                  ], 8, ln))), 128)),
                  u("tr", pn, [
                    vn,
                    u("td", {
                      colspan: q.value.length + 1
                    }, [
                      u("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (h) => me(j.value ? Z(n.key) : {})
                      }, [
                        g(V, { name: "plus" }),
                        _(v(o.newLabel), 1)
                      ], 8, hn)
                    ], 8, mn)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  gn,
                  (a(!0), s(y, null, T(q.value, (n) => (a(), s("td", {
                    key: n.key,
                    class: F({ "at-num": n.type === "number" })
                  }, [
                    tt(n) ? (a(), s(y, { key: 0 }, [
                      _(v(tt(n).label) + " ", 1),
                      u("b", null, v(tt(n).value), 1)
                    ], 64)) : f("", !0)
                  ], 2))), 128)),
                  fn
                ])
              ])
            ], 4)
          ]),
          J.value.length ? (a(), s("div", bn, [
            u("span", null, [
              u("b", yn, v(J.value.length), 1),
              _(" sélectionnée" + v(J.value.length > 1 ? "s" : ""), 1)
            ]),
            g(x, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: ca
            }, {
              default: U(() => [
                _("Supprimer")
              ]),
              _: 1
            }),
            g(x, {
              variant: "ghost",
              size: "sm",
              onClick: i[11] || (i[11] = (n) => J.value = [])
            }, {
              default: U(() => [
                _("Désélectionner")
              ]),
              _: 1
            })
          ])) : f("", !0)
        ], 64)) : p.value.layout === "board" ? (a(), s("div", kn, [
          j.value ? (a(!0), s(y, { key: 1 }, T(ie.value, (n) => {
            var h;
            return a(), s("div", {
              key: n.key,
              class: F(["at-dv-col", be.value === n.key && "over"]),
              onDragover: re((B) => be.value = n.key, ["prevent"]),
              onDragleave: i[12] || (i[12] = re((B) => be.value = null, ["self"])),
              onDrop: re((B) => va(n.key), ["prevent"])
            }, [
              u("div", $n, [
                n.option ? (a(), O(de, {
                  key: 0,
                  prop: j.value,
                  row: Z(n.key)
                }, null, 8, ["prop", "row"])) : (a(), s("span", Mn, v(Pe.value), 1)),
                u("span", An, v(n.rows.length), 1),
                Cn,
                g(x, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((h = n.option) == null ? void 0 : h.label) ?? Pe.value}`,
                  onClick: (B) => me(Z(n.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", Sn, [
                (a(!0), s(y, null, T(n.rows, (B) => (a(), s("button", {
                  key: m(B),
                  type: "button",
                  class: F(["at-dv-card", Be.value === m(B) && "dragging"]),
                  draggable: "true",
                  onDragstart: (Q) => kt(Q, B),
                  onDragend: Ee,
                  onClick: (Q) => c("open", B)
                }, [
                  u("span", zn, v(B[C.value] || "Sans titre"), 1),
                  R.value.some((Q) => !E(te)(E(X)(B, Q)) || Q.type === "checkbox") ? (a(), s("span", Tn, [
                    (a(!0), s(y, null, T(R.value, (Q) => (a(), s(y, {
                      key: Q.key
                    }, [
                      E(te)(E(X)(B, Q)) ? f("", !0) : (a(), O(de, {
                        key: 0,
                        prop: Q,
                        row: B
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : f("", !0)
                ], 42, Vn))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (B) => me(Z(n.key))
                }, [
                  g(V, { name: "plus" }),
                  _(v(o.newLabel), 1)
                ], 8, Ln)
              ])
            ], 42, wn);
          }), 128)) : (a(), s("div", _n, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (a(), s("div", Dn, [
          N.value.length ? (a(), s("div", En, [
            (a(!0), s(y, null, T(ie.value, (n) => (a(), s(y, {
              key: n.key
            }, [
              j.value ? (a(), s("div", Un, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(n.key),
                  onClick: (h) => bt(n.key)
                }, [
                  g(V, {
                    name: "chevron-down",
                    class: F({ "at-rot": ge(n.key) })
                  }, null, 8, ["class"]),
                  n.option ? (a(), O(de, {
                    key: 0,
                    prop: j.value,
                    row: Z(n.key)
                  }, null, 8, ["prop", "row"])) : (a(), s("span", Fn, v(Pe.value), 1)),
                  u("span", In, v(n.rows.length), 1)
                ], 8, Pn)
              ])) : f("", !0),
              ge(n.key) ? f("", !0) : (a(!0), s(y, { key: 1 }, T(n.rows, (h) => (a(), s("button", {
                key: m(h),
                type: "button",
                class: "at-dv-li",
                onClick: (B) => c("open", h)
              }, [
                u("span", Nn, v(h[C.value] || "Sans titre"), 1),
                u("span", xn, [
                  (a(!0), s(y, null, T(R.value, (B) => (a(), s(y, {
                    key: B.key
                  }, [
                    E(te)(E(X)(h, B)) ? f("", !0) : (a(), O(de, {
                      key: 0,
                      prop: B,
                      row: h
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, On))), 128))
            ], 64))), 128)),
            u("div", qn, [
              u("button", {
                type: "button",
                class: "at-dv-new",
                onClick: i[14] || (i[14] = (n) => me())
              }, [
                g(V, { name: "plus" }),
                _(v(o.newLabel), 1)
              ])
            ])
          ])) : (a(), s("div", Bn, [
            _("Aucun élément ne correspond à cette vue."),
            g(x, {
              size: "sm",
              icon: "plus",
              onClick: i[13] || (i[13] = (n) => me())
            }, {
              default: U(() => [
                _(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (a(), s(y, { key: 4 }, [
          u("div", Hn, [
            u("span", jn, v(E(ds)(Ue.value)), 1),
            g(x, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: i[15] || (i[15] = (n) => p.value.month = E(Mt)(Ue.value, -1))
            }),
            g(x, {
              size: "sm",
              onClick: i[16] || (i[16] = (n) => p.value.month = E(Se)().slice(0, 7))
            }, {
              default: U(() => [
                _("Aujourd’hui")
              ]),
              _: 1
            }),
            g(x, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: i[17] || (i[17] = (n) => p.value.month = E(Mt)(Ue.value, 1))
            }),
            u("span", Rn, [
              ne.value ? (a(), s(y, { key: 0 }, [
                _("Par " + v(w.value[ne.value].name.toLowerCase()), 1),
                wt.value ? (a(), s(y, { key: 0 }, [
                  _(" · " + v(wt.value) + " sans date", 1)
                ], 64)) : f("", !0)
              ], 64)) : (a(), s(y, { key: 1 }, [
                _("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", Wn, [
            u("div", Kn, [
              (a(), s(y, null, T(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (n) => u("div", {
                key: n,
                class: "at-dv-dow"
              }, v(n), 1)), 64))
            ]),
            u("div", Gn, [
              (a(!0), s(y, null, T(ha.value, (n) => (a(), s("div", {
                key: n.iso,
                class: F(["at-dv-day", n.outside && "out", n.today && "today", be.value === n.iso && "over"]),
                onDragover: re((h) => be.value = n.iso, ["prevent"]),
                onDrop: re((h) => ma(n.iso), ["prevent"])
              }, [
                u("div", Yn, [
                  u("span", null, v(n.day), 1),
                  ne.value ? (a(), s("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${E(ot)(n.iso)}`,
                    onClick: (h) => me({ [ne.value]: n.iso })
                  }, [
                    g(V, { name: "plus" })
                  ], 8, Xn)) : f("", !0)
                ]),
                (a(!0), s(y, null, T(n.rows, (h) => (a(), s("button", {
                  key: m(h),
                  type: "button",
                  class: F(["at-dv-calitem", ba(h) && "done"]),
                  draggable: "true",
                  onDragstart: (B) => kt(B, h),
                  onDragend: Ee,
                  onClick: (B) => c("open", h)
                }, [
                  u("span", {
                    class: "dot",
                    style: ee({ background: fa(h) })
                  }, null, 4),
                  u("span", null, v(h[C.value] || "Sans titre"), 1)
                ], 42, Zn))), 128))
              ], 42, Jn))), 128))
            ])
          ])
        ], 64)),
        g(ue, {
          open: E(je),
          "onUpdate:open": i[18] || (i[18] = (n) => ye(je) ? je.value = n : null),
          anchor: ce.value
        }, {
          default: U(() => [
            u("div", Qn, [
              el,
              (a(!0), s(y, null, T(E(Fe), (n) => (a(), s("button", {
                key: n.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (h) => Jt(n.value)
              }, [
                g(V, {
                  name: n.icon
                }, null, 8, ["name"]),
                _(v(n.label), 1)
              ], 8, tl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(Re),
          "onUpdate:open": i[19] || (i[19] = (n) => ye(Re) ? Re.value = n : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", al, [
              sl,
              u("div", nl, [
                p.value.filters.length ? f("", !0) : (a(), s("span", ll, "Aucun filtre : la vue affiche toutes les lignes.")),
                (a(!0), s(y, null, T(p.value.filters, (n) => (a(), s("div", {
                  key: n.id,
                  class: "at-rule"
                }, [
                  u("div", ol, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => n.prop = h,
                      "aria-label": "Propriété",
                      onChange: (h) => ea(n)
                    }, [
                      (a(!0), s(y, null, T(o.schema, (h) => (a(), s("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, il))), 128))
                    ], 40, rl), [
                      [_e, n.prop]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  u("div", ul, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => n.op = h,
                      "aria-label": "Condition"
                    }, [
                      (a(!0), s(y, null, T(ta(n), (h) => (a(), s("option", {
                        key: h,
                        value: h
                      }, v(E($t)[h]), 9, cl))), 128))
                    ], 8, dl), [
                      [_e, n.op]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  ht(n) ? (a(), s(y, { key: 0 }, [
                    Le(n) === "options" ? (a(), s("div", pl, [
                      W(u("select", {
                        "onUpdate:modelValue": (h) => n.value = h,
                        "aria-label": "Valeur"
                      }, [
                        ml,
                        (a(!0), s(y, null, T(E($e)(w.value[n.prop]), (h) => (a(), s("option", {
                          key: h.value,
                          value: h.value
                        }, v(h.label), 9, hl))), 128))
                      ], 8, vl), [
                        [_e, n.value]
                      ]),
                      g(V, { name: "chevron-down" })
                    ])) : Le(n) === "date" ? W((a(), s("input", {
                      key: 1,
                      "onUpdate:modelValue": (h) => n.value = h,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, gl)), [
                      [ke, n.value]
                    ]) : Le(n) === "number" ? W((a(), s("input", {
                      key: 2,
                      "onUpdate:modelValue": (h) => n.value = h,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, fl)), [
                      [ke, n.value]
                    ]) : W((a(), s("input", {
                      key: 3,
                      "onUpdate:modelValue": (h) => n.value = h,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, bl)), [
                      [ke, n.value]
                    ])
                  ], 64)) : (a(), s("span", yl)),
                  g(x, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (h) => gt(p.value.filters, n)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", kl, [
                g(x, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Qt
                }, {
                  default: U(() => [
                    _("Ajouter un filtre")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(We),
          "onUpdate:open": i[20] || (i[20] = (n) => ye(We) ? We.value = n : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", _l, [
              wl,
              u("div", $l, [
                p.value.sorts.length ? f("", !0) : (a(), s("span", Ml, "Aucun tri : ordre des données.")),
                (a(!0), s(y, null, T(p.value.sorts, (n) => (a(), s("div", {
                  key: n.id,
                  class: "at-rule sort"
                }, [
                  u("div", Al, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => n.prop = h,
                      "aria-label": "Propriété"
                    }, [
                      (a(!0), s(y, null, T(o.schema, (h) => (a(), s("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, Sl))), 128))
                    ], 8, Cl), [
                      [_e, n.prop]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  u("div", Vl, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => n.dir = h,
                      "aria-label": "Sens"
                    }, Dl, 8, zl), [
                      [_e, n.dir]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  g(x, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (h) => gt(p.value.sorts, n)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", Bl, [
                g(x, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: aa
                }, {
                  default: U(() => [
                    _("Ajouter un tri")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(Ke),
          "onUpdate:open": i[22] || (i[22] = (n) => ye(Ke) ? Ke.value = n : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", El, [
              u("div", Ul, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (a(), s("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: i[21] || (i[21] = (n) => Xe(null))
              }, [
                g(V, { name: "x" }),
                _("Aucun groupe"),
                p.value.groupBy ? f("", !0) : (a(), O(V, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : f("", !0),
              (a(!0), s(y, null, T(A.value, (n) => (a(), s("button", {
                key: n.key,
                type: "button",
                class: "at-menu-item",
                onClick: (h) => Xe(n.key)
              }, [
                g(V, {
                  name: E(Ie)(n)
                }, null, 8, ["name"]),
                _(v(n.name), 1),
                H.value === n.key ? (a(), O(V, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : f("", !0)
              ], 8, Pl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(Ge),
          "onUpdate:open": i[26] || (i[26] = (n) => ye(Ge) ? Ge.value = n : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", Fl, [
              Il,
              (a(!0), s(y, null, T(z.value, (n, h) => (a(), s("div", {
                key: n.key,
                class: F(["at-menu-item", "at-pi", De.value === h && "drop"]),
                draggable: n.type !== "title",
                onDragstart: (B) => Me.value = h,
                onDragover: re((B) => De.value = h, ["prevent"]),
                onDrop: re((B) => la(h), ["prevent"]),
                onDragend: i[23] || (i[23] = (B) => {
                  Me.value = null, De.value = null;
                })
              }, [
                g(V, {
                  name: "grip",
                  class: "grip"
                }),
                g(V, {
                  name: E(Ie)(n)
                }, null, 8, ["name"]),
                u("span", Nl, v(n.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${n.name}`,
                  checked: n.type === "title" || !p.value.hidden.includes(n.key),
                  disabled: n.type === "title",
                  onChange: (B) => na(n)
                }, null, 40, xl)
              ], 42, Ol))), 128)),
              ql,
              u("div", Hl, [
                g(x, {
                  variant: "ghost",
                  size: "sm",
                  onClick: i[24] || (i[24] = (n) => ft(!0))
                }, {
                  default: U(() => [
                    _("Tout afficher")
                  ]),
                  _: 1
                }),
                g(x, {
                  variant: "ghost",
                  size: "sm",
                  onClick: i[25] || (i[25] = (n) => ft(!1))
                }, {
                  default: U(() => [
                    _("Tout masquer")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(Je),
          "onUpdate:open": i[30] || (i[30] = (n) => ye(Je) ? Je.value = n : null),
          anchor: ce.value
        }, {
          default: U(() => [
            u("div", jl, [
              Rl,
              W(u("input", {
                "onUpdate:modelValue": i[27] || (i[27] = (n) => p.value.name = n),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", Wl, [
                (a(!0), s(y, null, T(E(Fe), (n) => (a(), s("button", {
                  key: n.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === n.value,
                  onClick: (h) => Yt(n.value)
                }, [
                  g(V, {
                    name: n.icon
                  }, null, 8, ["name"]),
                  _(v(n.label), 1)
                ], 8, Kl))), 128))
              ]),
              p.value.layout !== "calendar" ? (a(), s("div", Gl, [
                u("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                u("div", Jl, [
                  u("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: i[28] || (i[28] = (n) => Xe(n.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (a(), s("option", Xl, "Aucun")) : f("", !0),
                    (a(!0), s(y, null, T(A.value, (n) => (a(), s("option", {
                      key: n.key,
                      value: n.key
                    }, v(n.name), 9, Zl))), 128))
                  ], 40, Yl),
                  g(V, { name: "chevron-down" })
                ])
              ])) : (a(), s("div", Ql, [
                eo,
                u("div", to, [
                  u("select", {
                    value: ne.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: i[29] || (i[29] = (n) => p.value.dateProp = n.target.value)
                  }, [
                    (a(!0), s(y, null, T(b.value, (n) => (a(), s("option", {
                      key: n.key,
                      value: n.key
                    }, v(n.name), 9, so))), 128))
                  ], 40, ao),
                  g(V, { name: "chevron-down" })
                ])
              ])),
              no,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: Xt
              }, [
                g(V, { name: "copy" }),
                _("Dupliquer la vue")
              ]),
              u("button", {
                type: "button",
                class: "at-menu-item at-menu-item--danger",
                disabled: e.value.length < 2,
                onClick: Zt
              }, [
                g(V, { name: "trash" }),
                _("Supprimer la vue")
              ], 8, lo)
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(pt, {
          open: at.value,
          "onUpdate:open": i[31] || (i[31] = (n) => at.value = n),
          prop: ((k = fe.value) == null ? void 0 : k.prop) ?? null,
          row: (Y = fe.value) == null ? void 0 : Y.row,
          anchor: yt.value,
          onUpdate: i[32] || (i[32] = (n) => fe.value && c("update", fe.value.row, fe.value.prop.key, n))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), ro = {
  key: 0,
  class: "at-drawer-wrap"
}, io = ["aria-label"], uo = { class: "at-drawer__head" }, co = { class: "at-drawer__crumb" }, po = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), vo = { class: "at-drawer__body" }, mo = /* @__PURE__ */ P({
  __name: "AtDrawer",
  props: /* @__PURE__ */ K({
    label: {},
    width: { default: 580 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(d) {
    const t = G(d, "open"), l = I();
    let e = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (t.value = !1);
    }
    return pe(t, (c) => {
      var m;
      c ? (e = document.activeElement, document.addEventListener("keydown", r), Te(() => {
        var p;
        return (p = l.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = e == null ? void 0 : e.focus) == null || m.call(e));
    }, { immediate: !0 }), ut(() => document.removeEventListener("keydown", r)), (c, m) => (a(), O(dt, { to: "body" }, [
      g(Dt, { name: "at-drawer" }, {
        default: U(() => [
          t.value ? (a(), s("div", ro, [
            u("div", {
              class: "at-overlay",
              onClick: m[0] || (m[0] = (p) => t.value = !1)
            }),
            u("aside", {
              ref_key: "panel",
              ref: l,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: ee({ width: `min(${c.width}px, 100%)` })
            }, [
              u("header", uo, [
                u("span", co, [
                  L(c.$slots, "crumb", {}, () => [
                    _(v(c.label), 1)
                  ])
                ]),
                po,
                L(c.$slots, "actions"),
                g(x, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => t.value = !1)
                })
              ]),
              u("div", vo, [
                L(c.$slots, "default")
              ])
            ], 12, io)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ho = ["aria-label"], go = {
  key: 0,
  class: "at-menu-label"
}, Ot = /* @__PURE__ */ P({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const t = I();
    function l(e) {
      var p;
      const r = [...((p = t.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!r.length) return;
      const c = r.indexOf(document.activeElement), m = (w) => {
        e.preventDefault(), r[(w + r.length) % r.length].focus();
      };
      e.key === "ArrowDown" ? m(c + 1) : e.key === "ArrowUp" ? m(c < 0 ? r.length - 1 : c - 1) : e.key === "Home" ? m(0) : e.key === "End" && m(r.length - 1);
    }
    return (e, r) => (a(), s("div", {
      ref_key: "el",
      ref: t,
      class: "at-menu",
      role: "menu",
      "aria-label": e.label,
      style: ee(e.minWidth ? { minWidth: e.minWidth + "px" } : void 0),
      onKeydown: l
    }, [
      e.label ? (a(), s("div", go, v(e.label), 1)) : f("", !0),
      L(e.$slots, "default")
    ], 44, ho));
  }
}), fo = /* @__PURE__ */ P({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const t = I(!1);
    function l(e) {
      e.target.closest('.at-menu-item[role="menuitem"]') && (t.value = !1);
    }
    return (e, r) => (a(), O(ue, {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (c) => t.value = c),
      align: e.align
    }, {
      trigger: U((c) => [
        L(e.$slots, "trigger", wa($a(c)))
      ]),
      default: U(() => [
        g(Ot, {
          label: e.label,
          "min-width": e.minWidth,
          onClick: l
        }, {
          default: U(() => [
            L(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align"]));
  }
}), bo = { class: "at-empty" }, yo = /* @__PURE__ */ P({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (t, l) => (a(), s("div", bo, [
      L(t.$slots, "default", {}, () => [
        _(v(t.message), 1)
      ]),
      L(t.$slots, "action")
    ]));
  }
});
let Ct = 0;
function Nt(d = "at") {
  return Ct += 1, `${d}-${Ct}`;
}
const ko = { class: "at-field" }, _o = ["for"], wo = ["id"], $o = ["id"], rt = /* @__PURE__ */ P({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const l = d.id ?? Nt("field");
    return (e, r) => (a(), s("div", ko, [
      e.label ? (a(), s("label", {
        key: 0,
        class: "at-label",
        for: E(l)
      }, v(e.label), 9, _o)) : f("", !0),
      L(e.$slots, "default", {
        id: E(l),
        invalid: !!e.error,
        describedby: e.error || e.hint ? E(l) + "-hint" : void 0
      }),
      e.error ? (a(), s("span", {
        key: 1,
        id: E(l) + "-hint",
        class: "at-hint at-hint--error"
      }, v(e.error), 9, wo)) : e.hint ? (a(), s("span", {
        key: 2,
        id: E(l) + "-hint",
        class: "at-hint"
      }, v(e.hint), 9, $o)) : f("", !0)
    ]));
  }
}), Mo = ["role", "aria-label", "aria-hidden"], xt = /* @__PURE__ */ P({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (t, l) => (a(), s("span", {
      class: F(["at-tile", t.size !== "sm" && `at-tile--${t.size}`, t.color === "neutral" ? "at-tile--neutral" : `at-tone-${t.color}`]),
      role: t.label ? "img" : void 0,
      "aria-label": t.label,
      "aria-hidden": t.label ? void 0 : "true"
    }, [
      g(V, { name: t.name }, null, 8, ["name"])
    ], 10, Mo));
  }
}), qe = (d, t) => {
  const l = d.__vccOpts || d;
  for (const [e, r] of t)
    l[e] = r;
  return l;
}, Ao = {}, Co = { class: "at-kbd" };
function So(d, t) {
  return a(), s("kbd", Co, [
    L(d.$slots, "default")
  ]);
}
const vt = /* @__PURE__ */ qe(Ao, [["render", So]]), Vo = {
  key: 0,
  class: "at-input-wrap"
}, zo = ["type", "placeholder", "disabled", "aria-invalid"], To = ["type", "placeholder", "disabled", "aria-invalid"], it = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "AtInput",
  props: /* @__PURE__ */ K({
    type: { default: "text" },
    placeholder: {},
    icon: {},
    kbd: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    size: { default: "md" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d, { expose: t }) {
    const l = G(d, "modelValue"), e = d, r = I();
    return t({ focus: () => {
      var c;
      return (c = r.value) == null ? void 0 : c.focus();
    }, el: r }), (c, m) => c.icon || c.kbd ? (a(), s("div", Vo, [
      c.icon ? (a(), O(V, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : f("", !0),
      W(u("input", ve(c.$attrs, {
        ref_key: "el",
        ref: r,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => l.value = p),
        class: "at-input",
        style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, zo), [
        [nt, l.value]
      ]),
      c.kbd ? (a(), O(vt, { key: 1 }, {
        default: U(() => [
          _(v(c.kbd), 1)
        ]),
        _: 1
      })) : f("", !0)
    ])) : W((a(), s("input", ve({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: r,
      "onUpdate:modelValue": m[1] || (m[1] = (p) => l.value = p),
      class: "at-input",
      style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, To)), [
      [nt, l.value]
    ]);
  }
}), Lo = { class: "at-login__panel" }, Do = {
  key: 0,
  class: "at-login__brand"
}, Bo = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, Eo = ["aria-labelledby"], Uo = { class: "at-login__head" }, Po = ["id"], Fo = {
  key: 0,
  class: "at-login__desc"
}, Io = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, Oo = /* @__PURE__ */ u("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ u("span", null, "ou")
], -1), No = {
  key: 1,
  class: "at-login__foot"
}, xo = /* @__PURE__ */ P({
  __name: "AtLogin",
  props: /* @__PURE__ */ K({
    brand: {},
    mark: {},
    title: { default: "Connexion" },
    description: {},
    error: {},
    loading: { type: [Boolean, String], default: !1 },
    passkey: { type: Boolean },
    rememberable: { type: Boolean },
    usernameLabel: { default: "Identifiant" },
    passwordLabel: { default: "Mot de passe" },
    submitLabel: { default: "Se connecter" },
    passkeyLabel: { default: "Se connecter avec une passkey" },
    rememberLabel: { default: "Rester connecté" },
    as: { default: "main" }
  }, {
    username: { default: "" },
    usernameModifiers: {},
    password: { default: "" },
    passwordModifiers: {},
    remember: { type: Boolean, default: !1 },
    rememberModifiers: {}
  }),
  emits: /* @__PURE__ */ K(["submit", "passkey"], ["update:username", "update:password", "update:remember"]),
  setup(d, { expose: t, emit: l }) {
    const e = G(d, "username"), r = G(d, "password"), c = G(d, "remember"), m = d, p = l, w = Nt("login"), M = S(() => m.loading !== !1), C = S(() => {
      var A;
      return (m.mark ?? ((A = m.brand) == null ? void 0 : A.trim().charAt(0)) ?? "").toUpperCase();
    }), z = I(), q = I();
    function R() {
      var A, b;
      if (!M.value) {
        if (!e.value.trim()) return (A = z.value) == null ? void 0 : A.focus();
        if (!r.value) return (b = q.value) == null ? void 0 : b.focus();
        p("submit", { username: e.value.trim(), password: r.value, remember: c.value });
      }
    }
    return t({
      focusUsername: () => {
        var A;
        return (A = z.value) == null ? void 0 : A.focus();
      },
      focusPassword: () => {
        var A;
        return (A = q.value) == null ? void 0 : A.focus();
      }
    }), (A, b) => (a(), O(Lt(A.as), { class: "at-login" }, {
      default: U(() => [
        u("div", Lo, [
          A.brand || A.$slots.brand ? (a(), s("div", Do, [
            L(A.$slots, "brand", {}, () => [
              u("span", Bo, v(C.value), 1),
              _(v(A.brand), 1)
            ])
          ])) : f("", !0),
          u("section", {
            class: "at-login__card",
            "aria-labelledby": E(w)
          }, [
            u("header", Uo, [
              u("h1", {
                id: E(w),
                class: "at-login__title"
              }, v(A.title), 9, Po),
              A.description ? (a(), s("p", Fo, v(A.description), 1)) : f("", !0)
            ]),
            A.error ? (a(), s("p", Io, v(A.error), 1)) : f("", !0),
            L(A.$slots, "default", {}, () => [
              u("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: re(R, ["prevent"])
              }, [
                g(rt, { label: A.usernameLabel }, {
                  default: U(($) => [
                    g(it, {
                      id: $.id,
                      ref_key: "usernameInput",
                      ref: z,
                      modelValue: e.value,
                      "onUpdate:modelValue": b[0] || (b[0] = (D) => e.value = D),
                      name: "username",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: "false",
                      disabled: M.value,
                      invalid: !!A.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(rt, { label: A.passwordLabel }, {
                  default: U(($) => [
                    g(it, {
                      id: $.id,
                      ref_key: "passwordInput",
                      ref: q,
                      modelValue: r.value,
                      "onUpdate:modelValue": b[1] || (b[1] = (D) => r.value = D),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: M.value,
                      invalid: !!A.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                A.rememberable ? (a(), O(Ut, {
                  key: 0,
                  modelValue: c.value,
                  "onUpdate:modelValue": b[2] || (b[2] = ($) => c.value = $),
                  label: A.rememberLabel,
                  disabled: M.value
                }, null, 8, ["modelValue", "label", "disabled"])) : f("", !0),
                g(x, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "at-login__submit",
                  loading: A.loading === !0 || A.loading === "password",
                  disabled: M.value
                }, {
                  default: U(() => [
                    _(v(A.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 32),
              A.passkey ? (a(), s(y, { key: 0 }, [
                Oo,
                g(x, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: A.loading === "passkey",
                  disabled: M.value,
                  onClick: b[3] || (b[3] = ($) => p("passkey"))
                }, {
                  default: U(() => [
                    _(v(A.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : f("", !0)
            ])
          ], 8, Eo),
          A.$slots.footer ? (a(), s("footer", No, [
            L(A.$slots, "footer")
          ])) : f("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), qo = ["role", "aria-checked", "disabled"], Ho = {
  key: 2,
  class: "at-menu-meta"
}, jo = /* @__PURE__ */ P({
  __name: "AtMenuItem",
  props: {
    icon: {},
    label: {},
    kbd: {},
    meta: {},
    danger: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(d) {
    return (t, l) => (a(), s("button", {
      type: "button",
      class: F(["at-menu-item", t.danger && "at-menu-item--danger"]),
      role: t.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": t.checked !== void 0 ? t.checked : void 0,
      disabled: t.disabled,
      onClick: l[0] || (l[0] = (e) => t.$emit("select", e))
    }, [
      t.icon ? (a(), O(V, {
        key: 0,
        name: t.icon
      }, null, 8, ["name"])) : f("", !0),
      L(t.$slots, "default", {}, () => [
        _(v(t.label), 1)
      ]),
      t.kbd ? (a(), O(vt, { key: 1 }, {
        default: U(() => [
          _(v(t.kbd), 1)
        ]),
        _: 1
      })) : t.meta ? (a(), s("span", Ho, v(t.meta), 1)) : t.checked ? (a(), O(V, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : f("", !0)
    ], 10, qo));
  }
}), Ro = {}, Wo = { class: "at-menu-label" };
function Ko(d, t) {
  return a(), s("div", Wo, [
    L(d.$slots, "default")
  ]);
}
const Go = /* @__PURE__ */ qe(Ro, [["render", Ko]]), Jo = {}, Yo = {
  class: "at-menu-sep",
  role: "separator"
};
function Xo(d, t) {
  return a(), s("div", Yo);
}
const Zo = /* @__PURE__ */ qe(Jo, [["render", Xo]]), Qo = {
  key: 0,
  class: "at-modal-wrap"
}, er = ["aria-label"], tr = { class: "at-modal__head" }, ar = { style: { flex: "1", "min-width": "0" } }, sr = { class: "at-modal__title" }, nr = {
  key: 0,
  class: "at-modal__desc"
}, lr = { class: "at-modal__body" }, or = {
  key: 0,
  class: "at-modal__foot"
}, rr = /* @__PURE__ */ P({
  __name: "AtModal",
  props: /* @__PURE__ */ K({
    title: {},
    description: {},
    size: { default: "md" },
    dismissible: { type: Boolean, default: !0 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(d) {
    const t = G(d, "open"), l = I();
    let e = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (t.value = !1);
    }
    return pe(t, (c) => {
      var m;
      c ? (e = document.activeElement, document.addEventListener("keydown", r), Te(() => {
        var p;
        return (p = l.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = e == null ? void 0 : e.focus) == null || m.call(e));
    }, { immediate: !0 }), ut(() => document.removeEventListener("keydown", r)), (c, m) => (a(), O(dt, { to: "body" }, [
      g(Dt, { name: "at-modal" }, {
        default: U(() => [
          t.value ? (a(), s("div", Qo, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: m[0] || (m[0] = (p) => c.dismissible && (t.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: l,
              class: F(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", tr, [
                u("div", ar, [
                  u("h2", sr, v(c.title), 1),
                  c.description ? (a(), s("p", nr, v(c.description), 1)) : f("", !0)
                ]),
                c.dismissible ? (a(), O(x, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => t.value = !1)
                })) : f("", !0)
              ]),
              u("div", lr, [
                L(c.$slots, "default")
              ]),
              c.$slots.footer ? (a(), s("footer", or, [
                L(c.$slots, "footer", {
                  close: () => t.value = !1
                })
              ])) : f("", !0)
            ], 10, er)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ir = ["aria-label"], ur = {
  key: 0,
  class: "at-nav-label"
}, dr = /* @__PURE__ */ P({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (t, l) => (a(), s("nav", {
      class: "at-nav",
      "aria-label": t.label
    }, [
      t.label ? (a(), s("div", ur, v(t.label), 1)) : f("", !0),
      L(t.$slots, "default")
    ], 8, ir));
  }
}), cr = ["href", "aria-current"], pr = { class: "at-ellipsis" }, vr = {
  key: 3,
  class: "at-nav-count"
}, mr = /* @__PURE__ */ P({
  __name: "AtNavItem",
  props: {
    icon: {},
    mark: {},
    tile: {},
    label: {},
    href: {},
    active: { type: Boolean },
    count: {}
  },
  emits: ["click"],
  setup(d) {
    return (t, l) => (a(), s("a", {
      class: "at-nav-item",
      href: t.href ?? "#",
      "aria-current": t.active ? "page" : void 0,
      onClick: l[0] || (l[0] = (e) => {
        !t.href && e.preventDefault(), t.$emit("click", e);
      })
    }, [
      t.mark ? (a(), s("span", {
        key: 0,
        class: "at-nav-mark",
        style: ee({ background: t.mark })
      }, null, 4)) : t.icon && t.tile ? (a(), O(xt, {
        key: 1,
        name: t.icon,
        color: t.tile
      }, null, 8, ["name", "color"])) : t.icon ? (a(), O(V, {
        key: 2,
        name: t.icon
      }, null, 8, ["name"])) : f("", !0),
      u("span", pr, [
        L(t.$slots, "default", {}, () => [
          _(v(t.label), 1)
        ])
      ]),
      t.count != null && t.count !== "" ? (a(), s("span", vr, v(t.count), 1)) : f("", !0)
    ], 8, cr));
  }
}), hr = {
  key: 0,
  class: "at-page__head"
}, gr = { class: "t-heading-1" }, fr = { key: 0 }, br = /* @__PURE__ */ P({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (t, l) => (a(), s("div", {
      class: F(["at-page", t.wide && "at-page--wide"])
    }, [
      t.title || t.$slots.head ? (a(), s("div", hr, [
        L(t.$slots, "head", {}, () => [
          u("h1", gr, v(t.title), 1),
          t.description ? (a(), s("p", fr, v(t.description), 1)) : f("", !0)
        ])
      ])) : f("", !0),
      L(t.$slots, "default")
    ], 2));
  }
}), yr = { class: "at-proplist" }, kr = ["disabled", "onClick"], _r = /* @__PURE__ */ P({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: t }) {
    const l = d, e = t, r = S(() => l.schema.filter((M) => {
      var C;
      return M.type !== "title" && !((C = l.exclude) != null && C.includes(M.key));
    })), c = I(null), m = I(null), p = I(!1);
    function w(M, C) {
      if (Ve(C)) {
        if (C.type === "checkbox") {
          e("update", C.key, !l.row[C.key]);
          return;
        }
        m.value = M.currentTarget, c.value = C, p.value = !0;
      }
    }
    return (M, C) => (a(), s(y, null, [
      u("dl", yr, [
        (a(!0), s(y, null, T(r.value, (z) => (a(), s(y, {
          key: z.key
        }, [
          u("dt", null, [
            g(V, {
              name: E(Ie)(z)
            }, null, 8, ["name"]),
            _(v(z.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !E(Ve)(z),
              onClick: (q) => w(q, z)
            }, [
              g(de, {
                prop: z,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, kr)
          ])
        ], 64))), 128))
      ]),
      g(pt, {
        open: p.value,
        "onUpdate:open": C[0] || (C[0] = (z) => p.value = z),
        prop: c.value,
        row: M.row,
        anchor: m.value,
        onUpdate: C[1] || (C[1] = (z) => c.value && e("update", c.value.key, z))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), wr = ["aria-label"], $r = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Mr = /* @__PURE__ */ P({
  __name: "AtSegment",
  props: /* @__PURE__ */ K({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const t = G(d, "modelValue");
    return (l, e) => (a(), s("div", {
      class: "at-segment",
      role: "group",
      "aria-label": l.label
    }, [
      (a(!0), s(y, null, T(l.items, (r) => (a(), s("button", {
        key: String(r.value),
        type: "button",
        "aria-pressed": t.value === r.value,
        "aria-label": r.iconOnly ? r.label : void 0,
        title: r.iconOnly ? r.label : void 0,
        disabled: r.disabled,
        onClick: (c) => t.value = r.value
      }, [
        r.icon ? (a(), O(V, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : f("", !0),
        r.iconOnly ? f("", !0) : (a(), s(y, { key: 1 }, [
          _(v(r.label), 1)
        ], 64))
      ], 8, $r))), 128))
    ], 8, wr));
  }
}), Ar = { class: "at-select" }, Cr = ["disabled", "aria-invalid"], Sr = {
  key: 0,
  value: null,
  disabled: ""
}, Vr = ["value", "disabled"], zr = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "AtSelect",
  props: /* @__PURE__ */ K({
    options: {},
    placeholder: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const t = G(d, "modelValue");
    return (l, e) => (a(), s("div", Ar, [
      W(u("select", ve(l.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (r) => t.value = r),
        disabled: l.disabled,
        "aria-invalid": l.invalid || void 0,
        style: l.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        l.placeholder ? (a(), s("option", Sr, v(l.placeholder), 1)) : f("", !0),
        (a(!0), s(y, null, T(l.options, (r) => (a(), s("option", {
          key: String(r.value),
          value: r.value,
          disabled: r.disabled
        }, v(r.label), 9, Vr))), 128))
      ], 16, Cr), [
        [_e, t.value]
      ]),
      g(V, { name: "chevron-down" })
    ]));
  }
}), Tr = {}, Lr = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Dr = {
  key: 0,
  class: "at-sidebar__foot"
};
function Br(d, t) {
  return a(), s("aside", Lr, [
    L(d.$slots, "header"),
    L(d.$slots, "default"),
    d.$slots.footer ? (a(), s("div", Dr, [
      L(d.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const Er = /* @__PURE__ */ qe(Tr, [["render", Br]]), Ur = { class: "at-stat__label" }, Pr = { class: "at-stat__row" }, Fr = { class: "at-stat__value" }, Ir = ["viewBox"], Or = ["d"], Nr = ["d"], xr = ["cx", "cy"], qr = {
  key: 1,
  class: "at-stat__foot"
}, St = 220, Ae = 32, Hr = /* @__PURE__ */ P({
  __name: "AtStat",
  props: {
    label: {},
    value: {},
    delta: {},
    trend: {},
    spark: {},
    foot: {},
    color: {}
  },
  setup(d) {
    const t = d, l = S(() => {
      const e = t.spark;
      if (!e || e.length < 2) return null;
      const r = Math.min(...e), c = Math.max(...e), m = c - r || 1, p = e.map((C, z) => [2 + z * (St - 4) / (e.length - 1), Ae - 3 - (C - r) / m * (Ae - 8)]), w = "M" + p.map((C) => C.map((z) => z.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: w, area: `${w} L${M[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: M };
    });
    return (e, r) => (a(), s("div", {
      class: F(["at-stat", e.color && ["at-stat--striped", `at-tone-${e.color}`]])
    }, [
      u("span", Ur, v(e.label), 1),
      u("div", Pr, [
        u("span", Fr, [
          L(e.$slots, "value", {}, () => [
            _(v(e.value), 1)
          ])
        ]),
        e.delta ? (a(), s("span", {
          key: 0,
          class: F(["at-stat__delta", e.trend && `at-stat__delta--${e.trend}`])
        }, v(e.delta), 3)) : f("", !0)
      ]),
      l.value ? (a(), s("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${St} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: l.value.area
        }, null, 8, Or),
        u("path", {
          class: "line",
          d: l.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Nr),
        u("circle", {
          class: "end",
          cx: l.value.end[0],
          cy: l.value.end[1],
          r: "2.5"
        }, null, 8, xr)
      ], 8, Ir)) : f("", !0),
      e.foot || e.$slots.foot ? (a(), s("span", qr, [
        L(e.$slots, "foot", {}, () => [
          _(v(e.foot), 1)
        ])
      ])) : f("", !0)
    ], 2));
  }
}), jr = {
  key: 0,
  class: "at-toggle"
}, Rr = ["disabled"], Wr = ["disabled"], Kr = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "AtSwitch",
  props: /* @__PURE__ */ K({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const t = G(d, "modelValue");
    return (l, e) => l.label || l.$slots.default ? (a(), s("label", jr, [
      W(u("input", ve(l.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (r) => t.value = r),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: l.disabled
      }), null, 16, Rr), [
        [Oe, t.value]
      ]),
      L(l.$slots, "default", {}, () => [
        _(v(l.label), 1)
      ])
    ])) : W((a(), s("input", ve({ key: 1 }, l.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (r) => t.value = r),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: l.disabled
    }), null, 16, Wr)), [
      [Oe, t.value]
    ]);
  }
}), Gr = { class: "at-table-wrap" }, Jr = { class: "at-table" }, Yr = ["onClick"], Xr = { key: 0 }, Zr = ["colspan"], Qr = /* @__PURE__ */ P({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (t, l) => (a(), s("div", Gr, [
      u("table", Jr, [
        u("thead", null, [
          u("tr", null, [
            (a(!0), s(y, null, T(t.columns, (e) => (a(), s("th", {
              key: e.key,
              class: F({ "at-num": e.align === "right" }),
              style: ee(e.width ? { width: e.width } : void 0)
            }, v(e.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (a(!0), s(y, null, T(t.rows, (e, r) => (a(), s("tr", {
            key: t.rowKey ? e[t.rowKey] : r,
            style: ee(t.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => t.$emit("rowClick", e)
          }, [
            (a(!0), s(y, null, T(t.columns, (c) => (a(), s("td", {
              key: c.key,
              class: F({ "at-num": c.align === "right" })
            }, [
              L(t.$slots, `cell-${c.key}`, {
                row: e,
                value: e[c.key]
              }, () => [
                _(v(c.format ? c.format(e[c.key], e) : e[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Yr))), 128)),
          t.rows.length ? f("", !0) : (a(), s("tr", Xr, [
            u("td", {
              colspan: t.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(t.empty ?? "Aucune donnée"), 9, Zr)
          ]))
        ])
      ])
    ]));
  }
}), ei = ["aria-label"], ti = ["aria-selected", "disabled", "onClick"], ai = {
  key: 1,
  class: "at-count"
}, si = /* @__PURE__ */ P({
  __name: "AtTabs",
  props: /* @__PURE__ */ K({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const t = G(d, "modelValue");
    return (l, e) => (a(), s("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": l.label
    }, [
      (a(!0), s(y, null, T(l.items, (r) => (a(), s("button", {
        key: String(r.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": t.value === r.value,
        disabled: r.disabled,
        onClick: (c) => t.value = r.value
      }, [
        r.icon ? (a(), O(V, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : f("", !0),
        _(v(r.label) + " ", 1),
        r.count != null ? (a(), s("span", ai, v(r.count), 1)) : f("", !0)
      ], 8, ti))), 128))
    ], 8, ei));
  }
}), ni = /* @__PURE__ */ P({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (t, l) => (a(), s("span", {
      class: F(["at-tag", t.color !== "gray" && `at-tag--${t.color}`])
    }, [
      L(t.$slots, "default", {}, () => [
        _(v(t.label), 1)
      ])
    ], 2));
  }
}), li = ["rows", "placeholder", "disabled", "aria-invalid"], oi = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "AtTextarea",
  props: /* @__PURE__ */ K({
    placeholder: {},
    rows: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const t = G(d, "modelValue");
    return (l, e) => W((a(), s("textarea", ve(l.$attrs, {
      "onUpdate:modelValue": e[0] || (e[0] = (r) => t.value = r),
      class: "at-input",
      rows: l.rows ?? 3,
      placeholder: l.placeholder,
      disabled: l.disabled,
      "aria-invalid": l.invalid || void 0
    }), null, 16, li)), [
      [ke, t.value]
    ]);
  }
}), qt = "atelier:theme", Ht = "atelier:density", jt = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, Vt = (d, t) => {
  try {
    localStorage.setItem(d, t);
  } catch {
  }
}, zt = () => typeof document < "u" ? document.documentElement : null, Ce = I(jt(qt) || "system"), Rt = I(jt(Ht) || "comfortable"), Wt = I(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Tt = !1;
function Kt() {
  if (Tt || typeof window > "u") return;
  Tt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (t) => {
    Wt.value = t.matches;
  }), pe(Ce, (t) => {
    const l = zt();
    l && (t === "system" ? l.removeAttribute("data-theme") : l.dataset.theme = t, Vt(qt, t));
  }, { immediate: !0 }), pe(Rt, (t) => {
    const l = zt();
    l && (l.dataset.density = t, Vt(Ht, t));
  }, { immediate: !0 });
}
function vi() {
  Kt();
  const d = S(() => Ce.value === "system" ? Wt.value ? "dark" : "light" : Ce.value), t = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return Ma() && Aa(() => {
  }), { mode: Ce, resolved: d, toggle: t };
}
function mi() {
  return Kt(), { density: Rt };
}
const hi = {
  name: "Atelier",
  version: 1,
  color: {
    themes: [
      {
        id: "light",
        name: "Clair"
      },
      {
        id: "dark",
        name: "Sombre"
      }
    ],
    tokens: [
      {
        name: "bg",
        value: {
          light: "#fbfaf8",
          dark: "#191817"
        },
        usage: "Fond de page (sites et apps). Sol par défaut sous tout le reste."
      },
      {
        name: "surface",
        value: {
          light: "#ffffff",
          dark: "#211f1d"
        },
        usage: "Cartes, tableaux, champs, zone de contenu d'un dashboard."
      },
      {
        name: "surface-sunken",
        value: {
          light: "#f5f4f1",
          dark: "#1d1c1a"
        },
        usage: "Sidebar, barres d'outils, en-têtes de tableau, fond des contrôles segmentés."
      },
      {
        name: "surface-raised",
        value: {
          light: "#ffffff",
          dark: "#2a2826"
        },
        usage: "Menus, popovers, modales, toasts (toujours avec shadow-md ou shadow-lg)."
      },
      {
        name: "surface-hover",
        value: {
          light: "#efeeea",
          dark: "#2e2c29"
        },
        usage: "Survol des éléments neutres : items de menu, lignes de tableau, boutons ghost, items de nav."
      },
      {
        name: "surface-active",
        value: {
          light: "#e8e6e1",
          dark: "#36332f"
        },
        usage: "Élément pressé ou item de nav sélectionné."
      },
      {
        name: "border",
        value: {
          light: "#ebe9e4",
          dark: "#302e2b"
        },
        usage: "Séparateurs, contours de carte, grilles de tableau. Décoratif : ne porte jamais seul une information."
      },
      {
        name: "border-strong",
        value: {
          light: "#dcd9d2",
          dark: "#3f3c38"
        },
        usage: "Contour de carte au survol, séparateurs plus marqués, bouton secondary."
      },
      {
        name: "border-control",
        value: {
          light: "#8e8980",
          dark: "#7a756d"
        },
        usage: "Contour des champs, cases à cocher, switch éteint. ≥3:1 sur surface, bg et surface-sunken."
      },
      {
        name: "ink",
        value: {
          light: "#2f2c28",
          dark: "#ecebe7"
        },
        usage: "Texte principal et titres, sur bg, surface, surface-sunken, surface-raised et surface-hover."
      },
      {
        name: "ink-muted",
        value: {
          light: "#67635c",
          dark: "#aaa59d"
        },
        usage: "Texte secondaire : descriptions, en-têtes de colonne, labels de stat, icônes. Mêmes sols que ink."
      },
      {
        name: "ink-subtle",
        value: {
          light: "#767168",
          dark: "#959087"
        },
        usage: "Placeholders, métadonnées tertiaires, raccourcis clavier. Sur bg, surface et surface-raised uniquement."
      },
      {
        name: "ink-disabled",
        value: {
          light: "#b5b0a7",
          dark: "#5a5650"
        },
        usage: "Texte et icônes désactivés (exemptés de contraste)."
      },
      {
        name: "accent",
        value: {
          light: "#4f46e5",
          dark: "#8b8cf6"
        },
        usage: "Action principale (bouton primary), lien, case cochée, switch actif, indicateur de sélection."
      },
      {
        name: "accent-hover",
        value: {
          light: "#4338ca",
          dark: "#a3a4f8"
        },
        usage: "Survol de tout ce qui est en accent."
      },
      {
        name: "accent-soft",
        value: {
          light: "#eef0fd",
          dark: "#2a2950"
        },
        usage: "Fond de sélection : ligne de tableau sélectionnée, item de menu actif, surlignage."
      },
      {
        name: "accent-ink",
        value: {
          light: "#3f37c9",
          dark: "#b8b9fb"
        },
        usage: "Texte et liens sur accent-soft, liens dans du texte courant sur bg/surface."
      },
      {
        name: "on-accent",
        value: {
          light: "#ffffff",
          dark: "#15143a"
        },
        usage: "Texte et icônes posés sur accent ou accent-hover."
      },
      {
        name: "focus",
        value: {
          light: "#4f46e5",
          dark: "#a3a4f8"
        },
        usage: "Anneau de focus : outline 2px plein, offset 2px. ≥3:1 sur tous les sols."
      },
      {
        name: "overlay",
        value: {
          light: "rgba(25, 23, 20, 0.40)",
          dark: "rgba(0, 0, 0, 0.60)"
        },
        usage: "Voile derrière une modale ou un drawer."
      },
      {
        name: "success",
        value: {
          light: "#1f7a4d",
          dark: "#62c891"
        },
        usage: "Succès, en ligne, terminé, variation positive. Texte sur success-soft, surface et bg."
      },
      {
        name: "success-soft",
        value: {
          light: "#e7f3eb",
          dark: "#1e3328"
        },
        usage: "Fond des badges, callouts et bandeaux « success »."
      },
      {
        name: "warning",
        value: {
          light: "#94570a",
          dark: "#e6ab52"
        },
        usage: "Attention, en attente, quota proche. Texte sur warning-soft, surface et bg."
      },
      {
        name: "warning-soft",
        value: {
          light: "#fbf0dc",
          dark: "#3a2d18"
        },
        usage: "Fond des badges, callouts et bandeaux « warning »."
      },
      {
        name: "danger",
        value: {
          light: "#c0352b",
          dark: "#f17f73"
        },
        usage: "Erreur, suppression, variation négative. Texte sur danger-soft, surface et bg."
      },
      {
        name: "danger-soft",
        value: {
          light: "#fbe9e7",
          dark: "#3d2220"
        },
        usage: "Fond des badges, callouts et bandeaux « danger »."
      },
      {
        name: "info",
        value: {
          light: "#1f6aa8",
          dark: "#74b2e8"
        },
        usage: "Information neutre, en cours, brouillon. Texte sur info-soft, surface et bg."
      },
      {
        name: "info-soft",
        value: {
          light: "#e6eff8",
          dark: "#1c2c3b"
        },
        usage: "Fond des badges, callouts et bandeaux « info »."
      },
      {
        name: "on-danger",
        value: {
          light: "#ffffff",
          dark: "#2a0e0b"
        },
        usage: "Texte sur un bouton danger plein."
      },
      {
        name: "tag-gray-bg",
        value: {
          light: "#efeeeb",
          dark: "#34322f"
        },
        usage: "Fond d'un tag « gray » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-gray-fg",
        value: {
          light: "#5a5650",
          dark: "#cdc9c2"
        },
        usage: "Texte d'un tag « gray », sur tag-gray-bg."
      },
      {
        name: "tag-brown-bg",
        value: {
          light: "#f3ebe4",
          dark: "#3b2e25"
        },
        usage: "Fond d'un tag « brown » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-brown-fg",
        value: {
          light: "#7a5233",
          dark: "#d9b99e"
        },
        usage: "Texte d'un tag « brown », sur tag-brown-bg."
      },
      {
        name: "tag-orange-bg",
        value: {
          light: "#fbebdc",
          dark: "#43301f"
        },
        usage: "Fond d'un tag « orange » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-orange-fg",
        value: {
          light: "#9e470e",
          dark: "#f0b07a"
        },
        usage: "Texte d'un tag « orange », sur tag-orange-bg."
      },
      {
        name: "tag-yellow-bg",
        value: {
          light: "#faf2d4",
          dark: "#3d351c"
        },
        usage: "Fond d'un tag « yellow » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-yellow-fg",
        value: {
          light: "#7a5900",
          dark: "#e8cc72"
        },
        usage: "Texte d'un tag « yellow », sur tag-yellow-bg."
      },
      {
        name: "tag-green-bg",
        value: {
          light: "#e6f2ea",
          dark: "#233428"
        },
        usage: "Fond d'un tag « green » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-green-fg",
        value: {
          light: "#2a6b43",
          dark: "#8fd1a8"
        },
        usage: "Texte d'un tag « green », sur tag-green-bg."
      },
      {
        name: "tag-blue-bg",
        value: {
          light: "#e5eefa",
          dark: "#1f2f42"
        },
        usage: "Fond d'un tag « blue » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-blue-fg",
        value: {
          light: "#1f5f99",
          dark: "#8fc0f0"
        },
        usage: "Texte d'un tag « blue », sur tag-blue-bg."
      },
      {
        name: "tag-purple-bg",
        value: {
          light: "#efeafb",
          dark: "#31284a"
        },
        usage: "Fond d'un tag « purple » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-purple-fg",
        value: {
          light: "#6340b0",
          dark: "#c3aef5"
        },
        usage: "Texte d'un tag « purple », sur tag-purple-bg."
      },
      {
        name: "tag-pink-bg",
        value: {
          light: "#fbe8f1",
          dark: "#40253a"
        },
        usage: "Fond d'un tag « pink » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-pink-fg",
        value: {
          light: "#a3326c",
          dark: "#f0a3c8"
        },
        usage: "Texte d'un tag « pink », sur tag-pink-bg."
      },
      {
        name: "tag-red-bg",
        value: {
          light: "#fce9e7",
          dark: "#432624"
        },
        usage: "Fond d'un tag « red » (options de select, catégories, propriétés de base de données)."
      },
      {
        name: "tag-red-fg",
        value: {
          light: "#b3352a",
          dark: "#f3a199"
        },
        usage: "Texte d'un tag « red », sur tag-red-bg."
      },
      {
        name: "chart-1",
        value: {
          light: "#4f46e5",
          dark: "#8b8cf6"
        },
        usage: "Série 1 des graphiques (indigo). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        name: "chart-2",
        value: {
          light: "#0f8a8c",
          dark: "#4fc3c5"
        },
        usage: "Série 2 des graphiques (sarcelle). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        name: "chart-3",
        value: {
          light: "#d1690a",
          dark: "#f0a35a"
        },
        usage: "Série 3 des graphiques (orange). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        name: "chart-4",
        value: {
          light: "#c2417f",
          dark: "#ef8fbd"
        },
        usage: "Série 4 des graphiques (rose). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        name: "chart-5",
        value: {
          light: "#8a7208",
          dark: "#d9b73f"
        },
        usage: "Série 5 des graphiques (or). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        name: "chart-1-soft",
        value: {
          light: "#dee3ff",
          dark: "#323359"
        },
        usage: "Fond pâle d'une tuile d'icône chart-1. Jamais pour une série de graphique."
      },
      {
        name: "chart-1-ink",
        value: {
          light: "#4c4fbe",
          dark: "#b6bafe"
        },
        usage: "Icône ou texte sur chart-1-soft (≥ 4,5:1)."
      },
      {
        name: "chart-2-soft",
        value: {
          light: "#bff0f0",
          dark: "#024142"
        },
        usage: "Fond pâle d'une tuile d'icône chart-2. Jamais pour une série de graphique."
      },
      {
        name: "chart-2-ink",
        value: {
          light: "#066e70",
          dark: "#14dbdf"
        },
        usage: "Icône ou texte sur chart-2-soft (≥ 4,5:1)."
      },
      {
        name: "chart-3-soft",
        value: {
          light: "#feddc9",
          dark: "#4f2f0f"
        },
        usage: "Fond pâle d'une tuile d'icône chart-3. Jamais pour une série de graphique."
      },
      {
        name: "chart-3-ink",
        value: {
          light: "#954801",
          dark: "#ffac5d"
        },
        usage: "Icône ou texte sur chart-3-soft (≥ 4,5:1)."
      },
      {
        name: "chart-4-soft",
        value: {
          light: "#ffd9e6",
          dark: "#51293c"
        },
        usage: "Fond pâle d'une tuile d'icône chart-4. Jamais pour une série de graphique."
      },
      {
        name: "chart-4-ink",
        value: {
          light: "#a42666",
          dark: "#fe9ecc"
        },
        usage: "Icône ou texte sur chart-4-soft (≥ 4,5:1)."
      },
      {
        name: "chart-5-soft",
        value: {
          light: "#efe5c0",
          dark: "#443706"
        },
        usage: "Fond pâle d'une tuile d'icône chart-5. Jamais pour une série de graphique."
      },
      {
        name: "chart-5-ink",
        value: {
          light: "#735f01",
          dark: "#e0be46"
        },
        usage: "Icône ou texte sur chart-5-soft (≥ 4,5:1)."
      }
    ]
  },
  type: {
    fonts: [
      {
        family: "Inter",
        file: "fonts/Inter-Variable.woff2",
        weight: "100 900",
        style: "normal"
      },
      {
        family: "JetBrains Mono",
        file: "fonts/JetBrainsMono-Variable.woff2",
        weight: "100 800",
        style: "normal"
      }
    ],
    families: {
      sans: '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      mono: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    },
    groups: [
      {
        name: "Titres",
        family: "sans",
        styles: [
          {
            name: "t-display",
            fontSize: "40px",
            lineHeight: "48px",
            fontWeight: 650,
            usage: "Titre de hero ou de page de site. Un seul par page.",
            letterSpacing: "-0.022em",
            sample: "Des outils clairs pour le quotidien"
          },
          {
            name: "t-heading-1",
            fontSize: "30px",
            lineHeight: "38px",
            fontWeight: 650,
            usage: "Titre de page (doc, dashboard).",
            letterSpacing: "-0.018em",
            sample: "Tableau de bord"
          },
          {
            name: "t-heading-2",
            fontSize: "22px",
            lineHeight: "30px",
            fontWeight: 600,
            usage: "Titre de section.",
            letterSpacing: "-0.012em",
            sample: "Activité récente"
          },
          {
            name: "t-heading-3",
            fontSize: "17px",
            lineHeight: "24px",
            fontWeight: 600,
            usage: "Titre de carte, de modale, de groupe.",
            letterSpacing: "-0.006em",
            sample: "Revenus du mois"
          }
        ]
      },
      {
        name: "Texte",
        family: "sans",
        styles: [
          {
            name: "t-prose",
            fontSize: "16px",
            lineHeight: "27px",
            fontWeight: 400,
            usage: "Texte long : articles, documentation, pages de site.",
            sample: "Un texte qui respire, posé sur une colonne de 720 px au plus."
          },
          {
            name: "t-body",
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: 400,
            usage: "Texte d'interface par défaut : contrôles, cellules, paragraphes d'app.",
            sample: "Modifié il y a 3 minutes par Alice"
          },
          {
            name: "t-body-strong",
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: 550,
            usage: "Libellés de bouton, noms de ligne, emphase dans l'interface.",
            sample: "Nouvelle page"
          },
          {
            name: "t-small",
            fontSize: "13px",
            lineHeight: "20px",
            fontWeight: 400,
            usage: "Labels de champ, descriptions secondaires, menus.",
            sample: "Visible uniquement par toi"
          },
          {
            name: "t-caption",
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: 500,
            usage: "En-têtes de colonne, tags, métadonnées, légendes de graphique.",
            sample: "Dernière modification"
          }
        ]
      },
      {
        name: "Utilitaires",
        family: "sans",
        styles: [
          {
            name: "t-overline",
            fontSize: "11px",
            lineHeight: "16px",
            fontWeight: 600,
            usage: "Labels de section de sidebar et de menu, en MAJUSCULES.",
            letterSpacing: "0.06em",
            sample: "ESPACES"
          },
          {
            name: "t-stat",
            fontSize: "28px",
            lineHeight: "34px",
            fontWeight: 600,
            usage: "Valeur d'une stat de dashboard. Toujours en chiffres tabulaires.",
            letterSpacing: "-0.02em",
            sample: "12 480 €"
          },
          {
            name: "t-code",
            fontSize: "13px",
            lineHeight: "20px",
            fontWeight: 450,
            usage: "Code, identifiants, raccourcis, valeurs techniques.",
            family: "mono",
            sample: "npm run dev --port 5173"
          }
        ]
      }
    ]
  },
  spacing: {
    tokens: [
      {
        name: "space-1",
        value: "4px",
        usage: "Gap icône/texte serré, padding de tag."
      },
      {
        name: "space-2",
        value: "8px",
        usage: "Gap dans un groupe de contrôles, padding horizontal d'item de menu."
      },
      {
        name: "space-3",
        value: "12px",
        usage: "Padding horizontal des boutons et champs, cellules de tableau."
      },
      {
        name: "space-4",
        value: "16px",
        usage: "Gap entre cartes de dashboard, padding de carte compacte."
      },
      {
        name: "space-5",
        value: "20px",
        usage: "Padding de carte."
      },
      {
        name: "space-6",
        value: "24px",
        usage: "Écart entre groupes d'une section, gouttière de page mobile."
      },
      {
        name: "space-8",
        value: "32px",
        usage: "Padding de modale, gouttière de page desktop."
      },
      {
        name: "space-10",
        value: "40px",
        usage: "Écart entre blocs d'une page."
      },
      {
        name: "space-12",
        value: "48px",
        usage: "Écart entre sections d'un site."
      },
      {
        name: "space-16",
        value: "64px",
        usage: "Respiration de hero, sections de landing."
      },
      {
        name: "space-24",
        value: "96px",
        usage: "Grandes sections de site vitrine."
      }
    ]
  },
  radius: {
    tokens: [
      {
        name: "radius-xs",
        value: "3px",
        usage: "Tags, kbd, cases à cocher."
      },
      {
        name: "radius-sm",
        value: "4px",
        usage: "Items de menu et de nav, boutons sm."
      },
      {
        name: "radius-md",
        value: "6px",
        usage: "Boutons, champs, onglets segmentés."
      },
      {
        name: "radius-lg",
        value: "8px",
        usage: "Cartes, menus, popovers, tableaux."
      },
      {
        name: "radius-xl",
        value: "12px",
        usage: "Modales, grandes cartes de site, images."
      },
      {
        name: "radius-full",
        value: "9999px",
        usage: "Switch, avatars, pastilles de statut."
      }
    ]
  },
  size: {
    tokens: [
      {
        name: "control-sm",
        value: "28px",
        usage: "Hauteur des contrôles sm et des items de nav (densité confortable)."
      },
      {
        name: "control-md",
        value: "32px",
        usage: "Hauteur par défaut des boutons, champs, onglets (densité confortable)."
      },
      {
        name: "control-lg",
        value: "40px",
        usage: "Contrôles lg : CTA de site, formulaires publics."
      },
      {
        name: "control-sm-compact",
        value: "24px",
        usage: "control-sm en densité compacte."
      },
      {
        name: "control-md-compact",
        value: "28px",
        usage: "control-md en densité compacte."
      },
      {
        name: "control-lg-compact",
        value: "32px",
        usage: "control-lg en densité compacte."
      },
      {
        name: "row",
        value: "36px",
        usage: "Hauteur de ligne de tableau (confortable)."
      },
      {
        name: "row-compact",
        value: "30px",
        usage: "Hauteur de ligne de tableau (compacte)."
      },
      {
        name: "sidebar",
        value: "240px",
        usage: "Largeur de la sidebar d'app."
      },
      {
        name: "topbar",
        value: "48px",
        usage: "Hauteur de la barre supérieure d'app."
      },
      {
        name: "measure-prose",
        value: "720px",
        usage: "Largeur max du texte long (articles, docs)."
      },
      {
        name: "measure-page",
        value: "1120px",
        usage: "Largeur max du contenu d'un site."
      },
      {
        name: "measure-wide",
        value: "1920px",
        usage: "Garde-fou des pages de données (tableau, board) : fluides jusqu'à cette largeur, gouttières comprises."
      },
      {
        name: "stripe",
        value: "4px",
        usage: "Largeur de la barre de couleur posée à gauche du titre des tuiles de stat et des cartes."
      }
    ]
  },
  shadow: {
    tokens: [
      {
        name: "shadow-sm",
        value: {
          light: "0 1px 2px rgba(25, 23, 20, 0.06)",
          dark: "0 1px 2px rgba(0, 0, 0, 0.40)"
        },
        usage: "Carte survolée, onglet segmenté actif."
      },
      {
        name: "shadow-md",
        value: {
          light: "0 0 0 1px rgba(25, 23, 20, 0.06), 0 4px 12px rgba(25, 23, 20, 0.08), 0 12px 32px rgba(25, 23, 20, 0.10)",
          dark: "0 0 0 1px rgba(255, 255, 255, 0.07), 0 4px 12px rgba(0, 0, 0, 0.40), 0 12px 32px rgba(0, 0, 0, 0.50)"
        },
        usage: "Menus, popovers, toasts."
      },
      {
        name: "shadow-lg",
        value: {
          light: "0 0 0 1px rgba(25, 23, 20, 0.06), 0 8px 24px rgba(25, 23, 20, 0.12), 0 24px 64px rgba(25, 23, 20, 0.16)",
          dark: "0 0 0 1px rgba(255, 255, 255, 0.07), 0 8px 24px rgba(0, 0, 0, 0.50), 0 24px 64px rgba(0, 0, 0, 0.60)"
        },
        usage: "Modales, drawers, palette de commandes."
      }
    ]
  },
  duration: {
    tokens: [
      {
        name: "duration-fast",
        value: "100ms",
        usage: "Survols, changements de couleur."
      },
      {
        name: "duration-base",
        value: "160ms",
        usage: "Ouverture de menus et popovers, switch."
      },
      {
        name: "duration-slow",
        value: "240ms",
        usage: "Modales, drawers, transitions de panneau."
      }
    ]
  },
  easing: {
    tokens: [
      {
        name: "ease-out",
        value: "cubic-bezier(0.2, 0, 0, 1)",
        usage: "Toute entrée et tout changement d'état."
      }
    ]
  }
}, ri = (d) => `var(--${d})`, gi = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(ri), ii = {
  AtAppShell: Ba,
  AtAvatar: Et,
  AtBadge: Pa,
  AtBreadcrumbs: xa,
  AtButton: x,
  AtCard: Wa,
  AtCheckbox: Ut,
  AtDataView: oo,
  AtDrawer: mo,
  AtDropdown: fo,
  AtEmpty: yo,
  AtField: rt,
  AtIcon: V,
  AtIconTile: xt,
  AtInput: it,
  AtKbd: vt,
  AtLogin: xo,
  AtMenu: Ot,
  AtMenuItem: jo,
  AtMenuLabel: Go,
  AtMenuSeparator: Zo,
  AtModal: rr,
  AtNavGroup: dr,
  AtNavItem: mr,
  AtPage: br,
  AtPopover: ue,
  AtProgress: Pt,
  AtPropertyEditor: pt,
  AtPropertyList: _r,
  AtPropertyValue: de,
  AtSegment: Mr,
  AtSelect: zr,
  AtSidebar: Er,
  AtStat: Hr,
  AtSwitch: Kr,
  AtTable: Qr,
  AtTabs: si,
  AtTag: ni,
  AtTextarea: oi
}, fi = {
  install(d) {
    for (const [t, l] of Object.entries(ii)) d.component(t, l);
  }
};
export {
  Ba as AtAppShell,
  Et as AtAvatar,
  Pa as AtBadge,
  xa as AtBreadcrumbs,
  x as AtButton,
  Wa as AtCard,
  Ut as AtCheckbox,
  oo as AtDataView,
  mo as AtDrawer,
  fo as AtDropdown,
  yo as AtEmpty,
  rt as AtField,
  V as AtIcon,
  xt as AtIconTile,
  it as AtInput,
  vt as AtKbd,
  xo as AtLogin,
  Ot as AtMenu,
  jo as AtMenuItem,
  Go as AtMenuLabel,
  Zo as AtMenuSeparator,
  rr as AtModal,
  dr as AtNavGroup,
  mr as AtNavItem,
  br as AtPage,
  ue as AtPopover,
  Pt as AtProgress,
  pt as AtPropertyEditor,
  _r as AtPropertyList,
  de as AtPropertyValue,
  Mr as AtSegment,
  zr as AtSelect,
  Er as AtSidebar,
  Hr as AtStat,
  Kr as AtSwitch,
  Qr as AtTable,
  si as AtTabs,
  ni as AtTag,
  oi as AtTextarea,
  fi as Atelier,
  Fe as LAYOUTS,
  Ne as NONE,
  st as OPS,
  $t as OP_LABEL,
  Qa as addDays,
  ns as applyView,
  gi as chartColors,
  ss as compareRows,
  At as createView,
  ri as cssVar,
  fi as default,
  rs as defaultsFromFilters,
  ci as filter,
  xe as findOption,
  ot as formatDate,
  ds as formatMonth,
  X as getValue,
  ls as groupRows,
  Bt as icons,
  te as isEmpty,
  as as matchRule,
  os as monthGrid,
  $e as optionsOf,
  di as registerIcons,
  Mt as shiftMonth,
  pi as sort,
  Se as today,
  hi as tokens,
  we as uid,
  mi as useDensity,
  Nt as useId,
  vi as useTheme
};
//# sourceMappingURL=atelier.js.map

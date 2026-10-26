import { defineComponent as P, computed as S, openBlock as t, createElementBlock as s, normalizeStyle as te, normalizeClass as I, createBlock as F, createCommentVNode as g, renderSlot as L, createTextVNode as _, toDisplayString as v, ref as O, watch as ve, createElementVNode as u, createVNode as f, Fragment as b, renderList as z, resolveDynamicComponent as Dt, withCtx as U, useModel as G, withDirectives as W, mergeProps as ee, vModelCheckbox as Ne, mergeModels as K, onBeforeUnmount as dt, Teleport as ct, nextTick as ze, unref as E, withKeys as _a, vModelDynamic as lt, shallowRef as wa, vModelText as ke, withModifiers as ie, isRef as ye, vModelSelect as _e, Transition as Bt, normalizeProps as $a, guardReactiveProps as Ma, getCurrentScope as Aa, onScopeDispose as Ca } from "vue";
const Et = {
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
function ci(d) {
  Object.assign(Et, d);
}
const Sa = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], V = /* @__PURE__ */ P({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const a = d, n = S(() => Et[a.name] ?? "");
    return (e, i) => (t(), s("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: e.size,
      height: e.size,
      style: te(e.size !== 16 ? { width: e.size + "px", height: e.size + "px" } : void 0),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true",
      innerHTML: n.value
    }, null, 12, Sa));
  }
}), Va = ["href", "aria-label"], Ta = ["type", "disabled", "aria-busy", "aria-label"], za = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, q = /* @__PURE__ */ P({
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
    const a = d, n = S(() => [
      "at-btn",
      `at-btn--${a.variant}`,
      a.size !== "md" && `at-btn--${a.size}`,
      a.iconOnly && "at-btn--icon"
    ]);
    return (e, i) => e.href && !e.disabled ? (t(), s("a", {
      key: 0,
      href: e.href,
      class: I(n.value),
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.icon ? (t(), F(V, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : g("", !0),
      L(e.$slots, "default", {}, () => [
        _(v(e.iconOnly ? "" : e.label), 1)
      ])
    ], 10, Va)) : (t(), s("button", {
      key: 1,
      type: e.type,
      class: I(n.value),
      disabled: e.disabled || e.loading,
      "aria-busy": e.loading || void 0,
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.loading ? (t(), s("span", za)) : e.icon ? (t(), F(V, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : g("", !0),
      e.iconOnly ? g("", !0) : L(e.$slots, "default", { key: 2 }, () => [
        _(v(e.label), 1)
      ])
    ], 10, Ta));
  }
}), La = { class: "at-shell__side" }, Da = { class: "at-shell__main" }, Ba = { class: "at-topbar" }, Ea = /* @__PURE__ */ P({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: a }) {
    const n = d, e = O(!1), i = O();
    return ve(() => n.routeKey, () => {
      e.value = !1, i.value && (i.value.scrollTop = 0);
    }), a({ closeNav: () => e.value = !1 }), (c, m) => (t(), s("div", {
      class: I(["at-shell", e.value && "at-shell--open"])
    }, [
      u("div", La, [
        L(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: m[0] || (m[0] = (p) => e.value = !1)
      }),
      u("div", Da, [
        u("header", Ba, [
          f(q, {
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
          ref: i,
          class: "at-shell__page"
        }, [
          L(c.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), Ua = ["title"], Pa = ["src", "alt"], Ut = /* @__PURE__ */ P({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const a = d, n = S(() => a.name.split(/\s+/).filter(Boolean).map((e) => e[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (e, i) => (t(), s("span", {
      class: I(["at-avatar", e.size !== "sm" && `at-avatar--${e.size}`]),
      title: e.name
    }, [
      e.src ? (t(), s("img", {
        key: 0,
        src: e.src,
        alt: e.name
      }, null, 8, Pa)) : (t(), s(b, { key: 1 }, [
        _(v(n.value), 1)
      ], 64))
    ], 10, Ua));
  }
}), Fa = /* @__PURE__ */ P({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("span", {
      class: I(["at-badge", a.tone !== "neutral" && `at-badge--${a.tone}`])
    }, [
      L(a.$slots, "default", {}, () => [
        _(v(a.label), 1)
      ])
    ], 2));
  }
}), Oa = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ia = {
  key: 0,
  "aria-hidden": "true"
}, Na = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, qa = ["href", "onClick"], xa = /* @__PURE__ */ P({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (a, n) => (t(), s("nav", Oa, [
      (t(!0), s(b, null, z(a.items, (e, i) => (t(), s(b, { key: i }, [
        i > 0 ? (t(), s("span", Ia, "/")) : g("", !0),
        i === a.items.length - 1 ? (t(), s("span", Na, v(e.label), 1)) : (t(), s("a", {
          key: 2,
          href: e.href ?? "#",
          onClick: (c) => e.onClick && (c.preventDefault(), e.onClick())
        }, v(e.label), 9, qa))
      ], 64))), 128))
    ]));
  }
}), Ha = {
  key: 0,
  class: "at-card__head"
}, ja = {
  key: 0,
  class: "at-card__title"
}, Ra = {
  key: 1,
  class: "at-card__desc"
}, Wa = {
  key: 1,
  class: "at-card__foot"
}, Ka = /* @__PURE__ */ P({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (a, n) => (t(), F(Dt(a.href ? "a" : a.as || "section"), {
      href: a.href,
      class: I(["at-card", a.href && "at-card--link", a.color && ["at-card--striped", `at-tone-${a.color}`]])
    }, {
      default: U(() => [
        a.title || a.description || a.$slots.actions ? (t(), s("div", Ha, [
          u("div", null, [
            a.title ? (t(), s("h3", ja, v(a.title), 1)) : g("", !0),
            a.description ? (t(), s("p", Ra, v(a.description), 1)) : g("", !0)
          ]),
          L(a.$slots, "actions")
        ])) : g("", !0),
        L(a.$slots, "default"),
        a.$slots.footer ? (t(), s("div", Wa, [
          L(a.$slots, "footer")
        ])) : g("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), Ga = {
  key: 0,
  class: "at-toggle"
}, Ja = ["indeterminate", "disabled"], Ya = ["indeterminate", "disabled"], Pt = /* @__PURE__ */ P({
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
    const a = G(d, "modelValue");
    return (n, e) => n.label || n.$slots.default ? (t(), s("label", Ga, [
      W(u("input", ee(n.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
        type: "checkbox",
        class: "at-check",
        indeterminate: n.indeterminate,
        disabled: n.disabled
      }), null, 16, Ja), [
        [Ne, a.value]
      ]),
      L(n.$slots, "default", {}, () => [
        _(v(n.label), 1)
      ])
    ])) : W((t(), s("input", ee({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (i) => a.value = i),
      type: "checkbox",
      class: "at-check",
      indeterminate: n.indeterminate,
      disabled: n.disabled
    }), null, 16, Ya)), [
      [Ne, a.value]
    ]);
  }
}), de = /* @__PURE__ */ P({
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
  setup(d, { expose: a, emit: n }) {
    const e = G(d, "open"), i = d, c = n, m = O(), p = O(), w = O({ top: -9999, left: -9999 }), M = S(() => {
      var N;
      return i.anchor ?? ((N = m.value) == null ? void 0 : N.firstElementChild) ?? m.value ?? null;
    });
    function C() {
      const N = M.value, H = p.value;
      if (!N || !H) return;
      const j = N.getBoundingClientRect(), ue = H.offsetWidth, Z = H.offsetHeight;
      let se = i.align === "end" ? j.right - ue : j.left;
      se = Math.max(8, Math.min(se, window.innerWidth - ue - 8));
      let ne = j.bottom + i.offset;
      ne + Z > window.innerHeight - 8 && (ne = Math.max(8, j.top - Z - i.offset)), (Math.abs(ne - w.value.top) > 0.5 || Math.abs(se - w.value.left) > 0.5) && (w.value = { top: ne, left: se });
    }
    function T() {
      e.value && (e.value = !1, c("close"));
    }
    function x() {
      e.value ? T() : e.value = !0;
    }
    function R(N) {
      var j, ue, Z;
      const H = N.target;
      (j = p.value) != null && j.contains(H) || (ue = M.value) != null && ue.contains(H) || (Z = H.closest) != null && Z.call(H, ".at-pop") || T();
    }
    function A(N) {
      var H, j;
      N.key === "Escape" && (N.stopPropagation(), T(), (j = (H = M.value) == null ? void 0 : H.focus) == null || j.call(H));
    }
    let y = null;
    function $() {
      setTimeout(() => document.addEventListener("mousedown", R), 0), document.addEventListener("keydown", A, !0), window.addEventListener("resize", C), window.addEventListener("scroll", C, !0), ze(() => {
        C(), p.value && (y = new ResizeObserver(C), y.observe(p.value));
      });
    }
    function D() {
      document.removeEventListener("mousedown", R), document.removeEventListener("keydown", A, !0), window.removeEventListener("resize", C), window.removeEventListener("scroll", C, !0), y == null || y.disconnect(), y = null, w.value = { top: -9999, left: -9999 };
    }
    return ve(e, (N) => N ? $() : D(), { immediate: !0 }), dt(D), a({ place: C, close: T, toggle: x }), (N, H) => (t(), s(b, null, [
      N.$slots.trigger ? (t(), s("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: m,
        style: { display: "contents" }
      }, [
        L(N.$slots, "trigger", {
          toggle: x,
          open: e.value
        })
      ], 512)) : g("", !0),
      (t(), F(ct, { to: "body" }, [
        e.value ? (t(), s("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: te({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          L(N.$slots, "default", { close: T })
        ], 4)) : g("", !0)
      ]))
    ], 64));
  }
}), Xa = ["aria-valuenow", "aria-label"], Za = { class: "at-progress__track" }, Qa = {
  key: 0,
  class: "at-progress__label"
}, Ft = /* @__PURE__ */ P({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const a = d, n = S(() => Math.max(0, Math.min(100, Math.round(a.value / a.max * 100))));
    return (e, i) => (t(), s("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": e.label
    }, [
      u("span", Za, [
        u("span", {
          class: "at-progress__bar",
          style: te({ width: n.value + "%" })
        }, null, 4)
      ]),
      e.showLabel ? (t(), s("span", Qa, v(n.value) + " %", 1)) : g("", !0)
    ], 8, Xa));
  }
}), qe = "__none", ot = (d) => String(d).padStart(2, "0"), pt = (d) => `${d.getFullYear()}-${ot(d.getMonth() + 1)}-${ot(d.getDate())}`, Se = () => pt(/* @__PURE__ */ new Date()), es = (d, a) => {
  const n = /* @__PURE__ */ new Date(d + "T00:00");
  return n.setDate(n.getDate() + a), pt(n);
}, we = () => Math.random().toString(36).slice(2, 10), ae = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, X = (d, a) => a.compute ? a.compute(d) : d[a.key], $e = (d, a) => typeof d.options == "function" ? d.options(a) : d.options ?? [], xe = (d, a, n) => $e(d, a).find((e) => e.value === n), Ve = (d) => !d.compute && !d.readonly && d.type !== "progress", ts = ["status", "select", "relation", "person"], Te = (d) => ts.includes(d.type), as = {
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
}, Ie = (d) => d.icon ?? as[d.type] ?? "text", Oe = [
  { value: "table", label: "Tableau", icon: "table" },
  { value: "board", label: "Board", icon: "board" },
  { value: "list", label: "Liste", icon: "list" },
  { value: "calendar", label: "Calendrier", icon: "calendar" }
], nt = {
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
}, Mt = {
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
}, Ot = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function ss(d, a, n, e = Se()) {
  const i = X(d, a);
  if (!Ot.includes(n.op) && ae(n.value)) return !0;
  const c = (m) => String(m ?? "").toLowerCase();
  switch (n.op) {
    case "empty":
      return ae(i);
    case "notempty":
      return !ae(i);
    case "contains":
      return a.type === "multi" ? (i ?? []).includes(n.value) : c(i).includes(c(n.value));
    case "notcontains":
      return a.type === "multi" ? !(i ?? []).includes(n.value) : !c(i).includes(c(n.value));
    case "is":
      return i === n.value;
    case "isnot":
      return i !== n.value;
    case "before":
      return !!i && i < n.value;
    case "after":
      return !!i && i > n.value;
    case "past":
      return !!i && i < e;
    case "week":
      return !!i && i >= e && i <= es(e, 7);
    case "eq":
      return Number(i) === Number(n.value);
    case "gt":
      return Number(i) > Number(n.value);
    case "lt":
      return Number(i) < Number(n.value);
    case "checked":
      return !!i;
    case "unchecked":
      return !i;
  }
  return !0;
}
function ns(d, a, n) {
  const e = X(a, d), i = X(n, d), c = ae(e), m = ae(i);
  if (c || m) return c === m ? 0 : c ? 1 : -1;
  if (Te(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(e) - p.indexOf(i);
  }
  return d.type === "number" || d.type === "progress" ? e - i : d.type === "checkbox" ? Number(i) - Number(e) : d.type === "multi" ? e.length - i.length : String(e).localeCompare(String(i), "fr");
}
function ls(d, a, n, e = "") {
  const i = Object.fromEntries(a.map((M) => [M.key, M])), c = a.find((M) => M.type === "title"), m = e.trim().toLowerCase(), p = d.filter((M) => (!m || !c || String(M[c.key] ?? "").toLowerCase().includes(m)) && n.filters.every((C) => !i[C.prop] || ss(M, i[C.prop], C))), w = n.sorts.filter((M) => i[M.prop]);
  return w.length ? p.sort((M, C) => {
    for (const T of w) {
      const x = i[T.prop], R = ae(X(M, x)), A = ae(X(C, x));
      if (R !== A) return R ? 1 : -1;
      if (R) continue;
      const y = ns(x, M, C);
      if (y) return T.dir === "desc" ? -y : y;
    }
    return 0;
  }) : p;
}
function os(d, a, n = !1) {
  if (!a) return [{ key: qe, option: null, rows: d }];
  const e = $e(a).map((m) => ({ key: m.value, option: m, rows: [] })), i = { key: qe, option: null, rows: [] }, c = Object.fromEntries(e.map((m) => [m.key, m]));
  for (const m of d) (c[X(m, a)] ?? i).rows.push(m);
  return (i.rows.length || n) && e.push(i), n ? e : e.filter((m) => m.rows.length);
}
function rs(d) {
  const [a, n] = d.split("-").map(Number), i = (new Date(a, n - 1, 1).getDay() + 6) % 7, c = [];
  for (let m = 0; m < 42; m++) {
    const p = new Date(a, n - 1, 1 - i + m);
    c.push({ iso: pt(p), day: p.getDate(), outside: p.getMonth() !== n - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const At = (d, a) => {
  const [n, e] = d.split("-").map(Number), i = new Date(n, e - 1 + a, 1);
  return `${i.getFullYear()}-${ot(i.getMonth() + 1)}`;
};
function Ct(d, a = "table", n = {}) {
  return { id: we(), name: d, layout: a, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...n };
}
const pi = (d, a, n = "") => ({ id: we(), prop: d, op: a, value: n }), vi = (d, a = "asc") => ({ id: we(), prop: d, dir: a });
function is(d, a) {
  const n = {};
  for (const e of d.filters) {
    const i = a.find((c) => c.key === e.prop);
    !i || !Ve(i) || ae(e.value) || (e.op === "is" && (n[e.prop] = e.value), e.op === "contains" && i.type === "multi" && (n[e.prop] = [e.value]));
  }
  return n;
}
const us = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), ds = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), It = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function rt(d) {
  if (!d) return "";
  const a = /* @__PURE__ */ new Date(d + "T00:00");
  return (a.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? us : ds).format(a);
}
const cs = (d) => {
  const [a, n] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(a, n - 1, 1));
}, ps = {
  key: 0,
  class: "at-pv-title"
}, vs = ["checked"], ms = {
  key: 2,
  class: "at-pv-empty"
}, hs = {
  key: 5,
  class: "at-pv-multi"
}, gs = {
  key: 6,
  class: "at-pv-person"
}, fs = { class: "at-ellipsis" }, bs = {
  key: 7,
  class: "at-pv-rel"
}, ys = { class: "at-ellipsis" }, ks = {
  key: 9,
  class: "at-num"
}, _s = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, ce = /* @__PURE__ */ P({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const a = d, n = S(() => X(a.row, a.prop)), e = S(() => a.prop.type), i = S(() => Te(a.prop) ? xe(a.prop, a.row, n.value) : void 0), c = S(() => e.value === "multi" ? (n.value ?? []).map((w) => xe(a.prop, a.row, w)).filter(Boolean) : []), m = S(() => {
      var w, M;
      return e.value === "date" && !!((M = (w = a.prop).overdue) != null && M.call(w, a.row));
    }), p = S(() => {
      var w;
      return ((w = i.value) == null ? void 0 : w.label) ?? String(n.value ?? "");
    });
    return (w, M) => {
      var C, T, x;
      return e.value === "title" ? (t(), s("span", ps, v(n.value || "Sans titre"), 1)) : e.value === "checkbox" ? (t(), s("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!n.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, vs)) : E(ae)(n.value) ? (t(), s("span", ms, "—")) : e.value === "status" ? (t(), s("span", {
        key: 3,
        class: I(["at-badge", ((C = i.value) == null ? void 0 : C.tone) && i.value.tone !== "neutral" && `at-badge--${i.value.tone}`])
      }, v(p.value), 3)) : e.value === "select" ? (t(), s("span", {
        key: 4,
        class: I(["at-tag", ((T = i.value) == null ? void 0 : T.color) && i.value.color !== "gray" && `at-tag--${i.value.color}`])
      }, v(p.value), 3)) : e.value === "multi" ? (t(), s("span", hs, [
        (t(!0), s(b, null, z(c.value, (R) => (t(), s("span", {
          key: R.value,
          class: I(["at-tag", R.color && R.color !== "gray" && `at-tag--${R.color}`])
        }, v(R.label), 3))), 128))
      ])) : e.value === "person" ? (t(), s("span", gs, [
        f(Ut, { name: p.value }, null, 8, ["name"]),
        u("span", fs, v(p.value), 1)
      ])) : e.value === "relation" ? (t(), s("span", bs, [
        (x = i.value) != null && x.mark ? (t(), s("span", {
          key: 0,
          class: "at-pv-mark",
          style: te({ background: i.value.mark })
        }, null, 4)) : (t(), F(V, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", ys, v(i.value ? i.value.label : "Introuvable"), 1)
      ])) : e.value === "date" ? (t(), s("span", {
        key: 8,
        class: I(["at-pv-date", m.value && "at-pv-over"])
      }, v(E(rt)(n.value)), 3)) : e.value === "number" ? (t(), s("span", ks, v(E(It).format(Number(n.value))) + v(w.prop.suffix ?? ""), 1)) : e.value === "progress" ? (t(), F(Ft, {
        key: 10,
        value: Number(n.value)
      }, null, 8, ["value"])) : (t(), s("span", _s, v(n.value), 1));
    };
  }
}), ws = ["aria-label"], $s = { class: "at-menu-label" }, Ms = ["aria-selected", "onClick"], As = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, Cs = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Ss = ["aria-label"], Vs = { class: "at-menu-label" }, Ts = ["aria-checked", "onClick"], zs = ["checked"], Ls = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Ds = { class: "at-menu-title" }, Bs = ["value", "aria-label"], Es = { class: "at-menu-actions" }, Us = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Ps = { class: "at-menu-title" }, Fs = ["type", "aria-label"], vt = /* @__PURE__ */ P({
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
  setup(d, { emit: a }) {
    const n = G(d, "open"), e = d, i = a, c = O(""), m = O(), p = S(() => {
      const y = e.prop;
      return y ? Te(y) ? "options" : y.type === "multi" ? "multi" : y.type === "date" ? "date" : "input" : null;
    }), w = S(() => e.prop ? $e(e.prop, e.row) : []), M = S(() => e.prop && e.row ? e.row[e.prop.key] : null);
    ve(n, (y) => {
      y && (c.value = M.value ?? "", ze(() => {
        var D, N;
        const $ = (D = m.value) == null ? void 0 : D.querySelector("input, button");
        $ == null || $.focus(), (N = $ == null ? void 0 : $.select) == null || N.call($);
      }));
    });
    const C = (y) => ({ ...e.row, [e.prop.key]: y });
    function T(y, $ = !0) {
      i("update", y), $ && (n.value = !1);
    }
    function x(y) {
      const $ = [...M.value ?? []], D = $.indexOf(y);
      D < 0 ? $.push(y) : $.splice(D, 1), T($, !1);
    }
    function R() {
      var $;
      let y = c.value;
      (($ = e.prop) == null ? void 0 : $.type) === "number" && (y = y === "" || y == null ? null : Number(y)), y !== M.value && i("update", y), n.value = !1;
    }
    function A() {
      var y;
      if (p.value === "input") {
        let $ = c.value;
        ((y = e.prop) == null ? void 0 : y.type) === "number" && ($ = $ === "" ? null : Number($)), $ !== M.value && i("update", $);
      }
    }
    return (y, $) => (t(), F(de, {
      open: n.value,
      "onUpdate:open": $[5] || ($[5] = (D) => n.value = D),
      anchor: y.anchor,
      onClose: A
    }, {
      default: U(() => [
        y.prop ? (t(), s("div", {
          key: 0,
          ref_key: "box",
          ref: m
        }, [
          p.value === "options" ? (t(), s("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": y.prop.name
          }, [
            u("div", $s, v(y.prop.name), 1),
            (t(!0), s(b, null, z(w.value, (D) => (t(), s("button", {
              key: D.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": D.value === M.value,
              onClick: (N) => T(D.value)
            }, [
              f(ce, {
                prop: y.prop,
                row: C(D.value)
              }, null, 8, ["prop", "row"]),
              D.value === M.value ? (t(), F(V, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : g("", !0)
            ], 8, Ms))), 128)),
            w.value.length ? g("", !0) : (t(), s("div", As, "Aucune option disponible")),
            y.prop.required ? g("", !0) : (t(), s(b, { key: 1 }, [
              Cs,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: $[0] || ($[0] = (D) => T(null))
              }, [
                f(V, { name: "x" }),
                _("Effacer")
              ])
            ], 64))
          ], 8, ws)) : p.value === "multi" ? (t(), s("div", {
            key: 1,
            class: "at-menu",
            "aria-label": y.prop.name
          }, [
            u("div", Vs, v(y.prop.name), 1),
            (t(!0), s(b, null, z(w.value, (D) => (t(), s("button", {
              key: D.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(D.value),
              onClick: (N) => x(D.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(D.value)
              }, null, 8, zs),
              u("span", {
                class: I(["at-tag", D.color && D.color !== "gray" && `at-tag--${D.color}`])
              }, v(D.label), 3)
            ], 8, Ts))), 128))
          ], 8, Ss)) : p.value === "date" ? (t(), s("div", Ls, [
            u("span", Ds, v(y.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": y.prop.name,
              onChange: $[1] || ($[1] = (D) => T(D.target.value || null, !1))
            }, null, 40, Bs),
            u("div", Es, [
              f(q, {
                size: "sm",
                onClick: $[2] || ($[2] = (D) => T(E(Se)()))
              }, {
                default: U(() => [
                  _("Aujourd’hui")
                ]),
                _: 1
              }),
              f(q, {
                size: "sm",
                variant: "ghost",
                onClick: $[3] || ($[3] = (D) => T(null))
              }, {
                default: U(() => [
                  _("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (t(), s("div", Us, [
            u("span", Ps, v(y.prop.name), 1),
            W(u("input", {
              "onUpdate:modelValue": $[4] || ($[4] = (D) => c.value = D),
              class: "at-input",
              type: y.prop.type === "number" ? "number" : "text",
              "aria-label": y.prop.name,
              onKeydown: _a(R, ["enter"])
            }, null, 40, Fs), [
              [lt, c.value]
            ])
          ]))
        ], 512)) : g("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Os = { class: "at-dv" }, Is = { class: "at-dv-viewsbar" }, Ns = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, qs = ["aria-selected", "title", "onClick"], xs = { class: "at-toolbar at-dv-toolbar" }, Hs = {
  key: 1,
  class: "at-dv-n"
}, js = {
  key: 1,
  class: "at-dv-n"
}, Rs = { class: "at-input-wrap at-dv-search" }, Ws = {
  key: 0,
  class: "at-dv-chips"
}, Ks = { class: "at-table-wrap" }, Gs = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Js = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Ys = { class: "at-cell-check" }, Xs = ["checked", "indeterminate"], Zs = { class: "at-th" }, Qs = ["onMousedown"], en = { class: "at-cell-check" }, tn = {
  key: 0,
  class: "at-dv-grouprow"
}, an = ["colspan"], sn = ["aria-expanded", "onClick"], nn = {
  key: 1,
  class: "at-pv-empty"
}, ln = { class: "at-count" }, on = ["aria-selected"], rn = { class: "at-cell-check" }, un = ["checked", "onChange"], dn = ["onClick"], cn = ["onClick"], pn = /* @__PURE__ */ u("td", null, null, -1), vn = { class: "at-dv-newrow" }, mn = /* @__PURE__ */ u("td", null, null, -1), hn = ["colspan"], gn = ["onClick"], fn = /* @__PURE__ */ u("td", null, null, -1), bn = /* @__PURE__ */ u("td", null, null, -1), yn = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, kn = { class: "at-num" }, _n = {
  key: 2,
  class: "at-dv-board"
}, wn = {
  key: 0,
  class: "at-empty"
}, $n = ["onDragover", "onDrop"], Mn = { class: "at-dv-colhead" }, An = {
  key: 1,
  class: "at-pv-empty"
}, Cn = { class: "at-count" }, Sn = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), Vn = { class: "at-dv-cards" }, Tn = ["onDragstart", "onClick"], zn = { class: "at-dv-cardtitle" }, Ln = {
  key: 0,
  class: "at-dv-cardprops"
}, Dn = ["onClick"], Bn = { key: 3 }, En = {
  key: 0,
  class: "at-empty"
}, Un = {
  key: 1,
  class: "at-dv-list"
}, Pn = {
  key: 0,
  class: "at-dv-lgroup"
}, Fn = ["aria-expanded", "onClick"], On = {
  key: 1,
  class: "at-pv-empty"
}, In = { class: "at-count" }, Nn = ["onClick"], qn = { class: "at-pv-title" }, xn = { class: "at-dv-liprops" }, Hn = { class: "at-dv-newline" }, jn = { class: "at-dv-calhead" }, Rn = { class: "at-dv-calmonth" }, Wn = { class: "at-dv-calnote" }, Kn = { class: "at-dv-calwrap" }, Gn = { class: "at-dv-calgrid" }, Jn = { class: "at-dv-calgrid" }, Yn = ["onDragover", "onDrop"], Xn = { class: "at-dv-daynum" }, Zn = ["aria-label", "onClick"], Qn = ["onDragstart", "onClick"], el = {
  class: "at-menu",
  role: "menu"
}, tl = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), al = ["onClick"], sl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, nl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), ll = { class: "at-rules" }, ol = {
  key: 0,
  class: "at-menu-empty"
}, rl = { class: "at-select" }, il = ["onUpdate:modelValue", "onChange"], ul = ["value"], dl = { class: "at-select" }, cl = ["onUpdate:modelValue"], pl = ["value"], vl = {
  key: 0,
  class: "at-select"
}, ml = ["onUpdate:modelValue"], hl = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), gl = ["value"], fl = ["onUpdate:modelValue"], bl = ["onUpdate:modelValue"], yl = ["onUpdate:modelValue"], kl = { key: 1 }, _l = { class: "at-menu-actions" }, wl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, $l = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), Ml = { class: "at-rules" }, Al = {
  key: 0,
  class: "at-menu-empty"
}, Cl = { class: "at-select" }, Sl = ["onUpdate:modelValue"], Vl = ["value"], Tl = { class: "at-select" }, zl = ["onUpdate:modelValue"], Ll = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Dl = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), Bl = [
  Ll,
  Dl
], El = { class: "at-menu-actions" }, Ul = {
  class: "at-menu",
  role: "menu"
}, Pl = { class: "at-menu-label" }, Fl = ["onClick"], Ol = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Il = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Nl = ["draggable", "onDragstart", "onDragover", "onDrop"], ql = { class: "at-pi-name" }, xl = ["aria-label", "checked", "disabled", "onChange"], Hl = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), jl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Rl = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Wl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), Kl = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Gl = ["aria-pressed", "onClick"], Jl = {
  key: 0,
  class: "at-field-row"
}, Yl = { class: "at-select" }, Xl = ["value"], Zl = {
  key: 0,
  value: ""
}, Ql = ["value"], eo = {
  key: 1,
  class: "at-field-row"
}, to = /* @__PURE__ */ u("span", null, "Date utilisée", -1), ao = { class: "at-select" }, so = ["value"], no = ["value"], lo = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), oo = ["disabled"], ro = /* @__PURE__ */ P({
  __name: "AtDataView",
  props: /* @__PURE__ */ K({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean },
    lockViews: { type: Boolean }
  }, {
    views: { default: () => [Ct("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ K(["update", "create", "open", "delete"], ["update:views", "update:activeView"]),
  setup(d, { emit: a }) {
    const n = d, e = G(d, "views"), i = G(d, "activeView"), c = a, m = (o) => o[n.rowKey], p = S(() => e.value.find((o) => o.id === i.value) ?? e.value[0]), w = S(() => Object.fromEntries(n.schema.map((o) => [o.key, o]))), M = S(() => n.schema.find((o) => o.type === "title")), C = S(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? n.rowKey;
    }), T = S(() => {
      const o = (p.value.order ?? []).filter((k) => w.value[k]);
      for (const k of n.schema) o.includes(k.key) || o.push(k.key);
      const r = o.indexOf(C.value);
      return r > 0 && (o.splice(r, 1), o.unshift(C.value)), o.map((k) => w.value[k]);
    }), x = S(() => T.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), R = S(() => x.value.filter((o) => o.type !== "title")), A = S(() => n.schema.filter(Te)), y = S(() => n.schema.filter((o) => o.type === "date")), $ = S(() => n.schema.find((o) => o.type === "status")), D = O(""), N = S(() => ls(n.rows, n.schema, p.value, D.value)), H = S(() => {
      var r, k;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((r = $.value) == null ? void 0 : r.key) ?? ((k = A.value[0]) == null ? void 0 : k.key) ?? null : o;
    }), j = S(() => H.value && p.value.layout !== "calendar" ? w.value[H.value] : null), ue = S(() => os(N.value, j.value, p.value.layout === "board")), Z = (o) => ({ [H.value]: o === qe ? null : o }), se = S(() => p.value.filters.filter((o) => w.value[o.prop])), ne = S(() => p.value.sorts.filter((o) => w.value[o.prop])), je = O({}), le = O(null), pe = O(null);
    function oe(o, r) {
      if (le.value === o && pe.value === r) {
        le.value = null;
        return;
      }
      pe.value = r ?? null, le.value = o;
    }
    const he = (o) => S({ get: () => le.value === o, set: (r) => {
      !r && le.value === o && (le.value = null);
    } }), Re = he("add"), We = he("filter"), Ke = he("sort"), Ge = he("group"), Je = he("props"), Ye = he("settings");
    function Jt(o) {
      o.id === p.value.id ? oe("settings", je.value[o.id]) : i.value = o.id;
    }
    const ht = () => {
      var o, r;
      return ((o = $.value) == null ? void 0 : o.key) ?? ((r = A.value[0]) == null ? void 0 : r.key) ?? null;
    };
    function Yt(o) {
      if (n.lockViews) return;
      const r = Ct(Oe.find((k) => k.value === o).label, o, { groupBy: o === "board" ? ht() : null });
      e.value.push(r), i.value = r.id, le.value = null, ze(() => oe("settings", je.value[r.id]));
    }
    function Xt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = ht());
    }
    function Zt() {
      if (n.lockViews) return;
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", e.value.push(o), i.value = o.id, le.value = null;
    }
    function Qt() {
      if (n.lockViews || e.value.length < 2) return;
      const o = e.value.indexOf(p.value);
      e.value.splice(o, 1), i.value = e.value[Math.max(0, o - 1)].id, le.value = null;
    }
    ve(() => p.value.id, () => {
      J.value = [], le.value = null;
    });
    function ea() {
      const o = n.schema.find((r) => r.type !== "title" && r.type !== "progress") ?? n.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: nt[o.type][0], value: "" });
    }
    function ta(o) {
      o.op = nt[w.value[o.prop].type][0], o.value = "";
    }
    const aa = (o) => {
      var r;
      return nt[(r = w.value[o.prop]) == null ? void 0 : r.type] ?? [];
    }, gt = (o) => !Ot.includes(o.op);
    function Le(o) {
      const r = w.value[o.prop];
      return r ? Te(r) || r.type === "multi" ? "options" : r.type === "date" ? "date" : r.type === "number" || r.type === "progress" ? "number" : "text" : "text";
    }
    function Xe(o) {
      var Y;
      const r = w.value[o.prop];
      let k = "";
      if (gt(o)) {
        const l = Le(o);
        k = l === "options" ? ((Y = xe(r, void 0, o.value)) == null ? void 0 : Y.label) ?? "…" : l === "date" ? rt(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: r.name, op: Mt[o.op], val: k };
    }
    function sa() {
      const o = p.value.sorts.map((k) => k.prop), r = n.schema.find((k) => !o.includes(k.key)) ?? n.schema[0];
      p.value.sorts.push({ id: we(), prop: r.key, dir: "asc" });
    }
    const ft = (o, r) => {
      const k = o.indexOf(r);
      k >= 0 && o.splice(k, 1);
    };
    function na() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Ze(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (le.value = null);
    }
    function la(o) {
      const r = p.value.hidden, k = r.indexOf(o.key);
      k < 0 ? r.push(o.key) : r.splice(k, 1);
    }
    function bt(o) {
      p.value.hidden = o ? [] : n.schema.filter((r) => r.type !== "title").map((r) => r.key);
    }
    const Me = O(null), De = O(null);
    function oa(o) {
      if (Me.value == null) return;
      const r = T.value.map((Y) => Y.key), [k] = r.splice(Me.value, 1);
      r.splice(o, 0, k), p.value.order = r, Me.value = null, De.value = null;
    }
    const Qe = (o) => p.value.widths[o.key] ?? o.width ?? 160, ra = S(() => 36 + x.value.reduce((o, r) => o + Qe(r), 0) + 44), et = O(null);
    function ia(o, r) {
      const k = o.clientX, Y = Qe(r);
      et.value = r.key;
      const l = (B) => {
        p.value.widths[r.key] = Math.max(70, Math.round(Y + B.clientX - k));
      }, h = () => {
        et.value = null, window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", h);
      };
      window.addEventListener("mousemove", l), window.addEventListener("mouseup", h);
    }
    const J = O([]), tt = S(() => N.value.length > 0 && N.value.every((o) => J.value.includes(m(o)))), ua = S(() => J.value.length > 0 && !tt.value);
    function da(o) {
      const r = J.value.indexOf(m(o));
      r < 0 ? J.value.push(m(o)) : J.value.splice(r, 1);
    }
    function ca() {
      J.value = tt.value ? [] : N.value.map(m);
    }
    function pa() {
      c("delete", n.rows.filter((o) => J.value.includes(m(o)))), J.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function yt(o) {
      const r = p.value.collapsed, k = r.indexOf(o);
      k < 0 ? r.push(o) : r.splice(k, 1);
    }
    function at(o) {
      const r = N.value;
      if (o.type === "title") return { label: "Total", value: String(r.length) };
      if (o.type === "number") return { label: "Somme", value: It.format(r.reduce((k, Y) => k + (Number(X(Y, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && r.length) return { label: "Moyenne", value: Math.round(r.reduce((k, Y) => k + Number(X(Y, o)), 0) / r.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const k = r.filter((Y) => o.overdue(Y)).length;
        return k ? { label: "En retard", value: String(k) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(r.filter((k) => X(k, o)).length) } : null;
    }
    const fe = wa(null), kt = O(null), st = O(!1);
    function va(o, r, k) {
      if (k.type === "title") {
        c("open", r);
        return;
      }
      if (Ve(k)) {
        if (k.type === "checkbox") {
          c("update", r, k.key, !r[k.key]);
          return;
        }
        kt.value = o.currentTarget, fe.value = { row: r, prop: k }, st.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...is(p.value, n.schema), ...o });
    }
    const Be = O(null), be = O(null);
    function _t(o, r) {
      Be.value = m(r), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(m(r))));
    }
    function Ee() {
      Be.value = null, be.value = null;
    }
    const wt = () => n.rows.find((o) => m(o) === Be.value);
    function ma(o) {
      const r = wt();
      r && H.value && c("update", r, H.value, o === qe ? null : o), Ee();
    }
    function ha(o) {
      const r = wt();
      r && re.value && c("update", r, re.value, o), Ee();
    }
    const re = S(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = y.value[0]) == null ? void 0 : o.key) ?? null;
    }), Ue = S(() => p.value.month ?? Se().slice(0, 7)), ga = S(() => rs(Ue.value).map((o) => ({ ...o, today: o.iso === Se(), rows: re.value ? N.value.filter((r) => r[re.value] === o.iso) : [] }))), $t = S(() => re.value ? N.value.filter((o) => !o[re.value]).length : 0), fa = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, ba = (o) => {
      const r = $.value, k = r ? xe(r, o, o[r.key]) : void 0;
      return fa[(k == null ? void 0 : k.tone) ?? "neutral"];
    }, ya = (o) => {
      const r = $.value;
      if (!r) return !1;
      const k = $e(r, o);
      return k.length > 0 && o[r.key] === k[k.length - 1].value;
    }, Pe = (o, r = 0) => n.iconTools ? { iconOnly: !r, label: o, title: o, "aria-label": r ? `${o} (${r})` : o } : {}, ka = (o) => {
      var r;
      return ((r = Oe.find((k) => k.value === o)) == null ? void 0 : r.icon) ?? "table";
    }, Fe = S(() => j.value ? `Sans ${j.value.name.toLowerCase()}` : "");
    return (o, r) => {
      var k, Y;
      return t(), s("section", Os, [
        u("div", Is, [
          o.hideViews ? g("", !0) : (t(), s(b, { key: 0 }, [
            u("div", Ns, [
              (t(!0), s(b, null, z(e.value, (l) => (t(), s("button", {
                key: l.id,
                ref_for: !0,
                ref: (h) => {
                  h && (je.value[l.id] = h);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": l.id === p.value.id,
                title: l.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (h) => Jt(l)
              }, [
                f(V, {
                  name: ka(l.layout)
                }, null, 8, ["name"]),
                _(v(l.name), 1)
              ], 8, qs))), 128))
            ]),
            o.lockViews ? g("", !0) : (t(), F(q, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: r[0] || (r[0] = (l) => oe("add", l.currentTarget))
            }))
          ], 64)),
          u("div", xs, [
            f(q, ee(Pe("Filtrer", se.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": se.value.length },
              onClick: r[1] || (r[1] = (l) => oe("filter", l.currentTarget))
            }), {
              default: U(() => [
                o.iconTools ? g("", !0) : (t(), s(b, { key: 0 }, [
                  _("Filtrer")
                ], 64)),
                se.value.length ? (t(), s("span", Hs, v(se.value.length), 1)) : g("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            f(q, ee(Pe("Trier", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": ne.value.length },
              onClick: r[2] || (r[2] = (l) => oe("sort", l.currentTarget))
            }), {
              default: U(() => [
                o.iconTools ? g("", !0) : (t(), s(b, { key: 0 }, [
                  _("Trier")
                ], 64)),
                ne.value.length ? (t(), s("span", js, v(ne.value.length), 1)) : g("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            p.value.layout !== "calendar" ? (t(), F(q, ee({ key: 0 }, Pe("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": p.value.groupBy },
              onClick: r[3] || (r[3] = (l) => oe("group", l.currentTarget))
            }), {
              default: U(() => [
                _("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : g("", !0),
            f(q, ee(Pe("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: r[4] || (r[4] = (l) => oe("props", l.currentTarget))
            }), {
              default: U(() => [
                _("Propriétés")
              ]),
              _: 1
            }, 16),
            u("div", Rs, [
              f(V, { name: "search" }),
              W(u("input", {
                "onUpdate:modelValue": r[5] || (r[5] = (l) => D.value = l),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [ke, D.value]
              ])
            ]),
            o.hideViews ? g("", !0) : (t(), F(q, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: r[6] || (r[6] = (l) => oe("settings", l.currentTarget))
            })),
            f(q, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: r[7] || (r[7] = (l) => me())
            }, {
              default: U(() => [
                _(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        se.value.length || ne.value.length ? (t(), s("div", Ws, [
          (t(!0), s(b, null, z(se.value, (l) => (t(), s("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[8] || (r[8] = (h) => oe("filter", h.currentTarget))
          }, [
            f(V, { name: "filter" }),
            _(v(Xe(l).name) + " " + v(Xe(l).op) + " ", 1),
            u("b", null, v(Xe(l).val), 1)
          ]))), 128)),
          (t(!0), s(b, null, z(ne.value, (l) => (t(), s("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[9] || (r[9] = (h) => oe("sort", h.currentTarget))
          }, [
            f(V, { name: "sort" }),
            _(v(w.value[l.prop].name) + " ", 1),
            u("b", null, v(l.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          f(q, {
            variant: "ghost",
            size: "sm",
            onClick: na
          }, {
            default: U(() => [
              _("Tout effacer")
            ]),
            _: 1
          })
        ])) : g("", !0),
        p.value.layout === "table" ? (t(), s(b, { key: 1 }, [
          u("div", Ks, [
            u("table", {
              class: "at-table at-dv-table",
              style: te({ width: ra.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                Gs,
                (t(!0), s(b, null, z(x.value, (l) => (t(), s("col", {
                  key: l.key,
                  style: te({ width: Qe(l) + "px" })
                }, null, 4))), 128)),
                Js
              ]),
              u("thead", null, [
                u("tr", null, [
                  u("th", Ys, [
                    u("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: tt.value,
                      indeterminate: ua.value,
                      onChange: ca
                    }, null, 40, Xs)
                  ]),
                  (t(!0), s(b, null, z(x.value, (l) => (t(), s("th", {
                    key: l.key,
                    class: I({ "at-num": l.type === "number" })
                  }, [
                    u("span", Zs, [
                      f(V, {
                        name: E(Ie)(l)
                      }, null, 8, ["name"]),
                      _(v(l.name), 1)
                    ]),
                    u("span", {
                      class: I(["at-dv-resize", et.value === l.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ie((h) => ia(h, l), ["prevent"])
                    }, null, 42, Qs)
                  ], 2))), 128)),
                  u("th", en, [
                    f(q, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: r[10] || (r[10] = (l) => oe("props", l.currentTarget))
                    })
                  ])
                ])
              ]),
              (t(!0), s(b, null, z(ue.value, (l) => (t(), s("tbody", {
                key: l.key
              }, [
                j.value ? (t(), s("tr", tn, [
                  u("td", {
                    colspan: x.value.length + 2
                  }, [
                    u("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !ge(l.key),
                      onClick: (h) => yt(l.key)
                    }, [
                      f(V, {
                        name: "chevron-down",
                        class: I({ "at-rot": ge(l.key) })
                      }, null, 8, ["class"]),
                      l.option ? (t(), F(ce, {
                        key: 0,
                        prop: j.value,
                        row: Z(l.key)
                      }, null, 8, ["prop", "row"])) : (t(), s("span", nn, v(Fe.value), 1)),
                      u("span", ln, v(l.rows.length), 1)
                    ], 8, sn)
                  ], 8, an)
                ])) : g("", !0),
                ge(l.key) ? g("", !0) : (t(), s(b, { key: 1 }, [
                  (t(!0), s(b, null, z(l.rows, (h) => (t(), s("tr", {
                    key: m(h),
                    "aria-selected": J.value.includes(m(h)) ? "true" : void 0
                  }, [
                    u("td", rn, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: J.value.includes(m(h)),
                        onChange: (B) => da(h)
                      }, null, 40, un)
                    ]),
                    (t(!0), s(b, null, z(x.value, (B) => (t(), s("td", {
                      key: B.key,
                      class: I({ "at-num": B.type === "number", "at-dv-titlecell": B.type === "title", "is-edit": B.type !== "title" && E(Ve)(B) }),
                      onClick: (Q) => va(Q, h, B)
                    }, [
                      f(ce, {
                        prop: B,
                        row: h
                      }, null, 8, ["prop", "row"]),
                      B.type === "title" ? (t(), s("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ie((Q) => c("open", h), ["stop"])
                      }, "Ouvrir", 8, cn)) : g("", !0)
                    ], 10, dn))), 128)),
                    pn
                  ], 8, on))), 128)),
                  u("tr", vn, [
                    mn,
                    u("td", {
                      colspan: x.value.length + 1
                    }, [
                      u("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (h) => me(j.value ? Z(l.key) : {})
                      }, [
                        f(V, { name: "plus" }),
                        _(v(o.newLabel), 1)
                      ], 8, gn)
                    ], 8, hn)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  fn,
                  (t(!0), s(b, null, z(x.value, (l) => (t(), s("td", {
                    key: l.key,
                    class: I({ "at-num": l.type === "number" })
                  }, [
                    at(l) ? (t(), s(b, { key: 0 }, [
                      _(v(at(l).label) + " ", 1),
                      u("b", null, v(at(l).value), 1)
                    ], 64)) : g("", !0)
                  ], 2))), 128)),
                  bn
                ])
              ])
            ], 4)
          ]),
          J.value.length ? (t(), s("div", yn, [
            u("span", null, [
              u("b", kn, v(J.value.length), 1),
              _(" sélectionnée" + v(J.value.length > 1 ? "s" : ""), 1)
            ]),
            f(q, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: pa
            }, {
              default: U(() => [
                _("Supprimer")
              ]),
              _: 1
            }),
            f(q, {
              variant: "ghost",
              size: "sm",
              onClick: r[11] || (r[11] = (l) => J.value = [])
            }, {
              default: U(() => [
                _("Désélectionner")
              ]),
              _: 1
            })
          ])) : g("", !0)
        ], 64)) : p.value.layout === "board" ? (t(), s("div", _n, [
          j.value ? (t(!0), s(b, { key: 1 }, z(ue.value, (l) => {
            var h;
            return t(), s("div", {
              key: l.key,
              class: I(["at-dv-col", be.value === l.key && "over"]),
              onDragover: ie((B) => be.value = l.key, ["prevent"]),
              onDragleave: r[12] || (r[12] = ie((B) => be.value = null, ["self"])),
              onDrop: ie((B) => ma(l.key), ["prevent"])
            }, [
              u("div", Mn, [
                l.option ? (t(), F(ce, {
                  key: 0,
                  prop: j.value,
                  row: Z(l.key)
                }, null, 8, ["prop", "row"])) : (t(), s("span", An, v(Fe.value), 1)),
                u("span", Cn, v(l.rows.length), 1),
                Sn,
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((h = l.option) == null ? void 0 : h.label) ?? Fe.value}`,
                  onClick: (B) => me(Z(l.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", Vn, [
                (t(!0), s(b, null, z(l.rows, (B) => (t(), s("button", {
                  key: m(B),
                  type: "button",
                  class: I(["at-dv-card", Be.value === m(B) && "dragging"]),
                  draggable: "true",
                  onDragstart: (Q) => _t(Q, B),
                  onDragend: Ee,
                  onClick: (Q) => c("open", B)
                }, [
                  u("span", zn, v(B[C.value] || "Sans titre"), 1),
                  R.value.some((Q) => !E(ae)(E(X)(B, Q)) || Q.type === "checkbox") ? (t(), s("span", Ln, [
                    (t(!0), s(b, null, z(R.value, (Q) => (t(), s(b, {
                      key: Q.key
                    }, [
                      E(ae)(E(X)(B, Q)) ? g("", !0) : (t(), F(ce, {
                        key: 0,
                        prop: Q,
                        row: B
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : g("", !0)
                ], 42, Tn))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (B) => me(Z(l.key))
                }, [
                  f(V, { name: "plus" }),
                  _(v(o.newLabel), 1)
                ], 8, Dn)
              ])
            ], 42, $n);
          }), 128)) : (t(), s("div", wn, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (t(), s("div", Bn, [
          N.value.length ? (t(), s("div", Un, [
            (t(!0), s(b, null, z(ue.value, (l) => (t(), s(b, {
              key: l.key
            }, [
              j.value ? (t(), s("div", Pn, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(l.key),
                  onClick: (h) => yt(l.key)
                }, [
                  f(V, {
                    name: "chevron-down",
                    class: I({ "at-rot": ge(l.key) })
                  }, null, 8, ["class"]),
                  l.option ? (t(), F(ce, {
                    key: 0,
                    prop: j.value,
                    row: Z(l.key)
                  }, null, 8, ["prop", "row"])) : (t(), s("span", On, v(Fe.value), 1)),
                  u("span", In, v(l.rows.length), 1)
                ], 8, Fn)
              ])) : g("", !0),
              ge(l.key) ? g("", !0) : (t(!0), s(b, { key: 1 }, z(l.rows, (h) => (t(), s("button", {
                key: m(h),
                type: "button",
                class: "at-dv-li",
                onClick: (B) => c("open", h)
              }, [
                u("span", qn, v(h[C.value] || "Sans titre"), 1),
                u("span", xn, [
                  (t(!0), s(b, null, z(R.value, (B) => (t(), s(b, {
                    key: B.key
                  }, [
                    E(ae)(E(X)(h, B)) ? g("", !0) : (t(), F(ce, {
                      key: 0,
                      prop: B,
                      row: h
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, Nn))), 128))
            ], 64))), 128)),
            u("div", Hn, [
              u("button", {
                type: "button",
                class: "at-dv-new",
                onClick: r[14] || (r[14] = (l) => me())
              }, [
                f(V, { name: "plus" }),
                _(v(o.newLabel), 1)
              ])
            ])
          ])) : (t(), s("div", En, [
            _("Aucun élément ne correspond à cette vue."),
            f(q, {
              size: "sm",
              icon: "plus",
              onClick: r[13] || (r[13] = (l) => me())
            }, {
              default: U(() => [
                _(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (t(), s(b, { key: 4 }, [
          u("div", jn, [
            u("span", Rn, v(E(cs)(Ue.value)), 1),
            f(q, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: r[15] || (r[15] = (l) => p.value.month = E(At)(Ue.value, -1))
            }),
            f(q, {
              size: "sm",
              onClick: r[16] || (r[16] = (l) => p.value.month = E(Se)().slice(0, 7))
            }, {
              default: U(() => [
                _("Aujourd’hui")
              ]),
              _: 1
            }),
            f(q, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: r[17] || (r[17] = (l) => p.value.month = E(At)(Ue.value, 1))
            }),
            u("span", Wn, [
              re.value ? (t(), s(b, { key: 0 }, [
                _("Par " + v(w.value[re.value].name.toLowerCase()), 1),
                $t.value ? (t(), s(b, { key: 0 }, [
                  _(" · " + v($t.value) + " sans date", 1)
                ], 64)) : g("", !0)
              ], 64)) : (t(), s(b, { key: 1 }, [
                _("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", Kn, [
            u("div", Gn, [
              (t(), s(b, null, z(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (l) => u("div", {
                key: l,
                class: "at-dv-dow"
              }, v(l), 1)), 64))
            ]),
            u("div", Jn, [
              (t(!0), s(b, null, z(ga.value, (l) => (t(), s("div", {
                key: l.iso,
                class: I(["at-dv-day", l.outside && "out", l.today && "today", be.value === l.iso && "over"]),
                onDragover: ie((h) => be.value = l.iso, ["prevent"]),
                onDrop: ie((h) => ha(l.iso), ["prevent"])
              }, [
                u("div", Xn, [
                  u("span", null, v(l.day), 1),
                  re.value ? (t(), s("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${E(rt)(l.iso)}`,
                    onClick: (h) => me({ [re.value]: l.iso })
                  }, [
                    f(V, { name: "plus" })
                  ], 8, Zn)) : g("", !0)
                ]),
                (t(!0), s(b, null, z(l.rows, (h) => (t(), s("button", {
                  key: m(h),
                  type: "button",
                  class: I(["at-dv-calitem", ya(h) && "done"]),
                  draggable: "true",
                  onDragstart: (B) => _t(B, h),
                  onDragend: Ee,
                  onClick: (B) => c("open", h)
                }, [
                  u("span", {
                    class: "dot",
                    style: te({ background: ba(h) })
                  }, null, 4),
                  u("span", null, v(h[C.value] || "Sans titre"), 1)
                ], 42, Qn))), 128))
              ], 42, Yn))), 128))
            ])
          ])
        ], 64)),
        f(de, {
          open: E(Re),
          "onUpdate:open": r[18] || (r[18] = (l) => ye(Re) ? Re.value = l : null),
          anchor: pe.value
        }, {
          default: U(() => [
            u("div", el, [
              tl,
              (t(!0), s(b, null, z(E(Oe), (l) => (t(), s("button", {
                key: l.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (h) => Yt(l.value)
              }, [
                f(V, {
                  name: l.icon
                }, null, 8, ["name"]),
                _(v(l.label), 1)
              ], 8, al))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: E(We),
          "onUpdate:open": r[19] || (r[19] = (l) => ye(We) ? We.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", sl, [
              nl,
              u("div", ll, [
                p.value.filters.length ? g("", !0) : (t(), s("span", ol, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), s(b, null, z(p.value.filters, (l) => (t(), s("div", {
                  key: l.id,
                  class: "at-rule"
                }, [
                  u("div", rl, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => l.prop = h,
                      "aria-label": "Propriété",
                      onChange: (h) => ta(l)
                    }, [
                      (t(!0), s(b, null, z(o.schema, (h) => (t(), s("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, ul))), 128))
                    ], 40, il), [
                      [_e, l.prop]
                    ]),
                    f(V, { name: "chevron-down" })
                  ]),
                  u("div", dl, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => l.op = h,
                      "aria-label": "Condition"
                    }, [
                      (t(!0), s(b, null, z(aa(l), (h) => (t(), s("option", {
                        key: h,
                        value: h
                      }, v(E(Mt)[h]), 9, pl))), 128))
                    ], 8, cl), [
                      [_e, l.op]
                    ]),
                    f(V, { name: "chevron-down" })
                  ]),
                  gt(l) ? (t(), s(b, { key: 0 }, [
                    Le(l) === "options" ? (t(), s("div", vl, [
                      W(u("select", {
                        "onUpdate:modelValue": (h) => l.value = h,
                        "aria-label": "Valeur"
                      }, [
                        hl,
                        (t(!0), s(b, null, z(E($e)(w.value[l.prop]), (h) => (t(), s("option", {
                          key: h.value,
                          value: h.value
                        }, v(h.label), 9, gl))), 128))
                      ], 8, ml), [
                        [_e, l.value]
                      ]),
                      f(V, { name: "chevron-down" })
                    ])) : Le(l) === "date" ? W((t(), s("input", {
                      key: 1,
                      "onUpdate:modelValue": (h) => l.value = h,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, fl)), [
                      [ke, l.value]
                    ]) : Le(l) === "number" ? W((t(), s("input", {
                      key: 2,
                      "onUpdate:modelValue": (h) => l.value = h,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, bl)), [
                      [ke, l.value]
                    ]) : W((t(), s("input", {
                      key: 3,
                      "onUpdate:modelValue": (h) => l.value = h,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, yl)), [
                      [ke, l.value]
                    ])
                  ], 64)) : (t(), s("span", kl)),
                  f(q, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (h) => ft(p.value.filters, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", _l, [
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: ea
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
        f(de, {
          open: E(Ke),
          "onUpdate:open": r[20] || (r[20] = (l) => ye(Ke) ? Ke.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", wl, [
              $l,
              u("div", Ml, [
                p.value.sorts.length ? g("", !0) : (t(), s("span", Al, "Aucun tri : ordre des données.")),
                (t(!0), s(b, null, z(p.value.sorts, (l) => (t(), s("div", {
                  key: l.id,
                  class: "at-rule sort"
                }, [
                  u("div", Cl, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => l.prop = h,
                      "aria-label": "Propriété"
                    }, [
                      (t(!0), s(b, null, z(o.schema, (h) => (t(), s("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, Vl))), 128))
                    ], 8, Sl), [
                      [_e, l.prop]
                    ]),
                    f(V, { name: "chevron-down" })
                  ]),
                  u("div", Tl, [
                    W(u("select", {
                      "onUpdate:modelValue": (h) => l.dir = h,
                      "aria-label": "Sens"
                    }, Bl, 8, zl), [
                      [_e, l.dir]
                    ]),
                    f(V, { name: "chevron-down" })
                  ]),
                  f(q, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (h) => ft(p.value.sorts, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", El, [
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: sa
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
        f(de, {
          open: E(Ge),
          "onUpdate:open": r[22] || (r[22] = (l) => ye(Ge) ? Ge.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", Ul, [
              u("div", Pl, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (t(), s("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: r[21] || (r[21] = (l) => Ze(null))
              }, [
                f(V, { name: "x" }),
                _("Aucun groupe"),
                p.value.groupBy ? g("", !0) : (t(), F(V, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : g("", !0),
              (t(!0), s(b, null, z(A.value, (l) => (t(), s("button", {
                key: l.key,
                type: "button",
                class: "at-menu-item",
                onClick: (h) => Ze(l.key)
              }, [
                f(V, {
                  name: E(Ie)(l)
                }, null, 8, ["name"]),
                _(v(l.name), 1),
                H.value === l.key ? (t(), F(V, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : g("", !0)
              ], 8, Fl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: E(Je),
          "onUpdate:open": r[26] || (r[26] = (l) => ye(Je) ? Je.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: U(() => [
            u("div", Ol, [
              Il,
              (t(!0), s(b, null, z(T.value, (l, h) => (t(), s("div", {
                key: l.key,
                class: I(["at-menu-item", "at-pi", De.value === h && "drop"]),
                draggable: l.type !== "title",
                onDragstart: (B) => Me.value = h,
                onDragover: ie((B) => De.value = h, ["prevent"]),
                onDrop: ie((B) => oa(h), ["prevent"]),
                onDragend: r[23] || (r[23] = (B) => {
                  Me.value = null, De.value = null;
                })
              }, [
                f(V, {
                  name: "grip",
                  class: "grip"
                }),
                f(V, {
                  name: E(Ie)(l)
                }, null, 8, ["name"]),
                u("span", ql, v(l.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${l.name}`,
                  checked: l.type === "title" || !p.value.hidden.includes(l.key),
                  disabled: l.type === "title",
                  onChange: (B) => la(l)
                }, null, 40, xl)
              ], 42, Nl))), 128)),
              Hl,
              u("div", jl, [
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[24] || (r[24] = (l) => bt(!0))
                }, {
                  default: U(() => [
                    _("Tout afficher")
                  ]),
                  _: 1
                }),
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[25] || (r[25] = (l) => bt(!1))
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
        f(de, {
          open: E(Ye),
          "onUpdate:open": r[30] || (r[30] = (l) => ye(Ye) ? Ye.value = l : null),
          anchor: pe.value
        }, {
          default: U(() => [
            u("div", Rl, [
              Wl,
              W(u("input", {
                "onUpdate:modelValue": r[27] || (r[27] = (l) => p.value.name = l),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", Kl, [
                (t(!0), s(b, null, z(E(Oe), (l) => (t(), s("button", {
                  key: l.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === l.value,
                  onClick: (h) => Xt(l.value)
                }, [
                  f(V, {
                    name: l.icon
                  }, null, 8, ["name"]),
                  _(v(l.label), 1)
                ], 8, Gl))), 128))
              ]),
              p.value.layout !== "calendar" ? (t(), s("div", Jl, [
                u("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                u("div", Yl, [
                  u("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: r[28] || (r[28] = (l) => Ze(l.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (t(), s("option", Zl, "Aucun")) : g("", !0),
                    (t(!0), s(b, null, z(A.value, (l) => (t(), s("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, Ql))), 128))
                  ], 40, Xl),
                  f(V, { name: "chevron-down" })
                ])
              ])) : (t(), s("div", eo, [
                to,
                u("div", ao, [
                  u("select", {
                    value: re.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: r[29] || (r[29] = (l) => p.value.dateProp = l.target.value)
                  }, [
                    (t(!0), s(b, null, z(y.value, (l) => (t(), s("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, no))), 128))
                  ], 40, so),
                  f(V, { name: "chevron-down" })
                ])
              ])),
              o.lockViews ? g("", !0) : (t(), s(b, { key: 2 }, [
                lo,
                u("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: Zt
                }, [
                  f(V, { name: "copy" }),
                  _("Dupliquer la vue")
                ]),
                u("button", {
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: e.value.length < 2,
                  onClick: Qt
                }, [
                  f(V, { name: "trash" }),
                  _("Supprimer la vue")
                ], 8, oo)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(vt, {
          open: st.value,
          "onUpdate:open": r[31] || (r[31] = (l) => st.value = l),
          prop: ((k = fe.value) == null ? void 0 : k.prop) ?? null,
          row: (Y = fe.value) == null ? void 0 : Y.row,
          anchor: kt.value,
          onUpdate: r[32] || (r[32] = (l) => fe.value && c("update", fe.value.row, fe.value.prop.key, l))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), io = {
  key: 0,
  class: "at-drawer-wrap"
}, uo = ["aria-label"], co = { class: "at-drawer__head" }, po = { class: "at-drawer__crumb" }, vo = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), mo = { class: "at-drawer__body" }, ho = /* @__PURE__ */ P({
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
    const a = G(d, "open"), n = O();
    let e = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return ve(a, (c) => {
      var m;
      c ? (e = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = n.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (m = e == null ? void 0 : e.focus) == null || m.call(e));
    }, { immediate: !0 }), dt(() => document.removeEventListener("keydown", i)), (c, m) => (t(), F(ct, { to: "body" }, [
      f(Bt, { name: "at-drawer" }, {
        default: U(() => [
          a.value ? (t(), s("div", io, [
            u("div", {
              class: "at-overlay",
              onClick: m[0] || (m[0] = (p) => a.value = !1)
            }),
            u("aside", {
              ref_key: "panel",
              ref: n,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: te({ width: `min(${c.width}px, 100%)` })
            }, [
              u("header", co, [
                u("span", po, [
                  L(c.$slots, "crumb", {}, () => [
                    _(v(c.label), 1)
                  ])
                ]),
                vo,
                L(c.$slots, "actions"),
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })
              ]),
              u("div", mo, [
                L(c.$slots, "default")
              ])
            ], 12, uo)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), go = ["aria-label"], fo = {
  key: 0,
  class: "at-menu-label"
}, Nt = /* @__PURE__ */ P({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const a = O();
    function n(e) {
      var p;
      const i = [...((p = a.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!i.length) return;
      const c = i.indexOf(document.activeElement), m = (w) => {
        e.preventDefault(), i[(w + i.length) % i.length].focus();
      };
      e.key === "ArrowDown" ? m(c + 1) : e.key === "ArrowUp" ? m(c < 0 ? i.length - 1 : c - 1) : e.key === "Home" ? m(0) : e.key === "End" && m(i.length - 1);
    }
    return (e, i) => (t(), s("div", {
      ref_key: "el",
      ref: a,
      class: "at-menu",
      role: "menu",
      "aria-label": e.label,
      style: te(e.minWidth ? { minWidth: e.minWidth + "px" } : void 0),
      onKeydown: n
    }, [
      e.label ? (t(), s("div", fo, v(e.label), 1)) : g("", !0),
      L(e.$slots, "default")
    ], 44, go));
  }
}), bo = /* @__PURE__ */ P({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const a = O(!1);
    function n(e) {
      e.target.closest('.at-menu-item[role="menuitem"]') && (a.value = !1);
    }
    return (e, i) => (t(), F(de, {
      open: a.value,
      "onUpdate:open": i[0] || (i[0] = (c) => a.value = c),
      align: e.align
    }, {
      trigger: U((c) => [
        L(e.$slots, "trigger", $a(Ma(c)))
      ]),
      default: U(() => [
        f(Nt, {
          label: e.label,
          "min-width": e.minWidth,
          onClick: n
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
}), yo = { class: "at-empty" }, ko = /* @__PURE__ */ P({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (a, n) => (t(), s("div", yo, [
      L(a.$slots, "default", {}, () => [
        _(v(a.message), 1)
      ]),
      L(a.$slots, "action")
    ]));
  }
});
let St = 0;
function qt(d = "at") {
  return St += 1, `${d}-${St}`;
}
const _o = { class: "at-field" }, wo = ["for"], $o = ["id"], Mo = ["id"], it = /* @__PURE__ */ P({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const n = d.id ?? qt("field");
    return (e, i) => (t(), s("div", _o, [
      e.label ? (t(), s("label", {
        key: 0,
        class: "at-label",
        for: E(n)
      }, v(e.label), 9, wo)) : g("", !0),
      L(e.$slots, "default", {
        id: E(n),
        invalid: !!e.error,
        describedby: e.error || e.hint ? E(n) + "-hint" : void 0
      }),
      e.error ? (t(), s("span", {
        key: 1,
        id: E(n) + "-hint",
        class: "at-hint at-hint--error"
      }, v(e.error), 9, $o)) : e.hint ? (t(), s("span", {
        key: 2,
        id: E(n) + "-hint",
        class: "at-hint"
      }, v(e.hint), 9, Mo)) : g("", !0)
    ]));
  }
}), Ao = ["role", "aria-label", "aria-hidden"], xt = /* @__PURE__ */ P({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("span", {
      class: I(["at-tile", a.size !== "sm" && `at-tile--${a.size}`, a.color === "neutral" ? "at-tile--neutral" : `at-tone-${a.color}`]),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true"
    }, [
      f(V, { name: a.name }, null, 8, ["name"])
    ], 10, Ao));
  }
}), He = (d, a) => {
  const n = d.__vccOpts || d;
  for (const [e, i] of a)
    n[e] = i;
  return n;
}, Co = {}, So = { class: "at-kbd" };
function Vo(d, a) {
  return t(), s("kbd", So, [
    L(d.$slots, "default")
  ]);
}
const mt = /* @__PURE__ */ He(Co, [["render", Vo]]), To = {
  key: 0,
  class: "at-input-wrap"
}, zo = ["type", "placeholder", "disabled", "aria-invalid"], Lo = ["type", "placeholder", "disabled", "aria-invalid"], ut = /* @__PURE__ */ P({
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
  setup(d, { expose: a }) {
    const n = G(d, "modelValue"), e = d, i = O();
    return a({ focus: () => {
      var c;
      return (c = i.value) == null ? void 0 : c.focus();
    }, el: i }), (c, m) => c.icon || c.kbd ? (t(), s("div", To, [
      c.icon ? (t(), F(V, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : g("", !0),
      W(u("input", ee(c.$attrs, {
        ref_key: "el",
        ref: i,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => n.value = p),
        class: "at-input",
        style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, zo), [
        [lt, n.value]
      ]),
      c.kbd ? (t(), F(mt, { key: 1 }, {
        default: U(() => [
          _(v(c.kbd), 1)
        ]),
        _: 1
      })) : g("", !0)
    ])) : W((t(), s("input", ee({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: i,
      "onUpdate:modelValue": m[1] || (m[1] = (p) => n.value = p),
      class: "at-input",
      style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, Lo)), [
      [lt, n.value]
    ]);
  }
}), Do = { class: "at-login__panel" }, Bo = {
  key: 0,
  class: "at-login__brand"
}, Eo = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, Uo = ["aria-labelledby"], Po = { class: "at-login__head" }, Fo = ["id"], Oo = {
  key: 0,
  class: "at-login__desc"
}, Io = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, No = /* @__PURE__ */ u("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ u("span", null, "ou")
], -1), qo = {
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
  setup(d, { expose: a, emit: n }) {
    const e = G(d, "username"), i = G(d, "password"), c = G(d, "remember"), m = d, p = n, w = qt("login"), M = S(() => m.loading !== !1), C = S(() => {
      var A;
      return (m.mark ?? ((A = m.brand) == null ? void 0 : A.trim().charAt(0)) ?? "").toUpperCase();
    }), T = O(), x = O();
    function R() {
      var A, y;
      if (!M.value) {
        if (!e.value.trim()) return (A = T.value) == null ? void 0 : A.focus();
        if (!i.value) return (y = x.value) == null ? void 0 : y.focus();
        p("submit", { username: e.value.trim(), password: i.value, remember: c.value });
      }
    }
    return a({
      focusUsername: () => {
        var A;
        return (A = T.value) == null ? void 0 : A.focus();
      },
      focusPassword: () => {
        var A;
        return (A = x.value) == null ? void 0 : A.focus();
      }
    }), (A, y) => (t(), F(Dt(A.as), { class: "at-login" }, {
      default: U(() => [
        u("div", Do, [
          A.brand || A.$slots.brand ? (t(), s("div", Bo, [
            L(A.$slots, "brand", {}, () => [
              u("span", Eo, v(C.value), 1),
              _(v(A.brand), 1)
            ])
          ])) : g("", !0),
          u("section", {
            class: "at-login__card",
            "aria-labelledby": E(w)
          }, [
            u("header", Po, [
              u("h1", {
                id: E(w),
                class: "at-login__title"
              }, v(A.title), 9, Fo),
              A.description ? (t(), s("p", Oo, v(A.description), 1)) : g("", !0)
            ]),
            A.error ? (t(), s("p", Io, v(A.error), 1)) : g("", !0),
            L(A.$slots, "default", {}, () => [
              u("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: ie(R, ["prevent"])
              }, [
                f(it, { label: A.usernameLabel }, {
                  default: U(($) => [
                    f(ut, {
                      id: $.id,
                      ref_key: "usernameInput",
                      ref: T,
                      modelValue: e.value,
                      "onUpdate:modelValue": y[0] || (y[0] = (D) => e.value = D),
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
                f(it, { label: A.passwordLabel }, {
                  default: U(($) => [
                    f(ut, {
                      id: $.id,
                      ref_key: "passwordInput",
                      ref: x,
                      modelValue: i.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (D) => i.value = D),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: M.value,
                      invalid: !!A.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                A.rememberable ? (t(), F(Pt, {
                  key: 0,
                  modelValue: c.value,
                  "onUpdate:modelValue": y[2] || (y[2] = ($) => c.value = $),
                  label: A.rememberLabel,
                  disabled: M.value
                }, null, 8, ["modelValue", "label", "disabled"])) : g("", !0),
                f(q, {
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
              A.passkey ? (t(), s(b, { key: 0 }, [
                No,
                f(q, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: A.loading === "passkey",
                  disabled: M.value,
                  onClick: y[3] || (y[3] = ($) => p("passkey"))
                }, {
                  default: U(() => [
                    _(v(A.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : g("", !0)
            ])
          ], 8, Uo),
          A.$slots.footer ? (t(), s("footer", qo, [
            L(A.$slots, "footer")
          ])) : g("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), Ho = ["role", "aria-checked", "disabled"], jo = {
  key: 2,
  class: "at-menu-meta"
}, Ro = /* @__PURE__ */ P({
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
    return (a, n) => (t(), s("button", {
      type: "button",
      class: I(["at-menu-item", a.danger && "at-menu-item--danger"]),
      role: a.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": a.checked !== void 0 ? a.checked : void 0,
      disabled: a.disabled,
      onClick: n[0] || (n[0] = (e) => a.$emit("select", e))
    }, [
      a.icon ? (t(), F(V, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : g("", !0),
      L(a.$slots, "default", {}, () => [
        _(v(a.label), 1)
      ]),
      a.kbd ? (t(), F(mt, { key: 1 }, {
        default: U(() => [
          _(v(a.kbd), 1)
        ]),
        _: 1
      })) : a.meta ? (t(), s("span", jo, v(a.meta), 1)) : a.checked ? (t(), F(V, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : g("", !0)
    ], 10, Ho));
  }
}), Wo = {}, Ko = { class: "at-menu-label" };
function Go(d, a) {
  return t(), s("div", Ko, [
    L(d.$slots, "default")
  ]);
}
const Jo = /* @__PURE__ */ He(Wo, [["render", Go]]), Yo = {}, Xo = {
  class: "at-menu-sep",
  role: "separator"
};
function Zo(d, a) {
  return t(), s("div", Xo);
}
const Qo = /* @__PURE__ */ He(Yo, [["render", Zo]]), er = {
  key: 0,
  class: "at-modal-wrap"
}, tr = ["aria-label"], ar = { class: "at-modal__head" }, sr = { style: { flex: "1", "min-width": "0" } }, nr = { class: "at-modal__title" }, lr = {
  key: 0,
  class: "at-modal__desc"
}, or = { class: "at-modal__body" }, rr = {
  key: 0,
  class: "at-modal__foot"
}, ir = /* @__PURE__ */ P({
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
    const a = G(d, "open"), n = O();
    let e = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return ve(a, (c) => {
      var m;
      c ? (e = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = n.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (m = e == null ? void 0 : e.focus) == null || m.call(e));
    }, { immediate: !0 }), dt(() => document.removeEventListener("keydown", i)), (c, m) => (t(), F(ct, { to: "body" }, [
      f(Bt, { name: "at-modal" }, {
        default: U(() => [
          a.value ? (t(), s("div", er, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: m[0] || (m[0] = (p) => c.dismissible && (a.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: n,
              class: I(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", ar, [
                u("div", sr, [
                  u("h2", nr, v(c.title), 1),
                  c.description ? (t(), s("p", lr, v(c.description), 1)) : g("", !0)
                ]),
                c.dismissible ? (t(), F(q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })) : g("", !0)
              ]),
              u("div", or, [
                L(c.$slots, "default")
              ]),
              c.$slots.footer ? (t(), s("footer", rr, [
                L(c.$slots, "footer", {
                  close: () => a.value = !1
                })
              ])) : g("", !0)
            ], 10, tr)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ur = ["aria-label"], dr = {
  key: 0,
  class: "at-nav-label"
}, cr = /* @__PURE__ */ P({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("nav", {
      class: "at-nav",
      "aria-label": a.label
    }, [
      a.label ? (t(), s("div", dr, v(a.label), 1)) : g("", !0),
      L(a.$slots, "default")
    ], 8, ur));
  }
}), pr = ["href", "aria-current"], vr = { class: "at-ellipsis" }, mr = {
  key: 3,
  class: "at-nav-count"
}, hr = /* @__PURE__ */ P({
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
    return (a, n) => (t(), s("a", {
      class: "at-nav-item",
      href: a.href ?? "#",
      "aria-current": a.active ? "page" : void 0,
      onClick: n[0] || (n[0] = (e) => {
        !a.href && e.preventDefault(), a.$emit("click", e);
      })
    }, [
      a.mark ? (t(), s("span", {
        key: 0,
        class: "at-nav-mark",
        style: te({ background: a.mark })
      }, null, 4)) : a.icon && a.tile ? (t(), F(xt, {
        key: 1,
        name: a.icon,
        color: a.tile
      }, null, 8, ["name", "color"])) : a.icon ? (t(), F(V, {
        key: 2,
        name: a.icon
      }, null, 8, ["name"])) : g("", !0),
      u("span", vr, [
        L(a.$slots, "default", {}, () => [
          _(v(a.label), 1)
        ])
      ]),
      a.count != null && a.count !== "" ? (t(), s("span", mr, v(a.count), 1)) : g("", !0)
    ], 8, pr));
  }
}), gr = {
  key: 0,
  class: "at-page__head"
}, fr = { class: "t-heading-1" }, br = { key: 0 }, yr = /* @__PURE__ */ P({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (a, n) => (t(), s("div", {
      class: I(["at-page", a.wide && "at-page--wide"])
    }, [
      a.title || a.$slots.head ? (t(), s("div", gr, [
        L(a.$slots, "head", {}, () => [
          u("h1", fr, v(a.title), 1),
          a.description ? (t(), s("p", br, v(a.description), 1)) : g("", !0)
        ])
      ])) : g("", !0),
      L(a.$slots, "default")
    ], 2));
  }
}), kr = { class: "at-proplist" }, _r = ["disabled", "onClick"], wr = /* @__PURE__ */ P({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: a }) {
    const n = d, e = a, i = S(() => n.schema.filter((M) => {
      var C;
      return M.type !== "title" && !((C = n.exclude) != null && C.includes(M.key));
    })), c = O(null), m = O(null), p = O(!1);
    function w(M, C) {
      if (Ve(C)) {
        if (C.type === "checkbox") {
          e("update", C.key, !n.row[C.key]);
          return;
        }
        m.value = M.currentTarget, c.value = C, p.value = !0;
      }
    }
    return (M, C) => (t(), s(b, null, [
      u("dl", kr, [
        (t(!0), s(b, null, z(i.value, (T) => (t(), s(b, {
          key: T.key
        }, [
          u("dt", null, [
            f(V, {
              name: E(Ie)(T)
            }, null, 8, ["name"]),
            _(v(T.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !E(Ve)(T),
              onClick: (x) => w(x, T)
            }, [
              f(ce, {
                prop: T,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, _r)
          ])
        ], 64))), 128))
      ]),
      f(vt, {
        open: p.value,
        "onUpdate:open": C[0] || (C[0] = (T) => p.value = T),
        prop: c.value,
        row: M.row,
        anchor: m.value,
        onUpdate: C[1] || (C[1] = (T) => c.value && e("update", c.value.key, T))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), $r = ["aria-label"], Mr = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Ar = /* @__PURE__ */ P({
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
    const a = G(d, "modelValue");
    return (n, e) => (t(), s("div", {
      class: "at-segment",
      role: "group",
      "aria-label": n.label
    }, [
      (t(!0), s(b, null, z(n.items, (i) => (t(), s("button", {
        key: String(i.value),
        type: "button",
        "aria-pressed": a.value === i.value,
        "aria-label": i.iconOnly ? i.label : void 0,
        title: i.iconOnly ? i.label : void 0,
        disabled: i.disabled,
        onClick: (c) => a.value = i.value
      }, [
        i.icon ? (t(), F(V, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : g("", !0),
        i.iconOnly ? g("", !0) : (t(), s(b, { key: 1 }, [
          _(v(i.label), 1)
        ], 64))
      ], 8, Mr))), 128))
    ], 8, $r));
  }
}), Cr = { class: "at-select" }, Sr = ["disabled", "aria-invalid"], Vr = {
  key: 0,
  value: null,
  disabled: ""
}, Tr = ["value", "disabled"], zr = /* @__PURE__ */ P({
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
    const a = G(d, "modelValue");
    return (n, e) => (t(), s("div", Cr, [
      W(u("select", ee(n.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
        disabled: n.disabled,
        "aria-invalid": n.invalid || void 0,
        style: n.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        n.placeholder ? (t(), s("option", Vr, v(n.placeholder), 1)) : g("", !0),
        (t(!0), s(b, null, z(n.options, (i) => (t(), s("option", {
          key: String(i.value),
          value: i.value,
          disabled: i.disabled
        }, v(i.label), 9, Tr))), 128))
      ], 16, Sr), [
        [_e, a.value]
      ]),
      f(V, { name: "chevron-down" })
    ]));
  }
}), Lr = {}, Dr = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Br = {
  key: 0,
  class: "at-sidebar__foot"
};
function Er(d, a) {
  return t(), s("aside", Dr, [
    L(d.$slots, "header"),
    L(d.$slots, "default"),
    d.$slots.footer ? (t(), s("div", Br, [
      L(d.$slots, "footer")
    ])) : g("", !0)
  ]);
}
const Ur = /* @__PURE__ */ He(Lr, [["render", Er]]), Pr = { class: "at-stat__label" }, Fr = { class: "at-stat__row" }, Or = { class: "at-stat__value" }, Ir = ["viewBox"], Nr = ["d"], qr = ["d"], xr = ["cx", "cy"], Hr = {
  key: 1,
  class: "at-stat__foot"
}, Vt = 220, Ae = 32, jr = /* @__PURE__ */ P({
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
    const a = d, n = S(() => {
      const e = a.spark;
      if (!e || e.length < 2) return null;
      const i = Math.min(...e), c = Math.max(...e), m = c - i || 1, p = e.map((C, T) => [2 + T * (Vt - 4) / (e.length - 1), Ae - 3 - (C - i) / m * (Ae - 8)]), w = "M" + p.map((C) => C.map((T) => T.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: w, area: `${w} L${M[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: M };
    });
    return (e, i) => (t(), s("div", {
      class: I(["at-stat", e.color && ["at-stat--striped", `at-tone-${e.color}`]])
    }, [
      u("span", Pr, v(e.label), 1),
      u("div", Fr, [
        u("span", Or, [
          L(e.$slots, "value", {}, () => [
            _(v(e.value), 1)
          ])
        ]),
        e.delta ? (t(), s("span", {
          key: 0,
          class: I(["at-stat__delta", e.trend && `at-stat__delta--${e.trend}`])
        }, v(e.delta), 3)) : g("", !0)
      ]),
      n.value ? (t(), s("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${Vt} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: n.value.area
        }, null, 8, Nr),
        u("path", {
          class: "line",
          d: n.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, qr),
        u("circle", {
          class: "end",
          cx: n.value.end[0],
          cy: n.value.end[1],
          r: "2.5"
        }, null, 8, xr)
      ], 8, Ir)) : g("", !0),
      e.foot || e.$slots.foot ? (t(), s("span", Hr, [
        L(e.$slots, "foot", {}, () => [
          _(v(e.foot), 1)
        ])
      ])) : g("", !0)
    ], 2));
  }
}), Rr = {
  key: 0,
  class: "at-toggle"
}, Wr = ["disabled"], Kr = ["disabled"], Gr = /* @__PURE__ */ P({
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
    const a = G(d, "modelValue");
    return (n, e) => n.label || n.$slots.default ? (t(), s("label", Rr, [
      W(u("input", ee(n.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: n.disabled
      }), null, 16, Wr), [
        [Ne, a.value]
      ]),
      L(n.$slots, "default", {}, () => [
        _(v(n.label), 1)
      ])
    ])) : W((t(), s("input", ee({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (i) => a.value = i),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: n.disabled
    }), null, 16, Kr)), [
      [Ne, a.value]
    ]);
  }
}), Jr = { class: "at-table-wrap" }, Yr = { class: "at-table" }, Xr = ["onClick"], Zr = { key: 0 }, Qr = ["colspan"], ei = /* @__PURE__ */ P({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (a, n) => (t(), s("div", Jr, [
      u("table", Yr, [
        u("thead", null, [
          u("tr", null, [
            (t(!0), s(b, null, z(a.columns, (e) => (t(), s("th", {
              key: e.key,
              class: I({ "at-num": e.align === "right" }),
              style: te(e.width ? { width: e.width } : void 0)
            }, v(e.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (t(!0), s(b, null, z(a.rows, (e, i) => (t(), s("tr", {
            key: a.rowKey ? e[a.rowKey] : i,
            style: te(a.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => a.$emit("rowClick", e)
          }, [
            (t(!0), s(b, null, z(a.columns, (c) => (t(), s("td", {
              key: c.key,
              class: I({ "at-num": c.align === "right" })
            }, [
              L(a.$slots, `cell-${c.key}`, {
                row: e,
                value: e[c.key]
              }, () => [
                _(v(c.format ? c.format(e[c.key], e) : e[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Xr))), 128)),
          a.rows.length ? g("", !0) : (t(), s("tr", Zr, [
            u("td", {
              colspan: a.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(a.empty ?? "Aucune donnée"), 9, Qr)
          ]))
        ])
      ])
    ]));
  }
}), ti = ["aria-label"], ai = ["aria-selected", "disabled", "onClick"], si = {
  key: 1,
  class: "at-count"
}, ni = /* @__PURE__ */ P({
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
    const a = G(d, "modelValue");
    return (n, e) => (t(), s("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": n.label
    }, [
      (t(!0), s(b, null, z(n.items, (i) => (t(), s("button", {
        key: String(i.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": a.value === i.value,
        disabled: i.disabled,
        onClick: (c) => a.value = i.value
      }, [
        i.icon ? (t(), F(V, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : g("", !0),
        _(v(i.label) + " ", 1),
        i.count != null ? (t(), s("span", si, v(i.count), 1)) : g("", !0)
      ], 8, ai))), 128))
    ], 8, ti));
  }
}), li = /* @__PURE__ */ P({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("span", {
      class: I(["at-tag", a.color !== "gray" && `at-tag--${a.color}`])
    }, [
      L(a.$slots, "default", {}, () => [
        _(v(a.label), 1)
      ])
    ], 2));
  }
}), oi = ["rows", "placeholder", "disabled", "aria-invalid"], ri = /* @__PURE__ */ P({
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
    const a = G(d, "modelValue");
    return (n, e) => W((t(), s("textarea", ee(n.$attrs, {
      "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
      class: "at-input",
      rows: n.rows ?? 3,
      placeholder: n.placeholder,
      disabled: n.disabled,
      "aria-invalid": n.invalid || void 0
    }), null, 16, oi)), [
      [ke, a.value]
    ]);
  }
}), Ht = "atelier:theme", jt = "atelier:density", Rt = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, Tt = (d, a) => {
  try {
    localStorage.setItem(d, a);
  } catch {
  }
}, zt = () => typeof document < "u" ? document.documentElement : null, Ce = O(Rt(Ht) || "system"), Wt = O(Rt(jt) || "comfortable"), Kt = O(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Lt = !1;
function Gt() {
  if (Lt || typeof window > "u") return;
  Lt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (a) => {
    Kt.value = a.matches;
  }), ve(Ce, (a) => {
    const n = zt();
    n && (a === "system" ? n.removeAttribute("data-theme") : n.dataset.theme = a, Tt(Ht, a));
  }, { immediate: !0 }), ve(Wt, (a) => {
    const n = zt();
    n && (n.dataset.density = a, Tt(jt, a));
  }, { immediate: !0 });
}
function mi() {
  Gt();
  const d = S(() => Ce.value === "system" ? Kt.value ? "dark" : "light" : Ce.value), a = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return Aa() && Ca(() => {
  }), { mode: Ce, resolved: d, toggle: a };
}
function hi() {
  return Gt(), { density: Wt };
}
const gi = {
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
}, ii = (d) => `var(--${d})`, fi = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(ii), ui = {
  AtAppShell: Ea,
  AtAvatar: Ut,
  AtBadge: Fa,
  AtBreadcrumbs: xa,
  AtButton: q,
  AtCard: Ka,
  AtCheckbox: Pt,
  AtDataView: ro,
  AtDrawer: ho,
  AtDropdown: bo,
  AtEmpty: ko,
  AtField: it,
  AtIcon: V,
  AtIconTile: xt,
  AtInput: ut,
  AtKbd: mt,
  AtLogin: xo,
  AtMenu: Nt,
  AtMenuItem: Ro,
  AtMenuLabel: Jo,
  AtMenuSeparator: Qo,
  AtModal: ir,
  AtNavGroup: cr,
  AtNavItem: hr,
  AtPage: yr,
  AtPopover: de,
  AtProgress: Ft,
  AtPropertyEditor: vt,
  AtPropertyList: wr,
  AtPropertyValue: ce,
  AtSegment: Ar,
  AtSelect: zr,
  AtSidebar: Ur,
  AtStat: jr,
  AtSwitch: Gr,
  AtTable: ei,
  AtTabs: ni,
  AtTag: li,
  AtTextarea: ri
}, bi = {
  install(d) {
    for (const [a, n] of Object.entries(ui)) d.component(a, n);
  }
};
export {
  Ea as AtAppShell,
  Ut as AtAvatar,
  Fa as AtBadge,
  xa as AtBreadcrumbs,
  q as AtButton,
  Ka as AtCard,
  Pt as AtCheckbox,
  ro as AtDataView,
  ho as AtDrawer,
  bo as AtDropdown,
  ko as AtEmpty,
  it as AtField,
  V as AtIcon,
  xt as AtIconTile,
  ut as AtInput,
  mt as AtKbd,
  xo as AtLogin,
  Nt as AtMenu,
  Ro as AtMenuItem,
  Jo as AtMenuLabel,
  Qo as AtMenuSeparator,
  ir as AtModal,
  cr as AtNavGroup,
  hr as AtNavItem,
  yr as AtPage,
  de as AtPopover,
  Ft as AtProgress,
  vt as AtPropertyEditor,
  wr as AtPropertyList,
  ce as AtPropertyValue,
  Ar as AtSegment,
  zr as AtSelect,
  Ur as AtSidebar,
  jr as AtStat,
  Gr as AtSwitch,
  ei as AtTable,
  ni as AtTabs,
  li as AtTag,
  ri as AtTextarea,
  bi as Atelier,
  Oe as LAYOUTS,
  qe as NONE,
  nt as OPS,
  Mt as OP_LABEL,
  es as addDays,
  ls as applyView,
  fi as chartColors,
  ns as compareRows,
  Ct as createView,
  ii as cssVar,
  bi as default,
  is as defaultsFromFilters,
  pi as filter,
  xe as findOption,
  rt as formatDate,
  cs as formatMonth,
  X as getValue,
  os as groupRows,
  Et as icons,
  ae as isEmpty,
  ss as matchRule,
  rs as monthGrid,
  $e as optionsOf,
  ci as registerIcons,
  At as shiftMonth,
  vi as sort,
  Se as today,
  gi as tokens,
  we as uid,
  hi as useDensity,
  qt as useId,
  mi as useTheme
};
//# sourceMappingURL=atelier.js.map

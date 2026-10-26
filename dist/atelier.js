import { defineComponent as U, computed as C, openBlock as t, createElementBlock as s, normalizeStyle as Y, normalizeClass as P, createBlock as F, createCommentVNode as g, renderSlot as D, createTextVNode as _, toDisplayString as v, ref as O, watch as ve, createElementVNode as u, createVNode as f, Fragment as y, renderList as L, resolveDynamicComponent as Bt, withCtx as E, useModel as K, withDirectives as R, mergeProps as te, vModelCheckbox as He, mergeModels as W, onBeforeUnmount as pt, Teleport as vt, nextTick as ze, unref as T, withKeys as $a, vModelDynamic as ot, shallowRef as Ma, vModelText as ke, withModifiers as ie, isRef as be, vModelSelect as _e, Transition as Et, normalizeProps as Aa, guardReactiveProps as Ca, getCurrentScope as Va, onScopeDispose as Sa } from "vue";
const Ut = {
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
function ki(d) {
  Object.assign(Ut, d);
}
const Ta = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], S = /* @__PURE__ */ U({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const a = d, n = C(() => Ut[a.name] ?? "");
    return (e, r) => (t(), s("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: e.size,
      height: e.size,
      style: Y(e.size !== 16 ? { width: e.size + "px", height: e.size + "px" } : void 0),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true",
      innerHTML: n.value
    }, null, 12, Ta));
  }
}), za = ["href", "aria-label"], La = ["type", "disabled", "aria-busy", "aria-label"], Da = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, I = /* @__PURE__ */ U({
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
    const a = d, n = C(() => [
      "at-btn",
      `at-btn--${a.variant}`,
      a.size !== "md" && `at-btn--${a.size}`,
      a.iconOnly && "at-btn--icon"
    ]);
    return (e, r) => e.href && !e.disabled ? (t(), s("a", {
      key: 0,
      href: e.href,
      class: P(n.value),
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.icon ? (t(), F(S, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : g("", !0),
      D(e.$slots, "default", {}, () => [
        _(v(e.iconOnly ? "" : e.label), 1)
      ])
    ], 10, za)) : (t(), s("button", {
      key: 1,
      type: e.type,
      class: P(n.value),
      disabled: e.disabled || e.loading,
      "aria-busy": e.loading || void 0,
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.loading ? (t(), s("span", Da)) : e.icon ? (t(), F(S, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : g("", !0),
      e.iconOnly ? g("", !0) : D(e.$slots, "default", { key: 2 }, () => [
        _(v(e.label), 1)
      ])
    ], 10, La));
  }
}), Qa = { class: "at-shell__side" }, Ba = { class: "at-shell__main" }, Ea = { class: "at-topbar" }, Ua = /* @__PURE__ */ U({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: a }) {
    const n = d, e = O(!1), r = O();
    return ve(() => n.routeKey, () => {
      e.value = !1, r.value && (r.value.scrollTop = 0);
    }), a({ closeNav: () => e.value = !1 }), (c, m) => (t(), s("div", {
      class: P(["at-shell", e.value && "at-shell--open"])
    }, [
      u("div", Qa, [
        D(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: m[0] || (m[0] = (p) => e.value = !1)
      }),
      u("div", Ba, [
        u("header", Ea, [
          f(I, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: m[1] || (m[1] = (p) => e.value = !e.value)
          }),
          D(c.$slots, "topbar")
        ]),
        u("main", {
          ref_key: "page",
          ref: r,
          class: "at-shell__page"
        }, [
          D(c.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), Fa = ["title"], Oa = ["src", "alt"], Ft = /* @__PURE__ */ U({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const a = d, n = C(() => a.name.split(/\s+/).filter(Boolean).map((e) => e[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (e, r) => (t(), s("span", {
      class: P(["at-avatar", e.size !== "sm" && `at-avatar--${e.size}`]),
      title: e.name
    }, [
      e.src ? (t(), s("img", {
        key: 0,
        src: e.src,
        alt: e.name
      }, null, 8, Oa)) : (t(), s(y, { key: 1 }, [
        _(v(n.value), 1)
      ], 64))
    ], 10, Fa));
  }
}), Pa = /* @__PURE__ */ U({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("span", {
      class: P(["at-badge", a.tone !== "neutral" && `at-badge--${a.tone}`])
    }, [
      D(a.$slots, "default", {}, () => [
        _(v(a.label), 1)
      ])
    ], 2));
  }
}), Ha = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ia = {
  key: 0,
  "aria-hidden": "true"
}, Na = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, xa = ["href", "onClick"], qa = /* @__PURE__ */ U({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (a, n) => (t(), s("nav", Ha, [
      (t(!0), s(y, null, L(a.items, (e, r) => (t(), s(y, { key: r }, [
        r > 0 ? (t(), s("span", Ia, "/")) : g("", !0),
        r === a.items.length - 1 ? (t(), s("span", Na, v(e.label), 1)) : (t(), s("a", {
          key: 2,
          href: e.href ?? "#",
          onClick: (c) => e.onClick && (c.preventDefault(), e.onClick())
        }, v(e.label), 9, xa))
      ], 64))), 128))
    ]));
  }
}), ja = {
  key: 0,
  class: "at-card__head"
}, Ra = {
  key: 0,
  class: "at-card__title"
}, Wa = {
  key: 1,
  class: "at-card__desc"
}, Ka = {
  key: 1,
  class: "at-card__foot"
}, Ga = /* @__PURE__ */ U({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (a, n) => (t(), F(Bt(a.href ? "a" : a.as || "section"), {
      href: a.href,
      class: P(["at-card", a.href && "at-card--link", a.color && ["at-card--striped", `at-tone-${a.color}`]])
    }, {
      default: E(() => [
        a.title || a.description || a.$slots.actions ? (t(), s("div", ja, [
          u("div", null, [
            a.title ? (t(), s("h3", Ra, v(a.title), 1)) : g("", !0),
            a.description ? (t(), s("p", Wa, v(a.description), 1)) : g("", !0)
          ]),
          D(a.$slots, "actions")
        ])) : g("", !0),
        D(a.$slots, "default"),
        a.$slots.footer ? (t(), s("div", Ka, [
          D(a.$slots, "footer")
        ])) : g("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), Ja = {
  key: 0,
  class: "at-toggle"
}, Za = ["indeterminate", "disabled"], Ya = ["indeterminate", "disabled"], Ot = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "AtCheckbox",
  props: /* @__PURE__ */ W({
    label: {},
    indeterminate: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const a = K(d, "modelValue");
    return (n, e) => n.label || n.$slots.default ? (t(), s("label", Ja, [
      R(u("input", te(n.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (r) => a.value = r),
        type: "checkbox",
        class: "at-check",
        indeterminate: n.indeterminate,
        disabled: n.disabled
      }), null, 16, Za), [
        [He, a.value]
      ]),
      D(n.$slots, "default", {}, () => [
        _(v(n.label), 1)
      ])
    ])) : R((t(), s("input", te({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (r) => a.value = r),
      type: "checkbox",
      class: "at-check",
      indeterminate: n.indeterminate,
      disabled: n.disabled
    }), null, 16, Ya)), [
      [He, a.value]
    ]);
  }
}), de = /* @__PURE__ */ U({
  __name: "AtPopover",
  props: /* @__PURE__ */ W({
    anchor: {},
    align: { default: "start" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ W(["close"], ["update:open"]),
  setup(d, { expose: a, emit: n }) {
    const e = K(d, "open"), r = d, c = n, m = O(), p = O(), w = O({ top: -9999, left: -9999 }), M = C(() => {
      var H;
      return r.anchor ?? ((H = m.value) == null ? void 0 : H.firstElementChild) ?? m.value ?? null;
    });
    function V() {
      const H = M.value, x = p.value;
      if (!H || !x) return;
      const q = H.getBoundingClientRect(), ue = x.offsetWidth, X = x.offsetHeight;
      let se = r.align === "end" ? q.right - ue : q.left;
      se = Math.max(8, Math.min(se, window.innerWidth - ue - 8));
      let ne = q.bottom + r.offset;
      ne + X > window.innerHeight - 8 && (ne = Math.max(8, q.top - X - r.offset)), (Math.abs(ne - w.value.top) > 0.5 || Math.abs(se - w.value.left) > 0.5) && (w.value = { top: ne, left: se });
    }
    function z() {
      e.value && (e.value = !1, c("close"));
    }
    function N() {
      e.value ? z() : e.value = !0;
    }
    function j(H) {
      var q, ue, X;
      const x = H.target;
      (q = p.value) != null && q.contains(x) || (ue = M.value) != null && ue.contains(x) || (X = x.closest) != null && X.call(x, ".at-pop") || z();
    }
    function A(H) {
      var x, q;
      H.key === "Escape" && (H.stopPropagation(), z(), (q = (x = M.value) == null ? void 0 : x.focus) == null || q.call(x));
    }
    let b = null;
    function $() {
      setTimeout(() => document.addEventListener("mousedown", j), 0), document.addEventListener("keydown", A, !0), window.addEventListener("resize", V), window.addEventListener("scroll", V, !0), ze(() => {
        V(), p.value && (b = new ResizeObserver(V), b.observe(p.value));
      });
    }
    function Q() {
      document.removeEventListener("mousedown", j), document.removeEventListener("keydown", A, !0), window.removeEventListener("resize", V), window.removeEventListener("scroll", V, !0), b == null || b.disconnect(), b = null, w.value = { top: -9999, left: -9999 };
    }
    return ve(e, (H) => H ? $() : Q(), { immediate: !0 }), pt(Q), a({ place: V, close: z, toggle: N }), (H, x) => (t(), s(y, null, [
      H.$slots.trigger ? (t(), s("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: m,
        style: { display: "contents" }
      }, [
        D(H.$slots, "trigger", {
          toggle: N,
          open: e.value
        })
      ], 512)) : g("", !0),
      (t(), F(vt, { to: "body" }, [
        e.value ? (t(), s("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: Y({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          D(H.$slots, "default", { close: z })
        ], 4)) : g("", !0)
      ]))
    ], 64));
  }
}), Xa = ["aria-valuenow", "aria-label"], es = { class: "at-progress__track" }, ts = {
  key: 0,
  class: "at-progress__label"
}, Pt = /* @__PURE__ */ U({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const a = d, n = C(() => Math.max(0, Math.min(100, Math.round(a.value / a.max * 100))));
    return (e, r) => (t(), s("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": e.label
    }, [
      u("span", es, [
        u("span", {
          class: "at-progress__bar",
          style: Y({ width: n.value + "%" })
        }, null, 4)
      ]),
      e.showLabel ? (t(), s("span", ts, v(n.value) + " %", 1)) : g("", !0)
    ], 8, Xa));
  }
}), Ie = "__none", rt = (d) => String(d).padStart(2, "0"), mt = (d) => `${d.getFullYear()}-${rt(d.getMonth() + 1)}-${rt(d.getDate())}`, Ve = () => mt(/* @__PURE__ */ new Date()), as = (d, a) => {
  const n = /* @__PURE__ */ new Date(d + "T00:00");
  return n.setDate(n.getDate() + a), mt(n);
}, we = () => Math.random().toString(36).slice(2, 10), ae = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, Z = (d, a) => a.compute ? a.compute(d) : d[a.key], $e = (d, a) => typeof d.options == "function" ? d.options(a) : d.options ?? [], Ne = (d, a, n) => $e(d, a).find((e) => e.value === n), Se = (d) => !d.compute && !d.readonly && d.type !== "progress", ss = ["status", "select", "relation", "person"], Te = (d) => ss.includes(d.type), ns = {
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
}, Pe = (d) => d.icon ?? ns[d.type] ?? "text", Oe = [
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
}, Ct = {
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
}, Ht = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function ls(d, a, n, e = Ve()) {
  const r = Z(d, a);
  if (!Ht.includes(n.op) && ae(n.value)) return !0;
  const c = (m) => String(m ?? "").toLowerCase();
  switch (n.op) {
    case "empty":
      return ae(r);
    case "notempty":
      return !ae(r);
    case "contains":
      return a.type === "multi" ? (r ?? []).includes(n.value) : c(r).includes(c(n.value));
    case "notcontains":
      return a.type === "multi" ? !(r ?? []).includes(n.value) : !c(r).includes(c(n.value));
    case "is":
      return r === n.value;
    case "isnot":
      return r !== n.value;
    case "before":
      return !!r && r < n.value;
    case "after":
      return !!r && r > n.value;
    case "past":
      return !!r && r < e;
    case "week":
      return !!r && r >= e && r <= as(e, 7);
    case "eq":
      return Number(r) === Number(n.value);
    case "gt":
      return Number(r) > Number(n.value);
    case "lt":
      return Number(r) < Number(n.value);
    case "checked":
      return !!r;
    case "unchecked":
      return !r;
  }
  return !0;
}
function os(d, a, n) {
  const e = Z(a, d), r = Z(n, d), c = ae(e), m = ae(r);
  if (c || m) return c === m ? 0 : c ? 1 : -1;
  if (Te(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(e) - p.indexOf(r);
  }
  return d.type === "number" || d.type === "progress" ? e - r : d.type === "checkbox" ? Number(r) - Number(e) : d.type === "multi" ? e.length - r.length : String(e).localeCompare(String(r), "fr");
}
function rs(d, a, n, e = "") {
  const r = Object.fromEntries(a.map((M) => [M.key, M])), c = a.find((M) => M.type === "title"), m = e.trim().toLowerCase(), p = d.filter((M) => (!m || !c || String(M[c.key] ?? "").toLowerCase().includes(m)) && n.filters.every((V) => !r[V.prop] || ls(M, r[V.prop], V))), w = n.sorts.filter((M) => r[M.prop]);
  return w.length ? p.sort((M, V) => {
    for (const z of w) {
      const N = r[z.prop], j = ae(Z(M, N)), A = ae(Z(V, N));
      if (j !== A) return j ? 1 : -1;
      if (j) continue;
      const b = os(N, M, V);
      if (b) return z.dir === "desc" ? -b : b;
    }
    return 0;
  }) : p;
}
function is(d, a, n = !1) {
  if (!a) return [{ key: Ie, option: null, rows: d }];
  const e = $e(a).map((m) => ({ key: m.value, option: m, rows: [] })), r = { key: Ie, option: null, rows: [] }, c = Object.fromEntries(e.map((m) => [m.key, m]));
  for (const m of d) (c[Z(m, a)] ?? r).rows.push(m);
  return (r.rows.length || n) && e.push(r), n ? e : e.filter((m) => m.rows.length);
}
function us(d) {
  const [a, n] = d.split("-").map(Number), r = (new Date(a, n - 1, 1).getDay() + 6) % 7, c = [];
  for (let m = 0; m < 42; m++) {
    const p = new Date(a, n - 1, 1 - r + m);
    c.push({ iso: mt(p), day: p.getDate(), outside: p.getMonth() !== n - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const Vt = (d, a) => {
  const [n, e] = d.split("-").map(Number), r = new Date(n, e - 1 + a, 1);
  return `${r.getFullYear()}-${rt(r.getMonth() + 1)}`;
};
function St(d, a = "table", n = {}) {
  return { id: we(), name: d, layout: a, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...n };
}
const _i = (d, a, n = "") => ({ id: we(), prop: d, op: a, value: n }), wi = (d, a = "asc") => ({ id: we(), prop: d, dir: a });
function ds(d, a) {
  const n = {};
  for (const e of d.filters) {
    const r = a.find((c) => c.key === e.prop);
    !r || !Se(r) || ae(e.value) || (e.op === "is" && (n[e.prop] = e.value), e.op === "contains" && r.type === "multi" && (n[e.prop] = [e.value]));
  }
  return n;
}
const cs = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), ps = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), It = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function it(d) {
  if (!d) return "";
  const a = /* @__PURE__ */ new Date(d + "T00:00");
  return (a.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? cs : ps).format(a);
}
const vs = (d) => {
  const [a, n] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(a, n - 1, 1));
}, ms = {
  key: 0,
  class: "at-pv-title"
}, hs = ["checked"], gs = {
  key: 2,
  class: "at-pv-empty"
}, fs = {
  key: 5,
  class: "at-pv-multi"
}, ys = {
  key: 6,
  class: "at-pv-person"
}, bs = { class: "at-ellipsis" }, ks = {
  key: 7,
  class: "at-pv-rel"
}, _s = { class: "at-ellipsis" }, ws = {
  key: 9,
  class: "at-num"
}, $s = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, ce = /* @__PURE__ */ U({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const a = d, n = C(() => Z(a.row, a.prop)), e = C(() => a.prop.type), r = C(() => Te(a.prop) ? Ne(a.prop, a.row, n.value) : void 0), c = C(() => e.value === "multi" ? (n.value ?? []).map((w) => Ne(a.prop, a.row, w)).filter(Boolean) : []), m = C(() => {
      var w, M;
      return e.value === "date" && !!((M = (w = a.prop).overdue) != null && M.call(w, a.row));
    }), p = C(() => {
      var w;
      return ((w = r.value) == null ? void 0 : w.label) ?? String(n.value ?? "");
    });
    return (w, M) => {
      var V, z, N;
      return e.value === "title" ? (t(), s("span", ms, v(n.value || "Sans titre"), 1)) : e.value === "checkbox" ? (t(), s("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!n.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, hs)) : T(ae)(n.value) ? (t(), s("span", gs, "—")) : e.value === "status" ? (t(), s("span", {
        key: 3,
        class: P(["at-badge", ((V = r.value) == null ? void 0 : V.tone) && r.value.tone !== "neutral" && `at-badge--${r.value.tone}`])
      }, v(p.value), 3)) : e.value === "select" ? (t(), s("span", {
        key: 4,
        class: P(["at-tag", ((z = r.value) == null ? void 0 : z.color) && r.value.color !== "gray" && `at-tag--${r.value.color}`])
      }, v(p.value), 3)) : e.value === "multi" ? (t(), s("span", fs, [
        (t(!0), s(y, null, L(c.value, (j) => (t(), s("span", {
          key: j.value,
          class: P(["at-tag", j.color && j.color !== "gray" && `at-tag--${j.color}`])
        }, v(j.label), 3))), 128))
      ])) : e.value === "person" ? (t(), s("span", ys, [
        f(Ft, { name: p.value }, null, 8, ["name"]),
        u("span", bs, v(p.value), 1)
      ])) : e.value === "relation" ? (t(), s("span", ks, [
        (N = r.value) != null && N.mark ? (t(), s("span", {
          key: 0,
          class: "at-pv-mark",
          style: Y({ background: r.value.mark })
        }, null, 4)) : (t(), F(S, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", _s, v(r.value ? r.value.label : "Introuvable"), 1)
      ])) : e.value === "date" ? (t(), s("span", {
        key: 8,
        class: P(["at-pv-date", m.value && "at-pv-over"])
      }, v(T(it)(n.value)), 3)) : e.value === "number" ? (t(), s("span", ws, v(T(It).format(Number(n.value))) + v(w.prop.suffix ?? ""), 1)) : e.value === "progress" ? (t(), F(Pt, {
        key: 10,
        value: Number(n.value)
      }, null, 8, ["value"])) : (t(), s("span", $s, v(n.value), 1));
    };
  }
}), Ms = ["aria-label"], As = { class: "at-menu-label" }, Cs = ["aria-selected", "onClick"], Vs = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, Ss = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Ts = ["aria-label"], zs = { class: "at-menu-label" }, Ls = ["aria-checked", "onClick"], Ds = ["checked"], Qs = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Bs = { class: "at-menu-title" }, Es = ["value", "aria-label"], Us = { class: "at-menu-actions" }, Fs = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Os = { class: "at-menu-title" }, Ps = ["type", "aria-label"], ht = /* @__PURE__ */ U({
  __name: "AtPropertyEditor",
  props: /* @__PURE__ */ W({
    prop: {},
    row: {},
    anchor: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ W(["update"], ["update:open"]),
  setup(d, { emit: a }) {
    const n = K(d, "open"), e = d, r = a, c = O(""), m = O(), p = C(() => {
      const b = e.prop;
      return b ? Te(b) ? "options" : b.type === "multi" ? "multi" : b.type === "date" ? "date" : "input" : null;
    }), w = C(() => e.prop ? $e(e.prop, e.row) : []), M = C(() => e.prop && e.row ? e.row[e.prop.key] : null);
    ve(n, (b) => {
      b && (c.value = M.value ?? "", ze(() => {
        var Q, H;
        const $ = (Q = m.value) == null ? void 0 : Q.querySelector("input, button");
        $ == null || $.focus(), (H = $ == null ? void 0 : $.select) == null || H.call($);
      }));
    });
    const V = (b) => ({ ...e.row, [e.prop.key]: b });
    function z(b, $ = !0) {
      r("update", b), $ && (n.value = !1);
    }
    function N(b) {
      const $ = [...M.value ?? []], Q = $.indexOf(b);
      Q < 0 ? $.push(b) : $.splice(Q, 1), z($, !1);
    }
    function j() {
      var $;
      let b = c.value;
      (($ = e.prop) == null ? void 0 : $.type) === "number" && (b = b === "" || b == null ? null : Number(b)), b !== M.value && r("update", b), n.value = !1;
    }
    function A() {
      var b;
      if (p.value === "input") {
        let $ = c.value;
        ((b = e.prop) == null ? void 0 : b.type) === "number" && ($ = $ === "" ? null : Number($)), $ !== M.value && r("update", $);
      }
    }
    return (b, $) => (t(), F(de, {
      open: n.value,
      "onUpdate:open": $[5] || ($[5] = (Q) => n.value = Q),
      anchor: b.anchor,
      onClose: A
    }, {
      default: E(() => [
        b.prop ? (t(), s("div", {
          key: 0,
          ref_key: "box",
          ref: m
        }, [
          p.value === "options" ? (t(), s("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": b.prop.name
          }, [
            u("div", As, v(b.prop.name), 1),
            (t(!0), s(y, null, L(w.value, (Q) => (t(), s("button", {
              key: Q.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": Q.value === M.value,
              onClick: (H) => z(Q.value)
            }, [
              f(ce, {
                prop: b.prop,
                row: V(Q.value)
              }, null, 8, ["prop", "row"]),
              Q.value === M.value ? (t(), F(S, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : g("", !0)
            ], 8, Cs))), 128)),
            w.value.length ? g("", !0) : (t(), s("div", Vs, "Aucune option disponible")),
            b.prop.required ? g("", !0) : (t(), s(y, { key: 1 }, [
              Ss,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: $[0] || ($[0] = (Q) => z(null))
              }, [
                f(S, { name: "x" }),
                _("Effacer")
              ])
            ], 64))
          ], 8, Ms)) : p.value === "multi" ? (t(), s("div", {
            key: 1,
            class: "at-menu",
            "aria-label": b.prop.name
          }, [
            u("div", zs, v(b.prop.name), 1),
            (t(!0), s(y, null, L(w.value, (Q) => (t(), s("button", {
              key: Q.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(Q.value),
              onClick: (H) => N(Q.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(Q.value)
              }, null, 8, Ds),
              u("span", {
                class: P(["at-tag", Q.color && Q.color !== "gray" && `at-tag--${Q.color}`])
              }, v(Q.label), 3)
            ], 8, Ls))), 128))
          ], 8, Ts)) : p.value === "date" ? (t(), s("div", Qs, [
            u("span", Bs, v(b.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": b.prop.name,
              onChange: $[1] || ($[1] = (Q) => z(Q.target.value || null, !1))
            }, null, 40, Es),
            u("div", Us, [
              f(I, {
                size: "sm",
                onClick: $[2] || ($[2] = (Q) => z(T(Ve)()))
              }, {
                default: E(() => [
                  _("Aujourd’hui")
                ]),
                _: 1
              }),
              f(I, {
                size: "sm",
                variant: "ghost",
                onClick: $[3] || ($[3] = (Q) => z(null))
              }, {
                default: E(() => [
                  _("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (t(), s("div", Fs, [
            u("span", Os, v(b.prop.name), 1),
            R(u("input", {
              "onUpdate:modelValue": $[4] || ($[4] = (Q) => c.value = Q),
              class: "at-input",
              type: b.prop.type === "number" ? "number" : "text",
              "aria-label": b.prop.name,
              onKeydown: $a(j, ["enter"])
            }, null, 40, Ps), [
              [ot, c.value]
            ])
          ]))
        ], 512)) : g("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Hs = { class: "at-dv" }, Is = { class: "at-dv-viewsbar" }, Ns = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, xs = ["aria-selected", "title", "onClick"], qs = { class: "at-toolbar at-dv-toolbar" }, js = {
  key: 1,
  class: "at-dv-n"
}, Rs = {
  key: 1,
  class: "at-dv-n"
}, Ws = { class: "at-input-wrap at-dv-search" }, Ks = {
  key: 0,
  class: "at-dv-chips"
}, Gs = { class: "at-table-wrap" }, Js = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Zs = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Ys = { class: "at-cell-check" }, Xs = ["checked", "indeterminate"], en = { class: "at-th" }, tn = ["onMousedown"], an = { class: "at-cell-check" }, sn = {
  key: 0,
  class: "at-dv-grouprow"
}, nn = ["colspan"], ln = ["aria-expanded", "onClick"], on = {
  key: 1,
  class: "at-pv-empty"
}, rn = { class: "at-count" }, un = ["aria-selected"], dn = { class: "at-cell-check" }, cn = ["checked", "onChange"], pn = ["onClick"], vn = ["onClick"], mn = /* @__PURE__ */ u("td", null, null, -1), hn = { class: "at-dv-newrow" }, gn = /* @__PURE__ */ u("td", null, null, -1), fn = ["colspan"], yn = ["onClick"], bn = /* @__PURE__ */ u("td", null, null, -1), kn = /* @__PURE__ */ u("td", null, null, -1), _n = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, wn = { class: "at-num" }, $n = {
  key: 2,
  class: "at-dv-board"
}, Mn = {
  key: 0,
  class: "at-empty"
}, An = ["onDragover", "onDrop"], Cn = { class: "at-dv-colhead" }, Vn = {
  key: 1,
  class: "at-pv-empty"
}, Sn = { class: "at-count" }, Tn = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), zn = { class: "at-dv-cards" }, Ln = ["onDragstart", "onClick"], Dn = { class: "at-dv-cardtitle" }, Qn = {
  key: 0,
  class: "at-dv-cardprops"
}, Bn = ["onClick"], En = { key: 3 }, Un = {
  key: 0,
  class: "at-empty"
}, Fn = {
  key: 1,
  class: "at-dv-list"
}, On = {
  key: 0,
  class: "at-dv-lgroup"
}, Pn = ["aria-expanded", "onClick"], Hn = {
  key: 1,
  class: "at-pv-empty"
}, In = { class: "at-count" }, Nn = ["onClick"], xn = { class: "at-pv-title" }, qn = { class: "at-dv-liprops" }, jn = { class: "at-dv-newline" }, Rn = { class: "at-dv-calhead" }, Wn = { class: "at-dv-calmonth" }, Kn = { class: "at-dv-calnote" }, Gn = { class: "at-dv-calwrap" }, Jn = { class: "at-dv-calgrid" }, Zn = { class: "at-dv-calgrid" }, Yn = ["onDragover", "onDrop"], Xn = { class: "at-dv-daynum" }, el = ["aria-label", "onClick"], tl = ["onDragstart", "onClick"], al = {
  class: "at-menu",
  role: "menu"
}, sl = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), nl = ["onClick"], ll = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, ol = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), rl = { class: "at-rules" }, il = {
  key: 0,
  class: "at-menu-empty"
}, ul = { class: "at-select" }, dl = ["onUpdate:modelValue", "onChange"], cl = ["value"], pl = { class: "at-select" }, vl = ["onUpdate:modelValue"], ml = ["value"], hl = {
  key: 0,
  class: "at-select"
}, gl = ["onUpdate:modelValue"], fl = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), yl = ["value"], bl = ["onUpdate:modelValue"], kl = ["onUpdate:modelValue"], _l = ["onUpdate:modelValue"], wl = { key: 1 }, $l = { class: "at-menu-actions" }, Ml = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, Al = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), Cl = { class: "at-rules" }, Vl = {
  key: 0,
  class: "at-menu-empty"
}, Sl = { class: "at-select" }, Tl = ["onUpdate:modelValue"], zl = ["value"], Ll = { class: "at-select" }, Dl = ["onUpdate:modelValue"], Ql = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Bl = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), El = [
  Ql,
  Bl
], Ul = { class: "at-menu-actions" }, Fl = {
  class: "at-menu",
  role: "menu"
}, Ol = { class: "at-menu-label" }, Pl = ["onClick"], Hl = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Il = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Nl = ["draggable", "onDragstart", "onDragover", "onDrop"], xl = { class: "at-pi-name" }, ql = ["aria-label", "checked", "disabled", "onChange"], jl = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Rl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Wl = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Kl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), Gl = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Jl = ["aria-pressed", "onClick"], Zl = {
  key: 0,
  class: "at-field-row"
}, Yl = { class: "at-select" }, Xl = ["value"], eo = {
  key: 0,
  value: ""
}, to = ["value"], ao = {
  key: 1,
  class: "at-field-row"
}, so = /* @__PURE__ */ u("span", null, "Date utilisée", -1), no = { class: "at-select" }, lo = ["value"], oo = ["value"], ro = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), io = ["disabled"], uo = /* @__PURE__ */ U({
  __name: "AtDataView",
  props: /* @__PURE__ */ W({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean },
    lockViews: { type: Boolean }
  }, {
    views: { default: () => [St("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ W(["update", "create", "open", "delete"], ["update:views", "update:activeView"]),
  setup(d, { emit: a }) {
    const n = d, e = K(d, "views"), r = K(d, "activeView"), c = a, m = (o) => o[n.rowKey], p = C(() => e.value.find((o) => o.id === r.value) ?? e.value[0]), w = C(() => Object.fromEntries(n.schema.map((o) => [o.key, o]))), M = C(() => n.schema.find((o) => o.type === "title")), V = C(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? n.rowKey;
    }), z = C(() => {
      const o = (p.value.order ?? []).filter((k) => w.value[k]);
      for (const k of n.schema) o.includes(k.key) || o.push(k.key);
      const i = o.indexOf(V.value);
      return i > 0 && (o.splice(i, 1), o.unshift(V.value)), o.map((k) => w.value[k]);
    }), N = C(() => z.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), j = C(() => N.value.filter((o) => o.type !== "title")), A = C(() => n.schema.filter(Te)), b = C(() => n.schema.filter((o) => o.type === "date")), $ = C(() => n.schema.find((o) => o.type === "status")), Q = O(""), H = C(() => rs(n.rows, n.schema, p.value, Q.value)), x = C(() => {
      var i, k;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((i = $.value) == null ? void 0 : i.key) ?? ((k = A.value[0]) == null ? void 0 : k.key) ?? null : o;
    }), q = C(() => x.value && p.value.layout !== "calendar" ? w.value[x.value] : null), ue = C(() => is(H.value, q.value, p.value.layout === "board")), X = (o) => ({ [x.value]: o === Ie ? null : o }), se = C(() => p.value.filters.filter((o) => w.value[o.prop])), ne = C(() => p.value.sorts.filter((o) => w.value[o.prop])), qe = O({}), le = O(null), pe = O(null);
    function oe(o, i) {
      if (le.value === o && pe.value === i) {
        le.value = null;
        return;
      }
      pe.value = i ?? null, le.value = o;
    }
    const he = (o) => C({ get: () => le.value === o, set: (i) => {
      !i && le.value === o && (le.value = null);
    } }), je = he("add"), Re = he("filter"), We = he("sort"), Ke = he("group"), Ge = he("props"), Je = he("settings");
    function Zt(o) {
      o.id === p.value.id ? oe("settings", qe.value[o.id]) : r.value = o.id;
    }
    const ft = () => {
      var o, i;
      return ((o = $.value) == null ? void 0 : o.key) ?? ((i = A.value[0]) == null ? void 0 : i.key) ?? null;
    };
    function Yt(o) {
      if (n.lockViews) return;
      const i = St(Oe.find((k) => k.value === o).label, o, { groupBy: o === "board" ? ft() : null });
      e.value.push(i), r.value = i.id, le.value = null, ze(() => oe("settings", qe.value[i.id]));
    }
    function Xt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = ft());
    }
    function ea() {
      if (n.lockViews) return;
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", e.value.push(o), r.value = o.id, le.value = null;
    }
    function ta() {
      if (n.lockViews || e.value.length < 2) return;
      const o = e.value.indexOf(p.value);
      e.value.splice(o, 1), r.value = e.value[Math.max(0, o - 1)].id, le.value = null;
    }
    ve(() => p.value.id, () => {
      G.value = [], le.value = null;
    });
    function aa() {
      const o = n.schema.find((i) => i.type !== "title" && i.type !== "progress") ?? n.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: nt[o.type][0], value: "" });
    }
    function sa(o) {
      o.op = nt[w.value[o.prop].type][0], o.value = "";
    }
    const na = (o) => {
      var i;
      return nt[(i = w.value[o.prop]) == null ? void 0 : i.type] ?? [];
    }, yt = (o) => !Ht.includes(o.op);
    function Le(o) {
      const i = w.value[o.prop];
      return i ? Te(i) || i.type === "multi" ? "options" : i.type === "date" ? "date" : i.type === "number" || i.type === "progress" ? "number" : "text" : "text";
    }
    function Ze(o) {
      var J;
      const i = w.value[o.prop];
      let k = "";
      if (yt(o)) {
        const l = Le(o);
        k = l === "options" ? ((J = Ne(i, void 0, o.value)) == null ? void 0 : J.label) ?? "…" : l === "date" ? it(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: i.name, op: Ct[o.op], val: k };
    }
    function la() {
      const o = p.value.sorts.map((k) => k.prop), i = n.schema.find((k) => !o.includes(k.key)) ?? n.schema[0];
      p.value.sorts.push({ id: we(), prop: i.key, dir: "asc" });
    }
    const bt = (o, i) => {
      const k = o.indexOf(i);
      k >= 0 && o.splice(k, 1);
    };
    function oa() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Ye(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (le.value = null);
    }
    function ra(o) {
      const i = p.value.hidden, k = i.indexOf(o.key);
      k < 0 ? i.push(o.key) : i.splice(k, 1);
    }
    function kt(o) {
      p.value.hidden = o ? [] : n.schema.filter((i) => i.type !== "title").map((i) => i.key);
    }
    const Me = O(null), De = O(null);
    function ia(o) {
      if (Me.value == null) return;
      const i = z.value.map((J) => J.key), [k] = i.splice(Me.value, 1);
      i.splice(o, 0, k), p.value.order = i, Me.value = null, De.value = null;
    }
    const Xe = (o) => p.value.widths[o.key] ?? o.width ?? 160, ua = C(() => 36 + N.value.reduce((o, i) => o + Xe(i), 0) + 44), et = O(null);
    function da(o, i) {
      const k = o.clientX, J = Xe(i);
      et.value = i.key;
      const l = (B) => {
        p.value.widths[i.key] = Math.max(70, Math.round(J + B.clientX - k));
      }, h = () => {
        et.value = null, window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", h);
      };
      window.addEventListener("mousemove", l), window.addEventListener("mouseup", h);
    }
    const G = O([]), tt = C(() => H.value.length > 0 && H.value.every((o) => G.value.includes(m(o)))), ca = C(() => G.value.length > 0 && !tt.value);
    function pa(o) {
      const i = G.value.indexOf(m(o));
      i < 0 ? G.value.push(m(o)) : G.value.splice(i, 1);
    }
    function va() {
      G.value = tt.value ? [] : H.value.map(m);
    }
    function ma() {
      c("delete", n.rows.filter((o) => G.value.includes(m(o)))), G.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function _t(o) {
      const i = p.value.collapsed, k = i.indexOf(o);
      k < 0 ? i.push(o) : i.splice(k, 1);
    }
    function at(o) {
      const i = H.value;
      if (o.type === "title") return { label: "Total", value: String(i.length) };
      if (o.type === "number") return { label: "Somme", value: It.format(i.reduce((k, J) => k + (Number(Z(J, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && i.length) return { label: "Moyenne", value: Math.round(i.reduce((k, J) => k + Number(Z(J, o)), 0) / i.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const k = i.filter((J) => o.overdue(J)).length;
        return k ? { label: "En retard", value: String(k) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(i.filter((k) => Z(k, o)).length) } : null;
    }
    const fe = Ma(null), wt = O(null), st = O(!1);
    function ha(o, i, k) {
      if (k.type === "title") {
        c("open", i);
        return;
      }
      if (Se(k)) {
        if (k.type === "checkbox") {
          c("update", i, k.key, !i[k.key]);
          return;
        }
        wt.value = o.currentTarget, fe.value = { row: i, prop: k }, st.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...ds(p.value, n.schema), ...o });
    }
    const Qe = O(null), ye = O(null);
    function $t(o, i) {
      Qe.value = m(i), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(m(i))));
    }
    function Be() {
      Qe.value = null, ye.value = null;
    }
    const Mt = () => n.rows.find((o) => m(o) === Qe.value);
    function ga(o) {
      const i = Mt();
      i && x.value && c("update", i, x.value, o === Ie ? null : o), Be();
    }
    function fa(o) {
      const i = Mt();
      i && re.value && c("update", i, re.value, o), Be();
    }
    const re = C(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = b.value[0]) == null ? void 0 : o.key) ?? null;
    }), Ee = C(() => p.value.month ?? Ve().slice(0, 7)), ya = C(() => us(Ee.value).map((o) => ({ ...o, today: o.iso === Ve(), rows: re.value ? H.value.filter((i) => i[re.value] === o.iso) : [] }))), At = C(() => re.value ? H.value.filter((o) => !o[re.value]).length : 0), ba = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, ka = (o) => {
      const i = $.value, k = i ? Ne(i, o, o[i.key]) : void 0;
      return ba[(k == null ? void 0 : k.tone) ?? "neutral"];
    }, _a = (o) => {
      const i = $.value;
      if (!i) return !1;
      const k = $e(i, o);
      return k.length > 0 && o[i.key] === k[k.length - 1].value;
    }, Ue = (o, i = 0) => n.iconTools ? { iconOnly: !i, label: o, title: o, "aria-label": i ? `${o} (${i})` : o } : {}, wa = (o) => {
      var i;
      return ((i = Oe.find((k) => k.value === o)) == null ? void 0 : i.icon) ?? "table";
    }, Fe = C(() => q.value ? `Sans ${q.value.name.toLowerCase()}` : "");
    return (o, i) => {
      var k, J;
      return t(), s("section", Hs, [
        u("div", Is, [
          o.hideViews ? g("", !0) : (t(), s(y, { key: 0 }, [
            u("div", Ns, [
              (t(!0), s(y, null, L(e.value, (l) => (t(), s("button", {
                key: l.id,
                ref_for: !0,
                ref: (h) => {
                  h && (qe.value[l.id] = h);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": l.id === p.value.id,
                title: l.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (h) => Zt(l)
              }, [
                f(S, {
                  name: wa(l.layout)
                }, null, 8, ["name"]),
                _(v(l.name), 1)
              ], 8, xs))), 128))
            ]),
            o.lockViews ? g("", !0) : (t(), F(I, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: i[0] || (i[0] = (l) => oe("add", l.currentTarget))
            }))
          ], 64)),
          u("div", qs, [
            f(I, te(Ue("Filtrer", se.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": se.value.length },
              onClick: i[1] || (i[1] = (l) => oe("filter", l.currentTarget))
            }), {
              default: E(() => [
                o.iconTools ? g("", !0) : (t(), s(y, { key: 0 }, [
                  _("Filtrer")
                ], 64)),
                se.value.length ? (t(), s("span", js, v(se.value.length), 1)) : g("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            f(I, te(Ue("Trier", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": ne.value.length },
              onClick: i[2] || (i[2] = (l) => oe("sort", l.currentTarget))
            }), {
              default: E(() => [
                o.iconTools ? g("", !0) : (t(), s(y, { key: 0 }, [
                  _("Trier")
                ], 64)),
                ne.value.length ? (t(), s("span", Rs, v(ne.value.length), 1)) : g("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            p.value.layout !== "calendar" ? (t(), F(I, te({ key: 0 }, Ue("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": p.value.groupBy },
              onClick: i[3] || (i[3] = (l) => oe("group", l.currentTarget))
            }), {
              default: E(() => [
                _("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : g("", !0),
            f(I, te(Ue("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: i[4] || (i[4] = (l) => oe("props", l.currentTarget))
            }), {
              default: E(() => [
                _("Propriétés")
              ]),
              _: 1
            }, 16),
            u("div", Ws, [
              f(S, { name: "search" }),
              R(u("input", {
                "onUpdate:modelValue": i[5] || (i[5] = (l) => Q.value = l),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [ke, Q.value]
              ])
            ]),
            o.hideViews ? g("", !0) : (t(), F(I, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: i[6] || (i[6] = (l) => oe("settings", l.currentTarget))
            })),
            f(I, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: i[7] || (i[7] = (l) => me())
            }, {
              default: E(() => [
                _(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        se.value.length || ne.value.length ? (t(), s("div", Ks, [
          (t(!0), s(y, null, L(se.value, (l) => (t(), s("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: i[8] || (i[8] = (h) => oe("filter", h.currentTarget))
          }, [
            f(S, { name: "filter" }),
            _(v(Ze(l).name) + " " + v(Ze(l).op) + " ", 1),
            u("b", null, v(Ze(l).val), 1)
          ]))), 128)),
          (t(!0), s(y, null, L(ne.value, (l) => (t(), s("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: i[9] || (i[9] = (h) => oe("sort", h.currentTarget))
          }, [
            f(S, { name: "sort" }),
            _(v(w.value[l.prop].name) + " ", 1),
            u("b", null, v(l.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          f(I, {
            variant: "ghost",
            size: "sm",
            onClick: oa
          }, {
            default: E(() => [
              _("Tout effacer")
            ]),
            _: 1
          })
        ])) : g("", !0),
        p.value.layout === "table" ? (t(), s(y, { key: 1 }, [
          u("div", Gs, [
            u("table", {
              class: "at-table at-dv-table",
              style: Y({ width: ua.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                Js,
                (t(!0), s(y, null, L(N.value, (l) => (t(), s("col", {
                  key: l.key,
                  style: Y({ width: Xe(l) + "px" })
                }, null, 4))), 128)),
                Zs
              ]),
              u("thead", null, [
                u("tr", null, [
                  u("th", Ys, [
                    u("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: tt.value,
                      indeterminate: ca.value,
                      onChange: va
                    }, null, 40, Xs)
                  ]),
                  (t(!0), s(y, null, L(N.value, (l) => (t(), s("th", {
                    key: l.key,
                    class: P({ "at-num": l.type === "number" })
                  }, [
                    u("span", en, [
                      f(S, {
                        name: T(Pe)(l)
                      }, null, 8, ["name"]),
                      _(v(l.name), 1)
                    ]),
                    u("span", {
                      class: P(["at-dv-resize", et.value === l.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ie((h) => da(h, l), ["prevent"])
                    }, null, 42, tn)
                  ], 2))), 128)),
                  u("th", an, [
                    f(I, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: i[10] || (i[10] = (l) => oe("props", l.currentTarget))
                    })
                  ])
                ])
              ]),
              (t(!0), s(y, null, L(ue.value, (l) => (t(), s("tbody", {
                key: l.key
              }, [
                q.value ? (t(), s("tr", sn, [
                  u("td", {
                    colspan: N.value.length + 2
                  }, [
                    u("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !ge(l.key),
                      onClick: (h) => _t(l.key)
                    }, [
                      f(S, {
                        name: "chevron-down",
                        class: P({ "at-rot": ge(l.key) })
                      }, null, 8, ["class"]),
                      l.option ? (t(), F(ce, {
                        key: 0,
                        prop: q.value,
                        row: X(l.key)
                      }, null, 8, ["prop", "row"])) : (t(), s("span", on, v(Fe.value), 1)),
                      u("span", rn, v(l.rows.length), 1)
                    ], 8, ln)
                  ], 8, nn)
                ])) : g("", !0),
                ge(l.key) ? g("", !0) : (t(), s(y, { key: 1 }, [
                  (t(!0), s(y, null, L(l.rows, (h) => (t(), s("tr", {
                    key: m(h),
                    "aria-selected": G.value.includes(m(h)) ? "true" : void 0
                  }, [
                    u("td", dn, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: G.value.includes(m(h)),
                        onChange: (B) => pa(h)
                      }, null, 40, cn)
                    ]),
                    (t(!0), s(y, null, L(N.value, (B) => (t(), s("td", {
                      key: B.key,
                      class: P({ "at-num": B.type === "number", "at-dv-titlecell": B.type === "title", "is-edit": B.type !== "title" && T(Se)(B) }),
                      onClick: (ee) => ha(ee, h, B)
                    }, [
                      f(ce, {
                        prop: B,
                        row: h
                      }, null, 8, ["prop", "row"]),
                      B.type === "title" ? (t(), s("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ie((ee) => c("open", h), ["stop"])
                      }, "Ouvrir", 8, vn)) : g("", !0)
                    ], 10, pn))), 128)),
                    mn
                  ], 8, un))), 128)),
                  u("tr", hn, [
                    gn,
                    u("td", {
                      colspan: N.value.length + 1
                    }, [
                      u("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (h) => me(q.value ? X(l.key) : {})
                      }, [
                        f(S, { name: "plus" }),
                        _(v(o.newLabel), 1)
                      ], 8, yn)
                    ], 8, fn)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  bn,
                  (t(!0), s(y, null, L(N.value, (l) => (t(), s("td", {
                    key: l.key,
                    class: P({ "at-num": l.type === "number" })
                  }, [
                    at(l) ? (t(), s(y, { key: 0 }, [
                      _(v(at(l).label) + " ", 1),
                      u("b", null, v(at(l).value), 1)
                    ], 64)) : g("", !0)
                  ], 2))), 128)),
                  kn
                ])
              ])
            ], 4)
          ]),
          G.value.length ? (t(), s("div", _n, [
            u("span", null, [
              u("b", wn, v(G.value.length), 1),
              _(" sélectionnée" + v(G.value.length > 1 ? "s" : ""), 1)
            ]),
            f(I, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: ma
            }, {
              default: E(() => [
                _("Supprimer")
              ]),
              _: 1
            }),
            f(I, {
              variant: "ghost",
              size: "sm",
              onClick: i[11] || (i[11] = (l) => G.value = [])
            }, {
              default: E(() => [
                _("Désélectionner")
              ]),
              _: 1
            })
          ])) : g("", !0)
        ], 64)) : p.value.layout === "board" ? (t(), s("div", $n, [
          q.value ? (t(!0), s(y, { key: 1 }, L(ue.value, (l) => {
            var h;
            return t(), s("div", {
              key: l.key,
              class: P(["at-dv-col", ye.value === l.key && "over"]),
              onDragover: ie((B) => ye.value = l.key, ["prevent"]),
              onDragleave: i[12] || (i[12] = ie((B) => ye.value = null, ["self"])),
              onDrop: ie((B) => ga(l.key), ["prevent"])
            }, [
              u("div", Cn, [
                l.option ? (t(), F(ce, {
                  key: 0,
                  prop: q.value,
                  row: X(l.key)
                }, null, 8, ["prop", "row"])) : (t(), s("span", Vn, v(Fe.value), 1)),
                u("span", Sn, v(l.rows.length), 1),
                Tn,
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((h = l.option) == null ? void 0 : h.label) ?? Fe.value}`,
                  onClick: (B) => me(X(l.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", zn, [
                (t(!0), s(y, null, L(l.rows, (B) => (t(), s("button", {
                  key: m(B),
                  type: "button",
                  class: P(["at-dv-card", Qe.value === m(B) && "dragging"]),
                  draggable: "true",
                  onDragstart: (ee) => $t(ee, B),
                  onDragend: Be,
                  onClick: (ee) => c("open", B)
                }, [
                  u("span", Dn, v(B[V.value] || "Sans titre"), 1),
                  j.value.some((ee) => !T(ae)(T(Z)(B, ee)) || ee.type === "checkbox") ? (t(), s("span", Qn, [
                    (t(!0), s(y, null, L(j.value, (ee) => (t(), s(y, {
                      key: ee.key
                    }, [
                      T(ae)(T(Z)(B, ee)) ? g("", !0) : (t(), F(ce, {
                        key: 0,
                        prop: ee,
                        row: B
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : g("", !0)
                ], 42, Ln))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (B) => me(X(l.key))
                }, [
                  f(S, { name: "plus" }),
                  _(v(o.newLabel), 1)
                ], 8, Bn)
              ])
            ], 42, An);
          }), 128)) : (t(), s("div", Mn, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (t(), s("div", En, [
          H.value.length ? (t(), s("div", Fn, [
            (t(!0), s(y, null, L(ue.value, (l) => (t(), s(y, {
              key: l.key
            }, [
              q.value ? (t(), s("div", On, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(l.key),
                  onClick: (h) => _t(l.key)
                }, [
                  f(S, {
                    name: "chevron-down",
                    class: P({ "at-rot": ge(l.key) })
                  }, null, 8, ["class"]),
                  l.option ? (t(), F(ce, {
                    key: 0,
                    prop: q.value,
                    row: X(l.key)
                  }, null, 8, ["prop", "row"])) : (t(), s("span", Hn, v(Fe.value), 1)),
                  u("span", In, v(l.rows.length), 1)
                ], 8, Pn)
              ])) : g("", !0),
              ge(l.key) ? g("", !0) : (t(!0), s(y, { key: 1 }, L(l.rows, (h) => (t(), s("button", {
                key: m(h),
                type: "button",
                class: "at-dv-li",
                onClick: (B) => c("open", h)
              }, [
                u("span", xn, v(h[V.value] || "Sans titre"), 1),
                u("span", qn, [
                  (t(!0), s(y, null, L(j.value, (B) => (t(), s(y, {
                    key: B.key
                  }, [
                    T(ae)(T(Z)(h, B)) ? g("", !0) : (t(), F(ce, {
                      key: 0,
                      prop: B,
                      row: h
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, Nn))), 128))
            ], 64))), 128)),
            u("div", jn, [
              u("button", {
                type: "button",
                class: "at-dv-new",
                onClick: i[14] || (i[14] = (l) => me())
              }, [
                f(S, { name: "plus" }),
                _(v(o.newLabel), 1)
              ])
            ])
          ])) : (t(), s("div", Un, [
            _("Aucun élément ne correspond à cette vue."),
            f(I, {
              size: "sm",
              icon: "plus",
              onClick: i[13] || (i[13] = (l) => me())
            }, {
              default: E(() => [
                _(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (t(), s(y, { key: 4 }, [
          u("div", Rn, [
            u("span", Wn, v(T(vs)(Ee.value)), 1),
            f(I, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: i[15] || (i[15] = (l) => p.value.month = T(Vt)(Ee.value, -1))
            }),
            f(I, {
              size: "sm",
              onClick: i[16] || (i[16] = (l) => p.value.month = T(Ve)().slice(0, 7))
            }, {
              default: E(() => [
                _("Aujourd’hui")
              ]),
              _: 1
            }),
            f(I, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: i[17] || (i[17] = (l) => p.value.month = T(Vt)(Ee.value, 1))
            }),
            u("span", Kn, [
              re.value ? (t(), s(y, { key: 0 }, [
                _("Par " + v(w.value[re.value].name.toLowerCase()), 1),
                At.value ? (t(), s(y, { key: 0 }, [
                  _(" · " + v(At.value) + " sans date", 1)
                ], 64)) : g("", !0)
              ], 64)) : (t(), s(y, { key: 1 }, [
                _("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", Gn, [
            u("div", Jn, [
              (t(), s(y, null, L(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (l) => u("div", {
                key: l,
                class: "at-dv-dow"
              }, v(l), 1)), 64))
            ]),
            u("div", Zn, [
              (t(!0), s(y, null, L(ya.value, (l) => (t(), s("div", {
                key: l.iso,
                class: P(["at-dv-day", l.outside && "out", l.today && "today", ye.value === l.iso && "over"]),
                onDragover: ie((h) => ye.value = l.iso, ["prevent"]),
                onDrop: ie((h) => fa(l.iso), ["prevent"])
              }, [
                u("div", Xn, [
                  u("span", null, v(l.day), 1),
                  re.value ? (t(), s("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${T(it)(l.iso)}`,
                    onClick: (h) => me({ [re.value]: l.iso })
                  }, [
                    f(S, { name: "plus" })
                  ], 8, el)) : g("", !0)
                ]),
                (t(!0), s(y, null, L(l.rows, (h) => (t(), s("button", {
                  key: m(h),
                  type: "button",
                  class: P(["at-dv-calitem", _a(h) && "done"]),
                  draggable: "true",
                  onDragstart: (B) => $t(B, h),
                  onDragend: Be,
                  onClick: (B) => c("open", h)
                }, [
                  u("span", {
                    class: "dot",
                    style: Y({ background: ka(h) })
                  }, null, 4),
                  u("span", null, v(h[V.value] || "Sans titre"), 1)
                ], 42, tl))), 128))
              ], 42, Yn))), 128))
            ])
          ])
        ], 64)),
        f(de, {
          open: T(je),
          "onUpdate:open": i[18] || (i[18] = (l) => be(je) ? je.value = l : null),
          anchor: pe.value
        }, {
          default: E(() => [
            u("div", al, [
              sl,
              (t(!0), s(y, null, L(T(Oe), (l) => (t(), s("button", {
                key: l.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (h) => Yt(l.value)
              }, [
                f(S, {
                  name: l.icon
                }, null, 8, ["name"]),
                _(v(l.label), 1)
              ], 8, nl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: T(Re),
          "onUpdate:open": i[19] || (i[19] = (l) => be(Re) ? Re.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", ll, [
              ol,
              u("div", rl, [
                p.value.filters.length ? g("", !0) : (t(), s("span", il, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), s(y, null, L(p.value.filters, (l) => (t(), s("div", {
                  key: l.id,
                  class: "at-rule"
                }, [
                  u("div", ul, [
                    R(u("select", {
                      "onUpdate:modelValue": (h) => l.prop = h,
                      "aria-label": "Propriété",
                      onChange: (h) => sa(l)
                    }, [
                      (t(!0), s(y, null, L(o.schema, (h) => (t(), s("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, cl))), 128))
                    ], 40, dl), [
                      [_e, l.prop]
                    ]),
                    f(S, { name: "chevron-down" })
                  ]),
                  u("div", pl, [
                    R(u("select", {
                      "onUpdate:modelValue": (h) => l.op = h,
                      "aria-label": "Condition"
                    }, [
                      (t(!0), s(y, null, L(na(l), (h) => (t(), s("option", {
                        key: h,
                        value: h
                      }, v(T(Ct)[h]), 9, ml))), 128))
                    ], 8, vl), [
                      [_e, l.op]
                    ]),
                    f(S, { name: "chevron-down" })
                  ]),
                  yt(l) ? (t(), s(y, { key: 0 }, [
                    Le(l) === "options" ? (t(), s("div", hl, [
                      R(u("select", {
                        "onUpdate:modelValue": (h) => l.value = h,
                        "aria-label": "Valeur"
                      }, [
                        fl,
                        (t(!0), s(y, null, L(T($e)(w.value[l.prop]), (h) => (t(), s("option", {
                          key: h.value,
                          value: h.value
                        }, v(h.label), 9, yl))), 128))
                      ], 8, gl), [
                        [_e, l.value]
                      ]),
                      f(S, { name: "chevron-down" })
                    ])) : Le(l) === "date" ? R((t(), s("input", {
                      key: 1,
                      "onUpdate:modelValue": (h) => l.value = h,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, bl)), [
                      [ke, l.value]
                    ]) : Le(l) === "number" ? R((t(), s("input", {
                      key: 2,
                      "onUpdate:modelValue": (h) => l.value = h,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, kl)), [
                      [ke, l.value]
                    ]) : R((t(), s("input", {
                      key: 3,
                      "onUpdate:modelValue": (h) => l.value = h,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, _l)), [
                      [ke, l.value]
                    ])
                  ], 64)) : (t(), s("span", wl)),
                  f(I, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (h) => bt(p.value.filters, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", $l, [
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: aa
                }, {
                  default: E(() => [
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
          open: T(We),
          "onUpdate:open": i[20] || (i[20] = (l) => be(We) ? We.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", Ml, [
              Al,
              u("div", Cl, [
                p.value.sorts.length ? g("", !0) : (t(), s("span", Vl, "Aucun tri : ordre des données.")),
                (t(!0), s(y, null, L(p.value.sorts, (l) => (t(), s("div", {
                  key: l.id,
                  class: "at-rule sort"
                }, [
                  u("div", Sl, [
                    R(u("select", {
                      "onUpdate:modelValue": (h) => l.prop = h,
                      "aria-label": "Propriété"
                    }, [
                      (t(!0), s(y, null, L(o.schema, (h) => (t(), s("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, zl))), 128))
                    ], 8, Tl), [
                      [_e, l.prop]
                    ]),
                    f(S, { name: "chevron-down" })
                  ]),
                  u("div", Ll, [
                    R(u("select", {
                      "onUpdate:modelValue": (h) => l.dir = h,
                      "aria-label": "Sens"
                    }, El, 8, Dl), [
                      [_e, l.dir]
                    ]),
                    f(S, { name: "chevron-down" })
                  ]),
                  f(I, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (h) => bt(p.value.sorts, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", Ul, [
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: la
                }, {
                  default: E(() => [
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
          open: T(Ke),
          "onUpdate:open": i[22] || (i[22] = (l) => be(Ke) ? Ke.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", Fl, [
              u("div", Ol, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (t(), s("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: i[21] || (i[21] = (l) => Ye(null))
              }, [
                f(S, { name: "x" }),
                _("Aucun groupe"),
                p.value.groupBy ? g("", !0) : (t(), F(S, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : g("", !0),
              (t(!0), s(y, null, L(A.value, (l) => (t(), s("button", {
                key: l.key,
                type: "button",
                class: "at-menu-item",
                onClick: (h) => Ye(l.key)
              }, [
                f(S, {
                  name: T(Pe)(l)
                }, null, 8, ["name"]),
                _(v(l.name), 1),
                x.value === l.key ? (t(), F(S, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : g("", !0)
              ], 8, Pl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: T(Ge),
          "onUpdate:open": i[26] || (i[26] = (l) => be(Ge) ? Ge.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", Hl, [
              Il,
              (t(!0), s(y, null, L(z.value, (l, h) => (t(), s("div", {
                key: l.key,
                class: P(["at-menu-item", "at-pi", De.value === h && "drop"]),
                draggable: l.type !== "title",
                onDragstart: (B) => Me.value = h,
                onDragover: ie((B) => De.value = h, ["prevent"]),
                onDrop: ie((B) => ia(h), ["prevent"]),
                onDragend: i[23] || (i[23] = (B) => {
                  Me.value = null, De.value = null;
                })
              }, [
                f(S, {
                  name: "grip",
                  class: "grip"
                }),
                f(S, {
                  name: T(Pe)(l)
                }, null, 8, ["name"]),
                u("span", xl, v(l.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${l.name}`,
                  checked: l.type === "title" || !p.value.hidden.includes(l.key),
                  disabled: l.type === "title",
                  onChange: (B) => ra(l)
                }, null, 40, ql)
              ], 42, Nl))), 128)),
              jl,
              u("div", Rl, [
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  onClick: i[24] || (i[24] = (l) => kt(!0))
                }, {
                  default: E(() => [
                    _("Tout afficher")
                  ]),
                  _: 1
                }),
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  onClick: i[25] || (i[25] = (l) => kt(!1))
                }, {
                  default: E(() => [
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
          open: T(Je),
          "onUpdate:open": i[30] || (i[30] = (l) => be(Je) ? Je.value = l : null),
          anchor: pe.value
        }, {
          default: E(() => [
            u("div", Wl, [
              Kl,
              R(u("input", {
                "onUpdate:modelValue": i[27] || (i[27] = (l) => p.value.name = l),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", Gl, [
                (t(!0), s(y, null, L(T(Oe), (l) => (t(), s("button", {
                  key: l.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === l.value,
                  onClick: (h) => Xt(l.value)
                }, [
                  f(S, {
                    name: l.icon
                  }, null, 8, ["name"]),
                  _(v(l.label), 1)
                ], 8, Jl))), 128))
              ]),
              p.value.layout !== "calendar" ? (t(), s("div", Zl, [
                u("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                u("div", Yl, [
                  u("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: i[28] || (i[28] = (l) => Ye(l.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (t(), s("option", eo, "Aucun")) : g("", !0),
                    (t(!0), s(y, null, L(A.value, (l) => (t(), s("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, to))), 128))
                  ], 40, Xl),
                  f(S, { name: "chevron-down" })
                ])
              ])) : (t(), s("div", ao, [
                so,
                u("div", no, [
                  u("select", {
                    value: re.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: i[29] || (i[29] = (l) => p.value.dateProp = l.target.value)
                  }, [
                    (t(!0), s(y, null, L(b.value, (l) => (t(), s("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, oo))), 128))
                  ], 40, lo),
                  f(S, { name: "chevron-down" })
                ])
              ])),
              o.lockViews ? g("", !0) : (t(), s(y, { key: 2 }, [
                ro,
                u("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: ea
                }, [
                  f(S, { name: "copy" }),
                  _("Dupliquer la vue")
                ]),
                u("button", {
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: e.value.length < 2,
                  onClick: ta
                }, [
                  f(S, { name: "trash" }),
                  _("Supprimer la vue")
                ], 8, io)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(ht, {
          open: st.value,
          "onUpdate:open": i[31] || (i[31] = (l) => st.value = l),
          prop: ((k = fe.value) == null ? void 0 : k.prop) ?? null,
          row: (J = fe.value) == null ? void 0 : J.row,
          anchor: wt.value,
          onUpdate: i[32] || (i[32] = (l) => fe.value && c("update", fe.value.row, fe.value.prop.key, l))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), co = {
  key: 0,
  class: "at-drawer-wrap"
}, po = ["aria-label"], vo = { class: "at-drawer__head" }, mo = { class: "at-drawer__crumb" }, ho = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), go = { class: "at-drawer__body" }, fo = /* @__PURE__ */ U({
  __name: "AtDrawer",
  props: /* @__PURE__ */ W({
    label: {},
    width: { default: 580 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(d) {
    const a = K(d, "open"), n = O();
    let e = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return ve(a, (c) => {
      var m;
      c ? (e = document.activeElement, document.addEventListener("keydown", r), ze(() => {
        var p;
        return (p = n.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = e == null ? void 0 : e.focus) == null || m.call(e));
    }, { immediate: !0 }), pt(() => document.removeEventListener("keydown", r)), (c, m) => (t(), F(vt, { to: "body" }, [
      f(Et, { name: "at-drawer" }, {
        default: E(() => [
          a.value ? (t(), s("div", co, [
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
              style: Y({ width: `min(${c.width}px, 100%)` })
            }, [
              u("header", vo, [
                u("span", mo, [
                  D(c.$slots, "crumb", {}, () => [
                    _(v(c.label), 1)
                  ])
                ]),
                ho,
                D(c.$slots, "actions"),
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })
              ]),
              u("div", go, [
                D(c.$slots, "default")
              ])
            ], 12, po)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), yo = ["aria-label"], bo = {
  key: 0,
  class: "at-menu-label"
}, Nt = /* @__PURE__ */ U({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const a = O();
    function n(e) {
      var p;
      const r = [...((p = a.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!r.length) return;
      const c = r.indexOf(document.activeElement), m = (w) => {
        e.preventDefault(), r[(w + r.length) % r.length].focus();
      };
      e.key === "ArrowDown" ? m(c + 1) : e.key === "ArrowUp" ? m(c < 0 ? r.length - 1 : c - 1) : e.key === "Home" ? m(0) : e.key === "End" && m(r.length - 1);
    }
    return (e, r) => (t(), s("div", {
      ref_key: "el",
      ref: a,
      class: "at-menu",
      role: "menu",
      "aria-label": e.label,
      style: Y(e.minWidth ? { minWidth: e.minWidth + "px" } : void 0),
      onKeydown: n
    }, [
      e.label ? (t(), s("div", bo, v(e.label), 1)) : g("", !0),
      D(e.$slots, "default")
    ], 44, yo));
  }
}), ko = /* @__PURE__ */ U({
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
    return (e, r) => (t(), F(de, {
      open: a.value,
      "onUpdate:open": r[0] || (r[0] = (c) => a.value = c),
      align: e.align
    }, {
      trigger: E((c) => [
        D(e.$slots, "trigger", Aa(Ca(c)))
      ]),
      default: E(() => [
        f(Nt, {
          label: e.label,
          "min-width": e.minWidth,
          onClick: n
        }, {
          default: E(() => [
            D(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align"]));
  }
}), _o = { class: "at-empty" }, wo = /* @__PURE__ */ U({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (a, n) => (t(), s("div", _o, [
      D(a.$slots, "default", {}, () => [
        _(v(a.message), 1)
      ]),
      D(a.$slots, "action")
    ]));
  }
});
let Tt = 0;
function xt(d = "at") {
  return Tt += 1, `${d}-${Tt}`;
}
const $o = { class: "at-field" }, Mo = ["for"], Ao = ["id"], Co = ["id"], ut = /* @__PURE__ */ U({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const n = d.id ?? xt("field");
    return (e, r) => (t(), s("div", $o, [
      e.label ? (t(), s("label", {
        key: 0,
        class: "at-label",
        for: T(n)
      }, v(e.label), 9, Mo)) : g("", !0),
      D(e.$slots, "default", {
        id: T(n),
        invalid: !!e.error,
        describedby: e.error || e.hint ? T(n) + "-hint" : void 0
      }),
      e.error ? (t(), s("span", {
        key: 1,
        id: T(n) + "-hint",
        class: "at-hint at-hint--error"
      }, v(e.error), 9, Ao)) : e.hint ? (t(), s("span", {
        key: 2,
        id: T(n) + "-hint",
        class: "at-hint"
      }, v(e.hint), 9, Co)) : g("", !0)
    ]));
  }
}), Vo = ["role", "aria-label", "aria-hidden"], qt = /* @__PURE__ */ U({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("span", {
      class: P(["at-tile", a.size !== "sm" && `at-tile--${a.size}`, a.color === "neutral" ? "at-tile--neutral" : `at-tone-${a.color}`]),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true"
    }, [
      f(S, { name: a.name }, null, 8, ["name"])
    ], 10, Vo));
  }
}), xe = (d, a) => {
  const n = d.__vccOpts || d;
  for (const [e, r] of a)
    n[e] = r;
  return n;
}, So = {}, To = { class: "at-kbd" };
function zo(d, a) {
  return t(), s("kbd", To, [
    D(d.$slots, "default")
  ]);
}
const gt = /* @__PURE__ */ xe(So, [["render", zo]]), Lo = {
  key: 0,
  class: "at-input-wrap"
}, Do = ["type", "placeholder", "disabled", "aria-invalid"], Qo = ["type", "placeholder", "disabled", "aria-invalid"], dt = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "AtInput",
  props: /* @__PURE__ */ W({
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
    const n = K(d, "modelValue"), e = d, r = O();
    return a({ focus: () => {
      var c;
      return (c = r.value) == null ? void 0 : c.focus();
    }, el: r }), (c, m) => c.icon || c.kbd ? (t(), s("div", Lo, [
      c.icon ? (t(), F(S, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : g("", !0),
      R(u("input", te(c.$attrs, {
        ref_key: "el",
        ref: r,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => n.value = p),
        class: "at-input",
        style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, Do), [
        [ot, n.value]
      ]),
      c.kbd ? (t(), F(gt, { key: 1 }, {
        default: E(() => [
          _(v(c.kbd), 1)
        ]),
        _: 1
      })) : g("", !0)
    ])) : R((t(), s("input", te({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: r,
      "onUpdate:modelValue": m[1] || (m[1] = (p) => n.value = p),
      class: "at-input",
      style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, Qo)), [
      [ot, n.value]
    ]);
  }
}), lt = {
  /** Côté de la grille et de la tuile. */
  size: 24,
  /** Rayon des trois coins arrondis (25 % du côté). */
  radius: 6,
  /** Rayon du coin d'équerre, en bas à gauche. */
  corner: 1,
  /** Marge intérieure : la zone utile du glyphe va de 5 à 19. */
  padding: 5,
  /** Épaisseur du trait du glyphe. */
  stroke: 2,
  /** Zone de protection autour de la marque (25 % du côté). */
  clearspace: 6,
  /** Écart entre la marque et le nom (40 % du côté). */
  gap: 9.6,
  /** Corps du nom, relatif au côté de la marque. */
  wordmarkRatio: 0.7
}, Bo = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", ct = {
  atelier: {
    name: "Atelier",
    // Le compas d'atelier : une charnière, deux branches, une traverse. Il se lit aussi comme un A.
    glyph: '<path d="M12 6v2M7 18l5-10 5 10M9.5 14.5h5"/>',
    color: "ink"
  },
  dashboard: {
    name: "Tableau de bord",
    // Le compteur : un cadran ouvert et son aiguille.
    glyph: '<path d="M7.76 17.24a6 6 0 1 1 8.48 0"/><path d="M12 13l3-3"/>',
    color: "chart-2"
  },
  admin: {
    name: "Administration",
    // Les réglages : deux curseurs.
    glyph: '<path d="M6 9h12M6 15h12"/><circle cx="9.5" cy="9" r="2.5" fill="currentColor"/><circle cx="14.5" cy="15" r="2.5" fill="currentColor"/>',
    color: "chart-5"
  },
  tasks: {
    name: "Tâches",
    // La coche.
    glyph: '<path d="M6.5 12.5l3.5 3.5 7.5-8"/>',
    color: "chart-3"
  },
  mail: {
    name: "Courrier",
    // L'enveloppe.
    glyph: '<rect x="6" y="7.5" width="12" height="9" rx="1.5"/><path d="M6.5 8.5 12 12.5l5.5-4"/>',
    color: "chart-4"
  },
  agenda: {
    name: "Agenda",
    // La page de calendrier et ses deux anneaux.
    glyph: '<rect x="6" y="7.5" width="12" height="10.5" rx="1.5"/><path d="M6 11.5h12M9.5 6v3M14.5 6v3"/>',
    color: "tag-blue-fg"
  },
  docs: {
    name: "Documents",
    // La page cornée et une ligne de texte.
    glyph: '<path d="M7.5 6h6l3.5 3.5V18h-9.5z"/><path d="M13.5 6v3.5H17M10 14h4.5"/>',
    color: "tag-brown-fg"
  },
  files: {
    name: "Fichiers",
    // Le dossier.
    glyph: '<path d="M6 8a1 1 0 0 1 1-1h3.5l1.5 2h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/>',
    color: "tag-green-fg"
  },
  contacts: {
    name: "Contacts",
    // Le buste.
    glyph: '<circle cx="12" cy="9.5" r="3"/><path d="M6.5 18c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5"/>',
    color: "tag-red-fg"
  }
};
function $i(d) {
  Object.assign(ct, d);
}
const Mi = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, Eo = ["role", "aria-label", "aria-hidden"], Uo = ["viewBox", "width", "height"], Fo = ["d"], Oo = ["stroke-width", "innerHTML"], Po = {
  key: 0,
  class: "at-logo__name"
}, Ho = /* @__PURE__ */ U({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(d) {
    const a = d, n = C(() => ct[a.app] ?? ct.atelier), e = C(() => a.name ?? n.value.name), r = C(() => Math.max(16, a.size)), c = C(() => ({
      "--at-logo-size": r.value + "px",
      "--at-logo-fill": `var(--${n.value.color})`
    }));
    return (m, p) => (t(), s("span", {
      class: P(["at-logo", m.wordmark && "at-logo--wordmark"]),
      style: Y(c.value),
      role: !m.wordmark && m.label ? "img" : void 0,
      "aria-label": m.wordmark ? void 0 : m.label,
      "aria-hidden": !m.wordmark && !m.label ? "true" : void 0
    }, [
      (t(), s("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${T(lt).size} ${T(lt).size}`,
        width: r.value,
        height: r.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        u("path", {
          class: "at-logo__tile",
          d: T(Bo)
        }, null, 8, Fo),
        u("g", {
          class: "at-logo__glyph",
          "stroke-width": T(lt).stroke,
          innerHTML: n.value.glyph
        }, null, 8, Oo)
      ], 8, Uo)),
      m.wordmark ? (t(), s("span", Po, v(e.value), 1)) : g("", !0)
    ], 14, Eo));
  }
}), Io = { class: "at-login__panel" }, No = {
  key: 0,
  class: "at-login__brand"
}, xo = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, qo = ["aria-labelledby"], jo = { class: "at-login__head" }, Ro = ["id"], Wo = {
  key: 0,
  class: "at-login__desc"
}, Ko = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, Go = /* @__PURE__ */ u("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ u("span", null, "ou")
], -1), Jo = {
  key: 1,
  class: "at-login__foot"
}, Zo = /* @__PURE__ */ U({
  __name: "AtLogin",
  props: /* @__PURE__ */ W({
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
  emits: /* @__PURE__ */ W(["submit", "passkey"], ["update:username", "update:password", "update:remember"]),
  setup(d, { expose: a, emit: n }) {
    const e = K(d, "username"), r = K(d, "password"), c = K(d, "remember"), m = d, p = n, w = xt("login"), M = C(() => m.loading !== !1), V = C(() => {
      var A;
      return (m.mark ?? ((A = m.brand) == null ? void 0 : A.trim().charAt(0)) ?? "").toUpperCase();
    }), z = O(), N = O();
    function j() {
      var A, b;
      if (!M.value) {
        if (!e.value.trim()) return (A = z.value) == null ? void 0 : A.focus();
        if (!r.value) return (b = N.value) == null ? void 0 : b.focus();
        p("submit", { username: e.value.trim(), password: r.value, remember: c.value });
      }
    }
    return a({
      focusUsername: () => {
        var A;
        return (A = z.value) == null ? void 0 : A.focus();
      },
      focusPassword: () => {
        var A;
        return (A = N.value) == null ? void 0 : A.focus();
      }
    }), (A, b) => (t(), F(Bt(A.as), { class: "at-login" }, {
      default: E(() => [
        u("div", Io, [
          A.brand || A.$slots.brand ? (t(), s("div", No, [
            D(A.$slots, "brand", {}, () => [
              u("span", xo, v(V.value), 1),
              _(v(A.brand), 1)
            ])
          ])) : g("", !0),
          u("section", {
            class: "at-login__card",
            "aria-labelledby": T(w)
          }, [
            u("header", jo, [
              u("h1", {
                id: T(w),
                class: "at-login__title"
              }, v(A.title), 9, Ro),
              A.description ? (t(), s("p", Wo, v(A.description), 1)) : g("", !0)
            ]),
            A.error ? (t(), s("p", Ko, v(A.error), 1)) : g("", !0),
            D(A.$slots, "default", {}, () => [
              u("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: ie(j, ["prevent"])
              }, [
                f(ut, { label: A.usernameLabel }, {
                  default: E(($) => [
                    f(dt, {
                      id: $.id,
                      ref_key: "usernameInput",
                      ref: z,
                      modelValue: e.value,
                      "onUpdate:modelValue": b[0] || (b[0] = (Q) => e.value = Q),
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
                f(ut, { label: A.passwordLabel }, {
                  default: E(($) => [
                    f(dt, {
                      id: $.id,
                      ref_key: "passwordInput",
                      ref: N,
                      modelValue: r.value,
                      "onUpdate:modelValue": b[1] || (b[1] = (Q) => r.value = Q),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: M.value,
                      invalid: !!A.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                A.rememberable ? (t(), F(Ot, {
                  key: 0,
                  modelValue: c.value,
                  "onUpdate:modelValue": b[2] || (b[2] = ($) => c.value = $),
                  label: A.rememberLabel,
                  disabled: M.value
                }, null, 8, ["modelValue", "label", "disabled"])) : g("", !0),
                f(I, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "at-login__submit",
                  loading: A.loading === !0 || A.loading === "password",
                  disabled: M.value
                }, {
                  default: E(() => [
                    _(v(A.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 32),
              A.passkey ? (t(), s(y, { key: 0 }, [
                Go,
                f(I, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: A.loading === "passkey",
                  disabled: M.value,
                  onClick: b[3] || (b[3] = ($) => p("passkey"))
                }, {
                  default: E(() => [
                    _(v(A.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : g("", !0)
            ])
          ], 8, qo),
          A.$slots.footer ? (t(), s("footer", Jo, [
            D(A.$slots, "footer")
          ])) : g("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), Yo = ["role", "aria-checked", "disabled"], Xo = {
  key: 2,
  class: "at-menu-meta"
}, er = /* @__PURE__ */ U({
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
      class: P(["at-menu-item", a.danger && "at-menu-item--danger"]),
      role: a.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": a.checked !== void 0 ? a.checked : void 0,
      disabled: a.disabled,
      onClick: n[0] || (n[0] = (e) => a.$emit("select", e))
    }, [
      a.icon ? (t(), F(S, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : g("", !0),
      D(a.$slots, "default", {}, () => [
        _(v(a.label), 1)
      ]),
      a.kbd ? (t(), F(gt, { key: 1 }, {
        default: E(() => [
          _(v(a.kbd), 1)
        ]),
        _: 1
      })) : a.meta ? (t(), s("span", Xo, v(a.meta), 1)) : a.checked ? (t(), F(S, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : g("", !0)
    ], 10, Yo));
  }
}), tr = {}, ar = { class: "at-menu-label" };
function sr(d, a) {
  return t(), s("div", ar, [
    D(d.$slots, "default")
  ]);
}
const nr = /* @__PURE__ */ xe(tr, [["render", sr]]), lr = {}, or = {
  class: "at-menu-sep",
  role: "separator"
};
function rr(d, a) {
  return t(), s("div", or);
}
const ir = /* @__PURE__ */ xe(lr, [["render", rr]]), ur = {
  key: 0,
  class: "at-modal-wrap"
}, dr = ["aria-label"], cr = { class: "at-modal__head" }, pr = { style: { flex: "1", "min-width": "0" } }, vr = { class: "at-modal__title" }, mr = {
  key: 0,
  class: "at-modal__desc"
}, hr = { class: "at-modal__body" }, gr = {
  key: 0,
  class: "at-modal__foot"
}, fr = /* @__PURE__ */ U({
  __name: "AtModal",
  props: /* @__PURE__ */ W({
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
    const a = K(d, "open"), n = O();
    let e = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return ve(a, (c) => {
      var m;
      c ? (e = document.activeElement, document.addEventListener("keydown", r), ze(() => {
        var p;
        return (p = n.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = e == null ? void 0 : e.focus) == null || m.call(e));
    }, { immediate: !0 }), pt(() => document.removeEventListener("keydown", r)), (c, m) => (t(), F(vt, { to: "body" }, [
      f(Et, { name: "at-modal" }, {
        default: E(() => [
          a.value ? (t(), s("div", ur, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: m[0] || (m[0] = (p) => c.dismissible && (a.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: n,
              class: P(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", cr, [
                u("div", pr, [
                  u("h2", vr, v(c.title), 1),
                  c.description ? (t(), s("p", mr, v(c.description), 1)) : g("", !0)
                ]),
                c.dismissible ? (t(), F(I, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })) : g("", !0)
              ]),
              u("div", hr, [
                D(c.$slots, "default")
              ]),
              c.$slots.footer ? (t(), s("footer", gr, [
                D(c.$slots, "footer", {
                  close: () => a.value = !1
                })
              ])) : g("", !0)
            ], 10, dr)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), yr = ["aria-label"], br = {
  key: 0,
  class: "at-nav-label"
}, kr = /* @__PURE__ */ U({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("nav", {
      class: "at-nav",
      "aria-label": a.label
    }, [
      a.label ? (t(), s("div", br, v(a.label), 1)) : g("", !0),
      D(a.$slots, "default")
    ], 8, yr));
  }
}), _r = ["href", "aria-current"], wr = { class: "at-ellipsis" }, $r = {
  key: 3,
  class: "at-nav-count"
}, Mr = /* @__PURE__ */ U({
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
        style: Y({ background: a.mark })
      }, null, 4)) : a.icon && a.tile ? (t(), F(qt, {
        key: 1,
        name: a.icon,
        color: a.tile
      }, null, 8, ["name", "color"])) : a.icon ? (t(), F(S, {
        key: 2,
        name: a.icon
      }, null, 8, ["name"])) : g("", !0),
      u("span", wr, [
        D(a.$slots, "default", {}, () => [
          _(v(a.label), 1)
        ])
      ]),
      a.count != null && a.count !== "" ? (t(), s("span", $r, v(a.count), 1)) : g("", !0)
    ], 8, _r));
  }
}), Ar = {
  key: 0,
  class: "at-page__head"
}, Cr = { class: "t-heading-1" }, Vr = { key: 0 }, Sr = /* @__PURE__ */ U({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (a, n) => (t(), s("div", {
      class: P(["at-page", a.wide && "at-page--wide"])
    }, [
      a.title || a.$slots.head ? (t(), s("div", Ar, [
        D(a.$slots, "head", {}, () => [
          u("h1", Cr, v(a.title), 1),
          a.description ? (t(), s("p", Vr, v(a.description), 1)) : g("", !0)
        ])
      ])) : g("", !0),
      D(a.$slots, "default")
    ], 2));
  }
}), Tr = { class: "at-proplist" }, zr = ["disabled", "onClick"], Lr = /* @__PURE__ */ U({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: a }) {
    const n = d, e = a, r = C(() => n.schema.filter((M) => {
      var V;
      return M.type !== "title" && !((V = n.exclude) != null && V.includes(M.key));
    })), c = O(null), m = O(null), p = O(!1);
    function w(M, V) {
      if (Se(V)) {
        if (V.type === "checkbox") {
          e("update", V.key, !n.row[V.key]);
          return;
        }
        m.value = M.currentTarget, c.value = V, p.value = !0;
      }
    }
    return (M, V) => (t(), s(y, null, [
      u("dl", Tr, [
        (t(!0), s(y, null, L(r.value, (z) => (t(), s(y, {
          key: z.key
        }, [
          u("dt", null, [
            f(S, {
              name: T(Pe)(z)
            }, null, 8, ["name"]),
            _(v(z.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !T(Se)(z),
              onClick: (N) => w(N, z)
            }, [
              f(ce, {
                prop: z,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, zr)
          ])
        ], 64))), 128))
      ]),
      f(ht, {
        open: p.value,
        "onUpdate:open": V[0] || (V[0] = (z) => p.value = z),
        prop: c.value,
        row: M.row,
        anchor: m.value,
        onUpdate: V[1] || (V[1] = (z) => c.value && e("update", c.value.key, z))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), Dr = ["aria-label"], Qr = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Br = /* @__PURE__ */ U({
  __name: "AtSegment",
  props: /* @__PURE__ */ W({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const a = K(d, "modelValue");
    return (n, e) => (t(), s("div", {
      class: "at-segment",
      role: "group",
      "aria-label": n.label
    }, [
      (t(!0), s(y, null, L(n.items, (r) => (t(), s("button", {
        key: String(r.value),
        type: "button",
        "aria-pressed": a.value === r.value,
        "aria-label": r.iconOnly ? r.label : void 0,
        title: r.iconOnly ? r.label : void 0,
        disabled: r.disabled,
        onClick: (c) => a.value = r.value
      }, [
        r.icon ? (t(), F(S, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : g("", !0),
        r.iconOnly ? g("", !0) : (t(), s(y, { key: 1 }, [
          _(v(r.label), 1)
        ], 64))
      ], 8, Qr))), 128))
    ], 8, Dr));
  }
}), Er = { class: "at-select" }, Ur = ["disabled", "aria-invalid"], Fr = {
  key: 0,
  value: null,
  disabled: ""
}, Or = ["value", "disabled"], Pr = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "AtSelect",
  props: /* @__PURE__ */ W({
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
    const a = K(d, "modelValue");
    return (n, e) => (t(), s("div", Er, [
      R(u("select", te(n.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (r) => a.value = r),
        disabled: n.disabled,
        "aria-invalid": n.invalid || void 0,
        style: n.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        n.placeholder ? (t(), s("option", Fr, v(n.placeholder), 1)) : g("", !0),
        (t(!0), s(y, null, L(n.options, (r) => (t(), s("option", {
          key: String(r.value),
          value: r.value,
          disabled: r.disabled
        }, v(r.label), 9, Or))), 128))
      ], 16, Ur), [
        [_e, a.value]
      ]),
      f(S, { name: "chevron-down" })
    ]));
  }
}), Hr = {}, Ir = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Nr = {
  key: 0,
  class: "at-sidebar__foot"
};
function xr(d, a) {
  return t(), s("aside", Ir, [
    D(d.$slots, "header"),
    D(d.$slots, "default"),
    d.$slots.footer ? (t(), s("div", Nr, [
      D(d.$slots, "footer")
    ])) : g("", !0)
  ]);
}
const qr = /* @__PURE__ */ xe(Hr, [["render", xr]]), jr = { class: "at-stat__label" }, Rr = { class: "at-stat__row" }, Wr = { class: "at-stat__value" }, Kr = ["viewBox"], Gr = ["d"], Jr = ["d"], Zr = ["cx", "cy"], Yr = {
  key: 1,
  class: "at-stat__foot"
}, zt = 220, Ae = 32, Xr = /* @__PURE__ */ U({
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
    const a = d, n = C(() => {
      const e = a.spark;
      if (!e || e.length < 2) return null;
      const r = Math.min(...e), c = Math.max(...e), m = c - r || 1, p = e.map((V, z) => [2 + z * (zt - 4) / (e.length - 1), Ae - 3 - (V - r) / m * (Ae - 8)]), w = "M" + p.map((V) => V.map((z) => z.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: w, area: `${w} L${M[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: M };
    });
    return (e, r) => (t(), s("div", {
      class: P(["at-stat", e.color && ["at-stat--striped", `at-tone-${e.color}`]])
    }, [
      u("span", jr, v(e.label), 1),
      u("div", Rr, [
        u("span", Wr, [
          D(e.$slots, "value", {}, () => [
            _(v(e.value), 1)
          ])
        ]),
        e.delta ? (t(), s("span", {
          key: 0,
          class: P(["at-stat__delta", e.trend && `at-stat__delta--${e.trend}`])
        }, v(e.delta), 3)) : g("", !0)
      ]),
      n.value ? (t(), s("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${zt} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: n.value.area
        }, null, 8, Gr),
        u("path", {
          class: "line",
          d: n.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Jr),
        u("circle", {
          class: "end",
          cx: n.value.end[0],
          cy: n.value.end[1],
          r: "2.5"
        }, null, 8, Zr)
      ], 8, Kr)) : g("", !0),
      e.foot || e.$slots.foot ? (t(), s("span", Yr, [
        D(e.$slots, "foot", {}, () => [
          _(v(e.foot), 1)
        ])
      ])) : g("", !0)
    ], 2));
  }
}), ei = {
  key: 0,
  class: "at-toggle"
}, ti = ["disabled"], ai = ["disabled"], si = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "AtSwitch",
  props: /* @__PURE__ */ W({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const a = K(d, "modelValue");
    return (n, e) => n.label || n.$slots.default ? (t(), s("label", ei, [
      R(u("input", te(n.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (r) => a.value = r),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: n.disabled
      }), null, 16, ti), [
        [He, a.value]
      ]),
      D(n.$slots, "default", {}, () => [
        _(v(n.label), 1)
      ])
    ])) : R((t(), s("input", te({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (r) => a.value = r),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: n.disabled
    }), null, 16, ai)), [
      [He, a.value]
    ]);
  }
}), ni = { class: "at-table-wrap" }, li = { class: "at-table" }, oi = ["onClick"], ri = { key: 0 }, ii = ["colspan"], ui = /* @__PURE__ */ U({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (a, n) => (t(), s("div", ni, [
      u("table", li, [
        u("thead", null, [
          u("tr", null, [
            (t(!0), s(y, null, L(a.columns, (e) => (t(), s("th", {
              key: e.key,
              class: P({ "at-num": e.align === "right" }),
              style: Y(e.width ? { width: e.width } : void 0)
            }, v(e.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (t(!0), s(y, null, L(a.rows, (e, r) => (t(), s("tr", {
            key: a.rowKey ? e[a.rowKey] : r,
            style: Y(a.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => a.$emit("rowClick", e)
          }, [
            (t(!0), s(y, null, L(a.columns, (c) => (t(), s("td", {
              key: c.key,
              class: P({ "at-num": c.align === "right" })
            }, [
              D(a.$slots, `cell-${c.key}`, {
                row: e,
                value: e[c.key]
              }, () => [
                _(v(c.format ? c.format(e[c.key], e) : e[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, oi))), 128)),
          a.rows.length ? g("", !0) : (t(), s("tr", ri, [
            u("td", {
              colspan: a.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(a.empty ?? "Aucune donnée"), 9, ii)
          ]))
        ])
      ])
    ]));
  }
}), di = ["aria-label"], ci = ["aria-selected", "disabled", "onClick"], pi = {
  key: 1,
  class: "at-count"
}, vi = /* @__PURE__ */ U({
  __name: "AtTabs",
  props: /* @__PURE__ */ W({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const a = K(d, "modelValue");
    return (n, e) => (t(), s("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": n.label
    }, [
      (t(!0), s(y, null, L(n.items, (r) => (t(), s("button", {
        key: String(r.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": a.value === r.value,
        disabled: r.disabled,
        onClick: (c) => a.value = r.value
      }, [
        r.icon ? (t(), F(S, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : g("", !0),
        _(v(r.label) + " ", 1),
        r.count != null ? (t(), s("span", pi, v(r.count), 1)) : g("", !0)
      ], 8, ci))), 128))
    ], 8, di));
  }
}), mi = /* @__PURE__ */ U({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (a, n) => (t(), s("span", {
      class: P(["at-tag", a.color !== "gray" && `at-tag--${a.color}`])
    }, [
      D(a.$slots, "default", {}, () => [
        _(v(a.label), 1)
      ])
    ], 2));
  }
}), hi = ["rows", "placeholder", "disabled", "aria-invalid"], gi = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "AtTextarea",
  props: /* @__PURE__ */ W({
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
    const a = K(d, "modelValue");
    return (n, e) => R((t(), s("textarea", te(n.$attrs, {
      "onUpdate:modelValue": e[0] || (e[0] = (r) => a.value = r),
      class: "at-input",
      rows: n.rows ?? 3,
      placeholder: n.placeholder,
      disabled: n.disabled,
      "aria-invalid": n.invalid || void 0
    }), null, 16, hi)), [
      [ke, a.value]
    ]);
  }
}), jt = "atelier:theme", Rt = "atelier:density", Wt = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, Lt = (d, a) => {
  try {
    localStorage.setItem(d, a);
  } catch {
  }
}, Dt = () => typeof document < "u" ? document.documentElement : null, Ce = O(Wt(jt) || "system"), Kt = O(Wt(Rt) || "comfortable"), Gt = O(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Qt = !1;
function Jt() {
  if (Qt || typeof window > "u") return;
  Qt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (a) => {
    Gt.value = a.matches;
  }), ve(Ce, (a) => {
    const n = Dt();
    n && (a === "system" ? n.removeAttribute("data-theme") : n.dataset.theme = a, Lt(jt, a));
  }, { immediate: !0 }), ve(Kt, (a) => {
    const n = Dt();
    n && (n.dataset.density = a, Lt(Rt, a));
  }, { immediate: !0 });
}
function Ai() {
  Jt();
  const d = C(() => Ce.value === "system" ? Gt.value ? "dark" : "light" : Ce.value), a = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return Va() && Sa(() => {
  }), { mode: Ce, resolved: d, toggle: a };
}
function Ci() {
  return Jt(), { density: Kt };
}
const Vi = {
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
}, fi = (d) => `var(--${d})`, Si = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(fi), yi = {
  AtAppShell: Ua,
  AtAvatar: Ft,
  AtBadge: Pa,
  AtBreadcrumbs: qa,
  AtButton: I,
  AtCard: Ga,
  AtCheckbox: Ot,
  AtDataView: uo,
  AtDrawer: fo,
  AtDropdown: ko,
  AtEmpty: wo,
  AtField: ut,
  AtIcon: S,
  AtIconTile: qt,
  AtInput: dt,
  AtKbd: gt,
  AtLogo: Ho,
  AtLogin: Zo,
  AtMenu: Nt,
  AtMenuItem: er,
  AtMenuLabel: nr,
  AtMenuSeparator: ir,
  AtModal: fr,
  AtNavGroup: kr,
  AtNavItem: Mr,
  AtPage: Sr,
  AtPopover: de,
  AtProgress: Pt,
  AtPropertyEditor: ht,
  AtPropertyList: Lr,
  AtPropertyValue: ce,
  AtSegment: Br,
  AtSelect: Pr,
  AtSidebar: qr,
  AtStat: Xr,
  AtSwitch: si,
  AtTable: ui,
  AtTabs: vi,
  AtTag: mi,
  AtTextarea: gi
}, Ti = {
  install(d) {
    for (const [a, n] of Object.entries(yi)) d.component(a, n);
  }
};
export {
  Ua as AtAppShell,
  Ft as AtAvatar,
  Pa as AtBadge,
  qa as AtBreadcrumbs,
  I as AtButton,
  Ga as AtCard,
  Ot as AtCheckbox,
  uo as AtDataView,
  fo as AtDrawer,
  ko as AtDropdown,
  wo as AtEmpty,
  ut as AtField,
  S as AtIcon,
  qt as AtIconTile,
  dt as AtInput,
  gt as AtKbd,
  Zo as AtLogin,
  Ho as AtLogo,
  Nt as AtMenu,
  er as AtMenuItem,
  nr as AtMenuLabel,
  ir as AtMenuSeparator,
  fr as AtModal,
  kr as AtNavGroup,
  Mr as AtNavItem,
  Sr as AtPage,
  de as AtPopover,
  Pt as AtProgress,
  ht as AtPropertyEditor,
  Lr as AtPropertyList,
  ce as AtPropertyValue,
  Br as AtSegment,
  Pr as AtSelect,
  qr as AtSidebar,
  Xr as AtStat,
  si as AtSwitch,
  ui as AtTable,
  vi as AtTabs,
  mi as AtTag,
  gi as AtTextarea,
  Ti as Atelier,
  Oe as LAYOUTS,
  Bo as LOGO_TILE,
  Ie as NONE,
  nt as OPS,
  Ct as OP_LABEL,
  Mi as WORDMARK,
  as as addDays,
  rs as applyView,
  lt as brandGrid,
  Si as chartColors,
  os as compareRows,
  St as createView,
  fi as cssVar,
  Ti as default,
  ds as defaultsFromFilters,
  _i as filter,
  Ne as findOption,
  it as formatDate,
  vs as formatMonth,
  Z as getValue,
  is as groupRows,
  Ut as icons,
  ae as isEmpty,
  ct as logoApps,
  ls as matchRule,
  us as monthGrid,
  $e as optionsOf,
  ki as registerIcons,
  $i as registerLogoApps,
  Vt as shiftMonth,
  wi as sort,
  Ve as today,
  Vi as tokens,
  we as uid,
  Ci as useDensity,
  xt as useId,
  Ai as useTheme
};
//# sourceMappingURL=atelier.js.map

import { defineComponent as x, computed as S, openBlock as a, createElementBlock as n, normalizeStyle as Q, normalizeClass as E, createBlock as O, createCommentVNode as f, renderSlot as z, createTextVNode as k, toDisplayString as v, ref as U, watch as pe, createElementVNode as u, createVNode as g, Fragment as b, renderList as T, resolveDynamicComponent as ha, withCtx as F, useModel as Y, withDirectives as j, mergeProps as ve, vModelCheckbox as Oe, mergeModels as G, onBeforeUnmount as rt, Teleport as it, nextTick as ze, unref as B, withKeys as ga, vModelDynamic as st, shallowRef as fa, vModelText as ke, withModifiers as ie, isRef as be, vModelSelect as _e, Transition as Vt, normalizeProps as ya, guardReactiveProps as ba, getCurrentScope as ka, onScopeDispose as _a } from "vue";
const zt = {
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
  alert: '<path d="M8 2.5l6 10.5H2z"/><path d="M8 6.5v3M8 11.2h.01"/>'
};
function Qr(d) {
  Object.assign(zt, d);
}
const wa = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], C = /* @__PURE__ */ x({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const e = d, l = S(() => zt[e.name] ?? "");
    return (t, i) => (a(), n("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: t.size,
      height: t.size,
      style: Q(t.size !== 16 ? { width: t.size + "px", height: t.size + "px" } : void 0),
      role: t.label ? "img" : void 0,
      "aria-label": t.label,
      "aria-hidden": t.label ? void 0 : "true",
      innerHTML: l.value
    }, null, 12, wa));
  }
}), $a = ["href", "aria-label"], Ma = ["type", "disabled", "aria-busy", "aria-label"], Aa = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, N = /* @__PURE__ */ x({
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
    const e = d, l = S(() => [
      "at-btn",
      `at-btn--${e.variant}`,
      e.size !== "md" && `at-btn--${e.size}`,
      e.iconOnly && "at-btn--icon"
    ]);
    return (t, i) => t.href && !t.disabled ? (a(), n("a", {
      key: 0,
      href: t.href,
      class: E(l.value),
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.icon ? (a(), O(C, {
        key: 0,
        name: t.icon
      }, null, 8, ["name"])) : f("", !0),
      z(t.$slots, "default", {}, () => [
        k(v(t.iconOnly ? "" : t.label), 1)
      ])
    ], 10, $a)) : (a(), n("button", {
      key: 1,
      type: t.type,
      class: E(l.value),
      disabled: t.disabled || t.loading,
      "aria-busy": t.loading || void 0,
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.loading ? (a(), n("span", Aa)) : t.icon ? (a(), O(C, {
        key: 1,
        name: t.icon
      }, null, 8, ["name"])) : f("", !0),
      t.iconOnly ? f("", !0) : z(t.$slots, "default", { key: 2 }, () => [
        k(v(t.label), 1)
      ])
    ], 10, Ma));
  }
}), Ca = { class: "at-shell__side" }, Sa = { class: "at-shell__main" }, Ta = { class: "at-topbar" }, Va = /* @__PURE__ */ x({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: e }) {
    const l = d, t = U(!1), i = U();
    return pe(() => l.routeKey, () => {
      t.value = !1, i.value && (i.value.scrollTop = 0);
    }), e({ closeNav: () => t.value = !1 }), (c, h) => (a(), n("div", {
      class: E(["at-shell", t.value && "at-shell--open"])
    }, [
      u("div", Ca, [
        z(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: h[0] || (h[0] = (p) => t.value = !1)
      }),
      u("div", Sa, [
        u("header", Ta, [
          g(N, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: h[1] || (h[1] = (p) => t.value = !t.value)
          }),
          z(c.$slots, "topbar")
        ]),
        u("main", {
          ref_key: "page",
          ref: i,
          class: "at-shell__page"
        }, [
          z(c.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), za = ["title"], Da = ["src", "alt"], Dt = /* @__PURE__ */ x({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const e = d, l = S(() => e.name.split(/\s+/).filter(Boolean).map((t) => t[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (t, i) => (a(), n("span", {
      class: E(["at-avatar", t.size !== "sm" && `at-avatar--${t.size}`]),
      title: t.name
    }, [
      t.src ? (a(), n("img", {
        key: 0,
        src: t.src,
        alt: t.name
      }, null, 8, Da)) : (a(), n(b, { key: 1 }, [
        k(v(l.value), 1)
      ], 64))
    ], 10, za));
  }
}), La = /* @__PURE__ */ x({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (e, l) => (a(), n("span", {
      class: E(["at-badge", e.tone !== "neutral" && `at-badge--${e.tone}`])
    }, [
      z(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ])
    ], 2));
  }
}), Ba = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ea = {
  key: 0,
  "aria-hidden": "true"
}, xa = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Fa = ["href", "onClick"], Pa = /* @__PURE__ */ x({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (e, l) => (a(), n("nav", Ba, [
      (a(!0), n(b, null, T(e.items, (t, i) => (a(), n(b, { key: i }, [
        i > 0 ? (a(), n("span", Ea, "/")) : f("", !0),
        i === e.items.length - 1 ? (a(), n("span", xa, v(t.label), 1)) : (a(), n("a", {
          key: 2,
          href: t.href ?? "#",
          onClick: (c) => t.onClick && (c.preventDefault(), t.onClick())
        }, v(t.label), 9, Fa))
      ], 64))), 128))
    ]));
  }
}), Ua = {
  key: 0,
  class: "at-card__head"
}, Oa = {
  key: 0,
  class: "at-card__title"
}, Na = {
  key: 1,
  class: "at-card__desc"
}, Ia = {
  key: 1,
  class: "at-card__foot"
}, qa = /* @__PURE__ */ x({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (e, l) => (a(), O(ha(e.href ? "a" : e.as || "section"), {
      href: e.href,
      class: E(["at-card", e.href && "at-card--link", e.color && ["at-card--striped", `at-tone-${e.color}`]])
    }, {
      default: F(() => [
        e.title || e.description || e.$slots.actions ? (a(), n("div", Ua, [
          u("div", null, [
            e.title ? (a(), n("h3", Oa, v(e.title), 1)) : f("", !0),
            e.description ? (a(), n("p", Na, v(e.description), 1)) : f("", !0)
          ]),
          z(e.$slots, "actions")
        ])) : f("", !0),
        z(e.$slots, "default"),
        e.$slots.footer ? (a(), n("div", Ia, [
          z(e.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), Ha = {
  key: 0,
  class: "at-toggle"
}, ja = ["indeterminate", "disabled"], Ra = ["indeterminate", "disabled"], Wa = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "AtCheckbox",
  props: /* @__PURE__ */ G({
    label: {},
    indeterminate: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const e = Y(d, "modelValue");
    return (l, t) => l.label || l.$slots.default ? (a(), n("label", Ha, [
      j(u("input", ve(l.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
        type: "checkbox",
        class: "at-check",
        indeterminate: l.indeterminate,
        disabled: l.disabled
      }), null, 16, ja), [
        [Oe, e.value]
      ]),
      z(l.$slots, "default", {}, () => [
        k(v(l.label), 1)
      ])
    ])) : j((a(), n("input", ve({ key: 1 }, l.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (i) => e.value = i),
      type: "checkbox",
      class: "at-check",
      indeterminate: l.indeterminate,
      disabled: l.disabled
    }), null, 16, Ra)), [
      [Oe, e.value]
    ]);
  }
}), ue = /* @__PURE__ */ x({
  __name: "AtPopover",
  props: /* @__PURE__ */ G({
    anchor: {},
    align: { default: "start" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ G(["close"], ["update:open"]),
  setup(d, { expose: e, emit: l }) {
    const t = Y(d, "open"), i = d, c = l, h = U(), p = U(), w = U({ top: -9999, left: -9999 }), M = S(() => {
      var P;
      return i.anchor ?? ((P = h.value) == null ? void 0 : P.firstElementChild) ?? h.value ?? null;
    });
    function A() {
      const P = M.value, q = p.value;
      if (!P || !q) return;
      const H = P.getBoundingClientRect(), re = q.offsetWidth, X = q.offsetHeight;
      let le = i.align === "end" ? H.right - re : H.left;
      le = Math.max(8, Math.min(le, window.innerWidth - re - 8));
      let oe = H.bottom + i.offset;
      oe + X > window.innerHeight - 8 && (oe = Math.max(8, H.top - X - i.offset)), (Math.abs(oe - w.value.top) > 0.5 || Math.abs(le - w.value.left) > 0.5) && (w.value = { top: oe, left: le });
    }
    function D() {
      t.value && (t.value = !1, c("close"));
    }
    function I() {
      t.value ? D() : t.value = !0;
    }
    function R(P) {
      var H, re, X;
      const q = P.target;
      (H = p.value) != null && H.contains(q) || (re = M.value) != null && re.contains(q) || (X = q.closest) != null && X.call(q, ".at-pop") || D();
    }
    function te(P) {
      var q, H;
      P.key === "Escape" && (P.stopPropagation(), D(), (H = (q = M.value) == null ? void 0 : q.focus) == null || H.call(q));
    }
    let _ = null;
    function $() {
      setTimeout(() => document.addEventListener("mousedown", R), 0), document.addEventListener("keydown", te, !0), window.addEventListener("resize", A), window.addEventListener("scroll", A, !0), ze(() => {
        A(), p.value && (_ = new ResizeObserver(A), _.observe(p.value));
      });
    }
    function L() {
      document.removeEventListener("mousedown", R), document.removeEventListener("keydown", te, !0), window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0), _ == null || _.disconnect(), _ = null, w.value = { top: -9999, left: -9999 };
    }
    return pe(t, (P) => P ? $() : L(), { immediate: !0 }), rt(L), e({ place: A, close: D, toggle: I }), (P, q) => (a(), n(b, null, [
      P.$slots.trigger ? (a(), n("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: h,
        style: { display: "contents" }
      }, [
        z(P.$slots, "trigger", {
          toggle: I,
          open: t.value
        })
      ], 512)) : f("", !0),
      (a(), O(it, { to: "body" }, [
        t.value ? (a(), n("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: Q({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          z(P.$slots, "default", { close: D })
        ], 4)) : f("", !0)
      ]))
    ], 64));
  }
}), Ka = ["aria-valuenow", "aria-label"], Ga = { class: "at-progress__track" }, Ja = {
  key: 0,
  class: "at-progress__label"
}, Lt = /* @__PURE__ */ x({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const e = d, l = S(() => Math.max(0, Math.min(100, Math.round(e.value / e.max * 100))));
    return (t, i) => (a(), n("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": l.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": t.label
    }, [
      u("span", Ga, [
        u("span", {
          class: "at-progress__bar",
          style: Q({ width: l.value + "%" })
        }, null, 4)
      ]),
      t.showLabel ? (a(), n("span", Ja, v(l.value) + " %", 1)) : f("", !0)
    ], 8, Ka));
  }
}), Ne = "__none", lt = (d) => String(d).padStart(2, "0"), ut = (d) => `${d.getFullYear()}-${lt(d.getMonth() + 1)}-${lt(d.getDate())}`, Se = () => ut(/* @__PURE__ */ new Date()), Ya = (d, e) => {
  const l = /* @__PURE__ */ new Date(d + "T00:00");
  return l.setDate(l.getDate() + e), ut(l);
}, we = () => Math.random().toString(36).slice(2, 10), ee = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, J = (d, e) => e.compute ? e.compute(d) : d[e.key], $e = (d, e) => typeof d.options == "function" ? d.options(e) : d.options ?? [], Ie = (d, e, l) => $e(d, e).find((t) => t.value === l), Te = (d) => !d.compute && !d.readonly && d.type !== "progress", Xa = ["status", "select", "relation", "person"], Ve = (d) => Xa.includes(d.type), Za = {
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
}, Ue = (d) => d.icon ?? Za[d.type] ?? "text", Pe = [
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
}, _t = {
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
}, Bt = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function Qa(d, e, l, t = Se()) {
  const i = J(d, e);
  if (!Bt.includes(l.op) && ee(l.value)) return !0;
  const c = (h) => String(h ?? "").toLowerCase();
  switch (l.op) {
    case "empty":
      return ee(i);
    case "notempty":
      return !ee(i);
    case "contains":
      return e.type === "multi" ? (i ?? []).includes(l.value) : c(i).includes(c(l.value));
    case "notcontains":
      return e.type === "multi" ? !(i ?? []).includes(l.value) : !c(i).includes(c(l.value));
    case "is":
      return i === l.value;
    case "isnot":
      return i !== l.value;
    case "before":
      return !!i && i < l.value;
    case "after":
      return !!i && i > l.value;
    case "past":
      return !!i && i < t;
    case "week":
      return !!i && i >= t && i <= Ya(t, 7);
    case "eq":
      return Number(i) === Number(l.value);
    case "gt":
      return Number(i) > Number(l.value);
    case "lt":
      return Number(i) < Number(l.value);
    case "checked":
      return !!i;
    case "unchecked":
      return !i;
  }
  return !0;
}
function en(d, e, l) {
  const t = J(e, d), i = J(l, d), c = ee(t), h = ee(i);
  if (c || h) return c === h ? 0 : c ? 1 : -1;
  if (Ve(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(t) - p.indexOf(i);
  }
  return d.type === "number" || d.type === "progress" ? t - i : d.type === "checkbox" ? Number(i) - Number(t) : d.type === "multi" ? t.length - i.length : String(t).localeCompare(String(i), "fr");
}
function tn(d, e, l, t = "") {
  const i = Object.fromEntries(e.map((M) => [M.key, M])), c = e.find((M) => M.type === "title"), h = t.trim().toLowerCase(), p = d.filter((M) => (!h || !c || String(M[c.key] ?? "").toLowerCase().includes(h)) && l.filters.every((A) => !i[A.prop] || Qa(M, i[A.prop], A))), w = l.sorts.filter((M) => i[M.prop]);
  return w.length ? p.sort((M, A) => {
    for (const D of w) {
      const I = i[D.prop], R = ee(J(M, I)), te = ee(J(A, I));
      if (R !== te) return R ? 1 : -1;
      if (R) continue;
      const _ = en(I, M, A);
      if (_) return D.dir === "desc" ? -_ : _;
    }
    return 0;
  }) : p;
}
function an(d, e, l = !1) {
  if (!e) return [{ key: Ne, option: null, rows: d }];
  const t = $e(e).map((h) => ({ key: h.value, option: h, rows: [] })), i = { key: Ne, option: null, rows: [] }, c = Object.fromEntries(t.map((h) => [h.key, h]));
  for (const h of d) (c[J(h, e)] ?? i).rows.push(h);
  return (i.rows.length || l) && t.push(i), l ? t : t.filter((h) => h.rows.length);
}
function nn(d) {
  const [e, l] = d.split("-").map(Number), i = (new Date(e, l - 1, 1).getDay() + 6) % 7, c = [];
  for (let h = 0; h < 42; h++) {
    const p = new Date(e, l - 1, 1 - i + h);
    c.push({ iso: ut(p), day: p.getDate(), outside: p.getMonth() !== l - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const wt = (d, e) => {
  const [l, t] = d.split("-").map(Number), i = new Date(l, t - 1 + e, 1);
  return `${i.getFullYear()}-${lt(i.getMonth() + 1)}`;
};
function $t(d, e = "table", l = {}) {
  return { id: we(), name: d, layout: e, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...l };
}
const ei = (d, e, l = "") => ({ id: we(), prop: d, op: e, value: l }), ti = (d, e = "asc") => ({ id: we(), prop: d, dir: e });
function sn(d, e) {
  const l = {};
  for (const t of d.filters) {
    const i = e.find((c) => c.key === t.prop);
    !i || !Te(i) || ee(t.value) || (t.op === "is" && (l[t.prop] = t.value), t.op === "contains" && i.type === "multi" && (l[t.prop] = [t.value]));
  }
  return l;
}
const ln = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), on = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), Et = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function ot(d) {
  if (!d) return "";
  const e = /* @__PURE__ */ new Date(d + "T00:00");
  return (e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? ln : on).format(e);
}
const rn = (d) => {
  const [e, l] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(e, l - 1, 1));
}, un = {
  key: 0,
  class: "at-pv-title"
}, dn = ["checked"], cn = {
  key: 2,
  class: "at-pv-empty"
}, pn = {
  key: 5,
  class: "at-pv-multi"
}, vn = {
  key: 6,
  class: "at-pv-person"
}, mn = { class: "at-ellipsis" }, hn = {
  key: 7,
  class: "at-pv-rel"
}, gn = { class: "at-ellipsis" }, fn = {
  key: 9,
  class: "at-num"
}, yn = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, de = /* @__PURE__ */ x({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const e = d, l = S(() => J(e.row, e.prop)), t = S(() => e.prop.type), i = S(() => Ve(e.prop) ? Ie(e.prop, e.row, l.value) : void 0), c = S(() => t.value === "multi" ? (l.value ?? []).map((w) => Ie(e.prop, e.row, w)).filter(Boolean) : []), h = S(() => {
      var w, M;
      return t.value === "date" && !!((M = (w = e.prop).overdue) != null && M.call(w, e.row));
    }), p = S(() => {
      var w;
      return ((w = i.value) == null ? void 0 : w.label) ?? String(l.value ?? "");
    });
    return (w, M) => {
      var A, D, I;
      return t.value === "title" ? (a(), n("span", un, v(l.value || "Sans titre"), 1)) : t.value === "checkbox" ? (a(), n("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!l.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, dn)) : B(ee)(l.value) ? (a(), n("span", cn, "—")) : t.value === "status" ? (a(), n("span", {
        key: 3,
        class: E(["at-badge", ((A = i.value) == null ? void 0 : A.tone) && i.value.tone !== "neutral" && `at-badge--${i.value.tone}`])
      }, v(p.value), 3)) : t.value === "select" ? (a(), n("span", {
        key: 4,
        class: E(["at-tag", ((D = i.value) == null ? void 0 : D.color) && i.value.color !== "gray" && `at-tag--${i.value.color}`])
      }, v(p.value), 3)) : t.value === "multi" ? (a(), n("span", pn, [
        (a(!0), n(b, null, T(c.value, (R) => (a(), n("span", {
          key: R.value,
          class: E(["at-tag", R.color && R.color !== "gray" && `at-tag--${R.color}`])
        }, v(R.label), 3))), 128))
      ])) : t.value === "person" ? (a(), n("span", vn, [
        g(Dt, { name: p.value }, null, 8, ["name"]),
        u("span", mn, v(p.value), 1)
      ])) : t.value === "relation" ? (a(), n("span", hn, [
        (I = i.value) != null && I.mark ? (a(), n("span", {
          key: 0,
          class: "at-pv-mark",
          style: Q({ background: i.value.mark })
        }, null, 4)) : (a(), O(C, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", gn, v(i.value ? i.value.label : "Introuvable"), 1)
      ])) : t.value === "date" ? (a(), n("span", {
        key: 8,
        class: E(["at-pv-date", h.value && "at-pv-over"])
      }, v(B(ot)(l.value)), 3)) : t.value === "number" ? (a(), n("span", fn, v(B(Et).format(Number(l.value))) + v(w.prop.suffix ?? ""), 1)) : t.value === "progress" ? (a(), O(Lt, {
        key: 10,
        value: Number(l.value)
      }, null, 8, ["value"])) : (a(), n("span", yn, v(l.value), 1));
    };
  }
}), bn = ["aria-label"], kn = { class: "at-menu-label" }, _n = ["aria-selected", "onClick"], wn = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, $n = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Mn = ["aria-label"], An = { class: "at-menu-label" }, Cn = ["aria-checked", "onClick"], Sn = ["checked"], Tn = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Vn = { class: "at-menu-title" }, zn = ["value", "aria-label"], Dn = { class: "at-menu-actions" }, Ln = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Bn = { class: "at-menu-title" }, En = ["type", "aria-label"], dt = /* @__PURE__ */ x({
  __name: "AtPropertyEditor",
  props: /* @__PURE__ */ G({
    prop: {},
    row: {},
    anchor: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ G(["update"], ["update:open"]),
  setup(d, { emit: e }) {
    const l = Y(d, "open"), t = d, i = e, c = U(""), h = U(), p = S(() => {
      const _ = t.prop;
      return _ ? Ve(_) ? "options" : _.type === "multi" ? "multi" : _.type === "date" ? "date" : "input" : null;
    }), w = S(() => t.prop ? $e(t.prop, t.row) : []), M = S(() => t.prop && t.row ? t.row[t.prop.key] : null);
    pe(l, (_) => {
      _ && (c.value = M.value ?? "", ze(() => {
        var L, P;
        const $ = (L = h.value) == null ? void 0 : L.querySelector("input, button");
        $ == null || $.focus(), (P = $ == null ? void 0 : $.select) == null || P.call($);
      }));
    });
    const A = (_) => ({ ...t.row, [t.prop.key]: _ });
    function D(_, $ = !0) {
      i("update", _), $ && (l.value = !1);
    }
    function I(_) {
      const $ = [...M.value ?? []], L = $.indexOf(_);
      L < 0 ? $.push(_) : $.splice(L, 1), D($, !1);
    }
    function R() {
      var $;
      let _ = c.value;
      (($ = t.prop) == null ? void 0 : $.type) === "number" && (_ = _ === "" || _ == null ? null : Number(_)), _ !== M.value && i("update", _), l.value = !1;
    }
    function te() {
      var _;
      if (p.value === "input") {
        let $ = c.value;
        ((_ = t.prop) == null ? void 0 : _.type) === "number" && ($ = $ === "" ? null : Number($)), $ !== M.value && i("update", $);
      }
    }
    return (_, $) => (a(), O(ue, {
      open: l.value,
      "onUpdate:open": $[5] || ($[5] = (L) => l.value = L),
      anchor: _.anchor,
      onClose: te
    }, {
      default: F(() => [
        _.prop ? (a(), n("div", {
          key: 0,
          ref_key: "box",
          ref: h
        }, [
          p.value === "options" ? (a(), n("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": _.prop.name
          }, [
            u("div", kn, v(_.prop.name), 1),
            (a(!0), n(b, null, T(w.value, (L) => (a(), n("button", {
              key: L.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": L.value === M.value,
              onClick: (P) => D(L.value)
            }, [
              g(de, {
                prop: _.prop,
                row: A(L.value)
              }, null, 8, ["prop", "row"]),
              L.value === M.value ? (a(), O(C, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : f("", !0)
            ], 8, _n))), 128)),
            w.value.length ? f("", !0) : (a(), n("div", wn, "Aucune option disponible")),
            _.prop.required ? f("", !0) : (a(), n(b, { key: 1 }, [
              $n,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: $[0] || ($[0] = (L) => D(null))
              }, [
                g(C, { name: "x" }),
                k("Effacer")
              ])
            ], 64))
          ], 8, bn)) : p.value === "multi" ? (a(), n("div", {
            key: 1,
            class: "at-menu",
            "aria-label": _.prop.name
          }, [
            u("div", An, v(_.prop.name), 1),
            (a(!0), n(b, null, T(w.value, (L) => (a(), n("button", {
              key: L.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(L.value),
              onClick: (P) => I(L.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(L.value)
              }, null, 8, Sn),
              u("span", {
                class: E(["at-tag", L.color && L.color !== "gray" && `at-tag--${L.color}`])
              }, v(L.label), 3)
            ], 8, Cn))), 128))
          ], 8, Mn)) : p.value === "date" ? (a(), n("div", Tn, [
            u("span", Vn, v(_.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": _.prop.name,
              onChange: $[1] || ($[1] = (L) => D(L.target.value || null, !1))
            }, null, 40, zn),
            u("div", Dn, [
              g(N, {
                size: "sm",
                onClick: $[2] || ($[2] = (L) => D(B(Se)()))
              }, {
                default: F(() => [
                  k("Aujourd’hui")
                ]),
                _: 1
              }),
              g(N, {
                size: "sm",
                variant: "ghost",
                onClick: $[3] || ($[3] = (L) => D(null))
              }, {
                default: F(() => [
                  k("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (a(), n("div", Ln, [
            u("span", Bn, v(_.prop.name), 1),
            j(u("input", {
              "onUpdate:modelValue": $[4] || ($[4] = (L) => c.value = L),
              class: "at-input",
              type: _.prop.type === "number" ? "number" : "text",
              "aria-label": _.prop.name,
              onKeydown: ga(R, ["enter"])
            }, null, 40, En), [
              [st, c.value]
            ])
          ]))
        ], 512)) : f("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), xn = { class: "at-dv" }, Fn = { class: "at-dv-viewsbar" }, Pn = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Un = ["aria-selected", "title", "onClick"], On = { class: "at-toolbar at-dv-toolbar" }, Nn = {
  key: 0,
  class: "at-dv-n"
}, In = {
  key: 0,
  class: "at-dv-n"
}, qn = { class: "at-input-wrap at-dv-search" }, Hn = {
  key: 0,
  class: "at-dv-chips"
}, jn = { class: "at-table-wrap" }, Rn = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Wn = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Kn = { class: "at-cell-check" }, Gn = ["checked", "indeterminate"], Jn = { class: "at-th" }, Yn = ["onMousedown"], Xn = { class: "at-cell-check" }, Zn = {
  key: 0,
  class: "at-dv-grouprow"
}, Qn = ["colspan"], es = ["aria-expanded", "onClick"], ts = {
  key: 1,
  class: "at-pv-empty"
}, as = { class: "at-count" }, ns = ["aria-selected"], ss = { class: "at-cell-check" }, ls = ["checked", "onChange"], os = ["onClick"], rs = ["onClick"], is = /* @__PURE__ */ u("td", null, null, -1), us = { class: "at-dv-newrow" }, ds = /* @__PURE__ */ u("td", null, null, -1), cs = ["colspan"], ps = ["onClick"], vs = /* @__PURE__ */ u("td", null, null, -1), ms = /* @__PURE__ */ u("td", null, null, -1), hs = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, gs = { class: "at-num" }, fs = {
  key: 2,
  class: "at-dv-board"
}, ys = {
  key: 0,
  class: "at-empty"
}, bs = ["onDragover", "onDrop"], ks = { class: "at-dv-colhead" }, _s = {
  key: 1,
  class: "at-pv-empty"
}, ws = { class: "at-count" }, $s = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), Ms = { class: "at-dv-cards" }, As = ["onDragstart", "onClick"], Cs = { class: "at-dv-cardtitle" }, Ss = {
  key: 0,
  class: "at-dv-cardprops"
}, Ts = ["onClick"], Vs = { key: 3 }, zs = {
  key: 0,
  class: "at-empty"
}, Ds = {
  key: 1,
  class: "at-dv-list"
}, Ls = {
  key: 0,
  class: "at-dv-lgroup"
}, Bs = ["aria-expanded", "onClick"], Es = {
  key: 1,
  class: "at-pv-empty"
}, xs = { class: "at-count" }, Fs = ["onClick"], Ps = { class: "at-pv-title" }, Us = { class: "at-dv-liprops" }, Os = { class: "at-dv-newline" }, Ns = { class: "at-dv-calhead" }, Is = { class: "at-dv-calmonth" }, qs = { class: "at-dv-calnote" }, Hs = { class: "at-dv-calwrap" }, js = { class: "at-dv-calgrid" }, Rs = { class: "at-dv-calgrid" }, Ws = ["onDragover", "onDrop"], Ks = { class: "at-dv-daynum" }, Gs = ["aria-label", "onClick"], Js = ["onDragstart", "onClick"], Ys = {
  class: "at-menu",
  role: "menu"
}, Xs = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), Zs = ["onClick"], Qs = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, el = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), tl = { class: "at-rules" }, al = {
  key: 0,
  class: "at-menu-empty"
}, nl = { class: "at-select" }, sl = ["onUpdate:modelValue", "onChange"], ll = ["value"], ol = { class: "at-select" }, rl = ["onUpdate:modelValue"], il = ["value"], ul = {
  key: 0,
  class: "at-select"
}, dl = ["onUpdate:modelValue"], cl = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), pl = ["value"], vl = ["onUpdate:modelValue"], ml = ["onUpdate:modelValue"], hl = ["onUpdate:modelValue"], gl = { key: 1 }, fl = { class: "at-menu-actions" }, yl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, bl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), kl = { class: "at-rules" }, _l = {
  key: 0,
  class: "at-menu-empty"
}, wl = { class: "at-select" }, $l = ["onUpdate:modelValue"], Ml = ["value"], Al = { class: "at-select" }, Cl = ["onUpdate:modelValue"], Sl = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Tl = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), Vl = [
  Sl,
  Tl
], zl = { class: "at-menu-actions" }, Dl = {
  class: "at-menu",
  role: "menu"
}, Ll = { class: "at-menu-label" }, Bl = ["onClick"], El = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, xl = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Fl = ["draggable", "onDragstart", "onDragover", "onDrop"], Pl = { class: "at-pi-name" }, Ul = ["aria-label", "checked", "disabled", "onChange"], Ol = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Nl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Il = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, ql = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), Hl = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, jl = ["aria-pressed", "onClick"], Rl = {
  key: 0,
  class: "at-field-row"
}, Wl = { class: "at-select" }, Kl = ["value"], Gl = {
  key: 0,
  value: ""
}, Jl = ["value"], Yl = {
  key: 1,
  class: "at-field-row"
}, Xl = /* @__PURE__ */ u("span", null, "Date utilisée", -1), Zl = { class: "at-select" }, Ql = ["value"], eo = ["value"], to = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), ao = ["disabled"], no = /* @__PURE__ */ x({
  __name: "AtDataView",
  props: /* @__PURE__ */ G({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean }
  }, {
    views: { default: () => [$t("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ G(["update", "create", "open", "delete"], ["update:views", "update:activeView"]),
  setup(d, { emit: e }) {
    const l = d, t = Y(d, "views"), i = Y(d, "activeView"), c = e, h = (o) => o[l.rowKey], p = S(() => t.value.find((o) => o.id === i.value) ?? t.value[0]), w = S(() => Object.fromEntries(l.schema.map((o) => [o.key, o]))), M = S(() => l.schema.find((o) => o.type === "title")), A = S(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? l.rowKey;
    }), D = S(() => {
      const o = (p.value.order ?? []).filter((y) => w.value[y]);
      for (const y of l.schema) o.includes(y.key) || o.push(y.key);
      const r = o.indexOf(A.value);
      return r > 0 && (o.splice(r, 1), o.unshift(A.value)), o.map((y) => w.value[y]);
    }), I = S(() => D.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), R = S(() => I.value.filter((o) => o.type !== "title")), te = S(() => l.schema.filter(Ve)), _ = S(() => l.schema.filter((o) => o.type === "date")), $ = S(() => l.schema.find((o) => o.type === "status")), L = U(""), P = S(() => tn(l.rows, l.schema, p.value, L.value)), q = S(() => {
      var r, y;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((r = $.value) == null ? void 0 : r.key) ?? ((y = te.value[0]) == null ? void 0 : y.key) ?? null : o;
    }), H = S(() => q.value && p.value.layout !== "calendar" ? w.value[q.value] : null), re = S(() => an(P.value, H.value, p.value.layout === "board")), X = (o) => ({ [q.value]: o === Ne ? null : o }), le = S(() => p.value.filters.filter((o) => w.value[o.prop])), oe = S(() => p.value.sorts.filter((o) => w.value[o.prop])), He = U({}), ae = U(null), ce = U(null);
    function ne(o, r) {
      if (ae.value === o && ce.value === r) {
        ae.value = null;
        return;
      }
      ce.value = r ?? null, ae.value = o;
    }
    const he = (o) => S({ get: () => ae.value === o, set: (r) => {
      !r && ae.value === o && (ae.value = null);
    } }), je = he("add"), Re = he("filter"), We = he("sort"), Ke = he("group"), Ge = he("props"), Je = he("settings");
    function Ht(o) {
      o.id === p.value.id ? ne("settings", He.value[o.id]) : i.value = o.id;
    }
    const pt = () => {
      var o, r;
      return ((o = $.value) == null ? void 0 : o.key) ?? ((r = te.value[0]) == null ? void 0 : r.key) ?? null;
    };
    function jt(o) {
      const r = $t(Pe.find((y) => y.value === o).label, o, { groupBy: o === "board" ? pt() : null });
      t.value.push(r), i.value = r.id, ae.value = null, ze(() => ne("settings", He.value[r.id]));
    }
    function Rt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = pt());
    }
    function Wt() {
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", t.value.push(o), i.value = o.id, ae.value = null;
    }
    function Kt() {
      if (t.value.length < 2) return;
      const o = t.value.indexOf(p.value);
      t.value.splice(o, 1), i.value = t.value[Math.max(0, o - 1)].id, ae.value = null;
    }
    pe(() => p.value.id, () => {
      W.value = [], ae.value = null;
    });
    function Gt() {
      const o = l.schema.find((r) => r.type !== "title" && r.type !== "progress") ?? l.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: nt[o.type][0], value: "" });
    }
    function Jt(o) {
      o.op = nt[w.value[o.prop].type][0], o.value = "";
    }
    const Yt = (o) => {
      var r;
      return nt[(r = w.value[o.prop]) == null ? void 0 : r.type] ?? [];
    }, vt = (o) => !Bt.includes(o.op);
    function De(o) {
      const r = w.value[o.prop];
      return r ? Ve(r) || r.type === "multi" ? "options" : r.type === "date" ? "date" : r.type === "number" || r.type === "progress" ? "number" : "text" : "text";
    }
    function Ye(o) {
      var K;
      const r = w.value[o.prop];
      let y = "";
      if (vt(o)) {
        const s = De(o);
        y = s === "options" ? ((K = Ie(r, void 0, o.value)) == null ? void 0 : K.label) ?? "…" : s === "date" ? ot(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: r.name, op: _t[o.op], val: y };
    }
    function Xt() {
      const o = p.value.sorts.map((y) => y.prop), r = l.schema.find((y) => !o.includes(y.key)) ?? l.schema[0];
      p.value.sorts.push({ id: we(), prop: r.key, dir: "asc" });
    }
    const mt = (o, r) => {
      const y = o.indexOf(r);
      y >= 0 && o.splice(y, 1);
    };
    function Zt() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Xe(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (ae.value = null);
    }
    function Qt(o) {
      const r = p.value.hidden, y = r.indexOf(o.key);
      y < 0 ? r.push(o.key) : r.splice(y, 1);
    }
    function ht(o) {
      p.value.hidden = o ? [] : l.schema.filter((r) => r.type !== "title").map((r) => r.key);
    }
    const Me = U(null), Le = U(null);
    function ea(o) {
      if (Me.value == null) return;
      const r = D.value.map((K) => K.key), [y] = r.splice(Me.value, 1);
      r.splice(o, 0, y), p.value.order = r, Me.value = null, Le.value = null;
    }
    const Ze = (o) => p.value.widths[o.key] ?? o.width ?? 160, ta = S(() => 36 + I.value.reduce((o, r) => o + Ze(r), 0) + 44), Qe = U(null);
    function aa(o, r) {
      const y = o.clientX, K = Ze(r);
      Qe.value = r.key;
      const s = (V) => {
        p.value.widths[r.key] = Math.max(70, Math.round(K + V.clientX - y));
      }, m = () => {
        Qe.value = null, window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", m);
      };
      window.addEventListener("mousemove", s), window.addEventListener("mouseup", m);
    }
    const W = U([]), et = S(() => P.value.length > 0 && P.value.every((o) => W.value.includes(h(o)))), na = S(() => W.value.length > 0 && !et.value);
    function sa(o) {
      const r = W.value.indexOf(h(o));
      r < 0 ? W.value.push(h(o)) : W.value.splice(r, 1);
    }
    function la() {
      W.value = et.value ? [] : P.value.map(h);
    }
    function oa() {
      c("delete", l.rows.filter((o) => W.value.includes(h(o)))), W.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function gt(o) {
      const r = p.value.collapsed, y = r.indexOf(o);
      y < 0 ? r.push(o) : r.splice(y, 1);
    }
    function tt(o) {
      const r = P.value;
      if (o.type === "title") return { label: "Total", value: String(r.length) };
      if (o.type === "number") return { label: "Somme", value: Et.format(r.reduce((y, K) => y + (Number(J(K, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && r.length) return { label: "Moyenne", value: Math.round(r.reduce((y, K) => y + Number(J(K, o)), 0) / r.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const y = r.filter((K) => o.overdue(K)).length;
        return y ? { label: "En retard", value: String(y) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(r.filter((y) => J(y, o)).length) } : null;
    }
    const fe = fa(null), ft = U(null), at = U(!1);
    function ra(o, r, y) {
      if (y.type === "title") {
        c("open", r);
        return;
      }
      if (Te(y)) {
        if (y.type === "checkbox") {
          c("update", r, y.key, !r[y.key]);
          return;
        }
        ft.value = o.currentTarget, fe.value = { row: r, prop: y }, at.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...sn(p.value, l.schema), ...o });
    }
    const Be = U(null), ye = U(null);
    function yt(o, r) {
      Be.value = h(r), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(h(r))));
    }
    function Ee() {
      Be.value = null, ye.value = null;
    }
    const bt = () => l.rows.find((o) => h(o) === Be.value);
    function ia(o) {
      const r = bt();
      r && q.value && c("update", r, q.value, o === Ne ? null : o), Ee();
    }
    function ua(o) {
      const r = bt();
      r && se.value && c("update", r, se.value, o), Ee();
    }
    const se = S(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = _.value[0]) == null ? void 0 : o.key) ?? null;
    }), xe = S(() => p.value.month ?? Se().slice(0, 7)), da = S(() => nn(xe.value).map((o) => ({ ...o, today: o.iso === Se(), rows: se.value ? P.value.filter((r) => r[se.value] === o.iso) : [] }))), kt = S(() => se.value ? P.value.filter((o) => !o[se.value]).length : 0), ca = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, pa = (o) => {
      const r = $.value, y = r ? Ie(r, o, o[r.key]) : void 0;
      return ca[(y == null ? void 0 : y.tone) ?? "neutral"];
    }, va = (o) => {
      const r = $.value;
      if (!r) return !1;
      const y = $e(r, o);
      return y.length > 0 && o[r.key] === y[y.length - 1].value;
    }, ma = (o) => {
      var r;
      return ((r = Pe.find((y) => y.value === o)) == null ? void 0 : r.icon) ?? "table";
    }, Fe = S(() => H.value ? `Sans ${H.value.name.toLowerCase()}` : "");
    return (o, r) => {
      var y, K;
      return a(), n("section", xn, [
        u("div", Fn, [
          o.hideViews ? f("", !0) : (a(), n(b, { key: 0 }, [
            u("div", Pn, [
              (a(!0), n(b, null, T(t.value, (s) => (a(), n("button", {
                key: s.id,
                ref_for: !0,
                ref: (m) => {
                  m && (He.value[s.id] = m);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": s.id === p.value.id,
                title: s.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (m) => Ht(s)
              }, [
                g(C, {
                  name: ma(s.layout)
                }, null, 8, ["name"]),
                k(v(s.name), 1)
              ], 8, Un))), 128))
            ]),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: r[0] || (r[0] = (s) => ne("add", s.currentTarget))
            })
          ], 64)),
          u("div", On, [
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: E({ "is-on": le.value.length }),
              onClick: r[1] || (r[1] = (s) => ne("filter", s.currentTarget))
            }, {
              default: F(() => [
                k(" Filtrer"),
                le.value.length ? (a(), n("span", Nn, v(le.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: E({ "is-on": oe.value.length }),
              onClick: r[2] || (r[2] = (s) => ne("sort", s.currentTarget))
            }, {
              default: F(() => [
                k(" Trier"),
                oe.value.length ? (a(), n("span", In, v(oe.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            p.value.layout !== "calendar" ? (a(), O(N, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: E({ "is-on": p.value.groupBy }),
              onClick: r[3] || (r[3] = (s) => ne("group", s.currentTarget))
            }, {
              default: F(() => [
                k("Grouper")
              ]),
              _: 1
            }, 8, ["class"])) : f("", !0),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: r[4] || (r[4] = (s) => ne("props", s.currentTarget))
            }, {
              default: F(() => [
                k("Propriétés")
              ]),
              _: 1
            }),
            u("div", qn, [
              g(C, { name: "search" }),
              j(u("input", {
                "onUpdate:modelValue": r[5] || (r[5] = (s) => L.value = s),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [ke, L.value]
              ])
            ]),
            o.hideViews ? f("", !0) : (a(), O(N, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: r[6] || (r[6] = (s) => ne("settings", s.currentTarget))
            })),
            g(N, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: r[7] || (r[7] = (s) => me())
            }, {
              default: F(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        le.value.length || oe.value.length ? (a(), n("div", Hn, [
          (a(!0), n(b, null, T(le.value, (s) => (a(), n("button", {
            key: s.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[8] || (r[8] = (m) => ne("filter", m.currentTarget))
          }, [
            g(C, { name: "filter" }),
            k(v(Ye(s).name) + " " + v(Ye(s).op) + " ", 1),
            u("b", null, v(Ye(s).val), 1)
          ]))), 128)),
          (a(!0), n(b, null, T(oe.value, (s) => (a(), n("button", {
            key: s.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[9] || (r[9] = (m) => ne("sort", m.currentTarget))
          }, [
            g(C, { name: "sort" }),
            k(v(w.value[s.prop].name) + " ", 1),
            u("b", null, v(s.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          g(N, {
            variant: "ghost",
            size: "sm",
            onClick: Zt
          }, {
            default: F(() => [
              k("Tout effacer")
            ]),
            _: 1
          })
        ])) : f("", !0),
        p.value.layout === "table" ? (a(), n(b, { key: 1 }, [
          u("div", jn, [
            u("table", {
              class: "at-table at-dv-table",
              style: Q({ width: ta.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                Rn,
                (a(!0), n(b, null, T(I.value, (s) => (a(), n("col", {
                  key: s.key,
                  style: Q({ width: Ze(s) + "px" })
                }, null, 4))), 128)),
                Wn
              ]),
              u("thead", null, [
                u("tr", null, [
                  u("th", Kn, [
                    u("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: et.value,
                      indeterminate: na.value,
                      onChange: la
                    }, null, 40, Gn)
                  ]),
                  (a(!0), n(b, null, T(I.value, (s) => (a(), n("th", {
                    key: s.key,
                    class: E({ "at-num": s.type === "number" })
                  }, [
                    u("span", Jn, [
                      g(C, {
                        name: B(Ue)(s)
                      }, null, 8, ["name"]),
                      k(v(s.name), 1)
                    ]),
                    u("span", {
                      class: E(["at-dv-resize", Qe.value === s.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ie((m) => aa(m, s), ["prevent"])
                    }, null, 42, Yn)
                  ], 2))), 128)),
                  u("th", Xn, [
                    g(N, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: r[10] || (r[10] = (s) => ne("props", s.currentTarget))
                    })
                  ])
                ])
              ]),
              (a(!0), n(b, null, T(re.value, (s) => (a(), n("tbody", {
                key: s.key
              }, [
                H.value ? (a(), n("tr", Zn, [
                  u("td", {
                    colspan: I.value.length + 2
                  }, [
                    u("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !ge(s.key),
                      onClick: (m) => gt(s.key)
                    }, [
                      g(C, {
                        name: "chevron-down",
                        class: E({ "at-rot": ge(s.key) })
                      }, null, 8, ["class"]),
                      s.option ? (a(), O(de, {
                        key: 0,
                        prop: H.value,
                        row: X(s.key)
                      }, null, 8, ["prop", "row"])) : (a(), n("span", ts, v(Fe.value), 1)),
                      u("span", as, v(s.rows.length), 1)
                    ], 8, es)
                  ], 8, Qn)
                ])) : f("", !0),
                ge(s.key) ? f("", !0) : (a(), n(b, { key: 1 }, [
                  (a(!0), n(b, null, T(s.rows, (m) => (a(), n("tr", {
                    key: h(m),
                    "aria-selected": W.value.includes(h(m)) ? "true" : void 0
                  }, [
                    u("td", ss, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: W.value.includes(h(m)),
                        onChange: (V) => sa(m)
                      }, null, 40, ls)
                    ]),
                    (a(!0), n(b, null, T(I.value, (V) => (a(), n("td", {
                      key: V.key,
                      class: E({ "at-num": V.type === "number", "at-dv-titlecell": V.type === "title", "is-edit": V.type !== "title" && B(Te)(V) }),
                      onClick: (Z) => ra(Z, m, V)
                    }, [
                      g(de, {
                        prop: V,
                        row: m
                      }, null, 8, ["prop", "row"]),
                      V.type === "title" ? (a(), n("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ie((Z) => c("open", m), ["stop"])
                      }, "Ouvrir", 8, rs)) : f("", !0)
                    ], 10, os))), 128)),
                    is
                  ], 8, ns))), 128)),
                  u("tr", us, [
                    ds,
                    u("td", {
                      colspan: I.value.length + 1
                    }, [
                      u("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (m) => me(H.value ? X(s.key) : {})
                      }, [
                        g(C, { name: "plus" }),
                        k(v(o.newLabel), 1)
                      ], 8, ps)
                    ], 8, cs)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  vs,
                  (a(!0), n(b, null, T(I.value, (s) => (a(), n("td", {
                    key: s.key,
                    class: E({ "at-num": s.type === "number" })
                  }, [
                    tt(s) ? (a(), n(b, { key: 0 }, [
                      k(v(tt(s).label) + " ", 1),
                      u("b", null, v(tt(s).value), 1)
                    ], 64)) : f("", !0)
                  ], 2))), 128)),
                  ms
                ])
              ])
            ], 4)
          ]),
          W.value.length ? (a(), n("div", hs, [
            u("span", null, [
              u("b", gs, v(W.value.length), 1),
              k(" sélectionnée" + v(W.value.length > 1 ? "s" : ""), 1)
            ]),
            g(N, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: oa
            }, {
              default: F(() => [
                k("Supprimer")
              ]),
              _: 1
            }),
            g(N, {
              variant: "ghost",
              size: "sm",
              onClick: r[11] || (r[11] = (s) => W.value = [])
            }, {
              default: F(() => [
                k("Désélectionner")
              ]),
              _: 1
            })
          ])) : f("", !0)
        ], 64)) : p.value.layout === "board" ? (a(), n("div", fs, [
          H.value ? (a(!0), n(b, { key: 1 }, T(re.value, (s) => {
            var m;
            return a(), n("div", {
              key: s.key,
              class: E(["at-dv-col", ye.value === s.key && "over"]),
              onDragover: ie((V) => ye.value = s.key, ["prevent"]),
              onDragleave: r[12] || (r[12] = ie((V) => ye.value = null, ["self"])),
              onDrop: ie((V) => ia(s.key), ["prevent"])
            }, [
              u("div", ks, [
                s.option ? (a(), O(de, {
                  key: 0,
                  prop: H.value,
                  row: X(s.key)
                }, null, 8, ["prop", "row"])) : (a(), n("span", _s, v(Fe.value), 1)),
                u("span", ws, v(s.rows.length), 1),
                $s,
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((m = s.option) == null ? void 0 : m.label) ?? Fe.value}`,
                  onClick: (V) => me(X(s.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", Ms, [
                (a(!0), n(b, null, T(s.rows, (V) => (a(), n("button", {
                  key: h(V),
                  type: "button",
                  class: E(["at-dv-card", Be.value === h(V) && "dragging"]),
                  draggable: "true",
                  onDragstart: (Z) => yt(Z, V),
                  onDragend: Ee,
                  onClick: (Z) => c("open", V)
                }, [
                  u("span", Cs, v(V[A.value] || "Sans titre"), 1),
                  R.value.some((Z) => !B(ee)(B(J)(V, Z)) || Z.type === "checkbox") ? (a(), n("span", Ss, [
                    (a(!0), n(b, null, T(R.value, (Z) => (a(), n(b, {
                      key: Z.key
                    }, [
                      B(ee)(B(J)(V, Z)) ? f("", !0) : (a(), O(de, {
                        key: 0,
                        prop: Z,
                        row: V
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : f("", !0)
                ], 42, As))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (V) => me(X(s.key))
                }, [
                  g(C, { name: "plus" }),
                  k(v(o.newLabel), 1)
                ], 8, Ts)
              ])
            ], 42, bs);
          }), 128)) : (a(), n("div", ys, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (a(), n("div", Vs, [
          P.value.length ? (a(), n("div", Ds, [
            (a(!0), n(b, null, T(re.value, (s) => (a(), n(b, {
              key: s.key
            }, [
              H.value ? (a(), n("div", Ls, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(s.key),
                  onClick: (m) => gt(s.key)
                }, [
                  g(C, {
                    name: "chevron-down",
                    class: E({ "at-rot": ge(s.key) })
                  }, null, 8, ["class"]),
                  s.option ? (a(), O(de, {
                    key: 0,
                    prop: H.value,
                    row: X(s.key)
                  }, null, 8, ["prop", "row"])) : (a(), n("span", Es, v(Fe.value), 1)),
                  u("span", xs, v(s.rows.length), 1)
                ], 8, Bs)
              ])) : f("", !0),
              ge(s.key) ? f("", !0) : (a(!0), n(b, { key: 1 }, T(s.rows, (m) => (a(), n("button", {
                key: h(m),
                type: "button",
                class: "at-dv-li",
                onClick: (V) => c("open", m)
              }, [
                u("span", Ps, v(m[A.value] || "Sans titre"), 1),
                u("span", Us, [
                  (a(!0), n(b, null, T(R.value, (V) => (a(), n(b, {
                    key: V.key
                  }, [
                    B(ee)(B(J)(m, V)) ? f("", !0) : (a(), O(de, {
                      key: 0,
                      prop: V,
                      row: m
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, Fs))), 128))
            ], 64))), 128)),
            u("div", Os, [
              u("button", {
                type: "button",
                class: "at-dv-new",
                onClick: r[14] || (r[14] = (s) => me())
              }, [
                g(C, { name: "plus" }),
                k(v(o.newLabel), 1)
              ])
            ])
          ])) : (a(), n("div", zs, [
            k("Aucun élément ne correspond à cette vue."),
            g(N, {
              size: "sm",
              icon: "plus",
              onClick: r[13] || (r[13] = (s) => me())
            }, {
              default: F(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (a(), n(b, { key: 4 }, [
          u("div", Ns, [
            u("span", Is, v(B(rn)(xe.value)), 1),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: r[15] || (r[15] = (s) => p.value.month = B(wt)(xe.value, -1))
            }),
            g(N, {
              size: "sm",
              onClick: r[16] || (r[16] = (s) => p.value.month = B(Se)().slice(0, 7))
            }, {
              default: F(() => [
                k("Aujourd’hui")
              ]),
              _: 1
            }),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: r[17] || (r[17] = (s) => p.value.month = B(wt)(xe.value, 1))
            }),
            u("span", qs, [
              se.value ? (a(), n(b, { key: 0 }, [
                k("Par " + v(w.value[se.value].name.toLowerCase()), 1),
                kt.value ? (a(), n(b, { key: 0 }, [
                  k(" · " + v(kt.value) + " sans date", 1)
                ], 64)) : f("", !0)
              ], 64)) : (a(), n(b, { key: 1 }, [
                k("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", Hs, [
            u("div", js, [
              (a(), n(b, null, T(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (s) => u("div", {
                key: s,
                class: "at-dv-dow"
              }, v(s), 1)), 64))
            ]),
            u("div", Rs, [
              (a(!0), n(b, null, T(da.value, (s) => (a(), n("div", {
                key: s.iso,
                class: E(["at-dv-day", s.outside && "out", s.today && "today", ye.value === s.iso && "over"]),
                onDragover: ie((m) => ye.value = s.iso, ["prevent"]),
                onDrop: ie((m) => ua(s.iso), ["prevent"])
              }, [
                u("div", Ks, [
                  u("span", null, v(s.day), 1),
                  se.value ? (a(), n("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${B(ot)(s.iso)}`,
                    onClick: (m) => me({ [se.value]: s.iso })
                  }, [
                    g(C, { name: "plus" })
                  ], 8, Gs)) : f("", !0)
                ]),
                (a(!0), n(b, null, T(s.rows, (m) => (a(), n("button", {
                  key: h(m),
                  type: "button",
                  class: E(["at-dv-calitem", va(m) && "done"]),
                  draggable: "true",
                  onDragstart: (V) => yt(V, m),
                  onDragend: Ee,
                  onClick: (V) => c("open", m)
                }, [
                  u("span", {
                    class: "dot",
                    style: Q({ background: pa(m) })
                  }, null, 4),
                  u("span", null, v(m[A.value] || "Sans titre"), 1)
                ], 42, Js))), 128))
              ], 42, Ws))), 128))
            ])
          ])
        ], 64)),
        g(ue, {
          open: B(je),
          "onUpdate:open": r[18] || (r[18] = (s) => be(je) ? je.value = s : null),
          anchor: ce.value
        }, {
          default: F(() => [
            u("div", Ys, [
              Xs,
              (a(!0), n(b, null, T(B(Pe), (s) => (a(), n("button", {
                key: s.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (m) => jt(s.value)
              }, [
                g(C, {
                  name: s.icon
                }, null, 8, ["name"]),
                k(v(s.label), 1)
              ], 8, Zs))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: B(Re),
          "onUpdate:open": r[19] || (r[19] = (s) => be(Re) ? Re.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: F(() => [
            u("div", Qs, [
              el,
              u("div", tl, [
                p.value.filters.length ? f("", !0) : (a(), n("span", al, "Aucun filtre : la vue affiche toutes les lignes.")),
                (a(!0), n(b, null, T(p.value.filters, (s) => (a(), n("div", {
                  key: s.id,
                  class: "at-rule"
                }, [
                  u("div", nl, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.prop = m,
                      "aria-label": "Propriété",
                      onChange: (m) => Jt(s)
                    }, [
                      (a(!0), n(b, null, T(o.schema, (m) => (a(), n("option", {
                        key: m.key,
                        value: m.key
                      }, v(m.name), 9, ll))), 128))
                    ], 40, sl), [
                      [_e, s.prop]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  u("div", ol, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.op = m,
                      "aria-label": "Condition"
                    }, [
                      (a(!0), n(b, null, T(Yt(s), (m) => (a(), n("option", {
                        key: m,
                        value: m
                      }, v(B(_t)[m]), 9, il))), 128))
                    ], 8, rl), [
                      [_e, s.op]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  vt(s) ? (a(), n(b, { key: 0 }, [
                    De(s) === "options" ? (a(), n("div", ul, [
                      j(u("select", {
                        "onUpdate:modelValue": (m) => s.value = m,
                        "aria-label": "Valeur"
                      }, [
                        cl,
                        (a(!0), n(b, null, T(B($e)(w.value[s.prop]), (m) => (a(), n("option", {
                          key: m.value,
                          value: m.value
                        }, v(m.label), 9, pl))), 128))
                      ], 8, dl), [
                        [_e, s.value]
                      ]),
                      g(C, { name: "chevron-down" })
                    ])) : De(s) === "date" ? j((a(), n("input", {
                      key: 1,
                      "onUpdate:modelValue": (m) => s.value = m,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, vl)), [
                      [ke, s.value]
                    ]) : De(s) === "number" ? j((a(), n("input", {
                      key: 2,
                      "onUpdate:modelValue": (m) => s.value = m,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, ml)), [
                      [ke, s.value]
                    ]) : j((a(), n("input", {
                      key: 3,
                      "onUpdate:modelValue": (m) => s.value = m,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, hl)), [
                      [ke, s.value]
                    ])
                  ], 64)) : (a(), n("span", gl)),
                  g(N, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (m) => mt(p.value.filters, s)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", fl, [
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Gt
                }, {
                  default: F(() => [
                    k("Ajouter un filtre")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: B(We),
          "onUpdate:open": r[20] || (r[20] = (s) => be(We) ? We.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: F(() => [
            u("div", yl, [
              bl,
              u("div", kl, [
                p.value.sorts.length ? f("", !0) : (a(), n("span", _l, "Aucun tri : ordre des données.")),
                (a(!0), n(b, null, T(p.value.sorts, (s) => (a(), n("div", {
                  key: s.id,
                  class: "at-rule sort"
                }, [
                  u("div", wl, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.prop = m,
                      "aria-label": "Propriété"
                    }, [
                      (a(!0), n(b, null, T(o.schema, (m) => (a(), n("option", {
                        key: m.key,
                        value: m.key
                      }, v(m.name), 9, Ml))), 128))
                    ], 8, $l), [
                      [_e, s.prop]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  u("div", Al, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.dir = m,
                      "aria-label": "Sens"
                    }, Vl, 8, Cl), [
                      [_e, s.dir]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  g(N, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (m) => mt(p.value.sorts, s)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", zl, [
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Xt
                }, {
                  default: F(() => [
                    k("Ajouter un tri")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: B(Ke),
          "onUpdate:open": r[22] || (r[22] = (s) => be(Ke) ? Ke.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: F(() => [
            u("div", Dl, [
              u("div", Ll, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (a(), n("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: r[21] || (r[21] = (s) => Xe(null))
              }, [
                g(C, { name: "x" }),
                k("Aucun groupe"),
                p.value.groupBy ? f("", !0) : (a(), O(C, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : f("", !0),
              (a(!0), n(b, null, T(te.value, (s) => (a(), n("button", {
                key: s.key,
                type: "button",
                class: "at-menu-item",
                onClick: (m) => Xe(s.key)
              }, [
                g(C, {
                  name: B(Ue)(s)
                }, null, 8, ["name"]),
                k(v(s.name), 1),
                q.value === s.key ? (a(), O(C, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : f("", !0)
              ], 8, Bl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: B(Ge),
          "onUpdate:open": r[26] || (r[26] = (s) => be(Ge) ? Ge.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: F(() => [
            u("div", El, [
              xl,
              (a(!0), n(b, null, T(D.value, (s, m) => (a(), n("div", {
                key: s.key,
                class: E(["at-menu-item", "at-pi", Le.value === m && "drop"]),
                draggable: s.type !== "title",
                onDragstart: (V) => Me.value = m,
                onDragover: ie((V) => Le.value = m, ["prevent"]),
                onDrop: ie((V) => ea(m), ["prevent"]),
                onDragend: r[23] || (r[23] = (V) => {
                  Me.value = null, Le.value = null;
                })
              }, [
                g(C, {
                  name: "grip",
                  class: "grip"
                }),
                g(C, {
                  name: B(Ue)(s)
                }, null, 8, ["name"]),
                u("span", Pl, v(s.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${s.name}`,
                  checked: s.type === "title" || !p.value.hidden.includes(s.key),
                  disabled: s.type === "title",
                  onChange: (V) => Qt(s)
                }, null, 40, Ul)
              ], 42, Fl))), 128)),
              Ol,
              u("div", Nl, [
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[24] || (r[24] = (s) => ht(!0))
                }, {
                  default: F(() => [
                    k("Tout afficher")
                  ]),
                  _: 1
                }),
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[25] || (r[25] = (s) => ht(!1))
                }, {
                  default: F(() => [
                    k("Tout masquer")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: B(Je),
          "onUpdate:open": r[30] || (r[30] = (s) => be(Je) ? Je.value = s : null),
          anchor: ce.value
        }, {
          default: F(() => [
            u("div", Il, [
              ql,
              j(u("input", {
                "onUpdate:modelValue": r[27] || (r[27] = (s) => p.value.name = s),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", Hl, [
                (a(!0), n(b, null, T(B(Pe), (s) => (a(), n("button", {
                  key: s.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === s.value,
                  onClick: (m) => Rt(s.value)
                }, [
                  g(C, {
                    name: s.icon
                  }, null, 8, ["name"]),
                  k(v(s.label), 1)
                ], 8, jl))), 128))
              ]),
              p.value.layout !== "calendar" ? (a(), n("div", Rl, [
                u("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                u("div", Wl, [
                  u("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: r[28] || (r[28] = (s) => Xe(s.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (a(), n("option", Gl, "Aucun")) : f("", !0),
                    (a(!0), n(b, null, T(te.value, (s) => (a(), n("option", {
                      key: s.key,
                      value: s.key
                    }, v(s.name), 9, Jl))), 128))
                  ], 40, Kl),
                  g(C, { name: "chevron-down" })
                ])
              ])) : (a(), n("div", Yl, [
                Xl,
                u("div", Zl, [
                  u("select", {
                    value: se.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: r[29] || (r[29] = (s) => p.value.dateProp = s.target.value)
                  }, [
                    (a(!0), n(b, null, T(_.value, (s) => (a(), n("option", {
                      key: s.key,
                      value: s.key
                    }, v(s.name), 9, eo))), 128))
                  ], 40, Ql),
                  g(C, { name: "chevron-down" })
                ])
              ])),
              to,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: Wt
              }, [
                g(C, { name: "copy" }),
                k("Dupliquer la vue")
              ]),
              u("button", {
                type: "button",
                class: "at-menu-item at-menu-item--danger",
                disabled: t.value.length < 2,
                onClick: Kt
              }, [
                g(C, { name: "trash" }),
                k("Supprimer la vue")
              ], 8, ao)
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(dt, {
          open: at.value,
          "onUpdate:open": r[31] || (r[31] = (s) => at.value = s),
          prop: ((y = fe.value) == null ? void 0 : y.prop) ?? null,
          row: (K = fe.value) == null ? void 0 : K.row,
          anchor: ft.value,
          onUpdate: r[32] || (r[32] = (s) => fe.value && c("update", fe.value.row, fe.value.prop.key, s))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), so = {
  key: 0,
  class: "at-drawer-wrap"
}, lo = ["aria-label"], oo = { class: "at-drawer__head" }, ro = { class: "at-drawer__crumb" }, io = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), uo = { class: "at-drawer__body" }, co = /* @__PURE__ */ x({
  __name: "AtDrawer",
  props: /* @__PURE__ */ G({
    label: {},
    width: { default: 580 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(d) {
    const e = Y(d, "open"), l = U();
    let t = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return pe(e, (c) => {
      var h;
      c ? (t = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = l.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (h = t == null ? void 0 : t.focus) == null || h.call(t));
    }, { immediate: !0 }), rt(() => document.removeEventListener("keydown", i)), (c, h) => (a(), O(it, { to: "body" }, [
      g(Vt, { name: "at-drawer" }, {
        default: F(() => [
          e.value ? (a(), n("div", so, [
            u("div", {
              class: "at-overlay",
              onClick: h[0] || (h[0] = (p) => e.value = !1)
            }),
            u("aside", {
              ref_key: "panel",
              ref: l,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: Q({ width: `min(${c.width}px, 100%)` })
            }, [
              u("header", oo, [
                u("span", ro, [
                  z(c.$slots, "crumb", {}, () => [
                    k(v(c.label), 1)
                  ])
                ]),
                io,
                z(c.$slots, "actions"),
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: h[1] || (h[1] = (p) => e.value = !1)
                })
              ]),
              u("div", uo, [
                z(c.$slots, "default")
              ])
            ], 12, lo)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), po = ["aria-label"], vo = {
  key: 0,
  class: "at-menu-label"
}, xt = /* @__PURE__ */ x({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const e = U();
    function l(t) {
      var p;
      const i = [...((p = e.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!i.length) return;
      const c = i.indexOf(document.activeElement), h = (w) => {
        t.preventDefault(), i[(w + i.length) % i.length].focus();
      };
      t.key === "ArrowDown" ? h(c + 1) : t.key === "ArrowUp" ? h(c < 0 ? i.length - 1 : c - 1) : t.key === "Home" ? h(0) : t.key === "End" && h(i.length - 1);
    }
    return (t, i) => (a(), n("div", {
      ref_key: "el",
      ref: e,
      class: "at-menu",
      role: "menu",
      "aria-label": t.label,
      style: Q(t.minWidth ? { minWidth: t.minWidth + "px" } : void 0),
      onKeydown: l
    }, [
      t.label ? (a(), n("div", vo, v(t.label), 1)) : f("", !0),
      z(t.$slots, "default")
    ], 44, po));
  }
}), mo = /* @__PURE__ */ x({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const e = U(!1);
    function l(t) {
      t.target.closest('.at-menu-item[role="menuitem"]') && (e.value = !1);
    }
    return (t, i) => (a(), O(ue, {
      open: e.value,
      "onUpdate:open": i[0] || (i[0] = (c) => e.value = c),
      align: t.align
    }, {
      trigger: F((c) => [
        z(t.$slots, "trigger", ya(ba(c)))
      ]),
      default: F(() => [
        g(xt, {
          label: t.label,
          "min-width": t.minWidth,
          onClick: l
        }, {
          default: F(() => [
            z(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align"]));
  }
}), ho = { class: "at-empty" }, go = /* @__PURE__ */ x({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (e, l) => (a(), n("div", ho, [
      z(e.$slots, "default", {}, () => [
        k(v(e.message), 1)
      ]),
      z(e.$slots, "action")
    ]));
  }
});
let Mt = 0;
function fo(d = "at") {
  return Mt += 1, `${d}-${Mt}`;
}
const yo = { class: "at-field" }, bo = ["for"], ko = ["id"], _o = ["id"], wo = /* @__PURE__ */ x({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const l = d.id ?? fo("field");
    return (t, i) => (a(), n("div", yo, [
      t.label ? (a(), n("label", {
        key: 0,
        class: "at-label",
        for: B(l)
      }, v(t.label), 9, bo)) : f("", !0),
      z(t.$slots, "default", {
        id: B(l),
        invalid: !!t.error,
        describedby: t.error || t.hint ? B(l) + "-hint" : void 0
      }),
      t.error ? (a(), n("span", {
        key: 1,
        id: B(l) + "-hint",
        class: "at-hint at-hint--error"
      }, v(t.error), 9, ko)) : t.hint ? (a(), n("span", {
        key: 2,
        id: B(l) + "-hint",
        class: "at-hint"
      }, v(t.hint), 9, _o)) : f("", !0)
    ]));
  }
}), $o = ["role", "aria-label", "aria-hidden"], Ft = /* @__PURE__ */ x({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (e, l) => (a(), n("span", {
      class: E(["at-tile", e.size !== "sm" && `at-tile--${e.size}`, e.color === "neutral" ? "at-tile--neutral" : `at-tone-${e.color}`]),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true"
    }, [
      g(C, { name: e.name }, null, 8, ["name"])
    ], 10, $o));
  }
}), qe = (d, e) => {
  const l = d.__vccOpts || d;
  for (const [t, i] of e)
    l[t] = i;
  return l;
}, Mo = {}, Ao = { class: "at-kbd" };
function Co(d, e) {
  return a(), n("kbd", Ao, [
    z(d.$slots, "default")
  ]);
}
const ct = /* @__PURE__ */ qe(Mo, [["render", Co]]), So = {
  key: 0,
  class: "at-input-wrap"
}, To = ["type", "placeholder", "disabled", "aria-invalid"], Vo = ["type", "placeholder", "disabled", "aria-invalid"], zo = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "AtInput",
  props: /* @__PURE__ */ G({
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
  setup(d, { expose: e }) {
    const l = Y(d, "modelValue"), t = d, i = U();
    return e({ focus: () => {
      var c;
      return (c = i.value) == null ? void 0 : c.focus();
    }, el: i }), (c, h) => c.icon || c.kbd ? (a(), n("div", So, [
      c.icon ? (a(), O(C, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : f("", !0),
      j(u("input", ve(c.$attrs, {
        ref_key: "el",
        ref: i,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => l.value = p),
        class: "at-input",
        style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, To), [
        [st, l.value]
      ]),
      c.kbd ? (a(), O(ct, { key: 1 }, {
        default: F(() => [
          k(v(c.kbd), 1)
        ]),
        _: 1
      })) : f("", !0)
    ])) : j((a(), n("input", ve({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: i,
      "onUpdate:modelValue": h[1] || (h[1] = (p) => l.value = p),
      class: "at-input",
      style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, Vo)), [
      [st, l.value]
    ]);
  }
}), Do = ["role", "aria-checked", "disabled"], Lo = {
  key: 2,
  class: "at-menu-meta"
}, Bo = /* @__PURE__ */ x({
  __name: "AtMenuItem",
  props: {
    icon: {},
    label: {},
    kbd: {},
    meta: {},
    danger: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(d) {
    return (e, l) => (a(), n("button", {
      type: "button",
      class: E(["at-menu-item", e.danger && "at-menu-item--danger"]),
      role: e.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": e.checked !== void 0 ? e.checked : void 0,
      disabled: e.disabled,
      onClick: l[0] || (l[0] = (t) => e.$emit("select", t))
    }, [
      e.icon ? (a(), O(C, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      z(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ]),
      e.kbd ? (a(), O(ct, { key: 1 }, {
        default: F(() => [
          k(v(e.kbd), 1)
        ]),
        _: 1
      })) : e.meta ? (a(), n("span", Lo, v(e.meta), 1)) : e.checked ? (a(), O(C, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : f("", !0)
    ], 10, Do));
  }
}), Eo = {}, xo = { class: "at-menu-label" };
function Fo(d, e) {
  return a(), n("div", xo, [
    z(d.$slots, "default")
  ]);
}
const Po = /* @__PURE__ */ qe(Eo, [["render", Fo]]), Uo = {}, Oo = {
  class: "at-menu-sep",
  role: "separator"
};
function No(d, e) {
  return a(), n("div", Oo);
}
const Io = /* @__PURE__ */ qe(Uo, [["render", No]]), qo = {
  key: 0,
  class: "at-modal-wrap"
}, Ho = ["aria-label"], jo = { class: "at-modal__head" }, Ro = { style: { flex: "1", "min-width": "0" } }, Wo = { class: "at-modal__title" }, Ko = {
  key: 0,
  class: "at-modal__desc"
}, Go = { class: "at-modal__body" }, Jo = {
  key: 0,
  class: "at-modal__foot"
}, Yo = /* @__PURE__ */ x({
  __name: "AtModal",
  props: /* @__PURE__ */ G({
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
    const e = Y(d, "open"), l = U();
    let t = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return pe(e, (c) => {
      var h;
      c ? (t = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = l.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (h = t == null ? void 0 : t.focus) == null || h.call(t));
    }, { immediate: !0 }), rt(() => document.removeEventListener("keydown", i)), (c, h) => (a(), O(it, { to: "body" }, [
      g(Vt, { name: "at-modal" }, {
        default: F(() => [
          e.value ? (a(), n("div", qo, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: h[0] || (h[0] = (p) => c.dismissible && (e.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: l,
              class: E(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", jo, [
                u("div", Ro, [
                  u("h2", Wo, v(c.title), 1),
                  c.description ? (a(), n("p", Ko, v(c.description), 1)) : f("", !0)
                ]),
                c.dismissible ? (a(), O(N, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: h[1] || (h[1] = (p) => e.value = !1)
                })) : f("", !0)
              ]),
              u("div", Go, [
                z(c.$slots, "default")
              ]),
              c.$slots.footer ? (a(), n("footer", Jo, [
                z(c.$slots, "footer", {
                  close: () => e.value = !1
                })
              ])) : f("", !0)
            ], 10, Ho)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Xo = ["aria-label"], Zo = {
  key: 0,
  class: "at-nav-label"
}, Qo = /* @__PURE__ */ x({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (e, l) => (a(), n("nav", {
      class: "at-nav",
      "aria-label": e.label
    }, [
      e.label ? (a(), n("div", Zo, v(e.label), 1)) : f("", !0),
      z(e.$slots, "default")
    ], 8, Xo));
  }
}), er = ["href", "aria-current"], tr = { class: "at-ellipsis" }, ar = {
  key: 3,
  class: "at-nav-count"
}, nr = /* @__PURE__ */ x({
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
    return (e, l) => (a(), n("a", {
      class: "at-nav-item",
      href: e.href ?? "#",
      "aria-current": e.active ? "page" : void 0,
      onClick: l[0] || (l[0] = (t) => {
        !e.href && t.preventDefault(), e.$emit("click", t);
      })
    }, [
      e.mark ? (a(), n("span", {
        key: 0,
        class: "at-nav-mark",
        style: Q({ background: e.mark })
      }, null, 4)) : e.icon && e.tile ? (a(), O(Ft, {
        key: 1,
        name: e.icon,
        color: e.tile
      }, null, 8, ["name", "color"])) : e.icon ? (a(), O(C, {
        key: 2,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      u("span", tr, [
        z(e.$slots, "default", {}, () => [
          k(v(e.label), 1)
        ])
      ]),
      e.count != null && e.count !== "" ? (a(), n("span", ar, v(e.count), 1)) : f("", !0)
    ], 8, er));
  }
}), sr = {
  key: 0,
  class: "at-page__head"
}, lr = { class: "t-heading-1" }, or = { key: 0 }, rr = /* @__PURE__ */ x({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (e, l) => (a(), n("div", {
      class: E(["at-page", e.wide && "at-page--wide"])
    }, [
      e.title || e.$slots.head ? (a(), n("div", sr, [
        z(e.$slots, "head", {}, () => [
          u("h1", lr, v(e.title), 1),
          e.description ? (a(), n("p", or, v(e.description), 1)) : f("", !0)
        ])
      ])) : f("", !0),
      z(e.$slots, "default")
    ], 2));
  }
}), ir = { class: "at-proplist" }, ur = ["disabled", "onClick"], dr = /* @__PURE__ */ x({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: e }) {
    const l = d, t = e, i = S(() => l.schema.filter((M) => {
      var A;
      return M.type !== "title" && !((A = l.exclude) != null && A.includes(M.key));
    })), c = U(null), h = U(null), p = U(!1);
    function w(M, A) {
      if (Te(A)) {
        if (A.type === "checkbox") {
          t("update", A.key, !l.row[A.key]);
          return;
        }
        h.value = M.currentTarget, c.value = A, p.value = !0;
      }
    }
    return (M, A) => (a(), n(b, null, [
      u("dl", ir, [
        (a(!0), n(b, null, T(i.value, (D) => (a(), n(b, {
          key: D.key
        }, [
          u("dt", null, [
            g(C, {
              name: B(Ue)(D)
            }, null, 8, ["name"]),
            k(v(D.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !B(Te)(D),
              onClick: (I) => w(I, D)
            }, [
              g(de, {
                prop: D,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, ur)
          ])
        ], 64))), 128))
      ]),
      g(dt, {
        open: p.value,
        "onUpdate:open": A[0] || (A[0] = (D) => p.value = D),
        prop: c.value,
        row: M.row,
        anchor: h.value,
        onUpdate: A[1] || (A[1] = (D) => c.value && t("update", c.value.key, D))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), cr = ["aria-label"], pr = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], vr = /* @__PURE__ */ x({
  __name: "AtSegment",
  props: /* @__PURE__ */ G({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const e = Y(d, "modelValue");
    return (l, t) => (a(), n("div", {
      class: "at-segment",
      role: "group",
      "aria-label": l.label
    }, [
      (a(!0), n(b, null, T(l.items, (i) => (a(), n("button", {
        key: String(i.value),
        type: "button",
        "aria-pressed": e.value === i.value,
        "aria-label": i.iconOnly ? i.label : void 0,
        title: i.iconOnly ? i.label : void 0,
        disabled: i.disabled,
        onClick: (c) => e.value = i.value
      }, [
        i.icon ? (a(), O(C, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : f("", !0),
        i.iconOnly ? f("", !0) : (a(), n(b, { key: 1 }, [
          k(v(i.label), 1)
        ], 64))
      ], 8, pr))), 128))
    ], 8, cr));
  }
}), mr = { class: "at-select" }, hr = ["disabled", "aria-invalid"], gr = {
  key: 0,
  value: null,
  disabled: ""
}, fr = ["value", "disabled"], yr = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "AtSelect",
  props: /* @__PURE__ */ G({
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
    const e = Y(d, "modelValue");
    return (l, t) => (a(), n("div", mr, [
      j(u("select", ve(l.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
        disabled: l.disabled,
        "aria-invalid": l.invalid || void 0,
        style: l.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        l.placeholder ? (a(), n("option", gr, v(l.placeholder), 1)) : f("", !0),
        (a(!0), n(b, null, T(l.options, (i) => (a(), n("option", {
          key: String(i.value),
          value: i.value,
          disabled: i.disabled
        }, v(i.label), 9, fr))), 128))
      ], 16, hr), [
        [_e, e.value]
      ]),
      g(C, { name: "chevron-down" })
    ]));
  }
}), br = {}, kr = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, _r = {
  key: 0,
  class: "at-sidebar__foot"
};
function wr(d, e) {
  return a(), n("aside", kr, [
    z(d.$slots, "header"),
    z(d.$slots, "default"),
    d.$slots.footer ? (a(), n("div", _r, [
      z(d.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const $r = /* @__PURE__ */ qe(br, [["render", wr]]), Mr = { class: "at-stat__label" }, Ar = { class: "at-stat__row" }, Cr = { class: "at-stat__value" }, Sr = ["viewBox"], Tr = ["d"], Vr = ["d"], zr = ["cx", "cy"], Dr = {
  key: 1,
  class: "at-stat__foot"
}, At = 220, Ae = 32, Lr = /* @__PURE__ */ x({
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
    const e = d, l = S(() => {
      const t = e.spark;
      if (!t || t.length < 2) return null;
      const i = Math.min(...t), c = Math.max(...t), h = c - i || 1, p = t.map((A, D) => [2 + D * (At - 4) / (t.length - 1), Ae - 3 - (A - i) / h * (Ae - 8)]), w = "M" + p.map((A) => A.map((D) => D.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: w, area: `${w} L${M[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: M };
    });
    return (t, i) => (a(), n("div", {
      class: E(["at-stat", t.color && ["at-stat--striped", `at-tone-${t.color}`]])
    }, [
      u("span", Mr, v(t.label), 1),
      u("div", Ar, [
        u("span", Cr, [
          z(t.$slots, "value", {}, () => [
            k(v(t.value), 1)
          ])
        ]),
        t.delta ? (a(), n("span", {
          key: 0,
          class: E(["at-stat__delta", t.trend && `at-stat__delta--${t.trend}`])
        }, v(t.delta), 3)) : f("", !0)
      ]),
      l.value ? (a(), n("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${At} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: l.value.area
        }, null, 8, Tr),
        u("path", {
          class: "line",
          d: l.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Vr),
        u("circle", {
          class: "end",
          cx: l.value.end[0],
          cy: l.value.end[1],
          r: "2.5"
        }, null, 8, zr)
      ], 8, Sr)) : f("", !0),
      t.foot || t.$slots.foot ? (a(), n("span", Dr, [
        z(t.$slots, "foot", {}, () => [
          k(v(t.foot), 1)
        ])
      ])) : f("", !0)
    ], 2));
  }
}), Br = {
  key: 0,
  class: "at-toggle"
}, Er = ["disabled"], xr = ["disabled"], Fr = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "AtSwitch",
  props: /* @__PURE__ */ G({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const e = Y(d, "modelValue");
    return (l, t) => l.label || l.$slots.default ? (a(), n("label", Br, [
      j(u("input", ve(l.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: l.disabled
      }), null, 16, Er), [
        [Oe, e.value]
      ]),
      z(l.$slots, "default", {}, () => [
        k(v(l.label), 1)
      ])
    ])) : j((a(), n("input", ve({ key: 1 }, l.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (i) => e.value = i),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: l.disabled
    }), null, 16, xr)), [
      [Oe, e.value]
    ]);
  }
}), Pr = { class: "at-table-wrap" }, Ur = { class: "at-table" }, Or = ["onClick"], Nr = { key: 0 }, Ir = ["colspan"], qr = /* @__PURE__ */ x({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (e, l) => (a(), n("div", Pr, [
      u("table", Ur, [
        u("thead", null, [
          u("tr", null, [
            (a(!0), n(b, null, T(e.columns, (t) => (a(), n("th", {
              key: t.key,
              class: E({ "at-num": t.align === "right" }),
              style: Q(t.width ? { width: t.width } : void 0)
            }, v(t.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (a(!0), n(b, null, T(e.rows, (t, i) => (a(), n("tr", {
            key: e.rowKey ? t[e.rowKey] : i,
            style: Q(e.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => e.$emit("rowClick", t)
          }, [
            (a(!0), n(b, null, T(e.columns, (c) => (a(), n("td", {
              key: c.key,
              class: E({ "at-num": c.align === "right" })
            }, [
              z(e.$slots, `cell-${c.key}`, {
                row: t,
                value: t[c.key]
              }, () => [
                k(v(c.format ? c.format(t[c.key], t) : t[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Or))), 128)),
          e.rows.length ? f("", !0) : (a(), n("tr", Nr, [
            u("td", {
              colspan: e.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(e.empty ?? "Aucune donnée"), 9, Ir)
          ]))
        ])
      ])
    ]));
  }
}), Hr = ["aria-label"], jr = ["aria-selected", "disabled", "onClick"], Rr = {
  key: 1,
  class: "at-count"
}, Wr = /* @__PURE__ */ x({
  __name: "AtTabs",
  props: /* @__PURE__ */ G({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const e = Y(d, "modelValue");
    return (l, t) => (a(), n("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": l.label
    }, [
      (a(!0), n(b, null, T(l.items, (i) => (a(), n("button", {
        key: String(i.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": e.value === i.value,
        disabled: i.disabled,
        onClick: (c) => e.value = i.value
      }, [
        i.icon ? (a(), O(C, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : f("", !0),
        k(v(i.label) + " ", 1),
        i.count != null ? (a(), n("span", Rr, v(i.count), 1)) : f("", !0)
      ], 8, jr))), 128))
    ], 8, Hr));
  }
}), Kr = /* @__PURE__ */ x({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (e, l) => (a(), n("span", {
      class: E(["at-tag", e.color !== "gray" && `at-tag--${e.color}`])
    }, [
      z(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ])
    ], 2));
  }
}), Gr = ["rows", "placeholder", "disabled", "aria-invalid"], Jr = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "AtTextarea",
  props: /* @__PURE__ */ G({
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
    const e = Y(d, "modelValue");
    return (l, t) => j((a(), n("textarea", ve(l.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
      class: "at-input",
      rows: l.rows ?? 3,
      placeholder: l.placeholder,
      disabled: l.disabled,
      "aria-invalid": l.invalid || void 0
    }), null, 16, Gr)), [
      [ke, e.value]
    ]);
  }
}), Pt = "atelier:theme", Ut = "atelier:density", Ot = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, Ct = (d, e) => {
  try {
    localStorage.setItem(d, e);
  } catch {
  }
}, St = () => typeof document < "u" ? document.documentElement : null, Ce = U(Ot(Pt) || "system"), Nt = U(Ot(Ut) || "comfortable"), It = U(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Tt = !1;
function qt() {
  if (Tt || typeof window > "u") return;
  Tt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    It.value = e.matches;
  }), pe(Ce, (e) => {
    const l = St();
    l && (e === "system" ? l.removeAttribute("data-theme") : l.dataset.theme = e, Ct(Pt, e));
  }, { immediate: !0 }), pe(Nt, (e) => {
    const l = St();
    l && (l.dataset.density = e, Ct(Ut, e));
  }, { immediate: !0 });
}
function ai() {
  qt();
  const d = S(() => Ce.value === "system" ? It.value ? "dark" : "light" : Ce.value), e = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return ka() && _a(() => {
  }), { mode: Ce, resolved: d, toggle: e };
}
function ni() {
  return qt(), { density: Nt };
}
const si = {
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
}, Yr = (d) => `var(--${d})`, li = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(Yr), Xr = {
  AtAppShell: Va,
  AtAvatar: Dt,
  AtBadge: La,
  AtBreadcrumbs: Pa,
  AtButton: N,
  AtCard: qa,
  AtCheckbox: Wa,
  AtDataView: no,
  AtDrawer: co,
  AtDropdown: mo,
  AtEmpty: go,
  AtField: wo,
  AtIcon: C,
  AtIconTile: Ft,
  AtInput: zo,
  AtKbd: ct,
  AtMenu: xt,
  AtMenuItem: Bo,
  AtMenuLabel: Po,
  AtMenuSeparator: Io,
  AtModal: Yo,
  AtNavGroup: Qo,
  AtNavItem: nr,
  AtPage: rr,
  AtPopover: ue,
  AtProgress: Lt,
  AtPropertyEditor: dt,
  AtPropertyList: dr,
  AtPropertyValue: de,
  AtSegment: vr,
  AtSelect: yr,
  AtSidebar: $r,
  AtStat: Lr,
  AtSwitch: Fr,
  AtTable: qr,
  AtTabs: Wr,
  AtTag: Kr,
  AtTextarea: Jr
}, oi = {
  install(d) {
    for (const [e, l] of Object.entries(Xr)) d.component(e, l);
  }
};
export {
  Va as AtAppShell,
  Dt as AtAvatar,
  La as AtBadge,
  Pa as AtBreadcrumbs,
  N as AtButton,
  qa as AtCard,
  Wa as AtCheckbox,
  no as AtDataView,
  co as AtDrawer,
  mo as AtDropdown,
  go as AtEmpty,
  wo as AtField,
  C as AtIcon,
  Ft as AtIconTile,
  zo as AtInput,
  ct as AtKbd,
  xt as AtMenu,
  Bo as AtMenuItem,
  Po as AtMenuLabel,
  Io as AtMenuSeparator,
  Yo as AtModal,
  Qo as AtNavGroup,
  nr as AtNavItem,
  rr as AtPage,
  ue as AtPopover,
  Lt as AtProgress,
  dt as AtPropertyEditor,
  dr as AtPropertyList,
  de as AtPropertyValue,
  vr as AtSegment,
  yr as AtSelect,
  $r as AtSidebar,
  Lr as AtStat,
  Fr as AtSwitch,
  qr as AtTable,
  Wr as AtTabs,
  Kr as AtTag,
  Jr as AtTextarea,
  oi as Atelier,
  Pe as LAYOUTS,
  Ne as NONE,
  nt as OPS,
  _t as OP_LABEL,
  Ya as addDays,
  tn as applyView,
  li as chartColors,
  en as compareRows,
  $t as createView,
  Yr as cssVar,
  oi as default,
  sn as defaultsFromFilters,
  ei as filter,
  Ie as findOption,
  ot as formatDate,
  rn as formatMonth,
  J as getValue,
  an as groupRows,
  zt as icons,
  ee as isEmpty,
  Qa as matchRule,
  nn as monthGrid,
  $e as optionsOf,
  Qr as registerIcons,
  wt as shiftMonth,
  ti as sort,
  Se as today,
  si as tokens,
  we as uid,
  ni as useDensity,
  fo as useId,
  ai as useTheme
};
//# sourceMappingURL=atelier.js.map

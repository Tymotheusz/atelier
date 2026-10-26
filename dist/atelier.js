import { defineComponent as E, computed as S, openBlock as a, createElementBlock as n, normalizeStyle as ee, normalizeClass as F, createBlock as P, createCommentVNode as g, renderSlot as z, createTextVNode as k, toDisplayString as v, ref as U, watch as ve, createElementVNode as u, createVNode as f, Fragment as y, renderList as V, resolveDynamicComponent as ga, withCtx as x, useModel as Y, withDirectives as j, mergeProps as Q, vModelCheckbox as Ne, mergeModels as G, onBeforeUnmount as it, Teleport as ut, nextTick as ze, unref as B, withKeys as fa, vModelDynamic as lt, shallowRef as ya, vModelText as ke, withModifiers as ue, isRef as be, vModelSelect as _e, Transition as zt, normalizeProps as ba, guardReactiveProps as ka, getCurrentScope as _a, onScopeDispose as wa } from "vue";
const Dt = {
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
function ei(d) {
  Object.assign(Dt, d);
}
const $a = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], C = /* @__PURE__ */ E({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const e = d, s = S(() => Dt[e.name] ?? "");
    return (t, i) => (a(), n("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: t.size,
      height: t.size,
      style: ee(t.size !== 16 ? { width: t.size + "px", height: t.size + "px" } : void 0),
      role: t.label ? "img" : void 0,
      "aria-label": t.label,
      "aria-hidden": t.label ? void 0 : "true",
      innerHTML: s.value
    }, null, 12, $a));
  }
}), Ma = ["href", "aria-label"], Aa = ["type", "disabled", "aria-busy", "aria-label"], Ca = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, N = /* @__PURE__ */ E({
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
    const e = d, s = S(() => [
      "at-btn",
      `at-btn--${e.variant}`,
      e.size !== "md" && `at-btn--${e.size}`,
      e.iconOnly && "at-btn--icon"
    ]);
    return (t, i) => t.href && !t.disabled ? (a(), n("a", {
      key: 0,
      href: t.href,
      class: F(s.value),
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.icon ? (a(), P(C, {
        key: 0,
        name: t.icon
      }, null, 8, ["name"])) : g("", !0),
      z(t.$slots, "default", {}, () => [
        k(v(t.iconOnly ? "" : t.label), 1)
      ])
    ], 10, Ma)) : (a(), n("button", {
      key: 1,
      type: t.type,
      class: F(s.value),
      disabled: t.disabled || t.loading,
      "aria-busy": t.loading || void 0,
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.loading ? (a(), n("span", Ca)) : t.icon ? (a(), P(C, {
        key: 1,
        name: t.icon
      }, null, 8, ["name"])) : g("", !0),
      t.iconOnly ? g("", !0) : z(t.$slots, "default", { key: 2 }, () => [
        k(v(t.label), 1)
      ])
    ], 10, Aa));
  }
}), Sa = { class: "at-shell__side" }, Va = { class: "at-shell__main" }, Ta = { class: "at-topbar" }, za = /* @__PURE__ */ E({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: e }) {
    const s = d, t = U(!1), i = U();
    return ve(() => s.routeKey, () => {
      t.value = !1, i.value && (i.value.scrollTop = 0);
    }), e({ closeNav: () => t.value = !1 }), (c, h) => (a(), n("div", {
      class: F(["at-shell", t.value && "at-shell--open"])
    }, [
      u("div", Sa, [
        z(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: h[0] || (h[0] = (p) => t.value = !1)
      }),
      u("div", Va, [
        u("header", Ta, [
          f(N, {
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
}), Da = ["title"], La = ["src", "alt"], Lt = /* @__PURE__ */ E({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const e = d, s = S(() => e.name.split(/\s+/).filter(Boolean).map((t) => t[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (t, i) => (a(), n("span", {
      class: F(["at-avatar", t.size !== "sm" && `at-avatar--${t.size}`]),
      title: t.name
    }, [
      t.src ? (a(), n("img", {
        key: 0,
        src: t.src,
        alt: t.name
      }, null, 8, La)) : (a(), n(y, { key: 1 }, [
        k(v(s.value), 1)
      ], 64))
    ], 10, Da));
  }
}), Ba = /* @__PURE__ */ E({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("span", {
      class: F(["at-badge", e.tone !== "neutral" && `at-badge--${e.tone}`])
    }, [
      z(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ])
    ], 2));
  }
}), Ea = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, xa = {
  key: 0,
  "aria-hidden": "true"
}, Fa = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Pa = ["href", "onClick"], Oa = /* @__PURE__ */ E({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (e, s) => (a(), n("nav", Ea, [
      (a(!0), n(y, null, V(e.items, (t, i) => (a(), n(y, { key: i }, [
        i > 0 ? (a(), n("span", xa, "/")) : g("", !0),
        i === e.items.length - 1 ? (a(), n("span", Fa, v(t.label), 1)) : (a(), n("a", {
          key: 2,
          href: t.href ?? "#",
          onClick: (c) => t.onClick && (c.preventDefault(), t.onClick())
        }, v(t.label), 9, Pa))
      ], 64))), 128))
    ]));
  }
}), Ua = {
  key: 0,
  class: "at-card__head"
}, Na = {
  key: 0,
  class: "at-card__title"
}, Ia = {
  key: 1,
  class: "at-card__desc"
}, qa = {
  key: 1,
  class: "at-card__foot"
}, Ha = /* @__PURE__ */ E({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (e, s) => (a(), P(ga(e.href ? "a" : e.as || "section"), {
      href: e.href,
      class: F(["at-card", e.href && "at-card--link", e.color && ["at-card--striped", `at-tone-${e.color}`]])
    }, {
      default: x(() => [
        e.title || e.description || e.$slots.actions ? (a(), n("div", Ua, [
          u("div", null, [
            e.title ? (a(), n("h3", Na, v(e.title), 1)) : g("", !0),
            e.description ? (a(), n("p", Ia, v(e.description), 1)) : g("", !0)
          ]),
          z(e.$slots, "actions")
        ])) : g("", !0),
        z(e.$slots, "default"),
        e.$slots.footer ? (a(), n("div", qa, [
          z(e.$slots, "footer")
        ])) : g("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), ja = {
  key: 0,
  class: "at-toggle"
}, Ra = ["indeterminate", "disabled"], Wa = ["indeterminate", "disabled"], Ka = /* @__PURE__ */ E({
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
    return (s, t) => s.label || s.$slots.default ? (a(), n("label", ja, [
      j(u("input", Q(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
        type: "checkbox",
        class: "at-check",
        indeterminate: s.indeterminate,
        disabled: s.disabled
      }), null, 16, Ra), [
        [Ne, e.value]
      ]),
      z(s.$slots, "default", {}, () => [
        k(v(s.label), 1)
      ])
    ])) : j((a(), n("input", Q({ key: 1 }, s.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (i) => e.value = i),
      type: "checkbox",
      class: "at-check",
      indeterminate: s.indeterminate,
      disabled: s.disabled
    }), null, 16, Wa)), [
      [Ne, e.value]
    ]);
  }
}), de = /* @__PURE__ */ E({
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
  setup(d, { expose: e, emit: s }) {
    const t = Y(d, "open"), i = d, c = s, h = U(), p = U(), w = U({ top: -9999, left: -9999 }), M = S(() => {
      var O;
      return i.anchor ?? ((O = h.value) == null ? void 0 : O.firstElementChild) ?? h.value ?? null;
    });
    function A() {
      const O = M.value, q = p.value;
      if (!O || !q) return;
      const H = O.getBoundingClientRect(), ie = q.offsetWidth, X = q.offsetHeight;
      let ne = i.align === "end" ? H.right - ie : H.left;
      ne = Math.max(8, Math.min(ne, window.innerWidth - ie - 8));
      let se = H.bottom + i.offset;
      se + X > window.innerHeight - 8 && (se = Math.max(8, H.top - X - i.offset)), (Math.abs(se - w.value.top) > 0.5 || Math.abs(ne - w.value.left) > 0.5) && (w.value = { top: se, left: ne });
    }
    function D() {
      t.value && (t.value = !1, c("close"));
    }
    function I() {
      t.value ? D() : t.value = !0;
    }
    function R(O) {
      var H, ie, X;
      const q = O.target;
      (H = p.value) != null && H.contains(q) || (ie = M.value) != null && ie.contains(q) || (X = q.closest) != null && X.call(q, ".at-pop") || D();
    }
    function ae(O) {
      var q, H;
      O.key === "Escape" && (O.stopPropagation(), D(), (H = (q = M.value) == null ? void 0 : q.focus) == null || H.call(q));
    }
    let _ = null;
    function $() {
      setTimeout(() => document.addEventListener("mousedown", R), 0), document.addEventListener("keydown", ae, !0), window.addEventListener("resize", A), window.addEventListener("scroll", A, !0), ze(() => {
        A(), p.value && (_ = new ResizeObserver(A), _.observe(p.value));
      });
    }
    function L() {
      document.removeEventListener("mousedown", R), document.removeEventListener("keydown", ae, !0), window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0), _ == null || _.disconnect(), _ = null, w.value = { top: -9999, left: -9999 };
    }
    return ve(t, (O) => O ? $() : L(), { immediate: !0 }), it(L), e({ place: A, close: D, toggle: I }), (O, q) => (a(), n(y, null, [
      O.$slots.trigger ? (a(), n("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: h,
        style: { display: "contents" }
      }, [
        z(O.$slots, "trigger", {
          toggle: I,
          open: t.value
        })
      ], 512)) : g("", !0),
      (a(), P(ut, { to: "body" }, [
        t.value ? (a(), n("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: ee({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          z(O.$slots, "default", { close: D })
        ], 4)) : g("", !0)
      ]))
    ], 64));
  }
}), Ga = ["aria-valuenow", "aria-label"], Ja = { class: "at-progress__track" }, Ya = {
  key: 0,
  class: "at-progress__label"
}, Bt = /* @__PURE__ */ E({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const e = d, s = S(() => Math.max(0, Math.min(100, Math.round(e.value / e.max * 100))));
    return (t, i) => (a(), n("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": s.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": t.label
    }, [
      u("span", Ja, [
        u("span", {
          class: "at-progress__bar",
          style: ee({ width: s.value + "%" })
        }, null, 4)
      ]),
      t.showLabel ? (a(), n("span", Ya, v(s.value) + " %", 1)) : g("", !0)
    ], 8, Ga));
  }
}), Ie = "__none", ot = (d) => String(d).padStart(2, "0"), dt = (d) => `${d.getFullYear()}-${ot(d.getMonth() + 1)}-${ot(d.getDate())}`, Se = () => dt(/* @__PURE__ */ new Date()), Xa = (d, e) => {
  const s = /* @__PURE__ */ new Date(d + "T00:00");
  return s.setDate(s.getDate() + e), dt(s);
}, we = () => Math.random().toString(36).slice(2, 10), te = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, J = (d, e) => e.compute ? e.compute(d) : d[e.key], $e = (d, e) => typeof d.options == "function" ? d.options(e) : d.options ?? [], qe = (d, e, s) => $e(d, e).find((t) => t.value === s), Ve = (d) => !d.compute && !d.readonly && d.type !== "progress", Za = ["status", "select", "relation", "person"], Te = (d) => Za.includes(d.type), Qa = {
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
}, Ue = (d) => d.icon ?? Qa[d.type] ?? "text", Oe = [
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
}, wt = {
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
}, Et = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function en(d, e, s, t = Se()) {
  const i = J(d, e);
  if (!Et.includes(s.op) && te(s.value)) return !0;
  const c = (h) => String(h ?? "").toLowerCase();
  switch (s.op) {
    case "empty":
      return te(i);
    case "notempty":
      return !te(i);
    case "contains":
      return e.type === "multi" ? (i ?? []).includes(s.value) : c(i).includes(c(s.value));
    case "notcontains":
      return e.type === "multi" ? !(i ?? []).includes(s.value) : !c(i).includes(c(s.value));
    case "is":
      return i === s.value;
    case "isnot":
      return i !== s.value;
    case "before":
      return !!i && i < s.value;
    case "after":
      return !!i && i > s.value;
    case "past":
      return !!i && i < t;
    case "week":
      return !!i && i >= t && i <= Xa(t, 7);
    case "eq":
      return Number(i) === Number(s.value);
    case "gt":
      return Number(i) > Number(s.value);
    case "lt":
      return Number(i) < Number(s.value);
    case "checked":
      return !!i;
    case "unchecked":
      return !i;
  }
  return !0;
}
function tn(d, e, s) {
  const t = J(e, d), i = J(s, d), c = te(t), h = te(i);
  if (c || h) return c === h ? 0 : c ? 1 : -1;
  if (Te(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(t) - p.indexOf(i);
  }
  return d.type === "number" || d.type === "progress" ? t - i : d.type === "checkbox" ? Number(i) - Number(t) : d.type === "multi" ? t.length - i.length : String(t).localeCompare(String(i), "fr");
}
function an(d, e, s, t = "") {
  const i = Object.fromEntries(e.map((M) => [M.key, M])), c = e.find((M) => M.type === "title"), h = t.trim().toLowerCase(), p = d.filter((M) => (!h || !c || String(M[c.key] ?? "").toLowerCase().includes(h)) && s.filters.every((A) => !i[A.prop] || en(M, i[A.prop], A))), w = s.sorts.filter((M) => i[M.prop]);
  return w.length ? p.sort((M, A) => {
    for (const D of w) {
      const I = i[D.prop], R = te(J(M, I)), ae = te(J(A, I));
      if (R !== ae) return R ? 1 : -1;
      if (R) continue;
      const _ = tn(I, M, A);
      if (_) return D.dir === "desc" ? -_ : _;
    }
    return 0;
  }) : p;
}
function nn(d, e, s = !1) {
  if (!e) return [{ key: Ie, option: null, rows: d }];
  const t = $e(e).map((h) => ({ key: h.value, option: h, rows: [] })), i = { key: Ie, option: null, rows: [] }, c = Object.fromEntries(t.map((h) => [h.key, h]));
  for (const h of d) (c[J(h, e)] ?? i).rows.push(h);
  return (i.rows.length || s) && t.push(i), s ? t : t.filter((h) => h.rows.length);
}
function sn(d) {
  const [e, s] = d.split("-").map(Number), i = (new Date(e, s - 1, 1).getDay() + 6) % 7, c = [];
  for (let h = 0; h < 42; h++) {
    const p = new Date(e, s - 1, 1 - i + h);
    c.push({ iso: dt(p), day: p.getDate(), outside: p.getMonth() !== s - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const $t = (d, e) => {
  const [s, t] = d.split("-").map(Number), i = new Date(s, t - 1 + e, 1);
  return `${i.getFullYear()}-${ot(i.getMonth() + 1)}`;
};
function Mt(d, e = "table", s = {}) {
  return { id: we(), name: d, layout: e, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...s };
}
const ti = (d, e, s = "") => ({ id: we(), prop: d, op: e, value: s }), ai = (d, e = "asc") => ({ id: we(), prop: d, dir: e });
function ln(d, e) {
  const s = {};
  for (const t of d.filters) {
    const i = e.find((c) => c.key === t.prop);
    !i || !Ve(i) || te(t.value) || (t.op === "is" && (s[t.prop] = t.value), t.op === "contains" && i.type === "multi" && (s[t.prop] = [t.value]));
  }
  return s;
}
const on = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), rn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), xt = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function rt(d) {
  if (!d) return "";
  const e = /* @__PURE__ */ new Date(d + "T00:00");
  return (e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? on : rn).format(e);
}
const un = (d) => {
  const [e, s] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(e, s - 1, 1));
}, dn = {
  key: 0,
  class: "at-pv-title"
}, cn = ["checked"], pn = {
  key: 2,
  class: "at-pv-empty"
}, vn = {
  key: 5,
  class: "at-pv-multi"
}, mn = {
  key: 6,
  class: "at-pv-person"
}, hn = { class: "at-ellipsis" }, gn = {
  key: 7,
  class: "at-pv-rel"
}, fn = { class: "at-ellipsis" }, yn = {
  key: 9,
  class: "at-num"
}, bn = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, ce = /* @__PURE__ */ E({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const e = d, s = S(() => J(e.row, e.prop)), t = S(() => e.prop.type), i = S(() => Te(e.prop) ? qe(e.prop, e.row, s.value) : void 0), c = S(() => t.value === "multi" ? (s.value ?? []).map((w) => qe(e.prop, e.row, w)).filter(Boolean) : []), h = S(() => {
      var w, M;
      return t.value === "date" && !!((M = (w = e.prop).overdue) != null && M.call(w, e.row));
    }), p = S(() => {
      var w;
      return ((w = i.value) == null ? void 0 : w.label) ?? String(s.value ?? "");
    });
    return (w, M) => {
      var A, D, I;
      return t.value === "title" ? (a(), n("span", dn, v(s.value || "Sans titre"), 1)) : t.value === "checkbox" ? (a(), n("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!s.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, cn)) : B(te)(s.value) ? (a(), n("span", pn, "—")) : t.value === "status" ? (a(), n("span", {
        key: 3,
        class: F(["at-badge", ((A = i.value) == null ? void 0 : A.tone) && i.value.tone !== "neutral" && `at-badge--${i.value.tone}`])
      }, v(p.value), 3)) : t.value === "select" ? (a(), n("span", {
        key: 4,
        class: F(["at-tag", ((D = i.value) == null ? void 0 : D.color) && i.value.color !== "gray" && `at-tag--${i.value.color}`])
      }, v(p.value), 3)) : t.value === "multi" ? (a(), n("span", vn, [
        (a(!0), n(y, null, V(c.value, (R) => (a(), n("span", {
          key: R.value,
          class: F(["at-tag", R.color && R.color !== "gray" && `at-tag--${R.color}`])
        }, v(R.label), 3))), 128))
      ])) : t.value === "person" ? (a(), n("span", mn, [
        f(Lt, { name: p.value }, null, 8, ["name"]),
        u("span", hn, v(p.value), 1)
      ])) : t.value === "relation" ? (a(), n("span", gn, [
        (I = i.value) != null && I.mark ? (a(), n("span", {
          key: 0,
          class: "at-pv-mark",
          style: ee({ background: i.value.mark })
        }, null, 4)) : (a(), P(C, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", fn, v(i.value ? i.value.label : "Introuvable"), 1)
      ])) : t.value === "date" ? (a(), n("span", {
        key: 8,
        class: F(["at-pv-date", h.value && "at-pv-over"])
      }, v(B(rt)(s.value)), 3)) : t.value === "number" ? (a(), n("span", yn, v(B(xt).format(Number(s.value))) + v(w.prop.suffix ?? ""), 1)) : t.value === "progress" ? (a(), P(Bt, {
        key: 10,
        value: Number(s.value)
      }, null, 8, ["value"])) : (a(), n("span", bn, v(s.value), 1));
    };
  }
}), kn = ["aria-label"], _n = { class: "at-menu-label" }, wn = ["aria-selected", "onClick"], $n = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, Mn = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), An = ["aria-label"], Cn = { class: "at-menu-label" }, Sn = ["aria-checked", "onClick"], Vn = ["checked"], Tn = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, zn = { class: "at-menu-title" }, Dn = ["value", "aria-label"], Ln = { class: "at-menu-actions" }, Bn = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, En = { class: "at-menu-title" }, xn = ["type", "aria-label"], ct = /* @__PURE__ */ E({
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
    const s = Y(d, "open"), t = d, i = e, c = U(""), h = U(), p = S(() => {
      const _ = t.prop;
      return _ ? Te(_) ? "options" : _.type === "multi" ? "multi" : _.type === "date" ? "date" : "input" : null;
    }), w = S(() => t.prop ? $e(t.prop, t.row) : []), M = S(() => t.prop && t.row ? t.row[t.prop.key] : null);
    ve(s, (_) => {
      _ && (c.value = M.value ?? "", ze(() => {
        var L, O;
        const $ = (L = h.value) == null ? void 0 : L.querySelector("input, button");
        $ == null || $.focus(), (O = $ == null ? void 0 : $.select) == null || O.call($);
      }));
    });
    const A = (_) => ({ ...t.row, [t.prop.key]: _ });
    function D(_, $ = !0) {
      i("update", _), $ && (s.value = !1);
    }
    function I(_) {
      const $ = [...M.value ?? []], L = $.indexOf(_);
      L < 0 ? $.push(_) : $.splice(L, 1), D($, !1);
    }
    function R() {
      var $;
      let _ = c.value;
      (($ = t.prop) == null ? void 0 : $.type) === "number" && (_ = _ === "" || _ == null ? null : Number(_)), _ !== M.value && i("update", _), s.value = !1;
    }
    function ae() {
      var _;
      if (p.value === "input") {
        let $ = c.value;
        ((_ = t.prop) == null ? void 0 : _.type) === "number" && ($ = $ === "" ? null : Number($)), $ !== M.value && i("update", $);
      }
    }
    return (_, $) => (a(), P(de, {
      open: s.value,
      "onUpdate:open": $[5] || ($[5] = (L) => s.value = L),
      anchor: _.anchor,
      onClose: ae
    }, {
      default: x(() => [
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
            u("div", _n, v(_.prop.name), 1),
            (a(!0), n(y, null, V(w.value, (L) => (a(), n("button", {
              key: L.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": L.value === M.value,
              onClick: (O) => D(L.value)
            }, [
              f(ce, {
                prop: _.prop,
                row: A(L.value)
              }, null, 8, ["prop", "row"]),
              L.value === M.value ? (a(), P(C, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : g("", !0)
            ], 8, wn))), 128)),
            w.value.length ? g("", !0) : (a(), n("div", $n, "Aucune option disponible")),
            _.prop.required ? g("", !0) : (a(), n(y, { key: 1 }, [
              Mn,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: $[0] || ($[0] = (L) => D(null))
              }, [
                f(C, { name: "x" }),
                k("Effacer")
              ])
            ], 64))
          ], 8, kn)) : p.value === "multi" ? (a(), n("div", {
            key: 1,
            class: "at-menu",
            "aria-label": _.prop.name
          }, [
            u("div", Cn, v(_.prop.name), 1),
            (a(!0), n(y, null, V(w.value, (L) => (a(), n("button", {
              key: L.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(L.value),
              onClick: (O) => I(L.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(L.value)
              }, null, 8, Vn),
              u("span", {
                class: F(["at-tag", L.color && L.color !== "gray" && `at-tag--${L.color}`])
              }, v(L.label), 3)
            ], 8, Sn))), 128))
          ], 8, An)) : p.value === "date" ? (a(), n("div", Tn, [
            u("span", zn, v(_.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": _.prop.name,
              onChange: $[1] || ($[1] = (L) => D(L.target.value || null, !1))
            }, null, 40, Dn),
            u("div", Ln, [
              f(N, {
                size: "sm",
                onClick: $[2] || ($[2] = (L) => D(B(Se)()))
              }, {
                default: x(() => [
                  k("Aujourd’hui")
                ]),
                _: 1
              }),
              f(N, {
                size: "sm",
                variant: "ghost",
                onClick: $[3] || ($[3] = (L) => D(null))
              }, {
                default: x(() => [
                  k("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (a(), n("div", Bn, [
            u("span", En, v(_.prop.name), 1),
            j(u("input", {
              "onUpdate:modelValue": $[4] || ($[4] = (L) => c.value = L),
              class: "at-input",
              type: _.prop.type === "number" ? "number" : "text",
              "aria-label": _.prop.name,
              onKeydown: fa(R, ["enter"])
            }, null, 40, xn), [
              [lt, c.value]
            ])
          ]))
        ], 512)) : g("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Fn = { class: "at-dv" }, Pn = { class: "at-dv-viewsbar" }, On = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Un = ["aria-selected", "title", "onClick"], Nn = { class: "at-toolbar at-dv-toolbar" }, In = {
  key: 1,
  class: "at-dv-n"
}, qn = {
  key: 1,
  class: "at-dv-n"
}, Hn = { class: "at-input-wrap at-dv-search" }, jn = {
  key: 0,
  class: "at-dv-chips"
}, Rn = { class: "at-table-wrap" }, Wn = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Kn = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Gn = { class: "at-cell-check" }, Jn = ["checked", "indeterminate"], Yn = { class: "at-th" }, Xn = ["onMousedown"], Zn = { class: "at-cell-check" }, Qn = {
  key: 0,
  class: "at-dv-grouprow"
}, es = ["colspan"], ts = ["aria-expanded", "onClick"], as = {
  key: 1,
  class: "at-pv-empty"
}, ns = { class: "at-count" }, ss = ["aria-selected"], ls = { class: "at-cell-check" }, os = ["checked", "onChange"], rs = ["onClick"], is = ["onClick"], us = /* @__PURE__ */ u("td", null, null, -1), ds = { class: "at-dv-newrow" }, cs = /* @__PURE__ */ u("td", null, null, -1), ps = ["colspan"], vs = ["onClick"], ms = /* @__PURE__ */ u("td", null, null, -1), hs = /* @__PURE__ */ u("td", null, null, -1), gs = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, fs = { class: "at-num" }, ys = {
  key: 2,
  class: "at-dv-board"
}, bs = {
  key: 0,
  class: "at-empty"
}, ks = ["onDragover", "onDrop"], _s = { class: "at-dv-colhead" }, ws = {
  key: 1,
  class: "at-pv-empty"
}, $s = { class: "at-count" }, Ms = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), As = { class: "at-dv-cards" }, Cs = ["onDragstart", "onClick"], Ss = { class: "at-dv-cardtitle" }, Vs = {
  key: 0,
  class: "at-dv-cardprops"
}, Ts = ["onClick"], zs = { key: 3 }, Ds = {
  key: 0,
  class: "at-empty"
}, Ls = {
  key: 1,
  class: "at-dv-list"
}, Bs = {
  key: 0,
  class: "at-dv-lgroup"
}, Es = ["aria-expanded", "onClick"], xs = {
  key: 1,
  class: "at-pv-empty"
}, Fs = { class: "at-count" }, Ps = ["onClick"], Os = { class: "at-pv-title" }, Us = { class: "at-dv-liprops" }, Ns = { class: "at-dv-newline" }, Is = { class: "at-dv-calhead" }, qs = { class: "at-dv-calmonth" }, Hs = { class: "at-dv-calnote" }, js = { class: "at-dv-calwrap" }, Rs = { class: "at-dv-calgrid" }, Ws = { class: "at-dv-calgrid" }, Ks = ["onDragover", "onDrop"], Gs = { class: "at-dv-daynum" }, Js = ["aria-label", "onClick"], Ys = ["onDragstart", "onClick"], Xs = {
  class: "at-menu",
  role: "menu"
}, Zs = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), Qs = ["onClick"], el = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, tl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), al = { class: "at-rules" }, nl = {
  key: 0,
  class: "at-menu-empty"
}, sl = { class: "at-select" }, ll = ["onUpdate:modelValue", "onChange"], ol = ["value"], rl = { class: "at-select" }, il = ["onUpdate:modelValue"], ul = ["value"], dl = {
  key: 0,
  class: "at-select"
}, cl = ["onUpdate:modelValue"], pl = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), vl = ["value"], ml = ["onUpdate:modelValue"], hl = ["onUpdate:modelValue"], gl = ["onUpdate:modelValue"], fl = { key: 1 }, yl = { class: "at-menu-actions" }, bl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, kl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), _l = { class: "at-rules" }, wl = {
  key: 0,
  class: "at-menu-empty"
}, $l = { class: "at-select" }, Ml = ["onUpdate:modelValue"], Al = ["value"], Cl = { class: "at-select" }, Sl = ["onUpdate:modelValue"], Vl = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Tl = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), zl = [
  Vl,
  Tl
], Dl = { class: "at-menu-actions" }, Ll = {
  class: "at-menu",
  role: "menu"
}, Bl = { class: "at-menu-label" }, El = ["onClick"], xl = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Fl = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Pl = ["draggable", "onDragstart", "onDragover", "onDrop"], Ol = { class: "at-pi-name" }, Ul = ["aria-label", "checked", "disabled", "onChange"], Nl = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Il = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, ql = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Hl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), jl = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Rl = ["aria-pressed", "onClick"], Wl = {
  key: 0,
  class: "at-field-row"
}, Kl = { class: "at-select" }, Gl = ["value"], Jl = {
  key: 0,
  value: ""
}, Yl = ["value"], Xl = {
  key: 1,
  class: "at-field-row"
}, Zl = /* @__PURE__ */ u("span", null, "Date utilisée", -1), Ql = { class: "at-select" }, eo = ["value"], to = ["value"], ao = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), no = ["disabled"], so = /* @__PURE__ */ E({
  __name: "AtDataView",
  props: /* @__PURE__ */ G({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean },
    lockViews: { type: Boolean }
  }, {
    views: { default: () => [Mt("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ G(["update", "create", "open", "delete"], ["update:views", "update:activeView"]),
  setup(d, { emit: e }) {
    const s = d, t = Y(d, "views"), i = Y(d, "activeView"), c = e, h = (o) => o[s.rowKey], p = S(() => t.value.find((o) => o.id === i.value) ?? t.value[0]), w = S(() => Object.fromEntries(s.schema.map((o) => [o.key, o]))), M = S(() => s.schema.find((o) => o.type === "title")), A = S(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? s.rowKey;
    }), D = S(() => {
      const o = (p.value.order ?? []).filter((b) => w.value[b]);
      for (const b of s.schema) o.includes(b.key) || o.push(b.key);
      const r = o.indexOf(A.value);
      return r > 0 && (o.splice(r, 1), o.unshift(A.value)), o.map((b) => w.value[b]);
    }), I = S(() => D.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), R = S(() => I.value.filter((o) => o.type !== "title")), ae = S(() => s.schema.filter(Te)), _ = S(() => s.schema.filter((o) => o.type === "date")), $ = S(() => s.schema.find((o) => o.type === "status")), L = U(""), O = S(() => an(s.rows, s.schema, p.value, L.value)), q = S(() => {
      var r, b;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((r = $.value) == null ? void 0 : r.key) ?? ((b = ae.value[0]) == null ? void 0 : b.key) ?? null : o;
    }), H = S(() => q.value && p.value.layout !== "calendar" ? w.value[q.value] : null), ie = S(() => nn(O.value, H.value, p.value.layout === "board")), X = (o) => ({ [q.value]: o === Ie ? null : o }), ne = S(() => p.value.filters.filter((o) => w.value[o.prop])), se = S(() => p.value.sorts.filter((o) => w.value[o.prop])), je = U({}), le = U(null), pe = U(null);
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
    function jt(o) {
      o.id === p.value.id ? oe("settings", je.value[o.id]) : i.value = o.id;
    }
    const vt = () => {
      var o, r;
      return ((o = $.value) == null ? void 0 : o.key) ?? ((r = ae.value[0]) == null ? void 0 : r.key) ?? null;
    };
    function Rt(o) {
      if (s.lockViews) return;
      const r = Mt(Oe.find((b) => b.value === o).label, o, { groupBy: o === "board" ? vt() : null });
      t.value.push(r), i.value = r.id, le.value = null, ze(() => oe("settings", je.value[r.id]));
    }
    function Wt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = vt());
    }
    function Kt() {
      if (s.lockViews) return;
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", t.value.push(o), i.value = o.id, le.value = null;
    }
    function Gt() {
      if (s.lockViews || t.value.length < 2) return;
      const o = t.value.indexOf(p.value);
      t.value.splice(o, 1), i.value = t.value[Math.max(0, o - 1)].id, le.value = null;
    }
    ve(() => p.value.id, () => {
      W.value = [], le.value = null;
    });
    function Jt() {
      const o = s.schema.find((r) => r.type !== "title" && r.type !== "progress") ?? s.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: st[o.type][0], value: "" });
    }
    function Yt(o) {
      o.op = st[w.value[o.prop].type][0], o.value = "";
    }
    const Xt = (o) => {
      var r;
      return st[(r = w.value[o.prop]) == null ? void 0 : r.type] ?? [];
    }, mt = (o) => !Et.includes(o.op);
    function De(o) {
      const r = w.value[o.prop];
      return r ? Te(r) || r.type === "multi" ? "options" : r.type === "date" ? "date" : r.type === "number" || r.type === "progress" ? "number" : "text" : "text";
    }
    function Xe(o) {
      var K;
      const r = w.value[o.prop];
      let b = "";
      if (mt(o)) {
        const l = De(o);
        b = l === "options" ? ((K = qe(r, void 0, o.value)) == null ? void 0 : K.label) ?? "…" : l === "date" ? rt(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: r.name, op: wt[o.op], val: b };
    }
    function Zt() {
      const o = p.value.sorts.map((b) => b.prop), r = s.schema.find((b) => !o.includes(b.key)) ?? s.schema[0];
      p.value.sorts.push({ id: we(), prop: r.key, dir: "asc" });
    }
    const ht = (o, r) => {
      const b = o.indexOf(r);
      b >= 0 && o.splice(b, 1);
    };
    function Qt() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Ze(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (le.value = null);
    }
    function ea(o) {
      const r = p.value.hidden, b = r.indexOf(o.key);
      b < 0 ? r.push(o.key) : r.splice(b, 1);
    }
    function gt(o) {
      p.value.hidden = o ? [] : s.schema.filter((r) => r.type !== "title").map((r) => r.key);
    }
    const Me = U(null), Le = U(null);
    function ta(o) {
      if (Me.value == null) return;
      const r = D.value.map((K) => K.key), [b] = r.splice(Me.value, 1);
      r.splice(o, 0, b), p.value.order = r, Me.value = null, Le.value = null;
    }
    const Qe = (o) => p.value.widths[o.key] ?? o.width ?? 160, aa = S(() => 36 + I.value.reduce((o, r) => o + Qe(r), 0) + 44), et = U(null);
    function na(o, r) {
      const b = o.clientX, K = Qe(r);
      et.value = r.key;
      const l = (T) => {
        p.value.widths[r.key] = Math.max(70, Math.round(K + T.clientX - b));
      }, m = () => {
        et.value = null, window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", m);
      };
      window.addEventListener("mousemove", l), window.addEventListener("mouseup", m);
    }
    const W = U([]), tt = S(() => O.value.length > 0 && O.value.every((o) => W.value.includes(h(o)))), sa = S(() => W.value.length > 0 && !tt.value);
    function la(o) {
      const r = W.value.indexOf(h(o));
      r < 0 ? W.value.push(h(o)) : W.value.splice(r, 1);
    }
    function oa() {
      W.value = tt.value ? [] : O.value.map(h);
    }
    function ra() {
      c("delete", s.rows.filter((o) => W.value.includes(h(o)))), W.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function ft(o) {
      const r = p.value.collapsed, b = r.indexOf(o);
      b < 0 ? r.push(o) : r.splice(b, 1);
    }
    function at(o) {
      const r = O.value;
      if (o.type === "title") return { label: "Total", value: String(r.length) };
      if (o.type === "number") return { label: "Somme", value: xt.format(r.reduce((b, K) => b + (Number(J(K, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && r.length) return { label: "Moyenne", value: Math.round(r.reduce((b, K) => b + Number(J(K, o)), 0) / r.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const b = r.filter((K) => o.overdue(K)).length;
        return b ? { label: "En retard", value: String(b) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(r.filter((b) => J(b, o)).length) } : null;
    }
    const fe = ya(null), yt = U(null), nt = U(!1);
    function ia(o, r, b) {
      if (b.type === "title") {
        c("open", r);
        return;
      }
      if (Ve(b)) {
        if (b.type === "checkbox") {
          c("update", r, b.key, !r[b.key]);
          return;
        }
        yt.value = o.currentTarget, fe.value = { row: r, prop: b }, nt.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...ln(p.value, s.schema), ...o });
    }
    const Be = U(null), ye = U(null);
    function bt(o, r) {
      Be.value = h(r), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(h(r))));
    }
    function Ee() {
      Be.value = null, ye.value = null;
    }
    const kt = () => s.rows.find((o) => h(o) === Be.value);
    function ua(o) {
      const r = kt();
      r && q.value && c("update", r, q.value, o === Ie ? null : o), Ee();
    }
    function da(o) {
      const r = kt();
      r && re.value && c("update", r, re.value, o), Ee();
    }
    const re = S(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = _.value[0]) == null ? void 0 : o.key) ?? null;
    }), xe = S(() => p.value.month ?? Se().slice(0, 7)), ca = S(() => sn(xe.value).map((o) => ({ ...o, today: o.iso === Se(), rows: re.value ? O.value.filter((r) => r[re.value] === o.iso) : [] }))), _t = S(() => re.value ? O.value.filter((o) => !o[re.value]).length : 0), pa = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, va = (o) => {
      const r = $.value, b = r ? qe(r, o, o[r.key]) : void 0;
      return pa[(b == null ? void 0 : b.tone) ?? "neutral"];
    }, ma = (o) => {
      const r = $.value;
      if (!r) return !1;
      const b = $e(r, o);
      return b.length > 0 && o[r.key] === b[b.length - 1].value;
    }, Fe = (o, r = 0) => s.iconTools ? { iconOnly: !r, label: o, title: o, "aria-label": r ? `${o} (${r})` : o } : {}, ha = (o) => {
      var r;
      return ((r = Oe.find((b) => b.value === o)) == null ? void 0 : r.icon) ?? "table";
    }, Pe = S(() => H.value ? `Sans ${H.value.name.toLowerCase()}` : "");
    return (o, r) => {
      var b, K;
      return a(), n("section", Fn, [
        u("div", Pn, [
          o.hideViews ? g("", !0) : (a(), n(y, { key: 0 }, [
            u("div", On, [
              (a(!0), n(y, null, V(t.value, (l) => (a(), n("button", {
                key: l.id,
                ref_for: !0,
                ref: (m) => {
                  m && (je.value[l.id] = m);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": l.id === p.value.id,
                title: l.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (m) => jt(l)
              }, [
                f(C, {
                  name: ha(l.layout)
                }, null, 8, ["name"]),
                k(v(l.name), 1)
              ], 8, Un))), 128))
            ]),
            o.lockViews ? g("", !0) : (a(), P(N, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: r[0] || (r[0] = (l) => oe("add", l.currentTarget))
            }))
          ], 64)),
          u("div", Nn, [
            f(N, Q(Fe("Filtrer", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": ne.value.length },
              onClick: r[1] || (r[1] = (l) => oe("filter", l.currentTarget))
            }), {
              default: x(() => [
                o.iconTools ? g("", !0) : (a(), n(y, { key: 0 }, [
                  k("Filtrer")
                ], 64)),
                ne.value.length ? (a(), n("span", In, v(ne.value.length), 1)) : g("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            f(N, Q(Fe("Trier", se.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": se.value.length },
              onClick: r[2] || (r[2] = (l) => oe("sort", l.currentTarget))
            }), {
              default: x(() => [
                o.iconTools ? g("", !0) : (a(), n(y, { key: 0 }, [
                  k("Trier")
                ], 64)),
                se.value.length ? (a(), n("span", qn, v(se.value.length), 1)) : g("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            p.value.layout !== "calendar" ? (a(), P(N, Q({ key: 0 }, Fe("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": p.value.groupBy },
              onClick: r[3] || (r[3] = (l) => oe("group", l.currentTarget))
            }), {
              default: x(() => [
                k("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : g("", !0),
            f(N, Q(Fe("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: r[4] || (r[4] = (l) => oe("props", l.currentTarget))
            }), {
              default: x(() => [
                k("Propriétés")
              ]),
              _: 1
            }, 16),
            u("div", Hn, [
              f(C, { name: "search" }),
              j(u("input", {
                "onUpdate:modelValue": r[5] || (r[5] = (l) => L.value = l),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [ke, L.value]
              ])
            ]),
            o.hideViews ? g("", !0) : (a(), P(N, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: r[6] || (r[6] = (l) => oe("settings", l.currentTarget))
            })),
            f(N, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: r[7] || (r[7] = (l) => me())
            }, {
              default: x(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        ne.value.length || se.value.length ? (a(), n("div", jn, [
          (a(!0), n(y, null, V(ne.value, (l) => (a(), n("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[8] || (r[8] = (m) => oe("filter", m.currentTarget))
          }, [
            f(C, { name: "filter" }),
            k(v(Xe(l).name) + " " + v(Xe(l).op) + " ", 1),
            u("b", null, v(Xe(l).val), 1)
          ]))), 128)),
          (a(!0), n(y, null, V(se.value, (l) => (a(), n("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[9] || (r[9] = (m) => oe("sort", m.currentTarget))
          }, [
            f(C, { name: "sort" }),
            k(v(w.value[l.prop].name) + " ", 1),
            u("b", null, v(l.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          f(N, {
            variant: "ghost",
            size: "sm",
            onClick: Qt
          }, {
            default: x(() => [
              k("Tout effacer")
            ]),
            _: 1
          })
        ])) : g("", !0),
        p.value.layout === "table" ? (a(), n(y, { key: 1 }, [
          u("div", Rn, [
            u("table", {
              class: "at-table at-dv-table",
              style: ee({ width: aa.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                Wn,
                (a(!0), n(y, null, V(I.value, (l) => (a(), n("col", {
                  key: l.key,
                  style: ee({ width: Qe(l) + "px" })
                }, null, 4))), 128)),
                Kn
              ]),
              u("thead", null, [
                u("tr", null, [
                  u("th", Gn, [
                    u("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: tt.value,
                      indeterminate: sa.value,
                      onChange: oa
                    }, null, 40, Jn)
                  ]),
                  (a(!0), n(y, null, V(I.value, (l) => (a(), n("th", {
                    key: l.key,
                    class: F({ "at-num": l.type === "number" })
                  }, [
                    u("span", Yn, [
                      f(C, {
                        name: B(Ue)(l)
                      }, null, 8, ["name"]),
                      k(v(l.name), 1)
                    ]),
                    u("span", {
                      class: F(["at-dv-resize", et.value === l.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ue((m) => na(m, l), ["prevent"])
                    }, null, 42, Xn)
                  ], 2))), 128)),
                  u("th", Zn, [
                    f(N, {
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
              (a(!0), n(y, null, V(ie.value, (l) => (a(), n("tbody", {
                key: l.key
              }, [
                H.value ? (a(), n("tr", Qn, [
                  u("td", {
                    colspan: I.value.length + 2
                  }, [
                    u("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !ge(l.key),
                      onClick: (m) => ft(l.key)
                    }, [
                      f(C, {
                        name: "chevron-down",
                        class: F({ "at-rot": ge(l.key) })
                      }, null, 8, ["class"]),
                      l.option ? (a(), P(ce, {
                        key: 0,
                        prop: H.value,
                        row: X(l.key)
                      }, null, 8, ["prop", "row"])) : (a(), n("span", as, v(Pe.value), 1)),
                      u("span", ns, v(l.rows.length), 1)
                    ], 8, ts)
                  ], 8, es)
                ])) : g("", !0),
                ge(l.key) ? g("", !0) : (a(), n(y, { key: 1 }, [
                  (a(!0), n(y, null, V(l.rows, (m) => (a(), n("tr", {
                    key: h(m),
                    "aria-selected": W.value.includes(h(m)) ? "true" : void 0
                  }, [
                    u("td", ls, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: W.value.includes(h(m)),
                        onChange: (T) => la(m)
                      }, null, 40, os)
                    ]),
                    (a(!0), n(y, null, V(I.value, (T) => (a(), n("td", {
                      key: T.key,
                      class: F({ "at-num": T.type === "number", "at-dv-titlecell": T.type === "title", "is-edit": T.type !== "title" && B(Ve)(T) }),
                      onClick: (Z) => ia(Z, m, T)
                    }, [
                      f(ce, {
                        prop: T,
                        row: m
                      }, null, 8, ["prop", "row"]),
                      T.type === "title" ? (a(), n("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ue((Z) => c("open", m), ["stop"])
                      }, "Ouvrir", 8, is)) : g("", !0)
                    ], 10, rs))), 128)),
                    us
                  ], 8, ss))), 128)),
                  u("tr", ds, [
                    cs,
                    u("td", {
                      colspan: I.value.length + 1
                    }, [
                      u("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (m) => me(H.value ? X(l.key) : {})
                      }, [
                        f(C, { name: "plus" }),
                        k(v(o.newLabel), 1)
                      ], 8, vs)
                    ], 8, ps)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  ms,
                  (a(!0), n(y, null, V(I.value, (l) => (a(), n("td", {
                    key: l.key,
                    class: F({ "at-num": l.type === "number" })
                  }, [
                    at(l) ? (a(), n(y, { key: 0 }, [
                      k(v(at(l).label) + " ", 1),
                      u("b", null, v(at(l).value), 1)
                    ], 64)) : g("", !0)
                  ], 2))), 128)),
                  hs
                ])
              ])
            ], 4)
          ]),
          W.value.length ? (a(), n("div", gs, [
            u("span", null, [
              u("b", fs, v(W.value.length), 1),
              k(" sélectionnée" + v(W.value.length > 1 ? "s" : ""), 1)
            ]),
            f(N, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: ra
            }, {
              default: x(() => [
                k("Supprimer")
              ]),
              _: 1
            }),
            f(N, {
              variant: "ghost",
              size: "sm",
              onClick: r[11] || (r[11] = (l) => W.value = [])
            }, {
              default: x(() => [
                k("Désélectionner")
              ]),
              _: 1
            })
          ])) : g("", !0)
        ], 64)) : p.value.layout === "board" ? (a(), n("div", ys, [
          H.value ? (a(!0), n(y, { key: 1 }, V(ie.value, (l) => {
            var m;
            return a(), n("div", {
              key: l.key,
              class: F(["at-dv-col", ye.value === l.key && "over"]),
              onDragover: ue((T) => ye.value = l.key, ["prevent"]),
              onDragleave: r[12] || (r[12] = ue((T) => ye.value = null, ["self"])),
              onDrop: ue((T) => ua(l.key), ["prevent"])
            }, [
              u("div", _s, [
                l.option ? (a(), P(ce, {
                  key: 0,
                  prop: H.value,
                  row: X(l.key)
                }, null, 8, ["prop", "row"])) : (a(), n("span", ws, v(Pe.value), 1)),
                u("span", $s, v(l.rows.length), 1),
                Ms,
                f(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((m = l.option) == null ? void 0 : m.label) ?? Pe.value}`,
                  onClick: (T) => me(X(l.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", As, [
                (a(!0), n(y, null, V(l.rows, (T) => (a(), n("button", {
                  key: h(T),
                  type: "button",
                  class: F(["at-dv-card", Be.value === h(T) && "dragging"]),
                  draggable: "true",
                  onDragstart: (Z) => bt(Z, T),
                  onDragend: Ee,
                  onClick: (Z) => c("open", T)
                }, [
                  u("span", Ss, v(T[A.value] || "Sans titre"), 1),
                  R.value.some((Z) => !B(te)(B(J)(T, Z)) || Z.type === "checkbox") ? (a(), n("span", Vs, [
                    (a(!0), n(y, null, V(R.value, (Z) => (a(), n(y, {
                      key: Z.key
                    }, [
                      B(te)(B(J)(T, Z)) ? g("", !0) : (a(), P(ce, {
                        key: 0,
                        prop: Z,
                        row: T
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : g("", !0)
                ], 42, Cs))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (T) => me(X(l.key))
                }, [
                  f(C, { name: "plus" }),
                  k(v(o.newLabel), 1)
                ], 8, Ts)
              ])
            ], 42, ks);
          }), 128)) : (a(), n("div", bs, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (a(), n("div", zs, [
          O.value.length ? (a(), n("div", Ls, [
            (a(!0), n(y, null, V(ie.value, (l) => (a(), n(y, {
              key: l.key
            }, [
              H.value ? (a(), n("div", Bs, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(l.key),
                  onClick: (m) => ft(l.key)
                }, [
                  f(C, {
                    name: "chevron-down",
                    class: F({ "at-rot": ge(l.key) })
                  }, null, 8, ["class"]),
                  l.option ? (a(), P(ce, {
                    key: 0,
                    prop: H.value,
                    row: X(l.key)
                  }, null, 8, ["prop", "row"])) : (a(), n("span", xs, v(Pe.value), 1)),
                  u("span", Fs, v(l.rows.length), 1)
                ], 8, Es)
              ])) : g("", !0),
              ge(l.key) ? g("", !0) : (a(!0), n(y, { key: 1 }, V(l.rows, (m) => (a(), n("button", {
                key: h(m),
                type: "button",
                class: "at-dv-li",
                onClick: (T) => c("open", m)
              }, [
                u("span", Os, v(m[A.value] || "Sans titre"), 1),
                u("span", Us, [
                  (a(!0), n(y, null, V(R.value, (T) => (a(), n(y, {
                    key: T.key
                  }, [
                    B(te)(B(J)(m, T)) ? g("", !0) : (a(), P(ce, {
                      key: 0,
                      prop: T,
                      row: m
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, Ps))), 128))
            ], 64))), 128)),
            u("div", Ns, [
              u("button", {
                type: "button",
                class: "at-dv-new",
                onClick: r[14] || (r[14] = (l) => me())
              }, [
                f(C, { name: "plus" }),
                k(v(o.newLabel), 1)
              ])
            ])
          ])) : (a(), n("div", Ds, [
            k("Aucun élément ne correspond à cette vue."),
            f(N, {
              size: "sm",
              icon: "plus",
              onClick: r[13] || (r[13] = (l) => me())
            }, {
              default: x(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (a(), n(y, { key: 4 }, [
          u("div", Is, [
            u("span", qs, v(B(un)(xe.value)), 1),
            f(N, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: r[15] || (r[15] = (l) => p.value.month = B($t)(xe.value, -1))
            }),
            f(N, {
              size: "sm",
              onClick: r[16] || (r[16] = (l) => p.value.month = B(Se)().slice(0, 7))
            }, {
              default: x(() => [
                k("Aujourd’hui")
              ]),
              _: 1
            }),
            f(N, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: r[17] || (r[17] = (l) => p.value.month = B($t)(xe.value, 1))
            }),
            u("span", Hs, [
              re.value ? (a(), n(y, { key: 0 }, [
                k("Par " + v(w.value[re.value].name.toLowerCase()), 1),
                _t.value ? (a(), n(y, { key: 0 }, [
                  k(" · " + v(_t.value) + " sans date", 1)
                ], 64)) : g("", !0)
              ], 64)) : (a(), n(y, { key: 1 }, [
                k("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", js, [
            u("div", Rs, [
              (a(), n(y, null, V(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (l) => u("div", {
                key: l,
                class: "at-dv-dow"
              }, v(l), 1)), 64))
            ]),
            u("div", Ws, [
              (a(!0), n(y, null, V(ca.value, (l) => (a(), n("div", {
                key: l.iso,
                class: F(["at-dv-day", l.outside && "out", l.today && "today", ye.value === l.iso && "over"]),
                onDragover: ue((m) => ye.value = l.iso, ["prevent"]),
                onDrop: ue((m) => da(l.iso), ["prevent"])
              }, [
                u("div", Gs, [
                  u("span", null, v(l.day), 1),
                  re.value ? (a(), n("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${B(rt)(l.iso)}`,
                    onClick: (m) => me({ [re.value]: l.iso })
                  }, [
                    f(C, { name: "plus" })
                  ], 8, Js)) : g("", !0)
                ]),
                (a(!0), n(y, null, V(l.rows, (m) => (a(), n("button", {
                  key: h(m),
                  type: "button",
                  class: F(["at-dv-calitem", ma(m) && "done"]),
                  draggable: "true",
                  onDragstart: (T) => bt(T, m),
                  onDragend: Ee,
                  onClick: (T) => c("open", m)
                }, [
                  u("span", {
                    class: "dot",
                    style: ee({ background: va(m) })
                  }, null, 4),
                  u("span", null, v(m[A.value] || "Sans titre"), 1)
                ], 42, Ys))), 128))
              ], 42, Ks))), 128))
            ])
          ])
        ], 64)),
        f(de, {
          open: B(Re),
          "onUpdate:open": r[18] || (r[18] = (l) => be(Re) ? Re.value = l : null),
          anchor: pe.value
        }, {
          default: x(() => [
            u("div", Xs, [
              Zs,
              (a(!0), n(y, null, V(B(Oe), (l) => (a(), n("button", {
                key: l.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (m) => Rt(l.value)
              }, [
                f(C, {
                  name: l.icon
                }, null, 8, ["name"]),
                k(v(l.label), 1)
              ], 8, Qs))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: B(We),
          "onUpdate:open": r[19] || (r[19] = (l) => be(We) ? We.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: x(() => [
            u("div", el, [
              tl,
              u("div", al, [
                p.value.filters.length ? g("", !0) : (a(), n("span", nl, "Aucun filtre : la vue affiche toutes les lignes.")),
                (a(!0), n(y, null, V(p.value.filters, (l) => (a(), n("div", {
                  key: l.id,
                  class: "at-rule"
                }, [
                  u("div", sl, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => l.prop = m,
                      "aria-label": "Propriété",
                      onChange: (m) => Yt(l)
                    }, [
                      (a(!0), n(y, null, V(o.schema, (m) => (a(), n("option", {
                        key: m.key,
                        value: m.key
                      }, v(m.name), 9, ol))), 128))
                    ], 40, ll), [
                      [_e, l.prop]
                    ]),
                    f(C, { name: "chevron-down" })
                  ]),
                  u("div", rl, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => l.op = m,
                      "aria-label": "Condition"
                    }, [
                      (a(!0), n(y, null, V(Xt(l), (m) => (a(), n("option", {
                        key: m,
                        value: m
                      }, v(B(wt)[m]), 9, ul))), 128))
                    ], 8, il), [
                      [_e, l.op]
                    ]),
                    f(C, { name: "chevron-down" })
                  ]),
                  mt(l) ? (a(), n(y, { key: 0 }, [
                    De(l) === "options" ? (a(), n("div", dl, [
                      j(u("select", {
                        "onUpdate:modelValue": (m) => l.value = m,
                        "aria-label": "Valeur"
                      }, [
                        pl,
                        (a(!0), n(y, null, V(B($e)(w.value[l.prop]), (m) => (a(), n("option", {
                          key: m.value,
                          value: m.value
                        }, v(m.label), 9, vl))), 128))
                      ], 8, cl), [
                        [_e, l.value]
                      ]),
                      f(C, { name: "chevron-down" })
                    ])) : De(l) === "date" ? j((a(), n("input", {
                      key: 1,
                      "onUpdate:modelValue": (m) => l.value = m,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, ml)), [
                      [ke, l.value]
                    ]) : De(l) === "number" ? j((a(), n("input", {
                      key: 2,
                      "onUpdate:modelValue": (m) => l.value = m,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, hl)), [
                      [ke, l.value]
                    ]) : j((a(), n("input", {
                      key: 3,
                      "onUpdate:modelValue": (m) => l.value = m,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, gl)), [
                      [ke, l.value]
                    ])
                  ], 64)) : (a(), n("span", fl)),
                  f(N, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (m) => ht(p.value.filters, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", yl, [
                f(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Jt
                }, {
                  default: x(() => [
                    k("Ajouter un filtre")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: B(Ke),
          "onUpdate:open": r[20] || (r[20] = (l) => be(Ke) ? Ke.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: x(() => [
            u("div", bl, [
              kl,
              u("div", _l, [
                p.value.sorts.length ? g("", !0) : (a(), n("span", wl, "Aucun tri : ordre des données.")),
                (a(!0), n(y, null, V(p.value.sorts, (l) => (a(), n("div", {
                  key: l.id,
                  class: "at-rule sort"
                }, [
                  u("div", $l, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => l.prop = m,
                      "aria-label": "Propriété"
                    }, [
                      (a(!0), n(y, null, V(o.schema, (m) => (a(), n("option", {
                        key: m.key,
                        value: m.key
                      }, v(m.name), 9, Al))), 128))
                    ], 8, Ml), [
                      [_e, l.prop]
                    ]),
                    f(C, { name: "chevron-down" })
                  ]),
                  u("div", Cl, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => l.dir = m,
                      "aria-label": "Sens"
                    }, zl, 8, Sl), [
                      [_e, l.dir]
                    ]),
                    f(C, { name: "chevron-down" })
                  ]),
                  f(N, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (m) => ht(p.value.sorts, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", Dl, [
                f(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Zt
                }, {
                  default: x(() => [
                    k("Ajouter un tri")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: B(Ge),
          "onUpdate:open": r[22] || (r[22] = (l) => be(Ge) ? Ge.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: x(() => [
            u("div", Ll, [
              u("div", Bl, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (a(), n("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: r[21] || (r[21] = (l) => Ze(null))
              }, [
                f(C, { name: "x" }),
                k("Aucun groupe"),
                p.value.groupBy ? g("", !0) : (a(), P(C, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : g("", !0),
              (a(!0), n(y, null, V(ae.value, (l) => (a(), n("button", {
                key: l.key,
                type: "button",
                class: "at-menu-item",
                onClick: (m) => Ze(l.key)
              }, [
                f(C, {
                  name: B(Ue)(l)
                }, null, 8, ["name"]),
                k(v(l.name), 1),
                q.value === l.key ? (a(), P(C, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : g("", !0)
              ], 8, El))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: B(Je),
          "onUpdate:open": r[26] || (r[26] = (l) => be(Je) ? Je.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: x(() => [
            u("div", xl, [
              Fl,
              (a(!0), n(y, null, V(D.value, (l, m) => (a(), n("div", {
                key: l.key,
                class: F(["at-menu-item", "at-pi", Le.value === m && "drop"]),
                draggable: l.type !== "title",
                onDragstart: (T) => Me.value = m,
                onDragover: ue((T) => Le.value = m, ["prevent"]),
                onDrop: ue((T) => ta(m), ["prevent"]),
                onDragend: r[23] || (r[23] = (T) => {
                  Me.value = null, Le.value = null;
                })
              }, [
                f(C, {
                  name: "grip",
                  class: "grip"
                }),
                f(C, {
                  name: B(Ue)(l)
                }, null, 8, ["name"]),
                u("span", Ol, v(l.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${l.name}`,
                  checked: l.type === "title" || !p.value.hidden.includes(l.key),
                  disabled: l.type === "title",
                  onChange: (T) => ea(l)
                }, null, 40, Ul)
              ], 42, Pl))), 128)),
              Nl,
              u("div", Il, [
                f(N, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[24] || (r[24] = (l) => gt(!0))
                }, {
                  default: x(() => [
                    k("Tout afficher")
                  ]),
                  _: 1
                }),
                f(N, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[25] || (r[25] = (l) => gt(!1))
                }, {
                  default: x(() => [
                    k("Tout masquer")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: B(Ye),
          "onUpdate:open": r[30] || (r[30] = (l) => be(Ye) ? Ye.value = l : null),
          anchor: pe.value
        }, {
          default: x(() => [
            u("div", ql, [
              Hl,
              j(u("input", {
                "onUpdate:modelValue": r[27] || (r[27] = (l) => p.value.name = l),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", jl, [
                (a(!0), n(y, null, V(B(Oe), (l) => (a(), n("button", {
                  key: l.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === l.value,
                  onClick: (m) => Wt(l.value)
                }, [
                  f(C, {
                    name: l.icon
                  }, null, 8, ["name"]),
                  k(v(l.label), 1)
                ], 8, Rl))), 128))
              ]),
              p.value.layout !== "calendar" ? (a(), n("div", Wl, [
                u("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                u("div", Kl, [
                  u("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: r[28] || (r[28] = (l) => Ze(l.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (a(), n("option", Jl, "Aucun")) : g("", !0),
                    (a(!0), n(y, null, V(ae.value, (l) => (a(), n("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, Yl))), 128))
                  ], 40, Gl),
                  f(C, { name: "chevron-down" })
                ])
              ])) : (a(), n("div", Xl, [
                Zl,
                u("div", Ql, [
                  u("select", {
                    value: re.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: r[29] || (r[29] = (l) => p.value.dateProp = l.target.value)
                  }, [
                    (a(!0), n(y, null, V(_.value, (l) => (a(), n("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, to))), 128))
                  ], 40, eo),
                  f(C, { name: "chevron-down" })
                ])
              ])),
              o.lockViews ? g("", !0) : (a(), n(y, { key: 2 }, [
                ao,
                u("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: Kt
                }, [
                  f(C, { name: "copy" }),
                  k("Dupliquer la vue")
                ]),
                u("button", {
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: t.value.length < 2,
                  onClick: Gt
                }, [
                  f(C, { name: "trash" }),
                  k("Supprimer la vue")
                ], 8, no)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(ct, {
          open: nt.value,
          "onUpdate:open": r[31] || (r[31] = (l) => nt.value = l),
          prop: ((b = fe.value) == null ? void 0 : b.prop) ?? null,
          row: (K = fe.value) == null ? void 0 : K.row,
          anchor: yt.value,
          onUpdate: r[32] || (r[32] = (l) => fe.value && c("update", fe.value.row, fe.value.prop.key, l))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), lo = {
  key: 0,
  class: "at-drawer-wrap"
}, oo = ["aria-label"], ro = { class: "at-drawer__head" }, io = { class: "at-drawer__crumb" }, uo = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), co = { class: "at-drawer__body" }, po = /* @__PURE__ */ E({
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
    const e = Y(d, "open"), s = U();
    let t = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return ve(e, (c) => {
      var h;
      c ? (t = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = s.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (h = t == null ? void 0 : t.focus) == null || h.call(t));
    }, { immediate: !0 }), it(() => document.removeEventListener("keydown", i)), (c, h) => (a(), P(ut, { to: "body" }, [
      f(zt, { name: "at-drawer" }, {
        default: x(() => [
          e.value ? (a(), n("div", lo, [
            u("div", {
              class: "at-overlay",
              onClick: h[0] || (h[0] = (p) => e.value = !1)
            }),
            u("aside", {
              ref_key: "panel",
              ref: s,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: ee({ width: `min(${c.width}px, 100%)` })
            }, [
              u("header", ro, [
                u("span", io, [
                  z(c.$slots, "crumb", {}, () => [
                    k(v(c.label), 1)
                  ])
                ]),
                uo,
                z(c.$slots, "actions"),
                f(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: h[1] || (h[1] = (p) => e.value = !1)
                })
              ]),
              u("div", co, [
                z(c.$slots, "default")
              ])
            ], 12, oo)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), vo = ["aria-label"], mo = {
  key: 0,
  class: "at-menu-label"
}, Ft = /* @__PURE__ */ E({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const e = U();
    function s(t) {
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
      style: ee(t.minWidth ? { minWidth: t.minWidth + "px" } : void 0),
      onKeydown: s
    }, [
      t.label ? (a(), n("div", mo, v(t.label), 1)) : g("", !0),
      z(t.$slots, "default")
    ], 44, vo));
  }
}), ho = /* @__PURE__ */ E({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const e = U(!1);
    function s(t) {
      t.target.closest('.at-menu-item[role="menuitem"]') && (e.value = !1);
    }
    return (t, i) => (a(), P(de, {
      open: e.value,
      "onUpdate:open": i[0] || (i[0] = (c) => e.value = c),
      align: t.align
    }, {
      trigger: x((c) => [
        z(t.$slots, "trigger", ba(ka(c)))
      ]),
      default: x(() => [
        f(Ft, {
          label: t.label,
          "min-width": t.minWidth,
          onClick: s
        }, {
          default: x(() => [
            z(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align"]));
  }
}), go = { class: "at-empty" }, fo = /* @__PURE__ */ E({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (e, s) => (a(), n("div", go, [
      z(e.$slots, "default", {}, () => [
        k(v(e.message), 1)
      ]),
      z(e.$slots, "action")
    ]));
  }
});
let At = 0;
function yo(d = "at") {
  return At += 1, `${d}-${At}`;
}
const bo = { class: "at-field" }, ko = ["for"], _o = ["id"], wo = ["id"], $o = /* @__PURE__ */ E({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const s = d.id ?? yo("field");
    return (t, i) => (a(), n("div", bo, [
      t.label ? (a(), n("label", {
        key: 0,
        class: "at-label",
        for: B(s)
      }, v(t.label), 9, ko)) : g("", !0),
      z(t.$slots, "default", {
        id: B(s),
        invalid: !!t.error,
        describedby: t.error || t.hint ? B(s) + "-hint" : void 0
      }),
      t.error ? (a(), n("span", {
        key: 1,
        id: B(s) + "-hint",
        class: "at-hint at-hint--error"
      }, v(t.error), 9, _o)) : t.hint ? (a(), n("span", {
        key: 2,
        id: B(s) + "-hint",
        class: "at-hint"
      }, v(t.hint), 9, wo)) : g("", !0)
    ]));
  }
}), Mo = ["role", "aria-label", "aria-hidden"], Pt = /* @__PURE__ */ E({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("span", {
      class: F(["at-tile", e.size !== "sm" && `at-tile--${e.size}`, e.color === "neutral" ? "at-tile--neutral" : `at-tone-${e.color}`]),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true"
    }, [
      f(C, { name: e.name }, null, 8, ["name"])
    ], 10, Mo));
  }
}), He = (d, e) => {
  const s = d.__vccOpts || d;
  for (const [t, i] of e)
    s[t] = i;
  return s;
}, Ao = {}, Co = { class: "at-kbd" };
function So(d, e) {
  return a(), n("kbd", Co, [
    z(d.$slots, "default")
  ]);
}
const pt = /* @__PURE__ */ He(Ao, [["render", So]]), Vo = {
  key: 0,
  class: "at-input-wrap"
}, To = ["type", "placeholder", "disabled", "aria-invalid"], zo = ["type", "placeholder", "disabled", "aria-invalid"], Do = /* @__PURE__ */ E({
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
    const s = Y(d, "modelValue"), t = d, i = U();
    return e({ focus: () => {
      var c;
      return (c = i.value) == null ? void 0 : c.focus();
    }, el: i }), (c, h) => c.icon || c.kbd ? (a(), n("div", Vo, [
      c.icon ? (a(), P(C, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : g("", !0),
      j(u("input", Q(c.$attrs, {
        ref_key: "el",
        ref: i,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => s.value = p),
        class: "at-input",
        style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, To), [
        [lt, s.value]
      ]),
      c.kbd ? (a(), P(pt, { key: 1 }, {
        default: x(() => [
          k(v(c.kbd), 1)
        ]),
        _: 1
      })) : g("", !0)
    ])) : j((a(), n("input", Q({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: i,
      "onUpdate:modelValue": h[1] || (h[1] = (p) => s.value = p),
      class: "at-input",
      style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, zo)), [
      [lt, s.value]
    ]);
  }
}), Lo = ["role", "aria-checked", "disabled"], Bo = {
  key: 2,
  class: "at-menu-meta"
}, Eo = /* @__PURE__ */ E({
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
    return (e, s) => (a(), n("button", {
      type: "button",
      class: F(["at-menu-item", e.danger && "at-menu-item--danger"]),
      role: e.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": e.checked !== void 0 ? e.checked : void 0,
      disabled: e.disabled,
      onClick: s[0] || (s[0] = (t) => e.$emit("select", t))
    }, [
      e.icon ? (a(), P(C, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : g("", !0),
      z(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ]),
      e.kbd ? (a(), P(pt, { key: 1 }, {
        default: x(() => [
          k(v(e.kbd), 1)
        ]),
        _: 1
      })) : e.meta ? (a(), n("span", Bo, v(e.meta), 1)) : e.checked ? (a(), P(C, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : g("", !0)
    ], 10, Lo));
  }
}), xo = {}, Fo = { class: "at-menu-label" };
function Po(d, e) {
  return a(), n("div", Fo, [
    z(d.$slots, "default")
  ]);
}
const Oo = /* @__PURE__ */ He(xo, [["render", Po]]), Uo = {}, No = {
  class: "at-menu-sep",
  role: "separator"
};
function Io(d, e) {
  return a(), n("div", No);
}
const qo = /* @__PURE__ */ He(Uo, [["render", Io]]), Ho = {
  key: 0,
  class: "at-modal-wrap"
}, jo = ["aria-label"], Ro = { class: "at-modal__head" }, Wo = { style: { flex: "1", "min-width": "0" } }, Ko = { class: "at-modal__title" }, Go = {
  key: 0,
  class: "at-modal__desc"
}, Jo = { class: "at-modal__body" }, Yo = {
  key: 0,
  class: "at-modal__foot"
}, Xo = /* @__PURE__ */ E({
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
    const e = Y(d, "open"), s = U();
    let t = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return ve(e, (c) => {
      var h;
      c ? (t = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = s.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (h = t == null ? void 0 : t.focus) == null || h.call(t));
    }, { immediate: !0 }), it(() => document.removeEventListener("keydown", i)), (c, h) => (a(), P(ut, { to: "body" }, [
      f(zt, { name: "at-modal" }, {
        default: x(() => [
          e.value ? (a(), n("div", Ho, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: h[0] || (h[0] = (p) => c.dismissible && (e.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: s,
              class: F(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", Ro, [
                u("div", Wo, [
                  u("h2", Ko, v(c.title), 1),
                  c.description ? (a(), n("p", Go, v(c.description), 1)) : g("", !0)
                ]),
                c.dismissible ? (a(), P(N, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: h[1] || (h[1] = (p) => e.value = !1)
                })) : g("", !0)
              ]),
              u("div", Jo, [
                z(c.$slots, "default")
              ]),
              c.$slots.footer ? (a(), n("footer", Yo, [
                z(c.$slots, "footer", {
                  close: () => e.value = !1
                })
              ])) : g("", !0)
            ], 10, jo)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Zo = ["aria-label"], Qo = {
  key: 0,
  class: "at-nav-label"
}, er = /* @__PURE__ */ E({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("nav", {
      class: "at-nav",
      "aria-label": e.label
    }, [
      e.label ? (a(), n("div", Qo, v(e.label), 1)) : g("", !0),
      z(e.$slots, "default")
    ], 8, Zo));
  }
}), tr = ["href", "aria-current"], ar = { class: "at-ellipsis" }, nr = {
  key: 3,
  class: "at-nav-count"
}, sr = /* @__PURE__ */ E({
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
    return (e, s) => (a(), n("a", {
      class: "at-nav-item",
      href: e.href ?? "#",
      "aria-current": e.active ? "page" : void 0,
      onClick: s[0] || (s[0] = (t) => {
        !e.href && t.preventDefault(), e.$emit("click", t);
      })
    }, [
      e.mark ? (a(), n("span", {
        key: 0,
        class: "at-nav-mark",
        style: ee({ background: e.mark })
      }, null, 4)) : e.icon && e.tile ? (a(), P(Pt, {
        key: 1,
        name: e.icon,
        color: e.tile
      }, null, 8, ["name", "color"])) : e.icon ? (a(), P(C, {
        key: 2,
        name: e.icon
      }, null, 8, ["name"])) : g("", !0),
      u("span", ar, [
        z(e.$slots, "default", {}, () => [
          k(v(e.label), 1)
        ])
      ]),
      e.count != null && e.count !== "" ? (a(), n("span", nr, v(e.count), 1)) : g("", !0)
    ], 8, tr));
  }
}), lr = {
  key: 0,
  class: "at-page__head"
}, or = { class: "t-heading-1" }, rr = { key: 0 }, ir = /* @__PURE__ */ E({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (e, s) => (a(), n("div", {
      class: F(["at-page", e.wide && "at-page--wide"])
    }, [
      e.title || e.$slots.head ? (a(), n("div", lr, [
        z(e.$slots, "head", {}, () => [
          u("h1", or, v(e.title), 1),
          e.description ? (a(), n("p", rr, v(e.description), 1)) : g("", !0)
        ])
      ])) : g("", !0),
      z(e.$slots, "default")
    ], 2));
  }
}), ur = { class: "at-proplist" }, dr = ["disabled", "onClick"], cr = /* @__PURE__ */ E({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: e }) {
    const s = d, t = e, i = S(() => s.schema.filter((M) => {
      var A;
      return M.type !== "title" && !((A = s.exclude) != null && A.includes(M.key));
    })), c = U(null), h = U(null), p = U(!1);
    function w(M, A) {
      if (Ve(A)) {
        if (A.type === "checkbox") {
          t("update", A.key, !s.row[A.key]);
          return;
        }
        h.value = M.currentTarget, c.value = A, p.value = !0;
      }
    }
    return (M, A) => (a(), n(y, null, [
      u("dl", ur, [
        (a(!0), n(y, null, V(i.value, (D) => (a(), n(y, {
          key: D.key
        }, [
          u("dt", null, [
            f(C, {
              name: B(Ue)(D)
            }, null, 8, ["name"]),
            k(v(D.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !B(Ve)(D),
              onClick: (I) => w(I, D)
            }, [
              f(ce, {
                prop: D,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, dr)
          ])
        ], 64))), 128))
      ]),
      f(ct, {
        open: p.value,
        "onUpdate:open": A[0] || (A[0] = (D) => p.value = D),
        prop: c.value,
        row: M.row,
        anchor: h.value,
        onUpdate: A[1] || (A[1] = (D) => c.value && t("update", c.value.key, D))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), pr = ["aria-label"], vr = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], mr = /* @__PURE__ */ E({
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
    return (s, t) => (a(), n("div", {
      class: "at-segment",
      role: "group",
      "aria-label": s.label
    }, [
      (a(!0), n(y, null, V(s.items, (i) => (a(), n("button", {
        key: String(i.value),
        type: "button",
        "aria-pressed": e.value === i.value,
        "aria-label": i.iconOnly ? i.label : void 0,
        title: i.iconOnly ? i.label : void 0,
        disabled: i.disabled,
        onClick: (c) => e.value = i.value
      }, [
        i.icon ? (a(), P(C, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : g("", !0),
        i.iconOnly ? g("", !0) : (a(), n(y, { key: 1 }, [
          k(v(i.label), 1)
        ], 64))
      ], 8, vr))), 128))
    ], 8, pr));
  }
}), hr = { class: "at-select" }, gr = ["disabled", "aria-invalid"], fr = {
  key: 0,
  value: null,
  disabled: ""
}, yr = ["value", "disabled"], br = /* @__PURE__ */ E({
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
    return (s, t) => (a(), n("div", hr, [
      j(u("select", Q(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
        disabled: s.disabled,
        "aria-invalid": s.invalid || void 0,
        style: s.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        s.placeholder ? (a(), n("option", fr, v(s.placeholder), 1)) : g("", !0),
        (a(!0), n(y, null, V(s.options, (i) => (a(), n("option", {
          key: String(i.value),
          value: i.value,
          disabled: i.disabled
        }, v(i.label), 9, yr))), 128))
      ], 16, gr), [
        [_e, e.value]
      ]),
      f(C, { name: "chevron-down" })
    ]));
  }
}), kr = {}, _r = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, wr = {
  key: 0,
  class: "at-sidebar__foot"
};
function $r(d, e) {
  return a(), n("aside", _r, [
    z(d.$slots, "header"),
    z(d.$slots, "default"),
    d.$slots.footer ? (a(), n("div", wr, [
      z(d.$slots, "footer")
    ])) : g("", !0)
  ]);
}
const Mr = /* @__PURE__ */ He(kr, [["render", $r]]), Ar = { class: "at-stat__label" }, Cr = { class: "at-stat__row" }, Sr = { class: "at-stat__value" }, Vr = ["viewBox"], Tr = ["d"], zr = ["d"], Dr = ["cx", "cy"], Lr = {
  key: 1,
  class: "at-stat__foot"
}, Ct = 220, Ae = 32, Br = /* @__PURE__ */ E({
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
    const e = d, s = S(() => {
      const t = e.spark;
      if (!t || t.length < 2) return null;
      const i = Math.min(...t), c = Math.max(...t), h = c - i || 1, p = t.map((A, D) => [2 + D * (Ct - 4) / (t.length - 1), Ae - 3 - (A - i) / h * (Ae - 8)]), w = "M" + p.map((A) => A.map((D) => D.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: w, area: `${w} L${M[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: M };
    });
    return (t, i) => (a(), n("div", {
      class: F(["at-stat", t.color && ["at-stat--striped", `at-tone-${t.color}`]])
    }, [
      u("span", Ar, v(t.label), 1),
      u("div", Cr, [
        u("span", Sr, [
          z(t.$slots, "value", {}, () => [
            k(v(t.value), 1)
          ])
        ]),
        t.delta ? (a(), n("span", {
          key: 0,
          class: F(["at-stat__delta", t.trend && `at-stat__delta--${t.trend}`])
        }, v(t.delta), 3)) : g("", !0)
      ]),
      s.value ? (a(), n("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${Ct} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: s.value.area
        }, null, 8, Tr),
        u("path", {
          class: "line",
          d: s.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, zr),
        u("circle", {
          class: "end",
          cx: s.value.end[0],
          cy: s.value.end[1],
          r: "2.5"
        }, null, 8, Dr)
      ], 8, Vr)) : g("", !0),
      t.foot || t.$slots.foot ? (a(), n("span", Lr, [
        z(t.$slots, "foot", {}, () => [
          k(v(t.foot), 1)
        ])
      ])) : g("", !0)
    ], 2));
  }
}), Er = {
  key: 0,
  class: "at-toggle"
}, xr = ["disabled"], Fr = ["disabled"], Pr = /* @__PURE__ */ E({
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
    return (s, t) => s.label || s.$slots.default ? (a(), n("label", Er, [
      j(u("input", Q(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: s.disabled
      }), null, 16, xr), [
        [Ne, e.value]
      ]),
      z(s.$slots, "default", {}, () => [
        k(v(s.label), 1)
      ])
    ])) : j((a(), n("input", Q({ key: 1 }, s.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (i) => e.value = i),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: s.disabled
    }), null, 16, Fr)), [
      [Ne, e.value]
    ]);
  }
}), Or = { class: "at-table-wrap" }, Ur = { class: "at-table" }, Nr = ["onClick"], Ir = { key: 0 }, qr = ["colspan"], Hr = /* @__PURE__ */ E({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (e, s) => (a(), n("div", Or, [
      u("table", Ur, [
        u("thead", null, [
          u("tr", null, [
            (a(!0), n(y, null, V(e.columns, (t) => (a(), n("th", {
              key: t.key,
              class: F({ "at-num": t.align === "right" }),
              style: ee(t.width ? { width: t.width } : void 0)
            }, v(t.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (a(!0), n(y, null, V(e.rows, (t, i) => (a(), n("tr", {
            key: e.rowKey ? t[e.rowKey] : i,
            style: ee(e.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => e.$emit("rowClick", t)
          }, [
            (a(!0), n(y, null, V(e.columns, (c) => (a(), n("td", {
              key: c.key,
              class: F({ "at-num": c.align === "right" })
            }, [
              z(e.$slots, `cell-${c.key}`, {
                row: t,
                value: t[c.key]
              }, () => [
                k(v(c.format ? c.format(t[c.key], t) : t[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Nr))), 128)),
          e.rows.length ? g("", !0) : (a(), n("tr", Ir, [
            u("td", {
              colspan: e.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(e.empty ?? "Aucune donnée"), 9, qr)
          ]))
        ])
      ])
    ]));
  }
}), jr = ["aria-label"], Rr = ["aria-selected", "disabled", "onClick"], Wr = {
  key: 1,
  class: "at-count"
}, Kr = /* @__PURE__ */ E({
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
    return (s, t) => (a(), n("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": s.label
    }, [
      (a(!0), n(y, null, V(s.items, (i) => (a(), n("button", {
        key: String(i.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": e.value === i.value,
        disabled: i.disabled,
        onClick: (c) => e.value = i.value
      }, [
        i.icon ? (a(), P(C, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : g("", !0),
        k(v(i.label) + " ", 1),
        i.count != null ? (a(), n("span", Wr, v(i.count), 1)) : g("", !0)
      ], 8, Rr))), 128))
    ], 8, jr));
  }
}), Gr = /* @__PURE__ */ E({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("span", {
      class: F(["at-tag", e.color !== "gray" && `at-tag--${e.color}`])
    }, [
      z(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ])
    ], 2));
  }
}), Jr = ["rows", "placeholder", "disabled", "aria-invalid"], Yr = /* @__PURE__ */ E({
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
    return (s, t) => j((a(), n("textarea", Q(s.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i),
      class: "at-input",
      rows: s.rows ?? 3,
      placeholder: s.placeholder,
      disabled: s.disabled,
      "aria-invalid": s.invalid || void 0
    }), null, 16, Jr)), [
      [ke, e.value]
    ]);
  }
}), Ot = "atelier:theme", Ut = "atelier:density", Nt = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, St = (d, e) => {
  try {
    localStorage.setItem(d, e);
  } catch {
  }
}, Vt = () => typeof document < "u" ? document.documentElement : null, Ce = U(Nt(Ot) || "system"), It = U(Nt(Ut) || "comfortable"), qt = U(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Tt = !1;
function Ht() {
  if (Tt || typeof window > "u") return;
  Tt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    qt.value = e.matches;
  }), ve(Ce, (e) => {
    const s = Vt();
    s && (e === "system" ? s.removeAttribute("data-theme") : s.dataset.theme = e, St(Ot, e));
  }, { immediate: !0 }), ve(It, (e) => {
    const s = Vt();
    s && (s.dataset.density = e, St(Ut, e));
  }, { immediate: !0 });
}
function ni() {
  Ht();
  const d = S(() => Ce.value === "system" ? qt.value ? "dark" : "light" : Ce.value), e = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return _a() && wa(() => {
  }), { mode: Ce, resolved: d, toggle: e };
}
function si() {
  return Ht(), { density: It };
}
const li = {
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
}, Xr = (d) => `var(--${d})`, oi = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(Xr), Zr = {
  AtAppShell: za,
  AtAvatar: Lt,
  AtBadge: Ba,
  AtBreadcrumbs: Oa,
  AtButton: N,
  AtCard: Ha,
  AtCheckbox: Ka,
  AtDataView: so,
  AtDrawer: po,
  AtDropdown: ho,
  AtEmpty: fo,
  AtField: $o,
  AtIcon: C,
  AtIconTile: Pt,
  AtInput: Do,
  AtKbd: pt,
  AtMenu: Ft,
  AtMenuItem: Eo,
  AtMenuLabel: Oo,
  AtMenuSeparator: qo,
  AtModal: Xo,
  AtNavGroup: er,
  AtNavItem: sr,
  AtPage: ir,
  AtPopover: de,
  AtProgress: Bt,
  AtPropertyEditor: ct,
  AtPropertyList: cr,
  AtPropertyValue: ce,
  AtSegment: mr,
  AtSelect: br,
  AtSidebar: Mr,
  AtStat: Br,
  AtSwitch: Pr,
  AtTable: Hr,
  AtTabs: Kr,
  AtTag: Gr,
  AtTextarea: Yr
}, ri = {
  install(d) {
    for (const [e, s] of Object.entries(Zr)) d.component(e, s);
  }
};
export {
  za as AtAppShell,
  Lt as AtAvatar,
  Ba as AtBadge,
  Oa as AtBreadcrumbs,
  N as AtButton,
  Ha as AtCard,
  Ka as AtCheckbox,
  so as AtDataView,
  po as AtDrawer,
  ho as AtDropdown,
  fo as AtEmpty,
  $o as AtField,
  C as AtIcon,
  Pt as AtIconTile,
  Do as AtInput,
  pt as AtKbd,
  Ft as AtMenu,
  Eo as AtMenuItem,
  Oo as AtMenuLabel,
  qo as AtMenuSeparator,
  Xo as AtModal,
  er as AtNavGroup,
  sr as AtNavItem,
  ir as AtPage,
  de as AtPopover,
  Bt as AtProgress,
  ct as AtPropertyEditor,
  cr as AtPropertyList,
  ce as AtPropertyValue,
  mr as AtSegment,
  br as AtSelect,
  Mr as AtSidebar,
  Br as AtStat,
  Pr as AtSwitch,
  Hr as AtTable,
  Kr as AtTabs,
  Gr as AtTag,
  Yr as AtTextarea,
  ri as Atelier,
  Oe as LAYOUTS,
  Ie as NONE,
  st as OPS,
  wt as OP_LABEL,
  Xa as addDays,
  an as applyView,
  oi as chartColors,
  tn as compareRows,
  Mt as createView,
  Xr as cssVar,
  ri as default,
  ln as defaultsFromFilters,
  ti as filter,
  qe as findOption,
  rt as formatDate,
  un as formatMonth,
  J as getValue,
  nn as groupRows,
  Dt as icons,
  te as isEmpty,
  en as matchRule,
  sn as monthGrid,
  $e as optionsOf,
  ei as registerIcons,
  $t as shiftMonth,
  ai as sort,
  Se as today,
  li as tokens,
  we as uid,
  si as useDensity,
  yo as useId,
  ni as useTheme
};
//# sourceMappingURL=atelier.js.map

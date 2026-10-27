import { defineComponent as P, computed as V, openBlock as e, createElementBlock as n, normalizeStyle as ee, normalizeClass as F, createBlock as E, createCommentVNode as h, renderSlot as Q, createTextVNode as k, toDisplayString as v, ref as H, watch as ve, createElementVNode as i, createVNode as f, Fragment as b, renderList as D, resolveDynamicComponent as Ht, withCtx as L, useModel as K, withDirectives as R, mergeProps as ae, vModelCheckbox as qe, mergeModels as W, onBeforeUnmount as ht, Teleport as gt, nextTick as De, unref as z, withKeys as Va, vModelDynamic as it, shallowRef as Sa, vModelText as _e, withModifiers as ue, isRef as ke, vModelSelect as we, Transition as Ft, normalizeProps as La, guardReactiveProps as Ta, getCurrentScope as za, onScopeDispose as Da, getCurrentInstance as Qa } from "vue";
const Ot = {
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
  logout: '<path d="M6.5 13.5h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3M10.5 11L13.5 8l-3-3M13.5 8H6"/>',
  key: '<circle cx="5.5" cy="10.5" r="3"/><path d="M7.6 8.4L13.5 2.5M11.5 4.5l1.5 1.5M9.8 6.2l1.2 1.2"/>'
};
function Si(d) {
  Object.assign(Ot, d);
}
const Ba = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], T = /* @__PURE__ */ P({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const a = d, s = V(() => Ot[a.name] ?? "");
    return (t, r) => (e(), n("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: t.size,
      height: t.size,
      style: ee(t.size !== 16 ? { width: t.size + "px", height: t.size + "px" } : void 0),
      role: t.label ? "img" : void 0,
      "aria-label": t.label,
      "aria-hidden": t.label ? void 0 : "true",
      innerHTML: s.value
    }, null, 12, Ba));
  }
}), Ea = ["href", "aria-label"], Ua = ["type", "disabled", "aria-busy", "aria-label"], Pa = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, I = /* @__PURE__ */ P({
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
    const a = d, s = V(() => [
      "at-btn",
      `at-btn--${a.variant}`,
      a.size !== "md" && `at-btn--${a.size}`,
      a.iconOnly && "at-btn--icon"
    ]);
    return (t, r) => t.href && !t.disabled ? (e(), n("a", {
      key: 0,
      href: t.href,
      class: F(s.value),
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.icon ? (e(), E(T, {
        key: 0,
        name: t.icon
      }, null, 8, ["name"])) : h("", !0),
      Q(t.$slots, "default", {}, () => [
        k(v(t.iconOnly ? "" : t.label), 1)
      ])
    ], 10, Ea)) : (e(), n("button", {
      key: 1,
      type: t.type,
      class: F(s.value),
      disabled: t.disabled || t.loading,
      "aria-busy": t.loading || void 0,
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.loading ? (e(), n("span", Pa)) : t.icon ? (e(), E(T, {
        key: 1,
        name: t.icon
      }, null, 8, ["name"])) : h("", !0),
      t.iconOnly ? h("", !0) : Q(t.$slots, "default", { key: 2 }, () => [
        k(v(t.label), 1)
      ])
    ], 10, Ua));
  }
}), Ha = { class: "at-shell__side" }, Fa = { class: "at-shell__main" }, Oa = { class: "at-topbar" }, Ia = /* @__PURE__ */ P({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: a }) {
    const s = d, t = H(!1), r = H();
    return ve(() => s.routeKey, () => {
      t.value = !1, r.value && (r.value.scrollTop = 0);
    }), a({ closeNav: () => t.value = !1 }), (c, m) => (e(), n("div", {
      class: F(["at-shell", t.value && "at-shell--open"])
    }, [
      i("div", Ha, [
        Q(c.$slots, "sidebar")
      ]),
      i("div", {
        class: "at-shell__scrim",
        onClick: m[0] || (m[0] = (p) => t.value = !1)
      }),
      i("div", Fa, [
        i("header", Oa, [
          f(I, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: m[1] || (m[1] = (p) => t.value = !t.value)
          }),
          Q(c.$slots, "topbar")
        ]),
        i("main", {
          ref_key: "page",
          ref: r,
          class: "at-shell__page"
        }, [
          Q(c.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), Na = ["title"], qa = ["src", "alt"], ft = /* @__PURE__ */ P({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" },
    tone: { default: "neutral" }
  },
  setup(d) {
    const a = d, s = V(() => a.name.split(/\s+/).filter(Boolean).map((t) => t[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (t, r) => (e(), n("span", {
      class: F(["at-avatar", t.size !== "sm" && `at-avatar--${t.size}`, t.tone === "accent" && "at-avatar--accent"]),
      title: t.name
    }, [
      t.src ? (e(), n("img", {
        key: 0,
        src: t.src,
        alt: t.name
      }, null, 8, qa)) : (e(), n(b, { key: 1 }, [
        k(v(s.value), 1)
      ], 64))
    ], 10, Na));
  }
}), ja = /* @__PURE__ */ P({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (a, s) => (e(), n("span", {
      class: F(["at-badge", a.tone !== "neutral" && `at-badge--${a.tone}`])
    }, [
      Q(a.$slots, "default", {}, () => [
        k(v(a.label), 1)
      ])
    ], 2));
  }
}), xa = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ra = {
  key: 0,
  "aria-hidden": "true"
}, Wa = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Ka = ["href", "onClick"], Ga = /* @__PURE__ */ P({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (a, s) => (e(), n("nav", xa, [
      (e(!0), n(b, null, D(a.items, (t, r) => (e(), n(b, { key: r }, [
        r > 0 ? (e(), n("span", Ra, "/")) : h("", !0),
        r === a.items.length - 1 ? (e(), n("span", Wa, v(t.label), 1)) : (e(), n("a", {
          key: 2,
          href: t.href ?? "#",
          onClick: (c) => t.onClick && (c.preventDefault(), t.onClick())
        }, v(t.label), 9, Ka))
      ], 64))), 128))
    ]));
  }
}), Ja = {
  key: 0,
  class: "at-card__head"
}, Za = {
  key: 0,
  class: "at-card__title"
}, Ya = {
  key: 1,
  class: "at-card__desc"
}, Xa = {
  key: 1,
  class: "at-card__foot"
}, en = /* @__PURE__ */ P({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (a, s) => (e(), E(Ht(a.href ? "a" : a.as || "section"), {
      href: a.href,
      class: F(["at-card", a.href && "at-card--link", a.color && ["at-card--striped", `at-tone-${a.color}`]])
    }, {
      default: L(() => [
        a.title || a.description || a.$slots.actions ? (e(), n("div", Ja, [
          i("div", null, [
            a.title ? (e(), n("h3", Za, v(a.title), 1)) : h("", !0),
            a.description ? (e(), n("p", Ya, v(a.description), 1)) : h("", !0)
          ]),
          Q(a.$slots, "actions")
        ])) : h("", !0),
        Q(a.$slots, "default"),
        a.$slots.footer ? (e(), n("div", Xa, [
          Q(a.$slots, "footer")
        ])) : h("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), tn = {
  key: 0,
  class: "at-toggle"
}, an = ["indeterminate", "disabled"], nn = ["indeterminate", "disabled"], It = /* @__PURE__ */ P({
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
    return (s, t) => s.label || s.$slots.default ? (e(), n("label", tn, [
      R(i("input", ae(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => a.value = r),
        type: "checkbox",
        class: "at-check",
        indeterminate: s.indeterminate,
        disabled: s.disabled
      }), null, 16, an), [
        [qe, a.value]
      ]),
      Q(s.$slots, "default", {}, () => [
        k(v(s.label), 1)
      ])
    ])) : R((e(), n("input", ae({ key: 1 }, s.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (r) => a.value = r),
      type: "checkbox",
      class: "at-check",
      indeterminate: s.indeterminate,
      disabled: s.disabled
    }), null, 16, nn)), [
      [qe, a.value]
    ]);
  }
}), de = /* @__PURE__ */ P({
  __name: "AtPopover",
  props: /* @__PURE__ */ W({
    anchor: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ W(["close"], ["update:open"]),
  setup(d, { expose: a, emit: s }) {
    const t = K(d, "open"), r = d, c = s, m = H(), p = H(), y = H({ top: -9999, left: -9999 }), M = V(() => {
      var O;
      return r.anchor ?? ((O = m.value) == null ? void 0 : O.firstElementChild) ?? m.value ?? null;
    });
    function w() {
      const O = M.value, j = p.value;
      if (!O || !j) return;
      const q = O.getBoundingClientRect(), ie = j.offsetWidth, Z = j.offsetHeight;
      if (r.placement === "right") {
        const he = Math.max(8, Math.min(q.right + r.offset, window.innerWidth - ie - 8)), Y = Math.max(8, Math.min(q.bottom - Z, window.innerHeight - Z - 8));
        (Math.abs(Y - y.value.top) > 0.5 || Math.abs(he - y.value.left) > 0.5) && (y.value = { top: Y, left: he });
        return;
      }
      let se = r.align === "end" ? q.right - ie : q.left;
      se = Math.max(8, Math.min(se, window.innerWidth - ie - 8));
      let le = q.bottom + r.offset;
      le + Z > window.innerHeight - 8 && (le = Math.max(8, q.top - Z - r.offset)), (Math.abs(le - y.value.top) > 0.5 || Math.abs(se - y.value.left) > 0.5) && (y.value = { top: le, left: se });
    }
    function S() {
      t.value && (t.value = !1, c("close"));
    }
    function N() {
      t.value ? S() : t.value = !0;
    }
    function x(O) {
      var q, ie, Z;
      const j = O.target;
      (q = p.value) != null && q.contains(j) || (ie = M.value) != null && ie.contains(j) || (Z = j.closest) != null && Z.call(j, ".at-pop") || S();
    }
    function C(O) {
      var j, q;
      O.key === "Escape" && (O.stopPropagation(), S(), (q = (j = M.value) == null ? void 0 : j.focus) == null || q.call(j));
    }
    let _ = null;
    function A() {
      setTimeout(() => document.addEventListener("mousedown", x), 0), document.addEventListener("keydown", C, !0), window.addEventListener("resize", w), window.addEventListener("scroll", w, !0), De(() => {
        w(), p.value && (_ = new ResizeObserver(w), _.observe(p.value));
      });
    }
    function B() {
      document.removeEventListener("mousedown", x), document.removeEventListener("keydown", C, !0), window.removeEventListener("resize", w), window.removeEventListener("scroll", w, !0), _ == null || _.disconnect(), _ = null, y.value = { top: -9999, left: -9999 };
    }
    return ve(t, (O) => O ? A() : B(), { immediate: !0 }), ht(B), a({ place: w, close: S, toggle: N }), (O, j) => (e(), n(b, null, [
      O.$slots.trigger ? (e(), n("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: m,
        style: { display: "contents" }
      }, [
        Q(O.$slots, "trigger", {
          toggle: N,
          open: t.value
        })
      ], 512)) : h("", !0),
      (e(), E(gt, { to: "body" }, [
        t.value ? (e(), n("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: ee({ top: y.value.top + "px", left: y.value.left + "px" })
        }, [
          Q(O.$slots, "default", { close: S })
        ], 4)) : h("", !0)
      ]))
    ], 64));
  }
}), sn = ["aria-valuenow", "aria-label"], ln = { class: "at-progress__track" }, on = {
  key: 0,
  class: "at-progress__label"
}, Nt = /* @__PURE__ */ P({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const a = d, s = V(() => Math.max(0, Math.min(100, Math.round(a.value / a.max * 100))));
    return (t, r) => (e(), n("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": s.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": t.label
    }, [
      i("span", ln, [
        i("span", {
          class: "at-progress__bar",
          style: ee({ width: s.value + "%" })
        }, null, 4)
      ]),
      t.showLabel ? (e(), n("span", on, v(s.value) + " %", 1)) : h("", !0)
    ], 8, sn));
  }
}), je = "__none", ut = (d) => String(d).padStart(2, "0"), yt = (d) => `${d.getFullYear()}-${ut(d.getMonth() + 1)}-${ut(d.getDate())}`, Le = () => yt(/* @__PURE__ */ new Date()), rn = (d, a) => {
  const s = /* @__PURE__ */ new Date(d + "T00:00");
  return s.setDate(s.getDate() + a), yt(s);
}, Me = () => Math.random().toString(36).slice(2, 10), ne = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, X = (d, a) => a.compute ? a.compute(d) : d[a.key], Ae = (d, a) => typeof d.options == "function" ? d.options(a) : d.options ?? [], xe = (d, a, s) => Ae(d, a).find((t) => t.value === s), Te = (d) => !d.compute && !d.readonly && d.type !== "progress", un = ["status", "select", "relation", "person"], ze = (d) => un.includes(d.type), dn = {
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
}, Ie = (d) => d.icon ?? dn[d.type] ?? "text", Oe = [
  { value: "table", label: "Tableau", icon: "table" },
  { value: "board", label: "Board", icon: "board" },
  { value: "list", label: "Liste", icon: "list" },
  { value: "calendar", label: "Calendrier", icon: "calendar" }
], ot = {
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
}, Tt = {
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
}, qt = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function cn(d, a, s, t = Le()) {
  const r = X(d, a);
  if (!qt.includes(s.op) && ne(s.value)) return !0;
  const c = (m) => String(m ?? "").toLowerCase();
  switch (s.op) {
    case "empty":
      return ne(r);
    case "notempty":
      return !ne(r);
    case "contains":
      return a.type === "multi" ? (r ?? []).includes(s.value) : c(r).includes(c(s.value));
    case "notcontains":
      return a.type === "multi" ? !(r ?? []).includes(s.value) : !c(r).includes(c(s.value));
    case "is":
      return r === s.value;
    case "isnot":
      return r !== s.value;
    case "before":
      return !!r && r < s.value;
    case "after":
      return !!r && r > s.value;
    case "past":
      return !!r && r < t;
    case "week":
      return !!r && r >= t && r <= rn(t, 7);
    case "eq":
      return Number(r) === Number(s.value);
    case "gt":
      return Number(r) > Number(s.value);
    case "lt":
      return Number(r) < Number(s.value);
    case "checked":
      return !!r;
    case "unchecked":
      return !r;
  }
  return !0;
}
function pn(d, a, s) {
  const t = X(a, d), r = X(s, d), c = ne(t), m = ne(r);
  if (c || m) return c === m ? 0 : c ? 1 : -1;
  if (ze(d)) {
    const p = Ae(d).map((y) => y.value);
    return p.indexOf(t) - p.indexOf(r);
  }
  return d.type === "number" || d.type === "progress" ? t - r : d.type === "checkbox" ? Number(r) - Number(t) : d.type === "multi" ? t.length - r.length : String(t).localeCompare(String(r), "fr");
}
function vn(d, a, s, t = "") {
  const r = Object.fromEntries(a.map((M) => [M.key, M])), c = a.find((M) => M.type === "title"), m = t.trim().toLowerCase(), p = d.filter((M) => (!m || !c || String(M[c.key] ?? "").toLowerCase().includes(m)) && s.filters.every((w) => !r[w.prop] || cn(M, r[w.prop], w))), y = s.sorts.filter((M) => r[M.prop]);
  return y.length ? p.sort((M, w) => {
    for (const S of y) {
      const N = r[S.prop], x = ne(X(M, N)), C = ne(X(w, N));
      if (x !== C) return x ? 1 : -1;
      if (x) continue;
      const _ = pn(N, M, w);
      if (_) return S.dir === "desc" ? -_ : _;
    }
    return 0;
  }) : p;
}
function mn(d, a, s = !1) {
  if (!a) return [{ key: je, option: null, rows: d }];
  const t = Ae(a).map((m) => ({ key: m.value, option: m, rows: [] })), r = { key: je, option: null, rows: [] }, c = Object.fromEntries(t.map((m) => [m.key, m]));
  for (const m of d) (c[X(m, a)] ?? r).rows.push(m);
  return (r.rows.length || s) && t.push(r), s ? t : t.filter((m) => m.rows.length);
}
function hn(d) {
  const [a, s] = d.split("-").map(Number), r = (new Date(a, s - 1, 1).getDay() + 6) % 7, c = [];
  for (let m = 0; m < 42; m++) {
    const p = new Date(a, s - 1, 1 - r + m);
    c.push({ iso: yt(p), day: p.getDate(), outside: p.getMonth() !== s - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const zt = (d, a) => {
  const [s, t] = d.split("-").map(Number), r = new Date(s, t - 1 + a, 1);
  return `${r.getFullYear()}-${ut(r.getMonth() + 1)}`;
};
function Dt(d, a = "table", s = {}) {
  return { id: Me(), name: d, layout: a, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...s };
}
const Li = (d, a, s = "") => ({ id: Me(), prop: d, op: a, value: s }), Ti = (d, a = "asc") => ({ id: Me(), prop: d, dir: a });
function gn(d, a) {
  const s = {};
  for (const t of d.filters) {
    const r = a.find((c) => c.key === t.prop);
    !r || !Te(r) || ne(t.value) || (t.op === "is" && (s[t.prop] = t.value), t.op === "contains" && r.type === "multi" && (s[t.prop] = [t.value]));
  }
  return s;
}
const fn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), yn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), jt = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function dt(d) {
  if (!d) return "";
  const a = /* @__PURE__ */ new Date(d + "T00:00");
  return (a.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? fn : yn).format(a);
}
const bn = (d) => {
  const [a, s] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(a, s - 1, 1));
}, kn = {
  key: 0,
  class: "at-pv-title"
}, _n = ["checked"], wn = {
  key: 2,
  class: "at-pv-empty"
}, $n = {
  key: 5,
  class: "at-pv-multi"
}, Mn = {
  key: 6,
  class: "at-pv-person"
}, An = { class: "at-ellipsis" }, Cn = {
  key: 7,
  class: "at-pv-rel"
}, Vn = { class: "at-ellipsis" }, Sn = {
  key: 9,
  class: "at-num"
}, Ln = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, ce = /* @__PURE__ */ P({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const a = d, s = V(() => X(a.row, a.prop)), t = V(() => a.prop.type), r = V(() => ze(a.prop) ? xe(a.prop, a.row, s.value) : void 0), c = V(() => t.value === "multi" ? (s.value ?? []).map((y) => xe(a.prop, a.row, y)).filter(Boolean) : []), m = V(() => {
      var y, M;
      return t.value === "date" && !!((M = (y = a.prop).overdue) != null && M.call(y, a.row));
    }), p = V(() => {
      var y;
      return ((y = r.value) == null ? void 0 : y.label) ?? String(s.value ?? "");
    });
    return (y, M) => {
      var w, S, N;
      return t.value === "title" ? (e(), n("span", kn, v(s.value || "Sans titre"), 1)) : t.value === "checkbox" ? (e(), n("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!s.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, _n)) : z(ne)(s.value) ? (e(), n("span", wn, "—")) : t.value === "status" ? (e(), n("span", {
        key: 3,
        class: F(["at-badge", ((w = r.value) == null ? void 0 : w.tone) && r.value.tone !== "neutral" && `at-badge--${r.value.tone}`])
      }, v(p.value), 3)) : t.value === "select" ? (e(), n("span", {
        key: 4,
        class: F(["at-tag", ((S = r.value) == null ? void 0 : S.color) && r.value.color !== "gray" && `at-tag--${r.value.color}`])
      }, v(p.value), 3)) : t.value === "multi" ? (e(), n("span", $n, [
        (e(!0), n(b, null, D(c.value, (x) => (e(), n("span", {
          key: x.value,
          class: F(["at-tag", x.color && x.color !== "gray" && `at-tag--${x.color}`])
        }, v(x.label), 3))), 128))
      ])) : t.value === "person" ? (e(), n("span", Mn, [
        f(ft, { name: p.value }, null, 8, ["name"]),
        i("span", An, v(p.value), 1)
      ])) : t.value === "relation" ? (e(), n("span", Cn, [
        (N = r.value) != null && N.mark ? (e(), n("span", {
          key: 0,
          class: "at-pv-mark",
          style: ee({ background: r.value.mark })
        }, null, 4)) : (e(), E(T, {
          key: 1,
          name: y.prop.icon ?? "link"
        }, null, 8, ["name"])),
        i("span", Vn, v(r.value ? r.value.label : "Introuvable"), 1)
      ])) : t.value === "date" ? (e(), n("span", {
        key: 8,
        class: F(["at-pv-date", m.value && "at-pv-over"])
      }, v(z(dt)(s.value)), 3)) : t.value === "number" ? (e(), n("span", Sn, v(z(jt).format(Number(s.value))) + v(y.prop.suffix ?? ""), 1)) : t.value === "progress" ? (e(), E(Nt, {
        key: 10,
        value: Number(s.value)
      }, null, 8, ["value"])) : (e(), n("span", Ln, v(s.value), 1));
    };
  }
}), Tn = ["aria-label"], zn = { class: "at-menu-label" }, Dn = ["aria-selected", "onClick"], Qn = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, Bn = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), En = ["aria-label"], Un = { class: "at-menu-label" }, Pn = ["aria-checked", "onClick"], Hn = ["checked"], Fn = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, On = { class: "at-menu-title" }, In = ["value", "aria-label"], Nn = { class: "at-menu-actions" }, qn = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, jn = { class: "at-menu-title" }, xn = ["type", "aria-label"], bt = /* @__PURE__ */ P({
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
    const s = K(d, "open"), t = d, r = a, c = H(""), m = H(), p = V(() => {
      const _ = t.prop;
      return _ ? ze(_) ? "options" : _.type === "multi" ? "multi" : _.type === "date" ? "date" : "input" : null;
    }), y = V(() => t.prop ? Ae(t.prop, t.row) : []), M = V(() => t.prop && t.row ? t.row[t.prop.key] : null);
    ve(s, (_) => {
      _ && (c.value = M.value ?? "", De(() => {
        var B, O;
        const A = (B = m.value) == null ? void 0 : B.querySelector("input, button");
        A == null || A.focus(), (O = A == null ? void 0 : A.select) == null || O.call(A);
      }));
    });
    const w = (_) => ({ ...t.row, [t.prop.key]: _ });
    function S(_, A = !0) {
      r("update", _), A && (s.value = !1);
    }
    function N(_) {
      const A = [...M.value ?? []], B = A.indexOf(_);
      B < 0 ? A.push(_) : A.splice(B, 1), S(A, !1);
    }
    function x() {
      var A;
      let _ = c.value;
      ((A = t.prop) == null ? void 0 : A.type) === "number" && (_ = _ === "" || _ == null ? null : Number(_)), _ !== M.value && r("update", _), s.value = !1;
    }
    function C() {
      var _;
      if (p.value === "input") {
        let A = c.value;
        ((_ = t.prop) == null ? void 0 : _.type) === "number" && (A = A === "" ? null : Number(A)), A !== M.value && r("update", A);
      }
    }
    return (_, A) => (e(), E(de, {
      open: s.value,
      "onUpdate:open": A[5] || (A[5] = (B) => s.value = B),
      anchor: _.anchor,
      onClose: C
    }, {
      default: L(() => [
        _.prop ? (e(), n("div", {
          key: 0,
          ref_key: "box",
          ref: m
        }, [
          p.value === "options" ? (e(), n("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": _.prop.name
          }, [
            i("div", zn, v(_.prop.name), 1),
            (e(!0), n(b, null, D(y.value, (B) => (e(), n("button", {
              key: B.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": B.value === M.value,
              onClick: (O) => S(B.value)
            }, [
              f(ce, {
                prop: _.prop,
                row: w(B.value)
              }, null, 8, ["prop", "row"]),
              B.value === M.value ? (e(), E(T, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : h("", !0)
            ], 8, Dn))), 128)),
            y.value.length ? h("", !0) : (e(), n("div", Qn, "Aucune option disponible")),
            _.prop.required ? h("", !0) : (e(), n(b, { key: 1 }, [
              Bn,
              i("button", {
                type: "button",
                class: "at-menu-item",
                onClick: A[0] || (A[0] = (B) => S(null))
              }, [
                f(T, { name: "x" }),
                k("Effacer")
              ])
            ], 64))
          ], 8, Tn)) : p.value === "multi" ? (e(), n("div", {
            key: 1,
            class: "at-menu",
            "aria-label": _.prop.name
          }, [
            i("div", Un, v(_.prop.name), 1),
            (e(!0), n(b, null, D(y.value, (B) => (e(), n("button", {
              key: B.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(B.value),
              onClick: (O) => N(B.value)
            }, [
              i("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(B.value)
              }, null, 8, Hn),
              i("span", {
                class: F(["at-tag", B.color && B.color !== "gray" && `at-tag--${B.color}`])
              }, v(B.label), 3)
            ], 8, Pn))), 128))
          ], 8, En)) : p.value === "date" ? (e(), n("div", Fn, [
            i("span", On, v(_.prop.name), 1),
            i("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": _.prop.name,
              onChange: A[1] || (A[1] = (B) => S(B.target.value || null, !1))
            }, null, 40, In),
            i("div", Nn, [
              f(I, {
                size: "sm",
                onClick: A[2] || (A[2] = (B) => S(z(Le)()))
              }, {
                default: L(() => [
                  k("Aujourd’hui")
                ]),
                _: 1
              }),
              f(I, {
                size: "sm",
                variant: "ghost",
                onClick: A[3] || (A[3] = (B) => S(null))
              }, {
                default: L(() => [
                  k("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (e(), n("div", qn, [
            i("span", jn, v(_.prop.name), 1),
            R(i("input", {
              "onUpdate:modelValue": A[4] || (A[4] = (B) => c.value = B),
              class: "at-input",
              type: _.prop.type === "number" ? "number" : "text",
              "aria-label": _.prop.name,
              onKeydown: Va(x, ["enter"])
            }, null, 40, xn), [
              [it, c.value]
            ])
          ]))
        ], 512)) : h("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Rn = { class: "at-dv" }, Wn = { class: "at-dv-viewsbar" }, Kn = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Gn = ["aria-selected", "title", "onClick"], Jn = { class: "at-toolbar at-dv-toolbar" }, Zn = {
  key: 1,
  class: "at-dv-n"
}, Yn = {
  key: 1,
  class: "at-dv-n"
}, Xn = { class: "at-input-wrap at-dv-search" }, es = {
  key: 0,
  class: "at-dv-chips"
}, ts = { class: "at-table-wrap" }, as = /* @__PURE__ */ i("col", { style: { width: "36px" } }, null, -1), ns = /* @__PURE__ */ i("col", { style: { width: "44px" } }, null, -1), ss = { class: "at-cell-check" }, ls = ["checked", "indeterminate"], os = { class: "at-th" }, rs = ["onMousedown"], is = { class: "at-cell-check" }, us = {
  key: 0,
  class: "at-dv-grouprow"
}, ds = ["colspan"], cs = ["aria-expanded", "onClick"], ps = {
  key: 1,
  class: "at-pv-empty"
}, vs = { class: "at-count" }, ms = ["aria-selected"], hs = { class: "at-cell-check" }, gs = ["checked", "onChange"], fs = ["onClick"], ys = ["onClick"], bs = /* @__PURE__ */ i("td", null, null, -1), ks = { class: "at-dv-newrow" }, _s = /* @__PURE__ */ i("td", null, null, -1), ws = ["colspan"], $s = ["onClick"], Ms = /* @__PURE__ */ i("td", null, null, -1), As = /* @__PURE__ */ i("td", null, null, -1), Cs = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, Vs = { class: "at-num" }, Ss = {
  key: 2,
  class: "at-dv-board"
}, Ls = {
  key: 0,
  class: "at-empty"
}, Ts = ["onDragover", "onDrop"], zs = { class: "at-dv-colhead" }, Ds = {
  key: 1,
  class: "at-pv-empty"
}, Qs = { class: "at-count" }, Bs = /* @__PURE__ */ i("span", { class: "at-spacer" }, null, -1), Es = { class: "at-dv-cards" }, Us = ["onDragstart", "onClick"], Ps = { class: "at-dv-cardtitle" }, Hs = {
  key: 0,
  class: "at-dv-cardprops"
}, Fs = ["onClick"], Os = { key: 3 }, Is = {
  key: 0,
  class: "at-empty"
}, Ns = {
  key: 1,
  class: "at-dv-list"
}, qs = {
  key: 0,
  class: "at-dv-lgroup"
}, js = ["aria-expanded", "onClick"], xs = {
  key: 1,
  class: "at-pv-empty"
}, Rs = { class: "at-count" }, Ws = ["onClick"], Ks = { class: "at-pv-title" }, Gs = { class: "at-dv-liprops" }, Js = { class: "at-dv-newline" }, Zs = { class: "at-dv-calhead" }, Ys = { class: "at-dv-calmonth" }, Xs = { class: "at-dv-calnote" }, el = { class: "at-dv-calwrap" }, tl = { class: "at-dv-calgrid" }, al = { class: "at-dv-calgrid" }, nl = ["onDragover", "onDrop"], sl = { class: "at-dv-daynum" }, ll = ["aria-label", "onClick"], ol = ["onDragstart", "onClick"], rl = {
  class: "at-menu",
  role: "menu"
}, il = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Nouvelle vue", -1), ul = ["onClick"], dl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, cl = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), pl = { class: "at-rules" }, vl = {
  key: 0,
  class: "at-menu-empty"
}, ml = { class: "at-select" }, hl = ["onUpdate:modelValue", "onChange"], gl = ["value"], fl = { class: "at-select" }, yl = ["onUpdate:modelValue"], bl = ["value"], kl = {
  key: 0,
  class: "at-select"
}, _l = ["onUpdate:modelValue"], wl = /* @__PURE__ */ i("option", { value: "" }, "Choisir…", -1), $l = ["value"], Ml = ["onUpdate:modelValue"], Al = ["onUpdate:modelValue"], Cl = ["onUpdate:modelValue"], Vl = { key: 1 }, Sl = { class: "at-menu-actions" }, Ll = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, Tl = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), zl = { class: "at-rules" }, Dl = {
  key: 0,
  class: "at-menu-empty"
}, Ql = { class: "at-select" }, Bl = ["onUpdate:modelValue"], El = ["value"], Ul = { class: "at-select" }, Pl = ["onUpdate:modelValue"], Hl = /* @__PURE__ */ i("option", { value: "asc" }, "Croissant", -1), Fl = /* @__PURE__ */ i("option", { value: "desc" }, "Décroissant", -1), Ol = [
  Hl,
  Fl
], Il = { class: "at-menu-actions" }, Nl = {
  class: "at-menu",
  role: "menu"
}, ql = { class: "at-menu-label" }, jl = ["onClick"], xl = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Rl = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Wl = ["draggable", "onDragstart", "onDragover", "onDrop"], Kl = { class: "at-pi-name" }, Gl = ["aria-label", "checked", "disabled", "onChange"], Jl = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), Zl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Yl = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Xl = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), eo = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, to = ["aria-pressed", "onClick"], ao = {
  key: 0,
  class: "at-field-row"
}, no = { class: "at-select" }, so = ["value"], lo = {
  key: 0,
  value: ""
}, oo = ["value"], ro = {
  key: 1,
  class: "at-field-row"
}, io = /* @__PURE__ */ i("span", null, "Date utilisée", -1), uo = { class: "at-select" }, co = ["value"], po = ["value"], vo = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), mo = ["disabled"], ho = /* @__PURE__ */ P({
  __name: "AtDataView",
  props: /* @__PURE__ */ W({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean, default: !0 },
    lockViews: { type: Boolean }
  }, {
    views: { default: () => [Dt("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ W(["update", "create", "open", "delete"], ["update:views", "update:activeView"]),
  setup(d, { emit: a }) {
    const s = d, t = K(d, "views"), r = K(d, "activeView"), c = a, m = (o) => o[s.rowKey], p = V(() => t.value.find((o) => o.id === r.value) ?? t.value[0]), y = V(() => Object.fromEntries(s.schema.map((o) => [o.key, o]))), M = V(() => s.schema.find((o) => o.type === "title")), w = V(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? s.rowKey;
    }), S = V(() => {
      const o = (p.value.order ?? []).filter(($) => y.value[$]);
      for (const $ of s.schema) o.includes($.key) || o.push($.key);
      const u = o.indexOf(w.value);
      return u > 0 && (o.splice(u, 1), o.unshift(w.value)), o.map(($) => y.value[$]);
    }), N = V(() => S.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), x = V(() => N.value.filter((o) => o.type !== "title")), C = V(() => s.schema.filter(ze)), _ = V(() => s.schema.filter((o) => o.type === "date")), A = V(() => s.schema.find((o) => o.type === "status")), B = H(""), O = V(() => vn(s.rows, s.schema, p.value, B.value)), j = V(() => {
      var u, $;
      const o = p.value.groupBy && y.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((u = A.value) == null ? void 0 : u.key) ?? (($ = C.value[0]) == null ? void 0 : $.key) ?? null : o;
    }), q = V(() => j.value && p.value.layout !== "calendar" ? y.value[j.value] : null), ie = V(() => mn(O.value, q.value, p.value.layout === "board")), Z = (o) => ({ [j.value]: o === je ? null : o }), se = V(() => p.value.filters.filter((o) => y.value[o.prop])), le = V(() => p.value.sorts.filter((o) => y.value[o.prop])), he = H({}), Y = H(null), pe = H(null);
    function oe(o, u) {
      if (Y.value === o && pe.value === u) {
        Y.value = null;
        return;
      }
      pe.value = u ?? null, Y.value = o;
    }
    const ge = (o) => V({ get: () => Y.value === o, set: (u) => {
      !u && Y.value === o && (Y.value = null);
    } }), We = ge("add"), Ke = ge("filter"), Ge = ge("sort"), Je = ge("group"), Ze = ge("props"), Ye = ge("settings");
    function ta(o) {
      o.id === p.value.id ? oe("settings", he.value[o.id]) : r.value = o.id;
    }
    const _t = () => {
      var o, u;
      return ((o = A.value) == null ? void 0 : o.key) ?? ((u = C.value[0]) == null ? void 0 : u.key) ?? null;
    };
    function aa(o) {
      if (s.lockViews) return;
      const u = Dt(Oe.find(($) => $.value === o).label, o, { groupBy: o === "board" ? _t() : null });
      t.value.push(u), r.value = u.id, Y.value = null, De(() => oe("settings", he.value[u.id]));
    }
    function na(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = _t());
    }
    function sa() {
      if (s.lockViews) return;
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = Me(), o.name = p.value.name + " (copie)", t.value.push(o), r.value = o.id, Y.value = null;
    }
    function la() {
      if (s.lockViews || t.value.length < 2) return;
      const o = t.value.indexOf(p.value);
      t.value.splice(o, 1), r.value = t.value[Math.max(0, o - 1)].id, Y.value = null;
    }
    ve(() => p.value.id, () => {
      G.value = [], Y.value = null;
    });
    function oa() {
      const o = s.schema.find((u) => u.type !== "title" && u.type !== "progress") ?? s.schema[0];
      p.value.filters.push({ id: Me(), prop: o.key, op: ot[o.type][0], value: "" });
    }
    function ra(o) {
      o.op = ot[y.value[o.prop].type][0], o.value = "";
    }
    const ia = (o) => {
      var u;
      return ot[(u = y.value[o.prop]) == null ? void 0 : u.type] ?? [];
    }, wt = (o) => !qt.includes(o.op);
    function Qe(o) {
      const u = y.value[o.prop];
      return u ? ze(u) || u.type === "multi" ? "options" : u.type === "date" ? "date" : u.type === "number" || u.type === "progress" ? "number" : "text" : "text";
    }
    function Xe(o) {
      var J;
      const u = y.value[o.prop];
      let $ = "";
      if (wt(o)) {
        const l = Qe(o);
        $ = l === "options" ? ((J = xe(u, void 0, o.value)) == null ? void 0 : J.label) ?? "…" : l === "date" ? dt(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: u.name, op: Tt[o.op], val: $ };
    }
    function ua() {
      const o = p.value.sorts.map(($) => $.prop), u = s.schema.find(($) => !o.includes($.key)) ?? s.schema[0];
      p.value.sorts.push({ id: Me(), prop: u.key, dir: "asc" });
    }
    const $t = (o, u) => {
      const $ = o.indexOf(u);
      $ >= 0 && o.splice($, 1);
    };
    function da() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function et(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (Y.value = null);
    }
    function ca(o) {
      const u = p.value.hidden, $ = u.indexOf(o.key);
      $ < 0 ? u.push(o.key) : u.splice($, 1);
    }
    function Mt(o) {
      p.value.hidden = o ? [] : s.schema.filter((u) => u.type !== "title").map((u) => u.key);
    }
    const Ce = H(null), Be = H(null);
    function pa(o) {
      if (Ce.value == null) return;
      const u = S.value.map((J) => J.key), [$] = u.splice(Ce.value, 1);
      u.splice(o, 0, $), p.value.order = u, Ce.value = null, Be.value = null;
    }
    const tt = (o) => p.value.widths[o.key] ?? o.width ?? 160, va = V(() => 36 + N.value.reduce((o, u) => o + tt(u), 0) + 44), at = H(null);
    function ma(o, u) {
      const $ = o.clientX, J = tt(u);
      at.value = u.key;
      const l = (U) => {
        p.value.widths[u.key] = Math.max(70, Math.round(J + U.clientX - $));
      }, g = () => {
        at.value = null, window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", g);
      };
      window.addEventListener("mousemove", l), window.addEventListener("mouseup", g);
    }
    const G = H([]), nt = V(() => O.value.length > 0 && O.value.every((o) => G.value.includes(m(o)))), ha = V(() => G.value.length > 0 && !nt.value);
    function ga(o) {
      const u = G.value.indexOf(m(o));
      u < 0 ? G.value.push(m(o)) : G.value.splice(u, 1);
    }
    function fa() {
      G.value = nt.value ? [] : O.value.map(m);
    }
    function ya() {
      c("delete", s.rows.filter((o) => G.value.includes(m(o)))), G.value = [];
    }
    const fe = (o) => p.value.collapsed.includes(o);
    function At(o) {
      const u = p.value.collapsed, $ = u.indexOf(o);
      $ < 0 ? u.push(o) : u.splice($, 1);
    }
    function st(o) {
      const u = O.value;
      if (o.type === "title") return { label: "Total", value: String(u.length) };
      if (o.type === "number") return { label: "Somme", value: jt.format(u.reduce(($, J) => $ + (Number(X(J, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && u.length) return { label: "Moyenne", value: Math.round(u.reduce(($, J) => $ + Number(X(J, o)), 0) / u.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const $ = u.filter((J) => o.overdue(J)).length;
        return $ ? { label: "En retard", value: String($) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(u.filter(($) => X($, o)).length) } : null;
    }
    const ye = Sa(null), Ct = H(null), lt = H(!1);
    function ba(o, u, $) {
      if ($.type === "title") {
        c("open", u);
        return;
      }
      if (Te($)) {
        if ($.type === "checkbox") {
          c("update", u, $.key, !u[$.key]);
          return;
        }
        Ct.value = o.currentTarget, ye.value = { row: u, prop: $ }, lt.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...gn(p.value, s.schema), ...o });
    }
    const Ee = H(null), be = H(null);
    function Vt(o, u) {
      Ee.value = m(u), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(m(u))));
    }
    function Ue() {
      Ee.value = null, be.value = null;
    }
    const St = () => s.rows.find((o) => m(o) === Ee.value);
    function ka(o) {
      const u = St();
      u && j.value && c("update", u, j.value, o === je ? null : o), Ue();
    }
    function _a(o) {
      const u = St();
      u && re.value && c("update", u, re.value, o), Ue();
    }
    const re = V(() => {
      var o;
      return p.value.dateProp && y.value[p.value.dateProp] ? p.value.dateProp : ((o = _.value[0]) == null ? void 0 : o.key) ?? null;
    }), Pe = V(() => p.value.month ?? Le().slice(0, 7)), wa = V(() => hn(Pe.value).map((o) => ({ ...o, today: o.iso === Le(), rows: re.value ? O.value.filter((u) => u[re.value] === o.iso) : [] }))), Lt = V(() => re.value ? O.value.filter((o) => !o[re.value]).length : 0), $a = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, Ma = (o) => {
      const u = A.value, $ = u ? xe(u, o, o[u.key]) : void 0;
      return $a[($ == null ? void 0 : $.tone) ?? "neutral"];
    }, Aa = (o) => {
      const u = A.value;
      if (!u) return !1;
      const $ = Ae(u, o);
      return $.length > 0 && o[u.key] === $[$.length - 1].value;
    }, He = (o, u = 0) => s.iconTools ? { iconOnly: !u, label: o, title: o, "aria-label": u ? `${o} (${u})` : o } : {}, Ca = (o) => {
      var u;
      return ((u = Oe.find(($) => $.value === o)) == null ? void 0 : u.icon) ?? "table";
    }, Fe = V(() => q.value ? `Sans ${q.value.name.toLowerCase()}` : "");
    return (o, u) => {
      var $, J;
      return e(), n("section", Rn, [
        i("div", Wn, [
          o.hideViews ? h("", !0) : (e(), n(b, { key: 0 }, [
            i("div", Kn, [
              (e(!0), n(b, null, D(t.value, (l) => (e(), n("button", {
                key: l.id,
                ref_for: !0,
                ref: (g) => {
                  g && (he.value[l.id] = g);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": l.id === p.value.id,
                title: l.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (g) => ta(l)
              }, [
                f(T, {
                  name: Ca(l.layout)
                }, null, 8, ["name"]),
                k(v(l.name), 1)
              ], 8, Gn))), 128))
            ]),
            o.lockViews ? h("", !0) : (e(), E(I, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: u[0] || (u[0] = (l) => oe("add", l.currentTarget))
            }))
          ], 64)),
          i("div", Jn, [
            f(I, ae(He("Filtrer", se.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": se.value.length },
              onClick: u[1] || (u[1] = (l) => oe("filter", l.currentTarget))
            }), {
              default: L(() => [
                o.iconTools ? h("", !0) : (e(), n(b, { key: 0 }, [
                  k("Filtrer")
                ], 64)),
                se.value.length ? (e(), n("span", Zn, v(se.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            f(I, ae(He("Trier", le.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": le.value.length },
              onClick: u[2] || (u[2] = (l) => oe("sort", l.currentTarget))
            }), {
              default: L(() => [
                o.iconTools ? h("", !0) : (e(), n(b, { key: 0 }, [
                  k("Trier")
                ], 64)),
                le.value.length ? (e(), n("span", Yn, v(le.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            p.value.layout !== "calendar" ? (e(), E(I, ae({ key: 0 }, He("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": p.value.groupBy },
              onClick: u[3] || (u[3] = (l) => oe("group", l.currentTarget))
            }), {
              default: L(() => [
                k("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : h("", !0),
            f(I, ae(He("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: u[4] || (u[4] = (l) => oe("props", l.currentTarget))
            }), {
              default: L(() => [
                k("Propriétés")
              ]),
              _: 1
            }, 16),
            i("div", Xn, [
              f(T, { name: "search" }),
              R(i("input", {
                "onUpdate:modelValue": u[5] || (u[5] = (l) => B.value = l),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [_e, B.value]
              ])
            ]),
            o.hideViews ? h("", !0) : (e(), E(I, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: u[6] || (u[6] = (l) => oe("settings", l.currentTarget))
            })),
            f(I, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: u[7] || (u[7] = (l) => me())
            }, {
              default: L(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        se.value.length || le.value.length ? (e(), n("div", es, [
          (e(!0), n(b, null, D(se.value, (l) => (e(), n("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: u[8] || (u[8] = (g) => oe("filter", g.currentTarget))
          }, [
            f(T, { name: "filter" }),
            k(v(Xe(l).name) + " " + v(Xe(l).op) + " ", 1),
            i("b", null, v(Xe(l).val), 1)
          ]))), 128)),
          (e(!0), n(b, null, D(le.value, (l) => (e(), n("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: u[9] || (u[9] = (g) => oe("sort", g.currentTarget))
          }, [
            f(T, { name: "sort" }),
            k(v(y.value[l.prop].name) + " ", 1),
            i("b", null, v(l.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          f(I, {
            variant: "ghost",
            size: "sm",
            onClick: da
          }, {
            default: L(() => [
              k("Tout effacer")
            ]),
            _: 1
          })
        ])) : h("", !0),
        p.value.layout === "table" ? (e(), n(b, { key: 1 }, [
          i("div", ts, [
            i("table", {
              class: "at-table at-dv-table",
              style: ee({ width: va.value + "px", minWidth: "100%" })
            }, [
              i("colgroup", null, [
                as,
                (e(!0), n(b, null, D(N.value, (l) => (e(), n("col", {
                  key: l.key,
                  style: ee({ width: tt(l) + "px" })
                }, null, 4))), 128)),
                ns
              ]),
              i("thead", null, [
                i("tr", null, [
                  i("th", ss, [
                    i("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: nt.value,
                      indeterminate: ha.value,
                      onChange: fa
                    }, null, 40, ls)
                  ]),
                  (e(!0), n(b, null, D(N.value, (l) => (e(), n("th", {
                    key: l.key,
                    class: F({ "at-num": l.type === "number" })
                  }, [
                    i("span", os, [
                      f(T, {
                        name: z(Ie)(l)
                      }, null, 8, ["name"]),
                      k(v(l.name), 1)
                    ]),
                    i("span", {
                      class: F(["at-dv-resize", at.value === l.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ue((g) => ma(g, l), ["prevent"])
                    }, null, 42, rs)
                  ], 2))), 128)),
                  i("th", is, [
                    f(I, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: u[10] || (u[10] = (l) => oe("props", l.currentTarget))
                    })
                  ])
                ])
              ]),
              (e(!0), n(b, null, D(ie.value, (l) => (e(), n("tbody", {
                key: l.key
              }, [
                q.value ? (e(), n("tr", us, [
                  i("td", {
                    colspan: N.value.length + 2
                  }, [
                    i("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !fe(l.key),
                      onClick: (g) => At(l.key)
                    }, [
                      f(T, {
                        name: "chevron-down",
                        class: F({ "at-rot": fe(l.key) })
                      }, null, 8, ["class"]),
                      l.option ? (e(), E(ce, {
                        key: 0,
                        prop: q.value,
                        row: Z(l.key)
                      }, null, 8, ["prop", "row"])) : (e(), n("span", ps, v(Fe.value), 1)),
                      i("span", vs, v(l.rows.length), 1)
                    ], 8, cs)
                  ], 8, ds)
                ])) : h("", !0),
                fe(l.key) ? h("", !0) : (e(), n(b, { key: 1 }, [
                  (e(!0), n(b, null, D(l.rows, (g) => (e(), n("tr", {
                    key: m(g),
                    "aria-selected": G.value.includes(m(g)) ? "true" : void 0
                  }, [
                    i("td", hs, [
                      i("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: G.value.includes(m(g)),
                        onChange: (U) => ga(g)
                      }, null, 40, gs)
                    ]),
                    (e(!0), n(b, null, D(N.value, (U) => (e(), n("td", {
                      key: U.key,
                      class: F({ "at-num": U.type === "number", "at-dv-titlecell": U.type === "title", "is-edit": U.type !== "title" && z(Te)(U) }),
                      onClick: (te) => ba(te, g, U)
                    }, [
                      f(ce, {
                        prop: U,
                        row: g
                      }, null, 8, ["prop", "row"]),
                      U.type === "title" ? (e(), n("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ue((te) => c("open", g), ["stop"])
                      }, "Ouvrir", 8, ys)) : h("", !0)
                    ], 10, fs))), 128)),
                    bs
                  ], 8, ms))), 128)),
                  i("tr", ks, [
                    _s,
                    i("td", {
                      colspan: N.value.length + 1
                    }, [
                      i("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (g) => me(q.value ? Z(l.key) : {})
                      }, [
                        f(T, { name: "plus" }),
                        k(v(o.newLabel), 1)
                      ], 8, $s)
                    ], 8, ws)
                  ])
                ], 64))
              ]))), 128)),
              i("tfoot", null, [
                i("tr", null, [
                  Ms,
                  (e(!0), n(b, null, D(N.value, (l) => (e(), n("td", {
                    key: l.key,
                    class: F({ "at-num": l.type === "number" })
                  }, [
                    st(l) ? (e(), n(b, { key: 0 }, [
                      k(v(st(l).label) + " ", 1),
                      i("b", null, v(st(l).value), 1)
                    ], 64)) : h("", !0)
                  ], 2))), 128)),
                  As
                ])
              ])
            ], 4)
          ]),
          G.value.length ? (e(), n("div", Cs, [
            i("span", null, [
              i("b", Vs, v(G.value.length), 1),
              k(" sélectionnée" + v(G.value.length > 1 ? "s" : ""), 1)
            ]),
            f(I, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: ya
            }, {
              default: L(() => [
                k("Supprimer")
              ]),
              _: 1
            }),
            f(I, {
              variant: "ghost",
              size: "sm",
              onClick: u[11] || (u[11] = (l) => G.value = [])
            }, {
              default: L(() => [
                k("Désélectionner")
              ]),
              _: 1
            })
          ])) : h("", !0)
        ], 64)) : p.value.layout === "board" ? (e(), n("div", Ss, [
          q.value ? (e(!0), n(b, { key: 1 }, D(ie.value, (l) => {
            var g;
            return e(), n("div", {
              key: l.key,
              class: F(["at-dv-col", be.value === l.key && "over"]),
              onDragover: ue((U) => be.value = l.key, ["prevent"]),
              onDragleave: u[12] || (u[12] = ue((U) => be.value = null, ["self"])),
              onDrop: ue((U) => ka(l.key), ["prevent"])
            }, [
              i("div", zs, [
                l.option ? (e(), E(ce, {
                  key: 0,
                  prop: q.value,
                  row: Z(l.key)
                }, null, 8, ["prop", "row"])) : (e(), n("span", Ds, v(Fe.value), 1)),
                i("span", Qs, v(l.rows.length), 1),
                Bs,
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((g = l.option) == null ? void 0 : g.label) ?? Fe.value}`,
                  onClick: (U) => me(Z(l.key))
                }, null, 8, ["label", "onClick"])
              ]),
              i("div", Es, [
                (e(!0), n(b, null, D(l.rows, (U) => (e(), n("button", {
                  key: m(U),
                  type: "button",
                  class: F(["at-dv-card", Ee.value === m(U) && "dragging"]),
                  draggable: "true",
                  onDragstart: (te) => Vt(te, U),
                  onDragend: Ue,
                  onClick: (te) => c("open", U)
                }, [
                  i("span", Ps, v(U[w.value] || "Sans titre"), 1),
                  x.value.some((te) => !z(ne)(z(X)(U, te)) || te.type === "checkbox") ? (e(), n("span", Hs, [
                    (e(!0), n(b, null, D(x.value, (te) => (e(), n(b, {
                      key: te.key
                    }, [
                      z(ne)(z(X)(U, te)) ? h("", !0) : (e(), E(ce, {
                        key: 0,
                        prop: te,
                        row: U
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : h("", !0)
                ], 42, Us))), 128)),
                i("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (U) => me(Z(l.key))
                }, [
                  f(T, { name: "plus" }),
                  k(v(o.newLabel), 1)
                ], 8, Fs)
              ])
            ], 42, Ts);
          }), 128)) : (e(), n("div", Ls, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (e(), n("div", Os, [
          O.value.length ? (e(), n("div", Ns, [
            (e(!0), n(b, null, D(ie.value, (l) => (e(), n(b, {
              key: l.key
            }, [
              q.value ? (e(), n("div", qs, [
                i("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !fe(l.key),
                  onClick: (g) => At(l.key)
                }, [
                  f(T, {
                    name: "chevron-down",
                    class: F({ "at-rot": fe(l.key) })
                  }, null, 8, ["class"]),
                  l.option ? (e(), E(ce, {
                    key: 0,
                    prop: q.value,
                    row: Z(l.key)
                  }, null, 8, ["prop", "row"])) : (e(), n("span", xs, v(Fe.value), 1)),
                  i("span", Rs, v(l.rows.length), 1)
                ], 8, js)
              ])) : h("", !0),
              fe(l.key) ? h("", !0) : (e(!0), n(b, { key: 1 }, D(l.rows, (g) => (e(), n("button", {
                key: m(g),
                type: "button",
                class: "at-dv-li",
                onClick: (U) => c("open", g)
              }, [
                i("span", Ks, v(g[w.value] || "Sans titre"), 1),
                i("span", Gs, [
                  (e(!0), n(b, null, D(x.value, (U) => (e(), n(b, {
                    key: U.key
                  }, [
                    z(ne)(z(X)(g, U)) ? h("", !0) : (e(), E(ce, {
                      key: 0,
                      prop: U,
                      row: g
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, Ws))), 128))
            ], 64))), 128)),
            i("div", Js, [
              i("button", {
                type: "button",
                class: "at-dv-new",
                onClick: u[14] || (u[14] = (l) => me())
              }, [
                f(T, { name: "plus" }),
                k(v(o.newLabel), 1)
              ])
            ])
          ])) : (e(), n("div", Is, [
            k("Aucun élément ne correspond à cette vue."),
            f(I, {
              size: "sm",
              icon: "plus",
              onClick: u[13] || (u[13] = (l) => me())
            }, {
              default: L(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (e(), n(b, { key: 4 }, [
          i("div", Zs, [
            i("span", Ys, v(z(bn)(Pe.value)), 1),
            f(I, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: u[15] || (u[15] = (l) => p.value.month = z(zt)(Pe.value, -1))
            }),
            f(I, {
              size: "sm",
              onClick: u[16] || (u[16] = (l) => p.value.month = z(Le)().slice(0, 7))
            }, {
              default: L(() => [
                k("Aujourd’hui")
              ]),
              _: 1
            }),
            f(I, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: u[17] || (u[17] = (l) => p.value.month = z(zt)(Pe.value, 1))
            }),
            i("span", Xs, [
              re.value ? (e(), n(b, { key: 0 }, [
                k("Par " + v(y.value[re.value].name.toLowerCase()), 1),
                Lt.value ? (e(), n(b, { key: 0 }, [
                  k(" · " + v(Lt.value) + " sans date", 1)
                ], 64)) : h("", !0)
              ], 64)) : (e(), n(b, { key: 1 }, [
                k("Aucune propriété date")
              ], 64))
            ])
          ]),
          i("div", el, [
            i("div", tl, [
              (e(), n(b, null, D(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (l) => i("div", {
                key: l,
                class: "at-dv-dow"
              }, v(l), 1)), 64))
            ]),
            i("div", al, [
              (e(!0), n(b, null, D(wa.value, (l) => (e(), n("div", {
                key: l.iso,
                class: F(["at-dv-day", l.outside && "out", l.today && "today", be.value === l.iso && "over"]),
                onDragover: ue((g) => be.value = l.iso, ["prevent"]),
                onDrop: ue((g) => _a(l.iso), ["prevent"])
              }, [
                i("div", sl, [
                  i("span", null, v(l.day), 1),
                  re.value ? (e(), n("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${z(dt)(l.iso)}`,
                    onClick: (g) => me({ [re.value]: l.iso })
                  }, [
                    f(T, { name: "plus" })
                  ], 8, ll)) : h("", !0)
                ]),
                (e(!0), n(b, null, D(l.rows, (g) => (e(), n("button", {
                  key: m(g),
                  type: "button",
                  class: F(["at-dv-calitem", Aa(g) && "done"]),
                  draggable: "true",
                  onDragstart: (U) => Vt(U, g),
                  onDragend: Ue,
                  onClick: (U) => c("open", g)
                }, [
                  i("span", {
                    class: "dot",
                    style: ee({ background: Ma(g) })
                  }, null, 4),
                  i("span", null, v(g[w.value] || "Sans titre"), 1)
                ], 42, ol))), 128))
              ], 42, nl))), 128))
            ])
          ])
        ], 64)),
        f(de, {
          open: z(We),
          "onUpdate:open": u[18] || (u[18] = (l) => ke(We) ? We.value = l : null),
          anchor: pe.value
        }, {
          default: L(() => [
            i("div", rl, [
              il,
              (e(!0), n(b, null, D(z(Oe), (l) => (e(), n("button", {
                key: l.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (g) => aa(l.value)
              }, [
                f(T, {
                  name: l.icon
                }, null, 8, ["name"]),
                k(v(l.label), 1)
              ], 8, ul))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: z(Ke),
          "onUpdate:open": u[19] || (u[19] = (l) => ke(Ke) ? Ke.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: L(() => [
            i("div", dl, [
              cl,
              i("div", pl, [
                p.value.filters.length ? h("", !0) : (e(), n("span", vl, "Aucun filtre : la vue affiche toutes les lignes.")),
                (e(!0), n(b, null, D(p.value.filters, (l) => (e(), n("div", {
                  key: l.id,
                  class: "at-rule"
                }, [
                  i("div", ml, [
                    R(i("select", {
                      "onUpdate:modelValue": (g) => l.prop = g,
                      "aria-label": "Propriété",
                      onChange: (g) => ra(l)
                    }, [
                      (e(!0), n(b, null, D(o.schema, (g) => (e(), n("option", {
                        key: g.key,
                        value: g.key
                      }, v(g.name), 9, gl))), 128))
                    ], 40, hl), [
                      [we, l.prop]
                    ]),
                    f(T, { name: "chevron-down" })
                  ]),
                  i("div", fl, [
                    R(i("select", {
                      "onUpdate:modelValue": (g) => l.op = g,
                      "aria-label": "Condition"
                    }, [
                      (e(!0), n(b, null, D(ia(l), (g) => (e(), n("option", {
                        key: g,
                        value: g
                      }, v(z(Tt)[g]), 9, bl))), 128))
                    ], 8, yl), [
                      [we, l.op]
                    ]),
                    f(T, { name: "chevron-down" })
                  ]),
                  wt(l) ? (e(), n(b, { key: 0 }, [
                    Qe(l) === "options" ? (e(), n("div", kl, [
                      R(i("select", {
                        "onUpdate:modelValue": (g) => l.value = g,
                        "aria-label": "Valeur"
                      }, [
                        wl,
                        (e(!0), n(b, null, D(z(Ae)(y.value[l.prop]), (g) => (e(), n("option", {
                          key: g.value,
                          value: g.value
                        }, v(g.label), 9, $l))), 128))
                      ], 8, _l), [
                        [we, l.value]
                      ]),
                      f(T, { name: "chevron-down" })
                    ])) : Qe(l) === "date" ? R((e(), n("input", {
                      key: 1,
                      "onUpdate:modelValue": (g) => l.value = g,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, Ml)), [
                      [_e, l.value]
                    ]) : Qe(l) === "number" ? R((e(), n("input", {
                      key: 2,
                      "onUpdate:modelValue": (g) => l.value = g,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, Al)), [
                      [_e, l.value]
                    ]) : R((e(), n("input", {
                      key: 3,
                      "onUpdate:modelValue": (g) => l.value = g,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, Cl)), [
                      [_e, l.value]
                    ])
                  ], 64)) : (e(), n("span", Vl)),
                  f(I, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (g) => $t(p.value.filters, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              i("div", Sl, [
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: oa
                }, {
                  default: L(() => [
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
          open: z(Ge),
          "onUpdate:open": u[20] || (u[20] = (l) => ke(Ge) ? Ge.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: L(() => [
            i("div", Ll, [
              Tl,
              i("div", zl, [
                p.value.sorts.length ? h("", !0) : (e(), n("span", Dl, "Aucun tri : ordre des données.")),
                (e(!0), n(b, null, D(p.value.sorts, (l) => (e(), n("div", {
                  key: l.id,
                  class: "at-rule sort"
                }, [
                  i("div", Ql, [
                    R(i("select", {
                      "onUpdate:modelValue": (g) => l.prop = g,
                      "aria-label": "Propriété"
                    }, [
                      (e(!0), n(b, null, D(o.schema, (g) => (e(), n("option", {
                        key: g.key,
                        value: g.key
                      }, v(g.name), 9, El))), 128))
                    ], 8, Bl), [
                      [we, l.prop]
                    ]),
                    f(T, { name: "chevron-down" })
                  ]),
                  i("div", Ul, [
                    R(i("select", {
                      "onUpdate:modelValue": (g) => l.dir = g,
                      "aria-label": "Sens"
                    }, Ol, 8, Pl), [
                      [we, l.dir]
                    ]),
                    f(T, { name: "chevron-down" })
                  ]),
                  f(I, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (g) => $t(p.value.sorts, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              i("div", Il, [
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: ua
                }, {
                  default: L(() => [
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
          open: z(Je),
          "onUpdate:open": u[22] || (u[22] = (l) => ke(Je) ? Je.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: L(() => [
            i("div", Nl, [
              i("div", ql, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (e(), n("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: u[21] || (u[21] = (l) => et(null))
              }, [
                f(T, { name: "x" }),
                k("Aucun groupe"),
                p.value.groupBy ? h("", !0) : (e(), E(T, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : h("", !0),
              (e(!0), n(b, null, D(C.value, (l) => (e(), n("button", {
                key: l.key,
                type: "button",
                class: "at-menu-item",
                onClick: (g) => et(l.key)
              }, [
                f(T, {
                  name: z(Ie)(l)
                }, null, 8, ["name"]),
                k(v(l.name), 1),
                j.value === l.key ? (e(), E(T, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : h("", !0)
              ], 8, jl))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(de, {
          open: z(Ze),
          "onUpdate:open": u[26] || (u[26] = (l) => ke(Ze) ? Ze.value = l : null),
          anchor: pe.value,
          align: "end"
        }, {
          default: L(() => [
            i("div", xl, [
              Rl,
              (e(!0), n(b, null, D(S.value, (l, g) => (e(), n("div", {
                key: l.key,
                class: F(["at-menu-item", "at-pi", Be.value === g && "drop"]),
                draggable: l.type !== "title",
                onDragstart: (U) => Ce.value = g,
                onDragover: ue((U) => Be.value = g, ["prevent"]),
                onDrop: ue((U) => pa(g), ["prevent"]),
                onDragend: u[23] || (u[23] = (U) => {
                  Ce.value = null, Be.value = null;
                })
              }, [
                f(T, {
                  name: "grip",
                  class: "grip"
                }),
                f(T, {
                  name: z(Ie)(l)
                }, null, 8, ["name"]),
                i("span", Kl, v(l.name), 1),
                i("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${l.name}`,
                  checked: l.type === "title" || !p.value.hidden.includes(l.key),
                  disabled: l.type === "title",
                  onChange: (U) => ca(l)
                }, null, 40, Gl)
              ], 42, Wl))), 128)),
              Jl,
              i("div", Zl, [
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  onClick: u[24] || (u[24] = (l) => Mt(!0))
                }, {
                  default: L(() => [
                    k("Tout afficher")
                  ]),
                  _: 1
                }),
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  onClick: u[25] || (u[25] = (l) => Mt(!1))
                }, {
                  default: L(() => [
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
          open: z(Ye),
          "onUpdate:open": u[30] || (u[30] = (l) => ke(Ye) ? Ye.value = l : null),
          anchor: pe.value
        }, {
          default: L(() => [
            i("div", Yl, [
              Xl,
              R(i("input", {
                "onUpdate:modelValue": u[27] || (u[27] = (l) => p.value.name = l),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [_e, p.value.name]
              ]),
              i("div", eo, [
                (e(!0), n(b, null, D(z(Oe), (l) => (e(), n("button", {
                  key: l.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === l.value,
                  onClick: (g) => na(l.value)
                }, [
                  f(T, {
                    name: l.icon
                  }, null, 8, ["name"]),
                  k(v(l.label), 1)
                ], 8, to))), 128))
              ]),
              p.value.layout !== "calendar" ? (e(), n("div", ao, [
                i("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                i("div", no, [
                  i("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: u[28] || (u[28] = (l) => et(l.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (e(), n("option", lo, "Aucun")) : h("", !0),
                    (e(!0), n(b, null, D(C.value, (l) => (e(), n("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, oo))), 128))
                  ], 40, so),
                  f(T, { name: "chevron-down" })
                ])
              ])) : (e(), n("div", ro, [
                io,
                i("div", uo, [
                  i("select", {
                    value: re.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: u[29] || (u[29] = (l) => p.value.dateProp = l.target.value)
                  }, [
                    (e(!0), n(b, null, D(_.value, (l) => (e(), n("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, po))), 128))
                  ], 40, co),
                  f(T, { name: "chevron-down" })
                ])
              ])),
              o.lockViews ? h("", !0) : (e(), n(b, { key: 2 }, [
                vo,
                i("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: sa
                }, [
                  f(T, { name: "copy" }),
                  k("Dupliquer la vue")
                ]),
                i("button", {
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: t.value.length < 2,
                  onClick: la
                }, [
                  f(T, { name: "trash" }),
                  k("Supprimer la vue")
                ], 8, mo)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(bt, {
          open: lt.value,
          "onUpdate:open": u[31] || (u[31] = (l) => lt.value = l),
          prop: (($ = ye.value) == null ? void 0 : $.prop) ?? null,
          row: (J = ye.value) == null ? void 0 : J.row,
          anchor: Ct.value,
          onUpdate: u[32] || (u[32] = (l) => ye.value && c("update", ye.value.row, ye.value.prop.key, l))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), go = {
  key: 0,
  class: "at-drawer-wrap"
}, fo = ["aria-label"], yo = { class: "at-drawer__head" }, bo = { class: "at-drawer__crumb" }, ko = /* @__PURE__ */ i("span", { class: "at-spacer" }, null, -1), _o = { class: "at-drawer__body" }, wo = /* @__PURE__ */ P({
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
    const a = K(d, "open"), s = H();
    let t = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return ve(a, (c) => {
      var m;
      c ? (t = document.activeElement, document.addEventListener("keydown", r), De(() => {
        var p;
        return (p = s.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = t == null ? void 0 : t.focus) == null || m.call(t));
    }, { immediate: !0 }), ht(() => document.removeEventListener("keydown", r)), (c, m) => (e(), E(gt, { to: "body" }, [
      f(Ft, { name: "at-drawer" }, {
        default: L(() => [
          a.value ? (e(), n("div", go, [
            i("div", {
              class: "at-overlay",
              onClick: m[0] || (m[0] = (p) => a.value = !1)
            }),
            i("aside", {
              ref_key: "panel",
              ref: s,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: ee({ width: `min(${c.width}px, 100%)` })
            }, [
              i("header", yo, [
                i("span", bo, [
                  Q(c.$slots, "crumb", {}, () => [
                    k(v(c.label), 1)
                  ])
                ]),
                ko,
                Q(c.$slots, "actions"),
                f(I, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })
              ]),
              i("div", _o, [
                Q(c.$slots, "default")
              ])
            ], 12, fo)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), $o = ["aria-label"], Mo = {
  key: 0,
  class: "at-menu-label"
}, xt = /* @__PURE__ */ P({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const a = H();
    function s(t) {
      var p;
      const r = [...((p = a.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!r.length) return;
      const c = r.indexOf(document.activeElement), m = (y) => {
        t.preventDefault(), r[(y + r.length) % r.length].focus();
      };
      t.key === "ArrowDown" ? m(c + 1) : t.key === "ArrowUp" ? m(c < 0 ? r.length - 1 : c - 1) : t.key === "Home" ? m(0) : t.key === "End" && m(r.length - 1);
    }
    return (t, r) => (e(), n("div", {
      ref_key: "el",
      ref: a,
      class: "at-menu",
      role: "menu",
      "aria-label": t.label,
      style: ee(t.minWidth ? { minWidth: t.minWidth + "px" } : void 0),
      onKeydown: s
    }, [
      t.label ? (e(), n("div", Mo, v(t.label), 1)) : h("", !0),
      Q(t.$slots, "default")
    ], 44, $o));
  }
}), Rt = /* @__PURE__ */ P({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const a = H(!1);
    function s(t) {
      t.target.closest('.at-menu-item[role="menuitem"]') && (a.value = !1);
    }
    return (t, r) => (e(), E(de, {
      open: a.value,
      "onUpdate:open": r[0] || (r[0] = (c) => a.value = c),
      align: t.align,
      placement: t.placement
    }, {
      trigger: L((c) => [
        Q(t.$slots, "trigger", La(Ta(c)))
      ]),
      default: L(() => [
        f(xt, {
          label: t.label,
          "min-width": t.minWidth,
          onClick: s
        }, {
          default: L(() => [
            Q(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align", "placement"]));
  }
}), Ao = { class: "at-empty" }, Co = /* @__PURE__ */ P({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (a, s) => (e(), n("div", Ao, [
      Q(a.$slots, "default", {}, () => [
        k(v(a.message), 1)
      ]),
      Q(a.$slots, "action")
    ]));
  }
});
let Qt = 0;
function Wt(d = "at") {
  return Qt += 1, `${d}-${Qt}`;
}
const Vo = { class: "at-field" }, So = ["for"], Lo = ["id"], To = ["id"], ct = /* @__PURE__ */ P({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const s = d.id ?? Wt("field");
    return (t, r) => (e(), n("div", Vo, [
      t.label ? (e(), n("label", {
        key: 0,
        class: "at-label",
        for: z(s)
      }, v(t.label), 9, So)) : h("", !0),
      Q(t.$slots, "default", {
        id: z(s),
        invalid: !!t.error,
        describedby: t.error || t.hint ? z(s) + "-hint" : void 0
      }),
      t.error ? (e(), n("span", {
        key: 1,
        id: z(s) + "-hint",
        class: "at-hint at-hint--error"
      }, v(t.error), 9, Lo)) : t.hint ? (e(), n("span", {
        key: 2,
        id: z(s) + "-hint",
        class: "at-hint"
      }, v(t.hint), 9, To)) : h("", !0)
    ]));
  }
}), zo = ["role", "aria-label", "aria-hidden"], Kt = /* @__PURE__ */ P({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (a, s) => (e(), n("span", {
      class: F(["at-tile", a.size !== "sm" && `at-tile--${a.size}`, a.color === "neutral" ? "at-tile--neutral" : `at-tone-${a.color}`]),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true"
    }, [
      f(T, { name: a.name }, null, 8, ["name"])
    ], 10, zo));
  }
}), Re = (d, a) => {
  const s = d.__vccOpts || d;
  for (const [t, r] of a)
    s[t] = r;
  return s;
}, Do = {}, Qo = { class: "at-kbd" };
function Bo(d, a) {
  return e(), n("kbd", Qo, [
    Q(d.$slots, "default")
  ]);
}
const kt = /* @__PURE__ */ Re(Do, [["render", Bo]]), Eo = {
  key: 0,
  class: "at-input-wrap"
}, Uo = ["type", "placeholder", "disabled", "aria-invalid"], Po = ["type", "placeholder", "disabled", "aria-invalid"], pt = /* @__PURE__ */ P({
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
    const s = K(d, "modelValue"), t = d, r = H();
    return a({ focus: () => {
      var c;
      return (c = r.value) == null ? void 0 : c.focus();
    }, el: r }), (c, m) => c.icon || c.kbd ? (e(), n("div", Eo, [
      c.icon ? (e(), E(T, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : h("", !0),
      R(i("input", ae(c.$attrs, {
        ref_key: "el",
        ref: r,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => s.value = p),
        class: "at-input",
        style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, Uo), [
        [it, s.value]
      ]),
      c.kbd ? (e(), E(kt, { key: 1 }, {
        default: L(() => [
          k(v(c.kbd), 1)
        ]),
        _: 1
      })) : h("", !0)
    ])) : R((e(), n("input", ae({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: r,
      "onUpdate:modelValue": m[1] || (m[1] = (p) => s.value = p),
      class: "at-input",
      style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, Po)), [
      [it, s.value]
    ]);
  }
}), rt = {
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
}, Ho = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", vt = {
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
function zi(d) {
  Object.assign(vt, d);
}
const Di = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, Fo = ["role", "aria-label", "aria-hidden"], Oo = ["viewBox", "width", "height"], Io = ["d"], No = ["stroke-width", "innerHTML"], qo = {
  key: 0,
  class: "at-logo__name"
}, jo = /* @__PURE__ */ P({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(d) {
    const a = d, s = V(() => vt[a.app] ?? vt.atelier), t = V(() => a.name ?? s.value.name), r = V(() => Math.max(16, a.size)), c = V(() => ({
      "--at-logo-size": r.value + "px",
      "--at-logo-fill": `var(--${s.value.color})`
    }));
    return (m, p) => (e(), n("span", {
      class: F(["at-logo", m.wordmark && "at-logo--wordmark"]),
      style: ee(c.value),
      role: !m.wordmark && m.label ? "img" : void 0,
      "aria-label": m.wordmark ? void 0 : m.label,
      "aria-hidden": !m.wordmark && !m.label ? "true" : void 0
    }, [
      (e(), n("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${z(rt).size} ${z(rt).size}`,
        width: r.value,
        height: r.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        i("path", {
          class: "at-logo__tile",
          d: z(Ho)
        }, null, 8, Io),
        i("g", {
          class: "at-logo__glyph",
          "stroke-width": z(rt).stroke,
          innerHTML: s.value.glyph
        }, null, 8, No)
      ], 8, Oo)),
      m.wordmark ? (e(), n("span", qo, v(t.value), 1)) : h("", !0)
    ], 14, Fo));
  }
}), xo = { class: "at-login__panel" }, Ro = {
  key: 0,
  class: "at-login__brand"
}, Wo = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, Ko = ["aria-labelledby"], Go = { class: "at-login__head" }, Jo = ["id"], Zo = {
  key: 0,
  class: "at-login__desc"
}, Yo = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, Xo = /* @__PURE__ */ i("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ i("span", null, "ou")
], -1), er = {
  key: 1,
  class: "at-login__foot"
}, tr = /* @__PURE__ */ P({
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
  setup(d, { expose: a, emit: s }) {
    const t = K(d, "username"), r = K(d, "password"), c = K(d, "remember"), m = d, p = s, y = Wt("login"), M = V(() => m.loading !== !1), w = V(() => {
      var C;
      return (m.mark ?? ((C = m.brand) == null ? void 0 : C.trim().charAt(0)) ?? "").toUpperCase();
    }), S = H(), N = H();
    function x() {
      var C, _;
      if (!M.value) {
        if (!t.value.trim()) return (C = S.value) == null ? void 0 : C.focus();
        if (!r.value) return (_ = N.value) == null ? void 0 : _.focus();
        p("submit", { username: t.value.trim(), password: r.value, remember: c.value });
      }
    }
    return a({
      focusUsername: () => {
        var C;
        return (C = S.value) == null ? void 0 : C.focus();
      },
      focusPassword: () => {
        var C;
        return (C = N.value) == null ? void 0 : C.focus();
      }
    }), (C, _) => (e(), E(Ht(C.as), { class: "at-login" }, {
      default: L(() => [
        i("div", xo, [
          C.brand || C.$slots.brand ? (e(), n("div", Ro, [
            Q(C.$slots, "brand", {}, () => [
              i("span", Wo, v(w.value), 1),
              k(v(C.brand), 1)
            ])
          ])) : h("", !0),
          i("section", {
            class: "at-login__card",
            "aria-labelledby": z(y)
          }, [
            i("header", Go, [
              i("h1", {
                id: z(y),
                class: "at-login__title"
              }, v(C.title), 9, Jo),
              C.description ? (e(), n("p", Zo, v(C.description), 1)) : h("", !0)
            ]),
            C.error ? (e(), n("p", Yo, v(C.error), 1)) : h("", !0),
            Q(C.$slots, "default", {}, () => [
              i("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: ue(x, ["prevent"])
              }, [
                f(ct, { label: C.usernameLabel }, {
                  default: L((A) => [
                    f(pt, {
                      id: A.id,
                      ref_key: "usernameInput",
                      ref: S,
                      modelValue: t.value,
                      "onUpdate:modelValue": _[0] || (_[0] = (B) => t.value = B),
                      name: "username",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: "false",
                      disabled: M.value,
                      invalid: !!C.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(ct, { label: C.passwordLabel }, {
                  default: L((A) => [
                    f(pt, {
                      id: A.id,
                      ref_key: "passwordInput",
                      ref: N,
                      modelValue: r.value,
                      "onUpdate:modelValue": _[1] || (_[1] = (B) => r.value = B),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: M.value,
                      invalid: !!C.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                C.rememberable ? (e(), E(It, {
                  key: 0,
                  modelValue: c.value,
                  "onUpdate:modelValue": _[2] || (_[2] = (A) => c.value = A),
                  label: C.rememberLabel,
                  disabled: M.value
                }, null, 8, ["modelValue", "label", "disabled"])) : h("", !0),
                f(I, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "at-login__submit",
                  loading: C.loading === !0 || C.loading === "password",
                  disabled: M.value
                }, {
                  default: L(() => [
                    k(v(C.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 32),
              C.passkey ? (e(), n(b, { key: 0 }, [
                Xo,
                f(I, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: C.loading === "passkey",
                  disabled: M.value,
                  onClick: _[3] || (_[3] = (A) => p("passkey"))
                }, {
                  default: L(() => [
                    k(v(C.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : h("", !0)
            ])
          ], 8, Ko),
          C.$slots.footer ? (e(), n("footer", er, [
            Q(C.$slots, "footer")
          ])) : h("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), ar = ["role", "aria-checked", "disabled"], nr = {
  key: 2,
  class: "at-menu-meta"
}, $e = /* @__PURE__ */ P({
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
    return (a, s) => (e(), n("button", {
      type: "button",
      class: F(["at-menu-item", a.danger && "at-menu-item--danger"]),
      role: a.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": a.checked !== void 0 ? a.checked : void 0,
      disabled: a.disabled,
      onClick: s[0] || (s[0] = (t) => a.$emit("select", t))
    }, [
      a.icon ? (e(), E(T, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      Q(a.$slots, "default", {}, () => [
        k(v(a.label), 1)
      ]),
      a.kbd ? (e(), E(kt, { key: 1 }, {
        default: L(() => [
          k(v(a.kbd), 1)
        ]),
        _: 1
      })) : a.meta ? (e(), n("span", nr, v(a.meta), 1)) : a.checked ? (e(), E(T, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : h("", !0)
    ], 10, ar));
  }
}), sr = {}, lr = { class: "at-menu-label" };
function or(d, a) {
  return e(), n("div", lr, [
    Q(d.$slots, "default")
  ]);
}
const mt = /* @__PURE__ */ Re(sr, [["render", or]]), rr = {}, ir = {
  class: "at-menu-sep",
  role: "separator"
};
function ur(d, a) {
  return e(), n("div", ir);
}
const Ne = /* @__PURE__ */ Re(rr, [["render", ur]]), dr = {
  key: 0,
  class: "at-modal-wrap"
}, cr = ["aria-label"], pr = { class: "at-modal__head" }, vr = { style: { flex: "1", "min-width": "0" } }, mr = { class: "at-modal__title" }, hr = {
  key: 0,
  class: "at-modal__desc"
}, gr = { class: "at-modal__body" }, fr = {
  key: 0,
  class: "at-modal__foot"
}, yr = /* @__PURE__ */ P({
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
    const a = K(d, "open"), s = H();
    let t = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return ve(a, (c) => {
      var m;
      c ? (t = document.activeElement, document.addEventListener("keydown", r), De(() => {
        var p;
        return (p = s.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = t == null ? void 0 : t.focus) == null || m.call(t));
    }, { immediate: !0 }), ht(() => document.removeEventListener("keydown", r)), (c, m) => (e(), E(gt, { to: "body" }, [
      f(Ft, { name: "at-modal" }, {
        default: L(() => [
          a.value ? (e(), n("div", dr, [
            i("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: m[0] || (m[0] = (p) => c.dismissible && (a.value = !1))
            }),
            i("div", {
              ref_key: "panel",
              ref: s,
              class: F(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              i("header", pr, [
                i("div", vr, [
                  i("h2", mr, v(c.title), 1),
                  c.description ? (e(), n("p", hr, v(c.description), 1)) : h("", !0)
                ]),
                c.dismissible ? (e(), E(I, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })) : h("", !0)
              ]),
              i("div", gr, [
                Q(c.$slots, "default")
              ]),
              c.$slots.footer ? (e(), n("footer", fr, [
                Q(c.$slots, "footer", {
                  close: () => a.value = !1
                })
              ])) : h("", !0)
            ], 10, cr)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), br = ["aria-label"], kr = {
  key: 0,
  class: "at-nav-label"
}, _r = /* @__PURE__ */ P({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (a, s) => (e(), n("nav", {
      class: "at-nav",
      "aria-label": a.label
    }, [
      a.label ? (e(), n("div", kr, v(a.label), 1)) : h("", !0),
      Q(a.$slots, "default")
    ], 8, br));
  }
}), wr = ["href", "aria-current"], $r = { class: "at-ellipsis" }, Mr = {
  key: 3,
  class: "at-nav-count"
}, Ar = /* @__PURE__ */ P({
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
    return (a, s) => (e(), n("a", {
      class: "at-nav-item",
      href: a.href ?? "#",
      "aria-current": a.active ? "page" : void 0,
      onClick: s[0] || (s[0] = (t) => {
        !a.href && t.preventDefault(), a.$emit("click", t);
      })
    }, [
      a.mark ? (e(), n("span", {
        key: 0,
        class: "at-nav-mark",
        style: ee({ background: a.mark })
      }, null, 4)) : a.icon && a.tile ? (e(), E(Kt, {
        key: 1,
        name: a.icon,
        color: a.tile
      }, null, 8, ["name", "color"])) : a.icon ? (e(), E(T, {
        key: 2,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      i("span", $r, [
        Q(a.$slots, "default", {}, () => [
          k(v(a.label), 1)
        ])
      ]),
      a.count != null && a.count !== "" ? (e(), n("span", Mr, v(a.count), 1)) : h("", !0)
    ], 8, wr));
  }
}), Cr = {
  key: 0,
  class: "at-page__head"
}, Vr = { class: "t-heading-1" }, Sr = { key: 0 }, Lr = /* @__PURE__ */ P({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (a, s) => (e(), n("div", {
      class: F(["at-page", a.wide && "at-page--wide"])
    }, [
      a.title || a.$slots.head ? (e(), n("div", Cr, [
        Q(a.$slots, "head", {}, () => [
          i("h1", Vr, v(a.title), 1),
          a.description ? (e(), n("p", Sr, v(a.description), 1)) : h("", !0)
        ])
      ])) : h("", !0),
      Q(a.$slots, "default")
    ], 2));
  }
}), Tr = { class: "at-proplist" }, zr = ["disabled", "onClick"], Dr = /* @__PURE__ */ P({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: a }) {
    const s = d, t = a, r = V(() => s.schema.filter((M) => {
      var w;
      return M.type !== "title" && !((w = s.exclude) != null && w.includes(M.key));
    })), c = H(null), m = H(null), p = H(!1);
    function y(M, w) {
      if (Te(w)) {
        if (w.type === "checkbox") {
          t("update", w.key, !s.row[w.key]);
          return;
        }
        m.value = M.currentTarget, c.value = w, p.value = !0;
      }
    }
    return (M, w) => (e(), n(b, null, [
      i("dl", Tr, [
        (e(!0), n(b, null, D(r.value, (S) => (e(), n(b, {
          key: S.key
        }, [
          i("dt", null, [
            f(T, {
              name: z(Ie)(S)
            }, null, 8, ["name"]),
            k(v(S.name), 1)
          ]),
          i("dd", null, [
            i("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !z(Te)(S),
              onClick: (N) => y(N, S)
            }, [
              f(ce, {
                prop: S,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, zr)
          ])
        ], 64))), 128))
      ]),
      f(bt, {
        open: p.value,
        "onUpdate:open": w[0] || (w[0] = (S) => p.value = S),
        prop: c.value,
        row: M.row,
        anchor: m.value,
        onUpdate: w[1] || (w[1] = (S) => c.value && t("update", c.value.key, S))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), Qr = ["aria-label"], Br = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Er = /* @__PURE__ */ P({
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
    return (s, t) => (e(), n("div", {
      class: "at-segment",
      role: "group",
      "aria-label": s.label
    }, [
      (e(!0), n(b, null, D(s.items, (r) => (e(), n("button", {
        key: String(r.value),
        type: "button",
        "aria-pressed": a.value === r.value,
        "aria-label": r.iconOnly ? r.label : void 0,
        title: r.iconOnly ? r.label : void 0,
        disabled: r.disabled,
        onClick: (c) => a.value = r.value
      }, [
        r.icon ? (e(), E(T, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : h("", !0),
        r.iconOnly ? h("", !0) : (e(), n(b, { key: 1 }, [
          k(v(r.label), 1)
        ], 64))
      ], 8, Br))), 128))
    ], 8, Qr));
  }
}), Ur = { class: "at-select" }, Pr = ["disabled", "aria-invalid"], Hr = {
  key: 0,
  value: null,
  disabled: ""
}, Fr = ["value", "disabled"], Or = /* @__PURE__ */ P({
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
    return (s, t) => (e(), n("div", Ur, [
      R(i("select", ae(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => a.value = r),
        disabled: s.disabled,
        "aria-invalid": s.invalid || void 0,
        style: s.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        s.placeholder ? (e(), n("option", Hr, v(s.placeholder), 1)) : h("", !0),
        (e(!0), n(b, null, D(s.options, (r) => (e(), n("option", {
          key: String(r.value),
          value: r.value,
          disabled: r.disabled
        }, v(r.label), 9, Fr))), 128))
      ], 16, Pr), [
        [we, a.value]
      ]),
      f(T, { name: "chevron-down" })
    ]));
  }
}), Ir = {}, Nr = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, qr = {
  key: 0,
  class: "at-sidebar__foot"
};
function jr(d, a) {
  return e(), n("aside", Nr, [
    Q(d.$slots, "header"),
    Q(d.$slots, "default"),
    d.$slots.footer ? (e(), n("div", qr, [
      Q(d.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const xr = /* @__PURE__ */ Re(Ir, [["render", jr]]), Rr = { class: "at-stat__label" }, Wr = { class: "at-stat__row" }, Kr = { class: "at-stat__value" }, Gr = ["viewBox"], Jr = ["d"], Zr = ["d"], Yr = ["cx", "cy"], Xr = {
  key: 1,
  class: "at-stat__foot"
}, Bt = 220, Ve = 32, ei = /* @__PURE__ */ P({
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
    const a = d, s = V(() => {
      const t = a.spark;
      if (!t || t.length < 2) return null;
      const r = Math.min(...t), c = Math.max(...t), m = c - r || 1, p = t.map((w, S) => [2 + S * (Bt - 4) / (t.length - 1), Ve - 3 - (w - r) / m * (Ve - 8)]), y = "M" + p.map((w) => w.map((S) => S.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: y, area: `${y} L${M[0].toFixed(1)} ${Ve} L2 ${Ve} Z`, end: M };
    });
    return (t, r) => (e(), n("div", {
      class: F(["at-stat", t.color && ["at-stat--striped", `at-tone-${t.color}`]])
    }, [
      i("span", Rr, v(t.label), 1),
      i("div", Wr, [
        i("span", Kr, [
          Q(t.$slots, "value", {}, () => [
            k(v(t.value), 1)
          ])
        ]),
        t.delta ? (e(), n("span", {
          key: 0,
          class: F(["at-stat__delta", t.trend && `at-stat__delta--${t.trend}`])
        }, v(t.delta), 3)) : h("", !0)
      ]),
      s.value ? (e(), n("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${Bt} ${Ve}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        i("path", {
          class: "area",
          d: s.value.area
        }, null, 8, Jr),
        i("path", {
          class: "line",
          d: s.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Zr),
        i("circle", {
          class: "end",
          cx: s.value.end[0],
          cy: s.value.end[1],
          r: "2.5"
        }, null, 8, Yr)
      ], 8, Gr)) : h("", !0),
      t.foot || t.$slots.foot ? (e(), n("span", Xr, [
        Q(t.$slots, "foot", {}, () => [
          k(v(t.foot), 1)
        ])
      ])) : h("", !0)
    ], 2));
  }
}), ti = {
  key: 0,
  class: "at-toggle"
}, ai = ["disabled"], ni = ["disabled"], si = /* @__PURE__ */ P({
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
    return (s, t) => s.label || s.$slots.default ? (e(), n("label", ti, [
      R(i("input", ae(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => a.value = r),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: s.disabled
      }), null, 16, ai), [
        [qe, a.value]
      ]),
      Q(s.$slots, "default", {}, () => [
        k(v(s.label), 1)
      ])
    ])) : R((e(), n("input", ae({ key: 1 }, s.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (r) => a.value = r),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: s.disabled
    }), null, 16, ni)), [
      [qe, a.value]
    ]);
  }
}), li = { class: "at-table-wrap" }, oi = { class: "at-table" }, ri = ["onClick"], ii = { key: 0 }, ui = ["colspan"], di = /* @__PURE__ */ P({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (a, s) => (e(), n("div", li, [
      i("table", oi, [
        i("thead", null, [
          i("tr", null, [
            (e(!0), n(b, null, D(a.columns, (t) => (e(), n("th", {
              key: t.key,
              class: F({ "at-num": t.align === "right" }),
              style: ee(t.width ? { width: t.width } : void 0)
            }, v(t.label), 7))), 128))
          ])
        ]),
        i("tbody", null, [
          (e(!0), n(b, null, D(a.rows, (t, r) => (e(), n("tr", {
            key: a.rowKey ? t[a.rowKey] : r,
            style: ee(a.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => a.$emit("rowClick", t)
          }, [
            (e(!0), n(b, null, D(a.columns, (c) => (e(), n("td", {
              key: c.key,
              class: F({ "at-num": c.align === "right" })
            }, [
              Q(a.$slots, `cell-${c.key}`, {
                row: t,
                value: t[c.key]
              }, () => [
                k(v(c.format ? c.format(t[c.key], t) : t[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, ri))), 128)),
          a.rows.length ? h("", !0) : (e(), n("tr", ii, [
            i("td", {
              colspan: a.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(a.empty ?? "Aucune donnée"), 9, ui)
          ]))
        ])
      ])
    ]));
  }
}), ci = ["aria-label"], pi = ["aria-selected", "disabled", "onClick"], vi = {
  key: 1,
  class: "at-count"
}, mi = /* @__PURE__ */ P({
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
    return (s, t) => (e(), n("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": s.label
    }, [
      (e(!0), n(b, null, D(s.items, (r) => (e(), n("button", {
        key: String(r.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": a.value === r.value,
        disabled: r.disabled,
        onClick: (c) => a.value = r.value
      }, [
        r.icon ? (e(), E(T, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : h("", !0),
        k(v(r.label) + " ", 1),
        r.count != null ? (e(), n("span", vi, v(r.count), 1)) : h("", !0)
      ], 8, pi))), 128))
    ], 8, ci));
  }
}), hi = /* @__PURE__ */ P({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (a, s) => (e(), n("span", {
      class: F(["at-tag", a.color !== "gray" && `at-tag--${a.color}`])
    }, [
      Q(a.$slots, "default", {}, () => [
        k(v(a.label), 1)
      ])
    ], 2));
  }
}), gi = ["rows", "placeholder", "disabled", "aria-invalid"], fi = /* @__PURE__ */ P({
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
    return (s, t) => R((e(), n("textarea", ae(s.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (r) => a.value = r),
      class: "at-input",
      rows: s.rows ?? 3,
      placeholder: s.placeholder,
      disabled: s.disabled,
      "aria-invalid": s.invalid || void 0
    }), null, 16, gi)), [
      [_e, a.value]
    ]);
  }
}), Gt = "atelier:theme", Jt = "atelier:density", Zt = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, Et = (d, a) => {
  try {
    localStorage.setItem(d, a);
  } catch {
  }
}, Ut = () => typeof document < "u" ? document.documentElement : null, Se = H(Zt(Gt) || "system"), Yt = H(Zt(Jt) || "comfortable"), Xt = H(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Pt = !1;
function ea() {
  if (Pt || typeof window > "u") return;
  Pt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (a) => {
    Xt.value = a.matches;
  }), ve(Se, (a) => {
    const s = Ut();
    s && (a === "system" ? s.removeAttribute("data-theme") : s.dataset.theme = a, Et(Gt, a));
  }, { immediate: !0 }), ve(Yt, (a) => {
    const s = Ut();
    s && (s.dataset.density = a, Et(Jt, a));
  }, { immediate: !0 });
}
function yi() {
  ea();
  const d = V(() => Se.value === "system" ? Xt.value ? "dark" : "light" : Se.value), a = () => {
    Se.value = d.value === "dark" ? "light" : "dark";
  };
  return za() && Da(() => {
  }), { mode: Se, resolved: d, toggle: a };
}
function bi() {
  return ea(), { density: Yt };
}
const ki = ["aria-expanded", "aria-label", "onClick"], _i = { class: "at-user__text" }, wi = { class: "at-user__name" }, $i = {
  key: 0,
  class: "at-user__sub"
}, Mi = /* @__PURE__ */ P({
  __name: "AtUserMenu",
  props: {
    name: {},
    email: {},
    src: {},
    theme: { type: Boolean, default: !0 },
    density: { type: Boolean, default: !0 }
  },
  emits: ["profile", "settings", "logout"],
  setup(d) {
    var p;
    const a = ((p = Qa()) == null ? void 0 : p.vnode.props) ?? {}, s = (y) => typeof a[y] == "function" || Array.isArray(a[y]), { mode: t } = yi(), { density: r } = bi(), c = [
      { value: "system", label: "Système", icon: "monitor" },
      { value: "light", label: "Clair", icon: "sun" },
      { value: "dark", label: "Sombre", icon: "moon" }
    ], m = [
      { value: "comfortable", label: "Confortable", icon: "list" },
      { value: "compact", label: "Compacte", icon: "menu" }
    ];
    return (y, M) => (e(), E(Rt, {
      placement: "right",
      "min-width": 232
    }, {
      trigger: L(({ toggle: w, open: S }) => [
        i("button", {
          type: "button",
          class: "at-user",
          "aria-haspopup": "menu",
          "aria-expanded": S,
          "aria-label": `Compte de ${y.name}`,
          onClick: w
        }, [
          f(ft, {
            name: y.name,
            src: y.src,
            size: "md",
            tone: "accent"
          }, null, 8, ["name", "src"]),
          i("span", _i, [
            i("span", wi, v(y.name), 1),
            y.email ? (e(), n("span", $i, v(y.email), 1)) : h("", !0)
          ]),
          f(T, { name: "chevron-right" })
        ], 8, ki)
      ]),
      default: L(() => [
        s("onProfile") || s("onSettings") || y.$slots.default ? (e(), n(b, { key: 0 }, [
          s("onProfile") ? (e(), E($e, {
            key: 0,
            icon: "person",
            onSelect: M[0] || (M[0] = (w) => y.$emit("profile"))
          }, {
            default: L(() => [
              k("Mon profil")
            ]),
            _: 1
          })) : h("", !0),
          s("onSettings") ? (e(), E($e, {
            key: 1,
            icon: "settings",
            onSelect: M[1] || (M[1] = (w) => y.$emit("settings"))
          }, {
            default: L(() => [
              k("Paramètres")
            ]),
            _: 1
          })) : h("", !0),
          Q(y.$slots, "default"),
          y.theme || y.density || s("onLogout") ? (e(), E(Ne, { key: 2 })) : h("", !0)
        ], 64)) : h("", !0),
        y.theme ? (e(), n(b, { key: 1 }, [
          f(mt, null, {
            default: L(() => [
              k("Thème")
            ]),
            _: 1
          }),
          (e(), n(b, null, D(c, (w) => f($e, {
            key: w.value,
            icon: w.icon,
            checked: z(t) === w.value,
            onSelect: (S) => t.value = w.value
          }, {
            default: L(() => [
              k(v(w.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        y.theme && y.density ? (e(), E(Ne, { key: 2 })) : h("", !0),
        y.density ? (e(), n(b, { key: 3 }, [
          f(mt, null, {
            default: L(() => [
              k("Densité")
            ]),
            _: 1
          }),
          (e(), n(b, null, D(m, (w) => f($e, {
            key: w.value,
            icon: w.icon,
            checked: z(r) === w.value,
            onSelect: (S) => r.value = w.value
          }, {
            default: L(() => [
              k(v(w.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        s("onLogout") ? (e(), n(b, { key: 4 }, [
          y.theme || y.density ? (e(), E(Ne, { key: 0 })) : h("", !0),
          f($e, {
            icon: "logout",
            onSelect: M[2] || (M[2] = (w) => y.$emit("logout"))
          }, {
            default: L(() => [
              k("Se déconnecter")
            ]),
            _: 1
          })
        ], 64)) : h("", !0)
      ]),
      _: 3
    }));
  }
}), Qi = {
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
}, Ai = (d) => `var(--${d})`, Bi = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(Ai), Ci = {
  AtAppShell: Ia,
  AtAvatar: ft,
  AtBadge: ja,
  AtBreadcrumbs: Ga,
  AtButton: I,
  AtCard: en,
  AtCheckbox: It,
  AtDataView: ho,
  AtDrawer: wo,
  AtDropdown: Rt,
  AtEmpty: Co,
  AtField: ct,
  AtIcon: T,
  AtIconTile: Kt,
  AtInput: pt,
  AtKbd: kt,
  AtLogo: jo,
  AtLogin: tr,
  AtMenu: xt,
  AtMenuItem: $e,
  AtMenuLabel: mt,
  AtMenuSeparator: Ne,
  AtModal: yr,
  AtNavGroup: _r,
  AtNavItem: Ar,
  AtPage: Lr,
  AtPopover: de,
  AtProgress: Nt,
  AtPropertyEditor: bt,
  AtPropertyList: Dr,
  AtPropertyValue: ce,
  AtSegment: Er,
  AtSelect: Or,
  AtSidebar: xr,
  AtStat: ei,
  AtSwitch: si,
  AtTable: di,
  AtTabs: mi,
  AtTag: hi,
  AtTextarea: fi,
  AtUserMenu: Mi
}, Ei = {
  install(d) {
    for (const [a, s] of Object.entries(Ci)) d.component(a, s);
  }
};
export {
  Ia as AtAppShell,
  ft as AtAvatar,
  ja as AtBadge,
  Ga as AtBreadcrumbs,
  I as AtButton,
  en as AtCard,
  It as AtCheckbox,
  ho as AtDataView,
  wo as AtDrawer,
  Rt as AtDropdown,
  Co as AtEmpty,
  ct as AtField,
  T as AtIcon,
  Kt as AtIconTile,
  pt as AtInput,
  kt as AtKbd,
  tr as AtLogin,
  jo as AtLogo,
  xt as AtMenu,
  $e as AtMenuItem,
  mt as AtMenuLabel,
  Ne as AtMenuSeparator,
  yr as AtModal,
  _r as AtNavGroup,
  Ar as AtNavItem,
  Lr as AtPage,
  de as AtPopover,
  Nt as AtProgress,
  bt as AtPropertyEditor,
  Dr as AtPropertyList,
  ce as AtPropertyValue,
  Er as AtSegment,
  Or as AtSelect,
  xr as AtSidebar,
  ei as AtStat,
  si as AtSwitch,
  di as AtTable,
  mi as AtTabs,
  hi as AtTag,
  fi as AtTextarea,
  Mi as AtUserMenu,
  Ei as Atelier,
  Oe as LAYOUTS,
  Ho as LOGO_TILE,
  je as NONE,
  ot as OPS,
  Tt as OP_LABEL,
  Di as WORDMARK,
  rn as addDays,
  vn as applyView,
  rt as brandGrid,
  Bi as chartColors,
  pn as compareRows,
  Dt as createView,
  Ai as cssVar,
  Ei as default,
  gn as defaultsFromFilters,
  Li as filter,
  xe as findOption,
  dt as formatDate,
  bn as formatMonth,
  X as getValue,
  mn as groupRows,
  Ot as icons,
  ne as isEmpty,
  vt as logoApps,
  cn as matchRule,
  hn as monthGrid,
  Ae as optionsOf,
  Si as registerIcons,
  zi as registerLogoApps,
  zt as shiftMonth,
  Ti as sort,
  Le as today,
  Qi as tokens,
  Me as uid,
  bi as useDensity,
  Wt as useId,
  yi as useTheme
};
//# sourceMappingURL=atelier.js.map

import { defineComponent as B, computed as $, openBlock as a, createElementBlock as n, normalizeStyle as J, normalizeClass as x, createBlock as O, createCommentVNode as f, renderSlot as L, createTextVNode as k, toDisplayString as v, ref as H, watch as pe, createElementVNode as u, createVNode as g, Fragment as b, renderList as S, resolveDynamicComponent as fa, withCtx as E, useModel as Z, withDirectives as q, mergeProps as ve, vModelCheckbox as Oe, mergeModels as K, onBeforeUnmount as ut, Teleport as dt, nextTick as Te, unref as z, withKeys as ya, vModelDynamic as lt, shallowRef as ba, vModelText as ke, withModifiers as ie, isRef as be, vModelSelect as _e, Transition as Lt, normalizeProps as ka, guardReactiveProps as _a, getCurrentScope as wa, onScopeDispose as $a } from "vue";
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
function ii(d) {
  Object.assign(Dt, d);
}
const Ma = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], V = /* @__PURE__ */ B({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const e = d, s = $(() => Dt[e.name] ?? "");
    return (t, r) => (a(), n("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: t.size,
      height: t.size,
      style: J(t.size !== 16 ? { width: t.size + "px", height: t.size + "px" } : void 0),
      role: t.label ? "img" : void 0,
      "aria-label": t.label,
      "aria-hidden": t.label ? void 0 : "true",
      innerHTML: s.value
    }, null, 12, Ma));
  }
}), Aa = ["href", "aria-label"], Ca = ["type", "disabled", "aria-busy", "aria-label"], Va = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, P = /* @__PURE__ */ B({
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
    const e = d, s = $(() => [
      "at-btn",
      `at-btn--${e.variant}`,
      e.size !== "md" && `at-btn--${e.size}`,
      e.iconOnly && "at-btn--icon"
    ]);
    return (t, r) => t.href && !t.disabled ? (a(), n("a", {
      key: 0,
      href: t.href,
      class: x(s.value),
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.icon ? (a(), O(V, {
        key: 0,
        name: t.icon
      }, null, 8, ["name"])) : f("", !0),
      L(t.$slots, "default", {}, () => [
        k(v(t.iconOnly ? "" : t.label), 1)
      ])
    ], 10, Aa)) : (a(), n("button", {
      key: 1,
      type: t.type,
      class: x(s.value),
      disabled: t.disabled || t.loading,
      "aria-busy": t.loading || void 0,
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.loading ? (a(), n("span", Va)) : t.icon ? (a(), O(V, {
        key: 1,
        name: t.icon
      }, null, 8, ["name"])) : f("", !0),
      t.iconOnly ? f("", !0) : L(t.$slots, "default", { key: 2 }, () => [
        k(v(t.label), 1)
      ])
    ], 10, Ca));
  }
}), Sa = { class: "at-shell__side" }, za = { class: "at-shell__main" }, Ta = { class: "at-topbar" }, La = /* @__PURE__ */ B({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: e }) {
    const s = d, t = H(!1), r = H();
    return pe(() => s.routeKey, () => {
      t.value = !1, r.value && (r.value.scrollTop = 0);
    }), e({ closeNav: () => t.value = !1 }), (c, m) => (a(), n("div", {
      class: x(["at-shell", t.value && "at-shell--open"])
    }, [
      u("div", Sa, [
        L(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: m[0] || (m[0] = (p) => t.value = !1)
      }),
      u("div", za, [
        u("header", Ta, [
          g(P, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: m[1] || (m[1] = (p) => t.value = !t.value)
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
}), Da = ["title"], Qa = ["src", "alt"], Qt = /* @__PURE__ */ B({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const e = d, s = $(() => e.name.split(/\s+/).filter(Boolean).map((t) => t[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (t, r) => (a(), n("span", {
      class: x(["at-avatar", t.size !== "sm" && `at-avatar--${t.size}`]),
      title: t.name
    }, [
      t.src ? (a(), n("img", {
        key: 0,
        src: t.src,
        alt: t.name
      }, null, 8, Qa)) : (a(), n(b, { key: 1 }, [
        k(v(s.value), 1)
      ], 64))
    ], 10, Da));
  }
}), xa = /* @__PURE__ */ B({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("span", {
      class: x(["at-badge", e.tone !== "neutral" && `at-badge--${e.tone}`])
    }, [
      L(e.$slots, "default", {}, () => [
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
}, Fa = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Ha = ["href", "onClick"], Oa = /* @__PURE__ */ B({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (e, s) => (a(), n("nav", Ba, [
      (a(!0), n(b, null, S(e.items, (t, r) => (a(), n(b, { key: r }, [
        r > 0 ? (a(), n("span", Ea, "/")) : f("", !0),
        r === e.items.length - 1 ? (a(), n("span", Fa, v(t.label), 1)) : (a(), n("a", {
          key: 2,
          href: t.href ?? "#",
          onClick: (c) => t.onClick && (c.preventDefault(), t.onClick())
        }, v(t.label), 9, Ha))
      ], 64))), 128))
    ]));
  }
}), Pa = {
  key: 0,
  class: "at-card__head"
}, Ua = {
  key: 0,
  class: "at-card__title"
}, Na = {
  key: 1,
  class: "at-card__desc"
}, Ia = {
  key: 1,
  class: "at-card__foot"
}, qa = /* @__PURE__ */ B({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(d) {
    return (e, s) => (a(), O(fa(e.href ? "a" : e.as || "section"), {
      href: e.href,
      class: x(["at-card", e.href && "at-card--link", e.color && ["at-card--striped", `at-tone-${e.color}`]])
    }, {
      default: E(() => [
        e.title || e.description || e.$slots.actions ? (a(), n("div", Pa, [
          u("div", null, [
            e.title ? (a(), n("h3", Ua, v(e.title), 1)) : f("", !0),
            e.description ? (a(), n("p", Na, v(e.description), 1)) : f("", !0)
          ]),
          L(e.$slots, "actions")
        ])) : f("", !0),
        L(e.$slots, "default"),
        e.$slots.footer ? (a(), n("div", Ia, [
          L(e.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), ja = {
  key: 0,
  class: "at-toggle"
}, Ra = ["indeterminate", "disabled"], Wa = ["indeterminate", "disabled"], Ka = /* @__PURE__ */ B({
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
    const e = Z(d, "modelValue");
    return (s, t) => s.label || s.$slots.default ? (a(), n("label", ja, [
      q(u("input", ve(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
        type: "checkbox",
        class: "at-check",
        indeterminate: s.indeterminate,
        disabled: s.disabled
      }), null, 16, Ra), [
        [Oe, e.value]
      ]),
      L(s.$slots, "default", {}, () => [
        k(v(s.label), 1)
      ])
    ])) : q((a(), n("input", ve({ key: 1 }, s.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (r) => e.value = r),
      type: "checkbox",
      class: "at-check",
      indeterminate: s.indeterminate,
      disabled: s.disabled
    }), null, 16, Wa)), [
      [Oe, e.value]
    ]);
  }
}), ue = /* @__PURE__ */ B({
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
  setup(d, { expose: e, emit: s }) {
    const t = Z(d, "open"), r = d, c = s, m = H(), p = H(), w = H({ top: -9999, left: -9999 }), A = $(() => {
      var F;
      return r.anchor ?? ((F = m.value) == null ? void 0 : F.firstElementChild) ?? m.value ?? null;
    });
    function C() {
      const F = A.value, N = p.value;
      if (!F || !N) return;
      const I = F.getBoundingClientRect(), re = N.offsetWidth, Y = N.offsetHeight;
      let le = r.align === "end" ? I.right - re : I.left;
      le = Math.max(8, Math.min(le, window.innerWidth - re - 8));
      let oe = I.bottom + r.offset;
      oe + Y > window.innerHeight - 8 && (oe = Math.max(8, I.top - Y - r.offset)), (Math.abs(oe - w.value.top) > 0.5 || Math.abs(le - w.value.left) > 0.5) && (w.value = { top: oe, left: le });
    }
    function D() {
      t.value && (t.value = !1, c("close"));
    }
    function U() {
      t.value ? D() : t.value = !0;
    }
    function j(F) {
      var I, re, Y;
      const N = F.target;
      (I = p.value) != null && I.contains(N) || (re = A.value) != null && re.contains(N) || (Y = N.closest) != null && Y.call(N, ".at-pop") || D();
    }
    function te(F) {
      var N, I;
      F.key === "Escape" && (F.stopPropagation(), D(), (I = (N = A.value) == null ? void 0 : N.focus) == null || I.call(N));
    }
    let _ = null;
    function M() {
      setTimeout(() => document.addEventListener("mousedown", j), 0), document.addEventListener("keydown", te, !0), window.addEventListener("resize", C), window.addEventListener("scroll", C, !0), Te(() => {
        C(), p.value && (_ = new ResizeObserver(C), _.observe(p.value));
      });
    }
    function Q() {
      document.removeEventListener("mousedown", j), document.removeEventListener("keydown", te, !0), window.removeEventListener("resize", C), window.removeEventListener("scroll", C, !0), _ == null || _.disconnect(), _ = null, w.value = { top: -9999, left: -9999 };
    }
    return pe(t, (F) => F ? M() : Q(), { immediate: !0 }), ut(Q), e({ place: C, close: D, toggle: U }), (F, N) => (a(), n(b, null, [
      F.$slots.trigger ? (a(), n("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: m,
        style: { display: "contents" }
      }, [
        L(F.$slots, "trigger", {
          toggle: U,
          open: t.value
        })
      ], 512)) : f("", !0),
      (a(), O(dt, { to: "body" }, [
        t.value ? (a(), n("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: J({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          L(F.$slots, "default", { close: D })
        ], 4)) : f("", !0)
      ]))
    ], 64));
  }
}), Ga = ["aria-valuenow", "aria-label"], Ja = { class: "at-progress__track" }, Za = {
  key: 0,
  class: "at-progress__label"
}, xt = /* @__PURE__ */ B({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const e = d, s = $(() => Math.max(0, Math.min(100, Math.round(e.value / e.max * 100))));
    return (t, r) => (a(), n("span", {
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
          style: J({ width: s.value + "%" })
        }, null, 4)
      ]),
      t.showLabel ? (a(), n("span", Za, v(s.value) + " %", 1)) : f("", !0)
    ], 8, Ga));
  }
}), Pe = "__none", ot = (d) => String(d).padStart(2, "0"), ct = (d) => `${d.getFullYear()}-${ot(d.getMonth() + 1)}-${ot(d.getDate())}`, Ve = () => ct(/* @__PURE__ */ new Date()), Ya = (d, e) => {
  const s = /* @__PURE__ */ new Date(d + "T00:00");
  return s.setDate(s.getDate() + e), ct(s);
}, we = () => Math.random().toString(36).slice(2, 10), ee = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, G = (d, e) => e.compute ? e.compute(d) : d[e.key], $e = (d, e) => typeof d.options == "function" ? d.options(e) : d.options ?? [], Ue = (d, e, s) => $e(d, e).find((t) => t.value === s), Se = (d) => !d.compute && !d.readonly && d.type !== "progress", Xa = ["status", "select", "relation", "person"], ze = (d) => Xa.includes(d.type), en = {
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
}, He = (d) => d.icon ?? en[d.type] ?? "text", Fe = [
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
}, Bt = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function tn(d, e, s, t = Ve()) {
  const r = G(d, e);
  if (!Bt.includes(s.op) && ee(s.value)) return !0;
  const c = (m) => String(m ?? "").toLowerCase();
  switch (s.op) {
    case "empty":
      return ee(r);
    case "notempty":
      return !ee(r);
    case "contains":
      return e.type === "multi" ? (r ?? []).includes(s.value) : c(r).includes(c(s.value));
    case "notcontains":
      return e.type === "multi" ? !(r ?? []).includes(s.value) : !c(r).includes(c(s.value));
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
      return !!r && r >= t && r <= Ya(t, 7);
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
function an(d, e, s) {
  const t = G(e, d), r = G(s, d), c = ee(t), m = ee(r);
  if (c || m) return c === m ? 0 : c ? 1 : -1;
  if (ze(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(t) - p.indexOf(r);
  }
  return d.type === "number" || d.type === "progress" ? t - r : d.type === "checkbox" ? Number(r) - Number(t) : d.type === "multi" ? t.length - r.length : String(t).localeCompare(String(r), "fr");
}
function nn(d, e, s, t = "") {
  const r = Object.fromEntries(e.map((A) => [A.key, A])), c = e.find((A) => A.type === "title"), m = t.trim().toLowerCase(), p = d.filter((A) => (!m || !c || String(A[c.key] ?? "").toLowerCase().includes(m)) && s.filters.every((C) => !r[C.prop] || tn(A, r[C.prop], C))), w = s.sorts.filter((A) => r[A.prop]);
  return w.length ? p.sort((A, C) => {
    for (const D of w) {
      const U = r[D.prop], j = ee(G(A, U)), te = ee(G(C, U));
      if (j !== te) return j ? 1 : -1;
      if (j) continue;
      const _ = an(U, A, C);
      if (_) return D.dir === "desc" ? -_ : _;
    }
    return 0;
  }) : p;
}
function sn(d, e, s = !1) {
  if (!e) return [{ key: Pe, option: null, rows: d }];
  const t = $e(e).map((m) => ({ key: m.value, option: m, rows: [] })), r = { key: Pe, option: null, rows: [] }, c = Object.fromEntries(t.map((m) => [m.key, m]));
  for (const m of d) (c[G(m, e)] ?? r).rows.push(m);
  return (r.rows.length || s) && t.push(r), s ? t : t.filter((m) => m.rows.length);
}
function ln(d) {
  const [e, s] = d.split("-").map(Number), r = (new Date(e, s - 1, 1).getDay() + 6) % 7, c = [];
  for (let m = 0; m < 42; m++) {
    const p = new Date(e, s - 1, 1 - r + m);
    c.push({ iso: ct(p), day: p.getDate(), outside: p.getMonth() !== s - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const Mt = (d, e) => {
  const [s, t] = d.split("-").map(Number), r = new Date(s, t - 1 + e, 1);
  return `${r.getFullYear()}-${ot(r.getMonth() + 1)}`;
};
function At(d, e = "table", s = {}) {
  return { id: we(), name: d, layout: e, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...s };
}
const ui = (d, e, s = "") => ({ id: we(), prop: d, op: e, value: s }), di = (d, e = "asc") => ({ id: we(), prop: d, dir: e });
function on(d, e) {
  const s = {};
  for (const t of d.filters) {
    const r = e.find((c) => c.key === t.prop);
    !r || !Se(r) || ee(t.value) || (t.op === "is" && (s[t.prop] = t.value), t.op === "contains" && r.type === "multi" && (s[t.prop] = [t.value]));
  }
  return s;
}
const rn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), un = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), Et = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function rt(d) {
  if (!d) return "";
  const e = /* @__PURE__ */ new Date(d + "T00:00");
  return (e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? rn : un).format(e);
}
const dn = (d) => {
  const [e, s] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(e, s - 1, 1));
}, cn = {
  key: 0,
  class: "at-pv-title"
}, pn = ["checked"], vn = {
  key: 2,
  class: "at-pv-empty"
}, mn = {
  key: 5,
  class: "at-pv-multi"
}, hn = {
  key: 6,
  class: "at-pv-person"
}, gn = { class: "at-ellipsis" }, fn = {
  key: 7,
  class: "at-pv-rel"
}, yn = { class: "at-ellipsis" }, bn = {
  key: 9,
  class: "at-num"
}, kn = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, de = /* @__PURE__ */ B({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const e = d, s = $(() => G(e.row, e.prop)), t = $(() => e.prop.type), r = $(() => ze(e.prop) ? Ue(e.prop, e.row, s.value) : void 0), c = $(() => t.value === "multi" ? (s.value ?? []).map((w) => Ue(e.prop, e.row, w)).filter(Boolean) : []), m = $(() => {
      var w, A;
      return t.value === "date" && !!((A = (w = e.prop).overdue) != null && A.call(w, e.row));
    }), p = $(() => {
      var w;
      return ((w = r.value) == null ? void 0 : w.label) ?? String(s.value ?? "");
    });
    return (w, A) => {
      var C, D, U;
      return t.value === "title" ? (a(), n("span", cn, v(s.value || "Sans titre"), 1)) : t.value === "checkbox" ? (a(), n("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!s.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, pn)) : z(ee)(s.value) ? (a(), n("span", vn, "—")) : t.value === "status" ? (a(), n("span", {
        key: 3,
        class: x(["at-badge", ((C = r.value) == null ? void 0 : C.tone) && r.value.tone !== "neutral" && `at-badge--${r.value.tone}`])
      }, v(p.value), 3)) : t.value === "select" ? (a(), n("span", {
        key: 4,
        class: x(["at-tag", ((D = r.value) == null ? void 0 : D.color) && r.value.color !== "gray" && `at-tag--${r.value.color}`])
      }, v(p.value), 3)) : t.value === "multi" ? (a(), n("span", mn, [
        (a(!0), n(b, null, S(c.value, (j) => (a(), n("span", {
          key: j.value,
          class: x(["at-tag", j.color && j.color !== "gray" && `at-tag--${j.color}`])
        }, v(j.label), 3))), 128))
      ])) : t.value === "person" ? (a(), n("span", hn, [
        g(Qt, { name: p.value }, null, 8, ["name"]),
        u("span", gn, v(p.value), 1)
      ])) : t.value === "relation" ? (a(), n("span", fn, [
        (U = r.value) != null && U.mark ? (a(), n("span", {
          key: 0,
          class: "at-pv-mark",
          style: J({ background: r.value.mark })
        }, null, 4)) : (a(), O(V, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", yn, v(r.value ? r.value.label : "Introuvable"), 1)
      ])) : t.value === "date" ? (a(), n("span", {
        key: 8,
        class: x(["at-pv-date", m.value && "at-pv-over"])
      }, v(z(rt)(s.value)), 3)) : t.value === "number" ? (a(), n("span", bn, v(z(Et).format(Number(s.value))) + v(w.prop.suffix ?? ""), 1)) : t.value === "progress" ? (a(), O(xt, {
        key: 10,
        value: Number(s.value)
      }, null, 8, ["value"])) : (a(), n("span", kn, v(s.value), 1));
    };
  }
}), _n = ["aria-label"], wn = { class: "at-menu-label" }, $n = ["aria-selected", "onClick"], Mn = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, An = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Cn = ["aria-label"], Vn = { class: "at-menu-label" }, Sn = ["aria-checked", "onClick"], zn = ["checked"], Tn = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Ln = { class: "at-menu-title" }, Dn = ["value", "aria-label"], Qn = { class: "at-menu-actions" }, xn = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Bn = { class: "at-menu-title" }, En = ["type", "aria-label"], pt = /* @__PURE__ */ B({
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
  setup(d, { emit: e }) {
    const s = Z(d, "open"), t = d, r = e, c = H(""), m = H(), p = $(() => {
      const _ = t.prop;
      return _ ? ze(_) ? "options" : _.type === "multi" ? "multi" : _.type === "date" ? "date" : "input" : null;
    }), w = $(() => t.prop ? $e(t.prop, t.row) : []), A = $(() => t.prop && t.row ? t.row[t.prop.key] : null);
    pe(s, (_) => {
      _ && (c.value = A.value ?? "", Te(() => {
        var Q, F;
        const M = (Q = m.value) == null ? void 0 : Q.querySelector("input, button");
        M == null || M.focus(), (F = M == null ? void 0 : M.select) == null || F.call(M);
      }));
    });
    const C = (_) => ({ ...t.row, [t.prop.key]: _ });
    function D(_, M = !0) {
      r("update", _), M && (s.value = !1);
    }
    function U(_) {
      const M = [...A.value ?? []], Q = M.indexOf(_);
      Q < 0 ? M.push(_) : M.splice(Q, 1), D(M, !1);
    }
    function j() {
      var M;
      let _ = c.value;
      ((M = t.prop) == null ? void 0 : M.type) === "number" && (_ = _ === "" || _ == null ? null : Number(_)), _ !== A.value && r("update", _), s.value = !1;
    }
    function te() {
      var _;
      if (p.value === "input") {
        let M = c.value;
        ((_ = t.prop) == null ? void 0 : _.type) === "number" && (M = M === "" ? null : Number(M)), M !== A.value && r("update", M);
      }
    }
    return (_, M) => (a(), O(ue, {
      open: s.value,
      "onUpdate:open": M[5] || (M[5] = (Q) => s.value = Q),
      anchor: _.anchor,
      onClose: te
    }, {
      default: E(() => [
        _.prop ? (a(), n("div", {
          key: 0,
          ref_key: "box",
          ref: m
        }, [
          p.value === "options" ? (a(), n("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": _.prop.name
          }, [
            u("div", wn, v(_.prop.name), 1),
            (a(!0), n(b, null, S(w.value, (Q) => (a(), n("button", {
              key: Q.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": Q.value === A.value,
              onClick: (F) => D(Q.value)
            }, [
              g(de, {
                prop: _.prop,
                row: C(Q.value)
              }, null, 8, ["prop", "row"]),
              Q.value === A.value ? (a(), O(V, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : f("", !0)
            ], 8, $n))), 128)),
            w.value.length ? f("", !0) : (a(), n("div", Mn, "Aucune option disponible")),
            _.prop.required ? f("", !0) : (a(), n(b, { key: 1 }, [
              An,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: M[0] || (M[0] = (Q) => D(null))
              }, [
                g(V, { name: "x" }),
                k("Effacer")
              ])
            ], 64))
          ], 8, _n)) : p.value === "multi" ? (a(), n("div", {
            key: 1,
            class: "at-menu",
            "aria-label": _.prop.name
          }, [
            u("div", Vn, v(_.prop.name), 1),
            (a(!0), n(b, null, S(w.value, (Q) => (a(), n("button", {
              key: Q.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (A.value ?? []).includes(Q.value),
              onClick: (F) => U(Q.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (A.value ?? []).includes(Q.value)
              }, null, 8, zn),
              u("span", {
                class: x(["at-tag", Q.color && Q.color !== "gray" && `at-tag--${Q.color}`])
              }, v(Q.label), 3)
            ], 8, Sn))), 128))
          ], 8, Cn)) : p.value === "date" ? (a(), n("div", Tn, [
            u("span", Ln, v(_.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: A.value ?? "",
              "aria-label": _.prop.name,
              onChange: M[1] || (M[1] = (Q) => D(Q.target.value || null, !1))
            }, null, 40, Dn),
            u("div", Qn, [
              g(P, {
                size: "sm",
                onClick: M[2] || (M[2] = (Q) => D(z(Ve)()))
              }, {
                default: E(() => [
                  k("Aujourd’hui")
                ]),
                _: 1
              }),
              g(P, {
                size: "sm",
                variant: "ghost",
                onClick: M[3] || (M[3] = (Q) => D(null))
              }, {
                default: E(() => [
                  k("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (a(), n("div", xn, [
            u("span", Bn, v(_.prop.name), 1),
            q(u("input", {
              "onUpdate:modelValue": M[4] || (M[4] = (Q) => c.value = Q),
              class: "at-input",
              type: _.prop.type === "number" ? "number" : "text",
              "aria-label": _.prop.name,
              onKeydown: ya(j, ["enter"])
            }, null, 40, En), [
              [lt, c.value]
            ])
          ]))
        ], 512)) : f("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Fn = { class: "at-dv" }, Hn = { class: "at-dv-viewsbar" }, On = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Pn = ["aria-selected", "title", "onClick"], Un = { class: "at-toolbar at-dv-toolbar" }, Nn = {
  key: 0,
  class: "at-dv-n"
}, In = {
  key: 0,
  class: "at-dv-n"
}, qn = { class: "at-input-wrap at-dv-search" }, jn = {
  key: 0,
  class: "at-dv-chips"
}, Rn = { class: "at-table-wrap" }, Wn = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Kn = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Gn = { class: "at-cell-check" }, Jn = ["checked", "indeterminate"], Zn = { class: "at-th" }, Yn = ["onMousedown"], Xn = { class: "at-cell-check" }, es = {
  key: 0,
  class: "at-dv-grouprow"
}, ts = ["colspan"], as = ["aria-expanded", "onClick"], ns = {
  key: 1,
  class: "at-pv-empty"
}, ss = { class: "at-count" }, ls = ["aria-selected"], os = { class: "at-cell-check" }, rs = ["checked", "onChange"], is = ["onClick"], us = ["onClick"], ds = /* @__PURE__ */ u("td", null, null, -1), cs = { class: "at-dv-newrow" }, ps = /* @__PURE__ */ u("td", null, null, -1), vs = ["colspan"], ms = ["onClick"], hs = /* @__PURE__ */ u("td", null, null, -1), gs = /* @__PURE__ */ u("td", null, null, -1), fs = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, ys = { class: "at-num" }, bs = {
  key: 2,
  class: "at-dv-board"
}, ks = {
  key: 0,
  class: "at-empty"
}, _s = ["onDragover", "onDrop"], ws = { class: "at-dv-colhead" }, $s = {
  key: 1,
  class: "at-pv-empty"
}, Ms = { class: "at-count" }, As = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), Cs = { class: "at-dv-cards" }, Vs = ["onDragstart", "onClick"], Ss = { class: "at-dv-cardtitle" }, zs = {
  key: 0,
  class: "at-dv-cardprops"
}, Ts = ["onClick"], Ls = { key: 3 }, Ds = {
  key: 0,
  class: "at-empty"
}, Qs = {
  key: 1,
  class: "at-dv-list"
}, xs = {
  key: 0,
  class: "at-dv-lgroup"
}, Bs = ["aria-expanded", "onClick"], Es = {
  key: 1,
  class: "at-pv-empty"
}, Fs = { class: "at-count" }, Hs = ["onClick"], Os = { class: "at-pv-title" }, Ps = { class: "at-dv-liprops" }, Us = { class: "at-dv-newline" }, Ns = { class: "at-dv-calhead" }, Is = { class: "at-dv-calmonth" }, qs = { class: "at-dv-calnote" }, js = { class: "at-dv-calwrap" }, Rs = { class: "at-dv-calgrid" }, Ws = { class: "at-dv-calgrid" }, Ks = ["onDragover", "onDrop"], Gs = { class: "at-dv-daynum" }, Js = ["aria-label", "onClick"], Zs = ["onDragstart", "onClick"], Ys = {
  class: "at-menu",
  role: "menu"
}, Xs = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), el = ["onClick"], tl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, al = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), nl = { class: "at-rules" }, sl = {
  key: 0,
  class: "at-menu-empty"
}, ll = { class: "at-select" }, ol = ["onUpdate:modelValue", "onChange"], rl = ["value"], il = { class: "at-select" }, ul = ["onUpdate:modelValue"], dl = ["value"], cl = {
  key: 0,
  class: "at-select"
}, pl = ["onUpdate:modelValue"], vl = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), ml = ["value"], hl = ["onUpdate:modelValue"], gl = ["onUpdate:modelValue"], fl = ["onUpdate:modelValue"], yl = { key: 1 }, bl = { class: "at-menu-actions" }, kl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, _l = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), wl = { class: "at-rules" }, $l = {
  key: 0,
  class: "at-menu-empty"
}, Ml = { class: "at-select" }, Al = ["onUpdate:modelValue"], Cl = ["value"], Vl = { class: "at-select" }, Sl = ["onUpdate:modelValue"], zl = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Tl = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), Ll = [
  zl,
  Tl
], Dl = { class: "at-menu-actions" }, Ql = {
  class: "at-menu",
  role: "menu"
}, xl = { class: "at-menu-label" }, Bl = ["onClick"], El = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Fl = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Hl = ["draggable", "onDragstart", "onDragover", "onDrop"], Ol = { class: "at-pi-name" }, Pl = ["aria-label", "checked", "disabled", "onChange"], Ul = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Nl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Il = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, ql = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), jl = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Rl = ["aria-pressed", "onClick"], Wl = {
  key: 0,
  class: "at-field-row"
}, Kl = { class: "at-select" }, Gl = ["value"], Jl = {
  key: 0,
  value: ""
}, Zl = ["value"], Yl = {
  key: 1,
  class: "at-field-row"
}, Xl = /* @__PURE__ */ u("span", null, "Date utilisée", -1), eo = { class: "at-select" }, to = ["value"], ao = ["value"], no = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), so = ["disabled"], lo = /* @__PURE__ */ B({
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
  setup(d, { emit: e }) {
    const s = d, t = Z(d, "views"), r = Z(d, "activeView"), c = e, m = (o) => o[s.rowKey], p = $(() => t.value.find((o) => o.id === r.value) ?? t.value[0]), w = $(() => Object.fromEntries(s.schema.map((o) => [o.key, o]))), A = $(() => s.schema.find((o) => o.type === "title")), C = $(() => {
      var o;
      return ((o = A.value) == null ? void 0 : o.key) ?? s.rowKey;
    }), D = $(() => {
      const o = (p.value.order ?? []).filter((y) => w.value[y]);
      for (const y of s.schema) o.includes(y.key) || o.push(y.key);
      const i = o.indexOf(C.value);
      return i > 0 && (o.splice(i, 1), o.unshift(C.value)), o.map((y) => w.value[y]);
    }), U = $(() => D.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), j = $(() => U.value.filter((o) => o.type !== "title")), te = $(() => s.schema.filter(ze)), _ = $(() => s.schema.filter((o) => o.type === "date")), M = $(() => s.schema.find((o) => o.type === "status")), Q = H(""), F = $(() => nn(s.rows, s.schema, p.value, Q.value)), N = $(() => {
      var i, y;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((i = M.value) == null ? void 0 : i.key) ?? ((y = te.value[0]) == null ? void 0 : y.key) ?? null : o;
    }), I = $(() => N.value && p.value.layout !== "calendar" ? w.value[N.value] : null), re = $(() => sn(F.value, I.value, p.value.layout === "board")), Y = (o) => ({ [N.value]: o === Pe ? null : o }), le = $(() => p.value.filters.filter((o) => w.value[o.prop])), oe = $(() => p.value.sorts.filter((o) => w.value[o.prop])), Ie = H({}), ae = H(null), ce = H(null);
    function ne(o, i) {
      if (ae.value === o && ce.value === i) {
        ae.value = null;
        return;
      }
      ce.value = i ?? null, ae.value = o;
    }
    const he = (o) => $({ get: () => ae.value === o, set: (i) => {
      !i && ae.value === o && (ae.value = null);
    } }), qe = he("add"), je = he("filter"), Re = he("sort"), We = he("group"), Ke = he("props"), Ge = he("settings");
    function jt(o) {
      o.id === p.value.id ? ne("settings", Ie.value[o.id]) : r.value = o.id;
    }
    const mt = () => {
      var o, i;
      return ((o = M.value) == null ? void 0 : o.key) ?? ((i = te.value[0]) == null ? void 0 : i.key) ?? null;
    };
    function Rt(o) {
      const i = At(Fe.find((y) => y.value === o).label, o, { groupBy: o === "board" ? mt() : null });
      t.value.push(i), r.value = i.id, ae.value = null, Te(() => ne("settings", Ie.value[i.id]));
    }
    function Wt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = mt());
    }
    function Kt() {
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", t.value.push(o), r.value = o.id, ae.value = null;
    }
    function Gt() {
      if (t.value.length < 2) return;
      const o = t.value.indexOf(p.value);
      t.value.splice(o, 1), r.value = t.value[Math.max(0, o - 1)].id, ae.value = null;
    }
    pe(() => p.value.id, () => {
      R.value = [], ae.value = null;
    });
    function Jt() {
      const o = s.schema.find((i) => i.type !== "title" && i.type !== "progress") ?? s.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: nt[o.type][0], value: "" });
    }
    function Zt(o) {
      o.op = nt[w.value[o.prop].type][0], o.value = "";
    }
    const Yt = (o) => {
      var i;
      return nt[(i = w.value[o.prop]) == null ? void 0 : i.type] ?? [];
    }, ht = (o) => !Bt.includes(o.op);
    function Le(o) {
      const i = w.value[o.prop];
      return i ? ze(i) || i.type === "multi" ? "options" : i.type === "date" ? "date" : i.type === "number" || i.type === "progress" ? "number" : "text" : "text";
    }
    function Je(o) {
      var W;
      const i = w.value[o.prop];
      let y = "";
      if (ht(o)) {
        const l = Le(o);
        y = l === "options" ? ((W = Ue(i, void 0, o.value)) == null ? void 0 : W.label) ?? "…" : l === "date" ? rt(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: i.name, op: $t[o.op], val: y };
    }
    function Xt() {
      const o = p.value.sorts.map((y) => y.prop), i = s.schema.find((y) => !o.includes(y.key)) ?? s.schema[0];
      p.value.sorts.push({ id: we(), prop: i.key, dir: "asc" });
    }
    const gt = (o, i) => {
      const y = o.indexOf(i);
      y >= 0 && o.splice(y, 1);
    };
    function ea() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Ze(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (ae.value = null);
    }
    function ta(o) {
      const i = p.value.hidden, y = i.indexOf(o.key);
      y < 0 ? i.push(o.key) : i.splice(y, 1);
    }
    function ft(o) {
      p.value.hidden = o ? [] : s.schema.filter((i) => i.type !== "title").map((i) => i.key);
    }
    const Me = H(null), De = H(null);
    function aa(o) {
      if (Me.value == null) return;
      const i = D.value.map((W) => W.key), [y] = i.splice(Me.value, 1);
      i.splice(o, 0, y), p.value.order = i, Me.value = null, De.value = null;
    }
    const Ye = (o) => p.value.widths[o.key] ?? o.width ?? 160, na = $(() => 36 + U.value.reduce((o, i) => o + Ye(i), 0) + 44), Xe = H(null);
    function sa(o, i) {
      const y = o.clientX, W = Ye(i);
      Xe.value = i.key;
      const l = (T) => {
        p.value.widths[i.key] = Math.max(70, Math.round(W + T.clientX - y));
      }, h = () => {
        Xe.value = null, window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", h);
      };
      window.addEventListener("mousemove", l), window.addEventListener("mouseup", h);
    }
    const R = H([]), et = $(() => F.value.length > 0 && F.value.every((o) => R.value.includes(m(o)))), la = $(() => R.value.length > 0 && !et.value);
    function oa(o) {
      const i = R.value.indexOf(m(o));
      i < 0 ? R.value.push(m(o)) : R.value.splice(i, 1);
    }
    function ra() {
      R.value = et.value ? [] : F.value.map(m);
    }
    function ia() {
      c("delete", s.rows.filter((o) => R.value.includes(m(o)))), R.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function yt(o) {
      const i = p.value.collapsed, y = i.indexOf(o);
      y < 0 ? i.push(o) : i.splice(y, 1);
    }
    function tt(o) {
      const i = F.value;
      if (o.type === "title") return { label: "Total", value: String(i.length) };
      if (o.type === "number") return { label: "Somme", value: Et.format(i.reduce((y, W) => y + (Number(G(W, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && i.length) return { label: "Moyenne", value: Math.round(i.reduce((y, W) => y + Number(G(W, o)), 0) / i.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const y = i.filter((W) => o.overdue(W)).length;
        return y ? { label: "En retard", value: String(y) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(i.filter((y) => G(y, o)).length) } : null;
    }
    const fe = ba(null), bt = H(null), at = H(!1);
    function ua(o, i, y) {
      if (y.type === "title") {
        c("open", i);
        return;
      }
      if (Se(y)) {
        if (y.type === "checkbox") {
          c("update", i, y.key, !i[y.key]);
          return;
        }
        bt.value = o.currentTarget, fe.value = { row: i, prop: y }, at.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...on(p.value, s.schema), ...o });
    }
    const Qe = H(null), ye = H(null);
    function kt(o, i) {
      Qe.value = m(i), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(m(i))));
    }
    function xe() {
      Qe.value = null, ye.value = null;
    }
    const _t = () => s.rows.find((o) => m(o) === Qe.value);
    function da(o) {
      const i = _t();
      i && N.value && c("update", i, N.value, o === Pe ? null : o), xe();
    }
    function ca(o) {
      const i = _t();
      i && se.value && c("update", i, se.value, o), xe();
    }
    const se = $(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = _.value[0]) == null ? void 0 : o.key) ?? null;
    }), Be = $(() => p.value.month ?? Ve().slice(0, 7)), pa = $(() => ln(Be.value).map((o) => ({ ...o, today: o.iso === Ve(), rows: se.value ? F.value.filter((i) => i[se.value] === o.iso) : [] }))), wt = $(() => se.value ? F.value.filter((o) => !o[se.value]).length : 0), va = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, ma = (o) => {
      const i = M.value, y = i ? Ue(i, o, o[i.key]) : void 0;
      return va[(y == null ? void 0 : y.tone) ?? "neutral"];
    }, ha = (o) => {
      const i = M.value;
      if (!i) return !1;
      const y = $e(i, o);
      return y.length > 0 && o[i.key] === y[y.length - 1].value;
    }, ga = (o) => {
      var i;
      return ((i = Fe.find((y) => y.value === o)) == null ? void 0 : i.icon) ?? "table";
    }, Ee = $(() => I.value ? `Sans ${I.value.name.toLowerCase()}` : "");
    return (o, i) => {
      var y, W;
      return a(), n("section", Fn, [
        u("div", Hn, [
          o.hideViews ? f("", !0) : (a(), n(b, { key: 0 }, [
            u("div", On, [
              (a(!0), n(b, null, S(t.value, (l) => (a(), n("button", {
                key: l.id,
                ref_for: !0,
                ref: (h) => {
                  h && (Ie.value[l.id] = h);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": l.id === p.value.id,
                title: l.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (h) => jt(l)
              }, [
                g(V, {
                  name: ga(l.layout)
                }, null, 8, ["name"]),
                k(v(l.name), 1)
              ], 8, Pn))), 128))
            ]),
            g(P, {
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: i[0] || (i[0] = (l) => ne("add", l.currentTarget))
            })
          ], 64)),
          u("div", Un, [
            g(P, {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: x({ "is-on": le.value.length }),
              onClick: i[1] || (i[1] = (l) => ne("filter", l.currentTarget))
            }, {
              default: E(() => [
                k(" Filtrer"),
                le.value.length ? (a(), n("span", Nn, v(le.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            g(P, {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: x({ "is-on": oe.value.length }),
              onClick: i[2] || (i[2] = (l) => ne("sort", l.currentTarget))
            }, {
              default: E(() => [
                k(" Trier"),
                oe.value.length ? (a(), n("span", In, v(oe.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            p.value.layout !== "calendar" ? (a(), O(P, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: x({ "is-on": p.value.groupBy }),
              onClick: i[3] || (i[3] = (l) => ne("group", l.currentTarget))
            }, {
              default: E(() => [
                k("Grouper")
              ]),
              _: 1
            }, 8, ["class"])) : f("", !0),
            g(P, {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: i[4] || (i[4] = (l) => ne("props", l.currentTarget))
            }, {
              default: E(() => [
                k("Propriétés")
              ]),
              _: 1
            }),
            u("div", qn, [
              g(V, { name: "search" }),
              q(u("input", {
                "onUpdate:modelValue": i[5] || (i[5] = (l) => Q.value = l),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [ke, Q.value]
              ])
            ]),
            o.hideViews ? f("", !0) : (a(), O(P, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: i[6] || (i[6] = (l) => ne("settings", l.currentTarget))
            })),
            g(P, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: i[7] || (i[7] = (l) => me())
            }, {
              default: E(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        le.value.length || oe.value.length ? (a(), n("div", jn, [
          (a(!0), n(b, null, S(le.value, (l) => (a(), n("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: i[8] || (i[8] = (h) => ne("filter", h.currentTarget))
          }, [
            g(V, { name: "filter" }),
            k(v(Je(l).name) + " " + v(Je(l).op) + " ", 1),
            u("b", null, v(Je(l).val), 1)
          ]))), 128)),
          (a(!0), n(b, null, S(oe.value, (l) => (a(), n("button", {
            key: l.id,
            type: "button",
            class: "at-dv-chip",
            onClick: i[9] || (i[9] = (h) => ne("sort", h.currentTarget))
          }, [
            g(V, { name: "sort" }),
            k(v(w.value[l.prop].name) + " ", 1),
            u("b", null, v(l.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          g(P, {
            variant: "ghost",
            size: "sm",
            onClick: ea
          }, {
            default: E(() => [
              k("Tout effacer")
            ]),
            _: 1
          })
        ])) : f("", !0),
        p.value.layout === "table" ? (a(), n(b, { key: 1 }, [
          u("div", Rn, [
            u("table", {
              class: "at-table at-dv-table",
              style: J({ width: na.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                Wn,
                (a(!0), n(b, null, S(U.value, (l) => (a(), n("col", {
                  key: l.key,
                  style: J({ width: Ye(l) + "px" })
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
                      checked: et.value,
                      indeterminate: la.value,
                      onChange: ra
                    }, null, 40, Jn)
                  ]),
                  (a(!0), n(b, null, S(U.value, (l) => (a(), n("th", {
                    key: l.key,
                    class: x({ "at-num": l.type === "number" })
                  }, [
                    u("span", Zn, [
                      g(V, {
                        name: z(He)(l)
                      }, null, 8, ["name"]),
                      k(v(l.name), 1)
                    ]),
                    u("span", {
                      class: x(["at-dv-resize", Xe.value === l.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ie((h) => sa(h, l), ["prevent"])
                    }, null, 42, Yn)
                  ], 2))), 128)),
                  u("th", Xn, [
                    g(P, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: i[10] || (i[10] = (l) => ne("props", l.currentTarget))
                    })
                  ])
                ])
              ]),
              (a(!0), n(b, null, S(re.value, (l) => (a(), n("tbody", {
                key: l.key
              }, [
                I.value ? (a(), n("tr", es, [
                  u("td", {
                    colspan: U.value.length + 2
                  }, [
                    u("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !ge(l.key),
                      onClick: (h) => yt(l.key)
                    }, [
                      g(V, {
                        name: "chevron-down",
                        class: x({ "at-rot": ge(l.key) })
                      }, null, 8, ["class"]),
                      l.option ? (a(), O(de, {
                        key: 0,
                        prop: I.value,
                        row: Y(l.key)
                      }, null, 8, ["prop", "row"])) : (a(), n("span", ns, v(Ee.value), 1)),
                      u("span", ss, v(l.rows.length), 1)
                    ], 8, as)
                  ], 8, ts)
                ])) : f("", !0),
                ge(l.key) ? f("", !0) : (a(), n(b, { key: 1 }, [
                  (a(!0), n(b, null, S(l.rows, (h) => (a(), n("tr", {
                    key: m(h),
                    "aria-selected": R.value.includes(m(h)) ? "true" : void 0
                  }, [
                    u("td", os, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: R.value.includes(m(h)),
                        onChange: (T) => oa(h)
                      }, null, 40, rs)
                    ]),
                    (a(!0), n(b, null, S(U.value, (T) => (a(), n("td", {
                      key: T.key,
                      class: x({ "at-num": T.type === "number", "at-dv-titlecell": T.type === "title", "is-edit": T.type !== "title" && z(Se)(T) }),
                      onClick: (X) => ua(X, h, T)
                    }, [
                      g(de, {
                        prop: T,
                        row: h
                      }, null, 8, ["prop", "row"]),
                      T.type === "title" ? (a(), n("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ie((X) => c("open", h), ["stop"])
                      }, "Ouvrir", 8, us)) : f("", !0)
                    ], 10, is))), 128)),
                    ds
                  ], 8, ls))), 128)),
                  u("tr", cs, [
                    ps,
                    u("td", {
                      colspan: U.value.length + 1
                    }, [
                      u("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (h) => me(I.value ? Y(l.key) : {})
                      }, [
                        g(V, { name: "plus" }),
                        k(v(o.newLabel), 1)
                      ], 8, ms)
                    ], 8, vs)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  hs,
                  (a(!0), n(b, null, S(U.value, (l) => (a(), n("td", {
                    key: l.key,
                    class: x({ "at-num": l.type === "number" })
                  }, [
                    tt(l) ? (a(), n(b, { key: 0 }, [
                      k(v(tt(l).label) + " ", 1),
                      u("b", null, v(tt(l).value), 1)
                    ], 64)) : f("", !0)
                  ], 2))), 128)),
                  gs
                ])
              ])
            ], 4)
          ]),
          R.value.length ? (a(), n("div", fs, [
            u("span", null, [
              u("b", ys, v(R.value.length), 1),
              k(" sélectionnée" + v(R.value.length > 1 ? "s" : ""), 1)
            ]),
            g(P, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: ia
            }, {
              default: E(() => [
                k("Supprimer")
              ]),
              _: 1
            }),
            g(P, {
              variant: "ghost",
              size: "sm",
              onClick: i[11] || (i[11] = (l) => R.value = [])
            }, {
              default: E(() => [
                k("Désélectionner")
              ]),
              _: 1
            })
          ])) : f("", !0)
        ], 64)) : p.value.layout === "board" ? (a(), n("div", bs, [
          I.value ? (a(!0), n(b, { key: 1 }, S(re.value, (l) => {
            var h;
            return a(), n("div", {
              key: l.key,
              class: x(["at-dv-col", ye.value === l.key && "over"]),
              onDragover: ie((T) => ye.value = l.key, ["prevent"]),
              onDragleave: i[12] || (i[12] = ie((T) => ye.value = null, ["self"])),
              onDrop: ie((T) => da(l.key), ["prevent"])
            }, [
              u("div", ws, [
                l.option ? (a(), O(de, {
                  key: 0,
                  prop: I.value,
                  row: Y(l.key)
                }, null, 8, ["prop", "row"])) : (a(), n("span", $s, v(Ee.value), 1)),
                u("span", Ms, v(l.rows.length), 1),
                As,
                g(P, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((h = l.option) == null ? void 0 : h.label) ?? Ee.value}`,
                  onClick: (T) => me(Y(l.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", Cs, [
                (a(!0), n(b, null, S(l.rows, (T) => (a(), n("button", {
                  key: m(T),
                  type: "button",
                  class: x(["at-dv-card", Qe.value === m(T) && "dragging"]),
                  draggable: "true",
                  onDragstart: (X) => kt(X, T),
                  onDragend: xe,
                  onClick: (X) => c("open", T)
                }, [
                  u("span", Ss, v(T[C.value] || "Sans titre"), 1),
                  j.value.some((X) => !z(ee)(z(G)(T, X)) || X.type === "checkbox") ? (a(), n("span", zs, [
                    (a(!0), n(b, null, S(j.value, (X) => (a(), n(b, {
                      key: X.key
                    }, [
                      z(ee)(z(G)(T, X)) ? f("", !0) : (a(), O(de, {
                        key: 0,
                        prop: X,
                        row: T
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : f("", !0)
                ], 42, Vs))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (T) => me(Y(l.key))
                }, [
                  g(V, { name: "plus" }),
                  k(v(o.newLabel), 1)
                ], 8, Ts)
              ])
            ], 42, _s);
          }), 128)) : (a(), n("div", ks, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (a(), n("div", Ls, [
          F.value.length ? (a(), n("div", Qs, [
            (a(!0), n(b, null, S(re.value, (l) => (a(), n(b, {
              key: l.key
            }, [
              I.value ? (a(), n("div", xs, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(l.key),
                  onClick: (h) => yt(l.key)
                }, [
                  g(V, {
                    name: "chevron-down",
                    class: x({ "at-rot": ge(l.key) })
                  }, null, 8, ["class"]),
                  l.option ? (a(), O(de, {
                    key: 0,
                    prop: I.value,
                    row: Y(l.key)
                  }, null, 8, ["prop", "row"])) : (a(), n("span", Es, v(Ee.value), 1)),
                  u("span", Fs, v(l.rows.length), 1)
                ], 8, Bs)
              ])) : f("", !0),
              ge(l.key) ? f("", !0) : (a(!0), n(b, { key: 1 }, S(l.rows, (h) => (a(), n("button", {
                key: m(h),
                type: "button",
                class: "at-dv-li",
                onClick: (T) => c("open", h)
              }, [
                u("span", Os, v(h[C.value] || "Sans titre"), 1),
                u("span", Ps, [
                  (a(!0), n(b, null, S(j.value, (T) => (a(), n(b, {
                    key: T.key
                  }, [
                    z(ee)(z(G)(h, T)) ? f("", !0) : (a(), O(de, {
                      key: 0,
                      prop: T,
                      row: h
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, Hs))), 128))
            ], 64))), 128)),
            u("div", Us, [
              u("button", {
                type: "button",
                class: "at-dv-new",
                onClick: i[14] || (i[14] = (l) => me())
              }, [
                g(V, { name: "plus" }),
                k(v(o.newLabel), 1)
              ])
            ])
          ])) : (a(), n("div", Ds, [
            k("Aucun élément ne correspond à cette vue."),
            g(P, {
              size: "sm",
              icon: "plus",
              onClick: i[13] || (i[13] = (l) => me())
            }, {
              default: E(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (a(), n(b, { key: 4 }, [
          u("div", Ns, [
            u("span", Is, v(z(dn)(Be.value)), 1),
            g(P, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: i[15] || (i[15] = (l) => p.value.month = z(Mt)(Be.value, -1))
            }),
            g(P, {
              size: "sm",
              onClick: i[16] || (i[16] = (l) => p.value.month = z(Ve)().slice(0, 7))
            }, {
              default: E(() => [
                k("Aujourd’hui")
              ]),
              _: 1
            }),
            g(P, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: i[17] || (i[17] = (l) => p.value.month = z(Mt)(Be.value, 1))
            }),
            u("span", qs, [
              se.value ? (a(), n(b, { key: 0 }, [
                k("Par " + v(w.value[se.value].name.toLowerCase()), 1),
                wt.value ? (a(), n(b, { key: 0 }, [
                  k(" · " + v(wt.value) + " sans date", 1)
                ], 64)) : f("", !0)
              ], 64)) : (a(), n(b, { key: 1 }, [
                k("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", js, [
            u("div", Rs, [
              (a(), n(b, null, S(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (l) => u("div", {
                key: l,
                class: "at-dv-dow"
              }, v(l), 1)), 64))
            ]),
            u("div", Ws, [
              (a(!0), n(b, null, S(pa.value, (l) => (a(), n("div", {
                key: l.iso,
                class: x(["at-dv-day", l.outside && "out", l.today && "today", ye.value === l.iso && "over"]),
                onDragover: ie((h) => ye.value = l.iso, ["prevent"]),
                onDrop: ie((h) => ca(l.iso), ["prevent"])
              }, [
                u("div", Gs, [
                  u("span", null, v(l.day), 1),
                  se.value ? (a(), n("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${z(rt)(l.iso)}`,
                    onClick: (h) => me({ [se.value]: l.iso })
                  }, [
                    g(V, { name: "plus" })
                  ], 8, Js)) : f("", !0)
                ]),
                (a(!0), n(b, null, S(l.rows, (h) => (a(), n("button", {
                  key: m(h),
                  type: "button",
                  class: x(["at-dv-calitem", ha(h) && "done"]),
                  draggable: "true",
                  onDragstart: (T) => kt(T, h),
                  onDragend: xe,
                  onClick: (T) => c("open", h)
                }, [
                  u("span", {
                    class: "dot",
                    style: J({ background: ma(h) })
                  }, null, 4),
                  u("span", null, v(h[C.value] || "Sans titre"), 1)
                ], 42, Zs))), 128))
              ], 42, Ks))), 128))
            ])
          ])
        ], 64)),
        g(ue, {
          open: z(qe),
          "onUpdate:open": i[18] || (i[18] = (l) => be(qe) ? qe.value = l : null),
          anchor: ce.value
        }, {
          default: E(() => [
            u("div", Ys, [
              Xs,
              (a(!0), n(b, null, S(z(Fe), (l) => (a(), n("button", {
                key: l.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (h) => Rt(l.value)
              }, [
                g(V, {
                  name: l.icon
                }, null, 8, ["name"]),
                k(v(l.label), 1)
              ], 8, el))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: z(je),
          "onUpdate:open": i[19] || (i[19] = (l) => be(je) ? je.value = l : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", tl, [
              al,
              u("div", nl, [
                p.value.filters.length ? f("", !0) : (a(), n("span", sl, "Aucun filtre : la vue affiche toutes les lignes.")),
                (a(!0), n(b, null, S(p.value.filters, (l) => (a(), n("div", {
                  key: l.id,
                  class: "at-rule"
                }, [
                  u("div", ll, [
                    q(u("select", {
                      "onUpdate:modelValue": (h) => l.prop = h,
                      "aria-label": "Propriété",
                      onChange: (h) => Zt(l)
                    }, [
                      (a(!0), n(b, null, S(o.schema, (h) => (a(), n("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, rl))), 128))
                    ], 40, ol), [
                      [_e, l.prop]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  u("div", il, [
                    q(u("select", {
                      "onUpdate:modelValue": (h) => l.op = h,
                      "aria-label": "Condition"
                    }, [
                      (a(!0), n(b, null, S(Yt(l), (h) => (a(), n("option", {
                        key: h,
                        value: h
                      }, v(z($t)[h]), 9, dl))), 128))
                    ], 8, ul), [
                      [_e, l.op]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  ht(l) ? (a(), n(b, { key: 0 }, [
                    Le(l) === "options" ? (a(), n("div", cl, [
                      q(u("select", {
                        "onUpdate:modelValue": (h) => l.value = h,
                        "aria-label": "Valeur"
                      }, [
                        vl,
                        (a(!0), n(b, null, S(z($e)(w.value[l.prop]), (h) => (a(), n("option", {
                          key: h.value,
                          value: h.value
                        }, v(h.label), 9, ml))), 128))
                      ], 8, pl), [
                        [_e, l.value]
                      ]),
                      g(V, { name: "chevron-down" })
                    ])) : Le(l) === "date" ? q((a(), n("input", {
                      key: 1,
                      "onUpdate:modelValue": (h) => l.value = h,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, hl)), [
                      [ke, l.value]
                    ]) : Le(l) === "number" ? q((a(), n("input", {
                      key: 2,
                      "onUpdate:modelValue": (h) => l.value = h,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, gl)), [
                      [ke, l.value]
                    ]) : q((a(), n("input", {
                      key: 3,
                      "onUpdate:modelValue": (h) => l.value = h,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, fl)), [
                      [ke, l.value]
                    ])
                  ], 64)) : (a(), n("span", yl)),
                  g(P, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (h) => gt(p.value.filters, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", bl, [
                g(P, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Jt
                }, {
                  default: E(() => [
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
          open: z(Re),
          "onUpdate:open": i[20] || (i[20] = (l) => be(Re) ? Re.value = l : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", kl, [
              _l,
              u("div", wl, [
                p.value.sorts.length ? f("", !0) : (a(), n("span", $l, "Aucun tri : ordre des données.")),
                (a(!0), n(b, null, S(p.value.sorts, (l) => (a(), n("div", {
                  key: l.id,
                  class: "at-rule sort"
                }, [
                  u("div", Ml, [
                    q(u("select", {
                      "onUpdate:modelValue": (h) => l.prop = h,
                      "aria-label": "Propriété"
                    }, [
                      (a(!0), n(b, null, S(o.schema, (h) => (a(), n("option", {
                        key: h.key,
                        value: h.key
                      }, v(h.name), 9, Cl))), 128))
                    ], 8, Al), [
                      [_e, l.prop]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  u("div", Vl, [
                    q(u("select", {
                      "onUpdate:modelValue": (h) => l.dir = h,
                      "aria-label": "Sens"
                    }, Ll, 8, Sl), [
                      [_e, l.dir]
                    ]),
                    g(V, { name: "chevron-down" })
                  ]),
                  g(P, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (h) => gt(p.value.sorts, l)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              u("div", Dl, [
                g(P, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Xt
                }, {
                  default: E(() => [
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
          open: z(We),
          "onUpdate:open": i[22] || (i[22] = (l) => be(We) ? We.value = l : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", Ql, [
              u("div", xl, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (a(), n("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: i[21] || (i[21] = (l) => Ze(null))
              }, [
                g(V, { name: "x" }),
                k("Aucun groupe"),
                p.value.groupBy ? f("", !0) : (a(), O(V, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : f("", !0),
              (a(!0), n(b, null, S(te.value, (l) => (a(), n("button", {
                key: l.key,
                type: "button",
                class: "at-menu-item",
                onClick: (h) => Ze(l.key)
              }, [
                g(V, {
                  name: z(He)(l)
                }, null, 8, ["name"]),
                k(v(l.name), 1),
                N.value === l.key ? (a(), O(V, {
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
          open: z(Ke),
          "onUpdate:open": i[26] || (i[26] = (l) => be(Ke) ? Ke.value = l : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: E(() => [
            u("div", El, [
              Fl,
              (a(!0), n(b, null, S(D.value, (l, h) => (a(), n("div", {
                key: l.key,
                class: x(["at-menu-item", "at-pi", De.value === h && "drop"]),
                draggable: l.type !== "title",
                onDragstart: (T) => Me.value = h,
                onDragover: ie((T) => De.value = h, ["prevent"]),
                onDrop: ie((T) => aa(h), ["prevent"]),
                onDragend: i[23] || (i[23] = (T) => {
                  Me.value = null, De.value = null;
                })
              }, [
                g(V, {
                  name: "grip",
                  class: "grip"
                }),
                g(V, {
                  name: z(He)(l)
                }, null, 8, ["name"]),
                u("span", Ol, v(l.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${l.name}`,
                  checked: l.type === "title" || !p.value.hidden.includes(l.key),
                  disabled: l.type === "title",
                  onChange: (T) => ta(l)
                }, null, 40, Pl)
              ], 42, Hl))), 128)),
              Ul,
              u("div", Nl, [
                g(P, {
                  variant: "ghost",
                  size: "sm",
                  onClick: i[24] || (i[24] = (l) => ft(!0))
                }, {
                  default: E(() => [
                    k("Tout afficher")
                  ]),
                  _: 1
                }),
                g(P, {
                  variant: "ghost",
                  size: "sm",
                  onClick: i[25] || (i[25] = (l) => ft(!1))
                }, {
                  default: E(() => [
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
          open: z(Ge),
          "onUpdate:open": i[30] || (i[30] = (l) => be(Ge) ? Ge.value = l : null),
          anchor: ce.value
        }, {
          default: E(() => [
            u("div", Il, [
              ql,
              q(u("input", {
                "onUpdate:modelValue": i[27] || (i[27] = (l) => p.value.name = l),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", jl, [
                (a(!0), n(b, null, S(z(Fe), (l) => (a(), n("button", {
                  key: l.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === l.value,
                  onClick: (h) => Wt(l.value)
                }, [
                  g(V, {
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
                    onChange: i[28] || (i[28] = (l) => Ze(l.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (a(), n("option", Jl, "Aucun")) : f("", !0),
                    (a(!0), n(b, null, S(te.value, (l) => (a(), n("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, Zl))), 128))
                  ], 40, Gl),
                  g(V, { name: "chevron-down" })
                ])
              ])) : (a(), n("div", Yl, [
                Xl,
                u("div", eo, [
                  u("select", {
                    value: se.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: i[29] || (i[29] = (l) => p.value.dateProp = l.target.value)
                  }, [
                    (a(!0), n(b, null, S(_.value, (l) => (a(), n("option", {
                      key: l.key,
                      value: l.key
                    }, v(l.name), 9, ao))), 128))
                  ], 40, to),
                  g(V, { name: "chevron-down" })
                ])
              ])),
              no,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: Kt
              }, [
                g(V, { name: "copy" }),
                k("Dupliquer la vue")
              ]),
              u("button", {
                type: "button",
                class: "at-menu-item at-menu-item--danger",
                disabled: t.value.length < 2,
                onClick: Gt
              }, [
                g(V, { name: "trash" }),
                k("Supprimer la vue")
              ], 8, so)
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(pt, {
          open: at.value,
          "onUpdate:open": i[31] || (i[31] = (l) => at.value = l),
          prop: ((y = fe.value) == null ? void 0 : y.prop) ?? null,
          row: (W = fe.value) == null ? void 0 : W.row,
          anchor: bt.value,
          onUpdate: i[32] || (i[32] = (l) => fe.value && c("update", fe.value.row, fe.value.prop.key, l))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), oo = {
  key: 0,
  class: "at-drawer-wrap"
}, ro = ["aria-label"], io = { class: "at-drawer__head" }, uo = { class: "at-drawer__crumb" }, co = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), po = { class: "at-drawer__body" }, vo = /* @__PURE__ */ B({
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
    const e = Z(d, "open"), s = H();
    let t = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return pe(e, (c) => {
      var m;
      c ? (t = document.activeElement, document.addEventListener("keydown", r), Te(() => {
        var p;
        return (p = s.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = t == null ? void 0 : t.focus) == null || m.call(t));
    }, { immediate: !0 }), ut(() => document.removeEventListener("keydown", r)), (c, m) => (a(), O(dt, { to: "body" }, [
      g(Lt, { name: "at-drawer" }, {
        default: E(() => [
          e.value ? (a(), n("div", oo, [
            u("div", {
              class: "at-overlay",
              onClick: m[0] || (m[0] = (p) => e.value = !1)
            }),
            u("aside", {
              ref_key: "panel",
              ref: s,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: J({ width: `min(${c.width}px, 100%)` })
            }, [
              u("header", io, [
                u("span", uo, [
                  L(c.$slots, "crumb", {}, () => [
                    k(v(c.label), 1)
                  ])
                ]),
                co,
                L(c.$slots, "actions"),
                g(P, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => e.value = !1)
                })
              ]),
              u("div", po, [
                L(c.$slots, "default")
              ])
            ], 12, ro)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), mo = ["aria-label"], ho = {
  key: 0,
  class: "at-menu-label"
}, Ft = /* @__PURE__ */ B({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const e = H();
    function s(t) {
      var p;
      const r = [...((p = e.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!r.length) return;
      const c = r.indexOf(document.activeElement), m = (w) => {
        t.preventDefault(), r[(w + r.length) % r.length].focus();
      };
      t.key === "ArrowDown" ? m(c + 1) : t.key === "ArrowUp" ? m(c < 0 ? r.length - 1 : c - 1) : t.key === "Home" ? m(0) : t.key === "End" && m(r.length - 1);
    }
    return (t, r) => (a(), n("div", {
      ref_key: "el",
      ref: e,
      class: "at-menu",
      role: "menu",
      "aria-label": t.label,
      style: J(t.minWidth ? { minWidth: t.minWidth + "px" } : void 0),
      onKeydown: s
    }, [
      t.label ? (a(), n("div", ho, v(t.label), 1)) : f("", !0),
      L(t.$slots, "default")
    ], 44, mo));
  }
}), go = /* @__PURE__ */ B({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const e = H(!1);
    function s(t) {
      t.target.closest('.at-menu-item[role="menuitem"]') && (e.value = !1);
    }
    return (t, r) => (a(), O(ue, {
      open: e.value,
      "onUpdate:open": r[0] || (r[0] = (c) => e.value = c),
      align: t.align
    }, {
      trigger: E((c) => [
        L(t.$slots, "trigger", ka(_a(c)))
      ]),
      default: E(() => [
        g(Ft, {
          label: t.label,
          "min-width": t.minWidth,
          onClick: s
        }, {
          default: E(() => [
            L(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align"]));
  }
}), fo = { class: "at-empty" }, yo = /* @__PURE__ */ B({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (e, s) => (a(), n("div", fo, [
      L(e.$slots, "default", {}, () => [
        k(v(e.message), 1)
      ]),
      L(e.$slots, "action")
    ]));
  }
});
let Ct = 0;
function bo(d = "at") {
  return Ct += 1, `${d}-${Ct}`;
}
const ko = { class: "at-field" }, _o = ["for"], wo = ["id"], $o = ["id"], Mo = /* @__PURE__ */ B({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const s = d.id ?? bo("field");
    return (t, r) => (a(), n("div", ko, [
      t.label ? (a(), n("label", {
        key: 0,
        class: "at-label",
        for: z(s)
      }, v(t.label), 9, _o)) : f("", !0),
      L(t.$slots, "default", {
        id: z(s),
        invalid: !!t.error,
        describedby: t.error || t.hint ? z(s) + "-hint" : void 0
      }),
      t.error ? (a(), n("span", {
        key: 1,
        id: z(s) + "-hint",
        class: "at-hint at-hint--error"
      }, v(t.error), 9, wo)) : t.hint ? (a(), n("span", {
        key: 2,
        id: z(s) + "-hint",
        class: "at-hint"
      }, v(t.hint), 9, $o)) : f("", !0)
    ]));
  }
}), Ao = ["role", "aria-label", "aria-hidden"], Ht = /* @__PURE__ */ B({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("span", {
      class: x(["at-tile", e.size !== "sm" && `at-tile--${e.size}`, e.color === "neutral" ? "at-tile--neutral" : `at-tone-${e.color}`]),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true"
    }, [
      g(V, { name: e.name }, null, 8, ["name"])
    ], 10, Ao));
  }
}), Ne = (d, e) => {
  const s = d.__vccOpts || d;
  for (const [t, r] of e)
    s[t] = r;
  return s;
}, Co = {}, Vo = { class: "at-kbd" };
function So(d, e) {
  return a(), n("kbd", Vo, [
    L(d.$slots, "default")
  ]);
}
const vt = /* @__PURE__ */ Ne(Co, [["render", So]]), zo = {
  key: 0,
  class: "at-input-wrap"
}, To = ["type", "placeholder", "disabled", "aria-invalid"], Lo = ["type", "placeholder", "disabled", "aria-invalid"], Do = /* @__PURE__ */ B({
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
  setup(d, { expose: e }) {
    const s = Z(d, "modelValue"), t = d, r = H();
    return e({ focus: () => {
      var c;
      return (c = r.value) == null ? void 0 : c.focus();
    }, el: r }), (c, m) => c.icon || c.kbd ? (a(), n("div", zo, [
      c.icon ? (a(), O(V, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : f("", !0),
      q(u("input", ve(c.$attrs, {
        ref_key: "el",
        ref: r,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => s.value = p),
        class: "at-input",
        style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, To), [
        [lt, s.value]
      ]),
      c.kbd ? (a(), O(vt, { key: 1 }, {
        default: E(() => [
          k(v(c.kbd), 1)
        ]),
        _: 1
      })) : f("", !0)
    ])) : q((a(), n("input", ve({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: r,
      "onUpdate:modelValue": m[1] || (m[1] = (p) => s.value = p),
      class: "at-input",
      style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, Lo)), [
      [lt, s.value]
    ]);
  }
}), st = {
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
}, Qo = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", it = {
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
function ci(d) {
  Object.assign(it, d);
}
const pi = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, xo = ["role", "aria-label", "aria-hidden"], Bo = ["viewBox", "width", "height"], Eo = ["d"], Fo = ["stroke-width", "innerHTML"], Ho = {
  key: 0,
  class: "at-logo__name"
}, Oo = /* @__PURE__ */ B({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(d) {
    const e = d, s = $(() => it[e.app] ?? it.atelier), t = $(() => e.name ?? s.value.name), r = $(() => Math.max(16, e.size)), c = $(() => ({
      "--at-logo-size": r.value + "px",
      "--at-logo-fill": `var(--${s.value.color})`
    }));
    return (m, p) => (a(), n("span", {
      class: x(["at-logo", m.wordmark && "at-logo--wordmark"]),
      style: J(c.value),
      role: !m.wordmark && m.label ? "img" : void 0,
      "aria-label": m.wordmark ? void 0 : m.label,
      "aria-hidden": !m.wordmark && !m.label ? "true" : void 0
    }, [
      (a(), n("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${z(st).size} ${z(st).size}`,
        width: r.value,
        height: r.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        u("path", {
          class: "at-logo__tile",
          d: z(Qo)
        }, null, 8, Eo),
        u("g", {
          class: "at-logo__glyph",
          "stroke-width": z(st).stroke,
          innerHTML: s.value.glyph
        }, null, 8, Fo)
      ], 8, Bo)),
      m.wordmark ? (a(), n("span", Ho, v(t.value), 1)) : f("", !0)
    ], 14, xo));
  }
}), Po = ["role", "aria-checked", "disabled"], Uo = {
  key: 2,
  class: "at-menu-meta"
}, No = /* @__PURE__ */ B({
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
      class: x(["at-menu-item", e.danger && "at-menu-item--danger"]),
      role: e.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": e.checked !== void 0 ? e.checked : void 0,
      disabled: e.disabled,
      onClick: s[0] || (s[0] = (t) => e.$emit("select", t))
    }, [
      e.icon ? (a(), O(V, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      L(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ]),
      e.kbd ? (a(), O(vt, { key: 1 }, {
        default: E(() => [
          k(v(e.kbd), 1)
        ]),
        _: 1
      })) : e.meta ? (a(), n("span", Uo, v(e.meta), 1)) : e.checked ? (a(), O(V, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : f("", !0)
    ], 10, Po));
  }
}), Io = {}, qo = { class: "at-menu-label" };
function jo(d, e) {
  return a(), n("div", qo, [
    L(d.$slots, "default")
  ]);
}
const Ro = /* @__PURE__ */ Ne(Io, [["render", jo]]), Wo = {}, Ko = {
  class: "at-menu-sep",
  role: "separator"
};
function Go(d, e) {
  return a(), n("div", Ko);
}
const Jo = /* @__PURE__ */ Ne(Wo, [["render", Go]]), Zo = {
  key: 0,
  class: "at-modal-wrap"
}, Yo = ["aria-label"], Xo = { class: "at-modal__head" }, er = { style: { flex: "1", "min-width": "0" } }, tr = { class: "at-modal__title" }, ar = {
  key: 0,
  class: "at-modal__desc"
}, nr = { class: "at-modal__body" }, sr = {
  key: 0,
  class: "at-modal__foot"
}, lr = /* @__PURE__ */ B({
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
    const e = Z(d, "open"), s = H();
    let t = null;
    function r(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return pe(e, (c) => {
      var m;
      c ? (t = document.activeElement, document.addEventListener("keydown", r), Te(() => {
        var p;
        return (p = s.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", r), (m = t == null ? void 0 : t.focus) == null || m.call(t));
    }, { immediate: !0 }), ut(() => document.removeEventListener("keydown", r)), (c, m) => (a(), O(dt, { to: "body" }, [
      g(Lt, { name: "at-modal" }, {
        default: E(() => [
          e.value ? (a(), n("div", Zo, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: m[0] || (m[0] = (p) => c.dismissible && (e.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: s,
              class: x(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", Xo, [
                u("div", er, [
                  u("h2", tr, v(c.title), 1),
                  c.description ? (a(), n("p", ar, v(c.description), 1)) : f("", !0)
                ]),
                c.dismissible ? (a(), O(P, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => e.value = !1)
                })) : f("", !0)
              ]),
              u("div", nr, [
                L(c.$slots, "default")
              ]),
              c.$slots.footer ? (a(), n("footer", sr, [
                L(c.$slots, "footer", {
                  close: () => e.value = !1
                })
              ])) : f("", !0)
            ], 10, Yo)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), or = ["aria-label"], rr = {
  key: 0,
  class: "at-nav-label"
}, ir = /* @__PURE__ */ B({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("nav", {
      class: "at-nav",
      "aria-label": e.label
    }, [
      e.label ? (a(), n("div", rr, v(e.label), 1)) : f("", !0),
      L(e.$slots, "default")
    ], 8, or));
  }
}), ur = ["href", "aria-current"], dr = { class: "at-ellipsis" }, cr = {
  key: 3,
  class: "at-nav-count"
}, pr = /* @__PURE__ */ B({
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
        style: J({ background: e.mark })
      }, null, 4)) : e.icon && e.tile ? (a(), O(Ht, {
        key: 1,
        name: e.icon,
        color: e.tile
      }, null, 8, ["name", "color"])) : e.icon ? (a(), O(V, {
        key: 2,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      u("span", dr, [
        L(e.$slots, "default", {}, () => [
          k(v(e.label), 1)
        ])
      ]),
      e.count != null && e.count !== "" ? (a(), n("span", cr, v(e.count), 1)) : f("", !0)
    ], 8, ur));
  }
}), vr = {
  key: 0,
  class: "at-page__head"
}, mr = { class: "t-heading-1" }, hr = { key: 0 }, gr = /* @__PURE__ */ B({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (e, s) => (a(), n("div", {
      class: x(["at-page", e.wide && "at-page--wide"])
    }, [
      e.title || e.$slots.head ? (a(), n("div", vr, [
        L(e.$slots, "head", {}, () => [
          u("h1", mr, v(e.title), 1),
          e.description ? (a(), n("p", hr, v(e.description), 1)) : f("", !0)
        ])
      ])) : f("", !0),
      L(e.$slots, "default")
    ], 2));
  }
}), fr = { class: "at-proplist" }, yr = ["disabled", "onClick"], br = /* @__PURE__ */ B({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: e }) {
    const s = d, t = e, r = $(() => s.schema.filter((A) => {
      var C;
      return A.type !== "title" && !((C = s.exclude) != null && C.includes(A.key));
    })), c = H(null), m = H(null), p = H(!1);
    function w(A, C) {
      if (Se(C)) {
        if (C.type === "checkbox") {
          t("update", C.key, !s.row[C.key]);
          return;
        }
        m.value = A.currentTarget, c.value = C, p.value = !0;
      }
    }
    return (A, C) => (a(), n(b, null, [
      u("dl", fr, [
        (a(!0), n(b, null, S(r.value, (D) => (a(), n(b, {
          key: D.key
        }, [
          u("dt", null, [
            g(V, {
              name: z(He)(D)
            }, null, 8, ["name"]),
            k(v(D.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !z(Se)(D),
              onClick: (U) => w(U, D)
            }, [
              g(de, {
                prop: D,
                row: A.row
              }, null, 8, ["prop", "row"])
            ], 8, yr)
          ])
        ], 64))), 128))
      ]),
      g(pt, {
        open: p.value,
        "onUpdate:open": C[0] || (C[0] = (D) => p.value = D),
        prop: c.value,
        row: A.row,
        anchor: m.value,
        onUpdate: C[1] || (C[1] = (D) => c.value && t("update", c.value.key, D))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), kr = ["aria-label"], _r = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], wr = /* @__PURE__ */ B({
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
    const e = Z(d, "modelValue");
    return (s, t) => (a(), n("div", {
      class: "at-segment",
      role: "group",
      "aria-label": s.label
    }, [
      (a(!0), n(b, null, S(s.items, (r) => (a(), n("button", {
        key: String(r.value),
        type: "button",
        "aria-pressed": e.value === r.value,
        "aria-label": r.iconOnly ? r.label : void 0,
        title: r.iconOnly ? r.label : void 0,
        disabled: r.disabled,
        onClick: (c) => e.value = r.value
      }, [
        r.icon ? (a(), O(V, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : f("", !0),
        r.iconOnly ? f("", !0) : (a(), n(b, { key: 1 }, [
          k(v(r.label), 1)
        ], 64))
      ], 8, _r))), 128))
    ], 8, kr));
  }
}), $r = { class: "at-select" }, Mr = ["disabled", "aria-invalid"], Ar = {
  key: 0,
  value: null,
  disabled: ""
}, Cr = ["value", "disabled"], Vr = /* @__PURE__ */ B({
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
    const e = Z(d, "modelValue");
    return (s, t) => (a(), n("div", $r, [
      q(u("select", ve(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
        disabled: s.disabled,
        "aria-invalid": s.invalid || void 0,
        style: s.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        s.placeholder ? (a(), n("option", Ar, v(s.placeholder), 1)) : f("", !0),
        (a(!0), n(b, null, S(s.options, (r) => (a(), n("option", {
          key: String(r.value),
          value: r.value,
          disabled: r.disabled
        }, v(r.label), 9, Cr))), 128))
      ], 16, Mr), [
        [_e, e.value]
      ]),
      g(V, { name: "chevron-down" })
    ]));
  }
}), Sr = {}, zr = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Tr = {
  key: 0,
  class: "at-sidebar__foot"
};
function Lr(d, e) {
  return a(), n("aside", zr, [
    L(d.$slots, "header"),
    L(d.$slots, "default"),
    d.$slots.footer ? (a(), n("div", Tr, [
      L(d.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const Dr = /* @__PURE__ */ Ne(Sr, [["render", Lr]]), Qr = { class: "at-stat__label" }, xr = { class: "at-stat__row" }, Br = { class: "at-stat__value" }, Er = ["viewBox"], Fr = ["d"], Hr = ["d"], Or = ["cx", "cy"], Pr = {
  key: 1,
  class: "at-stat__foot"
}, Vt = 220, Ae = 32, Ur = /* @__PURE__ */ B({
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
    const e = d, s = $(() => {
      const t = e.spark;
      if (!t || t.length < 2) return null;
      const r = Math.min(...t), c = Math.max(...t), m = c - r || 1, p = t.map((C, D) => [2 + D * (Vt - 4) / (t.length - 1), Ae - 3 - (C - r) / m * (Ae - 8)]), w = "M" + p.map((C) => C.map((D) => D.toFixed(1)).join(" ")).join(" L"), A = p[p.length - 1];
      return { line: w, area: `${w} L${A[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: A };
    });
    return (t, r) => (a(), n("div", {
      class: x(["at-stat", t.color && ["at-stat--striped", `at-tone-${t.color}`]])
    }, [
      u("span", Qr, v(t.label), 1),
      u("div", xr, [
        u("span", Br, [
          L(t.$slots, "value", {}, () => [
            k(v(t.value), 1)
          ])
        ]),
        t.delta ? (a(), n("span", {
          key: 0,
          class: x(["at-stat__delta", t.trend && `at-stat__delta--${t.trend}`])
        }, v(t.delta), 3)) : f("", !0)
      ]),
      s.value ? (a(), n("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${Vt} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: s.value.area
        }, null, 8, Fr),
        u("path", {
          class: "line",
          d: s.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Hr),
        u("circle", {
          class: "end",
          cx: s.value.end[0],
          cy: s.value.end[1],
          r: "2.5"
        }, null, 8, Or)
      ], 8, Er)) : f("", !0),
      t.foot || t.$slots.foot ? (a(), n("span", Pr, [
        L(t.$slots, "foot", {}, () => [
          k(v(t.foot), 1)
        ])
      ])) : f("", !0)
    ], 2));
  }
}), Nr = {
  key: 0,
  class: "at-toggle"
}, Ir = ["disabled"], qr = ["disabled"], jr = /* @__PURE__ */ B({
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
    const e = Z(d, "modelValue");
    return (s, t) => s.label || s.$slots.default ? (a(), n("label", Nr, [
      q(u("input", ve(s.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: s.disabled
      }), null, 16, Ir), [
        [Oe, e.value]
      ]),
      L(s.$slots, "default", {}, () => [
        k(v(s.label), 1)
      ])
    ])) : q((a(), n("input", ve({ key: 1 }, s.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (r) => e.value = r),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: s.disabled
    }), null, 16, qr)), [
      [Oe, e.value]
    ]);
  }
}), Rr = { class: "at-table-wrap" }, Wr = { class: "at-table" }, Kr = ["onClick"], Gr = { key: 0 }, Jr = ["colspan"], Zr = /* @__PURE__ */ B({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (e, s) => (a(), n("div", Rr, [
      u("table", Wr, [
        u("thead", null, [
          u("tr", null, [
            (a(!0), n(b, null, S(e.columns, (t) => (a(), n("th", {
              key: t.key,
              class: x({ "at-num": t.align === "right" }),
              style: J(t.width ? { width: t.width } : void 0)
            }, v(t.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (a(!0), n(b, null, S(e.rows, (t, r) => (a(), n("tr", {
            key: e.rowKey ? t[e.rowKey] : r,
            style: J(e.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => e.$emit("rowClick", t)
          }, [
            (a(!0), n(b, null, S(e.columns, (c) => (a(), n("td", {
              key: c.key,
              class: x({ "at-num": c.align === "right" })
            }, [
              L(e.$slots, `cell-${c.key}`, {
                row: t,
                value: t[c.key]
              }, () => [
                k(v(c.format ? c.format(t[c.key], t) : t[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Kr))), 128)),
          e.rows.length ? f("", !0) : (a(), n("tr", Gr, [
            u("td", {
              colspan: e.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(e.empty ?? "Aucune donnée"), 9, Jr)
          ]))
        ])
      ])
    ]));
  }
}), Yr = ["aria-label"], Xr = ["aria-selected", "disabled", "onClick"], ei = {
  key: 1,
  class: "at-count"
}, ti = /* @__PURE__ */ B({
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
    const e = Z(d, "modelValue");
    return (s, t) => (a(), n("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": s.label
    }, [
      (a(!0), n(b, null, S(s.items, (r) => (a(), n("button", {
        key: String(r.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": e.value === r.value,
        disabled: r.disabled,
        onClick: (c) => e.value = r.value
      }, [
        r.icon ? (a(), O(V, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : f("", !0),
        k(v(r.label) + " ", 1),
        r.count != null ? (a(), n("span", ei, v(r.count), 1)) : f("", !0)
      ], 8, Xr))), 128))
    ], 8, Yr));
  }
}), ai = /* @__PURE__ */ B({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (e, s) => (a(), n("span", {
      class: x(["at-tag", e.color !== "gray" && `at-tag--${e.color}`])
    }, [
      L(e.$slots, "default", {}, () => [
        k(v(e.label), 1)
      ])
    ], 2));
  }
}), ni = ["rows", "placeholder", "disabled", "aria-invalid"], si = /* @__PURE__ */ B({
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
    const e = Z(d, "modelValue");
    return (s, t) => q((a(), n("textarea", ve(s.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
      class: "at-input",
      rows: s.rows ?? 3,
      placeholder: s.placeholder,
      disabled: s.disabled,
      "aria-invalid": s.invalid || void 0
    }), null, 16, ni)), [
      [ke, e.value]
    ]);
  }
}), Ot = "atelier:theme", Pt = "atelier:density", Ut = (d) => {
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
}, zt = () => typeof document < "u" ? document.documentElement : null, Ce = H(Ut(Ot) || "system"), Nt = H(Ut(Pt) || "comfortable"), It = H(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Tt = !1;
function qt() {
  if (Tt || typeof window > "u") return;
  Tt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    It.value = e.matches;
  }), pe(Ce, (e) => {
    const s = zt();
    s && (e === "system" ? s.removeAttribute("data-theme") : s.dataset.theme = e, St(Ot, e));
  }, { immediate: !0 }), pe(Nt, (e) => {
    const s = zt();
    s && (s.dataset.density = e, St(Pt, e));
  }, { immediate: !0 });
}
function vi() {
  qt();
  const d = $(() => Ce.value === "system" ? It.value ? "dark" : "light" : Ce.value), e = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return wa() && $a(() => {
  }), { mode: Ce, resolved: d, toggle: e };
}
function mi() {
  return qt(), { density: Nt };
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
}, li = (d) => `var(--${d})`, gi = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(li), oi = {
  AtAppShell: La,
  AtAvatar: Qt,
  AtBadge: xa,
  AtBreadcrumbs: Oa,
  AtButton: P,
  AtCard: qa,
  AtCheckbox: Ka,
  AtDataView: lo,
  AtDrawer: vo,
  AtDropdown: go,
  AtEmpty: yo,
  AtField: Mo,
  AtIcon: V,
  AtIconTile: Ht,
  AtInput: Do,
  AtKbd: vt,
  AtLogo: Oo,
  AtMenu: Ft,
  AtMenuItem: No,
  AtMenuLabel: Ro,
  AtMenuSeparator: Jo,
  AtModal: lr,
  AtNavGroup: ir,
  AtNavItem: pr,
  AtPage: gr,
  AtPopover: ue,
  AtProgress: xt,
  AtPropertyEditor: pt,
  AtPropertyList: br,
  AtPropertyValue: de,
  AtSegment: wr,
  AtSelect: Vr,
  AtSidebar: Dr,
  AtStat: Ur,
  AtSwitch: jr,
  AtTable: Zr,
  AtTabs: ti,
  AtTag: ai,
  AtTextarea: si
}, fi = {
  install(d) {
    for (const [e, s] of Object.entries(oi)) d.component(e, s);
  }
};
export {
  La as AtAppShell,
  Qt as AtAvatar,
  xa as AtBadge,
  Oa as AtBreadcrumbs,
  P as AtButton,
  qa as AtCard,
  Ka as AtCheckbox,
  lo as AtDataView,
  vo as AtDrawer,
  go as AtDropdown,
  yo as AtEmpty,
  Mo as AtField,
  V as AtIcon,
  Ht as AtIconTile,
  Do as AtInput,
  vt as AtKbd,
  Oo as AtLogo,
  Ft as AtMenu,
  No as AtMenuItem,
  Ro as AtMenuLabel,
  Jo as AtMenuSeparator,
  lr as AtModal,
  ir as AtNavGroup,
  pr as AtNavItem,
  gr as AtPage,
  ue as AtPopover,
  xt as AtProgress,
  pt as AtPropertyEditor,
  br as AtPropertyList,
  de as AtPropertyValue,
  wr as AtSegment,
  Vr as AtSelect,
  Dr as AtSidebar,
  Ur as AtStat,
  jr as AtSwitch,
  Zr as AtTable,
  ti as AtTabs,
  ai as AtTag,
  si as AtTextarea,
  fi as Atelier,
  Fe as LAYOUTS,
  Qo as LOGO_TILE,
  Pe as NONE,
  nt as OPS,
  $t as OP_LABEL,
  pi as WORDMARK,
  Ya as addDays,
  nn as applyView,
  st as brandGrid,
  gi as chartColors,
  an as compareRows,
  At as createView,
  li as cssVar,
  fi as default,
  on as defaultsFromFilters,
  ui as filter,
  Ue as findOption,
  rt as formatDate,
  dn as formatMonth,
  G as getValue,
  sn as groupRows,
  Dt as icons,
  ee as isEmpty,
  it as logoApps,
  tn as matchRule,
  ln as monthGrid,
  $e as optionsOf,
  ii as registerIcons,
  ci as registerLogoApps,
  Mt as shiftMonth,
  di as sort,
  Ve as today,
  hi as tokens,
  we as uid,
  mi as useDensity,
  bo as useId,
  vi as useTheme
};
//# sourceMappingURL=atelier.js.map

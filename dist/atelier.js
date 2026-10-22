import { defineComponent as B, computed as S, openBlock as t, createElementBlock as n, normalizeStyle as Q, normalizeClass as x, createBlock as F, createCommentVNode as f, renderSlot as z, createTextVNode as k, toDisplayString as v, ref as O, watch as pe, createElementVNode as u, createVNode as g, Fragment as b, renderList as V, resolveDynamicComponent as ma, withCtx as P, useModel as J, withDirectives as j, mergeProps as ve, vModelCheckbox as Fe, mergeModels as G, onBeforeUnmount as rt, Teleport as it, nextTick as ze, unref as E, withKeys as ha, vModelDynamic as st, shallowRef as ga, vModelText as ke, withModifiers as ie, isRef as be, vModelSelect as _e, Transition as Tt, normalizeProps as fa, guardReactiveProps as ya, getCurrentScope as ba, onScopeDispose as ka } from "vue";
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
  alert: '<path d="M8 2.5l6 10.5H2z"/><path d="M8 6.5v3M8 11.2h.01"/>'
};
function Zr(d) {
  Object.assign(zt, d);
}
const _a = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], C = /* @__PURE__ */ B({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(d) {
    const a = d, l = S(() => zt[a.name] ?? "");
    return (e, i) => (t(), n("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: e.size,
      height: e.size,
      style: Q(e.size !== 16 ? { width: e.size + "px", height: e.size + "px" } : void 0),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true",
      innerHTML: l.value
    }, null, 12, _a));
  }
}), wa = ["href", "aria-label"], $a = ["type", "disabled", "aria-busy", "aria-label"], Ma = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, N = /* @__PURE__ */ B({
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
    const a = d, l = S(() => [
      "at-btn",
      `at-btn--${a.variant}`,
      a.size !== "md" && `at-btn--${a.size}`,
      a.iconOnly && "at-btn--icon"
    ]);
    return (e, i) => e.href && !e.disabled ? (t(), n("a", {
      key: 0,
      href: e.href,
      class: x(l.value),
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.icon ? (t(), F(C, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      z(e.$slots, "default", {}, () => [
        k(v(e.iconOnly ? "" : e.label), 1)
      ])
    ], 10, wa)) : (t(), n("button", {
      key: 1,
      type: e.type,
      class: x(l.value),
      disabled: e.disabled || e.loading,
      "aria-busy": e.loading || void 0,
      "aria-label": e.iconOnly ? e.label : void 0
    }, [
      e.loading ? (t(), n("span", Ma)) : e.icon ? (t(), F(C, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      e.iconOnly ? f("", !0) : z(e.$slots, "default", { key: 2 }, () => [
        k(v(e.label), 1)
      ])
    ], 10, $a));
  }
}), Aa = { class: "at-shell__side" }, Ca = { class: "at-shell__main" }, Sa = { class: "at-topbar" }, Va = /* @__PURE__ */ B({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(d, { expose: a }) {
    const l = d, e = O(!1), i = O();
    return pe(() => l.routeKey, () => {
      e.value = !1, i.value && (i.value.scrollTop = 0);
    }), a({ closeNav: () => e.value = !1 }), (c, h) => (t(), n("div", {
      class: x(["at-shell", e.value && "at-shell--open"])
    }, [
      u("div", Aa, [
        z(c.$slots, "sidebar")
      ]),
      u("div", {
        class: "at-shell__scrim",
        onClick: h[0] || (h[0] = (p) => e.value = !1)
      }),
      u("div", Ca, [
        u("header", Sa, [
          g(N, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: h[1] || (h[1] = (p) => e.value = !e.value)
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
}), Ta = ["title"], za = ["src", "alt"], Dt = /* @__PURE__ */ B({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" }
  },
  setup(d) {
    const a = d, l = S(() => a.name.split(/\s+/).filter(Boolean).map((e) => e[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (e, i) => (t(), n("span", {
      class: x(["at-avatar", e.size !== "sm" && `at-avatar--${e.size}`]),
      title: e.name
    }, [
      e.src ? (t(), n("img", {
        key: 0,
        src: e.src,
        alt: e.name
      }, null, 8, za)) : (t(), n(b, { key: 1 }, [
        k(v(l.value), 1)
      ], 64))
    ], 10, Ta));
  }
}), Da = /* @__PURE__ */ B({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(d) {
    return (a, l) => (t(), n("span", {
      class: x(["at-badge", a.tone !== "neutral" && `at-badge--${a.tone}`])
    }, [
      z(a.$slots, "default", {}, () => [
        k(v(a.label), 1)
      ])
    ], 2));
  }
}), La = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ea = {
  key: 0,
  "aria-hidden": "true"
}, Ba = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, xa = ["href", "onClick"], Pa = /* @__PURE__ */ B({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(d) {
    return (a, l) => (t(), n("nav", La, [
      (t(!0), n(b, null, V(a.items, (e, i) => (t(), n(b, { key: i }, [
        i > 0 ? (t(), n("span", Ea, "/")) : f("", !0),
        i === a.items.length - 1 ? (t(), n("span", Ba, v(e.label), 1)) : (t(), n("a", {
          key: 2,
          href: e.href ?? "#",
          onClick: (c) => e.onClick && (c.preventDefault(), e.onClick())
        }, v(e.label), 9, xa))
      ], 64))), 128))
    ]));
  }
}), Ua = {
  key: 0,
  class: "at-card__head"
}, Oa = {
  key: 0,
  class: "at-card__title"
}, Fa = {
  key: 1,
  class: "at-card__desc"
}, Na = {
  key: 1,
  class: "at-card__foot"
}, Ia = /* @__PURE__ */ B({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {}
  },
  setup(d) {
    return (a, l) => (t(), F(ma(a.href ? "a" : a.as || "section"), {
      href: a.href,
      class: x(["at-card", a.href && "at-card--link"])
    }, {
      default: P(() => [
        a.title || a.description || a.$slots.actions ? (t(), n("div", Ua, [
          u("div", null, [
            a.title ? (t(), n("h3", Oa, v(a.title), 1)) : f("", !0),
            a.description ? (t(), n("p", Fa, v(a.description), 1)) : f("", !0)
          ]),
          z(a.$slots, "actions")
        ])) : f("", !0),
        z(a.$slots, "default"),
        a.$slots.footer ? (t(), n("div", Na, [
          z(a.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), qa = {
  key: 0,
  class: "at-toggle"
}, Ha = ["indeterminate", "disabled"], ja = ["indeterminate", "disabled"], Ra = /* @__PURE__ */ B({
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
    const a = J(d, "modelValue");
    return (l, e) => l.label || l.$slots.default ? (t(), n("label", qa, [
      j(u("input", ve(l.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
        type: "checkbox",
        class: "at-check",
        indeterminate: l.indeterminate,
        disabled: l.disabled
      }), null, 16, Ha), [
        [Fe, a.value]
      ]),
      z(l.$slots, "default", {}, () => [
        k(v(l.label), 1)
      ])
    ])) : j((t(), n("input", ve({ key: 1 }, l.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (i) => a.value = i),
      type: "checkbox",
      class: "at-check",
      indeterminate: l.indeterminate,
      disabled: l.disabled
    }), null, 16, ja)), [
      [Fe, a.value]
    ]);
  }
}), ue = /* @__PURE__ */ B({
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
  setup(d, { expose: a, emit: l }) {
    const e = J(d, "open"), i = d, c = l, h = O(), p = O(), w = O({ top: -9999, left: -9999 }), M = S(() => {
      var U;
      return i.anchor ?? ((U = h.value) == null ? void 0 : U.firstElementChild) ?? h.value ?? null;
    });
    function A() {
      const U = M.value, q = p.value;
      if (!U || !q) return;
      const H = U.getBoundingClientRect(), re = q.offsetWidth, X = q.offsetHeight;
      let le = i.align === "end" ? H.right - re : H.left;
      le = Math.max(8, Math.min(le, window.innerWidth - re - 8));
      let oe = H.bottom + i.offset;
      oe + X > window.innerHeight - 8 && (oe = Math.max(8, H.top - X - i.offset)), (Math.abs(oe - w.value.top) > 0.5 || Math.abs(le - w.value.left) > 0.5) && (w.value = { top: oe, left: le });
    }
    function D() {
      e.value && (e.value = !1, c("close"));
    }
    function I() {
      e.value ? D() : e.value = !0;
    }
    function R(U) {
      var H, re, X;
      const q = U.target;
      (H = p.value) != null && H.contains(q) || (re = M.value) != null && re.contains(q) || (X = q.closest) != null && X.call(q, ".at-pop") || D();
    }
    function te(U) {
      var q, H;
      U.key === "Escape" && (U.stopPropagation(), D(), (H = (q = M.value) == null ? void 0 : q.focus) == null || H.call(q));
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
    return pe(e, (U) => U ? $() : L(), { immediate: !0 }), rt(L), a({ place: A, close: D, toggle: I }), (U, q) => (t(), n(b, null, [
      U.$slots.trigger ? (t(), n("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: h,
        style: { display: "contents" }
      }, [
        z(U.$slots, "trigger", {
          toggle: I,
          open: e.value
        })
      ], 512)) : f("", !0),
      (t(), F(it, { to: "body" }, [
        e.value ? (t(), n("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: Q({ top: w.value.top + "px", left: w.value.left + "px" })
        }, [
          z(U.$slots, "default", { close: D })
        ], 4)) : f("", !0)
      ]))
    ], 64));
  }
}), Wa = ["aria-valuenow", "aria-label"], Ka = { class: "at-progress__track" }, Ga = {
  key: 0,
  class: "at-progress__label"
}, Lt = /* @__PURE__ */ B({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(d) {
    const a = d, l = S(() => Math.max(0, Math.min(100, Math.round(a.value / a.max * 100))));
    return (e, i) => (t(), n("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": l.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": e.label
    }, [
      u("span", Ka, [
        u("span", {
          class: "at-progress__bar",
          style: Q({ width: l.value + "%" })
        }, null, 4)
      ]),
      e.showLabel ? (t(), n("span", Ga, v(l.value) + " %", 1)) : f("", !0)
    ], 8, Wa));
  }
}), Ne = "__none", lt = (d) => String(d).padStart(2, "0"), ut = (d) => `${d.getFullYear()}-${lt(d.getMonth() + 1)}-${lt(d.getDate())}`, Se = () => ut(/* @__PURE__ */ new Date()), Ya = (d, a) => {
  const l = /* @__PURE__ */ new Date(d + "T00:00");
  return l.setDate(l.getDate() + a), ut(l);
}, we = () => Math.random().toString(36).slice(2, 10), ee = (d) => d == null || d === "" || Array.isArray(d) && d.length === 0, Y = (d, a) => a.compute ? a.compute(d) : d[a.key], $e = (d, a) => typeof d.options == "function" ? d.options(a) : d.options ?? [], Ie = (d, a, l) => $e(d, a).find((e) => e.value === l), Ve = (d) => !d.compute && !d.readonly && d.type !== "progress", Ja = ["status", "select", "relation", "person"], Te = (d) => Ja.includes(d.type), Xa = {
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
}, Oe = (d) => d.icon ?? Xa[d.type] ?? "text", Ue = [
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
}, Et = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function Za(d, a, l, e = Se()) {
  const i = Y(d, a);
  if (!Et.includes(l.op) && ee(l.value)) return !0;
  const c = (h) => String(h ?? "").toLowerCase();
  switch (l.op) {
    case "empty":
      return ee(i);
    case "notempty":
      return !ee(i);
    case "contains":
      return a.type === "multi" ? (i ?? []).includes(l.value) : c(i).includes(c(l.value));
    case "notcontains":
      return a.type === "multi" ? !(i ?? []).includes(l.value) : !c(i).includes(c(l.value));
    case "is":
      return i === l.value;
    case "isnot":
      return i !== l.value;
    case "before":
      return !!i && i < l.value;
    case "after":
      return !!i && i > l.value;
    case "past":
      return !!i && i < e;
    case "week":
      return !!i && i >= e && i <= Ya(e, 7);
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
function Qa(d, a, l) {
  const e = Y(a, d), i = Y(l, d), c = ee(e), h = ee(i);
  if (c || h) return c === h ? 0 : c ? 1 : -1;
  if (Te(d)) {
    const p = $e(d).map((w) => w.value);
    return p.indexOf(e) - p.indexOf(i);
  }
  return d.type === "number" || d.type === "progress" ? e - i : d.type === "checkbox" ? Number(i) - Number(e) : d.type === "multi" ? e.length - i.length : String(e).localeCompare(String(i), "fr");
}
function en(d, a, l, e = "") {
  const i = Object.fromEntries(a.map((M) => [M.key, M])), c = a.find((M) => M.type === "title"), h = e.trim().toLowerCase(), p = d.filter((M) => (!h || !c || String(M[c.key] ?? "").toLowerCase().includes(h)) && l.filters.every((A) => !i[A.prop] || Za(M, i[A.prop], A))), w = l.sorts.filter((M) => i[M.prop]);
  return w.length ? p.sort((M, A) => {
    for (const D of w) {
      const I = i[D.prop], R = ee(Y(M, I)), te = ee(Y(A, I));
      if (R !== te) return R ? 1 : -1;
      if (R) continue;
      const _ = Qa(I, M, A);
      if (_) return D.dir === "desc" ? -_ : _;
    }
    return 0;
  }) : p;
}
function tn(d, a, l = !1) {
  if (!a) return [{ key: Ne, option: null, rows: d }];
  const e = $e(a).map((h) => ({ key: h.value, option: h, rows: [] })), i = { key: Ne, option: null, rows: [] }, c = Object.fromEntries(e.map((h) => [h.key, h]));
  for (const h of d) (c[Y(h, a)] ?? i).rows.push(h);
  return (i.rows.length || l) && e.push(i), l ? e : e.filter((h) => h.rows.length);
}
function an(d) {
  const [a, l] = d.split("-").map(Number), i = (new Date(a, l - 1, 1).getDay() + 6) % 7, c = [];
  for (let h = 0; h < 42; h++) {
    const p = new Date(a, l - 1, 1 - i + h);
    c.push({ iso: ut(p), day: p.getDate(), outside: p.getMonth() !== l - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const wt = (d, a) => {
  const [l, e] = d.split("-").map(Number), i = new Date(l, e - 1 + a, 1);
  return `${i.getFullYear()}-${lt(i.getMonth() + 1)}`;
};
function $t(d, a = "table", l = {}) {
  return { id: we(), name: d, layout: a, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...l };
}
const Qr = (d, a, l = "") => ({ id: we(), prop: d, op: a, value: l }), ei = (d, a = "asc") => ({ id: we(), prop: d, dir: a });
function nn(d, a) {
  const l = {};
  for (const e of d.filters) {
    const i = a.find((c) => c.key === e.prop);
    !i || !Ve(i) || ee(e.value) || (e.op === "is" && (l[e.prop] = e.value), e.op === "contains" && i.type === "multi" && (l[e.prop] = [e.value]));
  }
  return l;
}
const sn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), ln = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), Bt = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function ot(d) {
  if (!d) return "";
  const a = /* @__PURE__ */ new Date(d + "T00:00");
  return (a.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? sn : ln).format(a);
}
const on = (d) => {
  const [a, l] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(a, l - 1, 1));
}, rn = {
  key: 0,
  class: "at-pv-title"
}, un = ["checked"], dn = {
  key: 2,
  class: "at-pv-empty"
}, cn = {
  key: 5,
  class: "at-pv-multi"
}, pn = {
  key: 6,
  class: "at-pv-person"
}, vn = { class: "at-ellipsis" }, mn = {
  key: 7,
  class: "at-pv-rel"
}, hn = { class: "at-ellipsis" }, gn = {
  key: 9,
  class: "at-num"
}, fn = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, de = /* @__PURE__ */ B({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(d) {
    const a = d, l = S(() => Y(a.row, a.prop)), e = S(() => a.prop.type), i = S(() => Te(a.prop) ? Ie(a.prop, a.row, l.value) : void 0), c = S(() => e.value === "multi" ? (l.value ?? []).map((w) => Ie(a.prop, a.row, w)).filter(Boolean) : []), h = S(() => {
      var w, M;
      return e.value === "date" && !!((M = (w = a.prop).overdue) != null && M.call(w, a.row));
    }), p = S(() => {
      var w;
      return ((w = i.value) == null ? void 0 : w.label) ?? String(l.value ?? "");
    });
    return (w, M) => {
      var A, D, I;
      return e.value === "title" ? (t(), n("span", rn, v(l.value || "Sans titre"), 1)) : e.value === "checkbox" ? (t(), n("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!l.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, un)) : E(ee)(l.value) ? (t(), n("span", dn, "—")) : e.value === "status" ? (t(), n("span", {
        key: 3,
        class: x(["at-badge", ((A = i.value) == null ? void 0 : A.tone) && i.value.tone !== "neutral" && `at-badge--${i.value.tone}`])
      }, v(p.value), 3)) : e.value === "select" ? (t(), n("span", {
        key: 4,
        class: x(["at-tag", ((D = i.value) == null ? void 0 : D.color) && i.value.color !== "gray" && `at-tag--${i.value.color}`])
      }, v(p.value), 3)) : e.value === "multi" ? (t(), n("span", cn, [
        (t(!0), n(b, null, V(c.value, (R) => (t(), n("span", {
          key: R.value,
          class: x(["at-tag", R.color && R.color !== "gray" && `at-tag--${R.color}`])
        }, v(R.label), 3))), 128))
      ])) : e.value === "person" ? (t(), n("span", pn, [
        g(Dt, { name: p.value }, null, 8, ["name"]),
        u("span", vn, v(p.value), 1)
      ])) : e.value === "relation" ? (t(), n("span", mn, [
        (I = i.value) != null && I.mark ? (t(), n("span", {
          key: 0,
          class: "at-pv-mark",
          style: Q({ background: i.value.mark })
        }, null, 4)) : (t(), F(C, {
          key: 1,
          name: w.prop.icon ?? "link"
        }, null, 8, ["name"])),
        u("span", hn, v(i.value ? i.value.label : "Introuvable"), 1)
      ])) : e.value === "date" ? (t(), n("span", {
        key: 8,
        class: x(["at-pv-date", h.value && "at-pv-over"])
      }, v(E(ot)(l.value)), 3)) : e.value === "number" ? (t(), n("span", gn, v(E(Bt).format(Number(l.value))) + v(w.prop.suffix ?? ""), 1)) : e.value === "progress" ? (t(), F(Lt, {
        key: 10,
        value: Number(l.value)
      }, null, 8, ["value"])) : (t(), n("span", fn, v(l.value), 1));
    };
  }
}), yn = ["aria-label"], bn = { class: "at-menu-label" }, kn = ["aria-selected", "onClick"], _n = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, wn = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), $n = ["aria-label"], Mn = { class: "at-menu-label" }, An = ["aria-checked", "onClick"], Cn = ["checked"], Sn = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Vn = { class: "at-menu-title" }, Tn = ["value", "aria-label"], zn = { class: "at-menu-actions" }, Dn = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Ln = { class: "at-menu-title" }, En = ["type", "aria-label"], dt = /* @__PURE__ */ B({
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
  setup(d, { emit: a }) {
    const l = J(d, "open"), e = d, i = a, c = O(""), h = O(), p = S(() => {
      const _ = e.prop;
      return _ ? Te(_) ? "options" : _.type === "multi" ? "multi" : _.type === "date" ? "date" : "input" : null;
    }), w = S(() => e.prop ? $e(e.prop, e.row) : []), M = S(() => e.prop && e.row ? e.row[e.prop.key] : null);
    pe(l, (_) => {
      _ && (c.value = M.value ?? "", ze(() => {
        var L, U;
        const $ = (L = h.value) == null ? void 0 : L.querySelector("input, button");
        $ == null || $.focus(), (U = $ == null ? void 0 : $.select) == null || U.call($);
      }));
    });
    const A = (_) => ({ ...e.row, [e.prop.key]: _ });
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
      (($ = e.prop) == null ? void 0 : $.type) === "number" && (_ = _ === "" || _ == null ? null : Number(_)), _ !== M.value && i("update", _), l.value = !1;
    }
    function te() {
      var _;
      if (p.value === "input") {
        let $ = c.value;
        ((_ = e.prop) == null ? void 0 : _.type) === "number" && ($ = $ === "" ? null : Number($)), $ !== M.value && i("update", $);
      }
    }
    return (_, $) => (t(), F(ue, {
      open: l.value,
      "onUpdate:open": $[5] || ($[5] = (L) => l.value = L),
      anchor: _.anchor,
      onClose: te
    }, {
      default: P(() => [
        _.prop ? (t(), n("div", {
          key: 0,
          ref_key: "box",
          ref: h
        }, [
          p.value === "options" ? (t(), n("div", {
            key: 0,
            class: "at-menu",
            role: "listbox",
            "aria-label": _.prop.name
          }, [
            u("div", bn, v(_.prop.name), 1),
            (t(!0), n(b, null, V(w.value, (L) => (t(), n("button", {
              key: L.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": L.value === M.value,
              onClick: (U) => D(L.value)
            }, [
              g(de, {
                prop: _.prop,
                row: A(L.value)
              }, null, 8, ["prop", "row"]),
              L.value === M.value ? (t(), F(C, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : f("", !0)
            ], 8, kn))), 128)),
            w.value.length ? f("", !0) : (t(), n("div", _n, "Aucune option disponible")),
            _.prop.required ? f("", !0) : (t(), n(b, { key: 1 }, [
              wn,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: $[0] || ($[0] = (L) => D(null))
              }, [
                g(C, { name: "x" }),
                k("Effacer")
              ])
            ], 64))
          ], 8, yn)) : p.value === "multi" ? (t(), n("div", {
            key: 1,
            class: "at-menu",
            "aria-label": _.prop.name
          }, [
            u("div", Mn, v(_.prop.name), 1),
            (t(!0), n(b, null, V(w.value, (L) => (t(), n("button", {
              key: L.value,
              type: "button",
              class: "at-menu-item",
              role: "menuitemcheckbox",
              "aria-checked": (M.value ?? []).includes(L.value),
              onClick: (U) => I(L.value)
            }, [
              u("input", {
                type: "checkbox",
                class: "at-check",
                tabindex: "-1",
                checked: (M.value ?? []).includes(L.value)
              }, null, 8, Cn),
              u("span", {
                class: x(["at-tag", L.color && L.color !== "gray" && `at-tag--${L.color}`])
              }, v(L.label), 3)
            ], 8, An))), 128))
          ], 8, $n)) : p.value === "date" ? (t(), n("div", Sn, [
            u("span", Vn, v(_.prop.name), 1),
            u("input", {
              type: "date",
              class: "at-input",
              value: M.value ?? "",
              "aria-label": _.prop.name,
              onChange: $[1] || ($[1] = (L) => D(L.target.value || null, !1))
            }, null, 40, Tn),
            u("div", zn, [
              g(N, {
                size: "sm",
                onClick: $[2] || ($[2] = (L) => D(E(Se)()))
              }, {
                default: P(() => [
                  k("Aujourd’hui")
                ]),
                _: 1
              }),
              g(N, {
                size: "sm",
                variant: "ghost",
                onClick: $[3] || ($[3] = (L) => D(null))
              }, {
                default: P(() => [
                  k("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (t(), n("div", Dn, [
            u("span", Ln, v(_.prop.name), 1),
            j(u("input", {
              "onUpdate:modelValue": $[4] || ($[4] = (L) => c.value = L),
              class: "at-input",
              type: _.prop.type === "number" ? "number" : "text",
              "aria-label": _.prop.name,
              onKeydown: ha(R, ["enter"])
            }, null, 40, En), [
              [st, c.value]
            ])
          ]))
        ], 512)) : f("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor"]));
  }
}), Bn = { class: "at-dv" }, xn = { class: "at-dv-viewsbar" }, Pn = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Un = ["aria-selected", "title", "onClick"], On = { class: "at-toolbar at-dv-toolbar" }, Fn = {
  key: 0,
  class: "at-dv-n"
}, Nn = {
  key: 0,
  class: "at-dv-n"
}, In = { class: "at-input-wrap at-dv-search" }, qn = {
  key: 0,
  class: "at-dv-chips"
}, Hn = { class: "at-table-wrap" }, jn = /* @__PURE__ */ u("col", { style: { width: "36px" } }, null, -1), Rn = /* @__PURE__ */ u("col", { style: { width: "44px" } }, null, -1), Wn = { class: "at-cell-check" }, Kn = ["checked", "indeterminate"], Gn = { class: "at-th" }, Yn = ["onMousedown"], Jn = { class: "at-cell-check" }, Xn = {
  key: 0,
  class: "at-dv-grouprow"
}, Zn = ["colspan"], Qn = ["aria-expanded", "onClick"], es = {
  key: 1,
  class: "at-pv-empty"
}, ts = { class: "at-count" }, as = ["aria-selected"], ns = { class: "at-cell-check" }, ss = ["checked", "onChange"], ls = ["onClick"], os = ["onClick"], rs = /* @__PURE__ */ u("td", null, null, -1), is = { class: "at-dv-newrow" }, us = /* @__PURE__ */ u("td", null, null, -1), ds = ["colspan"], cs = ["onClick"], ps = /* @__PURE__ */ u("td", null, null, -1), vs = /* @__PURE__ */ u("td", null, null, -1), ms = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, hs = { class: "at-num" }, gs = {
  key: 2,
  class: "at-dv-board"
}, fs = {
  key: 0,
  class: "at-empty"
}, ys = ["onDragover", "onDrop"], bs = { class: "at-dv-colhead" }, ks = {
  key: 1,
  class: "at-pv-empty"
}, _s = { class: "at-count" }, ws = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), $s = { class: "at-dv-cards" }, Ms = ["onDragstart", "onClick"], As = { class: "at-dv-cardtitle" }, Cs = {
  key: 0,
  class: "at-dv-cardprops"
}, Ss = ["onClick"], Vs = { key: 3 }, Ts = {
  key: 0,
  class: "at-empty"
}, zs = {
  key: 1,
  class: "at-dv-list"
}, Ds = {
  key: 0,
  class: "at-dv-lgroup"
}, Ls = ["aria-expanded", "onClick"], Es = {
  key: 1,
  class: "at-pv-empty"
}, Bs = { class: "at-count" }, xs = ["onClick"], Ps = { class: "at-pv-title" }, Us = { class: "at-dv-liprops" }, Os = { class: "at-dv-newline" }, Fs = { class: "at-dv-calhead" }, Ns = { class: "at-dv-calmonth" }, Is = { class: "at-dv-calnote" }, qs = { class: "at-dv-calwrap" }, Hs = { class: "at-dv-calgrid" }, js = { class: "at-dv-calgrid" }, Rs = ["onDragover", "onDrop"], Ws = { class: "at-dv-daynum" }, Ks = ["aria-label", "onClick"], Gs = ["onDragstart", "onClick"], Ys = {
  class: "at-menu",
  role: "menu"
}, Js = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Nouvelle vue", -1), Xs = ["onClick"], Zs = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, Qs = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), el = { class: "at-rules" }, tl = {
  key: 0,
  class: "at-menu-empty"
}, al = { class: "at-select" }, nl = ["onUpdate:modelValue", "onChange"], sl = ["value"], ll = { class: "at-select" }, ol = ["onUpdate:modelValue"], rl = ["value"], il = {
  key: 0,
  class: "at-select"
}, ul = ["onUpdate:modelValue"], dl = /* @__PURE__ */ u("option", { value: "" }, "Choisir…", -1), cl = ["value"], pl = ["onUpdate:modelValue"], vl = ["onUpdate:modelValue"], ml = ["onUpdate:modelValue"], hl = { key: 1 }, gl = { class: "at-menu-actions" }, fl = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, yl = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), bl = { class: "at-rules" }, kl = {
  key: 0,
  class: "at-menu-empty"
}, _l = { class: "at-select" }, wl = ["onUpdate:modelValue"], $l = ["value"], Ml = { class: "at-select" }, Al = ["onUpdate:modelValue"], Cl = /* @__PURE__ */ u("option", { value: "asc" }, "Croissant", -1), Sl = /* @__PURE__ */ u("option", { value: "desc" }, "Décroissant", -1), Vl = [
  Cl,
  Sl
], Tl = { class: "at-menu-actions" }, zl = {
  class: "at-menu",
  role: "menu"
}, Dl = { class: "at-menu-label" }, Ll = ["onClick"], El = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Bl = /* @__PURE__ */ u("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), xl = ["draggable", "onDragstart", "onDragover", "onDrop"], Pl = { class: "at-pi-name" }, Ul = ["aria-label", "checked", "disabled", "onChange"], Ol = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), Fl = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Nl = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Il = /* @__PURE__ */ u("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), ql = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Hl = ["aria-pressed", "onClick"], jl = {
  key: 0,
  class: "at-field-row"
}, Rl = { class: "at-select" }, Wl = ["value"], Kl = {
  key: 0,
  value: ""
}, Gl = ["value"], Yl = {
  key: 1,
  class: "at-field-row"
}, Jl = /* @__PURE__ */ u("span", null, "Date utilisée", -1), Xl = { class: "at-select" }, Zl = ["value"], Ql = ["value"], eo = /* @__PURE__ */ u("div", { class: "at-menu-sep" }, null, -1), to = ["disabled"], ao = /* @__PURE__ */ B({
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
  setup(d, { emit: a }) {
    const l = d, e = J(d, "views"), i = J(d, "activeView"), c = a, h = (o) => o[l.rowKey], p = S(() => e.value.find((o) => o.id === i.value) ?? e.value[0]), w = S(() => Object.fromEntries(l.schema.map((o) => [o.key, o]))), M = S(() => l.schema.find((o) => o.type === "title")), A = S(() => {
      var o;
      return ((o = M.value) == null ? void 0 : o.key) ?? l.rowKey;
    }), D = S(() => {
      const o = (p.value.order ?? []).filter((y) => w.value[y]);
      for (const y of l.schema) o.includes(y.key) || o.push(y.key);
      const r = o.indexOf(A.value);
      return r > 0 && (o.splice(r, 1), o.unshift(A.value)), o.map((y) => w.value[y]);
    }), I = S(() => D.value.filter((o) => o.type === "title" || !p.value.hidden.includes(o.key))), R = S(() => I.value.filter((o) => o.type !== "title")), te = S(() => l.schema.filter(Te)), _ = S(() => l.schema.filter((o) => o.type === "date")), $ = S(() => l.schema.find((o) => o.type === "status")), L = O(""), U = S(() => en(l.rows, l.schema, p.value, L.value)), q = S(() => {
      var r, y;
      const o = p.value.groupBy && w.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !o ? ((r = $.value) == null ? void 0 : r.key) ?? ((y = te.value[0]) == null ? void 0 : y.key) ?? null : o;
    }), H = S(() => q.value && p.value.layout !== "calendar" ? w.value[q.value] : null), re = S(() => tn(U.value, H.value, p.value.layout === "board")), X = (o) => ({ [q.value]: o === Ne ? null : o }), le = S(() => p.value.filters.filter((o) => w.value[o.prop])), oe = S(() => p.value.sorts.filter((o) => w.value[o.prop])), He = O({}), ae = O(null), ce = O(null);
    function ne(o, r) {
      if (ae.value === o && ce.value === r) {
        ae.value = null;
        return;
      }
      ce.value = r ?? null, ae.value = o;
    }
    const he = (o) => S({ get: () => ae.value === o, set: (r) => {
      !r && ae.value === o && (ae.value = null);
    } }), je = he("add"), Re = he("filter"), We = he("sort"), Ke = he("group"), Ge = he("props"), Ye = he("settings");
    function qt(o) {
      o.id === p.value.id ? ne("settings", He.value[o.id]) : i.value = o.id;
    }
    const pt = () => {
      var o, r;
      return ((o = $.value) == null ? void 0 : o.key) ?? ((r = te.value[0]) == null ? void 0 : r.key) ?? null;
    };
    function Ht(o) {
      const r = $t(Ue.find((y) => y.value === o).label, o, { groupBy: o === "board" ? pt() : null });
      e.value.push(r), i.value = r.id, ae.value = null, ze(() => ne("settings", He.value[r.id]));
    }
    function jt(o) {
      p.value.layout = o, o === "board" && !p.value.groupBy && (p.value.groupBy = pt());
    }
    function Rt() {
      const o = JSON.parse(JSON.stringify(p.value));
      o.id = we(), o.name = p.value.name + " (copie)", e.value.push(o), i.value = o.id, ae.value = null;
    }
    function Wt() {
      if (e.value.length < 2) return;
      const o = e.value.indexOf(p.value);
      e.value.splice(o, 1), i.value = e.value[Math.max(0, o - 1)].id, ae.value = null;
    }
    pe(() => p.value.id, () => {
      W.value = [], ae.value = null;
    });
    function Kt() {
      const o = l.schema.find((r) => r.type !== "title" && r.type !== "progress") ?? l.schema[0];
      p.value.filters.push({ id: we(), prop: o.key, op: nt[o.type][0], value: "" });
    }
    function Gt(o) {
      o.op = nt[w.value[o.prop].type][0], o.value = "";
    }
    const Yt = (o) => {
      var r;
      return nt[(r = w.value[o.prop]) == null ? void 0 : r.type] ?? [];
    }, vt = (o) => !Et.includes(o.op);
    function De(o) {
      const r = w.value[o.prop];
      return r ? Te(r) || r.type === "multi" ? "options" : r.type === "date" ? "date" : r.type === "number" || r.type === "progress" ? "number" : "text" : "text";
    }
    function Je(o) {
      var K;
      const r = w.value[o.prop];
      let y = "";
      if (vt(o)) {
        const s = De(o);
        y = s === "options" ? ((K = Ie(r, void 0, o.value)) == null ? void 0 : K.label) ?? "…" : s === "date" ? ot(o.value) || "…" : o.value === "" ? "…" : o.value;
      }
      return { name: r.name, op: _t[o.op], val: y };
    }
    function Jt() {
      const o = p.value.sorts.map((y) => y.prop), r = l.schema.find((y) => !o.includes(y.key)) ?? l.schema[0];
      p.value.sorts.push({ id: we(), prop: r.key, dir: "asc" });
    }
    const mt = (o, r) => {
      const y = o.indexOf(r);
      y >= 0 && o.splice(y, 1);
    };
    function Xt() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function Xe(o) {
      p.value.groupBy = o, p.value.collapsed = [], p.value.layout !== "board" && (ae.value = null);
    }
    function Zt(o) {
      const r = p.value.hidden, y = r.indexOf(o.key);
      y < 0 ? r.push(o.key) : r.splice(y, 1);
    }
    function ht(o) {
      p.value.hidden = o ? [] : l.schema.filter((r) => r.type !== "title").map((r) => r.key);
    }
    const Me = O(null), Le = O(null);
    function Qt(o) {
      if (Me.value == null) return;
      const r = D.value.map((K) => K.key), [y] = r.splice(Me.value, 1);
      r.splice(o, 0, y), p.value.order = r, Me.value = null, Le.value = null;
    }
    const Ze = (o) => p.value.widths[o.key] ?? o.width ?? 160, ea = S(() => 36 + I.value.reduce((o, r) => o + Ze(r), 0) + 44), Qe = O(null);
    function ta(o, r) {
      const y = o.clientX, K = Ze(r);
      Qe.value = r.key;
      const s = (T) => {
        p.value.widths[r.key] = Math.max(70, Math.round(K + T.clientX - y));
      }, m = () => {
        Qe.value = null, window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", m);
      };
      window.addEventListener("mousemove", s), window.addEventListener("mouseup", m);
    }
    const W = O([]), et = S(() => U.value.length > 0 && U.value.every((o) => W.value.includes(h(o)))), aa = S(() => W.value.length > 0 && !et.value);
    function na(o) {
      const r = W.value.indexOf(h(o));
      r < 0 ? W.value.push(h(o)) : W.value.splice(r, 1);
    }
    function sa() {
      W.value = et.value ? [] : U.value.map(h);
    }
    function la() {
      c("delete", l.rows.filter((o) => W.value.includes(h(o)))), W.value = [];
    }
    const ge = (o) => p.value.collapsed.includes(o);
    function gt(o) {
      const r = p.value.collapsed, y = r.indexOf(o);
      y < 0 ? r.push(o) : r.splice(y, 1);
    }
    function tt(o) {
      const r = U.value;
      if (o.type === "title") return { label: "Total", value: String(r.length) };
      if (o.type === "number") return { label: "Somme", value: Bt.format(r.reduce((y, K) => y + (Number(Y(K, o)) || 0), 0)) + (o.suffix ?? "") };
      if (o.type === "progress" && r.length) return { label: "Moyenne", value: Math.round(r.reduce((y, K) => y + Number(Y(K, o)), 0) / r.length) + " %" };
      if (o.type === "date" && o.overdue) {
        const y = r.filter((K) => o.overdue(K)).length;
        return y ? { label: "En retard", value: String(y) } : null;
      }
      return o.type === "checkbox" ? { label: "Cochées", value: String(r.filter((y) => Y(y, o)).length) } : null;
    }
    const fe = ga(null), ft = O(null), at = O(!1);
    function oa(o, r, y) {
      if (y.type === "title") {
        c("open", r);
        return;
      }
      if (Ve(y)) {
        if (y.type === "checkbox") {
          c("update", r, y.key, !r[y.key]);
          return;
        }
        ft.value = o.currentTarget, fe.value = { row: r, prop: y }, at.value = !0;
      }
    }
    function me(o = {}) {
      c("create", { ...nn(p.value, l.schema), ...o });
    }
    const Ee = O(null), ye = O(null);
    function yt(o, r) {
      Ee.value = h(r), o.dataTransfer && (o.dataTransfer.effectAllowed = "move", o.dataTransfer.setData("text/plain", String(h(r))));
    }
    function Be() {
      Ee.value = null, ye.value = null;
    }
    const bt = () => l.rows.find((o) => h(o) === Ee.value);
    function ra(o) {
      const r = bt();
      r && q.value && c("update", r, q.value, o === Ne ? null : o), Be();
    }
    function ia(o) {
      const r = bt();
      r && se.value && c("update", r, se.value, o), Be();
    }
    const se = S(() => {
      var o;
      return p.value.dateProp && w.value[p.value.dateProp] ? p.value.dateProp : ((o = _.value[0]) == null ? void 0 : o.key) ?? null;
    }), xe = S(() => p.value.month ?? Se().slice(0, 7)), ua = S(() => an(xe.value).map((o) => ({ ...o, today: o.iso === Se(), rows: se.value ? U.value.filter((r) => r[se.value] === o.iso) : [] }))), kt = S(() => se.value ? U.value.filter((o) => !o[se.value]).length : 0), da = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, ca = (o) => {
      const r = $.value, y = r ? Ie(r, o, o[r.key]) : void 0;
      return da[(y == null ? void 0 : y.tone) ?? "neutral"];
    }, pa = (o) => {
      const r = $.value;
      if (!r) return !1;
      const y = $e(r, o);
      return y.length > 0 && o[r.key] === y[y.length - 1].value;
    }, va = (o) => {
      var r;
      return ((r = Ue.find((y) => y.value === o)) == null ? void 0 : r.icon) ?? "table";
    }, Pe = S(() => H.value ? `Sans ${H.value.name.toLowerCase()}` : "");
    return (o, r) => {
      var y, K;
      return t(), n("section", Bn, [
        u("div", xn, [
          o.hideViews ? f("", !0) : (t(), n(b, { key: 0 }, [
            u("div", Pn, [
              (t(!0), n(b, null, V(e.value, (s) => (t(), n("button", {
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
                onClick: (m) => qt(s)
              }, [
                g(C, {
                  name: va(s.layout)
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
              class: x({ "is-on": le.value.length }),
              onClick: r[1] || (r[1] = (s) => ne("filter", s.currentTarget))
            }, {
              default: P(() => [
                k(" Filtrer"),
                le.value.length ? (t(), n("span", Fn, v(le.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: x({ "is-on": oe.value.length }),
              onClick: r[2] || (r[2] = (s) => ne("sort", s.currentTarget))
            }, {
              default: P(() => [
                k(" Trier"),
                oe.value.length ? (t(), n("span", Nn, v(oe.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 8, ["class"]),
            p.value.layout !== "calendar" ? (t(), F(N, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: x({ "is-on": p.value.groupBy }),
              onClick: r[3] || (r[3] = (s) => ne("group", s.currentTarget))
            }, {
              default: P(() => [
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
              default: P(() => [
                k("Propriétés")
              ]),
              _: 1
            }),
            u("div", In, [
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
            o.hideViews ? f("", !0) : (t(), F(N, {
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
              default: P(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        le.value.length || oe.value.length ? (t(), n("div", qn, [
          (t(!0), n(b, null, V(le.value, (s) => (t(), n("button", {
            key: s.id,
            type: "button",
            class: "at-dv-chip",
            onClick: r[8] || (r[8] = (m) => ne("filter", m.currentTarget))
          }, [
            g(C, { name: "filter" }),
            k(v(Je(s).name) + " " + v(Je(s).op) + " ", 1),
            u("b", null, v(Je(s).val), 1)
          ]))), 128)),
          (t(!0), n(b, null, V(oe.value, (s) => (t(), n("button", {
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
            onClick: Xt
          }, {
            default: P(() => [
              k("Tout effacer")
            ]),
            _: 1
          })
        ])) : f("", !0),
        p.value.layout === "table" ? (t(), n(b, { key: 1 }, [
          u("div", Hn, [
            u("table", {
              class: "at-table at-dv-table",
              style: Q({ width: ea.value + "px", minWidth: "100%" })
            }, [
              u("colgroup", null, [
                jn,
                (t(!0), n(b, null, V(I.value, (s) => (t(), n("col", {
                  key: s.key,
                  style: Q({ width: Ze(s) + "px" })
                }, null, 4))), 128)),
                Rn
              ]),
              u("thead", null, [
                u("tr", null, [
                  u("th", Wn, [
                    u("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: et.value,
                      indeterminate: aa.value,
                      onChange: sa
                    }, null, 40, Kn)
                  ]),
                  (t(!0), n(b, null, V(I.value, (s) => (t(), n("th", {
                    key: s.key,
                    class: x({ "at-num": s.type === "number" })
                  }, [
                    u("span", Gn, [
                      g(C, {
                        name: E(Oe)(s)
                      }, null, 8, ["name"]),
                      k(v(s.name), 1)
                    ]),
                    u("span", {
                      class: x(["at-dv-resize", Qe.value === s.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ie((m) => ta(m, s), ["prevent"])
                    }, null, 42, Yn)
                  ], 2))), 128)),
                  u("th", Jn, [
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
              (t(!0), n(b, null, V(re.value, (s) => (t(), n("tbody", {
                key: s.key
              }, [
                H.value ? (t(), n("tr", Xn, [
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
                        class: x({ "at-rot": ge(s.key) })
                      }, null, 8, ["class"]),
                      s.option ? (t(), F(de, {
                        key: 0,
                        prop: H.value,
                        row: X(s.key)
                      }, null, 8, ["prop", "row"])) : (t(), n("span", es, v(Pe.value), 1)),
                      u("span", ts, v(s.rows.length), 1)
                    ], 8, Qn)
                  ], 8, Zn)
                ])) : f("", !0),
                ge(s.key) ? f("", !0) : (t(), n(b, { key: 1 }, [
                  (t(!0), n(b, null, V(s.rows, (m) => (t(), n("tr", {
                    key: h(m),
                    "aria-selected": W.value.includes(h(m)) ? "true" : void 0
                  }, [
                    u("td", ns, [
                      u("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: W.value.includes(h(m)),
                        onChange: (T) => na(m)
                      }, null, 40, ss)
                    ]),
                    (t(!0), n(b, null, V(I.value, (T) => (t(), n("td", {
                      key: T.key,
                      class: x({ "at-num": T.type === "number", "at-dv-titlecell": T.type === "title", "is-edit": T.type !== "title" && E(Ve)(T) }),
                      onClick: (Z) => oa(Z, m, T)
                    }, [
                      g(de, {
                        prop: T,
                        row: m
                      }, null, 8, ["prop", "row"]),
                      T.type === "title" ? (t(), n("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ie((Z) => c("open", m), ["stop"])
                      }, "Ouvrir", 8, os)) : f("", !0)
                    ], 10, ls))), 128)),
                    rs
                  ], 8, as))), 128)),
                  u("tr", is, [
                    us,
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
                      ], 8, cs)
                    ], 8, ds)
                  ])
                ], 64))
              ]))), 128)),
              u("tfoot", null, [
                u("tr", null, [
                  ps,
                  (t(!0), n(b, null, V(I.value, (s) => (t(), n("td", {
                    key: s.key,
                    class: x({ "at-num": s.type === "number" })
                  }, [
                    tt(s) ? (t(), n(b, { key: 0 }, [
                      k(v(tt(s).label) + " ", 1),
                      u("b", null, v(tt(s).value), 1)
                    ], 64)) : f("", !0)
                  ], 2))), 128)),
                  vs
                ])
              ])
            ], 4)
          ]),
          W.value.length ? (t(), n("div", ms, [
            u("span", null, [
              u("b", hs, v(W.value.length), 1),
              k(" sélectionnée" + v(W.value.length > 1 ? "s" : ""), 1)
            ]),
            g(N, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: la
            }, {
              default: P(() => [
                k("Supprimer")
              ]),
              _: 1
            }),
            g(N, {
              variant: "ghost",
              size: "sm",
              onClick: r[11] || (r[11] = (s) => W.value = [])
            }, {
              default: P(() => [
                k("Désélectionner")
              ]),
              _: 1
            })
          ])) : f("", !0)
        ], 64)) : p.value.layout === "board" ? (t(), n("div", gs, [
          H.value ? (t(!0), n(b, { key: 1 }, V(re.value, (s) => {
            var m;
            return t(), n("div", {
              key: s.key,
              class: x(["at-dv-col", ye.value === s.key && "over"]),
              onDragover: ie((T) => ye.value = s.key, ["prevent"]),
              onDragleave: r[12] || (r[12] = ie((T) => ye.value = null, ["self"])),
              onDrop: ie((T) => ra(s.key), ["prevent"])
            }, [
              u("div", bs, [
                s.option ? (t(), F(de, {
                  key: 0,
                  prop: H.value,
                  row: X(s.key)
                }, null, 8, ["prop", "row"])) : (t(), n("span", ks, v(Pe.value), 1)),
                u("span", _s, v(s.rows.length), 1),
                ws,
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((m = s.option) == null ? void 0 : m.label) ?? Pe.value}`,
                  onClick: (T) => me(X(s.key))
                }, null, 8, ["label", "onClick"])
              ]),
              u("div", $s, [
                (t(!0), n(b, null, V(s.rows, (T) => (t(), n("button", {
                  key: h(T),
                  type: "button",
                  class: x(["at-dv-card", Ee.value === h(T) && "dragging"]),
                  draggable: "true",
                  onDragstart: (Z) => yt(Z, T),
                  onDragend: Be,
                  onClick: (Z) => c("open", T)
                }, [
                  u("span", As, v(T[A.value] || "Sans titre"), 1),
                  R.value.some((Z) => !E(ee)(E(Y)(T, Z)) || Z.type === "checkbox") ? (t(), n("span", Cs, [
                    (t(!0), n(b, null, V(R.value, (Z) => (t(), n(b, {
                      key: Z.key
                    }, [
                      E(ee)(E(Y)(T, Z)) ? f("", !0) : (t(), F(de, {
                        key: 0,
                        prop: Z,
                        row: T
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : f("", !0)
                ], 42, Ms))), 128)),
                u("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (T) => me(X(s.key))
                }, [
                  g(C, { name: "plus" }),
                  k(v(o.newLabel), 1)
                ], 8, Ss)
              ])
            ], 42, ys);
          }), 128)) : (t(), n("div", fs, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (t(), n("div", Vs, [
          U.value.length ? (t(), n("div", zs, [
            (t(!0), n(b, null, V(re.value, (s) => (t(), n(b, {
              key: s.key
            }, [
              H.value ? (t(), n("div", Ds, [
                u("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !ge(s.key),
                  onClick: (m) => gt(s.key)
                }, [
                  g(C, {
                    name: "chevron-down",
                    class: x({ "at-rot": ge(s.key) })
                  }, null, 8, ["class"]),
                  s.option ? (t(), F(de, {
                    key: 0,
                    prop: H.value,
                    row: X(s.key)
                  }, null, 8, ["prop", "row"])) : (t(), n("span", Es, v(Pe.value), 1)),
                  u("span", Bs, v(s.rows.length), 1)
                ], 8, Ls)
              ])) : f("", !0),
              ge(s.key) ? f("", !0) : (t(!0), n(b, { key: 1 }, V(s.rows, (m) => (t(), n("button", {
                key: h(m),
                type: "button",
                class: "at-dv-li",
                onClick: (T) => c("open", m)
              }, [
                u("span", Ps, v(m[A.value] || "Sans titre"), 1),
                u("span", Us, [
                  (t(!0), n(b, null, V(R.value, (T) => (t(), n(b, {
                    key: T.key
                  }, [
                    E(ee)(E(Y)(m, T)) ? f("", !0) : (t(), F(de, {
                      key: 0,
                      prop: T,
                      row: m
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, xs))), 128))
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
          ])) : (t(), n("div", Ts, [
            k("Aucun élément ne correspond à cette vue."),
            g(N, {
              size: "sm",
              icon: "plus",
              onClick: r[13] || (r[13] = (s) => me())
            }, {
              default: P(() => [
                k(v(o.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (t(), n(b, { key: 4 }, [
          u("div", Fs, [
            u("span", Ns, v(E(on)(xe.value)), 1),
            g(N, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: r[15] || (r[15] = (s) => p.value.month = E(wt)(xe.value, -1))
            }),
            g(N, {
              size: "sm",
              onClick: r[16] || (r[16] = (s) => p.value.month = E(Se)().slice(0, 7))
            }, {
              default: P(() => [
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
              onClick: r[17] || (r[17] = (s) => p.value.month = E(wt)(xe.value, 1))
            }),
            u("span", Is, [
              se.value ? (t(), n(b, { key: 0 }, [
                k("Par " + v(w.value[se.value].name.toLowerCase()), 1),
                kt.value ? (t(), n(b, { key: 0 }, [
                  k(" · " + v(kt.value) + " sans date", 1)
                ], 64)) : f("", !0)
              ], 64)) : (t(), n(b, { key: 1 }, [
                k("Aucune propriété date")
              ], 64))
            ])
          ]),
          u("div", qs, [
            u("div", Hs, [
              (t(), n(b, null, V(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (s) => u("div", {
                key: s,
                class: "at-dv-dow"
              }, v(s), 1)), 64))
            ]),
            u("div", js, [
              (t(!0), n(b, null, V(ua.value, (s) => (t(), n("div", {
                key: s.iso,
                class: x(["at-dv-day", s.outside && "out", s.today && "today", ye.value === s.iso && "over"]),
                onDragover: ie((m) => ye.value = s.iso, ["prevent"]),
                onDrop: ie((m) => ia(s.iso), ["prevent"])
              }, [
                u("div", Ws, [
                  u("span", null, v(s.day), 1),
                  se.value ? (t(), n("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${E(ot)(s.iso)}`,
                    onClick: (m) => me({ [se.value]: s.iso })
                  }, [
                    g(C, { name: "plus" })
                  ], 8, Ks)) : f("", !0)
                ]),
                (t(!0), n(b, null, V(s.rows, (m) => (t(), n("button", {
                  key: h(m),
                  type: "button",
                  class: x(["at-dv-calitem", pa(m) && "done"]),
                  draggable: "true",
                  onDragstart: (T) => yt(T, m),
                  onDragend: Be,
                  onClick: (T) => c("open", m)
                }, [
                  u("span", {
                    class: "dot",
                    style: Q({ background: ca(m) })
                  }, null, 4),
                  u("span", null, v(m[A.value] || "Sans titre"), 1)
                ], 42, Gs))), 128))
              ], 42, Rs))), 128))
            ])
          ])
        ], 64)),
        g(ue, {
          open: E(je),
          "onUpdate:open": r[18] || (r[18] = (s) => be(je) ? je.value = s : null),
          anchor: ce.value
        }, {
          default: P(() => [
            u("div", Ys, [
              Js,
              (t(!0), n(b, null, V(E(Ue), (s) => (t(), n("button", {
                key: s.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (m) => Ht(s.value)
              }, [
                g(C, {
                  name: s.icon
                }, null, 8, ["name"]),
                k(v(s.label), 1)
              ], 8, Xs))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(Re),
          "onUpdate:open": r[19] || (r[19] = (s) => be(Re) ? Re.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: P(() => [
            u("div", Zs, [
              Qs,
              u("div", el, [
                p.value.filters.length ? f("", !0) : (t(), n("span", tl, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), n(b, null, V(p.value.filters, (s) => (t(), n("div", {
                  key: s.id,
                  class: "at-rule"
                }, [
                  u("div", al, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.prop = m,
                      "aria-label": "Propriété",
                      onChange: (m) => Gt(s)
                    }, [
                      (t(!0), n(b, null, V(o.schema, (m) => (t(), n("option", {
                        key: m.key,
                        value: m.key
                      }, v(m.name), 9, sl))), 128))
                    ], 40, nl), [
                      [_e, s.prop]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  u("div", ll, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.op = m,
                      "aria-label": "Condition"
                    }, [
                      (t(!0), n(b, null, V(Yt(s), (m) => (t(), n("option", {
                        key: m,
                        value: m
                      }, v(E(_t)[m]), 9, rl))), 128))
                    ], 8, ol), [
                      [_e, s.op]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  vt(s) ? (t(), n(b, { key: 0 }, [
                    De(s) === "options" ? (t(), n("div", il, [
                      j(u("select", {
                        "onUpdate:modelValue": (m) => s.value = m,
                        "aria-label": "Valeur"
                      }, [
                        dl,
                        (t(!0), n(b, null, V(E($e)(w.value[s.prop]), (m) => (t(), n("option", {
                          key: m.value,
                          value: m.value
                        }, v(m.label), 9, cl))), 128))
                      ], 8, ul), [
                        [_e, s.value]
                      ]),
                      g(C, { name: "chevron-down" })
                    ])) : De(s) === "date" ? j((t(), n("input", {
                      key: 1,
                      "onUpdate:modelValue": (m) => s.value = m,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, pl)), [
                      [ke, s.value]
                    ]) : De(s) === "number" ? j((t(), n("input", {
                      key: 2,
                      "onUpdate:modelValue": (m) => s.value = m,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, vl)), [
                      [ke, s.value]
                    ]) : j((t(), n("input", {
                      key: 3,
                      "onUpdate:modelValue": (m) => s.value = m,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, ml)), [
                      [ke, s.value]
                    ])
                  ], 64)) : (t(), n("span", hl)),
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
              u("div", gl, [
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Kt
                }, {
                  default: P(() => [
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
          open: E(We),
          "onUpdate:open": r[20] || (r[20] = (s) => be(We) ? We.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: P(() => [
            u("div", fl, [
              yl,
              u("div", bl, [
                p.value.sorts.length ? f("", !0) : (t(), n("span", kl, "Aucun tri : ordre des données.")),
                (t(!0), n(b, null, V(p.value.sorts, (s) => (t(), n("div", {
                  key: s.id,
                  class: "at-rule sort"
                }, [
                  u("div", _l, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.prop = m,
                      "aria-label": "Propriété"
                    }, [
                      (t(!0), n(b, null, V(o.schema, (m) => (t(), n("option", {
                        key: m.key,
                        value: m.key
                      }, v(m.name), 9, $l))), 128))
                    ], 8, wl), [
                      [_e, s.prop]
                    ]),
                    g(C, { name: "chevron-down" })
                  ]),
                  u("div", Ml, [
                    j(u("select", {
                      "onUpdate:modelValue": (m) => s.dir = m,
                      "aria-label": "Sens"
                    }, Vl, 8, Al), [
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
              u("div", Tl, [
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Jt
                }, {
                  default: P(() => [
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
          open: E(Ke),
          "onUpdate:open": r[22] || (r[22] = (s) => be(Ke) ? Ke.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: P(() => [
            u("div", zl, [
              u("div", Dl, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: r[21] || (r[21] = (s) => Xe(null))
              }, [
                g(C, { name: "x" }),
                k("Aucun groupe"),
                p.value.groupBy ? f("", !0) : (t(), F(C, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : f("", !0),
              (t(!0), n(b, null, V(te.value, (s) => (t(), n("button", {
                key: s.key,
                type: "button",
                class: "at-menu-item",
                onClick: (m) => Xe(s.key)
              }, [
                g(C, {
                  name: E(Oe)(s)
                }, null, 8, ["name"]),
                k(v(s.name), 1),
                q.value === s.key ? (t(), F(C, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : f("", !0)
              ], 8, Ll))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(ue, {
          open: E(Ge),
          "onUpdate:open": r[26] || (r[26] = (s) => be(Ge) ? Ge.value = s : null),
          anchor: ce.value,
          align: "end"
        }, {
          default: P(() => [
            u("div", El, [
              Bl,
              (t(!0), n(b, null, V(D.value, (s, m) => (t(), n("div", {
                key: s.key,
                class: x(["at-menu-item", "at-pi", Le.value === m && "drop"]),
                draggable: s.type !== "title",
                onDragstart: (T) => Me.value = m,
                onDragover: ie((T) => Le.value = m, ["prevent"]),
                onDrop: ie((T) => Qt(m), ["prevent"]),
                onDragend: r[23] || (r[23] = (T) => {
                  Me.value = null, Le.value = null;
                })
              }, [
                g(C, {
                  name: "grip",
                  class: "grip"
                }),
                g(C, {
                  name: E(Oe)(s)
                }, null, 8, ["name"]),
                u("span", Pl, v(s.name), 1),
                u("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${s.name}`,
                  checked: s.type === "title" || !p.value.hidden.includes(s.key),
                  disabled: s.type === "title",
                  onChange: (T) => Zt(s)
                }, null, 40, Ul)
              ], 42, xl))), 128)),
              Ol,
              u("div", Fl, [
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[24] || (r[24] = (s) => ht(!0))
                }, {
                  default: P(() => [
                    k("Tout afficher")
                  ]),
                  _: 1
                }),
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  onClick: r[25] || (r[25] = (s) => ht(!1))
                }, {
                  default: P(() => [
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
          open: E(Ye),
          "onUpdate:open": r[30] || (r[30] = (s) => be(Ye) ? Ye.value = s : null),
          anchor: ce.value
        }, {
          default: P(() => [
            u("div", Nl, [
              Il,
              j(u("input", {
                "onUpdate:modelValue": r[27] || (r[27] = (s) => p.value.name = s),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [ke, p.value.name]
              ]),
              u("div", ql, [
                (t(!0), n(b, null, V(E(Ue), (s) => (t(), n("button", {
                  key: s.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === s.value,
                  onClick: (m) => jt(s.value)
                }, [
                  g(C, {
                    name: s.icon
                  }, null, 8, ["name"]),
                  k(v(s.label), 1)
                ], 8, Hl))), 128))
              ]),
              p.value.layout !== "calendar" ? (t(), n("div", jl, [
                u("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                u("div", Rl, [
                  u("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: r[28] || (r[28] = (s) => Xe(s.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (t(), n("option", Kl, "Aucun")) : f("", !0),
                    (t(!0), n(b, null, V(te.value, (s) => (t(), n("option", {
                      key: s.key,
                      value: s.key
                    }, v(s.name), 9, Gl))), 128))
                  ], 40, Wl),
                  g(C, { name: "chevron-down" })
                ])
              ])) : (t(), n("div", Yl, [
                Jl,
                u("div", Xl, [
                  u("select", {
                    value: se.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: r[29] || (r[29] = (s) => p.value.dateProp = s.target.value)
                  }, [
                    (t(!0), n(b, null, V(_.value, (s) => (t(), n("option", {
                      key: s.key,
                      value: s.key
                    }, v(s.name), 9, Ql))), 128))
                  ], 40, Zl),
                  g(C, { name: "chevron-down" })
                ])
              ])),
              eo,
              u("button", {
                type: "button",
                class: "at-menu-item",
                onClick: Rt
              }, [
                g(C, { name: "copy" }),
                k("Dupliquer la vue")
              ]),
              u("button", {
                type: "button",
                class: "at-menu-item at-menu-item--danger",
                disabled: e.value.length < 2,
                onClick: Wt
              }, [
                g(C, { name: "trash" }),
                k("Supprimer la vue")
              ], 8, to)
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
}), no = {
  key: 0,
  class: "at-drawer-wrap"
}, so = ["aria-label"], lo = { class: "at-drawer__head" }, oo = { class: "at-drawer__crumb" }, ro = /* @__PURE__ */ u("span", { class: "at-spacer" }, null, -1), io = { class: "at-drawer__body" }, uo = /* @__PURE__ */ B({
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
    const a = J(d, "open"), l = O();
    let e = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return pe(a, (c) => {
      var h;
      c ? (e = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = l.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (h = e == null ? void 0 : e.focus) == null || h.call(e));
    }, { immediate: !0 }), rt(() => document.removeEventListener("keydown", i)), (c, h) => (t(), F(it, { to: "body" }, [
      g(Tt, { name: "at-drawer" }, {
        default: P(() => [
          a.value ? (t(), n("div", no, [
            u("div", {
              class: "at-overlay",
              onClick: h[0] || (h[0] = (p) => a.value = !1)
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
              u("header", lo, [
                u("span", oo, [
                  z(c.$slots, "crumb", {}, () => [
                    k(v(c.label), 1)
                  ])
                ]),
                ro,
                z(c.$slots, "actions"),
                g(N, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: h[1] || (h[1] = (p) => a.value = !1)
                })
              ]),
              u("div", io, [
                z(c.$slots, "default")
              ])
            ], 12, so)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), co = ["aria-label"], po = {
  key: 0,
  class: "at-menu-label"
}, xt = /* @__PURE__ */ B({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(d) {
    const a = O();
    function l(e) {
      var p;
      const i = [...((p = a.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!i.length) return;
      const c = i.indexOf(document.activeElement), h = (w) => {
        e.preventDefault(), i[(w + i.length) % i.length].focus();
      };
      e.key === "ArrowDown" ? h(c + 1) : e.key === "ArrowUp" ? h(c < 0 ? i.length - 1 : c - 1) : e.key === "Home" ? h(0) : e.key === "End" && h(i.length - 1);
    }
    return (e, i) => (t(), n("div", {
      ref_key: "el",
      ref: a,
      class: "at-menu",
      role: "menu",
      "aria-label": e.label,
      style: Q(e.minWidth ? { minWidth: e.minWidth + "px" } : void 0),
      onKeydown: l
    }, [
      e.label ? (t(), n("div", po, v(e.label), 1)) : f("", !0),
      z(e.$slots, "default")
    ], 44, co));
  }
}), vo = /* @__PURE__ */ B({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    minWidth: { default: 220 }
  },
  setup(d) {
    const a = O(!1);
    function l(e) {
      e.target.closest('.at-menu-item[role="menuitem"]') && (a.value = !1);
    }
    return (e, i) => (t(), F(ue, {
      open: a.value,
      "onUpdate:open": i[0] || (i[0] = (c) => a.value = c),
      align: e.align
    }, {
      trigger: P((c) => [
        z(e.$slots, "trigger", fa(ya(c)))
      ]),
      default: P(() => [
        g(xt, {
          label: e.label,
          "min-width": e.minWidth,
          onClick: l
        }, {
          default: P(() => [
            z(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align"]));
  }
}), mo = { class: "at-empty" }, ho = /* @__PURE__ */ B({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(d) {
    return (a, l) => (t(), n("div", mo, [
      z(a.$slots, "default", {}, () => [
        k(v(a.message), 1)
      ]),
      z(a.$slots, "action")
    ]));
  }
});
let Mt = 0;
function go(d = "at") {
  return Mt += 1, `${d}-${Mt}`;
}
const fo = { class: "at-field" }, yo = ["for"], bo = ["id"], ko = ["id"], _o = /* @__PURE__ */ B({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(d) {
    const l = d.id ?? go("field");
    return (e, i) => (t(), n("div", fo, [
      e.label ? (t(), n("label", {
        key: 0,
        class: "at-label",
        for: E(l)
      }, v(e.label), 9, yo)) : f("", !0),
      z(e.$slots, "default", {
        id: E(l),
        invalid: !!e.error,
        describedby: e.error || e.hint ? E(l) + "-hint" : void 0
      }),
      e.error ? (t(), n("span", {
        key: 1,
        id: E(l) + "-hint",
        class: "at-hint at-hint--error"
      }, v(e.error), 9, bo)) : e.hint ? (t(), n("span", {
        key: 2,
        id: E(l) + "-hint",
        class: "at-hint"
      }, v(e.hint), 9, ko)) : f("", !0)
    ]));
  }
}), qe = (d, a) => {
  const l = d.__vccOpts || d;
  for (const [e, i] of a)
    l[e] = i;
  return l;
}, wo = {}, $o = { class: "at-kbd" };
function Mo(d, a) {
  return t(), n("kbd", $o, [
    z(d.$slots, "default")
  ]);
}
const ct = /* @__PURE__ */ qe(wo, [["render", Mo]]), Ao = {
  key: 0,
  class: "at-input-wrap"
}, Co = ["type", "placeholder", "disabled", "aria-invalid"], So = ["type", "placeholder", "disabled", "aria-invalid"], Vo = /* @__PURE__ */ B({
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
  setup(d, { expose: a }) {
    const l = J(d, "modelValue"), e = d, i = O();
    return a({ focus: () => {
      var c;
      return (c = i.value) == null ? void 0 : c.focus();
    }, el: i }), (c, h) => c.icon || c.kbd ? (t(), n("div", Ao, [
      c.icon ? (t(), F(C, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : f("", !0),
      j(u("input", ve(c.$attrs, {
        ref_key: "el",
        ref: i,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => l.value = p),
        class: "at-input",
        style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, Co), [
        [st, l.value]
      ]),
      c.kbd ? (t(), F(ct, { key: 1 }, {
        default: P(() => [
          k(v(c.kbd), 1)
        ]),
        _: 1
      })) : f("", !0)
    ])) : j((t(), n("input", ve({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: i,
      "onUpdate:modelValue": h[1] || (h[1] = (p) => l.value = p),
      class: "at-input",
      style: e.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, So)), [
      [st, l.value]
    ]);
  }
}), To = ["role", "aria-checked", "disabled"], zo = {
  key: 2,
  class: "at-menu-meta"
}, Do = /* @__PURE__ */ B({
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
    return (a, l) => (t(), n("button", {
      type: "button",
      class: x(["at-menu-item", a.danger && "at-menu-item--danger"]),
      role: a.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": a.checked !== void 0 ? a.checked : void 0,
      disabled: a.disabled,
      onClick: l[0] || (l[0] = (e) => a.$emit("select", e))
    }, [
      a.icon ? (t(), F(C, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : f("", !0),
      z(a.$slots, "default", {}, () => [
        k(v(a.label), 1)
      ]),
      a.kbd ? (t(), F(ct, { key: 1 }, {
        default: P(() => [
          k(v(a.kbd), 1)
        ]),
        _: 1
      })) : a.meta ? (t(), n("span", zo, v(a.meta), 1)) : a.checked ? (t(), F(C, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : f("", !0)
    ], 10, To));
  }
}), Lo = {}, Eo = { class: "at-menu-label" };
function Bo(d, a) {
  return t(), n("div", Eo, [
    z(d.$slots, "default")
  ]);
}
const xo = /* @__PURE__ */ qe(Lo, [["render", Bo]]), Po = {}, Uo = {
  class: "at-menu-sep",
  role: "separator"
};
function Oo(d, a) {
  return t(), n("div", Uo);
}
const Fo = /* @__PURE__ */ qe(Po, [["render", Oo]]), No = {
  key: 0,
  class: "at-modal-wrap"
}, Io = ["aria-label"], qo = { class: "at-modal__head" }, Ho = { style: { flex: "1", "min-width": "0" } }, jo = { class: "at-modal__title" }, Ro = {
  key: 0,
  class: "at-modal__desc"
}, Wo = { class: "at-modal__body" }, Ko = {
  key: 0,
  class: "at-modal__foot"
}, Go = /* @__PURE__ */ B({
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
    const a = J(d, "open"), l = O();
    let e = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return pe(a, (c) => {
      var h;
      c ? (e = document.activeElement, document.addEventListener("keydown", i), ze(() => {
        var p;
        return (p = l.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (h = e == null ? void 0 : e.focus) == null || h.call(e));
    }, { immediate: !0 }), rt(() => document.removeEventListener("keydown", i)), (c, h) => (t(), F(it, { to: "body" }, [
      g(Tt, { name: "at-modal" }, {
        default: P(() => [
          a.value ? (t(), n("div", No, [
            u("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: h[0] || (h[0] = (p) => c.dismissible && (a.value = !1))
            }),
            u("div", {
              ref_key: "panel",
              ref: l,
              class: x(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              u("header", qo, [
                u("div", Ho, [
                  u("h2", jo, v(c.title), 1),
                  c.description ? (t(), n("p", Ro, v(c.description), 1)) : f("", !0)
                ]),
                c.dismissible ? (t(), F(N, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: h[1] || (h[1] = (p) => a.value = !1)
                })) : f("", !0)
              ]),
              u("div", Wo, [
                z(c.$slots, "default")
              ]),
              c.$slots.footer ? (t(), n("footer", Ko, [
                z(c.$slots, "footer", {
                  close: () => a.value = !1
                })
              ])) : f("", !0)
            ], 10, Io)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Yo = ["aria-label"], Jo = {
  key: 0,
  class: "at-nav-label"
}, Xo = /* @__PURE__ */ B({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(d) {
    return (a, l) => (t(), n("nav", {
      class: "at-nav",
      "aria-label": a.label
    }, [
      a.label ? (t(), n("div", Jo, v(a.label), 1)) : f("", !0),
      z(a.$slots, "default")
    ], 8, Yo));
  }
}), Zo = ["href", "aria-current"], Qo = { class: "at-ellipsis" }, er = {
  key: 2,
  class: "at-nav-count"
}, tr = /* @__PURE__ */ B({
  __name: "AtNavItem",
  props: {
    icon: {},
    mark: {},
    label: {},
    href: {},
    active: { type: Boolean },
    count: {}
  },
  emits: ["click"],
  setup(d) {
    return (a, l) => (t(), n("a", {
      class: "at-nav-item",
      href: a.href ?? "#",
      "aria-current": a.active ? "page" : void 0,
      onClick: l[0] || (l[0] = (e) => {
        !a.href && e.preventDefault(), a.$emit("click", e);
      })
    }, [
      a.mark ? (t(), n("span", {
        key: 0,
        class: "at-nav-mark",
        style: Q({ background: a.mark })
      }, null, 4)) : a.icon ? (t(), F(C, {
        key: 1,
        name: a.icon
      }, null, 8, ["name"])) : f("", !0),
      u("span", Qo, [
        z(a.$slots, "default", {}, () => [
          k(v(a.label), 1)
        ])
      ]),
      a.count != null && a.count !== "" ? (t(), n("span", er, v(a.count), 1)) : f("", !0)
    ], 8, Zo));
  }
}), ar = {
  key: 0,
  class: "at-page__head"
}, nr = { class: "t-heading-1" }, sr = { key: 0 }, lr = /* @__PURE__ */ B({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(d) {
    return (a, l) => (t(), n("div", {
      class: x(["at-page", a.wide && "at-page--wide"])
    }, [
      a.title || a.$slots.head ? (t(), n("div", ar, [
        z(a.$slots, "head", {}, () => [
          u("h1", nr, v(a.title), 1),
          a.description ? (t(), n("p", sr, v(a.description), 1)) : f("", !0)
        ])
      ])) : f("", !0),
      z(a.$slots, "default")
    ], 2));
  }
}), or = { class: "at-proplist" }, rr = ["disabled", "onClick"], ir = /* @__PURE__ */ B({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update"],
  setup(d, { emit: a }) {
    const l = d, e = a, i = S(() => l.schema.filter((M) => {
      var A;
      return M.type !== "title" && !((A = l.exclude) != null && A.includes(M.key));
    })), c = O(null), h = O(null), p = O(!1);
    function w(M, A) {
      if (Ve(A)) {
        if (A.type === "checkbox") {
          e("update", A.key, !l.row[A.key]);
          return;
        }
        h.value = M.currentTarget, c.value = A, p.value = !0;
      }
    }
    return (M, A) => (t(), n(b, null, [
      u("dl", or, [
        (t(!0), n(b, null, V(i.value, (D) => (t(), n(b, {
          key: D.key
        }, [
          u("dt", null, [
            g(C, {
              name: E(Oe)(D)
            }, null, 8, ["name"]),
            k(v(D.name), 1)
          ]),
          u("dd", null, [
            u("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !E(Ve)(D),
              onClick: (I) => w(I, D)
            }, [
              g(de, {
                prop: D,
                row: M.row
              }, null, 8, ["prop", "row"])
            ], 8, rr)
          ])
        ], 64))), 128))
      ]),
      g(dt, {
        open: p.value,
        "onUpdate:open": A[0] || (A[0] = (D) => p.value = D),
        prop: c.value,
        row: M.row,
        anchor: h.value,
        onUpdate: A[1] || (A[1] = (D) => c.value && e("update", c.value.key, D))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), ur = ["aria-label"], dr = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], cr = /* @__PURE__ */ B({
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
    const a = J(d, "modelValue");
    return (l, e) => (t(), n("div", {
      class: "at-segment",
      role: "group",
      "aria-label": l.label
    }, [
      (t(!0), n(b, null, V(l.items, (i) => (t(), n("button", {
        key: String(i.value),
        type: "button",
        "aria-pressed": a.value === i.value,
        "aria-label": i.iconOnly ? i.label : void 0,
        title: i.iconOnly ? i.label : void 0,
        disabled: i.disabled,
        onClick: (c) => a.value = i.value
      }, [
        i.icon ? (t(), F(C, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : f("", !0),
        i.iconOnly ? f("", !0) : (t(), n(b, { key: 1 }, [
          k(v(i.label), 1)
        ], 64))
      ], 8, dr))), 128))
    ], 8, ur));
  }
}), pr = { class: "at-select" }, vr = ["disabled", "aria-invalid"], mr = {
  key: 0,
  value: null,
  disabled: ""
}, hr = ["value", "disabled"], gr = /* @__PURE__ */ B({
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
    const a = J(d, "modelValue");
    return (l, e) => (t(), n("div", pr, [
      j(u("select", ve(l.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
        disabled: l.disabled,
        "aria-invalid": l.invalid || void 0,
        style: l.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        l.placeholder ? (t(), n("option", mr, v(l.placeholder), 1)) : f("", !0),
        (t(!0), n(b, null, V(l.options, (i) => (t(), n("option", {
          key: String(i.value),
          value: i.value,
          disabled: i.disabled
        }, v(i.label), 9, hr))), 128))
      ], 16, vr), [
        [_e, a.value]
      ]),
      g(C, { name: "chevron-down" })
    ]));
  }
}), fr = {}, yr = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, br = {
  key: 0,
  class: "at-sidebar__foot"
};
function kr(d, a) {
  return t(), n("aside", yr, [
    z(d.$slots, "header"),
    z(d.$slots, "default"),
    d.$slots.footer ? (t(), n("div", br, [
      z(d.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const _r = /* @__PURE__ */ qe(fr, [["render", kr]]), wr = { class: "at-stat" }, $r = { class: "at-stat__label" }, Mr = { class: "at-stat__row" }, Ar = { class: "at-stat__value" }, Cr = ["viewBox"], Sr = ["d"], Vr = ["d"], Tr = ["cx", "cy"], zr = {
  key: 1,
  class: "at-stat__foot"
}, At = 220, Ae = 32, Dr = /* @__PURE__ */ B({
  __name: "AtStat",
  props: {
    label: {},
    value: {},
    delta: {},
    trend: {},
    spark: {},
    foot: {}
  },
  setup(d) {
    const a = d, l = S(() => {
      const e = a.spark;
      if (!e || e.length < 2) return null;
      const i = Math.min(...e), c = Math.max(...e), h = c - i || 1, p = e.map((A, D) => [2 + D * (At - 4) / (e.length - 1), Ae - 3 - (A - i) / h * (Ae - 8)]), w = "M" + p.map((A) => A.map((D) => D.toFixed(1)).join(" ")).join(" L"), M = p[p.length - 1];
      return { line: w, area: `${w} L${M[0].toFixed(1)} ${Ae} L2 ${Ae} Z`, end: M };
    });
    return (e, i) => (t(), n("div", wr, [
      u("span", $r, v(e.label), 1),
      u("div", Mr, [
        u("span", Ar, [
          z(e.$slots, "value", {}, () => [
            k(v(e.value), 1)
          ])
        ]),
        e.delta ? (t(), n("span", {
          key: 0,
          class: x(["at-stat__delta", e.trend && `at-stat__delta--${e.trend}`])
        }, v(e.delta), 3)) : f("", !0)
      ]),
      l.value ? (t(), n("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${At} ${Ae}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        u("path", {
          class: "area",
          d: l.value.area
        }, null, 8, Sr),
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
        }, null, 8, Tr)
      ], 8, Cr)) : f("", !0),
      e.foot || e.$slots.foot ? (t(), n("span", zr, [
        z(e.$slots, "foot", {}, () => [
          k(v(e.foot), 1)
        ])
      ])) : f("", !0)
    ]));
  }
}), Lr = {
  key: 0,
  class: "at-toggle"
}, Er = ["disabled"], Br = ["disabled"], xr = /* @__PURE__ */ B({
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
    const a = J(d, "modelValue");
    return (l, e) => l.label || l.$slots.default ? (t(), n("label", Lr, [
      j(u("input", ve(l.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: l.disabled
      }), null, 16, Er), [
        [Fe, a.value]
      ]),
      z(l.$slots, "default", {}, () => [
        k(v(l.label), 1)
      ])
    ])) : j((t(), n("input", ve({ key: 1 }, l.$attrs, {
      "onUpdate:modelValue": e[1] || (e[1] = (i) => a.value = i),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: l.disabled
    }), null, 16, Br)), [
      [Fe, a.value]
    ]);
  }
}), Pr = { class: "at-table-wrap" }, Ur = { class: "at-table" }, Or = ["onClick"], Fr = { key: 0 }, Nr = ["colspan"], Ir = /* @__PURE__ */ B({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(d) {
    return (a, l) => (t(), n("div", Pr, [
      u("table", Ur, [
        u("thead", null, [
          u("tr", null, [
            (t(!0), n(b, null, V(a.columns, (e) => (t(), n("th", {
              key: e.key,
              class: x({ "at-num": e.align === "right" }),
              style: Q(e.width ? { width: e.width } : void 0)
            }, v(e.label), 7))), 128))
          ])
        ]),
        u("tbody", null, [
          (t(!0), n(b, null, V(a.rows, (e, i) => (t(), n("tr", {
            key: a.rowKey ? e[a.rowKey] : i,
            style: Q(a.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => a.$emit("rowClick", e)
          }, [
            (t(!0), n(b, null, V(a.columns, (c) => (t(), n("td", {
              key: c.key,
              class: x({ "at-num": c.align === "right" })
            }, [
              z(a.$slots, `cell-${c.key}`, {
                row: e,
                value: e[c.key]
              }, () => [
                k(v(c.format ? c.format(e[c.key], e) : e[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Or))), 128)),
          a.rows.length ? f("", !0) : (t(), n("tr", Fr, [
            u("td", {
              colspan: a.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(a.empty ?? "Aucune donnée"), 9, Nr)
          ]))
        ])
      ])
    ]));
  }
}), qr = ["aria-label"], Hr = ["aria-selected", "disabled", "onClick"], jr = {
  key: 1,
  class: "at-count"
}, Rr = /* @__PURE__ */ B({
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
    const a = J(d, "modelValue");
    return (l, e) => (t(), n("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": l.label
    }, [
      (t(!0), n(b, null, V(l.items, (i) => (t(), n("button", {
        key: String(i.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": a.value === i.value,
        disabled: i.disabled,
        onClick: (c) => a.value = i.value
      }, [
        i.icon ? (t(), F(C, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : f("", !0),
        k(v(i.label) + " ", 1),
        i.count != null ? (t(), n("span", jr, v(i.count), 1)) : f("", !0)
      ], 8, Hr))), 128))
    ], 8, qr));
  }
}), Wr = /* @__PURE__ */ B({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(d) {
    return (a, l) => (t(), n("span", {
      class: x(["at-tag", a.color !== "gray" && `at-tag--${a.color}`])
    }, [
      z(a.$slots, "default", {}, () => [
        k(v(a.label), 1)
      ])
    ], 2));
  }
}), Kr = ["rows", "placeholder", "disabled", "aria-invalid"], Gr = /* @__PURE__ */ B({
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
    const a = J(d, "modelValue");
    return (l, e) => j((t(), n("textarea", ve(l.$attrs, {
      "onUpdate:modelValue": e[0] || (e[0] = (i) => a.value = i),
      class: "at-input",
      rows: l.rows ?? 3,
      placeholder: l.placeholder,
      disabled: l.disabled,
      "aria-invalid": l.invalid || void 0
    }), null, 16, Kr)), [
      [ke, a.value]
    ]);
  }
}), Pt = "atelier:theme", Ut = "atelier:density", Ot = (d) => {
  try {
    return localStorage.getItem(d);
  } catch {
    return null;
  }
}, Ct = (d, a) => {
  try {
    localStorage.setItem(d, a);
  } catch {
  }
}, St = () => typeof document < "u" ? document.documentElement : null, Ce = O(Ot(Pt) || "system"), Ft = O(Ot(Ut) || "comfortable"), Nt = O(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Vt = !1;
function It() {
  if (Vt || typeof window > "u") return;
  Vt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (a) => {
    Nt.value = a.matches;
  }), pe(Ce, (a) => {
    const l = St();
    l && (a === "system" ? l.removeAttribute("data-theme") : l.dataset.theme = a, Ct(Pt, a));
  }, { immediate: !0 }), pe(Ft, (a) => {
    const l = St();
    l && (l.dataset.density = a, Ct(Ut, a));
  }, { immediate: !0 });
}
function ti() {
  It();
  const d = S(() => Ce.value === "system" ? Nt.value ? "dark" : "light" : Ce.value), a = () => {
    Ce.value = d.value === "dark" ? "light" : "dark";
  };
  return ba() && ka(() => {
  }), { mode: Ce, resolved: d, toggle: a };
}
function ai() {
  return It(), { density: Ft };
}
const ni = {
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
}, Yr = (d) => `var(--${d})`, si = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(Yr), Jr = {
  AtAppShell: Va,
  AtAvatar: Dt,
  AtBadge: Da,
  AtBreadcrumbs: Pa,
  AtButton: N,
  AtCard: Ia,
  AtCheckbox: Ra,
  AtDataView: ao,
  AtDrawer: uo,
  AtDropdown: vo,
  AtEmpty: ho,
  AtField: _o,
  AtIcon: C,
  AtInput: Vo,
  AtKbd: ct,
  AtMenu: xt,
  AtMenuItem: Do,
  AtMenuLabel: xo,
  AtMenuSeparator: Fo,
  AtModal: Go,
  AtNavGroup: Xo,
  AtNavItem: tr,
  AtPage: lr,
  AtPopover: ue,
  AtProgress: Lt,
  AtPropertyEditor: dt,
  AtPropertyList: ir,
  AtPropertyValue: de,
  AtSegment: cr,
  AtSelect: gr,
  AtSidebar: _r,
  AtStat: Dr,
  AtSwitch: xr,
  AtTable: Ir,
  AtTabs: Rr,
  AtTag: Wr,
  AtTextarea: Gr
}, li = {
  install(d) {
    for (const [a, l] of Object.entries(Jr)) d.component(a, l);
  }
};
export {
  Va as AtAppShell,
  Dt as AtAvatar,
  Da as AtBadge,
  Pa as AtBreadcrumbs,
  N as AtButton,
  Ia as AtCard,
  Ra as AtCheckbox,
  ao as AtDataView,
  uo as AtDrawer,
  vo as AtDropdown,
  ho as AtEmpty,
  _o as AtField,
  C as AtIcon,
  Vo as AtInput,
  ct as AtKbd,
  xt as AtMenu,
  Do as AtMenuItem,
  xo as AtMenuLabel,
  Fo as AtMenuSeparator,
  Go as AtModal,
  Xo as AtNavGroup,
  tr as AtNavItem,
  lr as AtPage,
  ue as AtPopover,
  Lt as AtProgress,
  dt as AtPropertyEditor,
  ir as AtPropertyList,
  de as AtPropertyValue,
  cr as AtSegment,
  gr as AtSelect,
  _r as AtSidebar,
  Dr as AtStat,
  xr as AtSwitch,
  Ir as AtTable,
  Rr as AtTabs,
  Wr as AtTag,
  Gr as AtTextarea,
  li as Atelier,
  Ue as LAYOUTS,
  Ne as NONE,
  nt as OPS,
  _t as OP_LABEL,
  Ya as addDays,
  en as applyView,
  si as chartColors,
  Qa as compareRows,
  $t as createView,
  Yr as cssVar,
  li as default,
  nn as defaultsFromFilters,
  Qr as filter,
  Ie as findOption,
  ot as formatDate,
  on as formatMonth,
  Y as getValue,
  tn as groupRows,
  zt as icons,
  ee as isEmpty,
  Za as matchRule,
  an as monthGrid,
  $e as optionsOf,
  Zr as registerIcons,
  wt as shiftMonth,
  ei as sort,
  Se as today,
  ni as tokens,
  we as uid,
  ai as useDensity,
  go as useId,
  ti as useTheme
};
//# sourceMappingURL=atelier.js.map

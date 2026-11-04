import { defineComponent as J, computed as A, openBlock as t, createElementBlock as l, normalizeStyle as ue, normalizeClass as W, createBlock as G, createCommentVNode as f, renderSlot as j, createTextVNode as b, toDisplayString as m, ref as K, watch as ke, createElementVNode as r, createVNode as g, Fragment as _, renderList as P, resolveDynamicComponent as fa, withCtx as U, useModel as re, withDirectives as le, mergeProps as ye, vModelCheckbox as bt, mergeModels as se, getCurrentInstance as ga, onBeforeUnmount as Ge, nextTick as Ve, onMounted as an, unref as L, vModelText as Ae, withModifiers as ie, Teleport as wt, withKeys as la, vModelDynamic as Pt, shallowRef as nn, isRef as Ue, vModelSelect as He, Transition as ya, normalizeProps as ln, guardReactiveProps as sn, vShow as on, readonly as rn, reactive as un, TransitionGroup as dn, getCurrentScope as cn, onScopeDispose as pn } from "vue";
const ba = {
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
  key: '<circle cx="5.5" cy="10.5" r="3"/><path d="M7.6 8.4L13.5 2.5M11.5 4.5l1.5 1.5M9.8 6.2l1.2 1.2"/>',
  lock: '<rect x="3.5" y="7" width="9" height="6.5" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>',
  reset: '<path d="M3 8a5 5 0 1 0 1.5-3.6L3 5.5"/><path d="M3 2.5v3h3"/>'
};
function cc(s) {
  Object.assign(ba, s);
}
const vn = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], x = /* @__PURE__ */ J({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(s) {
    const e = s, n = A(() => ba[e.name] ?? "");
    return (a, o) => (t(), l("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: a.size,
      height: a.size,
      style: ue(a.size !== 16 ? { width: a.size + "px", height: a.size + "px" } : void 0),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true",
      innerHTML: n.value
    }, null, 12, vn));
  }
}), mn = ["href", "aria-label"], hn = ["type", "disabled", "aria-busy", "aria-label"], fn = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, te = /* @__PURE__ */ J({
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
  setup(s) {
    const e = s, n = A(() => [
      "at-btn",
      `at-btn--${e.variant}`,
      e.size !== "md" && `at-btn--${e.size}`,
      e.iconOnly && "at-btn--icon"
    ]);
    return (a, o) => a.href && !a.disabled ? (t(), l("a", {
      key: 0,
      href: a.href,
      class: W(n.value),
      "aria-label": a.iconOnly ? a.label : void 0
    }, [
      a.icon ? (t(), G(x, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : f("", !0),
      j(a.$slots, "default", {}, () => [
        b(m(a.iconOnly ? "" : a.label), 1)
      ])
    ], 10, mn)) : (t(), l("button", {
      key: 1,
      type: a.type,
      class: W(n.value),
      disabled: a.disabled || a.loading,
      "aria-busy": a.loading || void 0,
      "aria-label": a.iconOnly ? a.label : void 0
    }, [
      a.loading ? (t(), l("span", fn)) : a.icon ? (t(), G(x, {
        key: 1,
        name: a.icon
      }, null, 8, ["name"])) : f("", !0),
      a.iconOnly ? f("", !0) : j(a.$slots, "default", { key: 2 }, () => [
        b(m(a.label), 1)
      ])
    ], 10, hn));
  }
}), gn = { class: "at-shell__side" }, yn = { class: "at-shell__main" }, bn = { class: "at-topbar" }, kn = /* @__PURE__ */ J({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(s, { expose: e }) {
    const n = s, a = K(!1), o = K();
    return ke(() => n.routeKey, () => {
      a.value = !1, o.value && (o.value.scrollTop = 0);
    }), e({ closeNav: () => a.value = !1 }), (i, v) => (t(), l("div", {
      class: W(["at-shell", a.value && "at-shell--open"])
    }, [
      r("div", gn, [
        j(i.$slots, "sidebar")
      ]),
      r("div", {
        class: "at-shell__scrim",
        onClick: v[0] || (v[0] = (d) => a.value = !1)
      }),
      r("div", yn, [
        r("header", bn, [
          g(te, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: v[1] || (v[1] = (d) => a.value = !a.value)
          }),
          j(i.$slots, "topbar")
        ]),
        r("main", {
          ref_key: "page",
          ref: o,
          class: "at-shell__page"
        }, [
          j(i.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), _n = ["title"], $n = ["src", "alt"], Ke = /* @__PURE__ */ J({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" },
    tone: { default: "neutral" }
  },
  setup(s) {
    const e = s, n = A(() => e.name.split(/\s+/).filter(Boolean).map((a) => a[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (a, o) => (t(), l("span", {
      class: W(["at-avatar", a.size !== "sm" && `at-avatar--${a.size}`, a.tone === "accent" && "at-avatar--accent"]),
      title: a.name
    }, [
      a.src ? (t(), l("img", {
        key: 0,
        src: a.src,
        alt: a.name
      }, null, 8, $n)) : (t(), l(_, { key: 1 }, [
        b(m(n.value), 1)
      ], 64))
    ], 10, _n));
  }
}), wn = /* @__PURE__ */ J({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: W(["at-badge", e.tone !== "neutral" && `at-badge--${e.tone}`])
    }, [
      j(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ])
    ], 2));
  }
}), Mn = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Cn = {
  key: 0,
  "aria-hidden": "true"
}, An = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Sn = ["href", "onClick"], Vn = /* @__PURE__ */ J({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(s) {
    return (e, n) => (t(), l("nav", Mn, [
      (t(!0), l(_, null, P(e.items, (a, o) => (t(), l(_, { key: o }, [
        o > 0 ? (t(), l("span", Cn, "/")) : f("", !0),
        o === e.items.length - 1 ? (t(), l("span", An, m(a.label), 1)) : (t(), l("a", {
          key: 2,
          href: a.href ?? "#",
          onClick: (i) => a.onClick && (i.preventDefault(), a.onClick())
        }, m(a.label), 9, Sn))
      ], 64))), 128))
    ]));
  }
}), Tn = {
  key: 0,
  class: "at-card__head"
}, Ln = {
  key: 0,
  class: "at-card__title"
}, Dn = {
  key: 1,
  class: "at-card__desc"
}, zn = {
  key: 1,
  class: "at-card__foot"
}, En = /* @__PURE__ */ J({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(s) {
    return (e, n) => (t(), G(fa(e.href ? "a" : e.as || "section"), {
      href: e.href,
      class: W(["at-card", e.href && "at-card--link", e.color && ["at-card--striped", `at-tone-${e.color}`]])
    }, {
      default: U(() => [
        e.title || e.description || e.$slots.actions ? (t(), l("div", Tn, [
          r("div", null, [
            e.title ? (t(), l("h3", Ln, m(e.title), 1)) : f("", !0),
            e.description ? (t(), l("p", Dn, m(e.description), 1)) : f("", !0)
          ]),
          j(e.$slots, "actions")
        ])) : f("", !0),
        j(e.$slots, "default"),
        e.$slots.footer ? (t(), l("div", zn, [
          j(e.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), On = {
  key: 0,
  class: "at-toggle"
}, Bn = ["indeterminate", "disabled"], In = ["indeterminate", "disabled"], ka = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "AtCheckbox",
  props: /* @__PURE__ */ se({
    label: {},
    indeterminate: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = re(s, "modelValue");
    return (n, a) => n.label || n.$slots.default ? (t(), l("label", On, [
      le(r("input", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
        type: "checkbox",
        class: "at-check",
        indeterminate: n.indeterminate,
        disabled: n.disabled
      }), null, 16, Bn), [
        [bt, e.value]
      ]),
      j(n.$slots, "default", {}, () => [
        b(m(n.label), 1)
      ])
    ])) : le((t(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": a[1] || (a[1] = (o) => e.value = o),
      type: "checkbox",
      class: "at-check",
      indeterminate: n.indeterminate,
      disabled: n.disabled
    }), null, 16, In)), [
      [bt, e.value]
    ]);
  }
}), Ut = '.at-pop, [aria-modal="true"]', Qn = { esc: "escape", space: " ", del: "delete", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", return: "enter" }, _a = () => typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "");
function $a(s) {
  const e = s.toLowerCase().split("+");
  let n = e.pop() ?? "";
  n === "" && e.length && (e.pop(), n = "+");
  const a = { key: Qn[n] ?? n, mod: !1, ctrl: !1, meta: !1, alt: !1, shift: !1 };
  for (const o of e)
    o === "mod" || o === "ctrl" || o === "meta" || o === "alt" || o === "shift" ? a[o] = !0 : o === "cmd" ? a.meta = !0 : o === "option" && (a.alt = !0);
  return a;
}
function xn(s, e, n = _a()) {
  var S;
  if ((s.key ?? "").toLowerCase() !== e.key) return !1;
  const o = e.ctrl || e.mod && !n, i = e.meta || e.mod && n, v = e.key.length === 1;
  return (v && !!((S = s.getModifierState) != null && S.call(s, "AltGraph")) ? !1 : s.ctrlKey) !== o || s.metaKey !== i || (e.alt ? !s.altKey : s.altKey && !v) ? !1 : e.shift ? s.shiftKey : e.key.length === 1 || !s.shiftKey;
}
function pc(s, e = _a()) {
  const n = $a(s), o = {
    enter: "↵",
    escape: "Échap",
    arrowdown: "↓",
    arrowup: "↑",
    arrowleft: "←",
    arrowright: "→",
    backspace: "⌫",
    delete: "Suppr",
    " ": "Espace",
    tab: "Tab"
  }[n.key] ?? n.key.toUpperCase(), i = [];
  return (n.ctrl || n.mod && !e) && i.push(e ? "⌃" : "Ctrl"), n.alt && i.push(e ? "⌥" : "Alt"), n.shift && i.push(e ? "⇧" : "Maj"), (n.meta || n.mod && e) && i.push("⌘"), e ? i.join("") + o : [...i, o].join(" ");
}
const Fn = (s) => {
  var n;
  const e = s;
  return !e || !e.tagName ? !1 : e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable || ((n = e.closest) == null ? void 0 : n.call(e, '[contenteditable=""], [contenteditable="true"]')) != null;
}, Pn = 'button, a[href], summary, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="switch"], [role="option"]', Un = (s, e) => {
  var n;
  return (s.key === "Enter" || s.key === " ") && !s.ctrlKey && !s.metaKey && !!((n = e == null ? void 0 : e.closest) != null && n.call(e, Pn));
}, Oe = [];
let ht = !1;
function sa(s) {
  var i;
  if (s.defaultPrevented || s.isComposing) return;
  const e = s.target, n = Fn(e), a = typeof document < "u" && document.querySelector(Ut) != null, o = !!((i = e == null ? void 0 : e.closest) != null && i.call(e, Ut));
  if (!Un(s, e))
    for (let v = Oe.length - 1; v >= 0; v--) {
      const d = Oe[v];
      if (d.combos.some((h) => xn(s, h)) && !(n && !d.opts.allowInInput) && !(a && !(n && d.opts.allowInInput && o)) && !(d.opts.when && !d.opts.when())) {
        s.preventDefault(), d.handler(s);
        return;
      }
    }
}
function oa() {
  typeof document > "u" || (Oe.length && !ht ? (document.addEventListener("keydown", sa), ht = !0) : !Oe.length && ht && (document.removeEventListener("keydown", sa), ht = !1));
}
function Bt(s, e, n = {}) {
  const a = { combos: (Array.isArray(s) ? s : [s]).map($a), handler: e, opts: n };
  Oe.push(a), oa();
  const o = () => {
    const i = Oe.indexOf(a);
    i >= 0 && (Oe.splice(i, 1), oa());
  };
  return ga() && Ge(o), o;
}
function Nn(s, e) {
  if (!(e != null && e.length)) return s.slice();
  const n = new Set(e.map((o) => o.id)), a = [];
  for (const o of e) for (const i of s) i.group === o.id && a.push(i);
  for (const o of s) (o.group == null || !n.has(o.group)) && a.push(o);
  return a;
}
function Hn(s, e) {
  const n = e == null ? -1 : s.findIndex((o) => o.id === e), a = (o) => o.state === "todo" && o.id !== e;
  for (let o = n + 1; o < s.length; o++) if (a(s[o])) return s[o].id;
  for (let o = 0; o < s.length; o++) if (a(s[o])) return s[o].id;
  return null;
}
function qn(s, e, n) {
  const a = /* @__PURE__ */ new Set();
  if (n == null || n < 0) return a;
  let o = e == null ? -1 : s.findIndex((v) => v.id === e);
  o < 0 && (o = s.length);
  const i = s.slice(0, o).filter((v) => v.state !== "todo");
  for (const v of i.slice(0, Math.max(0, i.length - Math.floor(n)))) a.add(v.id);
  return a;
}
function Ne(s) {
  const e = Number.isFinite(s) ? Math.max(0, Math.floor(s)) : 0, n = Math.floor(e / 3600), a = Math.floor(e % 3600 / 60), o = String(e % 60).padStart(2, "0");
  return n ? `${n}:${String(a).padStart(2, "0")}:${o}` : `${a}:${o}`;
}
const Kn = {
  key: 0,
  class: "at-checklist__list"
}, Rn = {
  key: 0,
  class: "at-checklist__group",
  role: "presentation"
}, jn = { class: "at-checklist__group-label" }, Gn = {
  key: 0,
  class: "at-checklist__group-hint"
}, Wn = {
  key: 1,
  class: "at-checklist__more",
  role: "presentation"
}, Yn = ["aria-current"], Jn = { class: "at-checklist__line" }, Zn = {
  key: 0,
  class: "at-checklist__num",
  "aria-hidden": "true"
}, Xn = ["checked", "aria-label", "onChange"], el = ["onClick"], tl = { class: "at-checklist__text" }, al = {
  key: 0,
  class: "at-checklist__skipped"
}, nl = {
  key: 1,
  class: "at-checklist__meta"
}, ll = {
  key: 0,
  class: "at-checklist__body"
}, sl = {
  key: 0,
  class: "at-checklist__note"
}, ol = {
  key: 1,
  class: "at-checklist__actions"
}, rl = {
  key: 1,
  class: "at-checklist__empty"
}, il = {
  class: "at-sr-only",
  "aria-live": "polite"
}, ul = 'textarea, select, [contenteditable=""], [contenteditable="true"], input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"])', dl = 'button, a[href], summary, input, [role="button"], [role="link"], [role="checkbox"], [role="switch"], [role="menuitem"], [role="option"], [role="tab"]', cl = /* @__PURE__ */ J({
  __name: "AtChecklist",
  props: /* @__PURE__ */ se({
    items: {},
    groups: {},
    numbered: { type: Boolean, default: !0 },
    collapseDone: {},
    keyboard: { type: Boolean, default: !1 }
  }, {
    current: { default: null },
    currentModifiers: {}
  }),
  emits: /* @__PURE__ */ se(["check", "open"], ["update:current"]),
  setup(s, { expose: e, emit: n }) {
    const a = s, o = re(s, "current"), i = n, v = K(), d = K(!1), h = K(""), S = A(() => Nn(a.items, a.groups)), k = A(() => d.value ? /* @__PURE__ */ new Set() : qn(S.value, o.value, a.collapseDone)), V = A(() => {
      const C = new Map((a.groups ?? []).map((ne) => [ne.id, ne])), H = [];
      let E, Y = !1;
      return S.value.forEach((ne, M) => {
        if (k.value.has(ne.id)) {
          Y || H.push({ kind: "more", key: "__more", count: k.value.size }), Y = !0;
          return;
        }
        const I = ne.group != null ? C.get(ne.group) : void 0, q = I ? I.id : null;
        q !== E && (I && H.push({ kind: "group", key: `group:${I.id}`, group: I }), E = q), H.push({ kind: "item", key: ne.id, item: ne, n: M + 1 });
      }), H;
    });
    ke(() => a.collapseDone, () => d.value = !1);
    const z = (C) => C > 1 ? `${C} faites masquées` : "1 faite masquée";
    function T(C) {
      o.value = C;
    }
    function y(C, H) {
      if (H === C.state) return;
      i("check", C.id, H);
      const E = S.value.filter((Y) => (Y.id === C.id ? H : Y.state) !== "todo").length;
      h.value = `${E} sur ${S.value.length}`, H !== "todo" && C.id === o.value && T(Hn(S.value, C.id));
    }
    function N(C, H) {
      const E = H.target, Y = E.checked ? "done" : "todo";
      E.checked = C.state === "done", y(C, Y);
    }
    const ae = () => S.value.find((C) => C.id === o.value);
    function O(C) {
      const H = S.value;
      if (!H.length) return;
      const E = o.value == null ? -1 : H.findIndex((ne) => ne.id === o.value), Y = E < 0 ? C > 0 ? 0 : H.length - 1 : Math.max(0, Math.min(H.length - 1, E + C));
      T(H[Y].id), Ve(() => {
        var ne, M, I;
        return (I = (M = (ne = v.value) == null ? void 0 : ne.querySelector('[aria-current="step"]')) == null ? void 0 : M.scrollIntoView) == null ? void 0 : I.call(M, { block: "nearest" });
      });
    }
    function F(C) {
      var ne, M;
      if (C.defaultPrevented || C.isComposing || C.ctrlKey || C.metaKey || C.altKey) return;
      const H = C.target;
      if ((ne = H == null ? void 0 : H.closest) != null && ne.call(H, ul) || document.querySelector(`${Ut}, dialog[open]`)) return;
      const E = (C.key ?? "").toLowerCase();
      if ((E === " " || E === "enter") && ((M = H == null ? void 0 : H.closest) != null && M.call(H, dl))) return;
      const Y = ae();
      if (E === "j" || E === "arrowdown") O(1);
      else if (E === "k" || E === "arrowup") O(-1);
      else if (E === " ") {
        if (!Y) return;
        y(Y, Y.state === "done" ? "todo" : "done");
      } else if (E === "enter") {
        if (!(Y != null && Y.href)) return;
        i("open", Y);
      } else if (E === "s") {
        if (!Y || Y.state === "skipped") return;
        y(Y, "skipped");
      } else return;
      C.preventDefault();
    }
    let R = !1;
    function Z(C) {
      typeof document > "u" || C === R || (C ? document.addEventListener("keydown", F) : document.removeEventListener("keydown", F), R = C);
    }
    return ke(() => a.keyboard, (C) => Z(!!C), { immediate: !0 }), Ge(() => Z(!1)), e({ move: O }), (C, H) => (t(), l("div", {
      ref_key: "el",
      ref: v,
      class: W(["at-checklist", !C.numbered && "at-checklist--plain"])
    }, [
      C.items.length ? (t(), l("ol", Kn, [
        (t(!0), l(_, null, P(V.value, (E) => (t(), l(_, {
          key: E.key
        }, [
          E.kind === "group" ? (t(), l("li", Rn, [
            r("span", jn, m(E.group.label), 1),
            E.group.hint ? (t(), l("span", Gn, m(E.group.hint), 1)) : f("", !0)
          ])) : E.kind === "more" ? (t(), l("li", Wn, [
            r("button", {
              type: "button",
              class: "at-checklist__more-btn",
              onClick: H[0] || (H[0] = (Y) => d.value = !0)
            }, [
              g(x, { name: "chevron-right" }),
              b(m(z(E.count)), 1)
            ])
          ])) : (t(), l("li", {
            key: 2,
            class: W([
              "at-checklist__item",
              `at-checklist__item--${E.item.state}`,
              E.item.id === o.value && "at-checklist__item--current"
            ]),
            "aria-current": E.item.id === o.value ? "step" : void 0
          }, [
            r("div", Jn, [
              C.numbered ? (t(), l("span", Zn, m(E.n), 1)) : f("", !0),
              r("input", {
                type: "checkbox",
                class: "at-check at-checklist__check",
                checked: E.item.state === "done",
                "aria-label": E.item.title,
                onChange: (Y) => N(E.item, Y)
              }, null, 40, Xn),
              r("button", {
                type: "button",
                class: "at-checklist__title",
                onClick: (Y) => T(E.item.id)
              }, [
                r("span", tl, m(E.item.title), 1),
                E.item.state === "skipped" ? (t(), l("span", al, "passée")) : f("", !0)
              ], 8, el),
              C.$slots.meta ? (t(), l("span", nl, [
                j(C.$slots, "meta", {
                  item: E.item,
                  current: E.item.id === o.value
                })
              ])) : f("", !0),
              E.item.href ? (t(), G(te, {
                key: 2,
                variant: "ghost",
                size: "sm",
                icon: "arrow",
                "icon-only": "",
                label: `Ouvrir « ${E.item.title} »`,
                title: "Ouvrir",
                class: "at-checklist__open",
                onClick: (Y) => i("open", E.item)
              }, null, 8, ["label", "onClick"])) : f("", !0)
            ]),
            E.item.id === o.value && (E.item.note || C.$slots.actions) ? (t(), l("div", ll, [
              E.item.note ? (t(), l("p", sl, m(E.item.note), 1)) : f("", !0),
              C.$slots.actions ? (t(), l("div", ol, [
                j(C.$slots, "actions", {
                  item: E.item
                })
              ])) : f("", !0)
            ])) : f("", !0)
          ], 10, Yn))
        ], 64))), 128))
      ])) : (t(), l("div", rl, [
        j(C.$slots, "empty", {}, () => [
          b("Aucune étape")
        ])
      ])),
      r("p", il, m(h.value), 1)
    ], 2));
  }
}), Mt = (s, e) => {
  const n = s.__vccOpts || s;
  for (const [a, o] of e)
    n[a] = o;
  return n;
}, pl = {}, vl = { class: "at-kbd" };
function ml(s, e) {
  return t(), l("kbd", vl, [
    j(s.$slots, "default")
  ]);
}
const Le = /* @__PURE__ */ Mt(pl, [["render", ml]]), hl = (s) => String(s).padStart(2, "0"), fl = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ra = (s) => new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
function gl(s, e = /* @__PURE__ */ new Date()) {
  const n = new Date(s);
  if (isNaN(n.getTime())) return "";
  const a = Math.round((e.getTime() - n.getTime()) / 1e3), o = `${n.getHours()}:${hl(n.getMinutes())}`;
  if (a < 45) return "à l’instant";
  if (a < 3600) return `il y a ${Math.max(1, Math.round(a / 60))} min`;
  const i = Math.round((ra(e) - ra(n)) / 864e5);
  if (i === 0) return `il y a ${Math.round(a / 3600)} h`;
  if (i === 1) return `hier à ${o}`;
  const v = `${n.getDate()} ${fl[n.getMonth()]}`;
  return n.getFullYear() === e.getFullYear() ? `${v} à ${o}` : `${v} ${n.getFullYear()}`;
}
function yl(s, e) {
  const n = [...e].filter(Boolean).sort((d, h) => h.length - d.length);
  if (!n.length) return [{ text: s }];
  const a = (d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), o = new RegExp(`@(?:${n.map(a).join("|")})(?![\\p{L}\\p{N}])`, "gu"), i = [];
  let v = 0;
  for (const d of s.matchAll(o))
    d.index > v && i.push({ text: s.slice(v, d.index) }), i.push({ text: d[0], mention: !0 }), v = d.index + d[0].length;
  return v < s.length && i.push({ text: s.slice(v) }), i;
}
function bl(s, e) {
  const n = /(^|\s)@([\p{L}\p{N}-]*)$/u.exec(s.slice(0, e));
  return n ? { start: e - n[2].length - 1, query: n[2] } : null;
}
const kt = "__none", Nt = "@me", Ht = (s) => String(s).padStart(2, "0"), Gt = (s) => `${s.getFullYear()}-${Ht(s.getMonth() + 1)}-${Ht(s.getDate())}`, Be = () => Gt(/* @__PURE__ */ new Date()), _t = (s, e) => {
  const n = /* @__PURE__ */ new Date(s + "T00:00");
  return n.setDate(n.getDate() + e), Gt(n);
}, kl = (s = Be()) => {
  const e = ((/* @__PURE__ */ new Date(s + "T00:00")).getDay() + 6) % 7;
  return _t(s, 7 - e);
}, Ie = () => Math.random().toString(36).slice(2, 10), be = (s) => s == null || s === "" || Array.isArray(s) && s.length === 0, he = (s, e) => e.compute ? e.compute(s) : s[e.key], je = (s, e) => typeof s.options == "function" ? s.options(e) : s.options ?? [], $t = (s, e, n) => je(s, e).find((a) => a.value === n), at = (s) => !s.compute && !s.readonly && s.type !== "progress", _l = ["status", "select", "relation", "person"], nt = (s) => _l.includes(s.type), $l = {
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
}, gt = (s) => s.icon ?? $l[s.type] ?? "text", ft = [
  { value: "table", label: "Tableau", icon: "table" },
  { value: "board", label: "Board", icon: "board" },
  { value: "list", label: "Liste", icon: "list" },
  { value: "calendar", label: "Calendrier", icon: "calendar" }
], It = {
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
}, ia = {
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
}, wa = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function Ma(s, e = {}) {
  return s === Nt ? e.me || void 0 : s;
}
function wl(s, e, n, a = Be(), o = {}) {
  const i = he(s, e);
  if (!wa.includes(n.op) && be(n.value)) return !0;
  const v = Ma(n.value, o);
  if (v === void 0) return !1;
  const d = { ...n, value: v }, h = (S) => String(S ?? "").toLowerCase();
  switch (d.op) {
    case "empty":
      return be(i);
    case "notempty":
      return !be(i);
    case "contains":
      return e.type === "multi" ? (i ?? []).includes(d.value) : h(i).includes(h(d.value));
    case "notcontains":
      return e.type === "multi" ? !(i ?? []).includes(d.value) : !h(i).includes(h(d.value));
    case "is":
      return i === d.value;
    case "isnot":
      return i !== d.value;
    case "before":
      return !!i && i < d.value;
    case "after":
      return !!i && i > d.value;
    case "past":
      return !!i && i < a;
    case "week":
      return !!i && i >= a && i <= _t(a, 7);
    case "eq":
      return Number(i) === Number(d.value);
    case "gt":
      return Number(i) > Number(d.value);
    case "lt":
      return Number(i) < Number(d.value);
    case "checked":
      return !!i;
    case "unchecked":
      return !i;
  }
  return !0;
}
function Ml(s, e, n) {
  const a = he(e, s), o = he(n, s), i = be(a), v = be(o);
  if (i || v) return i === v ? 0 : i ? 1 : -1;
  if (nt(s)) {
    const d = je(s).map((h) => h.value);
    return d.indexOf(a) - d.indexOf(o);
  }
  return s.type === "number" || s.type === "progress" ? a - o : s.type === "checkbox" ? Number(o) - Number(a) : s.type === "multi" ? a.length - o.length : String(a).localeCompare(String(o), "fr");
}
function Cl(s, e, n, a = "", o = {}) {
  const i = Object.fromEntries(e.map((k) => [k.key, k])), v = e.find((k) => k.type === "title"), d = a.trim().toLowerCase(), h = s.filter((k) => (!d || !v || String(k[v.key] ?? "").toLowerCase().includes(d)) && n.filters.every((V) => !i[V.prop] || wl(k, i[V.prop], V, Be(), o))), S = n.sorts.filter((k) => i[k.prop]);
  return S.length ? h.sort((k, V) => {
    for (const z of S) {
      const T = i[z.prop], y = be(he(k, T)), N = be(he(V, T));
      if (y !== N) return y ? 1 : -1;
      if (y) continue;
      const ae = Ml(T, k, V);
      if (ae) return z.dir === "desc" ? -ae : ae;
    }
    return 0;
  }) : h;
}
function Al(s, e, n = !1) {
  if (!e) return [{ key: kt, option: null, rows: s }];
  const a = je(e).map((v) => ({ key: v.value, option: v, rows: [] })), o = { key: kt, option: null, rows: [] }, i = Object.fromEntries(a.map((v) => [v.key, v]));
  for (const v of s) (i[he(v, e)] ?? o).rows.push(v);
  return (o.rows.length || n) && a.push(o), n ? a : a.filter((v) => v.rows.length);
}
function Sl(s) {
  const [e, n] = s.split("-").map(Number), o = (new Date(e, n - 1, 1).getDay() + 6) % 7, i = [];
  for (let v = 0; v < 42; v++) {
    const d = new Date(e, n - 1, 1 - o + v);
    i.push({ iso: Gt(d), day: d.getDate(), outside: d.getMonth() !== n - 1 });
  }
  return i[35].outside ? i.slice(0, 35) : i;
}
const ua = (s, e) => {
  const [n, a] = s.split("-").map(Number), o = new Date(n, a - 1 + e, 1);
  return `${o.getFullYear()}-${Ht(o.getMonth() + 1)}`;
};
function da(s, e = "table", n = {}) {
  return { id: Ie(), name: s, layout: e, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...n };
}
const vc = (s, e, n = "") => ({ id: Ie(), prop: s, op: e, value: n }), mc = (s, e = "asc") => ({ id: Ie(), prop: s, dir: e });
function Vl(s, e, n = {}) {
  const a = {};
  for (const o of s.filters) {
    const i = e.find((d) => d.key === o.prop);
    if (!i || !at(i) || be(o.value)) continue;
    const v = Ma(o.value, n);
    v !== void 0 && (o.op === "is" && (a[o.prop] = v), o.op === "contains" && i.type === "multi" && (a[o.prop] = [v]));
  }
  return a;
}
const Tl = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), Ll = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), Ca = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function lt(s) {
  if (!s) return "";
  const e = /* @__PURE__ */ new Date(s + "T00:00");
  return (e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? Tl : Ll).format(e);
}
const Dl = (s) => {
  const [e, n] = s.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(e, n - 1, 1));
}, Se = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim(), zl = (s, e, n = []) => {
  const a = Se(e);
  return s.filter((o) => !n.includes(o.value) && (!a || Se(o.label).includes(a)));
}, El = (s, e) => !!Se(e) && !s.some((n) => Se(n.label) === Se(e)), Qt = ["green", "yellow", "pink", "brown", "red", "blue", "purple", "orange", "gray"], Ol = (s) => Qt.find((e) => !s.some((n) => n.color === e)) ?? Qt[s.length % Qt.length], Re = (s, e) => {
  const n = Se(e), a = n ? Se(s).indexOf(n) : -1;
  return a < 0 ? [s, "", ""] : [s.slice(0, a), s.slice(a, a + n.length), s.slice(a + n.length)];
};
let ca = 0;
function We(s = "at") {
  return ca += 1, `${s}-${ca}`;
}
const Bl = ["aria-label"], Il = {
  key: 0,
  class: "at-comments__head"
}, Ql = { class: "at-label" }, xl = {
  key: 1,
  class: "at-comments__list"
}, Fl = {
  key: 0,
  class: "at-event"
}, Pl = ["datetime", "title"], Ul = {
  key: 1,
  class: "at-comment"
}, Nl = { class: "at-comment__meta" }, Hl = ["datetime", "title"], ql = ["title"], Kl = {
  key: 1,
  class: "at-comment__actions"
}, Rl = {
  key: 0,
  class: "at-comment__edit"
}, jl = ["id", "onKeydown"], Gl = { class: "at-composer__foot" }, Wl = { class: "at-composer__hint" }, Yl = {
  key: 1,
  class: "at-comment__body"
}, Jl = {
  key: 0,
  class: "at-mention"
}, Zl = {
  key: 2,
  class: "at-comments__empty"
}, Xl = { class: "at-composer" }, es = { class: "at-composer__box" }, ts = ["placeholder", "aria-expanded", "aria-controls", "aria-activedescendant"], as = { class: "at-composer__foot" }, ns = { class: "at-composer__hint" }, ls = ["id"], ss = /* @__PURE__ */ r("div", { class: "at-menu-label" }, "Mentionner", -1), os = ["id", "aria-selected", "onMousedown", "onMousemove"], rs = /* @__PURE__ */ J({
  __name: "AtComments",
  props: {
    items: {},
    me: {},
    people: { default: () => [] },
    label: { default: "Activité" },
    placeholder: { default: "Ajouter un commentaire…" }
  },
  emits: ["post", "edit", "delete"],
  setup(s, { emit: e }) {
    const n = s, a = e, o = K(/* @__PURE__ */ new Date());
    let i;
    an(() => {
      i = setInterval(() => {
        o.value = /* @__PURE__ */ new Date();
      }, 6e4);
    }), Ge(() => clearInterval(i));
    const v = (M) => gl(M, o.value), d = (M) => new Date(M).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" }), h = A(() => [...n.items].sort((M, I) => M.at.localeCompare(I.at))), S = (M) => yl(M, n.people), k = typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl", V = K(""), z = K(), T = We("at-mention"), y = K(null), N = K(0), ae = A(() => {
      const M = y.value;
      if (!M) return [];
      const I = Se(M.query);
      return n.people.filter((q) => Se(q).includes(I)).slice(0, 6);
    });
    function O() {
      const M = z.value;
      y.value = M && n.people.length ? bl(M.value, M.selectionStart ?? M.value.length) : null, N.value = 0;
    }
    function F(M) {
      const I = z.value, q = y.value;
      if (!I || !q) return;
      const X = I.selectionStart ?? V.value.length, de = V.value.slice(0, q.start) + "@" + M + " ";
      V.value = de + V.value.slice(X), y.value = null, Ve(() => {
        I.focus(), I.setSelectionRange(de.length, de.length);
      });
    }
    function R() {
      const M = V.value.trim();
      M && (a("post", M), V.value = "", y.value = null);
    }
    function Z(M) {
      const I = ae.value;
      if (y.value && I.length) {
        if (M.key === "ArrowDown") {
          M.preventDefault(), N.value = (N.value + 1) % I.length;
          return;
        }
        if (M.key === "ArrowUp") {
          M.preventDefault(), N.value = (N.value - 1 + I.length) % I.length;
          return;
        }
        if (M.key === "Enter" && !M.metaKey && !M.ctrlKey || M.key === "Tab") {
          M.preventDefault(), F(I[N.value]);
          return;
        }
        if (M.key === "Escape") {
          M.preventDefault(), M.stopPropagation(), y.value = null;
          return;
        }
      }
      M.key === "Enter" && (M.metaKey || M.ctrlKey) && (M.preventDefault(), R());
    }
    const C = K(null), H = K("");
    function E(M) {
      C.value = M.id, H.value = M.text, Ve(() => {
        const I = document.getElementById(`${T}-edit`);
        I == null || I.focus(), I == null || I.setSelectionRange(I.value.length, I.value.length);
      });
    }
    function Y(M) {
      const I = H.value.trim();
      I && I !== M.text && a("edit", M, I), C.value = null;
    }
    function ne(M, I) {
      M.key === "Enter" && (M.metaKey || M.ctrlKey) ? (M.preventDefault(), Y(I)) : M.key === "Escape" && (M.preventDefault(), M.stopPropagation(), C.value = null);
    }
    return (M, I) => (t(), l("section", {
      class: "at-comments",
      "aria-label": M.label
    }, [
      M.label ? (t(), l("div", Il, [
        r("span", Ql, m(M.label), 1)
      ])) : f("", !0),
      h.value.length ? (t(), l("ol", xl, [
        (t(!0), l(_, null, P(h.value, (q) => (t(), l(_, {
          key: q.id
        }, [
          q.kind === "event" ? (t(), l("li", Fl, [
            r("span", null, [
              r("b", null, m(q.author), 1),
              b(" " + m(q.text) + " · ", 1),
              r("time", {
                datetime: q.at,
                title: d(q.at)
              }, m(v(q.at)), 9, Pl)
            ])
          ])) : (t(), l("li", Ul, [
            g(Ke, {
              name: q.author,
              size: "md",
              tone: q.author === M.me ? "accent" : "neutral"
            }, null, 8, ["name", "tone"]),
            r("div", Nl, [
              r("b", null, m(q.author), 1),
              r("time", {
                datetime: q.at,
                title: d(q.at)
              }, m(v(q.at)), 9, Hl),
              q.editedAt ? (t(), l("span", {
                key: 0,
                class: "at-comment__edited",
                title: d(q.editedAt)
              }, "modifié", 8, ql)) : f("", !0),
              q.author === M.me && C.value !== q.id ? (t(), l("span", Kl, [
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  icon: "edit",
                  "icon-only": "",
                  label: "Modifier",
                  onClick: (X) => E(q)
                }, null, 8, ["onClick"]),
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  icon: "trash",
                  "icon-only": "",
                  label: "Supprimer",
                  onClick: (X) => a("delete", q)
                }, null, 8, ["onClick"])
              ])) : f("", !0)
            ]),
            C.value === q.id ? (t(), l("div", Rl, [
              le(r("textarea", {
                id: `${L(T)}-edit`,
                "onUpdate:modelValue": I[0] || (I[0] = (X) => H.value = X),
                class: "at-composer__text",
                rows: "1",
                "aria-label": "Modifier le commentaire",
                onKeydown: (X) => ne(X, q)
              }, null, 40, jl), [
                [Ae, H.value]
              ]),
              r("div", Gl, [
                r("span", Wl, [
                  g(Le, null, {
                    default: U(() => [
                      b(m(L(k)) + " ↵", 1)
                    ]),
                    _: 1
                  }),
                  b(" pour enregistrer")
                ]),
                g(te, {
                  size: "sm",
                  variant: "ghost",
                  onClick: I[1] || (I[1] = (X) => C.value = null)
                }, {
                  default: U(() => [
                    b("Annuler")
                  ]),
                  _: 1
                }),
                g(te, {
                  size: "sm",
                  variant: "primary",
                  disabled: !H.value.trim(),
                  onClick: (X) => Y(q)
                }, {
                  default: U(() => [
                    b("Enregistrer")
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])
              ])
            ])) : (t(), l("p", Yl, [
              (t(!0), l(_, null, P(S(q.text), (X, de) => (t(), l(_, { key: de }, [
                X.mention ? (t(), l("span", Jl, m(X.text), 1)) : (t(), l(_, { key: 1 }, [
                  b(m(X.text), 1)
                ], 64))
              ], 64))), 128))
            ]))
          ]))
        ], 64))), 128))
      ])) : (t(), l("p", Zl, "Aucun commentaire pour l’instant.")),
      r("div", Xl, [
        g(Ke, {
          name: M.me,
          size: "md",
          tone: "accent"
        }, null, 8, ["name"]),
        r("div", es, [
          le(r("textarea", {
            ref_key: "area",
            ref: z,
            "onUpdate:modelValue": I[2] || (I[2] = (q) => V.value = q),
            class: "at-composer__text",
            rows: "1",
            placeholder: M.placeholder,
            "aria-label": "Nouveau commentaire",
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-expanded": !!y.value && ae.value.length > 0,
            "aria-controls": L(T),
            "aria-activedescendant": y.value && ae.value.length ? `${L(T)}-${N.value}` : void 0,
            onKeydown: Z,
            onInput: O,
            onClick: O,
            onBlur: I[3] || (I[3] = (q) => y.value = null)
          }, null, 40, ts), [
            [Ae, V.value]
          ]),
          r("div", as, [
            r("span", ns, [
              g(Le, null, {
                default: U(() => [
                  b(m(L(k)) + " ↵", 1)
                ]),
                _: 1
              }),
              b(" pour envoyer")
            ]),
            g(te, {
              variant: "primary",
              size: "sm",
              disabled: !V.value.trim(),
              onClick: R
            }, {
              default: U(() => [
                b("Commenter")
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          y.value && ae.value.length ? (t(), l("div", {
            key: 0,
            id: L(T),
            class: "at-menu at-composer__mentions",
            role: "listbox",
            "aria-label": "Mentionner"
          }, [
            ss,
            (t(!0), l(_, null, P(ae.value, (q, X) => (t(), l("div", {
              id: `${L(T)}-${X}`,
              key: q,
              class: W(["at-menu-item", X === N.value && "is-active"]),
              role: "option",
              "aria-selected": X === N.value,
              onMousedown: ie((de) => F(q), ["prevent"]),
              onMousemove: (de) => N.value = X
            }, [
              g(Ke, { name: q }, null, 8, ["name"]),
              r("span", null, [
                b(m(L(Re)(q, y.value.query)[0]), 1),
                r("mark", null, m(L(Re)(q, y.value.query)[1]), 1),
                b(m(L(Re)(q, y.value.query)[2]), 1)
              ])
            ], 42, os))), 128))
          ], 8, ls)) : f("", !0)
        ])
      ])
    ], 8, Bl));
  }
}), $e = /* @__PURE__ */ J({
  __name: "AtPopover",
  props: /* @__PURE__ */ se({
    anchor: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ se(["close"], ["update:open"]),
  setup(s, { expose: e, emit: n }) {
    const a = re(s, "open"), o = s, i = n, v = K(), d = K(), h = K({ top: -9999, left: -9999 }), S = A(() => {
      var F;
      return o.anchor ?? ((F = v.value) == null ? void 0 : F.firstElementChild) ?? v.value ?? null;
    });
    function k() {
      const F = S.value, R = d.value;
      if (!F || !R) return;
      const Z = F.getBoundingClientRect(), C = R.offsetWidth, H = R.offsetHeight;
      if (o.placement === "over") {
        const ne = Math.max(8, Math.min(Z.left, window.innerWidth - C - 8)), M = Math.max(8, Math.min(Z.top, window.innerHeight - H - 8));
        (Math.abs(M - h.value.top) > 0.5 || Math.abs(ne - h.value.left) > 0.5) && (h.value = { top: M, left: ne });
        return;
      }
      if (o.placement === "right") {
        const ne = Math.max(8, Math.min(Z.right + o.offset, window.innerWidth - C - 8)), M = Math.max(8, Math.min(Z.bottom - H, window.innerHeight - H - 8));
        (Math.abs(M - h.value.top) > 0.5 || Math.abs(ne - h.value.left) > 0.5) && (h.value = { top: M, left: ne });
        return;
      }
      let E = o.align === "end" ? Z.right - C : Z.left;
      E = Math.max(8, Math.min(E, window.innerWidth - C - 8));
      let Y = Z.bottom + o.offset;
      Y + H > window.innerHeight - 8 && (Y = Math.max(8, Z.top - H - o.offset)), (Math.abs(Y - h.value.top) > 0.5 || Math.abs(E - h.value.left) > 0.5) && (h.value = { top: Y, left: E });
    }
    function V() {
      a.value && (a.value = !1, i("close"));
    }
    function z() {
      a.value ? V() : a.value = !0;
    }
    function T(F) {
      var Z, C, H;
      const R = F.target;
      (Z = d.value) != null && Z.contains(R) || (C = S.value) != null && C.contains(R) || (H = R.closest) != null && H.call(R, ".at-pop") || V();
    }
    function y(F) {
      var R, Z;
      F.key === "Escape" && (F.stopPropagation(), V(), (Z = (R = S.value) == null ? void 0 : R.focus) == null || Z.call(R));
    }
    let N = null;
    function ae() {
      setTimeout(() => document.addEventListener("mousedown", T), 0), document.addEventListener("keydown", y, !0), window.addEventListener("resize", k), window.addEventListener("scroll", k, !0), Ve(() => {
        k(), d.value && (N = new ResizeObserver(k), N.observe(d.value));
      });
    }
    function O() {
      document.removeEventListener("mousedown", T), document.removeEventListener("keydown", y, !0), window.removeEventListener("resize", k), window.removeEventListener("scroll", k, !0), N == null || N.disconnect(), N = null, h.value = { top: -9999, left: -9999 };
    }
    return ke(a, (F) => F ? ae() : O(), { immediate: !0 }), Ge(O), e({ place: k, close: V, toggle: z }), (F, R) => (t(), l(_, null, [
      F.$slots.trigger ? (t(), l("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: v,
        style: { display: "contents" }
      }, [
        j(F.$slots, "trigger", {
          toggle: z,
          open: a.value
        })
      ], 512)) : f("", !0),
      (t(), G(wt, { to: "body" }, [
        a.value ? (t(), l("div", {
          key: 0,
          ref_key: "el",
          ref: d,
          class: "at-pop",
          style: ue({ top: h.value.top + "px", left: h.value.left + "px" })
        }, [
          j(F.$slots, "default", { close: V })
        ], 4)) : f("", !0)
      ]))
    ], 64));
  }
}), is = ["aria-valuenow", "aria-label"], us = { class: "at-progress__track" }, ds = {
  key: 0,
  class: "at-progress__label"
}, Aa = /* @__PURE__ */ J({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(s) {
    const e = s, n = A(() => Math.max(0, Math.min(100, Math.round(e.value / e.max * 100))));
    return (a, o) => (t(), l("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": a.label
    }, [
      r("span", us, [
        r("span", {
          class: "at-progress__bar",
          style: ue({ width: n.value + "%" })
        }, null, 4)
      ]),
      a.showLabel ? (t(), l("span", ds, m(n.value) + " %", 1)) : f("", !0)
    ], 8, is));
  }
}), cs = {
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
}, fs = { class: "at-ellipsis" }, gs = {
  key: 7,
  class: "at-pv-rel"
}, ys = { class: "at-ellipsis" }, bs = {
  key: 9,
  class: "at-num"
}, ks = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, Ce = /* @__PURE__ */ J({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(s) {
    const e = s, n = A(() => he(e.row, e.prop)), a = A(() => e.prop.type), o = A(() => nt(e.prop) ? $t(e.prop, e.row, n.value) : void 0), i = A(() => a.value === "multi" ? (n.value ?? []).map((h) => $t(e.prop, e.row, h)).filter(Boolean) : []), v = A(() => {
      var h, S;
      return a.value === "date" && !!((S = (h = e.prop).overdue) != null && S.call(h, e.row));
    }), d = A(() => {
      var h;
      return ((h = o.value) == null ? void 0 : h.label) ?? String(n.value ?? "");
    });
    return (h, S) => {
      var k, V, z;
      return a.value === "title" ? (t(), l("span", cs, m(n.value || "Sans titre"), 1)) : a.value === "checkbox" ? (t(), l("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!n.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, ps)) : L(be)(n.value) ? (t(), l("span", vs, "—")) : a.value === "status" ? (t(), l("span", {
        key: 3,
        class: W(["at-badge", ((k = o.value) == null ? void 0 : k.tone) && o.value.tone !== "neutral" && `at-badge--${o.value.tone}`])
      }, m(d.value), 3)) : a.value === "select" ? (t(), l("span", {
        key: 4,
        class: W(["at-tag", ((V = o.value) == null ? void 0 : V.color) && o.value.color !== "gray" && `at-tag--${o.value.color}`])
      }, m(d.value), 3)) : a.value === "multi" ? (t(), l("span", ms, [
        (t(!0), l(_, null, P(i.value, (T) => (t(), l("span", {
          key: T.value,
          class: W(["at-tag", T.color && T.color !== "gray" && `at-tag--${T.color}`])
        }, m(T.label), 3))), 128))
      ])) : a.value === "person" ? (t(), l("span", hs, [
        g(Ke, { name: d.value }, null, 8, ["name"]),
        r("span", fs, m(d.value), 1)
      ])) : a.value === "relation" ? (t(), l("span", gs, [
        (z = o.value) != null && z.mark ? (t(), l("span", {
          key: 0,
          class: "at-pv-mark",
          style: ue({ background: o.value.mark })
        }, null, 4)) : (t(), G(x, {
          key: 1,
          name: h.prop.icon ?? "link"
        }, null, 8, ["name"])),
        r("span", ys, m(o.value ? o.value.label : "Introuvable"), 1)
      ])) : a.value === "date" ? (t(), l("span", {
        key: 8,
        class: W(["at-pv-date", v.value && "at-pv-over"])
      }, m(L(lt)(n.value)), 3)) : a.value === "number" ? (t(), l("span", bs, m(L(Ca).format(Number(n.value))) + m(h.prop.suffix ?? ""), 1)) : a.value === "progress" ? (t(), G(Aa, {
        key: 10,
        value: Number(n.value)
      }, null, 8, ["value"])) : (t(), l("span", ks, m(n.value), 1));
    };
  }
}), _s = ["aria-label", "onClick"], $s = ["aria-controls", "aria-activedescendant", "aria-label"], ws = ["id", "aria-label", "aria-multiselectable"], Ms = {
  key: 0,
  class: "at-menu-label"
}, Cs = ["id", "aria-selected", "onMousemove", "onClick"], As = ["aria-label", "aria-expanded", "onClick"], Ss = ["id"], Vs = {
  key: 2,
  class: "at-menu-empty",
  style: { padding: "2px 8px" }
}, Ts = { class: "at-tagedit__hint" }, Ls = { key: 0 }, Ds = ["aria-label"], zs = ["value"], Es = /* @__PURE__ */ r("div", { class: "at-menu-sep" }, null, -1), Os = /* @__PURE__ */ r("div", { class: "at-menu-label" }, "Couleur", -1), Bs = ["aria-checked", "onClick"], Is = ["aria-label"], Qs = { class: "at-menu-label" }, xs = ["aria-selected", "onClick"], Fs = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, Ps = /* @__PURE__ */ r("div", { class: "at-menu-sep" }, null, -1), Us = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Ns = { class: "at-menu-title" }, Hs = ["value", "aria-label"], qs = {
  class: "at-datequick",
  role: "group",
  "aria-label": "Raccourcis"
}, Ks = ["onClick"], Rs = { class: "at-menu-meta" }, js = /* @__PURE__ */ r("div", { class: "at-menu-sep" }, null, -1), Gs = ["disabled"], Ws = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, Ys = { class: "at-menu-title" }, Js = ["type", "aria-label"], Wt = /* @__PURE__ */ J({
  __name: "AtPropertyEditor",
  props: /* @__PURE__ */ se({
    prop: {},
    row: {},
    anchor: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ se(["update", "createOption", "updateOption", "deleteOption"], ["update:open"]),
  setup(s, { emit: e }) {
    const n = re(s, "open"), a = s, o = e, i = K(""), v = K(), d = A(() => {
      const $ = a.prop;
      return $ ? $.type === "select" || $.type === "multi" ? "tags" : nt($) ? "options" : $.type === "date" ? "date" : "input" : null;
    }), h = A(() => a.prop ? je(a.prop, a.row) : []), S = A(() => a.prop && a.row ? a.row[a.prop.key] : null), k = A(() => {
      var $;
      return (($ = a.prop) == null ? void 0 : $.type) === "multi";
    }), V = A(() => {
      var $;
      return !!(($ = a.prop) != null && $.creatable);
    }), z = K(""), T = K(0), y = K(), N = K({ w: 0, h: 0 }), ae = We("at-tags"), O = A(() => k.value ? S.value ?? [] : S.value != null ? [S.value] : []), F = A(() => O.value.map(($) => h.value.find((D) => D.value === $)).filter(($) => !!$)), R = A(() => zl(h.value, z.value, k.value ? O.value : [])), Z = A(() => V.value && El(h.value, z.value)), C = A(() => R.value.length + (Z.value ? 1 : 0)), H = A(() => Ol(h.value)), E = ($) => ["at-tag", $ && $ !== "gray" && `at-tag--${$}`];
    ke(z, () => {
      T.value = 0;
    });
    function Y($) {
      k.value ? (fe([...O.value, $.value], !1), z.value = "") : fe($.value);
    }
    function ne() {
      const $ = { value: Ie(), label: z.value.trim(), color: H.value };
      o("createOption", $), Y($);
    }
    function M($) {
      var D;
      fe(O.value.filter((B) => B !== $), !1), (D = y.value) == null || D.focus();
    }
    function I($) {
      var B;
      const D = C.value;
      $.key === "ArrowDown" ? ($.preventDefault(), D && (T.value = (T.value + 1) % D)) : $.key === "ArrowUp" ? ($.preventDefault(), D && (T.value = (T.value - 1 + D) % D)) : $.key === "Enter" ? ($.preventDefault(), T.value < R.value.length ? Y(R.value[T.value]) : Z.value && ne()) : $.key === "Tab" ? n.value = !1 : $.key === "Backspace" && !z.value && O.value.length && ($.preventDefault(), k.value ? fe(O.value.slice(0, -1), !1) : (B = a.prop) != null && B.required || fe(null, !1));
    }
    const q = [
      { value: "gray", label: "Gris" },
      { value: "brown", label: "Marron" },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Jaune" },
      { value: "green", label: "Vert" },
      { value: "blue", label: "Bleu" },
      { value: "purple", label: "Violet" },
      { value: "pink", label: "Rose" },
      { value: "red", label: "Rouge" }
    ], X = K(!1), de = K(null), Te = K(null), ce = A(() => h.value.find(($) => $.value === Te.value) ?? null);
    function Ye($, D) {
      if (X.value && Te.value === D.value) {
        X.value = !1;
        return;
      }
      de.value = $.currentTarget, Te.value = D.value, X.value = !0;
    }
    function xe($) {
      const D = $.trim();
      ce.value && D && D !== ce.value.label && o("updateOption", ce.value.value, { label: D });
    }
    function Je($) {
      ce.value && o("updateOption", ce.value.value, { color: $ });
    }
    function Ze() {
      var $;
      ce.value && o("deleteOption", ce.value.value), X.value = !1, ($ = y.value) == null || $.focus();
    }
    function rt() {
      var $;
      ($ = y.value) == null || $.focus();
    }
    ke(n, ($) => {
      var B;
      if (!$) {
        X.value = !1;
        return;
      }
      i.value = S.value ?? "", z.value = "", T.value = 0;
      const D = (B = a.anchor) == null ? void 0 : B.getBoundingClientRect();
      N.value = { w: (D == null ? void 0 : D.width) ?? 0, h: (D == null ? void 0 : D.height) ?? 0 }, Ve(() => {
        var we, De, Me;
        if (d.value === "tags") {
          (we = y.value) == null || we.focus();
          return;
        }
        const oe = (De = v.value) == null ? void 0 : De.querySelector("input, button");
        oe == null || oe.focus(), (Me = oe == null ? void 0 : oe.select) == null || Me.call(oe);
      });
    });
    const it = A(() => {
      n.value;
      const $ = Be();
      return [
        { label: "Aujourd’hui", value: $ },
        { label: "Demain", value: _t($, 1) },
        { label: "Lundi prochain", value: kl($) },
        { label: "Dans une semaine", value: _t($, 7) }
      ];
    }), At = ($) => ({ ...a.row, [a.prop.key]: $ });
    function fe($, D = !0) {
      o("update", $), D && (n.value = !1);
    }
    function St() {
      var D;
      let $ = i.value;
      ((D = a.prop) == null ? void 0 : D.type) === "number" && ($ = $ === "" || $ == null ? null : Number($)), $ !== S.value && o("update", $), n.value = !1;
    }
    function Vt() {
      var $;
      if (d.value === "input") {
        let D = i.value;
        (($ = a.prop) == null ? void 0 : $.type) === "number" && (D = D === "" ? null : Number(D)), D !== S.value && o("update", D);
      }
    }
    return ($, D) => (t(), G($e, {
      open: n.value,
      "onUpdate:open": D[14] || (D[14] = (B) => n.value = B),
      anchor: $.anchor,
      placement: d.value === "tags" ? "over" : "bottom",
      onClose: Vt
    }, {
      default: U(() => [
        $.prop ? (t(), l("div", {
          key: 0,
          ref_key: "box",
          ref: v
        }, [
          d.value === "tags" ? (t(), l("div", {
            key: 0,
            class: "at-tagedit",
            style: ue({ width: Math.max(N.value.w, 240) + "px" })
          }, [
            r("div", {
              class: "at-tagedit__field",
              style: ue({ minHeight: N.value.h + "px" }),
              onMousedown: D[2] || (D[2] = ie((B) => {
                var oe;
                return (oe = y.value) == null ? void 0 : oe.focus();
              }, ["self", "prevent"]))
            }, [
              (t(!0), l(_, null, P(F.value, (B) => (t(), l("span", {
                key: B.value,
                class: W(E(B.color))
              }, [
                b(m(B.label) + " ", 1),
                k.value ? (t(), l("button", {
                  key: 0,
                  type: "button",
                  "aria-label": `Retirer ${B.label}`,
                  onMousedown: D[0] || (D[0] = ie(() => {
                  }, ["prevent"])),
                  onClick: (oe) => M(B.value)
                }, [
                  g(x, { name: "x" })
                ], 40, _s)) : f("", !0)
              ], 2))), 128)),
              le(r("input", {
                ref_key: "input",
                ref: y,
                "onUpdate:modelValue": D[1] || (D[1] = (B) => z.value = B),
                type: "text",
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": "true",
                "aria-controls": L(ae),
                "aria-activedescendant": C.value ? `${L(ae)}-${T.value}` : void 0,
                "aria-label": $.prop.name,
                autocomplete: "off",
                spellcheck: "false",
                onKeydown: I
              }, null, 40, $s), [
                [Ae, z.value]
              ])
            ], 36),
            r("div", {
              id: L(ae),
              class: "at-menu at-tagedit__menu",
              role: "listbox",
              "aria-label": $.prop.name,
              "aria-multiselectable": k.value || void 0
            }, [
              z.value.trim() ? f("", !0) : (t(), l("div", Ms, m(V.value ? "Choisir, ou taper pour créer" : "Choisir une option"), 1)),
              (t(!0), l(_, null, P(R.value, (B, oe) => (t(), l("div", {
                id: `${L(ae)}-${oe}`,
                key: B.value,
                class: W(["at-menu-item", "at-tagedit__opt", oe === T.value && "is-active"]),
                role: "option",
                "aria-selected": O.value.includes(B.value),
                onMousedown: D[4] || (D[4] = ie(() => {
                }, ["prevent"])),
                onMousemove: (we) => T.value = oe,
                onClick: (we) => Y(B)
              }, [
                r("span", {
                  class: W(E(B.color))
                }, [
                  r("span", null, [
                    b(m(L(Re)(B.label, z.value)[0]), 1),
                    r("mark", null, m(L(Re)(B.label, z.value)[1]), 1),
                    b(m(L(Re)(B.label, z.value)[2]), 1)
                  ])
                ], 2),
                !k.value && B.value === S.value ? (t(), G(x, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : f("", !0),
                V.value ? (t(), l("button", {
                  key: 1,
                  type: "button",
                  class: "at-tagedit__more",
                  "aria-label": `Modifier ${B.label}`,
                  "aria-expanded": X.value && Te.value === B.value,
                  onMousedown: D[3] || (D[3] = ie(() => {
                  }, ["prevent"])),
                  onClick: ie((we) => Ye(we, B), ["stop"])
                }, [
                  g(x, { name: "more" })
                ], 40, As)) : f("", !0)
              ], 42, Cs))), 128)),
              Z.value ? (t(), l("div", {
                key: 1,
                id: `${L(ae)}-${R.value.length}`,
                class: W(["at-menu-item", "at-tagedit__opt", "at-tagedit__create", T.value === R.value.length && "is-active"]),
                role: "option",
                "aria-selected": "false",
                onMousedown: D[5] || (D[5] = ie(() => {
                }, ["prevent"])),
                onMousemove: D[6] || (D[6] = (B) => T.value = R.value.length),
                onClick: ne
              }, [
                g(x, { name: "plus" }),
                b("Créer "),
                r("span", {
                  class: W(E(H.value))
                }, m(z.value.trim()), 3)
              ], 42, Ss)) : f("", !0),
              C.value ? f("", !0) : (t(), l("div", Vs, m(z.value.trim() ? "Aucune option ne correspond" : "Toutes les options sont choisies"), 1)),
              r("div", Ts, [
                r("span", null, [
                  g(Le, null, {
                    default: U(() => [
                      b("↵")
                    ]),
                    _: 1
                  }),
                  b(m(Z.value && T.value === R.value.length ? "créer" : "choisir"), 1)
                ]),
                r("span", null, [
                  g(Le, null, {
                    default: U(() => [
                      b("Échap")
                    ]),
                    _: 1
                  }),
                  b("fermer")
                ]),
                k.value ? (t(), l("span", Ls, [
                  g(Le, null, {
                    default: U(() => [
                      b("⌫")
                    ]),
                    _: 1
                  }),
                  b("retirer")
                ])) : f("", !0)
              ])
            ], 8, ws),
            g($e, {
              open: X.value,
              "onUpdate:open": D[9] || (D[9] = (B) => X.value = B),
              anchor: de.value,
              placement: "right",
              onClose: rt
            }, {
              default: U(() => [
                ce.value ? (t(), l("div", {
                  key: 0,
                  class: "at-menu at-tagedit__panel",
                  role: "menu",
                  "aria-label": `Option ${ce.value.label}`
                }, [
                  (t(), l("input", {
                    key: ce.value.value,
                    class: "at-input",
                    type: "text",
                    value: ce.value.label,
                    "aria-label": "Nom de l’option",
                    onChange: D[7] || (D[7] = (B) => xe(B.target.value)),
                    onKeydown: D[8] || (D[8] = la(ie((B) => {
                      xe(B.target.value), X.value = !1, rt();
                    }, ["prevent"]), ["enter"]))
                  }, null, 40, zs)),
                  r("button", {
                    type: "button",
                    class: "at-menu-item at-menu-item--danger",
                    role: "menuitem",
                    onClick: Ze
                  }, [
                    g(x, { name: "trash" }),
                    b("Supprimer")
                  ]),
                  Es,
                  Os,
                  (t(), l(_, null, P(q, (B) => r("button", {
                    key: B.value,
                    type: "button",
                    class: "at-menu-item",
                    role: "menuitemradio",
                    "aria-checked": (ce.value.color ?? "gray") === B.value,
                    onClick: (oe) => Je(B.value)
                  }, [
                    r("span", {
                      class: W([...E(B.value), "at-tagedit__swatch"])
                    }, null, 2),
                    b(m(B.label) + " ", 1),
                    (ce.value.color ?? "gray") === B.value ? (t(), G(x, {
                      key: 0,
                      name: "check",
                      class: "at-menu-check"
                    })) : f("", !0)
                  ], 8, Bs)), 64))
                ], 8, Ds)) : f("", !0)
              ]),
              _: 1
            }, 8, ["open", "anchor"])
          ], 4)) : d.value === "options" ? (t(), l("div", {
            key: 1,
            class: "at-menu",
            role: "listbox",
            "aria-label": $.prop.name
          }, [
            r("div", Qs, m($.prop.name), 1),
            (t(!0), l(_, null, P(h.value, (B) => (t(), l("button", {
              key: B.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": B.value === S.value,
              onClick: (oe) => fe(B.value)
            }, [
              g(Ce, {
                prop: $.prop,
                row: At(B.value)
              }, null, 8, ["prop", "row"]),
              B.value === S.value ? (t(), G(x, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : f("", !0)
            ], 8, xs))), 128)),
            h.value.length ? f("", !0) : (t(), l("div", Fs, "Aucune option disponible")),
            $.prop.required ? f("", !0) : (t(), l(_, { key: 1 }, [
              Ps,
              r("button", {
                type: "button",
                class: "at-menu-item",
                onClick: D[10] || (D[10] = (B) => fe(null))
              }, [
                g(x, { name: "x" }),
                b("Effacer")
              ])
            ], 64))
          ], 8, Is)) : d.value === "date" ? (t(), l("div", Us, [
            r("span", Ns, m($.prop.name), 1),
            r("input", {
              type: "date",
              class: "at-input",
              value: S.value ?? "",
              "aria-label": $.prop.name,
              onChange: D[11] || (D[11] = (B) => fe(B.target.value || null, !1))
            }, null, 40, Hs),
            r("div", qs, [
              (t(!0), l(_, null, P(it.value, (B) => (t(), l("button", {
                key: B.label,
                type: "button",
                class: "at-menu-item",
                onClick: (oe) => fe(B.value)
              }, [
                b(m(B.label), 1),
                r("span", Rs, m(L(lt)(B.value)), 1)
              ], 8, Ks))), 128)),
              $.prop.required ? f("", !0) : (t(), l(_, { key: 0 }, [
                js,
                r("button", {
                  type: "button",
                  class: "at-menu-item",
                  disabled: !S.value,
                  onClick: D[12] || (D[12] = (B) => fe(null))
                }, [
                  g(x, { name: "x" }),
                  b("Effacer")
                ], 8, Gs)
              ], 64))
            ])
          ])) : (t(), l("div", Ws, [
            r("span", Ys, m($.prop.name), 1),
            le(r("input", {
              "onUpdate:modelValue": D[13] || (D[13] = (B) => i.value = B),
              class: "at-input",
              type: $.prop.type === "number" ? "number" : "text",
              "aria-label": $.prop.name,
              onKeydown: la(St, ["enter"])
            }, null, 40, Js), [
              [Pt, i.value]
            ])
          ]))
        ], 512)) : f("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor", "placement"]));
  }
}), Zs = { class: "at-dv" }, Xs = { class: "at-dv-viewsbar" }, eo = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, to = ["aria-selected", "title", "onClick"], ao = { class: "at-toolbar at-dv-toolbar" }, no = {
  key: 1,
  class: "at-dv-n"
}, lo = {
  key: 1,
  class: "at-dv-n"
}, so = { class: "at-input-wrap at-dv-search" }, oo = {
  key: 0,
  class: "at-dv-chips"
}, ro = { class: "at-table-wrap" }, io = /* @__PURE__ */ r("col", { style: { width: "36px" } }, null, -1), uo = /* @__PURE__ */ r("col", { style: { width: "44px" } }, null, -1), co = { class: "at-cell-check" }, po = ["checked", "indeterminate"], vo = { class: "at-th" }, mo = ["onMousedown"], ho = { class: "at-cell-check" }, fo = {
  key: 0,
  class: "at-dv-grouprow"
}, go = ["colspan"], yo = ["aria-expanded", "onClick"], bo = {
  key: 1,
  class: "at-pv-empty"
}, ko = { class: "at-count" }, _o = ["aria-selected"], $o = { class: "at-cell-check" }, wo = ["checked", "onChange"], Mo = ["onClick"], Co = ["onClick"], Ao = /* @__PURE__ */ r("td", null, null, -1), So = { class: "at-dv-newrow" }, Vo = /* @__PURE__ */ r("td", null, null, -1), To = ["colspan"], Lo = ["onClick"], Do = /* @__PURE__ */ r("td", null, null, -1), zo = /* @__PURE__ */ r("td", null, null, -1), Eo = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, Oo = { class: "at-num" }, Bo = {
  key: 2,
  class: "at-dv-board"
}, Io = {
  key: 0,
  class: "at-empty"
}, Qo = ["onDragover", "onDrop"], xo = { class: "at-dv-colhead" }, Fo = {
  key: 1,
  class: "at-pv-empty"
}, Po = { class: "at-count" }, Uo = /* @__PURE__ */ r("span", { class: "at-spacer" }, null, -1), No = { class: "at-dv-cards" }, Ho = ["onDragstart", "onClick"], qo = { class: "at-dv-cardtitle" }, Ko = {
  key: 0,
  class: "at-dv-cardprops"
}, Ro = ["onClick"], jo = { key: 3 }, Go = {
  key: 0,
  class: "at-empty"
}, Wo = {
  key: 1,
  class: "at-dv-list"
}, Yo = {
  key: 0,
  class: "at-dv-lgroup"
}, Jo = ["aria-expanded", "onClick"], Zo = {
  key: 1,
  class: "at-pv-empty"
}, Xo = { class: "at-count" }, er = ["onClick"], tr = { class: "at-pv-title" }, ar = { class: "at-dv-liprops" }, nr = { class: "at-dv-newline" }, lr = { class: "at-dv-calhead" }, sr = { class: "at-dv-calmonth" }, or = { class: "at-dv-calnote" }, rr = { class: "at-dv-calwrap" }, ir = { class: "at-dv-calgrid" }, ur = { class: "at-dv-calgrid" }, dr = ["onDragover", "onDrop"], cr = { class: "at-dv-daynum" }, pr = ["aria-label", "onClick"], vr = ["onDragstart", "onClick"], mr = {
  class: "at-menu",
  role: "menu"
}, hr = /* @__PURE__ */ r("div", { class: "at-menu-label" }, "Nouvelle vue", -1), fr = ["onClick"], gr = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, yr = /* @__PURE__ */ r("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), br = {
  key: 0,
  class: "at-rules"
}, kr = { class: "at-dv-locknote" }, _r = {
  key: 0,
  class: "at-menu-empty"
}, $r = {
  key: 1,
  class: "at-rules"
}, wr = {
  key: 0,
  class: "at-menu-empty"
}, Mr = { class: "at-select" }, Cr = ["onUpdate:modelValue", "onChange"], Ar = ["value"], Sr = { class: "at-select" }, Vr = ["onUpdate:modelValue"], Tr = ["value"], Lr = {
  key: 0,
  class: "at-select"
}, Dr = ["onUpdate:modelValue"], zr = /* @__PURE__ */ r("option", { value: "" }, "Choisir…", -1), Er = ["value"], Or = ["value"], Br = ["onUpdate:modelValue"], Ir = ["onUpdate:modelValue"], Qr = ["onUpdate:modelValue"], xr = { key: 1 }, Fr = {
  key: 2,
  class: "at-menu-actions"
}, Pr = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, Ur = /* @__PURE__ */ r("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), Nr = { class: "at-rules" }, Hr = {
  key: 0,
  class: "at-menu-empty"
}, qr = { class: "at-select" }, Kr = ["onUpdate:modelValue"], Rr = ["value"], jr = { class: "at-select" }, Gr = ["onUpdate:modelValue"], Wr = /* @__PURE__ */ r("option", { value: "asc" }, "Croissant", -1), Yr = /* @__PURE__ */ r("option", { value: "desc" }, "Décroissant", -1), Jr = [
  Wr,
  Yr
], Zr = { class: "at-menu-actions" }, Xr = {
  class: "at-menu",
  role: "menu"
}, ei = { class: "at-menu-label" }, ti = ["onClick"], ai = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, ni = /* @__PURE__ */ r("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), li = ["draggable", "onDragstart", "onDragover", "onDrop"], si = { class: "at-pi-name" }, oi = ["aria-label", "checked", "disabled", "onChange"], ri = /* @__PURE__ */ r("div", { class: "at-menu-sep" }, null, -1), ii = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, ui = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, di = /* @__PURE__ */ r("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), ci = { class: "at-dv-viewname" }, pi = { class: "at-dv-locknote" }, vi = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, mi = ["aria-pressed", "onClick"], hi = {
  key: 2,
  class: "at-field-row"
}, fi = { class: "at-select" }, gi = ["value"], yi = {
  key: 0,
  value: ""
}, bi = ["value"], ki = {
  key: 3,
  class: "at-field-row"
}, _i = /* @__PURE__ */ r("span", null, "Date utilisée", -1), $i = { class: "at-select" }, wi = ["value"], Mi = ["value"], Ci = /* @__PURE__ */ r("div", { class: "at-menu-sep" }, null, -1), Ai = ["disabled"], Si = /* @__PURE__ */ r("div", { class: "at-menu-sep" }, null, -1), Vi = /* @__PURE__ */ J({
  __name: "AtDataView",
  props: /* @__PURE__ */ se({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean, default: !0 },
    lockViews: { type: Boolean },
    resettable: { type: Boolean },
    context: {}
  }, {
    views: { default: () => [da("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ se(["update", "create", "open", "delete", "createOption", "updateOption", "deleteOption", "resetViews"], ["update:views", "update:activeView"]),
  setup(s, { emit: e }) {
    const n = s, a = re(s, "views"), o = re(s, "activeView"), i = e, v = (c) => c[n.rowKey], d = A(() => a.value.find((c) => c.id === o.value) ?? a.value[0]), h = A(() => Object.fromEntries(n.schema.map((c) => [c.key, c]))), S = A(() => n.schema.find((c) => c.type === "title")), k = A(() => {
      var c;
      return ((c = S.value) == null ? void 0 : c.key) ?? n.rowKey;
    }), V = A(() => {
      const c = (d.value.order ?? []).filter((Q) => h.value[Q]);
      for (const Q of n.schema) c.includes(Q.key) || c.push(Q.key);
      const p = c.indexOf(k.value);
      return p > 0 && (c.splice(p, 1), c.unshift(k.value)), c.map((Q) => h.value[Q]);
    }), z = A(() => V.value.filter((c) => c.type === "title" || !d.value.hidden.includes(c.key))), T = A(() => z.value.filter((c) => c.type !== "title")), y = A(() => n.schema.filter(nt)), N = A(() => n.schema.filter((c) => c.type === "date")), ae = A(() => n.schema.find((c) => c.type === "status")), O = K(""), F = A(() => n.context ?? {}), R = A(() => Cl(n.rows, n.schema, d.value, O.value, F.value)), Z = A(() => {
      var p, Q;
      const c = d.value.groupBy && h.value[d.value.groupBy] ? d.value.groupBy : null;
      return d.value.layout === "board" && !c ? ((p = ae.value) == null ? void 0 : p.key) ?? ((Q = y.value[0]) == null ? void 0 : Q.key) ?? null : c;
    }), C = A(() => Z.value && d.value.layout !== "calendar" ? h.value[Z.value] : null), H = A(() => Al(R.value, C.value, d.value.layout === "board")), E = (c) => ({ [Z.value]: c === kt ? null : c }), Y = A(() => d.value.filters.filter((c) => h.value[c.prop])), ne = A(() => d.value.sorts.filter((c) => h.value[c.prop])), M = K({}), I = K(null), q = K(null);
    function X(c, p) {
      if (I.value === c && q.value === p) {
        I.value = null;
        return;
      }
      q.value = p ?? null, I.value = c;
    }
    const de = (c) => A({ get: () => I.value === c, set: (p) => {
      !p && I.value === c && (I.value = null);
    } }), Te = de("add"), ce = de("filter"), Ye = de("sort"), xe = de("group"), Je = de("props"), Ze = de("settings");
    function rt(c) {
      c.id === d.value.id ? X("settings", M.value[c.id]) : o.value = c.id;
    }
    const it = () => {
      var c, p;
      return ((c = ae.value) == null ? void 0 : c.key) ?? ((p = y.value[0]) == null ? void 0 : p.key) ?? null;
    };
    function At(c) {
      if (n.lockViews) return;
      const p = da(ft.find((Q) => Q.value === c).label, c, { groupBy: c === "board" ? it() : null });
      a.value.push(p), o.value = p.id, I.value = null, Ve(() => X("settings", M.value[p.id]));
    }
    function fe(c) {
      d.value.layout = c, c === "board" && !d.value.groupBy && (d.value.groupBy = it());
    }
    function St() {
      if (n.lockViews) return;
      const c = JSON.parse(JSON.stringify(d.value));
      c.id = Ie(), c.name = d.value.name + " (copie)", delete c.locked, a.value.push(c), o.value = c.id, I.value = null;
    }
    function Vt() {
      if (n.lockViews || d.value.locked || a.value.length < 2) return;
      const c = a.value.indexOf(d.value);
      a.value.splice(c, 1), o.value = a.value[Math.max(0, c - 1)].id, I.value = null;
    }
    function $() {
      I.value = null, i("resetViews");
    }
    ke(() => d.value.id, () => {
      pe.value = [], I.value = null;
    });
    function D() {
      if (d.value.locked) return;
      const c = n.schema.find((p) => p.type !== "title" && p.type !== "progress") ?? n.schema[0];
      d.value.filters.push({ id: Ie(), prop: c.key, op: It[c.type][0], value: "" });
    }
    function B(c) {
      c.op = It[h.value[c.prop].type][0], c.value = "";
    }
    const oe = (c) => {
      var p;
      return It[(p = h.value[c.prop]) == null ? void 0 : p.type] ?? [];
    }, we = (c) => !wa.includes(c.op);
    function De(c) {
      const p = h.value[c.prop];
      return p ? nt(p) || p.type === "multi" ? "options" : p.type === "date" ? "date" : p.type === "number" || p.type === "progress" ? "number" : "text" : "text";
    }
    function Me(c) {
      var me;
      const p = h.value[c.prop];
      let Q = "";
      if (we(c)) {
        const u = De(c);
        Q = c.value === Nt && p.type === "person" ? "Moi" : u === "options" ? ((me = $t(p, void 0, c.value)) == null ? void 0 : me.label) ?? "…" : u === "date" ? lt(c.value) || "…" : c.value === "" ? "…" : c.value;
      }
      return { name: p.name, op: ia[c.op], val: Q };
    }
    function Qa() {
      const c = d.value.sorts.map((Q) => Q.prop), p = n.schema.find((Q) => !c.includes(Q.key)) ?? n.schema[0];
      d.value.sorts.push({ id: Ie(), prop: p.key, dir: "asc" });
    }
    const Jt = (c, p) => {
      const Q = c.indexOf(p);
      Q >= 0 && c.splice(Q, 1);
    };
    function xa() {
      d.value.locked || d.value.filters.splice(0), d.value.sorts.splice(0);
    }
    const Fa = A(() => !d.value.locked || ne.value.length > 0);
    function Tt(c) {
      d.value.groupBy = c, d.value.collapsed = [], d.value.layout !== "board" && (I.value = null);
    }
    function Pa(c) {
      const p = d.value.hidden, Q = p.indexOf(c.key);
      Q < 0 ? p.push(c.key) : p.splice(Q, 1);
    }
    function Zt(c) {
      d.value.hidden = c ? [] : n.schema.filter((p) => p.type !== "title").map((p) => p.key);
    }
    const Xe = K(null), ut = K(null);
    function Ua(c) {
      if (Xe.value == null) return;
      const p = V.value.map((me) => me.key), [Q] = p.splice(Xe.value, 1);
      p.splice(c, 0, Q), d.value.order = p, Xe.value = null, ut.value = null;
    }
    const Lt = (c) => d.value.widths[c.key] ?? c.width ?? 160, Na = A(() => 36 + z.value.reduce((c, p) => c + Lt(p), 0) + 44), Dt = K(null);
    function Ha(c, p) {
      const Q = c.clientX, me = Lt(p);
      Dt.value = p.key;
      const u = (ee) => {
        d.value.widths[p.key] = Math.max(70, Math.round(me + ee.clientX - Q));
      }, w = () => {
        Dt.value = null, window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", w);
      };
      window.addEventListener("mousemove", u), window.addEventListener("mouseup", w);
    }
    const pe = K([]), zt = A(() => R.value.length > 0 && R.value.every((c) => pe.value.includes(v(c)))), qa = A(() => pe.value.length > 0 && !zt.value);
    function Ka(c) {
      const p = pe.value.indexOf(v(c));
      p < 0 ? pe.value.push(v(c)) : pe.value.splice(p, 1);
    }
    function Ra() {
      pe.value = zt.value ? [] : R.value.map(v);
    }
    function ja() {
      i("delete", n.rows.filter((c) => pe.value.includes(v(c)))), pe.value = [];
    }
    const Fe = (c) => d.value.collapsed.includes(c);
    function Xt(c) {
      const p = d.value.collapsed, Q = p.indexOf(c);
      Q < 0 ? p.push(c) : p.splice(Q, 1);
    }
    function Et(c) {
      const p = R.value;
      if (c.type === "title") return { label: "Total", value: String(p.length) };
      if (c.type === "number") return { label: "Somme", value: Ca.format(p.reduce((Q, me) => Q + (Number(he(me, c)) || 0), 0)) + (c.suffix ?? "") };
      if (c.type === "progress" && p.length) return { label: "Moyenne", value: Math.round(p.reduce((Q, me) => Q + Number(he(me, c)), 0) / p.length) + " %" };
      if (c.type === "date" && c.overdue) {
        const Q = p.filter((me) => c.overdue(me)).length;
        return Q ? { label: "En retard", value: String(Q) } : null;
      }
      return c.type === "checkbox" ? { label: "Cochées", value: String(p.filter((Q) => he(Q, c)).length) } : null;
    }
    const ve = nn(null), ea = K(null), Ot = K(!1);
    function Ga(c, p, Q) {
      if (Q.type === "title") {
        i("open", p);
        return;
      }
      if (at(Q)) {
        if (Q.type === "checkbox") {
          i("update", p, Q.key, !p[Q.key]);
          return;
        }
        ea.value = c.currentTarget, ve.value = { row: p, prop: Q }, Ot.value = !0;
      }
    }
    function ze(c = {}) {
      i("create", { ...Vl(d.value, n.schema, F.value), ...c });
    }
    const dt = K(null), Pe = K(null);
    function ta(c, p) {
      dt.value = v(p), c.dataTransfer && (c.dataTransfer.effectAllowed = "move", c.dataTransfer.setData("text/plain", String(v(p))));
    }
    function ct() {
      dt.value = null, Pe.value = null;
    }
    const aa = () => n.rows.find((c) => v(c) === dt.value);
    function Wa(c) {
      const p = aa();
      p && Z.value && i("update", p, Z.value, c === kt ? null : c), ct();
    }
    function Ya(c) {
      const p = aa();
      p && _e.value && i("update", p, _e.value, c), ct();
    }
    const _e = A(() => {
      var c;
      return d.value.dateProp && h.value[d.value.dateProp] ? d.value.dateProp : ((c = N.value[0]) == null ? void 0 : c.key) ?? null;
    }), pt = A(() => d.value.month ?? Be().slice(0, 7)), Ja = A(() => Sl(pt.value).map((c) => ({ ...c, today: c.iso === Be(), rows: _e.value ? R.value.filter((p) => p[_e.value] === c.iso) : [] }))), na = A(() => _e.value ? R.value.filter((c) => !c[_e.value]).length : 0), Za = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, Xa = (c) => {
      const p = ae.value, Q = p ? $t(p, c, c[p.key]) : void 0;
      return Za[(Q == null ? void 0 : Q.tone) ?? "neutral"];
    }, en = (c) => {
      const p = ae.value;
      if (!p) return !1;
      const Q = je(p, c);
      return Q.length > 0 && c[p.key] === Q[Q.length - 1].value;
    }, vt = (c, p = 0) => n.iconTools ? { iconOnly: !p, label: c, title: c, "aria-label": p ? `${c} (${p})` : c } : {}, tn = (c) => {
      var p;
      return ((p = ft.find((Q) => Q.value === c)) == null ? void 0 : p.icon) ?? "table";
    }, mt = A(() => C.value ? `Sans ${C.value.name.toLowerCase()}` : "");
    return (c, p) => {
      var Q, me;
      return t(), l("section", Zs, [
        r("div", Xs, [
          c.hideViews ? f("", !0) : (t(), l(_, { key: 0 }, [
            r("div", eo, [
              (t(!0), l(_, null, P(a.value, (u) => (t(), l("button", {
                key: u.id,
                ref_for: !0,
                ref: (w) => {
                  w && (M.value[u.id] = w);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": u.id === d.value.id,
                title: u.id === d.value.id ? "Paramètres de la vue" : void 0,
                onClick: (w) => rt(u)
              }, [
                g(x, {
                  name: tn(u.layout)
                }, null, 8, ["name"]),
                b(m(u.name), 1),
                u.locked ? (t(), G(x, {
                  key: 0,
                  name: "lock",
                  class: "at-dv-lock",
                  label: "Vue système"
                })) : f("", !0)
              ], 8, to))), 128))
            ]),
            c.lockViews ? f("", !0) : (t(), G(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: p[0] || (p[0] = (u) => X("add", u.currentTarget))
            }))
          ], 64)),
          r("div", ao, [
            g(te, ye(vt("Filtrer", Y.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": Y.value.length },
              onClick: p[1] || (p[1] = (u) => X("filter", u.currentTarget))
            }), {
              default: U(() => [
                c.iconTools ? f("", !0) : (t(), l(_, { key: 0 }, [
                  b("Filtrer")
                ], 64)),
                Y.value.length ? (t(), l("span", no, m(Y.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            g(te, ye(vt("Trier", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": ne.value.length },
              onClick: p[2] || (p[2] = (u) => X("sort", u.currentTarget))
            }), {
              default: U(() => [
                c.iconTools ? f("", !0) : (t(), l(_, { key: 0 }, [
                  b("Trier")
                ], 64)),
                ne.value.length ? (t(), l("span", lo, m(ne.value.length), 1)) : f("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            d.value.layout !== "calendar" ? (t(), G(te, ye({ key: 0 }, vt("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": d.value.groupBy },
              onClick: p[3] || (p[3] = (u) => X("group", u.currentTarget))
            }), {
              default: U(() => [
                b("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : f("", !0),
            g(te, ye(vt("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: p[4] || (p[4] = (u) => X("props", u.currentTarget))
            }), {
              default: U(() => [
                b("Propriétés")
              ]),
              _: 1
            }, 16),
            r("div", so, [
              g(x, { name: "search" }),
              le(r("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (u) => O.value = u),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [Ae, O.value]
              ])
            ]),
            c.hideViews ? f("", !0) : (t(), G(te, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: p[6] || (p[6] = (u) => X("settings", u.currentTarget))
            })),
            g(te, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: p[7] || (p[7] = (u) => ze())
            }, {
              default: U(() => [
                b(m(c.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        Y.value.length || ne.value.length ? (t(), l("div", oo, [
          (t(!0), l(_, null, P(Y.value, (u) => (t(), l("button", {
            key: u.id,
            type: "button",
            class: "at-dv-chip",
            onClick: p[8] || (p[8] = (w) => X("filter", w.currentTarget))
          }, [
            g(x, { name: "filter" }),
            b(m(Me(u).name) + " " + m(Me(u).op) + " ", 1),
            r("b", null, m(Me(u).val), 1)
          ]))), 128)),
          (t(!0), l(_, null, P(ne.value, (u) => (t(), l("button", {
            key: u.id,
            type: "button",
            class: "at-dv-chip",
            onClick: p[9] || (p[9] = (w) => X("sort", w.currentTarget))
          }, [
            g(x, { name: "sort" }),
            b(m(h.value[u.prop].name) + " ", 1),
            r("b", null, m(u.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          Fa.value ? (t(), G(te, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: xa
          }, {
            default: U(() => [
              b(m(d.value.locked ? "Effacer les tris" : "Tout effacer"), 1)
            ]),
            _: 1
          })) : f("", !0)
        ])) : f("", !0),
        d.value.layout === "table" ? (t(), l(_, { key: 1 }, [
          r("div", ro, [
            r("table", {
              class: "at-table at-dv-table",
              style: ue({ width: Na.value + "px", minWidth: "100%" })
            }, [
              r("colgroup", null, [
                io,
                (t(!0), l(_, null, P(z.value, (u) => (t(), l("col", {
                  key: u.key,
                  style: ue({ width: Lt(u) + "px" })
                }, null, 4))), 128)),
                uo
              ]),
              r("thead", null, [
                r("tr", null, [
                  r("th", co, [
                    r("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: zt.value,
                      indeterminate: qa.value,
                      onChange: Ra
                    }, null, 40, po)
                  ]),
                  (t(!0), l(_, null, P(z.value, (u) => (t(), l("th", {
                    key: u.key,
                    class: W({ "at-num": u.type === "number" })
                  }, [
                    r("span", vo, [
                      g(x, {
                        name: L(gt)(u)
                      }, null, 8, ["name"]),
                      b(m(u.name), 1)
                    ]),
                    r("span", {
                      class: W(["at-dv-resize", Dt.value === u.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: ie((w) => Ha(w, u), ["prevent"])
                    }, null, 42, mo)
                  ], 2))), 128)),
                  r("th", ho, [
                    g(te, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: p[10] || (p[10] = (u) => X("props", u.currentTarget))
                    })
                  ])
                ])
              ]),
              (t(!0), l(_, null, P(H.value, (u) => (t(), l("tbody", {
                key: u.key
              }, [
                C.value ? (t(), l("tr", fo, [
                  r("td", {
                    colspan: z.value.length + 2
                  }, [
                    r("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !Fe(u.key),
                      onClick: (w) => Xt(u.key)
                    }, [
                      g(x, {
                        name: "chevron-down",
                        class: W({ "at-rot": Fe(u.key) })
                      }, null, 8, ["class"]),
                      u.option ? (t(), G(Ce, {
                        key: 0,
                        prop: C.value,
                        row: E(u.key)
                      }, null, 8, ["prop", "row"])) : (t(), l("span", bo, m(mt.value), 1)),
                      r("span", ko, m(u.rows.length), 1)
                    ], 8, yo)
                  ], 8, go)
                ])) : f("", !0),
                Fe(u.key) ? f("", !0) : (t(), l(_, { key: 1 }, [
                  (t(!0), l(_, null, P(u.rows, (w) => (t(), l("tr", {
                    key: v(w),
                    "aria-selected": pe.value.includes(v(w)) ? "true" : void 0
                  }, [
                    r("td", $o, [
                      r("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: pe.value.includes(v(w)),
                        onChange: (ee) => Ka(w)
                      }, null, 40, wo)
                    ]),
                    (t(!0), l(_, null, P(z.value, (ee) => (t(), l("td", {
                      key: ee.key,
                      class: W({ "at-num": ee.type === "number", "at-dv-titlecell": ee.type === "title", "is-edit": ee.type !== "title" && L(at)(ee) }),
                      onClick: (ge) => Ga(ge, w, ee)
                    }, [
                      g(Ce, {
                        prop: ee,
                        row: w
                      }, null, 8, ["prop", "row"]),
                      ee.type === "title" ? (t(), l("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: ie((ge) => i("open", w), ["stop"])
                      }, "Ouvrir", 8, Co)) : f("", !0)
                    ], 10, Mo))), 128)),
                    Ao
                  ], 8, _o))), 128)),
                  r("tr", So, [
                    Vo,
                    r("td", {
                      colspan: z.value.length + 1
                    }, [
                      r("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (w) => ze(C.value ? E(u.key) : {})
                      }, [
                        g(x, { name: "plus" }),
                        b(m(c.newLabel), 1)
                      ], 8, Lo)
                    ], 8, To)
                  ])
                ], 64))
              ]))), 128)),
              r("tfoot", null, [
                r("tr", null, [
                  Do,
                  (t(!0), l(_, null, P(z.value, (u) => (t(), l("td", {
                    key: u.key,
                    class: W({ "at-num": u.type === "number" })
                  }, [
                    Et(u) ? (t(), l(_, { key: 0 }, [
                      b(m(Et(u).label) + " ", 1),
                      r("b", null, m(Et(u).value), 1)
                    ], 64)) : f("", !0)
                  ], 2))), 128)),
                  zo
                ])
              ])
            ], 4)
          ]),
          pe.value.length ? (t(), l("div", Eo, [
            r("span", null, [
              r("b", Oo, m(pe.value.length), 1),
              b(" sélectionnée" + m(pe.value.length > 1 ? "s" : ""), 1)
            ]),
            g(te, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: ja
            }, {
              default: U(() => [
                b("Supprimer")
              ]),
              _: 1
            }),
            g(te, {
              variant: "ghost",
              size: "sm",
              onClick: p[11] || (p[11] = (u) => pe.value = [])
            }, {
              default: U(() => [
                b("Désélectionner")
              ]),
              _: 1
            })
          ])) : f("", !0)
        ], 64)) : d.value.layout === "board" ? (t(), l("div", Bo, [
          C.value ? (t(!0), l(_, { key: 1 }, P(H.value, (u) => {
            var w;
            return t(), l("div", {
              key: u.key,
              class: W(["at-dv-col", Pe.value === u.key && "over"]),
              onDragover: ie((ee) => Pe.value = u.key, ["prevent"]),
              onDragleave: p[12] || (p[12] = ie((ee) => Pe.value = null, ["self"])),
              onDrop: ie((ee) => Wa(u.key), ["prevent"])
            }, [
              r("div", xo, [
                u.option ? (t(), G(Ce, {
                  key: 0,
                  prop: C.value,
                  row: E(u.key)
                }, null, 8, ["prop", "row"])) : (t(), l("span", Fo, m(mt.value), 1)),
                r("span", Po, m(u.rows.length), 1),
                Uo,
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((w = u.option) == null ? void 0 : w.label) ?? mt.value}`,
                  onClick: (ee) => ze(E(u.key))
                }, null, 8, ["label", "onClick"])
              ]),
              r("div", No, [
                (t(!0), l(_, null, P(u.rows, (ee) => (t(), l("button", {
                  key: v(ee),
                  type: "button",
                  class: W(["at-dv-card", dt.value === v(ee) && "dragging"]),
                  draggable: "true",
                  onDragstart: (ge) => ta(ge, ee),
                  onDragend: ct,
                  onClick: (ge) => i("open", ee)
                }, [
                  r("span", qo, m(ee[k.value] || "Sans titre"), 1),
                  T.value.some((ge) => !L(be)(L(he)(ee, ge)) || ge.type === "checkbox") ? (t(), l("span", Ko, [
                    (t(!0), l(_, null, P(T.value, (ge) => (t(), l(_, {
                      key: ge.key
                    }, [
                      L(be)(L(he)(ee, ge)) ? f("", !0) : (t(), G(Ce, {
                        key: 0,
                        prop: ge,
                        row: ee
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : f("", !0)
                ], 42, Ho))), 128)),
                r("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (ee) => ze(E(u.key))
                }, [
                  g(x, { name: "plus" }),
                  b(m(c.newLabel), 1)
                ], 8, Ro)
              ])
            ], 42, Qo);
          }), 128)) : (t(), l("div", Io, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : d.value.layout === "list" ? (t(), l("div", jo, [
          R.value.length ? (t(), l("div", Wo, [
            (t(!0), l(_, null, P(H.value, (u) => (t(), l(_, {
              key: u.key
            }, [
              C.value ? (t(), l("div", Yo, [
                r("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !Fe(u.key),
                  onClick: (w) => Xt(u.key)
                }, [
                  g(x, {
                    name: "chevron-down",
                    class: W({ "at-rot": Fe(u.key) })
                  }, null, 8, ["class"]),
                  u.option ? (t(), G(Ce, {
                    key: 0,
                    prop: C.value,
                    row: E(u.key)
                  }, null, 8, ["prop", "row"])) : (t(), l("span", Zo, m(mt.value), 1)),
                  r("span", Xo, m(u.rows.length), 1)
                ], 8, Jo)
              ])) : f("", !0),
              Fe(u.key) ? f("", !0) : (t(!0), l(_, { key: 1 }, P(u.rows, (w) => (t(), l("button", {
                key: v(w),
                type: "button",
                class: "at-dv-li",
                onClick: (ee) => i("open", w)
              }, [
                r("span", tr, m(w[k.value] || "Sans titre"), 1),
                r("span", ar, [
                  (t(!0), l(_, null, P(T.value, (ee) => (t(), l(_, {
                    key: ee.key
                  }, [
                    L(be)(L(he)(w, ee)) ? f("", !0) : (t(), G(Ce, {
                      key: 0,
                      prop: ee,
                      row: w
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, er))), 128))
            ], 64))), 128)),
            r("div", nr, [
              r("button", {
                type: "button",
                class: "at-dv-new",
                onClick: p[14] || (p[14] = (u) => ze())
              }, [
                g(x, { name: "plus" }),
                b(m(c.newLabel), 1)
              ])
            ])
          ])) : (t(), l("div", Go, [
            b("Aucun élément ne correspond à cette vue."),
            g(te, {
              size: "sm",
              icon: "plus",
              onClick: p[13] || (p[13] = (u) => ze())
            }, {
              default: U(() => [
                b(m(c.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (t(), l(_, { key: 4 }, [
          r("div", lr, [
            r("span", sr, m(L(Dl)(pt.value)), 1),
            g(te, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: p[15] || (p[15] = (u) => d.value.month = L(ua)(pt.value, -1))
            }),
            g(te, {
              size: "sm",
              onClick: p[16] || (p[16] = (u) => d.value.month = L(Be)().slice(0, 7))
            }, {
              default: U(() => [
                b("Aujourd’hui")
              ]),
              _: 1
            }),
            g(te, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: p[17] || (p[17] = (u) => d.value.month = L(ua)(pt.value, 1))
            }),
            r("span", or, [
              _e.value ? (t(), l(_, { key: 0 }, [
                b("Par " + m(h.value[_e.value].name.toLowerCase()), 1),
                na.value ? (t(), l(_, { key: 0 }, [
                  b(" · " + m(na.value) + " sans date", 1)
                ], 64)) : f("", !0)
              ], 64)) : (t(), l(_, { key: 1 }, [
                b("Aucune propriété date")
              ], 64))
            ])
          ]),
          r("div", rr, [
            r("div", ir, [
              (t(), l(_, null, P(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (u) => r("div", {
                key: u,
                class: "at-dv-dow"
              }, m(u), 1)), 64))
            ]),
            r("div", ur, [
              (t(!0), l(_, null, P(Ja.value, (u) => (t(), l("div", {
                key: u.iso,
                class: W(["at-dv-day", u.outside && "out", u.today && "today", Pe.value === u.iso && "over"]),
                onDragover: ie((w) => Pe.value = u.iso, ["prevent"]),
                onDrop: ie((w) => Ya(u.iso), ["prevent"])
              }, [
                r("div", cr, [
                  r("span", null, m(u.day), 1),
                  _e.value ? (t(), l("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${L(lt)(u.iso)}`,
                    onClick: (w) => ze({ [_e.value]: u.iso })
                  }, [
                    g(x, { name: "plus" })
                  ], 8, pr)) : f("", !0)
                ]),
                (t(!0), l(_, null, P(u.rows, (w) => (t(), l("button", {
                  key: v(w),
                  type: "button",
                  class: W(["at-dv-calitem", en(w) && "done"]),
                  draggable: "true",
                  onDragstart: (ee) => ta(ee, w),
                  onDragend: ct,
                  onClick: (ee) => i("open", w)
                }, [
                  r("span", {
                    class: "dot",
                    style: ue({ background: Xa(w) })
                  }, null, 4),
                  r("span", null, m(w[k.value] || "Sans titre"), 1)
                ], 42, vr))), 128))
              ], 42, dr))), 128))
            ])
          ])
        ], 64)),
        g($e, {
          open: L(Te),
          "onUpdate:open": p[18] || (p[18] = (u) => Ue(Te) ? Te.value = u : null),
          anchor: q.value
        }, {
          default: U(() => [
            r("div", mr, [
              hr,
              (t(!0), l(_, null, P(L(ft), (u) => (t(), l("button", {
                key: u.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (w) => At(u.value)
              }, [
                g(x, {
                  name: u.icon
                }, null, 8, ["name"]),
                b(m(u.label), 1)
              ], 8, fr))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g($e, {
          open: L(ce),
          "onUpdate:open": p[19] || (p[19] = (u) => Ue(ce) ? ce.value = u : null),
          anchor: q.value,
          align: "end"
        }, {
          default: U(() => [
            r("div", gr, [
              yr,
              d.value.locked ? (t(), l("div", br, [
                r("p", kr, [
                  g(x, { name: "lock" }),
                  b("Vue système : ses filtres ne se modifient pas.")
                ]),
                Y.value.length ? f("", !0) : (t(), l("span", _r, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), l(_, null, P(Y.value, (u) => (t(), l("div", {
                  key: u.id,
                  class: "at-dv-chip is-static"
                }, [
                  g(x, { name: "filter" }),
                  b(m(Me(u).name) + " " + m(Me(u).op) + " ", 1),
                  r("b", null, m(Me(u).val), 1)
                ]))), 128))
              ])) : (t(), l("div", $r, [
                d.value.filters.length ? f("", !0) : (t(), l("span", wr, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), l(_, null, P(d.value.filters, (u) => (t(), l("div", {
                  key: u.id,
                  class: "at-rule"
                }, [
                  r("div", Mr, [
                    le(r("select", {
                      "onUpdate:modelValue": (w) => u.prop = w,
                      "aria-label": "Propriété",
                      onChange: (w) => B(u)
                    }, [
                      (t(!0), l(_, null, P(c.schema, (w) => (t(), l("option", {
                        key: w.key,
                        value: w.key
                      }, m(w.name), 9, Ar))), 128))
                    ], 40, Cr), [
                      [He, u.prop]
                    ]),
                    g(x, { name: "chevron-down" })
                  ]),
                  r("div", Sr, [
                    le(r("select", {
                      "onUpdate:modelValue": (w) => u.op = w,
                      "aria-label": "Condition"
                    }, [
                      (t(!0), l(_, null, P(oe(u), (w) => (t(), l("option", {
                        key: w,
                        value: w
                      }, m(L(ia)[w]), 9, Tr))), 128))
                    ], 8, Vr), [
                      [He, u.op]
                    ]),
                    g(x, { name: "chevron-down" })
                  ]),
                  we(u) ? (t(), l(_, { key: 0 }, [
                    De(u) === "options" ? (t(), l("div", Lr, [
                      le(r("select", {
                        "onUpdate:modelValue": (w) => u.value = w,
                        "aria-label": "Valeur"
                      }, [
                        zr,
                        h.value[u.prop].type === "person" ? (t(), l("option", {
                          key: 0,
                          value: L(Nt)
                        }, "Moi", 8, Er)) : f("", !0),
                        (t(!0), l(_, null, P(L(je)(h.value[u.prop]), (w) => (t(), l("option", {
                          key: w.value,
                          value: w.value
                        }, m(w.label), 9, Or))), 128))
                      ], 8, Dr), [
                        [He, u.value]
                      ]),
                      g(x, { name: "chevron-down" })
                    ])) : De(u) === "date" ? le((t(), l("input", {
                      key: 1,
                      "onUpdate:modelValue": (w) => u.value = w,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, Br)), [
                      [Ae, u.value]
                    ]) : De(u) === "number" ? le((t(), l("input", {
                      key: 2,
                      "onUpdate:modelValue": (w) => u.value = w,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, Ir)), [
                      [Ae, u.value]
                    ]) : le((t(), l("input", {
                      key: 3,
                      "onUpdate:modelValue": (w) => u.value = w,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, Qr)), [
                      [Ae, u.value]
                    ])
                  ], 64)) : (t(), l("span", xr)),
                  g(te, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (w) => Jt(d.value.filters, u)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ])),
              d.value.locked ? f("", !0) : (t(), l("div", Fr, [
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: D
                }, {
                  default: U(() => [
                    b("Ajouter un filtre")
                  ]),
                  _: 1
                })
              ]))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g($e, {
          open: L(Ye),
          "onUpdate:open": p[20] || (p[20] = (u) => Ue(Ye) ? Ye.value = u : null),
          anchor: q.value,
          align: "end"
        }, {
          default: U(() => [
            r("div", Pr, [
              Ur,
              r("div", Nr, [
                d.value.sorts.length ? f("", !0) : (t(), l("span", Hr, "Aucun tri : ordre des données.")),
                (t(!0), l(_, null, P(d.value.sorts, (u) => (t(), l("div", {
                  key: u.id,
                  class: "at-rule sort"
                }, [
                  r("div", qr, [
                    le(r("select", {
                      "onUpdate:modelValue": (w) => u.prop = w,
                      "aria-label": "Propriété"
                    }, [
                      (t(!0), l(_, null, P(c.schema, (w) => (t(), l("option", {
                        key: w.key,
                        value: w.key
                      }, m(w.name), 9, Rr))), 128))
                    ], 8, Kr), [
                      [He, u.prop]
                    ]),
                    g(x, { name: "chevron-down" })
                  ]),
                  r("div", jr, [
                    le(r("select", {
                      "onUpdate:modelValue": (w) => u.dir = w,
                      "aria-label": "Sens"
                    }, Jr, 8, Gr), [
                      [He, u.dir]
                    ]),
                    g(x, { name: "chevron-down" })
                  ]),
                  g(te, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (w) => Jt(d.value.sorts, u)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              r("div", Zr, [
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Qa
                }, {
                  default: U(() => [
                    b("Ajouter un tri")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g($e, {
          open: L(xe),
          "onUpdate:open": p[22] || (p[22] = (u) => Ue(xe) ? xe.value = u : null),
          anchor: q.value,
          align: "end"
        }, {
          default: U(() => [
            r("div", Xr, [
              r("div", ei, m(d.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              d.value.layout !== "board" ? (t(), l("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: p[21] || (p[21] = (u) => Tt(null))
              }, [
                g(x, { name: "x" }),
                b("Aucun groupe"),
                d.value.groupBy ? f("", !0) : (t(), G(x, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : f("", !0),
              (t(!0), l(_, null, P(y.value, (u) => (t(), l("button", {
                key: u.key,
                type: "button",
                class: "at-menu-item",
                onClick: (w) => Tt(u.key)
              }, [
                g(x, {
                  name: L(gt)(u)
                }, null, 8, ["name"]),
                b(m(u.name), 1),
                Z.value === u.key ? (t(), G(x, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : f("", !0)
              ], 8, ti))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g($e, {
          open: L(Je),
          "onUpdate:open": p[26] || (p[26] = (u) => Ue(Je) ? Je.value = u : null),
          anchor: q.value,
          align: "end"
        }, {
          default: U(() => [
            r("div", ai, [
              ni,
              (t(!0), l(_, null, P(V.value, (u, w) => (t(), l("div", {
                key: u.key,
                class: W(["at-menu-item", "at-pi", ut.value === w && "drop"]),
                draggable: u.type !== "title",
                onDragstart: (ee) => Xe.value = w,
                onDragover: ie((ee) => ut.value = w, ["prevent"]),
                onDrop: ie((ee) => Ua(w), ["prevent"]),
                onDragend: p[23] || (p[23] = (ee) => {
                  Xe.value = null, ut.value = null;
                })
              }, [
                g(x, {
                  name: "grip",
                  class: "grip"
                }),
                g(x, {
                  name: L(gt)(u)
                }, null, 8, ["name"]),
                r("span", si, m(u.name), 1),
                r("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${u.name}`,
                  checked: u.type === "title" || !d.value.hidden.includes(u.key),
                  disabled: u.type === "title",
                  onChange: (ee) => Pa(u)
                }, null, 40, oi)
              ], 42, li))), 128)),
              ri,
              r("div", ii, [
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[24] || (p[24] = (u) => Zt(!0))
                }, {
                  default: U(() => [
                    b("Tout afficher")
                  ]),
                  _: 1
                }),
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[25] || (p[25] = (u) => Zt(!1))
                }, {
                  default: U(() => [
                    b("Tout masquer")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g($e, {
          open: L(Ze),
          "onUpdate:open": p[30] || (p[30] = (u) => Ue(Ze) ? Ze.value = u : null),
          anchor: q.value
        }, {
          default: U(() => [
            r("div", ui, [
              di,
              d.value.locked ? (t(), l(_, { key: 0 }, [
                r("span", ci, m(d.value.name), 1),
                r("p", pi, [
                  g(x, { name: "lock" }),
                  b("Vue système : ni renommée ni supprimée, filtres fixes.")
                ])
              ], 64)) : le((t(), l("input", {
                key: 1,
                "onUpdate:modelValue": p[27] || (p[27] = (u) => d.value.name = u),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512)), [
                [Ae, d.value.name]
              ]),
              r("div", vi, [
                (t(!0), l(_, null, P(L(ft), (u) => (t(), l("button", {
                  key: u.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": d.value.layout === u.value,
                  onClick: (w) => fe(u.value)
                }, [
                  g(x, {
                    name: u.icon
                  }, null, 8, ["name"]),
                  b(m(u.label), 1)
                ], 8, mi))), 128))
              ]),
              d.value.layout !== "calendar" ? (t(), l("div", hi, [
                r("span", null, m(d.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                r("div", fi, [
                  r("select", {
                    value: d.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: p[28] || (p[28] = (u) => Tt(u.target.value || null))
                  }, [
                    d.value.layout !== "board" ? (t(), l("option", yi, "Aucun")) : f("", !0),
                    (t(!0), l(_, null, P(y.value, (u) => (t(), l("option", {
                      key: u.key,
                      value: u.key
                    }, m(u.name), 9, bi))), 128))
                  ], 40, gi),
                  g(x, { name: "chevron-down" })
                ])
              ])) : (t(), l("div", ki, [
                _i,
                r("div", $i, [
                  r("select", {
                    value: _e.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: p[29] || (p[29] = (u) => d.value.dateProp = u.target.value)
                  }, [
                    (t(!0), l(_, null, P(N.value, (u) => (t(), l("option", {
                      key: u.key,
                      value: u.key
                    }, m(u.name), 9, Mi))), 128))
                  ], 40, wi),
                  g(x, { name: "chevron-down" })
                ])
              ])),
              c.lockViews ? f("", !0) : (t(), l(_, { key: 4 }, [
                Ci,
                r("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: St
                }, [
                  g(x, { name: "copy" }),
                  b("Dupliquer la vue")
                ]),
                d.value.locked ? f("", !0) : (t(), l("button", {
                  key: 0,
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: a.value.length < 2,
                  onClick: Vt
                }, [
                  g(x, { name: "trash" }),
                  b("Supprimer la vue")
                ], 8, Ai))
              ], 64)),
              c.resettable ? (t(), l(_, { key: 5 }, [
                Si,
                r("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: $
                }, [
                  g(x, { name: "reset" }),
                  b("Réinitialiser les vues")
                ])
              ], 64)) : f("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(Wt, {
          open: Ot.value,
          "onUpdate:open": p[31] || (p[31] = (u) => Ot.value = u),
          prop: ((Q = ve.value) == null ? void 0 : Q.prop) ?? null,
          row: (me = ve.value) == null ? void 0 : me.row,
          anchor: ea.value,
          onUpdate: p[32] || (p[32] = (u) => ve.value && i("update", ve.value.row, ve.value.prop.key, u)),
          onCreateOption: p[33] || (p[33] = (u) => ve.value && i("createOption", ve.value.prop, u, ve.value.row)),
          onUpdateOption: p[34] || (p[34] = (u, w) => ve.value && i("updateOption", ve.value.prop, u, w, ve.value.row)),
          onDeleteOption: p[35] || (p[35] = (u) => ve.value && i("deleteOption", ve.value.prop, u, ve.value.row))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), Ti = {
  key: 0,
  class: "at-drawer-wrap"
}, Li = ["aria-label"], Di = { class: "at-drawer__head" }, zi = { class: "at-drawer__crumb" }, Ei = /* @__PURE__ */ r("span", { class: "at-spacer" }, null, -1), Oi = { class: "at-drawer__body" }, Bi = /* @__PURE__ */ J({
  __name: "AtDrawer",
  props: /* @__PURE__ */ se({
    label: {},
    width: { default: 580 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(s) {
    const e = re(s, "open"), n = K();
    let a = null;
    function o(i) {
      i.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return ke(e, (i) => {
      var v;
      i ? (a = document.activeElement, document.addEventListener("keydown", o), Ve(() => {
        var d;
        return (d = n.value) == null ? void 0 : d.focus();
      })) : (document.removeEventListener("keydown", o), (v = a == null ? void 0 : a.focus) == null || v.call(a));
    }, { immediate: !0 }), Ge(() => document.removeEventListener("keydown", o)), (i, v) => (t(), G(wt, { to: "body" }, [
      g(ya, { name: "at-drawer" }, {
        default: U(() => [
          e.value ? (t(), l("div", Ti, [
            r("div", {
              class: "at-overlay",
              onClick: v[0] || (v[0] = (d) => e.value = !1)
            }),
            r("aside", {
              ref_key: "panel",
              ref: n,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.label,
              tabindex: "-1",
              style: ue({ width: `min(${i.width}px, 100%)` })
            }, [
              r("header", Di, [
                r("span", zi, [
                  j(i.$slots, "crumb", {}, () => [
                    b(m(i.label), 1)
                  ])
                ]),
                Ei,
                j(i.$slots, "actions"),
                g(te, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: v[1] || (v[1] = (d) => e.value = !1)
                })
              ]),
              r("div", Oi, [
                j(i.$slots, "default")
              ])
            ], 12, Li)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ii = ["aria-label"], Qi = {
  key: 0,
  class: "at-menu-label"
}, Sa = /* @__PURE__ */ J({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(s) {
    const e = K();
    function n(a) {
      var d;
      const o = [...((d = e.value) == null ? void 0 : d.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!o.length) return;
      const i = o.indexOf(document.activeElement), v = (h) => {
        a.preventDefault(), o[(h + o.length) % o.length].focus();
      };
      a.key === "ArrowDown" ? v(i + 1) : a.key === "ArrowUp" ? v(i < 0 ? o.length - 1 : i - 1) : a.key === "Home" ? v(0) : a.key === "End" && v(o.length - 1);
    }
    return (a, o) => (t(), l("div", {
      ref_key: "el",
      ref: e,
      class: "at-menu",
      role: "menu",
      "aria-label": a.label,
      style: ue(a.minWidth ? { minWidth: a.minWidth + "px" } : void 0),
      onKeydown: n
    }, [
      a.label ? (t(), l("div", Qi, m(a.label), 1)) : f("", !0),
      j(a.$slots, "default")
    ], 44, Ii));
  }
}), Va = /* @__PURE__ */ J({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    minWidth: { default: 220 }
  },
  setup(s) {
    const e = K(!1);
    function n(a) {
      a.target.closest('.at-menu-item[role="menuitem"]') && (e.value = !1);
    }
    return (a, o) => (t(), G($e, {
      open: e.value,
      "onUpdate:open": o[0] || (o[0] = (i) => e.value = i),
      align: a.align,
      placement: a.placement
    }, {
      trigger: U((i) => [
        j(a.$slots, "trigger", ln(sn(i)))
      ]),
      default: U(() => [
        g(Sa, {
          label: a.label,
          "min-width": a.minWidth,
          onClick: n
        }, {
          default: U(() => [
            j(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align", "placement"]));
  }
}), xi = { class: "at-empty" }, Fi = /* @__PURE__ */ J({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(s) {
    return (e, n) => (t(), l("div", xi, [
      j(e.$slots, "default", {}, () => [
        b(m(e.message), 1)
      ]),
      j(e.$slots, "action")
    ]));
  }
}), Pi = { class: "at-field" }, Ui = ["for"], Ni = ["id"], Hi = ["id"], qt = /* @__PURE__ */ J({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(s) {
    const n = s.id ?? We("field");
    return (a, o) => (t(), l("div", Pi, [
      a.label ? (t(), l("label", {
        key: 0,
        class: "at-label",
        for: L(n)
      }, m(a.label), 9, Ui)) : f("", !0),
      j(a.$slots, "default", {
        id: L(n),
        invalid: !!a.error,
        describedby: a.error || a.hint ? L(n) + "-hint" : void 0
      }),
      a.error ? (t(), l("span", {
        key: 1,
        id: L(n) + "-hint",
        class: "at-hint at-hint--error"
      }, m(a.error), 9, Ni)) : a.hint ? (t(), l("span", {
        key: 2,
        id: L(n) + "-hint",
        class: "at-hint"
      }, m(a.hint), 9, Hi)) : f("", !0)
    ]));
  }
}), qi = ["role", "aria-label", "aria-hidden"], Ta = /* @__PURE__ */ J({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: W(["at-tile", e.size !== "sm" && `at-tile--${e.size}`, e.color === "neutral" ? "at-tile--neutral" : `at-tone-${e.color}`]),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true"
    }, [
      g(x, { name: e.name }, null, 8, ["name"])
    ], 10, qi));
  }
}), Ki = {
  key: 0,
  class: "at-input-wrap"
}, Ri = ["type", "placeholder", "disabled", "aria-invalid"], ji = ["type", "placeholder", "disabled", "aria-invalid"], Kt = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "AtInput",
  props: /* @__PURE__ */ se({
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
  setup(s, { expose: e }) {
    const n = re(s, "modelValue"), a = s, o = K();
    return e({ focus: () => {
      var i;
      return (i = o.value) == null ? void 0 : i.focus();
    }, el: o }), (i, v) => i.icon || i.kbd ? (t(), l("div", Ki, [
      i.icon ? (t(), G(x, {
        key: 0,
        name: i.icon
      }, null, 8, ["name"])) : f("", !0),
      le(r("input", ye(i.$attrs, {
        ref_key: "el",
        ref: o,
        "onUpdate:modelValue": v[0] || (v[0] = (d) => n.value = d),
        class: "at-input",
        style: a.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: i.type,
        placeholder: i.placeholder,
        disabled: i.disabled,
        "aria-invalid": i.invalid || void 0
      }), null, 16, Ri), [
        [Pt, n.value]
      ]),
      i.kbd ? (t(), G(Le, { key: 1 }, {
        default: U(() => [
          b(m(i.kbd), 1)
        ]),
        _: 1
      })) : f("", !0)
    ])) : le((t(), l("input", ye({ key: 1 }, i.$attrs, {
      ref_key: "el",
      ref: o,
      "onUpdate:modelValue": v[1] || (v[1] = (d) => n.value = d),
      class: "at-input",
      style: a.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: i.type,
      placeholder: i.placeholder,
      disabled: i.disabled,
      "aria-invalid": i.invalid || void 0
    }), null, 16, ji)), [
      [Pt, n.value]
    ]);
  }
}), Gi = ["aria-label", "aria-activedescendant"], Wi = ["id", "aria-selected", "onClick", "onDblclick"], Yi = {
  key: 0,
  class: "at-list__empty"
}, Ji = /* @__PURE__ */ J({
  __name: "AtList",
  props: /* @__PURE__ */ se({
    items: {},
    rowKey: { type: [String, Function] },
    global: { type: Boolean },
    label: {}
  }, {
    active: { default: null },
    activeModifiers: {}
  }),
  emits: /* @__PURE__ */ se(["open"], ["update:active"]),
  setup(s, { expose: e, emit: n }) {
    const a = s, o = re(s, "active"), i = n, v = K(), d = We("at-list"), h = (O) => typeof a.rowKey == "function" ? a.rowKey(O) : String(O == null ? void 0 : O[a.rowKey]), S = A(() => a.items.map(h)), k = A(() => o.value == null ? -1 : S.value.indexOf(o.value)), V = (O) => `${d}-${O}`, z = (O) => {
      const F = O;
      return String((F == null ? void 0 : F.label) ?? (F == null ? void 0 : F.title) ?? (F == null ? void 0 : F.name) ?? h(O));
    };
    function T(O) {
      const F = S.value.length;
      if (!F) return;
      const R = k.value, Z = R < 0 ? O > 0 ? 0 : F - 1 : Math.max(0, Math.min(F - 1, R + O));
      o.value = S.value[Z];
    }
    function y(O) {
      S.value.length && (o.value = S.value[Math.max(0, Math.min(S.value.length - 1, O))]);
    }
    function N() {
      const O = k.value;
      O >= 0 && i("open", a.items[O]);
    }
    function ae(O) {
      if (O.ctrlKey || O.metaKey || O.altKey) return;
      const F = O.key.toLowerCase();
      if (F === "arrowdown" || F === "j") T(1);
      else if (F === "arrowup" || F === "k") T(-1);
      else if (F === "home") y(0);
      else if (F === "end") y(S.value.length - 1);
      else if (F === "enter") N();
      else return;
      O.preventDefault();
    }
    if (a.global) {
      const O = () => a.items.length > 0;
      Bt(["j", "arrowdown"], () => T(1), { when: O }), Bt(["k", "arrowup"], () => T(-1), { when: O }), Bt("enter", N, { when: () => k.value >= 0 });
    }
    return ke(k, (O) => {
      O < 0 || Ve(() => {
        var F, R;
        return (R = (F = document.getElementById(V(O))) == null ? void 0 : F.scrollIntoView) == null ? void 0 : R.call(F, { block: "nearest" });
      });
    }), e({ focus: () => {
      var O;
      return (O = v.value) == null ? void 0 : O.focus();
    }, move: T }), (O, F) => (t(), l("div", {
      ref_key: "el",
      ref: v,
      class: "at-list",
      role: "listbox",
      tabindex: "0",
      "aria-label": O.label,
      "aria-activedescendant": k.value >= 0 ? V(k.value) : void 0,
      onKeydown: ae
    }, [
      (t(!0), l(_, null, P(O.items, (R, Z) => (t(), l("div", {
        id: V(Z),
        key: S.value[Z],
        class: W(["at-list__item", Z === k.value && "is-active"]),
        role: "option",
        "aria-selected": Z === k.value,
        onClick: (C) => o.value = S.value[Z],
        onDblclick: (C) => i("open", R)
      }, [
        j(O.$slots, "item", {
          item: R,
          active: Z === k.value,
          index: Z
        }, () => [
          b(m(z(R)), 1)
        ])
      ], 42, Wi))), 128)),
      O.items.length ? f("", !0) : (t(), l("div", Yi, [
        j(O.$slots, "empty", {}, () => [
          b("Aucun élément")
        ])
      ]))
    ], 40, Gi));
  }
}), xt = {
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
}, Zi = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", Rt = {
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
function hc(s) {
  Object.assign(Rt, s);
}
const fc = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, Xi = ["role", "aria-label", "aria-hidden"], eu = ["viewBox", "width", "height"], tu = ["d"], au = ["stroke-width", "innerHTML"], nu = {
  key: 0,
  class: "at-logo__name"
}, lu = /* @__PURE__ */ J({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(s) {
    const e = s, n = A(() => Rt[e.app] ?? Rt.atelier), a = A(() => e.name ?? n.value.name), o = A(() => Math.max(16, e.size)), i = A(() => ({
      "--at-logo-size": o.value + "px",
      "--at-logo-fill": `var(--${n.value.color})`
    }));
    return (v, d) => (t(), l("span", {
      class: W(["at-logo", v.wordmark && "at-logo--wordmark"]),
      style: ue(i.value),
      role: !v.wordmark && v.label ? "img" : void 0,
      "aria-label": v.wordmark ? void 0 : v.label,
      "aria-hidden": !v.wordmark && !v.label ? "true" : void 0
    }, [
      (t(), l("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${L(xt).size} ${L(xt).size}`,
        width: o.value,
        height: o.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        r("path", {
          class: "at-logo__tile",
          d: L(Zi)
        }, null, 8, tu),
        r("g", {
          class: "at-logo__glyph",
          "stroke-width": L(xt).stroke,
          innerHTML: n.value.glyph
        }, null, 8, au)
      ], 8, eu)),
      v.wordmark ? (t(), l("span", nu, m(a.value), 1)) : f("", !0)
    ], 14, Xi));
  }
}), su = { class: "at-login__panel" }, ou = {
  key: 0,
  class: "at-login__brand"
}, ru = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, iu = ["aria-labelledby"], uu = { class: "at-login__head" }, du = ["id"], cu = {
  key: 0,
  class: "at-login__desc"
}, pu = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, vu = /* @__PURE__ */ r("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ r("span", null, "ou")
], -1), mu = {
  key: 1,
  class: "at-login__foot"
}, hu = /* @__PURE__ */ J({
  __name: "AtLogin",
  props: /* @__PURE__ */ se({
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
  emits: /* @__PURE__ */ se(["submit", "passkey"], ["update:username", "update:password", "update:remember"]),
  setup(s, { expose: e, emit: n }) {
    const a = re(s, "username"), o = re(s, "password"), i = re(s, "remember"), v = s, d = n, h = We("login"), S = A(() => v.loading !== !1), k = A(() => {
      var y;
      return (v.mark ?? ((y = v.brand) == null ? void 0 : y.trim().charAt(0)) ?? "").toUpperCase();
    }), V = K(), z = K();
    function T() {
      var y, N;
      if (!S.value) {
        if (!a.value.trim()) return (y = V.value) == null ? void 0 : y.focus();
        if (!o.value) return (N = z.value) == null ? void 0 : N.focus();
        d("submit", { username: a.value.trim(), password: o.value, remember: i.value });
      }
    }
    return e({
      focusUsername: () => {
        var y;
        return (y = V.value) == null ? void 0 : y.focus();
      },
      focusPassword: () => {
        var y;
        return (y = z.value) == null ? void 0 : y.focus();
      }
    }), (y, N) => (t(), G(fa(y.as), { class: "at-login" }, {
      default: U(() => [
        r("div", su, [
          y.brand || y.$slots.brand ? (t(), l("div", ou, [
            j(y.$slots, "brand", {}, () => [
              r("span", ru, m(k.value), 1),
              b(m(y.brand), 1)
            ])
          ])) : f("", !0),
          r("section", {
            class: "at-login__card",
            "aria-labelledby": L(h)
          }, [
            r("header", uu, [
              r("h1", {
                id: L(h),
                class: "at-login__title"
              }, m(y.title), 9, du),
              y.description ? (t(), l("p", cu, m(y.description), 1)) : f("", !0)
            ]),
            y.error ? (t(), l("p", pu, m(y.error), 1)) : f("", !0),
            j(y.$slots, "default", {}, () => [
              r("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: ie(T, ["prevent"])
              }, [
                g(qt, { label: y.usernameLabel }, {
                  default: U((ae) => [
                    g(Kt, {
                      id: ae.id,
                      ref_key: "usernameInput",
                      ref: V,
                      modelValue: a.value,
                      "onUpdate:modelValue": N[0] || (N[0] = (O) => a.value = O),
                      name: "username",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: "false",
                      disabled: S.value,
                      invalid: !!y.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(qt, { label: y.passwordLabel }, {
                  default: U((ae) => [
                    g(Kt, {
                      id: ae.id,
                      ref_key: "passwordInput",
                      ref: z,
                      modelValue: o.value,
                      "onUpdate:modelValue": N[1] || (N[1] = (O) => o.value = O),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: S.value,
                      invalid: !!y.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                y.rememberable ? (t(), G(ka, {
                  key: 0,
                  modelValue: i.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (ae) => i.value = ae),
                  label: y.rememberLabel,
                  disabled: S.value
                }, null, 8, ["modelValue", "label", "disabled"])) : f("", !0),
                g(te, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "at-login__submit",
                  loading: y.loading === !0 || y.loading === "password",
                  disabled: S.value
                }, {
                  default: U(() => [
                    b(m(y.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 32),
              y.passkey ? (t(), l(_, { key: 0 }, [
                vu,
                g(te, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: y.loading === "passkey",
                  disabled: S.value,
                  onClick: N[3] || (N[3] = (ae) => d("passkey"))
                }, {
                  default: U(() => [
                    b(m(y.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : f("", !0)
            ])
          ], 8, iu),
          y.$slots.footer ? (t(), l("footer", mu, [
            j(y.$slots, "footer")
          ])) : f("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), fu = ["role", "aria-checked", "disabled"], gu = {
  key: 2,
  class: "at-menu-meta"
}, qe = /* @__PURE__ */ J({
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
  setup(s) {
    return (e, n) => (t(), l("button", {
      type: "button",
      class: W(["at-menu-item", e.danger && "at-menu-item--danger"]),
      role: e.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": e.checked !== void 0 ? e.checked : void 0,
      disabled: e.disabled,
      onClick: n[0] || (n[0] = (a) => e.$emit("select", a))
    }, [
      e.icon ? (t(), G(x, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      j(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ]),
      e.kbd ? (t(), G(Le, { key: 1 }, {
        default: U(() => [
          b(m(e.kbd), 1)
        ]),
        _: 1
      })) : e.meta ? (t(), l("span", gu, m(e.meta), 1)) : e.checked ? (t(), G(x, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : f("", !0)
    ], 10, fu));
  }
}), yu = {}, bu = { class: "at-menu-label" };
function ku(s, e) {
  return t(), l("div", bu, [
    j(s.$slots, "default")
  ]);
}
const jt = /* @__PURE__ */ Mt(yu, [["render", ku]]), _u = {}, $u = {
  class: "at-menu-sep",
  role: "separator"
};
function wu(s, e) {
  return t(), l("div", $u);
}
const yt = /* @__PURE__ */ Mt(_u, [["render", wu]]), Mu = {
  key: 0,
  class: "at-modal-wrap"
}, Cu = ["aria-label"], Au = { class: "at-modal__head" }, Su = { style: { flex: "1", "min-width": "0" } }, Vu = { class: "at-modal__title" }, Tu = {
  key: 0,
  class: "at-modal__desc"
}, Lu = { class: "at-modal__body" }, Du = {
  key: 0,
  class: "at-modal__foot"
}, zu = /* @__PURE__ */ J({
  __name: "AtModal",
  props: /* @__PURE__ */ se({
    title: {},
    description: {},
    size: { default: "md" },
    dismissible: { type: Boolean, default: !0 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(s) {
    const e = re(s, "open"), n = K();
    let a = null;
    function o(i) {
      i.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return ke(e, (i) => {
      var v;
      i ? (a = document.activeElement, document.addEventListener("keydown", o), Ve(() => {
        var d;
        return (d = n.value) == null ? void 0 : d.focus();
      })) : (document.removeEventListener("keydown", o), (v = a == null ? void 0 : a.focus) == null || v.call(a));
    }, { immediate: !0 }), Ge(() => document.removeEventListener("keydown", o)), (i, v) => (t(), G(wt, { to: "body" }, [
      g(ya, { name: "at-modal" }, {
        default: U(() => [
          e.value ? (t(), l("div", Mu, [
            r("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: v[0] || (v[0] = (d) => i.dismissible && (e.value = !1))
            }),
            r("div", {
              ref_key: "panel",
              ref: n,
              class: W(["at-modal", i.size !== "md" && `at-modal--${i.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title,
              tabindex: "-1"
            }, [
              r("header", Au, [
                r("div", Su, [
                  r("h2", Vu, m(i.title), 1),
                  i.description ? (t(), l("p", Tu, m(i.description), 1)) : f("", !0)
                ]),
                i.dismissible ? (t(), G(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: v[1] || (v[1] = (d) => e.value = !1)
                })) : f("", !0)
              ]),
              r("div", Lu, [
                j(i.$slots, "default")
              ]),
              i.$slots.footer ? (t(), l("footer", Du, [
                j(i.$slots, "footer", {
                  close: () => e.value = !1
                })
              ])) : f("", !0)
            ], 10, Cu)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Eu = ["aria-label"], Ou = ["aria-expanded", "aria-controls"], Bu = { class: "at-ellipsis" }, Iu = ["id"], Qu = {
  key: 0,
  class: "at-nav-label"
}, xu = /* @__PURE__ */ J({
  __name: "AtNavGroup",
  props: /* @__PURE__ */ se({
    label: {},
    collapsible: { type: Boolean },
    mark: {}
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(s) {
    const e = s, n = re(s, "open"), a = We("at-nav");
    return (o, i) => (t(), l("nav", {
      class: "at-nav",
      "aria-label": o.label
    }, [
      o.label && e.collapsible ? (t(), l(_, { key: 0 }, [
        r("button", {
          type: "button",
          class: "at-nav-label at-nav-toggle",
          "aria-expanded": n.value,
          "aria-controls": L(a),
          onClick: i[0] || (i[0] = (v) => n.value = !n.value)
        }, [
          o.mark ? (t(), l("span", {
            key: 0,
            class: "at-nav-mark",
            style: ue({ background: o.mark })
          }, null, 4)) : f("", !0),
          r("span", Bu, m(o.label), 1),
          g(x, {
            name: "chevron-down",
            class: W({ "at-rot": !n.value })
          }, null, 8, ["class"])
        ], 8, Ou),
        le(r("div", {
          id: L(a),
          class: "at-nav-body"
        }, [
          j(o.$slots, "default")
        ], 8, Iu), [
          [on, n.value]
        ])
      ], 64)) : (t(), l(_, { key: 1 }, [
        o.label ? (t(), l("div", Qu, [
          o.mark ? (t(), l("span", {
            key: 0,
            class: "at-nav-mark",
            style: ue({ background: o.mark })
          }, null, 4)) : f("", !0),
          b(m(o.label), 1)
        ])) : f("", !0),
        j(o.$slots, "default")
      ], 64))
    ], 8, Eu));
  }
}), Fu = ["href", "aria-current"], Pu = { class: "at-ellipsis" }, Uu = {
  key: 3,
  class: "at-nav-count"
}, Nu = /* @__PURE__ */ J({
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
  setup(s) {
    return (e, n) => (t(), l("a", {
      class: "at-nav-item",
      href: e.href ?? "#",
      "aria-current": e.active ? "page" : void 0,
      onClick: n[0] || (n[0] = (a) => {
        !e.href && a.preventDefault(), e.$emit("click", a);
      })
    }, [
      e.mark ? (t(), l("span", {
        key: 0,
        class: "at-nav-mark",
        style: ue({ background: e.mark })
      }, null, 4)) : e.icon && e.tile ? (t(), G(Ta, {
        key: 1,
        name: e.icon,
        color: e.tile
      }, null, 8, ["name", "color"])) : e.icon ? (t(), G(x, {
        key: 2,
        name: e.icon
      }, null, 8, ["name"])) : f("", !0),
      r("span", Pu, [
        j(e.$slots, "default", {}, () => [
          b(m(e.label), 1)
        ])
      ]),
      e.count != null && e.count !== "" ? (t(), l("span", Uu, m(e.count), 1)) : f("", !0)
    ], 8, Fu));
  }
}), Hu = {
  key: 0,
  class: "at-page__head"
}, qu = { class: "t-heading-1" }, Ku = { key: 0 }, Ru = /* @__PURE__ */ J({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(s) {
    return (e, n) => (t(), l("div", {
      class: W(["at-page", e.wide && "at-page--wide"])
    }, [
      e.title || e.$slots.head ? (t(), l("div", Hu, [
        j(e.$slots, "head", {}, () => [
          r("h1", qu, m(e.title), 1),
          e.description ? (t(), l("p", Ku, m(e.description), 1)) : f("", !0)
        ])
      ])) : f("", !0),
      j(e.$slots, "default")
    ], 2));
  }
}), ju = { class: "at-proplist" }, Gu = ["disabled", "onClick"], Wu = /* @__PURE__ */ J({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update", "createOption", "updateOption", "deleteOption"],
  setup(s, { expose: e, emit: n }) {
    const a = s, o = n, i = A(() => a.schema.filter((z) => {
      var T;
      return z.type !== "title" && !((T = a.exclude) != null && T.includes(z.key));
    })), v = K(null), d = K(null), h = K(!1), S = {};
    function k(z, T) {
      if (at(z)) {
        if (z.type === "checkbox") {
          o("update", z.key, !a.row[z.key]);
          return;
        }
        d.value = T, v.value = z, h.value = !0;
      }
    }
    function V(z) {
      var N;
      const T = i.value.find((ae) => ae.key === z);
      if (!T) return;
      const y = S[z] ?? null;
      (N = y == null ? void 0 : y.scrollIntoView) == null || N.call(y, { block: "nearest" }), k(T, y);
    }
    return e({ edit: V }), (z, T) => (t(), l(_, null, [
      r("dl", ju, [
        (t(!0), l(_, null, P(i.value, (y) => (t(), l(_, {
          key: y.key
        }, [
          r("dt", null, [
            g(x, {
              name: L(gt)(y)
            }, null, 8, ["name"]),
            b(m(y.name), 1)
          ]),
          r("dd", null, [
            r("button", {
              ref_for: !0,
              ref: (N) => {
                N ? S[y.key] = N : delete S[y.key];
              },
              type: "button",
              class: "at-proplist__value",
              disabled: !L(at)(y),
              onClick: (N) => k(y, N.currentTarget)
            }, [
              g(Ce, {
                prop: y,
                row: z.row
              }, null, 8, ["prop", "row"])
            ], 8, Gu)
          ])
        ], 64))), 128))
      ]),
      g(Wt, {
        open: h.value,
        "onUpdate:open": T[0] || (T[0] = (y) => h.value = y),
        prop: v.value,
        row: z.row,
        anchor: d.value,
        onUpdate: T[1] || (T[1] = (y) => v.value && o("update", v.value.key, y)),
        onCreateOption: T[2] || (T[2] = (y) => v.value && o("createOption", v.value.key, y)),
        onUpdateOption: T[3] || (T[3] = (y, N) => v.value && o("updateOption", v.value.key, y, N)),
        onDeleteOption: T[4] || (T[4] = (y) => v.value && o("deleteOption", v.value.key, y))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), Yu = ["aria-label"], Ju = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Zu = /* @__PURE__ */ J({
  __name: "AtSegment",
  props: /* @__PURE__ */ se({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = re(s, "modelValue");
    return (n, a) => (t(), l("div", {
      class: "at-segment",
      role: "group",
      "aria-label": n.label
    }, [
      (t(!0), l(_, null, P(n.items, (o) => (t(), l("button", {
        key: String(o.value),
        type: "button",
        "aria-pressed": e.value === o.value,
        "aria-label": o.iconOnly ? o.label : void 0,
        title: o.iconOnly ? o.label : void 0,
        disabled: o.disabled,
        onClick: (i) => e.value = o.value
      }, [
        o.icon ? (t(), G(x, {
          key: 0,
          name: o.icon
        }, null, 8, ["name"])) : f("", !0),
        o.iconOnly ? f("", !0) : (t(), l(_, { key: 1 }, [
          b(m(o.label), 1)
        ], 64))
      ], 8, Ju))), 128))
    ], 8, Yu));
  }
}), Xu = { class: "at-select" }, ed = ["disabled", "aria-invalid"], td = {
  key: 0,
  value: null,
  disabled: ""
}, ad = ["value", "disabled"], nd = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "AtSelect",
  props: /* @__PURE__ */ se({
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
  setup(s) {
    const e = re(s, "modelValue");
    return (n, a) => (t(), l("div", Xu, [
      le(r("select", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
        disabled: n.disabled,
        "aria-invalid": n.invalid || void 0,
        style: n.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        n.placeholder ? (t(), l("option", td, m(n.placeholder), 1)) : f("", !0),
        (t(!0), l(_, null, P(n.options, (o) => (t(), l("option", {
          key: String(o.value),
          value: o.value,
          disabled: o.disabled
        }, m(o.label), 9, ad))), 128))
      ], 16, ed), [
        [He, e.value]
      ]),
      g(x, { name: "chevron-down" })
    ]));
  }
}), ld = {}, sd = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, od = {
  key: 0,
  class: "at-sidebar__foot"
};
function rd(s, e) {
  return t(), l("aside", sd, [
    j(s.$slots, "header"),
    j(s.$slots, "default"),
    s.$slots.footer ? (t(), l("div", od, [
      j(s.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const id = /* @__PURE__ */ Mt(ld, [["render", rd]]), ud = { class: "at-stat__label" }, dd = { class: "at-stat__row" }, cd = { class: "at-stat__value" }, pd = ["viewBox"], vd = ["d"], md = ["d"], hd = ["cx", "cy"], fd = {
  key: 1,
  class: "at-stat__foot"
}, pa = 220, et = 32, gd = /* @__PURE__ */ J({
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
  setup(s) {
    const e = s, n = A(() => {
      const a = e.spark;
      if (!a || a.length < 2) return null;
      const o = Math.min(...a), i = Math.max(...a), v = i - o || 1, d = a.map((k, V) => [2 + V * (pa - 4) / (a.length - 1), et - 3 - (k - o) / v * (et - 8)]), h = "M" + d.map((k) => k.map((V) => V.toFixed(1)).join(" ")).join(" L"), S = d[d.length - 1];
      return { line: h, area: `${h} L${S[0].toFixed(1)} ${et} L2 ${et} Z`, end: S };
    });
    return (a, o) => (t(), l("div", {
      class: W(["at-stat", a.color && ["at-stat--striped", `at-tone-${a.color}`]])
    }, [
      r("span", ud, m(a.label), 1),
      r("div", dd, [
        r("span", cd, [
          j(a.$slots, "value", {}, () => [
            b(m(a.value), 1)
          ])
        ]),
        a.delta ? (t(), l("span", {
          key: 0,
          class: W(["at-stat__delta", a.trend && `at-stat__delta--${a.trend}`])
        }, m(a.delta), 3)) : f("", !0)
      ]),
      n.value ? (t(), l("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${pa} ${et}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        r("path", {
          class: "area",
          d: n.value.area
        }, null, 8, vd),
        r("path", {
          class: "line",
          d: n.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, md),
        r("circle", {
          class: "end",
          cx: n.value.end[0],
          cy: n.value.end[1],
          r: "2.5"
        }, null, 8, hd)
      ], 8, pd)) : f("", !0),
      a.foot || a.$slots.foot ? (t(), l("span", fd, [
        j(a.$slots, "foot", {}, () => [
          b(m(a.foot), 1)
        ])
      ])) : f("", !0)
    ], 2));
  }
}), yd = ["aria-label"], bd = ["title", "aria-label", "onClick"], kd = {
  key: 0,
  class: "at-streak__foot"
}, _d = {
  key: 0,
  class: "at-streak__summary"
}, $d = {
  key: 1,
  class: "at-streak__legend"
}, wd = /* @__PURE__ */ J({
  __name: "AtStreak",
  props: {
    days: {},
    columns: { default: 10 },
    tone: { default: "success" },
    summary: {},
    legend: { type: Boolean, default: !0 },
    labels: { default: () => ["Rien", "Commencée", "Terminée"] }
  },
  emits: ["select"],
  setup(s, { emit: e }) {
    const n = s, a = e, o = /^\d{4}-\d{2}-\d{2}$/, i = (h) => h.label ?? (o.test(h.date) ? lt(h.date) : h.date), v = (h) => `${i(h)} : ${n.labels[h.level] ?? ""}`, d = A(() => ({ "--at-streak-columns": String(Math.max(1, Math.floor(n.columns) || 1)) }));
    return (h, S) => (t(), l("div", {
      class: W(["at-streak", h.tone === "accent" && "at-streak--accent"])
    }, [
      r("div", {
        class: "at-streak__grid",
        role: "group",
        "aria-label": h.summary || "Régularité",
        style: ue(d.value)
      }, [
        (t(!0), l(_, null, P(h.days, (k) => (t(), l("button", {
          key: k.date,
          type: "button",
          class: W(["at-streak__day", k.level > 0 && `at-streak__day--${k.level}`]),
          title: v(k),
          "aria-label": v(k),
          onClick: (V) => a("select", k.date)
        }, null, 10, bd))), 128))
      ], 12, yd),
      h.legend || h.summary ? (t(), l("div", kd, [
        h.summary ? (t(), l("p", _d, m(h.summary), 1)) : f("", !0),
        h.legend ? (t(), l("ul", $d, [
          (t(!0), l(_, null, P(h.labels, (k, V) => (t(), l("li", { key: V }, [
            r("span", {
              class: W(["at-streak__swatch", V > 0 && `at-streak__day--${V}`]),
              "aria-hidden": "true"
            }, null, 2),
            b(m(k), 1)
          ]))), 128))
        ])) : f("", !0)
      ])) : f("", !0)
    ], 2));
  }
}), Md = {
  key: 0,
  class: "at-toggle"
}, Cd = ["disabled"], Ad = ["disabled"], Sd = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "AtSwitch",
  props: /* @__PURE__ */ se({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = re(s, "modelValue");
    return (n, a) => n.label || n.$slots.default ? (t(), l("label", Md, [
      le(r("input", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: n.disabled
      }), null, 16, Cd), [
        [bt, e.value]
      ]),
      j(n.$slots, "default", {}, () => [
        b(m(n.label), 1)
      ])
    ])) : le((t(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": a[1] || (a[1] = (o) => e.value = o),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: n.disabled
    }), null, 16, Ad)), [
      [bt, e.value]
    ]);
  }
}), Vd = { class: "at-table-wrap" }, Td = { class: "at-table" }, Ld = ["onClick"], Dd = { key: 0 }, zd = ["colspan"], Ed = /* @__PURE__ */ J({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(s) {
    return (e, n) => (t(), l("div", Vd, [
      r("table", Td, [
        r("thead", null, [
          r("tr", null, [
            (t(!0), l(_, null, P(e.columns, (a) => (t(), l("th", {
              key: a.key,
              class: W({ "at-num": a.align === "right" }),
              style: ue(a.width ? { width: a.width } : void 0)
            }, m(a.label), 7))), 128))
          ])
        ]),
        r("tbody", null, [
          (t(!0), l(_, null, P(e.rows, (a, o) => (t(), l("tr", {
            key: e.rowKey ? a[e.rowKey] : o,
            style: ue(e.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (i) => e.$emit("rowClick", a)
          }, [
            (t(!0), l(_, null, P(e.columns, (i) => (t(), l("td", {
              key: i.key,
              class: W({ "at-num": i.align === "right" })
            }, [
              j(e.$slots, `cell-${i.key}`, {
                row: a,
                value: a[i.key]
              }, () => [
                b(m(i.format ? i.format(a[i.key], a) : a[i.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Ld))), 128)),
          e.rows.length ? f("", !0) : (t(), l("tr", Dd, [
            r("td", {
              colspan: e.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, m(e.empty ?? "Aucune donnée"), 9, zd)
          ]))
        ])
      ])
    ]));
  }
}), Od = ["aria-label"], Bd = ["aria-selected", "disabled", "onClick"], Id = {
  key: 1,
  class: "at-count"
}, Qd = /* @__PURE__ */ J({
  __name: "AtTabs",
  props: /* @__PURE__ */ se({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = re(s, "modelValue");
    return (n, a) => (t(), l("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": n.label
    }, [
      (t(!0), l(_, null, P(n.items, (o) => (t(), l("button", {
        key: String(o.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": e.value === o.value,
        disabled: o.disabled,
        onClick: (i) => e.value = o.value
      }, [
        o.icon ? (t(), G(x, {
          key: 0,
          name: o.icon
        }, null, 8, ["name"])) : f("", !0),
        b(m(o.label) + " ", 1),
        o.count != null ? (t(), l("span", Id, m(o.count), 1)) : f("", !0)
      ], 8, Bd))), 128))
    ], 8, Od));
  }
}), xd = /* @__PURE__ */ J({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: W(["at-tag", e.color !== "gray" && `at-tag--${e.color}`])
    }, [
      j(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ])
    ], 2));
  }
}), Fd = ["rows", "placeholder", "disabled", "aria-invalid"], Pd = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "AtTextarea",
  props: /* @__PURE__ */ se({
    placeholder: {},
    rows: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = re(s, "modelValue");
    return (n, a) => le((t(), l("textarea", ye(n.$attrs, {
      "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
      class: "at-input",
      rows: n.rows ?? 3,
      placeholder: n.placeholder,
      disabled: n.disabled,
      "aria-invalid": n.invalid || void 0
    }), null, 16, Fd)), [
      [Ae, e.value]
    ]);
  }
}), Ud = ["aria-pressed", "aria-label"], Nd = {
  class: "at-timer__ring",
  viewBox: "0 0 20 20",
  "aria-hidden": "true"
}, Hd = ["stroke-dashoffset", "opacity"], qd = { class: "at-timer__text" }, Ft = 8, Kd = /* @__PURE__ */ J({
  __name: "AtTimer",
  props: {
    seconds: {},
    target: { default: null },
    size: { default: "sm" },
    paused: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(s, { emit: e }) {
    const n = s, a = e, o = 2 * Math.PI * Ft, i = A(() => n.target != null && n.target > 0), v = A(() => i.value && n.seconds > n.target), d = A(() => {
      const V = Math.max(0, n.seconds || 0);
      return i.value ? Math.min(1, V / n.target) : Math.floor(V) % 60 / 60;
    }), h = A(() => o * (1 - d.value)), S = A(() => {
      const V = Ne(n.seconds);
      return n.paused ? `En pause · ${V}` : i.value ? v.value ? `+${Ne(n.seconds - n.target)}` : `${V} / ${Ne(n.target)}` : V;
    }), k = A(() => {
      let z = `${Ne(n.seconds)} écoulées`;
      return i.value && (z += ` sur ${Ne(n.target)} prévues`), v.value && (z += `, ${Ne(n.seconds - n.target)} de plus`), `Pause du minuteur (${z})`;
    });
    return (V, z) => (t(), l("button", {
      type: "button",
      class: W(["at-timer", V.size === "md" && "at-timer--md", v.value && "at-timer--over", V.paused && "at-timer--paused"]),
      "aria-pressed": V.paused,
      "aria-label": k.value,
      onClick: z[0] || (z[0] = (T) => a("toggle"))
    }, [
      (t(), l("svg", Nd, [
        r("circle", {
          class: "at-timer__track",
          cx: "10",
          cy: "10",
          r: Ft,
          fill: "none",
          "stroke-width": "2.5"
        }),
        r("circle", {
          class: "at-timer__val",
          cx: "10",
          cy: "10",
          r: Ft,
          fill: "none",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-dasharray": o,
          "stroke-dashoffset": h.value,
          opacity: d.value > 0 ? 1 : 0
        }, null, 8, Hd)
      ])),
      r("span", qd, m(S.value), 1)
    ], 10, Ud));
  }
}), La = 3, Qe = un([]), st = /* @__PURE__ */ new Map();
let Rd = 0, ot = !1;
function jd(s) {
  const e = st.get(s);
  !e || e.handle || ot || (e.started = Date.now(), e.handle = setTimeout(() => Ct(s), e.remaining));
}
function Yt() {
  Qe.slice(0, La).forEach((s) => jd(s.id));
}
function Gd(s) {
  const e = ++Rd, n = s.duration ?? 5e3;
  return Qe.push({ id: e, message: s.message, tone: s.tone ?? "neutral", action: s.action, duration: n }), n > 0 && st.set(e, { handle: null, remaining: n, started: 0 }), Yt(), e;
}
function Ct(s) {
  const e = s == null ? Qe.map((n) => n.id) : [s];
  for (const n of e) {
    const a = st.get(n);
    a != null && a.handle && clearTimeout(a.handle), st.delete(n);
    const o = Qe.findIndex((i) => i.id === n);
    o >= 0 && Qe.splice(o, 1);
  }
  Yt();
}
function Wd() {
  if (!ot) {
    ot = !0;
    for (const s of st.values())
      s.handle && (clearTimeout(s.handle), s.handle = null, s.remaining = Math.max(0, s.remaining - (Date.now() - s.started)));
  }
}
function Yd() {
  ot && (ot = !1, Yt());
}
function Jd(s) {
  var n;
  const e = Qe.find((a) => a.id === s);
  Ct(s), (n = e == null ? void 0 : e.action) == null || n.onClick();
}
function gc() {
  return { toast: Gd, dismiss: Ct };
}
const Ee = { items: rn(Qe), pause: Wd, resume: Yd, runAction: Jd, dismiss: Ct }, Zd = ["role", "aria-live"], Xd = { class: "at-toast__msg" }, ec = /* @__PURE__ */ J({
  __name: "AtToaster",
  setup(s) {
    const e = A(() => Ee.items.slice(0, La)), n = { success: "check", danger: "alert", warning: "alert", info: "info" };
    function a(o) {
      o.currentTarget.contains(o.relatedTarget) || Ee.resume();
    }
    return (o, i) => (t(), G(wt, { to: "body" }, [
      r("section", {
        class: "at-toaster",
        "aria-label": "Notifications",
        "aria-live": "polite",
        "aria-relevant": "additions",
        onMouseenter: i[0] || (i[0] = (v) => L(Ee).pause()),
        onMouseleave: i[1] || (i[1] = (v) => L(Ee).resume()),
        onFocusin: i[2] || (i[2] = (v) => L(Ee).pause()),
        onFocusout: a
      }, [
        g(dn, { name: "at-toast" }, {
          default: U(() => [
            (t(!0), l(_, null, P(e.value, (v) => (t(), l("div", {
              key: v.id,
              class: W(["at-toast", v.tone !== "neutral" && `at-toast--${v.tone}`]),
              role: v.tone === "danger" ? "alert" : "status",
              "aria-live": v.tone === "danger" ? "assertive" : void 0
            }, [
              n[v.tone] ? (t(), G(x, {
                key: 0,
                name: n[v.tone],
                class: "at-toast__icon"
              }, null, 8, ["name"])) : f("", !0),
              r("span", Xd, m(v.message), 1),
              v.action ? (t(), G(te, {
                key: 1,
                variant: "ghost",
                size: "sm",
                class: "at-toast__action",
                onClick: (d) => L(Ee).runAction(v.id)
              }, {
                default: U(() => [
                  b(m(v.action.label), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : f("", !0),
              g(te, {
                variant: "ghost",
                size: "sm",
                icon: "x",
                "icon-only": "",
                label: "Fermer",
                onClick: (d) => L(Ee).dismiss(v.id)
              }, null, 8, ["onClick"])
            ], 10, Zd))), 128))
          ]),
          _: 1
        })
      ], 32)
    ]));
  }
}), Da = "atelier:theme", za = "atelier:density", Ea = (s) => {
  try {
    return localStorage.getItem(s);
  } catch {
    return null;
  }
}, va = (s, e) => {
  try {
    localStorage.setItem(s, e);
  } catch {
  }
}, ma = () => typeof document < "u" ? document.documentElement : null, tt = K(Ea(Da) || "system"), Oa = K(Ea(za) || "comfortable"), Ba = K(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let ha = !1;
function Ia() {
  if (ha || typeof window > "u") return;
  ha = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    Ba.value = e.matches;
  }), ke(tt, (e) => {
    const n = ma();
    n && (e === "system" ? n.removeAttribute("data-theme") : n.dataset.theme = e, va(Da, e));
  }, { immediate: !0 }), ke(Oa, (e) => {
    const n = ma();
    n && (n.dataset.density = e, va(za, e));
  }, { immediate: !0 });
}
function tc() {
  Ia();
  const s = A(() => tt.value === "system" ? Ba.value ? "dark" : "light" : tt.value), e = () => {
    tt.value = s.value === "dark" ? "light" : "dark";
  };
  return cn() && pn(() => {
  }), { mode: tt, resolved: s, toggle: e };
}
function ac() {
  return Ia(), { density: Oa };
}
const nc = ["aria-expanded", "aria-label", "onClick"], lc = { class: "at-user__text" }, sc = { class: "at-user__name" }, oc = {
  key: 0,
  class: "at-user__sub"
}, rc = /* @__PURE__ */ J({
  __name: "AtUserMenu",
  props: {
    name: {},
    email: {},
    src: {},
    theme: { type: Boolean, default: !0 },
    density: { type: Boolean, default: !0 }
  },
  emits: ["profile", "settings", "logout"],
  setup(s) {
    var d;
    const e = ((d = ga()) == null ? void 0 : d.vnode.props) ?? {}, n = (h) => typeof e[h] == "function" || Array.isArray(e[h]), { mode: a } = tc(), { density: o } = ac(), i = [
      { value: "system", label: "Système", icon: "monitor" },
      { value: "light", label: "Clair", icon: "sun" },
      { value: "dark", label: "Sombre", icon: "moon" }
    ], v = [
      { value: "comfortable", label: "Confortable", icon: "list" },
      { value: "compact", label: "Compacte", icon: "menu" }
    ];
    return (h, S) => (t(), G(Va, {
      placement: "right",
      "min-width": 232
    }, {
      trigger: U(({ toggle: k, open: V }) => [
        r("button", {
          type: "button",
          class: "at-user",
          "aria-haspopup": "menu",
          "aria-expanded": V,
          "aria-label": `Compte de ${h.name}`,
          onClick: k
        }, [
          g(Ke, {
            name: h.name,
            src: h.src,
            size: "md",
            tone: "accent"
          }, null, 8, ["name", "src"]),
          r("span", lc, [
            r("span", sc, m(h.name), 1),
            h.email ? (t(), l("span", oc, m(h.email), 1)) : f("", !0)
          ]),
          g(x, { name: "chevron-right" })
        ], 8, nc)
      ]),
      default: U(() => [
        n("onProfile") || n("onSettings") || h.$slots.default ? (t(), l(_, { key: 0 }, [
          n("onProfile") ? (t(), G(qe, {
            key: 0,
            icon: "person",
            onSelect: S[0] || (S[0] = (k) => h.$emit("profile"))
          }, {
            default: U(() => [
              b("Mon profil")
            ]),
            _: 1
          })) : f("", !0),
          n("onSettings") ? (t(), G(qe, {
            key: 1,
            icon: "settings",
            onSelect: S[1] || (S[1] = (k) => h.$emit("settings"))
          }, {
            default: U(() => [
              b("Paramètres")
            ]),
            _: 1
          })) : f("", !0),
          j(h.$slots, "default"),
          h.theme || h.density || n("onLogout") ? (t(), G(yt, { key: 2 })) : f("", !0)
        ], 64)) : f("", !0),
        h.theme ? (t(), l(_, { key: 1 }, [
          g(jt, null, {
            default: U(() => [
              b("Thème")
            ]),
            _: 1
          }),
          (t(), l(_, null, P(i, (k) => g(qe, {
            key: k.value,
            icon: k.icon,
            checked: L(a) === k.value,
            onSelect: (V) => a.value = k.value
          }, {
            default: U(() => [
              b(m(k.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : f("", !0),
        h.theme && h.density ? (t(), G(yt, { key: 2 })) : f("", !0),
        h.density ? (t(), l(_, { key: 3 }, [
          g(jt, null, {
            default: U(() => [
              b("Densité")
            ]),
            _: 1
          }),
          (t(), l(_, null, P(v, (k) => g(qe, {
            key: k.value,
            icon: k.icon,
            checked: L(o) === k.value,
            onSelect: (V) => o.value = k.value
          }, {
            default: U(() => [
              b(m(k.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : f("", !0),
        n("onLogout") ? (t(), l(_, { key: 4 }, [
          h.theme || h.density ? (t(), G(yt, { key: 0 })) : f("", !0),
          g(qe, {
            icon: "logout",
            onSelect: S[2] || (S[2] = (k) => h.$emit("logout"))
          }, {
            default: U(() => [
              b("Se déconnecter")
            ]),
            _: 1
          })
        ], 64)) : f("", !0)
      ]),
      _: 3
    }));
  }
}), yc = {
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
}, ic = (s) => `var(--${s})`, bc = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(ic), uc = {
  AtAppShell: kn,
  AtAvatar: Ke,
  AtBadge: wn,
  AtBreadcrumbs: Vn,
  AtButton: te,
  AtCard: En,
  AtCheckbox: ka,
  AtChecklist: cl,
  AtComments: rs,
  AtDataView: Vi,
  AtDrawer: Bi,
  AtDropdown: Va,
  AtEmpty: Fi,
  AtField: qt,
  AtIcon: x,
  AtIconTile: Ta,
  AtInput: Kt,
  AtKbd: Le,
  AtList: Ji,
  AtLogo: lu,
  AtLogin: hu,
  AtMenu: Sa,
  AtMenuItem: qe,
  AtMenuLabel: jt,
  AtMenuSeparator: yt,
  AtModal: zu,
  AtNavGroup: xu,
  AtNavItem: Nu,
  AtPage: Ru,
  AtPopover: $e,
  AtProgress: Aa,
  AtPropertyEditor: Wt,
  AtPropertyList: Wu,
  AtPropertyValue: Ce,
  AtSegment: Zu,
  AtSelect: nd,
  AtSidebar: id,
  AtStat: gd,
  AtStreak: wd,
  AtSwitch: Sd,
  AtTable: Ed,
  AtTabs: Qd,
  AtTag: xd,
  AtTextarea: Pd,
  AtTimer: Kd,
  AtToaster: ec,
  AtUserMenu: rc
}, kc = {
  install(s) {
    for (const [e, n] of Object.entries(uc)) s.component(e, n);
  }
};
export {
  kn as AtAppShell,
  Ke as AtAvatar,
  wn as AtBadge,
  Vn as AtBreadcrumbs,
  te as AtButton,
  En as AtCard,
  ka as AtCheckbox,
  cl as AtChecklist,
  rs as AtComments,
  Vi as AtDataView,
  Bi as AtDrawer,
  Va as AtDropdown,
  Fi as AtEmpty,
  qt as AtField,
  x as AtIcon,
  Ta as AtIconTile,
  Kt as AtInput,
  Le as AtKbd,
  Ji as AtList,
  hu as AtLogin,
  lu as AtLogo,
  Sa as AtMenu,
  qe as AtMenuItem,
  jt as AtMenuLabel,
  yt as AtMenuSeparator,
  zu as AtModal,
  xu as AtNavGroup,
  Nu as AtNavItem,
  Ru as AtPage,
  $e as AtPopover,
  Aa as AtProgress,
  Wt as AtPropertyEditor,
  Wu as AtPropertyList,
  Ce as AtPropertyValue,
  Zu as AtSegment,
  nd as AtSelect,
  id as AtSidebar,
  gd as AtStat,
  wd as AtStreak,
  Sd as AtSwitch,
  Ed as AtTable,
  Qd as AtTabs,
  xd as AtTag,
  Pd as AtTextarea,
  Kd as AtTimer,
  ec as AtToaster,
  rc as AtUserMenu,
  kc as Atelier,
  ft as LAYOUTS,
  Zi as LOGO_TILE,
  Nt as ME,
  kt as NONE,
  It as OPS,
  ia as OP_LABEL,
  Ut as SHORTCUT_LAYERS,
  Qt as TAG_ROTATION,
  La as TOAST_VISIBLE,
  fc as WORDMARK,
  _t as addDays,
  Cl as applyView,
  xt as brandGrid,
  El as canCreate,
  bc as chartColors,
  Ml as compareRows,
  da as createView,
  ic as cssVar,
  kc as default,
  Vl as defaultsFromFilters,
  vc as filter,
  $t as findOption,
  lt as formatDate,
  Ne as formatDuration,
  Dl as formatMonth,
  gl as formatRelative,
  pc as formatShortcut,
  he as getValue,
  Al as groupRows,
  ba as icons,
  be as isEmpty,
  Rt as logoApps,
  zl as matchOptions,
  wl as matchRule,
  xn as matchShortcut,
  bl as mentionAt,
  Sl as monthGrid,
  kl as nextMonday,
  Ol as nextTagColor,
  Se as normalize,
  je as optionsOf,
  $a as parseShortcut,
  cc as registerIcons,
  hc as registerLogoApps,
  Ma as resolveValue,
  ua as shiftMonth,
  mc as sort,
  Re as splitMatch,
  yl as splitMentions,
  Be as today,
  yc as tokens,
  Ie as uid,
  ac as useDensity,
  We as useId,
  Bt as useShortcut,
  tc as useTheme,
  gc as useToast
};
//# sourceMappingURL=atelier.js.map

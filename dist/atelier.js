import { defineComponent as G, computed as V, openBlock as t, createElementBlock as l, normalizeStyle as ce, normalizeClass as R, createBlock as q, createCommentVNode as h, renderSlot as K, createTextVNode as b, toDisplayString as m, ref as N, watch as we, createElementVNode as i, createVNode as f, Fragment as w, renderList as x, resolveDynamicComponent as ma, withCtx as B, useModel as ie, withDirectives as ee, mergeProps as ye, vModelCheckbox as gt, mergeModels as le, onMounted as en, onBeforeUnmount as lt, unref as A, vModelText as Ce, withModifiers as re, nextTick as Le, Teleport as wt, withKeys as ta, vModelDynamic as xt, shallowRef as tn, isRef as Pe, vModelSelect as Ne, Transition as ha, normalizeProps as an, guardReactiveProps as nn, getCurrentInstance as fa, vShow as ln, readonly as sn, reactive as on, TransitionGroup as rn, getCurrentScope as un, onScopeDispose as dn } from "vue";
const ga = {
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
function Vd(s) {
  Object.assign(ga, s);
}
const cn = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], O = /* @__PURE__ */ G({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(s) {
    const e = s, n = V(() => ga[e.name] ?? "");
    return (a, o) => (t(), l("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: a.size,
      height: a.size,
      style: ce(a.size !== 16 ? { width: a.size + "px", height: a.size + "px" } : void 0),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true",
      innerHTML: n.value
    }, null, 12, cn));
  }
}), pn = ["href", "aria-label"], vn = ["type", "disabled", "aria-busy", "aria-label"], mn = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, J = /* @__PURE__ */ G({
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
    const e = s, n = V(() => [
      "at-btn",
      `at-btn--${e.variant}`,
      e.size !== "md" && `at-btn--${e.size}`,
      e.iconOnly && "at-btn--icon"
    ]);
    return (a, o) => a.href && !a.disabled ? (t(), l("a", {
      key: 0,
      href: a.href,
      class: R(n.value),
      "aria-label": a.iconOnly ? a.label : void 0
    }, [
      a.icon ? (t(), q(O, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      K(a.$slots, "default", {}, () => [
        b(m(a.iconOnly ? "" : a.label), 1)
      ])
    ], 10, pn)) : (t(), l("button", {
      key: 1,
      type: a.type,
      class: R(n.value),
      disabled: a.disabled || a.loading,
      "aria-busy": a.loading || void 0,
      "aria-label": a.iconOnly ? a.label : void 0
    }, [
      a.loading ? (t(), l("span", mn)) : a.icon ? (t(), q(O, {
        key: 1,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      a.iconOnly ? h("", !0) : K(a.$slots, "default", { key: 2 }, () => [
        b(m(a.label), 1)
      ])
    ], 10, vn));
  }
}), hn = { class: "at-shell__side" }, fn = { class: "at-shell__main" }, gn = { class: "at-topbar" }, yn = /* @__PURE__ */ G({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(s, { expose: e }) {
    const n = s, a = N(!1), o = N();
    return we(() => n.routeKey, () => {
      a.value = !1, o.value && (o.value.scrollTop = 0);
    }), e({ closeNav: () => a.value = !1 }), (u, v) => (t(), l("div", {
      class: R(["at-shell", a.value && "at-shell--open"])
    }, [
      i("div", hn, [
        K(u.$slots, "sidebar")
      ]),
      i("div", {
        class: "at-shell__scrim",
        onClick: v[0] || (v[0] = (c) => a.value = !1)
      }),
      i("div", fn, [
        i("header", gn, [
          f(J, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: v[1] || (v[1] = (c) => a.value = !a.value)
          }),
          K(u.$slots, "topbar")
        ]),
        i("main", {
          ref_key: "page",
          ref: o,
          class: "at-shell__page"
        }, [
          K(u.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), bn = ["title"], kn = ["src", "alt"], qe = /* @__PURE__ */ G({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" },
    tone: { default: "neutral" }
  },
  setup(s) {
    const e = s, n = V(() => e.name.split(/\s+/).filter(Boolean).map((a) => a[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (a, o) => (t(), l("span", {
      class: R(["at-avatar", a.size !== "sm" && `at-avatar--${a.size}`, a.tone === "accent" && "at-avatar--accent"]),
      title: a.name
    }, [
      a.src ? (t(), l("img", {
        key: 0,
        src: a.src,
        alt: a.name
      }, null, 8, kn)) : (t(), l(w, { key: 1 }, [
        b(m(n.value), 1)
      ], 64))
    ], 10, bn));
  }
}), _n = /* @__PURE__ */ G({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: R(["at-badge", e.tone !== "neutral" && `at-badge--${e.tone}`])
    }, [
      K(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ])
    ], 2));
  }
}), wn = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, $n = {
  key: 0,
  "aria-hidden": "true"
}, Mn = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, An = ["href", "onClick"], Cn = /* @__PURE__ */ G({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(s) {
    return (e, n) => (t(), l("nav", wn, [
      (t(!0), l(w, null, x(e.items, (a, o) => (t(), l(w, { key: o }, [
        o > 0 ? (t(), l("span", $n, "/")) : h("", !0),
        o === e.items.length - 1 ? (t(), l("span", Mn, m(a.label), 1)) : (t(), l("a", {
          key: 2,
          href: a.href ?? "#",
          onClick: (u) => a.onClick && (u.preventDefault(), a.onClick())
        }, m(a.label), 9, An))
      ], 64))), 128))
    ]));
  }
}), Sn = {
  key: 0,
  class: "at-card__head"
}, Vn = {
  key: 0,
  class: "at-card__title"
}, Tn = {
  key: 1,
  class: "at-card__desc"
}, Ln = {
  key: 1,
  class: "at-card__foot"
}, Dn = /* @__PURE__ */ G({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(s) {
    return (e, n) => (t(), q(ma(e.href ? "a" : e.as || "section"), {
      href: e.href,
      class: R(["at-card", e.href && "at-card--link", e.color && ["at-card--striped", `at-tone-${e.color}`]])
    }, {
      default: B(() => [
        e.title || e.description || e.$slots.actions ? (t(), l("div", Sn, [
          i("div", null, [
            e.title ? (t(), l("h3", Vn, m(e.title), 1)) : h("", !0),
            e.description ? (t(), l("p", Tn, m(e.description), 1)) : h("", !0)
          ]),
          K(e.$slots, "actions")
        ])) : h("", !0),
        K(e.$slots, "default"),
        e.$slots.footer ? (t(), l("div", Ln, [
          K(e.$slots, "footer")
        ])) : h("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), zn = {
  key: 0,
  class: "at-toggle"
}, En = ["indeterminate", "disabled"], On = ["indeterminate", "disabled"], ya = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "AtCheckbox",
  props: /* @__PURE__ */ le({
    label: {},
    indeterminate: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = ie(s, "modelValue");
    return (n, a) => n.label || n.$slots.default ? (t(), l("label", zn, [
      ee(i("input", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
        type: "checkbox",
        class: "at-check",
        indeterminate: n.indeterminate,
        disabled: n.disabled
      }), null, 16, En), [
        [gt, e.value]
      ]),
      K(n.$slots, "default", {}, () => [
        b(m(n.label), 1)
      ])
    ])) : ee((t(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": a[1] || (a[1] = (o) => e.value = o),
      type: "checkbox",
      class: "at-check",
      indeterminate: n.indeterminate,
      disabled: n.disabled
    }), null, 16, On)), [
      [gt, e.value]
    ]);
  }
}), $t = (s, e) => {
  const n = s.__vccOpts || s;
  for (const [a, o] of e)
    n[a] = o;
  return n;
}, Bn = {}, Qn = { class: "at-kbd" };
function In(s, e) {
  return t(), l("kbd", Qn, [
    K(s.$slots, "default")
  ]);
}
const Te = /* @__PURE__ */ $t(Bn, [["render", In]]), xn = (s) => String(s).padStart(2, "0"), Fn = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], aa = (s) => new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
function Un(s, e = /* @__PURE__ */ new Date()) {
  const n = new Date(s);
  if (isNaN(n.getTime())) return "";
  const a = Math.round((e.getTime() - n.getTime()) / 1e3), o = `${n.getHours()}:${xn(n.getMinutes())}`;
  if (a < 45) return "à l’instant";
  if (a < 3600) return `il y a ${Math.max(1, Math.round(a / 60))} min`;
  const u = Math.round((aa(e) - aa(n)) / 864e5);
  if (u === 0) return `il y a ${Math.round(a / 3600)} h`;
  if (u === 1) return `hier à ${o}`;
  const v = `${n.getDate()} ${Fn[n.getMonth()]}`;
  return n.getFullYear() === e.getFullYear() ? `${v} à ${o}` : `${v} ${n.getFullYear()}`;
}
function Pn(s, e) {
  const n = [...e].filter(Boolean).sort((c, g) => g.length - c.length);
  if (!n.length) return [{ text: s }];
  const a = (c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), o = new RegExp(`@(?:${n.map(a).join("|")})(?![\\p{L}\\p{N}])`, "gu"), u = [];
  let v = 0;
  for (const c of s.matchAll(o))
    c.index > v && u.push({ text: s.slice(v, c.index) }), u.push({ text: c[0], mention: !0 }), v = c.index + c[0].length;
  return v < s.length && u.push({ text: s.slice(v) }), u;
}
function Nn(s, e) {
  const n = /(^|\s)@([\p{L}\p{N}-]*)$/u.exec(s.slice(0, e));
  return n ? { start: e - n[2].length - 1, query: n[2] } : null;
}
const yt = "__none", Ft = "@me", Ut = (s) => String(s).padStart(2, "0"), Kt = (s) => `${s.getFullYear()}-${Ut(s.getMonth() + 1)}-${Ut(s.getDate())}`, Oe = () => Kt(/* @__PURE__ */ new Date()), bt = (s, e) => {
  const n = /* @__PURE__ */ new Date(s + "T00:00");
  return n.setDate(n.getDate() + e), Kt(n);
}, Hn = (s = Oe()) => {
  const e = ((/* @__PURE__ */ new Date(s + "T00:00")).getDay() + 6) % 7;
  return bt(s, 7 - e);
}, Be = () => Math.random().toString(36).slice(2, 10), be = (s) => s == null || s === "" || Array.isArray(s) && s.length === 0, he = (s, e) => e.compute ? e.compute(s) : s[e.key], Re = (s, e) => typeof s.options == "function" ? s.options(e) : s.options ?? [], kt = (s, e, n) => Re(s, e).find((a) => a.value === n), et = (s) => !s.compute && !s.readonly && s.type !== "progress", qn = ["status", "select", "relation", "person"], tt = (s) => qn.includes(s.type), Kn = {
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
}, ht = (s) => s.icon ?? Kn[s.type] ?? "text", vt = [
  { value: "table", label: "Tableau", icon: "table" },
  { value: "board", label: "Board", icon: "board" },
  { value: "list", label: "Liste", icon: "list" },
  { value: "calendar", label: "Calendrier", icon: "calendar" }
], Ot = {
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
}, na = {
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
}, ba = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function ka(s, e = {}) {
  return s === Ft ? e.me || void 0 : s;
}
function Rn(s, e, n, a = Oe(), o = {}) {
  const u = he(s, e);
  if (!ba.includes(n.op) && be(n.value)) return !0;
  const v = ka(n.value, o);
  if (v === void 0) return !1;
  const c = { ...n, value: v }, g = (L) => String(L ?? "").toLowerCase();
  switch (c.op) {
    case "empty":
      return be(u);
    case "notempty":
      return !be(u);
    case "contains":
      return e.type === "multi" ? (u ?? []).includes(c.value) : g(u).includes(g(c.value));
    case "notcontains":
      return e.type === "multi" ? !(u ?? []).includes(c.value) : !g(u).includes(g(c.value));
    case "is":
      return u === c.value;
    case "isnot":
      return u !== c.value;
    case "before":
      return !!u && u < c.value;
    case "after":
      return !!u && u > c.value;
    case "past":
      return !!u && u < a;
    case "week":
      return !!u && u >= a && u <= bt(a, 7);
    case "eq":
      return Number(u) === Number(c.value);
    case "gt":
      return Number(u) > Number(c.value);
    case "lt":
      return Number(u) < Number(c.value);
    case "checked":
      return !!u;
    case "unchecked":
      return !u;
  }
  return !0;
}
function jn(s, e, n) {
  const a = he(e, s), o = he(n, s), u = be(a), v = be(o);
  if (u || v) return u === v ? 0 : u ? 1 : -1;
  if (tt(s)) {
    const c = Re(s).map((g) => g.value);
    return c.indexOf(a) - c.indexOf(o);
  }
  return s.type === "number" || s.type === "progress" ? a - o : s.type === "checkbox" ? Number(o) - Number(a) : s.type === "multi" ? a.length - o.length : String(a).localeCompare(String(o), "fr");
}
function Gn(s, e, n, a = "", o = {}) {
  const u = Object.fromEntries(e.map(($) => [$.key, $])), v = e.find(($) => $.type === "title"), c = a.trim().toLowerCase(), g = s.filter(($) => (!c || !v || String($[v.key] ?? "").toLowerCase().includes(c)) && n.filters.every((F) => !u[F.prop] || Rn($, u[F.prop], F, Oe(), o))), L = n.sorts.filter(($) => u[$.prop]);
  return L.length ? g.sort(($, F) => {
    for (const E of L) {
      const S = u[E.prop], y = be(he($, S)), U = be(he(F, S));
      if (y !== U) return y ? 1 : -1;
      if (y) continue;
      const Z = jn(S, $, F);
      if (Z) return E.dir === "desc" ? -Z : Z;
    }
    return 0;
  }) : g;
}
function Wn(s, e, n = !1) {
  if (!e) return [{ key: yt, option: null, rows: s }];
  const a = Re(e).map((v) => ({ key: v.value, option: v, rows: [] })), o = { key: yt, option: null, rows: [] }, u = Object.fromEntries(a.map((v) => [v.key, v]));
  for (const v of s) (u[he(v, e)] ?? o).rows.push(v);
  return (o.rows.length || n) && a.push(o), n ? a : a.filter((v) => v.rows.length);
}
function Yn(s) {
  const [e, n] = s.split("-").map(Number), o = (new Date(e, n - 1, 1).getDay() + 6) % 7, u = [];
  for (let v = 0; v < 42; v++) {
    const c = new Date(e, n - 1, 1 - o + v);
    u.push({ iso: Kt(c), day: c.getDate(), outside: c.getMonth() !== n - 1 });
  }
  return u[35].outside ? u.slice(0, 35) : u;
}
const la = (s, e) => {
  const [n, a] = s.split("-").map(Number), o = new Date(n, a - 1 + e, 1);
  return `${o.getFullYear()}-${Ut(o.getMonth() + 1)}`;
};
function sa(s, e = "table", n = {}) {
  return { id: Be(), name: s, layout: e, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...n };
}
const Td = (s, e, n = "") => ({ id: Be(), prop: s, op: e, value: n }), Ld = (s, e = "asc") => ({ id: Be(), prop: s, dir: e });
function Jn(s, e, n = {}) {
  const a = {};
  for (const o of s.filters) {
    const u = e.find((c) => c.key === o.prop);
    if (!u || !et(u) || be(o.value)) continue;
    const v = ka(o.value, n);
    v !== void 0 && (o.op === "is" && (a[o.prop] = v), o.op === "contains" && u.type === "multi" && (a[o.prop] = [v]));
  }
  return a;
}
const Zn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), Xn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), _a = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function _t(s) {
  if (!s) return "";
  const e = /* @__PURE__ */ new Date(s + "T00:00");
  return (e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? Zn : Xn).format(e);
}
const el = (s) => {
  const [e, n] = s.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(e, n - 1, 1));
}, Se = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim(), tl = (s, e, n = []) => {
  const a = Se(e);
  return s.filter((o) => !n.includes(o.value) && (!a || Se(o.label).includes(a)));
}, al = (s, e) => !!Se(e) && !s.some((n) => Se(n.label) === Se(e)), Bt = ["green", "yellow", "pink", "brown", "red", "blue", "purple", "orange", "gray"], nl = (s) => Bt.find((e) => !s.some((n) => n.color === e)) ?? Bt[s.length % Bt.length], Ke = (s, e) => {
  const n = Se(e), a = n ? Se(s).indexOf(n) : -1;
  return a < 0 ? [s, "", ""] : [s.slice(0, a), s.slice(a, a + n.length), s.slice(a + n.length)];
};
let oa = 0;
function je(s = "at") {
  return oa += 1, `${s}-${oa}`;
}
const ll = ["aria-label"], sl = {
  key: 0,
  class: "at-comments__head"
}, ol = { class: "at-label" }, rl = {
  key: 1,
  class: "at-comments__list"
}, il = {
  key: 0,
  class: "at-event"
}, ul = ["datetime", "title"], dl = {
  key: 1,
  class: "at-comment"
}, cl = { class: "at-comment__meta" }, pl = ["datetime", "title"], vl = ["title"], ml = {
  key: 1,
  class: "at-comment__actions"
}, hl = {
  key: 0,
  class: "at-comment__edit"
}, fl = ["id", "onKeydown"], gl = { class: "at-composer__foot" }, yl = { class: "at-composer__hint" }, bl = {
  key: 1,
  class: "at-comment__body"
}, kl = {
  key: 0,
  class: "at-mention"
}, _l = {
  key: 2,
  class: "at-comments__empty"
}, wl = { class: "at-composer" }, $l = { class: "at-composer__box" }, Ml = ["placeholder", "aria-expanded", "aria-controls", "aria-activedescendant"], Al = { class: "at-composer__foot" }, Cl = { class: "at-composer__hint" }, Sl = ["id"], Vl = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Mentionner", -1), Tl = ["id", "aria-selected", "onMousedown", "onMousemove"], Ll = /* @__PURE__ */ G({
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
    const n = s, a = e, o = N(/* @__PURE__ */ new Date());
    let u;
    en(() => {
      u = setInterval(() => {
        o.value = /* @__PURE__ */ new Date();
      }, 6e4);
    }), lt(() => clearInterval(u));
    const v = (M) => Un(M, o.value), c = (M) => new Date(M).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" }), g = V(() => [...n.items].sort((M, Q) => M.at.localeCompare(Q.at))), L = (M) => Pn(M, n.people), $ = typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl", F = N(""), E = N(), S = je("at-mention"), y = N(null), U = N(0), Z = V(() => {
      const M = y.value;
      if (!M) return [];
      const Q = Se(M.query);
      return n.people.filter((P) => Se(P).includes(Q)).slice(0, 6);
    });
    function D() {
      const M = E.value;
      y.value = M && n.people.length ? Nn(M.value, M.selectionStart ?? M.value.length) : null, U.value = 0;
    }
    function I(M) {
      const Q = E.value, P = y.value;
      if (!Q || !P) return;
      const j = Q.selectionStart ?? F.value.length, ue = F.value.slice(0, P.start) + "@" + M + " ";
      F.value = ue + F.value.slice(j), y.value = null, Le(() => {
        Q.focus(), Q.setSelectionRange(ue.length, ue.length);
      });
    }
    function H() {
      const M = F.value.trim();
      M && (a("post", M), F.value = "", y.value = null);
    }
    function W(M) {
      const Q = Z.value;
      if (y.value && Q.length) {
        if (M.key === "ArrowDown") {
          M.preventDefault(), U.value = (U.value + 1) % Q.length;
          return;
        }
        if (M.key === "ArrowUp") {
          M.preventDefault(), U.value = (U.value - 1 + Q.length) % Q.length;
          return;
        }
        if (M.key === "Enter" && !M.metaKey && !M.ctrlKey || M.key === "Tab") {
          M.preventDefault(), I(Q[U.value]);
          return;
        }
        if (M.key === "Escape") {
          M.preventDefault(), M.stopPropagation(), y.value = null;
          return;
        }
      }
      M.key === "Enter" && (M.metaKey || M.ctrlKey) && (M.preventDefault(), H());
    }
    const X = N(null), te = N("");
    function se(M) {
      X.value = M.id, te.value = M.text, Le(() => {
        const Q = document.getElementById(`${S}-edit`);
        Q == null || Q.focus(), Q == null || Q.setSelectionRange(Q.value.length, Q.value.length);
      });
    }
    function ne(M) {
      const Q = te.value.trim();
      Q && Q !== M.text && a("edit", M, Q), X.value = null;
    }
    function oe(M, Q) {
      M.key === "Enter" && (M.metaKey || M.ctrlKey) ? (M.preventDefault(), ne(Q)) : M.key === "Escape" && (M.preventDefault(), M.stopPropagation(), X.value = null);
    }
    return (M, Q) => (t(), l("section", {
      class: "at-comments",
      "aria-label": M.label
    }, [
      M.label ? (t(), l("div", sl, [
        i("span", ol, m(M.label), 1)
      ])) : h("", !0),
      g.value.length ? (t(), l("ol", rl, [
        (t(!0), l(w, null, x(g.value, (P) => (t(), l(w, {
          key: P.id
        }, [
          P.kind === "event" ? (t(), l("li", il, [
            i("span", null, [
              i("b", null, m(P.author), 1),
              b(" " + m(P.text) + " · ", 1),
              i("time", {
                datetime: P.at,
                title: c(P.at)
              }, m(v(P.at)), 9, ul)
            ])
          ])) : (t(), l("li", dl, [
            f(qe, {
              name: P.author,
              size: "md",
              tone: P.author === M.me ? "accent" : "neutral"
            }, null, 8, ["name", "tone"]),
            i("div", cl, [
              i("b", null, m(P.author), 1),
              i("time", {
                datetime: P.at,
                title: c(P.at)
              }, m(v(P.at)), 9, pl),
              P.editedAt ? (t(), l("span", {
                key: 0,
                class: "at-comment__edited",
                title: c(P.editedAt)
              }, "modifié", 8, vl)) : h("", !0),
              P.author === M.me && X.value !== P.id ? (t(), l("span", ml, [
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "edit",
                  "icon-only": "",
                  label: "Modifier",
                  onClick: (j) => se(P)
                }, null, 8, ["onClick"]),
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "trash",
                  "icon-only": "",
                  label: "Supprimer",
                  onClick: (j) => a("delete", P)
                }, null, 8, ["onClick"])
              ])) : h("", !0)
            ]),
            X.value === P.id ? (t(), l("div", hl, [
              ee(i("textarea", {
                id: `${A(S)}-edit`,
                "onUpdate:modelValue": Q[0] || (Q[0] = (j) => te.value = j),
                class: "at-composer__text",
                rows: "1",
                "aria-label": "Modifier le commentaire",
                onKeydown: (j) => oe(j, P)
              }, null, 40, fl), [
                [Ce, te.value]
              ]),
              i("div", gl, [
                i("span", yl, [
                  f(Te, null, {
                    default: B(() => [
                      b(m(A($)) + " ↵", 1)
                    ]),
                    _: 1
                  }),
                  b(" pour enregistrer")
                ]),
                f(J, {
                  size: "sm",
                  variant: "ghost",
                  onClick: Q[1] || (Q[1] = (j) => X.value = null)
                }, {
                  default: B(() => [
                    b("Annuler")
                  ]),
                  _: 1
                }),
                f(J, {
                  size: "sm",
                  variant: "primary",
                  disabled: !te.value.trim(),
                  onClick: (j) => ne(P)
                }, {
                  default: B(() => [
                    b("Enregistrer")
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])
              ])
            ])) : (t(), l("p", bl, [
              (t(!0), l(w, null, x(L(P.text), (j, ue) => (t(), l(w, { key: ue }, [
                j.mention ? (t(), l("span", kl, m(j.text), 1)) : (t(), l(w, { key: 1 }, [
                  b(m(j.text), 1)
                ], 64))
              ], 64))), 128))
            ]))
          ]))
        ], 64))), 128))
      ])) : (t(), l("p", _l, "Aucun commentaire pour l’instant.")),
      i("div", wl, [
        f(qe, {
          name: M.me,
          size: "md",
          tone: "accent"
        }, null, 8, ["name"]),
        i("div", $l, [
          ee(i("textarea", {
            ref_key: "area",
            ref: E,
            "onUpdate:modelValue": Q[2] || (Q[2] = (P) => F.value = P),
            class: "at-composer__text",
            rows: "1",
            placeholder: M.placeholder,
            "aria-label": "Nouveau commentaire",
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-expanded": !!y.value && Z.value.length > 0,
            "aria-controls": A(S),
            "aria-activedescendant": y.value && Z.value.length ? `${A(S)}-${U.value}` : void 0,
            onKeydown: W,
            onInput: D,
            onClick: D,
            onBlur: Q[3] || (Q[3] = (P) => y.value = null)
          }, null, 40, Ml), [
            [Ce, F.value]
          ]),
          i("div", Al, [
            i("span", Cl, [
              f(Te, null, {
                default: B(() => [
                  b(m(A($)) + " ↵", 1)
                ]),
                _: 1
              }),
              b(" pour envoyer")
            ]),
            f(J, {
              variant: "primary",
              size: "sm",
              disabled: !F.value.trim(),
              onClick: H
            }, {
              default: B(() => [
                b("Commenter")
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          y.value && Z.value.length ? (t(), l("div", {
            key: 0,
            id: A(S),
            class: "at-menu at-composer__mentions",
            role: "listbox",
            "aria-label": "Mentionner"
          }, [
            Vl,
            (t(!0), l(w, null, x(Z.value, (P, j) => (t(), l("div", {
              id: `${A(S)}-${j}`,
              key: P,
              class: R(["at-menu-item", j === U.value && "is-active"]),
              role: "option",
              "aria-selected": j === U.value,
              onMousedown: re((ue) => I(P), ["prevent"]),
              onMousemove: (ue) => U.value = j
            }, [
              f(qe, { name: P }, null, 8, ["name"]),
              i("span", null, [
                b(m(A(Ke)(P, y.value.query)[0]), 1),
                i("mark", null, m(A(Ke)(P, y.value.query)[1]), 1),
                b(m(A(Ke)(P, y.value.query)[2]), 1)
              ])
            ], 42, Tl))), 128))
          ], 8, Sl)) : h("", !0)
        ])
      ])
    ], 8, ll));
  }
}), _e = /* @__PURE__ */ G({
  __name: "AtPopover",
  props: /* @__PURE__ */ le({
    anchor: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ le(["close"], ["update:open"]),
  setup(s, { expose: e, emit: n }) {
    const a = ie(s, "open"), o = s, u = n, v = N(), c = N(), g = N({ top: -9999, left: -9999 }), L = V(() => {
      var I;
      return o.anchor ?? ((I = v.value) == null ? void 0 : I.firstElementChild) ?? v.value ?? null;
    });
    function $() {
      const I = L.value, H = c.value;
      if (!I || !H) return;
      const W = I.getBoundingClientRect(), X = H.offsetWidth, te = H.offsetHeight;
      if (o.placement === "over") {
        const oe = Math.max(8, Math.min(W.left, window.innerWidth - X - 8)), M = Math.max(8, Math.min(W.top, window.innerHeight - te - 8));
        (Math.abs(M - g.value.top) > 0.5 || Math.abs(oe - g.value.left) > 0.5) && (g.value = { top: M, left: oe });
        return;
      }
      if (o.placement === "right") {
        const oe = Math.max(8, Math.min(W.right + o.offset, window.innerWidth - X - 8)), M = Math.max(8, Math.min(W.bottom - te, window.innerHeight - te - 8));
        (Math.abs(M - g.value.top) > 0.5 || Math.abs(oe - g.value.left) > 0.5) && (g.value = { top: M, left: oe });
        return;
      }
      let se = o.align === "end" ? W.right - X : W.left;
      se = Math.max(8, Math.min(se, window.innerWidth - X - 8));
      let ne = W.bottom + o.offset;
      ne + te > window.innerHeight - 8 && (ne = Math.max(8, W.top - te - o.offset)), (Math.abs(ne - g.value.top) > 0.5 || Math.abs(se - g.value.left) > 0.5) && (g.value = { top: ne, left: se });
    }
    function F() {
      a.value && (a.value = !1, u("close"));
    }
    function E() {
      a.value ? F() : a.value = !0;
    }
    function S(I) {
      var W, X, te;
      const H = I.target;
      (W = c.value) != null && W.contains(H) || (X = L.value) != null && X.contains(H) || (te = H.closest) != null && te.call(H, ".at-pop") || F();
    }
    function y(I) {
      var H, W;
      I.key === "Escape" && (I.stopPropagation(), F(), (W = (H = L.value) == null ? void 0 : H.focus) == null || W.call(H));
    }
    let U = null;
    function Z() {
      setTimeout(() => document.addEventListener("mousedown", S), 0), document.addEventListener("keydown", y, !0), window.addEventListener("resize", $), window.addEventListener("scroll", $, !0), Le(() => {
        $(), c.value && (U = new ResizeObserver($), U.observe(c.value));
      });
    }
    function D() {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", y, !0), window.removeEventListener("resize", $), window.removeEventListener("scroll", $, !0), U == null || U.disconnect(), U = null, g.value = { top: -9999, left: -9999 };
    }
    return we(a, (I) => I ? Z() : D(), { immediate: !0 }), lt(D), e({ place: $, close: F, toggle: E }), (I, H) => (t(), l(w, null, [
      I.$slots.trigger ? (t(), l("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: v,
        style: { display: "contents" }
      }, [
        K(I.$slots, "trigger", {
          toggle: E,
          open: a.value
        })
      ], 512)) : h("", !0),
      (t(), q(wt, { to: "body" }, [
        a.value ? (t(), l("div", {
          key: 0,
          ref_key: "el",
          ref: c,
          class: "at-pop",
          style: ce({ top: g.value.top + "px", left: g.value.left + "px" })
        }, [
          K(I.$slots, "default", { close: F })
        ], 4)) : h("", !0)
      ]))
    ], 64));
  }
}), Dl = ["aria-valuenow", "aria-label"], zl = { class: "at-progress__track" }, El = {
  key: 0,
  class: "at-progress__label"
}, wa = /* @__PURE__ */ G({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(s) {
    const e = s, n = V(() => Math.max(0, Math.min(100, Math.round(e.value / e.max * 100))));
    return (a, o) => (t(), l("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": a.label
    }, [
      i("span", zl, [
        i("span", {
          class: "at-progress__bar",
          style: ce({ width: n.value + "%" })
        }, null, 4)
      ]),
      a.showLabel ? (t(), l("span", El, m(n.value) + " %", 1)) : h("", !0)
    ], 8, Dl));
  }
}), Ol = {
  key: 0,
  class: "at-pv-title"
}, Bl = ["checked"], Ql = {
  key: 2,
  class: "at-pv-empty"
}, Il = {
  key: 5,
  class: "at-pv-multi"
}, xl = {
  key: 6,
  class: "at-pv-person"
}, Fl = { class: "at-ellipsis" }, Ul = {
  key: 7,
  class: "at-pv-rel"
}, Pl = { class: "at-ellipsis" }, Nl = {
  key: 9,
  class: "at-num"
}, Hl = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, Ae = /* @__PURE__ */ G({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(s) {
    const e = s, n = V(() => he(e.row, e.prop)), a = V(() => e.prop.type), o = V(() => tt(e.prop) ? kt(e.prop, e.row, n.value) : void 0), u = V(() => a.value === "multi" ? (n.value ?? []).map((g) => kt(e.prop, e.row, g)).filter(Boolean) : []), v = V(() => {
      var g, L;
      return a.value === "date" && !!((L = (g = e.prop).overdue) != null && L.call(g, e.row));
    }), c = V(() => {
      var g;
      return ((g = o.value) == null ? void 0 : g.label) ?? String(n.value ?? "");
    });
    return (g, L) => {
      var $, F, E;
      return a.value === "title" ? (t(), l("span", Ol, m(n.value || "Sans titre"), 1)) : a.value === "checkbox" ? (t(), l("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!n.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, Bl)) : A(be)(n.value) ? (t(), l("span", Ql, "—")) : a.value === "status" ? (t(), l("span", {
        key: 3,
        class: R(["at-badge", (($ = o.value) == null ? void 0 : $.tone) && o.value.tone !== "neutral" && `at-badge--${o.value.tone}`])
      }, m(c.value), 3)) : a.value === "select" ? (t(), l("span", {
        key: 4,
        class: R(["at-tag", ((F = o.value) == null ? void 0 : F.color) && o.value.color !== "gray" && `at-tag--${o.value.color}`])
      }, m(c.value), 3)) : a.value === "multi" ? (t(), l("span", Il, [
        (t(!0), l(w, null, x(u.value, (S) => (t(), l("span", {
          key: S.value,
          class: R(["at-tag", S.color && S.color !== "gray" && `at-tag--${S.color}`])
        }, m(S.label), 3))), 128))
      ])) : a.value === "person" ? (t(), l("span", xl, [
        f(qe, { name: c.value }, null, 8, ["name"]),
        i("span", Fl, m(c.value), 1)
      ])) : a.value === "relation" ? (t(), l("span", Ul, [
        (E = o.value) != null && E.mark ? (t(), l("span", {
          key: 0,
          class: "at-pv-mark",
          style: ce({ background: o.value.mark })
        }, null, 4)) : (t(), q(O, {
          key: 1,
          name: g.prop.icon ?? "link"
        }, null, 8, ["name"])),
        i("span", Pl, m(o.value ? o.value.label : "Introuvable"), 1)
      ])) : a.value === "date" ? (t(), l("span", {
        key: 8,
        class: R(["at-pv-date", v.value && "at-pv-over"])
      }, m(A(_t)(n.value)), 3)) : a.value === "number" ? (t(), l("span", Nl, m(A(_a).format(Number(n.value))) + m(g.prop.suffix ?? ""), 1)) : a.value === "progress" ? (t(), q(wa, {
        key: 10,
        value: Number(n.value)
      }, null, 8, ["value"])) : (t(), l("span", Hl, m(n.value), 1));
    };
  }
}), ql = ["aria-label", "onClick"], Kl = ["aria-controls", "aria-activedescendant", "aria-label"], Rl = ["id", "aria-label", "aria-multiselectable"], jl = {
  key: 0,
  class: "at-menu-label"
}, Gl = ["id", "aria-selected", "onMousemove", "onClick"], Wl = ["aria-label", "aria-expanded", "onClick"], Yl = ["id"], Jl = {
  key: 2,
  class: "at-menu-empty",
  style: { padding: "2px 8px" }
}, Zl = { class: "at-tagedit__hint" }, Xl = { key: 0 }, es = ["aria-label"], ts = ["value"], as = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), ns = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Couleur", -1), ls = ["aria-checked", "onClick"], ss = ["aria-label"], os = { class: "at-menu-label" }, rs = ["aria-selected", "onClick"], is = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, us = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), ds = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, cs = { class: "at-menu-title" }, ps = ["value", "aria-label"], vs = {
  class: "at-datequick",
  role: "group",
  "aria-label": "Raccourcis"
}, ms = ["onClick"], hs = { class: "at-menu-meta" }, fs = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), gs = ["disabled"], ys = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, bs = { class: "at-menu-title" }, ks = ["type", "aria-label"], Rt = /* @__PURE__ */ G({
  __name: "AtPropertyEditor",
  props: /* @__PURE__ */ le({
    prop: {},
    row: {},
    anchor: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ le(["update", "createOption", "updateOption", "deleteOption"], ["update:open"]),
  setup(s, { emit: e }) {
    const n = ie(s, "open"), a = s, o = e, u = N(""), v = N(), c = V(() => {
      const k = a.prop;
      return k ? k.type === "select" || k.type === "multi" ? "tags" : tt(k) ? "options" : k.type === "date" ? "date" : "input" : null;
    }), g = V(() => a.prop ? Re(a.prop, a.row) : []), L = V(() => a.prop && a.row ? a.row[a.prop.key] : null), $ = V(() => {
      var k;
      return ((k = a.prop) == null ? void 0 : k.type) === "multi";
    }), F = V(() => {
      var k;
      return !!((k = a.prop) != null && k.creatable);
    }), E = N(""), S = N(0), y = N(), U = N({ w: 0, h: 0 }), Z = je("at-tags"), D = V(() => $.value ? L.value ?? [] : L.value != null ? [L.value] : []), I = V(() => D.value.map((k) => g.value.find((C) => C.value === k)).filter((k) => !!k)), H = V(() => tl(g.value, E.value, $.value ? D.value : [])), W = V(() => F.value && al(g.value, E.value)), X = V(() => H.value.length + (W.value ? 1 : 0)), te = V(() => nl(g.value)), se = (k) => ["at-tag", k && k !== "gray" && `at-tag--${k}`];
    we(E, () => {
      S.value = 0;
    });
    function ne(k) {
      $.value ? (fe([...D.value, k.value], !1), E.value = "") : fe(k.value);
    }
    function oe() {
      const k = { value: Be(), label: E.value.trim(), color: te.value };
      o("createOption", k), ne(k);
    }
    function M(k) {
      var C;
      fe(D.value.filter((T) => T !== k), !1), (C = y.value) == null || C.focus();
    }
    function Q(k) {
      var T;
      const C = X.value;
      k.key === "ArrowDown" ? (k.preventDefault(), C && (S.value = (S.value + 1) % C)) : k.key === "ArrowUp" ? (k.preventDefault(), C && (S.value = (S.value - 1 + C) % C)) : k.key === "Enter" ? (k.preventDefault(), S.value < H.value.length ? ne(H.value[S.value]) : W.value && oe()) : k.key === "Tab" ? n.value = !1 : k.key === "Backspace" && !E.value && D.value.length && (k.preventDefault(), $.value ? fe(D.value.slice(0, -1), !1) : (T = a.prop) != null && T.required || fe(null, !1));
    }
    const P = [
      { value: "gray", label: "Gris" },
      { value: "brown", label: "Marron" },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Jaune" },
      { value: "green", label: "Vert" },
      { value: "blue", label: "Bleu" },
      { value: "purple", label: "Violet" },
      { value: "pink", label: "Rose" },
      { value: "red", label: "Rouge" }
    ], j = N(!1), ue = N(null), Ve = N(null), de = V(() => g.value.find((k) => k.value === Ve.value) ?? null);
    function Ge(k, C) {
      if (j.value && Ve.value === C.value) {
        j.value = !1;
        return;
      }
      ue.value = k.currentTarget, Ve.value = C.value, j.value = !0;
    }
    function xe(k) {
      const C = k.trim();
      de.value && C && C !== de.value.label && o("updateOption", de.value.value, { label: C });
    }
    function We(k) {
      de.value && o("updateOption", de.value.value, { color: k });
    }
    function Ye() {
      var k;
      de.value && o("deleteOption", de.value.value), j.value = !1, (k = y.value) == null || k.focus();
    }
    function st() {
      var k;
      (k = y.value) == null || k.focus();
    }
    we(n, (k) => {
      var T;
      if (!k) {
        j.value = !1;
        return;
      }
      u.value = L.value ?? "", E.value = "", S.value = 0;
      const C = (T = a.anchor) == null ? void 0 : T.getBoundingClientRect();
      U.value = { w: (C == null ? void 0 : C.width) ?? 0, h: (C == null ? void 0 : C.height) ?? 0 }, Le(() => {
        var $e, De, Me;
        if (c.value === "tags") {
          ($e = y.value) == null || $e.focus();
          return;
        }
        const ae = (De = v.value) == null ? void 0 : De.querySelector("input, button");
        ae == null || ae.focus(), (Me = ae == null ? void 0 : ae.select) == null || Me.call(ae);
      });
    });
    const ot = V(() => {
      n.value;
      const k = Oe();
      return [
        { label: "Aujourd’hui", value: k },
        { label: "Demain", value: bt(k, 1) },
        { label: "Lundi prochain", value: Hn(k) },
        { label: "Dans une semaine", value: bt(k, 7) }
      ];
    }), At = (k) => ({ ...a.row, [a.prop.key]: k });
    function fe(k, C = !0) {
      o("update", k), C && (n.value = !1);
    }
    function Ct() {
      var C;
      let k = u.value;
      ((C = a.prop) == null ? void 0 : C.type) === "number" && (k = k === "" || k == null ? null : Number(k)), k !== L.value && o("update", k), n.value = !1;
    }
    function St() {
      var k;
      if (c.value === "input") {
        let C = u.value;
        ((k = a.prop) == null ? void 0 : k.type) === "number" && (C = C === "" ? null : Number(C)), C !== L.value && o("update", C);
      }
    }
    return (k, C) => (t(), q(_e, {
      open: n.value,
      "onUpdate:open": C[14] || (C[14] = (T) => n.value = T),
      anchor: k.anchor,
      placement: c.value === "tags" ? "over" : "bottom",
      onClose: St
    }, {
      default: B(() => [
        k.prop ? (t(), l("div", {
          key: 0,
          ref_key: "box",
          ref: v
        }, [
          c.value === "tags" ? (t(), l("div", {
            key: 0,
            class: "at-tagedit",
            style: ce({ width: Math.max(U.value.w, 240) + "px" })
          }, [
            i("div", {
              class: "at-tagedit__field",
              style: ce({ minHeight: U.value.h + "px" }),
              onMousedown: C[2] || (C[2] = re((T) => {
                var ae;
                return (ae = y.value) == null ? void 0 : ae.focus();
              }, ["self", "prevent"]))
            }, [
              (t(!0), l(w, null, x(I.value, (T) => (t(), l("span", {
                key: T.value,
                class: R(se(T.color))
              }, [
                b(m(T.label) + " ", 1),
                $.value ? (t(), l("button", {
                  key: 0,
                  type: "button",
                  "aria-label": `Retirer ${T.label}`,
                  onMousedown: C[0] || (C[0] = re(() => {
                  }, ["prevent"])),
                  onClick: (ae) => M(T.value)
                }, [
                  f(O, { name: "x" })
                ], 40, ql)) : h("", !0)
              ], 2))), 128)),
              ee(i("input", {
                ref_key: "input",
                ref: y,
                "onUpdate:modelValue": C[1] || (C[1] = (T) => E.value = T),
                type: "text",
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": "true",
                "aria-controls": A(Z),
                "aria-activedescendant": X.value ? `${A(Z)}-${S.value}` : void 0,
                "aria-label": k.prop.name,
                autocomplete: "off",
                spellcheck: "false",
                onKeydown: Q
              }, null, 40, Kl), [
                [Ce, E.value]
              ])
            ], 36),
            i("div", {
              id: A(Z),
              class: "at-menu at-tagedit__menu",
              role: "listbox",
              "aria-label": k.prop.name,
              "aria-multiselectable": $.value || void 0
            }, [
              E.value.trim() ? h("", !0) : (t(), l("div", jl, m(F.value ? "Choisir, ou taper pour créer" : "Choisir une option"), 1)),
              (t(!0), l(w, null, x(H.value, (T, ae) => (t(), l("div", {
                id: `${A(Z)}-${ae}`,
                key: T.value,
                class: R(["at-menu-item", "at-tagedit__opt", ae === S.value && "is-active"]),
                role: "option",
                "aria-selected": D.value.includes(T.value),
                onMousedown: C[4] || (C[4] = re(() => {
                }, ["prevent"])),
                onMousemove: ($e) => S.value = ae,
                onClick: ($e) => ne(T)
              }, [
                i("span", {
                  class: R(se(T.color))
                }, [
                  i("span", null, [
                    b(m(A(Ke)(T.label, E.value)[0]), 1),
                    i("mark", null, m(A(Ke)(T.label, E.value)[1]), 1),
                    b(m(A(Ke)(T.label, E.value)[2]), 1)
                  ])
                ], 2),
                !$.value && T.value === L.value ? (t(), q(O, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : h("", !0),
                F.value ? (t(), l("button", {
                  key: 1,
                  type: "button",
                  class: "at-tagedit__more",
                  "aria-label": `Modifier ${T.label}`,
                  "aria-expanded": j.value && Ve.value === T.value,
                  onMousedown: C[3] || (C[3] = re(() => {
                  }, ["prevent"])),
                  onClick: re(($e) => Ge($e, T), ["stop"])
                }, [
                  f(O, { name: "more" })
                ], 40, Wl)) : h("", !0)
              ], 42, Gl))), 128)),
              W.value ? (t(), l("div", {
                key: 1,
                id: `${A(Z)}-${H.value.length}`,
                class: R(["at-menu-item", "at-tagedit__opt", "at-tagedit__create", S.value === H.value.length && "is-active"]),
                role: "option",
                "aria-selected": "false",
                onMousedown: C[5] || (C[5] = re(() => {
                }, ["prevent"])),
                onMousemove: C[6] || (C[6] = (T) => S.value = H.value.length),
                onClick: oe
              }, [
                f(O, { name: "plus" }),
                b("Créer "),
                i("span", {
                  class: R(se(te.value))
                }, m(E.value.trim()), 3)
              ], 42, Yl)) : h("", !0),
              X.value ? h("", !0) : (t(), l("div", Jl, m(E.value.trim() ? "Aucune option ne correspond" : "Toutes les options sont choisies"), 1)),
              i("div", Zl, [
                i("span", null, [
                  f(Te, null, {
                    default: B(() => [
                      b("↵")
                    ]),
                    _: 1
                  }),
                  b(m(W.value && S.value === H.value.length ? "créer" : "choisir"), 1)
                ]),
                i("span", null, [
                  f(Te, null, {
                    default: B(() => [
                      b("Échap")
                    ]),
                    _: 1
                  }),
                  b("fermer")
                ]),
                $.value ? (t(), l("span", Xl, [
                  f(Te, null, {
                    default: B(() => [
                      b("⌫")
                    ]),
                    _: 1
                  }),
                  b("retirer")
                ])) : h("", !0)
              ])
            ], 8, Rl),
            f(_e, {
              open: j.value,
              "onUpdate:open": C[9] || (C[9] = (T) => j.value = T),
              anchor: ue.value,
              placement: "right",
              onClose: st
            }, {
              default: B(() => [
                de.value ? (t(), l("div", {
                  key: 0,
                  class: "at-menu at-tagedit__panel",
                  role: "menu",
                  "aria-label": `Option ${de.value.label}`
                }, [
                  (t(), l("input", {
                    key: de.value.value,
                    class: "at-input",
                    type: "text",
                    value: de.value.label,
                    "aria-label": "Nom de l’option",
                    onChange: C[7] || (C[7] = (T) => xe(T.target.value)),
                    onKeydown: C[8] || (C[8] = ta(re((T) => {
                      xe(T.target.value), j.value = !1, st();
                    }, ["prevent"]), ["enter"]))
                  }, null, 40, ts)),
                  i("button", {
                    type: "button",
                    class: "at-menu-item at-menu-item--danger",
                    role: "menuitem",
                    onClick: Ye
                  }, [
                    f(O, { name: "trash" }),
                    b("Supprimer")
                  ]),
                  as,
                  ns,
                  (t(), l(w, null, x(P, (T) => i("button", {
                    key: T.value,
                    type: "button",
                    class: "at-menu-item",
                    role: "menuitemradio",
                    "aria-checked": (de.value.color ?? "gray") === T.value,
                    onClick: (ae) => We(T.value)
                  }, [
                    i("span", {
                      class: R([...se(T.value), "at-tagedit__swatch"])
                    }, null, 2),
                    b(m(T.label) + " ", 1),
                    (de.value.color ?? "gray") === T.value ? (t(), q(O, {
                      key: 0,
                      name: "check",
                      class: "at-menu-check"
                    })) : h("", !0)
                  ], 8, ls)), 64))
                ], 8, es)) : h("", !0)
              ]),
              _: 1
            }, 8, ["open", "anchor"])
          ], 4)) : c.value === "options" ? (t(), l("div", {
            key: 1,
            class: "at-menu",
            role: "listbox",
            "aria-label": k.prop.name
          }, [
            i("div", os, m(k.prop.name), 1),
            (t(!0), l(w, null, x(g.value, (T) => (t(), l("button", {
              key: T.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": T.value === L.value,
              onClick: (ae) => fe(T.value)
            }, [
              f(Ae, {
                prop: k.prop,
                row: At(T.value)
              }, null, 8, ["prop", "row"]),
              T.value === L.value ? (t(), q(O, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : h("", !0)
            ], 8, rs))), 128)),
            g.value.length ? h("", !0) : (t(), l("div", is, "Aucune option disponible")),
            k.prop.required ? h("", !0) : (t(), l(w, { key: 1 }, [
              us,
              i("button", {
                type: "button",
                class: "at-menu-item",
                onClick: C[10] || (C[10] = (T) => fe(null))
              }, [
                f(O, { name: "x" }),
                b("Effacer")
              ])
            ], 64))
          ], 8, ss)) : c.value === "date" ? (t(), l("div", ds, [
            i("span", cs, m(k.prop.name), 1),
            i("input", {
              type: "date",
              class: "at-input",
              value: L.value ?? "",
              "aria-label": k.prop.name,
              onChange: C[11] || (C[11] = (T) => fe(T.target.value || null, !1))
            }, null, 40, ps),
            i("div", vs, [
              (t(!0), l(w, null, x(ot.value, (T) => (t(), l("button", {
                key: T.label,
                type: "button",
                class: "at-menu-item",
                onClick: (ae) => fe(T.value)
              }, [
                b(m(T.label), 1),
                i("span", hs, m(A(_t)(T.value)), 1)
              ], 8, ms))), 128)),
              k.prop.required ? h("", !0) : (t(), l(w, { key: 0 }, [
                fs,
                i("button", {
                  type: "button",
                  class: "at-menu-item",
                  disabled: !L.value,
                  onClick: C[12] || (C[12] = (T) => fe(null))
                }, [
                  f(O, { name: "x" }),
                  b("Effacer")
                ], 8, gs)
              ], 64))
            ])
          ])) : (t(), l("div", ys, [
            i("span", bs, m(k.prop.name), 1),
            ee(i("input", {
              "onUpdate:modelValue": C[13] || (C[13] = (T) => u.value = T),
              class: "at-input",
              type: k.prop.type === "number" ? "number" : "text",
              "aria-label": k.prop.name,
              onKeydown: ta(Ct, ["enter"])
            }, null, 40, ks), [
              [xt, u.value]
            ])
          ]))
        ], 512)) : h("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor", "placement"]));
  }
}), _s = { class: "at-dv" }, ws = { class: "at-dv-viewsbar" }, $s = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Ms = ["aria-selected", "title", "onClick"], As = { class: "at-toolbar at-dv-toolbar" }, Cs = {
  key: 1,
  class: "at-dv-n"
}, Ss = {
  key: 1,
  class: "at-dv-n"
}, Vs = { class: "at-input-wrap at-dv-search" }, Ts = {
  key: 0,
  class: "at-dv-chips"
}, Ls = { class: "at-table-wrap" }, Ds = /* @__PURE__ */ i("col", { style: { width: "36px" } }, null, -1), zs = /* @__PURE__ */ i("col", { style: { width: "44px" } }, null, -1), Es = { class: "at-cell-check" }, Os = ["checked", "indeterminate"], Bs = { class: "at-th" }, Qs = ["onMousedown"], Is = { class: "at-cell-check" }, xs = {
  key: 0,
  class: "at-dv-grouprow"
}, Fs = ["colspan"], Us = ["aria-expanded", "onClick"], Ps = {
  key: 1,
  class: "at-pv-empty"
}, Ns = { class: "at-count" }, Hs = ["aria-selected"], qs = { class: "at-cell-check" }, Ks = ["checked", "onChange"], Rs = ["onClick"], js = ["onClick"], Gs = /* @__PURE__ */ i("td", null, null, -1), Ws = { class: "at-dv-newrow" }, Ys = /* @__PURE__ */ i("td", null, null, -1), Js = ["colspan"], Zs = ["onClick"], Xs = /* @__PURE__ */ i("td", null, null, -1), eo = /* @__PURE__ */ i("td", null, null, -1), to = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, ao = { class: "at-num" }, no = {
  key: 2,
  class: "at-dv-board"
}, lo = {
  key: 0,
  class: "at-empty"
}, so = ["onDragover", "onDrop"], oo = { class: "at-dv-colhead" }, ro = {
  key: 1,
  class: "at-pv-empty"
}, io = { class: "at-count" }, uo = /* @__PURE__ */ i("span", { class: "at-spacer" }, null, -1), co = { class: "at-dv-cards" }, po = ["onDragstart", "onClick"], vo = { class: "at-dv-cardtitle" }, mo = {
  key: 0,
  class: "at-dv-cardprops"
}, ho = ["onClick"], fo = { key: 3 }, go = {
  key: 0,
  class: "at-empty"
}, yo = {
  key: 1,
  class: "at-dv-list"
}, bo = {
  key: 0,
  class: "at-dv-lgroup"
}, ko = ["aria-expanded", "onClick"], _o = {
  key: 1,
  class: "at-pv-empty"
}, wo = { class: "at-count" }, $o = ["onClick"], Mo = { class: "at-pv-title" }, Ao = { class: "at-dv-liprops" }, Co = { class: "at-dv-newline" }, So = { class: "at-dv-calhead" }, Vo = { class: "at-dv-calmonth" }, To = { class: "at-dv-calnote" }, Lo = { class: "at-dv-calwrap" }, Do = { class: "at-dv-calgrid" }, zo = { class: "at-dv-calgrid" }, Eo = ["onDragover", "onDrop"], Oo = { class: "at-dv-daynum" }, Bo = ["aria-label", "onClick"], Qo = ["onDragstart", "onClick"], Io = {
  class: "at-menu",
  role: "menu"
}, xo = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Nouvelle vue", -1), Fo = ["onClick"], Uo = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, Po = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), No = {
  key: 0,
  class: "at-rules"
}, Ho = { class: "at-dv-locknote" }, qo = {
  key: 0,
  class: "at-menu-empty"
}, Ko = {
  key: 1,
  class: "at-rules"
}, Ro = {
  key: 0,
  class: "at-menu-empty"
}, jo = { class: "at-select" }, Go = ["onUpdate:modelValue", "onChange"], Wo = ["value"], Yo = { class: "at-select" }, Jo = ["onUpdate:modelValue"], Zo = ["value"], Xo = {
  key: 0,
  class: "at-select"
}, er = ["onUpdate:modelValue"], tr = /* @__PURE__ */ i("option", { value: "" }, "Choisir…", -1), ar = ["value"], nr = ["value"], lr = ["onUpdate:modelValue"], sr = ["onUpdate:modelValue"], or = ["onUpdate:modelValue"], rr = { key: 1 }, ir = {
  key: 2,
  class: "at-menu-actions"
}, ur = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, dr = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), cr = { class: "at-rules" }, pr = {
  key: 0,
  class: "at-menu-empty"
}, vr = { class: "at-select" }, mr = ["onUpdate:modelValue"], hr = ["value"], fr = { class: "at-select" }, gr = ["onUpdate:modelValue"], yr = /* @__PURE__ */ i("option", { value: "asc" }, "Croissant", -1), br = /* @__PURE__ */ i("option", { value: "desc" }, "Décroissant", -1), kr = [
  yr,
  br
], _r = { class: "at-menu-actions" }, wr = {
  class: "at-menu",
  role: "menu"
}, $r = { class: "at-menu-label" }, Mr = ["onClick"], Ar = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Cr = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Sr = ["draggable", "onDragstart", "onDragover", "onDrop"], Vr = { class: "at-pi-name" }, Tr = ["aria-label", "checked", "disabled", "onChange"], Lr = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), Dr = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, zr = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Er = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), Or = { class: "at-dv-viewname" }, Br = { class: "at-dv-locknote" }, Qr = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Ir = ["aria-pressed", "onClick"], xr = {
  key: 2,
  class: "at-field-row"
}, Fr = { class: "at-select" }, Ur = ["value"], Pr = {
  key: 0,
  value: ""
}, Nr = ["value"], Hr = {
  key: 3,
  class: "at-field-row"
}, qr = /* @__PURE__ */ i("span", null, "Date utilisée", -1), Kr = { class: "at-select" }, Rr = ["value"], jr = ["value"], Gr = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), Wr = ["disabled"], Yr = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), Jr = /* @__PURE__ */ G({
  __name: "AtDataView",
  props: /* @__PURE__ */ le({
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
    views: { default: () => [sa("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ le(["update", "create", "open", "delete", "createOption", "updateOption", "deleteOption", "resetViews"], ["update:views", "update:activeView"]),
  setup(s, { emit: e }) {
    const n = s, a = ie(s, "views"), o = ie(s, "activeView"), u = e, v = (d) => d[n.rowKey], c = V(() => a.value.find((d) => d.id === o.value) ?? a.value[0]), g = V(() => Object.fromEntries(n.schema.map((d) => [d.key, d]))), L = V(() => n.schema.find((d) => d.type === "title")), $ = V(() => {
      var d;
      return ((d = L.value) == null ? void 0 : d.key) ?? n.rowKey;
    }), F = V(() => {
      const d = (c.value.order ?? []).filter((z) => g.value[z]);
      for (const z of n.schema) d.includes(z.key) || d.push(z.key);
      const p = d.indexOf($.value);
      return p > 0 && (d.splice(p, 1), d.unshift($.value)), d.map((z) => g.value[z]);
    }), E = V(() => F.value.filter((d) => d.type === "title" || !c.value.hidden.includes(d.key))), S = V(() => E.value.filter((d) => d.type !== "title")), y = V(() => n.schema.filter(tt)), U = V(() => n.schema.filter((d) => d.type === "date")), Z = V(() => n.schema.find((d) => d.type === "status")), D = N(""), I = V(() => n.context ?? {}), H = V(() => Gn(n.rows, n.schema, c.value, D.value, I.value)), W = V(() => {
      var p, z;
      const d = c.value.groupBy && g.value[c.value.groupBy] ? c.value.groupBy : null;
      return c.value.layout === "board" && !d ? ((p = Z.value) == null ? void 0 : p.key) ?? ((z = y.value[0]) == null ? void 0 : z.key) ?? null : d;
    }), X = V(() => W.value && c.value.layout !== "calendar" ? g.value[W.value] : null), te = V(() => Wn(H.value, X.value, c.value.layout === "board")), se = (d) => ({ [W.value]: d === yt ? null : d }), ne = V(() => c.value.filters.filter((d) => g.value[d.prop])), oe = V(() => c.value.sorts.filter((d) => g.value[d.prop])), M = N({}), Q = N(null), P = N(null);
    function j(d, p) {
      if (Q.value === d && P.value === p) {
        Q.value = null;
        return;
      }
      P.value = p ?? null, Q.value = d;
    }
    const ue = (d) => V({ get: () => Q.value === d, set: (p) => {
      !p && Q.value === d && (Q.value = null);
    } }), Ve = ue("add"), de = ue("filter"), Ge = ue("sort"), xe = ue("group"), We = ue("props"), Ye = ue("settings");
    function st(d) {
      d.id === c.value.id ? j("settings", M.value[d.id]) : o.value = d.id;
    }
    const ot = () => {
      var d, p;
      return ((d = Z.value) == null ? void 0 : d.key) ?? ((p = y.value[0]) == null ? void 0 : p.key) ?? null;
    };
    function At(d) {
      if (n.lockViews) return;
      const p = sa(vt.find((z) => z.value === d).label, d, { groupBy: d === "board" ? ot() : null });
      a.value.push(p), o.value = p.id, Q.value = null, Le(() => j("settings", M.value[p.id]));
    }
    function fe(d) {
      c.value.layout = d, d === "board" && !c.value.groupBy && (c.value.groupBy = ot());
    }
    function Ct() {
      if (n.lockViews) return;
      const d = JSON.parse(JSON.stringify(c.value));
      d.id = Be(), d.name = c.value.name + " (copie)", delete d.locked, a.value.push(d), o.value = d.id, Q.value = null;
    }
    function St() {
      if (n.lockViews || c.value.locked || a.value.length < 2) return;
      const d = a.value.indexOf(c.value);
      a.value.splice(d, 1), o.value = a.value[Math.max(0, d - 1)].id, Q.value = null;
    }
    function k() {
      Q.value = null, u("resetViews");
    }
    we(() => c.value.id, () => {
      pe.value = [], Q.value = null;
    });
    function C() {
      if (c.value.locked) return;
      const d = n.schema.find((p) => p.type !== "title" && p.type !== "progress") ?? n.schema[0];
      c.value.filters.push({ id: Be(), prop: d.key, op: Ot[d.type][0], value: "" });
    }
    function T(d) {
      d.op = Ot[g.value[d.prop].type][0], d.value = "";
    }
    const ae = (d) => {
      var p;
      return Ot[(p = g.value[d.prop]) == null ? void 0 : p.type] ?? [];
    }, $e = (d) => !ba.includes(d.op);
    function De(d) {
      const p = g.value[d.prop];
      return p ? tt(p) || p.type === "multi" ? "options" : p.type === "date" ? "date" : p.type === "number" || p.type === "progress" ? "number" : "text" : "text";
    }
    function Me(d) {
      var me;
      const p = g.value[d.prop];
      let z = "";
      if ($e(d)) {
        const r = De(d);
        z = d.value === Ft && p.type === "person" ? "Moi" : r === "options" ? ((me = kt(p, void 0, d.value)) == null ? void 0 : me.label) ?? "…" : r === "date" ? _t(d.value) || "…" : d.value === "" ? "…" : d.value;
      }
      return { name: p.name, op: na[d.op], val: z };
    }
    function Ba() {
      const d = c.value.sorts.map((z) => z.prop), p = n.schema.find((z) => !d.includes(z.key)) ?? n.schema[0];
      c.value.sorts.push({ id: Be(), prop: p.key, dir: "asc" });
    }
    const Gt = (d, p) => {
      const z = d.indexOf(p);
      z >= 0 && d.splice(z, 1);
    };
    function Qa() {
      c.value.locked || c.value.filters.splice(0), c.value.sorts.splice(0);
    }
    const Ia = V(() => !c.value.locked || oe.value.length > 0);
    function Vt(d) {
      c.value.groupBy = d, c.value.collapsed = [], c.value.layout !== "board" && (Q.value = null);
    }
    function xa(d) {
      const p = c.value.hidden, z = p.indexOf(d.key);
      z < 0 ? p.push(d.key) : p.splice(z, 1);
    }
    function Wt(d) {
      c.value.hidden = d ? [] : n.schema.filter((p) => p.type !== "title").map((p) => p.key);
    }
    const Je = N(null), rt = N(null);
    function Fa(d) {
      if (Je.value == null) return;
      const p = F.value.map((me) => me.key), [z] = p.splice(Je.value, 1);
      p.splice(d, 0, z), c.value.order = p, Je.value = null, rt.value = null;
    }
    const Tt = (d) => c.value.widths[d.key] ?? d.width ?? 160, Ua = V(() => 36 + E.value.reduce((d, p) => d + Tt(p), 0) + 44), Lt = N(null);
    function Pa(d, p) {
      const z = d.clientX, me = Tt(p);
      Lt.value = p.key;
      const r = (Y) => {
        c.value.widths[p.key] = Math.max(70, Math.round(me + Y.clientX - z));
      }, _ = () => {
        Lt.value = null, window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", _);
      };
      window.addEventListener("mousemove", r), window.addEventListener("mouseup", _);
    }
    const pe = N([]), Dt = V(() => H.value.length > 0 && H.value.every((d) => pe.value.includes(v(d)))), Na = V(() => pe.value.length > 0 && !Dt.value);
    function Ha(d) {
      const p = pe.value.indexOf(v(d));
      p < 0 ? pe.value.push(v(d)) : pe.value.splice(p, 1);
    }
    function qa() {
      pe.value = Dt.value ? [] : H.value.map(v);
    }
    function Ka() {
      u("delete", n.rows.filter((d) => pe.value.includes(v(d)))), pe.value = [];
    }
    const Fe = (d) => c.value.collapsed.includes(d);
    function Yt(d) {
      const p = c.value.collapsed, z = p.indexOf(d);
      z < 0 ? p.push(d) : p.splice(z, 1);
    }
    function zt(d) {
      const p = H.value;
      if (d.type === "title") return { label: "Total", value: String(p.length) };
      if (d.type === "number") return { label: "Somme", value: _a.format(p.reduce((z, me) => z + (Number(he(me, d)) || 0), 0)) + (d.suffix ?? "") };
      if (d.type === "progress" && p.length) return { label: "Moyenne", value: Math.round(p.reduce((z, me) => z + Number(he(me, d)), 0) / p.length) + " %" };
      if (d.type === "date" && d.overdue) {
        const z = p.filter((me) => d.overdue(me)).length;
        return z ? { label: "En retard", value: String(z) } : null;
      }
      return d.type === "checkbox" ? { label: "Cochées", value: String(p.filter((z) => he(z, d)).length) } : null;
    }
    const ve = tn(null), Jt = N(null), Et = N(!1);
    function Ra(d, p, z) {
      if (z.type === "title") {
        u("open", p);
        return;
      }
      if (et(z)) {
        if (z.type === "checkbox") {
          u("update", p, z.key, !p[z.key]);
          return;
        }
        Jt.value = d.currentTarget, ve.value = { row: p, prop: z }, Et.value = !0;
      }
    }
    function ze(d = {}) {
      u("create", { ...Jn(c.value, n.schema, I.value), ...d });
    }
    const it = N(null), Ue = N(null);
    function Zt(d, p) {
      it.value = v(p), d.dataTransfer && (d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("text/plain", String(v(p))));
    }
    function ut() {
      it.value = null, Ue.value = null;
    }
    const Xt = () => n.rows.find((d) => v(d) === it.value);
    function ja(d) {
      const p = Xt();
      p && W.value && u("update", p, W.value, d === yt ? null : d), ut();
    }
    function Ga(d) {
      const p = Xt();
      p && ke.value && u("update", p, ke.value, d), ut();
    }
    const ke = V(() => {
      var d;
      return c.value.dateProp && g.value[c.value.dateProp] ? c.value.dateProp : ((d = U.value[0]) == null ? void 0 : d.key) ?? null;
    }), dt = V(() => c.value.month ?? Oe().slice(0, 7)), Wa = V(() => Yn(dt.value).map((d) => ({ ...d, today: d.iso === Oe(), rows: ke.value ? H.value.filter((p) => p[ke.value] === d.iso) : [] }))), ea = V(() => ke.value ? H.value.filter((d) => !d[ke.value]).length : 0), Ya = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, Ja = (d) => {
      const p = Z.value, z = p ? kt(p, d, d[p.key]) : void 0;
      return Ya[(z == null ? void 0 : z.tone) ?? "neutral"];
    }, Za = (d) => {
      const p = Z.value;
      if (!p) return !1;
      const z = Re(p, d);
      return z.length > 0 && d[p.key] === z[z.length - 1].value;
    }, ct = (d, p = 0) => n.iconTools ? { iconOnly: !p, label: d, title: d, "aria-label": p ? `${d} (${p})` : d } : {}, Xa = (d) => {
      var p;
      return ((p = vt.find((z) => z.value === d)) == null ? void 0 : p.icon) ?? "table";
    }, pt = V(() => X.value ? `Sans ${X.value.name.toLowerCase()}` : "");
    return (d, p) => {
      var z, me;
      return t(), l("section", _s, [
        i("div", ws, [
          d.hideViews ? h("", !0) : (t(), l(w, { key: 0 }, [
            i("div", $s, [
              (t(!0), l(w, null, x(a.value, (r) => (t(), l("button", {
                key: r.id,
                ref_for: !0,
                ref: (_) => {
                  _ && (M.value[r.id] = _);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": r.id === c.value.id,
                title: r.id === c.value.id ? "Paramètres de la vue" : void 0,
                onClick: (_) => st(r)
              }, [
                f(O, {
                  name: Xa(r.layout)
                }, null, 8, ["name"]),
                b(m(r.name), 1),
                r.locked ? (t(), q(O, {
                  key: 0,
                  name: "lock",
                  class: "at-dv-lock",
                  label: "Vue système"
                })) : h("", !0)
              ], 8, Ms))), 128))
            ]),
            d.lockViews ? h("", !0) : (t(), q(J, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: p[0] || (p[0] = (r) => j("add", r.currentTarget))
            }))
          ], 64)),
          i("div", As, [
            f(J, ye(ct("Filtrer", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": ne.value.length },
              onClick: p[1] || (p[1] = (r) => j("filter", r.currentTarget))
            }), {
              default: B(() => [
                d.iconTools ? h("", !0) : (t(), l(w, { key: 0 }, [
                  b("Filtrer")
                ], 64)),
                ne.value.length ? (t(), l("span", Cs, m(ne.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            f(J, ye(ct("Trier", oe.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": oe.value.length },
              onClick: p[2] || (p[2] = (r) => j("sort", r.currentTarget))
            }), {
              default: B(() => [
                d.iconTools ? h("", !0) : (t(), l(w, { key: 0 }, [
                  b("Trier")
                ], 64)),
                oe.value.length ? (t(), l("span", Ss, m(oe.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            c.value.layout !== "calendar" ? (t(), q(J, ye({ key: 0 }, ct("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": c.value.groupBy },
              onClick: p[3] || (p[3] = (r) => j("group", r.currentTarget))
            }), {
              default: B(() => [
                b("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : h("", !0),
            f(J, ye(ct("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: p[4] || (p[4] = (r) => j("props", r.currentTarget))
            }), {
              default: B(() => [
                b("Propriétés")
              ]),
              _: 1
            }, 16),
            i("div", Vs, [
              f(O, { name: "search" }),
              ee(i("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (r) => D.value = r),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [Ce, D.value]
              ])
            ]),
            d.hideViews ? h("", !0) : (t(), q(J, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: p[6] || (p[6] = (r) => j("settings", r.currentTarget))
            })),
            f(J, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: p[7] || (p[7] = (r) => ze())
            }, {
              default: B(() => [
                b(m(d.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        ne.value.length || oe.value.length ? (t(), l("div", Ts, [
          (t(!0), l(w, null, x(ne.value, (r) => (t(), l("button", {
            key: r.id,
            type: "button",
            class: "at-dv-chip",
            onClick: p[8] || (p[8] = (_) => j("filter", _.currentTarget))
          }, [
            f(O, { name: "filter" }),
            b(m(Me(r).name) + " " + m(Me(r).op) + " ", 1),
            i("b", null, m(Me(r).val), 1)
          ]))), 128)),
          (t(!0), l(w, null, x(oe.value, (r) => (t(), l("button", {
            key: r.id,
            type: "button",
            class: "at-dv-chip",
            onClick: p[9] || (p[9] = (_) => j("sort", _.currentTarget))
          }, [
            f(O, { name: "sort" }),
            b(m(g.value[r.prop].name) + " ", 1),
            i("b", null, m(r.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          Ia.value ? (t(), q(J, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: Qa
          }, {
            default: B(() => [
              b(m(c.value.locked ? "Effacer les tris" : "Tout effacer"), 1)
            ]),
            _: 1
          })) : h("", !0)
        ])) : h("", !0),
        c.value.layout === "table" ? (t(), l(w, { key: 1 }, [
          i("div", Ls, [
            i("table", {
              class: "at-table at-dv-table",
              style: ce({ width: Ua.value + "px", minWidth: "100%" })
            }, [
              i("colgroup", null, [
                Ds,
                (t(!0), l(w, null, x(E.value, (r) => (t(), l("col", {
                  key: r.key,
                  style: ce({ width: Tt(r) + "px" })
                }, null, 4))), 128)),
                zs
              ]),
              i("thead", null, [
                i("tr", null, [
                  i("th", Es, [
                    i("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: Dt.value,
                      indeterminate: Na.value,
                      onChange: qa
                    }, null, 40, Os)
                  ]),
                  (t(!0), l(w, null, x(E.value, (r) => (t(), l("th", {
                    key: r.key,
                    class: R({ "at-num": r.type === "number" })
                  }, [
                    i("span", Bs, [
                      f(O, {
                        name: A(ht)(r)
                      }, null, 8, ["name"]),
                      b(m(r.name), 1)
                    ]),
                    i("span", {
                      class: R(["at-dv-resize", Lt.value === r.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: re((_) => Pa(_, r), ["prevent"])
                    }, null, 42, Qs)
                  ], 2))), 128)),
                  i("th", Is, [
                    f(J, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: p[10] || (p[10] = (r) => j("props", r.currentTarget))
                    })
                  ])
                ])
              ]),
              (t(!0), l(w, null, x(te.value, (r) => (t(), l("tbody", {
                key: r.key
              }, [
                X.value ? (t(), l("tr", xs, [
                  i("td", {
                    colspan: E.value.length + 2
                  }, [
                    i("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !Fe(r.key),
                      onClick: (_) => Yt(r.key)
                    }, [
                      f(O, {
                        name: "chevron-down",
                        class: R({ "at-rot": Fe(r.key) })
                      }, null, 8, ["class"]),
                      r.option ? (t(), q(Ae, {
                        key: 0,
                        prop: X.value,
                        row: se(r.key)
                      }, null, 8, ["prop", "row"])) : (t(), l("span", Ps, m(pt.value), 1)),
                      i("span", Ns, m(r.rows.length), 1)
                    ], 8, Us)
                  ], 8, Fs)
                ])) : h("", !0),
                Fe(r.key) ? h("", !0) : (t(), l(w, { key: 1 }, [
                  (t(!0), l(w, null, x(r.rows, (_) => (t(), l("tr", {
                    key: v(_),
                    "aria-selected": pe.value.includes(v(_)) ? "true" : void 0
                  }, [
                    i("td", qs, [
                      i("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: pe.value.includes(v(_)),
                        onChange: (Y) => Ha(_)
                      }, null, 40, Ks)
                    ]),
                    (t(!0), l(w, null, x(E.value, (Y) => (t(), l("td", {
                      key: Y.key,
                      class: R({ "at-num": Y.type === "number", "at-dv-titlecell": Y.type === "title", "is-edit": Y.type !== "title" && A(et)(Y) }),
                      onClick: (ge) => Ra(ge, _, Y)
                    }, [
                      f(Ae, {
                        prop: Y,
                        row: _
                      }, null, 8, ["prop", "row"]),
                      Y.type === "title" ? (t(), l("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: re((ge) => u("open", _), ["stop"])
                      }, "Ouvrir", 8, js)) : h("", !0)
                    ], 10, Rs))), 128)),
                    Gs
                  ], 8, Hs))), 128)),
                  i("tr", Ws, [
                    Ys,
                    i("td", {
                      colspan: E.value.length + 1
                    }, [
                      i("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (_) => ze(X.value ? se(r.key) : {})
                      }, [
                        f(O, { name: "plus" }),
                        b(m(d.newLabel), 1)
                      ], 8, Zs)
                    ], 8, Js)
                  ])
                ], 64))
              ]))), 128)),
              i("tfoot", null, [
                i("tr", null, [
                  Xs,
                  (t(!0), l(w, null, x(E.value, (r) => (t(), l("td", {
                    key: r.key,
                    class: R({ "at-num": r.type === "number" })
                  }, [
                    zt(r) ? (t(), l(w, { key: 0 }, [
                      b(m(zt(r).label) + " ", 1),
                      i("b", null, m(zt(r).value), 1)
                    ], 64)) : h("", !0)
                  ], 2))), 128)),
                  eo
                ])
              ])
            ], 4)
          ]),
          pe.value.length ? (t(), l("div", to, [
            i("span", null, [
              i("b", ao, m(pe.value.length), 1),
              b(" sélectionnée" + m(pe.value.length > 1 ? "s" : ""), 1)
            ]),
            f(J, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: Ka
            }, {
              default: B(() => [
                b("Supprimer")
              ]),
              _: 1
            }),
            f(J, {
              variant: "ghost",
              size: "sm",
              onClick: p[11] || (p[11] = (r) => pe.value = [])
            }, {
              default: B(() => [
                b("Désélectionner")
              ]),
              _: 1
            })
          ])) : h("", !0)
        ], 64)) : c.value.layout === "board" ? (t(), l("div", no, [
          X.value ? (t(!0), l(w, { key: 1 }, x(te.value, (r) => {
            var _;
            return t(), l("div", {
              key: r.key,
              class: R(["at-dv-col", Ue.value === r.key && "over"]),
              onDragover: re((Y) => Ue.value = r.key, ["prevent"]),
              onDragleave: p[12] || (p[12] = re((Y) => Ue.value = null, ["self"])),
              onDrop: re((Y) => ja(r.key), ["prevent"])
            }, [
              i("div", oo, [
                r.option ? (t(), q(Ae, {
                  key: 0,
                  prop: X.value,
                  row: se(r.key)
                }, null, 8, ["prop", "row"])) : (t(), l("span", ro, m(pt.value), 1)),
                i("span", io, m(r.rows.length), 1),
                uo,
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((_ = r.option) == null ? void 0 : _.label) ?? pt.value}`,
                  onClick: (Y) => ze(se(r.key))
                }, null, 8, ["label", "onClick"])
              ]),
              i("div", co, [
                (t(!0), l(w, null, x(r.rows, (Y) => (t(), l("button", {
                  key: v(Y),
                  type: "button",
                  class: R(["at-dv-card", it.value === v(Y) && "dragging"]),
                  draggable: "true",
                  onDragstart: (ge) => Zt(ge, Y),
                  onDragend: ut,
                  onClick: (ge) => u("open", Y)
                }, [
                  i("span", vo, m(Y[$.value] || "Sans titre"), 1),
                  S.value.some((ge) => !A(be)(A(he)(Y, ge)) || ge.type === "checkbox") ? (t(), l("span", mo, [
                    (t(!0), l(w, null, x(S.value, (ge) => (t(), l(w, {
                      key: ge.key
                    }, [
                      A(be)(A(he)(Y, ge)) ? h("", !0) : (t(), q(Ae, {
                        key: 0,
                        prop: ge,
                        row: Y
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : h("", !0)
                ], 42, po))), 128)),
                i("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (Y) => ze(se(r.key))
                }, [
                  f(O, { name: "plus" }),
                  b(m(d.newLabel), 1)
                ], 8, ho)
              ])
            ], 42, so);
          }), 128)) : (t(), l("div", lo, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : c.value.layout === "list" ? (t(), l("div", fo, [
          H.value.length ? (t(), l("div", yo, [
            (t(!0), l(w, null, x(te.value, (r) => (t(), l(w, {
              key: r.key
            }, [
              X.value ? (t(), l("div", bo, [
                i("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !Fe(r.key),
                  onClick: (_) => Yt(r.key)
                }, [
                  f(O, {
                    name: "chevron-down",
                    class: R({ "at-rot": Fe(r.key) })
                  }, null, 8, ["class"]),
                  r.option ? (t(), q(Ae, {
                    key: 0,
                    prop: X.value,
                    row: se(r.key)
                  }, null, 8, ["prop", "row"])) : (t(), l("span", _o, m(pt.value), 1)),
                  i("span", wo, m(r.rows.length), 1)
                ], 8, ko)
              ])) : h("", !0),
              Fe(r.key) ? h("", !0) : (t(!0), l(w, { key: 1 }, x(r.rows, (_) => (t(), l("button", {
                key: v(_),
                type: "button",
                class: "at-dv-li",
                onClick: (Y) => u("open", _)
              }, [
                i("span", Mo, m(_[$.value] || "Sans titre"), 1),
                i("span", Ao, [
                  (t(!0), l(w, null, x(S.value, (Y) => (t(), l(w, {
                    key: Y.key
                  }, [
                    A(be)(A(he)(_, Y)) ? h("", !0) : (t(), q(Ae, {
                      key: 0,
                      prop: Y,
                      row: _
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, $o))), 128))
            ], 64))), 128)),
            i("div", Co, [
              i("button", {
                type: "button",
                class: "at-dv-new",
                onClick: p[14] || (p[14] = (r) => ze())
              }, [
                f(O, { name: "plus" }),
                b(m(d.newLabel), 1)
              ])
            ])
          ])) : (t(), l("div", go, [
            b("Aucun élément ne correspond à cette vue."),
            f(J, {
              size: "sm",
              icon: "plus",
              onClick: p[13] || (p[13] = (r) => ze())
            }, {
              default: B(() => [
                b(m(d.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (t(), l(w, { key: 4 }, [
          i("div", So, [
            i("span", Vo, m(A(el)(dt.value)), 1),
            f(J, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: p[15] || (p[15] = (r) => c.value.month = A(la)(dt.value, -1))
            }),
            f(J, {
              size: "sm",
              onClick: p[16] || (p[16] = (r) => c.value.month = A(Oe)().slice(0, 7))
            }, {
              default: B(() => [
                b("Aujourd’hui")
              ]),
              _: 1
            }),
            f(J, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: p[17] || (p[17] = (r) => c.value.month = A(la)(dt.value, 1))
            }),
            i("span", To, [
              ke.value ? (t(), l(w, { key: 0 }, [
                b("Par " + m(g.value[ke.value].name.toLowerCase()), 1),
                ea.value ? (t(), l(w, { key: 0 }, [
                  b(" · " + m(ea.value) + " sans date", 1)
                ], 64)) : h("", !0)
              ], 64)) : (t(), l(w, { key: 1 }, [
                b("Aucune propriété date")
              ], 64))
            ])
          ]),
          i("div", Lo, [
            i("div", Do, [
              (t(), l(w, null, x(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (r) => i("div", {
                key: r,
                class: "at-dv-dow"
              }, m(r), 1)), 64))
            ]),
            i("div", zo, [
              (t(!0), l(w, null, x(Wa.value, (r) => (t(), l("div", {
                key: r.iso,
                class: R(["at-dv-day", r.outside && "out", r.today && "today", Ue.value === r.iso && "over"]),
                onDragover: re((_) => Ue.value = r.iso, ["prevent"]),
                onDrop: re((_) => Ga(r.iso), ["prevent"])
              }, [
                i("div", Oo, [
                  i("span", null, m(r.day), 1),
                  ke.value ? (t(), l("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${A(_t)(r.iso)}`,
                    onClick: (_) => ze({ [ke.value]: r.iso })
                  }, [
                    f(O, { name: "plus" })
                  ], 8, Bo)) : h("", !0)
                ]),
                (t(!0), l(w, null, x(r.rows, (_) => (t(), l("button", {
                  key: v(_),
                  type: "button",
                  class: R(["at-dv-calitem", Za(_) && "done"]),
                  draggable: "true",
                  onDragstart: (Y) => Zt(Y, _),
                  onDragend: ut,
                  onClick: (Y) => u("open", _)
                }, [
                  i("span", {
                    class: "dot",
                    style: ce({ background: Ja(_) })
                  }, null, 4),
                  i("span", null, m(_[$.value] || "Sans titre"), 1)
                ], 42, Qo))), 128))
              ], 42, Eo))), 128))
            ])
          ])
        ], 64)),
        f(_e, {
          open: A(Ve),
          "onUpdate:open": p[18] || (p[18] = (r) => Pe(Ve) ? Ve.value = r : null),
          anchor: P.value
        }, {
          default: B(() => [
            i("div", Io, [
              xo,
              (t(!0), l(w, null, x(A(vt), (r) => (t(), l("button", {
                key: r.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (_) => At(r.value)
              }, [
                f(O, {
                  name: r.icon
                }, null, 8, ["name"]),
                b(m(r.label), 1)
              ], 8, Fo))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(_e, {
          open: A(de),
          "onUpdate:open": p[19] || (p[19] = (r) => Pe(de) ? de.value = r : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", Uo, [
              Po,
              c.value.locked ? (t(), l("div", No, [
                i("p", Ho, [
                  f(O, { name: "lock" }),
                  b("Vue système : ses filtres ne se modifient pas.")
                ]),
                ne.value.length ? h("", !0) : (t(), l("span", qo, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), l(w, null, x(ne.value, (r) => (t(), l("div", {
                  key: r.id,
                  class: "at-dv-chip is-static"
                }, [
                  f(O, { name: "filter" }),
                  b(m(Me(r).name) + " " + m(Me(r).op) + " ", 1),
                  i("b", null, m(Me(r).val), 1)
                ]))), 128))
              ])) : (t(), l("div", Ko, [
                c.value.filters.length ? h("", !0) : (t(), l("span", Ro, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), l(w, null, x(c.value.filters, (r) => (t(), l("div", {
                  key: r.id,
                  class: "at-rule"
                }, [
                  i("div", jo, [
                    ee(i("select", {
                      "onUpdate:modelValue": (_) => r.prop = _,
                      "aria-label": "Propriété",
                      onChange: (_) => T(r)
                    }, [
                      (t(!0), l(w, null, x(d.schema, (_) => (t(), l("option", {
                        key: _.key,
                        value: _.key
                      }, m(_.name), 9, Wo))), 128))
                    ], 40, Go), [
                      [Ne, r.prop]
                    ]),
                    f(O, { name: "chevron-down" })
                  ]),
                  i("div", Yo, [
                    ee(i("select", {
                      "onUpdate:modelValue": (_) => r.op = _,
                      "aria-label": "Condition"
                    }, [
                      (t(!0), l(w, null, x(ae(r), (_) => (t(), l("option", {
                        key: _,
                        value: _
                      }, m(A(na)[_]), 9, Zo))), 128))
                    ], 8, Jo), [
                      [Ne, r.op]
                    ]),
                    f(O, { name: "chevron-down" })
                  ]),
                  $e(r) ? (t(), l(w, { key: 0 }, [
                    De(r) === "options" ? (t(), l("div", Xo, [
                      ee(i("select", {
                        "onUpdate:modelValue": (_) => r.value = _,
                        "aria-label": "Valeur"
                      }, [
                        tr,
                        g.value[r.prop].type === "person" ? (t(), l("option", {
                          key: 0,
                          value: A(Ft)
                        }, "Moi", 8, ar)) : h("", !0),
                        (t(!0), l(w, null, x(A(Re)(g.value[r.prop]), (_) => (t(), l("option", {
                          key: _.value,
                          value: _.value
                        }, m(_.label), 9, nr))), 128))
                      ], 8, er), [
                        [Ne, r.value]
                      ]),
                      f(O, { name: "chevron-down" })
                    ])) : De(r) === "date" ? ee((t(), l("input", {
                      key: 1,
                      "onUpdate:modelValue": (_) => r.value = _,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, lr)), [
                      [Ce, r.value]
                    ]) : De(r) === "number" ? ee((t(), l("input", {
                      key: 2,
                      "onUpdate:modelValue": (_) => r.value = _,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, sr)), [
                      [Ce, r.value]
                    ]) : ee((t(), l("input", {
                      key: 3,
                      "onUpdate:modelValue": (_) => r.value = _,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, or)), [
                      [Ce, r.value]
                    ])
                  ], 64)) : (t(), l("span", rr)),
                  f(J, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (_) => Gt(c.value.filters, r)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ])),
              c.value.locked ? h("", !0) : (t(), l("div", ir, [
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: C
                }, {
                  default: B(() => [
                    b("Ajouter un filtre")
                  ]),
                  _: 1
                })
              ]))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(_e, {
          open: A(Ge),
          "onUpdate:open": p[20] || (p[20] = (r) => Pe(Ge) ? Ge.value = r : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", ur, [
              dr,
              i("div", cr, [
                c.value.sorts.length ? h("", !0) : (t(), l("span", pr, "Aucun tri : ordre des données.")),
                (t(!0), l(w, null, x(c.value.sorts, (r) => (t(), l("div", {
                  key: r.id,
                  class: "at-rule sort"
                }, [
                  i("div", vr, [
                    ee(i("select", {
                      "onUpdate:modelValue": (_) => r.prop = _,
                      "aria-label": "Propriété"
                    }, [
                      (t(!0), l(w, null, x(d.schema, (_) => (t(), l("option", {
                        key: _.key,
                        value: _.key
                      }, m(_.name), 9, hr))), 128))
                    ], 8, mr), [
                      [Ne, r.prop]
                    ]),
                    f(O, { name: "chevron-down" })
                  ]),
                  i("div", fr, [
                    ee(i("select", {
                      "onUpdate:modelValue": (_) => r.dir = _,
                      "aria-label": "Sens"
                    }, kr, 8, gr), [
                      [Ne, r.dir]
                    ]),
                    f(O, { name: "chevron-down" })
                  ]),
                  f(J, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (_) => Gt(c.value.sorts, r)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              i("div", _r, [
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Ba
                }, {
                  default: B(() => [
                    b("Ajouter un tri")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(_e, {
          open: A(xe),
          "onUpdate:open": p[22] || (p[22] = (r) => Pe(xe) ? xe.value = r : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", wr, [
              i("div", $r, m(c.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              c.value.layout !== "board" ? (t(), l("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: p[21] || (p[21] = (r) => Vt(null))
              }, [
                f(O, { name: "x" }),
                b("Aucun groupe"),
                c.value.groupBy ? h("", !0) : (t(), q(O, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : h("", !0),
              (t(!0), l(w, null, x(y.value, (r) => (t(), l("button", {
                key: r.key,
                type: "button",
                class: "at-menu-item",
                onClick: (_) => Vt(r.key)
              }, [
                f(O, {
                  name: A(ht)(r)
                }, null, 8, ["name"]),
                b(m(r.name), 1),
                W.value === r.key ? (t(), q(O, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : h("", !0)
              ], 8, Mr))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(_e, {
          open: A(We),
          "onUpdate:open": p[26] || (p[26] = (r) => Pe(We) ? We.value = r : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", Ar, [
              Cr,
              (t(!0), l(w, null, x(F.value, (r, _) => (t(), l("div", {
                key: r.key,
                class: R(["at-menu-item", "at-pi", rt.value === _ && "drop"]),
                draggable: r.type !== "title",
                onDragstart: (Y) => Je.value = _,
                onDragover: re((Y) => rt.value = _, ["prevent"]),
                onDrop: re((Y) => Fa(_), ["prevent"]),
                onDragend: p[23] || (p[23] = (Y) => {
                  Je.value = null, rt.value = null;
                })
              }, [
                f(O, {
                  name: "grip",
                  class: "grip"
                }),
                f(O, {
                  name: A(ht)(r)
                }, null, 8, ["name"]),
                i("span", Vr, m(r.name), 1),
                i("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${r.name}`,
                  checked: r.type === "title" || !c.value.hidden.includes(r.key),
                  disabled: r.type === "title",
                  onChange: (Y) => xa(r)
                }, null, 40, Tr)
              ], 42, Sr))), 128)),
              Lr,
              i("div", Dr, [
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[24] || (p[24] = (r) => Wt(!0))
                }, {
                  default: B(() => [
                    b("Tout afficher")
                  ]),
                  _: 1
                }),
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[25] || (p[25] = (r) => Wt(!1))
                }, {
                  default: B(() => [
                    b("Tout masquer")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(_e, {
          open: A(Ye),
          "onUpdate:open": p[30] || (p[30] = (r) => Pe(Ye) ? Ye.value = r : null),
          anchor: P.value
        }, {
          default: B(() => [
            i("div", zr, [
              Er,
              c.value.locked ? (t(), l(w, { key: 0 }, [
                i("span", Or, m(c.value.name), 1),
                i("p", Br, [
                  f(O, { name: "lock" }),
                  b("Vue système : ni renommée ni supprimée, filtres fixes.")
                ])
              ], 64)) : ee((t(), l("input", {
                key: 1,
                "onUpdate:modelValue": p[27] || (p[27] = (r) => c.value.name = r),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512)), [
                [Ce, c.value.name]
              ]),
              i("div", Qr, [
                (t(!0), l(w, null, x(A(vt), (r) => (t(), l("button", {
                  key: r.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": c.value.layout === r.value,
                  onClick: (_) => fe(r.value)
                }, [
                  f(O, {
                    name: r.icon
                  }, null, 8, ["name"]),
                  b(m(r.label), 1)
                ], 8, Ir))), 128))
              ]),
              c.value.layout !== "calendar" ? (t(), l("div", xr, [
                i("span", null, m(c.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                i("div", Fr, [
                  i("select", {
                    value: c.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: p[28] || (p[28] = (r) => Vt(r.target.value || null))
                  }, [
                    c.value.layout !== "board" ? (t(), l("option", Pr, "Aucun")) : h("", !0),
                    (t(!0), l(w, null, x(y.value, (r) => (t(), l("option", {
                      key: r.key,
                      value: r.key
                    }, m(r.name), 9, Nr))), 128))
                  ], 40, Ur),
                  f(O, { name: "chevron-down" })
                ])
              ])) : (t(), l("div", Hr, [
                qr,
                i("div", Kr, [
                  i("select", {
                    value: ke.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: p[29] || (p[29] = (r) => c.value.dateProp = r.target.value)
                  }, [
                    (t(!0), l(w, null, x(U.value, (r) => (t(), l("option", {
                      key: r.key,
                      value: r.key
                    }, m(r.name), 9, jr))), 128))
                  ], 40, Rr),
                  f(O, { name: "chevron-down" })
                ])
              ])),
              d.lockViews ? h("", !0) : (t(), l(w, { key: 4 }, [
                Gr,
                i("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: Ct
                }, [
                  f(O, { name: "copy" }),
                  b("Dupliquer la vue")
                ]),
                c.value.locked ? h("", !0) : (t(), l("button", {
                  key: 0,
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: a.value.length < 2,
                  onClick: St
                }, [
                  f(O, { name: "trash" }),
                  b("Supprimer la vue")
                ], 8, Wr))
              ], 64)),
              d.resettable ? (t(), l(w, { key: 5 }, [
                Yr,
                i("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: k
                }, [
                  f(O, { name: "reset" }),
                  b("Réinitialiser les vues")
                ])
              ], 64)) : h("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(Rt, {
          open: Et.value,
          "onUpdate:open": p[31] || (p[31] = (r) => Et.value = r),
          prop: ((z = ve.value) == null ? void 0 : z.prop) ?? null,
          row: (me = ve.value) == null ? void 0 : me.row,
          anchor: Jt.value,
          onUpdate: p[32] || (p[32] = (r) => ve.value && u("update", ve.value.row, ve.value.prop.key, r)),
          onCreateOption: p[33] || (p[33] = (r) => ve.value && u("createOption", ve.value.prop, r, ve.value.row)),
          onUpdateOption: p[34] || (p[34] = (r, _) => ve.value && u("updateOption", ve.value.prop, r, _, ve.value.row)),
          onDeleteOption: p[35] || (p[35] = (r) => ve.value && u("deleteOption", ve.value.prop, r, ve.value.row))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), Zr = {
  key: 0,
  class: "at-drawer-wrap"
}, Xr = ["aria-label"], ei = { class: "at-drawer__head" }, ti = { class: "at-drawer__crumb" }, ai = /* @__PURE__ */ i("span", { class: "at-spacer" }, null, -1), ni = { class: "at-drawer__body" }, li = /* @__PURE__ */ G({
  __name: "AtDrawer",
  props: /* @__PURE__ */ le({
    label: {},
    width: { default: 580 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(s) {
    const e = ie(s, "open"), n = N();
    let a = null;
    function o(u) {
      u.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return we(e, (u) => {
      var v;
      u ? (a = document.activeElement, document.addEventListener("keydown", o), Le(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.focus();
      })) : (document.removeEventListener("keydown", o), (v = a == null ? void 0 : a.focus) == null || v.call(a));
    }, { immediate: !0 }), lt(() => document.removeEventListener("keydown", o)), (u, v) => (t(), q(wt, { to: "body" }, [
      f(ha, { name: "at-drawer" }, {
        default: B(() => [
          e.value ? (t(), l("div", Zr, [
            i("div", {
              class: "at-overlay",
              onClick: v[0] || (v[0] = (c) => e.value = !1)
            }),
            i("aside", {
              ref_key: "panel",
              ref: n,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": u.label,
              tabindex: "-1",
              style: ce({ width: `min(${u.width}px, 100%)` })
            }, [
              i("header", ei, [
                i("span", ti, [
                  K(u.$slots, "crumb", {}, () => [
                    b(m(u.label), 1)
                  ])
                ]),
                ai,
                K(u.$slots, "actions"),
                f(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: v[1] || (v[1] = (c) => e.value = !1)
                })
              ]),
              i("div", ni, [
                K(u.$slots, "default")
              ])
            ], 12, Xr)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), si = ["aria-label"], oi = {
  key: 0,
  class: "at-menu-label"
}, $a = /* @__PURE__ */ G({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(s) {
    const e = N();
    function n(a) {
      var c;
      const o = [...((c = e.value) == null ? void 0 : c.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!o.length) return;
      const u = o.indexOf(document.activeElement), v = (g) => {
        a.preventDefault(), o[(g + o.length) % o.length].focus();
      };
      a.key === "ArrowDown" ? v(u + 1) : a.key === "ArrowUp" ? v(u < 0 ? o.length - 1 : u - 1) : a.key === "Home" ? v(0) : a.key === "End" && v(o.length - 1);
    }
    return (a, o) => (t(), l("div", {
      ref_key: "el",
      ref: e,
      class: "at-menu",
      role: "menu",
      "aria-label": a.label,
      style: ce(a.minWidth ? { minWidth: a.minWidth + "px" } : void 0),
      onKeydown: n
    }, [
      a.label ? (t(), l("div", oi, m(a.label), 1)) : h("", !0),
      K(a.$slots, "default")
    ], 44, si));
  }
}), Ma = /* @__PURE__ */ G({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    minWidth: { default: 220 }
  },
  setup(s) {
    const e = N(!1);
    function n(a) {
      a.target.closest('.at-menu-item[role="menuitem"]') && (e.value = !1);
    }
    return (a, o) => (t(), q(_e, {
      open: e.value,
      "onUpdate:open": o[0] || (o[0] = (u) => e.value = u),
      align: a.align,
      placement: a.placement
    }, {
      trigger: B((u) => [
        K(a.$slots, "trigger", an(nn(u)))
      ]),
      default: B(() => [
        f($a, {
          label: a.label,
          "min-width": a.minWidth,
          onClick: n
        }, {
          default: B(() => [
            K(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align", "placement"]));
  }
}), ri = { class: "at-empty" }, ii = /* @__PURE__ */ G({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(s) {
    return (e, n) => (t(), l("div", ri, [
      K(e.$slots, "default", {}, () => [
        b(m(e.message), 1)
      ]),
      K(e.$slots, "action")
    ]));
  }
}), ui = { class: "at-field" }, di = ["for"], ci = ["id"], pi = ["id"], Pt = /* @__PURE__ */ G({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(s) {
    const n = s.id ?? je("field");
    return (a, o) => (t(), l("div", ui, [
      a.label ? (t(), l("label", {
        key: 0,
        class: "at-label",
        for: A(n)
      }, m(a.label), 9, di)) : h("", !0),
      K(a.$slots, "default", {
        id: A(n),
        invalid: !!a.error,
        describedby: a.error || a.hint ? A(n) + "-hint" : void 0
      }),
      a.error ? (t(), l("span", {
        key: 1,
        id: A(n) + "-hint",
        class: "at-hint at-hint--error"
      }, m(a.error), 9, ci)) : a.hint ? (t(), l("span", {
        key: 2,
        id: A(n) + "-hint",
        class: "at-hint"
      }, m(a.hint), 9, pi)) : h("", !0)
    ]));
  }
}), vi = ["role", "aria-label", "aria-hidden"], Aa = /* @__PURE__ */ G({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: R(["at-tile", e.size !== "sm" && `at-tile--${e.size}`, e.color === "neutral" ? "at-tile--neutral" : `at-tone-${e.color}`]),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true"
    }, [
      f(O, { name: e.name }, null, 8, ["name"])
    ], 10, vi));
  }
}), mi = {
  key: 0,
  class: "at-input-wrap"
}, hi = ["type", "placeholder", "disabled", "aria-invalid"], fi = ["type", "placeholder", "disabled", "aria-invalid"], Nt = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "AtInput",
  props: /* @__PURE__ */ le({
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
    const n = ie(s, "modelValue"), a = s, o = N();
    return e({ focus: () => {
      var u;
      return (u = o.value) == null ? void 0 : u.focus();
    }, el: o }), (u, v) => u.icon || u.kbd ? (t(), l("div", mi, [
      u.icon ? (t(), q(O, {
        key: 0,
        name: u.icon
      }, null, 8, ["name"])) : h("", !0),
      ee(i("input", ye(u.$attrs, {
        ref_key: "el",
        ref: o,
        "onUpdate:modelValue": v[0] || (v[0] = (c) => n.value = c),
        class: "at-input",
        style: a.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: u.type,
        placeholder: u.placeholder,
        disabled: u.disabled,
        "aria-invalid": u.invalid || void 0
      }), null, 16, hi), [
        [xt, n.value]
      ]),
      u.kbd ? (t(), q(Te, { key: 1 }, {
        default: B(() => [
          b(m(u.kbd), 1)
        ]),
        _: 1
      })) : h("", !0)
    ])) : ee((t(), l("input", ye({ key: 1 }, u.$attrs, {
      ref_key: "el",
      ref: o,
      "onUpdate:modelValue": v[1] || (v[1] = (c) => n.value = c),
      class: "at-input",
      style: a.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: u.type,
      placeholder: u.placeholder,
      disabled: u.disabled,
      "aria-invalid": u.invalid || void 0
    }), null, 16, fi)), [
      [xt, n.value]
    ]);
  }
}), ra = '.at-pop, [aria-modal="true"]', gi = { esc: "escape", space: " ", del: "delete", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", return: "enter" }, Ca = () => typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "");
function Sa(s) {
  const e = s.toLowerCase().split("+");
  let n = e.pop() ?? "";
  n === "" && e.length && (e.pop(), n = "+");
  const a = { key: gi[n] ?? n, mod: !1, ctrl: !1, meta: !1, alt: !1, shift: !1 };
  for (const o of e)
    o === "mod" || o === "ctrl" || o === "meta" || o === "alt" || o === "shift" ? a[o] = !0 : o === "cmd" ? a.meta = !0 : o === "option" && (a.alt = !0);
  return a;
}
function yi(s, e, n = Ca()) {
  var L;
  if ((s.key ?? "").toLowerCase() !== e.key) return !1;
  const o = e.ctrl || e.mod && !n, u = e.meta || e.mod && n, v = e.key.length === 1;
  return (v && !!((L = s.getModifierState) != null && L.call(s, "AltGraph")) ? !1 : s.ctrlKey) !== o || s.metaKey !== u || (e.alt ? !s.altKey : s.altKey && !v) ? !1 : e.shift ? s.shiftKey : e.key.length === 1 || !s.shiftKey;
}
function Dd(s, e = Ca()) {
  const n = Sa(s), o = {
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
  }[n.key] ?? n.key.toUpperCase(), u = [];
  return (n.ctrl || n.mod && !e) && u.push(e ? "⌃" : "Ctrl"), n.alt && u.push(e ? "⌥" : "Alt"), n.shift && u.push(e ? "⇧" : "Maj"), (n.meta || n.mod && e) && u.push("⌘"), e ? u.join("") + o : [...u, o].join(" ");
}
const bi = (s) => {
  var n;
  const e = s;
  return !e || !e.tagName ? !1 : e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable || ((n = e.closest) == null ? void 0 : n.call(e, '[contenteditable=""], [contenteditable="true"]')) != null;
}, ki = 'button, a[href], summary, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="switch"], [role="option"]', _i = (s, e) => {
  var n;
  return (s.key === "Enter" || s.key === " ") && !s.ctrlKey && !s.metaKey && !!((n = e == null ? void 0 : e.closest) != null && n.call(e, ki));
}, Qe = [];
let mt = !1;
function ia(s) {
  var u;
  if (s.defaultPrevented || s.isComposing) return;
  const e = s.target, n = bi(e), a = typeof document < "u" && document.querySelector(ra) != null, o = !!((u = e == null ? void 0 : e.closest) != null && u.call(e, ra));
  if (!_i(s, e))
    for (let v = Qe.length - 1; v >= 0; v--) {
      const c = Qe[v];
      if (c.combos.some((g) => yi(s, g)) && !(n && !c.opts.allowInInput) && !(a && !(n && c.opts.allowInInput && o)) && !(c.opts.when && !c.opts.when())) {
        s.preventDefault(), c.handler(s);
        return;
      }
    }
}
function ua() {
  typeof document > "u" || (Qe.length && !mt ? (document.addEventListener("keydown", ia), mt = !0) : !Qe.length && mt && (document.removeEventListener("keydown", ia), mt = !1));
}
function Qt(s, e, n = {}) {
  const a = { combos: (Array.isArray(s) ? s : [s]).map(Sa), handler: e, opts: n };
  Qe.push(a), ua();
  const o = () => {
    const u = Qe.indexOf(a);
    u >= 0 && (Qe.splice(u, 1), ua());
  };
  return fa() && lt(o), o;
}
const wi = ["aria-label", "aria-activedescendant"], $i = ["id", "aria-selected", "onClick", "onDblclick"], Mi = {
  key: 0,
  class: "at-list__empty"
}, Ai = /* @__PURE__ */ G({
  __name: "AtList",
  props: /* @__PURE__ */ le({
    items: {},
    rowKey: { type: [String, Function] },
    global: { type: Boolean },
    label: {}
  }, {
    active: { default: null },
    activeModifiers: {}
  }),
  emits: /* @__PURE__ */ le(["open"], ["update:active"]),
  setup(s, { expose: e, emit: n }) {
    const a = s, o = ie(s, "active"), u = n, v = N(), c = je("at-list"), g = (D) => typeof a.rowKey == "function" ? a.rowKey(D) : String(D == null ? void 0 : D[a.rowKey]), L = V(() => a.items.map(g)), $ = V(() => o.value == null ? -1 : L.value.indexOf(o.value)), F = (D) => `${c}-${D}`, E = (D) => {
      const I = D;
      return String((I == null ? void 0 : I.label) ?? (I == null ? void 0 : I.title) ?? (I == null ? void 0 : I.name) ?? g(D));
    };
    function S(D) {
      const I = L.value.length;
      if (!I) return;
      const H = $.value, W = H < 0 ? D > 0 ? 0 : I - 1 : Math.max(0, Math.min(I - 1, H + D));
      o.value = L.value[W];
    }
    function y(D) {
      L.value.length && (o.value = L.value[Math.max(0, Math.min(L.value.length - 1, D))]);
    }
    function U() {
      const D = $.value;
      D >= 0 && u("open", a.items[D]);
    }
    function Z(D) {
      if (D.ctrlKey || D.metaKey || D.altKey) return;
      const I = D.key.toLowerCase();
      if (I === "arrowdown" || I === "j") S(1);
      else if (I === "arrowup" || I === "k") S(-1);
      else if (I === "home") y(0);
      else if (I === "end") y(L.value.length - 1);
      else if (I === "enter") U();
      else return;
      D.preventDefault();
    }
    if (a.global) {
      const D = () => a.items.length > 0;
      Qt(["j", "arrowdown"], () => S(1), { when: D }), Qt(["k", "arrowup"], () => S(-1), { when: D }), Qt("enter", U, { when: () => $.value >= 0 });
    }
    return we($, (D) => {
      D < 0 || Le(() => {
        var I, H;
        return (H = (I = document.getElementById(F(D))) == null ? void 0 : I.scrollIntoView) == null ? void 0 : H.call(I, { block: "nearest" });
      });
    }), e({ focus: () => {
      var D;
      return (D = v.value) == null ? void 0 : D.focus();
    }, move: S }), (D, I) => (t(), l("div", {
      ref_key: "el",
      ref: v,
      class: "at-list",
      role: "listbox",
      tabindex: "0",
      "aria-label": D.label,
      "aria-activedescendant": $.value >= 0 ? F($.value) : void 0,
      onKeydown: Z
    }, [
      (t(!0), l(w, null, x(D.items, (H, W) => (t(), l("div", {
        id: F(W),
        key: L.value[W],
        class: R(["at-list__item", W === $.value && "is-active"]),
        role: "option",
        "aria-selected": W === $.value,
        onClick: (X) => o.value = L.value[W],
        onDblclick: (X) => u("open", H)
      }, [
        K(D.$slots, "item", {
          item: H,
          active: W === $.value,
          index: W
        }, () => [
          b(m(E(H)), 1)
        ])
      ], 42, $i))), 128)),
      D.items.length ? h("", !0) : (t(), l("div", Mi, [
        K(D.$slots, "empty", {}, () => [
          b("Aucun élément")
        ])
      ]))
    ], 40, wi));
  }
}), It = {
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
}, Ci = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", Ht = {
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
function zd(s) {
  Object.assign(Ht, s);
}
const Ed = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, Si = ["role", "aria-label", "aria-hidden"], Vi = ["viewBox", "width", "height"], Ti = ["d"], Li = ["stroke-width", "innerHTML"], Di = {
  key: 0,
  class: "at-logo__name"
}, zi = /* @__PURE__ */ G({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(s) {
    const e = s, n = V(() => Ht[e.app] ?? Ht.atelier), a = V(() => e.name ?? n.value.name), o = V(() => Math.max(16, e.size)), u = V(() => ({
      "--at-logo-size": o.value + "px",
      "--at-logo-fill": `var(--${n.value.color})`
    }));
    return (v, c) => (t(), l("span", {
      class: R(["at-logo", v.wordmark && "at-logo--wordmark"]),
      style: ce(u.value),
      role: !v.wordmark && v.label ? "img" : void 0,
      "aria-label": v.wordmark ? void 0 : v.label,
      "aria-hidden": !v.wordmark && !v.label ? "true" : void 0
    }, [
      (t(), l("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${A(It).size} ${A(It).size}`,
        width: o.value,
        height: o.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        i("path", {
          class: "at-logo__tile",
          d: A(Ci)
        }, null, 8, Ti),
        i("g", {
          class: "at-logo__glyph",
          "stroke-width": A(It).stroke,
          innerHTML: n.value.glyph
        }, null, 8, Li)
      ], 8, Vi)),
      v.wordmark ? (t(), l("span", Di, m(a.value), 1)) : h("", !0)
    ], 14, Si));
  }
}), Ei = { class: "at-login__panel" }, Oi = {
  key: 0,
  class: "at-login__brand"
}, Bi = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, Qi = ["aria-labelledby"], Ii = { class: "at-login__head" }, xi = ["id"], Fi = {
  key: 0,
  class: "at-login__desc"
}, Ui = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, Pi = /* @__PURE__ */ i("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ i("span", null, "ou")
], -1), Ni = {
  key: 1,
  class: "at-login__foot"
}, Hi = /* @__PURE__ */ G({
  __name: "AtLogin",
  props: /* @__PURE__ */ le({
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
  emits: /* @__PURE__ */ le(["submit", "passkey"], ["update:username", "update:password", "update:remember"]),
  setup(s, { expose: e, emit: n }) {
    const a = ie(s, "username"), o = ie(s, "password"), u = ie(s, "remember"), v = s, c = n, g = je("login"), L = V(() => v.loading !== !1), $ = V(() => {
      var y;
      return (v.mark ?? ((y = v.brand) == null ? void 0 : y.trim().charAt(0)) ?? "").toUpperCase();
    }), F = N(), E = N();
    function S() {
      var y, U;
      if (!L.value) {
        if (!a.value.trim()) return (y = F.value) == null ? void 0 : y.focus();
        if (!o.value) return (U = E.value) == null ? void 0 : U.focus();
        c("submit", { username: a.value.trim(), password: o.value, remember: u.value });
      }
    }
    return e({
      focusUsername: () => {
        var y;
        return (y = F.value) == null ? void 0 : y.focus();
      },
      focusPassword: () => {
        var y;
        return (y = E.value) == null ? void 0 : y.focus();
      }
    }), (y, U) => (t(), q(ma(y.as), { class: "at-login" }, {
      default: B(() => [
        i("div", Ei, [
          y.brand || y.$slots.brand ? (t(), l("div", Oi, [
            K(y.$slots, "brand", {}, () => [
              i("span", Bi, m($.value), 1),
              b(m(y.brand), 1)
            ])
          ])) : h("", !0),
          i("section", {
            class: "at-login__card",
            "aria-labelledby": A(g)
          }, [
            i("header", Ii, [
              i("h1", {
                id: A(g),
                class: "at-login__title"
              }, m(y.title), 9, xi),
              y.description ? (t(), l("p", Fi, m(y.description), 1)) : h("", !0)
            ]),
            y.error ? (t(), l("p", Ui, m(y.error), 1)) : h("", !0),
            K(y.$slots, "default", {}, () => [
              i("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: re(S, ["prevent"])
              }, [
                f(Pt, { label: y.usernameLabel }, {
                  default: B((Z) => [
                    f(Nt, {
                      id: Z.id,
                      ref_key: "usernameInput",
                      ref: F,
                      modelValue: a.value,
                      "onUpdate:modelValue": U[0] || (U[0] = (D) => a.value = D),
                      name: "username",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: "false",
                      disabled: L.value,
                      invalid: !!y.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(Pt, { label: y.passwordLabel }, {
                  default: B((Z) => [
                    f(Nt, {
                      id: Z.id,
                      ref_key: "passwordInput",
                      ref: E,
                      modelValue: o.value,
                      "onUpdate:modelValue": U[1] || (U[1] = (D) => o.value = D),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: L.value,
                      invalid: !!y.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                y.rememberable ? (t(), q(ya, {
                  key: 0,
                  modelValue: u.value,
                  "onUpdate:modelValue": U[2] || (U[2] = (Z) => u.value = Z),
                  label: y.rememberLabel,
                  disabled: L.value
                }, null, 8, ["modelValue", "label", "disabled"])) : h("", !0),
                f(J, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "at-login__submit",
                  loading: y.loading === !0 || y.loading === "password",
                  disabled: L.value
                }, {
                  default: B(() => [
                    b(m(y.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 32),
              y.passkey ? (t(), l(w, { key: 0 }, [
                Pi,
                f(J, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: y.loading === "passkey",
                  disabled: L.value,
                  onClick: U[3] || (U[3] = (Z) => c("passkey"))
                }, {
                  default: B(() => [
                    b(m(y.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : h("", !0)
            ])
          ], 8, Qi),
          y.$slots.footer ? (t(), l("footer", Ni, [
            K(y.$slots, "footer")
          ])) : h("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), qi = ["role", "aria-checked", "disabled"], Ki = {
  key: 2,
  class: "at-menu-meta"
}, He = /* @__PURE__ */ G({
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
      class: R(["at-menu-item", e.danger && "at-menu-item--danger"]),
      role: e.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": e.checked !== void 0 ? e.checked : void 0,
      disabled: e.disabled,
      onClick: n[0] || (n[0] = (a) => e.$emit("select", a))
    }, [
      e.icon ? (t(), q(O, {
        key: 0,
        name: e.icon
      }, null, 8, ["name"])) : h("", !0),
      K(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ]),
      e.kbd ? (t(), q(Te, { key: 1 }, {
        default: B(() => [
          b(m(e.kbd), 1)
        ]),
        _: 1
      })) : e.meta ? (t(), l("span", Ki, m(e.meta), 1)) : e.checked ? (t(), q(O, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : h("", !0)
    ], 10, qi));
  }
}), Ri = {}, ji = { class: "at-menu-label" };
function Gi(s, e) {
  return t(), l("div", ji, [
    K(s.$slots, "default")
  ]);
}
const qt = /* @__PURE__ */ $t(Ri, [["render", Gi]]), Wi = {}, Yi = {
  class: "at-menu-sep",
  role: "separator"
};
function Ji(s, e) {
  return t(), l("div", Yi);
}
const ft = /* @__PURE__ */ $t(Wi, [["render", Ji]]), Zi = {
  key: 0,
  class: "at-modal-wrap"
}, Xi = ["aria-label"], eu = { class: "at-modal__head" }, tu = { style: { flex: "1", "min-width": "0" } }, au = { class: "at-modal__title" }, nu = {
  key: 0,
  class: "at-modal__desc"
}, lu = { class: "at-modal__body" }, su = {
  key: 0,
  class: "at-modal__foot"
}, ou = /* @__PURE__ */ G({
  __name: "AtModal",
  props: /* @__PURE__ */ le({
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
    const e = ie(s, "open"), n = N();
    let a = null;
    function o(u) {
      u.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return we(e, (u) => {
      var v;
      u ? (a = document.activeElement, document.addEventListener("keydown", o), Le(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.focus();
      })) : (document.removeEventListener("keydown", o), (v = a == null ? void 0 : a.focus) == null || v.call(a));
    }, { immediate: !0 }), lt(() => document.removeEventListener("keydown", o)), (u, v) => (t(), q(wt, { to: "body" }, [
      f(ha, { name: "at-modal" }, {
        default: B(() => [
          e.value ? (t(), l("div", Zi, [
            i("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: v[0] || (v[0] = (c) => u.dismissible && (e.value = !1))
            }),
            i("div", {
              ref_key: "panel",
              ref: n,
              class: R(["at-modal", u.size !== "md" && `at-modal--${u.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": u.title,
              tabindex: "-1"
            }, [
              i("header", eu, [
                i("div", tu, [
                  i("h2", au, m(u.title), 1),
                  u.description ? (t(), l("p", nu, m(u.description), 1)) : h("", !0)
                ]),
                u.dismissible ? (t(), q(J, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: v[1] || (v[1] = (c) => e.value = !1)
                })) : h("", !0)
              ]),
              i("div", lu, [
                K(u.$slots, "default")
              ]),
              u.$slots.footer ? (t(), l("footer", su, [
                K(u.$slots, "footer", {
                  close: () => e.value = !1
                })
              ])) : h("", !0)
            ], 10, Xi)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ru = ["aria-label"], iu = ["aria-expanded", "aria-controls"], uu = { class: "at-ellipsis" }, du = ["id"], cu = {
  key: 0,
  class: "at-nav-label"
}, pu = /* @__PURE__ */ G({
  __name: "AtNavGroup",
  props: /* @__PURE__ */ le({
    label: {},
    collapsible: { type: Boolean },
    mark: {}
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(s) {
    const e = s, n = ie(s, "open"), a = je("at-nav");
    return (o, u) => (t(), l("nav", {
      class: "at-nav",
      "aria-label": o.label
    }, [
      o.label && e.collapsible ? (t(), l(w, { key: 0 }, [
        i("button", {
          type: "button",
          class: "at-nav-label at-nav-toggle",
          "aria-expanded": n.value,
          "aria-controls": A(a),
          onClick: u[0] || (u[0] = (v) => n.value = !n.value)
        }, [
          o.mark ? (t(), l("span", {
            key: 0,
            class: "at-nav-mark",
            style: ce({ background: o.mark })
          }, null, 4)) : h("", !0),
          i("span", uu, m(o.label), 1),
          f(O, {
            name: "chevron-down",
            class: R({ "at-rot": !n.value })
          }, null, 8, ["class"])
        ], 8, iu),
        ee(i("div", {
          id: A(a),
          class: "at-nav-body"
        }, [
          K(o.$slots, "default")
        ], 8, du), [
          [ln, n.value]
        ])
      ], 64)) : (t(), l(w, { key: 1 }, [
        o.label ? (t(), l("div", cu, [
          o.mark ? (t(), l("span", {
            key: 0,
            class: "at-nav-mark",
            style: ce({ background: o.mark })
          }, null, 4)) : h("", !0),
          b(m(o.label), 1)
        ])) : h("", !0),
        K(o.$slots, "default")
      ], 64))
    ], 8, ru));
  }
}), vu = ["href", "aria-current"], mu = { class: "at-ellipsis" }, hu = {
  key: 3,
  class: "at-nav-count"
}, fu = /* @__PURE__ */ G({
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
        style: ce({ background: e.mark })
      }, null, 4)) : e.icon && e.tile ? (t(), q(Aa, {
        key: 1,
        name: e.icon,
        color: e.tile
      }, null, 8, ["name", "color"])) : e.icon ? (t(), q(O, {
        key: 2,
        name: e.icon
      }, null, 8, ["name"])) : h("", !0),
      i("span", mu, [
        K(e.$slots, "default", {}, () => [
          b(m(e.label), 1)
        ])
      ]),
      e.count != null && e.count !== "" ? (t(), l("span", hu, m(e.count), 1)) : h("", !0)
    ], 8, vu));
  }
}), gu = {
  key: 0,
  class: "at-page__head"
}, yu = { class: "t-heading-1" }, bu = { key: 0 }, ku = /* @__PURE__ */ G({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(s) {
    return (e, n) => (t(), l("div", {
      class: R(["at-page", e.wide && "at-page--wide"])
    }, [
      e.title || e.$slots.head ? (t(), l("div", gu, [
        K(e.$slots, "head", {}, () => [
          i("h1", yu, m(e.title), 1),
          e.description ? (t(), l("p", bu, m(e.description), 1)) : h("", !0)
        ])
      ])) : h("", !0),
      K(e.$slots, "default")
    ], 2));
  }
}), _u = { class: "at-proplist" }, wu = ["disabled", "onClick"], $u = /* @__PURE__ */ G({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update", "createOption", "updateOption", "deleteOption"],
  setup(s, { expose: e, emit: n }) {
    const a = s, o = n, u = V(() => a.schema.filter((E) => {
      var S;
      return E.type !== "title" && !((S = a.exclude) != null && S.includes(E.key));
    })), v = N(null), c = N(null), g = N(!1), L = {};
    function $(E, S) {
      if (et(E)) {
        if (E.type === "checkbox") {
          o("update", E.key, !a.row[E.key]);
          return;
        }
        c.value = S, v.value = E, g.value = !0;
      }
    }
    function F(E) {
      var U;
      const S = u.value.find((Z) => Z.key === E);
      if (!S) return;
      const y = L[E] ?? null;
      (U = y == null ? void 0 : y.scrollIntoView) == null || U.call(y, { block: "nearest" }), $(S, y);
    }
    return e({ edit: F }), (E, S) => (t(), l(w, null, [
      i("dl", _u, [
        (t(!0), l(w, null, x(u.value, (y) => (t(), l(w, {
          key: y.key
        }, [
          i("dt", null, [
            f(O, {
              name: A(ht)(y)
            }, null, 8, ["name"]),
            b(m(y.name), 1)
          ]),
          i("dd", null, [
            i("button", {
              ref_for: !0,
              ref: (U) => {
                U ? L[y.key] = U : delete L[y.key];
              },
              type: "button",
              class: "at-proplist__value",
              disabled: !A(et)(y),
              onClick: (U) => $(y, U.currentTarget)
            }, [
              f(Ae, {
                prop: y,
                row: E.row
              }, null, 8, ["prop", "row"])
            ], 8, wu)
          ])
        ], 64))), 128))
      ]),
      f(Rt, {
        open: g.value,
        "onUpdate:open": S[0] || (S[0] = (y) => g.value = y),
        prop: v.value,
        row: E.row,
        anchor: c.value,
        onUpdate: S[1] || (S[1] = (y) => v.value && o("update", v.value.key, y)),
        onCreateOption: S[2] || (S[2] = (y) => v.value && o("createOption", v.value.key, y)),
        onUpdateOption: S[3] || (S[3] = (y, U) => v.value && o("updateOption", v.value.key, y, U)),
        onDeleteOption: S[4] || (S[4] = (y) => v.value && o("deleteOption", v.value.key, y))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), Mu = ["aria-label"], Au = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Cu = /* @__PURE__ */ G({
  __name: "AtSegment",
  props: /* @__PURE__ */ le({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = ie(s, "modelValue");
    return (n, a) => (t(), l("div", {
      class: "at-segment",
      role: "group",
      "aria-label": n.label
    }, [
      (t(!0), l(w, null, x(n.items, (o) => (t(), l("button", {
        key: String(o.value),
        type: "button",
        "aria-pressed": e.value === o.value,
        "aria-label": o.iconOnly ? o.label : void 0,
        title: o.iconOnly ? o.label : void 0,
        disabled: o.disabled,
        onClick: (u) => e.value = o.value
      }, [
        o.icon ? (t(), q(O, {
          key: 0,
          name: o.icon
        }, null, 8, ["name"])) : h("", !0),
        o.iconOnly ? h("", !0) : (t(), l(w, { key: 1 }, [
          b(m(o.label), 1)
        ], 64))
      ], 8, Au))), 128))
    ], 8, Mu));
  }
}), Su = { class: "at-select" }, Vu = ["disabled", "aria-invalid"], Tu = {
  key: 0,
  value: null,
  disabled: ""
}, Lu = ["value", "disabled"], Du = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "AtSelect",
  props: /* @__PURE__ */ le({
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
    const e = ie(s, "modelValue");
    return (n, a) => (t(), l("div", Su, [
      ee(i("select", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
        disabled: n.disabled,
        "aria-invalid": n.invalid || void 0,
        style: n.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        n.placeholder ? (t(), l("option", Tu, m(n.placeholder), 1)) : h("", !0),
        (t(!0), l(w, null, x(n.options, (o) => (t(), l("option", {
          key: String(o.value),
          value: o.value,
          disabled: o.disabled
        }, m(o.label), 9, Lu))), 128))
      ], 16, Vu), [
        [Ne, e.value]
      ]),
      f(O, { name: "chevron-down" })
    ]));
  }
}), zu = {}, Eu = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Ou = {
  key: 0,
  class: "at-sidebar__foot"
};
function Bu(s, e) {
  return t(), l("aside", Eu, [
    K(s.$slots, "header"),
    K(s.$slots, "default"),
    s.$slots.footer ? (t(), l("div", Ou, [
      K(s.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const Qu = /* @__PURE__ */ $t(zu, [["render", Bu]]), Iu = { class: "at-stat__label" }, xu = { class: "at-stat__row" }, Fu = { class: "at-stat__value" }, Uu = ["viewBox"], Pu = ["d"], Nu = ["d"], Hu = ["cx", "cy"], qu = {
  key: 1,
  class: "at-stat__foot"
}, da = 220, Ze = 32, Ku = /* @__PURE__ */ G({
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
    const e = s, n = V(() => {
      const a = e.spark;
      if (!a || a.length < 2) return null;
      const o = Math.min(...a), u = Math.max(...a), v = u - o || 1, c = a.map(($, F) => [2 + F * (da - 4) / (a.length - 1), Ze - 3 - ($ - o) / v * (Ze - 8)]), g = "M" + c.map(($) => $.map((F) => F.toFixed(1)).join(" ")).join(" L"), L = c[c.length - 1];
      return { line: g, area: `${g} L${L[0].toFixed(1)} ${Ze} L2 ${Ze} Z`, end: L };
    });
    return (a, o) => (t(), l("div", {
      class: R(["at-stat", a.color && ["at-stat--striped", `at-tone-${a.color}`]])
    }, [
      i("span", Iu, m(a.label), 1),
      i("div", xu, [
        i("span", Fu, [
          K(a.$slots, "value", {}, () => [
            b(m(a.value), 1)
          ])
        ]),
        a.delta ? (t(), l("span", {
          key: 0,
          class: R(["at-stat__delta", a.trend && `at-stat__delta--${a.trend}`])
        }, m(a.delta), 3)) : h("", !0)
      ]),
      n.value ? (t(), l("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${da} ${Ze}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        i("path", {
          class: "area",
          d: n.value.area
        }, null, 8, Pu),
        i("path", {
          class: "line",
          d: n.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Nu),
        i("circle", {
          class: "end",
          cx: n.value.end[0],
          cy: n.value.end[1],
          r: "2.5"
        }, null, 8, Hu)
      ], 8, Uu)) : h("", !0),
      a.foot || a.$slots.foot ? (t(), l("span", qu, [
        K(a.$slots, "foot", {}, () => [
          b(m(a.foot), 1)
        ])
      ])) : h("", !0)
    ], 2));
  }
}), Ru = {
  key: 0,
  class: "at-toggle"
}, ju = ["disabled"], Gu = ["disabled"], Wu = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "AtSwitch",
  props: /* @__PURE__ */ le({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = ie(s, "modelValue");
    return (n, a) => n.label || n.$slots.default ? (t(), l("label", Ru, [
      ee(i("input", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: n.disabled
      }), null, 16, ju), [
        [gt, e.value]
      ]),
      K(n.$slots, "default", {}, () => [
        b(m(n.label), 1)
      ])
    ])) : ee((t(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": a[1] || (a[1] = (o) => e.value = o),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: n.disabled
    }), null, 16, Gu)), [
      [gt, e.value]
    ]);
  }
}), Yu = { class: "at-table-wrap" }, Ju = { class: "at-table" }, Zu = ["onClick"], Xu = { key: 0 }, ed = ["colspan"], td = /* @__PURE__ */ G({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(s) {
    return (e, n) => (t(), l("div", Yu, [
      i("table", Ju, [
        i("thead", null, [
          i("tr", null, [
            (t(!0), l(w, null, x(e.columns, (a) => (t(), l("th", {
              key: a.key,
              class: R({ "at-num": a.align === "right" }),
              style: ce(a.width ? { width: a.width } : void 0)
            }, m(a.label), 7))), 128))
          ])
        ]),
        i("tbody", null, [
          (t(!0), l(w, null, x(e.rows, (a, o) => (t(), l("tr", {
            key: e.rowKey ? a[e.rowKey] : o,
            style: ce(e.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (u) => e.$emit("rowClick", a)
          }, [
            (t(!0), l(w, null, x(e.columns, (u) => (t(), l("td", {
              key: u.key,
              class: R({ "at-num": u.align === "right" })
            }, [
              K(e.$slots, `cell-${u.key}`, {
                row: a,
                value: a[u.key]
              }, () => [
                b(m(u.format ? u.format(a[u.key], a) : a[u.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Zu))), 128)),
          e.rows.length ? h("", !0) : (t(), l("tr", Xu, [
            i("td", {
              colspan: e.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, m(e.empty ?? "Aucune donnée"), 9, ed)
          ]))
        ])
      ])
    ]));
  }
}), ad = ["aria-label"], nd = ["aria-selected", "disabled", "onClick"], ld = {
  key: 1,
  class: "at-count"
}, sd = /* @__PURE__ */ G({
  __name: "AtTabs",
  props: /* @__PURE__ */ le({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = ie(s, "modelValue");
    return (n, a) => (t(), l("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": n.label
    }, [
      (t(!0), l(w, null, x(n.items, (o) => (t(), l("button", {
        key: String(o.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": e.value === o.value,
        disabled: o.disabled,
        onClick: (u) => e.value = o.value
      }, [
        o.icon ? (t(), q(O, {
          key: 0,
          name: o.icon
        }, null, 8, ["name"])) : h("", !0),
        b(m(o.label) + " ", 1),
        o.count != null ? (t(), l("span", ld, m(o.count), 1)) : h("", !0)
      ], 8, nd))), 128))
    ], 8, ad));
  }
}), od = /* @__PURE__ */ G({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: R(["at-tag", e.color !== "gray" && `at-tag--${e.color}`])
    }, [
      K(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ])
    ], 2));
  }
}), rd = ["rows", "placeholder", "disabled", "aria-invalid"], id = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "AtTextarea",
  props: /* @__PURE__ */ le({
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
    const e = ie(s, "modelValue");
    return (n, a) => ee((t(), l("textarea", ye(n.$attrs, {
      "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value = o),
      class: "at-input",
      rows: n.rows ?? 3,
      placeholder: n.placeholder,
      disabled: n.disabled,
      "aria-invalid": n.invalid || void 0
    }), null, 16, rd)), [
      [Ce, e.value]
    ]);
  }
}), Va = 3, Ie = on([]), at = /* @__PURE__ */ new Map();
let ud = 0, nt = !1;
function dd(s) {
  const e = at.get(s);
  !e || e.handle || nt || (e.started = Date.now(), e.handle = setTimeout(() => Mt(s), e.remaining));
}
function jt() {
  Ie.slice(0, Va).forEach((s) => dd(s.id));
}
function cd(s) {
  const e = ++ud, n = s.duration ?? 5e3;
  return Ie.push({ id: e, message: s.message, tone: s.tone ?? "neutral", action: s.action, duration: n }), n > 0 && at.set(e, { handle: null, remaining: n, started: 0 }), jt(), e;
}
function Mt(s) {
  const e = s == null ? Ie.map((n) => n.id) : [s];
  for (const n of e) {
    const a = at.get(n);
    a != null && a.handle && clearTimeout(a.handle), at.delete(n);
    const o = Ie.findIndex((u) => u.id === n);
    o >= 0 && Ie.splice(o, 1);
  }
  jt();
}
function pd() {
  if (!nt) {
    nt = !0;
    for (const s of at.values())
      s.handle && (clearTimeout(s.handle), s.handle = null, s.remaining = Math.max(0, s.remaining - (Date.now() - s.started)));
  }
}
function vd() {
  nt && (nt = !1, jt());
}
function md(s) {
  var n;
  const e = Ie.find((a) => a.id === s);
  Mt(s), (n = e == null ? void 0 : e.action) == null || n.onClick();
}
function Od() {
  return { toast: cd, dismiss: Mt };
}
const Ee = { items: sn(Ie), pause: pd, resume: vd, runAction: md, dismiss: Mt }, hd = ["role", "aria-live"], fd = { class: "at-toast__msg" }, gd = /* @__PURE__ */ G({
  __name: "AtToaster",
  setup(s) {
    const e = V(() => Ee.items.slice(0, Va)), n = { success: "check", danger: "alert", warning: "alert", info: "info" };
    function a(o) {
      o.currentTarget.contains(o.relatedTarget) || Ee.resume();
    }
    return (o, u) => (t(), q(wt, { to: "body" }, [
      i("section", {
        class: "at-toaster",
        "aria-label": "Notifications",
        "aria-live": "polite",
        "aria-relevant": "additions",
        onMouseenter: u[0] || (u[0] = (v) => A(Ee).pause()),
        onMouseleave: u[1] || (u[1] = (v) => A(Ee).resume()),
        onFocusin: u[2] || (u[2] = (v) => A(Ee).pause()),
        onFocusout: a
      }, [
        f(rn, { name: "at-toast" }, {
          default: B(() => [
            (t(!0), l(w, null, x(e.value, (v) => (t(), l("div", {
              key: v.id,
              class: R(["at-toast", v.tone !== "neutral" && `at-toast--${v.tone}`]),
              role: v.tone === "danger" ? "alert" : "status",
              "aria-live": v.tone === "danger" ? "assertive" : void 0
            }, [
              n[v.tone] ? (t(), q(O, {
                key: 0,
                name: n[v.tone],
                class: "at-toast__icon"
              }, null, 8, ["name"])) : h("", !0),
              i("span", fd, m(v.message), 1),
              v.action ? (t(), q(J, {
                key: 1,
                variant: "ghost",
                size: "sm",
                class: "at-toast__action",
                onClick: (c) => A(Ee).runAction(v.id)
              }, {
                default: B(() => [
                  b(m(v.action.label), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : h("", !0),
              f(J, {
                variant: "ghost",
                size: "sm",
                icon: "x",
                "icon-only": "",
                label: "Fermer",
                onClick: (c) => A(Ee).dismiss(v.id)
              }, null, 8, ["onClick"])
            ], 10, hd))), 128))
          ]),
          _: 1
        })
      ], 32)
    ]));
  }
}), Ta = "atelier:theme", La = "atelier:density", Da = (s) => {
  try {
    return localStorage.getItem(s);
  } catch {
    return null;
  }
}, ca = (s, e) => {
  try {
    localStorage.setItem(s, e);
  } catch {
  }
}, pa = () => typeof document < "u" ? document.documentElement : null, Xe = N(Da(Ta) || "system"), za = N(Da(La) || "comfortable"), Ea = N(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let va = !1;
function Oa() {
  if (va || typeof window > "u") return;
  va = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    Ea.value = e.matches;
  }), we(Xe, (e) => {
    const n = pa();
    n && (e === "system" ? n.removeAttribute("data-theme") : n.dataset.theme = e, ca(Ta, e));
  }, { immediate: !0 }), we(za, (e) => {
    const n = pa();
    n && (n.dataset.density = e, ca(La, e));
  }, { immediate: !0 });
}
function yd() {
  Oa();
  const s = V(() => Xe.value === "system" ? Ea.value ? "dark" : "light" : Xe.value), e = () => {
    Xe.value = s.value === "dark" ? "light" : "dark";
  };
  return un() && dn(() => {
  }), { mode: Xe, resolved: s, toggle: e };
}
function bd() {
  return Oa(), { density: za };
}
const kd = ["aria-expanded", "aria-label", "onClick"], _d = { class: "at-user__text" }, wd = { class: "at-user__name" }, $d = {
  key: 0,
  class: "at-user__sub"
}, Md = /* @__PURE__ */ G({
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
    var c;
    const e = ((c = fa()) == null ? void 0 : c.vnode.props) ?? {}, n = (g) => typeof e[g] == "function" || Array.isArray(e[g]), { mode: a } = yd(), { density: o } = bd(), u = [
      { value: "system", label: "Système", icon: "monitor" },
      { value: "light", label: "Clair", icon: "sun" },
      { value: "dark", label: "Sombre", icon: "moon" }
    ], v = [
      { value: "comfortable", label: "Confortable", icon: "list" },
      { value: "compact", label: "Compacte", icon: "menu" }
    ];
    return (g, L) => (t(), q(Ma, {
      placement: "right",
      "min-width": 232
    }, {
      trigger: B(({ toggle: $, open: F }) => [
        i("button", {
          type: "button",
          class: "at-user",
          "aria-haspopup": "menu",
          "aria-expanded": F,
          "aria-label": `Compte de ${g.name}`,
          onClick: $
        }, [
          f(qe, {
            name: g.name,
            src: g.src,
            size: "md",
            tone: "accent"
          }, null, 8, ["name", "src"]),
          i("span", _d, [
            i("span", wd, m(g.name), 1),
            g.email ? (t(), l("span", $d, m(g.email), 1)) : h("", !0)
          ]),
          f(O, { name: "chevron-right" })
        ], 8, kd)
      ]),
      default: B(() => [
        n("onProfile") || n("onSettings") || g.$slots.default ? (t(), l(w, { key: 0 }, [
          n("onProfile") ? (t(), q(He, {
            key: 0,
            icon: "person",
            onSelect: L[0] || (L[0] = ($) => g.$emit("profile"))
          }, {
            default: B(() => [
              b("Mon profil")
            ]),
            _: 1
          })) : h("", !0),
          n("onSettings") ? (t(), q(He, {
            key: 1,
            icon: "settings",
            onSelect: L[1] || (L[1] = ($) => g.$emit("settings"))
          }, {
            default: B(() => [
              b("Paramètres")
            ]),
            _: 1
          })) : h("", !0),
          K(g.$slots, "default"),
          g.theme || g.density || n("onLogout") ? (t(), q(ft, { key: 2 })) : h("", !0)
        ], 64)) : h("", !0),
        g.theme ? (t(), l(w, { key: 1 }, [
          f(qt, null, {
            default: B(() => [
              b("Thème")
            ]),
            _: 1
          }),
          (t(), l(w, null, x(u, ($) => f(He, {
            key: $.value,
            icon: $.icon,
            checked: A(a) === $.value,
            onSelect: (F) => a.value = $.value
          }, {
            default: B(() => [
              b(m($.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        g.theme && g.density ? (t(), q(ft, { key: 2 })) : h("", !0),
        g.density ? (t(), l(w, { key: 3 }, [
          f(qt, null, {
            default: B(() => [
              b("Densité")
            ]),
            _: 1
          }),
          (t(), l(w, null, x(v, ($) => f(He, {
            key: $.value,
            icon: $.icon,
            checked: A(o) === $.value,
            onSelect: (F) => o.value = $.value
          }, {
            default: B(() => [
              b(m($.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        n("onLogout") ? (t(), l(w, { key: 4 }, [
          g.theme || g.density ? (t(), q(ft, { key: 0 })) : h("", !0),
          f(He, {
            icon: "logout",
            onSelect: L[2] || (L[2] = ($) => g.$emit("logout"))
          }, {
            default: B(() => [
              b("Se déconnecter")
            ]),
            _: 1
          })
        ], 64)) : h("", !0)
      ]),
      _: 3
    }));
  }
}), Bd = {
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
}, Ad = (s) => `var(--${s})`, Qd = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(Ad), Cd = {
  AtAppShell: yn,
  AtAvatar: qe,
  AtBadge: _n,
  AtBreadcrumbs: Cn,
  AtButton: J,
  AtCard: Dn,
  AtCheckbox: ya,
  AtComments: Ll,
  AtDataView: Jr,
  AtDrawer: li,
  AtDropdown: Ma,
  AtEmpty: ii,
  AtField: Pt,
  AtIcon: O,
  AtIconTile: Aa,
  AtInput: Nt,
  AtKbd: Te,
  AtList: Ai,
  AtLogo: zi,
  AtLogin: Hi,
  AtMenu: $a,
  AtMenuItem: He,
  AtMenuLabel: qt,
  AtMenuSeparator: ft,
  AtModal: ou,
  AtNavGroup: pu,
  AtNavItem: fu,
  AtPage: ku,
  AtPopover: _e,
  AtProgress: wa,
  AtPropertyEditor: Rt,
  AtPropertyList: $u,
  AtPropertyValue: Ae,
  AtSegment: Cu,
  AtSelect: Du,
  AtSidebar: Qu,
  AtStat: Ku,
  AtSwitch: Wu,
  AtTable: td,
  AtTabs: sd,
  AtTag: od,
  AtTextarea: id,
  AtToaster: gd,
  AtUserMenu: Md
}, Id = {
  install(s) {
    for (const [e, n] of Object.entries(Cd)) s.component(e, n);
  }
};
export {
  yn as AtAppShell,
  qe as AtAvatar,
  _n as AtBadge,
  Cn as AtBreadcrumbs,
  J as AtButton,
  Dn as AtCard,
  ya as AtCheckbox,
  Ll as AtComments,
  Jr as AtDataView,
  li as AtDrawer,
  Ma as AtDropdown,
  ii as AtEmpty,
  Pt as AtField,
  O as AtIcon,
  Aa as AtIconTile,
  Nt as AtInput,
  Te as AtKbd,
  Ai as AtList,
  Hi as AtLogin,
  zi as AtLogo,
  $a as AtMenu,
  He as AtMenuItem,
  qt as AtMenuLabel,
  ft as AtMenuSeparator,
  ou as AtModal,
  pu as AtNavGroup,
  fu as AtNavItem,
  ku as AtPage,
  _e as AtPopover,
  wa as AtProgress,
  Rt as AtPropertyEditor,
  $u as AtPropertyList,
  Ae as AtPropertyValue,
  Cu as AtSegment,
  Du as AtSelect,
  Qu as AtSidebar,
  Ku as AtStat,
  Wu as AtSwitch,
  td as AtTable,
  sd as AtTabs,
  od as AtTag,
  id as AtTextarea,
  gd as AtToaster,
  Md as AtUserMenu,
  Id as Atelier,
  vt as LAYOUTS,
  Ci as LOGO_TILE,
  Ft as ME,
  yt as NONE,
  Ot as OPS,
  na as OP_LABEL,
  ra as SHORTCUT_LAYERS,
  Bt as TAG_ROTATION,
  Va as TOAST_VISIBLE,
  Ed as WORDMARK,
  bt as addDays,
  Gn as applyView,
  It as brandGrid,
  al as canCreate,
  Qd as chartColors,
  jn as compareRows,
  sa as createView,
  Ad as cssVar,
  Id as default,
  Jn as defaultsFromFilters,
  Td as filter,
  kt as findOption,
  _t as formatDate,
  el as formatMonth,
  Un as formatRelative,
  Dd as formatShortcut,
  he as getValue,
  Wn as groupRows,
  ga as icons,
  be as isEmpty,
  Ht as logoApps,
  tl as matchOptions,
  Rn as matchRule,
  yi as matchShortcut,
  Nn as mentionAt,
  Yn as monthGrid,
  Hn as nextMonday,
  nl as nextTagColor,
  Se as normalize,
  Re as optionsOf,
  Sa as parseShortcut,
  Vd as registerIcons,
  zd as registerLogoApps,
  ka as resolveValue,
  la as shiftMonth,
  Ld as sort,
  Ke as splitMatch,
  Pn as splitMentions,
  Oe as today,
  Bd as tokens,
  Be as uid,
  bd as useDensity,
  je as useId,
  Qt as useShortcut,
  yd as useTheme,
  Od as useToast
};
//# sourceMappingURL=atelier.js.map

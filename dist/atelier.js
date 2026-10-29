import { defineComponent as G, computed as V, openBlock as t, createElementBlock as l, normalizeStyle as ve, normalizeClass as j, createBlock as q, createCommentVNode as h, renderSlot as K, createTextVNode as b, toDisplayString as m, ref as N, watch as $e, createElementVNode as i, createVNode as g, Fragment as w, renderList as I, resolveDynamicComponent as ma, withCtx as B, useModel as de, withDirectives as te, mergeProps as ye, vModelCheckbox as gt, mergeModels as le, onMounted as Xa, onBeforeUnmount as at, unref as C, vModelText as Ce, withModifiers as re, nextTick as Le, Teleport as wt, withKeys as ta, vModelDynamic as It, shallowRef as en, isRef as Ue, vModelSelect as Pe, Transition as ha, normalizeProps as tn, guardReactiveProps as an, getCurrentInstance as fa, readonly as nn, reactive as ln, TransitionGroup as sn, getCurrentScope as on, onScopeDispose as rn } from "vue";
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
  lock: '<rect x="3.5" y="7" width="9" height="6.5" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>'
};
function wd(s) {
  Object.assign(ga, s);
}
const un = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], O = /* @__PURE__ */ G({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(s) {
    const e = s, n = V(() => ga[e.name] ?? "");
    return (a, r) => (t(), l("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: a.size,
      height: a.size,
      style: ve(a.size !== 16 ? { width: a.size + "px", height: a.size + "px" } : void 0),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true",
      innerHTML: n.value
    }, null, 12, un));
  }
}), dn = ["href", "aria-label"], cn = ["type", "disabled", "aria-busy", "aria-label"], pn = {
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
    return (a, r) => a.href && !a.disabled ? (t(), l("a", {
      key: 0,
      href: a.href,
      class: j(n.value),
      "aria-label": a.iconOnly ? a.label : void 0
    }, [
      a.icon ? (t(), q(O, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      K(a.$slots, "default", {}, () => [
        b(m(a.iconOnly ? "" : a.label), 1)
      ])
    ], 10, dn)) : (t(), l("button", {
      key: 1,
      type: a.type,
      class: j(n.value),
      disabled: a.disabled || a.loading,
      "aria-busy": a.loading || void 0,
      "aria-label": a.iconOnly ? a.label : void 0
    }, [
      a.loading ? (t(), l("span", pn)) : a.icon ? (t(), q(O, {
        key: 1,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      a.iconOnly ? h("", !0) : K(a.$slots, "default", { key: 2 }, () => [
        b(m(a.label), 1)
      ])
    ], 10, cn));
  }
}), vn = { class: "at-shell__side" }, mn = { class: "at-shell__main" }, hn = { class: "at-topbar" }, fn = /* @__PURE__ */ G({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(s, { expose: e }) {
    const n = s, a = N(!1), r = N();
    return $e(() => n.routeKey, () => {
      a.value = !1, r.value && (r.value.scrollTop = 0);
    }), e({ closeNav: () => a.value = !1 }), (u, v) => (t(), l("div", {
      class: j(["at-shell", a.value && "at-shell--open"])
    }, [
      i("div", vn, [
        K(u.$slots, "sidebar")
      ]),
      i("div", {
        class: "at-shell__scrim",
        onClick: v[0] || (v[0] = (c) => a.value = !1)
      }),
      i("div", mn, [
        i("header", hn, [
          g(J, {
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
          ref: r,
          class: "at-shell__page"
        }, [
          K(u.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), gn = ["title"], yn = ["src", "alt"], He = /* @__PURE__ */ G({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" },
    tone: { default: "neutral" }
  },
  setup(s) {
    const e = s, n = V(() => e.name.split(/\s+/).filter(Boolean).map((a) => a[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (a, r) => (t(), l("span", {
      class: j(["at-avatar", a.size !== "sm" && `at-avatar--${a.size}`, a.tone === "accent" && "at-avatar--accent"]),
      title: a.name
    }, [
      a.src ? (t(), l("img", {
        key: 0,
        src: a.src,
        alt: a.name
      }, null, 8, yn)) : (t(), l(w, { key: 1 }, [
        b(m(n.value), 1)
      ], 64))
    ], 10, gn));
  }
}), bn = /* @__PURE__ */ G({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: j(["at-badge", e.tone !== "neutral" && `at-badge--${e.tone}`])
    }, [
      K(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ])
    ], 2));
  }
}), kn = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, _n = {
  key: 0,
  "aria-hidden": "true"
}, wn = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, $n = ["href", "onClick"], Mn = /* @__PURE__ */ G({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(s) {
    return (e, n) => (t(), l("nav", kn, [
      (t(!0), l(w, null, I(e.items, (a, r) => (t(), l(w, { key: r }, [
        r > 0 ? (t(), l("span", _n, "/")) : h("", !0),
        r === e.items.length - 1 ? (t(), l("span", wn, m(a.label), 1)) : (t(), l("a", {
          key: 2,
          href: a.href ?? "#",
          onClick: (u) => a.onClick && (u.preventDefault(), a.onClick())
        }, m(a.label), 9, $n))
      ], 64))), 128))
    ]));
  }
}), An = {
  key: 0,
  class: "at-card__head"
}, Cn = {
  key: 0,
  class: "at-card__title"
}, Sn = {
  key: 1,
  class: "at-card__desc"
}, Vn = {
  key: 1,
  class: "at-card__foot"
}, Tn = /* @__PURE__ */ G({
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
      class: j(["at-card", e.href && "at-card--link", e.color && ["at-card--striped", `at-tone-${e.color}`]])
    }, {
      default: B(() => [
        e.title || e.description || e.$slots.actions ? (t(), l("div", An, [
          i("div", null, [
            e.title ? (t(), l("h3", Cn, m(e.title), 1)) : h("", !0),
            e.description ? (t(), l("p", Sn, m(e.description), 1)) : h("", !0)
          ]),
          K(e.$slots, "actions")
        ])) : h("", !0),
        K(e.$slots, "default"),
        e.$slots.footer ? (t(), l("div", Vn, [
          K(e.$slots, "footer")
        ])) : h("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), Ln = {
  key: 0,
  class: "at-toggle"
}, Dn = ["indeterminate", "disabled"], zn = ["indeterminate", "disabled"], ya = /* @__PURE__ */ G({
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
    const e = de(s, "modelValue");
    return (n, a) => n.label || n.$slots.default ? (t(), l("label", Ln, [
      te(i("input", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (r) => e.value = r),
        type: "checkbox",
        class: "at-check",
        indeterminate: n.indeterminate,
        disabled: n.disabled
      }), null, 16, Dn), [
        [gt, e.value]
      ]),
      K(n.$slots, "default", {}, () => [
        b(m(n.label), 1)
      ])
    ])) : te((t(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": a[1] || (a[1] = (r) => e.value = r),
      type: "checkbox",
      class: "at-check",
      indeterminate: n.indeterminate,
      disabled: n.disabled
    }), null, 16, zn)), [
      [gt, e.value]
    ]);
  }
}), $t = (s, e) => {
  const n = s.__vccOpts || s;
  for (const [a, r] of e)
    n[a] = r;
  return n;
}, En = {}, On = { class: "at-kbd" };
function Bn(s, e) {
  return t(), l("kbd", On, [
    K(s.$slots, "default")
  ]);
}
const Te = /* @__PURE__ */ $t(En, [["render", Bn]]), Qn = (s) => String(s).padStart(2, "0"), xn = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], aa = (s) => new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
function In(s, e = /* @__PURE__ */ new Date()) {
  const n = new Date(s);
  if (isNaN(n.getTime())) return "";
  const a = Math.round((e.getTime() - n.getTime()) / 1e3), r = `${n.getHours()}:${Qn(n.getMinutes())}`;
  if (a < 45) return "à l’instant";
  if (a < 3600) return `il y a ${Math.max(1, Math.round(a / 60))} min`;
  const u = Math.round((aa(e) - aa(n)) / 864e5);
  if (u === 0) return `il y a ${Math.round(a / 3600)} h`;
  if (u === 1) return `hier à ${r}`;
  const v = `${n.getDate()} ${xn[n.getMonth()]}`;
  return n.getFullYear() === e.getFullYear() ? `${v} à ${r}` : `${v} ${n.getFullYear()}`;
}
function Fn(s, e) {
  const n = [...e].filter(Boolean).sort((c, f) => f.length - c.length);
  if (!n.length) return [{ text: s }];
  const a = (c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), r = new RegExp(`@(?:${n.map(a).join("|")})(?![\\p{L}\\p{N}])`, "gu"), u = [];
  let v = 0;
  for (const c of s.matchAll(r))
    c.index > v && u.push({ text: s.slice(v, c.index) }), u.push({ text: c[0], mention: !0 }), v = c.index + c[0].length;
  return v < s.length && u.push({ text: s.slice(v) }), u;
}
function Un(s, e) {
  const n = /(^|\s)@([\p{L}\p{N}-]*)$/u.exec(s.slice(0, e));
  return n ? { start: e - n[2].length - 1, query: n[2] } : null;
}
const yt = "__none", Ft = "@me", Ut = (s) => String(s).padStart(2, "0"), Kt = (s) => `${s.getFullYear()}-${Ut(s.getMonth() + 1)}-${Ut(s.getDate())}`, Ee = () => Kt(/* @__PURE__ */ new Date()), bt = (s, e) => {
  const n = /* @__PURE__ */ new Date(s + "T00:00");
  return n.setDate(n.getDate() + e), Kt(n);
}, Pn = (s = Ee()) => {
  const e = ((/* @__PURE__ */ new Date(s + "T00:00")).getDay() + 6) % 7;
  return bt(s, 7 - e);
}, Oe = () => Math.random().toString(36).slice(2, 10), be = (s) => s == null || s === "" || Array.isArray(s) && s.length === 0, me = (s, e) => e.compute ? e.compute(s) : s[e.key], Ke = (s, e) => typeof s.options == "function" ? s.options(e) : s.options ?? [], kt = (s, e, n) => Ke(s, e).find((a) => a.value === n), Ze = (s) => !s.compute && !s.readonly && s.type !== "progress", Nn = ["status", "select", "relation", "person"], Xe = (s) => Nn.includes(s.type), Hn = {
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
}, ht = (s) => s.icon ?? Hn[s.type] ?? "text", vt = [
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
function qn(s, e, n, a = Ee(), r = {}) {
  const u = me(s, e);
  if (!ba.includes(n.op) && be(n.value)) return !0;
  const v = ka(n.value, r);
  if (v === void 0) return !1;
  const c = { ...n, value: v }, f = (L) => String(L ?? "").toLowerCase();
  switch (c.op) {
    case "empty":
      return be(u);
    case "notempty":
      return !be(u);
    case "contains":
      return e.type === "multi" ? (u ?? []).includes(c.value) : f(u).includes(f(c.value));
    case "notcontains":
      return e.type === "multi" ? !(u ?? []).includes(c.value) : !f(u).includes(f(c.value));
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
function Kn(s, e, n) {
  const a = me(e, s), r = me(n, s), u = be(a), v = be(r);
  if (u || v) return u === v ? 0 : u ? 1 : -1;
  if (Xe(s)) {
    const c = Ke(s).map((f) => f.value);
    return c.indexOf(a) - c.indexOf(r);
  }
  return s.type === "number" || s.type === "progress" ? a - r : s.type === "checkbox" ? Number(r) - Number(a) : s.type === "multi" ? a.length - r.length : String(a).localeCompare(String(r), "fr");
}
function Rn(s, e, n, a = "", r = {}) {
  const u = Object.fromEntries(e.map(($) => [$.key, $])), v = e.find(($) => $.type === "title"), c = a.trim().toLowerCase(), f = s.filter(($) => (!c || !v || String($[v.key] ?? "").toLowerCase().includes(c)) && n.filters.every((F) => !u[F.prop] || qn($, u[F.prop], F, Ee(), r))), L = n.sorts.filter(($) => u[$.prop]);
  return L.length ? f.sort(($, F) => {
    for (const E of L) {
      const S = u[E.prop], y = be(me($, S)), U = be(me(F, S));
      if (y !== U) return y ? 1 : -1;
      if (y) continue;
      const Z = Kn(S, $, F);
      if (Z) return E.dir === "desc" ? -Z : Z;
    }
    return 0;
  }) : f;
}
function jn(s, e, n = !1) {
  if (!e) return [{ key: yt, option: null, rows: s }];
  const a = Ke(e).map((v) => ({ key: v.value, option: v, rows: [] })), r = { key: yt, option: null, rows: [] }, u = Object.fromEntries(a.map((v) => [v.key, v]));
  for (const v of s) (u[me(v, e)] ?? r).rows.push(v);
  return (r.rows.length || n) && a.push(r), n ? a : a.filter((v) => v.rows.length);
}
function Gn(s) {
  const [e, n] = s.split("-").map(Number), r = (new Date(e, n - 1, 1).getDay() + 6) % 7, u = [];
  for (let v = 0; v < 42; v++) {
    const c = new Date(e, n - 1, 1 - r + v);
    u.push({ iso: Kt(c), day: c.getDate(), outside: c.getMonth() !== n - 1 });
  }
  return u[35].outside ? u.slice(0, 35) : u;
}
const la = (s, e) => {
  const [n, a] = s.split("-").map(Number), r = new Date(n, a - 1 + e, 1);
  return `${r.getFullYear()}-${Ut(r.getMonth() + 1)}`;
};
function sa(s, e = "table", n = {}) {
  return { id: Oe(), name: s, layout: e, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...n };
}
const $d = (s, e, n = "") => ({ id: Oe(), prop: s, op: e, value: n }), Md = (s, e = "asc") => ({ id: Oe(), prop: s, dir: e });
function Wn(s, e, n = {}) {
  const a = {};
  for (const r of s.filters) {
    const u = e.find((c) => c.key === r.prop);
    if (!u || !Ze(u) || be(r.value)) continue;
    const v = ka(r.value, n);
    v !== void 0 && (r.op === "is" && (a[r.prop] = v), r.op === "contains" && u.type === "multi" && (a[r.prop] = [v]));
  }
  return a;
}
const Yn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), Jn = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), _a = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function _t(s) {
  if (!s) return "";
  const e = /* @__PURE__ */ new Date(s + "T00:00");
  return (e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? Yn : Jn).format(e);
}
const Zn = (s) => {
  const [e, n] = s.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(e, n - 1, 1));
}, Se = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim(), Xn = (s, e, n = []) => {
  const a = Se(e);
  return s.filter((r) => !n.includes(r.value) && (!a || Se(r.label).includes(a)));
}, el = (s, e) => !!Se(e) && !s.some((n) => Se(n.label) === Se(e)), Bt = ["green", "yellow", "pink", "brown", "red", "blue", "purple", "orange", "gray"], tl = (s) => Bt.find((e) => !s.some((n) => n.color === e)) ?? Bt[s.length % Bt.length], qe = (s, e) => {
  const n = Se(e), a = n ? Se(s).indexOf(n) : -1;
  return a < 0 ? [s, "", ""] : [s.slice(0, a), s.slice(a, a + n.length), s.slice(a + n.length)];
};
let oa = 0;
function nt(s = "at") {
  return oa += 1, `${s}-${oa}`;
}
const al = ["aria-label"], nl = {
  key: 0,
  class: "at-comments__head"
}, ll = { class: "at-label" }, sl = {
  key: 1,
  class: "at-comments__list"
}, ol = {
  key: 0,
  class: "at-event"
}, rl = ["datetime", "title"], il = {
  key: 1,
  class: "at-comment"
}, ul = { class: "at-comment__meta" }, dl = ["datetime", "title"], cl = ["title"], pl = {
  key: 1,
  class: "at-comment__actions"
}, vl = {
  key: 0,
  class: "at-comment__edit"
}, ml = ["id", "onKeydown"], hl = { class: "at-composer__foot" }, fl = { class: "at-composer__hint" }, gl = {
  key: 1,
  class: "at-comment__body"
}, yl = {
  key: 0,
  class: "at-mention"
}, bl = {
  key: 2,
  class: "at-comments__empty"
}, kl = { class: "at-composer" }, _l = { class: "at-composer__box" }, wl = ["placeholder", "aria-expanded", "aria-controls", "aria-activedescendant"], $l = { class: "at-composer__foot" }, Ml = { class: "at-composer__hint" }, Al = ["id"], Cl = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Mentionner", -1), Sl = ["id", "aria-selected", "onMousedown", "onMousemove"], Vl = /* @__PURE__ */ G({
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
    const n = s, a = e, r = N(/* @__PURE__ */ new Date());
    let u;
    Xa(() => {
      u = setInterval(() => {
        r.value = /* @__PURE__ */ new Date();
      }, 6e4);
    }), at(() => clearInterval(u));
    const v = (M) => In(M, r.value), c = (M) => new Date(M).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" }), f = V(() => [...n.items].sort((M, x) => M.at.localeCompare(x.at))), L = (M) => Fn(M, n.people), $ = typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl", F = N(""), E = N(), S = nt("at-mention"), y = N(null), U = N(0), Z = V(() => {
      const M = y.value;
      if (!M) return [];
      const x = Se(M.query);
      return n.people.filter((P) => Se(P).includes(x)).slice(0, 6);
    });
    function D() {
      const M = E.value;
      y.value = M && n.people.length ? Un(M.value, M.selectionStart ?? M.value.length) : null, U.value = 0;
    }
    function Q(M) {
      const x = E.value, P = y.value;
      if (!x || !P) return;
      const R = x.selectionStart ?? F.value.length, ie = F.value.slice(0, P.start) + "@" + M + " ";
      F.value = ie + F.value.slice(R), y.value = null, Le(() => {
        x.focus(), x.setSelectionRange(ie.length, ie.length);
      });
    }
    function H() {
      const M = F.value.trim();
      M && (a("post", M), F.value = "", y.value = null);
    }
    function W(M) {
      const x = Z.value;
      if (y.value && x.length) {
        if (M.key === "ArrowDown") {
          M.preventDefault(), U.value = (U.value + 1) % x.length;
          return;
        }
        if (M.key === "ArrowUp") {
          M.preventDefault(), U.value = (U.value - 1 + x.length) % x.length;
          return;
        }
        if (M.key === "Enter" && !M.metaKey && !M.ctrlKey || M.key === "Tab") {
          M.preventDefault(), Q(x[U.value]);
          return;
        }
        if (M.key === "Escape") {
          M.preventDefault(), M.stopPropagation(), y.value = null;
          return;
        }
      }
      M.key === "Enter" && (M.metaKey || M.ctrlKey) && (M.preventDefault(), H());
    }
    const X = N(null), ae = N("");
    function se(M) {
      X.value = M.id, ae.value = M.text, Le(() => {
        const x = document.getElementById(`${S}-edit`);
        x == null || x.focus(), x == null || x.setSelectionRange(x.value.length, x.value.length);
      });
    }
    function ne(M) {
      const x = ae.value.trim();
      x && x !== M.text && a("edit", M, x), X.value = null;
    }
    function oe(M, x) {
      M.key === "Enter" && (M.metaKey || M.ctrlKey) ? (M.preventDefault(), ne(x)) : M.key === "Escape" && (M.preventDefault(), M.stopPropagation(), X.value = null);
    }
    return (M, x) => (t(), l("section", {
      class: "at-comments",
      "aria-label": M.label
    }, [
      M.label ? (t(), l("div", nl, [
        i("span", ll, m(M.label), 1)
      ])) : h("", !0),
      f.value.length ? (t(), l("ol", sl, [
        (t(!0), l(w, null, I(f.value, (P) => (t(), l(w, {
          key: P.id
        }, [
          P.kind === "event" ? (t(), l("li", ol, [
            i("span", null, [
              i("b", null, m(P.author), 1),
              b(" " + m(P.text) + " · ", 1),
              i("time", {
                datetime: P.at,
                title: c(P.at)
              }, m(v(P.at)), 9, rl)
            ])
          ])) : (t(), l("li", il, [
            g(He, {
              name: P.author,
              size: "md",
              tone: P.author === M.me ? "accent" : "neutral"
            }, null, 8, ["name", "tone"]),
            i("div", ul, [
              i("b", null, m(P.author), 1),
              i("time", {
                datetime: P.at,
                title: c(P.at)
              }, m(v(P.at)), 9, dl),
              P.editedAt ? (t(), l("span", {
                key: 0,
                class: "at-comment__edited",
                title: c(P.editedAt)
              }, "modifié", 8, cl)) : h("", !0),
              P.author === M.me && X.value !== P.id ? (t(), l("span", pl, [
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "edit",
                  "icon-only": "",
                  label: "Modifier",
                  onClick: (R) => se(P)
                }, null, 8, ["onClick"]),
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "trash",
                  "icon-only": "",
                  label: "Supprimer",
                  onClick: (R) => a("delete", P)
                }, null, 8, ["onClick"])
              ])) : h("", !0)
            ]),
            X.value === P.id ? (t(), l("div", vl, [
              te(i("textarea", {
                id: `${C(S)}-edit`,
                "onUpdate:modelValue": x[0] || (x[0] = (R) => ae.value = R),
                class: "at-composer__text",
                rows: "1",
                "aria-label": "Modifier le commentaire",
                onKeydown: (R) => oe(R, P)
              }, null, 40, ml), [
                [Ce, ae.value]
              ]),
              i("div", hl, [
                i("span", fl, [
                  g(Te, null, {
                    default: B(() => [
                      b(m(C($)) + " ↵", 1)
                    ]),
                    _: 1
                  }),
                  b(" pour enregistrer")
                ]),
                g(J, {
                  size: "sm",
                  variant: "ghost",
                  onClick: x[1] || (x[1] = (R) => X.value = null)
                }, {
                  default: B(() => [
                    b("Annuler")
                  ]),
                  _: 1
                }),
                g(J, {
                  size: "sm",
                  variant: "primary",
                  disabled: !ae.value.trim(),
                  onClick: (R) => ne(P)
                }, {
                  default: B(() => [
                    b("Enregistrer")
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])
              ])
            ])) : (t(), l("p", gl, [
              (t(!0), l(w, null, I(L(P.text), (R, ie) => (t(), l(w, { key: ie }, [
                R.mention ? (t(), l("span", yl, m(R.text), 1)) : (t(), l(w, { key: 1 }, [
                  b(m(R.text), 1)
                ], 64))
              ], 64))), 128))
            ]))
          ]))
        ], 64))), 128))
      ])) : (t(), l("p", bl, "Aucun commentaire pour l’instant.")),
      i("div", kl, [
        g(He, {
          name: M.me,
          size: "md",
          tone: "accent"
        }, null, 8, ["name"]),
        i("div", _l, [
          te(i("textarea", {
            ref_key: "area",
            ref: E,
            "onUpdate:modelValue": x[2] || (x[2] = (P) => F.value = P),
            class: "at-composer__text",
            rows: "1",
            placeholder: M.placeholder,
            "aria-label": "Nouveau commentaire",
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-expanded": !!y.value && Z.value.length > 0,
            "aria-controls": C(S),
            "aria-activedescendant": y.value && Z.value.length ? `${C(S)}-${U.value}` : void 0,
            onKeydown: W,
            onInput: D,
            onClick: D,
            onBlur: x[3] || (x[3] = (P) => y.value = null)
          }, null, 40, wl), [
            [Ce, F.value]
          ]),
          i("div", $l, [
            i("span", Ml, [
              g(Te, null, {
                default: B(() => [
                  b(m(C($)) + " ↵", 1)
                ]),
                _: 1
              }),
              b(" pour envoyer")
            ]),
            g(J, {
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
            id: C(S),
            class: "at-menu at-composer__mentions",
            role: "listbox",
            "aria-label": "Mentionner"
          }, [
            Cl,
            (t(!0), l(w, null, I(Z.value, (P, R) => (t(), l("div", {
              id: `${C(S)}-${R}`,
              key: P,
              class: j(["at-menu-item", R === U.value && "is-active"]),
              role: "option",
              "aria-selected": R === U.value,
              onMousedown: re((ie) => Q(P), ["prevent"]),
              onMousemove: (ie) => U.value = R
            }, [
              g(He, { name: P }, null, 8, ["name"]),
              i("span", null, [
                b(m(C(qe)(P, y.value.query)[0]), 1),
                i("mark", null, m(C(qe)(P, y.value.query)[1]), 1),
                b(m(C(qe)(P, y.value.query)[2]), 1)
              ])
            ], 42, Sl))), 128))
          ], 8, Al)) : h("", !0)
        ])
      ])
    ], 8, al));
  }
}), we = /* @__PURE__ */ G({
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
    const a = de(s, "open"), r = s, u = n, v = N(), c = N(), f = N({ top: -9999, left: -9999 }), L = V(() => {
      var Q;
      return r.anchor ?? ((Q = v.value) == null ? void 0 : Q.firstElementChild) ?? v.value ?? null;
    });
    function $() {
      const Q = L.value, H = c.value;
      if (!Q || !H) return;
      const W = Q.getBoundingClientRect(), X = H.offsetWidth, ae = H.offsetHeight;
      if (r.placement === "over") {
        const oe = Math.max(8, Math.min(W.left, window.innerWidth - X - 8)), M = Math.max(8, Math.min(W.top, window.innerHeight - ae - 8));
        (Math.abs(M - f.value.top) > 0.5 || Math.abs(oe - f.value.left) > 0.5) && (f.value = { top: M, left: oe });
        return;
      }
      if (r.placement === "right") {
        const oe = Math.max(8, Math.min(W.right + r.offset, window.innerWidth - X - 8)), M = Math.max(8, Math.min(W.bottom - ae, window.innerHeight - ae - 8));
        (Math.abs(M - f.value.top) > 0.5 || Math.abs(oe - f.value.left) > 0.5) && (f.value = { top: M, left: oe });
        return;
      }
      let se = r.align === "end" ? W.right - X : W.left;
      se = Math.max(8, Math.min(se, window.innerWidth - X - 8));
      let ne = W.bottom + r.offset;
      ne + ae > window.innerHeight - 8 && (ne = Math.max(8, W.top - ae - r.offset)), (Math.abs(ne - f.value.top) > 0.5 || Math.abs(se - f.value.left) > 0.5) && (f.value = { top: ne, left: se });
    }
    function F() {
      a.value && (a.value = !1, u("close"));
    }
    function E() {
      a.value ? F() : a.value = !0;
    }
    function S(Q) {
      var W, X, ae;
      const H = Q.target;
      (W = c.value) != null && W.contains(H) || (X = L.value) != null && X.contains(H) || (ae = H.closest) != null && ae.call(H, ".at-pop") || F();
    }
    function y(Q) {
      var H, W;
      Q.key === "Escape" && (Q.stopPropagation(), F(), (W = (H = L.value) == null ? void 0 : H.focus) == null || W.call(H));
    }
    let U = null;
    function Z() {
      setTimeout(() => document.addEventListener("mousedown", S), 0), document.addEventListener("keydown", y, !0), window.addEventListener("resize", $), window.addEventListener("scroll", $, !0), Le(() => {
        $(), c.value && (U = new ResizeObserver($), U.observe(c.value));
      });
    }
    function D() {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", y, !0), window.removeEventListener("resize", $), window.removeEventListener("scroll", $, !0), U == null || U.disconnect(), U = null, f.value = { top: -9999, left: -9999 };
    }
    return $e(a, (Q) => Q ? Z() : D(), { immediate: !0 }), at(D), e({ place: $, close: F, toggle: E }), (Q, H) => (t(), l(w, null, [
      Q.$slots.trigger ? (t(), l("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: v,
        style: { display: "contents" }
      }, [
        K(Q.$slots, "trigger", {
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
          style: ve({ top: f.value.top + "px", left: f.value.left + "px" })
        }, [
          K(Q.$slots, "default", { close: F })
        ], 4)) : h("", !0)
      ]))
    ], 64));
  }
}), Tl = ["aria-valuenow", "aria-label"], Ll = { class: "at-progress__track" }, Dl = {
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
    return (a, r) => (t(), l("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": a.label
    }, [
      i("span", Ll, [
        i("span", {
          class: "at-progress__bar",
          style: ve({ width: n.value + "%" })
        }, null, 4)
      ]),
      a.showLabel ? (t(), l("span", Dl, m(n.value) + " %", 1)) : h("", !0)
    ], 8, Tl));
  }
}), zl = {
  key: 0,
  class: "at-pv-title"
}, El = ["checked"], Ol = {
  key: 2,
  class: "at-pv-empty"
}, Bl = {
  key: 5,
  class: "at-pv-multi"
}, Ql = {
  key: 6,
  class: "at-pv-person"
}, xl = { class: "at-ellipsis" }, Il = {
  key: 7,
  class: "at-pv-rel"
}, Fl = { class: "at-ellipsis" }, Ul = {
  key: 9,
  class: "at-num"
}, Pl = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, Ae = /* @__PURE__ */ G({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(s) {
    const e = s, n = V(() => me(e.row, e.prop)), a = V(() => e.prop.type), r = V(() => Xe(e.prop) ? kt(e.prop, e.row, n.value) : void 0), u = V(() => a.value === "multi" ? (n.value ?? []).map((f) => kt(e.prop, e.row, f)).filter(Boolean) : []), v = V(() => {
      var f, L;
      return a.value === "date" && !!((L = (f = e.prop).overdue) != null && L.call(f, e.row));
    }), c = V(() => {
      var f;
      return ((f = r.value) == null ? void 0 : f.label) ?? String(n.value ?? "");
    });
    return (f, L) => {
      var $, F, E;
      return a.value === "title" ? (t(), l("span", zl, m(n.value || "Sans titre"), 1)) : a.value === "checkbox" ? (t(), l("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!n.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, El)) : C(be)(n.value) ? (t(), l("span", Ol, "—")) : a.value === "status" ? (t(), l("span", {
        key: 3,
        class: j(["at-badge", (($ = r.value) == null ? void 0 : $.tone) && r.value.tone !== "neutral" && `at-badge--${r.value.tone}`])
      }, m(c.value), 3)) : a.value === "select" ? (t(), l("span", {
        key: 4,
        class: j(["at-tag", ((F = r.value) == null ? void 0 : F.color) && r.value.color !== "gray" && `at-tag--${r.value.color}`])
      }, m(c.value), 3)) : a.value === "multi" ? (t(), l("span", Bl, [
        (t(!0), l(w, null, I(u.value, (S) => (t(), l("span", {
          key: S.value,
          class: j(["at-tag", S.color && S.color !== "gray" && `at-tag--${S.color}`])
        }, m(S.label), 3))), 128))
      ])) : a.value === "person" ? (t(), l("span", Ql, [
        g(He, { name: c.value }, null, 8, ["name"]),
        i("span", xl, m(c.value), 1)
      ])) : a.value === "relation" ? (t(), l("span", Il, [
        (E = r.value) != null && E.mark ? (t(), l("span", {
          key: 0,
          class: "at-pv-mark",
          style: ve({ background: r.value.mark })
        }, null, 4)) : (t(), q(O, {
          key: 1,
          name: f.prop.icon ?? "link"
        }, null, 8, ["name"])),
        i("span", Fl, m(r.value ? r.value.label : "Introuvable"), 1)
      ])) : a.value === "date" ? (t(), l("span", {
        key: 8,
        class: j(["at-pv-date", v.value && "at-pv-over"])
      }, m(C(_t)(n.value)), 3)) : a.value === "number" ? (t(), l("span", Ul, m(C(_a).format(Number(n.value))) + m(f.prop.suffix ?? ""), 1)) : a.value === "progress" ? (t(), q(wa, {
        key: 10,
        value: Number(n.value)
      }, null, 8, ["value"])) : (t(), l("span", Pl, m(n.value), 1));
    };
  }
}), Nl = ["aria-label", "onClick"], Hl = ["aria-controls", "aria-activedescendant", "aria-label"], ql = ["id", "aria-label", "aria-multiselectable"], Kl = {
  key: 0,
  class: "at-menu-label"
}, Rl = ["id", "aria-selected", "onMousemove", "onClick"], jl = ["aria-label", "aria-expanded", "onClick"], Gl = ["id"], Wl = {
  key: 2,
  class: "at-menu-empty",
  style: { padding: "2px 8px" }
}, Yl = { class: "at-tagedit__hint" }, Jl = { key: 0 }, Zl = ["aria-label"], Xl = ["value"], es = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), ts = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Couleur", -1), as = ["aria-checked", "onClick"], ns = ["aria-label"], ls = { class: "at-menu-label" }, ss = ["aria-selected", "onClick"], os = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, rs = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), is = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, us = { class: "at-menu-title" }, ds = ["value", "aria-label"], cs = {
  class: "at-datequick",
  role: "group",
  "aria-label": "Raccourcis"
}, ps = ["onClick"], vs = { class: "at-menu-meta" }, ms = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), hs = ["disabled"], fs = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, gs = { class: "at-menu-title" }, ys = ["type", "aria-label"], Rt = /* @__PURE__ */ G({
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
    const n = de(s, "open"), a = s, r = e, u = N(""), v = N(), c = V(() => {
      const k = a.prop;
      return k ? k.type === "select" || k.type === "multi" ? "tags" : Xe(k) ? "options" : k.type === "date" ? "date" : "input" : null;
    }), f = V(() => a.prop ? Ke(a.prop, a.row) : []), L = V(() => a.prop && a.row ? a.row[a.prop.key] : null), $ = V(() => {
      var k;
      return ((k = a.prop) == null ? void 0 : k.type) === "multi";
    }), F = V(() => {
      var k;
      return !!((k = a.prop) != null && k.creatable);
    }), E = N(""), S = N(0), y = N(), U = N({ w: 0, h: 0 }), Z = nt("at-tags"), D = V(() => $.value ? L.value ?? [] : L.value != null ? [L.value] : []), Q = V(() => D.value.map((k) => f.value.find((A) => A.value === k)).filter((k) => !!k)), H = V(() => Xn(f.value, E.value, $.value ? D.value : [])), W = V(() => F.value && el(f.value, E.value)), X = V(() => H.value.length + (W.value ? 1 : 0)), ae = V(() => tl(f.value)), se = (k) => ["at-tag", k && k !== "gray" && `at-tag--${k}`];
    $e(E, () => {
      S.value = 0;
    });
    function ne(k) {
      $.value ? (he([...D.value, k.value], !1), E.value = "") : he(k.value);
    }
    function oe() {
      const k = { value: Oe(), label: E.value.trim(), color: ae.value };
      r("createOption", k), ne(k);
    }
    function M(k) {
      var A;
      he(D.value.filter((T) => T !== k), !1), (A = y.value) == null || A.focus();
    }
    function x(k) {
      var T;
      const A = X.value;
      k.key === "ArrowDown" ? (k.preventDefault(), A && (S.value = (S.value + 1) % A)) : k.key === "ArrowUp" ? (k.preventDefault(), A && (S.value = (S.value - 1 + A) % A)) : k.key === "Enter" ? (k.preventDefault(), S.value < H.value.length ? ne(H.value[S.value]) : W.value && oe()) : k.key === "Tab" ? n.value = !1 : k.key === "Backspace" && !E.value && D.value.length && (k.preventDefault(), $.value ? he(D.value.slice(0, -1), !1) : (T = a.prop) != null && T.required || he(null, !1));
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
    ], R = N(!1), ie = N(null), Ve = N(null), ue = V(() => f.value.find((k) => k.value === Ve.value) ?? null);
    function Re(k, A) {
      if (R.value && Ve.value === A.value) {
        R.value = !1;
        return;
      }
      ie.value = k.currentTarget, Ve.value = A.value, R.value = !0;
    }
    function xe(k) {
      const A = k.trim();
      ue.value && A && A !== ue.value.label && r("updateOption", ue.value.value, { label: A });
    }
    function je(k) {
      ue.value && r("updateOption", ue.value.value, { color: k });
    }
    function Ge() {
      var k;
      ue.value && r("deleteOption", ue.value.value), R.value = !1, (k = y.value) == null || k.focus();
    }
    function lt() {
      var k;
      (k = y.value) == null || k.focus();
    }
    $e(n, (k) => {
      var T;
      if (!k) {
        R.value = !1;
        return;
      }
      u.value = L.value ?? "", E.value = "", S.value = 0;
      const A = (T = a.anchor) == null ? void 0 : T.getBoundingClientRect();
      U.value = { w: (A == null ? void 0 : A.width) ?? 0, h: (A == null ? void 0 : A.height) ?? 0 }, Le(() => {
        var ke, Me, ot;
        if (c.value === "tags") {
          (ke = y.value) == null || ke.focus();
          return;
        }
        const ee = (Me = v.value) == null ? void 0 : Me.querySelector("input, button");
        ee == null || ee.focus(), (ot = ee == null ? void 0 : ee.select) == null || ot.call(ee);
      });
    });
    const st = V(() => {
      n.value;
      const k = Ee();
      return [
        { label: "Aujourd’hui", value: k },
        { label: "Demain", value: bt(k, 1) },
        { label: "Lundi prochain", value: Pn(k) },
        { label: "Dans une semaine", value: bt(k, 7) }
      ];
    }), At = (k) => ({ ...a.row, [a.prop.key]: k });
    function he(k, A = !0) {
      r("update", k), A && (n.value = !1);
    }
    function Ct() {
      var A;
      let k = u.value;
      ((A = a.prop) == null ? void 0 : A.type) === "number" && (k = k === "" || k == null ? null : Number(k)), k !== L.value && r("update", k), n.value = !1;
    }
    function St() {
      var k;
      if (c.value === "input") {
        let A = u.value;
        ((k = a.prop) == null ? void 0 : k.type) === "number" && (A = A === "" ? null : Number(A)), A !== L.value && r("update", A);
      }
    }
    return (k, A) => (t(), q(we, {
      open: n.value,
      "onUpdate:open": A[14] || (A[14] = (T) => n.value = T),
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
            style: ve({ width: Math.max(U.value.w, 240) + "px" })
          }, [
            i("div", {
              class: "at-tagedit__field",
              style: ve({ minHeight: U.value.h + "px" }),
              onMousedown: A[2] || (A[2] = re((T) => {
                var ee;
                return (ee = y.value) == null ? void 0 : ee.focus();
              }, ["self", "prevent"]))
            }, [
              (t(!0), l(w, null, I(Q.value, (T) => (t(), l("span", {
                key: T.value,
                class: j(se(T.color))
              }, [
                b(m(T.label) + " ", 1),
                $.value ? (t(), l("button", {
                  key: 0,
                  type: "button",
                  "aria-label": `Retirer ${T.label}`,
                  onMousedown: A[0] || (A[0] = re(() => {
                  }, ["prevent"])),
                  onClick: (ee) => M(T.value)
                }, [
                  g(O, { name: "x" })
                ], 40, Nl)) : h("", !0)
              ], 2))), 128)),
              te(i("input", {
                ref_key: "input",
                ref: y,
                "onUpdate:modelValue": A[1] || (A[1] = (T) => E.value = T),
                type: "text",
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": "true",
                "aria-controls": C(Z),
                "aria-activedescendant": X.value ? `${C(Z)}-${S.value}` : void 0,
                "aria-label": k.prop.name,
                autocomplete: "off",
                spellcheck: "false",
                onKeydown: x
              }, null, 40, Hl), [
                [Ce, E.value]
              ])
            ], 36),
            i("div", {
              id: C(Z),
              class: "at-menu at-tagedit__menu",
              role: "listbox",
              "aria-label": k.prop.name,
              "aria-multiselectable": $.value || void 0
            }, [
              E.value.trim() ? h("", !0) : (t(), l("div", Kl, m(F.value ? "Choisir, ou taper pour créer" : "Choisir une option"), 1)),
              (t(!0), l(w, null, I(H.value, (T, ee) => (t(), l("div", {
                id: `${C(Z)}-${ee}`,
                key: T.value,
                class: j(["at-menu-item", "at-tagedit__opt", ee === S.value && "is-active"]),
                role: "option",
                "aria-selected": D.value.includes(T.value),
                onMousedown: A[4] || (A[4] = re(() => {
                }, ["prevent"])),
                onMousemove: (ke) => S.value = ee,
                onClick: (ke) => ne(T)
              }, [
                i("span", {
                  class: j(se(T.color))
                }, [
                  i("span", null, [
                    b(m(C(qe)(T.label, E.value)[0]), 1),
                    i("mark", null, m(C(qe)(T.label, E.value)[1]), 1),
                    b(m(C(qe)(T.label, E.value)[2]), 1)
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
                  "aria-expanded": R.value && Ve.value === T.value,
                  onMousedown: A[3] || (A[3] = re(() => {
                  }, ["prevent"])),
                  onClick: re((ke) => Re(ke, T), ["stop"])
                }, [
                  g(O, { name: "more" })
                ], 40, jl)) : h("", !0)
              ], 42, Rl))), 128)),
              W.value ? (t(), l("div", {
                key: 1,
                id: `${C(Z)}-${H.value.length}`,
                class: j(["at-menu-item", "at-tagedit__opt", "at-tagedit__create", S.value === H.value.length && "is-active"]),
                role: "option",
                "aria-selected": "false",
                onMousedown: A[5] || (A[5] = re(() => {
                }, ["prevent"])),
                onMousemove: A[6] || (A[6] = (T) => S.value = H.value.length),
                onClick: oe
              }, [
                g(O, { name: "plus" }),
                b("Créer "),
                i("span", {
                  class: j(se(ae.value))
                }, m(E.value.trim()), 3)
              ], 42, Gl)) : h("", !0),
              X.value ? h("", !0) : (t(), l("div", Wl, m(E.value.trim() ? "Aucune option ne correspond" : "Toutes les options sont choisies"), 1)),
              i("div", Yl, [
                i("span", null, [
                  g(Te, null, {
                    default: B(() => [
                      b("↵")
                    ]),
                    _: 1
                  }),
                  b(m(W.value && S.value === H.value.length ? "créer" : "choisir"), 1)
                ]),
                i("span", null, [
                  g(Te, null, {
                    default: B(() => [
                      b("Échap")
                    ]),
                    _: 1
                  }),
                  b("fermer")
                ]),
                $.value ? (t(), l("span", Jl, [
                  g(Te, null, {
                    default: B(() => [
                      b("⌫")
                    ]),
                    _: 1
                  }),
                  b("retirer")
                ])) : h("", !0)
              ])
            ], 8, ql),
            g(we, {
              open: R.value,
              "onUpdate:open": A[9] || (A[9] = (T) => R.value = T),
              anchor: ie.value,
              placement: "right",
              onClose: lt
            }, {
              default: B(() => [
                ue.value ? (t(), l("div", {
                  key: 0,
                  class: "at-menu at-tagedit__panel",
                  role: "menu",
                  "aria-label": `Option ${ue.value.label}`
                }, [
                  (t(), l("input", {
                    key: ue.value.value,
                    class: "at-input",
                    type: "text",
                    value: ue.value.label,
                    "aria-label": "Nom de l’option",
                    onChange: A[7] || (A[7] = (T) => xe(T.target.value)),
                    onKeydown: A[8] || (A[8] = ta(re((T) => {
                      xe(T.target.value), R.value = !1, lt();
                    }, ["prevent"]), ["enter"]))
                  }, null, 40, Xl)),
                  i("button", {
                    type: "button",
                    class: "at-menu-item at-menu-item--danger",
                    role: "menuitem",
                    onClick: Ge
                  }, [
                    g(O, { name: "trash" }),
                    b("Supprimer")
                  ]),
                  es,
                  ts,
                  (t(), l(w, null, I(P, (T) => i("button", {
                    key: T.value,
                    type: "button",
                    class: "at-menu-item",
                    role: "menuitemradio",
                    "aria-checked": (ue.value.color ?? "gray") === T.value,
                    onClick: (ee) => je(T.value)
                  }, [
                    i("span", {
                      class: j([...se(T.value), "at-tagedit__swatch"])
                    }, null, 2),
                    b(m(T.label) + " ", 1),
                    (ue.value.color ?? "gray") === T.value ? (t(), q(O, {
                      key: 0,
                      name: "check",
                      class: "at-menu-check"
                    })) : h("", !0)
                  ], 8, as)), 64))
                ], 8, Zl)) : h("", !0)
              ]),
              _: 1
            }, 8, ["open", "anchor"])
          ], 4)) : c.value === "options" ? (t(), l("div", {
            key: 1,
            class: "at-menu",
            role: "listbox",
            "aria-label": k.prop.name
          }, [
            i("div", ls, m(k.prop.name), 1),
            (t(!0), l(w, null, I(f.value, (T) => (t(), l("button", {
              key: T.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": T.value === L.value,
              onClick: (ee) => he(T.value)
            }, [
              g(Ae, {
                prop: k.prop,
                row: At(T.value)
              }, null, 8, ["prop", "row"]),
              T.value === L.value ? (t(), q(O, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : h("", !0)
            ], 8, ss))), 128)),
            f.value.length ? h("", !0) : (t(), l("div", os, "Aucune option disponible")),
            k.prop.required ? h("", !0) : (t(), l(w, { key: 1 }, [
              rs,
              i("button", {
                type: "button",
                class: "at-menu-item",
                onClick: A[10] || (A[10] = (T) => he(null))
              }, [
                g(O, { name: "x" }),
                b("Effacer")
              ])
            ], 64))
          ], 8, ns)) : c.value === "date" ? (t(), l("div", is, [
            i("span", us, m(k.prop.name), 1),
            i("input", {
              type: "date",
              class: "at-input",
              value: L.value ?? "",
              "aria-label": k.prop.name,
              onChange: A[11] || (A[11] = (T) => he(T.target.value || null, !1))
            }, null, 40, ds),
            i("div", cs, [
              (t(!0), l(w, null, I(st.value, (T) => (t(), l("button", {
                key: T.label,
                type: "button",
                class: "at-menu-item",
                onClick: (ee) => he(T.value)
              }, [
                b(m(T.label), 1),
                i("span", vs, m(C(_t)(T.value)), 1)
              ], 8, ps))), 128)),
              k.prop.required ? h("", !0) : (t(), l(w, { key: 0 }, [
                ms,
                i("button", {
                  type: "button",
                  class: "at-menu-item",
                  disabled: !L.value,
                  onClick: A[12] || (A[12] = (T) => he(null))
                }, [
                  g(O, { name: "x" }),
                  b("Effacer")
                ], 8, hs)
              ], 64))
            ])
          ])) : (t(), l("div", fs, [
            i("span", gs, m(k.prop.name), 1),
            te(i("input", {
              "onUpdate:modelValue": A[13] || (A[13] = (T) => u.value = T),
              class: "at-input",
              type: k.prop.type === "number" ? "number" : "text",
              "aria-label": k.prop.name,
              onKeydown: ta(Ct, ["enter"])
            }, null, 40, ys), [
              [It, u.value]
            ])
          ]))
        ], 512)) : h("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor", "placement"]));
  }
}), bs = { class: "at-dv" }, ks = { class: "at-dv-viewsbar" }, _s = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, ws = ["aria-selected", "title", "onClick"], $s = { class: "at-toolbar at-dv-toolbar" }, Ms = {
  key: 1,
  class: "at-dv-n"
}, As = {
  key: 1,
  class: "at-dv-n"
}, Cs = { class: "at-input-wrap at-dv-search" }, Ss = {
  key: 0,
  class: "at-dv-chips"
}, Vs = { class: "at-table-wrap" }, Ts = /* @__PURE__ */ i("col", { style: { width: "36px" } }, null, -1), Ls = /* @__PURE__ */ i("col", { style: { width: "44px" } }, null, -1), Ds = { class: "at-cell-check" }, zs = ["checked", "indeterminate"], Es = { class: "at-th" }, Os = ["onMousedown"], Bs = { class: "at-cell-check" }, Qs = {
  key: 0,
  class: "at-dv-grouprow"
}, xs = ["colspan"], Is = ["aria-expanded", "onClick"], Fs = {
  key: 1,
  class: "at-pv-empty"
}, Us = { class: "at-count" }, Ps = ["aria-selected"], Ns = { class: "at-cell-check" }, Hs = ["checked", "onChange"], qs = ["onClick"], Ks = ["onClick"], Rs = /* @__PURE__ */ i("td", null, null, -1), js = { class: "at-dv-newrow" }, Gs = /* @__PURE__ */ i("td", null, null, -1), Ws = ["colspan"], Ys = ["onClick"], Js = /* @__PURE__ */ i("td", null, null, -1), Zs = /* @__PURE__ */ i("td", null, null, -1), Xs = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, eo = { class: "at-num" }, to = {
  key: 2,
  class: "at-dv-board"
}, ao = {
  key: 0,
  class: "at-empty"
}, no = ["onDragover", "onDrop"], lo = { class: "at-dv-colhead" }, so = {
  key: 1,
  class: "at-pv-empty"
}, oo = { class: "at-count" }, ro = /* @__PURE__ */ i("span", { class: "at-spacer" }, null, -1), io = { class: "at-dv-cards" }, uo = ["onDragstart", "onClick"], co = { class: "at-dv-cardtitle" }, po = {
  key: 0,
  class: "at-dv-cardprops"
}, vo = ["onClick"], mo = { key: 3 }, ho = {
  key: 0,
  class: "at-empty"
}, fo = {
  key: 1,
  class: "at-dv-list"
}, go = {
  key: 0,
  class: "at-dv-lgroup"
}, yo = ["aria-expanded", "onClick"], bo = {
  key: 1,
  class: "at-pv-empty"
}, ko = { class: "at-count" }, _o = ["onClick"], wo = { class: "at-pv-title" }, $o = { class: "at-dv-liprops" }, Mo = { class: "at-dv-newline" }, Ao = { class: "at-dv-calhead" }, Co = { class: "at-dv-calmonth" }, So = { class: "at-dv-calnote" }, Vo = { class: "at-dv-calwrap" }, To = { class: "at-dv-calgrid" }, Lo = { class: "at-dv-calgrid" }, Do = ["onDragover", "onDrop"], zo = { class: "at-dv-daynum" }, Eo = ["aria-label", "onClick"], Oo = ["onDragstart", "onClick"], Bo = {
  class: "at-menu",
  role: "menu"
}, Qo = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Nouvelle vue", -1), xo = ["onClick"], Io = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, Fo = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), Uo = {
  key: 0,
  class: "at-rules"
}, Po = { class: "at-dv-locknote" }, No = {
  key: 0,
  class: "at-menu-empty"
}, Ho = {
  key: 1,
  class: "at-rules"
}, qo = {
  key: 0,
  class: "at-menu-empty"
}, Ko = { class: "at-select" }, Ro = ["onUpdate:modelValue", "onChange"], jo = ["value"], Go = { class: "at-select" }, Wo = ["onUpdate:modelValue"], Yo = ["value"], Jo = {
  key: 0,
  class: "at-select"
}, Zo = ["onUpdate:modelValue"], Xo = /* @__PURE__ */ i("option", { value: "" }, "Choisir…", -1), er = ["value"], tr = ["value"], ar = ["onUpdate:modelValue"], nr = ["onUpdate:modelValue"], lr = ["onUpdate:modelValue"], sr = { key: 1 }, or = {
  key: 2,
  class: "at-menu-actions"
}, rr = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, ir = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), ur = { class: "at-rules" }, dr = {
  key: 0,
  class: "at-menu-empty"
}, cr = { class: "at-select" }, pr = ["onUpdate:modelValue"], vr = ["value"], mr = { class: "at-select" }, hr = ["onUpdate:modelValue"], fr = /* @__PURE__ */ i("option", { value: "asc" }, "Croissant", -1), gr = /* @__PURE__ */ i("option", { value: "desc" }, "Décroissant", -1), yr = [
  fr,
  gr
], br = { class: "at-menu-actions" }, kr = {
  class: "at-menu",
  role: "menu"
}, _r = { class: "at-menu-label" }, wr = ["onClick"], $r = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, Mr = /* @__PURE__ */ i("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Ar = ["draggable", "onDragstart", "onDragover", "onDrop"], Cr = { class: "at-pi-name" }, Sr = ["aria-label", "checked", "disabled", "onChange"], Vr = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), Tr = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Lr = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, Dr = /* @__PURE__ */ i("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), zr = { class: "at-dv-viewname" }, Er = { class: "at-dv-locknote" }, Or = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, Br = ["aria-pressed", "onClick"], Qr = {
  key: 2,
  class: "at-field-row"
}, xr = { class: "at-select" }, Ir = ["value"], Fr = {
  key: 0,
  value: ""
}, Ur = ["value"], Pr = {
  key: 3,
  class: "at-field-row"
}, Nr = /* @__PURE__ */ i("span", null, "Date utilisée", -1), Hr = { class: "at-select" }, qr = ["value"], Kr = ["value"], Rr = /* @__PURE__ */ i("div", { class: "at-menu-sep" }, null, -1), jr = ["disabled"], Gr = /* @__PURE__ */ G({
  __name: "AtDataView",
  props: /* @__PURE__ */ le({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean, default: !0 },
    lockViews: { type: Boolean },
    context: {}
  }, {
    views: { default: () => [sa("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ le(["update", "create", "open", "delete", "createOption", "updateOption", "deleteOption"], ["update:views", "update:activeView"]),
  setup(s, { emit: e }) {
    const n = s, a = de(s, "views"), r = de(s, "activeView"), u = e, v = (d) => d[n.rowKey], c = V(() => a.value.find((d) => d.id === r.value) ?? a.value[0]), f = V(() => Object.fromEntries(n.schema.map((d) => [d.key, d]))), L = V(() => n.schema.find((d) => d.type === "title")), $ = V(() => {
      var d;
      return ((d = L.value) == null ? void 0 : d.key) ?? n.rowKey;
    }), F = V(() => {
      const d = (c.value.order ?? []).filter((z) => f.value[z]);
      for (const z of n.schema) d.includes(z.key) || d.push(z.key);
      const p = d.indexOf($.value);
      return p > 0 && (d.splice(p, 1), d.unshift($.value)), d.map((z) => f.value[z]);
    }), E = V(() => F.value.filter((d) => d.type === "title" || !c.value.hidden.includes(d.key))), S = V(() => E.value.filter((d) => d.type !== "title")), y = V(() => n.schema.filter(Xe)), U = V(() => n.schema.filter((d) => d.type === "date")), Z = V(() => n.schema.find((d) => d.type === "status")), D = N(""), Q = V(() => n.context ?? {}), H = V(() => Rn(n.rows, n.schema, c.value, D.value, Q.value)), W = V(() => {
      var p, z;
      const d = c.value.groupBy && f.value[c.value.groupBy] ? c.value.groupBy : null;
      return c.value.layout === "board" && !d ? ((p = Z.value) == null ? void 0 : p.key) ?? ((z = y.value[0]) == null ? void 0 : z.key) ?? null : d;
    }), X = V(() => W.value && c.value.layout !== "calendar" ? f.value[W.value] : null), ae = V(() => jn(H.value, X.value, c.value.layout === "board")), se = (d) => ({ [W.value]: d === yt ? null : d }), ne = V(() => c.value.filters.filter((d) => f.value[d.prop])), oe = V(() => c.value.sorts.filter((d) => f.value[d.prop])), M = N({}), x = N(null), P = N(null);
    function R(d, p) {
      if (x.value === d && P.value === p) {
        x.value = null;
        return;
      }
      P.value = p ?? null, x.value = d;
    }
    const ie = (d) => V({ get: () => x.value === d, set: (p) => {
      !p && x.value === d && (x.value = null);
    } }), Ve = ie("add"), ue = ie("filter"), Re = ie("sort"), xe = ie("group"), je = ie("props"), Ge = ie("settings");
    function lt(d) {
      d.id === c.value.id ? R("settings", M.value[d.id]) : r.value = d.id;
    }
    const st = () => {
      var d, p;
      return ((d = Z.value) == null ? void 0 : d.key) ?? ((p = y.value[0]) == null ? void 0 : p.key) ?? null;
    };
    function At(d) {
      if (n.lockViews) return;
      const p = sa(vt.find((z) => z.value === d).label, d, { groupBy: d === "board" ? st() : null });
      a.value.push(p), r.value = p.id, x.value = null, Le(() => R("settings", M.value[p.id]));
    }
    function he(d) {
      c.value.layout = d, d === "board" && !c.value.groupBy && (c.value.groupBy = st());
    }
    function Ct() {
      if (n.lockViews) return;
      const d = JSON.parse(JSON.stringify(c.value));
      d.id = Oe(), d.name = c.value.name + " (copie)", delete d.locked, a.value.push(d), r.value = d.id, x.value = null;
    }
    function St() {
      if (n.lockViews || c.value.locked || a.value.length < 2) return;
      const d = a.value.indexOf(c.value);
      a.value.splice(d, 1), r.value = a.value[Math.max(0, d - 1)].id, x.value = null;
    }
    $e(() => c.value.id, () => {
      ce.value = [], x.value = null;
    });
    function k() {
      if (c.value.locked) return;
      const d = n.schema.find((p) => p.type !== "title" && p.type !== "progress") ?? n.schema[0];
      c.value.filters.push({ id: Oe(), prop: d.key, op: Ot[d.type][0], value: "" });
    }
    function A(d) {
      d.op = Ot[f.value[d.prop].type][0], d.value = "";
    }
    const T = (d) => {
      var p;
      return Ot[(p = f.value[d.prop]) == null ? void 0 : p.type] ?? [];
    }, ee = (d) => !ba.includes(d.op);
    function ke(d) {
      const p = f.value[d.prop];
      return p ? Xe(p) || p.type === "multi" ? "options" : p.type === "date" ? "date" : p.type === "number" || p.type === "progress" ? "number" : "text" : "text";
    }
    function Me(d) {
      var pe;
      const p = f.value[d.prop];
      let z = "";
      if (ee(d)) {
        const o = ke(d);
        z = d.value === Ft && p.type === "person" ? "Moi" : o === "options" ? ((pe = kt(p, void 0, d.value)) == null ? void 0 : pe.label) ?? "…" : o === "date" ? _t(d.value) || "…" : d.value === "" ? "…" : d.value;
      }
      return { name: p.name, op: na[d.op], val: z };
    }
    function ot() {
      const d = c.value.sorts.map((z) => z.prop), p = n.schema.find((z) => !d.includes(z.key)) ?? n.schema[0];
      c.value.sorts.push({ id: Oe(), prop: p.key, dir: "asc" });
    }
    const Gt = (d, p) => {
      const z = d.indexOf(p);
      z >= 0 && d.splice(z, 1);
    };
    function Ba() {
      c.value.locked || c.value.filters.splice(0), c.value.sorts.splice(0);
    }
    const Qa = V(() => !c.value.locked || oe.value.length > 0);
    function Vt(d) {
      c.value.groupBy = d, c.value.collapsed = [], c.value.layout !== "board" && (x.value = null);
    }
    function xa(d) {
      const p = c.value.hidden, z = p.indexOf(d.key);
      z < 0 ? p.push(d.key) : p.splice(z, 1);
    }
    function Wt(d) {
      c.value.hidden = d ? [] : n.schema.filter((p) => p.type !== "title").map((p) => p.key);
    }
    const We = N(null), rt = N(null);
    function Ia(d) {
      if (We.value == null) return;
      const p = F.value.map((pe) => pe.key), [z] = p.splice(We.value, 1);
      p.splice(d, 0, z), c.value.order = p, We.value = null, rt.value = null;
    }
    const Tt = (d) => c.value.widths[d.key] ?? d.width ?? 160, Fa = V(() => 36 + E.value.reduce((d, p) => d + Tt(p), 0) + 44), Lt = N(null);
    function Ua(d, p) {
      const z = d.clientX, pe = Tt(p);
      Lt.value = p.key;
      const o = (Y) => {
        c.value.widths[p.key] = Math.max(70, Math.round(pe + Y.clientX - z));
      }, _ = () => {
        Lt.value = null, window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", _);
      };
      window.addEventListener("mousemove", o), window.addEventListener("mouseup", _);
    }
    const ce = N([]), Dt = V(() => H.value.length > 0 && H.value.every((d) => ce.value.includes(v(d)))), Pa = V(() => ce.value.length > 0 && !Dt.value);
    function Na(d) {
      const p = ce.value.indexOf(v(d));
      p < 0 ? ce.value.push(v(d)) : ce.value.splice(p, 1);
    }
    function Ha() {
      ce.value = Dt.value ? [] : H.value.map(v);
    }
    function qa() {
      u("delete", n.rows.filter((d) => ce.value.includes(v(d)))), ce.value = [];
    }
    const Ie = (d) => c.value.collapsed.includes(d);
    function Yt(d) {
      const p = c.value.collapsed, z = p.indexOf(d);
      z < 0 ? p.push(d) : p.splice(z, 1);
    }
    function zt(d) {
      const p = H.value;
      if (d.type === "title") return { label: "Total", value: String(p.length) };
      if (d.type === "number") return { label: "Somme", value: _a.format(p.reduce((z, pe) => z + (Number(me(pe, d)) || 0), 0)) + (d.suffix ?? "") };
      if (d.type === "progress" && p.length) return { label: "Moyenne", value: Math.round(p.reduce((z, pe) => z + Number(me(pe, d)), 0) / p.length) + " %" };
      if (d.type === "date" && d.overdue) {
        const z = p.filter((pe) => d.overdue(pe)).length;
        return z ? { label: "En retard", value: String(z) } : null;
      }
      return d.type === "checkbox" ? { label: "Cochées", value: String(p.filter((z) => me(z, d)).length) } : null;
    }
    const fe = en(null), Jt = N(null), Et = N(!1);
    function Ka(d, p, z) {
      if (z.type === "title") {
        u("open", p);
        return;
      }
      if (Ze(z)) {
        if (z.type === "checkbox") {
          u("update", p, z.key, !p[z.key]);
          return;
        }
        Jt.value = d.currentTarget, fe.value = { row: p, prop: z }, Et.value = !0;
      }
    }
    function De(d = {}) {
      u("create", { ...Wn(c.value, n.schema, Q.value), ...d });
    }
    const it = N(null), Fe = N(null);
    function Zt(d, p) {
      it.value = v(p), d.dataTransfer && (d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("text/plain", String(v(p))));
    }
    function ut() {
      it.value = null, Fe.value = null;
    }
    const Xt = () => n.rows.find((d) => v(d) === it.value);
    function Ra(d) {
      const p = Xt();
      p && W.value && u("update", p, W.value, d === yt ? null : d), ut();
    }
    function ja(d) {
      const p = Xt();
      p && _e.value && u("update", p, _e.value, d), ut();
    }
    const _e = V(() => {
      var d;
      return c.value.dateProp && f.value[c.value.dateProp] ? c.value.dateProp : ((d = U.value[0]) == null ? void 0 : d.key) ?? null;
    }), dt = V(() => c.value.month ?? Ee().slice(0, 7)), Ga = V(() => Gn(dt.value).map((d) => ({ ...d, today: d.iso === Ee(), rows: _e.value ? H.value.filter((p) => p[_e.value] === d.iso) : [] }))), ea = V(() => _e.value ? H.value.filter((d) => !d[_e.value]).length : 0), Wa = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, Ya = (d) => {
      const p = Z.value, z = p ? kt(p, d, d[p.key]) : void 0;
      return Wa[(z == null ? void 0 : z.tone) ?? "neutral"];
    }, Ja = (d) => {
      const p = Z.value;
      if (!p) return !1;
      const z = Ke(p, d);
      return z.length > 0 && d[p.key] === z[z.length - 1].value;
    }, ct = (d, p = 0) => n.iconTools ? { iconOnly: !p, label: d, title: d, "aria-label": p ? `${d} (${p})` : d } : {}, Za = (d) => {
      var p;
      return ((p = vt.find((z) => z.value === d)) == null ? void 0 : p.icon) ?? "table";
    }, pt = V(() => X.value ? `Sans ${X.value.name.toLowerCase()}` : "");
    return (d, p) => {
      var z, pe;
      return t(), l("section", bs, [
        i("div", ks, [
          d.hideViews ? h("", !0) : (t(), l(w, { key: 0 }, [
            i("div", _s, [
              (t(!0), l(w, null, I(a.value, (o) => (t(), l("button", {
                key: o.id,
                ref_for: !0,
                ref: (_) => {
                  _ && (M.value[o.id] = _);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": o.id === c.value.id,
                title: o.id === c.value.id ? "Paramètres de la vue" : void 0,
                onClick: (_) => lt(o)
              }, [
                g(O, {
                  name: Za(o.layout)
                }, null, 8, ["name"]),
                b(m(o.name), 1),
                o.locked ? (t(), q(O, {
                  key: 0,
                  name: "lock",
                  class: "at-dv-lock",
                  label: "Vue système"
                })) : h("", !0)
              ], 8, ws))), 128))
            ]),
            d.lockViews ? h("", !0) : (t(), q(J, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: p[0] || (p[0] = (o) => R("add", o.currentTarget))
            }))
          ], 64)),
          i("div", $s, [
            g(J, ye(ct("Filtrer", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": ne.value.length },
              onClick: p[1] || (p[1] = (o) => R("filter", o.currentTarget))
            }), {
              default: B(() => [
                d.iconTools ? h("", !0) : (t(), l(w, { key: 0 }, [
                  b("Filtrer")
                ], 64)),
                ne.value.length ? (t(), l("span", Ms, m(ne.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            g(J, ye(ct("Trier", oe.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": oe.value.length },
              onClick: p[2] || (p[2] = (o) => R("sort", o.currentTarget))
            }), {
              default: B(() => [
                d.iconTools ? h("", !0) : (t(), l(w, { key: 0 }, [
                  b("Trier")
                ], 64)),
                oe.value.length ? (t(), l("span", As, m(oe.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            c.value.layout !== "calendar" ? (t(), q(J, ye({ key: 0 }, ct("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": c.value.groupBy },
              onClick: p[3] || (p[3] = (o) => R("group", o.currentTarget))
            }), {
              default: B(() => [
                b("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : h("", !0),
            g(J, ye(ct("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: p[4] || (p[4] = (o) => R("props", o.currentTarget))
            }), {
              default: B(() => [
                b("Propriétés")
              ]),
              _: 1
            }, 16),
            i("div", Cs, [
              g(O, { name: "search" }),
              te(i("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (o) => D.value = o),
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
              onClick: p[6] || (p[6] = (o) => R("settings", o.currentTarget))
            })),
            g(J, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: p[7] || (p[7] = (o) => De())
            }, {
              default: B(() => [
                b(m(d.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        ne.value.length || oe.value.length ? (t(), l("div", Ss, [
          (t(!0), l(w, null, I(ne.value, (o) => (t(), l("button", {
            key: o.id,
            type: "button",
            class: "at-dv-chip",
            onClick: p[8] || (p[8] = (_) => R("filter", _.currentTarget))
          }, [
            g(O, { name: "filter" }),
            b(m(Me(o).name) + " " + m(Me(o).op) + " ", 1),
            i("b", null, m(Me(o).val), 1)
          ]))), 128)),
          (t(!0), l(w, null, I(oe.value, (o) => (t(), l("button", {
            key: o.id,
            type: "button",
            class: "at-dv-chip",
            onClick: p[9] || (p[9] = (_) => R("sort", _.currentTarget))
          }, [
            g(O, { name: "sort" }),
            b(m(f.value[o.prop].name) + " ", 1),
            i("b", null, m(o.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          Qa.value ? (t(), q(J, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: Ba
          }, {
            default: B(() => [
              b(m(c.value.locked ? "Effacer les tris" : "Tout effacer"), 1)
            ]),
            _: 1
          })) : h("", !0)
        ])) : h("", !0),
        c.value.layout === "table" ? (t(), l(w, { key: 1 }, [
          i("div", Vs, [
            i("table", {
              class: "at-table at-dv-table",
              style: ve({ width: Fa.value + "px", minWidth: "100%" })
            }, [
              i("colgroup", null, [
                Ts,
                (t(!0), l(w, null, I(E.value, (o) => (t(), l("col", {
                  key: o.key,
                  style: ve({ width: Tt(o) + "px" })
                }, null, 4))), 128)),
                Ls
              ]),
              i("thead", null, [
                i("tr", null, [
                  i("th", Ds, [
                    i("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: Dt.value,
                      indeterminate: Pa.value,
                      onChange: Ha
                    }, null, 40, zs)
                  ]),
                  (t(!0), l(w, null, I(E.value, (o) => (t(), l("th", {
                    key: o.key,
                    class: j({ "at-num": o.type === "number" })
                  }, [
                    i("span", Es, [
                      g(O, {
                        name: C(ht)(o)
                      }, null, 8, ["name"]),
                      b(m(o.name), 1)
                    ]),
                    i("span", {
                      class: j(["at-dv-resize", Lt.value === o.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: re((_) => Ua(_, o), ["prevent"])
                    }, null, 42, Os)
                  ], 2))), 128)),
                  i("th", Bs, [
                    g(J, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: p[10] || (p[10] = (o) => R("props", o.currentTarget))
                    })
                  ])
                ])
              ]),
              (t(!0), l(w, null, I(ae.value, (o) => (t(), l("tbody", {
                key: o.key
              }, [
                X.value ? (t(), l("tr", Qs, [
                  i("td", {
                    colspan: E.value.length + 2
                  }, [
                    i("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !Ie(o.key),
                      onClick: (_) => Yt(o.key)
                    }, [
                      g(O, {
                        name: "chevron-down",
                        class: j({ "at-rot": Ie(o.key) })
                      }, null, 8, ["class"]),
                      o.option ? (t(), q(Ae, {
                        key: 0,
                        prop: X.value,
                        row: se(o.key)
                      }, null, 8, ["prop", "row"])) : (t(), l("span", Fs, m(pt.value), 1)),
                      i("span", Us, m(o.rows.length), 1)
                    ], 8, Is)
                  ], 8, xs)
                ])) : h("", !0),
                Ie(o.key) ? h("", !0) : (t(), l(w, { key: 1 }, [
                  (t(!0), l(w, null, I(o.rows, (_) => (t(), l("tr", {
                    key: v(_),
                    "aria-selected": ce.value.includes(v(_)) ? "true" : void 0
                  }, [
                    i("td", Ns, [
                      i("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: ce.value.includes(v(_)),
                        onChange: (Y) => Na(_)
                      }, null, 40, Hs)
                    ]),
                    (t(!0), l(w, null, I(E.value, (Y) => (t(), l("td", {
                      key: Y.key,
                      class: j({ "at-num": Y.type === "number", "at-dv-titlecell": Y.type === "title", "is-edit": Y.type !== "title" && C(Ze)(Y) }),
                      onClick: (ge) => Ka(ge, _, Y)
                    }, [
                      g(Ae, {
                        prop: Y,
                        row: _
                      }, null, 8, ["prop", "row"]),
                      Y.type === "title" ? (t(), l("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: re((ge) => u("open", _), ["stop"])
                      }, "Ouvrir", 8, Ks)) : h("", !0)
                    ], 10, qs))), 128)),
                    Rs
                  ], 8, Ps))), 128)),
                  i("tr", js, [
                    Gs,
                    i("td", {
                      colspan: E.value.length + 1
                    }, [
                      i("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (_) => De(X.value ? se(o.key) : {})
                      }, [
                        g(O, { name: "plus" }),
                        b(m(d.newLabel), 1)
                      ], 8, Ys)
                    ], 8, Ws)
                  ])
                ], 64))
              ]))), 128)),
              i("tfoot", null, [
                i("tr", null, [
                  Js,
                  (t(!0), l(w, null, I(E.value, (o) => (t(), l("td", {
                    key: o.key,
                    class: j({ "at-num": o.type === "number" })
                  }, [
                    zt(o) ? (t(), l(w, { key: 0 }, [
                      b(m(zt(o).label) + " ", 1),
                      i("b", null, m(zt(o).value), 1)
                    ], 64)) : h("", !0)
                  ], 2))), 128)),
                  Zs
                ])
              ])
            ], 4)
          ]),
          ce.value.length ? (t(), l("div", Xs, [
            i("span", null, [
              i("b", eo, m(ce.value.length), 1),
              b(" sélectionnée" + m(ce.value.length > 1 ? "s" : ""), 1)
            ]),
            g(J, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: qa
            }, {
              default: B(() => [
                b("Supprimer")
              ]),
              _: 1
            }),
            g(J, {
              variant: "ghost",
              size: "sm",
              onClick: p[11] || (p[11] = (o) => ce.value = [])
            }, {
              default: B(() => [
                b("Désélectionner")
              ]),
              _: 1
            })
          ])) : h("", !0)
        ], 64)) : c.value.layout === "board" ? (t(), l("div", to, [
          X.value ? (t(!0), l(w, { key: 1 }, I(ae.value, (o) => {
            var _;
            return t(), l("div", {
              key: o.key,
              class: j(["at-dv-col", Fe.value === o.key && "over"]),
              onDragover: re((Y) => Fe.value = o.key, ["prevent"]),
              onDragleave: p[12] || (p[12] = re((Y) => Fe.value = null, ["self"])),
              onDrop: re((Y) => Ra(o.key), ["prevent"])
            }, [
              i("div", lo, [
                o.option ? (t(), q(Ae, {
                  key: 0,
                  prop: X.value,
                  row: se(o.key)
                }, null, 8, ["prop", "row"])) : (t(), l("span", so, m(pt.value), 1)),
                i("span", oo, m(o.rows.length), 1),
                ro,
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((_ = o.option) == null ? void 0 : _.label) ?? pt.value}`,
                  onClick: (Y) => De(se(o.key))
                }, null, 8, ["label", "onClick"])
              ]),
              i("div", io, [
                (t(!0), l(w, null, I(o.rows, (Y) => (t(), l("button", {
                  key: v(Y),
                  type: "button",
                  class: j(["at-dv-card", it.value === v(Y) && "dragging"]),
                  draggable: "true",
                  onDragstart: (ge) => Zt(ge, Y),
                  onDragend: ut,
                  onClick: (ge) => u("open", Y)
                }, [
                  i("span", co, m(Y[$.value] || "Sans titre"), 1),
                  S.value.some((ge) => !C(be)(C(me)(Y, ge)) || ge.type === "checkbox") ? (t(), l("span", po, [
                    (t(!0), l(w, null, I(S.value, (ge) => (t(), l(w, {
                      key: ge.key
                    }, [
                      C(be)(C(me)(Y, ge)) ? h("", !0) : (t(), q(Ae, {
                        key: 0,
                        prop: ge,
                        row: Y
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : h("", !0)
                ], 42, uo))), 128)),
                i("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (Y) => De(se(o.key))
                }, [
                  g(O, { name: "plus" }),
                  b(m(d.newLabel), 1)
                ], 8, vo)
              ])
            ], 42, no);
          }), 128)) : (t(), l("div", ao, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : c.value.layout === "list" ? (t(), l("div", mo, [
          H.value.length ? (t(), l("div", fo, [
            (t(!0), l(w, null, I(ae.value, (o) => (t(), l(w, {
              key: o.key
            }, [
              X.value ? (t(), l("div", go, [
                i("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !Ie(o.key),
                  onClick: (_) => Yt(o.key)
                }, [
                  g(O, {
                    name: "chevron-down",
                    class: j({ "at-rot": Ie(o.key) })
                  }, null, 8, ["class"]),
                  o.option ? (t(), q(Ae, {
                    key: 0,
                    prop: X.value,
                    row: se(o.key)
                  }, null, 8, ["prop", "row"])) : (t(), l("span", bo, m(pt.value), 1)),
                  i("span", ko, m(o.rows.length), 1)
                ], 8, yo)
              ])) : h("", !0),
              Ie(o.key) ? h("", !0) : (t(!0), l(w, { key: 1 }, I(o.rows, (_) => (t(), l("button", {
                key: v(_),
                type: "button",
                class: "at-dv-li",
                onClick: (Y) => u("open", _)
              }, [
                i("span", wo, m(_[$.value] || "Sans titre"), 1),
                i("span", $o, [
                  (t(!0), l(w, null, I(S.value, (Y) => (t(), l(w, {
                    key: Y.key
                  }, [
                    C(be)(C(me)(_, Y)) ? h("", !0) : (t(), q(Ae, {
                      key: 0,
                      prop: Y,
                      row: _
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, _o))), 128))
            ], 64))), 128)),
            i("div", Mo, [
              i("button", {
                type: "button",
                class: "at-dv-new",
                onClick: p[14] || (p[14] = (o) => De())
              }, [
                g(O, { name: "plus" }),
                b(m(d.newLabel), 1)
              ])
            ])
          ])) : (t(), l("div", ho, [
            b("Aucun élément ne correspond à cette vue."),
            g(J, {
              size: "sm",
              icon: "plus",
              onClick: p[13] || (p[13] = (o) => De())
            }, {
              default: B(() => [
                b(m(d.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (t(), l(w, { key: 4 }, [
          i("div", Ao, [
            i("span", Co, m(C(Zn)(dt.value)), 1),
            g(J, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: p[15] || (p[15] = (o) => c.value.month = C(la)(dt.value, -1))
            }),
            g(J, {
              size: "sm",
              onClick: p[16] || (p[16] = (o) => c.value.month = C(Ee)().slice(0, 7))
            }, {
              default: B(() => [
                b("Aujourd’hui")
              ]),
              _: 1
            }),
            g(J, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: p[17] || (p[17] = (o) => c.value.month = C(la)(dt.value, 1))
            }),
            i("span", So, [
              _e.value ? (t(), l(w, { key: 0 }, [
                b("Par " + m(f.value[_e.value].name.toLowerCase()), 1),
                ea.value ? (t(), l(w, { key: 0 }, [
                  b(" · " + m(ea.value) + " sans date", 1)
                ], 64)) : h("", !0)
              ], 64)) : (t(), l(w, { key: 1 }, [
                b("Aucune propriété date")
              ], 64))
            ])
          ]),
          i("div", Vo, [
            i("div", To, [
              (t(), l(w, null, I(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (o) => i("div", {
                key: o,
                class: "at-dv-dow"
              }, m(o), 1)), 64))
            ]),
            i("div", Lo, [
              (t(!0), l(w, null, I(Ga.value, (o) => (t(), l("div", {
                key: o.iso,
                class: j(["at-dv-day", o.outside && "out", o.today && "today", Fe.value === o.iso && "over"]),
                onDragover: re((_) => Fe.value = o.iso, ["prevent"]),
                onDrop: re((_) => ja(o.iso), ["prevent"])
              }, [
                i("div", zo, [
                  i("span", null, m(o.day), 1),
                  _e.value ? (t(), l("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${C(_t)(o.iso)}`,
                    onClick: (_) => De({ [_e.value]: o.iso })
                  }, [
                    g(O, { name: "plus" })
                  ], 8, Eo)) : h("", !0)
                ]),
                (t(!0), l(w, null, I(o.rows, (_) => (t(), l("button", {
                  key: v(_),
                  type: "button",
                  class: j(["at-dv-calitem", Ja(_) && "done"]),
                  draggable: "true",
                  onDragstart: (Y) => Zt(Y, _),
                  onDragend: ut,
                  onClick: (Y) => u("open", _)
                }, [
                  i("span", {
                    class: "dot",
                    style: ve({ background: Ya(_) })
                  }, null, 4),
                  i("span", null, m(_[$.value] || "Sans titre"), 1)
                ], 42, Oo))), 128))
              ], 42, Do))), 128))
            ])
          ])
        ], 64)),
        g(we, {
          open: C(Ve),
          "onUpdate:open": p[18] || (p[18] = (o) => Ue(Ve) ? Ve.value = o : null),
          anchor: P.value
        }, {
          default: B(() => [
            i("div", Bo, [
              Qo,
              (t(!0), l(w, null, I(C(vt), (o) => (t(), l("button", {
                key: o.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (_) => At(o.value)
              }, [
                g(O, {
                  name: o.icon
                }, null, 8, ["name"]),
                b(m(o.label), 1)
              ], 8, xo))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(we, {
          open: C(ue),
          "onUpdate:open": p[19] || (p[19] = (o) => Ue(ue) ? ue.value = o : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", Io, [
              Fo,
              c.value.locked ? (t(), l("div", Uo, [
                i("p", Po, [
                  g(O, { name: "lock" }),
                  b("Vue système : ses filtres ne se modifient pas.")
                ]),
                ne.value.length ? h("", !0) : (t(), l("span", No, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), l(w, null, I(ne.value, (o) => (t(), l("div", {
                  key: o.id,
                  class: "at-dv-chip is-static"
                }, [
                  g(O, { name: "filter" }),
                  b(m(Me(o).name) + " " + m(Me(o).op) + " ", 1),
                  i("b", null, m(Me(o).val), 1)
                ]))), 128))
              ])) : (t(), l("div", Ho, [
                c.value.filters.length ? h("", !0) : (t(), l("span", qo, "Aucun filtre : la vue affiche toutes les lignes.")),
                (t(!0), l(w, null, I(c.value.filters, (o) => (t(), l("div", {
                  key: o.id,
                  class: "at-rule"
                }, [
                  i("div", Ko, [
                    te(i("select", {
                      "onUpdate:modelValue": (_) => o.prop = _,
                      "aria-label": "Propriété",
                      onChange: (_) => A(o)
                    }, [
                      (t(!0), l(w, null, I(d.schema, (_) => (t(), l("option", {
                        key: _.key,
                        value: _.key
                      }, m(_.name), 9, jo))), 128))
                    ], 40, Ro), [
                      [Pe, o.prop]
                    ]),
                    g(O, { name: "chevron-down" })
                  ]),
                  i("div", Go, [
                    te(i("select", {
                      "onUpdate:modelValue": (_) => o.op = _,
                      "aria-label": "Condition"
                    }, [
                      (t(!0), l(w, null, I(T(o), (_) => (t(), l("option", {
                        key: _,
                        value: _
                      }, m(C(na)[_]), 9, Yo))), 128))
                    ], 8, Wo), [
                      [Pe, o.op]
                    ]),
                    g(O, { name: "chevron-down" })
                  ]),
                  ee(o) ? (t(), l(w, { key: 0 }, [
                    ke(o) === "options" ? (t(), l("div", Jo, [
                      te(i("select", {
                        "onUpdate:modelValue": (_) => o.value = _,
                        "aria-label": "Valeur"
                      }, [
                        Xo,
                        f.value[o.prop].type === "person" ? (t(), l("option", {
                          key: 0,
                          value: C(Ft)
                        }, "Moi", 8, er)) : h("", !0),
                        (t(!0), l(w, null, I(C(Ke)(f.value[o.prop]), (_) => (t(), l("option", {
                          key: _.value,
                          value: _.value
                        }, m(_.label), 9, tr))), 128))
                      ], 8, Zo), [
                        [Pe, o.value]
                      ]),
                      g(O, { name: "chevron-down" })
                    ])) : ke(o) === "date" ? te((t(), l("input", {
                      key: 1,
                      "onUpdate:modelValue": (_) => o.value = _,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, ar)), [
                      [Ce, o.value]
                    ]) : ke(o) === "number" ? te((t(), l("input", {
                      key: 2,
                      "onUpdate:modelValue": (_) => o.value = _,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, nr)), [
                      [Ce, o.value]
                    ]) : te((t(), l("input", {
                      key: 3,
                      "onUpdate:modelValue": (_) => o.value = _,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, lr)), [
                      [Ce, o.value]
                    ])
                  ], 64)) : (t(), l("span", sr)),
                  g(J, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (_) => Gt(c.value.filters, o)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ])),
              c.value.locked ? h("", !0) : (t(), l("div", or, [
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: k
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
        g(we, {
          open: C(Re),
          "onUpdate:open": p[20] || (p[20] = (o) => Ue(Re) ? Re.value = o : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", rr, [
              ir,
              i("div", ur, [
                c.value.sorts.length ? h("", !0) : (t(), l("span", dr, "Aucun tri : ordre des données.")),
                (t(!0), l(w, null, I(c.value.sorts, (o) => (t(), l("div", {
                  key: o.id,
                  class: "at-rule sort"
                }, [
                  i("div", cr, [
                    te(i("select", {
                      "onUpdate:modelValue": (_) => o.prop = _,
                      "aria-label": "Propriété"
                    }, [
                      (t(!0), l(w, null, I(d.schema, (_) => (t(), l("option", {
                        key: _.key,
                        value: _.key
                      }, m(_.name), 9, vr))), 128))
                    ], 8, pr), [
                      [Pe, o.prop]
                    ]),
                    g(O, { name: "chevron-down" })
                  ]),
                  i("div", mr, [
                    te(i("select", {
                      "onUpdate:modelValue": (_) => o.dir = _,
                      "aria-label": "Sens"
                    }, yr, 8, hr), [
                      [Pe, o.dir]
                    ]),
                    g(O, { name: "chevron-down" })
                  ]),
                  g(J, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (_) => Gt(c.value.sorts, o)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              i("div", br, [
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: ot
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
        g(we, {
          open: C(xe),
          "onUpdate:open": p[22] || (p[22] = (o) => Ue(xe) ? xe.value = o : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", kr, [
              i("div", _r, m(c.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              c.value.layout !== "board" ? (t(), l("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: p[21] || (p[21] = (o) => Vt(null))
              }, [
                g(O, { name: "x" }),
                b("Aucun groupe"),
                c.value.groupBy ? h("", !0) : (t(), q(O, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : h("", !0),
              (t(!0), l(w, null, I(y.value, (o) => (t(), l("button", {
                key: o.key,
                type: "button",
                class: "at-menu-item",
                onClick: (_) => Vt(o.key)
              }, [
                g(O, {
                  name: C(ht)(o)
                }, null, 8, ["name"]),
                b(m(o.name), 1),
                W.value === o.key ? (t(), q(O, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : h("", !0)
              ], 8, wr))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(we, {
          open: C(je),
          "onUpdate:open": p[26] || (p[26] = (o) => Ue(je) ? je.value = o : null),
          anchor: P.value,
          align: "end"
        }, {
          default: B(() => [
            i("div", $r, [
              Mr,
              (t(!0), l(w, null, I(F.value, (o, _) => (t(), l("div", {
                key: o.key,
                class: j(["at-menu-item", "at-pi", rt.value === _ && "drop"]),
                draggable: o.type !== "title",
                onDragstart: (Y) => We.value = _,
                onDragover: re((Y) => rt.value = _, ["prevent"]),
                onDrop: re((Y) => Ia(_), ["prevent"]),
                onDragend: p[23] || (p[23] = (Y) => {
                  We.value = null, rt.value = null;
                })
              }, [
                g(O, {
                  name: "grip",
                  class: "grip"
                }),
                g(O, {
                  name: C(ht)(o)
                }, null, 8, ["name"]),
                i("span", Cr, m(o.name), 1),
                i("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${o.name}`,
                  checked: o.type === "title" || !c.value.hidden.includes(o.key),
                  disabled: o.type === "title",
                  onChange: (Y) => xa(o)
                }, null, 40, Sr)
              ], 42, Ar))), 128)),
              Vr,
              i("div", Tr, [
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[24] || (p[24] = (o) => Wt(!0))
                }, {
                  default: B(() => [
                    b("Tout afficher")
                  ]),
                  _: 1
                }),
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[25] || (p[25] = (o) => Wt(!1))
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
        g(we, {
          open: C(Ge),
          "onUpdate:open": p[30] || (p[30] = (o) => Ue(Ge) ? Ge.value = o : null),
          anchor: P.value
        }, {
          default: B(() => [
            i("div", Lr, [
              Dr,
              c.value.locked ? (t(), l(w, { key: 0 }, [
                i("span", zr, m(c.value.name), 1),
                i("p", Er, [
                  g(O, { name: "lock" }),
                  b("Vue système : ni renommée ni supprimée, filtres fixes.")
                ])
              ], 64)) : te((t(), l("input", {
                key: 1,
                "onUpdate:modelValue": p[27] || (p[27] = (o) => c.value.name = o),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512)), [
                [Ce, c.value.name]
              ]),
              i("div", Or, [
                (t(!0), l(w, null, I(C(vt), (o) => (t(), l("button", {
                  key: o.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": c.value.layout === o.value,
                  onClick: (_) => he(o.value)
                }, [
                  g(O, {
                    name: o.icon
                  }, null, 8, ["name"]),
                  b(m(o.label), 1)
                ], 8, Br))), 128))
              ]),
              c.value.layout !== "calendar" ? (t(), l("div", Qr, [
                i("span", null, m(c.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                i("div", xr, [
                  i("select", {
                    value: c.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: p[28] || (p[28] = (o) => Vt(o.target.value || null))
                  }, [
                    c.value.layout !== "board" ? (t(), l("option", Fr, "Aucun")) : h("", !0),
                    (t(!0), l(w, null, I(y.value, (o) => (t(), l("option", {
                      key: o.key,
                      value: o.key
                    }, m(o.name), 9, Ur))), 128))
                  ], 40, Ir),
                  g(O, { name: "chevron-down" })
                ])
              ])) : (t(), l("div", Pr, [
                Nr,
                i("div", Hr, [
                  i("select", {
                    value: _e.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: p[29] || (p[29] = (o) => c.value.dateProp = o.target.value)
                  }, [
                    (t(!0), l(w, null, I(U.value, (o) => (t(), l("option", {
                      key: o.key,
                      value: o.key
                    }, m(o.name), 9, Kr))), 128))
                  ], 40, qr),
                  g(O, { name: "chevron-down" })
                ])
              ])),
              d.lockViews ? h("", !0) : (t(), l(w, { key: 4 }, [
                Rr,
                i("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: Ct
                }, [
                  g(O, { name: "copy" }),
                  b("Dupliquer la vue")
                ]),
                c.value.locked ? h("", !0) : (t(), l("button", {
                  key: 0,
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: a.value.length < 2,
                  onClick: St
                }, [
                  g(O, { name: "trash" }),
                  b("Supprimer la vue")
                ], 8, jr))
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        g(Rt, {
          open: Et.value,
          "onUpdate:open": p[31] || (p[31] = (o) => Et.value = o),
          prop: ((z = fe.value) == null ? void 0 : z.prop) ?? null,
          row: (pe = fe.value) == null ? void 0 : pe.row,
          anchor: Jt.value,
          onUpdate: p[32] || (p[32] = (o) => fe.value && u("update", fe.value.row, fe.value.prop.key, o)),
          onCreateOption: p[33] || (p[33] = (o) => fe.value && u("createOption", fe.value.prop, o)),
          onUpdateOption: p[34] || (p[34] = (o, _) => fe.value && u("updateOption", fe.value.prop, o, _)),
          onDeleteOption: p[35] || (p[35] = (o) => fe.value && u("deleteOption", fe.value.prop, o))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), Wr = {
  key: 0,
  class: "at-drawer-wrap"
}, Yr = ["aria-label"], Jr = { class: "at-drawer__head" }, Zr = { class: "at-drawer__crumb" }, Xr = /* @__PURE__ */ i("span", { class: "at-spacer" }, null, -1), ei = { class: "at-drawer__body" }, ti = /* @__PURE__ */ G({
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
    const e = de(s, "open"), n = N();
    let a = null;
    function r(u) {
      u.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return $e(e, (u) => {
      var v;
      u ? (a = document.activeElement, document.addEventListener("keydown", r), Le(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.focus();
      })) : (document.removeEventListener("keydown", r), (v = a == null ? void 0 : a.focus) == null || v.call(a));
    }, { immediate: !0 }), at(() => document.removeEventListener("keydown", r)), (u, v) => (t(), q(wt, { to: "body" }, [
      g(ha, { name: "at-drawer" }, {
        default: B(() => [
          e.value ? (t(), l("div", Wr, [
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
              style: ve({ width: `min(${u.width}px, 100%)` })
            }, [
              i("header", Jr, [
                i("span", Zr, [
                  K(u.$slots, "crumb", {}, () => [
                    b(m(u.label), 1)
                  ])
                ]),
                Xr,
                K(u.$slots, "actions"),
                g(J, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: v[1] || (v[1] = (c) => e.value = !1)
                })
              ]),
              i("div", ei, [
                K(u.$slots, "default")
              ])
            ], 12, Yr)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ai = ["aria-label"], ni = {
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
      const r = [...((c = e.value) == null ? void 0 : c.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!r.length) return;
      const u = r.indexOf(document.activeElement), v = (f) => {
        a.preventDefault(), r[(f + r.length) % r.length].focus();
      };
      a.key === "ArrowDown" ? v(u + 1) : a.key === "ArrowUp" ? v(u < 0 ? r.length - 1 : u - 1) : a.key === "Home" ? v(0) : a.key === "End" && v(r.length - 1);
    }
    return (a, r) => (t(), l("div", {
      ref_key: "el",
      ref: e,
      class: "at-menu",
      role: "menu",
      "aria-label": a.label,
      style: ve(a.minWidth ? { minWidth: a.minWidth + "px" } : void 0),
      onKeydown: n
    }, [
      a.label ? (t(), l("div", ni, m(a.label), 1)) : h("", !0),
      K(a.$slots, "default")
    ], 44, ai));
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
    return (a, r) => (t(), q(we, {
      open: e.value,
      "onUpdate:open": r[0] || (r[0] = (u) => e.value = u),
      align: a.align,
      placement: a.placement
    }, {
      trigger: B((u) => [
        K(a.$slots, "trigger", tn(an(u)))
      ]),
      default: B(() => [
        g($a, {
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
}), li = { class: "at-empty" }, si = /* @__PURE__ */ G({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(s) {
    return (e, n) => (t(), l("div", li, [
      K(e.$slots, "default", {}, () => [
        b(m(e.message), 1)
      ]),
      K(e.$slots, "action")
    ]));
  }
}), oi = { class: "at-field" }, ri = ["for"], ii = ["id"], ui = ["id"], Pt = /* @__PURE__ */ G({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(s) {
    const n = s.id ?? nt("field");
    return (a, r) => (t(), l("div", oi, [
      a.label ? (t(), l("label", {
        key: 0,
        class: "at-label",
        for: C(n)
      }, m(a.label), 9, ri)) : h("", !0),
      K(a.$slots, "default", {
        id: C(n),
        invalid: !!a.error,
        describedby: a.error || a.hint ? C(n) + "-hint" : void 0
      }),
      a.error ? (t(), l("span", {
        key: 1,
        id: C(n) + "-hint",
        class: "at-hint at-hint--error"
      }, m(a.error), 9, ii)) : a.hint ? (t(), l("span", {
        key: 2,
        id: C(n) + "-hint",
        class: "at-hint"
      }, m(a.hint), 9, ui)) : h("", !0)
    ]));
  }
}), di = ["role", "aria-label", "aria-hidden"], Aa = /* @__PURE__ */ G({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: j(["at-tile", e.size !== "sm" && `at-tile--${e.size}`, e.color === "neutral" ? "at-tile--neutral" : `at-tone-${e.color}`]),
      role: e.label ? "img" : void 0,
      "aria-label": e.label,
      "aria-hidden": e.label ? void 0 : "true"
    }, [
      g(O, { name: e.name }, null, 8, ["name"])
    ], 10, di));
  }
}), ci = {
  key: 0,
  class: "at-input-wrap"
}, pi = ["type", "placeholder", "disabled", "aria-invalid"], vi = ["type", "placeholder", "disabled", "aria-invalid"], Nt = /* @__PURE__ */ G({
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
    const n = de(s, "modelValue"), a = s, r = N();
    return e({ focus: () => {
      var u;
      return (u = r.value) == null ? void 0 : u.focus();
    }, el: r }), (u, v) => u.icon || u.kbd ? (t(), l("div", ci, [
      u.icon ? (t(), q(O, {
        key: 0,
        name: u.icon
      }, null, 8, ["name"])) : h("", !0),
      te(i("input", ye(u.$attrs, {
        ref_key: "el",
        ref: r,
        "onUpdate:modelValue": v[0] || (v[0] = (c) => n.value = c),
        class: "at-input",
        style: a.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: u.type,
        placeholder: u.placeholder,
        disabled: u.disabled,
        "aria-invalid": u.invalid || void 0
      }), null, 16, pi), [
        [It, n.value]
      ]),
      u.kbd ? (t(), q(Te, { key: 1 }, {
        default: B(() => [
          b(m(u.kbd), 1)
        ]),
        _: 1
      })) : h("", !0)
    ])) : te((t(), l("input", ye({ key: 1 }, u.$attrs, {
      ref_key: "el",
      ref: r,
      "onUpdate:modelValue": v[1] || (v[1] = (c) => n.value = c),
      class: "at-input",
      style: a.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: u.type,
      placeholder: u.placeholder,
      disabled: u.disabled,
      "aria-invalid": u.invalid || void 0
    }), null, 16, vi)), [
      [It, n.value]
    ]);
  }
}), ra = '.at-pop, [aria-modal="true"]', mi = { esc: "escape", space: " ", del: "delete", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", return: "enter" }, Ca = () => typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "");
function Sa(s) {
  const e = s.toLowerCase().split("+");
  let n = e.pop() ?? "";
  n === "" && e.length && (e.pop(), n = "+");
  const a = { key: mi[n] ?? n, mod: !1, ctrl: !1, meta: !1, alt: !1, shift: !1 };
  for (const r of e)
    r === "mod" || r === "ctrl" || r === "meta" || r === "alt" || r === "shift" ? a[r] = !0 : r === "cmd" ? a.meta = !0 : r === "option" && (a.alt = !0);
  return a;
}
function hi(s, e, n = Ca()) {
  var L;
  if ((s.key ?? "").toLowerCase() !== e.key) return !1;
  const r = e.ctrl || e.mod && !n, u = e.meta || e.mod && n, v = e.key.length === 1;
  return (v && !!((L = s.getModifierState) != null && L.call(s, "AltGraph")) ? !1 : s.ctrlKey) !== r || s.metaKey !== u || (e.alt ? !s.altKey : s.altKey && !v) ? !1 : e.shift ? s.shiftKey : e.key.length === 1 || !s.shiftKey;
}
function Ad(s, e = Ca()) {
  const n = Sa(s), r = {
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
  return (n.ctrl || n.mod && !e) && u.push(e ? "⌃" : "Ctrl"), n.alt && u.push(e ? "⌥" : "Alt"), n.shift && u.push(e ? "⇧" : "Maj"), (n.meta || n.mod && e) && u.push("⌘"), e ? u.join("") + r : [...u, r].join(" ");
}
const fi = (s) => {
  var n;
  const e = s;
  return !e || !e.tagName ? !1 : e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable || ((n = e.closest) == null ? void 0 : n.call(e, '[contenteditable=""], [contenteditable="true"]')) != null;
}, gi = 'button, a[href], summary, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="switch"], [role="option"]', yi = (s, e) => {
  var n;
  return (s.key === "Enter" || s.key === " ") && !s.ctrlKey && !s.metaKey && !!((n = e == null ? void 0 : e.closest) != null && n.call(e, gi));
}, Be = [];
let mt = !1;
function ia(s) {
  var u;
  if (s.defaultPrevented || s.isComposing) return;
  const e = s.target, n = fi(e), a = typeof document < "u" && document.querySelector(ra) != null, r = !!((u = e == null ? void 0 : e.closest) != null && u.call(e, ra));
  if (!yi(s, e))
    for (let v = Be.length - 1; v >= 0; v--) {
      const c = Be[v];
      if (c.combos.some((f) => hi(s, f)) && !(n && !c.opts.allowInInput) && !(a && !(n && c.opts.allowInInput && r)) && !(c.opts.when && !c.opts.when())) {
        s.preventDefault(), c.handler(s);
        return;
      }
    }
}
function ua() {
  typeof document > "u" || (Be.length && !mt ? (document.addEventListener("keydown", ia), mt = !0) : !Be.length && mt && (document.removeEventListener("keydown", ia), mt = !1));
}
function Qt(s, e, n = {}) {
  const a = { combos: (Array.isArray(s) ? s : [s]).map(Sa), handler: e, opts: n };
  Be.push(a), ua();
  const r = () => {
    const u = Be.indexOf(a);
    u >= 0 && (Be.splice(u, 1), ua());
  };
  return fa() && at(r), r;
}
const bi = ["aria-label", "aria-activedescendant"], ki = ["id", "aria-selected", "onClick", "onDblclick"], _i = {
  key: 0,
  class: "at-list__empty"
}, wi = /* @__PURE__ */ G({
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
    const a = s, r = de(s, "active"), u = n, v = N(), c = nt("at-list"), f = (D) => typeof a.rowKey == "function" ? a.rowKey(D) : String(D == null ? void 0 : D[a.rowKey]), L = V(() => a.items.map(f)), $ = V(() => r.value == null ? -1 : L.value.indexOf(r.value)), F = (D) => `${c}-${D}`, E = (D) => {
      const Q = D;
      return String((Q == null ? void 0 : Q.label) ?? (Q == null ? void 0 : Q.title) ?? (Q == null ? void 0 : Q.name) ?? f(D));
    };
    function S(D) {
      const Q = L.value.length;
      if (!Q) return;
      const H = $.value, W = H < 0 ? D > 0 ? 0 : Q - 1 : Math.max(0, Math.min(Q - 1, H + D));
      r.value = L.value[W];
    }
    function y(D) {
      L.value.length && (r.value = L.value[Math.max(0, Math.min(L.value.length - 1, D))]);
    }
    function U() {
      const D = $.value;
      D >= 0 && u("open", a.items[D]);
    }
    function Z(D) {
      if (D.ctrlKey || D.metaKey || D.altKey) return;
      const Q = D.key.toLowerCase();
      if (Q === "arrowdown" || Q === "j") S(1);
      else if (Q === "arrowup" || Q === "k") S(-1);
      else if (Q === "home") y(0);
      else if (Q === "end") y(L.value.length - 1);
      else if (Q === "enter") U();
      else return;
      D.preventDefault();
    }
    if (a.global) {
      const D = () => a.items.length > 0;
      Qt(["j", "arrowdown"], () => S(1), { when: D }), Qt(["k", "arrowup"], () => S(-1), { when: D }), Qt("enter", U, { when: () => $.value >= 0 });
    }
    return $e($, (D) => {
      D < 0 || Le(() => {
        var Q, H;
        return (H = (Q = document.getElementById(F(D))) == null ? void 0 : Q.scrollIntoView) == null ? void 0 : H.call(Q, { block: "nearest" });
      });
    }), e({ focus: () => {
      var D;
      return (D = v.value) == null ? void 0 : D.focus();
    }, move: S }), (D, Q) => (t(), l("div", {
      ref_key: "el",
      ref: v,
      class: "at-list",
      role: "listbox",
      tabindex: "0",
      "aria-label": D.label,
      "aria-activedescendant": $.value >= 0 ? F($.value) : void 0,
      onKeydown: Z
    }, [
      (t(!0), l(w, null, I(D.items, (H, W) => (t(), l("div", {
        id: F(W),
        key: L.value[W],
        class: j(["at-list__item", W === $.value && "is-active"]),
        role: "option",
        "aria-selected": W === $.value,
        onClick: (X) => r.value = L.value[W],
        onDblclick: (X) => u("open", H)
      }, [
        K(D.$slots, "item", {
          item: H,
          active: W === $.value,
          index: W
        }, () => [
          b(m(E(H)), 1)
        ])
      ], 42, ki))), 128)),
      D.items.length ? h("", !0) : (t(), l("div", _i, [
        K(D.$slots, "empty", {}, () => [
          b("Aucun élément")
        ])
      ]))
    ], 40, bi));
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
}, $i = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", Ht = {
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
function Cd(s) {
  Object.assign(Ht, s);
}
const Sd = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, Mi = ["role", "aria-label", "aria-hidden"], Ai = ["viewBox", "width", "height"], Ci = ["d"], Si = ["stroke-width", "innerHTML"], Vi = {
  key: 0,
  class: "at-logo__name"
}, Ti = /* @__PURE__ */ G({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(s) {
    const e = s, n = V(() => Ht[e.app] ?? Ht.atelier), a = V(() => e.name ?? n.value.name), r = V(() => Math.max(16, e.size)), u = V(() => ({
      "--at-logo-size": r.value + "px",
      "--at-logo-fill": `var(--${n.value.color})`
    }));
    return (v, c) => (t(), l("span", {
      class: j(["at-logo", v.wordmark && "at-logo--wordmark"]),
      style: ve(u.value),
      role: !v.wordmark && v.label ? "img" : void 0,
      "aria-label": v.wordmark ? void 0 : v.label,
      "aria-hidden": !v.wordmark && !v.label ? "true" : void 0
    }, [
      (t(), l("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${C(xt).size} ${C(xt).size}`,
        width: r.value,
        height: r.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        i("path", {
          class: "at-logo__tile",
          d: C($i)
        }, null, 8, Ci),
        i("g", {
          class: "at-logo__glyph",
          "stroke-width": C(xt).stroke,
          innerHTML: n.value.glyph
        }, null, 8, Si)
      ], 8, Ai)),
      v.wordmark ? (t(), l("span", Vi, m(a.value), 1)) : h("", !0)
    ], 14, Mi));
  }
}), Li = { class: "at-login__panel" }, Di = {
  key: 0,
  class: "at-login__brand"
}, zi = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, Ei = ["aria-labelledby"], Oi = { class: "at-login__head" }, Bi = ["id"], Qi = {
  key: 0,
  class: "at-login__desc"
}, xi = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, Ii = /* @__PURE__ */ i("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ i("span", null, "ou")
], -1), Fi = {
  key: 1,
  class: "at-login__foot"
}, Ui = /* @__PURE__ */ G({
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
    const a = de(s, "username"), r = de(s, "password"), u = de(s, "remember"), v = s, c = n, f = nt("login"), L = V(() => v.loading !== !1), $ = V(() => {
      var y;
      return (v.mark ?? ((y = v.brand) == null ? void 0 : y.trim().charAt(0)) ?? "").toUpperCase();
    }), F = N(), E = N();
    function S() {
      var y, U;
      if (!L.value) {
        if (!a.value.trim()) return (y = F.value) == null ? void 0 : y.focus();
        if (!r.value) return (U = E.value) == null ? void 0 : U.focus();
        c("submit", { username: a.value.trim(), password: r.value, remember: u.value });
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
        i("div", Li, [
          y.brand || y.$slots.brand ? (t(), l("div", Di, [
            K(y.$slots, "brand", {}, () => [
              i("span", zi, m($.value), 1),
              b(m(y.brand), 1)
            ])
          ])) : h("", !0),
          i("section", {
            class: "at-login__card",
            "aria-labelledby": C(f)
          }, [
            i("header", Oi, [
              i("h1", {
                id: C(f),
                class: "at-login__title"
              }, m(y.title), 9, Bi),
              y.description ? (t(), l("p", Qi, m(y.description), 1)) : h("", !0)
            ]),
            y.error ? (t(), l("p", xi, m(y.error), 1)) : h("", !0),
            K(y.$slots, "default", {}, () => [
              i("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: re(S, ["prevent"])
              }, [
                g(Pt, { label: y.usernameLabel }, {
                  default: B((Z) => [
                    g(Nt, {
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
                g(Pt, { label: y.passwordLabel }, {
                  default: B((Z) => [
                    g(Nt, {
                      id: Z.id,
                      ref_key: "passwordInput",
                      ref: E,
                      modelValue: r.value,
                      "onUpdate:modelValue": U[1] || (U[1] = (D) => r.value = D),
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
                g(J, {
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
                Ii,
                g(J, {
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
          ], 8, Ei),
          y.$slots.footer ? (t(), l("footer", Fi, [
            K(y.$slots, "footer")
          ])) : h("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), Pi = ["role", "aria-checked", "disabled"], Ni = {
  key: 2,
  class: "at-menu-meta"
}, Ne = /* @__PURE__ */ G({
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
      class: j(["at-menu-item", e.danger && "at-menu-item--danger"]),
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
      })) : e.meta ? (t(), l("span", Ni, m(e.meta), 1)) : e.checked ? (t(), q(O, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : h("", !0)
    ], 10, Pi));
  }
}), Hi = {}, qi = { class: "at-menu-label" };
function Ki(s, e) {
  return t(), l("div", qi, [
    K(s.$slots, "default")
  ]);
}
const qt = /* @__PURE__ */ $t(Hi, [["render", Ki]]), Ri = {}, ji = {
  class: "at-menu-sep",
  role: "separator"
};
function Gi(s, e) {
  return t(), l("div", ji);
}
const ft = /* @__PURE__ */ $t(Ri, [["render", Gi]]), Wi = {
  key: 0,
  class: "at-modal-wrap"
}, Yi = ["aria-label"], Ji = { class: "at-modal__head" }, Zi = { style: { flex: "1", "min-width": "0" } }, Xi = { class: "at-modal__title" }, eu = {
  key: 0,
  class: "at-modal__desc"
}, tu = { class: "at-modal__body" }, au = {
  key: 0,
  class: "at-modal__foot"
}, nu = /* @__PURE__ */ G({
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
    const e = de(s, "open"), n = N();
    let a = null;
    function r(u) {
      u.key === "Escape" && !document.querySelector(".at-pop") && (e.value = !1);
    }
    return $e(e, (u) => {
      var v;
      u ? (a = document.activeElement, document.addEventListener("keydown", r), Le(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.focus();
      })) : (document.removeEventListener("keydown", r), (v = a == null ? void 0 : a.focus) == null || v.call(a));
    }, { immediate: !0 }), at(() => document.removeEventListener("keydown", r)), (u, v) => (t(), q(wt, { to: "body" }, [
      g(ha, { name: "at-modal" }, {
        default: B(() => [
          e.value ? (t(), l("div", Wi, [
            i("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: v[0] || (v[0] = (c) => u.dismissible && (e.value = !1))
            }),
            i("div", {
              ref_key: "panel",
              ref: n,
              class: j(["at-modal", u.size !== "md" && `at-modal--${u.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": u.title,
              tabindex: "-1"
            }, [
              i("header", Ji, [
                i("div", Zi, [
                  i("h2", Xi, m(u.title), 1),
                  u.description ? (t(), l("p", eu, m(u.description), 1)) : h("", !0)
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
              i("div", tu, [
                K(u.$slots, "default")
              ]),
              u.$slots.footer ? (t(), l("footer", au, [
                K(u.$slots, "footer", {
                  close: () => e.value = !1
                })
              ])) : h("", !0)
            ], 10, Yi)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), lu = ["aria-label"], su = {
  key: 0,
  class: "at-nav-label"
}, ou = /* @__PURE__ */ G({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("nav", {
      class: "at-nav",
      "aria-label": e.label
    }, [
      e.label ? (t(), l("div", su, m(e.label), 1)) : h("", !0),
      K(e.$slots, "default")
    ], 8, lu));
  }
}), ru = ["href", "aria-current"], iu = { class: "at-ellipsis" }, uu = {
  key: 3,
  class: "at-nav-count"
}, du = /* @__PURE__ */ G({
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
        style: ve({ background: e.mark })
      }, null, 4)) : e.icon && e.tile ? (t(), q(Aa, {
        key: 1,
        name: e.icon,
        color: e.tile
      }, null, 8, ["name", "color"])) : e.icon ? (t(), q(O, {
        key: 2,
        name: e.icon
      }, null, 8, ["name"])) : h("", !0),
      i("span", iu, [
        K(e.$slots, "default", {}, () => [
          b(m(e.label), 1)
        ])
      ]),
      e.count != null && e.count !== "" ? (t(), l("span", uu, m(e.count), 1)) : h("", !0)
    ], 8, ru));
  }
}), cu = {
  key: 0,
  class: "at-page__head"
}, pu = { class: "t-heading-1" }, vu = { key: 0 }, mu = /* @__PURE__ */ G({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(s) {
    return (e, n) => (t(), l("div", {
      class: j(["at-page", e.wide && "at-page--wide"])
    }, [
      e.title || e.$slots.head ? (t(), l("div", cu, [
        K(e.$slots, "head", {}, () => [
          i("h1", pu, m(e.title), 1),
          e.description ? (t(), l("p", vu, m(e.description), 1)) : h("", !0)
        ])
      ])) : h("", !0),
      K(e.$slots, "default")
    ], 2));
  }
}), hu = { class: "at-proplist" }, fu = ["disabled", "onClick"], gu = /* @__PURE__ */ G({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update", "createOption", "updateOption", "deleteOption"],
  setup(s, { expose: e, emit: n }) {
    const a = s, r = n, u = V(() => a.schema.filter((E) => {
      var S;
      return E.type !== "title" && !((S = a.exclude) != null && S.includes(E.key));
    })), v = N(null), c = N(null), f = N(!1), L = {};
    function $(E, S) {
      if (Ze(E)) {
        if (E.type === "checkbox") {
          r("update", E.key, !a.row[E.key]);
          return;
        }
        c.value = S, v.value = E, f.value = !0;
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
      i("dl", hu, [
        (t(!0), l(w, null, I(u.value, (y) => (t(), l(w, {
          key: y.key
        }, [
          i("dt", null, [
            g(O, {
              name: C(ht)(y)
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
              disabled: !C(Ze)(y),
              onClick: (U) => $(y, U.currentTarget)
            }, [
              g(Ae, {
                prop: y,
                row: E.row
              }, null, 8, ["prop", "row"])
            ], 8, fu)
          ])
        ], 64))), 128))
      ]),
      g(Rt, {
        open: f.value,
        "onUpdate:open": S[0] || (S[0] = (y) => f.value = y),
        prop: v.value,
        row: E.row,
        anchor: c.value,
        onUpdate: S[1] || (S[1] = (y) => v.value && r("update", v.value.key, y)),
        onCreateOption: S[2] || (S[2] = (y) => v.value && r("createOption", v.value.key, y)),
        onUpdateOption: S[3] || (S[3] = (y, U) => v.value && r("updateOption", v.value.key, y, U)),
        onDeleteOption: S[4] || (S[4] = (y) => v.value && r("deleteOption", v.value.key, y))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), yu = ["aria-label"], bu = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], ku = /* @__PURE__ */ G({
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
    const e = de(s, "modelValue");
    return (n, a) => (t(), l("div", {
      class: "at-segment",
      role: "group",
      "aria-label": n.label
    }, [
      (t(!0), l(w, null, I(n.items, (r) => (t(), l("button", {
        key: String(r.value),
        type: "button",
        "aria-pressed": e.value === r.value,
        "aria-label": r.iconOnly ? r.label : void 0,
        title: r.iconOnly ? r.label : void 0,
        disabled: r.disabled,
        onClick: (u) => e.value = r.value
      }, [
        r.icon ? (t(), q(O, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : h("", !0),
        r.iconOnly ? h("", !0) : (t(), l(w, { key: 1 }, [
          b(m(r.label), 1)
        ], 64))
      ], 8, bu))), 128))
    ], 8, yu));
  }
}), _u = { class: "at-select" }, wu = ["disabled", "aria-invalid"], $u = {
  key: 0,
  value: null,
  disabled: ""
}, Mu = ["value", "disabled"], Au = /* @__PURE__ */ G({
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
    const e = de(s, "modelValue");
    return (n, a) => (t(), l("div", _u, [
      te(i("select", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (r) => e.value = r),
        disabled: n.disabled,
        "aria-invalid": n.invalid || void 0,
        style: n.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        n.placeholder ? (t(), l("option", $u, m(n.placeholder), 1)) : h("", !0),
        (t(!0), l(w, null, I(n.options, (r) => (t(), l("option", {
          key: String(r.value),
          value: r.value,
          disabled: r.disabled
        }, m(r.label), 9, Mu))), 128))
      ], 16, wu), [
        [Pe, e.value]
      ]),
      g(O, { name: "chevron-down" })
    ]));
  }
}), Cu = {}, Su = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Vu = {
  key: 0,
  class: "at-sidebar__foot"
};
function Tu(s, e) {
  return t(), l("aside", Su, [
    K(s.$slots, "header"),
    K(s.$slots, "default"),
    s.$slots.footer ? (t(), l("div", Vu, [
      K(s.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const Lu = /* @__PURE__ */ $t(Cu, [["render", Tu]]), Du = { class: "at-stat__label" }, zu = { class: "at-stat__row" }, Eu = { class: "at-stat__value" }, Ou = ["viewBox"], Bu = ["d"], Qu = ["d"], xu = ["cx", "cy"], Iu = {
  key: 1,
  class: "at-stat__foot"
}, da = 220, Ye = 32, Fu = /* @__PURE__ */ G({
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
      const r = Math.min(...a), u = Math.max(...a), v = u - r || 1, c = a.map(($, F) => [2 + F * (da - 4) / (a.length - 1), Ye - 3 - ($ - r) / v * (Ye - 8)]), f = "M" + c.map(($) => $.map((F) => F.toFixed(1)).join(" ")).join(" L"), L = c[c.length - 1];
      return { line: f, area: `${f} L${L[0].toFixed(1)} ${Ye} L2 ${Ye} Z`, end: L };
    });
    return (a, r) => (t(), l("div", {
      class: j(["at-stat", a.color && ["at-stat--striped", `at-tone-${a.color}`]])
    }, [
      i("span", Du, m(a.label), 1),
      i("div", zu, [
        i("span", Eu, [
          K(a.$slots, "value", {}, () => [
            b(m(a.value), 1)
          ])
        ]),
        a.delta ? (t(), l("span", {
          key: 0,
          class: j(["at-stat__delta", a.trend && `at-stat__delta--${a.trend}`])
        }, m(a.delta), 3)) : h("", !0)
      ]),
      n.value ? (t(), l("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${da} ${Ye}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        i("path", {
          class: "area",
          d: n.value.area
        }, null, 8, Bu),
        i("path", {
          class: "line",
          d: n.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Qu),
        i("circle", {
          class: "end",
          cx: n.value.end[0],
          cy: n.value.end[1],
          r: "2.5"
        }, null, 8, xu)
      ], 8, Ou)) : h("", !0),
      a.foot || a.$slots.foot ? (t(), l("span", Iu, [
        K(a.$slots, "foot", {}, () => [
          b(m(a.foot), 1)
        ])
      ])) : h("", !0)
    ], 2));
  }
}), Uu = {
  key: 0,
  class: "at-toggle"
}, Pu = ["disabled"], Nu = ["disabled"], Hu = /* @__PURE__ */ G({
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
    const e = de(s, "modelValue");
    return (n, a) => n.label || n.$slots.default ? (t(), l("label", Uu, [
      te(i("input", ye(n.$attrs, {
        "onUpdate:modelValue": a[0] || (a[0] = (r) => e.value = r),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: n.disabled
      }), null, 16, Pu), [
        [gt, e.value]
      ]),
      K(n.$slots, "default", {}, () => [
        b(m(n.label), 1)
      ])
    ])) : te((t(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": a[1] || (a[1] = (r) => e.value = r),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: n.disabled
    }), null, 16, Nu)), [
      [gt, e.value]
    ]);
  }
}), qu = { class: "at-table-wrap" }, Ku = { class: "at-table" }, Ru = ["onClick"], ju = { key: 0 }, Gu = ["colspan"], Wu = /* @__PURE__ */ G({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(s) {
    return (e, n) => (t(), l("div", qu, [
      i("table", Ku, [
        i("thead", null, [
          i("tr", null, [
            (t(!0), l(w, null, I(e.columns, (a) => (t(), l("th", {
              key: a.key,
              class: j({ "at-num": a.align === "right" }),
              style: ve(a.width ? { width: a.width } : void 0)
            }, m(a.label), 7))), 128))
          ])
        ]),
        i("tbody", null, [
          (t(!0), l(w, null, I(e.rows, (a, r) => (t(), l("tr", {
            key: e.rowKey ? a[e.rowKey] : r,
            style: ve(e.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (u) => e.$emit("rowClick", a)
          }, [
            (t(!0), l(w, null, I(e.columns, (u) => (t(), l("td", {
              key: u.key,
              class: j({ "at-num": u.align === "right" })
            }, [
              K(e.$slots, `cell-${u.key}`, {
                row: a,
                value: a[u.key]
              }, () => [
                b(m(u.format ? u.format(a[u.key], a) : a[u.key]), 1)
              ])
            ], 2))), 128))
          ], 12, Ru))), 128)),
          e.rows.length ? h("", !0) : (t(), l("tr", ju, [
            i("td", {
              colspan: e.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, m(e.empty ?? "Aucune donnée"), 9, Gu)
          ]))
        ])
      ])
    ]));
  }
}), Yu = ["aria-label"], Ju = ["aria-selected", "disabled", "onClick"], Zu = {
  key: 1,
  class: "at-count"
}, Xu = /* @__PURE__ */ G({
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
    const e = de(s, "modelValue");
    return (n, a) => (t(), l("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": n.label
    }, [
      (t(!0), l(w, null, I(n.items, (r) => (t(), l("button", {
        key: String(r.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": e.value === r.value,
        disabled: r.disabled,
        onClick: (u) => e.value = r.value
      }, [
        r.icon ? (t(), q(O, {
          key: 0,
          name: r.icon
        }, null, 8, ["name"])) : h("", !0),
        b(m(r.label) + " ", 1),
        r.count != null ? (t(), l("span", Zu, m(r.count), 1)) : h("", !0)
      ], 8, Ju))), 128))
    ], 8, Yu));
  }
}), ed = /* @__PURE__ */ G({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(s) {
    return (e, n) => (t(), l("span", {
      class: j(["at-tag", e.color !== "gray" && `at-tag--${e.color}`])
    }, [
      K(e.$slots, "default", {}, () => [
        b(m(e.label), 1)
      ])
    ], 2));
  }
}), td = ["rows", "placeholder", "disabled", "aria-invalid"], ad = /* @__PURE__ */ G({
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
    const e = de(s, "modelValue");
    return (n, a) => te((t(), l("textarea", ye(n.$attrs, {
      "onUpdate:modelValue": a[0] || (a[0] = (r) => e.value = r),
      class: "at-input",
      rows: n.rows ?? 3,
      placeholder: n.placeholder,
      disabled: n.disabled,
      "aria-invalid": n.invalid || void 0
    }), null, 16, td)), [
      [Ce, e.value]
    ]);
  }
}), Va = 3, Qe = ln([]), et = /* @__PURE__ */ new Map();
let nd = 0, tt = !1;
function ld(s) {
  const e = et.get(s);
  !e || e.handle || tt || (e.started = Date.now(), e.handle = setTimeout(() => Mt(s), e.remaining));
}
function jt() {
  Qe.slice(0, Va).forEach((s) => ld(s.id));
}
function sd(s) {
  const e = ++nd, n = s.duration ?? 5e3;
  return Qe.push({ id: e, message: s.message, tone: s.tone ?? "neutral", action: s.action, duration: n }), n > 0 && et.set(e, { handle: null, remaining: n, started: 0 }), jt(), e;
}
function Mt(s) {
  const e = s == null ? Qe.map((n) => n.id) : [s];
  for (const n of e) {
    const a = et.get(n);
    a != null && a.handle && clearTimeout(a.handle), et.delete(n);
    const r = Qe.findIndex((u) => u.id === n);
    r >= 0 && Qe.splice(r, 1);
  }
  jt();
}
function od() {
  if (!tt) {
    tt = !0;
    for (const s of et.values())
      s.handle && (clearTimeout(s.handle), s.handle = null, s.remaining = Math.max(0, s.remaining - (Date.now() - s.started)));
  }
}
function rd() {
  tt && (tt = !1, jt());
}
function id(s) {
  var n;
  const e = Qe.find((a) => a.id === s);
  Mt(s), (n = e == null ? void 0 : e.action) == null || n.onClick();
}
function Vd() {
  return { toast: sd, dismiss: Mt };
}
const ze = { items: nn(Qe), pause: od, resume: rd, runAction: id, dismiss: Mt }, ud = ["role", "aria-live"], dd = { class: "at-toast__msg" }, cd = /* @__PURE__ */ G({
  __name: "AtToaster",
  setup(s) {
    const e = V(() => ze.items.slice(0, Va)), n = { success: "check", danger: "alert", warning: "alert", info: "info" };
    function a(r) {
      r.currentTarget.contains(r.relatedTarget) || ze.resume();
    }
    return (r, u) => (t(), q(wt, { to: "body" }, [
      i("section", {
        class: "at-toaster",
        "aria-label": "Notifications",
        "aria-live": "polite",
        "aria-relevant": "additions",
        onMouseenter: u[0] || (u[0] = (v) => C(ze).pause()),
        onMouseleave: u[1] || (u[1] = (v) => C(ze).resume()),
        onFocusin: u[2] || (u[2] = (v) => C(ze).pause()),
        onFocusout: a
      }, [
        g(sn, { name: "at-toast" }, {
          default: B(() => [
            (t(!0), l(w, null, I(e.value, (v) => (t(), l("div", {
              key: v.id,
              class: j(["at-toast", v.tone !== "neutral" && `at-toast--${v.tone}`]),
              role: v.tone === "danger" ? "alert" : "status",
              "aria-live": v.tone === "danger" ? "assertive" : void 0
            }, [
              n[v.tone] ? (t(), q(O, {
                key: 0,
                name: n[v.tone],
                class: "at-toast__icon"
              }, null, 8, ["name"])) : h("", !0),
              i("span", dd, m(v.message), 1),
              v.action ? (t(), q(J, {
                key: 1,
                variant: "ghost",
                size: "sm",
                class: "at-toast__action",
                onClick: (c) => C(ze).runAction(v.id)
              }, {
                default: B(() => [
                  b(m(v.action.label), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : h("", !0),
              g(J, {
                variant: "ghost",
                size: "sm",
                icon: "x",
                "icon-only": "",
                label: "Fermer",
                onClick: (c) => C(ze).dismiss(v.id)
              }, null, 8, ["onClick"])
            ], 10, ud))), 128))
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
}, pa = () => typeof document < "u" ? document.documentElement : null, Je = N(Da(Ta) || "system"), za = N(Da(La) || "comfortable"), Ea = N(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let va = !1;
function Oa() {
  if (va || typeof window > "u") return;
  va = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    Ea.value = e.matches;
  }), $e(Je, (e) => {
    const n = pa();
    n && (e === "system" ? n.removeAttribute("data-theme") : n.dataset.theme = e, ca(Ta, e));
  }, { immediate: !0 }), $e(za, (e) => {
    const n = pa();
    n && (n.dataset.density = e, ca(La, e));
  }, { immediate: !0 });
}
function pd() {
  Oa();
  const s = V(() => Je.value === "system" ? Ea.value ? "dark" : "light" : Je.value), e = () => {
    Je.value = s.value === "dark" ? "light" : "dark";
  };
  return on() && rn(() => {
  }), { mode: Je, resolved: s, toggle: e };
}
function vd() {
  return Oa(), { density: za };
}
const md = ["aria-expanded", "aria-label", "onClick"], hd = { class: "at-user__text" }, fd = { class: "at-user__name" }, gd = {
  key: 0,
  class: "at-user__sub"
}, yd = /* @__PURE__ */ G({
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
    const e = ((c = fa()) == null ? void 0 : c.vnode.props) ?? {}, n = (f) => typeof e[f] == "function" || Array.isArray(e[f]), { mode: a } = pd(), { density: r } = vd(), u = [
      { value: "system", label: "Système", icon: "monitor" },
      { value: "light", label: "Clair", icon: "sun" },
      { value: "dark", label: "Sombre", icon: "moon" }
    ], v = [
      { value: "comfortable", label: "Confortable", icon: "list" },
      { value: "compact", label: "Compacte", icon: "menu" }
    ];
    return (f, L) => (t(), q(Ma, {
      placement: "right",
      "min-width": 232
    }, {
      trigger: B(({ toggle: $, open: F }) => [
        i("button", {
          type: "button",
          class: "at-user",
          "aria-haspopup": "menu",
          "aria-expanded": F,
          "aria-label": `Compte de ${f.name}`,
          onClick: $
        }, [
          g(He, {
            name: f.name,
            src: f.src,
            size: "md",
            tone: "accent"
          }, null, 8, ["name", "src"]),
          i("span", hd, [
            i("span", fd, m(f.name), 1),
            f.email ? (t(), l("span", gd, m(f.email), 1)) : h("", !0)
          ]),
          g(O, { name: "chevron-right" })
        ], 8, md)
      ]),
      default: B(() => [
        n("onProfile") || n("onSettings") || f.$slots.default ? (t(), l(w, { key: 0 }, [
          n("onProfile") ? (t(), q(Ne, {
            key: 0,
            icon: "person",
            onSelect: L[0] || (L[0] = ($) => f.$emit("profile"))
          }, {
            default: B(() => [
              b("Mon profil")
            ]),
            _: 1
          })) : h("", !0),
          n("onSettings") ? (t(), q(Ne, {
            key: 1,
            icon: "settings",
            onSelect: L[1] || (L[1] = ($) => f.$emit("settings"))
          }, {
            default: B(() => [
              b("Paramètres")
            ]),
            _: 1
          })) : h("", !0),
          K(f.$slots, "default"),
          f.theme || f.density || n("onLogout") ? (t(), q(ft, { key: 2 })) : h("", !0)
        ], 64)) : h("", !0),
        f.theme ? (t(), l(w, { key: 1 }, [
          g(qt, null, {
            default: B(() => [
              b("Thème")
            ]),
            _: 1
          }),
          (t(), l(w, null, I(u, ($) => g(Ne, {
            key: $.value,
            icon: $.icon,
            checked: C(a) === $.value,
            onSelect: (F) => a.value = $.value
          }, {
            default: B(() => [
              b(m($.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        f.theme && f.density ? (t(), q(ft, { key: 2 })) : h("", !0),
        f.density ? (t(), l(w, { key: 3 }, [
          g(qt, null, {
            default: B(() => [
              b("Densité")
            ]),
            _: 1
          }),
          (t(), l(w, null, I(v, ($) => g(Ne, {
            key: $.value,
            icon: $.icon,
            checked: C(r) === $.value,
            onSelect: (F) => r.value = $.value
          }, {
            default: B(() => [
              b(m($.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        n("onLogout") ? (t(), l(w, { key: 4 }, [
          f.theme || f.density ? (t(), q(ft, { key: 0 })) : h("", !0),
          g(Ne, {
            icon: "logout",
            onSelect: L[2] || (L[2] = ($) => f.$emit("logout"))
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
}), Td = {
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
}, bd = (s) => `var(--${s})`, Ld = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(bd), kd = {
  AtAppShell: fn,
  AtAvatar: He,
  AtBadge: bn,
  AtBreadcrumbs: Mn,
  AtButton: J,
  AtCard: Tn,
  AtCheckbox: ya,
  AtComments: Vl,
  AtDataView: Gr,
  AtDrawer: ti,
  AtDropdown: Ma,
  AtEmpty: si,
  AtField: Pt,
  AtIcon: O,
  AtIconTile: Aa,
  AtInput: Nt,
  AtKbd: Te,
  AtList: wi,
  AtLogo: Ti,
  AtLogin: Ui,
  AtMenu: $a,
  AtMenuItem: Ne,
  AtMenuLabel: qt,
  AtMenuSeparator: ft,
  AtModal: nu,
  AtNavGroup: ou,
  AtNavItem: du,
  AtPage: mu,
  AtPopover: we,
  AtProgress: wa,
  AtPropertyEditor: Rt,
  AtPropertyList: gu,
  AtPropertyValue: Ae,
  AtSegment: ku,
  AtSelect: Au,
  AtSidebar: Lu,
  AtStat: Fu,
  AtSwitch: Hu,
  AtTable: Wu,
  AtTabs: Xu,
  AtTag: ed,
  AtTextarea: ad,
  AtToaster: cd,
  AtUserMenu: yd
}, Dd = {
  install(s) {
    for (const [e, n] of Object.entries(kd)) s.component(e, n);
  }
};
export {
  fn as AtAppShell,
  He as AtAvatar,
  bn as AtBadge,
  Mn as AtBreadcrumbs,
  J as AtButton,
  Tn as AtCard,
  ya as AtCheckbox,
  Vl as AtComments,
  Gr as AtDataView,
  ti as AtDrawer,
  Ma as AtDropdown,
  si as AtEmpty,
  Pt as AtField,
  O as AtIcon,
  Aa as AtIconTile,
  Nt as AtInput,
  Te as AtKbd,
  wi as AtList,
  Ui as AtLogin,
  Ti as AtLogo,
  $a as AtMenu,
  Ne as AtMenuItem,
  qt as AtMenuLabel,
  ft as AtMenuSeparator,
  nu as AtModal,
  ou as AtNavGroup,
  du as AtNavItem,
  mu as AtPage,
  we as AtPopover,
  wa as AtProgress,
  Rt as AtPropertyEditor,
  gu as AtPropertyList,
  Ae as AtPropertyValue,
  ku as AtSegment,
  Au as AtSelect,
  Lu as AtSidebar,
  Fu as AtStat,
  Hu as AtSwitch,
  Wu as AtTable,
  Xu as AtTabs,
  ed as AtTag,
  ad as AtTextarea,
  cd as AtToaster,
  yd as AtUserMenu,
  Dd as Atelier,
  vt as LAYOUTS,
  $i as LOGO_TILE,
  Ft as ME,
  yt as NONE,
  Ot as OPS,
  na as OP_LABEL,
  ra as SHORTCUT_LAYERS,
  Bt as TAG_ROTATION,
  Va as TOAST_VISIBLE,
  Sd as WORDMARK,
  bt as addDays,
  Rn as applyView,
  xt as brandGrid,
  el as canCreate,
  Ld as chartColors,
  Kn as compareRows,
  sa as createView,
  bd as cssVar,
  Dd as default,
  Wn as defaultsFromFilters,
  $d as filter,
  kt as findOption,
  _t as formatDate,
  Zn as formatMonth,
  In as formatRelative,
  Ad as formatShortcut,
  me as getValue,
  jn as groupRows,
  ga as icons,
  be as isEmpty,
  Ht as logoApps,
  Xn as matchOptions,
  qn as matchRule,
  hi as matchShortcut,
  Un as mentionAt,
  Gn as monthGrid,
  Pn as nextMonday,
  tl as nextTagColor,
  Se as normalize,
  Ke as optionsOf,
  Sa as parseShortcut,
  wd as registerIcons,
  Cd as registerLogoApps,
  ka as resolveValue,
  la as shiftMonth,
  Md as sort,
  qe as splitMatch,
  Fn as splitMentions,
  Ee as today,
  Td as tokens,
  Oe as uid,
  vd as useDensity,
  nt as useId,
  Qt as useShortcut,
  pd as useTheme,
  Vd as useToast
};
//# sourceMappingURL=atelier.js.map

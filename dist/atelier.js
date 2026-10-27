import { defineComponent as R, computed as z, openBlock as e, createElementBlock as l, normalizeStyle as ce, normalizeClass as q, createBlock as H, createCommentVNode as h, renderSlot as P, createTextVNode as y, toDisplayString as v, ref as F, watch as Ce, createElementVNode as o, createVNode as f, Fragment as w, renderList as E, resolveDynamicComponent as Xt, withCtx as D, useModel as ie, withDirectives as ee, mergeProps as ye, vModelCheckbox as rt, mergeModels as re, onMounted as Da, onBeforeUnmount as dt, unref as C, vModelText as Me, withModifiers as se, nextTick as Le, Teleport as Ot, withKeys as Nt, vModelDynamic as Ct, shallowRef as Oa, isRef as Ee, vModelSelect as Ue, Transition as ea, normalizeProps as Ba, guardReactiveProps as Qa, getCurrentScope as Ea, onScopeDispose as Ua, getCurrentInstance as Fa } from "vue";
const ta = {
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
function Au(r) {
  Object.assign(ta, r);
}
const Pa = ["width", "height", "role", "aria-label", "aria-hidden", "innerHTML"], B = /* @__PURE__ */ R({
  __name: "AtIcon",
  props: {
    name: {},
    size: { default: 16 },
    label: {}
  },
  setup(r) {
    const a = r, n = z(() => ta[a.name] ?? "");
    return (t, i) => (e(), l("svg", {
      class: "at-icon",
      viewBox: "0 0 16 16",
      width: t.size,
      height: t.size,
      style: ce(t.size !== 16 ? { width: t.size + "px", height: t.size + "px" } : void 0),
      role: t.label ? "img" : void 0,
      "aria-label": t.label,
      "aria-hidden": t.label ? void 0 : "true",
      innerHTML: n.value
    }, null, 12, Pa));
  }
}), Ha = ["href", "aria-label"], Ia = ["type", "disabled", "aria-busy", "aria-label"], xa = {
  key: 0,
  class: "at-spin",
  "aria-hidden": "true"
}, j = /* @__PURE__ */ R({
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
  setup(r) {
    const a = r, n = z(() => [
      "at-btn",
      `at-btn--${a.variant}`,
      a.size !== "md" && `at-btn--${a.size}`,
      a.iconOnly && "at-btn--icon"
    ]);
    return (t, i) => t.href && !t.disabled ? (e(), l("a", {
      key: 0,
      href: t.href,
      class: q(n.value),
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.icon ? (e(), H(B, {
        key: 0,
        name: t.icon
      }, null, 8, ["name"])) : h("", !0),
      P(t.$slots, "default", {}, () => [
        y(v(t.iconOnly ? "" : t.label), 1)
      ])
    ], 10, Ha)) : (e(), l("button", {
      key: 1,
      type: t.type,
      class: q(n.value),
      disabled: t.disabled || t.loading,
      "aria-busy": t.loading || void 0,
      "aria-label": t.iconOnly ? t.label : void 0
    }, [
      t.loading ? (e(), l("span", xa)) : t.icon ? (e(), H(B, {
        key: 1,
        name: t.icon
      }, null, 8, ["name"])) : h("", !0),
      t.iconOnly ? h("", !0) : P(t.$slots, "default", { key: 2 }, () => [
        y(v(t.label), 1)
      ])
    ], 10, Ia));
  }
}), Na = { class: "at-shell__side" }, qa = { class: "at-shell__main" }, Ra = { class: "at-topbar" }, Ka = /* @__PURE__ */ R({
  __name: "AtAppShell",
  props: {
    routeKey: {}
  },
  setup(r, { expose: a }) {
    const n = r, t = F(!1), i = F();
    return Ce(() => n.routeKey, () => {
      t.value = !1, i.value && (i.value.scrollTop = 0);
    }), a({ closeNav: () => t.value = !1 }), (c, m) => (e(), l("div", {
      class: q(["at-shell", t.value && "at-shell--open"])
    }, [
      o("div", Na, [
        P(c.$slots, "sidebar")
      ]),
      o("div", {
        class: "at-shell__scrim",
        onClick: m[0] || (m[0] = (p) => t.value = !1)
      }),
      o("div", qa, [
        o("header", Ra, [
          f(j, {
            class: "at-topbar__menu",
            variant: "ghost",
            size: "sm",
            icon: "menu",
            "icon-only": "",
            label: "Ouvrir la navigation",
            onClick: m[1] || (m[1] = (p) => t.value = !t.value)
          }),
          P(c.$slots, "topbar")
        ]),
        o("main", {
          ref_key: "page",
          ref: i,
          class: "at-shell__page"
        }, [
          P(c.$slots, "default")
        ], 512)
      ])
    ], 2));
  }
}), ja = ["title"], Wa = ["src", "alt"], Pe = /* @__PURE__ */ R({
  __name: "AtAvatar",
  props: {
    name: {},
    src: {},
    size: { default: "sm" },
    tone: { default: "neutral" }
  },
  setup(r) {
    const a = r, n = z(() => a.name.split(/\s+/).filter(Boolean).map((t) => t[0]).join("").slice(0, 2).toUpperCase() || "?");
    return (t, i) => (e(), l("span", {
      class: q(["at-avatar", t.size !== "sm" && `at-avatar--${t.size}`, t.tone === "accent" && "at-avatar--accent"]),
      title: t.name
    }, [
      t.src ? (e(), l("img", {
        key: 0,
        src: t.src,
        alt: t.name
      }, null, 8, Wa)) : (e(), l(w, { key: 1 }, [
        y(v(n.value), 1)
      ], 64))
    ], 10, ja));
  }
}), Ga = /* @__PURE__ */ R({
  __name: "AtBadge",
  props: {
    tone: { default: "neutral" },
    label: {}
  },
  setup(r) {
    return (a, n) => (e(), l("span", {
      class: q(["at-badge", a.tone !== "neutral" && `at-badge--${a.tone}`])
    }, [
      P(a.$slots, "default", {}, () => [
        y(v(a.label), 1)
      ])
    ], 2));
  }
}), Ya = {
  class: "at-breadcrumbs at-ellipsis",
  "aria-label": "Fil d'Ariane"
}, Ja = {
  key: 0,
  "aria-hidden": "true"
}, Za = {
  key: 1,
  "aria-current": "page",
  class: "at-ellipsis"
}, Xa = ["href", "onClick"], el = /* @__PURE__ */ R({
  __name: "AtBreadcrumbs",
  props: {
    items: {}
  },
  setup(r) {
    return (a, n) => (e(), l("nav", Ya, [
      (e(!0), l(w, null, E(a.items, (t, i) => (e(), l(w, { key: i }, [
        i > 0 ? (e(), l("span", Ja, "/")) : h("", !0),
        i === a.items.length - 1 ? (e(), l("span", Za, v(t.label), 1)) : (e(), l("a", {
          key: 2,
          href: t.href ?? "#",
          onClick: (c) => t.onClick && (c.preventDefault(), t.onClick())
        }, v(t.label), 9, Xa))
      ], 64))), 128))
    ]));
  }
}), tl = {
  key: 0,
  class: "at-card__head"
}, al = {
  key: 0,
  class: "at-card__title"
}, ll = {
  key: 1,
  class: "at-card__desc"
}, nl = {
  key: 1,
  class: "at-card__foot"
}, sl = /* @__PURE__ */ R({
  __name: "AtCard",
  props: {
    title: {},
    description: {},
    href: {},
    as: {},
    color: {}
  },
  setup(r) {
    return (a, n) => (e(), H(Xt(a.href ? "a" : a.as || "section"), {
      href: a.href,
      class: q(["at-card", a.href && "at-card--link", a.color && ["at-card--striped", `at-tone-${a.color}`]])
    }, {
      default: D(() => [
        a.title || a.description || a.$slots.actions ? (e(), l("div", tl, [
          o("div", null, [
            a.title ? (e(), l("h3", al, v(a.title), 1)) : h("", !0),
            a.description ? (e(), l("p", ll, v(a.description), 1)) : h("", !0)
          ]),
          P(a.$slots, "actions")
        ])) : h("", !0),
        P(a.$slots, "default"),
        a.$slots.footer ? (e(), l("div", nl, [
          P(a.$slots, "footer")
        ])) : h("", !0)
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), ol = {
  key: 0,
  class: "at-toggle"
}, rl = ["indeterminate", "disabled"], il = ["indeterminate", "disabled"], aa = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "AtCheckbox",
  props: /* @__PURE__ */ re({
    label: {},
    indeterminate: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const a = ie(r, "modelValue");
    return (n, t) => n.label || n.$slots.default ? (e(), l("label", ol, [
      ee(o("input", ye(n.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
        type: "checkbox",
        class: "at-check",
        indeterminate: n.indeterminate,
        disabled: n.disabled
      }), null, 16, rl), [
        [rt, a.value]
      ]),
      P(n.$slots, "default", {}, () => [
        y(v(n.label), 1)
      ])
    ])) : ee((e(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (i) => a.value = i),
      type: "checkbox",
      class: "at-check",
      indeterminate: n.indeterminate,
      disabled: n.disabled
    }), null, 16, il)), [
      [rt, a.value]
    ]);
  }
}), ct = (r, a) => {
  const n = r.__vccOpts || r;
  for (const [t, i] of a)
    n[t] = i;
  return n;
}, ul = {}, dl = { class: "at-kbd" };
function cl(r, a) {
  return e(), l("kbd", dl, [
    P(r.$slots, "default")
  ]);
}
const Ve = /* @__PURE__ */ ct(ul, [["render", cl]]), pl = (r) => String(r).padStart(2, "0"), vl = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], qt = (r) => new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
function ml(r, a = /* @__PURE__ */ new Date()) {
  const n = new Date(r);
  if (isNaN(n.getTime())) return "";
  const t = Math.round((a.getTime() - n.getTime()) / 1e3), i = `${n.getHours()}:${pl(n.getMinutes())}`;
  if (t < 45) return "à l’instant";
  if (t < 3600) return `il y a ${Math.max(1, Math.round(t / 60))} min`;
  const c = Math.round((qt(a) - qt(n)) / 864e5);
  if (c === 0) return `il y a ${Math.round(t / 3600)} h`;
  if (c === 1) return `hier à ${i}`;
  const m = `${n.getDate()} ${vl[n.getMonth()]}`;
  return n.getFullYear() === a.getFullYear() ? `${m} à ${i}` : `${m} ${n.getFullYear()}`;
}
function hl(r, a) {
  const n = [...a].filter(Boolean).sort((p, g) => g.length - p.length);
  if (!n.length) return [{ text: r }];
  const t = (p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), i = new RegExp(`@(?:${n.map(t).join("|")})(?![\\p{L}\\p{N}])`, "gu"), c = [];
  let m = 0;
  for (const p of r.matchAll(i))
    p.index > m && c.push({ text: r.slice(m, p.index) }), c.push({ text: p[0], mention: !0 }), m = p.index + p[0].length;
  return m < r.length && c.push({ text: r.slice(m) }), c;
}
function fl(r, a) {
  const n = /(^|\s)@([\p{L}\p{N}-]*)$/u.exec(r.slice(0, a));
  return n ? { start: a - n[2].length - 1, query: n[2] } : null;
}
const it = "__none", St = (r) => String(r).padStart(2, "0"), Bt = (r) => `${r.getFullYear()}-${St(r.getMonth() + 1)}-${St(r.getDate())}`, We = () => Bt(/* @__PURE__ */ new Date()), gl = (r, a) => {
  const n = /* @__PURE__ */ new Date(r + "T00:00");
  return n.setDate(n.getDate() + a), Bt(n);
}, ze = () => Math.random().toString(36).slice(2, 10), be = (r) => r == null || r === "" || Array.isArray(r) && r.length === 0, me = (r, a) => a.compute ? a.compute(r) : r[a.key], Ie = (r, a) => typeof r.options == "function" ? r.options(a) : r.options ?? [], ut = (r, a, n) => Ie(r, a).find((t) => t.value === n), Ge = (r) => !r.compute && !r.readonly && r.type !== "progress", yl = ["status", "select", "relation", "person"], Ye = (r) => yl.includes(r.type), bl = {
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
}, st = (r) => r.icon ?? bl[r.type] ?? "text", nt = [
  { value: "table", label: "Tableau", icon: "table" },
  { value: "board", label: "Board", icon: "board" },
  { value: "list", label: "Liste", icon: "list" },
  { value: "calendar", label: "Calendrier", icon: "calendar" }
], wt = {
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
}, Rt = {
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
}, la = ["empty", "notempty", "past", "week", "checked", "unchecked"];
function kl(r, a, n, t = We()) {
  const i = me(r, a);
  if (!la.includes(n.op) && be(n.value)) return !0;
  const c = (m) => String(m ?? "").toLowerCase();
  switch (n.op) {
    case "empty":
      return be(i);
    case "notempty":
      return !be(i);
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
      return !!i && i < t;
    case "week":
      return !!i && i >= t && i <= gl(t, 7);
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
function _l(r, a, n) {
  const t = me(a, r), i = me(n, r), c = be(t), m = be(i);
  if (c || m) return c === m ? 0 : c ? 1 : -1;
  if (Ye(r)) {
    const p = Ie(r).map((g) => g.value);
    return p.indexOf(t) - p.indexOf(i);
  }
  return r.type === "number" || r.type === "progress" ? t - i : r.type === "checkbox" ? Number(i) - Number(t) : r.type === "multi" ? t.length - i.length : String(t).localeCompare(String(i), "fr");
}
function $l(r, a, n, t = "") {
  const i = Object.fromEntries(a.map((S) => [S.key, S])), c = a.find((S) => S.type === "title"), m = t.trim().toLowerCase(), p = r.filter((S) => (!m || !c || String(S[c.key] ?? "").toLowerCase().includes(m)) && n.filters.every(($) => !i[$.prop] || kl(S, i[$.prop], $))), g = n.sorts.filter((S) => i[S.prop]);
  return g.length ? p.sort((S, $) => {
    for (const L of g) {
      const U = i[L.prop], I = be(me(S, U)), A = be(me($, U));
      if (I !== A) return I ? 1 : -1;
      if (I) continue;
      const x = _l(U, S, $);
      if (x) return L.dir === "desc" ? -x : x;
    }
    return 0;
  }) : p;
}
function wl(r, a, n = !1) {
  if (!a) return [{ key: it, option: null, rows: r }];
  const t = Ie(a).map((m) => ({ key: m.value, option: m, rows: [] })), i = { key: it, option: null, rows: [] }, c = Object.fromEntries(t.map((m) => [m.key, m]));
  for (const m of r) (c[me(m, a)] ?? i).rows.push(m);
  return (i.rows.length || n) && t.push(i), n ? t : t.filter((m) => m.rows.length);
}
function Ml(r) {
  const [a, n] = r.split("-").map(Number), i = (new Date(a, n - 1, 1).getDay() + 6) % 7, c = [];
  for (let m = 0; m < 42; m++) {
    const p = new Date(a, n - 1, 1 - i + m);
    c.push({ iso: Bt(p), day: p.getDate(), outside: p.getMonth() !== n - 1 });
  }
  return c[35].outside ? c.slice(0, 35) : c;
}
const Kt = (r, a) => {
  const [n, t] = r.split("-").map(Number), i = new Date(n, t - 1 + a, 1);
  return `${i.getFullYear()}-${St(i.getMonth() + 1)}`;
};
function jt(r, a = "table", n = {}) {
  return { id: ze(), name: r, layout: a, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...n };
}
const Cu = (r, a, n = "") => ({ id: ze(), prop: r, op: a, value: n }), Su = (r, a = "asc") => ({ id: ze(), prop: r, dir: a });
function Al(r, a) {
  const n = {};
  for (const t of r.filters) {
    const i = a.find((c) => c.key === t.prop);
    !i || !Ge(i) || be(t.value) || (t.op === "is" && (n[t.prop] = t.value), t.op === "contains" && i.type === "multi" && (n[t.prop] = [t.value]));
  }
  return n;
}
const Cl = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }), Sl = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }), na = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });
function Vt(r) {
  if (!r) return "";
  const a = /* @__PURE__ */ new Date(r + "T00:00");
  return (a.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? Cl : Sl).format(a);
}
const Vl = (r) => {
  const [a, n] = r.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(a, n - 1, 1));
}, Ae = (r) => r.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim(), Tl = (r, a, n = []) => {
  const t = Ae(a);
  return r.filter((i) => !n.includes(i.value) && (!t || Ae(i.label).includes(t)));
}, zl = (r, a) => !!Ae(a) && !r.some((n) => Ae(n.label) === Ae(a)), Mt = ["green", "yellow", "pink", "brown", "red", "blue", "purple", "orange", "gray"], Ll = (r) => Mt.find((a) => !r.some((n) => n.color === a)) ?? Mt[r.length % Mt.length], He = (r, a) => {
  const n = Ae(a), t = n ? Ae(r).indexOf(n) : -1;
  return t < 0 ? [r, "", ""] : [r.slice(0, t), r.slice(t, t + n.length), r.slice(t + n.length)];
};
let Wt = 0;
function pt(r = "at") {
  return Wt += 1, `${r}-${Wt}`;
}
const Dl = ["aria-label"], Ol = {
  key: 0,
  class: "at-comments__head"
}, Bl = { class: "at-label" }, Ql = {
  key: 1,
  class: "at-comments__list"
}, El = {
  key: 0,
  class: "at-event"
}, Ul = ["datetime", "title"], Fl = {
  key: 1,
  class: "at-comment"
}, Pl = { class: "at-comment__meta" }, Hl = ["datetime", "title"], Il = ["title"], xl = {
  key: 1,
  class: "at-comment__actions"
}, Nl = {
  key: 0,
  class: "at-comment__edit"
}, ql = ["id", "onKeydown"], Rl = { class: "at-composer__foot" }, Kl = { class: "at-composer__hint" }, jl = {
  key: 1,
  class: "at-comment__body"
}, Wl = {
  key: 0,
  class: "at-mention"
}, Gl = {
  key: 2,
  class: "at-comments__empty"
}, Yl = { class: "at-composer" }, Jl = { class: "at-composer__box" }, Zl = ["placeholder", "aria-expanded", "aria-controls", "aria-activedescendant"], Xl = { class: "at-composer__foot" }, en = { class: "at-composer__hint" }, tn = ["id"], an = /* @__PURE__ */ o("div", { class: "at-menu-label" }, "Mentionner", -1), ln = ["id", "aria-selected", "onMousedown", "onMousemove"], nn = /* @__PURE__ */ R({
  __name: "AtComments",
  props: {
    items: {},
    me: {},
    people: { default: () => [] },
    label: { default: "Activité" },
    placeholder: { default: "Ajouter un commentaire…" }
  },
  emits: ["post", "edit", "delete"],
  setup(r, { emit: a }) {
    const n = r, t = a, i = F(/* @__PURE__ */ new Date());
    let c;
    Da(() => {
      c = setInterval(() => {
        i.value = /* @__PURE__ */ new Date();
      }, 6e4);
    }), dt(() => clearInterval(c));
    const m = (_) => ml(_, i.value), p = (_) => new Date(_).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" }), g = z(() => [...n.items].sort((_, Q) => _.at.localeCompare(Q.at))), S = (_) => hl(_, n.people), $ = typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl", L = F(""), U = F(), I = pt("at-mention"), A = F(null), x = F(0), J = z(() => {
      const _ = A.value;
      if (!_) return [];
      const Q = Ae(_.query);
      return n.people.filter((O) => Ae(O).includes(Q)).slice(0, 6);
    });
    function te() {
      const _ = U.value;
      A.value = _ && n.people.length ? fl(_.value, _.selectionStart ?? _.value.length) : null, x.value = 0;
    }
    function Y(_) {
      const Q = U.value, O = A.value;
      if (!Q || !O) return;
      const K = Q.selectionStart ?? L.value.length, ve = L.value.slice(0, O.start) + "@" + _ + " ";
      L.value = ve + L.value.slice(K), A.value = null, Le(() => {
        Q.focus(), Q.setSelectionRange(ve.length, ve.length);
      });
    }
    function W() {
      const _ = L.value.trim();
      _ && (t("post", _), L.value = "", A.value = null);
    }
    function G(_) {
      const Q = J.value;
      if (A.value && Q.length) {
        if (_.key === "ArrowDown") {
          _.preventDefault(), x.value = (x.value + 1) % Q.length;
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), x.value = (x.value - 1 + Q.length) % Q.length;
          return;
        }
        if (_.key === "Enter" && !_.metaKey && !_.ctrlKey || _.key === "Tab") {
          _.preventDefault(), Y(Q[x.value]);
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), _.stopPropagation(), A.value = null;
          return;
        }
      }
      _.key === "Enter" && (_.metaKey || _.ctrlKey) && (_.preventDefault(), W());
    }
    const X = F(null), Z = F("");
    function le(_) {
      X.value = _.id, Z.value = _.text, Le(() => {
        const Q = document.getElementById(`${I}-edit`);
        Q == null || Q.focus(), Q == null || Q.setSelectionRange(Q.value.length, Q.value.length);
      });
    }
    function ne(_) {
      const Q = Z.value.trim();
      Q && Q !== _.text && t("edit", _, Q), X.value = null;
    }
    function pe(_, Q) {
      _.key === "Enter" && (_.metaKey || _.ctrlKey) ? (_.preventDefault(), ne(Q)) : _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), X.value = null);
    }
    return (_, Q) => (e(), l("section", {
      class: "at-comments",
      "aria-label": _.label
    }, [
      _.label ? (e(), l("div", Ol, [
        o("span", Bl, v(_.label), 1)
      ])) : h("", !0),
      g.value.length ? (e(), l("ol", Ql, [
        (e(!0), l(w, null, E(g.value, (O) => (e(), l(w, {
          key: O.id
        }, [
          O.kind === "event" ? (e(), l("li", El, [
            o("span", null, [
              o("b", null, v(O.author), 1),
              y(" " + v(O.text) + " · ", 1),
              o("time", {
                datetime: O.at,
                title: p(O.at)
              }, v(m(O.at)), 9, Ul)
            ])
          ])) : (e(), l("li", Fl, [
            f(Pe, {
              name: O.author,
              size: "md",
              tone: O.author === _.me ? "accent" : "neutral"
            }, null, 8, ["name", "tone"]),
            o("div", Pl, [
              o("b", null, v(O.author), 1),
              o("time", {
                datetime: O.at,
                title: p(O.at)
              }, v(m(O.at)), 9, Hl),
              O.editedAt ? (e(), l("span", {
                key: 0,
                class: "at-comment__edited",
                title: p(O.editedAt)
              }, "modifié", 8, Il)) : h("", !0),
              O.author === _.me && X.value !== O.id ? (e(), l("span", xl, [
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  icon: "edit",
                  "icon-only": "",
                  label: "Modifier",
                  onClick: (K) => le(O)
                }, null, 8, ["onClick"]),
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  icon: "trash",
                  "icon-only": "",
                  label: "Supprimer",
                  onClick: (K) => t("delete", O)
                }, null, 8, ["onClick"])
              ])) : h("", !0)
            ]),
            X.value === O.id ? (e(), l("div", Nl, [
              ee(o("textarea", {
                id: `${C(I)}-edit`,
                "onUpdate:modelValue": Q[0] || (Q[0] = (K) => Z.value = K),
                class: "at-composer__text",
                rows: "1",
                "aria-label": "Modifier le commentaire",
                onKeydown: (K) => pe(K, O)
              }, null, 40, ql), [
                [Me, Z.value]
              ]),
              o("div", Rl, [
                o("span", Kl, [
                  f(Ve, null, {
                    default: D(() => [
                      y(v(C($)) + " ↵", 1)
                    ]),
                    _: 1
                  }),
                  y(" pour enregistrer")
                ]),
                f(j, {
                  size: "sm",
                  variant: "ghost",
                  onClick: Q[1] || (Q[1] = (K) => X.value = null)
                }, {
                  default: D(() => [
                    y("Annuler")
                  ]),
                  _: 1
                }),
                f(j, {
                  size: "sm",
                  variant: "primary",
                  disabled: !Z.value.trim(),
                  onClick: (K) => ne(O)
                }, {
                  default: D(() => [
                    y("Enregistrer")
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])
              ])
            ])) : (e(), l("p", jl, [
              (e(!0), l(w, null, E(S(O.text), (K, ve) => (e(), l(w, { key: ve }, [
                K.mention ? (e(), l("span", Wl, v(K.text), 1)) : (e(), l(w, { key: 1 }, [
                  y(v(K.text), 1)
                ], 64))
              ], 64))), 128))
            ]))
          ]))
        ], 64))), 128))
      ])) : (e(), l("p", Gl, "Aucun commentaire pour l’instant.")),
      o("div", Yl, [
        f(Pe, {
          name: _.me,
          size: "md",
          tone: "accent"
        }, null, 8, ["name"]),
        o("div", Jl, [
          ee(o("textarea", {
            ref_key: "area",
            ref: U,
            "onUpdate:modelValue": Q[2] || (Q[2] = (O) => L.value = O),
            class: "at-composer__text",
            rows: "1",
            placeholder: _.placeholder,
            "aria-label": "Nouveau commentaire",
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-expanded": !!A.value && J.value.length > 0,
            "aria-controls": C(I),
            "aria-activedescendant": A.value && J.value.length ? `${C(I)}-${x.value}` : void 0,
            onKeydown: G,
            onInput: te,
            onClick: te,
            onBlur: Q[3] || (Q[3] = (O) => A.value = null)
          }, null, 40, Zl), [
            [Me, L.value]
          ]),
          o("div", Xl, [
            o("span", en, [
              f(Ve, null, {
                default: D(() => [
                  y(v(C($)) + " ↵", 1)
                ]),
                _: 1
              }),
              y(" pour envoyer")
            ]),
            f(j, {
              variant: "primary",
              size: "sm",
              disabled: !L.value.trim(),
              onClick: W
            }, {
              default: D(() => [
                y("Commenter")
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          A.value && J.value.length ? (e(), l("div", {
            key: 0,
            id: C(I),
            class: "at-menu at-composer__mentions",
            role: "listbox",
            "aria-label": "Mentionner"
          }, [
            an,
            (e(!0), l(w, null, E(J.value, (O, K) => (e(), l("div", {
              id: `${C(I)}-${K}`,
              key: O,
              class: q(["at-menu-item", K === x.value && "is-active"]),
              role: "option",
              "aria-selected": K === x.value,
              onMousedown: se((ve) => Y(O), ["prevent"]),
              onMousemove: (ve) => x.value = K
            }, [
              f(Pe, { name: O }, null, 8, ["name"]),
              o("span", null, [
                y(v(C(He)(O, A.value.query)[0]), 1),
                o("mark", null, v(C(He)(O, A.value.query)[1]), 1),
                y(v(C(He)(O, A.value.query)[2]), 1)
              ])
            ], 42, ln))), 128))
          ], 8, tn)) : h("", !0)
        ])
      ])
    ], 8, Dl));
  }
}), $e = /* @__PURE__ */ R({
  __name: "AtPopover",
  props: /* @__PURE__ */ re({
    anchor: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    offset: { default: 4 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ re(["close"], ["update:open"]),
  setup(r, { expose: a, emit: n }) {
    const t = ie(r, "open"), i = r, c = n, m = F(), p = F(), g = F({ top: -9999, left: -9999 }), S = z(() => {
      var Y;
      return i.anchor ?? ((Y = m.value) == null ? void 0 : Y.firstElementChild) ?? m.value ?? null;
    });
    function $() {
      const Y = S.value, W = p.value;
      if (!Y || !W) return;
      const G = Y.getBoundingClientRect(), X = W.offsetWidth, Z = W.offsetHeight;
      if (i.placement === "over") {
        const pe = Math.max(8, Math.min(G.left, window.innerWidth - X - 8)), _ = Math.max(8, Math.min(G.top, window.innerHeight - Z - 8));
        (Math.abs(_ - g.value.top) > 0.5 || Math.abs(pe - g.value.left) > 0.5) && (g.value = { top: _, left: pe });
        return;
      }
      if (i.placement === "right") {
        const pe = Math.max(8, Math.min(G.right + i.offset, window.innerWidth - X - 8)), _ = Math.max(8, Math.min(G.bottom - Z, window.innerHeight - Z - 8));
        (Math.abs(_ - g.value.top) > 0.5 || Math.abs(pe - g.value.left) > 0.5) && (g.value = { top: _, left: pe });
        return;
      }
      let le = i.align === "end" ? G.right - X : G.left;
      le = Math.max(8, Math.min(le, window.innerWidth - X - 8));
      let ne = G.bottom + i.offset;
      ne + Z > window.innerHeight - 8 && (ne = Math.max(8, G.top - Z - i.offset)), (Math.abs(ne - g.value.top) > 0.5 || Math.abs(le - g.value.left) > 0.5) && (g.value = { top: ne, left: le });
    }
    function L() {
      t.value && (t.value = !1, c("close"));
    }
    function U() {
      t.value ? L() : t.value = !0;
    }
    function I(Y) {
      var G, X, Z;
      const W = Y.target;
      (G = p.value) != null && G.contains(W) || (X = S.value) != null && X.contains(W) || (Z = W.closest) != null && Z.call(W, ".at-pop") || L();
    }
    function A(Y) {
      var W, G;
      Y.key === "Escape" && (Y.stopPropagation(), L(), (G = (W = S.value) == null ? void 0 : W.focus) == null || G.call(W));
    }
    let x = null;
    function J() {
      setTimeout(() => document.addEventListener("mousedown", I), 0), document.addEventListener("keydown", A, !0), window.addEventListener("resize", $), window.addEventListener("scroll", $, !0), Le(() => {
        $(), p.value && (x = new ResizeObserver($), x.observe(p.value));
      });
    }
    function te() {
      document.removeEventListener("mousedown", I), document.removeEventListener("keydown", A, !0), window.removeEventListener("resize", $), window.removeEventListener("scroll", $, !0), x == null || x.disconnect(), x = null, g.value = { top: -9999, left: -9999 };
    }
    return Ce(t, (Y) => Y ? J() : te(), { immediate: !0 }), dt(te), a({ place: $, close: L, toggle: U }), (Y, W) => (e(), l(w, null, [
      Y.$slots.trigger ? (e(), l("span", {
        key: 0,
        ref_key: "triggerEl",
        ref: m,
        style: { display: "contents" }
      }, [
        P(Y.$slots, "trigger", {
          toggle: U,
          open: t.value
        })
      ], 512)) : h("", !0),
      (e(), H(Ot, { to: "body" }, [
        t.value ? (e(), l("div", {
          key: 0,
          ref_key: "el",
          ref: p,
          class: "at-pop",
          style: ce({ top: g.value.top + "px", left: g.value.left + "px" })
        }, [
          P(Y.$slots, "default", { close: L })
        ], 4)) : h("", !0)
      ]))
    ], 64));
  }
}), sn = ["aria-valuenow", "aria-label"], on = { class: "at-progress__track" }, rn = {
  key: 0,
  class: "at-progress__label"
}, sa = /* @__PURE__ */ R({
  __name: "AtProgress",
  props: {
    value: {},
    max: { default: 100 },
    showLabel: { type: Boolean, default: !0 },
    label: {}
  },
  setup(r) {
    const a = r, n = z(() => Math.max(0, Math.min(100, Math.round(a.value / a.max * 100))));
    return (t, i) => (e(), l("span", {
      class: "at-progress",
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-label": t.label
    }, [
      o("span", on, [
        o("span", {
          class: "at-progress__bar",
          style: ce({ width: n.value + "%" })
        }, null, 4)
      ]),
      t.showLabel ? (e(), l("span", rn, v(n.value) + " %", 1)) : h("", !0)
    ], 8, sn));
  }
}), un = {
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
}, fn = { class: "at-ellipsis" }, gn = {
  key: 9,
  class: "at-num"
}, yn = {
  key: 11,
  class: "at-pv-text at-ellipsis"
}, we = /* @__PURE__ */ R({
  __name: "AtPropertyValue",
  props: {
    prop: {},
    row: {}
  },
  setup(r) {
    const a = r, n = z(() => me(a.row, a.prop)), t = z(() => a.prop.type), i = z(() => Ye(a.prop) ? ut(a.prop, a.row, n.value) : void 0), c = z(() => t.value === "multi" ? (n.value ?? []).map((g) => ut(a.prop, a.row, g)).filter(Boolean) : []), m = z(() => {
      var g, S;
      return t.value === "date" && !!((S = (g = a.prop).overdue) != null && S.call(g, a.row));
    }), p = z(() => {
      var g;
      return ((g = i.value) == null ? void 0 : g.label) ?? String(n.value ?? "");
    });
    return (g, S) => {
      var $, L, U;
      return t.value === "title" ? (e(), l("span", un, v(n.value || "Sans titre"), 1)) : t.value === "checkbox" ? (e(), l("input", {
        key: 1,
        type: "checkbox",
        class: "at-check",
        checked: !!n.value,
        tabindex: "-1",
        "aria-hidden": "true",
        style: { "pointer-events": "none" }
      }, null, 8, dn)) : C(be)(n.value) ? (e(), l("span", cn, "—")) : t.value === "status" ? (e(), l("span", {
        key: 3,
        class: q(["at-badge", (($ = i.value) == null ? void 0 : $.tone) && i.value.tone !== "neutral" && `at-badge--${i.value.tone}`])
      }, v(p.value), 3)) : t.value === "select" ? (e(), l("span", {
        key: 4,
        class: q(["at-tag", ((L = i.value) == null ? void 0 : L.color) && i.value.color !== "gray" && `at-tag--${i.value.color}`])
      }, v(p.value), 3)) : t.value === "multi" ? (e(), l("span", pn, [
        (e(!0), l(w, null, E(c.value, (I) => (e(), l("span", {
          key: I.value,
          class: q(["at-tag", I.color && I.color !== "gray" && `at-tag--${I.color}`])
        }, v(I.label), 3))), 128))
      ])) : t.value === "person" ? (e(), l("span", vn, [
        f(Pe, { name: p.value }, null, 8, ["name"]),
        o("span", mn, v(p.value), 1)
      ])) : t.value === "relation" ? (e(), l("span", hn, [
        (U = i.value) != null && U.mark ? (e(), l("span", {
          key: 0,
          class: "at-pv-mark",
          style: ce({ background: i.value.mark })
        }, null, 4)) : (e(), H(B, {
          key: 1,
          name: g.prop.icon ?? "link"
        }, null, 8, ["name"])),
        o("span", fn, v(i.value ? i.value.label : "Introuvable"), 1)
      ])) : t.value === "date" ? (e(), l("span", {
        key: 8,
        class: q(["at-pv-date", m.value && "at-pv-over"])
      }, v(C(Vt)(n.value)), 3)) : t.value === "number" ? (e(), l("span", gn, v(C(na).format(Number(n.value))) + v(g.prop.suffix ?? ""), 1)) : t.value === "progress" ? (e(), H(sa, {
        key: 10,
        value: Number(n.value)
      }, null, 8, ["value"])) : (e(), l("span", yn, v(n.value), 1));
    };
  }
}), bn = ["aria-label", "onClick"], kn = ["aria-controls", "aria-activedescendant", "aria-label"], _n = ["id", "aria-label", "aria-multiselectable"], $n = {
  key: 0,
  class: "at-menu-label"
}, wn = ["id", "aria-selected", "onMousemove", "onClick"], Mn = ["aria-label", "aria-expanded", "onClick"], An = ["id"], Cn = {
  key: 2,
  class: "at-menu-empty",
  style: { padding: "2px 8px" }
}, Sn = { class: "at-tagedit__hint" }, Vn = { key: 0 }, Tn = ["aria-label"], zn = ["value"], Ln = /* @__PURE__ */ o("div", { class: "at-menu-sep" }, null, -1), Dn = /* @__PURE__ */ o("div", { class: "at-menu-label" }, "Couleur", -1), On = ["aria-checked", "onClick"], Bn = ["aria-label"], Qn = { class: "at-menu-label" }, En = ["aria-selected", "onClick"], Un = {
  key: 0,
  class: "at-menu-empty",
  style: { padding: "4px 8px" }
}, Fn = /* @__PURE__ */ o("div", { class: "at-menu-sep" }, null, -1), Pn = {
  key: 2,
  class: "at-menu at-menu-pad",
  style: { "min-width": "240px" }
}, Hn = { class: "at-menu-title" }, In = ["value", "aria-label"], xn = { class: "at-menu-actions" }, Nn = {
  key: 3,
  class: "at-menu at-menu-pad",
  style: { "min-width": "280px" }
}, qn = { class: "at-menu-title" }, Rn = ["type", "aria-label"], Qt = /* @__PURE__ */ R({
  __name: "AtPropertyEditor",
  props: /* @__PURE__ */ re({
    prop: {},
    row: {},
    anchor: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ re(["update", "createOption", "updateOption", "deleteOption"], ["update:open"]),
  setup(r, { emit: a }) {
    const n = ie(r, "open"), t = r, i = a, c = F(""), m = F(), p = z(() => {
      const k = t.prop;
      return k ? k.type === "select" || k.type === "multi" ? "tags" : Ye(k) ? "options" : k.type === "date" ? "date" : "input" : null;
    }), g = z(() => t.prop ? Ie(t.prop, t.row) : []), S = z(() => t.prop && t.row ? t.row[t.prop.key] : null), $ = z(() => {
      var k;
      return ((k = t.prop) == null ? void 0 : k.type) === "multi";
    }), L = z(() => {
      var k;
      return !!((k = t.prop) != null && k.creatable);
    }), U = F(""), I = F(0), A = F(), x = F({ w: 0, h: 0 }), J = pt("at-tags"), te = z(() => $.value ? S.value ?? [] : S.value != null ? [S.value] : []), Y = z(() => te.value.map((k) => g.value.find((M) => M.value === k)).filter((k) => !!k)), W = z(() => Tl(g.value, U.value, $.value ? te.value : [])), G = z(() => L.value && zl(g.value, U.value)), X = z(() => W.value.length + (G.value ? 1 : 0)), Z = z(() => Ll(g.value)), le = (k) => ["at-tag", k && k !== "gray" && `at-tag--${k}`];
    Ce(U, () => {
      I.value = 0;
    });
    function ne(k) {
      $.value ? (he([...te.value, k.value], !1), U.value = "") : he(k.value);
    }
    function pe() {
      const k = { value: ze(), label: U.value.trim(), color: Z.value };
      i("createOption", k), ne(k);
    }
    function _(k) {
      var M;
      he(te.value.filter((T) => T !== k), !1), (M = A.value) == null || M.focus();
    }
    function Q(k) {
      var T;
      const M = X.value;
      k.key === "ArrowDown" ? (k.preventDefault(), M && (I.value = (I.value + 1) % M)) : k.key === "ArrowUp" ? (k.preventDefault(), M && (I.value = (I.value - 1 + M) % M)) : k.key === "Enter" ? (k.preventDefault(), I.value < W.value.length ? ne(W.value[I.value]) : G.value && pe()) : k.key === "Tab" ? n.value = !1 : k.key === "Backspace" && !U.value && te.value.length && (k.preventDefault(), $.value ? he(te.value.slice(0, -1), !1) : (T = t.prop) != null && T.required || he(null, !1));
    }
    const O = [
      { value: "gray", label: "Gris" },
      { value: "brown", label: "Marron" },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Jaune" },
      { value: "green", label: "Vert" },
      { value: "blue", label: "Bleu" },
      { value: "purple", label: "Violet" },
      { value: "pink", label: "Rose" },
      { value: "red", label: "Rouge" }
    ], K = F(!1), ve = F(null), Se = F(null), oe = z(() => g.value.find((k) => k.value === Se.value) ?? null);
    function xe(k, M) {
      if (K.value && Se.value === M.value) {
        K.value = !1;
        return;
      }
      ve.value = k.currentTarget, Se.value = M.value, K.value = !0;
    }
    function De(k) {
      const M = k.trim();
      oe.value && M && M !== oe.value.label && i("updateOption", oe.value.value, { label: M });
    }
    function Ne(k) {
      oe.value && i("updateOption", oe.value.value, { color: k });
    }
    function vt() {
      var k;
      oe.value && i("deleteOption", oe.value.value), K.value = !1, (k = A.value) == null || k.focus();
    }
    function qe() {
      var k;
      (k = A.value) == null || k.focus();
    }
    Ce(n, (k) => {
      var T;
      if (!k) {
        K.value = !1;
        return;
      }
      c.value = S.value ?? "", U.value = "", I.value = 0;
      const M = (T = t.anchor) == null ? void 0 : T.getBoundingClientRect();
      x.value = { w: (M == null ? void 0 : M.width) ?? 0, h: (M == null ? void 0 : M.height) ?? 0 }, Le(() => {
        var ke, Oe, Je;
        if (p.value === "tags") {
          (ke = A.value) == null || ke.focus();
          return;
        }
        const ae = (Oe = m.value) == null ? void 0 : Oe.querySelector("input, button");
        ae == null || ae.focus(), (Je = ae == null ? void 0 : ae.select) == null || Je.call(ae);
      });
    });
    const mt = (k) => ({ ...t.row, [t.prop.key]: k });
    function he(k, M = !0) {
      i("update", k), M && (n.value = !1);
    }
    function ht() {
      var M;
      let k = c.value;
      ((M = t.prop) == null ? void 0 : M.type) === "number" && (k = k === "" || k == null ? null : Number(k)), k !== S.value && i("update", k), n.value = !1;
    }
    function ft() {
      var k;
      if (p.value === "input") {
        let M = c.value;
        ((k = t.prop) == null ? void 0 : k.type) === "number" && (M = M === "" ? null : Number(M)), M !== S.value && i("update", M);
      }
    }
    return (k, M) => (e(), H($e, {
      open: n.value,
      "onUpdate:open": M[15] || (M[15] = (T) => n.value = T),
      anchor: k.anchor,
      placement: p.value === "tags" ? "over" : "bottom",
      onClose: ft
    }, {
      default: D(() => [
        k.prop ? (e(), l("div", {
          key: 0,
          ref_key: "box",
          ref: m
        }, [
          p.value === "tags" ? (e(), l("div", {
            key: 0,
            class: "at-tagedit",
            style: ce({ width: Math.max(x.value.w, 240) + "px" })
          }, [
            o("div", {
              class: "at-tagedit__field",
              style: ce({ minHeight: x.value.h + "px" }),
              onMousedown: M[2] || (M[2] = se((T) => {
                var ae;
                return (ae = A.value) == null ? void 0 : ae.focus();
              }, ["self", "prevent"]))
            }, [
              (e(!0), l(w, null, E(Y.value, (T) => (e(), l("span", {
                key: T.value,
                class: q(le(T.color))
              }, [
                y(v(T.label) + " ", 1),
                $.value ? (e(), l("button", {
                  key: 0,
                  type: "button",
                  "aria-label": `Retirer ${T.label}`,
                  onMousedown: M[0] || (M[0] = se(() => {
                  }, ["prevent"])),
                  onClick: (ae) => _(T.value)
                }, [
                  f(B, { name: "x" })
                ], 40, bn)) : h("", !0)
              ], 2))), 128)),
              ee(o("input", {
                ref_key: "input",
                ref: A,
                "onUpdate:modelValue": M[1] || (M[1] = (T) => U.value = T),
                type: "text",
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": "true",
                "aria-controls": C(J),
                "aria-activedescendant": X.value ? `${C(J)}-${I.value}` : void 0,
                "aria-label": k.prop.name,
                autocomplete: "off",
                spellcheck: "false",
                onKeydown: Q
              }, null, 40, kn), [
                [Me, U.value]
              ])
            ], 36),
            o("div", {
              id: C(J),
              class: "at-menu at-tagedit__menu",
              role: "listbox",
              "aria-label": k.prop.name,
              "aria-multiselectable": $.value || void 0
            }, [
              U.value.trim() ? h("", !0) : (e(), l("div", $n, v(L.value ? "Choisir, ou taper pour créer" : "Choisir une option"), 1)),
              (e(!0), l(w, null, E(W.value, (T, ae) => (e(), l("div", {
                id: `${C(J)}-${ae}`,
                key: T.value,
                class: q(["at-menu-item", "at-tagedit__opt", ae === I.value && "is-active"]),
                role: "option",
                "aria-selected": te.value.includes(T.value),
                onMousedown: M[4] || (M[4] = se(() => {
                }, ["prevent"])),
                onMousemove: (ke) => I.value = ae,
                onClick: (ke) => ne(T)
              }, [
                o("span", {
                  class: q(le(T.color))
                }, [
                  o("span", null, [
                    y(v(C(He)(T.label, U.value)[0]), 1),
                    o("mark", null, v(C(He)(T.label, U.value)[1]), 1),
                    y(v(C(He)(T.label, U.value)[2]), 1)
                  ])
                ], 2),
                !$.value && T.value === S.value ? (e(), H(B, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : h("", !0),
                L.value ? (e(), l("button", {
                  key: 1,
                  type: "button",
                  class: "at-tagedit__more",
                  "aria-label": `Modifier ${T.label}`,
                  "aria-expanded": K.value && Se.value === T.value,
                  onMousedown: M[3] || (M[3] = se(() => {
                  }, ["prevent"])),
                  onClick: se((ke) => xe(ke, T), ["stop"])
                }, [
                  f(B, { name: "more" })
                ], 40, Mn)) : h("", !0)
              ], 42, wn))), 128)),
              G.value ? (e(), l("div", {
                key: 1,
                id: `${C(J)}-${W.value.length}`,
                class: q(["at-menu-item", "at-tagedit__opt", "at-tagedit__create", I.value === W.value.length && "is-active"]),
                role: "option",
                "aria-selected": "false",
                onMousedown: M[5] || (M[5] = se(() => {
                }, ["prevent"])),
                onMousemove: M[6] || (M[6] = (T) => I.value = W.value.length),
                onClick: pe
              }, [
                f(B, { name: "plus" }),
                y("Créer "),
                o("span", {
                  class: q(le(Z.value))
                }, v(U.value.trim()), 3)
              ], 42, An)) : h("", !0),
              X.value ? h("", !0) : (e(), l("div", Cn, v(U.value.trim() ? "Aucune option ne correspond" : "Toutes les options sont choisies"), 1)),
              o("div", Sn, [
                o("span", null, [
                  f(Ve, null, {
                    default: D(() => [
                      y("↵")
                    ]),
                    _: 1
                  }),
                  y(v(G.value && I.value === W.value.length ? "créer" : "choisir"), 1)
                ]),
                o("span", null, [
                  f(Ve, null, {
                    default: D(() => [
                      y("Échap")
                    ]),
                    _: 1
                  }),
                  y("fermer")
                ]),
                $.value ? (e(), l("span", Vn, [
                  f(Ve, null, {
                    default: D(() => [
                      y("⌫")
                    ]),
                    _: 1
                  }),
                  y("retirer")
                ])) : h("", !0)
              ])
            ], 8, _n),
            f($e, {
              open: K.value,
              "onUpdate:open": M[9] || (M[9] = (T) => K.value = T),
              anchor: ve.value,
              placement: "right",
              onClose: qe
            }, {
              default: D(() => [
                oe.value ? (e(), l("div", {
                  key: 0,
                  class: "at-menu at-tagedit__panel",
                  role: "menu",
                  "aria-label": `Option ${oe.value.label}`
                }, [
                  (e(), l("input", {
                    key: oe.value.value,
                    class: "at-input",
                    type: "text",
                    value: oe.value.label,
                    "aria-label": "Nom de l’option",
                    onChange: M[7] || (M[7] = (T) => De(T.target.value)),
                    onKeydown: M[8] || (M[8] = Nt(se((T) => {
                      De(T.target.value), K.value = !1, qe();
                    }, ["prevent"]), ["enter"]))
                  }, null, 40, zn)),
                  o("button", {
                    type: "button",
                    class: "at-menu-item at-menu-item--danger",
                    role: "menuitem",
                    onClick: vt
                  }, [
                    f(B, { name: "trash" }),
                    y("Supprimer")
                  ]),
                  Ln,
                  Dn,
                  (e(), l(w, null, E(O, (T) => o("button", {
                    key: T.value,
                    type: "button",
                    class: "at-menu-item",
                    role: "menuitemradio",
                    "aria-checked": (oe.value.color ?? "gray") === T.value,
                    onClick: (ae) => Ne(T.value)
                  }, [
                    o("span", {
                      class: q([...le(T.value), "at-tagedit__swatch"])
                    }, null, 2),
                    y(v(T.label) + " ", 1),
                    (oe.value.color ?? "gray") === T.value ? (e(), H(B, {
                      key: 0,
                      name: "check",
                      class: "at-menu-check"
                    })) : h("", !0)
                  ], 8, On)), 64))
                ], 8, Tn)) : h("", !0)
              ]),
              _: 1
            }, 8, ["open", "anchor"])
          ], 4)) : p.value === "options" ? (e(), l("div", {
            key: 1,
            class: "at-menu",
            role: "listbox",
            "aria-label": k.prop.name
          }, [
            o("div", Qn, v(k.prop.name), 1),
            (e(!0), l(w, null, E(g.value, (T) => (e(), l("button", {
              key: T.value,
              type: "button",
              class: "at-menu-item",
              role: "option",
              "aria-selected": T.value === S.value,
              onClick: (ae) => he(T.value)
            }, [
              f(we, {
                prop: k.prop,
                row: mt(T.value)
              }, null, 8, ["prop", "row"]),
              T.value === S.value ? (e(), H(B, {
                key: 0,
                name: "check",
                class: "at-menu-check"
              })) : h("", !0)
            ], 8, En))), 128)),
            g.value.length ? h("", !0) : (e(), l("div", Un, "Aucune option disponible")),
            k.prop.required ? h("", !0) : (e(), l(w, { key: 1 }, [
              Fn,
              o("button", {
                type: "button",
                class: "at-menu-item",
                onClick: M[10] || (M[10] = (T) => he(null))
              }, [
                f(B, { name: "x" }),
                y("Effacer")
              ])
            ], 64))
          ], 8, Bn)) : p.value === "date" ? (e(), l("div", Pn, [
            o("span", Hn, v(k.prop.name), 1),
            o("input", {
              type: "date",
              class: "at-input",
              value: S.value ?? "",
              "aria-label": k.prop.name,
              onChange: M[11] || (M[11] = (T) => he(T.target.value || null, !1))
            }, null, 40, In),
            o("div", xn, [
              f(j, {
                size: "sm",
                onClick: M[12] || (M[12] = (T) => he(C(We)()))
              }, {
                default: D(() => [
                  y("Aujourd’hui")
                ]),
                _: 1
              }),
              f(j, {
                size: "sm",
                variant: "ghost",
                onClick: M[13] || (M[13] = (T) => he(null))
              }, {
                default: D(() => [
                  y("Effacer")
                ]),
                _: 1
              })
            ])
          ])) : (e(), l("div", Nn, [
            o("span", qn, v(k.prop.name), 1),
            ee(o("input", {
              "onUpdate:modelValue": M[14] || (M[14] = (T) => c.value = T),
              class: "at-input",
              type: k.prop.type === "number" ? "number" : "text",
              "aria-label": k.prop.name,
              onKeydown: Nt(ht, ["enter"])
            }, null, 40, Rn), [
              [Ct, c.value]
            ])
          ]))
        ], 512)) : h("", !0)
      ]),
      _: 1
    }, 8, ["open", "anchor", "placement"]));
  }
}), Kn = { class: "at-dv" }, jn = { class: "at-dv-viewsbar" }, Wn = {
  class: "at-tabs",
  role: "tablist",
  "aria-label": "Vues"
}, Gn = ["aria-selected", "title", "onClick"], Yn = { class: "at-toolbar at-dv-toolbar" }, Jn = {
  key: 1,
  class: "at-dv-n"
}, Zn = {
  key: 1,
  class: "at-dv-n"
}, Xn = { class: "at-input-wrap at-dv-search" }, es = {
  key: 0,
  class: "at-dv-chips"
}, ts = { class: "at-table-wrap" }, as = /* @__PURE__ */ o("col", { style: { width: "36px" } }, null, -1), ls = /* @__PURE__ */ o("col", { style: { width: "44px" } }, null, -1), ns = { class: "at-cell-check" }, ss = ["checked", "indeterminate"], os = { class: "at-th" }, rs = ["onMousedown"], is = { class: "at-cell-check" }, us = {
  key: 0,
  class: "at-dv-grouprow"
}, ds = ["colspan"], cs = ["aria-expanded", "onClick"], ps = {
  key: 1,
  class: "at-pv-empty"
}, vs = { class: "at-count" }, ms = ["aria-selected"], hs = { class: "at-cell-check" }, fs = ["checked", "onChange"], gs = ["onClick"], ys = ["onClick"], bs = /* @__PURE__ */ o("td", null, null, -1), ks = { class: "at-dv-newrow" }, _s = /* @__PURE__ */ o("td", null, null, -1), $s = ["colspan"], ws = ["onClick"], Ms = /* @__PURE__ */ o("td", null, null, -1), As = /* @__PURE__ */ o("td", null, null, -1), Cs = {
  key: 0,
  class: "at-dv-bulk",
  role: "toolbar",
  "aria-label": "Actions de sélection"
}, Ss = { class: "at-num" }, Vs = {
  key: 2,
  class: "at-dv-board"
}, Ts = {
  key: 0,
  class: "at-empty"
}, zs = ["onDragover", "onDrop"], Ls = { class: "at-dv-colhead" }, Ds = {
  key: 1,
  class: "at-pv-empty"
}, Os = { class: "at-count" }, Bs = /* @__PURE__ */ o("span", { class: "at-spacer" }, null, -1), Qs = { class: "at-dv-cards" }, Es = ["onDragstart", "onClick"], Us = { class: "at-dv-cardtitle" }, Fs = {
  key: 0,
  class: "at-dv-cardprops"
}, Ps = ["onClick"], Hs = { key: 3 }, Is = {
  key: 0,
  class: "at-empty"
}, xs = {
  key: 1,
  class: "at-dv-list"
}, Ns = {
  key: 0,
  class: "at-dv-lgroup"
}, qs = ["aria-expanded", "onClick"], Rs = {
  key: 1,
  class: "at-pv-empty"
}, Ks = { class: "at-count" }, js = ["onClick"], Ws = { class: "at-pv-title" }, Gs = { class: "at-dv-liprops" }, Ys = { class: "at-dv-newline" }, Js = { class: "at-dv-calhead" }, Zs = { class: "at-dv-calmonth" }, Xs = { class: "at-dv-calnote" }, eo = { class: "at-dv-calwrap" }, to = { class: "at-dv-calgrid" }, ao = { class: "at-dv-calgrid" }, lo = ["onDragover", "onDrop"], no = { class: "at-dv-daynum" }, so = ["aria-label", "onClick"], oo = ["onDragstart", "onClick"], ro = {
  class: "at-menu",
  role: "menu"
}, io = /* @__PURE__ */ o("div", { class: "at-menu-label" }, "Nouvelle vue", -1), uo = ["onClick"], co = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "320px" }
}, po = /* @__PURE__ */ o("span", { class: "at-menu-title" }, "Filtres · toutes les conditions", -1), vo = { class: "at-rules" }, mo = {
  key: 0,
  class: "at-menu-empty"
}, ho = { class: "at-select" }, fo = ["onUpdate:modelValue", "onChange"], go = ["value"], yo = { class: "at-select" }, bo = ["onUpdate:modelValue"], ko = ["value"], _o = {
  key: 0,
  class: "at-select"
}, $o = ["onUpdate:modelValue"], wo = /* @__PURE__ */ o("option", { value: "" }, "Choisir…", -1), Mo = ["value"], Ao = ["onUpdate:modelValue"], Co = ["onUpdate:modelValue"], So = ["onUpdate:modelValue"], Vo = { key: 1 }, To = { class: "at-menu-actions" }, zo = {
  class: "at-menu at-menu-pad",
  style: { "min-width": "300px" }
}, Lo = /* @__PURE__ */ o("span", { class: "at-menu-title" }, "Tris, appliqués dans l’ordre", -1), Do = { class: "at-rules" }, Oo = {
  key: 0,
  class: "at-menu-empty"
}, Bo = { class: "at-select" }, Qo = ["onUpdate:modelValue"], Eo = ["value"], Uo = { class: "at-select" }, Fo = ["onUpdate:modelValue"], Po = /* @__PURE__ */ o("option", { value: "asc" }, "Croissant", -1), Ho = /* @__PURE__ */ o("option", { value: "desc" }, "Décroissant", -1), Io = [
  Po,
  Ho
], xo = { class: "at-menu-actions" }, No = {
  class: "at-menu",
  role: "menu"
}, qo = { class: "at-menu-label" }, Ro = ["onClick"], Ko = {
  class: "at-menu",
  style: { "min-width": "260px" }
}, jo = /* @__PURE__ */ o("div", { class: "at-menu-label" }, "Propriétés affichées · glisser pour ordonner", -1), Wo = ["draggable", "onDragstart", "onDragover", "onDrop"], Go = { class: "at-pi-name" }, Yo = ["aria-label", "checked", "disabled", "onChange"], Jo = /* @__PURE__ */ o("div", { class: "at-menu-sep" }, null, -1), Zo = {
  class: "at-menu-actions",
  style: { padding: "4px" }
}, Xo = {
  class: "at-menu at-menu-pad",
  style: { width: "320px" }
}, er = /* @__PURE__ */ o("span", { class: "at-menu-title" }, "Paramètres de la vue", -1), tr = {
  class: "at-layout-grid",
  role: "group",
  "aria-label": "Disposition"
}, ar = ["aria-pressed", "onClick"], lr = {
  key: 0,
  class: "at-field-row"
}, nr = { class: "at-select" }, sr = ["value"], or = {
  key: 0,
  value: ""
}, rr = ["value"], ir = {
  key: 1,
  class: "at-field-row"
}, ur = /* @__PURE__ */ o("span", null, "Date utilisée", -1), dr = { class: "at-select" }, cr = ["value"], pr = ["value"], vr = /* @__PURE__ */ o("div", { class: "at-menu-sep" }, null, -1), mr = ["disabled"], hr = /* @__PURE__ */ R({
  __name: "AtDataView",
  props: /* @__PURE__ */ re({
    rows: {},
    schema: {},
    rowKey: { default: "id" },
    newLabel: { default: "Nouveau" },
    hideViews: { type: Boolean },
    iconTools: { type: Boolean, default: !0 },
    lockViews: { type: Boolean }
  }, {
    views: { default: () => [jt("Tableau", "table")] },
    viewsModifiers: {},
    activeView: { default: "" },
    activeViewModifiers: {}
  }),
  emits: /* @__PURE__ */ re(["update", "create", "open", "delete", "createOption", "updateOption", "deleteOption"], ["update:views", "update:activeView"]),
  setup(r, { emit: a }) {
    const n = r, t = ie(r, "views"), i = ie(r, "activeView"), c = a, m = (u) => u[n.rowKey], p = z(() => t.value.find((u) => u.id === i.value) ?? t.value[0]), g = z(() => Object.fromEntries(n.schema.map((u) => [u.key, u]))), S = z(() => n.schema.find((u) => u.type === "title")), $ = z(() => {
      var u;
      return ((u = S.value) == null ? void 0 : u.key) ?? n.rowKey;
    }), L = z(() => {
      const u = (p.value.order ?? []).filter((V) => g.value[V]);
      for (const V of n.schema) u.includes(V.key) || u.push(V.key);
      const d = u.indexOf($.value);
      return d > 0 && (u.splice(d, 1), u.unshift($.value)), u.map((V) => g.value[V]);
    }), U = z(() => L.value.filter((u) => u.type === "title" || !p.value.hidden.includes(u.key))), I = z(() => U.value.filter((u) => u.type !== "title")), A = z(() => n.schema.filter(Ye)), x = z(() => n.schema.filter((u) => u.type === "date")), J = z(() => n.schema.find((u) => u.type === "status")), te = F(""), Y = z(() => $l(n.rows, n.schema, p.value, te.value)), W = z(() => {
      var d, V;
      const u = p.value.groupBy && g.value[p.value.groupBy] ? p.value.groupBy : null;
      return p.value.layout === "board" && !u ? ((d = J.value) == null ? void 0 : d.key) ?? ((V = A.value[0]) == null ? void 0 : V.key) ?? null : u;
    }), G = z(() => W.value && p.value.layout !== "calendar" ? g.value[W.value] : null), X = z(() => wl(Y.value, G.value, p.value.layout === "board")), Z = (u) => ({ [W.value]: u === it ? null : u }), le = z(() => p.value.filters.filter((u) => g.value[u.prop])), ne = z(() => p.value.sorts.filter((u) => g.value[u.prop])), pe = F({}), _ = F(null), Q = F(null);
    function O(u, d) {
      if (_.value === u && Q.value === d) {
        _.value = null;
        return;
      }
      Q.value = d ?? null, _.value = u;
    }
    const K = (u) => z({ get: () => _.value === u, set: (d) => {
      !d && _.value === u && (_.value = null);
    } }), ve = K("add"), Se = K("filter"), oe = K("sort"), xe = K("group"), De = K("props"), Ne = K("settings");
    function vt(u) {
      u.id === p.value.id ? O("settings", pe.value[u.id]) : i.value = u.id;
    }
    const qe = () => {
      var u, d;
      return ((u = J.value) == null ? void 0 : u.key) ?? ((d = A.value[0]) == null ? void 0 : d.key) ?? null;
    };
    function mt(u) {
      if (n.lockViews) return;
      const d = jt(nt.find((V) => V.value === u).label, u, { groupBy: u === "board" ? qe() : null });
      t.value.push(d), i.value = d.id, _.value = null, Le(() => O("settings", pe.value[d.id]));
    }
    function he(u) {
      p.value.layout = u, u === "board" && !p.value.groupBy && (p.value.groupBy = qe());
    }
    function ht() {
      if (n.lockViews) return;
      const u = JSON.parse(JSON.stringify(p.value));
      u.id = ze(), u.name = p.value.name + " (copie)", t.value.push(u), i.value = u.id, _.value = null;
    }
    function ft() {
      if (n.lockViews || t.value.length < 2) return;
      const u = t.value.indexOf(p.value);
      t.value.splice(u, 1), i.value = t.value[Math.max(0, u - 1)].id, _.value = null;
    }
    Ce(() => p.value.id, () => {
      ue.value = [], _.value = null;
    });
    function k() {
      const u = n.schema.find((d) => d.type !== "title" && d.type !== "progress") ?? n.schema[0];
      p.value.filters.push({ id: ze(), prop: u.key, op: wt[u.type][0], value: "" });
    }
    function M(u) {
      u.op = wt[g.value[u.prop].type][0], u.value = "";
    }
    const T = (u) => {
      var d;
      return wt[(d = g.value[u.prop]) == null ? void 0 : d.type] ?? [];
    }, ae = (u) => !la.includes(u.op);
    function ke(u) {
      const d = g.value[u.prop];
      return d ? Ye(d) || d.type === "multi" ? "options" : d.type === "date" ? "date" : d.type === "number" || d.type === "progress" ? "number" : "text" : "text";
    }
    function Oe(u) {
      var de;
      const d = g.value[u.prop];
      let V = "";
      if (ae(u)) {
        const s = ke(u);
        V = s === "options" ? ((de = ut(d, void 0, u.value)) == null ? void 0 : de.label) ?? "…" : s === "date" ? Vt(u.value) || "…" : u.value === "" ? "…" : u.value;
      }
      return { name: d.name, op: Rt[u.op], val: V };
    }
    function Je() {
      const u = p.value.sorts.map((V) => V.prop), d = n.schema.find((V) => !u.includes(V.key)) ?? n.schema[0];
      p.value.sorts.push({ id: ze(), prop: d.key, dir: "asc" });
    }
    const Et = (u, d) => {
      const V = u.indexOf(d);
      V >= 0 && u.splice(V, 1);
    };
    function ha() {
      p.value.filters.splice(0), p.value.sorts.splice(0);
    }
    function gt(u) {
      p.value.groupBy = u, p.value.collapsed = [], p.value.layout !== "board" && (_.value = null);
    }
    function fa(u) {
      const d = p.value.hidden, V = d.indexOf(u.key);
      V < 0 ? d.push(u.key) : d.splice(V, 1);
    }
    function Ut(u) {
      p.value.hidden = u ? [] : n.schema.filter((d) => d.type !== "title").map((d) => d.key);
    }
    const Re = F(null), Ze = F(null);
    function ga(u) {
      if (Re.value == null) return;
      const d = L.value.map((de) => de.key), [V] = d.splice(Re.value, 1);
      d.splice(u, 0, V), p.value.order = d, Re.value = null, Ze.value = null;
    }
    const yt = (u) => p.value.widths[u.key] ?? u.width ?? 160, ya = z(() => 36 + U.value.reduce((u, d) => u + yt(d), 0) + 44), bt = F(null);
    function ba(u, d) {
      const V = u.clientX, de = yt(d);
      bt.value = d.key;
      const s = (N) => {
        p.value.widths[d.key] = Math.max(70, Math.round(de + N.clientX - V));
      }, b = () => {
        bt.value = null, window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", b);
      };
      window.addEventListener("mousemove", s), window.addEventListener("mouseup", b);
    }
    const ue = F([]), kt = z(() => Y.value.length > 0 && Y.value.every((u) => ue.value.includes(m(u)))), ka = z(() => ue.value.length > 0 && !kt.value);
    function _a(u) {
      const d = ue.value.indexOf(m(u));
      d < 0 ? ue.value.push(m(u)) : ue.value.splice(d, 1);
    }
    function $a() {
      ue.value = kt.value ? [] : Y.value.map(m);
    }
    function wa() {
      c("delete", n.rows.filter((u) => ue.value.includes(m(u)))), ue.value = [];
    }
    const Be = (u) => p.value.collapsed.includes(u);
    function Ft(u) {
      const d = p.value.collapsed, V = d.indexOf(u);
      V < 0 ? d.push(u) : d.splice(V, 1);
    }
    function _t(u) {
      const d = Y.value;
      if (u.type === "title") return { label: "Total", value: String(d.length) };
      if (u.type === "number") return { label: "Somme", value: na.format(d.reduce((V, de) => V + (Number(me(de, u)) || 0), 0)) + (u.suffix ?? "") };
      if (u.type === "progress" && d.length) return { label: "Moyenne", value: Math.round(d.reduce((V, de) => V + Number(me(de, u)), 0) / d.length) + " %" };
      if (u.type === "date" && u.overdue) {
        const V = d.filter((de) => u.overdue(de)).length;
        return V ? { label: "En retard", value: String(V) } : null;
      }
      return u.type === "checkbox" ? { label: "Cochées", value: String(d.filter((V) => me(V, u)).length) } : null;
    }
    const fe = Oa(null), Pt = F(null), $t = F(!1);
    function Ma(u, d, V) {
      if (V.type === "title") {
        c("open", d);
        return;
      }
      if (Ge(V)) {
        if (V.type === "checkbox") {
          c("update", d, V.key, !d[V.key]);
          return;
        }
        Pt.value = u.currentTarget, fe.value = { row: d, prop: V }, $t.value = !0;
      }
    }
    function Te(u = {}) {
      c("create", { ...Al(p.value, n.schema), ...u });
    }
    const Xe = F(null), Qe = F(null);
    function Ht(u, d) {
      Xe.value = m(d), u.dataTransfer && (u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("text/plain", String(m(d))));
    }
    function et() {
      Xe.value = null, Qe.value = null;
    }
    const It = () => n.rows.find((u) => m(u) === Xe.value);
    function Aa(u) {
      const d = It();
      d && W.value && c("update", d, W.value, u === it ? null : u), et();
    }
    function Ca(u) {
      const d = It();
      d && _e.value && c("update", d, _e.value, u), et();
    }
    const _e = z(() => {
      var u;
      return p.value.dateProp && g.value[p.value.dateProp] ? p.value.dateProp : ((u = x.value[0]) == null ? void 0 : u.key) ?? null;
    }), tt = z(() => p.value.month ?? We().slice(0, 7)), Sa = z(() => Ml(tt.value).map((u) => ({ ...u, today: u.iso === We(), rows: _e.value ? Y.value.filter((d) => d[_e.value] === u.iso) : [] }))), xt = z(() => _e.value ? Y.value.filter((u) => !u[_e.value]).length : 0), Va = { neutral: "var(--ink-subtle)", info: "var(--info)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" }, Ta = (u) => {
      const d = J.value, V = d ? ut(d, u, u[d.key]) : void 0;
      return Va[(V == null ? void 0 : V.tone) ?? "neutral"];
    }, za = (u) => {
      const d = J.value;
      if (!d) return !1;
      const V = Ie(d, u);
      return V.length > 0 && u[d.key] === V[V.length - 1].value;
    }, at = (u, d = 0) => n.iconTools ? { iconOnly: !d, label: u, title: u, "aria-label": d ? `${u} (${d})` : u } : {}, La = (u) => {
      var d;
      return ((d = nt.find((V) => V.value === u)) == null ? void 0 : d.icon) ?? "table";
    }, lt = z(() => G.value ? `Sans ${G.value.name.toLowerCase()}` : "");
    return (u, d) => {
      var V, de;
      return e(), l("section", Kn, [
        o("div", jn, [
          u.hideViews ? h("", !0) : (e(), l(w, { key: 0 }, [
            o("div", Wn, [
              (e(!0), l(w, null, E(t.value, (s) => (e(), l("button", {
                key: s.id,
                ref_for: !0,
                ref: (b) => {
                  b && (pe.value[s.id] = b);
                },
                type: "button",
                class: "at-tab",
                role: "tab",
                "aria-selected": s.id === p.value.id,
                title: s.id === p.value.id ? "Paramètres de la vue" : void 0,
                onClick: (b) => vt(s)
              }, [
                f(B, {
                  name: La(s.layout)
                }, null, 8, ["name"]),
                y(v(s.name), 1)
              ], 8, Gn))), 128))
            ]),
            u.lockViews ? h("", !0) : (e(), H(j, {
              key: 0,
              variant: "ghost",
              size: "sm",
              icon: "plus",
              "icon-only": "",
              label: "Ajouter une vue",
              onClick: d[0] || (d[0] = (s) => O("add", s.currentTarget))
            }))
          ], 64)),
          o("div", Yn, [
            f(j, ye(at("Filtrer", le.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "filter",
              class: { "is-on": le.value.length },
              onClick: d[1] || (d[1] = (s) => O("filter", s.currentTarget))
            }), {
              default: D(() => [
                u.iconTools ? h("", !0) : (e(), l(w, { key: 0 }, [
                  y("Filtrer")
                ], 64)),
                le.value.length ? (e(), l("span", Jn, v(le.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            f(j, ye(at("Trier", ne.value.length), {
              variant: "ghost",
              size: "sm",
              icon: "sort",
              class: { "is-on": ne.value.length },
              onClick: d[2] || (d[2] = (s) => O("sort", s.currentTarget))
            }), {
              default: D(() => [
                u.iconTools ? h("", !0) : (e(), l(w, { key: 0 }, [
                  y("Trier")
                ], 64)),
                ne.value.length ? (e(), l("span", Zn, v(ne.value.length), 1)) : h("", !0)
              ]),
              _: 1
            }, 16, ["class"]),
            p.value.layout !== "calendar" ? (e(), H(j, ye({ key: 0 }, at("Grouper"), {
              variant: "ghost",
              size: "sm",
              icon: "group",
              class: { "is-on": p.value.groupBy },
              onClick: d[3] || (d[3] = (s) => O("group", s.currentTarget))
            }), {
              default: D(() => [
                y("Grouper")
              ]),
              _: 1
            }, 16, ["class"])) : h("", !0),
            f(j, ye(at("Propriétés"), {
              variant: "ghost",
              size: "sm",
              icon: "eye",
              onClick: d[4] || (d[4] = (s) => O("props", s.currentTarget))
            }), {
              default: D(() => [
                y("Propriétés")
              ]),
              _: 1
            }, 16),
            o("div", Xn, [
              f(B, { name: "search" }),
              ee(o("input", {
                "onUpdate:modelValue": d[5] || (d[5] = (s) => te.value = s),
                class: "at-input",
                placeholder: "Rechercher",
                "aria-label": "Rechercher dans la vue"
              }, null, 512), [
                [Me, te.value]
              ])
            ]),
            u.hideViews ? h("", !0) : (e(), H(j, {
              key: 1,
              variant: "ghost",
              size: "sm",
              icon: "sliders",
              "icon-only": "",
              label: "Paramètres de la vue",
              onClick: d[6] || (d[6] = (s) => O("settings", s.currentTarget))
            })),
            f(j, {
              variant: "primary",
              size: "sm",
              icon: "plus",
              onClick: d[7] || (d[7] = (s) => Te())
            }, {
              default: D(() => [
                y(v(u.newLabel), 1)
              ]),
              _: 1
            })
          ])
        ]),
        le.value.length || ne.value.length ? (e(), l("div", es, [
          (e(!0), l(w, null, E(le.value, (s) => (e(), l("button", {
            key: s.id,
            type: "button",
            class: "at-dv-chip",
            onClick: d[8] || (d[8] = (b) => O("filter", b.currentTarget))
          }, [
            f(B, { name: "filter" }),
            y(v(Oe(s).name) + " " + v(Oe(s).op) + " ", 1),
            o("b", null, v(Oe(s).val), 1)
          ]))), 128)),
          (e(!0), l(w, null, E(ne.value, (s) => (e(), l("button", {
            key: s.id,
            type: "button",
            class: "at-dv-chip",
            onClick: d[9] || (d[9] = (b) => O("sort", b.currentTarget))
          }, [
            f(B, { name: "sort" }),
            y(v(g.value[s.prop].name) + " ", 1),
            o("b", null, v(s.dir === "asc" ? "↑" : "↓"), 1)
          ]))), 128)),
          f(j, {
            variant: "ghost",
            size: "sm",
            onClick: ha
          }, {
            default: D(() => [
              y("Tout effacer")
            ]),
            _: 1
          })
        ])) : h("", !0),
        p.value.layout === "table" ? (e(), l(w, { key: 1 }, [
          o("div", ts, [
            o("table", {
              class: "at-table at-dv-table",
              style: ce({ width: ya.value + "px", minWidth: "100%" })
            }, [
              o("colgroup", null, [
                as,
                (e(!0), l(w, null, E(U.value, (s) => (e(), l("col", {
                  key: s.key,
                  style: ce({ width: yt(s) + "px" })
                }, null, 4))), 128)),
                ls
              ]),
              o("thead", null, [
                o("tr", null, [
                  o("th", ns, [
                    o("input", {
                      type: "checkbox",
                      class: "at-check",
                      "aria-label": "Tout sélectionner",
                      checked: kt.value,
                      indeterminate: ka.value,
                      onChange: $a
                    }, null, 40, ss)
                  ]),
                  (e(!0), l(w, null, E(U.value, (s) => (e(), l("th", {
                    key: s.key,
                    class: q({ "at-num": s.type === "number" })
                  }, [
                    o("span", os, [
                      f(B, {
                        name: C(st)(s)
                      }, null, 8, ["name"]),
                      y(v(s.name), 1)
                    ]),
                    o("span", {
                      class: q(["at-dv-resize", bt.value === s.key && "on"]),
                      "aria-hidden": "true",
                      onMousedown: se((b) => ba(b, s), ["prevent"])
                    }, null, 42, rs)
                  ], 2))), 128)),
                  o("th", is, [
                    f(j, {
                      variant: "ghost",
                      size: "sm",
                      icon: "plus",
                      "icon-only": "",
                      label: "Afficher des propriétés",
                      onClick: d[10] || (d[10] = (s) => O("props", s.currentTarget))
                    })
                  ])
                ])
              ]),
              (e(!0), l(w, null, E(X.value, (s) => (e(), l("tbody", {
                key: s.key
              }, [
                G.value ? (e(), l("tr", us, [
                  o("td", {
                    colspan: U.value.length + 2
                  }, [
                    o("button", {
                      type: "button",
                      class: "at-dv-grouphead",
                      "aria-expanded": !Be(s.key),
                      onClick: (b) => Ft(s.key)
                    }, [
                      f(B, {
                        name: "chevron-down",
                        class: q({ "at-rot": Be(s.key) })
                      }, null, 8, ["class"]),
                      s.option ? (e(), H(we, {
                        key: 0,
                        prop: G.value,
                        row: Z(s.key)
                      }, null, 8, ["prop", "row"])) : (e(), l("span", ps, v(lt.value), 1)),
                      o("span", vs, v(s.rows.length), 1)
                    ], 8, cs)
                  ], 8, ds)
                ])) : h("", !0),
                Be(s.key) ? h("", !0) : (e(), l(w, { key: 1 }, [
                  (e(!0), l(w, null, E(s.rows, (b) => (e(), l("tr", {
                    key: m(b),
                    "aria-selected": ue.value.includes(m(b)) ? "true" : void 0
                  }, [
                    o("td", hs, [
                      o("input", {
                        type: "checkbox",
                        class: "at-check",
                        "aria-label": "Sélectionner la ligne",
                        checked: ue.value.includes(m(b)),
                        onChange: (N) => _a(b)
                      }, null, 40, fs)
                    ]),
                    (e(!0), l(w, null, E(U.value, (N) => (e(), l("td", {
                      key: N.key,
                      class: q({ "at-num": N.type === "number", "at-dv-titlecell": N.type === "title", "is-edit": N.type !== "title" && C(Ge)(N) }),
                      onClick: (ge) => Ma(ge, b, N)
                    }, [
                      f(we, {
                        prop: N,
                        row: b
                      }, null, 8, ["prop", "row"]),
                      N.type === "title" ? (e(), l("button", {
                        key: 0,
                        type: "button",
                        class: "at-dv-open",
                        onClick: se((ge) => c("open", b), ["stop"])
                      }, "Ouvrir", 8, ys)) : h("", !0)
                    ], 10, gs))), 128)),
                    bs
                  ], 8, ms))), 128)),
                  o("tr", ks, [
                    _s,
                    o("td", {
                      colspan: U.value.length + 1
                    }, [
                      o("button", {
                        type: "button",
                        class: "at-dv-new",
                        onClick: (b) => Te(G.value ? Z(s.key) : {})
                      }, [
                        f(B, { name: "plus" }),
                        y(v(u.newLabel), 1)
                      ], 8, ws)
                    ], 8, $s)
                  ])
                ], 64))
              ]))), 128)),
              o("tfoot", null, [
                o("tr", null, [
                  Ms,
                  (e(!0), l(w, null, E(U.value, (s) => (e(), l("td", {
                    key: s.key,
                    class: q({ "at-num": s.type === "number" })
                  }, [
                    _t(s) ? (e(), l(w, { key: 0 }, [
                      y(v(_t(s).label) + " ", 1),
                      o("b", null, v(_t(s).value), 1)
                    ], 64)) : h("", !0)
                  ], 2))), 128)),
                  As
                ])
              ])
            ], 4)
          ]),
          ue.value.length ? (e(), l("div", Cs, [
            o("span", null, [
              o("b", Ss, v(ue.value.length), 1),
              y(" sélectionnée" + v(ue.value.length > 1 ? "s" : ""), 1)
            ]),
            f(j, {
              variant: "danger",
              size: "sm",
              icon: "trash",
              onClick: wa
            }, {
              default: D(() => [
                y("Supprimer")
              ]),
              _: 1
            }),
            f(j, {
              variant: "ghost",
              size: "sm",
              onClick: d[11] || (d[11] = (s) => ue.value = [])
            }, {
              default: D(() => [
                y("Désélectionner")
              ]),
              _: 1
            })
          ])) : h("", !0)
        ], 64)) : p.value.layout === "board" ? (e(), l("div", Vs, [
          G.value ? (e(!0), l(w, { key: 1 }, E(X.value, (s) => {
            var b;
            return e(), l("div", {
              key: s.key,
              class: q(["at-dv-col", Qe.value === s.key && "over"]),
              onDragover: se((N) => Qe.value = s.key, ["prevent"]),
              onDragleave: d[12] || (d[12] = se((N) => Qe.value = null, ["self"])),
              onDrop: se((N) => Aa(s.key), ["prevent"])
            }, [
              o("div", Ls, [
                s.option ? (e(), H(we, {
                  key: 0,
                  prop: G.value,
                  row: Z(s.key)
                }, null, 8, ["prop", "row"])) : (e(), l("span", Ds, v(lt.value), 1)),
                o("span", Os, v(s.rows.length), 1),
                Bs,
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  "icon-only": "",
                  label: `Ajouter dans ${((b = s.option) == null ? void 0 : b.label) ?? lt.value}`,
                  onClick: (N) => Te(Z(s.key))
                }, null, 8, ["label", "onClick"])
              ]),
              o("div", Qs, [
                (e(!0), l(w, null, E(s.rows, (N) => (e(), l("button", {
                  key: m(N),
                  type: "button",
                  class: q(["at-dv-card", Xe.value === m(N) && "dragging"]),
                  draggable: "true",
                  onDragstart: (ge) => Ht(ge, N),
                  onDragend: et,
                  onClick: (ge) => c("open", N)
                }, [
                  o("span", Us, v(N[$.value] || "Sans titre"), 1),
                  I.value.some((ge) => !C(be)(C(me)(N, ge)) || ge.type === "checkbox") ? (e(), l("span", Fs, [
                    (e(!0), l(w, null, E(I.value, (ge) => (e(), l(w, {
                      key: ge.key
                    }, [
                      C(be)(C(me)(N, ge)) ? h("", !0) : (e(), H(we, {
                        key: 0,
                        prop: ge,
                        row: N
                      }, null, 8, ["prop", "row"]))
                    ], 64))), 128))
                  ])) : h("", !0)
                ], 42, Es))), 128)),
                o("button", {
                  type: "button",
                  class: "at-dv-new",
                  onClick: (N) => Te(Z(s.key))
                }, [
                  f(B, { name: "plus" }),
                  y(v(u.newLabel), 1)
                ], 8, Ps)
              ])
            ], 42, zs);
          }), 128)) : (e(), l("div", Ts, "Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes."))
        ])) : p.value.layout === "list" ? (e(), l("div", Hs, [
          Y.value.length ? (e(), l("div", xs, [
            (e(!0), l(w, null, E(X.value, (s) => (e(), l(w, {
              key: s.key
            }, [
              G.value ? (e(), l("div", Ns, [
                o("button", {
                  type: "button",
                  class: "at-dv-grouphead",
                  "aria-expanded": !Be(s.key),
                  onClick: (b) => Ft(s.key)
                }, [
                  f(B, {
                    name: "chevron-down",
                    class: q({ "at-rot": Be(s.key) })
                  }, null, 8, ["class"]),
                  s.option ? (e(), H(we, {
                    key: 0,
                    prop: G.value,
                    row: Z(s.key)
                  }, null, 8, ["prop", "row"])) : (e(), l("span", Rs, v(lt.value), 1)),
                  o("span", Ks, v(s.rows.length), 1)
                ], 8, qs)
              ])) : h("", !0),
              Be(s.key) ? h("", !0) : (e(!0), l(w, { key: 1 }, E(s.rows, (b) => (e(), l("button", {
                key: m(b),
                type: "button",
                class: "at-dv-li",
                onClick: (N) => c("open", b)
              }, [
                o("span", Ws, v(b[$.value] || "Sans titre"), 1),
                o("span", Gs, [
                  (e(!0), l(w, null, E(I.value, (N) => (e(), l(w, {
                    key: N.key
                  }, [
                    C(be)(C(me)(b, N)) ? h("", !0) : (e(), H(we, {
                      key: 0,
                      prop: N,
                      row: b
                    }, null, 8, ["prop", "row"]))
                  ], 64))), 128))
                ])
              ], 8, js))), 128))
            ], 64))), 128)),
            o("div", Ys, [
              o("button", {
                type: "button",
                class: "at-dv-new",
                onClick: d[14] || (d[14] = (s) => Te())
              }, [
                f(B, { name: "plus" }),
                y(v(u.newLabel), 1)
              ])
            ])
          ])) : (e(), l("div", Is, [
            y("Aucun élément ne correspond à cette vue."),
            f(j, {
              size: "sm",
              icon: "plus",
              onClick: d[13] || (d[13] = (s) => Te())
            }, {
              default: D(() => [
                y(v(u.newLabel), 1)
              ]),
              _: 1
            })
          ]))
        ])) : (e(), l(w, { key: 4 }, [
          o("div", Js, [
            o("span", Zs, v(C(Vl)(tt.value)), 1),
            f(j, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-left",
              "icon-only": "",
              label: "Mois précédent",
              onClick: d[15] || (d[15] = (s) => p.value.month = C(Kt)(tt.value, -1))
            }),
            f(j, {
              size: "sm",
              onClick: d[16] || (d[16] = (s) => p.value.month = C(We)().slice(0, 7))
            }, {
              default: D(() => [
                y("Aujourd’hui")
              ]),
              _: 1
            }),
            f(j, {
              variant: "ghost",
              size: "sm",
              icon: "chevron-right",
              "icon-only": "",
              label: "Mois suivant",
              onClick: d[17] || (d[17] = (s) => p.value.month = C(Kt)(tt.value, 1))
            }),
            o("span", Xs, [
              _e.value ? (e(), l(w, { key: 0 }, [
                y("Par " + v(g.value[_e.value].name.toLowerCase()), 1),
                xt.value ? (e(), l(w, { key: 0 }, [
                  y(" · " + v(xt.value) + " sans date", 1)
                ], 64)) : h("", !0)
              ], 64)) : (e(), l(w, { key: 1 }, [
                y("Aucune propriété date")
              ], 64))
            ])
          ]),
          o("div", eo, [
            o("div", to, [
              (e(), l(w, null, E(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], (s) => o("div", {
                key: s,
                class: "at-dv-dow"
              }, v(s), 1)), 64))
            ]),
            o("div", ao, [
              (e(!0), l(w, null, E(Sa.value, (s) => (e(), l("div", {
                key: s.iso,
                class: q(["at-dv-day", s.outside && "out", s.today && "today", Qe.value === s.iso && "over"]),
                onDragover: se((b) => Qe.value = s.iso, ["prevent"]),
                onDrop: se((b) => Ca(s.iso), ["prevent"])
              }, [
                o("div", no, [
                  o("span", null, v(s.day), 1),
                  _e.value ? (e(), l("button", {
                    key: 0,
                    type: "button",
                    class: "at-dv-dayadd",
                    "aria-label": `Ajouter le ${C(Vt)(s.iso)}`,
                    onClick: (b) => Te({ [_e.value]: s.iso })
                  }, [
                    f(B, { name: "plus" })
                  ], 8, so)) : h("", !0)
                ]),
                (e(!0), l(w, null, E(s.rows, (b) => (e(), l("button", {
                  key: m(b),
                  type: "button",
                  class: q(["at-dv-calitem", za(b) && "done"]),
                  draggable: "true",
                  onDragstart: (N) => Ht(N, b),
                  onDragend: et,
                  onClick: (N) => c("open", b)
                }, [
                  o("span", {
                    class: "dot",
                    style: ce({ background: Ta(b) })
                  }, null, 4),
                  o("span", null, v(b[$.value] || "Sans titre"), 1)
                ], 42, oo))), 128))
              ], 42, lo))), 128))
            ])
          ])
        ], 64)),
        f($e, {
          open: C(ve),
          "onUpdate:open": d[18] || (d[18] = (s) => Ee(ve) ? ve.value = s : null),
          anchor: Q.value
        }, {
          default: D(() => [
            o("div", ro, [
              io,
              (e(!0), l(w, null, E(C(nt), (s) => (e(), l("button", {
                key: s.value,
                type: "button",
                class: "at-menu-item",
                role: "menuitem",
                onClick: (b) => mt(s.value)
              }, [
                f(B, {
                  name: s.icon
                }, null, 8, ["name"]),
                y(v(s.label), 1)
              ], 8, uo))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f($e, {
          open: C(Se),
          "onUpdate:open": d[19] || (d[19] = (s) => Ee(Se) ? Se.value = s : null),
          anchor: Q.value,
          align: "end"
        }, {
          default: D(() => [
            o("div", co, [
              po,
              o("div", vo, [
                p.value.filters.length ? h("", !0) : (e(), l("span", mo, "Aucun filtre : la vue affiche toutes les lignes.")),
                (e(!0), l(w, null, E(p.value.filters, (s) => (e(), l("div", {
                  key: s.id,
                  class: "at-rule"
                }, [
                  o("div", ho, [
                    ee(o("select", {
                      "onUpdate:modelValue": (b) => s.prop = b,
                      "aria-label": "Propriété",
                      onChange: (b) => M(s)
                    }, [
                      (e(!0), l(w, null, E(u.schema, (b) => (e(), l("option", {
                        key: b.key,
                        value: b.key
                      }, v(b.name), 9, go))), 128))
                    ], 40, fo), [
                      [Ue, s.prop]
                    ]),
                    f(B, { name: "chevron-down" })
                  ]),
                  o("div", yo, [
                    ee(o("select", {
                      "onUpdate:modelValue": (b) => s.op = b,
                      "aria-label": "Condition"
                    }, [
                      (e(!0), l(w, null, E(T(s), (b) => (e(), l("option", {
                        key: b,
                        value: b
                      }, v(C(Rt)[b]), 9, ko))), 128))
                    ], 8, bo), [
                      [Ue, s.op]
                    ]),
                    f(B, { name: "chevron-down" })
                  ]),
                  ae(s) ? (e(), l(w, { key: 0 }, [
                    ke(s) === "options" ? (e(), l("div", _o, [
                      ee(o("select", {
                        "onUpdate:modelValue": (b) => s.value = b,
                        "aria-label": "Valeur"
                      }, [
                        wo,
                        (e(!0), l(w, null, E(C(Ie)(g.value[s.prop]), (b) => (e(), l("option", {
                          key: b.value,
                          value: b.value
                        }, v(b.label), 9, Mo))), 128))
                      ], 8, $o), [
                        [Ue, s.value]
                      ]),
                      f(B, { name: "chevron-down" })
                    ])) : ke(s) === "date" ? ee((e(), l("input", {
                      key: 1,
                      "onUpdate:modelValue": (b) => s.value = b,
                      type: "date",
                      class: "at-input",
                      "aria-label": "Date"
                    }, null, 8, Ao)), [
                      [Me, s.value]
                    ]) : ke(s) === "number" ? ee((e(), l("input", {
                      key: 2,
                      "onUpdate:modelValue": (b) => s.value = b,
                      type: "number",
                      class: "at-input",
                      "aria-label": "Valeur"
                    }, null, 8, Co)), [
                      [Me, s.value]
                    ]) : ee((e(), l("input", {
                      key: 3,
                      "onUpdate:modelValue": (b) => s.value = b,
                      class: "at-input",
                      placeholder: "Texte",
                      "aria-label": "Valeur"
                    }, null, 8, So)), [
                      [Me, s.value]
                    ])
                  ], 64)) : (e(), l("span", Vo)),
                  f(j, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le filtre",
                    onClick: (b) => Et(p.value.filters, s)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              o("div", To, [
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: k
                }, {
                  default: D(() => [
                    y("Ajouter un filtre")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f($e, {
          open: C(oe),
          "onUpdate:open": d[20] || (d[20] = (s) => Ee(oe) ? oe.value = s : null),
          anchor: Q.value,
          align: "end"
        }, {
          default: D(() => [
            o("div", zo, [
              Lo,
              o("div", Do, [
                p.value.sorts.length ? h("", !0) : (e(), l("span", Oo, "Aucun tri : ordre des données.")),
                (e(!0), l(w, null, E(p.value.sorts, (s) => (e(), l("div", {
                  key: s.id,
                  class: "at-rule sort"
                }, [
                  o("div", Bo, [
                    ee(o("select", {
                      "onUpdate:modelValue": (b) => s.prop = b,
                      "aria-label": "Propriété"
                    }, [
                      (e(!0), l(w, null, E(u.schema, (b) => (e(), l("option", {
                        key: b.key,
                        value: b.key
                      }, v(b.name), 9, Eo))), 128))
                    ], 8, Qo), [
                      [Ue, s.prop]
                    ]),
                    f(B, { name: "chevron-down" })
                  ]),
                  o("div", Uo, [
                    ee(o("select", {
                      "onUpdate:modelValue": (b) => s.dir = b,
                      "aria-label": "Sens"
                    }, Io, 8, Fo), [
                      [Ue, s.dir]
                    ]),
                    f(B, { name: "chevron-down" })
                  ]),
                  f(j, {
                    variant: "ghost",
                    size: "sm",
                    icon: "x",
                    "icon-only": "",
                    label: "Retirer le tri",
                    onClick: (b) => Et(p.value.sorts, s)
                  }, null, 8, ["onClick"])
                ]))), 128))
              ]),
              o("div", xo, [
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  icon: "plus",
                  onClick: Je
                }, {
                  default: D(() => [
                    y("Ajouter un tri")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f($e, {
          open: C(xe),
          "onUpdate:open": d[22] || (d[22] = (s) => Ee(xe) ? xe.value = s : null),
          anchor: Q.value,
          align: "end"
        }, {
          default: D(() => [
            o("div", No, [
              o("div", qo, v(p.value.layout === "board" ? "Colonnes du board" : "Grouper par"), 1),
              p.value.layout !== "board" ? (e(), l("button", {
                key: 0,
                type: "button",
                class: "at-menu-item",
                onClick: d[21] || (d[21] = (s) => gt(null))
              }, [
                f(B, { name: "x" }),
                y("Aucun groupe"),
                p.value.groupBy ? h("", !0) : (e(), H(B, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                }))
              ])) : h("", !0),
              (e(!0), l(w, null, E(A.value, (s) => (e(), l("button", {
                key: s.key,
                type: "button",
                class: "at-menu-item",
                onClick: (b) => gt(s.key)
              }, [
                f(B, {
                  name: C(st)(s)
                }, null, 8, ["name"]),
                y(v(s.name), 1),
                W.value === s.key ? (e(), H(B, {
                  key: 0,
                  name: "check",
                  class: "at-menu-check"
                })) : h("", !0)
              ], 8, Ro))), 128))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f($e, {
          open: C(De),
          "onUpdate:open": d[26] || (d[26] = (s) => Ee(De) ? De.value = s : null),
          anchor: Q.value,
          align: "end"
        }, {
          default: D(() => [
            o("div", Ko, [
              jo,
              (e(!0), l(w, null, E(L.value, (s, b) => (e(), l("div", {
                key: s.key,
                class: q(["at-menu-item", "at-pi", Ze.value === b && "drop"]),
                draggable: s.type !== "title",
                onDragstart: (N) => Re.value = b,
                onDragover: se((N) => Ze.value = b, ["prevent"]),
                onDrop: se((N) => ga(b), ["prevent"]),
                onDragend: d[23] || (d[23] = (N) => {
                  Re.value = null, Ze.value = null;
                })
              }, [
                f(B, {
                  name: "grip",
                  class: "grip"
                }),
                f(B, {
                  name: C(st)(s)
                }, null, 8, ["name"]),
                o("span", Go, v(s.name), 1),
                o("input", {
                  type: "checkbox",
                  role: "switch",
                  class: "at-switch",
                  "aria-label": `Afficher ${s.name}`,
                  checked: s.type === "title" || !p.value.hidden.includes(s.key),
                  disabled: s.type === "title",
                  onChange: (N) => fa(s)
                }, null, 40, Yo)
              ], 42, Wo))), 128)),
              Jo,
              o("div", Zo, [
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: d[24] || (d[24] = (s) => Ut(!0))
                }, {
                  default: D(() => [
                    y("Tout afficher")
                  ]),
                  _: 1
                }),
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: d[25] || (d[25] = (s) => Ut(!1))
                }, {
                  default: D(() => [
                    y("Tout masquer")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f($e, {
          open: C(Ne),
          "onUpdate:open": d[30] || (d[30] = (s) => Ee(Ne) ? Ne.value = s : null),
          anchor: Q.value
        }, {
          default: D(() => [
            o("div", Xo, [
              er,
              ee(o("input", {
                "onUpdate:modelValue": d[27] || (d[27] = (s) => p.value.name = s),
                class: "at-input",
                "aria-label": "Nom de la vue",
                placeholder: "Nom de la vue"
              }, null, 512), [
                [Me, p.value.name]
              ]),
              o("div", tr, [
                (e(!0), l(w, null, E(C(nt), (s) => (e(), l("button", {
                  key: s.value,
                  type: "button",
                  class: "at-layout-opt",
                  "aria-pressed": p.value.layout === s.value,
                  onClick: (b) => he(s.value)
                }, [
                  f(B, {
                    name: s.icon
                  }, null, 8, ["name"]),
                  y(v(s.label), 1)
                ], 8, ar))), 128))
              ]),
              p.value.layout !== "calendar" ? (e(), l("div", lr, [
                o("span", null, v(p.value.layout === "board" ? "Colonnes" : "Grouper par"), 1),
                o("div", nr, [
                  o("select", {
                    value: p.value.groupBy ?? "",
                    "aria-label": "Grouper par",
                    onChange: d[28] || (d[28] = (s) => gt(s.target.value || null))
                  }, [
                    p.value.layout !== "board" ? (e(), l("option", or, "Aucun")) : h("", !0),
                    (e(!0), l(w, null, E(A.value, (s) => (e(), l("option", {
                      key: s.key,
                      value: s.key
                    }, v(s.name), 9, rr))), 128))
                  ], 40, sr),
                  f(B, { name: "chevron-down" })
                ])
              ])) : (e(), l("div", ir, [
                ur,
                o("div", dr, [
                  o("select", {
                    value: _e.value ?? "",
                    "aria-label": "Date utilisée",
                    onChange: d[29] || (d[29] = (s) => p.value.dateProp = s.target.value)
                  }, [
                    (e(!0), l(w, null, E(x.value, (s) => (e(), l("option", {
                      key: s.key,
                      value: s.key
                    }, v(s.name), 9, pr))), 128))
                  ], 40, cr),
                  f(B, { name: "chevron-down" })
                ])
              ])),
              u.lockViews ? h("", !0) : (e(), l(w, { key: 2 }, [
                vr,
                o("button", {
                  type: "button",
                  class: "at-menu-item",
                  onClick: ht
                }, [
                  f(B, { name: "copy" }),
                  y("Dupliquer la vue")
                ]),
                o("button", {
                  type: "button",
                  class: "at-menu-item at-menu-item--danger",
                  disabled: t.value.length < 2,
                  onClick: ft
                }, [
                  f(B, { name: "trash" }),
                  y("Supprimer la vue")
                ], 8, mr)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["open", "anchor"]),
        f(Qt, {
          open: $t.value,
          "onUpdate:open": d[31] || (d[31] = (s) => $t.value = s),
          prop: ((V = fe.value) == null ? void 0 : V.prop) ?? null,
          row: (de = fe.value) == null ? void 0 : de.row,
          anchor: Pt.value,
          onUpdate: d[32] || (d[32] = (s) => fe.value && c("update", fe.value.row, fe.value.prop.key, s)),
          onCreateOption: d[33] || (d[33] = (s) => fe.value && c("createOption", fe.value.prop, s)),
          onUpdateOption: d[34] || (d[34] = (s, b) => fe.value && c("updateOption", fe.value.prop, s, b)),
          onDeleteOption: d[35] || (d[35] = (s) => fe.value && c("deleteOption", fe.value.prop, s))
        }, null, 8, ["open", "prop", "row", "anchor"])
      ]);
    };
  }
}), fr = {
  key: 0,
  class: "at-drawer-wrap"
}, gr = ["aria-label"], yr = { class: "at-drawer__head" }, br = { class: "at-drawer__crumb" }, kr = /* @__PURE__ */ o("span", { class: "at-spacer" }, null, -1), _r = { class: "at-drawer__body" }, $r = /* @__PURE__ */ R({
  __name: "AtDrawer",
  props: /* @__PURE__ */ re({
    label: {},
    width: { default: 580 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(r) {
    const a = ie(r, "open"), n = F();
    let t = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return Ce(a, (c) => {
      var m;
      c ? (t = document.activeElement, document.addEventListener("keydown", i), Le(() => {
        var p;
        return (p = n.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (m = t == null ? void 0 : t.focus) == null || m.call(t));
    }, { immediate: !0 }), dt(() => document.removeEventListener("keydown", i)), (c, m) => (e(), H(Ot, { to: "body" }, [
      f(ea, { name: "at-drawer" }, {
        default: D(() => [
          a.value ? (e(), l("div", fr, [
            o("div", {
              class: "at-overlay",
              onClick: m[0] || (m[0] = (p) => a.value = !1)
            }),
            o("aside", {
              ref_key: "panel",
              ref: n,
              class: "at-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.label,
              tabindex: "-1",
              style: ce({ width: `min(${c.width}px, 100%)` })
            }, [
              o("header", yr, [
                o("span", br, [
                  P(c.$slots, "crumb", {}, () => [
                    y(v(c.label), 1)
                  ])
                ]),
                kr,
                P(c.$slots, "actions"),
                f(j, {
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })
              ]),
              o("div", _r, [
                P(c.$slots, "default")
              ])
            ], 12, gr)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), wr = ["aria-label"], Mr = {
  key: 0,
  class: "at-menu-label"
}, oa = /* @__PURE__ */ R({
  __name: "AtMenu",
  props: {
    label: {},
    minWidth: {}
  },
  setup(r) {
    const a = F();
    function n(t) {
      var p;
      const i = [...((p = a.value) == null ? void 0 : p.querySelectorAll(".at-menu-item:not(:disabled)")) ?? []];
      if (!i.length) return;
      const c = i.indexOf(document.activeElement), m = (g) => {
        t.preventDefault(), i[(g + i.length) % i.length].focus();
      };
      t.key === "ArrowDown" ? m(c + 1) : t.key === "ArrowUp" ? m(c < 0 ? i.length - 1 : c - 1) : t.key === "Home" ? m(0) : t.key === "End" && m(i.length - 1);
    }
    return (t, i) => (e(), l("div", {
      ref_key: "el",
      ref: a,
      class: "at-menu",
      role: "menu",
      "aria-label": t.label,
      style: ce(t.minWidth ? { minWidth: t.minWidth + "px" } : void 0),
      onKeydown: n
    }, [
      t.label ? (e(), l("div", Mr, v(t.label), 1)) : h("", !0),
      P(t.$slots, "default")
    ], 44, wr));
  }
}), ra = /* @__PURE__ */ R({
  __name: "AtDropdown",
  props: {
    label: {},
    align: { default: "start" },
    placement: { default: "bottom" },
    minWidth: { default: 220 }
  },
  setup(r) {
    const a = F(!1);
    function n(t) {
      t.target.closest('.at-menu-item[role="menuitem"]') && (a.value = !1);
    }
    return (t, i) => (e(), H($e, {
      open: a.value,
      "onUpdate:open": i[0] || (i[0] = (c) => a.value = c),
      align: t.align,
      placement: t.placement
    }, {
      trigger: D((c) => [
        P(t.$slots, "trigger", Ba(Qa(c)))
      ]),
      default: D(() => [
        f(oa, {
          label: t.label,
          "min-width": t.minWidth,
          onClick: n
        }, {
          default: D(() => [
            P(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["label", "min-width"])
      ]),
      _: 3
    }, 8, ["open", "align", "placement"]));
  }
}), Ar = { class: "at-empty" }, Cr = /* @__PURE__ */ R({
  __name: "AtEmpty",
  props: {
    message: {}
  },
  setup(r) {
    return (a, n) => (e(), l("div", Ar, [
      P(a.$slots, "default", {}, () => [
        y(v(a.message), 1)
      ]),
      P(a.$slots, "action")
    ]));
  }
}), Sr = { class: "at-field" }, Vr = ["for"], Tr = ["id"], zr = ["id"], Tt = /* @__PURE__ */ R({
  __name: "AtField",
  props: {
    label: {},
    hint: {},
    error: {},
    id: {}
  },
  setup(r) {
    const n = r.id ?? pt("field");
    return (t, i) => (e(), l("div", Sr, [
      t.label ? (e(), l("label", {
        key: 0,
        class: "at-label",
        for: C(n)
      }, v(t.label), 9, Vr)) : h("", !0),
      P(t.$slots, "default", {
        id: C(n),
        invalid: !!t.error,
        describedby: t.error || t.hint ? C(n) + "-hint" : void 0
      }),
      t.error ? (e(), l("span", {
        key: 1,
        id: C(n) + "-hint",
        class: "at-hint at-hint--error"
      }, v(t.error), 9, Tr)) : t.hint ? (e(), l("span", {
        key: 2,
        id: C(n) + "-hint",
        class: "at-hint"
      }, v(t.hint), 9, zr)) : h("", !0)
    ]));
  }
}), Lr = ["role", "aria-label", "aria-hidden"], ia = /* @__PURE__ */ R({
  __name: "AtIconTile",
  props: {
    name: {},
    color: { default: "neutral" },
    size: { default: "sm" },
    label: {}
  },
  setup(r) {
    return (a, n) => (e(), l("span", {
      class: q(["at-tile", a.size !== "sm" && `at-tile--${a.size}`, a.color === "neutral" ? "at-tile--neutral" : `at-tone-${a.color}`]),
      role: a.label ? "img" : void 0,
      "aria-label": a.label,
      "aria-hidden": a.label ? void 0 : "true"
    }, [
      f(B, { name: a.name }, null, 8, ["name"])
    ], 10, Lr));
  }
}), Dr = {
  key: 0,
  class: "at-input-wrap"
}, Or = ["type", "placeholder", "disabled", "aria-invalid"], Br = ["type", "placeholder", "disabled", "aria-invalid"], zt = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "AtInput",
  props: /* @__PURE__ */ re({
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
  setup(r, { expose: a }) {
    const n = ie(r, "modelValue"), t = r, i = F();
    return a({ focus: () => {
      var c;
      return (c = i.value) == null ? void 0 : c.focus();
    }, el: i }), (c, m) => c.icon || c.kbd ? (e(), l("div", Dr, [
      c.icon ? (e(), H(B, {
        key: 0,
        name: c.icon
      }, null, 8, ["name"])) : h("", !0),
      ee(o("input", ye(c.$attrs, {
        ref_key: "el",
        ref: i,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => n.value = p),
        class: "at-input",
        style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
        type: c.type,
        placeholder: c.placeholder,
        disabled: c.disabled,
        "aria-invalid": c.invalid || void 0
      }), null, 16, Or), [
        [Ct, n.value]
      ]),
      c.kbd ? (e(), H(Ve, { key: 1 }, {
        default: D(() => [
          y(v(c.kbd), 1)
        ]),
        _: 1
      })) : h("", !0)
    ])) : ee((e(), l("input", ye({ key: 1 }, c.$attrs, {
      ref_key: "el",
      ref: i,
      "onUpdate:modelValue": m[1] || (m[1] = (p) => n.value = p),
      class: "at-input",
      style: t.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0,
      type: c.type,
      placeholder: c.placeholder,
      disabled: c.disabled,
      "aria-invalid": c.invalid || void 0
    }), null, 16, Br)), [
      [Ct, n.value]
    ]);
  }
}), At = {
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
}, Qr = "M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z", Lt = {
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
function Vu(r) {
  Object.assign(Lt, r);
}
const Tu = {
  width: 51.99,
  capHeight: 12.22,
  d: "M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z"
}, Er = ["role", "aria-label", "aria-hidden"], Ur = ["viewBox", "width", "height"], Fr = ["d"], Pr = ["stroke-width", "innerHTML"], Hr = {
  key: 0,
  class: "at-logo__name"
}, Ir = /* @__PURE__ */ R({
  __name: "AtLogo",
  props: {
    app: { default: "atelier" },
    size: { default: 20 },
    wordmark: { type: Boolean, default: !1 },
    name: {},
    label: {}
  },
  setup(r) {
    const a = r, n = z(() => Lt[a.app] ?? Lt.atelier), t = z(() => a.name ?? n.value.name), i = z(() => Math.max(16, a.size)), c = z(() => ({
      "--at-logo-size": i.value + "px",
      "--at-logo-fill": `var(--${n.value.color})`
    }));
    return (m, p) => (e(), l("span", {
      class: q(["at-logo", m.wordmark && "at-logo--wordmark"]),
      style: ce(c.value),
      role: !m.wordmark && m.label ? "img" : void 0,
      "aria-label": m.wordmark ? void 0 : m.label,
      "aria-hidden": !m.wordmark && !m.label ? "true" : void 0
    }, [
      (e(), l("svg", {
        class: "at-logo__mark",
        viewBox: `0 0 ${C(At).size} ${C(At).size}`,
        width: i.value,
        height: i.value,
        "aria-hidden": "true",
        focusable: "false"
      }, [
        o("path", {
          class: "at-logo__tile",
          d: C(Qr)
        }, null, 8, Fr),
        o("g", {
          class: "at-logo__glyph",
          "stroke-width": C(At).stroke,
          innerHTML: n.value.glyph
        }, null, 8, Pr)
      ], 8, Ur)),
      m.wordmark ? (e(), l("span", Hr, v(t.value), 1)) : h("", !0)
    ], 14, Er));
  }
}), xr = { class: "at-login__panel" }, Nr = {
  key: 0,
  class: "at-login__brand"
}, qr = {
  class: "at-workspace__mark",
  "aria-hidden": "true"
}, Rr = ["aria-labelledby"], Kr = { class: "at-login__head" }, jr = ["id"], Wr = {
  key: 0,
  class: "at-login__desc"
}, Gr = {
  key: 0,
  class: "at-login__error",
  role: "alert"
}, Yr = /* @__PURE__ */ o("div", {
  class: "at-login__or",
  role: "separator"
}, [
  /* @__PURE__ */ o("span", null, "ou")
], -1), Jr = {
  key: 1,
  class: "at-login__foot"
}, Zr = /* @__PURE__ */ R({
  __name: "AtLogin",
  props: /* @__PURE__ */ re({
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
  emits: /* @__PURE__ */ re(["submit", "passkey"], ["update:username", "update:password", "update:remember"]),
  setup(r, { expose: a, emit: n }) {
    const t = ie(r, "username"), i = ie(r, "password"), c = ie(r, "remember"), m = r, p = n, g = pt("login"), S = z(() => m.loading !== !1), $ = z(() => {
      var A;
      return (m.mark ?? ((A = m.brand) == null ? void 0 : A.trim().charAt(0)) ?? "").toUpperCase();
    }), L = F(), U = F();
    function I() {
      var A, x;
      if (!S.value) {
        if (!t.value.trim()) return (A = L.value) == null ? void 0 : A.focus();
        if (!i.value) return (x = U.value) == null ? void 0 : x.focus();
        p("submit", { username: t.value.trim(), password: i.value, remember: c.value });
      }
    }
    return a({
      focusUsername: () => {
        var A;
        return (A = L.value) == null ? void 0 : A.focus();
      },
      focusPassword: () => {
        var A;
        return (A = U.value) == null ? void 0 : A.focus();
      }
    }), (A, x) => (e(), H(Xt(A.as), { class: "at-login" }, {
      default: D(() => [
        o("div", xr, [
          A.brand || A.$slots.brand ? (e(), l("div", Nr, [
            P(A.$slots, "brand", {}, () => [
              o("span", qr, v($.value), 1),
              y(v(A.brand), 1)
            ])
          ])) : h("", !0),
          o("section", {
            class: "at-login__card",
            "aria-labelledby": C(g)
          }, [
            o("header", Kr, [
              o("h1", {
                id: C(g),
                class: "at-login__title"
              }, v(A.title), 9, jr),
              A.description ? (e(), l("p", Wr, v(A.description), 1)) : h("", !0)
            ]),
            A.error ? (e(), l("p", Gr, v(A.error), 1)) : h("", !0),
            P(A.$slots, "default", {}, () => [
              o("form", {
                class: "at-login__form",
                novalidate: "",
                onSubmit: se(I, ["prevent"])
              }, [
                f(Tt, { label: A.usernameLabel }, {
                  default: D((J) => [
                    f(zt, {
                      id: J.id,
                      ref_key: "usernameInput",
                      ref: L,
                      modelValue: t.value,
                      "onUpdate:modelValue": x[0] || (x[0] = (te) => t.value = te),
                      name: "username",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: "false",
                      disabled: S.value,
                      invalid: !!A.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(Tt, { label: A.passwordLabel }, {
                  default: D((J) => [
                    f(zt, {
                      id: J.id,
                      ref_key: "passwordInput",
                      ref: U,
                      modelValue: i.value,
                      "onUpdate:modelValue": x[1] || (x[1] = (te) => i.value = te),
                      type: "password",
                      name: "password",
                      autocomplete: "current-password",
                      disabled: S.value,
                      invalid: !!A.error
                    }, null, 8, ["id", "modelValue", "disabled", "invalid"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                A.rememberable ? (e(), H(aa, {
                  key: 0,
                  modelValue: c.value,
                  "onUpdate:modelValue": x[2] || (x[2] = (J) => c.value = J),
                  label: A.rememberLabel,
                  disabled: S.value
                }, null, 8, ["modelValue", "label", "disabled"])) : h("", !0),
                f(j, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "at-login__submit",
                  loading: A.loading === !0 || A.loading === "password",
                  disabled: S.value
                }, {
                  default: D(() => [
                    y(v(A.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 32),
              A.passkey ? (e(), l(w, { key: 0 }, [
                Yr,
                f(j, {
                  size: "lg",
                  icon: "key",
                  class: "at-login__submit",
                  loading: A.loading === "passkey",
                  disabled: S.value,
                  onClick: x[3] || (x[3] = (J) => p("passkey"))
                }, {
                  default: D(() => [
                    y(v(A.passkeyLabel), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64)) : h("", !0)
            ])
          ], 8, Rr),
          A.$slots.footer ? (e(), l("footer", Jr, [
            P(A.$slots, "footer")
          ])) : h("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), Xr = ["role", "aria-checked", "disabled"], ei = {
  key: 2,
  class: "at-menu-meta"
}, Fe = /* @__PURE__ */ R({
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
  setup(r) {
    return (a, n) => (e(), l("button", {
      type: "button",
      class: q(["at-menu-item", a.danger && "at-menu-item--danger"]),
      role: a.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
      "aria-checked": a.checked !== void 0 ? a.checked : void 0,
      disabled: a.disabled,
      onClick: n[0] || (n[0] = (t) => a.$emit("select", t))
    }, [
      a.icon ? (e(), H(B, {
        key: 0,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      P(a.$slots, "default", {}, () => [
        y(v(a.label), 1)
      ]),
      a.kbd ? (e(), H(Ve, { key: 1 }, {
        default: D(() => [
          y(v(a.kbd), 1)
        ]),
        _: 1
      })) : a.meta ? (e(), l("span", ei, v(a.meta), 1)) : a.checked ? (e(), H(B, {
        key: 3,
        name: "check",
        class: "at-menu-check"
      })) : h("", !0)
    ], 10, Xr));
  }
}), ti = {}, ai = { class: "at-menu-label" };
function li(r, a) {
  return e(), l("div", ai, [
    P(r.$slots, "default")
  ]);
}
const Dt = /* @__PURE__ */ ct(ti, [["render", li]]), ni = {}, si = {
  class: "at-menu-sep",
  role: "separator"
};
function oi(r, a) {
  return e(), l("div", si);
}
const ot = /* @__PURE__ */ ct(ni, [["render", oi]]), ri = {
  key: 0,
  class: "at-modal-wrap"
}, ii = ["aria-label"], ui = { class: "at-modal__head" }, di = { style: { flex: "1", "min-width": "0" } }, ci = { class: "at-modal__title" }, pi = {
  key: 0,
  class: "at-modal__desc"
}, vi = { class: "at-modal__body" }, mi = {
  key: 0,
  class: "at-modal__foot"
}, hi = /* @__PURE__ */ R({
  __name: "AtModal",
  props: /* @__PURE__ */ re({
    title: {},
    description: {},
    size: { default: "md" },
    dismissible: { type: Boolean, default: !0 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(r) {
    const a = ie(r, "open"), n = F();
    let t = null;
    function i(c) {
      c.key === "Escape" && !document.querySelector(".at-pop") && (a.value = !1);
    }
    return Ce(a, (c) => {
      var m;
      c ? (t = document.activeElement, document.addEventListener("keydown", i), Le(() => {
        var p;
        return (p = n.value) == null ? void 0 : p.focus();
      })) : (document.removeEventListener("keydown", i), (m = t == null ? void 0 : t.focus) == null || m.call(t));
    }, { immediate: !0 }), dt(() => document.removeEventListener("keydown", i)), (c, m) => (e(), H(Ot, { to: "body" }, [
      f(ea, { name: "at-modal" }, {
        default: D(() => [
          a.value ? (e(), l("div", ri, [
            o("div", {
              class: "at-overlay",
              style: { position: "fixed" },
              onClick: m[0] || (m[0] = (p) => c.dismissible && (a.value = !1))
            }),
            o("div", {
              ref_key: "panel",
              ref: n,
              class: q(["at-modal", c.size !== "md" && `at-modal--${c.size}`]),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.title,
              tabindex: "-1"
            }, [
              o("header", ui, [
                o("div", di, [
                  o("h2", ci, v(c.title), 1),
                  c.description ? (e(), l("p", pi, v(c.description), 1)) : h("", !0)
                ]),
                c.dismissible ? (e(), H(j, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  icon: "x",
                  "icon-only": "",
                  label: "Fermer",
                  onClick: m[1] || (m[1] = (p) => a.value = !1)
                })) : h("", !0)
              ]),
              o("div", vi, [
                P(c.$slots, "default")
              ]),
              c.$slots.footer ? (e(), l("footer", mi, [
                P(c.$slots, "footer", {
                  close: () => a.value = !1
                })
              ])) : h("", !0)
            ], 10, ii)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), fi = ["aria-label"], gi = {
  key: 0,
  class: "at-nav-label"
}, yi = /* @__PURE__ */ R({
  __name: "AtNavGroup",
  props: {
    label: {}
  },
  setup(r) {
    return (a, n) => (e(), l("nav", {
      class: "at-nav",
      "aria-label": a.label
    }, [
      a.label ? (e(), l("div", gi, v(a.label), 1)) : h("", !0),
      P(a.$slots, "default")
    ], 8, fi));
  }
}), bi = ["href", "aria-current"], ki = { class: "at-ellipsis" }, _i = {
  key: 3,
  class: "at-nav-count"
}, $i = /* @__PURE__ */ R({
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
  setup(r) {
    return (a, n) => (e(), l("a", {
      class: "at-nav-item",
      href: a.href ?? "#",
      "aria-current": a.active ? "page" : void 0,
      onClick: n[0] || (n[0] = (t) => {
        !a.href && t.preventDefault(), a.$emit("click", t);
      })
    }, [
      a.mark ? (e(), l("span", {
        key: 0,
        class: "at-nav-mark",
        style: ce({ background: a.mark })
      }, null, 4)) : a.icon && a.tile ? (e(), H(ia, {
        key: 1,
        name: a.icon,
        color: a.tile
      }, null, 8, ["name", "color"])) : a.icon ? (e(), H(B, {
        key: 2,
        name: a.icon
      }, null, 8, ["name"])) : h("", !0),
      o("span", ki, [
        P(a.$slots, "default", {}, () => [
          y(v(a.label), 1)
        ])
      ]),
      a.count != null && a.count !== "" ? (e(), l("span", _i, v(a.count), 1)) : h("", !0)
    ], 8, bi));
  }
}), wi = {
  key: 0,
  class: "at-page__head"
}, Mi = { class: "t-heading-1" }, Ai = { key: 0 }, Ci = /* @__PURE__ */ R({
  __name: "AtPage",
  props: {
    title: {},
    description: {},
    wide: { type: Boolean }
  },
  setup(r) {
    return (a, n) => (e(), l("div", {
      class: q(["at-page", a.wide && "at-page--wide"])
    }, [
      a.title || a.$slots.head ? (e(), l("div", wi, [
        P(a.$slots, "head", {}, () => [
          o("h1", Mi, v(a.title), 1),
          a.description ? (e(), l("p", Ai, v(a.description), 1)) : h("", !0)
        ])
      ])) : h("", !0),
      P(a.$slots, "default")
    ], 2));
  }
}), Si = { class: "at-proplist" }, Vi = ["disabled", "onClick"], Ti = /* @__PURE__ */ R({
  __name: "AtPropertyList",
  props: {
    schema: {},
    row: {},
    exclude: {}
  },
  emits: ["update", "createOption", "updateOption", "deleteOption"],
  setup(r, { emit: a }) {
    const n = r, t = a, i = z(() => n.schema.filter((S) => {
      var $;
      return S.type !== "title" && !(($ = n.exclude) != null && $.includes(S.key));
    })), c = F(null), m = F(null), p = F(!1);
    function g(S, $) {
      if (Ge($)) {
        if ($.type === "checkbox") {
          t("update", $.key, !n.row[$.key]);
          return;
        }
        m.value = S.currentTarget, c.value = $, p.value = !0;
      }
    }
    return (S, $) => (e(), l(w, null, [
      o("dl", Si, [
        (e(!0), l(w, null, E(i.value, (L) => (e(), l(w, {
          key: L.key
        }, [
          o("dt", null, [
            f(B, {
              name: C(st)(L)
            }, null, 8, ["name"]),
            y(v(L.name), 1)
          ]),
          o("dd", null, [
            o("button", {
              type: "button",
              class: "at-proplist__value",
              disabled: !C(Ge)(L),
              onClick: (U) => g(U, L)
            }, [
              f(we, {
                prop: L,
                row: S.row
              }, null, 8, ["prop", "row"])
            ], 8, Vi)
          ])
        ], 64))), 128))
      ]),
      f(Qt, {
        open: p.value,
        "onUpdate:open": $[0] || ($[0] = (L) => p.value = L),
        prop: c.value,
        row: S.row,
        anchor: m.value,
        onUpdate: $[1] || ($[1] = (L) => c.value && t("update", c.value.key, L)),
        onCreateOption: $[2] || ($[2] = (L) => c.value && t("createOption", c.value.key, L)),
        onUpdateOption: $[3] || ($[3] = (L, U) => c.value && t("updateOption", c.value.key, L, U)),
        onDeleteOption: $[4] || ($[4] = (L) => c.value && t("deleteOption", c.value.key, L))
      }, null, 8, ["open", "prop", "row", "anchor"])
    ], 64));
  }
}), zi = ["aria-label"], Li = ["aria-pressed", "aria-label", "title", "disabled", "onClick"], Di = /* @__PURE__ */ R({
  __name: "AtSegment",
  props: /* @__PURE__ */ re({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const a = ie(r, "modelValue");
    return (n, t) => (e(), l("div", {
      class: "at-segment",
      role: "group",
      "aria-label": n.label
    }, [
      (e(!0), l(w, null, E(n.items, (i) => (e(), l("button", {
        key: String(i.value),
        type: "button",
        "aria-pressed": a.value === i.value,
        "aria-label": i.iconOnly ? i.label : void 0,
        title: i.iconOnly ? i.label : void 0,
        disabled: i.disabled,
        onClick: (c) => a.value = i.value
      }, [
        i.icon ? (e(), H(B, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : h("", !0),
        i.iconOnly ? h("", !0) : (e(), l(w, { key: 1 }, [
          y(v(i.label), 1)
        ], 64))
      ], 8, Li))), 128))
    ], 8, zi));
  }
}), Oi = { class: "at-select" }, Bi = ["disabled", "aria-invalid"], Qi = {
  key: 0,
  value: null,
  disabled: ""
}, Ei = ["value", "disabled"], Ui = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "AtSelect",
  props: /* @__PURE__ */ re({
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
  setup(r) {
    const a = ie(r, "modelValue");
    return (n, t) => (e(), l("div", Oi, [
      ee(o("select", ye(n.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
        disabled: n.disabled,
        "aria-invalid": n.invalid || void 0,
        style: n.size === "sm" ? { height: "var(--h-sm)", fontSize: "13px" } : void 0
      }), [
        n.placeholder ? (e(), l("option", Qi, v(n.placeholder), 1)) : h("", !0),
        (e(!0), l(w, null, E(n.options, (i) => (e(), l("option", {
          key: String(i.value),
          value: i.value,
          disabled: i.disabled
        }, v(i.label), 9, Ei))), 128))
      ], 16, Bi), [
        [Ue, a.value]
      ]),
      f(B, { name: "chevron-down" })
    ]));
  }
}), Fi = {}, Pi = {
  class: "at-sidebar",
  "aria-label": "Navigation"
}, Hi = {
  key: 0,
  class: "at-sidebar__foot"
};
function Ii(r, a) {
  return e(), l("aside", Pi, [
    P(r.$slots, "header"),
    P(r.$slots, "default"),
    r.$slots.footer ? (e(), l("div", Hi, [
      P(r.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const xi = /* @__PURE__ */ ct(Fi, [["render", Ii]]), Ni = { class: "at-stat__label" }, qi = { class: "at-stat__row" }, Ri = { class: "at-stat__value" }, Ki = ["viewBox"], ji = ["d"], Wi = ["d"], Gi = ["cx", "cy"], Yi = {
  key: 1,
  class: "at-stat__foot"
}, Gt = 220, Ke = 32, Ji = /* @__PURE__ */ R({
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
  setup(r) {
    const a = r, n = z(() => {
      const t = a.spark;
      if (!t || t.length < 2) return null;
      const i = Math.min(...t), c = Math.max(...t), m = c - i || 1, p = t.map(($, L) => [2 + L * (Gt - 4) / (t.length - 1), Ke - 3 - ($ - i) / m * (Ke - 8)]), g = "M" + p.map(($) => $.map((L) => L.toFixed(1)).join(" ")).join(" L"), S = p[p.length - 1];
      return { line: g, area: `${g} L${S[0].toFixed(1)} ${Ke} L2 ${Ke} Z`, end: S };
    });
    return (t, i) => (e(), l("div", {
      class: q(["at-stat", t.color && ["at-stat--striped", `at-tone-${t.color}`]])
    }, [
      o("span", Ni, v(t.label), 1),
      o("div", qi, [
        o("span", Ri, [
          P(t.$slots, "value", {}, () => [
            y(v(t.value), 1)
          ])
        ]),
        t.delta ? (e(), l("span", {
          key: 0,
          class: q(["at-stat__delta", t.trend && `at-stat__delta--${t.trend}`])
        }, v(t.delta), 3)) : h("", !0)
      ]),
      n.value ? (e(), l("svg", {
        key: 0,
        class: "at-stat__spark",
        viewBox: `0 0 ${Gt} ${Ke}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, [
        o("path", {
          class: "area",
          d: n.value.area
        }, null, 8, ji),
        o("path", {
          class: "line",
          d: n.value.line,
          "vector-effect": "non-scaling-stroke"
        }, null, 8, Wi),
        o("circle", {
          class: "end",
          cx: n.value.end[0],
          cy: n.value.end[1],
          r: "2.5"
        }, null, 8, Gi)
      ], 8, Ki)) : h("", !0),
      t.foot || t.$slots.foot ? (e(), l("span", Yi, [
        P(t.$slots, "foot", {}, () => [
          y(v(t.foot), 1)
        ])
      ])) : h("", !0)
    ], 2));
  }
}), Zi = {
  key: 0,
  class: "at-toggle"
}, Xi = ["disabled"], eu = ["disabled"], tu = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "AtSwitch",
  props: /* @__PURE__ */ re({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const a = ie(r, "modelValue");
    return (n, t) => n.label || n.$slots.default ? (e(), l("label", Zi, [
      ee(o("input", ye(n.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
        type: "checkbox",
        role: "switch",
        class: "at-switch",
        disabled: n.disabled
      }), null, 16, Xi), [
        [rt, a.value]
      ]),
      P(n.$slots, "default", {}, () => [
        y(v(n.label), 1)
      ])
    ])) : ee((e(), l("input", ye({ key: 1 }, n.$attrs, {
      "onUpdate:modelValue": t[1] || (t[1] = (i) => a.value = i),
      type: "checkbox",
      role: "switch",
      class: "at-switch",
      disabled: n.disabled
    }), null, 16, eu)), [
      [rt, a.value]
    ]);
  }
}), au = { class: "at-table-wrap" }, lu = { class: "at-table" }, nu = ["onClick"], su = { key: 0 }, ou = ["colspan"], ru = /* @__PURE__ */ R({
  __name: "AtTable",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    empty: {}
  },
  emits: ["rowClick"],
  setup(r) {
    return (a, n) => (e(), l("div", au, [
      o("table", lu, [
        o("thead", null, [
          o("tr", null, [
            (e(!0), l(w, null, E(a.columns, (t) => (e(), l("th", {
              key: t.key,
              class: q({ "at-num": t.align === "right" }),
              style: ce(t.width ? { width: t.width } : void 0)
            }, v(t.label), 7))), 128))
          ])
        ]),
        o("tbody", null, [
          (e(!0), l(w, null, E(a.rows, (t, i) => (e(), l("tr", {
            key: a.rowKey ? t[a.rowKey] : i,
            style: ce(a.$attrs.onRowClick ? { cursor: "pointer" } : void 0),
            onClick: (c) => a.$emit("rowClick", t)
          }, [
            (e(!0), l(w, null, E(a.columns, (c) => (e(), l("td", {
              key: c.key,
              class: q({ "at-num": c.align === "right" })
            }, [
              P(a.$slots, `cell-${c.key}`, {
                row: t,
                value: t[c.key]
              }, () => [
                y(v(c.format ? c.format(t[c.key], t) : t[c.key]), 1)
              ])
            ], 2))), 128))
          ], 12, nu))), 128)),
          a.rows.length ? h("", !0) : (e(), l("tr", su, [
            o("td", {
              colspan: a.columns.length,
              class: "at-muted",
              style: { "text-align": "center" }
            }, v(a.empty ?? "Aucune donnée"), 9, ou)
          ]))
        ])
      ])
    ]));
  }
}), iu = ["aria-label"], uu = ["aria-selected", "disabled", "onClick"], du = {
  key: 1,
  class: "at-count"
}, cu = /* @__PURE__ */ R({
  __name: "AtTabs",
  props: /* @__PURE__ */ re({
    items: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const a = ie(r, "modelValue");
    return (n, t) => (e(), l("div", {
      class: "at-tabs",
      role: "tablist",
      "aria-label": n.label
    }, [
      (e(!0), l(w, null, E(n.items, (i) => (e(), l("button", {
        key: String(i.value),
        class: "at-tab",
        role: "tab",
        type: "button",
        "aria-selected": a.value === i.value,
        disabled: i.disabled,
        onClick: (c) => a.value = i.value
      }, [
        i.icon ? (e(), H(B, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : h("", !0),
        y(v(i.label) + " ", 1),
        i.count != null ? (e(), l("span", du, v(i.count), 1)) : h("", !0)
      ], 8, uu))), 128))
    ], 8, iu));
  }
}), pu = /* @__PURE__ */ R({
  __name: "AtTag",
  props: {
    color: { default: "gray" },
    label: {}
  },
  setup(r) {
    return (a, n) => (e(), l("span", {
      class: q(["at-tag", a.color !== "gray" && `at-tag--${a.color}`])
    }, [
      P(a.$slots, "default", {}, () => [
        y(v(a.label), 1)
      ])
    ], 2));
  }
}), vu = ["rows", "placeholder", "disabled", "aria-invalid"], mu = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "AtTextarea",
  props: /* @__PURE__ */ re({
    placeholder: {},
    rows: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const a = ie(r, "modelValue");
    return (n, t) => ee((e(), l("textarea", ye(n.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
      class: "at-input",
      rows: n.rows ?? 3,
      placeholder: n.placeholder,
      disabled: n.disabled,
      "aria-invalid": n.invalid || void 0
    }), null, 16, vu)), [
      [Me, a.value]
    ]);
  }
}), ua = "atelier:theme", da = "atelier:density", ca = (r) => {
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}, Yt = (r, a) => {
  try {
    localStorage.setItem(r, a);
  } catch {
  }
}, Jt = () => typeof document < "u" ? document.documentElement : null, je = F(ca(ua) || "system"), pa = F(ca(da) || "comfortable"), va = F(typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches);
let Zt = !1;
function ma() {
  if (Zt || typeof window > "u") return;
  Zt = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (a) => {
    va.value = a.matches;
  }), Ce(je, (a) => {
    const n = Jt();
    n && (a === "system" ? n.removeAttribute("data-theme") : n.dataset.theme = a, Yt(ua, a));
  }, { immediate: !0 }), Ce(pa, (a) => {
    const n = Jt();
    n && (n.dataset.density = a, Yt(da, a));
  }, { immediate: !0 });
}
function hu() {
  ma();
  const r = z(() => je.value === "system" ? va.value ? "dark" : "light" : je.value), a = () => {
    je.value = r.value === "dark" ? "light" : "dark";
  };
  return Ea() && Ua(() => {
  }), { mode: je, resolved: r, toggle: a };
}
function fu() {
  return ma(), { density: pa };
}
const gu = ["aria-expanded", "aria-label", "onClick"], yu = { class: "at-user__text" }, bu = { class: "at-user__name" }, ku = {
  key: 0,
  class: "at-user__sub"
}, _u = /* @__PURE__ */ R({
  __name: "AtUserMenu",
  props: {
    name: {},
    email: {},
    src: {},
    theme: { type: Boolean, default: !0 },
    density: { type: Boolean, default: !0 }
  },
  emits: ["profile", "settings", "logout"],
  setup(r) {
    var p;
    const a = ((p = Fa()) == null ? void 0 : p.vnode.props) ?? {}, n = (g) => typeof a[g] == "function" || Array.isArray(a[g]), { mode: t } = hu(), { density: i } = fu(), c = [
      { value: "system", label: "Système", icon: "monitor" },
      { value: "light", label: "Clair", icon: "sun" },
      { value: "dark", label: "Sombre", icon: "moon" }
    ], m = [
      { value: "comfortable", label: "Confortable", icon: "list" },
      { value: "compact", label: "Compacte", icon: "menu" }
    ];
    return (g, S) => (e(), H(ra, {
      placement: "right",
      "min-width": 232
    }, {
      trigger: D(({ toggle: $, open: L }) => [
        o("button", {
          type: "button",
          class: "at-user",
          "aria-haspopup": "menu",
          "aria-expanded": L,
          "aria-label": `Compte de ${g.name}`,
          onClick: $
        }, [
          f(Pe, {
            name: g.name,
            src: g.src,
            size: "md",
            tone: "accent"
          }, null, 8, ["name", "src"]),
          o("span", yu, [
            o("span", bu, v(g.name), 1),
            g.email ? (e(), l("span", ku, v(g.email), 1)) : h("", !0)
          ]),
          f(B, { name: "chevron-right" })
        ], 8, gu)
      ]),
      default: D(() => [
        n("onProfile") || n("onSettings") || g.$slots.default ? (e(), l(w, { key: 0 }, [
          n("onProfile") ? (e(), H(Fe, {
            key: 0,
            icon: "person",
            onSelect: S[0] || (S[0] = ($) => g.$emit("profile"))
          }, {
            default: D(() => [
              y("Mon profil")
            ]),
            _: 1
          })) : h("", !0),
          n("onSettings") ? (e(), H(Fe, {
            key: 1,
            icon: "settings",
            onSelect: S[1] || (S[1] = ($) => g.$emit("settings"))
          }, {
            default: D(() => [
              y("Paramètres")
            ]),
            _: 1
          })) : h("", !0),
          P(g.$slots, "default"),
          g.theme || g.density || n("onLogout") ? (e(), H(ot, { key: 2 })) : h("", !0)
        ], 64)) : h("", !0),
        g.theme ? (e(), l(w, { key: 1 }, [
          f(Dt, null, {
            default: D(() => [
              y("Thème")
            ]),
            _: 1
          }),
          (e(), l(w, null, E(c, ($) => f(Fe, {
            key: $.value,
            icon: $.icon,
            checked: C(t) === $.value,
            onSelect: (L) => t.value = $.value
          }, {
            default: D(() => [
              y(v($.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        g.theme && g.density ? (e(), H(ot, { key: 2 })) : h("", !0),
        g.density ? (e(), l(w, { key: 3 }, [
          f(Dt, null, {
            default: D(() => [
              y("Densité")
            ]),
            _: 1
          }),
          (e(), l(w, null, E(m, ($) => f(Fe, {
            key: $.value,
            icon: $.icon,
            checked: C(i) === $.value,
            onSelect: (L) => i.value = $.value
          }, {
            default: D(() => [
              y(v($.label), 1)
            ]),
            _: 2
          }, 1032, ["icon", "checked", "onSelect"])), 64))
        ], 64)) : h("", !0),
        n("onLogout") ? (e(), l(w, { key: 4 }, [
          g.theme || g.density ? (e(), H(ot, { key: 0 })) : h("", !0),
          f(Fe, {
            icon: "logout",
            onSelect: S[2] || (S[2] = ($) => g.$emit("logout"))
          }, {
            default: D(() => [
              y("Se déconnecter")
            ]),
            _: 1
          })
        ], 64)) : h("", !0)
      ]),
      _: 3
    }));
  }
}), zu = {
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
}, $u = (r) => `var(--${r})`, Lu = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map($u), wu = {
  AtAppShell: Ka,
  AtAvatar: Pe,
  AtBadge: Ga,
  AtBreadcrumbs: el,
  AtButton: j,
  AtCard: sl,
  AtCheckbox: aa,
  AtComments: nn,
  AtDataView: hr,
  AtDrawer: $r,
  AtDropdown: ra,
  AtEmpty: Cr,
  AtField: Tt,
  AtIcon: B,
  AtIconTile: ia,
  AtInput: zt,
  AtKbd: Ve,
  AtLogo: Ir,
  AtLogin: Zr,
  AtMenu: oa,
  AtMenuItem: Fe,
  AtMenuLabel: Dt,
  AtMenuSeparator: ot,
  AtModal: hi,
  AtNavGroup: yi,
  AtNavItem: $i,
  AtPage: Ci,
  AtPopover: $e,
  AtProgress: sa,
  AtPropertyEditor: Qt,
  AtPropertyList: Ti,
  AtPropertyValue: we,
  AtSegment: Di,
  AtSelect: Ui,
  AtSidebar: xi,
  AtStat: Ji,
  AtSwitch: tu,
  AtTable: ru,
  AtTabs: cu,
  AtTag: pu,
  AtTextarea: mu,
  AtUserMenu: _u
}, Du = {
  install(r) {
    for (const [a, n] of Object.entries(wu)) r.component(a, n);
  }
};
export {
  Ka as AtAppShell,
  Pe as AtAvatar,
  Ga as AtBadge,
  el as AtBreadcrumbs,
  j as AtButton,
  sl as AtCard,
  aa as AtCheckbox,
  nn as AtComments,
  hr as AtDataView,
  $r as AtDrawer,
  ra as AtDropdown,
  Cr as AtEmpty,
  Tt as AtField,
  B as AtIcon,
  ia as AtIconTile,
  zt as AtInput,
  Ve as AtKbd,
  Zr as AtLogin,
  Ir as AtLogo,
  oa as AtMenu,
  Fe as AtMenuItem,
  Dt as AtMenuLabel,
  ot as AtMenuSeparator,
  hi as AtModal,
  yi as AtNavGroup,
  $i as AtNavItem,
  Ci as AtPage,
  $e as AtPopover,
  sa as AtProgress,
  Qt as AtPropertyEditor,
  Ti as AtPropertyList,
  we as AtPropertyValue,
  Di as AtSegment,
  Ui as AtSelect,
  xi as AtSidebar,
  Ji as AtStat,
  tu as AtSwitch,
  ru as AtTable,
  cu as AtTabs,
  pu as AtTag,
  mu as AtTextarea,
  _u as AtUserMenu,
  Du as Atelier,
  nt as LAYOUTS,
  Qr as LOGO_TILE,
  it as NONE,
  wt as OPS,
  Rt as OP_LABEL,
  Mt as TAG_ROTATION,
  Tu as WORDMARK,
  gl as addDays,
  $l as applyView,
  At as brandGrid,
  zl as canCreate,
  Lu as chartColors,
  _l as compareRows,
  jt as createView,
  $u as cssVar,
  Du as default,
  Al as defaultsFromFilters,
  Cu as filter,
  ut as findOption,
  Vt as formatDate,
  Vl as formatMonth,
  ml as formatRelative,
  me as getValue,
  wl as groupRows,
  ta as icons,
  be as isEmpty,
  Lt as logoApps,
  Tl as matchOptions,
  kl as matchRule,
  fl as mentionAt,
  Ml as monthGrid,
  Ll as nextTagColor,
  Ae as normalize,
  Ie as optionsOf,
  Au as registerIcons,
  Vu as registerLogoApps,
  Kt as shiftMonth,
  Su as sort,
  He as splitMatch,
  hl as splitMentions,
  We as today,
  zu as tokens,
  ze as uid,
  fu as useDensity,
  pt as useId,
  hu as useTheme
};
//# sourceMappingURL=atelier.js.map

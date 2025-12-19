// virtual:https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4
(() => {
  function e(e2) {
    let t2 = [0];
    for (let r2 = 0; r2 < e2.length; r2++)
      10 === e2.charCodeAt(r2) && t2.push(r2 + 1);
    return { find: function(e3) {
      let r2 = 0, n2 = t2.length;
      for (; n2 > 0; ) {
        let o2 = n2 >> 1, a2 = r2 + o2;
        t2[a2] <= e3 ? (r2 = a2 + 1, n2 = n2 - o2 - 1) : n2 = o2;
      }
      return r2 -= 1, { line: r2 + 1, column: e3 - t2[r2] };
    }, findOffset: function({ line: e3, column: r2 }) {
      e3 -= 1, e3 = Math.min(Math.max(e3, 0), t2.length - 1);
      let n2 = t2[e3], o2 = t2[e3 + 1] ?? n2;
      return Math.min(Math.max(n2 + r2, 0), o2);
    } };
  }
  var t = 10, r = class t2 extends Error {
    loc;
    constructor(r2, n2) {
      if (n2) {
        let t3 = n2[0], o2 = e(t3.code).find(n2[1]);
        r2 = `${t3.file}:${o2.line}:${o2.column + 1}: ${r2}`;
      }
      super(r2), this.name = "CssSyntaxError", this.loc = n2, Error.captureStackTrace && Error.captureStackTrace(this, t2);
    }
  };
  function n(e2, n2) {
    let l2 = n2?.from ? { file: n2.from, code: e2 } : null;
    "\uFEFF" === e2[0] && (e2 = " " + e2.slice(1));
    let s2, c2 = [], u2 = [], d2 = [], f2 = null, p2 = null, h2 = "", m2 = "", g2 = 0;
    for (let n3 = 0; n3 < e2.length; n3++) {
      let v2 = e2.charCodeAt(n3);
      if (13 !== v2 || (s2 = e2.charCodeAt(n3 + 1), s2 !== t))
        if (92 === v2)
          "" === h2 && (g2 = n3), h2 += e2.slice(n3, n3 + 2), n3 += 1;
        else if (47 === v2 && 42 === e2.charCodeAt(n3 + 1)) {
          let t2 = n3;
          for (let t3 = n3 + 2; t3 < e2.length; t3++)
            if (s2 = e2.charCodeAt(t3), 92 === s2)
              t3 += 1;
            else if (42 === s2 && 47 === e2.charCodeAt(t3 + 1)) {
              n3 = t3 + 1;
              break;
            }
          let r2 = e2.slice(t2, n3 + 1);
          if (33 === r2.charCodeAt(2)) {
            let e3 = j(r2.slice(2, -2));
            u2.push(e3), l2 && (e3.src = [l2, t2, n3 + 1], e3.dst = [l2, t2, n3 + 1]);
          }
        } else if (39 === v2 || 34 === v2) {
          let t2 = i(e2, n3, v2, l2);
          h2 += e2.slice(n3, t2 + 1), n3 = t2;
        } else {
          if ((32 === v2 || v2 === t || 9 === v2) && (s2 = e2.charCodeAt(n3 + 1)) && (32 === s2 || s2 === t || 9 === s2 || 13 === s2 && (s2 = e2.charCodeAt(n3 + 2)) && s2 == t))
            continue;
          if (v2 === t) {
            if (0 === h2.length)
              continue;
            s2 = h2.charCodeAt(h2.length - 1), 32 !== s2 && s2 !== t && 9 !== s2 && (h2 += " ");
          } else if (45 === v2 && 45 === e2.charCodeAt(n3 + 1) && 0 === h2.length) {
            let t2 = "", o2 = n3, u3 = -1;
            for (let r2 = n3 + 2; r2 < e2.length; r2++)
              if (s2 = e2.charCodeAt(r2), 92 === s2)
                r2 += 1;
              else if (39 === s2 || 34 === s2)
                r2 = i(e2, r2, s2, l2);
              else if (47 === s2 && 42 === e2.charCodeAt(r2 + 1)) {
                for (let t3 = r2 + 2; t3 < e2.length; t3++)
                  if (s2 = e2.charCodeAt(t3), 92 === s2)
                    t3 += 1;
                  else if (42 === s2 && 47 === e2.charCodeAt(t3 + 1)) {
                    r2 = t3 + 1;
                    break;
                  }
              } else if (-1 === u3 && 58 === s2)
                u3 = h2.length + r2 - o2;
              else {
                if (59 === s2 && 0 === t2.length) {
                  h2 += e2.slice(o2, r2), n3 = r2;
                  break;
                }
                if (40 === s2)
                  t2 += ")";
                else if (91 === s2)
                  t2 += "]";
                else if (123 === s2)
                  t2 += "}";
                else {
                  if ((125 === s2 || e2.length - 1 === r2) && 0 === t2.length) {
                    n3 = r2 - 1, h2 += e2.slice(o2, r2);
                    break;
                  }
                  (41 === s2 || 93 === s2 || 125 === s2) && t2.length > 0 && e2[r2] === t2[t2.length - 1] && (t2 = t2.slice(0, -1));
                }
              }
            let d3 = a(h2, u3);
            if (!d3)
              throw new r("Invalid custom property, expected a value", l2 ? [l2, o2, n3] : null);
            l2 && (d3.src = [l2, o2, n3], d3.dst = [l2, o2, n3]), f2 ? f2.nodes.push(d3) : c2.push(d3), h2 = "";
          } else if (59 === v2 && 64 === h2.charCodeAt(0))
            p2 = o(h2), l2 && (p2.src = [l2, g2, n3], p2.dst = [l2, g2, n3]), f2 ? f2.nodes.push(p2) : c2.push(p2), h2 = "", p2 = null;
          else if (59 === v2 && ")" !== m2[m2.length - 1]) {
            let e3 = a(h2);
            if (!e3) {
              if (0 === h2.length)
                continue;
              throw new r(`Invalid declaration: \`${h2.trim()}\``, l2 ? [l2, g2, n3] : null);
            }
            l2 && (e3.src = [l2, g2, n3], e3.dst = [l2, g2, n3]), f2 ? f2.nodes.push(e3) : c2.push(e3), h2 = "";
          } else if (123 === v2 && ")" !== m2[m2.length - 1])
            m2 += "}", p2 = C(h2.trim()), l2 && (p2.src = [l2, g2, n3], p2.dst = [l2, g2, n3]), f2 && f2.nodes.push(p2), d2.push(f2), f2 = p2, h2 = "", p2 = null;
          else if (125 === v2 && ")" !== m2[m2.length - 1]) {
            if ("" === m2)
              throw new r("Missing opening {", l2 ? [l2, n3, n3] : null);
            if (m2 = m2.slice(0, -1), h2.length > 0)
              if (64 === h2.charCodeAt(0))
                p2 = o(h2), l2 && (p2.src = [l2, g2, n3], p2.dst = [l2, g2, n3]), f2 ? f2.nodes.push(p2) : c2.push(p2), h2 = "", p2 = null;
              else {
                let e4 = h2.indexOf(":");
                if (f2) {
                  let t2 = a(h2, e4);
                  if (!t2)
                    throw new r(`Invalid declaration: \`${h2.trim()}\``, l2 ? [l2, g2, n3] : null);
                  l2 && (t2.src = [l2, g2, n3], t2.dst = [l2, g2, n3]), f2.nodes.push(t2);
                }
              }
            let e3 = d2.pop() ?? null;
            null === e3 && f2 && c2.push(f2), f2 = e3, h2 = "", p2 = null;
          } else if (40 === v2)
            m2 += ")", h2 += "(";
          else if (41 === v2) {
            if (")" !== m2[m2.length - 1])
              throw new r("Missing opening (", l2 ? [l2, n3, n3] : null);
            m2 = m2.slice(0, -1), h2 += ")";
          } else {
            if (0 === h2.length && (32 === v2 || v2 === t || 9 === v2))
              continue;
            "" === h2 && (g2 = n3), h2 += String.fromCharCode(v2);
          }
        }
    }
    if (64 === h2.charCodeAt(0)) {
      let t2 = o(h2);
      l2 && (t2.src = [l2, g2, e2.length], t2.dst = [l2, g2, e2.length]), c2.push(t2);
    }
    if (m2.length > 0 && f2) {
      if ("rule" === f2.kind)
        throw new r(`Missing closing } at ${f2.selector}`, f2.src ? [f2.src[0], f2.src[1], f2.src[1]] : null);
      if ("at-rule" === f2.kind)
        throw new r(`Missing closing } at ${f2.name} ${f2.params}`, f2.src ? [f2.src[0], f2.src[1], f2.src[1]] : null);
    }
    return u2.length > 0 ? u2.concat(c2) : c2;
  }
  function o(e2, t2 = []) {
    let r2 = e2, n2 = "";
    for (let t3 = 5; t3 < e2.length; t3++) {
      let o2 = e2.charCodeAt(t3);
      if (32 === o2 || 9 === o2 || 40 === o2) {
        r2 = e2.slice(0, t3), n2 = e2.slice(t3);
        break;
      }
    }
    return S(r2.trim(), n2.trim(), t2);
  }
  function a(e2, t2 = e2.indexOf(":")) {
    if (-1 === t2)
      return null;
    let r2 = e2.indexOf("!important", t2 + 1);
    return T(e2.slice(0, t2).trim(), e2.slice(t2 + 1, -1 === r2 ? e2.length : r2).trim(), -1 !== r2);
  }
  function i(e2, n2, o2, a2 = null) {
    let i2;
    for (let l2 = n2 + 1; l2 < e2.length; l2++)
      if (i2 = e2.charCodeAt(l2), 92 === i2)
        l2 += 1;
      else {
        if (i2 === o2)
          return l2;
        if (59 === i2 && (e2.charCodeAt(l2 + 1) === t || 13 === e2.charCodeAt(l2 + 1) && e2.charCodeAt(l2 + 2) === t))
          throw new r(`Unterminated string: ${e2.slice(n2, l2 + 1) + String.fromCharCode(o2)}`, a2 ? [a2, n2, l2 + 1] : null);
        if (i2 === t || 13 === i2 && e2.charCodeAt(l2 + 1) === t)
          throw new r(`Unterminated string: ${e2.slice(n2, l2) + String.fromCharCode(o2)}`, a2 ? [a2, n2, l2 + 1] : null);
      }
    return n2;
  }
  function l(e2) {
    if (0 === arguments.length)
      throw new TypeError("`CSS.escape` requires an argument.");
    let t2, r2 = String(e2), n2 = r2.length, o2 = -1, a2 = "", i2 = r2.charCodeAt(0);
    if (1 === n2 && 45 === i2)
      return "\\" + r2;
    for (; ++o2 < n2; )
      t2 = r2.charCodeAt(o2), a2 += 0 !== t2 ? t2 >= 1 && t2 <= 31 || 127 === t2 || 0 === o2 && t2 >= 48 && t2 <= 57 || 1 === o2 && t2 >= 48 && t2 <= 57 && 45 === i2 ? "\\" + t2.toString(16) + " " : t2 >= 128 || 45 === t2 || 95 === t2 || t2 >= 48 && t2 <= 57 || t2 >= 65 && t2 <= 90 || t2 >= 97 && t2 <= 122 ? r2.charAt(o2) : "\\" + r2.charAt(o2) : "\uFFFD";
    return a2;
  }
  function s(e2) {
    return e2.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e3) => e3.length > 2 ? String.fromCodePoint(Number.parseInt(e3.slice(1).trim(), 16)) : e3[1]);
  }
  var c = /* @__PURE__ */ new Map([["--font", ["--font-weight", "--font-size"]], ["--inset", ["--inset-shadow", "--inset-ring"]], ["--text", ["--text-color", "--text-decoration-color", "--text-decoration-thickness", "--text-indent", "--text-shadow", "--text-underline-offset"]], ["--grid-column", ["--grid-column-start", "--grid-column-end"]], ["--grid-row", ["--grid-row-start", "--grid-row-end"]]]);
  function u(e2, t2) {
    return (c.get(t2) ?? []).some((t3) => e2 === t3 || e2.startsWith(`${t3}-`));
  }
  var d = class {
    constructor(e2 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Set([])) {
      this.values = e2, this.keyframes = t2;
    }
    prefix = null;
    get size() {
      return this.values.size;
    }
    add(e2, t2, r2 = 0, n2) {
      if (e2.endsWith("-*")) {
        if ("initial" !== t2)
          throw new Error(`Invalid theme value \`${t2}\` for namespace \`${e2}\``);
        "--*" === e2 ? this.values.clear() : this.clearNamespace(e2.slice(0, -2), 0);
      }
      if (4 & r2) {
        let t3 = this.values.get(e2);
        if (t3 && !(4 & t3.options))
          return;
      }
      "initial" === t2 ? this.values.delete(e2) : this.values.set(e2, { value: t2, options: r2, src: n2 });
    }
    keysInNamespaces(e2) {
      let t2 = [];
      for (let r2 of e2) {
        let e3 = `${r2}-`;
        for (let n2 of this.values.keys())
          n2.startsWith(e3) && -1 === n2.indexOf("--", 2) && (u(n2, r2) || t2.push(n2.slice(e3.length)));
      }
      return t2;
    }
    get(e2) {
      for (let t2 of e2) {
        let e3 = this.values.get(t2);
        if (e3)
          return e3.value;
      }
      return null;
    }
    hasDefault(e2) {
      return !(4 & ~this.getOptions(e2));
    }
    getOptions(e2) {
      return e2 = s(this.#e(e2)), this.values.get(e2)?.options ?? 0;
    }
    entries() {
      return this.prefix ? Array.from(this.values, (e2) => (e2[0] = this.prefixKey(e2[0]), e2)) : this.values.entries();
    }
    prefixKey(e2) {
      return this.prefix ? `--${this.prefix}-${e2.slice(2)}` : e2;
    }
    #e(e2) {
      return this.prefix ? `--${e2.slice(3 + this.prefix.length)}` : e2;
    }
    clearNamespace(e2, t2) {
      let r2 = c.get(e2) ?? [];
      e:
        for (let n2 of this.values.keys())
          if (n2.startsWith(e2)) {
            if (0 !== t2 && (this.getOptions(n2) & t2) !== t2)
              continue;
            for (let e3 of r2)
              if (n2.startsWith(e3))
                continue e;
            this.values.delete(n2);
          }
    }
    #t(e2, t2) {
      for (let r2 of t2) {
        let t3 = null !== e2 ? `${r2}-${e2}` : r2;
        if (!this.values.has(t3)) {
          if (null === e2 || !e2.includes("."))
            continue;
          if (t3 = `${r2}-${e2.replaceAll(".", "_")}`, !this.values.has(t3))
            continue;
        }
        if (!u(t3, r2))
          return t3;
      }
      return null;
    }
    #r(e2) {
      let t2 = this.values.get(e2);
      if (!t2)
        return null;
      let r2 = null;
      return 2 & t2.options && (r2 = t2.value), `var(${l(this.prefixKey(e2))}${r2 ? `, ${r2}` : ""})`;
    }
    markUsedVariable(e2) {
      let t2 = s(this.#e(e2)), r2 = this.values.get(t2);
      if (!r2)
        return false;
      let n2 = 16 & r2.options;
      return r2.options |= 16, !n2;
    }
    resolve(e2, t2, r2 = 0) {
      let n2 = this.#t(e2, t2);
      if (!n2)
        return null;
      let o2 = this.values.get(n2);
      return 1 & (r2 | o2.options) ? o2.value : this.#r(n2);
    }
    resolveValue(e2, t2) {
      let r2 = this.#t(e2, t2);
      return r2 ? this.values.get(r2).value : null;
    }
    resolveWith(e2, t2, r2 = []) {
      let n2 = this.#t(e2, t2);
      if (!n2)
        return null;
      let o2 = {};
      for (let e3 of r2) {
        let t3 = `${n2}${e3}`, r3 = this.values.get(t3);
        r3 && (1 & r3.options ? o2[e3] = r3.value : o2[e3] = this.#r(t3));
      }
      let a2 = this.values.get(n2);
      return 1 & a2.options ? [a2.value, o2] : [this.#r(n2), o2];
    }
    namespace(e2) {
      let t2 = /* @__PURE__ */ new Map(), r2 = `${e2}-`;
      for (let [n2, o2] of this.values)
        n2 === e2 ? t2.set(null, o2.value) : n2.startsWith(`${r2}-`) ? t2.set(n2.slice(e2.length), o2.value) : n2.startsWith(r2) && t2.set(n2.slice(r2.length), o2.value);
      return t2;
    }
    addKeyframes(e2) {
      this.keyframes.add(e2);
    }
    getKeyframes() {
      return Array.from(this.keyframes);
    }
  }, f = class extends Map {
    constructor(e2) {
      super(), this.factory = e2;
    }
    get(e2) {
      let t2 = super.get(e2);
      return void 0 === t2 && (t2 = this.factory(e2, this), this.set(e2, t2)), t2;
    }
  };
  function p(e2) {
    return { kind: "word", value: e2 };
  }
  function h(e2, t2) {
    return { kind: "function", value: e2, nodes: t2 };
  }
  function m(e2) {
    return { kind: "separator", value: e2 };
  }
  function g(e2) {
    let t2 = "";
    for (let r2 of e2)
      switch (r2.kind) {
        case "word":
        case "separator":
          t2 += r2.value;
          break;
        case "function":
          t2 += r2.value + "(" + g(r2.nodes) + ")";
      }
    return t2;
  }
  function v(e2) {
    e2 = e2.replaceAll("\r\n", "\n");
    let t2, r2 = [], n2 = [], o2 = null, a2 = "";
    for (let i2 = 0; i2 < e2.length; i2++) {
      let l2 = e2.charCodeAt(i2);
      switch (l2) {
        case 92:
          a2 += e2[i2] + e2[i2 + 1], i2++;
          break;
        case 47: {
          if (a2.length > 0) {
            let e3 = p(a2);
            o2 ? o2.nodes.push(e3) : r2.push(e3), a2 = "";
          }
          let t3 = p(e2[i2]);
          o2 ? o2.nodes.push(t3) : r2.push(t3);
          break;
        }
        case 58:
        case 44:
        case 61:
        case 62:
        case 60:
        case 10:
        case 32:
        case 9: {
          if (a2.length > 0) {
            let e3 = p(a2);
            o2 ? o2.nodes.push(e3) : r2.push(e3), a2 = "";
          }
          let n3 = i2, l3 = i2 + 1;
          for (; l3 < e2.length && (t2 = e2.charCodeAt(l3), 58 === t2 || 44 === t2 || 61 === t2 || 62 === t2 || 60 === t2 || 10 === t2 || 32 === t2 || 9 === t2); l3++)
            ;
          i2 = l3 - 1;
          let s2 = m(e2.slice(n3, l3));
          o2 ? o2.nodes.push(s2) : r2.push(s2);
          break;
        }
        case 39:
        case 34: {
          let r3 = i2;
          for (let r4 = i2 + 1; r4 < e2.length; r4++)
            if (t2 = e2.charCodeAt(r4), 92 === t2)
              r4 += 1;
            else if (t2 === l2) {
              i2 = r4;
              break;
            }
          a2 += e2.slice(r3, i2 + 1);
          break;
        }
        case 40: {
          let e3 = h(a2, []);
          a2 = "", o2 ? o2.nodes.push(e3) : r2.push(e3), n2.push(e3), o2 = e3;
          break;
        }
        case 41: {
          let e3 = n2.pop();
          if (a2.length > 0) {
            let t3 = p(a2);
            e3?.nodes.push(t3), a2 = "";
          }
          o2 = n2.length > 0 ? n2[n2.length - 1] : null;
          break;
        }
        default:
          a2 += String.fromCharCode(l2);
      }
    }
    return a2.length > 0 && r2.push(p(a2)), r2;
  }
  var w, k = ((w = k || {})[w.Continue = 0] = "Continue", w[w.Skip = 1] = "Skip", w[w.Stop = 2] = "Stop", w[w.Replace = 3] = "Replace", w[w.ReplaceSkip = 4] = "ReplaceSkip", w[w.ReplaceStop = 5] = "ReplaceStop", w), b = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (e2) => ({ kind: 3, nodes: Array.isArray(e2) ? e2 : [e2] }), ReplaceSkip: (e2) => ({ kind: 4, nodes: Array.isArray(e2) ? e2 : [e2] }), ReplaceStop: (e2) => ({ kind: 5, nodes: Array.isArray(e2) ? e2 : [e2] }) };
  function y(e2, t2) {
    "function" == typeof t2 ? x(e2, t2) : x(e2, t2.enter, t2.exit);
  }
  function x(e2, t2 = () => b.Continue, r2 = () => b.Continue) {
    let n2 = [[e2, 0, null]], o2 = { parent: null, depth: 0, path() {
      let e3 = [];
      for (let t3 = 1; t3 < n2.length; t3++) {
        let r3 = n2[t3][2];
        r3 && e3.push(r3);
      }
      return e3;
    } };
    for (; n2.length > 0; ) {
      let e3 = n2.length - 1, a2 = n2[e3], i2 = a2[0], l2 = a2[1], s2 = a2[2];
      if (l2 >= i2.length) {
        n2.pop();
        continue;
      }
      if (o2.parent = s2, o2.depth = e3, l2 >= 0) {
        let e4 = i2[l2], r3 = t2(e4, o2) ?? b.Continue;
        switch (r3.kind) {
          case 0:
            e4.nodes && e4.nodes.length > 0 && n2.push([e4.nodes, 0, e4]), a2[1] = ~l2;
            continue;
          case 2:
            return;
          case 1:
            a2[1] = ~l2;
            continue;
          case 3:
            i2.splice(l2, 1, ...r3.nodes);
            continue;
          case 5:
            return void i2.splice(l2, 1, ...r3.nodes);
          case 4:
            i2.splice(l2, 1, ...r3.nodes), a2[1] += r3.nodes.length;
            continue;
          default:
            throw new Error(`Invalid \`WalkAction.${k[r3.kind] ?? `Unknown(${r3.kind})`}\` in enter.`);
        }
      }
      let c2 = ~l2, u2 = r2(i2[c2], o2) ?? b.Continue;
      switch (u2.kind) {
        case 0:
          a2[1] = c2 + 1;
          continue;
        case 2:
          return;
        case 3:
        case 4:
          i2.splice(c2, 1, ...u2.nodes), a2[1] = c2 + u2.nodes.length;
          continue;
        case 5:
          return void i2.splice(c2, 1, ...u2.nodes);
        default:
          throw new Error(`Invalid \`WalkAction.${k[u2.kind] ?? `Unknown(${u2.kind})`}\` in exit.`);
      }
    }
  }
  function $(e2) {
    let t2 = [];
    return y(v(e2), (e3) => {
      if ("function" === e3.kind && "var" === e3.value)
        return y(e3.nodes, (e4) => {
          "word" !== e4.kind || "-" !== e4.value[0] || "-" !== e4.value[1] || t2.push(e4.value);
        }), b.Skip;
    }), t2;
  }
  var A = 64;
  function z(e2, t2 = []) {
    return { kind: "rule", selector: e2, nodes: t2 };
  }
  function S(e2, t2 = "", r2 = []) {
    return { kind: "at-rule", name: e2, params: t2, nodes: r2 };
  }
  function C(e2, t2 = []) {
    return e2.charCodeAt(0) === A ? o(e2, t2) : z(e2, t2);
  }
  function T(e2, t2, r2 = false) {
    return { kind: "declaration", property: e2, value: t2, important: r2 };
  }
  function j(e2) {
    return { kind: "comment", value: e2 };
  }
  function V(e2, t2) {
    return { kind: "context", context: e2, nodes: t2 };
  }
  function K(e2) {
    return { kind: "at-root", nodes: e2 };
  }
  function E(e2) {
    switch (e2.kind) {
      case "rule":
        return { kind: e2.kind, selector: e2.selector, nodes: e2.nodes.map(E), src: e2.src, dst: e2.dst };
      case "at-rule":
        return { kind: e2.kind, name: e2.name, params: e2.params, nodes: e2.nodes.map(E), src: e2.src, dst: e2.dst };
      case "at-root":
        return { kind: e2.kind, nodes: e2.nodes.map(E), src: e2.src, dst: e2.dst };
      case "context":
        return { kind: e2.kind, context: { ...e2.context }, nodes: e2.nodes.map(E), src: e2.src, dst: e2.dst };
      case "declaration":
        return { kind: e2.kind, property: e2.property, value: e2.value, important: e2.important, src: e2.src, dst: e2.dst };
      case "comment":
        return { kind: e2.kind, value: e2.value, src: e2.src, dst: e2.dst };
      default:
        throw new Error(`Unknown node kind: ${e2.kind}`);
    }
  }
  function N(e2) {
    return { depth: e2.depth, get context() {
      let t2 = {};
      for (let r2 of e2.path())
        "context" === r2.kind && Object.assign(t2, r2.context);
      return Object.defineProperty(this, "context", { value: t2 }), t2;
    }, get parent() {
      let e3 = this.path().pop() ?? null;
      return Object.defineProperty(this, "parent", { value: e3 }), e3;
    }, path: () => e2.path().filter((e3) => "context" !== e3.kind) };
  }
  function O(e2, t2, r2 = 3) {
    let n2 = [], o2 = /* @__PURE__ */ new Set(), a2 = new f(() => /* @__PURE__ */ new Set()), i2 = new f(() => /* @__PURE__ */ new Set()), l2 = /* @__PURE__ */ new Set(), s2 = /* @__PURE__ */ new Set(), c2 = [], u2 = [], d2 = new f(() => /* @__PURE__ */ new Set());
    function p2(e3, f2, h3 = {}, m2 = 0) {
      if ("declaration" === e3.kind) {
        if ("--tw-sort" === e3.property || void 0 === e3.value || null === e3.value)
          return;
        if (h3.theme && "-" === e3.property[0] && "-" === e3.property[1]) {
          if ("initial" === e3.value)
            return void (e3.value = void 0);
          h3.keyframes || a2.get(f2).add(e3);
        }
        if (e3.value.includes("var("))
          if (h3.theme && "-" === e3.property[0] && "-" === e3.property[1])
            for (let t3 of $(e3.value))
              d2.get(t3).add(e3.property);
          else
            t2.trackUsedVariables(e3.value);
        if ("animation" === e3.property)
          for (let t3 of R(e3.value))
            s2.add(t3);
        2 & r2 && e3.value.includes("color-mix(") && !h3.keyframes && i2.get(f2).add(e3), f2.push(e3);
      } else if ("rule" === e3.kind) {
        let t3 = [];
        for (let r4 of e3.nodes)
          p2(r4, t3, h3, m2 + 1);
        let r3 = {}, n3 = /* @__PURE__ */ new Set();
        for (let e4 of t3) {
          if ("declaration" !== e4.kind)
            continue;
          let t4 = `${e4.property}:${e4.value}:${e4.important}`;
          r3[t4] ??= [], r3[t4].push(e4);
        }
        for (let e4 in r3)
          for (let t4 = 0; t4 < r3[e4].length - 1; ++t4)
            n3.add(r3[e4][t4]);
        if (n3.size > 0 && (t3 = t3.filter((e4) => !n3.has(e4))), 0 === t3.length)
          return;
        "&" === e3.selector ? f2.push(...t3) : f2.push({ ...e3, nodes: t3 });
      } else if ("at-rule" === e3.kind && "@property" === e3.name && 0 === m2) {
        if (o2.has(e3.params))
          return;
        if (1 & r2) {
          let t4 = e3.params, r3 = null, n3 = false;
          for (let t5 of e3.nodes)
            "declaration" === t5.kind && ("initial-value" === t5.property ? r3 = t5.value : "inherits" === t5.property && (n3 = "true" === t5.value));
          let o3 = T(t4, r3 ?? "initial");
          o3.src = e3.src, n3 ? c2.push(o3) : u2.push(o3);
        }
        o2.add(e3.params);
        let t3 = { ...e3, nodes: [] };
        for (let r3 of e3.nodes)
          p2(r3, t3.nodes, h3, m2 + 1);
        f2.push(t3);
      } else if ("at-rule" === e3.kind) {
        "@keyframes" === e3.name && (h3 = { ...h3, keyframes: true });
        let t3 = { ...e3, nodes: [] };
        for (let r3 of e3.nodes)
          p2(r3, t3.nodes, h3, m2 + 1);
        "@keyframes" === e3.name && h3.theme && l2.add(t3), (t3.nodes.length > 0 || "@layer" === t3.name || "@charset" === t3.name || "@custom-media" === t3.name || "@namespace" === t3.name || "@import" === t3.name) && f2.push(t3);
      } else if ("at-root" === e3.kind)
        for (let t3 of e3.nodes) {
          let e4 = [];
          p2(t3, e4, h3, 0);
          for (let t4 of e4)
            n2.push(t4);
        }
      else if ("context" === e3.kind) {
        if (e3.context.reference)
          return;
        for (let t3 of e3.nodes)
          p2(t3, f2, { ...h3, ...e3.context }, m2);
      } else
        "comment" === e3.kind && f2.push(e3);
    }
    let h2 = [];
    for (let t3 of e2)
      p2(t3, h2, {}, 0);
    e:
      for (let [e3, r3] of a2)
        for (let n3 of r3) {
          if (W(n3.property, t2.theme, d2)) {
            if (n3.property.startsWith(t2.theme.prefixKey("--animate-")))
              for (let e4 of R(n3.value))
                s2.add(e4);
            continue;
          }
          let r4 = e3.indexOf(n3);
          if (e3.splice(r4, 1), 0 === e3.length) {
            let t3 = U(h2, (t4) => "rule" === t4.kind && t4.nodes === e3);
            if (!t3 || 0 === t3.length)
              continue e;
            for (t3.unshift({ kind: "at-root", nodes: h2 }); ; ) {
              let e4 = t3.pop();
              if (!e4)
                break;
              let r5 = t3[t3.length - 1];
              if (!r5 || "at-root" !== r5.kind && "at-rule" !== r5.kind)
                break;
              let n4 = r5.nodes.indexOf(e4);
              if (-1 === n4)
                break;
              r5.nodes.splice(n4, 1);
            }
            continue e;
          }
        }
    for (let e3 of l2)
      if (!s2.has(e3.params)) {
        let t3 = n2.indexOf(e3);
        n2.splice(t3, 1);
      }
    if (h2 = h2.concat(n2), 2 & r2)
      for (let [e3, r3] of i2)
        for (let n3 of r3) {
          let r4 = e3.indexOf(n3);
          if (-1 === r4 || null == n3.value)
            continue;
          let o3 = v(n3.value), a3 = false;
          if (y(o3, (e4) => {
            if ("function" !== e4.kind || "color-mix" !== e4.value)
              return;
            let r5 = false, n4 = false;
            if (y(e4.nodes, (e5) => {
              if ("word" == e5.kind && "currentcolor" === e5.value.toLowerCase())
                return n4 = true, void (a3 = true);
              let o4 = e5, i4 = null, l4 = /* @__PURE__ */ new Set();
              do {
                if ("function" !== o4.kind || "var" !== o4.value)
                  return;
                let e6 = o4.nodes[0];
                if (!e6 || "word" !== e6.kind)
                  return;
                let s3 = e6.value;
                if (l4.has(s3))
                  return void (r5 = true);
                if (l4.add(s3), a3 = true, i4 = t2.theme.resolveValue(null, [e6.value]), !i4)
                  return void (r5 = true);
                if ("currentcolor" === i4.toLowerCase())
                  return void (n4 = true);
                o4 = i4.startsWith("var(") ? v(i4)[0] : null;
              } while (o4);
              return b.Replace({ kind: "word", value: i4 });
            }), r5 || n4) {
              let t3 = e4.nodes.findIndex((e5) => "separator" === e5.kind && e5.value.trim().includes(","));
              if (-1 === t3)
                return;
              let r6 = e4.nodes.length > t3 ? e4.nodes[t3 + 1] : null;
              return r6 ? b.Replace(r6) : void 0;
            }
            if (a3) {
              let t3 = e4.nodes[2];
              "word" === t3.kind && ("oklab" === t3.value || "oklch" === t3.value || "lab" === t3.value || "lch" === t3.value) && (t3.value = "srgb");
            }
          }), !a3)
            continue;
          let i3 = { ...n3, value: g(o3) }, l3 = C("@supports (color: color-mix(in lab, red, red))", [n3]);
          l3.src = n3.src, e3.splice(r4, 1, i3, l3);
        }
    if (1 & r2) {
      let e3 = [];
      if (c2.length > 0) {
        let t3 = C(":root, :host", c2);
        t3.src = c2[0].src, e3.push(t3);
      }
      if (u2.length > 0) {
        let t3 = C("*, ::before, ::after, ::backdrop", u2);
        t3.src = u2[0].src, e3.push(t3);
      }
      if (e3.length > 0) {
        let t3 = h2.findIndex((e4) => !("comment" === e4.kind || "at-rule" === e4.kind && ("@charset" === e4.name || "@import" === e4.name))), r3 = S("@layer", "properties", []);
        r3.src = e3[0].src, h2.splice(t3 < 0 ? h2.length : t3, 0, r3);
        let n3 = C("@layer properties", [S("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", e3)]);
        n3.src = e3[0].src, n3.nodes[0].src = e3[0].src, h2.push(n3);
      }
    }
    return h2;
  }
  function F(e2, t2) {
    let r2 = 0, n2 = { file: null, code: "" };
    function o2(e3, a3 = 0) {
      let i2 = "", l2 = "  ".repeat(a3);
      if ("declaration" === e3.kind) {
        if (i2 += `${l2}${e3.property}: ${e3.value}${e3.important ? " !important" : ""};
`, t2) {
          r2 += l2.length;
          let t3 = r2;
          r2 += e3.property.length, r2 += 2, r2 += e3.value?.length ?? 0, e3.important && (r2 += 11);
          let o3 = r2;
          r2 += 2, e3.dst = [n2, t3, o3];
        }
      } else if ("rule" === e3.kind) {
        if (i2 += `${l2}${e3.selector} {
`, t2) {
          r2 += l2.length;
          let t3 = r2;
          r2 += e3.selector.length, r2 += 1;
          let o3 = r2;
          e3.dst = [n2, t3, o3], r2 += 2;
        }
        for (let t3 of e3.nodes)
          i2 += o2(t3, a3 + 1);
        i2 += `${l2}}
`, t2 && (r2 += l2.length, r2 += 2);
      } else if ("at-rule" === e3.kind) {
        if (0 === e3.nodes.length) {
          let o3 = `${l2}${e3.name} ${e3.params};
`;
          if (t2) {
            r2 += l2.length;
            let t3 = r2;
            r2 += e3.name.length, r2 += 1, r2 += e3.params.length;
            let o4 = r2;
            r2 += 2, e3.dst = [n2, t3, o4];
          }
          return o3;
        }
        if (i2 += `${l2}${e3.name}${e3.params ? ` ${e3.params} ` : " "}{
`, t2) {
          r2 += l2.length;
          let t3 = r2;
          r2 += e3.name.length, e3.params && (r2 += 1, r2 += e3.params.length), r2 += 1;
          let o3 = r2;
          e3.dst = [n2, t3, o3], r2 += 2;
        }
        for (let t3 of e3.nodes)
          i2 += o2(t3, a3 + 1);
        i2 += `${l2}}
`, t2 && (r2 += l2.length, r2 += 2);
      } else if ("comment" === e3.kind) {
        if (i2 += `${l2}/*${e3.value}*/
`, t2) {
          r2 += l2.length;
          let t3 = r2;
          r2 += 2 + e3.value.length + 2;
          let o3 = r2;
          e3.dst = [n2, t3, o3], r2 += 1;
        }
      } else if ("context" === e3.kind || "at-root" === e3.kind)
        return "";
      return i2;
    }
    let a2 = "";
    for (let t3 of e2)
      a2 += o2(t3, 0);
    return n2.code = a2, a2;
  }
  function U(e2, t2) {
    let r2 = [];
    return y(e2, (e3, n2) => {
      if (t2(e3))
        return r2 = n2.path(), r2.push(e3), b.Stop;
    }), r2;
  }
  function W(e2, t2, r2, n2 = /* @__PURE__ */ new Set()) {
    if (n2.has(e2) || (n2.add(e2), 24 & t2.getOptions(e2)))
      return true;
    {
      let o2 = r2.get(e2) ?? [];
      for (let e3 of o2)
        if (W(e3, t2, r2, n2))
          return true;
    }
    return false;
  }
  function R(e2) {
    return e2.split(/[\s,]+/);
  }
  var D = ["calc", "min", "max", "clamp", "mod", "rem", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "pow", "sqrt", "hypot", "log", "exp", "round"];
  function _(e2) {
    return -1 !== e2.indexOf("(") && D.some((t2) => e2.includes(`${t2}(`));
  }
  function L(e2) {
    if (-1 === e2.indexOf("("))
      return M(e2);
    let t2 = v(e2);
    return B(t2), e2 = function(e3) {
      if (!D.some((t4) => e3.includes(t4)))
        return e3;
      let t3 = "", r2 = [], n2 = null, o2 = null;
      for (let a2 = 0; a2 < e3.length; a2++) {
        let i2 = e3.charCodeAt(a2);
        if (i2 >= 48 && i2 <= 57 || null !== n2 && (37 === i2 || i2 >= 97 && i2 <= 122 || i2 >= 65 && i2 <= 90) ? n2 = a2 : (o2 = n2, n2 = null), 40 !== i2)
          if (41 === i2)
            t3 += e3[a2], r2.shift();
          else {
            if (44 === i2 && r2[0]) {
              t3 += ", ";
              continue;
            }
            if (32 === i2 && r2[0] && 32 === t3.charCodeAt(t3.length - 1))
              continue;
            if (43 !== i2 && 42 !== i2 && 47 !== i2 && 45 !== i2 || !r2[0])
              t3 += e3[a2];
            else {
              let r3 = t3.trimEnd(), n3 = r3.charCodeAt(r3.length - 1), i3 = r3.charCodeAt(r3.length - 2), l2 = e3.charCodeAt(a2 + 1);
              if ((101 === n3 || 69 === n3) && i3 >= 48 && i3 <= 57) {
                t3 += e3[a2];
                continue;
              }
              if (43 === n3 || 42 === n3 || 47 === n3 || 45 === n3) {
                t3 += e3[a2];
                continue;
              }
              if (40 === n3 || 44 === n3) {
                t3 += e3[a2];
                continue;
              }
              32 === e3.charCodeAt(a2 - 1) ? t3 += `${e3[a2]} ` : t3 += n3 >= 48 && n3 <= 57 || l2 >= 48 && l2 <= 57 || 41 === n3 || 40 === l2 || 43 === l2 || 42 === l2 || 47 === l2 || 45 === l2 || null !== o2 && o2 === a2 - 1 ? ` ${e3[a2]} ` : e3[a2];
            }
          }
        else {
          t3 += e3[a2];
          let n3 = a2;
          for (let t4 = a2 - 1; t4 >= 0; t4--) {
            let r3 = e3.charCodeAt(t4);
            if (r3 >= 48 && r3 <= 57)
              n3 = t4;
            else {
              if (!(r3 >= 97 && r3 <= 122))
                break;
              n3 = t4;
            }
          }
          let o3 = e3.slice(n3, a2);
          if (D.includes(o3)) {
            r2.unshift(true);
            continue;
          }
          if (r2[0] && "" === o3) {
            r2.unshift(true);
            continue;
          }
          r2.unshift(false);
        }
      }
      return t3;
    }(e2 = g(t2)), e2;
  }
  function M(e2, t2 = false) {
    let r2 = "";
    for (let n2 = 0; n2 < e2.length; n2++) {
      let o2 = e2[n2];
      "\\" === o2 && "_" === e2[n2 + 1] ? (r2 += "_", n2 += 1) : r2 += "_" !== o2 || t2 ? o2 : " ";
    }
    return r2;
  }
  function B(e2) {
    for (let t2 of e2)
      switch (t2.kind) {
        case "function":
          if ("url" === t2.value || t2.value.endsWith("_url")) {
            t2.value = M(t2.value);
            break;
          }
          if ("var" === t2.value || t2.value.endsWith("_var") || "theme" === t2.value || t2.value.endsWith("_theme")) {
            t2.value = M(t2.value);
            for (let e3 = 0; e3 < t2.nodes.length; e3++)
              0 != e3 || "word" !== t2.nodes[e3].kind ? B([t2.nodes[e3]]) : t2.nodes[e3].value = M(t2.nodes[e3].value, true);
            break;
          }
          t2.value = M(t2.value), B(t2.nodes);
          break;
        case "separator":
        case "word":
          t2.value = M(t2.value);
          break;
        default:
          I(t2);
      }
  }
  function I(e2) {
    throw new Error(`Unexpected value: ${e2}`);
  }
  var P = new Uint8Array(256);
  function q(e2) {
    let t2 = 0, r2 = e2.length;
    for (let n2 = 0; n2 < r2; n2++) {
      let o2 = e2.charCodeAt(n2);
      switch (o2) {
        case 92:
          n2 += 1;
          break;
        case 39:
        case 34:
          for (; ++n2 < r2; ) {
            let t3 = e2.charCodeAt(n2);
            if (92 !== t3) {
              if (t3 === o2)
                break;
            } else
              n2 += 1;
          }
          break;
        case 40:
          P[t2] = 41, t2++;
          break;
        case 91:
          P[t2] = 93, t2++;
          break;
        case 123:
          break;
        case 93:
        case 125:
        case 41:
          if (0 === t2)
            return false;
          t2 > 0 && o2 === P[t2 - 1] && t2--;
          break;
        case 59:
          if (0 === t2)
            return false;
      }
    }
    return true;
  }
  var H = new Uint8Array(256);
  function Z(e2, t2) {
    let r2 = 0, n2 = [], o2 = 0, a2 = e2.length, i2 = t2.charCodeAt(0);
    for (let t3 = 0; t3 < a2; t3++) {
      let l2 = e2.charCodeAt(t3);
      if (0 !== r2 || l2 !== i2)
        switch (l2) {
          case 92:
            t3 += 1;
            break;
          case 39:
          case 34:
            for (; ++t3 < a2; ) {
              let r3 = e2.charCodeAt(t3);
              if (92 !== r3) {
                if (r3 === l2)
                  break;
              } else
                t3 += 1;
            }
            break;
          case 40:
            H[r2] = 41, r2++;
            break;
          case 91:
            H[r2] = 93, r2++;
            break;
          case 123:
            H[r2] = 125, r2++;
            break;
          case 93:
          case 125:
          case 41:
            r2 > 0 && l2 === H[r2 - 1] && r2--;
        }
      else
        n2.push(e2.slice(o2, t3)), o2 = t3 + 1;
    }
    return n2.push(e2.slice(o2)), n2;
  }
  var Y = /^[a-zA-Z0-9_.%-]+$/;
  function G(e2) {
    if ("[" === e2[0] && "]" === e2[e2.length - 1]) {
      let t2 = L(e2.slice(1, -1));
      return q(t2) && 0 !== t2.length && 0 !== t2.trim().length ? { kind: "arbitrary", value: t2 } : null;
    }
    return "(" === e2[0] && ")" === e2[e2.length - 1] ? "-" === (e2 = e2.slice(1, -1))[0] && "-" === e2[1] && q(e2) ? { kind: "arbitrary", value: L(e2 = `var(${e2})`) } : null : Y.test(e2) ? { kind: "named", value: e2 } : null;
  }
  function* J(e2, t2) {
    t2(e2) && (yield [e2, null]);
    let r2 = e2.lastIndexOf("-");
    for (; r2 > 0; ) {
      let n2 = e2.slice(0, r2);
      if (t2(n2)) {
        let o2 = [n2, e2.slice(r2 + 1)];
        if ("" === o2[1] || "@" === o2[0] && t2("@") && "-" === e2[r2])
          break;
        yield o2;
      }
      r2 = e2.lastIndexOf("-", r2 - 1);
    }
    "@" === e2[0] && t2("@") && (yield ["@", e2.slice(1)]);
  }
  function X(e2) {
    if (null === e2)
      return "";
    let t2 = ae(e2.value), r2 = t2 ? e2.value.slice(4, -1) : e2.value, [n2, o2] = t2 ? ["(", ")"] : ["[", "]"];
    return "arbitrary" === e2.kind ? `/${n2}${te(r2)}${o2}` : "named" === e2.kind ? `/${e2.value}` : "";
  }
  function Q(e2) {
    if ("static" === e2.kind)
      return e2.root;
    if ("arbitrary" === e2.kind)
      return `[${te(function(e3) {
        return re.get(e3);
      }(e2.selector))}]`;
    let t2 = "";
    if ("functional" === e2.kind) {
      t2 += e2.root;
      let r2 = "@" !== e2.root;
      if (e2.value)
        if ("arbitrary" === e2.value.kind) {
          let n2 = ae(e2.value.value), o2 = n2 ? e2.value.value.slice(4, -1) : e2.value.value, [a2, i2] = n2 ? ["(", ")"] : ["[", "]"];
          t2 += `${r2 ? "-" : ""}${a2}${te(o2)}${i2}`;
        } else
          "named" === e2.value.kind && (t2 += `${r2 ? "-" : ""}${e2.value.value}`);
    }
    return "compound" === e2.kind && (t2 += e2.root, t2 += "-", t2 += Q(e2.variant)), ("functional" === e2.kind || "compound" === e2.kind) && (t2 += X(e2.modifier)), t2;
  }
  var ee = new f((e2) => {
    let t2 = v(e2), r2 = /* @__PURE__ */ new Set();
    return y(t2, (e3, n2) => {
      let o2 = null === n2.parent ? t2 : n2.parent.nodes ?? [];
      if ("word" !== e3.kind || "+" !== e3.value && "-" !== e3.value && "*" !== e3.value && "/" !== e3.value)
        "separator" === e3.kind && e3.value.length > 0 && "" === e3.value.trim() ? (o2[0] === e3 || o2[o2.length - 1] === e3) && r2.add(e3) : "separator" === e3.kind && "," === e3.value.trim() && (e3.value = ",");
      else {
        let t3 = o2.indexOf(e3) ?? -1;
        if (-1 === t3)
          return;
        let n3 = o2[t3 - 1];
        if ("separator" !== n3?.kind || " " !== n3.value)
          return;
        let a2 = o2[t3 + 1];
        if ("separator" !== a2?.kind || " " !== a2.value)
          return;
        r2.add(n3), r2.add(a2);
      }
    }), r2.size > 0 && y(t2, (e3) => {
      if (r2.has(e3))
        return r2.delete(e3), b.ReplaceSkip([]);
    }), ne(t2), g(t2);
  });
  function te(e2) {
    return ee.get(e2);
  }
  var re = new f((e2) => {
    let t2 = v(e2);
    return 3 === t2.length && "word" === t2[0].kind && "&" === t2[0].value && "separator" === t2[1].kind && ":" === t2[1].value && "function" === t2[2].kind && "is" === t2[2].value ? g(t2[2].nodes) : e2;
  });
  function ne(e2) {
    for (let t2 of e2)
      switch (t2.kind) {
        case "function":
          if ("url" === t2.value || t2.value.endsWith("_url")) {
            t2.value = le(t2.value);
            break;
          }
          if ("var" === t2.value || t2.value.endsWith("_var") || "theme" === t2.value || t2.value.endsWith("_theme")) {
            t2.value = le(t2.value);
            for (let e3 = 0; e3 < t2.nodes.length; e3++)
              ne([t2.nodes[e3]]);
            break;
          }
          t2.value = le(t2.value), ne(t2.nodes);
          break;
        case "separator":
          t2.value = le(t2.value);
          break;
        case "word":
          ("-" !== t2.value[0] || "-" !== t2.value[1]) && (t2.value = le(t2.value));
          break;
        default:
          ie(t2);
      }
  }
  var oe = new f((e2) => {
    let t2 = v(e2);
    return 1 === t2.length && "function" === t2[0].kind && "var" === t2[0].value;
  });
  function ae(e2) {
    return oe.get(e2);
  }
  function ie(e2) {
    throw new Error(`Unexpected value: ${e2}`);
  }
  function le(e2) {
    return e2.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
  }
  function se(e2, t2, r2) {
    if (e2 === t2)
      return 0;
    let n2 = e2.indexOf("("), o2 = t2.indexOf("("), a2 = -1 === n2 ? e2.replace(/[\d.]+/g, "") : e2.slice(0, n2), i2 = -1 === o2 ? t2.replace(/[\d.]+/g, "") : t2.slice(0, o2), l2 = (a2 === i2 ? 0 : a2 < i2 ? -1 : 1) || ("asc" === r2 ? parseInt(e2) - parseInt(t2) : parseInt(t2) - parseInt(e2));
    return Number.isNaN(l2) ? e2 < t2 ? -1 : 1 : l2;
  }
  var ce = /* @__PURE__ */ new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent", "currentcolor", "canvas", "canvastext", "linktext", "visitedtext", "activetext", "buttonface", "buttontext", "buttonborder", "field", "fieldtext", "highlight", "highlighttext", "selecteditem", "selecteditemtext", "mark", "marktext", "graytext", "accentcolor", "accentcolortext"]), ue = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
  var de = { color: function(e2) {
    return 35 === e2.charCodeAt(0) || ue.test(e2) || ce.has(e2.toLowerCase());
  }, length: Ae, percentage: ye, ratio: function(e2) {
    return xe.test(e2) || _(e2);
  }, number: ke, integer: Ce, url: he, position: function(e2) {
    let t2 = 0;
    for (let r2 of Z(e2, " "))
      if ("center" !== r2 && "top" !== r2 && "right" !== r2 && "bottom" !== r2 && "left" !== r2) {
        if (!r2.startsWith("var(")) {
          if (Ae(r2) || ye(r2)) {
            t2 += 1;
            continue;
          }
          return false;
        }
      } else
        t2 += 1;
    return t2 > 0;
  }, "bg-size": function(e2) {
    let t2 = 0;
    for (let r2 of Z(e2, ",")) {
      if ("cover" === r2 || "contain" === r2) {
        t2 += 1;
        continue;
      }
      let e3 = Z(r2, " ");
      if (1 !== e3.length && 2 !== e3.length)
        return false;
      e3.every((e4) => "auto" === e4 || Ae(e4) || ye(e4)) && (t2 += 1);
    }
    return t2 > 0;
  }, "line-width": function(e2) {
    return Z(e2, " ").every((e3) => Ae(e3) || ke(e3) || "thin" === e3 || "medium" === e3 || "thick" === e3);
  }, image: function(e2) {
    let t2 = 0;
    for (let r2 of Z(e2, ","))
      if (!r2.startsWith("var(")) {
        if (he(r2)) {
          t2 += 1;
          continue;
        }
        if (ge.test(r2)) {
          t2 += 1;
          continue;
        }
        if (me.test(r2)) {
          t2 += 1;
          continue;
        }
        return false;
      }
    return t2 > 0;
  }, "family-name": function(e2) {
    let t2 = 0;
    for (let r2 of Z(e2, ",")) {
      let e3 = r2.charCodeAt(0);
      if (e3 >= 48 && e3 <= 57)
        return false;
      r2.startsWith("var(") || (t2 += 1);
    }
    return t2 > 0;
  }, "generic-name": function(e2) {
    return "serif" === e2 || "sans-serif" === e2 || "monospace" === e2 || "cursive" === e2 || "fantasy" === e2 || "system-ui" === e2 || "ui-serif" === e2 || "ui-sans-serif" === e2 || "ui-monospace" === e2 || "ui-rounded" === e2 || "math" === e2 || "emoji" === e2 || "fangsong" === e2;
  }, "absolute-size": function(e2) {
    return "xx-small" === e2 || "x-small" === e2 || "small" === e2 || "medium" === e2 || "large" === e2 || "x-large" === e2 || "xx-large" === e2 || "xxx-large" === e2;
  }, "relative-size": function(e2) {
    return "larger" === e2 || "smaller" === e2;
  }, angle: function(e2) {
    return ze.test(e2);
  }, vector: function(e2) {
    return Se.test(e2);
  } };
  function fe(e2, t2) {
    if (e2.startsWith("var("))
      return null;
    for (let r2 of t2)
      if (de[r2]?.(e2))
        return r2;
    return null;
  }
  var pe = /^url\(.*\)$/;
  function he(e2) {
    return pe.test(e2);
  }
  var me = /^(?:element|image|cross-fade|image-set)\(/, ge = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  var ve = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, we = new RegExp(`^${ve.source}$`);
  function ke(e2) {
    return we.test(e2) || _(e2);
  }
  var be = new RegExp(`^${ve.source}%$`);
  function ye(e2) {
    return be.test(e2) || _(e2);
  }
  var xe = new RegExp(`^${ve.source}s*/s*${ve.source}$`);
  var $e = new RegExp(`^${ve.source}(${["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"].join("|")})$`);
  function Ae(e2) {
    return $e.test(e2) || _(e2);
  }
  var ze = new RegExp(`^${ve.source}(${["deg", "rad", "grad", "turn"].join("|")})$`);
  var Se = new RegExp(`^${ve.source} +${ve.source} +${ve.source}$`);
  function Ce(e2) {
    let t2 = Number(e2);
    return Number.isInteger(t2) && t2 >= 0 && String(t2) === String(e2);
  }
  function Te(e2) {
    let t2 = Number(e2);
    return Number.isInteger(t2) && t2 > 0 && String(t2) === String(e2);
  }
  function je(e2) {
    return Ke(e2, 0.25);
  }
  function Ve(e2) {
    return Ke(e2, 0.25);
  }
  function Ke(e2, t2) {
    let r2 = Number(e2);
    return r2 >= 0 && r2 % t2 == 0 && String(r2) === String(e2);
  }
  var Ee = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]), Ne = /^-?(\d+|\.\d+)(.*?)$/g;
  function Oe(e2, t2) {
    return Z(e2, ",").map((e3) => {
      let r2 = Z(e3 = e3.trim(), " ").filter((e4) => "" !== e4.trim()), n2 = null, o2 = null, a2 = null;
      for (let e4 of r2)
        Ee.has(e4) || (Ne.test(e4) ? (null === o2 ? o2 = e4 : null === a2 && (a2 = e4), Ne.lastIndex = 0) : null === n2 && (n2 = e4));
      if (null === o2 || null === a2)
        return e3;
      let i2 = t2(n2 ?? "currentcolor");
      return null !== n2 ? e3.replace(n2, i2) : `${e3} ${i2}`;
    }).join(", ");
  }
  var Fe = /^-?[a-z][a-zA-Z0-9/%._-]*$/, Ue = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/, We = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"], Re = class {
    utilities = new f(() => []);
    completions = /* @__PURE__ */ new Map();
    static(e2, t2) {
      this.utilities.get(e2).push({ kind: "static", compileFn: t2 });
    }
    functional(e2, t2, r2) {
      this.utilities.get(e2).push({ kind: "functional", compileFn: t2, options: r2 });
    }
    has(e2, t2) {
      return this.utilities.has(e2) && this.utilities.get(e2).some((e3) => e3.kind === t2);
    }
    get(e2) {
      return this.utilities.has(e2) ? this.utilities.get(e2) : [];
    }
    getCompletions(e2) {
      return this.has(e2, "static") ? this.completions.get(e2)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(e2)?.() ?? [];
    }
    suggest(e2, t2) {
      let r2 = this.completions.get(e2);
      r2 ? this.completions.set(e2, () => [...r2?.(), ...t2?.()]) : this.completions.set(e2, t2);
    }
    keys(e2) {
      let t2 = [];
      for (let [r2, n2] of this.utilities.entries())
        for (let o2 of n2)
          if (o2.kind === e2) {
            t2.push(r2);
            break;
          }
      return t2;
    }
  };
  function De(e2, t2, r2) {
    return S("@property", e2, [T("syntax", r2 ? `"${r2}"` : '"*"'), T("inherits", "false"), ...t2 ? [T("initial-value", t2)] : []]);
  }
  function _e(e2, t2) {
    if (null === t2)
      return e2;
    let r2 = Number(t2);
    return Number.isNaN(r2) || (t2 = 100 * r2 + "%"), "100%" === t2 ? e2 : `color-mix(in oklab, ${e2} ${t2}, transparent)`;
  }
  function Le(e2, t2) {
    let r2 = Number(t2);
    return Number.isNaN(r2) || (t2 = 100 * r2 + "%"), `oklab(from ${e2} l a b / ${t2})`;
  }
  function Me(e2, t2, r2) {
    if (!t2)
      return e2;
    if ("arbitrary" === t2.kind)
      return _e(e2, t2.value);
    let n2 = r2.resolve(t2.value, ["--opacity"]);
    return n2 ? _e(e2, n2) : Ve(t2.value) ? _e(e2, `${t2.value}%`) : null;
  }
  function Be(e2, t2, r2) {
    let n2 = null;
    switch (e2.value.value) {
      case "inherit":
        n2 = "inherit";
        break;
      case "transparent":
        n2 = "transparent";
        break;
      case "current":
        n2 = "currentcolor";
        break;
      default:
        n2 = t2.resolve(e2.value.value, r2);
    }
    return n2 ? Me(n2, e2.modifier, t2) : null;
  }
  var Ie = /(\d+)_(\d+)/g;
  var Pe = ["number", "integer", "ratio", "percentage"];
  function qe(e2, t2, r2) {
    for (let n2 of t2.nodes) {
      if ("named" === e2.kind && "word" === n2.kind && ("'" === n2.value[0] || '"' === n2.value[0]) && n2.value[n2.value.length - 1] === n2.value[0] && n2.value.slice(1, -1) === e2.value)
        return { nodes: v(e2.value) };
      if ("named" === e2.kind && "word" === n2.kind && "-" === n2.value[0] && "-" === n2.value[1]) {
        let t3 = n2.value;
        if (t3.endsWith("-*")) {
          t3 = t3.slice(0, -2);
          let n3 = r2.theme.resolve(e2.value, [t3]);
          if (n3)
            return { nodes: v(n3) };
        } else {
          let n3 = t3.split("-*");
          if (n3.length <= 1)
            continue;
          let o2 = [n3.shift()], a2 = r2.theme.resolveWith(e2.value, o2, n3);
          if (a2) {
            let [, e3 = {}] = a2;
            {
              let t4 = e3[n3.pop()];
              if (t4)
                return { nodes: v(t4) };
            }
          }
        }
      } else {
        if ("named" === e2.kind && "word" === n2.kind) {
          if (!Pe.includes(n2.value))
            continue;
          let t3 = "ratio" === n2.value && "fraction" in e2 ? e2.fraction : e2.value;
          if (!t3)
            continue;
          let r3 = fe(t3, [n2.value]);
          if (null === r3)
            continue;
          if ("ratio" === r3) {
            let [e3, r4] = Z(t3, "/");
            if (!Ce(e3) || !Ce(r4))
              continue;
          } else {
            if ("number" === r3 && !je(t3))
              continue;
            if ("percentage" === r3 && !Ce(t3.slice(0, -1)))
              continue;
          }
          return { nodes: v(t3), ratio: "ratio" === r3 };
        }
        if ("arbitrary" === e2.kind && "word" === n2.kind && "[" === n2.value[0] && "]" === n2.value[n2.value.length - 1]) {
          let t3 = n2.value.slice(1, -1);
          if ("*" === t3)
            return { nodes: v(e2.value) };
          if ("dataType" in e2 && e2.dataType && e2.dataType !== t3)
            continue;
          if ("dataType" in e2 && e2.dataType)
            return { nodes: v(e2.value) };
          if (null !== fe(e2.value, [t3]))
            return { nodes: v(e2.value) };
        }
      }
    }
  }
  function He(e2, t2, r2, n2, o2 = "") {
    let a2 = false, i2 = Oe(t2, (e3) => null == r2 ? n2(e3) : e3.startsWith("current") ? n2(_e(e3, r2)) : ((e3.startsWith("var(") || r2.startsWith("var(")) && (a2 = true), n2(Le(e3, r2))));
    function l2(e3) {
      return o2 ? Z(e3, ",").map((e4) => o2 + e4).join(",") : e3;
    }
    return a2 ? [T(e2, l2(Oe(t2, n2))), C("@supports (color: lab(from red l a b))", [T(e2, l2(i2))])] : [T(e2, l2(i2))];
  }
  function Ze(e2, t2, r2, n2, o2 = "") {
    let a2 = false, i2 = Z(t2, ",").map((e3) => Oe(e3, (e4) => null == r2 ? n2(e4) : e4.startsWith("current") ? n2(_e(e4, r2)) : ((e4.startsWith("var(") || r2.startsWith("var(")) && (a2 = true), n2(Le(e4, r2))))).map((e3) => `drop-shadow(${e3})`).join(" ");
    return a2 ? [T(e2, o2 + Z(t2, ",").map((e3) => `drop-shadow(${Oe(e3, n2)})`).join(" ")), C("@supports (color: lab(from red l a b))", [T(e2, o2 + i2)])] : [T(e2, o2 + i2)];
  }
  var Ye = { "--alpha": function(e2, t2, r2, ...n2) {
    let [o2, a2] = Z(r2, "/").map((e3) => e3.trim());
    if (!o2 || !a2)
      throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${o2 || "var(--my-color)"} / ${a2 || "50%"})\``);
    if (n2.length > 0)
      throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${o2 || "var(--my-color)"} / ${a2 || "50%"})\``);
    return _e(o2, a2);
  }, "--spacing": function(e2, t2, r2, ...n2) {
    if (!r2)
      throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (n2.length > 0)
      throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${n2.length + 1}.`);
    let o2 = e2.theme.resolve(null, ["--spacing"]);
    if (!o2)
      throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${o2} * ${r2})`;
  }, "--theme": function(e2, t2, r2, ...n2) {
    if (!r2.startsWith("--"))
      throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let o2 = false;
    r2.endsWith(" inline") && (o2 = true, r2 = r2.slice(0, -7)), "at-rule" === t2.kind && (o2 = true);
    let a2 = e2.resolveThemeValue(r2, o2);
    if (!a2) {
      if (n2.length > 0)
        return n2.join(", ");
      throw new Error(`Could not resolve value for theme function: \`theme(${r2})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (0 === n2.length)
      return a2;
    let i2 = n2.join(", ");
    if ("initial" === i2)
      return a2;
    if ("initial" === a2)
      return i2;
    if (a2.startsWith("var(") || a2.startsWith("theme(") || a2.startsWith("--theme(")) {
      let e3 = v(a2);
      return function(e4, t3) {
        y(e4, (e5) => {
          if ("function" === e5.kind && ("var" === e5.value || "theme" === e5.value || "--theme" === e5.value))
            if (1 === e5.nodes.length)
              e5.nodes.push({ kind: "word", value: `, ${t3}` });
            else {
              let r3 = e5.nodes[e5.nodes.length - 1];
              "word" === r3.kind && "initial" === r3.value && (r3.value = t3);
            }
        });
      }(e3, i2), g(e3);
    }
    return a2;
  }, theme: function(e2, t2, r2, ...n2) {
    r2 = function(e3) {
      if ("'" !== e3[0] && '"' !== e3[0])
        return e3;
      let t3 = "", r3 = e3[0];
      for (let n3 = 1; n3 < e3.length - 1; n3++) {
        let o3 = e3[n3], a2 = e3[n3 + 1];
        "\\" !== o3 || a2 !== r3 && "\\" !== a2 ? t3 += o3 : (t3 += a2, n3++);
      }
      return t3;
    }(r2);
    let o2 = e2.resolveThemeValue(r2);
    if (!o2 && n2.length > 0)
      return n2.join(", ");
    if (!o2)
      throw new Error(`Could not resolve value for theme function: \`theme(${r2})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return o2;
  } };
  var Ge = new RegExp(Object.keys(Ye).map((e2) => `${e2}\\(`).join("|"));
  function Je(e2, t2) {
    let r2 = 0;
    return y(e2, (e3) => {
      if ("declaration" === e3.kind && e3.value && Ge.test(e3.value))
        return r2 |= 8, void (e3.value = Xe(e3.value, e3, t2));
      "at-rule" === e3.kind && ("@media" === e3.name || "@custom-media" === e3.name || "@container" === e3.name || "@supports" === e3.name) && Ge.test(e3.params) && (r2 |= 8, e3.params = Xe(e3.params, e3, t2));
    }), r2;
  }
  function Xe(e2, t2, r2) {
    let n2 = v(e2);
    return y(n2, (e3) => {
      if ("function" === e3.kind && e3.value in Ye) {
        let n3 = Z(g(e3.nodes).trim(), ",").map((e4) => e4.trim()), o2 = Ye[e3.value](r2, t2, ...n3);
        return b.Replace(v(o2));
      }
    }), g(n2);
  }
  var Qe = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/, et = class {
    compareFns = /* @__PURE__ */ new Map();
    variants = /* @__PURE__ */ new Map();
    completions = /* @__PURE__ */ new Map();
    groupOrder = null;
    lastOrder = 0;
    static(e2, t2, { compounds: r2, order: n2 } = {}) {
      this.set(e2, { kind: "static", applyFn: t2, compoundsWith: 0, compounds: r2 ?? 2, order: n2 });
    }
    fromAst(e2, t2, r2) {
      let n2 = [], o2 = false;
      y(t2, (e3) => {
        "rule" === e3.kind ? n2.push(e3.selector) : "at-rule" === e3.kind && "@variant" === e3.name ? o2 = true : "at-rule" === e3.kind && "@slot" !== e3.name && n2.push(`${e3.name} ${e3.params}`);
      }), this.static(e2, (e3) => {
        let n3 = t2.map(E);
        o2 && ot(n3, r2), nt(n3, e3.nodes), e3.nodes = n3;
      }, { compounds: tt(n2) });
    }
    functional(e2, t2, { compounds: r2, order: n2 } = {}) {
      this.set(e2, { kind: "functional", applyFn: t2, compoundsWith: 0, compounds: r2 ?? 2, order: n2 });
    }
    compound(e2, t2, r2, { compounds: n2, order: o2 } = {}) {
      this.set(e2, { kind: "compound", applyFn: r2, compoundsWith: t2, compounds: n2 ?? 2, order: o2 });
    }
    group(e2, t2) {
      this.groupOrder = this.nextOrder(), t2 && this.compareFns.set(this.groupOrder, t2), e2(), this.groupOrder = null;
    }
    has(e2) {
      return this.variants.has(e2);
    }
    get(e2) {
      return this.variants.get(e2);
    }
    kind(e2) {
      return this.variants.get(e2)?.kind;
    }
    compoundsWith(e2, t2) {
      let r2 = this.variants.get(e2), n2 = "string" == typeof t2 ? this.variants.get(t2) : "arbitrary" === t2.kind ? { compounds: tt([t2.selector]) } : this.variants.get(t2.root);
      return !!(r2 && n2 && "compound" === r2.kind && 0 !== n2.compounds && 0 !== r2.compoundsWith && r2.compoundsWith & n2.compounds);
    }
    suggest(e2, t2) {
      this.completions.set(e2, t2);
    }
    getCompletions(e2) {
      return this.completions.get(e2)?.() ?? [];
    }
    compare(e2, t2) {
      if (e2 === t2)
        return 0;
      if (null === e2)
        return -1;
      if (null === t2)
        return 1;
      if ("arbitrary" === e2.kind && "arbitrary" === t2.kind)
        return e2.selector < t2.selector ? -1 : 1;
      if ("arbitrary" === e2.kind)
        return 1;
      if ("arbitrary" === t2.kind)
        return -1;
      let r2 = this.variants.get(e2.root).order, n2 = r2 - this.variants.get(t2.root).order;
      if (0 !== n2)
        return n2;
      if ("compound" === e2.kind && "compound" === t2.kind) {
        let r3 = this.compare(e2.variant, t2.variant);
        return 0 !== r3 ? r3 : e2.modifier && t2.modifier ? e2.modifier.value < t2.modifier.value ? -1 : 1 : e2.modifier ? 1 : t2.modifier ? -1 : 0;
      }
      let o2 = this.compareFns.get(r2);
      if (void 0 !== o2)
        return o2(e2, t2);
      if (e2.root !== t2.root)
        return e2.root < t2.root ? -1 : 1;
      let a2 = e2.value, i2 = t2.value;
      return null === a2 ? -1 : null === i2 || "arbitrary" === a2.kind && "arbitrary" !== i2.kind ? 1 : "arbitrary" !== a2.kind && "arbitrary" === i2.kind || a2.value < i2.value ? -1 : 1;
    }
    keys() {
      return this.variants.keys();
    }
    entries() {
      return this.variants.entries();
    }
    set(e2, { kind: t2, applyFn: r2, compounds: n2, compoundsWith: o2, order: a2 }) {
      let i2 = this.variants.get(e2);
      i2 ? Object.assign(i2, { kind: t2, applyFn: r2, compounds: n2 }) : (void 0 === a2 && (this.lastOrder = this.nextOrder(), a2 = this.lastOrder), this.variants.set(e2, { kind: t2, applyFn: r2, order: a2, compoundsWith: o2, compounds: n2 }));
    }
    nextOrder() {
      return this.groupOrder ?? this.lastOrder + 1;
    }
  };
  function tt(e2) {
    let t2 = 0;
    for (let r2 of e2)
      if ("@" !== r2[0]) {
        if (r2.includes("::"))
          return 0;
        t2 |= 2;
      } else {
        if (!r2.startsWith("@media") && !r2.startsWith("@supports") && !r2.startsWith("@container"))
          return 0;
        t2 |= 1;
      }
    return t2;
  }
  function rt(e2) {
    if (e2.includes("=")) {
      let [t2, ...r2] = Z(e2, "="), n2 = r2.join("=").trim();
      if ("'" === n2[0] || '"' === n2[0])
        return e2;
      if (n2.length > 1) {
        let e3 = n2[n2.length - 1];
        if (" " === n2[n2.length - 2] && ("i" === e3 || "I" === e3 || "s" === e3 || "S" === e3))
          return `${t2}="${n2.slice(0, -2)}" ${e3}`;
      }
      return `${t2}="${n2}"`;
    }
    return e2;
  }
  function nt(e2, t2) {
    y(e2, (e3) => "at-rule" === e3.kind && "@slot" === e3.name ? b.Replace(t2) : "at-rule" !== e3.kind || "@keyframes" !== e3.name && "@property" !== e3.name ? void 0 : (Object.assign(e3, K([S(e3.name, e3.params, e3.nodes)])), b.Skip));
  }
  function ot(e2, t2) {
    let r2 = 0;
    return y(e2, (e3) => {
      if ("at-rule" !== e3.kind || "@variant" !== e3.name)
        return;
      let n2 = z("&", e3.nodes), o2 = e3.params, a2 = t2.parseVariant(o2);
      if (null === a2)
        throw new Error(`Cannot use \`@variant\` with unknown variant: ${o2}`);
      if (null === st(n2, a2, t2.variants))
        throw new Error(`Cannot use \`@variant\` with variant: ${o2}`);
      return r2 |= 32, b.Replace(n2);
    }), r2;
  }
  function at(e2, t2) {
    let r2 = function(e3) {
      let t3 = new Re();
      function r3(r4, n4) {
        function* o4(t4) {
          for (let r5 of e3.keysInNamespaces(t4))
            yield r5.replace(Ie, (e4, t5, r6) => `${t5}.${r6}`);
        }
        let a4 = ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
        t3.suggest(r4, () => {
          let e4 = [];
          for (let t4 of n4()) {
            if ("string" == typeof t4) {
              e4.push({ values: [t4], modifiers: [] });
              continue;
            }
            let r5 = [...t4.values ?? [], ...o4(t4.valueThemeKeys ?? [])], n5 = [...t4.modifiers ?? [], ...o4(t4.modifierThemeKeys ?? [])];
            t4.supportsFractions && r5.push(...a4), t4.hasDefaultValue && r5.unshift(null), e4.push({ supportsNegative: t4.supportsNegative, values: r5, modifiers: n5 });
          }
          return e4;
        });
      }
      function n3(e4, r4) {
        t3.static(e4, () => r4.map((e5) => "function" == typeof e5 ? e5() : T(e5[0], e5[1])));
      }
      function o3(n4, o4) {
        function a4({ negative: t4 }) {
          return (r4) => {
            let n5 = null, a5 = null;
            if (r4.value)
              if ("arbitrary" === r4.value.kind) {
                if (r4.modifier)
                  return;
                n5 = r4.value.value, a5 = r4.value.dataType;
              } else {
                if (n5 = e3.resolve(r4.value.fraction ?? r4.value.value, o4.themeKeys ?? []), null === n5 && o4.supportsFractions && r4.value.fraction) {
                  let [e4, t5] = Z(r4.value.fraction, "/");
                  if (!Ce(e4) || !Ce(t5))
                    return;
                  n5 = `calc(${r4.value.fraction} * 100%)`;
                }
                if (null === n5 && t4 && o4.handleNegativeBareValue) {
                  if (n5 = o4.handleNegativeBareValue(r4.value), !n5?.includes("/") && r4.modifier)
                    return;
                  if (null !== n5)
                    return o4.handle(n5, null);
                }
                if (null === n5 && o4.handleBareValue && (n5 = o4.handleBareValue(r4.value), !n5?.includes("/") && r4.modifier))
                  return;
                if (null === n5 && !t4 && o4.staticValues && !r4.modifier) {
                  let e4 = o4.staticValues[r4.value.value];
                  if (e4)
                    return e4.map(E);
                }
              }
            else {
              if (r4.modifier)
                return;
              n5 = void 0 !== o4.defaultValue ? o4.defaultValue : e3.resolve(null, o4.themeKeys ?? []);
            }
            if (null !== n5)
              return o4.handle(t4 ? `calc(${n5} * -1)` : n5, a5);
          };
        }
        if (o4.supportsNegative && t3.functional(`-${n4}`, a4({ negative: true })), t3.functional(n4, a4({ negative: false })), r3(n4, () => [{ supportsNegative: o4.supportsNegative, valueThemeKeys: o4.themeKeys ?? [], hasDefaultValue: void 0 !== o4.defaultValue && null !== o4.defaultValue, supportsFractions: o4.supportsFractions }]), o4.staticValues && Object.keys(o4.staticValues).length > 0) {
          let e4 = Object.keys(o4.staticValues);
          r3(n4, () => [{ values: e4 }]);
        }
      }
      function a3(n4, o4) {
        t3.functional(n4, (t4) => {
          if (!t4.value)
            return;
          let r4 = null;
          return "arbitrary" === t4.value.kind ? (r4 = t4.value.value, r4 = Me(r4, t4.modifier, e3)) : r4 = Be(t4, e3, o4.themeKeys), null !== r4 ? o4.handle(r4) : void 0;
        }), r3(n4, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: o4.themeKeys, modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }]);
      }
      function i3(n4, a4, i4, { supportsNegative: l3 = false, supportsFractions: s4 = false, staticValues: c4 } = {}) {
        l3 && t3.static(`-${n4}-px`, () => i4("-1px")), t3.static(`${n4}-px`, () => i4("1px")), o3(n4, { themeKeys: a4, supportsFractions: s4, supportsNegative: l3, defaultValue: null, handleBareValue: ({ value: t4 }) => {
          let r4 = e3.resolve(null, ["--spacing"]);
          return r4 && je(t4) ? `calc(${r4} * ${t4})` : null;
        }, handleNegativeBareValue: ({ value: t4 }) => {
          let r4 = e3.resolve(null, ["--spacing"]);
          return r4 && je(t4) ? `calc(${r4} * -${t4})` : null;
        }, handle: i4, staticValues: c4 }), r3(n4, () => [{ values: e3.get(["--spacing"]) ? We : [], supportsNegative: l3, supportsFractions: s4, valueThemeKeys: a4 }]);
      }
      n3("sr-only", [["position", "absolute"], ["width", "1px"], ["height", "1px"], ["padding", "0"], ["margin", "-1px"], ["overflow", "hidden"], ["clip-path", "inset(50%)"], ["white-space", "nowrap"], ["border-width", "0"]]), n3("not-sr-only", [["position", "static"], ["width", "auto"], ["height", "auto"], ["padding", "0"], ["margin", "0"], ["overflow", "visible"], ["clip-path", "none"], ["white-space", "normal"]]), n3("pointer-events-none", [["pointer-events", "none"]]), n3("pointer-events-auto", [["pointer-events", "auto"]]), n3("visible", [["visibility", "visible"]]), n3("invisible", [["visibility", "hidden"]]), n3("collapse", [["visibility", "collapse"]]), n3("static", [["position", "static"]]), n3("fixed", [["position", "fixed"]]), n3("absolute", [["position", "absolute"]]), n3("relative", [["position", "relative"]]), n3("sticky", [["position", "sticky"]]);
      for (let [e4, t4] of [["inset", "inset"], ["inset-x", "inset-inline"], ["inset-y", "inset-block"], ["start", "inset-inline-start"], ["end", "inset-inline-end"], ["top", "top"], ["right", "right"], ["bottom", "bottom"], ["left", "left"]])
        n3(`${e4}-auto`, [[t4, "auto"]]), n3(`${e4}-full`, [[t4, "100%"]]), n3(`-${e4}-full`, [[t4, "-100%"]]), i3(e4, ["--inset", "--spacing"], (e5) => [T(t4, e5)], { supportsNegative: true, supportsFractions: true });
      n3("isolate", [["isolation", "isolate"]]), n3("isolation-auto", [["isolation", "auto"]]), o3("z", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--z-index"], handle: (e4) => [T("z-index", e4)], staticValues: { auto: [T("z-index", "auto")] } }), r3("z", () => [{ supportsNegative: true, values: ["0", "10", "20", "30", "40", "50"], valueThemeKeys: ["--z-index"] }]), o3("order", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--order"], handle: (e4) => [T("order", e4)], staticValues: { first: [T("order", "-9999")], last: [T("order", "9999")] } }), r3("order", () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--order"] }]), o3("col", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--grid-column"], handle: (e4) => [T("grid-column", e4)], staticValues: { auto: [T("grid-column", "auto")] } }), o3("col-span", { handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, handle: (e4) => [T("grid-column", `span ${e4} / span ${e4}`)], staticValues: { full: [T("grid-column", "1 / -1")] } }), o3("col-start", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--grid-column-start"], handle: (e4) => [T("grid-column-start", e4)], staticValues: { auto: [T("grid-column-start", "auto")] } }), o3("col-end", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--grid-column-end"], handle: (e4) => [T("grid-column-end", e4)], staticValues: { auto: [T("grid-column-end", "auto")] } }), r3("col-span", () => [{ values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: [] }]), r3("col-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--grid-column-start"] }]), r3("col-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--grid-column-end"] }]), o3("row", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--grid-row"], handle: (e4) => [T("grid-row", e4)], staticValues: { auto: [T("grid-row", "auto")] } }), o3("row-span", { themeKeys: [], handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, handle: (e4) => [T("grid-row", `span ${e4} / span ${e4}`)], staticValues: { full: [T("grid-row", "1 / -1")] } }), o3("row-start", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--grid-row-start"], handle: (e4) => [T("grid-row-start", e4)], staticValues: { auto: [T("grid-row-start", "auto")] } }), o3("row-end", { supportsNegative: true, handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, themeKeys: ["--grid-row-end"], handle: (e4) => [T("grid-row-end", e4)], staticValues: { auto: [T("grid-row-end", "auto")] } }), r3("row-span", () => [{ values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: [] }]), r3("row-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--grid-row-start"] }]), r3("row-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--grid-row-end"] }]), n3("float-start", [["float", "inline-start"]]), n3("float-end", [["float", "inline-end"]]), n3("float-right", [["float", "right"]]), n3("float-left", [["float", "left"]]), n3("float-none", [["float", "none"]]), n3("clear-start", [["clear", "inline-start"]]), n3("clear-end", [["clear", "inline-end"]]), n3("clear-right", [["clear", "right"]]), n3("clear-left", [["clear", "left"]]), n3("clear-both", [["clear", "both"]]), n3("clear-none", [["clear", "none"]]);
      for (let [e4, t4] of [["m", "margin"], ["mx", "margin-inline"], ["my", "margin-block"], ["ms", "margin-inline-start"], ["me", "margin-inline-end"], ["mt", "margin-top"], ["mr", "margin-right"], ["mb", "margin-bottom"], ["ml", "margin-left"]])
        n3(`${e4}-auto`, [[t4, "auto"]]), i3(e4, ["--margin", "--spacing"], (e5) => [T(t4, e5)], { supportsNegative: true });
      n3("box-border", [["box-sizing", "border-box"]]), n3("box-content", [["box-sizing", "content-box"]]), o3("line-clamp", { themeKeys: ["--line-clamp"], handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, handle: (e4) => [T("overflow", "hidden"), T("display", "-webkit-box"), T("-webkit-box-orient", "vertical"), T("-webkit-line-clamp", e4)], staticValues: { none: [T("overflow", "visible"), T("display", "block"), T("-webkit-box-orient", "horizontal"), T("-webkit-line-clamp", "unset")] } }), r3("line-clamp", () => [{ values: ["1", "2", "3", "4", "5", "6"], valueThemeKeys: ["--line-clamp"] }]), n3("block", [["display", "block"]]), n3("inline-block", [["display", "inline-block"]]), n3("inline", [["display", "inline"]]), n3("hidden", [["display", "none"]]), n3("inline-flex", [["display", "inline-flex"]]), n3("table", [["display", "table"]]), n3("inline-table", [["display", "inline-table"]]), n3("table-caption", [["display", "table-caption"]]), n3("table-cell", [["display", "table-cell"]]), n3("table-column", [["display", "table-column"]]), n3("table-column-group", [["display", "table-column-group"]]), n3("table-footer-group", [["display", "table-footer-group"]]), n3("table-header-group", [["display", "table-header-group"]]), n3("table-row-group", [["display", "table-row-group"]]), n3("table-row", [["display", "table-row"]]), n3("flow-root", [["display", "flow-root"]]), n3("flex", [["display", "flex"]]), n3("grid", [["display", "grid"]]), n3("inline-grid", [["display", "inline-grid"]]), n3("contents", [["display", "contents"]]), n3("list-item", [["display", "list-item"]]), n3("field-sizing-content", [["field-sizing", "content"]]), n3("field-sizing-fixed", [["field-sizing", "fixed"]]), o3("aspect", { themeKeys: ["--aspect"], handleBareValue: ({ fraction: e4 }) => {
        if (null === e4)
          return null;
        let [t4, r4] = Z(e4, "/");
        return Ce(t4) && Ce(r4) ? e4 : null;
      }, handle: (e4) => [T("aspect-ratio", e4)], staticValues: { auto: [T("aspect-ratio", "auto")], square: [T("aspect-ratio", "1 / 1")] } });
      for (let [e4, t4] of [["full", "100%"], ["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"], ["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]])
        n3(`size-${e4}`, [["--tw-sort", "size"], ["width", t4], ["height", t4]]), n3(`w-${e4}`, [["width", t4]]), n3(`h-${e4}`, [["height", t4]]), n3(`min-w-${e4}`, [["min-width", t4]]), n3(`min-h-${e4}`, [["min-height", t4]]), n3(`max-w-${e4}`, [["max-width", t4]]), n3(`max-h-${e4}`, [["max-height", t4]]);
      n3("size-auto", [["--tw-sort", "size"], ["width", "auto"], ["height", "auto"]]), n3("w-auto", [["width", "auto"]]), n3("h-auto", [["height", "auto"]]), n3("min-w-auto", [["min-width", "auto"]]), n3("min-h-auto", [["min-height", "auto"]]), n3("h-lh", [["height", "1lh"]]), n3("min-h-lh", [["min-height", "1lh"]]), n3("max-h-lh", [["max-height", "1lh"]]), n3("w-screen", [["width", "100vw"]]), n3("min-w-screen", [["min-width", "100vw"]]), n3("max-w-screen", [["max-width", "100vw"]]), n3("h-screen", [["height", "100vh"]]), n3("min-h-screen", [["min-height", "100vh"]]), n3("max-h-screen", [["max-height", "100vh"]]), n3("max-w-none", [["max-width", "none"]]), n3("max-h-none", [["max-height", "none"]]), i3("size", ["--size", "--spacing"], (e4) => [T("--tw-sort", "size"), T("width", e4), T("height", e4)], { supportsFractions: true });
      for (let [e4, t4, r4] of [["w", ["--width", "--spacing", "--container"], "width"], ["min-w", ["--min-width", "--spacing", "--container"], "min-width"], ["max-w", ["--max-width", "--spacing", "--container"], "max-width"], ["h", ["--height", "--spacing"], "height"], ["min-h", ["--min-height", "--height", "--spacing"], "min-height"], ["max-h", ["--max-height", "--height", "--spacing"], "max-height"]])
        i3(e4, t4, (e5) => [T(r4, e5)], { supportsFractions: true });
      t3.static("container", () => {
        let t4 = [...e3.namespace("--breakpoint").values()];
        t4.sort((e4, t5) => se(e4, t5, "asc"));
        let r4 = [T("--tw-sort", "--tw-container-component"), T("width", "100%")];
        for (let e4 of t4)
          r4.push(S("@media", `(width >= ${e4})`, [T("max-width", e4)]));
        return r4;
      }), n3("flex-auto", [["flex", "auto"]]), n3("flex-initial", [["flex", "0 auto"]]), n3("flex-none", [["flex", "none"]]), t3.functional("flex", (e4) => {
        if (e4.value) {
          if ("arbitrary" === e4.value.kind)
            return e4.modifier ? void 0 : [T("flex", e4.value.value)];
          if (e4.value.fraction) {
            let [t4, r4] = Z(e4.value.fraction, "/");
            return Ce(t4) && Ce(r4) ? [T("flex", `calc(${e4.value.fraction} * 100%)`)] : void 0;
          }
          if (Ce(e4.value.value))
            return e4.modifier ? void 0 : [T("flex", e4.value.value)];
        }
      }), r3("flex", () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`) }]), o3("shrink", { defaultValue: "1", handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, handle: (e4) => [T("flex-shrink", e4)] }), o3("grow", { defaultValue: "1", handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, handle: (e4) => [T("flex-grow", e4)] }), r3("shrink", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), r3("grow", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), n3("basis-auto", [["flex-basis", "auto"]]), n3("basis-full", [["flex-basis", "100%"]]), i3("basis", ["--flex-basis", "--spacing", "--container"], (e4) => [T("flex-basis", e4)], { supportsFractions: true }), n3("table-auto", [["table-layout", "auto"]]), n3("table-fixed", [["table-layout", "fixed"]]), n3("caption-top", [["caption-side", "top"]]), n3("caption-bottom", [["caption-side", "bottom"]]), n3("border-collapse", [["border-collapse", "collapse"]]), n3("border-separate", [["border-collapse", "separate"]]);
      let l2 = () => K([De("--tw-border-spacing-x", "0", "<length>"), De("--tw-border-spacing-y", "0", "<length>")]);
      i3("border-spacing", ["--border-spacing", "--spacing"], (e4) => [l2(), T("--tw-border-spacing-x", e4), T("--tw-border-spacing-y", e4), T("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), i3("border-spacing-x", ["--border-spacing", "--spacing"], (e4) => [l2(), T("--tw-border-spacing-x", e4), T("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), i3("border-spacing-y", ["--border-spacing", "--spacing"], (e4) => [l2(), T("--tw-border-spacing-y", e4), T("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), o3("origin", { themeKeys: ["--transform-origin"], handle: (e4) => [T("transform-origin", e4)], staticValues: { center: [T("transform-origin", "center")], top: [T("transform-origin", "top")], "top-right": [T("transform-origin", "100% 0")], right: [T("transform-origin", "100%")], "bottom-right": [T("transform-origin", "100% 100%")], bottom: [T("transform-origin", "bottom")], "bottom-left": [T("transform-origin", "0 100%")], left: [T("transform-origin", "0")], "top-left": [T("transform-origin", "0 0")] } }), o3("perspective-origin", { themeKeys: ["--perspective-origin"], handle: (e4) => [T("perspective-origin", e4)], staticValues: { center: [T("perspective-origin", "center")], top: [T("perspective-origin", "top")], "top-right": [T("perspective-origin", "100% 0")], right: [T("perspective-origin", "100%")], "bottom-right": [T("perspective-origin", "100% 100%")], bottom: [T("perspective-origin", "bottom")], "bottom-left": [T("perspective-origin", "0 100%")], left: [T("perspective-origin", "0")], "top-left": [T("perspective-origin", "0 0")] } }), o3("perspective", { themeKeys: ["--perspective"], handle: (e4) => [T("perspective", e4)], staticValues: { none: [T("perspective", "none")] } });
      let s3 = () => K([De("--tw-translate-x", "0"), De("--tw-translate-y", "0"), De("--tw-translate-z", "0")]);
      n3("translate-none", [["translate", "none"]]), n3("-translate-full", [s3, ["--tw-translate-x", "-100%"], ["--tw-translate-y", "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), n3("translate-full", [s3, ["--tw-translate-x", "100%"], ["--tw-translate-y", "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), i3("translate", ["--translate", "--spacing"], (e4) => [s3(), T("--tw-translate-x", e4), T("--tw-translate-y", e4), T("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
      for (let e4 of ["x", "y"])
        n3(`-translate-${e4}-full`, [s3, [`--tw-translate-${e4}`, "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), n3(`translate-${e4}-full`, [s3, [`--tw-translate-${e4}`, "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), i3(`translate-${e4}`, ["--translate", "--spacing"], (t4) => [s3(), T(`--tw-translate-${e4}`, t4), T("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
      i3("translate-z", ["--translate", "--spacing"], (e4) => [s3(), T("--tw-translate-z", e4), T("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")], { supportsNegative: true }), n3("translate-3d", [s3, ["translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);
      let c3 = () => K([De("--tw-scale-x", "1"), De("--tw-scale-y", "1"), De("--tw-scale-z", "1")]);
      function u3({ negative: t4 }) {
        return (r4) => {
          if (!r4.value || r4.modifier)
            return;
          let n4;
          return "arbitrary" === r4.value.kind ? (n4 = r4.value.value, n4 = t4 ? `calc(${n4} * -1)` : n4, [T("scale", n4)]) : (n4 = e3.resolve(r4.value.value, ["--scale"]), !n4 && Ce(r4.value.value) && (n4 = `${r4.value.value}%`), n4 ? (n4 = t4 ? `calc(${n4} * -1)` : n4, [c3(), T("--tw-scale-x", n4), T("--tw-scale-y", n4), T("--tw-scale-z", n4), T("scale", "var(--tw-scale-x) var(--tw-scale-y)")]) : void 0);
        };
      }
      n3("scale-none", [["scale", "none"]]), t3.functional("-scale", u3({ negative: true })), t3.functional("scale", u3({ negative: false })), r3("scale", () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
      for (let e4 of ["x", "y", "z"])
        o3(`scale-${e4}`, { supportsNegative: true, themeKeys: ["--scale"], handleBareValue: ({ value: e5 }) => Ce(e5) ? `${e5}%` : null, handle: (t4) => [c3(), T(`--tw-scale-${e4}`, t4), T("scale", "var(--tw-scale-x) var(--tw-scale-y)" + ("z" === e4 ? " var(--tw-scale-z)" : ""))] }), r3(`scale-${e4}`, () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
      function d2({ negative: t4 }) {
        return (r4) => {
          if (!r4.value || r4.modifier)
            return;
          let n4;
          if ("arbitrary" === r4.value.kind) {
            n4 = r4.value.value;
            let e4 = r4.value.dataType ?? fe(n4, ["angle", "vector"]);
            if ("vector" === e4)
              return [T("rotate", `${n4} var(--tw-rotate)`)];
            if ("angle" !== e4)
              return [T("rotate", t4 ? `calc(${n4} * -1)` : n4)];
          } else if (n4 = e3.resolve(r4.value.value, ["--rotate"]), !n4 && Ce(r4.value.value) && (n4 = `${r4.value.value}deg`), !n4)
            return;
          return [T("rotate", t4 ? `calc(${n4} * -1)` : n4)];
        };
      }
      n3("scale-3d", [c3, ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]), n3("rotate-none", [["rotate", "none"]]), t3.functional("-rotate", d2({ negative: true })), t3.functional("rotate", d2({ negative: false })), r3("rotate", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
      {
        let e4 = ["var(--tw-rotate-x,)", "var(--tw-rotate-y,)", "var(--tw-rotate-z,)", "var(--tw-skew-x,)", "var(--tw-skew-y,)"].join(" "), a4 = () => K([De("--tw-rotate-x"), De("--tw-rotate-y"), De("--tw-rotate-z"), De("--tw-skew-x"), De("--tw-skew-y")]);
        for (let t4 of ["x", "y", "z"])
          o3(`rotate-${t4}`, { supportsNegative: true, themeKeys: ["--rotate"], handleBareValue: ({ value: e5 }) => Ce(e5) ? `${e5}deg` : null, handle: (r4) => [a4(), T(`--tw-rotate-${t4}`, `rotate${t4.toUpperCase()}(${r4})`), T("transform", e4)] }), r3(`rotate-${t4}`, () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
        o3("skew", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: e5 }) => Ce(e5) ? `${e5}deg` : null, handle: (t4) => [a4(), T("--tw-skew-x", `skewX(${t4})`), T("--tw-skew-y", `skewY(${t4})`), T("transform", e4)] }), o3("skew-x", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: e5 }) => Ce(e5) ? `${e5}deg` : null, handle: (t4) => [a4(), T("--tw-skew-x", `skewX(${t4})`), T("transform", e4)] }), o3("skew-y", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: e5 }) => Ce(e5) ? `${e5}deg` : null, handle: (t4) => [a4(), T("--tw-skew-y", `skewY(${t4})`), T("transform", e4)] }), r3("skew", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r3("skew-x", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r3("skew-y", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), t3.functional("transform", (t4) => {
          if (t4.modifier)
            return;
          let r4 = null;
          return t4.value ? "arbitrary" === t4.value.kind && (r4 = t4.value.value) : r4 = e4, null !== r4 ? [a4(), T("transform", r4)] : void 0;
        }), r3("transform", () => [{ hasDefaultValue: true }]), n3("transform-cpu", [["transform", e4]]), n3("transform-gpu", [["transform", `translateZ(0) ${e4}`]]), n3("transform-none", [["transform", "none"]]);
      }
      n3("transform-flat", [["transform-style", "flat"]]), n3("transform-3d", [["transform-style", "preserve-3d"]]), n3("transform-content", [["transform-box", "content-box"]]), n3("transform-border", [["transform-box", "border-box"]]), n3("transform-fill", [["transform-box", "fill-box"]]), n3("transform-stroke", [["transform-box", "stroke-box"]]), n3("transform-view", [["transform-box", "view-box"]]), n3("backface-visible", [["backface-visibility", "visible"]]), n3("backface-hidden", [["backface-visibility", "hidden"]]);
      for (let e4 of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"])
        n3(`cursor-${e4}`, [["cursor", e4]]);
      o3("cursor", { themeKeys: ["--cursor"], handle: (e4) => [T("cursor", e4)] });
      for (let e4 of ["auto", "none", "manipulation"])
        n3(`touch-${e4}`, [["touch-action", e4]]);
      let f2 = () => K([De("--tw-pan-x"), De("--tw-pan-y"), De("--tw-pinch-zoom")]);
      for (let e4 of ["x", "left", "right"])
        n3(`touch-pan-${e4}`, [f2, ["--tw-pan-x", `pan-${e4}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      for (let e4 of ["y", "up", "down"])
        n3(`touch-pan-${e4}`, [f2, ["--tw-pan-y", `pan-${e4}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      n3("touch-pinch-zoom", [f2, ["--tw-pinch-zoom", "pinch-zoom"], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      for (let e4 of ["none", "text", "all", "auto"])
        n3(`select-${e4}`, [["-webkit-user-select", e4], ["user-select", e4]]);
      n3("resize-none", [["resize", "none"]]), n3("resize-x", [["resize", "horizontal"]]), n3("resize-y", [["resize", "vertical"]]), n3("resize", [["resize", "both"]]), n3("snap-none", [["scroll-snap-type", "none"]]);
      let p2 = () => K([De("--tw-scroll-snap-strictness", "proximity", "*")]);
      for (let e4 of ["x", "y", "both"])
        n3(`snap-${e4}`, [p2, ["scroll-snap-type", `${e4} var(--tw-scroll-snap-strictness)`]]);
      n3("snap-mandatory", [p2, ["--tw-scroll-snap-strictness", "mandatory"]]), n3("snap-proximity", [p2, ["--tw-scroll-snap-strictness", "proximity"]]), n3("snap-align-none", [["scroll-snap-align", "none"]]), n3("snap-start", [["scroll-snap-align", "start"]]), n3("snap-end", [["scroll-snap-align", "end"]]), n3("snap-center", [["scroll-snap-align", "center"]]), n3("snap-normal", [["scroll-snap-stop", "normal"]]), n3("snap-always", [["scroll-snap-stop", "always"]]);
      for (let [e4, t4] of [["scroll-m", "scroll-margin"], ["scroll-mx", "scroll-margin-inline"], ["scroll-my", "scroll-margin-block"], ["scroll-ms", "scroll-margin-inline-start"], ["scroll-me", "scroll-margin-inline-end"], ["scroll-mt", "scroll-margin-top"], ["scroll-mr", "scroll-margin-right"], ["scroll-mb", "scroll-margin-bottom"], ["scroll-ml", "scroll-margin-left"]])
        i3(e4, ["--scroll-margin", "--spacing"], (e5) => [T(t4, e5)], { supportsNegative: true });
      for (let [e4, t4] of [["scroll-p", "scroll-padding"], ["scroll-px", "scroll-padding-inline"], ["scroll-py", "scroll-padding-block"], ["scroll-ps", "scroll-padding-inline-start"], ["scroll-pe", "scroll-padding-inline-end"], ["scroll-pt", "scroll-padding-top"], ["scroll-pr", "scroll-padding-right"], ["scroll-pb", "scroll-padding-bottom"], ["scroll-pl", "scroll-padding-left"]])
        i3(e4, ["--scroll-padding", "--spacing"], (e5) => [T(t4, e5)]);
      n3("list-inside", [["list-style-position", "inside"]]), n3("list-outside", [["list-style-position", "outside"]]), o3("list", { themeKeys: ["--list-style-type"], handle: (e4) => [T("list-style-type", e4)], staticValues: { none: [T("list-style-type", "none")], disc: [T("list-style-type", "disc")], decimal: [T("list-style-type", "decimal")] } }), o3("list-image", { themeKeys: ["--list-style-image"], handle: (e4) => [T("list-style-image", e4)], staticValues: { none: [T("list-style-image", "none")] } }), n3("appearance-none", [["appearance", "none"]]), n3("appearance-auto", [["appearance", "auto"]]), n3("scheme-normal", [["color-scheme", "normal"]]), n3("scheme-dark", [["color-scheme", "dark"]]), n3("scheme-light", [["color-scheme", "light"]]), n3("scheme-light-dark", [["color-scheme", "light dark"]]), n3("scheme-only-dark", [["color-scheme", "only dark"]]), n3("scheme-only-light", [["color-scheme", "only light"]]), o3("columns", { themeKeys: ["--columns", "--container"], handleBareValue: ({ value: e4 }) => Ce(e4) ? e4 : null, handle: (e4) => [T("columns", e4)], staticValues: { auto: [T("columns", "auto")] } }), r3("columns", () => [{ values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--columns", "--container"] }]);
      for (let e4 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
        n3(`break-before-${e4}`, [["break-before", e4]]);
      for (let e4 of ["auto", "avoid", "avoid-page", "avoid-column"])
        n3(`break-inside-${e4}`, [["break-inside", e4]]);
      for (let e4 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
        n3(`break-after-${e4}`, [["break-after", e4]]);
      n3("grid-flow-row", [["grid-auto-flow", "row"]]), n3("grid-flow-col", [["grid-auto-flow", "column"]]), n3("grid-flow-dense", [["grid-auto-flow", "dense"]]), n3("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]), n3("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]), o3("auto-cols", { themeKeys: ["--grid-auto-columns"], handle: (e4) => [T("grid-auto-columns", e4)], staticValues: { auto: [T("grid-auto-columns", "auto")], min: [T("grid-auto-columns", "min-content")], max: [T("grid-auto-columns", "max-content")], fr: [T("grid-auto-columns", "minmax(0, 1fr)")] } }), o3("auto-rows", { themeKeys: ["--grid-auto-rows"], handle: (e4) => [T("grid-auto-rows", e4)], staticValues: { auto: [T("grid-auto-rows", "auto")], min: [T("grid-auto-rows", "min-content")], max: [T("grid-auto-rows", "max-content")], fr: [T("grid-auto-rows", "minmax(0, 1fr)")] } }), o3("grid-cols", { themeKeys: ["--grid-template-columns"], handleBareValue: ({ value: e4 }) => Te(e4) ? `repeat(${e4}, minmax(0, 1fr))` : null, handle: (e4) => [T("grid-template-columns", e4)], staticValues: { none: [T("grid-template-columns", "none")], subgrid: [T("grid-template-columns", "subgrid")] } }), o3("grid-rows", { themeKeys: ["--grid-template-rows"], handleBareValue: ({ value: e4 }) => Te(e4) ? `repeat(${e4}, minmax(0, 1fr))` : null, handle: (e4) => [T("grid-template-rows", e4)], staticValues: { none: [T("grid-template-rows", "none")], subgrid: [T("grid-template-rows", "subgrid")] } }), r3("grid-cols", () => [{ values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--grid-template-columns"] }]), r3("grid-rows", () => [{ values: Array.from({ length: 12 }, (e4, t4) => `${t4 + 1}`), valueThemeKeys: ["--grid-template-rows"] }]), n3("flex-row", [["flex-direction", "row"]]), n3("flex-row-reverse", [["flex-direction", "row-reverse"]]), n3("flex-col", [["flex-direction", "column"]]), n3("flex-col-reverse", [["flex-direction", "column-reverse"]]), n3("flex-wrap", [["flex-wrap", "wrap"]]), n3("flex-nowrap", [["flex-wrap", "nowrap"]]), n3("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]), n3("place-content-center", [["place-content", "center"]]), n3("place-content-start", [["place-content", "start"]]), n3("place-content-end", [["place-content", "end"]]), n3("place-content-center-safe", [["place-content", "safe center"]]), n3("place-content-end-safe", [["place-content", "safe end"]]), n3("place-content-between", [["place-content", "space-between"]]), n3("place-content-around", [["place-content", "space-around"]]), n3("place-content-evenly", [["place-content", "space-evenly"]]), n3("place-content-baseline", [["place-content", "baseline"]]), n3("place-content-stretch", [["place-content", "stretch"]]), n3("place-items-center", [["place-items", "center"]]), n3("place-items-start", [["place-items", "start"]]), n3("place-items-end", [["place-items", "end"]]), n3("place-items-center-safe", [["place-items", "safe center"]]), n3("place-items-end-safe", [["place-items", "safe end"]]), n3("place-items-baseline", [["place-items", "baseline"]]), n3("place-items-stretch", [["place-items", "stretch"]]), n3("content-normal", [["align-content", "normal"]]), n3("content-center", [["align-content", "center"]]), n3("content-start", [["align-content", "flex-start"]]), n3("content-end", [["align-content", "flex-end"]]), n3("content-center-safe", [["align-content", "safe center"]]), n3("content-end-safe", [["align-content", "safe flex-end"]]), n3("content-between", [["align-content", "space-between"]]), n3("content-around", [["align-content", "space-around"]]), n3("content-evenly", [["align-content", "space-evenly"]]), n3("content-baseline", [["align-content", "baseline"]]), n3("content-stretch", [["align-content", "stretch"]]), n3("items-center", [["align-items", "center"]]), n3("items-start", [["align-items", "flex-start"]]), n3("items-end", [["align-items", "flex-end"]]), n3("items-center-safe", [["align-items", "safe center"]]), n3("items-end-safe", [["align-items", "safe flex-end"]]), n3("items-baseline", [["align-items", "baseline"]]), n3("items-baseline-last", [["align-items", "last baseline"]]), n3("items-stretch", [["align-items", "stretch"]]), n3("justify-normal", [["justify-content", "normal"]]), n3("justify-center", [["justify-content", "center"]]), n3("justify-start", [["justify-content", "flex-start"]]), n3("justify-end", [["justify-content", "flex-end"]]), n3("justify-center-safe", [["justify-content", "safe center"]]), n3("justify-end-safe", [["justify-content", "safe flex-end"]]), n3("justify-between", [["justify-content", "space-between"]]), n3("justify-around", [["justify-content", "space-around"]]), n3("justify-evenly", [["justify-content", "space-evenly"]]), n3("justify-baseline", [["justify-content", "baseline"]]), n3("justify-stretch", [["justify-content", "stretch"]]), n3("justify-items-normal", [["justify-items", "normal"]]), n3("justify-items-center", [["justify-items", "center"]]), n3("justify-items-start", [["justify-items", "start"]]), n3("justify-items-end", [["justify-items", "end"]]), n3("justify-items-center-safe", [["justify-items", "safe center"]]), n3("justify-items-end-safe", [["justify-items", "safe end"]]), n3("justify-items-stretch", [["justify-items", "stretch"]]), i3("gap", ["--gap", "--spacing"], (e4) => [T("gap", e4)]), i3("gap-x", ["--gap", "--spacing"], (e4) => [T("column-gap", e4)]), i3("gap-y", ["--gap", "--spacing"], (e4) => [T("row-gap", e4)]), i3("space-x", ["--space", "--spacing"], (e4) => [K([De("--tw-space-x-reverse", "0")]), z(":where(& > :not(:last-child))", [T("--tw-sort", "row-gap"), T("--tw-space-x-reverse", "0"), T("margin-inline-start", `calc(${e4} * var(--tw-space-x-reverse))`), T("margin-inline-end", `calc(${e4} * calc(1 - var(--tw-space-x-reverse)))`)])], { supportsNegative: true }), i3("space-y", ["--space", "--spacing"], (e4) => [K([De("--tw-space-y-reverse", "0")]), z(":where(& > :not(:last-child))", [T("--tw-sort", "column-gap"), T("--tw-space-y-reverse", "0"), T("margin-block-start", `calc(${e4} * var(--tw-space-y-reverse))`), T("margin-block-end", `calc(${e4} * calc(1 - var(--tw-space-y-reverse)))`)])], { supportsNegative: true }), n3("space-x-reverse", [() => K([De("--tw-space-x-reverse", "0")]), () => z(":where(& > :not(:last-child))", [T("--tw-sort", "row-gap"), T("--tw-space-x-reverse", "1")])]), n3("space-y-reverse", [() => K([De("--tw-space-y-reverse", "0")]), () => z(":where(& > :not(:last-child))", [T("--tw-sort", "column-gap"), T("--tw-space-y-reverse", "1")])]), n3("accent-auto", [["accent-color", "auto"]]), a3("accent", { themeKeys: ["--accent-color", "--color"], handle: (e4) => [T("accent-color", e4)] }), a3("caret", { themeKeys: ["--caret-color", "--color"], handle: (e4) => [T("caret-color", e4)] }), a3("divide", { themeKeys: ["--divide-color", "--border-color", "--color"], handle: (e4) => [z(":where(& > :not(:last-child))", [T("--tw-sort", "divide-color"), T("border-color", e4)])] }), n3("place-self-auto", [["place-self", "auto"]]), n3("place-self-start", [["place-self", "start"]]), n3("place-self-end", [["place-self", "end"]]), n3("place-self-center", [["place-self", "center"]]), n3("place-self-end-safe", [["place-self", "safe end"]]), n3("place-self-center-safe", [["place-self", "safe center"]]), n3("place-self-stretch", [["place-self", "stretch"]]), n3("self-auto", [["align-self", "auto"]]), n3("self-start", [["align-self", "flex-start"]]), n3("self-end", [["align-self", "flex-end"]]), n3("self-center", [["align-self", "center"]]), n3("self-end-safe", [["align-self", "safe flex-end"]]), n3("self-center-safe", [["align-self", "safe center"]]), n3("self-stretch", [["align-self", "stretch"]]), n3("self-baseline", [["align-self", "baseline"]]), n3("self-baseline-last", [["align-self", "last baseline"]]), n3("justify-self-auto", [["justify-self", "auto"]]), n3("justify-self-start", [["justify-self", "flex-start"]]), n3("justify-self-end", [["justify-self", "flex-end"]]), n3("justify-self-center", [["justify-self", "center"]]), n3("justify-self-end-safe", [["justify-self", "safe flex-end"]]), n3("justify-self-center-safe", [["justify-self", "safe center"]]), n3("justify-self-stretch", [["justify-self", "stretch"]]);
      for (let e4 of ["auto", "hidden", "clip", "visible", "scroll"])
        n3(`overflow-${e4}`, [["overflow", e4]]), n3(`overflow-x-${e4}`, [["overflow-x", e4]]), n3(`overflow-y-${e4}`, [["overflow-y", e4]]);
      for (let e4 of ["auto", "contain", "none"])
        n3(`overscroll-${e4}`, [["overscroll-behavior", e4]]), n3(`overscroll-x-${e4}`, [["overscroll-behavior-x", e4]]), n3(`overscroll-y-${e4}`, [["overscroll-behavior-y", e4]]);
      n3("scroll-auto", [["scroll-behavior", "auto"]]), n3("scroll-smooth", [["scroll-behavior", "smooth"]]), n3("truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]]), n3("text-ellipsis", [["text-overflow", "ellipsis"]]), n3("text-clip", [["text-overflow", "clip"]]), n3("hyphens-none", [["-webkit-hyphens", "none"], ["hyphens", "none"]]), n3("hyphens-manual", [["-webkit-hyphens", "manual"], ["hyphens", "manual"]]), n3("hyphens-auto", [["-webkit-hyphens", "auto"], ["hyphens", "auto"]]), n3("whitespace-normal", [["white-space", "normal"]]), n3("whitespace-nowrap", [["white-space", "nowrap"]]), n3("whitespace-pre", [["white-space", "pre"]]), n3("whitespace-pre-line", [["white-space", "pre-line"]]), n3("whitespace-pre-wrap", [["white-space", "pre-wrap"]]), n3("whitespace-break-spaces", [["white-space", "break-spaces"]]), n3("text-wrap", [["text-wrap", "wrap"]]), n3("text-nowrap", [["text-wrap", "nowrap"]]), n3("text-balance", [["text-wrap", "balance"]]), n3("text-pretty", [["text-wrap", "pretty"]]), n3("break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]]), n3("break-all", [["word-break", "break-all"]]), n3("break-keep", [["word-break", "keep-all"]]), n3("wrap-anywhere", [["overflow-wrap", "anywhere"]]), n3("wrap-break-word", [["overflow-wrap", "break-word"]]), n3("wrap-normal", [["overflow-wrap", "normal"]]);
      for (let [e4, t4] of [["rounded", ["border-radius"]], ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]], ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]], ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]], ["rounded-ss", ["border-start-start-radius"]], ["rounded-se", ["border-start-end-radius"]], ["rounded-ee", ["border-end-end-radius"]], ["rounded-es", ["border-end-start-radius"]], ["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]])
        o3(e4, { themeKeys: ["--radius"], handle: (e5) => t4.map((t5) => T(t5, e5)), staticValues: { none: t4.map((e5) => T(e5, "0")), full: t4.map((e5) => T(e5, "calc(infinity * 1px)")) } });
      n3("border-solid", [["--tw-border-style", "solid"], ["border-style", "solid"]]), n3("border-dashed", [["--tw-border-style", "dashed"], ["border-style", "dashed"]]), n3("border-dotted", [["--tw-border-style", "dotted"], ["border-style", "dotted"]]), n3("border-double", [["--tw-border-style", "double"], ["border-style", "double"]]), n3("border-hidden", [["--tw-border-style", "hidden"], ["border-style", "hidden"]]), n3("border-none", [["--tw-border-style", "none"], ["border-style", "none"]]);
      {
        let a4 = function(n4, o4) {
          t3.functional(n4, (t4) => {
            if (!t4.value) {
              if (t4.modifier)
                return;
              let r4 = e3.get(["--default-border-width"]) ?? "1px", n5 = o4.width(r4);
              return n5 ? [i4(), ...n5] : void 0;
            }
            if ("arbitrary" === t4.value.kind) {
              let r4 = t4.value.value;
              switch (t4.value.dataType ?? fe(r4, ["color", "line-width", "length"])) {
                case "line-width":
                case "length": {
                  if (t4.modifier)
                    return;
                  let e4 = o4.width(r4);
                  return e4 ? [i4(), ...e4] : void 0;
                }
                default:
                  return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : o4.color(r4);
              }
            }
            {
              let r4 = Be(t4, e3, ["--border-color", "--color"]);
              if (r4)
                return o4.color(r4);
            }
            {
              if (t4.modifier)
                return;
              let r4 = e3.resolve(t4.value.value, ["--border-width"]);
              if (r4) {
                let e4 = o4.width(r4);
                return e4 ? [i4(), ...e4] : void 0;
              }
              if (Ce(t4.value.value)) {
                let e4 = o4.width(`${t4.value.value}px`);
                return e4 ? [i4(), ...e4] : void 0;
              }
            }
          }), r3(n4, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--border-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), hasDefaultValue: true }, { values: ["0", "2", "4", "8"], valueThemeKeys: ["--border-width"] }]);
        }, i4 = () => K([De("--tw-border-style", "solid")]);
        a4("border", { width: (e4) => [T("border-style", "var(--tw-border-style)"), T("border-width", e4)], color: (e4) => [T("border-color", e4)] }), a4("border-x", { width: (e4) => [T("border-inline-style", "var(--tw-border-style)"), T("border-inline-width", e4)], color: (e4) => [T("border-inline-color", e4)] }), a4("border-y", { width: (e4) => [T("border-block-style", "var(--tw-border-style)"), T("border-block-width", e4)], color: (e4) => [T("border-block-color", e4)] }), a4("border-s", { width: (e4) => [T("border-inline-start-style", "var(--tw-border-style)"), T("border-inline-start-width", e4)], color: (e4) => [T("border-inline-start-color", e4)] }), a4("border-e", { width: (e4) => [T("border-inline-end-style", "var(--tw-border-style)"), T("border-inline-end-width", e4)], color: (e4) => [T("border-inline-end-color", e4)] }), a4("border-t", { width: (e4) => [T("border-top-style", "var(--tw-border-style)"), T("border-top-width", e4)], color: (e4) => [T("border-top-color", e4)] }), a4("border-r", { width: (e4) => [T("border-right-style", "var(--tw-border-style)"), T("border-right-width", e4)], color: (e4) => [T("border-right-color", e4)] }), a4("border-b", { width: (e4) => [T("border-bottom-style", "var(--tw-border-style)"), T("border-bottom-width", e4)], color: (e4) => [T("border-bottom-color", e4)] }), a4("border-l", { width: (e4) => [T("border-left-style", "var(--tw-border-style)"), T("border-left-width", e4)], color: (e4) => [T("border-left-color", e4)] }), o3("divide-x", { defaultValue: e3.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}px` : null, handle: (e4) => [K([De("--tw-divide-x-reverse", "0")]), z(":where(& > :not(:last-child))", [T("--tw-sort", "divide-x-width"), i4(), T("--tw-divide-x-reverse", "0"), T("border-inline-style", "var(--tw-border-style)"), T("border-inline-start-width", `calc(${e4} * var(--tw-divide-x-reverse))`), T("border-inline-end-width", `calc(${e4} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), o3("divide-y", { defaultValue: e3.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}px` : null, handle: (e4) => [K([De("--tw-divide-y-reverse", "0")]), z(":where(& > :not(:last-child))", [T("--tw-sort", "divide-y-width"), i4(), T("--tw-divide-y-reverse", "0"), T("border-bottom-style", "var(--tw-border-style)"), T("border-top-style", "var(--tw-border-style)"), T("border-top-width", `calc(${e4} * var(--tw-divide-y-reverse))`), T("border-bottom-width", `calc(${e4} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), r3("divide-x", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), r3("divide-y", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), n3("divide-x-reverse", [() => K([De("--tw-divide-x-reverse", "0")]), () => z(":where(& > :not(:last-child))", [T("--tw-divide-x-reverse", "1")])]), n3("divide-y-reverse", [() => K([De("--tw-divide-y-reverse", "0")]), () => z(":where(& > :not(:last-child))", [T("--tw-divide-y-reverse", "1")])]);
        for (let e4 of ["solid", "dashed", "dotted", "double", "none"])
          n3(`divide-${e4}`, [() => z(":where(& > :not(:last-child))", [T("--tw-sort", "divide-style"), T("--tw-border-style", e4), T("border-style", e4)])]);
      }
      n3("bg-auto", [["background-size", "auto"]]), n3("bg-cover", [["background-size", "cover"]]), n3("bg-contain", [["background-size", "contain"]]), o3("bg-size", { handle(e4) {
        if (e4)
          return [T("background-size", e4)];
      } }), n3("bg-fixed", [["background-attachment", "fixed"]]), n3("bg-local", [["background-attachment", "local"]]), n3("bg-scroll", [["background-attachment", "scroll"]]), n3("bg-top", [["background-position", "top"]]), n3("bg-top-left", [["background-position", "left top"]]), n3("bg-top-right", [["background-position", "right top"]]), n3("bg-bottom", [["background-position", "bottom"]]), n3("bg-bottom-left", [["background-position", "left bottom"]]), n3("bg-bottom-right", [["background-position", "right bottom"]]), n3("bg-left", [["background-position", "left"]]), n3("bg-right", [["background-position", "right"]]), n3("bg-center", [["background-position", "center"]]), o3("bg-position", { handle(e4) {
        if (e4)
          return [T("background-position", e4)];
      } }), n3("bg-repeat", [["background-repeat", "repeat"]]), n3("bg-no-repeat", [["background-repeat", "no-repeat"]]), n3("bg-repeat-x", [["background-repeat", "repeat-x"]]), n3("bg-repeat-y", [["background-repeat", "repeat-y"]]), n3("bg-repeat-round", [["background-repeat", "round"]]), n3("bg-repeat-space", [["background-repeat", "space"]]), n3("bg-none", [["background-image", "none"]]);
      {
        let e4 = function(e5) {
          let t4 = "in oklab";
          if ("named" === e5?.kind)
            switch (e5.value) {
              case "longer":
              case "shorter":
              case "increasing":
              case "decreasing":
                t4 = `in oklch ${e5.value} hue`;
                break;
              default:
                t4 = `in ${e5.value}`;
            }
          else
            "arbitrary" === e5?.kind && (t4 = e5.value);
          return t4;
        }, n4 = function({ negative: t4 }) {
          return (r4) => {
            if (!r4.value)
              return;
            if ("arbitrary" === r4.value.kind) {
              if (r4.modifier)
                return;
              let e5 = r4.value.value;
              return "angle" === (r4.value.dataType ?? fe(e5, ["angle"])) ? (e5 = t4 ? `calc(${e5} * -1)` : `${e5}`, [T("--tw-gradient-position", e5), T("background-image", `linear-gradient(var(--tw-gradient-stops,${e5}))`)]) : t4 ? void 0 : [T("--tw-gradient-position", e5), T("background-image", `linear-gradient(var(--tw-gradient-stops,${e5}))`)];
            }
            let n5 = r4.value.value;
            if (!t4 && i4.has(n5))
              n5 = i4.get(n5);
            else {
              if (!Ce(n5))
                return;
              n5 = t4 ? `calc(${n5}deg * -1)` : `${n5}deg`;
            }
            let o5 = e4(r4.modifier);
            return [T("--tw-gradient-position", `${n5}`), C("@supports (background-image: linear-gradient(in lab, red, red))", [T("--tw-gradient-position", `${n5} ${o5}`)]), T("background-image", "linear-gradient(var(--tw-gradient-stops))")];
          };
        }, o4 = function({ negative: t4 }) {
          return (r4) => {
            if ("arbitrary" === r4.value?.kind) {
              if (r4.modifier)
                return;
              let e5 = r4.value.value;
              return [T("--tw-gradient-position", e5), T("background-image", `conic-gradient(var(--tw-gradient-stops,${e5}))`)];
            }
            let n5 = e4(r4.modifier);
            if (!r4.value)
              return [T("--tw-gradient-position", n5), T("background-image", "conic-gradient(var(--tw-gradient-stops))")];
            let o5 = r4.value.value;
            return Ce(o5) ? (o5 = t4 ? `calc(${o5}deg * -1)` : `${o5}deg`, [T("--tw-gradient-position", `from ${o5} ${n5}`), T("background-image", "conic-gradient(var(--tw-gradient-stops))")]) : void 0;
          };
        }, a4 = ["oklab", "oklch", "srgb", "hsl", "longer", "shorter", "increasing", "decreasing"], i4 = /* @__PURE__ */ new Map([["to-t", "to top"], ["to-tr", "to top right"], ["to-r", "to right"], ["to-br", "to bottom right"], ["to-b", "to bottom"], ["to-bl", "to bottom left"], ["to-l", "to left"], ["to-tl", "to top left"]]);
        t3.functional("-bg-linear", n4({ negative: true })), t3.functional("bg-linear", n4({ negative: false })), r3("bg-linear", () => [{ values: [...i4.keys()], modifiers: a4 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: a4 }]), t3.functional("-bg-conic", o4({ negative: true })), t3.functional("bg-conic", o4({ negative: false })), r3("bg-conic", () => [{ hasDefaultValue: true, modifiers: a4 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: a4 }]), t3.functional("bg-radial", (t4) => {
          if (!t4.value)
            return [T("--tw-gradient-position", e4(t4.modifier)), T("background-image", "radial-gradient(var(--tw-gradient-stops))")];
          if ("arbitrary" === t4.value.kind) {
            if (t4.modifier)
              return;
            let e5 = t4.value.value;
            return [T("--tw-gradient-position", e5), T("background-image", `radial-gradient(var(--tw-gradient-stops,${e5}))`)];
          }
        }), r3("bg-radial", () => [{ hasDefaultValue: true, modifiers: a4 }]);
      }
      t3.functional("bg", (t4) => {
        if (t4.value) {
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            switch (t4.value.dataType ?? fe(r4, ["image", "color", "percentage", "position", "bg-size", "length", "url"])) {
              case "percentage":
              case "position":
                return t4.modifier ? void 0 : [T("background-position", r4)];
              case "bg-size":
              case "length":
              case "size":
                return t4.modifier ? void 0 : [T("background-size", r4)];
              case "image":
              case "url":
                return t4.modifier ? void 0 : [T("background-image", r4)];
              default:
                return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("background-color", r4)];
            }
          }
          {
            let r4 = Be(t4, e3, ["--background-color", "--color"]);
            if (r4)
              return [T("background-color", r4)];
          }
          {
            if (t4.modifier)
              return;
            let r4 = e3.resolve(t4.value.value, ["--background-image"]);
            if (r4)
              return [T("background-image", r4)];
          }
        }
      }), r3("bg", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: [], valueThemeKeys: ["--background-image"] }]);
      let h2 = () => K([De("--tw-gradient-position"), De("--tw-gradient-from", "#0000", "<color>"), De("--tw-gradient-via", "#0000", "<color>"), De("--tw-gradient-to", "#0000", "<color>"), De("--tw-gradient-stops"), De("--tw-gradient-via-stops"), De("--tw-gradient-from-position", "0%", "<length-percentage>"), De("--tw-gradient-via-position", "50%", "<length-percentage>"), De("--tw-gradient-to-position", "100%", "<length-percentage>")]);
      function m2(n4, o4) {
        t3.functional(n4, (t4) => {
          if (t4.value) {
            if ("arbitrary" === t4.value.kind) {
              let r4 = t4.value.value;
              switch (t4.value.dataType ?? fe(r4, ["color", "length", "percentage"])) {
                case "length":
                case "percentage":
                  return t4.modifier ? void 0 : o4.position(r4);
                default:
                  return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : o4.color(r4);
              }
            }
            {
              let r4 = Be(t4, e3, ["--background-color", "--color"]);
              if (r4)
                return o4.color(r4);
            }
            {
              if (t4.modifier)
                return;
              let r4 = e3.resolve(t4.value.value, ["--gradient-color-stop-positions"]);
              if (r4)
                return o4.position(r4);
              if ("%" === t4.value.value[t4.value.value.length - 1] && Ce(t4.value.value.slice(0, -1)))
                return o4.position(t4.value.value);
            }
          }
        }), r3(n4, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: Array.from({ length: 21 }, (e4, t4) => 5 * t4 + "%"), valueThemeKeys: ["--gradient-color-stop-positions"] }]);
      }
      m2("from", { color: (e4) => [h2(), T("--tw-sort", "--tw-gradient-from"), T("--tw-gradient-from", e4), T("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (e4) => [h2(), T("--tw-gradient-from-position", e4)] }), n3("via-none", [["--tw-gradient-via-stops", "initial"]]), m2("via", { color: (e4) => [h2(), T("--tw-sort", "--tw-gradient-via"), T("--tw-gradient-via", e4), T("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"), T("--tw-gradient-stops", "var(--tw-gradient-via-stops)")], position: (e4) => [h2(), T("--tw-gradient-via-position", e4)] }), m2("to", { color: (e4) => [h2(), T("--tw-sort", "--tw-gradient-to"), T("--tw-gradient-to", e4), T("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (e4) => [h2(), T("--tw-gradient-to-position", e4)] }), n3("mask-none", [["mask-image", "none"]]), t3.functional("mask", (e4) => {
        if (!e4.value || e4.modifier || "arbitrary" !== e4.value.kind)
          return;
        let t4 = e4.value.value;
        switch (e4.value.dataType ?? fe(t4, ["image", "percentage", "position", "bg-size", "length", "url"])) {
          case "percentage":
          case "position":
            return e4.modifier ? void 0 : [T("mask-position", t4)];
          case "bg-size":
          case "length":
          case "size":
            return [T("mask-size", t4)];
          default:
            return [T("mask-image", t4)];
        }
      }), n3("mask-add", [["mask-composite", "add"]]), n3("mask-subtract", [["mask-composite", "subtract"]]), n3("mask-intersect", [["mask-composite", "intersect"]]), n3("mask-exclude", [["mask-composite", "exclude"]]), n3("mask-alpha", [["mask-mode", "alpha"]]), n3("mask-luminance", [["mask-mode", "luminance"]]), n3("mask-match", [["mask-mode", "match-source"]]), n3("mask-type-alpha", [["mask-type", "alpha"]]), n3("mask-type-luminance", [["mask-type", "luminance"]]), n3("mask-auto", [["mask-size", "auto"]]), n3("mask-cover", [["mask-size", "cover"]]), n3("mask-contain", [["mask-size", "contain"]]), o3("mask-size", { handle(e4) {
        if (e4)
          return [T("mask-size", e4)];
      } }), n3("mask-top", [["mask-position", "top"]]), n3("mask-top-left", [["mask-position", "left top"]]), n3("mask-top-right", [["mask-position", "right top"]]), n3("mask-bottom", [["mask-position", "bottom"]]), n3("mask-bottom-left", [["mask-position", "left bottom"]]), n3("mask-bottom-right", [["mask-position", "right bottom"]]), n3("mask-left", [["mask-position", "left"]]), n3("mask-right", [["mask-position", "right"]]), n3("mask-center", [["mask-position", "center"]]), o3("mask-position", { handle(e4) {
        if (e4)
          return [T("mask-position", e4)];
      } }), n3("mask-repeat", [["mask-repeat", "repeat"]]), n3("mask-no-repeat", [["mask-repeat", "no-repeat"]]), n3("mask-repeat-x", [["mask-repeat", "repeat-x"]]), n3("mask-repeat-y", [["mask-repeat", "repeat-y"]]), n3("mask-repeat-round", [["mask-repeat", "round"]]), n3("mask-repeat-space", [["mask-repeat", "space"]]), n3("mask-clip-border", [["mask-clip", "border-box"]]), n3("mask-clip-padding", [["mask-clip", "padding-box"]]), n3("mask-clip-content", [["mask-clip", "content-box"]]), n3("mask-clip-fill", [["mask-clip", "fill-box"]]), n3("mask-clip-stroke", [["mask-clip", "stroke-box"]]), n3("mask-clip-view", [["mask-clip", "view-box"]]), n3("mask-no-clip", [["mask-clip", "no-clip"]]), n3("mask-origin-border", [["mask-origin", "border-box"]]), n3("mask-origin-padding", [["mask-origin", "padding-box"]]), n3("mask-origin-content", [["mask-origin", "content-box"]]), n3("mask-origin-fill", [["mask-origin", "fill-box"]]), n3("mask-origin-stroke", [["mask-origin", "stroke-box"]]), n3("mask-origin-view", [["mask-origin", "view-box"]]);
      let g2 = () => K([De("--tw-mask-linear", "linear-gradient(#fff, #fff)"), De("--tw-mask-radial", "linear-gradient(#fff, #fff)"), De("--tw-mask-conic", "linear-gradient(#fff, #fff)")]);
      function v2(n4, o4) {
        t3.functional(n4, (t4) => {
          if (t4.value) {
            if ("arbitrary" === t4.value.kind) {
              let r4 = t4.value.value;
              switch (t4.value.dataType ?? fe(r4, ["length", "percentage", "color"])) {
                case "color":
                  return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : o4.color(r4);
                case "percentage":
                  return t4.modifier || !Ce(r4.slice(0, -1)) ? void 0 : o4.position(r4);
                default:
                  return t4.modifier ? void 0 : o4.position(r4);
              }
            }
            {
              let r4 = Be(t4, e3, ["--background-color", "--color"]);
              if (r4)
                return o4.color(r4);
            }
            {
              if (t4.modifier)
                return;
              let r4 = fe(t4.value.value, ["number", "percentage"]);
              if (!r4)
                return;
              switch (r4) {
                case "number": {
                  let r5 = e3.resolve(null, ["--spacing"]);
                  return r5 && je(t4.value.value) ? o4.position(`calc(${r5} * ${t4.value.value})`) : void 0;
                }
                case "percentage":
                  return Ce(t4.value.value.slice(0, -1)) ? o4.position(t4.value.value) : void 0;
                default:
                  return;
              }
            }
          }
        }), r3(n4, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: Array.from({ length: 21 }, (e4, t4) => 5 * t4 + "%"), valueThemeKeys: ["--gradient-color-stop-positions"] }]), r3(n4, () => [{ values: Array.from({ length: 21 }, (e4, t4) => 5 * t4 + "%") }, { values: e3.get(["--spacing"]) ? We : [] }, { values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }]);
      }
      let w2 = () => K([De("--tw-mask-left", "linear-gradient(#fff, #fff)"), De("--tw-mask-right", "linear-gradient(#fff, #fff)"), De("--tw-mask-bottom", "linear-gradient(#fff, #fff)"), De("--tw-mask-top", "linear-gradient(#fff, #fff)")]);
      function k2(e4, t4, r4) {
        v2(e4, { color(e5) {
          let n4 = [g2(), w2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
          for (let o4 of ["top", "right", "bottom", "left"])
            r4[o4] && (n4.push(T(`--tw-mask-${o4}`, `linear-gradient(to ${o4}, var(--tw-mask-${o4}-from-color) var(--tw-mask-${o4}-from-position), var(--tw-mask-${o4}-to-color) var(--tw-mask-${o4}-to-position))`)), n4.push(K([De(`--tw-mask-${o4}-from-position`, "0%"), De(`--tw-mask-${o4}-to-position`, "100%"), De(`--tw-mask-${o4}-from-color`, "black"), De(`--tw-mask-${o4}-to-color`, "transparent")])), n4.push(T(`--tw-mask-${o4}-${t4}-color`, e5)));
          return n4;
        }, position(e5) {
          let n4 = [g2(), w2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
          for (let o4 of ["top", "right", "bottom", "left"])
            r4[o4] && (n4.push(T(`--tw-mask-${o4}`, `linear-gradient(to ${o4}, var(--tw-mask-${o4}-from-color) var(--tw-mask-${o4}-from-position), var(--tw-mask-${o4}-to-color) var(--tw-mask-${o4}-to-position))`)), n4.push(K([De(`--tw-mask-${o4}-from-position`, "0%"), De(`--tw-mask-${o4}-to-position`, "100%"), De(`--tw-mask-${o4}-from-color`, "black"), De(`--tw-mask-${o4}-to-color`, "transparent")])), n4.push(T(`--tw-mask-${o4}-${t4}-position`, e5)));
          return n4;
        } });
      }
      k2("mask-x-from", "from", { top: false, right: true, bottom: false, left: true }), k2("mask-x-to", "to", { top: false, right: true, bottom: false, left: true }), k2("mask-y-from", "from", { top: true, right: false, bottom: true, left: false }), k2("mask-y-to", "to", { top: true, right: false, bottom: true, left: false }), k2("mask-t-from", "from", { top: true, right: false, bottom: false, left: false }), k2("mask-t-to", "to", { top: true, right: false, bottom: false, left: false }), k2("mask-r-from", "from", { top: false, right: true, bottom: false, left: false }), k2("mask-r-to", "to", { top: false, right: true, bottom: false, left: false }), k2("mask-b-from", "from", { top: false, right: false, bottom: true, left: false }), k2("mask-b-to", "to", { top: false, right: false, bottom: true, left: false }), k2("mask-l-from", "from", { top: false, right: false, bottom: false, left: true }), k2("mask-l-to", "to", { top: false, right: false, bottom: false, left: true });
      let b2 = () => K([De("--tw-mask-linear-position", "0deg"), De("--tw-mask-linear-from-position", "0%"), De("--tw-mask-linear-to-position", "100%"), De("--tw-mask-linear-from-color", "black"), De("--tw-mask-linear-to-color", "transparent")]);
      o3("mask-linear", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue: (e4) => Ce(e4.value) ? `calc(1deg * ${e4.value})` : null, handleNegativeBareValue: (e4) => Ce(e4.value) ? `calc(1deg * -${e4.value})` : null, handle: (e4) => [g2(), b2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"), T("--tw-mask-linear-position", e4)] }), r3("mask-linear", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), v2("mask-linear-from", { color: (e4) => [g2(), b2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), T("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), T("--tw-mask-linear-from-color", e4)], position: (e4) => [g2(), b2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), T("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), T("--tw-mask-linear-from-position", e4)] }), v2("mask-linear-to", { color: (e4) => [g2(), b2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), T("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), T("--tw-mask-linear-to-color", e4)], position: (e4) => [g2(), b2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), T("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), T("--tw-mask-linear-to-position", e4)] });
      let y2 = () => K([De("--tw-mask-radial-from-position", "0%"), De("--tw-mask-radial-to-position", "100%"), De("--tw-mask-radial-from-color", "black"), De("--tw-mask-radial-to-color", "transparent"), De("--tw-mask-radial-shape", "ellipse"), De("--tw-mask-radial-size", "farthest-corner"), De("--tw-mask-radial-position", "center")]);
      n3("mask-circle", [["--tw-mask-radial-shape", "circle"]]), n3("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]), n3("mask-radial-closest-side", [["--tw-mask-radial-size", "closest-side"]]), n3("mask-radial-farthest-side", [["--tw-mask-radial-size", "farthest-side"]]), n3("mask-radial-closest-corner", [["--tw-mask-radial-size", "closest-corner"]]), n3("mask-radial-farthest-corner", [["--tw-mask-radial-size", "farthest-corner"]]), n3("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]), n3("mask-radial-at-top-left", [["--tw-mask-radial-position", "top left"]]), n3("mask-radial-at-top-right", [["--tw-mask-radial-position", "top right"]]), n3("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]), n3("mask-radial-at-bottom-left", [["--tw-mask-radial-position", "bottom left"]]), n3("mask-radial-at-bottom-right", [["--tw-mask-radial-position", "bottom right"]]), n3("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]), n3("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]), n3("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]), o3("mask-radial-at", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e4) => [T("--tw-mask-radial-position", e4)] }), o3("mask-radial", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e4) => [g2(), y2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"), T("--tw-mask-radial-size", e4)] }), v2("mask-radial-from", { color: (e4) => [g2(), y2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), T("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), T("--tw-mask-radial-from-color", e4)], position: (e4) => [g2(), y2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), T("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), T("--tw-mask-radial-from-position", e4)] }), v2("mask-radial-to", { color: (e4) => [g2(), y2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), T("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), T("--tw-mask-radial-to-color", e4)], position: (e4) => [g2(), y2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), T("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), T("--tw-mask-radial-to-position", e4)] });
      let x2 = () => K([De("--tw-mask-conic-position", "0deg"), De("--tw-mask-conic-from-position", "0%"), De("--tw-mask-conic-to-position", "100%"), De("--tw-mask-conic-from-color", "black"), De("--tw-mask-conic-to-color", "transparent")]);
      o3("mask-conic", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue: (e4) => Ce(e4.value) ? `calc(1deg * ${e4.value})` : null, handleNegativeBareValue: (e4) => Ce(e4.value) ? `calc(1deg * -${e4.value})` : null, handle: (e4) => [g2(), x2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"), T("--tw-mask-conic-position", e4)] }), r3("mask-conic", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), v2("mask-conic-from", { color: (e4) => [g2(), x2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), T("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), T("--tw-mask-conic-from-color", e4)], position: (e4) => [g2(), x2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), T("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), T("--tw-mask-conic-from-position", e4)] }), v2("mask-conic-to", { color: (e4) => [g2(), x2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), T("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), T("--tw-mask-conic-to-color", e4)], position: (e4) => [g2(), x2(), T("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), T("mask-composite", "intersect"), T("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), T("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), T("--tw-mask-conic-to-position", e4)] }), n3("box-decoration-slice", [["-webkit-box-decoration-break", "slice"], ["box-decoration-break", "slice"]]), n3("box-decoration-clone", [["-webkit-box-decoration-break", "clone"], ["box-decoration-break", "clone"]]), n3("bg-clip-text", [["background-clip", "text"]]), n3("bg-clip-border", [["background-clip", "border-box"]]), n3("bg-clip-padding", [["background-clip", "padding-box"]]), n3("bg-clip-content", [["background-clip", "content-box"]]), n3("bg-origin-border", [["background-origin", "border-box"]]), n3("bg-origin-padding", [["background-origin", "padding-box"]]), n3("bg-origin-content", [["background-origin", "content-box"]]);
      for (let e4 of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"])
        n3(`bg-blend-${e4}`, [["background-blend-mode", e4]]), n3(`mix-blend-${e4}`, [["mix-blend-mode", e4]]);
      n3("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]), n3("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]), n3("fill-none", [["fill", "none"]]), t3.functional("fill", (t4) => {
        if (!t4.value)
          return;
        if ("arbitrary" === t4.value.kind) {
          let r5 = Me(t4.value.value, t4.modifier, e3);
          return null === r5 ? void 0 : [T("fill", r5)];
        }
        let r4 = Be(t4, e3, ["--fill", "--color"]);
        return r4 ? [T("fill", r4)] : void 0;
      }), r3("fill", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--fill", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }]), n3("stroke-none", [["stroke", "none"]]), t3.functional("stroke", (t4) => {
        if (t4.value) {
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            switch (t4.value.dataType ?? fe(r4, ["color", "number", "length", "percentage"])) {
              case "number":
              case "length":
              case "percentage":
                return t4.modifier ? void 0 : [T("stroke-width", r4)];
              default:
                return r4 = Me(t4.value.value, t4.modifier, e3), null === r4 ? void 0 : [T("stroke", r4)];
            }
          }
          {
            let r4 = Be(t4, e3, ["--stroke", "--color"]);
            if (r4)
              return [T("stroke", r4)];
          }
          {
            let r4 = e3.resolve(t4.value.value, ["--stroke-width"]);
            if (r4)
              return [T("stroke-width", r4)];
            if (Ce(t4.value.value))
              return [T("stroke-width", t4.value.value)];
          }
        }
      }), r3("stroke", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--stroke", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] }]), n3("object-contain", [["object-fit", "contain"]]), n3("object-cover", [["object-fit", "cover"]]), n3("object-fill", [["object-fit", "fill"]]), n3("object-none", [["object-fit", "none"]]), n3("object-scale-down", [["object-fit", "scale-down"]]), o3("object", { themeKeys: ["--object-position"], handle: (e4) => [T("object-position", e4)], staticValues: { top: [T("object-position", "top")], "top-left": [T("object-position", "left top")], "top-right": [T("object-position", "right top")], bottom: [T("object-position", "bottom")], "bottom-left": [T("object-position", "left bottom")], "bottom-right": [T("object-position", "right bottom")], left: [T("object-position", "left")], right: [T("object-position", "right")], center: [T("object-position", "center")] } });
      for (let [e4, t4] of [["p", "padding"], ["px", "padding-inline"], ["py", "padding-block"], ["ps", "padding-inline-start"], ["pe", "padding-inline-end"], ["pt", "padding-top"], ["pr", "padding-right"], ["pb", "padding-bottom"], ["pl", "padding-left"]])
        i3(e4, ["--padding", "--spacing"], (e5) => [T(t4, e5)]);
      n3("text-left", [["text-align", "left"]]), n3("text-center", [["text-align", "center"]]), n3("text-right", [["text-align", "right"]]), n3("text-justify", [["text-align", "justify"]]), n3("text-start", [["text-align", "start"]]), n3("text-end", [["text-align", "end"]]), i3("indent", ["--text-indent", "--spacing"], (e4) => [T("text-indent", e4)], { supportsNegative: true }), n3("align-baseline", [["vertical-align", "baseline"]]), n3("align-top", [["vertical-align", "top"]]), n3("align-middle", [["vertical-align", "middle"]]), n3("align-bottom", [["vertical-align", "bottom"]]), n3("align-text-top", [["vertical-align", "text-top"]]), n3("align-text-bottom", [["vertical-align", "text-bottom"]]), n3("align-sub", [["vertical-align", "sub"]]), n3("align-super", [["vertical-align", "super"]]), o3("align", { themeKeys: [], handle: (e4) => [T("vertical-align", e4)] }), t3.functional("font", (t4) => {
        if (t4.value && !t4.modifier) {
          if ("arbitrary" === t4.value.kind) {
            let e4 = t4.value.value;
            switch (t4.value.dataType ?? fe(e4, ["number", "generic-name", "family-name"])) {
              case "generic-name":
              case "family-name":
                return [T("font-family", e4)];
              default:
                return [K([De("--tw-font-weight")]), T("--tw-font-weight", e4), T("font-weight", e4)];
            }
          }
          {
            let r4 = e3.resolveWith(t4.value.value, ["--font"], ["--font-feature-settings", "--font-variation-settings"]);
            if (r4) {
              let [e4, t5 = {}] = r4;
              return [T("font-family", e4), T("font-feature-settings", t5["--font-feature-settings"]), T("font-variation-settings", t5["--font-variation-settings"])];
            }
          }
          {
            let r4 = e3.resolve(t4.value.value, ["--font-weight"]);
            if (r4)
              return [K([De("--tw-font-weight")]), T("--tw-font-weight", r4), T("font-weight", r4)];
          }
        }
      }), r3("font", () => [{ values: [], valueThemeKeys: ["--font"] }, { values: [], valueThemeKeys: ["--font-weight"] }]), n3("uppercase", [["text-transform", "uppercase"]]), n3("lowercase", [["text-transform", "lowercase"]]), n3("capitalize", [["text-transform", "capitalize"]]), n3("normal-case", [["text-transform", "none"]]), n3("italic", [["font-style", "italic"]]), n3("not-italic", [["font-style", "normal"]]), n3("underline", [["text-decoration-line", "underline"]]), n3("overline", [["text-decoration-line", "overline"]]), n3("line-through", [["text-decoration-line", "line-through"]]), n3("no-underline", [["text-decoration-line", "none"]]), n3("font-stretch-normal", [["font-stretch", "normal"]]), n3("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]), n3("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]), n3("font-stretch-condensed", [["font-stretch", "condensed"]]), n3("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]), n3("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]), n3("font-stretch-expanded", [["font-stretch", "expanded"]]), n3("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]), n3("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]), o3("font-stretch", { handleBareValue: ({ value: e4 }) => {
        if (!e4.endsWith("%"))
          return null;
        let t4 = Number(e4.slice(0, -1));
        return !Ce(t4) || Number.isNaN(t4) || t4 < 50 || t4 > 200 ? null : e4;
      }, handle: (e4) => [T("font-stretch", e4)] }), r3("font-stretch", () => [{ values: ["50%", "75%", "90%", "95%", "100%", "105%", "110%", "125%", "150%", "200%"] }]), a3("placeholder", { themeKeys: ["--background-color", "--color"], handle: (e4) => [z("&::placeholder", [T("--tw-sort", "placeholder-color"), T("color", e4)])] }), n3("decoration-solid", [["text-decoration-style", "solid"]]), n3("decoration-double", [["text-decoration-style", "double"]]), n3("decoration-dotted", [["text-decoration-style", "dotted"]]), n3("decoration-dashed", [["text-decoration-style", "dashed"]]), n3("decoration-wavy", [["text-decoration-style", "wavy"]]), n3("decoration-auto", [["text-decoration-thickness", "auto"]]), n3("decoration-from-font", [["text-decoration-thickness", "from-font"]]), t3.functional("decoration", (t4) => {
        if (t4.value) {
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            switch (t4.value.dataType ?? fe(r4, ["color", "length", "percentage"])) {
              case "length":
              case "percentage":
                return t4.modifier ? void 0 : [T("text-decoration-thickness", r4)];
              default:
                return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("text-decoration-color", r4)];
            }
          }
          {
            let r4 = e3.resolve(t4.value.value, ["--text-decoration-thickness"]);
            if (r4)
              return t4.modifier ? void 0 : [T("text-decoration-thickness", r4)];
            if (Ce(t4.value.value))
              return t4.modifier ? void 0 : [T("text-decoration-thickness", `${t4.value.value}px`)];
          }
          {
            let r4 = Be(t4, e3, ["--text-decoration-color", "--color"]);
            if (r4)
              return [T("text-decoration-color", r4)];
          }
        }
      }), r3("decoration", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-decoration-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["0", "1", "2"], valueThemeKeys: ["--text-decoration-thickness"] }]), o3("animate", { themeKeys: ["--animate"], handle: (e4) => [T("animation", e4)], staticValues: { none: [T("animation", "none")] } });
      {
        let a4 = ["var(--tw-blur,)", "var(--tw-brightness,)", "var(--tw-contrast,)", "var(--tw-grayscale,)", "var(--tw-hue-rotate,)", "var(--tw-invert,)", "var(--tw-saturate,)", "var(--tw-sepia,)", "var(--tw-drop-shadow,)"].join(" "), i4 = ["var(--tw-backdrop-blur,)", "var(--tw-backdrop-brightness,)", "var(--tw-backdrop-contrast,)", "var(--tw-backdrop-grayscale,)", "var(--tw-backdrop-hue-rotate,)", "var(--tw-backdrop-invert,)", "var(--tw-backdrop-opacity,)", "var(--tw-backdrop-saturate,)", "var(--tw-backdrop-sepia,)"].join(" "), l3 = () => K([De("--tw-blur"), De("--tw-brightness"), De("--tw-contrast"), De("--tw-grayscale"), De("--tw-hue-rotate"), De("--tw-invert"), De("--tw-opacity"), De("--tw-saturate"), De("--tw-sepia"), De("--tw-drop-shadow"), De("--tw-drop-shadow-color"), De("--tw-drop-shadow-alpha", "100%", "<percentage>"), De("--tw-drop-shadow-size")]), s4 = () => K([De("--tw-backdrop-blur"), De("--tw-backdrop-brightness"), De("--tw-backdrop-contrast"), De("--tw-backdrop-grayscale"), De("--tw-backdrop-hue-rotate"), De("--tw-backdrop-invert"), De("--tw-backdrop-opacity"), De("--tw-backdrop-saturate"), De("--tw-backdrop-sepia")]);
        t3.functional("filter", (e4) => {
          if (!e4.modifier) {
            if (null === e4.value)
              return [l3(), T("filter", a4)];
            if ("arbitrary" === e4.value.kind)
              return [T("filter", e4.value.value)];
            if ("none" === e4.value.value)
              return [T("filter", "none")];
          }
        }), t3.functional("backdrop-filter", (e4) => {
          if (!e4.modifier) {
            if (null === e4.value)
              return [s4(), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)];
            if ("arbitrary" === e4.value.kind)
              return [T("-webkit-backdrop-filter", e4.value.value), T("backdrop-filter", e4.value.value)];
            if ("none" === e4.value.value)
              return [T("-webkit-backdrop-filter", "none"), T("backdrop-filter", "none")];
          }
        }), o3("blur", { themeKeys: ["--blur"], handle: (e4) => [l3(), T("--tw-blur", `blur(${e4})`), T("filter", a4)], staticValues: { none: [l3(), T("--tw-blur", " "), T("filter", a4)] } }), o3("backdrop-blur", { themeKeys: ["--backdrop-blur", "--blur"], handle: (e4) => [s4(), T("--tw-backdrop-blur", `blur(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)], staticValues: { none: [s4(), T("--tw-backdrop-blur", " "), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] } }), o3("brightness", { themeKeys: ["--brightness"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, handle: (e4) => [l3(), T("--tw-brightness", `brightness(${e4})`), T("filter", a4)] }), o3("backdrop-brightness", { themeKeys: ["--backdrop-brightness", "--brightness"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, handle: (e4) => [s4(), T("--tw-backdrop-brightness", `brightness(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--brightness"] }]), r3("backdrop-brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--backdrop-brightness", "--brightness"] }]), o3("contrast", { themeKeys: ["--contrast"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, handle: (e4) => [l3(), T("--tw-contrast", `contrast(${e4})`), T("filter", a4)] }), o3("backdrop-contrast", { themeKeys: ["--backdrop-contrast", "--contrast"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, handle: (e4) => [s4(), T("--tw-backdrop-contrast", `contrast(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--contrast"] }]), r3("backdrop-contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--backdrop-contrast", "--contrast"] }]), o3("grayscale", { themeKeys: ["--grayscale"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, defaultValue: "100%", handle: (e4) => [l3(), T("--tw-grayscale", `grayscale(${e4})`), T("filter", a4)] }), o3("backdrop-grayscale", { themeKeys: ["--backdrop-grayscale", "--grayscale"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, defaultValue: "100%", handle: (e4) => [s4(), T("--tw-backdrop-grayscale", `grayscale(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--grayscale"], hasDefaultValue: true }]), r3("backdrop-grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-grayscale", "--grayscale"], hasDefaultValue: true }]), o3("hue-rotate", { supportsNegative: true, themeKeys: ["--hue-rotate"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}deg` : null, handle: (e4) => [l3(), T("--tw-hue-rotate", `hue-rotate(${e4})`), T("filter", a4)] }), o3("backdrop-hue-rotate", { supportsNegative: true, themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}deg` : null, handle: (e4) => [s4(), T("--tw-backdrop-hue-rotate", `hue-rotate(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--hue-rotate"] }]), r3("backdrop-hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"] }]), o3("invert", { themeKeys: ["--invert"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, defaultValue: "100%", handle: (e4) => [l3(), T("--tw-invert", `invert(${e4})`), T("filter", a4)] }), o3("backdrop-invert", { themeKeys: ["--backdrop-invert", "--invert"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, defaultValue: "100%", handle: (e4) => [s4(), T("--tw-backdrop-invert", `invert(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--invert"], hasDefaultValue: true }]), r3("backdrop-invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-invert", "--invert"], hasDefaultValue: true }]), o3("saturate", { themeKeys: ["--saturate"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, handle: (e4) => [l3(), T("--tw-saturate", `saturate(${e4})`), T("filter", a4)] }), o3("backdrop-saturate", { themeKeys: ["--backdrop-saturate", "--saturate"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, handle: (e4) => [s4(), T("--tw-backdrop-saturate", `saturate(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--saturate"] }]), r3("backdrop-saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--backdrop-saturate", "--saturate"] }]), o3("sepia", { themeKeys: ["--sepia"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, defaultValue: "100%", handle: (e4) => [l3(), T("--tw-sepia", `sepia(${e4})`), T("filter", a4)] }), o3("backdrop-sepia", { themeKeys: ["--backdrop-sepia", "--sepia"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}%` : null, defaultValue: "100%", handle: (e4) => [s4(), T("--tw-backdrop-sepia", `sepia(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--sepia"], hasDefaultValue: true }]), r3("backdrop-sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--backdrop-sepia", "--sepia"], hasDefaultValue: true }]), n3("drop-shadow-none", [l3, ["--tw-drop-shadow", " "], ["filter", a4]]), t3.functional("drop-shadow", (t4) => {
          let r4;
          if (t4.modifier && ("arbitrary" === t4.modifier.kind ? r4 = t4.modifier.value : Ce(t4.modifier.value) && (r4 = `${t4.modifier.value}%`)), !t4.value) {
            let t5 = e3.get(["--drop-shadow"]), n4 = e3.resolve(null, ["--drop-shadow"]);
            return null === t5 || null === n4 ? void 0 : [l3(), T("--tw-drop-shadow-alpha", r4), ...Ze("--tw-drop-shadow-size", t5, r4, (e4) => `var(--tw-drop-shadow-color, ${e4})`), T("--tw-drop-shadow", Z(n4, ",").map((e4) => `drop-shadow(${e4})`).join(" ")), T("filter", a4)];
          }
          if ("arbitrary" === t4.value.kind) {
            let n4 = t4.value.value;
            return "color" === (t4.value.dataType ?? fe(n4, ["color"])) ? (n4 = Me(n4, t4.modifier, e3), null === n4 ? void 0 : [l3(), T("--tw-drop-shadow-color", _e(n4, "var(--tw-drop-shadow-alpha)")), T("--tw-drop-shadow", "var(--tw-drop-shadow-size)")]) : t4.modifier && !r4 ? void 0 : [l3(), T("--tw-drop-shadow-alpha", r4), ...Ze("--tw-drop-shadow-size", n4, r4, (e4) => `var(--tw-drop-shadow-color, ${e4})`), T("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), T("filter", a4)];
          }
          {
            let n4 = e3.get([`--drop-shadow-${t4.value.value}`]), o4 = e3.resolve(t4.value.value, ["--drop-shadow"]);
            if (n4 && o4)
              return t4.modifier && !r4 ? void 0 : r4 ? [l3(), T("--tw-drop-shadow-alpha", r4), ...Ze("--tw-drop-shadow-size", n4, r4, (e4) => `var(--tw-drop-shadow-color, ${e4})`), T("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), T("filter", a4)] : [l3(), T("--tw-drop-shadow-alpha", r4), ...Ze("--tw-drop-shadow-size", n4, r4, (e4) => `var(--tw-drop-shadow-color, ${e4})`), T("--tw-drop-shadow", Z(o4, ",").map((e4) => `drop-shadow(${e4})`).join(" ")), T("filter", a4)];
          }
          {
            let r5 = Be(t4, e3, ["--drop-shadow-color", "--color"]);
            if (r5)
              return "inherit" === r5 ? [l3(), T("--tw-drop-shadow-color", "inherit"), T("--tw-drop-shadow", "var(--tw-drop-shadow-size)")] : [l3(), T("--tw-drop-shadow-color", _e(r5, "var(--tw-drop-shadow-alpha)")), T("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
          }
        }), r3("drop-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--drop-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { valueThemeKeys: ["--drop-shadow"] }]), o3("backdrop-opacity", { themeKeys: ["--backdrop-opacity", "--opacity"], handleBareValue: ({ value: e4 }) => Ve(e4) ? `${e4}%` : null, handle: (e4) => [s4(), T("--tw-backdrop-opacity", `opacity(${e4})`), T("-webkit-backdrop-filter", i4), T("backdrop-filter", i4)] }), r3("backdrop-opacity", () => [{ values: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), valueThemeKeys: ["--backdrop-opacity", "--opacity"] }]);
      }
      {
        let a4 = `var(--tw-ease, ${e3.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`, i4 = `var(--tw-duration, ${e3.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
        o3("transition", { defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events", themeKeys: ["--transition-property"], handle: (e4) => [T("transition-property", e4), T("transition-timing-function", a4), T("transition-duration", i4)], staticValues: { none: [T("transition-property", "none")], all: [T("transition-property", "all"), T("transition-timing-function", a4), T("transition-duration", i4)], colors: [T("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"), T("transition-timing-function", a4), T("transition-duration", i4)], opacity: [T("transition-property", "opacity"), T("transition-timing-function", a4), T("transition-duration", i4)], shadow: [T("transition-property", "box-shadow"), T("transition-timing-function", a4), T("transition-duration", i4)], transform: [T("transition-property", "transform, translate, scale, rotate"), T("transition-timing-function", a4), T("transition-duration", i4)] } }), n3("transition-discrete", [["transition-behavior", "allow-discrete"]]), n3("transition-normal", [["transition-behavior", "normal"]]), o3("delay", { handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}ms` : null, themeKeys: ["--transition-delay"], handle: (e4) => [T("transition-delay", e4)] });
        {
          let r4 = () => K([De("--tw-duration")]);
          n3("duration-initial", [r4, ["--tw-duration", "initial"]]), t3.functional("duration", (t4) => {
            if (t4.modifier || !t4.value)
              return;
            let n4 = null;
            return "arbitrary" === t4.value.kind ? n4 = t4.value.value : (n4 = e3.resolve(t4.value.fraction ?? t4.value.value, ["--transition-duration"]), null === n4 && Ce(t4.value.value) && (n4 = `${t4.value.value}ms`)), null !== n4 ? [r4(), T("--tw-duration", n4), T("transition-duration", n4)] : void 0;
          });
        }
        r3("delay", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-delay"] }]), r3("duration", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-duration"] }]);
      }
      {
        let e4 = () => K([De("--tw-ease")]);
        o3("ease", { themeKeys: ["--ease"], handle: (t4) => [e4(), T("--tw-ease", t4), T("transition-timing-function", t4)], staticValues: { initial: [e4(), T("--tw-ease", "initial")], linear: [e4(), T("--tw-ease", "linear"), T("transition-timing-function", "linear")] } });
      }
      n3("will-change-auto", [["will-change", "auto"]]), n3("will-change-scroll", [["will-change", "scroll-position"]]), n3("will-change-contents", [["will-change", "contents"]]), n3("will-change-transform", [["will-change", "transform"]]), o3("will-change", { themeKeys: [], handle: (e4) => [T("will-change", e4)] }), n3("content-none", [["--tw-content", "none"], ["content", "none"]]), o3("content", { themeKeys: ["--content"], handle: (e4) => [K([De("--tw-content", '""')]), T("--tw-content", e4), T("content", "var(--tw-content)")] });
      {
        let e4 = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", t4 = () => K([De("--tw-contain-size"), De("--tw-contain-layout"), De("--tw-contain-paint"), De("--tw-contain-style")]);
        n3("contain-none", [["contain", "none"]]), n3("contain-content", [["contain", "content"]]), n3("contain-strict", [["contain", "strict"]]), n3("contain-size", [t4, ["--tw-contain-size", "size"], ["contain", e4]]), n3("contain-inline-size", [t4, ["--tw-contain-size", "inline-size"], ["contain", e4]]), n3("contain-layout", [t4, ["--tw-contain-layout", "layout"], ["contain", e4]]), n3("contain-paint", [t4, ["--tw-contain-paint", "paint"], ["contain", e4]]), n3("contain-style", [t4, ["--tw-contain-style", "style"], ["contain", e4]]), o3("contain", { themeKeys: [], handle: (e5) => [T("contain", e5)] });
      }
      n3("forced-color-adjust-none", [["forced-color-adjust", "none"]]), n3("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]), i3("leading", ["--leading", "--spacing"], (e4) => [K([De("--tw-leading")]), T("--tw-leading", e4), T("line-height", e4)], { staticValues: { none: [K([De("--tw-leading")]), T("--tw-leading", "1"), T("line-height", "1")] } }), o3("tracking", { supportsNegative: true, themeKeys: ["--tracking"], handle: (e4) => [K([De("--tw-tracking")]), T("--tw-tracking", e4), T("letter-spacing", e4)] }), n3("antialiased", [["-webkit-font-smoothing", "antialiased"], ["-moz-osx-font-smoothing", "grayscale"]]), n3("subpixel-antialiased", [["-webkit-font-smoothing", "auto"], ["-moz-osx-font-smoothing", "auto"]]);
      {
        let e4 = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", t4 = () => K([De("--tw-ordinal"), De("--tw-slashed-zero"), De("--tw-numeric-figure"), De("--tw-numeric-spacing"), De("--tw-numeric-fraction")]);
        n3("normal-nums", [["font-variant-numeric", "normal"]]), n3("ordinal", [t4, ["--tw-ordinal", "ordinal"], ["font-variant-numeric", e4]]), n3("slashed-zero", [t4, ["--tw-slashed-zero", "slashed-zero"], ["font-variant-numeric", e4]]), n3("lining-nums", [t4, ["--tw-numeric-figure", "lining-nums"], ["font-variant-numeric", e4]]), n3("oldstyle-nums", [t4, ["--tw-numeric-figure", "oldstyle-nums"], ["font-variant-numeric", e4]]), n3("proportional-nums", [t4, ["--tw-numeric-spacing", "proportional-nums"], ["font-variant-numeric", e4]]), n3("tabular-nums", [t4, ["--tw-numeric-spacing", "tabular-nums"], ["font-variant-numeric", e4]]), n3("diagonal-fractions", [t4, ["--tw-numeric-fraction", "diagonal-fractions"], ["font-variant-numeric", e4]]), n3("stacked-fractions", [t4, ["--tw-numeric-fraction", "stacked-fractions"], ["font-variant-numeric", e4]]);
      }
      {
        let a4 = () => K([De("--tw-outline-style", "solid")]);
        t3.static("outline-hidden", () => [T("--tw-outline-style", "none"), T("outline-style", "none"), S("@media", "(forced-colors: active)", [T("outline", "2px solid transparent"), T("outline-offset", "2px")])]), n3("outline-none", [["--tw-outline-style", "none"], ["outline-style", "none"]]), n3("outline-solid", [["--tw-outline-style", "solid"], ["outline-style", "solid"]]), n3("outline-dashed", [["--tw-outline-style", "dashed"], ["outline-style", "dashed"]]), n3("outline-dotted", [["--tw-outline-style", "dotted"], ["outline-style", "dotted"]]), n3("outline-double", [["--tw-outline-style", "double"], ["outline-style", "double"]]), t3.functional("outline", (t4) => {
          if (null === t4.value) {
            if (t4.modifier)
              return;
            let r4 = e3.get(["--default-outline-width"]) ?? "1px";
            return [a4(), T("outline-style", "var(--tw-outline-style)"), T("outline-width", r4)];
          }
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            switch (t4.value.dataType ?? fe(r4, ["color", "length", "number", "percentage"])) {
              case "length":
              case "number":
              case "percentage":
                return t4.modifier ? void 0 : [a4(), T("outline-style", "var(--tw-outline-style)"), T("outline-width", r4)];
              default:
                return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("outline-color", r4)];
            }
          }
          {
            let r4 = Be(t4, e3, ["--outline-color", "--color"]);
            if (r4)
              return [T("outline-color", r4)];
          }
          {
            if (t4.modifier)
              return;
            let r4 = e3.resolve(t4.value.value, ["--outline-width"]);
            if (r4)
              return [a4(), T("outline-style", "var(--tw-outline-style)"), T("outline-width", r4)];
            if (Ce(t4.value.value))
              return [a4(), T("outline-style", "var(--tw-outline-style)"), T("outline-width", `${t4.value.value}px`)];
          }
        }), r3("outline", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--outline-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), hasDefaultValue: true }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-width"] }]), o3("outline-offset", { supportsNegative: true, themeKeys: ["--outline-offset"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}px` : null, handle: (e4) => [T("outline-offset", e4)] }), r3("outline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-offset"] }]);
      }
      o3("opacity", { themeKeys: ["--opacity"], handleBareValue: ({ value: e4 }) => Ve(e4) ? `${e4}%` : null, handle: (e4) => [T("opacity", e4)] }), r3("opacity", () => [{ values: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), valueThemeKeys: ["--opacity"] }]), o3("underline-offset", { supportsNegative: true, themeKeys: ["--text-underline-offset"], handleBareValue: ({ value: e4 }) => Ce(e4) ? `${e4}px` : null, handle: (e4) => [T("text-underline-offset", e4)], staticValues: { auto: [T("text-underline-offset", "auto")] } }), r3("underline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--text-underline-offset"] }]), t3.functional("text", (t4) => {
        if (t4.value) {
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            switch (t4.value.dataType ?? fe(r4, ["color", "length", "percentage", "absolute-size", "relative-size"])) {
              case "size":
              case "length":
              case "percentage":
              case "absolute-size":
              case "relative-size":
                if (t4.modifier) {
                  let n4 = "arbitrary" === t4.modifier.kind ? t4.modifier.value : e3.resolve(t4.modifier.value, ["--leading"]);
                  if (!n4 && je(t4.modifier.value)) {
                    let r5 = e3.resolve(null, ["--spacing"]);
                    if (!r5)
                      return null;
                    n4 = `calc(${r5} * ${t4.modifier.value})`;
                  }
                  return !n4 && "none" === t4.modifier.value && (n4 = "1"), n4 ? [T("font-size", r4), T("line-height", n4)] : null;
                }
                return [T("font-size", r4)];
              default:
                return r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("color", r4)];
            }
          }
          {
            let r4 = Be(t4, e3, ["--text-color", "--color"]);
            if (r4)
              return [T("color", r4)];
          }
          {
            let r4 = e3.resolveWith(t4.value.value, ["--text"], ["--line-height", "--letter-spacing", "--font-weight"]);
            if (r4) {
              let [n4, o4 = {}] = Array.isArray(r4) ? r4 : [r4];
              if (t4.modifier) {
                let r5 = "arbitrary" === t4.modifier.kind ? t4.modifier.value : e3.resolve(t4.modifier.value, ["--leading"]);
                if (!r5 && je(t4.modifier.value)) {
                  let n5 = e3.resolve(null, ["--spacing"]);
                  if (!n5)
                    return null;
                  r5 = `calc(${n5} * ${t4.modifier.value})`;
                }
                if (!r5 && "none" === t4.modifier.value && (r5 = "1"), !r5)
                  return null;
                let o5 = [T("font-size", n4)];
                return r5 && o5.push(T("line-height", r5)), o5;
              }
              return "string" == typeof o4 ? [T("font-size", n4), T("line-height", o4)] : [T("font-size", n4), T("line-height", o4["--line-height"] ? `var(--tw-leading, ${o4["--line-height"]})` : void 0), T("letter-spacing", o4["--letter-spacing"] ? `var(--tw-tracking, ${o4["--letter-spacing"]})` : void 0), T("font-weight", o4["--font-weight"] ? `var(--tw-font-weight, ${o4["--font-weight"]})` : void 0)];
            }
          }
        }
      }), r3("text", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: [], valueThemeKeys: ["--text"], modifiers: [], modifierThemeKeys: ["--leading"] }]);
      let $2 = () => K([De("--tw-text-shadow-color"), De("--tw-text-shadow-alpha", "100%", "<percentage>")]);
      n3("text-shadow-initial", [$2, ["--tw-text-shadow-color", "initial"]]), t3.functional("text-shadow", (t4) => {
        let r4;
        if (t4.modifier && ("arbitrary" === t4.modifier.kind ? r4 = t4.modifier.value : Ce(t4.modifier.value) && (r4 = `${t4.modifier.value}%`)), !t4.value) {
          let t5 = e3.get(["--text-shadow"]);
          return null === t5 ? void 0 : [$2(), T("--tw-text-shadow-alpha", r4), ...He("text-shadow", t5, r4, (e4) => `var(--tw-text-shadow-color, ${e4})`)];
        }
        if ("arbitrary" === t4.value.kind) {
          let n4 = t4.value.value;
          return "color" === (t4.value.dataType ?? fe(n4, ["color"])) ? (n4 = Me(n4, t4.modifier, e3), null === n4 ? void 0 : [$2(), T("--tw-text-shadow-color", _e(n4, "var(--tw-text-shadow-alpha)"))]) : [$2(), T("--tw-text-shadow-alpha", r4), ...He("text-shadow", n4, r4, (e4) => `var(--tw-text-shadow-color, ${e4})`)];
        }
        switch (t4.value.value) {
          case "none":
            return t4.modifier ? void 0 : [$2(), T("text-shadow", "none")];
          case "inherit":
            return t4.modifier ? void 0 : [$2(), T("--tw-text-shadow-color", "inherit")];
        }
        {
          let n4 = e3.get([`--text-shadow-${t4.value.value}`]);
          if (n4)
            return [$2(), T("--tw-text-shadow-alpha", r4), ...He("text-shadow", n4, r4, (e4) => `var(--tw-text-shadow-color, ${e4})`)];
        }
        {
          let r5 = Be(t4, e3, ["--text-shadow-color", "--color"]);
          if (r5)
            return [$2(), T("--tw-text-shadow-color", _e(r5, "var(--tw-text-shadow-alpha)"))];
        }
      }), r3("text-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["none"] }, { valueThemeKeys: ["--text-shadow"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), hasDefaultValue: null !== e3.get(["--text-shadow"]) }]);
      {
        let o4 = function(e4) {
          return `var(--tw-ring-inset,) 0 0 0 calc(${e4} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${c4})`;
        }, a4 = function(e4) {
          return `inset 0 0 0 ${e4} var(--tw-inset-ring-color, currentcolor)`;
        }, i4 = ["var(--tw-inset-shadow)", "var(--tw-inset-ring-shadow)", "var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow)"].join(", "), l3 = "0 0 #0000", s4 = () => K([De("--tw-shadow", l3), De("--tw-shadow-color"), De("--tw-shadow-alpha", "100%", "<percentage>"), De("--tw-inset-shadow", l3), De("--tw-inset-shadow-color"), De("--tw-inset-shadow-alpha", "100%", "<percentage>"), De("--tw-ring-color"), De("--tw-ring-shadow", l3), De("--tw-inset-ring-color"), De("--tw-inset-ring-shadow", l3), De("--tw-ring-inset"), De("--tw-ring-offset-width", "0px", "<length>"), De("--tw-ring-offset-color", "#fff"), De("--tw-ring-offset-shadow", l3)]);
        n3("shadow-initial", [s4, ["--tw-shadow-color", "initial"]]), t3.functional("shadow", (t4) => {
          let r4;
          if (t4.modifier && ("arbitrary" === t4.modifier.kind ? r4 = t4.modifier.value : Ce(t4.modifier.value) && (r4 = `${t4.modifier.value}%`)), !t4.value) {
            let t5 = e3.get(["--shadow"]);
            return null === t5 ? void 0 : [s4(), T("--tw-shadow-alpha", r4), ...He("--tw-shadow", t5, r4, (e4) => `var(--tw-shadow-color, ${e4})`), T("box-shadow", i4)];
          }
          if ("arbitrary" === t4.value.kind) {
            let n4 = t4.value.value;
            return "color" === (t4.value.dataType ?? fe(n4, ["color"])) ? (n4 = Me(n4, t4.modifier, e3), null === n4 ? void 0 : [s4(), T("--tw-shadow-color", _e(n4, "var(--tw-shadow-alpha)"))]) : [s4(), T("--tw-shadow-alpha", r4), ...He("--tw-shadow", n4, r4, (e4) => `var(--tw-shadow-color, ${e4})`), T("box-shadow", i4)];
          }
          switch (t4.value.value) {
            case "none":
              return t4.modifier ? void 0 : [s4(), T("--tw-shadow", l3), T("box-shadow", i4)];
            case "inherit":
              return t4.modifier ? void 0 : [s4(), T("--tw-shadow-color", "inherit")];
          }
          {
            let n4 = e3.get([`--shadow-${t4.value.value}`]);
            if (n4)
              return [s4(), T("--tw-shadow-alpha", r4), ...He("--tw-shadow", n4, r4, (e4) => `var(--tw-shadow-color, ${e4})`), T("box-shadow", i4)];
          }
          {
            let r5 = Be(t4, e3, ["--box-shadow-color", "--color"]);
            if (r5)
              return [s4(), T("--tw-shadow-color", _e(r5, "var(--tw-shadow-alpha)"))];
          }
        }), r3("shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["none"] }, { valueThemeKeys: ["--shadow"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), hasDefaultValue: null !== e3.get(["--shadow"]) }]), n3("inset-shadow-initial", [s4, ["--tw-inset-shadow-color", "initial"]]), t3.functional("inset-shadow", (t4) => {
          let r4;
          if (t4.modifier && ("arbitrary" === t4.modifier.kind ? r4 = t4.modifier.value : Ce(t4.modifier.value) && (r4 = `${t4.modifier.value}%`)), !t4.value) {
            let t5 = e3.get(["--inset-shadow"]);
            return null === t5 ? void 0 : [s4(), T("--tw-inset-shadow-alpha", r4), ...He("--tw-inset-shadow", t5, r4, (e4) => `var(--tw-inset-shadow-color, ${e4})`), T("box-shadow", i4)];
          }
          if ("arbitrary" === t4.value.kind) {
            let n4 = t4.value.value;
            return "color" === (t4.value.dataType ?? fe(n4, ["color"])) ? (n4 = Me(n4, t4.modifier, e3), null === n4 ? void 0 : [s4(), T("--tw-inset-shadow-color", _e(n4, "var(--tw-inset-shadow-alpha)"))]) : [s4(), T("--tw-inset-shadow-alpha", r4), ...He("--tw-inset-shadow", n4, r4, (e4) => `var(--tw-inset-shadow-color, ${e4})`, "inset "), T("box-shadow", i4)];
          }
          switch (t4.value.value) {
            case "none":
              return t4.modifier ? void 0 : [s4(), T("--tw-inset-shadow", l3), T("box-shadow", i4)];
            case "inherit":
              return t4.modifier ? void 0 : [s4(), T("--tw-inset-shadow-color", "inherit")];
          }
          {
            let n4 = e3.get([`--inset-shadow-${t4.value.value}`]);
            if (n4)
              return [s4(), T("--tw-inset-shadow-alpha", r4), ...He("--tw-inset-shadow", n4, r4, (e4) => `var(--tw-inset-shadow-color, ${e4})`), T("box-shadow", i4)];
          }
          {
            let r5 = Be(t4, e3, ["--box-shadow-color", "--color"]);
            if (r5)
              return [s4(), T("--tw-inset-shadow-color", _e(r5, "var(--tw-inset-shadow-alpha)"))];
          }
        }), r3("inset-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["none"] }, { valueThemeKeys: ["--inset-shadow"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4), hasDefaultValue: null !== e3.get(["--inset-shadow"]) }]), n3("ring-inset", [s4, ["--tw-ring-inset", "inset"]]);
        let c4 = e3.get(["--default-ring-color"]) ?? "currentcolor";
        t3.functional("ring", (t4) => {
          if (!t4.value) {
            if (t4.modifier)
              return;
            let r4 = e3.get(["--default-ring-width"]) ?? "1px";
            return [s4(), T("--tw-ring-shadow", o4(r4)), T("box-shadow", i4)];
          }
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            return "length" === (t4.value.dataType ?? fe(r4, ["color", "length"])) ? t4.modifier ? void 0 : [s4(), T("--tw-ring-shadow", o4(r4)), T("box-shadow", i4)] : (r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("--tw-ring-color", r4)]);
          }
          {
            let r4 = Be(t4, e3, ["--ring-color", "--color"]);
            if (r4)
              return [T("--tw-ring-color", r4)];
          }
          {
            if (t4.modifier)
              return;
            let r4 = e3.resolve(t4.value.value, ["--ring-width"]);
            if (null === r4 && Ce(t4.value.value) && (r4 = `${t4.value.value}px`), r4)
              return [s4(), T("--tw-ring-shadow", o4(r4)), T("box-shadow", i4)];
          }
        }), r3("ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]), t3.functional("inset-ring", (t4) => {
          if (!t4.value)
            return t4.modifier ? void 0 : [s4(), T("--tw-inset-ring-shadow", a4("1px")), T("box-shadow", i4)];
          if ("arbitrary" === t4.value.kind) {
            let r4 = t4.value.value;
            return "length" === (t4.value.dataType ?? fe(r4, ["color", "length"])) ? t4.modifier ? void 0 : [s4(), T("--tw-inset-ring-shadow", a4(r4)), T("box-shadow", i4)] : (r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("--tw-inset-ring-color", r4)]);
          }
          {
            let r4 = Be(t4, e3, ["--ring-color", "--color"]);
            if (r4)
              return [T("--tw-inset-ring-color", r4)];
          }
          {
            if (t4.modifier)
              return;
            let r4 = e3.resolve(t4.value.value, ["--ring-width"]);
            if (null === r4 && Ce(t4.value.value) && (r4 = `${t4.value.value}px`), r4)
              return [s4(), T("--tw-inset-ring-shadow", a4(r4)), T("box-shadow", i4)];
          }
        }), r3("inset-ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]);
        let u4 = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
        t3.functional("ring-offset", (t4) => {
          if (t4.value) {
            if ("arbitrary" === t4.value.kind) {
              let r4 = t4.value.value;
              return "length" === (t4.value.dataType ?? fe(r4, ["color", "length"])) ? t4.modifier ? void 0 : [T("--tw-ring-offset-width", r4), T("--tw-ring-offset-shadow", u4)] : (r4 = Me(r4, t4.modifier, e3), null === r4 ? void 0 : [T("--tw-ring-offset-color", r4)]);
            }
            {
              let r4 = e3.resolve(t4.value.value, ["--ring-offset-width"]);
              if (r4)
                return t4.modifier ? void 0 : [T("--tw-ring-offset-width", r4), T("--tw-ring-offset-shadow", u4)];
              if (Ce(t4.value.value))
                return t4.modifier ? void 0 : [T("--tw-ring-offset-width", `${t4.value.value}px`), T("--tw-ring-offset-shadow", u4)];
            }
            {
              let r4 = Be(t4, e3, ["--ring-offset-color", "--color"]);
              if (r4)
                return [T("--tw-ring-offset-color", r4)];
            }
          }
        });
      }
      return r3("ring-offset", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-offset-color", "--color"], modifiers: Array.from({ length: 21 }, (e4, t4) => "" + 5 * t4) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-offset-width"] }]), t3.functional("@container", (e4) => {
        let t4 = null;
        if (null === e4.value ? t4 = "inline-size" : "arbitrary" === e4.value.kind ? t4 = e4.value.value : "named" === e4.value.kind && "normal" === e4.value.value && (t4 = "normal"), null !== t4)
          return e4.modifier ? [T("container-type", t4), T("container-name", e4.modifier.value)] : [T("container-type", t4)];
      }), r3("@container", () => [{ values: ["normal"], valueThemeKeys: [], hasDefaultValue: true }]), t3;
    }(e2), n2 = function(e3) {
      let t3 = new et();
      function r3(e4, r4, { compounds: n4 } = {}) {
        n4 = n4 ?? tt(r4), t3.static(e4, (e5) => {
          e5.nodes = r4.map((t4) => C(t4, e5.nodes));
        }, { compounds: n4 });
      }
      function n3(e4, t4) {
        return t4.map((t5) => {
          let r4 = Z(t5 = t5.trim(), " ");
          return "not" === r4[0] ? r4.slice(1).join(" ") : "@container" === e4 ? "(" === r4[0][0] ? `not ${t5}` : "not" === r4[1] ? `${r4[0]} ${r4.slice(2).join(" ")}` : `${r4[0]} not ${r4.slice(1).join(" ")}` : `not ${t5}`;
        });
      }
      r3("*", [":is(& > *)"], { compounds: 0 }), r3("**", [":is(& *)"], { compounds: 0 });
      let o3 = ["@media", "@supports", "@container"];
      function a3(e4) {
        for (let t4 of o3) {
          if (t4 !== e4.name)
            continue;
          let r4 = Z(e4.params, ",");
          return r4.length > 1 ? null : (r4 = n3(e4.name, r4), S(e4.name, r4.join(", ")));
        }
        return null;
      }
      function i3(e4) {
        return e4.includes("::") ? null : `&:not(${Z(e4, ",").map((e5) => e5.replaceAll("&", "*")).join(", ")})`;
      }
      t3.compound("not", 3, (e4, t4) => {
        if ("arbitrary" === t4.variant.kind && t4.variant.relative || t4.modifier)
          return null;
        let r4 = false;
        return y([e4], (t5, n4) => {
          if ("rule" !== t5.kind && "at-rule" !== t5.kind)
            return b.Continue;
          if (t5.nodes.length > 0)
            return b.Continue;
          let o4 = [], l2 = [], s3 = n4.path();
          s3.push(t5);
          for (let e5 of s3)
            "at-rule" === e5.kind ? o4.push(e5) : "rule" === e5.kind && l2.push(e5);
          if (o4.length > 1)
            return b.Stop;
          if (l2.length > 1)
            return b.Stop;
          let c3 = [];
          for (let e5 of l2) {
            let t6 = i3(e5.selector);
            if (!t6)
              return r4 = false, b.Stop;
            c3.push(z(t6, []));
          }
          for (let e5 of o4) {
            let t6 = a3(e5);
            if (!t6)
              return r4 = false, b.Stop;
            c3.push(t6);
          }
          return Object.assign(e4, z("&", c3)), r4 = true, b.Skip;
        }), "rule" === e4.kind && "&" === e4.selector && 1 === e4.nodes.length && Object.assign(e4, e4.nodes[0]), r4 ? void 0 : null;
      }), t3.suggest("not", () => Array.from(t3.keys()).filter((e4) => t3.compoundsWith("not", e4))), t3.compound("group", 2, (t4, r4) => {
        if ("arbitrary" === r4.variant.kind && r4.variant.relative)
          return null;
        let n4 = r4.modifier ? `:where(.${e3.prefix ? `${e3.prefix}\\:` : ""}group\\/${r4.modifier.value})` : `:where(.${e3.prefix ? `${e3.prefix}\\:` : ""}group)`, o4 = false;
        return y([t4], (e4, t5) => {
          if ("rule" !== e4.kind)
            return b.Continue;
          for (let e5 of t5.path())
            if ("rule" === e5.kind)
              return o4 = false, b.Stop;
          let r5 = e4.selector.replaceAll("&", n4);
          Z(r5, ",").length > 1 && (r5 = `:is(${r5})`), e4.selector = `&:is(${r5} *)`, o4 = true;
        }), o4 ? void 0 : null;
      }), t3.suggest("group", () => Array.from(t3.keys()).filter((e4) => t3.compoundsWith("group", e4))), t3.compound("peer", 2, (t4, r4) => {
        if ("arbitrary" === r4.variant.kind && r4.variant.relative)
          return null;
        let n4 = r4.modifier ? `:where(.${e3.prefix ? `${e3.prefix}\\:` : ""}peer\\/${r4.modifier.value})` : `:where(.${e3.prefix ? `${e3.prefix}\\:` : ""}peer)`, o4 = false;
        return y([t4], (e4, t5) => {
          if ("rule" !== e4.kind)
            return b.Continue;
          for (let e5 of t5.path())
            if ("rule" === e5.kind)
              return o4 = false, b.Stop;
          let r5 = e4.selector.replaceAll("&", n4);
          Z(r5, ",").length > 1 && (r5 = `:is(${r5})`), e4.selector = `&:is(${r5} ~ *)`, o4 = true;
        }), o4 ? void 0 : null;
      }), t3.suggest("peer", () => Array.from(t3.keys()).filter((e4) => t3.compoundsWith("peer", e4))), r3("first-letter", ["&::first-letter"]), r3("first-line", ["&::first-line"]), r3("marker", ["& *::marker", "&::marker", "& *::-webkit-details-marker", "&::-webkit-details-marker"]), r3("selection", ["& *::selection", "&::selection"]), r3("file", ["&::file-selector-button"]), r3("placeholder", ["&::placeholder"]), r3("backdrop", ["&::backdrop"]), r3("details-content", ["&::details-content"]);
      {
        let e4 = function() {
          return K([S("@property", "--tw-content", [T("syntax", '"*"'), T("initial-value", '""'), T("inherits", "false")])]);
        };
        t3.static("before", (t4) => {
          t4.nodes = [z("&::before", [e4(), T("content", "var(--tw-content)"), ...t4.nodes])];
        }, { compounds: 0 }), t3.static("after", (t4) => {
          t4.nodes = [z("&::after", [e4(), T("content", "var(--tw-content)"), ...t4.nodes])];
        }, { compounds: 0 });
      }
      r3("first", ["&:first-child"]), r3("last", ["&:last-child"]), r3("only", ["&:only-child"]), r3("odd", ["&:nth-child(odd)"]), r3("even", ["&:nth-child(even)"]), r3("first-of-type", ["&:first-of-type"]), r3("last-of-type", ["&:last-of-type"]), r3("only-of-type", ["&:only-of-type"]), r3("visited", ["&:visited"]), r3("target", ["&:target"]), r3("open", ["&:is([open], :popover-open, :open)"]), r3("default", ["&:default"]), r3("checked", ["&:checked"]), r3("indeterminate", ["&:indeterminate"]), r3("placeholder-shown", ["&:placeholder-shown"]), r3("autofill", ["&:autofill"]), r3("optional", ["&:optional"]), r3("required", ["&:required"]), r3("valid", ["&:valid"]), r3("invalid", ["&:invalid"]), r3("user-valid", ["&:user-valid"]), r3("user-invalid", ["&:user-invalid"]), r3("in-range", ["&:in-range"]), r3("out-of-range", ["&:out-of-range"]), r3("read-only", ["&:read-only"]), r3("empty", ["&:empty"]), r3("focus-within", ["&:focus-within"]), t3.static("hover", (e4) => {
        e4.nodes = [z("&:hover", [S("@media", "(hover: hover)", e4.nodes)])];
      }), r3("focus", ["&:focus"]), r3("focus-visible", ["&:focus-visible"]), r3("active", ["&:active"]), r3("enabled", ["&:enabled"]), r3("disabled", ["&:disabled"]), r3("inert", ["&:is([inert], [inert] *)"]), t3.compound("in", 2, (e4, t4) => {
        if (t4.modifier)
          return null;
        let r4 = false;
        return y([e4], (e5, t5) => {
          if ("rule" !== e5.kind)
            return b.Continue;
          for (let e6 of t5.path())
            if ("rule" === e6.kind)
              return r4 = false, b.Stop;
          e5.selector = `:where(${e5.selector.replaceAll("&", "*")}) &`, r4 = true;
        }), r4 ? void 0 : null;
      }), t3.suggest("in", () => Array.from(t3.keys()).filter((e4) => t3.compoundsWith("in", e4))), t3.compound("has", 2, (e4, t4) => {
        if (t4.modifier)
          return null;
        let r4 = false;
        return y([e4], (e5, t5) => {
          if ("rule" !== e5.kind)
            return b.Continue;
          for (let e6 of t5.path())
            if ("rule" === e6.kind)
              return r4 = false, b.Stop;
          e5.selector = `&:has(${e5.selector.replaceAll("&", "*")})`, r4 = true;
        }), r4 ? void 0 : null;
      }), t3.suggest("has", () => Array.from(t3.keys()).filter((e4) => t3.compoundsWith("has", e4))), t3.functional("aria", (e4, t4) => {
        if (!t4.value || t4.modifier)
          return null;
        "arbitrary" === t4.value.kind ? e4.nodes = [z(`&[aria-${rt(t4.value.value)}]`, e4.nodes)] : e4.nodes = [z(`&[aria-${t4.value.value}="true"]`, e4.nodes)];
      }), t3.suggest("aria", () => ["busy", "checked", "disabled", "expanded", "hidden", "pressed", "readonly", "required", "selected"]), t3.functional("data", (e4, t4) => {
        if (!t4.value || t4.modifier)
          return null;
        e4.nodes = [z(`&[data-${rt(t4.value.value)}]`, e4.nodes)];
      }), t3.functional("nth", (e4, t4) => {
        if (!t4.value || t4.modifier || "named" === t4.value.kind && !Ce(t4.value.value))
          return null;
        e4.nodes = [z(`&:nth-child(${t4.value.value})`, e4.nodes)];
      }), t3.functional("nth-last", (e4, t4) => {
        if (!t4.value || t4.modifier || "named" === t4.value.kind && !Ce(t4.value.value))
          return null;
        e4.nodes = [z(`&:nth-last-child(${t4.value.value})`, e4.nodes)];
      }), t3.functional("nth-of-type", (e4, t4) => {
        if (!t4.value || t4.modifier || "named" === t4.value.kind && !Ce(t4.value.value))
          return null;
        e4.nodes = [z(`&:nth-of-type(${t4.value.value})`, e4.nodes)];
      }), t3.functional("nth-last-of-type", (e4, t4) => {
        if (!t4.value || t4.modifier || "named" === t4.value.kind && !Ce(t4.value.value))
          return null;
        e4.nodes = [z(`&:nth-last-of-type(${t4.value.value})`, e4.nodes)];
      }), t3.functional("supports", (e4, t4) => {
        if (!t4.value || t4.modifier)
          return null;
        let r4 = t4.value.value;
        if (null === r4)
          return null;
        if (/^[\w-]*\s*\(/.test(r4)) {
          let t5 = r4.replace(/\b(and|or|not)\b/g, " $1 ");
          e4.nodes = [S("@supports", t5, e4.nodes)];
        } else
          r4.includes(":") || (r4 = `${r4}: var(--tw)`), ("(" !== r4[0] || ")" !== r4[r4.length - 1]) && (r4 = `(${r4})`), e4.nodes = [S("@supports", r4, e4.nodes)];
      }, { compounds: 1 }), r3("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]), r3("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]), r3("contrast-more", ["@media (prefers-contrast: more)"]), r3("contrast-less", ["@media (prefers-contrast: less)"]);
      {
        let r4 = function(e4, t4, r5, n4) {
          if (e4 === t4)
            return 0;
          let o4 = n4.get(e4);
          if (null === o4)
            return "asc" === r5 ? -1 : 1;
          let a4 = n4.get(t4);
          return null === a4 ? "asc" === r5 ? 1 : -1 : se(o4, a4, r5);
        };
        {
          let n4 = e3.namespace("--breakpoint"), o4 = new f((t4) => {
            switch (t4.kind) {
              case "static":
                return e3.resolveValue(t4.root, ["--breakpoint"]) ?? null;
              case "functional": {
                if (!t4.value || t4.modifier)
                  return null;
                let r5 = null;
                return "arbitrary" === t4.value.kind ? r5 = t4.value.value : "named" === t4.value.kind && (r5 = e3.resolveValue(t4.value.value, ["--breakpoint"])), !r5 || r5.includes("var(") ? null : r5;
              }
              case "arbitrary":
              case "compound":
                return null;
            }
          });
          t3.group(() => {
            t3.functional("max", (e4, t4) => {
              if (t4.modifier)
                return null;
              let r5 = o4.get(t4);
              if (null === r5)
                return null;
              e4.nodes = [S("@media", `(width < ${r5})`, e4.nodes)];
            }, { compounds: 1 });
          }, (e4, t4) => r4(e4, t4, "desc", o4)), t3.suggest("max", () => Array.from(n4.keys()).filter((e4) => null !== e4)), t3.group(() => {
            for (let [r5, n5] of e3.namespace("--breakpoint"))
              null !== r5 && t3.static(r5, (e4) => {
                e4.nodes = [S("@media", `(width >= ${n5})`, e4.nodes)];
              }, { compounds: 1 });
            t3.functional("min", (e4, t4) => {
              if (t4.modifier)
                return null;
              let r5 = o4.get(t4);
              if (null === r5)
                return null;
              e4.nodes = [S("@media", `(width >= ${r5})`, e4.nodes)];
            }, { compounds: 1 });
          }, (e4, t4) => r4(e4, t4, "asc", o4)), t3.suggest("min", () => Array.from(n4.keys()).filter((e4) => null !== e4));
        }
        {
          let n4 = e3.namespace("--container"), o4 = new f((t4) => {
            switch (t4.kind) {
              case "functional": {
                if (null === t4.value)
                  return null;
                let r5 = null;
                return "arbitrary" === t4.value.kind ? r5 = t4.value.value : "named" === t4.value.kind && (r5 = e3.resolveValue(t4.value.value, ["--container"])), !r5 || r5.includes("var(") ? null : r5;
              }
              case "static":
              case "arbitrary":
              case "compound":
                return null;
            }
          });
          t3.group(() => {
            t3.functional("@max", (e4, t4) => {
              let r5 = o4.get(t4);
              if (null === r5)
                return null;
              e4.nodes = [S("@container", t4.modifier ? `${t4.modifier.value} (width < ${r5})` : `(width < ${r5})`, e4.nodes)];
            }, { compounds: 1 });
          }, (e4, t4) => r4(e4, t4, "desc", o4)), t3.suggest("@max", () => Array.from(n4.keys()).filter((e4) => null !== e4)), t3.group(() => {
            t3.functional("@", (e4, t4) => {
              let r5 = o4.get(t4);
              if (null === r5)
                return null;
              e4.nodes = [S("@container", t4.modifier ? `${t4.modifier.value} (width >= ${r5})` : `(width >= ${r5})`, e4.nodes)];
            }, { compounds: 1 }), t3.functional("@min", (e4, t4) => {
              let r5 = o4.get(t4);
              if (null === r5)
                return null;
              e4.nodes = [S("@container", t4.modifier ? `${t4.modifier.value} (width >= ${r5})` : `(width >= ${r5})`, e4.nodes)];
            }, { compounds: 1 });
          }, (e4, t4) => r4(e4, t4, "asc", o4)), t3.suggest("@min", () => Array.from(n4.keys()).filter((e4) => null !== e4)), t3.suggest("@", () => Array.from(n4.keys()).filter((e4) => null !== e4));
        }
      }
      return r3("portrait", ["@media (orientation: portrait)"]), r3("landscape", ["@media (orientation: landscape)"]), r3("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']), r3("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']), r3("dark", ["@media (prefers-color-scheme: dark)"]), r3("starting", ["@starting-style"]), r3("print", ["@media print"]), r3("forced-colors", ["@media (forced-colors: active)"]), r3("inverted-colors", ["@media (inverted-colors: inverted)"]), r3("pointer-none", ["@media (pointer: none)"]), r3("pointer-coarse", ["@media (pointer: coarse)"]), r3("pointer-fine", ["@media (pointer: fine)"]), r3("any-pointer-none", ["@media (any-pointer: none)"]), r3("any-pointer-coarse", ["@media (any-pointer: coarse)"]), r3("any-pointer-fine", ["@media (any-pointer: fine)"]), r3("noscript", ["@media (scripting: none)"]), t3;
    }(e2), o2 = new f((e3) => function(e4, t3) {
      if ("[" === e4[0] && "]" === e4[e4.length - 1]) {
        if ("@" === e4[1] && e4.includes("&"))
          return null;
        let t4 = L(e4.slice(1, -1));
        if (!q(t4) || 0 === t4.length || 0 === t4.trim().length)
          return null;
        let r3 = ">" === t4[0] || "+" === t4[0] || "~" === t4[0];
        return !r3 && "@" !== t4[0] && !t4.includes("&") && (t4 = `&:is(${t4})`), { kind: "arbitrary", selector: t4, relative: r3 };
      }
      {
        let [r3, n3 = null, o3] = Z(e4, "/");
        if (o3)
          return null;
        let a3 = J(r3, (e5) => t3.variants.has(e5));
        for (let [e5, r4] of a3)
          switch (t3.variants.kind(e5)) {
            case "static":
              return null !== r4 || null !== n3 ? null : { kind: "static", root: e5 };
            case "functional": {
              let t4 = null === n3 ? null : G(n3);
              if (null !== n3 && null === t4)
                return null;
              if (null === r4)
                return { kind: "functional", root: e5, modifier: t4, value: null };
              if ("]" === r4[r4.length - 1]) {
                if ("[" !== r4[0])
                  continue;
                let n4 = L(r4.slice(1, -1));
                return q(n4) && 0 !== n4.length && 0 !== n4.trim().length ? { kind: "functional", root: e5, modifier: t4, value: { kind: "arbitrary", value: n4 } } : null;
              }
              if (")" === r4[r4.length - 1]) {
                if ("(" !== r4[0])
                  continue;
                let n4 = L(r4.slice(1, -1));
                return q(n4) && 0 !== n4.length && 0 !== n4.trim().length && "-" === n4[0] && "-" === n4[1] ? { kind: "functional", root: e5, modifier: t4, value: { kind: "arbitrary", value: `var(${n4})` } } : null;
              }
              if (!Y.test(r4))
                continue;
              return { kind: "functional", root: e5, modifier: t4, value: { kind: "named", value: r4 } };
            }
            case "compound": {
              if (null === r4)
                return null;
              n3 && ("not" === e5 || "has" === e5 || "in" === e5) && (r4 = `${r4}/${n3}`, n3 = null);
              let o4 = t3.parseVariant(r4);
              if (null === o4 || !t3.variants.compoundsWith(e5, o4))
                return null;
              let a4 = null === n3 ? null : G(n3);
              return null !== n3 && null === a4 ? null : { kind: "compound", root: e5, modifier: a4, variant: o4 };
            }
          }
      }
      return null;
    }(e3, u2)), a2 = new f((e3) => Array.from(function* (e4, t3) {
      let r3 = Z(e4, ":");
      if (t3.theme.prefix) {
        if (1 === r3.length || r3[0] !== t3.theme.prefix)
          return null;
        r3.shift();
      }
      let n3 = r3.pop(), o3 = [];
      for (let e5 = r3.length - 1; e5 >= 0; --e5) {
        let n4 = t3.parseVariant(r3[e5]);
        if (null === n4)
          return;
        o3.push(n4);
      }
      let a3 = false;
      "!" === n3[n3.length - 1] ? (a3 = true, n3 = n3.slice(0, -1)) : "!" === n3[0] && (a3 = true, n3 = n3.slice(1)), t3.utilities.has(n3, "static") && !n3.includes("[") && (yield { kind: "static", root: n3, variants: o3, important: a3, raw: e4 });
      let [i3, l2 = null, s3] = Z(n3, "/");
      if (s3)
        return;
      let c3, u3 = null === l2 ? null : G(l2);
      if (null === l2 || null !== u3)
        if ("[" !== i3[0]) {
          if ("]" === i3[i3.length - 1]) {
            let e5 = i3.indexOf("-[");
            if (-1 === e5)
              return;
            let r4 = i3.slice(0, e5);
            if (!t3.utilities.has(r4, "functional"))
              return;
            c3 = [[r4, i3.slice(e5 + 1)]];
          } else if (")" === i3[i3.length - 1]) {
            let e5 = i3.indexOf("-(");
            if (-1 === e5)
              return;
            let r4 = i3.slice(0, e5);
            if (!t3.utilities.has(r4, "functional"))
              return;
            let n4 = i3.slice(e5 + 2, -1), o4 = Z(n4, ":"), a4 = null;
            if (2 === o4.length && (a4 = o4[0], n4 = o4[1]), "-" !== n4[0] || "-" !== n4[1] || !q(n4))
              return;
            c3 = [[r4, null === a4 ? `[var(${n4})]` : `[${a4}:var(${n4})]`]];
          } else
            c3 = J(i3, (e5) => t3.utilities.has(e5, "functional"));
          for (let [t4, r4] of c3) {
            let n4 = { kind: "functional", root: t4, modifier: u3, value: null, variants: o3, important: a3, raw: e4 };
            if (null !== r4) {
              {
                let e5 = r4.indexOf("[");
                if (-1 !== e5) {
                  if ("]" !== r4[r4.length - 1])
                    return;
                  let t5 = L(r4.slice(e5 + 1, -1));
                  if (!q(t5))
                    continue;
                  let o4 = null;
                  for (let e6 = 0; e6 < t5.length; e6++) {
                    let r5 = t5.charCodeAt(e6);
                    if (58 === r5) {
                      o4 = t5.slice(0, e6), t5 = t5.slice(e6 + 1);
                      break;
                    }
                    if (!(45 === r5 || r5 >= 97 && r5 <= 122))
                      break;
                  }
                  if (0 === t5.length || 0 === t5.trim().length || "" === o4)
                    continue;
                  n4.value = { kind: "arbitrary", dataType: o4 || null, value: t5 };
                } else {
                  let e6 = null === l2 || "arbitrary" === n4.modifier?.kind ? null : `${r4}/${l2}`;
                  if (!Y.test(r4))
                    continue;
                  n4.value = { kind: "named", value: r4, fraction: e6 };
                }
              }
              yield n4;
            } else
              yield n4;
          }
        } else {
          if ("]" !== i3[i3.length - 1])
            return;
          let t4 = i3.charCodeAt(1);
          if (45 !== t4 && !(t4 >= 97 && t4 <= 122))
            return;
          i3 = i3.slice(1, -1);
          let r4 = i3.indexOf(":");
          if (-1 === r4 || 0 === r4 || r4 === i3.length - 1)
            return;
          let n4 = i3.slice(0, r4), l3 = L(i3.slice(r4 + 1));
          if (!q(l3))
            return;
          yield { kind: "arbitrary", property: n4, value: l3, modifier: u3, variants: o3, important: a3, raw: e4 };
        }
    }(e3, u2))), i2 = new f((e3) => new f((t3) => {
      let r3 = function(e4, t4, r4) {
        let n3 = function(e5, t5) {
          if ("arbitrary" === e5.kind) {
            let r6 = e5.value;
            return e5.modifier && (r6 = Me(r6, e5.modifier, t5.theme)), null === r6 ? [] : [[T(e5.property, r6)]];
          }
          let r5 = t5.utilities.get(e5.root) ?? [], n4 = [], o4 = r5.filter((e6) => !ct(e6));
          for (let t6 of o4) {
            if (t6.kind !== e5.kind)
              continue;
            let r6 = t6.compileFn(e5);
            if (void 0 !== r6) {
              if (null === r6)
                return n4;
              n4.push(r6);
            }
          }
          if (n4.length > 0)
            return n4;
          let a4 = r5.filter((e6) => ct(e6));
          for (let t6 of a4) {
            if (t6.kind !== e5.kind)
              continue;
            let r6 = t6.compileFn(e5);
            if (void 0 !== r6) {
              if (null === r6)
                return n4;
              n4.push(r6);
            }
          }
          return n4;
        }(e4, t4);
        if (0 === n3.length)
          return [];
        let o3 = t4.important && !!(1 & r4), a3 = [], i3 = `.${l(e4.raw)}`;
        for (let r5 of n3) {
          let n4 = dt(r5);
          (e4.important || o3) && ut(r5);
          let l2 = { kind: "rule", selector: i3, nodes: r5 };
          for (let r6 of e4.variants)
            if (null === st(l2, r6, t4.variants))
              return [];
          a3.push({ node: l2, propertySort: n4 });
        }
        return a3;
      }(t3, u2, e3);
      try {
        Je(r3.map(({ node: e4 }) => e4), u2), ot(r3.map(({ node: e4 }) => e4), u2);
      } catch {
        return [];
      }
      return r3;
    })), s2 = new f((t3) => {
      for (let r3 of $(t3))
        e2.markUsedVariable(r3);
    });
    function c2(e3) {
      let r3 = [];
      for (let n3 of e3) {
        let e4 = true, { astNodes: o3 } = lt([n3], u2, { onInvalidCandidate() {
          e4 = false;
        } });
        t2 && y(o3, (e5) => (e5.src ??= t2, b.Continue)), o3 = O(o3, u2, 0), r3.push(e4 ? o3 : []);
      }
      return r3;
    }
    let u2 = { theme: e2, utilities: r2, variants: n2, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss: function(e3) {
      return c2(e3).map((e4) => e4.length > 0 ? F(e4) : null);
    }, candidatesToAst: c2, getClassOrder(e3) {
      return function(e4, t3) {
        let { astNodes: r3, nodeSorting: n3 } = lt(Array.from(t3), e4), o3 = new Map(t3.map((e5) => [e5, null])), a3 = 0n;
        for (let e5 of r3) {
          let t4 = n3.get(e5)?.candidate;
          t4 && o3.set(t4, o3.get(t4) ?? a3++);
        }
        return t3.map((e5) => [e5, o3.get(e5) ?? null]);
      }(this, e3);
    }, getClassList: () => [], getVariants: () => [], parseCandidate: (e3) => a2.get(e3), parseVariant: (e3) => o2.get(e3), compileAstNodes: (e3, t3 = 1) => i2.get(t3).get(e3), printCandidate: (e3) => function(e4, t3) {
      let r3 = [];
      for (let e5 of t3.variants)
        r3.unshift(Q(e5));
      e4.theme.prefix && r3.unshift(e4.theme.prefix);
      let n3 = "";
      if ("static" === t3.kind && (n3 += t3.root), "functional" === t3.kind && (n3 += t3.root, t3.value))
        if ("arbitrary" === t3.value.kind) {
          if (null !== t3.value) {
            let e5 = ae(t3.value.value), r4 = e5 ? t3.value.value.slice(4, -1) : t3.value.value, [o3, a3] = e5 ? ["(", ")"] : ["[", "]"];
            t3.value.dataType ? n3 += `-${o3}${t3.value.dataType}:${te(r4)}${a3}` : n3 += `-${o3}${te(r4)}${a3}`;
          }
        } else
          "named" === t3.value.kind && (n3 += `-${t3.value.value}`);
      return "arbitrary" === t3.kind && (n3 += `[${t3.property}:${te(t3.value)}]`), ("arbitrary" === t3.kind || "functional" === t3.kind) && (n3 += X(t3.modifier)), t3.important && (n3 += "!"), r3.push(n3), r3.join(":");
    }(u2, e3), printVariant: (e3) => Q(e3), getVariantOrder() {
      let e3 = Array.from(o2.values());
      e3.sort((e4, t4) => this.variants.compare(e4, t4));
      let t3, r3 = /* @__PURE__ */ new Map(), n3 = 0;
      for (let o3 of e3)
        null !== o3 && (void 0 !== t3 && 0 !== this.variants.compare(t3, o3) && n3++, r3.set(o3, n3), t3 = o3);
      return r3;
    }, resolveThemeValue(t3, r3 = true) {
      let n3 = t3.lastIndexOf("/"), o3 = null;
      -1 !== n3 && (o3 = t3.slice(n3 + 1).trim(), t3 = t3.slice(0, n3).trim());
      let a3 = e2.resolve(null, [t3], r3 ? 1 : 0) ?? void 0;
      return o3 && a3 ? _e(a3, o3) : a3;
    }, trackUsedVariables(e3) {
      s2.get(e3);
    }, canonicalizeCandidates: (e3, t3) => [], storage: {} };
    return u2;
  }
  var it = ["container-type", "pointer-events", "visibility", "position", "inset", "inset-inline", "inset-block", "inset-inline-start", "inset-inline-end", "top", "right", "bottom", "left", "isolation", "z-index", "order", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "float", "clear", "--tw-container-component", "margin", "margin-inline", "margin-block", "margin-inline-start", "margin-inline-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "box-sizing", "display", "field-sizing", "aspect-ratio", "height", "max-height", "min-height", "width", "max-width", "min-width", "flex", "flex-shrink", "flex-grow", "flex-basis", "table-layout", "caption-side", "border-collapse", "border-spacing", "transform-origin", "translate", "--tw-translate-x", "--tw-translate-y", "--tw-translate-z", "scale", "--tw-scale-x", "--tw-scale-y", "--tw-scale-z", "rotate", "--tw-rotate-x", "--tw-rotate-y", "--tw-rotate-z", "--tw-skew-x", "--tw-skew-y", "transform", "animation", "cursor", "touch-action", "--tw-pan-x", "--tw-pan-y", "--tw-pinch-zoom", "resize", "scroll-snap-type", "--tw-scroll-snap-strictness", "scroll-snap-align", "scroll-snap-stop", "scroll-margin", "scroll-margin-inline", "scroll-margin-block", "scroll-margin-inline-start", "scroll-margin-inline-end", "scroll-margin-top", "scroll-margin-right", "scroll-margin-bottom", "scroll-margin-left", "scroll-padding", "scroll-padding-inline", "scroll-padding-block", "scroll-padding-inline-start", "scroll-padding-inline-end", "scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left", "list-style-position", "list-style-type", "list-style-image", "appearance", "columns", "break-before", "break-inside", "break-after", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-template-columns", "grid-template-rows", "flex-direction", "flex-wrap", "place-content", "place-items", "align-content", "align-items", "justify-content", "justify-items", "gap", "column-gap", "row-gap", "--tw-space-x-reverse", "--tw-space-y-reverse", "divide-x-width", "divide-y-width", "--tw-divide-y-reverse", "divide-style", "divide-color", "place-self", "align-self", "justify-self", "overflow", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "scroll-behavior", "border-radius", "border-start-radius", "border-end-radius", "border-top-radius", "border-right-radius", "border-bottom-radius", "border-left-radius", "border-start-start-radius", "border-start-end-radius", "border-end-end-radius", "border-end-start-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-width", "border-inline-width", "border-block-width", "border-inline-start-width", "border-inline-end-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-inline-style", "border-block-style", "border-inline-start-style", "border-inline-end-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-color", "border-inline-color", "border-block-color", "border-inline-start-color", "border-inline-end-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "background-image", "--tw-gradient-position", "--tw-gradient-stops", "--tw-gradient-via-stops", "--tw-gradient-from", "--tw-gradient-from-position", "--tw-gradient-via", "--tw-gradient-via-position", "--tw-gradient-to", "--tw-gradient-to-position", "mask-image", "--tw-mask-top", "--tw-mask-top-from-color", "--tw-mask-top-from-position", "--tw-mask-top-to-color", "--tw-mask-top-to-position", "--tw-mask-right", "--tw-mask-right-from-color", "--tw-mask-right-from-position", "--tw-mask-right-to-color", "--tw-mask-right-to-position", "--tw-mask-bottom", "--tw-mask-bottom-from-color", "--tw-mask-bottom-from-position", "--tw-mask-bottom-to-color", "--tw-mask-bottom-to-position", "--tw-mask-left", "--tw-mask-left-from-color", "--tw-mask-left-from-position", "--tw-mask-left-to-color", "--tw-mask-left-to-position", "--tw-mask-linear", "--tw-mask-linear-position", "--tw-mask-linear-from-color", "--tw-mask-linear-from-position", "--tw-mask-linear-to-color", "--tw-mask-linear-to-position", "--tw-mask-radial", "--tw-mask-radial-shape", "--tw-mask-radial-size", "--tw-mask-radial-position", "--tw-mask-radial-from-color", "--tw-mask-radial-from-position", "--tw-mask-radial-to-color", "--tw-mask-radial-to-position", "--tw-mask-conic", "--tw-mask-conic-position", "--tw-mask-conic-from-color", "--tw-mask-conic-from-position", "--tw-mask-conic-to-color", "--tw-mask-conic-to-position", "box-decoration-break", "background-size", "background-attachment", "background-clip", "background-position", "background-repeat", "background-origin", "mask-composite", "mask-mode", "mask-type", "mask-size", "mask-clip", "mask-position", "mask-repeat", "mask-origin", "fill", "stroke", "stroke-width", "object-fit", "object-position", "padding", "padding-inline", "padding-block", "padding-inline-start", "padding-inline-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-indent", "vertical-align", "font-family", "font-size", "line-height", "font-weight", "letter-spacing", "text-wrap", "overflow-wrap", "word-break", "text-overflow", "hyphens", "white-space", "color", "text-transform", "font-style", "font-stretch", "font-variant-numeric", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration-thickness", "text-underline-offset", "-webkit-font-smoothing", "placeholder-color", "caret-color", "accent-color", "color-scheme", "opacity", "background-blend-mode", "mix-blend-mode", "box-shadow", "--tw-shadow", "--tw-shadow-color", "--tw-ring-shadow", "--tw-ring-color", "--tw-inset-shadow", "--tw-inset-shadow-color", "--tw-inset-ring-shadow", "--tw-inset-ring-color", "--tw-ring-offset-width", "--tw-ring-offset-color", "outline", "outline-width", "outline-offset", "outline-color", "--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter", "--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "backdrop-filter", "transition-property", "transition-behavior", "transition-delay", "transition-duration", "transition-timing-function", "will-change", "contain", "content", "forced-color-adjust"];
  function lt(e2, t2, { onInvalidCandidate: r2, respectImportant: n2 } = {}) {
    let o2 = /* @__PURE__ */ new Map(), a2 = [], i2 = /* @__PURE__ */ new Map();
    for (let n3 of e2) {
      if (t2.invalidCandidates.has(n3)) {
        r2?.(n3);
        continue;
      }
      let e3 = t2.parseCandidate(n3);
      0 !== e3.length ? i2.set(n3, e3) : r2?.(n3);
    }
    let l2 = 0;
    (n2 ?? 1) && (l2 |= 1);
    let s2 = t2.getVariantOrder();
    for (let [e3, n3] of i2) {
      let i3 = false;
      for (let r3 of n3) {
        let n4 = t2.compileAstNodes(r3, l2);
        if (0 !== n4.length) {
          i3 = true;
          for (let { node: t3, propertySort: i4 } of n4) {
            let n5 = 0n;
            for (let e4 of r3.variants)
              n5 |= 1n << BigInt(s2.get(e4));
            o2.set(t3, { properties: i4, variants: n5, candidate: e3 }), a2.push(t3);
          }
        }
      }
      i3 || r2?.(e3);
    }
    return a2.sort((e3, t3) => {
      let r3 = o2.get(e3), n3 = o2.get(t3);
      if (r3.variants - n3.variants !== 0n)
        return Number(r3.variants - n3.variants);
      let a3 = 0;
      for (; a3 < r3.properties.order.length && a3 < n3.properties.order.length && r3.properties.order[a3] === n3.properties.order[a3]; )
        a3 += 1;
      return (r3.properties.order[a3] ?? 1 / 0) - (n3.properties.order[a3] ?? 1 / 0) || n3.properties.count - r3.properties.count || function(e4, t4) {
        let r4 = e4.length, n4 = t4.length, o3 = r4 < n4 ? r4 : n4;
        for (let r5 = 0; r5 < o3; r5++) {
          let n5 = e4.charCodeAt(r5), o4 = t4.charCodeAt(r5);
          if (n5 >= 48 && n5 <= 57 && o4 >= 48 && o4 <= 57) {
            let a4 = r5, i3 = r5 + 1, l3 = r5, s3 = r5 + 1;
            for (n5 = e4.charCodeAt(i3); n5 >= 48 && n5 <= 57; )
              n5 = e4.charCodeAt(++i3);
            for (o4 = t4.charCodeAt(s3); o4 >= 48 && o4 <= 57; )
              o4 = t4.charCodeAt(++s3);
            let c2 = e4.slice(a4, i3), u2 = t4.slice(l3, s3), d2 = Number(c2) - Number(u2);
            if (d2)
              return d2;
            if (c2 < u2)
              return -1;
            if (c2 > u2)
              return 1;
          } else if (n5 !== o4)
            return n5 - o4;
        }
        return e4.length - t4.length;
      }(r3.candidate, n3.candidate);
    }), { astNodes: a2, nodeSorting: o2 };
  }
  function st(e2, t2, r2, n2 = 0) {
    if ("arbitrary" === t2.kind)
      return t2.relative && 0 === n2 ? null : void (e2.nodes = [C(t2.selector, e2.nodes)]);
    let { applyFn: o2 } = r2.get(t2.root);
    if ("compound" === t2.kind) {
      let a2 = S("@slot");
      if (null === st(a2, t2.variant, r2, n2 + 1) || "not" === t2.root && a2.nodes.length > 1)
        return null;
      for (let e3 of a2.nodes)
        if ("rule" !== e3.kind && "at-rule" !== e3.kind || null === o2(e3, t2))
          return null;
      return y(a2.nodes, (t3) => {
        if (("rule" === t3.kind || "at-rule" === t3.kind) && t3.nodes.length <= 0)
          return t3.nodes = e2.nodes, b.Skip;
      }), void (e2.nodes = a2.nodes);
    }
    return null === o2(e2, t2) ? null : void 0;
  }
  function ct(e2) {
    let t2 = e2.options?.types ?? [];
    return t2.length > 1 && t2.includes("any");
  }
  function ut(e2) {
    for (let t2 of e2)
      "at-root" !== t2.kind && ("declaration" === t2.kind ? t2.important = true : ("rule" === t2.kind || "at-rule" === t2.kind) && ut(t2.nodes));
  }
  function dt(e2) {
    let t2 = /* @__PURE__ */ new Set(), r2 = 0, n2 = e2.slice(), o2 = false;
    for (; n2.length > 0; ) {
      let e3 = n2.shift();
      if ("declaration" === e3.kind) {
        if (void 0 === e3.value || (r2++, o2))
          continue;
        if ("--tw-sort" === e3.property) {
          let r3 = it.indexOf(e3.value ?? "");
          if (-1 !== r3) {
            t2.add(r3), o2 = true;
            continue;
          }
        }
        let n3 = it.indexOf(e3.property);
        -1 !== n3 && t2.add(n3);
      } else if ("rule" === e3.kind || "at-rule" === e3.kind)
        for (let t3 of e3.nodes)
          n2.push(t3);
    }
    return { order: Array.from(t2).sort((e3, t3) => e3 - t3), count: r2 };
  }
  function ft(e2, t2) {
    let r2 = 0, n2 = C("&", e2), o2 = /* @__PURE__ */ new Set(), a2 = new f(() => /* @__PURE__ */ new Set()), i2 = new f(() => /* @__PURE__ */ new Set());
    y([n2], (e3, n3) => {
      if ("at-rule" === e3.kind) {
        if ("@keyframes" === e3.name)
          return y(e3.nodes, (e4) => {
            if ("at-rule" === e4.kind && "@apply" === e4.name)
              throw new Error("You cannot use `@apply` inside `@keyframes`.");
          }), b.Skip;
        if ("@utility" === e3.name) {
          let r3 = e3.params.replace(/-\*$/, "");
          return i2.get(r3).add(e3), void y(e3.nodes, (r4) => {
            if ("at-rule" === r4.kind && "@apply" === r4.name) {
              o2.add(e3);
              for (let n4 of pt(r4, t2))
                a2.get(e3).add(n4);
            }
          });
        }
        if ("@apply" === e3.name) {
          if (null === n3.parent)
            return;
          r2 |= 1, o2.add(n3.parent);
          for (let r3 of pt(e3, t2))
            for (let e4 of n3.path())
              o2.has(e4) && a2.get(e4).add(r3);
        }
      }
    });
    let l2 = /* @__PURE__ */ new Set(), s2 = [], c2 = /* @__PURE__ */ new Set();
    function u2(e3, r3 = []) {
      if (!l2.has(e3)) {
        if (c2.has(e3)) {
          let n3 = r3[(r3.indexOf(e3) + 1) % r3.length];
          throw "at-rule" === e3.kind && "@utility" === e3.name && "at-rule" === n3.kind && "@utility" === n3.name && y(e3.nodes, (e4) => {
            if ("at-rule" !== e4.kind || "@apply" !== e4.name)
              return;
            let r4 = e4.params.split(/\s+/g);
            for (let e5 of r4)
              for (let r5 of t2.parseCandidate(e5))
                switch (r5.kind) {
                  case "arbitrary":
                    break;
                  case "static":
                  case "functional":
                    if (n3.params.replace(/-\*$/, "") === r5.root)
                      throw new Error(`You cannot \`@apply\` the \`${e5}\` utility here because it creates a circular dependency.`);
                }
          }), new Error(`Circular dependency detected:

${F([e3])}
Relies on:

${F([n3])}`);
        }
        c2.add(e3);
        for (let t3 of a2.get(e3))
          for (let n3 of i2.get(t3))
            r3.push(e3), u2(n3, r3), r3.pop();
        l2.add(e3), c2.delete(e3), s2.push(e3);
      }
    }
    for (let e3 of o2)
      u2(e3);
    for (let e3 of s2)
      "nodes" in e3 && y(e3.nodes, (e4) => {
        if ("at-rule" !== e4.kind || "@apply" !== e4.name)
          return;
        let r3 = e4.params.split(/(\s+)/g), n3 = {}, o3 = 0;
        for (let [e5, t3] of r3.entries())
          e5 % 2 == 0 && (n3[t3] = o3), o3 += t3.length;
        {
          let r4 = lt(Object.keys(n3), t2, { respectImportant: false, onInvalidCandidate: (e5) => {
            if (t2.theme.prefix && !e5.startsWith(t2.theme.prefix))
              throw new Error(`Cannot apply unprefixed utility class \`${e5}\`. Did you mean \`${t2.theme.prefix}:${e5}\`?`);
            if (t2.invalidCandidates.has(e5))
              throw new Error(`Cannot apply utility class \`${e5}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
            let r5 = Z(e5, ":");
            if (r5.length > 1) {
              let n4 = r5.pop();
              if (t2.candidatesToCss([n4])[0]) {
                let n5 = t2.candidatesToCss(r5.map((e6) => `${e6}:[--tw-variant-check:1]`)), o5 = r5.filter((e6, t3) => null === n5[t3]);
                if (o5.length > 0) {
                  if (1 === o5.length)
                    throw new Error(`Cannot apply utility class \`${e5}\` because the ${o5.map((e6) => `\`${e6}\``)} variant does not exist.`);
                  {
                    let t3 = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
                    throw new Error(`Cannot apply utility class \`${e5}\` because the ${t3.format(o5.map((e6) => `\`${e6}\``))} variants do not exist.`);
                  }
                }
              }
            }
            throw 0 === t2.theme.size ? new Error(`Cannot apply unknown utility class \`${e5}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${e5}\``);
          } }), o4 = e4.src, a3 = r4.astNodes.map((e5) => {
            let t3 = r4.nodeSorting.get(e5)?.candidate, a4 = t3 ? n3[t3] : void 0;
            if (e5 = E(e5), !o4 || !t3 || void 0 === a4)
              return y([e5], (e6) => {
                e6.src = o4;
              }), e5;
            let i4 = [o4[0], o4[1], o4[2]];
            return i4[1] += 7 + a4, i4[2] = i4[1] + t3.length, y([e5], (e6) => {
              e6.src = i4;
            }), e5;
          }), i3 = [];
          for (let e5 of a3)
            if ("rule" === e5.kind)
              for (let t3 of e5.nodes)
                i3.push(t3);
            else
              i3.push(e5);
          return b.Replace(i3);
        }
      });
    return r2;
  }
  function* pt(e2, t2) {
    for (let r2 of e2.params.split(/\s+/g))
      for (let e3 of t2.parseCandidate(r2))
        switch (e3.kind) {
          case "arbitrary":
            break;
          case "static":
          case "functional":
            yield e3.root;
        }
  }
  async function ht(e2, t2, r2, o2 = 0, a2 = false) {
    let i2 = 0, l2 = [];
    return y(e2, (e3) => {
      if ("at-rule" === e3.kind && ("@import" === e3.name || "@reference" === e3.name)) {
        let s2 = function(e4) {
          let t3, r3 = null, n2 = null, o3 = null;
          for (let a3 = 0; a3 < e4.length; a3++) {
            let i3 = e4[a3];
            if ("separator" !== i3.kind) {
              if ("word" === i3.kind && !t3) {
                if (!i3.value || '"' !== i3.value[0] && "'" !== i3.value[0])
                  return null;
                t3 = i3.value.slice(1, -1);
                continue;
              }
              if ("function" === i3.kind && "url" === i3.value.toLowerCase() || !t3)
                return null;
              if (("word" === i3.kind || "function" === i3.kind) && "layer" === i3.value.toLowerCase()) {
                if (r3)
                  return null;
                if (o3)
                  throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
                r3 = "nodes" in i3 ? g(i3.nodes) : "";
                continue;
              }
              if ("function" === i3.kind && "supports" === i3.value.toLowerCase()) {
                if (o3)
                  return null;
                o3 = g(i3.nodes);
                continue;
              }
              n2 = g(e4.slice(a3));
              break;
            }
          }
          return t3 ? { uri: t3, layer: r3, media: n2, supports: o3 } : null;
        }(v(e3.params));
        if (null === s2)
          return;
        "@reference" === e3.name && (s2.media = "reference"), i2 |= 2;
        let { uri: c2, layer: u2, media: d2, supports: f2 } = s2;
        if (c2.startsWith("data:") || c2.startsWith("http://") || c2.startsWith("https://"))
          return;
        let p2 = V({}, []);
        return l2.push((async () => {
          if (o2 > 100)
            throw new Error(`Exceeded maximum recursion depth while resolving \`${c2}\` in \`${t2}\`)`);
          let i3 = await r2(c2, t2), l3 = n(i3.content, { from: a2 ? i3.path : void 0 });
          await ht(l3, i3.base, r2, o2 + 1, a2), p2.nodes = function(e4, t3, r3, n2, o3) {
            let a3 = t3;
            if (null !== r3) {
              let t4 = S("@layer", r3, a3);
              t4.src = e4.src, a3 = [t4];
            }
            if (null !== n2) {
              let t4 = S("@media", n2, a3);
              t4.src = e4.src, a3 = [t4];
            }
            if (null !== o3) {
              let t4 = S("@supports", "(" === o3[0] ? o3 : `(${o3})`, a3);
              t4.src = e4.src, a3 = [t4];
            }
            return a3;
          }(e3, [V({ base: i3.base }, l3)], u2, d2, f2);
        })()), b.ReplaceSkip(p2);
      }
    }), l2.length > 0 && await Promise.all(l2), i2;
  }
  function mt(e2, t2 = null) {
    return Array.isArray(e2) && 2 === e2.length && "object" == typeof e2[1] && null !== typeof e2[1] ? t2 ? e2[1][t2] ?? null : e2[0] : Array.isArray(e2) && null === t2 ? e2.join(", ") : "string" == typeof e2 && null === t2 ? e2 : null;
  }
  function gt(e2, { theme: t2 }, r2) {
    for (let t3 of r2) {
      let r3 = bt([t3]);
      r3 && e2.theme.clearNamespace(`--${r3}`, 4);
    }
    for (let [r3, n2] of function(e3) {
      let t3 = [];
      return yt(e3, [], (e4, r4) => {
        if (function(e5) {
          return "number" == typeof e5 || "string" == typeof e5;
        }(e4))
          return t3.push([r4, e4]), 1;
        if (function(e5) {
          if (!Array.isArray(e5) || 2 !== e5.length || "string" != typeof e5[0] && "number" != typeof e5[0] || void 0 === e5[1] || null === e5[1] || "object" != typeof e5[1])
            return false;
          for (let t4 of Reflect.ownKeys(e5[1]))
            if ("string" != typeof t4 || "string" != typeof e5[1][t4] && "number" != typeof e5[1][t4])
              return false;
          return true;
        }(e4)) {
          t3.push([r4, e4[0]]);
          for (let n3 of Reflect.ownKeys(e4[1]))
            t3.push([[...r4, `-${n3}`], e4[1][n3]]);
          return 1;
        }
        return Array.isArray(e4) && e4.every((e5) => "string" == typeof e5) ? ("fontSize" === r4[0] ? (t3.push([r4, e4[0]]), e4.length >= 2 && t3.push([[...r4, "-line-height"], e4[1]])) : t3.push([r4, e4.join(", ")]), 1) : void 0;
      }), t3;
    }(t2)) {
      if ("string" != typeof n2 && "number" != typeof n2)
        continue;
      if ("string" == typeof n2 && (n2 = n2.replace(/<alpha-value>/g, "1")), "opacity" === r3[0] && ("number" == typeof n2 || "string" == typeof n2)) {
        let e3 = "string" == typeof n2 ? parseFloat(n2) : n2;
        e3 >= 0 && e3 <= 1 && (n2 = 100 * e3 + "%");
      }
      let t3 = bt(r3);
      t3 && e2.theme.add(`--${t3}`, "" + n2, 7);
    }
    if (Object.hasOwn(t2, "fontFamily")) {
      let r3 = 5;
      {
        let n2 = mt(t2.fontFamily.sans);
        n2 && e2.theme.hasDefault("--font-sans") && (e2.theme.add("--default-font-family", n2, r3), e2.theme.add("--default-font-feature-settings", mt(t2.fontFamily.sans, "fontFeatureSettings") ?? "normal", r3), e2.theme.add("--default-font-variation-settings", mt(t2.fontFamily.sans, "fontVariationSettings") ?? "normal", r3));
      }
      {
        let n2 = mt(t2.fontFamily.mono);
        n2 && e2.theme.hasDefault("--font-mono") && (e2.theme.add("--default-mono-font-family", n2, r3), e2.theme.add("--default-mono-font-feature-settings", mt(t2.fontFamily.mono, "fontFeatureSettings") ?? "normal", r3), e2.theme.add("--default-mono-font-variation-settings", mt(t2.fontFamily.mono, "fontVariationSettings") ?? "normal", r3));
      }
    }
    return t2;
  }
  var vt = { borderWidth: "border-width", outlineWidth: "outline-width", ringColor: "ring-color", ringWidth: "ring-width", transitionDuration: "transition-duration", transitionTimingFunction: "transition-timing-function" }, wt = { animation: "animate", aspectRatio: "aspect", borderRadius: "radius", boxShadow: "shadow", colors: "color", containers: "container", fontFamily: "font", fontSize: "text", letterSpacing: "tracking", lineHeight: "leading", maxWidth: "container", screens: "breakpoint", transitionTimingFunction: "ease" }, kt = /^[a-zA-Z0-9-_%/\.]+$/;
  function bt(e2) {
    let t2 = vt[e2[0]];
    if (t2 && "DEFAULT" === e2[1])
      return `default-${t2}`;
    if ("container" === e2[0])
      return null;
    for (let t3 of e2)
      if (!kt.test(t3))
        return null;
    let r2 = wt[e2[0]];
    return r2 && ((e2 = e2.slice())[0] = r2), e2.map((e3, t3, r3) => "1" === e3 && t3 !== r3.length - 1 ? "" : e3).map((e3, t3) => (e3 = e3.replaceAll(".", "_"), (0 === t3 || e3.startsWith("-") || "lineHeight" === e3) && (e3 = e3.replace(/([a-z])([A-Z])/g, (e4, t4, r3) => `${t4}-${r3.toLowerCase()}`)), e3)).filter((t3, r3) => "DEFAULT" !== t3 || r3 !== e2.length - 1).join("-");
  }
  function yt(e2, t2 = [], r2) {
    for (let n2 of Reflect.ownKeys(e2)) {
      let o2 = e2[n2];
      if (null == o2)
        continue;
      let a2 = [...t2, n2], i2 = r2(o2, a2) ?? 0;
      if (1 !== i2) {
        if (2 === i2)
          return 2;
        if ((Array.isArray(o2) || "object" == typeof o2) && 2 === yt(o2, a2, r2))
          return 2;
      }
    }
  }
  function xt(e2) {
    return { kind: "combinator", value: e2 };
  }
  function $t(e2, t2) {
    return { kind: "function", value: e2, nodes: t2 };
  }
  function At(e2) {
    return { kind: "selector", value: e2 };
  }
  function zt(e2) {
    return { kind: "separator", value: e2 };
  }
  function St(e2) {
    return { kind: "value", value: e2 };
  }
  function Ct(e2) {
    let t2 = "";
    for (let r2 of e2)
      switch (r2.kind) {
        case "combinator":
        case "selector":
        case "separator":
        case "value":
          t2 += r2.value;
          break;
        case "function":
          t2 += r2.value + "(" + Ct(r2.nodes) + ")";
      }
    return t2;
  }
  function Tt(e2) {
    e2 = e2.replaceAll("\r\n", "\n");
    let t2, r2 = [], n2 = [], o2 = null, a2 = "";
    for (let i2 = 0; i2 < e2.length; i2++) {
      let l2 = e2.charCodeAt(i2);
      switch (l2) {
        case 44:
        case 62:
        case 10:
        case 32:
        case 43:
        case 9:
        case 126: {
          if (a2.length > 0) {
            let e3 = At(a2);
            o2 ? o2.nodes.push(e3) : r2.push(e3), a2 = "";
          }
          let n3 = i2, l3 = i2 + 1;
          for (; l3 < e2.length && (t2 = e2.charCodeAt(l3), 44 === t2 || 62 === t2 || 10 === t2 || 32 === t2 || 43 === t2 || 9 === t2 || 126 === t2); l3++)
            ;
          i2 = l3 - 1;
          let s2 = e2.slice(n3, l3), c2 = "," === s2.trim() ? zt(s2) : xt(s2);
          o2 ? o2.nodes.push(c2) : r2.push(c2);
          break;
        }
        case 40: {
          let l3 = $t(a2, []);
          if (a2 = "", ":not" !== l3.value && ":where" !== l3.value && ":has" !== l3.value && ":is" !== l3.value) {
            let n3 = i2 + 1, s2 = 0;
            for (let r3 = i2 + 1; r3 < e2.length; r3++)
              if (t2 = e2.charCodeAt(r3), 40 !== t2) {
                if (41 === t2) {
                  if (0 === s2) {
                    i2 = r3;
                    break;
                  }
                  s2--;
                }
              } else
                s2++;
            let c2 = i2;
            l3.nodes.push(St(e2.slice(n3, c2))), a2 = "", i2 = c2, o2 ? o2.nodes.push(l3) : r2.push(l3);
            break;
          }
          o2 ? o2.nodes.push(l3) : r2.push(l3), n2.push(l3), o2 = l3;
          break;
        }
        case 41: {
          let e3 = n2.pop();
          if (a2.length > 0) {
            let t3 = At(a2);
            e3.nodes.push(t3), a2 = "";
          }
          o2 = n2.length > 0 ? n2[n2.length - 1] : null;
          break;
        }
        case 46:
        case 58:
        case 35:
          if (a2.length > 0) {
            let e3 = At(a2);
            o2 ? o2.nodes.push(e3) : r2.push(e3);
          }
          a2 = e2[i2];
          break;
        case 91: {
          if (a2.length > 0) {
            let e3 = At(a2);
            o2 ? o2.nodes.push(e3) : r2.push(e3);
          }
          a2 = "";
          let n3 = i2, l3 = 0;
          for (let r3 = i2 + 1; r3 < e2.length; r3++)
            if (t2 = e2.charCodeAt(r3), 91 !== t2) {
              if (93 === t2) {
                if (0 === l3) {
                  i2 = r3;
                  break;
                }
                l3--;
              }
            } else
              l3++;
          a2 += e2.slice(n3, i2 + 1);
          break;
        }
        case 39:
        case 34: {
          let r3 = i2;
          for (let r4 = i2 + 1; r4 < e2.length; r4++)
            if (t2 = e2.charCodeAt(r4), 92 === t2)
              r4 += 1;
            else if (t2 === l2) {
              i2 = r4;
              break;
            }
          a2 += e2.slice(r3, i2 + 1);
          break;
        }
        case 38:
        case 42:
          if (a2.length > 0) {
            let e3 = At(a2);
            o2 ? o2.nodes.push(e3) : r2.push(e3), a2 = "";
          }
          o2 ? o2.nodes.push(At(e2[i2])) : r2.push(At(e2[i2]));
          break;
        case 92:
          a2 += e2[i2] + e2[i2 + 1], i2 += 1;
          break;
        default:
          a2 += e2[i2];
      }
    }
    return a2.length > 0 && r2.push(At(a2)), r2;
  }
  function jt(e2) {
    let t2 = [];
    for (let r2 of Z(e2, ".")) {
      if (!r2.includes("[")) {
        t2.push(r2);
        continue;
      }
      let e3 = 0;
      for (; ; ) {
        let n2 = r2.indexOf("[", e3), o2 = r2.indexOf("]", n2);
        if (-1 === n2 || -1 === o2)
          break;
        n2 > e3 && t2.push(r2.slice(e3, n2)), t2.push(r2.slice(n2 + 1, o2)), e3 = o2 + 1;
      }
      e3 <= r2.length - 1 && t2.push(r2.slice(e3));
    }
    return t2;
  }
  function Vt(e2) {
    if ("[object Object]" !== Object.prototype.toString.call(e2))
      return false;
    let t2 = Object.getPrototypeOf(e2);
    return null === t2 || null === Object.getPrototypeOf(t2);
  }
  function Kt(e2, t2, r2, n2 = []) {
    for (let o2 of t2)
      if (null != o2)
        for (let t3 of Reflect.ownKeys(o2)) {
          n2.push(t3);
          let a2 = r2(e2[t3], o2[t3], n2);
          void 0 !== a2 ? e2[t3] = a2 : Vt(e2[t3]) && Vt(o2[t3]) ? e2[t3] = Kt({}, [e2[t3], o2[t3]], r2, n2) : e2[t3] = o2[t3], n2.pop();
        }
    return e2;
  }
  function Et(e2, t2, r2) {
    return function(n2, o2) {
      let a2 = n2.lastIndexOf("/"), i2 = null;
      -1 !== a2 && (i2 = n2.slice(a2 + 1).trim(), n2 = n2.slice(0, a2).trim());
      let l2 = (() => {
        let o3 = jt(n2), [a3, i3] = function(e3, t3) {
          if (1 === t3.length && t3[0].startsWith("--"))
            return [e3.get([t3[0]]), e3.getOptions(t3[0])];
          let r3 = bt(t3), n3 = /* @__PURE__ */ new Map(), o4 = new f(() => /* @__PURE__ */ new Map()), a4 = e3.namespace(`--${r3}`);
          if (0 === a4.size)
            return [null, 0];
          let i4 = /* @__PURE__ */ new Map();
          for (let [t4, l5] of a4) {
            if (!t4 || !t4.includes("--")) {
              n3.set(t4, l5), i4.set(t4, e3.getOptions(t4 ? `--${r3}-${t4}` : `--${r3}`));
              continue;
            }
            let a5 = t4.indexOf("--"), s3 = t4.slice(0, a5), c3 = t4.slice(a5 + 2);
            c3 = c3.replace(/-([a-z])/g, (e4, t5) => t5.toUpperCase()), o4.get("" === s3 ? null : s3).set(c3, [l5, e3.getOptions(`--${r3}${t4}`)]);
          }
          let l4 = e3.getOptions(`--${r3}`);
          for (let [e4, t4] of o4) {
            let r4 = n3.get(e4);
            if ("string" != typeof r4)
              continue;
            let o5 = {}, a5 = {};
            for (let [e5, [r5, n4]] of t4)
              o5[e5] = r5, a5[e5] = n4;
            n3.set(e4, [r4, o5]), i4.set(e4, [l4, a5]);
          }
          let s2 = {}, c2 = {};
          for (let [e4, t4] of n3)
            Ot(s2, [e4 ?? "DEFAULT"], t4);
          for (let [e4, t4] of i4)
            Ot(c2, [e4 ?? "DEFAULT"], t4);
          return "DEFAULT" === t3[t3.length - 1] ? [s2?.DEFAULT ?? null, c2.DEFAULT ?? 0] : "DEFAULT" in s2 && 1 === Object.keys(s2).length ? [s2.DEFAULT, c2.DEFAULT ?? 0] : (s2.__CSS_VALUES__ = c2, [s2, c2]);
        }(e2.theme, o3), l3 = r2(Nt(t2() ?? {}, o3) ?? null);
        if ("string" == typeof l3 && (l3 = l3.replace("<alpha-value>", "1")), "object" != typeof a3)
          return "object" != typeof i3 && 4 & i3 ? l3 ?? a3 : a3;
        if (null !== l3 && "object" == typeof l3 && !Array.isArray(l3)) {
          let e3 = Kt({}, [l3], (e4, t3) => t3);
          if (null === a3 && Object.hasOwn(l3, "__CSS_VALUES__")) {
            let t3 = {};
            for (let r3 in l3.__CSS_VALUES__)
              t3[r3] = l3[r3], delete e3[r3];
            a3 = t3;
          }
          for (let t3 in a3)
            "__CSS_VALUES__" !== t3 && (4 & l3?.__CSS_VALUES__?.[t3] && void 0 !== Nt(e3, t3.split("-")) || (e3[s(t3)] = a3[t3]));
          return e3;
        }
        if (Array.isArray(a3) && Array.isArray(i3) && Array.isArray(l3)) {
          let e3 = a3[0], t3 = a3[1];
          4 & i3[0] && (e3 = l3[0] ?? e3);
          for (let e4 of Object.keys(t3))
            4 & i3[1][e4] && (t3[e4] = l3[1][e4] ?? t3[e4]);
          return [e3, t3];
        }
        return a3 ?? l3;
      })();
      return i2 && "string" == typeof l2 && (l2 = _e(l2, i2)), l2 ?? o2;
    };
  }
  function Nt(e2, t2) {
    for (let r2 = 0; r2 < t2.length; ++r2) {
      let n2 = t2[r2];
      if (void 0 !== e2?.[n2]) {
        if ("string" == typeof e2)
          return;
        e2 = e2[n2];
      } else {
        if (void 0 === t2[r2 + 1])
          return;
        t2[r2 + 1] = `${n2}-${t2[r2 + 1]}`;
      }
    }
    return e2;
  }
  function Ot(e2, t2, r2) {
    for (let r3 of t2.slice(0, -1))
      void 0 === e2[r3] && (e2[r3] = {}), e2 = e2[r3];
    e2[t2[t2.length - 1]] = r2;
  }
  var Ft = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function Ut({ designSystem: e2, ast: t2, resolvedConfig: r2, featuresRef: n2, referenceMode: o2, src: a2 }) {
    let i2 = { addBase(r3) {
      if (o2)
        return;
      let i3 = Wt(r3);
      n2.current |= Je(i3, e2);
      let l2 = S("@layer", "base", i3);
      y([l2], (e3) => {
        e3.src = a2;
      }), t2.push(l2);
    }, addVariant(t3, r3) {
      if (!Qe.test(t3))
        throw new Error(`\`addVariant('${t3}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
      if ("string" == typeof r3) {
        if (r3.includes(":merge("))
          return;
      } else if (Array.isArray(r3)) {
        if (r3.some((e3) => e3.includes(":merge(")))
          return;
      } else if ("object" == typeof r3) {
        let e3 = function(t4, r4) {
          return Object.entries(t4).some(([t5, n3]) => t5.includes(r4) || "object" == typeof n3 && e3(n3, r4));
        };
        if (e3(r3, ":merge("))
          return;
      }
      "string" == typeof r3 || Array.isArray(r3) ? e2.variants.static(t3, (e3) => {
        e3.nodes = Rt(r3, e3.nodes);
      }, { compounds: tt("string" == typeof r3 ? [r3] : r3) }) : "object" == typeof r3 && e2.variants.fromAst(t3, Wt(r3), e2);
    }, matchVariant(t3, r3, n3) {
      function o3(e3, t4, n4) {
        return Rt(r3(e3, { modifier: t4?.value ?? null }), n4);
      }
      try {
        let e3 = r3("a", { modifier: null });
        if ("string" == typeof e3 && e3.includes(":merge("))
          return;
        if (Array.isArray(e3) && e3.some((e4) => e4.includes(":merge(")))
          return;
      } catch {
      }
      let a3 = Object.keys(n3?.values ?? {});
      e2.variants.group(() => {
        e2.variants.functional(t3, (e3, t4) => {
          if (!t4.value)
            return n3?.values && "DEFAULT" in n3.values ? void (e3.nodes = o3(n3.values.DEFAULT, t4.modifier, e3.nodes)) : null;
          if ("arbitrary" === t4.value.kind)
            e3.nodes = o3(t4.value.value, t4.modifier, e3.nodes);
          else {
            if ("named" !== t4.value.kind || !n3?.values)
              return null;
            {
              let r4 = n3.values[t4.value.value];
              if ("string" != typeof r4)
                return null;
              e3.nodes = o3(r4, t4.modifier, e3.nodes);
            }
          }
        });
      }, (e3, t4) => {
        if ("functional" !== e3.kind || "functional" !== t4.kind)
          return 0;
        let r4 = e3.value ? e3.value.value : "DEFAULT", o4 = t4.value ? t4.value.value : "DEFAULT", i3 = n3?.values?.[r4] ?? r4, l2 = n3?.values?.[o4] ?? o4;
        if (n3 && "function" == typeof n3.sort)
          return n3.sort({ value: i3, modifier: e3.modifier?.value ?? null }, { value: l2, modifier: t4.modifier?.value ?? null });
        let s2 = a3.indexOf(r4), c2 = a3.indexOf(o4);
        return s2 = -1 === s2 ? a3.length : s2, c2 = -1 === c2 ? a3.length : c2, s2 !== c2 ? s2 - c2 : i3 < l2 ? -1 : 1;
      }), e2.variants.suggest(t3, () => Object.keys(n3?.values ?? {}).filter((e3) => "DEFAULT" !== e3));
    }, addUtilities(r3) {
      let i3 = (r3 = Array.isArray(r3) ? r3 : [r3]).flatMap((e3) => Object.entries(e3));
      i3 = i3.flatMap(([e3, t3]) => Z(e3, ",").map((e4) => [e4.trim(), t3]));
      let l2 = new f(() => []);
      for (let [e3, r4] of i3) {
        if (e3.startsWith("@keyframes ")) {
          if (!o2) {
            let n4 = C(e3, Wt(r4));
            y([n4], (e4) => {
              e4.src = a2;
            }), t2.push(n4);
          }
          continue;
        }
        let n3 = Tt(e3), i4 = false;
        if (y(n3, (e4) => {
          if ("selector" === e4.kind && "." === e4.value[0] && Ft.test(e4.value.slice(1))) {
            let t3 = e4.value;
            e4.value = "&";
            let o3 = Ct(n3), a3 = t3.slice(1), s2 = "&" === o3 ? Wt(r4) : [C(o3, Wt(r4))];
            return l2.get(a3).push(...s2), i4 = true, void (e4.value = t3);
          }
          if ("function" === e4.kind && ":not" === e4.value)
            return b.Skip;
        }), !i4)
          throw new Error(`\`addUtilities({ '${e3}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
      }
      for (let [t3, r4] of l2)
        e2.theme.prefix && y(r4, (t4) => {
          if ("rule" === t4.kind) {
            let r5 = Tt(t4.selector);
            y(r5, (t5) => {
              "selector" === t5.kind && "." === t5.value[0] && (t5.value = `.${e2.theme.prefix}\\:${t5.value.slice(1)}`);
            }), t4.selector = Ct(r5);
          }
        }), e2.utilities.static(t3, (o3) => {
          let a3 = r4.map(E);
          return Dt(a3, t3, o3.raw), n2.current |= ft(a3, e2), a3;
        });
    }, matchUtilities(t3, r3) {
      let o3 = r3?.type ? Array.isArray(r3?.type) ? r3.type : [r3.type] : ["any"];
      for (let [a3, i3] of Object.entries(t3)) {
        let t4 = function({ negative: t5 }) {
          return (l2) => {
            if ("arbitrary" === l2.value?.kind && o3.length > 0 && !o3.includes("any") && (l2.value.dataType && !o3.includes(l2.value.dataType) || !l2.value.dataType && !fe(l2.value.value, o3)))
              return;
            let s2, c2 = o3.includes("color"), u2 = null, d2 = false;
            {
              let e3 = r3?.values ?? {};
              c2 && (e3 = Object.assign({ inherit: "inherit", transparent: "transparent", current: "currentcolor" }, e3)), l2.value ? "arbitrary" === l2.value.kind ? u2 = l2.value.value : l2.value.fraction && e3[l2.value.fraction] ? (u2 = e3[l2.value.fraction], d2 = true) : e3[l2.value.value] ? u2 = e3[l2.value.value] : e3.__BARE_VALUE__ && (u2 = e3.__BARE_VALUE__(l2.value) ?? null, d2 = (null !== l2.value.fraction && u2?.includes("/")) ?? false) : u2 = e3.DEFAULT ?? null;
            }
            if (null === u2)
              return;
            {
              let e3 = r3?.modifiers ?? null;
              s2 = l2.modifier ? "any" === e3 || "arbitrary" === l2.modifier.kind ? l2.modifier.value : e3?.[l2.modifier.value] ? e3[l2.modifier.value] : c2 && !Number.isNaN(Number(l2.modifier.value)) ? `${l2.modifier.value}%` : null : null;
            }
            if (l2.modifier && null === s2 && !d2)
              return "arbitrary" === l2.value?.kind ? null : void 0;
            c2 && null !== s2 && (u2 = _e(u2, s2)), t5 && (u2 = `calc(${u2} * -1)`);
            let f2 = Wt(i3(u2, { modifier: s2 }));
            return Dt(f2, a3, l2.raw), n2.current |= ft(f2, e2), f2;
          };
        };
        if (!Ft.test(a3))
          throw new Error(`\`matchUtilities({ '${a3}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
        r3?.supportsNegativeValues && e2.utilities.functional(`-${a3}`, t4({ negative: true }), { types: o3 }), e2.utilities.functional(a3, t4({ negative: false }), { types: o3 }), e2.utilities.suggest(a3, () => {
          let e3 = r3?.values ?? {}, t5 = new Set(Object.keys(e3));
          t5.delete("__BARE_VALUE__"), t5.delete("__CSS_VALUES__"), t5.has("DEFAULT") && (t5.delete("DEFAULT"), t5.add(null));
          let n3 = r3?.modifiers ?? {}, o4 = "any" === n3 ? [] : Object.keys(n3);
          return [{ supportsNegative: r3?.supportsNegativeValues ?? false, values: Array.from(t5), modifiers: o4 }];
        });
      }
    }, addComponents(e3, t3) {
      this.addUtilities(e3, t3);
    }, matchComponents(e3, t3) {
      this.matchUtilities(e3, t3);
    }, theme: Et(e2, () => r2.theme ?? {}, (e3) => e3), prefix: (e3) => e3, config(e3, t3) {
      let n3 = r2;
      if (!e3)
        return n3;
      let o3 = jt(e3);
      for (let e4 = 0; e4 < o3.length; ++e4) {
        let r3 = o3[e4];
        if (void 0 === n3[r3])
          return t3;
        n3 = n3[r3];
      }
      return n3 ?? t3;
    } };
    return i2.addComponents = i2.addComponents.bind(i2), i2.matchComponents = i2.matchComponents.bind(i2), i2;
  }
  function Wt(e2) {
    let t2 = [], r2 = (e2 = Array.isArray(e2) ? e2 : [e2]).flatMap((e3) => Object.entries(e3));
    for (let [e3, n2] of r2)
      if (null != n2 && false !== n2)
        if ("object" != typeof n2) {
          if (!e3.startsWith("--")) {
            if ("@slot" === n2) {
              t2.push(C(e3, [S("@slot")]));
              continue;
            }
            e3 = e3.replace(/([A-Z])/g, "-$1").toLowerCase();
          }
          t2.push(T(e3, String(n2)));
        } else if (Array.isArray(n2))
          for (let r3 of n2)
            "string" == typeof r3 ? t2.push(T(e3, r3)) : t2.push(C(e3, Wt(r3)));
        else
          t2.push(C(e3, Wt(n2)));
    return t2;
  }
  function Rt(e2, t2) {
    return ("string" == typeof e2 ? [e2] : e2).flatMap((e3) => {
      if (e3.trim().endsWith("}")) {
        let r2 = n(e3.replace("}", "{@slot}}"));
        return nt(r2, t2), r2;
      }
      return C(e3, t2);
    });
  }
  function Dt(e2, t2, r2) {
    y(e2, (e3) => {
      if ("rule" === e3.kind) {
        let n2 = Tt(e3.selector);
        y(n2, (e4) => {
          "selector" === e4.kind && e4.value === `.${t2}` && (e4.value = `.${l(r2)}`);
        }), e3.selector = Ct(n2);
      }
    });
  }
  function _t(e2, t2) {
    for (let r2 of function(e3) {
      let t3 = [];
      if ("keyframes" in e3.theme)
        for (let [r3, n2] of Object.entries(e3.theme.keyframes))
          t3.push(S("@keyframes", r3, Wt(n2)));
      return t3;
    }(t2))
      e2.theme.addKeyframes(r2);
  }
  var Lt = { inherit: "inherit", current: "currentcolor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "oklch(98.4% 0.003 247.858)", 100: "oklch(96.8% 0.007 247.896)", 200: "oklch(92.9% 0.013 255.508)", 300: "oklch(86.9% 0.022 252.894)", 400: "oklch(70.4% 0.04 256.788)", 500: "oklch(55.4% 0.046 257.417)", 600: "oklch(44.6% 0.043 257.281)", 700: "oklch(37.2% 0.044 257.287)", 800: "oklch(27.9% 0.041 260.031)", 900: "oklch(20.8% 0.042 265.755)", 950: "oklch(12.9% 0.042 264.695)" }, gray: { 50: "oklch(98.5% 0.002 247.839)", 100: "oklch(96.7% 0.003 264.542)", 200: "oklch(92.8% 0.006 264.531)", 300: "oklch(87.2% 0.01 258.338)", 400: "oklch(70.7% 0.022 261.325)", 500: "oklch(55.1% 0.027 264.364)", 600: "oklch(44.6% 0.03 256.802)", 700: "oklch(37.3% 0.034 259.733)", 800: "oklch(27.8% 0.033 256.848)", 900: "oklch(21% 0.034 264.665)", 950: "oklch(13% 0.028 261.692)" }, zinc: { 50: "oklch(98.5% 0 0)", 100: "oklch(96.7% 0.001 286.375)", 200: "oklch(92% 0.004 286.32)", 300: "oklch(87.1% 0.006 286.286)", 400: "oklch(70.5% 0.015 286.067)", 500: "oklch(55.2% 0.016 285.938)", 600: "oklch(44.2% 0.017 285.786)", 700: "oklch(37% 0.013 285.805)", 800: "oklch(27.4% 0.006 286.033)", 900: "oklch(21% 0.006 285.885)", 950: "oklch(14.1% 0.005 285.823)" }, neutral: { 50: "oklch(98.5% 0 0)", 100: "oklch(97% 0 0)", 200: "oklch(92.2% 0 0)", 300: "oklch(87% 0 0)", 400: "oklch(70.8% 0 0)", 500: "oklch(55.6% 0 0)", 600: "oklch(43.9% 0 0)", 700: "oklch(37.1% 0 0)", 800: "oklch(26.9% 0 0)", 900: "oklch(20.5% 0 0)", 950: "oklch(14.5% 0 0)" }, stone: { 50: "oklch(98.5% 0.001 106.423)", 100: "oklch(97% 0.001 106.424)", 200: "oklch(92.3% 0.003 48.717)", 300: "oklch(86.9% 0.005 56.366)", 400: "oklch(70.9% 0.01 56.259)", 500: "oklch(55.3% 0.013 58.071)", 600: "oklch(44.4% 0.011 73.639)", 700: "oklch(37.4% 0.01 67.558)", 800: "oklch(26.8% 0.007 34.298)", 900: "oklch(21.6% 0.006 56.043)", 950: "oklch(14.7% 0.004 49.25)" }, red: { 50: "oklch(97.1% 0.013 17.38)", 100: "oklch(93.6% 0.032 17.717)", 200: "oklch(88.5% 0.062 18.334)", 300: "oklch(80.8% 0.114 19.571)", 400: "oklch(70.4% 0.191 22.216)", 500: "oklch(63.7% 0.237 25.331)", 600: "oklch(57.7% 0.245 27.325)", 700: "oklch(50.5% 0.213 27.518)", 800: "oklch(44.4% 0.177 26.899)", 900: "oklch(39.6% 0.141 25.723)", 950: "oklch(25.8% 0.092 26.042)" }, orange: { 50: "oklch(98% 0.016 73.684)", 100: "oklch(95.4% 0.038 75.164)", 200: "oklch(90.1% 0.076 70.697)", 300: "oklch(83.7% 0.128 66.29)", 400: "oklch(75% 0.183 55.934)", 500: "oklch(70.5% 0.213 47.604)", 600: "oklch(64.6% 0.222 41.116)", 700: "oklch(55.3% 0.195 38.402)", 800: "oklch(47% 0.157 37.304)", 900: "oklch(40.8% 0.123 38.172)", 950: "oklch(26.6% 0.079 36.259)" }, amber: { 50: "oklch(98.7% 0.022 95.277)", 100: "oklch(96.2% 0.059 95.617)", 200: "oklch(92.4% 0.12 95.746)", 300: "oklch(87.9% 0.169 91.605)", 400: "oklch(82.8% 0.189 84.429)", 500: "oklch(76.9% 0.188 70.08)", 600: "oklch(66.6% 0.179 58.318)", 700: "oklch(55.5% 0.163 48.998)", 800: "oklch(47.3% 0.137 46.201)", 900: "oklch(41.4% 0.112 45.904)", 950: "oklch(27.9% 0.077 45.635)" }, yellow: { 50: "oklch(98.7% 0.026 102.212)", 100: "oklch(97.3% 0.071 103.193)", 200: "oklch(94.5% 0.129 101.54)", 300: "oklch(90.5% 0.182 98.111)", 400: "oklch(85.2% 0.199 91.936)", 500: "oklch(79.5% 0.184 86.047)", 600: "oklch(68.1% 0.162 75.834)", 700: "oklch(55.4% 0.135 66.442)", 800: "oklch(47.6% 0.114 61.907)", 900: "oklch(42.1% 0.095 57.708)", 950: "oklch(28.6% 0.066 53.813)" }, lime: { 50: "oklch(98.6% 0.031 120.757)", 100: "oklch(96.7% 0.067 122.328)", 200: "oklch(93.8% 0.127 124.321)", 300: "oklch(89.7% 0.196 126.665)", 400: "oklch(84.1% 0.238 128.85)", 500: "oklch(76.8% 0.233 130.85)", 600: "oklch(64.8% 0.2 131.684)", 700: "oklch(53.2% 0.157 131.589)", 800: "oklch(45.3% 0.124 130.933)", 900: "oklch(40.5% 0.101 131.063)", 950: "oklch(27.4% 0.072 132.109)" }, green: { 50: "oklch(98.2% 0.018 155.826)", 100: "oklch(96.2% 0.044 156.743)", 200: "oklch(92.5% 0.084 155.995)", 300: "oklch(87.1% 0.15 154.449)", 400: "oklch(79.2% 0.209 151.711)", 500: "oklch(72.3% 0.219 149.579)", 600: "oklch(62.7% 0.194 149.214)", 700: "oklch(52.7% 0.154 150.069)", 800: "oklch(44.8% 0.119 151.328)", 900: "oklch(39.3% 0.095 152.535)", 950: "oklch(26.6% 0.065 152.934)" }, emerald: { 50: "oklch(97.9% 0.021 166.113)", 100: "oklch(95% 0.052 163.051)", 200: "oklch(90.5% 0.093 164.15)", 300: "oklch(84.5% 0.143 164.978)", 400: "oklch(76.5% 0.177 163.223)", 500: "oklch(69.6% 0.17 162.48)", 600: "oklch(59.6% 0.145 163.225)", 700: "oklch(50.8% 0.118 165.612)", 800: "oklch(43.2% 0.095 166.913)", 900: "oklch(37.8% 0.077 168.94)", 950: "oklch(26.2% 0.051 172.552)" }, teal: { 50: "oklch(98.4% 0.014 180.72)", 100: "oklch(95.3% 0.051 180.801)", 200: "oklch(91% 0.096 180.426)", 300: "oklch(85.5% 0.138 181.071)", 400: "oklch(77.7% 0.152 181.912)", 500: "oklch(70.4% 0.14 182.503)", 600: "oklch(60% 0.118 184.704)", 700: "oklch(51.1% 0.096 186.391)", 800: "oklch(43.7% 0.078 188.216)", 900: "oklch(38.6% 0.063 188.416)", 950: "oklch(27.7% 0.046 192.524)" }, cyan: { 50: "oklch(98.4% 0.019 200.873)", 100: "oklch(95.6% 0.045 203.388)", 200: "oklch(91.7% 0.08 205.041)", 300: "oklch(86.5% 0.127 207.078)", 400: "oklch(78.9% 0.154 211.53)", 500: "oklch(71.5% 0.143 215.221)", 600: "oklch(60.9% 0.126 221.723)", 700: "oklch(52% 0.105 223.128)", 800: "oklch(45% 0.085 224.283)", 900: "oklch(39.8% 0.07 227.392)", 950: "oklch(30.2% 0.056 229.695)" }, sky: { 50: "oklch(97.7% 0.013 236.62)", 100: "oklch(95.1% 0.026 236.824)", 200: "oklch(90.1% 0.058 230.902)", 300: "oklch(82.8% 0.111 230.318)", 400: "oklch(74.6% 0.16 232.661)", 500: "oklch(68.5% 0.169 237.323)", 600: "oklch(58.8% 0.158 241.966)", 700: "oklch(50% 0.134 242.749)", 800: "oklch(44.3% 0.11 240.79)", 900: "oklch(39.1% 0.09 240.876)", 950: "oklch(29.3% 0.066 243.157)" }, blue: { 50: "oklch(97% 0.014 254.604)", 100: "oklch(93.2% 0.032 255.585)", 200: "oklch(88.2% 0.059 254.128)", 300: "oklch(80.9% 0.105 251.813)", 400: "oklch(70.7% 0.165 254.624)", 500: "oklch(62.3% 0.214 259.815)", 600: "oklch(54.6% 0.245 262.881)", 700: "oklch(48.8% 0.243 264.376)", 800: "oklch(42.4% 0.199 265.638)", 900: "oklch(37.9% 0.146 265.522)", 950: "oklch(28.2% 0.091 267.935)" }, indigo: { 50: "oklch(96.2% 0.018 272.314)", 100: "oklch(93% 0.034 272.788)", 200: "oklch(87% 0.065 274.039)", 300: "oklch(78.5% 0.115 274.713)", 400: "oklch(67.3% 0.182 276.935)", 500: "oklch(58.5% 0.233 277.117)", 600: "oklch(51.1% 0.262 276.966)", 700: "oklch(45.7% 0.24 277.023)", 800: "oklch(39.8% 0.195 277.366)", 900: "oklch(35.9% 0.144 278.697)", 950: "oklch(25.7% 0.09 281.288)" }, violet: { 50: "oklch(96.9% 0.016 293.756)", 100: "oklch(94.3% 0.029 294.588)", 200: "oklch(89.4% 0.057 293.283)", 300: "oklch(81.1% 0.111 293.571)", 400: "oklch(70.2% 0.183 293.541)", 500: "oklch(60.6% 0.25 292.717)", 600: "oklch(54.1% 0.281 293.009)", 700: "oklch(49.1% 0.27 292.581)", 800: "oklch(43.2% 0.232 292.759)", 900: "oklch(38% 0.189 293.745)", 950: "oklch(28.3% 0.141 291.089)" }, purple: { 50: "oklch(97.7% 0.014 308.299)", 100: "oklch(94.6% 0.033 307.174)", 200: "oklch(90.2% 0.063 306.703)", 300: "oklch(82.7% 0.119 306.383)", 400: "oklch(71.4% 0.203 305.504)", 500: "oklch(62.7% 0.265 303.9)", 600: "oklch(55.8% 0.288 302.321)", 700: "oklch(49.6% 0.265 301.924)", 800: "oklch(43.8% 0.218 303.724)", 900: "oklch(38.1% 0.176 304.987)", 950: "oklch(29.1% 0.149 302.717)" }, fuchsia: { 50: "oklch(97.7% 0.017 320.058)", 100: "oklch(95.2% 0.037 318.852)", 200: "oklch(90.3% 0.076 319.62)", 300: "oklch(83.3% 0.145 321.434)", 400: "oklch(74% 0.238 322.16)", 500: "oklch(66.7% 0.295 322.15)", 600: "oklch(59.1% 0.293 322.896)", 700: "oklch(51.8% 0.253 323.949)", 800: "oklch(45.2% 0.211 324.591)", 900: "oklch(40.1% 0.17 325.612)", 950: "oklch(29.3% 0.136 325.661)" }, pink: { 50: "oklch(97.1% 0.014 343.198)", 100: "oklch(94.8% 0.028 342.258)", 200: "oklch(89.9% 0.061 343.231)", 300: "oklch(82.3% 0.12 346.018)", 400: "oklch(71.8% 0.202 349.761)", 500: "oklch(65.6% 0.241 354.308)", 600: "oklch(59.2% 0.249 0.584)", 700: "oklch(52.5% 0.223 3.958)", 800: "oklch(45.9% 0.187 3.815)", 900: "oklch(40.8% 0.153 2.432)", 950: "oklch(28.4% 0.109 3.907)" }, rose: { 50: "oklch(96.9% 0.015 12.422)", 100: "oklch(94.1% 0.03 12.58)", 200: "oklch(89.2% 0.058 10.001)", 300: "oklch(81% 0.117 11.638)", 400: "oklch(71.2% 0.194 13.428)", 500: "oklch(64.5% 0.246 16.439)", 600: "oklch(58.6% 0.253 17.585)", 700: "oklch(51.4% 0.222 16.935)", 800: "oklch(45.5% 0.188 13.697)", 900: "oklch(41% 0.159 10.272)", 950: "oklch(27.1% 0.105 12.094)" } };
  function Mt(e2) {
    return { __BARE_VALUE__: e2 };
  }
  var Bt = Mt((e2) => {
    if (Ce(e2.value))
      return e2.value;
  }), It = Mt((e2) => {
    if (Ce(e2.value))
      return `${e2.value}%`;
  }), Pt = Mt((e2) => {
    if (Ce(e2.value))
      return `${e2.value}px`;
  }), qt = Mt((e2) => {
    if (Ce(e2.value))
      return `${e2.value}ms`;
  }), Ht = Mt((e2) => {
    if (Ce(e2.value))
      return `${e2.value}deg`;
  }), Zt = Mt((e2) => {
    if (null === e2.fraction)
      return;
    let [t2, r2] = Z(e2.fraction, "/");
    return Ce(t2) && Ce(r2) ? e2.fraction : void 0;
  }), Yt = Mt((e2) => {
    if (Ce(Number(e2.value)))
      return `repeat(${e2.value}, minmax(0, 1fr))`;
  }), Gt = { accentColor: ({ theme: e2 }) => e2("colors"), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...Zt }, backdropBlur: ({ theme: e2 }) => e2("blur"), backdropBrightness: ({ theme: e2 }) => ({ ...e2("brightness"), ...It }), backdropContrast: ({ theme: e2 }) => ({ ...e2("contrast"), ...It }), backdropGrayscale: ({ theme: e2 }) => ({ ...e2("grayscale"), ...It }), backdropHueRotate: ({ theme: e2 }) => ({ ...e2("hueRotate"), ...Ht }), backdropInvert: ({ theme: e2 }) => ({ ...e2("invert"), ...It }), backdropOpacity: ({ theme: e2 }) => ({ ...e2("opacity"), ...It }), backdropSaturate: ({ theme: e2 }) => ({ ...e2("saturate"), ...It }), backdropSepia: ({ theme: e2 }) => ({ ...e2("sepia"), ...It }), backgroundColor: ({ theme: e2 }) => e2("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e2 }) => e2("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e2 }) => ({ DEFAULT: "currentcolor", ...e2("colors") }), borderOpacity: ({ theme: e2 }) => e2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e2 }) => e2("spacing"), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e2 }) => e2("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2", ...It }, caretColor: ({ theme: e2 }) => e2("colors"), colors: () => ({ ...Lt }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", ...Bt }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2", ...It }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e2 }) => e2("borderColor"), divideOpacity: ({ theme: e2 }) => e2("borderOpacity"), divideWidth: ({ theme: e2 }) => ({ ...e2("borderWidth"), ...Pt }), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e2 }) => e2("colors"), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", ...e2("spacing") }), flexGrow: { 0: "0", DEFAULT: "1", ...Bt }, flexShrink: { 0: "0", DEFAULT: "1", ...Bt }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e2 }) => e2("spacing"), gradientColorStops: ({ theme: e2 }) => e2("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%", ...It }, grayscale: { 0: "0", DEFAULT: "100%", ...It }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Bt }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Bt }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Bt }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Bt }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...Yt }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...Yt }, height: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg", ...Ht }, inset: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e2("spacing") }), invert: { 0: "0", DEFAULT: "100%", ...It }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...Bt }, maxHeight: ({ theme: e2 }) => ({ none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), maxWidth: ({ theme: e2 }) => ({ none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e2("spacing") }), minHeight: ({ theme: e2 }) => ({ full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), minWidth: ({ theme: e2 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1", ...It }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", ...Bt }, outlineColor: ({ theme: e2 }) => e2("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, padding: ({ theme: e2 }) => e2("spacing"), placeholderColor: ({ theme: e2 }) => e2("colors"), placeholderOpacity: ({ theme: e2 }) => e2("opacity"), ringColor: ({ theme: e2 }) => ({ DEFAULT: "currentcolor", ...e2("colors") }), ringOffsetColor: ({ theme: e2 }) => e2("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, ringOpacity: ({ theme: e2 }) => ({ DEFAULT: "0.5", ...e2("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg", ...Ht }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...It }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", ...It }, screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" }, scrollMargin: ({ theme: e2 }) => e2("spacing"), scrollPadding: ({ theme: e2 }) => e2("spacing"), sepia: { 0: "0", DEFAULT: "100%", ...It }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", ...Ht }, space: ({ theme: e2 }) => e2("spacing"), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e2 }) => ({ none: "none", ...e2("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2", ...Bt }, supports: {}, data: {}, textColor: ({ theme: e2 }) => e2("colors"), textDecorationColor: ({ theme: e2 }) => e2("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, textIndent: ({ theme: e2 }) => e2("spacing"), textOpacity: ({ theme: e2 }) => e2("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Pt }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...qt }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...qt }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e2 }) => ({ "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e2("spacing") }), size: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), width: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", ...Bt } };
  function Jt(e2) {
    return { theme: { ...Gt, colors: ({ theme: e3 }) => e3("color", {}), extend: { fontSize: ({ theme: e3 }) => ({ ...e3("text", {}) }), boxShadow: ({ theme: e3 }) => ({ ...e3("shadow", {}) }), animation: ({ theme: e3 }) => ({ ...e3("animate", {}) }), aspectRatio: ({ theme: e3 }) => ({ ...e3("aspect", {}) }), borderRadius: ({ theme: e3 }) => ({ ...e3("radius", {}) }), screens: ({ theme: e3 }) => ({ ...e3("breakpoint", {}) }), letterSpacing: ({ theme: e3 }) => ({ ...e3("tracking", {}) }), lineHeight: ({ theme: e3 }) => ({ ...e3("leading", {}) }), transitionDuration: { DEFAULT: e2.get(["--default-transition-duration"]) ?? null }, transitionTimingFunction: { DEFAULT: e2.get(["--default-transition-timing-function"]) ?? null }, maxWidth: ({ theme: e3 }) => ({ ...e3("container", {}) }) } } };
  }
  var Xt = { blocklist: [], future: {}, experimental: {}, prefix: "", important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
  function Qt(e2, t2) {
    let r2 = { design: e2, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(Xt) };
    for (let e3 of t2)
      tr(r2, e3);
    for (let e3 of r2.configs)
      "darkMode" in e3 && void 0 !== e3.darkMode && (r2.result.darkMode = e3.darkMode ?? null), "prefix" in e3 && void 0 !== e3.prefix && (r2.result.prefix = e3.prefix ?? ""), "blocklist" in e3 && void 0 !== e3.blocklist && (r2.result.blocklist = e3.blocklist ?? []), "important" in e3 && void 0 !== e3.important && (r2.result.important = e3.important ?? false);
    let n2 = function(e3) {
      let t3 = /* @__PURE__ */ new Set(), r3 = Et(e3.design, () => e3.theme, o2), n3 = Object.assign(r3, { theme: r3, colors: Lt });
      function o2(e4) {
        return "function" == typeof e4 ? e4(n3) ?? null : e4 ?? null;
      }
      for (let r4 of e3.configs) {
        let n4 = r4.theme ?? {}, o3 = n4.extend ?? {};
        for (let e4 in n4)
          "extend" !== e4 && t3.add(e4);
        Object.assign(e3.theme, n4);
        for (let t4 in o3)
          e3.extend[t4] ??= [], e3.extend[t4].push(o3[t4]);
      }
      delete e3.theme.extend;
      for (let t4 in e3.extend) {
        let r4 = [e3.theme[t4], ...e3.extend[t4]];
        e3.theme[t4] = () => Kt({}, r4.map(o2), er);
      }
      for (let t4 in e3.theme)
        e3.theme[t4] = o2(e3.theme[t4]);
      if (e3.theme.screens && "object" == typeof e3.theme.screens)
        for (let t4 of Object.keys(e3.theme.screens)) {
          let r4 = e3.theme.screens[t4];
          r4 && "object" == typeof r4 && ("raw" in r4 || "max" in r4 || "min" in r4 && (e3.theme.screens[t4] = r4.min));
        }
      return t3;
    }(r2);
    return { resolvedConfig: { ...r2.result, content: r2.content, theme: r2.theme, plugins: r2.plugins }, replacedThemeKeys: n2 };
  }
  function er(e2, t2) {
    return Array.isArray(e2) && Vt(e2[0]) ? e2.concat(t2) : Array.isArray(t2) && Vt(t2[0]) && Vt(e2) ? [e2, ...t2] : Array.isArray(t2) ? t2 : void 0;
  }
  function tr(e2, { config: t2, base: r2, path: n2, reference: o2, src: a2 }) {
    let i2 = [];
    for (let e3 of t2.plugins ?? [])
      "__isOptionsFunction" in e3 ? i2.push({ ...e3(), reference: o2, src: a2 }) : "handler" in e3 ? i2.push({ ...e3, reference: o2, src: a2 }) : i2.push({ handler: e3, reference: o2, src: a2 });
    if (Array.isArray(t2.presets) && 0 === t2.presets.length)
      throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let i3 of t2.presets ?? [])
      tr(e2, { path: n2, base: r2, config: i3, reference: o2, src: a2 });
    for (let t3 of i2)
      e2.plugins.push(t3), t3.config && tr(e2, { path: n2, base: r2, config: t3.config, reference: !!t3.reference, src: t3.src ?? a2 });
    let l2 = t2.content ?? [], s2 = Array.isArray(l2) ? l2 : l2.files;
    for (let t3 of s2)
      e2.content.files.push("object" == typeof t3 ? t3 : { base: r2, pattern: t3 });
    e2.configs.push(t2);
  }
  function rr(e2, t2) {
    let r2 = e2.theme.container || {};
    if ("object" != typeof r2 || null === r2)
      return;
    let n2 = function({ center: e3, padding: t3, screens: r3 }, n3) {
      let o2 = [], a2 = null;
      if (e3 && o2.push(T("margin-inline", "auto")), ("string" == typeof t3 || "object" == typeof t3 && null !== t3 && "DEFAULT" in t3) && o2.push(T("padding-inline", "string" == typeof t3 ? t3 : t3.DEFAULT)), "object" == typeof r3 && null !== r3) {
        a2 = /* @__PURE__ */ new Map();
        let e4 = Array.from(n3.theme.namespace("--breakpoint").entries());
        if (e4.sort((e5, t4) => se(e5[1], t4[1], "asc")), e4.length > 0) {
          let [t4] = e4[0];
          o2.push(S("@media", `(width >= --theme(--breakpoint-${t4}))`, [T("max-width", "none")]));
        }
        for (let [e5, t4] of Object.entries(r3)) {
          if ("object" == typeof t4) {
            if (!("min" in t4))
              continue;
            t4 = t4.min;
          }
          a2.set(e5, S("@media", `(width >= ${t4})`, [T("max-width", t4)]));
        }
      }
      if ("object" == typeof t3 && null !== t3) {
        let e4 = Object.entries(t3).filter(([e5]) => "DEFAULT" !== e5).map(([e5, t4]) => [e5, n3.theme.resolveValue(e5, ["--breakpoint"]), t4]).filter(Boolean);
        e4.sort((e5, t4) => se(e5[1], t4[1], "asc"));
        for (let [t4, , r4] of e4)
          if (a2 && a2.has(t4))
            a2.get(t4).nodes.push(T("padding-inline", r4));
          else {
            if (a2)
              continue;
            o2.push(S("@media", `(width >= theme(--breakpoint-${t4}))`, [T("padding-inline", r4)]));
          }
      }
      if (a2)
        for (let [, e4] of a2)
          o2.push(e4);
      return o2;
    }(r2, t2);
    0 !== n2.length && t2.utilities.static("container", () => n2.map(E));
  }
  function nr({ addVariant: e2, config: t2 }) {
    let r2 = t2("darkMode", null), [n2, o2 = ".dark"] = Array.isArray(r2) ? r2 : [r2];
    if ("variant" === n2) {
      let e3;
      if (Array.isArray(o2) || "function" == typeof o2 ? e3 = o2 : "string" == typeof o2 && (e3 = [o2]), Array.isArray(e3))
        for (let t3 of e3)
          ".dark" === t3 ? (n2 = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : t3.includes("&") || (n2 = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
      o2 = e3;
    }
    null === n2 || ("selector" === n2 ? e2("dark", `&:where(${o2}, ${o2} *)`) : "media" === n2 ? e2("dark", "@media (prefers-color-scheme: dark)") : "variant" === n2 ? e2("dark", o2) : "class" === n2 && e2("dark", `&:is(${o2} *)`));
  }
  function or(e2) {
    return (Array.isArray(e2) ? e2 : [e2]).map((e3) => "string" == typeof e3 ? { min: e3 } : e3 && "object" == typeof e3 ? e3 : null).map((e3) => {
      if (null === e3)
        return null;
      if ("raw" in e3)
        return e3.raw;
      let t2 = "";
      return void 0 !== e3.max && (t2 += `${e3.max} >= `), t2 += "width", void 0 !== e3.min && (t2 += ` >= ${e3.min}`), `(${t2})`;
    }).filter(Boolean).join(", ");
  }
  var ar = /^[a-z]+$/;
  async function ir({ designSystem: e2, base: t2, ast: r2, loadModule: n2, sources: o2 }) {
    let a2 = 0, i2 = [], l2 = [];
    y(r2, (e3, t3) => {
      if ("at-rule" !== e3.kind)
        return;
      let r3 = N(t3);
      if ("@plugin" === e3.name) {
        if (null !== r3.parent)
          throw new Error("`@plugin` cannot be nested.");
        let t4 = e3.params.slice(1, -1);
        if (0 === t4.length)
          throw new Error("`@plugin` must have a path.");
        let n3 = {};
        for (let t5 of e3.nodes ?? []) {
          if ("declaration" !== t5.kind)
            throw new Error(`Unexpected \`@plugin\` option:

${F([t5])}

\`@plugin\` options must be a flat list of declarations.`);
          if (void 0 === t5.value)
            continue;
          let e4 = Z(t5.value, ",").map((e5) => {
            if ("null" === (e5 = e5.trim()))
              return null;
            if ("true" === e5)
              return true;
            if ("false" === e5)
              return false;
            if (!Number.isNaN(Number(e5)))
              return Number(e5);
            if ('"' === e5[0] && '"' === e5[e5.length - 1] || "'" === e5[0] && "'" === e5[e5.length - 1])
              return e5.slice(1, -1);
            if ("{" === e5[0] && "}" === e5[e5.length - 1])
              throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${F([t5]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
            return e5;
          });
          n3[t5.property] = 1 === e4.length ? e4[0] : e4;
        }
        return i2.push([{ id: t4, base: r3.context.base, reference: !!r3.context.reference, src: e3.src }, Object.keys(n3).length > 0 ? n3 : null]), a2 |= 4, b.Replace([]);
      }
      if ("@config" === e3.name) {
        if (e3.nodes.length > 0)
          throw new Error("`@config` cannot have a body.");
        if (null !== r3.parent)
          throw new Error("`@config` cannot be nested.");
        return l2.push({ id: e3.params.slice(1, -1), base: r3.context.base, reference: !!r3.context.reference, src: e3.src }), a2 |= 4, b.Replace([]);
      }
    }), function(e3) {
      for (let [t3, r3] of [["t", "top"], ["tr", "top right"], ["r", "right"], ["br", "bottom right"], ["b", "bottom"], ["bl", "bottom left"], ["l", "left"], ["tl", "top left"]])
        e3.utilities.suggest(`bg-gradient-to-${t3}`, () => []), e3.utilities.static(`bg-gradient-to-${t3}`, () => [T("--tw-gradient-position", `to ${r3} in oklab`), T("background-image", "linear-gradient(var(--tw-gradient-stops))")]);
      e3.utilities.suggest("bg-left-top", () => []), e3.utilities.static("bg-left-top", () => [T("background-position", "left top")]), e3.utilities.suggest("bg-right-top", () => []), e3.utilities.static("bg-right-top", () => [T("background-position", "right top")]), e3.utilities.suggest("bg-left-bottom", () => []), e3.utilities.static("bg-left-bottom", () => [T("background-position", "left bottom")]), e3.utilities.suggest("bg-right-bottom", () => []), e3.utilities.static("bg-right-bottom", () => [T("background-position", "right bottom")]), e3.utilities.suggest("object-left-top", () => []), e3.utilities.static("object-left-top", () => [T("object-position", "left top")]), e3.utilities.suggest("object-right-top", () => []), e3.utilities.static("object-right-top", () => [T("object-position", "right top")]), e3.utilities.suggest("object-left-bottom", () => []), e3.utilities.static("object-left-bottom", () => [T("object-position", "left bottom")]), e3.utilities.suggest("object-right-bottom", () => []), e3.utilities.static("object-right-bottom", () => [T("object-position", "right bottom")]), e3.utilities.suggest("max-w-screen", () => []), e3.utilities.functional("max-w-screen", (t3) => {
        if (!t3.value || "arbitrary" === t3.value.kind)
          return;
        let r3 = e3.theme.resolve(t3.value.value, ["--breakpoint"]);
        return r3 ? [T("max-width", r3)] : void 0;
      }), e3.utilities.suggest("overflow-ellipsis", () => []), e3.utilities.static("overflow-ellipsis", () => [T("text-overflow", "ellipsis")]), e3.utilities.suggest("decoration-slice", () => []), e3.utilities.static("decoration-slice", () => [T("-webkit-box-decoration-break", "slice"), T("box-decoration-break", "slice")]), e3.utilities.suggest("decoration-clone", () => []), e3.utilities.static("decoration-clone", () => [T("-webkit-box-decoration-break", "clone"), T("box-decoration-break", "clone")]), e3.utilities.suggest("flex-shrink", () => []), e3.utilities.functional("flex-shrink", (e4) => {
        if (!e4.modifier) {
          if (!e4.value)
            return [T("flex-shrink", "1")];
          if ("arbitrary" === e4.value.kind)
            return [T("flex-shrink", e4.value.value)];
          if (Ce(e4.value.value))
            return [T("flex-shrink", e4.value.value)];
        }
      }), e3.utilities.suggest("flex-grow", () => []), e3.utilities.functional("flex-grow", (e4) => {
        if (!e4.modifier) {
          if (!e4.value)
            return [T("flex-grow", "1")];
          if ("arbitrary" === e4.value.kind)
            return [T("flex-grow", e4.value.value)];
          if (Ce(e4.value.value))
            return [T("flex-grow", e4.value.value)];
        }
      }), e3.utilities.suggest("order-none", () => []), e3.utilities.static("order-none", () => [T("order", "0")]), e3.utilities.suggest("break-words", () => []), e3.utilities.static("break-words", () => [T("overflow-wrap", "break-word")]);
    }(e2);
    let s2 = e2.resolveThemeValue;
    if (e2.resolveThemeValue = function(n3, i3) {
      return n3.startsWith("--") ? s2(n3, i3) : (a2 |= lr({ designSystem: e2, base: t2, ast: r2, sources: o2, configs: [], pluginDetails: [] }), e2.resolveThemeValue(n3, i3));
    }, !i2.length && !l2.length)
      return 0;
    let [c2, u2] = await Promise.all([Promise.all(l2.map(async ({ id: e3, base: t3, reference: r3, src: o3 }) => {
      let a3 = await n2(e3, t3, "config");
      return { path: e3, base: a3.base, config: a3.module, reference: r3, src: o3 };
    })), Promise.all(i2.map(async ([{ id: e3, base: t3, reference: r3, src: o3 }, a3]) => {
      let i3 = await n2(e3, t3, "plugin");
      return { path: e3, base: i3.base, plugin: i3.module, options: a3, reference: r3, src: o3 };
    }))]);
    return a2 |= lr({ designSystem: e2, base: t2, ast: r2, sources: o2, configs: c2, pluginDetails: u2 }), a2;
  }
  function lr({ designSystem: e2, base: t2, ast: r2, sources: n2, configs: o2, pluginDetails: a2 }) {
    let i2 = 0, l2 = [...a2.map((e3) => {
      if (!e3.options)
        return { config: { plugins: [e3.plugin] }, base: e3.base, reference: e3.reference, src: e3.src };
      if ("__isOptionsFunction" in e3.plugin)
        return { config: { plugins: [e3.plugin(e3.options)] }, base: e3.base, reference: e3.reference, src: e3.src };
      throw new Error(`The plugin "${e3.path}" does not accept options`);
    }), ...o2], { resolvedConfig: s2 } = Qt(e2, [{ config: Jt(e2.theme), base: t2, reference: true, src: void 0 }, ...l2, { config: { plugins: [nr] }, base: t2, reference: true, src: void 0 }]), { resolvedConfig: c2, replacedThemeKeys: u2 } = Qt(e2, l2), d2 = { designSystem: e2, ast: r2, resolvedConfig: s2, featuresRef: { set current(e3) {
      i2 |= e3;
    } } }, f2 = Ut({ ...d2, referenceMode: false, src: void 0 }), p2 = e2.resolveThemeValue;
    e2.resolveThemeValue = function(e3, t3) {
      if ("-" === e3[0] && "-" === e3[1])
        return p2(e3, t3);
      let r3 = f2.theme(e3, void 0);
      return Array.isArray(r3) && 2 === r3.length ? r3[0] : Array.isArray(r3) ? r3.join(", ") : "object" == typeof r3 && null !== r3 && "DEFAULT" in r3 ? r3.DEFAULT : "string" == typeof r3 ? r3 : void 0;
    };
    for (let { handler: e3, reference: t3, src: r3 } of s2.plugins) {
      e3(Ut({ ...d2, referenceMode: t3 ?? false, src: r3 }));
    }
    if (gt(e2, c2, u2), _t(e2, c2), function(e3, t3) {
      let r3 = e3.theme.aria || {}, n3 = e3.theme.supports || {}, o3 = e3.theme.data || {};
      if (Object.keys(r3).length > 0) {
        let e4 = t3.variants.get("aria"), n4 = e4?.applyFn, o4 = e4?.compounds;
        t3.variants.functional("aria", (e5, t4) => {
          let o5 = t4.value;
          return o5 && "named" === o5.kind && o5.value in r3 ? n4?.(e5, { ...t4, value: { kind: "arbitrary", value: r3[o5.value] } }) : n4?.(e5, t4);
        }, { compounds: o4 });
      }
      if (Object.keys(n3).length > 0) {
        let e4 = t3.variants.get("supports"), r4 = e4?.applyFn, o4 = e4?.compounds;
        t3.variants.functional("supports", (e5, t4) => {
          let o5 = t4.value;
          return o5 && "named" === o5.kind && o5.value in n3 ? r4?.(e5, { ...t4, value: { kind: "arbitrary", value: n3[o5.value] } }) : r4?.(e5, t4);
        }, { compounds: o4 });
      }
      if (Object.keys(o3).length > 0) {
        let e4 = t3.variants.get("data"), r4 = e4?.applyFn, n4 = e4?.compounds;
        t3.variants.functional("data", (e5, t4) => {
          let n5 = t4.value;
          return n5 && "named" === n5.kind && n5.value in o3 ? r4?.(e5, { ...t4, value: { kind: "arbitrary", value: o3[n5.value] } }) : r4?.(e5, t4);
        }, { compounds: n4 });
      }
    }(c2, e2), function(e3, t3) {
      let r3 = e3.theme.screens || {}, n3 = t3.variants.get("min")?.order ?? 0, o3 = [];
      for (let [e4, a3] of Object.entries(r3)) {
        let r4 = function(r5) {
          t3.variants.static(e4, (e5) => {
            e5.nodes = [S("@media", c3, e5.nodes)];
          }, { order: r5 });
        }, i3 = t3.variants.get(e4), l3 = t3.theme.resolveValue(e4, ["--breakpoint"]);
        if (i3 && l3 && !t3.theme.hasDefault(`--breakpoint-${e4}`))
          continue;
        let s3 = true;
        "string" == typeof a3 && (s3 = false);
        let c3 = or(a3);
        s3 ? o3.push(r4) : r4(n3);
      }
      if (0 !== o3.length) {
        for (let [, e4] of t3.variants.variants)
          e4.order > n3 && (e4.order += o3.length);
        t3.variants.compareFns = new Map(Array.from(t3.variants.compareFns).map(([e4, t4]) => (e4 > n3 && (e4 += o3.length), [e4, t4])));
        for (let [e4, t4] of o3.entries())
          t4(n3 + e4 + 1);
      }
    }(c2, e2), rr(c2, e2), !e2.theme.prefix && s2.prefix) {
      if (s2.prefix.endsWith("-") && (s2.prefix = s2.prefix.slice(0, -1), console.warn(`The prefix "${s2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !ar.test(s2.prefix))
        throw new Error(`The prefix "${s2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
      e2.theme.prefix = s2.prefix;
    }
    if (!e2.important && true === s2.important && (e2.important = true), "string" == typeof s2.important) {
      let e3 = s2.important;
      y(r2, (t3, r3) => {
        if ("at-rule" !== t3.kind || "@tailwind" !== t3.name || "utilities" !== t3.params)
          return;
        let n3 = N(r3);
        return "rule" === n3.parent?.kind && n3.parent.selector === e3 ? b.Stop : b.ReplaceStop(z(e3, [t3]));
      });
    }
    for (let t3 of s2.blocklist)
      e2.invalidCandidates.add(t3);
    for (let e3 of s2.content.files) {
      if ("raw" in e3)
        throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(e3, null, 2)}

This feature is not currently supported.`);
      let t3 = false;
      "!" == e3.pattern[0] && (t3 = true, e3.pattern = e3.pattern.slice(1)), n2.push({ ...e3, negated: t3 });
    }
    return i2;
  }
  var sr = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
  function cr(e2) {
    let t2 = e2.indexOf("{");
    if (-1 === t2)
      return [e2];
    let r2 = [], n2 = e2.slice(0, t2), o2 = e2.slice(t2), a2 = 0, i2 = o2.lastIndexOf("}");
    for (let e3 = 0; e3 < o2.length; e3++) {
      let t3 = o2[e3];
      if ("{" === t3)
        a2++;
      else if ("}" === t3 && (a2--, 0 === a2)) {
        i2 = e3;
        break;
      }
    }
    if (-1 === i2)
      throw new Error(`The pattern \`${e2}\` is not balanced.`);
    let l2, s2 = o2.slice(1, i2), c2 = o2.slice(i2 + 1);
    l2 = function(e3) {
      return sr.test(e3);
    }(s2) ? function(e3) {
      let t3 = e3.match(sr);
      if (!t3)
        return [e3];
      let [, r3, n3, o3] = t3, a3 = o3 ? parseInt(o3, 10) : void 0, i3 = [];
      if (/^-?\d+$/.test(r3) && /^-?\d+$/.test(n3)) {
        let e4 = parseInt(r3, 10), t4 = parseInt(n3, 10);
        if (void 0 === a3 && (a3 = e4 <= t4 ? 1 : -1), 0 === a3)
          throw new Error("Step cannot be zero in sequence expansion.");
        let o4 = e4 < t4;
        o4 && a3 < 0 && (a3 = -a3), !o4 && a3 > 0 && (a3 = -a3);
        for (let r4 = e4; o4 ? r4 <= t4 : r4 >= t4; r4 += a3)
          i3.push(r4.toString());
      }
      return i3;
    }(s2) : Z(s2, ","), l2 = l2.flatMap((e3) => cr(e3));
    let u2 = cr(c2);
    for (let e3 of u2)
      for (let t3 of l2)
        r2.push(n2 + t3 + e3);
    return r2;
  }
  var ur = /^[a-z]+$/;
  function dr() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function fr() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  async function pr(e2, { base: t2 = "", from: r2, loadModule: n2 = dr, loadStylesheet: o2 = fr } = {}) {
    let a2 = 0;
    e2 = [V({ base: t2 }, e2)], a2 |= await ht(e2, t2, o2, 0, void 0 !== r2);
    let i2 = null, c2 = new d(), u2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map(), p2 = [], h2 = null, m2 = null, w2 = [], k2 = [], x2 = [], $2 = [], A2 = null;
    y(e2, (e3, t3) => {
      if ("at-rule" !== e3.kind)
        return;
      let r3 = N(t3);
      if ("@tailwind" === e3.name && ("utilities" === e3.params || e3.params.startsWith("utilities"))) {
        if (null !== m2)
          return b.Replace([]);
        if (r3.context.reference)
          return b.Replace([]);
        let t4 = Z(e3.params, " ");
        for (let e4 of t4)
          if (e4.startsWith("source(")) {
            let t5 = e4.slice(7, -1);
            if ("none" === t5) {
              A2 = t5;
              continue;
            }
            if ('"' === t5[0] && '"' !== t5[t5.length - 1] || "'" === t5[0] && "'" !== t5[t5.length - 1] || "'" !== t5[0] && '"' !== t5[0])
              throw new Error("`source(\u2026)` paths must be quoted.");
            A2 = { base: r3.context.sourceBase ?? r3.context.base, pattern: t5.slice(1, -1) };
          }
        m2 = e3, a2 |= 16;
      }
      if ("@utility" === e3.name) {
        if (null !== r3.parent)
          throw new Error("`@utility` cannot be nested.");
        if (0 === e3.nodes.length)
          throw new Error(`\`@utility ${e3.params}\` is empty. Utilities should include at least one property.`);
        let t4 = function(e4) {
          let t5 = e4.params;
          return Ue.test(t5) ? (r4) => {
            let n3 = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
            y(e4.nodes, (e5) => {
              if ("declaration" !== e5.kind || !e5.value || !e5.value.includes("--value(") && !e5.value.includes("--modifier("))
                return;
              let t6 = v(e5.value);
              y(t6, (e6) => {
                if ("function" !== e6.kind)
                  return;
                if (!("--spacing" !== e6.value || n3["--modifier"].usedSpacingNumber && n3["--value"].usedSpacingNumber))
                  return y(e6.nodes, (e7) => {
                    if ("function" !== e7.kind || "--value" !== e7.value && "--modifier" !== e7.value)
                      return;
                    let t8 = e7.value;
                    for (let r5 of e7.nodes)
                      if ("word" === r5.kind) {
                        if ("integer" === r5.value)
                          n3[t8].usedSpacingInteger ||= true;
                        else if ("number" === r5.value && (n3[t8].usedSpacingNumber ||= true, n3["--modifier"].usedSpacingNumber && n3["--value"].usedSpacingNumber))
                          return b.Stop;
                      }
                  }), b.Continue;
                if ("--value" !== e6.value && "--modifier" !== e6.value)
                  return;
                let t7 = Z(g(e6.nodes), ",");
                for (let [e7, r5] of t7.entries())
                  r5 = r5.replace(/\\\*/g, "*"), r5 = r5.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), r5 = r5.replace(/\s+/g, ""), r5 = r5.replace(/(-\*){2,}/g, "-*"), "-" === r5[0] && "-" === r5[1] && !r5.includes("-*") && (r5 += "-*"), t7[e7] = r5;
                e6.nodes = v(t7.join(","));
                for (let t8 of e6.nodes)
                  if ("word" !== t8.kind || '"' !== t8.value[0] && "'" !== t8.value[0] || t8.value[0] !== t8.value[t8.value.length - 1]) {
                    if ("word" === t8.kind && "-" === t8.value[0] && "-" === t8.value[1]) {
                      let r5 = t8.value.replace(/-\*.*$/g, "");
                      n3[e6.value].themeKeys.add(r5);
                    } else if ("word" === t8.kind && ("[" !== t8.value[0] || "]" !== t8.value[t8.value.length - 1]) && !Pe.includes(t8.value)) {
                      console.warn(`Unsupported bare value data type: "${t8.value}".
Only valid data types are: ${Pe.map((e7) => `"${e7}"`).join(", ")}.
`);
                      let r5 = t8.value, n4 = structuredClone(e6), o3 = "\xB6";
                      y(n4.nodes, (e7) => {
                        if ("word" === e7.kind && e7.value === r5)
                          return b.ReplaceSkip({ kind: "word", value: o3 });
                      });
                      let a3 = "^".repeat(g([t8]).length), i3 = g([n4]).indexOf(o3), l2 = ["```css", g([e6]), " ".repeat(i3) + a3, "```"].join("\n");
                      console.warn(l2);
                    }
                  } else {
                    let r5 = t8.value.slice(1, -1);
                    n3[e6.value].literals.add(r5);
                  }
              }), e5.value = g(t6);
            }), r4.utilities.functional(t5.slice(0, -2), (t6) => {
              let n4 = E(e4), o3 = t6.value, a3 = t6.modifier;
              if (null === o3)
                return;
              let i3 = false, l2 = false, s2 = false, c3 = false, u3 = /* @__PURE__ */ new Map(), d2 = false;
              if (y([n4], (e5, t7) => {
                let n5 = t7.parent;
                if ("rule" !== n5?.kind && "at-rule" !== n5?.kind || "declaration" !== e5.kind || !e5.value)
                  return;
                let f3 = false, p3 = v(e5.value);
                if (y(p3, (t8) => {
                  if ("function" === t8.kind) {
                    if ("--value" === t8.value) {
                      i3 = true;
                      let a4 = qe(o3, t8, r4);
                      return a4 ? (l2 = true, a4.ratio ? d2 = true : u3.set(e5, n5), b.ReplaceSkip(a4.nodes)) : (i3 ||= false, f3 = true, b.Stop);
                    }
                    if ("--modifier" === t8.value) {
                      if (null === a3)
                        return f3 = true, b.Stop;
                      s2 = true;
                      let e6 = qe(a3, t8, r4);
                      return e6 ? (c3 = true, b.ReplaceSkip(e6.nodes)) : (s2 ||= false, f3 = true, b.Stop);
                    }
                  }
                }), f3)
                  return b.ReplaceSkip([]);
                e5.value = g(p3);
              }), i3 && !l2 || s2 && !c3 || d2 && c3 || a3 && !d2 && !c3)
                return null;
              if (d2)
                for (let [e5, t7] of u3) {
                  let r5 = t7.nodes.indexOf(e5);
                  -1 !== r5 && t7.nodes.splice(r5, 1);
                }
              return n4.nodes;
            }), r4.utilities.suggest(t5.slice(0, -2), () => {
              let e5 = [], t6 = [];
              for (let [o3, { literals: a3, usedSpacingNumber: i3, usedSpacingInteger: l2, themeKeys: s2 }] of [[e5, n3["--value"]], [t6, n3["--modifier"]]]) {
                for (let e6 of a3)
                  o3.push(e6);
                if (i3)
                  o3.push(...We);
                else if (l2)
                  for (let e6 of We)
                    Ce(e6) && o3.push(e6);
                for (let e6 of r4.theme.keysInNamespaces(s2))
                  o3.push(e6.replace(Ie, (e7, t7, r5) => `${t7}.${r5}`));
              }
              return [{ values: e5, modifiers: t6 }];
            });
          } : Fe.test(t5) ? (r4) => {
            r4.utilities.static(t5, () => e4.nodes.map(E));
          } : null;
        }(e3);
        if (null === t4) {
          if (!e3.params.endsWith("-*")) {
            if (e3.params.endsWith("*"))
              throw new Error(`\`@utility ${e3.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
            if (e3.params.includes("*"))
              throw new Error(`\`@utility ${e3.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
          }
          throw new Error(`\`@utility ${e3.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
        }
        p2.push(t4);
      }
      if ("@source" === e3.name) {
        if (e3.nodes.length > 0)
          throw new Error("`@source` cannot have a body.");
        if (null !== r3.parent)
          throw new Error("`@source` cannot be nested.");
        let t4 = false, n3 = false, o3 = e3.params;
        if ("n" === o3[0] && o3.startsWith("not ") && (t4 = true, o3 = o3.slice(4)), "i" === o3[0] && o3.startsWith("inline(") && (n3 = true, o3 = o3.slice(7, -1)), '"' === o3[0] && '"' !== o3[o3.length - 1] || "'" === o3[0] && "'" !== o3[o3.length - 1] || "'" !== o3[0] && '"' !== o3[0])
          throw new Error("`@source` paths must be quoted.");
        let a3 = o3.slice(1, -1);
        if (n3) {
          let e4 = t4 ? $2 : x2, r4 = Z(a3, " ");
          for (let t5 of r4)
            for (let r5 of cr(t5))
              e4.push(r5);
        } else
          k2.push({ base: r3.context.base, pattern: a3, negated: t4 });
        return b.ReplaceSkip([]);
      }
      if ("@variant" === e3.name && (null === r3.parent ? 0 === e3.nodes.length ? e3.name = "@custom-variant" : (y(e3.nodes, (t4) => {
        if ("at-rule" === t4.kind && "@slot" === t4.name)
          return e3.name = "@custom-variant", b.Stop;
      }), "@variant" === e3.name && w2.push(e3)) : w2.push(e3)), "@custom-variant" === e3.name) {
        if (null !== r3.parent)
          throw new Error("`@custom-variant` cannot be nested.");
        let [t4, n3] = Z(e3.params, " ");
        if (!Qe.test(t4))
          throw new Error(`\`@custom-variant ${t4}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
        if (e3.nodes.length > 0 && n3)
          throw new Error(`\`@custom-variant ${t4}\` cannot have both a selector and a body.`);
        if (0 === e3.nodes.length) {
          if (!n3)
            throw new Error(`\`@custom-variant ${t4}\` has no selector or body.`);
          let e4 = Z(n3.slice(1, -1), ",");
          if (0 === e4.length || e4.some((e5) => "" === e5.trim()))
            throw new Error(`\`@custom-variant ${t4} (${e4.join(",")})\` selector is invalid.`);
          let r4 = [], o3 = [];
          for (let t5 of e4)
            t5 = t5.trim(), "@" === t5[0] ? r4.push(t5) : o3.push(t5);
          u2.set(t4, (e5) => {
            e5.variants.static(t4, (e6) => {
              let t5 = [];
              o3.length > 0 && t5.push(z(o3.join(", "), e6.nodes));
              for (let n4 of r4)
                t5.push(C(n4, e6.nodes));
              e6.nodes = t5;
            }, { compounds: tt([...o3, ...r4]) });
          }), f2.set(t4, /* @__PURE__ */ new Set());
        } else {
          let r4 = /* @__PURE__ */ new Set();
          y(e3.nodes, (e4) => {
            "at-rule" === e4.kind && "@variant" === e4.name && r4.add(e4.params);
          }), u2.set(t4, (r5) => {
            r5.variants.fromAst(t4, e3.nodes, r5);
          }), f2.set(t4, r4);
        }
        return b.ReplaceSkip([]);
      }
      if ("@media" === e3.name) {
        let t4 = Z(e3.params, " "), n3 = [];
        for (let o3 of t4)
          if (o3.startsWith("source(")) {
            let t5 = o3.slice(7, -1);
            y(e3.nodes, (e4) => {
              if ("at-rule" === e4.kind && "@tailwind" === e4.name && "utilities" === e4.params)
                return e4.params += ` source(${t5})`, b.ReplaceStop([V({ sourceBase: r3.context.base }, [e4])]);
            });
          } else if (o3.startsWith("theme(")) {
            let t5 = o3.slice(6, -1), r4 = t5.includes("reference");
            y(e3.nodes, (e4) => {
              if ("context" !== e4.kind) {
                if ("at-rule" !== e4.kind) {
                  if (r4)
                    throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                  return b.Continue;
                }
                if ("@theme" === e4.name)
                  return e4.params += " " + t5, b.Skip;
              }
            });
          } else if (o3.startsWith("prefix(")) {
            let t5 = o3.slice(7, -1);
            y(e3.nodes, (e4) => {
              if ("at-rule" === e4.kind && "@theme" === e4.name)
                return e4.params += ` prefix(${t5})`, b.Skip;
            });
          } else
            "important" === o3 ? i2 = true : "reference" === o3 ? e3.nodes = [V({ reference: true }, e3.nodes)] : n3.push(o3);
        if (n3.length > 0)
          e3.params = n3.join(" ");
        else if (t4.length > 0)
          return b.Replace(e3.nodes);
        return b.Continue;
      }
      if ("@theme" === e3.name) {
        let [t4, n3] = function(e4) {
          let t5 = 0, r4 = null;
          for (let n4 of Z(e4, " "))
            "reference" === n4 ? t5 |= 2 : "inline" === n4 ? t5 |= 1 : "default" === n4 ? t5 |= 4 : "static" === n4 ? t5 |= 8 : n4.startsWith("prefix(") && n4.endsWith(")") && (r4 = n4.slice(7, -1));
          return [t5, r4];
        }(e3.params);
        if (a2 |= 64, r3.context.reference && (t4 |= 2), n3) {
          if (!ur.test(n3))
            throw new Error(`The prefix "${n3}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
          c2.prefix = n3;
        }
        return y(e3.nodes, (r4) => {
          if ("at-rule" === r4.kind && "@keyframes" === r4.name)
            return c2.addKeyframes(r4), b.Skip;
          if ("comment" === r4.kind)
            return;
          if ("declaration" === r4.kind && r4.property.startsWith("--"))
            return void c2.add(s(r4.property), r4.value ?? "", t4, r4.src);
          let n4 = F([S(e3.name, e3.params, [r4])]).split("\n").map((e4, t5, r5) => `${0 === t5 || t5 >= r5.length - 2 ? " " : ">"} ${e4}`).join("\n");
          throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${n4}`);
        }), h2 ? b.ReplaceSkip([]) : (h2 = z(":root, :host", []), h2.src = e3.src, b.ReplaceSkip(h2));
      }
    });
    let j2 = at(c2, m2?.src);
    if (i2 && (j2.important = i2), $2.length > 0)
      for (let e3 of $2)
        j2.invalidCandidates.add(e3);
    a2 |= await ir({ designSystem: j2, base: t2, ast: e2, loadModule: n2, sources: k2 });
    for (let e3 of u2.keys())
      j2.variants.static(e3, () => {
      });
    for (let e3 of function(e4, t3) {
      let r3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set(), o3 = [];
      function a3(i3, l2 = []) {
        if (e4.has(i3) && !r3.has(i3)) {
          n3.has(i3) && t3.onCircularDependency?.(l2, i3), n3.add(i3);
          for (let t4 of e4.get(i3) ?? [])
            l2.push(i3), a3(t4, l2), l2.pop();
          r3.add(i3), n3.delete(i3), o3.push(i3);
        }
      }
      for (let t4 of e4.keys())
        a3(t4);
      return o3;
    }(f2, { onCircularDependency(e4, t3) {
      let r3 = F(e4.map((r4, n3) => S("@custom-variant", r4, [S("@variant", e4[n3 + 1] ?? t3, [])]))).replaceAll(";", " { \u2026 }").replace(`@custom-variant ${t3} {`, `@custom-variant ${t3} { /* \u2190 */`);
      throw new Error(`Circular dependency detected in custom variants:

${r3}`);
    } }))
      u2.get(e3)?.(j2);
    for (let e3 of p2)
      e3(j2);
    if (h2) {
      let t3 = [];
      for (let [e3, r4] of j2.theme.entries()) {
        if (2 & r4.options)
          continue;
        let n3 = T(l(e3), r4.value);
        n3.src = r4.src, t3.push(n3);
      }
      let r3 = j2.theme.getKeyframes();
      for (let t4 of r3)
        e2.push(V({ theme: true }, [K([t4])]));
      h2.nodes = [V({ theme: true }, t3)];
    }
    if (a2 |= ot(e2, j2), a2 |= Je(e2, j2), a2 |= ft(e2, j2), m2) {
      let e3 = m2;
      e3.kind = "context", e3.context = {};
    }
    return y(e2, (e3) => {
      if ("at-rule" === e3.kind)
        return "@utility" === e3.name ? b.Replace([]) : b.Skip;
    }), { designSystem: j2, ast: e2, sources: k2, root: A2, utilitiesNode: m2, features: a2, inlineCandidates: x2 };
  }
  async function hr(t2, r2 = {}) {
    let o2 = n(t2, { from: r2.from }), a2 = await async function(e2, t3 = {}) {
      let { designSystem: r3, ast: n2, sources: o3, root: a3, utilitiesNode: i3, features: l3, inlineCandidates: s2 } = await pr(e2, t3);
      function c2(e3) {
        r3.invalidCandidates.add(e3);
      }
      n2.unshift(j("! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com "));
      let u2 = /* @__PURE__ */ new Set(), d2 = null, f2 = 0, p2 = false;
      for (let e3 of s2)
        r3.invalidCandidates.has(e3) || (u2.add(e3), p2 = true);
      return { sources: o3, root: a3, features: l3, build(o4) {
        if (0 === l3)
          return e2;
        if (!i3)
          return d2 ??= O(n2, r3, t3.polyfills), d2;
        let a4 = p2, s3 = false;
        p2 = false;
        let h2 = u2.size;
        for (let e3 of o4)
          if (!r3.invalidCandidates.has(e3))
            if ("-" === e3[0] && "-" === e3[1]) {
              let t4 = r3.theme.markUsedVariable(e3);
              a4 ||= t4, s3 ||= t4;
            } else
              u2.add(e3), a4 ||= u2.size !== h2;
        if (!a4)
          return d2 ??= O(n2, r3, t3.polyfills), d2;
        let m2 = lt(u2, r3, { onInvalidCandidate: c2 }).astNodes;
        return t3.from && y(m2, (e3) => {
          e3.src ??= i3.src;
        }), s3 || f2 !== m2.length ? (f2 = m2.length, i3.nodes = m2, d2 = O(n2, r3, t3.polyfills), d2) : (d2 ??= O(n2, r3, t3.polyfills), d2);
      } };
    }(o2, r2), i2 = o2, l2 = t2;
    return { ...a2, build(e2) {
      let t3 = a2.build(e2);
      return t3 === i2 || (l2 = F(t3, !!r2.from), i2 = t3), l2;
    }, buildSourceMap: () => function({ ast: t3 }) {
      let r3 = new f((t4) => e(t4.code)), n2 = new f((e2) => ({ url: e2.file, content: e2.code, ignore: false })), o3 = { file: null, sources: [], mappings: [] };
      y(t3, (e2) => {
        if (!e2.src || !e2.dst)
          return;
        let t4 = n2.get(e2.src[0]);
        if (!t4.content)
          return;
        let a3 = r3.get(e2.src[0]), i3 = r3.get(e2.dst[0]), l3 = t4.content.slice(e2.src[1], e2.src[2]), s2 = 0;
        for (let r4 of l3.split("\n")) {
          if ("" !== r4.trim()) {
            let r5 = a3.find(e2.src[1] + s2), n3 = i3.find(e2.dst[1]);
            o3.mappings.push({ name: null, originalPosition: { source: t4, ...r5 }, generatedPosition: n3 });
          }
          s2 += r4.length, s2 += 1;
        }
        let c2 = a3.find(e2.src[2]), u2 = i3.find(e2.dst[2]);
        o3.mappings.push({ name: null, originalPosition: { source: t4, ...c2 }, generatedPosition: u2 });
      });
      for (let e2 of r3.keys())
        o3.sources.push(n2.get(e2));
      return o3.mappings.sort((e2, t4) => e2.generatedPosition.line - t4.generatedPosition.line || e2.generatedPosition.column - t4.generatedPosition.column || (e2.originalPosition?.line ?? 0) - (t4.originalPosition?.line ?? 0) || (e2.originalPosition?.column ?? 0) - (t4.originalPosition?.column ?? 0)), o3;
    }({ ast: i2 }) };
  }
  var mr, gr = { index: "@layer theme, base, components, utilities;\n\n@import './theme.css' layer(theme);\n@import './preflight.css' layer(base);\n@import './utilities.css' layer(utilities);\n", preflight: "/*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 2 */\n  border: 0 solid; /* 3 */\n}\n\n/*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  tab-size: 4; /* 3 */\n  font-family: --theme(\n    --default-font-family,\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji'\n  ); /* 4 */\n  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */\n  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\n  Remove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  -webkit-text-decoration: inherit;\n  text-decoration: inherit;\n}\n\n/*\n  Add the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: --theme(\n    --default-mono-font-family,\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    'Liberation Mono',\n    'Courier New',\n    monospace\n  ); /* 1 */\n  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */\n  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\n  Add the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\n  Add the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\n  Make lists unstyled by default.\n*/\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\nbutton,\ninput,\nselect,\noptgroup,\ntextarea,\n::file-selector-button {\n  font: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  border-radius: 0; /* 2 */\n  background-color: transparent; /* 3 */\n  opacity: 1; /* 4 */\n}\n\n/*\n  Restore default font weight.\n*/\n\n:where(select:is([multiple], [size])) optgroup {\n  font-weight: bolder;\n}\n\n/*\n  Restore indentation.\n*/\n\n:where(select:is([multiple], [size])) optgroup option {\n  padding-inline-start: 20px;\n}\n\n/*\n  Restore space after button.\n*/\n\n::file-selector-button {\n  margin-inline-end: 4px;\n}\n\n/*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n::placeholder {\n  opacity: 1;\n}\n\n/*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(\u2026)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n  (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n  ::placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n}\n\n/*\n  Prevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n::-webkit-date-and-time-value {\n  min-height: 1lh; /* 1 */\n  text-align: inherit; /* 2 */\n}\n\n/*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n::-webkit-datetime-edit {\n  display: inline-flex;\n}\n\n/*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-datetime-edit,\n::-webkit-datetime-edit-year-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-minute-field,\n::-webkit-datetime-edit-second-field,\n::-webkit-datetime-edit-millisecond-field,\n::-webkit-datetime-edit-meridiem-field {\n  padding-block: 0;\n}\n\n/*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n::-webkit-calendar-picker-indicator {\n  line-height: 1;\n}\n\n/*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\nbutton,\ninput:where([type='button'], [type='reset'], [type='submit']),\n::file-selector-button {\n  appearance: button;\n}\n\n/*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n[hidden]:where(:not([hidden='until-found'])) {\n  display: none !important;\n}\n", theme: "@theme default {\n  --font-sans:\n    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji';\n  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;\n  --font-mono:\n    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',\n    monospace;\n\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n\n  --color-orange-50: oklch(98% 0.016 73.684);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n\n  --color-amber-50: oklch(98.7% 0.022 95.277);\n  --color-amber-100: oklch(96.2% 0.059 95.617);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-300: oklch(87.9% 0.169 91.605);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-amber-900: oklch(41.4% 0.112 45.904);\n  --color-amber-950: oklch(27.9% 0.077 45.635);\n\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n  --color-lime-50: oklch(98.6% 0.031 120.757);\n  --color-lime-100: oklch(96.7% 0.067 122.328);\n  --color-lime-200: oklch(93.8% 0.127 124.321);\n  --color-lime-300: oklch(89.7% 0.196 126.665);\n  --color-lime-400: oklch(84.1% 0.238 128.85);\n  --color-lime-500: oklch(76.8% 0.233 130.85);\n  --color-lime-600: oklch(64.8% 0.2 131.684);\n  --color-lime-700: oklch(53.2% 0.157 131.589);\n  --color-lime-800: oklch(45.3% 0.124 130.933);\n  --color-lime-900: oklch(40.5% 0.101 131.063);\n  --color-lime-950: oklch(27.4% 0.072 132.109);\n\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n\n  --color-emerald-50: oklch(97.9% 0.021 166.113);\n  --color-emerald-100: oklch(95% 0.052 163.051);\n  --color-emerald-200: oklch(90.5% 0.093 164.15);\n  --color-emerald-300: oklch(84.5% 0.143 164.978);\n  --color-emerald-400: oklch(76.5% 0.177 163.223);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-emerald-600: oklch(59.6% 0.145 163.225);\n  --color-emerald-700: oklch(50.8% 0.118 165.612);\n  --color-emerald-800: oklch(43.2% 0.095 166.913);\n  --color-emerald-900: oklch(37.8% 0.077 168.94);\n  --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n  --color-teal-50: oklch(98.4% 0.014 180.72);\n  --color-teal-100: oklch(95.3% 0.051 180.801);\n  --color-teal-200: oklch(91% 0.096 180.426);\n  --color-teal-300: oklch(85.5% 0.138 181.071);\n  --color-teal-400: oklch(77.7% 0.152 181.912);\n  --color-teal-500: oklch(70.4% 0.14 182.503);\n  --color-teal-600: oklch(60% 0.118 184.704);\n  --color-teal-700: oklch(51.1% 0.096 186.391);\n  --color-teal-800: oklch(43.7% 0.078 188.216);\n  --color-teal-900: oklch(38.6% 0.063 188.416);\n  --color-teal-950: oklch(27.7% 0.046 192.524);\n\n  --color-cyan-50: oklch(98.4% 0.019 200.873);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-200: oklch(91.7% 0.08 205.041);\n  --color-cyan-300: oklch(86.5% 0.127 207.078);\n  --color-cyan-400: oklch(78.9% 0.154 211.53);\n  --color-cyan-500: oklch(71.5% 0.143 215.221);\n  --color-cyan-600: oklch(60.9% 0.126 221.723);\n  --color-cyan-700: oklch(52% 0.105 223.128);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-cyan-900: oklch(39.8% 0.07 227.392);\n  --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n  --color-sky-50: oklch(97.7% 0.013 236.62);\n  --color-sky-100: oklch(95.1% 0.026 236.824);\n  --color-sky-200: oklch(90.1% 0.058 230.902);\n  --color-sky-300: oklch(82.8% 0.111 230.318);\n  --color-sky-400: oklch(74.6% 0.16 232.661);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-sky-600: oklch(58.8% 0.158 241.966);\n  --color-sky-700: oklch(50% 0.134 242.749);\n  --color-sky-800: oklch(44.3% 0.11 240.79);\n  --color-sky-900: oklch(39.1% 0.09 240.876);\n  --color-sky-950: oklch(29.3% 0.066 243.157);\n\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-400: oklch(70.7% 0.165 254.624);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-800: oklch(42.4% 0.199 265.638);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-300: oklch(78.5% 0.115 274.713);\n  --color-indigo-400: oklch(67.3% 0.182 276.935);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-800: oklch(39.8% 0.195 277.366);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n  --color-violet-50: oklch(96.9% 0.016 293.756);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-200: oklch(89.4% 0.057 293.283);\n  --color-violet-300: oklch(81.1% 0.111 293.571);\n  --color-violet-400: oklch(70.2% 0.183 293.541);\n  --color-violet-500: oklch(60.6% 0.25 292.717);\n  --color-violet-600: oklch(54.1% 0.281 293.009);\n  --color-violet-700: oklch(49.1% 0.27 292.581);\n  --color-violet-800: oklch(43.2% 0.232 292.759);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-violet-950: oklch(28.3% 0.141 291.089);\n\n  --color-purple-50: oklch(97.7% 0.014 308.299);\n  --color-purple-100: oklch(94.6% 0.033 307.174);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-300: oklch(82.7% 0.119 306.383);\n  --color-purple-400: oklch(71.4% 0.203 305.504);\n  --color-purple-500: oklch(62.7% 0.265 303.9);\n  --color-purple-600: oklch(55.8% 0.288 302.321);\n  --color-purple-700: oklch(49.6% 0.265 301.924);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-purple-900: oklch(38.1% 0.176 304.987);\n  --color-purple-950: oklch(29.1% 0.149 302.717);\n\n  --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n  --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n  --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n  --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n  --color-fuchsia-400: oklch(74% 0.238 322.16);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n  --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n  --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n  --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n  --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n  --color-pink-50: oklch(97.1% 0.014 343.198);\n  --color-pink-100: oklch(94.8% 0.028 342.258);\n  --color-pink-200: oklch(89.9% 0.061 343.231);\n  --color-pink-300: oklch(82.3% 0.12 346.018);\n  --color-pink-400: oklch(71.8% 0.202 349.761);\n  --color-pink-500: oklch(65.6% 0.241 354.308);\n  --color-pink-600: oklch(59.2% 0.249 0.584);\n  --color-pink-700: oklch(52.5% 0.223 3.958);\n  --color-pink-800: oklch(45.9% 0.187 3.815);\n  --color-pink-900: oklch(40.8% 0.153 2.432);\n  --color-pink-950: oklch(28.4% 0.109 3.907);\n\n  --color-rose-50: oklch(96.9% 0.015 12.422);\n  --color-rose-100: oklch(94.1% 0.03 12.58);\n  --color-rose-200: oklch(89.2% 0.058 10.001);\n  --color-rose-300: oklch(81% 0.117 11.638);\n  --color-rose-400: oklch(71.2% 0.194 13.428);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-rose-600: oklch(58.6% 0.253 17.585);\n  --color-rose-700: oklch(51.4% 0.222 16.935);\n  --color-rose-800: oklch(45.5% 0.188 13.697);\n  --color-rose-900: oklch(41% 0.159 10.272);\n  --color-rose-950: oklch(27.1% 0.105 12.094);\n\n  --color-slate-50: oklch(98.4% 0.003 247.858);\n  --color-slate-100: oklch(96.8% 0.007 247.896);\n  --color-slate-200: oklch(92.9% 0.013 255.508);\n  --color-slate-300: oklch(86.9% 0.022 252.894);\n  --color-slate-400: oklch(70.4% 0.04 256.788);\n  --color-slate-500: oklch(55.4% 0.046 257.417);\n  --color-slate-600: oklch(44.6% 0.043 257.281);\n  --color-slate-700: oklch(37.2% 0.044 257.287);\n  --color-slate-800: oklch(27.9% 0.041 260.031);\n  --color-slate-900: oklch(20.8% 0.042 265.755);\n  --color-slate-950: oklch(12.9% 0.042 264.695);\n\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-gray-950: oklch(13% 0.028 261.692);\n\n  --color-zinc-50: oklch(98.5% 0 0);\n  --color-zinc-100: oklch(96.7% 0.001 286.375);\n  --color-zinc-200: oklch(92% 0.004 286.32);\n  --color-zinc-300: oklch(87.1% 0.006 286.286);\n  --color-zinc-400: oklch(70.5% 0.015 286.067);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-zinc-600: oklch(44.2% 0.017 285.786);\n  --color-zinc-700: oklch(37% 0.013 285.805);\n  --color-zinc-800: oklch(27.4% 0.006 286.033);\n  --color-zinc-900: oklch(21% 0.006 285.885);\n  --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n  --color-neutral-50: oklch(98.5% 0 0);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n\n  --color-stone-50: oklch(98.5% 0.001 106.423);\n  --color-stone-100: oklch(97% 0.001 106.424);\n  --color-stone-200: oklch(92.3% 0.003 48.717);\n  --color-stone-300: oklch(86.9% 0.005 56.366);\n  --color-stone-400: oklch(70.9% 0.01 56.259);\n  --color-stone-500: oklch(55.3% 0.013 58.071);\n  --color-stone-600: oklch(44.4% 0.011 73.639);\n  --color-stone-700: oklch(37.4% 0.01 67.558);\n  --color-stone-800: oklch(26.8% 0.007 34.298);\n  --color-stone-900: oklch(21.6% 0.006 56.043);\n  --color-stone-950: oklch(14.7% 0.004 49.25);\n\n  --color-black: #000;\n  --color-white: #fff;\n\n  --spacing: 0.25rem;\n\n  --breakpoint-sm: 40rem;\n  --breakpoint-md: 48rem;\n  --breakpoint-lg: 64rem;\n  --breakpoint-xl: 80rem;\n  --breakpoint-2xl: 96rem;\n\n  --container-3xs: 16rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-4xl: 56rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --container-7xl: 80rem;\n\n  --text-xs: 0.75rem;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 0.875rem;\n  --text-sm--line-height: calc(1.25 / 0.875);\n  --text-base: 1rem;\n  --text-base--line-height: calc(1.5 / 1);\n  --text-lg: 1.125rem;\n  --text-lg--line-height: calc(1.75 / 1.125);\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --text-4xl: 2.25rem;\n  --text-4xl--line-height: calc(2.5 / 2.25);\n  --text-5xl: 3rem;\n  --text-5xl--line-height: 1;\n  --text-6xl: 3.75rem;\n  --text-6xl--line-height: 1;\n  --text-7xl: 4.5rem;\n  --text-7xl--line-height: 1;\n  --text-8xl: 6rem;\n  --text-8xl--line-height: 1;\n  --text-9xl: 8rem;\n  --text-9xl--line-height: 1;\n\n  --font-weight-thin: 100;\n  --font-weight-extralight: 200;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --font-weight-extrabold: 800;\n  --font-weight-black: 900;\n\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-4xl: 2rem;\n\n  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n  --text-shadow-sm:\n    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);\n  --text-shadow-md:\n    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);\n  --text-shadow-lg:\n    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);\n\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n  --animate-spin: spin 1s linear infinite;\n  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --animate-bounce: bounce 1s infinite;\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes ping {\n    75%,\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n\n  @keyframes pulse {\n    50% {\n      opacity: 0.5;\n    }\n  }\n\n  @keyframes bounce {\n    0%,\n    100% {\n      transform: translateY(-25%);\n      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    }\n\n    50% {\n      transform: none;\n      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    }\n  }\n\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --blur-lg: 16px;\n  --blur-xl: 24px;\n  --blur-2xl: 40px;\n  --blur-3xl: 64px;\n\n  --perspective-dramatic: 100px;\n  --perspective-near: 300px;\n  --perspective-normal: 500px;\n  --perspective-midrange: 800px;\n  --perspective-distant: 1200px;\n\n  --aspect-video: 16 / 9;\n\n  --default-transition-duration: 150ms;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --default-font-family: --theme(--font-sans, initial);\n  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);\n  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);\n  --default-mono-font-family: --theme(--font-mono, initial);\n  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);\n  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);\n}\n\n/* Deprecated */\n@theme default inline reference {\n  --blur: 8px;\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n  --radius: 0.25rem;\n  --max-width-prose: 65ch;\n}\n", utilities: "@tailwind utilities;\n" }, vr = "text/tailwindcss", wr = /* @__PURE__ */ new Set(), kr = "", br = document.createElement("style"), yr = Promise.resolve(), xr = 1, $r = new class {
    start(e2) {
      performance.mark(`${e2} (start)`);
    }
    end(e2, t2) {
      performance.mark(`${e2} (end)`), performance.measure(e2, { start: `${e2} (start)`, end: `${e2} (end)`, detail: t2 });
    }
    hit(e2, t2) {
      performance.mark(e2, { detail: t2 });
    }
    error(e2) {
      throw performance.mark("(error)", { detail: { error: `${e2}` } }), e2;
    }
  }();
  async function Ar(e2, t2) {
    try {
      let r2 = function() {
        if ("tailwindcss" === e2)
          return { path: "virtual:tailwindcss/index.css", base: t2, content: gr.index };
        if ("tailwindcss/preflight" === e2 || "tailwindcss/preflight.css" === e2 || "./preflight.css" === e2)
          return { path: "virtual:tailwindcss/preflight.css", base: t2, content: gr.preflight };
        if ("tailwindcss/theme" === e2 || "tailwindcss/theme.css" === e2 || "./theme.css" === e2)
          return { path: "virtual:tailwindcss/theme.css", base: t2, content: gr.theme };
        if ("tailwindcss/utilities" === e2 || "tailwindcss/utilities.css" === e2 || "./utilities.css" === e2)
          return { path: "virtual:tailwindcss/utilities.css", base: t2, content: gr.utilities };
        throw new Error(`The browser build does not support @import for "${e2}"`);
      }();
      return $r.hit("Loaded stylesheet", { id: e2, base: t2, size: r2.content.length }), r2;
    } catch (r2) {
      throw $r.hit("Failed to load stylesheet", { id: e2, base: t2, error: r2.message ?? r2 }), r2;
    }
  }
  async function zr() {
    throw new Error("The browser build does not support plugins or config files.");
  }
  function Sr(e2) {
    yr = yr.then(async function() {
      if (!mr && "full" !== e2)
        return;
      let t2 = xr++;
      $r.start(`Build #${t2} (${e2})`), "full" === e2 && await async function() {
        $r.start("Create compiler"), $r.start("Reading Stylesheets");
        let e3 = document.querySelectorAll(`style[type="${vr}"]`), t3 = "";
        for (let r2 of e3)
          Tr(r2), t3 += r2.textContent + "\n";
        if (t3.includes("@import") || (t3 = `@import "tailwindcss";${t3}`), $r.end("Reading Stylesheets", { size: t3.length, changed: kr !== t3 }), kr !== t3) {
          kr = t3, $r.start("Compile CSS");
          try {
            mr = await hr(t3, { base: "/", loadStylesheet: Ar, loadModule: zr });
          } finally {
            $r.end("Compile CSS"), $r.end("Create compiler");
          }
          wr.clear();
        }
      }(), $r.start("Build"), await async function(e3) {
        if (!mr)
          return;
        let t3 = /* @__PURE__ */ new Set();
        $r.start("Collect classes");
        for (let e4 of document.querySelectorAll("[class]"))
          for (let r2 of e4.classList)
            wr.has(r2) || (wr.add(r2), t3.add(r2));
        $r.end("Collect classes", { count: t3.size }), (0 !== t3.size || "incremental" !== e3) && ($r.start("Build utilities"), br.textContent = mr.build(Array.from(t3)), $r.end("Build utilities"));
      }(e2), $r.end("Build"), $r.end(`Build #${t2} (${e2})`);
    }).catch((e3) => $r.error(e3));
  }
  var Cr = new MutationObserver(() => Sr("full"));
  function Tr(e2) {
    Cr.observe(e2, { attributes: true, attributeFilter: ["type"], characterData: true, subtree: true, childList: true });
  }
  new MutationObserver((e2) => {
    let t2 = 0, r2 = 0;
    for (let n2 of e2) {
      for (let e3 of n2.addedNodes)
        e3.nodeType === Node.ELEMENT_NODE && "STYLE" === e3.tagName && e3.getAttribute("type") === vr && (Tr(e3), t2++);
      for (let e3 of n2.addedNodes)
        1 === e3.nodeType && e3 !== br && r2++;
      "attributes" === n2.type && r2++;
    }
    return t2 > 0 ? Sr("full") : r2 > 0 ? Sr("incremental") : void 0;
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true }), Sr("full"), document.head.append(br);
})();

// virtual:/_102022_/l2/collabRunTime
window["originalDefine"] = customElements.define.bind(customElements);
customElements.define = (name, constructor, options) => {
  if (!customElements.get(name)) {
    return window["originalDefine"](name, constructor, options);
  }
};

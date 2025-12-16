// virtual:https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4
(() => {
  var e5 = 10;
  function t5(t6, a5) {
    let i5 = a5?.from ? { file: a5.from, code: t6 } : null;
    "\uFEFF" === t6[0] && (t6 = " " + t6.slice(1));
    let l5, s5 = [], c5 = [], u5 = [], d5 = null, f5 = null, p5 = "", h5 = "", m5 = 0;
    for (let a6 = 0; a6 < t6.length; a6++) {
      let g5 = t6.charCodeAt(a6);
      if (13 !== g5 || (l5 = t6.charCodeAt(a6 + 1), l5 !== e5))
        if (92 === g5)
          "" === p5 && (m5 = a6), p5 += t6.slice(a6, a6 + 2), a6 += 1;
        else if (47 === g5 && 42 === t6.charCodeAt(a6 + 1)) {
          let e6 = a6;
          for (let e7 = a6 + 2; e7 < t6.length; e7++)
            if (l5 = t6.charCodeAt(e7), 92 === l5)
              e7 += 1;
            else if (42 === l5 && 47 === t6.charCodeAt(e7 + 1)) {
              a6 = e7 + 1;
              break;
            }
          let r5 = t6.slice(e6, a6 + 1);
          if (33 === r5.charCodeAt(2)) {
            let t7 = C2(r5.slice(2, -2));
            c5.push(t7), i5 && (t7.src = [i5, e6, a6 + 1], t7.dst = [i5, e6, a6 + 1]);
          }
        } else if (39 === g5 || 34 === g5) {
          let e6 = o3(t6, a6, g5);
          p5 += t6.slice(a6, e6 + 1), a6 = e6;
        } else {
          if ((32 === g5 || g5 === e5 || 9 === g5) && (l5 = t6.charCodeAt(a6 + 1)) && (32 === l5 || l5 === e5 || 9 === l5 || 13 === l5 && (l5 = t6.charCodeAt(a6 + 2)) && l5 == e5))
            continue;
          if (g5 === e5) {
            if (0 === p5.length)
              continue;
            l5 = p5.charCodeAt(p5.length - 1), 32 !== l5 && l5 !== e5 && 9 !== l5 && (p5 += " ");
          } else if (45 === g5 && 45 === t6.charCodeAt(a6 + 1) && 0 === p5.length) {
            let e6 = "", r5 = a6, c6 = -1;
            for (let n5 = a6 + 2; n5 < t6.length; n5++)
              if (l5 = t6.charCodeAt(n5), 92 === l5)
                n5 += 1;
              else if (39 === l5 || 34 === l5)
                n5 = o3(t6, n5, l5);
              else if (47 === l5 && 42 === t6.charCodeAt(n5 + 1)) {
                for (let e7 = n5 + 2; e7 < t6.length; e7++)
                  if (l5 = t6.charCodeAt(e7), 92 === l5)
                    e7 += 1;
                  else if (42 === l5 && 47 === t6.charCodeAt(e7 + 1)) {
                    n5 = e7 + 1;
                    break;
                  }
              } else if (-1 === c6 && 58 === l5)
                c6 = p5.length + n5 - r5;
              else {
                if (59 === l5 && 0 === e6.length) {
                  p5 += t6.slice(r5, n5), a6 = n5;
                  break;
                }
                if (40 === l5)
                  e6 += ")";
                else if (91 === l5)
                  e6 += "]";
                else if (123 === l5)
                  e6 += "}";
                else {
                  if ((125 === l5 || t6.length - 1 === n5) && 0 === e6.length) {
                    a6 = n5 - 1, p5 += t6.slice(r5, n5);
                    break;
                  }
                  (41 === l5 || 93 === l5 || 125 === l5) && e6.length > 0 && t6[n5] === e6[e6.length - 1] && (e6 = e6.slice(0, -1));
                }
              }
            let u6 = n4(p5, c6);
            if (!u6)
              throw new Error("Invalid custom property, expected a value");
            i5 && (u6.src = [i5, r5, a6], u6.dst = [i5, r5, a6]), d5 ? d5.nodes.push(u6) : s5.push(u6), p5 = "";
          } else if (59 === g5 && 64 === p5.charCodeAt(0))
            f5 = r4(p5), i5 && (f5.src = [i5, m5, a6], f5.dst = [i5, m5, a6]), d5 ? d5.nodes.push(f5) : s5.push(f5), p5 = "", f5 = null;
          else if (59 === g5 && ")" !== h5[h5.length - 1]) {
            let e6 = n4(p5);
            if (!e6) {
              if (0 === p5.length)
                continue;
              throw new Error(`Invalid declaration: \`${p5.trim()}\``);
            }
            i5 && (e6.src = [i5, m5, a6], e6.dst = [i5, m5, a6]), d5 ? d5.nodes.push(e6) : s5.push(e6), p5 = "";
          } else if (123 === g5 && ")" !== h5[h5.length - 1])
            h5 += "}", f5 = z2(p5.trim()), i5 && (f5.src = [i5, m5, a6], f5.dst = [i5, m5, a6]), d5 && d5.nodes.push(f5), u5.push(d5), d5 = f5, p5 = "", f5 = null;
          else if (125 === g5 && ")" !== h5[h5.length - 1]) {
            if ("" === h5)
              throw new Error("Missing opening {");
            if (h5 = h5.slice(0, -1), p5.length > 0)
              if (64 === p5.charCodeAt(0))
                f5 = r4(p5), i5 && (f5.src = [i5, m5, a6], f5.dst = [i5, m5, a6]), d5 ? d5.nodes.push(f5) : s5.push(f5), p5 = "", f5 = null;
              else {
                let e7 = p5.indexOf(":");
                if (d5) {
                  let t7 = n4(p5, e7);
                  if (!t7)
                    throw new Error(`Invalid declaration: \`${p5.trim()}\``);
                  i5 && (t7.src = [i5, m5, a6], t7.dst = [i5, m5, a6]), d5.nodes.push(t7);
                }
              }
            let e6 = u5.pop() ?? null;
            null === e6 && d5 && s5.push(d5), d5 = e6, p5 = "", f5 = null;
          } else if (40 === g5)
            h5 += ")", p5 += "(";
          else if (41 === g5) {
            if (")" !== h5[h5.length - 1])
              throw new Error("Missing opening (");
            h5 = h5.slice(0, -1), p5 += ")";
          } else {
            if (0 === p5.length && (32 === g5 || g5 === e5 || 9 === g5))
              continue;
            "" === p5 && (m5 = a6), p5 += String.fromCharCode(g5);
          }
        }
    }
    if (64 === p5.charCodeAt(0)) {
      let e6 = r4(p5);
      i5 && (e6.src = [i5, m5, t6.length], e6.dst = [i5, m5, t6.length]), s5.push(e6);
    }
    if (h5.length > 0 && d5) {
      if ("rule" === d5.kind)
        throw new Error(`Missing closing } at ${d5.selector}`);
      if ("at-rule" === d5.kind)
        throw new Error(`Missing closing } at ${d5.name} ${d5.params}`);
    }
    return c5.length > 0 ? c5.concat(s5) : s5;
  }
  function r4(e6, t6 = []) {
    let r5 = e6, n5 = "";
    for (let t7 = 5; t7 < e6.length; t7++) {
      let o4 = e6.charCodeAt(t7);
      if (32 === o4 || 9 === o4 || 40 === o4) {
        r5 = e6.slice(0, t7), n5 = e6.slice(t7);
        break;
      }
    }
    return A2(r5.trim(), n5.trim(), t6);
  }
  function n4(e6, t6 = e6.indexOf(":")) {
    if (-1 === t6)
      return null;
    let r5 = e6.indexOf("!important", t6 + 1);
    return S4(e6.slice(0, t6).trim(), e6.slice(t6 + 1, -1 === r5 ? e6.length : r5).trim(), -1 !== r5);
  }
  function o3(t6, r5, n5) {
    let o4;
    for (let a5 = r5 + 1; a5 < t6.length; a5++)
      if (o4 = t6.charCodeAt(a5), 92 === o4)
        a5 += 1;
      else {
        if (o4 === n5)
          return a5;
        if (59 === o4 && (t6.charCodeAt(a5 + 1) === e5 || 13 === t6.charCodeAt(a5 + 1) && t6.charCodeAt(a5 + 2) === e5))
          throw new Error(`Unterminated string: ${t6.slice(r5, a5 + 1) + String.fromCharCode(n5)}`);
        if (o4 === e5 || 13 === o4 && t6.charCodeAt(a5 + 1) === e5)
          throw new Error(`Unterminated string: ${t6.slice(r5, a5) + String.fromCharCode(n5)}`);
      }
    return r5;
  }
  function a4(e6) {
    if (0 === arguments.length)
      throw new TypeError("`CSS.escape` requires an argument.");
    let t6, r5 = String(e6), n5 = r5.length, o4 = -1, a5 = "", i5 = r5.charCodeAt(0);
    if (1 === n5 && 45 === i5)
      return "\\" + r5;
    for (; ++o4 < n5; )
      t6 = r5.charCodeAt(o4), a5 += 0 !== t6 ? t6 >= 1 && t6 <= 31 || 127 === t6 || 0 === o4 && t6 >= 48 && t6 <= 57 || 1 === o4 && t6 >= 48 && t6 <= 57 && 45 === i5 ? "\\" + t6.toString(16) + " " : t6 >= 128 || 45 === t6 || 95 === t6 || t6 >= 48 && t6 <= 57 || t6 >= 65 && t6 <= 90 || t6 >= 97 && t6 <= 122 ? r5.charAt(o4) : "\\" + r5.charAt(o4) : "\uFFFD";
    return a5;
  }
  function i4(e6) {
    return e6.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e7) => e7.length > 2 ? String.fromCodePoint(Number.parseInt(e7.slice(1).trim(), 16)) : e7[1]);
  }
  var l4 = /* @__PURE__ */ new Map([["--font", ["--font-weight", "--font-size"]], ["--inset", ["--inset-shadow", "--inset-ring"]], ["--text", ["--text-color", "--text-decoration-color", "--text-decoration-thickness", "--text-indent", "--text-shadow", "--text-underline-offset"]], ["--grid-column", ["--grid-column-start", "--grid-column-end"]], ["--grid-row", ["--grid-row-start", "--grid-row-end"]]]);
  function s4(e6, t6) {
    return (l4.get(t6) ?? []).some((t7) => e6 === t7 || e6.startsWith(`${t7}-`));
  }
  var c4 = class {
    constructor(e6 = /* @__PURE__ */ new Map(), t6 = /* @__PURE__ */ new Set([])) {
      this.values = e6, this.keyframes = t6;
    }
    prefix = null;
    get size() {
      return this.values.size;
    }
    add(e6, t6, r5 = 0, n5) {
      if (e6.endsWith("-*")) {
        if ("initial" !== t6)
          throw new Error(`Invalid theme value \`${t6}\` for namespace \`${e6}\``);
        "--*" === e6 ? this.values.clear() : this.clearNamespace(e6.slice(0, -2), 0);
      }
      if (4 & r5) {
        let t7 = this.values.get(e6);
        if (t7 && !(4 & t7.options))
          return;
      }
      "initial" === t6 ? this.values.delete(e6) : this.values.set(e6, { value: t6, options: r5, src: n5 });
    }
    keysInNamespaces(e6) {
      let t6 = [];
      for (let r5 of e6) {
        let e7 = `${r5}-`;
        for (let n5 of this.values.keys())
          n5.startsWith(e7) && -1 === n5.indexOf("--", 2) && (s4(n5, r5) || t6.push(n5.slice(e7.length)));
      }
      return t6;
    }
    get(e6) {
      for (let t6 of e6) {
        let e7 = this.values.get(t6);
        if (e7)
          return e7.value;
      }
      return null;
    }
    hasDefault(e6) {
      return !(4 & ~this.getOptions(e6));
    }
    getOptions(e6) {
      return e6 = i4(this.#e(e6)), this.values.get(e6)?.options ?? 0;
    }
    entries() {
      return this.prefix ? Array.from(this.values, (e6) => (e6[0] = this.prefixKey(e6[0]), e6)) : this.values.entries();
    }
    prefixKey(e6) {
      return this.prefix ? `--${this.prefix}-${e6.slice(2)}` : e6;
    }
    #e(e6) {
      return this.prefix ? `--${e6.slice(3 + this.prefix.length)}` : e6;
    }
    clearNamespace(e6, t6) {
      let r5 = l4.get(e6) ?? [];
      e:
        for (let n5 of this.values.keys())
          if (n5.startsWith(e6)) {
            if (0 !== t6 && (this.getOptions(n5) & t6) !== t6)
              continue;
            for (let e7 of r5)
              if (n5.startsWith(e7))
                continue e;
            this.values.delete(n5);
          }
    }
    #t(e6, t6) {
      for (let r5 of t6) {
        let t7 = null !== e6 ? `${r5}-${e6}` : r5;
        if (!this.values.has(t7)) {
          if (null === e6 || !e6.includes("."))
            continue;
          if (t7 = `${r5}-${e6.replaceAll(".", "_")}`, !this.values.has(t7))
            continue;
        }
        if (!s4(t7, r5))
          return t7;
      }
      return null;
    }
    #r(e6) {
      let t6 = this.values.get(e6);
      if (!t6)
        return null;
      let r5 = null;
      return 2 & t6.options && (r5 = t6.value), `var(${a4(this.prefixKey(e6))}${r5 ? `, ${r5}` : ""})`;
    }
    markUsedVariable(e6) {
      let t6 = i4(this.#e(e6)), r5 = this.values.get(t6);
      if (!r5)
        return false;
      let n5 = 16 & r5.options;
      return r5.options |= 16, !n5;
    }
    resolve(e6, t6, r5 = 0) {
      let n5 = this.#t(e6, t6);
      if (!n5)
        return null;
      let o4 = this.values.get(n5);
      return 1 & (r5 | o4.options) ? o4.value : this.#r(n5);
    }
    resolveValue(e6, t6) {
      let r5 = this.#t(e6, t6);
      return r5 ? this.values.get(r5).value : null;
    }
    resolveWith(e6, t6, r5 = []) {
      let n5 = this.#t(e6, t6);
      if (!n5)
        return null;
      let o4 = {};
      for (let e7 of r5) {
        let t7 = `${n5}${e7}`, r6 = this.values.get(t7);
        r6 && (1 & r6.options ? o4[e7] = r6.value : o4[e7] = this.#r(t7));
      }
      let a5 = this.values.get(n5);
      return 1 & a5.options ? [a5.value, o4] : [this.#r(n5), o4];
    }
    namespace(e6) {
      let t6 = /* @__PURE__ */ new Map(), r5 = `${e6}-`;
      for (let [n5, o4] of this.values)
        n5 === e6 ? t6.set(null, o4.value) : n5.startsWith(`${r5}-`) ? t6.set(n5.slice(e6.length), o4.value) : n5.startsWith(r5) && t6.set(n5.slice(r5.length), o4.value);
      return t6;
    }
    addKeyframes(e6) {
      this.keyframes.add(e6);
    }
    getKeyframes() {
      return Array.from(this.keyframes);
    }
  }, u4 = class extends Map {
    constructor(e6) {
      super(), this.factory = e6;
    }
    get(e6) {
      let t6 = super.get(e6);
      return void 0 === t6 && (t6 = this.factory(e6, this), this.set(e6, t6)), t6;
    }
  };
  function d4(e6) {
    return { kind: "word", value: e6 };
  }
  function f4(e6, t6) {
    return { kind: "function", value: e6, nodes: t6 };
  }
  function p4(e6) {
    return { kind: "separator", value: e6 };
  }
  function h4(e6) {
    let t6 = "";
    for (let r5 of e6)
      switch (r5.kind) {
        case "word":
        case "separator":
          t6 += r5.value;
          break;
        case "function":
          t6 += r5.value + "(" + h4(r5.nodes) + ")";
      }
    return t6;
  }
  function m4(e6) {
    e6 = e6.replaceAll("\r\n", "\n");
    let t6, r5 = [], n5 = [], o4 = null, a5 = "";
    for (let i5 = 0; i5 < e6.length; i5++) {
      let l5 = e6.charCodeAt(i5);
      switch (l5) {
        case 92:
          a5 += e6[i5] + e6[i5 + 1], i5++;
          break;
        case 47: {
          if (a5.length > 0) {
            let e7 = d4(a5);
            o4 ? o4.nodes.push(e7) : r5.push(e7), a5 = "";
          }
          let t7 = d4(e6[i5]);
          o4 ? o4.nodes.push(t7) : r5.push(t7);
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
          if (a5.length > 0) {
            let e7 = d4(a5);
            o4 ? o4.nodes.push(e7) : r5.push(e7), a5 = "";
          }
          let n6 = i5, l6 = i5 + 1;
          for (; l6 < e6.length && (t6 = e6.charCodeAt(l6), 58 === t6 || 44 === t6 || 61 === t6 || 62 === t6 || 60 === t6 || 10 === t6 || 32 === t6 || 9 === t6); l6++)
            ;
          i5 = l6 - 1;
          let s5 = p4(e6.slice(n6, l6));
          o4 ? o4.nodes.push(s5) : r5.push(s5);
          break;
        }
        case 39:
        case 34: {
          let r6 = i5;
          for (let r7 = i5 + 1; r7 < e6.length; r7++)
            if (t6 = e6.charCodeAt(r7), 92 === t6)
              r7 += 1;
            else if (t6 === l5) {
              i5 = r7;
              break;
            }
          a5 += e6.slice(r6, i5 + 1);
          break;
        }
        case 40: {
          let e7 = f4(a5, []);
          a5 = "", o4 ? o4.nodes.push(e7) : r5.push(e7), n5.push(e7), o4 = e7;
          break;
        }
        case 41: {
          let e7 = n5.pop();
          if (a5.length > 0) {
            let t7 = d4(a5);
            e7?.nodes.push(t7), a5 = "";
          }
          o4 = n5.length > 0 ? n5[n5.length - 1] : null;
          break;
        }
        default:
          a5 += String.fromCharCode(l5);
      }
    }
    return a5.length > 0 && r5.push(d4(a5)), r5;
  }
  var g4, v3 = ((g4 = v3 || {})[g4.Continue = 0] = "Continue", g4[g4.Skip = 1] = "Skip", g4[g4.Stop = 2] = "Stop", g4[g4.Replace = 3] = "Replace", g4[g4.ReplaceSkip = 4] = "ReplaceSkip", g4[g4.ReplaceStop = 5] = "ReplaceStop", g4), w3 = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (e6) => ({ kind: 3, nodes: Array.isArray(e6) ? e6 : [e6] }), ReplaceSkip: (e6) => ({ kind: 4, nodes: Array.isArray(e6) ? e6 : [e6] }), ReplaceStop: (e6) => ({ kind: 5, nodes: Array.isArray(e6) ? e6 : [e6] }) };
  function k2(e6, t6) {
    "function" == typeof t6 ? b4(e6, t6) : b4(e6, t6.enter, t6.exit);
  }
  function b4(e6, t6 = () => w3.Continue, r5 = () => w3.Continue) {
    let n5 = [[e6, 0, null]], o4 = { parent: null, depth: 0, path() {
      let e7 = [];
      for (let t7 = 1; t7 < n5.length; t7++) {
        let r6 = n5[t7][2];
        r6 && e7.push(r6);
      }
      return e7;
    } };
    for (; n5.length > 0; ) {
      let e7 = n5.length - 1, a5 = n5[e7], i5 = a5[0], l5 = a5[1], s5 = a5[2];
      if (l5 >= i5.length) {
        n5.pop();
        continue;
      }
      if (o4.parent = s5, o4.depth = e7, l5 >= 0) {
        let e8 = i5[l5], r6 = t6(e8, o4) ?? w3.Continue;
        switch (r6.kind) {
          case 0:
            e8.nodes && e8.nodes.length > 0 && n5.push([e8.nodes, 0, e8]), a5[1] = ~l5;
            continue;
          case 2:
            return;
          case 1:
            a5[1] = ~l5;
            continue;
          case 3:
            i5.splice(l5, 1, ...r6.nodes);
            continue;
          case 5:
            return void i5.splice(l5, 1, ...r6.nodes);
          case 4:
            i5.splice(l5, 1, ...r6.nodes), a5[1] += r6.nodes.length;
            continue;
          default:
            throw new Error(`Invalid \`WalkAction.${v3[r6.kind] ?? `Unknown(${r6.kind})`}\` in enter.`);
        }
      }
      let c5 = ~l5, u5 = r5(i5[c5], o4) ?? w3.Continue;
      switch (u5.kind) {
        case 0:
          a5[1] = c5 + 1;
          continue;
        case 2:
          return;
        case 3:
        case 4:
          i5.splice(c5, 1, ...u5.nodes), a5[1] = c5 + u5.nodes.length;
          continue;
        case 5:
          return void i5.splice(c5, 1, ...u5.nodes);
        default:
          throw new Error(`Invalid \`WalkAction.${v3[u5.kind] ?? `Unknown(${u5.kind})`}\` in exit.`);
      }
    }
  }
  function y4(e6) {
    let t6 = [];
    return k2(m4(e6), (e7) => {
      if ("function" === e7.kind && "var" === e7.value)
        return k2(e7.nodes, (e8) => {
          "word" !== e8.kind || "-" !== e8.value[0] || "-" !== e8.value[1] || t6.push(e8.value);
        }), w3.Skip;
    }), t6;
  }
  var x2 = 64;
  function $4(e6, t6 = []) {
    return { kind: "rule", selector: e6, nodes: t6 };
  }
  function A2(e6, t6 = "", r5 = []) {
    return { kind: "at-rule", name: e6, params: t6, nodes: r5 };
  }
  function z2(e6, t6 = []) {
    return e6.charCodeAt(0) === x2 ? r4(e6, t6) : $4(e6, t6);
  }
  function S4(e6, t6, r5 = false) {
    return { kind: "declaration", property: e6, value: t6, important: r5 };
  }
  function C2(e6) {
    return { kind: "comment", value: e6 };
  }
  function j2(e6, t6) {
    return { kind: "context", context: e6, nodes: t6 };
  }
  function T2(e6) {
    return { kind: "at-root", nodes: e6 };
  }
  function V2(e6) {
    switch (e6.kind) {
      case "rule":
        return { kind: e6.kind, selector: e6.selector, nodes: e6.nodes.map(V2), src: e6.src, dst: e6.dst };
      case "at-rule":
        return { kind: e6.kind, name: e6.name, params: e6.params, nodes: e6.nodes.map(V2), src: e6.src, dst: e6.dst };
      case "at-root":
        return { kind: e6.kind, nodes: e6.nodes.map(V2), src: e6.src, dst: e6.dst };
      case "context":
        return { kind: e6.kind, context: { ...e6.context }, nodes: e6.nodes.map(V2), src: e6.src, dst: e6.dst };
      case "declaration":
        return { kind: e6.kind, property: e6.property, value: e6.value, important: e6.important, src: e6.src, dst: e6.dst };
      case "comment":
        return { kind: e6.kind, value: e6.value, src: e6.src, dst: e6.dst };
      default:
        throw new Error(`Unknown node kind: ${e6.kind}`);
    }
  }
  function K2(e6) {
    return { depth: e6.depth, get context() {
      let t6 = {};
      for (let r5 of e6.path())
        "context" === r5.kind && Object.assign(t6, r5.context);
      return Object.defineProperty(this, "context", { value: t6 }), t6;
    }, get parent() {
      let e7 = this.path().pop() ?? null;
      return Object.defineProperty(this, "parent", { value: e7 }), e7;
    }, path: () => e6.path().filter((e7) => "context" !== e7.kind) };
  }
  function E4(e6, t6, r5 = 3) {
    let n5 = [], o4 = /* @__PURE__ */ new Set(), a5 = new u4(() => /* @__PURE__ */ new Set()), i5 = new u4(() => /* @__PURE__ */ new Set()), l5 = /* @__PURE__ */ new Set(), s5 = /* @__PURE__ */ new Set(), c5 = [], d5 = [], f5 = new u4(() => /* @__PURE__ */ new Set());
    function p5(e7, u5, h5 = {}, m5 = 0) {
      if ("declaration" === e7.kind) {
        if ("--tw-sort" === e7.property || void 0 === e7.value || null === e7.value)
          return;
        if (h5.theme && "-" === e7.property[0] && "-" === e7.property[1]) {
          if ("initial" === e7.value)
            return void (e7.value = void 0);
          h5.keyframes || a5.get(u5).add(e7);
        }
        if (e7.value.includes("var("))
          if (h5.theme && "-" === e7.property[0] && "-" === e7.property[1])
            for (let t7 of y4(e7.value))
              f5.get(t7).add(e7.property);
          else
            t6.trackUsedVariables(e7.value);
        if ("animation" === e7.property)
          for (let t7 of U2(e7.value))
            s5.add(t7);
        2 & r5 && e7.value.includes("color-mix(") && i5.get(u5).add(e7), u5.push(e7);
      } else if ("rule" === e7.kind) {
        let t7 = [];
        for (let r7 of e7.nodes)
          p5(r7, t7, h5, m5 + 1);
        let r6 = {}, n6 = /* @__PURE__ */ new Set();
        for (let e8 of t7) {
          if ("declaration" !== e8.kind)
            continue;
          let t8 = `${e8.property}:${e8.value}:${e8.important}`;
          r6[t8] ??= [], r6[t8].push(e8);
        }
        for (let e8 in r6)
          for (let t8 = 0; t8 < r6[e8].length - 1; ++t8)
            n6.add(r6[e8][t8]);
        if (n6.size > 0 && (t7 = t7.filter((e8) => !n6.has(e8))), 0 === t7.length)
          return;
        "&" === e7.selector ? u5.push(...t7) : u5.push({ ...e7, nodes: t7 });
      } else if ("at-rule" === e7.kind && "@property" === e7.name && 0 === m5) {
        if (o4.has(e7.params))
          return;
        if (1 & r5) {
          let t8 = e7.params, r6 = null, n6 = false;
          for (let t9 of e7.nodes)
            "declaration" === t9.kind && ("initial-value" === t9.property ? r6 = t9.value : "inherits" === t9.property && (n6 = "true" === t9.value));
          let o5 = S4(t8, r6 ?? "initial");
          o5.src = e7.src, n6 ? c5.push(o5) : d5.push(o5);
        }
        o4.add(e7.params);
        let t7 = { ...e7, nodes: [] };
        for (let r6 of e7.nodes)
          p5(r6, t7.nodes, h5, m5 + 1);
        u5.push(t7);
      } else if ("at-rule" === e7.kind) {
        "@keyframes" === e7.name && (h5 = { ...h5, keyframes: true });
        let t7 = { ...e7, nodes: [] };
        for (let r6 of e7.nodes)
          p5(r6, t7.nodes, h5, m5 + 1);
        "@keyframes" === e7.name && h5.theme && l5.add(t7), (t7.nodes.length > 0 || "@layer" === t7.name || "@charset" === t7.name || "@custom-media" === t7.name || "@namespace" === t7.name || "@import" === t7.name) && u5.push(t7);
      } else if ("at-root" === e7.kind)
        for (let t7 of e7.nodes) {
          let e8 = [];
          p5(t7, e8, h5, 0);
          for (let t8 of e8)
            n5.push(t8);
        }
      else if ("context" === e7.kind) {
        if (e7.context.reference)
          return;
        for (let t7 of e7.nodes)
          p5(t7, u5, { ...h5, ...e7.context }, m5);
      } else
        "comment" === e7.kind && u5.push(e7);
    }
    let g5 = [];
    for (let t7 of e6)
      p5(t7, g5, {}, 0);
    e:
      for (let [e7, r6] of a5)
        for (let n6 of r6) {
          if (F2(n6.property, t6.theme, f5)) {
            if (n6.property.startsWith(t6.theme.prefixKey("--animate-")))
              for (let e8 of U2(n6.value))
                s5.add(e8);
            continue;
          }
          let r7 = e7.indexOf(n6);
          if (e7.splice(r7, 1), 0 === e7.length) {
            let t7 = O2(g5, (t8) => "rule" === t8.kind && t8.nodes === e7);
            if (!t7 || 0 === t7.length)
              continue e;
            for (t7.unshift({ kind: "at-root", nodes: g5 }); ; ) {
              let e8 = t7.pop();
              if (!e8)
                break;
              let r8 = t7[t7.length - 1];
              if (!r8 || "at-root" !== r8.kind && "at-rule" !== r8.kind)
                break;
              let n7 = r8.nodes.indexOf(e8);
              if (-1 === n7)
                break;
              r8.nodes.splice(n7, 1);
            }
            continue e;
          }
        }
    for (let e7 of l5)
      if (!s5.has(e7.params)) {
        let t7 = n5.indexOf(e7);
        n5.splice(t7, 1);
      }
    if (g5 = g5.concat(n5), 2 & r5)
      for (let [e7, r6] of i5)
        for (let n6 of r6) {
          let r7 = e7.indexOf(n6);
          if (-1 === r7 || null == n6.value)
            continue;
          let o5 = m4(n6.value), a6 = false;
          if (k2(o5, (e8) => {
            if ("function" !== e8.kind || "color-mix" !== e8.value)
              return;
            let r8 = false, n7 = false;
            if (k2(e8.nodes, (e9) => {
              if ("word" == e9.kind && "currentcolor" === e9.value.toLowerCase())
                return n7 = true, void (a6 = true);
              let o6 = e9, i7 = null, l7 = /* @__PURE__ */ new Set();
              do {
                if ("function" !== o6.kind || "var" !== o6.value)
                  return;
                let e10 = o6.nodes[0];
                if (!e10 || "word" !== e10.kind)
                  return;
                let s6 = e10.value;
                if (l7.has(s6))
                  return void (r8 = true);
                if (l7.add(s6), a6 = true, i7 = t6.theme.resolveValue(null, [e10.value]), !i7)
                  return void (r8 = true);
                if ("currentcolor" === i7.toLowerCase())
                  return void (n7 = true);
                o6 = i7.startsWith("var(") ? m4(i7)[0] : null;
              } while (o6);
              return w3.Replace({ kind: "word", value: i7 });
            }), r8 || n7) {
              let t7 = e8.nodes.findIndex((e9) => "separator" === e9.kind && e9.value.trim().includes(","));
              if (-1 === t7)
                return;
              let r9 = e8.nodes.length > t7 ? e8.nodes[t7 + 1] : null;
              return r9 ? w3.Replace(r9) : void 0;
            }
            if (a6) {
              let t7 = e8.nodes[2];
              "word" === t7.kind && ("oklab" === t7.value || "oklch" === t7.value || "lab" === t7.value || "lch" === t7.value) && (t7.value = "srgb");
            }
          }), !a6)
            continue;
          let i6 = { ...n6, value: h4(o5) }, l6 = z2("@supports (color: color-mix(in lab, red, red))", [n6]);
          l6.src = n6.src, e7.splice(r7, 1, i6, l6);
        }
    if (1 & r5) {
      let e7 = [];
      if (c5.length > 0) {
        let t7 = z2(":root, :host", c5);
        t7.src = c5[0].src, e7.push(t7);
      }
      if (d5.length > 0) {
        let t7 = z2("*, ::before, ::after, ::backdrop", d5);
        t7.src = d5[0].src, e7.push(t7);
      }
      if (e7.length > 0) {
        let t7 = g5.findIndex((e8) => !("comment" === e8.kind || "at-rule" === e8.kind && ("@charset" === e8.name || "@import" === e8.name))), r6 = A2("@layer", "properties", []);
        r6.src = e7[0].src, g5.splice(t7 < 0 ? g5.length : t7, 0, r6);
        let n6 = z2("@layer properties", [A2("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", e7)]);
        n6.src = e7[0].src, n6.nodes[0].src = e7[0].src, g5.push(n6);
      }
    }
    return g5;
  }
  function N2(e6, t6) {
    let r5 = 0, n5 = { file: null, code: "" };
    function o4(e7, a6 = 0) {
      let i5 = "", l5 = "  ".repeat(a6);
      if ("declaration" === e7.kind) {
        if (i5 += `${l5}${e7.property}: ${e7.value}${e7.important ? " !important" : ""};
`, t6) {
          r5 += l5.length;
          let t7 = r5;
          r5 += e7.property.length, r5 += 2, r5 += e7.value?.length ?? 0, e7.important && (r5 += 11);
          let o5 = r5;
          r5 += 2, e7.dst = [n5, t7, o5];
        }
      } else if ("rule" === e7.kind) {
        if (i5 += `${l5}${e7.selector} {
`, t6) {
          r5 += l5.length;
          let t7 = r5;
          r5 += e7.selector.length, r5 += 1;
          let o5 = r5;
          e7.dst = [n5, t7, o5], r5 += 2;
        }
        for (let t7 of e7.nodes)
          i5 += o4(t7, a6 + 1);
        i5 += `${l5}}
`, t6 && (r5 += l5.length, r5 += 2);
      } else if ("at-rule" === e7.kind) {
        if (0 === e7.nodes.length) {
          let o5 = `${l5}${e7.name} ${e7.params};
`;
          if (t6) {
            r5 += l5.length;
            let t7 = r5;
            r5 += e7.name.length, r5 += 1, r5 += e7.params.length;
            let o6 = r5;
            r5 += 2, e7.dst = [n5, t7, o6];
          }
          return o5;
        }
        if (i5 += `${l5}${e7.name}${e7.params ? ` ${e7.params} ` : " "}{
`, t6) {
          r5 += l5.length;
          let t7 = r5;
          r5 += e7.name.length, e7.params && (r5 += 1, r5 += e7.params.length), r5 += 1;
          let o5 = r5;
          e7.dst = [n5, t7, o5], r5 += 2;
        }
        for (let t7 of e7.nodes)
          i5 += o4(t7, a6 + 1);
        i5 += `${l5}}
`, t6 && (r5 += l5.length, r5 += 2);
      } else if ("comment" === e7.kind) {
        if (i5 += `${l5}/*${e7.value}*/
`, t6) {
          r5 += l5.length;
          let t7 = r5;
          r5 += 2 + e7.value.length + 2;
          let o5 = r5;
          e7.dst = [n5, t7, o5], r5 += 1;
        }
      } else if ("context" === e7.kind || "at-root" === e7.kind)
        return "";
      return i5;
    }
    let a5 = "";
    for (let t7 of e6)
      a5 += o4(t7, 0);
    return n5.code = a5, a5;
  }
  function O2(e6, t6) {
    let r5 = [];
    return k2(e6, (e7, n5) => {
      if (t6(e7))
        return r5 = n5.path(), r5.push(e7), w3.Stop;
    }), r5;
  }
  function F2(e6, t6, r5, n5 = /* @__PURE__ */ new Set()) {
    if (n5.has(e6) || (n5.add(e6), 24 & t6.getOptions(e6)))
      return true;
    {
      let o4 = r5.get(e6) ?? [];
      for (let e7 of o4)
        if (F2(e7, t6, r5, n5))
          return true;
    }
    return false;
  }
  function U2(e6) {
    return e6.split(/[\s,]+/);
  }
  var W2 = ["calc", "min", "max", "clamp", "mod", "rem", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "pow", "sqrt", "hypot", "log", "exp", "round"];
  function R2(e6) {
    return -1 !== e6.indexOf("(") && W2.some((t6) => e6.includes(`${t6}(`));
  }
  function D2(e6) {
    if (-1 === e6.indexOf("("))
      return _4(e6);
    let t6 = m4(e6);
    return L2(t6), e6 = function(e7) {
      if (!W2.some((t8) => e7.includes(t8)))
        return e7;
      let t7 = "", r5 = [], n5 = null, o4 = null;
      for (let a5 = 0; a5 < e7.length; a5++) {
        let i5 = e7.charCodeAt(a5);
        if (i5 >= 48 && i5 <= 57 || null !== n5 && (37 === i5 || i5 >= 97 && i5 <= 122 || i5 >= 65 && i5 <= 90) ? n5 = a5 : (o4 = n5, n5 = null), 40 !== i5)
          if (41 === i5)
            t7 += e7[a5], r5.shift();
          else {
            if (44 === i5 && r5[0]) {
              t7 += ", ";
              continue;
            }
            if (32 === i5 && r5[0] && 32 === t7.charCodeAt(t7.length - 1))
              continue;
            if (43 !== i5 && 42 !== i5 && 47 !== i5 && 45 !== i5 || !r5[0])
              t7 += e7[a5];
            else {
              let r6 = t7.trimEnd(), n6 = r6.charCodeAt(r6.length - 1), i6 = r6.charCodeAt(r6.length - 2), l5 = e7.charCodeAt(a5 + 1);
              if ((101 === n6 || 69 === n6) && i6 >= 48 && i6 <= 57) {
                t7 += e7[a5];
                continue;
              }
              if (43 === n6 || 42 === n6 || 47 === n6 || 45 === n6) {
                t7 += e7[a5];
                continue;
              }
              if (40 === n6 || 44 === n6) {
                t7 += e7[a5];
                continue;
              }
              32 === e7.charCodeAt(a5 - 1) ? t7 += `${e7[a5]} ` : t7 += n6 >= 48 && n6 <= 57 || l5 >= 48 && l5 <= 57 || 41 === n6 || 40 === l5 || 43 === l5 || 42 === l5 || 47 === l5 || 45 === l5 || null !== o4 && o4 === a5 - 1 ? ` ${e7[a5]} ` : e7[a5];
            }
          }
        else {
          t7 += e7[a5];
          let n6 = a5;
          for (let t8 = a5 - 1; t8 >= 0; t8--) {
            let r6 = e7.charCodeAt(t8);
            if (r6 >= 48 && r6 <= 57)
              n6 = t8;
            else {
              if (!(r6 >= 97 && r6 <= 122))
                break;
              n6 = t8;
            }
          }
          let o5 = e7.slice(n6, a5);
          if (W2.includes(o5)) {
            r5.unshift(true);
            continue;
          }
          if (r5[0] && "" === o5) {
            r5.unshift(true);
            continue;
          }
          r5.unshift(false);
        }
      }
      return t7;
    }(e6 = h4(t6)), e6;
  }
  function _4(e6, t6 = false) {
    let r5 = "";
    for (let n5 = 0; n5 < e6.length; n5++) {
      let o4 = e6[n5];
      "\\" === o4 && "_" === e6[n5 + 1] ? (r5 += "_", n5 += 1) : r5 += "_" !== o4 || t6 ? o4 : " ";
    }
    return r5;
  }
  function L2(e6) {
    for (let t6 of e6)
      switch (t6.kind) {
        case "function":
          if ("url" === t6.value || t6.value.endsWith("_url")) {
            t6.value = _4(t6.value);
            break;
          }
          if ("var" === t6.value || t6.value.endsWith("_var") || "theme" === t6.value || t6.value.endsWith("_theme")) {
            t6.value = _4(t6.value);
            for (let e7 = 0; e7 < t6.nodes.length; e7++)
              0 != e7 || "word" !== t6.nodes[e7].kind ? L2([t6.nodes[e7]]) : t6.nodes[e7].value = _4(t6.nodes[e7].value, true);
            break;
          }
          t6.value = _4(t6.value), L2(t6.nodes);
          break;
        case "separator":
        case "word":
          t6.value = _4(t6.value);
          break;
        default:
          M2(t6);
      }
  }
  function M2(e6) {
    throw new Error(`Unexpected value: ${e6}`);
  }
  var B2 = new Uint8Array(256);
  function I2(e6) {
    let t6 = 0, r5 = e6.length;
    for (let n5 = 0; n5 < r5; n5++) {
      let o4 = e6.charCodeAt(n5);
      switch (o4) {
        case 92:
          n5 += 1;
          break;
        case 39:
        case 34:
          for (; ++n5 < r5; ) {
            let t7 = e6.charCodeAt(n5);
            if (92 !== t7) {
              if (t7 === o4)
                break;
            } else
              n5 += 1;
          }
          break;
        case 40:
          B2[t6] = 41, t6++;
          break;
        case 91:
          B2[t6] = 93, t6++;
          break;
        case 123:
          break;
        case 93:
        case 125:
        case 41:
          if (0 === t6)
            return false;
          t6 > 0 && o4 === B2[t6 - 1] && t6--;
          break;
        case 59:
          if (0 === t6)
            return false;
      }
    }
    return true;
  }
  var P3 = new Uint8Array(256);
  function q2(e6, t6) {
    let r5 = 0, n5 = [], o4 = 0, a5 = e6.length, i5 = t6.charCodeAt(0);
    for (let t7 = 0; t7 < a5; t7++) {
      let l5 = e6.charCodeAt(t7);
      if (0 !== r5 || l5 !== i5)
        switch (l5) {
          case 92:
            t7 += 1;
            break;
          case 39:
          case 34:
            for (; ++t7 < a5; ) {
              let r6 = e6.charCodeAt(t7);
              if (92 !== r6) {
                if (r6 === l5)
                  break;
              } else
                t7 += 1;
            }
            break;
          case 40:
            P3[r5] = 41, r5++;
            break;
          case 91:
            P3[r5] = 93, r5++;
            break;
          case 123:
            P3[r5] = 125, r5++;
            break;
          case 93:
          case 125:
          case 41:
            r5 > 0 && l5 === P3[r5 - 1] && r5--;
        }
      else
        n5.push(e6.slice(o4, t7)), o4 = t7 + 1;
    }
    return n5.push(e6.slice(o4)), n5;
  }
  function H2(e6) {
    if ("[" === e6[0] && "]" === e6[e6.length - 1]) {
      let t6 = D2(e6.slice(1, -1));
      return I2(t6) && 0 !== t6.length && 0 !== t6.trim().length ? { kind: "arbitrary", value: t6 } : null;
    }
    return "(" === e6[0] && ")" === e6[e6.length - 1] ? "-" === (e6 = e6.slice(1, -1))[0] && "-" === e6[1] && I2(e6) ? { kind: "arbitrary", value: D2(e6 = `var(${e6})`) } : null : { kind: "named", value: e6 };
  }
  function* Z2(e6, t6) {
    t6(e6) && (yield [e6, null]);
    let r5 = e6.lastIndexOf("-");
    for (; r5 > 0; ) {
      let n5 = e6.slice(0, r5);
      if (t6(n5)) {
        let o4 = [n5, e6.slice(r5 + 1)];
        if ("" === o4[1] || "@" === o4[0] && t6("@") && "-" === e6[r5])
          break;
        yield o4;
      }
      r5 = e6.lastIndexOf("-", r5 - 1);
    }
    "@" === e6[0] && t6("@") && (yield ["@", e6.slice(1)]);
  }
  function Y2(e6) {
    if (null === e6)
      return "";
    let t6 = re(e6.value), r5 = t6 ? e6.value.slice(4, -1) : e6.value, [n5, o4] = t6 ? ["(", ")"] : ["[", "]"];
    return "arbitrary" === e6.kind ? `/${n5}${X2(r5)}${o4}` : "named" === e6.kind ? `/${e6.value}` : "";
  }
  function G2(e6) {
    if ("static" === e6.kind)
      return e6.root;
    if ("arbitrary" === e6.kind)
      return `[${X2(function(e7) {
        return Q2.get(e7);
      }(e6.selector))}]`;
    let t6 = "";
    if ("functional" === e6.kind) {
      t6 += e6.root;
      let r5 = "@" !== e6.root;
      if (e6.value)
        if ("arbitrary" === e6.value.kind) {
          let n5 = re(e6.value.value), o4 = n5 ? e6.value.value.slice(4, -1) : e6.value.value, [a5, i5] = n5 ? ["(", ")"] : ["[", "]"];
          t6 += `${r5 ? "-" : ""}${a5}${X2(o4)}${i5}`;
        } else
          "named" === e6.value.kind && (t6 += `${r5 ? "-" : ""}${e6.value.value}`);
    }
    return "compound" === e6.kind && (t6 += e6.root, t6 += "-", t6 += G2(e6.variant)), ("functional" === e6.kind || "compound" === e6.kind) && (t6 += Y2(e6.modifier)), t6;
  }
  var J2 = new u4((e6) => {
    let t6 = m4(e6), r5 = /* @__PURE__ */ new Set();
    return k2(t6, (e7, n5) => {
      let o4 = null === n5.parent ? t6 : n5.parent.nodes ?? [];
      if ("word" !== e7.kind || "+" !== e7.value && "-" !== e7.value && "*" !== e7.value && "/" !== e7.value)
        "separator" === e7.kind && e7.value.length > 0 && "" === e7.value.trim() ? (o4[0] === e7 || o4[o4.length - 1] === e7) && r5.add(e7) : "separator" === e7.kind && "," === e7.value.trim() && (e7.value = ",");
      else {
        let t7 = o4.indexOf(e7) ?? -1;
        if (-1 === t7)
          return;
        let n6 = o4[t7 - 1];
        if ("separator" !== n6?.kind || " " !== n6.value)
          return;
        let a5 = o4[t7 + 1];
        if ("separator" !== a5?.kind || " " !== a5.value)
          return;
        r5.add(n6), r5.add(a5);
      }
    }), r5.size > 0 && k2(t6, (e7) => {
      if (r5.has(e7))
        return r5.delete(e7), w3.ReplaceSkip([]);
    }), ee(t6), h4(t6);
  });
  function X2(e6) {
    return J2.get(e6);
  }
  var Q2 = new u4((e6) => {
    let t6 = m4(e6);
    return 3 === t6.length && "word" === t6[0].kind && "&" === t6[0].value && "separator" === t6[1].kind && ":" === t6[1].value && "function" === t6[2].kind && "is" === t6[2].value ? h4(t6[2].nodes) : e6;
  });
  function ee(e6) {
    for (let t6 of e6)
      switch (t6.kind) {
        case "function":
          if ("url" === t6.value || t6.value.endsWith("_url")) {
            t6.value = oe(t6.value);
            break;
          }
          if ("var" === t6.value || t6.value.endsWith("_var") || "theme" === t6.value || t6.value.endsWith("_theme")) {
            t6.value = oe(t6.value);
            for (let e7 = 0; e7 < t6.nodes.length; e7++)
              ee([t6.nodes[e7]]);
            break;
          }
          t6.value = oe(t6.value), ee(t6.nodes);
          break;
        case "separator":
          t6.value = oe(t6.value);
          break;
        case "word":
          ("-" !== t6.value[0] || "-" !== t6.value[1]) && (t6.value = oe(t6.value));
          break;
        default:
          ne(t6);
      }
  }
  var te = new u4((e6) => {
    let t6 = m4(e6);
    return 1 === t6.length && "function" === t6[0].kind && "var" === t6[0].value;
  });
  function re(e6) {
    return te.get(e6);
  }
  function ne(e6) {
    throw new Error(`Unexpected value: ${e6}`);
  }
  function oe(e6) {
    return e6.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
  }
  function ae(e6, t6, r5) {
    if (e6 === t6)
      return 0;
    let n5 = e6.indexOf("("), o4 = t6.indexOf("("), a5 = -1 === n5 ? e6.replace(/[\d.]+/g, "") : e6.slice(0, n5), i5 = -1 === o4 ? t6.replace(/[\d.]+/g, "") : t6.slice(0, o4), l5 = (a5 === i5 ? 0 : a5 < i5 ? -1 : 1) || ("asc" === r5 ? parseInt(e6) - parseInt(t6) : parseInt(t6) - parseInt(e6));
    return Number.isNaN(l5) ? e6 < t6 ? -1 : 1 : l5;
  }
  var ie = /* @__PURE__ */ new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent", "currentcolor", "canvas", "canvastext", "linktext", "visitedtext", "activetext", "buttonface", "buttontext", "buttonborder", "field", "fieldtext", "highlight", "highlighttext", "selecteditem", "selecteditemtext", "mark", "marktext", "graytext", "accentcolor", "accentcolortext"]), le = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
  var se = { color: function(e6) {
    return 35 === e6.charCodeAt(0) || le.test(e6) || ie.has(e6.toLowerCase());
  }, length: ye, percentage: we, ratio: function(e6) {
    return ke.test(e6) || R2(e6);
  }, number: ge, integer: Ae, url: de, position: function(e6) {
    let t6 = 0;
    for (let r5 of q2(e6, " "))
      if ("center" !== r5 && "top" !== r5 && "right" !== r5 && "bottom" !== r5 && "left" !== r5) {
        if (!r5.startsWith("var(")) {
          if (ye(r5) || we(r5)) {
            t6 += 1;
            continue;
          }
          return false;
        }
      } else
        t6 += 1;
    return t6 > 0;
  }, "bg-size": function(e6) {
    let t6 = 0;
    for (let r5 of q2(e6, ",")) {
      if ("cover" === r5 || "contain" === r5) {
        t6 += 1;
        continue;
      }
      let e7 = q2(r5, " ");
      if (1 !== e7.length && 2 !== e7.length)
        return false;
      e7.every((e8) => "auto" === e8 || ye(e8) || we(e8)) && (t6 += 1);
    }
    return t6 > 0;
  }, "line-width": function(e6) {
    return q2(e6, " ").every((e7) => ye(e7) || ge(e7) || "thin" === e7 || "medium" === e7 || "thick" === e7);
  }, image: function(e6) {
    let t6 = 0;
    for (let r5 of q2(e6, ","))
      if (!r5.startsWith("var(")) {
        if (de(r5)) {
          t6 += 1;
          continue;
        }
        if (pe.test(r5)) {
          t6 += 1;
          continue;
        }
        if (fe.test(r5)) {
          t6 += 1;
          continue;
        }
        return false;
      }
    return t6 > 0;
  }, "family-name": function(e6) {
    let t6 = 0;
    for (let r5 of q2(e6, ",")) {
      let e7 = r5.charCodeAt(0);
      if (e7 >= 48 && e7 <= 57)
        return false;
      r5.startsWith("var(") || (t6 += 1);
    }
    return t6 > 0;
  }, "generic-name": function(e6) {
    return "serif" === e6 || "sans-serif" === e6 || "monospace" === e6 || "cursive" === e6 || "fantasy" === e6 || "system-ui" === e6 || "ui-serif" === e6 || "ui-sans-serif" === e6 || "ui-monospace" === e6 || "ui-rounded" === e6 || "math" === e6 || "emoji" === e6 || "fangsong" === e6;
  }, "absolute-size": function(e6) {
    return "xx-small" === e6 || "x-small" === e6 || "small" === e6 || "medium" === e6 || "large" === e6 || "x-large" === e6 || "xx-large" === e6 || "xxx-large" === e6;
  }, "relative-size": function(e6) {
    return "larger" === e6 || "smaller" === e6;
  }, angle: function(e6) {
    return xe.test(e6);
  }, vector: function(e6) {
    return $e.test(e6);
  } };
  function ce(e6, t6) {
    if (e6.startsWith("var("))
      return null;
    for (let r5 of t6)
      if (se[r5]?.(e6))
        return r5;
    return null;
  }
  var ue = /^url\(.*\)$/;
  function de(e6) {
    return ue.test(e6);
  }
  var fe = /^(?:element|image|cross-fade|image-set)\(/, pe = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  var he = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, me = new RegExp(`^${he.source}$`);
  function ge(e6) {
    return me.test(e6) || R2(e6);
  }
  var ve = new RegExp(`^${he.source}%$`);
  function we(e6) {
    return ve.test(e6) || R2(e6);
  }
  var ke = new RegExp(`^${he.source}s*/s*${he.source}$`);
  var be = new RegExp(`^${he.source}(${["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"].join("|")})$`);
  function ye(e6) {
    return be.test(e6) || R2(e6);
  }
  var xe = new RegExp(`^${he.source}(${["deg", "rad", "grad", "turn"].join("|")})$`);
  var $e = new RegExp(`^${he.source} +${he.source} +${he.source}$`);
  function Ae(e6) {
    let t6 = Number(e6);
    return Number.isInteger(t6) && t6 >= 0 && String(t6) === String(e6);
  }
  function ze(e6) {
    let t6 = Number(e6);
    return Number.isInteger(t6) && t6 > 0 && String(t6) === String(e6);
  }
  function Se(e6) {
    return je(e6, 0.25);
  }
  function Ce(e6) {
    return je(e6, 0.25);
  }
  function je(e6, t6) {
    let r5 = Number(e6);
    return r5 >= 0 && r5 % t6 == 0 && String(r5) === String(e6);
  }
  var Te = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]), Ve = /^-?(\d+|\.\d+)(.*?)$/g;
  function Ke(e6, t6) {
    return q2(e6, ",").map((e7) => {
      let r5 = q2(e7 = e7.trim(), " ").filter((e8) => "" !== e8.trim()), n5 = null, o4 = null, a5 = null;
      for (let e8 of r5)
        Te.has(e8) || (Ve.test(e8) ? (null === o4 ? o4 = e8 : null === a5 && (a5 = e8), Ve.lastIndex = 0) : null === n5 && (n5 = e8));
      if (null === o4 || null === a5)
        return e7;
      let i5 = t6(n5 ?? "currentcolor");
      return null !== n5 ? e7.replace(n5, i5) : `${e7} ${i5}`;
    }).join(", ");
  }
  var Ee = /^-?[a-z][a-zA-Z0-9/%._-]*$/, Ne = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/, Oe = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"], Fe = class {
    utilities = new u4(() => []);
    completions = /* @__PURE__ */ new Map();
    static(e6, t6) {
      this.utilities.get(e6).push({ kind: "static", compileFn: t6 });
    }
    functional(e6, t6, r5) {
      this.utilities.get(e6).push({ kind: "functional", compileFn: t6, options: r5 });
    }
    has(e6, t6) {
      return this.utilities.has(e6) && this.utilities.get(e6).some((e7) => e7.kind === t6);
    }
    get(e6) {
      return this.utilities.has(e6) ? this.utilities.get(e6) : [];
    }
    getCompletions(e6) {
      return this.has(e6, "static") ? this.completions.get(e6)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(e6)?.() ?? [];
    }
    suggest(e6, t6) {
      let r5 = this.completions.get(e6);
      r5 ? this.completions.set(e6, () => [...r5?.(), ...t6?.()]) : this.completions.set(e6, t6);
    }
    keys(e6) {
      let t6 = [];
      for (let [r5, n5] of this.utilities.entries())
        for (let o4 of n5)
          if (o4.kind === e6) {
            t6.push(r5);
            break;
          }
      return t6;
    }
  };
  function Ue(e6, t6, r5) {
    return A2("@property", e6, [S4("syntax", r5 ? `"${r5}"` : '"*"'), S4("inherits", "false"), ...t6 ? [S4("initial-value", t6)] : []]);
  }
  function We(e6, t6) {
    if (null === t6)
      return e6;
    let r5 = Number(t6);
    return Number.isNaN(r5) || (t6 = 100 * r5 + "%"), "100%" === t6 ? e6 : `color-mix(in oklab, ${e6} ${t6}, transparent)`;
  }
  function Re(e6, t6) {
    let r5 = Number(t6);
    return Number.isNaN(r5) || (t6 = 100 * r5 + "%"), `oklab(from ${e6} l a b / ${t6})`;
  }
  function De(e6, t6, r5) {
    if (!t6)
      return e6;
    if ("arbitrary" === t6.kind)
      return We(e6, t6.value);
    let n5 = r5.resolve(t6.value, ["--opacity"]);
    return n5 ? We(e6, n5) : Ce(t6.value) ? We(e6, `${t6.value}%`) : null;
  }
  function _e(e6, t6, r5) {
    let n5 = null;
    switch (e6.value.value) {
      case "inherit":
        n5 = "inherit";
        break;
      case "transparent":
        n5 = "transparent";
        break;
      case "current":
        n5 = "currentcolor";
        break;
      default:
        n5 = t6.resolve(e6.value.value, r5);
    }
    return n5 ? De(n5, e6.modifier, t6) : null;
  }
  var Le = /(\d+)_(\d+)/g;
  var Me = ["number", "integer", "ratio", "percentage"];
  function Be(e6, t6, r5) {
    for (let n5 of t6.nodes) {
      if ("named" === e6.kind && "word" === n5.kind && ("'" === n5.value[0] || '"' === n5.value[0]) && n5.value[n5.value.length - 1] === n5.value[0] && n5.value.slice(1, -1) === e6.value)
        return { nodes: m4(e6.value) };
      if ("named" === e6.kind && "word" === n5.kind && "-" === n5.value[0] && "-" === n5.value[1]) {
        let t7 = n5.value;
        if (t7.endsWith("-*")) {
          t7 = t7.slice(0, -2);
          let n6 = r5.theme.resolve(e6.value, [t7]);
          if (n6)
            return { nodes: m4(n6) };
        } else {
          let n6 = t7.split("-*");
          if (n6.length <= 1)
            continue;
          let o4 = [n6.shift()], a5 = r5.theme.resolveWith(e6.value, o4, n6);
          if (a5) {
            let [, e7 = {}] = a5;
            {
              let t8 = e7[n6.pop()];
              if (t8)
                return { nodes: m4(t8) };
            }
          }
        }
      } else {
        if ("named" === e6.kind && "word" === n5.kind) {
          if (!Me.includes(n5.value))
            continue;
          let t7 = "ratio" === n5.value && "fraction" in e6 ? e6.fraction : e6.value;
          if (!t7)
            continue;
          let r6 = ce(t7, [n5.value]);
          if (null === r6)
            continue;
          if ("ratio" === r6) {
            let [e7, r7] = q2(t7, "/");
            if (!Ae(e7) || !Ae(r7))
              continue;
          } else {
            if ("number" === r6 && !Se(t7))
              continue;
            if ("percentage" === r6 && !Ae(t7.slice(0, -1)))
              continue;
          }
          return { nodes: m4(t7), ratio: "ratio" === r6 };
        }
        if ("arbitrary" === e6.kind && "word" === n5.kind && "[" === n5.value[0] && "]" === n5.value[n5.value.length - 1]) {
          let t7 = n5.value.slice(1, -1);
          if ("*" === t7)
            return { nodes: m4(e6.value) };
          if ("dataType" in e6 && e6.dataType && e6.dataType !== t7)
            continue;
          if ("dataType" in e6 && e6.dataType)
            return { nodes: m4(e6.value) };
          if (null !== ce(e6.value, [t7]))
            return { nodes: m4(e6.value) };
        }
      }
    }
  }
  function Ie(e6, t6, r5, n5, o4 = "") {
    let a5 = false, i5 = Ke(t6, (e7) => null == r5 ? n5(e7) : e7.startsWith("current") ? n5(We(e7, r5)) : ((e7.startsWith("var(") || r5.startsWith("var(")) && (a5 = true), n5(Re(e7, r5))));
    function l5(e7) {
      return o4 ? q2(e7, ",").map((e8) => o4 + e8).join(",") : e7;
    }
    return a5 ? [S4(e6, l5(Ke(t6, n5))), z2("@supports (color: lab(from red l a b))", [S4(e6, l5(i5))])] : [S4(e6, l5(i5))];
  }
  function Pe(e6, t6, r5, n5, o4 = "") {
    let a5 = false, i5 = q2(t6, ",").map((e7) => Ke(e7, (e8) => null == r5 ? n5(e8) : e8.startsWith("current") ? n5(We(e8, r5)) : ((e8.startsWith("var(") || r5.startsWith("var(")) && (a5 = true), n5(Re(e8, r5))))).map((e7) => `drop-shadow(${e7})`).join(" ");
    return a5 ? [S4(e6, o4 + q2(t6, ",").map((e7) => `drop-shadow(${Ke(e7, n5)})`).join(" ")), z2("@supports (color: lab(from red l a b))", [S4(e6, o4 + i5)])] : [S4(e6, o4 + i5)];
  }
  var qe = { "--alpha": function(e6, t6, r5, ...n5) {
    let [o4, a5] = q2(r5, "/").map((e7) => e7.trim());
    if (!o4 || !a5)
      throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${o4 || "var(--my-color)"} / ${a5 || "50%"})\``);
    if (n5.length > 0)
      throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${o4 || "var(--my-color)"} / ${a5 || "50%"})\``);
    return We(o4, a5);
  }, "--spacing": function(e6, t6, r5, ...n5) {
    if (!r5)
      throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (n5.length > 0)
      throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${n5.length + 1}.`);
    let o4 = e6.theme.resolve(null, ["--spacing"]);
    if (!o4)
      throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${o4} * ${r5})`;
  }, "--theme": function(e6, t6, r5, ...n5) {
    if (!r5.startsWith("--"))
      throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let o4 = false;
    r5.endsWith(" inline") && (o4 = true, r5 = r5.slice(0, -7)), "at-rule" === t6.kind && (o4 = true);
    let a5 = e6.resolveThemeValue(r5, o4);
    if (!a5) {
      if (n5.length > 0)
        return n5.join(", ");
      throw new Error(`Could not resolve value for theme function: \`theme(${r5})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (0 === n5.length)
      return a5;
    let i5 = n5.join(", ");
    if ("initial" === i5)
      return a5;
    if ("initial" === a5)
      return i5;
    if (a5.startsWith("var(") || a5.startsWith("theme(") || a5.startsWith("--theme(")) {
      let e7 = m4(a5);
      return function(e8, t7) {
        k2(e8, (e9) => {
          if ("function" === e9.kind && ("var" === e9.value || "theme" === e9.value || "--theme" === e9.value))
            if (1 === e9.nodes.length)
              e9.nodes.push({ kind: "word", value: `, ${t7}` });
            else {
              let r6 = e9.nodes[e9.nodes.length - 1];
              "word" === r6.kind && "initial" === r6.value && (r6.value = t7);
            }
        });
      }(e7, i5), h4(e7);
    }
    return a5;
  }, theme: function(e6, t6, r5, ...n5) {
    r5 = function(e7) {
      if ("'" !== e7[0] && '"' !== e7[0])
        return e7;
      let t7 = "", r6 = e7[0];
      for (let n6 = 1; n6 < e7.length - 1; n6++) {
        let o5 = e7[n6], a5 = e7[n6 + 1];
        "\\" !== o5 || a5 !== r6 && "\\" !== a5 ? t7 += o5 : (t7 += a5, n6++);
      }
      return t7;
    }(r5);
    let o4 = e6.resolveThemeValue(r5);
    if (!o4 && n5.length > 0)
      return n5.join(", ");
    if (!o4)
      throw new Error(`Could not resolve value for theme function: \`theme(${r5})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return o4;
  } };
  var He = new RegExp(Object.keys(qe).map((e6) => `${e6}\\(`).join("|"));
  function Ze(e6, t6) {
    let r5 = 0;
    return k2(e6, (e7) => {
      if ("declaration" === e7.kind && e7.value && He.test(e7.value))
        return r5 |= 8, void (e7.value = Ye(e7.value, e7, t6));
      "at-rule" === e7.kind && ("@media" === e7.name || "@custom-media" === e7.name || "@container" === e7.name || "@supports" === e7.name) && He.test(e7.params) && (r5 |= 8, e7.params = Ye(e7.params, e7, t6));
    }), r5;
  }
  function Ye(e6, t6, r5) {
    let n5 = m4(e6);
    return k2(n5, (e7) => {
      if ("function" === e7.kind && e7.value in qe) {
        let n6 = q2(h4(e7.nodes).trim(), ",").map((e8) => e8.trim()), o4 = qe[e7.value](r5, t6, ...n6);
        return w3.Replace(m4(o4));
      }
    }), h4(n5);
  }
  var Ge = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/, Je = class {
    compareFns = /* @__PURE__ */ new Map();
    variants = /* @__PURE__ */ new Map();
    completions = /* @__PURE__ */ new Map();
    groupOrder = null;
    lastOrder = 0;
    static(e6, t6, { compounds: r5, order: n5 } = {}) {
      this.set(e6, { kind: "static", applyFn: t6, compoundsWith: 0, compounds: r5 ?? 2, order: n5 });
    }
    fromAst(e6, t6, r5) {
      let n5 = [], o4 = false;
      k2(t6, (e7) => {
        "rule" === e7.kind ? n5.push(e7.selector) : "at-rule" === e7.kind && "@variant" === e7.name ? o4 = true : "at-rule" === e7.kind && "@slot" !== e7.name && n5.push(`${e7.name} ${e7.params}`);
      }), this.static(e6, (e7) => {
        let n6 = t6.map(V2);
        o4 && tt2(n6, r5), et2(n6, e7.nodes), e7.nodes = n6;
      }, { compounds: Xe(n5) });
    }
    functional(e6, t6, { compounds: r5, order: n5 } = {}) {
      this.set(e6, { kind: "functional", applyFn: t6, compoundsWith: 0, compounds: r5 ?? 2, order: n5 });
    }
    compound(e6, t6, r5, { compounds: n5, order: o4 } = {}) {
      this.set(e6, { kind: "compound", applyFn: r5, compoundsWith: t6, compounds: n5 ?? 2, order: o4 });
    }
    group(e6, t6) {
      this.groupOrder = this.nextOrder(), t6 && this.compareFns.set(this.groupOrder, t6), e6(), this.groupOrder = null;
    }
    has(e6) {
      return this.variants.has(e6);
    }
    get(e6) {
      return this.variants.get(e6);
    }
    kind(e6) {
      return this.variants.get(e6)?.kind;
    }
    compoundsWith(e6, t6) {
      let r5 = this.variants.get(e6), n5 = "string" == typeof t6 ? this.variants.get(t6) : "arbitrary" === t6.kind ? { compounds: Xe([t6.selector]) } : this.variants.get(t6.root);
      return !!(r5 && n5 && "compound" === r5.kind && 0 !== n5.compounds && 0 !== r5.compoundsWith && r5.compoundsWith & n5.compounds);
    }
    suggest(e6, t6) {
      this.completions.set(e6, t6);
    }
    getCompletions(e6) {
      return this.completions.get(e6)?.() ?? [];
    }
    compare(e6, t6) {
      if (e6 === t6)
        return 0;
      if (null === e6)
        return -1;
      if (null === t6)
        return 1;
      if ("arbitrary" === e6.kind && "arbitrary" === t6.kind)
        return e6.selector < t6.selector ? -1 : 1;
      if ("arbitrary" === e6.kind)
        return 1;
      if ("arbitrary" === t6.kind)
        return -1;
      let r5 = this.variants.get(e6.root).order, n5 = r5 - this.variants.get(t6.root).order;
      if (0 !== n5)
        return n5;
      if ("compound" === e6.kind && "compound" === t6.kind) {
        let r6 = this.compare(e6.variant, t6.variant);
        return 0 !== r6 ? r6 : e6.modifier && t6.modifier ? e6.modifier.value < t6.modifier.value ? -1 : 1 : e6.modifier ? 1 : t6.modifier ? -1 : 0;
      }
      let o4 = this.compareFns.get(r5);
      if (void 0 !== o4)
        return o4(e6, t6);
      if (e6.root !== t6.root)
        return e6.root < t6.root ? -1 : 1;
      let a5 = e6.value, i5 = t6.value;
      return null === a5 ? -1 : null === i5 || "arbitrary" === a5.kind && "arbitrary" !== i5.kind ? 1 : "arbitrary" !== a5.kind && "arbitrary" === i5.kind || a5.value < i5.value ? -1 : 1;
    }
    keys() {
      return this.variants.keys();
    }
    entries() {
      return this.variants.entries();
    }
    set(e6, { kind: t6, applyFn: r5, compounds: n5, compoundsWith: o4, order: a5 }) {
      let i5 = this.variants.get(e6);
      i5 ? Object.assign(i5, { kind: t6, applyFn: r5, compounds: n5 }) : (void 0 === a5 && (this.lastOrder = this.nextOrder(), a5 = this.lastOrder), this.variants.set(e6, { kind: t6, applyFn: r5, order: a5, compoundsWith: o4, compounds: n5 }));
    }
    nextOrder() {
      return this.groupOrder ?? this.lastOrder + 1;
    }
  };
  function Xe(e6) {
    let t6 = 0;
    for (let r5 of e6)
      if ("@" !== r5[0]) {
        if (r5.includes("::"))
          return 0;
        t6 |= 2;
      } else {
        if (!r5.startsWith("@media") && !r5.startsWith("@supports") && !r5.startsWith("@container"))
          return 0;
        t6 |= 1;
      }
    return t6;
  }
  function Qe(e6) {
    if (e6.includes("=")) {
      let [t6, ...r5] = q2(e6, "="), n5 = r5.join("=").trim();
      if ("'" === n5[0] || '"' === n5[0])
        return e6;
      if (n5.length > 1) {
        let e7 = n5[n5.length - 1];
        if (" " === n5[n5.length - 2] && ("i" === e7 || "I" === e7 || "s" === e7 || "S" === e7))
          return `${t6}="${n5.slice(0, -2)}" ${e7}`;
      }
      return `${t6}="${n5}"`;
    }
    return e6;
  }
  function et2(e6, t6) {
    k2(e6, (e7) => "at-rule" === e7.kind && "@slot" === e7.name ? w3.Replace(t6) : "at-rule" !== e7.kind || "@keyframes" !== e7.name && "@property" !== e7.name ? void 0 : (Object.assign(e7, T2([A2(e7.name, e7.params, e7.nodes)])), w3.Skip));
  }
  function tt2(e6, t6) {
    let r5 = 0;
    return k2(e6, (e7) => {
      if ("at-rule" !== e7.kind || "@variant" !== e7.name)
        return;
      let n5 = $4("&", e7.nodes), o4 = e7.params, a5 = t6.parseVariant(o4);
      if (null === a5)
        throw new Error(`Cannot use \`@variant\` with unknown variant: ${o4}`);
      if (null === at2(n5, a5, t6.variants))
        throw new Error(`Cannot use \`@variant\` with variant: ${o4}`);
      return r5 |= 32, w3.Replace(n5);
    }), r5;
  }
  function rt2(e6) {
    let t6 = function(e7) {
      let t7 = new Fe();
      function r6(r7, n7) {
        function* o6(t8) {
          for (let r8 of e7.keysInNamespaces(t8))
            yield r8.replace(Le, (e8, t9, r9) => `${t9}.${r9}`);
        }
        let a6 = ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
        t7.suggest(r7, () => {
          let e8 = [];
          for (let t8 of n7()) {
            if ("string" == typeof t8) {
              e8.push({ values: [t8], modifiers: [] });
              continue;
            }
            let r8 = [...t8.values ?? [], ...o6(t8.valueThemeKeys ?? [])], n8 = [...t8.modifiers ?? [], ...o6(t8.modifierThemeKeys ?? [])];
            t8.supportsFractions && r8.push(...a6), t8.hasDefaultValue && r8.unshift(null), e8.push({ supportsNegative: t8.supportsNegative, values: r8, modifiers: n8 });
          }
          return e8;
        });
      }
      function n6(e8, r7) {
        t7.static(e8, () => r7.map((e9) => "function" == typeof e9 ? e9() : S4(e9[0], e9[1])));
      }
      function o5(n7, o6) {
        function a6({ negative: t8 }) {
          return (r7) => {
            let n8 = null, a7 = null;
            if (r7.value)
              if ("arbitrary" === r7.value.kind) {
                if (r7.modifier)
                  return;
                n8 = r7.value.value, a7 = r7.value.dataType;
              } else {
                if (n8 = e7.resolve(r7.value.fraction ?? r7.value.value, o6.themeKeys ?? []), null === n8 && o6.supportsFractions && r7.value.fraction) {
                  let [e8, t9] = q2(r7.value.fraction, "/");
                  if (!Ae(e8) || !Ae(t9))
                    return;
                  n8 = `calc(${r7.value.fraction} * 100%)`;
                }
                if (null === n8 && t8 && o6.handleNegativeBareValue) {
                  if (n8 = o6.handleNegativeBareValue(r7.value), !n8?.includes("/") && r7.modifier)
                    return;
                  if (null !== n8)
                    return o6.handle(n8, null);
                }
                if (null === n8 && o6.handleBareValue && (n8 = o6.handleBareValue(r7.value), !n8?.includes("/") && r7.modifier))
                  return;
                if (null === n8 && !t8 && o6.staticValues && !r7.modifier) {
                  let e8 = o6.staticValues[r7.value.value];
                  if (e8)
                    return e8.map(V2);
                }
              }
            else {
              if (r7.modifier)
                return;
              n8 = void 0 !== o6.defaultValue ? o6.defaultValue : e7.resolve(null, o6.themeKeys ?? []);
            }
            if (null !== n8)
              return o6.handle(t8 ? `calc(${n8} * -1)` : n8, a7);
          };
        }
        if (o6.supportsNegative && t7.functional(`-${n7}`, a6({ negative: true })), t7.functional(n7, a6({ negative: false })), r6(n7, () => [{ supportsNegative: o6.supportsNegative, valueThemeKeys: o6.themeKeys ?? [], hasDefaultValue: void 0 !== o6.defaultValue && null !== o6.defaultValue, supportsFractions: o6.supportsFractions }]), o6.staticValues && Object.keys(o6.staticValues).length > 0) {
          let e8 = Object.keys(o6.staticValues);
          r6(n7, () => [{ values: e8 }]);
        }
      }
      function a5(n7, o6) {
        t7.functional(n7, (t8) => {
          if (!t8.value)
            return;
          let r7 = null;
          return "arbitrary" === t8.value.kind ? (r7 = t8.value.value, r7 = De(r7, t8.modifier, e7)) : r7 = _e(t8, e7, o6.themeKeys), null !== r7 ? o6.handle(r7) : void 0;
        }), r6(n7, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: o6.themeKeys, modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }]);
      }
      function i6(n7, a6, i7, { supportsNegative: l7 = false, supportsFractions: s7 = false, staticValues: c6 } = {}) {
        l7 && t7.static(`-${n7}-px`, () => i7("-1px")), t7.static(`${n7}-px`, () => i7("1px")), o5(n7, { themeKeys: a6, supportsFractions: s7, supportsNegative: l7, defaultValue: null, handleBareValue: ({ value: t8 }) => {
          let r7 = e7.resolve(null, ["--spacing"]);
          return r7 && Se(t8) ? `calc(${r7} * ${t8})` : null;
        }, handleNegativeBareValue: ({ value: t8 }) => {
          let r7 = e7.resolve(null, ["--spacing"]);
          return r7 && Se(t8) ? `calc(${r7} * -${t8})` : null;
        }, handle: i7, staticValues: c6 }), r6(n7, () => [{ values: e7.get(["--spacing"]) ? Oe : [], supportsNegative: l7, supportsFractions: s7, valueThemeKeys: a6 }]);
      }
      n6("sr-only", [["position", "absolute"], ["width", "1px"], ["height", "1px"], ["padding", "0"], ["margin", "-1px"], ["overflow", "hidden"], ["clip-path", "inset(50%)"], ["white-space", "nowrap"], ["border-width", "0"]]), n6("not-sr-only", [["position", "static"], ["width", "auto"], ["height", "auto"], ["padding", "0"], ["margin", "0"], ["overflow", "visible"], ["clip-path", "none"], ["white-space", "normal"]]), n6("pointer-events-none", [["pointer-events", "none"]]), n6("pointer-events-auto", [["pointer-events", "auto"]]), n6("visible", [["visibility", "visible"]]), n6("invisible", [["visibility", "hidden"]]), n6("collapse", [["visibility", "collapse"]]), n6("static", [["position", "static"]]), n6("fixed", [["position", "fixed"]]), n6("absolute", [["position", "absolute"]]), n6("relative", [["position", "relative"]]), n6("sticky", [["position", "sticky"]]);
      for (let [e8, t8] of [["inset", "inset"], ["inset-x", "inset-inline"], ["inset-y", "inset-block"], ["start", "inset-inline-start"], ["end", "inset-inline-end"], ["top", "top"], ["right", "right"], ["bottom", "bottom"], ["left", "left"]])
        n6(`${e8}-auto`, [[t8, "auto"]]), n6(`${e8}-full`, [[t8, "100%"]]), n6(`-${e8}-full`, [[t8, "-100%"]]), i6(e8, ["--inset", "--spacing"], (e9) => [S4(t8, e9)], { supportsNegative: true, supportsFractions: true });
      n6("isolate", [["isolation", "isolate"]]), n6("isolation-auto", [["isolation", "auto"]]), o5("z", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--z-index"], handle: (e8) => [S4("z-index", e8)], staticValues: { auto: [S4("z-index", "auto")] } }), r6("z", () => [{ supportsNegative: true, values: ["0", "10", "20", "30", "40", "50"], valueThemeKeys: ["--z-index"] }]), o5("order", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--order"], handle: (e8) => [S4("order", e8)], staticValues: { first: [S4("order", "-9999")], last: [S4("order", "9999")] } }), r6("order", () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--order"] }]), o5("col", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--grid-column"], handle: (e8) => [S4("grid-column", e8)], staticValues: { auto: [S4("grid-column", "auto")] } }), o5("col-span", { handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, handle: (e8) => [S4("grid-column", `span ${e8} / span ${e8}`)], staticValues: { full: [S4("grid-column", "1 / -1")] } }), o5("col-start", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--grid-column-start"], handle: (e8) => [S4("grid-column-start", e8)], staticValues: { auto: [S4("grid-column-start", "auto")] } }), o5("col-end", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--grid-column-end"], handle: (e8) => [S4("grid-column-end", e8)], staticValues: { auto: [S4("grid-column-end", "auto")] } }), r6("col-span", () => [{ values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: [] }]), r6("col-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--grid-column-start"] }]), r6("col-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--grid-column-end"] }]), o5("row", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--grid-row"], handle: (e8) => [S4("grid-row", e8)], staticValues: { auto: [S4("grid-row", "auto")] } }), o5("row-span", { themeKeys: [], handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, handle: (e8) => [S4("grid-row", `span ${e8} / span ${e8}`)], staticValues: { full: [S4("grid-row", "1 / -1")] } }), o5("row-start", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--grid-row-start"], handle: (e8) => [S4("grid-row-start", e8)], staticValues: { auto: [S4("grid-row-start", "auto")] } }), o5("row-end", { supportsNegative: true, handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, themeKeys: ["--grid-row-end"], handle: (e8) => [S4("grid-row-end", e8)], staticValues: { auto: [S4("grid-row-end", "auto")] } }), r6("row-span", () => [{ values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: [] }]), r6("row-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--grid-row-start"] }]), r6("row-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--grid-row-end"] }]), n6("float-start", [["float", "inline-start"]]), n6("float-end", [["float", "inline-end"]]), n6("float-right", [["float", "right"]]), n6("float-left", [["float", "left"]]), n6("float-none", [["float", "none"]]), n6("clear-start", [["clear", "inline-start"]]), n6("clear-end", [["clear", "inline-end"]]), n6("clear-right", [["clear", "right"]]), n6("clear-left", [["clear", "left"]]), n6("clear-both", [["clear", "both"]]), n6("clear-none", [["clear", "none"]]);
      for (let [e8, t8] of [["m", "margin"], ["mx", "margin-inline"], ["my", "margin-block"], ["ms", "margin-inline-start"], ["me", "margin-inline-end"], ["mt", "margin-top"], ["mr", "margin-right"], ["mb", "margin-bottom"], ["ml", "margin-left"]])
        n6(`${e8}-auto`, [[t8, "auto"]]), i6(e8, ["--margin", "--spacing"], (e9) => [S4(t8, e9)], { supportsNegative: true });
      n6("box-border", [["box-sizing", "border-box"]]), n6("box-content", [["box-sizing", "content-box"]]), o5("line-clamp", { themeKeys: ["--line-clamp"], handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, handle: (e8) => [S4("overflow", "hidden"), S4("display", "-webkit-box"), S4("-webkit-box-orient", "vertical"), S4("-webkit-line-clamp", e8)], staticValues: { none: [S4("overflow", "visible"), S4("display", "block"), S4("-webkit-box-orient", "horizontal"), S4("-webkit-line-clamp", "unset")] } }), r6("line-clamp", () => [{ values: ["1", "2", "3", "4", "5", "6"], valueThemeKeys: ["--line-clamp"] }]), n6("block", [["display", "block"]]), n6("inline-block", [["display", "inline-block"]]), n6("inline", [["display", "inline"]]), n6("hidden", [["display", "none"]]), n6("inline-flex", [["display", "inline-flex"]]), n6("table", [["display", "table"]]), n6("inline-table", [["display", "inline-table"]]), n6("table-caption", [["display", "table-caption"]]), n6("table-cell", [["display", "table-cell"]]), n6("table-column", [["display", "table-column"]]), n6("table-column-group", [["display", "table-column-group"]]), n6("table-footer-group", [["display", "table-footer-group"]]), n6("table-header-group", [["display", "table-header-group"]]), n6("table-row-group", [["display", "table-row-group"]]), n6("table-row", [["display", "table-row"]]), n6("flow-root", [["display", "flow-root"]]), n6("flex", [["display", "flex"]]), n6("grid", [["display", "grid"]]), n6("inline-grid", [["display", "inline-grid"]]), n6("contents", [["display", "contents"]]), n6("list-item", [["display", "list-item"]]), n6("field-sizing-content", [["field-sizing", "content"]]), n6("field-sizing-fixed", [["field-sizing", "fixed"]]), o5("aspect", { themeKeys: ["--aspect"], handleBareValue: ({ fraction: e8 }) => {
        if (null === e8)
          return null;
        let [t8, r7] = q2(e8, "/");
        return Ae(t8) && Ae(r7) ? e8 : null;
      }, handle: (e8) => [S4("aspect-ratio", e8)], staticValues: { auto: [S4("aspect-ratio", "auto")], square: [S4("aspect-ratio", "1 / 1")] } });
      for (let [e8, t8] of [["full", "100%"], ["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"], ["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]])
        n6(`size-${e8}`, [["--tw-sort", "size"], ["width", t8], ["height", t8]]), n6(`w-${e8}`, [["width", t8]]), n6(`h-${e8}`, [["height", t8]]), n6(`min-w-${e8}`, [["min-width", t8]]), n6(`min-h-${e8}`, [["min-height", t8]]), n6(`max-w-${e8}`, [["max-width", t8]]), n6(`max-h-${e8}`, [["max-height", t8]]);
      n6("size-auto", [["--tw-sort", "size"], ["width", "auto"], ["height", "auto"]]), n6("w-auto", [["width", "auto"]]), n6("h-auto", [["height", "auto"]]), n6("min-w-auto", [["min-width", "auto"]]), n6("min-h-auto", [["min-height", "auto"]]), n6("h-lh", [["height", "1lh"]]), n6("min-h-lh", [["min-height", "1lh"]]), n6("max-h-lh", [["max-height", "1lh"]]), n6("w-screen", [["width", "100vw"]]), n6("min-w-screen", [["min-width", "100vw"]]), n6("max-w-screen", [["max-width", "100vw"]]), n6("h-screen", [["height", "100vh"]]), n6("min-h-screen", [["min-height", "100vh"]]), n6("max-h-screen", [["max-height", "100vh"]]), n6("max-w-none", [["max-width", "none"]]), n6("max-h-none", [["max-height", "none"]]), i6("size", ["--size", "--spacing"], (e8) => [S4("--tw-sort", "size"), S4("width", e8), S4("height", e8)], { supportsFractions: true });
      for (let [e8, t8, r7] of [["w", ["--width", "--spacing", "--container"], "width"], ["min-w", ["--min-width", "--spacing", "--container"], "min-width"], ["max-w", ["--max-width", "--spacing", "--container"], "max-width"], ["h", ["--height", "--spacing"], "height"], ["min-h", ["--min-height", "--height", "--spacing"], "min-height"], ["max-h", ["--max-height", "--height", "--spacing"], "max-height"]])
        i6(e8, t8, (e9) => [S4(r7, e9)], { supportsFractions: true });
      t7.static("container", () => {
        let t8 = [...e7.namespace("--breakpoint").values()];
        t8.sort((e8, t9) => ae(e8, t9, "asc"));
        let r7 = [S4("--tw-sort", "--tw-container-component"), S4("width", "100%")];
        for (let e8 of t8)
          r7.push(A2("@media", `(width >= ${e8})`, [S4("max-width", e8)]));
        return r7;
      }), n6("flex-auto", [["flex", "auto"]]), n6("flex-initial", [["flex", "0 auto"]]), n6("flex-none", [["flex", "none"]]), t7.functional("flex", (e8) => {
        if (e8.value) {
          if ("arbitrary" === e8.value.kind)
            return e8.modifier ? void 0 : [S4("flex", e8.value.value)];
          if (e8.value.fraction) {
            let [t8, r7] = q2(e8.value.fraction, "/");
            return Ae(t8) && Ae(r7) ? [S4("flex", `calc(${e8.value.fraction} * 100%)`)] : void 0;
          }
          if (Ae(e8.value.value))
            return e8.modifier ? void 0 : [S4("flex", e8.value.value)];
        }
      }), r6("flex", () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`) }]), o5("shrink", { defaultValue: "1", handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, handle: (e8) => [S4("flex-shrink", e8)] }), o5("grow", { defaultValue: "1", handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, handle: (e8) => [S4("flex-grow", e8)] }), r6("shrink", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), r6("grow", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), n6("basis-auto", [["flex-basis", "auto"]]), n6("basis-full", [["flex-basis", "100%"]]), i6("basis", ["--flex-basis", "--spacing", "--container"], (e8) => [S4("flex-basis", e8)], { supportsFractions: true }), n6("table-auto", [["table-layout", "auto"]]), n6("table-fixed", [["table-layout", "fixed"]]), n6("caption-top", [["caption-side", "top"]]), n6("caption-bottom", [["caption-side", "bottom"]]), n6("border-collapse", [["border-collapse", "collapse"]]), n6("border-separate", [["border-collapse", "separate"]]);
      let l6 = () => T2([Ue("--tw-border-spacing-x", "0", "<length>"), Ue("--tw-border-spacing-y", "0", "<length>")]);
      i6("border-spacing", ["--border-spacing", "--spacing"], (e8) => [l6(), S4("--tw-border-spacing-x", e8), S4("--tw-border-spacing-y", e8), S4("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), i6("border-spacing-x", ["--border-spacing", "--spacing"], (e8) => [l6(), S4("--tw-border-spacing-x", e8), S4("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), i6("border-spacing-y", ["--border-spacing", "--spacing"], (e8) => [l6(), S4("--tw-border-spacing-y", e8), S4("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), o5("origin", { themeKeys: ["--transform-origin"], handle: (e8) => [S4("transform-origin", e8)], staticValues: { center: [S4("transform-origin", "center")], top: [S4("transform-origin", "top")], "top-right": [S4("transform-origin", "100% 0")], right: [S4("transform-origin", "100%")], "bottom-right": [S4("transform-origin", "100% 100%")], bottom: [S4("transform-origin", "bottom")], "bottom-left": [S4("transform-origin", "0 100%")], left: [S4("transform-origin", "0")], "top-left": [S4("transform-origin", "0 0")] } }), o5("perspective-origin", { themeKeys: ["--perspective-origin"], handle: (e8) => [S4("perspective-origin", e8)], staticValues: { center: [S4("perspective-origin", "center")], top: [S4("perspective-origin", "top")], "top-right": [S4("perspective-origin", "100% 0")], right: [S4("perspective-origin", "100%")], "bottom-right": [S4("perspective-origin", "100% 100%")], bottom: [S4("perspective-origin", "bottom")], "bottom-left": [S4("perspective-origin", "0 100%")], left: [S4("perspective-origin", "0")], "top-left": [S4("perspective-origin", "0 0")] } }), o5("perspective", { themeKeys: ["--perspective"], handle: (e8) => [S4("perspective", e8)], staticValues: { none: [S4("perspective", "none")] } });
      let s6 = () => T2([Ue("--tw-translate-x", "0"), Ue("--tw-translate-y", "0"), Ue("--tw-translate-z", "0")]);
      n6("translate-none", [["translate", "none"]]), n6("-translate-full", [s6, ["--tw-translate-x", "-100%"], ["--tw-translate-y", "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), n6("translate-full", [s6, ["--tw-translate-x", "100%"], ["--tw-translate-y", "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), i6("translate", ["--translate", "--spacing"], (e8) => [s6(), S4("--tw-translate-x", e8), S4("--tw-translate-y", e8), S4("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
      for (let e8 of ["x", "y"])
        n6(`-translate-${e8}-full`, [s6, [`--tw-translate-${e8}`, "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), n6(`translate-${e8}-full`, [s6, [`--tw-translate-${e8}`, "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), i6(`translate-${e8}`, ["--translate", "--spacing"], (t8) => [s6(), S4(`--tw-translate-${e8}`, t8), S4("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
      i6("translate-z", ["--translate", "--spacing"], (e8) => [s6(), S4("--tw-translate-z", e8), S4("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")], { supportsNegative: true }), n6("translate-3d", [s6, ["translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);
      let c5 = () => T2([Ue("--tw-scale-x", "1"), Ue("--tw-scale-y", "1"), Ue("--tw-scale-z", "1")]);
      function u5({ negative: t8 }) {
        return (r7) => {
          if (!r7.value || r7.modifier)
            return;
          let n7;
          return "arbitrary" === r7.value.kind ? (n7 = r7.value.value, n7 = t8 ? `calc(${n7} * -1)` : n7, [S4("scale", n7)]) : (n7 = e7.resolve(r7.value.value, ["--scale"]), !n7 && Ae(r7.value.value) && (n7 = `${r7.value.value}%`), n7 ? (n7 = t8 ? `calc(${n7} * -1)` : n7, [c5(), S4("--tw-scale-x", n7), S4("--tw-scale-y", n7), S4("--tw-scale-z", n7), S4("scale", "var(--tw-scale-x) var(--tw-scale-y)")]) : void 0);
        };
      }
      n6("scale-none", [["scale", "none"]]), t7.functional("-scale", u5({ negative: true })), t7.functional("scale", u5({ negative: false })), r6("scale", () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
      for (let e8 of ["x", "y", "z"])
        o5(`scale-${e8}`, { supportsNegative: true, themeKeys: ["--scale"], handleBareValue: ({ value: e9 }) => Ae(e9) ? `${e9}%` : null, handle: (t8) => [c5(), S4(`--tw-scale-${e8}`, t8), S4("scale", "var(--tw-scale-x) var(--tw-scale-y)" + ("z" === e8 ? " var(--tw-scale-z)" : ""))] }), r6(`scale-${e8}`, () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
      function d5({ negative: t8 }) {
        return (r7) => {
          if (!r7.value || r7.modifier)
            return;
          let n7;
          if ("arbitrary" === r7.value.kind) {
            n7 = r7.value.value;
            let e8 = r7.value.dataType ?? ce(n7, ["angle", "vector"]);
            if ("vector" === e8)
              return [S4("rotate", `${n7} var(--tw-rotate)`)];
            if ("angle" !== e8)
              return [S4("rotate", t8 ? `calc(${n7} * -1)` : n7)];
          } else if (n7 = e7.resolve(r7.value.value, ["--rotate"]), !n7 && Ae(r7.value.value) && (n7 = `${r7.value.value}deg`), !n7)
            return;
          return [S4("rotate", t8 ? `calc(${n7} * -1)` : n7)];
        };
      }
      n6("scale-3d", [c5, ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]), n6("rotate-none", [["rotate", "none"]]), t7.functional("-rotate", d5({ negative: true })), t7.functional("rotate", d5({ negative: false })), r6("rotate", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
      {
        let e8 = ["var(--tw-rotate-x,)", "var(--tw-rotate-y,)", "var(--tw-rotate-z,)", "var(--tw-skew-x,)", "var(--tw-skew-y,)"].join(" "), a6 = () => T2([Ue("--tw-rotate-x"), Ue("--tw-rotate-y"), Ue("--tw-rotate-z"), Ue("--tw-skew-x"), Ue("--tw-skew-y")]);
        for (let t8 of ["x", "y", "z"])
          o5(`rotate-${t8}`, { supportsNegative: true, themeKeys: ["--rotate"], handleBareValue: ({ value: e9 }) => Ae(e9) ? `${e9}deg` : null, handle: (r7) => [a6(), S4(`--tw-rotate-${t8}`, `rotate${t8.toUpperCase()}(${r7})`), S4("transform", e8)] }), r6(`rotate-${t8}`, () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
        o5("skew", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: e9 }) => Ae(e9) ? `${e9}deg` : null, handle: (t8) => [a6(), S4("--tw-skew-x", `skewX(${t8})`), S4("--tw-skew-y", `skewY(${t8})`), S4("transform", e8)] }), o5("skew-x", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: e9 }) => Ae(e9) ? `${e9}deg` : null, handle: (t8) => [a6(), S4("--tw-skew-x", `skewX(${t8})`), S4("transform", e8)] }), o5("skew-y", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: e9 }) => Ae(e9) ? `${e9}deg` : null, handle: (t8) => [a6(), S4("--tw-skew-y", `skewY(${t8})`), S4("transform", e8)] }), r6("skew", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r6("skew-x", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r6("skew-y", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), t7.functional("transform", (t8) => {
          if (t8.modifier)
            return;
          let r7 = null;
          return t8.value ? "arbitrary" === t8.value.kind && (r7 = t8.value.value) : r7 = e8, null !== r7 ? [a6(), S4("transform", r7)] : void 0;
        }), r6("transform", () => [{ hasDefaultValue: true }]), n6("transform-cpu", [["transform", e8]]), n6("transform-gpu", [["transform", `translateZ(0) ${e8}`]]), n6("transform-none", [["transform", "none"]]);
      }
      n6("transform-flat", [["transform-style", "flat"]]), n6("transform-3d", [["transform-style", "preserve-3d"]]), n6("transform-content", [["transform-box", "content-box"]]), n6("transform-border", [["transform-box", "border-box"]]), n6("transform-fill", [["transform-box", "fill-box"]]), n6("transform-stroke", [["transform-box", "stroke-box"]]), n6("transform-view", [["transform-box", "view-box"]]), n6("backface-visible", [["backface-visibility", "visible"]]), n6("backface-hidden", [["backface-visibility", "hidden"]]);
      for (let e8 of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"])
        n6(`cursor-${e8}`, [["cursor", e8]]);
      o5("cursor", { themeKeys: ["--cursor"], handle: (e8) => [S4("cursor", e8)] });
      for (let e8 of ["auto", "none", "manipulation"])
        n6(`touch-${e8}`, [["touch-action", e8]]);
      let f5 = () => T2([Ue("--tw-pan-x"), Ue("--tw-pan-y"), Ue("--tw-pinch-zoom")]);
      for (let e8 of ["x", "left", "right"])
        n6(`touch-pan-${e8}`, [f5, ["--tw-pan-x", `pan-${e8}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      for (let e8 of ["y", "up", "down"])
        n6(`touch-pan-${e8}`, [f5, ["--tw-pan-y", `pan-${e8}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      n6("touch-pinch-zoom", [f5, ["--tw-pinch-zoom", "pinch-zoom"], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      for (let e8 of ["none", "text", "all", "auto"])
        n6(`select-${e8}`, [["-webkit-user-select", e8], ["user-select", e8]]);
      n6("resize-none", [["resize", "none"]]), n6("resize-x", [["resize", "horizontal"]]), n6("resize-y", [["resize", "vertical"]]), n6("resize", [["resize", "both"]]), n6("snap-none", [["scroll-snap-type", "none"]]);
      let p5 = () => T2([Ue("--tw-scroll-snap-strictness", "proximity", "*")]);
      for (let e8 of ["x", "y", "both"])
        n6(`snap-${e8}`, [p5, ["scroll-snap-type", `${e8} var(--tw-scroll-snap-strictness)`]]);
      n6("snap-mandatory", [p5, ["--tw-scroll-snap-strictness", "mandatory"]]), n6("snap-proximity", [p5, ["--tw-scroll-snap-strictness", "proximity"]]), n6("snap-align-none", [["scroll-snap-align", "none"]]), n6("snap-start", [["scroll-snap-align", "start"]]), n6("snap-end", [["scroll-snap-align", "end"]]), n6("snap-center", [["scroll-snap-align", "center"]]), n6("snap-normal", [["scroll-snap-stop", "normal"]]), n6("snap-always", [["scroll-snap-stop", "always"]]);
      for (let [e8, t8] of [["scroll-m", "scroll-margin"], ["scroll-mx", "scroll-margin-inline"], ["scroll-my", "scroll-margin-block"], ["scroll-ms", "scroll-margin-inline-start"], ["scroll-me", "scroll-margin-inline-end"], ["scroll-mt", "scroll-margin-top"], ["scroll-mr", "scroll-margin-right"], ["scroll-mb", "scroll-margin-bottom"], ["scroll-ml", "scroll-margin-left"]])
        i6(e8, ["--scroll-margin", "--spacing"], (e9) => [S4(t8, e9)], { supportsNegative: true });
      for (let [e8, t8] of [["scroll-p", "scroll-padding"], ["scroll-px", "scroll-padding-inline"], ["scroll-py", "scroll-padding-block"], ["scroll-ps", "scroll-padding-inline-start"], ["scroll-pe", "scroll-padding-inline-end"], ["scroll-pt", "scroll-padding-top"], ["scroll-pr", "scroll-padding-right"], ["scroll-pb", "scroll-padding-bottom"], ["scroll-pl", "scroll-padding-left"]])
        i6(e8, ["--scroll-padding", "--spacing"], (e9) => [S4(t8, e9)]);
      n6("list-inside", [["list-style-position", "inside"]]), n6("list-outside", [["list-style-position", "outside"]]), o5("list", { themeKeys: ["--list-style-type"], handle: (e8) => [S4("list-style-type", e8)], staticValues: { none: [S4("list-style-type", "none")], disc: [S4("list-style-type", "disc")], decimal: [S4("list-style-type", "decimal")] } }), o5("list-image", { themeKeys: ["--list-style-image"], handle: (e8) => [S4("list-style-image", e8)], staticValues: { none: [S4("list-style-image", "none")] } }), n6("appearance-none", [["appearance", "none"]]), n6("appearance-auto", [["appearance", "auto"]]), n6("scheme-normal", [["color-scheme", "normal"]]), n6("scheme-dark", [["color-scheme", "dark"]]), n6("scheme-light", [["color-scheme", "light"]]), n6("scheme-light-dark", [["color-scheme", "light dark"]]), n6("scheme-only-dark", [["color-scheme", "only dark"]]), n6("scheme-only-light", [["color-scheme", "only light"]]), o5("columns", { themeKeys: ["--columns", "--container"], handleBareValue: ({ value: e8 }) => Ae(e8) ? e8 : null, handle: (e8) => [S4("columns", e8)], staticValues: { auto: [S4("columns", "auto")] } }), r6("columns", () => [{ values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--columns", "--container"] }]);
      for (let e8 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
        n6(`break-before-${e8}`, [["break-before", e8]]);
      for (let e8 of ["auto", "avoid", "avoid-page", "avoid-column"])
        n6(`break-inside-${e8}`, [["break-inside", e8]]);
      for (let e8 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
        n6(`break-after-${e8}`, [["break-after", e8]]);
      n6("grid-flow-row", [["grid-auto-flow", "row"]]), n6("grid-flow-col", [["grid-auto-flow", "column"]]), n6("grid-flow-dense", [["grid-auto-flow", "dense"]]), n6("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]), n6("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]), o5("auto-cols", { themeKeys: ["--grid-auto-columns"], handle: (e8) => [S4("grid-auto-columns", e8)], staticValues: { auto: [S4("grid-auto-columns", "auto")], min: [S4("grid-auto-columns", "min-content")], max: [S4("grid-auto-columns", "max-content")], fr: [S4("grid-auto-columns", "minmax(0, 1fr)")] } }), o5("auto-rows", { themeKeys: ["--grid-auto-rows"], handle: (e8) => [S4("grid-auto-rows", e8)], staticValues: { auto: [S4("grid-auto-rows", "auto")], min: [S4("grid-auto-rows", "min-content")], max: [S4("grid-auto-rows", "max-content")], fr: [S4("grid-auto-rows", "minmax(0, 1fr)")] } }), o5("grid-cols", { themeKeys: ["--grid-template-columns"], handleBareValue: ({ value: e8 }) => ze(e8) ? `repeat(${e8}, minmax(0, 1fr))` : null, handle: (e8) => [S4("grid-template-columns", e8)], staticValues: { none: [S4("grid-template-columns", "none")], subgrid: [S4("grid-template-columns", "subgrid")] } }), o5("grid-rows", { themeKeys: ["--grid-template-rows"], handleBareValue: ({ value: e8 }) => ze(e8) ? `repeat(${e8}, minmax(0, 1fr))` : null, handle: (e8) => [S4("grid-template-rows", e8)], staticValues: { none: [S4("grid-template-rows", "none")], subgrid: [S4("grid-template-rows", "subgrid")] } }), r6("grid-cols", () => [{ values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--grid-template-columns"] }]), r6("grid-rows", () => [{ values: Array.from({ length: 12 }, (e8, t8) => `${t8 + 1}`), valueThemeKeys: ["--grid-template-rows"] }]), n6("flex-row", [["flex-direction", "row"]]), n6("flex-row-reverse", [["flex-direction", "row-reverse"]]), n6("flex-col", [["flex-direction", "column"]]), n6("flex-col-reverse", [["flex-direction", "column-reverse"]]), n6("flex-wrap", [["flex-wrap", "wrap"]]), n6("flex-nowrap", [["flex-wrap", "nowrap"]]), n6("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]), n6("place-content-center", [["place-content", "center"]]), n6("place-content-start", [["place-content", "start"]]), n6("place-content-end", [["place-content", "end"]]), n6("place-content-center-safe", [["place-content", "safe center"]]), n6("place-content-end-safe", [["place-content", "safe end"]]), n6("place-content-between", [["place-content", "space-between"]]), n6("place-content-around", [["place-content", "space-around"]]), n6("place-content-evenly", [["place-content", "space-evenly"]]), n6("place-content-baseline", [["place-content", "baseline"]]), n6("place-content-stretch", [["place-content", "stretch"]]), n6("place-items-center", [["place-items", "center"]]), n6("place-items-start", [["place-items", "start"]]), n6("place-items-end", [["place-items", "end"]]), n6("place-items-center-safe", [["place-items", "safe center"]]), n6("place-items-end-safe", [["place-items", "safe end"]]), n6("place-items-baseline", [["place-items", "baseline"]]), n6("place-items-stretch", [["place-items", "stretch"]]), n6("content-normal", [["align-content", "normal"]]), n6("content-center", [["align-content", "center"]]), n6("content-start", [["align-content", "flex-start"]]), n6("content-end", [["align-content", "flex-end"]]), n6("content-center-safe", [["align-content", "safe center"]]), n6("content-end-safe", [["align-content", "safe flex-end"]]), n6("content-between", [["align-content", "space-between"]]), n6("content-around", [["align-content", "space-around"]]), n6("content-evenly", [["align-content", "space-evenly"]]), n6("content-baseline", [["align-content", "baseline"]]), n6("content-stretch", [["align-content", "stretch"]]), n6("items-center", [["align-items", "center"]]), n6("items-start", [["align-items", "flex-start"]]), n6("items-end", [["align-items", "flex-end"]]), n6("items-center-safe", [["align-items", "safe center"]]), n6("items-end-safe", [["align-items", "safe flex-end"]]), n6("items-baseline", [["align-items", "baseline"]]), n6("items-baseline-last", [["align-items", "last baseline"]]), n6("items-stretch", [["align-items", "stretch"]]), n6("justify-normal", [["justify-content", "normal"]]), n6("justify-center", [["justify-content", "center"]]), n6("justify-start", [["justify-content", "flex-start"]]), n6("justify-end", [["justify-content", "flex-end"]]), n6("justify-center-safe", [["justify-content", "safe center"]]), n6("justify-end-safe", [["justify-content", "safe flex-end"]]), n6("justify-between", [["justify-content", "space-between"]]), n6("justify-around", [["justify-content", "space-around"]]), n6("justify-evenly", [["justify-content", "space-evenly"]]), n6("justify-baseline", [["justify-content", "baseline"]]), n6("justify-stretch", [["justify-content", "stretch"]]), n6("justify-items-normal", [["justify-items", "normal"]]), n6("justify-items-center", [["justify-items", "center"]]), n6("justify-items-start", [["justify-items", "start"]]), n6("justify-items-end", [["justify-items", "end"]]), n6("justify-items-center-safe", [["justify-items", "safe center"]]), n6("justify-items-end-safe", [["justify-items", "safe end"]]), n6("justify-items-stretch", [["justify-items", "stretch"]]), i6("gap", ["--gap", "--spacing"], (e8) => [S4("gap", e8)]), i6("gap-x", ["--gap", "--spacing"], (e8) => [S4("column-gap", e8)]), i6("gap-y", ["--gap", "--spacing"], (e8) => [S4("row-gap", e8)]), i6("space-x", ["--space", "--spacing"], (e8) => [T2([Ue("--tw-space-x-reverse", "0")]), $4(":where(& > :not(:last-child))", [S4("--tw-sort", "row-gap"), S4("--tw-space-x-reverse", "0"), S4("margin-inline-start", `calc(${e8} * var(--tw-space-x-reverse))`), S4("margin-inline-end", `calc(${e8} * calc(1 - var(--tw-space-x-reverse)))`)])], { supportsNegative: true }), i6("space-y", ["--space", "--spacing"], (e8) => [T2([Ue("--tw-space-y-reverse", "0")]), $4(":where(& > :not(:last-child))", [S4("--tw-sort", "column-gap"), S4("--tw-space-y-reverse", "0"), S4("margin-block-start", `calc(${e8} * var(--tw-space-y-reverse))`), S4("margin-block-end", `calc(${e8} * calc(1 - var(--tw-space-y-reverse)))`)])], { supportsNegative: true }), n6("space-x-reverse", [() => T2([Ue("--tw-space-x-reverse", "0")]), () => $4(":where(& > :not(:last-child))", [S4("--tw-sort", "row-gap"), S4("--tw-space-x-reverse", "1")])]), n6("space-y-reverse", [() => T2([Ue("--tw-space-y-reverse", "0")]), () => $4(":where(& > :not(:last-child))", [S4("--tw-sort", "column-gap"), S4("--tw-space-y-reverse", "1")])]), n6("accent-auto", [["accent-color", "auto"]]), a5("accent", { themeKeys: ["--accent-color", "--color"], handle: (e8) => [S4("accent-color", e8)] }), a5("caret", { themeKeys: ["--caret-color", "--color"], handle: (e8) => [S4("caret-color", e8)] }), a5("divide", { themeKeys: ["--divide-color", "--border-color", "--color"], handle: (e8) => [$4(":where(& > :not(:last-child))", [S4("--tw-sort", "divide-color"), S4("border-color", e8)])] }), n6("place-self-auto", [["place-self", "auto"]]), n6("place-self-start", [["place-self", "start"]]), n6("place-self-end", [["place-self", "end"]]), n6("place-self-center", [["place-self", "center"]]), n6("place-self-end-safe", [["place-self", "safe end"]]), n6("place-self-center-safe", [["place-self", "safe center"]]), n6("place-self-stretch", [["place-self", "stretch"]]), n6("self-auto", [["align-self", "auto"]]), n6("self-start", [["align-self", "flex-start"]]), n6("self-end", [["align-self", "flex-end"]]), n6("self-center", [["align-self", "center"]]), n6("self-end-safe", [["align-self", "safe flex-end"]]), n6("self-center-safe", [["align-self", "safe center"]]), n6("self-stretch", [["align-self", "stretch"]]), n6("self-baseline", [["align-self", "baseline"]]), n6("self-baseline-last", [["align-self", "last baseline"]]), n6("justify-self-auto", [["justify-self", "auto"]]), n6("justify-self-start", [["justify-self", "flex-start"]]), n6("justify-self-end", [["justify-self", "flex-end"]]), n6("justify-self-center", [["justify-self", "center"]]), n6("justify-self-end-safe", [["justify-self", "safe flex-end"]]), n6("justify-self-center-safe", [["justify-self", "safe center"]]), n6("justify-self-stretch", [["justify-self", "stretch"]]);
      for (let e8 of ["auto", "hidden", "clip", "visible", "scroll"])
        n6(`overflow-${e8}`, [["overflow", e8]]), n6(`overflow-x-${e8}`, [["overflow-x", e8]]), n6(`overflow-y-${e8}`, [["overflow-y", e8]]);
      for (let e8 of ["auto", "contain", "none"])
        n6(`overscroll-${e8}`, [["overscroll-behavior", e8]]), n6(`overscroll-x-${e8}`, [["overscroll-behavior-x", e8]]), n6(`overscroll-y-${e8}`, [["overscroll-behavior-y", e8]]);
      n6("scroll-auto", [["scroll-behavior", "auto"]]), n6("scroll-smooth", [["scroll-behavior", "smooth"]]), n6("truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]]), n6("text-ellipsis", [["text-overflow", "ellipsis"]]), n6("text-clip", [["text-overflow", "clip"]]), n6("hyphens-none", [["-webkit-hyphens", "none"], ["hyphens", "none"]]), n6("hyphens-manual", [["-webkit-hyphens", "manual"], ["hyphens", "manual"]]), n6("hyphens-auto", [["-webkit-hyphens", "auto"], ["hyphens", "auto"]]), n6("whitespace-normal", [["white-space", "normal"]]), n6("whitespace-nowrap", [["white-space", "nowrap"]]), n6("whitespace-pre", [["white-space", "pre"]]), n6("whitespace-pre-line", [["white-space", "pre-line"]]), n6("whitespace-pre-wrap", [["white-space", "pre-wrap"]]), n6("whitespace-break-spaces", [["white-space", "break-spaces"]]), n6("text-wrap", [["text-wrap", "wrap"]]), n6("text-nowrap", [["text-wrap", "nowrap"]]), n6("text-balance", [["text-wrap", "balance"]]), n6("text-pretty", [["text-wrap", "pretty"]]), n6("break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]]), n6("break-all", [["word-break", "break-all"]]), n6("break-keep", [["word-break", "keep-all"]]), n6("wrap-anywhere", [["overflow-wrap", "anywhere"]]), n6("wrap-break-word", [["overflow-wrap", "break-word"]]), n6("wrap-normal", [["overflow-wrap", "normal"]]);
      for (let [e8, t8] of [["rounded", ["border-radius"]], ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]], ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]], ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]], ["rounded-ss", ["border-start-start-radius"]], ["rounded-se", ["border-start-end-radius"]], ["rounded-ee", ["border-end-end-radius"]], ["rounded-es", ["border-end-start-radius"]], ["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]])
        o5(e8, { themeKeys: ["--radius"], handle: (e9) => t8.map((t9) => S4(t9, e9)), staticValues: { none: t8.map((e9) => S4(e9, "0")), full: t8.map((e9) => S4(e9, "calc(infinity * 1px)")) } });
      n6("border-solid", [["--tw-border-style", "solid"], ["border-style", "solid"]]), n6("border-dashed", [["--tw-border-style", "dashed"], ["border-style", "dashed"]]), n6("border-dotted", [["--tw-border-style", "dotted"], ["border-style", "dotted"]]), n6("border-double", [["--tw-border-style", "double"], ["border-style", "double"]]), n6("border-hidden", [["--tw-border-style", "hidden"], ["border-style", "hidden"]]), n6("border-none", [["--tw-border-style", "none"], ["border-style", "none"]]);
      {
        let a6 = function(n7, o6) {
          t7.functional(n7, (t8) => {
            if (!t8.value) {
              if (t8.modifier)
                return;
              let r7 = e7.get(["--default-border-width"]) ?? "1px", n8 = o6.width(r7);
              return n8 ? [i7(), ...n8] : void 0;
            }
            if ("arbitrary" === t8.value.kind) {
              let r7 = t8.value.value;
              switch (t8.value.dataType ?? ce(r7, ["color", "line-width", "length"])) {
                case "line-width":
                case "length": {
                  if (t8.modifier)
                    return;
                  let e8 = o6.width(r7);
                  return e8 ? [i7(), ...e8] : void 0;
                }
                default:
                  return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : o6.color(r7);
              }
            }
            {
              let r7 = _e(t8, e7, ["--border-color", "--color"]);
              if (r7)
                return o6.color(r7);
            }
            {
              if (t8.modifier)
                return;
              let r7 = e7.resolve(t8.value.value, ["--border-width"]);
              if (r7) {
                let e8 = o6.width(r7);
                return e8 ? [i7(), ...e8] : void 0;
              }
              if (Ae(t8.value.value)) {
                let e8 = o6.width(`${t8.value.value}px`);
                return e8 ? [i7(), ...e8] : void 0;
              }
            }
          }), r6(n7, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--border-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), hasDefaultValue: true }, { values: ["0", "2", "4", "8"], valueThemeKeys: ["--border-width"] }]);
        }, i7 = () => T2([Ue("--tw-border-style", "solid")]);
        a6("border", { width: (e8) => [S4("border-style", "var(--tw-border-style)"), S4("border-width", e8)], color: (e8) => [S4("border-color", e8)] }), a6("border-x", { width: (e8) => [S4("border-inline-style", "var(--tw-border-style)"), S4("border-inline-width", e8)], color: (e8) => [S4("border-inline-color", e8)] }), a6("border-y", { width: (e8) => [S4("border-block-style", "var(--tw-border-style)"), S4("border-block-width", e8)], color: (e8) => [S4("border-block-color", e8)] }), a6("border-s", { width: (e8) => [S4("border-inline-start-style", "var(--tw-border-style)"), S4("border-inline-start-width", e8)], color: (e8) => [S4("border-inline-start-color", e8)] }), a6("border-e", { width: (e8) => [S4("border-inline-end-style", "var(--tw-border-style)"), S4("border-inline-end-width", e8)], color: (e8) => [S4("border-inline-end-color", e8)] }), a6("border-t", { width: (e8) => [S4("border-top-style", "var(--tw-border-style)"), S4("border-top-width", e8)], color: (e8) => [S4("border-top-color", e8)] }), a6("border-r", { width: (e8) => [S4("border-right-style", "var(--tw-border-style)"), S4("border-right-width", e8)], color: (e8) => [S4("border-right-color", e8)] }), a6("border-b", { width: (e8) => [S4("border-bottom-style", "var(--tw-border-style)"), S4("border-bottom-width", e8)], color: (e8) => [S4("border-bottom-color", e8)] }), a6("border-l", { width: (e8) => [S4("border-left-style", "var(--tw-border-style)"), S4("border-left-width", e8)], color: (e8) => [S4("border-left-color", e8)] }), o5("divide-x", { defaultValue: e7.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}px` : null, handle: (e8) => [T2([Ue("--tw-divide-x-reverse", "0")]), $4(":where(& > :not(:last-child))", [S4("--tw-sort", "divide-x-width"), i7(), S4("--tw-divide-x-reverse", "0"), S4("border-inline-style", "var(--tw-border-style)"), S4("border-inline-start-width", `calc(${e8} * var(--tw-divide-x-reverse))`), S4("border-inline-end-width", `calc(${e8} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), o5("divide-y", { defaultValue: e7.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}px` : null, handle: (e8) => [T2([Ue("--tw-divide-y-reverse", "0")]), $4(":where(& > :not(:last-child))", [S4("--tw-sort", "divide-y-width"), i7(), S4("--tw-divide-y-reverse", "0"), S4("border-bottom-style", "var(--tw-border-style)"), S4("border-top-style", "var(--tw-border-style)"), S4("border-top-width", `calc(${e8} * var(--tw-divide-y-reverse))`), S4("border-bottom-width", `calc(${e8} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), r6("divide-x", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), r6("divide-y", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), n6("divide-x-reverse", [() => T2([Ue("--tw-divide-x-reverse", "0")]), () => $4(":where(& > :not(:last-child))", [S4("--tw-divide-x-reverse", "1")])]), n6("divide-y-reverse", [() => T2([Ue("--tw-divide-y-reverse", "0")]), () => $4(":where(& > :not(:last-child))", [S4("--tw-divide-y-reverse", "1")])]);
        for (let e8 of ["solid", "dashed", "dotted", "double", "none"])
          n6(`divide-${e8}`, [() => $4(":where(& > :not(:last-child))", [S4("--tw-sort", "divide-style"), S4("--tw-border-style", e8), S4("border-style", e8)])]);
      }
      n6("bg-auto", [["background-size", "auto"]]), n6("bg-cover", [["background-size", "cover"]]), n6("bg-contain", [["background-size", "contain"]]), o5("bg-size", { handle(e8) {
        if (e8)
          return [S4("background-size", e8)];
      } }), n6("bg-fixed", [["background-attachment", "fixed"]]), n6("bg-local", [["background-attachment", "local"]]), n6("bg-scroll", [["background-attachment", "scroll"]]), n6("bg-top", [["background-position", "top"]]), n6("bg-top-left", [["background-position", "left top"]]), n6("bg-top-right", [["background-position", "right top"]]), n6("bg-bottom", [["background-position", "bottom"]]), n6("bg-bottom-left", [["background-position", "left bottom"]]), n6("bg-bottom-right", [["background-position", "right bottom"]]), n6("bg-left", [["background-position", "left"]]), n6("bg-right", [["background-position", "right"]]), n6("bg-center", [["background-position", "center"]]), o5("bg-position", { handle(e8) {
        if (e8)
          return [S4("background-position", e8)];
      } }), n6("bg-repeat", [["background-repeat", "repeat"]]), n6("bg-no-repeat", [["background-repeat", "no-repeat"]]), n6("bg-repeat-x", [["background-repeat", "repeat-x"]]), n6("bg-repeat-y", [["background-repeat", "repeat-y"]]), n6("bg-repeat-round", [["background-repeat", "round"]]), n6("bg-repeat-space", [["background-repeat", "space"]]), n6("bg-none", [["background-image", "none"]]);
      {
        let e8 = function(e9) {
          let t8 = "in oklab";
          if ("named" === e9?.kind)
            switch (e9.value) {
              case "longer":
              case "shorter":
              case "increasing":
              case "decreasing":
                t8 = `in oklch ${e9.value} hue`;
                break;
              default:
                t8 = `in ${e9.value}`;
            }
          else
            "arbitrary" === e9?.kind && (t8 = e9.value);
          return t8;
        }, n7 = function({ negative: t8 }) {
          return (r7) => {
            if (!r7.value)
              return;
            if ("arbitrary" === r7.value.kind) {
              if (r7.modifier)
                return;
              let e9 = r7.value.value;
              return "angle" === (r7.value.dataType ?? ce(e9, ["angle"])) ? (e9 = t8 ? `calc(${e9} * -1)` : `${e9}`, [S4("--tw-gradient-position", e9), S4("background-image", `linear-gradient(var(--tw-gradient-stops,${e9}))`)]) : t8 ? void 0 : [S4("--tw-gradient-position", e9), S4("background-image", `linear-gradient(var(--tw-gradient-stops,${e9}))`)];
            }
            let n8 = r7.value.value;
            if (!t8 && i7.has(n8))
              n8 = i7.get(n8);
            else {
              if (!Ae(n8))
                return;
              n8 = t8 ? `calc(${n8}deg * -1)` : `${n8}deg`;
            }
            let o7 = e8(r7.modifier);
            return [S4("--tw-gradient-position", `${n8}`), z2("@supports (background-image: linear-gradient(in lab, red, red))", [S4("--tw-gradient-position", `${n8} ${o7}`)]), S4("background-image", "linear-gradient(var(--tw-gradient-stops))")];
          };
        }, o6 = function({ negative: t8 }) {
          return (r7) => {
            if ("arbitrary" === r7.value?.kind) {
              if (r7.modifier)
                return;
              let e9 = r7.value.value;
              return [S4("--tw-gradient-position", e9), S4("background-image", `conic-gradient(var(--tw-gradient-stops,${e9}))`)];
            }
            let n8 = e8(r7.modifier);
            if (!r7.value)
              return [S4("--tw-gradient-position", n8), S4("background-image", "conic-gradient(var(--tw-gradient-stops))")];
            let o7 = r7.value.value;
            return Ae(o7) ? (o7 = t8 ? `calc(${o7}deg * -1)` : `${o7}deg`, [S4("--tw-gradient-position", `from ${o7} ${n8}`), S4("background-image", "conic-gradient(var(--tw-gradient-stops))")]) : void 0;
          };
        }, a6 = ["oklab", "oklch", "srgb", "hsl", "longer", "shorter", "increasing", "decreasing"], i7 = /* @__PURE__ */ new Map([["to-t", "to top"], ["to-tr", "to top right"], ["to-r", "to right"], ["to-br", "to bottom right"], ["to-b", "to bottom"], ["to-bl", "to bottom left"], ["to-l", "to left"], ["to-tl", "to top left"]]);
        t7.functional("-bg-linear", n7({ negative: true })), t7.functional("bg-linear", n7({ negative: false })), r6("bg-linear", () => [{ values: [...i7.keys()], modifiers: a6 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: a6 }]), t7.functional("-bg-conic", o6({ negative: true })), t7.functional("bg-conic", o6({ negative: false })), r6("bg-conic", () => [{ hasDefaultValue: true, modifiers: a6 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: a6 }]), t7.functional("bg-radial", (t8) => {
          if (!t8.value)
            return [S4("--tw-gradient-position", e8(t8.modifier)), S4("background-image", "radial-gradient(var(--tw-gradient-stops))")];
          if ("arbitrary" === t8.value.kind) {
            if (t8.modifier)
              return;
            let e9 = t8.value.value;
            return [S4("--tw-gradient-position", e9), S4("background-image", `radial-gradient(var(--tw-gradient-stops,${e9}))`)];
          }
        }), r6("bg-radial", () => [{ hasDefaultValue: true, modifiers: a6 }]);
      }
      t7.functional("bg", (t8) => {
        if (t8.value) {
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            switch (t8.value.dataType ?? ce(r7, ["image", "color", "percentage", "position", "bg-size", "length", "url"])) {
              case "percentage":
              case "position":
                return t8.modifier ? void 0 : [S4("background-position", r7)];
              case "bg-size":
              case "length":
              case "size":
                return t8.modifier ? void 0 : [S4("background-size", r7)];
              case "image":
              case "url":
                return t8.modifier ? void 0 : [S4("background-image", r7)];
              default:
                return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("background-color", r7)];
            }
          }
          {
            let r7 = _e(t8, e7, ["--background-color", "--color"]);
            if (r7)
              return [S4("background-color", r7)];
          }
          {
            if (t8.modifier)
              return;
            let r7 = e7.resolve(t8.value.value, ["--background-image"]);
            if (r7)
              return [S4("background-image", r7)];
          }
        }
      }), r6("bg", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: [], valueThemeKeys: ["--background-image"] }]);
      let h5 = () => T2([Ue("--tw-gradient-position"), Ue("--tw-gradient-from", "#0000", "<color>"), Ue("--tw-gradient-via", "#0000", "<color>"), Ue("--tw-gradient-to", "#0000", "<color>"), Ue("--tw-gradient-stops"), Ue("--tw-gradient-via-stops"), Ue("--tw-gradient-from-position", "0%", "<length-percentage>"), Ue("--tw-gradient-via-position", "50%", "<length-percentage>"), Ue("--tw-gradient-to-position", "100%", "<length-percentage>")]);
      function m5(n7, o6) {
        t7.functional(n7, (t8) => {
          if (t8.value) {
            if ("arbitrary" === t8.value.kind) {
              let r7 = t8.value.value;
              switch (t8.value.dataType ?? ce(r7, ["color", "length", "percentage"])) {
                case "length":
                case "percentage":
                  return t8.modifier ? void 0 : o6.position(r7);
                default:
                  return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : o6.color(r7);
              }
            }
            {
              let r7 = _e(t8, e7, ["--background-color", "--color"]);
              if (r7)
                return o6.color(r7);
            }
            {
              if (t8.modifier)
                return;
              let r7 = e7.resolve(t8.value.value, ["--gradient-color-stop-positions"]);
              if (r7)
                return o6.position(r7);
              if ("%" === t8.value.value[t8.value.value.length - 1] && Ae(t8.value.value.slice(0, -1)))
                return o6.position(t8.value.value);
            }
          }
        }), r6(n7, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: Array.from({ length: 21 }, (e8, t8) => 5 * t8 + "%"), valueThemeKeys: ["--gradient-color-stop-positions"] }]);
      }
      m5("from", { color: (e8) => [h5(), S4("--tw-sort", "--tw-gradient-from"), S4("--tw-gradient-from", e8), S4("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (e8) => [h5(), S4("--tw-gradient-from-position", e8)] }), n6("via-none", [["--tw-gradient-via-stops", "initial"]]), m5("via", { color: (e8) => [h5(), S4("--tw-sort", "--tw-gradient-via"), S4("--tw-gradient-via", e8), S4("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"), S4("--tw-gradient-stops", "var(--tw-gradient-via-stops)")], position: (e8) => [h5(), S4("--tw-gradient-via-position", e8)] }), m5("to", { color: (e8) => [h5(), S4("--tw-sort", "--tw-gradient-to"), S4("--tw-gradient-to", e8), S4("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (e8) => [h5(), S4("--tw-gradient-to-position", e8)] }), n6("mask-none", [["mask-image", "none"]]), t7.functional("mask", (e8) => {
        if (!e8.value || e8.modifier || "arbitrary" !== e8.value.kind)
          return;
        let t8 = e8.value.value;
        switch (e8.value.dataType ?? ce(t8, ["image", "percentage", "position", "bg-size", "length", "url"])) {
          case "percentage":
          case "position":
            return e8.modifier ? void 0 : [S4("mask-position", t8)];
          case "bg-size":
          case "length":
          case "size":
            return [S4("mask-size", t8)];
          default:
            return [S4("mask-image", t8)];
        }
      }), n6("mask-add", [["mask-composite", "add"]]), n6("mask-subtract", [["mask-composite", "subtract"]]), n6("mask-intersect", [["mask-composite", "intersect"]]), n6("mask-exclude", [["mask-composite", "exclude"]]), n6("mask-alpha", [["mask-mode", "alpha"]]), n6("mask-luminance", [["mask-mode", "luminance"]]), n6("mask-match", [["mask-mode", "match-source"]]), n6("mask-type-alpha", [["mask-type", "alpha"]]), n6("mask-type-luminance", [["mask-type", "luminance"]]), n6("mask-auto", [["mask-size", "auto"]]), n6("mask-cover", [["mask-size", "cover"]]), n6("mask-contain", [["mask-size", "contain"]]), o5("mask-size", { handle(e8) {
        if (e8)
          return [S4("mask-size", e8)];
      } }), n6("mask-top", [["mask-position", "top"]]), n6("mask-top-left", [["mask-position", "left top"]]), n6("mask-top-right", [["mask-position", "right top"]]), n6("mask-bottom", [["mask-position", "bottom"]]), n6("mask-bottom-left", [["mask-position", "left bottom"]]), n6("mask-bottom-right", [["mask-position", "right bottom"]]), n6("mask-left", [["mask-position", "left"]]), n6("mask-right", [["mask-position", "right"]]), n6("mask-center", [["mask-position", "center"]]), o5("mask-position", { handle(e8) {
        if (e8)
          return [S4("mask-position", e8)];
      } }), n6("mask-repeat", [["mask-repeat", "repeat"]]), n6("mask-no-repeat", [["mask-repeat", "no-repeat"]]), n6("mask-repeat-x", [["mask-repeat", "repeat-x"]]), n6("mask-repeat-y", [["mask-repeat", "repeat-y"]]), n6("mask-repeat-round", [["mask-repeat", "round"]]), n6("mask-repeat-space", [["mask-repeat", "space"]]), n6("mask-clip-border", [["mask-clip", "border-box"]]), n6("mask-clip-padding", [["mask-clip", "padding-box"]]), n6("mask-clip-content", [["mask-clip", "content-box"]]), n6("mask-clip-fill", [["mask-clip", "fill-box"]]), n6("mask-clip-stroke", [["mask-clip", "stroke-box"]]), n6("mask-clip-view", [["mask-clip", "view-box"]]), n6("mask-no-clip", [["mask-clip", "no-clip"]]), n6("mask-origin-border", [["mask-origin", "border-box"]]), n6("mask-origin-padding", [["mask-origin", "padding-box"]]), n6("mask-origin-content", [["mask-origin", "content-box"]]), n6("mask-origin-fill", [["mask-origin", "fill-box"]]), n6("mask-origin-stroke", [["mask-origin", "stroke-box"]]), n6("mask-origin-view", [["mask-origin", "view-box"]]);
      let g5 = () => T2([Ue("--tw-mask-linear", "linear-gradient(#fff, #fff)"), Ue("--tw-mask-radial", "linear-gradient(#fff, #fff)"), Ue("--tw-mask-conic", "linear-gradient(#fff, #fff)")]);
      function v4(n7, o6) {
        t7.functional(n7, (t8) => {
          if (t8.value) {
            if ("arbitrary" === t8.value.kind) {
              let r7 = t8.value.value;
              switch (t8.value.dataType ?? ce(r7, ["length", "percentage", "color"])) {
                case "color":
                  return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : o6.color(r7);
                case "percentage":
                  return t8.modifier || !Ae(r7.slice(0, -1)) ? void 0 : o6.position(r7);
                default:
                  return t8.modifier ? void 0 : o6.position(r7);
              }
            }
            {
              let r7 = _e(t8, e7, ["--background-color", "--color"]);
              if (r7)
                return o6.color(r7);
            }
            {
              if (t8.modifier)
                return;
              let r7 = ce(t8.value.value, ["number", "percentage"]);
              if (!r7)
                return;
              switch (r7) {
                case "number": {
                  let r8 = e7.resolve(null, ["--spacing"]);
                  return r8 && Se(t8.value.value) ? o6.position(`calc(${r8} * ${t8.value.value})`) : void 0;
                }
                case "percentage":
                  return Ae(t8.value.value.slice(0, -1)) ? o6.position(t8.value.value) : void 0;
                default:
                  return;
              }
            }
          }
        }), r6(n7, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: Array.from({ length: 21 }, (e8, t8) => 5 * t8 + "%"), valueThemeKeys: ["--gradient-color-stop-positions"] }]), r6(n7, () => [{ values: Array.from({ length: 21 }, (e8, t8) => 5 * t8 + "%") }, { values: e7.get(["--spacing"]) ? Oe : [] }, { values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }]);
      }
      let w4 = () => T2([Ue("--tw-mask-left", "linear-gradient(#fff, #fff)"), Ue("--tw-mask-right", "linear-gradient(#fff, #fff)"), Ue("--tw-mask-bottom", "linear-gradient(#fff, #fff)"), Ue("--tw-mask-top", "linear-gradient(#fff, #fff)")]);
      function k3(e8, t8, r7) {
        v4(e8, { color(e9) {
          let n7 = [g5(), w4(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
          for (let o6 of ["top", "right", "bottom", "left"])
            r7[o6] && (n7.push(S4(`--tw-mask-${o6}`, `linear-gradient(to ${o6}, var(--tw-mask-${o6}-from-color) var(--tw-mask-${o6}-from-position), var(--tw-mask-${o6}-to-color) var(--tw-mask-${o6}-to-position))`)), n7.push(T2([Ue(`--tw-mask-${o6}-from-position`, "0%"), Ue(`--tw-mask-${o6}-to-position`, "100%"), Ue(`--tw-mask-${o6}-from-color`, "black"), Ue(`--tw-mask-${o6}-to-color`, "transparent")])), n7.push(S4(`--tw-mask-${o6}-${t8}-color`, e9)));
          return n7;
        }, position(e9) {
          let n7 = [g5(), w4(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
          for (let o6 of ["top", "right", "bottom", "left"])
            r7[o6] && (n7.push(S4(`--tw-mask-${o6}`, `linear-gradient(to ${o6}, var(--tw-mask-${o6}-from-color) var(--tw-mask-${o6}-from-position), var(--tw-mask-${o6}-to-color) var(--tw-mask-${o6}-to-position))`)), n7.push(T2([Ue(`--tw-mask-${o6}-from-position`, "0%"), Ue(`--tw-mask-${o6}-to-position`, "100%"), Ue(`--tw-mask-${o6}-from-color`, "black"), Ue(`--tw-mask-${o6}-to-color`, "transparent")])), n7.push(S4(`--tw-mask-${o6}-${t8}-position`, e9)));
          return n7;
        } });
      }
      k3("mask-x-from", "from", { top: false, right: true, bottom: false, left: true }), k3("mask-x-to", "to", { top: false, right: true, bottom: false, left: true }), k3("mask-y-from", "from", { top: true, right: false, bottom: true, left: false }), k3("mask-y-to", "to", { top: true, right: false, bottom: true, left: false }), k3("mask-t-from", "from", { top: true, right: false, bottom: false, left: false }), k3("mask-t-to", "to", { top: true, right: false, bottom: false, left: false }), k3("mask-r-from", "from", { top: false, right: true, bottom: false, left: false }), k3("mask-r-to", "to", { top: false, right: true, bottom: false, left: false }), k3("mask-b-from", "from", { top: false, right: false, bottom: true, left: false }), k3("mask-b-to", "to", { top: false, right: false, bottom: true, left: false }), k3("mask-l-from", "from", { top: false, right: false, bottom: false, left: true }), k3("mask-l-to", "to", { top: false, right: false, bottom: false, left: true });
      let b5 = () => T2([Ue("--tw-mask-linear-position", "0deg"), Ue("--tw-mask-linear-from-position", "0%"), Ue("--tw-mask-linear-to-position", "100%"), Ue("--tw-mask-linear-from-color", "black"), Ue("--tw-mask-linear-to-color", "transparent")]);
      o5("mask-linear", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue: (e8) => Ae(e8.value) ? `calc(1deg * ${e8.value})` : null, handleNegativeBareValue: (e8) => Ae(e8.value) ? `calc(1deg * -${e8.value})` : null, handle: (e8) => [g5(), b5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"), S4("--tw-mask-linear-position", e8)] }), r6("mask-linear", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), v4("mask-linear-from", { color: (e8) => [g5(), b5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), S4("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), S4("--tw-mask-linear-from-color", e8)], position: (e8) => [g5(), b5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), S4("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), S4("--tw-mask-linear-from-position", e8)] }), v4("mask-linear-to", { color: (e8) => [g5(), b5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), S4("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), S4("--tw-mask-linear-to-color", e8)], position: (e8) => [g5(), b5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), S4("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), S4("--tw-mask-linear-to-position", e8)] });
      let y5 = () => T2([Ue("--tw-mask-radial-from-position", "0%"), Ue("--tw-mask-radial-to-position", "100%"), Ue("--tw-mask-radial-from-color", "black"), Ue("--tw-mask-radial-to-color", "transparent"), Ue("--tw-mask-radial-shape", "ellipse"), Ue("--tw-mask-radial-size", "farthest-corner"), Ue("--tw-mask-radial-position", "center")]);
      n6("mask-circle", [["--tw-mask-radial-shape", "circle"]]), n6("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]), n6("mask-radial-closest-side", [["--tw-mask-radial-size", "closest-side"]]), n6("mask-radial-farthest-side", [["--tw-mask-radial-size", "farthest-side"]]), n6("mask-radial-closest-corner", [["--tw-mask-radial-size", "closest-corner"]]), n6("mask-radial-farthest-corner", [["--tw-mask-radial-size", "farthest-corner"]]), n6("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]), n6("mask-radial-at-top-left", [["--tw-mask-radial-position", "top left"]]), n6("mask-radial-at-top-right", [["--tw-mask-radial-position", "top right"]]), n6("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]), n6("mask-radial-at-bottom-left", [["--tw-mask-radial-position", "bottom left"]]), n6("mask-radial-at-bottom-right", [["--tw-mask-radial-position", "bottom right"]]), n6("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]), n6("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]), n6("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]), o5("mask-radial-at", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e8) => [S4("--tw-mask-radial-position", e8)] }), o5("mask-radial", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e8) => [g5(), y5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"), S4("--tw-mask-radial-size", e8)] }), v4("mask-radial-from", { color: (e8) => [g5(), y5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), S4("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), S4("--tw-mask-radial-from-color", e8)], position: (e8) => [g5(), y5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), S4("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), S4("--tw-mask-radial-from-position", e8)] }), v4("mask-radial-to", { color: (e8) => [g5(), y5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), S4("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), S4("--tw-mask-radial-to-color", e8)], position: (e8) => [g5(), y5(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), S4("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), S4("--tw-mask-radial-to-position", e8)] });
      let x3 = () => T2([Ue("--tw-mask-conic-position", "0deg"), Ue("--tw-mask-conic-from-position", "0%"), Ue("--tw-mask-conic-to-position", "100%"), Ue("--tw-mask-conic-from-color", "black"), Ue("--tw-mask-conic-to-color", "transparent")]);
      o5("mask-conic", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue: (e8) => Ae(e8.value) ? `calc(1deg * ${e8.value})` : null, handleNegativeBareValue: (e8) => Ae(e8.value) ? `calc(1deg * -${e8.value})` : null, handle: (e8) => [g5(), x3(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"), S4("--tw-mask-conic-position", e8)] }), r6("mask-conic", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), v4("mask-conic-from", { color: (e8) => [g5(), x3(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), S4("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), S4("--tw-mask-conic-from-color", e8)], position: (e8) => [g5(), x3(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), S4("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), S4("--tw-mask-conic-from-position", e8)] }), v4("mask-conic-to", { color: (e8) => [g5(), x3(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), S4("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), S4("--tw-mask-conic-to-color", e8)], position: (e8) => [g5(), x3(), S4("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), S4("mask-composite", "intersect"), S4("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), S4("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), S4("--tw-mask-conic-to-position", e8)] }), n6("box-decoration-slice", [["-webkit-box-decoration-break", "slice"], ["box-decoration-break", "slice"]]), n6("box-decoration-clone", [["-webkit-box-decoration-break", "clone"], ["box-decoration-break", "clone"]]), n6("bg-clip-text", [["background-clip", "text"]]), n6("bg-clip-border", [["background-clip", "border-box"]]), n6("bg-clip-padding", [["background-clip", "padding-box"]]), n6("bg-clip-content", [["background-clip", "content-box"]]), n6("bg-origin-border", [["background-origin", "border-box"]]), n6("bg-origin-padding", [["background-origin", "padding-box"]]), n6("bg-origin-content", [["background-origin", "content-box"]]);
      for (let e8 of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"])
        n6(`bg-blend-${e8}`, [["background-blend-mode", e8]]), n6(`mix-blend-${e8}`, [["mix-blend-mode", e8]]);
      n6("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]), n6("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]), n6("fill-none", [["fill", "none"]]), t7.functional("fill", (t8) => {
        if (!t8.value)
          return;
        if ("arbitrary" === t8.value.kind) {
          let r8 = De(t8.value.value, t8.modifier, e7);
          return null === r8 ? void 0 : [S4("fill", r8)];
        }
        let r7 = _e(t8, e7, ["--fill", "--color"]);
        return r7 ? [S4("fill", r7)] : void 0;
      }), r6("fill", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--fill", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }]), n6("stroke-none", [["stroke", "none"]]), t7.functional("stroke", (t8) => {
        if (t8.value) {
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            switch (t8.value.dataType ?? ce(r7, ["color", "number", "length", "percentage"])) {
              case "number":
              case "length":
              case "percentage":
                return t8.modifier ? void 0 : [S4("stroke-width", r7)];
              default:
                return r7 = De(t8.value.value, t8.modifier, e7), null === r7 ? void 0 : [S4("stroke", r7)];
            }
          }
          {
            let r7 = _e(t8, e7, ["--stroke", "--color"]);
            if (r7)
              return [S4("stroke", r7)];
          }
          {
            let r7 = e7.resolve(t8.value.value, ["--stroke-width"]);
            if (r7)
              return [S4("stroke-width", r7)];
            if (Ae(t8.value.value))
              return [S4("stroke-width", t8.value.value)];
          }
        }
      }), r6("stroke", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--stroke", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] }]), n6("object-contain", [["object-fit", "contain"]]), n6("object-cover", [["object-fit", "cover"]]), n6("object-fill", [["object-fit", "fill"]]), n6("object-none", [["object-fit", "none"]]), n6("object-scale-down", [["object-fit", "scale-down"]]), o5("object", { themeKeys: ["--object-position"], handle: (e8) => [S4("object-position", e8)], staticValues: { top: [S4("object-position", "top")], "top-left": [S4("object-position", "left top")], "top-right": [S4("object-position", "right top")], bottom: [S4("object-position", "bottom")], "bottom-left": [S4("object-position", "left bottom")], "bottom-right": [S4("object-position", "right bottom")], left: [S4("object-position", "left")], right: [S4("object-position", "right")], center: [S4("object-position", "center")] } });
      for (let [e8, t8] of [["p", "padding"], ["px", "padding-inline"], ["py", "padding-block"], ["ps", "padding-inline-start"], ["pe", "padding-inline-end"], ["pt", "padding-top"], ["pr", "padding-right"], ["pb", "padding-bottom"], ["pl", "padding-left"]])
        i6(e8, ["--padding", "--spacing"], (e9) => [S4(t8, e9)]);
      n6("text-left", [["text-align", "left"]]), n6("text-center", [["text-align", "center"]]), n6("text-right", [["text-align", "right"]]), n6("text-justify", [["text-align", "justify"]]), n6("text-start", [["text-align", "start"]]), n6("text-end", [["text-align", "end"]]), i6("indent", ["--text-indent", "--spacing"], (e8) => [S4("text-indent", e8)], { supportsNegative: true }), n6("align-baseline", [["vertical-align", "baseline"]]), n6("align-top", [["vertical-align", "top"]]), n6("align-middle", [["vertical-align", "middle"]]), n6("align-bottom", [["vertical-align", "bottom"]]), n6("align-text-top", [["vertical-align", "text-top"]]), n6("align-text-bottom", [["vertical-align", "text-bottom"]]), n6("align-sub", [["vertical-align", "sub"]]), n6("align-super", [["vertical-align", "super"]]), o5("align", { themeKeys: [], handle: (e8) => [S4("vertical-align", e8)] }), t7.functional("font", (t8) => {
        if (t8.value && !t8.modifier) {
          if ("arbitrary" === t8.value.kind) {
            let e8 = t8.value.value;
            switch (t8.value.dataType ?? ce(e8, ["number", "generic-name", "family-name"])) {
              case "generic-name":
              case "family-name":
                return [S4("font-family", e8)];
              default:
                return [T2([Ue("--tw-font-weight")]), S4("--tw-font-weight", e8), S4("font-weight", e8)];
            }
          }
          {
            let r7 = e7.resolveWith(t8.value.value, ["--font"], ["--font-feature-settings", "--font-variation-settings"]);
            if (r7) {
              let [e8, t9 = {}] = r7;
              return [S4("font-family", e8), S4("font-feature-settings", t9["--font-feature-settings"]), S4("font-variation-settings", t9["--font-variation-settings"])];
            }
          }
          {
            let r7 = e7.resolve(t8.value.value, ["--font-weight"]);
            if (r7)
              return [T2([Ue("--tw-font-weight")]), S4("--tw-font-weight", r7), S4("font-weight", r7)];
          }
        }
      }), r6("font", () => [{ values: [], valueThemeKeys: ["--font"] }, { values: [], valueThemeKeys: ["--font-weight"] }]), n6("uppercase", [["text-transform", "uppercase"]]), n6("lowercase", [["text-transform", "lowercase"]]), n6("capitalize", [["text-transform", "capitalize"]]), n6("normal-case", [["text-transform", "none"]]), n6("italic", [["font-style", "italic"]]), n6("not-italic", [["font-style", "normal"]]), n6("underline", [["text-decoration-line", "underline"]]), n6("overline", [["text-decoration-line", "overline"]]), n6("line-through", [["text-decoration-line", "line-through"]]), n6("no-underline", [["text-decoration-line", "none"]]), n6("font-stretch-normal", [["font-stretch", "normal"]]), n6("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]), n6("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]), n6("font-stretch-condensed", [["font-stretch", "condensed"]]), n6("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]), n6("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]), n6("font-stretch-expanded", [["font-stretch", "expanded"]]), n6("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]), n6("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]), o5("font-stretch", { handleBareValue: ({ value: e8 }) => {
        if (!e8.endsWith("%"))
          return null;
        let t8 = Number(e8.slice(0, -1));
        return !Ae(t8) || Number.isNaN(t8) || t8 < 50 || t8 > 200 ? null : e8;
      }, handle: (e8) => [S4("font-stretch", e8)] }), r6("font-stretch", () => [{ values: ["50%", "75%", "90%", "95%", "100%", "105%", "110%", "125%", "150%", "200%"] }]), a5("placeholder", { themeKeys: ["--background-color", "--color"], handle: (e8) => [$4("&::placeholder", [S4("--tw-sort", "placeholder-color"), S4("color", e8)])] }), n6("decoration-solid", [["text-decoration-style", "solid"]]), n6("decoration-double", [["text-decoration-style", "double"]]), n6("decoration-dotted", [["text-decoration-style", "dotted"]]), n6("decoration-dashed", [["text-decoration-style", "dashed"]]), n6("decoration-wavy", [["text-decoration-style", "wavy"]]), n6("decoration-auto", [["text-decoration-thickness", "auto"]]), n6("decoration-from-font", [["text-decoration-thickness", "from-font"]]), t7.functional("decoration", (t8) => {
        if (t8.value) {
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            switch (t8.value.dataType ?? ce(r7, ["color", "length", "percentage"])) {
              case "length":
              case "percentage":
                return t8.modifier ? void 0 : [S4("text-decoration-thickness", r7)];
              default:
                return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("text-decoration-color", r7)];
            }
          }
          {
            let r7 = e7.resolve(t8.value.value, ["--text-decoration-thickness"]);
            if (r7)
              return t8.modifier ? void 0 : [S4("text-decoration-thickness", r7)];
            if (Ae(t8.value.value))
              return t8.modifier ? void 0 : [S4("text-decoration-thickness", `${t8.value.value}px`)];
          }
          {
            let r7 = _e(t8, e7, ["--text-decoration-color", "--color"]);
            if (r7)
              return [S4("text-decoration-color", r7)];
          }
        }
      }), r6("decoration", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-decoration-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["0", "1", "2"], valueThemeKeys: ["--text-decoration-thickness"] }]), o5("animate", { themeKeys: ["--animate"], handle: (e8) => [S4("animation", e8)], staticValues: { none: [S4("animation", "none")] } });
      {
        let a6 = ["var(--tw-blur,)", "var(--tw-brightness,)", "var(--tw-contrast,)", "var(--tw-grayscale,)", "var(--tw-hue-rotate,)", "var(--tw-invert,)", "var(--tw-saturate,)", "var(--tw-sepia,)", "var(--tw-drop-shadow,)"].join(" "), i7 = ["var(--tw-backdrop-blur,)", "var(--tw-backdrop-brightness,)", "var(--tw-backdrop-contrast,)", "var(--tw-backdrop-grayscale,)", "var(--tw-backdrop-hue-rotate,)", "var(--tw-backdrop-invert,)", "var(--tw-backdrop-opacity,)", "var(--tw-backdrop-saturate,)", "var(--tw-backdrop-sepia,)"].join(" "), l7 = () => T2([Ue("--tw-blur"), Ue("--tw-brightness"), Ue("--tw-contrast"), Ue("--tw-grayscale"), Ue("--tw-hue-rotate"), Ue("--tw-invert"), Ue("--tw-opacity"), Ue("--tw-saturate"), Ue("--tw-sepia"), Ue("--tw-drop-shadow"), Ue("--tw-drop-shadow-color"), Ue("--tw-drop-shadow-alpha", "100%", "<percentage>"), Ue("--tw-drop-shadow-size")]), s7 = () => T2([Ue("--tw-backdrop-blur"), Ue("--tw-backdrop-brightness"), Ue("--tw-backdrop-contrast"), Ue("--tw-backdrop-grayscale"), Ue("--tw-backdrop-hue-rotate"), Ue("--tw-backdrop-invert"), Ue("--tw-backdrop-opacity"), Ue("--tw-backdrop-saturate"), Ue("--tw-backdrop-sepia")]);
        t7.functional("filter", (e8) => {
          if (!e8.modifier) {
            if (null === e8.value)
              return [l7(), S4("filter", a6)];
            if ("arbitrary" === e8.value.kind)
              return [S4("filter", e8.value.value)];
            if ("none" === e8.value.value)
              return [S4("filter", "none")];
          }
        }), t7.functional("backdrop-filter", (e8) => {
          if (!e8.modifier) {
            if (null === e8.value)
              return [s7(), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)];
            if ("arbitrary" === e8.value.kind)
              return [S4("-webkit-backdrop-filter", e8.value.value), S4("backdrop-filter", e8.value.value)];
            if ("none" === e8.value.value)
              return [S4("-webkit-backdrop-filter", "none"), S4("backdrop-filter", "none")];
          }
        }), o5("blur", { themeKeys: ["--blur"], handle: (e8) => [l7(), S4("--tw-blur", `blur(${e8})`), S4("filter", a6)], staticValues: { none: [l7(), S4("--tw-blur", " "), S4("filter", a6)] } }), o5("backdrop-blur", { themeKeys: ["--backdrop-blur", "--blur"], handle: (e8) => [s7(), S4("--tw-backdrop-blur", `blur(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)], staticValues: { none: [s7(), S4("--tw-backdrop-blur", " "), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] } }), o5("brightness", { themeKeys: ["--brightness"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, handle: (e8) => [l7(), S4("--tw-brightness", `brightness(${e8})`), S4("filter", a6)] }), o5("backdrop-brightness", { themeKeys: ["--backdrop-brightness", "--brightness"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, handle: (e8) => [s7(), S4("--tw-backdrop-brightness", `brightness(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--brightness"] }]), r6("backdrop-brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--backdrop-brightness", "--brightness"] }]), o5("contrast", { themeKeys: ["--contrast"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, handle: (e8) => [l7(), S4("--tw-contrast", `contrast(${e8})`), S4("filter", a6)] }), o5("backdrop-contrast", { themeKeys: ["--backdrop-contrast", "--contrast"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, handle: (e8) => [s7(), S4("--tw-backdrop-contrast", `contrast(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--contrast"] }]), r6("backdrop-contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--backdrop-contrast", "--contrast"] }]), o5("grayscale", { themeKeys: ["--grayscale"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, defaultValue: "100%", handle: (e8) => [l7(), S4("--tw-grayscale", `grayscale(${e8})`), S4("filter", a6)] }), o5("backdrop-grayscale", { themeKeys: ["--backdrop-grayscale", "--grayscale"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, defaultValue: "100%", handle: (e8) => [s7(), S4("--tw-backdrop-grayscale", `grayscale(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--grayscale"], hasDefaultValue: true }]), r6("backdrop-grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-grayscale", "--grayscale"], hasDefaultValue: true }]), o5("hue-rotate", { supportsNegative: true, themeKeys: ["--hue-rotate"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}deg` : null, handle: (e8) => [l7(), S4("--tw-hue-rotate", `hue-rotate(${e8})`), S4("filter", a6)] }), o5("backdrop-hue-rotate", { supportsNegative: true, themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}deg` : null, handle: (e8) => [s7(), S4("--tw-backdrop-hue-rotate", `hue-rotate(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--hue-rotate"] }]), r6("backdrop-hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"] }]), o5("invert", { themeKeys: ["--invert"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, defaultValue: "100%", handle: (e8) => [l7(), S4("--tw-invert", `invert(${e8})`), S4("filter", a6)] }), o5("backdrop-invert", { themeKeys: ["--backdrop-invert", "--invert"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, defaultValue: "100%", handle: (e8) => [s7(), S4("--tw-backdrop-invert", `invert(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--invert"], hasDefaultValue: true }]), r6("backdrop-invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-invert", "--invert"], hasDefaultValue: true }]), o5("saturate", { themeKeys: ["--saturate"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, handle: (e8) => [l7(), S4("--tw-saturate", `saturate(${e8})`), S4("filter", a6)] }), o5("backdrop-saturate", { themeKeys: ["--backdrop-saturate", "--saturate"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, handle: (e8) => [s7(), S4("--tw-backdrop-saturate", `saturate(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--saturate"] }]), r6("backdrop-saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--backdrop-saturate", "--saturate"] }]), o5("sepia", { themeKeys: ["--sepia"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, defaultValue: "100%", handle: (e8) => [l7(), S4("--tw-sepia", `sepia(${e8})`), S4("filter", a6)] }), o5("backdrop-sepia", { themeKeys: ["--backdrop-sepia", "--sepia"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}%` : null, defaultValue: "100%", handle: (e8) => [s7(), S4("--tw-backdrop-sepia", `sepia(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--sepia"], hasDefaultValue: true }]), r6("backdrop-sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--backdrop-sepia", "--sepia"], hasDefaultValue: true }]), n6("drop-shadow-none", [l7, ["--tw-drop-shadow", " "], ["filter", a6]]), t7.functional("drop-shadow", (t8) => {
          let r7;
          if (t8.modifier && ("arbitrary" === t8.modifier.kind ? r7 = t8.modifier.value : Ae(t8.modifier.value) && (r7 = `${t8.modifier.value}%`)), !t8.value) {
            let t9 = e7.get(["--drop-shadow"]), n7 = e7.resolve(null, ["--drop-shadow"]);
            return null === t9 || null === n7 ? void 0 : [l7(), S4("--tw-drop-shadow-alpha", r7), ...Pe("--tw-drop-shadow-size", t9, r7, (e8) => `var(--tw-drop-shadow-color, ${e8})`), S4("--tw-drop-shadow", q2(n7, ",").map((e8) => `drop-shadow(${e8})`).join(" ")), S4("filter", a6)];
          }
          if ("arbitrary" === t8.value.kind) {
            let n7 = t8.value.value;
            return "color" === (t8.value.dataType ?? ce(n7, ["color"])) ? (n7 = De(n7, t8.modifier, e7), null === n7 ? void 0 : [l7(), S4("--tw-drop-shadow-color", We(n7, "var(--tw-drop-shadow-alpha)")), S4("--tw-drop-shadow", "var(--tw-drop-shadow-size)")]) : t8.modifier && !r7 ? void 0 : [l7(), S4("--tw-drop-shadow-alpha", r7), ...Pe("--tw-drop-shadow-size", n7, r7, (e8) => `var(--tw-drop-shadow-color, ${e8})`), S4("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), S4("filter", a6)];
          }
          {
            let n7 = e7.get([`--drop-shadow-${t8.value.value}`]), o6 = e7.resolve(t8.value.value, ["--drop-shadow"]);
            if (n7 && o6)
              return t8.modifier && !r7 ? void 0 : r7 ? [l7(), S4("--tw-drop-shadow-alpha", r7), ...Pe("--tw-drop-shadow-size", n7, r7, (e8) => `var(--tw-drop-shadow-color, ${e8})`), S4("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), S4("filter", a6)] : [l7(), S4("--tw-drop-shadow-alpha", r7), ...Pe("--tw-drop-shadow-size", n7, r7, (e8) => `var(--tw-drop-shadow-color, ${e8})`), S4("--tw-drop-shadow", q2(o6, ",").map((e8) => `drop-shadow(${e8})`).join(" ")), S4("filter", a6)];
          }
          {
            let r8 = _e(t8, e7, ["--drop-shadow-color", "--color"]);
            if (r8)
              return "inherit" === r8 ? [l7(), S4("--tw-drop-shadow-color", "inherit"), S4("--tw-drop-shadow", "var(--tw-drop-shadow-size)")] : [l7(), S4("--tw-drop-shadow-color", We(r8, "var(--tw-drop-shadow-alpha)")), S4("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
          }
        }), r6("drop-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--drop-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { valueThemeKeys: ["--drop-shadow"] }]), o5("backdrop-opacity", { themeKeys: ["--backdrop-opacity", "--opacity"], handleBareValue: ({ value: e8 }) => Ce(e8) ? `${e8}%` : null, handle: (e8) => [s7(), S4("--tw-backdrop-opacity", `opacity(${e8})`), S4("-webkit-backdrop-filter", i7), S4("backdrop-filter", i7)] }), r6("backdrop-opacity", () => [{ values: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), valueThemeKeys: ["--backdrop-opacity", "--opacity"] }]);
      }
      {
        let a6 = `var(--tw-ease, ${e7.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`, i7 = `var(--tw-duration, ${e7.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
        o5("transition", { defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events", themeKeys: ["--transition-property"], handle: (e8) => [S4("transition-property", e8), S4("transition-timing-function", a6), S4("transition-duration", i7)], staticValues: { none: [S4("transition-property", "none")], all: [S4("transition-property", "all"), S4("transition-timing-function", a6), S4("transition-duration", i7)], colors: [S4("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"), S4("transition-timing-function", a6), S4("transition-duration", i7)], opacity: [S4("transition-property", "opacity"), S4("transition-timing-function", a6), S4("transition-duration", i7)], shadow: [S4("transition-property", "box-shadow"), S4("transition-timing-function", a6), S4("transition-duration", i7)], transform: [S4("transition-property", "transform, translate, scale, rotate"), S4("transition-timing-function", a6), S4("transition-duration", i7)] } }), n6("transition-discrete", [["transition-behavior", "allow-discrete"]]), n6("transition-normal", [["transition-behavior", "normal"]]), o5("delay", { handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}ms` : null, themeKeys: ["--transition-delay"], handle: (e8) => [S4("transition-delay", e8)] });
        {
          let r7 = () => T2([Ue("--tw-duration")]);
          n6("duration-initial", [r7, ["--tw-duration", "initial"]]), t7.functional("duration", (t8) => {
            if (t8.modifier || !t8.value)
              return;
            let n7 = null;
            return "arbitrary" === t8.value.kind ? n7 = t8.value.value : (n7 = e7.resolve(t8.value.fraction ?? t8.value.value, ["--transition-duration"]), null === n7 && Ae(t8.value.value) && (n7 = `${t8.value.value}ms`)), null !== n7 ? [r7(), S4("--tw-duration", n7), S4("transition-duration", n7)] : void 0;
          });
        }
        r6("delay", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-delay"] }]), r6("duration", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-duration"] }]);
      }
      {
        let e8 = () => T2([Ue("--tw-ease")]);
        o5("ease", { themeKeys: ["--ease"], handle: (t8) => [e8(), S4("--tw-ease", t8), S4("transition-timing-function", t8)], staticValues: { initial: [e8(), S4("--tw-ease", "initial")], linear: [e8(), S4("--tw-ease", "linear"), S4("transition-timing-function", "linear")] } });
      }
      n6("will-change-auto", [["will-change", "auto"]]), n6("will-change-scroll", [["will-change", "scroll-position"]]), n6("will-change-contents", [["will-change", "contents"]]), n6("will-change-transform", [["will-change", "transform"]]), o5("will-change", { themeKeys: [], handle: (e8) => [S4("will-change", e8)] }), n6("content-none", [["--tw-content", "none"], ["content", "none"]]), o5("content", { themeKeys: [], handle: (e8) => [T2([Ue("--tw-content", '""')]), S4("--tw-content", e8), S4("content", "var(--tw-content)")] });
      {
        let e8 = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", t8 = () => T2([Ue("--tw-contain-size"), Ue("--tw-contain-layout"), Ue("--tw-contain-paint"), Ue("--tw-contain-style")]);
        n6("contain-none", [["contain", "none"]]), n6("contain-content", [["contain", "content"]]), n6("contain-strict", [["contain", "strict"]]), n6("contain-size", [t8, ["--tw-contain-size", "size"], ["contain", e8]]), n6("contain-inline-size", [t8, ["--tw-contain-size", "inline-size"], ["contain", e8]]), n6("contain-layout", [t8, ["--tw-contain-layout", "layout"], ["contain", e8]]), n6("contain-paint", [t8, ["--tw-contain-paint", "paint"], ["contain", e8]]), n6("contain-style", [t8, ["--tw-contain-style", "style"], ["contain", e8]]), o5("contain", { themeKeys: [], handle: (e9) => [S4("contain", e9)] });
      }
      n6("forced-color-adjust-none", [["forced-color-adjust", "none"]]), n6("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]), i6("leading", ["--leading", "--spacing"], (e8) => [T2([Ue("--tw-leading")]), S4("--tw-leading", e8), S4("line-height", e8)], { staticValues: { none: [T2([Ue("--tw-leading")]), S4("--tw-leading", "1"), S4("line-height", "1")] } }), o5("tracking", { supportsNegative: true, themeKeys: ["--tracking"], handle: (e8) => [T2([Ue("--tw-tracking")]), S4("--tw-tracking", e8), S4("letter-spacing", e8)] }), n6("antialiased", [["-webkit-font-smoothing", "antialiased"], ["-moz-osx-font-smoothing", "grayscale"]]), n6("subpixel-antialiased", [["-webkit-font-smoothing", "auto"], ["-moz-osx-font-smoothing", "auto"]]);
      {
        let e8 = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", t8 = () => T2([Ue("--tw-ordinal"), Ue("--tw-slashed-zero"), Ue("--tw-numeric-figure"), Ue("--tw-numeric-spacing"), Ue("--tw-numeric-fraction")]);
        n6("normal-nums", [["font-variant-numeric", "normal"]]), n6("ordinal", [t8, ["--tw-ordinal", "ordinal"], ["font-variant-numeric", e8]]), n6("slashed-zero", [t8, ["--tw-slashed-zero", "slashed-zero"], ["font-variant-numeric", e8]]), n6("lining-nums", [t8, ["--tw-numeric-figure", "lining-nums"], ["font-variant-numeric", e8]]), n6("oldstyle-nums", [t8, ["--tw-numeric-figure", "oldstyle-nums"], ["font-variant-numeric", e8]]), n6("proportional-nums", [t8, ["--tw-numeric-spacing", "proportional-nums"], ["font-variant-numeric", e8]]), n6("tabular-nums", [t8, ["--tw-numeric-spacing", "tabular-nums"], ["font-variant-numeric", e8]]), n6("diagonal-fractions", [t8, ["--tw-numeric-fraction", "diagonal-fractions"], ["font-variant-numeric", e8]]), n6("stacked-fractions", [t8, ["--tw-numeric-fraction", "stacked-fractions"], ["font-variant-numeric", e8]]);
      }
      {
        let a6 = () => T2([Ue("--tw-outline-style", "solid")]);
        t7.static("outline-hidden", () => [S4("--tw-outline-style", "none"), S4("outline-style", "none"), A2("@media", "(forced-colors: active)", [S4("outline", "2px solid transparent"), S4("outline-offset", "2px")])]), n6("outline-none", [["--tw-outline-style", "none"], ["outline-style", "none"]]), n6("outline-solid", [["--tw-outline-style", "solid"], ["outline-style", "solid"]]), n6("outline-dashed", [["--tw-outline-style", "dashed"], ["outline-style", "dashed"]]), n6("outline-dotted", [["--tw-outline-style", "dotted"], ["outline-style", "dotted"]]), n6("outline-double", [["--tw-outline-style", "double"], ["outline-style", "double"]]), t7.functional("outline", (t8) => {
          if (null === t8.value) {
            if (t8.modifier)
              return;
            let r7 = e7.get(["--default-outline-width"]) ?? "1px";
            return [a6(), S4("outline-style", "var(--tw-outline-style)"), S4("outline-width", r7)];
          }
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            switch (t8.value.dataType ?? ce(r7, ["color", "length", "number", "percentage"])) {
              case "length":
              case "number":
              case "percentage":
                return t8.modifier ? void 0 : [a6(), S4("outline-style", "var(--tw-outline-style)"), S4("outline-width", r7)];
              default:
                return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("outline-color", r7)];
            }
          }
          {
            let r7 = _e(t8, e7, ["--outline-color", "--color"]);
            if (r7)
              return [S4("outline-color", r7)];
          }
          {
            if (t8.modifier)
              return;
            let r7 = e7.resolve(t8.value.value, ["--outline-width"]);
            if (r7)
              return [a6(), S4("outline-style", "var(--tw-outline-style)"), S4("outline-width", r7)];
            if (Ae(t8.value.value))
              return [a6(), S4("outline-style", "var(--tw-outline-style)"), S4("outline-width", `${t8.value.value}px`)];
          }
        }), r6("outline", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--outline-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), hasDefaultValue: true }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-width"] }]), o5("outline-offset", { supportsNegative: true, themeKeys: ["--outline-offset"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}px` : null, handle: (e8) => [S4("outline-offset", e8)] }), r6("outline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-offset"] }]);
      }
      o5("opacity", { themeKeys: ["--opacity"], handleBareValue: ({ value: e8 }) => Ce(e8) ? `${e8}%` : null, handle: (e8) => [S4("opacity", e8)] }), r6("opacity", () => [{ values: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), valueThemeKeys: ["--opacity"] }]), o5("underline-offset", { supportsNegative: true, themeKeys: ["--text-underline-offset"], handleBareValue: ({ value: e8 }) => Ae(e8) ? `${e8}px` : null, handle: (e8) => [S4("text-underline-offset", e8)], staticValues: { auto: [S4("text-underline-offset", "auto")] } }), r6("underline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--text-underline-offset"] }]), t7.functional("text", (t8) => {
        if (t8.value) {
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            switch (t8.value.dataType ?? ce(r7, ["color", "length", "percentage", "absolute-size", "relative-size"])) {
              case "size":
              case "length":
              case "percentage":
              case "absolute-size":
              case "relative-size":
                if (t8.modifier) {
                  let n7 = "arbitrary" === t8.modifier.kind ? t8.modifier.value : e7.resolve(t8.modifier.value, ["--leading"]);
                  if (!n7 && Se(t8.modifier.value)) {
                    let r8 = e7.resolve(null, ["--spacing"]);
                    if (!r8)
                      return null;
                    n7 = `calc(${r8} * ${t8.modifier.value})`;
                  }
                  return !n7 && "none" === t8.modifier.value && (n7 = "1"), n7 ? [S4("font-size", r7), S4("line-height", n7)] : null;
                }
                return [S4("font-size", r7)];
              default:
                return r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("color", r7)];
            }
          }
          {
            let r7 = _e(t8, e7, ["--text-color", "--color"]);
            if (r7)
              return [S4("color", r7)];
          }
          {
            let r7 = e7.resolveWith(t8.value.value, ["--text"], ["--line-height", "--letter-spacing", "--font-weight"]);
            if (r7) {
              let [n7, o6 = {}] = Array.isArray(r7) ? r7 : [r7];
              if (t8.modifier) {
                let r8 = "arbitrary" === t8.modifier.kind ? t8.modifier.value : e7.resolve(t8.modifier.value, ["--leading"]);
                if (!r8 && Se(t8.modifier.value)) {
                  let n8 = e7.resolve(null, ["--spacing"]);
                  if (!n8)
                    return null;
                  r8 = `calc(${n8} * ${t8.modifier.value})`;
                }
                if (!r8 && "none" === t8.modifier.value && (r8 = "1"), !r8)
                  return null;
                let o7 = [S4("font-size", n7)];
                return r8 && o7.push(S4("line-height", r8)), o7;
              }
              return "string" == typeof o6 ? [S4("font-size", n7), S4("line-height", o6)] : [S4("font-size", n7), S4("line-height", o6["--line-height"] ? `var(--tw-leading, ${o6["--line-height"]})` : void 0), S4("letter-spacing", o6["--letter-spacing"] ? `var(--tw-tracking, ${o6["--letter-spacing"]})` : void 0), S4("font-weight", o6["--font-weight"] ? `var(--tw-font-weight, ${o6["--font-weight"]})` : void 0)];
            }
          }
        }
      }), r6("text", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: [], valueThemeKeys: ["--text"], modifiers: [], modifierThemeKeys: ["--leading"] }]);
      let C3 = () => T2([Ue("--tw-text-shadow-color"), Ue("--tw-text-shadow-alpha", "100%", "<percentage>")]);
      n6("text-shadow-initial", [C3, ["--tw-text-shadow-color", "initial"]]), t7.functional("text-shadow", (t8) => {
        let r7;
        if (t8.modifier && ("arbitrary" === t8.modifier.kind ? r7 = t8.modifier.value : Ae(t8.modifier.value) && (r7 = `${t8.modifier.value}%`)), !t8.value) {
          let t9 = e7.get(["--text-shadow"]);
          return null === t9 ? void 0 : [C3(), S4("--tw-text-shadow-alpha", r7), ...Ie("text-shadow", t9, r7, (e8) => `var(--tw-text-shadow-color, ${e8})`)];
        }
        if ("arbitrary" === t8.value.kind) {
          let n7 = t8.value.value;
          return "color" === (t8.value.dataType ?? ce(n7, ["color"])) ? (n7 = De(n7, t8.modifier, e7), null === n7 ? void 0 : [C3(), S4("--tw-text-shadow-color", We(n7, "var(--tw-text-shadow-alpha)"))]) : [C3(), S4("--tw-text-shadow-alpha", r7), ...Ie("text-shadow", n7, r7, (e8) => `var(--tw-text-shadow-color, ${e8})`)];
        }
        switch (t8.value.value) {
          case "none":
            return t8.modifier ? void 0 : [C3(), S4("text-shadow", "none")];
          case "inherit":
            return t8.modifier ? void 0 : [C3(), S4("--tw-text-shadow-color", "inherit")];
        }
        {
          let n7 = e7.get([`--text-shadow-${t8.value.value}`]);
          if (n7)
            return [C3(), S4("--tw-text-shadow-alpha", r7), ...Ie("text-shadow", n7, r7, (e8) => `var(--tw-text-shadow-color, ${e8})`)];
        }
        {
          let r8 = _e(t8, e7, ["--text-shadow-color", "--color"]);
          if (r8)
            return [C3(), S4("--tw-text-shadow-color", We(r8, "var(--tw-text-shadow-alpha)"))];
        }
      }), r6("text-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["none"] }, { valueThemeKeys: ["--text-shadow"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), hasDefaultValue: null !== e7.get(["--text-shadow"]) }]);
      {
        let o6 = function(e8) {
          return `var(--tw-ring-inset,) 0 0 0 calc(${e8} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${c6})`;
        }, a6 = function(e8) {
          return `inset 0 0 0 ${e8} var(--tw-inset-ring-color, currentcolor)`;
        }, i7 = ["var(--tw-inset-shadow)", "var(--tw-inset-ring-shadow)", "var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow)"].join(", "), l7 = "0 0 #0000", s7 = () => T2([Ue("--tw-shadow", l7), Ue("--tw-shadow-color"), Ue("--tw-shadow-alpha", "100%", "<percentage>"), Ue("--tw-inset-shadow", l7), Ue("--tw-inset-shadow-color"), Ue("--tw-inset-shadow-alpha", "100%", "<percentage>"), Ue("--tw-ring-color"), Ue("--tw-ring-shadow", l7), Ue("--tw-inset-ring-color"), Ue("--tw-inset-ring-shadow", l7), Ue("--tw-ring-inset"), Ue("--tw-ring-offset-width", "0px", "<length>"), Ue("--tw-ring-offset-color", "#fff"), Ue("--tw-ring-offset-shadow", l7)]);
        n6("shadow-initial", [s7, ["--tw-shadow-color", "initial"]]), t7.functional("shadow", (t8) => {
          let r7;
          if (t8.modifier && ("arbitrary" === t8.modifier.kind ? r7 = t8.modifier.value : Ae(t8.modifier.value) && (r7 = `${t8.modifier.value}%`)), !t8.value) {
            let t9 = e7.get(["--shadow"]);
            return null === t9 ? void 0 : [s7(), S4("--tw-shadow-alpha", r7), ...Ie("--tw-shadow", t9, r7, (e8) => `var(--tw-shadow-color, ${e8})`), S4("box-shadow", i7)];
          }
          if ("arbitrary" === t8.value.kind) {
            let n7 = t8.value.value;
            return "color" === (t8.value.dataType ?? ce(n7, ["color"])) ? (n7 = De(n7, t8.modifier, e7), null === n7 ? void 0 : [s7(), S4("--tw-shadow-color", We(n7, "var(--tw-shadow-alpha)"))]) : [s7(), S4("--tw-shadow-alpha", r7), ...Ie("--tw-shadow", n7, r7, (e8) => `var(--tw-shadow-color, ${e8})`), S4("box-shadow", i7)];
          }
          switch (t8.value.value) {
            case "none":
              return t8.modifier ? void 0 : [s7(), S4("--tw-shadow", l7), S4("box-shadow", i7)];
            case "inherit":
              return t8.modifier ? void 0 : [s7(), S4("--tw-shadow-color", "inherit")];
          }
          {
            let n7 = e7.get([`--shadow-${t8.value.value}`]);
            if (n7)
              return [s7(), S4("--tw-shadow-alpha", r7), ...Ie("--tw-shadow", n7, r7, (e8) => `var(--tw-shadow-color, ${e8})`), S4("box-shadow", i7)];
          }
          {
            let r8 = _e(t8, e7, ["--box-shadow-color", "--color"]);
            if (r8)
              return [s7(), S4("--tw-shadow-color", We(r8, "var(--tw-shadow-alpha)"))];
          }
        }), r6("shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["none"] }, { valueThemeKeys: ["--shadow"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), hasDefaultValue: null !== e7.get(["--shadow"]) }]), n6("inset-shadow-initial", [s7, ["--tw-inset-shadow-color", "initial"]]), t7.functional("inset-shadow", (t8) => {
          let r7;
          if (t8.modifier && ("arbitrary" === t8.modifier.kind ? r7 = t8.modifier.value : Ae(t8.modifier.value) && (r7 = `${t8.modifier.value}%`)), !t8.value) {
            let t9 = e7.get(["--inset-shadow"]);
            return null === t9 ? void 0 : [s7(), S4("--tw-inset-shadow-alpha", r7), ...Ie("--tw-inset-shadow", t9, r7, (e8) => `var(--tw-inset-shadow-color, ${e8})`), S4("box-shadow", i7)];
          }
          if ("arbitrary" === t8.value.kind) {
            let n7 = t8.value.value;
            return "color" === (t8.value.dataType ?? ce(n7, ["color"])) ? (n7 = De(n7, t8.modifier, e7), null === n7 ? void 0 : [s7(), S4("--tw-inset-shadow-color", We(n7, "var(--tw-inset-shadow-alpha)"))]) : [s7(), S4("--tw-inset-shadow-alpha", r7), ...Ie("--tw-inset-shadow", n7, r7, (e8) => `var(--tw-inset-shadow-color, ${e8})`, "inset "), S4("box-shadow", i7)];
          }
          switch (t8.value.value) {
            case "none":
              return t8.modifier ? void 0 : [s7(), S4("--tw-inset-shadow", l7), S4("box-shadow", i7)];
            case "inherit":
              return t8.modifier ? void 0 : [s7(), S4("--tw-inset-shadow-color", "inherit")];
          }
          {
            let n7 = e7.get([`--inset-shadow-${t8.value.value}`]);
            if (n7)
              return [s7(), S4("--tw-inset-shadow-alpha", r7), ...Ie("--tw-inset-shadow", n7, r7, (e8) => `var(--tw-inset-shadow-color, ${e8})`), S4("box-shadow", i7)];
          }
          {
            let r8 = _e(t8, e7, ["--box-shadow-color", "--color"]);
            if (r8)
              return [s7(), S4("--tw-inset-shadow-color", We(r8, "var(--tw-inset-shadow-alpha)"))];
          }
        }), r6("inset-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["none"] }, { valueThemeKeys: ["--inset-shadow"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8), hasDefaultValue: null !== e7.get(["--inset-shadow"]) }]), n6("ring-inset", [s7, ["--tw-ring-inset", "inset"]]);
        let c6 = e7.get(["--default-ring-color"]) ?? "currentcolor";
        t7.functional("ring", (t8) => {
          if (!t8.value) {
            if (t8.modifier)
              return;
            let r7 = e7.get(["--default-ring-width"]) ?? "1px";
            return [s7(), S4("--tw-ring-shadow", o6(r7)), S4("box-shadow", i7)];
          }
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            return "length" === (t8.value.dataType ?? ce(r7, ["color", "length"])) ? t8.modifier ? void 0 : [s7(), S4("--tw-ring-shadow", o6(r7)), S4("box-shadow", i7)] : (r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("--tw-ring-color", r7)]);
          }
          {
            let r7 = _e(t8, e7, ["--ring-color", "--color"]);
            if (r7)
              return [S4("--tw-ring-color", r7)];
          }
          {
            if (t8.modifier)
              return;
            let r7 = e7.resolve(t8.value.value, ["--ring-width"]);
            if (null === r7 && Ae(t8.value.value) && (r7 = `${t8.value.value}px`), r7)
              return [s7(), S4("--tw-ring-shadow", o6(r7)), S4("box-shadow", i7)];
          }
        }), r6("ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]), t7.functional("inset-ring", (t8) => {
          if (!t8.value)
            return t8.modifier ? void 0 : [s7(), S4("--tw-inset-ring-shadow", a6("1px")), S4("box-shadow", i7)];
          if ("arbitrary" === t8.value.kind) {
            let r7 = t8.value.value;
            return "length" === (t8.value.dataType ?? ce(r7, ["color", "length"])) ? t8.modifier ? void 0 : [s7(), S4("--tw-inset-ring-shadow", a6(r7)), S4("box-shadow", i7)] : (r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("--tw-inset-ring-color", r7)]);
          }
          {
            let r7 = _e(t8, e7, ["--ring-color", "--color"]);
            if (r7)
              return [S4("--tw-inset-ring-color", r7)];
          }
          {
            if (t8.modifier)
              return;
            let r7 = e7.resolve(t8.value.value, ["--ring-width"]);
            if (null === r7 && Ae(t8.value.value) && (r7 = `${t8.value.value}px`), r7)
              return [s7(), S4("--tw-inset-ring-shadow", a6(r7)), S4("box-shadow", i7)];
          }
        }), r6("inset-ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]);
        let u6 = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
        t7.functional("ring-offset", (t8) => {
          if (t8.value) {
            if ("arbitrary" === t8.value.kind) {
              let r7 = t8.value.value;
              return "length" === (t8.value.dataType ?? ce(r7, ["color", "length"])) ? t8.modifier ? void 0 : [S4("--tw-ring-offset-width", r7), S4("--tw-ring-offset-shadow", u6)] : (r7 = De(r7, t8.modifier, e7), null === r7 ? void 0 : [S4("--tw-ring-offset-color", r7)]);
            }
            {
              let r7 = e7.resolve(t8.value.value, ["--ring-offset-width"]);
              if (r7)
                return t8.modifier ? void 0 : [S4("--tw-ring-offset-width", r7), S4("--tw-ring-offset-shadow", u6)];
              if (Ae(t8.value.value))
                return t8.modifier ? void 0 : [S4("--tw-ring-offset-width", `${t8.value.value}px`), S4("--tw-ring-offset-shadow", u6)];
            }
            {
              let r7 = _e(t8, e7, ["--ring-offset-color", "--color"]);
              if (r7)
                return [S4("--tw-ring-offset-color", r7)];
            }
          }
        });
      }
      return r6("ring-offset", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-offset-color", "--color"], modifiers: Array.from({ length: 21 }, (e8, t8) => "" + 5 * t8) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-offset-width"] }]), t7.functional("@container", (e8) => {
        let t8 = null;
        if (null === e8.value ? t8 = "inline-size" : "arbitrary" === e8.value.kind ? t8 = e8.value.value : "named" === e8.value.kind && "normal" === e8.value.value && (t8 = "normal"), null !== t8)
          return e8.modifier ? [S4("container-type", t8), S4("container-name", e8.modifier.value)] : [S4("container-type", t8)];
      }), r6("@container", () => [{ values: ["normal"], valueThemeKeys: [], hasDefaultValue: true }]), t7;
    }(e6), r5 = function(e7) {
      let t7 = new Je();
      function r6(e8, r7, { compounds: n7 } = {}) {
        n7 = n7 ?? Xe(r7), t7.static(e8, (e9) => {
          e9.nodes = r7.map((t8) => z2(t8, e9.nodes));
        }, { compounds: n7 });
      }
      function n6(e8, t8) {
        return t8.map((t9) => {
          let r7 = q2(t9 = t9.trim(), " ");
          return "not" === r7[0] ? r7.slice(1).join(" ") : "@container" === e8 ? "(" === r7[0][0] ? `not ${t9}` : "not" === r7[1] ? `${r7[0]} ${r7.slice(2).join(" ")}` : `${r7[0]} not ${r7.slice(1).join(" ")}` : `not ${t9}`;
        });
      }
      r6("*", [":is(& > *)"], { compounds: 0 }), r6("**", [":is(& *)"], { compounds: 0 });
      let o5 = ["@media", "@supports", "@container"];
      function a5(e8) {
        for (let t8 of o5) {
          if (t8 !== e8.name)
            continue;
          let r7 = q2(e8.params, ",");
          return r7.length > 1 ? null : (r7 = n6(e8.name, r7), A2(e8.name, r7.join(", ")));
        }
        return null;
      }
      function i6(e8) {
        return e8.includes("::") ? null : `&:not(${q2(e8, ",").map((e9) => e9.replaceAll("&", "*")).join(", ")})`;
      }
      t7.compound("not", 3, (e8, t8) => {
        if ("arbitrary" === t8.variant.kind && t8.variant.relative || t8.modifier)
          return null;
        let r7 = false;
        return k2([e8], (t9, n7) => {
          if ("rule" !== t9.kind && "at-rule" !== t9.kind)
            return w3.Continue;
          if (t9.nodes.length > 0)
            return w3.Continue;
          let o6 = [], l6 = [], s6 = n7.path();
          s6.push(t9);
          for (let e9 of s6)
            "at-rule" === e9.kind ? o6.push(e9) : "rule" === e9.kind && l6.push(e9);
          if (o6.length > 1)
            return w3.Stop;
          if (l6.length > 1)
            return w3.Stop;
          let c5 = [];
          for (let e9 of l6) {
            let t10 = i6(e9.selector);
            if (!t10)
              return r7 = false, w3.Stop;
            c5.push($4(t10, []));
          }
          for (let e9 of o6) {
            let t10 = a5(e9);
            if (!t10)
              return r7 = false, w3.Stop;
            c5.push(t10);
          }
          return Object.assign(e8, $4("&", c5)), r7 = true, w3.Skip;
        }), "rule" === e8.kind && "&" === e8.selector && 1 === e8.nodes.length && Object.assign(e8, e8.nodes[0]), r7 ? void 0 : null;
      }), t7.suggest("not", () => Array.from(t7.keys()).filter((e8) => t7.compoundsWith("not", e8))), t7.compound("group", 2, (t8, r7) => {
        if ("arbitrary" === r7.variant.kind && r7.variant.relative)
          return null;
        let n7 = r7.modifier ? `:where(.${e7.prefix ? `${e7.prefix}\\:` : ""}group\\/${r7.modifier.value})` : `:where(.${e7.prefix ? `${e7.prefix}\\:` : ""}group)`, o6 = false;
        return k2([t8], (e8, t9) => {
          if ("rule" !== e8.kind)
            return w3.Continue;
          for (let e9 of t9.path())
            if ("rule" === e9.kind)
              return o6 = false, w3.Stop;
          let r8 = e8.selector.replaceAll("&", n7);
          q2(r8, ",").length > 1 && (r8 = `:is(${r8})`), e8.selector = `&:is(${r8} *)`, o6 = true;
        }), o6 ? void 0 : null;
      }), t7.suggest("group", () => Array.from(t7.keys()).filter((e8) => t7.compoundsWith("group", e8))), t7.compound("peer", 2, (t8, r7) => {
        if ("arbitrary" === r7.variant.kind && r7.variant.relative)
          return null;
        let n7 = r7.modifier ? `:where(.${e7.prefix ? `${e7.prefix}\\:` : ""}peer\\/${r7.modifier.value})` : `:where(.${e7.prefix ? `${e7.prefix}\\:` : ""}peer)`, o6 = false;
        return k2([t8], (e8, t9) => {
          if ("rule" !== e8.kind)
            return w3.Continue;
          for (let e9 of t9.path())
            if ("rule" === e9.kind)
              return o6 = false, w3.Stop;
          let r8 = e8.selector.replaceAll("&", n7);
          q2(r8, ",").length > 1 && (r8 = `:is(${r8})`), e8.selector = `&:is(${r8} ~ *)`, o6 = true;
        }), o6 ? void 0 : null;
      }), t7.suggest("peer", () => Array.from(t7.keys()).filter((e8) => t7.compoundsWith("peer", e8))), r6("first-letter", ["&::first-letter"]), r6("first-line", ["&::first-line"]), r6("marker", ["& *::marker", "&::marker", "& *::-webkit-details-marker", "&::-webkit-details-marker"]), r6("selection", ["& *::selection", "&::selection"]), r6("file", ["&::file-selector-button"]), r6("placeholder", ["&::placeholder"]), r6("backdrop", ["&::backdrop"]), r6("details-content", ["&::details-content"]);
      {
        let e8 = function() {
          return T2([A2("@property", "--tw-content", [S4("syntax", '"*"'), S4("initial-value", '""'), S4("inherits", "false")])]);
        };
        t7.static("before", (t8) => {
          t8.nodes = [$4("&::before", [e8(), S4("content", "var(--tw-content)"), ...t8.nodes])];
        }, { compounds: 0 }), t7.static("after", (t8) => {
          t8.nodes = [$4("&::after", [e8(), S4("content", "var(--tw-content)"), ...t8.nodes])];
        }, { compounds: 0 });
      }
      r6("first", ["&:first-child"]), r6("last", ["&:last-child"]), r6("only", ["&:only-child"]), r6("odd", ["&:nth-child(odd)"]), r6("even", ["&:nth-child(even)"]), r6("first-of-type", ["&:first-of-type"]), r6("last-of-type", ["&:last-of-type"]), r6("only-of-type", ["&:only-of-type"]), r6("visited", ["&:visited"]), r6("target", ["&:target"]), r6("open", ["&:is([open], :popover-open, :open)"]), r6("default", ["&:default"]), r6("checked", ["&:checked"]), r6("indeterminate", ["&:indeterminate"]), r6("placeholder-shown", ["&:placeholder-shown"]), r6("autofill", ["&:autofill"]), r6("optional", ["&:optional"]), r6("required", ["&:required"]), r6("valid", ["&:valid"]), r6("invalid", ["&:invalid"]), r6("user-valid", ["&:user-valid"]), r6("user-invalid", ["&:user-invalid"]), r6("in-range", ["&:in-range"]), r6("out-of-range", ["&:out-of-range"]), r6("read-only", ["&:read-only"]), r6("empty", ["&:empty"]), r6("focus-within", ["&:focus-within"]), t7.static("hover", (e8) => {
        e8.nodes = [$4("&:hover", [A2("@media", "(hover: hover)", e8.nodes)])];
      }), r6("focus", ["&:focus"]), r6("focus-visible", ["&:focus-visible"]), r6("active", ["&:active"]), r6("enabled", ["&:enabled"]), r6("disabled", ["&:disabled"]), r6("inert", ["&:is([inert], [inert] *)"]), t7.compound("in", 2, (e8, t8) => {
        if (t8.modifier)
          return null;
        let r7 = false;
        return k2([e8], (e9, t9) => {
          if ("rule" !== e9.kind)
            return w3.Continue;
          for (let e10 of t9.path())
            if ("rule" === e10.kind)
              return r7 = false, w3.Stop;
          e9.selector = `:where(${e9.selector.replaceAll("&", "*")}) &`, r7 = true;
        }), r7 ? void 0 : null;
      }), t7.suggest("in", () => Array.from(t7.keys()).filter((e8) => t7.compoundsWith("in", e8))), t7.compound("has", 2, (e8, t8) => {
        if (t8.modifier)
          return null;
        let r7 = false;
        return k2([e8], (e9, t9) => {
          if ("rule" !== e9.kind)
            return w3.Continue;
          for (let e10 of t9.path())
            if ("rule" === e10.kind)
              return r7 = false, w3.Stop;
          e9.selector = `&:has(${e9.selector.replaceAll("&", "*")})`, r7 = true;
        }), r7 ? void 0 : null;
      }), t7.suggest("has", () => Array.from(t7.keys()).filter((e8) => t7.compoundsWith("has", e8))), t7.functional("aria", (e8, t8) => {
        if (!t8.value || t8.modifier)
          return null;
        "arbitrary" === t8.value.kind ? e8.nodes = [$4(`&[aria-${Qe(t8.value.value)}]`, e8.nodes)] : e8.nodes = [$4(`&[aria-${t8.value.value}="true"]`, e8.nodes)];
      }), t7.suggest("aria", () => ["busy", "checked", "disabled", "expanded", "hidden", "pressed", "readonly", "required", "selected"]), t7.functional("data", (e8, t8) => {
        if (!t8.value || t8.modifier)
          return null;
        e8.nodes = [$4(`&[data-${Qe(t8.value.value)}]`, e8.nodes)];
      }), t7.functional("nth", (e8, t8) => {
        if (!t8.value || t8.modifier || "named" === t8.value.kind && !Ae(t8.value.value))
          return null;
        e8.nodes = [$4(`&:nth-child(${t8.value.value})`, e8.nodes)];
      }), t7.functional("nth-last", (e8, t8) => {
        if (!t8.value || t8.modifier || "named" === t8.value.kind && !Ae(t8.value.value))
          return null;
        e8.nodes = [$4(`&:nth-last-child(${t8.value.value})`, e8.nodes)];
      }), t7.functional("nth-of-type", (e8, t8) => {
        if (!t8.value || t8.modifier || "named" === t8.value.kind && !Ae(t8.value.value))
          return null;
        e8.nodes = [$4(`&:nth-of-type(${t8.value.value})`, e8.nodes)];
      }), t7.functional("nth-last-of-type", (e8, t8) => {
        if (!t8.value || t8.modifier || "named" === t8.value.kind && !Ae(t8.value.value))
          return null;
        e8.nodes = [$4(`&:nth-last-of-type(${t8.value.value})`, e8.nodes)];
      }), t7.functional("supports", (e8, t8) => {
        if (!t8.value || t8.modifier)
          return null;
        let r7 = t8.value.value;
        if (null === r7)
          return null;
        if (/^[\w-]*\s*\(/.test(r7)) {
          let t9 = r7.replace(/\b(and|or|not)\b/g, " $1 ");
          e8.nodes = [A2("@supports", t9, e8.nodes)];
        } else
          r7.includes(":") || (r7 = `${r7}: var(--tw)`), ("(" !== r7[0] || ")" !== r7[r7.length - 1]) && (r7 = `(${r7})`), e8.nodes = [A2("@supports", r7, e8.nodes)];
      }, { compounds: 1 }), r6("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]), r6("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]), r6("contrast-more", ["@media (prefers-contrast: more)"]), r6("contrast-less", ["@media (prefers-contrast: less)"]);
      {
        let r7 = function(e8, t8, r8, n7) {
          if (e8 === t8)
            return 0;
          let o6 = n7.get(e8);
          if (null === o6)
            return "asc" === r8 ? -1 : 1;
          let a6 = n7.get(t8);
          return null === a6 ? "asc" === r8 ? 1 : -1 : ae(o6, a6, r8);
        };
        {
          let n7 = e7.namespace("--breakpoint"), o6 = new u4((t8) => {
            switch (t8.kind) {
              case "static":
                return e7.resolveValue(t8.root, ["--breakpoint"]) ?? null;
              case "functional": {
                if (!t8.value || t8.modifier)
                  return null;
                let r8 = null;
                return "arbitrary" === t8.value.kind ? r8 = t8.value.value : "named" === t8.value.kind && (r8 = e7.resolveValue(t8.value.value, ["--breakpoint"])), !r8 || r8.includes("var(") ? null : r8;
              }
              case "arbitrary":
              case "compound":
                return null;
            }
          });
          t7.group(() => {
            t7.functional("max", (e8, t8) => {
              if (t8.modifier)
                return null;
              let r8 = o6.get(t8);
              if (null === r8)
                return null;
              e8.nodes = [A2("@media", `(width < ${r8})`, e8.nodes)];
            }, { compounds: 1 });
          }, (e8, t8) => r7(e8, t8, "desc", o6)), t7.suggest("max", () => Array.from(n7.keys()).filter((e8) => null !== e8)), t7.group(() => {
            for (let [r8, n8] of e7.namespace("--breakpoint"))
              null !== r8 && t7.static(r8, (e8) => {
                e8.nodes = [A2("@media", `(width >= ${n8})`, e8.nodes)];
              }, { compounds: 1 });
            t7.functional("min", (e8, t8) => {
              if (t8.modifier)
                return null;
              let r8 = o6.get(t8);
              if (null === r8)
                return null;
              e8.nodes = [A2("@media", `(width >= ${r8})`, e8.nodes)];
            }, { compounds: 1 });
          }, (e8, t8) => r7(e8, t8, "asc", o6)), t7.suggest("min", () => Array.from(n7.keys()).filter((e8) => null !== e8));
        }
        {
          let n7 = e7.namespace("--container"), o6 = new u4((t8) => {
            switch (t8.kind) {
              case "functional": {
                if (null === t8.value)
                  return null;
                let r8 = null;
                return "arbitrary" === t8.value.kind ? r8 = t8.value.value : "named" === t8.value.kind && (r8 = e7.resolveValue(t8.value.value, ["--container"])), !r8 || r8.includes("var(") ? null : r8;
              }
              case "static":
              case "arbitrary":
              case "compound":
                return null;
            }
          });
          t7.group(() => {
            t7.functional("@max", (e8, t8) => {
              let r8 = o6.get(t8);
              if (null === r8)
                return null;
              e8.nodes = [A2("@container", t8.modifier ? `${t8.modifier.value} (width < ${r8})` : `(width < ${r8})`, e8.nodes)];
            }, { compounds: 1 });
          }, (e8, t8) => r7(e8, t8, "desc", o6)), t7.suggest("@max", () => Array.from(n7.keys()).filter((e8) => null !== e8)), t7.group(() => {
            t7.functional("@", (e8, t8) => {
              let r8 = o6.get(t8);
              if (null === r8)
                return null;
              e8.nodes = [A2("@container", t8.modifier ? `${t8.modifier.value} (width >= ${r8})` : `(width >= ${r8})`, e8.nodes)];
            }, { compounds: 1 }), t7.functional("@min", (e8, t8) => {
              let r8 = o6.get(t8);
              if (null === r8)
                return null;
              e8.nodes = [A2("@container", t8.modifier ? `${t8.modifier.value} (width >= ${r8})` : `(width >= ${r8})`, e8.nodes)];
            }, { compounds: 1 });
          }, (e8, t8) => r7(e8, t8, "asc", o6)), t7.suggest("@min", () => Array.from(n7.keys()).filter((e8) => null !== e8)), t7.suggest("@", () => Array.from(n7.keys()).filter((e8) => null !== e8));
        }
      }
      return r6("portrait", ["@media (orientation: portrait)"]), r6("landscape", ["@media (orientation: landscape)"]), r6("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']), r6("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']), r6("dark", ["@media (prefers-color-scheme: dark)"]), r6("starting", ["@starting-style"]), r6("print", ["@media print"]), r6("forced-colors", ["@media (forced-colors: active)"]), r6("inverted-colors", ["@media (inverted-colors: inverted)"]), r6("pointer-none", ["@media (pointer: none)"]), r6("pointer-coarse", ["@media (pointer: coarse)"]), r6("pointer-fine", ["@media (pointer: fine)"]), r6("any-pointer-none", ["@media (any-pointer: none)"]), r6("any-pointer-coarse", ["@media (any-pointer: coarse)"]), r6("any-pointer-fine", ["@media (any-pointer: fine)"]), r6("noscript", ["@media (scripting: none)"]), t7;
    }(e6), n5 = new u4((e7) => function(e8, t7) {
      if ("[" === e8[0] && "]" === e8[e8.length - 1]) {
        if ("@" === e8[1] && e8.includes("&"))
          return null;
        let t8 = D2(e8.slice(1, -1));
        if (!I2(t8) || 0 === t8.length || 0 === t8.trim().length)
          return null;
        let r6 = ">" === t8[0] || "+" === t8[0] || "~" === t8[0];
        return !r6 && "@" !== t8[0] && !t8.includes("&") && (t8 = `&:is(${t8})`), { kind: "arbitrary", selector: t8, relative: r6 };
      }
      {
        let [r6, n6 = null, o5] = q2(e8, "/");
        if (o5)
          return null;
        let a5 = Z2(r6, (e9) => t7.variants.has(e9));
        for (let [e9, r7] of a5)
          switch (t7.variants.kind(e9)) {
            case "static":
              return null !== r7 || null !== n6 ? null : { kind: "static", root: e9 };
            case "functional": {
              let t8 = null === n6 ? null : H2(n6);
              if (null !== n6 && null === t8)
                return null;
              if (null === r7)
                return { kind: "functional", root: e9, modifier: t8, value: null };
              if ("]" === r7[r7.length - 1]) {
                if ("[" !== r7[0])
                  continue;
                let n7 = D2(r7.slice(1, -1));
                return I2(n7) && 0 !== n7.length && 0 !== n7.trim().length ? { kind: "functional", root: e9, modifier: t8, value: { kind: "arbitrary", value: n7 } } : null;
              }
              if (")" === r7[r7.length - 1]) {
                if ("(" !== r7[0])
                  continue;
                let n7 = D2(r7.slice(1, -1));
                return I2(n7) && 0 !== n7.length && 0 !== n7.trim().length && "-" === n7[0] && "-" === n7[1] ? { kind: "functional", root: e9, modifier: t8, value: { kind: "arbitrary", value: `var(${n7})` } } : null;
              }
              return { kind: "functional", root: e9, modifier: t8, value: { kind: "named", value: r7 } };
            }
            case "compound": {
              if (null === r7)
                return null;
              n6 && ("not" === e9 || "has" === e9 || "in" === e9) && (r7 = `${r7}/${n6}`, n6 = null);
              let o6 = t7.parseVariant(r7);
              if (null === o6 || !t7.variants.compoundsWith(e9, o6))
                return null;
              let a6 = null === n6 ? null : H2(n6);
              return null !== n6 && null === a6 ? null : { kind: "compound", root: e9, modifier: a6, variant: o6 };
            }
          }
      }
      return null;
    }(e7, s5)), o4 = new u4((e7) => Array.from(function* (e8, t7) {
      let r6 = q2(e8, ":");
      if (t7.theme.prefix) {
        if (1 === r6.length || r6[0] !== t7.theme.prefix)
          return null;
        r6.shift();
      }
      let n6 = r6.pop(), o5 = [];
      for (let e9 = r6.length - 1; e9 >= 0; --e9) {
        let n7 = t7.parseVariant(r6[e9]);
        if (null === n7)
          return;
        o5.push(n7);
      }
      let a5 = false;
      "!" === n6[n6.length - 1] ? (a5 = true, n6 = n6.slice(0, -1)) : "!" === n6[0] && (a5 = true, n6 = n6.slice(1)), t7.utilities.has(n6, "static") && !n6.includes("[") && (yield { kind: "static", root: n6, variants: o5, important: a5, raw: e8 });
      let [i6, l6 = null, s6] = q2(n6, "/");
      if (s6)
        return;
      let c5, u5 = null === l6 ? null : H2(l6);
      if (null === l6 || null !== u5)
        if ("[" !== i6[0]) {
          if ("]" === i6[i6.length - 1]) {
            let e9 = i6.indexOf("-[");
            if (-1 === e9)
              return;
            let r7 = i6.slice(0, e9);
            if (!t7.utilities.has(r7, "functional"))
              return;
            c5 = [[r7, i6.slice(e9 + 1)]];
          } else if (")" === i6[i6.length - 1]) {
            let e9 = i6.indexOf("-(");
            if (-1 === e9)
              return;
            let r7 = i6.slice(0, e9);
            if (!t7.utilities.has(r7, "functional"))
              return;
            let n7 = i6.slice(e9 + 2, -1), o6 = q2(n7, ":"), a6 = null;
            if (2 === o6.length && (a6 = o6[0], n7 = o6[1]), "-" !== n7[0] || "-" !== n7[1] || !I2(n7))
              return;
            c5 = [[r7, null === a6 ? `[var(${n7})]` : `[${a6}:var(${n7})]`]];
          } else
            c5 = Z2(i6, (e9) => t7.utilities.has(e9, "functional"));
          for (let [t8, r7] of c5) {
            let n7 = { kind: "functional", root: t8, modifier: u5, value: null, variants: o5, important: a5, raw: e8 };
            if (null !== r7) {
              {
                let e9 = r7.indexOf("[");
                if (-1 !== e9) {
                  if ("]" !== r7[r7.length - 1])
                    return;
                  let t9 = D2(r7.slice(e9 + 1, -1));
                  if (!I2(t9))
                    continue;
                  let o6 = null;
                  for (let e10 = 0; e10 < t9.length; e10++) {
                    let r8 = t9.charCodeAt(e10);
                    if (58 === r8) {
                      o6 = t9.slice(0, e10), t9 = t9.slice(e10 + 1);
                      break;
                    }
                    if (!(45 === r8 || r8 >= 97 && r8 <= 122))
                      break;
                  }
                  if (0 === t9.length || 0 === t9.trim().length || "" === o6)
                    continue;
                  n7.value = { kind: "arbitrary", dataType: o6 || null, value: t9 };
                } else {
                  let e10 = null === l6 || "arbitrary" === n7.modifier?.kind ? null : `${r7}/${l6}`;
                  n7.value = { kind: "named", value: r7, fraction: e10 };
                }
              }
              yield n7;
            } else
              yield n7;
          }
        } else {
          if ("]" !== i6[i6.length - 1])
            return;
          let t8 = i6.charCodeAt(1);
          if (45 !== t8 && !(t8 >= 97 && t8 <= 122))
            return;
          i6 = i6.slice(1, -1);
          let r7 = i6.indexOf(":");
          if (-1 === r7 || 0 === r7 || r7 === i6.length - 1)
            return;
          let n7 = i6.slice(0, r7), l7 = D2(i6.slice(r7 + 1));
          if (!I2(l7))
            return;
          yield { kind: "arbitrary", property: n7, value: l7, modifier: u5, variants: o5, important: a5, raw: e8 };
        }
    }(e7, s5))), i5 = new u4((e7) => new u4((t7) => {
      let r6 = function(e8, t8, r7) {
        let n6 = function(e9, t9) {
          if ("arbitrary" === e9.kind) {
            let r9 = e9.value;
            return e9.modifier && (r9 = De(r9, e9.modifier, t9.theme)), null === r9 ? [] : [[S4(e9.property, r9)]];
          }
          let r8 = t9.utilities.get(e9.root) ?? [], n7 = [], o6 = r8.filter((e10) => !it2(e10));
          for (let t10 of o6) {
            if (t10.kind !== e9.kind)
              continue;
            let r9 = t10.compileFn(e9);
            if (void 0 !== r9) {
              if (null === r9)
                return n7;
              n7.push(r9);
            }
          }
          if (n7.length > 0)
            return n7;
          let a5 = r8.filter((e10) => it2(e10));
          for (let t10 of a5) {
            if (t10.kind !== e9.kind)
              continue;
            let r9 = t10.compileFn(e9);
            if (void 0 !== r9) {
              if (null === r9)
                return n7;
              n7.push(r9);
            }
          }
          return n7;
        }(e8, t8);
        if (0 === n6.length)
          return [];
        let o5 = t8.important && !!(1 & r7), i6 = [], l6 = `.${a4(e8.raw)}`;
        for (let r8 of n6) {
          let n7 = st2(r8);
          (e8.important || o5) && lt2(r8);
          let a5 = { kind: "rule", selector: l6, nodes: r8 };
          for (let r9 of e8.variants)
            if (null === at2(a5, r9, t8.variants))
              return [];
          i6.push({ node: a5, propertySort: n7 });
        }
        return i6;
      }(t7, s5, e7);
      try {
        Ze(r6.map(({ node: e8 }) => e8), s5), tt2(r6.map(({ node: e8 }) => e8), s5);
      } catch {
        return [];
      }
      return r6;
    })), l5 = new u4((t7) => {
      for (let r6 of y4(t7))
        e6.markUsedVariable(r6);
    }), s5 = { theme: e6, utilities: t6, variants: r5, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss(e7) {
      let t7 = [];
      for (let r6 of e7) {
        let e8 = false, { astNodes: n6 } = ot2([r6], this, { onInvalidCandidate() {
          e8 = true;
        } });
        n6 = E4(n6, s5, 0), 0 === n6.length || e8 ? t7.push(null) : t7.push(N2(n6));
      }
      return t7;
    }, getClassOrder(e7) {
      return function(e8, t7) {
        let { astNodes: r6, nodeSorting: n6 } = ot2(Array.from(t7), e8), o5 = new Map(t7.map((e9) => [e9, null])), a5 = 0n;
        for (let e9 of r6) {
          let t8 = n6.get(e9)?.candidate;
          t8 && o5.set(t8, o5.get(t8) ?? a5++);
        }
        return t7.map((e9) => [e9, o5.get(e9) ?? null]);
      }(this, e7);
    }, getClassList: () => [], getVariants: () => [], parseCandidate: (e7) => o4.get(e7), parseVariant: (e7) => n5.get(e7), compileAstNodes: (e7, t7 = 1) => i5.get(t7).get(e7), printCandidate: (e7) => function(e8, t7) {
      let r6 = [];
      for (let e9 of t7.variants)
        r6.unshift(G2(e9));
      e8.theme.prefix && r6.unshift(e8.theme.prefix);
      let n6 = "";
      if ("static" === t7.kind && (n6 += t7.root), "functional" === t7.kind && (n6 += t7.root, t7.value))
        if ("arbitrary" === t7.value.kind) {
          if (null !== t7.value) {
            let e9 = re(t7.value.value), r7 = e9 ? t7.value.value.slice(4, -1) : t7.value.value, [o5, a5] = e9 ? ["(", ")"] : ["[", "]"];
            t7.value.dataType ? n6 += `-${o5}${t7.value.dataType}:${X2(r7)}${a5}` : n6 += `-${o5}${X2(r7)}${a5}`;
          }
        } else
          "named" === t7.value.kind && (n6 += `-${t7.value.value}`);
      return "arbitrary" === t7.kind && (n6 += `[${t7.property}:${X2(t7.value)}]`), ("arbitrary" === t7.kind || "functional" === t7.kind) && (n6 += Y2(t7.modifier)), t7.important && (n6 += "!"), r6.push(n6), r6.join(":");
    }(s5, e7), printVariant: (e7) => G2(e7), getVariantOrder() {
      let e7 = Array.from(n5.values());
      e7.sort((e8, t8) => this.variants.compare(e8, t8));
      let t7, r6 = /* @__PURE__ */ new Map(), o5 = 0;
      for (let n6 of e7)
        null !== n6 && (void 0 !== t7 && 0 !== this.variants.compare(t7, n6) && o5++, r6.set(n6, o5), t7 = n6);
      return r6;
    }, resolveThemeValue(t7, r6 = true) {
      let n6 = t7.lastIndexOf("/"), o5 = null;
      -1 !== n6 && (o5 = t7.slice(n6 + 1).trim(), t7 = t7.slice(0, n6).trim());
      let a5 = e6.resolve(null, [t7], r6 ? 1 : 0) ?? void 0;
      return o5 && a5 ? We(a5, o5) : a5;
    }, trackUsedVariables(e7) {
      l5.get(e7);
    }, canonicalizeCandidates: (e7, t7) => [], storage: {} };
    return s5;
  }
  var nt2 = ["container-type", "pointer-events", "visibility", "position", "inset", "inset-inline", "inset-block", "inset-inline-start", "inset-inline-end", "top", "right", "bottom", "left", "isolation", "z-index", "order", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "float", "clear", "--tw-container-component", "margin", "margin-inline", "margin-block", "margin-inline-start", "margin-inline-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "box-sizing", "display", "field-sizing", "aspect-ratio", "height", "max-height", "min-height", "width", "max-width", "min-width", "flex", "flex-shrink", "flex-grow", "flex-basis", "table-layout", "caption-side", "border-collapse", "border-spacing", "transform-origin", "translate", "--tw-translate-x", "--tw-translate-y", "--tw-translate-z", "scale", "--tw-scale-x", "--tw-scale-y", "--tw-scale-z", "rotate", "--tw-rotate-x", "--tw-rotate-y", "--tw-rotate-z", "--tw-skew-x", "--tw-skew-y", "transform", "animation", "cursor", "touch-action", "--tw-pan-x", "--tw-pan-y", "--tw-pinch-zoom", "resize", "scroll-snap-type", "--tw-scroll-snap-strictness", "scroll-snap-align", "scroll-snap-stop", "scroll-margin", "scroll-margin-inline", "scroll-margin-block", "scroll-margin-inline-start", "scroll-margin-inline-end", "scroll-margin-top", "scroll-margin-right", "scroll-margin-bottom", "scroll-margin-left", "scroll-padding", "scroll-padding-inline", "scroll-padding-block", "scroll-padding-inline-start", "scroll-padding-inline-end", "scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left", "list-style-position", "list-style-type", "list-style-image", "appearance", "columns", "break-before", "break-inside", "break-after", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-template-columns", "grid-template-rows", "flex-direction", "flex-wrap", "place-content", "place-items", "align-content", "align-items", "justify-content", "justify-items", "gap", "column-gap", "row-gap", "--tw-space-x-reverse", "--tw-space-y-reverse", "divide-x-width", "divide-y-width", "--tw-divide-y-reverse", "divide-style", "divide-color", "place-self", "align-self", "justify-self", "overflow", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "scroll-behavior", "border-radius", "border-start-radius", "border-end-radius", "border-top-radius", "border-right-radius", "border-bottom-radius", "border-left-radius", "border-start-start-radius", "border-start-end-radius", "border-end-end-radius", "border-end-start-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-width", "border-inline-width", "border-block-width", "border-inline-start-width", "border-inline-end-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-inline-style", "border-block-style", "border-inline-start-style", "border-inline-end-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-color", "border-inline-color", "border-block-color", "border-inline-start-color", "border-inline-end-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "background-image", "--tw-gradient-position", "--tw-gradient-stops", "--tw-gradient-via-stops", "--tw-gradient-from", "--tw-gradient-from-position", "--tw-gradient-via", "--tw-gradient-via-position", "--tw-gradient-to", "--tw-gradient-to-position", "mask-image", "--tw-mask-top", "--tw-mask-top-from-color", "--tw-mask-top-from-position", "--tw-mask-top-to-color", "--tw-mask-top-to-position", "--tw-mask-right", "--tw-mask-right-from-color", "--tw-mask-right-from-position", "--tw-mask-right-to-color", "--tw-mask-right-to-position", "--tw-mask-bottom", "--tw-mask-bottom-from-color", "--tw-mask-bottom-from-position", "--tw-mask-bottom-to-color", "--tw-mask-bottom-to-position", "--tw-mask-left", "--tw-mask-left-from-color", "--tw-mask-left-from-position", "--tw-mask-left-to-color", "--tw-mask-left-to-position", "--tw-mask-linear", "--tw-mask-linear-position", "--tw-mask-linear-from-color", "--tw-mask-linear-from-position", "--tw-mask-linear-to-color", "--tw-mask-linear-to-position", "--tw-mask-radial", "--tw-mask-radial-shape", "--tw-mask-radial-size", "--tw-mask-radial-position", "--tw-mask-radial-from-color", "--tw-mask-radial-from-position", "--tw-mask-radial-to-color", "--tw-mask-radial-to-position", "--tw-mask-conic", "--tw-mask-conic-position", "--tw-mask-conic-from-color", "--tw-mask-conic-from-position", "--tw-mask-conic-to-color", "--tw-mask-conic-to-position", "box-decoration-break", "background-size", "background-attachment", "background-clip", "background-position", "background-repeat", "background-origin", "mask-composite", "mask-mode", "mask-type", "mask-size", "mask-clip", "mask-position", "mask-repeat", "mask-origin", "fill", "stroke", "stroke-width", "object-fit", "object-position", "padding", "padding-inline", "padding-block", "padding-inline-start", "padding-inline-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-indent", "vertical-align", "font-family", "font-size", "line-height", "font-weight", "letter-spacing", "text-wrap", "overflow-wrap", "word-break", "text-overflow", "hyphens", "white-space", "color", "text-transform", "font-style", "font-stretch", "font-variant-numeric", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration-thickness", "text-underline-offset", "-webkit-font-smoothing", "placeholder-color", "caret-color", "accent-color", "color-scheme", "opacity", "background-blend-mode", "mix-blend-mode", "box-shadow", "--tw-shadow", "--tw-shadow-color", "--tw-ring-shadow", "--tw-ring-color", "--tw-inset-shadow", "--tw-inset-shadow-color", "--tw-inset-ring-shadow", "--tw-inset-ring-color", "--tw-ring-offset-width", "--tw-ring-offset-color", "outline", "outline-width", "outline-offset", "outline-color", "--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter", "--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "backdrop-filter", "transition-property", "transition-behavior", "transition-delay", "transition-duration", "transition-timing-function", "will-change", "contain", "content", "forced-color-adjust"];
  function ot2(e6, t6, { onInvalidCandidate: r5, respectImportant: n5 } = {}) {
    let o4 = /* @__PURE__ */ new Map(), a5 = [], i5 = /* @__PURE__ */ new Map();
    for (let n6 of e6) {
      if (t6.invalidCandidates.has(n6)) {
        r5?.(n6);
        continue;
      }
      let e7 = t6.parseCandidate(n6);
      0 !== e7.length ? i5.set(n6, e7) : r5?.(n6);
    }
    let l5 = 0;
    (n5 ?? 1) && (l5 |= 1);
    let s5 = t6.getVariantOrder();
    for (let [e7, n6] of i5) {
      let i6 = false;
      for (let r6 of n6) {
        let n7 = t6.compileAstNodes(r6, l5);
        if (0 !== n7.length) {
          i6 = true;
          for (let { node: t7, propertySort: i7 } of n7) {
            let n8 = 0n;
            for (let e8 of r6.variants)
              n8 |= 1n << BigInt(s5.get(e8));
            o4.set(t7, { properties: i7, variants: n8, candidate: e7 }), a5.push(t7);
          }
        }
      }
      i6 || r5?.(e7);
    }
    return a5.sort((e7, t7) => {
      let r6 = o4.get(e7), n6 = o4.get(t7);
      if (r6.variants - n6.variants !== 0n)
        return Number(r6.variants - n6.variants);
      let a6 = 0;
      for (; a6 < r6.properties.order.length && a6 < n6.properties.order.length && r6.properties.order[a6] === n6.properties.order[a6]; )
        a6 += 1;
      return (r6.properties.order[a6] ?? 1 / 0) - (n6.properties.order[a6] ?? 1 / 0) || n6.properties.count - r6.properties.count || function(e8, t8) {
        let r7 = e8.length, n7 = t8.length, o5 = r7 < n7 ? r7 : n7;
        for (let r8 = 0; r8 < o5; r8++) {
          let n8 = e8.charCodeAt(r8), o6 = t8.charCodeAt(r8);
          if (n8 >= 48 && n8 <= 57 && o6 >= 48 && o6 <= 57) {
            let a7 = r8, i6 = r8 + 1, l6 = r8, s6 = r8 + 1;
            for (n8 = e8.charCodeAt(i6); n8 >= 48 && n8 <= 57; )
              n8 = e8.charCodeAt(++i6);
            for (o6 = t8.charCodeAt(s6); o6 >= 48 && o6 <= 57; )
              o6 = t8.charCodeAt(++s6);
            let c5 = e8.slice(a7, i6), u5 = t8.slice(l6, s6), d5 = Number(c5) - Number(u5);
            if (d5)
              return d5;
            if (c5 < u5)
              return -1;
            if (c5 > u5)
              return 1;
          } else if (n8 !== o6)
            return n8 - o6;
        }
        return e8.length - t8.length;
      }(r6.candidate, n6.candidate);
    }), { astNodes: a5, nodeSorting: o4 };
  }
  function at2(e6, t6, r5, n5 = 0) {
    if ("arbitrary" === t6.kind)
      return t6.relative && 0 === n5 ? null : void (e6.nodes = [z2(t6.selector, e6.nodes)]);
    let { applyFn: o4 } = r5.get(t6.root);
    if ("compound" === t6.kind) {
      let a5 = A2("@slot");
      if (null === at2(a5, t6.variant, r5, n5 + 1) || "not" === t6.root && a5.nodes.length > 1)
        return null;
      for (let e7 of a5.nodes)
        if ("rule" !== e7.kind && "at-rule" !== e7.kind || null === o4(e7, t6))
          return null;
      return k2(a5.nodes, (t7) => {
        if (("rule" === t7.kind || "at-rule" === t7.kind) && t7.nodes.length <= 0)
          return t7.nodes = e6.nodes, w3.Skip;
      }), void (e6.nodes = a5.nodes);
    }
    return null === o4(e6, t6) ? null : void 0;
  }
  function it2(e6) {
    let t6 = e6.options?.types ?? [];
    return t6.length > 1 && t6.includes("any");
  }
  function lt2(e6) {
    for (let t6 of e6)
      "at-root" !== t6.kind && ("declaration" === t6.kind ? t6.important = true : ("rule" === t6.kind || "at-rule" === t6.kind) && lt2(t6.nodes));
  }
  function st2(e6) {
    let t6 = /* @__PURE__ */ new Set(), r5 = 0, n5 = e6.slice(), o4 = false;
    for (; n5.length > 0; ) {
      let e7 = n5.shift();
      if ("declaration" === e7.kind) {
        if (void 0 === e7.value || (r5++, o4))
          continue;
        if ("--tw-sort" === e7.property) {
          let r6 = nt2.indexOf(e7.value ?? "");
          if (-1 !== r6) {
            t6.add(r6), o4 = true;
            continue;
          }
        }
        let n6 = nt2.indexOf(e7.property);
        -1 !== n6 && t6.add(n6);
      } else if ("rule" === e7.kind || "at-rule" === e7.kind)
        for (let t7 of e7.nodes)
          n5.push(t7);
    }
    return { order: Array.from(t6).sort((e7, t7) => e7 - t7), count: r5 };
  }
  function ct2(e6, t6) {
    let r5 = 0, n5 = z2("&", e6), o4 = /* @__PURE__ */ new Set(), a5 = new u4(() => /* @__PURE__ */ new Set()), i5 = new u4(() => /* @__PURE__ */ new Set());
    k2([n5], (e7, n6) => {
      if ("at-rule" === e7.kind) {
        if ("@keyframes" === e7.name)
          return k2(e7.nodes, (e8) => {
            if ("at-rule" === e8.kind && "@apply" === e8.name)
              throw new Error("You cannot use `@apply` inside `@keyframes`.");
          }), w3.Skip;
        if ("@utility" === e7.name) {
          let r6 = e7.params.replace(/-\*$/, "");
          return i5.get(r6).add(e7), void k2(e7.nodes, (r7) => {
            if ("at-rule" === r7.kind && "@apply" === r7.name) {
              o4.add(e7);
              for (let n7 of ut2(r7, t6))
                a5.get(e7).add(n7);
            }
          });
        }
        if ("@apply" === e7.name) {
          if (null === n6.parent)
            return;
          r5 |= 1, o4.add(n6.parent);
          for (let r6 of ut2(e7, t6))
            for (let e8 of n6.path())
              o4.has(e8) && a5.get(e8).add(r6);
        }
      }
    });
    let l5 = /* @__PURE__ */ new Set(), s5 = [], c5 = /* @__PURE__ */ new Set();
    function d5(e7, r6 = []) {
      if (!l5.has(e7)) {
        if (c5.has(e7)) {
          let n6 = r6[(r6.indexOf(e7) + 1) % r6.length];
          throw "at-rule" === e7.kind && "@utility" === e7.name && "at-rule" === n6.kind && "@utility" === n6.name && k2(e7.nodes, (e8) => {
            if ("at-rule" !== e8.kind || "@apply" !== e8.name)
              return;
            let r7 = e8.params.split(/\s+/g);
            for (let e9 of r7)
              for (let r8 of t6.parseCandidate(e9))
                switch (r8.kind) {
                  case "arbitrary":
                    break;
                  case "static":
                  case "functional":
                    if (n6.params.replace(/-\*$/, "") === r8.root)
                      throw new Error(`You cannot \`@apply\` the \`${e9}\` utility here because it creates a circular dependency.`);
                }
          }), new Error(`Circular dependency detected:

${N2([e7])}
Relies on:

${N2([n6])}`);
        }
        c5.add(e7);
        for (let t7 of a5.get(e7))
          for (let n6 of i5.get(t7))
            r6.push(e7), d5(n6, r6), r6.pop();
        l5.add(e7), c5.delete(e7), s5.push(e7);
      }
    }
    for (let e7 of o4)
      d5(e7);
    for (let e7 of s5)
      "nodes" in e7 && k2(e7.nodes, (e8) => {
        if ("at-rule" !== e8.kind || "@apply" !== e8.name)
          return;
        let r6 = e8.params.split(/(\s+)/g), n6 = {}, o5 = 0;
        for (let [e9, t7] of r6.entries())
          e9 % 2 == 0 && (n6[t7] = o5), o5 += t7.length;
        {
          let r7 = ot2(Object.keys(n6), t6, { respectImportant: false, onInvalidCandidate: (e9) => {
            if (t6.theme.prefix && !e9.startsWith(t6.theme.prefix))
              throw new Error(`Cannot apply unprefixed utility class \`${e9}\`. Did you mean \`${t6.theme.prefix}:${e9}\`?`);
            if (t6.invalidCandidates.has(e9))
              throw new Error(`Cannot apply utility class \`${e9}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
            let r8 = q2(e9, ":");
            if (r8.length > 1) {
              let n7 = r8.pop();
              if (t6.candidatesToCss([n7])[0]) {
                let n8 = t6.candidatesToCss(r8.map((e10) => `${e10}:[--tw-variant-check:1]`)), o7 = r8.filter((e10, t7) => null === n8[t7]);
                if (o7.length > 0) {
                  if (1 === o7.length)
                    throw new Error(`Cannot apply utility class \`${e9}\` because the ${o7.map((e10) => `\`${e10}\``)} variant does not exist.`);
                  {
                    let t7 = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
                    throw new Error(`Cannot apply utility class \`${e9}\` because the ${t7.format(o7.map((e10) => `\`${e10}\``))} variants do not exist.`);
                  }
                }
              }
            }
            throw 0 === t6.theme.size ? new Error(`Cannot apply unknown utility class \`${e9}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${e9}\``);
          } }), o6 = e8.src, a6 = r7.astNodes.map((e9) => {
            let t7 = r7.nodeSorting.get(e9)?.candidate, a7 = t7 ? n6[t7] : void 0;
            if (e9 = V2(e9), !o6 || !t7 || void 0 === a7)
              return k2([e9], (e10) => {
                e10.src = o6;
              }), e9;
            let i7 = [o6[0], o6[1], o6[2]];
            return i7[1] += 7 + a7, i7[2] = i7[1] + t7.length, k2([e9], (e10) => {
              e10.src = i7;
            }), e9;
          }), i6 = [];
          for (let e9 of a6)
            if ("rule" === e9.kind)
              for (let t7 of e9.nodes)
                i6.push(t7);
            else
              i6.push(e9);
          return w3.Replace(i6);
        }
      });
    return r5;
  }
  function* ut2(e6, t6) {
    for (let r5 of e6.params.split(/\s+/g))
      for (let e7 of t6.parseCandidate(r5))
        switch (e7.kind) {
          case "arbitrary":
            break;
          case "static":
          case "functional":
            yield e7.root;
        }
  }
  async function dt2(e6, r5, n5, o4 = 0, a5 = false) {
    let i5 = 0, l5 = [];
    return k2(e6, (e7) => {
      if ("at-rule" === e7.kind && ("@import" === e7.name || "@reference" === e7.name)) {
        let s5 = function(e8) {
          let t6, r6 = null, n6 = null, o5 = null;
          for (let a6 = 0; a6 < e8.length; a6++) {
            let i6 = e8[a6];
            if ("separator" !== i6.kind) {
              if ("word" === i6.kind && !t6) {
                if (!i6.value || '"' !== i6.value[0] && "'" !== i6.value[0])
                  return null;
                t6 = i6.value.slice(1, -1);
                continue;
              }
              if ("function" === i6.kind && "url" === i6.value.toLowerCase() || !t6)
                return null;
              if (("word" === i6.kind || "function" === i6.kind) && "layer" === i6.value.toLowerCase()) {
                if (r6)
                  return null;
                if (o5)
                  throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
                r6 = "nodes" in i6 ? h4(i6.nodes) : "";
                continue;
              }
              if ("function" === i6.kind && "supports" === i6.value.toLowerCase()) {
                if (o5)
                  return null;
                o5 = h4(i6.nodes);
                continue;
              }
              n6 = h4(e8.slice(a6));
              break;
            }
          }
          return t6 ? { uri: t6, layer: r6, media: n6, supports: o5 } : null;
        }(m4(e7.params));
        if (null === s5)
          return;
        "@reference" === e7.name && (s5.media = "reference"), i5 |= 2;
        let { uri: c5, layer: u5, media: d5, supports: f5 } = s5;
        if (c5.startsWith("data:") || c5.startsWith("http://") || c5.startsWith("https://"))
          return;
        let p5 = j2({}, []);
        return l5.push((async () => {
          if (o4 > 100)
            throw new Error(`Exceeded maximum recursion depth while resolving \`${c5}\` in \`${r5}\`)`);
          let i6 = await n5(c5, r5), l6 = t5(i6.content, { from: a5 ? i6.path : void 0 });
          await dt2(l6, i6.base, n5, o4 + 1, a5), p5.nodes = function(e8, t6, r6, n6, o5) {
            let a6 = t6;
            if (null !== r6) {
              let t7 = A2("@layer", r6, a6);
              t7.src = e8.src, a6 = [t7];
            }
            if (null !== n6) {
              let t7 = A2("@media", n6, a6);
              t7.src = e8.src, a6 = [t7];
            }
            if (null !== o5) {
              let t7 = A2("@supports", "(" === o5[0] ? o5 : `(${o5})`, a6);
              t7.src = e8.src, a6 = [t7];
            }
            return a6;
          }(e7, [j2({ base: i6.base }, l6)], u5, d5, f5);
        })()), w3.ReplaceSkip(p5);
      }
    }), l5.length > 0 && await Promise.all(l5), i5;
  }
  function ft2(e6, t6 = null) {
    return Array.isArray(e6) && 2 === e6.length && "object" == typeof e6[1] && null !== typeof e6[1] ? t6 ? e6[1][t6] ?? null : e6[0] : Array.isArray(e6) && null === t6 ? e6.join(", ") : "string" == typeof e6 && null === t6 ? e6 : null;
  }
  function pt2(e6, { theme: t6 }, r5) {
    for (let t7 of r5) {
      let r6 = mt2([t7]);
      r6 && e6.theme.clearNamespace(`--${r6}`, 4);
    }
    for (let [r6, n5] of function(e7) {
      let t7 = [];
      return gt(e7, [], (e8, r7) => {
        if (function(e9) {
          return "number" == typeof e9 || "string" == typeof e9;
        }(e8))
          return t7.push([r7, e8]), 1;
        if (function(e9) {
          if (!Array.isArray(e9) || 2 !== e9.length || "string" != typeof e9[0] && "number" != typeof e9[0] || void 0 === e9[1] || null === e9[1] || "object" != typeof e9[1])
            return false;
          for (let t8 of Reflect.ownKeys(e9[1]))
            if ("string" != typeof t8 || "string" != typeof e9[1][t8] && "number" != typeof e9[1][t8])
              return false;
          return true;
        }(e8)) {
          t7.push([r7, e8[0]]);
          for (let n6 of Reflect.ownKeys(e8[1]))
            t7.push([[...r7, `-${n6}`], e8[1][n6]]);
          return 1;
        }
        return Array.isArray(e8) && e8.every((e9) => "string" == typeof e9) ? ("fontSize" === r7[0] ? (t7.push([r7, e8[0]]), e8.length >= 2 && t7.push([[...r7, "-line-height"], e8[1]])) : t7.push([r7, e8.join(", ")]), 1) : void 0;
      }), t7;
    }(t6)) {
      if ("string" != typeof n5 && "number" != typeof n5)
        continue;
      if ("string" == typeof n5 && (n5 = n5.replace(/<alpha-value>/g, "1")), "opacity" === r6[0] && ("number" == typeof n5 || "string" == typeof n5)) {
        let e7 = "string" == typeof n5 ? parseFloat(n5) : n5;
        e7 >= 0 && e7 <= 1 && (n5 = 100 * e7 + "%");
      }
      let t7 = mt2(r6);
      t7 && e6.theme.add(`--${t7}`, "" + n5, 7);
    }
    if (Object.hasOwn(t6, "fontFamily")) {
      let r6 = 5;
      {
        let n5 = ft2(t6.fontFamily.sans);
        n5 && e6.theme.hasDefault("--font-sans") && (e6.theme.add("--default-font-family", n5, r6), e6.theme.add("--default-font-feature-settings", ft2(t6.fontFamily.sans, "fontFeatureSettings") ?? "normal", r6), e6.theme.add("--default-font-variation-settings", ft2(t6.fontFamily.sans, "fontVariationSettings") ?? "normal", r6));
      }
      {
        let n5 = ft2(t6.fontFamily.mono);
        n5 && e6.theme.hasDefault("--font-mono") && (e6.theme.add("--default-mono-font-family", n5, r6), e6.theme.add("--default-mono-font-feature-settings", ft2(t6.fontFamily.mono, "fontFeatureSettings") ?? "normal", r6), e6.theme.add("--default-mono-font-variation-settings", ft2(t6.fontFamily.mono, "fontVariationSettings") ?? "normal", r6));
      }
    }
    return t6;
  }
  var ht2 = /^[a-zA-Z0-9-_%/\.]+$/;
  function mt2(e6) {
    if ("container" === e6[0])
      return null;
    "animation" === (e6 = e6.slice())[0] && (e6[0] = "animate"), "aspectRatio" === e6[0] && (e6[0] = "aspect"), "borderRadius" === e6[0] && (e6[0] = "radius"), "boxShadow" === e6[0] && (e6[0] = "shadow"), "colors" === e6[0] && (e6[0] = "color"), "containers" === e6[0] && (e6[0] = "container"), "fontFamily" === e6[0] && (e6[0] = "font"), "fontSize" === e6[0] && (e6[0] = "text"), "letterSpacing" === e6[0] && (e6[0] = "tracking"), "lineHeight" === e6[0] && (e6[0] = "leading"), "maxWidth" === e6[0] && (e6[0] = "container"), "screens" === e6[0] && (e6[0] = "breakpoint"), "transitionTimingFunction" === e6[0] && (e6[0] = "ease");
    for (let t6 of e6)
      if (!ht2.test(t6))
        return null;
    return e6.map((e7, t6, r5) => "1" === e7 && t6 !== r5.length - 1 ? "" : e7).map((e7) => e7.replaceAll(".", "_").replace(/([a-z])([A-Z])/g, (e8, t6, r5) => `${t6}-${r5.toLowerCase()}`)).filter((t6, r5) => "DEFAULT" !== t6 || r5 !== e6.length - 1).join("-");
  }
  function gt(e6, t6 = [], r5) {
    for (let n5 of Reflect.ownKeys(e6)) {
      let o4 = e6[n5];
      if (null == o4)
        continue;
      let a5 = [...t6, n5], i5 = r5(o4, a5) ?? 0;
      if (1 !== i5) {
        if (2 === i5)
          return 2;
        if ((Array.isArray(o4) || "object" == typeof o4) && 2 === gt(o4, a5, r5))
          return 2;
      }
    }
  }
  function vt(e6) {
    return { kind: "combinator", value: e6 };
  }
  function wt2(e6, t6) {
    return { kind: "function", value: e6, nodes: t6 };
  }
  function kt2(e6) {
    return { kind: "selector", value: e6 };
  }
  function bt2(e6) {
    return { kind: "separator", value: e6 };
  }
  function yt(e6) {
    return { kind: "value", value: e6 };
  }
  function xt2(e6) {
    let t6 = "";
    for (let r5 of e6)
      switch (r5.kind) {
        case "combinator":
        case "selector":
        case "separator":
        case "value":
          t6 += r5.value;
          break;
        case "function":
          t6 += r5.value + "(" + xt2(r5.nodes) + ")";
      }
    return t6;
  }
  function $t(e6) {
    e6 = e6.replaceAll("\r\n", "\n");
    let t6, r5 = [], n5 = [], o4 = null, a5 = "";
    for (let i5 = 0; i5 < e6.length; i5++) {
      let l5 = e6.charCodeAt(i5);
      switch (l5) {
        case 44:
        case 62:
        case 10:
        case 32:
        case 43:
        case 9:
        case 126: {
          if (a5.length > 0) {
            let e7 = kt2(a5);
            o4 ? o4.nodes.push(e7) : r5.push(e7), a5 = "";
          }
          let n6 = i5, l6 = i5 + 1;
          for (; l6 < e6.length && (t6 = e6.charCodeAt(l6), 44 === t6 || 62 === t6 || 10 === t6 || 32 === t6 || 43 === t6 || 9 === t6 || 126 === t6); l6++)
            ;
          i5 = l6 - 1;
          let s5 = e6.slice(n6, l6), c5 = "," === s5.trim() ? bt2(s5) : vt(s5);
          o4 ? o4.nodes.push(c5) : r5.push(c5);
          break;
        }
        case 40: {
          let l6 = wt2(a5, []);
          if (a5 = "", ":not" !== l6.value && ":where" !== l6.value && ":has" !== l6.value && ":is" !== l6.value) {
            let n6 = i5 + 1, s5 = 0;
            for (let r6 = i5 + 1; r6 < e6.length; r6++)
              if (t6 = e6.charCodeAt(r6), 40 !== t6) {
                if (41 === t6) {
                  if (0 === s5) {
                    i5 = r6;
                    break;
                  }
                  s5--;
                }
              } else
                s5++;
            let c5 = i5;
            l6.nodes.push(yt(e6.slice(n6, c5))), a5 = "", i5 = c5, o4 ? o4.nodes.push(l6) : r5.push(l6);
            break;
          }
          o4 ? o4.nodes.push(l6) : r5.push(l6), n5.push(l6), o4 = l6;
          break;
        }
        case 41: {
          let e7 = n5.pop();
          if (a5.length > 0) {
            let t7 = kt2(a5);
            e7.nodes.push(t7), a5 = "";
          }
          o4 = n5.length > 0 ? n5[n5.length - 1] : null;
          break;
        }
        case 46:
        case 58:
        case 35:
          if (a5.length > 0) {
            let e7 = kt2(a5);
            o4 ? o4.nodes.push(e7) : r5.push(e7);
          }
          a5 = e6[i5];
          break;
        case 91: {
          if (a5.length > 0) {
            let e7 = kt2(a5);
            o4 ? o4.nodes.push(e7) : r5.push(e7);
          }
          a5 = "";
          let n6 = i5, l6 = 0;
          for (let r6 = i5 + 1; r6 < e6.length; r6++)
            if (t6 = e6.charCodeAt(r6), 91 !== t6) {
              if (93 === t6) {
                if (0 === l6) {
                  i5 = r6;
                  break;
                }
                l6--;
              }
            } else
              l6++;
          a5 += e6.slice(n6, i5 + 1);
          break;
        }
        case 39:
        case 34: {
          let r6 = i5;
          for (let r7 = i5 + 1; r7 < e6.length; r7++)
            if (t6 = e6.charCodeAt(r7), 92 === t6)
              r7 += 1;
            else if (t6 === l5) {
              i5 = r7;
              break;
            }
          a5 += e6.slice(r6, i5 + 1);
          break;
        }
        case 38:
        case 42:
          if (a5.length > 0) {
            let e7 = kt2(a5);
            o4 ? o4.nodes.push(e7) : r5.push(e7), a5 = "";
          }
          o4 ? o4.nodes.push(kt2(e6[i5])) : r5.push(kt2(e6[i5]));
          break;
        case 92:
          a5 += e6[i5] + e6[i5 + 1], i5 += 1;
          break;
        default:
          a5 += e6[i5];
      }
    }
    return a5.length > 0 && r5.push(kt2(a5)), r5;
  }
  function At2(e6) {
    let t6 = [];
    for (let r5 of q2(e6, ".")) {
      if (!r5.includes("[")) {
        t6.push(r5);
        continue;
      }
      let e7 = 0;
      for (; ; ) {
        let n5 = r5.indexOf("[", e7), o4 = r5.indexOf("]", n5);
        if (-1 === n5 || -1 === o4)
          break;
        n5 > e7 && t6.push(r5.slice(e7, n5)), t6.push(r5.slice(n5 + 1, o4)), e7 = o4 + 1;
      }
      e7 <= r5.length - 1 && t6.push(r5.slice(e7));
    }
    return t6;
  }
  function zt2(e6) {
    if ("[object Object]" !== Object.prototype.toString.call(e6))
      return false;
    let t6 = Object.getPrototypeOf(e6);
    return null === t6 || null === Object.getPrototypeOf(t6);
  }
  function St(e6, t6, r5, n5 = []) {
    for (let o4 of t6)
      if (null != o4)
        for (let t7 of Reflect.ownKeys(o4)) {
          n5.push(t7);
          let a5 = r5(e6[t7], o4[t7], n5);
          void 0 !== a5 ? e6[t7] = a5 : zt2(e6[t7]) && zt2(o4[t7]) ? e6[t7] = St({}, [e6[t7], o4[t7]], r5, n5) : e6[t7] = o4[t7], n5.pop();
        }
    return e6;
  }
  function Ct2(e6, t6, r5) {
    return function(n5, o4) {
      let a5 = n5.lastIndexOf("/"), l5 = null;
      -1 !== a5 && (l5 = n5.slice(a5 + 1).trim(), n5 = n5.slice(0, a5).trim());
      let s5 = (() => {
        let o5 = At2(n5), [a6, l6] = function(e7, t7) {
          if (1 === t7.length && t7[0].startsWith("--"))
            return [e7.get([t7[0]]), e7.getOptions(t7[0])];
          let r6 = mt2(t7), n6 = /* @__PURE__ */ new Map(), o6 = new u4(() => /* @__PURE__ */ new Map()), a7 = e7.namespace(`--${r6}`);
          if (0 === a7.size)
            return [null, 0];
          let i5 = /* @__PURE__ */ new Map();
          for (let [t8, l8] of a7) {
            if (!t8 || !t8.includes("--")) {
              n6.set(t8, l8), i5.set(t8, e7.getOptions(t8 ? `--${r6}-${t8}` : `--${r6}`));
              continue;
            }
            let a8 = t8.indexOf("--"), s8 = t8.slice(0, a8), c6 = t8.slice(a8 + 2);
            c6 = c6.replace(/-([a-z])/g, (e8, t9) => t9.toUpperCase()), o6.get("" === s8 ? null : s8).set(c6, [l8, e7.getOptions(`--${r6}${t8}`)]);
          }
          let l7 = e7.getOptions(`--${r6}`);
          for (let [e8, t8] of o6) {
            let r7 = n6.get(e8);
            if ("string" != typeof r7)
              continue;
            let o7 = {}, a8 = {};
            for (let [e9, [r8, n7]] of t8)
              o7[e9] = r8, a8[e9] = n7;
            n6.set(e8, [r7, o7]), i5.set(e8, [l7, a8]);
          }
          let s7 = {}, c5 = {};
          for (let [e8, t8] of n6)
            Tt2(s7, [e8 ?? "DEFAULT"], t8);
          for (let [e8, t8] of i5)
            Tt2(c5, [e8 ?? "DEFAULT"], t8);
          return "DEFAULT" === t7[t7.length - 1] ? [s7?.DEFAULT ?? null, c5.DEFAULT ?? 0] : "DEFAULT" in s7 && 1 === Object.keys(s7).length ? [s7.DEFAULT, c5.DEFAULT ?? 0] : (s7.__CSS_VALUES__ = c5, [s7, c5]);
        }(e6.theme, o5), s6 = r5(jt2(t6() ?? {}, o5) ?? null);
        if ("string" == typeof s6 && (s6 = s6.replace("<alpha-value>", "1")), "object" != typeof a6)
          return "object" != typeof l6 && 4 & l6 ? s6 ?? a6 : a6;
        if (null !== s6 && "object" == typeof s6 && !Array.isArray(s6)) {
          let e7 = St({}, [s6], (e8, t7) => t7);
          if (null === a6 && Object.hasOwn(s6, "__CSS_VALUES__")) {
            let t7 = {};
            for (let r6 in s6.__CSS_VALUES__)
              t7[r6] = s6[r6], delete e7[r6];
            a6 = t7;
          }
          for (let t7 in a6)
            "__CSS_VALUES__" !== t7 && (4 & s6?.__CSS_VALUES__?.[t7] && void 0 !== jt2(e7, t7.split("-")) || (e7[i4(t7)] = a6[t7]));
          return e7;
        }
        if (Array.isArray(a6) && Array.isArray(l6) && Array.isArray(s6)) {
          let e7 = a6[0], t7 = a6[1];
          4 & l6[0] && (e7 = s6[0] ?? e7);
          for (let e8 of Object.keys(t7))
            4 & l6[1][e8] && (t7[e8] = s6[1][e8] ?? t7[e8]);
          return [e7, t7];
        }
        return a6 ?? s6;
      })();
      return l5 && "string" == typeof s5 && (s5 = We(s5, l5)), s5 ?? o4;
    };
  }
  function jt2(e6, t6) {
    for (let r5 = 0; r5 < t6.length; ++r5) {
      let n5 = t6[r5];
      if (void 0 !== e6?.[n5]) {
        if ("string" == typeof e6)
          return;
        e6 = e6[n5];
      } else {
        if (void 0 === t6[r5 + 1])
          return;
        t6[r5 + 1] = `${n5}-${t6[r5 + 1]}`;
      }
    }
    return e6;
  }
  function Tt2(e6, t6, r5) {
    for (let r6 of t6.slice(0, -1))
      void 0 === e6[r6] && (e6[r6] = {}), e6 = e6[r6];
    e6[t6[t6.length - 1]] = r5;
  }
  var Vt2 = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function Kt({ designSystem: e6, ast: t6, resolvedConfig: r5, featuresRef: n5, referenceMode: o4, src: a5 }) {
    let i5 = { addBase(r6) {
      if (o4)
        return;
      let i6 = Et2(r6);
      n5.current |= Ze(i6, e6);
      let l5 = A2("@layer", "base", i6);
      k2([l5], (e7) => {
        e7.src = a5;
      }), t6.push(l5);
    }, addVariant(t7, r6) {
      if (!Ge.test(t7))
        throw new Error(`\`addVariant('${t7}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
      if ("string" == typeof r6) {
        if (r6.includes(":merge("))
          return;
      } else if (Array.isArray(r6)) {
        if (r6.some((e7) => e7.includes(":merge(")))
          return;
      } else if ("object" == typeof r6) {
        let e7 = function(t8, r7) {
          return Object.entries(t8).some(([t9, n6]) => t9.includes(r7) || "object" == typeof n6 && e7(n6, r7));
        };
        if (e7(r6, ":merge("))
          return;
      }
      "string" == typeof r6 || Array.isArray(r6) ? e6.variants.static(t7, (e7) => {
        e7.nodes = Nt2(r6, e7.nodes);
      }, { compounds: Xe("string" == typeof r6 ? [r6] : r6) }) : "object" == typeof r6 && e6.variants.fromAst(t7, Et2(r6), e6);
    }, matchVariant(t7, r6, n6) {
      function o5(e7, t8, n7) {
        return Nt2(r6(e7, { modifier: t8?.value ?? null }), n7);
      }
      try {
        let e7 = r6("a", { modifier: null });
        if ("string" == typeof e7 && e7.includes(":merge("))
          return;
        if (Array.isArray(e7) && e7.some((e8) => e8.includes(":merge(")))
          return;
      } catch {
      }
      let a6 = Object.keys(n6?.values ?? {});
      e6.variants.group(() => {
        e6.variants.functional(t7, (e7, t8) => {
          if (!t8.value)
            return n6?.values && "DEFAULT" in n6.values ? void (e7.nodes = o5(n6.values.DEFAULT, t8.modifier, e7.nodes)) : null;
          if ("arbitrary" === t8.value.kind)
            e7.nodes = o5(t8.value.value, t8.modifier, e7.nodes);
          else {
            if ("named" !== t8.value.kind || !n6?.values)
              return null;
            {
              let r7 = n6.values[t8.value.value];
              if ("string" != typeof r7)
                return null;
              e7.nodes = o5(r7, t8.modifier, e7.nodes);
            }
          }
        });
      }, (e7, t8) => {
        if ("functional" !== e7.kind || "functional" !== t8.kind)
          return 0;
        let r7 = e7.value ? e7.value.value : "DEFAULT", o6 = t8.value ? t8.value.value : "DEFAULT", i6 = n6?.values?.[r7] ?? r7, l5 = n6?.values?.[o6] ?? o6;
        if (n6 && "function" == typeof n6.sort)
          return n6.sort({ value: i6, modifier: e7.modifier?.value ?? null }, { value: l5, modifier: t8.modifier?.value ?? null });
        let s5 = a6.indexOf(r7), c5 = a6.indexOf(o6);
        return s5 = -1 === s5 ? a6.length : s5, c5 = -1 === c5 ? a6.length : c5, s5 !== c5 ? s5 - c5 : i6 < l5 ? -1 : 1;
      }), e6.variants.suggest(t7, () => Object.keys(n6?.values ?? {}).filter((e7) => "DEFAULT" !== e7));
    }, addUtilities(r6) {
      let i6 = (r6 = Array.isArray(r6) ? r6 : [r6]).flatMap((e7) => Object.entries(e7));
      i6 = i6.flatMap(([e7, t7]) => q2(e7, ",").map((e8) => [e8.trim(), t7]));
      let l5 = new u4(() => []);
      for (let [e7, r7] of i6) {
        if (e7.startsWith("@keyframes ")) {
          if (!o4) {
            let n7 = z2(e7, Et2(r7));
            k2([n7], (e8) => {
              e8.src = a5;
            }), t6.push(n7);
          }
          continue;
        }
        let n6 = $t(e7), i7 = false;
        if (k2(n6, (e8) => {
          if ("selector" === e8.kind && "." === e8.value[0] && Vt2.test(e8.value.slice(1))) {
            let t7 = e8.value;
            e8.value = "&";
            let o5 = xt2(n6), a6 = t7.slice(1), s5 = "&" === o5 ? Et2(r7) : [z2(o5, Et2(r7))];
            return l5.get(a6).push(...s5), i7 = true, void (e8.value = t7);
          }
          if ("function" === e8.kind && ":not" === e8.value)
            return w3.Skip;
        }), !i7)
          throw new Error(`\`addUtilities({ '${e7}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
      }
      for (let [t7, r7] of l5)
        e6.theme.prefix && k2(r7, (t8) => {
          if ("rule" === t8.kind) {
            let r8 = $t(t8.selector);
            k2(r8, (t9) => {
              "selector" === t9.kind && "." === t9.value[0] && (t9.value = `.${e6.theme.prefix}\\:${t9.value.slice(1)}`);
            }), t8.selector = xt2(r8);
          }
        }), e6.utilities.static(t7, (o5) => {
          let a6 = r7.map(V2);
          return Ot2(a6, t7, o5.raw), n5.current |= ct2(a6, e6), a6;
        });
    }, matchUtilities(t7, r6) {
      let o5 = r6?.type ? Array.isArray(r6?.type) ? r6.type : [r6.type] : ["any"];
      for (let [a6, i6] of Object.entries(t7)) {
        let t8 = function({ negative: t9 }) {
          return (l5) => {
            if ("arbitrary" === l5.value?.kind && o5.length > 0 && !o5.includes("any") && (l5.value.dataType && !o5.includes(l5.value.dataType) || !l5.value.dataType && !ce(l5.value.value, o5)))
              return;
            let s5, c5 = o5.includes("color"), u5 = null, d5 = false;
            {
              let e7 = r6?.values ?? {};
              c5 && (e7 = Object.assign({ inherit: "inherit", transparent: "transparent", current: "currentcolor" }, e7)), l5.value ? "arbitrary" === l5.value.kind ? u5 = l5.value.value : l5.value.fraction && e7[l5.value.fraction] ? (u5 = e7[l5.value.fraction], d5 = true) : e7[l5.value.value] ? u5 = e7[l5.value.value] : e7.__BARE_VALUE__ && (u5 = e7.__BARE_VALUE__(l5.value) ?? null, d5 = (null !== l5.value.fraction && u5?.includes("/")) ?? false) : u5 = e7.DEFAULT ?? null;
            }
            if (null === u5)
              return;
            {
              let e7 = r6?.modifiers ?? null;
              s5 = l5.modifier ? "any" === e7 || "arbitrary" === l5.modifier.kind ? l5.modifier.value : e7?.[l5.modifier.value] ? e7[l5.modifier.value] : c5 && !Number.isNaN(Number(l5.modifier.value)) ? `${l5.modifier.value}%` : null : null;
            }
            if (l5.modifier && null === s5 && !d5)
              return "arbitrary" === l5.value?.kind ? null : void 0;
            c5 && null !== s5 && (u5 = We(u5, s5)), t9 && (u5 = `calc(${u5} * -1)`);
            let f5 = Et2(i6(u5, { modifier: s5 }));
            return Ot2(f5, a6, l5.raw), n5.current |= ct2(f5, e6), f5;
          };
        };
        if (!Vt2.test(a6))
          throw new Error(`\`matchUtilities({ '${a6}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
        r6?.supportsNegativeValues && e6.utilities.functional(`-${a6}`, t8({ negative: true }), { types: o5 }), e6.utilities.functional(a6, t8({ negative: false }), { types: o5 }), e6.utilities.suggest(a6, () => {
          let e7 = r6?.values ?? {}, t9 = new Set(Object.keys(e7));
          t9.delete("__BARE_VALUE__"), t9.delete("__CSS_VALUES__"), t9.has("DEFAULT") && (t9.delete("DEFAULT"), t9.add(null));
          let n6 = r6?.modifiers ?? {}, o6 = "any" === n6 ? [] : Object.keys(n6);
          return [{ supportsNegative: r6?.supportsNegativeValues ?? false, values: Array.from(t9), modifiers: o6 }];
        });
      }
    }, addComponents(e7, t7) {
      this.addUtilities(e7, t7);
    }, matchComponents(e7, t7) {
      this.matchUtilities(e7, t7);
    }, theme: Ct2(e6, () => r5.theme ?? {}, (e7) => e7), prefix: (e7) => e7, config(e7, t7) {
      let n6 = r5;
      if (!e7)
        return n6;
      let o5 = At2(e7);
      for (let e8 = 0; e8 < o5.length; ++e8) {
        let r6 = o5[e8];
        if (void 0 === n6[r6])
          return t7;
        n6 = n6[r6];
      }
      return n6 ?? t7;
    } };
    return i5.addComponents = i5.addComponents.bind(i5), i5.matchComponents = i5.matchComponents.bind(i5), i5;
  }
  function Et2(e6) {
    let t6 = [], r5 = (e6 = Array.isArray(e6) ? e6 : [e6]).flatMap((e7) => Object.entries(e7));
    for (let [e7, n5] of r5)
      if (null != n5 && false !== n5)
        if ("object" != typeof n5) {
          if (!e7.startsWith("--")) {
            if ("@slot" === n5) {
              t6.push(z2(e7, [A2("@slot")]));
              continue;
            }
            e7 = e7.replace(/([A-Z])/g, "-$1").toLowerCase();
          }
          t6.push(S4(e7, String(n5)));
        } else if (Array.isArray(n5))
          for (let r6 of n5)
            "string" == typeof r6 ? t6.push(S4(e7, r6)) : t6.push(z2(e7, Et2(r6)));
        else
          t6.push(z2(e7, Et2(n5)));
    return t6;
  }
  function Nt2(e6, r5) {
    return ("string" == typeof e6 ? [e6] : e6).flatMap((e7) => {
      if (e7.trim().endsWith("}")) {
        let n5 = t5(e7.replace("}", "{@slot}}"));
        return et2(n5, r5), n5;
      }
      return z2(e7, r5);
    });
  }
  function Ot2(e6, t6, r5) {
    k2(e6, (e7) => {
      if ("rule" === e7.kind) {
        let n5 = $t(e7.selector);
        k2(n5, (e8) => {
          "selector" === e8.kind && e8.value === `.${t6}` && (e8.value = `.${a4(r5)}`);
        }), e7.selector = xt2(n5);
      }
    });
  }
  function Ft2(e6, t6) {
    for (let r5 of function(e7) {
      let t7 = [];
      if ("keyframes" in e7.theme)
        for (let [r6, n5] of Object.entries(e7.theme.keyframes))
          t7.push(A2("@keyframes", r6, Et2(n5)));
      return t7;
    }(t6))
      e6.theme.addKeyframes(r5);
  }
  var Ut = { inherit: "inherit", current: "currentcolor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "oklch(98.4% 0.003 247.858)", 100: "oklch(96.8% 0.007 247.896)", 200: "oklch(92.9% 0.013 255.508)", 300: "oklch(86.9% 0.022 252.894)", 400: "oklch(70.4% 0.04 256.788)", 500: "oklch(55.4% 0.046 257.417)", 600: "oklch(44.6% 0.043 257.281)", 700: "oklch(37.2% 0.044 257.287)", 800: "oklch(27.9% 0.041 260.031)", 900: "oklch(20.8% 0.042 265.755)", 950: "oklch(12.9% 0.042 264.695)" }, gray: { 50: "oklch(98.5% 0.002 247.839)", 100: "oklch(96.7% 0.003 264.542)", 200: "oklch(92.8% 0.006 264.531)", 300: "oklch(87.2% 0.01 258.338)", 400: "oklch(70.7% 0.022 261.325)", 500: "oklch(55.1% 0.027 264.364)", 600: "oklch(44.6% 0.03 256.802)", 700: "oklch(37.3% 0.034 259.733)", 800: "oklch(27.8% 0.033 256.848)", 900: "oklch(21% 0.034 264.665)", 950: "oklch(13% 0.028 261.692)" }, zinc: { 50: "oklch(98.5% 0 0)", 100: "oklch(96.7% 0.001 286.375)", 200: "oklch(92% 0.004 286.32)", 300: "oklch(87.1% 0.006 286.286)", 400: "oklch(70.5% 0.015 286.067)", 500: "oklch(55.2% 0.016 285.938)", 600: "oklch(44.2% 0.017 285.786)", 700: "oklch(37% 0.013 285.805)", 800: "oklch(27.4% 0.006 286.033)", 900: "oklch(21% 0.006 285.885)", 950: "oklch(14.1% 0.005 285.823)" }, neutral: { 50: "oklch(98.5% 0 0)", 100: "oklch(97% 0 0)", 200: "oklch(92.2% 0 0)", 300: "oklch(87% 0 0)", 400: "oklch(70.8% 0 0)", 500: "oklch(55.6% 0 0)", 600: "oklch(43.9% 0 0)", 700: "oklch(37.1% 0 0)", 800: "oklch(26.9% 0 0)", 900: "oklch(20.5% 0 0)", 950: "oklch(14.5% 0 0)" }, stone: { 50: "oklch(98.5% 0.001 106.423)", 100: "oklch(97% 0.001 106.424)", 200: "oklch(92.3% 0.003 48.717)", 300: "oklch(86.9% 0.005 56.366)", 400: "oklch(70.9% 0.01 56.259)", 500: "oklch(55.3% 0.013 58.071)", 600: "oklch(44.4% 0.011 73.639)", 700: "oklch(37.4% 0.01 67.558)", 800: "oklch(26.8% 0.007 34.298)", 900: "oklch(21.6% 0.006 56.043)", 950: "oklch(14.7% 0.004 49.25)" }, red: { 50: "oklch(97.1% 0.013 17.38)", 100: "oklch(93.6% 0.032 17.717)", 200: "oklch(88.5% 0.062 18.334)", 300: "oklch(80.8% 0.114 19.571)", 400: "oklch(70.4% 0.191 22.216)", 500: "oklch(63.7% 0.237 25.331)", 600: "oklch(57.7% 0.245 27.325)", 700: "oklch(50.5% 0.213 27.518)", 800: "oklch(44.4% 0.177 26.899)", 900: "oklch(39.6% 0.141 25.723)", 950: "oklch(25.8% 0.092 26.042)" }, orange: { 50: "oklch(98% 0.016 73.684)", 100: "oklch(95.4% 0.038 75.164)", 200: "oklch(90.1% 0.076 70.697)", 300: "oklch(83.7% 0.128 66.29)", 400: "oklch(75% 0.183 55.934)", 500: "oklch(70.5% 0.213 47.604)", 600: "oklch(64.6% 0.222 41.116)", 700: "oklch(55.3% 0.195 38.402)", 800: "oklch(47% 0.157 37.304)", 900: "oklch(40.8% 0.123 38.172)", 950: "oklch(26.6% 0.079 36.259)" }, amber: { 50: "oklch(98.7% 0.022 95.277)", 100: "oklch(96.2% 0.059 95.617)", 200: "oklch(92.4% 0.12 95.746)", 300: "oklch(87.9% 0.169 91.605)", 400: "oklch(82.8% 0.189 84.429)", 500: "oklch(76.9% 0.188 70.08)", 600: "oklch(66.6% 0.179 58.318)", 700: "oklch(55.5% 0.163 48.998)", 800: "oklch(47.3% 0.137 46.201)", 900: "oklch(41.4% 0.112 45.904)", 950: "oklch(27.9% 0.077 45.635)" }, yellow: { 50: "oklch(98.7% 0.026 102.212)", 100: "oklch(97.3% 0.071 103.193)", 200: "oklch(94.5% 0.129 101.54)", 300: "oklch(90.5% 0.182 98.111)", 400: "oklch(85.2% 0.199 91.936)", 500: "oklch(79.5% 0.184 86.047)", 600: "oklch(68.1% 0.162 75.834)", 700: "oklch(55.4% 0.135 66.442)", 800: "oklch(47.6% 0.114 61.907)", 900: "oklch(42.1% 0.095 57.708)", 950: "oklch(28.6% 0.066 53.813)" }, lime: { 50: "oklch(98.6% 0.031 120.757)", 100: "oklch(96.7% 0.067 122.328)", 200: "oklch(93.8% 0.127 124.321)", 300: "oklch(89.7% 0.196 126.665)", 400: "oklch(84.1% 0.238 128.85)", 500: "oklch(76.8% 0.233 130.85)", 600: "oklch(64.8% 0.2 131.684)", 700: "oklch(53.2% 0.157 131.589)", 800: "oklch(45.3% 0.124 130.933)", 900: "oklch(40.5% 0.101 131.063)", 950: "oklch(27.4% 0.072 132.109)" }, green: { 50: "oklch(98.2% 0.018 155.826)", 100: "oklch(96.2% 0.044 156.743)", 200: "oklch(92.5% 0.084 155.995)", 300: "oklch(87.1% 0.15 154.449)", 400: "oklch(79.2% 0.209 151.711)", 500: "oklch(72.3% 0.219 149.579)", 600: "oklch(62.7% 0.194 149.214)", 700: "oklch(52.7% 0.154 150.069)", 800: "oklch(44.8% 0.119 151.328)", 900: "oklch(39.3% 0.095 152.535)", 950: "oklch(26.6% 0.065 152.934)" }, emerald: { 50: "oklch(97.9% 0.021 166.113)", 100: "oklch(95% 0.052 163.051)", 200: "oklch(90.5% 0.093 164.15)", 300: "oklch(84.5% 0.143 164.978)", 400: "oklch(76.5% 0.177 163.223)", 500: "oklch(69.6% 0.17 162.48)", 600: "oklch(59.6% 0.145 163.225)", 700: "oklch(50.8% 0.118 165.612)", 800: "oklch(43.2% 0.095 166.913)", 900: "oklch(37.8% 0.077 168.94)", 950: "oklch(26.2% 0.051 172.552)" }, teal: { 50: "oklch(98.4% 0.014 180.72)", 100: "oklch(95.3% 0.051 180.801)", 200: "oklch(91% 0.096 180.426)", 300: "oklch(85.5% 0.138 181.071)", 400: "oklch(77.7% 0.152 181.912)", 500: "oklch(70.4% 0.14 182.503)", 600: "oklch(60% 0.118 184.704)", 700: "oklch(51.1% 0.096 186.391)", 800: "oklch(43.7% 0.078 188.216)", 900: "oklch(38.6% 0.063 188.416)", 950: "oklch(27.7% 0.046 192.524)" }, cyan: { 50: "oklch(98.4% 0.019 200.873)", 100: "oklch(95.6% 0.045 203.388)", 200: "oklch(91.7% 0.08 205.041)", 300: "oklch(86.5% 0.127 207.078)", 400: "oklch(78.9% 0.154 211.53)", 500: "oklch(71.5% 0.143 215.221)", 600: "oklch(60.9% 0.126 221.723)", 700: "oklch(52% 0.105 223.128)", 800: "oklch(45% 0.085 224.283)", 900: "oklch(39.8% 0.07 227.392)", 950: "oklch(30.2% 0.056 229.695)" }, sky: { 50: "oklch(97.7% 0.013 236.62)", 100: "oklch(95.1% 0.026 236.824)", 200: "oklch(90.1% 0.058 230.902)", 300: "oklch(82.8% 0.111 230.318)", 400: "oklch(74.6% 0.16 232.661)", 500: "oklch(68.5% 0.169 237.323)", 600: "oklch(58.8% 0.158 241.966)", 700: "oklch(50% 0.134 242.749)", 800: "oklch(44.3% 0.11 240.79)", 900: "oklch(39.1% 0.09 240.876)", 950: "oklch(29.3% 0.066 243.157)" }, blue: { 50: "oklch(97% 0.014 254.604)", 100: "oklch(93.2% 0.032 255.585)", 200: "oklch(88.2% 0.059 254.128)", 300: "oklch(80.9% 0.105 251.813)", 400: "oklch(70.7% 0.165 254.624)", 500: "oklch(62.3% 0.214 259.815)", 600: "oklch(54.6% 0.245 262.881)", 700: "oklch(48.8% 0.243 264.376)", 800: "oklch(42.4% 0.199 265.638)", 900: "oklch(37.9% 0.146 265.522)", 950: "oklch(28.2% 0.091 267.935)" }, indigo: { 50: "oklch(96.2% 0.018 272.314)", 100: "oklch(93% 0.034 272.788)", 200: "oklch(87% 0.065 274.039)", 300: "oklch(78.5% 0.115 274.713)", 400: "oklch(67.3% 0.182 276.935)", 500: "oklch(58.5% 0.233 277.117)", 600: "oklch(51.1% 0.262 276.966)", 700: "oklch(45.7% 0.24 277.023)", 800: "oklch(39.8% 0.195 277.366)", 900: "oklch(35.9% 0.144 278.697)", 950: "oklch(25.7% 0.09 281.288)" }, violet: { 50: "oklch(96.9% 0.016 293.756)", 100: "oklch(94.3% 0.029 294.588)", 200: "oklch(89.4% 0.057 293.283)", 300: "oklch(81.1% 0.111 293.571)", 400: "oklch(70.2% 0.183 293.541)", 500: "oklch(60.6% 0.25 292.717)", 600: "oklch(54.1% 0.281 293.009)", 700: "oklch(49.1% 0.27 292.581)", 800: "oklch(43.2% 0.232 292.759)", 900: "oklch(38% 0.189 293.745)", 950: "oklch(28.3% 0.141 291.089)" }, purple: { 50: "oklch(97.7% 0.014 308.299)", 100: "oklch(94.6% 0.033 307.174)", 200: "oklch(90.2% 0.063 306.703)", 300: "oklch(82.7% 0.119 306.383)", 400: "oklch(71.4% 0.203 305.504)", 500: "oklch(62.7% 0.265 303.9)", 600: "oklch(55.8% 0.288 302.321)", 700: "oklch(49.6% 0.265 301.924)", 800: "oklch(43.8% 0.218 303.724)", 900: "oklch(38.1% 0.176 304.987)", 950: "oklch(29.1% 0.149 302.717)" }, fuchsia: { 50: "oklch(97.7% 0.017 320.058)", 100: "oklch(95.2% 0.037 318.852)", 200: "oklch(90.3% 0.076 319.62)", 300: "oklch(83.3% 0.145 321.434)", 400: "oklch(74% 0.238 322.16)", 500: "oklch(66.7% 0.295 322.15)", 600: "oklch(59.1% 0.293 322.896)", 700: "oklch(51.8% 0.253 323.949)", 800: "oklch(45.2% 0.211 324.591)", 900: "oklch(40.1% 0.17 325.612)", 950: "oklch(29.3% 0.136 325.661)" }, pink: { 50: "oklch(97.1% 0.014 343.198)", 100: "oklch(94.8% 0.028 342.258)", 200: "oklch(89.9% 0.061 343.231)", 300: "oklch(82.3% 0.12 346.018)", 400: "oklch(71.8% 0.202 349.761)", 500: "oklch(65.6% 0.241 354.308)", 600: "oklch(59.2% 0.249 0.584)", 700: "oklch(52.5% 0.223 3.958)", 800: "oklch(45.9% 0.187 3.815)", 900: "oklch(40.8% 0.153 2.432)", 950: "oklch(28.4% 0.109 3.907)" }, rose: { 50: "oklch(96.9% 0.015 12.422)", 100: "oklch(94.1% 0.03 12.58)", 200: "oklch(89.2% 0.058 10.001)", 300: "oklch(81% 0.117 11.638)", 400: "oklch(71.2% 0.194 13.428)", 500: "oklch(64.5% 0.246 16.439)", 600: "oklch(58.6% 0.253 17.585)", 700: "oklch(51.4% 0.222 16.935)", 800: "oklch(45.5% 0.188 13.697)", 900: "oklch(41% 0.159 10.272)", 950: "oklch(27.1% 0.105 12.094)" } };
  function Wt2(e6) {
    return { __BARE_VALUE__: e6 };
  }
  var Rt2 = Wt2((e6) => {
    if (Ae(e6.value))
      return e6.value;
  }), Dt2 = Wt2((e6) => {
    if (Ae(e6.value))
      return `${e6.value}%`;
  }), _t2 = Wt2((e6) => {
    if (Ae(e6.value))
      return `${e6.value}px`;
  }), Lt2 = Wt2((e6) => {
    if (Ae(e6.value))
      return `${e6.value}ms`;
  }), Mt2 = Wt2((e6) => {
    if (Ae(e6.value))
      return `${e6.value}deg`;
  }), Bt2 = Wt2((e6) => {
    if (null === e6.fraction)
      return;
    let [t6, r5] = q2(e6.fraction, "/");
    return Ae(t6) && Ae(r5) ? e6.fraction : void 0;
  }), It2 = Wt2((e6) => {
    if (Ae(Number(e6.value)))
      return `repeat(${e6.value}, minmax(0, 1fr))`;
  }), Pt2 = { accentColor: ({ theme: e6 }) => e6("colors"), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...Bt2 }, backdropBlur: ({ theme: e6 }) => e6("blur"), backdropBrightness: ({ theme: e6 }) => ({ ...e6("brightness"), ...Dt2 }), backdropContrast: ({ theme: e6 }) => ({ ...e6("contrast"), ...Dt2 }), backdropGrayscale: ({ theme: e6 }) => ({ ...e6("grayscale"), ...Dt2 }), backdropHueRotate: ({ theme: e6 }) => ({ ...e6("hueRotate"), ...Mt2 }), backdropInvert: ({ theme: e6 }) => ({ ...e6("invert"), ...Dt2 }), backdropOpacity: ({ theme: e6 }) => ({ ...e6("opacity"), ...Dt2 }), backdropSaturate: ({ theme: e6 }) => ({ ...e6("saturate"), ...Dt2 }), backdropSepia: ({ theme: e6 }) => ({ ...e6("sepia"), ...Dt2 }), backgroundColor: ({ theme: e6 }) => e6("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e6 }) => e6("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e6 }) => ({ DEFAULT: "currentcolor", ...e6("colors") }), borderOpacity: ({ theme: e6 }) => e6("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e6 }) => e6("spacing"), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e6 }) => e6("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2", ...Dt2 }, caretColor: ({ theme: e6 }) => e6("colors"), colors: () => ({ ...Ut }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", ...Rt2 }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2", ...Dt2 }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e6 }) => e6("borderColor"), divideOpacity: ({ theme: e6 }) => e6("borderOpacity"), divideWidth: ({ theme: e6 }) => ({ ...e6("borderWidth"), ..._t2 }), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e6 }) => e6("colors"), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e6 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", ...e6("spacing") }), flexGrow: { 0: "0", DEFAULT: "1", ...Rt2 }, flexShrink: { 0: "0", DEFAULT: "1", ...Rt2 }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e6 }) => e6("spacing"), gradientColorStops: ({ theme: e6 }) => e6("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%", ...Dt2 }, grayscale: { 0: "0", DEFAULT: "100%", ...Dt2 }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Rt2 }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Rt2 }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Rt2 }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...Rt2 }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...It2 }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...It2 }, height: ({ theme: e6 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e6("spacing") }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg", ...Mt2 }, inset: ({ theme: e6 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e6("spacing") }), invert: { 0: "0", DEFAULT: "100%", ...Dt2 }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e6 }) => ({ auto: "auto", ...e6("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...Rt2 }, maxHeight: ({ theme: e6 }) => ({ none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e6("spacing") }), maxWidth: ({ theme: e6 }) => ({ none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e6("spacing") }), minHeight: ({ theme: e6 }) => ({ full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e6("spacing") }), minWidth: ({ theme: e6 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e6("spacing") }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1", ...Dt2 }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", ...Rt2 }, outlineColor: ({ theme: e6 }) => e6("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, padding: ({ theme: e6 }) => e6("spacing"), placeholderColor: ({ theme: e6 }) => e6("colors"), placeholderOpacity: ({ theme: e6 }) => e6("opacity"), ringColor: ({ theme: e6 }) => ({ DEFAULT: "currentcolor", ...e6("colors") }), ringOffsetColor: ({ theme: e6 }) => e6("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, ringOpacity: ({ theme: e6 }) => ({ DEFAULT: "0.5", ...e6("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg", ...Mt2 }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...Dt2 }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", ...Dt2 }, screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" }, scrollMargin: ({ theme: e6 }) => e6("spacing"), scrollPadding: ({ theme: e6 }) => e6("spacing"), sepia: { 0: "0", DEFAULT: "100%", ...Dt2 }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", ...Mt2 }, space: ({ theme: e6 }) => e6("spacing"), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e6 }) => ({ none: "none", ...e6("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2", ...Rt2 }, supports: {}, data: {}, textColor: ({ theme: e6 }) => e6("colors"), textDecorationColor: ({ theme: e6 }) => e6("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, textIndent: ({ theme: e6 }) => e6("spacing"), textOpacity: ({ theme: e6 }) => e6("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ..._t2 }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...Lt2 }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...Lt2 }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e6 }) => ({ "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e6("spacing") }), size: ({ theme: e6 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e6("spacing") }), width: ({ theme: e6 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content", ...e6("spacing") }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", ...Rt2 } };
  function qt2(e6) {
    return { theme: { ...Pt2, colors: ({ theme: e7 }) => e7("color", {}), extend: { fontSize: ({ theme: e7 }) => ({ ...e7("text", {}) }), boxShadow: ({ theme: e7 }) => ({ ...e7("shadow", {}) }), animation: ({ theme: e7 }) => ({ ...e7("animate", {}) }), aspectRatio: ({ theme: e7 }) => ({ ...e7("aspect", {}) }), borderRadius: ({ theme: e7 }) => ({ ...e7("radius", {}) }), screens: ({ theme: e7 }) => ({ ...e7("breakpoint", {}) }), letterSpacing: ({ theme: e7 }) => ({ ...e7("tracking", {}) }), lineHeight: ({ theme: e7 }) => ({ ...e7("leading", {}) }), transitionDuration: { DEFAULT: e6.get(["--default-transition-duration"]) ?? null }, transitionTimingFunction: { DEFAULT: e6.get(["--default-transition-timing-function"]) ?? null }, maxWidth: ({ theme: e7 }) => ({ ...e7("container", {}) }) } } };
  }
  var Ht2 = { blocklist: [], future: {}, prefix: "", important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
  function Zt2(e6, t6) {
    let r5 = { design: e6, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(Ht2) };
    for (let e7 of t6)
      Gt2(r5, e7);
    for (let e7 of r5.configs)
      "darkMode" in e7 && void 0 !== e7.darkMode && (r5.result.darkMode = e7.darkMode ?? null), "prefix" in e7 && void 0 !== e7.prefix && (r5.result.prefix = e7.prefix ?? ""), "blocklist" in e7 && void 0 !== e7.blocklist && (r5.result.blocklist = e7.blocklist ?? []), "important" in e7 && void 0 !== e7.important && (r5.result.important = e7.important ?? false);
    let n5 = function(e7) {
      let t7 = /* @__PURE__ */ new Set(), r6 = Ct2(e7.design, () => e7.theme, o4), n6 = Object.assign(r6, { theme: r6, colors: Ut });
      function o4(e8) {
        return "function" == typeof e8 ? e8(n6) ?? null : e8 ?? null;
      }
      for (let r7 of e7.configs) {
        let n7 = r7.theme ?? {}, o5 = n7.extend ?? {};
        for (let e8 in n7)
          "extend" !== e8 && t7.add(e8);
        Object.assign(e7.theme, n7);
        for (let t8 in o5)
          e7.extend[t8] ??= [], e7.extend[t8].push(o5[t8]);
      }
      delete e7.theme.extend;
      for (let t8 in e7.extend) {
        let r7 = [e7.theme[t8], ...e7.extend[t8]];
        e7.theme[t8] = () => St({}, r7.map(o4), Yt2);
      }
      for (let t8 in e7.theme)
        e7.theme[t8] = o4(e7.theme[t8]);
      if (e7.theme.screens && "object" == typeof e7.theme.screens)
        for (let t8 of Object.keys(e7.theme.screens)) {
          let r7 = e7.theme.screens[t8];
          r7 && "object" == typeof r7 && ("raw" in r7 || "max" in r7 || "min" in r7 && (e7.theme.screens[t8] = r7.min));
        }
      return t7;
    }(r5);
    return { resolvedConfig: { ...r5.result, content: r5.content, theme: r5.theme, plugins: r5.plugins }, replacedThemeKeys: n5 };
  }
  function Yt2(e6, t6) {
    return Array.isArray(e6) && zt2(e6[0]) ? e6.concat(t6) : Array.isArray(t6) && zt2(t6[0]) && zt2(e6) ? [e6, ...t6] : Array.isArray(t6) ? t6 : void 0;
  }
  function Gt2(e6, { config: t6, base: r5, path: n5, reference: o4, src: a5 }) {
    let i5 = [];
    for (let e7 of t6.plugins ?? [])
      "__isOptionsFunction" in e7 ? i5.push({ ...e7(), reference: o4, src: a5 }) : "handler" in e7 ? i5.push({ ...e7, reference: o4, src: a5 }) : i5.push({ handler: e7, reference: o4, src: a5 });
    if (Array.isArray(t6.presets) && 0 === t6.presets.length)
      throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let i6 of t6.presets ?? [])
      Gt2(e6, { path: n5, base: r5, config: i6, reference: o4, src: a5 });
    for (let t7 of i5)
      e6.plugins.push(t7), t7.config && Gt2(e6, { path: n5, base: r5, config: t7.config, reference: !!t7.reference, src: t7.src ?? a5 });
    let l5 = t6.content ?? [], s5 = Array.isArray(l5) ? l5 : l5.files;
    for (let t7 of s5)
      e6.content.files.push("object" == typeof t7 ? t7 : { base: r5, pattern: t7 });
    e6.configs.push(t6);
  }
  function Jt2(e6, t6) {
    let r5 = e6.theme.container || {};
    if ("object" != typeof r5 || null === r5)
      return;
    let n5 = function({ center: e7, padding: t7, screens: r6 }, n6) {
      let o4 = [], a5 = null;
      if (e7 && o4.push(S4("margin-inline", "auto")), ("string" == typeof t7 || "object" == typeof t7 && null !== t7 && "DEFAULT" in t7) && o4.push(S4("padding-inline", "string" == typeof t7 ? t7 : t7.DEFAULT)), "object" == typeof r6 && null !== r6) {
        a5 = /* @__PURE__ */ new Map();
        let e8 = Array.from(n6.theme.namespace("--breakpoint").entries());
        if (e8.sort((e9, t8) => ae(e9[1], t8[1], "asc")), e8.length > 0) {
          let [t8] = e8[0];
          o4.push(A2("@media", `(width >= --theme(--breakpoint-${t8}))`, [S4("max-width", "none")]));
        }
        for (let [e9, t8] of Object.entries(r6)) {
          if ("object" == typeof t8) {
            if (!("min" in t8))
              continue;
            t8 = t8.min;
          }
          a5.set(e9, A2("@media", `(width >= ${t8})`, [S4("max-width", t8)]));
        }
      }
      if ("object" == typeof t7 && null !== t7) {
        let e8 = Object.entries(t7).filter(([e9]) => "DEFAULT" !== e9).map(([e9, t8]) => [e9, n6.theme.resolveValue(e9, ["--breakpoint"]), t8]).filter(Boolean);
        e8.sort((e9, t8) => ae(e9[1], t8[1], "asc"));
        for (let [t8, , r7] of e8)
          if (a5 && a5.has(t8))
            a5.get(t8).nodes.push(S4("padding-inline", r7));
          else {
            if (a5)
              continue;
            o4.push(A2("@media", `(width >= theme(--breakpoint-${t8}))`, [S4("padding-inline", r7)]));
          }
      }
      if (a5)
        for (let [, e8] of a5)
          o4.push(e8);
      return o4;
    }(r5, t6);
    0 !== n5.length && t6.utilities.static("container", () => n5.map(V2));
  }
  function Xt2({ addVariant: e6, config: t6 }) {
    let r5 = t6("darkMode", null), [n5, o4 = ".dark"] = Array.isArray(r5) ? r5 : [r5];
    if ("variant" === n5) {
      let e7;
      if (Array.isArray(o4) || "function" == typeof o4 ? e7 = o4 : "string" == typeof o4 && (e7 = [o4]), Array.isArray(e7))
        for (let t7 of e7)
          ".dark" === t7 ? (n5 = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : t7.includes("&") || (n5 = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
      o4 = e7;
    }
    null === n5 || ("selector" === n5 ? e6("dark", `&:where(${o4}, ${o4} *)`) : "media" === n5 ? e6("dark", "@media (prefers-color-scheme: dark)") : "variant" === n5 ? e6("dark", o4) : "class" === n5 && e6("dark", `&:is(${o4} *)`));
  }
  function Qt2(e6) {
    return (Array.isArray(e6) ? e6 : [e6]).map((e7) => "string" == typeof e7 ? { min: e7 } : e7 && "object" == typeof e7 ? e7 : null).map((e7) => {
      if (null === e7)
        return null;
      if ("raw" in e7)
        return e7.raw;
      let t6 = "";
      return void 0 !== e7.max && (t6 += `${e7.max} >= `), t6 += "width", void 0 !== e7.min && (t6 += ` >= ${e7.min}`), `(${t6})`;
    }).filter(Boolean).join(", ");
  }
  var er = /^[a-z]+$/;
  async function tr({ designSystem: e6, base: t6, ast: r5, loadModule: n5, sources: o4 }) {
    let a5 = 0, i5 = [], l5 = [];
    k2(r5, (e7, t7) => {
      if ("at-rule" !== e7.kind)
        return;
      let r6 = K2(t7);
      if ("@plugin" === e7.name) {
        if (null !== r6.parent)
          throw new Error("`@plugin` cannot be nested.");
        let t8 = e7.params.slice(1, -1);
        if (0 === t8.length)
          throw new Error("`@plugin` must have a path.");
        let n6 = {};
        for (let t9 of e7.nodes ?? []) {
          if ("declaration" !== t9.kind)
            throw new Error(`Unexpected \`@plugin\` option:

${N2([t9])}

\`@plugin\` options must be a flat list of declarations.`);
          if (void 0 === t9.value)
            continue;
          let e8 = q2(t9.value, ",").map((e9) => {
            if ("null" === (e9 = e9.trim()))
              return null;
            if ("true" === e9)
              return true;
            if ("false" === e9)
              return false;
            if (!Number.isNaN(Number(e9)))
              return Number(e9);
            if ('"' === e9[0] && '"' === e9[e9.length - 1] || "'" === e9[0] && "'" === e9[e9.length - 1])
              return e9.slice(1, -1);
            if ("{" === e9[0] && "}" === e9[e9.length - 1])
              throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${N2([t9]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
            return e9;
          });
          n6[t9.property] = 1 === e8.length ? e8[0] : e8;
        }
        return i5.push([{ id: t8, base: r6.context.base, reference: !!r6.context.reference, src: e7.src }, Object.keys(n6).length > 0 ? n6 : null]), a5 |= 4, w3.Replace([]);
      }
      if ("@config" === e7.name) {
        if (e7.nodes.length > 0)
          throw new Error("`@config` cannot have a body.");
        if (null !== r6.parent)
          throw new Error("`@config` cannot be nested.");
        return l5.push({ id: e7.params.slice(1, -1), base: r6.context.base, reference: !!r6.context.reference, src: e7.src }), a5 |= 4, w3.Replace([]);
      }
    }), function(e7) {
      for (let [t7, r6] of [["t", "top"], ["tr", "top right"], ["r", "right"], ["br", "bottom right"], ["b", "bottom"], ["bl", "bottom left"], ["l", "left"], ["tl", "top left"]])
        e7.utilities.suggest(`bg-gradient-to-${t7}`, () => []), e7.utilities.static(`bg-gradient-to-${t7}`, () => [S4("--tw-gradient-position", `to ${r6} in oklab`), S4("background-image", "linear-gradient(var(--tw-gradient-stops))")]);
      e7.utilities.suggest("bg-left-top", () => []), e7.utilities.static("bg-left-top", () => [S4("background-position", "left top")]), e7.utilities.suggest("bg-right-top", () => []), e7.utilities.static("bg-right-top", () => [S4("background-position", "right top")]), e7.utilities.suggest("bg-left-bottom", () => []), e7.utilities.static("bg-left-bottom", () => [S4("background-position", "left bottom")]), e7.utilities.suggest("bg-right-bottom", () => []), e7.utilities.static("bg-right-bottom", () => [S4("background-position", "right bottom")]), e7.utilities.suggest("object-left-top", () => []), e7.utilities.static("object-left-top", () => [S4("object-position", "left top")]), e7.utilities.suggest("object-right-top", () => []), e7.utilities.static("object-right-top", () => [S4("object-position", "right top")]), e7.utilities.suggest("object-left-bottom", () => []), e7.utilities.static("object-left-bottom", () => [S4("object-position", "left bottom")]), e7.utilities.suggest("object-right-bottom", () => []), e7.utilities.static("object-right-bottom", () => [S4("object-position", "right bottom")]), e7.utilities.suggest("max-w-screen", () => []), e7.utilities.functional("max-w-screen", (t7) => {
        if (!t7.value || "arbitrary" === t7.value.kind)
          return;
        let r6 = e7.theme.resolve(t7.value.value, ["--breakpoint"]);
        return r6 ? [S4("max-width", r6)] : void 0;
      }), e7.utilities.suggest("overflow-ellipsis", () => []), e7.utilities.static("overflow-ellipsis", () => [S4("text-overflow", "ellipsis")]), e7.utilities.suggest("decoration-slice", () => []), e7.utilities.static("decoration-slice", () => [S4("-webkit-box-decoration-break", "slice"), S4("box-decoration-break", "slice")]), e7.utilities.suggest("decoration-clone", () => []), e7.utilities.static("decoration-clone", () => [S4("-webkit-box-decoration-break", "clone"), S4("box-decoration-break", "clone")]), e7.utilities.suggest("flex-shrink", () => []), e7.utilities.functional("flex-shrink", (e8) => {
        if (!e8.modifier) {
          if (!e8.value)
            return [S4("flex-shrink", "1")];
          if ("arbitrary" === e8.value.kind)
            return [S4("flex-shrink", e8.value.value)];
          if (Ae(e8.value.value))
            return [S4("flex-shrink", e8.value.value)];
        }
      }), e7.utilities.suggest("flex-grow", () => []), e7.utilities.functional("flex-grow", (e8) => {
        if (!e8.modifier) {
          if (!e8.value)
            return [S4("flex-grow", "1")];
          if ("arbitrary" === e8.value.kind)
            return [S4("flex-grow", e8.value.value)];
          if (Ae(e8.value.value))
            return [S4("flex-grow", e8.value.value)];
        }
      }), e7.utilities.suggest("order-none", () => []), e7.utilities.static("order-none", () => [S4("order", "0")]), e7.utilities.suggest("break-words", () => []), e7.utilities.static("break-words", () => [S4("overflow-wrap", "break-word")]);
    }(e6);
    let s5 = e6.resolveThemeValue;
    if (e6.resolveThemeValue = function(n6, i6) {
      return n6.startsWith("--") ? s5(n6, i6) : (a5 |= rr({ designSystem: e6, base: t6, ast: r5, sources: o4, configs: [], pluginDetails: [] }), e6.resolveThemeValue(n6, i6));
    }, !i5.length && !l5.length)
      return 0;
    let [c5, u5] = await Promise.all([Promise.all(l5.map(async ({ id: e7, base: t7, reference: r6, src: o5 }) => {
      let a6 = await n5(e7, t7, "config");
      return { path: e7, base: a6.base, config: a6.module, reference: r6, src: o5 };
    })), Promise.all(i5.map(async ([{ id: e7, base: t7, reference: r6, src: o5 }, a6]) => {
      let i6 = await n5(e7, t7, "plugin");
      return { path: e7, base: i6.base, plugin: i6.module, options: a6, reference: r6, src: o5 };
    }))]);
    return a5 |= rr({ designSystem: e6, base: t6, ast: r5, sources: o4, configs: c5, pluginDetails: u5 }), a5;
  }
  function rr({ designSystem: e6, base: t6, ast: r5, sources: n5, configs: o4, pluginDetails: a5 }) {
    let i5 = 0, l5 = [...a5.map((e7) => {
      if (!e7.options)
        return { config: { plugins: [e7.plugin] }, base: e7.base, reference: e7.reference, src: e7.src };
      if ("__isOptionsFunction" in e7.plugin)
        return { config: { plugins: [e7.plugin(e7.options)] }, base: e7.base, reference: e7.reference, src: e7.src };
      throw new Error(`The plugin "${e7.path}" does not accept options`);
    }), ...o4], { resolvedConfig: s5 } = Zt2(e6, [{ config: qt2(e6.theme), base: t6, reference: true, src: void 0 }, ...l5, { config: { plugins: [Xt2] }, base: t6, reference: true, src: void 0 }]), { resolvedConfig: c5, replacedThemeKeys: u5 } = Zt2(e6, l5), d5 = { designSystem: e6, ast: r5, resolvedConfig: s5, featuresRef: { set current(e7) {
      i5 |= e7;
    } } }, f5 = Kt({ ...d5, referenceMode: false, src: void 0 }), p5 = e6.resolveThemeValue;
    e6.resolveThemeValue = function(e7, t7) {
      if ("-" === e7[0] && "-" === e7[1])
        return p5(e7, t7);
      let r6 = f5.theme(e7, void 0);
      return Array.isArray(r6) && 2 === r6.length ? r6[0] : Array.isArray(r6) ? r6.join(", ") : "object" == typeof r6 && null !== r6 && "DEFAULT" in r6 ? r6.DEFAULT : "string" == typeof r6 ? r6 : void 0;
    };
    for (let { handler: e7, reference: t7, src: r6 } of s5.plugins) {
      e7(Kt({ ...d5, referenceMode: t7 ?? false, src: r6 }));
    }
    if (pt2(e6, c5, u5), Ft2(e6, c5), function(e7, t7) {
      let r6 = e7.theme.aria || {}, n6 = e7.theme.supports || {}, o5 = e7.theme.data || {};
      if (Object.keys(r6).length > 0) {
        let e8 = t7.variants.get("aria"), n7 = e8?.applyFn, o6 = e8?.compounds;
        t7.variants.functional("aria", (e9, t8) => {
          let o7 = t8.value;
          return o7 && "named" === o7.kind && o7.value in r6 ? n7?.(e9, { ...t8, value: { kind: "arbitrary", value: r6[o7.value] } }) : n7?.(e9, t8);
        }, { compounds: o6 });
      }
      if (Object.keys(n6).length > 0) {
        let e8 = t7.variants.get("supports"), r7 = e8?.applyFn, o6 = e8?.compounds;
        t7.variants.functional("supports", (e9, t8) => {
          let o7 = t8.value;
          return o7 && "named" === o7.kind && o7.value in n6 ? r7?.(e9, { ...t8, value: { kind: "arbitrary", value: n6[o7.value] } }) : r7?.(e9, t8);
        }, { compounds: o6 });
      }
      if (Object.keys(o5).length > 0) {
        let e8 = t7.variants.get("data"), r7 = e8?.applyFn, n7 = e8?.compounds;
        t7.variants.functional("data", (e9, t8) => {
          let n8 = t8.value;
          return n8 && "named" === n8.kind && n8.value in o5 ? r7?.(e9, { ...t8, value: { kind: "arbitrary", value: o5[n8.value] } }) : r7?.(e9, t8);
        }, { compounds: n7 });
      }
    }(c5, e6), function(e7, t7) {
      let r6 = e7.theme.screens || {}, n6 = t7.variants.get("min")?.order ?? 0, o5 = [];
      for (let [e8, a6] of Object.entries(r6)) {
        let r7 = function(r8) {
          t7.variants.static(e8, (e9) => {
            e9.nodes = [A2("@media", c6, e9.nodes)];
          }, { order: r8 });
        }, i6 = t7.variants.get(e8), l6 = t7.theme.resolveValue(e8, ["--breakpoint"]);
        if (i6 && l6 && !t7.theme.hasDefault(`--breakpoint-${e8}`))
          continue;
        let s6 = true;
        "string" == typeof a6 && (s6 = false);
        let c6 = Qt2(a6);
        s6 ? o5.push(r7) : r7(n6);
      }
      if (0 !== o5.length) {
        for (let [, e8] of t7.variants.variants)
          e8.order > n6 && (e8.order += o5.length);
        t7.variants.compareFns = new Map(Array.from(t7.variants.compareFns).map(([e8, t8]) => (e8 > n6 && (e8 += o5.length), [e8, t8])));
        for (let [e8, t8] of o5.entries())
          t8(n6 + e8 + 1);
      }
    }(c5, e6), Jt2(c5, e6), !e6.theme.prefix && s5.prefix) {
      if (s5.prefix.endsWith("-") && (s5.prefix = s5.prefix.slice(0, -1), console.warn(`The prefix "${s5.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !er.test(s5.prefix))
        throw new Error(`The prefix "${s5.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
      e6.theme.prefix = s5.prefix;
    }
    if (!e6.important && true === s5.important && (e6.important = true), "string" == typeof s5.important) {
      let e7 = s5.important;
      k2(r5, (t7, r6) => {
        if ("at-rule" !== t7.kind || "@tailwind" !== t7.name || "utilities" !== t7.params)
          return;
        let n6 = K2(r6);
        return "rule" === n6.parent?.kind && n6.parent.selector === e7 ? w3.Stop : w3.ReplaceStop($4(e7, [t7]));
      });
    }
    for (let t7 of s5.blocklist)
      e6.invalidCandidates.add(t7);
    for (let e7 of s5.content.files) {
      if ("raw" in e7)
        throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(e7, null, 2)}

This feature is not currently supported.`);
      let t7 = false;
      "!" == e7.pattern[0] && (t7 = true, e7.pattern = e7.pattern.slice(1)), n5.push({ ...e7, negated: t7 });
    }
    return i5;
  }
  function nr({ ast: e6 }) {
    let t6 = new u4((e7) => function(e8) {
      let t7 = [0];
      for (let r6 = 0; r6 < e8.length; r6++)
        10 === e8.charCodeAt(r6) && t7.push(r6 + 1);
      return { find: function(e9) {
        let r6 = 0, n6 = t7.length;
        for (; n6 > 0; ) {
          let o4 = n6 >> 1, a5 = r6 + o4;
          t7[a5] <= e9 ? (r6 = a5 + 1, n6 = n6 - o4 - 1) : n6 = o4;
        }
        return r6 -= 1, { line: r6 + 1, column: e9 - t7[r6] };
      }, findOffset: function({ line: e9, column: r6 }) {
        e9 -= 1, e9 = Math.min(Math.max(e9, 0), t7.length - 1);
        let n6 = t7[e9], o4 = t7[e9 + 1] ?? n6;
        return Math.min(Math.max(n6 + r6, 0), o4);
      } };
    }(e7.code)), r5 = new u4((e7) => ({ url: e7.file, content: e7.code, ignore: false })), n5 = { file: null, sources: [], mappings: [] };
    k2(e6, (e7) => {
      if (!e7.src || !e7.dst)
        return;
      let o4 = r5.get(e7.src[0]);
      if (!o4.content)
        return;
      let a5 = t6.get(e7.src[0]), i5 = t6.get(e7.dst[0]), l5 = o4.content.slice(e7.src[1], e7.src[2]), s5 = 0;
      for (let t7 of l5.split("\n")) {
        if ("" !== t7.trim()) {
          let t8 = a5.find(e7.src[1] + s5), r6 = i5.find(e7.dst[1]);
          n5.mappings.push({ name: null, originalPosition: { source: o4, ...t8 }, generatedPosition: r6 });
        }
        s5 += t7.length, s5 += 1;
      }
      let c5 = a5.find(e7.src[2]), u5 = i5.find(e7.dst[2]);
      n5.mappings.push({ name: null, originalPosition: { source: o4, ...c5 }, generatedPosition: u5 });
    });
    for (let e7 of t6.keys())
      n5.sources.push(r5.get(e7));
    return n5.mappings.sort((e7, t7) => e7.generatedPosition.line - t7.generatedPosition.line || e7.generatedPosition.column - t7.generatedPosition.column || (e7.originalPosition?.line ?? 0) - (t7.originalPosition?.line ?? 0) || (e7.originalPosition?.column ?? 0) - (t7.originalPosition?.column ?? 0)), n5;
  }
  var or = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
  function ar(e6) {
    let t6 = e6.indexOf("{");
    if (-1 === t6)
      return [e6];
    let r5 = [], n5 = e6.slice(0, t6), o4 = e6.slice(t6), a5 = 0, i5 = o4.lastIndexOf("}");
    for (let e7 = 0; e7 < o4.length; e7++) {
      let t7 = o4[e7];
      if ("{" === t7)
        a5++;
      else if ("}" === t7 && (a5--, 0 === a5)) {
        i5 = e7;
        break;
      }
    }
    if (-1 === i5)
      throw new Error(`The pattern \`${e6}\` is not balanced.`);
    let l5, s5 = o4.slice(1, i5), c5 = o4.slice(i5 + 1);
    l5 = function(e7) {
      return or.test(e7);
    }(s5) ? function(e7) {
      let t7 = e7.match(or);
      if (!t7)
        return [e7];
      let [, r6, n6, o5] = t7, a6 = o5 ? parseInt(o5, 10) : void 0, i6 = [];
      if (/^-?\d+$/.test(r6) && /^-?\d+$/.test(n6)) {
        let e8 = parseInt(r6, 10), t8 = parseInt(n6, 10);
        if (void 0 === a6 && (a6 = e8 <= t8 ? 1 : -1), 0 === a6)
          throw new Error("Step cannot be zero in sequence expansion.");
        let o6 = e8 < t8;
        o6 && a6 < 0 && (a6 = -a6), !o6 && a6 > 0 && (a6 = -a6);
        for (let r7 = e8; o6 ? r7 <= t8 : r7 >= t8; r7 += a6)
          i6.push(r7.toString());
      }
      return i6;
    }(s5) : q2(s5, ","), l5 = l5.flatMap((e7) => ar(e7));
    let u5 = ar(c5);
    for (let e7 of u5)
      for (let t7 of l5)
        r5.push(n5 + t7 + e7);
    return r5;
  }
  var ir = /^[a-z]+$/;
  function lr() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function sr() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  async function cr(e6, { base: t6 = "", from: r5, loadModule: n5 = lr, loadStylesheet: o4 = sr } = {}) {
    let l5 = 0;
    e6 = [j2({ base: t6 }, e6)], l5 |= await dt2(e6, t6, o4, 0, void 0 !== r5);
    let s5 = null, u5 = new c4(), d5 = /* @__PURE__ */ new Map(), f5 = /* @__PURE__ */ new Map(), p5 = [], g5 = null, v4 = null, b5 = [], y5 = [], x3 = [], C3 = [], E5 = null;
    k2(e6, (e7, t7) => {
      if ("at-rule" !== e7.kind)
        return;
      let r6 = K2(t7);
      if ("@tailwind" === e7.name && ("utilities" === e7.params || e7.params.startsWith("utilities"))) {
        if (null !== v4)
          return w3.Replace([]);
        if (r6.context.reference)
          return w3.Replace([]);
        let t8 = q2(e7.params, " ");
        for (let e8 of t8)
          if (e8.startsWith("source(")) {
            let t9 = e8.slice(7, -1);
            if ("none" === t9) {
              E5 = t9;
              continue;
            }
            if ('"' === t9[0] && '"' !== t9[t9.length - 1] || "'" === t9[0] && "'" !== t9[t9.length - 1] || "'" !== t9[0] && '"' !== t9[0])
              throw new Error("`source(\u2026)` paths must be quoted.");
            E5 = { base: r6.context.sourceBase ?? r6.context.base, pattern: t9.slice(1, -1) };
          }
        v4 = e7, l5 |= 16;
      }
      if ("@utility" === e7.name) {
        if (null !== r6.parent)
          throw new Error("`@utility` cannot be nested.");
        if (0 === e7.nodes.length)
          throw new Error(`\`@utility ${e7.params}\` is empty. Utilities should include at least one property.`);
        let t8 = function(e8) {
          let t9 = e8.params;
          return Ne.test(t9) ? (r7) => {
            let n6 = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
            k2(e8.nodes, (e9) => {
              if ("declaration" !== e9.kind || !e9.value || !e9.value.includes("--value(") && !e9.value.includes("--modifier("))
                return;
              let t10 = m4(e9.value);
              k2(t10, (e10) => {
                if ("function" !== e10.kind)
                  return;
                if (!("--spacing" !== e10.value || n6["--modifier"].usedSpacingNumber && n6["--value"].usedSpacingNumber))
                  return k2(e10.nodes, (e11) => {
                    if ("function" !== e11.kind || "--value" !== e11.value && "--modifier" !== e11.value)
                      return;
                    let t12 = e11.value;
                    for (let r8 of e11.nodes)
                      if ("word" === r8.kind) {
                        if ("integer" === r8.value)
                          n6[t12].usedSpacingInteger ||= true;
                        else if ("number" === r8.value && (n6[t12].usedSpacingNumber ||= true, n6["--modifier"].usedSpacingNumber && n6["--value"].usedSpacingNumber))
                          return w3.Stop;
                      }
                  }), w3.Continue;
                if ("--value" !== e10.value && "--modifier" !== e10.value)
                  return;
                let t11 = q2(h4(e10.nodes), ",");
                for (let [e11, r8] of t11.entries())
                  r8 = r8.replace(/\\\*/g, "*"), r8 = r8.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), r8 = r8.replace(/\s+/g, ""), r8 = r8.replace(/(-\*){2,}/g, "-*"), "-" === r8[0] && "-" === r8[1] && !r8.includes("-*") && (r8 += "-*"), t11[e11] = r8;
                e10.nodes = m4(t11.join(","));
                for (let t12 of e10.nodes)
                  if ("word" !== t12.kind || '"' !== t12.value[0] && "'" !== t12.value[0] || t12.value[0] !== t12.value[t12.value.length - 1]) {
                    if ("word" === t12.kind && "-" === t12.value[0] && "-" === t12.value[1]) {
                      let r8 = t12.value.replace(/-\*.*$/g, "");
                      n6[e10.value].themeKeys.add(r8);
                    } else if ("word" === t12.kind && ("[" !== t12.value[0] || "]" !== t12.value[t12.value.length - 1]) && !Me.includes(t12.value)) {
                      console.warn(`Unsupported bare value data type: "${t12.value}".
Only valid data types are: ${Me.map((e11) => `"${e11}"`).join(", ")}.
`);
                      let r8 = t12.value, n7 = structuredClone(e10), o5 = "\xB6";
                      k2(n7.nodes, (e11) => {
                        if ("word" === e11.kind && e11.value === r8)
                          return w3.ReplaceSkip({ kind: "word", value: o5 });
                      });
                      let a5 = "^".repeat(h4([t12]).length), i5 = h4([n7]).indexOf(o5), l6 = ["```css", h4([e10]), " ".repeat(i5) + a5, "```"].join("\n");
                      console.warn(l6);
                    }
                  } else {
                    let r8 = t12.value.slice(1, -1);
                    n6[e10.value].literals.add(r8);
                  }
              }), e9.value = h4(t10);
            }), r7.utilities.functional(t9.slice(0, -2), (t10) => {
              let n7 = V2(e8), o5 = t10.value, a5 = t10.modifier;
              if (null === o5)
                return;
              let i5 = false, l6 = false, s6 = false, c5 = false, u6 = /* @__PURE__ */ new Map(), d6 = false;
              if (k2([n7], (e9, t11) => {
                let n8 = t11.parent;
                if ("rule" !== n8?.kind && "at-rule" !== n8?.kind || "declaration" !== e9.kind || !e9.value)
                  return;
                let f6 = false, p6 = m4(e9.value);
                if (k2(p6, (t12) => {
                  if ("function" === t12.kind) {
                    if ("--value" === t12.value) {
                      i5 = true;
                      let a6 = Be(o5, t12, r7);
                      return a6 ? (l6 = true, a6.ratio ? d6 = true : u6.set(e9, n8), w3.ReplaceSkip(a6.nodes)) : (i5 ||= false, f6 = true, w3.Stop);
                    }
                    if ("--modifier" === t12.value) {
                      if (null === a5)
                        return f6 = true, w3.Stop;
                      s6 = true;
                      let e10 = Be(a5, t12, r7);
                      return e10 ? (c5 = true, w3.ReplaceSkip(e10.nodes)) : (s6 ||= false, f6 = true, w3.Stop);
                    }
                  }
                }), f6)
                  return w3.ReplaceSkip([]);
                e9.value = h4(p6);
              }), i5 && !l6 || s6 && !c5 || d6 && c5 || a5 && !d6 && !c5)
                return null;
              if (d6)
                for (let [e9, t11] of u6) {
                  let r8 = t11.nodes.indexOf(e9);
                  -1 !== r8 && t11.nodes.splice(r8, 1);
                }
              return n7.nodes;
            }), r7.utilities.suggest(t9.slice(0, -2), () => {
              let e9 = [], t10 = [];
              for (let [o5, { literals: a5, usedSpacingNumber: i5, usedSpacingInteger: l6, themeKeys: s6 }] of [[e9, n6["--value"]], [t10, n6["--modifier"]]]) {
                for (let e10 of a5)
                  o5.push(e10);
                if (i5)
                  o5.push(...Oe);
                else if (l6)
                  for (let e10 of Oe)
                    Ae(e10) && o5.push(e10);
                for (let e10 of r7.theme.keysInNamespaces(s6))
                  o5.push(e10.replace(Le, (e11, t11, r8) => `${t11}.${r8}`));
              }
              return [{ values: e9, modifiers: t10 }];
            });
          } : Ee.test(t9) ? (r7) => {
            r7.utilities.static(t9, () => e8.nodes.map(V2));
          } : null;
        }(e7);
        if (null === t8) {
          if (!e7.params.endsWith("-*")) {
            if (e7.params.endsWith("*"))
              throw new Error(`\`@utility ${e7.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
            if (e7.params.includes("*"))
              throw new Error(`\`@utility ${e7.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
          }
          throw new Error(`\`@utility ${e7.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
        }
        p5.push(t8);
      }
      if ("@source" === e7.name) {
        if (e7.nodes.length > 0)
          throw new Error("`@source` cannot have a body.");
        if (null !== r6.parent)
          throw new Error("`@source` cannot be nested.");
        let t8 = false, n6 = false, o5 = e7.params;
        if ("n" === o5[0] && o5.startsWith("not ") && (t8 = true, o5 = o5.slice(4)), "i" === o5[0] && o5.startsWith("inline(") && (n6 = true, o5 = o5.slice(7, -1)), '"' === o5[0] && '"' !== o5[o5.length - 1] || "'" === o5[0] && "'" !== o5[o5.length - 1] || "'" !== o5[0] && '"' !== o5[0])
          throw new Error("`@source` paths must be quoted.");
        let a5 = o5.slice(1, -1);
        if (n6) {
          let e8 = t8 ? C3 : x3, r7 = q2(a5, " ");
          for (let t9 of r7)
            for (let r8 of ar(t9))
              e8.push(r8);
        } else
          y5.push({ base: r6.context.base, pattern: a5, negated: t8 });
        return w3.ReplaceSkip([]);
      }
      if ("@variant" === e7.name && (null === r6.parent ? 0 === e7.nodes.length ? e7.name = "@custom-variant" : (k2(e7.nodes, (t8) => {
        if ("at-rule" === t8.kind && "@slot" === t8.name)
          return e7.name = "@custom-variant", w3.Stop;
      }), "@variant" === e7.name && b5.push(e7)) : b5.push(e7)), "@custom-variant" === e7.name) {
        if (null !== r6.parent)
          throw new Error("`@custom-variant` cannot be nested.");
        let [t8, n6] = q2(e7.params, " ");
        if (!Ge.test(t8))
          throw new Error(`\`@custom-variant ${t8}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
        if (e7.nodes.length > 0 && n6)
          throw new Error(`\`@custom-variant ${t8}\` cannot have both a selector and a body.`);
        if (0 === e7.nodes.length) {
          if (!n6)
            throw new Error(`\`@custom-variant ${t8}\` has no selector or body.`);
          let e8 = q2(n6.slice(1, -1), ",");
          if (0 === e8.length || e8.some((e9) => "" === e9.trim()))
            throw new Error(`\`@custom-variant ${t8} (${e8.join(",")})\` selector is invalid.`);
          let r7 = [], o5 = [];
          for (let t9 of e8)
            t9 = t9.trim(), "@" === t9[0] ? r7.push(t9) : o5.push(t9);
          d5.set(t8, (e9) => {
            e9.variants.static(t8, (e10) => {
              let t9 = [];
              o5.length > 0 && t9.push($4(o5.join(", "), e10.nodes));
              for (let n7 of r7)
                t9.push(z2(n7, e10.nodes));
              e10.nodes = t9;
            }, { compounds: Xe([...o5, ...r7]) });
          }), f5.set(t8, /* @__PURE__ */ new Set());
        } else {
          let r7 = /* @__PURE__ */ new Set();
          k2(e7.nodes, (e8) => {
            "at-rule" === e8.kind && "@variant" === e8.name && r7.add(e8.params);
          }), d5.set(t8, (r8) => {
            r8.variants.fromAst(t8, e7.nodes, r8);
          }), f5.set(t8, r7);
        }
        return w3.ReplaceSkip([]);
      }
      if ("@media" === e7.name) {
        let t8 = q2(e7.params, " "), n6 = [];
        for (let o5 of t8)
          if (o5.startsWith("source(")) {
            let t9 = o5.slice(7, -1);
            k2(e7.nodes, (e8) => {
              if ("at-rule" === e8.kind && "@tailwind" === e8.name && "utilities" === e8.params)
                return e8.params += ` source(${t9})`, w3.ReplaceStop([j2({ sourceBase: r6.context.base }, [e8])]);
            });
          } else if (o5.startsWith("theme(")) {
            let t9 = o5.slice(6, -1), r7 = t9.includes("reference");
            k2(e7.nodes, (e8) => {
              if ("context" !== e8.kind) {
                if ("at-rule" !== e8.kind) {
                  if (r7)
                    throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                  return w3.Continue;
                }
                if ("@theme" === e8.name)
                  return e8.params += " " + t9, w3.Skip;
              }
            });
          } else if (o5.startsWith("prefix(")) {
            let t9 = o5.slice(7, -1);
            k2(e7.nodes, (e8) => {
              if ("at-rule" === e8.kind && "@theme" === e8.name)
                return e8.params += ` prefix(${t9})`, w3.Skip;
            });
          } else
            "important" === o5 ? s5 = true : "reference" === o5 ? e7.nodes = [j2({ reference: true }, e7.nodes)] : n6.push(o5);
        if (n6.length > 0)
          e7.params = n6.join(" ");
        else if (t8.length > 0)
          return w3.Replace(e7.nodes);
        return w3.Continue;
      }
      if ("@theme" === e7.name) {
        let [t8, n6] = function(e8) {
          let t9 = 0, r7 = null;
          for (let n7 of q2(e8, " "))
            "reference" === n7 ? t9 |= 2 : "inline" === n7 ? t9 |= 1 : "default" === n7 ? t9 |= 4 : "static" === n7 ? t9 |= 8 : n7.startsWith("prefix(") && n7.endsWith(")") && (r7 = n7.slice(7, -1));
          return [t9, r7];
        }(e7.params);
        if (l5 |= 64, r6.context.reference && (t8 |= 2), n6) {
          if (!ir.test(n6))
            throw new Error(`The prefix "${n6}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
          u5.prefix = n6;
        }
        return k2(e7.nodes, (r7) => {
          if ("at-rule" === r7.kind && "@keyframes" === r7.name)
            return u5.addKeyframes(r7), w3.Skip;
          if ("comment" === r7.kind)
            return;
          if ("declaration" === r7.kind && r7.property.startsWith("--"))
            return void u5.add(i4(r7.property), r7.value ?? "", t8, r7.src);
          let n7 = N2([A2(e7.name, e7.params, [r7])]).split("\n").map((e8, t9, r8) => `${0 === t9 || t9 >= r8.length - 2 ? " " : ">"} ${e8}`).join("\n");
          throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${n7}`);
        }), g5 ? w3.ReplaceSkip([]) : (g5 = $4(":root, :host", []), g5.src = e7.src, w3.ReplaceSkip(g5));
      }
    });
    let O3 = rt2(u5);
    if (s5 && (O3.important = s5), C3.length > 0)
      for (let e7 of C3)
        O3.invalidCandidates.add(e7);
    l5 |= await tr({ designSystem: O3, base: t6, ast: e6, loadModule: n5, sources: y5 });
    for (let e7 of d5.keys())
      O3.variants.static(e7, () => {
      });
    for (let e7 of function(e8, t7) {
      let r6 = /* @__PURE__ */ new Set(), n6 = /* @__PURE__ */ new Set(), o5 = [];
      function a5(i5, l6 = []) {
        if (e8.has(i5) && !r6.has(i5)) {
          n6.has(i5) && t7.onCircularDependency?.(l6, i5), n6.add(i5);
          for (let t8 of e8.get(i5) ?? [])
            l6.push(i5), a5(t8, l6), l6.pop();
          r6.add(i5), n6.delete(i5), o5.push(i5);
        }
      }
      for (let t8 of e8.keys())
        a5(t8);
      return o5;
    }(f5, { onCircularDependency(e8, t7) {
      let r6 = N2(e8.map((r7, n6) => A2("@custom-variant", r7, [A2("@variant", e8[n6 + 1] ?? t7, [])]))).replaceAll(";", " { \u2026 }").replace(`@custom-variant ${t7} {`, `@custom-variant ${t7} { /* \u2190 */`);
      throw new Error(`Circular dependency detected in custom variants:

${r6}`);
    } }))
      d5.get(e7)?.(O3);
    for (let e7 of p5)
      e7(O3);
    if (g5) {
      let t7 = [];
      for (let [e7, r7] of O3.theme.entries()) {
        if (2 & r7.options)
          continue;
        let n6 = S4(a4(e7), r7.value);
        n6.src = r7.src, t7.push(n6);
      }
      let r6 = O3.theme.getKeyframes();
      for (let t8 of r6)
        e6.push(j2({ theme: true }, [T2([t8])]));
      g5.nodes = [j2({ theme: true }, t7)];
    }
    if (l5 |= tt2(e6, O3), l5 |= Ze(e6, O3), l5 |= ct2(e6, O3), v4) {
      let e7 = v4;
      e7.kind = "context", e7.context = {};
    }
    return k2(e6, (e7) => {
      if ("at-rule" === e7.kind)
        return "@utility" === e7.name ? w3.Replace([]) : w3.Skip;
    }), { designSystem: O3, ast: e6, sources: y5, root: E5, utilitiesNode: v4, features: l5, inlineCandidates: x3 };
  }
  async function ur(e6, r5 = {}) {
    let n5 = t5(e6, { from: r5.from }), o4 = await async function(e7, t6 = {}) {
      let { designSystem: r6, ast: n6, sources: o5, root: a6, utilitiesNode: i6, features: l5, inlineCandidates: s5 } = await cr(e7, t6);
      function c5(e8) {
        r6.invalidCandidates.add(e8);
      }
      n6.unshift(C2("! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com "));
      let u5 = /* @__PURE__ */ new Set(), d5 = null, f5 = 0, p5 = false;
      for (let e8 of s5)
        r6.invalidCandidates.has(e8) || (u5.add(e8), p5 = true);
      return { sources: o5, root: a6, features: l5, build(o6) {
        if (0 === l5)
          return e7;
        if (!i6)
          return d5 ??= E4(n6, r6, t6.polyfills), d5;
        let a7 = p5, s6 = false;
        p5 = false;
        let h5 = u5.size;
        for (let e8 of o6)
          if (!r6.invalidCandidates.has(e8))
            if ("-" === e8[0] && "-" === e8[1]) {
              let t7 = r6.theme.markUsedVariable(e8);
              a7 ||= t7, s6 ||= t7;
            } else
              u5.add(e8), a7 ||= u5.size !== h5;
        if (!a7)
          return d5 ??= E4(n6, r6, t6.polyfills), d5;
        let m5 = ot2(u5, r6, { onInvalidCandidate: c5 }).astNodes;
        return t6.from && k2(m5, (e8) => {
          e8.src ??= i6.src;
        }), s6 || f5 !== m5.length ? (f5 = m5.length, i6.nodes = m5, d5 = E4(n6, r6, t6.polyfills), d5) : (d5 ??= E4(n6, r6, t6.polyfills), d5);
      } };
    }(n5, r5), a5 = n5, i5 = e6;
    return { ...o4, build(e7) {
      let t6 = o4.build(e7);
      return t6 === a5 || (i5 = N2(t6, !!r5.from), a5 = t6), i5;
    }, buildSourceMap: () => nr({ ast: a5 }) };
  }
  var dr, fr = { index: "@layer theme, base, components, utilities;\n\n@import './theme.css' layer(theme);\n@import './preflight.css' layer(base);\n@import './utilities.css' layer(utilities);\n", preflight: "/*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 2 */\n  border: 0 solid; /* 3 */\n}\n\n/*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  tab-size: 4; /* 3 */\n  font-family: --theme(\n    --default-font-family,\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji'\n  ); /* 4 */\n  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */\n  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\n  Remove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  -webkit-text-decoration: inherit;\n  text-decoration: inherit;\n}\n\n/*\n  Add the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: --theme(\n    --default-mono-font-family,\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    'Liberation Mono',\n    'Courier New',\n    monospace\n  ); /* 1 */\n  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */\n  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\n  Add the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\n  Add the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\n  Make lists unstyled by default.\n*/\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\nbutton,\ninput,\nselect,\noptgroup,\ntextarea,\n::file-selector-button {\n  font: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  border-radius: 0; /* 2 */\n  background-color: transparent; /* 3 */\n  opacity: 1; /* 4 */\n}\n\n/*\n  Restore default font weight.\n*/\n\n:where(select:is([multiple], [size])) optgroup {\n  font-weight: bolder;\n}\n\n/*\n  Restore indentation.\n*/\n\n:where(select:is([multiple], [size])) optgroup option {\n  padding-inline-start: 20px;\n}\n\n/*\n  Restore space after button.\n*/\n\n::file-selector-button {\n  margin-inline-end: 4px;\n}\n\n/*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n::placeholder {\n  opacity: 1;\n}\n\n/*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(\u2026)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n  (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n  ::placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n}\n\n/*\n  Prevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n::-webkit-date-and-time-value {\n  min-height: 1lh; /* 1 */\n  text-align: inherit; /* 2 */\n}\n\n/*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n::-webkit-datetime-edit {\n  display: inline-flex;\n}\n\n/*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-datetime-edit,\n::-webkit-datetime-edit-year-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-minute-field,\n::-webkit-datetime-edit-second-field,\n::-webkit-datetime-edit-millisecond-field,\n::-webkit-datetime-edit-meridiem-field {\n  padding-block: 0;\n}\n\n/*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n::-webkit-calendar-picker-indicator {\n  line-height: 1;\n}\n\n/*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\nbutton,\ninput:where([type='button'], [type='reset'], [type='submit']),\n::file-selector-button {\n  appearance: button;\n}\n\n/*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n[hidden]:where(:not([hidden='until-found'])) {\n  display: none !important;\n}\n", theme: "@theme default {\n  --font-sans:\n    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji';\n  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;\n  --font-mono:\n    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',\n    monospace;\n\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n\n  --color-orange-50: oklch(98% 0.016 73.684);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n\n  --color-amber-50: oklch(98.7% 0.022 95.277);\n  --color-amber-100: oklch(96.2% 0.059 95.617);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-300: oklch(87.9% 0.169 91.605);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-amber-900: oklch(41.4% 0.112 45.904);\n  --color-amber-950: oklch(27.9% 0.077 45.635);\n\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n  --color-lime-50: oklch(98.6% 0.031 120.757);\n  --color-lime-100: oklch(96.7% 0.067 122.328);\n  --color-lime-200: oklch(93.8% 0.127 124.321);\n  --color-lime-300: oklch(89.7% 0.196 126.665);\n  --color-lime-400: oklch(84.1% 0.238 128.85);\n  --color-lime-500: oklch(76.8% 0.233 130.85);\n  --color-lime-600: oklch(64.8% 0.2 131.684);\n  --color-lime-700: oklch(53.2% 0.157 131.589);\n  --color-lime-800: oklch(45.3% 0.124 130.933);\n  --color-lime-900: oklch(40.5% 0.101 131.063);\n  --color-lime-950: oklch(27.4% 0.072 132.109);\n\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n\n  --color-emerald-50: oklch(97.9% 0.021 166.113);\n  --color-emerald-100: oklch(95% 0.052 163.051);\n  --color-emerald-200: oklch(90.5% 0.093 164.15);\n  --color-emerald-300: oklch(84.5% 0.143 164.978);\n  --color-emerald-400: oklch(76.5% 0.177 163.223);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-emerald-600: oklch(59.6% 0.145 163.225);\n  --color-emerald-700: oklch(50.8% 0.118 165.612);\n  --color-emerald-800: oklch(43.2% 0.095 166.913);\n  --color-emerald-900: oklch(37.8% 0.077 168.94);\n  --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n  --color-teal-50: oklch(98.4% 0.014 180.72);\n  --color-teal-100: oklch(95.3% 0.051 180.801);\n  --color-teal-200: oklch(91% 0.096 180.426);\n  --color-teal-300: oklch(85.5% 0.138 181.071);\n  --color-teal-400: oklch(77.7% 0.152 181.912);\n  --color-teal-500: oklch(70.4% 0.14 182.503);\n  --color-teal-600: oklch(60% 0.118 184.704);\n  --color-teal-700: oklch(51.1% 0.096 186.391);\n  --color-teal-800: oklch(43.7% 0.078 188.216);\n  --color-teal-900: oklch(38.6% 0.063 188.416);\n  --color-teal-950: oklch(27.7% 0.046 192.524);\n\n  --color-cyan-50: oklch(98.4% 0.019 200.873);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-200: oklch(91.7% 0.08 205.041);\n  --color-cyan-300: oklch(86.5% 0.127 207.078);\n  --color-cyan-400: oklch(78.9% 0.154 211.53);\n  --color-cyan-500: oklch(71.5% 0.143 215.221);\n  --color-cyan-600: oklch(60.9% 0.126 221.723);\n  --color-cyan-700: oklch(52% 0.105 223.128);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-cyan-900: oklch(39.8% 0.07 227.392);\n  --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n  --color-sky-50: oklch(97.7% 0.013 236.62);\n  --color-sky-100: oklch(95.1% 0.026 236.824);\n  --color-sky-200: oklch(90.1% 0.058 230.902);\n  --color-sky-300: oklch(82.8% 0.111 230.318);\n  --color-sky-400: oklch(74.6% 0.16 232.661);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-sky-600: oklch(58.8% 0.158 241.966);\n  --color-sky-700: oklch(50% 0.134 242.749);\n  --color-sky-800: oklch(44.3% 0.11 240.79);\n  --color-sky-900: oklch(39.1% 0.09 240.876);\n  --color-sky-950: oklch(29.3% 0.066 243.157);\n\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-400: oklch(70.7% 0.165 254.624);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-800: oklch(42.4% 0.199 265.638);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-300: oklch(78.5% 0.115 274.713);\n  --color-indigo-400: oklch(67.3% 0.182 276.935);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-800: oklch(39.8% 0.195 277.366);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n  --color-violet-50: oklch(96.9% 0.016 293.756);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-200: oklch(89.4% 0.057 293.283);\n  --color-violet-300: oklch(81.1% 0.111 293.571);\n  --color-violet-400: oklch(70.2% 0.183 293.541);\n  --color-violet-500: oklch(60.6% 0.25 292.717);\n  --color-violet-600: oklch(54.1% 0.281 293.009);\n  --color-violet-700: oklch(49.1% 0.27 292.581);\n  --color-violet-800: oklch(43.2% 0.232 292.759);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-violet-950: oklch(28.3% 0.141 291.089);\n\n  --color-purple-50: oklch(97.7% 0.014 308.299);\n  --color-purple-100: oklch(94.6% 0.033 307.174);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-300: oklch(82.7% 0.119 306.383);\n  --color-purple-400: oklch(71.4% 0.203 305.504);\n  --color-purple-500: oklch(62.7% 0.265 303.9);\n  --color-purple-600: oklch(55.8% 0.288 302.321);\n  --color-purple-700: oklch(49.6% 0.265 301.924);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-purple-900: oklch(38.1% 0.176 304.987);\n  --color-purple-950: oklch(29.1% 0.149 302.717);\n\n  --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n  --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n  --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n  --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n  --color-fuchsia-400: oklch(74% 0.238 322.16);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n  --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n  --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n  --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n  --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n  --color-pink-50: oklch(97.1% 0.014 343.198);\n  --color-pink-100: oklch(94.8% 0.028 342.258);\n  --color-pink-200: oklch(89.9% 0.061 343.231);\n  --color-pink-300: oklch(82.3% 0.12 346.018);\n  --color-pink-400: oklch(71.8% 0.202 349.761);\n  --color-pink-500: oklch(65.6% 0.241 354.308);\n  --color-pink-600: oklch(59.2% 0.249 0.584);\n  --color-pink-700: oklch(52.5% 0.223 3.958);\n  --color-pink-800: oklch(45.9% 0.187 3.815);\n  --color-pink-900: oklch(40.8% 0.153 2.432);\n  --color-pink-950: oklch(28.4% 0.109 3.907);\n\n  --color-rose-50: oklch(96.9% 0.015 12.422);\n  --color-rose-100: oklch(94.1% 0.03 12.58);\n  --color-rose-200: oklch(89.2% 0.058 10.001);\n  --color-rose-300: oklch(81% 0.117 11.638);\n  --color-rose-400: oklch(71.2% 0.194 13.428);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-rose-600: oklch(58.6% 0.253 17.585);\n  --color-rose-700: oklch(51.4% 0.222 16.935);\n  --color-rose-800: oklch(45.5% 0.188 13.697);\n  --color-rose-900: oklch(41% 0.159 10.272);\n  --color-rose-950: oklch(27.1% 0.105 12.094);\n\n  --color-slate-50: oklch(98.4% 0.003 247.858);\n  --color-slate-100: oklch(96.8% 0.007 247.896);\n  --color-slate-200: oklch(92.9% 0.013 255.508);\n  --color-slate-300: oklch(86.9% 0.022 252.894);\n  --color-slate-400: oklch(70.4% 0.04 256.788);\n  --color-slate-500: oklch(55.4% 0.046 257.417);\n  --color-slate-600: oklch(44.6% 0.043 257.281);\n  --color-slate-700: oklch(37.2% 0.044 257.287);\n  --color-slate-800: oklch(27.9% 0.041 260.031);\n  --color-slate-900: oklch(20.8% 0.042 265.755);\n  --color-slate-950: oklch(12.9% 0.042 264.695);\n\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-gray-950: oklch(13% 0.028 261.692);\n\n  --color-zinc-50: oklch(98.5% 0 0);\n  --color-zinc-100: oklch(96.7% 0.001 286.375);\n  --color-zinc-200: oklch(92% 0.004 286.32);\n  --color-zinc-300: oklch(87.1% 0.006 286.286);\n  --color-zinc-400: oklch(70.5% 0.015 286.067);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-zinc-600: oklch(44.2% 0.017 285.786);\n  --color-zinc-700: oklch(37% 0.013 285.805);\n  --color-zinc-800: oklch(27.4% 0.006 286.033);\n  --color-zinc-900: oklch(21% 0.006 285.885);\n  --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n  --color-neutral-50: oklch(98.5% 0 0);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n\n  --color-stone-50: oklch(98.5% 0.001 106.423);\n  --color-stone-100: oklch(97% 0.001 106.424);\n  --color-stone-200: oklch(92.3% 0.003 48.717);\n  --color-stone-300: oklch(86.9% 0.005 56.366);\n  --color-stone-400: oklch(70.9% 0.01 56.259);\n  --color-stone-500: oklch(55.3% 0.013 58.071);\n  --color-stone-600: oklch(44.4% 0.011 73.639);\n  --color-stone-700: oklch(37.4% 0.01 67.558);\n  --color-stone-800: oklch(26.8% 0.007 34.298);\n  --color-stone-900: oklch(21.6% 0.006 56.043);\n  --color-stone-950: oklch(14.7% 0.004 49.25);\n\n  --color-black: #000;\n  --color-white: #fff;\n\n  --spacing: 0.25rem;\n\n  --breakpoint-sm: 40rem;\n  --breakpoint-md: 48rem;\n  --breakpoint-lg: 64rem;\n  --breakpoint-xl: 80rem;\n  --breakpoint-2xl: 96rem;\n\n  --container-3xs: 16rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-4xl: 56rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --container-7xl: 80rem;\n\n  --text-xs: 0.75rem;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 0.875rem;\n  --text-sm--line-height: calc(1.25 / 0.875);\n  --text-base: 1rem;\n  --text-base--line-height: calc(1.5 / 1);\n  --text-lg: 1.125rem;\n  --text-lg--line-height: calc(1.75 / 1.125);\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --text-4xl: 2.25rem;\n  --text-4xl--line-height: calc(2.5 / 2.25);\n  --text-5xl: 3rem;\n  --text-5xl--line-height: 1;\n  --text-6xl: 3.75rem;\n  --text-6xl--line-height: 1;\n  --text-7xl: 4.5rem;\n  --text-7xl--line-height: 1;\n  --text-8xl: 6rem;\n  --text-8xl--line-height: 1;\n  --text-9xl: 8rem;\n  --text-9xl--line-height: 1;\n\n  --font-weight-thin: 100;\n  --font-weight-extralight: 200;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --font-weight-extrabold: 800;\n  --font-weight-black: 900;\n\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-4xl: 2rem;\n\n  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n  --text-shadow-sm:\n    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);\n  --text-shadow-md:\n    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);\n  --text-shadow-lg:\n    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);\n\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n  --animate-spin: spin 1s linear infinite;\n  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --animate-bounce: bounce 1s infinite;\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes ping {\n    75%,\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n\n  @keyframes pulse {\n    50% {\n      opacity: 0.5;\n    }\n  }\n\n  @keyframes bounce {\n    0%,\n    100% {\n      transform: translateY(-25%);\n      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    }\n\n    50% {\n      transform: none;\n      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    }\n  }\n\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --blur-lg: 16px;\n  --blur-xl: 24px;\n  --blur-2xl: 40px;\n  --blur-3xl: 64px;\n\n  --perspective-dramatic: 100px;\n  --perspective-near: 300px;\n  --perspective-normal: 500px;\n  --perspective-midrange: 800px;\n  --perspective-distant: 1200px;\n\n  --aspect-video: 16 / 9;\n\n  --default-transition-duration: 150ms;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --default-font-family: --theme(--font-sans, initial);\n  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);\n  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);\n  --default-mono-font-family: --theme(--font-mono, initial);\n  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);\n  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);\n}\n\n/* Deprecated */\n@theme default inline reference {\n  --blur: 8px;\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n  --radius: 0.25rem;\n  --max-width-prose: 65ch;\n}\n", utilities: "@tailwind utilities;\n" }, pr = "text/tailwindcss", hr = /* @__PURE__ */ new Set(), mr = "", gr = document.createElement("style"), vr = Promise.resolve(), wr = 1, kr = new class {
    start(e6) {
      performance.mark(`${e6} (start)`);
    }
    end(e6, t6) {
      performance.mark(`${e6} (end)`), performance.measure(e6, { start: `${e6} (start)`, end: `${e6} (end)`, detail: t6 });
    }
    hit(e6, t6) {
      performance.mark(e6, { detail: t6 });
    }
    error(e6) {
      throw performance.mark("(error)", { detail: { error: `${e6}` } }), e6;
    }
  }();
  async function br(e6, t6) {
    try {
      let r5 = function() {
        if ("tailwindcss" === e6)
          return { path: "virtual:tailwindcss/index.css", base: t6, content: fr.index };
        if ("tailwindcss/preflight" === e6 || "tailwindcss/preflight.css" === e6 || "./preflight.css" === e6)
          return { path: "virtual:tailwindcss/preflight.css", base: t6, content: fr.preflight };
        if ("tailwindcss/theme" === e6 || "tailwindcss/theme.css" === e6 || "./theme.css" === e6)
          return { path: "virtual:tailwindcss/theme.css", base: t6, content: fr.theme };
        if ("tailwindcss/utilities" === e6 || "tailwindcss/utilities.css" === e6 || "./utilities.css" === e6)
          return { path: "virtual:tailwindcss/utilities.css", base: t6, content: fr.utilities };
        throw new Error(`The browser build does not support @import for "${e6}"`);
      }();
      return kr.hit("Loaded stylesheet", { id: e6, base: t6, size: r5.content.length }), r5;
    } catch (r5) {
      throw kr.hit("Failed to load stylesheet", { id: e6, base: t6, error: r5.message ?? r5 }), r5;
    }
  }
  async function yr() {
    throw new Error("The browser build does not support plugins or config files.");
  }
  function xr(e6) {
    vr = vr.then(async function() {
      if (!dr && "full" !== e6)
        return;
      let t6 = wr++;
      kr.start(`Build #${t6} (${e6})`), "full" === e6 && await async function() {
        kr.start("Create compiler"), kr.start("Reading Stylesheets");
        let e7 = document.querySelectorAll(`style[type="${pr}"]`), t7 = "";
        for (let r5 of e7)
          Ar(r5), t7 += r5.textContent + "\n";
        if (t7.includes("@import") || (t7 = `@import "tailwindcss";${t7}`), kr.end("Reading Stylesheets", { size: t7.length, changed: mr !== t7 }), mr !== t7) {
          mr = t7, kr.start("Compile CSS");
          try {
            dr = await ur(t7, { base: "/", loadStylesheet: br, loadModule: yr });
          } finally {
            kr.end("Compile CSS"), kr.end("Create compiler");
          }
          hr.clear();
        }
      }(), kr.start("Build"), await async function(e7) {
        if (!dr)
          return;
        let t7 = /* @__PURE__ */ new Set();
        kr.start("Collect classes");
        for (let e8 of document.querySelectorAll("[class]"))
          for (let r5 of e8.classList)
            hr.has(r5) || (hr.add(r5), t7.add(r5));
        kr.end("Collect classes", { count: t7.size }), (0 !== t7.size || "incremental" !== e7) && (kr.start("Build utilities"), gr.textContent = dr.build(Array.from(t7)), kr.end("Build utilities"));
      }(e6), kr.end("Build"), kr.end(`Build #${t6} (${e6})`);
    }).catch((e7) => kr.error(e7));
  }
  var $r = new MutationObserver(() => xr("full"));
  function Ar(e6) {
    $r.observe(e6, { attributes: true, attributeFilter: ["type"], characterData: true, subtree: true, childList: true });
  }
  new MutationObserver((e6) => {
    let t6 = 0, r5 = 0;
    for (let n5 of e6) {
      for (let e7 of n5.addedNodes)
        e7.nodeType === Node.ELEMENT_NODE && "STYLE" === e7.tagName && e7.getAttribute("type") === pr && (Ar(e7), t6++);
      for (let e7 of n5.addedNodes)
        1 === e7.nodeType && e7 !== gr && r5++;
      "attributes" === n5.type && r5++;
    }
    return t6 > 0 ? xr("full") : r5 > 0 ? xr("incremental") : void 0;
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true }), xr("full"), document.head.append(gr);
})();

// virtual:lit
var t = globalThis;
var s = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var i = Symbol();
var e = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t5, s4, e5) {
    if (this._$cssResult$ = true, e5 !== i)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = s4;
  }
  get styleSheet() {
    let t5 = this.i;
    const i4 = this.t;
    if (s && void 0 === t5) {
      const s4 = void 0 !== i4 && 1 === i4.length;
      s4 && (t5 = e.get(i4)), void 0 === t5 && ((this.i = t5 = new CSSStyleSheet()).replaceSync(this.cssText), s4 && e.set(i4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, i);
var h = (i4, e5) => {
  if (s)
    i4.adoptedStyleSheets = e5.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else
    for (const s4 of e5) {
      const e6 = document.createElement("style"), n4 = t.litNonce;
      void 0 !== n4 && e6.setAttribute("nonce", n4), e6.textContent = s4.cssText, i4.appendChild(e6);
    }
};
var c = s ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let s4 = "";
  for (const i4 of t6.cssRules)
    s4 += i4.cssText;
  return r(s4);
})(t5) : t5;
var { is: l, defineProperty: a, getOwnPropertyDescriptor: u, getOwnPropertyNames: d, getOwnPropertySymbols: f, getPrototypeOf: p } = Object;
var v = globalThis;
var y = v.trustedTypes;
var m = y ? y.emptyScript : "";
var b = v.reactiveElementPolyfillSupport;
var g = (t5, s4) => t5;
var w = { toAttribute(t5, s4) {
  switch (s4) {
    case Boolean:
      t5 = t5 ? m : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, s4) {
  let i4 = t5;
  switch (s4) {
    case Boolean:
      i4 = null !== t5;
      break;
    case Number:
      i4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        i4 = JSON.parse(t5);
      } catch (t6) {
        i4 = null;
      }
  }
  return i4;
} };
var _ = (t5, s4) => !l(t5, s4);
var S = { attribute: true, type: String, converter: w, reflect: false, useDefault: false, hasChanged: _ };
Symbol.metadata ??= Symbol("metadata"), v.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var $ = class extends HTMLElement {
  static addInitializer(t5) {
    this.o(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this.u && [...this.u.keys()];
  }
  static createProperty(t5, s4 = S) {
    if (s4.state && (s4.attribute = false), this.o(), this.prototype.hasOwnProperty(t5) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t5, s4), !s4.noAccessor) {
      const i4 = Symbol(), e5 = this.getPropertyDescriptor(t5, i4, s4);
      void 0 !== e5 && a(this.prototype, t5, e5);
    }
  }
  static getPropertyDescriptor(t5, s4, i4) {
    const { get: e5, set: n4 } = u(this.prototype, t5) ?? { get() {
      return this[s4];
    }, set(t6) {
      this[s4] = t6;
    } };
    return { get: e5, set(s5) {
      const r4 = e5?.call(this);
      n4?.call(this, s5), this.requestUpdate(t5, r4, i4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? S;
  }
  static o() {
    if (this.hasOwnProperty(g("elementProperties")))
      return;
    const t5 = p(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(g("finalized")))
      return;
    if (this.finalized = true, this.o(), this.hasOwnProperty(g("properties"))) {
      const t6 = this.properties, s4 = [...d(t6), ...f(t6)];
      for (const i4 of s4)
        this.createProperty(i4, t6[i4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const s4 = litPropertyMetadata.get(t5);
      if (void 0 !== s4)
        for (const [t6, i4] of s4)
          this.elementProperties.set(t6, i4);
    }
    this.u = /* @__PURE__ */ new Map();
    for (const [t6, s4] of this.elementProperties) {
      const i4 = this.p(t6, s4);
      void 0 !== i4 && this.u.set(i4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const s4 = [];
    if (Array.isArray(t5)) {
      const i4 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of i4)
        s4.unshift(c(t6));
    } else
      void 0 !== t5 && s4.push(c(t5));
    return s4;
  }
  static p(t5, s4) {
    const i4 = s4.attribute;
    return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this.v = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.m = null, this._();
  }
  _() {
    this.S = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this.$(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this.P ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this.P?.delete(t5);
  }
  $() {
    const t5 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i4 of s4.keys())
      this.hasOwnProperty(i4) && (t5.set(i4, this[i4]), delete this[i4]);
    t5.size > 0 && (this.v = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return h(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this.P?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this.P?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, s4, i4) {
    this._$AK(t5, i4);
  }
  C(t5, s4) {
    const i4 = this.constructor.elementProperties.get(t5), e5 = this.constructor.p(t5, i4);
    if (void 0 !== e5 && true === i4.reflect) {
      const n4 = (void 0 !== i4.converter?.toAttribute ? i4.converter : w).toAttribute(s4, i4.type);
      this.m = t5, null == n4 ? this.removeAttribute(e5) : this.setAttribute(e5, n4), this.m = null;
    }
  }
  _$AK(t5, s4) {
    const i4 = this.constructor, e5 = i4.u.get(t5);
    if (void 0 !== e5 && this.m !== e5) {
      const t6 = i4.getPropertyOptions(e5), n4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : w;
      this.m = e5;
      const r4 = n4.fromAttribute(s4, t6.type);
      this[e5] = r4 ?? this.T?.get(e5) ?? r4, this.m = null;
    }
  }
  requestUpdate(t5, s4, i4) {
    if (void 0 !== t5) {
      const e5 = this.constructor, n4 = this[t5];
      if (i4 ??= e5.getPropertyOptions(t5), !((i4.hasChanged ?? _)(n4, s4) || i4.useDefault && i4.reflect && n4 === this.T?.get(t5) && !this.hasAttribute(e5.p(t5, i4))))
        return;
      this.M(t5, s4, i4);
    }
    false === this.isUpdatePending && (this.S = this.k());
  }
  M(t5, s4, { useDefault: i4, reflect: e5, wrapped: n4 }, r4) {
    i4 && !(this.T ??= /* @__PURE__ */ new Map()).has(t5) && (this.T.set(t5, r4 ?? s4 ?? this[t5]), true !== n4 || void 0 !== r4) || (this._$AL.has(t5) || (this.hasUpdated || i4 || (s4 = void 0), this._$AL.set(t5, s4)), true === e5 && this.m !== t5 && (this.A ??= /* @__PURE__ */ new Set()).add(t5));
  }
  async k() {
    this.isUpdatePending = true;
    try {
      await this.S;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this.v) {
        for (const [t7, s5] of this.v)
          this[t7] = s5;
        this.v = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0)
        for (const [s5, i4] of t6) {
          const { wrapped: t7 } = i4, e5 = this[s5];
          true !== t7 || this._$AL.has(s5) || void 0 === e5 || this.M(s5, void 0, i4, e5);
        }
    }
    let t5 = false;
    const s4 = this._$AL;
    try {
      t5 = this.shouldUpdate(s4), t5 ? (this.willUpdate(s4), this.P?.forEach((t6) => t6.hostUpdate?.()), this.update(s4)) : this.U();
    } catch (s5) {
      throw t5 = false, this.U(), s5;
    }
    t5 && this._$AE(s4);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this.P?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  U() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.S;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this.A &&= this.A.forEach((t6) => this.C(t6, this[t6])), this.U();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
$.elementStyles = [], $.shadowRootOptions = { mode: "open" }, $[g("elementProperties")] = /* @__PURE__ */ new Map(), $[g("finalized")] = /* @__PURE__ */ new Map(), b?.({ ReactiveElement: $ }), (v.reactiveElementVersions ??= []).push("2.1.1");
var T = globalThis;
var x = T.trustedTypes;
var E = x ? x.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
var C = "$lit$";
var P = `lit$${Math.random().toFixed(9).slice(2)}$`;
var M = "?" + P;
var A = `<${M}>`;
var k = document;
var O = () => k.createComment("");
var U = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
var V = Array.isArray;
var R = (t5) => V(t5) || "function" == typeof t5?.[Symbol.iterator];
var N = "[ 	\n\f\r]";
var L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var z = /-->/g;
var j = />/g;
var D = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var H = /'/g;
var I = /"/g;
var B = /^(?:script|style|textarea|title)$/i;
var W = (t5) => (s4, ...i4) => ({ _$litType$: t5, strings: s4, values: i4 });
var Z = W(1);
var q = W(2);
var F = W(3);
var G = Symbol.for("lit-noChange");
var J = Symbol.for("lit-nothing");
var K = /* @__PURE__ */ new WeakMap();
var Y = k.createTreeWalker(k, 129);
function Q(t5, s4) {
  if (!V(t5) || !t5.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== E ? E.createHTML(s4) : s4;
}
var X = (t5, s4) => {
  const i4 = t5.length - 1, e5 = [];
  let n4, r4 = 2 === s4 ? "<svg>" : 3 === s4 ? "<math>" : "", o3 = L;
  for (let s5 = 0; s5 < i4; s5++) {
    const i5 = t5[s5];
    let h4, c4, l4 = -1, a4 = 0;
    for (; a4 < i5.length && (o3.lastIndex = a4, c4 = o3.exec(i5), null !== c4); )
      a4 = o3.lastIndex, o3 === L ? "!--" === c4[1] ? o3 = z : void 0 !== c4[1] ? o3 = j : void 0 !== c4[2] ? (B.test(c4[2]) && (n4 = RegExp("</" + c4[2], "g")), o3 = D) : void 0 !== c4[3] && (o3 = D) : o3 === D ? ">" === c4[0] ? (o3 = n4 ?? L, l4 = -1) : void 0 === c4[1] ? l4 = -2 : (l4 = o3.lastIndex - c4[2].length, h4 = c4[1], o3 = void 0 === c4[3] ? D : '"' === c4[3] ? I : H) : o3 === I || o3 === H ? o3 = D : o3 === z || o3 === j ? o3 = L : (o3 = D, n4 = void 0);
    const u4 = o3 === D && t5[s5 + 1].startsWith("/>") ? " " : "";
    r4 += o3 === L ? i5 + A : l4 >= 0 ? (e5.push(h4), i5.slice(0, l4) + C + i5.slice(l4) + P + u4) : i5 + P + (-2 === l4 ? s5 : u4);
  }
  return [Q(t5, r4 + (t5[i4] || "<?>") + (2 === s4 ? "</svg>" : 3 === s4 ? "</math>" : "")), e5];
};
var tt = class {
  constructor({ strings: t5, _$litType$: s4 }, i4) {
    let e5;
    this.parts = [];
    let n4 = 0, r4 = 0;
    const o3 = t5.length - 1, h4 = this.parts, [c4, l4] = X(t5, s4);
    if (this.el = tt.createElement(c4, i4), Y.currentNode = this.el.content, 2 === s4 || 3 === s4) {
      const t6 = this.el.content.firstChild;
      t6.replaceWith(...t6.childNodes);
    }
    for (; null !== (e5 = Y.nextNode()) && h4.length < o3; ) {
      if (1 === e5.nodeType) {
        if (e5.hasAttributes())
          for (const t6 of e5.getAttributeNames())
            if (t6.endsWith(C)) {
              const s5 = l4[r4++], i5 = e5.getAttribute(t6).split(P), o4 = /([.?@])?(.*)/.exec(s5);
              h4.push({ type: 1, index: n4, name: o4[2], strings: i5, ctor: "." === o4[1] ? rt : "?" === o4[1] ? ot : "@" === o4[1] ? ht : nt }), e5.removeAttribute(t6);
            } else
              t6.startsWith(P) && (h4.push({ type: 6, index: n4 }), e5.removeAttribute(t6));
        if (B.test(e5.tagName)) {
          const t6 = e5.textContent.split(P), s5 = t6.length - 1;
          if (s5 > 0) {
            e5.textContent = x ? x.emptyScript : "";
            for (let i5 = 0; i5 < s5; i5++)
              e5.append(t6[i5], O()), Y.nextNode(), h4.push({ type: 2, index: ++n4 });
            e5.append(t6[s5], O());
          }
        }
      } else if (8 === e5.nodeType)
        if (e5.data === M)
          h4.push({ type: 2, index: n4 });
        else {
          let t6 = -1;
          for (; -1 !== (t6 = e5.data.indexOf(P, t6 + 1)); )
            h4.push({ type: 7, index: n4 }), t6 += P.length - 1;
        }
      n4++;
    }
  }
  static createElement(t5, s4) {
    const i4 = k.createElement("template");
    return i4.innerHTML = t5, i4;
  }
};
function st(t5, s4, i4 = t5, e5) {
  if (s4 === G)
    return s4;
  let n4 = void 0 !== e5 ? i4.N?.[e5] : i4.O;
  const r4 = U(s4) ? void 0 : s4._$litDirective$;
  return n4?.constructor !== r4 && (n4?._$AO?.(false), void 0 === r4 ? n4 = void 0 : (n4 = new r4(t5), n4._$AT(t5, i4, e5)), void 0 !== e5 ? (i4.N ??= [])[e5] = n4 : i4.O = n4), void 0 !== n4 && (s4 = st(t5, n4._$AS(t5, s4.values), n4, e5)), s4;
}
var it = class {
  constructor(t5, s4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = s4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  R(t5) {
    const { el: { content: s4 }, parts: i4 } = this._$AD, e5 = (t5?.creationScope ?? k).importNode(s4, true);
    Y.currentNode = e5;
    let n4 = Y.nextNode(), r4 = 0, o3 = 0, h4 = i4[0];
    for (; void 0 !== h4; ) {
      if (r4 === h4.index) {
        let s5;
        2 === h4.type ? s5 = new et(n4, n4.nextSibling, this, t5) : 1 === h4.type ? s5 = new h4.ctor(n4, h4.name, h4.strings, this, t5) : 6 === h4.type && (s5 = new ct(n4, this, t5)), this._$AV.push(s5), h4 = i4[++o3];
      }
      r4 !== h4?.index && (n4 = Y.nextNode(), r4++);
    }
    return Y.currentNode = k, e5;
  }
  V(t5) {
    let s4 = 0;
    for (const i4 of this._$AV)
      void 0 !== i4 && (void 0 !== i4.strings ? (i4._$AI(t5, i4, s4), s4 += i4.strings.length - 2) : i4._$AI(t5[s4])), s4++;
  }
};
var et = class t2 {
  get _$AU() {
    return this._$AM?._$AU ?? this.D;
  }
  constructor(t5, s4, i4, e5) {
    this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = t5, this._$AB = s4, this._$AM = i4, this.options = e5, this.D = e5?.isConnected ?? true;
  }
  get parentNode() {
    let t5 = this._$AA.parentNode;
    const s4 = this._$AM;
    return void 0 !== s4 && 11 === t5?.nodeType && (t5 = s4.parentNode), t5;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t5, s4 = this) {
    t5 = st(this, t5, s4), U(t5) ? t5 === J || null == t5 || "" === t5 ? (this._$AH !== J && this._$AR(), this._$AH = J) : t5 !== this._$AH && t5 !== G && this.L(t5) : void 0 !== t5._$litType$ ? this.j(t5) : void 0 !== t5.nodeType ? this.I(t5) : R(t5) ? this.H(t5) : this.L(t5);
  }
  B(t5) {
    return this._$AA.parentNode.insertBefore(t5, this._$AB);
  }
  I(t5) {
    this._$AH !== t5 && (this._$AR(), this._$AH = this.B(t5));
  }
  L(t5) {
    this._$AH !== J && U(this._$AH) ? this._$AA.nextSibling.data = t5 : this.I(k.createTextNode(t5)), this._$AH = t5;
  }
  j(t5) {
    const { values: s4, _$litType$: i4 } = t5, e5 = "number" == typeof i4 ? this._$AC(t5) : (void 0 === i4.el && (i4.el = tt.createElement(Q(i4.h, i4.h[0]), this.options)), i4);
    if (this._$AH?._$AD === e5)
      this._$AH.V(s4);
    else {
      const t6 = new it(e5, this), i5 = t6.R(this.options);
      t6.V(s4), this.I(i5), this._$AH = t6;
    }
  }
  _$AC(t5) {
    let s4 = K.get(t5.strings);
    return void 0 === s4 && K.set(t5.strings, s4 = new tt(t5)), s4;
  }
  H(s4) {
    V(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let e5, n4 = 0;
    for (const r4 of s4)
      n4 === i4.length ? i4.push(e5 = new t2(this.B(O()), this.B(O()), this, this.options)) : e5 = i4[n4], e5._$AI(r4), n4++;
    n4 < i4.length && (this._$AR(e5 && e5._$AB.nextSibling, n4), i4.length = n4);
  }
  _$AR(t5 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t5 !== this._$AB; ) {
      const s5 = t5.nextSibling;
      t5.remove(), t5 = s5;
    }
  }
  setConnected(t5) {
    void 0 === this._$AM && (this.D = t5, this._$AP?.(t5));
  }
};
var nt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t5, s4, i4, e5, n4) {
    this.type = 1, this._$AH = J, this._$AN = void 0, this.element = t5, this.name = s4, this._$AM = e5, this.options = n4, i4.length > 2 || "" !== i4[0] || "" !== i4[1] ? (this._$AH = Array(i4.length - 1).fill(new String()), this.strings = i4) : this._$AH = J;
  }
  _$AI(t5, s4 = this, i4, e5) {
    const n4 = this.strings;
    let r4 = false;
    if (void 0 === n4)
      t5 = st(this, t5, s4, 0), r4 = !U(t5) || t5 !== this._$AH && t5 !== G, r4 && (this._$AH = t5);
    else {
      const e6 = t5;
      let o3, h4;
      for (t5 = n4[0], o3 = 0; o3 < n4.length - 1; o3++)
        h4 = st(this, e6[i4 + o3], s4, o3), h4 === G && (h4 = this._$AH[o3]), r4 ||= !U(h4) || h4 !== this._$AH[o3], h4 === J ? t5 = J : t5 !== J && (t5 += (h4 ?? "") + n4[o3 + 1]), this._$AH[o3] = h4;
    }
    r4 && !e5 && this.W(t5);
  }
  W(t5) {
    t5 === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
  }
};
var rt = class extends nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  W(t5) {
    this.element[this.name] = t5 === J ? void 0 : t5;
  }
};
var ot = class extends nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  W(t5) {
    this.element.toggleAttribute(this.name, !!t5 && t5 !== J);
  }
};
var ht = class extends nt {
  constructor(t5, s4, i4, e5, n4) {
    super(t5, s4, i4, e5, n4), this.type = 5;
  }
  _$AI(t5, s4 = this) {
    if ((t5 = st(this, t5, s4, 0) ?? J) === G)
      return;
    const i4 = this._$AH, e5 = t5 === J && i4 !== J || t5.capture !== i4.capture || t5.once !== i4.once || t5.passive !== i4.passive, n4 = t5 !== J && (i4 === J || e5);
    e5 && this.element.removeEventListener(this.name, this, i4), n4 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
  }
  handleEvent(t5) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
  }
};
var ct = class {
  constructor(t5, s4, i4) {
    this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = s4, this.options = i4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5) {
    st(this, t5);
  }
};
var lt = { q: C, J: P, Z: M, F: 1, G: X, K: it, X: R, Y: st, tt: et, st: nt, it: ot, et: ht, ht: rt, ot: ct };
var at = T.litHtmlPolyfillSupport;
at?.(tt, et), (T.litHtmlVersions ??= []).push("3.3.1");
var ut = (t5, s4, i4) => {
  const e5 = i4?.renderBefore ?? s4;
  let n4 = e5._$litPart$;
  if (void 0 === n4) {
    const t6 = i4?.renderBefore ?? null;
    e5._$litPart$ = n4 = new et(s4.insertBefore(O(), t6), t6, void 0, i4 ?? {});
  }
  return n4._$AI(t5), n4;
};
var dt = globalThis;
var ft = class extends $ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.rt = void 0;
  }
  createRenderRoot() {
    const t5 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t5.firstChild, t5;
  }
  update(t5) {
    const s4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this.rt = ut(s4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.rt?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.rt?.setConnected(false);
  }
  render() {
    return G;
  }
};
ft._$litElement$ = true, ft["finalized"] = true, dt.litElementHydrateSupport?.({ LitElement: ft });
var pt = dt.litElementPolyfillSupport;
pt?.({ LitElement: ft });
(dt.litElementVersions ??= []).push("4.2.1");
var { tt: mt } = lt;
var bt = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
var wt = (t5, s4) => void 0 === s4 ? void 0 !== t5?._$litType$ : t5?._$litType$ === s4;
var _t = (t5) => null != t5?._$litType$?.h;
var Tt = (t5) => void 0 === t5.strings;
var xt = () => document.createComment("");
var Et = (t5, s4, i4) => {
  const e5 = t5._$AA.parentNode, n4 = void 0 === s4 ? t5._$AB : s4._$AA;
  if (void 0 === i4) {
    const s5 = e5.insertBefore(xt(), n4), r4 = e5.insertBefore(xt(), n4);
    i4 = new mt(s5, r4, t5, t5.options);
  } else {
    const s5 = i4._$AB.nextSibling, r4 = i4._$AM, o3 = r4 !== t5;
    if (o3) {
      let s6;
      i4._$AQ?.(t5), i4._$AM = t5, void 0 !== i4._$AP && (s6 = t5._$AU) !== r4._$AU && i4._$AP(s6);
    }
    if (s5 !== n4 || o3) {
      let t6 = i4._$AA;
      for (; t6 !== s5; ) {
        const s6 = t6.nextSibling;
        e5.insertBefore(t6, n4), t6 = s6;
      }
    }
  }
  return i4;
};
var Ct = (t5, s4, i4 = t5) => (t5._$AI(s4, i4), t5);
var Pt = {};
var Mt = (t5, s4 = Pt) => t5._$AH = s4;
var At = (t5) => t5._$AH;
var kt = (t5) => {
  t5._$AR(), t5._$AA.remove();
};
var Ot = (t5) => {
  t5._$AR();
};
var Vt = (t5) => (...s4) => ({ _$litDirective$: t5, values: s4 });
var Rt = class {
  constructor(t5) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t5, s4, i4) {
    this.nt = t5, this._$AM = s4, this.ct = i4;
  }
  _$AS(t5, s4) {
    return this.update(t5, s4);
  }
  update(t5, s4) {
    return this.render(...s4);
  }
};
var Nt = (t5, s4) => {
  const i4 = t5._$AN;
  if (void 0 === i4)
    return false;
  for (const t6 of i4)
    t6._$AO?.(s4, false), Nt(t6, s4);
  return true;
};
var Lt = (t5) => {
  let s4, i4;
  do {
    if (void 0 === (s4 = t5._$AM))
      break;
    i4 = s4._$AN, i4.delete(t5), t5 = s4;
  } while (0 === i4?.size);
};
var zt = (t5) => {
  for (let s4; s4 = t5._$AM; t5 = s4) {
    let i4 = s4._$AN;
    if (void 0 === i4)
      s4._$AN = i4 = /* @__PURE__ */ new Set();
    else if (i4.has(t5))
      break;
    i4.add(t5), Ht(s4);
  }
};
function jt(t5) {
  void 0 !== this._$AN ? (Lt(this), this._$AM = t5, zt(this)) : this._$AM = t5;
}
function Dt(t5, s4 = false, i4 = 0) {
  const e5 = this._$AH, n4 = this._$AN;
  if (void 0 !== n4 && 0 !== n4.size)
    if (s4)
      if (Array.isArray(e5))
        for (let t6 = i4; t6 < e5.length; t6++)
          Nt(e5[t6], false), Lt(e5[t6]);
      else
        null != e5 && (Nt(e5, false), Lt(e5));
    else
      Nt(this, t5);
}
var Ht = (t5) => {
  2 == t5.type && (t5._$AP ??= Dt, t5._$AQ ??= jt);
};
var It = class extends Rt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t5, s4, i4) {
    super._$AT(t5, s4, i4), zt(this), this.isConnected = t5._$AU;
  }
  _$AO(t5, s4 = true) {
    t5 !== this.isConnected && (this.isConnected = t5, t5 ? this.reconnected?.() : this.disconnected?.()), s4 && (Nt(this, t5), Lt(this));
  }
  setValue(t5) {
    if (Tt(this.nt))
      this.nt._$AI(t5, this);
    else {
      const s4 = [...this.nt._$AH];
      s4[this.ct] = t5, this.nt._$AI(s4, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};
var Bt = class {
  constructor(t5) {
    this.lt = t5;
  }
  disconnect() {
    this.lt = void 0;
  }
  reconnect(t5) {
    this.lt = t5;
  }
  deref() {
    return this.lt;
  }
};
var Wt = class {
  constructor() {
    this.ut = void 0, this.dt = void 0;
  }
  get() {
    return this.ut;
  }
  pause() {
    this.ut ??= new Promise((t5) => this.dt = t5);
  }
  resume() {
    this.dt?.(), this.ut = this.dt = void 0;
  }
};
var Zt = class extends It {
  constructor() {
    super(...arguments), this.ft = new Bt(this), this.vt = new Wt();
  }
  render(t5, s4) {
    return G;
  }
  update(t5, [s4, i4]) {
    if (this.isConnected || this.disconnected(), s4 === this.yt)
      return G;
    this.yt = s4;
    let e5 = 0;
    const { ft: n4, vt: r4 } = this;
    return (async (t6, s5) => {
      for await (const i5 of t6)
        if (false === await s5(i5))
          return;
    })(s4, async (t6) => {
      for (; r4.get(); )
        await r4.get();
      const o3 = n4.deref();
      if (void 0 !== o3) {
        if (o3.yt !== s4)
          return false;
        void 0 !== i4 && (t6 = i4(t6, e5)), o3.commitValue(t6, e5), e5++;
      }
      return true;
    }), G;
  }
  commitValue(t5, s4) {
    this.setValue(t5);
  }
  disconnected() {
    this.ft.disconnect(), this.vt.pause();
  }
  reconnected() {
    this.ft.reconnect(this), this.vt.resume();
  }
};
var qt = Vt(Zt);
var Ft = Vt(
  class extends Zt {
    constructor(t5) {
      if (super(t5), 2 !== t5.type)
        throw Error("asyncAppend can only be used in child expressions");
    }
    update(t5, s4) {
      return this.rt = t5, super.update(t5, s4);
    }
    commitValue(t5, s4) {
      0 === s4 && Ot(this.rt);
      const i4 = Et(this.rt);
      Ct(i4, t5);
    }
  }
);
var Gt = (t5) => _t(t5) ? t5._$litType$.h : t5.strings;
var Jt = Vt(class extends Rt {
  constructor(t5) {
    super(t5), this.bt = /* @__PURE__ */ new WeakMap();
  }
  render(t5) {
    return [t5];
  }
  update(t5, [s4]) {
    const i4 = wt(this.gt) ? Gt(this.gt) : null, e5 = wt(s4) ? Gt(s4) : null;
    if (null !== i4 && (null === e5 || i4 !== e5)) {
      const s5 = At(t5).pop();
      let e6 = this.bt.get(i4);
      if (void 0 === e6) {
        const t6 = document.createDocumentFragment();
        e6 = ut(J, t6), e6.setConnected(false), this.bt.set(i4, e6);
      }
      Mt(e6, [s5]), Et(e6, void 0, s5);
    }
    if (null !== e5) {
      if (null === i4 || i4 !== e5) {
        const s5 = this.bt.get(e5);
        if (void 0 !== s5) {
          const i5 = At(s5).pop();
          Ot(t5), Et(t5, void 0, i5), Mt(t5, [i5]);
        }
      }
      this.gt = s4;
    } else
      this.gt = void 0;
    return this.render(s4);
  }
});
var Yt = Vt(
  class extends Rt {
    constructor(t5) {
      if (super(t5), 1 !== t5.type || "class" !== t5.name || t5.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((s4) => t5[s4]).join(" ") + " ";
    }
    update(t5, [s4]) {
      if (void 0 === this.wt) {
        this.wt = /* @__PURE__ */ new Set(), void 0 !== t5.strings && (this._t = new Set(t5.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
        for (const t6 in s4)
          s4[t6] && !this._t?.has(t6) && this.wt.add(t6);
        return this.render(s4);
      }
      const i4 = t5.element.classList;
      for (const t6 of this.wt)
        t6 in s4 || (i4.remove(t6), this.wt.delete(t6));
      for (const t6 in s4) {
        const e5 = !!s4[t6];
        e5 === this.wt.has(t6) || this._t?.has(t6) || (e5 ? (i4.add(t6), this.wt.add(t6)) : (i4.remove(t6), this.wt.delete(t6)));
      }
      return G;
    }
  }
);
var Qt = {};
var Xt = Vt(class extends Rt {
  constructor() {
    super(...arguments), this.St = Qt;
  }
  render(t5, s4) {
    return s4();
  }
  update(t5, [s4, i4]) {
    if (Array.isArray(s4)) {
      if (Array.isArray(this.St) && this.St.length === s4.length && s4.every((t6, s5) => t6 === this.St[s5]))
        return G;
    } else if (this.St === s4)
      return G;
    return this.St = Array.isArray(s4) ? Array.from(s4) : s4, this.render(s4, i4);
  }
});
var is = Vt(class extends Rt {
  constructor() {
    super(...arguments), this.key = J;
  }
  render(t5, s4) {
    return this.key = t5, s4;
  }
  update(t5, [s4, i4]) {
    return s4 !== this.key && (Mt(t5), this.key = s4), i4;
  }
});
var es = Vt(
  class extends Rt {
    constructor(t5) {
      if (super(t5), 3 !== t5.type && 1 !== t5.type && 4 !== t5.type)
        throw Error("The `live` directive is not allowed on child or event bindings");
      if (!Tt(t5))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(t5) {
      return t5;
    }
    update(t5, [s4]) {
      if (s4 === G || s4 === J)
        return s4;
      const i4 = t5.element, e5 = t5.name;
      if (3 === t5.type) {
        if (s4 === i4[e5])
          return G;
      } else if (4 === t5.type) {
        if (!!s4 === i4.hasAttribute(e5))
          return G;
      } else if (1 === t5.type && i4.getAttribute(e5) === s4 + "")
        return G;
      return Mt(t5), s4;
    }
  }
);
var cs = /* @__PURE__ */ new WeakMap();
var ls = Vt(class extends It {
  render(t5) {
    return J;
  }
  update(t5, [s4]) {
    const i4 = s4 !== this.lt;
    return i4 && void 0 !== this.lt && this.$t(void 0), (i4 || this.Tt !== this.xt) && (this.lt = s4, this.Et = t5.options?.host, this.$t(this.xt = t5.element)), J;
  }
  $t(t5) {
    if (this.isConnected || (t5 = void 0), "function" == typeof this.lt) {
      const s4 = this.Et ?? globalThis;
      let i4 = cs.get(s4);
      void 0 === i4 && (i4 = /* @__PURE__ */ new WeakMap(), cs.set(s4, i4)), void 0 !== i4.get(this.lt) && this.lt.call(this.Et, void 0), i4.set(this.lt, t5), void 0 !== t5 && this.lt.call(this.Et, t5);
    } else
      this.lt.value = t5;
  }
  get Tt() {
    return "function" == typeof this.lt ? cs.get(this.Et ?? globalThis)?.get(this.lt) : this.lt?.value;
  }
  disconnected() {
    this.Tt === this.xt && this.$t(void 0);
  }
  reconnected() {
    this.$t(this.xt);
  }
});
var as = (t5, s4, i4) => {
  const e5 = /* @__PURE__ */ new Map();
  for (let n4 = s4; n4 <= i4; n4++)
    e5.set(t5[n4], n4);
  return e5;
};
var us = Vt(class extends Rt {
  constructor(t5) {
    if (super(t5), 2 !== t5.type)
      throw Error("repeat() can only be used in text expressions");
  }
  Ct(t5, s4, i4) {
    let e5;
    void 0 === i4 ? i4 = s4 : void 0 !== s4 && (e5 = s4);
    const n4 = [], r4 = [];
    let o3 = 0;
    for (const s5 of t5)
      n4[o3] = e5 ? e5(s5, o3) : o3, r4[o3] = i4(s5, o3), o3++;
    return { values: r4, keys: n4 };
  }
  render(t5, s4, i4) {
    return this.Ct(t5, s4, i4).values;
  }
  update(t5, [s4, i4, e5]) {
    const n4 = At(t5), { values: r4, keys: o3 } = this.Ct(s4, i4, e5);
    if (!Array.isArray(n4))
      return this.Pt = o3, r4;
    const h4 = this.Pt ??= [], c4 = [];
    let l4, a4, u4 = 0, d4 = n4.length - 1, f4 = 0, p4 = r4.length - 1;
    for (; u4 <= d4 && f4 <= p4; )
      if (null === n4[u4])
        u4++;
      else if (null === n4[d4])
        d4--;
      else if (h4[u4] === o3[f4])
        c4[f4] = Ct(n4[u4], r4[f4]), u4++, f4++;
      else if (h4[d4] === o3[p4])
        c4[p4] = Ct(n4[d4], r4[p4]), d4--, p4--;
      else if (h4[u4] === o3[p4])
        c4[p4] = Ct(n4[u4], r4[p4]), Et(t5, c4[p4 + 1], n4[u4]), u4++, p4--;
      else if (h4[d4] === o3[f4])
        c4[f4] = Ct(n4[d4], r4[f4]), Et(t5, n4[u4], n4[d4]), d4--, f4++;
      else if (void 0 === l4 && (l4 = as(o3, f4, p4), a4 = as(h4, u4, d4)), l4.has(h4[u4]))
        if (l4.has(h4[d4])) {
          const s5 = a4.get(o3[f4]), i5 = void 0 !== s5 ? n4[s5] : null;
          if (null === i5) {
            const s6 = Et(t5, n4[u4]);
            Ct(s6, r4[f4]), c4[f4] = s6;
          } else
            c4[f4] = Ct(i5, r4[f4]), Et(t5, n4[u4], i5), n4[s5] = null;
          f4++;
        } else
          kt(n4[d4]), d4--;
      else
        kt(n4[u4]), u4++;
    for (; f4 <= p4; ) {
      const s5 = Et(t5, c4[p4 + 1]);
      Ct(s5, r4[f4]), c4[f4++] = s5;
    }
    for (; u4 <= d4; ) {
      const t6 = n4[u4++];
      null !== t6 && kt(t6);
    }
    return this.Pt = o3, Mt(t5, c4), G;
  }
});
var ds = "important";
var fs = " !" + ds;
var ps = Vt(class extends Rt {
  constructor(t5) {
    if (super(t5), 1 !== t5.type || "style" !== t5.name || t5.strings?.length > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return Object.keys(t5).reduce((s4, i4) => {
      const e5 = t5[i4];
      return null == e5 ? s4 : s4 + `${i4 = i4.includes("-") ? i4 : i4.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${e5};`;
    }, "");
  }
  update(t5, [s4]) {
    const { style: i4 } = t5.element;
    if (void 0 === this.Mt)
      return this.Mt = new Set(Object.keys(s4)), this.render(s4);
    for (const t6 of this.Mt)
      null == s4[t6] && (this.Mt.delete(t6), t6.includes("-") ? i4.removeProperty(t6) : i4[t6] = null);
    for (const t6 in s4) {
      const e5 = s4[t6];
      if (null != e5) {
        this.Mt.add(t6);
        const s5 = "string" == typeof e5 && e5.endsWith(fs);
        t6.includes("-") || s5 ? i4.setProperty(t6, s5 ? e5.slice(0, -11) : e5, s5 ? ds : "") : i4[t6] = e5;
      }
    }
    return G;
  }
});
var vs = Vt(
  class extends Rt {
    constructor(t5) {
      if (super(t5), 2 !== t5.type)
        throw Error("templateContent can only be used in child bindings");
    }
    render(t5) {
      return this.At === t5 ? G : (this.At = t5, document.importNode(t5.content, true));
    }
  }
);
var ys = class extends Rt {
  constructor(t5) {
    if (super(t5), this.gt = J, 2 !== t5.type)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t5) {
    if (t5 === J || null == t5)
      return this.kt = void 0, this.gt = t5;
    if (t5 === G)
      return t5;
    if ("string" != typeof t5)
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t5 === this.gt)
      return this.kt;
    this.gt = t5;
    const s4 = [t5];
    return s4.raw = s4, this.kt = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
  }
};
ys.directiveName = "unsafeHTML", ys.resultType = 1;
var ms = Vt(ys);
var bs = class extends ys {
};
bs.directiveName = "unsafeSVG", bs.resultType = 2;
var gs = Vt(bs);
var ws = (t5) => !bt(t5) && "function" == typeof t5.then;
var _s = 1073741823;
var Ss = class extends It {
  constructor() {
    super(...arguments), this.Ot = _s, this.Ut = [], this.ft = new Bt(this), this.vt = new Wt();
  }
  render(...t5) {
    return t5.find((t6) => !ws(t6)) ?? G;
  }
  update(t5, s4) {
    const i4 = this.Ut;
    let e5 = i4.length;
    this.Ut = s4;
    const n4 = this.ft, r4 = this.vt;
    this.isConnected || this.disconnected();
    for (let t6 = 0; t6 < s4.length && !(t6 > this.Ot); t6++) {
      const o3 = s4[t6];
      if (!ws(o3))
        return this.Ot = t6, o3;
      t6 < e5 && o3 === i4[t6] || (this.Ot = _s, e5 = 0, Promise.resolve(o3).then(async (t7) => {
        for (; r4.get(); )
          await r4.get();
        const s5 = n4.deref();
        if (void 0 !== s5) {
          const i5 = s5.Ut.indexOf(o3);
          i5 > -1 && i5 < s5.Ot && (s5.Ot = i5, s5.setValue(t7));
        }
      }));
    }
    return G;
  }
  disconnected() {
    this.ft.disconnect(), this.vt.pause();
  }
  reconnected() {
    this.ft.reconnect(this), this.vt.resume();
  }
};
var $s = Vt(Ss);
var xs = Symbol.for("");
var Es = (t5) => {
  if (t5?.r === xs)
    return t5?._$litStatic$;
};
var Ms = /* @__PURE__ */ new Map();
var As = (t5) => (s4, ...i4) => {
  const e5 = i4.length;
  let n4, r4;
  const o3 = [], h4 = [];
  let c4, l4 = 0, a4 = false;
  for (; l4 < e5; ) {
    for (c4 = s4[l4]; l4 < e5 && void 0 !== (r4 = i4[l4], n4 = Es(r4)); )
      c4 += n4 + s4[++l4], a4 = true;
    l4 !== e5 && h4.push(r4), o3.push(c4), l4++;
  }
  if (l4 === e5 && o3.push(s4[e5]), a4) {
    const t6 = o3.join("$$lit$$");
    void 0 === (s4 = Ms.get(t6)) && (o3.raw = o3, Ms.set(t6, s4 = o3)), i4 = h4;
  }
  return t5(s4, ...i4);
};
var ks = As(Z);
var Os = As(q);
window.litDisableBundleWarning || console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/custom-element.js/+esm
var e2 = (e5) => (t5, n4) => {
  void 0 !== n4 ? n4.addInitializer(() => {
    customElements.define(e5, t5);
  }) : customElements.define(e5, t5);
};

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/property.js/+esm
var t3 = globalThis;
var e3 = t3.ShadowRoot && (void 0 === t3.ShadyCSS || t3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s2 = Symbol();
var i2 = /* @__PURE__ */ new WeakMap();
var r2 = class {
  constructor(t5, e5, i4) {
    if (this._$cssResult$ = true, i4 !== s2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e5;
  }
  get styleSheet() {
    let t5 = this.o;
    const s4 = this.t;
    if (e3 && void 0 === t5) {
      const e5 = void 0 !== s4 && 1 === s4.length;
      e5 && (t5 = i2.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && i2.set(s4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t5) => new r2("string" == typeof t5 ? t5 : t5 + "", void 0, s2);
var n2 = (s4, i4) => {
  if (e3)
    s4.adoptedStyleSheets = i4.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else
    for (const e5 of i4) {
      const i5 = document.createElement("style"), r4 = t3.litNonce;
      void 0 !== r4 && i5.setAttribute("nonce", r4), i5.textContent = e5.cssText, s4.appendChild(i5);
    }
};
var a2 = e3 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e5 = "";
  for (const s4 of t6.cssRules)
    e5 += s4.cssText;
  return o(e5);
})(t5) : t5;
var { is: h2, defineProperty: c2, getOwnPropertyDescriptor: l2, getOwnPropertyNames: p2, getOwnPropertySymbols: d2, getPrototypeOf: u2 } = Object;
var f2 = globalThis;
var y2 = f2.trustedTypes;
var E2 = y2 ? y2.emptyScript : "";
var _2 = f2.reactiveElementPolyfillSupport;
var m2 = (t5, e5) => t5;
var S2 = { toAttribute(t5, e5) {
  switch (e5) {
    case Boolean:
      t5 = t5 ? E2 : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, e5) {
  let s4 = t5;
  switch (e5) {
    case Boolean:
      s4 = null !== t5;
      break;
    case Number:
      s4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t5);
      } catch (t6) {
        s4 = null;
      }
  }
  return s4;
} };
var $2 = (t5, e5) => !h2(t5, e5);
var g2 = { attribute: true, type: String, converter: S2, reflect: false, hasChanged: $2 };
Symbol.metadata ??= Symbol("metadata"), f2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var P2 = class extends HTMLElement {
  static addInitializer(t5) {
    this._$Ei(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t5, e5 = g2) {
    if (e5.state && (e5.attribute = false), this._$Ei(), this.elementProperties.set(t5, e5), !e5.noAccessor) {
      const s4 = Symbol(), i4 = this.getPropertyDescriptor(t5, s4, e5);
      void 0 !== i4 && c2(this.prototype, t5, i4);
    }
  }
  static getPropertyDescriptor(t5, e5, s4) {
    const { get: i4, set: r4 } = l2(this.prototype, t5) ?? { get() {
      return this[e5];
    }, set(t6) {
      this[e5] = t6;
    } };
    return { get() {
      return i4?.call(this);
    }, set(e6) {
      const o3 = i4?.call(this);
      r4.call(this, e6), this.requestUpdate(t5, o3, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? g2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m2("elementProperties")))
      return;
    const t5 = u2(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m2("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(m2("properties"))) {
      const t6 = this.properties, e5 = [...p2(t6), ...d2(t6)];
      for (const s4 of e5)
        this.createProperty(s4, t6[s4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const e5 = litPropertyMetadata.get(t5);
      if (void 0 !== e5)
        for (const [t6, s4] of e5)
          this.elementProperties.set(t6, s4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t6, e5] of this.elementProperties) {
      const s4 = this._$Eu(t6, e5);
      void 0 !== s4 && this._$Eh.set(s4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const e5 = [];
    if (Array.isArray(t5)) {
      const s4 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of s4)
        e5.unshift(a2(t6));
    } else
      void 0 !== t5 && e5.push(a2(t5));
    return e5;
  }
  static _$Eu(t5, e5) {
    const s4 = e5.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this._$EO?.delete(t5);
  }
  _$E_() {
    const t5 = /* @__PURE__ */ new Map(), e5 = this.constructor.elementProperties;
    for (const s4 of e5.keys())
      this.hasOwnProperty(s4) && (t5.set(s4, this[s4]), delete this[s4]);
    t5.size > 0 && (this._$Ep = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n2(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, e5, s4) {
    this._$AK(t5, s4);
  }
  _$EC(t5, e5) {
    const s4 = this.constructor.elementProperties.get(t5), i4 = this.constructor._$Eu(t5, s4);
    if (void 0 !== i4 && true === s4.reflect) {
      const r4 = (void 0 !== s4.converter?.toAttribute ? s4.converter : S2).toAttribute(e5, s4.type);
      this._$Em = t5, null == r4 ? this.removeAttribute(i4) : this.setAttribute(i4, r4), this._$Em = null;
    }
  }
  _$AK(t5, e5) {
    const s4 = this.constructor, i4 = s4._$Eh.get(t5);
    if (void 0 !== i4 && this._$Em !== i4) {
      const t6 = s4.getPropertyOptions(i4), r4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : S2;
      this._$Em = i4, this[i4] = r4.fromAttribute(e5, t6.type), this._$Em = null;
    }
  }
  requestUpdate(t5, e5, s4) {
    if (void 0 !== t5) {
      if (s4 ??= this.constructor.getPropertyOptions(t5), !(s4.hasChanged ?? $2)(this[t5], e5))
        return;
      this.P(t5, e5, s4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t5, e5, s4) {
    this._$AL.has(t5) || this._$AL.set(t5, e5), true === s4.reflect && this._$Em !== t5 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t5);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t7, e6] of this._$Ep)
          this[t7] = e6;
        this._$Ep = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0)
        for (const [e6, s4] of t6)
          true !== s4.wrapped || this._$AL.has(e6) || void 0 === this[e6] || this.P(e6, this[e6], s4);
    }
    let t5 = false;
    const e5 = this._$AL;
    try {
      t5 = this.shouldUpdate(e5), t5 ? (this.willUpdate(e5), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(e5)) : this._$EU();
    } catch (e6) {
      throw t5 = false, this._$EU(), e6;
    }
    t5 && this._$AE(e5);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$Ej &&= this._$Ej.forEach((t6) => this._$EC(t6, this[t6])), this._$EU();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
P2.elementStyles = [], P2.shadowRootOptions = { mode: "open" }, P2[m2("elementProperties")] = /* @__PURE__ */ new Map(), P2[m2("finalized")] = /* @__PURE__ */ new Map(), _2?.({ ReactiveElement: P2 }), (f2.reactiveElementVersions ??= []).push("2.0.4");
var b2 = { attribute: true, type: String, converter: S2, reflect: false, hasChanged: $2 };
var v2 = (t5 = b2, e5, s4) => {
  const { kind: i4, metadata: r4 } = s4;
  let o3 = globalThis.litPropertyMetadata.get(r4);
  if (void 0 === o3 && globalThis.litPropertyMetadata.set(r4, o3 = /* @__PURE__ */ new Map()), o3.set(s4.name, t5), "accessor" === i4) {
    const { name: i5 } = s4;
    return { set(s5) {
      const r5 = e5.get.call(this);
      e5.set.call(this, s5), this.requestUpdate(i5, r5, t5);
    }, init(e6) {
      return void 0 !== e6 && this.P(i5, void 0, t5), e6;
    } };
  }
  if ("setter" === i4) {
    const { name: i5 } = s4;
    return function(s5) {
      const r5 = this[i5];
      e5.call(this, s5), this.requestUpdate(i5, r5, t5);
    };
  }
  throw Error("Unsupported decorator location: " + i4);
};
function w2(t5) {
  return (e5, s4) => "object" == typeof s4 ? v2(t5, e5, s4) : ((t6, e6, s5) => {
    const i4 = e6.hasOwnProperty(s5);
    return e6.constructor.createProperty(s5, i4 ? { ...t6, wrapped: true } : t6), i4 ? Object.getOwnPropertyDescriptor(e6, s5) : void 0;
  })(t5, e5, s4);
}

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/state.js/+esm
var t4 = globalThis;
var e4 = t4.ShadowRoot && (void 0 === t4.ShadyCSS || t4.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s3 = Symbol();
var i3 = /* @__PURE__ */ new WeakMap();
var r3 = class {
  constructor(t5, e5, i4) {
    if (this._$cssResult$ = true, i4 !== s3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e5;
  }
  get styleSheet() {
    let t5 = this.o;
    const s4 = this.t;
    if (e4 && void 0 === t5) {
      const e5 = void 0 !== s4 && 1 === s4.length;
      e5 && (t5 = i3.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && i3.set(s4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var o2 = (t5) => new r3("string" == typeof t5 ? t5 : t5 + "", void 0, s3);
var n3 = (s4, i4) => {
  if (e4)
    s4.adoptedStyleSheets = i4.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else
    for (const e5 of i4) {
      const i5 = document.createElement("style"), r4 = t4.litNonce;
      void 0 !== r4 && i5.setAttribute("nonce", r4), i5.textContent = e5.cssText, s4.appendChild(i5);
    }
};
var a3 = e4 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e5 = "";
  for (const s4 of t6.cssRules)
    e5 += s4.cssText;
  return o2(e5);
})(t5) : t5;
var { is: h3, defineProperty: c3, getOwnPropertyDescriptor: l3, getOwnPropertyNames: d3, getOwnPropertySymbols: p3, getPrototypeOf: u3 } = Object;
var f3 = globalThis;
var y3 = f3.trustedTypes;
var E3 = y3 ? y3.emptyScript : "";
var _3 = f3.reactiveElementPolyfillSupport;
var m3 = (t5, e5) => t5;
var S3 = { toAttribute(t5, e5) {
  switch (e5) {
    case Boolean:
      t5 = t5 ? E3 : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, e5) {
  let s4 = t5;
  switch (e5) {
    case Boolean:
      s4 = null !== t5;
      break;
    case Number:
      s4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t5);
      } catch (t6) {
        s4 = null;
      }
  }
  return s4;
} };
var $3 = (t5, e5) => !h3(t5, e5);
var g3 = { attribute: true, type: String, converter: S3, reflect: false, hasChanged: $3 };
Symbol.metadata ??= Symbol("metadata"), f3.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b3 = class extends HTMLElement {
  static addInitializer(t5) {
    this._$Ei(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t5, e5 = g3) {
    if (e5.state && (e5.attribute = false), this._$Ei(), this.elementProperties.set(t5, e5), !e5.noAccessor) {
      const s4 = Symbol(), i4 = this.getPropertyDescriptor(t5, s4, e5);
      void 0 !== i4 && c3(this.prototype, t5, i4);
    }
  }
  static getPropertyDescriptor(t5, e5, s4) {
    const { get: i4, set: r4 } = l3(this.prototype, t5) ?? { get() {
      return this[e5];
    }, set(t6) {
      this[e5] = t6;
    } };
    return { get() {
      return i4?.call(this);
    }, set(e6) {
      const o3 = i4?.call(this);
      r4.call(this, e6), this.requestUpdate(t5, o3, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? g3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m3("elementProperties")))
      return;
    const t5 = u3(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m3("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(m3("properties"))) {
      const t6 = this.properties, e5 = [...d3(t6), ...p3(t6)];
      for (const s4 of e5)
        this.createProperty(s4, t6[s4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const e5 = litPropertyMetadata.get(t5);
      if (void 0 !== e5)
        for (const [t6, s4] of e5)
          this.elementProperties.set(t6, s4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t6, e5] of this.elementProperties) {
      const s4 = this._$Eu(t6, e5);
      void 0 !== s4 && this._$Eh.set(s4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const e5 = [];
    if (Array.isArray(t5)) {
      const s4 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of s4)
        e5.unshift(a3(t6));
    } else
      void 0 !== t5 && e5.push(a3(t5));
    return e5;
  }
  static _$Eu(t5, e5) {
    const s4 = e5.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this._$EO?.delete(t5);
  }
  _$E_() {
    const t5 = /* @__PURE__ */ new Map(), e5 = this.constructor.elementProperties;
    for (const s4 of e5.keys())
      this.hasOwnProperty(s4) && (t5.set(s4, this[s4]), delete this[s4]);
    t5.size > 0 && (this._$Ep = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n3(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, e5, s4) {
    this._$AK(t5, s4);
  }
  _$EC(t5, e5) {
    const s4 = this.constructor.elementProperties.get(t5), i4 = this.constructor._$Eu(t5, s4);
    if (void 0 !== i4 && true === s4.reflect) {
      const r4 = (void 0 !== s4.converter?.toAttribute ? s4.converter : S3).toAttribute(e5, s4.type);
      this._$Em = t5, null == r4 ? this.removeAttribute(i4) : this.setAttribute(i4, r4), this._$Em = null;
    }
  }
  _$AK(t5, e5) {
    const s4 = this.constructor, i4 = s4._$Eh.get(t5);
    if (void 0 !== i4 && this._$Em !== i4) {
      const t6 = s4.getPropertyOptions(i4), r4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : S3;
      this._$Em = i4, this[i4] = r4.fromAttribute(e5, t6.type), this._$Em = null;
    }
  }
  requestUpdate(t5, e5, s4) {
    if (void 0 !== t5) {
      if (s4 ??= this.constructor.getPropertyOptions(t5), !(s4.hasChanged ?? $3)(this[t5], e5))
        return;
      this.P(t5, e5, s4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t5, e5, s4) {
    this._$AL.has(t5) || this._$AL.set(t5, e5), true === s4.reflect && this._$Em !== t5 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t5);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t7, e6] of this._$Ep)
          this[t7] = e6;
        this._$Ep = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0)
        for (const [e6, s4] of t6)
          true !== s4.wrapped || this._$AL.has(e6) || void 0 === this[e6] || this.P(e6, this[e6], s4);
    }
    let t5 = false;
    const e5 = this._$AL;
    try {
      t5 = this.shouldUpdate(e5), t5 ? (this.willUpdate(e5), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(e5)) : this._$EU();
    } catch (e6) {
      throw t5 = false, this._$EU(), e6;
    }
    t5 && this._$AE(e5);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$Ej &&= this._$Ej.forEach((t6) => this._$EC(t6, this[t6])), this._$EU();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
b3.elementStyles = [], b3.shadowRootOptions = { mode: "open" }, b3[m3("elementProperties")] = /* @__PURE__ */ new Map(), b3[m3("finalized")] = /* @__PURE__ */ new Map(), _3?.({ ReactiveElement: b3 }), (f3.reactiveElementVersions ??= []).push("2.0.4");

// virtual:/_100554_/l2/collabState.js
function subscribe(keyOrKeys, component) {
  return globalState.globalStateManagment.subscribe(keyOrKeys, component);
}
function unsubscribe(keyOrKeys, component) {
  return globalState.globalStateManagment.unsubscribe(keyOrKeys, component);
}
function notify(key) {
  return globalState.globalStateManagment.notify(key);
}
function initState(path, value) {
  const keys = path.split(".");
  if (!globalState._ica) {
    globalState._ica = {};
  }
  let current = globalState._ica;
  keys.forEach((key, index) => {
    if (!current[key]) {
      current[key] = index === keys.length - 1 ? value : {};
    } else if (index === keys.length - 1 && typeof current[key] === "object" && typeof value === "object") {
      if (Array.isArray(current[key]) && Array.isArray(value)) {
        current[key] = [...value];
      } else {
        current[key] = { ...value };
      }
    }
    current = current[key];
  });
}
var isTrace = false;
var globalState = {};
function getCollabWindow() {
  if (window.parent && window.parent !== window && window.parent.globalStateManagment) {
    return window.parent;
  }
  return window;
}
window.getCollabWindow = getCollabWindow;
Object.defineProperty(globalState, "_ica", {
  get: function() {
    return getCollabWindow()._ica;
  },
  set: function(v3) {
    getCollabWindow()._ica = v3;
  }
});
Object.defineProperty(globalState, "globalStateManagment", {
  get: function() {
    return getCollabWindow().globalStateManagment;
  },
  set: function(v3) {
    getCollabWindow().globalStateManagment = v3;
  }
});
Object.defineProperty(globalState, "globalVariation", {
  get: function() {
    return getCollabWindow().globalVariation;
  },
  set: function(v3) {
    getCollabWindow().globalVariation = v3;
  }
});
function getPathValue(obj, path) {
  return (path || "").split(".").reduce((acc, part) => {
    if (acc == null)
      return void 0;
    const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
    if (arrayMatch) {
      const prop = arrayMatch[1];
      const index = parseInt(arrayMatch[2], 10);
      return acc[prop]?.[index];
    }
    return acc[part];
  }, obj);
}
function setPathValue(obj, path, value) {
  const parts = (path || "").split(".");
  const last = parts.pop();
  if (!last)
    return;
  let lastObj;
  try {
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  } catch (e5) {
    const isArray = parts.some((p4) => /^\w+\[\d+\]$/.test(p4));
    initState(parts.join("."), isArray ? [] : {});
    obj = globalState._ica;
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  }
  const lastIsArray = /^\w+\[\d+\]$/.test(last);
  if (lastIsArray && !Array.isArray(lastObj[last]))
    lastObj[last] = [];
  if (!lastIsArray && typeof lastObj[last] !== "object")
    lastObj[last] = {};
  lastObj[last] = value;
}
var CollabStateSingleton = class {
  constructor() {
    this.componentMap = /* @__PURE__ */ new Map();
    this.history = [];
    this.notifyQueue = [];
    this.isNotifying = false;
  }
  getState(key) {
    const value = getPathValue(globalState._ica, key);
    if (isTrace)
      console.info("getState key: " + key + " value=", value);
    return value;
  }
  setState(key, value, systemChange) {
    systemChange = systemChange ?? false;
    const oldValue = getPathValue(globalState._ica, key);
    ;
    if (isTrace)
      console.info("setState key: " + key + " value=", value, ", oldValue=", oldValue);
    if (oldValue === value)
      return;
    const notifies = [key];
    if (typeof value === "object" && value !== null) {
      const n4 = this.getNotifies(key, value);
      for (const path of n4) {
        const oldValue2 = getPathValue(globalState._ica, path);
        const newValue = getPathValue(value, path.replace(key + ".", ""));
        if (oldValue2 !== newValue)
          notifies.push(path);
      }
    }
    setPathValue(globalState._ica, key, value);
    this.logHistory(key, value, systemChange);
    this.notify(notifies);
  }
  getNotifies(path, newObj) {
    const ret = [];
    const visit = (currentPath, value) => {
      if (value && typeof value === "object") {
        Object.keys(value).forEach((k2) => {
          const nextPath = /^\d+$/.test(k2) ? `${currentPath}[${k2}]` : `${currentPath}.${k2}`;
          if (this.componentMap.has(nextPath)) {
            ret.push(nextPath);
          }
          visit(nextPath, value[k2]);
        });
      }
    };
    visit(path, newObj);
    return ret;
  }
  logHistory(key, value, system) {
    const entry = {
      timestamp: Date.now(),
      system,
      key,
      value
    };
    this.history.push(entry);
    if (this.history.length > 1e4) {
      this.history.shift();
    }
  }
  getHistory() {
    return this.history;
  }
  clearHistory() {
    this.history = [];
  }
  subscribe(keyOrKeys, component, id) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (isTrace)
        console.log("subscribe key(s)", keyOrKeys);
      const isExclusive = key.startsWith("*");
      if (isExclusive) {
        this.componentMap.delete(key);
      }
      if (!this.componentMap.has(key)) {
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      }
      this.componentMap.get(key).add(component);
    });
  }
  unsubscribe(keyOrKeys, component) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (component === "*") {
        if (isTrace)
          console.log("unsubscribe key", key, " all components");
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      } else {
        if (isTrace)
          console.log("unsubscribe key", key, this.componentMap.get(key)?.has(component));
        this.componentMap.get(key)?.delete(component);
      }
    });
  }
  notify(keys) {
    if (typeof keys === "string")
      keys = [keys];
    for (const key of keys) {
      if (!this.notifyQueue.includes(key)) {
        this.notifyQueue.push(key);
      }
    }
    if (this.isNotifying)
      return;
    this.isNotifying = true;
    let nextKey = "";
    try {
      while (this.notifyQueue.length > 0) {
        nextKey = this.notifyQueue.shift();
        if (isTrace)
          console.log(`notify key=${nextKey}`, this.componentMap);
        Array.from(this.componentMap).find((map) => {
          const [stateKey, arr] = map;
          const path = stateKey.split(";")[1];
          if (path !== nextKey)
            return;
          arr.forEach((component) => {
            if ("handleIcaStateChange" in component) {
              component["handleIcaStateChange"](nextKey, this.getState(nextKey));
            } else if (typeof component === "function") {
              component(nextKey, this.getState(nextKey));
            } else {
              console.error("invalid notify on key: " + nextKey);
            }
          });
        });
      }
    } catch (e5) {
      console.error("error on notify, key: " + nextKey, e5);
    } finally {
      this.isNotifying = false;
    }
  }
  getStateStatistics() {
    const statistics = /* @__PURE__ */ new Map();
    this.componentMap.forEach((value, key) => {
      statistics.set(key, value.size);
    });
    return statistics;
  }
};
function getCollabStateInstance() {
  const win = getCollabWindow();
  if (!win.collabState) {
    win.collabState = new CollabStateSingleton();
  }
  return win.collabState;
}
if (!globalState.globalStateManagment)
  globalState.globalStateManagment = getCollabStateInstance();
if (!globalState._ica)
  globalState._ica = {};

// virtual:/_100554_/l2/collabLitElement.js
var __decorate = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var CollabLitElement = class extends ft {
  constructor() {
    super(...arguments);
    this.globalVariation = globalState.globalVariation || 0;
  }
  createRenderRoot() {
    return this;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("globalVariation") && changedProperties.get("globalVariation") !== void 0) {
      this.requestUpdate();
    }
  }
  getMessageKey(messages) {
    return getMessageKey(messages);
  }
  loadStyle(css) {
    if (!css)
      return;
    const tagName = this.tagName.toLowerCase();
    const alreadyAdded = document.head.querySelector(`style#${tagName}`);
    if (alreadyAdded) {
      alreadyAdded.textContent = css;
      return;
    }
    const style = document.createElement("style");
    style.id = tagName;
    style.textContent = css;
    document.head.appendChild(style);
  }
};
__decorate([
  w2({ type: Number })
], CollabLitElement.prototype, "globalVariation", void 0);
function getMessageKey(messages) {
  const keys = Object.keys(messages);
  if (!keys || keys.length < 1)
    throw new Error("Error Message not valid for international");
  const firstKey = keys[0];
  const lang = (document.documentElement.lang || "").toLowerCase();
  if (!lang)
    return firstKey;
  if (messages.hasOwnProperty(lang))
    return lang;
  const similarLang = keys.find((key) => lang.substring(0, 2) === key);
  if (similarLang)
    return similarLang;
  return firstKey;
}

// virtual:/_100554_/l2/contentTabs
var __decorate2 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var ContentTabs = class ContentTabs2 extends CollabLitElement {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`content-tabs-100554 .content-tabs-100554-nav{display:flex;gap:8px}content-tabs-100554 .content-tabs-100554-tab{cursor:pointer;padding:6px 12px;border:1px solid #ccc;border-bottom:none;border-radius:4px 4px 0 0}content-tabs-100554 .content-tabs-100554-tab[selected]{background:white;border:2px solid #3f51b5;border-bottom:none;color:#3f51b5;font-weight:600}content-tabs-100554 .content-tabs-100554-section{border:2px solid #e0e0e0;border-radius:0 6px 6px 6px;padding:16px;margin-top:-2px;background:white}content-tabs-100554 .content-tabs-100554-content{display:block;border:1px solid #ccc;padding:12px}content-tabs-100554 .content-tabs-100554-content:not([active]){display:none}`);
    this.navItems = [];
    this.contentItems = [];
    this.selectedIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    const div = document.createElement("div");
    div.innerHTML = this.innerHTML;
    this.innerHTML = "";
    this.navItems = Array.from(div.querySelectorAll("nav-item"));
    this.contentItems = Array.from(div.querySelectorAll("content-item"));
  }
  render() {
    return Z`
            ${this.renderNav()}
            ${this.renderContent()}
        `;
  }
  renderNav() {
    if (this.navItems.length === 0)
      return "";
    return Z`
        <nav class="content-tabs-100554-nav">
            ${this.navItems.map((item, i4) => Z`
                <nav-item class="content-tabs-100554-tab" ?selected=${this.selectedIndex === i4} @click=${() => this.handleSelect(i4)} >
                    ${item.innerHTML}
                </nav-item>
            `)}
        </nav>
        `;
  }
  renderContent() {
    if (this.contentItems.length === 0)
      return "";
    return Z`
        <section class="content-tabs-100554-section">
        ${this.contentItems.map((content, i4) => Z`
            <content-item class="content-tabs-100554-content" ?active=${this.selectedIndex === i4}>
              ${ms(content.innerHTML)}
            </content-item>
          `)}
      </section>
        `;
  }
  handleSelect(index) {
    this.selectedIndex = index;
  }
};
__decorate2([
  w2({ type: Number, reflect: true })
], ContentTabs.prototype, "selectedIndex", void 0);
ContentTabs = __decorate2([
  e2("content-tabs-100554")
], ContentTabs);

// virtual:/_100554_/l2/stateLitElement.js
var isTrace2 = false;
var StateLitElement = class extends CollabLitElement {
  constructor() {
    super(...arguments);
    this.stateKeys = /* @__PURE__ */ new Map();
  }
  updateStateKeys(attributeName, paths) {
    if (!attributeName || !paths || paths.length === 0) {
      console.warn("Invalid state key update attempt", { attributeName, paths });
      return;
    }
    for (const key of this.stateKeys.keys()) {
      if (key.startsWith(`${attributeName}/`)) {
        this.stateKeys.delete(key);
        unsubscribe([key], this);
      }
    }
    paths.forEach((path, index) => {
      const newItem = `${attributeName}/${index};${path}`;
      if (!this.stateKeys.has(newItem)) {
        this.stateKeys.set(newItem, false);
        this.subscribeToState(newItem);
      }
    });
  }
  subscribeToState(stateKey) {
    if (!this.stateKeys.get(stateKey)) {
      subscribe([stateKey], this);
      this.stateKeys.set(stateKey, true);
    }
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    this._loadStartTime = performance.now();
    super.connectedCallback();
    if (isTrace2) {
      console.info(`connectedCallback, subscribe fields: ${Array.from(this.stateKeys.keys())}`);
    }
    this.stateKeys.forEach((isSubscribed, stateKey) => {
      if (!isSubscribed) {
        this.subscribeToState(stateKey);
      }
    });
    if (!window.collabPluginMonitor) {
      this.connectMonitoring();
    }
    const tagName = this.tagName.toLowerCase();
    window.collabPluginMonitor.reportStart(tagName, this._loadStartTime);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stateKeys.forEach((isSubscribed, stateKey) => {
      if (isSubscribed)
        unsubscribe([stateKey], this);
      this.stateKeys.set(stateKey, false);
    });
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.stateKeys.forEach((_isSubscribed, stateKey) => {
      const [, path] = stateKey.split(";");
      notify(path);
    });
    if (!window.collabPluginMonitor) {
      this.connectMonitoring();
    }
    const duration = performance.now() - (this._loadStartTime ?? 0);
    const tagName = this.tagName.toLowerCase();
    window.collabPluginMonitor.reportDone(tagName, duration);
  }
  updated(_changedProps) {
    super.updated(_changedProps);
    const start = performance.now();
    requestAnimationFrame(() => {
      const tagName = this.tagName.toLowerCase();
      const renderTime = performance.now() - start;
      window.collabPluginMonitor?.reportUpdate?.(tagName, renderTime);
    });
  }
  handleIcaStateChange(key, value) {
    const isEqual = (a4, b4) => a4 === b4 || typeof a4 === "object" && JSON.stringify(a4) === JSON.stringify(b4);
    const ob1 = this;
    this.stateKeys.forEach((_isSubscribed, stateKey) => {
      let [propName, path] = stateKey.split(";");
      propName = propName.split("/")[0];
      if (path !== key || !ob1.hasAttribute(propName))
        return;
      const propValue = ob1[`_${propName}`];
      if (!isEqual(value, propValue)) {
        ob1[`_${propName}`] = value;
        this.requestUpdate();
      }
    });
  }
  connectMonitoring() {
    if (window.collabPluginMonitor)
      return;
    const monitor = {
      records: {},
      reportStart(name, _startTime) {
      },
      reportDone(name, duration) {
        const rec = this.getRec(name);
        rec.count++;
        rec.totalTime += duration;
        monitor.records[name] = rec;
      },
      reportUpdate(name, duration) {
        const rec = this.getRec(name);
        rec.updateCount++;
        rec.updateTime += duration;
        this.records[name] = rec;
      },
      getRec(name) {
        return this.records[name] || {
          name,
          count: 0,
          totalTime: 0,
          updateCount: 0,
          updateTime: 0
        };
      },
      sts() {
        return Object.values(this.records).map((r4) => ({
          name: r4.name,
          count: r4.count,
          totalTime: parseFloat(r4.totalTime.toFixed(2)),
          avgTime: parseFloat((r4.totalTime / r4.count).toFixed(2)),
          updateCount: r4.updateCount ?? 0,
          updateTime: parseFloat((r4.updateTime ?? 0).toFixed(2)),
          avgUpdateTime: r4.updateCount ? parseFloat((r4.updateTime / r4.updateCount).toFixed(2)) : 0
        }));
      }
    };
    window.collabPluginMonitor = monitor;
  }
};

// virtual:/_100554_/l2/utilsLit.js
function convertTagToFileName(tag) {
  const parts = tag.split("--");
  const namePart = parts.pop() || "";
  const folder = parts.join("/").replace(/-(.)/g, (_4, letter) => letter.toUpperCase());
  const regex = /(.+)-(\d+)$/;
  const match = namePart.match(regex);
  if (!match)
    return;
  const [, rest, number] = match;
  const shortName = rest.replace(/-(.)/g, (_4, letter) => letter.toUpperCase());
  return {
    shortName,
    project: +number,
    folder
  };
}

// virtual:/_100554_/l2/collabPageElement
var __decorate3 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var PREFIX_ICA_ID = "ica_";
var CollabPageElement = class extends StateLitElement {
  recreateOverlay() {
    this.overlay?.remove();
    this.overlay = void 0;
    this.createOverlay();
  }
  refreshOverlay() {
    this.checkToAddOverlay();
  }
  constructor() {
    super();
    this.modeoverlay = "";
    this.initPageComplete = false;
    this.level = window.mls && mls.actualLevel ? mls.actualLevel.toString() : "7";
    this.isPage = true;
    this.hasImport = [];
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.checkToAddOverlay();
    }, 500);
    await this.initPage();
    this.initPageComplete = true;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("level") && changedProperties.get("level") !== void 0) {
      this.checkToAddOverlay();
    }
  }
  render() {
    this.style.position = "relative";
    return Z``;
  }
  setupIds() {
    const icas = this.findAllElementsIca(this);
    icas.forEach((item) => {
      const oldId = item.element.id;
      const icaId = `${PREFIX_ICA_ID}${item.element.id}`;
      item.element.setAttribute("id", icaId);
      item.element.setAttribute("idel", oldId);
    });
  }
  checkToAddOverlay() {
    if (this.level === "7") {
      this.overlay?.remove();
      this.overlay = void 0;
      return;
    }
    if (this.overlay) {
      this.overlay.setAttribute("level", this.level);
      this.overlay.changeOverlayItemsLevel();
      return;
    }
    this.createOverlay();
  }
  async createOverlay() {
    if (!this.modeoverlay)
      return;
    const ok = await this.importWCDOverlay(this.modeoverlay);
    if (!ok)
      return;
    this.overlay = document.createElement(this.modeoverlay);
    this.overlay.myItens = this.findAllElementsIca(this);
    this.overlay.createOverlayItems();
    this.appendChild(this.overlay);
    mls.events.fire(3, "WCDEventChange", JSON.stringify({ op: "recreateOverlay" }));
  }
  async importWCDOverlay(imports) {
    try {
      if (this.hasImport.includes(imports))
        return true;
      const info = convertTagToFileName(imports);
      if (!info)
        return;
      imports = `_${info.project}_/l2/${info.shortName}`;
      if (!imports.startsWith("./")) {
        imports = "/" + imports;
      }
      await import(imports);
      this.hasImport.push(imports);
      return true;
    } catch (e5) {
      console.info(e5);
      return false;
    }
  }
  findAllElementsIca(el) {
    let elements = [];
    let elToSearch = el;
    const arrayEls = [];
    function traverseShadowRoot(element, depth) {
      if (element.getAttribute("mls_origin") && !arrayEls.includes(element)) {
        const { x: x2, y: y4, height, width } = element.getBoundingClientRect();
        elements.push({ element, depth, x: x2, y: y4, height, width, opacity: element.style.opacity });
        arrayEls.push(element);
        return;
      }
      if (element.shadowRoot) {
        element.shadowRoot.querySelectorAll("*").forEach((item) => {
          traverseShadowRoot(item, depth + 1);
        });
      } else {
        const children = Array.from(element.children);
        if (children.length > 0) {
          children.forEach((child) => traverseShadowRoot(child, depth + 1));
        }
      }
    }
    if (el.shadowRoot)
      elToSearch = el.shadowRoot;
    elToSearch.querySelectorAll("*").forEach((item) => {
      traverseShadowRoot(item, 0);
    });
    return elements;
  }
};
__decorate3([
  w2({ type: String, reflect: true })
], CollabPageElement.prototype, "modeoverlay", void 0);
__decorate3([
  w2()
], CollabPageElement.prototype, "initPageComplete", void 0);
__decorate3([
  w2({ type: String, reflect: true })
], CollabPageElement.prototype, "level", void 0);

// virtual:/_100554_/l2/collabState
function getState(key) {
  return globalState2.globalStateManagment.getState(key);
}
function setState(key, value, systemChange) {
  globalState2.globalStateManagment.setState(key, value, systemChange);
}
function initState2(path, value) {
  const keys = path.split(".");
  if (!globalState2._ica) {
    globalState2._ica = {};
  }
  let current = globalState2._ica;
  keys.forEach((key, index) => {
    if (!current[key]) {
      current[key] = index === keys.length - 1 ? value : {};
    } else if (index === keys.length - 1 && typeof current[key] === "object" && typeof value === "object") {
      if (Array.isArray(current[key]) && Array.isArray(value)) {
        current[key] = [...value];
      } else {
        current[key] = { ...value };
      }
    }
    current = current[key];
  });
}
var isTrace3 = false;
var globalState2 = {};
function getCollabWindow2() {
  if (window.parent && window.parent !== window && window.parent.globalStateManagment) {
    return window.parent;
  }
  return window;
}
window.getCollabWindow = getCollabWindow2;
Object.defineProperty(globalState2, "_ica", {
  get: function() {
    return getCollabWindow2()._ica;
  },
  set: function(v3) {
    getCollabWindow2()._ica = v3;
  }
});
Object.defineProperty(globalState2, "globalStateManagment", {
  get: function() {
    return getCollabWindow2().globalStateManagment;
  },
  set: function(v3) {
    getCollabWindow2().globalStateManagment = v3;
  }
});
Object.defineProperty(globalState2, "globalVariation", {
  get: function() {
    return getCollabWindow2().globalVariation;
  },
  set: function(v3) {
    getCollabWindow2().globalVariation = v3;
  }
});
function getPathValue2(obj, path) {
  return (path || "").split(".").reduce((acc, part) => {
    if (acc == null)
      return void 0;
    const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
    if (arrayMatch) {
      const prop = arrayMatch[1];
      const index = parseInt(arrayMatch[2], 10);
      return acc[prop]?.[index];
    }
    return acc[part];
  }, obj);
}
function setPathValue2(obj, path, value) {
  const parts = (path || "").split(".");
  const last = parts.pop();
  if (!last)
    return;
  let lastObj;
  try {
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  } catch (e5) {
    const isArray = parts.some((p4) => /^\w+\[\d+\]$/.test(p4));
    initState2(parts.join("."), isArray ? [] : {});
    obj = globalState2._ica;
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  }
  const lastIsArray = /^\w+\[\d+\]$/.test(last);
  if (lastIsArray && !Array.isArray(lastObj[last]))
    lastObj[last] = [];
  if (!lastIsArray && typeof lastObj[last] !== "object")
    lastObj[last] = {};
  lastObj[last] = value;
}
var CollabStateSingleton2 = class {
  constructor() {
    this.componentMap = /* @__PURE__ */ new Map();
    this.history = [];
    this.notifyQueue = [];
    this.isNotifying = false;
  }
  getState(key) {
    const value = getPathValue2(globalState2._ica, key);
    if (isTrace3)
      console.info("getState key: " + key + " value=", value);
    return value;
  }
  setState(key, value, systemChange) {
    systemChange = systemChange ?? false;
    const oldValue = getPathValue2(globalState2._ica, key);
    ;
    if (isTrace3)
      console.info("setState key: " + key + " value=", value, ", oldValue=", oldValue);
    if (oldValue === value)
      return;
    const notifies = [key];
    if (typeof value === "object" && value !== null) {
      const n4 = this.getNotifies(key, value);
      for (const path of n4) {
        const oldValue2 = getPathValue2(globalState2._ica, path);
        const newValue = getPathValue2(value, path.replace(key + ".", ""));
        if (oldValue2 !== newValue)
          notifies.push(path);
      }
    }
    setPathValue2(globalState2._ica, key, value);
    this.logHistory(key, value, systemChange);
    this.notify(notifies);
  }
  getNotifies(path, newObj) {
    const ret = [];
    const visit = (currentPath, value) => {
      if (value && typeof value === "object") {
        Object.keys(value).forEach((k2) => {
          const nextPath = /^\d+$/.test(k2) ? `${currentPath}[${k2}]` : `${currentPath}.${k2}`;
          if (this.componentMap.has(nextPath)) {
            ret.push(nextPath);
          }
          visit(nextPath, value[k2]);
        });
      }
    };
    visit(path, newObj);
    return ret;
  }
  logHistory(key, value, system) {
    const entry = {
      timestamp: Date.now(),
      system,
      key,
      value
    };
    this.history.push(entry);
    if (this.history.length > 1e4) {
      this.history.shift();
    }
  }
  getHistory() {
    return this.history;
  }
  clearHistory() {
    this.history = [];
  }
  subscribe(keyOrKeys, component, id) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (isTrace3)
        console.log("subscribe key(s)", keyOrKeys);
      const isExclusive = key.startsWith("*");
      if (isExclusive) {
        this.componentMap.delete(key);
      }
      if (!this.componentMap.has(key)) {
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      }
      this.componentMap.get(key).add(component);
    });
  }
  unsubscribe(keyOrKeys, component) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (component === "*") {
        if (isTrace3)
          console.log("unsubscribe key", key, " all components");
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      } else {
        if (isTrace3)
          console.log("unsubscribe key", key, this.componentMap.get(key)?.has(component));
        this.componentMap.get(key)?.delete(component);
      }
    });
  }
  notify(keys) {
    if (typeof keys === "string")
      keys = [keys];
    for (const key of keys) {
      if (!this.notifyQueue.includes(key)) {
        this.notifyQueue.push(key);
      }
    }
    if (this.isNotifying)
      return;
    this.isNotifying = true;
    let nextKey = "";
    try {
      while (this.notifyQueue.length > 0) {
        nextKey = this.notifyQueue.shift();
        if (isTrace3)
          console.log(`notify key=${nextKey}`, this.componentMap);
        Array.from(this.componentMap).find((map) => {
          const [stateKey, arr] = map;
          const path = stateKey.split(";")[1];
          if (path !== nextKey)
            return;
          arr.forEach((component) => {
            if ("handleIcaStateChange" in component) {
              component["handleIcaStateChange"](nextKey, this.getState(nextKey));
            } else if (typeof component === "function") {
              component(nextKey, this.getState(nextKey));
            } else {
              console.error("invalid notify on key: " + nextKey);
            }
          });
        });
      }
    } catch (e5) {
      console.error("error on notify, key: " + nextKey, e5);
    } finally {
      this.isNotifying = false;
    }
  }
  getStateStatistics() {
    const statistics = /* @__PURE__ */ new Map();
    this.componentMap.forEach((value, key) => {
      statistics.set(key, value.size);
    });
    return statistics;
  }
};
function getCollabStateInstance2() {
  const win = getCollabWindow2();
  if (!win.collabState) {
    win.collabState = new CollabStateSingleton2();
  }
  return win.collabState;
}
if (!globalState2.globalStateManagment)
  globalState2.globalStateManagment = getCollabStateInstance2();
if (!globalState2._ica)
  globalState2._ica = {};

// virtual:/_102022_/l2/ecommerce/shopeeFeeCalculator
var __decorate4 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var EcommerceShopeeFeeCalculator102022 = class EcommerceShopeeFeeCalculator1020222 extends CollabPageElement {
  constructor() {
    super();
    this.price = 0;
    this.cost = 0;
    this.freight = 0;
    this.discount = 0;
    this.commissionPercent = 12;
    this.paymentFeePercent = 2.5;
  }
  initPage() {
    setState("ui.mdm.pageTitle.title", `Calculadora de Taxas - Shopee`);
    const savedConfig = getState("ui.shopeeFeeCalculator.config");
    initState2("ui.shopeeFeeCalculator.config", {
      commissionPercent: savedConfig?.commissionPercent ?? 12,
      paymentFeePercent: savedConfig?.paymentFeePercent ?? 2.5,
      currency: savedConfig?.currency ?? "BRL"
    });
    const cfg = getState("ui.shopeeFeeCalculator.config");
    this.commissionPercent = cfg?.commissionPercent ?? 12;
    this.paymentFeePercent = cfg?.paymentFeePercent ?? 2.5;
  }
  onInputNumber(e5) {
    const t5 = e5.target;
    const v3 = parseFloat(t5.value.replace(",", ".")) || 0;
    switch (t5.name) {
      case "price":
        this.price = v3;
        break;
      case "cost":
        this.cost = v3;
        break;
      case "freight":
        this.freight = v3;
        break;
      case "discount":
        this.discount = v3;
        break;
      case "commissionPercent":
        this.commissionPercent = v3;
        setState("ui.shopeeFeeCalculator.config", {
          commissionPercent: this.commissionPercent,
          paymentFeePercent: this.paymentFeePercent
        });
        break;
      case "paymentFeePercent":
        this.paymentFeePercent = v3;
        setState("ui.shopeeFeeCalculator.config", {
          commissionPercent: this.commissionPercent,
          paymentFeePercent: this.paymentFeePercent
        });
        break;
    }
    this.requestUpdate();
  }
  compute() {
    const price = Number(this.price || 0);
    const cost = Number(this.cost || 0);
    const freight = Number(this.freight || 0);
    const discount = Number(this.discount || 0);
    const commissionValue = +(price * (this.commissionPercent / 100));
    const paymentFeeValue = +(price * (this.paymentFeePercent / 100));
    const totalFees = +(commissionValue + paymentFeeValue);
    const costTotal = +(cost + freight + totalFees);
    const profit = +(price - discount - cost - freight - totalFees);
    const margin = price !== 0 ? +(profit / price * 100) : 0;
    return {
      commissionValue: Number(commissionValue.toFixed(2)),
      paymentFeeValue: Number(paymentFeeValue.toFixed(2)),
      totalFees: Number(totalFees.toFixed(2)),
      costTotal: Number(costTotal.toFixed(2)),
      profit: Number(profit.toFixed(2)),
      margin: Number(margin.toFixed(2))
    };
  }
  saveHistory() {
    const now = new Date();
    const computed = this.compute();
    const entry = {
      date: now.toISOString(),
      price: this.price,
      cost: this.cost,
      freight: this.freight,
      discount: this.discount,
      commissionPercent: this.commissionPercent,
      paymentFeePercent: this.paymentFeePercent,
      fees: computed.totalFees,
      profit: computed.profit,
      margin: computed.margin
    };
    const key = "ui.shopeeFeeCalculator.history";
    const existing = getState(key) || JSON.parse(localStorage.getItem(key) || "null") || [];
    existing.unshift(entry);
    const trimmed = existing.slice(0, 200);
    setState(key, trimmed);
    localStorage.setItem(key, JSON.stringify(trimmed));
    setState("ui.shopeeFeeCalculator.lastSaved", entry);
    this.requestUpdate();
  }
  exportCsv() {
    const key = "ui.shopeeFeeCalculator.history";
    const history = getState(key) || JSON.parse(localStorage.getItem(key) || "null") || [];
    if (!history || history.length === 0) {
      return;
    }
    const headers = ["date", "price", "cost", "freight", "discount", "commissionPercent", "paymentFeePercent", "fees", "profit", "margin"];
    const rows = history.map((r4) => headers.map((h4) => {
      const v3 = r4[h4];
      if (v3 === void 0 || v3 === null)
        return "";
      return typeof v3 === "number" ? v3.toFixed(2) : `"${String(v3).replace(/"/g, '""')}"`;
    }).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a4 = document.createElement("a");
    a4.href = url;
    a4.download = "shopee_fee_history.csv";
    a4.click();
    URL.revokeObjectURL(url);
  }
  getHistoryArray() {
    const key = "ui.shopeeFeeCalculator.history";
    const history = getState(key) || JSON.parse(localStorage.getItem(key) || "null") || [];
    return Array.isArray(history) ? history : [];
  }
  deleteHistory(index) {
    const key = "ui.shopeeFeeCalculator.history";
    const existing = this.getHistoryArray();
    if (!existing || existing.length === 0)
      return;
    if (index < 0 || index >= existing.length)
      return;
    existing.splice(index, 1);
    setState(key, existing);
    localStorage.setItem(key, JSON.stringify(existing));
    setState("ui.shopeeFeeCalculator.lastSaved", existing[0] || null);
    this.requestUpdate();
  }
  clearHistory() {
    const key = "ui.shopeeFeeCalculator.history";
    setState(key, []);
    localStorage.removeItem(key);
    setState("ui.shopeeFeeCalculator.lastSaved", null);
    this.requestUpdate();
  }
  renderHistory() {
    const history = this.getHistoryArray();
    return Z`
    <div class="mt-6 bg-white p-4 rounded-lg shadow">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-800">Histórico de Cálculos</h3>
        <div class="flex items-center gap-2">
          <button @click="${() => this.clearHistory()}" class="px-3 py-1 bg-red-600 text-white rounded text-sm">Limpar tudo</button>
          <button @click="${() => this.exportCsv()}" class="px-3 py-1 bg-green-600 text-white rounded text-sm">Exportar CSV</button>
        </div>
      </div>
      <div class="mt-4">
        ${history.length === 0 ? Z`<p class="text-gray-600">Nenhum registro salvo ainda. Use "Salvar histórico" após um cálculo para criar entradas.</p>` : Z`
          <ul class="space-y-3">
            ${history.map((entry, i4) => Z`
              <li class="border rounded p-3 flex justify-between items-start bg-gray-50">
                <div>
                  <div class="text-sm text-gray-500">${new Date(entry.date).toLocaleString("pt-BR")}</div>
                  <div class="mt-1 text-gray-800">
                    <div>Preço: R$ ${Number(entry.price || 0).toFixed(2)} &nbsp;•&nbsp; Lucro: R$ ${Number(entry.profit || 0).toFixed(2)} &nbsp;•&nbsp; Margem: ${Number(entry.margin || 0).toFixed(2)}%</div>
                    <div class="text-sm text-gray-600">Comissão: ${Number(entry.commissionPercent || 0).toFixed(2)}% • Taxa de pagamento: ${Number(entry.paymentFeePercent || 0).toFixed(2)}%</div>
                  </div>
                </div>
                <div class="flex flex-col items-end gap-2">
                  <button @click="${() => this.deleteHistory(i4)}" class="px-2 py-1 bg-yellow-500 text-white rounded text-sm">Deletar</button>
                </div>
              </li>
            `)}
          </ul>
        `}
      </div>
    </div>
  `;
  }
  renderInputs() {
    const c4 = this.compute();
    return Z`
  <div class="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">Calculadora de Taxas - Shopee</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label class="block">
        <span class="text-sm text-gray-600">Preço de venda (R$)</span>
        <input name="price" type="number" step="0.01" .value="${this.price}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Custo do produto (R$)</span>
        <input name="cost" type="number" step="0.01" .value="${this.cost}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Frete (R$)</span>
        <input name="freight" type="number" step="0.01" .value="${this.freight}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Desconto / Cupom (R$)</span>
        <input name="discount" type="number" step="0.01" .value="${this.discount}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Comissão da plataforma (%)</span>
        <input name="commissionPercent" type="number" step="0.01" .value="${this.commissionPercent}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Taxa de pagamento (%)</span>
        <input name="paymentFeePercent" type="number" step="0.01" .value="${this.paymentFeePercent}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
    </div>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-50 p-4 rounded">
        <h3 class="font-semibold text-gray-700">Resumo de taxas</h3>
        <div class="mt-2 text-gray-800">
          <div class="flex justify-between"><span>Comissão (${this.commissionPercent}%):</span><span>R$ ${c4.commissionValue.toFixed(2)}</span></div>
          <div class="flex justify-between"><span>Taxa de pagamento (${this.paymentFeePercent}%):</span><span>R$ ${c4.paymentFeeValue.toFixed(2)}</span></div>
          <div class="flex justify-between font-semibold mt-2"><span>Total de taxas:</span><span>R$ ${c4.totalFees.toFixed(2)}</span></div>
        </div>
      </div>
      <div class="bg-gray-50 p-4 rounded">
        <h3 class="font-semibold text-gray-700">Resultado financeiro</h3>
        <div class="mt-2 text-gray-800">
          <div class="flex justify-between"><span>Custo total (produto + frete + taxas):</span><span>R$ ${c4.costTotal.toFixed(2)}</span></div>
          <div class="flex justify-between"><span>Lucro líquido:</span><span>R$ ${c4.profit.toFixed(2)}</span></div>
          <div class="flex justify-between"><span>Margem:</span><span>${c4.margin.toFixed(2)}%</span></div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex gap-3">
      <button @click="${() => this.saveHistory()}" class="px-4 py-2 bg-blue-600 text-white rounded">Salvar histórico</button>
      <button @click="${() => this.exportCsv()}" class="px-4 py-2 bg-green-600 text-white rounded">Exportar CSV</button>
    </div>
    ${this.renderHistory()}
  </div>
  `;
  }
  render() {
    return Z`
    <div class="p-4">
      ${this.renderInputs()}
    </div>
  `;
  }
};
EcommerceShopeeFeeCalculator102022 = __decorate4([
  e2("ecommerce--shopee-fee-calculator-102022")
], EcommerceShopeeFeeCalculator102022);

// virtual:/_100554_contentTabs
var __decorate5 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var ContentTabs3 = class ContentTabs4 extends CollabLitElement {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`content-tabs-100554 .content-tabs-100554-nav{display:flex;gap:8px}content-tabs-100554 .content-tabs-100554-tab{cursor:pointer;padding:6px 12px;border:1px solid #ccc;border-bottom:none;border-radius:4px 4px 0 0}content-tabs-100554 .content-tabs-100554-tab[selected]{background:white;border:2px solid #3f51b5;border-bottom:none;color:#3f51b5;font-weight:600}content-tabs-100554 .content-tabs-100554-section{border:2px solid #e0e0e0;border-radius:0 6px 6px 6px;padding:16px;margin-top:-2px;background:white}content-tabs-100554 .content-tabs-100554-content{display:block;border:1px solid #ccc;padding:12px}content-tabs-100554 .content-tabs-100554-content:not([active]){display:none}`);
    this.navItems = [];
    this.contentItems = [];
    this.selectedIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    const div = document.createElement("div");
    div.innerHTML = this.innerHTML;
    this.innerHTML = "";
    this.navItems = Array.from(div.querySelectorAll("nav-item"));
    this.contentItems = Array.from(div.querySelectorAll("content-item"));
  }
  render() {
    return Z`
            ${this.renderNav()}
            ${this.renderContent()}
        `;
  }
  renderNav() {
    if (this.navItems.length === 0)
      return "";
    return Z`
        <nav class="content-tabs-100554-nav">
            ${this.navItems.map((item, i4) => Z`
                <nav-item class="content-tabs-100554-tab" ?selected=${this.selectedIndex === i4} @click=${() => this.handleSelect(i4)} >
                    ${item.innerHTML}
                </nav-item>
            `)}
        </nav>
        `;
  }
  renderContent() {
    if (this.contentItems.length === 0)
      return "";
    return Z`
        <section class="content-tabs-100554-section">
        ${this.contentItems.map((content, i4) => Z`
            <content-item class="content-tabs-100554-content" ?active=${this.selectedIndex === i4}>
              ${ms(content.innerHTML)}
            </content-item>
          `)}
      </section>
        `;
  }
  handleSelect(index) {
    this.selectedIndex = index;
  }
};
__decorate5([
  w2({ type: Number, reflect: true })
], ContentTabs3.prototype, "selectedIndex", void 0);
ContentTabs3 = __decorate5([
  e2("content-tabs-100554")
], ContentTabs3);

// virtual:/_102022_ecommerce/shopeeFeeCalculator
var __decorate6 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var EcommerceShopeeFeeCalculator1020223 = class EcommerceShopeeFeeCalculator1020224 extends CollabPageElement {
  constructor() {
    super();
    this.price = 0;
    this.cost = 0;
    this.freight = 0;
    this.discount = 0;
    this.commissionPercent = 12;
    this.paymentFeePercent = 2.5;
  }
  initPage() {
    setState("ui.mdm.pageTitle.title", `Calculadora de Taxas - Shopee`);
    const savedConfig = getState("ui.shopeeFeeCalculator.config");
    initState2("ui.shopeeFeeCalculator.config", {
      commissionPercent: savedConfig?.commissionPercent ?? 12,
      paymentFeePercent: savedConfig?.paymentFeePercent ?? 2.5,
      currency: savedConfig?.currency ?? "BRL"
    });
    const cfg = getState("ui.shopeeFeeCalculator.config");
    this.commissionPercent = cfg?.commissionPercent ?? 12;
    this.paymentFeePercent = cfg?.paymentFeePercent ?? 2.5;
  }
  onInputNumber(e5) {
    const t5 = e5.target;
    const v3 = parseFloat(t5.value.replace(",", ".")) || 0;
    switch (t5.name) {
      case "price":
        this.price = v3;
        break;
      case "cost":
        this.cost = v3;
        break;
      case "freight":
        this.freight = v3;
        break;
      case "discount":
        this.discount = v3;
        break;
      case "commissionPercent":
        this.commissionPercent = v3;
        setState("ui.shopeeFeeCalculator.config", {
          commissionPercent: this.commissionPercent,
          paymentFeePercent: this.paymentFeePercent
        });
        break;
      case "paymentFeePercent":
        this.paymentFeePercent = v3;
        setState("ui.shopeeFeeCalculator.config", {
          commissionPercent: this.commissionPercent,
          paymentFeePercent: this.paymentFeePercent
        });
        break;
    }
    this.requestUpdate();
  }
  compute() {
    const price = Number(this.price || 0);
    const cost = Number(this.cost || 0);
    const freight = Number(this.freight || 0);
    const discount = Number(this.discount || 0);
    const commissionValue = +(price * (this.commissionPercent / 100));
    const paymentFeeValue = +(price * (this.paymentFeePercent / 100));
    const totalFees = +(commissionValue + paymentFeeValue);
    const costTotal = +(cost + freight + totalFees);
    const profit = +(price - discount - cost - freight - totalFees);
    const margin = price !== 0 ? +(profit / price * 100) : 0;
    return {
      commissionValue: Number(commissionValue.toFixed(2)),
      paymentFeeValue: Number(paymentFeeValue.toFixed(2)),
      totalFees: Number(totalFees.toFixed(2)),
      costTotal: Number(costTotal.toFixed(2)),
      profit: Number(profit.toFixed(2)),
      margin: Number(margin.toFixed(2))
    };
  }
  saveHistory() {
    const now = new Date();
    const computed = this.compute();
    const entry = {
      date: now.toISOString(),
      price: this.price,
      cost: this.cost,
      freight: this.freight,
      discount: this.discount,
      commissionPercent: this.commissionPercent,
      paymentFeePercent: this.paymentFeePercent,
      fees: computed.totalFees,
      profit: computed.profit,
      margin: computed.margin
    };
    const key = "ui.shopeeFeeCalculator.history";
    const existing = getState(key) || JSON.parse(localStorage.getItem(key) || "null") || [];
    existing.unshift(entry);
    const trimmed = existing.slice(0, 200);
    setState(key, trimmed);
    localStorage.setItem(key, JSON.stringify(trimmed));
    setState("ui.shopeeFeeCalculator.lastSaved", entry);
    this.requestUpdate();
  }
  exportCsv() {
    const key = "ui.shopeeFeeCalculator.history";
    const history = getState(key) || JSON.parse(localStorage.getItem(key) || "null") || [];
    if (!history || history.length === 0) {
      return;
    }
    const headers = ["date", "price", "cost", "freight", "discount", "commissionPercent", "paymentFeePercent", "fees", "profit", "margin"];
    const rows = history.map((r4) => headers.map((h4) => {
      const v3 = r4[h4];
      if (v3 === void 0 || v3 === null)
        return "";
      return typeof v3 === "number" ? v3.toFixed(2) : `"${String(v3).replace(/"/g, '""')}"`;
    }).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a4 = document.createElement("a");
    a4.href = url;
    a4.download = "shopee_fee_history.csv";
    a4.click();
    URL.revokeObjectURL(url);
  }
  getHistoryArray() {
    const key = "ui.shopeeFeeCalculator.history";
    const history = getState(key) || JSON.parse(localStorage.getItem(key) || "null") || [];
    return Array.isArray(history) ? history : [];
  }
  deleteHistory(index) {
    const key = "ui.shopeeFeeCalculator.history";
    const existing = this.getHistoryArray();
    if (!existing || existing.length === 0)
      return;
    if (index < 0 || index >= existing.length)
      return;
    existing.splice(index, 1);
    setState(key, existing);
    localStorage.setItem(key, JSON.stringify(existing));
    setState("ui.shopeeFeeCalculator.lastSaved", existing[0] || null);
    this.requestUpdate();
  }
  clearHistory() {
    const key = "ui.shopeeFeeCalculator.history";
    setState(key, []);
    localStorage.removeItem(key);
    setState("ui.shopeeFeeCalculator.lastSaved", null);
    this.requestUpdate();
  }
  renderHistory() {
    const history = this.getHistoryArray();
    return Z`
    <div class="mt-6 bg-white p-4 rounded-lg shadow">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-800">Histórico de Cálculos</h3>
        <div class="flex items-center gap-2">
          <button @click="${() => this.clearHistory()}" class="px-3 py-1 bg-red-600 text-white rounded text-sm">Limpar tudo</button>
          <button @click="${() => this.exportCsv()}" class="px-3 py-1 bg-green-600 text-white rounded text-sm">Exportar CSV</button>
        </div>
      </div>
      <div class="mt-4">
        ${history.length === 0 ? Z`<p class="text-gray-600">Nenhum registro salvo ainda. Use "Salvar histórico" após um cálculo para criar entradas.</p>` : Z`
          <ul class="space-y-3">
            ${history.map((entry, i4) => Z`
              <li class="border rounded p-3 flex justify-between items-start bg-gray-50">
                <div>
                  <div class="text-sm text-gray-500">${new Date(entry.date).toLocaleString("pt-BR")}</div>
                  <div class="mt-1 text-gray-800">
                    <div>Preço: R$ ${Number(entry.price || 0).toFixed(2)} &nbsp;•&nbsp; Lucro: R$ ${Number(entry.profit || 0).toFixed(2)} &nbsp;•&nbsp; Margem: ${Number(entry.margin || 0).toFixed(2)}%</div>
                    <div class="text-sm text-gray-600">Comissão: ${Number(entry.commissionPercent || 0).toFixed(2)}% • Taxa de pagamento: ${Number(entry.paymentFeePercent || 0).toFixed(2)}%</div>
                  </div>
                </div>
                <div class="flex flex-col items-end gap-2">
                  <button @click="${() => this.deleteHistory(i4)}" class="px-2 py-1 bg-yellow-500 text-white rounded text-sm">Deletar</button>
                </div>
              </li>
            `)}
          </ul>
        `}
      </div>
    </div>
  `;
  }
  renderInputs() {
    const c4 = this.compute();
    return Z`
  <div class="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">Calculadora de Taxas - Shopee</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label class="block">
        <span class="text-sm text-gray-600">Preço de venda (R$)</span>
        <input name="price" type="number" step="0.01" .value="${this.price}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Custo do produto (R$)</span>
        <input name="cost" type="number" step="0.01" .value="${this.cost}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Frete (R$)</span>
        <input name="freight" type="number" step="0.01" .value="${this.freight}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Desconto / Cupom (R$)</span>
        <input name="discount" type="number" step="0.01" .value="${this.discount}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Comissão da plataforma (%)</span>
        <input name="commissionPercent" type="number" step="0.01" .value="${this.commissionPercent}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
      <label class="block">
        <span class="text-sm text-gray-600">Taxa de pagamento (%)</span>
        <input name="paymentFeePercent" type="number" step="0.01" .value="${this.paymentFeePercent}" @input="${(e5) => this.onInputNumber(e5)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
      </label>
    </div>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-50 p-4 rounded">
        <h3 class="font-semibold text-gray-700">Resumo de taxas</h3>
        <div class="mt-2 text-gray-800">
          <div class="flex justify-between"><span>Comissão (${this.commissionPercent}%):</span><span>R$ ${c4.commissionValue.toFixed(2)}</span></div>
          <div class="flex justify-between"><span>Taxa de pagamento (${this.paymentFeePercent}%):</span><span>R$ ${c4.paymentFeeValue.toFixed(2)}</span></div>
          <div class="flex justify-between font-semibold mt-2"><span>Total de taxas:</span><span>R$ ${c4.totalFees.toFixed(2)}</span></div>
        </div>
      </div>
      <div class="bg-gray-50 p-4 rounded">
        <h3 class="font-semibold text-gray-700">Resultado financeiro</h3>
        <div class="mt-2 text-gray-800">
          <div class="flex justify-between"><span>Custo total (produto + frete + taxas):</span><span>R$ ${c4.costTotal.toFixed(2)}</span></div>
          <div class="flex justify-between"><span>Lucro líquido:</span><span>R$ ${c4.profit.toFixed(2)}</span></div>
          <div class="flex justify-between"><span>Margem:</span><span>${c4.margin.toFixed(2)}%</span></div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex gap-3">
      <button @click="${() => this.saveHistory()}" class="px-4 py-2 bg-blue-600 text-white rounded">Salvar histórico</button>
      <button @click="${() => this.exportCsv()}" class="px-4 py-2 bg-green-600 text-white rounded">Exportar CSV</button>
    </div>
    ${this.renderHistory()}
  </div>
  `;
  }
  render() {
    return Z`
    <div class="p-4">
      ${this.renderInputs()}
    </div>
  `;
  }
};
EcommerceShopeeFeeCalculator1020223 = __decorate6([
  e2("ecommerce--shopee-fee-calculator-102022")
], EcommerceShopeeFeeCalculator1020223);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

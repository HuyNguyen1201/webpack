(() => { var r = { 52: r => { r.exports = (r, o) => r + o } }, o = {}; function t(e) { var n = o[e]; if (void 0 !== n) return n.exports; var s = o[e] = { exports: {} }; return r[e](s, s.exports, t), s.exports } (() => { const r = t(52)(3, 5); console.log(r), document.write(r) })() })();
var F, d, Q, ln, C, G, X, A, B, H, I, Y, S = {},
    Z = [],
    rn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    V = Array.isArray;

function w(t, n) {
    for (var e in n) t[e] = n[e];
    return t
}

function nn(t) {
    var n = t.parentNode;
    n && n.removeChild(t)
}

function un(t, n, e) {
    var l, _, r, u = {};
    for (r in n) r == "key" ? l = n[r] : r == "ref" ? _ = n[r] : u[r] = n[r];
    if (arguments.length > 2 && (u.children = arguments.length > 3 ? F.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
        for (r in t.defaultProps) u[r] === void 0 && (u[r] = t.defaultProps[r]);
    return E(t, u, l, _, null)
}

function E(t, n, e, l, _) {
    var r = {
        type: t,
        props: n,
        key: e,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: _ ? ? ++Q,
        __i: -1,
        __u: 0
    };
    return _ == null && d.vnode != null && d.vnode(r), r
}

function N(t) {
    return t.children
}

function L(t, n) {
    this.props = t, this.context = n
}

function x(t, n) {
    if (n == null) return t.__ ? x(t.__, t.__i + 1) : null;
    for (var e; n < t.__k.length; n++)
        if ((e = t.__k[n]) != null && e.__e != null) return e.__e;
    return typeof t.type == "function" ? x(t) : null
}

function tn(t) {
    var n, e;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
            if ((e = t.__k[n]) != null && e.__e != null) {
                t.__e = t.__c.base = e.__e;
                break
            }
        return tn(t)
    }
}

function $(t) {
    (!t.__d && (t.__d = !0) && C.push(t) && !W.__r++ || G !== d.debounceRendering) && ((G = d.debounceRendering) || X)(W)
}

function W() {
    var t, n, e, l, _, r, u, s;
    for (C.sort(A); t = C.shift();) t.__d && (n = C.length, l = void 0, r = (_ = (e = t).__v).__e, u = [], s = [], e.__P && ((l = w({}, _)).__v = _.__v + 1, d.vnode && d.vnode(l), j(e.__P, l, _, e.__n, e.__P.namespaceURI, 32 & _.__u ? [r] : null, u, r ? ? x(_), !!(32 & _.__u), s), l.__v = _.__v, l.__.__k[l.__i] = l, _n(u, l, s), l.__e != r && tn(l)), C.length > n && C.sort(A));
    W.__r = 0
}

function en(t, n, e, l, _, r, u, s, p, i, f) {
    var o, m, c, h, k, v = l && l.__k || Z,
        a = n.length;
    for (e.__d = p, sn(e, n, v), p = e.__d, o = 0; o < a; o++)(c = e.__k[o]) != null && typeof c != "boolean" && typeof c != "function" && (m = c.__i === -1 ? S : v[c.__i] || S, c.__i = o, j(t, c, m, _, r, u, s, p, i, f), h = c.__e, c.ref && m.ref != c.ref && (m.ref && z(m.ref, null, c), f.push(c.ref, c.__c || h, c)), k == null && h != null && (k = h), 65536 & c.__u || m.__k === c.__k ? (p && !p.isConnected && (p = x(m)), p = on(c, p, t)) : typeof c.type == "function" && c.__d !== void 0 ? p = c.__d : h && (p = h.nextSibling), c.__d = void 0, c.__u &= -196609);
    e.__d = p, e.__e = k
}

function sn(t, n, e) {
    var l, _, r, u, s, p = n.length,
        i = e.length,
        f = i,
        o = 0;
    for (t.__k = [], l = 0; l < p; l++) u = l + o, (_ = t.__k[l] = (_ = n[l]) == null || typeof _ == "boolean" || typeof _ == "function" ? null : typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? E(null, _, null, null, null) : V(_) ? E(N, {
        children: _
    }, null, null, null) : _.constructor === void 0 && _.__b > 0 ? E(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _) != null ? (_.__ = t, _.__b = t.__b + 1, s = cn(_, e, u, f), _.__i = s, r = null, s !== -1 && (f--, (r = e[s]) && (r.__u |= 131072)), r == null || r.__v === null ? (s == -1 && o--, typeof _.type != "function" && (_.__u |= 65536)) : s !== u && (s === u + 1 ? o++ : s > u ? f > p - u ? o += s - u : o-- : s < u ? s == u - 1 && (o = s - u) : o = 0, s !== l + o && (_.__u |= 65536))) : (r = e[u]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == t.__d && (t.__d = x(r)), O(r, r, !1), e[u] = null, f--);
    if (f)
        for (l = 0; l < i; l++)(r = e[l]) != null && !(131072 & r.__u) && (r.__e == t.__d && (t.__d = x(r)), O(r, r))
}

function on(t, n, e) {
    var l, _;
    if (typeof t.type == "function") {
        for (l = t.__k, _ = 0; l && _ < l.length; _++) l[_] && (l[_].__ = t, n = on(l[_], n, e));
        return n
    }
    t.__e != n && (e.insertBefore(t.__e, n || null), n = t.__e);
    do n = n && n.nextSibling; while (n != null && n.nodeType === 8);
    return n
}

function cn(t, n, e, l) {
    var _ = t.key,
        r = t.type,
        u = e - 1,
        s = e + 1,
        p = n[e];
    if (p === null || p && _ == p.key && r === p.type && !(131072 & p.__u)) return e;
    if (l > (p != null && !(131072 & p.__u) ? 1 : 0))
        for (; u >= 0 || s < n.length;) {
            if (u >= 0) {
                if ((p = n[u]) && !(131072 & p.__u) && _ == p.key && r === p.type) return u;
                u--
            }
            if (s < n.length) {
                if ((p = n[s]) && !(131072 & p.__u) && _ == p.key && r === p.type) return s;
                s++
            }
        }
    return -1
}

function J(t, n, e) {
    n[0] === "-" ? t.setProperty(n, e ? ? "") : t[n] = e == null ? "" : typeof e != "number" || rn.test(n) ? e : e + "px"
}

function M(t, n, e, l, _) {
    var r;
    n: if (n === "style")
        if (typeof e == "string") t.style.cssText = e;
        else {
            if (typeof l == "string" && (t.style.cssText = l = ""), l)
                for (n in l) e && n in e || J(t.style, n, "");
            if (e)
                for (n in e) l && e[n] === l[n] || J(t.style, n, e[n])
        }
    else if (n[0] === "o" && n[1] === "n") r = n !== (n = n.replace(/(PointerCapture)$|Capture$/i, "$1")), n = n.toLowerCase() in t || n === "onFocusOut" || n === "onFocusIn" ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + r] = e, e ? l ? e.u = l.u : (e.u = B, t.addEventListener(n, r ? I : H, r)) : t.removeEventListener(n, r ? I : H, r);
    else {
        if (_ == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n in t) try {
            t[n] = e ? ? "";
            break n
        } catch {}
        typeof e == "function" || (e == null || e === !1 && n[4] !== "-" ? t.removeAttribute(n) : t.setAttribute(n, e))
    }
}

function K(t) {
    return function(n) {
        if (this.l) {
            var e = this.l[n.type + t];
            if (n.t == null) n.t = B++;
            else if (n.t < e.u) return;
            return e(d.event ? d.event(n) : n)
        }
    }
}

function j(t, n, e, l, _, r, u, s, p, i) {
    var f, o, m, c, h, k, v, a, y, b, U, P, q, T, R, g = n.type;
    if (n.constructor !== void 0) return null;
    128 & e.__u && (p = !!(32 & e.__u), r = [s = n.__e = e.__e]), (f = d.__b) && f(n);
    n: if (typeof g == "function") try {
        if (a = n.props, y = (f = g.contextType) && l[f.__c], b = f ? y ? y.props.value : f.__ : l, e.__c ? v = (o = n.__c = e.__c).__ = o.__E : ("prototype" in g && g.prototype.render ? n.__c = o = new g(a, b) : (n.__c = o = new L(a, b), o.constructor = g, o.render = fn), y && y.sub(o), o.props = a, o.state || (o.state = {}), o.context = b, o.__n = l, m = o.__d = !0, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), g.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = w({}, o.__s)), w(o.__s, g.getDerivedStateFromProps(a, o.__s))), c = o.props, h = o.state, o.__v = n, m) g.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
        else {
            if (g.getDerivedStateFromProps == null && a !== c && o.componentWillReceiveProps != null && o.componentWillReceiveProps(a, b), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(a, o.__s, b) === !1 || n.__v === e.__v)) {
                for (n.__v !== e.__v && (o.props = a, o.state = o.__s, o.__d = !1), n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(D) {
                        D && (D.__ = n)
                    }), U = 0; U < o._sb.length; U++) o.__h.push(o._sb[U]);
                o._sb = [], o.__h.length && u.push(o);
                break n
            }
            o.componentWillUpdate != null && o.componentWillUpdate(a, o.__s, b), o.componentDidUpdate != null && o.__h.push(function() {
                o.componentDidUpdate(c, h, k)
            })
        }
        if (o.context = b, o.props = a, o.__P = t, o.__e = !1, P = d.__r, q = 0, "prototype" in g && g.prototype.render) {
            for (o.state = o.__s, o.__d = !1, P && P(n), f = o.render(o.props, o.state, o.context), T = 0; T < o._sb.length; T++) o.__h.push(o._sb[T]);
            o._sb = []
        } else
            do o.__d = !1, P && P(n), f = o.render(o.props, o.state, o.context), o.state = o.__s; while (o.__d && ++q < 25);
        o.state = o.__s, o.getChildContext != null && (l = w(w({}, l), o.getChildContext())), m || o.getSnapshotBeforeUpdate == null || (k = o.getSnapshotBeforeUpdate(c, h)), en(t, V(R = f != null && f.type === N && f.key == null ? f.props.children : f) ? R : [R], n, e, l, _, r, u, s, p, i), o.base = n.__e, n.__u &= -161, o.__h.length && u.push(o), v && (o.__E = o.__ = null)
    } catch (D) {
        n.__v = null, p || r != null ? (n.__e = s, n.__u |= p ? 160 : 32, r[r.indexOf(s)] = null) : (n.__e = e.__e, n.__k = e.__k), d.__e(D, n, e)
    } else r == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = pn(e.__e, n, e, l, _, r, u, p, i);
    (f = d.diffed) && f(n)
}

function _n(t, n, e) {
    n.__d = void 0;
    for (var l = 0; l < e.length; l++) z(e[l], e[++l], e[++l]);
    d.__c && d.__c(n, t), t.some(function(_) {
        try {
            t = _.__h, _.__h = [], t.some(function(r) {
                r.call(_)
            })
        } catch (r) {
            d.__e(r, _.__v)
        }
    })
}

function pn(t, n, e, l, _, r, u, s, p) {
    var i, f, o, m, c, h, k, v = e.props,
        a = n.props,
        y = n.type;
    if (y === "svg" ? _ = "http://www.w3.org/2000/svg" : y === "math" ? _ = "http://www.w3.org/1998/Math/MathML" : _ || (_ = "http://www.w3.org/1999/xhtml"), r != null) {
        for (i = 0; i < r.length; i++)
            if ((c = r[i]) && "setAttribute" in c == !!y && (y ? c.localName === y : c.nodeType === 3)) {
                t = c, r[i] = null;
                break
            }
    }
    if (t == null) {
        if (y === null) return document.createTextNode(a);
        t = document.createElementNS(_, y, a.is && a), r = null, s = !1
    }
    if (y === null) v === a || s && t.data === a || (t.data = a);
    else {
        if (r = r && F.call(t.childNodes), v = e.props || S, !s && r != null)
            for (v = {}, i = 0; i < t.attributes.length; i++) v[(c = t.attributes[i]).name] = c.value;
        for (i in v)
            if (c = v[i], i != "children") {
                if (i == "dangerouslySetInnerHTML") o = c;
                else if (i !== "key" && !(i in a)) {
                    if (i == "value" && "defaultValue" in a || i == "checked" && "defaultChecked" in a) continue;
                    M(t, i, null, c, _)
                }
            }
        for (i in a) c = a[i], i == "children" ? m = c : i == "dangerouslySetInnerHTML" ? f = c : i == "value" ? h = c : i == "checked" ? k = c : i === "key" || s && typeof c != "function" || v[i] === c || M(t, i, c, v[i], _);
        if (f) s || o && (f.__html === o.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), n.__k = [];
        else if (o && (t.innerHTML = ""), en(t, V(m) ? m : [m], n, e, l, y === "foreignObject" ? "http://www.w3.org/1999/xhtml" : _, r, u, r ? r[0] : e.__k && x(e, 0), s, p), r != null)
            for (i = r.length; i--;) r[i] != null && nn(r[i]);
        s || (i = "value", h !== void 0 && (h !== t[i] || y === "progress" && !h || y === "option" && h !== v[i]) && M(t, i, h, v[i], _), i = "checked", k !== void 0 && k !== t[i] && M(t, i, k, v[i], _))
    }
    return t
}

function z(t, n, e) {
    try {
        typeof t == "function" ? t(n) : t.current = n
    } catch (l) {
        d.__e(l, e)
    }
}

function O(t, n, e) {
    var l, _;
    if (d.unmount && d.unmount(t), (l = t.ref) && (l.current && l.current !== t.__e || z(l, null, n)), (l = t.__c) != null) {
        if (l.componentWillUnmount) try {
            l.componentWillUnmount()
        } catch (r) {
            d.__e(r, n)
        }
        l.base = l.__P = null
    }
    if (l = t.__k)
        for (_ = 0; _ < l.length; _++) l[_] && O(l[_], n, e || typeof t.type != "function");
    e || t.__e == null || nn(t.__e), t.__c = t.__ = t.__e = t.__d = void 0
}

function fn(t, n, e) {
    return this.constructor(t, e)
}

function an(t, n, e) {
    var l, _, r, u;
    d.__ && d.__(t, n), _ = (l = typeof e == "function") ? null : e && e.__k || n.__k, r = [], u = [], j(n, t = (!l && e || n).__k = un(N, null, [t]), _ || S, S, n.namespaceURI, !l && e ? [e] : _ ? null : n.firstChild ? F.call(n.childNodes) : null, r, !l && e ? e : _ ? _.__e : n.firstChild, l, u), _n(r, t, u)
}

function dn(t, n) {
    var e = {
        __c: n = "__cC" + Y++,
        __: t,
        Consumer: function(l, _) {
            return l.children(_)
        },
        Provider: function(l) {
            var _, r;
            return this.getChildContext || (_ = [], (r = {})[n] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(u) {
                this.props.value !== u.value && _.some(function(s) {
                    s.__e = !0, $(s)
                })
            }, this.sub = function(u) {
                _.push(u);
                var s = u.componentWillUnmount;
                u.componentWillUnmount = function() {
                    _.splice(_.indexOf(u), 1), s && s.call(u)
                }
            }), l.children
        }
    };
    return e.Provider.__ = e.Consumer.contextType = e
}
F = Z.slice, d = {
    __e: function(t, n, e, l) {
        for (var _, r, u; n = n.__;)
            if ((_ = n.__c) && !_.__) try {
                if ((r = _.constructor) && r.getDerivedStateFromError != null && (_.setState(r.getDerivedStateFromError(t)), u = _.__d), _.componentDidCatch != null && (_.componentDidCatch(t, l || {}), u = _.__d), u) return _.__E = _
            } catch (s) {
                t = s
            }
        throw t
    }
}, Q = 0, ln = function(t) {
    return t != null && t.constructor == null
}, L.prototype.setState = function(t, n) {
    var e;
    e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), typeof t == "function" && (t = t(w({}, e), this.props)), t && w(e, t), t != null && this.__v && (n && this._sb.push(n), $(this))
}, L.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), $(this))
}, L.prototype.render = N, C = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, A = function(t, n) {
    return t.__v.__b - n.__v.__b
}, W.__r = 0, B = 0, H = K(!1), I = K(!0), Y = 0;
export {
    d as a, ln as b, un as c, N as d, L as e, an as f, dn as g
};
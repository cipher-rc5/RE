import {
    b as j,
    c as _
} from "./chunk-5FHJHB3U.js";
import {
    a as w,
    b as O,
    e as C
} from "./chunk-7KZRW4CE.js";

function S() {
    throw new Error("Cycle detected")
}
var G = Symbol.for("preact-signals");

function U() {
    if (a > 1) {
        a--;
        return
    }
    let i, t = !1;
    for (; p !== void 0;) {
        let e = p;
        for (p = void 0, $++; e !== void 0;) {
            let o = e.o;
            if (e.o = void 0, e.f &= -3, !(8 & e.f) && A(e)) try {
                e.c()
            } catch (s) {
                t || (i = s, t = !0)
            }
            e = o
        }
    }
    if ($ = 0, a--, t) throw i
}
var r, p;
var a = 0,
    $ = 0,
    y = 0;

function P(i) {
    if (r === void 0) return;
    let t = i.n;
    if (t === void 0 || t.t !== r) return t = {
        i: 0,
        S: i,
        p: r.s,
        n: void 0,
        t: r,
        e: void 0,
        x: void 0,
        r: t
    }, r.s !== void 0 && (r.s.n = t), r.s = t, i.n = t, 32 & r.f && i.S(t), t;
    if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = r.s, t.n = void 0, r.s.n = t, r.s = t), t
}

function f(i) {
    this.v = i, this.i = 0, this.n = void 0, this.t = void 0
}
f.prototype.brand = G;
f.prototype.h = function() {
    return !0
};
f.prototype.S = function(i) {
    this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i)
};
f.prototype.U = function(i) {
    if (this.t !== void 0) {
        let t = i.e,
            e = i.x;
        t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e)
    }
};
f.prototype.subscribe = function(i) {
    let t = this;
    return v(function() {
        let e = t.value,
            o = 32 & this.f;
        this.f &= -33;
        try {
            i(e)
        } finally {
            this.f |= o
        }
    })
};
f.prototype.valueOf = function() {
    return this.value
};
f.prototype.toString = function() {
    return this.value + ""
};
f.prototype.toJSON = function() {
    return this.value
};
f.prototype.peek = function() {
    return this.v
};
Object.defineProperty(f.prototype, "value", {
    get() {
        let i = P(this);
        return i !== void 0 && (i.i = this.i), this.v
    },
    set(i) {
        if (r instanceof l && function() {
                throw new Error("Computed cannot have side-effects")
            }(), i !== this.v) {
            $ > 100 && S(), this.v = i, this.i++, y++, a++;
            try {
                for (let t = this.t; t !== void 0; t = t.x) t.t.N()
            } finally {
                U()
            }
        }
    }
});

function b(i) {
    return new f(i)
}

function A(i) {
    for (let t = i.s; t !== void 0; t = t.n)
        if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1
}

function V(i) {
    for (let t = i.s; t !== void 0; t = t.n) {
        let e = t.S.n;
        if (e !== void 0 && (t.r = e), t.S.n = t, t.i = -1, t.n === void 0) {
            i.s = t;
            break
        }
    }
}

function M(i) {
    let t, e = i.s;
    for (; e !== void 0;) {
        let o = e.p;
        e.i === -1 ? (e.S.U(e), o !== void 0 && (o.n = e.n), e.n !== void 0 && (e.n.p = o)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = o
    }
    i.s = t
}

function l(i) {
    f.call(this, void 0), this.x = i, this.s = void 0, this.g = y - 1, this.f = 4
}(l.prototype = new f).h = function() {
    if (this.f &= -3, 1 & this.f) return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === y)) return !0;
    if (this.g = y, this.f |= 1, this.i > 0 && !A(this)) return this.f &= -2, !0;
    let i = r;
    try {
        V(this), r = this;
        let t = this.x();
        (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++)
    } catch (t) {
        this.v = t, this.f |= 16, this.i++
    }
    return r = i, M(this), this.f &= -2, !0
};
l.prototype.S = function(i) {
    if (this.t === void 0) {
        this.f |= 36;
        for (let t = this.s; t !== void 0; t = t.n) t.S.S(t)
    }
    f.prototype.S.call(this, i)
};
l.prototype.U = function(i) {
    if (this.t !== void 0 && (f.prototype.U.call(this, i), this.t === void 0)) {
        this.f &= -33;
        for (let t = this.s; t !== void 0; t = t.n) t.S.U(t)
    }
};
l.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for (let i = this.t; i !== void 0; i = i.x) i.t.N()
    }
};
l.prototype.peek = function() {
    if (this.h() || S(), 16 & this.f) throw this.v;
    return this.v
};
Object.defineProperty(l.prototype, "value", {
    get() {
        1 & this.f && S();
        let i = P(this);
        if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f) throw this.v;
        return this.v
    }
});

function g(i) {
    return new l(i)
}

function R(i) {
    let t = i.u;
    if (i.u = void 0, typeof t == "function") {
        a++;
        let e = r;
        r = void 0;
        try {
            t()
        } catch (o) {
            throw i.f &= -2, i.f |= 8, k(i), o
        } finally {
            r = e, U()
        }
    }
}

function k(i) {
    for (let t = i.s; t !== void 0; t = t.n) t.S.U(t);
    i.x = void 0, i.s = void 0, R(i)
}

function J(i) {
    if (r !== this) throw new Error("Out-of-order effect");
    M(this), r = i, this.f &= -2, 8 & this.f && k(this), U()
}

function d(i) {
    this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
}
d.prototype.c = function() {
    let i = this.S();
    try {
        if (8 & this.f || this.x === void 0) return;
        let t = this.x();
        typeof t == "function" && (this.u = t)
    } finally {
        i()
    }
};
d.prototype.S = function() {
    1 & this.f && S(), this.f |= 1, this.f &= -9, R(this), V(this), a++;
    let i = r;
    return r = this, J.bind(this, i)
};
d.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = p, p = this)
};
d.prototype.d = function() {
    this.f |= 8, 1 & this.f || k(this)
};

function v(i) {
    let t = new d(i);
    try {
        t.c()
    } catch (e) {
        throw t.d(), e
    }
    return t.d.bind(t)
}

function c(i, t) {
    w[i] = t.bind(null, w[i] || (() => {}))
}
var x, E;

function m(i) {
    E && E(), E = i && i.S()
}

function T({
    data: i
}) {
    let t = z(i);
    t.value = i;
    let e = _(() => {
        let o = this.__v;
        for (; o = o.__;)
            if (o.__c) {
                o.__c.__$f |= 4;
                break
            }
        return this.__$u.c = () => {
            var s;
            !O(e.peek()) && ((s = this.base) == null ? void 0 : s.nodeType) === 3 ? this.base.data = e.peek() : (this.__$f |= 1, this.setState({}))
        }, g(() => {
            let s = t.value.value;
            return s === 0 ? 0 : s === !0 ? "" : s || ""
        })
    }, []);
    return e.value
}
T.displayName = "_st";
Object.defineProperties(f.prototype, {
    constructor: {
        configurable: !0,
        value: void 0
    },
    type: {
        configurable: !0,
        value: T
    },
    props: {
        configurable: !0,
        get() {
            return {
                data: this
            }
        }
    },
    __b: {
        configurable: !0,
        value: 1
    }
});
c("__b", (i, t) => {
    if (typeof t.type == "string") {
        let e, o = t.props;
        for (let s in o) {
            if (s === "children") continue;
            let n = o[s];
            n instanceof f && (e || (t.__np = e = {}), e[s] = n, o[s] = n.peek())
        }
    }
    i(t)
});
c("__r", (i, t) => {
    m();
    let e, o = t.__c;
    o && (o.__$f &= -2, e = o.__$u, e === void 0 && (o.__$u = e = function(s) {
        let n;
        return v(function() {
            n = this
        }), n.c = () => {
            o.__$f |= 1, o.setState({})
        }, n
    }())), x = o, m(e), i(t)
});
c("__e", (i, t, e, o) => {
    m(), x = void 0, i(t, e, o)
});
c("diffed", (i, t) => {
    m(), x = void 0;
    let e;
    if (typeof t.type == "string" && (e = t.__e)) {
        let o = t.__np,
            s = t.props;
        if (o) {
            let n = e.U;
            if (n)
                for (let u in n) {
                    let h = n[u];
                    h !== void 0 && !(u in o) && (h.d(), n[u] = void 0)
                } else n = {}, e.U = n;
            for (let u in o) {
                let h = n[u],
                    N = o[u];
                h === void 0 ? (h = q(e, u, N, s), n[u] = h) : h.o(N, s)
            }
        }
    }
    i(t)
});

function q(i, t, e, o) {
    let s = t in i && i.ownerSVGElement === void 0,
        n = b(e);
    return {
        o: (u, h) => {
            n.value = u, o = h
        },
        d: v(() => {
            let u = n.value.value;
            o[t] !== u && (o[t] = u, s ? i[t] = u : u ? i.setAttribute(t, u) : i.removeAttribute(t))
        })
    }
}
c("unmount", (i, t) => {
    if (typeof t.type == "string") {
        let e = t.__e;
        if (e) {
            let o = e.U;
            if (o) {
                e.U = void 0;
                for (let s in o) {
                    let n = o[s];
                    n && n.d()
                }
            }
        }
    } else {
        let e = t.__c;
        if (e) {
            let o = e.__$u;
            o && (e.__$u = void 0, o.d())
        }
    }
    i(t)
});
c("__h", (i, t, e, o) => {
    (o < 3 || o === 9) && (t.__$f |= 2), i(t, e, o)
});
C.prototype.shouldComponentUpdate = function(i, t) {
    let e = this.__$u;
    if (!(e && e.s !== void 0 || 4 & this.__$f) || 3 & this.__$f) return !0;
    for (let o in t) return !0;
    for (let o in i)
        if (o !== "__source" && i[o] !== this.props[o]) return !0;
    for (let o in this.props)
        if (!(o in i)) return !0;
    return !1
};

function z(i) {
    return _(() => b(i), [])
}

function Y(i) {
    let t = j(i);
    return t.current = i, x.__$f |= 4, _(() => g(() => t.current()), [])
}
export {
    b as a, z as b, Y as c
};
import {
    a as l
} from "./chunk-7KZRW4CE.js";
var f, t, a, v, s = 0,
    N = [],
    c = [],
    o = l,
    m = o.__b,
    p = o.__r,
    d = o.diffed,
    H = o.__c,
    E = o.unmount,
    y = o.__;

function b(n, r) {
    o.__h && o.__h(t, n, s || r), s = 0;
    var _ = t.__H || (t.__H = {
        __: [],
        __h: []
    });
    return n >= _.__.length && _.__.push({
        __V: c
    }), _.__[n]
}

function k(n, r) {
    var _ = b(f++, 3);
    !o.__s && g(_.__H, r) && (_.__ = n, _.i = r, t.__H.__h.push(_))
}

function q(n) {
    return s = 5, C(function() {
        return {
            current: n
        }
    }, [])
}

function C(n, r) {
    var _ = b(f++, 7);
    return g(_.__H, r) ? (_.__V = n(), _.i = r, _.__h = n, _.__V) : _.__
}

function A() {
    for (var n; n = N.shift();)
        if (n.__P && n.__H) try {
            n.__H.__h.forEach(i), n.__H.__h.forEach(h), n.__H.__h = []
        } catch (r) {
            n.__H.__h = [], o.__e(r, n.__v)
        }
}
o.__b = function(n) {
    t = null, m && m(n)
}, o.__ = function(n, r) {
    n && r.__k && r.__k.__m && (n.__m = r.__k.__m), y && y(n, r)
}, o.__r = function(n) {
    p && p(n), f = 0;
    var r = (t = n.__c).__H;
    r && (a === t ? (r.__h = [], t.__h = [], r.__.forEach(function(_) {
        _.__N && (_.__ = _.__N), _.__V = c, _.__N = _.i = void 0
    })) : (r.__h.forEach(i), r.__h.forEach(h), r.__h = [], f = 0)), a = t
}, o.diffed = function(n) {
    d && d(n);
    var r = n.__c;
    r && r.__H && (r.__H.__h.length && (N.push(r) !== 1 && v === o.requestAnimationFrame || ((v = o.requestAnimationFrame) || D)(A)), r.__H.__.forEach(function(_) {
        _.i && (_.__H = _.i), _.__V !== c && (_.__ = _.__V), _.i = void 0, _.__V = c
    })), a = t = null
}, o.__c = function(n, r) {
    r.some(function(_) {
        try {
            _.__h.forEach(i), _.__h = _.__h.filter(function(u) {
                return !u.__ || h(u)
            })
        } catch (u) {
            r.some(function(e) {
                e.__h && (e.__h = [])
            }), r = [], o.__e(u, _.__v)
        }
    }), H && H(n, r)
}, o.unmount = function(n) {
    E && E(n);
    var r, _ = n.__c;
    _ && _.__H && (_.__H.__.forEach(function(u) {
        try {
            i(u)
        } catch (e) {
            r = e
        }
    }), _.__H = void 0, r && o.__e(r, _.__v))
};
var V = typeof requestAnimationFrame == "function";

function D(n) {
    var r, _ = function() {
            clearTimeout(u), V && cancelAnimationFrame(r), setTimeout(n)
        },
        u = setTimeout(_, 100);
    V && (r = requestAnimationFrame(_))
}

function i(n) {
    var r = t,
        _ = n.__c;
    typeof _ == "function" && (n.__c = void 0, _()), t = r
}

function h(n) {
    var r = t;
    n.__c = n.__(), t = r
}

function g(n, r) {
    return !n || n.length !== r.length || r.some(function(_, u) {
        return _ !== n[u]
    })
}
export {
    k as a, q as b, C as c
};
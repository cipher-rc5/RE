import {
    a as f
} from "./chunk-MWXBNYH5.js";
import {
    b as l
} from "./chunk-FJSXHW3L.js";
import {
    a as e
} from "./chunk-R54PQP4Z.js";
import {
    a as u
} from "./chunk-5FHJHB3U.js";
import "./chunk-7KZRW4CE.js";

function g({
    xhandle: r
}) {
    let c = l(null),
        d = l(!0),
        i = l(null);
    return u(() => {
        (async () => {
            try {
                d.value = !0, i.value = null, console.log(`Searching for user: ${r}`);
                let s = await fetch(`/api/ethos-search?query=${encodeURIComponent(r)}&limit=10`);
                if (!s.ok) throw new Error("Failed to search for user");
                let o = await s.json();
                if (console.log("Search response:", o), !o.ok || !o.data || !o.data.values || o.data.values.length === 0) {
                    let t = r.startsWith("@") ? r.slice(1) : r;
                    if (t !== r) {
                        console.log(`Retrying search without @ symbol: ${t}`);
                        let n = await (await fetch(`/api/ethos-search?query=${encodeURIComponent(t)}&limit=10`)).json();
                        if (n.ok && n.data && n.data.values && n.data.values.length > 0) o.data = n.data;
                        else throw new Error(`User "${r}" not found. Try searching from the homepage to find the correct username.`)
                    } else throw new Error(`User "${r}" not found. Try searching from the homepage to find the correct username.`)
                }
                let a = o.data.values.find(t => t.username.toLowerCase() === r.toLowerCase());
                a || (a = o.data.values.find(t => t.username.toLowerCase().includes(r.toLowerCase()) || t.name.toLowerCase().includes(r.toLowerCase()))), a || (a = o.data.values[0]), console.log("Selected user:", a), c.value = {
                    userkey: a.userkey,
                    name: a.name,
                    username: a.username,
                    avatar: a.avatar,
                    score: a.score
                }
            } catch (s) {
                console.error("Error fetching profile data:", s), i.value = s instanceof Error ? s.message : "Failed to load profile data"
            } finally {
                d.value = !1
            }
        })()
    }, [r]), d.value ? e("div", {
        class: "bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700",
        children: e("div", {
            class: "text-center",
            children: [e("div", {
                class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"
            }), e("p", {
                class: "text-gray-300 mb-4",
                children: ["Loading profile data for @", r, "..."]
            }), e("p", {
                class: "text-sm text-gray-400",
                children: "Fetching user information and review data from Ethos API"
            })]
        })
    }) : i.value ? e("div", {
        class: "bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700",
        children: e("div", {
            class: "text-center",
            children: [e("div", {
                class: "text-red-400 mb-4",
                children: e("svg", {
                    class: "w-16 h-16 mx-auto mb-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                })
            }), e("h2", {
                class: "text-xl font-semibold text-white mb-2",
                children: "Profile Not Found"
            }), e("p", {
                class: "text-gray-300 mb-2",
                children: ["Could not find user: ", e("strong", {
                    children: ["@", r]
                })]
            }), e("p", {
                class: "text-sm text-gray-400 mb-6",
                children: i.value
            }), e("div", {
                class: "flex flex-col sm:flex-row gap-3 justify-center",
                children: [e("a", {
                    href: "/",
                    class: "inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                    children: "Search for Another Profile"
                }), e("a", {
                    href: `/?search=${encodeURIComponent(r)}`,
                    class: "inline-block px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors",
                    children: ['Try Searching "', r, '"']
                })]
            })]
        })
    }) : c.value ? e(f, {
        selectedUser: c.value,
        onClose: () => {
            window.location.href = "/"
        }
    }) : e("div", {
        class: "bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700",
        children: e("div", {
            class: "text-center",
            children: e("p", {
                class: "text-gray-400",
                children: "No profile data available"
            })
        })
    })
}
export {
    g as
    default
};
// https://serpintaxt-ethos-r4r-92.deno.dev/_frsh/js/d9c6fc7afe7e786c1cd105af6ca4effc55fa4b88/chunk-MWXBNYH5.js
// Claude Opus 4 - explanation and summary: https://claude.ai/share/2cfbff4a-c6da-4ae8-844c-e3579d107ede

import { a as M } from './chunk-5FHJHB3U.js';
import { b as g, c as w } from './chunk-FJSXHW3L.js';
import { a as e } from './chunk-R54PQP4Z.js';
function T({ selectedUser: u, onClose: R }) {
  let p = g([]);
  let x = g([]);
  let h = g(true);
  let f = g(null);
  let l = w(() => {
    let t = p.value.filter(a => !a.archived);
    let i = x.value.filter(a => !a.archived);
    let s = new Map();
    t.forEach(a => {
      let n = a.subject.username;
      if (!s.has(n)) {
        s.set(n, { hasGiven: false, hasReceived: false });
      }
      s.get(n).hasGiven = true;
    });
    i.forEach(a => {
      let n = a.author.username;
      if (!s.has(n)) {
        s.set(n, { hasGiven: false, hasReceived: false });
      }
      s.get(n).hasReceived = true;
    });
    let r = Array.from(s.values()).filter(a => a.hasGiven && a.hasReceived).length;
    let c = i.length > 0 ?
      (() => {
        let a = r / i.length * 100;
        let n = 0;
        t.forEach(o => {
          let j = o.subject.username;
          let S = i.find(y => y.author.username === j);
          if (S) {
            let y = m(o.timestamp);
            let $ = m(S.timestamp);
            if (Math.abs(y.getTime() - $.getTime()) / 86400000 < .0208) {
              n++;
            }
          }
        });
        let d = r > 0 ? n / r : 0;
        let v = a;
        console.log('Farming Score Calculation:');
        console.log('Base score:', a.toFixed(1) + '%');
        console.log('Quick reciprocations:', n);
        console.log('Total reciprocations:', r);
        console.log('Quick reciprocation rate:', (d * 100).toFixed(1) + '%');
        if (d >= .8 && n >= 2) {
          let o = 30 + d * 20;
          v += o;
          console.log('Major penalty applied (80%+ quick):', o.toFixed(1) + ' points');
        } else if (d >= .6 && n >= 2) {
          let o = 20 + d * 15;
          v += o;
          console.log('High penalty applied (60-79% quick):', o.toFixed(1) + ' points');
        } else if (d >= .4 && n >= 2) {
          let o = 15 + d * 10;
          v += o;
          console.log('Moderate penalty applied (40-59% quick):', o.toFixed(1) + ' points');
        } else if (d >= .2 && n >= 2) {
          let o = 5 + d * 10;
          v += o;
          console.log('Small penalty applied (20-39% quick):', o.toFixed(1) + ' points');
        } else {
          console.log('No penalty applied (<20% quick or <2 total quick reciprocations)');
        }
        console.log('Final adjusted score:', Math.min(Math.round(v), 100) + '%');
        return Math.min(Math.round(v), 100);
      })() :
      0;
    return { given: t.length, received: i.length, reciprocal: r, farmingScore: c };
  });
  let b = w(() => {
    let i = new Map();
    p.value.filter(r => !r.archived).forEach(r => {
      let c = r.subject.userkey;
      let n = r.subject.username;
      if (!i.has(n)) {
        i.set(n, {
          userkey: c,
          name: r.subject.name,
          username: r.subject.username,
          avatar: r.subject.avatar,
          score: r.subject.score,
          givenReview: r,
          receivedReview: undefined,
          isReciprocal: false,
          timeDifference: undefined
        });
      }
    });
    x.value.filter(r => !r.archived).forEach(r => {
      let c = r.author.username;
      if (i.has(c)) {
        let a = i.get(c);
        a.receivedReview = r;
        a.isReciprocal = true;
        if (a.givenReview && r) {
          console.log('Calculating time difference:');
          console.log('Given timestamp:', a.givenReview.timestamp);
          console.log('Received timestamp:', r.timestamp);
          let n = m(a.givenReview.timestamp);
          let d = m(r.timestamp);
          console.log('Given date:', n);
          console.log('Received date:', d);
          let v = Math.abs(n.getTime() - d.getTime());
          a.timeDifference = v / 86400000;
          console.log('Diff (ms):', v);
          console.log('Diff (days):', a.timeDifference);
        }
      } else {
        i.set(c, {
          userkey: r.author.userkey,
          name: r.author.name,
          username: r.author.username,
          avatar: r.author.avatar,
          score: r.author.score,
          givenReview: undefined,
          receivedReview: r,
          isReciprocal: false,
          timeDifference: undefined
        });
      }
    });
    return Array.from(i.values()).sort((r, c) =>
      r.isReciprocal && !c.isReciprocal ? -1 : !r.isReciprocal && c.isReciprocal ? 1 : r.name.localeCompare(c.name)
    );
  });
  M(() => {
    (async () => {
      try {
        h.value = true;
        f.value = null;
        let [i, s] = await Promise.all([
          fetch('/api/ethos-activities-given', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userkey: u.userkey, limit: 500 })
          }),
          fetch('/api/ethos-activities-received', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userkey: u.userkey, limit: 500 })
          })
        ]);
        if (!i.ok || !s.ok) {
          throw new Error('Failed to fetch review data');
        }
        let r = await i.json();
        let c = await s.json();
        p.value = r.values || [];
        x.value = c.values || [];
      } catch (i) {
        console.error('Error fetching reviews:', i);
        f.value = 'Failed to load review data. Please try again.';
      } finally {
        h.value = false;
      }
    })();
  }, [u.userkey]);
  let k = t => {
    switch (t) {
      case 'positive':
        return 'text-green-600 bg-green-100';
      case 'negative':
        return 'text-red-600 bg-red-100';
      case 'neutral':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  let m = t => {
    let i;
    let s = t.toString();
    if (s.includes('T') || s.includes('-')) {
      i = new Date(t);
    } else {
      let r = typeof t == 'number' ? t : parseInt(s);
      if (r.toString().length === 10) {
        i = new Date(r * 1e3);
      } else {
        i = new Date(r);
      }
    }
    return i;
  };
  let D = t => {
    let i = m(t);
    return isNaN(i.getTime()) ?
      'Invalid date' :
      i.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  let E = t => {
    if (t === undefined) {
      return '—';
    }
    if (t < 0.0006944444444444444) {
      return '< 1 min';
    }
    if (t < 0.041666666666666664) {
      let s = Math.round(t * 24 * 60);
      return `${s} min${s !== 1 ? 's' : ''}`;
    }
    if (t < 1) {
      let s = Math.round(t * 24);
      return `${s} hour${s !== 1 ? 's' : ''}`;
    }
    if (t < 30) {
      return `${t.toFixed(1)} day${t.toFixed(1) !== '1.0' ? 's' : ''}`;
    }
    let i = Math.round(t / 30);
    return `${i} month${i !== 1 ? 's' : ''}`;
  };
  return h.value ?
    e('div', {
      class: 'mt-8 text-center',
      children: [
        e('div', { class: 'animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4' }),
        e('p', { class: 'text-gray-300', children: 'Loading review analysis...' })
      ]
    }) :
    f.value ?
    e('div', {
      class: 'mt-8 bg-red-900/30 border border-red-500/50 rounded-lg p-6 text-center',
      children: [
        e('p', { class: 'text-red-400', children: f.value }),
        e('button', {
          onClick: R,
          class: 'mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors',
          children: 'Back to Search'
        })
      ]
    }) :
    e('div', {
      class: 'mt-8',
      children: [
        e('div', {
          class: 'flex items-center justify-between mb-6',
          children: [
            e('div', {
              class: 'flex items-center',
              children: [
                e('img', {
                  src: u.avatar,
                  alt: u.name,
                  class: 'w-12 h-12 rounded-full mr-4',
                  onError: t => {
                    t.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=random`;
                  }
                }),
                e('div', {
                  children: [
                    e('h2', { class: 'text-2xl font-bold text-white', children: u.name }),
                    e('p', { class: 'text-gray-300', children: ['@', u.username, ' • Score: ', u.score] })
                  ]
                })
              ]
            }),
            e('div', {
              class: 'flex gap-3',
              children: [
                e('a', {
                  href: `https://app.ethos.network/profile/x/${u.username}`,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  class:
                    'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2',
                  children: [
                    e('svg', {
                      class: 'w-4 h-4',
                      fill: 'none',
                      stroke: 'currentColor',
                      viewBox: '0 0 24 24',
                      children: e('path', {
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': '2',
                        d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      })
                    }),
                    'Open in Ethos'
                  ]
                }),
                e('button', {
                  onClick: R,
                  class:
                    'px-4 py-2 text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors',
                  children: '← Back to Search'
                })
              ]
            })
          ]
        }),
        e('div', {
          class: 'grid grid-cols-1 md:grid-cols-4 gap-4 mb-8',
          children: [
            e('div', {
              class: 'bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 text-center',
              children: [
                e('div', { class: 'text-2xl font-bold text-blue-400', children: l.value.given }),
                e('div', { class: 'text-sm text-blue-400', children: 'Reviews Given' })
              ]
            }),
            e('div', {
              class: 'bg-green-900/30 border border-green-500/50 rounded-lg p-4 text-center',
              children: [
                e('div', { class: 'text-2xl font-bold text-green-400', children: l.value.received }),
                e('div', { class: 'text-sm text-green-400', children: 'Reviews Received' })
              ]
            }),
            e('div', {
              class: 'bg-purple-900/30 border border-purple-500/50 rounded-lg p-4 text-center',
              children: [
                e('div', { class: 'text-2xl font-bold text-purple-400', children: l.value.reciprocal }),
                e('div', { class: 'text-sm text-purple-400', children: 'Reciprocal Reviews' })
              ]
            }),
            e('div', {
              class: `rounded-lg p-4 text-center ${
                l.value.farmingScore >= 70 ?
                  'bg-red-900/30 border border-red-500/50' :
                  l.value.farmingScore >= 40 ?
                  'bg-yellow-900/30 border border-yellow-500/50' :
                  'bg-emerald-900/30 border border-emerald-500/50'
              }`,
              children: [
                e('div', {
                  class: `text-2xl font-bold ${
                    l.value.farmingScore >= 70 ?
                      'text-red-400' :
                      l.value.farmingScore >= 40 ?
                      'text-yellow-400' :
                      'text-emerald-400'
                  }`,
                  children: [l.value.farmingScore, '%']
                }),
                e('div', {
                  class: `text-sm ${
                    l.value.farmingScore >= 70 ?
                      'text-red-400' :
                      l.value.farmingScore >= 40 ?
                      'text-yellow-400' :
                      'text-emerald-400'
                  }`,
                  children: 'Farming Score'
                }),
                e('div', {
                  class: 'text-xs text-gray-400 mt-1',
                  children: l.value.farmingScore >= 70 ?
                    'High Risk' :
                    l.value.farmingScore >= 40 ?
                    'Moderate Risk' :
                    'Low Risk'
                }),
                (() => {
                  let t = b.value.filter(i =>
                    i.isReciprocal && i.timeDifference !== undefined && i.timeDifference < .0208
                  ).length;
                  return t > 0 ?
                    e('div', {
                      class: 'text-xs text-red-600 mt-1 font-medium',
                      children: [t, ' quick reciprocation', t !== 1 ? 's' : '', ' (<30min)']
                    }) :
                    null;
                })()
              ]
            })
          ]
        }),
        e('div', {
          class: 'bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700',
          children: [
            e('div', {
              class: 'px-6 py-4 bg-gray-700 border-b border-gray-600',
              children: [
                e('h3', { class: 'text-lg font-semibold text-white', children: 'Review Relationships' }),
                e('p', {
                  class: 'text-sm text-gray-300 mt-1',
                  children:
                    'Reviews paired by user. Green checkmarks indicate reciprocal reviews (both users reviewed each other).'
                })
              ]
            }),
            b.value.length === 0 ?
              e('div', { class: 'p-8 text-center text-gray-400', children: 'No reviews found for this user.' }) :
              e('div', {
                class: 'overflow-x-auto',
                children: e('table', {
                  class: 'w-full',
                  children: [
                    e('thead', {
                      class: 'bg-gray-700',
                      children: e('tr', {
                        children: [
                          e('th', {
                            class: 'px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider',
                            children: 'User'
                          }),
                          e('th', {
                            class: 'px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider',
                            children: 'Review Given'
                          }),
                          e('th', {
                            class: 'px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider',
                            children: 'Review Received'
                          }),
                          e('th', {
                            class: 'px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider',
                            children: 'Time Gap'
                          }),
                          e('th', {
                            class: 'px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider',
                            children: 'Reciprocal'
                          })
                        ]
                      })
                    }),
                    e('tbody', {
                      class: 'bg-gray-800 divide-y divide-gray-700',
                      children: b.value.map((t, i) =>
                        e('tr', {
                          class: i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750',
                          children: [
                            e('td', {
                              class: 'px-6 py-4 whitespace-nowrap',
                              children: e('div', {
                                class: 'flex items-center',
                                children: [
                                  e('img', {
                                    src: t.avatar,
                                    alt: t.name,
                                    class: 'w-10 h-10 rounded-full mr-3',
                                    onError: s => {
                                      s.target.src = `https://ui-avatars.com/api/?name=${
                                        encodeURIComponent(t.name)
                                      }&background=random`;
                                    }
                                  }),
                                  e('div', {
                                    children: [
                                      e('a', {
                                        href: `/profile/${t.username}`,
                                        class: 'text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline',
                                        children: t.name
                                      }),
                                      e('div', { class: 'text-sm text-gray-400', children: ['@', t.username] })
                                    ]
                                  })
                                ]
                              })
                            }),
                            e('td', {
                              class: 'px-6 py-4',
                              children: t.givenReview ?
                                e('div', {
                                  class: 'text-sm',
                                  children: [
                                    e('div', {
                                      class: `inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                        k(t.givenReview.content?.rating)
                                      }`,
                                      children: t.givenReview.content?.rating || 'Review'
                                    }),
                                    e('div', {
                                      class: 'text-xs text-gray-400 mt-1',
                                      children: D(t.givenReview.timestamp)
                                    })
                                  ]
                                }) :
                                e('div', { class: 'text-sm text-gray-500', children: 'No review given' })
                            }),
                            e('td', {
                              class: 'px-6 py-4',
                              children: t.receivedReview ?
                                e('div', {
                                  class: 'text-sm',
                                  children: [
                                    e('div', {
                                      class: `inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                        k(t.receivedReview.content?.rating)
                                      }`,
                                      children: t.receivedReview.content?.rating || 'Review'
                                    }),
                                    e('div', {
                                      class: 'text-xs text-gray-400 mt-1',
                                      children: D(t.receivedReview.timestamp)
                                    })
                                  ]
                                }) :
                                e('div', { class: 'text-sm text-gray-500', children: 'No review received' })
                            }),
                            e('td', {
                              class: 'px-6 py-4 text-center',
                              children: t.isReciprocal && t.timeDifference !== undefined ?
                                e('div', {
                                  class: `text-sm font-medium ${
                                    t.timeDifference < 1 ?
                                      'text-red-600' :
                                      t.timeDifference < 7 ?
                                      'text-yellow-600' :
                                      'text-green-600'
                                  }`,
                                  children: E(t.timeDifference)
                                }) :
                                e('div', { class: 'text-gray-500 text-sm', children: '—' })
                            }),
                            e('td', {
                              class: 'px-6 py-4 text-center',
                              children: t.isReciprocal ?
                                e('div', {
                                  class: 'flex items-center justify-center',
                                  children: e('svg', {
                                    class: 'w-6 h-6 text-green-400',
                                    fill: 'currentColor',
                                    viewBox: '0 0 20 20',
                                    children: e('path', {
                                      'fill-rule': 'evenodd',
                                      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
                                      'clip-rule': 'evenodd'
                                    })
                                  })
                                }) :
                                e('div', {
                                  class: 'text-gray-500',
                                  children: e('svg', {
                                    class: 'w-6 h-6 mx-auto',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    viewBox: '0 0 24 24',
                                    children: e('path', {
                                      'stroke-linecap': 'round',
                                      'stroke-linejoin': 'round',
                                      'stroke-width': '2',
                                      d: 'M6 18L18 6M6 6l12 12'
                                    })
                                  })
                                })
                            })
                          ]
                        }, t.userkey)
                      )
                    })
                  ]
                })
              })
          ]
        })
      ]
    });
}
export { T as a };

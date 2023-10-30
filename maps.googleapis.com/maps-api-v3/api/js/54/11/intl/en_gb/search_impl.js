google.maps.__gjsload__('search_impl', function(_) {
    var Rkb = function(a) {
            a = a.Ob();
            Qkb || (Qkb = {
                G: "sssM",
                H: ["ss"]
            });
            return _.Bf(a, Qkb, 1)
        },
        Skb = function(a, b) {
            _.I(a.j, 3, b)
        },
        Wkb = function(a, b, c) {
            const d = _.zE(new Tkb);
            c.Pk = (0, _.pa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.BJa(c, _.sL(b));
            const e = [];
            e.push(_.ah(c, "click", (0, _.pa)(Ukb, null, a)));
            _.zb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.ah(c, f, (0, _.pa)(Vkb, null, a, f)))
            });
            e.push(_.ah(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        Ukb = function(a, b, c, d, e) {
            let f =
                null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.N(e.j, 2) ? new _.Eg(_.No(_.Ef(e.j, 2, _.So).j, 1), _.No(_.Ef(e.j, 2, _.So).j, 2)) : null;
                f.fields = {};
                const g = _.sf(e.j, 3);
                for (let k = 0; k < g; ++k) {
                    const m = _.Lm(e.j, 3, _.AL, k);
                    f.fields[m.getKey()] = m.Na()
                }
            }
            _.lh(a, "click", b, c, d, f)
        },
        Vkb = function(a, b, c, d, e, f, g) {
            let k = null;
            f && (k = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.lh(a, b, c, d, e, k, g)
        },
        Xkb = function() {},
        Ykb = class extends _.M {
            constructor() {
                super()
            }
            mc() {
                return _.Kf(this.j, 2)
            }
        },
        Qkb;
    var Zkb = class extends _.M {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.L(this.j, 1, -1)
        }
    };
    var Tkb = class {
        constructor() {
            var a = _.Hk,
                b = _.Gk;
            this.h = _.Sf;
            this.g = _.Am(_.$q, a, _.Et + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Zkb(g);
                b(g)
            }
            var d = new Ykb;
            _.I(d.j, 1, a.layerId.split("|")[0]);
            _.I(d.j, 2, a.featureId);
            Skb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.Hf(d.j, 4, _.AL);
                _.I(f.j, 1, e);
                _.I(f.j, 2, a.parameters[e])
            }
            a = Rkb(d);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Xkb.prototype.uB = function(a) {
        if (_.Bj[15]) {
            var b = a.l;
            const D = a.l = a.getMap();
            b && a.g && (a.i ? (b = b.__gm.h, b.set(b.get().vh(a.g))) : a.g && _.YJa(a.g, b) && (_.zb(a.h || [], _.ch), a.h = null));
            if (D) {
                var c = a.get("layerId");
                b = a.get("spotlightDescription");
                var d = a.get("paintExperimentIds"),
                    e = a.get("styler"),
                    f = a.get("roadmapStyler"),
                    g = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    m = a.get("mapFeatures"),
                    q = a.get("clickableCities"),
                    t = a.get("travelMapRequest"),
                    v = a.get("searchPipeMetadata"),
                    x = a.get("overlayLayer"),
                    y = a.get("caseExperimentIds"),
                    A = a.get("airQualityPipeMetadata"),
                    C = a.get("directionsPipeParameters");
                const E = new _.Nq;
                c = c.split("|");
                E.layerId = c[0];
                for (let J = 1; J < c.length; ++J) {
                    const [R, ...X] = c[J].split(":");
                    E.parameters[R] = X.join(":")
                }
                b && (E.spotlightDescription = new _.Vq(b));
                d && (E.paintExperimentIds = d.slice(0));
                e && (E.styler = new _.Mp(e));
                f && (E.roadmapStyler = new _.Mp(f));
                t && (E.travelMapRequest = new _.tla(t));
                g && (E.mapsApiLayer = new _.Oq(g));
                m && (E.mapFeatures = m);
                q && (E.clickableCities = q);
                v && (E.searchPipeMetadata = new _.Cs(v));
                x && (E.overlayLayer =
                    new _.Wq(x));
                y && (E.caseExperimentIds = y.slice(0));
                A && (E.airQualityPipeMetadata = new _.jla(A));
                C && (E.directionsPipeParameters = new _.gla(C));
                E.darkLaunch = !!k;
                b = E;
                a.g = b;
                a.i = a.get("renderOnBaseMap");
                a.i ? (a = D.__gm.h, a.set(a.get().rf(b))) : Wkb(a, D, b);
                _.hi(D, "Lg");
                _.fi(D, 148282)
            }
        }
    };
    _.Ug("search_impl", new Xkb);
});
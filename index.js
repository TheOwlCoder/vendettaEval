(function(o, l, a) {
    "use strict";
    const f = a.findByProps("sendMessage", "receiveMessage"),
        i = a.findByProps("Messages"),
        d = ["rawr x3", "OwO", "UwU", "o.O", "-.-", ">w<", "(\u2445\u02D8\uA4B3\u02D8)", "(\uA20D\u1D17\uA20D)", "(\u02D8\u03C9\u02D8)", "(U \u1D55 U\u2741)", "\u03C3\u03C9\u03C3", "\xF2\u03C9\xF3", "(///\u02EC///\u273F)", "(U \uFE4F U)", "( \u0361o \u03C9 \u0361o )", "\u0298w\u0298", ":3", ":3", ":3", "XD", "nyaa~~", "mya", ">_<", "\u{1F633}", "\u{1F97A}", "\u{1F633}\u{1F633}\u{1F633}", "rawr", "^^", "^^;;", "(\u02C6 \uFECC \u02C6)\u2661", "^\u2022\uFECC\u2022^", "/(^\u2022\u03C9\u2022^)", "(\u273Fo\u03C9o)"],
        p = [
            ["small", "smol"],
            ["cute", "kawaii"],
            ["fluff", "floof"],
            ["love", "luv"],
            ["stupid", "baka"],
            ["what", "nani"],
            ["meow", "nya"],
            ["hello", "hewwo"]
        ];

    function y(e) {
        const n = Math.floor(Math.random() * e.length);
        return e[n]
    }
    const C = function(e) {
        return e.split("").every(function(n) {
            return n === e[0]
        })
    };

    function r(e) {
        let n = !1;
        for (const u of p) {
            const t = new RegExp(`\\b${u[0]}\\b`, "gi");
            t.test(e) && (e = e.replace(t, u[1]), n = !0)
        }
        return n ? e : !1
    }

    function m(e) {
        const n = /\S+|\s+/g,
            u = e.match(n);
        let t = "";
        if (u === null) return "";
        for (let s = 0; s < u.length; s++) {
            if (C(u[s]) || u[s].startsWith("https://")) {
                t += u[s];
                continue
            }
            r(u[s]) ? t += r(u[s]) : t += u[s].replace(/n(?=[aeo])/g, "ny").replace(/l|r/g, "w")
        }
        return t += " " + y(d), t
    }
    let c = [];
    var g = {
        onLoad: function() {
            c.push(l.commands.registerCommand({
                name: "eval",
                displayName: "Eval",
                description: "Evalucate Javascript and send the console",
                displayDescription: "Evalucate Javascript and send the console",
                options: [{
                    name: "message",
                    displayName: "message",
                    description: i.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                    displayDescription: i.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                    required: !0,
                    type: 3
                }],
                applicationId: -1,
                inputType: 1,
                type: 1,
                execute: function(e, n) {
                    f.sendMessage(n.channel.id, {
                        content: "testing"
                    })
                }
            }))
        },
        onUnload: function() {
            for (const e of c) e()
        }
    };
    return o.default = g, Object.defineProperty(o, "__esModule", {
        value: !0
    }), o
})({}, vendetta, vendetta.metro);

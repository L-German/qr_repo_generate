let app1;
!(function (e) {
    function t() {
        const e = n("qrcode-canvas");
        e.style.display = "none";
        const t = o("errcorlvl-medium").checked ? qrcodegen.QrCode.Ecc.MEDIUM : o("errcorlvl-quartile").checked ? qrcodegen.QrCode.Ecc.QUARTILE : o("errcorlvl-high").checked ? qrcodegen.QrCode.Ecc.HIGH : qrcodegen.QrCode.Ecc.LOW,
            r = n("input-text").value,
            c = qrcodegen.QrSegment.makeSegments(r),
            i = parseInt(o("force-min-version").value, 10),
            l = parseInt(o("force-mask-pattern").value, 10),
           
            size = o("force-size").value,
            u = qrcodegen.QrCode.encodeSegments(c, t, i, 40, l, 0),
            a = o("light-color-input").value,
            d = o("dark-color-input").value;
            da = o("s_light-color-input").value;
        {
            let t = size;
           
                (function (e, t, n, o, r,da, c) {
                    if (t <= 0 || n < 0) throw new RangeError("Value out of range");
                    const i = (e.size + 2 * n) * t;
                    (c.width = i), (c.height = i);
                    let l = c.getContext("2d");

                    // Создаем градиент для темных модулей
                    const gradient = l.createLinearGradient(0, 0, i, i);
                    gradient.addColorStop(0, r); // Начальный цвет (из dark-color-input)
                    gradient.addColorStop(1, da); // Конечный цвет (#FF484F)

                    for (let c = -n; c < e.size + n; c++) {
                        for (let i = -n; i < e.size + n; i++) {
                            // Используем градиент для темных модулей
                            l.fillStyle = e.getModule(i, c) ? gradient : o;
                            l.fillRect((i + n) * t, (c + n) * t, t, t);
                        }
                    }
                })(u, t, 2, a, d,da, e),
                e.style.removeProperty("display");
        }
    }
    function n(e) {
        const t = document.getElementById(e);
        if (t instanceof HTMLElement) return t;
    }
    function o(e) {
        const t = n(e);
        if (t instanceof HTMLInputElement) return t;
    }
    ((app1 || (app1 = {})).handleVersionMinMax = function (e) {
        const n = o("force-min-version");
        let r = parseInt(n.value, 10),
            c = parseInt((40).value, 10);
        (r = Math.max(Math.min(r, qrcodegen.QrCode.MAX_VERSION), qrcodegen.QrCode.MIN_VERSION)),
            (c = Math.max(Math.min(c, qrcodegen.QrCode.MAX_VERSION), qrcodegen.QrCode.MIN_VERSION)),
            "min" == e && r > c ? (c = r) : "max" == e && c < r && (r = c),
            (n.value = r.toString()),
            c.toString(),
            t();
    }),
        (function () {
            let e = document.querySelectorAll("input[type=number], input[type=text], textarea");
            for (let n of e) 0 != n.id.indexOf("version-") && (n.oninput = t);
            e = document.querySelectorAll("input[type=radio], input[type=checkbox]");
            for (let n of e) n.onchange = t;
            t();
            const n = document.getElementById("force-min-version"),
                o = document.getElementById("force-mask-pattern"),
                
                
                r = document.getElementById("customRange3"),
                c = document.getElementById("customRange4");
                
            function i(e) {
                const t = e.target;
                t === r ? (n.value = t.value) : t === c && (o.value = t.value);
            }
            r.addEventListener("input", i),
                c.addEventListener("input", i),
                document.querySelector('button[type="submit"]').addEventListener("click", function (e) {
                    e.preventDefault(), t();
                });
        })();
})();
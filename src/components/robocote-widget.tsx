"use client";

import Script from "next/script";

export default function RobocoteWidget() {
    return (
        <Script
            id="robocote-widget"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
                (function (w, d, t, o = {}) {
                    var f = d.getElementsByTagName("script")[0],
                        b = d.createElement("script");
                    w['robocoteParams'] = o;
                    b.src = "https://app.robocote.com/bot/" + t;
                    f.parentNode.insertBefore(b, f);
                })(window, document, "36F345E08CF741538C7B64E5E4DFADF9", { expanded: false, open: false, visible: true });
                `,
            }}
        />
    );
}

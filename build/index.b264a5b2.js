function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire1eea;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequire1eea=a),a.register("7PhYn",(function(t,n){var o,a;e(t.exports,"resolve",(()=>a),(e=>a=e)),e(t.exports,"register",(()=>o),(e=>o=e));var s={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},a=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("7PhYn").register(JSON.parse('{"di8mO":"index.b264a5b2.js","ahG90":"ganaste.a5669fde.svg","8AYsu":"perdiste.9846907e.svg","2Caxx":"giphy.2274061c.gif","e884A":"papel.5f79bbf0.svg","hBhWD":"piedra.c88f7ccf.svg","eJtx6":"tijera.6a2fdda1.svg"}'));const s={data:{currentGame:{computerPlay:"",myPlay:""},history:[{}]},win(){if(sessionStorage.getItem("vos")){const e=sessionStorage.getItem("vos");return sessionStorage.setItem("vos",JSON.stringify(Number(e)+1))}sessionStorage.setItem("vos","1")},lost(){if(sessionStorage.getItem("maquina")){const e=sessionStorage.getItem("maquina");sessionStorage.setItem("maquina",JSON.stringify(Number(e)+1))}else sessionStorage.setItem("maquina","1")},historyVos(){let e=JSON.parse(sessionStorage.getItem("vos"));return null===e?0:e},historyMaquina(){let e=JSON.parse(sessionStorage.getItem("maquina"));return null===e?0:e},whoWins:(e,t)=>"papel"===e&&"piedra"===t||"piedra"===e&&"tijera"===t||"tijera"===e&&"papel"===t?"gane":e===t?"empate":"perdi"};var r;a.register("kVZsc",(function(t,n){var o;e(t.exports,"getBundleURL",(()=>o),(e=>o=e));var a={};function s(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),a[e]=t),t}})),r=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("ahG90");var i;i=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("8AYsu");var c;c=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("2Caxx");const l=[{path:/\/welcome/,component:function(e){const t=document.createElement("div");return t.className="contenedor",t.innerHTML='\n        <title-text></title-text>\n        <button-start></button-start>\n        <div class="container">\n        <piedra-comp></piedra-comp>\n        <papel-comp></papel-comp>\n        <tijera-comp></tijera-comp>\n        </div>\n       \n    ',t.querySelector("button-start").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/instructions")})),t}},{path:/\/instructions/,component:function(e){const t=document.createElement("div");return t.className="contenedor",t.innerHTML='\n        <instructions-comp></instructions-comp>\n        <button-play></button-play>\n        <div class="container">\n        <piedra-comp></piedra-comp>\n        <papel-comp></papel-comp>\n        <tijera-comp></tijera-comp>\n        </div>\n    ',t.querySelector("button-play").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/play")})),t}},{path:/\/play/,component:function(e){setTimeout((function(){"/play"===location.pathname&&e.goTo("/instructions")}),5e3);const t=document.createElement("div");function n(){const e=["piedra","papel","tijera"];return e[Math.floor(Math.random()*e.length)]}t.className="container-play",t.innerHTML='\n    \n    <counter-comp></counter-comp>\n    <div class="jugadas">\n    <piedra-comp></piedra-comp>\n    <papel-comp></papel-comp>\n    <tijera-comp></tijera-comp>\n    </div>\n    ';const o=t.querySelector("piedra-comp"),a=t.querySelector("papel-comp"),r=t.querySelector("tijera-comp");return o.addEventListener("click",(t=>{t.preventDefault(),a.style.opacity="0.4",r.style.opacity="0.4";const o=n(),i=s.whoWins("piedra",o);setTimeout((()=>"gane"===i?(s.win(),e.goTo("/result/jugada",{resultado:"ganaste",player:"piedra",machine:o})):"empate"===i?e.goTo("/result/jugada",{resultado:"empate",player:"piedra",machine:o}):(s.lost(),e.goTo("/result/jugada",{resultado:"perdiste",player:"piedra",machine:o}))),700)})),a.addEventListener("click",(t=>{t.preventDefault(),o.style.opacity="0.4",r.style.opacity="0.4";const a=n(),i=s.whoWins("papel",a);setTimeout((()=>"gane"===i?(s.win(),e.goTo("/result/jugada",{resultado:"ganaste",player:"papel",machine:a})):"empate"===i?e.goTo("/result/jugada",{resultado:"empate",player:"papel",machine:a}):(s.lost(),e.goTo("/result/jugada",{resultado:"perdiste",player:"papel",machine:a}))),700)})),r.addEventListener("click",(t=>{t.preventDefault(),a.style.opacity="0.4",o.style.opacity="0.4";const r=n(),i=s.whoWins("tijera",r);setTimeout((()=>"gane"===i?(s.win(),e.goTo("/result/jugada",{resultado:"ganaste",player:"tijera",machine:r})):"empate"===i?e.goTo("/result/jugada",{resultado:"empate",player:"tijera",machine:r}):(s.lost(),e.goTo("/result/jugada",{resultado:"perdiste",player:"tijera",machine:r}))),700)})),t}},{path:/\/result\/perdiste/,component:function(e){const t=document.createElement("div");return t.className="container-perdiste",console.log(history.state.resultado),console.log(history.state.player),console.log(history.state.machine),t.innerHTML=`\n        <img src="${i}" >\n        <history-comp></history-comp>\n        <button-playagain></button-playagain>\n\n        `,t.querySelector("button-playagain").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/play")})),t}},{path:/\/result\/jugada/,component:function(e){const t=document.createElement("div");t.className="container-jugada";const n={papel:"<papel-comp></papel-comp>",piedra:"<piedra-comp></piedra-comp>",tijera:"<tijera-comp></tijera-comp>"};return t.innerHTML=`\n    ${n[history.state.machine]}\n    ${n[history.state.player]}\n    `,t.firstElementChild.className="maquina",setTimeout((()=>"ganaste"===history.state.resultado?e.goTo("/result/ganaste",history.state):"perdiste"===history.state.resultado?e.goTo("/result/perdiste",history.state):"empate"===history.state.resultado?e.goTo("/result/empate",history.state):void 0),2e3),t}},{path:/\/result\/ganaste/,component:function(e){const t=document.createElement("div");return t.className="container-ganaste",console.log(history.state.resultado),console.log(history.state.player),console.log(history.state.machine),t.innerHTML=`\n        <img src="${r}">\n        <history-comp></history-comp>\n        <button-playagain></button-playagain>\n    \n        `,t.querySelector("button-playagain").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/play")})),t}},{path:/\/result\/empate/,component:function(e){const t=document.createElement("div");return t.className="container-empate",console.log(history.state.resultado),console.log(history.state.player),console.log(history.state.machine),t.innerHTML=`\n        <img src="${c}" alt="">\n        <button-playagain></button-playagain>\n    \n        `,t.querySelector("button-playagain").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/play")})),t}}];var d;d=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("e884A");var p;p=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("hBhWD");var u;u=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("eJtx6"),function(){!function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("div");e.className="root",e.innerHTML=`\n                <h1>Piedra Papel ó Tijera</h1>\n                ${this.getStyle()}\n            `,this.shadowRoot.appendChild(e)}getStyle(){return"\n            <style>\n                .root {\n                margin: 0;\n                color: #009048;\n                font-family: 'Caveat', cursive;\n                font-size: 45px;\n                \n            }\n            h1 {\n                    margin: 0;\n                }\n            </style>\n\n            "}}customElements.define("title-text",e)}(),function(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("button");e.className="root",e.innerHTML=`\n                <span>Empezar</span>\n                ${this.getStyles()}    \n            `,this.shadowRoot.appendChild(e)}getStyles(){return"\n            <style>\n            .root{\n                border: 10px solid #001997;\n                padding:17px 13px;\n                background: #006CFC;\n                width: 322px;\n                height: 87px;\n                border-radius: 10px;\n\n                font-size: 45px; \n                font-family: 'Odibee Sans', cursive;\n                color: #D8FCFC;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                \n            }\n           </style>\n            \n            "}}customElements.define("button-start",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("button");e.className="root",e.innerHTML=`\n                <span>¡Jugar!</span>\n                ${this.getStyles()}    \n            `,this.shadowRoot.appendChild(e)}getStyles(){return"\n            <style>\n            .root{\n                border: 10px solid #001997;\n                padding:17px 13px;\n                background: #006CFC;\n                width: 322px;\n                height: 87px;\n                border-radius: 10px;\n\n                font-size: 45px; \n                font-family: 'Odibee Sans', cursive;\n                color: #D8FCFC;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                \n            }\n           </style>\n            \n            "}}customElements.define("button-play",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("img");e.src=d,e.style.width="85px",e.style.height="160px",this.shadowRoot.appendChild(e)}}customElements.define("papel-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("img");e.src=p,e.style.width="70px",e.style.height="160px",this.shadowRoot.appendChild(e)}}customElements.define("piedra-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("img");e.src=u,e.style.width="70px",e.style.height="160px",this.shadowRoot.appendChild(e)}}customElements.define("tijera-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("div");e.className="root",e.innerHTML=`\n                <span>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</span>\n                ${this.getStyle()}\n            `,this.shadowRoot.appendChild(e)}getStyle(){return"\n            <style>\n                .root {\n                margin: 0;\n                color: #000000;\n                font-family: 'Caveat', cursive;\n                font-size: 45px;\n                font-weight: bold; \n                text-align: center;\n \n            }\n            \n            </style>\n\n            "}}customElements.define("instructions-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("button");e.className="root",e.innerHTML=`\n                <span>Volver a Jugar</span>\n                ${this.getStyles()}    \n            `,this.shadowRoot.appendChild(e)}getStyles(){return"\n            <style>\n            .root{\n                border: 10px solid #001997;\n                padding:17px 13px;\n                background: #006CFC;\n                width: 322px;\n                height: 87px;\n                border-radius: 10px;\n\n                font-size: 45px; \n                font-family: 'Odibee Sans', cursive;\n                color: #D8FCFC;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                \n            }\n           </style>\n            \n            "}}customElements.define("button-playagain",e)}(),function(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.attachShadow({mode:"open"}),this.counter();const e=document.createElement("div");e.className="root",e.innerHTML=`\n            <div class="clock">\n\t        <span class="seconds"></span>\n            </div>\n            \n            ${this.getStyle()}    \n            `,this.shadowRoot.appendChild(e)}getStyle(){return"\n            <style>\n                .clock {\n\t        width: 300px;\n\t        height: 300px;\n\t        border-radius: 50%;\n\t        background-color: lightgrey;\n\t        margin: auto;\n            font-family: 'Odibee Sans', cursive;\n            }\n        \n                .seconds {\n\t        display: block;\n\t        width: 100%;\n\t        margin: auto;\n\t        padding-top: 60px;\n\t        text-align: center;\n\t        font-size: 150px;\n            }\n          \n            \n            </style>\n\n            "}counter(){let e=4,t=setInterval((()=>{e--,3==e?(this.shadowRoot.querySelector(".seconds").textContent="3",this.shadowRoot.querySelector(".clock").style.background="#F8C471"):2==e?(this.shadowRoot.querySelector(".seconds").textContent="2",this.shadowRoot.querySelector(".clock").style.background="#2ECC71 "):1==e?(this.shadowRoot.querySelector(".seconds").textContent="1",this.shadowRoot.querySelector(".clock").style.background="#D2B4DE"):0==e?(this.shadowRoot.querySelector(".seconds").innerHTML='\n                    <span class="time">Time\'s Over</span>\n                    <style>\n                        .time {\n                    font-size: 70px;\n                    color: crimson;\n                    }\n                    </style>\n                    ',this.shadowRoot.querySelector(".clock").style.background="#F1948A"):clearInterval(t)}),1e3);return t}}customElements.define("counter-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.attachShadow({mode:"open"});const e=document.createElement("div");e.className="container",e.innerHTML=`\n                <div>Score</div>\n                <div class="content">\n                <span>Vos: ${s.historyVos()}</span>\n                <span>Maquina: ${s.historyMaquina()}</span>\n                </div>\n                ${this.getStyle()}\n            `,this.shadowRoot.appendChild(e)}getStyle(){return"\n            <style>\n            \n\n                .container {\n\n                margin: 0;\n                color: #000000;\n                font-family: 'Odibee Sans', cursive;\n                font-size: 55px;\n                font-weight: bold; \n                text-align: center;\n                \n\n                display: flex;\n                flex-direction: column;\n                justify-content: space-around;\n                align-items: center;\n                padding: 20px;\n\n\n                background-color: antiquewhite;\n                border: black solid 10px;\n                border-radius: 10px;\n                width: 259px;\n                height: 217px;\n\n            }\n\n            .content {\n                display: flex;\n                flex-direction: column;\n                text-align: end;\n                font-size: 45px;\n                \n                \n\n            }\n            \n            </style>\n\n            "}}customElements.define("history-comp",e)}();!function(e){function t(e,t){history.pushState(t,"",e),n(e)}function n(n){console.log("El handleroute recibio una nueva ruta",n);for(const o of l)if(o.path.test(n)){const n=o.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}"/"===location.pathname?t("/welcome",""):n(location.pathname),location.host.includes(".github.io")&&t("dwf-m5-desafio/welcome",{}),window.onpopstate=e=>{n(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.b264a5b2.js.map

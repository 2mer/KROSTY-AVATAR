(()=>{"use strict";window.navigator.geolocation.getCurrentPosition(console.log,console.log);const t=document.getElementById("krosty");["assets/krosty1.png","assets/krosty2.png","assets/krosty3.png","assets/krosty4.png","assets/krosty5.png","assets/krosty6.png","assets/krosty7.png"].forEach((e=>{const s=document.createElement("div"),o=document.createElement("img");o.src=e,o.alt="Image of Krosty Kunt",o.title="Krosty Kunt",o.className="krost",s.append(o);const n=document.createElement("div");n.className="kroste";const a=document.createElement("img");a.src="assets/downloadButton.png";let c=0;a.onclick=()=>{const t=10*c++,o=document.createElement("img");o.src=e,o.alt="Image of Krosty Kunt",o.title="Krosty Kunt",o.className="krost",o.setAttribute("style",`position: absolute; top: ${t}px; left: ${t}px; width: 100%; height: 100%; z-index: -1`),s.appendChild(o)},n.append(a),s.append(n),null==t||t.appendChild(s)}))})();
/* ═══════════════════════════════════════════════
   ELITE AI — CORE ENGINE (v2.1)
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initTyping();
    initStars();
});

function initTyping() {
    const el = document.getElementById('typing-console');
    if (!el) return;

    // ELONGATED CODE LINES AS REQUESTED BY USER
    const lines = [
        "import { AutonomousKernel, NeuralBridge } from '@elite-systems/core/v4-stable';",
        "const ecosystem = new AutonomousKernel({ founder: 'Ilkin Chalabi', region: 'Global' });",
        "const protocol = ecosystem.attachProtocol('Neural_Bridge_v2.0_CrossChannel_Relay');",
        "",
        "> Initializing industry bridges for Real Estate & Global Hospitality sectors...",
        "> Handshake protocol with Booking.com Enterprise API... [ ESTABLISHED - 200 OK ]",
        "> Syncing Real Estate Private CRM database shards... [ INDEXING COMPLETED ]",
        "> Deploying Neural Link: WhatsApp Business API <=> Instagram Direct Messages v12",
        "",
        "DEBUG_LOG: Connected to secure node 0x7FFDDB8A9C within the UAE Data Center cluster.",
        "SYSTEM_REPORT: Processing 128 global high-intent leads across 4 autonomous channels.",
        "STATUS_CHECK: System operating at optimal 99.8% Efficiency in PRESET_AUTOMATION mode.",
        "",
        "> Deployment sequence initiated: Orchestrating autonomous revenue systems globally...",
        "> [THREAD_0] Monitoring Meta Ads Pixel conversion rates in real-time... [STABLE]"
    ];

    let line = 0, char = 0, text = '';

    function type() {
        if (line < lines.length) {
            if (char < lines[line].length) {
                text += lines[line][char++];
                el.textContent = text + '█'; // Solid cursor for terminal feel
                setTimeout(type, 15); // Slightly faster for longer lines
            } else {
                text += '\n';
                line++;
                char = 0;
                setTimeout(type, 300);
            }
        } else {
            setTimeout(() => { line = 0; char = 0; text = ''; type(); }, 3000);
        }
    }
    type();
}

function initStars() {
    const field = document.getElementById('star-field');
    if (!field) return;
    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:1.5px;height:1.5px;background:#fff;border-radius:50%;opacity:${Math.random()};animation:twinkle 4s infinite ${Math.random()*5}s`;
        field.appendChild(star);
    }
}

const s = document.createElement('style');
s.innerHTML = `@keyframes twinkle { 0%,100%{opacity:0.3; transform:scale(1)} 50%{opacity:0.8; transform:scale(1.2)} }`;
document.head.appendChild(s);

/* ═══════════════════════════════════════════════
   ELITE AI — CORE ENGINE (v2.0)
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initTyping();
    initStars();
});

function initTyping() {
    const el = document.getElementById('typing-console');
    if (!el) return;

    const lines = [
        "import { AutonomousAgent } from '@elite/core';",
        "const founder = 'Ilkin Chalabi';",
        "",
        "> Initializing industry bridges...",
        "> Handshake with Booking.com... [OK]",
        "> Syncing Real Estate CRM... [DONE]",
        "> Neural Link: WA <=> Instagram ACTIVE",
        "",
        "DEBUG: 0x7FFDDB8A9C connected",
        "SYSTEM: Processing 128 global leads",
        "STATUS: 99.8% Efficiency reached",
        "",
        "> Deploying revenue systems..."
    ];

    let line = 0, char = 0, text = '';

    function type() {
        if (line < lines.length) {
            if (char < lines[line].length) {
                text += lines[line][char++];
                el.textContent = text + '_';
                setTimeout(type, 30);
            } else {
                text += '\n';
                line++;
                char = 0;
                setTimeout(type, 500);
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
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:2px;height:2px;background:#fff;border-radius:50%;opacity:${Math.random()};animation:twinkle 3s infinite ${Math.random()*5}s`;
        field.appendChild(star);
    }
}

const s = document.createElement('style');
s.innerHTML = `@keyframes twinkle { 0%,100%{opacity:0.3} 50%{opacity:1} }`;
document.head.appendChild(s);

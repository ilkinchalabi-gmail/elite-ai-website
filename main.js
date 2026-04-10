/* ═══════════════════════════════════════════════
   ELITE AI — CORE JAVASCRIPT & ANIMATIONS
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initStars();
});

/**
 * Animated Typing Console Effect
 */
function initTypingEffect() {
    const consoleElement = document.getElementById('typing-console');
    if (!consoleElement) return;

    const codeLines = [
        "import elite_core from '@elite-ai/kernel';",
        "const agent = new elite_core.AutonomousAgent({",
        "  founder: 'Ilkin Chalabi',",
        "  sector: 'Hospitality & Real Estate',",
        "  mode: 'PREMIUM_AUTONOMOUS',",
        "  neural_latency: '12ms'",
        "});",
        "",
        "> Initializing industry bridges...",
        "> Handshake with Booking.com... [SUCCESS]",
        "> Indexing PropertyFinder CRM... [DONE]",
        "> Deploying Neural Bridge: WA <=> Instagram",
        "",
        "DEBUG: Attached to instance 0x7FFDDB8A9C",
        "SYSTEM_STATE: ACTIVE (99.8% Efficiency)",
        "LOG: Agent successfully engaged with 128 hospitality leads.",
        "> Orchestrating revenue systems..."
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';

    function type() {
        if (lineIndex < codeLines.length) {
            const currentLine = codeLines[lineIndex];
            
            if (charIndex < currentLine.length) {
                currentText += currentLine.charAt(charIndex);
                consoleElement.textContent = currentText + '_';
                charIndex++;
                setTimeout(type, 30);
            } else {
                currentText += '\n';
                lineIndex++;
                charIndex = 0;
                setTimeout(type, 500);
            }
        } else {
            // Restart after delay to keep it moving
            setTimeout(() => {
                lineIndex = 0;
                charIndex = 0;
                currentText = '';
                type();
            }, 3000);
        }
    }

    type();
}

/**
 * Star Field Animation
 */
function initStars() {
    const starField = document.getElementById('star-field');
    if (!starField) return;

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 5;

        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            opacity: ${Math.random()};
            animation: twinkle 3s infinite ${delay}s;
        `;
        starField.appendChild(star);
    }
}

// Global CSS Injection for Star Twinkling
const style = document.createElement('style');
style.innerHTML = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

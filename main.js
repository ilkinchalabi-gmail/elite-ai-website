/**
 * ELITE AI — ADVANCED CONSOLE ENGINE
 * Hardcore Mix Coding Simulation (Python/JS/Neural)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. STAR FIELD INITIALIZATION
    const starField = document.getElementById('star-field');
    const starCount = 150;
    if (starField) {
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 3 + 2;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--duration', `${duration}s`);
            starField.appendChild(star);
        }
    }

    // 2. HARDCORE CONSOLE TYPING (Complex IT Logic)
    const consoleElem = document.getElementById('typing-console');
    const hardcoreCommands = [
        "import torch.nn as nn",
        "import elite_core as ec",
        "from transformers import AutoModelForCausalLM",
        "",
        "DEBUG: Attached to [0x7FFDDB8A9C]",
        "class AutonomousAgent(nn.Module):",
        "    def __init__(self, business_id='CHALABI_77'):",
        "        super().__init__()",
        "        self.neural_bridge = ec.Bridge(protocol='TLS_1.3')",
        "        self.latent_space = nn.Linear(4096, 128)",
        "",
        "> Connecting to MetaCloud... latency: 12ms",
        "> Patching NeuralWeights to 0xBC11A..0xFF23",
        "async function deployNode(target) {",
        "    const response = await fetch(`${target}/api/v2/handshake`);",
        "    const buffer = await response.arrayBuffer();",
        "    return new NativeAgent(buffer, { mode: 'aggressive' });",
        "}",
        "",
        "> Initializing Industry Shards: [Hospitality, RealEstate, Retail]",
        "> [THREAD 0] Syncing with Booking.com/Airbnb API hooks...",
        "> [THREAD 1] Injecting LeadScraper into PropertyFinder DOM...",
        "> Building Cross-Channel Bridge: WhatsApp <=> CRM v4.2",
        "REGEX: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)/gi",
        "",
        "> OPTIMIZING CORE FLOPs... 98% Efficiency reached.",
        "> SYTEM_STATE: AUTONOMOUS_ACTIVE",
        "> Root: /home/ilkin/elite-ai/agents/deploy.sh --silent",
        "Waiting for input..."
    ];

    let cmdIdx = 0;
    let charIdx = 0;
    
    function typeCommand() {
        if (consoleElem && cmdIdx < hardcoreCommands.length) {
            const currentCmd = hardcoreCommands[cmdIdx];
            if (charIdx < currentCmd.length) {
                consoleElem.innerHTML += currentCmd.charAt(charIdx);
                charIdx++;
                setTimeout(typeCommand, 10); // Faster for code feel
            } else {
                consoleElem.innerHTML += "\n";
                cmdIdx++;
                charIdx = 0;
                setTimeout(typeCommand, 300);
            }
            consoleElem.scrollTop = consoleElem.scrollHeight;
        }
    }

    setTimeout(typeCommand, 1500);

    // 3. LOGO SCROLL CLONING
    const logosGrid = document.querySelector('.logos-grid');
    if (logosGrid) {
        const clone = logosGrid.cloneNode(true);
        logosGrid.parentElement.appendChild(clone);
    }

    // 4. MOUSE FLOW GLOW
    const cards = document.querySelectorAll('.bento-card, .pricing-card, .cta-box');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--glow-x', `${x}px`);
            card.style.setProperty('--glow-y', `${y}px`);
        });
    });
});

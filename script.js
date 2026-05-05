/**
 * JanDarwaarPortal - Core Logic
 * Handles: Charts, Theme Toggle (with Persistence), and Chatbot Interactions
 */

// --- 1. Theme Persistence Logic (Apply on Load) ---
const bodyElement = document.body;
const themeIcon = document.getElementById('theme-icon');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    bodyElement.classList.add('light-mode');
    if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// --- 2. Chart.js Initialization (Only if element exists) ---
const chartElement = document.getElementById('gravityChart');
let chart;

if (chartElement) {
    const ctx = chartElement.getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                label: 'Field Intensity',
                data: [65, 80, 72, 88, 75, 92],
                borderColor: savedTheme === 'light' ? '#E67E22' : '#FF9933',
                borderWidth: 3,
                tension: 0.5,
                fill: true,
                backgroundColor: 'rgba(255, 153, 51, 0.1)',
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false, suggestedMin: 50, suggestedMax: 100 } },
            animation: { duration: 800 }
        }
    });

    // Real-time Live Data Simulation (Only if chart exists)
    setInterval(() => {
        chart.data.datasets[0].data.shift();
        const newData = Math.floor(Math.random() * (95 - 70 + 1)) + 70;
        chart.data.datasets[0].data.push(newData);

        const stabilityText = document.querySelector('.neon-text');
        if (stabilityText) {
            stabilityText.innerText = (newData + Math.random()).toFixed(1);
        }
        chart.update();
    }, 1500);
}

// --- 3. Theme Toggle Logic ---
const themeBtn = document.getElementById('theme-toggle');

if (themeBtn) {
    themeBtn.onclick = () => {
        bodyElement.classList.toggle('light-mode');
        const isLight = bodyElement.classList.contains('light-mode');
        
        // Save to localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        // Update Icon
        if (themeIcon) {
            if (isLight) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }

        // Update Chart if it exists
        if (chart) {
            chart.data.datasets[0].borderColor = isLight ? '#E67E22' : '#FF9933';
            chart.update();
        }
    };
}

// --- 4. Chatbot Window Toggle ---
const chatButton = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-win');

if (chatButton && chatWindow) {
    chatButton.onclick = () => {
        chatWindow.classList.toggle('hidden');
    };
}

// --- 5. Emergency Stop (E-Stop) Alert ---
const eStopBtn = document.querySelector('.text-red-500');
if (eStopBtn) {
    const btnParent = eStopBtn.closest('button');
    if (btnParent) {
        btnParent.onclick = () => {
            alert("EMERGENCY STOP ACTIVATED: Re-grounding Portal Core...");
        };
    }
}

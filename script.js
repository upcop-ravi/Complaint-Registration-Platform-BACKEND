// 1. Chart.js Initialization
const ctx = document.getElementById('gravityChart').getContext('2d');
const gravityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['-10s', '-8s', '-6s', '-4s', '-2s', '0s'],
        datasets: [{
            label: 'Wave Sync',
            data: [65, 75, 70, 85, 80, 95],
            borderColor: '#22d3ee',
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { display: false },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
        }
    }
});

// Simulate Live Data Update
setInterval(() => {
    gravityChart.data.datasets[0].data.shift();
    gravityChart.data.datasets[0].data.push(Math.floor(Math.random() * 25) + 70);
    gravityChart.update();
}, 2000);

// 2. Chatbot Interactions
const chatBtn = document.getElementById('chat-toggle');
const chatWin = document.getElementById('chat-window');
const closeBtn = document.getElementById('close-chat');

chatBtn.addEventListener('click', () => {
    chatWin.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    chatWin.classList.add('hidden');
});
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS)
app.use(express.static(__dirname));

// Route for "GET /" - Serves the Pro Dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for "GET /hello" - Keeping it as requested before
app.get('/hello', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Page</title>
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #020617; color: white; }
                .container { text-align: center; padding: 2rem; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(34, 211, 238, 0.15); border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
                h1 { color: #22d3ee; }
                a { color: #22d3ee; text-decoration: none; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello!</h1>
                <p>This is the hello page.</p>
                <a href="/">Back to Dashboard</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
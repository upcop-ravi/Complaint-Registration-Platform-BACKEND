const express = require('express');
const app = express();
const port = 3000;

// Route for "GET /"
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>App Page</title>
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
                .container { text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #1a73e8; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>App Page</h1>
                <p>Welcome to the main application page!</p>
                <a href="/hello">Go to Hello Page</a>
            </div>
        </body>
        </html>
    `);
});

// Route for "GET /hello"
app.get('/hello', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Page</title>
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #e8f0fe; }
                .container { text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #188038; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello!</h1>
                <p>This is the hello page.</p>
                <a href="/">Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
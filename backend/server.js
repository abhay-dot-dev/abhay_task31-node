const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.port || 3000;

// creating the server
const server = http.createServer((req, res) => {
    // fetching the frontend file path
    const frontendPath = path.join(__dirname, "..", "frontend");

    // checking for different routes
    if (req.url === '/') {
        const fname = req.url === "/" ? "home" : req.url.split("/")[1];
        fs.readFile(path.join(frontendPath, `${fname}.html`), "utf-8", (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.end(error);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    else if (req.url === '/about' || req.url === '/contact') {
        const fname = req.url.split("/")[1];
        fs.readFile(path.join(frontendPath, `${fname}.html`), "utf-8", (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.end(error);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    }
    else {
        const fname = "404";
        fs.readFile(path.join(frontendPath, `${fname}.html`), "utf-8", (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.end(error);
                return;
            }
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    }
})

// making the server available on a specific PORT
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
})
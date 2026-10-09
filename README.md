# Node.js HTTP Server --- Basic Routing

A simple Node.js HTTP server that serves HTML pages for different routes
using the built-in `http` module. The project demonstrates file
handling, URL routing, HTTP status codes, and a custom 404 page.

## What Learnt?

-   Learnt how to create an HTTP server using Node.js's built-in `http`
    module.
-   Learnt how to handle incoming requests using `req.url`.
-   Learnt how to serve HTML files asynchronously using `fs.readFile`.
-   Learnt how to build reliable file paths using the `path` module and
    `__dirname`.
-   Learnt how to extract the file name from `req.url` by using the `split()` function so that the filename is generated dynamically rather than hardcoding it.
-   Learnt how to set HTTP response status codes such as `200`, `404`,
    and `500`.
-   Learnt how to set the `Content-Type` response header to `text/html`.
-   Learnt how to display a custom 404 page when a requested route does
    not exist.
-   Learnt how to use Tailwind CSS utility classes in HTML through the
    Tailwind browser CDN, if included.

## Routes Used

The server handles the following routes:

-   `/` → Home page (`home.html`)
-   `/about` → About page (`about.html`)
-   `/contact` → Contact page (`contact.html`)
-   Any other route → Custom 404 page (`404.html`)

## Tech Stack

-   Node.js
-   JavaScript
-   Node.js built-in `http` module
-   Node.js built-in `fs` module
-   Node.js built-in `path` module
-   HTML
-   Tailwind CSS Browser CDN (optional)

## Project Structure

``` text
abhay_task31/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── home.html
    ├── about.html
    ├── contact.html
    └── 404.html
```

## HTTP Status Codes

-   `200 OK` --- returned when a requested page is served successfully.
-   `404 Not Found` --- returned when the requested route does not
    exist.
-   `500 Internal Server Error` --- returned when the server cannot read
    the requested HTML file.

## Run the Project

1.  Open a terminal in the `backend` directory.

2.  Start the server:

    ``` bash
    node server.js
    ```

3.  Open `http://localhost:3000` in your browser.

## Note

This project uses Node.js's built-in modules and does not require
Express or Vite. If Tailwind CSS Browser CDN is used in the HTML files,
an internet connection is required for the styles to load. The Tailwind
browser CDN is intended for development and experimentation, not
production use.

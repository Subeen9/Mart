# Mart
This is Repo for teaching juniors with React for their personal journey on learning React.
#  Vite + React Project Setup Guide

This README will guide you through setting up your project, creating a Navbar, installing Bootstrap, and optionally adding React Router DOM.

---

## What is Vite?

[Vite](https://vitejs.dev/) is a next-generation frontend build tool created by Evan You (the creator of Vue.js).  

**Why use Vite?**
-  **Fast Cold Starts:** Instantly start the dev server using native ES modules.
-  **Lightning-Fast Hot Module Replacement (HMR):** Update changes in the browser almost instantly.
-  **Optimized Production Build:** Uses Rollup under the hood for efficient bundling.
-  **Framework Agnostic:** Works with React, Vue, Svelte, and more.

---

## Week 1 – Project Setup & Navbar

### 1 Create the project

Open your terminal and run:
```bash
npm create vite@latest
```
Follow the prompts:

Enter the project name

Select React + TypeScript (or React if you prefer JavaScript)

Navigate into your project folder:

```bash
cd your app
```

Install dependencies:

```bash
npm install

```
Run the server:
```bash
npm run dev

```
You should see the default Vite counter page.
Open the link shown in the terminal (usually http://localhost:5173).

Clean up App.tsx
Open src/App.tsx and remove all the default code, including useState.
Replace it with a simple welcome message:

```bash
export default function App() {
  return (
    <h1>Welcome to My Project</h1>
  );
}
```
Save and check your browser to confirm it shows your text.

Common Errors
Syntax Errors
Example: Unexpected token or JSX element must have one parent element.
➜ Make sure your return has a single root element.

Module Not Found
Example: Cannot find module './Navbar'
➜ Check that your filenames and import paths are correct.

Port Already in Use
Example: Port 5173 is already in use.
➜ Stop other dev servers or change the port

## Adding Bootstrap

Installing Bootstrap via npm:

```bash
npm install bootstrap@5.3.7

```
Add Bootstrap CDN Links:
Inside Head add(in index.html page)

```bash
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
  crossorigin="anonymous"
/>
```
Inside the body (in index.html)
```bash
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
  crossorigin="anonymous"
></script>

```

### Official Documentation
Bootstrap Docs: https://getbootstrap.com/docs/5.3/getting-started/introduction/

## Creating a Navbar 

Create a folder inside the src called components.
Inside components create Navbar.tsx
Here is a basic one. Feel free to tweak and make changes accordingly.

```bash
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
Import the Navbar.tsx in App.tsx
```bash
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <h1>Welcome to My Project</h1>
    </>
  );
}

```
Check the browser to see the Navbar

## Version Control and pushing changes.
```bash
git add . # Save changes
git commit -m "your message" # Commit changes
git push origin main # main is branch name by default is main and you are pushing main to github
```

## Bonus for Week One
If you’re ahead and want to add routing:

1. Install React Router DOM:

```bash
npm install react-router-dom
```
2. Wrap <App /> in main.tsx:
```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```
#### Make pages folder to create new pages like Home Shop etc

3. Update the App.tsx with Routes
```bash
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

```

4. Update Navbar page---Replace a tag with Link
```bash
 <Link className="nav-link" to="/shop">Shop</Link>
 ```

 ### Confused with React Router Dom, check the Helpful links and reach out to us.
 Pro Tip: Responsive Design
When testing mobile view, explore media queries: 
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

### Helpful Links for Week One
 Helpful Design Links
Dribbble Ideas: https://dribbble.com/tags/ecommerce

Wix Templates: https://www.wix.com/website/templates/html/online-store

Figma Templates: https://www.figma.com/community/website-templates/ecommerce

React-Router Video - https://www.youtube.com/watch?v=c02YoWR9gSY&ab_channel=NovaDesigns

Official React Router Documentation - https://reactrouter.com/start/declarative/installation


### Congratulations! You’ve completed Week 1 Setup.


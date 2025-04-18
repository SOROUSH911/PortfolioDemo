import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create custom CSS variables for the theme
document.documentElement.style.setProperty('--background', '255 255 255');
document.documentElement.style.setProperty('--foreground', '15 23 42');
document.documentElement.style.setProperty('--primary', '15 23 42');
document.documentElement.style.setProperty('--primary-light', '30 41 59');
document.documentElement.style.setProperty('--primary-foreground', '248 250 252');
document.documentElement.style.setProperty('--secondary', '51 65 85');
document.documentElement.style.setProperty('--accent', '59 130 246');
document.documentElement.style.setProperty('--accent-light', '96 165 250');
document.documentElement.style.setProperty('--accent-foreground', '255 255 255');
document.documentElement.style.setProperty('--neutral', '248 250 252');
document.documentElement.style.setProperty('--neutral-dark', '226 232 240');
document.documentElement.style.setProperty('--radius', '0.5rem');

createRoot(document.getElementById("root")!).render(<App />);

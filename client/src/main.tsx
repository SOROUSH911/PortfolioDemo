import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create custom CSS variables for the theme - BLUE THEME
document.documentElement.style.setProperty('--background', '255 255 255');
document.documentElement.style.setProperty('--foreground', '15 23 42');
document.documentElement.style.setProperty('--primary', '37 99 235'); // Blue
document.documentElement.style.setProperty('--primary-light', '59 130 246'); // Lighter blue
document.documentElement.style.setProperty('--primary-foreground', '255 255 255'); // White
document.documentElement.style.setProperty('--secondary', '51 65 85');
document.documentElement.style.setProperty('--accent', '37 99 235'); // Blue
document.documentElement.style.setProperty('--accent-light', '96 165 250'); // Light blue
document.documentElement.style.setProperty('--accent-foreground', '255 255 255'); // White
document.documentElement.style.setProperty('--neutral', '248 250 252');
document.documentElement.style.setProperty('--neutral-dark', '226 232 240');
document.documentElement.style.setProperty('--radius', '0.5rem');

createRoot(document.getElementById("root")!).render(<App />);

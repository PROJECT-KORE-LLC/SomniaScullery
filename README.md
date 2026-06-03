# 🌙 SOMNIASCULLERY
**Scullery of the Somniaverse**
This district of the Somniaverse is still forming

> **A bubbling cauldron of local-first nourishment.** 
> Where meal plans steep in quiet intention, and your recipes remain safely tucked away in your private digital scullery. No ads, no tracking. Just the hearth.

![Offline First](https://img.shields.io/badge/Offline-First-34d399?style=flat-square)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-a5b4fc?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-fb7185?style=flat-square)

SOMNIASCULLERY is a highly customizable, offline-first Progressive Web App (PWA) built with pure HTML, CSS, and Vanilla JavaScript. It serves as a digital cookbook, meal planner, ambient soundscape generator, and AI-powered kitchen assistant—all running safely within your device's local browser storage.

---

## ✨ Features

### 🎨 The Atmosphere Engine
* **Cozy Chaos Environment:** 20 distinct color palettes and 20 interactive glow styles powered by hardware-accelerated CSS and glassmorphism.
* **Dynamic Canvas:** Live, interactive particle effects (dust, snow, fireflies, runes) with adjustable density and speed.
* **Custom Walls:** Upload your own background images directly into the local database to personalize your space.
* **Vault Presets:** Save your favorite combinations of colors, backgrounds, particles, and audio mixes to your "Vault" and export them as JSON.

### 🎧 Built-in Audio Mixer
* **Ambient Stems:** Mix multiple ambient tracks simultaneously (rain, hearth fire, simmering pots, midnight owls).
* **Custom Sounds:** Upload your own `.mp3` files securely to your local IndexedDB to expand your audio library.
* **Master Control:** Individual volume sliders for every track, plus a global master gain control.

### 🍲 The Scullery (Kitchen Management)
* **Cookbook:** Create, edit, tag, and delete recipes. Upload photos of your dishes. Filter by tags like *Keto*, *Vegan*, or *RPG*.
* **Meal Calendar:** A drag-and-drop weekly meal planner. Drag recipes directly from your cookbook onto breakfast, lunch, or dinner slots.
* **Pantry & Groceries:** Keep track of your inventory and generate shopping lists with one-click cross-offs.

### 🤖 AI Sous Chef
* Connect your Google Gemini API key to awaken the AI Sous Chef.
* **Smart Recipe Generation:** Ask for a recipe based on dietary restrictions or leftover ingredients, and it will auto-populate into your local Cookbook.
* **Auto-Meal Planning:** Generate multi-day meal plans mapped perfectly to your calendar based on your macros or budget.

### 🔒 Privacy & Tech
* **100% Local Data:** Everything (images, audio, recipes, meal plans) is stored in your browser's IndexedDB. No servers, no tracking.
* **PWA Enabled:** Installable to your mobile or desktop home screen. Works completely offline via Service Workers.
* **WakeLock API:** Prevents your device screen from going to sleep while you have your hands covered in flour.
* **Import/Export:** Safely back up your entire Scullery database to a local `.json` file.

---

## 🚀 Getting Started

Because SOMNIASCULLERY uses ES modules (like Service Workers) and IndexedDB, it needs to be served over `http://localhost` or a secure `https://` connection. 

### Option 1: Local Server (Quickest)
1. Clone this repository or download the files.
2. Ensure you have all required files in the same directory:
   * `index.html`
   * `sw.js`
   * `manifest.json`
   * `SomniaScullery.png` (Default background)
   * All `.mp3` audio files.
3. Serve the directory using a local web server. For example, using Python:
```bash
   python -m http.server 8000

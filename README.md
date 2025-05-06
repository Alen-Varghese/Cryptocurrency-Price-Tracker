# 💹 Crypt-On – Cryptocurrency Price Tracker Web App

Crypt-On is a feature-rich, responsive cryptocurrency analytics platform built using React.js. It allows users to track prices, compare coins, analyze market trends, and manage a personal watchlist—all with a polished UI and smooth animations.

 - 🔗 Live Demo: https://crypt-on.netlify.app/
 - 🛠 Built with: React.js, Material UI, Chart.js, Axios, Framer Motion

---

## 🚀 Features

### 🏠 Landing Page
- Responsive Header with MUI Drawer
- Text-stroke hover animations for headings
- Framer Motion animations for content and images

### 📊 Dashboard Page
- Custom-themed MUI Tabs for navigation
- Real-time market data from CoinGecko API using Axios
- Search functionality via .filter()
- Animated rendering of Grid and List views
- Pagination using MUI + slice()

### 💰 Coin Details Page
- Dynamic routing via coin ID from URL
- Charts built using react-chartjs-2
- Interactive time-range selection via MUI Select
- Toggle between Price, Market Cap, and Volume data

### ⚖️ Compare Page
- Compare two coins on dual Y-axes
- Coin selection with dynamic dropdowns
- Responsive charts for visual side-by-side comparison

### ⭐ Watchlist Page
- Add/Remove coins to localStorage-based watchlist
- Persisted with useEffect for seamless UX

### 🔨 Additional Features
- Share page using RWebShare API
- Custom animated mouse cursor
- Toast notifications via react-toastify for user feedback

---

## 📂 Folder Structure 

 - src/
 - ├── components/
 - │ ├── Common/ # Header, Footer, Loader
 - │ ├── Coin/ # Coin Details, Chart, Info
 - │ ├── Compare/ # SelectCoins, ComparisonGraph
 - │ └── Dashboard/ # Tabs, Cards (Grid/List)
 - ├── functions/ # API and utility functions
 - ├── pages/ # Route components (Home, Coin, Compare, Watchlist)
 - ├── styles/ # Global and component CSS
 - └── App.js / index.js

## 📦 Tech Stack

- React.js (with Hooks)
- Material UI (MUI)
- Axios
- Chart.js (via react-chartjs-2)
- CoinGecko API
- Framer Motion
- React Toastify
- Netlify Deployment

---

## ⚙️ Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Alen-Varghese/Cryptocurrency-Price-Tracker.git
   cd Cryptocurrency-Price-Tracker
   
2. Install dependencies:
  ```bash
   npm install
  ```

3. Start the development server:

  ```bash
  npm start
  ```

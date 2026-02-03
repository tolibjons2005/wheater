# Telegram Weather Web App

A simple Telegram Web App that displays weather information for cities using the Open-Meteo API.

## Features

- City search with autocomplete suggestions
- Current weather display (temperature, condition, humidity, wind speed)
- Weather icons based on conditions
- Telegram theme integration (light/dark mode support)
- Mobile-responsive design

## Tech Stack

- React 18
- Vite
- Telegram Web App SDK
- Axios
- Open-Meteo API (free, no API key required)

## Installation

```bash
cd weather-telegram-app
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open your browser and navigate to the local URL (e.g., `http://localhost:5173`).

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically deploy the app
5. Copy the deployment URL

### Option 2: Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://app.netlify.com/drop)

### Option 3: GitHub Pages

1. Run `npm run build`
2. Push the `dist` folder to your GitHub repository
3. Enable GitHub Pages in repository settings

## Setting up Telegram Bot

1. Create a new bot via [@BotFather](https://t.me/BotFather) on Telegram
   - Send `/newbot`
   - Follow the instructions to set name and username
2. Set up the web app:
   - Send `/newapp` to @BotFather
   - Select your bot
   - Provide the deployed URL
   - Set up a button/menu to open the web app
3. Test the web app in Telegram

## API Endpoints Used

- **Geocoding**: `https://geocoding-api.open-meteo.com/v1/search`
- **Weather**: `https://api.open-meteo.com/v1/forecast`

Both APIs are free and do not require an API key.

## Project Structure

```
weather-telegram-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CitySearch.jsx
│   │   ├── WeatherDisplay.jsx
│   │   └── LoadingSpinner.jsx
│   ├── services/
│   │   ├── weatherService.js
│   │   └── geocodingService.js
│   ├── utils/
│   │   ├── weatherCodes.js
│   │   └── telegramSDK.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT

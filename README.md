🌦️ Weather App

A full-stack weather application built with **Laravel** (backend) and **Next.js + TypeScript** (frontend). It fetches real-time weather data from the OpenWeatherMap API and displays it in a modern, responsive UI.


🔧 Tech Stack

🖥️ Frontend
- Next.js 15
- React 19
- TypeScript
- TailwindCSS 4
- Ripple UI for component styling

 Backend
- Laravel 11
- PHP 8+
- REST API integration with [OpenWeatherMap](https://openweathermap.org/api)


📦 Features

- Search for real-time weather by city name
- Backend API built with Laravel and connected to OpenWeatherMap
- Custom UI design with dark mode styling
- Fully decoupled frontend and backend
- Type-safe codebase using TypeScript



🚀 Getting Started

 1. Clone the repo
bash
git clone https://github.com/gorts552/weather-app.git
cd weather-app
cd backend
composer install
cp .env.example .env
php artisan key:generate
Add your OpenWeatherMap API key in .env
php artisan serve
2. Set up the backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
Add your OpenWeatherMap API key in .env
php artisan serve
3. Set up the frontend
    cd ../frontend
npm install
npm run dev


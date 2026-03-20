# 🎬 MovieVault

> *Your personal cinema companion — discover, search, and vibe with movies.*

Built this as a learning project to explore React, async APIs, and real-world frontend development. It talks to the TMDB API and actually works! 🚀

---

## 🧐 What is this?

**MovieVault** is a React-based movie discovery app that pulls real data from The Movie Database (TMDB). You can browse popular movies, search for any title, and add favourites — all wrapped in a clean, cinematic UI.

No fluff. Just movies. 🍿

---

## ✨ What it does

- 🔥 Browse currently popular movies (live from TMDB)
- 🔍 Search any movie by title
- ❤️ Mark your favourites
- 📅 See release year at a glance
- 🖼️ Beautiful poster grid layout

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| ⚛️ Frontend | React 18 |
| ⚡ Build Tool | Vite |
| 🌐 API | TMDB (The Movie Database) |
| 🎨 Styling | CSS Modules |
| 🔀 Routing | React Router DOM |

---

## 🚀 Run it locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/movie-vault.git

# 2. Jump in
cd movie-vault

# 3. Install dependencies
npm install

# 4. Add your TMDB API key
# Create a .env file in the root:
echo "VITE_API_KEY=your_tmdb_api_key_here" > .env

# 5. Start the dev server
npm run dev
```

> 🔑 Get a free API key at [themoviedb.org](https://www.themoviedb.org/settings/api)

---

## 📁 Project Structure

```
src/
├── components/
│   └── MovieCard.jsx      # Individual movie card
├── services/
│   └── api.js             # TMDB API calls
├── css/
│   ├── Home.css
│   └── MovieCard.css
└── App.jsx
```

---

## 🙋 Author

Made with 💛 by **Muthuhariramar**
— learning React one bug at a time 😄

---

> *This project uses the TMDB API but is not endorsed or certified by TMDB.*
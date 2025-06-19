# 🕹️ Tianzi's Web Game Collection

Welcome to my collection of lightweight, browser-based games built with **HTML5** and **JavaScript**. These games are designed for fun and logic, and they run directly in your browser — no installations needed!

> 🔗 You can explore the live version here:  
> [https://wtianzi.github.io/games/](https://wtianzi.github.io/games/)

---

## 🌟 Current Game

### 🔷 [A* Grid Game](./a_star/index.html)

🧠 **Trap the robot using walls!**  
This game visualizes the A* pathfinding algorithm in real time. Your job is to slow or block the robot before it reaches the goal.

🎮 Features:
- Real-time A* path animation
- Wall drawing via mouse or touch
- Dynamic score based on steps and wall use
- Responsive design for desktop and mobile

📍 Play directly from GitHub Pages:  
[wtianzi.github.io/games/a_star](https://wtianzi.github.io/games/a_star/)

📘 More details in the [`a_star/README.md`](./a_star/README.md)

---

## 🧪 Development Notes

If you are running this project locally via `file://`:
- Be sure to **link directly to each game's `index.html`**, e.g.:  
  `./a_star/index.html` instead of `./a_star/`

Or better, run a local server:
```bash
cd games
python -m http.server 8000
# then open http://localhost:8000 in your browser

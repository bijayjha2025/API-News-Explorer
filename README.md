# NewsAsTreasure
NewsAsTreasure is a frontend-only React application that fetches and displays news articles from a public News API. The app allows users to browse news across multiple categories and read detailed articles through a dedicated view.

This project focuses on React fundamentals, API integration, state management, and UI rendering, without any custom backend.

## Features
- Fetch latest news from a public API
- Search news by keywords
- Filter news by categories (e.g., Business, Technology, Sports)
- Expand articles with a “Read More” option
- Open full articles in new tabs
- Polished UI with cards and buttons

## Concepts Practiced
- useState & useEffect for state management and side effects
- Async data fetching with fetch + async/await
- Conditional rendering for loading states and Read More toggle
- Handling errors and dynamic data updates

## Tech Stack
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API

## Project Structure
```
API-News-Explorer/
├── public/
│   └── images
│
├── src/
│   ├── Components/
│   │   ├── ErrorMessage.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingMessage.jsx
│   │   ├── NavBar.jsx
│   │   ├── NewsCard.jsx
│   │   ├── NewsList.jsx
│   │   └── Skeleton.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
│
├── package.json
└── README.md
```

## How to Run
- Clone the repository:
  - git clone https://github.com/bijayjha2025/API-News-Explorer.git
 
- install dependencies
  - npm install
 
- cd API-News-Explorer
- npm run dev

## Author
- Bijay Jha
- https://github.com/bijayjha2025/ (Github)

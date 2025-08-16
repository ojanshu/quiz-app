# React Quiz App

A simple quiz application built with **React**, **Context API**, **useReducer**, and **Tailwind CSS**. It fetches quiz questions from a local JSON file and allows users to attempt multiple-choice questions with scoring.

-----

## 🚀 Features

  - Quiz state management using **Context API** and **useReducer**.
  - **Tailwind CSS** for styling.
  - Fetches questions from a local JSON file in `public/`.
  - Tracks score, high score, and time.

-----

## 🛠 Setup Instructions

### 1\. Clone the Repository

```sh
git clone https://github.com/muhammadhassan0011/react-quiz-app.git
cd react-quiz-app
```

### 2\. Install Dependencies

Since the original repository does not include a `package.json` file, it's recommended to create a new React app first, for example, using **Vite**.

```sh
npm create vite@latest react-quiz-app
cd react-quiz-app
npm install
```

### 3\. Install Tailwind CSS

Follow the standard Tailwind CSS setup for a **Vite** project.

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Next, update your `tailwind.config.js` file:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

Finally, add the Tailwind directives to your `src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4\. Copy the Source Code

Copy the `src/` folder from the cloned repository into your new project.

Also, move the `questions.json` file into the `public/` folder of your new project. Your project directory should look like this:

```
react-quiz-app/
├─ public/
│  └─ questions.json   <-- Quiz questions here
├─ src/
│  ├─ components/
│  ├─ contexts/
│  ├─ reducers/
│  └─ App.jsx
```

### 5\. Fix the Fetch Path

In `QuizContext.jsx`, make sure the fetch call points to the `questions.json` file in your `public/` folder:

```javascript
const res = await fetch("/questions.json");
const data = await res.json();
dispatch({ type: "dataReceived", payload: data.questions });
```

**Note:** The JSON is wrapped in an object (`{ "questions": [...] }`), so you need to access `data.questions`.

### 6\. Run the App

```sh
npm run dev
```

The application will run at `http://localhost:5173`.

-----

## 📂 Data Source

Questions are stored in `public/questions.json`. Here is an example of the expected format:

```json
{
  "questions": [
    {
      "id": 1,
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5"],
      "answer": "4"
    }
  ]
}
```

-----

## 📜 License

This project is open-source and free to use for learning purposes.

-----

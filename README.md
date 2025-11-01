# To-Do List (React + Vite + Tailwind)

A simple and stylish To-Do application built with React (Vite) and Tailwind CSS.

## Repository
- GitHub: https://github.com/steller520/React_Assignment_01

## Features
- Add tasks
- Toggle task completion
- Edit task text (Save / Cancel)
- Delete tasks
- Gradient background with glass-morphism card and subtle animations

## Tech Stack
- React (Vite)
- Tailwind CSS
- react-icons

## Getting Started

```powershell
# 1) Install dependencies
npm install

# 2) Start the development server
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build
npm run preview
```

Open the local URL printed in the terminal (usually http://localhost:5173 or the next available port).

## Project Structure
- `src/App.jsx` – Root component holding tasks state and handlers
- `src/component/Header.jsx` – App header (title + icon)
- `src/component/ToDoList.jsx` – Input box and tasks list
- `src/component/ToDoItem.jsx` – Single task item (toggle/edit/delete)

## How It Works
Tasks are stored in state in `App.jsx` as objects:

```js
{ id: string, text: string, isChecked: boolean }
```

Handlers in `App.jsx` are passed down as props:
- `handleAddTask(text)` – add a new task
- `handleToggle(index)` – toggle completion
- `handleUpdate(index, newText)` – edit task text
- `handleDelete(index)` – remove a task

## Assignment Mapping (Module 3)
- Components: App, Header, ToDoList, ToDoItem
- State & Props: Tasks managed in App and passed to children
- Lists: Rendered via `map`, using stable `task.id` keys
- Events: Add, toggle, delete, and edit are implemented
- Styling: Tailwind CSS with gradients and transitions

## Submission Checklist
- Remove the `node_modules` folder before zipping/uploading
- Push at least 5 meaningful commits to GitHub
- README includes run instructions (this document)

## Troubleshooting
- If the default port is in use, Vite will automatically choose another (e.g., 5174)
- If Tailwind classes don’t apply, ensure CSS imports exist in `src/index.css` or `src/App.css`

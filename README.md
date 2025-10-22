# My React App

A responsive React application built with Vite, demonstrating component architecture, state management, hooks usage, and API integration using Tailwind CSS.

## Features

- **Component Architecture**: Reusable UI components (Button, Card, Navbar, Footer, Layout)
- **State Management**: React hooks (useState, useEffect, useContext) for managing application state
- **Task Management**: Add, complete, delete, and filter tasks with local storage persistence
- **API Integration**: Fetch data from JSONPlaceholder API with search and pagination
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Dark Mode**: Theme switching with context API
- **Routing**: Client-side routing with React Router

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **API**: JSONPlaceholder API
- **Linting**: ESLint
- **PostCSS**: Autoprefixer

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18 or higher (Download from [nodejs.org](https://nodejs.org/))
- **npm**: Comes with Node.js (or use Yarn if preferred)
- **Git**: For cloning the repository

You can check your versions by running:
```bash
node --version
npm --version
git --version
```

### Environment Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This will install all the required dependencies listed in `package.json`.

### Running the Application

1. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The development server will start on `http://localhost:5173` by default.

2. **Open in Browser**:
   Navigate to [http://localhost:5173](http://localhost:5173) in your web browser.

3. **Stop the Server**:
   Press `Ctrl + C` in the terminal to stop the development server.

### Building for Production

1. **Build the Application**:
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

2. **Preview the Production Build**:
   ```bash
   npm run preview
   ```
   This serves the production build locally for testing.

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

### Troubleshooting

- **Port Already in Use**: If port 5173 is busy, Vite will automatically suggest an alternative port. Or specify a custom port:
  ```bash
  npm run dev -- --port 3000
  ```

- **Dependencies Issues**: If you encounter dependency conflicts, try clearing the cache:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

- **Build Errors**: Ensure all dependencies are installed and Node.js version is compatible.

- **Browser Issues**: Clear browser cache or try an incognito window if changes aren't reflecting.

## Project Structure

```
my-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── ApiList.jsx
│   │   ├── Home.jsx
│   │   ├── TaskManager.jsx
│   │   └── Tasks.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsxDeployment
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Available Scripts

In the project directory, you can run the following commands:

- `npm run dev` - Starts the development server using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- `npm run build` - Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm run preview` - Locally previews the production build from the `dist` folder.
- `npm run lint` - Runs ESLint to check for code quality and style issues in JavaScript and JSX files.

### Netlify Deployment

This app is deployed:
(https://apans0.netlify.app/)


### GitHub Pages Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to your repository settings.
   - Under "Pages", select "Deploy from a branch" and choose `gh-pages`.

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Task Manager
![Task Manager](screenshots/tasks.png)

### API Integration
![API List](screenshots/api.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify






# 🚀 React + BDD Testing Demo - Setup Guide

This project is a demo showcasing **React**, **BDD testing with Playwright & Cucumber**, and **unit testing with Jest**.

---

## 📌 Prerequisites

Before running the project, ensure you have the following software installed:

### **1️⃣ Install Node.js & npm**
Node.js is required to run the React application.

🔗 **Download Link:** [https://nodejs.org/](https://nodejs.org/)

📌 **Verify Installation:**
```sh
node -v
npm -v
```

---

### **2️⃣ Install Visual Studio Code (VS Code)**
VS Code is recommended for editing and debugging the project.

🔗 **Download Link:** [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

### **3️⃣ Install Git (Optional but Recommended)**
Git is used for version control and repository management.

🔗 **Download Link:** [https://git-scm.com/downloads](https://git-scm.com/downloads)

📌 **Verify Installation:**
```sh
git --version
```

---

## 📌 Project Setup

### **1️⃣ Clone the Repository** (If using Git)
```sh
git clone https://github.com/your-repository/react-bdd-demo.git
cd react-bdd-demo
```

### **2️⃣ Install Dependencies**
Run the following command in the project folder to install dependencies:
```sh
npm install
```

---

## 📌 Running the Application
To start the React app, run:
```sh
npm start
```

The app will be available at: **http://localhost:3000/**

---

## 📌 Running Tests

### **1️⃣ Install Playwright & Jest**
```sh
npx playwright install
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev @cucumber/cucumber playwright @playwright/test
```

### **2️⃣ Run Unit Tests (Jest)**
```sh
npm test
```

### **3️⃣ Run Playwright Tests**
```sh
npx playwright test
```

### **4️⃣ Run BDD Tests (Cucumber + Playwright)**
```sh
npx cucumber-js
```

---

## 📌 Additional Setup (Mac/Linux & Windows Scripts)
To automate the setup, run:

### **Windows (Batch Script):**
```sh
install_prerequisites.bat
```

### **Mac/Linux (Shell Script):**
```sh
chmod +x install_prerequisites.sh
./install_prerequisites.sh
```

---

## 📌 Useful Extensions for VS Code
To improve development efficiency, install these VS Code extensions:
- **ESLint** ([Download](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
- **Prettier - Code Formatter** ([Download](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
- **Jest Runner** ([Download](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner))
- **Playwright Test for VS Code** ([Download](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright))

---

## 📌 Troubleshooting

### **Common Issues & Fixes**
| Issue | Solution |
|--------|-----------|
| `react-router-dom` module not found | Run `npm install react-router-dom` |
| Jest cannot resolve ES Modules | Install Babel: `npm install --save-dev babel-jest @babel/core @babel/preset-env` |
| Playwright tests fail due to missing browsers | Run `npx playwright install` |

---


For questions, feel free to reach out! 🚀


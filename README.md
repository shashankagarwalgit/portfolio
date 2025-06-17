# My Portfolio

---

## Introduction

Welcome to my digital space!

I'm **Shashank Agarwal**, a passionate and dedicated **Software Developer** with a keen interest in crafting robust, efficient, and user-centric applications. This portfolio serves as a comprehensive showcase of my journey in software development, highlighting the projects I've built, the skills I've honed, and the experiences that have shaped my approach to problem-solving.

Here, you'll discover a collection of my work, ranging from innovative web applications to intricate system designs, each reflecting my commitment to clean code, scalable architectures, and impactful solutions. I believe in continuous learning and leveraging cutting-edge technologies to bring ideas to life.

Dive in to explore my projects and learn more about how I can contribute to exciting challenges!

---

## 🚀 Overview

This component provides a highly customizable and **responsive AppBar (navigation bar)** built with **React** and **Material-UI**. It's ideal for web applications, especially **portfolio websites** or single-page applications, offering fixed-position navigation and a clean user interface.

The AppBar features a prominent branding/logo area, desktop navigation links, and a dedicated menu icon for mobile responsiveness. It also includes a subtle **hover effect on the logo** for enhanced user interaction.

---

## ✨ Features

* **Fixed Position:** The AppBar stays at the top of the viewport for constant navigation access.
* **Blurred Background:** A modern frosted glass effect is achieved using `backdropFilter: 'blur(10px)'`.
* **Responsive Design:**
    * **Desktop:** Displays full navigation links (`Home`, `About`, `Experience`, `Projects`, `Contact`).
    * **Mobile:** Switches to a **hamburger menu icon** (controlled by the `setIsMenuOpen` prop) on smaller screens for a streamlined look.
* **Clickable Logo:** The "Shashank Agarwal." logo acts as a refresh button, reloading the page on click.
* **Interactive Logo Hover Effect:** A subtle `scale` transformation and `color` change animate the logo when hovered over, providing visual feedback.
* **Material Design Theming:** Seamlessly integrates with Material-UI's theming system for consistent styling.

---

## 🛠️ Technologies Used

* **React:** The core JavaScript library for building the user interface.
* **Material-UI (MUI):** A popular React UI framework that implements Google's Material Design.
* **JavaScript (ES6+):** For component logic and interactivity.

---

## 📦 Installation & Usage (Component Integration)

This component is designed for easy integration into an existing React project that utilizes Material-UI.

### Prerequisites

Ensure your React project is set up and Material-UI is installed. If not, you can install it using:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
# or
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
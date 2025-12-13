# Professional Portfolio Website

A modern, responsive, and interactive personal portfolio website built with React and Tailwind CSS. This project showcases skills, projects, experience, and education in a professionally designed interface.

## 🚀 Features

- **Modern UI/UX**: Clean, minimalist design with glassmorphism effects and smooth transitions.
- **Dark/Light Mode**: Fully supported theme switching with persistent state.
- **Responsive Design**: Optimized for all devices from mobile to desktop.
- **Project Gallery**: Grid layout showcasing work with filtering and details.
- **Experience & Education**: Timeline views for professional history.
- **Admin Dashboard**: A hidden admin interface to manage content (currently protected by a client-side PIN).
- **Interactive Elements**: Used `framer-motion` and CSS transitions for a dynamic feel.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd MernStack-Protfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment:**
   Create a `.env` file in the root directory (if not exists) and add your Admin PIN:

   ```env
   VITE_ADMIN_PIN=3626
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**

   ```bash
   npm run build
   ```

## Admin Access

Access the admin panel at `/admin`.
**Note:** Ensure you have configured the `VITE_ADMIN_PIN` in your `.env` file.

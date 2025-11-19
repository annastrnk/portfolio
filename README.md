# Anna Starenka - Frontend Developer Portfolio 🚀

A modern, responsive portfolio website showcasing my work as a Frontend Developer. Built with React, Redux Toolkit, and Framer Motion for smooth animations and state management.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth page transitions
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Portfolio Filtering**: Filter projects by technology (React, Next.js, TypeScript, etc.)
- **Contact Form**: Integrated email functionality using EmailJS
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Error Handling**: Custom Error Boundary and 404 page

## 🛠️ Built With

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **Framer Motion** - Animations
- **Formik + Yup** - Form validation
- **EmailJS** - Contact form functionality
- **SCSS** - Styling
- **React Router** - Client-side routing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/annastrnk/anna-portfolio.git
cd anna-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── animation/     # Animation wrappers and utilities
│   ├── header/        # Navigation components
│   ├── projects/      # Project card component
│   └── ErrorBoundary/ # Error handling
├── pages/             # Page components
│   ├── mainPage/      # Home page
│   ├── aboutPage/     # About section
│   ├── portfolioPage/ # Projects showcase
│   ├── skillsPage/    # Skills section
│   ├── contactsPage/  # Contact form
│   └── notFoundPage/  # 404 page
├── data/              # Static data (projects, skills, etc.)
├── context/           # React Context (Theme)
├── store/             # Redux store and slices
└── styles/            # Global styles and variables
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Technologies & Libraries

- **State Management**: Redux Toolkit for filtering, Context API for theming
- **Forms**: Formik for form handling, Yup for validation
- **Animations**: Framer Motion for page transitions and scroll animations
- **Styling**: SCSS with CSS variables for theming
- **Email**: EmailJS for contact form submissions
- **Type Safety**: PropTypes for runtime type checking

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com). The `vercel.json` file handles routing configuration for client-side navigation.

## 📧 Contact

- **Email**: starenka.annaa@gmail.com
- **GitHub**: [@annastrnk](https://github.com/annastrnk)
- **GitLab**: [@Anna_Starenka](https://gitlab.com/Anna_Starenka)
- **LinkedIn**: [Anna Starenka](https://www.linkedin.com/in/anna-starenka/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Anna Starenka

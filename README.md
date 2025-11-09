# Pavankumar P S - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Fade-in and slide-in animations on scroll
- **Contact Form**: Send messages directly to your email using EmailJS
- **Modern UI**: Built with shadcn/ui components

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS for contact form:
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{message}}`
     - `{{to_email}}`
   - Copy your Service ID, Template ID, and Public Key

4. Update the contact form configuration in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'your_service_id'; // Replace with your EmailJS service ID
   const templateId = 'your_template_id'; // Replace with your EmailJS template ID
   const publicKey = 'your_public_key'; // Replace with your EmailJS public key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- EmailJS
- Next Themes
- Lucide React Icons

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── About.tsx    # About section
│   ├── Contact.tsx  # Contact form
│   ├── Footer.tsx   # Footer
│   ├── Header.tsx   # Navigation header
│   ├── Hero.tsx     # Hero section
│   ├── Projects.tsx # Projects showcase
│   ├── Resume.tsx   # Resume download
│   └── Skills.tsx   # Skills section
├── pages/
│   ├── Index.tsx    # Main page
│   └── NotFound.tsx # 404 page
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── assets/          # Static assets
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

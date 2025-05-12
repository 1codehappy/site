# Personal Website

A modern and responsive personal website developed with Next.js 14, TypeScript, and Tailwind CSS, running in an Alpine Docker container.

## Technologies Used

- **Next.js 14**: React framework for hybrid rendering and SSG
- **TypeScript**: Static typing for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Docker**: Container based on Alpine Linux
- **React Icons**: Icon library

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router files
│   ├── components/       # Reusable components
│   ├── lib/              # Functions and utilities
│   └── styles/           # Global styles and components
├── public/               # Static files (images, fonts)
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose configuration
└── package.json          # Dependencies and scripts
```

## How to Run

### Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system
2. Clone this repository
3. Run the command:

```bash
docker compose up
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Without Docker (Local Development)

1. Make sure you have Node.js installed (version 18+)
2. Clone this repository
3. Run:

```bash
npm install
npm run dev
```

## Customization

- Replace sample texts with your own information in each component
- Add your own images in the `public/` folder
- Customize colors and themes in the `tailwind.config.js` file
- Adjust sections to meet your specific needs

## Features

- ✅ Responsive design (mobile-first)
- ✅ Automatic light/dark mode
- ✅ Smooth animations with Framer Motion
- ✅ Optimized SEO
- ✅ Smooth anchor navigation
- ✅ Functional contact form (add your backend logic)
- ✅ Reusable components
- ✅ Multilingual support (English/Portuguese)
- ✅ Color scheme

## License

This project is free for personal and commercial use.

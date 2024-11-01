# YouTube to MP3 Converter - Client

A React-based web application that allows users to convert YouTube videos to MP3 format.

## Features

- Modern, responsive UI built with React and Tailwind CSS
- Dark/Light mode support
- Real-time video preview
- Simple and intuitive interface
- Built with Vite for optimal development experience

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtube-converter
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add:
```env
VITE_API_URL=http://localhost:3000
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

## Environment Variables

- `VITE_API_URL`: The URL of your backend API

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Shadcn UI
- Lucide React Icons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
# Feedback Collector

A single-page application for collecting user feedback with an admin dashboard, built with React, Tailwind CSS, and Netlify Functions.

![App Screenshot](./screenshot.png) <!-- Add your screenshot if available -->

## Features

- User feedback submission form (name, email, message)
- Admin view to see all submitted feedback
- Responsive design with dark/light mode toggle
- Form validation and error handling
- Animated UI with Framer Motion
- Serverless backend with Netlify Functions
- FaunaDB for data storage

## Tech Stack

- Frontend:
  - React
  - Vite
  - Tailwind CSS
  - Framer Motion (animations)
  - React Icons
  - React Router
- Backend:
  - Netlify Functions
  - FaunaDB (database)
- Deployment:
  - Netlify

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- FaunaDB account
- Netlify account

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/feedback-collector.git
   cd feedback-collector

## Install dependencies

1. npm install

## Set up environment variables:

Create a .env file in the root directory

1. FAUNADB_SECRET=your_fauna_db_secret

## To run the app locally:

1. npm run dev

## To test Netlify Functions locally:

1. npm run netlify

## Project Structure

src/
├── components/       # Reusable components
├── pages/            # Page components
├── utils/            # Utility functions
netlify/
└── functions/        # Serverless functions
public/               # Static assets

## Deployment
1. Push your code to a GitHub repository
2. Deploy to Netlify:
3. Go to Netlify
4. Click "New site from Git"
5.Select your repository
6.Configure build settings:
7.Build command: npm run build
8.Publish directory: dist
9.Add environment variable:
10.Key: FAUNADB_SECRET
11.Value: Your FaunaDB server key
12.Click "Deploy site"

## License
MIT

## Author
Sathiya Sri - dsathiyasri19@gmail.com


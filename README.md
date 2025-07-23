# React Setup template

<br>

## Demo

A live demo is available [here](https://react-setup-template.vercel.app/).

# Development Guide

## Prerequisites

- Node.js 18+
- Yarn package manager
- Git

## Getting Started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Start development server: `yarn start`
4. Open http://localhost:3002

## Project Structure

```
src/
├── app/           # App-level components and routing
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── utils/         # Utility functions and constants
└── index.css      # Global styles
```

## Available Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve production build
- `yarn lint` - Run ESLint
- `yarn test` - Run unit tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:e2e` - Run E2E tests

## Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages

## Testing

- Unit tests with Jest + React Testing Library
- E2E tests with Playwright
- Accessibility testing with axe-core

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
REACT_APP_API_BASE_URL=https://dummyjson.com
REACT_APP_API_TIMEOUT=10000
```

## Deployment

The app is automatically deployed to Vercel on push to main branch.

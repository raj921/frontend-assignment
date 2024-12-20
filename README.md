# Frontend Dashboard Assignment

A modern, responsive dashboard built with Next.js, React, and Tailwind CSS. Features include sortable tables, pagination, and an AI-powered chat interface.

## Features

- **Responsive Design**
  - Mobile-first approach
  - Tailwind CSS for styling
  - Clean and modern UI

- **Interactive Table**
  - Sortable columns
  - Pagination
  - Customizable page size
  - Clean data presentation

- **AI Chat Integration**
  - Powered by Google's Gemini API
  - Real-time chat interface
  - Elegant message threading
  - Loading states and error handling

- **Technical Features**
  - Next.js for server-side rendering
  - React hooks for state management
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Environment variable configuration

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn
- A Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```
   Then add your Gemini API key to the `.env.local` file.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/         # React components
├── hooks/             # Custom React hooks
├── pages/             # Next.js pages
├── public/            # Static assets
├── services/          # API services
├── styles/            # Global styles
└── types/            # TypeScript types
```

## Key Components

- `TableHead`: Sortable table headers
- `Pagination`: Table pagination controls
- `Chat`: AI chat interface
- `CustomTableCustomCell`: Custom table cells

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Development Guidelines

- Use TypeScript for all new components
- Follow the existing component structure
- Add proper types for all props
- Use Tailwind CSS for styling
- Keep components small and focused
- Add comments for complex logic

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
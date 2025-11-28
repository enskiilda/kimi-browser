# Gemini CUA Browser

A powerful browser automation playground powered by Gemini's new Computer Use Agent and Kernel. This free demo showcases the capabilities of AI-driven browser automation using Stagehand and Gemini's computer-use capabilities.

## Features

- 🤖 **Gemini Computer Use Agent**: Leverages Gemini's `computer-use-preview-10-2025` model for intelligent web interactions
- 🌐 **Real Browser Control**: Runs on cloud browsers via Kernel's infrastructure
- 🎯 **Natural Language Commands**: Describe tasks in plain English and watch the AI execute them
- 📊 **Real-time Streaming**: Server-Sent Events (SSE) for live agent feedback and progress updates
- 🔄 **Session Management**: Browser sessions with automatic viewport management

## Tech Stack

### Frontend
- **Framework**: Next.js 15 with React 19 and TypeScript
- **Styling**: Tailwind CSS with custom fonts (PP Neue, PP Supply)
- **Animation**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Markdown**: ReactMarkdown with GitHub Flavored Markdown (remark-gfm)

### Backend
- **AI Model**: Gemini Computer Use (`computer-use-preview-10-2025`)
- **Browser Automation**: Kernel + Stagehand
- **Agent Framework**: Stagehand with Playwright Core
- **Streaming**: Server-Sent Events (SSE) 
- **Runtime**: Node.js with Next.js API routes

### Infrastructure
- **Cloud Browsers**: [Kernel](https://onkernel.com) for browser infrastructure with stealth mode and live view
- **Analytics**: PostHog for user tracking
- **Deployment**: Optimized for Vercel with 600s max duration

## Prerequisites

- Node.js 18.x or later
- pnpm 10.x or later (recommended)
- API keys:
  - [Google AI Studio](https://aistudio.google.com/apikey) - for Computer Use Agent
  - [Kernel](https://onkernel.com) - for cloud browser infrastructure

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/browserbase/gemini-browser
cd gemini-browser
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
# OpenAI API Key (used for Stagehand internal operations)
OPENAI_API_KEY=your_openai_api_key

# Google AI Studio API Key
GOOGLE_API_KEY=your_google_api_key

# Kernel Configuration
KERNEL_API_KEY=your_kernel_api_key

# Optional: Analytics
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key

# Optional: Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Start the development server
```bash
pnpm dev
```

### 5. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Enter a Command**: Type a natural language instruction or select a preset example:
   - "What's the price of NVIDIA stock?"
   - "Review a pull request on Github"
   - "Browse Hacker News for trending debates"
   - "Play a game of 2048"

2. **Watch the Agent**: The AI will:
   - Create a browser session
   - Navigate to relevant websites
   - Interact with page elements (click, type, scroll)
   - Take screenshots to verify actions
   - Stream real-time progress updates

3. **View Results**: See the agent's reasoning, actions, and final response in rich markdown format

## Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Contributing

This is a demo project showcasing Gemini Computer Use Agent capabilities. Feel free to fork and experiment!

## License

MIT

## Acknowledgments

- [Kernel](https://onkernel.com) - Cloud browser infrastructure with stealth mode, live view, and anti-detection features
- [Stagehand](https://github.com/browserbasehq/stagehand) - Browser automation framework with AI capabilities
- [Google AI Studio](https://aistudio.google.com/) - Computer Use Agent API
- [Vercel](https://vercel.com) - Hosting and edge functions

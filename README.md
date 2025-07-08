# MAMIA Cooking App

MAMIA is a modern cooking app built with Next.js 14, TypeScript, and Tailwind CSS. It leverages the App Router for a seamless, scalable experience.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Context7 MCP** - Up-to-date code documentation for LLMs and AI code editors
- **Playwright MCP** - Browser automation and testing capabilities

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## MCP Integration

This project includes two powerful MCP servers for enhanced AI-assisted development:

### Context7 MCP
[Context7 MCP](https://github.com/upstash/context7) provides up-to-date code documentation for libraries and frameworks, making it easier to get accurate, current information when coding.

### Playwright MCP
[Playwright MCP](https://github.com/microsoft/playwright-mcp) enables browser automation and testing capabilities, allowing AI assistants to interact with web applications, take screenshots, and perform automated testing.

### Configuration
The project includes a `.mcp-config.json` file that can be used with MCP-compatible AI coding assistants like:
- Cursor
- VS Code with AI extensions
- JetBrains AI Assistant
- Warp
- And other MCP clients

### Usage
When using an MCP client, you can:
- Get real-time documentation for libraries (Context7)
- Resolve library names to Context7-compatible IDs
- Access focused documentation on specific topics
- Receive up-to-date code examples and setup instructions
- Automate browser interactions and testing (Playwright)
- Take screenshots and generate test reports
- Perform end-to-end testing of your application

## Folder Structure
- `src/app/` - Main application routes and layouts
- `public/` - Static assets
- `tests/` - Playwright test files
- `.mcp-config.json` - MCP server configuration
- `playwright.config.ts` - Playwright test configuration

## Features (Planned)
- Recipe browsing
- Ingredient management
- User profiles
- Meal planning

---

This project was bootstrapped with `create-next-app`.

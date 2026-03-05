# ADR 0001: Frontend Tech Stack and Project Structure

## Status
Accepted

## Context
The project requires a modern, scalable SaaS frontend for an engineering company. The design references use Tailwind CSS and emphasize a complex dashboard-style UI with multiple modules (Gantt, Kanban, Data Tables).

## Decision
We decided to use the following stack and structure:
- **Framework**: Next.js (App Router) for improved routing, server components, and performance.
- **Styling**: Tailwind CSS for rapid UI development and easy implementation of the provided design system.
- **Language**: TypeScript for type safety and better developer experience.
- **Icons**: Material Symbols Outlined (via Google Fonts) to match the design references.
- **Layout**: A persistent sidebar and topbar layout implemented in the root `app/layout.tsx`.
- **Modularity**: Individual modules are organized within the `app/` directory (e.g., `/projects`, `/providers`, `/settings`).

## Consequences
- **Pros**:
  - Consistent UI across all modules.
  - High performance due to Next.js optimizations.
  - Ease of maintenance with TypeScript and a component-based approach.
- **Cons**:
  - Increased initial setup complexity compared to a single-page HTML approach.
  - Requires a build step (Next.js) for deployment.

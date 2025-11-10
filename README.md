# Resallle

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/nodewalker/resallle)

Resallle is a modern, full-stack e-commerce web application designed for the fashion and clothing industry. Built with Next.js, its features include a dynamic storefront and an advanced product catalogue with filtering options. It also offers user authentication and uses the [FakeStoreAPI](https://github.com/nodewalker/fake-store-api) to fetch product data via API.

## Features

- **Dynamic Homepage:** Showcases featured collections, trending products, user reviews, and blog highlights.
- **Product Catalog:** Browse products with multi-level category navigation and dynamic filtering by price range.
- **User Authentication:** Secure user sign-in and sign-up functionality using JWT.
- **State Management:** Utilizes TanStack Query for server state and Redux Toolkit for global client state (user authentication).
- **Responsive Design:** Fully responsive layout for seamless browsing on desktop, tablet, and mobile devices.
- **Containerized:** Docker support for easy setup and deployment.
- **CI/CD Pipeline:** Automated build, linting, and deployment pipeline using GitHub Actions.

## Tech Stack

- **Framework:** Next.js (with Turbopack)
- **Language:** TypeScript
- **UI Library:** React
- **Styling:** Tailwind CSS, Font Awesome
- **State Management:** TanStack Query, Redux Toolkit
- **Animations:** Motion One
- **Containerization:** Docker

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20.x or later)
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/nodewalker/resallle.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd resallle
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn
    ```

4.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add the backend API URL. The application is configured to work with `fakestoreapi.ru`.

    ```
    API_URL=https://fakestoreapi.ru
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `https://localhost:3000` (uses `--experimental-https`).

## Running with Docker

The application is fully containerized and can be run using Docker Compose.

1.  Ensure you have Docker and Docker Compose installed.
2.  Run the following command from the project root:
    ```bash
    docker-compose up --build
    ```
    This will build the Docker image and start the Next.js application, accessible at `http://localhost:8000`.

## Available Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack and HTTPS.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server from the build output.
- `npm run lint`: Lints the source code using ESLint.

## CI/CD Pipeline

This repository is configured with GitHub Actions to automate testing and deployment.

- **`check.yml`**: Triggered on pushes and pull requests to the `dev` branch. It runs `npm install`, `npm run build`, and `npm run lint` to ensure code quality and build integrity.
- **`dev.yml`**: Triggered upon the successful completion of the `check` workflow on the `dev` branch. It automatically merges changes from `dev` into the `master` branch.
- **`deploy.yml`**: Triggered on pushes to the `master` branch. It deploys the application to the production server via SSH, builds a new Docker image, and restarts the service.

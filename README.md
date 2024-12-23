
> [!CAUTION]
> The maintainer of the Lucia authentication library has announced plans to deprecate it early next year. Due to the library's limitations and complexity, particularly around database adapters, the maintainer has decided to shift focus to providing Lucia as an open-source resource for learning how to implement authentication and sessions from scratch. This new direction will include tutorials and examples for advanced features like 2FA, password reset, and rate limiting, while the Discord server will continue to offer general auth support. The current version of Lucia (v3) will be maintained for another six months (early 2025), with some adapters possibly deprecated sooner.
[lucia-auth discussions #1707](https://github.com/lucia-auth/lucia/discussions/1707)


# Next.js Drizzle MySQL Tailwind Lucia Template

Welcome to the Next.js Drizzle MySQL Tailwind Lucia Template! This template offers a comprehensive starting point for building web applications using cutting-edge technologies like Next.js, Drizzle ORM, MySQL, Tailwind CSS, @tanstack/react-query, and Lucia.

## Table of Contents

1. [Live Demo](#live-demo)
2. [Database Hosting](#database-hosting)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Dependencies](#dependencies)
7. [Development Dependencies](#development-dependencies)
8. [Best Practices](#best-practices)
9. [Docker Setup](#docker-setup)
10. [License](#license)

## Live Demo

Experience the live demo of this template deployed on Vercel: [Next.js Drizzle MySQL Tailwind Demo](https://nextjs-drizzle-mysql-tailwind.vercel.app).

## Database Hosting

For the database, this template uses [MySQL](https://www.mysql.com/). You can configure any database you want. Refer to the [Drizzle Documentation](https://orm.drizzle.team/docs/overview) for more details.

## Installation

Get up and running quickly by following these steps:

### 1. Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v14 or later)
-   [npm](https://www.npmjs.com/)
-   [MySQL](https://www.mysql.com/)

### 2. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind.git
```

### 3. Navigate to the Project Directory

Move into the project directory:

```bash
cd nextjs-drizzle-mysql-tailwind
```

### 4. Install Dependencies

Install the necessary dependencies using your preferred package manager:

-   Using npm:
    ```bash
    npm install
    ```
-   Using pnpm:
    ```bash
    pnpm install
    ```
-   Using yarn:
    ```bash
    yarn install
    ```
-   Using bun:
    ```bash
    bun install
    ```

### 5. Set Up the Database

Configure your database by adding credentials to the `.env` file. Then, generate and migrate your database schema:

-   Using npm:
    ```bash
    npm run dk:gen
    npm run dk:mig
    ```
-   Using pnpm:
    ```bash
    pnpm run dk:gen
    pnpm run dk:mig
    ```
-   Using yarn:
    ```bash
    yarn run dk:gen
    yarn run dk:mig
    ```
-   Using bun:
    ```bash
    bun run dk:gen
    bun run dk:mig
    ```

### 6. Start the Development Server

Once everything is set up, start the development server:

-   Using npm:
    ```bash
    npm run dev
    ```
-   Using pnpm:
    ```bash
    pnpm run dev
    ```
-   Using yarn:
    ```bash
    yarn run dev
    ```
-   Using bun:
    ```bash
    bun run dev
    ```

_Note:_ If you're using Bun and encounter any issues, please refer to Bun's documentation as some commands may differ.

## Usage

This template includes a set of scripts to streamline your development process:

-   `dev-t`: Start the development server with the Next.js Turbopack bundler.
-   `dev`: Start the development server.
-   `build`: Build the application for production.
-   `start`: Start the application in production mode.
-   `lint`: Run ESLint for code linting.
-   `dk:gen`: Generate Drizzle ORM files for MySQL.
-   `dk:push`: Push changes to the MySQL database using Drizzle ORM.
-   `dk:pull`: Introspect the MySQL database using Drizzle ORM.
-   `dk:stdio`: Launch Drizzle Kit Studio with verbose output.
-   `dk:mig`: Run database migrations.
-   `dk:introspect`: Introspect the database schema.

These scripts cover essential tasks during development and deployment.

## Project Structure

The project's structure is thoughtfully organized to support efficient development:

<pre>
root
├───drizzle
│   └───meta
├───node_modules
├───public
└───src
    ├───actions
    ├───app
    │   └───(auth)
    │       ├───signin
    │       └───signup
    ├───auth
    ├───components
    │   └───forms
    └───db
        └───schema
</pre>

Feel free to adapt the project structure to meet the specific needs of your application.

## Dependencies

This template leverages a robust set of dependencies to deliver high performance and scalability:

-   **@lucia-auth/adapter-drizzle**: Integration of Lucia authentication with Drizzle ORM.
-   **@tanstack/react-query**: Powerful data-fetching library for React.
-   **bcrypt**: Secure password hashing library.
-   **drizzle-orm**: A powerful ORM for MySQL.
-   **lucia**: A lightweight JavaScript authentication library.
-   **mysql2**: MySQL client for Node.js.
-   **next**: The React framework for building server-rendered applications.
-   **oslo**: Utility library for Node.js.
-   **react**: A library for building user interfaces.
-   **react-dom**: DOM-specific methods for React.
-   **zod**: A TypeScript-first schema declaration and validation library.
-   **zustand**: A small, fast, and scalable state-management library.

## Development Dependencies

For a smooth development experience, the following tools and libraries are included:

-   **@tanstack/react-query-devtools**: Devtools for @tanstack/react-query.
-   **@types/bcrypt**: TypeScript definitions for bcrypt.
-   **@types/node**: TypeScript definitions for Node.js.
-   **@types/react**: TypeScript definitions for React.
-   **@types/react-dom**: TypeScript definitions for React DOM.
-   **@typescript-eslint/eslint-plugin**: TypeScript linting plugin for ESLint.
-   **@typescript-eslint/parser**: TypeScript parser for ESLint.
-   **autoprefixer**: PostCSS plugin to add vendor prefixes.
-   **drizzle-kit**: CLI toolkit for Drizzle ORM.
-   **eslint**: Linter for JavaScript and TypeScript code.
-   **eslint-config-next**: ESLint configuration for Next.js projects.
-   **eslint-config-prettier**: Ensures Prettier and ESLint play nicely together.
-   **eslint-plugin-drizzle**: ESLint plugin for Drizzle ORM.
-   **postcss**: Tool for transforming CSS with plugins.
-   **tailwindcss**: Utility-first CSS framework for custom designs.
-   **typescript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Best Practices

### Development Tips

-   **Optimize Builds:** Use Next.js Turbopack bundler (`npm run dev-t`) for faster builds during development.
-   **State Management:** Leverage `zustand` for scalable and efficient state management.
-   **Code Quality:** Use ESLint and Prettier for consistent code formatting and linting.

### Deployment Guides

-   **Vercel Deployment:** Deploy your application seamlessly on Vercel. Refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) for detailed instructions.
-   **Docker:** If you are interested in setting up a robust Docker environment for your project, check out my other repository, [Docker Containers](https://github.com/Its-Satyajit/Docker_Containers), which includes Docker stacks for:
    -   MySQL, MariaDB & phpMyAdmin Setup
    -   Portainer Setup
    -   PostgreSQL Setup
    -   Prometheus & Grafana Monitoring Stack

## License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind/blob/main/LICENSE) file.

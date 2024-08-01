# Next.js Drizzle MySQL Tailwind CSS Template

Welcome to the **Next.js Drizzle MySQL Tailwind CSS Template**! This template is your go-to starting point for building modern, scalable web applications using **Next.js**, **Drizzle ORM**, **MySQL**, **Tailwind CSS**, **@tanstack/react-query**, and **Lucia Authentication**. Explore how to set up, use, and customize this template for your next project.

## Live Demo

See the template in action: [Next.js Drizzle MySQL Tailwind Live Demo](https://nextjs-drizzle-mysql-tailwind.vercel.app).

## Why Choose This Template?

This template is designed to save you time by providing a fully integrated stack with:

-   **Next.js** for server-rendered React applications.
-   **Drizzle ORM** for efficient and type-safe database interactions.
-   **MySQL** for reliable database management.
-   **Tailwind CSS** for responsive and customizable UI components.
-   **Lucia** for secure and simple authentication.

## Quick Start Guide

### 1. Clone the Repository

Get started by cloning the repository to your local machine:

```bash
git clone https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind.git
```

### 2. Navigate to the Project Directory

Change to the project directory:

```bash
cd nextjs-drizzle-mysql-tailwind
```

### 3. Install Dependencies

Install the necessary dependencies using your preferred package manager:

-   **npm**:
    ```bash
    npm install
    ```
-   **pnpm**:
    ```bash
    pnpm install
    ```
-   **yarn**:
    ```bash
    yarn install
    ```
-   **bun**:
    ```bash
    bun install
    ```

### 4. Set Up the Database

Configure your MySQL database credentials in the `.env` file. Then, generate and migrate the database schema:

-   **npm**:
    ```bash
    npm run dk:gen
    npm run dk:mig
    ```
-   **pnpm**:
    ```bash
    pnpm run dk:gen
    pnpm run dk:mig
    ```
-   **yarn**:
    ```bash
    yarn run dk:gen
    yarn run dk:mig
    ```
-   **bun**:
    ```bash
    bun run dk:gen
    bun run dk:mig
    ```

### 5. Start the Development Server

Launch the development server:

-   **npm**:
    ```bash
    npm run dev
    ```
-   **pnpm**:
    ```bash
    pnpm run dev
    ```
-   **yarn**:
    ```bash
    yarn run dev
    ```
-   **bun**:
    ```bash
    bun run dev
    ```

## Project Structure

This template is organized to support efficient development and easy scalability. Here's an overview of the project structure:

```plaintext
root
├── drizzle
│   └── meta
├── node_modules
├── public
└── src
    ├── actions
    ├── app
    │   └── (auth)
    │       ├── signin
    │       └── signup
    ├── auth
    ├── components
    │   └── forms
    └── db
        └── schema
```

## Key Features and Technologies

This template leverages the following technologies:

### Core Dependencies

-   **@lucia-auth/adapter-drizzle**: Integrates Lucia authentication with Drizzle ORM.
-   **@tanstack/react-query**: Powerful data-fetching library for React.
-   **bcrypt**: Provides secure password hashing.
-   **drizzle-orm**: A type-safe ORM for interacting with MySQL databases.
-   **lucia**: Lightweight and secure authentication library.
-   **mysql2**: MySQL client for Node.js.
-   **next**: A framework for building server-side rendered React applications.
-   **oslo**: A utility library for Node.js.
-   **react**: A library for building user interfaces.
-   **react-dom**: The entry point for React to interact with the DOM.
-   **zod**: A TypeScript-first schema declaration and validation library.
-   **zustand**: A small, fast, and scalable state-management library.

### Development Tools

-   **@tanstack/react-query-devtools**: Devtools for react-query.
-   **@types**: TypeScript definitions for various libraries.
-   **@typescript-eslint**: ESLint plugin and parser for TypeScript.
-   **autoprefixer**: Adds vendor prefixes to CSS rules.
-   **drizzle-kit**: CLI toolkit for Drizzle ORM.
-   **eslint**: Linter for maintaining code quality.
-   **eslint-config-next**: ESLint configuration optimized for Next.js.
-   **tailwindcss**: Utility-first CSS framework for creating responsive designs.
-   **typescript**: A strongly-typed programming language that builds on JavaScript.

## Scripts

This template includes several scripts to facilitate development and deployment:

-   `dev-t`: Start the development server with the Turbopack bundler.
-   `dev`: Start the standard development server.
-   `build`: Build the application for production.
-   `start`: Start the production server.
-   `lint`: Run ESLint to check for code issues.
-   `dk:gen`: Generate Drizzle ORM files.
-   `dk:push`: Apply changes to the MySQL database.
-   `dk:pull`: Introspect the MySQL database.
-   `dk:stdio`: Open Drizzle Kit Studio.
-   `dk:mig`: Run database migrations.
-   `dk:introspect`: Introspect and generate database schema.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind/blob/main/LICENSE) file for more details.

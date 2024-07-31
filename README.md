# Next.js Drizzle MySQL Tailwind Lucia Template

Welcome to the **Next.js Drizzle MySQL Tailwind Lucia Template**! This template is designed to help you kickstart your web application development with a robust stack, including Next.js, Drizzle ORM, MySQL, Tailwind CSS, @tanstack/react-query, and Lucia for authentication. Whether you’re a beginner or an experienced developer, this guide will walk you through everything you need to know to get started.

## Live Demo

Experience the live demo of this template deployed on Vercel: [Next.js Drizzle MySQL Tailwind Demo](https://nextjs-drizzle-mysql-tailwind.vercel.app).

## Database Hosting

For the database, this template uses [Aiven](https://aiven.io/), which provides fully managed cloud database services.

## Installation Guide

Follow these simple steps to set up the template on your local machine:

### Step 1: Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind.git
```

### Step 2: Navigate to the Project Directory

Move into the project directory where the code is located:

```bash
cd nextjs-drizzle-mysql-tailwind
```

### Step 3: Install Dependencies

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

### Step 4: Configure the Database

Add your database credentials to the `.env` file.

### Step 5: Migrate the Database

Generate and run the necessary database migrations:

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
    yarn dk:gen
    yarn dk:mig
    ```

-   **bun**:

    ```bash
    bun dk:gen
    bun dk:mig
    ```

### Step 6: Start the Development Server

Finally, start the development server:

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
    yarn dev
    ```

-   **bun**:

    ```bash
    bun dev
    ```

> **Note**: If you are using Bun, commands may differ slightly from what’s provided here. Bun is a newer technology that I haven't explored in depth, but it's known for its performance and ease of use.

## Usage Instructions

This template comes with several pre-configured scripts to help streamline your development process:

-   **dev-t**: Start the development server with Next.js Turbopack bundler.
-   **dev**: Start the development server.
-   **build**: Build the Next.js application for production.
-   **start**: Start the application in production mode.
-   **lint**: Run ESLint to check your code for errors.
-   **dk:gen**: Generate Drizzle ORM files for MySQL.
-   **dk:push**: Push changes to the MySQL database using Drizzle ORM.
-   **dk:pull**: Introspect the MySQL database using Drizzle ORM.
-   **dk:stdio**: Start Drizzle Kit Studio with verbose output.
-   **dk:mig**: Run database migrations.
-   **dk:introspect**: Introspect the database schema with Drizzle ORM.

Use these scripts to streamline your workflow according to your project needs.

## Project Structure Overview

The project is organized into several key directories:

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

Feel free to modify and expand the structure to suit your project’s specific requirements.

## Key Dependencies

This template utilizes the following key dependencies:

-   **@lucia-auth/adapter-drizzle**: Adapter for integrating Lucia authentication with Drizzle ORM.
-   **@tanstack/react-query**: Powerful data-fetching library for React.
-   **bcrypt**: A library for hashing passwords securely.
-   **drizzle-orm**: An Object-Relational Mapping (ORM) library tailored for MySQL.
-   **lucia**: A lightweight authentication library.
-   **mysql2**: MySQL client for Node.js.
-   **next**: A powerful React framework for server-rendered applications.
-   **react**: A JavaScript library for building user interfaces.
-   **react-dom**: DOM-specific methods for React.
-   **zod**: A TypeScript-first schema declaration and validation library.
-   **zustand**: A small, fast, and scalable state management library for React.

## Development Dependencies

The development environment is set up with the following tools:

-   **@tanstack/react-query-devtools**: Developer tools for React Query.
-   **@types/bcrypt**: TypeScript type definitions for bcrypt.
-   **@types/node**: TypeScript type definitions for Node.js.
-   **@types/react**: TypeScript type definitions for React.
-   **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript support.
-   **@typescript-eslint/parser**: TypeScript parser for ESLint.
-   **autoprefixer**: A PostCSS plugin that adds vendor prefixes to CSS rules.
-   **drizzle-kit**: CLI toolkit for working with Drizzle ORM.
-   **eslint**: A tool for identifying and fixing code issues.
-   **eslint-config-next**: ESLint configuration specific to Next.js projects.
-   **eslint-config-prettier**: ESLint configuration to disable rules that conflict with Prettier.
-   **eslint-plugin-drizzle**: ESLint plugin for Drizzle ORM.
-   **postcss**: A tool for transforming CSS with JavaScript plugins.
-   **tailwindcss**: A utility-first CSS framework for building custom designs.
-   **typescript**: A superset of JavaScript that adds static types.

## License

This project is licensed under the MIT License. For more details, check the [LICENSE](https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind/blob/main/LICENSE) file.

# Next.js Drizzle MySQL Tailwind Lucia Template

Welcome to the Next.js Drizzle MySQL Tailwind Lucia Template! This template offers a comprehensive starting point for building web applications using cutting-edge technologies like Next.js, Drizzle ORM, MySQL, Tailwind CSS, @tanstack/react-query, and Lucia. Below, you'll find all the necessary details to set up, use, and explore the project.

## Live Demo

Experience the live demo of this template deployed on Vercel: [Next.js Drizzle MySQL Tailwind Demo](https://nextjs-drizzle-mysql-tailwind.vercel.app).

## Database Hosting

For the database, this template uses [Aiven](https://aiven.io/), which provides fully managed cloud database services.

## Installation

Get up and running quickly by following these steps:

### 1. Clone the Repository:

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind.git
```

### 2. Navigate to the Project Directory:

Move into the project directory:

```bash
cd nextjs-drizzle-mysql-tailwind
```

### 3. Install Dependencies:

Next, install the necessary dependencies. Choose your preferred package manager:

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

### 4. Set Up the Database:

Configure your database by adding credentials to the `.env` file. After that, generate and migrate your database schema:

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

### 5. Start the Development Server:

Once everything is set up, start the development server with the following command:

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

These scripts are designed to cover essential tasks during development and deployment.

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

## License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind/blob/main/LICENSE) file.

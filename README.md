# Next.js Drizzle MySQL Tailwind Lucia Template

Welcome to the Next.js Drizzle MySQL Tailwind Lucia Template! This template provides you with a solid foundation to start building web applications using Next.js, Drizzle ORM, MySQL, Tailwind CSS, and Lucia. Below, you'll find detailed instructions on installation, usage, project structure, dependencies, and license information.

## Live Demo

[Deployed on Vercel](https://nextjs-drizzle-mysql-tailwind.vercel.app)

## Database

[Aiven](https://aiven.io/)

## Installation

Follow these steps to get started with the template:

### Clone this repository:

```bash
git clone https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind.git
```

### Navigate into the project directory:

`bash
cd nextjs-drizzle-mysql-tailwind
`

### Install dependencies:

If you're using npm:

```bash
npm install
```

If you're using pnpm:

```bash
pnpm install
```

If you're using yarn:

```bash
yarn install
```

If you're using bun\*\*:

```bash
bun install
```

### Migrate Database:

add database credential in `.env` file and then

If you're using npm:

```bash
npm dk:gen
```

```bash
npm db:mig
```

If you're using pnpm:

```bash
pnpm dk:gen
```

```bash
pnpm db:mig
```

If you're using yarn:

```bash
yarn dk:gen
```

```bash
yarn db:mig
```

If you're using bun\*\*:

```bash
bun dk:gen
```

```bash
bun db:mig
```

### Start Development Server:

_Note:Just a heads up, dev-t (Next.js Turbopack) isn't playing nice with `next@14.1.4` at the moment. It tends to crash during page compilation. On the bright side, webpack seems to be chugging along just fine._

_Update: Good news! This issue seems to be sorted out in `next@canary`. Phew! 🚀_

If you're using npm:

```bash
npm dev
```

If you're using pnpm:

```bash
pnpm dev
```

If you're using yarn:

```bash
yarn dev
```

If you're using bun\*\*:

```bash
bun dev
```

\*\*
I don't have experience with Bun, so there may be differences in the Bash commands from what I mention here. I've heard it's an amazing technology, but I haven't had the opportunity to explore it yet.

## Usage

This template includes several scripts to aid development:

`dev-t: Start the development server with Next.js Turbopack bundler .`

`dev: Start the development server.`

`build: Build the Next.js application for production.`

`start: Start the Next.js application in production mode.`

`lint: Run ESLint for linting code.`

`dk:gen: Generate Drizzle ORM files for MySQL.`

`dk:push: Push changes to MySQL database using Drizzle ORM.`

`dk:pull: Introspect MySQL database using Drizzle ORM.`

`dk:stdio: Start Drizzle Kit Studio with verbose output.`

`db:mig: Run database migrations.`

You can use these scripts according to your development workflow.

## Project Structure

### The project structure is organized as follows:

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

Feel free to customize and organize the project structure based on your project's specific requirements.

## Dependencies

This template utilizes the following dependencies:

-   @lucia-auth/adapter-drizzle: Lucia authentication adapter for Drizzle ORM.
-   bcrypt: Library for hashing passwords.
-   drizzle-orm: Object-Relational Mapping (ORM) library for MySQL.
-   lucia: Lightweight JavaScript auth library.
-   mysql2: MySQL client for Node.js.
-   next: React framework for server-rendered applications.
-   oslo: Utility library for Node.js.
-   react: JavaScript library for building user interfaces.
-   react-dom: DOM-specific methods for React.

## Development Dependencies

Additionally, the template includes the following development dependencies:

-   @types/bcrypt: TypeScript type definitions for bcrypt.
-   @types/node: TypeScript type definitions for Node.js.
-   @types/react: TypeScript type definitions for React.
-   @types/react-dom: TypeScript type definitions for React DOM.
-   autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes.
-   dotenv: Module to load environment variables from a .env file.
-   drizzle-kit: CLI toolkit for Drizzle ORM.
-   eslint: JavaScript and TypeScript linter.
-   eslint-config-next: ESLint configuration for Next.js projects.
-   postcss: Tool for transforming CSS with JavaScript plugins.
-   tailwindcss: Utility-first CSS framework for building custom designs.
-   typescript: Typed superset of JavaScript that compiles to plain JavaScript.
-   eslint-plugin-drizzle: ES Lint Plugin for drizzle
-   @typescript-eslint/eslint-plugin: Typescript ES Lint plugin
-   @typescript-eslint/parser: ES Lint Parser plugin

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Its-Satyajit/nextjs-drizzle-mysql-tailwind/blob/main/LICENSE) file for details.

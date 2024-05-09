import { z } from 'zod';

const envVariables = z.object({
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_DATABASE: z.string(),
    DB_PORT: z.number(),
    DB_URL: z.string(),
    NODE_ENV: z.enum(['development', 'production']),
});

envVariables.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}

import { z } from 'zod';

const envVariables = z.object({
    NODE_ENV: z.enum(['development', 'production']),

    DB_HOST: z.string(),
    DB_PORT: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_DATABASE: z.string(),
});

const env = envVariables.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}

export default env;

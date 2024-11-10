import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from './router.ts'
const app = new Application();
import "jsr:@std/dotenv/load";

const PORT =  Deno.env.get('PORT')


app.use(oakCors({
    origin: "*"
}))
app.use(router.routes());

// app.use((ctx) => {
//     ctx.response.body = "Hello World";
// })

await app.listen({port: Number(PORT)});

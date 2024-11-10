import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import "jsr:@std/dotenv/load";

const url =  Deno.env.get('POSTGRESS_URL')

const client = new Client(
    url
);
await client.connect()
  
export default client;
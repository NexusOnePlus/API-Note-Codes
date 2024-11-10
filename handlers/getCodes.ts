import {mget } from "../repository/functions.ts"

export async function getCodes(ctx: any) {
    try {
        const codes = await mget(ctx.params);  
        ctx.status = 200; 
        ctx.response.body = codes.rows[0][0];
    } catch (err) {
        console.log(err);
    }
}
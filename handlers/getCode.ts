import {mget } from "../repository/functions.ts"
import * as find from '../libs/finder.ts'
export async function getCode(ctx: any) {
    try {
        const its = await find.find(ctx.params.id, ctx.params.pt);
        if(its){
            const codes = await mget(ctx.params);
            ctx.status = 200;
            ctx.response.body = codes.rows[0][0];
        } else {
            ctx.status = 404;
            ctx.response.body = {message: 'Code not found'};
        }
    } catch (err) {
        console.log(err);
    }
}1
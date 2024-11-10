import { remove } from "../repository/functions.ts"
import * as find from '../libs/finder.ts'
export async function delCode(ctx: any) {
    try {
        const its = await find.find(ctx.params.id, ctx.params.pt);
        if(its){
            ctx.status = 200;
            ctx.response.body = await remove(ctx.params);
        } else {
            ctx.status = 404;
            ctx.response.body = {message: 'Code not found'};
        }
    } catch (err) {
        console.log(err);
    }
}1
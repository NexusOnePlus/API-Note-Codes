import {update} from '../repository/functions.ts'
import * as find from '../libs/finder.ts'

export async function updateCode(ctx: any) {
    try {
        const its = await find.find(ctx.params.id,ctx.params.pt);
        if(its){
            const data = await ctx.request.body.json();
            ctx.response.body = await update(ctx.params.pt, ctx.params.id, data.name, data.description, data.solution, data.original);
            ctx.status = 200;
        } else {
            ctx.status = 404;
            ctx.response.body = {message: 'Code not found'};
        }
    } catch (err) {
        console.log(err);
    }
}
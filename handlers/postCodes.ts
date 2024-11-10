import { mpost } from "../repository/functions.ts";

export async function postCodes(ctx: any) {
    const data = await ctx.request.body.json();
    if (Object.prototype.hasOwnProperty.call(data,"name") && Object.prototype.hasOwnProperty.call(data,"description")  && Object.prototype.hasOwnProperty.call(data,"original")  && Object.prototype.hasOwnProperty.call(data,"solution")) {
        ctx.response.status = 200;
        ctx.response.body = await mpost(data, ctx.params);
    } else {
        ctx.response.body = "Invalid Request";
        ctx.response.status = 400;
    }
    // ctx.response.body = "adding";
}

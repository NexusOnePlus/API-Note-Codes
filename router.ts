import { Router } from "https://deno.land/x/oak/mod.ts";
import {getCodes} from './handlers/getCodes.ts'
import {getCode} from './handlers/getCode.ts'
import {postCodes} from './handlers/postCodes.ts'
import {delCode} from './handlers/deleteCodes.ts'
import {updateCode} from './handlers/updatecode.ts'

const router = new Router();

router
.get('/', (ctx) => {
    ctx.response.body = "yaaaaaaaa";
})
.get('/codes/:pt', getCodes)
.get('/codes/:pt/:id', getCode)
.post('/code/:pt', postCodes)
.delete('/codes/:pt/:id', delCode)
.put('/codes/:pt/:id', updateCode)  
export default router;

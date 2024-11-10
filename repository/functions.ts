import client from '../db.ts'


interface codeparams {
    id: string | number,
    name: string,
    date: string,
    description: string,
    solution: string,
    original: string
}

interface Params {
    id?: string | number;
    pt?: string
}


export async function mget(params: Params){
    // console.log(Object.keys(params).length)
    if(Object.keys(params).length > 1){
        return await client.queryArray(`SELECT json_agg(${params.pt}) from ${params.pt} WHERE id = ${params.id}`);
    } else {
        return await client.queryArray(`SELECT json_agg(${params.pt}) from ${params.pt}`)
    }
}

export async function mpost({name,description,solution, original}: codeparams, params: Params){
    return await client.queryArray(`INSERT INTO ${params.pt}(name, description, original, solution) VALUES($1, $2, $3, $4)`, [
       name, description, original, solution
    ]);    
}

export async function remove(params: Params){
    return await client.queryArray(`DELETE FROM ${params.pt} WHERE id = $1`, [params.id]);    
}

export async function update(platfrom:string, id: number, name: string, description: string, solution: string, original: string) {
    return await client.queryArray(`UPDATE ${platfrom} SET name = $1,description = $2, solution = $3, original = $4  WHERE id = $5`, [
        name, description, solution, original, id
    ]);
}
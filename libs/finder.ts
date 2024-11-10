import client from '../db.ts'

export async function find(id: number | string, platfrom: string): Promise<boolean> {
    const result:any = await client.queryArray(`SELECT COUNT(*) as count from ${platfrom} WHERE id = $1`, [id]);
    // console.log("what", result);
    return result.rows[0][0] >= 1;
}

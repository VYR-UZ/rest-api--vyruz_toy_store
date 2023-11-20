import {pool} from '../db.js';

export const ping = async (request, response) => {
    const [result] = await pool.query('SELECT 2 + 3 AS RESULT')
    response.json(result);
 }
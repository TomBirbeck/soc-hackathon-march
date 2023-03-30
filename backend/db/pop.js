import pool from './connect.js'
import candidates from './data.js'

async function populateDb(candidates) {
    for (let i = 0; i < candidates.length; i++){
        await pool.query('INSERT INTO candidates (name, skills) values ($1, $2)  RETURNING*;', [candidates[i].name, candidates[i].skills]);
    }
}

populateDb(candidates)
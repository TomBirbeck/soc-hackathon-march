import pool from "../db/connect.js"

export default async function getAllCandidates() {
    const result = await pool.query("SELECT * FROM candidates")
    return result.rows
}

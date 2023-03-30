import express from "express";
const router = express.Router();
import getAllCandidates from "../models/getAllCandidates.js";

router.get('/candidates', async (req, res) => {
    try {
       const response = await getAllCandidates()   
       res.json({ success : true, data : response})
    } catch (error) {
        res.json({ success : false, data : error})
    }
})

export default router;
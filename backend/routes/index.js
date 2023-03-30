import express from "express";
const router = express.Router();
import getAllCandidates from "../models/getAllCandidates.js";

router.get('/', async (req, res) => {
    try {
       const response = getAllCandidates()   
       res.json({ success : true, data : response})
    } catch (error) {
        res.json({ success : false, data : error})
    }
})

export default router;
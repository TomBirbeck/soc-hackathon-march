import express from "express";
const router = express.Router();
import getAllCandidates from "../models/getAllCandidates.js";

router.get('/', async (req, res, next) => {
    try {
       res.send('Hello World')
    } catch (error) {
        res.json({ success : false, data : error})
    }
    next()
})

router.get('/candidates', async (req, res, next) => {

    try {
       const response = await getAllCandidates()   
       res.json({ success : true, data : response})
    } catch (error) {
        res.json({ success : false, data : error})
    }
    next()
})

export default router;
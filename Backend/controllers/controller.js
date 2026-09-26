import Questions from "../models/questionSchema.js";
import Results from '../models/resultSchema.js';

import questions, { answers } from '../database/data.js';

// get all questions 
export  async function getQuestions (req,res) {
     let q = await Questions.find();
    if(q.length === 0){
        await Questions.insertMany({questions , answers});
        q = await Questions.find();
    }
    res.json(q);
}

// insert all questions 
export async function insertAllQuestions(req,res){
    try {
        await Questions.insertMany({questions : questions ,answers : answers })
    } catch (error) {
        res.json({error});
    }
}

// delete All questions 
export async function dropAllQuestions(req,res){
    try{
        await Questions.deleteMany();
        res.json({msg : "All questions has been deleted "});
    }catch(err){
        res.json({msg: "Error deleting questions "});
    }
}

//  get all results 
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export async function createResult(req,res){
    try {
        const {  username ,result , attempts , points ,achived } = req.body();
        if(!username && !result) throw new Error({msg : "Proper data not provided "});

        const newResult = await Results.create({ username, result, attempts, points, achived });
        res.json({msg : "new result created successfully ", result : newResult})
    } catch (error) {
        res.json({msg : "error occured while creating result "});
    }
}

// delete all results 
export async function deletAllResults (req,res){
    try {
        await Results.deleteMany();
        res.json({msg: "All results has been successfully deleted "});
    } catch (error) {
        res.json({msg : "error while deleting results"});
    }
}
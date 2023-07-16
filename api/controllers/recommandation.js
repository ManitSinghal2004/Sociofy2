import {db} from "../connect.js"
import jwt from "jsonwebtoken";

export const getRecommandation = (req,res)=>{
    const q = `SELECT id,username,profilePic FROM users LIMIT 10` ;
    
    db.query(q, (err,data)=>{
        if(err) return res.status(500).json(err) ; 
        return res.status(200).json(data) ; 
    })    
}
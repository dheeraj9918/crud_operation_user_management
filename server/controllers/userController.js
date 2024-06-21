import { User } from "../models/userModel.js";

export const create = async (req, res)=>{
    try {
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        const saveData = await userData.save();
        res.status(200).json({saveData, msg:"User created successfully"});
    } catch (error) {
       res.status(500).json({error:error}); 
    }
}

export const getAll = async (req, res)=>{
    try {
       const getData = await User.find();
       if(!getData){
        return res.status(404).json({msg:"User data is not present"})
       } 
       res.status(200).json(getData);
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getOne = async (req, res)=>{
    try {
       const id = req.params.id;
       const userExists = await User.findById(id);
       if(!userExists){
        return res.status(404).json({msg:"User is not present"});
       } 
       res.status(200).json(userExists);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const update = async(req, res)=>{
    try {
        const id  = req.params.id;
        const userExists = await User.findById(id);
        if(!userExists){
            return res.status(401).json({msg:"User is no present"})
        } 
        const updatedData = await User.findByIdAndUpdate(id ,req.body,{new:true});
        res.status(200).json({msg:"User updated successfully"});
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deletUser = async(req, res)=>{
    try {
       const id = req.params.id;
       const existUser= await User.findById(id);
       if(!existUser){
        return res.status(404).json({msg:"User not found"});
       }
       await User.findByIdAndDelete(id);
       res.status(200).json({msg:"User deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}
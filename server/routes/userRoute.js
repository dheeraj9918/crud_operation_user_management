import express from 'express';
import { create, deletUser, getAll, getOne, update } from '../controllers/userController.js';

const route = express.Router();
route.post("/create",create);
route.get("/getAll",getAll)
route.get("/getOne/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deletUser);

export default route;
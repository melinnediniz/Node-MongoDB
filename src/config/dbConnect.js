import mongoose from "mongoose";

//Mudar para o usuário e senha quando utilizar:
mongoose.connect('mongodb+srv://Cluster:senha@cluster.kyosic1.mongodb.net/Database');

let db = mongoose.connection;

export default db;

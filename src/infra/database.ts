import mongoose from "mongoose"

export async function connect(){
  try{
    await mongoose.connect('mongodb+srv://sa:masterkey@cluster0.dfnrvwk.mongodb.net/hero-tickets');
    console.log('Connect database success!');
  } catch (error){
    console.log(' ~ file: database.ts:5 ~connect ~error:', error);
  }
}
import { NextResponse } from "next/server";
import Pet from "../Model/Pet";
import mongoose from "mongoose";
import DATABASE_URL from "../../../lib/db"

export async function POST(req, res) {

    try{
        const data = await req.json()
    
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        return NextResponse.json({code: 'success', message : data})
        const pet = new Pet({
            name : data.name
        })

        pet.save();

        return NextResponse.json({code: 'success', message : 'record saved successfully'})
    }catch(e){
        return NextResponse.json({code: 'failed', message: e.message});
    }
}
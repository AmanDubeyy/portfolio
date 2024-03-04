import {NextResponse} from "next/server"
import mongoose from "mongoose"
import DATABASE_URL from "../../lib/db"
import Pet from "./Model/Pet"

export async function GET(){
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        var data = await Pet.find({});

        mongoose.disconnect(); 
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ code: 'error', message: error.message });
    }
}
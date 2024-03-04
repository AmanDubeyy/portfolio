import mongoose from 'mongoose';
const { Schema } = mongoose;

const PetSchema = new Schema({
  name : String
});

const Pet = mongoose.model('Pet') || mongoose.model('Pet', PetSchema);

export default Pet;
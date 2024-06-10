import mongoose from "mongoose";
import { Schema } from "mongoose";
import {model, models} from "mongoose";


const PromptSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt:{
        type: String,
        requried: [true, 'Prompt is required'],
    } ,
    tag:{
        type: String,
        required: [true, 'Tag is required'],
    }

});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
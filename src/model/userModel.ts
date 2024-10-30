import mongoose, { Document, Schema } from "mongoose";


interface IUser extends Document {
    username: string;
    password: string;
    email: string;
}


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
      
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true
    }

});

// Export the model
const User = mongoose.model<IUser>("User", userSchema);
export default User;

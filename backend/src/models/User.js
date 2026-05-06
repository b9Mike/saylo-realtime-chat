import mongosee from "mongoose";

const userSchema = new mongosee.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    profileImage: {
        type: String,
        default: ""
    },
}, { timestamps: true } );

const User = mongosee.model("User", userSchema);

export default User;
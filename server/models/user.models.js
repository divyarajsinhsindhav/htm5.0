const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },
    exams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam'
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
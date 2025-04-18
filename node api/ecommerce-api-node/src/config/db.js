const mongoose = require("mongoose");

const mondbUrl="mongodb+srv://hassanjack01:zr4adhLZA3CXWU0W@cluster0.skilr5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = () => {
    return mongoose.connect(mondbUrl);
}

module.exports = {connectDB}
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://hiren:Hiren@54321@cluster0.qhkek.mongodb.net/CURDAPP?retryWrites=true&w=majority';
const connectDB = {};
var conn = false;

connectDB.connect = async () => {
    try {
        conn = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB.close = () => {
    mongoose.connection.close();
}

module.exports = connectDB;
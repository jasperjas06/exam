import mongoose from "mongoose";

const Dbconfig = async() => {
    try {
        // await mongoose.connect('mongodb://localhost/CODISS')
        await mongoose.connect('mongodb+srv://Velava1411:123456789@cluster0.97cz2ez.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default Dbconfig;
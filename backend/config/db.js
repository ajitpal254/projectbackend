const mongose = require('mongoose');

const connectDB = async () =>{
    try{
        const conn = await mongose.connect("mongodb+srv://admin:navraaj12@cluster0.p6eab.mongodb.net/lostandfound?retryWrites=true&w=majority",{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true
        })
        console.log('Db connected '+ conn.connection.host)
    }
    catch (e) {
        console.error('Error:'+ e.message)
        process.exit(1)
    }
};
module.exports = connectDB;

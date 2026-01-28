require('dotenv').config();
const mongoose = require('mongoose');

// Ensure MONGO_URI is defined
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MongoDB URI is missing! Check your .env file.");
  process.exit(1);
}

// // Connect to MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB Connected!"))
// .catch(err => console.error("MongoDB Connection Error:", err));

const connect = () => {
    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("DB connection successful"))
    .catch((error)=> {
        console.log("issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
}


module.exports = connect;
const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/train_js');
        console.log('connecting successfully hhhh');
    }catch(error){
        console.log('failllllllllll');
    }
}
module.exports={connect};


//db;
// mongoose.connect('mongodb://localhost:27017/express_demo123');
// mongoose.connection.once('open', function(){
//   console.log('connection succesfully ahihi');
// }).on('error', function(error){
//   console.log('connection failer :)))');
// });
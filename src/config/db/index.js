const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
    try {
            await mongoose.connect('mongodb://127.0.0.1:27017/Webbanhang', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            console.log("success");
    } catch(error) {
        console.log("false");
    }

}

module.exports = { connect};
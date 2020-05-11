// docker run --name social-network-mongo -d -p 27017:27017  mongo
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const DB_URL = 'mongodb+srv://dbUser:12345@cluster0-fvexl.mongodb.net/social-network';
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//dbUser ///12345

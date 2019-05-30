const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/capstone', { useNewUrlParser: true, 'useFindAndModify': false });
const navDB = mongoose.connection;

navDB.on('error', (err) => console.log('error connecting to navDB', err))
navDB.once('open', () => console.log('connected to navDB at mongodb://localhost/capstone'))

module.exports = navDB
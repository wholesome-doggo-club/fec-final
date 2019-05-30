const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petPhotoCarousel', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to database!')
}); 

let carouselDataSchema = new mongoose.Schema({
  data: [],
});

let PetPictures = mongoose.model('PetPictures', carouselDataSchema);

module.exports =  PetPictures;

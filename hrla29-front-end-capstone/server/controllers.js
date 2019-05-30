const { City, Zip } = require('../db/models.js');

module.exports = {
  get: (req, res) => {
    // fetch data depending on searchTerm value.
    if (!Number(req.query.searchTerm)) {
      let vowels = /a|e|i|o|u/gi;
      let searchTerm = req.query.searchTerm.replace(vowels, '.');
      let re = new RegExp(searchTerm, "i");
      City.find({$or:[{cityName: re},{cityState:re}]}, null, { limit: 10 }, (err, doc) => err ? res.status(404).send('error grabbing locations') : res.status(200).send(doc))
    } else if (Number(req.query.searchTerm) !== NaN){
      let searchTerm = Number(req.query.searchTerm);
      if (searchTerm > 9999) {
        Zip.find({zipNum: searchTerm}, null, { limit: 10 }, (err, doc) => err ? res.status(404).send('error grabbing locations') : res.status(200).send(doc))
      } else if (searchTerm < 1000) {
        searchTerm = searchTerm * 100
        Zip.find({zipNum: { $gte: searchTerm }}, null, { limit: 10 }, (err, doc) => err ? res.status(404).send('error grabbing locations') : res.status(200).send(doc))
      } else if (searchTerm < 10000) {
        searchTerm = searchTerm * 10
        Zip.find({zipNum: { $gte: searchTerm }}, null, { limit: 10 }, (err, doc) => err ? res.status(404).send('error grabbing locations') : res.status(200).send(doc))
      }
    }
  },
  post: (req, res) => {
    // check with if statements if it's a city or zip code to be submitted. Check models to see the schema of City and Zip.
    if (req.body.cityName !== undefined) {
      City.create(req.body, (err, doc) => err ? res.status(404).send('error posting city') : res.status(200).send(`added "${doc}" to the list`))
    } else if (req.body.zipNum !== undefined) {
      Zip.create(req.body, (err, doc) => err ? res.status(404).send('error posting zip') : res.status(200).send(`added "${doc}" to the list`))
    }
  },
  updateCity: (req, res) => {
    const { _id, cityName, cityState, stateAbv } = req.body;
    City.findOneAndUpdate({ _id }, { cityName, cityState, stateAbv }, (err, doc) => err ? res.status(404).send('error updating city') : res.status(200).send(`updated city # ${ doc._id }`))
  }, 
  updateZip: (req, res) => {
    const { _id, zipNum, zipStateAbv } = req.body;
    Zip.findOneAndUpdate({ _id }, { zipNum, zipStateAbv }, (err, doc) => err ? res.status(404).send('error updating zip') : res.status(200).send(`updated zip # ${ doc._id }`))
  }, 
  delete: (req, res) => {
    // this function needs _id and type as params.
    if (req.query.type === 'zip') {
      Zip.deleteOne({ _id: req.query._id}, (err, doc) => err ? res.status(404).send('error deleting', err) : res.status(200).send('deleted zip!'))
    } else if (req.query.type === 'city') {
      City.deleteOne({ _id: req.query._id}, (err, doc) => err ? res.status(404).send('error deleting', err) : res.status(200).send('deleted city!'))
    }
  }
}
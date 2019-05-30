const models = require('../database/index.js')

module.exports = {
  post: (req, res) => {
    // const { data } = req.body
    // console.log1(req.body)
    models.create({data:req.body})
    .then((response) =>  res.status(200).send(response))
    .catch(err => res.status(400).send(err))
  
  },
  get: (req, res) => {
    // models.find() 
    // .then(data => res.status(200).send(data))
    // .catch(err => console.log('Error finding in database',err))

    models.countDocuments().exec(function(err, count){
      var random = Math.floor(Math.random() * count);
    
      models.findOne().skip(random).exec(
        function (err, result) {
          err ? console.log('Error fetching server-database', err) : res.status(200).send(result)
      });
    });


  } 
}
const request = require('request');
const db = require('../database/index.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateDoggos = () => {
  let names = [];
  let ages = ['Pupper', 'Youngin', 'Doggo', 'Oldoggo']
  let genders = ['male', 'female', 'genderfluid', 'transgender', 'intersex','male', 'female', 'male', 'female', 'male', 'female',];
  let location = 'Los Angeles, CA'
  request({ url: 'https://uinames.com/api/?region=england&amount=100' }, (err, res, body) => {
    if (err) console.log(err); else {
      let parsed = JSON.parse(body);
      for (var i = 0; i < parsed.length; i++) {
        names.push(parsed[i].name)
      }
      request({ url: 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100' }, (err, res, body) => {
        if (err) console.log(err); else {
          let parsed = JSON.parse(body);
          for (var i = 0; i < parsed.length; i++) {
            let doggo = {};
            doggo.name = names[i];
            doggo.breed = parsed[i].breeds[0].name;
            doggo.age = ages[getRandomInt(0, 3)];
            doggo.gender = genders[getRandomInt(0, 10)];
            doggo.location = location;
            doggo.image = parsed[i].url;
            db.save(doggo);
          }
        }
      })
    }
  })
}

generateDoggos();
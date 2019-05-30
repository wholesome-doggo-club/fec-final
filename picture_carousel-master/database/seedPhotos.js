const models  = require('./index.js');


var data = [
  
      [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44645716/1/?bust=1557352935&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44645716/4/?bust=1557353180&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44645716/2/?bust=1557352998&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44645716/3/?bust=1557353056&width=1080",
              "id": 3
          }
      ],
      [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44770650/1/?bust=1558622758&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44770650/2/?bust=1558623764&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44770650/3/?bust=1558623765&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44770650/4/?bust=1558727967&width=1080",
              "id": 3
          }
      ],
       [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44679667/5/?bust=1557711667&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44679667/1/?bust=1557711651&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44679667/2/?bust=1557711660&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44679667/4/?bust=1557711665&width=1080",
              "id": 3
          }
      ],
       [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42256660/1/?bust=1532271008&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42256660/3/?bust=1532271020&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42256660/4/?bust=1532271023&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42256660/5/?bust=1532272746&width=1080",
              "id": 3
          }
      ],
      [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686526/1/?bust=1557796398&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686526/2/?bust=1557796404&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686526/3/?bust=1557796406&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686526/4/?bust=1557796413&width=1080",
              "id": 3
          }
      ],
      [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44471081/1/?bust=1556155292&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44471081/2/?bust=1555573297&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44471081/3/?bust=1555573297&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44471081/5/?bust=1555573298&width=1080",
              "id": 3
          }
      ],
      [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44391161/2/?bust=1554768936&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44391161/4/?bust=1554443645&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44391161/1/?bust=1554768934&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44391161/3/?bust=1554443638&width=1080",
              "id": 3
          }
      ],
     [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43900412/3/?bust=1554751188&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43900412/2/?bust=1548909056&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43900412/1/?bust=1554751187&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43900412/4/?bust=1554751189&width=1080",
              "id": 3
          }
      ],
     [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44811940/1/?bust=1558990780&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44811940/2/?bust=1558990790&width=1080",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44811940/3/?bust=1558990797&width=1080",
              "id": 2
          },
          {
              "src": " https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44811940/4/?bust=1558990806&width=1080",
              "id": 3
          }
      ],
      [
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40292258/6/?bust=1540833326&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40292258/4/?bust=1513825083&width=1080",
              "id": 1
          },
          {
              "src": " https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40292258/1/?bust=1513878517&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40292258/2/?bust=1543004389&width=1080",
              "id": 3
          }
      ],
     [
          {
              "src": " https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686613/4/?bust=1558978369&width=1080",
              "id": 0
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686613/1/?bust=1557797595&width=10800",
              "id": 1
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686613/2/?bust=1557797599&width=1080",
              "id": 2
          },
          {
              "src": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44686613/3/?bust=1557797602&width=1080",
              "id": 3
          }
      ]
]

const insertDogPhotos = function() {
  console.log('insertDogPhotos seeding function invoked! Check your database at capstone')
  for(var element of data) {
    models.create({data: element})
  }
  // db.db.disconnect()

  
}

insertDogPhotos()
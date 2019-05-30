const db  = require('./index.js');
const { City, Zip } = require('./models.js');



let states = ['AZ', 'CA', 'CO', 'CT', 'FL', 'GA', 'IL', 'KS', 'MA', 'NV', 'OH', 'TX', 'WA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA']
const generatorr = () => {
  let result = [];
  let zip = 90000;
  for (let i = 0; i < 350; i++) {
    let obj = {}
    obj.zipNum = zip;
    obj.zipStateAbv = states[Math.floor(i%states.length)]
    result.push(obj)
    zip = zip + 3
  }
  return result
}
let samplePosts = generatorr();

const insertSampleZips = function() {
  console.log('insertSampleZips seeding function invoked! Check your database at capstone')
  Zip.create(samplePosts)
    .then(() => db.disconnect());
};

insertSampleZips();
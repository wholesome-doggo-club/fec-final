const db  = require('./index.js');
const { City, Zip } = require('./models.js');

const lotsOfCities = [
  {
      "cityName": "Los Angeles",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "San Diego",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "San Francisco",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Santa Barbara",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "San Jose",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Ventura",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Richmond",
      "cityState": "Virginia",
      "stateAbv": "VA"
  },
  {
      "cityName": "Juneau",
      "cityState": "Alaska",
      "stateAbv": "AK"
  },
  {
      "cityName": "Lincoln",
      "cityState": "Nebraska",
      "stateAbv": "NE"
  },
  {
      "cityName": "Tallahassee",
      "cityState": "Florida",
      "stateAbv": "FL"
  },
  {
      "cityName": "Orlando",
      "cityState": "Florida",
      "stateAbv": "FL"
  },
  {
      "cityName": "Miami",
      "cityState": "Florida",
      "stateAbv": "FL"
  },
  {
      "cityName": "Portland",
      "cityState": "Oregon",
      "stateAbv": "OR"
  },
  {
      "cityName": "Salem",
      "cityState": "Oregon",
      "stateAbv": "OR"
  },
  {
      "cityName": "Seattle",
      "cityState": "Washington",
      "stateAbv": "WA"
  },
  {
      "cityName": "Boston",
      "cityState": "Massachusettes",
      "stateAbv": "MA"
  },
  {
      "cityName": "Philadelphia",
      "cityState": "Pennsylvania",
      "stateAbv": "PA"
  },
  {
      "cityName": "Chicago",
      "cityState": "Illinois",
      "stateAbv": "IL"
  },
  {
      "cityName": "New York City",
      "cityState": "New York",
      "stateAbv": "NY"
  },
  {
      "cityName": "Tulsa",
      "cityState": "Oklahoma",
      "stateAbv": "OK"
  },
  {
      "cityName": "San Antonio",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Houston",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Austin",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Dallas",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Phoenix",
      "cityState": "Arizona",
      "stateAbv": "AZ"
  },
  {
      "cityName": "Las Vegas",
      "cityState": "Nevada",
      "stateAbv": "NV"
  },
  {
      "cityName": "Denver",
      "cityState": "Colorado",
      "stateAbv": "CO"
  },
  {
      "cityName": "Detroit",
      "cityState": "Michigan",
      "stateAbv": "MI"
  },
  {
      "cityName": "Boise",
      "cityState": "Idaho",
      "stateAbv": "ID"
  },
  {
      "cityName": "Salt Lake City",
      "cityState": "Utah",
      "stateAbv": "UT"
  },
  {
      "cityName": "Cleveland",
      "cityState": "Ohio",
      "stateAbv": "OH"
  },
  {
      "cityName": "Fresno",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Sacramento",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Bakersfield",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Long Beach",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Simi Valley",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Thousand Oaks",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Camarillo",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Oxnard",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Saint Paul",
      "cityState": "Minnesota",
      "stateAbv": "MN"
  },
  {
      "cityName": "Atlanta",
      "cityState": "Georgia",
      "stateAbv": "GA"
  },
  {
      "cityName": "Santa Fe",
      "cityState": "New Mexico",
      "stateAbv": "NM"
  },
  {
      "cityName": "Knoxville",
      "cityState": "Tennessee",
      "stateAbv": "TN"
  },
  {
      "cityName": "Nashville",
      "cityState": "Tennessee",
      "stateAbv": "TN"
  },
  {
      "cityName": "Honolulu",
      "cityState": "Hawaii",
      "stateAbv": "HI"
  },
  {
      "cityName": "Jacksonville",
      "cityState": "Florida",
      "stateAbv": "FL"
  },
  {
      "cityName": "Columbus",
      "cityState": "Ohio",
      "stateAbv": "OH"
  },
  {
      "cityName": "Fort Worth",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Indianapolis",
      "cityState": "Indiana",
      "stateAbv": "IN"
  },
  {
      "cityName": "Charlotte",
      "cityState": "North Carolina",
      "stateAbv": "NC"
  },
  {
      "cityName": "Washington, D.C.",
      "cityState": "District of Columbia",
      "stateAbv": "DC"
  },
  {
      "cityName": "El Paso",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Memphis",
      "cityState": "Tennessee",
      "stateAbv": "TN"
  },
  {
      "cityName": "Oklahoma City",
      "cityState": "Oklahoma",
      "stateAbv": "OK"
  },
  {
      "cityName": "Baltimore",
      "cityState": "Maryland",
      "stateAbv": "MD"
  },
  {
      "cityName": "Milwaukee",
      "cityState": "Wisconsin",
      "stateAbv": "WI"
  },
  {
      "cityName": "Albuquerque",
      "cityState": "New Mexico",
      "stateAbv": "NM"
  },
  {
      "cityName": "Tucson",
      "cityState": "Arizona",
      "stateAbv": "AZ"
  },
  {
      "cityName": "Mesa",
      "cityState": "Arizona",
      "stateAbv": "AZ"
  },
  {
      "cityName": "Kansas City",
      "cityState": "Missouri",
      "stateAbv": "MO"
  },
  {
      "cityName": "Omaha",
      "cityState": "Nebraska",
      "stateAbv": "NE"
  },
  {
      "cityName": "Raleigh",
      "cityState": "North Carolina",
      "stateAbv": "NC"
  },
  {
      "cityName": "Colorado Springs",
      "cityState": "Colorado",
      "stateAbv": "CO"
  },
  {
      "cityName": "Virginia Beach",
      "cityState": "Virginia",
      "stateAbv": "VA"
  },
  {
      "cityName": "Oakland",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Minneapolis",
      "cityState": "Minnesota",
      "stateAbv": "MN"
  },
  {
      "cityName": "Tulsa",
      "cityState": "Oklahoma",
      "stateAbv": "OK"
  },
  {
      "cityName": "Arlington",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "New Orleans",
      "cityState": "Louisiana",
      "stateAbv": "LA"
  },
  {
      "cityName": "Wichita",
      "cityState": "Kansas",
      "stateAbv": "KS"
  },
  {
      "cityName": "Bakersfield",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Aurora",
      "cityState": "Colorado",
      "stateAbv": "CO"
  },
  {
      "cityName": "Anaheim",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Santa Ana",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Riverside",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Corpus Christi",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Lexington",
      "cityState": "Kentucky",
      "stateAbv": "KY"
  },
  {
      "cityName": "Stockton",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "St. Louis",
      "cityState": "Missouri",
      "stateAbv": "MO"
  },
  {
      "cityName": "Henderson",
      "cityState": "Nevada",
      "stateAbv": "NV"
  },
  {
      "cityName": "Pittsburgh",
      "cityState": "Pennsylvania",
      "stateAbv": "PA"
  },
  {
      "cityName": "Cincinnati",
      "cityState": "Ohio",
      "stateAbv": "OH"
  },
  {
      "cityName": "Anchorage",
      "cityState": "Alaska",
      "stateAbv": "AK"
  },
  {
      "cityName": "Greensboro",
      "cityState": "North Carolina",
      "stateAbv": "NC"
  },
  {
      "cityName": "Plano",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Newark",
      "cityState": "New Jersey",
      "stateAbv": "NJ"
  },
  {
      "cityName": "Irvine",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Toledo",
      "cityState": "Ohio",
      "stateAbv": "OH"
  },
  {
      "cityName": "Chula Vista",
      "cityState": "California",
      "stateAbv": "CA"
  },
  {
      "cityName": "Durham",
      "cityState": "North Carolina",
      "stateAbv": "NC"
  },
  {
      "cityName": "Fort Wayne",
      "cityState": "Indiana",
      "stateAbv": "IN"
  },
  {
      "cityName": "St. Petersburg",
      "cityState": "Florida",
      "stateAbv": "FL"
  },
  {
      "cityName": "Laredo",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Buffalo",
      "cityState": "New York",
      "stateAbv": "NY"
  },
  {
      "cityName": "Madison",
      "cityState": "Wisconsin",
      "stateAbv": "WI"
  },
  {
      "cityName": "Lubbock",
      "cityState": "Texas",
      "stateAbv": "TX"
  },
  {
      "cityName": "Chandler",
      "cityState": "Arizona",
      "stateAbv": "AZ"
  },
  {
      "cityName": "Scottsdale",
      "cityState": "Arizona",
      "stateAbv": "AZ"
  },
  {
      "cityName": "Glendale",
      "cityState": "Arizona",
      "stateAbv": "AZ"
  },
  {
      "cityName": "Reno",
      "cityState": "Nevada",
      "stateAbv": "NV"
  }
]

const insertSampleCities = function() {
  console.log('insertSampleCities seeding function invoked! Check your database at capstone')
  City.create(lotsOfCities)
    .then(() => db.disconnect());
};

insertSampleCities();
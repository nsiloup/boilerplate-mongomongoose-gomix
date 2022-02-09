require('dotenv').config();
let mongoose = require("mongoose");
let log =console.log;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Create a Model --->>> CRUD Part I - CREATE
let { Schema } = mongoose;
let personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods : Array
})
let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  //Create and Save a Record of a Model
  let person1 = new Person({
    name:"amandine",
    age: 25,
    favoriteFoods: ["bla bla bla", "bli bli bli", "blo blo blo"]
  });
  person1.save((err, data)=>{
    err ? console.log(err) : done(null, data);
  });
};

//Create Many Records with model.create()
let arrayOfPeople = [
  {name:"jean", age:28, favoriteFoods:["a", "b", "c"]},
  {name:"John", age:20, favoriteFoods:["d", "e", "f"]},
  {name:"sami", age:30, favoriteFoods:["g", "h", "i"]},
];
let createManyPeople = (arrayOfPeople, done) =>{
  Person.create(arrayOfPeople, (err, data)=>{
    err ? console.log(err) : done(null, data);
  })
};

//Use model.find() to Search Your Database
let personName = "john";
let findPeopleByName = (personName, done) =>Person.find({name: personName}, (err, data)=>{err?console.log(err):done(null, data)})

//Use model.findOne() to Return a Single Matching Document from Your Database
let food = "bla bla bla"
let findOneByFood = (food, done) =>{
  Person.findOne({favoriteFoods:food}, (err, data)=>{
    err?console.log(err) : done(null, data);
  })
};

//Use model.findById() to Search Your Database By _id
let findPersonById = (personId, done)=>{
  Person.findById(personId, (err, data)=>{
    err?log(err):done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

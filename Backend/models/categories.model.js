const db = require('mongoose');

const categorySchema = new db.Schema({
  name: {
    type:String ,
    required:[true , "A categorty name of type 'String' is required"],
    unique:true
  }
}, {collection:'categories'})


module.exports = db.model('Categories', categorySchema);

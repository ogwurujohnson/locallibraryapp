const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

//Virtual for authors fullname
AuthorSchema
.virtual('name')
.get(()=>{
    return this.family_name+', '+ this.first_name;
});

//Virtual for authors uRL
AuthorSchema
.virtual('url')
.get(()=>{
    return '/catalog/author/' +this._id;
});
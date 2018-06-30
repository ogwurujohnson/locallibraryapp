const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookInstanceSchema = new Schema({
    book: {type: Schema.ObjectId, ref: 'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String,required: true, enum:['Available','Maintenance','Loaned','Reserved'], default:'Maintenance'},
    due_back: {type: Date, default: Date.now}
});

//Virtual for bookinstance url
BookInstanceSchema
.virtual('url')
.get(function(){
    return '/catalog/bookinstance/' +this._id;
});

//export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: String,
	birthdate: String
});

module.exports = mongoose.model('Item', itemSchema);
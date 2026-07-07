const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String, //URL
    caption: String
});

//Model
const PostModel = mongoose.model("Post", postSchema);
//post is the name of the collection in the database
module.exports = PostModel;
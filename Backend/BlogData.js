//Write missing codes here
const mongoose = require('mongoose');

const blogschema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const BlogData = mongoose.model('blogs',blogschema)
module.export=BlogData
//Write missing codes here

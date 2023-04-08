const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Auser',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 300
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    min: 0,
    default: 0
  }
});

const Post = mongoose.model('Apost', postSchema);

module.exports = Post;

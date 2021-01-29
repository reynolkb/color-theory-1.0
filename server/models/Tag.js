const mongoose = require('mongoose');

const { Schema } = mongoose;

const dateFormat = require('../utils/dateFormat');

const tagSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    taggedPalettes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Palette'
        }
    ]
  }
);


const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
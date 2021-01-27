const mongoose = require('mongoose');

const { Schema } = mongoose;

const paletteSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    primary: {
        type: String,
        required: true,
    },
    secondary: {
        type: String,
        required: true,
    },
    accent1: {
        type: String,
        required: true,
    },
    accent2: {
        type: String,
        required: true,
    },
    accent3: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    upvotes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    ],
    username: {
        type: String,
        required: true
    }
  },
  {
    toJSON: {
        virtuals: true
    }
  }
);

paletteSchema.virtual('upvoteCount').get(function() {
    return this.upvotes.length;
});

const Palette = mongoose.model('Palette', paletteSchema);

module.exports = Palette;
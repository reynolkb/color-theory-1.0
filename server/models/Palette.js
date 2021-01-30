const mongoose = require('mongoose');

const { Schema } = mongoose;

const dateFormat = require('../utils/dateFormat');

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
    createdAt: {
        type: Date,
        default: Date.now,
        // get: timestamp => dateFormat(timestamp)
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }
        
    ],
    upvotes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    ],
    saves: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    ],
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

paletteSchema.virtual('saveCount').get(function() {
    return this.saves.length;
});

const Palette = mongoose.model('Palette', paletteSchema);

module.exports = Palette;
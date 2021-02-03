const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationTierSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
  }
);


const DonationTier = mongoose.model('DonationTier', donationTierSchema);

module.exports = DonationTier;
const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    type: {
      type: String,
    },

    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    content: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', ListSchema);

const { Schema, model } = require('mongoose');

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    category: {
      type: String,
    },
    images: {
      type: [String], // <-- ARRAY for multiple image URLs
      default: [], // <-- Safe default: empty array
    },
    video: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const News = model('news', NewsSchema);

module.exports = News;

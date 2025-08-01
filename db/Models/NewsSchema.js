const { Schema, model } = require('mongoose');

// ✅ News schema is good
const NewsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String },
  category: { type: String },
  images: { type: [String], default: [] },
  video: { type: String },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = model('news', NewsSchema);

const express = require('express');
const multer = require('multer');
const uniqid = require('uniqid');

const router = express.Router();

const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${uniqid()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', upload.array('images', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No images uploaded' });
  }

  const urls = req.files.map(file => {
    return `${req.protocol}://${req.get('host')}/images/${file.filename}`;
  });

  return res.status(200).json({ urls });
});

module.exports = router;

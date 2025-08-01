const express = require('express');
const multer = require('multer');
const uniqid = require('uniqid');
const path = require('path');

const router = express.Router();

// Video storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/videos/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${uniqid()}-${file.originalname}`);
  },
});

// Accept only video formats
const fileFilter = (req, file, cb) => {
  const allowedTypes = /video\/mp4|video\/webm|video\/ogg|video\/quicktime/;
  if (allowedTypes.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only video files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

// POST /api/uploadVideo
router.post('/', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No video file uploaded' });
  }

  // Serve videos via /video route prefix in server.js
  const videoUrl = `http://localhost:8889/video/${req.file.filename}`;
  return res.status(200).json({ url: videoUrl });
});

module.exports = router;

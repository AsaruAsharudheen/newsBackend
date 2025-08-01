const express = require('express');

const {
  getNews,
  postNews,
  getNewsLatest,
  deleteProduct,
  getNewsById,
  updateNews,
} = require('../Controllers/NewsControllers');

const router = express.Router();

router.get('/', getNews);
router.get('/New', getNewsLatest);
router.post('/', postNews);
router.delete('/:id', deleteProduct);
router.get('/:id', getNewsById);
router.patch('/:id', updateNews);

module.exports = router;



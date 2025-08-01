const News = require('../db/Models/NewsSchema');

module.exports.getNews = async (req, res) => {
  try {
    const response = await News.find();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};
module.exports.getNewsLatest = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

module.exports.postNews = async (req, res) => {
  try {
    const { body } = req;
    const response = await News.create(body);
    res.status(200).json({ message: 'newsAdded SuccessFully', error: false });
  } catch (e) {
    res.status(500).json({ message: 'error' });
  }
};

module.exports.getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await News.findById(id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await News.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted successfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    await News.findByIdAndUpdate(id, body, { new: true });

    return res.status(200).json({ message: 'Updated Successfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

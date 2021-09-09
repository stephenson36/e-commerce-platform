const router = require('express').Router();
const { ProductTag } = require('../../models');

// CREATE a product tag
router.post('/', async (req, res) => {
  try {
    const productTagData = await ProductTag.create(req.body);
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product tag
router.delete('/:id', async (req, res) => {
  try {
    const productTagData = await ProductTag.destroy({
      where: { id: req.params.id }
    });
    if (!productTagData) {
      res.status(404).json({ message: 'No product tag with this id!' });
      return;
    }
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

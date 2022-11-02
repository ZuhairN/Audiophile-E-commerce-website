import express from 'express';
import Product from '../models/product.js';
import Review from '../models/review.js';
const router = express.Router({ mergeParams: true });

router.post('/', async (req, res) => {
    const { rating, body } = req.body;
    const newReview = new Review({ body, rating })
    const product = await Product.findById(req.params.productId)
    product.reviews.push(newReview);
    await newReview.save();
    await product.save();
    res.redirect(`http://localhost:3000/${product.category}/${product.productId}`);
})
router.route('/:reviewId')
    .delete(async (req, res) => {
        const product = await Product.findByIdAndUpdate(req.params.productId, { $pull: { reviews: req.params.reviewId } });
        await Review.findByIdAndDelete(req.params.reviewId)
        res.redirect(`http://localhost:3000/${product.category}/${product.productId}`)
    })

export default router;
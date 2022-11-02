import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import Product from './models/product.js';
import reviewsRouter from './controllers/reviews.js';
import methodOverride from 'method-override';

env.config();
const app = express();

mongoose.connect('mongodb://localhost:27017/Audiophile', () => console.log('MongoDB connected'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/:productId/reviews', reviewsRouter)

app.get('/api', async (req, res) => {
    const data = await Product.find().populate('reviews');
    res.send(data)
})














app.listen(process.env.PORT, () => {
    console.log('Start listening on', process.env.PORT)
})
import images from '../../public/images/category/images';
const { headphones, speakers, earphones } = images;
const data = {
    headphones: [
        {
            name: 'XX99 MARK II HEADPHONES',
            description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            img: headphones.XX99MARKII,
            isNew: true
        },
        {
            name: 'XX99 MARK I HEADPHONES',
            description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            img: headphones.XX99MARKI,
            isNew: false
        },
        {
            name: 'XX59 HEADPHONES',
            description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
            img: headphones.XX59,
            isNew: false
        },
    ],
    speakers: [
        {
            name: 'ZX9 SPEAKER',
            description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
            img: speakers.ZX9,
            isNew: true
        },
        {
            name: 'ZX7 SPEAKER',
            description: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
            img: speakers.ZX7,
            isNew: false
        }
    ],
    earphones: [
        {
            name: 'YX1 WIRELESS EARPHONES',
            description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
            img: earphones.YX1,
            isNew: true
        }
    ]
}

export default data;
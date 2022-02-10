const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/camground')

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!", err);
    })

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '61f279b94cd54c0fe0dcc1d8',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos cum blanditiis, et incidunt voluptatibus praesentium earum? Enim, eius rem? Dicta fugit iure blanditiis harum esse vitae rem placeat vero.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/nektdd0g3ima7t0fj5sw.jpg',
                    filename: 'YelpCamp/nektdd0g3ima7t0fj5sw',
                },
                {
                    url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/c6ef4fmpb0og73w5lmlw.jpg',
                    filename: 'YelpCamp/c6ef4fmpb0og73w5lmlw',
                },
                {
                    url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/w5fttpfwsa3nmxpzhiil.jpg',
                    filename: 'YelpCamp/w5fttpfwsa3nmxpzhiil',
                },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409508/YelpCamp/fqksbjgusvaeakxc8ua2.jpg',
                //     filename: 'YelpCamp/fqksbjgusvaeakxc8ua2',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/ycr272iwfjsvop661xbc.jpg',
                //     filename: 'YelpCamp/ycr272iwfjsvop661xbc',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/twnckg7v8npihw0k1dcp.jpg',
                //     filename: 'YelpCamp/twnckg7v8npihw0k1dcp',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/qgww21razhf8i0douckw.jpg',
                //     filename: 'YelpCamp/qgww21razhf8i0douckw',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/hwuenfn4g4ahophdi54w.jpg',
                //     filename: 'YelpCamp/hwuenfn4g4ahophdi54w',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/rvexmxxvwhuwnrg9wa8w.jpg',
                //     filename: 'YelpCamp/rvexmxxvwhuwnrg9wa8w',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/lpiaa0tx1o0jrecc8bt7.jpg',
                //     filename: 'YelpCamp/lpiaa0tx1o0jrecc8bt7',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/jcpguoc1bnu5psubjmby.jpg',
                //     filename: 'YelpCamp/jcpguoc1bnu5psubjmby',
                // },
                // {
                //     url: 'https://res.cloudinary.com/dkpcd90zc/image/upload/v1644409507/YelpCamp/vhyrj4nlyld1kcnxyfqc.jpg',
                //     filename: 'YelpCamp/vhyrj4nlyld1kcnxyfqc',
                // }
            ]
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});
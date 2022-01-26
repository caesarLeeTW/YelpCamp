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
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos cum blanditiis, et incidunt voluptatibus praesentium earum? Enim, eius rem? Dicta fugit iure blanditiis harum esse vitae rem placeat vero.',
            price
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});
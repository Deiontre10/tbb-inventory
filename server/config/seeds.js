const db = require('./connection');
const { User, Category, Product } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'SS6' },
        { name: 'SS10' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    await Product.insertMany([
        {
            name: 'Crystal AB',
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: 'Siam',
            quantity: 100,
            category: categories[1]._id
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();

});
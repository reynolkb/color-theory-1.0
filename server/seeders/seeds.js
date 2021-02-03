const { commerce } = require('faker');
const faker = require('faker');

const db = require('../config/connection');
const { Palette, User} = require('../models');
const Tag = require('../models/Tag');


db.once('open', async () => {
  await Palette.deleteMany({});
  await User.deleteMany({});
  await Tag.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 100; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create thoughts
  let createdPalettes = [];
  let name;
  let createdTag;
  for (let i = 0; i < 50; i += 1) {

    const title = faker.lorem.word();

    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const primary = faker.internet.color();
    const secondary = faker.internet.color();
    const accent1 = faker.internet.color();
    const accent2 = faker.internet.color();
    const accent3 = faker.internet.color();

    const createdAt = faker.date.between('2021-01-30', '2021-02-03' );

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];


    // const createdPalette = await Palette.create({ title, description, primary, secondary, accent1, accent2, accent3, username, createdAt, upvotes, saves });
    const createdPalette = await Palette.create({ title, description, primary, secondary, accent1, accent2, accent3, username, createdAt });
    
    // link tags
    if (i === 0 || i == 3 || i === 6 || i === 9 || i === 12 || i === 15 ||
        i === 20 || i === 25 || i === 28 || i ===34 || i === 40 || i === 43
        || i === 47 || i === 50) {
      name = faker.random.word();
      createdTag = await Tag.create({name});
      console.log(name);
    }
    await Tag.updateOne(
      {_id: createdTag._id},
      {$push: {taggedPalettes: createdPalette._id}}
    );
    await Palette.updateOne(
      {_id: createdPalette._id},
      {$push: {tags: createdTag._id}}
    );
   
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { myPalettes: createdPalette._id } }
    );

    createdPalettes.push(createdPalette);
  }

    // user favorite a palatte
     for (let i = 0; i < 100; i += 1) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const randomPaletteIndex = Math.floor(Math.random() * createdPalettes.length);

      const { _id: userId } = createdUsers.ops[randomUserIndex];
      const { _id: paletteId } = createdPalettes[randomPaletteIndex];

      await User.updateOne(
        {_id: userId},
        {$push: {favorites: paletteId}},
        {new: true}
      );

      await Palette.updateOne(
        {_id: paletteId},
        {$push: {saves: userId}},
        {new: true}
      )
     }
  
     for (let i = 0; i < 1200; i += 1) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const randomPaletteIndex = Math.floor(Math.random() * createdPalettes.length);

      const { _id: userId } = createdUsers.ops[randomUserIndex];
      const { _id: paletteId } = createdPalettes[randomPaletteIndex];

      await Palette.updateOne(
        {_id: paletteId},
        {$push: {upvotes: userId}},
        {new: true}
      )
     }

  console.log('all done!');
  process.exit(0);
});

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

  for (let i = 0; i < 50; i += 1) {
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
  for (let i = 0; i < 15; i += 1) {

    const title = faker.lorem.word();

    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const primary = faker.internet.color();
    const secondary = faker.internet.color();
    const accent1 = faker.internet.color();
    const accent2 = faker.internet.color();
    const accent3 = faker.internet.color();

    const createdAt = faker.date.between('2021-01-24', '2021-01-30' );

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];


    // const createdPalette = await Palette.create({ title, description, primary, secondary, accent1, accent2, accent3, username, createdAt, upvotes, saves });
    const createdPalette = await Palette.create({ title, description, primary, secondary, accent1, accent2, accent3, username, createdAt });
    
    // link tags
    if (i === 0 || i == 3 || i === 6 || i === 9 || i === 12 || i === 15) {
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

  // const userIdHistory = [];
  // const paletteIdHistory = [];
  // let historyFlag = true;
    // user favorite a palatte
     for (let i = 0; i < 150; i += 1) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const randomPaletteIndex = Math.floor(Math.random() * createdPalettes.length);

      const { _id: userId } = createdUsers.ops[randomUserIndex];
      const { _id: paletteId } = createdPalettes[randomPaletteIndex];

      // if(i !== 0){
      //   historyFlag = true;
      //   while(historyFlag)
      //   for(let j = 0; i <= userIdHistory.length; i++) {
      //     if (userIdHistory[j] === userId && paletteIdHistory[j] === paletteId){
      //       console.log("Been There!");          
      //       const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      //       const randomPaletteIndex = Math.floor(Math.random() * createdPalettes.length);
      //       const { _id: userId } = createdUsers.ops[randomUserIndex];
      //       const { _id: paletteId } = createdPalettes[randomPaletteIndex];
      //       historyFlag = true;
      //     } else {
      //       historyFlag = false;
      //     }
      //   }
      // }
      // userIdHistory.push(userId);
      // paletteIdHistory.push(paletteId);
      // console.log(userIdHistory);

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
  
      // while (friendId === userId) {
      //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      //   friendId = createdUsers.ops[randomUserIndex];
     }
  
     for (let i = 0; i < 150; i += 1) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const randomPaletteIndex = Math.floor(Math.random() * createdPalettes.length);

      const { _id: userId } = createdUsers.ops[randomUserIndex];
      const { _id: paletteId } = createdPalettes[randomPaletteIndex];

      await Palette.updateOne(
        {_id: paletteId},
        {$push: {upvotes: userId}},
        {new: true}
      )
  
      // while (friendId === userId) {
      //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      //   friendId = createdUsers.ops[randomUserIndex];
     }
      // await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
    // }

  // create reactions
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
  //   const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

  //   await Thought.updateOne(
  //     { _id: thoughtId },
  //     { $push: { reactions: { reactionBody, username } } },
  //     { runValidators: true }
  //   );
  // }

  console.log('all done!');
  process.exit(0);
});

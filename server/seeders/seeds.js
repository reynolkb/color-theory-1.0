const faker = require('faker');

const db = require('../config/connection');
const { Palette, User } = require('../models');

db.once('open', async () => {
  await Palette.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

  // create thoughts
  let createdPalettes = [];
  for (let i = 0; i < 100; i += 1) {
    const title = faker.lorem.word();

    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const primary = faker.internet.color();
    const secondary = faker.internet.color();
    const accent1 = faker.internet.color();
    const accent2 = faker.internet.color();
    const accent3 = faker.internet.color();

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    // const createdAt = faker.date.past();
    // const upvotes = faker.random.number();
    // const saves = faker.random.number();

    // const createdPalette = await Palette.create({ title, description, primary, secondary, accent1, accent2, accent3, username, createdAt, upvotes, saves });
    const createdPalette = await Palette.create({ title, description, primary, secondary, accent1, accent2, accent3, username });
    
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { myPalettes: createdPalette._id } }
    );

    createdPalettes.push(createdPalette);
  }

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

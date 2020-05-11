const Router = require('express').Router;
const User = require('../models/user');
const Friends = require('../models/friends');
const router = Router();

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.get('/me', async (req, res) => {
  const user = await User.findById(req.userId);
  res.send(user)
});

router.post('/:id/add', async (req, res) => {
  const currentUser = await User.findOne({_id: req.userId}).populate('friends', '-friends');

  const existingFriend = currentUser.friends.find(el =>  el.recipient["_id"].toString() === req.params.id);

  if(!existingFriend) {
    const docA = await Friends.findOneAndUpdate(
        { requester: req.userId, recipient: req.params.id },
        { $set: { status: 1 }},
        { upsert: true, new: true });

    const docB = await Friends.findOneAndUpdate(
        { recipient: req.userId, requester: req.params.id },
        { $set: { status: 2 }},
        { upsert: true, new: true }
    );

    await User.findOneAndUpdate(
        { _id:  req.userId },
        { $push: { friends: docA._id }}
    );

    await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { friends: docB._id }}
    );

    return res.send({message: 'Friends request sent'});
  }

  return res.send({message: 'User already in your friends list'});

});


module.exports = router;

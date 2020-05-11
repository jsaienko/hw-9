const Router = require('express').Router;
const User = require('../models/user');
const Friends = require('../models/friends');
const router = Router();

router.post('/:id/confirm', async (req, res) => {
    const user = await User.findById(req.userId).populate({ path: 'friends',
        populate: [{
            path: 'requester',
            populate: 'requester'
        },{
            path: 'recipient',
            populate: 'recipient'
        }],
    });
    await Friends.findOneAndUpdate(
        { requester: req.userId, recipient: req.params.id },
        { $set: { status: 3 }}
    );

    await Friends.findOneAndUpdate(
        { recipient: req.userId, requester: req.params.id },
        { $set: { status: 3 }}
    );

    res.send(user.friends)
});

router.post('/:id/reject', async (req, res) => {
    const user = await User.findById(req.userId).populate({ path: 'friends',
        populate: [{
            path: 'requester',
            populate: 'requester'
        },{
            path: 'recipient',
            populate: 'recipient'
        }],
    });

    const docA = await Friends.findOneAndRemove(
        { requester: req.params.id, recipient: req.userId }
    );

    const docB = await Friends.findOneAndRemove(
        { recipient: req.params.id, requester: req.userId }
    );

    await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: docA._id }}
    );

    await User.findOneAndUpdate(
        { _id: req.userId },
        { $pull: { friends: docB._id }}
    );

    res.send(user.friends)
});

router.get('/', async (req, res) => {
    const user = await User.findById(req.userId).populate({ path: 'friends',
        populate: [{
            path: 'requester',
            populate: 'requester'
        },{
            path: 'recipient',
            populate: 'recipient'
        }],
    });
    console.log(user.friends);
    res.send(user.friends)
});

module.exports = router;

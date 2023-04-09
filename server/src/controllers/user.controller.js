const User = require('../models/user.model');
const Post = require('../models/post.model');

// POST /users: Create a new user
const CreateNewUser= async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const user = new User({ name, email, bio });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET /users/{id}: Retrieve a user by id
 const GetUserById=async (req, res) => {
  try {
    const id=req.params.id
    if(id!="all"){
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send('User not found');
      }
     return res.status(200).send(user);
    }
    const allUsers=await User.find()
    return res.status(201).send(allUsers)

  } catch (error) {
    res.status(500).send(error.message);
  }
};

// PUT /users/{id}: Update a user's name or bio by id
const UpdateUser= async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, bio: req.body.bio },
      { new: true }
    );
    if (!user) {
      return res.status(404).send( 'User not found' );
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// DELETE /users/{id}: Delete a user by id
const DeleteUser= async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(201).send('User deleted successfully' );
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// GET /analytics/users: Retrieve the total number of users
const GetTotalUser = async (req, res) => {
    try {
      const users = await User.find();
      const count = users.length;
      res.send(`count ${count}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

// GET /analytics/users/top-active: Retrieve the top 5 most active users, based on the number of posts
const GetTopFive= async (req, res) => {
  try {
    const topUsers = await User.aggregate([
      { $lookup: { from: "aposts", localField: "_id", foreignField: "user_id", as: "posts" } },
      { $project: { _id: 1, name: 1, postCount: { $size: "$posts" } } },
      { $sort: { postCount: -1 } },
      { $limit: 5 }
    ]);
    res.send(topUsers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {CreateNewUser,DeleteUser,GetTopFive,GetTotalUser,GetUserById,UpdateUser}

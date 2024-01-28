import User from "../models/user.js";
import NodeCache from "node-cache";

const userCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const fetchUser = async (req, res) => {
  const { user } = req.body;

  try {
    let fetchedUser = userCache.get(user.email);
    if (!fetchedUser) {
      fetchedUser = await User.findOne({ email: user.email }).lean();
      if (fetchedUser) {
        userCache.set(user.email, fetchedUser);
      } else {
        // If user is not found, create a new user
        const newUser = new User(user);
        await newUser.save();
        fetchedUser = newUser.toObject(); // Convert Mongoose document to plain object
        userCache.set(user.email, fetchedUser);
      }
    }
    res.status(200).json(fetchedUser);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};

export { fetchUser };

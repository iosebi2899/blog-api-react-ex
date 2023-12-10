const Post = require("@models/Post");
const { Category } = require("@models/Category");

exports.createPost = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const category = await Category.findById(categoryId);
    if (!category)
      return res.status(404).send({ msg: "Specified category not found" });
    const post = await Post.create({ ...req.body, category });
    return res.send(post);
  } catch (_) {
    return res.status(400).send({ msg: "Opps.. Something went wrong" });
  }
};

exports.createPostWithContent = async (req, res) => {
  try {
    const { title, description, category, timestamp } = req.body;
    if (!category)
      return res.status(404).send({ msg: "Specified category not found" });

    if (!title || !description || !timestamp) {
      return res.status(400).send({ msg: "Please fill all fields" });
    }

    const post = await Post.create({ ...req.body, category });
    return res.send(post);
  } catch (_) {
    return res.status(400).send({ msg: "Opps.. Something went wrong" });
  }
};

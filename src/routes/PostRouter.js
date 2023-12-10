const router = require("express").Router();
const PostController = require("@controllers/PostController");
// const createPostMiddleWare = require("../middleware/createPost");
const verifyAuthToken = require("@middlewares/security/verifyAuthToken");

router.route("/").post([verifyAuthToken], PostController.createPost);

// მოცემული დავალებისთვის
router
  .route("/create")
  .post([verifyAuthToken], PostController.createPostWithContent);

module.exports = router;

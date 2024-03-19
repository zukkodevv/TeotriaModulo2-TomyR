const { Router } = require("express");
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

module.exports = router;

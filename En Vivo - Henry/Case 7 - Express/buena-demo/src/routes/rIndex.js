const { Router } = require("express");
const bienvenida = require("../controllers/cIndex");
const userRoute = require("./userRoute");
const productsRouter = require("./productsRouter");

const router = Router();

router.get("/", bienvenida);

router.use("/users", userRoute);
router.use("/products", productsRouter);

module.exports = router;

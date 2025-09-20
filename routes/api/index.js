import { Router } from "express";
import pizzaRoutes from "./pizza-routes.js";
import commentRoutes from "./comment-routes.js";
const router = Router();
// add prefix of '/pizzas' to routes created in 'pizza-routes.js'
router.use("/comments", commentRoutes);
router.use("/pizzas", pizzaRoutes);
export default router;

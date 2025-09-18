import { Router } from "express";
import pizzaRoutes from "./pizza-routes.js";
const router = Router();
// add prefix of '/pizzas' to routes created in 'pizza-routes.js'
router.use("/pizzas", pizzaRoutes);
export default router;

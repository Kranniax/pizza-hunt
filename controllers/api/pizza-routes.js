import { Router } from "express";
import {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} from "../pizza-controller.js";

const router = Router();
// Set up GET all and POST at /api/pizzas
router.route("/").get(getAllPizza).post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

export default router;

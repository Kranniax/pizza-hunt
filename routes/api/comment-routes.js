import { Router } from "express";
import {
  addComment,
  removeComment,
} from "../../controllers/comment-controller.js";

const router = Router();

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").delete(removeComment);

export default router;

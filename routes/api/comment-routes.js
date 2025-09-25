import { Router } from "express";
import {
  addComment,
  removeComment,
  addReply,
  removeReply
} from "../../controllers/comment-controller.js";

const router = Router();

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// delete a reply from a comment
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

export default router;

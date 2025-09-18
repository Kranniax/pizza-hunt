import { Router } from "express";
// Import all of the api routes
import apiRoutes from "../controllers/api/index.js";
import htmlRoutes from "./html/html-routes.js";
const router = Router();



// add prefix of '/api' to all of the api routes imported from the '/api' directory.
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

export default router;

import { Router } from 'express';
import { join } from 'path';
import path from "path";
import { fileURLToPath } from "url";
// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../../public/pizza-list.html'));
});

router.get('/add-pizza', (req, res) => {
  res.sendFile(join(__dirname, '../../public/add-pizza.html'));
});

router.get('/pizza', (req, res) => {
  res.sendFile(join(__dirname, '../../public/pizza.html'));
});

export default router;

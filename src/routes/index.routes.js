import { Router } from "express";
import {ping} from '../controllers/index.controllers.js';

//ruta
const router = Router();

router.get('/ping', ping);

export default router;
// Path: src/routes/index.routes.js
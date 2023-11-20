import { Router } from "express";
import { getToys, createToys, updateToys, deleteToys } from '../controllers/toys.controllers.js';

//grupo de rutas
const router = Router();

router.get('/toys', getToys);

router.post('/toys', createToys);

router.put('/toys', updateToys);

router.delete('/toys', deleteToys);

export default router;
// Path: src/routes/toys.routes.js
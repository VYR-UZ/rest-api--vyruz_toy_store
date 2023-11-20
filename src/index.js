import express from 'express';
import toysRoutes from './routes/toys.routes.js';
import indexRoutes from './routes/index.routes.js';

//Ejecutar express
const app = express();

//endpoint
app.use(toysRoutes);
app.use(indexRoutes);

app.listen(5000, () => {
    console.log("server running on port 5000")
})
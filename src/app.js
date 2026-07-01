import express from 'express';
import productRoutes from './routes/product.routes.js';

const app = express();

// MIDDLEWARE PARA ENTENDER JSON
app.use(express.json());

// RUTAS BASE
app.use('/api/products', productRoutes);

// RUTA SI ENTRA UNA URL QUE NO EXISTE, CONTESTA
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;
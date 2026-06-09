import express from 'express';
import productRoutes from './routes/product.routes.js';

const app = express();

// Middleware para entender formato JSON
app.use(express.json());

// Rutas base
app.use('/api/products', productRoutes);

// Ruta por si entran a una URL que no existe
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;
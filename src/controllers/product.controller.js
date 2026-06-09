
let products = [
  { id: 1, name: 'Teclado Mecánico', price: 80 },
  { id: 2, name: 'Ratón Gamer', price: 45 }
];

// OBTENER TODOS LOS PRODUCTOS DEL ARREGLO
export const getProducts = (req, res) => {
  res.status(200).json(products);
};

// OBTENER UN PRODUCTO POR ID
export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.status(200).json(product);
};

// CREAR UN NUEVO PRODUCTO
export const createProduct = (req, res) => {
  const { name, price } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ message: 'Nombre y precio son requeridos' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};
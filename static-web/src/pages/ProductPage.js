import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Classic T-Shirt', image: '/images/men-tshirt.jpg', description: 'A comfortable and versatile t-shirt for everyday wear.', price: 19.99 },
  { id: 2, name: 'Slim Fit Jeans', image: '/images/men-jeans.jpg', description: 'Stylish slim fit jeans that look great with any outfit.', price: 49.99 },
  { id: 3, name: 'Formal Shirt', image: '/images/men-formal-shirt.jpg', description: 'A crisp formal shirt perfect for business or special occasions.', price: 39.99 },
  { id: 4, name: 'Casual Blazer', image: '/images/men-blazer.jpg', description: 'A smart-casual blazer to elevate your look.', price: 79.99 },
  { id: 5, name: 'Floral Dress', image: '/images/women-dress.jpg', description: 'A beautiful floral dress for a fresh and feminine look.', price: 59.99 },
  { id: 6, name: 'Skinny Jeans', image: '/images/women-jeans.jpg', description: 'Flattering skinny jeans that hug your curves.', price: 54.99 },
  { id: 7, name: 'Blouse', image: '/images/women-blouse.jpg', description: 'A versatile blouse that can be dressed up or down.', price: 34.99 },
  { id: 8, name: 'Maxi Skirt', image: '/images/women-skirt.jpg', description: 'A flowing maxi skirt for a bohemian-inspired look.', price: 44.99 },
  { id: 9, name: 'Graphic T-Shirt', image: '/images/boys-tshirt.jpg', description: 'A fun graphic tee for boys who love to express themselves.', price: 14.99 },
  { id: 10, name: 'Cargo Shorts', image: '/images/boys-shorts.jpg', description: 'Durable cargo shorts perfect for active boys.', price: 24.99 },
  { id: 11, name: 'Hoodie', image: '/images/boys-hoodie.jpg', description: 'A cozy hoodie for chilly days.', price: 29.99 },
  { id: 12, name: 'School Uniform', image: '/images/boys-uniform.jpg', description: 'A complete school uniform set for boys.', price: 69.99 },
  { id: 13, name: 'Floral Dress', image: '/images/girls-dress.jpg', description: 'A pretty floral dress for special occasions.', price: 39.99 },
  { id: 14, name: 'Leggings', image: '/images/girls-leggings.jpg', description: 'Comfortable leggings for active girls.', price: 19.99 },
  { id: 15, name: 'Denim Jacket', image: '/images/girls-jacket.jpg', description: 'A stylish denim jacket to complete any outfit.', price: 34.99 },
  { id: 16, name: 'Tutu Skirt', image: '/images/girls-skirt.jpg', description: 'A fun and frilly tutu skirt for little dancers.', price: 24.99 },
];

const ProductPage = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = !isNaN(productId) ? products.find((p) => p.id === productId) : null;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

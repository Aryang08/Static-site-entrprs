import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = {
  men: [
    { id: 1, name: 'Classic T-Shirt', image: '/images/men-tshirt.jpg' },
    { id: 2, name: 'Slim Fit Jeans', image: '/images/men-jeans.jpg' },
    { id: 3, name: 'Formal Shirt', image: '/images/men-formal-shirt.jpg' },
    { id: 4, name: 'Casual Blazer', image: '/images/men-blazer.jpg' },
  ],
  women: [
    { id: 5, name: 'Floral Dress', image: '/images/women-dress.jpg' },
    { id: 6, name: 'Skinny Jeans', image: '/images/women-jeans.jpg' },
    { id: 7, name: 'Blouse', image: '/images/women-blouse.jpg' },
    { id: 8, name: 'Maxi Skirt', image: '/images/women-skirt.jpg' },
  ],
  boys: [
    { id: 9, name: 'Graphic T-Shirt', image: '/images/boys-tshirt.jpg' },
    { id: 10, name: 'Cargo Shorts', image: '/images/boys-shorts.jpg' },
    { id: 11, name: 'Hoodie', image: '/images/boys-hoodie.jpg' },
    { id: 12, name: 'School Uniform', image: '/images/boys-uniform.jpg' },
  ],
  girls: [
    { id: 13, name: 'Floral Dress', image: '/images/girls-dress.jpg' },
    { id: 14, name: 'Leggings', image: '/images/girls-leggings.jpg' },
    { id: 15, name: 'Denim Jacket', image: '/images/girls-jacket.jpg' },
    { id: 16, name: 'Tutu Skirt', image: '/images/girls-skirt.jpg' },
  ],
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Men';
  const categoryProducts = products[category || 'men'];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center capitalize">{categoryTitle} Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <h2 className="text-xl font-semibold p-4 text-center">{product.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available in this category</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

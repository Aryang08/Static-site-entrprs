import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Men', image: '/images/men.jpg' },
  { name: 'Women', image: '/images/women.jpg' },
  { name: 'Boys', image: '/images/boys.jpg' },
  { name: 'Girls', image: '/images/girls.jpg' },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome to Ash Garments</h1>
      <p className="text-lg mb-8 text-center text-gray-600">Discover the latest fashion trends for the whole family</p>
      
      {/* Photo Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            to={`/category/${category.name.toLowerCase()}`} 
            className="block transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-64 object-cover" 
              />
              <h2 className="text-xl font-semibold p-4 text-center text-gray-800">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Separator Line */}
      <hr className="my-8 border-t-2 border-gray-300" />
      
      {/* Store Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Visit Our Store</h2>
        <p className="mb-4 text-gray-600">Come and explore our wide range of clothing at our physical store:</p>
        <address className="not-italic mb-4 text-gray-700">
          Ash Garments<br />
          123 Fashion Street<br />
          Chhatarpur, Madhya Pradesh 471001<br />
          India
        </address>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57872.91647587787!2d79.54830077832036!3d24.906090699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982b7f3b9c1b4b7%3A0x1cf8f645b6fe1fef!2sChhatarpur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1638360000000!5m2!1sen!2sus"
            width="600"
            height="450"
            title="map-location"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;

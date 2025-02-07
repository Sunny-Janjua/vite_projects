import Image from "next/image";

const products = [
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
    },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
    },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
    },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
    },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Shooting Stars',
    price: '$21.15',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'Neptune',
    price: '$12.00',
    image: '/product-1.jpg',
  },
  {
    category: 'CATEGORY',
    name: 'The 400 Blows',
    price: '$18.40',
    image: '/product-1.jpg',
  },
];

export default function Shop() {
  return (
    <section className="text-gray-600 body-font py-12 bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Explore Our Products
        </h1>
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden shadow-lg transform transition-all hover:scale-105">
                <Image
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest uppercase title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-semibold mb-2">
                  {product.name}
                </h2>
                <p className="mt-1 text-lg font-bold text-gray-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

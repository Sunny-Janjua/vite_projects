import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    title: " ⭐⭐⭐",
    description: "Description for feature 1",
    link: "#",
  },
  {
    title: " ⭐⭐⭐",
    description: "Description for feature 2",
    link: "#",
  },
  {
    title: " ⭐⭐⭐",
    description: "Description for feature 3",
    link: "#",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-center">
        {/* Background Image with layout fill */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-serpstat-177219-572056.jpg"
            alt="Flower Shop"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content with Animation */}
        <div className="max-w-3xl mx-auto px-4 space-y-6 animate-fade-in-up">
          <h4 className="text-lg font-semibold text-orange-600 uppercase animate-slide-up">
            Welcome to CW SUNNY ❤️❤️
          </h4>
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl animate-slide-up">
            Let's Make Beautiful Flowers a Part of Your Life.
          </h1>
          <p className="text-lg text-orange-700 sm:text-xl animate-slide-up">
            Explore a vibrant tapestry of blooms and arrangements that add
            color, fragrance, and elegance to your life. Discover the perfect
            floral expression for every moment and occasion.
          </p>
          <Link href="#" passHref>
            <button className="px-6 py-3 bg-orange-600 text-white text-lg font-medium rounded-md hover:bg-orange-700 transition-colors animate-bounce-in">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Product Cards Section */}
      <section className="bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Raclette Blueberry Nextious Level",
              "Ennui Snackwave Thundercats",
              "Selvage Poke Waistcoat Godard",
              "Product Title 4",
              "Product Title 5",
              "Product Title 6",
            ].map((product, index) => (
              <div key={index} className="group p-4">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-105 hover:shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {product}
                  </h1>
                  <p className="text-orange-600 leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="bg-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
              <Image
                alt="ecommerce"
                src="/pexels-serpstat-177219-572056.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-orange-600 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <p className="text-orange-600 leading-relaxed mb-3">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha...
              </p>
              <div className="flex">
                <Link href="#" passHref>
                  <button className="flex ml-auto text-white bg-orange-600 hover:bg-orange-900 border-0 py-2 px-6 focus:outline-none rounded">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-5 py-12 mx-auto text-center">
          <h2 className="text-orange-600 p-3">NEW ARRIVAL</h2>
          <h1 className="text-5xl font-bold text-gray-900 p-2">
            Discover the Latest Additions at Your Top Choice Flower Shop
          </h1>
          <p className="text-orange-600 p-3">
            Share some details here. This is Flexible section where you can
            share anything you want.
          </p>
        </div>
      </section>

      {/* Sale Product Section */}
      <section className="flex flex-wrap gap-10 p-10 bg-white">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  SALE
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-orange-600 text-lg font-medium mb-2">
                  Product Title
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae ante vel eros fermentum faucibus sit amet euismod lorem.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold text-lg">
                    $19.99
                  </span>
                  <button className="bg-orange-600 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>
      <section className="bg-slate-100 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
              <Image
                alt="ecommerce"
                src="/pexels-serpstat-177219-572056.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-orange-600 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <p className="text-orange-600 leading-relaxed mb-3">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha...
              </p>
              <div className="flex">
                <Link href="#" passHref>
                  <button className="flex ml-auto text-white bg-orange-600 hover:bg-orange-900 border-0 py-2 px-6 focus:outline-none rounded">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-5 py-12 mx-auto text-center">
          <h2 className="text-orange-600 p-3">NEW ARRIVAL</h2>
          <h1 className="text-5xl font-bold text-gray-900 p-2">
            Discover the Latest Additions at Your Top Choice Flower Shop
          </h1>
          <p className="text-orange-600 p-3">
            Share some details here. This is Flexible section where you can
            share anything you want.
          </p>
        </div>
      </section>

      {/* Sale Product Section */}
      <section className="flex flex-wrap gap-10 p-10 bg-white">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  className="w-full h-[50vh]"
                  src="/cta.jpg"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  SALE
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-orange-600 text-lg font-medium mb-2">
                  Product Title
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae ante vel eros fermentum faucibus sit amet euismod lorem.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold text-lg">
                    $19.99
                  </span>
                  <button className="bg-orange-600 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-5 py-12 mx-auto text-center">
          <h2 className="text-orange-600 p-3">TESTIMONAIL</h2>
          <h1 className="text-5xl font-bold text-gray-900 p-2">
            Hear From Our Happy Customers
          </h1>
          <p className="text-orange-600 p-3">
            Share some details here. This is Flexible section where you can
            share anything you want.
          </p>
        </div>
      </section>

      <section className="bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-orange-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                  <Link href={feature.link} passHref>
                    <p className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <FiArrowRight className="w-4 h-4 ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-screen bg-orange-950 flex items-center justify-center px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 max-w-7xl w-full flex-wrap">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              alt="A vibrant floral arrangement on a special offer"
              src="/offer.jpg"
              height={500}
              width={500}
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h3
              id="cta-heading"
              className="text-2xl text-orange-500 font-semibold mb-3"
            >
              Limited Time Offer 
            </h3>
            <h1
              id="cta-description"
              className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-bold leading-snug mb-6"
            >
              Explore Our Exquisite Floral Collections <br /> & Shop the Perfect
              Blooms
            </h1>
            <button
              className="bg-orange-600 hover:bg-orange-800 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
              aria-label="Click to explore floral collections and shop now"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

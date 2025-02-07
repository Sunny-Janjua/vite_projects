import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    description:
      "A creative frontend developer who loves to bring designs to life with React and Next.js.",
    image: "/product-1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    description:
      "Specializing in building robust APIs and working with Node.js, Express, and PostgreSQL.",
    image: "/product-1.jpg",
  },
  {
    name: "Alice Johnson",
    role: "UI/UX Designer",
    description:
      "Creating user-centered designs that are both beautiful and functional.",
    image: "/product-1.jpg",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-serpstat-177219-572056.jpg"
            alt="Flower Shop"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 space-y-6 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl animate-slide-up">
            Let's Make Beautiful Flowers a Part of Your Life.
          </h1>
          <p className="text-lg text-orange-500 sm:text-xl animate-slide-up">
            Explore a vibrant tapestry of blooms and arrangements that add
            color, fragrance, and elegance to your life. Discover the perfect
            floral expression for every moment and occasion.
          </p>
        </div>
      </div>

      {/* Product Section */}
      <section
        id="products"
        className="text-gray-600 body-font overflow-hidden bg-gray-50"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <Image
              alt="ecommerce"
              src="/product-1.jpg"
              height={500}
              width={500}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-indigo-500 tracking-widest uppercase">
                Bloom Boutique
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-semibold mb-4">
                The Catcher in the Rye
              </h1>
              <p className="leading-relaxed text-gray-700 mb-6">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn.
              </p>
              <div className="flex items-center mb-6">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="ml-auto bg-indigo-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none transition-all duration-300">
                  Add to Cart
                </button>
              </div>
              <p className="text-sm text-gray-500 italic">
                "Bring beauty and elegance to every occasion."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-orange-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Achievements</h2>
            <p className="text-gray-300">
              Proud milestones we have achieved together 🌟
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-orange-400">500k+</h1>
              <p className="text-lg mt-2">Happy Customers</p>
              <hr className="border-orange-600 my-4 w-2/3 mx-auto" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-orange-400">250k+</h1>
              <p className="text-lg mt-2">Products Sold</p>
              <hr className="border-orange-600 my-4 w-2/3 mx-auto" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-orange-400">1M+</h1>
              <p className="text-lg mt-2">Website Visits</p>
              <hr className="border-orange-600 my-4 w-2/3 mx-auto" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-orange-400">50+</h1>
              <p className="text-lg mt-2">Awards Won</p>
              <hr className="border-orange-600 my-4 w-2/3 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-gray-600 body-font py-24">
        <div className="container px-5 mx-auto text-center">
          <div className="flex flex-col mb-12">
            <h1 className="text-5xl title-font text-orange-600 font-bold mb-2">
              Meet Our Team
            </h1>
            <p className="text-base leading-relaxed text-gray-700 mb-10">
              Our talented team works together to create exceptional digital
              solutions.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-6">
                <div className="rounded-lg h-64 overflow-hidden mb-4 group hover:scale-105 transition-transform duration-300 ease-in-out">
                  <Image
                    alt={member.name}
                    className="object-cover object-center h-full w-full"
                    src={member.image}
                    height={250}
                    width={250}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900">
                  {member.name}
                </h2>
                <p className="text-base leading-relaxed mt-2">{member.role}</p>
                <p className="text-base leading-relaxed mt-2">
                  {member.description}
                </p>
                <Link href="#">
                  <h1 className="text-indigo-500 inline-flex items-center mt-3">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </h1>
                </Link>
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

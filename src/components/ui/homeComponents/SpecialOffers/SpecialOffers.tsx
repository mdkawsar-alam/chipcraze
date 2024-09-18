import { specialOffers } from "@/lib/variable";
import Image from "next/image";
import Link from "next/link";

const SpecialOffers: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={offer.imageUrl}
                alt={offer.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-lg font-semibold text-red-500">
                  {offer.discount}% Discount
                </p>
                <Link
                  href={offer.link}
                  className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

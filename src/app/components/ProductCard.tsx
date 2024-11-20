import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-200 text-red-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-red-700">
          Uzma&apos;s Collection
        </h1>
      
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-4xl text-red-900">
          Ladies Clothing Brand
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 w-full max-w-screen-xl">
        {/* Card 1 */}
        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center hover:scale-110 transition-all hover:shadow-md hover:shadow-red-950 duration-200 p-10">
            <Image src="/c7.jpg" alt="p1 " width={400} height={400} />
          </div>
          <p className="text-center pt-4 font-bold text-orange-200">
            PKR-5,000
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-700 text-orange-200 rounded-md">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center hover:scale-110 transition-all hover:shadow-md hover:shadow-red-950 duration-200 p-10">
            <Image src="/c4.jpg" alt="p1" width={400} height={400} />
          </div>
          <p className="text-center pt-4 font-bold text-orange-200">
            PKR-5,000
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-700 text-orange-200 rounded-md">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center hover:scale-110 transition-all hover:shadow-md hover:shadow-red-950 duration-200 p-10">
            <Image src="/c3.jpg" alt="p1" width={400} height={400} />
          </div>
          <p className="text-center pt-4 font-bold text-orange-200">
            PKR-5,000
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-700 text-orange-200 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

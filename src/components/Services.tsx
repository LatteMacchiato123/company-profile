import Image from "next/image";

export function Services() {
  return (
    <div className="bg-base-100 text-base-content p-10">
      <div className="max-w-screen-xl mx-auto text-center p-10">
        <h2 className="text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-neutral via-accent to-base-content text-transparent bg-clip-text text-left">
          OUR SERVICES
        </h2>
        <hr className="border-primary border-t-2 w-1/3 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <figure>
              <Image
                src="/assets/laundry-image.jpg"
                alt="Laundry & Dry Cleaning"
                width={500}
                height={400}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-2 justify-center">
                Laundry & Dry Cleaning
              </h3>
              <hr className="border-primary border-t-2 w-2/3 mx-auto" />
              <p className="text-lg text-base-content ">
                Professional laundry and dry cleaning services to keep your
                clothes fresh and spotless. We ensure the highest quality care
                for all fabrics.
              </p>
            </div>
          </div>

          {/* Repeat the same hover effect for the other services */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <figure>
              <Image
                src="/assets/ironing-image.jpg"
                alt="Ironing Service"
                width={500}
                height={400}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-2 justify-center">
                Ironing Service
              </h3>
              <hr className="border-primary border-t-2 w-2/3 mx-auto" />
              <p className="text-lg text-base-content ">
                Perfectly pressed clothes with our ironing service, giving your
                wardrobe a crisp and polished look every time.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <figure>
              <Image
                src="/assets/pickup-image.jpg"
                alt="Pickup & Delivery"
                width={500}
                height={400}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-2 justify-center">
                Pickup & Delivery
              </h3>
              <hr className="border-primary border-t-2 w-2/3 mx-auto" />
              <p className="text-lg text-base-content">
                Convenient pickup and delivery services that fit your schedule,
                making laundry day hassle-free and easy.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <figure>
              <Image
                src="/assets/carpet-cleaning-image.jpg"
                alt="Carpet Cleaning"
                width={500}
                height={400}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-2 justify-center">
                Carpet Cleaning
              </h3>

              <hr className="border-primary border-t-2 w-2/3 mx-auto " />
              <p className="text-lg text-base-content ">
                Specialized carpet cleaning services to remove stains, dirt, and
                allergens, restoring the beauty of your rugs and carpets.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <figure>
              <Image
                src="/assets/alterations-image.jpg"
                alt="Alterations & Repairs"
                width={500}
                height={400}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-2 justify-center">
                Alterations & Repairs
              </h3>
              <hr className="border-primary border-t-2 w-2/3 mx-auto" />
              <p className="text-lg text-base-content ">
                Expert tailoring and repair services to ensure your clothes fit
                perfectly and look their best.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <figure>
              <Image
                src="/assets/curtain-cleaning-image.jpg"
                alt="Curtain Cleaning"
                width={500}
                height={400}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-2 justify-center">
                Curtain Cleaning
              </h3>
              <hr className="border-primary border-t-2 w-2/3 mx-auto" />
              <p className="text-lg text-base-content ">
                Comprehensive curtain cleaning services to maintain the
                freshness and longevity of your window coverings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

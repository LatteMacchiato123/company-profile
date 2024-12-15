import Image from "next/image";

export function OurTeams() {
  return (
    <div className="max-w-screen-xl mx-auto text-center p-10">
      <h2 className="text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-neutral via-accent to-base-content text-transparent bg-clip-text text-left">
        OUR TEAM
      </h2>
      <hr className="border-primary border-t-2 w-1/3  mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Team Member 1 */}
        <div className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <div className="card-body">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/team/john-smith.jpg"
                alt="John Smith"
                width={108}
                height={108}
                className="rounded-full shadow-md"
              />
              <div className="text-left ml-4">
                <h3 className="text-2xl font-semibold">John Smith</h3>
                <p className="text-lg text-gray-600">CEO & Founder</p>
              </div>
            </div>
            <p className="text-lg text-left leading-relaxed">
              John has over 20 years of experience in the laundry industry and
              is passionate about delivering the best service to our customers.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <div className="card-body">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/team/susan-jones.jpg"
                alt="Susan Jones"
                width={108}
                height={108}
                className="rounded-full shadow-md"
              />
              <div className="text-left ml-4">
                <h3 className="text-2xl font-semibold">Susan Jones</h3>
                <p className="text-lg text-gray-600">Operations Manager</p>
              </div>
            </div>
            <p className="text-lg text-left leading-relaxed">
              Susan ensures that all our operations run smoothly and
              efficiently, maintaining the high standards we are known for.
            </p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <div className="card-body">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/team/mark-wilson.jpg"
                alt="Mark Wilson"
                width={108}
                height={108}
                className="rounded-full shadow-md"
              />
              <div className="text-left ml-4">
                <h3 className="text-2xl font-semibold">Mark Wilson</h3>
                <p className="text-lg text-gray-600">Customer Support Lead</p>
              </div>
            </div>
            <p className="text-lg text-left leading-relaxed">
              Mark leads our customer support team, ensuring that all your
              queries and concerns are addressed promptly and effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

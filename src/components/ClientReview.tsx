import Image from "next/image";
import { FaStar } from "react-icons/fa";

export function ClientReview() {
  const reviews = [
    {
      name: "John Doe",
      image: "/avatars/john-doe.png",
      text: "Spaclean has been a game-changer for me. The convenience of their service and the quality of cleaning is unmatched. Highly recommend!",
      stars: 5,
    },
    {
      name: "Jane Smith",
      image: "/avatars/jane-smith.png",
      text: "I love the ease of scheduling pickups and deliveries through their app. The team is always professional and my clothes come back spotless.",
      stars: 5,
    },
    {
      name: "Michael Lee",
      image: "/avatars/michael-lee.png",
      text: "The best laundry delivery service in Jakarta! Spaclean always exceeds my expectations with their attention to detail and customer service.",
      stars: 5,
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto text-center py-28 px-4 mt-32">
      <h2 className="text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-neutral via-accent to-base-content text-transparent bg-clip-text text-left">
        CLIENTS REVIEW
      </h2>
      <hr className="border-primary border-t-2 w-1/3  mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="card bg-base-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden"
          >
            <div className="card-body p-6">
              <div className="flex items-center mb-6">
                <Image
                  src={review.image}
                  alt={`${review.name}'s profile picture`}
                  width={72}
                  height={72}
                  className="rounded-full mr-4 border-2"
                />
                <h3 className="text-2xl font-semibold text-left text-base-content">
                  {review.name}
                </h3>
              </div>
              <div className="rating rating-lg flex justify-center mb-4">
                {Array(review.stars)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      size={24}
                      className="text-yellow-500 mx-1"
                    />
                  ))}
              </div>
              <p className="text-lg text-left text-base-content leading-relaxed">
              &quot;{review.text}&quot;
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

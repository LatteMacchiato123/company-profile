

export function FindUs() {
  return (
    <div className="max-w-screen-xl mx-auto text-center p-10">
      <h2 className="text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-neutral via-accent to-base-content text-transparent bg-clip-text text-left">
        FIND US
      </h2>
      <hr className="border-primary border-t-2 w-1/3  mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Map Section */}
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126340.48609574857!2d106.68942997338992!3d-6.229728144349459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e2631c3f19%3A0x5fdb7ff69dc5f39!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1682378967892!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0"
            title="Google Maps Location"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="bg-base-100  p-6 rounded-lg text-left text-base-content">
          <h3 className="text-3xl font-semibold mb-4">Our Location</h3>
          <hr className="border-gray-300 border-t-2 w-1/4 mb-6" />
          <p className="text-lg leading-relaxed  mb-4">
            <span className="font-bold">Address:</span> Jalan Sudirman, Jakarta, Indonesia
          </p>
          <p className="text-lg leading-relaxe mb-4">
            <span className="font-bold">Phone:</span> +62 (81) 2345-678
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <span className="font-bold">Email:</span> contact@spacleaning.com
          </p>
          <p className="text-lg leading-relaxed ">
            <span className="font-bold">Working Hours:</span> Mon - Fri, 9 AM - 5 PM
          </p>
        </div>
      </div>
    </div>
  );
}

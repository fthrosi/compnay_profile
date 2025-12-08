"use client";
import Image from "next/image";

export default function InsightsAndPartners() {
  // ==== DATA TESTIMONIAL ====
  const testimonials = [
    {
      rating: "5/5",
      text: "We were impressed by Talenta Digital Solution’s attention to detail and responsiveness throughout the project. The digital product they built has received positive feedback from our users.",
      name: "Jane Cooper",
      avatar: "/images/jane.png",
    },
    {
      rating: "4.9/5",
      text: "Talenta Digital Solution brought our vision to life with professionalism and speed. Their support made the whole development process easy and effective.",
      name: "Cody Fisher",
      avatar: "/images/mansuit.png",
    },
    {
      rating: "4.8/5",
      text: "Talenta Digital Solution delivered beyond what we expected. Their team combined technical expertise with creativity, and we are very happy with the outcome.",
      name: "Wade Warren",
      avatar: "/images/user.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div>
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            {/* Kiri */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0044CC] leading-tight mb-4">
                Trusted by Our <br /> Partners
              </h2>
              <p className="text-gray-600 max-w-md">
                Read the experiences of our distinguished clients who entrusted
                Talenta Digital Solution to deliver innovative and impactful
                digital solutions.
              </p>
            </div>

            {/* Card Utama */}
            <div className="bg-[#E8F0FF] p-8 rounded-2xl shadow-sm relative overflow-hidden">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#0044CC"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l-5.197 3.066 1.393-5.81L3 9.684l5.898-.509L12 3.75l3.102 5.425L21 9.684l-5.196 4.822 1.393 5.81L12 17.25z"
                  />
                </svg>
                <span className="font-semibold text-black">
                  {testimonials[0].rating}
                </span>
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-14">{testimonials[0].text}</p>

              {/* Name */}
              <span className="font-medium text-gray-800">
                {testimonials[0].name}
              </span>

              {/* Foto Profil */}
              <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full overflow-hidden shadow-md">
                <Image
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 right-6 text-[#0044CC]/10 text-8xl">
                &rdquo;
              </div>
            </div>
          </div>

          {/* Dua card di bawah */}
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {testimonials.slice(1).map((item, index) => (
              <div
                key={index}
                className="bg-[#E8F0FF] p-8 rounded-2xl shadow-sm relative overflow-hidden"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0044CC"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.25l-5.197 3.066 1.393-5.81L3 9.684l5.898-.509L12 3.75l3.102 5.425L21 9.684l-5.196 4.822 1.393 5.81L12 17.25z"
                    />
                  </svg>
                  <span className="font-semibold text-black">
                    {item.rating}
                  </span>
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-14">{item.text}</p>

                {/* Name */}
                <span className="font-medium text-gray-800">{item.name}</span>

                {/* Foto Profil */}
                <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-4 right-6 text-[#0044CC]/10 text-8xl font-serif select-none">
                  &rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

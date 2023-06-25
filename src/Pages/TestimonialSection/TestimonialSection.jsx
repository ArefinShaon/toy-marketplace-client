const TestimonialSection = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Parent",
      message: "My kids absolutely love the toys from this marketplace! The quality is excellent and the variety of toys is impressive. It's always a joy to see their excitement when they receive a new toy.",
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Toy Collector",
      message: "As a toy collector, I'm always on the lookout for unique and rare toys. This marketplace never disappoints! I've found some rare gems and exclusive collectibles that are not easily available elsewhere. Highly recommended for toy enthusiasts like me.",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Educator",
      message: "Toys play a crucial role in early childhood development, and this marketplace understands that. The educational toys available here are not only fun but also help in enhancing various skills. It's a valuable resource for educators and parents who want to provide meaningful learning experiences through play.",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="bg-cyan-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <p className="text-gray-800 mb-4">{testimonial.message}</p>
              <p className="text-gray-600 font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

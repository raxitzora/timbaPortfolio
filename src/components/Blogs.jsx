import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "Getting Started with SEO",
    description:
      "Key principles of creating valuable content that attracts and engages your target audience effectively.",
    image: "/blog-images/blog1.jpg",
    url: "https://yourblog.com/getting-started-seo",
    likes: 245,
  },
  {
    title: "Social Media Marketing Tips",
    description:
      "Learn how to leverage social media platforms to grow your brand and connect with your audience.",
    image: "/blog-images/blog2.jpg",
    url: "https://yourblog.com/social-media-tips",
    likes: 189,
  },
  {
    title: "Content Creation Strategies",
    description:
      "Master the art of creating compelling content that resonates with your target market.",
    image: "/blog-images/blog3.jpg",
    url: "https://yourblog.com/content-strategies",
    likes: 312,
  },
  {
    title: "Email Marketing Best Practices",
    description:
      "Discover proven techniques to improve your email campaigns and boost conversion rates.",
    image: "/blog-images/blog4.jpg",
    url: "https://yourblog.com/email-marketing",
    likes: 156,
  },
  {
    title: "Video Marketing Guide",
    description:
      "Explore the power of video content and how to create engaging videos for your audience.",
    image: "/blog-images/blog5.jpg",
    url: "https://yourblog.com/video-marketing",
    likes: 278,
  },
];

// Sort by likes
const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);

export default function Blogs() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < sortedBlogs.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section
      id="blogs"
      className="py-24 px-6 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Insights &{" "}
            <span className="text-cyan-400">Marketing Thoughts</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Experiments, strategies, and performance-driven insights.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-cyan-500 transition disabled:opacity-30 z-10"
          >
            <FaArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={current === sortedBlogs.length - 1}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-cyan-500 transition disabled:opacity-30 z-10"
          >
            <FaArrowRight />
          </button>

          {/* Slide Container */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.a
                key={current}
                href={sortedBlogs[current].url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="block bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl hover:shadow-cyan-500/20 transition duration-300"
              >
                <img
                  src={sortedBlogs[current].image}
                  alt={sortedBlogs[current].title}
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 hover:text-cyan-400 transition">
                    {sortedBlogs[current].title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {sortedBlogs[current].description}
                  </p>

                  <div className="text-cyan-400 font-semibold">
                    ❤️ {sortedBlogs[current].likes} Likes
                  </div>
                </div>
              </motion.a>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

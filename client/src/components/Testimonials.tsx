import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const testimonials = [
  {
    image: "wedding",
    personality1: "INFJ",
    personality2: "ENFP",
    text: "\"We never would have connected without SoulSync AI. Our personalities complement each other perfectly—I'm thoughtful and reflective, while he brings spontaneity and energy to our relationship.\"",
    names: "Emily & Michael",
    status: "Matched for 2 years, now married"
  },
  {
    image: "hiking",
    personality1: "INTJ",
    personality2: "ESFP",
    text: "\"The personality insights from SoulSync AI helped us understand each other from day one. Our communication has been so much better because we recognize how we each process information differently.\"",
    names: "Aisha & James",
    status: "Matched for 1 year, engaged"
  },
  {
    image: "cooking",
    personality1: "ENFJ",
    personality2: "ISTP",
    text: "\"I was skeptical about AI matchmaking, but the compatibility insights were spot on. We balance each other perfectly—I bring the big ideas, and he makes them happen. We're so grateful for SoulSync AI!\"",
    names: "Sofia & David",
    status: "Matched for 8 months, living together"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="py-16 md:py-24 relative bg-neutral-100" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-[#6A4C93]/10 -z-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#6A4C93]/20 text-[#6A4C93] font-medium text-sm mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Real Couples, Real{" "}
            <span className="bg-gradient-to-r from-primary to-[#6A4C93] bg-clip-text text-transparent">
              Connections
            </span>
          </h2>
          <p className="text-lg text-neutral-800">
            Hear from couples who found their perfect match through our personality-based approach.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.names}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-56 overflow-hidden bg-gray-200">
                <img 
                  src={testimonial.image === "wedding" ? "/images/Wed.jpeg" : 
                      testimonial.image === "hiking" ? "/images/hike_couple.jpeg" : 
                      "/images/cooking.jpeg"}
                  alt={testimonial.image === "wedding" ? "Happy couple at their wedding" : 
                      testimonial.image === "hiking" ? "Couple on a hike" : 
                      "Couple cooking together"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-primary font-bold mr-2">{testimonial.personality1}</span>
                    <span className="text-xl">+</span>
                    <span className="text-[#6A4C93] font-bold ml-2">{testimonial.personality2}</span>
                  </div>
                  <div className="flex text-yellow-400">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                  </div>
                </div>
                <p className="italic text-neutral-800 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary/50 to-[#6A4C93]/50 flex items-center justify-center text-white font-bold text-xs">
                      {testimonial.names.split('&')[0].trim()[0]}
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#6A4C93]/50 to-primary/50 flex items-center justify-center text-white font-bold text-xs">
                      {testimonial.names.split('&')[1].trim()[0]}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.names}</div>
                    <div className="text-sm text-neutral-800">{testimonial.status}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#signup">
            <Button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              Start Your Success Story
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

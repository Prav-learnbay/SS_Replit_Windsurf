import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const personalityCategories = [
  {
    title: "Introvert vs. Extrovert",
    description: "Where you focus your energy and attention",
    icon: "brain",
    bgColor: "bg-primary/20",
    textColor: "text-primary"
  },
  {
    title: "Sensing vs. Intuition",
    description: "How you process information around you",
    icon: "eye",
    bgColor: "bg-[#6A4C93]/20",
    textColor: "text-[#6A4C93]"
  },
  {
    title: "Thinking vs. Feeling",
    description: "How you make decisions and judgments",
    icon: "heart",
    bgColor: "bg-[#4ECDC4]/20",
    textColor: "text-[#4ECDC4]"
  },
  {
    title: "Judging vs. Perceiving",
    description: "How you approach structure and planning",
    icon: "calendar",
    bgColor: "bg-primary/20",
    textColor: "text-primary"
  }
];

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case "brain":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "eye":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case "heart":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "calendar":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function MBTICompatibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="personality" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Personality-Based{" "}
            <span className="bg-gradient-to-r from-primary to-[#6A4C93] bg-clip-text text-transparent">
              Compatibility
            </span>
          </h2>
          <p className="text-lg text-neutral-800">
            We use the scientifically-backed MBTI personality system to identify matches with genuine compatibility and relationship potential.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/images/mbti-chart.svg" 
                alt="MBTI personality types chart" 
                className="w-full aspect-4/3 object-cover bg-gray-100"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-primary text-white rounded-full mr-3 flex-shrink-0">1</span>
                Beyond Surface Appearance
              </h3>
              <p className="text-neutral-800 pl-11">
                We look deeper than photos and profiles to understand your core personality traits and what truly makes you compatible with others.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-primary text-white rounded-full mr-3 flex-shrink-0">2</span>
                16 Personality Types
              </h3>
              <p className="text-neutral-800 pl-11">
                The MBTI system identifies 16 distinct personality types based on four key dimensions, creating a comprehensive framework for compatibility.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-primary text-white rounded-full mr-3 flex-shrink-0">3</span>
                Complementary Traits
              </h3>
              <p className="text-neutral-800 pl-11">
                Our algorithm identifies personality types that complement yours, leading to balanced relationships with both shared values and complementary differences.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 pl-11"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#quiz" className="text-primary font-semibold inline-flex items-center group">
                Take the personality quiz
                <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition" />
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="w-full h-2 bg-gradient-to-r from-primary via-[#6A4C93] to-[#4ECDC4] rounded-full"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {personalityCategories.map((category, index) => (
              <motion.div 
                key={category.title} 
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="bg-neutral-100 rounded-lg p-4 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
                  <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center mb-3`}>
                    <IconComponent name={category.icon} />
                  </div>
                  <h4 className="font-serif font-bold text-lg mb-2">{category.title}</h4>
                  <p className="text-sm text-neutral-800">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

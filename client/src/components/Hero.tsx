import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-[#6A4C93]/10 -z-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Find Your{" "}
            <span className="bg-gradient-to-r from-primary to-[#6A4C93] bg-clip-text text-transparent">
              Perfect Match
            </span>{" "}
            Through{" "}
            <span className="text-[#4ECDC4]">AI</span> & Personality
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-800 leading-relaxed">
            SoulSync AI uses advanced AI and MBTI personality compatibility to help you find meaningful connections that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#signup">
              <Button className="bg-primary text-white text-center px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 w-full sm:w-auto">
                Start Your Journey
              </Button>
            </a>
            <a href="#how-it-works">
              <Button 
                variant="outline" 
                className="border-2 border-[#6A4C93] text-[#6A4C93] text-center px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6A4C93] hover:text-white transition w-full sm:w-auto"
              >
                How It Works
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <svg className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="40" r="25" fill="#ccc" />
                <circle cx="50" cy="100" r="35" fill="#ccc" />
              </svg>
              <svg className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="40" r="25" fill="#ccc" />
                <circle cx="50" cy="100" r="35" fill="#ccc" />
              </svg>
              <svg className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="40" r="25" fill="#ccc" />
                <circle cx="50" cy="100" r="35" fill="#ccc" />
              </svg>
            </div>
            <p className="ml-4 text-sm text-neutral-800">Join <span className="font-bold">5,000+</span> members finding meaningful connections</p>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 relative"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <div className="rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="/images/indian_marriage.jpeg" 
              alt="Beautiful Indian wedding couple with MBTI compatibility" 
              className="w-full aspect-4/3 object-cover bg-gray-100"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm font-semibold">94% Match</p>
            </div>
            <div className="text-xs">INFJ + ENTP = Perfect Match</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Bot, PuzzleIcon, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";

export default function AIMatching() {
  const ref = useRef(null);
  const quizRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isQuizInView = useInView(quizRef, { once: true, amount: 0.2 });

  const renderFeatureItem = (
    icon: React.ReactNode,
    title: string,
    description: string,
    bgColor: string,
    delay: number
  ) => (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
          <p className="text-neutral-800">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-neutral-100" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4ECDC4]/20 text-[#4ECDC4] font-medium text-sm mb-4">
            OUR TECHNOLOGY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            How Our <span className="text-[#4ECDC4]">AI-Powered</span> Matchmaking Works
          </h2>
          <p className="text-lg text-neutral-800">
            Our advanced algorithm goes beyond basic compatibility to help you find meaningful connections based on personality, values, and preferences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="/images/ai-matching-image.jpeg" 
                alt="AI-powered matching technology visualization" 
                className="w-full aspect-4/3 object-cover bg-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold drop-shadow-md">AI agents doing the match making</h3>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-8">
            {renderFeatureItem(
              <ClipboardCheck className="text-primary" />,
              "Comprehensive Assessment",
              "Take our in-depth personality quiz to identify your MBTI type, relationship preferences, and core values.",
              "bg-primary/20",
              0.2
            )}
            
            {renderFeatureItem(
              <Bot className="text-[#6A4C93]" />,
              "AI-Powered Analysis",
              "Our sophisticated algorithm analyzes thousands of successful relationships to identify optimal personality pairings.",
              "bg-[#6A4C93]/20",
              0.3
            )}
            
            {renderFeatureItem(
              <PuzzleIcon className="text-[#4ECDC4]" />,
              "Compatibility Matching",
              "Receive personalized matches with detailed compatibility insights and communication recommendations.",
              "bg-[#4ECDC4]/20",
              0.4
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden" ref={quizRef}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isQuizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                  Take Our Personality Quiz
                </h3>
                <p className="text-lg mb-8">
                  Discover your personality type and start your journey to finding a truly compatible partner.
                </p>
              </motion.div>
              
              <div className="space-y-6" id="quiz-preview">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isQuizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="font-medium mb-2">I prefer to spend my free time:</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition rounded-lg py-2 px-4 text-center">
                      With others
                    </button>
                    <button className="border-2 border-[#6A4C93] text-[#6A4C93] hover:bg-[#6A4C93] hover:text-white transition rounded-lg py-2 px-4 text-center">
                      By myself
                    </button>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isQuizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="font-medium mb-2">When making decisions, I typically:</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition rounded-lg py-2 px-4 text-center">
                      Follow my heart
                    </button>
                    <button className="border-2 border-[#6A4C93] text-[#6A4C93] hover:bg-[#6A4C93] hover:text-white transition rounded-lg py-2 px-4 text-center">
                      Analyze logically
                    </button>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isQuizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a href="#signup">
                    <Button className="w-full bg-[#4ECDC4] text-white text-center px-6 py-3 rounded-lg font-semibold mt-8 hover:bg-opacity-90 transition transform hover:-translate-y-1 shadow-md">
                      Take the Full Quiz
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#6A4C93] to-primary text-white flex items-center justify-center">
              <div className="p-8 md:p-12 max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isQuizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-4xl mb-6">💖</div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Discover Your Perfect Match
                  </h3>
                  <p className="opacity-90 mb-8">
                    "The quiz was eye-opening! I discovered I'm an INFJ and got matched with my now-fiancé, an ENTP. We connect on a level I never thought possible."
                  </p>
                  <div className="flex items-center">
                    <svg className="w-12 h-12 rounded-full border-2 border-white bg-gray-400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="40" r="25" fill="#ccc" />
                      <circle cx="50" cy="100" r="35" fill="#ccc" />
                    </svg>
                    <div className="ml-4">
                      <div className="font-bold">Sarah T.</div>
                      <div className="text-sm opacity-90">INFJ • Matched for 1.5 years</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

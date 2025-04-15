import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Bot, 
  MessageSquare, 
  Shield, 
  TrendingUp,
  Users
} from "lucide-react";
import { fadeIn } from "@/lib/animations";

const features = [
  {
    title: "MBTI Compatibility",
    description: "Detailed personality analysis to identify your most compatible matches based on the MBTI framework.",
    icon: <Brain className="text-white text-2xl" />
  },
  {
    title: "AI Matching Algorithm",
    description: "Advanced AI that learns from successful relationships to improve your match recommendations over time.",
    icon: <Bot className="text-white text-2xl" />
  },
  {
    title: "Communication Guidance",
    description: "Personalized tips for communicating effectively with different personality types to build stronger connections.",
    icon: <MessageSquare className="text-white text-2xl" />
  },
  {
    title: "Privacy Protection",
    description: "Advanced security features and strict privacy controls to keep your personal information safe and secure.",
    icon: <Shield className="text-white text-2xl" />
  },
  {
    title: "Relationship Insights",
    description: "Deep analytics on your relationship patterns and potential growth areas for more meaningful connections.",
    icon: <TrendingUp className="text-white text-2xl" />
  },
  {
    title: "Relationship Coaching",
    description: "Access to professional relationship coaches who understand personality dynamics and compatibility.",
    icon: <Users className="text-white text-2xl" />
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            FEATURES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Everything You Need For{" "}
            <span className="bg-gradient-to-r from-primary to-[#6A4C93] bg-clip-text text-transparent">
              Meaningful Connections
            </span>
          </h2>
          <p className="text-lg text-neutral-800">
            Our platform combines cutting-edge technology with deep psychological insights to help you find your perfect match.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-primary to-[#6A4C93] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-800">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

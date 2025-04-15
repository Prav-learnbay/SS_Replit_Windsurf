import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeIn } from "@/lib/animations";

const faqs = [
  {
    question: "How accurate is personality-based matching?",
    answer: "Personality-based matching has shown significant success in creating compatible relationships. Our approach combines the scientifically-validated MBTI framework with AI to identify complementary personality types. While no matching system is perfect, our users report higher relationship satisfaction and better communication compared to traditional dating platforms."
  },
  {
    question: "How does the AI matching technology work?",
    answer: "Our AI algorithm analyzes thousands of successful relationships and their personality dynamics to identify patterns of compatibility. We combine this data with your personality profile, preferences, and relationship goals to suggest matches with the highest potential for meaningful connection. The system continues to learn and refine its recommendations based on feedback and relationship outcomes."
  },
  {
    question: "How long does the personality assessment take?",
    answer: "Our comprehensive personality assessment takes about 15-20 minutes to complete. While this is longer than some dating apps' initial questionnaires, the depth of insight it provides creates significantly better matches. You can save your progress and return to finish the assessment at any time. After completion, you'll receive your MBTI personality type along with detailed insights about your relationship strengths and preferences."
  },
  {
    question: "Is my data secure and private?",
    answer: "We take your privacy extremely seriously. All personal data is encrypted and stored securely. Your personality profile and preferences are only used to generate matches and relationship insights. We never sell your information to third parties or use it for advertising. You have complete control over what information is visible to potential matches, and you can request deletion of your data at any time."
  },
  {
    question: "What if I'm new to MBTI personality types?",
    answer: "No prior knowledge of MBTI is needed! Our assessment is designed to accurately identify your personality type without any background knowledge. Once you receive your results, we provide detailed explanations about your type and compatibility with others. We also offer resources to help you understand the MBTI framework and how it applies to relationships. Many users report that discovering their personality type leads to valuable personal insights beyond just finding a match."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4ECDC4]/20 text-[#4ECDC4] font-medium text-sm mb-4">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-[#6A4C93] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-neutral-800">
            Everything you need to know about our AI-powered personality matching platform.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <AccordionTrigger className="w-full flex justify-between items-center p-6 text-left font-serif font-bold text-lg hover:bg-neutral-50 transition">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-neutral-800">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

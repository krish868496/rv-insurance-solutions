import React, { useState } from "react";

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer:
      "We offer health, life, motor, travel, and property insurance plans tailored to different needs and budgets.",
  },
  {
    question: "How do I choose the right insurance plan?",
    answer:
      "Selecting a plan depends on your needs, family size, financial goals, and risks. You can compare plans or speak with our advisors for guidance.",
  },
  {
    question: "What documents are required to buy an insurance policy?",
    answer:
      "Typically, ID proof, address proof, age proof, and recent photographs are required. Health or life insurance may require medical reports.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "You can file a claim online through our claims portal or contact support. Submit the required documents and we will process your claim quickly.",
  },
  {
    question: "How long does claim approval take?",
    answer:
      "Most claims are processed within 7–14 working days, provided all documents and information are complete.",
  },
  {
    question: "Can I cancel my policy and get a refund?",
    answer:
      "Yes, most policies have a free-look period of 15 days. If cancelled within this period, refunds are issued after standard deductions.",
  },
];

type FAQSPROPS = {
  question: string;
  answer: string;
};

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-10 lg:py-16 max-w-5xl mx-auto flex justify-center items-center flex-col">
      <h2 className="font-bold text-4xl leading-9 text-center mb-10">FAQs</h2>

      <div className="flex flex-col gap-6 max-w-3xl w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-3 border cursor-pointer rounded-md transition-all"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="font-semibold text-black/80 text-lg leading-6">
              {faq.question}
            </h3>

            {activeIndex === index && (
              <p className="text-gray-800 text-sm leading-5 font-normal">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

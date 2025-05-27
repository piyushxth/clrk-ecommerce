import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const whyUsOptions = [
  {
    title: "Exceptional Product Quality",
    description:
      "We source and deliver only the highest quality products, ensuring every purchase exceeds your expectations.",
  },
  {
    title: "Fast & Reliable Shipping",
    description:
      "Enjoy quick and dependable delivery, so you receive your orders on time, every time.",
  },
  {
    title: "Outstanding Customer Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any questions or concerns.",
  },
  {
    title: "Secure & Easy Payments",
    description:
      "Shop with confidence using our secure and user-friendly payment options tailored for your convenience.",
  },
  {
    title: "Hassle-Free Returns",
    description:
      "If you're not satisfied, our straightforward return policy makes exchanges and refunds simple and stress-free.",
  },
];

const WhyUs = () => {
  return (
    <div className="bg-primary py-8 sm:py-16 text-white">
      <div className="container flex flex-col">
        <h1 className="fw-regular ff-fashionwacks fs-600 text-center mb-8">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full p-8"
          >
            {whyUsOptions.map((item, idx) => (
              <AccordionItem value={`item-${idx + 1}`} key={idx}>
                <AccordionTrigger className="fs-400">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="w-full flex justify-center items-center relative h-[340px] md:h-[420px] order-2 md:order-1">
            <div className=" h-full w-[340px] md:w-[320px]">
              <div
                className="h-full w-full bg-white/10 rounded-b-full rounded-t-full"
                style={{
                  borderBottomLeftRadius: 9999,
                  borderBottomRightRadius: 9999,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

import { insuranceServices } from "@/lib/constant";
import React from "react";

const ServicesCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
      {insuranceServices?.map((service) => (
        <div
          key={service.id}
          className="bg-surface p-6 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col gap-3 items-center"
        >
          <service.icon className="text-primary mb-3" size={36} />
          <h3 className="text-lg font-semibold text-primary-dark">
            {service.title}
          </h3>
          <p className="text-text-secondary text-sm leading-5 mt-2">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;

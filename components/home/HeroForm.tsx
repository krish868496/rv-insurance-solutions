import React from "react";

const HeroForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div className="absolute right-4 lg:right-8 lg:top-1/2 top-1/6 lg:mt-5 lg:-translate-y-1/2 z-20 ">
      <div className="w-[380px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-3 lg:p-6 text-white animate-fade-in ">
        <h2 className="text-2xl font-semibold mb-4 text-center  text-text-primary bg-clip-text ">
          Get Your Vehicle Insured 🚗
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Vehicle Registration Number"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-300 text-sm transition-all"
          />
          <input
            type="text"
            placeholder="Chassis Number"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-300 text-sm transition-all"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-300 text-sm transition-all"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-300 text-sm transition-all"
          />

          <button
            type="submit"
            className="mt-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 hover:from-sky-500 hover:to-blue-400 transition-all text-white font-semibold shadow-md hover:shadow-lg cursor-pointer"
          >
            Get Quote Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;

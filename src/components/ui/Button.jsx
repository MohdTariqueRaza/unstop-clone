"use client";
export const ButtonPrimary = ({ children, action = () => {} }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="px-5 py-3.5 text-sm/4 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-1.5 bg-primary hover:bg-primarylight text-white"
    >
      {children}
    </button>
  );
};

export const ButtonPrimaryOuline = ({ children, action = () => {} }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="px-5 py-3.5 text-sm/4 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center border border-primary text-primary gap-1.5 hover:bg-[#DEEDFC] hover:border-[#DEEDFC]"
    >
      {children}
    </button>
  );
};

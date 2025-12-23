import React from "react";

const LanguageSwitcher = ({ language, onChange }) => {
  const next = language === "en" ? "am" : "en";
  return (
    <div className="mx-auto flex max-w-6xl justify-end px-4 pt-3">
      <button
        onClick={() => onChange(next)}
        className="rounded-xl border border-emerald-900/10 bg-white px-3 py-2 text-sm font-semibold text-emerald-950 shadow-sm hover:bg-emerald-50"
        type="button"
      >
        {language === "en" ? "አማርኛ" : "English"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="mx-auto flex max-w-6xl justify-end px-4 pt-3">
      <button
        onClick={toggleLanguage}
        className="rounded-xl border border-emerald-900/10 bg-white px-3 py-2 text-sm font-semibold text-emerald-950 shadow-sm hover:bg-emerald-50 transition-colors duration-200"
        type="button"
      >
        {language === "en" ? t("amharicButton") : t("englishButton")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const languages = [
    { code: "es", label: "Español", flag: "https://flagcdn.com/w20/es.png" },
    { code: "en", label: "English", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "pt", label: "Português", flag: "https://flagcdn.com/w20/br.png" },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // recordar elección
    setOpen(false);
  };

  return (
    <div className="languageSelector">
        <button className="lang-selector__button" onClick={() => setOpen(!open)}>
            <span className="flag"><img src={currentLang.flag} alt="flag" /></span>
            <span className="arrow">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
        <ul className="dropdown">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`lang-option ${lang.code === i18n.language ? "active" : ""}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="flag"><img src={lang.flag} alt="" /></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


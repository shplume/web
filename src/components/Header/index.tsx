import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { themeMode, toggleThemeMode } = useAppStore();

  // Early return pattern for event handlers
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(true);
  };

  const changeLanguage = (lng: string) => {
    if (i18n.language === lng) return;
    i18n.changeLanguage(lng);
  };

  const handleNavLinkClick = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-colors ${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="/"
            className={`text-2xl font-bold ${
              themeMode === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            TaomoAI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#process-design"
            className={`hover:text-blue-600 transition-colors ${
              themeMode === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700"
            }`}
          >
            {t("header.processDesign")}
          </a>
          <a
            href="#process-monitoring"
            className={`hover:text-blue-600 transition-colors ${
              themeMode === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700"
            }`}
          >
            {t("header.processMonitoring")}
          </a>
          <a
            href="#ai-analyzer"
            className={`hover:text-blue-600 transition-colors ${
              themeMode === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700"
            }`}
          >
            {t("header.aiAnalyzer")}
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 rounded ${
                i18n.language === "en"
                  ? themeMode === "dark"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-600 text-white"
                  : themeMode === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("zh")}
              className={`px-2 py-1 rounded ${
                i18n.language === "zh"
                  ? themeMode === "dark"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-600 text-white"
                  : themeMode === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200"
              }`}
            >
              中
            </button>
            <button
              onClick={toggleThemeMode}
              className="ml-2 p-2 rounded-full"
              aria-label="Toggle theme"
            >
              {themeMode === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            className={`px-6 py-2 rounded-md transition-colors ${
              themeMode === "dark"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {t("header.scheduleDemo")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleThemeMode}
            className="p-2 rounded-full"
            aria-label="Toggle theme"
          >
            {themeMode === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <button
            className={`focus:outline-none ${
              themeMode === "dark" ? "text-white" : "text-gray-700"
            }`}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden py-4 px-4 ${
            themeMode === "dark" ? "bg-gray-800" : "bg-white shadow-lg"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#process-design"
              className={`transition-colors ${
                themeMode === "dark"
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={handleNavLinkClick}
            >
              {t("header.processDesign")}
            </a>
            <a
              href="#process-monitoring"
              className={`transition-colors ${
                themeMode === "dark"
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={handleNavLinkClick}
            >
              {t("header.processMonitoring")}
            </a>
            <a
              href="#ai-analyzer"
              className={`transition-colors ${
                themeMode === "dark"
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={handleNavLinkClick}
            >
              {t("header.aiAnalyzer")}
            </a>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  changeLanguage("en");
                  handleNavLinkClick();
                }}
                className={`px-2 py-1 rounded ${
                  i18n.language === "en"
                    ? themeMode === "dark"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white"
                    : themeMode === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  changeLanguage("zh");
                  handleNavLinkClick();
                }}
                className={`px-2 py-1 rounded ${
                  i18n.language === "zh"
                    ? themeMode === "dark"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white"
                    : themeMode === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200"
                }`}
              >
                中
              </button>
            </div>

            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                themeMode === "dark"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              onClick={handleNavLinkClick}
            >
              {t("header.scheduleDemo")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

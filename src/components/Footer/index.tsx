import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const { themeMode, toggleThemeMode } = useAppStore();

  // 提前返回空组件如果翻译未加载
  if (!t) return null;

  // 切换语言
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <footer
      className={`pt-16 pb-8 ${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 公司信息 */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Taomo.AI
            </h3>
            <p
              className={`mb-4 ${
                themeMode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("footer.companyDescription")}
            </p>
            <div className="flex space-x-4">
              {/* 社交媒体图标 */}
              {["twitter", "linkedin", "facebook", "github"].map((social) => (
                <a
                  key={`social-${social}`}
                  href="#"
                  className={`${
                    themeMode === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  } transition-colors duration-300`}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        social === "twitter"
                          ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          : social === "linkedin"
                          ? "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          : social === "facebook"
                          ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          : "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      }
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {[
                "processDesign",
                "processMonitoring",
                "aiAnalyzer",
                "platform",
                "products",
              ].map((link) => (
                <li key={`footer-link-${link}`}>
                  <a
                    href={`#${link.toLowerCase().replace("header.", "")}`}
                    className={`${
                      themeMode === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    } transition-colors duration-300`}
                  >
                    {t(`header.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 mt-0.5 ${
                    themeMode === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className={`${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  info@Taomo.ai
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 mt-0.5 ${
                    themeMode === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span
                  className={`${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  +86 123 456 7890
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 mt-0.5 ${
                    themeMode === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span
                  className={`${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("footer.address")}
                </span>
              </li>
            </ul>
          </div>

          {/* 订阅通讯 */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("footer.newsletter")}
            </h3>
            <p
              className={`mb-4 ${
                themeMode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("footer.newsletterDescription")}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className={`flex-grow px-4 py-2 rounded-l-md focus:outline-none ${
                  themeMode === "dark"
                    ? "bg-gray-800 text-white border-gray-700"
                    : "bg-white text-gray-900 border-gray-300"
                } border`}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* 底部栏 */}
        <div
          className={`pt-8 mt-8 border-t ${
            themeMode === "dark" ? "border-gray-800" : "border-gray-200"
          } flex flex-col md:flex-row justify-between items-center`}
        >
          <div
            className={`mb-4 md:mb-0 ${
              themeMode === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            &copy; {new Date().getFullYear()} Taomo.AI.{" "}
            {t("footer.allRightsReserved")}
          </div>
          <div className="flex items-center space-x-4">
            {/* 语言切换 */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-md ${
                themeMode === "dark"
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-300`}
            >
              {i18n.language === "en" ? "中文" : "English"}
            </button>

            {/* 主题切换 */}
            <button
              onClick={toggleThemeMode}
              className={`p-2 rounded-full ${
                themeMode === "dark"
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-300`}
            >
              {themeMode === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

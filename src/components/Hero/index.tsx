import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const Hero = () => {
  const { t } = useTranslation();
  const { themeMode } = useAppStore();

  return (
    <section
      className={`pt-32 pb-20 px-4 ${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-white to-blue-50"
      }`}
    >
      <div className="container mx-auto text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            themeMode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {t("hero.title")}
        </h1>
        <p
          className={`text-xl md:text-2xl mb-10 ${
            themeMode === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t("hero.subtitle")}
        </p>
        <button
          className={`px-8 py-3 text-lg rounded-md shadow-lg transition-transform transform hover:scale-105 ${
            themeMode === "dark"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {t("hero.cta")}
        </button>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Process Design Card */}
          <div
            className={`p-6 rounded-lg ${
              themeMode === "dark"
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-white shadow-md hover:shadow-lg"
            } transition-all duration-300`}
          >
            <div className="h-12 w-12 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-full w-full ${
                  themeMode === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("header.processDesign")}
            </h3>
            <p
              className={`${
                themeMode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("processDesign.features.0")}
            </p>
          </div>

          {/* Process Monitoring Card */}
          <div
            className={`p-6 rounded-lg ${
              themeMode === "dark"
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-white shadow-md hover:shadow-lg"
            } transition-all duration-300`}
          >
            <div className="h-12 w-12 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-full w-full ${
                  themeMode === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("header.processMonitoring")}
            </h3>
            <p
              className={`${
                themeMode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("processMonitoring.features.0")}
            </p>
          </div>

          {/* AI Analyzer Card */}
          <div
            className={`p-6 rounded-lg ${
              themeMode === "dark"
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-white shadow-md hover:shadow-lg"
            } transition-all duration-300`}
          >
            <div className="h-12 w-12 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-full w-full ${
                  themeMode === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("header.aiAnalyzer")}
            </h3>
            <p
              className={`${
                themeMode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("aiAnalyzer.steps.0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const ProcessMonitoring = () => {
  const { t } = useTranslation();
  const { themeMode } = useAppStore();

  // 提前返回空组件如果翻译未加载
  if (!t) return null;

  return (
    <section
      className={`py-20 px-4 ${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
      id="process-monitoring"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("processMonitoring.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              themeMode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("processMonitoring.description")}
          </p>
        </div>

        {/* 监控仪表盘展示 */}
        <div className="mb-20">
          <div
            className={`rounded-lg overflow-hidden shadow-xl ${
              themeMode === "dark" ? "bg-gray-800" : "bg-white"
            } p-6`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div
                  className={`rounded-lg overflow-hidden ${
                    themeMode === "dark" ? "bg-gray-700" : "bg-gray-100"
                  } p-4 h-80 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-24 w-24 mx-auto mb-4 ${
                        themeMode === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <p
                      className={`${
                        themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t("processMonitoring.dashboardPlaceholder")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    themeMode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("processMonitoring.dashboardTitle")}
                </h3>
                <p
                  className={`mb-6 ${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("processMonitoring.dashboardDescription")}
                </p>
                <ul className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <li
                      key={`dashboard-feature-${index}`}
                      className="flex items-start"
                    >
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 ${
                          themeMode === "dark" ? "bg-green-500" : "bg-green-600"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`${
                          themeMode === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        {t(`processMonitoring.dashboardFeatures.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 实时监控特性 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`monitoring-feature-${index}`}
              className={`p-6 rounded-lg ${
                themeMode === "dark"
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50 shadow-md"
              } transition-all duration-300`}
            >
              <div className="h-12 w-12 mb-4">
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
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  themeMode === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t(`processMonitoring.features.${index}`)}
              </h3>
              <p
                className={`${
                  themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t(`processMonitoring.featureDescriptions.${index}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

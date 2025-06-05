import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const Platform = () => {
  const { t } = useTranslation();
  const { themeMode } = useAppStore();

  // 提前返回空组件如果翻译未加载
  if (!t) return null;

  return (
    <section
      className={`py-20 px-4 ${
        themeMode === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-900"
      }`}
      id="platform"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("platform.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              themeMode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("platform.description")}
          </p>
        </div>

        {/* 平台架构图 */}
        <div className="mb-20">
          <div
            className={`rounded-lg overflow-hidden shadow-lg ${
              themeMode === "dark" ? "bg-gray-700" : "bg-gray-50"
            } p-8`}
          >
            <div className="h-80 flex items-center justify-center">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <p
                  className={`${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("platform.architecturePlaceholder")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 平台特性 */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("platform.featuresTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`platform-feature-${index}`}
                className={`p-6 rounded-lg ${
                  themeMode === "dark"
                    ? "bg-gray-700 hover:bg-gray-650"
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
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    themeMode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t(`platform.features.${index}`)}
                </h3>
                <p
                  className={`${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t(`platform.featureDescriptions.${index}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 技术优势 */}
        <div>
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("platform.techAdvantagesTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`tech-advantage-${index}`}
                className={`flex ${
                  themeMode === "dark" ? "bg-gray-700" : "bg-gray-50"
                } rounded-lg overflow-hidden`}
              >
                {/* 图标区域 */}
                <div
                  className={`w-24 flex-shrink-0 flex items-center justify-center ${
                    themeMode === "dark" ? "bg-gray-600" : "bg-gray-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-12 w-12 ${
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                {/* 内容区域 */}
                <div className="p-6">
                  <h4
                    className={`text-xl font-semibold mb-2 ${
                      themeMode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t(`platform.techAdvantages.${index}.title`)}
                  </h4>
                  <p
                    className={`${
                      themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t(`platform.techAdvantages.${index}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

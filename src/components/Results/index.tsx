import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const Results = () => {
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
      id="results"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("results.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              themeMode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("results.description")}
          </p>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`stat-${index}`}
              className={`p-6 rounded-lg text-center ${
                themeMode === "dark" ? "bg-gray-800" : "bg-white shadow-md"
              }`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  themeMode === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {t(`results.stats.${index}.value`)}
              </div>
              <div
                className={`text-lg ${
                  themeMode === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t(`results.stats.${index}.label`)}
              </div>
            </div>
          ))}
        </div>

        {/* 案例研究 */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("results.caseStudiesTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`case-study-${index}`}
                className={`rounded-lg overflow-hidden ${
                  themeMode === "dark" ? "bg-gray-800" : "bg-white shadow-lg"
                }`}
              >
                {/* 案例图片 */}
                <div
                  className={`h-48 ${
                    themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                  } flex items-center justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-16 w-16 ${
                      themeMode === "dark" ? "text-gray-600" : "text-gray-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* 案例内容 */}
                <div className="p-6">
                  <h4
                    className={`text-xl font-semibold mb-2 ${
                      themeMode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t(`results.caseStudies.${index}.title`)}
                  </h4>
                  <p
                    className={`mb-4 ${
                      themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t(`results.caseStudies.${index}.description`)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        themeMode === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {t(`results.caseStudies.${index}.industry`)}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        themeMode === "dark"
                          ? "bg-blue-900 text-blue-300"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {t(`results.caseStudies.${index}.result`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

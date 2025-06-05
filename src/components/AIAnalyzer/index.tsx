import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const AIAnalyzer = () => {
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
      id="ai-analyzer"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("aiAnalyzer.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              themeMode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("aiAnalyzer.description")}
          </p>
        </div>

        {/* AI分析流程步骤 */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* 连接线 - 仅在中等屏幕以上显示 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2 z-0"></div>

            {/* 步骤列表 */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`ai-step-${index}`}
                className="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-12 last:mb-0"
              >
                {/* 步骤数字 - 在移动端居中，在桌面端靠左 */}
                <div className="flex items-center justify-center md:justify-start md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 md:mb-0 md:ml-auto ${
                      themeMode === "dark" ? "bg-blue-500" : "bg-blue-600"
                    }`}
                  >
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* 步骤内容 - 在移动端居中，在桌面端靠右 */}
                <div className="md:w-1/2 md:pl-12 text-center md:text-left order-2 md:order-2">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      themeMode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t(`aiAnalyzer.steps.${index}`)}
                  </h3>
                  <p
                    className={`${
                      themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t(`aiAnalyzer.stepDescriptions.${index}`)}
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

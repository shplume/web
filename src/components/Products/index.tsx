import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";

export const Products = () => {
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
      id="products"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("products.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              themeMode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("products.description")}
          </p>
        </div>

        {/* 产品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`product-${index}`}
              className={`rounded-lg overflow-hidden ${
                themeMode === "dark" ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              {/* 产品图片 */}
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* 产品内容 */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    themeMode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t(`products.items.${index}.name`)}
                </h3>
                <p
                  className={`mb-4 ${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t(`products.items.${index}.description`)}
                </p>

                {/* 产品特点列表 */}
                <ul className="mb-6 space-y-2">
                  {Array.from({ length: 3 }).map((_, featureIndex) => (
                    <li
                      key={`product-${index}-feature-${featureIndex}`}
                      className="flex items-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 mr-2 mt-0.5 ${
                          themeMode === "dark"
                            ? "text-green-400"
                            : "text-green-600"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`${
                          themeMode === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        {t(`products.items.${index}.features.${featureIndex}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 产品价格和按钮 */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-lg font-bold ${
                      themeMode === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {t(`products.items.${index}.price`)}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      themeMode === "dark"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    } transition-colors duration-300`}
                  >
                    {t("products.learnMoreButton")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";
import { ImageSwitcher } from "../ImageSwitcher/ImageSwitcher"; // Import the ImageSwitcher component

export const ProcessDesign = () => {
  const { t } = useTranslation();
  const { themeMode } = useAppStore();

  // Return empty component if translation is not loaded
  if (!t) return null;

  const images = [
    { src: "/path/to/your/image1.png", buttonText: "Drawing Recognition" }, // Replace with actual image path and button text
    { src: "/path/to/your/image2.png", buttonText: "Process Generating" }, // Replace with actual image path and button text
  ];

  return (
    <section
      className={`py-20 px-4 ${
        themeMode === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-900"
      }`}
      id="process-design"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              themeMode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("processDesign.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              themeMode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("processDesign.description")}
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`process-design-feature-${index}`}
              className={`p-6 rounded-lg ${
                themeMode === "dark"
                  ? "bg-gray-700 hover:bg-gray-650"
                  : "bg-gray-50 hover:bg-gray-100"
              } transition-all duration-300`}
            >
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center mb-4 ${
                  themeMode === "dark" ? "bg-blue-500" : "bg-blue-600"
                }`}
              >
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  themeMode === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t(`processDesign.features.${index}`)}
              </h3>
              <p
                className={`${
                  themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t(`processDesign.featureDescriptions.${index}`)}
              </p>
            </div>
          ))}
        </div>

        <ImageSwitcher images={images} themeMode={themeMode} />
      </div>
    </section>
  );
};

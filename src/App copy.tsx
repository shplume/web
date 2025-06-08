import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProcessDesign } from "./components/ProcessDesign";
import { ProcessMonitoring } from "./components/ProcessMonitoring";
import { AIAnalyzer } from "./components/AIAnalyzer";
import { Results } from "./components/Results";
import { Platform } from "./components/Platform";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { useAppStore } from "./store";

function App() {
  const { i18n } = useTranslation();
  const { themeMode } = useAppStore();

  // 根据主题模式设置文档类
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  // 根据浏览器语言设置初始语言
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "zh" && i18n.language !== "zh") {
      i18n.changeLanguage("zh");
    } else if (browserLang !== "zh" && i18n.language !== "en") {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <div
      className={`min-h-screen ${
        themeMode === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Header />
      <main>
        <Hero />
        <ProcessDesign />
        <ProcessMonitoring />
        <AIAnalyzer />
        <Results />
        <Platform />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;

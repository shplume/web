import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useAppStore } from "./store"
import { Header } from "./pages/home/header"
import { Intro } from "./pages/home/intro"
import { Product } from "./pages/home/product"
import { Design } from "./pages/home/design"
import { Monitor } from "./pages/home/monitor"
import { Analyzer } from "./pages/home/analyzer"
import { Data } from "./pages/home/data"
import { Platform } from "./pages/home/platform"
import { ProductFor } from "./pages/home/productFor"
import { Forms } from "./pages/home/form"
import "./App.css"
import { Footer } from "./components/Footer"

function App() {
  const { i18n } = useTranslation()
  const { themeMode } = useAppStore()

  // 根据主题模式设置文档类
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeMode])

  // 根据浏览器语言设置初始语言
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "zh" && i18n.language !== "zh") {
      i18n.changeLanguage("zh")
    } else if (browserLang !== "zh" && i18n.language !== "en") {
      i18n.changeLanguage("en")
    }
  }, [i18n])

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Product />
        <Design />
        <Monitor />
        <Analyzer />
        <Data />
        <Platform />
        <ProductFor />
        <Forms />
      </main>
      <Footer />
    </>
  )
}

export default App

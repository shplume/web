import { useState, useEffect } from "react"
import logo from "../../../../public/logo.png"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full h-[68px] px-4 md:px-[20px] text-white flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : ""
      }`}
    >
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-[40px] md:h-[64px]" />
        <span className="text-lg md:text-2xl font-bold ml-2 md:ml-4">
          IndustrialMind.ai
        </span>
        <nav className="hidden md:block ml-8">
          <ul className="flex gap-6">
            <li>
              <a
                href="#cases"
                className="hover:text-gray-300 transition-colors"
              >
                Cases
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="hover:text-gray-300 transition-colors"
              >
                Resources
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-gray-300 transition-colors">
                Team
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <a
          href="#contact"
          className="bg-green-500 hover:bg-green-600 px-3 md:px-4 py-2 rounded-md text-sm md:text-base transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}

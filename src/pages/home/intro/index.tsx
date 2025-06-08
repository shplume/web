import { Buttoms } from "./components/buttom"
import background from "@/assets/background/background.jpg"

export const Intro = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* 内容区域 */}
      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          AI Engineer for your Factory
        </h1>
        <p className="text-xl mb-8">
          Process Design | Process Monitoring | Root Cause Analysis
        </p>
        <Buttoms>Schedule a demo</Buttoms>
      </div>
    </div>
  )
}

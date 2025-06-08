import user from "@/assets/icon/user.png"
import polygon from "@/assets/icon/polygon.png"
import chart from "@/assets/icon/chart.png"
import robot from "@/assets/icon/robot.png"

export const Platform = () => {
  const features = [
    {
      icon: <img src={user} alt="Process Design" className="w-18 h-18" />,
      title: "Agent",
    },
    {
      icon: <img src={polygon} alt="Process Design" className="w-18 h-18" />,
      title: "LLM",
    },
    {
      icon: <img src={chart} alt="Process Design" className="w-18 h-18" />,
      title: "Advanced Analytics",
    },
    {
      icon: <img src={robot} alt="Process Design" className="w-18 h-18" />,
      title: "Machine Learning",
    },
  ]

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Platform
        </h2>

        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          The Platform Automates Analysis Of Production Line Data, Uses AI
          Agents To Evaluate Hypotheses In Parallel, And Communicates With
          Engineers Using Real Language Through An LLM Interface.
        </p>

        {/* 平台名称展示 */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 p-6 rounded-2xl border border-[#333] bg-gradient-to-b from-[#00FF3810] to-transparent">
          <h3 className="text-2xl md:text-3xl text-center font-semibold">
            IndustrialMind Platform
          </h3>
        </div>

        {/* 功能特点展示 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl border border-[#333] bg-black hover:bg-[#111] transition-colors duration-300"
            >
              <div className="mb-2">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

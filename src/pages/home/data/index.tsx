import backgroundLine from "@/assets/background/background-line.png"

export const Data = () => {
  const metrics = [
    {
      label: "30%",
      description: "Defect reduction",
    },
    {
      label: "10X",
      description: "Engineering Efficiency",
    },
    {
      label: "50%",
      description: "More Effective Solutions",
    },
    {
      label: "Millions",
      description: "Operation Cost Reduction",
    },
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div
        className="py-8"
        style={{
          background:
            "radial-gradient(circle at 46% 58%, #266e1b99, #0f123e99 100%, #0f103f99 100%, #fff)",
        }}
      >
        <h2 className="text-4xl font-bold text-center pb-8">
          And The Results Will Speak For Themselves
        </h2>

        <div
          className="flex justify-center items-center w-full md:py-24 sm:py-12 py-6"
          style={{
            backgroundImage: `url(${backgroundLine})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
            {metrics.map((item) => (
              <div className="flex justify-center items-center aspect-[1] rounded-xl border border-[#333] bg-black hover:bg-[url(/public/background-hover.png)] hover:bg-center">
                <div className="flex flex-col items-center gap-2 mx-6">
                  <h2 className="text-4xl sm:text-6xl md:text-3xl lg:text-5xl font-bold text-center">
                    {item.label}
                  </h2>
                  <div className="lg:text-lg text-center">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

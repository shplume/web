import AutomotiveFactoryAutomation from "@/assets/images/automotive_factory_automation.jpg"
import EquipmentManufacturingIsometric from "@/assets/images/equipment_manufacturing_isometric.jpg"
import SmartFactoryIntegration from "@/assets/images/smart_factory_integration.jpg"

export const ProductFor = () => {
  const products = [
    {
      image: AutomotiveFactoryAutomation,
      title: "Automotive\nFactories",
      description: "Improve Productivity With On Premise Or Cloud Deployment",
    },
    {
      image: EquipmentManufacturingIsometric,
      title: "Equipment\nManufacturers",
      description: "Augment Equipment Performance With Machine Intelligence",
    },
    {
      image: SmartFactoryIntegration,
      title: "Solution\nIntegrator",
      description: "Partner With Us To Embed Data Science In Factory Solutions",
    },
  ]

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Product For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              {/* 背景图片 */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
              />

              {/* 渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              {/* 内容 */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-3 whitespace-pre-line">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-300">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

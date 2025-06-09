import user from "@/assets/icon/user.png";
import polygon from "@/assets/icon/polygon.png";
import robot from "@/assets/icon/robot.png";

export const Product = () => {
  const products = [
    {
      title: "Process Design",
      icon: <img src={user} alt="Process Design" className="w-18 h-18" />,
    },
    {
      title: "Process Monitoring",
      icon: <img src={polygon} alt="Process Design" className="w-18 h-18" />,
    },
    {
      title: "AI Analyzer",
      icon: <img src={robot} alt="Process Design" className="w-18 h-18" />,
    },
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          TaomoAI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-8 border border-gray-800 rounded-lg bg-black hover:border-green-500 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {product.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import background from "@/assets/background/background-form.png"
import { Button } from "@/components/ui/button"

export const Form = () => {
  return (
    <section className="w-full bg-black">
      <div
        className="pb-16"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container mx-auto px-4 py-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Let's Talk!
          </h2>
        </div>

        <div className="flex justify-center">
          <Button
            className="w-36 h-12"
            onClick={() => {
              console.log("55555")
            }}
          >
            <span className="text-lg">Submit</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

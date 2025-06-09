import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectCards } from "swiper/modules";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrawingRecognition from "@/assets/images/DrawingRecognition.jpg";
import ProcessGenerating from "@/assets/images/ProcessGenerating.jpg";

const images = [
  {
    title: "Drawing Recognition",
    value: "drawing",
    src: DrawingRecognition,
  },
  {
    title: "Process Generating",
    value: "process",
    src: ProcessGenerating,
  },
];

export const Design = () => {
  // 创建 Swiper 实例的引用
  const swiperRef = useRef<SwiperType>(null);

  // 处理 Tab 切换事件
  const handleTabChange = (value: string) => {
    if (swiperRef.current) {
      const idx = images.findIndex((image) => image.value === value);
      // 根据 tab 值切换到对应的 slide
      swiperRef.current.slideTo(idx);
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Taomo AI Process Design
        </h2>

        <div className="flex justify-center w-full">
          <Tabs defaultValue="drawing" onValueChange={handleTabChange}>
            <TabsList>
              {images.map((image) => (
                <TabsTrigger value={image.value}>{image.title}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Swiper轮播 */}
        <Swiper
          effect={"cards"}
          modules={[EffectCards]}
          className="w-[68vw] mt-12"
          grabCursor={false}
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image) => (
            <SwiperSlide>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

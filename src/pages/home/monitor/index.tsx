import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectCards } from "swiper/modules";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonitorImage from "@/assets/images/monitor.png";
import PlanYourTasks from "@/assets/images/PlanYourTasks.jpg";

const images = [
  {
    title: "Monitor",
    value: "monitor",
    src: MonitorImage,
  },
  {
    title: "Plan your Tasks",
    value: "tasks",
    src: PlanYourTasks,
  },
];

export const Monitor = () => {
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
    <section className="py-20 w-full flex flex-col items-center justify-center bg-black text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Taomo AI Monitoring</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          When Traditional Monitoring Tools Throw You Hundreds Of Emails, We
          Monitor Quality, Select Warning And Prioritize Your Daily Tasks.
        </p>

        {/* 切换按钮 */}

        <div className="flex justify-center w-full">
          <Tabs defaultValue="monitor" onValueChange={handleTabChange}>
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
          className="w-[68vw] mt-6"
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

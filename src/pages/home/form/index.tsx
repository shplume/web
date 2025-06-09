// 导入背景图片资源
import background from "@/assets/background/background-form.png"
// 导入表单验证相关依赖
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// 导入UI组件
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// 修改表单验证模式，添加所需字段
const formSchema = z.object({
  email: z.string().email({
    message: "请输入有效的邮箱地址。",
  }),
  fullName: z.string().min(2, {
    message: "请输入完整姓名。",
  }),
  businessType: z.string().min(1, {
    message: "请选择业务类型。",
  }),
  companyName: z.string().min(2, {
    message: "请输入公司/组织名称。",
  }),
  role: z.string().min(1, {
    message: "请选择您的角色。",
  }),
  country: z.string().min(1, {
    message: "请选择您的国家/地区。",
  }),
  message: z.string().optional(),
})

// 在Forms组件中更新表单字段
export const Forms = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      businessType: "",
      companyName: "",
      role: "",
      country: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values) // 打印表单值
  }

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

        <div className="container mx-auto px-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 邮箱地址 */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        EMAIL ADDRESS *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Type Here"
                          // className="bg-transparent border-white text-white placeholder-gray-600"
                          className="bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* 全名 */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">FULL NAME *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Type Here"
                          className="bg-transparent border-white text-white placeholder-gray-600"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* 业务类型 */}
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        BUSINESS TYPE *
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-10 px-3 bg-transparent border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:border-transparent"
                        >
                          <option className="text-black" value="type1">
                            Type 1
                          </option>
                          <option className="text-black" value="type2">
                            Type 2
                          </option>
                        </select>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* 公司名称 */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        COMPANY / ORGANIZATION NAME *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          {...field}
                          className="bg-transparent border-[#00FF00] text-white placeholder-gray-400"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* 角色 */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">YOUR ROLE *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-10 px-3 bg-transparent border border-[#00FF00] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00FF00] focus:border-transparent"
                        >
                          <option value="" disabled>
                            Select Your Role
                          </option>
                          <option value="role1">Role 1</option>
                          <option value="role2">Role 2</option>
                        </select>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* 国家 */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        YOUR COUNTRY *
                      </FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-10 px-3 bg-transparent border border-[#00FF00] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00FF00] focus:border-transparent"
                        >
                          <option value="" disabled>
                            Select Your Country
                          </option>
                          <option value="country1">Country 1</option>
                          <option value="country2">Country 2</option>
                        </select>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              {/* 消息 */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">YOUR MESSAGE</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        placeholder="Type Here"
                        className="w-full h-32 px-3 py-2 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button type="submit" className="w-36 h-12">
                  <span className="text-lg">Submit</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

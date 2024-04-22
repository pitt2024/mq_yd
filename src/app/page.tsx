import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {

  return <MaxWidthWrapper>
    
    {/* frist : logo div */}
    <div className="flex items-center py-4 px-2">
      <div className="mr-2">
        <Image
          src="/logo.svg"
          width={20}
          height={20}
          alt="中国移动收银台"
        />
      </div>
      <div>
        <p className="text-sm text-gray-500">中国移动收银台</p>
      </div>
    </div>
    {/* second : seccess div */}
    <div className="text-center mt-8">
      <div className="relativ flex justify-center items-center">
        <Image
          src="/check.png" // 替换为你的图片路径
          width={100} // 调整图片宽度
          height={100} // 调整图片高度
          alt="描述图片内容"
        />
        
      </div>
      <div className="py-2">
        <p className="text-2xl text-black  font-bold">充值成功</p>
      </div>
    </div>
    <div className="mt-8">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="px-4 py-2 border-r border-b border-transparent">订单号</td>
            <td className="px-4 py-2 text-right font-bold border-b border-transparent">12345678</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-r border-b border-transparent">充值号码</td>
            <td className="px-4 py-2 text-right font-bold border-b border-transparent">123456789</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-r border-b border-transparent">充值金额</td>
            <td className="px-4 py-2 text-right font-bold border-b border-transparent">100元</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-r border-b border-transparent">到账金额</td>
            <td className="px-4 py-2 text-right font-bold border-b border-transparent">100元</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-r border-b border-transparent">充值时间</td>
            <td className="px-4 py-2 text-right font-bold border-b border-transparent">2022-01-01 12:00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* add a button */}
    {/* <div className="flex flex-col sm:flex-row  mt-20"> */}
    <div className="flex flex-col  mt-20">
      <Link href="/" className={buttonVariants({ size: "lg" })}>返回充值首页</Link>
    </div>

  </MaxWidthWrapper>;
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function VocabularyPage() {
  return (
    <div className="container-eps py-12">
      <div className="gradient-background rounded-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">TỪ VỰNG EPS GIÁO TRÌNH MỚI</h1>

        <div className="mb-5">
          <button className="w-full bg-white bg-opacity-10 text-white p-3 rounded-md flex items-center justify-between">
            <span>Nhấn để lựa chọn bài học và chức năng bên dưới nhé</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>

        <Tabs defaultValue="word" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-transparent gap-2">
            <TabsTrigger
              value="word"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Từ vựng
            </TabsTrigger>
            <TabsTrigger
              value="flashcards"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Thẻ từ vựng
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Trắc nghiệm
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="gradient-background rounded-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">TỪ VỰNG EPS TOPIK</h1>

        <div className="mb-5">
          <button className="w-full bg-white bg-opacity-10 text-white p-3 rounded-md flex items-center justify-between">
            <span>Nhấn để lựa chọn bài học và chức năng bên dưới nhé</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>

        <Tabs defaultValue="word" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-transparent gap-2">
            <TabsTrigger
              value="word"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Từ vựng
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Trắc nghiệm
            </TabsTrigger>
            <TabsTrigger
              value="match"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Ghép từ
            </TabsTrigger>
            <TabsTrigger
              value="flashcards"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-blue-200 text-blue-800"
            >
              Thẻ từ vựng
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="bg-gradient-to-r from-red-600 to-orange-500 p-1 rounded-md mb-8">
        <div className="bg-[#0f1729] rounded-md p-6">
          <h1 className="text-3xl font-bold text-white mb-4">TỪ VỰNG EPS TOPIK TỔNG HỢP</h1>

          <p className="text-gray-300 mb-6">
            Phần từ vựng này chúng tôi biên soạn và phân loại theo từng dạng, thể loại riêng giúp các bạn dễ dàng
            hệ thống kiến thức từ vựng cũng như có sự chắt lọc không lan man với những tài liệu không sát với chương trình eps
          </p>

          <div className="mb-5">
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md">
              Chọn phần muốn truy cập bên dưới nhé
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Đồng nghĩa</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Trái nghĩa</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Số đếm</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Danh từ đơn vị</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Phó từ</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Từ nối - từ để hỏi</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Từ vựng biểu đồ</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-6">Màu sắc</Button>
          </div>

          <p className="text-gray-300 mt-8 italic">
            Vẫn tiếp tục cập nhật ...
          </p>
        </div>
      </div>
    </div>
  );
}

import { ExternalLink, Star, TrendingUp, Zap, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedToolsSection = () => {
  const tools = [
    {
      name: "ChatGPT Plus",
      category: "Viết nội dung",
      description: "Công cụ AI mạnh nhất để viết nội dung, code, phân tích dữ liệu và tự động hóa công việc hàng ngày.",
      benefits: [
        "Viết nội dung chuyên nghiệp trong vài phút",
        "Tự động hóa email marketing",
        "Tạo ý tưởng kinh doanh không giới hạn"
      ],
      price: "$20/tháng",
      rating: 4.8,
      users: "100M+",
      trending: true,
      icon: "🤖",
      color: "bg-green-500"
    },
    {
      name: "Midjourney",
      category: "Thiết kế",
      description: "Tạo hình ảnh AI chất lượng cao cho social media, website, sản phẩm digital và kinh doanh online.",
      benefits: [
        "Tạo logo, banner chuyên nghiệp",
        "Thiết kế sản phẩm không cần skill",
        "Nội dung visual viral cho social"
      ],
      price: "$10/tháng",
      rating: 4.9,
      users: "20M+",
      trending: true,
      icon: "🎨",
      color: "bg-purple-500"
    },
    {
      name: "Copy.ai",
      category: "Marketing",
      description: "Viết copy bán hàng, email marketing, quảng cáo Facebook/Google hiệu quả và chuyển đổi cao.",
      benefits: [
        "Tăng conversion rate 300%",
        "Tự động hóa email sequence",
        "Tạo landing page bán chạy"
      ],
      price: "$36/tháng",
      rating: 4.7,
      users: "5M+",
      trending: false,
      icon: "📝",
      color: "bg-blue-500"
    },
    {
      name: "Jasper AI",
      category: "Content",
      description: "Nền tảng AI tạo nội dung toàn diện cho blog, social media, email và marketing campaigns.",
      benefits: [
        "Tạo blog posts SEO tự động",
        "Lên kế hoạch content 1 tháng",
        "Viết script video viral"
      ],
      price: "$39/tháng",
      rating: 4.6,
      users: "1M+",
      trending: false,
      icon: "✍️",
      color: "bg-orange-500"
    },
    {
      name: "Notion AI",
      category: "Quản lý",
      description: "Tổ chức công việc thông minh, tự động hóa task management và tăng năng suất cá nhân.",
      benefits: [
        "Quản lý project tự động",
        "Tạo báo cáo thông minh",
        "Lên kế hoạch chi tiết"
      ],
      price: "$8/tháng",
      rating: 4.5,
      users: "30M+",
      trending: false,
      icon: "📊",
      color: "bg-gray-500"
    },
    {
      name: "Synthesia",
      category: "Video",
      description: "Tạo video AI với avatar ảo, ideal cho course online, marketing video và content creation.",
      benefits: [
        "Tạo course online không lộ mặt",
        "Video marketing chuyên nghiệp",
        "Nội dung đa ngôn ngữ"
      ],
      price: "$30/tháng",
      rating: 4.4,
      users: "500K+",
      trending: true,
      icon: "🎬",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Công cụ AI được khuyên dùng nhất
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Những công cụ AI đã được hàng triệu người sử dụng để tăng thu nhập và tự động hóa công việc. 
            Mỗi công cụ đều có link affiliate để bạn có thể thử ngay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-all duration-300 group relative overflow-hidden">
              {/* Trending Badge */}
              {tool.trending && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-warning text-warning-foreground">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tool.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Lợi ích chính:</h4>
                  <ul className="space-y-1">
                    {tool.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{tool.users}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium text-success">{tool.price}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  size="sm"
                >
                  Dùng thử ngay
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Muốn khám phá thêm công cụ AI?
              </h3>
              <p className="text-muted-foreground mb-6">
                Tôi cập nhật danh sách công cụ AI mới nhất mỗi tuần. 
                Đăng ký để không bỏ lỡ những công cụ có thể thay đổi cuộc sống bạn!
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 transition-colors"
                size="lg"
              >
                <Clock className="mr-2 w-5 h-5" />
                Nhận cập nhật hàng tuần
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedToolsSection;
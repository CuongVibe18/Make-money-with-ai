import { Star, Quote, User, TrendingUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nguyễn Thị Lan",
      role: "Content Creator",
      avatar: "NL",
      rating: 5,
      content: "Nhờ ChatGPT và Midjourney, tôi đã tạo ra kênh YouTube 100K subscribers chỉ trong 6 tháng. Thu nhập từ 5 triệu/tháng tăng lên 50 triệu/tháng!",
      highlight: "Thu nhập tăng 10x"
    },
    {
      name: "Trần Minh Đức",
      role: "Digital Marketer",
      avatar: "TD",
      rating: 5,
      content: "Copy.ai đã giúp tôi tối ưu hóa ads Facebook, tăng conversion rate từ 2% lên 8%. Giờ tôi có thể scale campaign mà không lo về creative.",
      highlight: "Conversion tăng 300%"
    },
    {
      name: "Lê Hoàng Anh",
      role: "Freelancer",
      avatar: "LA",
      rating: 5,
      content: "Jasper AI giúp tôi viết content cho client nhanh gấp 5 lần. Từ 2 project/tháng giờ làm được 10 project, thu nhập tăng từ 10 triệu lên 40 triệu.",
      highlight: "Năng suất tăng 5x"
    },
    {
      name: "Phạm Thị Hoa",
      role: "Online Business",
      avatar: "PH",
      rating: 5,
      content: "Notion AI giúp tôi quản lý toàn bộ business online. Từ inventory đến customer service, mọi thứ đều được tự động hóa. Lợi nhuận tăng 400%!",
      highlight: "Lợi nhuận tăng 400%"
    },
    {
      name: "Vũ Đình Nam",
      role: "Course Creator",
      avatar: "VN",
      rating: 5,
      content: "Synthesia đã thay đổi hoàn toàn cách tôi tạo course. Không cần lộ mặt, không cần studio, nhưng vẫn tạo ra course chất lượng cao và bán chạy.",
      highlight: "Doanh thu course tăng 300%"
    },
    {
      name: "Hoàng Thị Mai",
      role: "E-commerce",
      avatar: "HM",
      rating: 5,
      content: "AI tools giúp tôi tự động hóa product description, customer service và marketing. Shop online từ 50 triệu/tháng lên 200 triệu/tháng.",
      highlight: "Doanh thu tăng 4x"
    }
  ];

  const successStories = [
    {
      icon: TrendingUp,
      title: "Tăng thu nhập trung bình",
      value: "300%",
      description: "trong 6 tháng đầu"
    },
    {
      icon: Star,
      title: "Đánh giá trung bình",
      value: "4.8/5",
      description: "từ 1000+ người dùng"
    },
    {
      icon: User,
      title: "Người thành công",
      value: "8,500+",
      description: "đã tăng thu nhập"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Câu chuyện thành công thực tế
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Những người đã thay đổi cuộc sống nhờ áp dụng AI vào công việc. 
            Đây là kết quả thực tế, không phải lý thuyết.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <story.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{story.value}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{story.title}</h3>
                <p className="text-sm text-muted-foreground">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-warning fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center px-3 py-1 bg-success/10 rounded-full mb-4">
                  <TrendingUp className="w-4 h-4 text-success mr-2" />
                  <span className="text-sm font-medium text-success">{testimonial.highlight}</span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Bạn cũng có thể thành công như họ!
              </h3>
              <p className="text-muted-foreground mb-6">
                Không cần kinh nghiệm kỹ thuật, không cần vốn lớn. 
                Chỉ cần bắt đầu với những công cụ AI phù hợp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30 ngày</div>
                  <div className="text-sm text-muted-foreground">để thấy kết quả</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">0 đồng</div>
                  <div className="text-sm text-muted-foreground">chi phí bắt đầu</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">hỗ trợ cộng đồng</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
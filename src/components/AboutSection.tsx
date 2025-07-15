import { Heart, Target, Users, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Chia sẻ với tình yêu",
      description: "Tôi tin rằng AI có thể thay đổi cuộc sống của mọi người, giúp chúng ta làm việc thông minh hơn và có nhiều thời gian hơn cho những điều quan trọng."
    },
    {
      icon: Target,
      title: "Chọn lọc kỹ lưỡng",
      description: "Mỗi công cụ AI được tôi thử nghiệm trực tiếp và đánh giá dựa trên hiệu quả thực tế, không chỉ theo lý thuyết."
    },
    {
      icon: Users,
      title: "Cộng đồng tin tưởng",
      description: "Hàng ngàn người đã sử dụng các công cụ tôi giới thiệu và đạt được kết quả tích cực trong công việc và kinh doanh."
    },
    {
      icon: Award,
      title: "Cập nhật liên tục",
      description: "Thế giới AI thay đổi nhanh chóng, tôi luôn cập nhật những công cụ mới nhất và hiệu quả nhất cho bạn."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tại sao tôi chia sẻ các công cụ AI này?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sau 3 năm nghiên cứu và sử dụng AI trong công việc, tôi nhận ra rằng 
            <span className="text-primary font-semibold"> AI không chỉ là xu hướng mà là chìa khóa</span> 
            giúp chúng ta tạo ra thu nhập và tự do tài chính.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Story */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-accent/30 border-accent-foreground/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Câu chuyện của tôi
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Trước đây tôi phải làm việc 12 tiếng/ngày để có thu nhập ổn định. 
                Sau khi áp dụng AI, tôi chỉ cần 4 tiếng/ngày nhưng thu nhập tăng gấp 3 lần. 
                Tôi muốn chia sẻ những công cụ đã thay đổi cuộc sống tôi với mọi người."
              </p>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Nguyễn Minh Hải</span> - 
                  Founder AI Tools Hub
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
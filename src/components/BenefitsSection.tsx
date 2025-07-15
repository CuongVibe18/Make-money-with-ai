import { Clock, TrendingUp, Zap, Shield, Target, Users, DollarSign, Sparkles } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Tiết kiệm thời gian",
      description: "Tự động hóa các công việc lặp đi lặp lại, giải phóng 5-8 tiếng mỗi ngày để tập trung vào việc quan trọng.",
      stats: "Tiết kiệm 80%",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Tăng thu nhập",
      description: "Tạo nhiều nguồn thu nhập thụ động thông qua automation, content creation và online business.",
      stats: "Tăng 300%",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Tăng năng suất",
      description: "Hoàn thành công việc nhanh hơn với chất lượng cao hơn, từ viết lách đến thiết kế và phân tích.",
      stats: "Hiệu quả 5x",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Giảm sai sót",
      description: "AI giúp kiểm tra và tối ưu hóa công việc, giảm thiểu lỗi sai và tăng độ chính xác.",
      stats: "Giảm 90%",
      color: "bg-orange-500"
    },
    {
      icon: Target,
      title: "Tối ưu marketing",
      description: "Tạo content viral, quảng cáo hiệu quả và chiến lược marketing data-driven.",
      stats: "ROI 400%",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Mở rộng quy mô",
      description: "Phục vụ nhiều khách hàng hơn mà không cần tăng nhân sự, mở rộng business một cách thông minh.",
      stats: "Scale 10x",
      color: "bg-indigo-500"
    }
  ];

  const industryBenefits = [
    {
      industry: "Content Creator",
      benefits: [
        "Tạo video script trong 5 phút",
        "Thiết kế thumbnail tự động",
        "Lên kế hoạch content 1 tháng"
      ]
    },
    {
      industry: "E-commerce",
      benefits: [
        "Viết product description tự động",
        "Tạo ads copy chuyển đổi cao",
        "Phân tích customer insights"
      ]
    },
    {
      industry: "Digital Marketing",
      benefits: [
        "Tối ưu SEO tự động",
        "Tạo campaign ads hiệu quả",
        "Phân tích competitor strategy"
      ]
    },
    {
      industry: "Freelancer",
      benefits: [
        "Hoàn thành dự án nhanh gấp 3",
        "Tự động hóa báo cáo client",
        "Tăng giá dịch vụ nhờ AI"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lợi ích khi ứng dụng AI vào công việc
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hàng ngàn người đã thay đổi cuộc sống nhờ áp dụng AI. 
            Đây là những lợi ích cụ thể bạn sẽ nhận được.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary mr-2" />
                  <span className="text-primary font-semibold">{benefit.stats}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry-Specific Benefits */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Lợi ích theo từng ngành nghề
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryBenefits.map((item, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 text-primary mr-2" />
                    {item.industry}
                  </h4>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="mt-20 bg-gradient-primary/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Người dùng tin tưởng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-muted-foreground">Tăng thu nhập trung bình</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5-8h</div>
              <div className="text-muted-foreground">Tiết kiệm mỗi ngày</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Hài lòng với kết quả</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
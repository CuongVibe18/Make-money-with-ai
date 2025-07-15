import { Mail, Bell, Gift, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  const benefits = [
    "Công cụ AI mới nhất mỗi tuần",
    "Hướng dẫn chi tiết cách sử dụng",
    "Case study thành công thực tế",
    "Discount code độc quyền",
    "Truy cập cộng đồng VIP"
  ];

  return (
    <section id="cta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-gradient-primary/10 border-primary/20 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 animate-float">
                <Sparkles className="text-primary/20 w-8 h-8" />
              </div>
              <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
                <Gift className="text-primary/20 w-10 h-10" />
              </div>
            </div>

            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-10 h-10 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Theo dõi bản tin AI hàng tuần
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nhận danh sách công cụ AI mới nhất, hướng dẫn chi tiết và 
                case study thành công từ cộng đồng 10,000+ thành viên.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Newsletter Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Nhập email của bạn..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button 
                      type="submit" 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      Đăng ký ngay
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Miễn phí 100%. Có thể hủy bất kỳ lúc nào.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-center space-x-2 text-success mb-4">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg font-semibold">Đăng ký thành công!</span>
                  </div>
                  <p className="text-muted-foreground">
                    Kiểm tra email để xác nhận và nhận ngay danh sách 50 công cụ AI miễn phí.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Secondary CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Danh sách công cụ AI đầy đủ
                </h3>
                <p className="text-muted-foreground mb-6">
                  Truy cập vào database 200+ công cụ AI được phân loại theo ngành nghề và mức độ khó.
                </p>
                <Button 
                  variant="outline" 
                  className="border-warning/20 hover:border-warning/40 text-warning hover:bg-warning/10"
                >
                  Xem tất cả công cụ
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Cộng đồng AI Tools VIP
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tham gia Discord/Telegram để thảo luận, chia sẻ kinh nghiệm và nhận support 24/7.
                </p>
                <Button 
                  variant="outline" 
                  className="border-success/20 hover:border-success/40 text-success hover:bg-success/10"
                >
                  Tham gia cộng đồng
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Open Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
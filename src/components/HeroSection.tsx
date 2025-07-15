import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import heroImage from '@/assets/hero-ai-tools.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Tools Hero" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="text-primary/30 w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="text-primary/30 w-6 h-6" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <TrendingUp className="text-primary/30 w-7 h-7" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent-foreground mr-2" />
            <span className="text-sm font-medium text-accent-foreground">
              Khám phá công cụ AI hàng đầu 2024
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Biến <span className="text-primary">AI</span> thành <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Công cụ kiếm tiền
            </span> của bạn
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Khám phá các công cụ AI tốt nhất giúp bạn tự động hóa công việc, 
            tăng hiệu suất và tạo ra thu nhập thụ động online.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-success" />
              </div>
              <span className="text-foreground font-medium">Tiết kiệm 80% thời gian</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">Tăng 300% thu nhập</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-warning" />
              </div>
              <span className="text-foreground font-medium">Tự động hóa 100%</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => scrollToSection('tools')}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              Khám phá ngay
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              Tìm hiểu thêm
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground text-sm mb-4">
              Được tin tưởng bởi hơn 10,000+ người dùng
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm font-medium">★★★★★ 4.9/5</div>
              <div className="text-sm">Đánh giá từ cộng đồng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/30 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
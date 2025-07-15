import { Mail, MessageCircle, Youtube, Facebook, Twitter, Heart, ExternalLink, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", url: "#" },
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: MessageCircle, label: "Telegram", url: "#" },
  ];

  const quickLinks = [
    { label: "Trang chủ", url: "#hero" },
    { label: "Công cụ AI", url: "#tools" },
    { label: "Lợi ích", url: "#benefits" },
    { label: "Đánh giá", url: "#testimonials" },
  ];

  const legalLinks = [
    { label: "Chính sách liên kết", url: "#" },
    { label: "Điều khoản sử dụng", url: "#" },
    { label: "Chính sách bảo mật", url: "#" },
    { label: "Liên hệ", url: "#" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">AI Tools Hub</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Khám phá và sử dụng các công cụ AI tốt nhất để tăng năng suất, 
              tiết kiệm thời gian và tạo ra thu nhập online.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.url.replace('#', ''))}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Pháp lý</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:contact@aitoolshub.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@aitoolshub.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @aitoolshub
                </a>
              </div>
            </div>
            
            {/* Newsletter CTA */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">
                Bản tin hàng tuần
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Nhận công cụ AI mới nhất mỗi tuần
              </p>
              <Button 
                onClick={() => scrollToSection('cta')}
                size="sm" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="bg-warning/10 border border-warning/20 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Thông báo về liên kết affiliate
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Website này chứa các liên kết affiliate. Khi bạn mua sản phẩm qua các liên kết này, 
                  tôi có thể nhận được hoa hồng mà không ảnh hưởng đến giá bạn phải trả. 
                  Tôi chỉ giới thiệu những công cụ tôi đã sử dụng và tin tưởng. 
                  Sự hỗ trợ của bạn giúp tôi duy trì website và cung cấp nội dung chất lượng miễn phí.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 AI Tools Hub. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Được tạo với</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>bởi Nguyễn Minh Hải</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
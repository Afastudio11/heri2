import { ArrowRight, Play, Users, Globe, Briefcase, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-[#FAFAFA] pt-28 pb-16 px-4"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div className="flex gap-8">
            <div className="text-left">
              <p className="text-5xl md:text-6xl font-bold text-gray-900">100+</p>
              <p className="text-gray-500 text-sm">events</p>
            </div>
            <div className="text-left">
              <p className="text-5xl md:text-6xl font-bold text-gray-900">50+</p>
              <p className="text-gray-500 text-sm">clients</p>
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-3">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">50+ happy clients</span>
            <div className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer hover:bg-[#e55a5a] transition-colors">
              <Play className="w-4 h-4" /> Watch
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
            <span className="inline-flex items-center gap-4">
              good
              <span className="inline-flex gap-2">
                <span className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#1F68F5] flex items-center justify-center">
                  <Globe className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
                <span className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#1F68F5] flex items-center justify-center">
                  <Star className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
              </span>
              tools
            </span>
            <br />
            <span className="inline-flex items-center gap-4">
              drive
              <span className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-900 flex items-center justify-center">
                <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </span>
              growth
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <p className="text-gray-600 max-w-xl leading-relaxed">
            Layanan profesional untuk event 100+ event prestisius dan 50+ klien terpercaya. Profesional, cepat, dan berkualitas tinggi untuk kebutuhan bisnis Anda.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#1F68F5] hover:bg-[#1a5ad4] text-white px-8 py-6 rounded-full text-base font-semibold">
              Get Started
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 rounded-full text-base font-semibold hover:bg-gray-50">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500 text-sm font-medium">Discover us</span>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              All you need to reach the right people — powered by expertise
            </h3>
          </div>
          
          <div className="bg-[#1F68F5] rounded-3xl p-8 text-white">
            <div className="text-sm font-medium text-white/70 mb-4">UNLOCK</div>
            <p className="text-4xl font-bold mb-2">100+</p>
            <p className="text-white/80 mb-4">events & experiences</p>
            <p className="text-white/70 text-sm mb-6">
              Identify verified companies across every industry. Gain real-time insights to expand your network.
            </p>
            <Button className="bg-white text-[#1F68F5] hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-semibold">
              Try Now
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F0F5FF] rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#1F68F5]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Find anyone's</p>
                  <p className="font-bold text-gray-900">verified contact</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Emails</p>
                  <p className="text-3xl font-bold text-gray-900">5739</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

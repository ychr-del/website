import { useState, useEffect } from 'react'
import {
  Cloud, Shield, Zap, BarChart3, GitBranch, Plug, Headphones,
  Menu, X, ChevronDown, Star, Check, ArrowRight, Mail, Phone,
  MapPin, Github, Twitter, Globe, Send, Play
} from 'lucide-react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [annual, setAnnual] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const navLinks = [
    { label: '首页', href: '#hero' },
    { label: '功能', href: '#features' },
    { label: '关于', href: '#about' },
    { label: '价格', href: '#pricing' },
    { label: '评价', href: '#testimonials' },
    { label: '联系', href: '#contact' },
  ]

  const features = [
    { icon: Shield, title: '企业级安全', desc: 'AES-256 加密，多重身份验证，数据安全无忧', color: 'from-purple-500 to-purple-700' },
    { icon: Zap, title: '极速部署', desc: '一键部署到全球50+数据中心，毫秒级响应', color: 'from-amber-500 to-orange-600' },
    { icon: BarChart3, title: '智能分析', desc: 'AI 驱动数据分析引擎，实时监控业务指标', color: 'from-cyan-500 to-blue-600' },
    { icon: GitBranch, title: '弹性扩展', desc: '自动伸缩架构，按需分配，应对流量高峰', color: 'from-green-500 to-emerald-600' },
    { icon: Plug, title: '无缝集成', desc: '支持主流 API 和 SDK，与现有系统无缝对接', color: 'from-pink-500 to-rose-600' },
    { icon: Headphones, title: '专属支持', desc: '7x24小时专业技术团队，一对一服务', color: 'from-indigo-500 to-violet-600' },
  ]

  const plans = [
    {
      name: '入门版', desc: '适合个人开发者', price: annual ? 99 : 129, popular: false,
      features: ['2核CPU / 4GB内存', '50GB SSD存储', '1TB月流量', '基础DDoS防护', '邮件支持', '99.5% SLA']
    },
    {
      name: '专业版', desc: '适合成长型企业', price: annual ? 299 : 399, popular: true,
      features: ['8核CPU / 16GB内存', '200GB SSD存储', '5TB月流量', '高级DDoS防护', '7x24支持', '99.9% SLA', '自动备份', '负载均衡']
    },
    {
      name: '企业版', desc: '适合大型企业', price: annual ? 899 : 1199, popular: false,
      features: ['32核CPU / 64GB内存', '1TB SSD存储', '无限月流量', '企业级安全', '专属客户经理', '99.99% SLA', '实时备份', '全球CDN', '私有网络']
    },
  ]

  const testimonials = [
    { name: '张明', role: 'CTO · 创新科技', content: 'CloudFlow 帮助我们将部署时间从数小时缩短到几分钟，极大提升了团队效率。', avatar: 'Z' },
    { name: '李华', role: '技术总监 · 数联智能', content: '迁移后系统响应速度提升了3倍，运维成本降低了40%。非常推荐！', avatar: 'L' },
    { name: '王芳', role: 'CEO · 云端商务', content: '专业的技术支持让迁移过程非常顺利，7x24小时服务让我们安心无忧。', avatar: 'W' },
    { name: '陈伟', role: '架构师 · 未来金融', content: '安全防护体系让我们在金融行业合规审查中轻松过关，数据保障到位。', avatar: 'C' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== Navbar ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">CloudFlow</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{link.label}</a>
              ))}
              <a href="#contact" className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">开始使用</a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-600">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">{link.label}</a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-center px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium">开始使用</a>
            </div>
          </div>
        )}
      </nav>

      {/* ===== Hero ===== */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                全新 v3.0 已发布
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                智能云端
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">无限可能</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                CloudFlow 为企业提供一站式云端解决方案，助力数字化转型。高效、安全、可靠，让技术为业务赋能。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25">
                  免费试用 <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                  <Play className="w-4 h-4" /> 了解更多
                </a>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-2xl shadow-blue-900/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-2 text-xs text-gray-400">CloudFlow Dashboard</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">CPU</div>
                    <div className="text-lg font-bold text-green-600">23%</div>
                    <div className="mt-1 h-1.5 bg-gray-200 rounded-full"><div className="h-full w-1/4 bg-green-500 rounded-full"></div></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">内存</div>
                    <div className="text-lg font-bold text-blue-600">4.2G</div>
                    <div className="mt-1 h-1.5 bg-gray-200 rounded-full"><div className="h-full w-2/5 bg-blue-500 rounded-full"></div></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">流量</div>
                    <div className="text-lg font-bold text-indigo-600">1.8T</div>
                    <div className="mt-1 h-1.5 bg-gray-200 rounded-full"><div className="h-full w-3/5 bg-indigo-500 rounded-full"></div></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-2">请求量趋势 (24h)</div>
                  <div className="flex items-end gap-0.5 h-20">
                    {[40,55,35,65,50,70,45,80,60,75,55,90,70,85,65,95,75,88,60,92,78,85,70,88].map((h,i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t opacity-80 hover:opacity-100 transition-opacity" style={{height:`${h}%`}}></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs">
                  <span className="text-gray-400">最后更新: 刚刚</span>
                  <span className="text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>服务正常</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{v:'10K+',l:'企业用户'},{v:'99.9%',l:'服务可用率'},{v:'50+',l:'数据中心'},{v:'24/7',l:'技术支持'}].map(s => (
              <div key={s.l} className="text-center p-4 rounded-xl bg-white/60 backdrop-blur border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">{s.v}</div>
                <div className="text-sm text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">核心功能</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">为什么选择 CloudFlow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">我们提供全方位的云端解决方案，满足企业各种需求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">关于我们</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">十年深耕，引领云计算新时代</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                CloudFlow 成立于2016年，专注于企业级云计算服务。我们致力于为全球企业提供安全、高效、可靠的云端基础设施和解决方案。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                凭借自主研发的核心技术和遍布全球的50+数据中心，我们已服务超过10000家企业客户。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[{icon:Globe,label:'全球覆盖',val:'50+ 数据中心'},{icon:BarChart3,label:'服务客户',val:'10,000+'},{icon:Shield,label:'行业认证',val:'ISO 27001'},{icon:Zap,label:'运行时长',val:'10+ 年'}].map(item => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">系统概览</h3>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">运行中</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">服务器负载</span><span className="font-medium text-gray-900">42%</span></div>
                      <div className="h-2 bg-gray-100 rounded-full"><div className="h-full w-[42%] bg-blue-500 rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">存储使用</span><span className="font-medium text-gray-900">67%</span></div>
                      <div className="h-2 bg-gray-100 rounded-full"><div className="h-full w-[67%] bg-indigo-500 rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">网络带宽</span><span className="font-medium text-gray-900">28%</span></div>
                      <div className="h-2 bg-gray-100 rounded-full"><div className="h-full w-[28%] bg-green-500 rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">API 调用</span><span className="font-medium text-gray-900">85%</span></div>
                      <div className="h-2 bg-gray-100 rounded-full"><div className="h-full w-[85%] bg-amber-500 rounded-full"></div></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                    <div><div className="text-lg font-bold text-blue-600">2.4M</div><div className="text-xs text-gray-500">日请求数</div></div>
                    <div><div className="text-lg font-bold text-green-600">12ms</div><div className="text-xs text-gray-500">平均延迟</div></div>
                    <div><div className="text-lg font-bold text-indigo-600">99.99%</div><div className="text-xs text-gray-500">可用率</div></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">价格方案</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">灵活定价，按需选择</h2>
            <p className="text-gray-600 mb-8">选择最适合您业务的方案，随时升级或降级</p>
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm ${!annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>月付</span>
              <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-6' : ''}`}></span>
              </button>
              <span className={`text-sm ${annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>年付 <span className="text-green-600 text-xs">省25%</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map(plan => (
              <div key={plan.name} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-blue-600 text-white ring-4 ring-blue-600/20 scale-105' : 'bg-white border border-gray-200'}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold">最受欢迎</div>}
                <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>{plan.desc}</p>
                <div className="mt-4 mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>¥{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>/{annual ? '月(年付)' : '月'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  选择方案
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">客户评价</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">深受客户信赖</h2>
            <p className="text-gray-600">听听我们的客户怎么说</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map(t => (
              <div key={t.name} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm mb-6">受到行业领先企业的信赖</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['华为', '阿里巴巴', '腾讯', '字节跳动', '美团', '京东'].map(c => (
                <span key={c} className="text-gray-400 font-bold text-lg">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">联系我们</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">开始您的云端之旅</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                无论您有任何问题或需求，我们的团队随时准备为您提供帮助。填写表单或直接联系我们，我们将在24小时内回复。
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center"><Mail className="w-5 h-5 text-blue-600" /></div>
                  <div><div className="font-medium text-gray-900 text-sm">邮箱</div><div className="text-gray-500 text-sm">contact@cloudflow.com</div></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center"><Phone className="w-5 h-5 text-blue-600" /></div>
                  <div><div className="font-medium text-gray-900 text-sm">电话</div><div className="text-gray-500 text-sm">400-888-9999</div></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center"><MapPin className="w-5 h-5 text-blue-600" /></div>
                  <div><div className="font-medium text-gray-900 text-sm">地址</div><div className="text-gray-500 text-sm">北京市海淀区中关村科技园</div></div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">提交成功！</h3>
                  <p className="text-gray-600">我们会尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1.5">姓名</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="请输入您的姓名" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1.5">邮箱</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="请输入您的邮箱" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1.5">公司</label>
                    <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="请输入公司名称（选填）" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1.5">留言</label>
                    <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" placeholder="请描述您的需求..." />
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> 提交咨询
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">CloudFlow</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">为企业提供安全、高效、可靠的云端解决方案，助力数字化转型。</p>
              <div className="flex gap-3">
                {[Github, Twitter, Globe, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2">{['云计算','云存储','云数据库','CDN加速','安全防护'].map(i => <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{i}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">公司</h4>
              <ul className="space-y-2">{['关于我们','新闻动态','合作伙伴','加入我们','联系方式'].map(i => <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{i}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2">{['帮助中心','开发文档','API参考','状态页面','社区论坛'].map(i => <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{i}</a></li>)}</ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2024 CloudFlow. 保留所有权利。</p>
            <div className="flex gap-6">
              {['隐私政策','服务条款','Cookie设置'].map(i => <a key={i} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{i}</a>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

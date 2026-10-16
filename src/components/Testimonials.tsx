export default function Testimonials() {
  const testimonials = [
    {
      name: '张明',
      role: 'CTO',
      company: '创新科技',
      content: 'CloudFlow 帮助我们将部署时间从数小时缩短到几分钟，极大提升了团队的开发效率。服务稳定性也非常出色。',
      avatar: 'ZM',
      rating: 5,
    },
    {
      name: '李华',
      role: '技术总监',
      company: '数联智能',
      content: '迁移到 CloudFlow 后，我们的系统响应速度提升了3倍，运维成本降低了40%。非常推荐！',
      avatar: 'LH',
      rating: 5,
    },
    {
      name: '王芳',
      role: 'CEO',
      company: '云端商务',
      content: '专业的技术支持团队让我们的迁移过程非常顺利。7x24小时的服务让我们安心无忧。',
      avatar: 'WF',
      rating: 5,
    },
    {
      name: '陈伟',
      role: '架构师',
      company: '未来金融',
      content: 'CloudFlow 的安全防护体系让我们在金融行业合规审查中轻松过关。数据安全保障非常到位。',
      avatar: 'CW',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            客户评价
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              深受客户信赖
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            听听我们的客户怎么说
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400 text-sm"></i>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">受到行业领先企业的信赖</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['华为云', '阿里巴巴', '腾讯', '字节跳动', '美团', '京东'].map((company) => (
              <span key={company} className="text-gray-400 font-bold text-lg">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

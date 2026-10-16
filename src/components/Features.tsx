export default function Features() {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: '企业级安全',
      description: '采用 AES-256 加密技术，多重身份验证，确保您的数据安全无忧。',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: 'fas fa-rocket',
      title: '极速部署',
      description: '一键部署到全球50+数据中心，毫秒级响应，让您的业务快速上线。',
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: 'fas fa-chart-line',
      title: '智能分析',
      description: '内置 AI 驱动的数据分析引擎，实时监控业务指标，提供决策支持。',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: 'fas fa-code-branch',
      title: '弹性扩展',
      description: '自动伸缩架构，按需分配资源，轻松应对流量高峰。',
      color: 'from-amber-500 to-amber-700',
    },
    {
      icon: 'fas fa-plug',
      title: '无缝集成',
      description: '支持主流 API 和 SDK，与您的现有系统无缝对接。',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: 'fas fa-headset',
      title: '专属支持',
      description: '7x24小时专业技术团队，一对一客户经理，随时为您服务。',
      color: 'from-indigo-500 to-indigo-700',
    },
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            核心功能
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              为什么选择 CloudFlow
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            我们提供全方位的云端解决方案，满足企业各种需求
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <i className={`${feature.icon} text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

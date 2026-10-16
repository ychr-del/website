import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: '入门版',
      description: '适合个人开发者和小型项目',
      price: annual ? 99 : 129,
      features: [
        '2 核 CPU / 4GB 内存',
        '50GB SSD 存储',
        '1TB 月流量',
        '基础 DDoS 防护',
        '邮件技术支持',
        '99.5% SLA 保障',
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      name: '专业版',
      description: '适合成长型企业和团队',
      price: annual ? 299 : 399,
      features: [
        '8 核 CPU / 16GB 内存',
        '200GB SSD 存储',
        '5TB 月流量',
        '高级 DDoS 防护',
        '7x24 技术支持',
        '99.9% SLA 保障',
        '自动备份',
        '负载均衡',
      ],
      popular: true,
      gradient: 'from-purple-600 to-cyan-500',
    },
    {
      name: '企业版',
      description: '适合大型企业和关键业务',
      price: annual ? 899 : 1199,
      features: [
        '32 核 CPU / 64GB 内存',
        '1TB SSD 存储',
        '无限月流量',
        '企业级安全防护',
        '专属客户经理',
        '99.99% SLA 保障',
        '实时备份',
        '全球 CDN 加速',
        '私有网络',
        '定制开发支持',
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-700',
    },
  ]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            价格方案
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              灵活定价，按需选择
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            选择最适合您业务的方案，随时升级或降级
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>月付</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                annual ? 'bg-purple-600' : 'bg-gray-700'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${
                  annual ? 'translate-x-7' : ''
                }`}
              ></span>
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              年付 <span className="text-green-400 text-xs ml-1">省25%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-900/30 to-gray-900/80 border-2 border-purple-500/50 scale-105'
                  : 'bg-gray-800/30 border border-gray-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold">
                  最受欢迎
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">¥{plan.price}</span>
                <span className="text-gray-500 text-sm">/{annual ? '月(年付)' : '月'}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <i className="fas fa-check text-green-400 mr-3 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500'
                }`}
              >
                选择方案
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

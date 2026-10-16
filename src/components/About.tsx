export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              关于我们
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                十年深耕，引领云计算新时代
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              CloudFlow 成立于2016年，是一家专注于企业级云计算服务的技术公司。
              我们致力于为全球企业提供安全、高效、可靠的云端基础设施和解决方案。
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              凭借自主研发的核心技术和遍布全球的50+数据中心，
              我们已服务超过10000家企业客户，涵盖金融、医疗、教育、电商等多个行业。
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'fas fa-globe', label: '全球覆盖', value: '50+ 数据中心' },
                { icon: 'fas fa-users', label: '服务客户', value: '10,000+' },
                { icon: 'fas fa-award', label: '行业认证', value: 'ISO 27001' },
                { icon: 'fas fa-clock', label: '运行时长', value: '10+ 年' },
              ].map((item) => (
                <div key={item.label} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-cyan-400 text-sm`}></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-8">
              {/* Dashboard Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-500">CloudFlow Dashboard</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-800/80 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">CPU 使用率</div>
                    <div className="text-lg font-bold text-green-400">23%</div>
                    <div className="mt-2 h-1.5 bg-gray-700 rounded-full">
                      <div className="h-full w-1/4 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800/80 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">内存使用</div>
                    <div className="text-lg font-bold text-purple-400">4.2GB</div>
                    <div className="mt-2 h-1.5 bg-gray-700 rounded-full">
                      <div className="h-full w-2/5 bg-purple-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800/80 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">网络流量</div>
                    <div className="text-lg font-bold text-cyan-400">1.8TB</div>
                    <div className="mt-2 h-1.5 bg-gray-700 rounded-full">
                      <div className="h-full w-3/5 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Chart Mockup */}
                <div className="bg-gray-800/80 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-3">请求量趋势 (24h)</div>
                  <div className="flex items-end space-x-1 h-24">
                    {[40, 55, 35, 65, 50, 70, 45, 80, 60, 75, 55, 90, 70, 85, 65, 95, 75, 88, 60, 92, 78, 85, 70, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-purple-500 to-cyan-400 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">最后更新: 刚刚</span>
                  <span className="text-green-400 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                    所有服务正常运行
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

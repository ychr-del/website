export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-sm text-gray-300">全新版本 v3.0 现已发布</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            智能云端
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            无限可能
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          CloudFlow 为企业提供一站式云端解决方案，助力数字化转型。
          高效、安全、可靠，让技术为业务赋能。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:scale-105"
          >
            免费试用
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full border border-gray-600 text-gray-300 font-semibold hover:bg-gray-800/50 hover:border-gray-500 transition-all"
          >
            <i className="fas fa-play-circle mr-2"></i>
            了解更多
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10K+', label: '企业用户' },
            { value: '99.9%', label: '服务可用率' },
            { value: '50+', label: '数据中心' },
            { value: '24/7', label: '技术支持' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-gray-500"></i>
      </div>
    </section>
  )
}

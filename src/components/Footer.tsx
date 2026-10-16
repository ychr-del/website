export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <i className="fas fa-cloud text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CloudFlow
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              为企业提供安全、高效、可靠的云端解决方案，助力数字化转型。
            </p>
            <div className="flex space-x-3">
              {[
                { icon: 'fab fa-weixin', label: '微信' },
                { icon: 'fab fa-weibo', label: '微博' },
                { icon: 'fab fa-github', label: 'GitHub' },
                { icon: 'fab fa-twitter', label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">产品</h4>
            <ul className="space-y-2">
              {['云计算', '云存储', '云数据库', 'CDN 加速', '安全防护'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">公司</h4>
            <ul className="space-y-2">
              {['关于我们', '新闻动态', '合作伙伴', '加入我们', '联系方式'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">支持</h4>
            <ul className="space-y-2">
              {['帮助中心', '开发文档', 'API 参考', '状态页面', '社区论坛'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2024 CloudFlow. 保留所有权利。
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              服务条款
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Cookie 设置
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

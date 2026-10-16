import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              联系我们
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                开始您的云端之旅
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              无论您有任何问题或需求，我们的团队都随时准备为您提供帮助。
              填写表单或直接联系我们，我们将在24小时内回复。
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <i className="fas fa-envelope text-purple-400"></i>
                </div>
                <div>
                  <div className="text-white font-medium">邮箱</div>
                  <div className="text-gray-400">contact@cloudflow.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <i className="fas fa-phone text-cyan-400"></i>
                </div>
                <div>
                  <div className="text-white font-medium">电话</div>
                  <div className="text-gray-400">400-888-9999</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-pink-400"></i>
                </div>
                <div>
                  <div className="text-white font-medium">地址</div>
                  <div className="text-gray-400">北京市海淀区中关村科技园</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="rounded-2xl bg-gray-800/30 border border-gray-700/50 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-green-400 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">提交成功！</h3>
                  <p className="text-gray-400">我们会尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">姓名</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">邮箱</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">公司</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="请输入公司名称（选填）"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">留言</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="请描述您的需求..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    提交咨询
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

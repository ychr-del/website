# 🚀 部署到 Render.com 指南

## 快速部署步骤

### 1. 准备代码仓库
将项目代码推送到 GitHub、GitLab 或 Bitbucket：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 2. 在 Render.com 创建服务

1. 访问 [render.com](https://render.com) 并注册/登录
2. 点击 **"New +"** → **"Static Site"**
3. 连接你的 GitHub/GitLab 仓库
4. 配置以下设置：

| 设置项 | 值 |
|--------|-----|
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | `18.x` |

5. 点击 **"Create Static Site"**

### 3. 等待部署完成
Render 会自动构建并部署你的网站，通常需要 2-3 分钟。

### 4. 自定义域名（可选）
1. 在 Render 仪表板中进入你的服务
2. 点击 **"Settings"** → **"Custom Domains"**
3. 添加你的域名
4. 按照提示配置 DNS 记录

---

## 替代方案：使用 Render Web Service

如果你需要一个带后端的服务，可以使用 **Web Service**：

1. 添加 `render.yaml` 到项目根目录
2. 创建 `server.js` 作为简单的静态文件服务器
3. 在 Render 上创建 **Web Service**

---

## 注意事项

- Render 免费套餐的静态站点是**完全免费**的
- 支持自动 HTTPS/SSL
- 支持自定义域名
- 支持自动部署（每次 push 到主分支）
- 全球 CDN 加速

---

## 项目结构

```
├── src/
│   ├── App.tsx          # 主应用入口
│   ├── main.tsx         # React 挂载点
│   ├── index.css        # 全局样式
│   └── components/      # 组件目录
│       ├── Navbar.tsx   # 导航栏
│       ├── Hero.tsx     # 英雄区
│       ├── Features.tsx # 功能展示
│       ├── About.tsx    # 关于我们
│       ├── Pricing.tsx  # 价格方案
│       ├── Testimonials.tsx # 客户评价
│       ├── Contact.tsx  # 联系表单
│       └── Footer.tsx   # 页脚
├── index.html           # HTML 模板
├── package.json         # 依赖配置
├── vite.config.js       # Vite 配置
└── tailwind.config.js   # Tailwind 配置
```

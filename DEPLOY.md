# 🚀 部署到 Render.com 指南

## 快速部署步骤

### 第1步：将代码推送到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/你的仓库.git
git push -u origin main
```

### 第2步：在 Render.com 创建静态站点

1. 访问 [render.com](https://render.com) 并注册/登录
2. 点击右上角 **"New +"** → 选择 **"Static Site"**
3. 选择 **"Connect a repository"** → 连接你的 GitHub 仓库
4. 配置以下设置：

| 设置项 | 值 |
|--------|-----|
| **Name** | cloudflow-site（自定义名称） |
| **Branch** | main |
| **Root Directory** | （留空） |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

5. 点击 **"Create Static Site"**

### 第3步：等待部署完成

Render 会自动构建并部署你的网站，通常需要 2-3 分钟。部署完成后会生成一个 `*.onrender.com` 的免费域名。

### 第4步：自定义域名（可选）

1. 在 Render 仪表板中进入你的服务
2. 点击 **"Settings"** → **"Custom Domains"**
3. 添加你的域名
4. 按提示配置 DNS 记录（CNAME 或 A 记录）

---

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Tailwind CSS v4** - 样式
- **Vite** - 构建工具
- **Lucide React** - 图标库

## 网站包含

- ✅ 响应式导航栏（支持移动端）
- ✅ 英雄区（含仪表盘预览动画）
- ✅ 核心功能展示（6大功能）
- ✅ 关于我们（含数据可视化）
- ✅ 价格方案（月付/年付切换）
- ✅ 客户评价
- ✅ 联系表单
- ✅ 页脚导航

---

## 注意事项

- Render 免费套餐的静态站点完全免费
- 支持自动 HTTPS/SSL
- 支持自定义域名
- 支持自动部署（每次 push 到 main 分支自动触发）
- 全球 CDN 加速

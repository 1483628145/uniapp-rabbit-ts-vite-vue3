# uni-app 小兔鲜学习项目

这是一个基于 `uni-app + Vue 3 + TypeScript` 的小兔鲜商城学习项目，主要面向微信小程序端开发，同时保留 H5、App 等多端构建脚本。

项目当前已包含首页、分类、购物车、我的、登录、热门推荐、商品详情、会员资料、设置、收货地址等页面，并封装了统一请求、Pinia 登录状态、全局组件和分包路由。

## 技术栈

- `uni-app`：跨端应用框架
- `Vue 3`：页面与组件开发
- `TypeScript`：类型约束
- `Pinia`：全局状态管理
- `pinia-plugin-persistedstate`：状态持久化
- `uni-ui`：uni 生态组件库
- `Sass`：样式预处理
- `Vite`：构建工具

## 功能模块

- 首页
  - 自定义导航栏
  - 轮播图
  - 分类入口
  - 热门推荐
  - 猜你喜欢
  - 下拉刷新、触底加载

- 分类页
  - 一级分类
  - 二级分类和商品展示
  - 分类页骨架屏

- 商品页
  - 商品详情
  - 轮播图
  - 地址面板
  - 服务面板
  - 商品页骨架屏

- 热门推荐页
  - 热门推荐列表
  - 分页加载
  - 多 Tab 推荐数据

- 登录与会员中心
  - 手机号快捷登录
  - token 本地存储
  - Pinia 用户信息持久化
  - 我的页面展示头像、昵称、订单入口
  - 个人资料页
  - 头像上传
  - 设置页
  - 收货地址页

- 通用能力
  - 统一请求封装
  - 请求拦截器自动拼接基础地址
  - 自动添加 `source-client`
  - 自动携带登录 token
  - 401 自动清理登录状态并跳转登录页
  - `uploadFile` 文件上传拦截
  - `easycom` 自动导入全局组件

## 目录结构

```text
.
├─ src
│  ├─ api                    # 接口模块
│  │  ├─ category             # 分类接口
│  │  ├─ goods                # 商品详情接口
│  │  ├─ home                 # 首页接口
│  │  ├─ hot                  # 热门推荐接口
│  │  └─ login                # 登录、用户资料接口
│  ├─ components              # 全局公共组件
│  │  ├─ XtxGuess.vue          # 猜你喜欢组件
│  │  └─ XtxSwiper.vue         # 轮播图组件
│  ├─ pages                   # 主包页面
│  │  ├─ cart                  # 购物车
│  │  ├─ category              # 分类
│  │  ├─ goods                 # 商品详情
│  │  ├─ hot                   # 热门推荐
│  │  ├─ index                 # 首页
│  │  ├─ login                 # 登录
│  │  └─ my                    # 我的
│  ├─ pagesMember             # 会员中心分包
│  │  ├─ address               # 收货地址
│  │  ├─ profile               # 个人资料
│  │  └─ settings              # 设置
│  ├─ static                  # 静态资源
│  │  ├─ images                # 页面图片
│  │  └─ tabs                  # tabBar 图标
│  ├─ stores                  # Pinia 状态管理
│  │  ├─ modules
│  │  │  └─ member.ts          # 会员登录状态
│  │  └─ index.ts              # Pinia 入口
│  ├─ styles                  # 全局样式资源
│  │  └─ fonts.scss            # 图标字体
│  ├─ types                   # 全局类型声明
│  │  └─ component.d.ts        # 全局组件类型
│  ├─ utils
│  │  └─ http.ts               # 请求封装与拦截器
│  ├─ App.vue
│  ├─ main.ts
│  ├─ manifest.json
│  ├─ pages.json              # 页面路由、tabBar、分包配置
│  └─ uni.scss
├─ 开发文档                   # 学习笔记与开发文档
├─ package.json
├─ vite.config.ts
└─ tsconfig.json
```

## 页面路由

主包页面配置在 `src/pages.json` 的 `pages` 中：

```text
pages/index/index       首页
pages/category/category  分类
pages/cart/cart          购物车
pages/my/my              我的
pages/login/login        登录
pages/hot/hot            热门推荐
pages/goods/goods        商品详情
```

会员中心相关页面放在分包 `pagesMember` 中：

```text
pagesMember/settings/settings  设置
pagesMember/profile/profile    个人信息
pagesMember/address/address    收货地址
```

跳转分包页面时使用完整路径，例如：

```vue
<navigator url="/pagesMember/profile/profile">个人信息</navigator>
```

## 接口说明

请求基础地址位于 `src/utils/http.ts`：

```ts
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
```

主要接口模块：

```text
src/api/home/home.ts       首页轮播图、首页分类、热门推荐、猜你喜欢
src/api/category/category.ts 分类列表
src/api/goods/goods.ts     商品详情
src/api/hot/hot.ts         热门推荐列表
src/api/login/login.ts     登录、用户资料
```

请求封装会自动处理：

- 相对路径拼接 `baseURL`
- 请求超时
- `source-client: miniapp`
- 登录 token
- 401 登录失效处理
- `uni.request` 和 `uni.uploadFile` 拦截

## 安装依赖

推荐使用 `pnpm`：

```bash
pnpm install
```

也可以使用 `npm`：

```bash
npm install
```

## 运行项目

微信小程序端：

```bash
npm run dev:mp-weixin
```

运行后使用微信开发者工具打开：

```text
dist/dev/mp-weixin
```

H5 端：

```bash
npm run dev:h5
```

App 端：

```bash
npm run dev:app
```

## 构建项目

微信小程序端：

```bash
npm run build:mp-weixin
```

H5 端：

```bash
npm run build:h5
```

## 常用命令

```bash
npm run dev:mp-weixin     # 开发微信小程序
npm run build:mp-weixin   # 构建微信小程序
npm run dev:h5            # 开发 H5
npm run build:h5          # 构建 H5
npm run tsc               # TypeScript 类型检查
npm run lint              # ESLint 修复
```

## 开发注意事项

- `pages.json` 中分包页面必须注册后才能跳转。
- `scroll-view` 触底加载需要给滚动容器设置明确高度。
- 父组件调用子组件方法时，需要在模板上绑定 `ref`，子组件需要使用 `defineExpose` 暴露方法。
- `picker mode="date"` 的 `start`、`end`、`value` 建议使用 `YYYY-MM-DD` 字符串。
- 文件上传建议使用 `uni.uploadFile`，这样才能走项目里的上传拦截器。
- `uni.uploadFile` 不需要手动设置 `Content-Type: multipart/form-data`。
- 登录后 token 会写入本地缓存，接口请求会自动携带。

## 学习资料

- 接口文档：https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/
- 在线笔记：https://megasu.atomgit.net/uni-app-shop-note/
- 参考源码：https://gitcode.com/Megasu/uniapp-shop-vue3-ts/

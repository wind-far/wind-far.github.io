/**
 * 站点全部内容集中在这里 —— 换成别的信息只需要改这一个文件。
 * 图片放在 assets/img/ 下。
 *
 * 【隐私约定】本站不出现雇主名称、城市、在职年月等履历信息；
 * 经历只以「能力 + 成果」形式呈现。新增内容请遵守这条约定。
 */
window.SITE = {
  profile: {
    name: '吕浩',
    latin: 'LU HAO',
    user: 'lvhao',
    host: 'lvhao-mac',
    os: 'lvhao OS',
    markText: 'LH OS',
    role: 'AI Product Manager',
    tagline: '从真实问题出发，定义 AI 能力边界，把产品想法做成可体验、可验证的应用',
    proof: '前端工程背景 · AI 产品设计 × 全栈原型 × 评测迭代',
    email: 'lvhao4748@163.com',
    portrait: 'assets/img/portrait.png'
  },

  nav: [
    { id: 'about',   label: 'ABOUT',   icon: 'UserCircle' },
    { id: 'product', label: 'PRODUCT', icon: 'FolderOpen' },
    { id: 'stack',   label: 'STACK',   icon: 'Code' },
    { id: 'contact', label: 'CONTACT', icon: 'EnvelopeSimple' }
  ],

  // 开机自检
  bootLines: [
    { kind: 'title', text: 'lvhao OS v1.0.0 — Clear Light' },
    { kind: 'ok',    text: '加载产品内核 zero-to-one.core' },
    { kind: 'ok',    text: '挂载 /business （业务拆解）' },
    { kind: 'ok',    text: '挂载 /knowledge （RAG 知识库）' },
    { kind: 'ok',    text: '挂载 /agents （工具调用与任务编排）' },
    { kind: 'ok',    text: '同步能力：需求定义 → 原型实现 → 评测验收 → 反馈迭代' },
    { kind: 'ok',    text: '载入项目：树洞有只猫 · kina · ludraft · AI 旅游盲盒' },
    { kind: 'ok',    text: '载入技术底色：前端工程 · AI 辅助全栈开发' },
    { kind: 'ok',    text: '启动产品工作台 portfolio.app' },
    { kind: 'login', text: 'login: lvhao' }
  ],

  // 终端交互（kind 为 cmd 时会逐字打印）
  introLines: [
    { kind: 'cmd',  text: 'whoami' },
    { kind: 'out',  text: '吕浩 · AI Product Manager' },
    { kind: 'blank' },
    { kind: 'cmd',  text: 'cat stack.md' },
    { kind: 'out',  text: 'RAG 知识复用 · Agent / Workflow · AI 推荐' },
    { kind: 'out',  text: '引用核查 · 人工确认 · 失败兜底 · 回归评测' },
    { kind: 'out',  text: '前端工程背景 · AI 辅助开发 · 多端产品实践' },
    { kind: 'blank' },
    { kind: 'cmd',  text: 'echo "Problem → Prototype → Evaluate → Iterate"' },
    { kind: 'gold', text: 'Problem → Prototype → Evaluate → Iterate' },
    { kind: 'blank' },
    { kind: 'cmd',  text: 'open lvhao.os', cursor: true }
  ],

  // ABOUT 页右侧：产品决策系统
  decisionLanes: [
    {
      input: '业务拆解', output: '场景定义',
      detail: '从社交互动、内容创作、游戏生成和出行决策中的具体问题出发，明确目标用户、使用流程与 AI 介入的位置。',
      inputIcon: 'FolderOpen', outputIcon: 'Target', tone: 'blue'
    },
    {
      input: '知识治理', output: '能力编排',
      detail: '根据任务选择知识检索、规则推荐或 Agent 编排，定义输入、输出、引用依据、失败兜底与人工确认。',
      inputIcon: 'MagnifyingGlass', outputIcon: 'ArrowsLeftRight', tone: 'green'
    },
    {
      input: '质量评测', output: '落地闭环',
      detail: '先用原型跑通核心任务，再用检索、引用和流程回归定位问题，结合采纳、纠错与完成反馈推进迭代。',
      inputIcon: 'ChartLineUp', outputIcon: 'ArrowClockwise', tone: 'amber'
    }
  ],

  // 卡片轮播数据。kind: product（带封面）/ stack（能力栈）
  // 按用户指定展示个人项目名称与仓库；不公开雇主和履历信息。
  works: [
    /* ---------------- PRODUCT ---------------- */
    {
      id: 'treecat', index: '01', kind: 'product', meta: 'PRODUCT · 01 · AI 社交', title: '树洞有只猫',
      copy: '用漂流瓶分享心情、遇见陌生人。结合 AI 种子内容、角色生活状态与关系记忆，让冷启动阶段也有可回应的内容。',
      status: '移动端产品 · 心情分享 / AI 互动 / 树猫日记',
      cover: 'assets/img/treecat-1.jpg',
      demoNote: 'App Store 公开展示图：心情交流与树猫日记。',
      previews: [
        { src: 'assets/img/treecat-1.jpg', caption: '心情交流 · App Store 展示图' },
        { src: 'assets/img/treecat-2.jpg', caption: '树猫日记 · App Store 展示图' }
      ]
    },
    {
      id: 'kina', index: '02', kind: 'product', meta: 'PRODUCT · 02 · AI 创作', title: 'kina',
      copy: '将 Agent 对话、图片与视频生成、无限画布放进同一工作台。用节点连线组织创作流程，保留版本快照与失败重试，让创作方法可以复用。',
      status: '创作平台原型 · 多模态生成 / 画布 / 工作流',
      cover: 'assets/img/kina-preview.png',
      githubUrl: 'https://github.com/wind-far/kina',
      demoNote: '当前展示本地工作台截图，暂未提供公开在线演示；完整运行方式见 GitHub。',
      previews: [{ src: 'assets/img/kina-preview.png', caption: '工作流画布 · 文本、图片与视频生成节点' }]
    },
    {
      id: 'ludraft', index: '03', kind: 'product', meta: 'PRODUCT · 03 · AI 游戏', title: 'ludraft · 游芽',
      copy: '把游戏想法变成可试玩的 2D 网页游戏。先确认玩法，再由八角色协作推进开发、隔离构建与浏览器测试，支持版本对比、回滚和源码导出。',
      status: '本地 MVP · 八角色协作 / 试玩验证 / 版本管理',
      cover: 'assets/img/ludraft-preview.png',
      githubUrl: 'https://github.com/wind-far/wind-game-dev',
      demoNote: '当前展示本地工作台与手工示例，非真实模型生成质量证明。完整体验需本地启动，仓库提供示例导入说明。',
      previews: [
        { src: 'assets/img/ludraft-preview.png', caption: '项目画布 · 宝石花园示例与试玩入口' },
        { src: 'assets/img/ludraft-home.png', caption: '创作首页 · 任务入口与最近项目' }
      ]
    },
    {
      id: 'travel', index: '04', kind: 'product', meta: 'PRODUCT · 04 · AI 旅游', title: 'AI 旅游盲盒 · 懒得动',
      copy: '从人数、预算、心情与出行范围出发，用盲盒和 AI 推荐缩小选择，连接行程生成、本周约定与完成打卡，把“去哪玩”变成一次轻量决定。',
      status: '多端 MVP · 偏好推荐 / 行程生成 / 约定打卡',
      cover: 'assets/img/travel-preview.png',
      githubUrl: 'https://github.com/wind-far/lazy2move',
      demoNote: 'PC 端界面预览，展示旅行盲盒与目的地发现。',
      previews: [{ src: 'assets/img/travel-preview.png', caption: 'PC 首页 · 旅行盲盒与目的地发现' }]
    },

    /* ---------------- STACK ---------------- */
    {
      index: '01', kind: 'stack', tone: 'blue', symbol: 'MagnifyingGlass',
      meta: 'CAPABILITY', title: 'RAG 知识库建设',
      copy: '围绕方案复用实践文本切片、混合检索与引用返回，把适用范围、版本和发布状态纳入过滤，减少不适用知识进入答案。'
    },
    {
      index: '02', kind: 'stack', tone: 'blue', symbol: 'Target',
      meta: 'CAPABILITY', title: 'AI Agent 搭建',
      copy: '把需求输入拆成澄清、检索、生成与核验步骤，定义工具输入输出、失败兜底和人工确认条件，让过程可追踪、结果可审阅。'
    },
    {
      index: '03', kind: 'stack', tone: 'green', symbol: 'ArrowsLeftRight',
      meta: 'CAPABILITY', title: 'Multi-Agent 协同编排',
      copy: '在方案 MVP 中按任务复杂度组织澄清、检索、依赖核对与校验角色，通过规则、工具和可选模型调用协作，保留各角色执行轨迹。'
    },
    {
      index: '04', kind: 'stack', tone: 'amber', symbol: 'ArrowClockwise',
      meta: 'CAPABILITY', title: 'AI 推荐与决策设计',
      copy: '将用户偏好转成筛选约束，结合标签、语义、行为与协同召回、规则排序和推荐理由，连接结果确认与后续行动。'
    },
    {
      index: '05', kind: 'stack', tone: 'amber', symbol: 'CheckCircle',
      meta: 'CAPABILITY', title: '评测与反馈闭环',
      copy: '围绕检索命中、引用有效性、适用范围过滤和人工审批建立回归用例，把知识缺口、采纳与纠错反馈接回迭代流程。'
    },
    {
      index: '06', kind: 'stack', tone: 'slate', symbol: 'NotePencil',
      meta: 'CAPABILITY', title: 'Prompt 策略设计',
      copy: '设计角色指令、上下文变量、结构化输出与异常兜底规则，结合典型问题与错误案例持续优化。'
    },
    {
      index: '07', kind: 'stack', tone: 'green', symbol: 'Paperclip',
      meta: 'CAPABILITY', title: 'AI 内容与角色记忆',
      copy: '结合角色设定、生活状态、关系记忆和近期对话组织上下文，设计种子内容与回复策略，关注内容相关性和角色一致性。'
    },
    {
      index: '08', kind: 'stack', tone: 'slate', symbol: 'UserFocus',
      meta: 'CAPABILITY', title: 'AI 辅助全栈落地',
      copy: '基于前端工程背景，用 AI 编程工具推进 Web 与移动端原型、API 联调和问题修复，把 PRD、交互方案与验收标准落实到可运行应用。'
    }
  ],

  // CONTACT：想加更多主页，把 url 补上再往数组里追加一条即可
  channels: [
    { label: 'EMAIL', value: 'lvhao4748@163.com', href: 'mailto:lvhao4748@163.com', icon: 'EnvelopeSimple', external: false },
    { label: 'GITHUB', value: 'github.com/wind-far', href: 'https://github.com/wind-far', icon: 'GithubLogo', external: true },
    { label: '小红书', value: '我的小红书主页', href: 'https://www.xiaohongshu.com/user/profile/67875f8d000000000801e012', icon: 'UserCircle', external: true }
  ]
};

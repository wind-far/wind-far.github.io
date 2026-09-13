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
    tagline: '从业务本质拆解 AI 能力边界，把 0-1 产品从概念验证推向业务可用',
    proof: '5 年 AI 产品与前端经验 · Agent / RAG / Eval Harness 全链路',
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
    { kind: 'ok',    text: '挂载 /agents （Multi-Agent 协同）' },
    { kind: 'ok',    text: '同步能力：需求定义 → 方案设计 → 评测验收 → 上线迭代' },
    { kind: 'ok',    text: '载入方法沉淀：需求澄清框架 · 质量治理规则' },
    { kind: 'ok',    text: '载入技术底色：前端出身 · Vibe Coding 全栈原型' },
    { kind: 'ok',    text: '启动产品工作台 portfolio.app' },
    { kind: 'login', text: 'login: lvhao' }
  ],

  // 终端交互（kind 为 cmd 时会逐字打印）
  introLines: [
    { kind: 'cmd',  text: 'whoami' },
    { kind: 'out',  text: '吕浩 · AI Product Manager' },
    { kind: 'blank' },
    { kind: 'cmd',  text: 'cat stack.md' },
    { kind: 'out',  text: 'RAG 知识库 · AI Agent · Multi-Agent 编排' },
    { kind: 'out',  text: 'Loop Engineering · Eval Harness 质量闭环' },
    { kind: 'out',  text: '前端出身 · 5 年产品与工程经验 · 本科' },
    { kind: 'blank' },
    { kind: 'cmd',  text: 'echo "Agent × RAG × Multi-Agent × Eval Harness"' },
    { kind: 'gold', text: 'Agent × RAG × Multi-Agent × Eval Harness' },
    { kind: 'blank' },
    { kind: 'cmd',  text: 'open lvhao.os', cursor: true }
  ],

  // ABOUT 页右侧：产品决策系统
  decisionLanes: [
    {
      input: '业务拆解', output: '场景定义',
      detail: '从业务本质出发界定 AI 能做什么、不能做什么，把模糊诉求拆成可执行、可验收的问题。',
      inputIcon: 'FolderOpen', outputIcon: 'Target', tone: 'blue'
    },
    {
      input: '知识治理', output: '能力编排',
      detail: '把分散在文档与个人经验里的规则沉淀成可检索的知识，再用 RAG、Agent 与 Workflow 编排成能力。',
      inputIcon: 'MagnifyingGlass', outputIcon: 'ArrowsLeftRight', tone: 'green'
    },
    {
      input: '质量评测', output: '落地闭环',
      detail: '用检索命中率、回答可用率、人工介入率设质量门槛，让每次版本取舍都有可验证的依据。',
      inputIcon: 'ChartLineUp', outputIcon: 'ArrowClockwise', tone: 'amber'
    }
  ],

  // 卡片轮播数据。kind: product（带封面）/ stack（能力栈）
  // logo / 产品代号 / 雇主名称一律不得写入，项目以通用命名呈现。
  works: [
    /* ---------------- PRODUCT ---------------- */
    {
      index: '01', kind: 'product', meta: 'PRODUCT · 01 · AI AGENT', title: '方案策划 Agent 平台',
      copy: '以 Web 工作台为载体，用 RAG、Workflow、Agent 与 Copilot 把分散在文档和项目经验里的需求、配置规则与验收标准沉淀成可复用的知识资产。',
      status: '企业级内部平台 · 覆盖 10+ 客户',
      cover: 'assets/img/cover-01.png'
    },
    {
      index: '02', kind: 'product', meta: 'PRODUCT · 02 · AI 社交', title: 'AI 漂流瓶社交 App',
      copy: '以漂流瓶式心情分享为核心的 AI 轻社交产品，用 AI 种子内容、有状态数字人和多模态 AIGC 回复缓解冷启动。',
      status: 'DAU 500+ · 次日留存 35%',
      cover: 'assets/img/cover-02.png'
    },
    {
      index: '03', kind: 'product', meta: 'PRODUCT · 03 · AI 决策', title: '周末出行盲盒 App',
      copy: '用向量召回、多路推荐、规则排序与 LLM 生成，把开放式的「去哪玩」收敛成包含地点、预算与行程的可执行方案。',
      status: '推荐准确率 95% · 决策转化 17%',
      cover: 'assets/img/cover-03.png'
    },

    /* ---------------- STACK ---------------- */
    {
      index: '01', kind: 'stack', tone: 'blue', symbol: 'MagnifyingGlass',
      meta: 'CAPABILITY', title: 'RAG 知识库建设',
      copy: '知识分层、清洗切片、向量与混合检索，覆盖知识接入、召回、排序、引用返回到版本更新的完整链路。'
    },
    {
      index: '02', kind: 'stack', tone: 'blue', symbol: 'Target',
      meta: 'CAPABILITY', title: 'AI Agent 搭建',
      copy: '定义任务边界、不可自动化的风险场景与失败后的转人工机制，拆出规划、检索、分析、生成和校验节点。'
    },
    {
      index: '03', kind: 'stack', tone: 'green', symbol: 'ArrowsLeftRight',
      meta: 'CAPABILITY', title: 'Multi-Agent 协同编排',
      copy: '主 Agent 负责规划与分派，专业 Agent 分工承担澄清、检索、匹配与核验，明确职责边界、工具权限与协作终止条件。'
    },
    {
      index: '04', kind: 'stack', tone: 'amber', symbol: 'ArrowClockwise',
      meta: 'CAPABILITY', title: 'Loop Engineering',
      copy: '围绕输入、生成、评测、反馈、回归建立质量闭环，让每次迭代都有明确的质量门槛与问题归因。'
    },
    {
      index: '05', kind: 'stack', tone: 'amber', symbol: 'CheckCircle',
      meta: 'CAPABILITY', title: 'Eval Harness 建设',
      copy: '规划测试集、评测指标与回归门槛，覆盖任务达成率、工具调用合理性与协作完整性。'
    },
    {
      index: '06', kind: 'stack', tone: 'slate', symbol: 'NotePencil',
      meta: 'CAPABILITY', title: 'Prompt 策略设计',
      copy: '设计角色指令、上下文变量、结构化输出与异常兜底规则，结合典型问题与错误案例持续优化。'
    },
    {
      index: '07', kind: 'stack', tone: 'green', symbol: 'Paperclip',
      meta: 'CAPABILITY', title: '多模态 AI 场景设计',
      copy: '设计文本、图片、语音与表情包的回复路由和降级策略，兼顾人设一致性与生成可用率。'
    },
    {
      index: '08', kind: 'stack', tone: 'slate', symbol: 'UserFocus',
      meta: 'CAPABILITY', title: '跨团队协同交付',
      copy: '作为核心纽带协调研发、UI、算法、测试与交付，对齐目标与节奏，推进版本落地与客户验收。'
    }
  ],

  // CONTACT：想加更多主页，把 url 补上再往数组里追加一条即可
  channels: [
    { label: 'EMAIL', value: 'lvhao4748@163.com', href: 'mailto:lvhao4748@163.com', icon: 'EnvelopeSimple', external: false },
    { label: 'GITHUB', value: 'github.com/wind-far', href: 'https://github.com/wind-far', icon: 'GithubLogo', external: true },
    { label: '小红书', value: '我的小红书主页', href: 'https://www.xiaohongshu.com/user/profile/67875f8d000000000801e012', icon: 'UserCircle', external: true }
  ]
};

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
    { kind: 'ok',    text: '载入项目：方案复用 · AI 轻社交 · 出行决策' },
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
      detail: '从方案复用、社交冷启动和出行决策中的具体问题出发，明确目标用户、使用流程与 AI 介入的位置。',
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
  // logo / 产品代号 / 雇主名称一律不得写入，项目以通用命名呈现。
  works: [
    /* ---------------- PRODUCT ---------------- */
    {
      index: '01', kind: 'product', meta: 'PRODUCT · 01 · AI AGENT', title: '方案策划 Agent 平台',
      copy: '面向需求评审与方案复用，串联约束补全、知识检索、方案草案与引用核查；经人工确认的方案可沉淀为知识，供后续相似需求复用。',
      status: '本地 MVP · RAG / Workflow · 人工确认与反馈沉淀',
      cover: 'assets/img/cover-01.png'
    },
    {
      index: '02', kind: 'product', meta: 'PRODUCT · 02 · AI 社交', title: 'AI 漂流瓶社交 App',
      copy: '围绕心情分享、随机捞瓶与一对一聊天，用 AI 种子内容缓解空池问题；结合角色设定、生活状态、关系记忆与近期对话，生成有上下文的回复。',
      status: '个人项目 · 种子内容与有状态数字人已实现',
      cover: 'assets/img/cover-02.png'
    },
    {
      index: '03', kind: 'product', meta: 'PRODUCT · 03 · AI 决策', title: '周末出行盲盒 App',
      copy: '从人数、预算、心情和出行范围出发，通过盲盒与 AI 推荐降低选择成本，串联玩法详情、行程生成、本周约定与完成打卡；AI 不可用时保留规则兜底。',
      status: '多端 MVP · 多路召回与排序 · 推荐到打卡闭环',
      cover: 'assets/img/cover-03.png'
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

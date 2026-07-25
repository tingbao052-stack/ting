export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="workspace" aria-labelledby="page-title">
        <header className="hero">
          <div className="brand-mark" aria-hidden="true">
            <span className="brand-dot" />
            <span className="brand-orbit" />
          </div>
          <div>
            <p className="eyebrow">SCIENCE LAB · 实验档案</p>
            <h1 id="page-title">科学<span>+</span>实验库</h1>
            <p className="intro">
              记录每一次好奇、验证每一个猜想，让灵感成为可复现的实验。
            </p>
          </div>
        </header>

        <form className="experiment-form">
          <div className="field-group">
            <div className="field-number">01</div>
            <div className="field-content">
              <label htmlFor="program-name">节目名称</label>
              <p className="field-hint">为这次科学实验起一个清晰、有趣的名字</p>
              <input
                id="program-name"
                name="programName"
                type="text"
                placeholder="例如：会跳舞的葡萄干"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="field-group">
            <div className="field-number">02</div>
            <div className="field-content">
              <label htmlFor="principle">实验原理</label>
              <p className="field-hint">用简洁的语言说明现象背后的科学原理</p>
              <textarea
                id="principle"
                name="principle"
                placeholder="写下实验涉及的知识点、变量和预期现象……"
                rows={5}
              />
            </div>
          </div>

          <div className="field-group">
            <div className="field-number">03</div>
            <div className="field-content">
              <label htmlFor="props">道具清单</label>
              <p className="field-hint">逐项列出实验所需的材料与数量</p>
              <textarea
                id="props"
                name="props"
                placeholder={"例如：\n透明玻璃杯 × 1\n苏打水 × 1 瓶\n葡萄干 × 10 颗"}
                rows={5}
              />
            </div>
          </div>

          <div className="form-footer">
            <p><span aria-hidden="true">✦</span> 你的下一次发现，从这里开始</p>
            <button type="reset">清空内容 <span aria-hidden="true">↺</span></button>
          </div>
        </form>
      </section>
    </main>
  );
}

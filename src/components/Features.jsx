export default function Features() {
  const techStack = [
    { name: 'Unity 6.2', desc: 'Игровой движок' },
    { name: 'C#', desc: 'Игровая логика' },
    { name: 'React.js', desc: 'Веб-сайт' },
  ]

  // данные для блока статуса
  const statusItems = [
    { value: 'PRE-ALPHA', label: 'Текущая стадия' },
    { value: '2026',      label: 'Год разработки' },
    { value: 'PC',        label: 'Целевая платформа' },
  ]

  return (
    <section id="features" className="section-base gradient-bg">
      <div className="section-container">
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-label">04 // Технологии</span>
        </div>

        <h2 className="section-title mb-3">Технологический стек</h2>
        <p className="section-desc mb-12">
          Современные инструменты для создания качественного игрового опыта.
        </p>

        <div className="grid-tech">
          {techStack.map((tech) => (
            <div key={tech.name} className='card-base card-glow card-pad-sm'>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-desc">{tech.desc}</div>
            </div>
          ))}
        </div>

        <div className="status-block">
          <div className="status-label">// СТАТУС ПРОЕКТА</div>
          <div className="grid-status">
            {statusItems.map((item) => (
              <div key={item.value}>
                <div className="status-value">{item.value}</div>
                <div className="status-desc">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

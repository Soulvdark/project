export default function About() {
  const cards = [
    { label: "// ЖАНР", value: "MMO FPS + Survival Horror" },
    { label: "// ПЛАТФОРМА", value: "PC (Windows)" },
    { label: "// ДВИЖОК", value: "Unity 6.2" },
  ];

  return (
    <section id="about" className="section-base bg-[#0b0b0b]">
      <div className="section-container">
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-label">01 // О игре</span>
        </div>

        <h2 className="section-title mb-10">
          Что такое Project<span className="green-accent">:</span> Zone?
        </h2>

        <div className="grid-about">
          <div className="about-text">
            <p>
              Project: Zone - это многопользовательская онлайн-игра в жанре MMO
              FPS с элементами Survival Horror. На рынке практически отсутствуют
              проекты, органично сочетающие напряжённое PvP и атмосферное
              погружение в постапокалиптическую среду.
            </p>
            <p>
              Большинство MMO FPS делают ставку на соревновательность, в то
              время как Survival Horror тяготеет к одиночному прохождению. Наш
              проект - попытка исследовать и реализовать синтез этих
              мотивационных основ, создав уникальный игровой опыт.
            </p>
          </div>

          {/* карточки справа */}
          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div key={card.label} className="card-base card-glow about-card">
                <div className="card-label">{card.label}</div>
                <p className="card-value">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

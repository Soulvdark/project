export default function Gameplay() {
  // механики игры
  const mechanics = [
    {
      icon: "⚔️",
      title: "PvP и PvE",
      desc: "Сетевое взаимодействие: сражайтесь с игроками или объединяйтесь против мутантов и аномалий.",
    },
    {
      icon: "🎒",
      title: "Выживание",
      desc: "Система потребностей: голод, жажда, радиация, здоровье. Каждый ресурс на счету.",
    },
    {
      icon: "🔫",
      title: "Стрельба и бой",
      desc: "Продуманная механика передвижения и перестрелок. Тактика решает исход боя.",
    },
    {
      icon: "👥",
      title: "Взаимодействие",
      desc: "Кооперация или предательство - выбор за вами. Торговля, союзы и конфликты.",
    },
    {
      icon: "🏚️",
      title: "Исследование",
      desc: "Открытый мир с процедурно генерируемыми событиями. Поиск артефактов и ценных ресурсов.",
    },
    {
      icon: "😱",
      title: "Атмосфера ужаса",
      desc: "Ограниченная видимость, внезапные атаки и звуки - психологическое давление не отпускает.",
    },
  ];

  return (
    <section id="gameplay" className="section-base bg-[#0b0b0b]">
      <div className="section-container">
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-label">03 // Геймплей</span>
        </div>

        <h2 className="section-title mb-3">Ключевые механики</h2>
        <p className="section-desc mb-12">
          Мотивация и глубокое погружение через ограниченность ресурсов,
          опасности окружающей среды и давление постоянной неизвестности.
        </p>

        <div className="grid-mechanics">
          {mechanics.map((item) => (
            <div key={item.title} className="card-base card-glow card-pad">
              <div className="mechanic-icon">{item.icon}</div>
              <h3 className="mechanic-title">{item.title}</h3>
              <p className="mechanic-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

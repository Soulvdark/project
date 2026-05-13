export default function World() {
  const zones = [
    {
      name: "Безопасные окраины",
      danger: "Низкая",
      dangerColor: "#eab308",
      desc: "Относительно спокойные территории на границе Зоны. Подходят для новичков и сбора базовых ресурсов.",
    },
    {
      name: "Промышленная зона",
      danger: "Средняя",
      dangerColor: "#f97316",
      desc: "Заброшенные заводы и склады. Хорошая добыча, но мутанты встречаются чаще.",
    },
    {
      name: "Мёртвый центр",
      danger: "Смертельная",
      dangerColor: "#ef4444",
      desc: "Эпицентр катастрофы. Аномалии, радиация и самые опасные существа. Только для опытных сталкеров.",
    },
  ];

  return (
    <section id="world" className="section-base gradient-bg">
      <div className="section-container">
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-label">02 // Мир</span>
        </div>

        <h2 className="section-title mb-3">Постапокалиптический мир</h2>
        <p className="section-desc mb-12">
          Действие разворачивается через 15 лет после глобальной катастрофы,
          вызванной взрывом ядерной энергии. Зона разделена на несколько уровней
          опасности.
        </p>

        <div className="grid-zones">
          {zones.map((zone, i) => (
            <div
              key={zone.name}
              className="card-base card-glow card-pad relative overflow-hidden"
            >
              {/* полоска цвета опасности сверху — цвет динамический */}
              <div
                className="absolute top-0 left-0 right-0 opacity-60"
                style={{ height: "2px", background: zone.dangerColor }}
              />

              <div className="zone-index">ZONE_0{i + 1}</div>

              <div className="zone-danger-row">
                <div
                  className="pulse-dot rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    background: zone.dangerColor,
                    boxShadow: `0 0 8px ${zone.dangerColor}`,
                  }}
                />
                <span className="zone-danger-label">
                  Опасность: {zone.danger}
                </span>
              </div>

              <h3 className="zone-title">{zone.name}</h3>
              <p className="zone-desc">{zone.desc}</p>
            </div>
          ))}
        </div>

        <div className="lore-quote">
          <p className="lore-text">
            "Герои - сталкеры, искатели удачи. Они приходят в Зону в поисках
            артефактов, ресурсов и ответов. Но Зона не отпускает тех, кто зашёл
            слишком далеко."
          </p>
          <span className="lore-author"> - Из архивов Зоны</span>
        </div>
      </div>
    </section>
  );
}

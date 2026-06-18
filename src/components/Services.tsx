import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "all", label: "Все" },
  { id: "thermal", label: "Тепловое" },
  { id: "cold", label: "Холодильное" },
  { id: "tech", label: "Технологическое" },
  { id: "neutral", label: "Нейтральное" },
]

const products = [
  {
    id: 1,
    category: "thermal",
    title: "Пароконвектомат Rational SCC 61",
    description: "6 уровней GN 1/1, 6 режимов приготовления, автоматическая мойка, сенсорное управление.",
    price: "от 285 000 ₽",
    badge: "Хит продаж",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/13132407-3a2a-4f31-b162-b1dbc71360a4.jpg",
    icon: "Flame",
  },
  {
    id: 2,
    category: "thermal",
    title: "Плита индукционная 4-конф.",
    description: "Мощность 14 кВт, стеклокерамика, 4 конфорки, программируемые режимы, нержавеющий корпус.",
    price: "от 68 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/13132407-3a2a-4f31-b162-b1dbc71360a4.jpg",
    icon: "Flame",
  },
  {
    id: 3,
    category: "cold",
    title: "Шкаф холодильный ШХ-1.4",
    description: "Объём 1400 л, температура от 0 до +8°C, принудительное охлаждение, нержавеющая сталь.",
    price: "от 95 000 ₽",
    badge: "В наличии",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/eb4fe67d-6eea-4a84-8751-d048925061e3.jpg",
    icon: "Snowflake",
  },
  {
    id: 4,
    category: "cold",
    title: "Стол холодильный СХС-70-01",
    description: "Охлаждаемая поверхность для работы, 2 секции, объём 280 л, класс климата N.",
    price: "от 54 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/eb4fe67d-6eea-4a84-8751-d048925061e3.jpg",
    icon: "Snowflake",
  },
  {
    id: 5,
    category: "tech",
    title: "Мясорубка МИМ-600",
    description: "Производительность 600 кг/ч, ножи из закалённой стали, реверс, защита от перегрева.",
    price: "от 42 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/e15c2fb9-ecec-4b25-9981-d56c1d898caa.jpg",
    icon: "Cog",
  },
  {
    id: 6,
    category: "tech",
    title: "Тестомес спиральный ТС-20",
    description: "Объём дежи 20 л, 2 скорости, нержавеющий спиральный крюк, таймер, защитный кожух.",
    price: "от 38 000 ₽",
    badge: "Новинка",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/e15c2fb9-ecec-4b25-9981-d56c1d898caa.jpg",
    icon: "Cog",
  },
  {
    id: 7,
    category: "neutral",
    title: "Стол производственный СП-1200",
    description: "Столешница из нержавеющей стали 1,2 мм, полка снизу, регулируемые ножки, 1200×600×870 мм.",
    price: "от 12 000 ₽",
    badge: "В наличии",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/abb91879-3178-4da8-b3c3-1cba18c39b57.jpg",
    icon: "LayoutGrid",
  },
  {
    id: 8,
    category: "neutral",
    title: "Стеллаж кухонный СК-5",
    description: "5 полок из нержавеющей стали, нагрузка до 150 кг, разборная конструкция, 1800×400×1800 мм.",
    price: "от 18 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/abb91879-3178-4da8-b3c3-1cba18c39b57.jpg",
    icon: "LayoutGrid",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Каталог
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Категории оборудования
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-14 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-sage text-primary-foreground border-sage"
                  : "bg-transparent text-muted-foreground border-border hover:border-sage hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-background flex flex-col transition-all duration-700 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-sand">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-sage text-primary-foreground text-[10px] tracking-widest uppercase">
                    {product.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 text-white/70">
                  <Icon name={product.icon} size={18} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-foreground mb-2 leading-snug">{product.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <p className="font-serif text-xl text-sage">{product.price}</p>
                  <a
                    href="#contact"
                    className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
                  >
                    Заказать
                    <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6 text-sm">
            Не нашли нужное? Поможем подобрать под ваши задачи.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Получить консультацию
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

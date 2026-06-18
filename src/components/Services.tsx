import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "all", label: "Все" },
  { id: "dumpling", label: "Пельмени и дим-сам" },
  { id: "bun", label: "Пирожки и булочки" },
  { id: "dough", label: "Тесто и выпечка" },
  { id: "other", label: "Прочее" },
]

const products = [
  {
    id: 1,
    category: "dumpling",
    title: "Автомат для пельменей CT-JZ200",
    description: "Производительность 200 шт/мин. Автоматическое формование, регулировка веса начинки, нержавеющая сталь.",
    price: "от 185 000 ₽",
    badge: "Хит продаж",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/f1050777-fb0a-4527-af2e-42ab86e8e009.jpg",
    icon: "Utensils",
  },
  {
    id: 2,
    category: "dumpling",
    title: "Машина для шаомай CT-SM100",
    description: "Производительность 100 шт/мин. Формование открытого дим-сама, регулируемый размер, лёгкая очистка.",
    price: "от 210 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/a624d396-db45-4244-9a24-808433ea05a7.jpg",
    icon: "Utensils",
  },
  {
    id: 3,
    category: "bun",
    title: "Автомат для пирожков CT-BZ120",
    description: "Производительность 120 шт/мин. Подходит для баоцзы, пирожков, булочек с начинкой. Сенсорное управление.",
    price: "от 240 000 ₽",
    badge: "В наличии",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/fcfca6a3-f7bc-463a-beea-243c65ed4526.jpg",
    icon: "ChefHat",
  },
  {
    id: 4,
    category: "bun",
    title: "Машина для лунных пряников CT-YB80",
    description: "Автоматическое формование с начинкой, 80 шт/мин. Пресс-формы в комплекте, быстрая замена матриц.",
    price: "от 195 000 ₽",
    badge: "Новинка",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/dab8975a-f9b3-4304-8e38-86a2d31d1727.jpg",
    icon: "ChefHat",
  },
  {
    id: 5,
    category: "dough",
    title: "Тестораскаточная машина CT-DR500",
    description: "Ширина раскатки 500 мм, регулировка толщины 0.5–5 мм, производительность 80 кг/ч, нержавеющая сталь.",
    price: "от 98 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/f4e52521-233d-4654-8b02-fef77040c500.jpg",
    icon: "Layers",
  },
  {
    id: 6,
    category: "dough",
    title: "Машина для блинчиков CT-CR300",
    description: "Тонкие блинчики для спринг-роллов, диаметр 180–250 мм, 300 шт/мин, равномерный прогрев.",
    price: "от 145 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/d8dc4ea0-5a8b-4bbb-85b2-d3c706747f7a.jpg",
    icon: "Layers",
  },
  {
    id: 7,
    category: "other",
    title: "Машина для нарезки заготовок CT-YT150",
    description: "Автоматическое формование заготовок для жарки, 150 шт/мин, регулировка длины и диаметра.",
    price: "от 88 000 ₽",
    badge: "В наличии",
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/bc7dfb22-766e-4acb-ba35-9cdaf6495907.jpg",
    icon: "Scissors",
  },
  {
    id: 8,
    category: "other",
    title: "Машина для нарезки кексов CT-CS200",
    description: "Автоматическая нарезка рулетов и кексов, толщина 10–60 мм, производительность 200 резов/мин.",
    price: "от 76 000 ₽",
    badge: null,
    image: "https://cdn.poehali.dev/projects/19b8544a-0199-4a42-a82a-91468f04ee3e/files/b8ae87a1-f79a42d6-be6e-47c10afac281.jpg",
    icon: "Scissors",
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
            Shanghai Chengtao Intelligent Equipment
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Каталог оборудования
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
            Не нашли нужную модель? Поможем подобрать под ваш объём производства.
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
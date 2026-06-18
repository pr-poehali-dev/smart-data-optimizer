export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-xl tracking-wide text-foreground mb-1">Shanghai Chengtao</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Intelligent Equipment Co., Ltd</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Производитель автоматического оборудования для пищевой промышленности. Пельменные машины, автоматы для пирожков, тестораскатки и многое другое.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                О нас
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Каталог
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                Как заказать
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contacts */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Контакты</p>
            <nav className="flex flex-col gap-3">
              <a href="tel:+8613524006802" className="text-sm text-foreground hover:text-sage transition-colors">
                +86 135 2400 6802
              </a>
              <a href="mailto:chengtaogj@stmfood.com" className="text-sm text-foreground hover:text-sage transition-colors">
                chengtaogj@stmfood.com
              </a>
              <a href="https://www.stmfood.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                stmfood.com
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Политика
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Условия
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shanghai Chengtao Intelligent Equipment Co., Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Shanghai, China · stmfood.com</p>
        </div>
      </div>
    </footer>
  )
}
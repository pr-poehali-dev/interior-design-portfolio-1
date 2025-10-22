import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => {
      if (observerRef.current) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Апартаменты премиум-класса',
      category: 'Жилые помещения',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg',
      description: 'Современный дизайн интерьера с панорамными окнами'
    },
    {
      id: 2,
      title: 'Бизнес-центр',
      category: 'Коммерческие помещения',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/a08ab1f5-8a51-4081-a631-f293a26b55f6.jpg',
      description: 'Офисные пространства с эргономичным дизайном'
    },
    {
      id: 3,
      title: 'Отель класса люкс',
      category: 'Гостиницы и рестораны',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/33581fb3-b40c-4816-8db9-e2a8c5811d3d.jpg',
      description: 'Премиальный лобби с минималистичной элегантностью'
    }
  ];

  const services = [
    'Архитектурное проектирование',
    'Дизайн интерьера',
    'Консалтинг',
    'Авторский надзор'
  ];

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white border-b border-gray-200' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="text-2xl lg:text-3xl font-light tracking-wider">
              KONONENKO
            </div>
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <a href="#projects" className="text-sm lg:text-base font-light hover:opacity-60 transition-opacity">
                Проекты
              </a>
              <a href="#services" className="text-sm lg:text-base font-light hover:opacity-60 transition-opacity">
                Услуги
              </a>
              <a href="#about" className="text-sm lg:text-base font-light hover:opacity-60 transition-opacity">
                О бюро
              </a>
              <a href="#contact" className="text-sm lg:text-base font-light hover:opacity-60 transition-opacity">
                Контакты
              </a>
            </nav>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10"></div>
        <img
          src="https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wider">
            АРХИТЕКТУРА<br />И ДИЗАЙН
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            Создаем современные пространства для жизни и бизнеса
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={32} className="opacity-60" />
        </div>
      </section>

      <section id="projects" data-animate className={`py-24 lg:py-32 transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 lg:mb-24 tracking-wider">
            Проекты
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 delay-${(project.id - 1) * 200} ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(project.id - 1) * 200}ms` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-light text-gray-500 tracking-wider uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-light tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-base font-light text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" data-animate className={`py-24 lg:py-32 bg-gray-50 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 lg:mb-24 tracking-wider">
            Услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className={`group transition-all duration-700 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-sm font-light text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-light tracking-wide group-hover:opacity-60 transition-opacity">
                  {service}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-16 lg:mt-24">
            <p className="text-lg lg:text-xl font-light text-gray-700 max-w-3xl leading-relaxed">
              Мы создаем современный дизайн и трендовую архитектуру для жилых и коммерческих помещений. 
              Офисы и бизнес-центры, гостиницы и рестораны, апартаменты бизнес и премиум-класса.
            </p>
          </div>
        </div>
      </section>

      <section id="about" data-animate className={`py-24 lg:py-32 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-wider">
                О бюро
              </h2>
              <div className="space-y-6 text-lg font-light text-gray-700 leading-relaxed">
                <p>
                  Архитектурное бюро KONONENKO — это команда профессионалов, 
                  создающих пространства, в которых хочется жить и работать.
                </p>
                <p>
                  Наш подход основан на балансе функциональности и эстетики, 
                  внимании к деталям и индивидуальном подходе к каждому проекту.
                </p>
                <p>
                  Мы работаем с современными технологиями и материалами, 
                  создавая интерьеры и архитектурные решения мирового уровня.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-light mb-2">150+</div>
                  <p className="text-sm font-light text-gray-600 tracking-wider uppercase">
                    Реализованных проектов
                  </p>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-light mb-2">12</div>
                  <p className="text-sm font-light text-gray-600 tracking-wider uppercase">
                    Лет опыта
                  </p>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-light mb-2">45</div>
                  <p className="text-sm font-light text-gray-600 tracking-wider uppercase">
                    Специалистов
                  </p>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-light mb-2">8</div>
                  <p className="text-sm font-light text-gray-600 tracking-wider uppercase">
                    Наград
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" data-animate className={`py-24 lg:py-32 bg-black text-white transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-wider">
                Контакты
              </h2>
              <div className="space-y-6 text-lg font-light">
                <div>
                  <p className="text-sm opacity-60 mb-2 tracking-wider uppercase">Адрес</p>
                  <p>Москва, ул. Пример, д. 1</p>
                </div>
                <div>
                  <p className="text-sm opacity-60 mb-2 tracking-wider uppercase">Телефон</p>
                  <a href="tel:+74951234567" className="hover:opacity-60 transition-opacity">
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div>
                  <p className="text-sm opacity-60 mb-2 tracking-wider uppercase">Email</p>
                  <a href="mailto:info@kononenko.pro" className="hover:opacity-60 transition-opacity">
                    info@kononenko.pro
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-base font-light tracking-wider"
                >
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-light tracking-wider">
              KONONENKO
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <p className="text-sm font-light opacity-60">
              © 2024 KONONENKO. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
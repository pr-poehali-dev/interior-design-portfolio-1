import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const carouselImages = [
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/a08ab1f5-8a51-4081-a631-f293a26b55f6.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/33581fb3-b40c-4816-8db9-e2a8c5811d3d.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/9d6a5532-6446-4a82-b97b-e3c6358b9e4c.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/86128f5b-4ade-46db-8b2d-1063f18c15c5.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/2442bbfd-afb1-4946-8077-eea71e91c311.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/a08ab1f5-8a51-4081-a631-f293a26b55f6.jpg',
  ];

  const sections = [
    {
      id: 'visualization',
      title: 'Визуализация',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/9d6a5532-6446-4a82-b97b-e3c6358b9e4c.jpg',
      span: 'full',
      link: '/visualization'
    },
    {
      id: 'residential',
      title: 'Жилые интерьеры',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg',
      span: 'half',
      link: '/residential'
    },
    {
      id: 'cafes',
      title: 'Кафе и общественные пространства',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/86128f5b-4ade-46db-8b2d-1063f18c15c5.jpg',
      span: 'half',
      link: '/cafes'
    },
    {
      id: 'furniture',
      title: 'Мебель',
      image: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/2442bbfd-afb1-4946-8077-eea71e91c311.jpg',
      span: 'furniture',
      link: '/furniture'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/50 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl lg:text-3xl font-light tracking-[0.3em] uppercase">
              Shendrik.Co
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/visualization" className="text-sm font-light hover:opacity-60 transition-opacity tracking-wide">
                Визуализация
              </Link>
              <Link to="/residential" className="text-sm font-light hover:opacity-60 transition-opacity tracking-wide">
                Дизайн жилых интерьеров
              </Link>
              <Link to="/cafes" className="text-sm font-light hover:opacity-60 transition-opacity tracking-wide">
                Кафе и общественные пространства
              </Link>
              <Link to="/furniture" className="text-sm font-light hover:opacity-60 transition-opacity tracking-wide">
                Дизайн мебели
              </Link>
              <a href="#pricing" className="text-sm font-light hover:opacity-60 transition-opacity tracking-wide">
                Стоимость услуг
              </a>
              <a href="#team" className="text-sm font-light hover:opacity-60 transition-opacity tracking-wide">
                Наша Команда
              </a>
            </nav>
            <button className="lg:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden mt-20" style={{ height: 'calc(100vh / 1.5)' }}>
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {carouselImages.map((image, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={scrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white transition-all p-3 rounded-full"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white transition-all p-3 rounded-full"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/5b5cf984-b500-4662-8703-e1579686c444.jpg" 
                alt="Shendrik.Co Logo" 
                className="w-32 h-32 lg:w-48 lg:h-48 object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-light mb-6 tracking-wide">
                О бюро
              </h2>
              <div className="space-y-4 text-base lg:text-lg font-light text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  Архитектурное бюро Shendrik.Co — это команда профессионалов, создающих пространства, 
                  в которых хочется жить и работать.
                </p>
                <p>
                  Мы специализируемся на визуализации архитектурных проектов, дизайне жилых и общественных 
                  интерьеров, а также разработке авторской мебели. Наш подход основан на балансе функциональности 
                  и эстетики, внимании к деталям и индивидуальном подходе к каждому проекту.
                </p>
                <p>
                  Работаем с современными технологиями и материалами, создавая интерьеры и архитектурные 
                  решения мирового уровня.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 lg:py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-1">
            <Link
              to="/visualization"
              className="block relative overflow-hidden group w-full"
              id="visualization"
            >
              <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/9d6a5532-6446-4a82-b97b-e3c6358b9e4c.jpg"
                  alt="Визуализация"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl lg:text-4xl font-light text-white tracking-wide">
                    Визуализация
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              to="/residential"
              className="block relative overflow-hidden group w-full"
              id="residential"
            >
              <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg"
                  alt="Жилые интерьеры"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl lg:text-4xl font-light text-white tracking-wide">
                    Жилые интерьеры
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-0 lg:py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-1">
            <Link
              to="/cafes"
              className="block relative overflow-hidden group w-full"
              id="cafes"
            >
              <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/86128f5b-4ade-46db-8b2d-1063f18c15c5.jpg"
                  alt="Кафе и общественные пространства"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl lg:text-4xl font-light text-white tracking-wide">
                    Кафе и общественные пространства
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              to="/furniture"
              className="block relative overflow-hidden group w-full"
              id="furniture"
            >
              <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/2442bbfd-afb1-4946-8077-eea71e91c311.jpg"
                  alt="Мебель"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl lg:text-4xl font-light text-white tracking-wide">
                    Мебель
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-12 tracking-wide">
            Стоимость услуг
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 space-y-4">
              <h3 className="text-2xl font-light tracking-wide">Визуализация</h3>
              <p className="text-gray-600 font-light">От 15 000 ₽ за изображение</p>
            </div>
            <div className="bg-white p-8 space-y-4">
              <h3 className="text-2xl font-light tracking-wide">Дизайн интерьера</h3>
              <p className="text-gray-600 font-light">От 3 000 ₽ за м²</p>
            </div>
            <div className="bg-white p-8 space-y-4">
              <h3 className="text-2xl font-light tracking-wide">Дизайн мебели</h3>
              <p className="text-gray-600 font-light">Индивидуальный расчет</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-12 tracking-wide">
            Наша Команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="space-y-4">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={`https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/5b5cf984-b500-4662-8703-e1579686c444.jpg`}
                    alt={`Team member ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide">Имя Фамилия</h3>
                  <p className="text-gray-600 font-light text-sm">Должность</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white text-black border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-light tracking-[0.3em] uppercase mb-4">
                Shendrik.Co
              </div>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4 tracking-wide">Контакты</h4>
              <div className="space-y-2 text-sm font-light text-gray-600">
                <p>+7 (XXX) XXX-XX-XX</p>
                <p>info@shendrik.co</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4 tracking-wide">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-60 transition-opacity text-black">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:opacity-60 transition-opacity text-black">
                  <Icon name="Facebook" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
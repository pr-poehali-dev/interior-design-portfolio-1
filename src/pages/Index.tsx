import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioItems = [
    {
      image: "/img/a7cce8c1-5c92-40cc-b648-b28fc8f0c509.jpg",
      title: "Современная гостиная",
      category: "Жилой интерьер",
      area: "120 м²"
    },
    {
      image: "/img/974d681f-f7dd-46c6-9c34-6ac5ec1ce74f.jpg",
      title: "Скандинавская спальня",
      category: "Жилой интерьер",
      area: "40 м²"
    },
    {
      image: "/img/cfc3addc-3d43-47b4-9661-d85be257a0bb.jpg",
      title: "Минималистичная кухня",
      category: "Кухня",
      area: "25 м²"
    }
  ];

  const services = [
    {
      icon: "Home",
      title: "Дизайн интерьера",
      description: "Полное планирование и дизайн жилых и коммерческих пространств"
    },
    {
      icon: "Palette",
      title: "3D-визуализация",
      description: "Фотореалистичные визуализации для демонстрации проекта"
    },
    {
      icon: "Layout",
      title: "Планировка",
      description: "Оптимизация планировки для максимального комфорта"
    },
    {
      icon: "ShoppingBag",
      title: "Подбор мебели",
      description: "Комплектация интерьера мебелью и декором"
    }
  ];

  const pricing = [
    {
      name: "Базовый",
      price: "30 000",
      features: [
        "Планировочное решение",
        "Основные 3D-виды",
        "Подбор материалов",
        "Консультация дизайнера"
      ]
    },
    {
      name: "Стандарт",
      price: "50 000",
      features: [
        "Все из базового пакета",
        "Детальная визуализация",
        "Чертежи для ремонта",
        "Авторский надзор",
        "Подбор освещения"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "80 000",
      features: [
        "Все из стандартного пакета",
        "Комплектация мебелью",
        "Индивидуальный декор",
        "Полное сопровождение проекта",
        "3D-тур по интерьеру"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 tracking-tight">
              Дизайн
              <br />
              <span className="text-primary font-semibold">Интерьера</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Создаем пространства, которые отражают вашу индивидуальность
              и приносят вдохновение каждый день
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Начать проект
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши последние проекты в области дизайна интерьера
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Icon name="Square" size={16} className="mr-2" />
                    <span>{item.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл работ от идеи до реализации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий пакет услуг для вашего проекта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative p-8 border-2 transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200 hover:border-primary/50'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-light text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">₽/м²</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Выбрать пакет
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и обсуждения деталей вашего будущего интерьера
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (999) 123-45-67</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">hello@designer.ru</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-gray-300">Москва, ул. Дизайнерская, 12</p>
              </div>
            </div>
            
            <Separator className="bg-gray-700 mb-12" />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Договор и чек-лист ТЗ</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Для вашего удобства мы подготовили типовой договор и подробный чек-лист 
                для составления технического задания. Это поможет нам лучше понять ваши 
                потребности и создать идеальный интерьер.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать договор
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Чек-лист ТЗ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Студия дизайна интерьера. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
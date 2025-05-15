
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Установка платежных терминалов",
    description: "Быстрая и профессиональная установка платежных терминалов любых типов",
    icon: "Terminal"
  },
  {
    title: "Техническое обслуживание",
    description: "Регулярное обслуживание и ремонт терминалов с минимальными простоями",
    icon: "Settings"
  },
  {
    title: "Интеграция платежных систем",
    description: "Подключение к различным платежным системам и сервисам",
    icon: "Link"
  },
  {
    title: "Консультации и поддержка",
    description: "Круглосуточная техническая поддержка и консультации по вопросам эксплуатации",
    icon: "HeadphonesIcon"
  }
];

const projects = [
  {
    title: "Сеть терминалов в ТРЦ «Галерея Чижова»",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Платежные системы для АЗС Воронежской области",
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Терминалы самообслуживания для сети аптек",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icon name="Terminal" className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-blue-800">Р-Терминал Воронеж</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
              <li><a href="#main" className="text-gray-700 hover:text-blue-600 px-2 py-1">Главная</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600 px-2 py-1">О нас</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-blue-600 px-2 py-1">Наши услуги</a></li>
              <li><a href="#projects" className="text-gray-700 hover:text-blue-600 px-2 py-1">Примеры работ</a></li>
              <li><a href="#contacts" className="text-gray-700 hover:text-blue-600 px-2 py-1">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Главный экран */}
        <section id="main" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Платежные терминалы для вашего бизнеса</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Р-Терминал Воронеж — лидер в установке и обслуживании платежных терминалов в Воронеже и области
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-100"
              >
                Наши услуги
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        {/* О нас */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">О нас</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
                  alt="Офис компании" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Р-Терминал Воронеж</h3>
                <p className="text-gray-600 mb-4">
                  Мы специализируемся на установке, настройке и обслуживании платежных терминалов и систем самообслуживания для бизнеса любого масштаба. Нашими клиентами являются ритейл-сети, автозаправочные станции, медицинские учреждения и многие другие организации.
                </p>
                <p className="text-gray-600 mb-6">
                  С 2010 года мы успешно реализовали более 500 проектов по всей Воронежской области, устанавливая надежное оборудование и обеспечивая его бесперебойную работу.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                    <div className="text-gray-500">лет опыта</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-500">реализованных проектов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Наши услуги */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Примеры работ */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Примеры работ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Контакты</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="MapPin" className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-medium">Адрес:</div>
                      <address className="not-italic text-gray-600">
                        г. Воронеж, ул. Ленина, 104Б, офис 303
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Phone" className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-medium">Телефон:</div>
                      <div className="text-gray-600">+7 (473) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Mail" className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-medium">Email:</div>
                      <div className="text-gray-600">info@r-terminal-vrn.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Clock" className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-medium">Время работы:</div>
                      <div className="text-gray-600">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Форма обратной связи</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-gray-700">Ваше имя</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 text-gray-700">Сообщение</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал сайта */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Icon name="Terminal" className="h-6 w-6 text-blue-400 mr-2" />
              <span className="font-semibold">Р-Терминал Воронеж</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2023 Р-Терминал Воронеж. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

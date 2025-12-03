import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const attractions = [
    {
      id: 1,
      name: 'Золотой мост',
      description: 'Вантовый мост длиной 1388 метров через бухту Золотой Рог. Открыт в 2012 году к саммиту АТЭС.',
      address: 'Бухта Золотой Рог',
      category: 'Архитектура',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/f3c91a13-c751-4665-a793-16555ddda1b7.jpg'
    },
    {
      id: 2,
      name: 'Фуникулёр',
      description: 'Единственная канатная дорога в России для городских перевозок. Работает с 1962 года.',
      address: 'ул. Пушкинская, 25',
      category: 'Транспорт',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/2c73080d-3787-437b-b4d5-35f21e3698b1.jpg'
    },
    {
      id: 3,
      name: 'Владивостокская крепость',
      description: 'Оборонительные укрепления конца XIX века. Открытый музей с батареями и фортами.',
      address: 'Батарейная ул., 4а',
      category: 'История',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/4e4b8309-0ab9-4e26-910e-497e531ffb0d.jpg'
    },
    {
      id: 4,
      name: 'Остров Русский',
      description: 'Крупнейший остров в заливе Петра Великого. Кампус ДВФУ, пляжи, форты.',
      address: 'Остров Русский',
      category: 'Природа',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/f3c91a13-c751-4665-a793-16555ddda1b7.jpg'
    },
    {
      id: 5,
      name: 'Набережная Цесаревича',
      description: 'Центральная набережная длиной 2 км с видом на бухту Золотой Рог и порт.',
      address: 'Набережная Цесаревича',
      category: 'Прогулки',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/2c73080d-3787-437b-b4d5-35f21e3698b1.jpg'
    },
    {
      id: 6,
      name: 'Маяк Токаревский',
      description: 'Действующий маяк 1876 года постройки на мысе Токаревского. Закаты с видом на море.',
      address: 'мыс Токаревский',
      category: 'Природа',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/4e4b8309-0ab9-4e26-910e-497e531ffb0d.jpg'
    },
    {
      id: 7,
      name: 'Ворошиловская батарея',
      description: 'Береговая артиллерийская батарея с орудиями калибра 305 мм. Музейный комплекс.',
      address: 'ул. Батарейная, 4А',
      category: 'История',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/4e4b8309-0ab9-4e26-910e-497e531ffb0d.jpg'
    },
    {
      id: 8,
      name: 'Орлиное гнездо',
      description: 'Смотровая площадка на сопке Орлиная. Памятник Кириллу и Мефодию, панорама на 360°.',
      address: 'сопка Орлиная',
      category: 'Панорамы',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/f3c91a13-c751-4665-a793-16555ddda1b7.jpg'
    },
    {
      id: 9,
      name: 'Русский мост',
      description: 'Вантовый мост на остров Русский длиной 1885 м. Самый длинный вантовый мост в России.',
      address: 'о. Русский',
      category: 'Архитектура',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/2c73080d-3787-437b-b4d5-35f21e3698b1.jpg'
    },
    {
      id: 10,
      name: 'Покровский парк',
      description: 'Исторический парк в центре города с аллеями, скульптурами и Покровским собором.',
      address: 'ул. Океанский проспект',
      category: 'Парки',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/f3c91a13-c751-4665-a793-16555ddda1b7.jpg'
    },
    {
      id: 11,
      name: 'Приморский океанариум',
      description: 'Один из крупнейших океанариумов мира на о. Русский. Морские животные, дельфинарий.',
      address: 'о. Русский, ул. Академика Касьянова, 25',
      category: 'Развлечения',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/2c73080d-3787-437b-b4d5-35f21e3698b1.jpg'
    },
    {
      id: 12,
      name: 'Стеклянный пляж',
      description: 'Уникальный пляж с разноцветными стеклянными камушками в бухте Стеклянная.',
      address: 'Бухта Стеклянная, Уссурийский залив',
      category: 'Природа',
      image: 'https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/4e4b8309-0ab9-4e26-910e-497e531ffb0d.jpg'
    }
  ];

  const routes = [
    {
      id: 1,
      name: 'Центральный маршрут',
      duration: '3-4 часа',
      distance: '5 км',
      difficulty: 'Легкий',
      points: ['Площадь Борцов Революции', 'Фуникулёр', 'Орлиное гнездо', 'Набережная']
    },
    {
      id: 2,
      name: 'Морской маршрут',
      duration: '5-6 часов',
      distance: '8 км',
      difficulty: 'Средний',
      points: ['Набережная Спортивной гавани', 'Золотой мост', 'Остров Русский', 'Маяк Токаревский']
    },
    {
      id: 3,
      name: 'Исторический маршрут',
      duration: '4-5 часов',
      distance: '6 км',
      difficulty: 'Средний',
      points: ['Владивостокская крепость', 'Покровский парк', 'Триумфальная арка', 'Вокзал']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Compass" size={32} className="animate-pulse" />
              <h1 className="text-2xl font-bold">Владивосток</h1>
            </div>
            <div className="flex gap-4">
              <Button
                variant={activeSection === 'home' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="text-primary-foreground hover:text-secondary-foreground"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'attractions' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('attractions')}
                className="text-primary-foreground hover:text-secondary-foreground"
              >
                <Icon name="Map" size={18} className="mr-2" />
                Места
              </Button>
              <Button
                variant={activeSection === 'routes' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('routes')}
                className="text-primary-foreground hover:text-secondary-foreground"
              >
                <Icon name="Route" size={18} className="mr-2" />
                Маршруты
              </Button>
              <Button
                variant={activeSection === 'map' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('map')}
                className="text-primary-foreground hover:text-secondary-foreground"
              >
                <Icon name="MapPin" size={18} className="mr-2" />
                Карта
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {activeSection === 'home' && (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/ec795877-c69f-4407-99c2-257fdcf0d48d/files/f3c91a13-c751-4665-a793-16555ddda1b7.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
          </div>
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h2 className="text-6xl font-bold mb-4">Исследуй Владивосток</h2>
            <p className="text-2xl mb-8 max-w-2xl mx-auto">
              Открой для себя край России на берегу Тихого океана
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                onClick={() => setActiveSection('attractions')}
                className="bg-secondary hover:bg-secondary/90 text-lg"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать приключение
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setActiveSection('map')}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white text-lg"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Открыть карту
              </Button>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'attractions' && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">Достопримечательности</h2>
            <p className="text-xl text-muted-foreground">Места, которые стоит посетить</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card
                key={attraction.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary">
                    {attraction.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{attraction.name}</h3>
                  <p className="text-muted-foreground mb-3">{attraction.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>{attraction.address}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'routes' && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">Маршруты</h2>
            <p className="text-xl text-muted-foreground">Готовые планы для исследования города</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <Card
                key={route.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{route.name}</h3>
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <Icon name="Clock" size={20} className="mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">{route.duration}</p>
                    </div>
                    <div className="text-center">
                      <Icon name="MapPin" size={20} className="mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">{route.distance}</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Activity" size={20} className="mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">{route.difficulty}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Route" size={16} />
                      Точки маршрута:
                    </h4>
                    <ul className="space-y-1">
                      {route.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="ChevronRight" size={14} className="text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'map' && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">Карта города</h2>
            <p className="text-xl text-muted-foreground">Все достопримечательности на одной карте</p>
          </div>
          <Card className="overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              <div className="relative h-[600px] bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl text-muted-foreground mb-6">
                    Интерактивная карта будет здесь
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto px-4">
                    {attractions.map((attraction) => (
                      <div
                        key={attraction.id}
                        className="p-4 bg-background rounded-lg border hover:border-primary transition-colors cursor-pointer"
                      >
                        <Icon name="MapPin" size={20} className="mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium text-center">{attraction.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Compass" size={24} />
            <h3 className="text-xl font-bold">Владивосток</h3>
          </div>
          <p className="text-sm opacity-90">Путеводитель по городу у Тихого океана</p>
          <div className="flex gap-4 justify-center mt-6">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
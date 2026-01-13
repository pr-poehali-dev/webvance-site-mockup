import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'catalog' | 'profile' | 'support';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setPage={setCurrentPage} />;
      case 'catalog':
        return <CatalogPage />;
      case 'profile':
        return <ProfilePage />;
      case 'support':
        return <SupportPage />;
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20">
      <div className="animate-fade-in">
        {renderPage()}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-border/50 shadow-lg z-50">
        <div className="max-w-md mx-auto flex items-center justify-around py-2">
          <NavButton
            icon="Home"
            label="Главная"
            active={currentPage === 'home'}
            onClick={() => setCurrentPage('home')}
          />
          <NavButton
            icon="Package"
            label="Пакеты"
            active={currentPage === 'catalog'}
            onClick={() => setCurrentPage('catalog')}
          />
          <NavButton
            icon="User"
            label="Профиль"
            active={currentPage === 'profile'}
            onClick={() => setCurrentPage('profile')}
          />
          <NavButton
            icon="MessageCircle"
            label="Поддержка"
            active={currentPage === 'support'}
            onClick={() => setCurrentPage('support')}
          />
        </div>
      </nav>
    </div>
  );
};

const NavButton = ({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
      active ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
    }`}
  >
    <Icon name={icon} size={22} className={active ? 'text-primary' : ''} />
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const HomePage = ({ setPage }: { setPage: (page: Page) => void }) => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <div className="flex items-center gap-3 mb-8 animate-slide-up">
      <div className="h-16 w-16 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-primary shrink-0 shadow-lg">
        <img 
          src="https://cdn.poehali.dev/projects/47e7795a-abf5-42d1-b5c6-448757d85799/files/3f2853b2-374a-44d5-b5da-2d96646ed266.jpg" 
          alt="Webvance" 
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Webvance</h1>
        <p className="text-sm text-muted-foreground">Разработка современных сайтов</p>
      </div>
    </div>

    <Card className="p-6 mb-6 glass-effect bg-gradient-to-br from-primary/10 to-secondary/10 border-0 shadow-xl hover-lift">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white rounded-xl shadow-md">
          <Icon name="Sparkles" size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-2">Создаём сайты под ключ</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            От лендингов до крупных корпоративных порталов. Адаптивный дизайн, SEO и быстрая загрузка
          </p>
        </div>
      </div>
    </Card>

    <div className="space-y-3 mb-6">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-2">Наши преимущества</h3>
      
      <Card className="p-4 hover-lift cursor-pointer border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Zap" size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Быстрый запуск</p>
            <p className="text-xs text-muted-foreground">Сайт за 5-10 дней</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 hover-lift cursor-pointer border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/10 rounded-lg">
            <Icon name="Palette" size={20} className="text-secondary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Современный дизайн</p>
            <p className="text-xs text-muted-foreground">Адаптивная вёрстка под все устройства</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 hover-lift cursor-pointer border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Shield" size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Гарантия качества</p>
            <p className="text-xs text-muted-foreground">3 месяца бесплатной поддержки</p>
          </div>
        </div>
      </Card>
    </div>

    <Button 
      onClick={() => setPage('catalog')}
      className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
    >
      Выбрать пакет
      <Icon name="ArrowRight" size={20} className="ml-2" />
    </Button>
  </div>
);

const CatalogPage = () => {
  const packages = [
    {
      name: 'Базовый',
      price: '3 900',
      icon: 'FileText',
      color: 'bg-slate-500',
      popular: false,
      features: [
        'Одностраничный сайт',
        'Адаптивная вёрстка',
        'Базовая SEO-оптимизация',
        'Форма обратной связи',
        'Хостинг на 1 месяц'
      ]
    },
    {
      name: 'Start',
      price: '12 000',
      icon: 'Rocket',
      color: 'bg-blue-500',
      popular: false,
      features: [
        'До 5 страниц',
        'Современный дизайн',
        'SEO-оптимизация',
        'Мобильная версия',
        'Интеграция с соцсетями',
        'Хостинг на 3 месяца'
      ]
    },
    {
      name: 'Premium',
      price: '32 000',
      icon: 'Crown',
      color: 'bg-primary',
      popular: true,
      features: [
        'До 10 страниц',
        'Уникальный дизайн',
        'Продвинутая SEO',
        'Админ-панель',
        'Анимации и эффекты',
        'Интеграции (CRM, платежи)',
        'Хостинг на 6 месяцев'
      ]
    },
    {
      name: 'Premium +',
      price: '80 000',
      icon: 'Gem',
      color: 'bg-gradient-to-br from-primary to-secondary',
      popular: false,
      features: [
        'Неограниченное число страниц',
        'Полностью кастомный дизайн',
        'Сложные интеграции',
        'Личный кабинет пользователя',
        'API разработка',
        'Техподдержка 24/7',
        'Хостинг на 1 год'
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto px-4 pt-8 pb-4">
      <h1 className="text-2xl font-bold mb-2 animate-slide-up">Выберите пакет</h1>
      <p className="text-sm text-muted-foreground mb-6">Подберём решение под ваши задачи</p>
      
      <div className="space-y-4">
        {packages.map((pkg, index) => (
          <Card 
            key={pkg.name} 
            className={`overflow-hidden border-0 shadow-lg hover-lift animate-scale-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative p-6 bg-gradient-to-br from-card to-muted/20">
              {pkg.popular && (
                <Badge className="absolute top-4 right-4 bg-primary shadow-md">
                  Популярный
                </Badge>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 ${pkg.color} rounded-xl shadow-md text-white`}>
                  <Icon name={pkg.icon} size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{pkg.name}</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">₽</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full shadow-md font-semibold ${pkg.popular ? '' : 'bg-secondary hover:bg-secondary/90'}`}>
                Заказать
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ProfilePage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <div className="flex flex-col items-center mb-8 animate-slide-up">
      <div className="h-24 w-24 mb-4 rounded-full border-4 border-primary shadow-lg overflow-hidden flex items-center justify-center bg-primary text-primary-foreground text-3xl font-bold">
        А
      </div>
      <h1 className="text-2xl font-bold">Алексей Иванов</h1>
      <p className="text-muted-foreground">alexey@example.com</p>
      <Badge className="mt-2 shadow-sm">Pro аккаунт</Badge>
    </div>

    <Card className="p-4 mb-4 hover-lift border shadow-sm">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon name="User" size={18} className="text-primary" />
        Личные данные
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Телефон</span>
          <span className="text-sm font-medium">+7 (999) 123-45-67</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Город</span>
          <span className="text-sm font-medium">Москва</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Компания</span>
          <span className="text-sm font-medium">IT Solutions LLC</span>
        </div>
      </div>
    </Card>

    <Card className="p-4 mb-4 hover-lift border shadow-sm">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon name="BarChart" size={18} className="text-primary" />
        Статистика заказов
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">3</div>
          <div className="text-xs text-muted-foreground">Заказано</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">2</div>
          <div className="text-xs text-muted-foreground">В работе</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">1</div>
          <div className="text-xs text-muted-foreground">Готово</div>
        </div>
      </div>
    </Card>

    <div className="space-y-2">
      <Button variant="outline" className="w-full justify-start hover-lift">
        <Icon name="Settings" size={18} className="mr-3" />
        Настройки
      </Button>
      <Button variant="outline" className="w-full justify-start hover-lift">
        <Icon name="Bell" size={18} className="mr-3" />
        Уведомления
      </Button>
      <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive hover-lift">
        <Icon name="LogOut" size={18} className="mr-3" />
        Выйти
      </Button>
    </div>
  </div>
);

const SupportPage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <h1 className="text-2xl font-bold mb-2 animate-slide-up">Поддержка</h1>
    <p className="text-sm text-muted-foreground mb-6">Всегда на связи с вами</p>

    <Card className="p-6 mb-6 glass-effect bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover-lift">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary rounded-full shadow-md">
          <Icon name="Headphones" size={24} className="text-primary-foreground" />
        </div>
        <div>
          <h2 className="font-bold">Мы на связи 24/7</h2>
          <p className="text-sm text-muted-foreground">Ответим в течение 15 минут</p>
        </div>
      </div>
    </Card>

    <div className="space-y-3 mb-6">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-2">Связаться с нами</h3>
      
      <Card className="p-4 hover-lift cursor-pointer border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Icon name="Send" size={20} className="text-blue-500" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Telegram</p>
            <p className="text-xs text-muted-foreground">@webvance_support</p>
          </div>
          <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-4 hover-lift cursor-pointer border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <Icon name="Phone" size={20} className="text-green-500" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Телефон</p>
            <p className="text-xs text-muted-foreground">+7 (800) 555-35-35</p>
          </div>
          <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-4 hover-lift cursor-pointer border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-500/10 rounded-lg">
            <Icon name="Mail" size={20} className="text-red-500" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Email</p>
            <p className="text-xs text-muted-foreground">support@webvance.ru</p>
          </div>
          <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
        </div>
      </Card>
    </div>

    <Card className="p-4 border shadow-sm">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon name="HelpCircle" size={18} className="text-primary" />
        Часто задаваемые вопросы
      </h3>
      <div className="space-y-3">
        <div className="border-b border-border pb-3">
          <p className="font-medium text-sm mb-1">Какие сроки разработки?</p>
          <p className="text-xs text-muted-foreground">От 5 дней для базового пакета до 4 недель для Premium+</p>
        </div>
        <div className="border-b border-border pb-3">
          <p className="font-medium text-sm mb-1">Можно ли изменить дизайн?</p>
          <p className="text-xs text-muted-foreground">Да, до 3 правок бесплатно в каждом пакете</p>
        </div>
        <div>
          <p className="font-medium text-sm mb-1">Что входит в техподдержку?</p>
          <p className="text-xs text-muted-foreground">Исправление ошибок, обновление контента, консультации</p>
        </div>
      </div>
    </Card>
  </div>
);

export default Index;

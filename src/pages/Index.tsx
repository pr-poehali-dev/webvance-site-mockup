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
        return <HomePage />;
      case 'catalog':
        return <CatalogPage />;
      case 'profile':
        return <ProfilePage />;
      case 'support':
        return <SupportPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20">
      <div className="animate-fade-in">
        {renderPage()}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-around py-2">
          <NavButton
            icon="Home"
            label="Главная"
            active={currentPage === 'home'}
            onClick={() => setCurrentPage('home')}
          />
          <NavButton
            icon="Grid"
            label="Услуги"
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
    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
      active ? 'text-primary' : 'text-muted-foreground'
    }`}
  >
    <Icon name={icon} size={22} className={active ? 'text-primary' : ''} />
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const HomePage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <div className="flex items-center gap-3 mb-8">
      <div className="h-16 w-16 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-primary shrink-0">
        <img 
          src="https://cdn.poehali.dev/projects/47e7795a-abf5-42d1-b5c6-448757d85799/files/3f2853b2-374a-44d5-b5da-2d96646ed266.jpg" 
          alt="Webvance" 
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Webvance</h1>
        <p className="text-sm text-muted-foreground">Создаём digital продукты</p>
      </div>
    </div>

    <Card className="p-6 mb-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
          <Icon name="Sparkles" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Твой digital партнёр</h2>
          <p className="text-sm text-primary-foreground/90 leading-relaxed">
            Разрабатываем современные веб-приложения и сайты, которые решают бизнес-задачи
          </p>
        </div>
      </div>
    </Card>

    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-2">Возможности</h3>
      
      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Code" size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Веб-разработка</p>
            <p className="text-xs text-muted-foreground">От лендингов до сложных систем</p>
          </div>
          <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Smartphone" size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Мобильные приложения</p>
            <p className="text-xs text-muted-foreground">iOS, Android, PWA решения</p>
          </div>
          <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Zap" size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Быстрый старт</p>
            <p className="text-xs text-muted-foreground">MVP за 2-4 недели</p>
          </div>
          <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
        </div>
      </Card>
    </div>
  </div>
);

const CatalogPage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <h1 className="text-2xl font-bold mb-6">Наши услуги</h1>
    
    <div className="space-y-4">
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary rounded-xl shadow-md">
              <Icon name="Code2" size={28} className="text-primary-foreground" />
            </div>
            <Badge variant="secondary" className="text-xs">Популярно</Badge>
          </div>
          <h2 className="text-xl font-bold mb-2">Веб-разработка</h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Создаём современные веб-приложения с использованием React, TypeScript и лучших практик разработки
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-xs">React</Badge>
            <Badge variant="outline" className="text-xs">TypeScript</Badge>
            <Badge variant="outline" className="text-xs">Node.js</Badge>
            <Badge variant="outline" className="text-xs">REST API</Badge>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={16} className="text-primary" />
              <span>Адаптивный дизайн</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={16} className="text-primary" />
              <span>SEO оптимизация</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={16} className="text-primary" />
              <span>Интеграция с API</span>
            </div>
          </div>
          <Button className="w-full shadow-md">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Обсудить проект
          </Button>
        </div>
      </Card>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-secondary rounded-xl shadow-md">
              <Icon name="Layers" size={28} className="text-secondary-foreground" />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Создание приложений</h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Разрабатываем кроссплатформенные приложения для бизнеса: CRM, ERP, сервисы автоматизации
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-xs">PWA</Badge>
            <Badge variant="outline" className="text-xs">Mobile First</Badge>
            <Badge variant="outline" className="text-xs">Cloud</Badge>
            <Badge variant="outline" className="text-xs">Analytics</Badge>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={16} className="text-secondary" />
              <span>Кроссплатформенность</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={16} className="text-secondary" />
              <span>Масштабируемость</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={16} className="text-secondary" />
              <span>Техподдержка 24/7</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Оставить заявку
          </Button>
        </div>
      </Card>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <div className="flex flex-col items-center mb-8">
      <div className="h-24 w-24 mb-4 rounded-full border-4 border-primary shadow-lg overflow-hidden flex items-center justify-center bg-primary text-primary-foreground text-3xl font-bold">
        А
      </div>
      <h1 className="text-2xl font-bold">Алексей Иванов</h1>
      <p className="text-muted-foreground">alexey@example.com</p>
      <Badge className="mt-2">Pro аккаунт</Badge>
    </div>

    <Card className="p-4 mb-4">
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

    <Card className="p-4 mb-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon name="BarChart" size={18} className="text-primary" />
        Статистика
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-xs text-muted-foreground">Проектов</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-xs text-muted-foreground">Заявок</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">98%</div>
          <div className="text-xs text-muted-foreground">Рейтинг</div>
        </div>
      </div>
    </Card>

    <div className="space-y-2">
      <Button variant="outline" className="w-full justify-start">
        <Icon name="Settings" size={18} className="mr-3" />
        Настройки
      </Button>
      <Button variant="outline" className="w-full justify-start">
        <Icon name="Bell" size={18} className="mr-3" />
        Уведомления
      </Button>
      <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
        <Icon name="LogOut" size={18} className="mr-3" />
        Выйти
      </Button>
    </div>
  </div>
);

const SupportPage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-4">
    <h1 className="text-2xl font-bold mb-6">Поддержка</h1>

    <Card className="p-6 mb-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary rounded-full">
          <Icon name="Headphones" size={24} className="text-primary-foreground" />
        </div>
        <div>
          <h2 className="font-semibold">Мы на связи 24/7</h2>
          <p className="text-sm text-muted-foreground">Ответим в течение 15 минут</p>
        </div>
      </div>
    </Card>

    <div className="space-y-3 mb-6">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-2">Связаться с нами</h3>
      
      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Icon name="Send" size={20} className="text-blue-500" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Telegram</p>
            <p className="text-xs text-muted-foreground">@webvance_support</p>
          </div>
          <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <Icon name="Phone" size={20} className="text-green-500" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Телефон</p>
            <p className="text-xs text-muted-foreground">+7 (800) 555-35-35</p>
          </div>
          <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
        </div>
      </Card>

      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-500/10 rounded-lg">
            <Icon name="Mail" size={20} className="text-red-500" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Email</p>
            <p className="text-xs text-muted-foreground">support@webvance.ru</p>
          </div>
          <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
        </div>
      </Card>
    </div>

    <Card className="p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon name="HelpCircle" size={18} className="text-primary" />
        Часто задаваемые вопросы
      </h3>
      <div className="space-y-3">
        <div className="border-b border-border pb-3">
          <p className="font-medium text-sm mb-1">Сколько стоит разработка сайта?</p>
          <p className="text-xs text-muted-foreground">Стоимость зависит от сложности проекта. Средний лендинг от 50 000₽</p>
        </div>
        <div className="border-b border-border pb-3">
          <p className="font-medium text-sm mb-1">Какие сроки разработки?</p>
          <p className="text-xs text-muted-foreground">MVP можно запустить за 2-4 недели, сложные проекты — от 2 месяцев</p>
        </div>
        <div>
          <p className="font-medium text-sm mb-1">Предоставляете ли техподдержку?</p>
          <p className="text-xs text-muted-foreground">Да, первые 3 месяца техподдержка бесплатна</p>
        </div>
      </div>
    </Card>
  </div>
);

export default Index;
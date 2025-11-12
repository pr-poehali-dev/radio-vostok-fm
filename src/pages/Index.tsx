import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {

  const programs = [
    {
      time: '06:00 - 09:00',
      title: 'Утреннее Шоу',
      host: 'Анна Волкова',
      description: 'Бодрое начало дня с музыкой и новостями',
      image: '🌅',
    },
    {
      time: '09:00 - 12:00',
      title: 'Хиты Дня',
      host: 'Дмитрий Петров',
      description: 'Самые популярные треки месяца',
      image: '🎵',
    },
    {
      time: '12:00 - 15:00',
      title: 'Обеденный Микс',
      host: 'Елена Соколова',
      description: 'Легкая музыка на обед',
      image: '🎧',
    },
    {
      time: '15:00 - 18:00',
      title: 'Драйв FM',
      host: 'Максим Иванов',
      description: 'Энергичные треки для активного дня',
      image: '⚡',
    },
    {
      time: '18:00 - 21:00',
      title: 'Вечерний Эфир',
      host: 'Ольга Смирнова',
      description: 'Хиты всех времен и жанров',
      image: '🌆',
    },
    {
      time: '21:00 - 00:00',
      title: 'Ночной Драйв',
      host: 'Артем Козлов',
      description: 'Лучшая музыка для вечерней поездки',
      image: '🌙',
    },
  ];

  const playlist = [
    { artist: 'The Weeknd', track: 'Blinding Lights', time: '3:20' },
    { artist: 'Dua Lipa', track: 'Levitating', time: '3:23' },
    { artist: 'Billie Eilish', track: 'bad guy', time: '3:14' },
    { artist: 'Imagine Dragons', track: 'Believer', time: '3:24' },
    { artist: 'Post Malone', track: 'Circles', time: '3:35' },
  ];

  const news = [
    {
      date: '12 ноября 2025',
      title: 'Новое шоу на Восток FM',
      text: 'С понедельника стартует авторская программа "Звездный час" с Анной Волковой',
    },
    {
      date: '10 ноября 2025',
      title: 'Конкурс для слушателей',
      text: 'Выиграй билеты на концерт Imagine Dragons! Участвуй в эфире',
    },
    {
      date: '8 ноября 2025',
      title: 'Обновление плейлиста',
      text: 'В ротацию добавлены 50 новых треков ноября',
    },
  ];

  const hosts = [
    { name: 'Анна Волкова', role: 'Утреннее шоу', image: '👩‍🎤' },
    { name: 'Дмитрий Петров', role: 'Хиты дня', image: '👨‍🎤' },
    { name: 'Елена Соколова', role: 'Обеденный микс', image: '👩‍💼' },
    { name: 'Максим Иванов', role: 'Драйв FM', image: '🎸' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl">
                📻
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Восток FM
                </h1>
                <p className="text-xs text-muted-foreground">Твоя музыка, твоя волна</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#programs" className="text-sm hover:text-primary transition-colors">
                Программы
              </a>
              <a href="#playlist" className="text-sm hover:text-primary transition-colors">
                Плейлист
              </a>
              <a href="#hosts" className="text-sm hover:text-primary transition-colors">
                Ведущие
              </a>
              <a href="#news" className="text-sm hover:text-primary transition-colors">
                Новости
              </a>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-pulse-slow">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-sm font-medium">В ЭФИРЕ</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Слушай сейчас
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Лучшая музыка 24/7 • Хиты всех времен • Онлайн-вещание
            </p>
            <div className="mb-8">
              <AudioPlayer 
                streamUrl="https://stream.zeno.fm/f3wvbbqmdg8uv"
                currentTrack={{ artist: 'The Weeknd', title: 'Blinding Lights' }}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Icon name="Radio" size={24} />
                Расписание
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Icon name="List" size={24} />
                Программы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary text-white">Программы</Badge>
            <h3 className="text-4xl font-bold mb-4">Сетка вещания</h3>
            <p className="text-muted-foreground">Наши программы идут 24/7</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{program.image}</div>
                    <Badge variant="outline">{program.time}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">Ведущий: {program.host}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-secondary text-white">Команда</Badge>
            <h3 className="text-4xl font-bold mb-4">Наши ведущие</h3>
            <p className="text-muted-foreground">Профессионалы своего дела</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hosts.map((host, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center text-5xl mb-4">
                    {host.image}
                  </div>
                  <CardTitle className="text-lg">{host.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{host.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="playlist" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent text-white">Плейлист</Badge>
              <h3 className="text-4xl font-bold mb-4">Сейчас в эфире</h3>
              <p className="text-muted-foreground">Последние треки</p>
            </div>
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="today">Сегодня</TabsTrigger>
                <TabsTrigger value="week">Неделя</TabsTrigger>
                <TabsTrigger value="month">Месяц</TabsTrigger>
              </TabsList>
              <TabsContent value="today" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {playlist.map((track, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold">{track.track}</p>
                              <p className="text-sm text-muted-foreground">{track.artist}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{track.time}</span>
                            <Button size="icon" variant="ghost">
                              <Icon name="Play" size={20} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="week">
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    Плейлист недели скоро появится
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="month">
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    Плейлист месяца скоро появится
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary text-white">Новости</Badge>
            <h3 className="text-4xl font-bold mb-4">Последние новости</h3>
            <p className="text-muted-foreground">Что нового на радио</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                    <Icon name="ArrowRight" size={24} className="text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 gradient-secondary text-white">Контакты</Badge>
              <h3 className="text-4xl font-bold mb-4">Свяжитесь с нами</h3>
              <p className="text-muted-foreground">Мы всегда на связи</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <Icon name="Phone" size={24} />
                    </div>
                    <CardTitle>Телефон эфира</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">8 (800) 555-35-35</p>
                  <p className="text-sm text-muted-foreground">Звоните в эфир с 6:00 до 00:00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                      <Icon name="Mail" size={24} />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">info@vostok.fm</p>
                  <p className="text-sm text-muted-foreground">Пишите ваши предложения</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <CardTitle>Адрес</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">Москва, ул. Радио, д. 1</p>
                  <p className="text-sm text-muted-foreground">Студия работает 24/7</p>
                </CardContent>
              </Card>
              <Card className="gradient-primary">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon name="Megaphone" size={24} />
                    </div>
                    <CardTitle className="text-white">Реклама на радио</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">Размещайте рекламу на Восток FM</p>
                  <Button variant="secondary" className="w-full">
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                📻
              </div>
              <div>
                <p className="font-bold">Восток FM</p>
                <p className="text-xs text-muted-foreground">© 2025 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
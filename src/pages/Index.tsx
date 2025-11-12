import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import AudioPlayer from '@/components/AudioPlayer';
import FixedPlayer from '@/components/FixedPlayer';

const Index = () => {
  const programs = [
    {
      time: '06:00 - 09:00',
      title: 'Утреннее Шоу',
      host: 'Анна Волкова',
      description: 'Бодрое начало дня с музыкой и новостями',
      image: '☀️',
      color: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      time: '09:00 - 12:00',
      title: 'Хиты Дня',
      host: 'Дмитрий Петров',
      description: 'Самые популярные треки месяца',
      image: '🎵',
      color: 'from-red-500/20 to-pink-500/20',
    },
    {
      time: '12:00 - 15:00',
      title: 'Обеденный Микс',
      host: 'Елена Соколова',
      description: 'Легкая музыка на обед',
      image: '🎧',
      color: 'from-purple-500/20 to-blue-500/20',
    },
    {
      time: '15:00 - 18:00',
      title: 'Драйв FM',
      host: 'Максим Иванов',
      description: 'Энергичные треки для активного дня',
      image: '⚡',
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      time: '18:00 - 21:00',
      title: 'Вечерний Эфир',
      host: 'Ольга Смирнова',
      description: 'Хиты всех времен и жанров',
      image: '🌆',
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      time: '21:00 - 00:00',
      title: 'Ночной Драйв',
      host: 'Артем Козлов',
      description: 'Лучшая музыка для вечерней поездки',
      image: '🌙',
      color: 'from-indigo-500/20 to-violet-500/20',
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
      icon: '⭐',
    },
    {
      date: '10 ноября 2025',
      title: 'Конкурс для слушателей',
      text: 'Выиграй билеты на концерт Imagine Dragons! Участвуй в эфире',
      icon: '🎁',
    },
    {
      date: '8 ноября 2025',
      title: 'Обновление плейлиста',
      text: 'В ротацию добавлены 50 новых треков ноября',
      icon: '🎵',
    },
  ];

  const hosts = [
    { name: 'Анна Волкова', role: 'Утреннее шоу', image: '👩‍🎤', gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Дмитрий Петров', role: 'Хиты дня', image: '👨‍🎤', gradient: 'from-red-500 to-pink-500' },
    { name: 'Елена Соколова', role: 'Обеденный микс', image: '👩‍💼', gradient: 'from-purple-500 to-blue-500' },
    { name: 'Максим Иванов', role: 'Драйв FM', image: '🎸', gradient: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-background eastern-pattern">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-eastern flex items-center justify-center text-2xl shadow-lg animate-float">
                  📻
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full animate-pulse flex items-center justify-center text-xs">
                  ✨
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent uppercase tracking-tight">
                  ВОСТОК FM
                </h1>
                <p className="text-xs text-secondary font-medium">Энергия востока • Хиты мира</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#programs" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wide">
                Эфир
              </a>
              <a href="#playlist" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wide">
                Треки
              </a>
              <a href="#hosts" className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                Команда
              </a>
              <a href="#news" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wide">
                Новости
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-eastern opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_50%)]"></div>
        <div className="absolute top-10 right-10 text-9xl opacity-5 animate-float">🕌</div>
        <div className="absolute bottom-10 left-10 text-9xl opacity-5 animate-float" style={{animationDelay: '2s'}}>✨</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></div>
              <span className="text-sm font-black uppercase tracking-wider text-primary">В эфире прямо сейчас</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-shimmer">
                СЛУШАЙ
              </span>
              <br />
              <span className="text-foreground">ВОСТОК FM</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
              Твоя музыка • Твоя энергия • Твоя волна 📻
            </p>
            
            <div className="mb-10 max-w-3xl mx-auto">
              <AudioPlayer 
                streamUrl="https://stream.zeno.fm/f3wvbbqmdg8uv"
                currentTrack={{ artist: 'The Weeknd', title: 'Blinding Lights' }}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-3 gradient-primary hover:opacity-90 transition-all text-lg px-10 py-7 font-bold uppercase shadow-2xl shadow-primary/30">
                <Icon name="Radio" size={24} />
                Расписание
              </Button>
              <Button size="lg" variant="outline" className="gap-3 text-lg px-10 py-7 font-bold uppercase border-2 hover:border-primary hover:text-primary transition-all">
                <Icon name="Music" size={24} />
                Хиты недели
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary text-white text-sm px-6 py-2 font-bold uppercase shadow-lg">
              Программы
            </Badge>
            <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase">Сетка эфира</h3>
            <p className="text-xl text-muted-foreground font-medium">24 часа в сутки • 7 дней в неделю</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 ornament-border overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-6xl group-hover:scale-110 transition-transform`}>
                      {program.image}
                    </div>
                    <Badge variant="outline" className="font-bold border-2">{program.time}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3 font-black uppercase">{program.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-semibold">
                    🎤 {program.host}
                  </p>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-secondary text-white text-sm px-6 py-2 font-bold uppercase shadow-lg">
              Команда
            </Badge>
            <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase">Наши ведущие</h3>
            <p className="text-xl text-muted-foreground font-medium">Голоса, которые ты слышишь каждый день</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hosts.map((host, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                <CardHeader>
                  <div className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br ${host.gradient} flex items-center justify-center text-7xl mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                    {host.image}
                  </div>
                  <CardTitle className="text-xl font-black uppercase">{host.name}</CardTitle>
                  <p className="text-sm text-muted-foreground font-semibold mt-2">{host.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="playlist" className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent text-white text-sm px-6 py-2 font-bold uppercase shadow-lg">
                Плейлист
              </Badge>
              <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase">Сейчас в эфире</h3>
              <p className="text-xl text-muted-foreground font-medium">То, что играет прямо сейчас</p>
            </div>
            
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-14 bg-muted/50">
                <TabsTrigger value="today" className="font-bold uppercase">Сегодня</TabsTrigger>
                <TabsTrigger value="week" className="font-bold uppercase">Неделя</TabsTrigger>
                <TabsTrigger value="month" className="font-bold uppercase">Месяц</TabsTrigger>
              </TabsList>
              
              <TabsContent value="today" className="mt-8">
                <Card className="ornament-border">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {playlist.map((track, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/30"
                        >
                          <div className="flex items-center gap-5 flex-1">
                            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center font-black text-white text-lg group-hover:scale-110 transition-transform shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-lg">{track.track}</p>
                              <p className="text-sm text-muted-foreground font-medium">{track.artist}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground font-bold">{track.time}</span>
                            <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
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
                  <CardContent className="p-12 text-center text-muted-foreground">
                    <div className="text-6xl mb-4">🎵</div>
                    <p className="font-semibold">Плейлист недели скоро появится</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="month">
                <Card>
                  <CardContent className="p-12 text-center text-muted-foreground">
                    <div className="text-6xl mb-4">📻</div>
                    <p className="font-semibold">Плейлист месяца скоро появится</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary text-white text-sm px-6 py-2 font-bold uppercase shadow-lg">
              Новости
            </Badge>
            <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase">Что нового</h3>
            <p className="text-xl text-muted-foreground font-medium">Последние события на радио</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all duration-300 group ornament-border overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl gradient-eastern flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-secondary font-bold uppercase mb-2">{item.date}</p>
                      <CardTitle className="text-2xl mb-3 font-black">{item.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                    <Icon name="ArrowRight" size={28} className="text-primary flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 gradient-secondary text-white text-sm px-6 py-2 font-bold uppercase shadow-lg">
                Контакты
              </Badge>
              <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase">Связь с нами</h3>
              <p className="text-xl text-muted-foreground font-medium">Мы всегда на связи 24/7</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Phone" size={28} />
                    </div>
                    <CardTitle className="font-black uppercase">Телефон эфира</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-black text-primary mb-2">8 (800) 555-35-35</p>
                  <p className="text-sm text-muted-foreground font-medium">Звони в эфир с 6:00 до 00:00</p>
                </CardContent>
              </Card>
              
              <Card className="hover:border-secondary/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Mail" size={28} />
                    </div>
                    <CardTitle className="font-black uppercase">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-black text-secondary mb-2">info@vostok.fm</p>
                  <p className="text-sm text-muted-foreground font-medium">Пиши свои предложения</p>
                </CardContent>
              </Card>
              
              <Card className="hover:border-accent/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="MapPin" size={28} />
                    </div>
                    <CardTitle className="font-black uppercase">Адрес студии</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold mb-2">Москва, ул. Радио, д. 1</p>
                  <p className="text-sm text-muted-foreground font-medium">Работаем круглосуточно 24/7</p>
                </CardContent>
              </Card>
              
              <Card className="gradient-eastern group hover:opacity-90 transition-opacity">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Megaphone" size={28} className="text-white" />
                    </div>
                    <CardTitle className="text-white font-black uppercase">Реклама</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-6 font-medium">Размещай рекламу на Восток FM</p>
                  <Button variant="secondary" className="w-full font-bold uppercase shadow-lg">
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 pb-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-eastern flex items-center justify-center shadow-lg">
                📻
              </div>
              <div>
                <p className="font-black uppercase text-lg">Восток FM</p>
                <p className="text-xs text-muted-foreground font-medium">© 2025 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-2xl hover:border-primary hover:text-primary transition-all">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-2xl hover:border-primary hover:text-primary transition-all">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-2xl hover:border-primary hover:text-primary transition-all">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-2xl hover:border-primary hover:text-primary transition-all">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <FixedPlayer 
        streamUrl="https://stream.zeno.fm/f3wvbbqmdg8uv"
        currentTrack={{ artist: 'The Weeknd', title: 'Blinding Lights' }}
      />
    </div>
  );
};

export default Index;

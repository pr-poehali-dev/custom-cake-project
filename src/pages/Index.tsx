import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: '',
    weight: '',
    date: '',
    comment: ''
  });

  const cakes = [
    {
      id: 1,
      title: 'Свадебный торт',
      image: 'https://cdn.poehali.dev/projects/eac5b826-2033-4653-9452-b09e56cf6c74/files/61a6d7c8-dc31-4506-8cdd-9cde5eb5ca1d.jpg',
      description: 'Элегантный многоярусный торт для вашего особенного дня'
    },
    {
      id: 2,
      title: 'Праздничный торт',
      image: 'https://cdn.poehali.dev/projects/eac5b826-2033-4653-9452-b09e56cf6c74/files/eb4d8661-42b4-45a2-af61-0ffe4cb601f3.jpg',
      description: 'Нежный торт с розами для любого торжества'
    },
    {
      id: 3,
      title: 'Шоколадный торт',
      image: 'https://cdn.poehali.dev/projects/eac5b826-2033-4653-9452-b09e56cf6c74/files/bfb09ab7-eb15-49af-8dc3-c324a02fa11f.jpg',
      description: 'Шоколадное наслаждение с ягодами'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заказ принят!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setShowOrderForm(false);
    setFormData({ name: '', phone: '', cakeType: '', weight: '', date: '', comment: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-accent/20 to-background"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 tracking-tight">
            Авторские торты
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Создаём кондитерские шедевры для ваших особенных моментов
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
            onClick={() => setShowOrderForm(true)}
          >
            Заказать торт
            <Icon name="ChevronRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Наши творения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый торт создаётся с любовью и вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <Card 
              key={cake.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={cake.image} 
                  alt={cake.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{cake.title}</h3>
                <p className="text-muted-foreground mb-4">{cake.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowOrderForm(true)}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Премиальное качество</h3>
              <p className="text-muted-foreground">Только натуральные ингредиенты</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точно в срок</h3>
              <p className="text-muted-foreground">Доставим к назначенному времени</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">С любовью</h3>
              <p className="text-muted-foreground">Индивидуальный подход к каждому</p>
            </div>
          </div>
        </div>
      </section>

      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-foreground">Заказать торт</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowOrderForm(false)}
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cakeType">Вид торта *</Label>
                  <Select value={formData.cakeType} onValueChange={(value) => handleInputChange('cakeType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вид торта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Свадебный торт</SelectItem>
                      <SelectItem value="celebration">Праздничный торт</SelectItem>
                      <SelectItem value="chocolate">Шоколадный торт</SelectItem>
                      <SelectItem value="fruit">Фруктовый торт</SelectItem>
                      <SelectItem value="custom">Индивидуальный дизайн</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Вес торта *</Label>
                  <Select value={formData.weight} onValueChange={(value) => handleInputChange('weight', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вес" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1kg">1 кг</SelectItem>
                      <SelectItem value="2kg">2 кг</SelectItem>
                      <SelectItem value="3kg">3 кг</SelectItem>
                      <SelectItem value="4kg">4 кг</SelectItem>
                      <SelectItem value="5kg">5+ кг</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Дата доставки *</Label>
                  <Input 
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Пожелания к заказу</Label>
                  <Textarea 
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    placeholder="Расскажите о ваших пожеланиях: вкус, дизайн, надписи..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить заказ
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-foreground/5 py-12 px-4 text-center">
        <p className="text-muted-foreground">
          © 2024 Авторские торты. Создано с любовью.
        </p>
      </footer>
    </div>
  );
};

export default Index;

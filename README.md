# Rozi's Luxury Dog Hotel - Website

Красив и модерен уебсайт за луксозен хотел за кучета, изграден с React, TypeScript и Vite.

## 🚀 Функционалности

### ✨ Основни функции
- **Красив дизайн** с розово-лилави градиенти и елегантна типография
- **Адаптивен дизайн** за всички устройства
- **Анимации** с Framer Motion
- **Интерактивна галерия** с модали за преглед на снимки
- **Система за резервации** с 4-стъпкова форма

### 📧 Резервационна система
- **Автоматично запазване** в NeonDB (PostgreSQL)
- **Email потвърждения** с Nodemailer
- **Админ панел** за управление на резервации
- **Статуси на резервации** (pending, confirmed, cancelled)

### 🖼️ Галерия
- **Качване на снимки** директно на Vercel сървъра
- **Управление на галерията** (триене, преместване по категории)
- **Директно снимане** с камерата на мобилни устройства
- **Drag & drop** функционалност

## 🛠️ Технологии

- **Frontend**: React 18, TypeScript, Vite
- **Стилизиране**: Tailwind CSS
- **Анимации**: Framer Motion
- **Икони**: Lucide React
- **Backend**: Vercel Serverless Functions
- **База данни**: NeonDB (PostgreSQL) с @neondatabase/serverless
- **Email**: Nodemailer
- **File Upload**: Formidable

## 📦 Инсталация

1. **Клонирай репозиторията**
```bash
git clone <repository-url>
cd rozis-luxury-dog-hotel
```

2. **Инсталирай зависимостите**
```bash
npm install
```

3. **Стартирай development сървъра**
```bash
npm run dev
```

## 🔧 Конфигурация

### Environment Variables

Създай `.env.local` файл в root директорията:

```env
# Database (NeonDB) - Използва @neondatabase/serverless
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# App Settings
NODE_ENV=production
```

**Важно**: Използваме `@neondatabase/serverless` пакета за по-добра производителност на Vercel!

### Vercel Environment Variables

В Vercel dashboard, добави следните environment variables:

```
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NODE_ENV=production
```

## 🗄️ База данни

### NeonDB Setup

1. Създай акаунт в [NeonDB](https://neon.tech/)
2. Създай нов проект
3. Копирай connection string
4. Добави го като `DATABASE_URL` environment variable

### Таблица за резервации

Базата данни ще се създаде автоматично при първото използване:

```sql
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  owner_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  dog_name VARCHAR(255),
  dog_breed VARCHAR(255),
  dog_age VARCHAR(50),
  check_in DATE,
  check_out DATE,
  services JSONB DEFAULT '[]',
  special_requests TEXT,
  total_price DECIMAL(10,2) NOT NULL,
  number_of_days INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📧 Email настройка

### Gmail SMTP

1. Отиди в Google Account Settings
2. Включи 2-Factor Authentication
3. Създай App Password
4. Използвай App Password като `SMTP_PASS`

### Други SMTP провайдери

```env
# Outlook/Hotmail
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587

# Yahoo
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587

# Custom SMTP
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
```

## 🚀 Deployment

### Vercel (Препоръчвано)

1. **Инсталирай Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Добави environment variables** в Vercel dashboard

4. **Redeploy** за да активираш промените

### Други платформи

- **Netlify**: Използвай `npm run build` и deploy `dist` папката
- **Railway**: Поддържа Vercel serverless functions
- **Heroku**: Добави buildpack за Node.js

## 📱 Админ панел

Достъп: `/admin`

### Функции:
- **Преглед на резервации** с филтри и търсене
- **Управление на статуси** (pending, confirmed, cancelled)
- **Качване на снимки** в галерията
- **Управление на галерията** (триене, преместване)

### Email уведомления:
- **Потвърждение** при нова резервация
- **Обновление на статус** при промяна
- **Отмяна** при отказване

## 🎨 Персонализиране

### Цветове (Tailwind CSS)
```css
--soft-pink: #FFC0CB
--luxury-purple: #8B5FBF
--premium-gold: #FFD700
--warm-white: #FFF8F0
--soft-lavender: #E6E6FA
--light-peach: #FFE5B4
```

### Шрифтове
- **Handwriting**: Dancing Script (заглавия)
- **Elegant**: Playfair Display (подзаглавия)
- **Body**: Inter (основен текст)

## 📞 Контакти

- **Телефон**: +359 888 123 456
- **Email**: info@rozis-dog-hotel.com
- **Viber**: +359 888 123 456
- **Адрес**: Сапарева баня, България
- **Facebook**: [Rozi's Luxury Dog Hotel](https://www.facebook.com/profile.php?id=100058613121575)
- **Instagram**: [@rozis_luxury_dog_hotel](https://www.instagram.com/rozis_luxury_dog_hotel/)

## 📄 Лиценз

Този проект е създаден като подарък за Rozi's Luxury Dog Hotel.

---

**Made with ❤️ by Weakless666**
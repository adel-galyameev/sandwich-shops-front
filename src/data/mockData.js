// Моковые данные для стартовой страницы

export const advantages = [
  {
    id: 1,
    icon: '🥪',
    title: 'Свежие ингредиенты',
    description: 'Используем только свежие продукты от проверенных поставщиков'
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Быстрое обслуживание',
    description: 'Приготовление сэндвича занимает не более 5 минут'
  },
  {
    id: 3,
    icon: '🚚',
    title: 'Быстрая доставка',
    description: 'Доставим заказ в течение 30 минут или сэндвич за наш счёт'
  },
  {
    id: 4,
    icon: '💰',
    title: 'Доступные цены',
    description: 'Вкусные сэндвичи по ценам, которые не ударят по бюджету'
  },
  {
    id: 5,
    icon: '🌿',
    title: 'Здоровое питание',
    description: 'Низкокалорийные опции и свежие овощи в каждом сэндвиче'
  },
  {
    id: 6,
    icon: '📍',
    title: 'Удобное расположение',
    description: 'Более 100 точек по всей стране в шаговой доступности'
  }
];

export const popularSandwiches = [
  {
    id: 1,
    name: 'Классический итальянский',
    description: 'Ветчина, салями, моцарелла, томаты, руккола, оливковое масло',
    price: 349,
    oldPrice: 399,
    image: 'https://picsum.photos/seed/sandwich1/400/300',
    isSale: true,
    category: 'Популярное'
  },
  {
    id: 2,
    name: 'Курица BBQ',
    description: 'Куриная грудка, бекон, чеддер, лук, соус BBQ',
    price: 379,
    oldPrice: null,
    image: 'https://picsum.photos/seed/sandwich2/400/300',
    isSale: false,
    category: 'Популярное'
  },
  {
    id: 3,
    name: 'Тунец Мелт',
    description: 'Тунец, кукуруза, огурцы, сливочный сыр, салат',
    price: 399,
    oldPrice: 449,
    image: 'https://picsum.photos/seed/sandwich3/400/300',
    isSale: true,
    category: 'Популярное'
  }
];

export const newUsersPromo = {
  code: 'WELCOME30',
  discount: 30,
  description: 'Скидка 30% на первый заказ для новых пользователей'
};

export const partnerBenefits = [
  {
    id: 1,
    title: 'Готовая бизнес-модель',
    description: 'Проверенная концепция с быстрой окупаемостью'
  },
  {
    id: 2,
    title: 'Обучение и поддержка',
    description: 'Полное обучение персонала и сопровождение на всех этапах'
  },
  {
    id: 3,
    title: 'Маркетинг',
    description: 'Федеральная рекламная кампания и локальная поддержка'
  },
  {
    id: 4,
    title: 'Поставки',
    description: 'Централизованные поставки продуктов по выгодным ценам'
  }
];

export const franchiseSteps = [
  { id: 1, title: 'Заявка', description: 'Оставьте заявку на сайте' },
  { id: 2, title: 'Консультация', description: 'Обсудим детали сотрудничества' },
  { id: 3, title: 'Договор', description: 'Подпишем франчайзинговый договор' },
  { id: 4, title: 'Открытие', description: 'Запустим вашу точку за 4-6 недель' }
];

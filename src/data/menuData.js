// Моковые данные для страницы меню

// Импорт локальных изображений
import img1Main from '../images/sandwich-1-main.jpg';
import img2Main from '../images/sandwich-2-main.jpg';
import img3Main from '../images/sandwich-3-main.jpg';
import img4Main from '../images/sandwich-4-main.jpg';
import img5Main from '../images/sandwich-5-main.jpg';
import img6Main from '../images/sandwich-6-main.jpg';
import img7Main from '../images/sandwich-7-main.jpg';
import img8Main from '../images/sandwich-8-main.jpg';
import img9Main from '../images/sandwich-9-main.jpg';
import img10Main from '../images/sandwich-10-main.jpg';

import img1Gallery1 from '../images/sandwich-1-gallery-1.jpg';
import img1Gallery2 from '../images/sandwich-1-gallery-2.jpg';
import img1Gallery3 from '../images/sandwich-1-gallery-3.jpg';
import img2Gallery1 from '../images/sandwich-2-gallery-1.jpg';
import img2Gallery2 from '../images/sandwich-2-gallery-2.jpg';
import img3Gallery1 from '../images/sandwich-3-gallery-1.jpg';
import img3Gallery2 from '../images/sandwich-3-gallery-2.jpg';
import img3Gallery3 from '../images/sandwich-3-gallery-3.jpg';
import img4Gallery1 from '../images/sandwich-4-gallery-1.jpg';
import img4Gallery2 from '../images/sandwich-4-gallery-2.jpg';
import img5Gallery1 from '../images/sandwich-5-gallery-1.jpg';
import img5Gallery2 from '../images/sandwich-5-gallery-2.jpg';
import img6Gallery1 from '../images/sandwich-6-gallery-1.jpg';
import img6Gallery2 from '../images/sandwich-6-gallery-2.jpg';
import img7Gallery1 from '../images/sandwich-7-gallery-1.jpg';
import img7Gallery2 from '../images/sandwich-7-gallery-2.jpg';
import img8Gallery1 from '../images/sandwich-8-gallery-1.jpg';
import img8Gallery2 from '../images/sandwich-8-gallery-2.jpg';
import img9Gallery1 from '../images/sandwich-9-gallery-1.jpg';
import img9Gallery2 from '../images/sandwich-9-gallery-2.jpg';
import img9Gallery3 from '../images/sandwich-9-gallery-3.jpg';
import img10Gallery1 from '../images/sandwich-10-gallery-1.jpg';
import img10Gallery2 from '../images/sandwich-10-gallery-2.jpg';

export const categories = [
  { id: 'all', name: 'Все', icon: '' },
  { id: 'chicken', name: 'Куриные', icon: '' },
  { id: 'meat', name: 'Мясные', icon: '' },
  { id: 'vegetarian', name: 'Вегетарианские', icon: '' },
  { id: 'fish', name: 'Рыбные', icon: '' }
];

export const locations = [
  { id: 1, name: 'Москва, ул. Тверская', city: 'Москва' },
  { id: 2, name: 'Москва, Арбат', city: 'Москва' },
  { id: 3, name: 'Санкт-Петербург, Невский', city: 'Санкт-Петербург' },
  { id: 4, name: 'Казань, ул. Баумана', city: 'Казань' }
];

export const menuItems = [
  // Популярные (топ-5)
  {
    id: 1,
    name: 'Классический итальянский',
    description: 'Ветчина, салями, моцарелла, томаты, руккола, оливковое масло',
    price: 349,
    oldPrice: 399,
    image: img1Main,
    category: 'meat',
    isPopular: true,
    isSale: true,
    calories: 420,
    weight: 280,
    cookTime: 5,
    available: true
  },
  {
    id: 2,
    name: 'Курица BBQ',
    description: 'Куриная грудка, бекон, чеддер, лук, соус BBQ',
    price: 379,
    oldPrice: null,
    image: img2Main,
    category: 'chicken',
    isPopular: true,
    isSale: false,
    calories: 480,
    weight: 300,
    cookTime: 7,
    available: true
  },
  {
    id: 3,
    name: 'Тунец Мелт',
    description: 'Тунец, кукуруза, огурцы, сливочный сыр, салат',
    price: 399,
    oldPrice: 449,
    image: img3Main,
    category: 'fish',
    isPopular: true,
    isSale: true,
    calories: 390,
    weight: 260,
    cookTime: 5,
    available: true
  },
  {
    id: 4,
    name: 'Овощной Фитнес',
    description: 'Авокадо, томаты, огурцы, хумус, шпинат, цельнозерновой хлеб',
    price: 329,
    oldPrice: null,
    image: img4Main,
    category: 'vegetarian',
    isPopular: true,
    isSale: false,
    calories: 310,
    weight: 240,
    cookTime: 5,
    available: true
  },
  {
    id: 5,
    name: 'Сытный Микс',
    description: 'Говядина, бекон, яйцо, чеддер, картофель фри внутри',
    price: 449,
    oldPrice: null,
    image: img5Main,
    category: 'meat',
    isPopular: true,
    isSale: false,
    calories: 580,
    weight: 350,
    cookTime: 8,
    available: true
  },
  // Остальные позиции
  {
    id: 6,
    name: 'Острый Мексиканец',
    description: 'Халапеньо, чоризо, хаварти, гуакамоле, сальса',
    price: 419,
    oldPrice: 469,
    image: img6Main,
    category: 'meat',
    isPopular: false,
    isSale: true,
    calories: 510,
    weight: 290,
    cookTime: 6,
    available: true
  },
  {
    id: 7,
    name: 'Цезарь с курицей',
    description: 'Куриное филе, салат ромэн, пармезан, сухарики, соус цезарь',
    price: 369,
    oldPrice: null,
    image: img7Main,
    category: 'chicken',
    isPopular: false,
    isSale: false,
    calories: 400,
    weight: 270,
    cookTime: 6,
    available: true
  },
  {
    id: 8,
    name: 'Грибной',
    description: 'Шампиньоны, сливочный сыр, лук, тимьян, моцарелла',
    price: 339,
    oldPrice: null,
    image: img8Main,
    category: 'vegetarian',
    isPopular: false,
    isSale: false,
    calories: 360,
    weight: 250,
    cookTime: 7,
    available: true
  },
  {
    id: 9,
    name: 'Лосось Делюкс',
    description: 'Слабосолёный лосось, сливочный сыр, авокадо, огурец, икра',
    price: 549,
    oldPrice: 599,
    image: img9Main,
    category: 'fish',
    isPopular: false,
    isSale: true,
    calories: 450,
    weight: 280,
    cookTime: 5,
    available: true
  },
  {
    id: 10,
    name: 'Капрезе',
    description: 'Моцарелла буффало, томаты, базилик, бальзамик, оливковое масло',
    price: 359,
    oldPrice: null,
    image: img10Main,
    category: 'vegetarian',
    isPopular: false,
    isSale: false,
    calories: 340,
    weight: 230,
    cookTime: 5,
    available: true
  }
];

export const dailyPromotions = [
  {
    id: 1,
    itemId: 1,
    discount: 50,
    description: 'Скидка 50₽ на Классический итальянский'
  },
  {
    id: 2,
    itemId: 3,
    discount: 50,
    description: 'Скидка 50₽ на Тунец Мелт'
  },
  {
    id: 3,
    itemId: 6,
    discount: 50,
    description: 'Скидка 50₽ на Острый Мексиканец'
  },
  {
    id: 4,
    itemId: 9,
    discount: 50,
    description: 'Скидка 50₽ на Лосось Делюкс'
  }
];

export const sortOptions = [
  { id: 'default', name: 'По умолчанию' },
  { id: 'price-asc', name: 'По возрастанию цены' },
  { id: 'price-desc', name: 'По убыванию цены' },
  { id: 'popular', name: 'Популярные' }
];

// Моковые данные для отзывов
export const productReviews = {
  1: [ // Классический итальянский
    { id: 1, author: 'Алексей М.', rating: 5, text: 'Отличный сэндвич! Очень сытный и вкусный.', date: '10.03.2026' },
    { id: 2, author: 'Мария К.', rating: 4, text: 'Вкусно, но хотелось бы больше моцареллы.', date: '08.03.2026' },
    { id: 3, author: 'Дмитрий П.', rating: 5, text: 'Лучший сэндвич в меню! Беру уже третий раз.', date: '05.03.2026' }
  ],
  2: [ // Курица BBQ
    { id: 1, author: 'Ольга С.', rating: 5, text: 'Курица очень сочная, соус BBQ в тему!', date: '12.03.2026' },
    { id: 2, author: 'Игорь В.', rating: 4, text: 'Хороший вариант для обеда.', date: '09.03.2026' }
  ],
  3: [ // Тунец Мелт
    { id: 1, author: 'Елена Д.', rating: 5, text: 'Нежный вкус, тунца много!', date: '11.03.2026' },
    { id: 2, author: 'Сергей Н.', rating: 4, text: 'Вкусно, но дороговато.', date: '07.03.2026' },
    { id: 3, author: 'Анна Б.', rating: 5, text: 'Очень понравился! Рекомендую.', date: '04.03.2026' }
  ],
  4: [ // Овощной Фитнес
    { id: 1, author: 'Кристина Л.', rating: 5, text: 'Идеально для тех, кто следит за фигурой!', date: '13.03.2026' },
    { id: 2, author: 'Максим Р.', rating: 3, text: 'Неплохо, но не наелся.', date: '10.03.2026' }
  ],
  5: [ // Сытный Микс
    { id: 1, author: 'Андрей Т.', rating: 5, text: 'Очень сытный! Наелся на полдня.', date: '12.03.2026' },
    { id: 2, author: 'Наталья Ф.', rating: 5, text: 'Муж в восторге, говорит лучший сэндвич!', date: '08.03.2026' }
  ],
  6: [ // Острый Мексиканец
    { id: 1, author: 'Роман З.', rating: 5, text: 'Остро, как я люблю! Халапеньо огонь!', date: '11.03.2026' },
    { id: 2, author: 'Виктория М.', rating: 4, text: 'Вкусно, но очень остро для меня.', date: '06.03.2026' }
  ],
  7: [ // Цезарь с курицей
    { id: 1, author: 'Павел К.', rating: 4, text: 'Классический вкус цезаря, всё понравилось.', date: '09.03.2026' },
    { id: 2, author: 'Юлия А.', rating: 5, text: 'Любимый сэндвич! Беру постоянно.', date: '05.03.2026' }
  ],
  8: [ // Грибной
    { id: 1, author: 'Татьяна Г.', rating: 5, text: 'Грибы свежие, вкус потрясающий!', date: '10.03.2026' },
    { id: 2, author: 'Владимир Ш.', rating: 4, text: 'Хороший вегетарианский вариант.', date: '07.03.2026' }
  ],
  9: [ // Лосось Делюкс
    { id: 1, author: 'Екатерина О.', rating: 5, text: 'Роскошный сэндвич! Лосось отличный.', date: '13.03.2026' },
    { id: 2, author: 'Михаил Б.', rating: 5, text: 'Стоит своих денег, очень вкусно!', date: '11.03.2026' }
  ],
  10: [ // Капрезе
    { id: 1, author: 'София Л.', rating: 5, text: 'Моцарелла буффало - это нечто!', date: '12.03.2026' },
    { id: 2, author: 'Артем В.', rating: 4, text: 'Лёгкий и вкусный, рекомендую.', date: '08.03.2026' }
  ]
};

// Дополнительные изображения для галереи
export const productGallery = {
  1: [img1Gallery1, img1Gallery2, img1Gallery3],
  2: [img2Gallery1, img2Gallery2],
  3: [img3Gallery1, img3Gallery2, img3Gallery3],
  4: [img4Gallery1, img4Gallery2],
  5: [img5Gallery1, img5Gallery2],
  6: [img6Gallery1, img6Gallery2],
  7: [img7Gallery1, img7Gallery2],
  8: [img8Gallery1, img8Gallery2],
  9: [img9Gallery1, img9Gallery2, img9Gallery3],
  10: [img10Gallery1, img10Gallery2]
};

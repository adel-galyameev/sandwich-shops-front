# Изображения товаров

## Структура имён файлов

Файлы именуются по шаблону:
- `sandwich-{ID}-main.jpg` — основное изображение товара (для карточки)
- `sandwich-{ID}-gallery-{N}.jpg` — изображения для галереи товара

## Маппинг товаров и изображений

| ID | Название товара | Основное изображение | Галерея |
|----|-----------------|---------------------|---------|
| 1 | Классический итальянский | `sandwich-1-main.jpg` | `sandwich-1-gallery-1.jpg`, `sandwich-1-gallery-2.jpg`, `sandwich-1-gallery-3.jpg` |
| 2 | Курица BBQ | `sandwich-2-main.jpg` | `sandwich-2-gallery-1.jpg`, `sandwich-2-gallery-2.jpg` |
| 3 | Тунец Мелт | `sandwich-3-main.jpg` | `sandwich-3-gallery-1.jpg`, `sandwich-3-gallery-2.jpg`, `sandwich-3-gallery-3.jpg` |
| 4 | Овощной Фитнес | `sandwich-4-main.jpg` | `sandwich-4-gallery-1.jpg`, `sandwich-4-gallery-2.jpg` |
| 5 | Сытный Микс | `sandwich-5-main.jpg` | `sandwich-5-gallery-1.jpg`, `sandwich-5-gallery-2.jpg` |
| 6 | Острый Мексиканец | `sandwich-6-main.jpg` | `sandwich-6-gallery-1.jpg`, `sandwich-6-gallery-2.jpg` |
| 7 | Цезарь с курицей | `sandwich-7-main.jpg` | `sandwich-7-gallery-1.jpg`, `sandwich-7-gallery-2.jpg` |
| 8 | Грибной | `sandwich-8-main.jpg` | `sandwich-8-gallery-1.jpg`, `sandwich-8-gallery-2.jpg` |
| 9 | Лосось Делюкс | `sandwich-9-main.jpg` | `sandwich-9-gallery-1.jpg`, `sandwich-9-gallery-2.jpg`, `sandwich-9-gallery-3.jpg` |
| 10 | Капрезо | `sandwich-10-main.jpg` | `sandwich-10-gallery-1.jpg`, `sandwich-10-gallery-2.jpg` |

## Как заменить изображения

1. Подготовьте новое изображение (рекомендуемый размер: 400×300 для основного, 800×600 для галереи)
2. Сохраните файл с соответствующим именем (см. таблицу выше)
3. Положите файл в эту же папку (`src/images/`)
4. Изображение автоматически подхватится приложением

## Форматы изображений

Поддерживаемые форматы: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

При замене файла убедитесь, что расширение соответствует формату изображения (например, `sandwich-1-main.png` если используете PNG).

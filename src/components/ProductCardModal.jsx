import React, { useState } from 'react';
import { productReviews, productGallery } from '../data/menuData';

function ProductCardModal({ product, onClose, onAddToCart }) {
  const [activeTab, setActiveTab] = useState('info'); // 'info', 'reviews'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const reviews = productReviews[product.id] || [];
  const gallery = productGallery[product.id] || [product.image.replace('400/300', '800/600')];

  // Подсчёт среднего рейтинга
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  // Состав для каждого товара (моковые данные)
  const ingredients = {
    1: ['Ветчина', 'Салями', 'Моцарелла', 'Томаты', 'Руккола', 'Оливковое масло', 'Хлеб чиабатта'],
    2: ['Куриная грудка гриль', 'Бекон', 'Чеддер', 'Лук красный', 'Соус BBQ', 'Хлеб зерновой'],
    3: ['Тунец консервированный', 'Кукуруза', 'Огурцы свежие', 'Сливочный сыр', 'Салат айсберг', 'Хлеб'],
    4: ['Авокадо', 'Томаты', 'Огурцы', 'Хумус', 'Шпинат', 'Цельнозерновой хлеб'],
    5: ['Говядина', 'Бекон', 'Яйцо', 'Чеддер', 'Картофель фри', 'Соус фирменный', 'Хлеб'],
    6: ['Чоризо', 'Халапеньо', 'Хаварти', 'Гуакамоле', 'Сальса', 'Хлеб мексиканский'],
    7: ['Куриное филе', 'Салат ромэн', 'Пармезан', 'Сухарики', 'Соус цезарь', 'Хлеб'],
    8: ['Шампиньоны', 'Сливочный сыр', 'Лук', 'Тимьян', 'Моцарелла', 'Хлеб'],
    9: ['Лосось слабосолёный', 'Сливочный сыр', 'Авокадо', 'Огурец', 'Икра', 'Хлеб'],
    10: ['Моцарелла буффало', 'Томаты', 'Базилик', 'Бальзамик', 'Оливковое масло', 'Хлеб']
  };

  // Пищевая ценность (БЖУ)
  const nutrition = {
    1: { protein: 22, fat: 18, carbs: 35 },
    2: { protein: 28, fat: 20, carbs: 32 },
    3: { protein: 20, fat: 15, carbs: 30 },
    4: { protein: 12, fat: 14, carbs: 28 },
    5: { protein: 32, fat: 28, carbs: 40 },
    6: { protein: 24, fat: 22, carbs: 33 },
    7: { protein: 26, fat: 16, carbs: 30 },
    8: { protein: 14, fat: 12, carbs: 32 },
    9: { protein: 25, fat: 18, carbs: 25 },
    10: { protein: 18, fat: 14, carbs: 28 }
  };

  const currentNutrition = nutrition[product.id] || { protein: 0, fat: 0, carbs: 0 };
  const currentIngredients = ingredients[product.id] || [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      {/* Затемнение фона */}
      <div 
        className="modal-backdrop fade show" 
        onClick={onClose}
        style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1040 }}
      />

      {/* Модальное окно */}
      <div 
        className="modal fade show d-block" 
        tabIndex="-1"
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header border-0">
              <h4 className="modal-title fw-bold">{product.name}</h4>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="row g-4">
                {/* Левая колонка - Изображение */}
                <div className="col-lg-5">
                  <div className="position-relative">
                    {/* Основное изображение с увеличением */}
                    <div 
                      className="product-image-container"
                      style={{ 
                        borderRadius: '15px', 
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={gallery[currentImageIndex]}
                        alt={product.name}
                        className="w-100"
                        style={{
                          height: '350px',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Навигация по галерее */}
                    {gallery.length > 1 && (
                      <>
                        <button
                          className="btn btn-light position-absolute top-50 start-0 translate-middle-y rounded-circle m-2"
                          onClick={handlePrevImage}
                          style={{ zIndex: 10 }}
                        >
                          ◀
                        </button>
                        <button
                          className="btn btn-light position-absolute top-50 end-0 translate-middle-y rounded-circle m-2"
                          onClick={handleNextImage}
                          style={{ zIndex: 10 }}
                        >
                          ▶
                        </button>
                      </>
                    )}

                    {/* Миниатюры */}
                    {gallery.length > 1 && (
                      <div className="d-flex gap-2 mt-3 overflow-auto">
                        {gallery.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`View ${index + 1}`}
                            className={`rounded ${
                              index === currentImageIndex ? 'border border-2 border-primary' : ''
                            }`}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Правая колонка - Информация */}
                <div className="col-lg-7">
                  {/* Цена и статус */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <span className="display-6 fw-bold text-primary">{product.price}₽</span>
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through ms-2">
                          {product.oldPrice}₽
                        </span>
                      )}
                    </div>
                    <span className={`badge ${product.available ? 'bg-success' : 'bg-secondary'} fs-6`}>
                      {product.available ? '✓ В наличии' : '✗ Нет в наличии'}
                    </span>
                  </div>

                  {/* Описание */}
                  <p className="text-muted mb-4">{product.description}</p>

                  {/* Время приготовления */}
                  <div className="d-flex gap-4 mb-4">
                    <div>
                      <span className="text-muted small">Время приготовления</span>
                      <p className="fw-bold mb-0">⏱ {product.cookTime} мин</p>
                    </div>
                    <div>
                      <span className="text-muted small">Вес</span>
                      <p className="fw-bold mb-0">⚖️ {product.weight}г</p>
                    </div>
                    <div>
                      <span className="text-muted small">Калории</span>
                      <p className="fw-bold mb-0">🔥 {product.calories} ккал</p>
                    </div>
                  </div>

                  {/* Вкладки */}
                  <ul className="nav nav-tabs mb-3" role="tablist">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'info' ? 'active' : ''}`}
                        onClick={() => setActiveTab('info')}
                      >
                        Состав
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                      >
                        Отзывы ({reviews.length})
                      </button>
                    </li>
                  </ul>

                  {/* Содержимое вкладок */}
                  <div className="tab-content" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {activeTab === 'info' && (
                      <div>
                        {/* Ингредиенты */}
                        <h6 className="fw-bold mb-2">Ингредиенты:</h6>
                        <ul className="list-unstyled mb-3">
                          {currentIngredients.map((ing, index) => (
                            <li key={index} className="mb-1">
                              <span className="text-muted me-2">•</span>
                              {ing}
                            </li>
                          ))}
                        </ul>

                        {/* Пищевая ценность */}
                        <h6 className="fw-bold mb-2">Пищевая ценность на 100г:</h6>
                        <div className="row text-center">
                          <div className="col-4">
                            <div className="bg-light rounded p-2">
                              <p className="mb-0 fw-bold text-primary">{currentNutrition.protein}г</p>
                              <small className="text-muted">Белки</small>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="bg-light rounded p-2">
                              <p className="mb-0 fw-bold text-warning">{currentNutrition.fat}г</p>
                              <small className="text-muted">Жиры</small>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="bg-light rounded p-2">
                              <p className="mb-0 fw-bold text-success">{currentNutrition.carbs}г</p>
                              <small className="text-muted">Углеводы</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'reviews' && (
                      <div>
                        {/* Рейтинг */}
                        <div className="d-flex align-items-center mb-3">
                          <span className="display-6 fw-bold me-2">{averageRating}</span>
                          <div className="me-2">
                            {'★'.repeat(Math.floor(averageRating))}
                            {'☆'.repeat(5 - Math.floor(averageRating))}
                          </div>
                          <span className="text-muted">({reviews.length} отзывов)</span>
                        </div>

                        {/* Список отзывов */}
                        <div className="d-flex flex-column gap-3">
                          {reviews.map(review => (
                            <div key={review.id} className="border-bottom pb-2">
                              <div className="d-flex justify-content-between">
                                <span className="fw-bold">{review.author}</span>
                                <small className="text-muted">{review.date}</small>
                              </div>
                              <div className="text-warning mb-1">
                                {'★'.repeat(review.rating)}
                                {'☆'.repeat(5 - review.rating)}
                              </div>
                              <p className="mb-0 small">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Кнопка добавления в корзину */}
                  <div className="mt-4">
                    <button 
                      className="btn btn-primary-custom w-100 py-3 fs-5"
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                      disabled={!product.available}
                    >
                      {product.available ? '🛒 Добавить в корзину' : 'Товар недоступен'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardModal;

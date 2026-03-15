import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories, locations, menuItems, sortOptions } from '../data/menuData';
import ProductCardModal from '../components/ProductCardModal';

const ITEMS_PER_PAGE = 6;

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Фильтрация и сортировка меню
  const filteredMenu = useMemo(() => {
    let result = [...menuItems];

    // Фильтр по категории
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Поиск по названию
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    // Сортировка
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Пагинация
  const totalPages = Math.ceil(filteredMenu.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMenu.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredMenu, currentPage]);

  // Сброс на первую страницу при изменении фильтров
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Популярные товары (топ-5)
  const popularItems = useMemo(() => {
    return menuItems.filter(item => item.isPopular).slice(0, 5);
  }, []);

  // Акционные товары
  const saleItems = useMemo(() => {
    return menuItems.filter(item => item.isSale);
  }, []);

  // Подсчёт количества в категории
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return menuItems.length;
    return menuItems.filter(item => item.category === categoryId).length;
  };

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    // Показываем уведомление (можно заменить на toast)
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className="menu-page">
      {/* Header с навигацией */}
      <header className="menu-header bg-white shadow-sm sticky-top">
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none d-flex align-items-center">
              <span className="fs-3 me-2">🥪</span>
              <span className="fw-bold text-dark">Сэндвич-шопы</span>
            </Link>

            <div className="d-flex align-items-center gap-3">
              {/* Счётчик корзины */}
              <button className="btn btn-outline-primary position-relative">
                🛒 Корзина
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Выбор местоположения */}
              <div className="location-selector">
                <select
                  className="form-select"
                  value={selectedLocation.id}
                  onChange={(e) => {
                    const loc = locations.find(l => l.id === parseInt(e.target.value));
                    setSelectedLocation(loc);
                  }}
                  style={{ maxWidth: '280px' }}
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Основной контент с sidebar */}
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-lg-3 mb-4">
            {/* Популярное */}
            <div className="bg-white rounded-3 shadow-sm p-3 mb-4">
              <h5 className="fw-bold mb-3">Популярное</h5>
              <p className="text-muted small mb-3">Топ-5 самых заказываемых</p>
              <div className="d-flex flex-column gap-3">
                {popularItems.map((item, index) => (
                  <div key={item.id} className="d-flex align-items-center gap-2">
                    <span className="badge bg-warning text-dark" style={{ minWidth: '24px' }}>
                      {index + 1}
                    </span>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div className="flex-grow-1">
                      <p className="mb-0 small fw-medium text-truncate" style={{ maxWidth: '150px' }}>
                        {item.name}
                      </p>
                      <span className="text-primary fw-bold small">{item.price}₽</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Акции дня */}
            <div className="bg-white rounded-3 shadow-sm p-3">
              <h5 className="fw-bold mb-3">Акции дня</h5>
              <div className="d-flex flex-column gap-3">
                {saleItems.map(item => (
                  <div key={item.id} className="border rounded-2 p-2 bg-light">
                    <div className="d-flex justify-content-between align-items-start">
                      <span className="badge bg-danger mb-1">
                        -{item.oldPrice - item.price}₽
                      </span>
                    </div>
                    <p className="mb-1 small fw-medium">{item.name}</p>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-primary fw-bold">{item.price}₽</span>
                      <span className="text-muted text-decoration-line-through small">{item.oldPrice}₽</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Основной контент */}
          <main className="col-lg-9">
            {/* Панель фильтров */}
            <div className="bg-white rounded-3 shadow-sm p-3 mb-4">
              <div className="row g-2 align-items-center">
                {/* Поиск */}
                <div className="col-md-3">
                  <div className="input-group">
                    <span className="input-group-text">🔍</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Поиск..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Категории dropdown */}
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name || 'Все'} ({getCategoryCount(cat.id)})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Сортировка */}
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>

                {/* Переключатель вида */}
                <div className="col-md-3">
                  <div className="btn-group w-100" role="group">
                    <button
                      className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setViewMode('grid')}
                      title="Сетка"
                    >
                      ⊞
                    </button>
                    <button
                      className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setViewMode('list')}
                      title="Список"
                    >
                      ☰
                    </button>
                  </div>
                </div>
              </div>

              {/* Результаты поиска */}
              {(searchQuery || selectedCategory !== 'all') && (
                <div className="mt-2 text-muted small">
                  Найдено: {filteredMenu.length} товаров
                </div>
              )}
            </div>

            {/* Заголовок раздела */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0 fw-bold">
                {selectedCategory === 'all' ? 'Всё меню' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-muted">
                {filteredMenu.length} товаров
              </span>
            </div>

            {/* Сетка/список товаров */}
            {filteredMenu.length === 0 ? (
              <div className="text-center py-5 bg-white rounded-3">
                <p className="fs-4 text-muted mb-2">Ничего не найдено</p>
                <p className="text-muted">Попробуйте изменить параметры поиска или фильтра</p>
              </div>
            ) : (
              <>
                <div className={viewMode === 'grid' ? 'row g-4' : 'd-flex flex-column gap-3'}>
                  {paginatedItems.map(item => (
                    <div 
                      key={item.id} 
                      className={viewMode === 'grid' ? 'col-md-6 col-lg-4' : ''}
                      onClick={() => setSelectedProduct(item)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`product-card ${viewMode === 'list' ? 'd-flex' : ''}`}>
                        {item.isSale && (
                          <span className="badge-sale">
                            -{item.oldPrice - item.price}₽
                          </span>
                        )}
                        {item.isPopular && viewMode === 'grid' && (
                          <span className="badge bg-warning text-dark position-absolute"
                                style={{ top: '10px', right: '10px' }}>
                            Популярный
                          </span>
                        )}
                        <img
                          src={item.image}
                          alt={item.name}
                          style={viewMode === 'list' ? {
                            width: '200px',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '15px 0 0 15px'
                          } : {}}
                        />
                        <div className="card-body" style={viewMode === 'list' ? {
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center' 
                        } : {}}>
                          <h5 className="card-title">{item.name}</h5>
                          <p className="text-muted small mb-2">{item.description}</p>
                          
                          {/* Пищевая ценность */}
                          <div className="mb-2">
                            <small className="text-muted">
                              {item.calories} ккал | {item.weight}г
                            </small>
                          </div>
                          
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="price">{item.price}₽</span>
                              {item.oldPrice && (
                                <span className="old-price ms-2">{item.oldPrice}₽</span>
                              )}
                            </div>
                            <span className="small text-muted">{item.cookTime} мин</span>
                          </div>
                          
                          <div className="mt-2 small text-muted">
                            {selectedLocation.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Пагинация */}
                {totalPages > 1 && (
                  <nav className="mt-5" aria-label="Пагинация">
                    <ul className="pagination justify-content-center">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => setCurrentPage(prev => prev - 1)}
                          disabled={currentPage === 1}
                        >
                          Назад
                        </button>
                      </li>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <li 
                          key={page} 
                          className={`page-item ${currentPage === page ? 'active' : ''}`}
                        >
                          <button 
                            className="page-link"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => setCurrentPage(prev => prev + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Вперёд
                        </button>
                      </li>
                    </ul>
                  </nav>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Сэндвич-шопы</h5>
              <p className="text-muted">Национальная сеть сэндвич-шопов</p>
            </div>
            <div className="col-md-4 mb-4">
              <h6>Навигация</h6>
              <ul className="list-unstyled">
                <li><Link to="/menu" className="text-decoration-none">Меню</Link></li>
                <li><a href="#" className="text-decoration-none">Акции</a></li>
                <li><Link to="/" className="text-decoration-none">Главная</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h6>Контакты</h6>
              <ul className="list-unstyled text-muted">
                <li>8 800 000-00-00</li>
                <li>info@sandwich-shops.ru</li>
              </ul>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <div className="text-center text-muted">
            <small>© 2026 Сэндвич-шопы. Все права защищены.</small>
          </div>
        </div>
      </footer>

      {/* Модальное окно карточки товара */}
      {selectedProduct && (
        <ProductCardModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default MenuPage;

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import { advantages, popularSandwiches, newUsersPromo, partnerBenefits, franchiseSteps } from './data/mockData';

function App() {
  const navigate = useNavigate();
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handlePartnerClick = () => {
    setShowPartnerModal(true);
  };

  const HomePage = () => (
    <div className="app">
      {/* Header / Hero Section */}
      <header className="hero-section">
        <div className="container">
          <h1>🥪 Сэндвич-шопы</h1>
          <p className="lead">Вкусные сэндвичи по всей стране</p>
          <div className="mt-4">
            <button
              className="btn btn-secondary-custom me-3"
              onClick={handleRegisterClick}
            >
              Зарегистрироваться
            </button>
            <button
              className="btn btn-light"
              onClick={() => navigate('/menu')}
            >
              Смотреть меню
            </button>
          </div>
        </div>
      </header>

      {/* Преимущества сети */}
      <section className="container mt-5">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div className="row g-4">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="col-md-6 col-lg-4">
              <div className="advantage-card">
                <div className="icon">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <p className="text-muted mb-0">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Популярные сэндвичи */}
      <section className="container mt-5">
        <h2 className="section-title">Популярные сэндвичи</h2>
        <div className="row g-4">
          {popularSandwiches.map((sandwich) => (
            <div key={sandwich.id} className="col-md-6 col-lg-4">
              <div className="product-card">
                {sandwich.isSale && (
                  <span className="badge-sale">{sandwich.oldPrice - sandwich.price}₽ скидка</span>
                )}
                <img src={sandwich.image} alt={sandwich.name} />
                <div className="card-body">
                  <span className="badge bg-light text-dark mb-2">{sandwich.category}</span>
                  <h5 className="card-title">{sandwich.name}</h5>
                  <p className="text-muted small">{sandwich.description}</p>
                  <div className="d-flex align-items-center">
                    <span className="price">{sandwich.price}₽</span>
                    {sandwich.oldPrice && (
                      <span className="old-price">{sandwich.oldPrice}₽</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Промокод для новых пользователей */}
      <section className="container mt-5">
        <div className="promo-section text-center" style={{ background: 'linear-gradient(135deg, #00b894, #00cec9)', color: 'white' }}>
          <span className="promo-badge" style={{ background: 'white', color: '#00b894' }}>Новым клиентам</span>
          <h3 className="mb-3">🎁 Скидка 30% на первый заказ!</h3>
          <p className="lead mb-4">{newUsersPromo.description}</p>
          <div className="bg-white text-dark rounded-3 d-inline-block p-4">
            <p className="mb-2 text-muted small">Промокод:</p>
            <p className="display-6 fw-bold text-primary mb-3" style={{ letterSpacing: '3px' }}>{newUsersPromo.code}</p>
            <button 
              className="btn btn-primary-custom"
              onClick={handleRegisterClick}
            >
              Зарегистрироваться и использовать
            </button>
          </div>
        </div>
      </section>

      {/* Секция для партнёров */}
      <section className="container mt-5">
        <div className="partner-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Станьте партнёром сети</h2>
              <p className="lead mb-4">Откройте свой сэндвич-шоп по проверенной франшизе</p>
              
              <div className="partner-benefits">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit.id} className="benefit-item">
                    <span className="benefit-check">✓</span>
                    <div>
                      <strong>{benefit.title}</strong>
                      <p className="mb-0 opacity-75">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="btn btn-partner mt-4"
                onClick={handlePartnerClick}
              >
                Стать партнёром
              </button>
            </div>
            
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h4 className="mb-4">Как стать партнёром:</h4>
              <div className="row g-3">
                {franchiseSteps.map((step) => (
                  <div key={step.id} className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" 
                           style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                        {step.id}
                      </div>
                      <div>
                        <strong className="text-white">{step.title}</strong>
                        <p className="mb-0 small opacity-75">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>🥪 Сэндвич-шопы</h5>
              <p className="text-muted">Национальная сеть сэндвич-шопов с функцией онлайн-заказов и доставки</p>
            </div>
            <div className="col-md-4 mb-4">
              <h6>Навигация</h6>
              <ul className="list-unstyled">
                <li><button onClick={() => navigate('/menu')} className="btn btn-link text-decoration-none">Меню</button></li>
                <li><a href="#" className="text-decoration-none">Акции</a></li>
                <li><a href="#" className="text-decoration-none">О нас</a></li>
                <li><a href="#" className="text-decoration-none">Контакты</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h6>Контакты</h6>
              <ul className="list-unstyled text-muted">
                <li>📞 8 800 000-00-00</li>
                <li>✉️ info@sandwich-shops.ru</li>
                <li>📍 Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <div className="text-center text-muted">
            <small>© 2026 Сэндвич-шопы. Все права защищены.</small>
          </div>
        </div>
      </footer>

      {/* Модальное окно регистрации */}
      {showRegisterModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Регистрация</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowRegisterModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Переход на страницу регистрации...</p>
                <div className="alert alert-info">
                  В полной версии здесь будет форма регистрации нового пользователя
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowRegisterModal(false)}
                >
                  Закрыть
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary-custom"
                  onClick={() => {
                    setShowRegisterModal(false);
                    alert('Переход к форме регистрации');
                  }}
                >
                  Продолжить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно партнёрства */}
      {showPartnerModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Стать партнёром</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowPartnerModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <h6>Заполните заявку на франшизу</h6>
                <p className="text-muted">Наш менеджер свяжется с вами в течение 24 часов</p>
                <div className="alert alert-info">
                  В полной версии здесь будет форма заявки на франшизу с полями:
                  <ul className="mb-0 mt-2">
                    <li>ФИО</li>
                    <li>Телефон</li>
                    <li>Email</li>
                    <li>Город</li>
                    <li>Комментарий</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowPartnerModal(false)}
                >
                  Закрыть
                </button>
                <button 
                  type="button" 
                  className="btn btn-partner"
                  onClick={() => {
                    setShowPartnerModal(false);
                    alert('Спасибо за интерес! В полной версии здесь будет отправлена форма заявки.');
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
}

export default App;

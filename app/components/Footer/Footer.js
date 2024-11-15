// import { useEffect, useState } from 'react';

const Footer = () => {
  //   const [visibleElements, setVisibleElements] = useState([false, false, false]);

  //   const toggleFooterMenu = (index) => {
  // Проверяем ширину экрана
  //     if (window.innerWidth <= 767) {
  //       setVisibleElements((prevState) =>
  //         prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
  //       );
  //     }
  //   };

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth > 767) {
  //         setVisibleElements([true, true, true]);
  //       } else {
  //         setVisibleElements([false, false, false]);
  //       }
  //     };

  //     // Добавляем обработчик события resize
  //     window.addEventListener('resize', handleResize);
  //     handleResize(); // Проверяем ширину при первом рендере

  //     // Удаляем обработчик при размонтировании компонента (если компонент будет удален)
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  return (
    <footer>
      <div style={{ display: 'flex' }}>
        <div>
          <div>{/* <img src="" alt="изображение" /> */}</div>
          <ul>
            <li>{/* <img src="" alt="изображение" /> */}</li>
            <li>{/* <img src="" alt="изображение" /> */}</li>
            <li>{/* <img src="" alt="изображение" /> */}</li>
          </ul>
          <p>Instagram является запрещенной соц.сетью в&nbsp;РФ</p>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <h5>Информация</h5>
            <ul>
              <li>О магазине</li>
              <li>Наш блог</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <h5>Товары</h5>

            <ul>
              <li>Каталог</li>
              <li>Мужские</li>
              <li>Женские</li>
              <li>Детские</li>
              <li>Распродажа</li>
            </ul>
          </div>
          <div>
            <h5>Магазин</h5>
            <ul>
              <li>Личный&nbsp;кабинет</li>
              <li>Избранное</li>
              <li>Корзина</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5>Подписка на&nbsp;новости</h5>
            <p>Подпишитесь на&nbsp;новости&nbsp;и&nbsp;скидки</p>
          </div>
          <form>
            <div>
              <input type="email" placeholder="Email" />
              <button>Подписаться</button>
            </div>
            <small>
              Согласен&nbsp;с&nbsp;
              <a href="/privacy-policy" target="_black">
                политикой конфиденциальности
              </a>
            </small>
          </form>
        </div>
      </div>
      <div>
        <div>
          <p>© 2023 - Swoosh Store - Интернет-магазин ориганальных кроссовок</p>
          <p>
            <a href="/privacy-policy">Политика конфиденциальности</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

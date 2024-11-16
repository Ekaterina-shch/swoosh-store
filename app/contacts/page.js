// import { useState } from 'react';

export default function Contacts() {
  // const [activeTab, setActiveTab] = useState('city1');

  // const cities = {
  //   city1: {
  //     name: 'Ростов-на-Дону',
  //     address: 'Ростов-на-Дону, улица Доватора, дом 158а, -1 этаж. ',
  //     phone: '+7 918 547 20 83',
  //     email: 'orders@sstore.ru',
  //     mapUrl: 'https://yandex.ru/maps/1',
  //   },
  //   city2: {
  //     name: 'Москва',
  //     address: 'ул. Тестовая, д. 2',
  //     phone: '+7 000 987-65-43',
  //     email: 'orders@sstore.ru',
  //     mapUrl: 'https://yandex.ru/maps/2',
  //   },
  // };

  return (
    <div>
      <h1>Наши контакты</h1>
      <div className="tabs">
        {/* {Object.keys(cities).map((key) => (
          <button
            key={key}
            className={activeTab === key ? 'active' : ''}
            onClick={() => setActiveTab(key)}
          >
            {cities[key].name}
          </button>
        ))} */}
      </div>

      <div className="tab-content">
        <div className="info">
          <div>
            <h3>Адрес:</h3>
            {/* <p> {cities[activeTab].address}</p> */}
          </div>
          <div>
            <h3>Телефон:</h3>
            {/* <p>{cities[activeTab].phone}</p> */}
          </div>
          <div>
            <h3>Email:</h3>
            {/* <p>{cities[activeTab].email}</p> */}
          </div>
          <div>
            <p>Мы в соц.сетях:</p>
            <a href="#">
              <div>инста</div>
            </a>
            <a href="#">
              <div>vk</div>
            </a>
            <small>* Instagram является запрещенным в РФ</small>
          </div>
        </div>
        {/* <iframe
          src={cities[activeTab].mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title={`Карта для ${cities[activeTab].name}`}
        ></iframe> */}
      </div>

      <div>
        <h3>У вас есть вопросы? Напишите нам!</h3>
        <p>Мы с радостью ответим на все интересующие вас вопросы.</p>
        <form className="question-form">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Ваш Email" />
          <textarea placeholder="Текст вопроса"></textarea>
          <button type="submit">Отправить</button>
          <small>
            Нажимая кнопку “Отправить” я соглашаюсь с{' '}
            <a href="/privacy-policy">политикой конфиденциальности</a>
          </small>
        </form>
        <div className="success" style={{ display: 'none' }}>
          <p>Спасибо!</p>
          <p>
            Мы получили Ваше сообщение. В ближайшее время наши менеджеры
            свяжутся с вами и ответят на все вопросы.
          </p>
        </div>
      </div>
    </div>
  );
}

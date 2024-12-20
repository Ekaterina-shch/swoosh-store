export default function IndividualOrder() {
  return (
    <div>
      <h1>Индивидуальный заказ</h1>
      <p>
        Здесь вы можете стать обладателем поистине уникальных и лимитированных
        моделей кроссовок Nike, ожидая их поступления в продажу. Мы ценим вашу
        страсть к стилю и предоставляем вам уникальную возможность заказать
        кроссовки, которые будут дополнением вашей индивидуальности.
      </p>
      <div>
        <h2>Условия заказа:</h2>
        <ol>
          <li>
            <b>Выбор модели:</b> Ознакомьтесь с нашим каталогом лимитированных
            моделей и выберите ту, которая вам больше всего понравилась.
          </li>
          <li>
            <b>Предоплата:</b> Для подтверждения вашего заказа требуется внести
            предоплату в размере 100% от стоимости кроссовок.
          </li>
          <li>
            <b>Сроки ожидания:</b> Обычно срок поступления лимитированных
            кроссовок составляет 4-6 недель с момента оформления заказа и
            внесения предоплаты.
          </li>
          <li>
            <b>Уведомление о готовности:</b> У Как только заказанные кроссовки
            поступят в наш магазин, мы отправим вам уведомление по электронной
            почте или SMS.
          </li>
          <li>
            <b>Доставка:</b> После полной оплаты мы доставим ваши уникальные
            кроссовки прямо к вам по указанному адресу.
          </li>
        </ol>
      </div>
      <div>
        <form>
          <label>
            Ваше имя <span>*</span>
            <input type="text" placeholder="Как вас зовут?" required />
          </label>
          <label>
            Номер телефона <span>*</span>
            <input type="tel" placeholder="+7 (___) ___-__-__" required />
          </label>
          <label>
            Ваше имя <span>*</span>
            <input type="email" placeholder="Введи ваш email адрес" required />
          </label>
          <label>
            Сообщение
            <textarea placeholder="Укажите любой другой способ связи"></textarea>
          </label>
          <button>Отправить</button>
          <small>
            Нажимая кнопку “Отправить” я соглашаюсь с{' '}
            <a href="/privacy-policy" target="_black">
              политикой конфиденциальности
            </a>
          </small>
        </form>
      </div>
    </div>
  );
}

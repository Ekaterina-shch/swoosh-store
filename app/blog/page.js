import Link from 'next/link';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Blog() {
  const articles = await fetchData();
  return (
    <section className="blog-page__container">
      <h1>Блог</h1>
      <div className="blog-page__wrapper">
        <div className="blog-page__left">
          <div className="posts">
            {articles.map((article) => {
              return (
                <div className="post" key={article.id}>
                  {/* <img src="" alt=""/> */}
                  <div className="body">
                    <h3 className="tag">Статья</h3>
                    <div className="title">{article.title}</div>
                    <div className="bottom">
                      <Link href={`/blog/` + article.id}>Подробнее</Link>
                      <time className="date">10 августа 2023</time>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <button type="button"> Назад</button>
            <div>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
            </div>
            <button type="button">Далее </button>
          </div>
        </div>
        {/* <div className="blog-page__sidebar">
          <div className="filter">
            <h2>Рубрики</h2>
            <ul>
              <li>
                <span>Все публикации</span> <span>123</span>
              </li>
              <li>
                <span>Новости</span> <span>34</span>
              </li>
              <li>
                <span>Статьи</span> <span>99</span>
              </li>
              <li>
                <span>Советы</span> <span>14</span>
              </li>
              <li>
                <span>Обзоры</span> <span>2</span>
              </li>
            </ul>
          </div>
          <article>
            <h3>Подпишитесь на рассылку</h3>
            <p>
              Регулярные скидки и спецпредложения, а так же новости компании.
            </p>
            <form>
              <input type="email" />
              <button type="submit">Подписаться</button>
              <small>
                Согласен с{' '}
                <a href="/privacy-policy">политикой конфиденциальности</a>
              </small>
            </form>
          </article>
        </div> */}
      </div>
    </section>
  );
}

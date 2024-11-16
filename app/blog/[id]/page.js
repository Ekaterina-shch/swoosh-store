// import { useRouter } from 'next/router';

// const articles = [
//   {
//     id: '1',
//     title: 'Новость 1',
//     content: 'Содержимое новости 1',
//     category: 'Новости',
//   },
//   {
//     id: '2',
//     title: 'Статья 1',
//     content: 'Содержимое статьи 1',
//     category: 'Статьи',
//   },
//   {
//     id: '3',
//     title: 'Совет 1',
//     content: 'Содержимое совета 1',
//     category: 'Советы',
//   },
//   {
//     id: '4',
//     title: 'Обзор 1',
//     content: 'Содержимое обзора 1',
//     category: 'Обзоры',
//   },
// ];

// export async function getStaticPaths() {
//   const paths = articles.map((article) => ({ params: { id: article.id } }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const article = articles.find((a) => a.id === params.id);
//   return { props: { article } };
// }

async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const result = await res.json();
  return result;
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const post = await fetchData(id);

  return (
    <div className="blog">
      <div className="article-content">
        <p>
          {id} {post.title}
        </p>
        {/* <h1>Кроссовки как повседневная обувь. Плюсы и минусы</h1>
        <p>
          Подбор обуви для повседневной носки – важный аспект, который
          определяет комфорт и стильность вашего образа. Среди множества
          вариантов обуви кроссовки занимают особое место. С их появлением в
          спортивной индустрии кроссовки перешли долгий путь от
          специализированной спортивной обуви к популярному элементу гардероба.
          В данной статье мы рассмотрим плюсы и минусы использования кроссовок в
          качестве повседневной обуви.
        </p> */}
        {/* <img src="" alt=""/> */}
      </div>
    </div>
  );
}

import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/about">О магазине</Link>
        <Link href="/blog">Наш блог</Link>
        <Link href="/delivery-and-payment#delivery">Доставка</Link>
        <Link href="/delivery-and-payment#payment">Оплата </Link>
        <Link href="/contacts">Контакты</Link>
        <Link href="/individual-order">Индивидуальный заказ</Link>
      </nav>
    </header>
  );
};

export default Header;

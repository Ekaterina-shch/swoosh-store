import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/about">О магазине</Link>
        <Link href="/blog">Наш блог</Link>
        <Link href="/delivery-and-payment">Доставка</Link>
        <Link href="/delivery-and-payment">Оплата </Link>
        <Link href="/contact">Контакты</Link>
        <Link href="/individual-order">Индивидуальный заказ</Link>
      </nav>
    </header>
  );
};

export default Header;

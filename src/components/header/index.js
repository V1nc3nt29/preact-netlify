import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>Recalbox</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Créer sa Recalbox</Link>
			<Link activeClassName={style.active} href="/contact">Systemes</Link>
		</nav>
	</header>
);

export default Header;

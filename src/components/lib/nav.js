import Link from 'next/link';

const Nav = ({pages}) => {
    return (
        <ul className="n">
            {pages.map(page => (
                <li>
                    <Link href={page.path}>
                        <a>{page.displayName}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
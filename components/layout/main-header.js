import Link from 'next/link';
import classes from './main-header.module.css';



function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>
                    
                    <img className={classes.imagelogo} src={process.env.PUBLIC_URL+"../../images/Dat0s Logo-no-name.png"} alt="pic" />
                </Link>
                {/* <p>Dat0s</p> */}
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/#aboutUs_link'>About Us</Link>
                    </li>
                    <li>
                        <Link href='/events'>Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;
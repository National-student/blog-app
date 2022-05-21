import './header.css';

//images header logo
import Logo from '../../assets/images/logo.png';
import Loop from '../../assets/images/searchloop.png';

import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Header() {
    const butt = useRef()
    const item = useRef()
    const buti = document.querySelector('.nav-but')

    function btclik() {
        butt.current.classList.toggle('but')
        item.current.classList.toggle('item')
         
        
        if(buti.textContent==='+'){
            buti.textContent = '_='
        }else{
            buti.textContent = '+'
        }
    }

    return (
        <>
            <header>
                <div className='logo-link'>
                    <Link to={'/'}><img className='logo-img' src={Logo} alt="logoimg" width={'58'} height={'58'} /></Link>
                    <Link className='link-name' to={'/'}> <h1 className='name'>BoburBlog</h1> </Link>
                </div>
                <nav className='navbar'>
                    <ul className='nav-list hi-list'>
                        <li className='nav-none'>
                            <button ref={butt} onClick={btclik} className='nav-but'>_=</button>
                            <ul ref={item} className='nav-list list-dr'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/'}>All</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/design'}>Design Theory</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/ux'}>UX</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/ui'}>UI</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/typog'}>Typography</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <form>
                            <input className='nav-input' type="text" placeholder='Search' />
                            <img className='nav-loop' src={Loop} alt="" />
                            </form>
                        </li>
                    </ul>
                </nav>

            </header>



        </>
    )

}
export default Header;

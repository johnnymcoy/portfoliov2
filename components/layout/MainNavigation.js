// Imports
import Link from 'next/link'
import CSS from "./MainNavigation.module.scss";
import { useDispatch } from "react-redux";

import { menuActions } from "../../store/mainStore";

function MainNavigation(props){
    const dispatch = useDispatch();

    const bMenuOpen = props.menuOpen;
    const mobileMenuClasses = bMenuOpen ? `${CSS.mobileNav} ${CSS.mobileNavOpen}` : `${CSS.mobileNav}`;
    const menuInnerClasses = bMenuOpen ? `${CSS.mobileInner} ${CSS.mobileInnerOpen}` : `${CSS.mobileInner}`;
    const menuButtonClasses = bMenuOpen ? `${CSS.menuButton} ${CSS.closeMenuButton}` : `${CSS.menuButton} ${CSS.openMenuButton}`;

    const menuAction = bMenuOpen ? closeMenuButtonHandler : openMenuButtonHandler;
    function openMenuButtonHandler(){
        dispatch(menuActions.openMenu());
    }
    function closeMenuButtonHandler(){
        dispatch(menuActions.closeMenu());
    }

    function menuButtonHandler(){
        dispatch(menuActions.closeMenu());
    }
    //Burger
    const svgRec1 = bMenuOpen ? `${CSS.rectangle1Close} ` : `${CSS.rectangle1} ` ;
    const svgRec2 = bMenuOpen ? `${CSS.rectangle2Close} ` : `${CSS.rectangle2} ` ;
    const svgRec3 = bMenuOpen ? `${CSS.rectangle3Close} ` : `${CSS.rectangle3} ` ;


   return(
       <nav className={CSS.nav}>
            <div className={mobileMenuClasses}>
                <div className={menuInnerClasses}>
                    <ul className={CSS.mobilePages}>
                        <li className={CSS.svgWrapper} onClick={menuButtonHandler}>
                            <Link className={CSS.link} href="/">
                                <>
                                    <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                    <rect className={CSS.shape} height="64" width="288" />
                                    </svg>
                                    Home
                                </>
                            </Link>
                        </li>
                        <li className={CSS.svgWrapper} onClick={menuButtonHandler}>
                            <Link className={CSS.link} href="/portfolio">
                                <>
                                <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                <rect className={CSS.shape} height="64" width="288" />
                                </svg>
                                Portfolio
                                </>

                            </Link>
                        </li>
                        <li className={CSS.svgWrapper} onClick={menuButtonHandler}>
                            <Link className={CSS.link} href="/about-me">
                            <>
                                <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                <rect className={CSS.shape} height="64" width="288" />
                                </svg>
                                About Me
                                </>

                            </Link>
                        </li>
                        <li className={CSS.svgWrapper} onClick={menuButtonHandler}>
                            <Link className={CSS.link} href="/contact">
                            <>
 
                                <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                <rect className={CSS.shape} height="64" width="288" />
                                </svg>  
                                Contact
                                </>

                            </Link>
                        </li>
                        {/* {bIsAuthenticated && <>
                        <li className={CSS.svgWrapper}>
                            <Link className={CSS.link} to="/admin/AdminDashboard" onClick={menuButtonHandler}>
                                <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                <rect className={CSS.shape} height="64" width="288" />
                                </svg>  
                                Admin Dashboard
                            </Link>
                        </li>
                        <li className={CSS.svgWrapper}>
                            <Link className={CSS.link} to="#" onClick={menuButtonHandler}>
                                <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                <rect className={CSS.shape} height="64" width="288" />
                                </svg>  
                                Blog
                            </Link>
                        </li>                          
                        <li className={CSS.svgWrapper}>
                            <Link className={CSS.link} to="#" onClick={logoutHandler}>
                                <svg className={CSS.svg} height="64" width="288" xmlns="http://www.w3.org/2000/svg">
                                <rect className={CSS.shape} height="64" width="288" />
                                </svg>  
                                Logout
                            </Link>
                        </li>
                        </>} */}
                    </ul>
                    {/* {bThemeChangeVisible&& 
                        <button onClick={themeChangeHandler}>Theme</button>
                    }
                    {bSocialsVisible && 
                    <ul className={CSS.socials}>
                        <li><SocialLink type="twitch"/></li>
                        <li><SocialLink type="twitter"/></li>
                        <li><SocialLink type="youtube"/></li>
                    </ul>
                    } */}
                </div>
            </div>
            <div className={CSS.mainNav}>
                {/* <Link className={CSS.logo} href="/" onClick={menuButtonHandler}>Curtis Bucciol</Link> */}
                <button className={menuButtonClasses} onClick={menuAction}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect className={svgRec1} width="100" height="10"></rect>
                        <rect className={svgRec2} y="35" width="100" height="10"></rect>
                        <rect className={svgRec3} y="70" width="100" height="10"></rect>
                    </svg>
                </button>
            </div>

       </nav>

);}

export default MainNavigation;
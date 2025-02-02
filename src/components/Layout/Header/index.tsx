import { useEffect, useRef, useState, useCallback } from 'react';
import useMediaQuery from '@/utils/hooks/useMediaQuery';
import useOnResize from '@/utils/hooks/useOnResize';
import Link from 'next/link';
import Styles from './header.module.scss';
import { usePathname, useRouter } from 'next/navigation';

const data = {
    logo: "",
    logo_alt: "Karthik",
    menu: [
        {
            label: "Home",
            link: null,
            target: "_self",
            status: ""
        },
        {
            label: "Works",
            link: "works",
            target: "_self",
            status: ""
        },
        {
            label: "About",
            link: "about-me",
            target: "_self",
            status: ""
        },
        {
            label: "Resume",
            link: "assets/pdf/resume/Karthik-MR.pdf",
            target: "_blank",
            status: ""
        }
    ]
}

const Header = (props: any) => {
    let pathname = usePathname();
    const { width: isResize } = useOnResize() || {};
    const getHeaderRef = useRef<any>(null);
    const isPageWide = useMediaQuery('(max-width: 1279px)');
    const isMobile = useMediaQuery('(max-width: 1280px)');
    const [navactive, setNavActive] = useState(false);
    const isDarkHeader = props?.darkHeader || false;
    const router = useRouter();

    function noScrollBody() {
        let getBody: any = document.getElementsByTagName('body');
        if (getHeaderRef.current) {
            navactive ? getBody[0]?.classList.add('no-overflow') : getBody[0]?.classList.remove('no-overflow')
        }
    }

    const memoizedHandleWindowScroll = useCallback(() => {
        let getScollLength = window.pageYOffset || document.documentElement.scrollTop;
        let getBody: any = document.getElementsByTagName('body');
        if (getHeaderRef.current) {
            if (getScollLength > 0) {
                getBody[0]?.classList.add('fixed-header');
            } else {
                getBody[0]?.classList.remove('fixed-header');
            }

            if (isDarkHeader) {
                getBody[0]?.classList.add('fixed-header--dark');
            } else {
                getBody[0]?.classList.remove('fixed-header--dark');
            }
        }
    }, [isDarkHeader]);

    const [hostUrl, setHostUrl] = useState('');

    useEffect(() => {
        // Check if window is defined (running in the browser)
        if (typeof window !== 'undefined') {
            const protocol = window.location.protocol || 'http:';
            const url = `${protocol}//${window.location.host}`;
            setHostUrl(url);
        }
    }, []);

    // Check if the current path is /works or /work/*
    const basePath = pathname.startsWith('/works') ? '/works/' : '/';

    useEffect(() => {
        memoizedHandleWindowScroll();
        window.addEventListener('scroll', memoizedHandleWindowScroll);
        return () => window.removeEventListener('scroll', memoizedHandleWindowScroll);
    }, [memoizedHandleWindowScroll, isResize, props]);

    // useEffect(() => {
    //     document.documentElement.style.setProperty(
    //         '--header-height',
    //         `${getHeaderRef?.current?.clientHeight}px`
    //     );
    // }, []);

    useEffect(() => {
        noScrollBody()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isResize]);

    useEffect(() => {
        !isPageWide && setNavActive(false)
    }, [isPageWide]);

    // function windowResizeEvent(timeout: any) {
    //     setTimeout(() => {
    //         document.documentElement.style.setProperty(
    //             '--header-height',
    //             `${getHeaderRef?.current?.clientHeight}px`
    //         );
    //     }, timeout);
    // }

    // const browserCheck = [
    //     {
    //         device: 'win',
    //         browser: 'chrome',
    //         body_cls: 'window-agent',
    //     },
    //     {
    //         device: 'mac',
    //         browser: 'chrome',
    //         body_cls: 'safari-agent',
    //     },
    //     {
    //         device: 'mac',
    //         browser: 'firefox',
    //         body_cls: 'mac-firefox-agent',
    //     },
    //     {
    //         device: 'windows',
    //         browser: 'firefox',
    //         body_cls: 'win-firefox-agent',
    //     },
    //     {
    //         device: 'android',
    //         browser: 'chrome',
    //         body_cls: 'android-chrome-agent',
    //     },
    //     {
    //         device: 'android',
    //         browser: 'firefox',
    //         body_cls: 'android-firefox-agent',
    //     },
    //     {
    //         device: 'mac',
    //         browser: '',
    //         body_cls: 'mac-safari-agent',
    //     },
    // ];

    // useEffect(() => {
    //     function windowResizeEvent() {
    //         let getNavigator = navigator.userAgent;
    //         for (let i = 0; i < browserCheck.length; i++) {
    //             if (
    //                 getNavigator
    //                     .toLowerCase()
    //                     .indexOf(browserCheck[i].browser) > -1 &&
    //                 getNavigator.toLowerCase().indexOf(browserCheck[i].device) >
    //                 -1
    //             ) {
    //                 let getBody = document.getElementsByTagName('body')[0];
    //                 getBody.classList.add(browserCheck[i].body_cls);
    //                 break;
    //             }
    //         }
    //     }
    //     windowResizeEvent();
    //     window.addEventListener('resize', windowResizeEvent);
    //     return () => window.removeEventListener('resize', windowResizeEvent);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    useEffect(() => {
        // windowResizeEvent(250);
        noScrollBody()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navactive])

    const MenuNavBar = () => {
        return (
            <ul className={`flex max-xl:!items-start items-center list-none max-xl:flex-col max-xl:w-full max-xl:min-h-[35vh]`}>
                {props?.data?.menu.map(
                    (item: any, key: any) => {
                        return (
                            <li
                                key={key}
                                className={`relative flex flex-col items-center transition-[all_.3s_ease-in-out] max-sm:transition-[opacity_0s_ease-in-out] pr-[40px] last:pr-0 max-xl:w-full max-xl:!p-[12px_40px] group`}
                            >
                                <Link
                                    target={item?.target ?? "_self"}
                                    href={basePath ? `${hostUrl}/${item?.link ? item?.link : ''}` : item?.link}
                                    className={`${props?.menuCustomStyles ? props?.menuCustomStyles : ''} ${(item?.status === 'active' && props?.isActiveStyles) ? props?.isActiveStyles : ''} ${item?.status === 'active' ? 'text-black' : 'text-grey'} cursor-pointer text-[28px] font-[400] xl:text-[16px] xl:font-[300] uppercase xl:capitalize no-underline transition-all duration-300 ease-in-out p-[0px] max-xl:whitespace-nowrap relative group-hover:text-black`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setNavActive(false)
                                    }}
                                    aria-label={item?.label}
                                >
                                    {item?.label}
                                </Link>
                                <span className={`w-[35px] h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:scale-x-[1] ${(item?.status === 'active') ? ' scale-x-[0.2]' : ' scale-x-0'}`}></span>
                            </li>
                        );
                    }
                )}
            </ul>
        );
    };

    return (
        <>
            <header
                className={`${Styles['header__wrapper']} h-[80px] fixed p-[30px_0] w-full top-0 left-0 right-0 xl:!min-h-[90px] max-xl:p-[20px_0] z-[101] bg-[#fff] xl:bg-transparent transition-colors duration-[50ms] ${props?.headerStyles}`}
                ref={getHeaderRef}>
                <div className={`flex items-center justify-between relative w-[88%] mx-auto max-w-[1280px]`}>
                    <Link
                        href={`${hostUrl}`}
                        aria-label={`logo`}
                        className="inline-block max-w-[150px] relative z-[100] xl:z-[102] xl:mb-[auto] shrink-0 max-h-[42px]"
                        aria-labelledby="logo"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='max-w-[32px]' width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_3001_1946)">
                                <rect width="32" height="32" rx="8.8189" fill="black" />
                                <path d="M0 -5L-7.32166e-07 34.5" stroke="#0F0F0F" stroke-width="3.125" stroke-linecap="round" />
                                <path d="M12.49 17.9902L7.00991 12.5102" stroke="white" stroke-width="3.125" stroke-linecap="round" />
                                <path d="M7.01001 17.9902L12.4901 12.5102" stroke="white" stroke-width="3.125" stroke-linecap="round" />
                                <path d="M31.875 -5L31.875 34.5" stroke="#0F0F0F" stroke-width="3.125" stroke-linecap="round" />
                                <path d="M23.2614 14.6567L23.2617 14.6562L23.2614 14.6567ZM23.4782 13.2188L22.2674 13.9178L23.4782 13.2187C22.8768 12.1771 21.3732 12.1771 20.7718 13.2187C20.7718 13.2188 20.7718 13.2188 20.7718 13.2188L19.148 16.0312C18.5466 17.0729 19.2984 18.375 20.5012 18.375H23.7488C24.9516 18.375 25.7034 17.0729 25.102 16.0313L23.4782 13.2188Z" stroke="white" stroke-width="2.875" />
                            </g>
                            <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="7.5689" stroke="black" stroke-width="2.5" />
                            <defs>
                                <clipPath id="clip0_3001_1946">
                                    <rect width="32" height="32" rx="8.8189" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    {(isMobile) ? (
                        <nav
                            className={`ml-auto xl:hidden fixed top-0 -right-[100%] pt-[80px] ${navactive ? '!right-0 z-[103]' : ''} overflow-x-hidden overflow-y-auto bottom-0 max-[600px]:w-full w-[385px] transition-all duration-500 ease-in-out bg-white`}
                            onClick={(e) => {
                                setNavActive(false);
                            }}
                            aria-label="Main"
                        >
                            <MenuNavBar />
                        </nav>
                    ) : (
                        <nav
                            className={`hidden xl:block pl-[20px] transition-all duration-500 ease-in-out`}
                            onClick={(e) => {
                                setNavActive(false);
                            }}
                            aria-label="Main"
                        >
                            <MenuNavBar />
                        </nav>
                    )}
                    <div
                        onClick={(e) => {
                            setNavActive(!navactive);
                        }}
                        role="button"
                        aria-pressed={navactive ? 'true' : 'false'}
                        aria-haspopup="true"
                        aria-label="Hamburger button"
                        className={`w-[26px] h-[18px] leading-[none] border-none relative cursor-pointer z-[200] origin-center flex ml-auto xl:hidden before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out
                            before:bg-black before:bottom-0 before:left-0 before:absolute before:rounded-[100px] before:mb-[-2px] before:h-[3px] before:rotate-[0deg] before:w-full before:content-[""] before:origin-center before:leading-[none] before:z-[10]
                            after:bg-black after:top-0 after:left-0 after:mt-[-1px] after:leading-[none] after:absolute after:rounded-[100px] after:rotate-[0deg] after:h-[3px] after:w-full after:content-[""] after:origin-center
                            ${navactive ? 'before:!bg-[#000] before:!rotate-[-45deg] before:!bottom-[50%] before:!mb-[-2px] after:!bg-[#000] after:!rotate-45 after:!top-[50%] after:!mt-[-1px] after:z-[10]' : ''}`}>
                        <span
                            className={`top-[calc(50%_-_-1px)] mt-[-2px] visible w-full h-[3px] z-[5] rounded-[100px] absolute left-0 transition-all duration-300 ease-in-out ${navactive ? 'invisible opacity-0 bg-transparent' : 'opacity-100 bg-black'}`}></span>
                    </div>
                </div>
            </header>
            {!isMobile && (
                <span
                    role="none"
                    className={`fixed inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 bg-[rgba(0,0,0,0.6)] ${navactive ? `!opacity-[1] z-[100]` : '-z-[1]'}`}
                />
            )}
        </>
    );
};

export default Header;
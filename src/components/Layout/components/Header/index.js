import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import {
  faCircleXmark,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faPlus,
  faQuestionCircle,
  faRightFromBracket,
  faRss,
  faSignIn,
  faSpinner,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faFileVideo, faMessage, faMoneyBill1, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faRss} />,
    title: 'LIVE Creator Hub',
    href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=en&region=VN',
  },
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
          type: 'language',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          type: 'language',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    children: {
      title: 'Dark mode',
      data: [
        {
          type: 'Dark mode',
          title: 'Use device theme',
        },
        {
          type: 'Dark mode',
          title: 'Dark mode',
        },
        {
          type: 'Dark mode',
          title: 'Light mode',
        },
      ],
    },
  },
];


function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Handle logic language
        break;
      default:
    }
  };

  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      href: 'https://www.tiktok.com/@xmeiyewbanx',
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: 'Favorites',
      href: 'https://www.tiktok.com/@xmeiyewbanx',
    },
    {
      icon: <FontAwesomeIcon icon={faMoneyBill1} />,
      title: 'Get Coins',
      href: 'https://www.tiktok.com/coin/unavailable?isUserExist=true&isUserForbidden=true&isUserReady=true',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/setting',
    },
    {
      icon: <FontAwesomeIcon icon={faFileVideo} />,
      title: 'LIVE Studio',
      href: 'https://www.tiktok.com/studio/download?enter_from=profile',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok"></img>
        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search" spellCheck={false}></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                Upload
              </Button>

              <Tippy content="Inbox" placement="bottom">
                <button class={cx('msg-btn')}>
                  <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser?userMenu:MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/df6bef0752d7599f485d741b23fd2094.jpeg?lk3s=a5d48078&nonce=82050&refresh_token=938e6a9de0fa235caec0071dfcdbef9b&x-expires=1719910800&x-signature=3%2F959TgDBFWHwtGHfnxGGvMbs%2FA%3D&shp=a5d48078&shcp=81f88b70"
                alt="Nguyễn Văn A"
              ></img>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState } from 'react';
import {
  faCircleXmark,
  faEllipsisVertical,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faPlus,
  faQuestionCircle,
  faRss,
  faSignIn,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faRss} />,
    title: 'LIVE Creator Hub',
    href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=en&region=VN'
  },
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'Language'
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts'
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode'
  }
]
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult([]);
  }, 0);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok"></img>
        <Tippy
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>
          <Menu
            items={MENU_ITEMS}
          >
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {/* <h2>Menu items</h2> */}
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;

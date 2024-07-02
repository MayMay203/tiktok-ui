import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };
  return (
    <div>
      <Tippy
        offset={[14, 15]}
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {history.length > 1 && (
                <Header onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))} title={current.title} />
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
        onHide={()=>setHistory(prev=>prev.slice(0,1))}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;

import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
// <button></button>
function Button({
  to,
  primary = false,
  outline,
  href,
  children,
  text = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  className,
  rightIcon,
  leftIcon,
  onClick,
  separate = false,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  //Remove event listener with disabled button
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof (props[key] === 'function')) {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    separate,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to:Proptypes.string,
  primary:Proptypes.bool,
  outline:Proptypes.bool,
  href:Proptypes.string,
  children:Proptypes.node.isRequired,
  text:Proptypes.bool,
  small:Proptypes.bool,
  large:Proptypes.bool,
  disabled:Proptypes.bool,
  rounded:Proptypes.bool,
  className:Proptypes.string,
  rightIcon:Proptypes.node,
  leftIcon:Proptypes.node,
  onClick:Proptypes.func,
  separate:Proptypes.bool,
};
export default Button;

import Button from "~/components/Button";
import styles from './Menu.module.scss'
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
const cx = classNames.bind(styles)
function MenuItem({ data, onClick }) {
    return (
      <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} href={data.href} onClick={onClick} separate={data.separate}>
        {data.title}{' '}
      </Button>
    );
}
MenuItem.propsTypes = {
  data: PropTypes.node.isRequired,
  onClick: PropTypes.func
}
export default MenuItem;

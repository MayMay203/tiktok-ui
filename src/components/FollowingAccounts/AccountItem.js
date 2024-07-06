import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (
    <Link to="/@Nhung" className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fae4fb9eb16bcc7399d643e23afe4f81.jpeg?lk3s=a5d48078&nonce=9059&refresh_token=777ca1f13152eefe43a0e71f317f5493&x-expires=1720429200&x-signature=yFXFTP3LZYzT7rRM8b7TJj6D3f4%3D&shp=a5d48078&shcp=81f88b70"
        alt="Nhung"
      ></img>
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>lethihongnhung</strong>
                  <FontAwesomeIcon className={ cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
        </p>
        <p className={cx('name')}>Lê Thị Hồng Nhung</p>
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  data: PropTypes.node.isRequired,
};
export default AccountItem;

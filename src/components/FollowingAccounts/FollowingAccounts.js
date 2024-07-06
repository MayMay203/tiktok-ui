import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import PropTypes from 'prop-types'
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function FollowingAccounts({lable}) {
    return (
      <div className={cx('wrapper')}>
        <h4 className={cx('lable')}>{lable}</h4>
        <AccountItem />
        <AccountItem />
        <AccountItem />
        <button className={cx('more-btn')}>See more</button>
      </div>
    );
}
FollowingAccounts.propTypes = {
    lable: PropTypes.string.isRequired,

}
export default FollowingAccounts;

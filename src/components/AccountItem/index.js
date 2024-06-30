import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem() {
    return (
      <div className={cx('wrapper')}>
        <img
          className={cx('avatar')}
          src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/df6bef0752d7599f485d741b23fd2094.jpeg?lk3s=a5d48078&nonce=82050&refresh_token=938e6a9de0fa235caec0071dfcdbef9b&x-expires=1719910800&x-signature=3%2F959TgDBFWHwtGHfnxGGvMbs%2FA%3D&shp=a5d48078&shcp=81f88b70"
          alt="Hoa"
        ></img>
        <div className={cx('info')}>
          <p className={cx('name')}>
            <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check-icon') } icon={faCircleCheck}></FontAwesomeIcon>
          </p>
          <span className={cx('username')}>nguyenvana</span>
        </div>
      </div>
    );
}

export default AccountItem;
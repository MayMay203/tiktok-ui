import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function AccountItem({data}) {
    return (
      <Link to={ `/@${data.nickname}`} className={cx('wrapper')}>
        <Image className={cx('avatar')} src={data.avatar} alt="Hoa"></Image>
        <div className={cx('info')}>
          <p className={cx('name')}>
            <span>{data.full_name}</span>
            {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}></FontAwesomeIcon>}
          </p>
          <span className={cx('username')}>{data.nickname}</span>
        </div>
      </Link>
    );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired
};
export default AccountItem;
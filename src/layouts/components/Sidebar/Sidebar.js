import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faFileVideo, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFileVideo as faActiveFileVideo, faUser as faActiveUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu from './Menu';
import { MenuItem } from './Menu';
import {
  ExploreIcon,
  HomeIcon,
  FriendsIcon,
  HomeActiveIcon,
  ExploreActiveIcon,
  FriendsActiveIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import FollowingAccounts from '~/components/FollowingAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
        <MenuItem
          title="Explore"
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
          to={config.routes.explore}
        />
        <MenuItem
          title="Following"
          icon={<FontAwesomeIcon className={cx('icon')} icon={faUser} />}
          activeIcon={<FontAwesomeIcon className={cx('icon')} icon={faActiveUser} />}
          to={config.routes.following}
        />
        <MenuItem
          title="Friends"
          icon={<FriendsIcon />}
          activeIcon={<FriendsActiveIcon />}
          to={config.routes.friends}
        />
        <MenuItem
          title="LIVE"
          icon={<FontAwesomeIcon className={cx('icon')} icon={faFileVideo} />}
          activeIcon={<FontAwesomeIcon className={cx('icon')} icon={faActiveFileVideo} />}
          to={config.routes.live}
        />
        <MenuItem
          title="Profile"
          icon={<Image className={cx('avatar')} src="" alt="Nhung"></Image>}
          activeIcon={<Image className={cx('avatar')} src="" alt="Nhung"></Image>}
          to={'/@Nhung'}
        />
      </Menu>
      <FollowingAccounts lable="Following accounts" />
    </aside>
  );
}

export default Sidebar;

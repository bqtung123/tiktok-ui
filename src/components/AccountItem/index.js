import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/eb59e38a3722b93d20141a47619b9261~c5_100x100.jpeg?lk3s=a5d48078&nonce=19113&refresh_token=59c2a2b2c217e1662d7b43389f6c2fc4&x-expires=1719414000&x-signature=MjMwa9qvi9MwVcL90ueKbMXg4B8%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;

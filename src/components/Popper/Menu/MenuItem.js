import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

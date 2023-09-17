import styles from './Heading.module.css'
import clsx from 'clsx';

function Heading()
{
    return(
        <h1 className={clsx(styles.heading, styles.active)}>Đây là heading 1</h1>
    );
}

export default Heading;
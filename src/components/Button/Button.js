import styles from './Button.module.scss'
import clsx from 'clsx';

function Button({primary, danger}) {

    const classes = clsx(styles.btn,{
        [styles.primary] : primary,
        [styles.danger] : danger
    })

    return(
        <button className={classes}>Click me!</button>
    );
}

export default Button
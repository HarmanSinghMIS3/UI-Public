import styles from '@/public/images/components/styles.module.scss'

export default function Hamburger() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 30 30'
        >
            <path
                className={styles.hamburger__path}
                d='M4 7h22M4 15h22M4 23h22'
            />
        </svg>
    )
}
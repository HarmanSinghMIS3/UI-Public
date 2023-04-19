import styles from '@/public/images/components/styles.module.scss'

export default function CheckboxUnchecked() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 600 600'
        >
            <g>
                <g>
                    <path
                        className={styles.checkBox__box}
                        d="m508.33,0c50.63,0,91.67,41.04,91.67,91.67v416.67c0,50.63-41.04,91.67-91.67,91.67H91.67c-50.63,0-91.67-41.04-91.67-91.67V91.67C0,41.04,41.04,0,91.67,0h416.67Zm0,50H91.67c-23.01,0-41.67,18.65-41.67,41.67v416.67c0,23.01,18.65,41.67,41.67,41.67h416.67c23.01,0,41.67-18.65,41.67-41.67V91.67c0-23.01-18.65-41.67-41.67-41.67Z"
                    />
                </g>
            </g>
        </svg>
    )
}
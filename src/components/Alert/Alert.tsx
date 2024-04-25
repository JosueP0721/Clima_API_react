import { PropsWithChildren } from "react";
import styles from './Alert.module.css'

export default function Alert({children} : PropsWithChildren) {
  return (
    <p className={styles.alert}>
        {children}
    </p>
  )
}
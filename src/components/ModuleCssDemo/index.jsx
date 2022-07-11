import styles from './styles.module.css';

const ModuleCssDemo = ({ children }) => (
  <>
    <ul className={styles.list}>
      <li className={styles.item}>111</li>
      <li className={styles.item}>222</li>
      <li className={styles.item}>333</li>
      <li className={styles.item}>444</li>
      <li className={styles.item}>555</li>
    </ul>

    {children}
  </>
);

export default ModuleCssDemo;

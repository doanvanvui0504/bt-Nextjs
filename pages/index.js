import styles from '../styles/Login.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Login</h3>
      <form className={styles.container}>
        <div className={styles.group}>
          <label htmlFor='username' className={styles.label}>
            Username
          </label>
          <input id='username' type='text' />
        </div>
        <div className={styles.group}>
          <label htmlFor='password' className={styles.label}>
            Username
          </label>
          <input id='password' type='password' />
        </div>
        <button type='submit' className={styles.submitBtn}>
          Login
        </button>
      </form>
    </div>
  );
}

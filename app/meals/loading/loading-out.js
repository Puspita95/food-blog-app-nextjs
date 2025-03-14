import styles from "./loading.module.css";

export default function MealsLoadingPage({ children }) {
  return <p className={styles.loading}>Fetching meals...</p>;
}

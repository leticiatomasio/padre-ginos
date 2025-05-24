import { useContext, useEffect } from "react";
import NotificationContext from "../../contexts/NotificationContext";
import Header from "../Header/Header";
import styles from "./AppShell.module.css";

export default function AppShell({ children }) {
  const [notification, setNotification] = useContext(NotificationContext);

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification("");
    }, 10000);

    return () => clearTimeout(timer);
  }, [notification, setNotification]);

  return (
    <>
      <Header />
      <main>
        {children}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={styles.notification}
        >
          {notification && <span>{notification}</span>}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

import styles from "./page.module.css";
import Welcome from "./Components/welcome.js"
import Hover from "./Components/hover.js"
import Button from "./Components/click.js"
import Blurb from "./Components/personalBlurb.js"
import RenderButtons from "./Components/renderComponents.js"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Welcome></Welcome>
        <RenderButtons></RenderButtons>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}


import { useSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import styles from '../styles/Home.module.css'
import Product from './Product'

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Product />
      </>
    );
  } else {
    return (
      <div className={styles.login}>
        <button className={styles.loginbtn} onClick={() => signIn()}>
          <FcGoogle size={20} /> &nbsp; Login With Google
        </button>
      </div>
    );
  }
}

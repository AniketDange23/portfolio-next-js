"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Change "next/navigation" to "next/router"

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter(); // Add parentheses to invoke the useRouter function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value; // Fix the index to 2 (it should be the third input)

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created"); // Fix the if statement

        console.log(res);
      }
    } catch (err) {
      setErr(true);
      // Log the actual error
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {" "}
        {/* Move onSubmit to the form element */}
        <input
          type="text"
          placeholder="full name"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Register
        </button>{" "}
        {/* Add type="submit" */}
      </form>
      {err && <p>Something went wrong !</p>} {/* Wrap the text in a <p> tag */}
      <Link href="/dashboard/login">Login with an existing Account</Link>
    </div>
  );
};

export default Register;

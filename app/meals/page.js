import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading/loading-out";

export const metadata = {
  title: "All Meals",
  description:
    "Browse the Delicious meals, shared by our food-loving community.",
};
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
const MealsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}></header>
        <h1>
          Delicious Meals,created{" "}
          <span className={styles.highlight}> by you.</span>
        </h1>
        <p>
          Choose your favorite receipe and cook it yourself.Its easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Receipe.</Link>
        </p>
      </div>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};
export default MealsPage;

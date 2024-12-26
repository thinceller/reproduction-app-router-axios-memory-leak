import { cache } from "react";
import styles from "./page.module.css";
import axios from "axios";

export const dynamic = "force-dynamic"

const getTodos = cache(async () => {
  const res = await axios.get("http://localhost:3000/todos");
  const { todos } = res.data as { todos: { id: number; text: string }[] };
  return todos;
})

const getMe = cache(async () => {
  try {
    const res = await axios.get("http://localhost:3000/me");
    return res.data as { user: { id: number; name: string } };
  } catch (error) {
    console.log(error)
    return { user: null }
  }
})

export default async function Home() {
  const todos = await getTodos();
  const { user } = await getMe();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Todos</h1>

        <div>{user ? `Hello ${user.name}!` : "You are a guest"}</div>

        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
              </li>
            )
          })}
        </ul>
    </main>
    </div>
  );
}

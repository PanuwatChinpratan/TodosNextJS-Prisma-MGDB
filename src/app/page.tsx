"use client";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};
export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/api/data");
    const json = await data.json();
    setItems(json);
    console.log(json);
  };

  return (
    <div>
      <p className="text-3xl text-center">Todo list page</p>
      {items.map((item: Todo) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
      {items.map((item: Todo) => (
        <div key={item.id}>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

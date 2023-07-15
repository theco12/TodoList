import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Todoapp from "./Todoapp/Todoapp";
import Filter from "../components/filter/Filter";

const filters = ["all", "active", "completed"];

export default function Home() {
  const [fileter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header />
      <Filter filters={filters} filter={fileter} onchangeFilter={setFilter} />
      <Todoapp filter={fileter} />
    </div>
  );
}

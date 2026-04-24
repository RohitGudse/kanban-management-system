import TaskCard from "./TaskCard";

export default function Column({ title }) {
  return (
    <div className="bg-gray-100 p-3 w-64">
      <h2>{title}</h2>
      <TaskCard />
    </div>
  );
}
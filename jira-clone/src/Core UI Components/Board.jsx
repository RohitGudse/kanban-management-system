import Column from "./Column";

export default function Board() {
  const cols = ["Todo", "In Progress", "Done"];
  return (
    <div className="flex gap-4 p-4">
      {cols.map((c, i) => <Column key={i} title={c} />)}
    </div>
  );
}
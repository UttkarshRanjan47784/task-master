import { Calendar } from "../ui/calendar";
import AddNewList from "./add-new-list";

export default function SideBar() {
  return (
    <div className="basis-1/6 shadow-md dark:border-r-2 p-5 flex flex-col items-center space-y-5">
      <Calendar />
      <AddNewList />
    </div>
  );
}

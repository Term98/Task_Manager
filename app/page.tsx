"use client"
import CreateContent from './Components/Modals/CreateContent';
import Tasks from './Components/Tasks/Tasks';
import { UseGlobalState } from "@/app/Context/globalProvider";

export default function Home() {
  const { tasks } = UseGlobalState();
  return (<Tasks tasks={tasks} title={"All Tasks"} />);
}

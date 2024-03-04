import { list, check, todo, home } from "./icons";

const menu = [
    {
        id: 1,
        title: "All Tasks",
        icon: home,
        link: "/",
    },
    {
        id: 2,
        title: "Important!",
        icon: list,
        link: "/pages/important",
    },
    {
        id: 3,
        title: "Completed!",
        icon: check,
        link: "/pages/completed",
    },
    {
        id: 4,
        title: "Do It Now",
        icon: todo,
        link: "/pages/incomplete",
    },
];

export default menu;
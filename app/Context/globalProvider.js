"use client"

import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import themes from './themes';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUser } from '@clerk/nextjs';


export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

function GlobalProvider({ children }) {

    const { user } = useUser();
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false)
    const [collapsed, setCollapsed] = useState(false);

    const theme = themes[selectedTheme];

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false)
    }

    const collapseMenu = () => {
        setCollapsed(!collapsed);
    };

    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks");

            const sorted = res.data.sort((a, b) => {
                return (
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                )
            })
            setTasks(sorted);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/api/tasks/${id}`)
            toast.success("Task Deleted");

            allTasks();
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong")
        }
    }

    const updateTask = async (task) => {
        try {
            const res = await axios.put("/api/tasks", task)
            toast.success("Task updated")
            allTasks();
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong")
        }
    }

    const completedTask = tasks?.filter((task) => task.isCompleted === true)
    const importantTask = tasks?.filter((task) => task.isImportant === true)
    const incompleteTask = tasks?.filter((task) => task.isCompleted === false)


    React.useEffect(() => {
        if (user) allTasks()
    }, [user])
    return (
        <GlobalContext.Provider value={{ theme, tasks, deleteTask, isLoading, completedTask, importantTask, incompleteTask, updateTask, modal, openModal, closeModal, allTasks, collapseMenu, collapsed }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}

export const UseGlobalState = () => useContext(GlobalContext);
export const UseGlobalUpdate = () => useContext(GlobalContext);

export default GlobalProvider
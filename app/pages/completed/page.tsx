"use client"

import Tasks from '@/app/Components/Tasks/Tasks'
import { UseGlobalState } from '@/app/Context/globalProvider'
import React from 'react'

function page() {
    const {completedTask} = UseGlobalState()
    return (
        <Tasks title='Completed Tasks' tasks={completedTask}  />
    )
}

export default page
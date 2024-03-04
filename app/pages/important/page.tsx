"use client"

import Tasks from '@/app/Components/Tasks/Tasks'
import { UseGlobalState } from '@/app/Context/globalProvider'
import React from 'react'

function page() {
    const { importantTask } = UseGlobalState()
    return (
        <Tasks title='Important Tasks' tasks={importantTask} />
    )
}

export default page
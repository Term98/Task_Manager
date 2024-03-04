"use client"

import Tasks from '@/app/Components/Tasks/Tasks'
import { UseGlobalState } from '@/app/Context/globalProvider'
import React from 'react'

function page() {
  const { incompleteTask } = UseGlobalState()
  return (
    <Tasks title='Incomplete tasks' tasks={incompleteTask} />
  )
}

export default page
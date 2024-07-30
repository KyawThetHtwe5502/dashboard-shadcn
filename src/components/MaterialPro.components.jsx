

import React, { useEffect, useState } from "react"

import { Progress } from "@/components/ui/progress"

const MaterialProComponents = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(55), 100)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className=" h-1  fill-[#4262BB]" />
}

export default MaterialProComponents;
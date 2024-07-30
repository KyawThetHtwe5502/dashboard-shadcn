

import React, { useEffect, useState } from "react"

import { Progress } from "@/components/ui/progress"

const FlexyAdminComponents = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(20), 100)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className=" h-1 fill-[#4262BB]" />
}

export default FlexyAdminComponents;
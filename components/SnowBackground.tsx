"use client"

import Snowfall from "react-snowfall"

export default function SnowBackground() {
  return (
    <Snowfall
      snowflakeCount={120}
      speed={[0.5, 1.5]}
      wind={[-0.2, 0.2]}
      radius={[0.5, 2.5]}
      color="white"
    />
  )
}

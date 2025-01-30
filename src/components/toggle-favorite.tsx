"use client"

import React, { useState } from "react"
import { Star } from "lucide-react"

interface ToggleStarProps {
  initialState?: boolean
  onChange?: (isStarred: boolean) => void
  size?: number
  activeColor?: string
  inactiveColor?: string
}

export default function ToggleFavorite({
  initialState = false,
  onChange,
  size = 20,
  activeColor = "text-gray-400",
  inactiveColor = "text-gray-400",
}: ToggleStarProps) {
  const [isStarred, setIsStarred] = useState(initialState)

  const handleToggle = () => {
    const newState = !isStarred
    setIsStarred(newState)
    onChange?.(newState)
  }

  return (
    <button
      onClick={handleToggle}
      className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full p-1 transition-all duration-300 ease-in-out ${
        isStarred ? `${activeColor} hover:text-gray-600` : `${inactiveColor} hover:text-gray-600`
      }`}
      aria-pressed={isStarred}
      aria-label={isStarred ? "Unstar" : "Star"}
    >
      <Star
        size={size}
        fill={isStarred ? "currentColor" : "none"}
        className={`transform transition-transform duration-300 ease-in-out ${isStarred ? "scale-110" : "scale-100"}`}
      />
    </button>
  )
}


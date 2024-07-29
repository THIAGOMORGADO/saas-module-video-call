'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import SlideMenu from '../components/slidemenu'

export default function Page() {
  const [name, setName] = useState('thiago morgado')
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = (userId: any) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', pay: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', pay: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', pay: false },
  ]

  return (
    <div className="w-full h-screen bg-zinc-700">

      <SlideMenu />



    </div>
  )
}
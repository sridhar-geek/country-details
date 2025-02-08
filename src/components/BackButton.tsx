"use client"

import React from 'react'
import { Button } from './ui/button';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter()
  return (
    <Button variant={"outline"} onClick={() => router.push('/')}>
      <MoveLeft /> Back
    </Button>
  );
}

export default BackButton
import Image from 'next/image'
import QRCodeCard from '@/components/QRCodeCard'

export default function Home() {
  return (
    <main
      className="flex min-h-screen  items-center justify-center  ">

   <QRCodeCard/>
    </main>
  )
}

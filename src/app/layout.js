import './globals.css'
import Navbar from '@/Components/User/Moblie/NavbarMobile/Navbar'


export const metadata = {
  title: 'Shopping website',
  // description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className='bg-gray-100 font-1' >
        <Navbar/>
        {children}</body>
    </html>
  )
}

import Link from 'next/link'

function Footer() {
  return (
    <div className="flex h-24 w-full items-center justify-center border-t">
      <p className="flex items-center justify-center gap-2">
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        Powered by{' '} @brookr
      </p>
    </div>
  )
}

export default Footer

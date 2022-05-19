import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='pl-5 pr-5 flex flex-grow justify-around  h-14 w-full md:justify-items-center items-center

border-b border-slate-900/10  dark:border-slate-300/10 dark:bg-slate-900/7
    
bg-white text-slate-300 dark:bg-slate-900 dark:text-slate-400
    '>

    <div className='className="flex justify-evenly font-extrabold text-3xl "'>
    <Link href="/" >
    <a>Security</a></Link>
    </div>

    <div className=" flex justify-evenly  font-bold text-lg ">
        <Link href='/blog/blog'><a>Blog</a></Link>
        {/* <Link href=''><a>Walkthrough</a></Link>
        <Link href=''><a>Cheat sheet</a></Link> */}
    </div>

    </div>
  )
}

export default Navbar
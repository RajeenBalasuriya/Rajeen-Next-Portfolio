import Link from "next/link";

const NavBar=()=>{
    return(
        <div className='h-full flex items-center justify-between text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            <div className=''>
                <Link href="" className="txt-sm bg-grey-to-purple rounded-md p-1 font-semibold flex items-center justify-center">
                  <span className='text-white font-thin mr-2'>Rajeen</span>
                  <span className='w-12 h- rounded bg-white text-black flex  items-center justify-center'>.DEV</span>
                </Link>
            </div>
            <div className=''>
                {/*MENU Button*/}
                <button className='w-10 h-8 flex flex-col justify-between'>
                    <div className="w-10 h-1 bg-grey-to-purple rounded"></div>
                    <div className="w-10 h-1 bg-grey-to-purple rounded"></div>
                    <div className="w-10 h-1 bg-grey-to-purple rounded"></div>
                </button>

            </div>
        </div>

    )
}

export default NavBar;
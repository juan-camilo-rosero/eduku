import { RiAccountCircleFill, RiShoppingCart2Fill } from "react-icons/ri";

function UserCard() {
  return (
    <figure className="fixed bottom-0 w-screen left-0 h-24 bg-blue-dark flex justify-center gap-8 px-6 md:gap-32 lg:w-1/4 lg:px-0 lg:right-24 lg:left-auto lg:h-full lg:items-center lg:bg-transparent z-10 lg:justify-end shadow-xl">
      <div className="w-screen left-0 h-20 bg-blue-dark flex justify-center gap-8 px-6 md:gap-32 lg:w-5/6 lg:flex-col lg:gap-0 lg:pt-4 lg:py-8 lg:h-auto lg:rounded-2xl lg:items-center">
      <button className="flex flex-col items-center justify-center text-l text-light font-semibold w-24 lg:hidden">
        <RiAccountCircleFill className="text-2xl lg:hidden"/>
        <p>account</p>
      </button>
        <div>
            <div className="h-28 w-28 -mt-14 bg-[url(https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover rounded-full border-blue-dark border-8 lg:mt-8 lg:border-blue-turquoise lg:border-4 lg:mb-4"/>
            <div/>
            <p className="text-center text-sm text-light font-semibold mb-6 lg:text-xl">William1423</p>
        </div>
      <button className="flex flex-col items-center justify-center text-l text-light font-semibold w-20 text-center lg:bg-blue-turquoise lg:w-full lg:text-blue-dark lg:text-xl lg:py-[6px] lg:rounded-md hover:bg-blue-turquoiseHover transition-all">
        <RiShoppingCart2Fill className="text-2xl lg:hidden"/>
        <p>store</p>
      </button>
      <button className="hidden lg:flex w-full py-[6px] rounded-md bg-blue-darker text-light items-center justify-center text-xl font-semibold mt-4 hover:bg-blue-darkerHover transition-all">account</button>
      </div>
    </figure>
  )
}

export default UserCard
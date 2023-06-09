import { useEffect, useState } from "react";


const ScrollTop = () => {
    const [showButton,setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 200){
                setShowButton(true)
            }
            else setShowButton(false)
        })
    },[])
    const top = () => {
        
           window.scrollTo({
            top: 0,
            behavior: "smooth",

        });
    }
 
    return (
        <div style={{display: showButton ? 'flex': 'none'}} className=" bg-gradient-to-bl from-yellow-600 from-40% to- to-95% w-20 h-20 fixed bottom-10 right-3 justify-center items-center rounded-lg ">
            <img style={{display: showButton ? 'block': 'none'}} onClick={top} className=" hover:scale-125 transition delay-100 duration-200 ease-in-out w-10 object-contain -rotate-45" src="\src\assets\assets-footer\rocket.png" alt="" />
   

        </div>
    )
}
export default ScrollTop
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
        <div className="">
            <img style={{display: showButton ? 'block': 'none'}} onClick={top} className="w-[110px] -rotate-45 fixed bottom-10 right-0" src="\src\assets\assets-footer\rocket.png" alt="" />
        
        </div>
    )
}
export default ScrollTop
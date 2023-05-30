
const ScrollTop = () => {
    const top = () => {
        
           window.scrollTo({
            top: 0,
            behavior: "smooth",

        });
    }
 
    return (
        <div className="">
            <img onClick={top} className="w-[110px] -rotate-45 fixed bottom-10 right-0" src="\src\assets\assets-footer\rocket.png" alt="" />
        
        </div>
    )
}
export default ScrollTop
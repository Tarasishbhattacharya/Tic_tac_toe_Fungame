
import "./Sqare.css"
export const Sqare=({id,className,state})=>{
    return (
        <div className={`sqare_cont ${className}`} id={id}>{state}</div>
    )
}
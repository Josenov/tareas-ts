import Tarea from "./Tarea"
import '../styles.css'


type ListaTareas = {
    listaTareas : string[]
    borrarTarea : (index:number) => void
}

const ListaTareas = ({listaTareas, borrarTarea}: ListaTareas) => {
    return (
        <div className="listaTarea">
            {listaTareas.map((tarea, index)=>(
                <Tarea key={index} tarea={tarea} borrarTarea={()=>borrarTarea(index)}></Tarea>
            ))}
        </div>
    )
}

export default ListaTareas
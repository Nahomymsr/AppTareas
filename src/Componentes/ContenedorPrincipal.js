import { useState } from 'react'
import '../Estilos/ContenedorPrincipal.css'
import { Tarea } from './Tarea'

export function ContenedorPrincipal (){

    const[TareasList, SetTareasList] = useState([])
    const[DescripcionTarea,SetDescripcionTarea]= useState("")
    
    
    
    function keyDown(e){
       if (e.key == "Enter"){
        console.log("Entro a enter")
         AgregarALista()
       }
    }

    function AgregarALista(){
        const id = new Date().getTime();
        SetTareasList( [...TareasList, { id: id, Descripcion: DescripcionTarea, Completado:false}]);
        SetDescripcionTarea("")
        console.log(TareasList)
        
    }

    function EliminarTarea(id){
        SetTareasList(TareasList.filter((tarea) => tarea.id !== id))
    }

    const ManejadorCompletado = (id) =>{
        const NewListTarea = TareasList.map(tarea => {
            if(tarea.id === id)
            {
                return ({id:tarea.id , Descripcion: tarea.Descripcion, Completado:!tarea.Completado})
            }
            else
        {
            return tarea
        }

    })

    SetTareasList(NewListTarea)

    console.log(TareasList)
    }

    
    return(

        <div className='contenedor-principal'>
            <div className='contenedor-input mb-4'>
                <input  placeholder="Ingresa una tarea" className='input-style ms-4' value={DescripcionTarea} onChange={e=> SetDescripcionTarea(e.target.value)}  onKeyDown={e => keyDown(e)}></input>
                <button type="button" class="btn btn-primary p-2 ms-3" onClick={e => AgregarALista()}>Agregar</button>
            </div>
            
            <div className='contenedor-tarea'>
                 <ul class="list-group list-group-flush mx-2 mx-md-5">
                 {TareasList.length > 0 ? TareasList.map((tarea) => <Tarea id={tarea.id} Descripcion={tarea.Descripcion} Completado={tarea.Completado} ManejadorCompletado={ManejadorCompletado} ManejadorEliminar={EliminarTarea}/>) : <div></div>}
                </ul>

            </div>
        </div>
    
    )}

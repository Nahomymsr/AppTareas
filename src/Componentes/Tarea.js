import '../Estilos/Tarea.css'

export function Tarea ({id,Descripcion,Completado,ManejadorEliminar,ManejadorCompletado}) 

{
    return(
    <div  id={id} >
        <li class="list-group-item mt-2 border-bottom d-flex justify-content-between" style={{border:'none'}}>
            <div class="d-flex" style={{overflowWrap:"anywhere"}}>
                <div className='d-flex align-items-center'>
                <input class="form-check-input me-1" type="checkbox" checked={Completado} onChange={() => {ManejadorCompletado(id)}}  id="firstCheckbox"></input>
                </div>
                <div class="mx-2 d-flex align-items-center" style={{textDecoration: Completado ?"line-through" : ""}}>{Descripcion}</div>
            </div>
            <div className='d-flex align-items-center'>
            <button type="button" class="btn btn-danger p-1 p-md-2" style={{height:"fit-content"}} onClick={() => ManejadorEliminar(id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button></div>
            
        </li>
    </div>
        
    )
}
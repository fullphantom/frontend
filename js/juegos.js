function mostrarDatos(){
    let request = sendRequest('juegos', 'GET', '');
    let table = document.getElementById('juegos-table');
    table.innerHTML = "";
    request.onload = function(){
        let data = request.response;
        data.forEach(element => {
            table.innerHTML += `
            
            <tr>
            <th>${element._id}</th>
            <td>${element.nombre}</td>
            <td>${element.fechaCreacion}</td>
            <td>${element.tipo}</td>
            <td>${element.jugadores}</td>
            <td>${element.edad}</td>
            <td>${element.consola}</td>
            <td>${element.precio}</td>
          
            <td>
                <button class = "boton-editar" type="button" onclick='window.location ="/secciones/form_juegos.html?id=${element._id}"'>Editar</button>
                <button class = "boton-eliminar" type="button" onclick='deleteJuegos("${element._id}")'>Eliminar</button>
            </td>
            </tr>
            `
        });    
    }

    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan="">Error al traer los datos</td>
        </tr>
        `
    }
}
function deleteJuegos(id){
    let request = sendRequest('juegos/'+id, 'DELETE', '');
    request.onload = function(){
        mostrarDatos();
    }
}

function guardarJuegos(){
    let nom = document.getElementById('nombre-n').value
    let fec = document.getElementById('fechaCreacion-f').value
    let tip = document.getElementById('tipo-t').value
    let jug = document.getElementById('jugadores-j').value
    let eda = document.getElementById('edad-e').value
    let con = document.getElementById('consola-c').value
    let pre = document.getElementById('precio-p').value
    let data = {'nombre':nom, 'fechaCreacion':fec, 'tipo': tip, 'jugadores': jug, 'edad': eda, 'consola': con, 'precio': pre,}
    let request = sendRequest('juegos/','POST', data);
    request.onload = function(){
        window.location='juegos.html'
    }
    request.onerror = function(){
        alert('error al guardar los datos')
    }
}
/*--------*/

function cargarDatos(id){
    
    if(id != null){
    let nom = document.getElementById('nombre-n')
    let fec = document.getElementById('fechaCreacion-f')
    let tip = document.getElementById('tipo-t')
    let jug = document.getElementById('jugadores-j')
    let eda = document.getElementById('edad-e')
    let con = document.getElementById('consola-c')
    let pre = document.getElementById('precio-p')

    request.onload = function(){

        let data = request.response;
        nom.value = data.nombre
        fec.value = data.fechaCreacion
        tip.value = data.tipo
        jug.value = data.jugadores
        eda.value = data.edad
        con.value = data.consola
        pre.value = data.precio
        
    }
    request.onerror = function(){
        alert('error al guardar los datos')
    }
 }
}

    function modificarJuegos(id){
        let nom = document.getElementById('nombre-n').value
        let fec = document.getElementById('fechaCreacion-f').value
        let tip = document.getElementById('tipo-t').value
        let jug = document.getElementById('jugadores-j').value
        let eda = document.getElementById('edad-e').value
        let con = document.getElementById('consola-c').value
        let pre = document.getElementById('precio-p').value
        let data = {'nombre':nom, 'fechaCreacion':fec, 'tipo': tip, 'jugadores': jug, 'edad': eda, 'consola': con, 'precio': pre,}
        let request = sendRequest('juegos/'+id, 'PUT', data);
        request.onload = function(){
        window.location='juegos.html'
    }
    request.onerror = function(){
        alert('error al modificar los datos')
    }
}
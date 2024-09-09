function mostrarDatos(){
    let request = sendRequest('clientes', 'GET', '');
    let table = document.getElementById('clientes-table');
    table.innerHTML = "";
    request.onload = function(){
        let data = request.response;
        data.forEach(element => {
            table.innerHTML += `
            
            <tr>
            <th>${element._id}</th>
            <td>${element.nombre}</td>
            <td>${element.n_cedula}</td>
            <td>${element.direccion}</td>
            <td>${element.telefono}</td>
            <td>${element.edad}</td>
            <td>${element.email}</td>
          
            <td>
                <button class = "boton-editar" type="button" onclick='window.location ="/secciones/form_clientes.html?id=${element._id}"'>Editar</button>
                <button class = "boton-eliminar" type="button" onclick='deleteClientes("${element._id}")'>Eliminar</button>
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
function deleteClientes(id){
    let request = sendRequest('clientes/'+id, 'DELETE', '');
    request.onload = function(){
        mostrarDatos();
    }
}

function guardarClientes(){
    let nom = document.getElementById('nombre-n').value
    let ced = document.getElementById('n_cedula-N').value
    let dir = document.getElementById('direccion-d').value
    let tel = document.getElementById('telefono-t').value
    let eda = document.getElementById('edad-e').value
    let cor = document.getElementById('email-e').value
    let data = {'nombre':nom, 'n_cedula':ced, 'direccion': dir, 'telefono': tel, 'edad': eda, 'email': cor,}
    let request = sendRequest('clientes/', 'POST', data);
    request.onload = function(){
        window.location='clientes.html'
    }
    request.onerror = function(){
        alert('error al guardar los datos')
    }
}
/*--------*/

function cargarDatos(id){
    
 if(id != null){
    let request = sendRequest('clientes/'+id, 'GET'); 
    let nom = document.getElementById('nombre-n')
    let ced = document.getElementById('n_cedula-N')
    let dir = document.getElementById('direccion-d')
    let tel = document.getElementById('telefono-t')
    let eda = document.getElementById('edad-e')
    let cor = document.getElementById('email-e')

    request.onload = function(){

        let data = request.response;
        nom.value = data.nombre
        ced.value = data.n_cedula
        dir.value = data.direccion
        tel.value = data.telefono
        eda.value = data.edad
        cor.value = data.email
        
    }
    request.onerror = function(){
        alert('error al guardar los datos')
    }
 }
}

    function modificarClientes(id){
        let nom = document.getElementById('nombre-n').value
        let ced = document.getElementById('n_cedula-N').value
        let dir = document.getElementById('direccion-d').value
        let tel = document.getElementById('telefono-t').value
        let eda = document.getElementById('edad-e').value
        let cor = document.getElementById('email-e').value
        let data = {'nombre':nom, 'n_cedula':ced, 'direccion': dir, 'telefono': tel, 'edad': eda, 'email': cor,}
        let request = sendRequest('clientes/'+id, 'PUT', data);
        request.onload = function(){
        window.location='clientes.html'
    }
    request.onerror = function(){
        alert('error al modificar los datos')
    }
}
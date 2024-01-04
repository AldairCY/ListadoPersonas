const personas = []

function mostrarPersonas(){
    let texto = ""
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto
}

function reset(){
    document.getElementById('nombre').value = ''
    document.getElementById('apellido').value = ''
}

function agregarPersona(){
    const formulario = document.forms['formulario']
    const nombre = formulario['nombre']
    const apellido = formulario['apellido']
    let mensaje = ""
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value)
        personas.push(persona)
        mensaje = `Persona agregada correctamente al listado`
        mostrarPersonas()
        reset()
    } else {
        mensaje = `No hay información que agregar o existe algún campo vacío`
        console.log('No hay información que agregar o existe algún campo vacío')
    }
    document.getElementById('msj').innerHTML = mensaje
}

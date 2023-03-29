$(document).ready(function(){

    $('#listar').on('click', function(){
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<thead><th>Codigo</th><th>Nombre</th><th>Apellido</th><th>Materias</th><th>Notas</th><th>Juicio</th></thead>';

        $.ajax({
            url:"http://localhost:8080/listarEstudiante",
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);

                for(i=0; i <= respuesta.length; i++){

                    tabla.innerHTML += '<tr><td>' + respuesta[i].codigo + '</td><td>' 
                        + respuesta[i].nombre + '</td><td>'
                        + respuesta[i].apellido + '</td><td>' 
                        + respuesta[i].materias + '</td><td>' 
                        + respuesta[i].notas + '</td><td>'
                        + respuesta[i].juicio + '</td></tr>' 

                }
                
            }
        })

    });

    $('#eliminar').on('click',function(){
        $.ajax({
            url: "http://localhost:8080/eliminarEstudiante",
            type: "DELETE",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                if(respuesta){
                    $('#eliminarUsu').append("Usuario eliminado")
                }else{
                    $('#eliminarUsu').append("Usuario no eliminado")
                }
            }
        })
        
    });


    $('#modificar').on('click',function(){

        let datos = {

            codigo: parseInt($('#id').val()),
            notas: [parseFloat($('#N1').val()), parseFloat($('#N2').val()),  parseFloat($('#N3').val())]
        }

        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
        $.ajax({
            url: "http://localhost:8080/modificarEstudiante",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON"
        });

    });
});
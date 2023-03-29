package com.example.evaluacion.Controlador;

import com.example.evaluacion.Entidad.Estudiante;
import com.example.evaluacion.Servicio.servicioEstudiantes;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class controladorEstudiante {

    servicioEstudiantes servicio = new servicioEstudiantes();

    @GetMapping("/listarEstudiante")
    public ArrayList<Estudiante> listarEstudiante(){
        servicio.promedio();
        return servicio.listar();

    }

    @RequestMapping("/promedio")
    public ArrayList promedio(){
        return servicio.promedio();
    }

    @DeleteMapping("/eliminarEstudiante")
    public ArrayList<Estudiante> eliminarEstudiante(){
        return servicio.eliminarEstudiante();
    }

    @PostMapping("/modificarEstudiante")
    public String modificarEstudiante(@RequestBody Estudiante estudiante){


        return servicio.ModificarEs(estudiante);
    }

}

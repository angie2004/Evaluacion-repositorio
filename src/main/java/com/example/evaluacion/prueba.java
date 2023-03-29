package com.example.evaluacion;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class prueba {

    @GetMapping("/saludar")
    public String prueba(){
        return "Holaaaaaa";
    }
}

/*eliminar estudiantes que no aprobaron
actualizar las notas de un solo estudiante*/
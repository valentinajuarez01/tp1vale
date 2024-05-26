import React from "react";
import "../css/Main.css";
const Main = () => {
  const Persona = {
    nombre: "Valentina Juarez",
    edad: "20 años",
    estudio: "Programacion",
    facultad: "UTN FRT",
    año: "2do año",
  };
  const Lenguaje = ["HTML", "CSS", "JavaScript", "C#"];
  return (
    <div>
      <div className="presentacion">
        <div className="texto1">
          <h3>Perfil:</h3>
          <p>
            Soy un programadora principiante apasionada por la tecnología y el
            desarrollo web . Soy estudiante de {Persona.estudio} en la{" "}
            {Persona.facultad} actualmente estoy en {Persona.año}, donde adquirí
            una sólida base en programación, algoritmos y estructuras de datos.
            Aunque no tengo experiencia profesional, he dedicado numerosas horas
            a proyectos personales, lo que me ha permitido desarrollar
            competencias técnicas y un enfoque práctico en la resolucion de
            problemas.
          </p>
          <br />
          <br />
          <h3>Objetivo Profesional</h3>
          <p>
            Estoy buscando una oportunidad como desarrolladora junior o pasante
            en una empresa donde pueda aplicar mis habilidades técnicas y
            continuar aprendiendo. Mi objetivo es contribuir al éxito del equipo
            mientras desarrollo mis capacidades en un entorno profesional.
          </p>
        </div>
      </div>
      <br />

      <div className="educacion">
        <div className="texto">
          <h3>Habilidades:</h3>
          <ul>
            {Lenguaje.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Habilidades blandas:</h3>
          <p>
            -Resolución de Problemas: Capacidad para abordar problemas complejos
            de manera estructurada y creativa.
            <br />
            <br />
            -Aprendizaje Autónomo: Habilidad para aprender nuevas tecnologías y
            herramientas de forma independiente.
            <br />
            <br />
            -Trabajo en Equipo: Experiencia colaborando en proyectos académicos
            y personales.
            <br />
            <br />
            -Comunicación Efectiva: Capacidad para comunicar ideas técnicas de
            manera clara y concisa.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

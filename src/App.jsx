import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Empleado from "./Empleado";


function App() {
  const [empleados]=useState([{
    id: 1,
    fullName: "Laya Dueñas",
    title: "CEO",
    department: "Business",
    pic: "https://img.freepik.com/foto-gratis/sonriente-mujer-empresa-lider-brazos-cruzado_1262-3089.jpg?w=1380&t=st=1664851318~exp=1664851918~hmac=91a62a3e00803e97e649384007443a0562b6b653b271bb8a6d9f78c80d317fde",
  },
  {
    id: 2,
    fullName: "Astryd Vallés",
    title: "CMO",
    department: "Marketing",
    pic: "https://img.freepik.com/fotos-premium/mujer-negocios-morena-posando_23-2148142784.jpg?w=1380",
  },
  {
    id: 3,
    fullName: "Shantell Meza",
    title: "CFO",
    department: "Business",
    pic: "https://img.freepik.com/foto-gratis/ejecutiva-joven-profesional-chaqueta-roja-mientras-sienta-fuera-lugar-trabajo_662251-2084.jpg?w=1380&t=st=1664851391~exp=1664851991~hmac=3c6b07243d61d2b27ee10b57e3226fa16510a77c117545bb74a697dde3e9f8e2",
  },
  {
    id: 4,
    fullName: "Sergio Ocampo",
    title: "CTO",
    department: "Engineering",
    pic: "https://img.freepik.com/fotos-premium/feliz-gerente-masculino-vestido-traje-formal-negro_95891-708.jpg?w=1380",
  },
  {
    id: 5,
    fullName: "Ares Jiménez",
    title: "Art Director",
    department: "Marketing",
    pic: "https://img.freepik.com/foto-gratis/rascacielos-marco-ventana-lider-opinion-ciudad_1134-1034.jpg?w=1480&t=st=1664851459~exp=1664852059~hmac=b511dcb2ba0f4a82eeba73bdb7784a507f6824b7f1d838b9cbe54feef72a8f60",
  },
  {
    id: 6,
    fullName: "Marta Pérez",
    title: "Frontend Dev",
    department: "Engineering",
    pic: "https://img.freepik.com/foto-gratis/mujer-negocios-joven-que-senala-dedo-al-lado-pared-gris-aislada_231208-230.jpg?w=1380&t=st=1664851482~exp=1664852082~hmac=1bf51f4d9154f8aed765e38de95ba6e6d783c5201920ce801265af3754ef62d1",
  },
  {
    id: 7,
    fullName: "Ellen Balderas",
    title: "Digital Strategist",
    department: "Marketing",
    pic: "https://img.freepik.com/fotos-premium/retrato-mujer-negocios-sonriendo-al-aire-libre_255667-31268.jpg",
  },
  {
    id: 8,
    fullName: "Cynthia Valentín",
    title: "Backend Dev",
    department: "Engineering",
    pic: "https://img.freepik.com/foto-gratis/mujer-negocios-alegre-que-coloca-aislada_171337-8492.jpg?w=1380&t=st=1664851542~exp=1664852142~hmac=985d60644427aa30148b2920ee5d42b71ca6dffb0ddf93f35946d986a0c9a6a3",
  },
  {
    id: 9,
    fullName: "Bernard Jung",
    title: "DevOps Engineer",
    department: "Engineering",
    pic: "https://img.freepik.com/foto-gratis/negocio-hombre-negocios-exitoso-trabajando-ordenador-portatil-usando-computadora-sonriendo-pie_1258-26447.jpg?w=1380&t=st=1664851577~exp=1664852177~hmac=41b407eb05681423c168a2faa2dfd7af00558501a500f7c7f644cfc5d70e09f7",
  },

  ])


  return (
    <Container className="text center me-lg-5 mt-5 mb-5">
      {empleados.map((empleados)=><Empleado key={empleados.id} name={empleados.fullName} titulo={empleados.title} department={empleados.department} img={empleados.pic}  />)}

    </Container>
  );
}

export default App;
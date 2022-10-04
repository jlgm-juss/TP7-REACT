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
    pic: "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-1.png",
  },
  {
    id: 2,
    fullName: "Astryd Vallés",
    title: "CMO",
    department: "Marketing",
    pic: "https://i.pinimg.com/564x/56/77/62/5677627c338956d1cb9bbdb7f49ae79e.jpg",
  },
  {
    id: 3,
    fullName: "Shantell Meza",
    title: "CFO",
    department: "Business",
    pic: "https://i.pinimg.com/564x/66/82/93/6682931a0797e7a2f5e257eef835370b.jpg",
  },
  {
    id: 4,
    fullName: "Sergio Ocampo",
    title: "CTO",
    department: "Engineering",
    pic: "https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg",
  },
  {
    id: 5,
    fullName: "Ares Jiménez",
    title: "Art Director",
    department: "Marketing",
    pic: "https://i.pinimg.com/564x/af/95/b1/af95b195a053c728527a473fcb908b58.jpg",
  },
  {
    id: 6,
    fullName: "Marta Pérez",
    title: "Frontend Dev",
    department: "Engineering",
    pic: "https://i.pinimg.com/564x/b8/11/0e/b8110ef12aaa408c951c87f0e46092c3.jpg",
  },
  {
    id: 7,
    fullName: "Ellen Balderas",
    title: "Digital Strategist",
    department: "Marketing",
    pic: "https://i.pinimg.com/564x/04/8b/18/048b184f3681b5638e600dd2e5a9db8b.jpg",
  },
  {
    id: 8,
    fullName: "Cynthia Valentín",
    title: "Backend Dev",
    department: "Engineering",
    pic: "https://i.pinimg.com/564x/ba/50/cd/ba50cd5de2b55b6d2abe69e29c297c70.jpg",
  },
  {
    id: 9,
    fullName: "Bernard Jung",
    title: "DevOps Engineer",
    department: "Engineering",
    pic: "https://i.pinimg.com/564x/40/2e/d4/402ed4dbaa24f9ca733f4f185bf39970.jpg",
  },

  ])


  return (
    <Container className="text center me-lg-5 mt-5 mb-5">
      {empleados.map((empleados)=><Empleado key={empleados.id} name={empleados.fullName} titulo={empleados.title} department={empleados.department} img={empleados.pic}  />)}

    </Container>
  );
}

export default App;
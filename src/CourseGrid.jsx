import React from "react"
import Curso from "./Curso"

const cursos =
    [
        {
          "id":1,
          "title": "React desde cero",
          "image":"https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
          "price": 40,
          "profesor":"Beto Quiroga"
        },
        {
          "id":2,
          "title": "Drupal desde cero",
          "image":"https://edteam-media.s3.amazonaws.com/courses/small/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
          "price": 30,
          "profesor":"Beto Quiroga"
        },
        {
          "id":3,
          "title": "Go desde cero",
          "image":"https://edteam-media.s3.amazonaws.com/courses/small/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
          "price": 50,
          "profesor":"Alexys Lozada"
        },
        {
          "id":4,
          "title": "HTML desde cero",
          "image":"https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
          "price": 10,
          "profesor":"Alvaro Felipe"
        }
        
        ]

const CourseGrid = () =>(

    <div className="ed-grid m-grid-4">
        {cursos.map(c=>(
            <Curso
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            price={c.price}
            professor={c.profesor}
          />
        ))}
    </div>
)


export default CourseGrid
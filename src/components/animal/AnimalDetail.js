import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { getAnimalById, releaseAnimal } from "./AnimalManager"
import "./Animals.css"

export const AnimalDetails = () => {
    const [animal, setAnimal] = useState({ location: {}, customer: {} })
    const { animalId } = useParams()
    const history = useHistory()
    
    useEffect(() => {
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <div className="animal__location">Location: {animal.location_id?.name}</div>
            <div className="animal__owner">Customer: {animal.customer_id?.name}</div>
            <div className="animal__treatment">Treatment: {animal.status}</div>

            <button onClick={() => releaseAnimal(animal.id).then(() => history.push("/animals"))} >Release Animal</button>

            <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}

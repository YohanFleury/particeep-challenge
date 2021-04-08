import React, {useState, useEffect} from 'react'
import { movies$ } from "../movies.js";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/MovieCard.css'

export const MovieCard = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        movies$.then(success => {
            setMovies(success)
        })
    }, [movies])
    
    return (
        <div>
            <h1> Voici la liste des films </h1>
            <div className="responsive-cards">
                
                    {movies.map(data => {
                        return (
                            <Card style={{ width: '18rem' }} key={data.id} className="mb-4">
                                <Card.Body>
                                <Card.Title> {data.title}</Card.Title>
                                <Card.Text>
                                    Catégorie : {data.category}
                                </Card.Text>
                                <Button variant="success"> Like </Button>
                                <Card.Text> Nombre de likes : {data.likes} </Card.Text>
                                <Button variant="danger"> Dislike </Button>
                                <Card.Text> Nombre de dislikes : {data.dislikes} </Card.Text>
                                <Card.Text> Ici la jauge like/dislike</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })} 
                
            </div>
            
        </div>
        
    )
}

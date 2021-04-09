import React, {useState, useEffect} from 'react'
import { movies$ } from "../movies.js";
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../styles/MovieCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { addLike, addDislike } from '../redux/actions/actionLikes'
import { deleteCard } from "../redux/actions/actionCards";
import { LikeButton } from './LikeButton'
import { DislikeButton } from './DislikeButton'
import { DeleteButton } from "./DeleteButton";

export const MovieCard = () => {
    
    const films = useSelector(state => state)
    console.log(films)
    const dispatch = useDispatch()
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
                
                    {films.map(data => {
                        return (
                            <Card style={{ width: '18rem' }} key={data.id} className="mb-4">
                                <Card.Body>
                                <div className="d-flex justify-content-end">
                                    <DeleteButton onClick={() => dispatch(deleteCard(data.id))} />
                                </div>
                                <Card.Title> {data.title} </Card.Title>
                                <Card.Text>
                                    Catégorie : {data.category}
                                </Card.Text>
                                <div className="d-flex mb-5">
                                    <LikeButton onClick={() => dispatch(addLike(data.id))} />
                                    <DislikeButton onClick={() => dispatch(addDislike(data.id))} />
                                </div>
                                
                                <ProgressBar now={(data.likes / (data.likes + data.dislikes)) *100 } variant="success" />
                                <div className="d-flex justify-content-between mt-2">
                                    <Card.Text> Likes : {data.likes} </Card.Text>
                                    <Card.Text> Dislikes : {data.dislikes} </Card.Text>
                                </div>
                                </Card.Body>
                            </Card>
                            
                        )
                    })} 
                
            </div>
            
        </div>
        
    )
}

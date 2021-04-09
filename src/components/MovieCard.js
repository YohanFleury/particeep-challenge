import React, {useState, useEffect} from 'react'
import { movies$ } from "../movies.js";
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../styles/MovieCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { addLike, addDislike } from '../redux/actions/actionLikes'
import { deleteCard } from "../redux/actions/actionCards";
import { filterCategory } from "../redux/actions/actionCategories"
import { LikeButton } from './LikeButton'
import { DislikeButton } from './DislikeButton'
import { DeleteButton } from "./DeleteButton";
import ReactPaginate from "react-paginate"
import '../styles/Pagination.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


export const MovieCard = () => {
    
    const films = useSelector(state => state)
    const dispatch = useDispatch()
    
    // PAGINATION

    const [pageNumber, setPageNumber] = useState(0)

    const filmsPerPage = 4
    const pagesVisited = pageNumber * filmsPerPage

    const displayFilms = films
    .slice(pagesVisited, pagesVisited + filmsPerPage)
    .map(data => {
        return (
            <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white', border: 'none' }} key={data.id} className="mb-5">
                <Card.Img variant="top" src={data.img} className="img-cards" />
                <Card.Body>
                <div className="d-flex justify-content-end"> 
                <DeleteButton onClick={() => dispatch(deleteCard(data.id))} />
                </div>
                <div className="title-category">
                <Card.Title> {data.title} </Card.Title>
                <Card.Text>
                    Catégorie : {data.category}
                </Card.Text>
                </div>
                <div className="d-flex justify-content-between mt-3 mb-4 p-3">
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
    })

    const pageCount = Math.ceil(films.length / filmsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    // CATEGORIES

    const [categoryChoosen, setCategoryChoosen] = useState("Filtrer par catégorie")

    const displayCategories = films.map(type => {
        return (<Dropdown.Item onClick={ () => dispatch(filterCategory(type.category)) }> {type.category} </Dropdown.Item>)
    })

    return (
        <div className="bgimage">
            <div className="">
            <h1 className="title-component"> Voici la liste des films </h1>
            <div className="d-flex justify-content-center mb-3">
                <DropdownButton id="dropdown-basic-button" title={categoryChoosen}>
                    {displayCategories}
                </DropdownButton>
            
                        
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination-btns"}
                previousLinkClassName={"previous-btn"}
                nextLinkClassName={"next-btn"}
                activeClassName={"paginationActive"}
            />
            </div>
            <div className="responsive-cards">
                {displayFilms}
            </div>
            </div>
        </div>
        
    )
}

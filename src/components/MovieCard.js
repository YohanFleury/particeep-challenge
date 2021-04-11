import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../styles/MovieCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { addLike, addDislike } from '../redux/actions/actionLikes'
import { deleteCard } from "../redux/actions/actionCards";
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
    
    const [categorySelected, setCategory] = useState('Tous')

    const filmsToDisplay = categorySelected === 'Tous' ? films 
    : films.filter(movie => movie.category === categorySelected)

    // PAGINATION

    const [pageNumber, setPageNumber] = useState(0)
    const [filmsPage, setFilmsPage] = useState(4)
    const filmsPerPage = filmsPage
    const pagesVisited = pageNumber * filmsPerPage

    const displayFilms = filmsToDisplay
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

    const pageCount = Math.ceil(filmsToDisplay.length / filmsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    // CATEGORIES

    const allCategories = films
        .map(film => film.category)
        .filter((value, index, self) => self.indexOf(value) === index)

    const displayCategories = allCategories.map(c => {
        return (<Dropdown.Item onClick={() => setCategory(c)}> {c} </Dropdown.Item>)
    })

    return (
        <div className="bgimage">
            <h1 className="title-component"> Voici la liste des films </h1>
            <div className="d-flex justify-content-start p-1">
                <DropdownButton variant="btn-outline-dark text-white" id="dropdown-basic-button" title="Filtrer par catégorie">
                    {displayCategories}
                </DropdownButton>
            
                <DropdownButton id="dropdown-basic-button" title="Films par page" variant="btn-outline text-white">
                    <Dropdown.Item onClick={ () => setFilmsPage(4)}> 4 </Dropdown.Item>
                    <Dropdown.Item onClick={ () => setFilmsPage(8)}> 8 </Dropdown.Item>
                    <Dropdown.Item onClick={ () => setFilmsPage(12)}> 12 </Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="d-flex justify-content-end p-3">
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
        
    )
}

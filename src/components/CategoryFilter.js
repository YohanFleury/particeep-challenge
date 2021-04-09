import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const CategoryFilter = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Filtrer par catégorie">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
        </DropdownButton>
    )
}

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the structure of a Collection object
type Collection = {
    label: string; // The label for the collection
    url: string;   // The URL of the collection
};

// Define the props for the CollectionList component
type CollectionListProps = {
    collections: Collection[]; // An array of Collection objects
};

// Keyframes for fade-in animation
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Styled component for individual collection cards
const CollectionCard = styled.a`
    display: block;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s ease;
    animation: ${fadeIn} 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`;

// Styled component for collection labels
const CollectionLabel = styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// Styled component for collection URLs
const CollectionLink = styled.span`
    font-size: 14px;
`;

// Functional component to display a list of collections
const CollectionList: React.FC<CollectionListProps> = ({ collections }) => {
    return (
        <div>
            {collections.map((collection, index) => (
                // Render each collection as a card with a link
                <CollectionCard key={index} href={collection.url} target="_blank" rel="noopener noreferrer">
                    <CollectionLabel>{collection.label}</CollectionLabel>
                    <CollectionLink>{collection.url}</CollectionLink>
                </CollectionCard>
            ))}
        </div>
    );
};

export default CollectionList;

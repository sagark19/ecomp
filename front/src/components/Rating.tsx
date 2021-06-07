interface ratingProp {
    rating:number
    numbReview:number
    color: string
}


export const  Rating:React.FC<ratingProp> = (ratingProp) => {
    return ( 
        <div>
            <span color={ratingProp.color} >
                <i className={ ratingProp.rating >= 1 ? 'fas fa-star' : ratingProp.rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
                </i>
            </span>
            <span color={ratingProp.color} >
                <i className={ ratingProp.rating >= 2 ? 'fas fa-star' : ratingProp.rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
                </i>
            </span>
            <span color={ratingProp.color} >
                <i className={ ratingProp.rating >= 2 ? 'fas fa-star' : ratingProp.rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
                </i>
            </span>
            <span color={ ratingProp.color}>
                <i className={ ratingProp.rating >= 4 ? 'fas fa-star' : ratingProp.rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
                </i>
            </span>
            <span color={ratingProp.color}>
                <i className={ ratingProp.rating >= 5 ? 'fas fa-star' : ratingProp.rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
                </i>
            </span>
            <span className='p-2'>
                {ratingProp.numbReview} reviews
            </span>
        </div>
    )
}



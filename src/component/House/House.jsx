import React from 'react';
import './House.css'

const House = (props) => {
    const {listings,handleDelete} = props;
    console.log('house',listings.listings)
    const listing = listings.map((listing,i) =>{
        return(
            <div key={i} className="house_main" >

                    <div className='image_container'>
                        <img src={listing.image} alt=""/>
                    </div>

                <div className='info_container'>
                <ul>
                    <li>{listing.name}</li>
                    <li>{listing.address}</li>
                    <li>{listing.city}</li>
                    <li>{listing.state}</li>
                    <li>{listing.zip}</li>
                </ul>

                </div>

                <div className='mort_container'>
                <ul>
                    <li>{`Monthly Mortgage: ${listing.mortgage}`}</li>
                    <li>{`Desired Rent: ${listing.ren}`}</li>
                </ul>

                </div>
                    <button
                    className='house_btn'
                    onClick={()=>handleDelete(listing.id)}
                    >X</button>
            </div>

        )
    })
    return (
        <div>
            {listing}
        </div>
    );
};

export default House;
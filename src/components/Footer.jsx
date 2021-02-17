import React from 'react'

function Footer( {nasaData} ) {
    return (
        <div>
            <small>Copyright {nasaData.copyright}</small>
        </div>
    )
}

export default Footer
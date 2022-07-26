import React from 'react'
import SubHeading from '../SubHeading/SubHeading'


import "./Address.css"

const Address = () => {
    return (
        <>
            <div className='main_container_address'>
                <div className='main_container_address-content-heading'>
                    <SubHeading heading="Quincy City Hall" />
                </div>
                <div className='main_container_address-content-heading-para'>
                    <h6 className='main_container_address-content-heading-para' >1305 Hancock Street <br />
                        1st Floor <br />
                        Quincy, MA 02169</h6>
                </div>
            </div>
        </>
    )
}

export default Address

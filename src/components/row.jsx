import React from 'react'

const row = () => {
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col">
                    Eat Eggs
                </div>
                <div className="col">
                    4/5/2023
                </div>
                <button className='col btn btn-danger'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default row
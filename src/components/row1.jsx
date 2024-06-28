import React from 'react'

const row1 = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <input type="text" placeholder='Enter Todo here..' />
                </div>
                <div className="col">
                    <input type="date" />
                </div>
                <button className='col btn btn-success'>
                    Add
                </button>
            </div>
        </div>
    )
}

export default row1
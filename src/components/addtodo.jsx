import React from 'react'

const addtodo = () => {
    return (
        <div class="container text-center mt-5">
            <div class="row">
                <div class="col">
                    <input type="text" placeholder='Enter Task ... ' />
                </div>
                <div class="col">
                    <input type="date" />
                </div>
                <div class="col">
                    <button type="submit" className='btn btn-success'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default addtodo
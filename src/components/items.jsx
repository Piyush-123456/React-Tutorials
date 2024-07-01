import React from 'react';

const Items = ({ items }) => {
    return (
        <div className="container text-center">
            {items.map((item, index) => (
                <div className="row mt-5" key={index}>
                    <div className="col">
                        {item.taskname}
                    </div>
                    <div className="col">
                        {item.duedate}
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;

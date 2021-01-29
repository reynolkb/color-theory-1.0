import React from 'react';

const AddTags = () => {
    
    return(
        <div className='add-tags-component'>
            <form>
                <div>
                    <label>Add Tag</label>
                    <input />
                </div>
                <button className='btn'>Add</button>
            </form>
            {/* pill rough draft */}
            <div className='added-tags'>
                <h4>Tags</h4>
                {/* dummy pills to change into a for loop */}
                <div className='tag-pill'>
                    <p>olives</p>
                </div>
                <div className='tag-pill'>
                    <p>microwave</p>
                </div>
                <div className='tag-pill'>
                    <p>birdy</p>
                </div>
                <div className='tag-pill'>
                    <p>tag will go here</p>
                </div>
                <div className='tag-pill'>
                    <p>gamestop stocks</p>
                </div>
                <div className='tag-pill'>
                    <p>css wizard</p>
                </div>
            </div>
        </div>

    )
}

export default AddTags;
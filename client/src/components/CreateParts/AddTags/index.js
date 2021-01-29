import React from 'react';

const AddTags = () => {
    
    return(
        <div className='add-tags-component'>
            <form>
                <div>
                    <label>Add Tags</label>
                    <input />
                </div>
                <button className='btn'>Add</button>
            </form>
            {/* pill rough draft */}
            <div className='added-tags'>
                <h4>Tags</h4>
                {/* dummy pills to change into a form loop */}
                <div className='tag-pill'>
                    <p>tag will go here</p>
                </div>
                <div className='tag-pill'>
                    <p>tag will go here</p>
                </div>
                <div className='tag-pill'>
                    <p>tag will go here</p>
                </div>
            </div>
        </div>

    )
}

export default AddTags;
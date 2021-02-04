import React from 'react';

const TagHolder = ({ tags }) => {

    return (
        <div className='added-tags'>
            <h4>Tags</h4>
            {tags.map((tag, i) => (
                <div key={`${tag}${i}`} className='tag-pill'>
                    <p>{tag.name}</p>
                </div>
            ))}

        </div>
    )

}

export default TagHolder;
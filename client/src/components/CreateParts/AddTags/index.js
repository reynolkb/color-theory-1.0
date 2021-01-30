import React, { useState, useContext } from 'react';
import { paletteCreatorContext } from '../CreateProvider';

const AddTags = () => {
    
    const [ newTag, setNewTag ] = useState('');
    const { state, handleChange } = useContext(paletteCreatorContext);

    const handleTag = (e) => {
        setNewTag(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
        }
    }

    const handleAddTag = () => {
        const cleanTag = newTag.trim()
        if(cleanTag === '') {
            return;
        }
        handleChange({
            tags: [...state.tags, newTag],
        })
        setNewTag('');
    }

    const handleRemoveTag = (tag) => () => {
        const updatedTags = state.tags.filter(t => t !== tag);
        handleChange({
            tags: updatedTags
        });
    }

    return(
        <div className='add-tags-component'>
            <form>
                <div>
                    <label htmlFor='tags'>Add Tag</label>
                    <input 
                        name='tags'
                        value={newTag}
                        onChange={handleTag}
                        onKeyPress={handleKeyPress}
                        maxLength='10'
                    />
                </div>
                <button
                    type='button'
                    className='btn'
                    onClick={handleAddTag}
                >
                    Add
                </button>
            </form>
            {/* pill rough draft */}
            <div className='added-tags'>
                <h4>Tags</h4>
                {
                    state.tags.map((tag, i) => (
                        <div key={`${tag}${i}`} className='tag-pill'>
                            <p>{tag}</p>
                            <button 
                                type='button'
                                className='tag-pill-delete'
                                onClick={handleRemoveTag(tag)}>×</button>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default AddTags;
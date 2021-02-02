import { useQuery } from '@apollo/react-hooks';
import React, { useState, useContext } from 'react';
import { QUERY_TAG } from '../../../utils/queries';
import { paletteCreatorContext } from '../CreateProvider';

const AddTags = () => {
    
    const [ newTag, setNewTag ] = useState('');
    const { state, handleChange } = useContext(paletteCreatorContext);
    const { loading, data} = useQuery(QUERY_TAG,{
        variables: {name: newTag.trim()}
    });

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
        console.log(data.tag);
        let cleanTag;
        // checks to see if tag already exist in the db
        if(data.tag){
            console.log("This tag already exist!");
            cleanTag = data.tag._id;
            setNewTag({cleanTag});
            console.log(cleanTag);
        } else {
            cleanTag = newTag.trim();
        }
        if(cleanTag === '') {
            return;
        }
        if (data.tag) {
            handleChange({
                tags: [...state.tags, newTag],
                // identical array except will push the tag id if already exist
                // will be used for conditions later on
                ifNew: [...state.ifNew, cleanTag]
            })
            setNewTag('');
        } else {
            handleChange({
                tags: [...state.tags, newTag],
                // identical array for conditions later on
                ifNew: [...state.ifNew, newTag]
            })
            setNewTag('');
        }
    }
    const handleRemoveTag = (tag) => () => {
        const indexOfRemove = state.tags.indexOf(tag);
        const updatedTags = state.tags.filter(t => t !== tag);
        const currentIfNew = state.ifNew;
        const removedIfNewTag = currentIfNew.splice(indexOfRemove, 1);
        console.log(removedIfNewTag);
        console.log(currentIfNew);
        console.log(updatedTags);
        handleChange({
            tags: updatedTags,
            ifNew: currentIfNew
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
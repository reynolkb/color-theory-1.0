import React from 'react';

const Create = () => {

    return(
        <div className='create-pg-wrapper'>
            <h3>Create a Palette</h3>
            <div className='create-wrapper'>
                {/* left side */}
                <div className='create-form-wrapper'>
                    <form>
                        <div>
                            <label>Name of Palette:</label>
                            <input />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea />
                        </div>
                    </form>
                    <form>
                        <div>
                            <label>Add Tags</label>
                            <input />
                        </div>
                        <button>Add</button>
                    </form>
                </div>
                {/* right side */}
                <div>
                    <div>
                        the color picker
                    </div>
                    <div>
                        the palette picker
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Create;
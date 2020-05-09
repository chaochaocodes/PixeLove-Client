import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

const NameForm = (props) => {
    
    const stylePink = {
        color: "#ffa09a",
        paddingTop: "10px",
    }
    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }

    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('myName', e.target.value);
        props.history.push('/lobby');
    };
    
    return(
        <> 
        <div className="content" align="center">
        <div className="title">
            <div style={styleGrey} >Pixe</div>
            <div style={stylePink} >Love</div>
        </div>

        <form onSubmit={e => handleSubmit(e)} className="enter" noValidate>
            <label id="user" htmlFor="user" style={styleGrey}>Enter Your Name:</label>
            <input id="user" type="text" name="user" value={name} onChange={handleChange}/><br/>
            <button type="submit">Let's Draw!</button>
        </form>

        </div>
        </>
    )
}

export default NameForm;
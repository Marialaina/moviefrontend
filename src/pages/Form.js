import React, {useState} from "react";
import { Typography, makeStyles } from '@material-ui/core';
import TextField from "@material-ui/core/TextField"

const Form = ({ initialMovie, handleSubmit, buttonLabel, history}) => {
    const [formData, setFormData] = useState(initialMovie);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
    };

    const handleSubmisson = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/");
    }
    const newStyle = {
        background: "#4777",
        color: "#e87ac1"
    }


    return (
        
        <form 
        onSubmit={handleSubmisson}>
        <TextField
        style={newStyle}
        label="movie"
          type="text"
          onChange={handleChange}
          value={formData.title}
          name="title"
        />
        <TextField
        style={newStyle}
        label="where to watch"
          type="text"
          onChange={handleChange}
          value={formData.wheretowatch}
          name="wheretowatch"
        />
        <input type="submit" value={buttonLabel} />
      </form> 
    )
}

export default Form
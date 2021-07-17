import React, {useState} from "react";

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
    // const newStyle = {
    //     background: "#4777",
    //     color: "#e87ac1"
    // }

    // const formStyle = {
    //     display:"inline-block",
    //     width: "70%",
    //     height: "50%"
    // }


    return (
        
        <form 
        onSubmit={handleSubmisson}>
        <input
        // style={newStyle}
          type="text"
          onChange={handleChange}
          value={formData.title}
          name="title"
        />
        <input
        // style={newStyle}
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
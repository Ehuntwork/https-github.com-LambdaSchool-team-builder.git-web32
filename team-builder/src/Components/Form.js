import React from 'react';


function Form(props) {
    const{
        values,
        onInputChange,
        onSubmit,
    } = props;


  return (
    <div className="Form" onSubmit={onSubmit}>
        
        <form>
            <h2>Add a Team Member</h2>

            <label>
                Name:&nbsp;
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>

            <label htmlFor='emailInput'>
                Email:&nbsp;
                <input 
                    id='emailInput'
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}/>
            </label>

            <label>
                Role:&nbsp;
                <select 
                    name='role'
                    value={values.role}
                    onChange={onInputChange}
                >
                    <option value=''>Select Role</option>
                    <option value='backend engineer'>Backend Engineer</option>
                    <option value='frontend engineer'>Frontend Engineer</option>
                    <option value='designer'> Designer</option>
                </select>
            </label>

            <button>Submit</button>

        </form>
    </div>
  );
}

export default Form;
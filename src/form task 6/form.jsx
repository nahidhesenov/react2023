import { useState } from "react";
import { z } from "zod";
import "./form.css"

function fillForm() {
    return {
        username: "",
        password: "",
        email: "",
        date: ""
    }
}

export default function Form() {
    const [form, setForm] = useState(fillForm())
    const [errors, setErrors] = useState(fillForm())

    const handleChange = (event) => {
        let obj = {
            [event.target.name]: event.target.value
        }
        let form_copy = { ...form }
        let payload = { ...form_copy, ...obj }
        setForm(payload)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userSchema = z.object({
            username: z.string().min(5).max(20),
            password: z.string().min(5).max(20),
            email: z.string().email(),
            date: z.date()
        })
        let results = userSchema.safeParse(form)
        let copy = {}
        let arr = results.error.issues.forEach(el => {
            copy = { ...copy, [el.path[0]]: el.message }
        })
        console.log(copy)
        setErrors(copy)
    }


    return (
        <div style={{ margin: "0px auto 100px" ,display:'flex',justifyContent:'center'}}>
            <form onSubmit={handleSubmit}>
                <fieldset style={{borderRadius:'20px',padding:"20px" ,boxShadow:"0px 20px 20px gray" ,display:'flex',flexDirection:'column' }}>
                    <legend style={{textAlign:'center'}}>New Form Style</legend>
                    <label htmlFor="username" style={{color:'black'}}>
                        Name
                    </label>
                    <input value={form.username} onChange={handleChange} name="username" type="text" placeholder="name" />
                    <p className="error">{errors.username}</p>
                    <label htmlFor="email" style={{color:'black'}}>
                        Email
                    </label>
                    <input value={form.email} onChange={handleChange} name="email" type="email" placeholder="email" />
                    <p className="error">{errors.email}</p>
                    <label htmlFor="password" style={{color:'black'}}>
                        Password
                    </label>
                    <input value={form.password} onChange={handleChange} name="password" type="password" placeholder="password" />
                    <p className="error">{errors.password}</p>
                    <label htmlFor="date" style={{color:'black'}}>
                        Birthdate
                    </label>
                    <input value={form.date} onChange={handleChange} name="date" type="date" placeholder="birthdate" />
                    <p className="error">{errors.date}</p>
                    <button className="formButton" type="submit">Signup</button>
                </fieldset>
            </form>
        </div>
    )
}
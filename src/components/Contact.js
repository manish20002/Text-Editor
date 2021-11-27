import React from 'react'
import '../App.css'

export default function Contact() {
    return (
        <div>
            <form>
                <hr my-5/>
                <h1>Contact Me</h1>
                <div className="form-group mx-5">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mx-5">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group mx-5">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="2"></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-1">Submit</button>
            </form>
        </div>
    )
}

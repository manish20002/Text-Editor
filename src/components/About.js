import React from 'react'
import '../App.css'
import { FaGithub } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

export default function About() {
    return (
        <div className="aaa">
            <h1 >About Me</h1>
            <div className="card-body">
                <p className="card-text">Hello i'm Manish Thirani, This is a demo
                    project using "React Js." . If you guys are intested in my demo projects make sure too
                    follow me on "Github" & "Instagram" the links are given below.</p>
                <div className="icon mx-3 my-1">
                    <a className="icon1" href="https://github.com/manish20002"><FaGithub size={25} /><b> Github</b></a>
                    <a className="icon2" href="https://www.instagram.com/manish_heroisgreat_20/"><RiInstagramLine size={26}/><b> Instagram</b></a>
                </div>
                <b>Thank You For Using This Tool</b>
            </div>
        </div >
    );
}
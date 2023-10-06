import React from 'react';
import { Navbar, Footer } from "../../Components";
import { useState } from "react";
import "./Recommend.scss";

const Recommend = () => {;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");

    const [responseData, setResponseData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(JSON.stringify({ title, price, duration }))
        try {
            const response = await fetch('http://127.0.0.1:5000/recommend', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, price, duration })
            });

            if (response.ok) {
                const data = await response.json();
                setResponseData(data)
            }
        } catch (error) {
            console.log("An error occured:", error)
        }
    }


  return (
    <div>
        <Navbar />

        <div className="recommend">
            <h2 className="title-text">AI Powered Course Recommendation Awaits!</h2>
            <p className='text-2'>Dive Deeper into your learning path on Udemy. Input the details of a course you've completed, and our advanced AI will tailor recommendations for your next adventure.</p>
            <form action="" className='form'>
                <h4>Input your course details:</h4>

                <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder='Course Title' />
                    <p><b>Hint:</b> Enter the exact course title for best results. E.g., "Introduction to Python Programming"</p>
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price:</label>
                    <input type="text" name='price' value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' />
                    <p><b>Hint:</b> Input the price in USD format. E.g., "75"</p>
                </div>
                <div className="form-field">
                    <label htmlFor="duration">Duration:</label>
                    <input type="text" name='duration' value={duration} onChange={e => setDuration(e.target.value)} placeholder='Duration' />
                    <p><b>Hint:</b> Input the duration in hours. E.g., "5.5" for 5 and a half hours.</p>
                </div>

                <button type="submit" onClick={handleSubmit}>Get Recommendations</button>
            </form>
            <p>Once you've entered the details, click on "Get Recommendations" and let our AI system work it's magic. In moments, you'll recieve curated courses that align with your past learning experience and preferences.</p>
        </div>

        <div className="table" id='table'>
            <h2>Recommendations:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>URL</th>
                        <th>Price $</th>
                        <th>Duration (hrs)</th>
                        <th>Level</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {responseData && Object.keys(responseData.course_title).map(id => (
                        <tr key={id}>
                            <td>{responseData.course_title[id]}</td>
                            <td><a href={responseData.url[id]}>{responseData.url[id]}</a></td>
                            <td>{responseData.price[id]}</td>
                            <td>{responseData.content_duration[id]}</td>
                            <td>{responseData.level[id]}</td>
                            <td>{responseData.subject[id]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <Footer />
    </div>
  )
}

export default Recommend;
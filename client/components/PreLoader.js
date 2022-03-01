import React, { useState, useEffect } from "react";
import "../loader.css";

export default function PreloaderScreen() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let mounted = true;
        const interval = setInterval(() => {
            if (mounted) {
                if (count < 100) {
                    return setCount(prevCount => prevCount + 1);
                }
                else if (count === 100) {
                    return clearInterval(interval);
                }
            }
        }, 20);
        return () => mounted = false;
    }, [])

    return (
        <div id="loader-screen">
            <div className="loading-page">
                <div className="counter">
                    <p>Carlos Miranda</p>
                    <hr style={{ maxWidth: `${count}%` }} />
                    <h1>{count < 100 ? count : "100"}%</h1>
                </div>
            </div>
            <div className='body-img'>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className='base'>
                    <span></span>
                    <div className='face'></div>
                </div>
            </div>
            <div className='longfazers'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
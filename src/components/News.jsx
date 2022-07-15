import { useState } from "react";
import React from 'react';
import axios from 'axios';


export default function News() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const handledata = () => {
        axios
            .get(
                `https://gnews.io/api/v4/search?q=${search}&token=ff60369e16124c6d95743971a7f5f728`
            )
            .then((res) => {
                console.log(res);
                setData(res.data.articles);
            });
    };

    return (
        <div className="App">
            <input onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handledata}>news search</button>
            {data.map((article) => {
                return (
                    <>
                        <div>
                            <div>
                                <h3>{article.title}</h3>
                            </div>
                            <h6>
                                <b>Source:{article.source.name}</b>
                            </h6>
                            <div>
                                <img src={article.image} alt="" style={{ width: "300px", height: "300px" }} />
                            </div>
                            <p>
                                <b>Content:</b>
                                {article.content}
                            </p>
                            <div>
                                <p>
                                    <b>Description</b>
                                    {article.description}
                                </p>
                            </div>

                        </div>

                    </>
                );
            })}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Datas = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/photos?albumId=1`
        }).then(res => {
            setData(res.data)
        })
        setLoading(false);
    }, [setData])
    return (
        <div>
            {loading && <div className="spinner-border text-primary text-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {!loading &&
                <div className="row">
                    {data.map(datas => (
                        <div class="col-3" key={datas.id}>
                            <div className="card">
                                <img src={datas.thumbnailUrl} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{datas.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Datas;
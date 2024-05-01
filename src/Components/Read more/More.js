import React from 'react'

const More = ({ img, title, date, author, desc, hide }) => {
    console.log(desc);
    return (
        <>
            <div className="modal show fade" tabindex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={hide}></button>
                        </div>
                        <div className="modal-body">
                            <div className="card" >
                                <img src={`http://localhost:5000/uploads/${img}`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">{desc}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default More
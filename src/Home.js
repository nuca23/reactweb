import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Home() {
    const navigate= useNavigate();
    function redirect() {
         navigate("/contact");
    }
    return (
        <>
         <Link to={"/Contact"}>კონტაქტის გვერდი</Link>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form method="POST"></form>
                        <div className="form-group mb-3">
                           <input type="name" placeholder="name surname" className="form-control"/>
                        </div>
                          <div className="form-group mb-3">
                           <input type="mail" placeholder="mail" className="form-control" />
                        </div>
                           <div className="form-group">
                            <input type="button" className="btn btn-succes" value="შესვლა" onClick={()=> redirect()}/>
                            

                           </div>
                        </div>
                    </div>
                </div>
        
        </>
    );
}
export default Home;
import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <>
        <div className="container">

         <Link to={"/"}>მთავარი გვერდი</Link>

        <i className="bi bi-rocket"></i>
            <h1>
            სტაჟირება/ პრაქტიკა
  ჩვენ მოსწავლეებს აქვთ შესაძლებლობა გაიარონ სტაჟირება/პრაქტიკა ჩვენს ჯგუფში შემავალ სხვადასხვა კომპანიებში,
  აგრეთვე იმუშაონ ახალ პროექტებზე ან/და მიიღონ მონაწილეობა სტარტაპების შექმნაში
            </h1>
        </div>
        </>

    );
}
export default About;
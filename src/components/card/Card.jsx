import Woman from "../../assets/icons/Woman";
import Mail from "../../assets/icons/Mail";
import Map from "../../assets/icons/Map";
import "./Card.scss";
import PadLock from "../../assets/icons/PadLock";
import GrowingMan from "../../assets/icons/GrowingMan";
import { BsTelephoneForward } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";

let userArray = [];

const Card = () => {
  const [data, setData] = useState();
  const [output1, setOutput1] = useState("My Name is: ");
  const [output2, setOutput2] = useState("");
  let [table, setTable] = useState();

  useEffect(() => {
    const response = axios("https://randomuser.me/api/").then((res) =>{
      return (
        setData(res.data.results[0]),
        setOutput2([res.data.results[0].name.first, " ", res.data.results[0].name.last])
      )}
    );
  }, []);

  const getData = async () => {
    const response = await axios("https://randomuser.me/api/").then((res) => {
        return (
            setData(res.data.results[0]),
            setOutput1("My Name is: "),
            setOutput2([res.data.results[0].name.first, " ", res.data.results[0].name.last])
        )
    });
  };

  return (
    <main className="card-main">
      <section className="section1">
        <img src={data?.picture.thumbnail} alt="userImage" className="image" />
      </section>

      <section className="section2">
        <div className="section2-inner-div">
          <p className="output-up"> {output1} </p>
          <p className="output-down">{output2} </p>
        </div>
      </section>

      <section className="section3">
        <Woman onClick={() => {
              return (
                setOutput1("My Name is: "),
                setOutput2([data?.name.first, " ", data?.name.last])
              )
          } } />
        <Mail
          onClick={() => {
              return (
                setOutput1("My E-Mail is: "),
                setOutput2(data?.email)
              )
          } }
        />
        <GrowingMan onClick={() => {
              return (
                setOutput1("My Age is: "),
                setOutput2(data?.dob.age)
              )
          } } />
        <Map onClick={() => {
              return (
                setOutput1("My Country is: "),
                setOutput2(data?.location.country)
              )
          } } />
        <BsTelephoneForward style={{ width: "3rem", height: "3rem" }} onClick={() => {
              return (
                setOutput1("My Telephone Number is: "),
                setOutput2(data?.phone)
              )
          } } />
        <PadLock onClick={() => {
              return (
                setOutput1("My Password is: "),
                setOutput2(data?.login.password)
              )
          } } />
      </section>

      <section className="section4">
        <div>
          <button onClick={getData}>NEW USER</button>
        </div>
        <div>
          <button onClick={() => {
              return (
                userArray.push({
                    firstName : data.name.first,
                    email : data.email,
                    phone : data.phone,
                    age : data.dob.age
                }),  
                console.log(userArray),
                setTable(userArray.length)
              )
          } } >ADD USER</button>

        </div>
      </section>

      <section className="section5">
         {table > 0 &&
         <table className="table" >
         <tbody>
           <tr>
             <th>FIRST NAME</th>
             <th>E-MAIL</th>
             <th>PHONE</th>
             <th>AGE</th>
           </tr>
           {userArray?.map((user, index) => {
               return (
                   <tr key={index} >
                       <td>{user.firstName}</td>
                       <td>{user.email}</td>
                       <td>{user.phone}</td>
                       <td>{user.age}</td>
                   </tr>
               )
           })}
         </tbody>
       </table> }
      
      </section>
    </main>
  );
};

export default Card;
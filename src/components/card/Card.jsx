import Woman from "../../assets/icons/Woman";
import Mail from "../../assets/icons/Mail";
import Map from "../../assets/icons/Map";
import "./Card.scss";
import PadLock from "../../assets/icons/PadLock";
import GrowingMan from "../../assets/icons/GrowingMan";
import axios from "axios";
import { useEffect, useState } from "react";
import Phone from "../../assets/phone.svg";
import Man from "../../assets/man.svg";
import GrowingWoman from "../../assets/growing-up-woman.svg";
import Table from "../table/Table";

let userArray = [];

const Card = () => {
  const [data, setData] = useState();
  const [output1, setOutput1] = useState("My Name is: ");
  const [output2, setOutput2] = useState("");
  const [table, setTable] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios("https://randomuser.me/api/").then((res) => {
      console.log(res)
      return (
        setData(res.data.results[0]),
        setOutput1("My Name is: "),
        setOutput2([
          res.data.results[0].name.first,
          " ",
          res.data.results[0].name.last,
        ])
      );
    });
  };

  return (
    <main className="card-main">
      <section className="section1">
        <img src={data?.picture.large} alt="userImage" className="image" />
      </section>

      <section className="section2">
        <div className="section2-inner-div">
          <p className="output-up"> {output1} </p>
          <p className="output-down">{output2} </p>
        </div>
      </section>

      <section className="section3">
        {data?.gender == "female" ? (
          <Woman
          className = "icon"
            onClick={() => {
              return (
                setOutput1("My Name is: "),
                setOutput2([data?.name.first, " ", data?.name.last])
              );
            }}
          />
        ) : (
          <img
            className = "icon"
            src={Man}
            alt=""
            style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
            onClick={() => {
              return (
                setOutput1("My Name is: "),
                setOutput2([data?.name.first, " ", data?.name.last])
              );
            }}
          />
        )}

        <Mail
          className = "icon"
          onClick={() => {
            return setOutput1("My E-Mail is: "), setOutput2(data?.email);
          }}
        />

        {data?.gender == "male" ? (
          <GrowingMan
            className = "icon"
            onClick={() => {
              return setOutput1("My Age is: "), setOutput2(data?.dob.age);
            }}
          />
        ) : (
          <img
            className = "icon"
            src={GrowingWoman}
            alt=""
            style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
            onClick={() => {
              return setOutput1("My Age is: "), setOutput2(data?.dob.age);
            }}
          />
        )}

        <Map
          className = "icon"
          onClick={() => {
            return (
              setOutput1("My Country is: "), setOutput2(data?.location.country)
            );
          }}
        />

        <img
          className = "icon"
          src={Phone}
          alt="Phone"
          style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
          onClick={() => {
            return (
              setOutput1("My Telephone Number is: "), setOutput2(data?.phone)
            );
          }}
        />

        <PadLock
          className = "icon"
          onClick={() => {
            return (
              setOutput1("My Password is: "), setOutput2(data?.login.password)
            );
          }}
        />
      </section>

      <section className="section4">
        <div>
          <button onClick={getData}>NEW USER</button>
        </div>

        <div>
          <button
            onClick={() => {
              const arrayFilter = userArray?.filter((item) => {
                  return (
                    item.firstName == data.name.first
                  )   
              })
              return (
                  arrayFilter.length == 0 ? 
                  (userArray.push({
                    firstName: data.name.first,
                    email: data.email,
                    phone: data.phone,
                    age: data.dob.age,
                  }),

                  setTable(userArray.length)) 
                  
                  :
                  alert("The User is Already Exist!!!")
              );
            }}
          >
            ADD USER
          </button>
        </div>
      </section>

      <section className="section5">
        {table > 0 && (
          <Table userArray = {userArray} />
        )}
      </section>
    </main>
  );
};

export default Card;
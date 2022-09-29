import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';



export default function SignUp() {
    // const [shouldUpdate, setUpdate] = useState(false);
    // const [items, setItems] = useState([]);
    // const [selectedItem, setSelectedItem] = useState({});

    const [fields, setFields] = useState({
        username: "",
        password: ""

    })

    let signUpWasClicked = () => {
        postData('http://localhost:5051/api/users', fields)
            .then(data => {
                console.log("user login returned from server", data); // JSON data parsed by `data.json()` call
            });
    };

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    // function addToDB() {

    //     fetch("http://localhost:5051/api/users",
    //         {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             method: "POST",
    //             body: JSON.stringify(fields)
    //         })
    //         // .then(() => {
    //         //     setUpdate(true);
    //         // })
    //         .catch(function (res) { console.log(res) })



    // }







    return (
        <>
            <div className="aroundContact">
                <div className='contactus'>
                    <h1>Welcome New Member </h1>
                    <form>
                        <div id="divAroundName" className=''>
                            <label htmlFor="lbl">Username:</label>

                            <input placeholder="Username" value={fields.username} name="username" onChange={(e) => setFields({ ...fields, [e.target.name]: e.target.value })} />
                            <br />
                            <label htmlFor="lbl">Password:</label>
                            <input placeholder="Password" value={fields.password} type="password" name="password" onChange={(e) => setFields({ ...fields, [e.target.name]: e.target.value })} />
                            <br />
                            {/* <label htmlFor="lbl">Email:</label>
                            <input placeholder="Email" value={fields.email} type="email" name="email" onChange={(e) => setFields({ ...fields, [e.target.name]: e.target.value })} /> */}
                        </div>

                        <Button type="primary" onClick={signUpWasClicked} >Add</Button>
                    </form>
                </div >
            </div>

        </>
    )
}





/*
 switch (e.target.name) {
            case ("fname"):
                setFormInfo({
                    ...formInfo,
                     first: e.target.value
                 });
                break;

            case ("lname"):
                setFormInfo({
                    ...formInfo,
                        last: e.target.value
                    });
                break;

            case ("email"):
                setFormInfo({
                    ...formInfo,
                        email: e.target.value
                    });
                break;
        
            default:
                break;
        }
        */


/*
 let newObj ={
   ...formInfo,
   [whichField]:e.target.value

// in case of many fields
//    ...{
//        [whichField]:e.target.value
//    }
}
*/
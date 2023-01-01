import React from 'react';
import userList from "userlist.module.css";

const userlist = ({userlist}) => {
    return (
        <div className={userList.container}>
            <ul>
                {userlist.map((ele)=>{
                    return <li>{ele.name}/{ele.discord}</li>
                })}
            </ul>
        </div>
    );
};

export default userlist;
import React from 'react';

const userlist = ({userlist}) => {
    return (
        <div className={userlist.container}>
            <ul>
                {userlist.map((ele)=>{
                    return <li>{ele.name}</li>
                })}
            </ul>
        </div>
    );
};

export default userlist;
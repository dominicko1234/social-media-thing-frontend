import { useState } from 'react';

const Home = () => {

    const [groups, useGroups] = useState([{id: "1", group_name: "Group 1", users_chatting: 700}, {id: "2", group_name: "Group 2", users_chatting: 50}])

    return (
        <div className="p-5">
                {groups.map((group) => (
                    <div className="p-5 mb-5 rounded-xl shadow-md bg-gray-100 flex items-center justify-between hover:bg-gray-200 hover:shadow-lg ">
                        <h1 className="">{group.group_name}</h1>
                        <small className='float-right'>{group.users_chatting} users</small>
                    </div>
                ))}
        </div>
    );
}
 
export default Home;
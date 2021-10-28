import React from 'react';
import BoardList from "../../components/board/BoardList";


const ListPage = ({location}) => {
    return (
        <>
            <h1>Board List Page</h1>
            <BoardList location={location}>

            </BoardList>
        </>
   );
};

export default ListPage;
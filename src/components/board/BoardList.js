import React from 'react';
import queryString from "query-string";

import useBoard from "../../hooks/useBoard";

const BoardList = ({location}) => {

    const params =  queryString.parse(location.search)

    const {pageInfo,  getPageList} = useBoard( { page:params.page, size: 10} )

    const list = pageInfo.dtoList.map(dto => <li key={dto.bno}>{dto.bno} -- {dto.title}</li>)


    return (
        <div>
            <h1>List</h1>
            <ul>
                {list}
            </ul>

        </div>
    );
};

export default BoardList;
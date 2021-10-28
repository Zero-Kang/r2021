import axios from "axios";
import {useEffect, useState} from "react";

const pageState = {
    page:1,
    size:10
}


const pageInfoState = {
    count:0, page:0, prev:false, next:false, start:0, end:0,size:0, dtoList:[]
}

export default (pageParam) => {

    console.log("-----useBoard------------------------------", pageParam)

    const [pageDTO, setPageDTO] = useState(pageParam)
    const [pageInfo, setPageInfo] = useState(pageInfoState)

    const register = async (dto) => {

        const response = await axios.post('http://localhost:8080/api/board/register', dto)

        const data = response.data

        return data
    }

    const getPageList = (pageNum, size) => {
        console.log("getPageList..")
        setPageDTO({page:pageNum, size: size})
    }

    useEffect(() => {

        console.log("useEffect: ",pageDTO)

        axios.get(`http://localhost:8080/api/board/list?page=${pageDTO.page || 1 }&size=${pageDTO.size}`).then(res => {

            const data = res.data

            console.log('-------------------------------------------useEffects')

            setPageInfo({...data})

        })

    }, [pageDTO])


    return {
        setPageDTO,
        pageInfo,
        register,
        getPageList
    }

}
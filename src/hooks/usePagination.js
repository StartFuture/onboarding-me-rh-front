import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import qs from 'query-string'

export default function usePagination() {

    const location = useLocation()
    const history = useNavigate()

    const [actualPage, setActualPage] = useState(
        getActualPage() || 1
    )

    function getActualPage() {
        const queryParams = qs.parse(location.search)
        const page = queryParams.page

        return page ? Number(page) : undefined
    }

    useEffect(() => {
    const queryParams = qs.parse(location.search)

    history({
        search: qs.stringify({
            ...queryParams,
            page: actualPage
        })
    })
    }, [actualPage])

    return {
        setActualPage,
        actualPage
    }

}
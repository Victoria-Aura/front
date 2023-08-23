import { useEffect } from "react"

export const useNewsServerData = (data,setter) => {
    useEffect(() => {
        data.then(data => setter(data.data))
    },[])
}
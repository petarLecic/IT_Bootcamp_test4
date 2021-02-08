import { useEffect, useState } from "react"
import Launches from "./components/Launches"
import Select from "./components/Select"
import { getAllLaunches } from "./service"

const App = () => {
    const [launches, setLaunches] = useState([])
    const [showLaunches, setShowLaunches] = useState([])

    useEffect(() => {
        getAllLaunches().then(res => {
            setLaunches(res.data)
            setShowLaunches(res.data)
        })
    }, [])

    return (
        <>
            <Select launches={launches} setShowLaunches={setShowLaunches} />
            <Launches launches={showLaunches}/>
        </>
    )
}

export default App

import { useState } from "react"
import { getRocketById } from "../service"

const Launch = ({ launch }) => {
    const [rocket, setRocket] = useState({})
    const [isActive, setIsActive] = useState('')

    return (
        <div onClick={() => getRocketById(launch.rocket).then(res => {
            setRocket(res.data)
            res.data.active ? setIsActive('Active') : setIsActive('Retired')

        })}
        >
            <img 
                src={launch.links.patch.small} 
                alt={`Image of ${launch.name}`}
                width='150'
            />
            <p>{launch.name}</p>
            <p>{launch.static_fire_date_unix}</p>
            <p>{rocket ? rocket.name : ''}</p>
            <p>{isActive ? isActive : ''}</p>
            <hr/>
        </div>
    )
}

export default Launch
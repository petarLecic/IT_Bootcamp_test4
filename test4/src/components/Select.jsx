const Select = ({ launches, setShowLaunches }) => {
    const sliceLaunches = selectValue => {
        if (selectValue === 'All') return launches
        else  return launches.slice(0, Number(selectValue))
    }
    
    return (
        <select defaultValue="All" onChange={e => setShowLaunches(sliceLaunches(e.target.value))} >
            <option value="All">All</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
    )
}

export default Select
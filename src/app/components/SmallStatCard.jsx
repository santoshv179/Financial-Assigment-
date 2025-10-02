const SmallStatCard = ({icon,label,value,amount})=>{
    return(
        <div className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-gray-200">
            <div className="text-red-500 text-2xl">{icon}</div>
            <div>
                <p className="text-sm font-semibold text-gray-700">{label}</p>
                <p className="text-xs text-gray-500">{value}</p>
                <p className="text-xs text-gray-500">{amount}</p>
            </div>
        </div>
    )
}

export default SmallStatCard;
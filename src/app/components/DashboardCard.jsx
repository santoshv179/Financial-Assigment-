const DashboardCard = ({title,value,change,changeColor})=>{

    return(
        <div className="bg-white dark:bg-slate-800 dark:border-slate-700 p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">{value}</h2>
            <p className={`text-sm mt-2 ${changeColor} dark:text-yellow-500`}>{change}</p>
            <div className="flex justify-between mt-4">
                <button className="text-xs text-blue-600 cursor-pointer  font-semibold hover:underline">View Report</button>
                <button className="text-xs text-blue-500 cursor-pointer font-semibold hover:underline">View Trend</button>
            </div>
        </div>
    )
}

export default DashboardCard;
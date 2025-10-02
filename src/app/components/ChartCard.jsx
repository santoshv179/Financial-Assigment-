import React from "react";

const ChartCard = ({title,children})=>{
    return(
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-gray-700">{title}</h3>
                <button  className="text-xs text-blue-600 font-semibold hover:underline">View Report</button>
            </div>

            <div className="h-64">
                {/* actual chart passed as children */}
                {children}
            </div>
        </div>
    )
}

export default ChartCard
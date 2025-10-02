
'use client';

import DashboardCard from "./DashboardCard";
import SmallStatCard from "./SmallStatCard";
import ChartCard from "./ChartCard";
import ClientsChart from "./charts/ClientsChart";
import SipBusinessChart from "./charts/SipBusinessChart";
import MonthlyMisChart from "./charts/MonthlyMisChart";
import { FaShoppingCart, FaCreditCard, FaSyncAlt, FaBan, FaPlusCircle } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Dashboard({ data }) {
  const stats = [
    { icon: <FaShoppingCart />, ...data.stats[0] },
    { icon: <FaCreditCard />, ...data.stats[1] },
    { icon: <FaSyncAlt />, ...data.stats[2] },
    { icon: <FaBan />, ...data.stats[3] },
    { icon: <FaPlusCircle />, ...data.stats[4] },
  ];

  const filters = ['3 Days', '7 Days', '10 Days', '30 Days'];

  const handlePdfDownload = () => {
    const dashboard = document.getElementById('dashboard-content');
    html2canvas(dashboard).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('dashboard-report.pdf');
    });
  };

  return (
    <main className="bg-gray-100 p-3 md:p-6 lg:p-8 min-h-screen">
      {/* PDF Download Button */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={handlePdfDownload} 
          className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 text-sm md:text-base"
        >
          Download PDF
        </button>
      </div>

      <div id="dashboard-content" className="space-y-6 md:space-y-8">
      
        <div className="bg-white p-3 md:p-5 rounded-lg shadow-md border border-gray-200 space-y-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-start">
            {filters.map((filter) => (
              <button 
                key={filter} 
                className="px-3 py-1 text-xs md:text-sm font-semibold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat) => (
              <SmallStatCard 
                key={stat.id} 
                icon={stat.icon} 
                label={stat.label} 
                value={stat.value} 
                amount={stat.amount} 
              />
            ))}
          </div>
        </div>

        {/* Main Cards (AUM & SIP) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <DashboardCard {...data.mainCards.aum} />
          <DashboardCard {...data.mainCards.sip} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ChartCard title="CLIENTS">
            <ClientsChart data={data.charts.clients} />
          </ChartCard>
          <ChartCard title="SIP BUSINESS CHART">
            <SipBusinessChart data={data.charts.sipBusiness} />
          </ChartCard>
          <ChartCard title="MONTHLY MIS">
            <MonthlyMisChart data={data.charts.monthlyMis} />
          </ChartCard>
        </div>
      </div>
    </main>
  );
}

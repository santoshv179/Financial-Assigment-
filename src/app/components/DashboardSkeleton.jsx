import React from 'react';

const SkeletonCard = () => <div className="bg-gray-200 rounded-lg h-32 animate-pulse"></div>;
const SkeletonSmallCard = () => <div className="bg-gray-200 rounded-lg h-16 w-32 animate-pulse"></div>;
const SkeletonChart = () => <div className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>;

const DashboardSkeleton = () => {
  return (
    <main className="bg-gray-100 p-8">
      {/* Top Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* Stats Bar Skeleton */}
      <div className="mt-8 bg-white p-4 rounded-lg flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="bg-gray-200 h-6 w-16 rounded-md animate-pulse"></div>
          <div className="bg-gray-200 h-6 w-16 rounded-md animate-pulse"></div>
        </div>
        <div className="flex space-x-4">
          <SkeletonSmallCard />
          <SkeletonSmallCard />
        </div>
      </div>

      {/* Charts Skeleton */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SkeletonChart />
        <SkeletonChart />
        <SkeletonChart />
      </div>
    </main>
  );
};

export default DashboardSkeleton;
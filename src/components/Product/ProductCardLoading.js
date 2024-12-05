import SkeletonLine from 'components/Skeleton/SkeletonLine';

export default function ProductCardLoading() {
  return (
    <div className="max-w-screen-sm bg-white rounded-lg">
      <div className="animate-pulse bg-gray-300 aspect-w-1 aspect-h-1 rounded-lg" />
      <div className="p-18px">
        <SkeletonLine className="mb-5px" />
        <SkeletonLine className="mb-5px" />
        <SkeletonLine className="w-1/3 mb-21px" />
        <div className="flex items-center justify-between gap-2">
          <SkeletonLine className="flex-grow" />
          <SkeletonLine className="w-1/3" />
        </div>
      </div>
    </div>
  )
}

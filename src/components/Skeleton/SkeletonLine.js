export default function SkeletonLine({ className }) {
  return (
    <div
      className={'animate-pulse bg-gray-300 h-5 rounded-lg ' + className}
    />
  );
}

export default function PriceTooltip({ active, label, payload, platform }) {
  if (active && payload && payload.length) {
    return (
      <div className="px-5 py-1.5 bg-secondary text-white text-12px leading-4 rounded-4px text-center">
        <p>{label.replaceAll('-', '/')}</p>
        <p>${payload[0].value}</p>
        <p>{platform}</p>
      </div>
    );
  }

  return null;
}

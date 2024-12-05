export default function PriceYAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        textAnchor="middle"
        fill="var(--color-primary)"
        fontSize={12}
        fontWeight={500}
      >
        ${payload.value}
      </text>
    </g>
  );
}

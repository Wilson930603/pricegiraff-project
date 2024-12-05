import { formatDate } from 'helpers';

export default function CustomXAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="var(--color-dark)"
        fontSize={12}
        fontWeight="normal"
      >
        {formatDate(payload.value)}
      </text>
    </g>
  );
}

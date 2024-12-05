import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import PriceTooltip from './PriceTooltip';
import PriceXAxisTick from './PriceXAxisTick';
import PriceYAxisTick from './PriceYAxisTick';

export default function PriceAreaChart({
  data = [],
  platform = '',
  showDate = true
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: -10
        }}
      >
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-primary)"
              stopOpacity={0.6}
            />
            <stop
              offset="95%"
              stopColor="var(--color-primary)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        {showDate && (
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickCount={14}
            tick={PriceXAxisTick}
          />
        )}
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={16}
          tickCount={6}
          tick={PriceYAxisTick}
        />
        <CartesianGrid vertical={false} stroke="var(--color-primary-border)" />
        <Tooltip content={<PriceTooltip platform={platform} />} />
        <Area
          type="monotone"
          dataKey="price"
          stroke="var(--color-primary)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPrice)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

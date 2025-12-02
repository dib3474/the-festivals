interface ChartTooltipProps {
  x: number;
  y: number;
  value: number;
}

export default function ChartTooltip({ x, y, value }: ChartTooltipProps) {
  const isTop = y < 40;
  const tooltipY = isTop ? y + 15 : y - 35;
  const textY = isTop ? y + 31 : y - 19;

  return (
    <g pointerEvents="none">
      <circle cx={x} cy={y} r={4} className="fill-[#ee5b2b] stroke-white" strokeWidth={2} />
      <rect x={x - 20} y={tooltipY} width={40} height={24} rx={4} className="fill-gray-800" />
      <text x={x} y={textY} textAnchor="middle" className="fill-white text-xs font-bold">
        {value}
      </text>
    </g>
  );
}

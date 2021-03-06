import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO } from "date-fns";

import { data } from "../../fixtures/cryptoData";

export default function StyledAreaChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6c5ecf" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#6c5ecf" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#6c5ecf" fill="url(#color)" />

          <XAxis
            dataKey="date"
            //axisLine={false}
            //tickLine={false}
            tickFormatter={(str, index) => {
              const date = parseISO(str);
              return format(date, "MMM, d");

              //if (index % 4 === 0) {
              //  return format(date, "MMM, d");
              //} else {
              //  return "";
              //}
            }}
          />

          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} USD</p>
      </div>
    );
  }
  return null;
}

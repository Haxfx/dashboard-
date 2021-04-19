import StyledAreaChart from "../../components/Charts/StyledAreaChart";
import { StyledBarChart } from "../../components/Charts/StyledBarChart";
import { StyledCandleStick } from "../../components/Charts/StyledCandleStick";
import { StyledComparisonChart } from "../../components/Charts/StyledComparisonChart";

export default function Index() {
  return (
    <>
      <StyledAreaChart />
      <StyledBarChart />
      <StyledComparisonChart />
      <StyledCandleStick />
    </>
  );
}

import StyledAreaChart from "../../components/Charts/StyledAreaChart";
import { StyledBarChart } from "../../components/Charts/StyledBarChart";
import { StyledComparisonChart } from "../../components/Charts/StyledComparisonChart";

export default function Index() {
  return (
    <>
      <StyledAreaChart />
      <StyledBarChart />
      <StyledComparisonChart />
    </>
  );
}

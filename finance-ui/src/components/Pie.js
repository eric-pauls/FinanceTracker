import React from "react";
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";

const Pie = ({ data }) => {
  function customizeText(arg) {
    return `$${arg.valueText} (${arg.percentText})`;
  }

  return (
    <>
      <PieChart
        id="pie"
        palette="Material"
        dataSource={data}
        title="Monthly Finances"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="center"
          columnCount={4}
        />
        <Export enabled={true} />
        <Series argumentField="category" valueField="total">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}
          >
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>
    </>
  );
};

export default Pie;

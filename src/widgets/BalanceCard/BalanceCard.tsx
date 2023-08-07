import { FC } from 'react';
import { css } from '@emotion/react';
import Card from 'components/Card/Card';
import { subTitleStyles, numberStyles } from './BalanceCard.styles';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import { BalanceCardProps } from './BalanceCard.d';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BalanceCard: FC<BalanceCardProps> = ({ balance }) => {
  return (
    <Card
      color="white"
      css={css`
        width: 400px;
        height: 300px;
        padding: 30px;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 62px;
          margin-bottom: 30px;
        `}
      >
        <span css={subTitleStyles}>Your balance</span>
        <span css={numberStyles}>{balance} USDT</span>
      </div>

      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={90}
          cy={100}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Card>
  );
};

export default BalanceCard;

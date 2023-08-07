import { FC } from 'react';
import { css } from '@emotion/react';
import Card from 'components/Card/Card';
import { subTitleStyles, numberStyles } from './HistoryCard.styles';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import { HistoryCardProps } from './HistoryCard.d';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HistoryCard: FC<HistoryCardProps> = ({ transactionHistory }) => {
  console.log(transactionHistory);
  return (
    <Card
      color="white"
      css={css`
        width: 250px;
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
        <span css={subTitleStyles}>History</span>
        {/* <span css={numberStyles}>{transactionHistory} USDT</span> */}
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          `}
        >
          {transactionHistory &&
            transactionHistory.slice(0, 6).map(
              (
                item: {
                  uniqueId: any;
                  blockNum: any;
                  from: any;
                  to: any;
                  value: any;
                  asset: any;
                  hash: any;
                },
                idx: any
              ) => (
                <div
                  key={idx}
                  css={css`
                    width: 100%;
                    height: 40px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 0px;
                  `}
                >
                  <span>{item.asset}</span>
                  <span>{item.value}</span>
                </div>
              )
            )}
        </div>
      </div>
    </Card>
  );
};

export default HistoryCard;

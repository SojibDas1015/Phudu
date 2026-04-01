import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Label,
    Tooltip,
} from 'recharts';
const Rechart = ({ showAppoitment }) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };
    const TriangleBar = (props) => {
        const { x, y, width, height, index } = props;

        const color = colors[index % colors.length];

        return (
            <path
                strokeWidth={props.isActive ? 5 : 0}
                d={getPath(Number(x), Number(y), Number(width), Number(height))}
                stroke={color}
                fill={color}
                style={{
                    transition: 'stroke-width 0.3s ease-out',
                }}
            />
        );
    };
    const CustomColorLabel = (props) => {
        const fill = colors[(props.index ?? 0) % colors.length];
        return <Label {...props} fill={fill} />;
    };
    return (
        <div className='flex justify-center bg-white p-6'>
            <BarChart
                style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
                data={showAppoitment}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <XAxis dataKey="name" />
                <YAxis  />
                <Bar dataKey="fee" fill="#8884d8" shape={TriangleBar} activeBar>
                    <LabelList content={CustomColorLabel} position="top" />
                </Bar>
            </BarChart>
        </div>
    );
};

export default Rechart;
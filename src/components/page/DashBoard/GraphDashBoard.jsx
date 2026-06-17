import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import useIssues from '../../../hooks/useIssues';

export default function MassBarChart() {
    const { issues } = useIssues();
    const allStatus = ['OPEN', 'IN_PROGRESS', 'CLOSED', 'IN_REVIEW', 'BACKLOG'];

    const filterState = issues.reduce((acc, current) => {
        acc[current.status] = (acc[current.status] || 0) + 1;
        return acc;
    }, {});

    const chartData = allStatus.map((status) => ({
        name: status,
        quantity: filterState[status] || 0
    }));

    const colors = {
        OPEN: '#4CAF50',
        IN_PROGRESS: '#2196F3',
        CLOSED: '#9E9E9E',
        IN_REVIEW: '#FFC107',
        BACKLOG: '#FF5722'
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '900px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <h3 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#333',
                fontSize: '18px',
                fontWeight: '600'
            }}>
                Распределение задач по статусам
            </h3>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    barGap={8}
                    barCategoryGap={16}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ fill: '#666', fontSize: 12 }}
                        axisLine={{ stroke: '#ddd' }}
                        tickLine={false}
                    />
                    <YAxis
                        label={{
                            value: 'Количество задач',
                            angle: -90,
                            position: 'insideLeft',
                            style: { fill: '#666', fontSize: 12 }
                        }}
                        tick={{ fill: '#666', fontSize: 12 }}
                        axisLine={{ stroke: '#ddd' }}
                        tickLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            padding: '10px'
                        }}
                        formatter={(value) => [`${value} задач`, 'Количество']}
                        labelFormatter={(label) => `Статус: ${label}`}
                    />
                    <Bar
                        dataKey="quantity"
                        barSize={48}
                        radius={[6, 6, 0, 0]}
                    >
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[entry.name] || '#8884d8'}
                                fillOpacity={0.85}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '20px',
                flexWrap: 'wrap'
            }}>
                {allStatus.map(status => (
                    <div key={status} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: colors[status],
                            borderRadius: '2px'
                        }} />
                        <span style={{ fontSize: '12px', color: '#666' }}>{status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
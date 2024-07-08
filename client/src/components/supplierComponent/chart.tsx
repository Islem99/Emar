

import { Icon } from '@iconify/react/dist/iconify.js';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
const Chart = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6767, 887, 775, 5644, 684];

    return (
        <div className="row">
            <div className="col-lg-6">

                <div className="chart-component">
                    <h5>Total Revenue</h5>
                    <p>AED 980,273.00</p>
                    <BarChart
                        borderRadius={10}
                        xAxis={[{
                            scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun', 'Jul', 'Aug', 'Sup', 'Oct', 'Nov ', 'Dec'], colorMap: {
                                type: 'piecewise',
                                thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                                colors: ['#39C64E']

                            }
                        }
                        ]
                        }
                        series={[{ data: uData, }]}
                        width={600}
                        height={300}

                    />
                </div>

            </div>
            <div className="col-lg-6">
                <div className="chart-component">

                    <p>Sales Report</p>
                    <LineChart
                        xAxis={[{
                            data: [1, 2, 3, 5, 8, 10], colorMap: {
                                type: 'piecewise',
                                thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                                colors: ['rgba(57, 198, 78, 0.16)'
                                ]

                            }
                        }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true,
                            },
                        ]}
                        width={600}
                        height={300}
                    />
                    <div className="d-flex gap-1 justify-content-end">
                        <button className='chart-button'>
                            <Icon icon="basil:document-solid" style={{ color: "white", marginRight: "8px" }} />  View sales details
                        </button>
                        <button className='chart-button'><Icon icon="fa:download" style={{ color: "white", marginRight: "8px" }} />Download Report</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chart
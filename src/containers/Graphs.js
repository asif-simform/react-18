import React from 'react'
import { LinearGauge, SparklineChart, SequentialLegend } from 'reaviz';

export const Graphs = () => {

    return (
        <React.Fragment>
            <h1>Graphs</h1>
            <br />
            <div>
                <LinearGauge
                    id="asif"
                    height={30}
                    width={300}
                    data={{
                        key: 'Risk Score',
                        data: [30, 35]
                      }}
                    center={true}
                    maxValue={100}
                />
                <br />
                <br />
                <br />
                <SparklineChart
                    width={200}
                    height={55}
                    colorScheme={['#ffadad', 'rgb(255, 111, 0)']}
                    data={[
                        {
                            id: '50',
                            key: new Date('2020-01-13T08:00:00.000Z'),
                            data: 16
                        },
                        {
                            id: '49',
                            key: new Date('2020-01-14T08:00:00.000Z'),
                            data: 44
                        },
                        {
                            id: '48',
                            key: new Date('2020-01-15T08:00:00.000Z'),
                            data: 12
                        },
                        {
                            id: '47',
                            key: new Date('2020-01-16T08:00:00.000Z'),
                            data: 26
                        },
                        {
                            id: '46',
                            key: new Date('2020-01-17T08:00:00.000Z'),
                            data: 41
                        },
                        {
                            id: '45',
                            key: new Date('2020-01-18T08:00:00.000Z'),
                            data: 25
                        },
                        {
                            id: '44',
                            key: new Date('2020-01-19T08:00:00.000Z'),
                            data: 24
                        },
                        {
                            id: '43',
                            key: new Date('2020-01-20T08:00:00.000Z'),
                            data: 23
                        },
                        {
                            id: '42',
                            key: new Date('2020-01-21T08:00:00.000Z'),
                            data: 26
                        },
                        {
                            id: '41',
                            key: new Date('2020-01-22T08:00:00.000Z'),
                            data: 21
                        },
                        {
                            id: '40',
                            key: new Date('2020-01-23T08:00:00.000Z'),
                            data: 32
                        },
                        {
                            id: '39',
                            key: new Date('2020-01-24T08:00:00.000Z'),
                            data: 11
                        },
                        {
                            id: '38',
                            key: new Date('2020-01-25T08:00:00.000Z'),
                            data: 33
                        },
                        {
                            id: '37',
                            key: new Date('2020-01-26T08:00:00.000Z'),
                            data: 3
                        },
                        {
                            id: '36',
                            key: new Date('2020-01-27T08:00:00.000Z'),
                            data: 7
                        },
                        {
                            id: '35',
                            key: new Date('2020-01-28T08:00:00.000Z'),
                            data: 8
                        },
                        {
                            id: '34',
                            key: new Date('2020-01-29T08:00:00.000Z'),
                            data: 9
                        },
                        {
                            id: '33',
                            key: new Date('2020-01-30T08:00:00.000Z'),
                            data: 7
                        },
                        {
                            id: '32',
                            key: new Date('2020-01-31T08:00:00.000Z'),
                            data: 9
                        },
                        {
                            id: '31',
                            key: new Date('2020-02-01T08:00:00.000Z'),
                            data: 50
                        },
                        {
                            id: '30',
                            key: new Date('2020-02-02T08:00:00.000Z'),
                            data: 19
                        },
                        {
                            id: '29',
                            key: new Date('2020-02-03T08:00:00.000Z'),
                            data: 48
                        },
                        {
                            id: '28',
                            key: new Date('2020-02-04T08:00:00.000Z'),
                            data: 15
                        },
                        {
                            id: '27',
                            key: new Date('2020-02-05T08:00:00.000Z'),
                            data: 42
                        },
                        {
                            id: '26',
                            key: new Date('2020-02-06T08:00:00.000Z'),
                            data: 29
                        },
                        {
                            id: '25',
                            key: new Date('2020-02-07T08:00:00.000Z'),
                            data: 40
                        },
                        {
                            id: '24',
                            key: new Date('2020-02-08T08:00:00.000Z'),
                            data: 34
                        },
                        {
                            id: '23',
                            key: new Date('2020-02-09T08:00:00.000Z'),
                            data: 4
                        },
                        {
                            id: '22',
                            key: new Date('2020-02-10T08:00:00.000Z'),
                            data: 24
                        },
                        {
                            id: '21',
                            key: new Date('2020-02-11T08:00:00.000Z'),
                            data: 1
                        },
                        {
                            id: '20',
                            key: new Date('2020-02-12T08:00:00.000Z'),
                            data: 35
                        },
                        {
                            id: '19',
                            key: new Date('2020-02-13T08:00:00.000Z'),
                            data: 26
                        },
                        {
                            id: '18',
                            key: new Date('2020-02-14T08:00:00.000Z'),
                            data: 8
                        },
                        {
                            id: '17',
                            key: new Date('2020-02-15T08:00:00.000Z'),
                            data: 30
                        },
                        {
                            id: '16',
                            key: new Date('2020-02-16T08:00:00.000Z'),
                            data: 5
                        },
                        {
                            id: '15',
                            key: new Date('2020-02-17T08:00:00.000Z'),
                            data: 8
                        },
                        {
                            id: '14',
                            key: new Date('2020-02-18T08:00:00.000Z'),
                            data: 1
                        },
                        {
                            id: '13',
                            key: new Date('2020-02-19T08:00:00.000Z'),
                            data: 36
                        },
                        {
                            id: '12',
                            key: new Date('2020-02-20T08:00:00.000Z'),
                            data: 25
                        },
                        {
                            id: '11',
                            key: new Date('2020-02-21T08:00:00.000Z'),
                            data: 34
                        },
                        {
                            id: '10',
                            key: new Date('2020-02-22T08:00:00.000Z'),
                            data: 42
                        },
                        {
                            id: '9',
                            key: new Date('2020-02-23T08:00:00.000Z'),
                            data: 38
                        },
                        {
                            id: '8',
                            key: new Date('2020-02-24T08:00:00.000Z'),
                            data: 23
                        },
                        {
                            id: '7',
                            key: new Date('2020-02-25T08:00:00.000Z'),
                            data: 10
                        },
                        {
                            id: '6',
                            key: new Date('2020-02-26T08:00:00.000Z'),
                            data: 16
                        },
                        {
                            id: '5',
                            key: new Date('2020-02-27T08:00:00.000Z'),
                            data: 26
                        },
                        {
                            id: '4',
                            key: new Date('2020-02-28T08:00:00.000Z'),
                            data: 45
                        },
                        {
                            id: '3',
                            key: new Date('2020-02-29T08:00:00.000Z'),
                            data: 39
                        },
                        {
                            id: '2',
                            key: new Date('2020-03-01T08:00:00.000Z'),
                            data: 38
                        },
                        {
                            id: '1',
                            key: new Date('2020-03-02T08:00:00.000Z'),
                            data: 17
                        }
                    ]}
                    margins={[2,2]}
                    // xAxisVisible={true}
                    // xScale={{ type: 'time', format: '%Y-%m-%d' }}
                    // yScale={{ type: 'linear' }}
                    // showXAxis
                    // showYAxis
                />
                <br />
                <br />
                <br />
                <SequentialLegend orientation="horizontal" data={[{
                    key: 'Foo',
                    data: 100
                  }, {
                    key: 'AS',
                    data: 20
                  },{
                    key: 'Bar',
                    data: 0
                  }]} 
                  colorScheme={['#ffadad', 'rgb(255, 111, 0)']}
                  />
                <br />
                <br />
                <br />
            </div>
        </React.Fragment>
    )
}
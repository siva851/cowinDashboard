// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormater = number => {
    if (number > 1000) {
      return '${(number/1000).toString()}k'
    }
    return number.toString()
  }
  const {VaccinationCoverageDetails} = props

  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={400}
        data={VaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineData"
          tick={{
            strocke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 12,
            fontFamily: 'roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            strocke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 12,
            fontFamily: 'roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'roboto',
          }}
        />

        <Bar
          cataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
        <Bar
          cataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage

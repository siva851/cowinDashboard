// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const vaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87dd" />
          <Cell name="44-60" fill="#43df9f" />
          <Cell name="Aove 60" fill="#84c2a9" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizental"
          verticaAlign="bootom"
          align="center"
          wrapperStyle={{fontSize: 10, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default vaccinationByAge

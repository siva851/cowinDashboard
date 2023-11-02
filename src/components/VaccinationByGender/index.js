// Write your code here
import {PieChart,Pie,Legend,Cell} from 'recharts'
import './index.css'

const vaccinationByGender=props=>{
    const {vaccinationByGenderDetails}=props

    return (
        <div className="vaccination-by-gender-container">
        <h1 className="vaccination-by-gender-heading">Vaccination by gender</h1>
        <PieChart width={300} height={300}>
        <Pie 
        cx="50%"
        cy="60%"
        data={vaccinationByGenderDetails}
        startAngle={180}
        endAngle={0}
        innerRadius="30%"
        outerRadius="60%"
        dataKey="count"
        >
        <Cell name="Male" fill="#f54394"/>
        <Cell name="FeMale" fill="#5a8dee"/>
        <Cell name="Others" fill="#2cc6c6"/>
        </Pie>
        <Legend 
        iconType="circle"
        layout="horizental"
        verticaAlign="bottom"
        align="center"
        wrapperStyle={{fontSize:10,fontFamily:'roboto'}}
        />
        </PieChart>
        </div>

    )
    
}

export default vaccinationByGender
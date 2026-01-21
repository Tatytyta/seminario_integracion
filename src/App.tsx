
import { useMemo, useState } from 'react'
import './App.css'
import { PayrollSummary } from './PayrollSummary'
import WorkDays from './WorkDays';

function App() {
  const [hours, setHours] = useState<number[]>([0,0,0,0,0])
  const rate = 5;

  const payroll = useMemo(()=> {
    const totalHours = hours.reduce((sum,h)=> sum+h,0);
    const extra = Math.max(0, totalHours-40);
    const pay = Math.min(totalHours,40) * rate + extra *1.5;
    return { totalHours, extra, pay}
  },[hours])

  return (
    <div>
      <WorkDays hours={hours} setHours={setHours}/>
      <PayrollSummary totalHours={payroll.totalHours} extra={payroll.pay} pay={payroll.pay}/>
    </div>
  )
}

export default App
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loading from "../../components/Loaders/Loading";
import Error from "../../components/Error/Error";


const DoctorBooking = () => {

  const {data:appointments, loading, error} = useFetchData(`${BASE_URL}doctors/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          appointments.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />)
        }
      </div>}

      {
        !loading && !error && appointments.length === 0 && <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primary">
          You do not have any therapist booked!</h2>
      }
    </div>
  )
}

export default DoctorBooking

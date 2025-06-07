import { InformationsAboutPlataform } from "../components/InformationsAboutPlataform";
import { ListCourses } from "../components/ListCourses";
import { ListTracks } from "../components/ListTracks";
import { ListUsers } from "../components/ListUsers";

export default function Dashboard() {
  return (
      <>
          <div>
            <InformationsAboutPlataform />
          </div>
  
          <div>
            <ListUsers />
            <ListCourses />
            <ListTracks />
          </div>
        </>
  );
}
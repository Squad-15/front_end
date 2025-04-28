import { InformationsAboutPlataform } from "../components/InformationsAboutPlataform";
import { ListCourses } from "../components/ListCourses";
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
          </div>
        </>
  );
}
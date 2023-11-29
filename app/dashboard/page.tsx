import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div>
      <Dropzone />
    </div>
  );
}

export default Dashboard;

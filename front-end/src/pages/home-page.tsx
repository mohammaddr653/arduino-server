import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";
import callManager from "../hooks/callManager";

const HomePage = () => {
  const { call, loading } = callManager();
  const [info, setInfo] = useState<any>([]);

  async function load() {
    const response = await call(axios.get(SERVER_URL + "/api"), true);
    if (response?.data?.data) {
      setInfo([...response.data.data]);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div className="bg-red-500">اطلاعات دریافتی</div>
      {info?.map((item: any, index: any) => {
        return <div key={index}>{item.spo2}</div>;
      })}
    </>
  );
};
export default HomePage;

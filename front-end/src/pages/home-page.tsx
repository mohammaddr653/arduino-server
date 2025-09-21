import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";
import callManager from "../hooks/callManager";
import "../assets/css/homepage.css";

const HomePage = () => {
  const { call, loading } = callManager();
  const [info, setInfo] = useState<any>([]);

  async function load() {
    const response = await call(axios.get(SERVER_URL + "/api"), false);
    if (response?.data?.data) {
      setInfo([...response.data.data]);
    }
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header></header>
      <main className="">
        <div className="homepage-container px-5 md:px-20 flex flex-col md:grid grid-cols-3 gap-5 pt-20">
          <div className="p-3 text-size15 leading-loose md:sticky top-5 h-fit flex gap-5 rounded-md border border-neutral-300">
            <p>اپراتور : رضا موسی زادگان</p>
            <p>شماره دانشجویی : 3991731069</p>
          </div>
          <div className="w-full col-span-2 overflow-hidden overflow-x-scroll hide-scrollbar border border-neutral-300 rounded-md">
            {info?.length ? (
              <table className="w-full text-right">
                <thead className="border-b border-neutral-300">
                  <tr className="">
                    <th className="p-2">تاریخ و زمان</th>
                    <th className="p-2">spo2</th>
                    <th className="p-2">bpm</th>
                  </tr>
                </thead>
                <tbody>
                  {[...info].reverse().map((item: any, index: any) => {
                    return (
                      <tr className="">
                        <td className="p-2">{item.date}</td>
                        <td className="p-2">{item.spo2}</td>
                        <td className="p-2">{item.bpm}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="p-2">هیچ دیتایی وجود ندارد</p>
            )}
          </div>
        </div>
      </main>
      <footer className="mt-auto text-neutral-600 text-size14 p-5 flex justify-center md:justify-start">
        طراحی سرور توسط محمد امین درخشنده | شماره تماس : 09377372231
      </footer>
    </>
  );
};
export default HomePage;

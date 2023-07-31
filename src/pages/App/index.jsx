import NotFound from "@/components/NotFound";
import pathRouting from "@/constants/routes";
import Challenge from "@/pages/Challenge";
import HomePage from "@/pages/HomePage";
import MyRecord from "@/pages/MyRecord";
import Notice from "@/pages/Notice";
import ColumnList from "@/pages/ColumnList";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path={pathRouting.root} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={pathRouting.record} element={<MyRecord />} />
        <Route path={pathRouting.challenge} element={<Challenge />} />
        <Route path={pathRouting.notice} element={<Notice />} />
        <Route path={pathRouting.columnList} element={<ColumnList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

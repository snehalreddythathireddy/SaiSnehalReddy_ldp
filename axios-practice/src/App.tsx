import AxiosGet from "./AxiosGet";
import AxiosPost from "./AxiosPost";
import AxiosPut from "./AxiosPut";
import AxiosPatch from "./AxiosPatch";
import AxiosDelete from "./AxiosDelete";
import AxiosLoadingError from "./AxiosLoadingError";
import AxiosParams from "./AxiosParams";
import AxiosHeaders from "./AxiosHeaders";
import AxiosInstance from "./AxiosInstance";
import AxiosInterceptors from "./AxiosInterceptors";

import AxiosCRUD from "./AxiosCRUD";

const App = () => {
  return (
    <div>
      <AxiosGet />

      <hr />

      <AxiosPost />

      <hr />

      <AxiosPut />

      <hr />

      <AxiosPatch />

      <hr />

      <AxiosDelete />

      <hr />

      <AxiosLoadingError />

      <hr />

      <AxiosParams />

      <hr />

      <AxiosHeaders />

      <hr />

      <AxiosInstance />

      <hr />

      <AxiosInterceptors />

      <hr />

      

      <hr />

      <AxiosCRUD />
    </div>
  );
};

export default App;
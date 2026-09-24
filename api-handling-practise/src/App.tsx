import PromiseAPI from "./practices/01_PromiseAPI";
import ThenCatchAPI from "./practices/02_ThenCatchAPI";
import PromiseChainingAPI from "./practices/03_PromiseChainingAPI";
import AsyncAwaitAPI from "./practices/04_AsyncAwaitAPI";
import TryCatchAPI from "./practices/05_TryCatchAPI";
import LoadingAPI from "./practices/06_LoadingAPI";
import UseEffectGetAPI from "./practices/07_UseEffectGetAPI";
import ReusableAPI from "./practices/08_ReusableAPI";
import PostAPI from "./practices/09_PostAPI";
import ReusablePostAPI from "./practices/10_ReusablePostAPI";
import UpdateAPI from "./practices/11_UpdateAPI";
import DeleteAPI from "./practices/12_DeleteAPI";
import GetDeleteAPI from "./practices/13_GetDeleteAPI";

const App = () => {
  return (
    <>
      <PromiseAPI />
      <ThenCatchAPI />
      <PromiseChainingAPI />
      <AsyncAwaitAPI />
      <TryCatchAPI />
      <LoadingAPI />
      <UseEffectGetAPI />
      <ReusableAPI />
      <PostAPI />
      <ReusablePostAPI />
      <UpdateAPI />
      <DeleteAPI />
      <GetDeleteAPI />
    </>
  );
};

export default App;
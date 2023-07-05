import { Ring } from '@uiball/loaders';

const Loader = () => {
  return (
      <div className="container-loader">
        <Ring size={40} lineWeight={5} speed={2} color="black" />
      </div>
  );
};

export default Loader;

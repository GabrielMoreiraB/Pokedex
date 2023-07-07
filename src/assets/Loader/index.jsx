import { Ring } from '@uiball/loaders';

const Loader = () => {
  return (
      <div className="container-loader">
        <Ring size={200} lineWeight={6} speed={2} color="black" />
      </div>
  );
};

export default Loader;

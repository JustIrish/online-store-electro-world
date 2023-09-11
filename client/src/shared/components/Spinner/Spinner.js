import { RotatingLines } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotatingLines
        strokeColor="#B4AEA7"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </div>
  );
};

export default Spinner;

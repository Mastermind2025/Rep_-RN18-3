import Counter from "./Counter/Counter";

export const App = () => {
  return (
    <>
    {/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div> */}
{/* initialvalue это prop - начальное значение */}
      <Counter initialValue={10} />
      
      </>
  );
};

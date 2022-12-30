const Home = ({children}) => {
    return (
      <div className="w-100 h-full min-h-screen bg-black">
        {children}
      </div>
    );
}
  
  
const Wrapper = ({children}) => {
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            {children}
        </div>
    );
}

const Card = ({children}) => {
    return ( 
        <div className="w-96 p-1 ">
            {children}
        </div>
        );
}


const BottomWrapper = ({children}) => {
    return (
        <div className="w-full h-auto bg-gray-800 flex flex-col p-3 space-y-4 rounded-b-md">
            {children}
        </div>
    );
}

const CardWrapper = ({children}) => {
    return (
        <div className="w-full h-auto flex flex-col space-y-2 ">
            {children}
        </div>
    );
}

export { Home, Wrapper, Card, BottomWrapper, CardWrapper }
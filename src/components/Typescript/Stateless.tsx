import React from 'react';

interface statelessProps {
  name?: string;
  age: number;
}

const Typescript = (props: statelessProps) => {
  return (
    <div className="stateless">
      {`Hello, my name is ${props.name} and I'm ${props.age} years old`}
    </div>
  );
};

Typescript.defaultProps = {
  name: 'unknown'
};

export default Typescript;

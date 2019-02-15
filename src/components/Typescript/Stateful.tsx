import React, { Component } from 'react';

export interface statefulProps {
  countryOfBirth?: string;
  isMarried: boolean;
}

export interface statefulState {
  yearOfBirth: number;
}

class Stateful extends Component<statefulProps, statefulState> {
  state = {
    yearOfBirth: 1994
  };

  public static defaultProps: Partial<statefulProps> = {
    countryOfBirth: 'unknown'
  };

  render() {
    return (
      <div className="stateful">
        {`I was born in ${this.props.countryOfBirth} in ${
          this.state.yearOfBirth
        } and I am ${this.props.isMarried ? 'married' : 'not married'}`}
      </div>
    );
  }
}

export default Stateful;
